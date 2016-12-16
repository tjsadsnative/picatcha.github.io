try{(function(e){var t,n,r,i=e.document;typeof BOOMR=="undefined"&&(BOOMR={});if(BOOMR.version)return;typeof ns_rum=="undefined"&&(ns_rum={}),ns_rum.version="6",BOOMR.version="0.9",t={beacon_url:("https:"==document.location.protocol?"https://":"http://")+"rum-collector.wpm.neustar.biz/beacon",site_domain:e.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),user_ip:"",events:{page_ready:[],page_unload:[],visibility_changed:[],before_beacon:[]},vars:{},disabled_plugins:{},fireEvent:function(e,t){var n,r,i;if(!this.events.hasOwnProperty(e))return!1;i=this.events[e];for(n=0;n<i.length;n++)r=i[n],r[0].call(r[2],t,r[1]);return!0},addListener:function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n)}},n={utils:{getCookie:function(e){if(!e)return null;e=" "+e+"=";var t,n;return n=" "+i.cookie+";",(t=n.indexOf(e))>=0?(t+=e.length,n=n.substring(t,n.indexOf(";",t)),n):null},setCookie:function(e,n,r,s,o,u){var a="",f,l,c,h="";if(!e)return!1;for(f in n)n.hasOwnProperty(f)&&(a+="&"+encodeURIComponent(f)+"="+encodeURIComponent(n[f]));return a=a.replace(/^&/,""),r&&(h=new Date,h.setTime(h.getTime()+r*1e3),h=h.toGMTString()),l=e+"="+a,c=l+(r?"; expires="+h:"")+(s?"; path="+s:"")+(typeof o!="undefined"?"; domain="+(o!==null?o:t.site_domain):"")+(u?"; secure":""),l.length<4e3?(i.cookie=c,a===this.getCookie(e)):!1},getSubCookies:function(e){var t,n,r,i,s={};if(!e)return null;t=e.split("&");if(t.length===0)return null;for(n=0,r=t.length;n<r;n++)i=t[n].split("="),i.push(""),s[decodeURIComponent(i[0])]=decodeURIComponent(i[1]);return s},removeCookie:function(e){return this.setCookie(e,{},0,"/",null)},pluginConfig:function(e,t,n,r){var i,s=0;if(!t||!t[n])return!1;for(i=0;i<r.length;i++)typeof t[n][r[i]]!="undefined"&&(e[r[i]]=t[n][r[i]],s++);return s>0}},init:function(n){var r,s,o=["beacon_url","site_domain","user_ip"];n||(n={});for(r=0;r<o.length;r++)typeof n[o[r]]!="undefined"&&(t[o[r]]=n[o[r]]);typeof n.log!="undefined"&&(this.log=n.log),this.log||(this.log=function(e,t,n){});for(s in this.plugins){if(n[s]&&typeof n[s].enabled!="undefined"&&n[s].enabled===!1){t.disabled_plugins[s]=1;continue}t.disabled_plugins[s]&&delete t.disabled_plugins[s],this.plugins.hasOwnProperty(s)&&typeof this.plugins[s].init=="function"&&this.plugins[s].init(n)}return(typeof n.autorun=="undefined"||n.autorun!==!1)&&t.addListener(e,"load",function(){t.fireEvent("page_ready")}),t.addListener(i,"webkitvisibilitychange",function(){t.fireEvent("visibility_changed")}),t.addListener(e,"unload",function(){e=null}),this},page_ready:function(){return t.fireEvent("page_ready"),this},subscribe:function(n,r,i,s){var o,u,a;if(!t.events.hasOwnProperty(n))return this;a=t.events[n];for(o=0;o<a.length;o++){u=a[o];if(u[0]===r&&u[1]===i&&u[2]===s)return this}return a.push([r,i||{},s||null]),n==="page_unload"&&(t.addListener(e,"unload",function(){r&&r.call(s,null,i),r=s=i=null}),t.addListener(e,"beforeunload",function(){r&&r.call(s,null,i),r=s=i=null})),this},addVar:function(e,n){if(typeof e=="string")t.vars[e]=n;else if(typeof e=="object"){var r=e,i;for(i in r)r.hasOwnProperty(i)&&(t.vars[i]=r[i])}return this},removeVar:function(){var e,n;if(!arguments.length)return this;arguments.length===1&&Object.prototype.toString.apply(arguments[0])==="[object Array]"?n=arguments[0]:n=arguments;for(e=0;e<n.length;e++)t.vars.hasOwnProperty(n[e])&&delete t.vars[n[e]];return this},sendBeacon:function(){var e,n,r,s=0;for(e in this.plugins)if(this.plugins.hasOwnProperty(e)){if(t.disabled_plugins[e])continue;if(!this.plugins[e].is_complete())return this}t.fireEvent("before_beacon",t.vars);if(!t.beacon_url)return this;if(ns_rum.beacon_sent)return this;n=t.beacon_url+"?u="+encodeURIComponent(i.URL.replace(/#.*/,""));try{var o=5;if(typeof ns_rum!="undefined"&&typeof ns_rum.errors!="undefined"){BOOMR.addVar("error_count",ns_rum.errors.length),error_json="[";var u=ns_rum.errors;u=u.slice(0,o);for(var a=0;a<u.length;a++){var f=u[a],l=f.url.split("/"),c=l[l.length-1];error_json+='["'+c.substr(0,50)+'","'+f.line+'","'+f.msg.substr(0,100)+'"]',u.length>1&&(error_json+=",")}error_json+="]",BOOMR.addVar("errors",error_json)}}catch(f){console.log("RUM beacon error: "+f)}if(t_pagestart){var h=(new Date).getTime(),p=h-ns_rum.t_onload;BOOMR.addVar("pl_offset",p)}for(e in t.vars)t.vars.hasOwnProperty(e)&&(s++,n+="&"+encodeURIComponent(e)+"="+encodeURIComponent(t.vars[e]));return s&&(r=new Image,r.src=n,ns_rum.beacon_sent=!0),this}};var s=function(e){return function(t,n){return this.log(t,e,"boomerang"+(n?"."+n:"")),this}};n.debug=s("debug"),n.info=s("info"),n.warn=s("warn"),n.error=s("error"),e.YAHOO&&e.YAHOO.widget&&e.YAHOO.widget.Logger?n.log=e.YAHOO.log:typeof e.Y!="undefined"&&typeof e.Y.log!="undefined"?n.log=e.Y.log:typeof console!="undefined"&&typeof console.log!="undefined"&&(n.log=function(e,t,n){console.log(n+": ["+t+"] ",e)});for(r in n)n.hasOwnProperty(r)&&(BOOMR[r]=n[r]);BOOMR.plugins=BOOMR.plugins||{}})(window),function(e){var t=e.document;BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var n={complete:!1,timers:{},cookie:"Webmetrics-RUM",cookie_exp:600,strict_referrer:!0,navigationStart:undefined,responseStart:undefined,start:function(){var e,n=(new Date).getTime();return this.cookie?BOOMR.utils.setCookie(this.cookie,{s:n,r:t.URL.replace(/#.*/,"")},this.cookie_exp,"/",null)?(e=(new Date).getTime(),e-n>50&&(BOOMR.utils.removeCookie(this.cookie),BOOMR.error("took more than 50ms to set cookie... aborting: "+n+" -> "+e,"rt")),this):(BOOMR.error("cannot set start cookie","rt"),this):this},initNavTiming:function(){var t,n;if(this.navigationStart)return;n=e.performance||e.msPerformance||e.webkitPerformance||e.mozPerformance,n&&n.timing?t=n.timing:e.chrome&&e.chrome.csi?(t={navigationStart:e.chrome.csi().startE,responseStart:undefined},BOOMR.addVar("rt.start","csi")):e.gtbExternal&&(t={navigationStart:e.gtbExternal.startE(),responseStart:undefined},BOOMR.addVar("rt.start","gtb")),t&&(BOOMR.addVar("rt.start","navigation"),this.navigationStart=t.navigationStart||undefined,this.responseStart=t.responseStart||undefined);return}};BOOMR.plugins.RT={init:function(e){return n.complete=!1,n.timers={},BOOMR.utils.pluginConfig(n,e,"RT",["cookie","cookie_exp","strict_referrer"]),BOOMR.subscribe("page_ready",this.done,null,this),BOOMR.subscribe("page_unload",n.start,null,n),this},startTimer:function(e,t){return e&&(e==="t_page"&&this.endTimer("t_resp",t),n.timers[e]={start:typeof t=="number"?t:(new Date).getTime()},n.complete=!1),this},endTimer:function(e,t){return e&&(n.timers[e]=n.timers[e]||{},typeof n.timers[e].end=="undefined"&&(n.timers[e].end=typeof t=="number"?t:(new Date).getTime())),this},setTimer:function(e,t){return e&&(n.timers[e]=n.timers[e]||{},n.timers[e].delta=t),this},done:function(){var e,r,i,s,o={t_done:1,t_page:1},u=0,a,f,l=[];if(n.complete)return this;n.initNavTiming();if(document.webkitVisibilityState&&document.webkitVisibilityState==="prerender")return this.startTimer("t_load",n.navigationStart),this.endTimer("t_load"),this.startTimer("t_prerender",n.navigationStart),this.startTimer("t_postrender"),BOOMR.subscribe("visibility_changed",this.done,null,this),this;this.endTimer("t_done"),n.responseStart?(this.setTimer("t_resp",n.responseStart-n.navigationStart),n.timers.t_load?this.setTimer("t_page",n.timers.t_load.end-n.responseStart):n.timers.hasOwnProperty("t_page")&&n.timers.t_page.end?this.setTimer("t_page",n.timers.t_page.end-n.responseStart):this.setTimer("t_page",(new Date).getTime()-n.responseStart)):n.timers.hasOwnProperty("t_page")&&this.endTimer("t_page"),n.timers.hasOwnProperty("t_postrender")&&(this.endTimer("t_postrender"),this.endTimer("t_prerender")),r=i=t.referrer.replace(/#.*/,""),e=n.navigationStart;if(e)BOOMR.addVar("rt.start","navigation");else if(n.cookie){s=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(n.cookie)),BOOMR.utils.removeCookie(n.cookie);if(s!==null&&typeof s.s!="undefined"&&typeof s.r!="undefined"){r=s.r;if(!n.strict_referrer||r===i)e=parseInt(s.s,10)}e&&BOOMR.addVar("rt.start","cookie")}BOOMR.removeVar("t_done","t_page","t_resp","r","r2");for(a in n.timers){if(!n.timers.hasOwnProperty(a))continue;f=n.timers[a],typeof f.delta!="number"&&(typeof f.start!="number"&&(f.start=e),f.delta=f.end-f.start);if(isNaN(f.delta))continue;o.hasOwnProperty(a)?BOOMR.addVar(a,f.delta):l.push(a+"|"+f.delta),u++}return u&&(BOOMR.addVar("r",r),i!==r&&BOOMR.addVar("r2",i)),n.timers={},n.complete=!0,this},is_complete:function(){return n.complete}}}(window),function(e){BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var t={complete:!1,done:function(){var t=1.5,n=100,r=function(e,t){return t.lt-e.lt},i=function(e){var t=Math.floor(e.length/2),n;return e.length%2?n=e[t].lt:n=(e[t-1].lt+e[t].lt)/2,n},s=function(e){if(e.length<3)return 0;var t=e.slice(0,e.length/2),n=e.slice(e.length/2,e.length),r={q1:i(n),q2:i(e),q3:i(t)};return r},o,u,a,f,l;o=e.performance||e.msPerformance||e.webkitPerformance||e.mozPerformance;if(o&&o.timing&&o.navigation){u=e.performance.navigation,a=e.performance.timing,f={nt_redirectCount:u.redirectCount,nt_navigationType:u.type,nt_redirectTime:a.redirectEnd-a.redirectStart,nt_dnsTime:a.domainLookupEnd-a.domainLookupStart,nt_connectTime:a.connectEnd-a.connectStart,nt_firstPacket:a.responseStart-a.navigationStart,nt_domReady:a.domContentLoadedEventStart-a.navigationStart,nt_pageDone:a.loadEventStart-a.navigationStart},a.secureConnectionStart&&(f.nt_sslTime=a.connectEnd-a.secureConnectionStart),o.getEntriesByType?l=o.getEntriesByType("resource"):o.webkitGetEntriesByType&&(l=o.webkitGetEntriesByType("resource"));if(l){var c=function(e){if(!e||e==="")return 0;var t={},n=/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/,r=e.match(n);return t.scheme=r[1]||null,t.authority=r[2]||null,t.path=r[3].slice(1)||null,t.query=r[4]||null,t.fragment=r[5]||null,t},h=l.length,p=0,d=[],v={};for(var m=0;m<h;m+=1){var g=c(l[m].name);g&&g.path&&g.authority&&(g.path.match(/neustar\.beacon\.js/g)||(g.path=g.path.split(",")[0].split(";")[0].split("#")[0].split("?")[0],d.push({p:g.path,d:g.authority,lt:parseInt(l[m].duration,10),o:parseInt(l[m].startTime,10)}),v[g.authority]=!0,p+=1))}d.sort(r);var y=s(d);if(y){y.iqr=y.q3-y.q1;var b=y.q3+t*y.iqr,E=0,S="[";for(m=0;m<p;m+=1)if(d[m].lt>b){S+="["+d[m].p+","+d[m].d+","+d[m].lt+","+d[m].o+"],",E+=1;if(E===n)break}S+="]",BOOMR.addVar("res_data",S),BOOMR.addVar("res_outlier_cnt",E),BOOMR.addVar("res_median",y.q2),Object.keys&&BOOMR.addVar("res_domain_cnt",Object.keys(v).length)}BOOMR.addVar("res_cnt",p)}BOOMR.addVar(f)}this.complete=!0}};BOOMR.plugins.NavigationTiming={init:function(){return BOOMR.subscribe("page_ready",t.done,null,t),this},is_complete:function(){return t.complete}}}(window)}catch(error){try{console.log("Rum beacon error: "+error)}catch(error){}}try{(function(e){var t=e.document;BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var n={complete:!1,mid:"",custom:{}};BOOMR.plugins.Webmetrics={init:function(e){BOOMR.utils.pluginConfig(n,e,"Webmetrics",["mid","custom"]);if(!n.mid)return BOOMR.warn("Webmetrics.mid is not set.","webmetrics"),n.complete=!0,this;BOOMR.addVar("mid",n.mid);var t=new Date;BOOMR.addVar("tz",t.getTimezoneOffset());var r=[];for(c_var in n.custom){if(!n.custom.hasOwnProperty(c_var))continue;r.push(c_var+"|"+n.custom[c_var])}return r.length&&BOOMR.addVar("custom",r.join(",")),n.complete=!0,this},is_complete:function(){return n.complete}}})(window)}catch(error){try{console.log("Rum beacon error: "+error)}catch(error){}}try{ns_rum.t_onload=(new Date).getTime(),BOOMR.init({Webmetrics:{mid:"720183E330AE464480B214B1DC3CEA25"},BW:{enabled:!1},autorun:!1}),window.t_pageend!==undefined&&(BOOMR.plugins.RT.endTimer("t_done",window.t_pageend),BOOMR.plugins.RT.endTimer("t_page",window.t_pageend),window.t_pagestart!==undefined&&BOOMR.plugins.RT.setTimer("t_page",window.t_pageend-window.t_pagestart)),BOOMR.page_ready(),ns_rum.beacon_sent=!1,ns_rum.sendRumBeacon=function(){ns_rum.isPerceivedLoadTime&&(new Date).getTime()-ns_rum.t_onload<1e3?setTimeout(ns_rum.sendRumBeacon,1e3-((new Date).getTime()-ns_rum.t_onload)):BOOMR.sendBeacon()},ns_rum.populatePltVars=function(e){BOOMR.addVar("t_plt",e),ns_rum.perceivedLoadTimeDescription&&BOOMR.addVar("desc_plt",ns_rum.perceivedLoadTimeDescription)},ns_rum.checkPerceivedLoadTime=function(){if(ns_rum.perceivedLoadTimeHasTimedOut)return;if(typeof ns_rum.perceivedLoadTimeEnd!="undefined"){var e=ns_rum.perceivedLoadTimeEnd-window.performance.timing.navigationStart;e<ns_rum.perceivedLoadTimeout*1e3?ns_rum.populatePltVars(e):ns_rum.populatePltVars("timeout"),ns_rum.sendRumBeacon()}else setTimeout(ns_rum.checkPerceivedLoadTime,1e3)},ns_rum.isPerceivedLoadTime=!1,ns_rum.perceivedLoadTimeout&&window.performance&&window.performance.timing&&(/^[1-9]\d*$/.test(ns_rum.perceivedLoadTimeout)?ns_rum.isPerceivedLoadTime=!0:console.log("Neustar WPM RUM beacon - ns_rum.perceivedLoadTimeout is not a positive integer ('"+ns_rum.perceivedLoadTimeout+"')"));if(ns_rum.isPerceivedLoadTime){ns_rum.checkPerceivedLoadTime();var timeoutFromOnload=ns_rum.perceivedLoadTimeout*1e3-(ns_rum.t_onload-window.performance.timing.navigationStart);timeoutFromOnload<0&&(timeoutFromOnload=0),setTimeout(function(){typeof ns_rum.perceivedLoadTimeEnd=="undefined"&&(ns_rum.perceivedLoadTimeHasTimedOut=!0,ns_rum.populatePltVars("timeout"),ns_rum.sendRumBeacon())},timeoutFromOnload),ns_rum.onbeforeunload_handle=function(){ns_rum.populatePltVars("onbeforeunload"),ns_rum.sendRumBeacon()},window.addEventListener?window.addEventListener("beforeunload",ns_rum.onbeforeunload_handle,!1):window.attachEvent&&window.attachEvent("onbeforeunload",ns_rum.onbeforeunload_handle)}else setTimeout(ns_rum.sendRumBeacon,1e3)}catch(error){try{console.log("Rum beacon error: "+error)}catch(error){}};