//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

//     Backbone.js 1.2.1

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  root.EyeInBackbone = factory(root, {}, root._);

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = [].slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.1';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Underscore methods to a Backbone class' prototype using a
  // particular attribute as the data argument
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], iteratee, context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], iteratee, defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`), reducing them by manipulating `memo`.
  // Passes a normalized single event name and callback, as well as any
  // optional `opts`.
  var eventsApi = function(iteratee, memo, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        memo = iteratee(memo, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        memo = iteratee(memo, names[i], callback, opts);
      }
    } else {
      memo = iteratee(memo, name, callback, opts);
    }
    return memo;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // An internal use `on` function, used to guard the `listening` argument from
  // the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    // No events to consider.
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, it will be removed. When multiple events are
  // passed in using the space-separated syntax, the event will fire once for every
  // event you passed in, not once for a combination of all events
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : models.slice();
      var id, model, attrs, existing, sort;
      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;
      var orderChanged = false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (var i = 0; i < models.length; i++) {
        attrs = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(attrs)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge && attrs !== existing) {
            attrs = this._isModel(attrs) ? attrs.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (!model) continue;
        id = this.modelId(model.attributes);
        if (order && (model.isNew() || !modelMap[id])) {
          order.push(model);

          // Check to see if this is actually a new model at this index.
          orderChanged = orderChanged || !this.models[i] || model.cid !== this.models[i].cid;
        }

        modelMap[id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (var i = 0; i < this.length; i++) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || orderChanged) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (var i = 0; i < toAdd.length; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (var i = 0; i < orderedModels.length; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        var addOpts = at != null ? _.clone(options) : options;
        for (var i = 0; i < toAdd.length; i++) {
          if (at != null) addOpts.index = at + i;
          (model = toAdd[i]).trigger('add', model, this, addOpts);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      var matches = _.matches(attrs);
      return this[first ? 'find' : 'filter'](function(model) {
        return matches(model.attributes);
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    // Returns removed models, or false if nothing is removed.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 2,
      contains: 2, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3 };

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    if (!_[method]) return;
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window;
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
if (!("classList" in document.createElement("_"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

}


// Backbone.NativeAjax.js 0.4.1
// ---------------

//     (c) 2014 Adam Krebs, Paul Miller, Exoskeleton Project
//     Backbone.NativeAjax may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/akre54/Backbone.NativeAjax

(function (factory) {
  EyeInBackbone.ajax = factory();
}(function() {
  // Make an AJAX request to the server.
  // Usage:
  //   var req = Backbone.ajax({url: 'url', type: 'PATCH', data: 'data'});
  //   req.then(..., ...) // if Promise is set
  var ajax = (function() {
    var xmlRe = /^(?:application|text)\/xml/;
    var jsonRe = /^application\/json/;

    var getData = function(accepts, xhr) {
      if (accepts == null) accepts = xhr.getResponseHeader('content-type');
      if (xmlRe.test(accepts)) {
        return xhr.responseXML;
      } else if (jsonRe.test(accepts) && xhr.responseText !== '') {
        return JSON.parse(xhr.responseText);
      } else {
        return xhr.responseText;
      }
    };

    var isValid = function(xhr) {
      return (xhr.status >= 200 && xhr.status < 300) ||
        (xhr.status === 304) ||
        (xhr.status === 0 && window.location.protocol === 'file:')
    };

    var end = function(xhr, options, promise, resolve, reject) {
      return function() {
        updatePromise(xhr, promise);

        if (xhr.readyState !== 4) return;

        var status = xhr.status;
        var data = getData(options.headers && options.headers.Accept, xhr);

        // Check for validity.
        if (isValid(xhr)) {
          if (options.success) options.success(data);
          if (resolve) resolve(data);
        } else {
          var error = new Error('Server responded with a status of ' + status);
          if (options.error) options.error(xhr, status, error);
          if (reject) reject(xhr);
        }
      }
    };

    var updatePromise = function(xhr, promise) {
      if (!promise) return;

      var props = ['readyState', 'status', 'statusText', 'responseText',
        'responseXML', 'setRequestHeader', 'getAllResponseHeaders',
        'getResponseHeader', 'statusCode', 'abort'];

      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        promise[prop] = typeof xhr[prop] === 'function' ?
                              xhr[prop].bind(xhr) :
                              xhr[prop];
      }
      return promise;
    }

    return function(options) {
      if (options == null) throw new Error('You must provide options');
      if (options.type == null) options.type = 'GET';

      var resolve, reject, xhr = new XMLHttpRequest();
      var PromiseFn = ajax.Promise || (typeof Promise !== 'undefined' && Promise);
      var promise = PromiseFn && new PromiseFn(function(res, rej) {
        resolve = res;
        reject = rej;
      });

      if (options.contentType) {
        if (options.headers == null) options.headers = {};
        options.headers['Content-Type'] = options.contentType;
      }

      // Stringify GET query params.
      if (options.type === 'GET' && typeof options.data === 'object') {
        var query = '';
        var stringifyKeyValuePair = function(key, value) {
          return value == null ? '' :
            '&' + encodeURIComponent(key) +
            '=' + encodeURIComponent(value);
        };
        for (var key in options.data) {
          query += stringifyKeyValuePair(key, options.data[key]);
        }

        if (query) {
          var sep = (options.url.indexOf('?') === -1) ? '?' : '&';
          options.url += sep + query.substring(1);
        }
      }

      xhr.onreadystatechange = end(xhr, options, promise, resolve, reject);
      xhr.open(options.type, options.url, true);

      if(!(options.headers && options.headers.Accept)) {
        var allTypes = "*/".concat("*");
        var xhrAccepts = {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        };
        xhr.setRequestHeader(
          "Accept",
          options.dataType && xhrAccepts[options.dataType] ?
            xhrAccepts[options.dataType] + (options.dataType !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
            xhrAccepts["*"]
        );
      }

      if (options.headers) for (var key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
      if (options.beforeSend) options.beforeSend(xhr);
      xhr.send(options.data);

      options.originalXhr = xhr;

      updatePromise(xhr, promise);

      return promise ? promise : xhr;
    };
  })();
  return ajax;
}));

// Backbone.NativeView.js 0.2.2
// ---------------

//     (c) 2014 Adam Krebs, Jimmy Yuen Ho Wong
//     Backbone.NativeView may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/akre54/Backbone.NativeView

(function (factory) {
  factory(_, EyeInBackbone);
}(function (_, Backbone) {
  // Cached regex to match an opening '<' of an HTML tag, possibly left-padded
  // with whitespace.
  var paddedLt = /^\s*</;

  // Caches a local reference to `Element.prototype` for faster access.
  var ElementProto = (typeof HTMLElement !== 'undefined' && HTMLElement.prototype) || {};

  // Cross-browser event listener shims
  var elementAddEventListener = ElementProto.addEventListener || function(eventName, listener) {
    console.log(this);
    return this.attachEvent('on' + eventName, listener);
  }
  var elementRemoveEventListener = ElementProto.removeEventListener || function(eventName, listener) {
    return this.detachEvent('on' + eventName, listener);
  }

  // Find the right `Element#matches` for IE>=9 and modern browsers.
  var matchesSelector = ElementProto && ElementProto.matches ||
      ElementProto[_.find(['webkit', 'moz', 'ms', 'o'], function(prefix) {
        return !!ElementProto[prefix + 'MatchesSelector'];
      }) + 'MatchesSelector'] ||
      // Make our own `Element#matches` for IE8
      function(selector) {
        // We'll use querySelectorAll to find all element matching the selector,
        // then check if the given element is included in that list.
        // Executing the query on the parentNode reduces the resulting nodeList,
        // document doesn't have a parentNode, though.
        var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
        for (var i = 0, l = nodeList.length; i < l; i++) {
          if (nodeList[i] == this) return true;
        }
        return false;
      };

  // Cache Backbone.View for later access in constructor
  var BBView = Backbone.View;

  // To extend an existing view to use native methods, extend the View prototype
  // with the mixin: _.extend(MyView.prototype, Backbone.NativeViewMixin);
  Backbone.NativeViewMixin = {

    _domEvents: null,

    constructor: function() {
      this._domEvents = [];
      return BBView.apply(this, arguments);
    },

    $: function(selector) {
      return this.el.querySelectorAll(selector);
    },

    _removeElement: function() {
      this.undelegateEvents();
      if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
    },

    _setElement: function(element) {
      if (typeof element == 'string') {
        if (paddedLt.test(element)) {
          var el = document.createElement('div');
          el.innerHTML = element;
          this.el = el.firstChild;
        } else {
          this.el = document.querySelector(element);
        }
      } else {
        this.el = element;
      }
    },

    _setAttributes: function(attrs) {
      for (var attr in attrs) {
        attr in this.el ? this.el[attr] = attrs[attr] : this.el.setAttribute(attr, attrs[attr]);
      }
    },

    // Make a event delegation handler for the given `eventName` and `selector`
    // and attach it to `this.el`.
    // If selector is empty, the listener will be bound to `this.el`. If not, a
    // new handler that will recursively traverse up the event target's DOM
    // hierarchy looking for a node that matches the selector. If one is found,
    // the event's `delegateTarget` property is set to it and the return the
    // result of calling bound `listener` with the parameters given to the
    // handler.
    delegate: function(eventName, selector, listener) {
      if (_.isFunction(selector)) {
        listener = selector;
        selector = null;
      }

      var root = this.el, handler;
      if (!selector) handler = listener;
      else handler = function (e) {
        var node = e.target || e.srcElement;
        for (; node && node != root; node = node.parentNode) {
          if (matchesSelector.call(node, selector)) {
            e.delegateTarget = node;
            return listener.apply(this, arguments);
          }
        }
      };

      elementAddEventListener.call(root, eventName, handler, false);
      this._domEvents.push({eventName: eventName, handler: handler, listener: listener, selector: selector});
      return handler;
    },

    // Remove a single delegated event. Either `eventName` or `selector` must
    // be included, `selector` and `listener` are optional.
    undelegate: function(eventName, selector, listener) {
      if (_.isFunction(selector)) {
        listener = selector;
        selector = null;
      }

      var handlers = this._domEvents;

      if (this.el) {
        _(handlers).chain()
          .filter(function(item) {
            return item.eventName === eventName &&
              (listener ? item.listener === listener : true) &&
              (selector ? item.selector === selector : true);
          })
          .forEach(function(item) {
            elementRemoveEventListener.call(this.el, item.eventName, item.handler, false);
            handlers.splice(_.indexOf(handlers, item), 1);
          }, this);
      }
      return this;
    },

    // Remove all events created with `delegate` from `el`
    undelegateEvents: function() {
      if (this.el) {
        _.each(this._domEvents, function(item) {
          elementRemoveEventListener.call(this.el, item.eventName, item.handler, false);
        }, this);
        this._domEvents = [];
      }
      return this;
    }
  };

  Backbone.NativeView = Backbone.View.extend(Backbone.NativeViewMixin);

  return Backbone.NativeView;
}));

