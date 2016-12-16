/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,n;(function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.slice(0,v.length-1).concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){var n=p.call(arguments,0);return typeof n[0]!="string"&&n.length===1&&n.push(null),s.apply(r,n.concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){if(typeof e!="string")throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("libs/almond",function(){}),n("utils",[],function(){function e(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?!0:!1}function t(){return document.body.classList?!0:!1}function n(e,t){e&&e.classList.remove(t)}function r(e,t){e.classList.add(t)}function i(e,t){return(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function s(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}var o=function(){function s(e){var n=document.createElement("script"),r=!1;n.src=e,n.async=!0,n.onload=n.onreadystatechange=function(){!r&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(r=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},t||(t=document.getElementsByTagName("head")[0]),t.appendChild(n)}function o(t,o,u){n="?",o=o||{};for(r in o)o.hasOwnProperty(r)&&(n+=encodeURIComponent(r)+"="+encodeURIComponent(o[r])+"&");var a="json"+ ++e;return i[a]=function(e){u(e);try{delete i[a]}catch(t){}i[a]=null},s(t+n+"callback="+a),a}var e=0,t,n,r,i=this;return{get:o}}();return{hasClass:i,removeClass:n,addClass:r,isMobile:e,loadCss:s,JSONP:o,isCompatibile:t}}),n("events",[],function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:undefined};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return this.trigger=function(t,n){var r=new e(t,n);window.dispatchEvent(r)},e.prototype=window.Event.prototype,this}),n("options",[],function(){"use strict";var e={};return e.set=function(t){e.tbOptions=t},e.get=function(){return e.tbOptions},e}),n("libs/text",["module"],function(e){"use strict";var n,r,i,s,o,u=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],a=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,f=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,l=typeof location!="undefined"&&location.href,c=l&&location.protocol&&location.protocol.replace(/\:/,""),h=l&&location.hostname,p=l&&(location.port||undefined),d={},v=e.config&&e.config()||{};n={version:"2.0.14",strip:function(e){if(e){e=e.replace(a,"");var t=e.match(f);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:v.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=u[t];try{e=new ActiveXObject(n)}catch(r){}if(e){u=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,r,i){var s,o,u,a=n.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===t)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0},finishLoad:function(e,t,r,i){r=t?n.strip(r):r,v.isBuild&&(d[e]=r),i(r)},load:function(e,t,r,i){if(i&&i.isBuild&&!i.inlineText){r();return}v.isBuild=i&&i.isBuild;var s=n.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=t.toUrl(o),a=v.useXhr||n.useXhr;if(u.indexOf("empty:")===0){r();return}!l||a(u,c,h,p)?n.get(u,function(t){n.finishLoad(e,s.strip,t,r)},function(e){r.error&&r.error(e)}):t([o],function(e){n.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},write:function(e,t,r,i){if(d.hasOwnProperty(t)){var s=n.jsEscape(d[t]);r.asModule(e+"!"+t,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,t,r,i,s){var o=n.parseName(t),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";n.load(a,r,function(t){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},n.write(e,a,r,s)},s)}};if(v.env==="node"||!v.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"])r=t.nodeRequire("fs"),n.get=function(e,t,n){try{var i=r.readFileSync(e,"utf8");i[0]==="﻿"&&(i=i.substring(1)),t(i)}catch(s){n&&n(s)}};else if(v.env==="xhr"||!v.env&&n.createXhr())n.get=function(e,t,r,i){var s=n.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);v.onXhr&&v.onXhr(s,e),s.onreadystatechange=function(n){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):t(s.responseText),v.onXhrComplete&&v.onXhrComplete(s,e))},s.send(null)};else if(v.env==="rhino"||!v.env&&typeof Packages!="undefined"&&typeof java!="undefined")n.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(v.env==="xpconnect"||!v.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)i=Components.classes,s=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),o="@mozilla.org/windows-registry-key;1"in i,n.get=function(e,t){var n,r,u,a={};o&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=i["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream),n.init(u,1,0,!1),r=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream),r.init(n,"utf-8",n.available(),s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(n.available(),a),r.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return n}),n("libs/text!../templates/mobile.html",[],function(){return'        <div class="ctoolbar-mobile">\n            <div class="tb-box tb-logo tb-logo-slim">\n                <a id="tb-logo-link" href="" target="_blank"><span class=""></span></a>\n            </div>\n\n            <div class="tb-box tb-twitter">\n                <i class="tb-twitter-icon"></i> <span id="tb-twitter-sharecount"></span>\n            </div>\n            \n            <div class="tb-box tb-facebook">\n                <i class="tb-facebook-icon"></i> <span id="tb-facebook-sharecount"></span>\n            </div>\n            \n            <div class="tb-box tb-youtube right-btn tb-inactive">\n                <a href="" target="_blank">\n                    <i class="tb-youtube-icon"></i>\n                </a>\n            </div>\n\n            <div class="tb-box tb-sms right-btn  tb-inactive">\n                <a href=""><i class="tb-sms-icon"></i></a>\n            </div>\n\n            <div class="tb-box tb-email right-btn tb-inactive">\n                <a href=""><i class="tb-envelope-icon"></i></a>\n            </div>\n        </div>\n\n        <div id="cmmobadtag_toolbar_ad"></div>\n'}),n("tracking",[],function(){var e="UA-30251-55",t="New Toolbar";return typeof ga!="undefined"?(ga("create",e,"auto","cToolbarTracker"),ga("cToolbarTracker.send","pageview")):(function(e,t,n,r,i,s,o){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,s=t.createElement(n),o=t.getElementsByTagName(n)[0],s.async=1,s.src=r,o.parentNode.insertBefore(s,o)}(window,document,"script","//www.google-analytics.com/analytics.js","cTooblarGA"),cTooblarGA("create",e,"auto","cToolbarTracker"),cTooblarGA("cToolbarTracker.send","pageview")),window.addEventListener("ctoolbar.ready",function(){}),window.addEventListener("ctoolbar.show",function(){}),window.addEventListener("ctoolbar.hide",function(){}),this.trackEvent=function(e){typeof ga!="undefined"?ga("cToolbarTracker.send",{hitType:"event",eventCategory:t,eventAction:e.action,eventLabel:e.label}):cTooblarGA("cToolbarTracker.send",{hitType:"event",eventCategory:t,eventAction:e.action,eventLabel:e.label})},this}),n("mobile-ui",["utils","libs/text!../templates/mobile.html","tracking","options","events"],function(e,t,n,r,i){function s(e){return e.replace(/&/g,"and")}function o(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/platform.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.onload=function(){}}return this.load=function(){this.options=r.get(),this.toolbarElem=document.getElementById("ctoolbar"),this.toolbarElem.innerHTML=t,this.initRightBtn(this.options.mobileRightButton),this.initFacebookBtn(),this.initTwitterBtn(),e.removeClass(document.querySelector(".ctoolbar-mobile"),"tb-inactive"),this.options.mobileShowOnScroll?window.addEventListener("scroll",this.onScrollShowHideToolbar):this.show(),window.cToolbarAd&&cToolbarAd.init(),document.querySelector(".tb-box.tb-logo").addEventListener("click",function(){n.trackEvent({action:"Complex Icon",label:this.options.logoUrl})}.bind(this)),document.querySelector("#tb-logo-link").href=this.options.logoUrl},this.onScrollShowHideToolbar=function(){document.body.scrollTop===0?this.hide():e.hasClass(this.toolbarElem,"tb-hide")&&this.show()}.bind(this),this.initRightBtn=function(t){switch(t){case"youtube":e.removeClass(document.querySelector(".tb-youtube"),"tb-inactive"),this.initYoutubeBtn();break;case"sms":e.removeClass(document.querySelector(".tb-sms"),"tb-inactive"),this.initSMSBtn();break;case"email":e.removeClass(document.querySelector(".tb-email"),"tb-inactive"),this.initEmailBtn()}},this.initEmailBtn=function(){document.querySelector(".tb-email a").href="mailto:?subject=Check this out&body="+encodeURIComponent(s(this.options.shareText))+" "+this.options.url,document.querySelector(".tb-email a").addEventListener("click",function(){n.trackEvent({action:"Mobile: Email",label:this.options.url})}.bind(this))},this.initSMSBtn=function(){var e;navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)?e="sms://&body=":e="sms:?body=",document.querySelector(".tb-sms a").href=e+encodeURIComponent(s(this.options.shareText)+" "+this.options.url),document.querySelector(".tb-sms a").addEventListener("click",function(){n.trackEvent({action:"Mobile: SMS",label:this.options.url})}.bind(this))},this.initYoutubeBtn=function(){document.querySelector(".tb-youtube a").href="https://www.youtube.com/user/"+this.options.youtubeChannel,document.querySelector(".tb-youtube a").addEventListener("click",function(){n.trackEvent({action:"Mobile: YouTube",label:this.options.youtubeChannel})}.bind(this))},this.show=function(){e.removeClass(this.toolbarElem,"tb-hide"),i.trigger("ctoolbar.show"),document.getElementById("cmn-mob-banner_1")&&e.addClass(document.getElementById("cmn-mob-banner_1"),"tb-ad-up"),document.getElementsByTagName("body")[0].setAttribute("tb-ad-up","true")},this.hide=function(){i.trigger("ctoolbar.hide"),e.addClass(this.toolbarElem,"tb-hide"),document.getElementById("cmn-mob-banner_1")&&e.removeClass(document.getElementById("cmn-mob-banner_1"),"tb-ad-up"),document.getElementsByTagName("body")[0].setAttribute("tb-ad-up","false")},this.initFacebookBtn=function(){document.querySelector(".ctoolbar-mobile .tb-facebook").addEventListener("click",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.options.url),"facebook-share-dialog","width=626,height=436"),n.trackEvent({action:"Mobile: Facebook",label:this.options.url})}.bind(this)),this.initTwitterBtn=function(){var e="";this.options.twitterHandle?e=this.options.shareText+" @"+this.options.twitterHandle:e=this.options.shareText,document.querySelector(".ctoolbar-mobile .tb-twitter").addEventListener("click",function(){window.open("https://twitter.com/share?url="+encodeURIComponent(this.options.url)+"&text="+encodeURIComponent(e),"twitter-share-dialog","width=626,height=436"),n.trackEvent({action:"Mobile: Twitter",label:this.options.url})}.bind(this))}},this}.bind({})),window.cmn_tb_ad_opened_once=!1,window.cmn_tb_ad_delay_timeout=null,window.cmn_tb_ad_opened=!1,window.cmnBtnHoverOut=function(){window.clearTimeout(window.cmn_tb_ad_delay_timeout)},window.cmnAdBoxClose=function(){try{CMNUNTjQuery("#cmnpopadbox").css("bottom","0"),CMNUNTjQuery("#cmn_ad_box_close_x").css({top:"50px",display:"none"}),window.cmn_tb_ad_opened=!1,window.clearTimeout(window.cmn_tb_ad_delay_timeout),CMNUNTjQuery("#cmn_toolbar_ad").bind("mouseleave",cmnBtnHoverOut),cmn_tb_ad&&CMNUNTjQuery("#cmn_ad_box").animate({bottom:"-500px"},{duration:200,queue:!0,complete:function(){document.getElementById("cmn_toolbar_ad").innerHTML="",cmntbvideoIframeRemove()}}),CMNUNTjQuery(".tb-toggle").css("display","block")}catch(e){}},window.closeAllOtherBoxes=function(){window.cmn_tb_ad_opened&&cmnAdBoxClose()},window.cmnAdBoxOpen=function(){try{CMNUNTjQuery("#cmnpopadbox").css("bottom","11px"),CMNUNTjQuery("#cmn_ad_box_close_x").css({top:"13px",display:"block"}),window.cmn_tb_ad_opened_once=!0,window.cmn_tb_ad_opened||(closeAllOtherBoxes(),window.cmn_tb_ad_opened=!0,CMNUNTjQuery("#cmn_ad_box").css("display","block"),CMNUNTjQuery("#cmn_ad_box").css("z-index","2147483490"),CMNUNTjQuery("#cmn_toolbar_ad").unbind("mouseleave",cmnBtnHoverOut),cmn_tb_ad&&CMNUNTjQuery("#cmn_ad_box").animate({bottom:"27px"},{duration:200,queue:!0,complete:function(){cmntbvideoIframe(),document.getElementById("cmn_toolbar_ad").innerHTML='<img src="http://media.complex.com/common/images/toolbar/transparentImg.png" id="xout" style="position: relative; z-index: 500000; float: right; margin: 5px 3px 0 0;" />'}})),CMNUNTjQuery(".tb-toggle").css("display","none")}catch(e){}},window.adBoxHoverTimer=function(){window.cmn_tb_ad_opened_once&&!window.cmn_tb_ad_opened?window.cmn_tb_ad_delay_timeout=window.setTimeout(cmnAdBoxOpen,1e3):cmnAdBoxOpen()},window.toggleAdBox=function(){return window.clearTimeout(window.cmn_tb_ad_delay_timeout),window.cmn_tb_ad_opened?cmnAdBoxClose():cmnAdBoxOpen()},window.cmnAdBoxKill=function(){try{CMNUNTjQuery("#cmnpopadbox").css("bottom","0"),CMNUNTjQuery("#cmn_ad_box_close_x").css({top:"50px",display:"none"}),window.cmn_tb_ad_opened&&(window.cmn_tb_ad_opened=!1,CMNUNTjQuery("#cmn_toolbar_ad").bind("mouseleave",cmnBtnHoverOut),cmn_tb_ad&&CMNUNTjQuery("#cmn_ad_box").css({bottom:"-500px"}))}catch(e){}},window.cmnAdBoxOpenAuto=function(){CMNUNTjQuery("#cmnpopadbox").css("bottom","11px"),CMNUNTjQuery("#cmn_ad_box_close_x").css({top:"13px",display:"block"}),window.cmn_tb_ad_opened_once=!1,window.cmn_tb_ad_opened||(closeAllOtherBoxes(),window.cmn_tb_ad_opened=!0,CMNUNTjQuery("#cmn_ad_box").css("display","block"),CMNUNTjQuery("#cmn_ad_box").css("z-index","2147483490"),CMNUNTjQuery("#cmn_toolbar_ad").unbind("mouseleave",cmnBtnHoverOut),cmn_tb_ad&&CMNUNTjQuery("#cmn_ad_box").animate({bottom:"27px"},{duration:200,queue:!0,complete:function(){cmntbvideoIframe(),CMNHELPERS.setCookie(tbaeCookieName,"1",60*TBCookieExpires),document.getElementById("cmn_toolbar_ad").innerHTML='<img src="http://media.complex.com/common/images/toolbar/transparentImg.png" id="xout" style="position: relative; z-index: 500000; float: right; margin: 5px 3px 0 0;" />'}}),CMNUNTjQuery(".tb-toggle").css("display","none"))},document.addEventListener("cmnUNT-ad-load",function(e){e.detail.adSize==="7x7"&&(CMNUNTjQuery("#cmn_ad_box_close_x").css("display","none"),CMNUNTjQuery("#cmn_toolbar_ad").off("mouseenter",adBoxHoverTimer),CMNUNTjQuery("#overtblogox").off("mouseenter",adBoxHoverTimer),CMNUNTjQuery("#cmn_toolbar_ad").off("click",toggleAdBox),CMNUNTjQuery("#overtblogox").off("click",toggleAdBox),CMNUNTjQuery("#cmn_ad_box_close_x").off("click",cmnAdBoxClose),CMNUNTjQuery("#cmn_toolbar_ad").css("z-index","1"),cmnAdBoxKill(),e.detail.dfpSize[0]===200&&e.detail.dfpSize[1]===30&&(CMNUNTjQuery("#cmn_toolbar_ad").on("mouseenter",adBoxHoverTimer),CMNUNTjQuery("#overtblogox").on("mouseenter",adBoxHoverTimer),CMNUNTjQuery("#cmn_toolbar_ad").on("click",toggleAdBox),CMNUNTjQuery("#overtblogox").on("click",toggleAdBox),CMNUNTjQuery("#cmn_ad_box_close_x").on("click",cmnAdBoxClose),CMNUNTjQuery("#cmn_toolbar_ad").css("z-index","2147483500"),CMNUNTjQuery(".cmnbox_hdr_x a").css("background","url(http://media.complex.com/common/images/toolbar/tb-close-circle-rollover.png) no-repeat")))}),n("backwards-compat",function(){}),n("libs/text!../templates/desktop.html",[],function(){return'        <div class="ctoolbar-desktop tb-dark">\n            <div class="tb-box tb-logo">    \n                <a id="tb-logo-link" href="" target="_blank"><span class="tb-logo-icon"></span></a>\n            </div>\n\n            <div class="tb-box tb-category">\n                <div class="tb-category-label tb-inactive"></div>\n            </div>\n\n            <div class="tb-box tb-share">\n\n                <div class="tb-facebook tb-inactive tb-btn">\n                    <a href="" target="_blank"class="tb-btn-top-panel">\n                        <i class="tb-facebook-icon"></i> <span class="tb-social-btn-label">Like</span> <span id="tb-facebook-like-text"></span>\n                    </a>\n                    <div class="fb-like-container tb-btn-bottom-panel"></div>\n\n                </div>\n              \n                <div class="tb-twitter tb-inactive tb-btn">\n                    <a href="" target="_blank" class="tb-btn-top-panel">\n                        <i class="tb-twitter-icon"></i> <span class="tb-social-btn-label">Follow</span> <span id="tb-twitter-follow-text"></span></a>\n                    <div class="twitter-follow-container tb-btn-bottom-panel"></div>\n                </div>\n               \n                <div class="tb-youtube tb-inactive tb-btn">\n                    <a href="" target="_blank" class="tb-btn-top-panel"><i class="tb-youtube-icon"></i> <span class="tb-social-btn-label">Subscribe</span> <span id="tb-youtube-subscribe-text"></span>\n                    </a>\n                    <div class="youtube-sucscribe-container tb-btn-bottom-panel">\n                        <div class="g-ytsubscribe" data-channel="" data-layout="default" data-count="default"></div>\n                    </div>\n                </div>\n         \n            </div>\n            \n            <div class="tb-box tb-ad">\n                <!-- Legacy toolbar html -->\n                <div id="cmn_tb_wrapper"></div>\n                <div id="overtblogox"></div>\n                <div id="cmn_toolbar_ad" class="cmn_btn" rel="#mies2">\n                    <div id="cmn_toolbar_ad_inner">\n                        <span class="cmn_btn_text"> </span>\n                    </div>\n                </div>\n\n                <div class="cmnbox" id="cmn_ad_box">\n                    <div class="right_top_rounded_corner">\n                        <span class="cmnbox_hdr_x" id="cmn_ad_box_close_x">\n                            <a href="" onclick="return false;"></a>\n                        </span>\n                    </div>\n                    <!-- LINE BELOW IS THE ONLY NON-LEGACY LINE IN THIS BLOCK. AFTER TRANSITION CHANGE DIV ID TO cmn_ad_toolbar\n                         WE WILL NEED TO MAKE SURE THAT ON COLLAPSE OF TOOLBAR, PROPER ID IS USED FOR DISABLING/ENABLING REFRESHING -->\n                    <div id="cmn_ad_200x30" class="adUnits footer-ad"></div>\n                    <div id="cmnpopadbox"></div>\n                </div>\n                <iframe id="cmn_interaction_tracking_iframe" width="1" scrolling="no" height="1" frameborder="0" allowtransparency="true" src="" style="display:block"></iframe><iframe id="cmn_toolbar_state_tracking_iframe" width="1" scrolling="no" height="1" frameborder="0" allowtransparency="true" src="" ></iframe>\n                <!-- Legacy toolbar html -->\n            </div>\n        </div>\n        <div class="tb-toggle tb-inactive"><span class="tb-toggle-text">Close</span> <i class="tb-chevron-circle-right"></i></div>\n        \n'}),n("channels",[],function(){var e=["Music","Style","Movies","Sports","Games","Luxury"];return e}),n("desktop-ui",["utils","events","backwards-compat","libs/text!../templates/desktop.html","tracking","options"],function(e,n,r,i,s,o){return this.load=function(){this.options=o.get(),document.getElementById("ctoolbar").innerHTML=i,e.addClass(document.querySelector(".ctoolbar-desktop"),"tb-"+this.options.desktopBackground),this.toolbarExpanded=!0,this.showChannelBadge(),this.initSocialBtns(),this.initCollapseBtn(),window.CMNUNT&&CMNUNT.load("7x7",{containerId:"cmn_ad_200x30"}),document.querySelector(".tb-box.tb-logo").addEventListener("click",function(){s.trackEvent({action:"Complex Icon",label:this.options.logoUrl})}.bind(this)),document.querySelector("#tb-logo-link").href=this.options.logoUrl},this.showChannelBadge=function(){var n=o.get(),r;this.options.channel&&t(["channels"],function(t){for(var i=0;i<t.length;i++){r=new RegExp(n.channel,"i");if(r.test(t[i])){document.querySelector(".tb-category-label").innerHTML=t[i],e.removeClass(document.querySelector(".tb-category-label"),"tb-inactive");break}}})}.bind(this),this.initCollapseBtn=function(){document.querySelector(".tb-toggle").addEventListener("click",function(){this.toolbarExpanded?(document.querySelector(".ctoolbar-desktop").style.right="-100%",document.querySelector(".ctoolbar-desktop").style.marginRight="50px",this.toolbarExpanded=!1,e.addClass(document.querySelector(".tb-toggle"),"expand"),document.querySelector(".tb-toggle-text").innerHTML="Open",window.CMNUNT&&(CMNUNT.slots.cmn_ad_200x30.refreshable=!1),s.trackEvent({action:"Toolbar Collapse",label:"Close (minimize)"}),n.trigger("ctoolbar.collapse")):(document.querySelector(".ctoolbar-desktop").style.right="0%",document.querySelector(".ctoolbar-desktop").style.marginRight="0px",e.removeClass(document.querySelector(".tb-toggle"),"expand"),document.querySelector(".tb-toggle-text").innerHTML="Close",this.toolbarExpanded=!0,window.CMNUNT&&(CMNUNT.slots.cmn_ad_200x30.refreshable=!0),s.trackEvent({action:"Toolbar Collapse",label:"Open (re-expand)"}),n.trigger("ctoolbar.expand"))}.bind(this)),setTimeout(function(){e.removeClass(document.querySelector(".tb-toggle"),"tb-inactive")},5e3)},this.initSocialBtns=function(){for(var e=0;e<this.options.desktopSocialButtons.length;e++)this.options.desktopSocialButtons[e]==="facebook"?this.initFacebookBtn():this.options.desktopSocialButtons[e]==="twitter"?this.initTwitterBtn():this.options.desktopSocialButtons[e]==="youtube"&&this.initYoutubeBtn()},this.initFacebookBtn=function(){this.options.facebookUsername&&this.options.facebookName?(document.getElementById("tb-facebook-like-text").innerHTML=this.options.facebookName,document.querySelector(".tb-facebook .tb-btn-top-panel").href="http://facebook.com/"+this.options.facebookUsername,document.querySelector(".tb-facebook").addEventListener("click",function(){s.trackEvent({action:"Desktop: Facebook",label:this.options.facebookUsername})}.bind(this)),e.removeClass(document.querySelector(".ctoolbar-desktop .tb-facebook"),"tb-inactive")):console.error("cToolbar error: facebookUsername and facebookName required.")},this.show=function(){e.removeClass(this.toolbarElem,"tb-hide"),n.trigger("ctoolbar.show")},this.hide=function(){console.log("tb hide"),n.trigger("ctoolbar.hide"),e.addClass(this.toolbarElem,"tb-hide")},this.initTwitterBtn=function(){this.options.twitterHandle&&this.options.twitterName?(document.getElementById("tb-twitter-follow-text").innerHTML=this.options.twitterName,document.querySelector(".tb-twitter .tb-btn-top-panel").href="http://twitter.com/"+this.options.twitterHandle,e.removeClass(document.querySelector(".ctoolbar-desktop .tb-twitter"),"tb-inactive"),document.querySelector(".tb-twitter").addEventListener("click",function(){s.trackEvent({action:"Desktop: Twitter",label:this.options.twitterHandle})}.bind(this))):console.error("cToolbar error: twitterUsername and twitterHandle required.")},this.initYoutubeBtn=function(){this.options.youtubeChannel&&this.options.youtubeChannelName&&(document.getElementById("tb-youtube-subscribe-text").innerHTML="to "+this.options.youtubeChannelName,document.querySelector(".tb-youtube .tb-btn-top-panel").href="http://youtube.com/user/"+this.options.youtubeChannel,e.removeClass(document.querySelector(".ctoolbar-desktop .tb-youtube"),"tb-inactive"),document.querySelector(".tb-youtube").addEventListener("click",function(){s.trackEvent({action:"Desktop: Youtube",label:this.options.youtubeChannel})}.bind(this)))},this}.bind({})),n("ctoolbar",["utils","module","events","options"],function(e,n,r,i){var s=s||function(){"use strict";function s(e){if(e)if(Array.isArray(e))for(var t=0;t++;t<e[t].length)e[t]=e[t].toLowerCase();else e=e.toLowerCase();return e}var n={};return n.load=function(n){n||(i.get()?n=i.get():n={}),n.url||(document.querySelector("link[rel='canonical']")?n.url=document.querySelector("link[rel='canonical']").href:n.url=location.protocol+"//"+location.host+location.pathname);if(!e.isCompatibile())return console.log("Browser is not compatable with ctoolbar."),Tracking.trackEvent({action:"Failed Load",label:this.options.url}),!1;n.shareText||(document.querySelector("meta[property='og:title']")?n.shareText=document.querySelector("meta[property='og:title']").content:document.querySelector("meta[name='twitter:title']")?n.shareText=document.querySelector("meta[name='twitter:title']").content:n.shareText=document.title),n.desktopSocialButtons||(n.desktopSocialButtons=["facebook","twitter"]),n.desktopSocialButtons=s(n.desktopSocialButtons),n.desktopBackground||(n.desktopBackground="gradient"),n.desktopBackground=s(n.desktopBackground),n.mobileRightButton||(n.mobileRightButton="email"),n.mobileRightButton=s(n.mobileRightButton),typeof n.toolbarCDNDomain=="undefined"&&(n.toolbarCDNDomain="http://toolbar.complex.com"),n.disableMobile||(n.disableMobile=!1),n.logoUrl||(n.logoUrl="http://about.complex.com"),typeof n.mobileShowOnScroll=="undefined"&&(n.mobileShowOnScroll=!0),i.set(n),this.toolbarElem=document.createElement("div"),this.toolbarElem.id="ctoolbar",e.isMobile()?n.disableMobile===!1?(e.loadCss(n.toolbarCDNDomain+"/css/ctoolbar.mobile.min.css"),this.toolbarElem.className="tb-mobile tb-hide",t(["mobile-ui"],function(e){e.load()})):window.cToolbarAd&&cToolbarAd.init():(e.loadCss(n.toolbarCDNDomain+"/css/ctoolbar.desktop.min.css"),this.toolbarElem.className="tb-desktop",t(["desktop-ui"],function(e){e.load()})),document.body.appendChild(this.toolbarElem)},n.destroy=function(){n.remove(),console.error("cToolbar.destroy() is deprecated. Please use cToolbar.remove() instead.")},n.remove=function(e){var t,n=document.getElementById("ctoolbar");n&&(t=n.cloneNode(!0),n.parentNode.replaceChild(t,n),t.parentNode.removeChild(t),r.trigger("ctoolbar.remove"),e&&(window.cToolbar=null))},n.show=function(){e.removeClass(this.toolbarElem,"tb-hide"),r.trigger("ctoolbar.show"),e.isMobile()&&(document.getElementById("cmn-mob-banner_1")&&e.addClass(document.getElementById("cmn-mob-banner_1"),"tb-ad-up"),document.getElementsByTagName("body")[0].setAttribute("tb-ad-up","true"))},n.hide=function(){r.trigger("ctoolbar.hide"),e.addClass(this.toolbarElem,"tb-hide"),e.isMobile()&&(document.getElementById("cmn-mob-banner_1")&&e.removeClass(document.getElementById("cmn-mob-banner_1"),"tb-ad-up"),document.getElementsByTagName("body")[0].setAttribute("tb-ad-up","false"))},n}.bind({})();window.cToolbar=s,r.trigger("ctoolbar.ready"),window.cToolbarInit&&window.cToolbarInit()}),t(["ctoolbar"])})();