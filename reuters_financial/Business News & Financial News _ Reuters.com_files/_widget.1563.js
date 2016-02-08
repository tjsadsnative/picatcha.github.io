$w=$(window);$d=$(document);
;(function(e,s,x,N){function r(a){for(;a&&"undefined"!==typeof a.originalEvent;)a=a.originalEvent;return a}function t(a){for(var c={},b,d;a;){b=e.data(a,n);for(d in b)b[d]&&(c[d]=c.hasVirtualBinding=!0);a=a.parentNode}return c}function y(){l&&(clearTimeout(l),l=0);l=setTimeout(function(){p=l=0;u.length=0;z=!1;q=!0},e.vmouse.resetTimerDuration)}function k(a,c,b){var d,h;if(!(h=b&&b[a])){if(b=!b)a:{for(b=c.target;b;){if((h=e.data(b,n))&&(!a||h[a]))break a;b=b.parentNode}b=null}h=b}if(h){d=c;b=d.type;
var f,g;d=e.Event(d);d.type=a;a=d.originalEvent;h=e.event.props;-1<b.search(/^(mouse|click)/)&&(h=O);if(a)for(g=h.length,f;g;)f=h[--g],d[f]=a[f];-1<b.search(/mouse(down|up)|click/)&&!d.which&&(d.which=1);if(-1!==b.search(/^touch/)&&(f=r(a),b=f.touches,f=f.changedTouches,a=b&&b.length?b[0]:f&&f.length?f[0]:N))for(b=0,h=D.length;b<h;b++)f=D[b],d[f]=a[f];e(c.target).trigger(d)}return d}function E(a){var c=e.data(a.target,A);z||p&&p===c||!(c=k("v"+a.type,a))||(c.isDefaultPrevented()&&a.preventDefault(),
c.isPropagationStopped()&&a.stopPropagation(),c.isImmediatePropagationStopped()&&a.stopImmediatePropagation())}function F(a){var c=r(a).touches,b;c&&1===c.length&&(b=a.target,c=t(b),c.hasVirtualBinding&&(p=P++,e.data(b,A,p),l&&(clearTimeout(l),l=0),m=q=!1,b=r(a).touches[0],G=b.pageX,H=b.pageY,k("vmouseover",a,c),k("vmousedown",a,c)))}function I(a){q||(m||k("vmousecancel",a,t(a.target)),m=!0,y())}function J(a){if(!q){var c=r(a).touches[0],b=m,d=e.vmouse.moveDistanceThreshold,h=t(a.target);(m=m||Math.abs(c.pageX-
G)>d||Math.abs(c.pageY-H)>d)&&!b&&k("vmousecancel",a,h);k("vmousemove",a,h);y()}}function K(a){if(!q){q=!0;var c=t(a.target),b;k("vmouseup",a,c);!m&&(b=k("vclick",a,c))&&b.isDefaultPrevented()&&(b=r(a).changedTouches[0],u.push({touchID:p,x:b.clientX,y:b.clientY}),z=!0);k("vmouseout",a,c);m=!1;y()}}function L(a){a=e.data(a,n);var c;if(a)for(c in a)if(a[c])return!0;return!1}function M(){}function Q(a){var c=a.substr(1);return{setup:function(){L(this)||e.data(this,n,{});e.data(this,n)[a]=!0;g[a]=(g[a]||
0)+1;1===g[a]&&v.bind(c,E);e(this).bind(c,M);B&&(g.touchstart=(g.touchstart||0)+1,1===g.touchstart&&v.bind("touchstart",F).bind("touchend",K).bind("touchmove",J).bind("scroll",I))},teardown:function(){--g[a];g[a]||v.unbind(c,E);B&&(--g.touchstart,g.touchstart||v.unbind("touchstart",F).unbind("touchmove",J).unbind("touchend",K).unbind("scroll",I));var b=e(this),d=e.data(this,n);d&&(d[a]=!1);b.unbind(c,M);L(this)||b.removeData(n)}}}var n="virtualMouseBindings",A="virtualTouchID";s="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" ");
var D="clientX clientY pageX pageY screenX screenY".split(" "),O=e.event.props.concat(e.event.mouseHooks?e.event.mouseHooks.props:[]),g={},l=0,G=0,H=0,m=!1,u=[],z=!1,q=!1,B="addEventListener"in x,v=e(x),P=1,p=0,C;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var w=0;w<s.length;w++)e.event.special[s[w]]=Q(s[w]);B&&x.addEventListener("click",function(a){var c=u.length,b=a.target,d,h,f,g,k;if(c)for(d=a.clientX,h=a.clientY,C=e.vmouse.clickDistanceThreshold,
f=b;f;){for(g=0;g<c;g++)if(k=u[g],f===b&&Math.abs(k.x-d)<C&&Math.abs(k.y-h)<C||e.data(f,A)===k.touchID){a.preventDefault();a.stopPropagation();return}f=f.parentNode}},!0)})(jQuery,window,document);
;(function(b){var a=function(){},c={set:a,remove:a,get:a,iterate:a,sync:a};b.persist=function(a,d){try{return new b.Persist.Store(a,d)}catch(e){return c}};b.persist.mocked=c})(window);
;(function(){function ba(f,d,h){h=(h||0)-1;for(var G=f?f.length:0;++h<G;)if(f[h]===d)return h;return-1}function za(f,d){var h=typeof d;f=f.cache;if("boolean"==h||null==d)return f[d]?0:-1;"number"!=h&&"string"!=h&&(h="object");var G="number"==h?d:Qa+d;f=(f=f[h])&&f[G];return"object"==h?f&&-1<ba(f,d)?0:-1:f?0:-1}function Ra(f){var d=this.cache,h=typeof f;if("boolean"==h||null==f)d[f]=!0;else{"number"!=h&&"string"!=h&&(h="object");var G="number"==h?f:Qa+f,d=d[h]||(d[h]={});"object"==h?(d[G]||(d[G]=[])).push(f):
d[G]=!0}}function rb(f){return f.charCodeAt(0)}function Xb(f,d){for(var h=f.criteria,G=d.criteria,s=-1,z=h.length;++s<z;){var A=h[s],r=G[s];if(A!==r){if(A>r||"undefined"==typeof A)return 1;if(A<r||"undefined"==typeof r)return-1}}return f.index-d.index}function Sa(f){var d=-1,h=f.length,s=f[0],r=f[h/2|0],z=f[h-1];if(s&&"object"==typeof s&&r&&"object"==typeof r&&z&&"object"==typeof z)return!1;s=Ta();s["false"]=s["null"]=s["true"]=s.undefined=!1;r=Ta();r.array=f;r.cache=s;for(r.push=Ra;++d<h;)r.push(f[d]);
return r}function Yb(f){return"\\"+Ua[f]}function I(){return ca.pop()||[]}function Ta(){return da.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function Aa(f){return"function"!=typeof f.toString&&"string"==typeof(f+"")}function r(f){f.length=0;ca.length<Ba&&ca.push(f)}function oa(f){var d=f.cache;d&&oa(d);f.array=f.cache=f.criteria=f.object=f.number=f.string=f.value=null;da.length<Ba&&da.push(f)}
function s(f,d,h){d||(d=0);"undefined"==typeof h&&(h=f?f.length:0);var s=-1;h=h-d||0;for(var r=Array(0>h?0:h);++s<h;)r[s]=f[d+s];return r}function Va(f){function d(a){return a&&"object"==typeof a&&!u(a)&&x.call(a,"__wrapped__")?a:new h(a)}function h(a,b){this.__chain__=!!b;this.__wrapped__=a}function G(a){function b(){if(e){var a=s(e);pa.apply(a,arguments)}if(this instanceof b){var d=na(c.prototype),a=c.apply(d,a||arguments);return B(a)?a:d}return c.apply(l,a||arguments)}var c=a[0],e=a[2],l=a[4];
Wa(b,a);return b}function P(a,b,c,e,l){if(c){var d=c(a);if("undefined"!=typeof d)return d}if(B(a)){var g=v.call(a);if(!J[g]||!q.nodeClass&&Aa(a))return a;var m=Q[g];switch(g){case ea:case fa:return new m(+a);case ga:case U:return new m(a);case ha:return d=m(a.source,Zb.exec(a)),d.lastIndex=a.lastIndex,d}}else return a;g=u(a);if(b){var t=!e;e||(e=I());l||(l=I());for(var f=e.length;f--;)if(e[f]==a)return l[f];d=g?m(a.length):{}}else d=g?s(a):Ca({},a);g&&(x.call(a,"index")&&(d.index=a.index),x.call(a,
"input")&&(d.input=a.input));if(!b)return d;e.push(a);l.push(d);(g?y:R)(a,function(a,g){d[g]=P(a,b,c,e,l)});t&&(r(e),r(l));return d}function na(a,b){return B(a)?Da(a):{}}function A(a,b,c){if("function"!=typeof a)return Xa;if("undefined"==typeof b||!("prototype"in a))return a;var e=a.__bindData__;if("undefined"==typeof e&&(q.funcNames&&(e=!a.name),e=e||!q.funcDecomp,!e)){var l=$b.call(a);q.funcNames||(e=!ac.test(l));e||(e=sb.test(l),Wa(a,e))}if(!1===e||!0!==e&&e[1]&1)return a;switch(c){case 1:return function(c){return a.call(b,
c)};case 2:return function(c,e){return a.call(b,c,e)};case 3:return function(c,e,l){return a.call(b,c,e,l)};case 4:return function(c,e,l,d){return a.call(b,c,e,l,d)}}return tb(a,b)}function ca(a){function b(){var a=t?g:this;if(l){var r=s(l);pa.apply(r,arguments)}if(d||p)if(r||(r=s(arguments)),d&&pa.apply(r,d),p&&r.length<m)return e|=16,ca([c,h?e:e&-4,r,null,g,m]);r||(r=arguments);f&&(c=a[q]);return this instanceof b?(a=na(c.prototype),r=c.apply(a,r),B(r)?r:a):c.apply(a,r)}var c=a[0],e=a[1],l=a[2],
d=a[3],g=a[4],m=a[5],t=e&1,f=e&2,p=e&4,h=e&8,q=c;Wa(b,a);return b}function qa(a,b){var c=-1,e=Ea(),l=a?a.length:0,d=l>=Ya&&e===ba,g=[];if(d){var m=Sa(b);m?(e=za,b=m):d=!1}for(;++c<l;)m=a[c],0>e(b,m)&&g.push(m);d&&oa(b);return g}function V(a,b,c,e){e=(e||0)-1;for(var l=a?a.length:0,d=[];++e<l;){var g=a[e];if(g&&"object"==typeof g&&"number"==typeof g.length&&(u(g)||F(g))){b||(g=V(g,b,c));var m=-1,t=g.length,f=d.length;for(d.length+=t;++m<t;)d[f++]=g[m]}else c||d.push(g)}return d}function ia(a,b,c,e,
l,d){if(c){var g=c(a,b);if("undefined"!=typeof g)return!!g}if(a===b)return 0!==a||1/a==1/b;if(a===a&&!(a&&Z[typeof a]||b&&Z[typeof b]))return!1;if(null==a||null==b)return a===b;var m=v.call(a),t=v.call(b);m==ja&&(m=K);t==ja&&(t=K);if(m!=t)return!1;switch(m){case ea:case fa:return+a==+b;case ga:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case ha:case U:return a==S(b)}t=m==ka;if(!t){var f=x.call(a,"__wrapped__"),p=x.call(b,"__wrapped__");if(f||p)return ia(f?a.__wrapped__:a,p?b.__wrapped__:b,c,e,l,d);if(m!=
K||!q.nodeClass&&(Aa(a)||Aa(b)))return!1;m=!q.argsObject&&F(a)?L:a.constructor;f=!q.argsObject&&F(b)?L:b.constructor;if(m!=f&&!(w(m)&&m instanceof m&&w(f)&&f instanceof f)&&"constructor"in a&&"constructor"in b)return!1}m=!l;l||(l=I());d||(d=I());for(f=l.length;f--;)if(l[f]==a)return d[f]==b;var h=0,g=!0;l.push(a);d.push(b);if(t){if(f=a.length,h=b.length,(g=h==f)||e)for(;h--;)if(t=f,p=b[h],e)for(;t--&&!(g=ia(a[t],p,c,e,l,d)););else if(!(g=ia(a[h],p,c,e,l,d)))break}else M(b,function(b,m,t){if(x.call(t,
m))return h++,g=x.call(a,m)&&ia(a[m],b,c,e,l,d)}),g&&!e&&M(a,function(a,b,c){if(x.call(c,b))return g=-1<--h});l.pop();d.pop();m&&(r(l),r(d));return g}function da(a,b,c,e,d){(u(b)?$:R)(b,function(b,g){var m,t,f=b,p=a[g];if(b&&((t=u(b))||Za(b))){for(f=e.length;f--;)if(m=e[f]==b){p=d[f];break}if(!m){var h;c&&(f=c(p,b),h="undefined"!=typeof f)&&(p=f);h||(p=t?u(p)?p:[]:Za(p)?p:{});e.push(b);d.push(p);h||da(p,b,c,e,d)}}else c&&(f=c(p,b),"undefined"==typeof f&&(f=b)),"undefined"!=typeof f&&(p=f);a[g]=p})}
function $a(a,b){return a+bc(ub()*(b-a+1))}function ab(a,b,c){var e=-1,d=Ea(),n=a?a.length:0,g=[],m=!b&&n>=Ya&&d===ba,f=c||m?I():g;m&&(f=Sa(f),d=za);for(;++e<n;){var h=a[e],p=c?c(h,e,a):h;if(b?!e||f[f.length-1]!==p:0>d(f,p))(c||m)&&f.push(p),g.push(h)}m?(r(f.array),oa(f)):c&&r(f);return g}function bb(a){return function(b,c,e){var l={};c=d.createCallback(c,e,3);if(u(b)){e=-1;for(var n=b.length;++e<n;){var g=b[e];a(l,g,c(g,e,b),b)}}else y(b,function(b,e,d){a(l,b,c(b,e,d),d)});return l}}function N(a,
b,c,e,d,n){var g=b&1,m=b&4,f=b&16,h=b&32;if(!(b&2||w(a)))throw new T;f&&!c.length&&(b&=-17,f=c=!1);h&&!e.length&&(b&=-33,h=e=!1);var p=a&&a.__bindData__;return p&&!0!==p?(p=s(p),p[2]&&(p[2]=s(p[2])),p[3]&&(p[3]=s(p[3])),!g||p[1]&1||(p[4]=d),!g&&p[1]&1&&(b|=8),!m||p[1]&4||(p[5]=n),f&&pa.apply(p[2]||(p[2]=[]),c),h&&cc.apply(p[3]||(p[3]=[]),e),p[1]|=b,N.apply(null,p)):(1==b||17===b?G:ca)([a,b,c,e,d,n])}function la(){z.shadowedProps=cb;z.array=z.bottom=z.loop=z.top="";z.init="iterable";z.useHas=!0;for(var a,
b=0;a=arguments[b];b++)for(var c in a)z[c]=a[c];b=z.args;z.firstArg=/^[^,]+/.exec(b)[0];a=ra;b="return function("+b+") {\n";c=z;var e="var index, iterable = "+c.firstArg+", result = "+c.init+";\nif (!iterable) return result;\n"+c.top+";";c.array?(e+="\nvar length = iterable.length; index = -1;\nif ("+c.array+") {  ",q.unindexedChars&&(e+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),e+="\n  while (++index < length) {\n    "+c.loop+";\n  }\n}\nelse {  "):q.nonEnumArgs&&
(e+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+c.loop+";\n    }\n  } else {  ");q.enumPrototypes&&(e+="\n  var skipProto = typeof iterable == 'function';\n  ");q.enumErrorProps&&(e+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");var d=[];q.enumPrototypes&&d.push('!(skipProto && index == "prototype")');q.enumErrorProps&&d.push('!(skipErrorProps && (index == "message" || index == "name"))');
if(c.useHas&&c.keys)e+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",d.length&&(e+="    if ("+d.join(" && ")+") {\n  "),e+=c.loop+";    ",d.length&&(e+="\n    }"),e+="\n  }  ";else if(e+="\n  for (index in iterable) {\n",c.useHas&&d.push("hasOwnProperty.call(iterable, index)"),d.length&&(e+="    if ("+d.join(" && ")+") {\n  "),e+=c.loop+
";    ",d.length&&(e+="\n    }"),e+="\n  }    ",q.nonEnumShadows){e+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ";for(k=0;7>k;k++)e+="\n    index = '"+c.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",
c.useHas||(e+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),e+=") {\n      "+c.loop+";\n    }      ";e+="\n  }    "}if(c.array||q.nonEnumArgs)e+="\n}";e+=c.bottom+";\nreturn result";return a("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString",b+e+"\n}")(A,vb,db,x,dc,F,u,O,z.keys,Fa,Z,C,U,ec,v)}function Ba(a){return eb[a]}function Ea(){var a=
(a=d.indexOf)===wb?ba:a;return a}function W(a){return"function"==typeof a&&fc.test(a)}function xb(a){var b,c;if(!a||v.call(a)!=K||(b=a.constructor,w(b)&&!(b instanceof b))||!q.argsClass&&F(a)||!q.nodeClass&&Aa(a))return!1;if(q.ownLast)return M(a,function(a,b,d){c=x.call(d,b);return!1}),!1!==c;M(a,function(a,b){c=b});return"undefined"==typeof c||x.call(a,c)}function Ra(a){return yb[a]}function F(a){return a&&"object"==typeof a&&"number"==typeof a.length&&v.call(a)==ja||!1}function zb(a,b,c){var e=
D(a),d=e.length;for(b=A(b,c,3);d--&&(c=e[d],!1!==b(a[c],c,a)););return a}function sa(a){var b=[];M(a,function(a,e){w(a)&&b.push(e)});return b.sort()}function Ab(a){for(var b=-1,c=D(a),e=c.length,d={};++b<e;){var n=c[b];d[a[n]]=n}return d}function w(a){return"function"==typeof a}function B(a){return!(!a||!Z[typeof a])}function Bb(a){return"number"==typeof a||a&&"object"==typeof a&&v.call(a)==ga||!1}function O(a){return"string"==typeof a||a&&"object"==typeof a&&v.call(a)==U||!1}function Ga(a){for(var b=
-1,c=D(a),e=c.length,d=E(e);++b<e;)d[b]=a[c[b]];return d}function Cb(a,b,c){var e=-1,d=Ea(),n=a?a.length:0,g=!1;c=(0>c?H(0,n+c):c)||0;u(a)?g=-1<d(a,b,c):"number"==typeof n?g=-1<(O(a)?a.indexOf(b,c):d(a,b,c)):y(a,function(a){if(++e>=c)return!(g=a===b)});return g}function Db(a,b,c){var e=!0;b=d.createCallback(b,c,3);if(u(a)){c=-1;for(var l=a.length;++c<l&&(e=!!b(a[c],c,a)););}else y(a,function(a,c,d){return e=!!b(a,c,d)});return e}function Ha(a,b,c){var e=[];b=d.createCallback(b,c,3);if(u(a)){c=-1;
for(var l=a.length;++c<l;){var n=a[c];b(n,c,a)&&e.push(n)}}else y(a,function(a,c,d){b(a,c,d)&&e.push(a)});return e}function fb(a,b,c){b=d.createCallback(b,c,3);if(u(a)){c=-1;for(var e=a.length;++c<e;){var l=a[c];if(b(l,c,a))return l}}else{var n;y(a,function(a,c,e){if(b(a,c,e))return n=a,!1});return n}}function $(a,b,c){if(b&&"undefined"==typeof c&&u(a)){c=-1;for(var e=a.length;++c<e&&!1!==b(a[c],c,a););}else y(a,b,c);return a}function Ia(a,b,c){var e=a,d=a?a.length:0;b=b&&"undefined"==typeof c?b:
A(b,c,3);if(u(a))for(;d--&&!1!==b(a[d],d,a););else{if("number"!=typeof d)var n=D(a),d=n.length;else q.unindexedChars&&O(a)&&(e=a.split(""));y(a,function(a,c,f){c=n?n[--d]:--d;return b(e[c],c,f)})}return a}function ta(a,b,c){var e=-1,l=a?a.length:0,n=E("number"==typeof l?l:0);b=d.createCallback(b,c,3);if(u(a))for(;++e<l;)n[e]=b(a[e],e,a);else y(a,function(a,c,d){n[++e]=b(a,c,d)});return n}function Eb(a,b,c){var e=-Infinity,l=e;"function"!=typeof b&&c&&c[b]===a&&(b=null);if(null==b&&u(a)){c=-1;for(var n=
a.length;++c<n;){var f=a[c];f>l&&(l=f)}}else b=null==b&&O(a)?rb:d.createCallback(b,c,3),y(a,function(a,c,d){c=b(a,c,d);c>e&&(e=c,l=a)});return l}function gb(a,b,c,e){var l=3>arguments.length;b=d.createCallback(b,e,4);if(u(a)){var n=-1,f=a.length;for(l&&(c=a[++n]);++n<f;)c=b(c,a[n],n,a)}else y(a,function(a,e,d){c=l?(l=!1,a):b(c,a,e,d)});return c}function Fb(a,b,c,e){var l=3>arguments.length;b=d.createCallback(b,e,4);Ia(a,function(a,e,d){c=l?(l=!1,a):b(c,a,e,d)});return c}function Gb(a){var b=-1,c=
a?a.length:0,e=E("number"==typeof c?c:0);$(a,function(a){var c=$a(0,++b);e[b]=e[c];e[c]=a});return e}function Hb(a,b,c){var e;b=d.createCallback(b,c,3);if(u(a)){c=-1;for(var l=a.length;++c<l&&!(e=b(a[c],c,a)););}else y(a,function(a,c,d){return!(e=b(a,c,d))});return!!e}function hb(a,b,c){var e=0,l=a?a.length:0;if("number"!=typeof b&&null!=b){var f=-1;for(b=d.createCallback(b,c,3);++f<l&&b(a[f],f,a);)e++}else if(e=b,null==e||c)return a?a[0]:X;return s(a,0,ua(H(0,e),l))}function wb(a,b,c){if("number"==
typeof c){var e=a?a.length:0;c=0>c?H(0,e+c):c||0}else if(c)return c=Ib(a,b),a[c]===b?c:-1;return ba(a,b,c)}function ib(a,b,c){if("number"!=typeof b&&null!=b){var e=0,l=-1,f=a?a.length:0;for(b=d.createCallback(b,c,3);++l<f&&b(a[l],l,a);)e++}else e=null==b||c?1:H(0,b);return s(a,e)}function Ib(a,b,c,e){var l=0,f=a?a.length:l;c=c?d.createCallback(c,e,1):Xa;for(b=c(b);l<f;)e=l+f>>>1,c(a[e])<b?l=e+1:f=e;return l}function Jb(a,b,c,e){"boolean"!=typeof b&&null!=b&&(e=c,c="function"!=typeof b&&e&&e[b]===
a?null:b,b=!1);null!=c&&(c=d.createCallback(c,e,3));return ab(a,b,c)}function Kb(){for(var a=1<arguments.length?arguments:arguments[0],b=-1,c=a?Eb(jb(a,"length")):0,e=E(0>c?0:c);++b<c;)e[b]=jb(a,b);return e}function Lb(a,b){var c=-1,e=a?a.length:0,d={};for(b||!e||u(a[0])||(b=[]);++c<e;){var f=a[c];b?d[f]=b[c]:f&&(d[f[0]]=f[1])}return d}function tb(a,b){return 2<arguments.length?N(a,17,s(arguments,2),null,b):N(a,1,null,null,b)}function Mb(a,b,c){var e,d,f,g,m,t,h,p=0,q=!1,r=!0;if(!w(a))throw new T;
b=H(0,b)||0;if(!0===c)var s=!0,r=!1;else B(c)&&(s=c.leading,q="maxWait"in c&&(H(b,c.maxWait)||0),r="trailing"in c?c.trailing:r);var u=function(){var c=b-(aa()-g);0>=c?(d&&Ja(d),c=h,d=t=h=X,c&&(p=aa(),f=a.apply(m,e),t||d||(e=m=null))):t=va(u,c)},x=function(){t&&Ja(t);d=t=h=X;if(r||q!==b)p=aa(),f=a.apply(m,e),t||d||(e=m=null)};return function(){e=arguments;g=aa();m=this;h=r&&(t||!s);if(!1===q)var c=s&&!t;else{d||s||(p=g);var w=q-(g-p),v=0>=w;v?(d&&(d=Ja(d)),p=g,f=a.apply(m,e)):d||(d=va(x,w))}v&&t?t=
Ja(t):t||b===q||(t=va(u,b));c&&(v=!0,f=a.apply(m,e));!v||t||d||(e=m=null);return f}}function Xa(a){return a}function kb(a,b,c){var e=!0,l=b&&sa(b);b&&(c||l.length)||(null==c&&(c=b),f=h,b=a,a=d,l=sa(b));!1===c?e=!1:B(c)&&"chain"in c&&(e=c.chain);var f=a,g=w(f);$(l,function(c){var d=a[c]=b[c];g&&(f.prototype[c]=function(){var b=this.__chain__,c=this.__wrapped__,l=[c];pa.apply(l,arguments);l=d.apply(a,l);if(e||b){if(c===l&&B(l))return this;l=new f(l);l.__chain__=b}return l})})}function Nb(){}function Ob(a){return function(b){return b[a]}}
function Pb(){return this.__wrapped__}f=f?lb.defaults(wa.Object(),f,lb.pick(wa,gc)):wa;var E=f.Array,Ua=f.Boolean,mb=f.Date,ra=f.Function,xa=f.Math,hc=f.Number,L=f.Object,ya=f.RegExp,S=f.String,T=f.TypeError,Y=[],db=f.Error.prototype,Fa=L.prototype,ec=S.prototype,ic=f._,v=Fa.toString,fc=ya("^"+S(v).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),jc=xa.ceil,Ja=f.clearTimeout,bc=xa.floor,$b=ra.prototype.toString,ma=W(ma=L.getPrototypeOf)&&ma,x=Fa.hasOwnProperty,pa=
Y.push,Ka=Fa.propertyIsEnumerable,va=f.setTimeout,Qb=Y.splice,cc=Y.unshift,Rb=function(){try{var a={},b=W(b=L.defineProperty)&&b,c=b(a,a,a)&&b}catch(e){}return c}(),Da=W(Da=L.create)&&Da,nb=W(nb=E.isArray)&&nb,kc=f.isFinite,lc=f.isNaN,La=W(La=L.keys)&&La,H=xa.max,ua=xa.min,ob=f.parseInt,ub=xa.random,Q={};Q[ka]=E;Q[ea]=Ua;Q[fa]=mb;Q[Ma]=ra;Q[K]=L;Q[ga]=hc;Q[ha]=ya;Q[U]=S;var C={};C[ka]=C[fa]=C[ga]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0};C[ea]=C[U]={constructor:!0,toString:!0,valueOf:!0};
C[vb]=C[Ma]=C[ha]={constructor:!0,toString:!0};C[K]={constructor:!0};(function(){for(var a=cb.length;a--;){var b=cb[a],c;for(c in C)x.call(C,c)&&!x.call(C[c],b)&&(C[c][b]=!1)}})();h.prototype=d.prototype;var q=d.support={};(function(){var a=function(){this.x=1},b={0:1,length:1},c=[];a.prototype={valueOf:1,y:1};for(var e in new a)c.push(e);for(e in arguments);q.argsClass=v.call(arguments)==ja;q.argsObject=arguments.constructor==L&&!(arguments instanceof E);q.enumErrorProps=Ka.call(db,"message")||Ka.call(db,
"name");q.enumPrototypes=Ka.call(a,"prototype");q.funcDecomp=!W(f.WinRTError)&&sb.test(Va);q.funcNames="string"==typeof ra.name;q.nonEnumArgs=0!=e;q.nonEnumShadows=!/valueOf/.test(c);q.ownLast="x"!=c[0];q.spliceObjects=(Y.splice.call(b,0,1),!b[0]);q.unindexedChars="xx"!="x"[0]+L("x")[0];try{q.nodeClass=!(v.call(document)==K&&0)}catch(d){q.nodeClass=!0}})(1);d.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:Sb,variable:"",imports:{_:d}};Da||(na=function(){function a(){}
return function(b){if(B(b)){a.prototype=b;var c=new a;a.prototype=null}return c||f.Object()}}());var Wa=Rb?function(a,b){Tb.value=b;Rb(a,"__bindData__",Tb)}:Nb;q.argsClass||(F=function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&x.call(a,"callee")&&!Ka.call(a,"callee")||!1});var u=nb||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&v.call(a)==ka||!1},Ub=la({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),
D=La?function(a){return B(a)?q.enumPrototypes&&"function"==typeof a||q.nonEnumArgs&&a.length&&F(a)?Ub(a):La(a):[]}:Ub,Na={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:D,loop:"if (callback(iterable[index], index, collection) === false) return result"},pb={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
keys:D,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},Vb={top:"if (!objectTypes[typeof iterable]) return result;\n"+Na.top,array:!1},eb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yb=Ab(eb),mc=ya("("+D(yb).join("|")+")","g"),nc=ya("["+D(eb).join("")+"]","g"),y=la(Na),Ca=la(pb,{top:pb.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),qb=la(pb),M=la(Na,Vb,{useHas:!1}),R=la(Na,Vb);w(/x/)&&(w=function(a){return"function"==typeof a&&v.call(a)==Ma});var Za=ma?function(a){if(!a||v.call(a)!=K||!q.argsClass&&F(a))return!1;var b=a.valueOf,c=W(b)&&(c=ma(b))&&ma(c);return c?a==c||ma(a)==c:xb(a)}:xb,oc=bb(function(a,b,c){x.call(a,c)?a[c]++:a[c]=1}),pc=bb(function(a,b,c){(x.call(a,c)?a[c]:a[c]=[]).push(b)}),qc=bb(function(a,b,c){a[c]=b}),jb=ta,aa=
W(aa=mb.now)&&aa||function(){return(new mb).getTime()},sc=8==ob(Wb+"08")?ob:function(a,b){return ob(O(a)?a.replace(rc,""):a,b||0)};d.after=function(a,b){if(!w(b))throw new T;return function(){if(1>--a)return b.apply(this,arguments)}};d.assign=Ca;d.at=function(a){var b=arguments,c=-1,e=V(b,!0,!1,1),b=b[2]&&b[2][b[1]]===a?1:e.length,d=E(b);for(q.unindexedChars&&O(a)&&(a=a.split(""));++c<b;)d[c]=a[e[c]];return d};d.bind=tb;d.bindAll=function(a){for(var b=1<arguments.length?V(arguments,!0,!1,1):sa(a),
c=-1,e=b.length;++c<e;){var d=b[c];a[d]=N(a[d],1,null,null,a)}return a};d.bindKey=function(a,b){return 2<arguments.length?N(b,19,s(arguments,2),null,a):N(b,3,null,null,a)};d.chain=function(a){a=new h(a);a.__chain__=!0;return a};d.compact=function(a){for(var b=-1,c=a?a.length:0,e=[];++b<c;){var d=a[b];d&&e.push(d)}return e};d.compose=function(){for(var a=arguments,b=a.length;b--;)if(!w(a[b]))throw new T;return function(){for(var b=arguments,e=a.length;e--;)b=[a[e].apply(this,b)];return b[0]}};d.constant=
function(a){return function(){return a}};d.countBy=oc;d.create=function(a,b){var c=na(a);return b?Ca(c,b):c};d.createCallback=function(a,b,c){var e=typeof a;if(null==a||"function"==e)return A(a,b,c);if("object"!=e)return Ob(a);var d=D(a),f=d[0],g=a[f];return 1!=d.length||g!==g||B(g)?function(b){for(var c=d.length,e=!1;c--&&(e=ia(b[d[c]],a[d[c]],null,!0)););return e}:function(a){a=a[f];return g===a&&(0!==g||1/g==1/a)}};d.curry=function(a,b){b="number"==typeof b?b:+b||a.length;return N(a,4,null,null,
null,b)};d.debounce=Mb;d.defaults=qb;d.defer=function(a){if(!w(a))throw new T;var b=s(arguments,1);return va(function(){a.apply(X,b)},1)};d.delay=function(a,b){if(!w(a))throw new T;var c=s(arguments,2);return va(function(){a.apply(X,c)},b)};d.difference=function(a){return qa(a,V(arguments,!0,!0,1))};d.filter=Ha;d.flatten=function(a,b,c,e){"boolean"!=typeof b&&null!=b&&(e=c,c="function"!=typeof b&&e&&e[b]===a?null:b,b=!1);null!=c&&(a=ta(a,c,e));return V(a,b)};d.forEach=$;d.forEachRight=Ia;d.forIn=
M;d.forInRight=function(a,b,c){var e=[];M(a,function(a,b){e.push(b,a)});var d=e.length;for(b=A(b,c,3);d--&&!1!==b(e[d--],e[d],a););return a};d.forOwn=R;d.forOwnRight=zb;d.functions=sa;d.groupBy=pc;d.indexBy=qc;d.initial=function(a,b,c){var e=0,l=a?a.length:0;if("number"!=typeof b&&null!=b){var f=l;for(b=d.createCallback(b,c,3);f--&&b(a[f],f,a);)e++}else e=null==b||c?1:b||e;return s(a,0,ua(H(0,l-e),l))};d.intersection=function(){for(var a=[],b=-1,c=arguments.length,e=I(),d=Ea(),f=d===ba,g=I();++b<
c;){var m=arguments[b];if(u(m)||F(m))a.push(m),e.push(f&&m.length>=Ya&&Sa(b?a[b]:g))}var f=a[0],t=-1,h=f?f.length:0,p=[];a:for(;++t<h;){var q=e[0],m=f[t];if(0>(q?za(q,m):d(g,m))){b=c;for((q||g).push(m);--b;)if(q=e[b],0>(q?za(q,m):d(a[b],m)))continue a;p.push(m)}}for(;c--;)(q=e[c])&&oa(q);r(e);r(g);return p};d.invert=Ab;d.invoke=function(a,b){var c=s(arguments,2),e=-1,d="function"==typeof b,f=a?a.length:0,g=E("number"==typeof f?f:0);$(a,function(a){g[++e]=(d?b:a[b]).apply(a,c)});return g};d.keys=D;
d.map=ta;d.mapValues=function(a,b,c){var e={};b=d.createCallback(b,c,3);R(a,function(a,c,d){e[c]=b(a,c,d)});return e};d.max=Eb;d.memoize=function(a,b){if(!w(a))throw new T;var c=function(){var e=c.cache,d=b?b.apply(this,arguments):Qa+arguments[0];return x.call(e,d)?e[d]:e[d]=a.apply(this,arguments)};c.cache={};return c};d.merge=function(a){var b=arguments,c=2;if(!B(a))return a;"number"!=typeof b[2]&&(c=b.length);if(3<c&&"function"==typeof b[c-2])var d=A(b[--c-1],b[c--],2);else 2<c&&"function"==typeof b[c-
1]&&(d=b[--c]);for(var b=s(arguments,1,c),f=-1,n=I(),g=I();++f<c;)da(a,b[f],d,n,g);r(n);r(g);return a};d.min=function(a,b,c){var e=Infinity,f=e;"function"!=typeof b&&c&&c[b]===a&&(b=null);if(null==b&&u(a)){c=-1;for(var n=a.length;++c<n;){var g=a[c];g<f&&(f=g)}}else b=null==b&&O(a)?rb:d.createCallback(b,c,3),y(a,function(a,c,d){c=b(a,c,d);c<e&&(e=c,f=a)});return f};d.omit=function(a,b,c){var e={};if("function"!=typeof b){var f=[];M(a,function(a,b){f.push(b)});for(var f=qa(f,V(arguments,!0,!1,1)),n=
-1,g=f.length;++n<g;){var m=f[n];e[m]=a[m]}}else b=d.createCallback(b,c,3),M(a,function(a,c,d){b(a,c,d)||(e[c]=a)});return e};d.once=function(a){var b,c;if(!w(a))throw new T;return function(){if(b)return c;b=!0;c=a.apply(this,arguments);a=null;return c}};d.pairs=function(a){for(var b=-1,c=D(a),d=c.length,f=E(d);++b<d;){var n=c[b];f[b]=[n,a[n]]}return f};d.partial=function(a){return N(a,16,s(arguments,1))};d.partialRight=function(a){return N(a,32,null,s(arguments,1))};d.pick=function(a,b,c){var e=
{};if("function"!=typeof b)for(var f=-1,n=V(arguments,!0,!1,1),g=B(a)?n.length:0;++f<g;){var m=n[f];m in a&&(e[m]=a[m])}else b=d.createCallback(b,c,3),M(a,function(a,c,d){b(a,c,d)&&(e[c]=a)});return e};d.pluck=jb;d.property=Ob;d.pull=function(a){for(var b=arguments,c=0,d=b.length,f=a?a.length:0;++c<d;)for(var n=-1,g=b[c];++n<f;)a[n]===g&&(Qb.call(a,n--,1),f--);return a};d.range=function(a,b,c){a=+a||0;c="number"==typeof c?c:+c||1;null==b&&(b=a,a=0);var d=-1;b=H(0,jc((b-a)/(c||1)));for(var f=E(b);++d<
b;)f[d]=a,a+=c;return f};d.reject=function(a,b,c){b=d.createCallback(b,c,3);return Ha(a,function(a,c,d){return!b(a,c,d)})};d.remove=function(a,b,c){var e=-1,f=a?a.length:0,n=[];for(b=d.createCallback(b,c,3);++e<f;)c=a[e],b(c,e,a)&&(n.push(c),Qb.call(a,e--,1),f--);return n};d.rest=ib;d.shuffle=Gb;d.sortBy=function(a,b,c){var e=-1,f=u(b),n=a?a.length:0,g=E("number"==typeof n?n:0);f||(b=d.createCallback(b,c,3));$(a,function(a,c,d){var n=g[++e]=Ta();f?n.criteria=ta(b,function(b){return a[b]}):(n.criteria=
I())[0]=b(a,c,d);n.index=e;n.value=a});n=g.length;for(g.sort(Xb);n--;)a=g[n],g[n]=a.value,f||r(a.criteria),oa(a);return g};d.tap=function(a,b){b(a);return a};d.throttle=function(a,b,c){var d=!0,f=!0;if(!w(a))throw new T;!1===c?d=!1:B(c)&&(d="leading"in c?c.leading:d,f="trailing"in c?c.trailing:f);Oa.leading=d;Oa.maxWait=b;Oa.trailing=f;return Mb(a,b,Oa)};d.times=function(a,b,c){a=-1<(a=+a)?a:0;var d=-1,f=E(a);for(b=A(b,c,1);++d<a;)f[d]=b(d);return f};d.toArray=function(a){return a&&"number"==typeof a.length?
q.unindexedChars&&O(a)?a.split(""):s(a):Ga(a)};d.transform=function(a,b,c,e){var f=u(a);if(null==c)if(f)c=[];else{var n=a&&a.constructor;c=na(n&&n.prototype)}b&&(b=d.createCallback(b,e,4),(f?y:R)(a,function(a,d,e){return b(c,a,d,e)}));return c};d.union=function(){return ab(V(arguments,!0,!0))};d.uniq=Jb;d.values=Ga;d.where=Ha;d.without=function(a){return qa(a,s(arguments,1))};d.wrap=function(a,b){return N(b,16,[a])};d.xor=function(){for(var a=-1,b=arguments.length;++a<b;){var c=arguments[a];if(u(c)||
F(c))var d=d?ab(qa(d,c).concat(qa(c,d))):c}return d||[]};d.zip=Kb;d.zipObject=Lb;d.collect=ta;d.drop=ib;d.each=$;d.eachRight=Ia;d.extend=Ca;d.methods=sa;d.object=Lb;d.select=Ha;d.tail=ib;d.unique=Jb;d.unzip=Kb;kb(d);d.clone=function(a,b,c,d){"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1);return P(a,b,"function"==typeof c&&A(c,d,1))};d.cloneDeep=function(a,b,c){return P(a,!0,"function"==typeof b&&A(b,c,1))};d.contains=Cb;d.escape=function(a){return null==a?"":S(a).replace(nc,Ba)};d.every=Db;d.find=fb;
d.findIndex=function(a,b,c){var e=-1,f=a?a.length:0;for(b=d.createCallback(b,c,3);++e<f;)if(b(a[e],e,a))return e;return-1};d.findKey=function(a,b,c){var e;b=d.createCallback(b,c,3);R(a,function(a,c,d){if(b(a,c,d))return e=c,!1});return e};d.findLast=function(a,b,c){var e;b=d.createCallback(b,c,3);Ia(a,function(a,c,d){if(b(a,c,d))return e=a,!1});return e};d.findLastIndex=function(a,b,c){var e=a?a.length:0;for(b=d.createCallback(b,c,3);e--;)if(b(a[e],e,a))return e;return-1};d.findLastKey=function(a,
b,c){var e;b=d.createCallback(b,c,3);zb(a,function(a,c,d){if(b(a,c,d))return e=c,!1});return e};d.has=function(a,b){return a?x.call(a,b):!1};d.identity=Xa;d.indexOf=wb;d.isArguments=F;d.isArray=u;d.isBoolean=function(a){return!0===a||!1===a||a&&"object"==typeof a&&v.call(a)==ea||!1};d.isDate=function(a){return a&&"object"==typeof a&&v.call(a)==fa||!1};d.isElement=function(a){return a&&1===a.nodeType||!1};d.isEmpty=function(a){var b=!0;if(!a)return b;var c=v.call(a),d=a.length;if(c==ka||c==U||(q.argsClass?
c==ja:F(a))||c==K&&"number"==typeof d&&w(a.splice))return!d;R(a,function(){return b=!1});return b};d.isEqual=function(a,b,c,d){return ia(a,b,"function"==typeof c&&A(c,d,2))};d.isFinite=function(a){return kc(a)&&!lc(parseFloat(a))};d.isFunction=w;d.isNaN=function(a){return Bb(a)&&a!=+a};d.isNull=function(a){return null===a};d.isNumber=Bb;d.isObject=B;d.isPlainObject=Za;d.isRegExp=function(a){return a&&Z[typeof a]&&v.call(a)==ha||!1};d.isString=O;d.isUndefined=function(a){return"undefined"==typeof a};
d.lastIndexOf=function(a,b,c){var d=a?a.length:0;for("number"==typeof c&&(d=(0>c?H(0,d+c):ua(c,d-1))+1);d--;)if(a[d]===b)return d;return-1};d.mixin=kb;d.noConflict=function(){f._=ic;return this};d.noop=Nb;d.now=aa;d.parseInt=sc;d.random=function(a,b,c){var d=null==a,f=null==b;null==c&&("boolean"==typeof a&&f?(c=a,a=1):f||"boolean"!=typeof b||(c=b,f=!0));d&&f&&(b=1);a=+a||0;f?(b=a,a=0):b=+b||0;return c||a%1||b%1?(c=ub(),ua(a+c*(b-a+parseFloat("1e-"+((c+"").length-1))),b)):$a(a,b)};d.reduce=gb;d.reduceRight=
Fb;d.result=function(a,b){if(a){var c=a[b];return w(c)?a[b]():c}};d.runInContext=Va;d.size=function(a){var b=a?a.length:0;return"number"==typeof b?b:D(a).length};d.some=Hb;d.sortedIndex=Ib;d.template=function(a,b,c){var e=d.templateSettings;a=S(a||"");c=qb({},c,e);var f=qb({},c.imports,e.imports),e=D(f),f=Ga(f),n,g=0,m=c.interpolate||Pa,h="__p += '",m=ya((c.escape||Pa).source+"|"+m.source+"|"+(m===Sb?tc:Pa).source+"|"+(c.evaluate||Pa).source+"|$","g");a.replace(m,function(b,c,d,e,f,l){d||(d=e);h+=
a.slice(g,l).replace(uc,Yb);c&&(h+="' +\n__e("+c+") +\n'");f&&(n=!0,h+="';\n"+f+";\n__p += '");d&&(h+="' +\n((__t = ("+d+")) == null ? '' : __t) +\n'");g=l+b.length;return b});var h=h+"';\n",q=m=c.variable;q||(m="obj",h="with ("+m+") {\n"+h+"\n}\n");h=(n?h.replace(vc,""):h).replace(wc,"$1").replace(xc,"$1;");h="function("+m+") {\n"+(q?"":m+" || ("+m+" = {});\n")+"var __t, __p = '', __e = _.escape"+(n?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";
c="\n/*\n//# sourceURL="+(c.sourceURL||"/lodash/template/source["+yc++ +"]")+"\n*/";try{var p=ra(e,"return "+h+c).apply(X,f)}catch(r){throw r.source=h,r;}if(b)return p(b);p.source=h;return p};d.unescape=function(a){return null==a?"":S(a).replace(mc,Ra)};d.uniqueId=function(a){var b=++zc;return S(null==a?"":a)+b};d.all=Db;d.any=Hb;d.detect=fb;d.findWhere=fb;d.foldl=gb;d.foldr=Fb;d.include=Cb;d.inject=gb;kb(function(){var a={};R(d,function(b,c){d.prototype[c]||(a[c]=b)});return a}(),!1);d.first=hb;
d.last=function(a,b,c){var e=0,f=a?a.length:0;if("number"!=typeof b&&null!=b){var h=f;for(b=d.createCallback(b,c,3);h--&&b(a[h],h,a);)e++}else if(e=b,null==e||c)return a?a[f-1]:X;return s(a,H(0,f-e))};d.sample=function(a,b,c){a&&"number"!=typeof a.length?a=Ga(a):q.unindexedChars&&O(a)&&(a=a.split(""));if(null==b||c)return a?a[$a(0,a.length-1)]:X;a=Gb(a);a.length=ua(H(0,b),a.length);return a};d.take=hb;d.head=hb;R(d,function(a,b){var c="sample"!==b;d.prototype[b]||(d.prototype[b]=function(b,d){var f=
this.__chain__,g=a(this.__wrapped__,b,d);return f||null!=b&&(!d||c&&"function"==typeof b)?new h(g,f):g})});d.VERSION="2.4.1";d.prototype.chain=function(){this.__chain__=!0;return this};d.prototype.toString=function(){return S(this.__wrapped__)};d.prototype.value=Pb;d.prototype.valueOf=Pb;y(["join","pop","shift"],function(a){var b=Y[a];d.prototype[a]=function(){var a=this.__chain__,d=b.apply(this.__wrapped__,arguments);return a?new h(d,a):d}});y(["push","reverse","sort","unshift"],function(a){var b=
Y[a];d.prototype[a]=function(){b.apply(this.__wrapped__,arguments);return this}});y(["concat","slice","splice"],function(a){var b=Y[a];d.prototype[a]=function(){return new h(b.apply(this.__wrapped__,arguments),this.__chain__)}});q.spliceObjects||y(["pop","shift","splice"],function(a){var b=Y[a],c="splice"==a;d.prototype[a]=function(){var a=this.__chain__,d=this.__wrapped__,f=b.apply(d,arguments);0===d.length&&delete d[0];return a||c?new h(f,a):f}});return d}var X,ca=[],da=[],zc=0,dc={},Qa=+new Date+
"",Ya=75,Ba=40,Wb=" \t\x0B\f\u00a0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",vc=/\b__p \+= '';/g,wc=/\b(__p \+=) '' \+/g,xc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zb=/\w*$/,ac=/^\s*function[ \n\r\t]+\w/,Sb=/<%=([\s\S]+?)%>/g,rc=RegExp("^["+Wb+"]*0+(?=.$)"),Pa=/($^)/,sb=/\bthis\b/,uc=/['\n\r\t\u2028\u2029\\]/g,gc="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),yc=0,ja="[object Arguments]",ka="[object Array]",ea="[object Boolean]",fa="[object Date]",vb="[object Error]",Ma="[object Function]",ga="[object Number]",K="[object Object]",ha="[object RegExp]",U="[object String]",J={};J[Ma]=!1;J[ja]=J[ka]=J[ea]=J[fa]=J[ga]=J[K]=J[ha]=J[U]=!0;var Oa={leading:!1,maxWait:0,trailing:!1},Tb={configurable:!1,enumerable:!1,value:null,writable:!1},z={args:"",array:null,
bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},Z={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Ua={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},wa=Z[typeof window]&&window||this,P=Z[typeof global]&&global;!P||P.global!==P&&P.window!==P||(wa=P);var lb=Va();wa._=lb}).call(this);
;/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
	var initializing = false,
		fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/,
		class_methods = ['extend', 'mixin', 'statics'],
		ORIG_STATIC = '__orig_static';

	// Returns a function that calls fn, but provides _super[name]
	// as the this._super available internally within the function
	function addSuper (name, fn, _super){
		return function() {
			var tmp = this._super;

			// Add a new ._super() method that is the same method
			// but on the super-class
			this._super = _super[name];

			// The method only need to be bound temporarily, so we
			// remove it when we're done executing
			var ret = fn.apply(this, arguments);
			this._super = tmp;

			return ret;
		};
	}

	// Copy a property over onto the prototype, also includes making _super available
	function copyProperty (name, prop, _super) {
		// Check if we're overwriting an existing function
		return typeof _super[name] === 'function' &&
			typeof prop[name] === 'function' && fnTest.test(prop[name]) ?
			(addSuper)(name, prop[name], _super) :
			prop[name];
	}

	// The base Class implementation (does nothing)
	this.Class = function(){};

	// Create a new Class that inherits from this class
	Class.extend = function(prop) {
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {
			prototype[name] = copyProperty(name, prop, _super);
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if ( !initializing && this.init )
				this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		Class.mixin = function(prop) {
			var proto = this.prototype;

			if (typeof prop === 'function') {
				prop = prop.prototype;
			}

			// Copy the properties over onto the existing prototype
			for (var name in prop) {
				proto[name] = copyProperty(name, proto, prop) || prop[name];
			}

			return this;
		};

		// Add static methods to child class
		var static_props = Object.keys(this),
			// Bind the original static method to support multiple static inheritance
			bindOrig = function(prop) {
				// Create the static store if it does not already exist
				var origStaticStore = _super[ORIG_STATIC] = _super[ORIG_STATIC] || {};
				// Store the property in the store, or fetch from the store
				origStaticStore[prop] = origStaticStore[prop] || this[prop];
				// Return the function with the appropriate scope
				return function() {
					return origStaticStore[prop].apply(Class, arguments);
				};
			};
		for (var i = 0, prop; (prop = static_props[i]); ++i) {
			// Only add properties that are not Class.js methods
			// (ie don't include extend, mixin or statics)
			if (class_methods.indexOf(prop) === -1) {
				Class[prop] = bindOrig.call(this, prop);
			}
		}

		// Add static methods to base class
		Class.statics = function(statics) {
			$.extend(this, statics);
			return this;
		};

		return Class;
	};

})();
;(function(){var q=[].slice,l={on:function(b,c,a){if(!m(this,"on",b,[c,a])||!c)return this;this._events||(this._events={});(this._events[b]||(this._events[b]=[])).push({callback:c,context:a,ctx:a||this});return this},once:function(b,c,a){if(!m(this,"once",b,[c,a])||!c)return this;var e=this,d=_.once(function(){e.off(b,d);c.apply(this,arguments)});d._callback=c;return this.on(b,d,a)},off:function(b,c,a){var e,d,f,g,h,k,n,l;if(!this._events||!m(this,"off",b,[c,a]))return this;if(!b&&!c&&!a)return this._events=
void 0,this;g=b?[b]:_.keys(this._events);h=0;for(k=g.length;h<k;h++)if(b=g[h],f=this._events[b]){this._events[b]=e=[];if(c||a)for(n=0,l=f.length;n<l;n++)d=f[n],(c&&c!==d.callback&&c!==d.callback._callback||a&&a!==d.context)&&e.push(d);e.length||delete this._events[b]}return this},trigger:function(b){if(!this._events)return this;var c=q.call(arguments,1);if(!m(this,"trigger",b,c))return this;var a=this._events[b],e=this._events.all;a&&k(a,c);e&&k(e,arguments);return this},stopListening:function(b,
c,a){var e=this._listeningTo;if(!e)return this;var d=!c&&!a;a||"object"!==typeof c||(a=this);b&&((e={})[b._listenId]=b);for(var f in e)b=e[f],b.off(c,a,this),(d||_.isEmpty(b._events))&&delete this._listeningTo[f];return this}},p=/\s+/,m=function(b,c,a,e){if(!a)return!0;if("object"===typeof a){for(var d in a)b[c].apply(b,[d,a[d]].concat(e));return!1}if(p.test(a)){a=a.split(p);d=0;for(var f=a.length;d<f;d++)b[c].apply(b,[a[d]].concat(e));return!1}return!0},k=function(b,c){var a,e=-1,d=b.length,f=c[0],
g=c[1],h=c[2];switch(c.length){case 0:for(;++e<d;)(a=b[e]).callback.call(a.ctx);break;case 1:for(;++e<d;)(a=b[e]).callback.call(a.ctx,f);break;case 2:for(;++e<d;)(a=b[e]).callback.call(a.ctx,f,g);break;case 3:for(;++e<d;)(a=b[e]).callback.call(a.ctx,f,g,h);break;default:for(;++e<d;)(a=b[e]).callback.apply(a.ctx,c)}};_.each({listenTo:"on",listenToOnce:"once"},function(b,c){l[c]=function(a,c,d){var f=this._listeningTo||(this._listeningTo={}),g=a._listenId||(a._listenId=_.uniqueId("l"));f[g]=a;d||"object"!==
typeof c||(d=this);a[b](c,d,this);return this}});_.Events=l})();
;(function(a){a.console||(a.console={});a.console.log||(a.console.log=function(){});(function(){for(var e=0,f=["ms","moz","webkit","o"],b=0;!a.requestAnimationFrame&&b<f.length;++b)a.requestAnimationFrame=a[f[b]+"RequestAnimationFrame"];a.requestAnimationFrame?a.cancelAnimationFrame=a.cancelAnimationFrame||a.mozCancelAnimationFrame||a.webkitCancelAnimationFrame:(a.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-e));e=c+d;return a.setTimeout(function(){b(c+d)},d)},a.cancelAnimationFrame=
function(a){clearTimeout(a)})})()})(this);
;_.significant=function(a){return null!==a&&void 0!==a&&""!==a&&!_.isNaN(a)};_.isInt=function(a){return 0===a%1};_.isFloat=function(a){return 0!==a%1};_.firstWhereGreater=function(a,e){for(var f=_.keys(e),g=f.length,h=a.length,c=[],k=function(d){e[d]<a[b][d]&&c.push(d)},b=0;b<h;b++)if(c=[],_.forEach(f,k),c.length===g)return a[b];return{}};_.mapToString=function(){return _.map.apply(this,arguments).join("")};
;(function(b){function h(a,c,d){var e={};b.each(["","-webkit-","-moz-","-ms-","-o-"],function(b,f){e[f+a]=d?f+c:c});return e}if(b){b.fn.quickEach=b.fn.quickEach||function(){var a=jQuery([1]);return function(c){var d=-1,b,f=this.length;try{for(;++d<f&&(b=a[0]=this[d])&&!1!==c.call(a,d,b););}catch(g){throw delete a[0],g;}delete a[0];return this}}();b.fn.showIf=function(a){return this[a?"show":"hide"]()};b.fn.sibClass=function(a){this.addClass(a).siblings().removeClass(a);return this};b.fn.draw=function(){this.get(0).clientLeft;
return this};var k=100;b.fn.front=function(){var a=this.data("zIndexData")||0,c=this.css("z-index"),c=b.isNumeric(c)?+c-a:0;this.css("z-index",c+ ++k);this.data("zIndexData",k);return this};b.fn.whereData=function(a,c){return _.isArray(c)?this.filter("[data-"+a+'="'+c.join('"], [data-'+a+'="')+'"]'):this.filter("[data-"+a+'="'+c+'"]')};b.fn.scrollIntoView=function(a){a=a||this.parent();var c=a.height(),b=this[0].offsetTop,e=b+this.outerHeight();b<a[0].scrollTop?a.scrollTop(b):e>a[0].scrollTop+c&&
a.scrollTop(e-c)};b.stripHTML=function(a){return b("<div/>").html(a).text()};var f=b({});b.subscribe=function(){f.on.apply(f,arguments)};b.unsubscribe=function(){f.off.apply(f,arguments)};b.publish=function(){f.trigger.apply(f,arguments)};b.one=function(){f.one.apply(f,arguments)};b.fn.await=function(){var a=Array.prototype.slice.apply(arguments),c,b=a.pop(),e=function(){c=!1};e.reblock=function(){c=!0};a.push(function(){if(!c){c=!0;var a=Array.prototype.slice.apply(arguments);a.splice(0,0,e);return b.apply(this,
a)}});this.on.apply(this,a);return this};b.fn.swapInImage=function(a){a=a||{style:"style","class":"class",alt:"alt",title:"title","data-src":"src"};this.filter(":not(img)").quickEach(function(){var c=this,d={};_.forEach(a,function(a,b){d[a]=c.attr(b)});d.src&&this.replaceWith(b("<img>",d))});return this};b.fn.trackToDataLayer=function(a){var b={};return this.on("keydown blur",function(d){var e=this.value;13!==d.which&&"blur"!==d.type||!e||b[e]||(window.dataLayer=window.dataLayer||[],d={},b[e]=!0,
d[a]=e,d.event=a,window.dataLayer.push(d))})};var l=function(a){var b=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"],d;for(d in b)if(void 0!==a.style[b[d]])return!0;return!1}(document.createElement("transtest"));b.fn.translide=function(a,c,d,e){a=a===parseFloat(a,10)?a+"px":a;c=c===parseFloat(c,10)?c+"px":c;var f="translate3d("+a+","+c+",0)",g;""===a&&""===c&&(f="");l?(d&&(g=h("transition","transform "+d+"ms",!0),this.css(g),this.on("transitionend.trs webkitTransitionEnd.trs oTransitionEnd.trs MSTransitionEnd.trs",
function(){var a=b(this);e&&(a.off(".trs"),e.call(this));a.css("transition","")})),a=h("transform",f),this.css(b.extend({},g,a))):("static"===this.css("position")&&this.css("position","relative"),d?this.animate({top:c,left:a},d,e||b.noop):this.css({top:c,left:a}));return this};b.extend(window,{hasTransitions:l,prefixCSS:h})}})(jQuery);
;(function(e,p,A,H,c){function I(a){var b={};a.replace(/[?#&]+([^=&]+)=([^&]*)/gi,function(a,c,f){b[c]=decodeURIComponent(f.replace("+"," "))});return b}function J(){return I(e.location.href)}function B(a){if(4>a.length)return a;var b=c.swap_commas?".":",";return B(a.substr(0,a.length-3))+b+a.substr(a.length-3)}function y(a,b){if(!c.use_image_cdn)return a;a="https://"+R[(b||q)-1]+".graphiq.com"+a;b||(q=3===q?1:q+1);return a}function K(){return"//"+c.subdomain+"."+c.DOMAIN}function v(a){a=a||e.event;
a.stopPropagation&&a.stopPropagation();a.preventDefault&&a.preventDefault();a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1}function L(a){function b(){var a=$(this),b=a.parent(),a=a.find(":selected").attr("selected",!0).text(),a=b.find(".val").text(a);b.is(":visible")&&b.hasClass("fancy-select-resize")&&b.width(a.outerWidth())}$(a||".fancy-select-container select").change(b).each(b)}function M(a){return(a+"").replace(/&/g,"-And-").replace(/[^\w]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,
"")}function n(a,b,d,s,f,h){var l,k,m,p=c.IS_LOCAL||c.IS_EMPLOYEE||c.IS_ODESKER,r=!!c.comp_ga,n,q=!1,g={hitType:"event"};_.isObject(a)&&!_.isArray(a)?(f=a,g.eventCategory=f.eventCategory,delete f.eventCategory,g.eventAction=f.eventAction,g.eventLabel=f.eventLabel,g.eventValue=f.eventValue,g.nonInteraction=!!f.nonInteraction,void 0===f.nonInteraction&&(q=!0),b=f.clickElement,d=f.clickEvent,delete f.clickElement,delete f.clickEvent,s=!!f.toKibana):(f=f||{},g.eventCategory=a[0],f.eventAction=g.eventAction=
a[1],f.eventLabel=g.eventLabel=a[2],f.eventValue=g.eventValue=a[3],f.nonInteraction=g.nonInteraction=!!a[4],void 0===a[4]&&(q=!0));if(q&&c.IS_DEVELOPER)return MSG("nonInteraction flag was not specificed in call to EVT function","red"),$.error("nonInteraction flag was not specificed in call to EVT function"),!1;if(void 0===g.eventCategory||void 0===g.eventAction)return console.log("ERROR: both eventCategory and eventAction need to be defined"),!1;_.isFunction(b)?m=b:_.isString(b)?l=b:k=b;if(k&&!d)return console.log("ERROR: no click_event passed"),
!1;k&&(k=$(k),l=l||k.attr("href")||k.data("href")||"","java"===l.substr(0,4)&&(l=""),n="_blank"===k.attr("target"));b=l&&d&&(1===d.button||d.ctrlKey||d.metaKey);if(l&&!n&&!b)if(z("EVT: wait for both GA and AnalyticsFunnel callbacks")){var t;c.AnalyticsFunnel&&c.AnalyticsFunnel.ping&&(t=$.Deferred(),c.AnalyticsFunnel.ping().always(t.resolve),setTimeout(t.resolve,500));k=$.Deferred();m=k.resolve;N(m);$.when(t,k).always(function(){clearTimeout(C);e.location=l})}else m=function(){c.AnalyticsFunnel&&c.AnalyticsFunnel.ping&&
c.AnalyticsFunnel.ping();clearTimeout(C);e.location=l},N(m);t=e.ga||$.noop;k=!z("Google Analytics: dont send nonInteraction: true events")||!1===g.nonInteraction;h&&(k=!1);u.push($.extend({bin:"",time:w()},g));k&&(g.hitCallback=m,t("send",g),r&&!c.IS_WIDGET&&(t("c.send",g),u.push($.extend({bin:"c",time:w()},g))),c.page_ga&&(t("s.send",g),u.push($.extend({bin:"s",time:w()},g))));c.ABTest&&c.ABTest.active_tags&&!_.isEmpty(c.ABTest.all_tags())&&!1===a[4]&&void 0===s&&(s=!0);s&&c.Analytics.send_data(g.eventCategory,
f);if(l&&b)return e.open(l),v(d),!1;if(!m||n)return!0;m&&(p||O||!k)&&m();return!1}function w(a){return(+new Date-S)/1E3>>0}function D(){if(z("Mobile Frame Test 1")&&-1===["home","cat"].indexOf(c.real_page_type)&&e.FTBAds.ads&&!c.disable_mobile_frame){var a=navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i),b=navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 8_\d/i),d=c.IS_LOCAL&&navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 10_\d/i);return!(a||b||d)||
-1!==navigator.userAgent.indexOf("CriOS")||a&&1>/OS 7_(\d)/.exec(navigator.userAgent)[1]>>0||!b?!1:c.iOSviewport=!0}return!1}function T(){var a=U.apply(this,arguments);if(0!==arguments.length||void 0===a)return a;a.top+=x.scrollTop();return a}try{p.domain=c.DOMAIN}catch(Y){}e.is_mobile=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());e.is_touch=!!("ontouchstart"in e)||!!navigator.msMaxTouchPoints;e.is_IE=!!e.navigator.userAgent.match(/MSIE ([1-9]{1,})/);
e.ie=/MSIE \d/.test(navigator.userAgent);e.ie_lt9=e.ie&&(null===p.documentMode||9>p.documentMode);e.use_svg=p.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape","1.1");e.is_bot=/googlebot|yahoo! slurp|bingbot|baiduspider/i.test(navigator.userAgent)||c.IS_PHANTOM;var r;try{r=e.self!==e.top}catch(Z){r=!0}e.is_iframe=r;e.is_webkit="WebkitAppearance"in p.documentElement.style;r=function(a,b){var d=a;a=c.t&&c.t.dict?c.t.dict[a]||a:a;if(!b)return a;d=d.match(/(\[.*?\])/g);if(b instanceof
Array)for(var e=0;e<d.length;e++)a=a.replace(d[e],b[e]);else a=a.replace(d[0],b);return a};var q=1,E={},R=["s3","s","s2"],P=c.default_imgs||{},F={},z=function(a){return a&&c&&c.gatekeeper?!!c.gatekeeper[a]:!1},u=[],O=!1,C,N=_.once(function(a){C=setTimeout(function(){O=!0;c.Analytics.send_data("ga_error",{action:"GA event did not send",time_on_page:w()});a()},1E3)});n.debug=function(a,b){_.forEach(u,function(d){a&&d.eventCategory!==a||void 0!==b&&d.bin!==b||console.log(_.pick(d,"eventCategory eventAction eventLabel eventValue nonInteraction bin".split(" ")))})};
n.getAll=function(){return _.filter(u,function(a){return""===a.bin})};void 0!==J().evt_debug&&(u.push=function(a){""===a.bin&&console.log("EVT: ",_.pick(a,"eventCategory eventAction eventLabel eventValue nonInteraction bin".split(" ")));u[u.length]=a});var Q=r("Less"),G=r("More"),V=/(\S)\s(\S{1,10})(\s*)$/;String.prototype.deorphan=function(){return this.replace(V,"$1&nbsp;$2$3")};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};RegExp.quote=RegExp.quote||
function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")};var S=+new Date,W=function(a){for(var b=["","webkit","o"],d=-1,c=b.length,f=!1,e;(d+=1)<c;)if(e=b[d],"on"+e+"transitionend"in a){f=new a.Boolean(!0);f.event=(e?e+"T":"t")+"ransitionEnd";break}return f}(e);$.extend(e,{randHash:function(a){for(var b="";a--;)b+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return b},time_on_site:w,inherits:function(a,b){function d(){}d.prototype=
b.prototype;a.prototype=new d;a.prototype.constructor=a;return a.prototype},stopProp:function(a){a=a||e.event;a.stopPropagation&&a.stopPropagation();a.cancelBubble=!0},deparam:I,GET:J,set_cookie:function(a,b,d,c){var f="",h="";d&&(f=new Date,f.setTime(f.getTime()+36E5*d),f="; expires="+f.toUTCString());c?h=e.location.host:(h=e.location.host.replace(/\.?[^.]+((\.[^.]+){2,3}).?$/,"$1"),h===e.location.host&&(h=""));b=encodeURIComponent(b);p.cookie=a+"="+b+f+"; path=/"+(h?"; domain="+h:"");500<b.length&&
n(["Cookies",a,h,b.length,!0])},get_cookie:function(a){a+="=";for(var b=p.cookie.split(";"),d=0;d<b.length;d++){for(var c=b[d];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(a))return decodeURIComponent(c.substring(a.length,c.length))}return null},add_commas:function(a){if(isNaN(a))return a;a=(a+"").split(".");var b=c.swap_commas?",":".";return"-"===a[0].charAt(0)?"-"+B(a[0].substr(1))+(a[1]?b+a[1]:""):B(a[0])+(a[1]?b+a[1]:"")},split_template:function(a){a=a.replace(/(^\{|\}$)+/g,"").split("}{");
return 1===a.length&&""===a[0]?[]:a},get_img_url:function(a,b,d){if(!b)return"";if(P[b])return e.use_svg?y("/rx/img/"+P[b].file_name,1):"";a||(a=c.intl_of||c.clone_of||c.app_id);var s=a+"-"+b;F[s]?d=void 0:F[s+"-t2"]&&(d="t2");F[s+(d?"-"+d:"")]=!0;a="/sites/default/files/"+a+"/media/images/"+(d?d+"/":"")+b;if(E[b])return y(a,E[b]);E[b]=q;return y(a)},get_img_cdn_url:y,get_detail_url:function(a,b){return"/l/"+a+(b?"/"+M(b):"")},get_srp_url:K,get_guide_url:function(){return K()+"#guide"},get_compare_url:function(a,
b){if(!b||!b.length)throw Error("Invalid items");b.sort(function(a,b){return a.id-b.id});for(var d="",c="",e=0;e<b.length;e++){if(!b[e].id||!b[e].encoded_title)throw Error("Listing_id or encoded_title missing");d+=(0===e?"":"-vs-")+b[e].encoded_title;c+=(0===e?"":"-")+b[e].id}return a+"/compare/"+c+"/"+d},get_home_url:function(){return"//www."+c.DOMAIN},goto_review:function(a,b,d){a="/review/"+a;b&&(a+="/"+b);a+="?trFrom="+(d||c.page_type||"u");e.location=a},cancelEvent:v,vCancelEvent:function(a){if(e.is_touch){var b=
a.pageX,d=a.pageY,c;b&&d&&(c=$('<div class="vclick-block">').css({top:d-15,left:b-15}).appendTo("body"),setTimeout(function(){c.remove()},500))}return v(a)},fancy_select_bind:L,fancy_select_initialize:function(a){var b=$(a?a:"select");if(b.length){var d;b.each(function(){d=$(this);d.parent().hasClass("fancy-select-container")||d.wrap('<div class="fancy-select-container btn"/>').after('<span class="fancy-select bg_grad"><span class="val bbx"/><div class="arrow"/></span>')});L(a)}},encode_title:M,decode_title:function(a){return(a+
"").replace(/-And-/g," & ").replace(/-/g," ")},unserialize_info:function(a){a=decodeURIComponent(a);a=a.split(/&/);for(var b={},d,c=0;c<a.length;c++)d=a[c].split(/=/),b[d[0]]=d[1];return b},render_tpl:function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a=a.replace(RegExp("{"+d+"}","g"),b[d]));return a},tipify:function(a,b){a='<span class="tip-label">'+a+"</span>";return b?'<span class="has-tip">'+a+'<div class="tip">'+b+"</div></span>":a},tt:r,gatekeeper:z,EVT:n,track_click:function(a){var b=Array.prototype.slice.call(arguments,
1);5>b.length&&(b[4]=!1);H.on("click",a,function(a){return n(b,this,a)})},get_gaq_page_type:function(){switch(c.page_type){case "srp":return"SRP";case "detail":return"Detail Page";case "comp":return"Side-by-side Page";case "qa":return"Questions Page";case "serp":return"SERP";case "cat":return"Product Page";case "hp":return"Home Page";case "map":return"SRP Map";case "widget":return"Widget";case "wlp":return"WLP";case "editorial":return"Editorial";default:return{home:"Homepage"}[c.real_page_type]||
"Other"}},timer:function(a){var b=_.now();return a?(a(),_.now()-b):{get:function(){return _.now()-b}}},sxCheckbox:function(a){a=""+('<div class="sx-cb'+(a?" on thm-on":"")+'">');a=e.use_svg?a+'<svg class="sx-cb-svg" width="31" height="31"><path class="thm-on-stroke" fill="none" stroke-width="3" d="M 9 13 L 15 19 L 25 7"/></svg>':a+'<div class="sx-cb-inner"><div class="sx-cb-mark thm-on-bt"></div><div class="sx-cb1"></div><div class="sx-cb2"></div><div class="sx-cb3"></div></div>';return a+"</div>"},
round:function(a,b){return parseFloat(Math.round(a*Math.pow(10,b))/Math.pow(10,b).toFixed(b))},css3T:W});$.extend(c,{has_modifier_key:function(a){return a&&(a.ctrlKey||a.metaKey||a.shiftKey||a.altKey)},setUpStars:function(){var a,b="";for(a=0;5>a;a++)b+='<i class="i icon-rating" data-star="'+a+'"></i>';$(".js-rating-star:not(.js-stared)").append(b).addClass("js-stared")},scrollBody:function(){var a=$(D()?".viewport .viewport-content":"html, body");return a.animate.apply(a,arguments)}});var x;x=D()?
$(".viewport-content"):$w;e.$wScroll=x;var U=$.fn.offset;D()&&($("html").addClass("mob-frame-test-1"),$(".stnd-topnav, .fixed, .ios-fixed").prependTo("body"),$("#all-header-mobile").appendTo(".fake-ad"),$.fn.offset=T);var X=A.width();$.each(["resize","scroll","resize_width"],function(a,b){var c=X;$.each(["throttle","debounce"],function(n,f){var h=b+"_"+f;e[h]=function(l,k,m){if(k)return $.unsubscribe(h,l);$.subscribe(h,l);if(e[h]._func)return{fn:e[h]._func};m=e[h]._func=_[f](function(b){if(2===a){var f=
A.width();if(c!==f||this!==e||b.isTrigger)c=f,$.publish(h)}else $.publish(h)},200);if("scroll"===b)x[b](m);else A[2===a?"resize":b](m);return{fn:m}}})});e.$w=x;H.on("vclick",".more-list",function(a){var b=$(this);b.parent().find(".noshow").toggle();b.toggleClass("more-list-show");var c=$(this).text();-1!==c.search(G)?b.get(0).firstChild.nodeValue=c.replace(G,Q):b.get(0).firstChild.nodeValue=c.replace(Q,G);b.closest(".js-render").trigger("resize");v(a)}).on("vclick",".show-more-stuff",function(a){v(a);
a=$(this);a.prev(".more-stuff").show()[0]||$(".more-stuff."+a.data("stuff")).show();a.closest(".js-render").trigger("resize");a.remove()}).on("click",".hid-range",function(a){v(a);n(["Show Range","Show Range"]);$(this).hide().next().show()}).on("click",".open-in-playground",function(a){e.openSoftjoinInPlayground($(a.currentTarget).data("softjoin-id"),$(a.currentTarget).data("listing-id"))})})(this,document,$w,$d,FTB);
;(function(e){function h(a,b,d){if(c.analytics_ajax_enabled&&c.analytics_is_enabled&&(c.Analytics.isEnabled()||c.IS_WIDGET)&&(d=d||{},b=e.isFunction(b)?b.call():b,b.bucket=a,b=e.extend({},k(),b),c.ABTest&&(a=c.ABTest.all_tags(),e.isEmptyObject(a)||(b.experiments=a)),window.detail&&detail.encoded_title&&(b.listing_id=detail.id,b.listing_title=detail.encoded_title.replace(/-/g,"_")),c.Analytics.sent.push(b),b=e.ajax(e.extend({data:b},n,d)),!1===d.async))return b}function k(){var a={};a.url=location.href||
"";a.page_referrer=document.referrer||"";a.user_agent=p;a.screen_size=d;a.ad_bucket=l;a.media=f;gatekeeper("Analytics: standalone server")&&(a.is_emp=c.IS_EMPLOYEE||"1"===get_cookie("ftb_emp"),a.uid=c.user.uid||0,a.name=c.user.name||"",a.app_id=c.app_id||0,a.app_name=c.app_name||"",a.net_id=c.net_id||0,a.ftb_tracker_session=get_cookie("ftb_tracker_session")||"",a.ltc=get_cookie("ltc")||"",a._ftbuptc=get_cookie("_ftbuptc")||"",a._ftbuptcs=get_cookie("_ftbuptcs")||"");return a}var c=window.FTB=window.FTB||
{},n={url:"/ajax_store_analytics",crossDomain:!1,cache:!1,type:"GET"},p=navigator.userAgent,d=window.innerWidth||$w.width(),l="",f="",f=480>=d?"mobile":1024>=d?"tablet":"desktop",l=_.firstWhereGreater([{width:480,label:"mobile"},{width:728,label:"tablet"},{width:1366,label:"small_dt"},{width:9999999,label:"large_dt"}],{width:d}).label,m=!0,g=+new Date;+(get_cookie("__ats")||g-2E3-1)>g-2E3&&(m=!1);set_cookie("__ats",g);c.Analytics=e.extend({send_data:h,error:function(a){_.isString(a)&&(a={title:a});
h("frontend_errors",e.extend({page_url:window.location.href},a))},media:f,default_data:k,sent:[],isEnabled:function(){return m}},_.Events)})(jQuery);
;(function(b){function c(){b.ajax({url:d,dataType:"jsonp",jsonp:!1,jsonpCallback:"get_tracker_id",success:function(a){a&&a.ftbuptcs&&(set_cookie("_ftbuptc",a.ftbuptc,17520),set_cookie("_ftbuptcs",a.ftbuptcs,4),_.defer(function(){FTB.Analytics.send_data("session_tracking",{_ftbuptc:a.ftbuptc,_ftbuptcs:a.ftbuptcs,page_type:FTB.page_type,ip:!0})}),FTB.Analytics.trigger("tracked-session"),FTB.Analytics.tracked_session=!0)}})}if(!FTB.disable_all_tracking){var d="//"+(FTB.IS_LOCAL?"www.dw":"upt.graphiq")+
".com/upt";_.defer(c)}})(jQuery);
;(function(c,w,x){var f;window.Box=function(a){var b=~~a.w||"auto",h=~~a.h||"auto",f=~~a.pad||0,p=~~a.radius||0,y=a.opacity||60,q=a.iframe,s=!!a.full,g=a.img,z=a.onopen||c.noop,A=a.overflow||"auto",B=a.noescape,t=a.animate,C=a.maxh||"auto",D=a.maxw||"auto",l=a.cache_key;if(s)b=h="100%";else var u=$w.width(),b=b>u?Math.min(b,0.9*u):b;var d,m,e,r;l&&c("#"+l).length?(d=c("#"+l).show(),e=d.find(".BOX"),r=d.find(".BOX-mask").first(),m=d.find(".BOX-inner"),this._from_cache=d._from_cache=!0):(d=c("<div/>",
{"class":"BOX-wrap",css:{zIndex:9999+c(".BOX").length}}),r=c("<div/>",{"class":"BOX-mask"}).appendTo(d),m=c("<div/>",{"class":"BOX-inner"}).appendTo(d),e=c("<div/>",{"class":"BOX ",css:{width:/auto|%/.test(b)?b:b+2*f,height:~~h?h+2*f:h,background:a.bg||"#fff",padding:f||"","border-radius":p,overflow:A,zIndex:1E4+c(".BOX").length,maxHeight:C,maxWidth:D}}).hide().appendTo(m),l&&d.attr("id",l),t&&e.css({transform:"scale3d(.9,.9,1)",opacity:0}));s&&e.css({position:"absolute",width:"auto",height:"auto",
top:0,right:0,bottom:0,left:0});var n=this.recenter=function(){if(!s){var a=e.outerHeight(),b="";a>=$w.height()||(b=Math.max(($w.height()-a)/2,0));e.css({marginTop:b})}},k=this.hide=function(b){if(a.preClose&&!k.confirmed)a.preClose(function(){k.confirmed=1;k(b);k.confirmed=0});else{if(a.onclose)a.onclose(b);c("body").removeClass("BOX-open");m.css("opacity","auto");r.css("opacity","auto");setTimeout(function(){l&&d.attr("id")||a.not_remove?d.hide():d.remove();a.close_callback&&a.close_callback();
resize_debounce(n,!0);$d.off("keyup",v)},300)}};this.size=function(a,c,d){e.width(b=a).height(h=c);d&&n()};this.toggle_fullscreen=function(){e.toggleClass("BOX-fullscreen")};this.get_element=function(){return e};var v=function(a){27!==a.keyCode||B||k(a)};q&&(q="<iframe width="+b+" height="+h+' frameborder="0" src="'+q+'"></iframe>');g&&(g=c('<img style="vertical-align:top;" src="'+g+'"/>'),p=function(){var a=g[0].height/g[0].width;b="auto"===b?Math.min(g[0].width,w.width()-2*f):b;h=b*a;g.css({width:b,
height:h});n();e.css("display","inline-block")},g.load(p),g[0].complete&&p());d._from_cache||(e.html(g||q||a.html),a.hideX||e.append(c('<div class="box-x">').click(k)),a.disableClose||m.click(function(a){c(a.target).is(".BOX-inner")&&k(a)}),d.appendTo("body"));c("body").addClass("BOX-open");setTimeout(function(){m.css("opacity",1);r.css("opacity",y/100)},1);g||(n(),e.css("display","inline-block"));t&&setTimeout(function(){e.css({transition:".5s ease-out",transform:"scale3d(1,1,1)",opacity:1})});z();
resize_debounce(n);x.on("keyup",v)};window.BOX={show:function(a){return f=new window.Box(a)},hide:function(){f&&f.hide()},size:function(a,b,c){f&&f.size(a,b,c)},recenter:function(){f&&f.recenter()}}})(jQuery,$w,$d);
;(function(){function e(){if(f){FTB.spin(!1);var a=g+300-_.now();0<a?setTimeout(d,a):d()}}function c(){return h.length?h:$(".BOX")}function l(){var a=c(),b=a.find(".BOX-mask").css({opacity:0});b.length||(b=$("<div/>",{"class":"BOX-mask",css:{opacity:0}}).appendTo(a));setTimeout(function(){b.css("opacity",0.1)},1)}function d(){c().spin(!1).find(".BOX-mask").css("opacity",0);setTimeout(function(){c().find(".BOX-mask").remove()},300)}FTB.spin=FTB.spin||$.noop;var k=BOX,h=$(),f=!1,g=_.now();k.preload=
function(a){var b=c();b.is(":visible")?(b.spin(a),!1===a?d():l(),g=_.now()):FTB.spin(a);f=!1===a?!1:!0};var m=Box;window.Box=function(){var a=m.apply(this,arguments);e();return a};var n=BOX.show;k.show=function(){var a=n.apply(this,arguments);e();return a}})();
;FTB.Colors={lightRed:"#fc7d69",lightOrange:"#feb24e",lightYellow:"#fee46c",lightGreen:"#a8d76f",lightTeal:"#63ceb4",lightBlue:"#57c7f8",lightPurple:"#9c89d0",lightPink:"#fd79a4",red:"#fb6635",orange:"#fca037",yellow:"#fedc38",green:"#88cf59",teal:"#3ac2a0",blue:"#2bb8f6",purple:"#836cc6",pink:"#fd588e",darkRed:"#eb5b2c",darkOrange:"#ef9218",darkYellow:"#eecd2f",darkGreen:"#7dc14f",darkTeal:"#32b694",darkBlue:"#23a9e7",darkPurple:"#7962b7",darkPink:"#e74c80",ftbSponsored:"#FFFBF0",vizLightGray:"#ededed",
bodyDarkGray:"#4d4d4d",bodyGray:"#7a7a7a",bodyLightGray:"#f5f5f5",bodyLighterGray:"#fafbfd",bodyBlack:"#222222",borderLight:"#eeeeee",borderDark:"#e1e1e1"};FTB.Colors.btnBlue=FTB.Colors.blue;FTB.Colors.ftbBlue2=FTB.Colors.blue;FTB.Colors.txtBlue=FTB.Colors.darkBlue;FTB.Colors.ftbBlue=FTB.Colors.darkBlue;FTB.Colors.ftbDarkBlue=FTB.Colors.darkBlue;
;(function(q,m,x){function K(a,b,c){a=(0.12-a/100*0.07)*b>>0;var d=0.3*b>>0,e=0.1*b>>0,g="M "+a+" "+(b-a),n;n='<svg class="viz area-viz">'+('<path stroke-linecap="round" stroke-width="2" stroke="'+c+'" d="'+g+" l 0 -"+e+" "+g+" l "+e+" 0 "+g+" L "+d+" "+(b-d)+'"/>');g="M "+(b-a)+" "+a;n+='<path stroke-linecap="round" stroke-width="2" stroke="'+c+'" d="'+g+" l 0 "+e+" "+g+" l -"+e+" 0 "+g+" L "+(b-d)+" "+d+'"/>';return n+="</svg>"}function L(a,b,c){b=2*(0.9*b/2>>0);a=b/2-4>>0;c=""+('<div class="bg" style="background:'+
c+";width:"+b+"px;height:"+b+'px;">')+'<div class="empty"></div>';c+='<div class="upper-outer" style="border-width:'+a+'px"></div>';c+='<div class="upper-inner" style="border-width:'+a+'px"></div>';c+='<div class="lower-outer" style="border-width:'+a+'px"></div>';c+='<div class="lower-inner" style="border-width:'+a+'px"></div>';c+="</div>";return'<div class="viz area-viz">'+c+"</div>"}function M(a,b,c){var d=2*(0.86*b/2>>0),e=0.87*d>>0;a=(1==this.high_good?a:100-a)/100*e;for(var g=a/e*d/2,n="",f=
1;4>f;f++)var l=f/4*d/2>>0,n=n+('<path stroke="rgba(255,255,255,.7)" d="M '+l+" "+(d-(f/4*e>>0))+" l "+(d-2*l)+' 0"/>');b='<svg class="viz pyramid-viz" style="width:'+d+"px;height:"+d+"px;margin:"+(b-d)/2+'px;">';b+='<path fill="'+w+'" d="M 0 '+d+" l "+(d/2>>0)+" "+-e+" L "+d+" "+d+' Z"/>';b=b+('<path fill="'+c+'" d="M 0 '+d+" l "+g+" "+-a+" l "+(d-2*g)+" 0 l "+g+" "+a+' Z"/>')+n;b+='<path stroke="rgba(255,255,255,.7)" d="M '+(d/2>>0)+" "+(d-a)+" l 0 "+a+'"/>';return b+="</svg>"}function N(a,b){var c=
100,d=2100,e="";60>b?(c=40,d=840,e="smallest"):100>b&&(c=60,d=1260,e="small");var g=G(a,c);-1==this.high_good&&(g=d+2*c-g);return'<div class="viz pyramid-viz" style="width:'+c+"px;height:"+c+"px;"+("margin:"+((b-c)/2>>0)+"px;")+"background:url(/rx/img/pyramid-ranking-sprite"+(-2==this.high_good?"-plain":"")+(e?"_"+e:"")+".png) "+g+'px 0px;"></div>'}function z(a,b,c,d,e,g){e=e?"<span style='font-size:"+(0.65*c>>0)+"px;line-height:"+c+"px;'>"+e+"</span>":"";b=b?"width:"+b+"px;":"";c=c?"height:"+c+"px;":
"";g=g||A(a,d);return'<div class="viz meter-viz" style="'+b+c+"border-color:"+g+'"><div class="color" style="width:'+a+"%;background:"+g+';">'+e+"</div></div>"}function H(a,b,c,d){if(""===b||_.isObject(b)&&""===b.raw&&"smart-rating"!==a)return"";"_small"===c?c=60:"smallest"===c&&(c=40);if(I[a])return(new h[a]).getHTML(b,c);u[a]&&(a=u[a]);if(!h[a]){a&&O.log("Error: visual type undefined");if(isNaN(b))return(new h.invalid).getHTML(b,c);a="numeric"}a=new h[a];d=d||{};a.init(d);return a.getHTML(b,c,0,
d.color)}function B(a,b,c,d,e){return'<div style="position:absolute;left:'+a+"px;top:"+b+"px;width:"+c+"px;height:"+d+"px;"+(e?"background-color:"+e+";":"")+'">'}function A(a,b,c){if(-2==b)return C;c=c||t;return c[-1==b?70<=a?0:35<=a?1:2:70<=a?2:35<=a?1:0]}function G(a,b){var c=a/100*20>>0;b||(b=100);c||(c=1);return(c+1)*b}function D(a,b,c,d,e,g){var n="",f=Math.abs(a);9995E8<=f?(a/=1E12,n=tt("trillion")):9995E5<=f?(a/=1E9,n=tt("billion")):999500<=f?(a/=1E6,n=tt("million")):999.5<=f&&(a=Math.round(a));
n?(f=Math.abs(a),a=100<=f?a.toFixed(0):10<=f?round(a,1):round(a,2),FTB.swap_commas&&(a=String(a).replace(".",",")),b?n=2<n.length?'<div class="number_suffix"'+(e?' style="font-size:'+e+'px"':"")+">"+n+"</div>":" "+n:2<n.length&&(n=n.charAt(0).toUpperCase())):(-1<d&&(b=(a+"").split("."),b[1]&&b[1].length>d&&(a=round(a,d)),a=parseFloat(a).toFixed(d)),c&&(a=add_commas(a)));return g?{value:a,magnitude:n}:a+n}function J(a,b,c){"_small"===b?b=60:"smallest"===b&&(b=40);var d=new E;c&&(d.color=c);return d.getHTML(a,
b)}var s=q.viz||{},P=q.viz_fields=q.viz_fields||{};m=q.inherits;var O=q.console,w="#e7e7e7",C="#bbb",t=[FTB.Colors.lightRed,FTB.Colors.lightYellow,FTB.Colors.lightGreen,w],Q=[FTB.Colors.darkRed,FTB.Colors.darkYellow,FTB.Colors.darkGreen,w],u={currency:"horizontal-meter"},I={"smart-rating":"smart-rating",yesno:"yesno"},h={},y=!!q.use_svg;y||(u.population="size-blocks",u.speedometer="quantity-stack",u["time-circle"]="quantity-stack",u.pie="quantity-stack");480>=q.innerWidth&&(u.population=u.speedometer=
u["size-blocks"]="horizontal-meter");var v=h.invalid=function(){},r=v.prototype;r.minWidth=40;r.width=100;r.height=100;r.fontMultiplier=1;r.options={};r.init=function(a){a&&(this.options=a)};r.getViz=function(){return""};r.getHTML=function(a,b){b&&(this.width=b=b<this.minWidth?this.minWidth:b);return'<div class="viz-wrap" style="width:'+b+"px;height:"+b+'px;"><div class="val">'+a+"</div></div>"};r.getValueString=function(a,b,c,d,e){_.isObject(a)&&a.display?(a.suffix&&(this.longSuffix='<span class="viz-suffix"> '+
a.suffix+"</span>"),a=a.display):_.isObject(a)&&(a=a.raw);var g=this.prefix||"";_.isObject(a)&&(g=a.prefix||g);g&&(3>g.length&&0>a&&(a=-a,g="-"+g),g='<span class="pre">'+g+"</span>");if("currency"!==this.options.data_type||1E3<=Math.abs(a)){var n=this.getFontSize("loldontcare",b);a=D(a,!e,this.add_commas,this.digits_after_decimal,n,!0);c===x&&(c=this.getFontSize(a.value,b));a=a.value+a.magnitude}else e=(a+"").split("."),e[1]&&1===e[1].length&&(a=e[0]+"."+e[1]+"0");c===x&&(c=this.getFontSize(a,b));
return this.wrapValueString(a,b,c,d?"color:"+d+";":"",g)};r.wrapValueString=function(a,b,c,d,e){return'<div class="val" style="line-height:'+b+"px;font-size:"+c+"px;"+d+'">'+e+a+this.suffix+"</div>"};r.getFontSize=function(a,b){var c=(a+"").length;return Math.round(Math.max(9,this.fontMultiplier*(Math.round(28-(c+5)/(c+1)*c)+(0.14*(b-100)>>0))))};r.getFontColor=function(){return""};r.animate=$.noop;var k=h.numeric=function(){},p=m(k,v);s.Numeric=k;p.type="numeric";p.prefix="";p.suffix="";p.suffix_placement=
"auto";p.percentiles=[];p.high_good=-2;p.visual_calc="chop";p.add_commas=!0;p.allowZeroPercent=!1;p.forceInlineSuffix=!1;p.longSuffix="";p.getFontSize=function(a,b){return r.getFontSize.call(this,this.prefix+D(a,!1,this.add_commas)+this.suffix,b)};p.init=function(a){a&&(this.options=a);a.prefix&&(this.prefix=a.prefix+"");a.suffix&&(this.suffix=a.suffix+"");a.suffix_placement&&(this.suffix_placement=a.suffix_placement);a.percentiles&&(this.percentiles=a.percentiles);a.high_good&&(this.high_good=a.high_good);
a.visual_calc&&(this.visual_calc=a.visual_calc);a.digits_before_decimal&&(this.digits_before_decimal=+a.digits_before_decimal);a.digits_after_decimal&&(this.digits_after_decimal=+a.digits_after_decimal);this.add_commas=1==a.add_commas;this.forceInlineSuffix?this.suffix_placement="inline":"auto"===this.suffix_placement&&(2<this.suffix.length||2===this.suffix.length&&" "!==this.suffix.charAt(0)&&":"!==this.suffix.charAt(0))&&(this.suffix_placement="below");"below"===this.suffix_placement&&(this.longSuffix=
'<span class="viz-suffix">'+this.suffix+"</span>",this.suffix="");2<$.trim(this.prefix).length&&(this.prefix="")};p.getHTML=function(a,b,c,d){b&&(this.width=b<this.minWidth?this.minWidth:b);this.height=c||this.width;c=_.isObject(a)?a.raw:a;if(this.percentiles.length){var e=this.getPercent(c);b=this.getFontColor(e);d=d||this.getColor(e);d=this.getViz(e,this.width,d,c)}else b=d="",FTB.IS_EMPLOYEE&&q.MSG&&MSG("Visuals failed because field stats not yet computed","red");a=this.getValueString(a,this.width,
x,b);return this.getWrapHTML(d+a)};p.getWrapHTML=function(a){return'<div class="viz-temp"><div class="viz-wrap '+this.type+'" style="width:'+this.width+"px;height:"+this.height+'px;">'+a+"</div>"+this.longSuffix+"</div>"};p.getPercent=function(a){if(!this.percentiles.length)return 0;a=(a+"").replace(/[^0-9\-.,e+]/g,"");var b=0,c=this.percentiles,d=c[0],e=c[20];if("medians"===this.visual_calc)if(a=parseFloat(a),a===parseFloat(c[0]))b=0;else for(d=20;0<=d;d--){if(a>=parseFloat(c[d])){b=5*d;break}}else"chop"===
this.visual_calc?(b=c[1],b=(a-b)/(c[19]-b)*100):"percent"===this.visual_calc?b=a:"negpos"===this.visual_calc?b=0<=a?100:0:"minmax"===this.visual_calc?b=(a-d)/(e-d)*100:"zero"===this.visual_calc?b=a/e*100:"allmax"===this.visual_calc?b=-1==this.high_good?0:100:"zeroten"===this.visual_calc?b=10*a:"zerofive"===this.visual_calc&&(b=20*a);b=Math.round(b);0>b&&(b=0);100<b&&(b=100);0!==b||this.allowZeroPercent||(b=1);return b};p.getColorCutoffs=function(){if(-2==this.high_good)return[100,0];for(var a=parseFloat(this.percentiles[0]),
b=parseFloat(this.percentiles[20]),c,d,e=(b-a)/1E3,g=this.getColor(0),n=a,f,l=0;1E3>l;l++){f=this.getColor(this.getPercent(n));if(f!==g)if(c===x)c=(n-a)/(b-a)*100,g=f;else if(d===x){d=(n-a)/(b-a)*100-c;break}n+=e}return[c||0,d||0]};p.getColor=function(a){return A(a,this.high_good)};var E=h["smart-rating"]=function(){this.type="smart-rating";this.width=94},f=m(E,v);f.color="";f.getHTML=function(a,b){a=_.isObject(a)?a.raw:a;var c=0>=a?0:Math.round(20*a);b&&(this.width=b=b<this.minWidth?this.minWidth:
b);return'<div class="viz-wrap '+this.type+'" style="width:'+b+"px;height:"+b+'px;">'+this.getViz(c,b)+"</div>"};f.getViz=function(a,b){if(y){var c=a,d=this.getColor(a);c||(c="");var e=0.9*b>>0,g=e/86;return'<svg class="smart-viz" style="margin:'+((b-e)/2>>0)+'px;" width="'+e+'" height="'+e+'">'+(1!==g?'<g transform="scale('+g+')">':"")+'<circle class="color" cx="43" cy="43" r="42" fill="'+d+'"/><circle class="ring" cx="43" cy="43" r="23" fill="#fff"/>'+(c?'<polygon points="43 7 51 23 35 23" fill="#fff" transform="rotate('+
(c/100*360>>0)+' 43 43)"/>':"")+(c?'<text x="43" y="51" text-anchor="middle" fill="#4d4d4d">'+c+"</text>":'<text class="unrated" x="43" y="32" text-anchor="middle" fill="'+w+'">NOT<tspan x="43" y="45">YET</tspan><tspan x="43" y="58">RATED</tspan></text>')+(1!==g?"</g>":"")+"</svg>"}c=0.9*b>>0;e=0;d=1;g=0;84<=c?c=84:52<=c?(c=52,d=-93,g=-8):(c=35,d=-155,g=-24);a?e=5>a?1:a/5>>0:(e=0,a="");e=-(c+10)*e+1;c+=2;g="font-size:"+this.getFontSize(a,c+g)+"px;";return'<div class="smart-viz" style="'+("width:"+
c+"px;height:"+c+"px;line-height:"+c+"px;")+g+("margin:"+((b-c)/2>>0)+"px;")+("background:url(/rx/img/smart_rating_all.png) no-repeat "+e+"px "+d+"px;")+'">'+a+"</div>"};f.getPercent=function(a){return a};f.getColor=function(a){return this.color?this.color:75<=a?t[2]:40<=a?t[1]:a?t[0]:w};f=h["horizontal-meter"]=function(){this.type="horizontal-meter"};m(f,k).getViz=function(a){return z(a,"","",this.high_good)};f=h["time-circle"]=function(){this.type="time-circle"};m(f,k).getViz=function(a,b,c,d,e){e||
(e="#e9e9e9");c&&-1!==c?t[c]&&(c=t[c]):c=this.getColor(a);d=b/100;var g=a/100*2*Math.PI,n=50+40*Math.sin(g),f=50+40*Math.cos(g+Math.PI);return'<svg class="viz ring-viz" width="'+b+'" height="'+b+'">'+(1!==d?'<g transform="scale('+d+')">':"")+'<circle cx="50" cy="50" r="40" stroke-width="9" stroke="'+e+'" fill="none"/>'+(0.001>100-a?'<circle class="color" cx="50" cy="50" r="40" stroke="'+c+'" stroke-width="9" fill="none"/>':'<path class="color" d="M 50 10 A 40 40 0 '+(g>Math.PI?"1 1 ":"0 1 ")+n+" "+
f+'" stroke="'+c+'" stroke-width="9" fill="none"/>')+(1!==d?"</g>":"")+"</svg>"};s.TimeCircle=f;f=h["quantity-stack"]=function(){this.type="quantity-stack"};f=m(f,k);f.fontMultiplier=0.85;f.getViz=function(a,b,c){return'<div class="viz stack-viz"><div class="color" style="height:'+(a/100*0.8*b>>0)+"px;background:"+c+';"></div></div>'};f=h.battery=function(){this.type="battery"};m(f,k).getViz=function(a,b,c){return'<div class="viz battery-viz"><div class="cap"></div><div class="color" style="width:'+
a+"%;background-color:"+c+';"></div></div>'};f=h["area-square"]=function(){this.type="area-square"};f=m(f,k);f.getViz=function(a,b,c){var d=2*(0.88*b/2>>0);b=(b-d)/2;a=2*((a?a:5)*d/100/2>>0);var e=(d-a)/2,d='<div class="viz '+this.type+'-viz" style="'+("width:"+d+"px;height:"+d+"px;top:"+b+"px;left:"+b+"px;")+"background:"+w+';">';return d+='<div class="color" style="'+("width:"+a+"px;height:"+a+"px;top:"+e+"px;left:"+e+"px;")+"background:"+c+";border-color:"+C+';"></div></div>'};var F=h["area-circle"]=
function(){this.type="area-circle"};m(F,k).getViz=f.getViz;f=h["size-blocks"]=function(){this.type="size-blocks"};m(f,k).getViz=function(a,b,c){a=a/100*20>>0;b=(0.6*b-12)/6;for(var d='<div class="viz blocks-viz">',e=0,g=[6,5,4,3,2,1],n=0;21>n;n++){var f=e*(b+2),l=(6-e-g[e])*(b+2);0===--g[e]&&e++;d+='<div class="block" style="bottom:'+f+"px;left:"+l+"px;width:"+b+"px;height:"+b+"px;background:"+(n<=a?c:"#e9e9e9")+';"></div>'}return d+"</div>"};f=h["area-arrows"]=function(){this.type="area-arrows"};
f=m(f,k);f.getViz=y?K:L;f.getValueString=function(a,b,c,d){return p.getValueString.call(this,a,b,c,d,!0)};f=h["star-rating"]=function(){this.type="star-rating"};f=m(f,k);f.allowZeroPercent=!0;f.getViz=function(a,b){var c=100;60>b?c=40:100>b&&(c=60);var d="width:"+c+"px;height:"+c+"px;",e="margin:"+((b-c)/2>>0)+"px;",g=this.type,f=this.high_good,h=100,l="";40>=c?(l="smallest",h=40):60>=c&&(l="small",h=60);c=G(a,h);return'<div class="viz sprite" style="'+d+e+("background:url(/rx/img/"+(g+"-sprite"+
(-2==f?"-plain":-1==f?"-reverse":"")+(l?"_"+l:"")+".png")+") "+c+"px 0px;")+'"></div>'};f=h["ratio-square"]=function(){this.type="ratio-square"};m(f,k).getViz=function(a,b,c,d){a=0.04;var e,g,f=2;g=36>=this.percentiles[19]?Math.min(Math.round(d),36):Math.min(Math.round(d/this.percentiles[19]*36),36);25<g?(e=0.083,d=6,f=1):16<g?(e=0.095,d=5):9<g?(e=0.125,d=4):4<g?(e=0.166,d=3):1<g?(e=0.19,a=0.06,d=2):(e=0.22,a=0.13,d=1);var h=Math.ceil(g/d),l=e*b>>0;a=a*b>>0;var k=0.45*b>>0,m,p;e="";for(var q=0;q<
g;q++)p=q%d,m=q/d>>0,e+=B(p*(l+f)+a,m*(l+f)+k,l,l,c)+"</div>";b=B(0.78*b-l/2>>0,k+h*l/2-l/2>>0,l,l,w)+"</div>";return""+('<div class="viz ratio-viz">'+e+b+"</div>")};f=h.pyramid=function(){this.type="pyramid"};f=m(f,k);f.prefix="#";f.getViz=y?M:N;f=h.population=function(){this.type="population"};m(f,k).getViz=function(a,b,c){a=a/100*12>>0;var d=Math.round(0.07*b),e=0.1*b,g=2*Math.round(e/2),f=2*Math.round(0.06*b/2),h=2*Math.round(0.2*b/2),l=Math.round(0.115*b);a||(a=1);d='<circle cx="0" cy="-'+Math.round(d/
2)+'" r="'+d/2+'"/><rect x="-'+g/2+'" y="'+Math.round(d/6)+'" width="'+g+'" height="'+g+'" rx="'+g/4+'" ry="'+g/4+'"/><rect x="-'+f/2+'" y="'+Math.round(d/6)+'" width="'+f+'" height="'+h+'" rx="'+f/4+'" ry="'+f/4+'"/>';g="";for(f=0;12>f;f++)g+='<g transform="translate('+((f/2>>0)*e*1.5+l)+","+(~~(f%2)*h*1.5+l)+')" fill="'+(f<a?c:"#e9e9e9")+'">'+d+"</g>";return'<svg class="viz pop-viz" width="'+b+'" height="'+b+'">'+g+"</svg>"};f=h["dollar-signs"]=function(){this.type="dollar-signs"};m(f,k).getHTML=
function(a,b,c){b&&(this.width=b<this.minWidth?this.minWidth:b);this.height=c||this.width;_.isObject(a)?(b=a.display||a.raw,c=a.raw):c=b=a;var d=this.getPercent(c);c=this.getColor(d);for(var e=Math.min(5,d/100*5+1>>0),d="",g=0;g<e;g++)d+="$";for(d+='<span style="color:#e9e9e9">';5>g;g++)d+="$";d+="</span>";e="";this.showNumber&&(this.fontMultiplier=1.2,b=this.getFontSize(b,this.width),e=this.getValueString(a,this.width,b,""));this.prefix=this.suffix="";this.fontMultiplier=1.25;b=this.getFontSize("$$$$$",
this.width);d=this.getValueString(d,this.width,b,c);return this.getWrapHTML(d+e)};F=h["dollar-signz"]=function(){this.type="dollar-signz";this.showNumber=!0};m(F,f);f=h.speedometer=function(){this.type="speedometer"};m(f,k).getViz=function(a,b,c){for(var d=b/100,e,g,f,h=0.8*Math.PI,l=2.2*Math.PI,k=a/100*(l-h)+h,m="",p=h;p<=l;p+=(l-h)/14)a=31*Math.cos(p)+50,e=31*Math.sin(p)+40,g=37*Math.cos(p)+50,f=37*Math.sin(p)+40,m+='<line x1="'+a+'" y1="'+e+'" x2="'+g+'" y2="'+f+'"/>';a=50;e=40;g=31*Math.cos(k)+
50;f=31*Math.sin(k)+40;return'<svg class="viz speed-viz" width="'+b+'" height="'+b+'"><g stroke="'+C+'" stroke-width="2"'+(1!==d?' transform="scale('+d+')"':"")+'><circle cx="50" cy="40" r="4" stroke-width="0" fill="'+c+'"/>'+(m+('<line x1="'+a+'" y1="'+e+'" x2="'+g+'" y2="'+f+'" stroke-width="3" stroke="'+c+'"/>'))+"</g></svg>"};f=h.width=function(){this.type="width"};m(f,k).getViz=function(a,b,c){a=""+('<div class="left" style="border-right-color:'+c+'"></div>')+('<div class="line" style="background:'+
c+'"></div>');a+='<div class="right" style="border-left-color:'+c+'"></div>';return'<div class="viz width-viz">'+a+"</div>"};f=h.height=function(){this.type="height"};m(f,k).getViz=function(a,b,c){a=""+('<div class="top" style="border-bottom-color:'+c+'"></div>')+('<div class="line" style="background:'+c+'"></div>');a+='<div class="bottom" style="border-top-color:'+c+'"></div>';return'<div class="viz height-viz">'+a+"</div>"};f=h.pie=function(){this.type="pie"};m(f,k).getHTML=function(a,b){b&&(this.width=
b=b<this.minWidth?this.minWidth:b);var c=b,d,e,g;_.isObject(a)?(g=a.display||a.raw,e=a.raw):e=g=a;var f=this.getPercent(e);"percent"===this.visual_calc?(this.visual_calc="chop",e=this.getPercent(e),this.visual_calc="percent",d=this.getColor(e)):d=this.getColor(f);e=b;var h=e/100,l=f/100*2*Math.PI,k=50+45*Math.sin(l),m=50+45*Math.cos(l+Math.PI);e='<svg class="viz pie-viz" width="'+e+'" height="'+e+'">'+(1!==h?'<g transform="scale('+h+')">':"")+'<circle cx="50" cy="50" r="45" stroke="none" fill="#e9e9e9"/>'+
(0.001>100-f?'<circle class="color" cx="50" cy="50" r="45" stroke="none" fill="'+d+'"/>':'<path class="color" d="M 50 5 A 45 45 0 '+(l>Math.PI?"1 1 ":"0 1 ")+k+" "+m+' L 50 50" stroke="none" fill="'+d+'"/>')+(1!==h?"</g>":"")+"</svg>";c=this.getFontSize(g,c);f=this.getFontColor(f);return'<div class="viz-wrap pie" style="width:'+b+"px;height:"+b+'px;">'+e+this.getValueString(a,b,c,f)+"</div>"+this.longSuffix};f=h["colored-number"]=function(){this.type="colored-number";this.fontMultiplier=1.2};f=m(f,
k);f.getFontColor=function(a){return-2===+this.high_good?"":this.getColor(a)};f.getColor=function(a){return A(a,this.high_good,Q)};f=h.custom=function(){this.type="custom"};k=m(f,k);k.getHTML=function(a,b,c,d){if(this.options.visual_custom_info)return p.getHTML.call(this,a,b,c,d);var e=new h["colored-number"];e.init(this.options);return e.getHTML(a,b,c,d)};k.getViz=function(a,b,c){var d="/ajax_get_colored_svg?app_id=7406&filename="+this.options.visual_custom_info.filename+"&color=",e=this.options.visual_custom_info.style,
f=this.options.visual_custom_info.scale?+this.options.visual_custom_info.scale/100:1,h=this.options.visual_custom_info.w_top?+this.options.visual_custom_info.w_top*b/100:0,k=this.options.visual_custom_info.w_bottom?+this.options.visual_custom_info.w_bottom*b/100:0,l=this.options.visual_custom_info.w_left?+this.options.visual_custom_info.w_left*b/100:0,m=this.options.visual_custom_info.w_right?+this.options.visual_custom_info.w_right*b/100:0;a=+this.options.visual_custom_info.reverse_fill?100-a:a;
switch(e){case "1":e=(b-m-l)*a/100*f+l;a=b;break;case "2":e=b;a=(b-h-k)*a/100*f+k;break;default:return p.getViz(a,b,c)}return'<div class="custom-infographic" style="width:'+b+"px;height:"+b+'px"><img class="custom-infographic-img" '+(this.options.visual_custom_info.is_taller?"height":"width")+'="'+b*f+'" src="'+d+"#e9e9e9".slice(1,7)+'"></div><div class="custom-infographic fill" style="width:'+e+"px;height:"+a+'px"><img class="custom-infographic-img" '+(this.options.visual_custom_info.is_taller?"height":
"width")+'="'+b*f+'" src="'+d+("36"===this.options.visual_custom_info.id?"ffabcf":c.slice(1,c.length))+'"></div>'};k.getValueString=function(a,b,c,d,e){return p.getValueString.call(this,a,b,c,d,!0)};k.wrapValueString=function(a,b,c,d,e){var f=this.options.visual_custom_info.top_text||0,h=this.options.visual_custom_info.left_text||0,k="top",l="left";0>f&&(k="bottom",f*=-1);0>h&&(l="right",h*=-1);this.fontMultiplier=this.options.visual_custom_info.font_multiplier||1;c=this.getFontSize(a,(100-h)/100*
this.width);return'<div class="val" style="line-height:'+b*(100-f)/100+"px;font-size:"+c+"px"+d+";padding-"+k+":"+f+"%;padding-"+l+":"+h+"%;width:"+(100-h)+"%;height:"+(100-f)+'%">'+e+a+this.suffix+"</div>"};k=h.set=function(){this.type="set"};m(k,v).getHTML=function(a,b){b&&(this.width=b=b<this.minWidth?this.minWidth:b);return'<div class="viz-wrap '+this.type+'" style="width:'+b+"px;height:"+b+'px;">'+this.getViz(a,b,"")+"</div>"};v=h.yesno=function(){this.type="yesno"};m(v,k).getViz=function(a,
b,c){c||(c=a>>0?t[2]:t[0]);return'<div class="viz yesno-viz" style="color:'+c+";font-size:"+(0.2*b>>0)+"px;height:"+b+"px;line-height:"+b+'px;">'+(a>>0?"yes":"no")+"</div>"};var R="A+ A A- B+ B B- C+ C C- D+ D D- F".split(" "),v=h["letter-grade"]=function(){this.type="letter-grade"};m(v,k).getViz=function(a,b,c){a=a.toUpperCase();c=R.indexOf(a);if(-1===c)return"";c=4>c?t[2]:9>c?t[1]:t[0];return'<div class="viz letter-grade-viz" style="color:'+c+";font-size:"+(0.5*b>>0)+"px;height:"+b+"px;line-height:"+
b+'px;">'+a+"</div>"};s._pieSlice=function(a,b,c,d,e,f,h){var k=e-d;if(0.001>2*Math.PI-k)return"<circle"+(" "+h||"")+' cx="'+a+'" cy="'+b+'" r="'+c+'" fill="'+f+'"/>';var l=a+Math.sin(d)*c;d=b-Math.cos(d)*c;var m=a+Math.sin(e)*c;e=b-Math.cos(e)*c;return"<path"+(" "+h||"")+' d="M '+l+" "+d+" A "+c+" "+c+" 0 "+(k>Math.PI?"1 1 ":"0 1 ")+m+" "+e+" L "+a+" "+b+' Z" fill="'+f+'"/>'};s.meter_viz=z;s.display=H;s.Smart=function(a,b,c,d){this.value=b;this.width=c;var e=new E;d&&(e.color=d);this.viz=$(e.getHTML(b,
c));$(a).append(this.viz)};s.Meter=function(a,b,c,d,e,f){this.viz=$(z(b,c,d,e,f));$(a).append(this.viz)};s.all=function(){var a;a='<img style="display:block;margin:0 auto;height:200px;" src="https://i.imgflip.com/1bh9.jpg"/><table style="margin:0 0 20px;"><tr><td>SIZE</td>';var b=[],c;for(c in h)"custom"===c||{currency:1,numeric:1,invalid:1,set:1}[c]||I[c]||(a+="<th>"+c+"</th>",b[c]=new h[c],b[c].init({percentiles:[0,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5],high_good:1}));a+="</tr>";for(var d=40;120>
d;d+=20){a+="<tr><td>"+d+"x"+d+"</td>";for(c in b)a+="<td>"+b[c].getHTML((500*Math.random()>>0)/100+"",d)+"</td>";a+="</tr>"}return a+="</tr></table>"};s.render=function(a,b){FTB.IS_WIDGET&&!a&&q.widgets&&(a=_.find(q.widgets).options.viz_width);b=b||$d;b.find(".js-vz-u").quickEach(function(){var b=a||parseInt(this.data("w"),10),d=this.data("u"),d=P[d],e,f,h,k,l;d&&(e=$.trim(this.data("v")),f=$.trim(this.data("f")),h=$.trim(this.data("dv")),k=this.data("ds"),l=this.data("dp"),f&&(e={raw:e,formatted:f,
display:h||e,suffix:k||"",prefix:l||""}),b="smart-rating"===d.type?J(e,a||b):H(d.type,e,b,d),this.replaceWith(b))})};s.get=function(a){var b=new h[a.visual_type];b.init(a);return b};$(function(){s.render()});q.viz=s;q.disp_rating=J;q.rectOpen=B;q.big_number_format=D})(window,document);
;(function(f){f.fn.fix=function(a){var g=a.top||0,d=a.content;return this.each(function(){function a(){h=d.height()}function c(){var a=$w.scrollTop(),c=d.offset().top-g,a=a>c+h-k?2:a>c?1:0;if(e!==a)switch(e=a,e){case 0:b.removeClass("fixed").css("top","auto");break;case 1:b.addClass("fixed").removeClass("relative").css("top",g);break;case 2:b.removeClass("fixed").addClass("relative").css("top",d.height()-b.height())}}var b=f(this),k=b.height(),e=0,h;b.data("fix")?(b.data("fix").updateHeight(),b.data("fix").recalculate()):
(b.data("fix",{recalculate:c,updateHeight:a}),a(),scroll_throttle(c),resize_debounce(c))})}})(jQuery);
;(function(d){function f(b,a,c,h,d,e){b&&$.get("/sponsor_event",$.extend({"lids[]":b,p:d,_p:g.page_type,n:a,e:c,ct:h,ajax:1},e),$.noop,"json")}var g=d.FTB||{};$(function(){$(document).on("vclick",".iframe",function(b){var a=$(this),c=a.data("iframe");if(c)return g.IS_WIDGET?d.open(c):BOX.show({iframe:c,w:a.data("w"),h:a.data("h"),maxw:"100%",pad:10}),cancelEvent(b),!1})});d.track_sponsor_links=function(b,a){b.each(function(){var c=$(this),b=c.data("iframe")||this.href;!c.data("_impressed")&&b&&(c.data("_impressed",
1),c=d.deparam(b),a?a.lids.push(c.lids):(a=c,a.lids=[a.lids]))});a&&f(a.lids,a.n,"i",a.ct,a.p,{app:a.app})};d.track_sponsor=f;d.update_sponsor_buttons=function(b,a){b.each(function(c){$(this).find(".sponsor_button").quickEach(function(){var b="&pos="+(c+1)+"&n="+(a||0),d=this.attr("href"),e=this.data("iframe");e?this.data("iframe",e+b):d&&0<=d.indexOf("/sponsor_event")&&(this[0].href+=b)})})}})(window);
;(function(){function k(c,d){for(var a=_.keys(c),b,l=0,e;e=a[l];++l){b=c;if(e.match(m)){var g=q(e);b=g;e=c[e];for(var n={},h=n,p=b.length,f=0;f<p;f++)h[b[f]]=f===p-1?e:{},h=h[b[f]];b=n;e=g[0]}_.isObject(d[e])?k(b[e],d[e]):d[e]=b[e]}}function q(c){var d=[];c.match(m)?_.forEach($.isNumeric(c.substr(0,1))?[c]:c.split("."),function(a){var b=r.exec(a);a=a.match(s)||[a];b&&(a=[b[1]].concat(a));d=d.concat(_.map(a,function(a){return a.replace(/\['|'\]|\[|\]/g,"")}))}):d=[c];return d}function g(c){k(c,window)}
var m=/(\w\.\w)|(\w\[([^\[\]]+)\])/g,s=/\[([^\[\]]+)\]/g,r=/(\w+)\[/;FTB.fetch=function(c){var d=$.Deferred();$.ajax($.extend({type:"GET",dataType:"json"},c)).done(function(a){var b=function(){$.extend(a,{runCode:function(){a.code&&$(a.code).appendTo("head")}});return d.resolve(a)};a.globals&&g(a.globals);a.resources?FTB.lazy(a.resources).done(b).fail(d.reject):b()}).fail(d.reject).always();return d};FTB.addJSVar=g})();
;(function(e,g){function m(a){a=a instanceof Array?a:[a];var b=[],k=[],c=[],l=[];_.each(a,function(a){var d=f[a]=f[a]||{};d.state!==h||d.deferred||(d.deferred=e.Deferred().resolve());d.deferred?b.push(d.deferred):(d.deferred=e.Deferred(),q.test(a)?k.push(a):r.test(a)?c.push(a):(_.size(d.js)&&(k=k.concat(d.js)),_.size(d.css)&&(c=c.concat(d.css||[])),_.size(d.asyncCallback)&&(b=b.concat([s(d.asyncCallback)])),d.js||d.css||d.asyncCallback||l.push(a)))});l.length&&k.push(t(_.unique(l)));var b=b.concat(n(_.unique(c),
"css"),n(_.unique(k),"js")),g=e.when.apply(e,b);g.done(function(){_.each(a,function(a){f[a].deferred.resolve();f[a].state=h})});return g}function n(a,b){var c="js"===b;return _.map(a,function(a){return e.ajax({url:a,dataType:c?"script":"text",cache:!0,success:c?e.noop:function(a){e('<style type="text/css">'+a+"</style>").appendTo("head")}})})}function s(a){var b=e.Deferred();g[a]=b.resolve;return b}function t(a){a=_.sortBy(_.filter(a)).join(",");a=encodeURIComponent(a);return"/ajax/resources?bundles="+
a+"&js_ver="+c.js_ver}var c=g.FTB||{},f=c.resources=c.resources||{},q=/\.js$/i,r=/\.css$/i,h=1,p={};_.each(c.resourcesLoaded,function(a){f[a]={state:h}});c.lazy=function(){var a=[].slice.apply(arguments);if(e.isReady)return m.apply(g,a);var b=e.Deferred();e(function(){var c=m.apply(g,a);"resolved"===c.state()&&b.resolve();e.when(c).done(b.resolve).fail(b.reject)});return b};_.assign(c.lazy,{LOADED:h,addCSS:function(a){(p[a]||e()).appendTo("head")},removeCSS:function(a){p[a]=e("#ftb-resource-"+a).prop("disabled",
!0).remove()},exec:function(a,b){f[a]||(f[a]={});f[a].state!==h&&(f[a].state=h,b())},jqueryUI:function(a){var b=[];if(jQuery.ui)return!0;"js"===a?b.push("//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"):"css"===a?b.push("//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.min.css"):b=["//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js","//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.min.css"];return c.lazy(b)}})})(jQuery,
window);
;(function(b){function d(a){if(a.data("_rendered"))return a.trigger("_resize");for(var e in c)if(a.is(e)&&c[e]){a.data("_rendered",1);c[e](a);f();break}}var c={},g=b.location!==b.parent.location,h=b.is_bot,f=_.debounce(function(){$.publish("content/update")},100);$(function(){var a=Object.keys(c).join(",");a&&$(a).each(function(){var a=$(this);g||!b._sqrl||h&&a.is(":visible")||FTB.explore?d(a):a.sqrl(function(){d(a)},+a.data("offset")||-800)})});b.lazy_render=function(a,b){c[a]=b;$(document).on("render",
a,function(){d($(this))})}})(window);
;(function(){function p(b){(console.error||$.noop).call(console,b)}function h(b,d,f){for(var a in d)d.hasOwnProperty(a)&&(b[a]&&f?p("Cannot overwrite property "+a,b[a]):b[a]=d[a]);return b}var f={},k,m=window._;k=FTB.module=function(b,d){function q(a,c,e){if(e===n-1){var g=a[c[e]];void 0===g?a[c[e]]=d:"function"===typeof g?p("Cannot overwrite existing function: "+c[c.length-1]):"function"===typeof d?(a[c[e]]=d,h(d,g,!0)):h(g,d,!0);f[b]={n:c[e],p:b,f:d};m&&k.trigger("add",f[b])}else(g=a[c[e]])&&"object"===
typeof g?q(g,c,e+1):void 0===g?(a[c[e]]={},q(a[c[e]],c,e+1)):p("FTB Module not added: "+c[c.length-1])}var a,l,n;if(arguments.length)a=b.split("."),n=a.length,q(window,a,0);else for(a=Object.keys(f),l=0,n=a.length;l<n;l++)console.log(f[a[l]].n+": "+f[a[l]].p)};k.get=function(){return h({},f)};k.manage=function(b){m.forEach(FTB.module.get(),b);k.on("add",b)};m&&h(FTB.module,m.Events);FTB.module.extend=h})();
;(function(s,x,ba,t){function G(v,O){function P(a,c){var b={file_name:a[0]||"",caption:a[1]||"",width:~~a[2],height:~~a[3],app_id:~~a[4],tags:a[5]||"",listing_title:c||""},e="";b.caption?e=b.caption:b.listing_title&&!/<[a-z\][\s\S]*>/i.test(b.listing_title)&&(e=b.listing_title);b.tags&&0<b.tags.length&&(""!==e&&(e+=" | "),e+=b.tags.join(" "),e=e.trim());b.alt_tag=e;b.title_tag=b.alt_tag;return b}function H(a,c){for(var b,e,d=[],f=0;f<c.length;f++)c[f].url&&!FTB.explore?(b=x.parent===x?"":' target="_blank"',
e=c[f].emp_only?' class="emp-only-link" title="Employee-only link"':"",d[f]="<a"+b+e+' href="'+c[f].url+'">'+c[f].title+"</a>"):d[f]=c[f].title;"list"!==a.control_type&&"list"!==a.parent_control_type&&(d=d[0]||"");return d}function Q(a,c){if(!c||!c[0])return"";a=_.isObject(a)?a.title||a.formatted:a;var b=get_img_url(c[0],c[1],"t");return'<img alt="'+a+'" class="entity-img" src="'+b+'"/>'}function R(a,c,b){if(-1===S)return"";var e="",d=parseFloat(h[a][l._avg_rating]);a=~~h[a][l._num_ratings||l._num_reviews];
if(!a)return"";e=e+'<div class="srp-rating-container-wrap">'+('<div class="ur-star-container '+(b||"small")+'">');d&&(e+='<div class="ur-avg">'+round(d,1).toFixed(1)+"</div>");b=e+='<div class="ur-star-num-wrap">';switch(!0){case 3.5<d:e="green";break;case 1.5<d:e="yellow";break;case 0<d:e="red";break;default:e=""}var f,n='<div class="rating-star clearfix">';for(f=0;5>f;f++)if(1<=d-f)n+='<i class="i icon-rating '+e+'" data-star="'+f+'"></i>';else if(0<d-f)var k=Math.round(10*(d-f)),n=n+('<i class="i icon-rating '+
e+" fr-"+k+'" data-star="'+f+'"></i>');else n+='<i class="i icon-rating" data-star="'+f+'"></i>';e=b+(n+"</div>");e+='<div class="s-layer ur-num-rate">';e=c?e+("("+a+")"):e+(a+" "+(1!==a?tt("user reviews"):tt("user review")));e+="</div>";e+="</div>";e+="</div>";return e+="</div>"}var b=this,L=v.app_id>>0,Z=v.parent_app_id>>0,M=v.base_url||"",h,p,u,l,q,m,A=-1,B=-1,T=[],S=-1,U=v.imgBorders||{},V=x.viz,I={},N=b.images={},W={},C=v.default_img||"mountain",F,J,D,X,y,z,$=v.item_ids,w=b.num_sponsorships=
v.num_sponsorships>>0;b.geo_sponsorships=v.geo_sponsorships;var aa=b.sponsored_comp=0<w,K=b.sponsored_ids=[],E={};b.tpl="";b.app_id=L;b.imgBorders=U;s.extend(b,_.Events);s.extend(b,O);b.ajax=function(a){a=a||{};var c="/ajax_search";!aa||a.no_sponsored||E.no_sponsored||(c+="_sponsored");var g=a.head||u,e=a.sort_field!==t?a.sort_field:F,d=_.where(a.filters,{0:"_location"}).length||_.where(a.filters,{field:"_location"}).length;!1===a.show_distance||!d&&"distance"!==e||g.push("distance");d||"distance"!==
e||(e="");var f={_len:a.items_per_page||y,page:a.page>>0,app_id:L,_sortfld:e,_sortdir:a.sort_dir!==t?a.sort_dir:D,_fil:a.filters||X,_tpl:b.tpl,head:g,dir_field_1:FTB.dir_field_1||"",item_ids:$,srp_template:b.srp_template,srp_template_adv:b.srp_template_adv,srp_template_custom:E.srp_template_custom,raw_data:E.raw_data};s.extend(f,_.pick(a,["type","bound_box","force_geo","map_sort_only","config_key"]));var f=_.pick(f,_.significant),h=s.Deferred(),g=s.Deferred();g.done(function(){b.ajax.pending++;FTB.fetch({url:c,
data:f}).done(function(c){c=c.data;b.ajax.pending--;"ok"!==c.status&&b.ajax.pending||a.pre_update&&!1===a.pre_update(c)||("distance"===e&&G.promote_location_match&&G.promote_location_match(c.data,a.filters,m),b.update(c),a.callback?a.callback(c):b.trigger("update",c))}).done(function(a){h.resolve(a.data)})});E.before_update?E.before_update(g):g.resolve();return h};b.ajax.pending=0;b.sort=function(a,c){a=~~a;c=c||{};J===a?D="ASC"===D?"DESC":"ASC":(J=b.sort_index=a,D="-1"===p[a].high_good?"ASC":"DESC");
b.sort_dir=D;F=b.sort_field=u[J];c.no_sponsored=!0;b.ajax(c)};b.change_page=function(a,c){c=c||{};"prev"===a?a=z?z-1:0:"next"===a?a=b.get_next_page():"first"===a&&(a=0);if(a!==z)return c.page=a,b.ajax(c)};b.get_next_page=function(){return-1===b.recs||(z+1)*y<b.recs?z+1:z};b.set_items_per_page=function(a){y=Math.min(a,y);return h=b.data=h.slice(0,y)};b.setOptions=function(a){s.extend(E,a)};b.get_cell=function(a,c,g,e){var d="string"===typeof h[a][c]?s.trim(h[a][c]):h[a][c],f=p[c],n="list"===f.parent_control_type||
"list"===f.control_type,k=n?"list":f.control_type;if(I[u[c]])d=I[u[c]](a,c);else{if((""===d||_.isObject(d)&&""===d.formatted)&&"smart-rating"!==f.visual_type&&"pyramid"!==f.visual_type)return f.empty_value||"";if("img"===f.data_type||"iurl"===f.data_type){f=Y(a,"t",c);f=n?f:[f];d="";for(n=0;n<f.length;n++)k=f[n],d+='<div class="-i-wrap"><img alt="'+k.alt+'" class="-i-'+(k.border?" srp-img-border":"")+'" src="'+k.src+'"/></div>';return d}if("cb"===k)d=V.display("yesno",d);else if(f.visual_type&&!e&&
"list"!==k){if(""!==d||"smart-rating"===f.visual_type||"pyramid"===f.visual_type)_.isObject(d)&&d.raw!==t&&(d.raw=s.trim(d.raw)),_.isObject(d)&&d.formatted!==t&&(d.formatted=s.trim(d.formatted)),d=V.display(f.visual_type,d,g,f),"smart-rating"===f.visual_type&&"rating"===f.data_type&&(d='<span class="clickable-smart-rating">'+d+"</span>")}else if(_.isObject(d)&&d.formatted!==t)d=d.formatted;else if("url"===f.data_type){"list"!==k&&(d=[d]);for(n=0;n<d.length;n++){g=d[n];e=null;if(0<g.length){0!==g.indexOf("http")&&
(g="http://"+d);var l=/(?:https?:\/\/)?(www\.)?([^\/]+)/.exec(g);null!==l&&(e=l[2])}d[n]=null!==e?'<a class="item-row-url" target="_blank" href="'+g+'"'+("1"===f.nofollow?' rel="nofollow"':"")+">"+e+"</a>":""}"list"!==k&&(d=d[0])}else"list"!==k&&(d=d||"",94<d.length&&"<"!==d.charAt(0)&&(d=d.substr(0,80)+'<span class="more-stuff">'+d.substr(80)+'</span><span class="show-more-stuff"> ... <a class="link">Show More</a></span>'))}a=(W[u[c]]||[])[a];if("list"===k)if(k="entity"===f.data_type?H(f,d):d,c=
b.max_list_items_showing||(5<k.length?4:5),a&&a[0]){c='<div class="entity-wrap">';for(f=0;f<k.length;f++)c+='<div class="multi-entity '+(1<k.length?"more-than-one-entity":"")+'">'+Q(d[f],a[f])+'<div class="entity-txt">'+k[f]+"</div></div>";d=c+"</div>"}else{d='<div class="item-row-list"><ul>';for(f=0;f<k.length;f++)a=k[f],_.isObject(a)&&(a=a.formatted?a.formatted:a.raw),a.length&&(d+="<li "+(f>c-1?'class="noshow" style="display:none;"':"")+">"+a+"</li>");d+="</ul>";f>c&&(d+='<span class="more-list link">More<i class="i icon-angle-down"></i></span>');
d+="</div>"}else"combo"===k&&(d=a?'<div class="entity">'+Q("entity"===f.data_type?d[0]:d,a[0])+'<div class="entity-txt">'+("string"===typeof d?d:H(f,d))+"</div></div>":_.isObject(d)?H(f,d):d);return d};b.get_cell_raw=function(a,c){"entity"===a.data_type&&(c=H(a,c));"list"===a.control_type?c=c.join(" / "):_.isObject(c)&&c.formatted!==t&&(c=c.formatted);return c};b._get_core_assets=function(a,c){var g="string"===typeof h[a][c]?s.trim(h[a][c]):h[a][c],e=p[c];_.isObject(g)&&g.raw!==t?g=g.raw:"smart-rating"===
e.visual_type&&"rating"===e.data_type&&(g=Math.round(20*g));return{name:e.name,value:g,prefix:e.prefix,suffix:e.suffix,high_good:e.high_good,html:b.get_cell(a,c)}};b.value_exists=function(a,c){var b=h[a][c];_.isObject(b)&&b.raw!==t&&(b=b.raw);return!!b};var Y=b.get_img_info=function(a,c,g){g===t&&(g=B);if(-1===g)return{};c||(c="");for(var e=h[a][q],d=h[a][g],f=[],n="list"===p[g].parent_control_type,k,d=n?d:[d],l=0;l<d.length;l++){k="iurl"===p[g].data_type?[d[l]]:g===B&&N[e]?N[e]:P(d[l],b.get_title(a));
if(!k.file_name&&!k[0])if(C&&(0>C.indexOf(".svg")||x.use_svg)){var m=FTB.default_imgs;f.push({src:get_img_url(Z,C,c),alt:"",title:"",def:1,w:m[C]?m[C].width:0,h:m[C]?m[C].height:0})}else continue;var r="",m="",r=x.decode_title(h[a][A]),m=k.title?k.title:r,s=k.alt_tag?k.alt_tag:r;"img"===p[g].data_type?r=get_img_url(k.app_id,k.file_name,c):(r=k[0],"http"!==r.substr(0,4)?(r=encodeURI(r),"t"===c&&(r=r.replace(/(.*)\/(.*)/g,"$1/t/$2")),r=x.get_img_cdn_url("/"+r)):r=r.replace(/^http:(\/\/[a-z0-9_\-]+\.findthebest\.com.*)$/,
"$1"));f.push({src:r,alt:s,title:m,filename:k.file_name,app_id:k.app_id,w:~~k.width,h:~~k.height,border:U[u[g]]})}return n?f:f[0]};b.get_data_url=function(a){var c="";_.size(b.urls)&&!_.isUndefined(b.urls[a])?c=b.urls[a]:b.get_detail_url&&(c=b.get_detail_url(a));return c};b.get_detail_url=function(a){return M+get_detail_url(h[a][q],h[a][A])};b.get_compare_url=function(){if(!M&&L!==FTB.app_id)throw Error("Unable to get base_url");var a=[],b;if(2>h.length||10<h.length)return"";for(b=0;b<h.length;b++)a.push({id:h[b][q],
encoded_title:h[b][A]});return get_compare_url(M,a)};b.get_title=function(a){return h[a]?_.isObject(h[a][m])&&h[a][m].formatted!==t?h[a][m].formatted:-1===m&&h[a][A]?x.decode_title(h[a][A]):p[m]&&"entity"===p[m].data_type&&_.isObject(h[a][m][0])&&h[a][m][0].title?h[a][m][0].title:h[a][m]:""};b.get_id=function(a){return h[a][q]};b.rcq_add=function(a,c,g){g=Y(c,g);g=g.src===g.filename?g.src:{filename:g.filename,app_id:g.app_id};a.add(h[c][q],b.get_title(c),h[c][A],g)};b.rcq_remove=function(a,b){a.remove(h[b][q])};
b.clone=function(){var a=b.status;b.status="ok";var c=new G(b,O);b.status=a;return c};b.get_index=function(a){var b={};b[q]=String(a);return _.findIndex(h,b)};b.get_def=function(a){return p[u.indexOf(a)]};b.update=function(a){if("ok"===a.status){h=b.data=a.data;b.recs=a.recs>>0;b.urls=a.urls||[];b.geojson_name=a.geojson_name||[];b.annotations=a.annotations||[];b.svg_name=a.svg_name;if(a.head){p=b.defs=a.defs;u=b.head=a.head;l=[];for(var c=u.length-1;0<=c;c--)l[u[c]]=c;b.head_indexes=l}W=b.associated_imgs=
a.associated_imgs||{};X=b.filters=a.filters;F=b.sort_field=a.sort_field;D=b.sort_dir=a.sort_dir;b.exact_cutoff=a.exact_cutoff;y=a.items_per_page>>0||20;z=a.page>>0;-1===b.recs&&h.length<y&&(b.recs=h.length+z*y);b.dist_index=l.distance||-1;q=b.id_index=l.id;A=b.encoded_title_index=l._encoded_title;J=b.sort_index=l[F]!==t?l[F]:-1;S=b.urr_index=l._urr_avg_rating!==t?l._urr_avg_rating:-1;B=b.img_index=-1;for(a=0;a<q;a++)("img"===p[a].data_type||"iurl"===p[a].data_type)&&"list"!==p[a].parent_control_type&&
2>a&&(B=b.img_index=a),"entity"===p[a].data_type&&"combo"===p[a].control_type&&T.push(a);b.entity_indices=T;h[0]&&(m=b.title_index=0===B?1:0,a=p[m],m>=q||!a||a.visual_type||0===u[m].indexOf("_GC_")&&!b.allow_gc_title)&&(m=b.title_index=-1);if(-1!==B)for(var g,c=0;c<h.length;c++)a=h[c][q],g=h[c][B],_.isArray(g)&&(g=P(g,b.get_title(c))),N[a]=g}};b.insert_sponsorships=function(a,c,g){a=a||[];c=c||3;w=a.length;K=s.map(a,function(a){return a[q]});var e=_.intersection(_.pluck(h,q),K),d=Math.min(h.length+
a.length-e.length);g&&(d=Math.min(g,d));c=Math.min(w,c,Math.floor(2*d/3));if(c=Math.max(0,w-c))g=K.splice(w-c,c),a.splice(w-c,c),w=a.length,e=_.difference(e,g);b.organic_ids=[];h.unshift.apply(h,a);for(a=w;a<h.length;a++)c=h[a][q],0<=e.indexOf(c)||a>=d?(h.splice(a,1),a--):b.organic_ids.push(c);b.sponsored_ids=K;b.num_sponsorships=w};I._urr_avg_rating=function(a){return R(a)};I.__ups=function(a,b){var g=h[a][l.__ups].raw>>0,e=h[a][l.__downs].raw>>0,d=h[a][l._my_vote];return'<div class="vote-wrap" data-ups="'+
g+'" data-downs="'+e+'"><div class="vote-up'+("1"===d?" voted":"")+'"></div><div class="vote-score">'+(g>e?"+":"")+(g-e)+'</div><div class="vote-details">'+g+" ups, "+e+' downs</div><div class="vote-down'+("0"===d?" voted":"")+'"></div></div>'};b.get_compare_html=function(a){a=h[a][q];return'<div class="srp-compare"><label class="srp-rcq-label"><input type="checkbox" id="'+a+'" data-value="'+a+'" class="srp-rcq-cb stnd-checkbox-input"/><span for="'+a+'" class="stnd-checkbox-label link"><span class="srp-compare-btn">'+
tt("Add to Compare")+"</span></span></label></div>"};b.get_urr_html=R;b.update(v)}x.App=G})(jQuery,window,document);
;(function(e){function k(a,f){var c,b;if(f&&a&&g[a])return c=d[f]||+f,b=h[a]=h[a]||{},c=b[c]=b[c]||new g[a](c)}function l(){var a=m.width();_.each(h,function(b){_.each(b,function(c){c.matchAgainst(a)})})}function n(){var a=m.width();_.each(d,function(b,c){p[c]=a<=b})}var m=$(e),h={},g,d={mobile:480,mobilelandscape:670,tablet:768,laptop:1024,desktop:1240,realdesktop:1365,top:1920},p={};e=_.reduce(d,function(a,b,c){a[c]=function(){return p[c]};return a},{});var q=!1,b=Class.extend({init:function(a){this.size=
a},matched:!1,matchAgainst:function(){},refresh:function(){if(!q)return this;this.matched=!1;l();return this}}).mixin(_.Events),r=b.extend({matchAgainst:function(a){this.size>=a&&!this.matched?(this.trigger("match"),this.matched=!0):this.size<a&&this.matched&&(this.trigger("unmatch"),this.matched=!1)}}),b=b.extend({matchAgainst:function(a){this.size>a&&this.matched?(this.trigger("unmatch"),this.matched=!1):this.size<=a&&!this.matched&&(this.trigger("match"),this.matched=!0)}});g={maxWidth:r,minWidth:b};
resize_width_debounce(n);n();$(function(){resize_width_debounce(l).fn();q=!0});FTB.module("Match",$.extend({maxWidth:function(a){return k("maxWidth",a)},minWidth:function(a){return k("minWidth",a)},presets:d},e))})(window);
;/**
 * Fast and perfomant way to detect when certain dom elements are "visible/inserted" on the page
 * Include cases: already visible on the page, just added to the page, just visible from hidden, etc.
 *
 * Make use of CSS3 animationstart events, IE10+
 * Currently no fallback for IE9 browser. so only used for non-critical stuff like tooltips.
 *
 * If we are interested in more dom change events and deprecate IE10,
 * we can switch to use the new MutationObserver(IE11+)
 *
 * Inspired by https://github.com/liamdanger/jQuery.DOMNodeAppear
 * Require jQuery, lodash
 * Author: Yan Zhuang
 */
(function($){
	var modules = {},
		count = 0,
		$head = $('head'),
		// Include these css styles here, so no extra css file is needed
		keyframes = '@keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }'+
					' @-moz-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }'+
					' @-webkit-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }'+
					' @-ms-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }'+
					' @-o-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }',
		animationStyles = '{ animation-name: nodeInserted; -webkit-animation-name: nodeInserted;'+
							'animation-duration: 0.001s; -webkit-animation-duration: 0.001s; }';

	if (!window.hasTransitions) {
		// < IE10
		return;
	}

	function appear(selector, callback, debounce) {
		count++;
		modules[selector] = callback;

		// If the keyframes styles aren't present, add them
		if(!$('style.apr-keyframes').length) {
			$head.append('<style class="apr-keyframes">' + keyframes + '</style>');
		}

		// Add animation to selected element
		$head.append('<style class="apr-animation-' + count + '">' + selector + animationStyles + '</style>');

		function appear_callback(e) {
			var self = $(e.target);
			if (e.originalEvent.animationName === 'nodeInserted' && self.is(selector)) {
				if (typeof callback === 'function') {
					callback.call(self);
				}
			}
		}

		$(document).on('animationstart.apr webkitAnimationStart.apr oanimationstart.apr MSAnimationStart.apr',
			selector,
			debounce ? _.debounce(appear_callback, debounce) : appear_callback
		);
	}

	$.onAppear = appear;

	window.onAppear = appear;

})(jQuery);
;/**
 * Core js for FlEX
 */
(function(){

	/**
	 * Base Component
	 */
	var Component = Class.extend({
		defaults: {},
		init: function(options){
			this.options = $.extend({}, this.defaults, options);
			if (this.options.$el) {
				this.$el = this.options.$el;
				this.$ = _.bind(this.$el.find, this.$el);
			}
		},
		render: function(){
			this.trigger('rendered');
		}
	}).mixin(_.Events).statics({
		renderIn: function(element, options) {
			// declaretive interface, all data-* attributes will be passed as options
			var opt = $.extend({}, element.data(), options);
			opt.$el = element;

			var c = new this(opt);
			c.render();
			return c;
		}
	});

	window.Flex = {
		// Constants
		VERSION: 0.1,
		Component: Component
	};

})();
;(function($){

	var MAX_DYNAMIC_SIZE = 12,
		FONT_MULTIPLIER = 4;

	$.fn.spin = function(options) {

		options = options === false
			? false
			: $.extend({}, options);

		return this.each(function() {
			var $this = $(this),
				data = $this.data();

			// Remove any existing spinners
			if (data.spin) {
				data.spin.remove();
			}

			// Stop here if removal is the only action
			if (options === false) {
				return;
			}

			var position = $this.position(),
				width = $this.outerWidth(),
				height = $this.outerHeight();

			// Create spinner DOM and set styles based on options
			var $spin = $(''
				+'<div class="spinner">'
				+   '<div class="i icon-spin spinner-inner"></div>'
				+'</div>');

			// Custom centering logic if position is static
			if ($this.css('position') === 'static') {
				$spin.css({
					left: position.left + width/2,
					top: position.top + height/2
				});
			}

			// Set dynamic size if size not already specified
			if (!options.size && !options.fontSize) {
				var pixelLimit = Math.min(width, height, MAX_DYNAMIC_SIZE * FONT_MULTIPLIER);
				options.size = pixelLimit / (FONT_MULTIPLIER + 1); // + 1 for padding
			}

			// Apply CSS styles to spinner
			if (options.size) {
				options.fontSize = Math.ceil(options.size * FONT_MULTIPLIER) + 'px';
				delete options.size;
			}
			if (!_.isEmpty(options)) {
				$spin.find('.spinner-inner').css(options);
			}

			$spin.attr('role', 'progressbar');

			// Attach reference to element so we can remove later
			$this.data('spin', $spin);

			// Begin the spin-a-palooza
			$this.append($spin);
		});
	};

})(jQuery);





;(function($d, $w) {

	var DDB_NAMESPACE = 'ddbns';

	function ddbTogBehavior($ddb_tog, behavior) {
		var data = $ddb_tog.data('behavior');
		return data && (data.split(' ').indexOf(behavior) !== -1);
	}

	/**
	 * Dropdowns using the ddb-tog class will open on click
	 * and close on clicking the ddb-tog or any non ddb element
	 *  - To close no matter what, add data-behavior="clickClose"
	 *  to the ddb-tog element
	 */
	function handleDropdownClicks() {
		var $this = $(this),
			namespace;

		if (!$this.hasClass('open')) {
			// Open the dropdown
			$this.addClass('open');
			namespace = PatternLibrary.bodyClick($this.find('.ddb'), undefined, function(){
				$this.removeClass('open');
			});
			$this.data(DDB_NAMESPACE, namespace);
		} else if (ddbTogBehavior($this, 'clickClose')) {
			// Close the dropdown if it should close on click
			$this.removeClass('open');
			_.defer(function(){
				$d.off('click.'+$this.data(DDB_NAMESPACE));
			});
		}
	}

	/**
	 * Dropdowns using the ddb-tog class with ddb-option, will
	 * fire the ddb-option-click trigger on the ddb-tog element
	 * when clicked. Any party interested in acting on these click
	 * events may listen in
	 */
	function handleDropdownOptionClick() {
		var $this = $(this),
			$ddb_tog = $this.closest('.ddb-tog');

		if (ddbTogBehavior($ddb_tog, 'update')) {
			handleDropdownOptionUpdate.call(this);
		}

		if (ddbTogBehavior($ddb_tog, 'focusActive')) {
			$this.trigger('ddb-select');
		}

		$ddb_tog.trigger('ddb-option-click', [$this]);
	}

	// @TODO add comments
	function handleDropdownOptionUpdate() {
		var $this = $(this),
			$ddb_tog = $this.closest('.ddb-tog');

		$ddb_tog.find('.ddb-tog-current').html($this.find('.ddb-option-text').html());
	}

	/**
	 * [handleDropdownOptionSelect description]
	 * @return {[type]} [description]
	 */
	function handleDropdownOptionSelect() {
		var $this = $(this),
			$ddb_tog = $this.closest('.ddb-tog');

		$ddb_tog.find('.ddb-option.active').removeClass('active');
		$this.addClass('active');
	}

	/**
	 * Standard select updating
	 * When using the stnd-select class with two children,
	 *  - stnd-select-input and stnd-select-val
	 * Updates the stnd-select-val element when
	 * stnd-select-input changes
	 */
	function handleSelectUpdate() {
		var $this = $(this);
		$this.prev().html($.trim($this.find('option:selected').text()));
	}

	function initTopNav() {
		var $nav = $('.stnd-topnav'),
			prevTop = 0;
		$w.on('scroll', _.throttle(function() {
			var top = $w.scrollTop();
			$nav.toggleClass('topnav-hide', top > prevTop && top !== 0);
			prevTop = top;
		}, 200));
	}

	/**
	 * Bind the events to make sure these handlers are ready
	 */
	function init() {
		$d
			// ddb events
			.on('click', '.ddb-tog', handleDropdownClicks)
			.on('click', '.ddb-option', handleDropdownOptionClick)
			.on('ddb-select', '.ddb-option', handleDropdownOptionSelect)
			.on('ddb-update', '.ddb-option', handleDropdownOptionUpdate)
			.on('change', '.stnd-select-input', handleSelectUpdate)
			.on('vclick', '.stnd-sec-title:not([data-click=1])', function(e){
				cancelEvent(e);
				// Ignore clicks that originated from section buttons
				if ($(e.target).closest('.section-btn').length) return;

				// Toggle open class and trigger toggle event for any modules listening
				var $sec = $(this).closest('.stnd-sec');
				$sec.toggleClass('open').trigger('toggle', $sec.hasClass('open'));


				// Trigger accordion closing if applicable
				var accordData = $sec.data('accord');
				if ($sec.hasClass('stnd-accord') && accordData) {
					// Close all siblings with the same accordion data
					$sec.siblings()
						.filter('.stnd-accord[data-accord="'+accordData+'"]')
						.removeClass('open');
				}

				// Render any JS modules that delayed rendering because they were hidden
				if ($sec.hasClass('open')) {
					$sec.find('.js-render').trigger('render');
				}
			});
		initTopNav();
	}

	init();

	var VCLICK_MASK_HIDE = 'vclick-mask-hide';

	/**
	 * Core UI helper functions
	 * @type {Object}
	 */
	var PatternLibrary = {
		/**
		 * Attaches a click namespaced click handler to the document
		 * to catch a single click event. Pass in a jQuery node as $wrap
		 * to rebind the one time click handler (see above for an example)
		 * @param  jQuery   $wrap     A jQuery node that will not trigger the onClose callback when clicked
		 * @param  string   namespace (optional) namespace to uniquely identify the click handler
		 * @param  Function onClose   (optional) callback function when element might close
		 * @param  string   eventType (optional) click, vclick, etc. (default is click)
		 * @return string   namespace The namespace generated (useful in the event that you don't pass in a namespace)
		 */
		bodyClick: function($wrap, namespace, onClose, eventType) {
			namespace = namespace || _.uniqueId('bclick-');

			// Defer execution so if bodyClick is applied during a click event,
			// it is not triggered immediately
			// eventType (optional) - click, vclick, etc.
			_.defer(function clickHandler(eventType) {
				eventType = eventType || 'click';
				$d.off(eventType+'.'+namespace).one(eventType+'.'+namespace, function(e) {
					// If not the wrapper or contained within the wrap and it actually is a valid point in the DOM
					if (!$wrap.is(e.target) && !$wrap.find(e.target).length && $d.find(e.target).length) {
						(onClose || $.noop)(e);
					} else {
						clickHandler(eventType);
					}
				});
			}, eventType);

			return namespace;
		},

		/**
		 * Provides helper methods for adding a mask to prevent vclick
		 * double event issues
		 * @param jQuery $parentDiv (optional) Any parent/grandparent/*parent
		 *                          of the .vclick-mask (.html()) that
		 *                          can be used to call vclickMask.hide() or .show()
		 *                          with no arguments (only usable if the vclickMask
		 *                          is used as a non-static variable)
		 * @return object Methods to return html, and show/hide the mask
		 */
		vclickMask: (function() {
			var initialize = function($parentDiv) {

				function hideShow($parent, show) {
					($parent || $parentDiv).toggleClass(VCLICK_MASK_HIDE, !show);
				}

				return {
					html: getHTML,
					// Hide the mask. Pass in the $parent jQuery node if not defined originally
					hide: function($parent) {
						hideShow($parent, false);
					},
					// Show the mask. Pass in the $parent jQuery node if not defined originally
					show: function($parent) {
						hideShow($parent, true);
					}
				};
			};

			// Return the html for the mask (with optional additional classes)
			function getHTML(classes) {
				return '<div class="vclick-mask '+(classes || '')+'"></div>';
			}
			initialize.html = getHTML;

			return initialize;
		})()
	};

	Flex.PL = PatternLibrary;
})(window.$d || $(document), window.$w || $(window));
;/***
 * Tip Functions
 *
 * You can add a hover tip anywhere on the site very simply.
 * Place a <div class=”tip”>Tip Text...</div> inside the element whose hover you want to trigger the tip.
 * Then make sure applyTips() is called somewhere later in javascript.
 * It only needs to be called once for all tips on the page.
 */
(function(){
	var show, hide, block = false, $tip;

	function tipOver(e) {
		clearTimeout(show);
		clearTimeout(hide);
		show = setTimeout(function(){
			var $target = $(e.currentTarget);
			showTip($target, $target.find('.tip').html(), e);
		}, 300);
	}

	function tipOut() {
		if (block) {
			return;
		}
		clearTimeout(show);
		clearTimeout(hide);
		hide = setTimeout(hideTip, 120);
	}

	function tipClick(e) {
		if ($(this).hasClass('info-icon')) {
			cancelEvent(e);
			clearTimeout(hide);
		} else {
			block = false;
			tipOut();
		}
	}

	function disableHide() {
		clearTimeout(hide);
		block = true;
	}

	function enableHide() {
		block = false;
		tipOut();
	}

	function showTip($target, text, event) {
		// Lazily create an element to display our tooltip
		$tip = $tip || $('<div class="tip-body"/>').appendTo('body');

		var style = $target.data('style'),
			length = text.length,
			offset = $target.offset(),
			cx = event ? event.clientX : $target.offset().left,
			wx = $w.width(),
			wh = $w.height(),
			width = Math.min(260 + length / 5 >> 0, Math.max(wx - cx, cx) - 40),
			top = offset.top + $target.outerHeight() + 8,
			left = offset.left + $target.outerWidth()/2 - 25;

		$tip.hover(disableHide, enableHide);
		$tip.html(text).removeClass('right bottom dark').css({
			maxWidth: width,
			top: top,
			left: left
		});

		if (style) {
			$tip.addClass(style);
		}

		// Re-position hover tip if it's outside window boundaries
		if ($tip.outerWidth() + left - $w.scrollLeft() >= wx){
			$tip.css({left: ''}); // Need to reset left first so the tip can remeasure it's width before we do the next calculation
			$tip.addClass('right').css({
				left: left - $tip.outerWidth() + 50
			});
		}
		if ($tip.outerHeight() + top - $w.scrollTop() > wh){
			$tip.addClass('bottom').css({
				top: top - $target.outerHeight() - $tip.outerHeight() - 16
			});
		}
		$tip.fadeIn(200);
	}

	function hideTip() {
		return $tip && $tip.fadeOut(200);
	}

	window.applyTips = function(parent){
		var $tips;
		if (parent && parent.jquery){
			$tips = parent.find('.tip');
		} else if (typeof parent === 'string'){
			$tips = $(parent + ' .tip');
		} else {
			$tips = $('.tip');
		}

		$tips.quickEach(function(){
			var parent = this.parent();
			if (!parent.data('_tip')) {
				parent.hover(tipOver, tipOut).click(tipClick).data('_tip', 1);
				this.hide();
			}
		});
	};

	$(function(){
		if (window.onAppear) {
			// Try to reduce SEO impact, override hidden in js, so .tip can trigger onAppear
			$('head').append('<style>.tip {display:block;position: absolute;width: 0;height: 0;overflow: hidden;}</style>');
			// Call it for .tip on page
			applyTips();
			// We hide .tip after processing them, so this will only trigger for inserted .tip
			window.onAppear('.tip', function(){
				applyTips(this.parent());
			});
		} else {
			applyTips();
		}
	});

})();
;$(function(){function e(d){d?$(".open-in-playground span").text("Add to Playground"):$(".open-in-playground span").text("Open in Playground")}function f(){var d=window.persist("explore");document.hidden||document.webkitHidden||document.msHidden||document.mozHidden||d.sync("www",function(b,d){var a=_.indexBy(b,"k"),g=a.last_heartbeat;if(g&&7E3>Date.now()-parseInt(g.v,10))FTB.playgroundIsOpen||e(!0),FTB.playgroundIsOpen=!0;else if(FTB.playgroundIsOpen&&e(!1),FTB.playgroundIsOpen=!1,a.new_graphiq&&(a=
JSON.parse(a.new_graphiq.v),0<a.length))return a=encodeURI(JSON.stringify(a)),a="https://"+(FTB.IS_LOCAL?"www.dw.com":"www.graphiq.com")+"/explore?q="+a,MSG('Oops... Playground is closed! &nbsp;&nbsp;<a href="'+a+'" target="_blank" class="stnd-btn bg-green small">Open It Again</a>',"orange",15E3),{new_graphiq:"[]"}})}window.openSoftjoinInPlayground=function(d,b){var c=FTB.app_id,a;b||(b=window.detail?window.detail.id:window.compare?_.map(_.pluck(window.compare.items,"id"),Number):null);a=d?_.isArray(b)?
{app_id:c,listing_id:b,type:5>b.length?"vs":"srp",children:[{softjoin_id:d}]}:{app_id:c,listing_id:b,softjoin_id:d,load_detail:!0}:_.isArray(b)?{app_id:c,listing_id:b,type:5>b.length?"vs":"srp"}:{app_id:c,listing_id:b,type:"detail"};FTB.isInPlaygroundSidebar?window.parent&&window.parent.postMessage(JSON.stringify({open_in_playground:a}),"*"):FTB.playgroundIsOpen?(MSG("Opened Graphiq in the Playground. Switch to the Playground tab to view it.","green"),c=window.persist("explore"),c.sync("www",function(b,
d){var c=_.indexBy(b,"k"),c=c.new_graphiq?JSON.parse(c.new_graphiq.v):[];c.push(a);return{new_graphiq:JSON.stringify(c)}},function(){})):(window.open("https://"+(FTB.IS_LOCAL?"www.dw.com":"www.graphiq.com")+"/explore?q="+encodeURI(JSON.stringify(a)),"_blank"),FTB.playgroundIsOpen=!0,e(!0))};if(gatekeeper("Knowledge Explorer")){try{window.frameElement&&$(window.frameElement).data("in-playground-sidebar")&&(FTB.isInPlaygroundSidebar=!0)}catch(h){FTB.IS_WIDGET||(FTB.isInPlaygroundSidebar=!0)}FTB.isInPlaygroundSidebar?
(window.parent.postMessage(JSON.stringify({iframe_url:document.location.toString()}),"*"),FTB.playgroundIsOpen=!0,e(!0),$("a").prop("target","_self")):FTB.needsToPollForPlayground&&(FTB.playgroundIsOpen=!1,e(!1),f(),setInterval(f,3E3))}});
;(function(h,d){function g(b){return b.match(FTB.IS_LOCAL?/\.dw\.com$/:/\.(findthebest|graphiq)\.com$/)}var e=d.postMessage;FTB.module("FTB.utils",{postMessage:function(b,c,a){c&&e&&(b=JSON.stringify(b||{}),a=a||parent,a.postMessage(b,c))},receiveMessage:function(b,c){var a,f;c=c||g;if(e&&b)return a=function(a){if(!("string"===typeof c&&a.origin!==c||"function"==typeof c&&!c(a.origin)))try{f=JSON.parse(a.data),b(f)}catch(d){}},d.addEventListener?d.addEventListener("message",a,!1):d.attachEvent("onmessage",
a),a},stopMessage:function(b){d.removeEventListener?d.removeEventListener("message",b,!1):d.detachEvent("onmessage",b)}})})(jQuery,window);
;(function(f,s){function k(){l=$w.height()}function m(){if(!h){h=!0;var a=$w.scrollTop()+l,b=e.length,c,d,f,g;for(c=0;c<b;c++)d=e[c],g=d[n],f=g.offset().top,a>f+d[t]&&g.is(":visible")&&(d[p].call(g[0]),e.splice(c,1),c--,b--);h=!1}}function q(a,b,c){if(!a||!b)return!1;a instanceof jQuery||(a=$(a));b=_.once(b);a.on("sqrl",b);e.push([a,b,c||0])}function r(a){var b,c,d;for(b=0;b<e.length;b++)c=e[b],d=c[n],d.is(":visible")&&(c[p].call(d[0]),e.splice(b,1),b--);a&&a()}var n=0,p=1,t=2,l,h,e=[];k();(function(){resize_throttle(k);
scroll_throttle(m);$w.on("keydown",function(a){35===a.keyCode&&"INPUT"!==a.target.nodeName&&"TEXTAREA"!==a.target.nodeName&&(cancelEvent(a),r(function(){$w.scrollTop($(s).height())}))})})();$(function(){setTimeout(m,1)});f._sqrl=q;f._sqrl_run=r;$.fn.sqrl=function(a,b){this.each(function(){q(this,a,b)});return this}})(window,document);
;