//     Eyein.js 2.2
//     Article enrichment plugin.
//     Mobli Media Inc.
//     Dependencies: underscore.js, backbone.js, backbone.nativeajax.js, backbone.nativeview.js, classList.js

(function() {
// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','eyeinga');
eyeinga('create', 'UA-65066775-2', 'auto');

// Overwrite View to use NativeView without jQuery
EyeInBackbone.View = EyeInBackbone.NativeView;

// Define `eyein` object structure and set some default parameters
window.eyein = {
  options: {
    version: '2.2', // Plugin version
    env: 'stg', // Plugin enviroment
    serverUrl: '', // API base URL
    baseUrl: '', // Path to plugin files
    pageUrl: '', // Containg page URL to send to API
    userId: 'anonymous', // User that embedded the plugin
    mediaLimit: 50, // No. of media to load for a story
    relatedString: '', // String for finding related items when there is no match
    adFrequency: 0,
    adOffset: 0,
    sideAdIndex: 0
  },
  endpoints: {
    statistics: 'publisher-statistics',
    report: 'report/anonymous',
    match: 'procedures/plugin',
    story: 'story',
    search: 'search/story'
  },
  mainStory: {}, // Main story model that is shown in the plugin
  mainView: {}, // Main view that interacts with containing page
  models: {}, // Backbone models
  views: {}, // Backbone views
  templates: {}, // Underscore templates
  utils: {}, // Helper functions
  strings: {}, // Localized strings
  userAgent: {
    ios: /(iPad|iPhone|iPod)/gi.test(navigator.userAgent),
    android: /android/gi.test(navigator.userAgent),
    firefox: /firefox/gi.test(navigator.userAgent),
    mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|android|iPad|iPhone|iPod|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)
      ||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)),
    ie: (!!window.ActiveXObject && +(/msie\s(\d+)/i.exec(navigator.userAgent)[1])) || NaN,
    mobileScreen: (screen.width < 430)
  }
};

