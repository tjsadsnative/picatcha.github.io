if(typeof truste=="undefined"||!truste||typeof truste.ca2=="undefined"||!truste.ca2){if(typeof truste==undefined||!truste){var truste={}
}if(typeof truste.ca==undefined||!truste.ca){truste.ca={};truste.ca._contRegistry={};truste.ca.contRegistryListeners=[];
truste.ts=new Date();truste.ca.hasRegistered=false;truste.ca.storedParentEvents=[];truste.ca.tagReferrer="";
truste.ca.dominantTag={};truste.ca.creativeMap={};truste.ca.isTopAd=true}truste.ca2={};truste.ic={};truste.ts=new Date();
truste.ca2.contMap={};truste.ca2.intMap={};truste.imgic=new Image(1,1);truste.ca2.intervalStack=[];truste.ca2.bindMap={};
truste.ca2.bindingInitMap={};truste.ca2.cidToInt={};truste.ca2.target={};truste.ca2.jsMap={};truste.ca2.adTypeMap={};
truste.ca2.osMap={};truste.ca.host=(typeof window.location.origin!=="undefined")?window.location.origin:window.location.protocol+"//"+window.location.host;
truste.ca2.customDecodeURL=function(a){var c=/\"\\/g;var b=decodeURI(a);b=b.replace(c,"").replace(/&/g,"").toLowerCase();
return b};truste.ca2.adtype=[truste.ca2.customDecodeURL("T&P%22%5CC%22%5C.%22%5CG&O&O%22%5CG%22%5CL%22%5CE%22%5CS&Y&N%22%5CD%22%5CI%22%5CC%22%5CA%22%5CT&I%22%5CO&N%22%5C.%22%5CC%22%5CO&M"),truste.ca2.customDecodeURL("F&W%22%5C.A%22%5C&DS%22%5CA%22%5C&F&E%22%5CP&R%22%5CO%22%5CT&%22%5CEC%22%5C&T&E%22%5CD.C%22%5C&O&M"),truste.ca2.customDecodeURL("D&O%22%5C&&U%22%5CB%22%5CL&E%22%5C&C&%22%5C&L%22%5CI&C&K&.N%22%5CE&T%22%5C"),truste.ca2.customDecodeURL("A%22%5CD&S%22%5C.B&R&%22%5CA&N%22%5CD&.N%22%5C&E&T")];
truste.ca2.mapDFA={adtype:[truste.ca2.customDecodeURL("S%22%5C0.&2%22%5CM&D&%22%5CN.&N%22%5CE%22%5C&T"),truste.ca2.customDecodeURL("%22%5CS1.&2&%22%5CM&%22%5CD&N.%22%5C&N&%22%5CE&T&")],domain:truste.ca2.customDecodeURL("A%22%5CD%22%5CV&E%22%5CR&T%22%5CI&S%22%5CE&R%22%5CS.&D%22%5CO&U%22%5CB&L%22%5CC&L%22%5CI%22%5CC&K.%22%5CN&E%22%5CT")};
truste.ca2.addEvent=function(d,c,b,a){if(d.addEventListener){d.addEventListener(c,b,false);return true
}else{if(d.attachEvent){return d.attachEvent("on"+c,b)}else{if(a){b();return true}else{return false}}}};
truste.ca.openPreferenceManager=function(c){var a=c.optoutLink;var b=/_LB(?=sidLB_)/;if(typeof c.sid!="undefined"&&c.sid.length>0&&!b.test(c.sid)){a="https://mobile.truste.com/mobile/preferences/"+c.sid+"/?pid="+c.pid+"&aid="+c.aid+"&cid="+c.cid
}window.open(a)};truste.ca2.addBinding=function(b){var a=truste.ca2.copyBinding(b);truste.ca2.bindMap[a.baseName]=a;
return a};truste.ca.addRegistryListener=function(a){if(a&&a.apply){truste.ca.contRegistryListeners.push(a)
}};truste.ca.contRegister=function(a){if(a&&a.element&&a.baseName){if(!truste.ca._contRegistry[a.baseName]){for(var b=truste.ca.contRegistryListeners.length;
b-->0;){var c=truste.ca.contRegistryListeners[b];try{if(c.call({},a)){return true}}catch(d){}}}truste.ca._contRegistry[a.baseName]=a
}return false}}truste.ca2.isTypeMatch=function(a,d){if(typeof a==undefined||!a){return null}for(var c=0;
c<truste.ca2.adtype.length;c++){var b=truste.ca2.adtype[c];if(a.indexOf(b)>-1){return b}}if(d.docRef.location.href.indexOf(truste.ca2.mapDFA.domain)!=-1){for(var c=0;
c<truste.ca2.mapDFA.adtype.length;c++){var b=truste.ca2.mapDFA.adtype[c];if(a.indexOf(b)>-1){return b
}}}return null};truste.ca.uuid=truste.ca2.uuid=function(){return"te-"+(((1+Math.random())*65536)|0).toString(16).substring(1)
};truste.ca2.copyBinding=function(d){var b={};for(var a in d){b[a]=d[a]}var c=truste.ca2.uuid();b.baseName=c;
b.containerId=c;b.iconSpanId=c+"-icon";b.intDivName=c+"-itl";b.anchName=c+"-anch";b.target="over";return b
};truste.ca2.containsAll=function(){if(this.length>0&&arguments.length>0){for(var a=0;a<arguments.length;
a++){if(!truste.ca2.contains.call(this,arguments[a])){return false}}}return true};truste.ca2.contains=function(a){return this.indexOf(a)>-1
};truste.ca2.processJS=function(b,e){var a=null;for(var d in truste.ca2.jsMap){var f=truste.ca2.jsMap[d];
if(f===b){a=f;return true}}if(!a){b.setAttribute("st-found","true");truste.ca2.jsMap[e]=b;if(b.src.indexOf("atlasId")>-1){var c=truste.ca2.getParamByName("atlasId",scriptSrc);
binding.atlasId=c}return true}return false};truste.ca2.addCurrJs=function(f){var c=new RegExp(/\/\/[^\.]+\.(intranet\.)?truste(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*ca\?.*?js=st((_0)|(_vc0)|(_v0)|0).*/);
if(f.script&&truste.ca2.processJS(f.script,f.baseName)){return}else{var d=document.getElementsByTagName("script");
for(var b=0;b<d.length;b++){var a=d[b];var e=a.src;if(!a.getAttribute("st-found")&&c.test(e)&&truste.ca2.containsAll.call(e,"pid="+f.pid,"aid="+f.aid)&&truste.ca2.processJS(a,f.baseName)){break
}}}};truste.ca2.initialize=function(b){var a=truste.ca2.addBinding(b);truste.ca2.bindingInitMap[a.baseName]=0;
truste.ca2.addCurrJs(a);truste.ca2.initBinding(a)};var te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_ib='  <div id="te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889-itl" style="position: absolute; margin: 0 auto; width:240px; height:220px; border: 1px solid #ccc; display:block; background:#FFF; overflow:hidden; padding:0; font-size:12px; font-family: arial,helvetica,clean,sans-serif; text-align:left; z-index:1001;">\n    <div class="closeTag" style="float:right; padding:5px"><a style="cursor:pointer; color:#456d88; text-decoration:none; " alt="close" onclick="javascript:self.close()"/>[close]</a></div> \n    <div class="mainRolloverSection" style="padding:5px 15px"> \n      <a onclick="truste.ca.interstitial_click(\'001\', te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi )" href="http://www22.verizon.com/home/verizonglobalhome/ghp_landing.aspx" target="_blank"><img src="http://choices.truste.com/get?name=verizonlogo.png" alt="ad choices" class="advertiserLogo"/></a> \n      <br /> \n      <p style="padding:0 0 5px;><b><a style="color:#456d88; text-decoration:none;" href="http://www22.verizon.com/home/verizonglobalhome/ghp_landing.aspx" target="_blank">Verizon</a> cares about your privacy.</b> \n            <a style="color:#456d88; text-decoration:none;" href="{PartnerLink}" target="_blank">{PartnerName}</a> delivered this personalized ad based on your interests. \n             This is a placeholder for custom text.\n      </p> \n      <div style="padding-bottom:5px; ">\n        <a style="color:#456d88; text-decoration:none;" onclick="truste.ca.interstitial_click(\'005\', te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi )" href="http://preferences.truste.com?pid=moxie01&aid=moxie_verizon01&cid=9317865&w=120&h=240" target="_blank"><b>Set Your Ad Preferences &raquo;</b></a><br /> \n        <a style="color:#456d88; text-decoration:none;" onclick="truste.ca.interstitial_click(\'002\', te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi )" href="http://www22.verizon.com/privacy/" target="_blank"><b>Verizon Privacy Policy &raquo;</b></a><br /> \n      </div> \n    </div> \n    <div style="padding:5px 15px; height:100%; background:#efefef"> \n      <h2 style="font-weight:bold;font-size:12px;">AdChoices by <a style="color:#456d88; text-decoration:none;" href="http://www.truste.com" target="_blank"><img style="vertical-align:middle; border:none; width:70px;" src="http://choices.truste.com/get?name=TRUSTe_logo.png" /></a></h2>\n    </div> \n  </div> \n\n';
var te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi={baseName:"te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889",baseUrl:(window.location.protocol=="http:")?"http://choices.truste.com/":"http://choices.truste.com/".replace("http:","https:"),anchName:"te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889-anch",width:120,height:240,ox:0,oy:0,plc:"tr",iplc:"rel",intDivName:"te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889-itl",iconSpanId:"te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889-icon",backgroundColor:"white",opacity:0.8,filterOpacity:80,containerId:"te-clr1-d52635ad-0e42-42ad-b4ad-769f02e11889",noticeBaseUrl:(window.location.protocol=="http:")?"http://choices-or.truste.com/camsg?":"http://choices-or.truste.com/camsg?".replace("http:","https:"),oBaseUrl:(window.location.protocol=="http:")?"http://choices-or.truste.com/":"http://choices-or.truste.com/".replace("http:","https:"),irBaseUrl:(window.location.protocol=="http:")?"http://choices-or.truste.com/cair?":"http://choices-or.truste.com/cair?".replace("http:","https:"),icBaseUrl:(window.location.protocol=="http:")?"http://choices-or.truste.com/caic?":"http://choices-or.truste.com/caic?".replace("http:","https:"),capBaseUrl:(window.location.protocol=="http:")?"http://choices-or.truste.com/cap?":"http://choices-or.truste.com/cap?".replace("http:","https:"),interstitial:te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_ib,interstitialWidth:240,interstitialHeight:220,popTab:false,showLink:"javascript:truste.ca.showpop(te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi)",hideLink:"javascript:self.close()",icon:"http://choices.truste.com/assets/forward_i.png",icon_cam:(window.location.protocol=="http:")?"http://choices.truste.com/assets/admarker.png":"http://choices.truste.com/assets/admarker.png".replace("http:","https:"),icon_cam_daa:((window.location.protocol=="http:")?"http://choices-or.truste.com/":"http://choices-or.truste.com/".replace("http:","https:"))+"assets/ad_choices_i.png",icon_cam_mo:((window.location.protocol=="http:")?"http://choices-or.truste.com/":"http://choices-or.truste.com/".replace("http:","https:"))+"assets/ad_choices_en.png",iconText:"&nbsp;AdChoices",aid:"moxie_verizon01",pid:"moxie01",sid:"_LBsidLB_",zindex:"100002",cam:"3",admarker:"default",cid:"9317865",priority:"3-0",optoutLink:"http://preferences.truste.com?pid=moxie01&aid=moxie_verizon01&cid=9317865&w=120&h=240",target:"pop",docRef:document,language:"en",script:document.currentScript};
truste.ca2.addEvent(window,"load",function(){setTimeout(function(){truste.ca2.initialize(te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi);
truste.ca2.initializeIcon()},750)});truste.ca2.getParamByName=function(b,a){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var d=new RegExp("[\\?&]"+b+"=([^&#]*)");var c=d.exec(a);if(c==null){return""}else{return decodeURIComponent(c[1].replace(/\+/g," "))
}};truste.ca2.getSz=function(a){var b="sz=";var e=new RegExp(b+"[0-9]+x[0-9]+","g");var c=e.exec(a);if(c&&c.length>0){var d=c[0];
if(d.length>b.length){return d.substring(b.length,d.length)}}return null};truste.ca2.getInterstitial=function(d){if(!d.impression){(new Image(1,1)).src=d.capBaseUrl+"aid="+d.aid+"&pid="+d.pid+"&cid="+d.cid+"&w="+d.width+"&h="+d.height+"&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
d.impression=1}var a=d.width+"x"+d.height;var b=document.createElement("script");b.type="text/javascript";
var c="aid="+d.aid+"&pid="+d.pid+"&cid="+d.cid+"&js=st_1&sz="+a+"&c="+d.containerId+"&admarker="+d.admarker+"&plc="+d.plc+"&cam="+d.cam+"&zi="+d.zindex+"&sid="+d.sid+"&locale="+d.language;
b.src=d.baseUrl+"ca?"+c;if(window.location.protocol=="https:"){b.src=b.src.replace("http:","https:")}document.body.appendChild(b)
};truste.ca2.getObjectParamValue=function(e,d){if(typeof e=="undefined"||e.nodeName.toLowerCase()!=="object"){return null
}var f=e.getElementsByTagName("param");if(f){for(var c=0;c<f.length;c++){var a=f[c];var b=a.getAttribute("name");
if(b&&b===d){return a.getAttribute("value")}}}return null};truste.ca2.initAtlas=truste.ca2.initAtlas||function(f,g){var e=false;
var a=f.previousSibling;do{if(a&&a.nodeType===1){if(a.nodeName.toLowerCase()==="object"){var d=truste.ca2.getObjectParamValue(a,"movie");
if(d){if(d.indexOf(g.atlasId)>-1){g.width=a.getAttribute("width");g.height=a.getAttribute("height");e=true
}}}else{if(a.nodeName.toLowerCase()==="embed"&&typeof a.src!="undefined"&&(a.offsetWidth>10&&a.offsetHeight>10)){var b=a.src;
if(b.indexOf(g.atlasId)>-1){g.width=a.offsetWidth;g.height=a.offsetHeight;e=true}}else{if(a.href&&typeof a.href!="undefined"&&a.href.indexOf(g.atlasId)>-1){var c=a.firstElementChild;
g.width=c.offsetWidth;g.height=c.offsetHeight;e=true}}}if(e){truste.ca2.getInterstitial(g);break}}}while(a=a.previousSibling)
};truste.ca2.assignSizeFromScript=function(d,c){var a=truste.ca2.getSz(d);if(a&&a!==""){var b=a.split("x");
if(b.length==2){c.width=b[0];c.height=b[1];return true}}return false};truste.ca2.initDoubleclick=function(b,k){var c=false;
var a=window.location.href;if(truste.ca2.isTypeMatch(a,k)){var c=truste.ca2.assignSizeFromScript(a,k);
var n=truste.ca2.getSz(a);truste.ca2.getInterstitial(k)}if(!c){var f=function(i){return(i.gotParent)?null:(i.gotParent=1,(i.parentElement||i.parentNode))
};var e=b.previousSibling||f(b);do{if(e&&e.nodeType===1){if(e.nodeName.toLowerCase()==="script"){var m=e.src;
if(m&&truste.ca2.isTypeMatch(m,k)){var c=truste.ca2.assignSizeFromScript(m,k);if(c){truste.ca2.getInterstitial(k);
break}}}else{if(e.nodeName.toLowerCase()==="object"&&e.width>1&&e.height>1){k.width=e.width;k.height=e.height;
truste.ca2.getInterstitial(k);c=true;break}else{if(e.nodeName.toLowerCase()=="div"||e.nodeName.toLowerCase()=="a"){var h=truste.ca2.findObjectOrImg(e);
if(h){k.width=(h.width&&h.width.toString().indexOf("%")==-1)?h.width:h.offsetWidth;k.height=(h.height&&h.height.toString().indexOf("%")==-1)?h.height:h.offsetHeight;
truste.ca2.getInterstitial(k);c=true;break}}}}}}while(e=(e&&e.previousSibling)?e.previousSibling:f(b))
}if(!c){var l=document.getElementsByTagName("head");if(l&&l.length>0){var j=l[0].getElementsByTagName("script");
for(var g=0;g<j.length;g++){var m=j[g].src;if(m&&truste.ca2.isTypeMatch(m,k)){var c=truste.ca2.assignSizeFromScript(m,k);
if(c){truste.ca2.getInterstitial(k);break}}}}}if(!c){if(top!==self&&window.frameElement.clientWidth==k.width&&window.frameElement.clientHeight==k.height){truste.ca2.getInterstitial(k)
}}if(!c){var d=document.getElementById("celtra-banner");if(d){k.width=d.offsetWidth;k.height=d.offsetHeight;
truste.ca2.getInterstitial(k)}}};truste.ca2.findObjectOrImg=function(f,b,l){var a=[];a.push(f);while(a.length>0){var i=a.pop();
if(i.nodeName.toLowerCase()=="object"){var k=(i.width&&i.width.toString().indexOf("%")==-1)?i.width:i.offsetWidth;
var j=(i.height&&i.height.toString().indexOf("%")==-1)?i.height:i.offsetHeight;if(k>1&&j>1){return i}}else{if(i.nodeName.toLowerCase()=="a"){var g=(i.childElementCount||i.children.length);
var e=(i.firstElementChild||i.children[0]);if(g>0&&e.nodeName.toLowerCase()=="img"&&e.width>1&&e.height>1){return e
}}else{if(i.nodeName.toLowerCase()=="img"&&i.style.visibility!="hidden"&&i.parentElement.style.visibility!="hidden"&&i.width>1&&i.height>1){return i
}}}var c=i.childNodes;if(c&&c.length>0){for(var d=0;d<c.length;d++){a.push(c[d])}}}return null};truste.ca2.initBinding=function(b){b.count=b.count||0;
var a=truste.ca2.jsMap[b.baseName];if(a){if(typeof b.atlasId!="undefined"){truste.ca2.initAtlas(a,b)}else{truste.ca2.initDoubleclick(a,b)
}}if(!b.impression){if(b.count<10){b.count++;setTimeout(function(){truste.ca2.initBinding(b)},250)}else{(new Image(1,1)).src=b.capBaseUrl+"aid="+b.aid+"&pid="+b.pid+"&cid="+b.cid+"&w=1&h=1&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
b.impression=1}}};truste.ca.getConsent=function(){var a={PrivacyManagerAPI:{action:"getConsent",timestamp:new Date().getTime(),domain:window.location.hostname,self:window.location.hostname,authority:"truste.com"}};
var b=JSON.stringify(a);window.top.postMessage(b,"*")};truste.ca.getCreativeId=function(a){var c=null;
if(a!==null){for(var b in truste.ca.creativeMap){if(truste.ca.creativeMap.hasOwnProperty(b)&&truste.ca.creativeMap[b]===a){c=b;
break}}if(c===null){c=truste.ca.uuid();truste.ca.creativeMap[c]=a}}return c};truste.ca.getCreativeIdOfWindow=function(b){var c=null;
for(var a in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(a)){creative=truste.ca.dominantTag[a].creative;
if(creative.tagName==="IFRAME"&&creative.contentWindow===b){c=a;break}}}return c};truste.ca.checkIfParentHasCaJS=function(){var a;
if(self!=top){a={DeCollision:{action:"hasCaJS"}};window.parent.postMessage(JSON.stringify(a),"*")}};truste.ca.checkCollision=function(d){var c,f,a,e;
if(truste.ca2.findCreative){e=truste.ca2.findCreative(d)}if(!e&&truste.ca){e=truste.ca.findCreative&&truste.ca.findCreative(d)
}c=truste.ca.getCreativeId(e);if(typeof d.priority==="string"){f=d.priority.split("-")}else{f=[d.priority,0]
}if(typeof truste.ca.dominantTag[c]==="undefined"){truste.ca.dominantTag[c]={baseName:d.baseName,priority:f,creative:e,host:truste.ca.host}
}else{a=truste.ca.dominantTag[c].priority;if(a[1]==f[1]){if(a[0]<f[0]){truste.ca2.removeIcon(d.baseName)
}else{truste.ca2.removeIcon(truste.ca.dominantTag[c].baseName);truste.ca.dominantTag[c].baseName=d.baseName;
truste.ca.dominantTag[c].priority=f}}else{if(a[1]<f[1]){truste.ca2.removeIcon(d.baseName)}else{truste.ca2.removeIcon(truste.ca.dominantTag[c].baseName);
truste.ca.dominantTag[c].baseName=d.baseName;truste.ca.dominantTag[c].priority=f}}}setTimeout(function(){truste.ca.checkIfParentHasCaJS()
},750)};truste.ca.removeBaseNameInIframes=function(c,a){var b={DeCollision:{action:"suppress",baseName:c}};
a.contentWindow.postMessage(JSON.stringify(b),"*")};truste.ca.removeTag=function(d){var b,a;a=false;for(var c in truste.ca2.bindMap){if(truste.ca2.bindMap.hasOwnProperty(c)){if(truste.ca2.bindMap[c].baseName===d){truste.ca2.removeIcon(d);
a=true;break}}}if(!a){for(var c in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(c)){b=truste.ca.dominantTag[c].creative;
if(b.tagName=="IFRAME"){truste.ca.removeBaseNameInIframes(d,b)}}}}};truste.ca.processCheckCollision=function(e){var b,a,c,f,d;
b=e.creativeHash;if(e.baseName!==truste.ca.dominantTag[b].baseName){a=truste.ca.dominantTag[b].priority;
c=e.priority;if(a[1]==c[1]){if(a[0]<c[0]){d=e.baseName}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;
truste.ca.dominantTag[b].priority=e.priority;truste.ca.dominantTag[b].host=e.host}}else{if(a[1]<c[1]){d=e.baseName
}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;truste.ca.dominantTag[b].priority=e.priority;
truste.ca.dominantTag[b].host=e.host}}truste.ca.removeTag(d)}else{console.log("Abort Collision check, no need to compare same baseName")
}};truste.ca.passDominantTagToParent=function(d){var c,a;c={};for(var b in d){if(d.hasOwnProperty(b)){c[b]={baseName:d[b].baseName,priority:d[b].priority,host:d[b].host}
}}a={DeCollision:{action:"dominantTagPass",dominantTag:c}};window.parent.postMessage(JSON.stringify(a),"*")
};truste.ca.processDominantTagPass=function(e){var d,a,c;d=JSON.parse(e.data);if(truste.ca.isTopAd){a=truste.ca.getCreativeIdOfWindow(e.source);
for(var b in d.DeCollision.dominantTag){if(d.DeCollision.dominantTag.hasOwnProperty(b)){c=d.DeCollision.dominantTag[b];
truste.ca.processCheckCollision({baseName:c.baseName,source:e.source,priority:c.priority,creativeHash:a,host:c.host})
}}}else{truste.ca.passDominantTagToParent(d.DeCollision.dominantTag)}};truste.ca.processPostMessage=function(h){var l,d,c;
try{try{d=JSON.parse(h.data)}catch(j){d=h.data}if(d&&d.PrivacyManagerAPI){truste.ca.tagReferrer=h.origin
}else{if(d&&d.DeCollision){c=d.DeCollision.action;switch(c){case"hasCaJS":l={DeCollision:{action:"hasCaJSResponse"}};
h.source.postMessage(JSON.stringify(l),h.origin);break;case"hasCaJSResponse":truste.ca.isTopAd=false;
setTimeout(function(){truste.ca.passDominantTagToParent(truste.ca.dominantTag)},750);break;case"dominantTagPass":truste.ca.processDominantTagPass(h);
break;case"suppress":truste.ca.removeTag(d.DeCollision.baseName);break;default:break}}else{if(d&&d==="AMZNOVRIDE"){var a="http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,t2,";
var n;for(var k in truste.ca2.bindMap){if(truste.ca2.bindMap.hasOwnProperty(k)){truste.ca2.bindMap[k].target="directlink";
n=a;n=n+truste.ca2.bindMap[k].pid+",";n=n+truste.ca2.bindMap[k].aid+",";n=n+truste.ca2.bindMap[k].cid+",";
n=n+truste.ca2.bindMap[k].width+",";n=n+truste.ca2.bindMap[k].height;truste.ca2.bindMap[k].optoutLink=n
}}}else{if(h.source===self.parent){if(!truste.ca.hasRegistered){var g={};g.source=h.source;g.data=h.data;
g.origin=h.origin;truste.ca.storedParentEvents.push(g)}else{for(var f in truste.ca._contRegistry){var b=truste.ca._contRegistry[f];
if(d.priority<=b.priority){truste.ca2.removeIcon(b.baseName)}else{var m=JSON.stringify({suppress:true});
h.source.postMessage(m,h.origin)}}}}else{if(d.suppress){for(var f in truste.ca._contRegistry){truste.ca2.removeIcon(truste.ca._contRegistry[f].baseName)
}}}}}}}catch(h){}};truste.ca2.initializeIcon=function(){for(var d in truste.ca2.bindingInitMap){var f=truste.ca2.bindingInitMap[d];
if(f==0){var a=truste.ca2.bindMap[d];var g=a.oBaseUrl+"get?name=";var h=a.plc.toLowerCase();if(!(h=="tr"||h=="tl"||h=="br"||h=="bl")){h="tr";
a.plc="tr"}if(window.location.protocol=="https:"){a.noticeBaseUrl=a.noticeBaseUrl.replace("http:","https:");
a.irBaseUrl=a.irBaseUrl.replace("http:","https:");a.icon=a.icon.replace("http:","https:")}if(a.cam==0||a.cam==1||a.cam==2){a.icon_cam=(window.location.protocol=="https:")?a.icon_cam.replace("http:","https:"):a.icon_cam
}else{if(a.cam==3){a.icon_cam_daa=g+"admarker-icon-"+h+".png";a.icon_cam_mo=g+"admarker-full-"+h+".png";
if(a.admarker&&typeof a.admarker!="undefined"&&a.admarker.length>0&&a.admarker=="dynamic"){a.icon_cam_mo=g+"en-admarker-full-"+h+".png"
}}else{if(a.cam==4){a.icon_cam_daa=g+"admarker-icon-"+h+"-gray.png";a.icon_cam_mo=g+"admarker-full-"+h+"-gray.png"
}else{if(a.cam==6){a.icon_cam_daa=g+"admarkermobile-icon-"+h+".png"}else{if(a.cam==9){a.icon_cam_daa=g+"admarker-icon-"+h+".png"
}else{if(a.cam==10){a.icon_cam_daa=g+"admarkermobile-icon-30x30-"+h+".png"}}}}}}var c=document.createElement("script");
var e="aid="+a.aid+"&pid="+a.pid+"&cid="+a.cid;c.src=a.baseUrl+"ca?"+e+"&js=st_2";document.body.appendChild(c);
truste.ca2.bindingInitMap[d]=f+1}}};truste.ca2.removeIcon=function(b){var a=document.getElementById(b+"-icon")||document.getElementById(b);
bindings=te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi;if(a&&a.parentNode){a.parentNode.removeChild(a)
}delete truste.ca._contRegistry[b]};var readyState=document.readyState;if((readyState)&&(readyState=="complete"||readyState=="interactive")){setTimeout(truste.ca2.initialize(te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi),700);
setTimeout(truste.ca2.initializeIcon(),750)}setTimeout(function(){if(document.readyState=="loading"){truste.ca2.initialize(te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi);
truste.ca2.initializeIcon()}},750);truste.ca.addRegistryListener(function(b){var a=te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi.baseName;
var f=truste.ca._contRegistry[a];var e=function e(h,g){for(var i=g;i!=null;i=i.parentNode){if(i==h){return true
}}return false};if(b.baseName==a){if(!a){return true}for(var c in truste.ca._contRegistry){var d=truste.ca._contRegistry[c];
if(e(d.element,b.element)||e(b.element,d.element)){return true}}}if(!f){return}if(f.priority&&(!b.priority||f.priority<b.priority)){if(e(b.element,f.element)||e(f.element,b.element)){var d=document.getElementById(f.baseName+"-icon");
if(d&&d.parentNode){d.parentNode.removeChild(d)}delete truste.ca._contRegistry[f.baseName];te_clr1_d52635ad_0e42_42ad_b4ad_769f02e11889_bi.baseName=null
}}return false});