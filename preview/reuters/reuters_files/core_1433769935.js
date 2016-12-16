/* This source code is Copyright (c) Vibrant Media 2001-2015 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
$iTXT.js.loader["$iTXT.core.Ajax"]=true;$iTXT.core.Ajax_Load=function(){var undefined;$iTXT.core.Ajax={maxURLLength:2000,postData:function(opts)
{if($iTXT.glob.params.get("echm")&$iTXT.debug.Util.ECH_TIME_XFER)
{if(undefined==$iTXT.metrics.Misc)
{$iTXT.metrics.Misc={};}
$iTXT.metrics.Misc.startXfer=(new Date()).getTime();}
var forceChunk=$iTXT.glob.params.getBool("force.chunk",true);if(forceChunk)
{}
if(($iTXT.core.Ajax.Mode.CHUNKING==$iTXT.core.Ajax.currentMode)||forceChunk)
{$iTXT.core.Ajax._chunkData(opts);}
else
{$iTXT.core.Ajax._corsData(opts);}
if(($iTXT.glob.params.get("echm")&$iTXT.debug.Util.ECH_TIME_XFER)&&undefined!=$iTXT.metrics.Misc&&undefined!=$iTXT.metrics.Misc.startXfer)
{$iTXT.metrics.Misc.stopXfer=(new Date()).getTime();}},_corsData:function(opts)
{var xhr=null;var url=opts.url;if($iTXT.core.Ajax.Mode.FULL_CORS==$iTXT.core.Ajax.currentMode)
{xhr=new XMLHttpRequest();xhr.open("POST",url,true);var contentType="text/plain";xhr.setRequestHeader("Content-type",contentType);xhr.setRequestHeader("Content-length",opts.data.length);}
else
{xhr=new XDomainRequest();xhr.open("POST",url);}
xhr.onload=function()
{if(opts.callback)
{opts.callback(xhr.responseText);}};xhr.send(opts.data);},_chunkData:function(opts)
{opts.chunkKey=$iTXT.js.chunkKey||0;var contextUrl=this._appendChunkKey(opts.contextUrl,opts.chunkKey);var chunkUrl=this._appendChunkKey(opts.chunkUrl,opts.chunkKey);var data=encodeURIComponent(opts.data)||"";var chunkSize=$iTXT.core.Ajax.maxURLLength-chunkUrl.length;var contextSize=Math.max(0,$iTXT.core.Ajax.maxURLLength-contextUrl.length);var chunksArr=[];var chunksCounter=0;while(data.length>contextSize){var dataChunk;if(data.length<chunkSize)
{dataChunk=data;data='';}
else if("%"==data.charAt(chunkSize-1))
{dataChunk=data.substring(0,chunkSize-1);data=data.substring(chunkSize-1);}
else if("%"==data.charAt(chunkSize-2))
{dataChunk=data.substring(0,chunkSize-2);data=data.substring(chunkSize-2);}
else
{dataChunk=data.substring(0,chunkSize);data=data.substring(chunkSize);}
chunksArr.push(this._createChunk(chunkUrl,chunksCounter,dataChunk));chunksCounter++;}
chunksArr.push(this._createChunk(contextUrl,chunksCounter,data));this._chunkSequential(opts,chunksArr);},_appendChunkKey:function(url,chunkKey){if(url.indexOf("?")==-1)
{url+="?";}
else
{url+="&";}
return url+"ck="+chunkKey;},_createChunk:function(url,chunksCounter,dataChunk)
{url+="&cn="+chunksCounter;if(dataChunk.length>0)
{url+="&cd="+dataChunk;}
return{loaded:false,number:chunksCounter,url:url,data:dataChunk};},_chunkSequential:function(opts,chunksArr)
{if(chunksArr&&chunksArr.length>0)
{var chunk=chunksArr.shift();$iTXT.core.Util.dropScript(chunk.url,function(response)
{opts.response=response;$iTXT.core.Ajax._chunkSequential(opts,chunksArr);});}
else
{if(opts.callback)
{opts.callback(opts.response);}}},_sendChunk:function(opts,chunk,chunksArr)
{$iTXT.core.Util.dropScript(chunk.url,function(response)
{chunk.loaded=true;$iTXT.core.Ajax._checkChunksLoaded(opts,chunksArr,response);});},_checkChunksLoaded:function(opts,chunksArr,response)
{for(var i in chunksArr)
{if(!chunksArr[i].loaded)
{return;}}
if(opts.callback)
{opts.callback(response);opts.callback=null;}},Mode:{FULL_CORS:1,IE8_CORS:2,CHUNKING:3},currentMode:null,setMode:function()
{try
{this.currentMode=this.Mode.CHUNKING;var xhr=new XMLHttpRequest();if("withCredentials"in xhr)
{$iTXT.core.Ajax.currentMode=this.Mode.FULL_CORS;}
else if(typeof XDomainRequest!="undefined")
{$iTXT.core.Ajax.currentMode=this.Mode.IE8_CORS;}
xhr=null;}
catch(e)
{}}};$iTXT.core.Ajax.setMode();};$iTXT.js.loader["$iTXT.core.Array"]=true;$iTXT.core.Array_Load=function(){var undefined;$iTXT.core.$A=function(arr){if(!arr)
{return null;}
if((arr.itxt&&arr.itxt.arrayExtended)||!VM._.isArray(arr))
{return arr;}
else
{arr=$iTXT.core.Util.extend(arr,$iTXT.core.Array);arr.itxt={};arr.itxt.arrayExtended=true;return arr;}};$iTXT.core.Array={itxtEach:function(f,src)
{src=src||this;if('function'==typeof f)
{for(var i=0,len=this.length;i<len;i++)
{if(f.apply(src,[this[i],i,len]))
{break;}}}
return this;},unpack:function(ar){if(ar&&ar.length&&ar.length===1&&VM._.isArray(ar[0])){return ar[0];}else{return ar;}}};};$iTXT.js.loader["$iTXT.core.Browser"]=true;$iTXT.core.Browser_Load=function(){var undefined;$iTXT.core.Browser={_browsers:[{s:navigator.userAgent,ss:"Chrome",id:"Chrome"},{s:navigator.userAgent,ss:"OmniWeb",vt:"OmniWeb/",id:"OmniWeb"},{s:navigator.vendor,ss:"Apple",id:"Safari",vt:"Version"},{prop:window.opera,id:"Opera"},{s:navigator.vendor,ss:"iCab",id:"iCab"},{s:navigator.vendor,ss:"KDE",id:"Konqueror"},{s:navigator.userAgent,ss:"Firefox",id:"Firefox"},{s:navigator.userAgent,ss:"Android",id:"Android",vt:"Android"},{s:navigator.vendor,ss:"Camino",id:"Camino"},{s:navigator.userAgent,ss:"Netscape",id:"Netscape"},{s:navigator.userAgent,ss:"MSIE",id:"Explorer",vt:"MSIE"},{s:navigator.userAgent,ss:"Gecko",id:"Mozilla",vt:"rv"},{s:navigator.userAgent,ss:"Mozilla",id:"Netscape",vt:"Mozilla"}],_platforms:[{s:navigator.platform,ss:"Win",id:"Window"},{s:navigator.platform,ss:"Mac",id:"Mac"},{s:navigator.platform,ss:"iPhone",id:"iOS/iPhone"},{s:navigator.platform,ss:"iPod",id:"iOS/iPod"},{s:navigator.platform,ss:"iPad",id:"iOS/iPad"},{s:navigator.platform,ss:"Android",id:"Android"},{s:navigator.userAgent,ss:"Android",id:"Android"},{s:navigator.platform,ss:"Linux",id:"Linux"}],useragent:"",version:0.0,performance:0,ie7orlessmode:0,quirksMode:0,_versionTemplate:"",featureSupport:{},pfx:['-o-','-moz-','-ms-','-webkit-','-khtml-'],bpfx:['Webkit','Moz','O','ms','Khtml'],init:function()
{this.useragent=this._getUserAgent(this._browsers)||"Unknown User Agent";this.platform=this._getPlatform(this._platforms);this.version=this._getVersion(navigator.userAgent)||this._getVersion(navigator.appVersion)||"Unkown Version";this.performance=this._performanceCheck();var ie7compat=(document.documentMode&&document.documentMode==7);var ie7orless=this.is("Explorer",7,2);this.ie7orlessmode=ie7compat||ie7orless;this.ie8CompatMode=ie7compat;this.quirksMode=this._quirksMode();this._detectFeatureSupport();},supportsFeature:function()
{arguments=$iTXT.core.Array.unpack(arguments);for(var i=0;i<arguments.length;i++)
{var feature=arguments[i];if(!this.featureSupport[feature]||false===this.featureSupport[feature])
{return false;}}
return true;},isSmartphoneOrTablet:function(force){return $iTXT.core.Browser.isMobile(force,["iOS/iPhone","iOS/iPad","iOS/iPod","Android"]);},isSmartphone:function(force){return $iTXT.core.Browser.isMobile(force,["iOS/iPhone","iOS/iPod","Android"])&&!$iTXT.core.Browser.isAndroidTablet();},isTablet:function(force){return $iTXT.core.Browser.isMobile(force,["iOS/iPad"])||$iTXT.core.Browser.isAndroidTablet();},isMobile:function(force,targets){var isPlatform=$iTXT.core.Browser.isPlatform(targets);var isForced=force||$iTXT.glob.params.getBool("tt.force.mobile",false);return(isForced||isPlatform);},isAndroidTablet:function(){if(navigator&&$iTXT.core.Browser.isPlatform(["Android"])){if(navigator.userAgent.indexOf("Mobile Safari")===-1){return true;}}
return false;},pick:function(obj){if(this.isSmartphone()&&typeof obj.phone!=='undefined')return obj.phone;if(this.isTablet()&&typeof obj.tablet!=='undefined')return obj.tablet;if(typeof obj.any!=='undefined')return obj.any;},isTargetedSmartphone:function(force,overrideTargets,overrideFeatures){var features=overrideFeatures||['cssgradients','cssborderradius'];var f=force||(this.isSmartphoneOrTablet(force,overrideTargets)&&this.supportsFeature(features));return f;},_detectFeatureSupport:function()
{var elmt=document.createElement("itxtelmt");this.style=elmt.style;var tests={};tests['cssgradients']=function()
{var s1='background-image:',s2='gradient(linear,left top,right bottom,from(black),to(white));',s3='linear-gradient(left top, black, white);';this._css((s1+this.pfx.join(s2+s1)+this.pfx.join(s3+s1)).slice(0,-s1.length));return this._hasCss(this.style.backgroundImage,'gradient');};tests['cssborderradius']=function()
{return this._testCssProperty("borderRadius");};tests['dommutationevents']=function()
{return!!(document.implementation.hasFeature('MutationEvents','2.0')||undefined!=window.MutationEvent);};tests['propertychangeevent']=function()
{return this._testEventSupport('propertychange',elmt);};tests['transforms']=function(){return this._testCssProperty('transform');};tests['transitions']=function(){return this._testCssProperty('transition');};for(var testName in tests)
{this.featureSupport[testName]=tests[testName].call(this);}},_testEventSupport:function(evt,elmt)
{evt='on'+evt;var s=(evt in elmt);if(!s)
{elmt.setAttribute(evt,'return;');s=!!('function'==typeof elmt[evt]);}
return s;},_css:function(t)
{this.style.cssText=t;},_testCssProperty:function(p)
{var ucp=p.charAt(0).toUpperCase()+p.substring(1);if(this.style[p]!==undefined)
{return true;}
for(var i=0;i<this.bpfx.length;i++)
{var pfx=this.bpfx[i];if(this.style[pfx+ucp]!==undefined)
{return true;}}
return false;},_hasCss:function(s,sb)
{return(''+s).indexOf(sb)!==-1;},_quirksMode:function()
{if(!this.is("Explorer"))
{return false;}
var mode=document.compatMode;if("BackCompat"==mode)
{return true;}
return false;},_getUserAgent:function(d)
{for(var i=0;i<d.length;i++)
{var str=d[i].s;var prop=d[i].prop;this._versionTemplate=d[i].vt||d[i].id;if(str)
{if(str.indexOf(d[i].ss)!=-1)
return d[i].id;}
else if(prop)
{return d[i].id;}}},_getPlatform:function(d)
{for(var i=0;i<d.length;i++)
{var str=d[i].s;if(str)
{if(str.indexOf(d[i].ss)!=-1)
return d[i].id;}}
return"Unknown Platform";},_getVersion:function(uas){var index=uas.indexOf(this._versionTemplate);return(index==-1)?undefined:parseFloat(uas.substring(index+this._versionTemplate.length+1));},is:function(ua,v,mode)
{var isVer=true;if(v)
{if(mode&&1==mode)
{isVer=(this.version>=v);}
else if(mode&&2==mode)
{isVer=(this.version<=v);}
else if(mode&&3==mode)
{isVer=(this.version>v);}
else if(mode&&4==mode)
{isVer=(this.version<v);}
else
{isVer=(v==this.version);}}
return(ua==this.useragent)&&isVer;},isPlatform:function(platform)
{if(VM._.isArray(platform))
{for(var i=0;i<platform.length;i++)
{if(this.platform===platform[i])
{return true;}}}
return(this.platform===platform);},_performanceCheck:function()
{var rperf=50;if("Explorer"==this.useragent)
{if(this.version<6)
{rperf=50;}
else if(this.version<7)
{rperf=60;}
else if(this.version<8)
{rperf=80;}
else if(this.version<9)
{rperf=80;}}
else if("Firefox"==this.useragent)
{if(this.version<2)
{rperf=60;}
else if(this.version<3)
{rperf=70;}
else if(this.version<4)
{rperf=85;}
else if(this.version<5)
{rperf=95;}}
else if("Firefox"==this.useragent)
{if(this.version<2)
{rperf=60;}
else if(this.version<3)
{rperf=70;}
else if(this.version<4)
{rperf=90;}}
else if("Chrome"==this.useragent)
{if(this.version<2)
{rperf=70;}
else if(this.version<3)
{rperf=80;}
else if(this.version<4)
{rperf=98;}}
return rperf;},isIE7OrLessMode:function()
{return this.ie7orlessmode;},isQuirksMode:function()
{return this.quirksMode;}};$iTXT.core.Browser.init();};$iTXT.js.loader["$iTXT.core.Builder"]=true;$iTXT.core.Builder_Load=function(){var pixelImage="//images.intellitxt.com/ast/tt/09/px.gif";$iTXT.core.Util.cacheImage(pixelImage);$iTXT.core.Builder={NODEMAP:{AREA:'map',CAPTION:'table',COL:'table',COLGROUP:'table',LEGEND:'fieldset',OPTGROUP:'select',OPTION:'select',PARAM:'object',TBODY:'table',TD:'tr',TFOOT:'table',TH:'table',THEAD:'table',TR:'table'},make:function(tagName,attrs,children,doc,allowUnsafe)
{return $iTXT.core.Builder.makeEl(tagName,attrs,children,{doc:doc,allowUnsafe:allowUnsafe});},makeEl:function(tagName,attrs,children,options){var documentContext=document;var allowUnsafe=!!options&&options.allowUnsafe;var rstClass="";if(options&&options.doc){documentContext=options.doc;}
var tag=tagName.toUpperCase();if(!options||!options.resets){rstClass="itxtrst itxtrst"+tag.toLowerCase();}
if(options&&options.resets){rstClass=options.resets;}
if(options&&options.noResets){rstClass="";}
if(options&&options.plusClass){rstClass+=" "+options.plusClass;}
var apngMode=false;var apngSrc="";if("APNG"==tagName)
{tag="IMG";if(window.ActiveXObject)
{apngMode=true;apngSrc=attrs.src;attrs.src=pixelImage;}}
var parentTagName=this.NODEMAP[tag]||'div';var parentTag=documentContext.createElement(parentTagName);try{parentTag.innerHTML="<"+tag+"></"+tag+">";}catch(e){}
var element=parentTag.firstChild||null;if(element&&(element.tagName.toUpperCase()!==tag))
element=element.getElementsByTagName(tag)[0];if(!element)element=documentContext.createElement(tag);if(!element)return;if(attrs)
{var attrString=this._attributes(attrs);if(attrString.length){try{parentTag.innerHTML="<"+tag+" "+attrString+"></"+tag+">";}
catch(err){}
element=parentTag.firstChild||null;if(!element){element=documentContext.createElement(tag);var classAdded=false;for(var attr in attrs)
{try
{element[attr]=attrs[attr];}
catch(ex2)
{element.setAttribute(attr,attrs[attr]);}}}
if(element.tagName.toUpperCase()!=tag)
element=parentTag.getElementsByTagName(tag)[0];}}
if(children)
{this._children(element,children,documentContext,allowUnsafe);}
if(apngMode)
{element.itxtChangeSrc=function(s)
{var pngImg=new Image();pngImg.onload=function()
{element.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+s+"',sizingMethod='image')";element.style.width=pngImg.width+"px";element.style.height=pngImg.height+"px";};pngImg.src=s;};element.itxtChangeSrc(apngSrc);}
else
{element.itxtChangeSrc=function(s)
{element.src=s;};}
if(""!==element.className)
{element.className=rstClass+" "+element.className;}
else
{element.className=rstClass;}
return $iTXT.core.$(element);},makeNoReset:function(tagName,attrs,children,replaceClass){var rsts=replaceClass||"";return $iTXT.core.Builder.makeEl(tagName,attrs,children,{resets:rsts});},_children:function(element,children,documentContext,allowUnsafe)
{for(var i=0;i<children.length;i++)
{var child=children[i];if('string'==typeof child||'number'==typeof child)
{var span=documentContext.createElement("SPAN");child=allowUnsafe?child:$iTXT.core.Util.safeDecode(child);span.innerHTML=child;var x=0;while(span.firstChild)
{element.appendChild(span.firstChild);x++;if(x>10000)
{break;}}}
else
{element.appendChild(children[i]);}}},_attributes:function(attributes)
{var attrs=[];for(var attribute in attributes)
{var an=(attribute=="className")?"class":attribute;attrs.push(an+'="'+attributes[attribute]+'"');}
return attrs.join(" ");}};};$iTXT.js.loader["$iTXT.core.Class"]=true;$iTXT.core.Class_Load=function(){var undefined;$iTXT.core.Class={create:function()
{var parent=null;var properties=arguments[0];if('function'==typeof properties)
{parent=properties;properties=arguments[1];}
properties["itxtClass"]=true;function _newClass()
{this.init.apply(this,arguments);}
if(null!=parent)
{var parentClass=function(){};parentClass.prototype=parent.prototype;_newClass.prototype=new parentClass;}
for(var p in properties)
{this._addProperty(_newClass,p,properties[p],parent);}
return _newClass;},_addProperty:function(_class,_property,_value,_parent)
{if('function'==typeof _value&&_parent&&undefined!=_parent.prototype[_property])
{var parentArguments=_parent.length;var _oldValue=_value;_value=function()
{var _instance=this;var _newArgs=$iTXT.core.Util.args(arguments);var _super=function()
{return _parent.prototype[_property].apply(_instance,arguments);};_newArgs.push(_super);return _oldValue.apply(this,_newArgs);};}
_class.prototype[_property]=_value;}};};$iTXT.js.loader["$iTXT.core.Dom"]=true;$iTXT.core.Dom_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.fire=function()
{var elmt=$iTXT.core.$(document);elmt.itxtFire.apply(elmt,$iTXT.core.Util.args(arguments));};$iTXT.subscribe=function()
{var elmt=$iTXT.core.$(document);elmt.itxtSubscribe.apply(elmt,$iTXT.core.Util.args(arguments));};$iTXT.core.$=function(elmt,dontExt,documentContext)
{documentContext=documentContext||document;if('string'==typeof elmt)
{elmt=documentContext.getElementById(elmt);}
if(!elmt)
return null;if(dontExt||(elmt.itxt&&elmt.itxt.domExtended))
{return elmt;}
else
{elmt=$itxtUtil.extend(elmt,$iTXT.core.Dom);elmt.itxt={};elmt.itxt.domExtended=true;return elmt;}};$iTXT.core.$X=function(elmt,documentContext)
{documentContext=documentContext||document;if('string'==typeof elmt)
{elmt=documentContext.getElementById(elmt);}
elmt.itxt=undefined;for(var prop in $iTXT.core.Dom)
{elmt[prop]=undefined;}
return elmt;};$iTXT.core.Dom={iTXTEvents:{},itxtFire:function(type,data)
{$iTXT.core.Event.fire(this,type,data);return this;},itxtSubscribe:function(type,handler,disposeArray)
{var removeFunc=$iTXT.core.Event.subscribe(this,type,handler);if(VM._.isArray(disposeArray))
{disposeArray.push(removeFunc);}
return this;},itxtBatchSubscribe:function(events,disposeArray)
{if(VM._.isArray(events))
{for(var i=0;i<events.length;i++)
{var pair=events[i];if(pair.length==2)
{var type=pair[0];var handler=pair[1];this.itxtSubscribe(type,handler,disposeArray);}}}
return this;},router:function(scope){return function(evts){var i;if(VM._.isArray(evts)){for(i=0;i<evts.length;i++){evts[i]=[evts[i][0],$iTXT.core.Event.bind(scope,scope[evts[i][1]])];}}
return evts;}},itxtUnSubscribe:function(type,handler)
{$iTXT.core.Event.unsubscribe(this,type,handler);return this;},itxtAddClass:function(addClass,removeClass)
{if(this.className)
{var cNs=this.className.split(' ');var newCNs=[];for(var i=0;i<cNs.length;i++)
{var cn=cNs[i];if(cn!=removeClass&&cn!=addClass)
{newCNs.push(cn);}}
newCNs.push(addClass);this.className=newCNs.join(' ');}
else
{this.className=addClass;}
return this;},itxtRemoveClass:function(removeClass)
{if(this.className)
{var cNs=this.className.split(' ');var newCNs=[];for(var i=0;i<cNs.length;i++)
{var cn=cNs[i];if(cn!=removeClass)
{newCNs.push(cn);}}
this.className=newCNs.join(' ');}
return this;},itxtSetStyle:function(styles,removeStyles)
{if(removeStyles)
{for(var rs in removeStyles)
{this.style[rs]="";}}
if('string'==typeof styles)
{return this.style.cssText+=";"+styles;}
for(var s in styles)
{try
{this.style[s]=styles[s];}
catch(e)
{}}
return this;},itxtSetAttribute:function(atts)
{for(var attribute in atts)
{this[attribute]=atts[attribute];}
return this;},itxtHide:function()
{if(this.style.display!="none")
{this.itxt.display=this.style.display||"";this.style.display="none";}
this.style.visibility="hidden";return this;},itxtShow:function()
{this.style.display=this.itxt.display||"";this.style.visibility="visible";return this;},itxtOpacity:function(o)
{if(window.ActiveXObject)
{this.style['filter']="alpha(opacity="+Math.round(100*o)+");";}
else
{this.style.mozOpacity=o;this.style.opacity=o;}
return this;},itxtAppendChildren:function(children)
{var cl=children.length;for(var i=0;i<cl;i++)
{this.itxtAppendChild(children[i]);}
return this;},itxtAppendChild:function(child)
{if('string'==typeof child)
{this.appendChild(document.createTextNode(child));}
else if(child.nodeType&&$itxtUtil.ELEMENT_NODE==child.nodeType)
{this.appendChild(child);}},itxtClear:function()
{while(this.firstChild)
{this.removeChild(this.firstChild);}},itxtRemoveNode:function()
{try
{if(this.offsetParent)
{this.offsetParent.removeChild(this);}}
catch(e)
{}},itxtTotalOffset:function()
{var element=this;var t=0;var l=0;do
{if((element==document.body)&&("relative"!=element.style.position))
{l+=element.offsetLeft;t+=element.offsetTop;}
else if(element!=document.body)
{l+=element.offsetLeft;t+=element.offsetTop;}
element=element.offsetParent;}
while(element);l=parseInt(l,10);t=parseInt(t,10);var retArr=[l,t];retArr.left=l;retArr.top=t;return retArr;},itxtBounds:function()
{var nOff=this.itxtTotalOffset();var b={left:nOff.left,top:nOff.top,width:this.offsetWidth,height:this.offsetHeight};return b;},itxtGetMargin:function()
{var ro={};ro.left=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'margin-left','marginLeft'),0);ro.top=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'margin-top','marginTop'),0);ro.right=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'margin-right','marginRight'),0);ro.bottom=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'margin-bottom','marginBottom'),0);return ro;},itxtGetPadding:function()
{var ro={};ro.left=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'padding-left','paddingLeft'),0);ro.top=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'padding-top','paddingTop'),0);ro.right=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'padding-right','paddingRight'),0);ro.bottom=$iTXT.core.Util.parseInt($iTXT.core.Util.getStyle(this,'padding-bottom','paddingBottom'),0);return ro;},itxtContains:(function(){if(document.body.contains){return function(node){return this.contains(node);};}
else{return function(node){return!!(this.compareDocumentPosition(node)&16);};}})()};};$iTXT.js.loader["$iTXT.core.Event"]=true;$iTXT.core.Event_Load=function(){var undefined;$iTXT.core.Event={bind:function(source,func)
{return function()
{source.itxtThis=this;return func.apply(source,arguments);};},nsUID:0,subscribe:function(elmt,type,handler)
{elmt=$iTXT.core.$(elmt);var eventName=type;var eventUID=type;if(type.indexOf('.')!=-1)
{var splt=type.split('.');eventName=splt.pop();}
else
{eventUID="evt"+this.nsUID+++"."+eventName;}
var custom=eventName.charAt(0)=='$';if(custom)
{this._addEvt(elmt,eventName,eventUID,handler);}
else
{var intHandler=function(e)
{var newE=e||event;try
{if(!newE.pageX&&!newE.pageY)
{newE.pageX=newE.clientX-document.body.scrollLeft;newE.pageY=newE.clientY-document.body.scrollTop;}}catch(e){}
if(!newE.target&&newE.srcElement)
{newE.target=newE.srcElement;}
try
{if(3==newE.target.nodeType)
{newE.target=newE.target.parentNode;}}catch(exc){}
newE.stop=function()
{newE.cancelBubble=true;if(newE.stopPropagation)
{newE.stopPropagation();}};if(null!=handler)
{var rv=handler.apply(elmt,[newE]);if(false===rv)
{if(e.preventDefault)
{e.preventDefault();}
e.returnValue=false;}
return rv;}};if(elmt.addEventListener)
{elmt.addEventListener(eventName,intHandler,false);}
else if(elmt.attachEvent)
{elmt.attachEvent("on"+eventName,intHandler);}}
this._addEvt(elmt,eventName,eventUID,handler,intHandler);var t=this;var remFunc=function()
{t.unsubscribe(elmt,eventUID,handler);};return remFunc;},_addEvt:function(elmt,eventName,eventUID,handler,intHandler)
{var handlers=elmt.iTXTEvents[eventName]||{};handlers[eventUID]={handler:handler,intHandler:intHandler};elmt.iTXTEvents[eventName]=handlers;},_removeEvt:function(elmt,eventName,eventUID,eventHandler)
{var handlers=elmt.iTXTEvents[eventName]||{};var newHandlers={};for(var handler in handlers)
{if(handler!=eventUID&&handlers[handler].handler!=eventHandler)
{newHandlers[handler]=handlers[handler];}}
elmt.iTXTEvents[eventName]=newHandlers;},_getInternalHandler:function(elmt,eventName,eventUID,eventHandler)
{var handlers=elmt.iTXTEvents[eventName]||{};for(var handler in handlers)
{if(handlers[handler].handler==eventHandler)
{return handlers[handler].intHandler;}}
return null;},unsubscribe:function(elmt,eventUID,handler)
{elmt=$iTXT.core.$(elmt);var eventName=eventUID;if(eventUID.indexOf('.')!=-1)
{var splt=eventUID.split('.');eventName=splt.pop();}
var custom=eventName.charAt(0)=='$';if(!custom)
{var intH=this._getInternalHandler(elmt,eventName,eventUID,handler);if(null!=intH)
{if(elmt.removeEventListener)
elmt.removeEventListener(eventName,intH,false);else if(elmt.detachEvent)
elmt.detachEvent("on"+eventName,intH);}}
this._removeEvt(elmt,eventName,eventUID,handler);},fire:function(elmt,eventName,data)
{if($iTXT.debug.Util.isLoggingOn())
{}
elmt=$iTXT.core.$(elmt);var custom=eventName.charAt(0)=='$';var handlers=elmt.iTXTEvents[eventName]||{};var event={data:data||{}};for(var handler in handlers)
{if('function'==typeof handlers[handler].handler)
{handlers[handler].handler.apply(elmt,[event]);}}},preventDefault:function(e)
{if(e&&e.preventDefault)e.preventDefault();else if(window.event)window.event.returnValue=false;},stop:function(e)
{if(e&&e.stopPropagation)e.stopPropagation();else if(window.event)window.event.cancelBubble=true;}};var eventSplitter=/\s+/;$iTXT.on=function(events,callback,context){var calls,event,list;if(!callback)return this;events=events.split(eventSplitter);calls=this._callbacks||(this._callbacks={});VM._.each(events,function(event){list=calls[event]||(calls[event]=[]);list.push(callback,context);});return this;};$iTXT.off=function(events,callback,context){var event,calls,list,i;if(!(calls=this._callbacks))return this;if(!(events||callback||context)){delete this._callbacks;return this;}
events=events?events.split(eventSplitter):$iTXT.core.Util.objKeys(calls);VM._.each(events,function(event){if(!(list=calls[event])||!(callback||context)){delete calls[event];return;}
for(i=list.length-2;i>=0;i-=2){if(!(callback&&list[i]!==callback||context&&list[i+1]!==context)){list.splice(i,2);}}});return this;};$iTXT.trigger=function(events){var event,calls,list,i,length,args,all,rest;if(!(calls=this._callbacks))return this;rest=[];events=events.split(eventSplitter);for(i=1,length=arguments.length;i<length;i++){rest[i-1]=arguments[i];}
while(event=events.shift()){if(all=calls.all)all=all.slice();if(list=calls[event])list=list.slice();if(list){for(i=0,length=list.length;i<length;i+=2){list[i].apply(list[i+1]||this,rest);}}
if(all){args=[event].concat(rest);for(i=0,length=all.length;i<length;i+=2){all[i].apply(all[i+1]||this,args);}}}
return this;};$iTXT.addEvent=window.addEventListener?function(el,event,callback){el.addEventListener(event,callback,false);}:function(el,event,callback){el.attachEvent('on'+event,callback);};};$iTXT.js.loader["$iTXT.core.Flash"]=true;$iTXT.core.Flash_Load=function(){var undefined;$iTXT.core.Flash={init:function()
{this.version=this.getFlashVersion();},supports:function(maj,min,rev)
{maj=maj||6;min=min||0;rev=rev||0;if(this.version.major>=maj)
{if(this.version.minor>=min)
{if(this.version.revision>=rev)
{return true;}}}
return false;},getFlashVersion:function()
{var versionDims=[0,0,0];if(navigator.plugins&&navigator.mimeTypes.length)
{var fp=navigator.plugins["Shockwave Flash"];if(fp&&fp.description)
{versionDims=fp.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split('.');}}
else
{try
{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
catch(e)
{try
{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");versionDims=[6,0,21];axo.AllowScriptAccess="always";}
catch(e)
{if(0==versionDims[0])
{try
{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}
else if(6==versionDims[0])
{axo=null;}}}
if(null!=axo)
{versionDims=axo.GetVariable("$version").split(" ")[1].split(",");}}
var rV={major:versionDims[0],minor:versionDims[1],revision:versionDims[2]};return rV;}};$iTXT.core.Flash.init();};$iTXT.js.loader["$iTXT.core.Math"]=true;$iTXT.core.Math_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.core.Math={intersects:function(r1,r2)
{var l=(r1.left>r2.left)?r1.left:r2.left;var t=(r1.top>r2.top)?r1.top:r2.top;var r=((r1.left+r1.width)<(r2.left+r2.width))?(r1.left+r1.width):(r2.left+r2.width);var b=((r1.top+r1.height)<(r2.top+r2.height))?(r1.top+r1.height):(r2.top+r2.height);return(l<r&&t<b);},intersectsPercentage:function(r1,r2)
{var l=(r1.left>r2.left)?r1.left:r2.left;var t=(r1.top>r2.top)?r1.top:r2.top;var r=((r1.left+r1.width)<(r2.left+r2.width))?(r1.left+r1.width):(r2.left+r2.width);var b=((r1.top+r1.height)<(r2.top+r2.height))?(r1.top+r1.height):(r2.top+r2.height);if(l<r&&t<b)
{var w=r-l;var h=b-t;var area=w*h;var r1Area=r1.width*r1.height;return area/r1Area;}
return 0;},pointInside:function(rect,point,fuzz){var fuzziness=fuzz||1;return rect.l-fuzziness<point.x&&rect.l+rect.w+fuzziness>point.x&&rect.t-fuzziness<point.y&&rect.t+rect.h+fuzziness>point.y;},arrayMax:function(inA,rnd)
{if(!VM._.isArray(inA)||inA.length==0)
{return null;}
var max=0;for(var i=0;i<inA.length;i++)
{if(!isNaN(inA[i]))
{if(0==max||inA[i]>max)
{max=inA[i];}}}
if(rnd)
{return Math.round(max);}
else
{return max;}},arrayMin:function(inA,rnd)
{if(!VM._.isArray(inA)||inA.length==0)
{return null;}
var min=0;for(var i=0;i<inA.length;i++)
{if(!isNaN(inA[i]))
{if(0==min||inA[i]<min)
{min=inA[i];}}}
if(rnd)
{return Math.round(min);}
else
{return min;}},arrayMean:function(inA,rnd)
{if(!VM._.isArray(inA)||inA.length==0)
{return null;}
var tot=0,len=0;for(var i=0;i<inA.length;i++)
{if(!isNaN(inA[i]))
{tot+=inA[i];len++;}}
var mean=tot/len;if(rnd)
{return Math.round(mean);}
else
{return mean;}},arrayMedian:function(inA,rnd)
{if(!VM._.isArray(inA)||inA.length==0)
{return null;}
inA.sort(function(a,b){return(a-b);});var middle=Math.round(inA.length/2);var median=inA[middle];if(rnd)
{return Math.round(median);}
else
{return median;}}};};$iTXT.js.loader["$iTXT.core.Regex"]=true;$iTXT.core.Regex_Load=function()
{var undefined;$iTXT.core.Regex={hexColor:new RegExp("^([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$"),tagSrc:new RegExp("\\b(src)=\"([^\"]*)\"","i"),tagWidth:new RegExp("\\b(width)=\"([^\"]*)\"","i"),tagHeight:new RegExp("\\b(height)=\"([^\"]*)\"","i"),stripTags:new RegExp("(<([^>]+)>)","gi"),stripNotImgBrScriptTags:new RegExp("(<(?!img|br|script|/script)([^>]+)>)","gi"),stripNotImgBrStrongItalicScriptTags:new RegExp("(<(?!strong|em|b|i|img|br|script|/script)([^>]+)>)","gi"),htmlAnyOpenOrCloseTag:new RegExp("<[^>]*/?>","g"),htmlEntity:new RegExp("&[^\s].*?;","g")};};$iTXT.js.loader["$iTXT.core.Util"]=true;$iTXT.core.Util_Load=function()
{var undefined;$iTXT.core.Util={init:function()
{},httplog:function(msg,data){var log;if(!VM._.isString(msg)){return;}
log=VM._(VM._.isObject(data)?data:{}).chain().pairs().map(function(p){return p[0]+'='+p[1];}).value().join('&');this.dropImage('http://debug/?message='+msg+(log?'&':'')+log);},ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,callbackID:0,args:function(args)
{var rA=[];for(var i=0,len=args.length;i<len;i++)
{rA[i]=args[i];}
return rA;},extend:function(dest,src)
{for(var p in src)
{if(undefined!=src[p])
{try
{dest[p]=src[p];}
catch(e)
{}}}
return dest;},isObject:function(o)
{return!VM._.isArray(o)&&!VM._.isFunction(o)&&VM._.isObject(o)&&!o.itxtClass;},isClass:function(o)
{return VM._.isObject(o)&&o.itxtClass;},isURL:function(s,i)
{if('string'!=typeof s)
{return false;}
else if(i&&(s.match($iTXT.cnst.DNS_INTELLITXT_SUFFIX)||s.match($iTXT.cnst.DNS_SMARTAD_MARKER)))
{return false;}
else
{var m1=s.match("^(\/|javascript\:)");if(null!=m1)
{return true;}
var m2=s.match("^(https?|mailto|ftp|wais|file|gopher|telnet)://");return(null==m2)?false:true;}},cleanString:function(s)
{if('string'!=typeof s)
{return s;}
else
{return s.replace(/(\t|[\n\r])/g,' ').replace(/\s{2,}/g,' ').replace(/(^\s+|\s+$)/g,'');}},getEmbeddedURL:function(src)
{if(null==src)
{return src;}
var url='';var urlMatch=src.match(/=\"(http[^\"]+)\"/);if(null==urlMatch||!urlMatch[1])
{return src;}
else
{url=urlMatch[1];}
return url;},appendToURL:function(url,param,before)
{{if(null==url||'string'!=typeof url||null==param||'string'!=typeof param||''==param)
{return url;}
if(null!=before&&'string'==typeof before)
{var target=url.match(new RegExp("[\?|\&]"+before+'='));if(null!=target&&'string'==typeof target[0]&&target[0].length==(before.length+2))
{var rep=target[0].slice(0,1)+param+'&'+target[0].slice(1);return url.replace(target,rep);}}
return url+((url.indexOf('?')>=0)?'&':'?')+param;}},dropImage:function(src,cb,eh)
{var img=$iTXT.core.Builder.make("IMG",{src:src,style:"width:0px;height:0px;display:none;visibility:hidden;"});if(cb&&'function'==typeof cb)
{img.itxtSubscribe("load",cb);}
if(eh&&'function'==typeof eh)
{img.itxtSubscribe("error",eh);}
var c=$iTXT.js.exclCont();c.insertBefore(img,c.firstChild);},dropIframe:function(src,cb,eh)
{src=this.getEmbeddedURL(src);var iframe=$iTXT.core.Builder.make("IFRAME",{src:src,style:"width:0px;height:0px;display:none;visibility:hidden;"});if(cb&&'function'==typeof cb)
{iframe.itxtSubscribe("load",cb);}
if(eh&&'function'==typeof eh)
{iframe.itxtSubscribe("error",eh);}
var c=$iTXT.js.exclCont();c.insertBefore(iframe,c.firstChild);},dropScriptAtLocation:function(url,dropZone){var typeofurl=Object.prototype.toString.call(url),script,i;dropZone=document.querySelector(dropZone)||document.body;if(typeofurl!=='[object String]'&&typeofurl!=='[object Array]'){return false;}
if(typeofurl==='[object String]'){url=[url];}
for(i=0;i<url.length;i++){script=document.createElement('script');script.src=url[i];dropZone.appendChild(script);}
return true;},dropScript:function(src,cb,eh,direct)
{if('string'!=typeof src||(!src.match(/^(https?:)?\/\//))){return;}
try
{var newS=document.createElement('script');var c=$iTXT.js.exclCont();var removeFunc=function()
{c.removeChild(newS);};if('function'==typeof cb)
{if(direct){if(cb&&'function'==typeof cb)
{if(newS.onreadystatechange!==undefined)
{newS.onreadystatechange=function(){if('loaded'==newS.readyState||'complete'==newS.readyState)
{newS.onreadystatechange=null;cb();};};}else{$iTXT.core.$(newS).itxtSubscribe("load",cb);}}}else{var cbFunc=this.callbackFunction(cb,newS,removeFunc);if(src.indexOf('?')!=-1)
{src+="&jscallback="+cbFunc;}
else
{src+="?jscallback="+cbFunc;}}}
if(eh&&'function'==typeof eh)
{$iTXT.core.$(newS).itxtSubscribe("error",eh);if(newS.onreadystatechange!==undefined)
{newS.onreadystatechange=function(){if(newS.readyState=='loaded')
{eh();};};};}
newS.src=src;newS.type='text/javascript';c.insertBefore(newS,c.firstChild);}
catch(e)
{}},callbackFunction:function(f,src,removeFunc)
{var cbName="callback"+(this.callbackID++);$iTXT.js[cbName]=function()
{if(f)
{var args=$iTXT.core.Util.args(arguments);args[args.length]=removeFunc;if(src)
{f.apply(src,args);}
else
{f(args);}}};return"$iTXT.js."+cbName;},getQueryParams:function(srcUrl)
{if(srcUrl.indexOf('?')==-1)
{return{};}
var params={};var qs=srcUrl.substring(srcUrl.indexOf('?')+1);var pairs=qs.split('&');for(var i=0,len=pairs.length;i<len;i++)
{var keyPair=pairs[i].split('=',2);if(keyPair.length==2)
{params[keyPair[0]]=unescape(keyPair[1]);}}
return params;},getWindowSize:function(win,doc)
{win=win||window;doc=doc||document;var vW;var vH;if(typeof win.innerWidth!='undefined')
{vW=win.innerWidth;vH=win.innerHeight;}
else if(typeof doc.documentElement!='undefined'&&typeof doc.documentElement.clientWidth!='undefined'&&doc.documentElement.clientWidth!=0)
{vW=doc.documentElement.clientWidth;vH=doc.documentElement.clientHeight;}
else
{vW=doc.getElementsByTagName('body')[0].clientWidth;vH=doc.getElementsByTagName('body')[0].clientHeight;}
var rObj=[vW,vH];rObj.width=vW;rObj.height=vH;return rObj;},getPageSize:function()
{var doc=document,h;h=Math.max(Math.max(doc.body.scrollHeight,doc.documentElement.scrollHeight),Math.max(doc.body.offsetHeight,doc.documentElement.offsetHeight),Math.max(doc.body.clientHeight,doc.documentElement.clientHeight));return{height:h};},isElementVisible:function(el,bounds)
{var rect=el.getBoundingClientRect(),winSize=this.getWindowSize();var l_edge=0,r_edge=winSize.width,t_edge=0,b_edge=winSize.height;if(bounds){l_edge=bounds.left||0;r_edge=bounds.right||r_edge;t_edge=bounds.top||0;b_edge=bounds.bottom||b_edge;}
return rect.top>=t_edge&&rect.left>=l_edge&&rect.bottom<=b_edge&&rect.right<=r_edge;},getVisiblePercent:function(el)
{var rect=el.getBoundingClientRect(),winSize=this.getWindowSize();var intersectionArea=Math.max(0,Math.min(rect.right,winSize.width)-Math.max(rect.left,0))*Math.max(0,Math.min(rect.bottom,winSize.height)-Math.max(rect.top,0));var rectArea=Math.max(0,rect.right-rect.left)*Math.max(0,rect.bottom-rect.top);return 100*(intersectionArea/rectArea);},getElementPosition:function(el)
{var box=el.getBoundingClientRect();var body=document.body;var docElem=document.documentElement;var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;var clientTop=docElem.clientTop||body.clientTop||0;var clientLeft=docElem.clientLeft||body.clientLeft||0;var top=box.top+scrollTop-clientTop;var left=box.left+scrollLeft-clientLeft;return{top:Math.round(top),left:Math.round(left)};},getPosition:function(el){var pos=$iTXT.core.Util.getPositionRecursively(el);if(!$iTXT.core.Browser.is("Explorer")){var p_top=parseInt($iTXT.core.Util.getStyle(document.documentElement,'margin-top'));var p_left=parseInt($iTXT.core.Util.getStyle(document.documentElement,'margin-left'));pos.top=pos.top+(isNaN(p_top)?0:p_top);pos.left=pos.left+(isNaN(p_left)?0:p_left);}
return pos;},getCurrentPosition:function(el){var rect=el.getBoundingClientRect();var pos={top:0,left:0};var offset={};if(window.pageXOffset!==undefined){offset.top=window.pageYOffset;offset.left=window.pageXOffset+document.body.getBoundingClientRect().left;}else{offset.top=document.documentElement.scrollTop;offset.left=document.documentElement.scrollLeft;}
pos.left=Math.floor(rect.left)-offset.left;pos.top=Math.floor(rect.bottom)+offset.top-el.offsetHeight;return pos;},getPositionRecursively:function(el){var pos={top:0,left:0};var orig_el=el;while(el){if(window.getComputedStyle&&getComputedStyle(el)["position"]=="fixed"){return orig_el.getBoundingClientRect();}
pos.top+=el.offsetTop;pos.left+=el.offsetLeft
el=el.offsetParent;}
return pos;},getPageScroll:function()
{var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number'){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
var reObj=[scrOfX,scrOfY];reObj.x=scrOfX;reObj.y=scrOfY;return reObj;},inArray:function(arr,val)
{if(VM._.isArray(arr))
{var i=arr.length;while(i--)
{if(this.fuzzyMatch(val,arr[i]))
{return true;}}}
return false;},objValues:function(obj)
{var rA=[];for(var key in obj)
{if(obj[key]&&'function'!=typeof obj[key])
{rA[rA.length]=obj[key];}}
return rA;},objKeys:function(obj)
{var rA=[];for(var key in obj)
{if(obj[key]&&'function'!=typeof obj[key])
{rA[rA.length]=key;}}
return rA;},objCount:function(obj)
{return this.objValues(obj).length;},cacheImage:function(src)
{var im=new Image();im.src=src;},cacheImages:function(imgs)
{var i=imgs.length;while(i--)
{this.cacheImage(imgs[i]);}},flattenJSON:function(object)
{return _iter(object,0);function _iter(obj,depth)
{var out='';if('object'==typeof obj&&!obj.nodeType)
{for(var elem in obj)
{var val=obj[elem];if('object'==typeof val&&!obj.nodeType)
{out+=elem+_iter(val,(depth+1));}
else if('function'!=typeof val)
{out+=elem+val;}}}
else if('function'!=typeof obj)
{out+=obj;}
return out;}},serialiseJSON:function(object,flds,fi)
{return _iter(object,0,flds);function _iter(obj,depth,flds)
{var out='';if('function'!=typeof obj&&($iTXT.core.Util.isObject(obj)||VM._.isArray(obj)||$iTXT.core.Util.isClass(obj))&&!obj.nodeType)
{var c=0;for(var elem in obj)
{var val=obj[elem];if(null!=val&&'function'!=typeof val&&'itxt'!=elem.substr(0,4)&&'$'!=elem.substr(0,1)&&(undefined==flds||($iTXT.core.Util.isObject(flds)&&('itxtAllowed'==flds[elem]||!isNaN(elem)))))
{var pass='';var name='';var next=null;if(isNaN(elem)||fi)
{name+=elem+':';}
if(VM._.isArray(val))
{next=_iter(val,(depth+1),flds);if(''!=next)
{pass+=name+'['+next+']';}}
else if($iTXT.core.Util.isObject(val))
{next=_iter(val,(depth+1),flds);if(''!=next)
{pass+=name+'{'+next+'}';}}
else if(!isNaN(val)&&'string'!=typeof val)
{pass+=name+val;}
else if('string'==typeof val)
{var delim=(val.match(/^(\{|\[\{).*(\}\]|\})$/)||name=='')?'':'"';pass+=name+delim+val+delim;}
if(c>0&&''!=pass&&''!=out)
{pass=','+pass;}
c++;out+=pass;}}
if(0==depth)
{out='{'+out+'}';}}
return out;}},fuzzyMatch:function(s1,s2)
{if('string'!=typeof s1||'string'!=typeof s2)
{return false;}
if('*'==s1)
{return true;}
if(s1.indexOf('*')<0)
{return(s1.toLowerCase()==s2.toLowerCase());}
if('*'==s1.substr(0,1)&&'*'==s1.substr(-1,1))
{return!!(s2.indexOf(s1.replace(/\*/g,''))>=0);}
var m=new RegExp(((s1.match(/\*$/,''))?'^':'')+(s1.replace(/\*/g,''))+((s1.match(/^\*/,''))?'$':''));return(null!=s2.match(m));},formatJSONString:function(s,h)
{var a=s.split("");var o="";var d=0;var nl=(h)?"<br/>":"\n";var tb=(h)?"&nbsp;&nbsp;&nbsp;&nbsp;":"\t";var isQu=false;var qCh="";var hOn=(h)?'<span style="color:red">':"";var hOf=(h)?'</span>':"";var mOpe=/(\{|\[)/;var mClo=/(\}|\])/;var mQuo=/(\"|\')/;var mEsc=/\\/;var mPro=/\,/;function tab(dpt)
{var tO=nl;var i=dpt;while(i--)
{tO+=tb;}
return tO;}
for(var i=0,len=a.length;i<len;i++)
{var ch=a[i];var pc=a[i-1]||'';var nc=a[i+1]||'';if(ch.match(mQuo)&&!pc.match(mEsc))
{if((isQu&&ch==qCh)||!isQu)
{o+=hOn+ch+hOf;isQu=!isQu;qCh=(isQu)?ch:"";}
else
{if(isQu)
{o+=hOn+ch+hOf;}}}
else if(isQu)
{o+=hOn+ch+hOf;}
else if(ch.match(mOpe))
{o+=tab(d);o+=ch;d++;if(ch.match(/{/))
{o+=tab(d);}}
else if(ch.match(mClo))
{d--;o+=tab(d);o+=ch;}
else if(ch.match(mPro)&&!nc.match(mOpe))
{o+=ch;o+=tab(d);}
else
{o+=ch;}}
return o;},genUUID:function()
{return(s4()+s4()+"-"+s4()+"-4"+s4().substring(1,4)+"-"+sp()+"-"+s4()+s4()+s4());function s4()
{return(((1+Math.random())*0x10000)|0).toString(16).substring(1);}
function sp()
{var r4='';do
{r4=s4();}
while("8"!=r4.substring(0,1)&&"9"!=r4.substring(0,1)&&"a"!=r4.substring(0,1)&&"b"!=r4.substring(0,1));return r4;}},getNodeText:function(n)
{try
{if(n)
{return n.nodeValue;}}
catch(e)
{}
return"";},cloneObject:function(src)
{var rO={};for(var p in src)
{if(undefined!=src[p])
{if(this.isObject(src[p]))
{rO[p]=this.cloneObject(src[p]);}
else
{rO[p]=src[p];}}}
return rO;},decodeQueryString:function(s,qSep,vSep)
{var rob={};if(!qSep)qSep='&';if(!vSep)vSep='=';var comps=s.split(qSep);var i=comps.length;while(i--)
{var kvP=comps[i];var kvPComps=kvP.split(vSep);if(kvPComps.length==2)
{rob[kvPComps[0]]=kvPComps[1];}
else if(kvPComps.length>2)
{var key=kvPComps.shift();var keyValue=kvPComps.join(vSep);rob[key]=keyValue;}}
return rob;},buildQueryString:function(o,qSep,vSep)
{var str=[];if(!qSep)qSep='&';if(!vSep)vSep='=';for(var k in o){if(o.hasOwnProperty(k)){str.push(k+vSep+o[k]);}}
return str.join(qSep);},appendQueryString:function(url,extra){var qs;if(url.indexOf('?')==-1){qs={};}else{qs=url.substr(url.indexOf('?')+1);qs=$iTXT.core.Util.decodeQueryString(qs);url=url.substr(0,url.indexOf('?'));}
if(VM._.isString(extra)){extra=$iTXT.core.Util.decodeQueryString(extra);}
qs=VM._.defaults(qs,extra);return url+'?'+$iTXT.core.Util.buildQueryString(qs);},without:function(array,element)
{for(var i=0,len=array.length;i<len;i++)
{if(array[i]==element)
{array.splice(i,1);return array;}}},parseColorArray:function(s,n,c)
{if(null==s||""==s)
return[];c=c||',';var colors=s.split(c);if(colors.length<n)
{var lc=colors[colors.length-1];while(colors.length<n)
{colors[colors.length]=lc;}}
return colors;},summarize:function(s,len,br,brLength)
{if(s.match($iTXT.core.Regex.htmlEntity))
{var compS=s.replace($iTXT.core.Regex.htmlEntity,'~');if(compS&&s.length>compS.length)
{len=parseInt(len)+parseInt(s.length-compS.length);}}
br=br||"...";brLength=brLength||br.length;var rs=s;if(rs&&rs.length>len)
{rs=s.substring(0,len-brLength);var fsp=false;var spos=rs.length-1;while(!fsp&&spos>0)
{if(" "!=rs.charAt(spos))
{spos--;}
else
{fsp=true;}}
if(fsp)
{rs=s.substring(0,spos);}
rs+=br;}
return rs;},htmlTextLength:function(s)
{s=s.replace($iTXT.core.Regex.htmlEntity,'~');s=s.replace($iTXT.core.Regex.htmlAnyOpenOrCloseTag,'');return s.length;},strRepeat:function(c,n)
{var rs="";while(n--)
{rs+=c;}
return rs;},isoTs:function()
{var digitString=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];var rs="";var d=new Date();rs+=d.getUTCFullYear();rs+=digitString[d.getUTCMonth()+1];rs+=digitString[d.getUTCDate()];rs+=digitString[d.getUTCHours()];rs+=digitString[d.getUTCMinutes()];rs+=digitString[d.getUTCSeconds()];return rs;},ts:function()
{return(new Date()).getTime();},td:function(t)
{return this.ts()-t;},convertSpaces:function(t)
{if('string'!=typeof t)
{return'';}
return t.replace(/\xA0+|\s+/g,' ');},getInnerText:function(n,maxt,st)
{st=st||this.ts();maxt=maxt||0;if((maxt>0)&&(this.td(st)>maxt))
{throw("");}
var nT=n.nodeType;var nV=n.nodeValue||'';var tag=(n.tagName||'').toLowerCase();if((nT==$iTXT.core.Dom.COMMENT_NODE)||n.itxtvisited)
{return'';}
if(this.inArray(tag,['script','a','embed','noscript','applet','xml','iframe','object','img','style','form']))
{return'';}
if(nT&&this.TEXT_NODE==nT)
{return this.cleanString(nV);}
n.itxtvisited=1;var rT='';var cn=$iTXT.core.$A(this.toArray(n.childNodes));cn.itxtEach(function(o)
{try
{rT+=this.getInnerText(o,maxt,st);}
catch(e)
{throw(rT);}},this);return rT;},getContentEncoding:function()
{var e='';try
{$iTXT.core.$A(document.getElementsByTagName('META')).itxtEach(function(o)
{if(o.content)
{var c=o.content.toLowerCase(),o=c.indexOf('charset=');if(o>=0)
{var re=/([\w\-]+)/,s=re.exec(c.substring(o+8));if(s)
{e=s[0];}}}},this);}
catch(x){}
return e;},toArray:function(obj)
{var retArr=[];var pS=Object.prototype.toString.call(obj);var className=pS.substring(pS.indexOf(' ')+1,pS.indexOf(']'));if("NodeList"==className)
{for(var i=0,len=obj.length;i<len;i++)
{retArr[retArr.length]=obj[i];}}
return retArr;},openUrl:function(url,cts)
{if(cts)
{this._changeLocation(url);}
else
{var blocked=false;var windowName='swnd_'+Math.floor(Math.random()*50);var windowHandle=null;try
{var winOpts=$iTXT.glob.params.get("open.win.opts","");windowHandle=window.open(url,windowName,winOpts);}
catch(e)
{blocked=true;}
if(windowHandle)
{var t=this,n=new Date().getTime();window.setTimeout(function()
{t._chkWindow(windowHandle,url,n);},50);}
else
{blocked=true;}
if(blocked)
{this._changeLocation(url);}}},_chkWindow:function(w,url,then)
{if(then){var now=new Date().getTime();if((now-then)>100){return;}}
var clsd=0;try
{clsd=w.closed;}
catch(e){}
if(!w||clsd||($iTXT.core.Browser.is("Chrome")&&w.document&&w.document.webkitHidden)||($iTXT.core.Browser.is("Opera")&&null==w.name))
{this._changeLocation(url);}},_changeLocation:function(url)
{var deferrers=[];var cbFunc=function()
{deferrers.shift();if(deferrers.length==0)
{document.location=url;}};var deferFunc=function(src)
{deferrers[deferrers.length]=src;};$iTXT.fire("$iTXT:location:change",{defer:deferFunc,cb:cbFunc});if(deferrers.length==0)
{document.location=url;}},parseFlashAdxParameters:function(advert)
{var adxParams={};var adx=advert.params.get("ADX");if(adx&&adx.indexOf("^^")!=-1)
{var adxComps=adx.split("^^");var i=adxComps.length;while(i--)
{var adxP=adxComps[i];if(-1!=adxP.indexOf(':'))
{var adxPname=adxP.substring(0,adxP.indexOf(':'));if("bg"==adxPname)
{adxPname="fl.bg";}
var adxPvalue=adxP.substring(adxP.indexOf(':')+1);adxParams[adxPname]=adxPvalue;advert.params.set(adxPname,adxPvalue,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}}
else if(adx)
{var adxParts=this.decodeQueryString(adx,'^^',':');for(var key in adxParts)
{var pName=key;if("bg"==pName)
{pName="fl.bg";}
advert.params.set(pName,decodeURIComponent(adxParts[key]),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}},getQryPair:function(key,params)
{if(key&&params)
{var name=key;var qName=key;if(VM._.isArray(key))
{name=key[1];qName=key[0];}
var val=params.get(name);if(val!=null)
{return qName+"="+encodeURIComponent(val);}}
return"";},generateQueryString:function(keys,params)
{var retStr="";for(var i=0,len=keys.length;i<len;i++)
{var key=keys[i];var pair=this.getQryPair(key,params);if(null!=pair&&""!=pair)
{if(i>0)
{retStr+="&";}
retStr+=pair;}}
return retStr;},validHexColor:function(c)
{var rS=c;if(c&&'string'==typeof c)
{if("#"!=c.charAt(0))
{if(c.match($iTXT.core.Regex.hexColor))
{rS="#"+c;}}}
return rS;},getText:function(n)
{if(n)
{return this.cleanString(n.innerText||n.textContent);}
return"";},getTagName:function(t)
{if(t.charAt(0)=="<")
{t=t.substring(1);}
if(t.indexOf(">")!=-1)
{t=t.substring(0,t.indexOf(">"));}
if(t.charAt(t.length-1)=="/")
{t=t.substring(0,t.length-1);}
return t;},hasCapitals:function(s)
{return null!=s.match(/[A-Z\u00C0-\u00D6\u00D8-\u00DF\u0401-\u042F\u0386\u0388-\u03AB]/);},hasPunctuation:function(s)
{return null!=s.match(/[-!\"#$%&\'()*+,.\/:;<=>?@[\\\]^_`{|}~]/);},nodeIndex:function(n)
{var pn=n.parentNode;if(n&&pn)
{for(var i=0,len=pn.childNodes.length;i<len;i++)
{if(pn.childNodes[i]==n)
{return i;}}}
return-1;},parseAdExtensions:function(adx)
{var ro={};var adxPairs=[adx];if(null!=adx&&adx.indexOf("^^")!=-1)
{adxPairs=adx.split("^^");}
for(var i=0;i<adxPairs.length;i++)
{var pair=adxPairs[i];if(null!=pair&&-1!=pair.indexOf(':'))
{var pairArr=pair.split(":");if(pairArr.length==2)
{ro[pairArr[0]]=pairArr[1];}}}
return ro;},parseBool:function(s)
{return("1"==s||"true"==s||true===s);},getStyle:function(e,s,s2)
{if(e.currentStyle)
{s=s2||s;return e.currentStyle[s];}
else if(window.getComputedStyle)
{return document.defaultView.getComputedStyle(e,null).getPropertyValue(s);}
return"";},parsePixels:function(s)
{try
{s=s.replace("px","");var r=parseInt(s);if(!isNaN(r))
{return r;}}
catch(e)
{}
return 0;},loadTemplate:function(name,callback)
{var subscribeArray=[];var unSubscribeFunc=null;var t=this;$iTXT.subscribe("$iTXT:tmpl:load",function()
{if($iTXT.tmpl.loader['$iTXT.tmpl.js.'+name])
{if(VM._.isFunction(callback))
{callback();}
if(VM._.isFunction(unSubscribeFunc))
{unSubscribeFunc();}}},subscribeArray);unSubscribeFunc=subscribeArray.pop();$iTXT.tmpl.dependsOn(name,false);},listZindex:function(){var arrZindex={};var domElems=document.body.getElementsByTagName("*");var elem;var max=2147483647;for(var e=0;e<domElems.length;e++){elem=domElems[e];if('script'===elem.tagName.toLowerCase()||!elem.id){continue;}
if(elem.style.zIndex&&elem.style.zIndex>=max){arrZindex[elem.id]=elem.style.zIndex;continue;}
if($iTXT.core.Util.getStyle(elem,'z-index')>=max){arrZindex[elem.id]=0;}}
return arrZindex;},fixZindex:function(){var arrZindex=$iTXT.ui.listZindex;VM._.each(arrZindex,function(zIndex,id){document.getElementById(id).style.zIndex=2147483646;});},resetZindex:function(arrZindex){var arrZindex=$iTXT.ui.listZindex;VM._.each(arrZindex,function(zIndex,id){if(zIndex==0){document.getElementById(id).style.removeProperty("z-index");}else{document.getElementById(id).style.zIndex=zIndex;}});},highestZIndex:function()
{var z=0,y;var elements=document.getElementsByTagName("*");var el=elements.length;for(var i=0;i<el;i++)
{var elmt=elements[i];y=parseInt(this.getStyle(elmt,'z-index','zIndex'),10);y=isNaN(y)?0:y;z=Math.max(z,y);}
return z;},parseInt:function(s,d)
{try
{return parseInt(s);}
catch(e)
{}
return d;},safeDecode:function(s)
{try
{var rx=/<[\/]?([^> ]+)[^>]*>/gi;var matches=s.match(rx);if(null!=matches)
{var res,newS='',index=0,lastIndex=0;while((res=rx.exec(s))!=null)
{var part=s.substring(lastIndex,res.index);if(part&&''!=part)
{try
{part=decodeURIComponent(part);}
catch(x){}}
newS+=part+res[0];lastIndex=rx.lastIndex;}
if(lastIndex<s.length)
{var lastpart=s.substring(lastIndex,s.length);if(lastpart&&''!=lastpart)
{try
{lastpart=decodeURIComponent(lastpart);}
catch(x){}}
newS+=lastpart;}
s=newS;}
else
{s=decodeURIComponent(s);}}
catch(x){}
return s;},decodeHtmlEntities:function(str)
{var node;if(!VM._.isString(str)){return str;}
node=document.createElement('p');node.innerHTML=str;return node.innerHTML;},removeSWF:function(obj)
{if(obj)
{(function(){if(obj.readyState==4)
{$iTXT.core.Util.removeSWFIE(obj);}
else
{setTimeout(arguments.callee,10);}})();}},removeSWFIE:function(obj)
{if(obj)
{for(var i in obj)
{if(typeof obj[i]=="function")
{obj[i]=null;}}
obj.parentNode.removeChild(obj);}}};$iTXT.core.Util.init();};