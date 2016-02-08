(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
exports.parse = _dereq_('./lib/parse');
exports.stringify = _dereq_('./lib/stringify');

},{"./lib/parse":2,"./lib/stringify":3}],2:[function(_dereq_,module,exports){
var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};

},{}],3:[function(_dereq_,module,exports){
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};

},{}],4:[function(_dereq_,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(_dereq_,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = _dereq_('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":4}],6:[function(_dereq_,module,exports){
/*!
 * Cookies.js - 0.4.0
 *
 * Copyright (c) 2014, Scott Hamper
 * Licensed under the MIT license,
 * http://www.opensource.org/licenses/MIT
 */
(function (undefined) {
    'use strict';

    var Cookies = function (key, value, options) {
        return arguments.length === 1 ?
            Cookies.get(key) : Cookies.set(key, value, options);
    };

    // Allows for setter injection in unit tests
    Cookies._document = document;
    Cookies._navigator = navigator;

    Cookies.defaults = {
        path: '/'
    };

    Cookies.get = function (key) {
        if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
            Cookies._renewCache();
        }

        return Cookies._cache[key];
    };

    Cookies.set = function (key, value, options) {
        options = Cookies._getExtendedOptions(options);
        options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

        Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

        return Cookies;
    };

    Cookies.expire = function (key, options) {
        return Cookies.set(key, undefined, options);
    };

    Cookies._getExtendedOptions = function (options) {
        return {
            path: options && options.path || Cookies.defaults.path,
            domain: options && options.domain || Cookies.defaults.domain,
            expires: options && options.expires || Cookies.defaults.expires,
            secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure
        };
    };

    Cookies._isValidDate = function (date) {
        return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
    };

    Cookies._getExpiresDate = function (expires, now) {
        now = now || new Date();
        switch (typeof expires) {
            case 'number': expires = new Date(now.getTime() + expires * 1000); break;
            case 'string': expires = new Date(expires); break;
        }

        if (expires && !Cookies._isValidDate(expires)) {
            throw new Error('`expires` parameter cannot be converted to a valid Date instance');
        }

        return expires;
    };

    Cookies._generateCookieString = function (key, value, options) {
        key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
        key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
        value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
        options = options || {};

        var cookieString = key + '=' + value;
        cookieString += options.path ? ';path=' + options.path : '';
        cookieString += options.domain ? ';domain=' + options.domain : '';
        cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
        cookieString += options.secure ? ';secure' : '';

        return cookieString;
    };

    Cookies._getCookieObjectFromString = function (documentCookie) {
        var cookieObject = {};
        var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

        for (var i = 0; i < cookiesArray.length; i++) {
            var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

            if (cookieObject[cookieKvp.key] === undefined) {
                cookieObject[cookieKvp.key] = cookieKvp.value;
            }
        }

        return cookieObject;
    };

    Cookies._getKeyValuePairFromCookieString = function (cookieString) {
        // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
        var separatorIndex = cookieString.indexOf('=');

        // IE omits the "=" when the cookie value is an empty string
        separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

        return {
            key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
            value: decodeURIComponent(cookieString.substr(separatorIndex + 1))
        };
    };

    Cookies._renewCache = function () {
        Cookies._cache = Cookies._getCookieObjectFromString(Cookies._document.cookie);
        Cookies._cachedDocumentCookie = Cookies._document.cookie;
    };

    Cookies._areEnabled = function () {
        var testKey = 'cookies.js';
        var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
        Cookies.expire(testKey);
        return areEnabled;
    };

    Cookies.enabled = Cookies._areEnabled();
    module.exports = Cookies;
})();

},{}],7:[function(_dereq_,module,exports){
var Storage = function (type) {
  function createCookie(name, value, days) {
    var date, expires;

    if (days) {
      date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i, c;

    for (i=0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }

      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length).replace(/'/g, '"');
      }
    }
    return null;
  }

  function setData(data) {
    data = JSON.stringify(data).replace(/"/g, "'");
    if (type == 'session') {
      window.name = data;
    } else {
      createCookie('localStorage', data, 365);
    }
  }

  function clearData() {
    if (type == 'session') {
      window.name = '';
    } else {
      createCookie('localStorage', '', 365);
    }
  }

  function getData() {
    var data = type == 'session' ? window.name : readCookie('localStorage');
    return data ? JSON.parse(data) : {};
  }


  // initialise if there's already data
  var data = getData();

  return {
    length: 0,
    clear: function () {
      data = {};
      this.length = 0;
      clearData();
    },
    getItem: function (key) {
      return data[key] === undefined ? null : data[key];
    },
    key: function (i) {
      // not perfect, but works
      var ctr = 0;
      for (var k in data) {
        if (ctr == i) return k;
        else ctr++;
      }
      return null;
    },
    removeItem: function (key) {
      delete data[key];
      this.length--;
      setData(data);
    },
    setItem: function (key, value) {
      data[key] = value+''; // forces the value to a string
      this.length++;
      setData(data);
    }
  };
};

//detect at runtime if we need the polyfill or not, and don't touch the global namespace in case the client has their own polyfill
var factory = function() {
  return {
    localStorage: typeof window.localStorage == 'undefined' ? new Storage('local') : window.localStorage,
    sessionStorage: typeof window.sessionStorage == 'undefined' ? new Storage('session') : window.sessionStorage
  };
};

module.exports = factory;

},{}],8:[function(_dereq_,module,exports){
(function (global){
/*!
 * Localytics HTML5/JavaScript Library
 * Copyright (C) 2014 Char Software Inc., DBA Localytics
 *
 * This code is provided under the Localytics Modified BSD License.
 * A copy of this license is available at
 * http://www.localytics.com/docs/opensourceinfo/#license-docation
 *
 * Please visit www.localytics.com for more information.
 */

var JSON = _dereq_('jsonify');
var nodeUuid = _dereq_('uuid');
var Cookies = _dereq_('./cookie');
var localStorage = _dereq_('./localStorage')().localStorage;

// Handle logging events
var log = function() {
    // Check if console exists
    if(typeof console == 'object') {
        return console.log.apply(console, arguments);
    }
},

version = 'web_3.2.6',

// Grab the global localytics method by name (this allows for the end user to use whatever naming they want)
globalLocalytics = global[global['LocalyticsGlobal']],

// Global queue reference
globalQueue = globalLocalytics.q,

// Shortcut to document for minification
doc = document,

// Default dequeue timer
dequeueTimer = globalLocalytics.d || 100,

// Last upload time
lastAttemptedUploadTime = 0,

// Store the page load time
pageLoadTime = globalLocalytics.t / 1000 | 0,

// Grab the protocol if it is https or http, default to http otherwise
protocol = (global.location.protocol == 'https:') ? 'https:' : 'http:',

// Upload url endpoint
uploadURL = protocol + '//' + 'webanalytics.localytics.com/api/v2/applications/',

// Upload Queue
uploadQueue = [],

// Maximum Queue Capcity in Local Storage
maxQueueSize = (5 * 1024 * 1024) * .1, // We want to take up to 10% of the available 5mbz

// Get the current Unix time in milliseconds
now = function() {
    return Date.now ? Date.now() : (new Date()).getTime();
},

// Get the current Unix time in seconds
time = function() {
    return now() / 1000 | 0;
},

// Some shortcuts
encode = encodeURIComponent,
stringify = JSON.stringify,

// Get a parameter from the URL
getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,''])[1].replace(/\+/g, '%20'))||null;
},

// Really simple object extension
extend = function(target) {
    var sources = Array.prototype.slice.call(arguments, 1);
    for(var i = 0; i < sources.length; i++) {
        for (var key in sources[i]) {
            if (sources[i].hasOwnProperty(key)) {
                target[key] = sources[i][key];
            }
        }
    }
    return target;
},

// Each iterator function borrowed from underscore js
breaker = {},
nativeForEach = Array.prototype.forEach,
each = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) return;
        }
    } else {
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        }
    }
    return obj;
},

