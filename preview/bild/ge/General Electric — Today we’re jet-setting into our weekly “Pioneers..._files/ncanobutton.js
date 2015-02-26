var NcaSettings = {url : "https://ndg.io",
                                            session_id:"338478370",
                                            time:1424941879,                         impression_id: 0}; 
var Ncapi=function(){function t(){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])arguments[t].hasOwnProperty(e)&&(arguments[0][e]=arguments[t][e]);return arguments[0]}function e(e,n,i,r){i.addEventListener?i.addEventListener(e,function(e){n&&t(e,{data:n,element:i}),r(e)},!1):i.attachEvent&&i.attachEvent("on"+e,function(e){n&&t(e,{data:n,element:i}),r(e)})}function n(){console&&console.log&&c&&console.log("nca_",arguments)}function i(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){var r=n[i].trim();if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}function r(t,e,n,i,r,a){document.cookie=t+"="+escape(e)+(n?";expires="+n:"")+(i?";path="+i:"")+(r?";domain="+r:"")+(a&&1==a?"; secure":"")}function a(t,e){try{var i,r=0,a=t.length,o=void 0===a||"function"==typeof t;if(o){for(i in t)if(e.call(t[i],i,t[i])===!1)break}else for(;a>r&&e.call(t[r],r,t[r++])!==!1;);}catch(s){n("Error",s)}return t}function o(){s.loadinterval=window.setInterval(function(){"complete"==document.readyState&&(clearTimeout(s.loadinterval),s.loaded())},100)}var s=this,c=!0,u="NcaGlobalObj";return EventStack=function(){this.q=[]},EventStack.prototype.isAfter=function(t,e){for(var n=0;n<this.q.length;n++){if(this.q[n]==t)return!0;if(this.q[n]==e)return!1}},EventStack.prototype.push=function(t){return this.q.push(t),this},EventStack.prototype.hasEvent=function(t){for(var e=0;e<this.q.length;e++)if(this.q[e]==t)return!0;return!1},this.eventStack=new EventStack,Nlist=function(){this.dct={},this.k=new Array},Nlist.prototype.put=function(t,e){this.dct[t]=e;var n=this.k.indexOf(t);return-1==n&&this.k.push(t),this},Nlist.prototype.get=function(t){return this.dct[t]},Nlist.prototype.remove=function(t){var e=this.k.indexOf(t);return-1!=e&&(this.k.splice(e,1),delete this.dct[t]),this},Nlist.prototype.clear=function(){this.dct={},this.k=new Array},Nlist.prototype.size=function(){return this.k.length},Nlist.prototype.query=function(){var t=[];for(var e in this.dct)this.dct.hasOwnProperty(e)&&t.push(encodeURIComponent(e)+"="+encodeURIComponent(this.dct[e]));return t.join("&")},Nlist.prototype.send=function(t,e){var n=new Image(1,1);if(n.src=t+"?"+this.query(),"function"==typeof e)if(n.complete)e();else{var i=!1;n.addEventListener("load",function(){1!=i&&e(),i=!0}),setTimeout(function(){1!=i&&(e(),i=!0)},4e3)}},EventCatcher=function(){return{elements:[],init:function(){},versionCompare:function(t,e,n){for(var i,r,a=t.split("."),o=n.split("."),s=0,c=0,u=o.length;u>c;c++){if(i=parseInt(a[c],10)||0,r=parseInt(o[c],10)||0,r>i){s=-1;break}if(i>r){s=1;break}}if("<"===e)return-1===s;if("<="===e)return-1===s||0===s;if("=="===e)return 0===s;if(">="===e)return 0===s||1===s;if(">"===e)return 1===s;throw"Unknown operator: "+e}}},this.Utils=function(){return{Tld:function(){var t=location.host,e=t.split("."),n=e.length;return"com"==e[n-1]||"net"==e[n-1]||"org"==e[n-1]?e[n-2]+"."+e[n-1]:t},getDate:function(t){var e=new Date;return e.setMinutes(e.getMinutes()+t),e},repeat:function(t,e){for(var n="",i=0;e>i;i++)n+=t;return n}}}(),this.iTracker=function(t,e){var n=t.parentNode;this.TrackerList=this.TrackerList||[],t.parentNode?a(this.TrackerList,function(e,i){i==t.parentNode&&(n=t)}):n=t,this.TrackerList.push(n),this.plugins.iTracker.add(t,e)},this.initGcna=function(){var t,e=window,n=e[u],i=[];n&&"function"==typeof e[n]&&(t=e[n].q)&&a(t,function(t,e){e[0]&&"string"==typeof e[0]&&"Account"==e[0]?i.push({key:e[0].toLowerCase(),val:e[1]}):e[0]&&"string"==typeof e[0]&&"Button"==e[0]&&s.addCustomButtons(e)}),s.initImpression(i)},this.checkIframeParent=function(){if(parent!==window){var t=document.referrer;this.plugins.transport.doPostMessage("nca_iframe_child",t),this.plugins.transport.doReceiveMessage(function(t){-1!==t.data.indexOf("referrer:")&&(s.eventStack.push("Got Original referral"),window[window[u]]("original_referral",t.data.split(":::")[1]))},function(e){e=e.replace(/http(s)?:\/\/(www\.)?/,"");var n=t.replace(/http(s)?:\/\/(www\.)?/,"");return n=n.replace(/\/.*/,""),n==e?!0:!1})}},this.gcnaParam=function(t){var e,n=window,i=n[u],r="";return i&&"function"==typeof n[i]&&(e=n[i].q)&&a(e,function(e,n){return n[0]&&"string"==typeof n[0]&&n[0]==t?(r=n[1],!1):void 0}),r},this.addCustomButtons=function(t){if("string"!=typeof t[0]||"Button"!=t[0])return!1;var i=t[1],r=t[2];return"function"==typeof r&&(r=r()),"string"==typeof r?r=document.getElementById(r):"function"==typeof r&&(r=r()),"object"!=typeof r?(n("warning"," {message:Unable to bind button to non object}"),!1):(n("event"," {binded:"+i+",from:custom}"),void e("click",{},r,function(){n("event"," {tracked:"+i+"}"),s.plugins.ncaevents.notifyShare(i)}))},this.initImpression=function(t){var e=document;"indexOf"in Array.prototype||(Array.prototype.indexOf=function(t,e){void 0===e&&(e=0),0>e&&(e+=this.length),0>e&&(e=0);for(var n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1});var n=function(){s.plugins.transport.doReceiveMessage(function(t){s.plugins.ncaevents.impressionCompleted(t.data,o)},function(t){t=t.replace(/http(s)?:\/\/(www\.)?/,"");var e=NcaSettings.url.replace(/http(s)?:\/\/(www\.)?/,"");return e=e.replace(/\/.*/,""),e==t?!0:!1})},o=function(t){for(var n=e.getElementsByTagName("meta"),i=e.getElementsByTagName("title"),r=new Nlist,a=0;a<n.length;a++){var o=n[a].getAttribute("property"),s=n[a].getAttribute("name"),c=n[a].getAttribute("content");o&&-1!=["og:description","og:title","twitter:title","twitter:image:src","twitter:description"].indexOf(o.toLowerCase())&&r.put("meta_"+o,c),s&&-1!=["title","description"].indexOf(s.toLowerCase())&&r.put("meta_"+s,c)}"undefined"==typeof i[0]||r.get("title")||r.put("meta_title",i[0].innerHTML),r.put("impression",t),r.put("token",NcaSettings.session_id),r.send(NcaSettings.url+"/impression_meta/")},c=function(){var e={};e._ncsc=i("_ncsc");var n=document.referrer||"";if(window!==parent){var r=s.gcnaParam("original_referral");"undefined"!=typeof r&&(n=r)}return e.referrer=n,("object"==typeof t||"array"==typeof t)&&a(t,function(t,n){"undefined"==typeof e[n.key]&&(e[n.key]=n.val)}),NcaSettings.impression_id&&NcaSettings.impression_id>0?e.i_id=NcaSettings.impression_id:e.url=window.location.href,e};!function(){var t,e=i("_ncsc");if(e){var n=e.split("."),a=n[0].split("-");t=NcaSettings.session_id+"-"+a[0]+"."+n[1]+"."+n[3]+"."+NcaSettings.time,r("_ncsc",t,s.Utils.getDate(30).toGMTString(),"/",s.Utils.Tld())}else t=NcaSettings.session_id+s.Utils.repeat("."+NcaSettings.time,3),r("_ncsc",t,s.Utils.getDate(30).toGMTString(),"/",s.Utils.Tld())}();var u=c(),d=new Nlist;for(var l in u)d.put(l,u[l]);s.eventStack.push("Collect request"),d.send(NcaSettings.url+"/collect/",function(){s.eventStack.push("Iframe request"),u="token="+NcaSettings.session_id,NcaSettings.impression_id&&NcaSettings.impression_id>0&&(u+="&i_id="+NcaSettings.impression_id),s.eventStack.hasEvent("Got Original referral")&&!s.eventStack.isAfter("Got Original referral","Collect request")&&(u+="&referrer="+s.gcnaParam("original_referral"));var t=document.getElementsByTagName("body")[0],i=e.createElement("iframe");i.style.width="0px",i.style.height="0px",i.style.overflow="hidden",i.style.display="none",i.style.visibility="hidden",i.frameBorder=0,i.setAttribute("src",NcaSettings.url+"/nobutton/?"+u),"undefined"!=typeof t&&(t.appendChild(i),s.target=i,n())})},this.loaded=function(t){if("undefined"==typeof this.readylist&&(this.readylist=[]),"undefined"!=typeof t)"complete"==document.readyState?t():this.readylist.push(t);else{var e=this.gcnaParam("DomWait");e=e||3e3,window.setTimeout(function(){for(var t=0;t<s.readylist.length;t++)s.readylist[t]()},e)}},this.addNetworks=function(){var t=this;a(["facebook","twitter","google","linkedin","pinterest","addthis","sharethis","stumbleupon","tumblr","reddit","digg","myspace","fancy","flipboard","shareaholic","sharedaddy"],function(e,n){t.plugins.networks[n]()})},this.plugins={},o(),t(this.plugins,{ncaevents:{notifyShare:function(t){s.plugins.transport.doPostMessage(t,NcaSettings.url,s.target)},impressionCompleted:function(t,e){parseInt(t)>1&&e(t)},shareCallback:function(t,e){s.plugins.transport.doReceiveMessage(function(n){n.data=="complete:"+t&&e()},function(t){t=t.replace(/http(s)?:\/\/(www\.)?/,"");var e=NcaSettings.url.replace(/http(s)?:\/\/(www\.)?/,"");return e=e.replace(/\/.*/,""),e==t?!0:!1})}},transport:{interval_id:"",last_hash:"",cache_bust:1,rm_callback:function(){},window:window,FALSE:!1,postMessage:"postMessage",addEventListener:"addEventListener",p_receiveMessage:function(){},has_postMessage:window.postMessage,param:function(t){var e=[],n=function(t,n){n="function"==typeof n?n():n,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)};return a(t,function(){n(this.name,this.value)}),e.join("&").replace("r20","+")},doPostMessage:function(t,e,i){e&&(t="string"==typeof t?t:this.param(t),n("transport","{message: "+t+"}"),this.has_postMessage?(n("transport","{postmessage: "+t+"}"),"undefined"==typeof i?parent[this.postMessage](t,e.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):i.contentWindow[this.postMessage](t,e.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))):e&&(i.location=e.replace(/#.*$/,"")+"#"+ +new Date+this.cache_bust++ +"&"+t))},doReceiveMessage:this.p_receiveMessage=function(t,e,n){this.has_postMessage?(t&&(this.rm_callback&&this.p_receiveMessage(),this.rm_callback=function(n){return"string"==typeof e&&n.origin!==e||"function"==typeof e&&e(n.origin)===!1?!1:void t(n)}),window[this.addEventListener]?window[t?this.addEventListener:"removeEventListener"]("message",this.rm_callback,!1):window[t?"attachEvent":"detachEvent"]("onmessage",this.rm_callback)):(this.interval_id&&clearInterval(this.interval_id),this.interval_id=null,t&&(n="number"==typeof e?e:"number"==typeof n?n:100,this.interval_id=setInterval(function(){var e=document.location.hash,n=/^#?\d+&/;e!==this.last_hash&&n.test(e)&&(this.last_hash=e,t({data:e.replace(n,"")}))},n)))}},networks:{facebook:function(){var t=this,i=function(){return t.fb_triggered&&new Date-t.fb_triggered<7e3?!0:(t.fb_triggered=new Date,!1)};t.addFacebookFrame=function(t){"undefined"!=typeof t&&(n("event"," {binded:facebook,from:frame}"),s.iTracker(t,{blurCallback:function(){i()||(n("event"," {tracked:facebook,from:frame}"),s.plugins.ncaevents.notifyShare("facebook"))}}))};var r=document.getElementsByTagName("a");a(r,function(t,i){try{("object"==typeof i&&i.getAttribute("href")&&i.getAttribute("href").match(/facebook\.com\/(sharer\/)?sharer\.php/)||i.getAttribute("onclick")&&i.getAttribute("onclick").match(/facebook\.com\/(sharer\/)?sharer\.php/))&&(n("event"," {binded:facebook}"),e("click",{},i,function(){n("event"," {tracked:facebook}"),s.plugins.ncaevents.notifyShare("facebook")}))}catch(r){n("Error",r)}});try{"undefined"!=typeof FB&&FB.Event.subscribe("message.send",function(){i()||(n("event"," {triggered_native:facebook}"),s.plugins.ncaevents.notifyShare("facebook"))})}catch(o){n("Error",o)}var c=document.getElementsByTagName("iframe");a(c,function(e,n){n.src.match(/facebook\.com\/plugins\/share_button\.php/)?t.addFacebookFrame(n):n.src.match(/facebook\.com\/plugins\/like\.php/)&&t.addFacebookFrame(n)})},twitter:function(){var t=this,i=document.getElementsByTagName("a"),r=function(){return t.tw_triggered&&new Date-t.tw_triggered<7e3?!0:(t.tw_triggered=new Date,!1)};t.addTwitterFrame=function(t){"undefined"!=typeof t&&(n("event"," {binded:twitter,from:frame}"),s.iTracker(t,{blurCallback:function(){r()||(n("event"," {tracked:twitter,from:frame}"),s.plugins.ncaevents.notifyShare("twitter"))}}))},a(i,function(i,r){var a=r.getAttribute("href"),o=r.getAttribute("onclick");(a&&a.match(/twitter\.com\/share/)||o&&o.match(/twitter\.com\/share/)||o&&o.match(/twitter\.com\/intent\/tweet/)||a&&a.match(/twitter\.com\/intent\/tweet/)||o&&o.match(/twitter\.com\/home(.*)status=/)||a&&a.match(/twitter\.com\/home(.*)status=/))&&(n("event"," {binded:twitter}"),e("DOMNodeRemoved",{},r,function(){var e,n=r.parentNode;window.setTimeout(function(){function i(t,e){t=t.childNodes;for(var n=0;n<t.length;n++)if(t[n]&&t[n].tagName&&"iframe"==t[n].tagName.toLowerCase()){if(t[n].src.match(/platform\.twitter.com\/widgets\/tweet_button/)){e=t[n].parentNode;break}}else t[n]&&t[n].hasChildNodes()&&i(t[n],e);return e}e=i(n,e),e&&t.addTwitterFrame(e)},200)}),e("click",{},r,function(){n("event"," {tracked:twitter,from:anchor}"),s.plugins.ncaevents.notifyShare("twitter")}))}),"undefined"!=typeof twttr&&twttr.ready(function(t){t.events.bind("tweet",function(){r()||(n("event"," {tracked_native:twitter}"),s.plugins.ncaevents.notifyShare("twitter"))})});var o=document.getElementsByTagName("iframe");a(o,function(e,n){n.src.match(/platform\.twitter.com\/widgets\/tweet_button/)&&t.addTwitterFrame(n)})},google:function(){var t=this;t.addGoogleFrame=function(t){"undefined"!=typeof t&&(n("event"," {binded:google,from:frame}"),s.iTracker(t,{blurCallback:function(){n("event"," {tracked:google,from:frame}"),s.plugins.ncaevents.notifyShare("google")}}))};var i=document.getElementsByTagName("a");a(i,function(t,i){var r=i.getAttribute("href"),a=i.getAttribute("onclick");(r&&r.match(/plus\.google\.com\/share/)||a&&a.match(/plus\.google\.com\/share/))&&(n("event"," {binded:google}"),e("click",{},i,function(){n("event"," {tracked:google}"),s.plugins.ncaevents.notifyShare("google")}))});var r=document.getElementsByTagName("iframe");a(r,function(e,n){n.src.match(/http(s)?:\/\/apis\.google\.com[\S]*fastbutton/)&&t.addGoogleFrame(n)})},linkedin:function(){var t=document.getElementsByTagName("a"),i=this;i.addLinkedinFrame=function(t){"undefined"!=typeof t&&(n("event"," {binded:linkedin,from:frame}"),s.iTracker(t,{blurCallback:function(){n("event"," {tracked:linkedin}"),s.plugins.ncaevents.notifyShare("linkedin")}}))},a(t,function(t,i){var r=i.getAttribute("href"),a=i.getAttribute("onclick");(r&&r.match(/linkedin\.com\/shareArticle/)||a&&a.match(/linkedin\.com\/shareArticle/))&&(n("event"," {binded:linkedin}"),e("click",{},i,function(){n("event"," {tracked:linkedin}"),s.plugins.ncaevents.notifyShare("linkedin")}))});var r=document.getElementsByTagName("span");a(r,function(t,e){if("inShare"==e.textContent){var n=e,r=!1;do"IN-widget"==n.parentNode.getAttribute("class")&&(r=!0,i.addLinkedinFrame(n)),n=n.parentNode;while(!r&&"body"!=n.tagName.toLowerCase()&&"html"!=n.tagName.toLowerCase())}})},pinterest:function(){var t=document.getElementsByTagName("a"),i=!1;a(t,function(t,r){var a=r.getAttribute("href"),o=r.getAttribute("onclick");(a&&a.match(/pinterest\.com\/pin\/create\/button/)||o&&o.match(/pinterest\.com\/pin\/create\/button/)||a&&a.match(/assets\.pinterest.com\/js\/pinmarklet\.js/))&&(i=!0,n("event"," {binded:pinterest}"),e("click",{},r,function(){n("event"," {tracked:pinterest}"),s.plugins.ncaevents.notifyShare("pinterest")}))}),i||(t=document.getElementsByTagName("a"),a(t,function(t,i){i.getAttribute("class")&&i.getAttribute("class").match(/pin_it_button/)&&(n("event"," {binded:pinterest}"),e("click",{},i,function(){n("event"," {tracked:pinterest}"),s.plugins.ncaevents.notifyShare("pinterest")}))}))},stumbleupon:function(){var t=this;t.addStumbleuponFrame=function(t){"undefined"!=typeof t&&(n("event"," {binded:stumbleupon,from:frame}"),s.iTracker(t,{blurCallback:function(){n("event"," {tracked:stumbleupon,from:frame}"),s.plugins.ncaevents.notifyShare("stumbleupon")}}))};var i=document.getElementsByTagName("a");a(i,function(t,i){i.getAttribute("href")&&i.getAttribute("href").match(/stumbleupon\.com\/submit/)&&(n("event"," {binded:stumbleupon}"),e("click",{},i,function(){n("event"," {tracked:stumbleupon}"),s.plugins.ncaevents.notifyShare("stumbleupon")}))});var r=document.getElementsByTagName("iframe");a(r,function(e,n){n.src.match(/stumbleupon\.com\/badge\/embed/)&&t.addStumbleuponFrame(n)})},tumblr:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){var r=i.getAttribute("href");r&&(r.match(/tumblr\.com\/share/)||r.match(/tumblr\.com\/reblog/))&&(n("event"," {binded:tumblr}"),e("click",{},i,function(t){t.defaultPrevented||(t.preventDefault(),s.plugins.ncaevents.shareCallback("tumblr",function(){window.location=r}),window.setTimeout(function(){window.location=r},2e3)),n("event"," {tracked:tumblr}"),s.plugins.ncaevents.notifyShare("tumblr")}))})},reddit:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){var r=i.getAttribute("href"),a=i.getAttribute("onclick");(r&&r.match(/reddit\.com\/submit/)||a&&a.match(/reddit\.com\/submit/))&&(n("event"," {binded:reddit}"),e("click",{},i,function(){n("event"," {tracked:reddit}"),s.plugins.ncaevents.notifyShare("reddit")}))})},digg:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){i.getAttribute("href")&&i.getAttribute("href").match(/digg\.com\/submit/)&&(n("event"," {binded:digg}"),e("click",{},i,function(){n("event"," {tracked:digg}"),s.plugins.ncaevents.notifyShare("digg")}))})},myspace:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){i.getAttribute("href")&&i.getAttribute("href").match(/myspace\.com\/Modules\/PostTo/)&&(n("event"," {binded:myspace}"),e("click",{},i,function(){n("event"," {tracked:myspace}"),s.plugins.ncaevents.notifyShare("myspace")}))})},fancy:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){i.getAttribute("href")&&i.getAttribute("href").match(/thefancy\.com\/fancyit/)&&(n("event"," {binded:fancy}"),e("click",{},i,function(){n("event"," {tracked:fancy}"),s.plugins.ncaevents.notifyShare("fancy")}))})},flipboard:function(){var t=document.getElementsByTagName("a");a(t,function(t,i){i.getAttribute("href")&&i.getAttribute("href").match(/share\.flipboard\.com\/bookmarklet/)&&(n("event"," {binded:flipboard}"),e("click",{},i,function(){n("event"," {tracked:flipboard}"),s.plugins.ncaevents.notifyShare("flipboard")}))})},addthis:function(){"undefined"!=typeof addthis&&addthis.addEventListener("addthis.menu.share",function(t){s.plugins.ncaevents.notifyShare(t.data.service)})},sharethis:function(){"undefined"!=typeof stLight&&stLight.subscribe("click",function(t,e){s.plugins.ncaevents.notifyShare(e)})},shareaholic:function(){for(var t=document.getElementsByTagName("li"),i=!1,r=0;r<t.length;r++)if(t[r].getAttribute("class")&&-1!=t[r].getAttribute("class").indexOf("shareaholic-share-button")){var a=t[r].getAttribute("data-service");if(a&&-1!=["facebook","twitter","google_plus","pinterest","linkedin","stumbleupon","reddit","digg","bebo","tumblr","fancy","flipboard","delicious"].indexOf(a)){var o=a;"google_plus"==a&&(o="google"),i=!0,n("event"," {binded:"+o+"}"),e("click",{},t[r],function(t){a=t.element.getAttribute("data-service");var e=a;"google_plus"==a&&(e="google"),n("event"," {tracked:"+e+"}"),s.plugins.ncaevents.notifyShare(e)})}}for(var c=document.getElementsByTagName("a"),r=0;r<c.length;r++)c[r].getAttribute("class")&&-1!=c[r].getAttribute("class").indexOf("shareaholic-tweetbutton")&&(n("event"," {binded:twitter}"),e("click",{},c[r],function(){n("event"," {tracked:twitter}"),s.plugins.ncaevents.notifyShare("twitter")}));if(!i)for(var t=document.getElementsByTagName("li"),r=0;r<t.length;r++)if(t[r].getAttribute("class")&&-1!=t[r].getAttribute("class").indexOf("shareaholic")){var u=t[r].firstChild?t[r].firstChild.innerHTML:"",d=new RegExp("facebook|twitter|google|pinterest","ig");if(a=d.exec(u)){var o=a[0].toLowerCase();n("event"," {binded:"+o+"}"),e("click",{},t[r],function(t){u=t.element.firstChild?t.element.firstChild.innerHTML:"",a=d.exec(u),o=a[0].toLowerCase(),n("event"," {tracked:"+o+"}"),s.plugins.ncaevents.notifyShare(o)})}}},sharedaddy:function(){for(var t=document.getElementsByTagName("a"),i=0;i<t.length;i++)if(t[i].getAttribute("class")&&-1!=t[i].getAttribute("class").indexOf("share-")){var r=t[i].getAttribute("class").match(/twitter|reddit|google|facebook|pinterest/g);r&&(n("event"," {binded:"+r+"}"),e("click",{},t[i],function(t){r=t.element.getAttribute("class").match(/twitter|reddit|google|facebook|pinterest/g).pop(),n("event"," {tracked:"+r+"}"),s.plugins.ncaevents.notifyShare(r)}))}},custom:function(){}},iTracker:{add:function(t,n){this.handlersList.push(n);var i=this;e("mouseover",{handler:n},t,function(t){document.activeElement&&document.activeElement.blur(),t.data.handler.over=!0,window.focus(),i.focusRetrieved=!0}),e("mouseout",{handler:n},t,function(t){t.data.handler.over=!1})},focusRetriever:null,hasWindowFocus:!1,focusRetrieved:!1,handlersList:[],isIE8AndOlder:!1,frames:[],init:function(){var t=this;try{var n=navigator.userAgent.match(/(msie) ([\w.]+)/i);n&&n[2]<9&&(this.isIE8AndOlder=!0)}catch(i){}window.focus(),t.hasWindowFocus=!0,e("blur",{},window,function(e){t.windowLoseFocus(e),t.hasWindowFocus=!1}),e("focus",{},window,function(){t.hasWindowFocus=!0});var r=document.createElement("div"),a=document.createElement("input");a.setAttribute("type","text"),r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.overflow="hidden",a.style.position="absolute",a.style.left="-300px",this.focusRetriever=a,r.appendChild(a);var o=document.getElementsByTagName("body");if(o&&o[0].appendChild(r),this.focusRetrieved=!1,e("mousemove",{},document,function(){"IFRAME"==document.activeElement.tagName&&(t.focusRetriever.focus(),t.focusRetrieved=!0)}),e("blur",{},this.focusRetriever,function(e){e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1,t.windowLoseFocus(e)}),this.isIE8AndOlder){e("click",{},o,function(){window.focus()});for(var s=getElementsByTagName("form"),c=0;c<s.length;c++)e("click",{},s[c],function(t){t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0})}},windowLoseFocus:function(){for(var t in this.handlersList)if(1==this.handlersList[t].over)try{var e=this.handlersList[t].hit,n=(new Date).getTime();if(e&&1e3>n-e)return;this.handlersList[t].hit=(new Date).getTime(),this.handlersList[t].blurCallback()}catch(i){}return!0}}}),this.loaded(function(){s.eventStack.push("Loaded"),s.plugins.iTracker.init(),s.addNetworks()}),s.eventStack.push("Execution started"),s.checkIframeParent(),s.initGcna(),this};window.Ncapi=new Ncapi;