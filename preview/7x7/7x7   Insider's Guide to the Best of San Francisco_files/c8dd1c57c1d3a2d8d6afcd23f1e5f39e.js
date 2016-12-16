/* /js/unit/ek/events.7x7.com/hosted/v2/widget.js */
;(function($,jQuery){/* Copyright Eventful, Inc. All rights reserved except where otherwise noted. */
if(typeof window.Eventful==="undefined"){window.Eventful={};}
if(jQuery&&jQuery.fn.jquery>="1.4"){jQuery.ajaxSettings.traditional=true;}
if(window.console==="undefined"){window.console=(function(){var console={},noOp=function(){},aProps=['assert','count','debug','dir','dirxml','error','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','time','timeEnd','trace','warn'],i,l;for(i=0,l=aProps.length;i<l;i++){console[aProps[i]]=noOp;}
return console;})();}
Eventful.isIE=false/*@cc_on @*//*@if (@_win32) || true/*@end @*/;Eventful.isSafari=navigator&&navigator.userAgent.indexOf('Safari')>0;Eventful.isiPad=navigator&&navigator.userAgent.match(/(iPhone)|(iPad)/i);window.$ev=jQuery.noConflict(true);window.$switched=false;window.$ev.hosted_ready=[];if(!window.jQuery){window.jQuery=window.$=window.$ev;}
$ev.onHostedReady=function(func){if($ev.isReady){func.call();}else{window.$ev.hosted_ready.push(func);}};jQuery(document).ready(function($ev){var index=0;for(;index<window.$ev.hosted_ready.length;index++){window.$ev.hosted_ready[index]();}});Eventful.Hosted={};if($ev.datepicker){window.$ev=window.$ev||{};window.$ev.datepicker=$ev.datepicker;}
if(!Function.prototype.bind)
{Function.prototype.bind=function(){var __method=this,args=Array.prototype.slice.call(arguments),object=args.shift();return function(){var local_args=args.concat(Array.prototype.slice.call(arguments));if(this!==window)local_args.push(this);return __method.apply(object,local_args);}}}
Function.prototype.mixin=function(fn)
{this.prototype=$ev.extend(this.prototype,fn.prototype);return this;}
Function.prototype.later=function(msec)
{var fn=this,args=Array.prototype.slice.call(arguments,1);return window.setTimeout(function(){fn.apply(this,args)},msec);}
Function.prototype.slow=function(msec,next){var fn=this,tm;if(next){return function(){if(tm)return;tm=1;fn.apply(this,Array.prototype.slice.call(arguments));(function(){tm=0;}).later(msec);}}else{return function(){if(tm)clearTimeout(tm);tm=(function(args){tm=0;fn.apply(this,args);})
.bind(this,Array.prototype.slice.call(arguments))
.later(msec);}}}
Function.prototype.invert=function()
{return function()
{return!this.call();}.bind(this);}
Eventful.SimpleCarousel=function(oArgs){this.oArgs=oArgs;this.onPrev(this.oArgs.onPrev||function(){});this.onNext(this.oArgs.onNext||function(){});this.onFirst(this.oArgs.onFirst||function(){});this.onLast(this.oArgs.onLast||function(){});this.onChange(this.oArgs.onChange||function(){});this.state={page:0,max_pages:0};this.iPageSize=this.oArgs.page_size||1;this.iItemWidth=this.oArgs.item_width||0;this.iSpeed=this.oArgs.speed||400;this.bSquished=this.oArgs.squished||false;this.bAutoRotate=this.oArgs.autoRotate||false;this.margin=this.oArgs.margin||10;this.jqList=this.oArgs.list||[];this.jqPrev=this.oArgs.prev||[];this.jqNext=this.oArgs.next||[];this.jqGoto=this.oArgs.goto||[];this.sErrorHeader='SimpleCarousel Error: ';if(!this.jqList.length){throw this.sErrorHeader+"Please Specify: 'container'";return;}
if(this.iItemWidth===0){throw this.sErrorHeader+"Please Specify: 'item_width'";return;}
if(this.jqPrev.length&&this.jqNext.length){this.jqPrev.live('click',function(evt){evt.preventDefault();this.__prevPage(1);this.stopAutoRotate();}.bind(this));this.jqNext.live('click',function(evt){evt.preventDefault();this.__nextPage(1);this.stopAutoRotate();}.bind(this));}
this.__updateMaxPages();if(this.bAutoRotate)this.timeout=setTimeout(this.nextPage.bind(this),5000);return this;}
Eventful.SimpleCarousel.prototype.onPrev=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[onPrev] not a function.");return;}
this.onPrevCB=fnCallback;return this;}
Eventful.SimpleCarousel.prototype.onNext=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[onNext] not a function.");return;}
this.onNextCB=fnCallback;return this;}
Eventful.SimpleCarousel.prototype.onFirst=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[onFirst] not a function.");return;}
this.onFirstCB=fnCallback;return this;}
Eventful.SimpleCarousel.prototype.onLast=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[onLast] not a function.");return;}
this.onLastCB=fnCallback;return this;}
Eventful.SimpleCarousel.prototype.onChange=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[onChange] not a function.");return;}
this.onChangeCB=fnCallback;return this;}
Eventful.SimpleCarousel.prototype.update=function(){this.__updateMaxPages();return this;}
Eventful.SimpleCarousel.prototype.getState=function(fnCallback){if(!(fnCallback instanceof Function)){throw new TypeError(this.sErrorHeader+"[state] not a function.");return;}
fnCallback(this.state);return this;}
Eventful.SimpleCarousel.prototype.nextPage=function(){this.__nextPage();return this;}
Eventful.SimpleCarousel.prototype.prevPage=function(){this.__prevPage();return this;}
Eventful.SimpleCarousel.prototype.gotoPage=function(iPage){this.__gotoPage(~~(iPage));return this;}
Eventful.SimpleCarousel.prototype.__gotoPage=function(iPage){this.state.page=iPage;this.__animate();this.onChangeCB(this.state);if(this.state.page==0)this.onFirstCB(this.state);if(this.state.page==this.state.max_pages)this.onLastCB(this.state);}
Eventful.SimpleCarousel.prototype.__nextPage=function(clicked){if((this.state.page+1)>=this.state.max_pages)this.state.page=-1;this.state.page++;this.__animate();this.onNextCB(this.state);if(this.state.page==this.state.max_pages)this.onLastCB(this.state);if(this.bAutoRotate&&!clicked)this.timeout=setTimeout(this.nextPage.bind(this),5000);}
Eventful.SimpleCarousel.prototype.__prevPage=function(clicked){if(this.state.page<=0)return;this.state.page--;this.__animate();this.onPrevCB(this.state);if(this.state.page==0)this.onFirstCB(this.state);if(this.bAutoRotate&&!clicked)this.timeout=setTimeout(this.nextPage.bind(this),5000);}
Eventful.SimpleCarousel.prototype.__animate=function(){if(this.state.max_pages<=1)return;var x=this.state.page*(this.iPageSize*(this.iItemWidth+this.margin))*-1;if(this.bSquished&&(this.state.page+1)==this.state.max_pages){var full_count=this.state.max_pages*this.iPageSize,real_count=this.jqList.children('li').length;x=x+(full_count-real_count)*(this.iItemWidth+this.margin);}
this.jqList.stop().animate({'marginLeft':x+'px'},this.iSpeed);this.onChangeCB(this.state);}
Eventful.SimpleCarousel.prototype.__updateMaxPages=function(){var count=this.jqList.children('li').length;this.state.max_pages=Math.ceil(count/this.iPageSize);this.jqList.width(count*(this.iItemWidth+this.margin));}
Eventful.SimpleCarousel.prototype.stopAutoRotate=function(){this.bAutoRotate=false;if(this.timeout)clearTimeout(this.timeout);}
/**
 * A simple querystring parser.
 * Example usage: var q = $.parseQuery(); q.fooreturns  "bar" if query contains "?foo=bar"; multiple values are added to an array. 
 * Values are unescaped by default and plus signs replaced with spaces, or an alternate processing function can be passed in the params object .
 * http://actingthemaggot.com/jquery
 *
 * Copyright (c) 2008 Michael Manning (http://actingthemaggot.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/if(window.$ev){$switched=true;window.$hosted=window.jQuery;window.$=window.jQuery=window.$ev;}jQuery.parseQuery=function(qs,options){var q=(typeof qs==='string'?qs:window.location.search),o={'f':function(v){return unescape(v).replace(/\+/g,' ');}},options=(typeof qs==='object'&&typeof options==='undefined')?qs:options,o=jQuery.extend({},o,options),params={};jQuery.each(q.match(/^\??(.*)$/)[1].split('&'),function(i,p){p=p.split('=');p[1]=o.f(p[1]);params[p[0]]=params[p[0]]?((params[p[0]]instanceof Array)?(params[p[0]].push(p[1]),params[p[0]]):[params[p[0]],p[1]]):p[1];});return params;};if($switched){window.$=window.jQuery=window.$hosted;$switched=false;}Eventful.TrackPageview=function(oArgs){window._gaq=window._gaq||[];oArgs=oArgs||{};if(typeof oArgs=='string'){return Eventful.TrackPageview({page:oArgs});}
oArgs.page=oArgs.page||window.location.pathname;oArgs.query=oArgs.query||'';var sQuery=Eventful.TrackPageview.query();if(oArgs.query&&oArgs.page.indexOf('?')>=0){oArgs.query='&'+oArgs.query.substring(1);}
if(sQuery&&(oArgs.page.indexOf('?')>=0||oArgs.query)){sQuery='&'+sQuery.substring(1);}
Eventful.TrackPageview.track(oArgs.page+oArgs.query+sQuery);};Eventful.TrackPageview.track=function(sPage){_gaq.push(['_trackPageview',sPage]);};Eventful.TrackPageview.trackVirturalEvent=function(){Eventful.TrackPageview.track('/virtual/event/'+Array.prototype.slice.call(arguments).join('/'));};Eventful.TrackPageview.trackEvent=function(category,action,optional_label,optional_value){if(typeof window["console"]==="object"&&$ev.parseQuery().gadebug==1){window["console"].log("Google Analytics _trackEvent:",arguments);}
_gaq.push(['_trackEvent',category,action,optional_label,optional_value]);};Eventful.TrackPageview.trackSocial=function(network,action,optional_target,optional_pagepath){_gaq.push(['_trackSocial',network,action,optional_target,optional_pagepath]);}
Eventful.TrackPageview.query=function(sQuery){return Eventful.TrackPageview._sQuery=sQuery||Eventful.TrackPageview._sQuery||window.location.search.toLowerCase();};Eventful.TrackPageview.setParams=function(oParams){var aParams=[];for(var sKey in oParams){aParams.push(sKey+'='+oParams[sKey]);}
var sQuery=Eventful.TrackPageview.query();Eventful.TrackPageview.query((sQuery?sQuery+'&':'?')+aParams.join('&'));};Eventful.PopularEventsWidget=function(){$ev.onHostedReady(this.setup.bind(this));};Eventful.PopularEventsWidget.prototype.setup=function(){Eventful.TrackPageview.trackEvent('EHP Home Page Widget','open');$ev('a').click(function(evt){var label=$ev(evt.currentTarget).attr('data-ga-label');Eventful.TrackPageview.trackEvent('EHP Home Page Widget','click',label);});this.jqComponent=$ev('#eventful-popular');if(!this.jqComponent.length)return;this.oSimpleCarousel=new Eventful.SimpleCarousel({list:$ev('.picker-viewer-list:first'),page_size:1,item_width:250,margin:50,autoRotate:true,squished:true});}
Eventful.oPopularEventsWidget=new Eventful.PopularEventsWidget();})(jQuery,jQuery);