// Generate a uuid
guid = function () {
    return nodeUuid.v4();
},

// Remove items from the queue and process them
dequeue = function() {
    try {
        // If there is a queue and it has items, then dequeue
        if(globalQueue && globalQueue.length) {

            // See if the method is available publically and call it with the supplied arguments
            (function(action) {

                var namespace = action[0].split('.')[1] || '',
                    instance = instances[namespace] || (function() {

                        // Allowable actions before init
                        var allowed = 'init extend',
                            method = action[0].split('.')[0];

                        if( allowed.split(method).length == 1 ) {
                            throw new Error('You must call init before calling ' + method);
                        }
                        return instances[namespace] = new Localytics(namespace);
                    }());

                var method = action.splice(0,1)[0].split('.')[0];

                (method in instance) && instance[method].apply(instance, action);

                /* test-code */
                if (!globalLocalytics.__testing__) globalLocalytics.__testing__ = {};
                globalLocalytics.__testing__.latestInstance = instance;
                /* end-test-code */

            }( Array.prototype.slice.apply(globalQueue.splice(0,1)[0]) ));
        }
    } catch(err) {}

    // TODO: Think about other ways to optimize this
    // Dequeue every 100ms
    setTimeout(dequeue, dequeueTimer);
},

// Browser support
support = {
    // Detect if cookies are supported
    cookies: (global.location.protocol != 'file:' && navigator.cookieEnabled) || (function(temp) {
        doc.cookie = temp + '=1';
        var ret = doc.cookie.indexOf(temp + '=') != -1;
        doc.cookie = temp + '=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
        return ret;
    }(guid()))
},