// Plugin initialization - recieves `options` object
eyein.initialize = function(options) {
  options || (options = {});
  var self = this;
  var protocol = (window.location.protocol == 'file:') ? 'http:' : window.location.protocol;

  if (options.env)
    this.options.env = options.env;
  if (options.pageUrl)
    this.options.pageUrl = encodeURIComponent(options.pageUrl);
  else 
    this.options.pageUrl = encodeURIComponent(window.location.href.replace(/file:\/\//i, protocol + '://'));
  if
    (options.userId) this.options.userId = options.userId;
  if (!options.rows)
    options.rows = 2;
  if (!options.columns)
    options.columns = 3;
  if (options.relatedString)
    this.options.relatedString = options.relatedString;

  // Set plugin language
  this.strings = this.utils.languageStrings[options.lang || 'en'];

  // Set `serverUrl` and `baseUrl` according to chosen enviroment
  switch (this.options.env) {
    case 'int':
      this.options.serverUrl = protocol + '//api.int.eyein.com/v1/';
      this.options.baseUrl = protocol + '//eyein-plugin.s3.amazonaws.com/int/latest/';
      break;
    case 'stg':
      this.options.serverUrl = protocol + '//api.stg.eyein.com/v1/';
      this.options.baseUrl = protocol + '//eyein-plugin.s3.amazonaws.com/stage/latest/';
      break;
    case 'prd':
      this.options.serverUrl = protocol + '//api.eyein.com/v1/';
      this.options.baseUrl = protocol + '//cdn.eyein.com/plugin/versions/' + this.options.version + '/';
      break;
    default:
      this.options.serverUrl = protocol + '//api.stg.eyein.com/v1/';
      this.options.baseUrl = '';
  }

  eyein.utils.sendStatistic('page_load', 1);

  this.mainStory = new eyein.models.Story();

  // Set URL for initial plugin data: Get static payload if `jsonUrl` is supplied, otherwise make an API request.
  if (options.jsonUrl) {
    eyein.utils.jsonp(options.jsonUrl, 'callback', function(response) {
      self.mainStory.setModel(response);
      self.initializeViews(options);
    });
  }
  else {
    this.mainStory.url = this.options.serverUrl + this.endpoints.match +
      '?url=' + this.options.pageUrl +
      '&preview_size=' + options.rows*options.columns +
      '&limit=' + this.options.mediaLimit +
      '&blogger_id=' + encodeURIComponent(this.options.userId);

    if (options.storyId)
      this.mainStory.url += '&story_id=' + options.storyId;

    this.mainStory.fetch({
      success: function() {
        self.initializeViews(options);
      }
    });
  }
};

// Initialize plugin views and set parameters according to given options, if there is enough media for displaying.
eyein.initializeViews = function(options) {
  var self = this;

  // Check if there is enough media to display the plugin
  if (this.mainStory.mediaItems.length > options.rows*options.columns) {
    this.mainView = new eyein.views.Main({model: this.mainStory});
    if (options.width) this.mainView.preview.options.width = options.width;
    if (options.rows) this.mainView.preview.options.rows = options.rows;
    if (options.columns) this.mainView.preview.options.columns = options.columns;
    
    this.mainView.render();
  }
  else if (this.options.relatedString.length > 2) {
    // Related events preview
    this.mainView = new eyein.views.Main({model: this.mainStory});
    this.mainView.preview.contentTemplate = _.template(eyein.templates.preview.relatedContent);
    this.mainView.preview.relatedStories = new eyein.views.StoryItemList({collection: new eyein.models.Stories()});
    this.mainView.listenTo(this.mainView.preview.relatedStories, 'storylist:click',
      function(storyItem) {
        self.mainView.modal.changeStory(storyItem);
        self.mainView.modal.show();
        
        var label = storyItem.model.id;
        eyeinga(
          'send',
          'event',
          eyein.options.userId, // category
          'preview_related_clicked', // action
          label, // label
          1 // value
        );
      }
    );

    this.mainView.preview.relatedStories.collection.url = eyein.options.serverUrl + 'one?url=' + eyein.options.pageUrl; // For one.co.il
    this.mainView.preview.relatedStories.collection.fetch({reset: true, success: function() {
      if (self.mainView.preview.relatedStories.collection.length > 2) {
        self.mainView.render();
        eyeinga(
          'send',
          'event',
          eyein.options.userId, // category
          'related_preview_displayed', // action
          'no-story', // label
          1 // value
        );
      }
    }
  });
  }
  // Trigger events when resizing and scrolling the window
  window.addEventListener('resize', _.throttle(function() { EyeInBackbone.trigger('window:resize'); }, 30));
  window.addEventListener('scroll', _.throttle(function() { EyeInBackbone.trigger('window:scroll'); }, 30));
};

// Old initialization function (for backwards compatiblity) - calls new function with formatted parameters
eyein.init = function(url, rows, columns, width, theme, userId, lang) {
  var options = {};

  if (/^(f|ht)tps?:\/\//i.test(url)) {
    if (url.split('.').pop() == 'json')
      options.jsonUrl = url;
    else
      options.url = url;
  }
  else
    options.storyId = url;

  options.rows = rows;
  options.columns = columns;
  if (userId != '')
    eyein.options.userId = userId;
  if (lang)
    options.lang = lang;

  eyein.initialize(options);
};

// Models & Collections
// --------------------

// **Media item model** - holds all media data
eyein.models.MediaItem = EyeInBackbone.Model.extend({
  defaults: {
    likes_count: 0,
    image_url: '',
    original_url: '',
    title: '',
    social_id: '',
    comment_count: 0,
    type: '',
    social_network: '',
    user: {
      user_name: '',
      social_id: 0,
      profile_image: ''
    },
    created_at: 1400000000,
    is_active: true,
    has_metadata: false
  },
  initialize: function() {
    var self = this;

    // Instagram media needs metadata from oEmbed API
    if (this.get('social_network') == 'instagram') {
      var protocol = (window.location.protocol == 'file:') ? 'http:' : window.location.protocol;
      var oEmbedUrl = protocol + '//api.instagram.com/publicapi/oembed/?url=' + this.get('original_url');
      eyein.utils.jsonp(oEmbedUrl, function(response) {
        var userData = {
          user_name: response.author_name,
          social_id: response.author_id,
          profile_image: ''
        };

        self.set({
          title: response.title,
          user: userData,
          has_metadata: true
        });

        self.set('has_metadata', true);
      });
    }
    else {
      this.set('has_metadata', true);
    }
  }
});

// **Media item collection** - a collection of media items
eyein.models.MediaItems = EyeInBackbone.Collection.extend({
  model: eyein.models.MediaItem
});

// **Story model** - holds story data & a collection of media items belonging to the story
eyein.models.Story = EyeInBackbone.Model.extend({
  defaults: {
    id: '',
    title: '',
    story_type: '',
    start_time: 1400000000,
    stop_time: 1400000000
  },
  initialize: function(model) {
    this.mediaItems = new eyein.models.MediaItems();

    if (model)
      this.setModel(model);
  },
  parse: function(response) {
    if (response.message == 'SUCCESS') {
      this.setModel(response);
    }
  },
  setModel: function(model) {
      this.set(model.story);
      // Fill media collection from given JSON array
      this.mediaItems.reset(model.media);
  },
  clone: function() {
    var clone = EyeInBackbone.Model.prototype.clone.call(this);
    clone.mediaItems = this.mediaItems.clone();
    return clone;
  },
  setUrlId: function(storyId) {
    this.url = eyein.options.serverUrl + eyein.endpoints.story + '?story_id=' + storyId + '&preview_size=6&limit=' + eyein.options.mediaLimit;
  }
});

// **Story collection** - a collection of story models
eyein.models.Stories = EyeInBackbone.Collection.extend({
  model: eyein.models.Story,
  parse: function(response) {
    if (response.message == 'SUCCESS')
      return response.response_list;
  },
  setRelatedStoriesUrl: function(searchString) {
    this.url = eyein.options.serverUrl + eyein.endpoints.search +
    '?search_string=' + encodeURIComponent(searchString) +
    '&search_type=title';
  }
});

// Templates
// ---------

// Preview templates
eyein.templates.preview = {
  container:
    '<iframe src="about:blank" id="eyein-iframe" scrolling="no" style="width:1px; min-width:<%= width %>; border: 0px; height: 1px;"></iframe>',
  content:
    '<div id="eyein-preview" class="eyein-scope">' +
      '<div id="preview-header">' +
        '<h1><%= eyein.strings.pluginTitle %></h1>' +
        '<div id="view-all" class="basic-button"><%= eyein.strings.viewAll %></div>' +
      '</div>' +
    '</div>',
  relatedContent:
    '<div id="eyein-preview" class="eyein-scope">' +
      '<div id="preview-header">' +
        '<h1><%= eyein.strings.relatedStories %></h1>' +
      '</div>' +
      '<div id="related-stories"></div>' +
    '</div>',
};

// Modal templates
eyein.templates.modal = {
  container:
    '<div id="eyein-modal-container" style="display: none;">' +
      '<div id="eyein-modal" class="eyein-scope"></div>' +
    '</div>',
  content:
    '<div id="eyein-modal-header">' +
      '<div id="eyein-header-logo"><div class="eyein-white"></div></div>' +
      '<div id="eyein-title-container"><div>' +
        '<span></span><span></span>' + // Double span to allow marquee for long titles
      '</div></div>' +
      '<div id="eyein-close-modal" class="close-dark"></div>' +
    '</div>' +
    '<div id="eyein-modal-content">' +
      '<div id="eyein-story-media"></div>' +
      '<div id="eyein-expanded-media" class="mobile-hidden">' +
        '<div id="eyein-close-expanded-media" class="close-white mobile-block"></div>' + // Media close button for mobile
        '<div id="eyein-expanded-prev" class="expanded-arrow mobile-hidden chevron-dark"></div>' +
        '<div id="eyein-expanded-next" class="expanded-arrow mobile-hidden chevron-dark"></div>' +
      '</div>' +
      '<div id="eyein-mobile-indicator"></div>' +
    '</div>' +
    '<div id="eyein-related-stories">' +
      '<h3>Related Events & Trends</h3>' +
    '</div>' +
    '<a href="http://publishers.eyein.com/" target="_blank" id="eyein-powered-by">Powered by EYEIN</a>' +
    '<div id="eyein-main-ad"><div id="eyein-main-ad-placeholder"></div></div>' +
    '<div id="eyein-side-ad" class="advertisement"><div id="eyein-side-ad-placeholder"></div></div>'
};

// Alert popup template
eyein.templates.alerts = {
  confirmReport:
    '<div class="alert-close cancel close-dark"></div>' +
    '<h2><%= eyein.strings.reportTitle %></h2>' +
    '<p><%= eyein.strings.reportConfirm %></p>' +
    '<div class="report-reason">' +
      '<input type="radio" name="report-reason" value="offensive" id="reason-offensive"  style="margin: 5px;" checked>'+
      '<label for="reason-offensive"><%= eyein.strings.reportOffensive %></label><br>' +
      '<input type="radio" name="report-reason" value="irrelevant" id="reason-irrelevant" style="margin: 10px 5px;">' +
      '<label for="reason-irrelevant"><%= eyein.strings.reportIrrelevant %></label><br>' +
      '<input type="radio" name="report-reason" value="quality" id="reason-quality" style="margin: 5px;">' +
      '<label for="reason-quality"><%= eyein.strings.reportQuality %></label><br>' +
    '</div><br>' +
    '<button class="basic-button cancel"><%= eyein.strings.cancel %></button>' +
    '<button class="basic-button ok warn"><%= eyein.strings.report %></button>' +
    '<span class="media-id"><%= storyId %>/<%= mediaId %></span>',
  reported: 
    '<div class="alert-close cancel close-dark"></div>' +
    '<h2><%= eyein.strings.reportTitle %></h2>' +
    '<p><%= eyein.strings.reportSent %></p>' +
    '<button class="basic-button cancel"><%= eyein.strings.ok %></button>' +
    '<span class="media-id"><%= storyId %>/<%= mediaId %></span>'
};

// Modular media item parts, combined to form media items
eyein.templates.mediaItem = {
  // **Media header** contains user details and social network icon
  header:
    '<%' +
      'var networkUrl = "http://" + social_network;' +
      'networkUrl += (social_network == "vine") ? ".co/" : ".com/";' +
      'var userUrl = networkUrl;' +
      'if (social_network == "vine")' +
        'userUrl = user.social_id;' +
      'else if (social_network == "youtube")' +
        'userUrl += "channel/" + user.social_id;' +
      'else ' +
        'userUrl += user.user_name;' +
    '%>' +
    '<div class="media-header">' +
      '<a class="user-details" href="<%= userUrl %>" target="_blank">' +
        '<% if (social_network == "twitter") { %>' +
          '<div class="profile-picture" style="background-image: url(<%= user.profile_image %>)"></div>' +
        '<% } %>' +
        '<% if (social_network == "twitter") { %>' +
          '<span class="display-name"><%= user.user_screen_name %></span>' +
          '<span class="username-small">@<%= user.user_name %></span>' +
        '<% } else { %>' +
          '<span class="username"><%= user.user_name %></span>' +
        '<% } %>' +
      '</a>' +
      '<a class="social-icon <%= social_network %>-<%= headerTheme %>" href="<%= networkUrl %>" target="_blank"></a>' +
    '</div>',
  // **Media body** contains actual media
  body:
    '<div class="media-body">' +
      '<div class="ratio-keeper"></div>' +
      '<% var src = (lazyLoad) ? "data-src" : "src"; %>' +
      '<% if (type == "image") { %>' + 
        '<img <%= src %>="<%= image_url %>">' +
      '<% } else if (playVideo == "full") { %>' + 
        '<video <%= src %>="<%= video_url %>" preload="none" style="background-image: url(<%= image_url %>);" loop></video>' +
        '<div class="play-icon"></div>' +
      '<% } else if (playVideo == "image" || isMobile) { %>' +
        '<img <%= src %>="<%= image_url %>">' +
        '<div class="play-icon"></div>' +
      '<% } else if (playVideo == "silent") { %>' +
        '<video <%= src %>="<%= video_url %>" poster="<%= image_url %>" loop muted autoplay></video>' +
      '<% } %>' +
    '</div>',
  // **Media footer** contains timestamp, social sharing options and original link
  footer:
    '<div class="media-footer">' +
      '<% if (social_network != "instagram" && social_network != "vine") { %>' +
        '<span class="timestamp">' +
          '<%= eyein.utils.formatDate(created_at*1000) %>' +
        '</span>' +
      '<% } %>' +
      '<a class="footer-icon original-<%= footerTheme %>" href="<%= original_url %>" target="_blank"></a>' +
      '<div class="social-data">' +
        '<% if (social_network == "mobli") { %>' +
          '<span class="footer-icon like-<%= footerTheme %>"></span>' +
          '<span class="footer-icon comment-<%= footerTheme %>"></span>' +
        '<% } else if (social_network == "twitter") { %>' +
          '<span class="footer-icon reply reply-<%= footerTheme %>"></span>' +
          '<span class="footer-icon retweet retweet-<%= footerTheme %>"></span>' +
          '<span class="footer-icon favorite like-<%= footerTheme %>"></span>' +
        '<% } %>' +
        '<div class="footer-icon report"></div>' +
      '</div>' +
    '</div>'
};

// Basic media item template
eyein.templates.basicMediaItem = 
  '<div class="media-container">' +
    eyein.templates.mediaItem.body +
    '<div class="media-overlay">' +
      eyein.templates.mediaItem.header +
      '<p class="media-title">' +
        '<% if (title) { %>' +
          '<%= title.length > 150 ? title.substring(0, 150) + "..." : title %>' +
        '<% } %>' +
      '</p>' +
    '</div>' +
  '</div>' +
  eyein.templates.mediaItem.footer;

// Media item container for embedded videos
eyein.templates.embeddedMediaItem = 
  '<div class="media-embed <%= social_network %>">' + 
    '<%= embedHtml %>' +
  '</div>' +
  eyein.templates.mediaItem.footer;

// Story item template
eyein.templates.storyItem = 
  '<div class="ratio-keeper" style="background-image: url(<%= image_url %>)"></div>' +
  '<div class="story-details">' +
    '<span><%= title %></span>' +
  '</div>';

// Views
// -----

// **Media item view** - modular view for displaying media items
eyein.views.MediaItem = EyeInBackbone.View.extend({
  tagName: 'div',
  className: 'media-item',
  template: _.template(eyein.templates.basicMediaItem),
  embeddedTemplate: _.template(eyein.templates.embeddedMediaItem),
  events: {
    'click .media-container' : 'mediaClicked',
    'click .favorite' : 'twitterFavorite',
    'click .retweet' : 'twitterRetweet',
    'click .reply' : 'twitterReply',
    'click .facebook' : 'shareFacebook',
    'click .twitter' : 'shareTwitter',
    'click .report' : 'reportMedia'
  },
  initialize: function(options) {
    options || (options = {});
    this.options = {
      playVideo: (options.playVideo) ? options.playVideo : 'image',
      lazyLoad: (options.lazyLoad) ? options.lazyLoad : false,
      imageCover: (options.imageCover) ? options.imageCover : false,
    };

    // Add listener to display details when metadata has loaded
    this.listenTo(this.model, 'change:has_metadata', this.render);
  },
  render: function() {
    var self = this;
    // Media item is an embedded video
    if (this.options.playVideo == 'full' && (this.model.get('social_network') == 'vine' || this.model.get('social_network') == 'youtube')) {
      this.el.innerHTML = this.embeddedTemplate(_.extend(
        this.model.toJSON(), {
          playVideo: this.options.playVideo,
          isMobile: eyein.userAgent.mobile,
          headerTheme: 'white',
          footerTheme: 'gray',
          embedHtml: this.model.get('embeded_html')
        }
      ));

      // Add `audio=1` parameter to vine embed URL to prevent auto-mute
      if (this.model.get('social_network') == 'vine')
        this.$('iframe')[0].src += '?audio=1';
    }
    // Media item is a regular image/video
    else {
      this.el.innerHTML = this.template(_.extend(
        this.model.toJSON(), {
          playVideo: this.options.playVideo,
          lazyLoad: this.options.lazyLoad,
          isMobile: eyein.userAgent.mobile,
          headerTheme: 'white',
          footerTheme: 'gray'
        }
      ));

      // Add video class if needed to show controls and such
      if (this.model.get('type') == 'video')
        this.el.classList.add('video-item');
      else
        this.el.classList.remove('video-item');

      // Remove any previous classes
      this.el.classList.remove('play-video');

      // Load media if it was already loaded
      if (this.el.classList.contains('media-loaded'))
        this.loadMedia();

      // Add listener to display media when image / video is loaded
      if (this.model.get('type') == 'image' || this.options.playVideo == 'image') {
        this.$('.media-body img')[0].addEventListener('load', function() { self.mediaLoaded(); });
        this.$('.media-body img')[0].addEventListener('error', function() { self.mediaLoadError(); });
      }
      else if (this.model.get('type') == 'video' && !eyein.userAgent.mobile) {
        this.$('.media-body video')[0].addEventListener('loadeddata', function() { self.mediaLoaded(); });
        this.$('.media-body video')[0].addEventListener('error', function() { self.mediaLoadError(); });
      }
      else
        this.mediaLoaded();
    }
  },
  mediaLoaded: function() {
    var img = this.$('.media-body img')[0];
    if (img && img.width > img.height) {
      if (this.options.imageCover)
        this.el.classList.remove('wide-media');
      else
        this.el.classList.add('wide-media');
    }
    else {
      if (this.options.imageCover)
        this.el.classList.add('wide-media');
      else
        this.el.classList.remove('wide-media');
    }

    this.loadMedia();
    this.el.classList.add('media-loaded');
    this.trigger('media:loaded', this);
  },
  loadMedia: function() {
    if ((this.model.get('type') == 'image' || this.options.playVideo == 'image')) {
      var src = this.$('.media-body img')[0].getAttribute('data-src');
      if (src) {
        this.$('.media-body img')[0].src = src;
        this.$('.media-body img')[0].removeAttribute('data-src');
      }
    }
    else if (this.model.get('type') == 'video' && !eyein.userAgent.mobile) {
      var src = this.$('.media-body video')[0].getAttribute('data-src');
      if (src) {
        this.$('.media-body video')[0].src = src;
        this.$('.media-body video')[0].removeAttribute('data-src');
      }
    }
  },
  mediaLoadError: function() {
  },
  mediaClicked: function(e) {
    // Trigger `media:click` event, if click target is not on a link
    if (e.target.tagName != 'A' && e.target.parentElement.tagName != 'A')
      this.trigger('media:click', this);

    // If the media item is a full video, play the video on click
    if (this.model.get('type') == 'video' && this.options.playVideo == 'full') {
      var video = this.$('video')[0];

      if (video.paused) {
        video.play();
        this.el.classList.add('play-video');
      }
      else {
        video.pause();
        this.el.classList.remove('play-video');
      } 
    }
  },
  openWindow: function(url) {
    window.open(url, 'Share', 'width=550,height=420,top=200,left=300');
  },
  reportMedia: function() {
    EyeInBackbone.trigger('media:report', this.model);
  },
  twitterFavorite: function() {
    this.openWindow('https://twitter.com/intent/favorite?tweet_id=' + this.model.get('social_id'));
  },
  twitterRetweet: function() {
    this.openWindow('https://twitter.com/intent/retweet?tweet_id=' + this.model.get('social_id'));
  },
  twitterReply: function() {
    this.openWindow('https://twitter.com/intent/tweet?in_reply_to=' + this.model.get('social_id'));
  },
});

// **Full media item view** - Displays the full media & all associated data
eyein.views.FullMediaItem = eyein.views.MediaItem.extend({
  className: 'media-item full-media-item'
});

// **Media item list view** - generic view that contains media item views
eyein.views.MediaItemList = EyeInBackbone.View.extend({
  tagName: 'div',
  className: 'media-list',
  initialize: function(options) {
    var self = this;
    options || (options = {});
    this.options = {
      limit: (options.limit) ? options.limit : 100,
      playVideo: (options.playVideo) ? options.playVideo : 'image',
      adFrequency: (options.adFrequency) ? options.adFrequency : 0,
      adOffset: (options.adOffset) ? options.adOffset : 1,
      lazyLoad: (options.lazyLoad) ? options.lazyLoad : false,
      imageCover: (options.imageCover) ? options.imageCover : false
    };
    this.mediaItemViews = [];
    this.totalLength = 0;

    this.reset();
  },
  reset: function() {
    // Create an array of `MediaItem` views
    _.each(this.mediaItemViews, function(mediaItemView) {
      mediaItemView.remove();
    });
    this.mediaItemViews = [];
    this.el.innerHTML = '';
    _.each(this.collection.first(this.options.limit), function(mediaItem, index) {
      this.mediaItemViews[index] = new eyein.views.MediaItem(
        {
          model: mediaItem,
          playVideo: this.options.playVideo,
          lazyLoad: this.options.lazyLoad,
          imageCover: this.options.imageCover
        });
      this.listenTo(this.mediaItemViews[index], 'media:click', this.mediaClicked);
    }, this);
  },
  render: function() {
    this.totalLength = 0;
    _.each(_.first(this.mediaItemViews, this.options.limit), function(mediaItemView, index) {

      if (index > 0 && (index - this.options.adOffset) % this.options.adFrequency == 0) {
        this.el.insertAdjacentHTML('beforeend', '<div class="advertisement"></div>');
        this.totalLength++;
      }

      // Render & insert media item view
      mediaItemView.render();
      this.el.appendChild(mediaItemView.el);
      this.totalLength++;
    }, this);
  },
  mediaClicked: function(mediaItemView) {
    var mediaIndex = this.collection.indexOf(mediaItemView.model);
    this.trigger('medialist:click', mediaIndex);
  }
});

// **Preview view** - injected into the `#eyein-plugin` element in the containing webpage
eyein.views.Preview = EyeInBackbone.View.extend({
  iframe: null, // Holds the containing iframe
  document: null, // Holds the document object of the iframe
  containerTemplate: _.template(eyein.templates.preview.container),
  contentTemplate: _.template(eyein.templates.preview.content),
  events: {
    'click #view-all' : 'viewAllClicked'
  },
  initialize: function(options) {
    options || (options = {});
    this.options = {
      rows: (options.rows) ? options.rows : 2, // Number of rows in preview
      columns: (options.columns) ? options.columns : 3, // Number of columns in preview
      width: (options.width) ? options.width : '100%', // Width of preview (CSS value)
    };

    this.impressionSent = false; // Was the `true_impression` statistic sent already

    this.initSubviews();
  },
  initSubviews: function() {
    // Media item list sub-view
    this.mediaItemList = new eyein.views.MediaItemList({collection: this.model.mediaItems, playVideo: 'silent', imageCover: true});
  },
  render: function() {
    var self = this;

    // Empty iframe of any default browser-generated content
    this.document.head.innerHTML = '';
    this.document.body.innerHTML = '';

    // Set css with version param for cache busting, and insert base content from template
    this.document.head.insertAdjacentHTML('beforeend',
      '<link rel="stylesheet"' +
      'href="' + eyein.options.baseUrl +
      'style.css?v=' + eyein.options.version +
      '" type="text/css">');
    this.addThemeStyles();

    this.document.body.innerHTML = this.contentTemplate();

    // Set the created `#preview` div as the view's `el`
    this.el = this.document.getElementById('eyein-preview');

    // Adjust iframe height according to content once CSS is loaded
    var cssCheck = setInterval(function() {
      if (self.document.styleSheets.length > 0) {
        clearInterval(cssCheck);
        self.setHeight();

        // Set height again after delay for stupid browsers like firefox
        _.delay(function() { self.setHeight(); }, 500);
      }
    }, 10);

    // Set `isLoaded` to indicate the iframe has already been loaded
    this.iframe.contentWindow.isLoaded = true;

    // Attach events to created DOM elements
    this.delegateEvents();

    // Recalculate iframe height when window is resized
    this.listenTo(EyeInBackbone, 'window:resize', this.setHeight);
    // Check visibilty when scrolling page (for statistics)
    this.listenTo(EyeInBackbone, 'window:scroll', this.checkVisibility);

    this.renderSubviews();
  },
  renderSubviews: function() {
    var self = this;

    // render related stories if available, otherwise render media items
    if (this.relatedStories) {
      // Render & append related stories
      // Remove current story from returned related stories
      self.relatedStories.collection.remove(self.relatedStories.collection.get(self.model.get('id')));

      self.relatedStories.reset();
      self.relatedStories.render();
      self.setHeight();
    this.$('#related-stories')[0].appendChild(this.relatedStories.el);
    }
    else {
      this.mediaItemList.options.limit = this.options.rows*this.options.columns;
      this.mediaItemList.render();
      this.mediaItemList.el.className = 'media-list ' + 'cols-' + this.options.columns;
      this.el.appendChild(this.mediaItemList.el);

      eyein.utils.sendStatistic('preview_displayed', 1, this.model.get('id'));

      // Send statistics - media items that appear in preview
      _.each(this.mediaItemList.collection.first(this.mediaItemList.options.limit), function(media) {
        eyein.utils.sendStatistic('preview_media_displayed', 1, self.model.get('id'), media.get('social_id'));
      });
    }
  },
  setHeight: function() {
    // Set container to current height to prevent sudden vertical jump
    this.iframe.parentElement.style.height = this.iframe.style.height;
    // Make iframe height 1px in order to calculate the content height correctly
    this.iframe.style.height = '1px';
    // Set the correct height according to content
    var contentHeight = this.document.body.scrollHeight + 'px';
    this.iframe.parentElement.style.height = contentHeight;
    this.iframe.style.height = contentHeight;

    this.checkVisibility();
  },
  viewAllClicked: function() {
    this.trigger('viewall:click');
    eyein.utils.sendStatistic('preview_button_clicked', 1, this.model.get('id'));
  },
  addThemeStyles: function() {
    // To be overriden by eyein theme files
  },
  checkVisibility: function() {
    var self = this;
    var visibilityForImpression = 0.66;

    if (!this.impressionSent) {
      // Calculate what portion of the preview is visible on screen
      function calcVisibility() {
        var rect = self.iframe.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var fullArea = (rect.bottom - rect.top) * (rect.right - rect.left);
        var visibleArea = (Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)) * (Math.min(rect.right, windowWidth) - Math.max(rect.left,0));
        return visibleArea/fullArea;
      }

      if (calcVisibility() > visibilityForImpression) {
        _.delay(function() {
          if (!this.impressionSent && calcVisibility() > visibilityForImpression) {
            eyein.utils.sendStatistic('preview_true_impression', 1);
            this.impressionSent = true;
          }
        }, 2000);
      }
    }
  }
});

// **Story item view** - simple view that diplays a story
eyein.views.StoryItem = EyeInBackbone.View.extend({
  tagName: 'div',
  className: 'story-item',
  template: _.template(eyein.templates.storyItem),
  events: {
    'click .story-details' : 'storyClicked'
  },
  render: function() {
    var self = this;
    this.el.innerHTML = this.template({
      title: this.model.get('title'),
      image_url: this.model.mediaItems.first().get('image_url')
    });
  },
  storyClicked: function(e) {
    // Trigger `story:click` event
    this.trigger('story:click', this.model);
  }
});

// **Story item list view** - generic view that contains story item views
eyein.views.StoryItemList = EyeInBackbone.View.extend({
  tagName: 'div',
  className: 'story-list',
  initialize: function(options) {
    this.options = {
      adIndex: (options.adIndex) ? options.adIndex : -1
    };

    this.storyItemViews = [];

    this.reset();
  },
  reset: function() {
    // Create an array of `StoryItem` views
    _.each(this.storyItemViews, function(storyItemView) {
      storyItemView.remove();
    });
    this.storyItemViews = [];
    this.collection.each(function(storyItem, index) {
      this.storyItemViews[index] = new eyein.views.StoryItem({model: storyItem});
      this.listenTo(this.storyItemViews[index], 'story:click', this.storyClicked);
    }, this);
  },
  render: function() {
    _.each(this.storyItemViews, function(storyItemView, index) {
      if (index == this.options.adIndex)
        this.el.appendChild(document.getElementById('eyein-side-ad'));
      storyItemView.render();
      this.el.appendChild(storyItemView.el);
    }, this);
  },
  storyClicked: function(storyItem) {
    this.trigger('storylist:click', storyItem);
  }
});

// **Alert view** - manages alert views & popups in the plugin
eyein.views.Alert = EyeInBackbone.View.extend({
  className: 'alert-window',
  events: {
    'click .cancel, .ok' : 'close'
  },
  render: function() {
    this.el.innerHTML = this.template();
  },
  open: function() {
    this.el.classList.add('visible');
  },
  close: function() {
    this.el.classList.remove('visible');
    this.trigger('alert:close');
  }
});

// **Confirm report alert view** - popup view that is used to report offensive media
eyein.views.ConfirmReportAlert = eyein.views.Alert.extend({
  template: _.template(eyein.templates.alerts.confirmReport),
  events: _.extend({
    'click .ok' : 'reportMedia',
  }, eyein.views.Alert.prototype.events),
  render: function() {
    this.el.innerHTML = this.template({storyId: eyein.mainView.modal.model.get('id'), mediaId: this.model.get('social_id')});
  },
  reportMedia: function() {
    var self = this;
    var storyId = eyein.mainView.modal.model.get('id');

    // Configure and send report POST request
    var postData = 'story_id=' + storyId +
      '&media_id=' + this.model.get('social_id') +
      '&reason=' + this.$('input[name=report-reason]:checked')[0].value;

    EyeInBackbone.ajax({
      url: eyein.options.serverUrl + eyein.endpoints.report,
      type: 'POST',
      dataType: 'html',
      contentType: 'application/x-www-form-urlencoded',
      data: postData,
      success: function(response) {
        console.log('media reported');
        // Save `social_id` to cookie in order to deter repeated reporting by the same user
        var newCookie = eyein.utils.getCookie('eyein-' + storyId) + self.model.get('social_id') + '+';
        eyein.utils.setCookie('eyein-' + storyId, newCookie, 10);

        _.delay(function() {EyeInBackbone.trigger('media:report', self.model);}, 200);
      }
    });
  }
});

// **Reported alert view** - popup view that is shown when media was already reported
eyein.views.ReportedAlert = eyein.views.Alert.extend({
  template: _.template(eyein.templates.alerts.reported),
  render: function() {
    this.el.innerHTML = this.template({storyId: eyein.mainView.modal.model.get('id'), mediaId: this.model.get('social_id')});
  }
});

// **Alert container view** - manages alert views & popups in the plugin
eyein.views.AlertContainer = EyeInBackbone.View.extend({
  id: 'eyein-alert-container',
  alertViews: [],
  initialize: function() {
    // Listen to alert requests
    this.listenTo(EyeInBackbone, 'media:report', this.report);
  },
  pushAlert: function(alertView) {
    this.el.appendChild(alertView.el);
    this.alertViews.push(alertView);

    // If no alerts are visible yet, fade in background
    if (this.alertViews.length == 1) {
      this.el.style.display = 'block';
      this.el.classList.add('visible');
    }
    // Render & show the view
    alertView.render();
    alertView.open();

    // Listen to close event
    this.listenTo(alertView, 'alert:close', this.popAlert);
  },
  popAlert: function() {
    var self = this;
    var alertView = this.alertViews.pop();
    _.delay(function() { alertView.remove(); }, 200);

    // If there are no more alerts, fade out background
    if (this.alertViews.length == 0) {
      _.delay(function() { self.el.style.display = 'none'; }, 200);
      this.el.classList.remove('visible');
    }
  },
  empty: function() {
    var self = this;
    _.each(this.alertViews, function() { self.popAlert(); });
  },
  report: function(mediaItem) {
    // Check cookies to see if media was already reported by the user.
    // If not - show alert to confirm report
    var storyId = eyein.mainView.modal.model.get('id');
    var reportedMedia = eyein.utils.getCookie('eyein-' + storyId);

    if (reportedMedia.split('+').indexOf(mediaItem.get('social_id')) > -1)
      var alertView = new eyein.views.ReportedAlert({model: mediaItem});
    else
      var alertView = new eyein.views.ConfirmReportAlert({model: mediaItem});

    this.pushAlert(alertView);
  }
});

// **Modal view** - floating modal that overlays the containing webpage
eyein.views.Modal = EyeInBackbone.View.extend({
  containerTemplate: _.template(eyein.templates.modal.container),
  template: _.template(eyein.templates.modal.content),
  events: {
    'click #eyein-close-modal' : 'hide',
    'click #eyein-close-expanded-media' : 'hideExpandedMedia',
    'click #eyein-expanded-prev' : 'showPrevMedia',
    'click #eyein-expanded-next' : 'showNextMedia'
  },
  initialize: function() {
    var self = this;
    // Statistics variables
    this.isOpen = false;
    this.modalTimer = 0;
    this.mediaTimer = 0;
    this.previousMediaIndex = -1;
    this.currentMediaIndex = -1;
    this.currentGalleryIndex = -1;
    this.mediaItemHeight = 0;
    this.containerHeight = 0;

    // Media item size (changes according to display size)
    this.mediaSize = 500;

    // Adsnative holder
    this.mainAdPlacement = 0;

    this.alertContainer = new eyein.views.AlertContainer();
    _.bindAll(this, 'renderContent');
    
    this.initSubviews();

    // Listen to window resizing
    var checkMobile = _.debounce(function() { self.checkMobile(); }, 150);
    this.listenTo(EyeInBackbone, 'window:resize', function(){
      self.checkTitleOverflow();
      checkMobile();
    });
    this.listenTo(this, 'modal:contentloaded', function(){
      self.checkMobile();
      self.checkWhichItemIsScrolled();
      _.delay(function() {self.checkMobile();}, 100);
    });

    this.addThemeListeners();
  },
  initSubviews: function() {
    var self = this;
    // Initialize sub-views
    this.mediaItemList = new eyein.views.MediaItemList({collection: this.model.mediaItems, lazyLoad: true});
    this.relatedStories = new eyein.views.StoryItemList({collection: new eyein.models.Stories()});
    this.expandedMedia = new eyein.views.FullMediaItem({playVideo: 'full'});

    // Listen to content clicks
    this.listenTo(this.mediaItemList, 'medialist:click', this.showExpandedMedia);
    this.listenTo(this.relatedStories, 'storylist:click', function(storyItem) {
      // Hide related bar
      self.$('#eyein-related-stories')[0].classList.remove('visible')

      // Send statistics
      eyeinga(
        'send',
        'event',
        eyein.options.userId, // category
        'modal_related_clicked', // action
        storyItem.id, // label
        1 // value
      );

      // Stop statistics timers & send result
      if (self.firstStory) {
        var now = new Date().getTime();
        self.firstStoryTimeSpent = now - self.modalTimer;
        self.firstStory = false;
      }

      eyeinga(
        'send',
        'event',
        eyein.options.userId, // category
        'story_media_seen', // action
        self.model.id, // label
        self.storyMediaCounter // value
      );

      self.storyMediaCounter = 1;

      self.changeStory(storyItem);
    });
  },
  render: function() {
    var self = this;

    this.el.innerHTML = this.template(this.model.toJSON());

    // Append subviews
    this.el.appendChild(this.alertContainer.el);
    this.$('#eyein-story-media')[0].appendChild(this.mediaItemList.el);
    this.$('#eyein-related-stories')[0].appendChild(this.relatedStories.el);
    this.$('#eyein-expanded-media')[0].appendChild(this.expandedMedia.el);

    // Add scroll listener to pause title marquee animation (performance issue)
    var isScrolling = false;

    var throttledScrollCheck = _.bind(_.throttle(self.checkWhichItemIsScrolled, 100), self)
    var throttledInitializeScrollArray = _.throttle(_.bind(self.initializeScrollArray,self),500)
    this.$('#eyein-story-media')[0].addEventListener('scroll', function(e) {

      if (!isScrolling) {
        isScrolling = true;
        self.$('#eyein-title-container span')[0].style.webkitAnimationPlayState = 'paused';
        self.$('#eyein-title-container span')[1].style.webkitAnimationPlayState = 'paused';
      }

      //initiate scrollArray to check which media is visible
      if(self.scrollArray.length==0) {
        throttledInitializeScrollArray();
      } else {
        // Check what media is currently visible on mobile devices, for statistics
        throttledScrollCheck();
      }
      // Trigger scroll event
      self.trigger('storymedia:scroll');
    }); 
    this.$('#eyein-story-media')[0].addEventListener('scroll', _.debounce(function() {
      isScrolling = false;
      self.$('#eyein-title-container span')[0].style.webkitAnimationPlayState = 'running';
      self.$('#eyein-title-container span')[1].style.webkitAnimationPlayState = 'running';
    }, 100));
  },
  renderContent: function() {
    var self = this;

    // Render story title
    _.each(this.$('#eyein-title-container span') , function(element) {
      element.innerHTML = self.model.get('title');
    });
    this.checkTitleOverflow();
    
    // Render & append related stories
    this.relatedStories.collection.setRelatedStoriesUrl(this.model.get('title'));
    this.relatedStories.collection.fetch({reset: true, success: function() {
      if (self.relatedStories.collection.length > 1) {
        // Remove current story from returned related stories
        self.relatedStories.collection.remove(self.relatedStories.collection.get(self.model.get('id')));

        self.relatedStories.reset();
        self.relatedStories.render();
        self.$('#eyein-related-stories')[0].classList.add('visible'); // DDDDDDDD
        self.$('#eyein-modal-content')[0].classList.add('with-sidebar'); // DDDDDDDD
      }
    }});

    // Render & append media list
    this.mediaItemList.reset();
    this.mediaItemList.render();
    this.mediaItemList.el.classList.add('cols-1');

    // Attach events to created DOM elements
    this.delegateEvents();

    // Send statistics - media items that appear in preview
    this.mediaItemList.collection.each(function(media) {
      eyein.utils.sendStatistic('modal_media_displayed', 1, self.model.get('id'), media.get('social_id'));
    });

    this.trigger('modal:contentloaded');
  },
  addThemeListeners: function() {
    // To be overriden by theme file
  },
  checkTitleOverflow: function() {
    this.scrollArray = [];
    // Apply modal title marquee animation if needed (for long titles)
    var title = this.$('#eyein-title-container')[0];
    var offset = title.offsetWidth - this.$('#eyein-title-container span')[0].offsetWidth;
    if (offset < 0)
      title.classList.add('marquee');
    else
      title.classList.remove('marquee');
  },
  showPrevMedia: function() {
    if (this.currentGalleryIndex > 0)
      this.scrollGallery(this.currentGalleryIndex-1);
  },
  showNextMedia: function() {
    if (this.currentGalleryIndex < this.mediaItemList.totalLength-1)
      this.scrollGallery(this.currentGalleryIndex+1);
  },
  showExpandedMedia: function(index) {
    var adFrequency = 0;
    var adOffset = 0;
    var noOfAds = 0;

    if (this.mediaItemList.options.adFrequency) {
      adFrequency = this.mediaItemList.options.adFrequency + 1;
      adOffset = this.mediaItemList.options.adOffset;
      noOfAds = (index < adOffset) ? 0 : Math.floor((index - adOffset) / (adFrequency)) + 1;
    }
      
    this.scrollGallery(index + noOfAds, true);
  },
  scrollGallery: function(index, forceScroll) {
    var self = this;

    // Change expanded media if a different media is clicked
    if (forceScroll || index != this.currentGalleryIndex || index == 0) {
      this.currentGalleryIndex = index;

      var adFrequency = 0;
      var adOffset = 0;
      var noOfAds = 0;

      if (this.mediaItemList.options.adFrequency) {
        adFrequency = this.mediaItemList.options.adFrequency + 1;
        adOffset = this.mediaItemList.options.adOffset;
        noOfAds = (index < adOffset) ? 0 : Math.floor((index - adOffset) / (adFrequency)) + 1;
      }

      // Check if current index is ad or media
      if (index > 0 && adFrequency && (index - adOffset) % (adFrequency) == 0) {
        // Hide expanded media & do animation
        this.expandedMedia.el.classList.add('hidden');
        var translateString = 'translateX(' + (-(this.mediaSize/2) - index*this.mediaSize) + 'px)';
        self.mediaItemList.el.style.transform = translateString;
        self.mediaItemList.el.style['-webkit-transform'] = translateString;

        _.delay(function() {
          // Keep media hidden
          self.expandedMedia.el.classList.add('hidden');
        }, 300);

        // Unmark all items in list
        _.each(eyein.mainView.modal.mediaItemList.el.childNodes, function(element) {
            element.classList.remove('selected');
        });

        // Mark selected item
        this.mediaItemList.$('.advertisement')[noOfAds-1].classList.add('selected');

        // Move ad to place
        this.mediaItemList.$('.advertisement')[noOfAds-1].appendChild(this.$('#eyein-main-ad')[0]);
      }
      else {
        // Move ad to place if it is next
        if ((index+1 - adOffset) % (adFrequency) == 0)
          this.mediaItemList.$('.advertisement')[noOfAds].appendChild(this.$('#eyein-main-ad')[0]);

        var mediaIndex = index - noOfAds;
        var mediaItem = this.model.mediaItems.at(mediaIndex);

        // Hide expanded media, do animation and show again
        if (!this.expandedMedia.el.classList.contains('hidden'))
          this.expandedMedia.el.classList.add('hidden');

        var translateString = 'translateX(' + (-(this.mediaSize/2) - index*this.mediaSize) + 'px)';
        self.mediaItemList.el.style.transform = translateString;
        self.mediaItemList.el.style['-webkit-transform'] = translateString;

        _.delay(function() {
          if (self.expandedMedia.el.classList.contains('hidden')) {
            self.expandedMedia.el.classList.remove('hidden');
            self.expandedMedia.render();
          }
        }, 300);

        this.expandedMedia.el.classList.remove('media-loaded');
        this.expandedMedia.model = mediaItem;

        // Unmark all items in list
        _.each(eyein.mainView.modal.mediaItemList.el.childNodes, function(element) {
            element.classList.remove('selected');
        });

        // Mark selected item
        var mediaItemView = this.mediaItemList.mediaItemViews[mediaIndex];
        mediaItemView.el.classList.add('selected');
        var scrollTo = mediaItemView.el.offsetTop;
        eyein.utils.smoothScroll(self.$('#eyein-story-media')[0], scrollTo - 30, 200);

        // On mobile, display full view for video
        if (mediaItem.get('type') == 'video')
          this.$('#eyein-expanded-media')[0].classList.remove('mobile-hidden');
        else
          this.$('#eyein-expanded-media')[0].classList.add('mobile-hidden');
      }

      // Mark arrows disabled if reached eadge of media list
      if (index == 0)
        this.$('#eyein-expanded-prev')[0].classList.add('disabled');
      else if (index == this.mediaItemList.totalLength-1)
        this.$('#eyein-expanded-next')[0].classList.add('disabled');
      else {
        this.$('#eyein-expanded-prev')[0].classList.remove('disabled');
        this.$('#eyein-expanded-next')[0].classList.remove('disabled');
      }
    }
  },
  hideExpandedMedia: function() {
    this.$('#eyein-expanded-media')[0].classList.add('mobile-hidden');
    var videoEl = this.$('#eyein-expanded-media video')[0];
    if (videoEl) {
      videoEl.load();
      videoEl.pause();
      this.$('#eyein-expanded-media .media-item')[0].classList.remove('play-video');
    }
    else {
      var iframeUrl = this.$('#eyein-expanded-media iframe')[0].src;
      this.$('#eyein-expanded-media iframe')[0].src = '';
      this.$('#eyein-expanded-media iframe')[0].src = iframeUrl;
    }
  },
  changeStory: function(storyItem) {
    var self = this;

    this.currentGalleryIndex = -1;
    this.currentMediaIndex = -1;
    this.previousMediaIndex = -1;

    // Move ads so they will not be deleted
    this.el.appendChild(this.$('#eyein-main-ad')[0]);
    //this.el.appendChild(this.$('#eyein-side-ad')[0]);

    this.model.setUrlId(storyItem.get('id'));
    this.model.fetch({success: function() {
      self.renderContent();
      self.initializeScrollArray();
      self.checkWhichItemIsScrolled();
      self.showExpandedMedia(0);
      self.relatedStories.el.scrollTop = 0;

      // Hide mobile expanded view
      self.$('#eyein-expanded-media')[0].classList.add('mobile-hidden');
    }});
    document.getElementById('eyein-related-stories').scrollTop = 0;
  },
  initializeScrollArray: function() {
    var self = this;

    this.scrollArray = [];
    var list = this.$("#eyein-story-media .media-list")[0].childNodes;
    var listOffset = list[0].offsetTop;
    var adCounter = 0;

    _.each(list, function(element, index, list) {
      if (element.classList.contains('advertisement'))
        adCounter++;

      self.scrollArray[index] = {
        index: index,
        mediaIndex: (index - adCounter),
        top: element.offsetTop - listOffset
      };
    });

    var rectContainer = this.$('#eyein-story-media')[0].getBoundingClientRect();
    this.containerHeight = rectContainer.height - 130;
    this.currentGalleryIndex = -1;
  },
  searchScrollArray: function(position){
    for(i = 0; i< this.scrollArray.length; i++){
      if (position < this.scrollArray[i].top){
        return this.scrollArray[i-1];
      }
    }
    return this.scrollArray[this.scrollArray.length-1];
  },
  checkWhichItemIsScrolled: function() {
    if (eyein.userAgent.isDesktop) {
      _.each(this.mediaItemList.mediaItemViews, function(mediaItem) {
        mediaItem.loadMedia();
      });
    }
    else {
      var scrollPosition = - (this.mediaItemList.el.getBoundingClientRect().top - 120);
      var scrollPositionWithOffset = Math.floor(this.containerHeight/2 + scrollPosition);
      var scrolledItem = this.searchScrollArray(scrollPositionWithOffset);
      var index = (scrolledItem) ? scrolledItem.index : 0;

      this.previousMediaIndex = this.currentMediaIndex;
      this.currentMediaIndex = (scrolledItem) ? scrolledItem.mediaIndex : 0;

      // If the media is in one column, apply lazy loading (otherwise load everything)
      var itemsToLoad = this.mediaItemList.mediaItemViews;
      if (!this.$('#eyein-story-media')[0].classList.contains('no-lazy')) {
        var firstLoad = this.currentMediaIndex;
        if (this.currentMediaIndex > 0)
          firstLoad -= 1;

        itemsToLoad = itemsToLoad.slice(firstLoad, this.currentMediaIndex+4);
      }

      _.each(itemsToLoad, function(mediaItem) {
        mediaItem.loadMedia();
      });

      if (this.currentGalleryIndex != index) {
        this.currentGalleryIndex = index;

        if (this.mediaItemList.options.adFrequency) {
          // Move ad to place if it is or next
          var adFrequency = this.mediaItemList.options.adFrequency + 1;
          var adOffset = this.mediaItemList.options.adOffset;
          var noOfAds = (index < adOffset) ? 0 : Math.floor((index - adOffset) / (adFrequency)) + 1;

          if ((index+1 - adOffset) % (adFrequency) == 0)
            this.mediaItemList.$('.advertisement')[noOfAds].appendChild(this.$('#eyein-main-ad')[0]);
          else if ((index - adOffset) % (adFrequency) == 0)
            this.mediaItemList.$('.advertisement')[noOfAds-1].appendChild(this.$('#eyein-main-ad')[0]);
        }
      }
    }
  },
  show: function(mediaIndex) {
    var self = this;

    // Start statistics timers & counters
    self.modalTimer = new Date().getTime();
    self.mediaTimer = new Date().getTime();

    self.firstStory = true;
    self.mediaCounter = 1;

    // Reset the model
    var modelJSON = {
      story: eyein.mainStory.toJSON(),
      media: eyein.mainStory.mediaItems.toJSON()
    }
    this.model.setModel(modelJSON);
    this.renderContent();
    this.el.parentElement.style.display = 'block';
    this.el.parentElement.classList.add('eyein-modal-open');
    this.checkTitleOverflow();
    this.checkWhichItemIsScrolled();

    if (this.model.mediaItems.length)
      this.showExpandedMedia(mediaIndex || 0);

    // Hide mobile expanded view
    this.$('#eyein-expanded-media')[0].classList.add('mobile-hidden');

    // Initialize ads
    if (this.mainAdPlacement) {
      this.mainAdPlacement.fetchAd(function(status) {
        if (status)
          self.mainAdPlacement.displayAd('eyein-main-ad-placeholder');
      });
    }
    if (this.sideAdPlacement) {
      this.sideAdPlacement.fetchAd(function(status) {
        if (status)
          self.sideAdPlacement.displayAd('eyein-side-ad-placeholder');
      });
    }

    // Mobile Safari native scrolling hack
    this.$('#eyein-story-media')[0].style['-webkit-overflow-scrolling'] = 'auto';
    _.delay(function() {
      self.$('#eyein-story-media')[0].style['-webkit-overflow-scrolling'] = 'touch';
    }, 100);

    eyein.utils.sendStatistic('modal_opened', 1, eyein.mainStory.get('id'));

    this.isOpen = true;
  },
  hide: function() {
    var self = this;
    this.scrollArray = [];
    // Stop statistics timers & send result
    var now = new Date().getTime();
    var modalOpenTime = now - this.modalTimer;

    eyein.utils.sendStatistic('modal_time_spent', modalOpenTime, eyein.mainStory.id);

    var now = new Date().getTime();

    if (self.firstStory) {
      // If still on the first story, calculate `first_story_time_spent`
      this.firstStoryTimeSpent = now - self.modalTimer;
    }
    else {
      // If not on the first story, calculate `related_stories_time_spent`
      var relatedStoriesTimeSpent = now - self.firstStoryTimeSpent - self.modalTimer;
      if (relatedStoriesTimeSpent < 5*60*1000) {
        eyeinga(
          'send',
          'event',
          eyein.options.userId, // category
          'related_stories_time_spent', // action
          self.model.id, // label
          relatedStoriesTimeSpent // value
        );
      }
    }

    // send `first_story_time_spent` in any case
    if (this.firstStoryTimeSpent < 5*60*1000) {
      eyeinga(
        'send',
        'event',
        eyein.options.userId, // category
        'first_story_time_spent', // action
        self.model.id, // label
        this.firstStoryTimeSpent // value
      );
    }

    eyeinga(
      'send',
      'event',
      eyein.options.userId, // category
      'story_media_seen', // action
      self.model.id, // label
      self.storyMediaCounter // value
    );

    // Move ads so they will not be deleted
    this.el.appendChild(this.$('#eyein-main-ad')[0]);
    this.el.appendChild(this.$('#eyein-side-ad')[0]);

    this.el.parentElement.classList.remove('eyein-modal-open');
    
    _.delay(function() {
      self.el.parentElement.style.display = 'none';

      // Reset subviews
      self.alertContainer.empty();
      self.$('#eyein-modal-content')[0].className = '';
      self.$('#eyein-related-stories')[0].className = '';
      self.mediaItemList.el.innerHTML = '';
      self.relatedStories.el.innerHTML = '';
      self.expandedMedia.el.innerHTML = '';
    }, 200);

    this.isOpen = false;
  },
  checkMobile: function() {
    var mobileIndicator = this.$('#eyein-mobile-indicator')[0];
    eyein.userAgent.isDesktop = (window.document.defaultView.getComputedStyle(mobileIndicator).getPropertyValue('z-index') == '0');
    if (eyein.userAgent.isDesktop) {
      this.setMediaSize();
    }
    else {
      this.expandedMedia.el.style.width = '';
      this.$('#eyein-expanded-media')[0].style.width = '';
      _.each(this.$('#eyein-story-media .media-item'), function(mediaItem) {
        mediaItem.style.width = '';
      });
    }
  },
  setMediaSize: function() {
    var self = this;
    this.mediaSize = this.$('#eyein-modal-content')[0].offsetHeight - 100;
    // Set minimum media size
    if (this.mediaSize < 400)
      this.mediaSize = 400;

    this.expandedMedia.el.style.width = this.mediaSize + 'px';
    this.$('#eyein-expanded-media')[0].style.width = (this.mediaSize + 150) + 'px';
    this.$('#eyein-expanded-prev')[0].style.top = (this.mediaSize / 2) + 'px';
    this.$('#eyein-expanded-next')[0].style.top = (this.mediaSize / 2) + 'px';

    var translateString = 'translateX(' + (-(this.mediaSize/2) - this.currentGalleryIndex*this.mediaSize) + 'px)';
    self.mediaItemList.el.style.transform = translateString;
    self.mediaItemList.el.style['-webkit-transform'] = translateString;

    _.each(this.$('#eyein-story-media .media-item, #eyein-story-media .advertisement'), function(mediaItem) {
      mediaItem.style.width = self.mediaSize + 'px';
    });
  }
});

// **Main container view** - creates preview & modal views
eyein.views.Main = EyeInBackbone.View.extend({
  preview: {},
  modal: {},
  el: '#eyein-plugin',
  initialize: function() {
    var self = this;

    // Create preview & modal sub-views
    this.preview = new eyein.views.Preview({model: this.model});

    // Clone story model for modal to allow browsing related stories without affecting the preview
    this.modal = new eyein.views.Modal({model: this.model.clone()});

    // Listen to media clicks to open the modal view
    this.listenTo(this.preview.mediaItemList, 'medialist:click', function(mediaIndex) {
      self.modal.show(mediaIndex);
      eyein.utils.sendStatistic('preview_media_clicked', 1, self.model.get('id'), self.model.mediaItems.at(mediaIndex).get('social_id'));
    });
    this.listenTo(this.preview, 'viewall:click', function() { self.modal.show(); });
  },
  render: function() {
    var self = this;

    // Inject adsNative code to containing webpage
    window._AdsNativeOpts = { blockAdLoad: true };

    var script = document.createElement('script');
    var loaded;
    script.setAttribute('type','text/javascript');
    script.setAttribute('src', '//static.adsnative.com/static/js/render.v1.js');
    script.onreadystatechange = script.onload = function() {
      if (!loaded) {
        self.modal.mainAdPlacement = new AdsNative('GpMgm7qHcawgK1gNu4qDUHC-GX20zFHiqMVGV0kD');
        self.modal.sideAdPlacement = new AdsNative('Nf1I_2LNDoegRK48QJ7Cet-m2xG9zMlOQoQYLYuq');
      }
      loaded = true;
    };
    document.getElementsByTagName('head')[0].appendChild(script);

    // Inject eyein CSS to containing webpage (with version param for cache busting)
    window.document.head.insertAdjacentHTML('beforeend',
      '<link rel="stylesheet"' + 
      'href="' + eyein.options.baseUrl +
      'style.css?v=' + eyein.options.version +
      '" type="text/css">');
    // Custom theme styles
    self.addThemeStyles();

    // **Preview view rendering**

    // Create preview iframe & insert into the plugin holder
    if(self.el){
      self.el.innerHTML = self.preview.containerTemplate({width: '100%'});
      self.preview.iframe = self.$('#eyein-iframe')[0];
      self.preview.document = self.preview.iframe.contentWindow.document;

      // Insert content into created iframe
      if(!(eyein.userAgent.firefox || eyein.userAgent.ie <= 10))
        self.preview.render();

      // Firefox & IE 9 need to wait for the iframe load event
      self.preview.iframe.addEventListener('load', function() {
        if (!self.preview.iframe.contentWindow.isLoaded) {
          self.preview.document = self.preview.iframe.contentWindow.document;
          self.preview.render();
        }
      });

      // **Modal view rendering**
      document.body.insertAdjacentHTML('beforeend', self.modal.containerTemplate());
      self.modal.el = document.getElementById('eyein-modal');
      self.modal.render();

      // Background clicks close the modal view
      document.getElementById('eyein-modal-container').addEventListener('click', function(e) {
        if (e.target.id == 'eyein-modal-container')
          self.modal.hide();
      });

      // Listen to arrow key presses to navigate in the expanded view
      window.addEventListener("keydown", function(e) {
        if (self.modal.isOpen) {
          if (e.keyCode == 37)
            self.modal.showPrevMedia();
          else if (e.keyCode == 39)
            self.modal.showNextMedia();
          else if (e.keyCode == 27)
            self.modal.hide();
        }
      }, false);
      this.preview.iframe.contentWindow.addEventListener("keydown", function(e) {
        if (self.modal.isOpen) {
          if (e.keyCode == 37)
            self.modal.showPrevMedia();
          else if (e.keyCode == 39)
            self.modal.showNextMedia();
          else if (e.keyCode == 27)
            self.modal.hide();
        }
      }, false);
    }
  },
  addThemeStyles: function() {
    // To be overriden by eyein theme files
  }
});

// Utilities & Helpers
// -------------------

// **JSONP Getter**
eyein.utils.jsonp = function(url, cbname, callback) {
  url = url || '';
  cbname = cbname || '';
  callback = callback || function() {};

  if (typeof cbname == 'function') {
    callback = cbname;
    cbname = '';
  }

  if (cbname == '')
    var generatedFunction = 'callback' + Math.floor((Math.random() * 10000) + 1);
  else
    var generatedFunction = cbname;

  window[generatedFunction] = function(json) {
    callback(json);
    delete window[generatedFunction];
  };

  if (url.indexOf('?') === -1) { url = url+'?'; }
  else { url = url+'&'; }

  var script = document.createElement('script');
  var done = false;
  script.src = url+'callback='+generatedFunction;
  script.async = true;

  script.onerror = function() { callback(false); };
  script.onload = script.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true;
      script.onload = script.onreadystatechange = null;
      if (script && script.parentNode)
        script.parentNode.removeChild(script);
    }
  };

  head = document.getElementsByTagName('head')[0].appendChild(script);
};

