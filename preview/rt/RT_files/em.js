/* tag javascript v2.3.3 */!function(){var a={};window._em_tag={register:function(b,c){a[b]=c},require:function(b){if(!a[b])throw new Error("error: Requested module '"+b+"' has not been defined.");return a[b]}}}(),function(){function a(){return e?{name:"Internet Explorer",msie:d,version:c.match(/(msie |rv:)(\d+(\.\d+)?)/i)[2]}:n?{name:"Opera",opera:d,version:c.match(r)?c.match(r)[1]:c.match(/opr\/(\d+(\.\d+)?)/i)[1]}:f?{name:"Chrome",webkit:d,chrome:d,version:c.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)[1]}:g?{name:"PhantomJS",webkit:d,phantom:d,version:c.match(/phantomjs\/(\d+(\.\d+)+)/i)[1]}:j?{name:"TouchPad",webkit:d,touchpad:d,version:c.match(/touchpad\/(\d+(\.\d+)?)/i)[1]}:k?{name:"Amazon Silk",webkit:d,android:d,mobile:d,version:c.match(/silk\/(\d+(\.\d+)?)/i)[1]}:h||i?(b={name:h?"iPhone":"iPad",webkit:d,mobile:d,ios:d,iphone:h,ipad:i},r.test(c)&&(b.version=c.match(r)[1]),b):m?{name:"Android",webkit:d,android:d,mobile:d,version:(c.match(r)||c.match(s))[1]}:l?{name:"Safari",webkit:d,safari:d,version:c.match(r)[1]}:p?(b={name:"Gecko",gecko:d,mozilla:d,version:c.match(s)[1]},o&&(b.name="Firefox",b.firefox=d),b):q?{name:"SeaMonkey",seamonkey:d,version:c.match(/seamonkey\/(\d+(\.\d+)?)/i)[1]}:{}}var b,c=navigator.userAgent,d=!0,e=/(msie|trident)/i.test(c),f=/chrome|crios/i.test(c),g=/phantom/i.test(c),h=/iphone/i.test(c),i=/ipad/i.test(c),j=/touchpad/i.test(c),k=/silk/i.test(c),l=/safari/i.test(c)&&!f&&!g&&!k,m=/android/i.test(c),n=/opera/i.test(c)||/opr/i.test(c),o=/firefox/i.test(c),p=/gecko\//i.test(c),q=/seamonkey\//i.test(c),r=/version\/(\d+(\.\d+)?)/i,s=/firefox\/(\d+(\.\d+)?)/i,t=a();t.msie&&t.version>=8||t.chrome&&t.version>=10||t.firefox&&t.version>=4||t.safari&&t.version>=5||t.opera&&t.version>=10?t.a=d:t.msie&&t.version<8||t.chrome&&t.version<10||t.firefox&&t.version<4||t.safari&&t.version<5||t.opera&&t.version<10?t.c=d:t.x=d,_em_tag.register("bowser",t)}(),function(){function a(a,b,c){if(b)if(c=c||parent,k)try{postMessage.call(c,a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}catch(d){c.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else b&&(c.location=b.replace(/#.*$/,"")+"#"+ +new Date+g++ +"&"+a)}function b(a,g,l){k?(a&&(f&&b(),f=function(b){return"string"==typeof g&&b.origin!==g||"function"==typeof g&&g(b.origin)===i?i:void a(b)}),h[j]?h[a?j:"removeEventListener"]("message",f,i):h[a?"attachEvent":"detachEvent"]("onmessage",f)):(c&&clearInterval(c),c=null,a&&(l="number"==typeof g?g:"number"==typeof l?l:100,e=document.location.hash,c=setInterval(function(){var b=document.location.hash,c=/^#?\d+&/;b!==d&&b!==e&&c.test(b)&&(d=b,document.location.hash=e?e:"",a({data:b.replace(c,"")}))},l)))}var c,d,e,f,g=1,h=this,i=!1,j="addEventListener",k=h.postMessage;_em_tag.register("postmessage",{postMessage:a,receiveMessage:b})}(),function(){function a(a){var b="_em_"+a;return"undefined"!=typeof window&&window[b]?window[b]:p[a]}function b(){return a("tp")}function c(){return q+a("cdn")+a("storage")}function d(){return a("frameTimeout")}function e(b){return q+a("cdn")+"/images/"+b}function f(){return q+a("dyn")+"/d/6/p"}function g(){return q+a("dyn")+"/d/6/s"}function h(){return q+a("survey")+"/survey/"+p.theme+"/jquery.speedo."+p.theme+".min.js"}function i(){return q+a("dyn")+"/d/6/i"}function j(){return q+a("cdn")+"/d/6/p"}function k(){return q+a("dyn")+"/d/6/e"}function l(){return q+a("cdn")+"/js/json2.min.js"}function m(b){return q+a("survey")+"/invitation/js/invitation-"+b+".js"}function n(){return q+"//logs-01.loggly.com/inputs/"+p.logglyToken+".gif"}function o(){return'<div id="em-header">FEEDBACK</div><div id="em-logo"><img src="IMAGE_URL"></div><div id="em-message">MESSAGE</div><div id="em-buttons"><button type="button" id="em-ok-btn" class="em-ok">CONFIRM</button> <button type="button" id="em-cancel-btn" class="em-cancel">CANCEL</button></div>'}var p={cdn:"//s.effectivemeasure.net",dyn:"//s.effectivemeasure.net",storage:"/html/frame_2.3.3.html",survey:"//v.effectivemeasure.net",tp:"effectivemeasure.net",frameTimeout:5e3,theme:"metro",logglyToken:"88bfac63-f1b9-4c33-b83f-e7628b23e754"},q=window.location.protocol;_em_tag.register("config",{get:a,getImageUrl:e,getPayloadUrl:f,getStorageFrameUrl:c,getSwitchUrl:g,getErrorUrl:k,getJSONUrl:l,getPayloadImageUrl:i,getFrameTimeout:d,getAjaxUrl:j,getTpDomain:b,getOverlayUrl:h,getInvitationMarkup:o,getInvitationUrl:m,getLogglyUrl:n})}(),function(){function a(a){a&&b(a.name,a.value,a.secs,a.tld,"/")}function b(a,b,c,d,e){var f=new Date,g="",h="",i="";e=e||"/",c&&(f.setTime(f.getTime()+1e3*c),g="; expires="+f.toUTCString()),d&&(h="; domain=."+d),i=encodeURIComponent(b),document.cookie=a+"="+i+g+h+"; path="+e}function c(a){for(var b=a+"=",c=document.cookie.split(";"),d="",e=0;e<c.length;e++){for(var f=c[e];" "==f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(b))return d=f.substring(b.length,f.length),"undefined"==d?void 0:decodeURIComponent(d)}return null}_em_tag.register("cookies",{setItem:a,set:b,get:c})}(),function(){function a(){v.set("t","true",31536e3,w.getTpDomain(),"/");var a=v.get("t");return a?!0:!1}function b(){v.set("_em_t","true",60);var a=v.get("_em_t");return"true"===a?!0:!1}function c(){return window.self===window.top?!1:!0}function d(){function a(a){var b=(Math.random().toString(16)+"000000000").substr(2,8);return a?"-"+b.substr(0,4)+"-"+b.substr(4,4):b}return a()+a(!0)+a(!0)+a()}function e(){return x}function f(){var a={};return window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(b,c,d){a[c]=d}),a}function g(){var a=f();return a._em_force_survey?!0:!1}function h(a,b){var c=window.document.createElement("iframe");c.id=b,c.width=0,c.height=0,c.tabindex=-1,c.title="empty",c.style.display="none",c.src=a,document.body.insertBefore(c,document.body.firstChild)}function i(a,b){var c=document.getElementsByTagName("script")[0],d=c.parentNode,e=/ded|co/,f="onload",g="onreadystatechange",h="readyState",i=document.createElement("script");i[f]=i[g]=function(){(!this[h]||e.test(this[h]))&&(i[f]=i[g]=null,b&&b(i),i=null)},i.async=!0,i.src=a,d.insertBefore(i,c)}function j(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a)),b.appendChild(c)}function k(a,b){b=b||{};var c={};c.pu=window.location.href,c.ru=document.referrer,c.ua=navigator.userAgent,c.ec=a;var d=w.getErrorUrl()+"?";d+=n(c);var e=new Image;if(e.src=d,b.raise)throw new Error(a)}function l(){return"object"==typeof JSON&&"function"==typeof JSON.parse}function m(a){i(w.getJSONUrl(),a)}function n(a){var b=[];for(var c in a)null!==a[c]&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}function o(a,b){var c=new RegExp(Object.keys(b).join("|"),"g");return a.replace(c,function(a){return b[a]})}function p(a,b){return Math.floor(Math.random()*(b-a+1)+a)}function q(a){return a>0&&1===p(1,a)}function r(){if(q(1e3)){var a=new Image;a.src=w.getLogglyUrl()+"?"+t("double_tag",null,window.location.href).join("&")}}function s(a,b,c){var d=new Image;d.src=w.getLogglyUrl()+"?"+t(a,b,c).join("&")}function t(a,b,c){var d=[];return b&&(d.push("site_id="+b.id),d.push("mode="+b.mode),d.push("languageId="+b.languageId),d.push("tld="+b.tld),d.push("device="+b.devicePlatform),d.push("showPlugin="+b.showPlugin),d.push("position="+b.positionClass),d.push("rgId="+b.rgId),d.push("countryCode="+b.countryCode),b.exposed&&d.push("exposed="+b.exposed)),d.push("action="+a),c&&d.push("url="+encodeURIComponent(c)),d}function u(){Object.keys||(Object.keys=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b})}var v=_em_tag.require("cookies"),w=_em_tag.require("config"),x=d();u(),_em_tag.register("utils",{supportsCookies:a,supportsPageCookies:b,getIsIframe:c,guid:e,getUrlParams:f,launchFrame:h,loadScript:i,insertCss:j,reportError:k,loadJSON:m,serializeObjUri:n,hasJSON:l,isTestMode:g,replaceAll:o,logInvite:s,logDoubleTag:r})}(),function(){function a(a){this.topics={},this.star=[],this.context=a}a.prototype.subscribe=function(a,b){"*"===a?this.star.push(b):(a in this.topics||(this.topics[a]=[]),this.topics[a].push(b))},a.prototype.publish=function(a){var b;try{b=JSON.parse(a.data)}catch(c){b=null}if(null!==b){var d=b.message;if("undefined"!=typeof d){var e=null,f=0;if("object"==typeof this.topics[d])for(f=0;f<this.topics[d].length;f++)e=this.topics[d][f],this.context?e.call(this.context,b):e(b);for(f=0;f<this.star.length;f++)e=this.star[f],this.context?e.call(this.context,b):e(b)}}},_em_tag.register("pubsub",a)}(),function(){function a(a){var d={};return d.pu=window.location.href,d.ru=document.referrer,d.tz=(new Date).getTimezoneOffset()/-60,d.fv=c.get("_em_vt"),d.ft=c.get("_em_v"),d.fs=c.get("_em_s"),d.fd=c.get("_em_d"),d.fc=b.supportsPageCookies(),d.ii=b.getIsIframe(),d.ua=navigator.userAgent,d.ftm=b.isTestMode(),"undefined"!=typeof _em_survey_rate&&_em_survey_rate>0&&(d.fsr=_em_survey_rate),a===!0&&(d.skl=1),d}var b=_em_tag.require("utils"),c=_em_tag.require("cookies");_em_tag.register("page",{measure:a})}(),function(){function a(a){if(!a)return"";var b=encodeURIComponent(a);return b.length>128?b.substring(0,125)+"...":b}function b(b,c,e){var g=d.getSwitchUrl()+"?sl="+c.join(",")+"&vt="+b.visitorId+"&sid="+b.id;g+="&lid="+b.languageId,g+="&dc="+b.devicePlatform,g+="&tld="+b.tld,g+="&tc="+b.tc;var h=f.chrome||f.firefox||f.safari?b.showPlugin:0;return g+="&sp="+h,b.rgId&&(g+="&rg="+b.rgId+"&md="+b.mode,b.campaignId&&(g+="&cid="+b.campaignId)),e&&(g+="&lh="+a(e.hostname),g+="&lt="+a(e.pathname)),g}function c(a,c,g){"window"===a.launch||f.safari?window.open(b(a,c,g)):"overlay"===a.launch&&e.loadScript(d.getOverlayUrl(),function(){jQuery(function(){var f={useFrame:!0,css3Effects:"zoomIn",theme:d.get("theme"),href:b(a,c,g),responsive:!0,draggable:!1,width:800,height:600};jQuery.fn.speedoPopup(f),jQuery.noConflict(!0),e.logInvite("overlay_loaded",a)})})}var d=_em_tag.require("config"),e=_em_tag.require("utils"),f=_em_tag.require("bowser");_em_tag.register("launch",{open:c})}(),function(){function a(a){var b=a.plugins;b||(b=[]),b.unshift({name:"invitation",args:{invitation:a.invitation,surveys:a.surveys}});for(var c={},d=0;d<b.length;d++){var e=b[d],f=_em_tag.require("plugin."+e.name);"function"==typeof f&&f(e.args,c)}return c}_em_tag.register("plugins",{execute:a})}(),function(){function a(){return{closeButton:!0,closeHtml:'<button id="em-close-btn">&times;</button>',debug:!1,positionClass:"toast-top-left",onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"25000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut",tapToDismiss:!1}}function b(a){var b=d.getInvitationMarkup(),c={FEEDBACK:a.header?a.header:"Please share your feedback",IMAGE_URL:a.logoUrl?a.logoUrl:d.getImageUrl("logo.png"),MESSAGE:a.message?a.message:"We are conducting a quick survey to better understand our audience",CONFIRM:a.labelOk?a.labelOk:"Continue",CANCEL:a.labelCancel?a.labelCancel:"Cancel"};return b=e.replaceAll(b,c)}function c(c,f){var g=b(c),h=a();e.loadScript(d.getInvitationUrl("default"),function(){jQuery.extend(h,c),toastr.options=h;var a=toastr.success(g);jQuery("#em-ok-btn").bind("click",function(){toastr.clear(a),f(!0)}),jQuery("#em-cancel-btn").bind("click",function(){toastr.clear(a),f(!1)}),jQuery("#em-close-btn").bind("click",function(){e.logInvite("close",c)}),jQuery.noConflict(!0),e.logInvite("invite",c)})}var d=_em_tag.require("config"),e=_em_tag.require("utils");_em_tag.register("invitation",{open:c})}(),function(){function a(a){if(a.files)for(var c=0;c<a.files.length;c++){var d=a.files[c].url;b.loadScript(d)}}var b=_em_tag.require("utils");_em_tag.register("plugin.javascript",a)}(),function(){function a(a){if(a.pixel){var b=new Image;b.src=a.pixel}}_em_tag.register("plugin.neustar",a)}(),function(){function a(a){if(a.url){var b=new Image;b.src=a.url}}_em_tag.register("plugin.lotame",a)}(),function(){function a(a){if(a.pixel){var b=new Image;b.src=a.pixel}}_em_tag.register("plugin.ddp",a)}(),function(){function a(a){a&&"object"==typeof visitor&&"function"==typeof visitor.setCustomerIDs&&visitor.setCustomerIDs(a)}_em_tag.register("plugin.adobe",a)}(),function(){function a(a,b,c){var f=d.guid(),g=Math.floor((new Date).getTime()/1e3),j=document.getElementById(f);i.set("_em_"+a,g,b,c);var k={name:a,value:g,expires:b},l={message:"setCookie",payload:k};h.postMessage(JSON.stringify(l),e.getStorageFrameUrl(),j.contentWindow)}function b(b,c){b&&b.id&&c&&0!==c.length&&!d.getIsIframe()&&f.open(b,function(e){e?(a("s",b.ssec,b.tld),g.open(b,c,window.location),d.logInvite("start",b)):(a("d",b.dsec,b.tld),d.logInvite("reject",b))})}function c(a){b(a.invitation,a.surveys)}var d=_em_tag.require("utils"),e=_em_tag.require("config"),f=_em_tag.require("invitation"),g=_em_tag.require("launch"),h=_em_tag.require("postmessage"),i=_em_tag.require("cookies");_em_tag.register("plugin.invitation",c)}(),function(){function a(){var a=!0;return o>0&&(clearTimeout(o),o=-1),p&&(a=!1),a}function b(){a();var b=m.measure(p),c={message:"sendPayload",payload:b},d=document.getElementById(n);k.postMessage(JSON.stringify(c),i.getStorageFrameUrl(),d.contentWindow)}function c(b){a(),h.setItem(b.payload.visitor),h.setItem(b.payload.visit)}function d(b){a(),l.execute(b.payload)}function e(a){a="undefined"==typeof a?"#":"#"+a.toString().replace(/\W/g,"_");var b=m.measure();b.pu+=a,b.et="ajax";var c={message:"sendPayload",payload:b},d=document.getElementById(n);k.postMessage(JSON.stringify(c),i.getStorageFrameUrl(),d.contentWindow)}function f(){var a=m.measure();if("object"==typeof window._em)return void g.logDoubleTag();var f=g.getUrlParams();if(f._em_debug)return void g.loadScript(i.get("cdn")+"/js/em.debug.js",function(){});if(window._em={trackAjaxPageview:e},"undefined"!=typeof _em_image_only||!window.postMessage||!g.hasJSON()){var h=new Image;return void(h.src=i.getPayloadImageUrl()+"?"+g.serializeObjUri(a))}var l=new j;l.subscribe("getPayload",b),l.subscribe("update",c),l.subscribe("execPlugins",d),k.receiveMessage(function(a){l.publish(a)},function(a){return a.indexOf(i.get("cdn"))>=0}),o=setTimeout(function(){p=!0;var b=new Image;b.src=i.getPayloadImageUrl()+"?"+g.serializeObjUri(a)},i.getFrameTimeout()),g.launchFrame(i.getStorageFrameUrl(),n)}var g=_em_tag.require("utils"),h=_em_tag.require("cookies"),i=_em_tag.require("config"),j=_em_tag.require("pubsub"),k=_em_tag.require("postmessage"),l=_em_tag.require("plugins"),m=_em_tag.require("page"),n=g.guid(),o=-1,p=!1;f()}();