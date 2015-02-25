
/*jquery.2.1.0:35166442.1*/

/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
    while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
    return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

/*jquery.cookie:34734632.1*/

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/*jquery.json:34734630.1*/

(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var type=typeof o;if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return''+o;}
if(type==='string'){return $.quoteString(o);}
if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
return'['+ret.join(',')+']';}
var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
val=$.toJSON(o[k]);pairs.push(name+':'+val);}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};})(jQuery);
/*modernizr.custom.89128:34734658.1*/

/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-flexbox-flexboxlegacy-csscolumns-applicationcache-hashchange-history-audio-video-inputtypes-localstorage-postmessage-sessionstorage-websockets-geolocation-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_calc-css_positionsticky-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.csscolumns=function(){return I("columnCount")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csspositionsticky",function(){var a="position:",b="sticky",c=document.createElement("modernizr"),d=c.style;return d.cssText=a+Modernizr._prefixes.join(b+";"+a).slice(0,-a.length),d.position.indexOf(b)!==-1}),Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length});
/*require:34734648.1*/

/*
 RequireJS 2.1.4 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(Y){function I(b){return"[object Function]"===L.call(b)}function J(b){return"[object Array]"===L.call(b)}function x(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function M(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function r(b,c){return da.call(b,c)}function i(b,c){return r(b,c)&&b[c]}function E(b,c){for(var d in b)if(r(b,d)&&c(b[d],d))break}function Q(b,c,d,i){c&&E(c,function(c,h){if(d||!r(b,h))i&&"string"!==typeof c?(b[h]||(b[h]={}),Q(b[h],
c,d,i)):b[h]=c});return b}function t(b,c){return function(){return c.apply(b,arguments)}}function Z(b){if(!b)return b;var c=Y;x(b.split("."),function(b){c=c[b]});return c}function F(b,c,d,i){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=i;d&&(c.originalError=d);return c}function ea(b){function c(a,f,v){var e,n,b,c,d,k,g,h=f&&f.split("/");e=h;var l=m.map,j=l&&l["*"];if(a&&"."===a.charAt(0))if(f){e=i(m.pkgs,f)?h=[f]:h.slice(0,h.length-1);f=a=e.concat(a.split("/"));
for(e=0;f[e];e+=1)if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=i(m.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(v&&(h||j)&&l){f=a.split("/");for(e=f.length;0<e;e-=1){b=f.slice(0,e).join("/");if(h)for(n=h.length;0<n;n-=1)if(v=i(l,h.slice(0,n).join("/")))if(v=i(v,b)){c=v;d=e;break}if(c)break;!k&&(j&&i(j,b))&&(k=i(j,b),g=e)}!c&&k&&(c=k,d=g);c&&(f.splice(0,d,
c),a=f.join("/"))}return a}function d(a){z&&x(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===k.contextName)return f.parentNode.removeChild(f),!0})}function y(a){var f=i(m.paths,a);if(f&&J(f)&&1<f.length)return d(a),f.shift(),k.require.undef(a),k.require([a]),!0}function g(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function h(a,f,b,e){var n,u,d=null,h=f?f.name:
null,l=a,m=!0,j="";a||(m=!1,a="_@r"+(L+=1));a=g(a);d=a[0];a=a[1];d&&(d=c(d,h,e),u=i(p,d));a&&(d?j=u&&u.normalize?u.normalize(a,function(a){return c(a,h,e)}):c(a,h,e):(j=c(a,h,e),a=g(j),d=a[0],j=a[1],b=!0,n=k.nameToUrl(j)));b=d&&!u&&!b?"_unnormalized"+(M+=1):"";return{prefix:d,name:j,parentMap:f,unnormalized:!!b,url:n,originalName:l,isDefine:m,id:(d?d+"!"+j:j)+b}}function q(a){var f=a.id,b=i(j,f);b||(b=j[f]=new k.Module(a));return b}function s(a,f,b){var e=a.id,n=i(j,e);if(r(p,e)&&(!n||n.defineEmitComplete))"defined"===
f&&b(p[e]);else q(a).on(f,b)}function A(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(x(b,function(f){if(f=i(j,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)l.onError(a)}function w(){R.length&&(fa.apply(G,[G.length-1,0].concat(R)),R=[])}function B(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,x(a.depMaps,function(e,c){var d=e.id,h=i(j,d);h&&(!a.depMatched[c]&&!b[d])&&(i(f,d)?(a.defineDep(c,p[d]),a.check()):B(h,f,b))}),b[e]=!0)}function C(){var a,f,b,e,n=(b=1E3*m.waitSeconds)&&
k.startTime+b<(new Date).getTime(),c=[],h=[],g=!1,l=!0;if(!T){T=!0;E(j,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||h.push(b),!b.error))if(!b.inited&&n)y(f)?g=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(g=!0,!a.prefix))return l=!1});if(n&&c.length)return b=F("timeout","Load timeout for modules: "+c,null,c),b.contextName=k.contextName,A(b);l&&x(h,function(a){B(a,{},{})});if((!n||e)&&g)if((z||$)&&!U)U=setTimeout(function(){U=0;C()},50);T=!1}}function D(a){r(p,a[0])||
q(h(a[0],null,!0)).init(a[1],a[2])}function H(a){var a=a.currentTarget||a.srcElement,b=k.onScriptLoad;a.detachEvent&&!V?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=k.onScriptError;(!a.detachEvent||V)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function K(){var a;for(w();G.length;){a=G.shift();if(null===a[0])return A(F("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));D(a)}}var T,W,k,N,U,m={waitSeconds:7,
baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},j={},X={},G=[],p={},S={},L=1,M=1;N={require:function(a){return a.require?a.require:a.require=k.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=p[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m.config&&i(m.config,a.map.id)||{}},exports:p[a.map.id]}}};W=function(a){this.events=i(X,a.id)||{};this.map=a;this.shim=
i(m.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};W.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=
b)},fetch:function(){if(!this.fetched){this.fetched=!0;k.startTime=(new Date).getTime();var a=this.map;if(this.shim)k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;S[a]||(S[a]=!0,k.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var e=this.exports,n=this.factory;
if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(I(n)){if(this.events.error)try{e=k.execCb(c,n,b,e)}catch(d){a=d}else e=k.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=[this.map.id],a.requireType="define",A(this.error=a)}else e=n;this.exports=e;if(this.map.isDefine&&
!this.ignore&&(p[c]=e,l.onResourceLoad))l.onResourceLoad(k,this.map,this.depMaps);delete j[c];this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=h(a.prefix);this.depMaps.push(d);s(d,"defined",t(this,function(e){var n,d;d=this.map.name;var v=this.map.parentMap?this.map.parentMap.name:null,g=k.makeRequire(a.parentMap,{enableBuildCallback:!0});
if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,v,!0)})||""),e=h(a.prefix+"!"+d,this.map.parentMap),s(e,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=i(j,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",t(this,function(a){this.emit("error",a)}));d.enable()}}else n=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),n.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=
[b];E(j,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&delete j[a.map.id]});A(a)}),n.fromText=t(this,function(e,c){var d=a.name,u=h(d),v=O;c&&(e=c);v&&(O=!1);q(u);r(m.config,b)&&(m.config[d]=m.config[b]);try{l.exec(e)}catch(j){return A(F("fromtexteval","fromText eval for "+b+" failed: "+j,j,[b]))}v&&(O=!0);this.depMaps.push(u);k.completeLoad(d);g([d],n)}),e.load(a.name,g,n,m)}));k.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){this.enabling=this.enabled=!0;x(this.depMaps,t(this,function(a,
b){var c,e;if("string"===typeof a){a=h(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=i(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;s(a,"defined",t(this,function(a){this.defineDep(b,a);this.check()}));this.errback&&s(a,"error",this.errback)}c=a.id;e=j[c];!r(N,c)&&(e&&!e.enabled)&&k.enable(a,this)}));E(this.pluginMaps,t(this,function(a){var b=i(j,a.id);b&&!b.enabled&&k.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=
this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){x(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};k={config:m,contextName:b,registry:j,defined:p,urlFetched:S,defQueue:G,Module:W,makeModuleMap:h,nextTick:l.nextTick,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=m.pkgs,c=m.shim,e={paths:!0,config:!0,map:!0};E(a,function(a,b){e[b]?"map"===b?Q(m[b],a,!0,!0):Q(m[b],a,!0):m[b]=a});a.shim&&(E(a.shim,function(a,
b){J(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=k.makeShimExports(a);c[b]=a}),m.shim=c);a.packages&&(x(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ga,"").replace(aa,"")}}),m.pkgs=b);E(j,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=h(b))});if(a.deps||a.callback)k.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(Y,arguments));
return b||a.exports&&Z(a.exports)}},makeRequire:function(a,d){function g(e,c,u){var i,m;d.enableBuildCallback&&(c&&I(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(I(c))return A(F("requireargs","Invalid require call"),u);if(a&&r(N,e))return N[e](j[a.id]);if(l.get)return l.get(k,e,a);i=h(e,a,!1,!0);i=i.id;return!r(p,i)?A(F("notloaded",'Module name "'+i+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):p[i]}K();k.nextTick(function(){K();m=q(h(null,a));m.skipMap=d.skipMap;
m.init(e,c,u,{enabled:!0});C()});return g}d=d||{};Q(g,{isBrowser:z,toUrl:function(b){var d,f=b.lastIndexOf("."),h=b.split("/")[0];if(-1!==f&&(!("."===h||".."===h)||1<f))d=b.substring(f,b.length),b=b.substring(0,f);b=k.nameToUrl(c(b,a&&a.id,!0),d||".fake");return d?b:b.substring(0,b.length-5)},defined:function(b){return r(p,h(b,a,!1,!0).id)},specified:function(b){b=h(b,a,!1,!0).id;return r(p,b)||r(j,b)}});a||(g.undef=function(b){w();var c=h(b,a,!0),d=i(j,b);delete p[b];delete S[c.url];delete X[b];
d&&(d.events.defined&&(X[b]=d.events),delete j[b])});return g},enable:function(a){i(j,a.id)&&q(a).enable()},completeLoad:function(a){var b,c,d=i(m.shim,a)||{},h=d.exports;for(w();G.length;){c=G.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);D(c)}c=i(j,a);if(!b&&!r(p,a)&&c&&!c.inited){if(m.enforceDefine&&(!h||!Z(h)))return y(a)?void 0:A(F("nodefine","No define call for "+a,null,[a]));D([a,d.deps||[],d.exportsFn])}C()},nameToUrl:function(a,b){var c,d,h,g,k,j;if(l.jsExtRegExp.test(a))g=
a+(b||"");else{c=m.paths;d=m.pkgs;g=a.split("/");for(k=g.length;0<k;k-=1)if(j=g.slice(0,k).join("/"),h=i(d,j),j=i(c,j)){J(j)&&(j=j[0]);g.splice(0,k,j);break}else if(h){c=a===h.name?h.location+"/"+h.main:h.location;g.splice(0,k,c);break}g=g.join("/");g+=b||(/\?/.test(g)?"":".js");g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+g}return m.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+m.urlArgs):g},load:function(a,b){l.load(k,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===
a.type||ha.test((a.currentTarget||a.srcElement).readyState))P=null,a=H(a),k.completeLoad(a.id)},onScriptError:function(a){var b=H(a);if(!y(b.id))return A(F("scripterror","Script error",a,[b.id]))}};k.require=k.makeRequire();return k}var l,w,B,D,s,H,P,K,ba,ca,ia=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ja=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,aa=/\.js$/,ga=/^\.\//;w=Object.prototype;var L=w.toString,da=w.hasOwnProperty,fa=Array.prototype.splice,z=!!("undefined"!==typeof window&&navigator&&
document),$=!z&&"undefined"!==typeof importScripts,ha=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,V="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),C={},q={},R=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(I(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!I(require)&&(q=require,require=void 0);l=requirejs=function(b,c,d,y){var g,h="_";!J(b)&&"string"!==typeof b&&(g=b,J(c)?(b=c,c=d,d=y):b=[]);
g&&g.context&&(h=g.context);(y=i(C,h))||(y=C[h]=l.s.newContext(h));g&&y.configure(g);return y.require(b,c,d)};l.config=function(b){return l(b)};l.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=l);l.version="2.1.4";l.jsExtRegExp=/^\/|:|\?|\.js$/;l.isBrowser=z;w=l.s={contexts:C,newContext:ea};l({});x(["toUrl","undef","defined","specified"],function(b){l[b]=function(){var c=C._;return c.require[b].apply(c,arguments)}});if(z&&(B=w.head=document.getElementsByTagName("head")[0],
D=document.getElementsByTagName("base")[0]))B=w.head=D.parentNode;l.onError=function(b){throw b;};l.load=function(b,c,d){var i=b&&b.config||{},g;if(z)return g=i.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),g.type=i.scriptType||"text/javascript",g.charset="utf-8",g.async=!0,g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&
!V?(O=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,K=g,D?B.insertBefore(g,D):B.appendChild(g),K=null,g;$&&(importScripts(d),b.completeLoad(c))};z&&M(document.getElementsByTagName("script"),function(b){B||(B=b.parentNode);if(s=b.getAttribute("data-main"))return q.baseUrl||(H=s.split("/"),ba=H.pop(),ca=H.length?H.join("/")+"/":"./",q.baseUrl=ca,s=ba),s=s.replace(aa,""),q.deps=q.deps?q.deps.concat(s):
[s],!0});define=function(b,c,d){var i,g;"string"!==typeof b&&(d=c,c=b,b=null);J(c)||(d=c,c=[]);!c.length&&I(d)&&d.length&&(d.toString().replace(ia,"").replace(ja,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c));if(O){if(!(i=K))P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return P=b}),i=P;i&&(b||(b=i.getAttribute("data-requiremodule")),g=C[i.getAttribute("data-requirecontext")])}(g?
g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};l.exec=function(b){return eval(b)};l(q)}})(this);

/*Lib:34734662.2*/


/*de.bild.events:34734664.1*/

var de = de || {};

de.bild = de.bild || {};

de.bild.events = function($) {
    function init() {
        setEvents();
        setPubSubAsjQueryEvents();
    }
    var events = {};
    function setEvents() {
        var isMS = window.navigator.msPointerEnabled;
        var isTouch = "Touch" in window;
        var isIOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
        if (isIOS) {
            events = {
                click: "touchstart",
                fastClick: "mobileClick",
                mousemove: "touchmove",
                mousedown: "touchstart",
                mouseup: "touchend"
            };
        } else {
            events = {
                click: "click",
                fastClick: "click",
                mousemove: "mousemove",
                mousedown: "mousedown",
                mouseup: "mouseup"
            };
        }
    }
    function getNameSpacedEvents(namespace) {
        var nEvents = {};
        if (!namespace) {
            namespace = "jsModule";
        }
        $.each(events, function(key, val) {
            nEvents[key] = val + "." + namespace;
        });
        return nEvents;
    }
    function EventManager() {
        this.observedTopics = {};
        this.recentPublished = {};
    }
    EventManager.prototype.publish = function(topic, args) {
        if (!this.observedTopics[topic]) {
            if (!this.recentPublished[topic]) {
                this.recentPublished[topic] = [];
            }
            this.recentPublished[topic].push(args);
            return false;
        }
        for (var i = 0, len = this.observedTopics[topic].length; i < len; i++) {
            this.observedTopics[topic][i].apply(this, args || []);
        }
    };
    EventManager.prototype.subscribe = function(topic, callback) {
        if (!this.observedTopics[topic]) {
            this.observedTopics[topic] = [];
        }
        this.observedTopics[topic].push(callback);
        return [ topic, callback ];
    };
    EventManager.prototype.unsubscribe = function(topic, callback) {
        if (!this.observedTopics[topic]) {
            return false;
        }
        for (var i = 0, len = this.observedTopics[topic].length; i < len; i++) {
            if (this.observedTopics[topic][i] == callback) {
                this.observedTopics[topic].splice(i, 1);
            }
        }
    };
    EventManager.prototype.getRecentPublished = function(topic) {
        if (!this.recentPublished[topic]) {
            return false;
        }
        return this.recentPublished[topic];
    };
    function setPubSubAsjQueryEvents() {
        if (!jQuery.publish || !jQuery.subscribe) {
            jQuery.publish = function(topic, args) {
                return EManager.publish(topic, args);
            };
            jQuery.subscribe = function(topic, callback) {
                return EManager.subscribe(topic, callback);
            };
            jQuery.unsubscribe = function(topic, callback) {
                return EManager.unsubscribe(topic, callback);
            };
        }
    }
    var EManager = new EventManager();
    init();
    return {
        publish: function(topic, args) {
            return EManager.publish(topic, args);
        },
        subscribe: function(topic, callback) {
            return EManager.subscribe(topic, callback);
        },
        unsubscribe: function(topic, callback) {
            return EManager.unsubscribe(topic, callback);
        },
        getNameSpacedEvents: function(namespace) {
            return getNameSpacedEvents(namespace);
        },
        getSubscribers: function() {
            return EManager.observedTopics;
        },
        getRecentPublished: function(topic) {
            return EManager.getRecentPublished(topic);
        },
        createNewEventManager: function() {
            return new EventManager();
        }
    };
}(jQuery);
/*de.bild.mobile.moduleLoader:35166568.2*/

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.ModuleLoader = function() {
    var MLoader = null;
    function ModuleLoader(Events) {
        this.getModule = function(moduleName, callback) {
            require([ moduleName ], function(Module) {
                if (callback && typeof callback === "function") {
                    callback(Module);
                }
            });
        };
        this.getStructuredModule = function(moduleName, callback) {
            require([ "mod." + moduleName ], function() {
                require([ "module/structured/" + moduleName + "/" + moduleName ], function(Module) {
                    if (callback && typeof callback === "function") {
                        callback(Module);
                    }
                });
            });
        };
        return false;
    }
    return {
        getLoader: function(Events) {
            if (!MLoader) {
                MLoader = new ModuleLoader(Events);
            }
            return MLoader;
        },
        getModule: function(moduleName, callback) {
            return MLoader.getModule(moduleName, callback);
        },
        getStructuredModule: function(moduleName, callback) {
            return MLoader.getStructuredModule(moduleName, callback);
        }
    };
}();
/*de.bild.mobile.moduleController:35166570.6*/

de.bild.mobile.ModuleController = function($, Events) {
    
    var MODULE_CONFIG = {
        internal: {
            autoLoad: {
                identifier: "conf",
                init: function(context) {
                    return de.bild.mobile.conf.autoLoadModule($(context));
                }
            },
            lazyLoader: {
                identifier: "lazyLoader",
                init: function(data, deferred) {
                    deferred.resolve(de.bild.mobile.lazyLoader.init());
                }
            },
            breakingnews: {
                identifier: "conf",
                init: function(data, deferred) {
                    if (de.bild.mobile.breakingnews) {
                        deferred.resolve(de.bild.mobile.breakingnews.init(data));
                    }
                }
            },
            community: {
                identifier: "community",
                init: function(context, deferred) {
                    de.bild.mobile.community.init(context, MC.ModuleLoader, deferred);
                }
            },
            sso: {
                identifier: "sso",
                init: function(context, deferred) {
                    deferred.resolve(new de.bild.mobile.sso.init());
                }
            }
        },
        external: {
            videoplayer: {
                identifier: "videoplayer",
                init: function(context) {
                    if (!window.com.xoz || !window.com.xoz.videoplayer) {
                        return;
                    }
                    com.xoz.videoplayer.initVideoplayer($(context));
                },
                destroy: function() {}
            },
            mediaPlayer: {
                identifier: "mediaPlayer",
                init: function(context) {
                    if (de.bild.mediaplayer) {
                        de.bild.mediaplayer.core.create($(context));
                    }
                },
                destroy: function() {
                    de.bild.mediaplayer.core.destroy($(context));
                }
            }
        },
        structured: {
            partnerTeaser: {},
            teaserSlider1414: {}
        }
    };
    function ModuleController() {
        this.modules = {
            events: Events
        };
        this.ModuleLoader = de.bild.mobile.ModuleLoader.getLoader(Events);
        this.SimpleFactory = new SimpleFactory(Events);
        this.init();
    }
    ModuleController.prototype = {
        init: function() {
            var self = this;
            Events.subscribe("initModule", function(moduleName, moduleData) {
                self.handleInit(moduleName, moduleData);
            });
        },
        handleInit: function(moduleName, moduleData) {
            var self = this;
            if (MODULE_CONFIG.internal[moduleName] && MODULE_CONFIG.internal[moduleName].init) {
                var deferred = $.Deferred();
                MODULE_CONFIG.internal[moduleName].init(moduleData, deferred);
                deferred.done(function(module) {
                    self.pushToInstances(moduleName, module, moduleData);
                });
                return true;
            }
            if (MODULE_CONFIG.external[moduleName]) {
                this.ModuleLoader.getModule(moduleName, function() {
                    MODULE_CONFIG.external[moduleName].init(moduleData.el);
                });
                return true;
            }
            if (MODULE_CONFIG.structured[moduleName]) {
                if (MODULE_CONFIG.structured[moduleName].instance) {
                    MODULE_CONFIG.structured[moduleName].instance.init(moduleData);
                    return true;
                }
                this.ModuleLoader.getStructuredModule(moduleName, function(Module) {
                    MODULE_CONFIG.structured[moduleName].instance = new Module(moduleData);
                    if (typeof MODULE_CONFIG.structured[moduleName].instance.init === "function") {
                        MODULE_CONFIG.structured[moduleName].instance.init(moduleData);
                    }
                });
                return true;
            }
            self.ModuleLoader.getModule(moduleName, function(Module) {
                self.moduleReceived(moduleName, Module, moduleData);
            });
            return false;
        },
        moduleReceived: function(moduleName, Module, moduleData) {
            var newMod = this.SimpleFactory.initModule(Module, moduleData);
            this.pushToInstances(moduleName, newMod, moduleData);
        },
        pushToInstances: function(moduleName, Module, moduleData) {
            var internalMod = MODULE_CONFIG.internal[moduleName];
            if (internalMod === undefined) {
                internalMod = {};
            }
            if (!internalMod.instances) {
                internalMod.instances = [];
            }
            internalMod.instances.push({
                name: moduleName,
                module: Module,
                moduleData: moduleData
            });
        }
    };
    function SimpleFactory(Events) {
        this.events = Events;
        this.initModule = function(Constructor, params) {
            return new Constructor(params);
        };
    }
    var MC = new ModuleController();
    return {
        getModules: function() {},
        getModuleController: function() {
            return MC;
        },
        modules: MODULE_CONFIG
    };
}(jQuery, de.bild.events);
/*de.bild.mobile.requireConf:34734870.91*/

/*!
 @ignore;
 */
requirejs.config({
    baseUrl: "http://m.bild.de/",
    paths: {
        css             : de.bild.env.scriptBase + "/code/css,37942914.1.bild.js",
        jquery        : de.bild.env.scriptBase + "lib/vendor/jquery/jquery",
        navigation    : de.bild.env.scriptBase +  "/code/de-bild-mobile-nav,34734582.18.bild.js",
        settings     : de.bild.env.scriptBase + "/code/de-bild-mobile-settings,34734602.6.bild.js",
        lazyLoader: de.bild.env.scriptBase + "/code/de-bild-mobile-lazyloader,35166448.10.bild.js",
        swipeGallery: de.bild.env.scriptBase + "/code/de-bild-mobile-swipegallery,34734594.10.bild.js",
        newsFeed: de.bild.env.scriptBase + "/code/de-bild-mobile-newsfeed,34734624.6.bild.js",
        conf: de.bild.env.scriptBase + "/code/de-bild-mobile-conf,34734612.19.bild.js",
        sso: de.bild.env.scriptBase + "/code/de-bild-mobile-sso,34734620.8.bild.js",
        classifier: de.bild.env.scriptBase + "/code/de-bild-mobile-classifier,34734606.12.bild.js",
        searchResults: de.bild.env.scriptBase + "/code/de-bild-mobile-newsfeed,34734624.6.bild.js",
        liveArticle: de.bild.env.scriptBase + "/code/de-bild-mobile-livearticle,34734616.10.bild.js",
        sliderTeaser: de.bild.env.scriptBase + "/code/de-bild-mobile-sliderteaser,34734610.5.bild.js",
        vp: de.bild.env.scriptBase + "/code/de-bild-mobile-videoteaser,35166462.15.bild.js",
        horoscope: de.bild.env.scriptBase + "/code/de-bild-mobile-horoscope,34734614.7.bild.js",
        sportLivebox: de.bild.env.scriptBase + "/code/de-bild-mobile-sportlivebox,34734604.11.bild.js",
        sharingBar: de.bild.env.scriptBase + "/code/de-bild-sharingbar,37942918.10.bild.js",
        geoRegionResolver: de.bild.env.scriptBase + "/code/de-bild-mobile-georegionresolver,35166466.4.bild.js",
        accordion: de.bild.env.scriptBase + "/code/de-bild-mobile-accordion,35166456.1.bild.js",
        debugMenu: de.bild.env.scriptBase + "/code/de-bild-mobile-debugmenu,35166450.27.bild.js",
        regioBlock: de.bild.env.scriptBase + "/code/de-bild-mobile-regioblock,35166454.3.bild.js",

        "topicPage": de.bild.env.scriptBase + "/code/de-bild-mobile-newsfeed,34734624.6.bild.js",

        spritz: de.bild.env.scriptBase + "/code/de-bild-mobile-spritz,37607046.9.bild.js",
        elemInView :  de.bild.env.scriptBase + "/code/de-bild-mobile-eleminview,38438306.2.bild.js",

        // Community
        ugc: de.bild.env.scriptBase + "/code/de-bild-mobile-community-ugc,34734596.11.bild.js",
        likes: de.bild.env.scriptBase + "/code/de-bild-mobile-community-likes,37607048.2.bild.js",
        report: de.bild.env.scriptBase + "/code/de-bild-mobile-community-report,37607050.4.bild.js",
        teaserComments : de.bild.env.scriptBase + "/code/de-bild-community-teasercomments,38627084.2.bild.js",

        //External & 3rd Party Modules 
        videoplayer: de.bild.env.scriptBase + "/code/de-xoz-videoplayer-core,35166582.12.bild.js",
        mediaPlayer: de.bild.env.scriptBase + "/code/mediaplayer-mobile,36723324.23.bild.js",

        // QGTV
        "qgtv.formular" : de.bild.env.scriptBase + "/code/de-bild-mobile-qgtv-form,37607054.3.bild.js",
        "qgtv.raffle" : de.bild.env.scriptBase + "/code/de-bild-mobile-qgtv-raffle,38249270.5.bild.js",

        twitter: "//platform.twitter.com/widgets",
 
        //CSS
        community : '/code/bde_community,34734558.18.bild.css',
        qgtv : '/code/bde_qgtv,38439184.4.bild.css'
    }
});
//try to shorten urls to avoid *.js.js as url
try{
    var rConfig = requirejs.s.contexts._.config.paths;
    if(rConfig){
        for(var entry in rConfig){
            if(rConfig.hasOwnProperty(entry)){
                if(rConfig[entry].indexOf('.js')!==-1){
                    rConfig[entry] = rConfig[entry].substring(0,rConfig[entry].length-3);
                }
            }
        }
        requirejs.config({
            paths: rConfig
        });
    }
}
catch(e){

}

(function() {
    // 1st level
    // external paths
    // Linked in CMS
    var firstLevel = [
        {
            name: "mod.partnerTeaser",
            path: "/code/partnerteaser,39333258.3.bild.js"
        },
        {
            name: "mod.teaserSlider1414",
            path: "/code/teaserslider1414,39333260.3.bild.js"
        },
        {
            name: "mod.mostCommentedTeaser",
            path: "/code/mostcommentedteaser,39333256.2.bild.js"
        }
    ];
    // 2nd level
    // internal require path definitions for structured modules!
    // no CMS linking!
    var secondLevel = [
        {
            name: "hbs",
            path: "/node_modules/require-handlebars-plugin/hbs"
        }
    ];
    var config = {};
    for(var i = 0; i < firstLevel.length; i++) {
        config[firstLevel[i].name] = firstLevel[i].path.substr(0, firstLevel[i].path.length - 3);
    }
    for(var i = 0; i < secondLevel.length; i++) {
        config[secondLevel[i].name] = secondLevel[i].path;
    }
    require.config({ paths: config,
        hbs: {
            disableI18n: true,              // default: false
            helperDirectory: 'lib/structured/template/helper/'
        }
    });
})();


/*de.bild.mobile.conf:34734612.19*/

var de = de || {};

de.bild = de.bild || {};

de.bild.getAdLevel = function(prefix, sep, postfix) {
    if (!de.bild.adlevel) {
        console.error("No AdLevel defined.");
        return prefix + sep + postfix;
    }
    if (de.bild.user && de.bild.user.userHasClub) {
        jQuery.each(de.bild.adlevel, function(i, n) {
            if (de.bild.user.userHasClub(i)) {
                prefix = n;
            }
        });
    }
    return prefix + sep + postfix;
};

de.bild.mobile.conf = function($) {
    (function() {
        var lastTime = 0;
        var vendors = [ "webkit", "moz" ];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        }
        if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    })();
    function positionFixedSupported() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Windows Phone OS 7.0") >= 0 || ua.indexOf("Windows Phone OS 7.5") >= 0) {
            return false;
        }
        if (ua.indexOf("Android") >= 0) {
            var androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
            if (androidversion < 3) {
                return false;
            }
        }
        return true;
    }
    function addLeadLast() {
        $("div.lead").eq(-1).addClass("leadLast");
    }
    function setImageLoupe() {
        $("body").on("click", ".icon-magnify, .icon-minify", function() {
            var $elem = $(this);
            if ($elem.hasClass("tsr-img")) {
                var $parent = $elem.closest(".element");
                $parent.toggleClass("floatL");
            }
            $elem.toggleClass("icon-magnify icon-minify");
        });
    }
    function initBackToDesktop() {
        $(".link-tooldworld").on("click", function(e) {
            e.preventDefault();
            $.cookie("mobileSwitch", "web", {
                path: "/",
                domain: de.bild.env.domainName
            });
            var path = window.location.pathname.replace(de.bild.env.client, de.bild.env.clientStat).replace(/,variante=./g, "");
            window.location.href = de.bild.env.stationaryHost + path;
        });
    }
    function autoLoadModule($context) {
        var href = $context.attr("data-ajax-href");
        if (href === undefined || href.length === 0) {
            console.warn("Autoload Module: couldn't find data-ajax-href attribute");
            return false;
        }
        $.ajax({
            url: href,
            dataType: "text"
        }).done(function(response) {
            var $temp = $("<div></div>");
            var $parent = $context.parent();
            $temp.get(0).innerHTML = response;
            $context.replaceWith($temp.html());
            de.bild.events.publish("autoLoadFinished");
            initVideoPlayer($parent);
        }).error(function(data) {
            console.warn("Autoload Module: Ajax Request failed.");
            var xLocation = data.getResponseHeader("X-Location");
            if (data.status == 403 && xLocation && xLocation.length && de.bild.env && de.bild.env.don) {
                renewVauthCookie();
            }
        });
        return true;
    }
    function initVideoPlayer($context) {
        var $vpNode = $context.find(".tsr-video").first();
        if ($vpNode.length) {
            var vpId = $vpNode.attr("id") || "videoPlayer_1";
            try {
                de.bild.events.publish("initModule", [ "vp", {
                    el: "#" + vpId
                } ]);
            } catch (err) {
                console.warn("AutoLoad:: Failed to re-init Videoplayer.");
            }
        }
    }
    function renewVauthCookie() {
        var url = window.location.href;
        if (url.indexOf(",jsPageReloaded=true") === -1) {
            url = window.location.href.replace(".bild.html", ",jsPageReloaded=true.bild.html");
            try {
                window.location.href = de.bild.env.don + "/gw/" + encodeURIComponent(encodeURIComponent(url));
            } catch (err) {
                console.warn("DON Redirect failed. " + err);
            }
        }
    }
    function checkWebFontFailed(numberOfExecution) {
        numberOfExecution = numberOfExecution ? numberOfExecution : 0;
        if (numberOfExecution < 3) {
            setTimeout(function() {
                $("footer").append('<canvas id="webFontTest" class="hidden" height="15" width="15"></canvas>');
                var ctx = document.getElementById("webFontTest");
                if (ctx) {
                    ctx = ctx.getContext("2d");
                    ctx.font = "15px icomoon";
                    ctx.fillText("", 0, 15);
                    var isBlack = ctx.getImageData(5, 10, 1, 1).data[3] === 255;
                    if (!isBlack) {
                        $("html").addClass("font-notloaded");
                        checkWebFontFailed(numberOfExecution + 1);
                    } else {
                        $("html").removeClass("font-notloaded");
                    }
                    $("#webFontTest").remove();
                }
            }, 1e3);
        }
    }
    function initStageFunctions() {
        addLeadLast();
    }
    function initArticleFunctions() {}
    function initGlobalFunctions() {
        initBackToDesktop();
        setImageLoupe();
        checkWebFontFailed();
    }
    function init() {
        if ($("article").length === 0) {
            initStageFunctions();
        } else {
            initArticleFunctions();
        }
        initGlobalFunctions();
    }
    $(function() {
        init();
    });
    return {
        positionFixedSupported: positionFixedSupported,
        autoLoadModule: autoLoadModule
    };
}(jQuery);
/*de.bild.mobile.deviceInfo:34734584.10*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.deviceInfo = function($) {
    var settings = {
        storageItem: "de.bild.mobile.deviceInfo",
        daysValid: 30,
        hoursValid: 2,
        bwValid: 1,
        bandwidthSlowFastThreshold: .1,
        localisation: "no-geolocation",
        onPortal: "onportal/mdot",
        offPortal: "offportal/mdot",
        localisationFailed: "Lokalisierung fehlgeschlagen",
        localisationPemitted: "Ihre aktuelle Position konnte nicht ermittelt werden oder Sie haben der Standortermittlung nicht zugestimmt. Bitte prüfen Sie Ihre Browsereinstellungen.",
        featureToggles: de.bild.mobile.featureToggle && de.bild.mobile.featureToggle.deviceInfo ? de.bild.mobile.featureToggle.deviceInfo : undefined
    };
    function DeviceInfo() {
        this.settings = settings;
        this.init();
    }
    DeviceInfo.prototype = {
        init: function() {
            this.info = this.getData();
            this.waitingCallback = {};
            this.featureToggles = this.settings.featureToggles;
            this.retrieveInfos();
            this.subscribeToEvents();
            de.bild.events.publish("publishDeviceInfo", [ this.getData() ]);
        },
        subscribeToEvents: function() {
            de.bild.events.subscribe("renewGeoLoc", function() {
                DI.returnGeoData(function() {}, true);
            });
            de.bild.events.subscribe("newBWEntry", function(data) {
                DI.saveBandWidth(data);
            });
            de.bild.events.subscribe("getDeviceInfo", function(namespace) {
                de.bild.events.publish("publishDeviceInfo" + "." + namespace, [ DI.getData() ]);
            });
        },
        retrieveInfos: function() {
            var obj = this;
            if (!obj.featureToggles || obj.featureToggles && obj.featureToggles.gpsEnabled) {
                if (location.host.indexOf(de.bild.env.hostname) > -1 && window.location.hash.toLowerCase().indexOf("nogeo") === -1) {
                    obj.getGeoPos();
                }
            }
            obj.getUAObject();
            obj.getOnPortalStatus();
        },
        getGeoPos: function(renew) {
            if (this.info && this.info.geolocation) {
                var geo = this.info.geolocation;
                var isValid = geo.status !== "error" && geo.timestamp && geo.timestamp > new Date().getTime() - this.settings.daysValid * 24 * 60 * 60 * 1e3;
                if (isValid && !renew) {
                    return false;
                }
            }
            if (navigator.geolocation) {
                this.retrievingGEO = true;
                this.renewPos = renew;
                navigator.geolocation.getCurrentPosition(this.saveGeoData, this.saveGeoData);
            }
            return false;
        },
        returnRegionData: function(coords, cb) {
            require([ "geoRegionResolver" ], function(RegionResolver) {
                var regionResolver = new RegionResolver();
                var regionData = regionResolver.getRegionData(coords);
                if (typeof cb === "function") {
                    cb(regionData);
                }
            });
        },
        saveGeoData: function(data) {
            DI.retrievingGEO = false;
            var obj = {};
            if (data && data.coords) {
                obj = $.extend({}, data);
                obj.status = "success";
                obj.coords = $.extend({}, data.coords);
                DI.returnRegionData(obj.coords, function(regionData) {
                    obj.region = regionData.region;
                    obj.contentRegion = regionData.contentRegion;
                    obj.regionDisplayName = regionData.regionDisplayName;
                    DI.saveData({
                        geolocation: obj
                    });
                    DI.executeStack();
                });
                DI.renewPos = null;
                return false;
            } else if (data.code) {
                if (data.code !== 1) {
                    obj = {
                        status: "error",
                        timestamp: new Date().getTime()
                    };
                    DI.saveData({
                        geolocation: obj
                    });
                    if (DI.renewPos) {
                        alert(DI.settings.localisationFailed);
                    }
                } else {
                    DI.saveData({
                        geolocation: {
                            status: "not permitted",
                            timestamp: new Date().getTime()
                        }
                    });
                    if (DI.renewPos) {
                        alert(DI.settings.localisationPemitted);
                    }
                    DI.removeAllGeoButtons();
                }
            }
            DI.renewPos = null;
            DI.executeStack();
            return false;
        },
        getOnPortalStatus: function() {
            var isValid;
            if (this.info && this.info.onPortal) {
                var onPortalStatus = this.info.onPortal !== undefined;
                isValid = this.info.onPortal.timestamp && this.info.onPortal.timestamp > new Date().getTime() - this.settings.hoursValid * 60 * 60 * 1e3;
            }
            if (!isValid) {
                this.retrieveOnPortalStatus();
            }
        },
        retrieveOnPortalStatus: function() {
            var self = this;
            self.retrievingOnPortalstatus = true;
            var isOnPortal;
            $.ajax({
                url: "",
                method: "head"
            }).done(function(a, b, xhr) {
                isOnPortal = xhr.getResponseHeader("x-bde-portal") ? self.settings.onPortal : self.settings.offPortal;
            }).always(function() {
                self.retrievingOnPortalstatus = false;
                self.saveData({
                    onPortal: {
                        isOnPortal: isOnPortal,
                        timestamp: new Date().getTime()
                    }
                });
                var stack = self.waitingCallback.onPortalStatus;
                if (stack && typeof stack.stackFunction === "function") {
                    stack.stackFunction.apply(self, [ stack.cbFunction ]);
                    self.waitingCallback.onPortalStatus = undefined;
                }
            });
        },
        returnOnPortalStatus: function(cb) {
            if (this.retrievingOnPortalstatus) {
                if (typeof cb === "function") {
                    this.stackCallback("onPortalStatus", this.returnOnPortalStatus, cb);
                }
            } else {
                var data = this.getData().onPortal;
                if (data) {
                    return data.isOnPortal;
                }
            }
        },
        executeStack: function() {
            var stack = DI.waitingCallback.geolocation;
            if (stack && typeof stack.stackFunction === "function") {
                stack.stackFunction.apply(DI, [ stack.cbFunction ]);
                DI.waitingCallback.geolocation = undefined;
            }
        },
        removeAllGeoButtons: function() {
            $("html").addClass(this.settings.localisation).removeClass("geolocation");
            return false;
        },
        returnGeoData: function(cb, renew) {
            if (this.retrievingGEO) {
                if (typeof cb === "function") {
                    this.stackCallback("geolocation", this.returnGeoData, cb);
                }
                return;
            }
            if (renew && typeof cb === "function") {
                if (typeof cb === "function") {
                    this.stackCallback("geolocation", this.returnGeoData, cb);
                }
                this.getGeoPos(true);
                return null;
            } else {
                var obj = {};
                var data = this.getData().geolocation;
                if (data && data.coords) {
                    obj.latitude = data.coords.latitude;
                    obj.longitude = data.coords.longitude;
                    obj.contentRegion = data.contentRegion;
                    obj.region = data.region;
                    obj.regionDisplayName = data.regionDisplayName;
                }
                if (typeof cb === "function") {
                    cb(obj);
                }
                return obj;
            }
        },
        getUAObject: function() {
            var data = {};
            data.uaString = navigator.userAgent;
            if (data.uaString.indexOf("Android") !== -1) {
                data.device = "android";
                data.version = parseFloat(data.uaString.slice(data.uaString.indexOf("Android") + 8));
            } else if (data.uaString.toLowerCase().indexOf("iphone") !== -1) {
                data.device = "iphone";
            } else if (data.uaString.toLowerCase().indexOf("ipad") !== -1) {
                data.device = "ipad";
            } else {
                data.device = "unkown";
            }
            data.os = this.returnOS();
            this.saveData({
                userAgent: data
            });
            return true;
        },
        returnOS: function() {
            var userAgent = navigator.userAgent;
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                return "ios";
            } else if (userAgent.match(/Android/i)) {
                return "android";
            } else if (userAgent.match(/BlackBerry/i)) {
                return "blackberry_os";
            } else if (userAgent.match(/Windows Phone/i)) {
                return "windows_phone";
            } else {
                var osName = "unknown";
                if (navigator.appVersion.indexOf("Win") != -1) osName = "windows";
                if (navigator.appVersion.indexOf("Mac") != -1) osName = "macos";
                if (navigator.appVersion.indexOf("X11") != -1) osName = "unix";
                if (navigator.appVersion.indexOf("Linux") != -1) osName = "linux";
                return osName;
            }
        },
        getDeviceInfoString: function() {
            var obj = this;
            var targetInfoString;
            var gps = "nein", latitude = "", longitude = "", region = "", bwCat = "";
            var geoData = obj.returnGeoData();
            var nuggadAdd = "";
            var os = obj.returnOS();
            var height = $(window).height();
            var width = $(window).width();
            var bandwidth = obj.returnBandwidth();
            if (bandwidth) {
                if (bandwidth > obj.settings.bandwidthSlowFastThreshold) {
                    bwCat = "s";
                } else {
                    bwCat = "l";
                }
            }
            if (geoData && typeof geoData.latitude !== "undefined") {
                gps = "ja";
                latitude = geoData.latitude.toString().substring(0, 10);
                longitude = geoData.longitude.toString().substring(0, 10);
                region = geoData.region;
            }
            if (typeof nuggprof !== "undefined" && nuggprof) {
                nuggadAdd = nuggprof;
            } else {
                if (window.localStorage && window.localStorage.nuggprof) {
                    nuggadAdd = window.localStorage.nuggprof;
                }
            }
            targetInfoString = "$gps=" + gps + ";$LA=" + latitude + ";$LG=" + longitude + ";mVendor=" + os + ";mAltvendor=" + os + ";mHeight=" + height + ";mWidth=" + width + ";CNT=" + region + ";dv=" + bwCat + ";" + nuggadAdd;
            return targetInfoString;
        },
        saveBandWidth: function(data) {
            var mbit = data.kbyte * 8 * 1e3 / 1024 / 1024;
            data.mbits = Math.floor(mbit / (data.time / 1e3) * 1e4) / 1e4;
            data.timestamp = new Date().getTime();
            var bandwidth = this.getData().bandwidth || [];
            if (bandwidth instanceof Array) {
                bandwidth.push(data);
            }
            if (bandwidth.length > 20) {
                bandwidth.splice(0, 1);
            }
            this.saveData({
                bandwidth: bandwidth
            });
            var stack = this.waitingCallback.bandwidth;
            if (stack && typeof stack.stackFunction === "function") {
                stack.stackFunction.apply(this, [ stack.cbFunction ]);
                this.waitingCallback.bandwidth = undefined;
            }
            return true;
        },
        returnBandwidth: function(cb) {
            if (this.retrievingBW) {
                if (typeof cb === "function") {
                    this.stackCallback("bandwidth", this.returnBandwidth, cb);
                }
                return false;
            }
            var bandwidth = 0;
            var data = this.getData().bandwidth;
            var measuredData = 0;
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    var entry = data[i];
                    if (entry.timestamp && entry.timestamp > new Date().getTime() - this.settings.bwValid * 60 * 1e3) {
                        bandwidth += entry.mbits;
                        measuredData += 1;
                    } else {
                        data.splice(i, i + 1);
                        i--;
                    }
                }
                this.saveData({
                    bandwidth: data
                });
                bandwidth = measuredData > 0 ? Math.floor(bandwidth / measuredData * 100) / 100 : null;
            }
            if (typeof cb === "function") {
                cb(bandwidth);
            }
            return bandwidth;
        },
        getData: function() {
            var obj;
            if (Modernizr.localstorage) {
                try {
                    obj = $.parseJSON(localStorage.getItem(settings.storageItem));
                } catch (e) {}
            } else {
                obj = this.info;
            }
            return obj || {};
        },
        saveData: function(extendData) {
            var oldData = this.getData();
            this.info = $.extend({}, oldData, extendData);
            try {
                localStorage.setItem(settings.storageItem, JSON.stringify(this.info));
            } catch (e) {}
        },
        removeData: function(key) {
            if (Modernizr.localstorage && key) {
                try {
                    var data = $.parseJSON(localStorage.getItem(settings.storageItem));
                    if (data.key) {
                        data.key = undefined;
                        localStorage.setItem(settings.storageItem, JSON.stringify(data));
                    }
                } catch (e) {}
            }
            return true;
        },
        stackCallback: function(stackname, stackCB, cb) {
            this.waitingCallback[stackname] = {};
            this.waitingCallback[stackname].stackFunction = stackCB;
            this.waitingCallback[stackname].cbFunction = cb;
            return false;
        }
    };
    var DI = new DeviceInfo();
    return {
        getGeoData: function(cb) {
            return DI.returnGeoData(cb);
        },
        renewGeoData: function(cb) {
            DI.returnGeoData(cb, true);
        },
        getBandwidth: function(cb) {
            return DI.returnBandwidth(cb);
        },
        getOS: function() {
            return DI.returnOS();
        },
        getDeviceInfoString: function() {
            return DI.getDeviceInfoString();
        },
        getOnPortalStatus: function() {
            return DI.returnOnPortalStatus();
        }
    };
}(jQuery);
/*de.bild.mobile.sso:34734620.8*/