// ** Cookie setter **
eyein.utils.setCookie = function(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires;
};

// ** Cookie getter **
eyein.utils.getCookie = function(name) {
  name += '=';
  var ca = document.cookie.split(';');
  for (var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
};

// ** Date formatter ** - formats timestamp for displaying as a readable date
eyein.utils.formatDate = function(timestamp) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var time = new Date(timestamp);
    var mins = time.getMinutes();
    var hours = time.getHours();
    mins = (mins < 10) ? '0' + mins : mins;
    hours = (hours < 10) ? '0' + hours : hours;
    return hours+':'+mins+' - '+time.getDate()+' '+months[time.getMonth()]+' '+time.getFullYear();
};

// ** Smooth scroll helper ** - scrolls a given element with animation
eyein.utils.smoothScroll = function(element, target, duration) {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject("bad duration");
  }
  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  var start_time = Date.now();
  var end_time = start_time + duration;

  var start_top = element.scrollTop;
  var distance = target - start_top;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  var smooth_step = function(start, end, point) {
    if(point <= start) { return 0; }
    if(point >= end) { return 1; }
    var x = (point - start) / (end - start); // interpolation
    return x*x*(3 - 2*x);
  }

  return new Promise(function(resolve, reject) {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    var previous_top = element.scrollTop;

    // This is like a think function from a game loop
    var scroll_frame = function() {
      if(element.scrollTop != previous_top) {
        //reject("interrupted");
        return;
      }

      // set the scrollTop for this frame
      var now = Date.now();
      var point = smooth_step(start_time, end_time, now);
      var frameTop = Math.round(start_top + (distance * point));
      element.scrollTop = frameTop;

      // check if we're done!
      if(now >= end_time) {
        resolve();
        return;
      }

      // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if(element.scrollTop === previous_top
        && element.scrollTop !== frameTop) {
        resolve();
        return;
      }
      previous_top = element.scrollTop;

      // schedule next frame for execution
      setTimeout(scroll_frame, 0);
    }

    // boostrap the animation process
    setTimeout(scroll_frame, 0);
  });
};

