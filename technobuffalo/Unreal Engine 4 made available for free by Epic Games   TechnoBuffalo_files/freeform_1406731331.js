/* This source code is Copyright (c) Vibrant Media 2001-2015 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
if(!$iTXT){var $iTXT={};}
if(!$iTXT.tmpl){$iTXT.tmpl={};}
if(!$iTXT.tmpl.js){$iTXT.tmpl.js={};}
$iTXT.tmpl.loader["$iTXT.tmpl.js.FreeForm"]=true;$iTXT.tmpl.js.FreeForm_Load=function()
{$iTXT.tmpl.js.FreeForm=$iTXT.core.Class.create($iTXT.tmpl.TemplateBase,{afterTokenize:function()
{var clickUrlStr,comps,w,h;var logoUrl=this.advert.params.get("tt.logo.url");var flashSrc=this.advert.params.get("flashsrc");var imageSrc=this.advert.params.get("imagesrc");var iframeSrc=this.advert.params.get("iframe.src");if(logoUrl&&logoUrl.toLowerCase().indexOf("<iframe")>=0)
{iframeSrc=logoUrl;}
if(iframeSrc&&""!==iframeSrc)
{this.removeElement("ImageRow");this.removeElement("FlashRow");this._parseIframe(iframeSrc);}
else if(imageSrc&&""!==imageSrc&&imageSrc.toLowerCase().indexOf("<iframe")!=-1)
{this.removeElement("ImageRow");this.removeElement("FlashRow");this._parseIframe(imageSrc);}
else if(imageSrc&&""!==imageSrc)
{this.removeElement("IframeRow");this.removeElement("FlashRow");}
else if(flashSrc&&""!==flashSrc)
{var fsv=this.advert.params.get("FSV");fsv=this.advert.params.get("fl.support.version",fsv);var canFlash=$iTXT.core.Flash.supports(fsv);if(canFlash)
{$iTXT.core.$(document).itxtSubscribe("$iTXT:tt:mouse:over",$iTXT.core.Event.bind(this,this._ttMouseOver));$iTXT.core.$(document).itxtSubscribe("$iTXT:tt:mouse:out",$iTXT.core.Event.bind(this,this._ttMouseOut));$iTXT.core.$(document).itxtSubscribe("$iTXT:hook:over",$iTXT.core.Event.bind(this,this._hookIn));$iTXT.core.$(document).itxtSubscribe("$iTXT:hook:out",$iTXT.core.Event.bind(this,this._hookOut));this.removeElement("ImageRow");this.removeElement("IframeRow");if(flashSrc.indexOf("$$")!=-1)
{clickUrlStr=flashSrc.substring(flashSrc.indexOf("clickURL="));var newFlashSrc=flashSrc.substring(0,flashSrc.indexOf("&clickURL="));comps=clickUrlStr.split("$$");if(comps.length>3)
{w=comps[1];h=comps[2];this.options.width=this.defaultWidth=parseInt(w,10);this.options.height=this.defaultHeight=parseInt(h,10);}
if(newFlashSrc.indexOf('?')!=-1)
{var queryString=newFlashSrc.substring(newFlashSrc.indexOf('?')+1);if(queryString.indexOf('adx=')!=-1)
{var adx=queryString.substring(queryString.indexOf('adx=')+4);var lastHatPos=adx.lastIndexOf('^^');if(-1!=lastHatPos)
{var lastHatStr=adx.substring(lastHatPos+2);var lastAmpPos=lastHatStr.indexOf('&');if(""!==lastHatStr&&-1!=lastAmpPos)
{adx=adx.substring(0,lastHatPos+lastAmpPos+2);}
this.advert.params.set("adx",adx,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);var adxParams=$iTXT.core.Util.parseAdExtensions(adx);if(undefined!==adxParams.bg)
{adxParams["ff.bg"]=adxParams.bg;delete adxParams.bg;}
this.advert.params.set(adxParams,null,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);queryString=queryString.replace('adx='+adx+'&','');}}
newFlashSrc=newFlashSrc.substring(0,newFlashSrc.indexOf('?'));var qParams=queryString.split("&");var extraVars={};for(var i=0;i<qParams.length;i++)
{var qp=qParams[i];if(-1!=qp.indexOf('='))
{var qPname=qp.substring(0,qp.indexOf('='));var qPvalue=qp.substring(qp.indexOf('=')+1);try
{extraVars[qPname]=decodeURIComponent(qPvalue);}
catch(x)
{extraVars[qPname]=qPvalue;}}}
this.advert.params.set("templateFlashVars",extraVars,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
this.advert.params.set("flashsrc",newFlashSrc,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}
else
{this.removeElement("IframeRow");this.removeElement("FlashRow");if(flashSrc.indexOf("$$")!=-1)
{clickUrlStr=flashSrc.substring(flashSrc.indexOf("clickURL="));comps=clickUrlStr.split("$$");if(comps.length>3)
{w=comps[1];h=comps[2];this.options.width=this.defaultWidth=parseInt(w,10);this.options.height=this.defaultHeight=parseInt(h,10);this.advert.params.set("imagesrc",comps[3],$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}}}},_ttMouseOver:function()
{$iTXT.fire("$iTXT:flash:setvar",{key:"jsAudioAdjust",value:"AUDIO_ON"});},_ttMouseOut:function()
{$iTXT.fire("$iTXT:flash:setvar",{key:"jsAudioAdjust",value:"AUDIO_OFF"});},_hookIn:function()
{$iTXT.fire("$iTXT:flash:setvar",{key:"jsAudioAdjust",value:"AUDIO_ON"});},_hookOut:function()
{if(!$iTXT.ui.tt.isMouseOver)
{$iTXT.fire("$iTXT:flash:setvar",{key:"jsAudioAdjust",value:"AUDIO_OFF"});}},_parseIframe:function(src)
{var temp_div=document.createElement("div");temp_div.innerHTML=src;var temp_iframes=temp_div.getElementsByTagName('iframe');var iframe=temp_iframes[0];var width=iframe.width||"";var height=iframe.height||"";var w=$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN;this.advert.params.set("iframe.src",iframe.src,w);this.options.width=this.defaultWidth=width;this.advert.params.set("ff.width",width,w);this.options.height=this.defaultHeight=height;this.advert.params.set("ff.height",height,w);},afterExpand:function(khrome){if(khrome&&'function'!=typeof khrome){khrome.addPaddingAndBorder(this.width,this.height);}},afterOpen:function(khrome){if(khrome&&'function'!=typeof khrome){khrome.addLeftMargin();khrome.addPaddingAndBorder(this.width,this.height);}},beforeOpen:function()
{var bgc=this.advert.params.get("bgc",this.advert.params.get("ff.bg"));if(null!==bgc)
{$iTXT.fire("$iTXT:tt:global:set:bgcol",bgc);$iTXT.fire("$iTXT:tt:global:set:hvcol",bgc);}
var iframesrc=this.advert.params.parse("${iframe.src}");var iframerow=this.getComponentByUID("IframeRow");if(iframesrc&&iframerow)
{if($iTXT.tmpl.Flash.prototype.isMoatEnabled(this.advert))
{iframesrc+=(iframesrc.indexOf('?')==-1)?'%3F':'%26';iframesrc+=$iTXT.tmpl.Flash.prototype.getMoatQueryString(this.advert);}
iframerow.cells[0].element.iframe.src=iframesrc;}
var flMC=this.getComponentByUID("FreeformFlashMC");if(flMC&&flMC.reset)
{flMC.reset();}},beforeClose:function()
{var iframesrc=this.advert.params.get("iframe.src");var iframerow=this.getComponentByUID("IframeRow");var flashComp=this.getComponentByUID('FreeformFlashMC');if(iframesrc&&iframerow)
{iframerow.cells[0].element.iframe.src="";}
if(flashComp)
{flashComp.removeFlash();}},init:function(_options,$super)
{this.paramDefaults=$iTXT.core.Util.extend({'ff.width':'${width}','ff.height':'${height}','width':300,'height':250},this.paramDefaults);var defOpts=$iTXT.core.Util.extend({width:'${width}',height:'${height}',dontColorTailTop:true,styles:{cursor:'pointer'}},_options);this.structure=[{type:'row',UID:'ImageRow',height:'**',width:'**',structure:[{type:'cell',height:'**',width:'**',structure:[{type:'comp',klass:'$iTXT.tmpl.Image',height:'**',width:'**',id:'itxtimg',styles:{},props:{src:'${IMAGESRC}',loadingwidth:'${ff.width}',loadingheight:'${ff.height}'},events:{onMouseClick:function(e)
{var opts={advert:this.advert};$iTXT.core.$(document).itxtFire("$iTXT:tt:click",opts);}}}]}]},{type:'row',UID:'FlashRow',structure:[{type:'cell',structure:[{type:'comp',klass:'$iTXT.tmpl.Flash',UID:"FreeformFlashMC",id:'itxtflash',styles:{},props:{src:'${FLASHSRC}'}}]}]},{type:'row',width:'**',height:'**',UID:'IframeRow',structure:[{type:'cell',structure:[{type:'comp',height:'**',width:'**',klass:'$iTXT.tmpl.Iframe',id:'itxtiframe',styles:{border:0},props:{src:'${iframe.src}',width:'${ff.width}',height:'${ff.height}'}}]}]}];$super(defOpts);}});};