de.bild.mobile.sso = function($) {
    
    var globals = {
        don: de.bild.env.don,
        home: de.bild.env.home,
        meinKonto: de.bild.env.meinKonto
    };
    var settings = {
        loginUrl: globals.don + "/www/li/",
        comLoginUrl: globals.don + "/www/cli/",
        registerUrl: globals.don + "/www/reg/",
        comRegisterUrl: globals.don + "/www/creg/",
        logoutUrl: globals.don + "/www/lo/",
        loginContainer: "header.mainnav-header",
        ssoDataKey: "de.bild.userData",
        globalLoginGateway: "globalLoginGateway",
        ssoUserInfo: globals.don + "/glg/userDetails",
        keepLoggedInCookie: "donState",
        keepLoggedInValue: "li:true",
        loginSelectors: ".log-in-out, .prohibit-login b",
        conversion: ".conversion",
        isAnimatingClass: "is-animating",
        registerSelectors: ".register, .prohibit-register",
        isNavSlowAnimatingSel: ".is-nav-slow-animating",
        comIdentifier: "community",
        templates: {
            loggedIn: "<p>" + '                   <a href="' + globals.meinKonto + '">Hallo ##USERNAME##</a>' + "               </p>" + '                <button class="myProfile icon icon-uniF007" >Mein Konto</button>' + '                <button class="log-in-out icon icon-uniF011">Logout</button>'
        },
        Events: de.bild.events
    };
    var SSO;
    var Login = function() {
        if (SSO) {
            return SSO;
        }
        SSO = this;
        SSO.settings = settings;
        SSO.globals = globals;
        SSO.init();
        return SSO;
    };
    Login.prototype = {
        init: function() {
            SSO.userData = SSO.getFromSession(SSO.settings.ssoDataKey) || {};
            SSO.user = de.bild.user;
            if (SSO.checkCurrentStatus()) {
                SSO.getUserData(function() {
                    SSO.settings.Events.publish("userDataAvailable", [ SSO.userData ]);
                });
            } else {
                SSO.settings.Events.publish("userDataAvailable", [ SSO.userData ]);
            }
        },
        initContentReady: function() {
            SSO.settings.$body = $("body");
            SSO.loginContainer = $(SSO.settings.loginContainer);
            SSO.renderUserbar();
            SSO.bindUIEvents();
        },
        bindUIEvents: function() {
            SSO.settings.$body.on("click", SSO.settings.loginSelectors, function(e) {
                var $elem = $(this);
                if ($elem.hasClass(SSO.settings.isAnimatingClass)) return;
                if ($elem.closest(SSO.settings.conversion).length > 0) {
                    return true;
                }
                e.preventDefault();
                if (SSO.user.isLoggedIn()) {
                    SSO.logout($elem);
                } else {
                    SSO.login($elem);
                }
            });
            SSO.settings.$body.on("click", SSO.settings.registerSelectors, function() {
                var $elem = $(this);
                if ($elem.hasClass(SSO.settings.isAnimatingClass)) {
                    return;
                }
                SSO.register($elem);
            });
            SSO.settings.$body.on("click", ".myProfile", function() {
                if ($(this).hasClass(SSO.settings.isAnimatingClass)) {
                    return;
                }
                window.location.href = SSO.globals.meinKonto;
            });
            SSO.settings.Events.subscribe("addToUserData", function(data) {
                var newData = SSO.addToSession(SSO.settings.ssoDataKey, data);
                if (newData) {
                    SSO.settings.Events.publish("userDataAvailable", [ newData ]);
                }
            });
            SSO.settings.Events.subscribe("triggerComLogin", function() {
                SSO.login(null, true);
            });
        },
        checkCurrentStatus: function() {
            SSO.userData.loggedIn = SSO.user.isLoggedIn();
            return SSO.userData.loggedIn;
        },
        renderUserbar: function() {
            if (SSO.loginContainer.length !== 0) {
                if (SSO.userData.Name && SSO.userData.Vorname) {
                    var template = SSO.settings.templates.loggedIn;
                    SSO.loginContainer.html(template.replace("##USERNAME##", SSO.userData.Vorname + " " + SSO.userData.Name));
                }
            }
            return false;
        },
        getUserData: function(callback) {
            var data = this.userData;
            var ssoID = SSO.user.getSSOID();
            if (data && data.ssoID == ssoID) {
                callback();
                return false;
            }
            var URL = SSO.settings.ssoUserInfo;
            var token = SSO.getUserDetailsToken();
            if (token) {
                jQuery.ajax({
                    url: URL,
                    data: token,
                    processData: false,
                    dataType: "jsonp",
                    cache: true
                }).done(function(data) {
                    if (data) {
                        SSO.userData.ssoID = ssoID;
                        $.extend(SSO.userData, data);
                        SSO.saveToSession(SSO.settings.ssoDataKey, SSO.userData);
                        return true;
                    } else {
                        console.info("DON liefert keine Daten");
                        return false;
                    }
                }).always(function() {
                    callback();
                });
            }
            return false;
        },
        login: function($elem, comLogin) {
            var location = SSO.dEncode(window.location.href);
            var loginUrl = comLogin || $elem.hasClass(this.settings.comIdentifier) ? SSO.settings.comLoginUrl : SSO.settings.loginUrl;
            SSO.pageRedirect(loginUrl + location);
            return false;
        },
        register: function($elem) {
            var location = SSO.dEncode(window.location.href);
            var registerUrl = !$elem.hasClass(this.settings.comIdentifier) ? SSO.settings.registerUrl : SSO.settings.comRegisterUrl;
            SSO.pageRedirect(registerUrl + location);
            return false;
        },
        logout: function() {
            if (Modernizr.sessionstorage) {
                sessionStorage.removeItem(SSO.settings.ssoDataKey);
            }
            var location = SSO.dEncode(SSO.globals.home);
            SSO.pageRedirect(SSO.settings.logoutUrl + location);
            return false;
        },
        pageRedirect: function(url) {
            window.location.href = url;
        },
        saveToSession: function(key, value) {
            if (!key) {
                key = SSO.settings.ssoDataKey;
            }
            if (Modernizr.sessionstorage) {
                value = jQuery.toJSON(value);
                try {
                    sessionStorage.setItem(key, value);
                    return true;
                } catch (err) {
                    console.error("Sessionstorage nicht beschreibbar");
                    return false;
                }
            }
            return false;
        },
        getFromSession: function(data) {
            if (Modernizr.sessionstorage) {
                data = sessionStorage.getItem(data);
                if (data) {
                    return JSON.parse(data);
                }
            }
        },
        addToSession: function(key, value) {
            if (!key) {
                key = SSO.settings.ssoDataKey;
            }
            if (Modernizr.sessionstorage) {
                var data = sessionStorage.getItem(key);
                if (data) {
                    data = JSON.parse(data);
                    value = $.extend(data, value);
                }
                SSO.saveToSession(key, value);
                return value;
            } else {
                return false;
            }
        },
        getUserDetailsToken: function() {
            var token = $.cookie(SSO.settings.globalLoginGateway);
            if (!token) {
                return false;
            }
            token = token.replace(/"/g, "");
            token = encodeURIComponent(token);
            token = "token=" + token;
            return token;
        },
        dEncode: function(url) {
            return encodeURIComponent(encodeURIComponent(url));
        },
        globalCookie: function(key, value) {
            var host = window.location.host;
            host = host.replace(new RegExp(/\:.*/i), "");
            host = host.match(/([A-Z0-9]+\.[A-Z0-9]+$)|^[^.]+$/gi)[0];
            return $.cookie(key, value, {
                path: "/",
                domain: host
            });
        }
    };
    new Login();
    return {
        init: function() {
            var recent = SSO.settings.Events.getRecentPublished("userDataAvailable");
            if (recent && recent.length > 0) {
                SSO.initContentReady();
            } else {
                SSO.settings.Events.subscribe("userDataAvailable", function() {
                    SSO.initContentReady();
                });
            }
        },
        getInstance: function() {
            return SSO;
        }
    };
}(jQuery);
/*de.bild.mobile.community:34734598.7*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.community = function() {
    var activeModules = [];
    var Events = de.bild.events;
    var userData;
    var settings = {
        initUser: "/community/ajax/init_user"
    };
    var dependencies = {
        ugc: [ "likes" ],
        profile: [],
        likes: [],
        report: [],
        mostCommentedTeaser: []
    };
    var structuredModules = [ "mostCommentedTeaser" ];
    function comLog(obj) {
        switch (obj.type) {
          case "error":
            console.error(obj.message);
            break;
        }
    }
    function destroy() {
        for (var i = 0; i < activeModules.length; i++) {
            if (typeof activeModules[i].destroy === "function") {
                activeModules[i].destroy();
            } else {
                comLog({
                    type: "error",
                    message: "can not destroy " + activeModules[i].name
                });
            }
        }
    }
    function initSubModule(options, moduleLoader, deferred) {
        if (!moduleLoader) {
            comLog({
                type: "error",
                message: "no Moduleloader available"
            });
            return false;
        }
        options.userData = userData;
        var loadFnc = $.inArray(options.type, structuredModules) === -1 ? moduleLoader.getModule : moduleLoader.getStructuredModule;
        loadFnc(options.type, function(Module) {
            var mod = Module ? new Module(options) : {};
            if (deferred) {
                deferred.resolve(mod);
            }
            mod.name = options.type;
            activeModules.push(mod);
            checkDependencies(options.type, moduleLoader);
        });
        return false;
    }
    function checkDependencies(moduleName, moduleLoader) {
        if (!moduleName || !dependencies[moduleName]) {
            return false;
        }
        for (var i = 0; i < dependencies[moduleName].length; i++) {
            var module = {};
            module.type = dependencies[moduleName][i];
            for (var j = 0; j < activeModules.length; j++) {
                if (activeModules[j].name === module.type) {
                    module = null;
                    break;
                }
            }
            if (module) {
                var deferred = $.Deferred();
                initSubModule(module, moduleLoader, deferred);
            }
        }
    }
    function initCommunitySession(data) {
        if (data.comInitfailed) {
            return false;
        }
        data.initCall = true;
        var url = settings.initUser;
        jQuery.ajax({
            url: url,
            dataType: "json",
            cache: true,
            timeout: 1e4
        }).done(function(response) {
            if (response.status === "success") {
                userData = $.extend({}, data, response);
                saveToSession(userData);
            } else {
                console.error("Fehler im Community System");
            }
        }).fail(function() {
            data.comInitfailed = true;
            saveToSession(data);
            console.error("keine Community Daten abfragbar");
        });
    }
    function saveToSession(data) {
        Events.publish("addToUserData", [ data ]);
    }
    function subscribeToEvents() {
        var published = Events.getRecentPublished("userDataAvailable");
        if (published && published.length !== 0) {
            handleUserDataAvailable(published[0][0]);
        }
        Events.subscribe("userDataAvailable", handleUserDataAvailable);
    }
    function handleUserDataAvailable(data) {
        if (data && !data.initCall && data.CommunityActive === "1") {
            initCommunitySession(data);
        } else {
            userData = data || userData;
        }
    }
    function init(options, moduleLoader, deferred) {
        if (options && options.type) {
            initSubModule(options, moduleLoader, deferred);
        }
        return this;
    }
    subscribeToEvents();
    return {
        init: init,
        destroy: destroy
    };
}();
/*de.bild.mobile.lazyLoader:35166448.10*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.lazyLoader = function($) {
    
    var settings = {
        contentArea: "body",
        imgIdentifier: ".ondemand",
        identifierClass: "ondemand",
        bindingEvent: "scroll.onDemand touchmove.onDemand",
        areaSize: 500,
        margin: Math.max(document.documentElement.clientHeight, window.innerHeight || 300) / 2,
        widths: [ 87, 103, 140, 148, 156, 193, 210, 228, 260, 308, 420, 468, 580, 628, 788 ],
        ratios: [ .75, 1, 1.5, 2 ]
    };
    var Loader;
    function init() {
        if (!Loader) {
            Loader = new LazyLoader();
        }
        return Loader;
    }
    function LazyLoader($context) {
        var obj = this;
        obj.settings = settings;
        obj.callbackTable = [];
        obj.EVENTS = de.bild.events;
        obj.deepestScroll = 0;
        obj.lazyLoaderActive = true;
        obj.settings.widths = obj.settings.widths.sort(function(a, b) {
            return a - b;
        });
        obj.settings.ratios = obj.settings.ratios.sort(function(a, b) {
            return a - b;
        });
        obj.subscribeToCallbacks();
        if ($.isReady) {
            $context = $context ? $context : $(obj.settings.contentArea);
            obj.init($context);
        } else {
            $(function() {
                $context = $context ? $context : $(obj.settings.contentArea);
                obj.init($context);
            });
        }
    }
    LazyLoader.prototype = {
        init: function($context) {
            var obj = this;
            obj.$window = $(window);
            obj.picCont = obj.picCont || [];
            obj.$imgsToLoad = obj.$imgsToLoad || {};
            if ($context.length) {
                obj.$imgsToLoad = $context.find(obj.settings.imgIdentifier);
                if (obj.$imgsToLoad.length) {
                    obj.putElementsIntoAreas(obj.$imgsToLoad);
                    obj.bindEvents();
                    obj.checkCurrent();
                }
            }
            return obj.picCont;
        },
        reinit: function() {
            var obj = this;
            obj.picCont = [];
            obj.$imgsToLoad = {};
            var $context = $(obj.settings.contentArea);
            if ($context.length) {
                obj.$imgsToLoad = $context.find(obj.settings.imgIdentifier);
                if (obj.$imgsToLoad.length) {
                    obj.putElementsIntoAreas(obj.$imgsToLoad);
                    obj.checkCurrent();
                } else {
                    obj.unbindEvents();
                }
            }
        },
        putElementsIntoAreas: function($imgsToLoad) {
            var obj = this;
            $imgsToLoad.each(function() {
                var $this = $(this), top = $this.offset().top, bottom = top + this.offsetHeight, indexFrom = ~~(top / obj.settings.areaSize), indexTo = ~~(bottom / obj.settings.areaSize), i = indexFrom;
                for (;i <= indexTo; i++) {
                    if (typeof obj.picCont[i] === "undefined" || obj.picCont[i] === null) {
                        obj.picCont[i] = [];
                    }
                    obj.picCont[i].push($this);
                }
            });
        },
        bindEvents: function() {
            var obj = this;
            obj.$window.on(obj.settings.bindingEvent, function() {
                obj.checkFastScroll(function() {
                    if (obj.lazyLoaderActive) {
                        obj.checkCurrent();
                    }
                });
                obj.saveScrollDepth();
            });
        },
        saveScrollDepth: function() {
            var obj = this;
            if (obj.lastOffset > obj.deepestScroll) {
                obj.deepestScroll = obj.lastOffset;
                if (obj.deepScrollTimeout) {
                    clearTimeout(obj.deepScrollTimeout);
                }
                obj.deepScrollTimeout = setTimeout(function() {
                    obj.EVENTS.publish("scrolledDeeper", [ obj.deepestScroll ]);
                }, 500);
            }
        },
        checkFastScroll: function(cb) {
            var obj = this;
            obj.prelastOffset = obj.lastOffset || 0;
            obj.lastOffset = obj.$window.scrollTop();
            if (obj.scrollTimeout) {
                clearTimeout(obj.scrollTimeout);
            }
            if (Math.abs(obj.lastOffset - obj.prelastOffset) < 50) {
                cb.apply(obj);
            } else {
                obj.scrollTimeout = setTimeout(function() {
                    obj.checkFastScroll(cb);
                }, 50);
            }
        },
        unbindEvents: function() {
            console.log("lazyload off");
            this.lazyLoaderActive = false;
            this.picCont = [];
        },
        subscribeToCallbacks: function() {
            var obj = this;
            obj.EVENTS.subscribe("addLazyCallback", function(data) {
                obj.callbackTable[data.callbackId] = data.callback;
            });
            obj.EVENTS.subscribe("newContent", function(context) {
                obj.init($(context));
            });
            obj.EVENTS.subscribe("contentVisible", function() {
                obj.checkCurrent();
            });
            obj.EVENTS.subscribe("recallCallBack", function(div) {
                obj.loadCallback(div);
            });
        },
        checkCurrent: function() {
            var obj = this, scrollTop = obj.$window.scrollTop(), wHeight = obj.$window.height(), topPos = scrollTop - obj.settings.margin, bottomPos = scrollTop + wHeight + obj.settings.margin, startInd = Math.floor(topPos / obj.settings.areaSize), endInd = Math.floor(bottomPos / obj.settings.areaSize);
            startInd = startInd < 0 ? 0 : startInd;
            endInd = endInd < 0 ? 0 : endInd;
            for (var i = startInd; i <= endInd; i++) {
                if (typeof obj.picCont[i] !== "undefined" && obj.picCont[i] !== null) {
                    obj.loadItems(i);
                }
            }
        },
        getWidth: function(image) {
            var imagewidth = image.clientWidth, i = this.settings.widths.length, selectedWidth = this.settings.widths[i - 1];
            while (i--) {
                if (imagewidth <= this.settings.widths[i]) {
                    selectedWidth = this.settings.widths[i];
                }
            }
            return selectedWidth;
        },
        getRatio: function() {
            var deviceRatio = window.devicePixelRatio;
            var defined = typeof deviceRatio !== "undefined";
            var i = this.settings.ratios.length;
            var usedRatio = defined && deviceRatio !== 1 ? this.settings.ratios[i - 1] : 1;
            if (defined && deviceRatio !== 1) {
                while (i--) {
                    if (deviceRatio <= this.settings.ratios[i]) {
                        usedRatio = this.settings.ratios[i];
                    }
                }
            }
            return usedRatio;
        },
        loadItems: function(index) {
            var obj = this;
            if (typeof index === "number") {
                var $imgs = $(obj.picCont[index]);
                var executed;
                $imgs.each(function() {
                    var $this = $(this);
                    if ($this.prop("tagName").toUpperCase() === "IMG") {
                        executed = obj.loadImg(this) || executed;
                    } else if ($this.attr("data-callback-id")) {
                        executed = obj.loadCallback(this) || executed;
                    }
                });
                if (executed) {
                    delete obj.picCont[index];
                    for (var j = 0; j < obj.picCont.length; j++) {
                        if (obj.picCont[j] && obj.picCont[j].length !== 0) {
                            obj.reinit();
                            return;
                        }
                    }
                    obj.unbindEvents();
                }
            }
        },
        loadImg: function(img) {
            var obj = this;
            var $img = $(img);
            if (!$(img).is(":visible")) {
                return false;
            }
            var imgSrc = $.trim($img.attr("data-src")) || $.trim($img.attr("data-img-src"));
            var imgWidth = obj.getWidth(img.get(0));
            var multiplier = $img.attr("data-forceretina") ? 2 : obj.getRatio();
            var quality = multiplier > 1 ? "low" : "high";
            imgWidth = Math.floor(imgWidth * multiplier);
            var exp = new RegExp(/w=\d+/);
            var paramString = "w=" + imgWidth + ",q=" + quality;
            var needsErrorHandler = false;
            if (imgSrc.match(/w=\d+/)) {
                imgSrc = imgSrc.replace(exp, paramString);
            } else {
                var exp2 = new RegExp(/.bild.jpg|.bild.gif|.bild.jpeg|.bild.png/);
                exp2 = imgSrc.match(exp2, imgSrc);
                if (exp2 && exp2.length > 0) {
                    needsErrorHandler = true;
                    exp2 = exp2[0];
                    imgSrc = imgSrc.replace(exp2, "," + paramString + exp2);
                }
            }
            if (typeof imgSrc !== "undefined" && imgSrc !== null) {
                $img.attr("src", imgSrc);
                $img.data("width", imgWidth);
                $img.data("quality", quality);
                $img.removeClass(obj.settings.identifierClass);
                if (needsErrorHandler) {
                    obj.addErrorHandler($img);
                }
                $img.on("load", function() {
                    obj.EVENTS.publish("newImageLoaded", [ $img ]);
                });
                if (imgSrc.indexOf("bilder.") !== -1) {
                    obj.calcLoadSpeed($img);
                }
            }
            return true;
        },
        addErrorHandler: function($img) {
            $img.on("error", function() {
                $img.off("error");
                $img.attr("src", $img.attr("data-img-src") || $img.attr("data-src"));
            });
        },
        calcLoadSpeed: function($img) {
            var obj = this;
            var hasPerformance = window.performance !== undefined && typeof window.performance.getEntriesByName === "function";
            if (!hasPerformance) {
                $img.attr("data-startLoading", new Date().getTime());
            }
            $img.on("load", function() {
                var time;
                var start;
                var end;
                if (!hasPerformance) {
                    start = $img.attr("data-startLoading");
                    end = new Date().getTime();
                    time = end - start;
                } else {
                    try {
                        time = performance.getEntriesByName($img.attr("src"))[0].duration;
                    } catch (err) {
                        start = $img.attr("data-startLoading");
                        if (!start) {
                            return;
                        }
                        end = new Date().getTime();
                        time = end - start;
                    }
                }
                if (time) {
                    if (time < 50) {
                        return;
                    }
                    var width = $img[0].naturalWidth;
                    var height = $img[0].naturalHeight;
                    var pixel = width * height;
                    var bwObj = {};
                    bwObj.kbyte = Math.floor(pixel / 3500);
                    bwObj.time = time;
                    obj.EVENTS.publish("newBWEntry", [ bwObj ]);
                }
            });
        },
        loadCallback: function(div) {
            var $div = $(div);
            var obj = this;
            var callbackId = $.trim($div.attr("data-callback-id"));
            if (callbackId in obj.callbackTable) {
                if (typeof obj.callbackTable[callbackId] === "function") {
                    try {
                        obj.callbackTable[callbackId].apply();
                    } catch (e) {
                        console.error("Lazyloaded function can not be excuted");
                    }
                }
            }
            $div.removeClass(this.settings.identifierClass);
            return true;
        }
    };
    return {
        init: function() {
            return init();
        },
        addContent: function($context) {
            return Loader.init($context);
        }
    };
}(jQuery);

de.bild.events.publish("initModule", [ "lazyLoader" ]);
/*de.bild.mobile.breakingnews:34734600.6*/

de.bild.mobile.breakingnews = function($) {
    var layout = $("html").attr("data-layout");
    var settings = {
        Events: de.bild.events,
        template: '<div class="holder"><h2>Breaking <em>News</em></h2><button class="btn-close"></button><div class="breaking-txt"><p>%CONTENT%</p></div></div>',
        sharingHTML: '<div class="share"><button class="share-fb"></button> <button class="share-twitter"></button></div>',
        closeBtn: ".btn-close",
        storageKey: "de.bild.breakingNews",
        deactivateMins: 30,
        useSharing: layout && layout.toUpperCase() === "L"
    };
    var BreakingNews = function(options) {
        this.options = options;
        this.settings = settings;
        this.$el = $(options.el);
        this.init();
    };
    BreakingNews.prototype = {
        init: function() {
            var self = this;
            if (self.isDisabled()) {
                return;
            }
            self.loadData().done(function(html) {
                self.appendData(html);
                self.bindUIEvents();
            });
        },
        bindUIEvents: function() {
            var self = this;
            self.$el.on("click", "a", function() {
                if (!window.webtrekk) {
                    var prefix = window.location.protocol + "//" + window.location.hostname;
                    var url = "breaking-news" + ($(this).attr("href") || "");
                    url = url.replace(prefix, "");
                    self.settings.Events.publish("de.bild.mobile.clickTracking", [ false, {
                        webtrekk: {
                            contentId: window.webtrekk.contentId,
                            linkId: "breaking-news",
                            customClickParameter: {
                                22: url
                            },
                            trackOnNextPage: true
                        }
                    } ]);
                }
            });
            self.$el.on("click", self.settings.closeBtn, function() {
                self.close();
                self.saveStatus();
            });
        },
        loadData: function() {
            return $.ajax({
                url: this.options.url,
                dataType: "json"
            });
        },
        appendData: function(json) {
            var content;
            if (json.url) {
                content = '<a href="' + json.url + '">' + json.text + "</a>";
            } else {
                content = json.text;
            }
            var html = this.settings.template.replace("%CONTENT%", content);
            this.$el.html(html);
            if (this.settings.useSharing) {
                this.$el.find(this.settings.closeBtn).after(this.settings.sharingHTML);
                this.settings.Events.publish("initModule", [ "sharingBar", {
                    el: this.$el,
                    sharingUrl: json.url,
                    additionalTrackingInfo: "breaking-news",
                    text: json.text && json.text ? json.text : ""
                } ]);
            }
        },
        close: function() {
            this.$el.remove();
        },
        saveStatus: function() {
            if (Modernizr.sessionstorage) {
                try {
                    sessionStorage.setItem(this.settings.storageKey, new Date().getTime());
                } catch (e) {
                    console.log(e);
                }
            }
        },
        isDisabled: function() {
            if (Modernizr.sessionstorage) {
                var key = sessionStorage.getItem(this.settings.storageKey);
                return key && parseInt(key) > new Date().getTime() - this.settings.deactivateMins * 1e3 * 60;
            }
            return false;
        }
    };
    return {
        init: function(data) {
            return new BreakingNews(data);
        }
    };
}(jQuery);
/*de.bild.mobile.clickTracking:35166452.13*/

de.bild.mobile.clickTracking = function($, Events) {
    var settings = {
        trackingSubscribe: "de.bild.mobile.clickTracking",
        ivw2Subscribe: "track/ivw2/count",
        nuggadSubscribe: "insert/NuggAd/async",
        optimizelySubscribe: "initOptimizely",
        remHeatMapSubscribe: "initRemHeatMap",
        addScript: "appendScriptToHead",
        externalLinks: ".externalLink",
        localStorageName: "de.bild.clickTracking.trackStack",
        isPaying: de.bild.user ? de.bild.user.getTrackingInfo() : false,
        deepestScroll: 0,
        deepestScrollEvent: "scrolledDeeper",
        cmsConfigLoaded: "cmsKonfig/loaded",
        footerTracking: "footerAvailable",
        articleSelector: "article .txt",
        stageSelector: "#innerWrapper .faux"
    };
    function subscribeToTrackingEvents() {
        Events.subscribe(settings.trackingSubscribe, doTracking);
        Events.subscribe(settings.ivw2Subscribe, function(iam_data) {
            trackIVW(iam_data);
        });
        Events.subscribe(settings.nuggadSubscribe, function(nuggscr, n) {
            n.parentNode.insertBefore(nuggscr, n);
        });
        Events.subscribe(settings.optimizelySubscribe, function(url) {
            addScriptToHead(url);
        });
        Events.subscribe(settings.remHeatMapSubscribe, function(url) {
            addScriptToHead(url, function() {
                $(function() {
                    enableClickTracking("mobile");
                });
            });
        });
        Events.subscribe(settings.addScript, function(url, cb) {
            addScriptToHead(url, cb);
        });
        Events.subscribe(settings.deepestScrollEvent, function(px) {
            settings.deepestScroll = px;
        });
        Events.subscribe(settings.footerTracking, function(elem) {
            var navi = $("#" + elem);
            navi.on("click", "a", function(e) {
                doTracking(false, {
                    webtrekk: {
                        trackOnNextPage: true,
                        linkId: "navi",
                        customClickParameter: {
                            11: "nav/footer/" + $(e.target).text() + "/##CONTENTID##"
                        }
                    }
                });
            });
        });
        de.bild.events.subscribe(settings.cmsConfigLoaded, function(konfig) {
            if (konfig.system.zaehlpixel_webtrekk_scrollingtiefe_status !== "off" && konfig.hierarchical.zaehlpixel_webtrekk_scrollingtiefe_status === "on") {
                trackScrollDepth();
            }
        });
    }
    function unsubscribeClickTracking() {
        Events.unsubscribe(settings.trackingSubscribe, doTracking);
    }
    function doTracking(isPaid, additionalData) {
        if (!additionalData) {
            trackIVW(null, isPaid);
            trackWebtrekk(isPaid);
            trackREM(isPaid);
        } else {
            if (additionalData.ivw) {
                trackIVW(null, isPaid, additionalData.ivw);
            }
            if (additionalData.webtrekk) {
                trackWebtrekk(isPaid, additionalData.webtrekk);
            }
            if (additionalData.rem) {
                trackREM(isPaid, additionalData.rem);
            }
        }
    }
    function trackWebtrekk(isPaid, additionalData) {
        if (window.wt) {
            if (!additionalData) {
                wt.customParameter[9] = isPaid ? "premium" : "frei";
                wt.customParameter[10] = isPaid && settings.isPaying !== "kaeufer" ? "gesperrt" : "frei";
                wt.sendinfo();
            } else {
                if (additionalData.customClickParameter) {
                    for (var i in additionalData.customClickParameter) {
                        if (additionalData.customClickParameter.hasOwnProperty(i) && webtrekkConfig) {
                            if (typeof additionalData.customClickParameter[i] === "string") {
                                additionalData.customClickParameter[i] = additionalData.customClickParameter[i].replace("##CONTENTID##", webtrekkConfig.contentId);
                            }
                        }
                    }
                }
                if (additionalData.trackOnNextPage) {
                    additionalData.trackOnNextPage = undefined;
                    saveTrackingRequest(isPaid, {
                        webtrekk: additionalData
                    });
                    return false;
                }
                wt.sendinfo(additionalData);
            }
        }
    }
    function trackIVW(iam_data, isPaid, additionalData) {
        if (iam_data) {
            settings.iam_data = iam_data;
        }
        if (typeof iom !== "undefined" && typeof iom.c === "function") {
            var tiam = iam_data || settings.iam_data;
            if (isPaid !== undefined) {
                var t = tiam.cp.substr(0, settings.iam_data.cp.length - 2);
                t += isPaid ? "1" : "2";
                t += tiam.cp.substr(settings.iam_data.cp.length - 1, settings.iam_data.cp.length);
                tiam.cp = t;
            }
            if (additionalData) {
                if (additionalData.iam_data) {
                    for (var i in additionalData.iam_data) {
                        if (additionalData.iam_data.hasOwnProperty(i)) {
                            tiam[i] = additionalData.iam_data[i];
                        }
                    }
                }
            }
            iom.c(tiam, 1);
        }
    }
    function trackREM(isPaid) {
        if (window.triggerRemRequest) {
            triggerRemRequest();
            if (isPaid) {
                rem.accesstype.value = "paid";
                triggerREMRequest();
                rem.accesstype.value = "free";
            }
        }
    }
    function bindOnExternalLinks() {
        $("body").on("click", settings.externalLinks, function() {
            var $this = $(this);
            if (typeof wt3_send_timeparams === "function") {
                var ce1 = $this.attr("data-ce1");
                var ce2 = window.location.href;
                var ce3 = $this.attr("href");
                var data = "ce1=" + ce1 + ";ce2=" + ce2 + ";ce3=" + ce3;
                wt3_send_timeparams(data, 0);
            }
        });
    }
    function saveTrackingRequest(isPaid, additionalData) {
        if (Modernizr && Modernizr.localstorage) {
            var item = {};
            item.isPaid = isPaid;
            item.additionalData = additionalData;
            var trackStack = $.parseJSON(localStorage.getItem(settings.localStorageName)) || [];
            trackStack.push(item);
            try {
                localStorage.setItem(settings.localStorageName, JSON.stringify(trackStack));
            } catch (e) {
                console.warn("can not store track request in localstorage");
            }
        } else {
            console.warn("can not store track request in localstorage");
        }
    }
    function doStoredTrackingRequests() {
        if (!Modernizr || !Modernizr.localstorage) {
            return false;
        }
        var trackStack = localStorage.getItem(settings.localStorageName);
        if (trackStack) {
            try {
                trackStack = $.parseJSON(trackStack);
            } catch (e) {
                console.warn("can not execute track request in localstorage");
                return false;
            }
            for (var i = 0; i < trackStack.length; i++) {
                var item = trackStack[i];
                doTracking(item.isPaid, item.additionalData);
            }
            localStorage.removeItem(settings.localStorageName);
        }
    }
    function addScriptToHead(url, cb) {
        var script = document.createElement("script");
        script.src = url;
        script.async = "async";
        document.getElementsByTagName("head")[0].appendChild(script);
        if (typeof cb === "function") {
            script.onload = function() {
                cb();
            };
        }
    }
    function trackScrollDepth() {
        $(window).on("beforeunload", function() {
            if (settings.deepestScroll >= 0) {
                var content = $(settings.articleSelector).first();
                var contentHeight = 0;
                if (content.length !== 0) {
                    contentHeight = content.height() + content.offset().top;
                } else {
                    content = $(settings.stageSelector);
                    content.each(function() {
                        contentHeight += $(this).height();
                    });
                }
                var w = Math.floor(contentHeight);
                var x = Math.floor(settings.deepestScroll);
                var y = Math.floor(x + $(window).height());
                var z = Math.floor($("body").height());
                trackWebtrekk(false, {
                    linkId: "scroll",
                    customClickParameter: {
                        7: x + "",
                        15: "##CONTENTID##",
                        19: Math.floor(y / z * 100) + "",
                        20: w + "",
                        21: z + ""
                    },
                    trackOnNextPage: true
                });
            }
        });
    }
    function bindRessortHeaderTracking() {
        $("#innerWrapper").on("click", "section header.group-header a, .widget header.group-header a", function(e) {
            var $target = $(e.currentTarget);
            if ($target.attr("href") !== "#") {
                if (de.bild.events) {
                    de.bild.events.publish("de.bild.mobile.clickTracking", [ false, {
                        webtrekk: {
                            trackOnNextPage: true,
                            linkId: "rubrik",
                            customClickParameter: {
                                11: "rubrik/" + $target.text() + "/##CONTENTID##"
                            }
                        }
                    } ]);
                }
            }
        });
    }
    function bandWithTracking() {
        if (window.performance && window.performance.timing) {
            var time = performance.timing.responseEnd - performance.timing.responseStart;
            var cluster = 50;
            var maxkbit = 3e4;
            var maxTime = 15e3;
            var loadTime;
            var loadTimeClustered;
            if (time > 2) {
                var xhr = $.ajax({
                    mehtod: "head"
                }).done(function() {
                    var byte = xhr.getResponseHeader("Content-Length");
                    var byteTime = byte / time;
                    var bandWidth = byteTime * 8 / 1024 / 1024 * 1e3;
                    bandWidth = Math.floor(bandWidth * 100) / 100;
                    var bandWithKbit = bandWidth * 1024;
                    var bandWidthClustered = Math.floor(bandWithKbit / cluster) * cluster;
                    bandWidthClustered = bandWidthClustered > maxkbit ? maxkbit : bandWidthClustered;
                    $(function() {
                        loadTime = performance.timing.domInteractive - performance.timing.navigationStart;
                        loadTimeClustered = Math.floor(loadTime / cluster) * cluster;
                        loadTimeClustered = loadTimeClustered > maxTime ? maxTime : loadTimeClustered;
                        de.bild.events.publish("de.bild.mobile.clickTracking", [ false, {
                            webtrekk: {
                                linkId: "speed",
                                customClickParameter: {
                                    14: "" + bandWidthClustered,
                                    15: "##CONTENTID##",
                                    16: "" + loadTimeClustered
                                }
                            }
                        } ]);
                    });
                });
            } else {
                $(function() {
                    loadTime = performance.timing.domInteractive - performance.timing.navigationStart;
                    loadTimeClustered = Math.floor(loadTime / cluster) * cluster;
                    loadTimeClustered = loadTimeClustered > maxTime ? maxTime : loadTimeClustered;
                    de.bild.events.publish("de.bild.mobile.clickTracking", [ false, {
                        webtrekk: {
                            linkId: "speed",
                            customClickParameter: {
                                14: "cache",
                                15: "##CONTENTID##",
                                16: "" + loadTimeClustered
                            }
                        }
                    } ]);
                });
            }
        }
    }
    function init() {
        subscribeToTrackingEvents();
        $(document).ready(function() {
            doStoredTrackingRequests();
            bindOnExternalLinks();
            bindRessortHeaderTracking();
        });
    }
    init();
    return {
        doTracking: doTracking,
        unsubscribeClickTracking: unsubscribeClickTracking
    };
}(jQuery, de.bild.events);
/*de.bild.mobile.advertising:35166458.11*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.advertising = function(EVENTS) {
    var sync_ads = [];
    function initGlobalSasCall() {
        window.sas_loadHandler = function(r) {
            de.bild.events.publish("sasLoadAdCall", [ r ]);
        };
    }
    function loadAdSynchronous() {
        var ad = sync_ads[0];
        if (ad === undefined || ad.loadInProgress) {
            return;
        }
        ad.loadInProgress = true;
        window.sasmobile(ad.pageid, ad.formatid, ad.target);
    }
    de.bild.events.subscribe("sasLoadAdCall", function(r) {
        var ad = sync_ads[0];
        if (ad !== undefined && ad.formatid == r.id) {
            sync_ads.shift();
            loadAdSynchronous();
        }
    });
    function reloadYieldBanner(bannerId) {
        var ifrm = document.getElementById(bannerId);
        var $ifrm = $(ifrm);
        if (ifrm) {
            var script = $ifrm.attr("data-yield-src");
            var publisher = $ifrm.attr("data-yield-publisher-id");
            var size = $ifrm.attr("data-yield-size");
            var iframeContent;
            if (script && publisher && size) {
                size = size.split(",");
                if (size.length === 2) {
                    var iframH = parseInt(size[1], 10);
                    var iframW = parseInt(size[0], 10);
                    $ifrm.css({
                        width: iframW,
                        height: iframH
                    });
                }
                iframeContent = '<script src="' + script + '">googletag.pubads().definePassback("' + publisher + '", [' + size + "]).display();</script>";
            }
            ifrm = ifrm.contentWindow ? ifrm.contentWindow : ifrm.contentDocument.document ? ifrm.contentDocument.document : ifrm.contentDocument;
            ifrm.document.open();
            ifrm.document.write(iframeContent);
            ifrm.document.close();
        }
    }
    var lastYieldBanner;
    function reloadYieldBannerV2(bannerId) {
        bannerId = bannerId ? bannerId : lastYieldBanner;
        var ifrm = document.getElementById(bannerId);
        var $ifrm = $(ifrm);
        if (ifrm) {
            lastYieldBanner = bannerId;
            var script = $ifrm.attr("data-yield-src");
            var publisher = $ifrm.attr("data-yield-channel-id");
            var size = $ifrm.attr("data-yield-size");
            var iframH;
            var iframW;
            var iframeContent;
            if (script && publisher && size) {
                size = size.split(",");
                if (size.length === 2) {
                    iframH = parseInt(size[1], 10);
                    iframW = parseInt(size[0], 10);
                    $ifrm.css({
                        width: iframW,
                        height: iframH
                    });
                }
                iframeContent = "<style>body{margin:0;overflow:hidden} *{background-color:#FFF}</style>" + '<script src="' + script + publisher + "/" + iframW + "x" + iframH + "?ts=" + Math.round(Math.random() * 1e12) + '"></script>';
            }
            ifrm = ifrm.contentWindow ? ifrm.contentWindow : ifrm.contentDocument.document ? ifrm.contentDocument.document : ifrm.contentDocument;
            ifrm.document.open();
            ifrm.document.write(iframeContent);
            ifrm.document.close();
        }
    }
    function reloadSmartBanner(bannerId) {
        if (typeof sas_tmstp !== "undefined") {
            sas_tmstp = Math.ceil(Math.random() * 1e9);
        }
        if (!bannerId) {
            bannerId = "5720";
        }
        var $banner = $("#sas_" + bannerId);
        if ($banner.length > 0) {
            $banner.css("height", $banner.height());
            $banner.empty();
            sas_formatid = 5720;
            sasmobile(sas_pageid, sas_formatid, sas_target);
        }
    }
    function reloadPartnerAds($div) {
        if (typeof sas_tmstp !== "undefined") {
            sas_tmstp = Math.ceil(Math.random() * 1e9);
        }
        if ($div.length > 0) {
            $div.empty();
            $div.addClass("ondemand");
            de.bild.events.publish("newContent", [ $div.parent() ]);
        }
    }
    function subscribeToEvents() {
        EVENTS.subscribe("loadYield", function(id) {
            reloadYieldBanner(id);
        });
        EVENTS.subscribe("loadYield_V2", function(id) {
            reloadYieldBannerV2(id);
        });
        EVENTS.subscribe("loadBanner", function(id) {
            reloadSmartBanner(id);
        });
        EVENTS.subscribe("reloadPartner", function(div) {
            reloadPartnerAds(div);
        });
        EVENTS.subscribe("loadMobAdSync", function(sas_pageid, sas_formatid, sas_target) {
            sync_ads.push({
                loadInProgress: false,
                pageid: sas_pageid,
                formatid: sas_formatid,
                target: sas_target
            });
            loadAdSynchronous();
        });
    }
    function init() {
        subscribeToEvents();
        initGlobalSasCall();
    }
    init();
    return {};
}(de.bild.events);
/*de.bild.mobile.abTesting.experiments:38627088.24*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.abTesting = de.bild.mobile.abTesting || {};

de.bild.mobile.abTesting.experiments = {
    commentShortenener: {
        active: true,
        method : 'initModule',
        type : 'community',
        props: [0.8,0.2],
        once : function(variant){
        },
        actions : {
            A : function(){
                    de.bild.getAdLevel = function(prefix, sep, postfix) {
                        if (!de.bild.adlevel) {
                            console.error("No AdLevel defined.");
                            prefix += "a";
                            return prefix + sep + postfix;
                        }
                        if (de.bild.user && de.bild.user.userHasClub) {
                            jQuery.each(de.bild.adlevel, function(i, n) {
                                if (de.bild.user.userHasClub(i)) {
                                    prefix = n;
                                }
                            });
                        }
                        prefix += "a";
                        return prefix + sep + postfix;
                    };
            },
            B : function(){
                de.bild.getAdLevel = function(prefix, sep, postfix) {
                    if (!de.bild.adlevel) {
                        console.error("No AdLevel defined.");
                        prefix += "b";
                        return prefix + sep + postfix;
                    }
                    if (de.bild.user && de.bild.user.userHasClub) {
                        jQuery.each(de.bild.adlevel, function(i, n) {
                            if (de.bild.user.userHasClub(i)) {
                                prefix = n;
                            }
                        });
                    }
                    prefix += "b";
                    return prefix + sep + postfix;
                };
                    de.bild.events.subscribe("community.reInitLikes", function() {
                        $('.board[id*=ugc-]').find('.comment-list>.comment:gt(0)').remove();
                    });
                }
            }
    },
 sliderTeaserBuli : {
        active : true,
        props : [0.01,0.99],
        method: "subscribe",
            subscribe: "sliderTeaserBuli",
        once : function(variante){
        },
        actions : {
            A: function(){
                //only do tracking
                var script;
                if(document.currentScript){
                    script = $(document.currentScript);
                }else{
                    script = $('script').last();
                }
                var section = script.closest('section');
                var slider = section.find('.overflow-container');
                setTimeout(function(){
                    section.find('.tsr7').first().removeClass('tsr7').addClass('tsr4');
                },10);
                slider.find('.overflow-gallery_item>a').on('click',function(){
                    var $this = $(this);
                    var index = $this.parent().index()+1;
                    var allChilds = $this.closest('ul').find('>li').length;
                    de.bild.events.publish('de.bild.mobile.clickTracking',[false,
                        {
                            webtrekk:{linkId:"perso-block",customClickParameter:
                            {
                                5  : 'click/persoblock/BuLiBlock/'+index+'/'+allChilds,
                                18 : $this.attr('href')
                            },
                                trackOnNextPage : true
                            }
                        }]);
                });
                de.bild.events.publish('initModule',['elemInView',{
                    callback : function(){
                        de.bild.events.publish('de.bild.mobile.clickTracking',[false,{webtrekk:{linkId:"perso-block",customClickParameter:{5:'view/persoblock/BuLiBlock'}}}]);
                    },
                    $elem : slider,
                    options : {
                    percentage: 50
                    }
                }]);
            },
            B : function(){
                var script;
                if(document.currentScript){
                    script = $(document.currentScript);
                }else{
                    script = $('script').last();
                }
                var section = script.closest('section');
                section.find('.overflow-container').remove();
                setTimeout(function(){
                    section.find('.tsr7').first().removeClass('tsr7').addClass('tsr4');
                },10);
            }
        }
    }

};
/*de.bild.mobile.abTesting:38627086.4*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.abTesting = function() {
    var settings = {
        localStorageName: "abTesting",
        Events: de.bild.events,
        webtrekkParam: [],
        charMap: [ "A", "B", "C", "D", "E", "F", "G" ]
    };
    function registerExperiment(exp, name) {
        if (!Modernizr.localstorage) {
            return false;
        }
        var obj = localStorage.getItem(settings.localStorageName);
        obj = obj ? $.parseJSON(obj) : {};
        if (obj[name]) {
            settings.webtrekkParam.push(name + "/" + obj[name].variante);
            initTest(exp, name, obj[name].variante);
        } else {
            addNewTest(exp, name);
        }
    }
    function addNewTest(exp, Expname) {
        var random = Math.random();
        var variante;
        var offset = 0;
        for (var i = 0; i < exp.props.length; i++) {
            offset += exp.props[i];
            if (random <= offset) {
                variante = settings.charMap[i];
                break;
            }
        }
        var obj = localStorage.getItem(settings.localStorageName);
        obj = obj ? $.parseJSON(obj) : {};
        obj[Expname] = {};
        obj[Expname].name = Expname;
        obj[Expname].variante = variante;
        localStorage.setItem(settings.localStorageName, JSON.stringify(obj));
        initTest(exp, Expname, variante);
    }
    function initTest(exp, name, variant) {
        if (exp.method === "initModule") {
            settings.Events.subscribe(exp.method, function(type) {
                if (exp.type === type) {
                    exp.actions[variant].call();
                }
            });
        } else if (exp.method === "subscribe") {
            settings.Events.subscribe(exp.subscribe, function(data) {
                exp.actions[variant].call();
            });
        } else if (exp.method === "domReady") {
            $(function() {
                exp.actions[variant].call();
            });
        } else if (exp.method === "instant") {
            exp.actions[variant].call();
        } else if (exp.method === "dirtyCheck") {
            elemAvailable(exp.elem, function() {
                exp.actions[variant].call();
            });
        }
        if (exp.once) {
            exp.once.apply(this, [ variant ]);
        }
    }
    function elemAvailable(querySelector, cb) {
        if (document.readyState !== "complete") {
            if (document.querySelectorAll(querySelector).length !== 0) {
                cb();
                return;
            }
            setTimeout(function() {
                elemAvailable(querySelector, cb);
            }, 50);
            return;
        }
        if (document.querySelectorAll(querySelector).length !== 0) {
            cb();
        }
    }
    function manipulateInitialWebtrekk() {
        var old = de.bild.user.getSSOID;
        de.bild.user.getSSOID = function() {
            wt.customSessionParameter[6] = settings.webtrekkParam.join("/");
            return old();
        };
    }
    function init() {
        for (var name in de.bild.mobile.abTesting.experiments) {
            if (de.bild.mobile.abTesting.experiments.hasOwnProperty(name)) {
                var experiment = de.bild.mobile.abTesting.experiments[name];
                if (experiment.active && (experiment.layouts && $.inArray($("html").attr("data-layout"), experiment.layouts) !== -1 || !experiment.layouts) && (!experiment.location || experiment.location && window.location.href.indexOf(experiment.location) !== -1)) {
                    registerExperiment(experiment, name);
                }
            }
            manipulateInitialWebtrekk();
        }
        return de.bild.mobile.abTesting.experiments;
    }
    return init();
}();
/*Tracking:34734666.23*/


/*de.xoz.videoplayer:35439790.3*/

/*!
 * @ignore
 * 
 * !!!!!! Linked CMS-Content !!!!!!!
 */
//jQuery(document).ready(function() {
    window.com = window.com || {}, window.com.xoz = window.com.xoz || {}, window.com.xoz.config = {
        baseUrl: "",
        layouts: {
            bild: "xoz/videoplayer/modules/controls/Bild",
            bundesliga: "xoz/videoplayer/modules/controls/Bundesliga",
            widget: "xoz/videoplayer/modules/controls/Widget"
        },
        css_files: {
            widget: "css/player_widget.css"
        },
        labels: {
            error: {
                
top_line: "Ein Fehler ist aufgetreten.",
                bottom_line: "Bitte laden Sie das Video neu.<br /><br /><i>Hinweis: Bundesliga-Videos sind au\u00dferhalb<br />von Deutschland nicht abspielbar.</i>",
                invalid_top_line: "Dieses Video ist nicht mehr verf\u00fcgbar.",
                invalid_bottom_line: "",
                flash_top_line: "Bitte installieren Sie die neueste Version des Flash Plugins.",
                flash_bottom_line: '<a href="http://get.adobe.com/de/flashplayer/" target="_blank">Zum Download</a>',
                geo_top_line: "DIESES VIDEO IST IN IHRER REGION NICHT VERF\u00dcGBAR.",
                geo_bottom_line: "THIS VIDEO CAN NOT BE STREAMED IN YOUR REGION."
            },
            bundesliga: {
                replay: "Video erneut abspielen"
            }
        },
        defaults: {
            flash_player: {
                url: "flash/BildTvMain.swf",
                no_cache_suffix: ".bild.swf"
            },
            "default": 
{
                layout: "widget",
                log_level: 3,
                enable_social_module: !0,
                enable_ios_autoplay: !0
            },
            use_html5_player: {
                firefox: !0,
                chrome: !0,
                ie: !0,
                ie10: !0,
                safari: !0
            },
            tracking: {
                timeupdate_intervall: 10
            },
            fallback: {
                preview_image: "http://placehold.it/1280x760&text=Fallback"
            },
            flash_detection: {
                enable: !0,
                version: "10.1"
            },
            game_timeline: {
                first_half_start_position: 0,
                first_half_end_position: 49,
                first_half_distance: 49,
                first_half_start_time: 0,
                second_half_start_position: 51,
                second_half_end_position: 100,
                second_half_distance: 49,
                
second_half_start_time: 45,
                space_between_events: 4,
                max_events_on_half: 13
            },
            vast_ads: {
                enable: !0,
                timeout: 1e4,
                preroll_format_id: 9446,
                postroll_format_id: 9448
            }
        }
    };
    var de = de || {};
    de.xoz = de.xoz || {}, de.xoz.bdeResourceConfig = {
        videoplayerCore: window.com.xoz.config.baseUrl + "/code/de-xoz-videoplayer-core,35166582.12.bild.js",
        videoplayerBundesliga: window.com.xoz.config.baseUrl + "js_prod/de.xoz.videoplayer.bundesliga.js",
        standaloneTimeline: window.com.xoz.config.baseUrl + "js_prod/de.xoz.standalone_timeline.core.js"
    }, require.bdeHelper = {
        fixJsFilename: function(filepath) {
            return filepath.substr(0, filepath.length - 3);
        }
    }, require.config({
        paths: {
            xozVideoplayerCore: require.bdeHelper.fixJsFilename
(de.xoz.bdeResourceConfig.videoplayerCore),
            xozVideoplayerBundesliga: require.bdeHelper.fixJsFilename(de.xoz.bdeResourceConfig.videoplayerBundesliga),
            xozStandaloneTimeline: require.bdeHelper.fixJsFilename(de.xoz.bdeResourceConfig.standaloneTimeline)
        }
    });
//});;
/* Videoplayer custom events */
jQuery(document).on("xoz/videoplayer/ready", function() {
    com.xoz.videoplayer.registerAll();
});
/*External:35166580.4*/


/*core:34734668.15*/