// ** Statistic sender ** - sends statistics to API & google
eyein.utils.sendStatistic = function(type, value, storyId, mediaId) {
  if (value < 5*60*1000) {
    var os = 'other';
    if (eyein.userAgent.ios)
      os = 'ios';
    else if (eyein.userAgent.android)
      os = 'android';

    var postData =
      'action_type=' + type +
      '&action_value=' + value +
      '&blogger_id=' + eyein.options.userId +
      '&article_id=' + eyein.options.pageUrl +
      '&device_type=' + (eyein.userAgent.mobile ? 1 : 0) +
      '&os=' + os;

    if (!storyId && eyein.mainStory.get)
      storyId = eyein.mainStory.get('id');
    if (storyId)
      postData += '&story_id=' + storyId;
    if (mediaId)
      postData += '&media_id=' + mediaId;

    EyeInBackbone.ajax({
      url: eyein.options.serverUrl + eyein.endpoints.statistics,
      type: 'POST',
      dataType: 'html',
      contentType: 'application/x-www-form-urlencoded',
      data: postData,
      success: function(response) {
        //console.log('stats sent');
        //console.log(response);
      }
    });

    // Send non-media stats to google as well
    if (!mediaId) {
      var label = storyId ? storyId : 'no-story';
      eyeinga(
        'send',
        'event',
        eyein.options.userId, // category
        type, // action
        label, // label
        value // value
      );
    }
  }
};