// A default options object
defaultOptions = {
    // Should we track page views automatically
    trackPageView: false,
    // The timeout for a session in seconds
    sessionTimeout: 60 * 30
},

// A store of instances of the Localytics Object
instances = [],

// Storage keys
keys = {
    install_uuid: 'iu',
    event_store: 'es',
    current_header: 'ch',
    device_birth_time: 'pa',
    session_uuid: 'csu',
    session_open_time: 'cst',
    session_action_time: 'ct',
    session_index: 'csi',
    sequence_index: 'csq',
    last_open_time: 'lot',
    last_close_time: 'lct',
    screen_flows: 'fl',
    custom_dimensions: 'cd',
    identifiers: 'ids',
    upload_queue: 'que'
},
browserInfo = (function () {
  var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name: 'IE', version: (tem[1] || '')};
  }
  if (M[1] === 'Chrome') {
      tem = ua.match(/\bOPR\/(\d+)/)
      if (tem != null) {
          return {name: 'Opera', version: tem[1]};
      }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1, 1, tem[1]);
  }
  return {
      name: M[0],
      version: M[1]
  }
})(),
// Core Localytics Object
Localytics = function(namespace) {
    this.namespace = namespace || '';
    return this;
},
// Store the localytics prototype as a variable for the compressor
LocalyticsPrototype = Localytics.prototype;

