/* This source code is Copyright (c) Vibrant Media 2001-2015 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
$iTXT.js.loader["$iTXT.ui_mobile.Tooltip"]=true;$iTXT.ui_mobile=$iTXT.ui_mobile||{};$iTXT.ui_mobile.Tooltip_Load=function(){$iTXT.ui_mobile.Tooltip=$iTXT.core.Class.create($iTXT.ui.Tooltip,{deviceWidth:0,zoom:2,orgZoomable:undefined,init:function(_options,$super)
{$iTXT.MOBILE=true;$super(_options);this.zIndex=9910000;this.updateDeviceScale();$iTXT.core.$(window).itxtSubscribe("resize",$iTXT.core.Event.bind(this,this.onResize));$iTXT.core.$(window).itxtSubscribe("orientationchange",$iTXT.core.Event.bind(this,this.onOrientationChange));$iTXT.core.$(document).itxtSubscribe("touchmove",$iTXT.core.Event.bind(this,this.onTouchMove));if($iTXT.data.al&&!this.params.getBool('nott',true)){$iTXT.data.al.allowHookClick=false;}},onResize:function()
{if(!this.isOpen)
{this.updateDeviceScale();}},onOrientationChange:function()
{this.updateDeviceScale();},updateDeviceScale:function()
{if(undefined!==window.orientation)
{var landscape=Math.abs(window.orientation)===90;this.deviceWidth=landscape?screen.height:screen.width;}
if(this.currentAdvert&&this.currentAdvert.template&&!this.currentAdvert.template.useProgressBar){this.scaleMask();}
this.scaleTooltip();this.placeTooltip();},build:function()
{$iTXT.core.$("itxtttholder").itxtSetStyle({webkitPerspective:"1000",webkitTransformStyle:"flat"});this.maskDiv=$iTXT.core.Builder.make("DIV",{style:"background-image: url(//images.intellitxt.com/ast/tt/mobile/bg_px.png);position:absolute; left: 0px; top: 0px;-webkit-user-select: none;-webkit-transform-style: flat;"});this.maskDiv.style.zIndex=this.zindex-100;this.maskDiv.itxtHide();this.maskDiv.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._maskClick));$iTXT.core.$("itxtttholder").appendChild(this.maskDiv);this.rootElement.itxtSetStyle({backgroundColor:this.options.bgcol,webkitBackfaceVisibility:"hidden",webkitBorderRadius:"5px",webkitBoxShadow:"0px 2px 8px #000000",zoom:this.zoom,zIndex:this.zIndex});this.chrome=new $iTXT.ui_mobile.TooltipChrome({ps:this.options.ps,bgcol:this.options.bgcol,draggable:this.options.draggable});this.chrome.build();this.addChild(this.chrome);this.content=new $iTXT.ui.TooltipContent({ps:this.options.ps,bgcol:this.options.bgcol});this.chrome.rootElement.appendChild(this.content.rootElement);this.rootElement.itxtSubscribe("touchmove",$iTXT.core.Event.bind(this,this.onTouchMove));},useProgressBar:function(){if(this.currentAdvert){var prog=this.currentAdvert&&this.currentAdvert.template&&this.currentAdvert.template.useProgressBar;var progpref=this.currentAdvert.params.getBool("lbox.bar.mobile",false);return prog&&progpref;}else{return false;}},onTouchMove:function(e)
{if(this.isOpen)
{e.preventDefault();return false;}},open:function()
{var prog=this.useProgressBar();$iTXT.core.$(document).itxtFire("$iTXT:tt:before:open");this.hide();this.content.hide();this.chrome.hide();if(!prog){this.scaleMask();this.rootElement.itxtSetStyle({backgroundColor:this.options.bgcol,webkitBackfaceVisibility:"hidden",webkitBorderRadius:"5px",webkitBoxShadow:"0px 2px 8px #000000",zoom:this.zoom,zIndex:this.zIndex});}else{this.rootElement.itxtSetStyle({border:"none",webkitBoxShadow:"none"});}
this.rootElement.itxtSetStyle({backgroundColor:this.options.bgcol});this.rootElement.itxtRemoveClass("minimise");this.placeTooltip();var metas=document.getElementsByTagName("meta");if(this.orgZoomable===undefined){if(!$iTXT.core.Browser.isPlatform(["Android"]))
{this.orgZoomable=true;for(var m in metas)
{if(metas[m].name=="viewport"&&metas[m].content.indexOf("user-scalable=no")>-1)
{this.orgZoomable=false;break;}}
if(this.orgZoomable)
{var meta=document.createElement("meta");meta.name="viewport";meta.content="user-scalable=no";document.getElementsByTagName("head")[0].appendChild(meta);}}}
this.setSize(null,null,false);},close:function(e)
{var prog=this.useProgressBar();var opts=e.data||{};$iTXT.core.$(document).itxtFire("$iTXT:tt:before:close");this.content.beforeClose();if(!$iTXT.core.Browser.isPlatform(["Android"]))
{if(this.orgZoomable)
{var metas=document.getElementsByTagName("meta");for(var m in metas)
{if(metas[m].name=="viewport"&&metas[m].content.indexOf("user-scalable=no")>-1)
{metas[m].content="user-scalable=yes";break;}}}}
if(!prog){this.rootElement.style.webkitTransitionTimingFunction="ease-out";this.rootElement.style.webkitTransitionDuration="0.3s";this.rootElement.style.webkitTransform=this.getRotateString();this.rootElement.style.opacity=0;window.setTimeout($iTXT.core.Event.bind(this,this._finishRotateClose),500);}else{this.hideTooltip();}},_contentLoaded:function()
{var prog=this.useProgressBar();if(!this.options.invisible)
{this.show();this.content.show();this.chrome.show();if(!prog){this.rootElement.style.opacity=0;}
var newSize=this.content.tryResize(null,null);this._setContentSize(newSize[0],newSize[1],0);var advertWidth=newSize[0]+100;this.placeTooltip();$iTXT.core.$(document).itxtFire("$iTXT:tt:ready");if(!prog){this.rootElement.style.webkitTransform=this.getRotateString();}
this.isOpen=true;this.openTS=(new Date()).getTime();if(!prog){this.content.hide();window.setTimeout($iTXT.core.Event.bind(this,this._fadeMask),50);}}
$iTXT.core.$(document).itxtFire("$iTXT:tt:after:open");},_fadeMask:function()
{this.maskDiv.itxtShow();window.setTimeout($iTXT.core.Event.bind(this,this._rotateOpen),250);},_rotateOpen:function()
{this.rootElement.style.webkitTransitionTimingFunction="ease-out";this.rootElement.style.webkitTransitionDuration="0.5s";this.rootElement.style.webkitTransform="rotateY(0deg)";this.rootElement.style.opacity=1;window.setTimeout($iTXT.core.Event.bind(this,this._finishRotateOpen),500);},_finishRotateOpen:function()
{this.content.show();},_finishRotateClose:function()
{this.hideTooltip();this.rootElement.style.webkitTransitionDuration="0";this.rootElement.style.webkitTransform="rotateY(360deg)";this.maskDiv.itxtHide();},_maskClick:function()
{this.chrome.defaultHeader.closeBtn.focus();$iTXT.core.$(document).itxtFire("$iTXT:tt:close:btn:click");},scaleTooltip:function()
{this.rootElement.style.webkitTransitionTimingFunction="";this.rootElement.style.webkitTransitionDuration="";},placeDesktopStyleTooltip:function(){var tailfudge=10;var el=this.currentAdvert.hook.rootElement.firstChild;if(el.childNodes.length>1){el=el.firstChild;}
if(this.currentAdvert.hook.mobtEnabled){el=this.currentAdvert.hook.mobtCover;}
var pos=$iTXT.core.Util.getPosition(el);this.setPosition((pos.left/this.zoom)-(this.width/2)+((el.offsetWidth/this.zoom)*0.5),(pos.top/this.zoom)-this.height+tailfudge);},placeTooltip:function()
{if(this.useProgressBar()){this.placeDesktopStyleTooltip();return;}
var winSize=$iTXT.core.Util.getWindowSize();var pageScroll=$iTXT.core.Util.getPageScroll();var screenWidth=screen.width;if(window.orientation==90||window.orientation==-90)
{screenWidth=screen.height;}
var zoomLevel;if(screenWidth<499)
{zoomLevel=$iTXT.glob.params.get("js.mobile.zoom.mobile",0.64);}
else{zoomLevel=$iTXT.glob.params.get("js.mobile.zoom.tablet",1.5);}
this.zoom=1/(screenWidth/window.innerWidth)*zoomLevel;this.rootElement.style.zoom=this.zoom;var leftPos=((winSize.width-this.width*this.zoom)/2)+pageScroll.x;var topPos=((winSize.height-this.height*this.zoom)/2)+pageScroll.y;this.rootElement.style.webkitTransitionTimingFunction="";this.rootElement.style.webkitTransitionDuration="";this.setPosition(leftPos/this.zoom,topPos/this.zoom);},scaleMask:function()
{if(this.maskDiv)
{var margin=$iTXT.core.$(document.body).itxtGetMargin();var padding=$iTXT.core.$(document.body).itxtGetPadding();var leftOff=margin.left+padding.left;var topOff=margin.top+padding.top;this.maskDiv.itxtSetStyle({marginLeft:(-leftOff)+"px",marginTop:(-topOff)+"px",width:(document.body.scrollWidth)+"px",height:(document.body.scrollHeight)+"px"});}},getRotateString:function()
{if($iTXT.core.Browser.isPlatform(["Android"])||!$iTXT.glob.params.getBool('js.mobile.spinEffectOn',true))
{return"";}
else
{return"rotateY(180deg)";}}});};$iTXT.js.loader["$iTXT.ui_mobile.TooltipChrome"]=true;$iTXT.ui_mobile=$iTXT.ui_mobile||{};$iTXT.ui_mobile.TooltipChrome_Load=function(){var undefined;$iTXT.ui_mobile.TooltipChrome=$iTXT.core.Class.create($iTXT.ui.TooltipChrome,{init:function(_options,$super)
{$super(_options);},build:function()
{this.contentBG=$iTXT.core.Builder.make("DIV",{backgroundColor:this.options.bgcol,id:"itxtcontentbg",className:"mobile"});this.contentBG.itxtSetStyle({backgroundColor:this.options.bgcol});this.rootElement.appendChild(this.contentBG);this.defaultHeader=this.header=new $iTXT.ui_mobile.TooltipHeader({draggable:false});this.header.build();this.addChildren([this.header]);this.rootElement.itxtSetStyle({webkitBorderBottomLeftRadius:"5px",webkitBorderBottomRightRadius:"5px"});this.contentBG.itxtSetStyle({webkitBorderBottomLeftRadius:"5px",webkitBorderBottomRightRadius:"5px"});},getFooterHeight:function()
{return 5;},resetPaddingAndBorder:function(){}});};$iTXT.js.loader["$iTXT.ui_mobile.TooltipHeader"]=true;$iTXT.ui_mobile=$iTXT.ui_mobile||{};$iTXT.ui_mobile.TooltipHeader_Load=function(){var undefined;$iTXT.ui_mobile.TooltipHeader=$iTXT.core.Class.create($iTXT.ui.OldTooltipHeader,{init:function(_options,$super)
{this.componentParams=$iTXT.core.Util.extend({'hdr.img.dir':'//images.intellitxt.com/ast/tt/mobile/','hdr.logo.mob':'${hdr.img.dir}vibrantLogo.png','hdr.close.btn.mob':'${hdr.img.dir}btn_close.png','hdr.info.btn.mob':'${hdr.img.dir}btn_moreInfo.png','hdr.share.btn.mob':'${hdr.img.dir}btn_share.png'},this.componentParams);var defOpts=$iTXT.core.Util.extend({height:44,vmLogoSrc:"${hdr.logo.mob}",closeBtnSrc:"${hdr.close.btn.mob}",infoBtnSrc:"${hdr.info.btn.mob}",shareBtnSrc:"${hdr.share.btn.mob}"},_options);$super(defOpts);},build:function()
{this.rootElement.itxtSetStyle({backgroundColor:"#000",overflow:"hidden",webkitBorderTopLeftRadius:"5px",webkitBorderTopRightRadius:"5px",lineHeight:this.options.height+"px",background:"-webkit-gradient(linear, 0% 0%, 0% 100%, from(#000000), to(#000000), color-stop(0,#858585),color-stop(0.05,#636363),color-stop(0.5,#202020),color-stop(0.5,#000), color-stop(0.95,#262626))"});var b=$iTXT.core.Builder;var h=this.options.height;this.closeBtn=b.make("DIV",{style:"width: "+h+"px;height: "+h+"px;float: right;background-image: url("+this.options.closeBtnSrc+");background-repeat:none;background-size:100%;"});this.closeBtn.itxtSubscribe("mouseover",function(){this.style.backgroundPosition="0px -"+h+"px";});this.closeBtn.itxtSubscribe("mouseout",function(){this.style.backgroundPosition="";});this.closeBtn.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._closeBtnClk));this.rootElement.appendChild(this.closeBtn);this.whatBtn=b.make("DIV",{style:"width: "+h+"px;height: "+h+"px;float: right;background-image: url("+this.options.infoBtnSrc+");background-repeat:none;background-size:100%;"});this.whatBtn.itxtSubscribe("mouseover",function(){this.style.backgroundPosition="0px -"+h+"px";});this.whatBtn.itxtSubscribe("mouseout",function(){this.style.backgroundPosition="";});this.whatBtn.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._whatBtnClk));this.whatBtnWrapper=$iTXT.core.Builder.make("A",{target:'_blank'},[this.whatBtn]);this.rootElement.appendChild(this.whatBtnWrapper);this.vmLogo=b.make("APNG",{style:"float: left; width:50px;",src:this.options.vmLogoSrc});this.vmLogo.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._vmLogoBtnClk));this.vmLogoWrapper=$iTXT.core.Builder.make("A",{target:'_blank'},[this.vmLogo]);this.rootElement.appendChild(this.vmLogoWrapper);this.hdrTxtCont=b.make("DIV",{style:"float:left;color:#999;font-weight: regular;font-family: Helvetica,Verdana,Arial;font-size:14px;height:"+h+"px;line-height:"+h+"px;"},[this.options.hdrTxt]);this.rootElement.appendChild(this.hdrTxtCont);},_hdrDown:function(e)
{},_hdrUp:function(e)
{},_ubg:function(c)
{}});};