// **Localization strings** - strings in different languages, can be changed with `lang` option
eyein.utils.languageStrings = {
  en: {
    pluginTitle: 'Your take on this',
    viewAll: 'view all',
    viewOriginal: 'view original',
    viewEvent: 'view story',
    reportTitle: 'Report Offensive Media',
    reportConfirm: 'Why is this media inappropriate?',
    reportSent: 'We have recieved your report and will remove this post if necessary.',
    cancel: 'cancel',
    report: 'report',
    ok: 'ok',
    relatedStories: 'Related Stories',
    reportOffensive: 'Offensive Content',
    reportIrrelevant: 'Irrelevant Content',
    reportQuality: 'Bad Quality'
  },
  he: {
    pluginTitle: '&#1492;&#1514;&#1502;&#1493;&#1504;&#1493;&#1514; &#1513;&#1500;&#1499;&#1501; &#1502;&#1492;&#1513;&#1496;&#1495;',
    viewAll: '&#1492;&#1510;&#1490; &#1492;&#1499;&#1500;',
    viewOriginal: '&#1492;&#1510;&#1490; &#1502;&#1511;&#1493;&#1512; ',
    viewEvent: '&#1506;&#1493;&#1491; &#1506;&#1500; &#1492;&#1505;&#1497;&#1508;&#1493;&#1512;',
    reportTitle: '&#1491;&#1497;&#1493;&#1493;&#1495; &#1506;&#1500; &#1502;&#1491;&#1497;&#1492;',
    reportConfirm: '&#1489;&#1495;&#1512; &#1505;&#1497;&#1489;&#1492;:',
    reportSent: '&#1511;&#1497;&#1489;&#1500;&#1504;&#1493; &#1488;&#1514; &#1492;&#1491;&#1497;&#1493;&#1493;&#1495;, &#1504;&#1505;&#1497;&#1512; &#1488;&#1514; &#1492;&#1502;&#1491;&#1497;&#1492; &#1489;&#1502;&#1497;&#1491;&#1514; &#1492;&#1510;&#1493;&#1512;&#1498;.',
    cancel: '&#1489;&#1497;&#1496;&#1493;&#1500;',
    report: '&#1491;&#1493;&#1493;&#1495;',
    ok: '&#1488;&#1497;&#1513;&#1493;&#1512;',
    relatedStories: '&#x5D2;&#x5DC;&#x5E8;&#x5D9;&#x5D5;&#x5EA; &#x5E0;&#x5D5;&#x5E1;&#x5E4;&#x5D5;&#x5EA;',
    reportOffensive: '&#x5EA;&#x5D5;&#x5DB;&#x5DF; &#x5E4;&#x5D5;&#x5D2;&#x5E2;&#x5E0;&#x5D9;',
    reportIrrelevant: '&#x5EA;&#x5D5;&#x5DB;&#x5DF; &#x5DC;&#x5D0; &#x5E8;&#x5DC;&#x5D5;&#x5D5;&#x5E0;&#x5D8;&#x5D9;',
    reportQuality: '&#x5EA;&#x5D5;&#x5DB;&#x5DF; &#x5DC;&#x5D0; &#x5D0;&#x5D9;&#x5DB;&#x5D5;&#x5EA;&#x5D9;'
  }
};

})();