// Add storage, identity, session, device to the localytics prototype
extend(LocalyticsPrototype, {
    // Build the storage facade
    storage: function() {
        var instance = this;
        var prefix = '_loc_' + ((instance.namespace) ? instance.namespace + '_' : '');

        return {
            // Get value from key
            get: function(key) {
                var value;

                if(instance.options.cookies) {
                    value = Cookies.get(prefix + key);
                } else {
                    value = localStorage.getItem(prefix + key);
                }

                return value && JSON.parse(value);
            },
            // Set value by key
            set: function(key, value) {
                if(instance.options.cookies) {
                    Cookies.set(prefix + key, JSON.stringify(value));
                } else {
                    localStorage.setItem(prefix + key, JSON.stringify(value));
                }
                return value;
            },
            // Remove value by key
            remove: function(key) {
                if(instance.options.cookies) {
                    Cookies.expire(prefix + key);
                } else {
                    localStorage.removeItem(prefix + key);
                }
            },
            // Get a value by key, if it doesn't exist set it
            getOrSet: function(key, value) {
                var val = instance.storage().get(key);
                return (val === null || typeof val === 'undefined') ? instance.storage().set(key, value) : val;
            },
            // Increment a value by key
            increment: function(key) {
                var val = parseInt(instance.storage().getOrSet(key, 0));
                return instance.storage().set(key, ++val);
            },
            getPrefix: function() {
                return prefix;
            }
        };
    },
    // Build a queue to store our events for upload
    queue: function() {
        var instance = this;

        // If we want to use localStorage lets load up the current queue
        if (instance.options.cacheOffline) {
            uploadQueue = instance.storage().getOrSet(keys.upload_queue, []);
        }

        return {
            /**
             * This will return the entire list in the queue
             *
             * @returns {Array} - Array
             */
            list: function () {
                return uploadQueue;
            },
            /**
             * This will return the entire list, while flushing everything out
             *
             * @returns {Array} - Array
             */
            flush: function() {
                var events = uploadQueue;
                uploadQueue = [];
                this.save();
                return events;
            },
            /**
             * Will store our object in the queue.
             *
             * @param event
             */
            enqueue: function(event) {
                uploadQueue.push(event);
                this.save();
            },
            /**
             * Store the data into localStorage if enabled
             */
            save: function() {
                if (instance.options.cacheOffline) {
                    var currentSize = uploadQueue.join('').length * 2;

                    // If we are under our 10% cap persist to localstorage
                    // Otherwise we will no longer save to storage but keep track in memory.
                    if ( currentSize <= maxQueueSize) {
                        instance.storage().set(keys.upload_queue, uploadQueue);
                    }
                }
            }
        }
    },
    // Build identity object
    identity: function() {
        var instance = this;

        return {
            uuid: function() {
                // Migration from v2
                var uuid = (function() {
                    return support.cookies ? Cookies.get('__ll_' + (instance.namespace ? instance.namespace : '') + keys.install_uuid) : false;
                }()) || guid();
                // Define installId in init options to use a custom install uuid
                if (!instance.options.installId) {
                  return instance.storage().getOrSet(keys.install_uuid, uuid.replace(/\"/g, ''));
                } else {
                  return instance.storage().getOrSet(keys.install_uuid, instance.options.installId);
                }
            },
            birthTime: function() {

                // Migration from v2
                var birthTime = (function() {
                    return support.cookies ? Cookies.get('__ll_' + (instance.namespace ? instance.namespace : '') + keys.device_birth_time) : false;
                }()) || pageLoadTime;

                return instance.storage().getOrSet(keys.device_birth_time, birthTime);
            }
        };
    },

    // Build session object
    session: function() {
        var instance = this;

        return {
            uuid: function() {
                return instance.storage().getOrSet(keys.session_uuid, guid());
            },
            openTime: function() { return instance.storage().getOrSet(keys.session_open_time, pageLoadTime) },
            index: function() { return instance.storage().getOrSet(keys.session_index, 0) },
            actionTime: function() { return instance.storage().getOrSet(keys.session_action_time, pageLoadTime); },
            updateActionTime: function() {
                // Grab the session open time
                var actionTime = instance.storage().get(keys.session_action_time);

                // If recreate is true, clear old session data and close the old session
                if(!actionTime || (actionTime < time() - instance.options.sessionTimeout)) {
                    // Close the current session
                    instance.close();
                    // Create a new session
                    instance.session().create();
                    // Upload the new session
                    instance.open();
                }

                return instance.storage().set(keys.session_action_time, time());
            },
            initialize: function() {
                instance.session().updateActionTime();
            },
            destroy: function() {
                instance.storage().remove(keys.session_uuid);
                instance.storage().remove(keys.session_open_time);
                instance.storage().remove(keys.session_action_time);
            },
            create: function() {
                instance.session().uuid();
                instance.session().openTime();
                instance.storage().increment(keys.session_index);
            },
            exists: function() {
                return !!instance.storage().get(keys.session_uuid);
            }
        };
    },

    // Build the device object
    device: function() {
        var instance = this;

        return {
            language: (navigator.language || navigator.userLanguage || '').toUpperCase(),
            platform: navigator.platform,
            make: navigator.vendor,
            model: navigator.platform
        };
    },

    // Extend the localytics Prototype
    extend: function() {
        each(arguments, function(src) {
            extend(LocalyticsPrototype, src);
        });
    }
});

// Add private methods
extend(LocalyticsPrototype, {
    _url: function(data) {
        var params = [];
        each(data, function(el, i) {
            params.push(stringify(el))
        });
        params = params.join('\n');

        // Note: we include callback, but using the image upload method it does't do anything
        return [uploadURL, this.options.appKey, '/uploads/image.gif?client_date=', time(), '&callback=z&data=', encode(params)].join('');
    },
    /**
     * Build up the request needed for the server.
     * Take the current event and attach the dimension's to it.
     * Once we have all the data we need we will trigger the upload() to send the request.
     *
     * @param data - Event to be tracked
     * @private
     */
    _upload: function(data) {
        // Add custom dimensions
        extend(data, (function(dimensions, response) {
            // Loop through the dimensions and if defined, add it to the upload
            for(var i = 0; i < dimensions.length; i++) {
                (typeof dimensions[i] != 'undefined') && (response['c' + i] = dimensions[i]);
            }

            return response;
        }(this.storage().getOrSet(keys.custom_dimensions, []), {}) ) );

        var request = [ this._header(), data ];

        // If autoUpload is enabled we will let the request go through
        if (this.options.autoUpload) {
            // Call the main upload function
            this.upload(request);
        } else {
            // Otherwise we will store that request until later called.
            this.queue().enqueue(request);
        }
    },
    _commonData: function(data) {
        var instance = this;

        return extend({
            'ct': time(),
            'u': guid(),
            'su': instance.session().uuid(),
            'mc': getURLParameter('utm_campaign'),
            'mm': getURLParameter('utm_medium'),
            'ms': getURLParameter('utm_source')
        }, data);
    },
    _header: function() {
        var instance = this,

            header = {
                'dt': 'h',
                'pa': instance.identity().birthTime(),
                'seq': instance.storage().increment(keys.sequence_index),
                'u': guid(),
                'attrs': {
                    'dt': 'a',
                    'au': instance.options.appKey,
                    'iu': instance.identity().uuid(),
                    'lv': version,
                    'dmo': instance.device().platform,
                    'dll': instance.device().language,
                    'dma': instance.device().make
                },
                'ids': instance.storage().getOrSet(keys.identifiers, {})
            };

        if(this.options.appVersion) {
            header.attrs.av = this.options.appVersion;
        }

        return header;
    },
    /**
     * Submit a simple GET request via image
     *
     * @param data - An event-dimension Object
     * @private
     */
    _get: function(data) {
        var img = doc.createElement('img');
        img.src = this._url(data);
    },
    /**
     * Submit a POST request
     *
     * @param {Array} requestsList - An event-dimension Object
     * @private
     */
    _post: function (requestsList) {
        // grab our unique headers for this request
        var instance = this;

        // Get our data into json format and setup the post headers
        var xhr = new XMLHttpRequest();
        var payload = requestsList.map(function(requests){
            return requests.map(function(request) {
                return JSON.stringify(request);
            }).join('\n');
        }).join('\n');

        // Setup the POST endpoint URL
        xhr.open("POST", [uploadURL, this.options.appKey, '/uploads'].join(''), true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Content-Encoding", "UTF-8");
        xhr.setRequestHeader("x-upload-time", time());
        xhr.timeout = 0;

        xhr.onreadystatechange = function () {
            var stat;

            // Once our network request finishes lets check the results.
            if (xhr.readyState === 4) {
                stat = xhr.status;
                // When the mobile app receives a 200 or 202 HTTP response from Localytics,
                // the uploaded data is deleted.
                // When the mobile app receives a 4XX HTTP response from Localytics, the uploaded data is deleted.
                if ((stat == 200 || stat == 202) || (stat >= 400 && stat < 500)) {
                    // no-op for now
                } else if ((stat >= 500 && stat < 600) || stat == 0) {
                    // When the mobile app receives a 5XX HTTP response from Localytics, the uploaded data is
                    // stored for re-upload.
                    // If the server is not available, the uploaded data is stored for re-upload.
                    // Stat == 0 means that the request aborted for some reason, either canceled or network
                    // was unreachable
                    each(requestsList, function(requests) {
                        instance.queue().enqueue(requests);
                    });
                    // @todo some logic to re-attempt these failures. This will not happen when auto upload is set
                }
            }
        };

        xhr.send(payload);
    }
});

// Implement the public API methods
extend(LocalyticsPrototype, {
    init: function(appKey, options) {
        // Overwrite the default options with the provided ones (if provided)
        this.options = extend({}, defaultOptions, options);

        // Store the app key in the options dictionary
        this.options.appKey = appKey;

        // Override the cookie domain if the option is set
        if(this.options.domain && support.cookies) {
            Cookies.defaults.domain = this.options.domain;
            this.options.cookies = true;
        }

        // Force using cookies for browsers without localStorage support regardless of the option passed
        if(!('localStorage' in window)) {
            this.options.cookies = true;
        }

        var instance = this;

        // If custom dimensions are passed to init, set
        if(this.options.customDimensions) {
            each(this.options.customDimensions, function(val, i) {
                instance.setCustomDimension(i, val);
            });
        }

        // See if identifiers are passed in as options and set them
        each(['customerEmail', 'customerId', 'customerName'], function(key, i) {
            instance.options[key] && instance['set' + key[0].toUpperCase() + key.slice(1)](instance.options[key]);
        });

        // (bool) useXHR: This determines get vs post. If cacheEvents == true, this is forced to true.
        //  Default is false.
        // (bool) cacheOffline: This determines whether or not we write to local storage before uploading.
        // Default is false.
        // (bool) autoUpload: This determines whether or not we attempt to upload as each event is created.
        // Default is true.
        // If post is the required request method
        this.options.useXHR = this.options.useXHR || this.options.cacheOffline || false;
        this.options.autoUpload = this.options.autoUpload !== false;

        // so for browsers that don't support CORS, we should gracefully fall back to the old upload behavior and
        // disallow event caching
        // http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
        if (typeof XMLHttpRequest === "undefined" ||
          !('withCredentials' in new XMLHttpRequest() ||
          typeof XDomainRequest !== "undefined")){
            this.options.useXHR = false;
            this.options.cacheOffline = false;
        }

        // Disable uxeXHR for browsers IE9 and under
        if (browserInfo.name.toLowerCase() == "msie" && browserInfo.version <= 9) {
            this.options.useXHR = false;
            this.options.cacheOffline = false;
        }

        // Allow the ability to override the install id (iu)
        if (instance.options.installId) {
            instance.storage().set(keys.install_uuid, instance.options.installId);
        }

        // Initialize the session for this instance
        this.session().initialize();

        // Track a page view (optional)
        if(this.options.trackPageView) {
            this.trackPageView();
        }
    },
    open: function() {

        var event = {
            'dt': 's',
            'ct': this.session().openTime(),
            'u': this.session().uuid(),
            'nth': this.session().index(),
            'mc': getURLParameter('utm_campaign'),
            'mm': getURLParameter('utm_medium'),
            'ms': getURLParameter('utm_source'),
            'cid': this.getIdentifier('customer_id') || this.identity().uuid(),
            'utp': this.getIdentifier('customer_id') ? 'known' : 'anonymous'
        };

        this._upload(event);
    },
    close: function() {
        if(!this.session().exists()) {
            return;
        }

        var event = {
            'dt': 'c',
            'u': guid(),
            'ss': this.session().openTime(),
            'su': this.session().uuid(),
            'ct': this.session().actionTime(),
            'ctl': this.session().actionTime() - this.session().openTime(),
            'cta': this.session().actionTime() - this.session().openTime(),
            'fl': this.storage().getOrSet(keys.screen_flows, []),
            'cid': this.getIdentifier('customer_id') || this.identity().uuid(),
            'utp': this.getIdentifier('customer_id') ? 'known' : 'anonymous'
        };

        this._upload(event);

        // Remove all dirty session data
        this.session().destroy();

    },
    trackPageView: function() {
        this.tagEvent('Page View', {'URL': global.location.href, 'Title': doc.title, 'Referrer': doc.referrer || 'Direct'});
    },
    tagScreen: function(name) {
        var screens = this.storage().getOrSet(keys.screen_flows, []);
        (screens[screens.length - 1] != name) && screens.push(name);
        this.storage().set(keys.screen_flows, screens);
    },
    tagEvent: function(name, attrs, customerValueIncrease) {
        // Update the session action time
        this.session().updateActionTime();

        var event = this._commonData({
            'dt': 'e',
            'n': '' + name,
            'cid': this.getIdentifier('customer_id') || this.identity().uuid(),
            'utp': this.getIdentifier('customer_id') ? 'known' : 'anonymous'
        });

        // Attach attributes, and allow customer value increase to be sent without a attributes placeholder
        if(attrs && typeof attrs === 'object') {
            event.attrs = extend({}, attrs);
        } else if(typeof attrs === 'number' && typeof customerValueIncrease === 'undefined') {
            customerValueIncrease = attrs;
        }

        // Add the customer value increase if supplied
        if(typeof customerValueIncrease === 'number' && customerValueIncrease > 0) {
            event['v'] = customerValueIncrease;
        }

        this._upload(event);
    },
    setCustomDimension: function(i, value) {
        // Dimensions have index #s, and there are a max of 10
        if( (typeof i === 'number') && (i <= 10 && i >= 0) ) {
            var dimensions = this.storage().getOrSet(keys.custom_dimensions, []);
            dimensions[i] = value;
            this.storage().set(keys.custom_dimensions, dimensions);
        }
    },
    setIdentifier: function(name, value) {
        var identifiers = this.storage().getOrSet(keys.identifiers, {});
        identifiers[name] = value;
        value && this.storage().set(keys.identifiers, identifiers);
    },
    getIdentifier: function(key) {
        var identifiers = this.storage().getOrSet(keys.identifiers, {});
        return (key in identifiers) ? identifiers[key] : false;
    },
    setCustomerEmail: function(value) {
        this.setIdentifier('customer_email', value);
    },
    setCustomerId: function(value) {
        this.setIdentifier('customer_id', value);
    },
    setCustomerName: function(value) {
        this.setIdentifier('customer_name', value);
    },
    /**
     * Attempt to submit the upload request.
     *
     * @param {Array} request - Our request data [ header, event ] with the custom dimension's set on it.
     */
    upload: function(request) {
        // What type of request will we execute? A POST or GET
        var instance = this;
        var requests = [];

        // Let's check if our request is a single request, or an array of requests
        if (request && !(request[0] instanceof Array)) {
            requests = [ request ];
        }

        // If autoUpload is disabled, we will be pulling data from our queue.
        // OR if autoUpload is disabled and we are not storing in localstorage we will want to upload these events.
        if (!this.options.autoUpload || (!this.options.autoUpload && !this.options.cacheOffline)) {
            requests = this.queue().flush();

            // If we have nothing to upload
            if (requests.length === 0) {
                return;
            }
        }

        if (this.options.useXHR) {
            instance._post(requests);
        } else {
            each(requests, function(request){
                instance._get(request);
            });
        }

    },
    clearCustomDimensions: function() {
        this.storage().remove(keys.custom_dimensions);
    },
    clearIdentifiers: function() {
        this.storage().remove(keys.identifiers);
    }
});

// Start dequeing immediately
dequeue();
/* test-code */
if (!globalLocalytics.__testing__) globalLocalytics.__testing__ = {};
globalLocalytics.__testing__.dequeue = dequeue;
globalLocalytics.__testing__.uploadURL = "/api/v2/applications/";
globalLocalytics.__testing__.guid = guid;
/* end-test-code */
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./cookie":6,"./localStorage":7,"jsonify":1,"uuid":5}]},{},[8]);
