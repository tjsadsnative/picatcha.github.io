(function x(f,e,n){function p(b,g){if(!e[b]){if(!f[b]){var d="function"==typeof require&&require;if(!g&&d)return d(b,!0);if(m)return m(b,!0);d=Error("Cannot find module '"+b+"'");throw d.code="MODULE_NOT_FOUND",d;}d=e[b]={a:{}};f[b][0].call(d.a,function(e){var d=f[b][1][e];return p(d?d:e)},d,d.a,x,f,e,n)}return e[b].a}for(var m="function"==typeof require&&require,g=0;g<n.length;g++)p(n[g]);return p})({1:[function(h,f){f.a={w:"vb1fb50/"}},{}],2:[function(h,f){var e=h("../utils"),n=h("../cache_buster");
f.a={k:e.protocol+"asset.pagefair.com",R:e.protocol+"asset.pagefair.net",U:"undefined"!==typeof bm_cache_buster?bm_cache_buster:n.w,e:"",T:"",v:"undefined"!==typeof bm_website_code?bm_website_code:void 0,A:"undefined"!==typeof pf_company_code?pf_company_code:void 0,ha:e.protocol+("undefined"!==typeof bm_static_location?bm_static_location:"pagefair.com"),ka:e.protocol+("undefined"!==typeof bm_website_location?bm_website_location:"pagefair.com"),i:e.protocol+("undefined"!==typeof bm_stats_location?
bm_stats_location:"stats.pagefair.com"),S:e.protocol+("undefined"!==typeof bm_ads_location?bm_ads_location:"adfeed.pagefair.net")}},{"../cache_buster":1,"../utils":6}],3:[function(h,f){var e=h("../utils");f.a=function(n){function f(b,g){b=n.e+b;for(var d=b+"=",m=document.cookie.split(/[;&]/),k="null",h=0;h<m.length;h++){for(var l=m[h];" "===l.charAt(0);)l=l.substring(1,l.length);0===l.indexOf(d)&&(k=l.substring(d.length,l.length))}d=k;"null"==k?d=null:("string"==e.type(k)&&(d=k.replace(/___/g,";")),
void 0!==g&&("ARRAY"==g?d=d.split(","):"INT"==g?d=parseInt(d):"BOOL"==g&&(d="true"==d)));return d}function m(e){e=n.e+e;document.cookie=e+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/"}function g(b,g,d){b=n.e+b;void 0===d&&(d=e.b.F);var f=g;null===g?f="null":(e.isArray(g)&&(f=g.join(",")),"string"===e.type(f)&&(f=f.replace(/;/g,"___")));m(b);document.cookie=b+"="+f+"; expires="+d.toUTCString()+"; path=/"}return{c:f,d:g,aa:m,ea:function(){var b=e.h("bm_dts");null!=b&&(b=e.Q(b),b>e.b.now&&g("bm_donor",
1,b));return null!=f("bm_donor")},I:function(){null!=e.h("bm_opted_out")&&g("bm_opted_out",1,e.b.r);return null!=f("bm_opted_out")}}}},{"../utils":6}],4:[function(h,f){var e=h("../utils");f.a=function(f){function p(a){var e=[],c=document.createElement("DIV");c.className="AdHere";c.style.width="1px";c.style.height="1px";c.style.top="-1000px";c.style.left="-1000px";document.body.appendChild(c);setTimeout(function(){var b=window.getComputedStyle(c).getPropertyValue("-moz-binding");b&&-1!==b.indexOf("abp-elemhidehit")&&
e.push("adblock_plus");c.remove&&c.remove();a({firefox:e})},1E3)}function m(a){if(e.J("1.5.1")){var c={adblock:"chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/img/icon24.png",adblock_plus:"chrome-extension://cfhdojbkjhnklbpkdaibdccddilifddb/block.html",adblock_pro:"chrome-extension://ocifcklkibdehekfnmflempfgjhbedch/components/block/block.html",adblock_premium:"chrome-extension://fndlhnanhedoklpdaacidomdnplcjcpj/img/icon24.png",adblock_super:"chrome-extension://knebimhcckndhiglamoabbnifdkijidd/widgets/block/block.html",
adguard:"chrome-extension://bgnkhhnnamicmpeenaelnjfhikgbkllg/elemhidehit.png",adremover:"chrome-extension://mcefmojpghnaceadnghednjhbmphipkb/img/icon24.png",ublock:"chrome-extension://epcnnfbjfcgphgdmggkamkmgojdagdnn/document-blocked.html"},b=[],d=0,r=function(r,f){jQuery.ajax({url:f,success:function(){b.push(r)},complete:function(){d+=1;d===e.m(c)&&a({chrome:b})}})},f;for(f in c)r(f,c[f])}else a()}function g(){if(e.m(l)===c.length&&!v){v=!0;for(var a=0;a<c.length;a++)if(void 0==l[c[a]])throw"Invalid test in results: "+
c[a];var a=b(),d;a:{for(d=0;d<r.length;d++){var f=l[r[d]];if(void 0===f||1===f){d=!1;break a}}d=!0}f=a&&"NOT_BLOCKING"==s.p||!a&&"BLOCKING"==s.p;k.d("bm_last_load_status",a?"BLOCKING":"NOT_BLOCKING");void 0!==w&&jQuery.isFunction(w)&&w(a,d,l,f)}}function b(){for(var e=0;e<t.length;e++){var c=t[e];if(1===l[c]){for(e=0;e<a.length;e++)if(c=a[e],1===l[c])return!1;return!0}}return!1}function u(a,c,d){var b=document.createElement("DIV");b.id=d;b.className=c;b.style.width="1px";b.style.height="1px";b.style.top=
"-1000px";b.style.left="-1000px";document.body.appendChild(b);c=jQuery("#"+d);d=c.is(":hidden")?1:0;l[a+"_hid_t0"]=e.browser.mozilla?0:d;c.remove();g()}function d(a){function c(a){var b=e.l(l);0<e.q(b,"s_blk")||(b=jQuery("#"+d),l.s_blk=a,b.remove(),g())}var d=e.g(),b=document.createElement("SCRIPT");9>e.H||e.browser.safari||e.browser.mozilla?setTimeout(function(){c(0)},1):(jQuery(b).load(function(){c(0)}),jQuery(b).error(function(){c(1)}));b.id=d;b.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(b);
b.src=a}function q(a,c){function b(c){var f=e.l(l);0<e.q(f,a+"_blk")||(f=jQuery("#"+d),l[a+"_blk"]=c,f.remove(),g())}var d=e.g(),f=document.createElement("IMG");e.browser.safari||e.browser.msie?setTimeout(function(){b(0)},1):(jQuery(f).load(function(){b(0)}),jQuery(f).error(function(){b(1)}));f.id=d;f.style.width="1px";f.style.height="1px";f.style.top="-1000px";f.style.left="-1000px";document.body.appendChild(f);f.src=c}var k=h("../cookies")(f),s={p:k.c("bm_last_load_status")},l={},t=["i_blk","s_blk",
"div_hid_t0"],a=[],r=["wl_i_blk","wl_div_hid_t0"],c=[],v=!1,w;return{O:function(b,g){v&&(v=!1,l={});w=g;c=t.concat(a);!0==b&&(c=c.concat(r),q("wl_i",f.R+"/adimages/textlink-ads.jpg"),u("wl_div","","influads_block"));q("i",f.k+"/adimages/textlink-ads.jpg");d(f.k+"/adimages/adsense.js");u("div","AdHere",e.g())},B:s,$:t,la:r,D:function(a){e.browser.chrome?m(a):e.browser.mozilla?p(a):a()},ba:m,ca:p}}},{"../cookies":3,"../utils":6}],5:[function(h,f){var e=h("../utils");f.a=function(f){function p(b){b=
e.o.parse(b).sample_frequency;b!=g.u&&m.d("bm_sample_frequency",b,e.b.f);e.G("pagefair_exp_id")&&(b=e.h("pagefair_exp_id"),jQuery("body").append('<div id="'+b+'" style="display: none;"></div>'))}var m=h("../cookies")(f),g={K:m.c("bm_monthly_unique"),C:m.c("bm_daily_unique"),u:m.c("bm_sample_frequency","INT")};return{t:function(b,h,d,q,k){d=jQuery.extend({},d);d.is_ab=b?1:0;d.is_wl=h?1:0;!0===m.I()&&(d.opted_out=1);b=g.u;q&&(b=d.p_false=1);q=!1;null===g.K&&(m.d("bm_monthly_unique",!0,e.b.n),q=!0);
q&&(b=d.new_monthly=1);q=!1;null===g.C&&(m.d("bm_daily_unique",!0,e.b.f),q=!0);q&&(b=d.new_daily=1);k&&(d.extensions=e.o.stringify(k),b=1);if(null!==b&&1<b){if(e.random()>1/b)return;d.smp=b}k=f.i+"/stats/page_view_event/a.js";"undefined"!==typeof f.v?k=f.i+"/stats/page_view_event/"+f.v+"/a.js":(d.company_code=f.A,d.domain=window.location.hostname);e.j(k,d,p,!0)},N:function(){0.001>e.random()&&e.j(f.i+"/stats/heartbeat/",{s:1E3})},B:g,X:m}}},{"../cookies":3,"../utils":6}],6:[function(h,f){function e(a){var b=
"?";for(key in a)b+=encodeURIComponent(key)+"="+encodeURIComponent(a[key])+"&";return b.substring(0,b.length-1)}function n(a){a=a.split(".");for(var b=jQuery.fn.jquery.split("."),c=0;c<b.length;c++){b[c]=parseInt(b[c],10);a[c]=parseInt(a[c],10);if(b[c]>a[c])break;if(a[c]>b[c])return!1}return!0}function p(){return Math.random()}function m(a){return a in l}function g(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b}function b(a){return null==a?String(a):s[Object.prototype.toString.call(a)]||
"object"}function u(a){a=a.toLowerCase();a=/(maxthon)[ \/]([\w.]+)/.exec(a)||/(ucbrowser)[ \/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];matched={browser:a[1]||"",version:a[2]||"0"};k={};matched.browser&&(k[matched.browser]=!0,k.version=matched.version);k.V?k.webkit=!0:k.webkit&&(k.safari=!0);return k}var d="https:"==
document.location.protocol?"https://":"http://",q=function(){var a=3,b=document.createElement("div"),c;do b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c=0<b.getElementsByTagName("i").length?!0:!1;while(c);return 4<a?a:void 0}(),k=u(window.navigator.userAgent),s=function(){var a={};jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,c){a["[object "+c+"]"]=c.toLowerCase()});return a}(),l=function(){request_params={};for(var a,b=window.location.href.slice(window.location.href.indexOf("?")+
1).split("&"),c=0;c<b.length;c++)a=b[c].split("="),request_params[a[0]]=a[1];return request_params}(),t=function(){var a={};a.now=new Date;a.f=new Date(a.now.getTime());a.f.setHours(23,59,59,999);a.n=new Date(a.now.getFullYear(),a.now.getMonth()+1,0);a.n.setHours(23,59,59,999);a.P=new Date(a.now.getTime());a.P.setDate(a.now.getDate()+1);a.M=new Date(a.now.getTime());a.M.setDate(a.now.getDate()+7);a.L=new Date(a.now.getTime());a.L.setDate(a.now.getDate()+14);a.r=new Date(a.now.getTime());a.r.setDate(a.now.getDate()+
28);a.F=new Date(2030,11,31);return a}();f.a={protocol:d,H:q,ia:u,browser:k,W:s,type:b,isArray:function(a){return"array"===b(a)},now:function(){return(new Date).getTime()},o:{parse:function(a){return void 0!==JSON?JSON.parse(a):jQuery.parseJSON(a)},stringify:function(a){var b;window.Prototype&&(b=Array.prototype.toJSON,delete Array.prototype.toJSON);a=JSON.stringify(a);window.Prototype&&(Array.prototype.toJSON=b);return a}},q:function(a,b){return jQuery.grep(a,function(a){return a==b}).length},l:g,
da:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(a[c]);return b},m:function(a){return g(a).length},ga:l,G:m,h:function(a){return m(a)?l[a]:null},b:t,Q:function(a){return new Date(1E3*a)},ja:function(a){return encodeURIComponent(a)},g:function(){var a=(new Date).getTime();return"xxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*p())%16|0;a=Math.floor(a/16);return("x"==b?c:c&7|8).toString(16)})},random:p,J:n,Y:e,j:function(a,b,c,d){b=b||{};d=d||!1;c=c||null;var f=!0;if("undefined"!==
typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&n("1.5.2")){var f=!1,g={};g.url=a;g.type="GET";g.data=b;g.processData=!0;g.cache=!1;g.dataType="text";d&&(g.xhrFields={withCredentials:!0});null!=c&&(g.success=c);jQuery.ajax(g)}f&&(null!=c&&(d=("r"+p()).replace(".",""),b.cbfnc=d,window[d]=c),b._=p(),c=document.createElement("SCRIPT"),c.src=a+e(b),c.type="text/javascript",(document.head||document.getElementsByTagName("head")[0]).appendChild(c))},Z:function(){return window.location.href!=
window.parent.location.href?document.referrer:document.location.href},fa:function(){return document.referrer}}},{}],7:[function(h){var f=h("./lib/config-measuring"),e=h("./lib/detection")(f),n=h("./lib/reporting")(f),p=h("./lib/utils");n.N();e.O(!0,function(f,g,b,h){0.001>p.random()?e.D(function(d){n.t(f,g,b,h,d)}):n.t(f,g,b,h);"undefined"!==typeof pf_notify&&jQuery.isFunction(pf_notify)&&pf_notify(f,b)})},{"./lib/config-measuring":2,"./lib/detection":4,"./lib/reporting":5,"./lib/utils":6}]},{},[7]);
