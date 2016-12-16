(function(){
    if(window.BOOMR && window.BOOMR.version){return;}

    var dom,doc,where,iframe = document.createElement('iframe');

    iframe.src = "javascript:false";
    iframe.title = ""; iframe.role="presentation";
    (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";

    where = document.getElementsByTagName('script')[0];
    where.parentNode.insertBefore(iframe, where);

    try {
        doc = iframe.contentWindow.document;
    } catch(e) {
        dom = document.domain;
        iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";
        doc = iframe.contentWindow.document;
    }

    doc.open()._l = function() {
        var js = this.createElement("script");
        if(dom) this.domain = dom;
        js.id = "boomr-if-as";
        js.src = '//c.go-mpulse.net/boomerang/' + '38QDY-8CT77-8XNH2-VJQTD-EK4YX';
        BOOMR_lstart=new Date().getTime();
        this.body.appendChild(js);
    };

    doc.write('<body onload="document._l();">');
    doc.close();
})();

/*! mpulse v0.0.1 */

!function(a){"use strict";function b(b,c){j||("object"==typeof XDomainRequest?(r=!0,j=function(){return new XDomainRequest}):"function"==typeof XMLHttpRequest||"object"==typeof XMLHttpRequest?j=function(){return new XMLHttpRequest}:"function"==typeof require?j=function(){var a=require("xmlhttprequest").XMLHttpRequest;return new a}:a&&"undefined"!=typeof a.ActiveXObject&&(j=function(){return new a.ActiveXObject("Microsoft.XMLHTTP")}));var d=j();"function"==typeof c&&(r?d.onload=function(){c(d.responseText)}:d.onreadystatechange=function(){4===d.readyState&&c(d.responseText)}),d.open("GET",b,!0),d.send()}function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}function d(d,e){function f(b){return-1!==b.indexOf("http://")||-1!==b.indexOf("https://")?b:(M?b="https:"+b:"undefined"==typeof a?-1===b.indexOf("http:")&&(b="http:"+b):"undefined"!=typeof a&&"file:"===a.location.protocol&&-1===b.indexOf("http:")&&(b="http:"+b),b)}function g(){var a=L;return a+=-1!==a.indexOf("?")?"&":"?",a+="key="+K,a+="&acao=",f(a)}function h(){var a=N.beacon_url;return a+=-1!==a.indexOf("?")?"&":"?",a+="acao=1",f(a)}function i(a){try{var b=JSON.parse(a);for(var c in b)b.hasOwnProperty(c)&&(N[c]=b[c])}catch(d){return void(P=!1)}if(V||E(N.session_id),W={},Y={},U={},N.PageParams){var e=N.PageParams.customMetrics,f=N.PageParams.customTimers,g=N.PageParams.customDimensions;if(e)for(q=0;q<e.length;q++){var h=e[q];W[h.name]=h.label}if(f)for(q=0;q<f.length;q++){var i=f[q];Y[i.name]=i.label}if(g)for(q=0;q<g.length;q++){var m=g[q];U[m.name]=m.label}}P=!0,O=!0,setTimeout(j,l),k(r)}function j(){if(""!==L){var a=g();O&&(a+="&r="),b(a,i)}}function n(){var a={};for(var b in T)T.hasOwnProperty(b)&&(a[b]=T[b]);return a}function o(a,b,c){Q.push({type:a,name:b,value:c,group:S,dimensions:n()})}function r(a){if(0!==Q.length){if(!P)return void((!R||a)&&(R=!0,setTimeout(function(){r(!0)},m)));var b=Q.shift(),c=b.type,d=b.name,e=b.value,f={};"boolean"!=typeof b.group&&(f["h.pg"]=b.group);for(var g in b.dimensions)b.dimensions.hasOwnProperty(g)&&"undefined"!=typeof U[g]&&(f[U[g]]=b.dimensions[g]);"metric"===c?"undefined"!=typeof W[d]&&(f[W[d]]=e,t(f)):"timer"===c&&"undefined"!=typeof Y[d]&&(f.t_other=Y[d]+"|"+e,t(f)),k(r)}}function t(a){a.d=N.site_domain,a["h.key"]=N["h.key"],a["h.d"]=N["h.d"],a["h.cr"]=N["h.cr"],a["h.t"]=N["h.t"],a["http.initiator"]="api",V!==!1&&_>0&&(a["rt.si"]=V,a["rt.ss"]=$,a["rt.sl"]=_),a.api=1,a.v=1,a.u="http://"+N.site_domain,a.t_done=0,J("before_beacon",a);var c=[];for(var d in a)a.hasOwnProperty(d)&&c.push(encodeURIComponent(d)+"="+(void 0===a[d]||null===a[d]?"":encodeURIComponent(a[d])));var e=h(),f=e+(e.indexOf("?")>-1?"&":"?")+c.join("&");J("beacon",a),b(f)}function u(a){return"string"!=typeof a?-1:(Z++,X[Z]={time:s(),name:a},Z)}function v(a){if("number"!=typeof a||0>a)return-1;var b=X[a],c=0;return b?(c=Math.round(s()-b.time),w(b.name,c),delete X[a],c):-1}function w(a,b){return"string"!=typeof a?-1:"number"!=typeof b||0>b?-1:(b=Math.round(b),o("timer",a,b),k(r),b)}function x(a,b){"string"==typeof a&&("undefined"==typeof b||"number"==typeof b)&&("undefined"==typeof b&&(b=1),o("metric",a,b),k(r))}function y(a){"string"==typeof a&&(S=a)}function z(){S=!1}function A(a,b){return"undefined"!=typeof a?"undefined"==typeof b?void B(a):void(T[a]=b):void 0}function B(a){"undefined"!=typeof a&&"undefined"!=typeof T[a]&&delete T[a]}function C(a){("string"==typeof a||"number"==typeof a)&&("number"==typeof a&&(a=""+a),V=a)}function D(){return V}function E(a){return C(a||c()),G(0),D()}function F(){_++}function G(a){"number"!=typeof a||0>a||(_=a)}function H(){return _}function I(a,b){aa.hasOwnProperty(a)&&"function"==typeof b&&aa[a].push(b)}function J(a,b){for(var c=0;c<aa[a].length;c++)aa[a][c](b)}e=e||{};var K=d,L="//c.go-mpulse.net/api/config.json",M=!1,N={},O=!1,P=!1,Q=[],R=!1,S=!1,T={},U={},V=!1,W={},X={},Y={},Z=-1,$=s(),_=0,aa={};for(q=0;q<p.length;q++)aa[p[q]]=[];"undefined"!=typeof e.configUrl&&(L=e.configUrl),e.forceSSL&&(M=!0),j();var ba={startTimer:u,stopTimer:v,sendTimer:w,sendMetric:x,setViewGroup:y,resetViewGroup:z,setDimension:A,resetDimension:B,setSessionID:C,getSessionID:D,startSession:E,incrementSessionLength:F,setSessionLength:G,getSessionLength:H,subscribe:I,parseConfig:i};return ba}function e(){return w.mPulse=x,v}function f(a,b){if(b=b||{},"undefined"!=typeof b.name&&"undefined"!=typeof z[b.name])return z[b.name];var c=d(a,b);if(y===!1){y=c;for(var e=0;e<o.length;e++){var f=o[e];v[f]=y[f]}}return"undefined"!=typeof b.name&&(z[b.name]=c),c}function g(a){return z[a]}function h(){}function i(a){"undefined"!=typeof z[a]&&delete z[a]}var j,k,l=3e5,m=5e3,n="0.0.1",o=["startTimer","stopTimer","sendTimer","sendMetric","setViewGroup","resetViewGroup","setDimension","resetDimension","setSessionID","getSessionID","startSession","incrementSessionLength","setSessionLength","getSessionLength","subscribe"],p=["before_beacon","beacon"],q=0,r=!1,s=!1,t=+new Date;if(k="undefined"!=typeof process&&"function"==typeof process.nextTick?process.nextTick.bind(process):"undefined"!=typeof a?a.setImmediate?a.setImmediate.bind(a):a.msSetImmediate?a.msSetImmediate.bind(a):a.webkitSetImmediate?a.webkitSetImmediate.bind(a):a.mozSetImmediate?a.mozSetImmediate.bind(a):function(a){setTimeout(a,10)}:function(a){setTimeout(a,10)},"undefined"!=typeof a)if("undefined"!=typeof a.performance&&"function"==typeof a.performance.now)s=a.performance.now.bind(a.performance);else if("undefined"!=typeof a.performance){var u=["webkitNow","msNow","mozNow"];for(q=0;q<u.length;q++)if("function"==typeof a.performance[u[q]]){s=a.performance[u[q]];break}}s||("undefined"!=typeof a&&a.performance&&a.performance.timing&&a.performance.timing.navigationStart&&(t=a.performance.timing.navigationStart),s="undefined"!=typeof Date&&Date.now?function(){return Date.now()-t}:function(){return+new Date-t});var v,w,x,y=!1,z={};for("undefined"!=typeof a&&(w=a,x=w.mPulse),v={version:n,noConflict:e,init:f,getApp:g,stop:i},q=0;q<o.length;q++)v[o[q]]=h;"function"==typeof define&&define.amd?define([],function(){return v}):"undefined"!=typeof module&&module.exports?module.exports=v:"undefined"!=typeof w&&(w.mPulse=v)}("undefined"!=typeof window?window:void 0);

(function(){
    try {
        window.mPulseApp = mPulse.init("38QDY-8CT77-8XNH2-VJQTD-EK4YX");
    } catch(e) {}
})();
