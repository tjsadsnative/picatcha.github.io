/* Javascript */

/* -------------- SYSTEM PLUGINS -------------- */
	/*Slick 1.5.8*/  !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e) })):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
	/*MediaMatch v.2.0.2*/ window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""=== b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p)); k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution= d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "), m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1, media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));
	/*Placeholders.js v4.0.1*/ !function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this),function(a,b){"use strict";var c=a.fn.val,d=a.fn.prop;b.Placeholders.nativeSupport||(a.fn.val=function(a){var b=c.apply(this,arguments),d=this.eq(0).data("placeholder-value");return void 0===a&&this.eq(0).data("placeholder-active")&&b===d?"":b},a.fn.prop=function(a,b){return void 0===b&&this.eq(0).data("placeholder-active")&&"value"===a?"":d.apply(this,arguments)})}(jQuery,this);
	/* Console Messaging Trap */ (function (fallback) {  fallback = fallback || function () { };  var trap = function () { var args = Array.prototype.slice.call(arguments); console.raw.push(args); var message = args.join(' '); console.messages.push(message); fallback(message); };  if (typeof console === 'undefined') { console = { messages: [], raw: [], dump: function() { return console.messages.join('\n'); }, log: trap, debug: trap, info: trap, warn: trap, error: trap, assert: trap, clear: function() { console.messages.length = 0; console.raw.length = 0 ; }, dir: trap, dirxml: trap, trace: trap, group: trap, groupCollapsed: trap, groupEnd: trap, time: trap, timeEnd: trap, timeStamp: trap, profile: trap, profileEnd: trap, count: trap, exception: trap, table: trap }; }  })(null); 
	/*Scroll Spy*/!function(e,n){e.fn.extend({scrollspy:function(i){var o={min:0,max:0,mode:"vertical",namespace:"scrollspy",buffer:0,container:n,onEnter:i.onEnter?i.onEnter:[],onLeave:i.onLeave?i.onLeave:[],onTick:i.onTick?i.onTick:[]},i=e.extend({},o,i);return this.each(function(){var n=this,o=i,t=e(o.container),r=o.mode,s=o.buffer,c=leaves=0,a=!1;t.bind("scroll."+o.namespace,function(){var i={top:e(this).scrollTop(),left:e(this).scrollLeft()},l="vertical"==r?i.top+s:i.left+s,v=o.max,u=o.min;e.isFunction(o.max)&&(v=o.max()),e.isFunction(o.min)&&(u=o.min()),0==v&&(v="vertical"==r?t.height():t.outerWidth()+e(n).outerWidth()),l>=u&&v>=l?(a||(a=!0,c++,e(n).trigger("scrollEnter",{position:i}),e.isFunction(o.onEnter)&&o.onEnter(n,i)),e(n).trigger("scrollTick",{position:i,inside:a,enters:c,leaves:leaves}),e.isFunction(o.onTick)&&o.onTick(n,i,a,c,leaves)):a&&(a=!1,leaves++,e(n).trigger("scrollLeave",{position:i,leaves:leaves}),e.isFunction(o.onLeave)&&o.onLeave(n,i))})})}})}(jQuery,window,document,void 0);

/* -------------- SWAP CSS FOR STAGING VERSION -- BGN ONLY --------------  */
	if (window.location.href.indexOf(".nginx.") >= 0) {
		$('link[href="http://assets.incisivemedia.com/cdn/bgn/styles/styles.css"]').attr('href','http://assets.incisivemedia.com/cdn/bgn_staging/styles/styles.css');
	}

/* -------------- Add print icon  + remove google icon -------------- */
	$(".article-tools.gplus-icon").parent().remove();
	//sticky g logo not hiding as is built after scroll
	$(".tools-meta-outer .tools-container, .article-page-body-content .tools-container").not("body.page_listings .tools-meta-outer .tools-container").append('<li class="article-tool-print"><div class="article-tools print-icon icons" title="Print"><span class="screen-reader-text">Print this page</span><a onclick="window.print();return false" href="#">&nbsp;</a></div></li>')

/* -------------- Hide empty pagination -------------- */
	if ($(".pagination").children().length < 1){
		$(".pagination").remove()
	}

/* -------------- Tools container double wrap fix -------------- */
	$(".tools-meta-outer .tools-meta-outer").unwrap()

/* -------------- Sticky scroll spy on/off based on scroll height -------------- */
	if($(".page-content header").hasClass("article-header")){
		var position = $(".article-page-body-content").position();
		var articleheaderposition = $(".article-header").position();
		var articleheaderpositionTop = articleheaderposition.top;
		var articlecopyheight = $(".article-page-body-content").height();
		if( $('.header-more-from').length > 0){	
			$('.header-more-from').scrollspy({
				min: articleheaderpositionTop,
				max:position.top+articlecopyheight,
				onEnter: function(element, position) {
					// console.log("/enter");
					$(".article-nav").css("opacity","1").css("z-index","2");
				},
				onLeave: function(element, position) {
					// console.log("/leave");
					$(".article-nav").css("opacity","0").css("z-index","0");
				}
			});
		}
		if( $('.related-article-holder').length > 0){	
			$('.related-article-holder').scrollspy({
				onEnter: function(element, position) {
					// console.log("/enter");
					$(".scrollup").removeClass("scrollup-show");
				},
				onLeave: function(element, position) {
					// console.log("/leave");
					$(".scrollup").addClass("scrollup-show");
				}
			});
		}
	}

/* -------------- cms fix for inline h3 list -------------- */
	$( ".article-page-body-content ul:has(h3)" ).addClass( "inline-list" );

/* -------------- listings page return uppercase, h1  -------------- */
	var str = $(".page_listings .select-header h1").text();
	$( ".page_listings .select-header h1" ).replaceWith("<h1>"+titleCase(str)+"</h1>");
	function titleCase(string) { 
		return string.charAt(0).toUpperCase() + string.slice(1);
	} 

/* -------------- login overlay, keep open if user is in input -------------- */
	var hdrTools = $(".main-top-login .header-tools-content");
	$("form#login").on("mouseover", function(){}).on("mouseout", function(e){
		if ($(e.target).is(".main-top-login .header-tools-content input")){
			hdrTools.addClass("input-tools-override");
		} else if (!$(e.target).is(".main-top-login .header-tools-content input")){
			hdrTools.removeClass("input-tools-override");
		}
	});

/* -------------- truncating -------------- */
	var ellipsis_text = "...";
	var max_length_listings = 120; 
	$(".truncate-listing strong").replaceWith(function(){
		//remove the strong tag
		return $(this).html().replace(/<\/?strong>/g, "");
	});
	/* listings summary -------------- */
		$(".truncate-listing").each(function(event){
			if($(this).html().length > max_length_listings){
				var short_ = $(this).html().substr(0, max_length_listings); 
				var short_content = $(this).html().substr(0, max_length_listings); 
				short_content = short_content.replace(/\s+\S*$/, "");
				var end_trim = short_.match(/\S*$/); 
				var long_content = $(this).html().substr(max_length_listings); 
				$(this).html(short_content+
					"<span class=\"more-ellipsis\">"+ellipsis_text+"</span>"+
					"<span class=\"more-text-hide\">"+end_trim+long_content+"</span>");
			}
		});

/* -------------- blockquote fix from the pullquote field in the CMS -------------- */
	$("blockquote").not(":has(.pullquote)").wrapInner("<div class='pullquote'/>");
	$("blockquote .pullquote p").contents().unwrap();

/* -------------- LOGIN ERROR MESSAGES -------------- */
	function hideloginErrorMessage(){
		if($(".main-top-login").hasClass("main-top-infobox-open")){
			$(".main-top-login").removeClass("main-top-infobox-open");
		}
	}

/* -------------- Frontpage  Monty -------------- */	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var montytotalSlides = $('.homepage-monty-top figure').length,
	randomSlideStart = getRandomInt(1, montytotalSlides);
	$(".homepage-monty-top").slick({
		adaptiveHeight:true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear', 
		autoPlay:true,
		autoplaySpeed: 4000,
		arrows:false,
		initialSlide: randomSlideStart-1
	});
	if( $(".homepage-monty-top .slick-track").children().length > 1){
		$(".homepage-monty-top").append("<div class='top-monty-big-arrow'></div>");
	}
	$(".top-monty-big-arrow").click(function(){
		$('.homepage-monty-top').slick("slickNext");
	});

/* -------------- Wallpaper positioning -------------- */
	$(function(){ 
		$("#rdm-wallpaper.ad-slot-wallpaper").addClass("alignbeneathheader");
	});
	//test function
	function setVisiblewallpapers(){
		$("body").addClass("wallpaper-visible");
		$("#rdm-wallpaper").show();
	}

/* -------------- SYSTEM Tools -------------- */
	/*Woah there nelly  http://loopinfinito.com.br/2013/09/24/throttle-e-debounce-patterns-em-javascript/*/
	/* https://gist.github.com/makenova/7885923 */
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap) {
					func.apply(obj, args);
				}
				timeout = null;
			}
			if (timeout) {
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			} 
			timeout = setTimeout(delayed, threshold );
		};
	};
	/* https://remysharp.com/2010/07/21/throttling-function-calls */
	function throttle(fn, threshhold, scope) {
		threshhold || (threshhold = 250);
		var last,
		deferTimer;
		return function () {
			var context = scope || this;
			var now = +new Date,
			args = arguments;
			if (last && now < last + threshhold) {
				// hold on to it
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function () {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	}
	var deBouncer = function ($, cf, of, execAsap) {
		$.fn[cf] = function (fn) {
			return fn ? this.bind(of, debounce(fn)) : this.trigger(cf);
		};
	};
	deBouncer(jQuery, 'smartresize', 'resize', 300);
	deBouncer(jQuery, 'smartscroll', 'scroll', 300);
		$(window).smartresize(function(){
			spacerPages();
			/* What needs to be run only when the window has stopped being resized. - 
			-- ADVERTS ON WALLPAPERS RESIZING 
			(recalculating flexbox sizes or positions)  slick to a certain extent?*/
		});
		$(window).smartscroll(function(){
		/* What needs to be debounced? on scroll  */
	});

	$(window).load(function() {
		spacerPages();
	});
	function spacerPages(){
		if($(".content-spacer").length && !$("p > iframe").length){ 
			if($(".nav.main-top-nav").is(":visible") || $("header.main-head").is(":visible")) {
				var height = $(this).height() - $("nav.main-top-nav").height() - $("header.main-head").height() - $("nav.nav").height() - $(".content.system .main-content").height() - $(".main-footer").height();
				$(".content-spacer").height(height);
			} else {
				var height = $(this).height() - $("nav.nav").height() - $(".content.system .main-content").height() - $(".main-footer").height();
				$(".content-spacer").height(height);
			}
		}
	}

	function supportsSVG() {
		return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
	}
	if (supportsSVG()) {
		document.documentElement.className += ' svg ';
	} else {
		document.documentElement.className += ' no-svg ';
		var imgs = document.getElementsByTagName('img');
		var dotSVG = /.*\.svg$/;
		for (var i = 0; i != imgs.length; ++i) {
			if(imgs[i].src.match(dotSVG)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	}

	function smartLog(logmessage){
		var logstyles = "color:goldenrod;"
		console.log("%c%s",logstyles, logmessage);		
	}
	function logEach(array) {
		for (var i = 0; i < array.length; i++)
		console.log(array[i]);
	}

/* -------------- Legacy Checks -------------- */
	function isLegacyBrowser(){}
	function isModernBrowser(){} 
	function isLegacyMobile(){} 
	/* Name spaced functions used as return true ===  if ( isMobile.iOS() )*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}	
	};
	var LegacyAndroid = false;
	var ua = window.navigator.userAgent;
	var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
	if ((ua.indexOf("Android") >= 0 && androidversion <= 3) || (ua.match(/IEMobile/i) && (ua.match(/MSIE\s(?!9.0)/))) || (ua.indexOf("BlackBerry") >= 0 && ua.indexOf("WebKit") >= 0)){
		//alert("this is android 2.2")
		LegacyAndroid = true;
		$(".nav").addClass("nav-float");
		//deprecated $(".page-head .financialdirector-logo").addClass("not-fixed");
	}
	var na = navigator.appVersion;
	var ie987 = (na.indexOf("MSIE 9.0") !== -1) || (na.indexOf("MSIE 8.0") !== -1) || (na.indexOf("MSIE 7.0") !== -1);
	var ie11 = (na.indexOf("IE11") !== -1) || (na.indexOf("MSIE 11") !== -1)|| (na.indexOf("rv:11.0") !== -1);
	if (ie987) {  
		document.documentElement.className = document.documentElement.className + ' lt-ie9';
	}
	if (ie11){
		document.documentElement.className = document.documentElement.className + ' no-svg no-svgz ie-11-flexbox';
	}
	if(isMobile.iOS()){
		$(".homepage-monty-top").css({"display":"none"});
	}

/* -------------- CLOSE MENUS -------------- */
	function closeMenus(specificMenu){
		if (specificMenu){
			//close specific menu
		}else{
			closeLightbox();
			depushSite();
			closetopDropdown();
			closeMenu4();
			closeMenu3();
			hideloginErrorMessage();		
		}
	}
	$(document).keyup(function(e) {
		/*	Find keycodes for stuff - 27 for esc## 		document.onkeydown = function(evt) {	console.log(evt.keyCode);	} */		
		if (e.keyCode == 27) { 
			closeMenus();
		}
	});

/* -------------- Mobile Push Menu -------------- */
	function pushSite(){ 
		$(".page-content").addClass("content-header-compensation").css("top", 46-$(window).scrollTop());
		$("footer").addClass("content-header-compensation").css("top", $(".page-content").outerHeight()+46-$(window).scrollTop());
		$("#nav-toggle").addClass('active');  
		if($(".nav .menuOn").is(":visible")){
			$(".menu4").removeClass("menuOn menuPos");
			$(".clicker4").removeClass("active");      
			$(".mask").removeClass("border-bottom").animate({"height": 0}, "fast");
		}
		var overlay = ("<div class='siteoverlay overlay-elements' style='height:100%;'></div>");
		$(".menu-sidebar").addClass("site-pusher");
		$(".page-content, footer , nav.nav").addClass("site-pusher content-fixed");	
		$(".container").append(overlay);
		window.setTimeout(function(){$(".overlay-elements").addClass("pushed");}, 100);
		window.setTimeout(function(){$(".overlay-elements").addClass("fadein");}, 200);
		$(".siteoverlay").click(function(e){ depushSite(); e.stopPropagation();});
		$(".container").addClass("site-pushed");
	}   
	function depushSite(){
		if ($(".container").hasClass("site-pushed")){ 
			var Pagepos = parseInt( $(".content-header-compensation").css("top"), 10);
			var posPagepos =  Math.abs(Pagepos);
			// console.log($(".content-header-compensation").css("top"));
			// console.log(posPagepos);
			$("#nav-toggle").removeClass('active');
			$("*").removeClass("site-pusher");
			$("*").removeClass("content-fixed");
			$('html, body').animate({
				scrollTop: posPagepos+46
			}, 10);
			$(".content-header-compensation").css("top","").removeClass("content-header-compensation");
			$(".siteoverlay").detach();
			$(".container").removeClass("site-pushed");
		} 
	}
	function togglePush(){
		if($(".menu-sidebar").hasClass("site-pusher")){
			depushSite();
		}else{
			pushSite();
		}
	}
	$(".siteoverlay").click(function(e){
		depushSite();
		e.stopPropagation();
	});
	/* Mobile site nav accordion -------------- */
	$('.mobile-nav .sprite').on('click', function(){
		//slide up all the link lists
		$(".mobile-nav .mobile-nav-content").slideUp();
		$(".mobile-menu-title").removeClass("up-selection");
		$(".mobile-nav h2").removeClass("selection");
		$(".mobile-nav .sprite").removeClass("up").addClass("down");
		if(!$(this).next().next().is(":visible")){
			$(this).next().next().slideDown();
			$(this).next().addClass("selection");
			$(this).next().addClass("up-selection");
			$(this).removeClass("down");
			$(this).addClass("up");
		}
	})
	function mediaqueryresponse(mql){
		if ((!mql.matches) && $('#nav-toggle').is('.active')){ 
			// if media query matches
			/*	$('.menu-sidebar').removeClass('site-pusher');
				$("#container .content, #container .nav, #container .main-footer").removeClass("site-pusher");
				$(".siteoverlay").remove();
				$("#container .content").removeClass("content-fixed");
				$('#nav-toggle').removeClass('active');
				$("#container .main-footer").show();
			*/
			depushSite();
		}
	}
	var mql = window.matchMedia("screen and (max-width: 768px)"); /* 48.000em */
	mediaqueryresponse(mql);
	mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes

/* -------------- Legacy + Mobile Menu Drawer -------------- */
	var LegacyMSIE = ie987;
	$("#nav-toggle").click(function(e){
		if (LegacyMSIE  === true || LegacyAndroid == true ){
			legacyNavToggle();
		}else{
			togglePush();
		}
	});
	var holder = $(".holder").height();
	$(".clicker4").click(function(e) {
		e.stopPropagation();
		if(getCookie("logged_in") === "true" || getCookie("logged_in") === "expired" ){
			$(".mask").attr("style","");
			if ($(this).hasClass("active")){
				closeMenus();	
			}else{
				closeMenus();	
				openMenu4();
			}
		}else{
			if(window.location.pathname =="/userlogin"){
				//do nothing
			}else{
				window.open("/userlogin", "_self");
			}
		}
	});	
	function openMenu4(){
		$(".menu4").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
		$(".clicker4").toggleClass("active");
		if ($(".nav .menuOn").is(":visible")) {
			maskHeight = ($(".nav .menu4").height());
			$(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
		} else {
			maskHeight = 0;
			$(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
		} 
	}
	function openMenu3(){
		//if($("html").hasClass("ie")){	
		$(".menu3").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
		$(".menu3").addClass("menuOn").addClass("menuPos");
		if ($(".nav .menuOn").is(":visible")) {
			maskHeight = ($(".menu3 .main-top-content").height());
			$(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
		} else {
			maskHeight = 0;
			$(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
		}
	}

/* -------------- Mobile Login -------------- */ 
	$(".menu-login-trigger").click(function(e){
		e.preventDefault();
		closeMenus();
		openMenu4();
	});
	function closeMenu3(){
		if($("#nav-toggle").hasClass("active")){
			$(".menu3").removeClass("menuOn").removeClass("menuPos");
			$("#nav-toggle").removeClass("active");
			$(".mask").removeClass("border-bottom").animate({"height": 0}, "fast");	
		}
	}
	function closeMenu4(){
		if($(".clicker4").hasClass("active")){
			$(".menu4").removeClass("menuOn").removeClass("menuPos");
			$(".clicker4").removeClass("active");
			$(".mask").toggleClass("border-bottom").animate({"height": 0}, "fast");	
		}
	}
	function legacyNavToggle(){
		if($("#nav-toggle").hasClass('active')){
			closeMenus();
			$("#nav-toggle").removeClass('active');
			//closeMenu3();
		}else{
			closeMenus();
			$("#nav-toggle").addClass('active');
			openMenu3();
		}
	}

/* -------------- Sticky Navigation Header -------------- */
	var HeaderTop = $('.nav').offset().top + 1;
	$(window).scroll(function(){
		if( $(document).scrollTop() > HeaderTop ) {
			$('.nav').addClass('nav-fixed');
			$('.search-1').addClass('hide');
			//if article page + article sticky tools exists
			$(".article-nav").addClass("sticky");
			//bind event tracking on visible nav, unbinds on display none
			if($("body").hasClass("wallpaper-visible")){
				// Remove alignment fix class
				$("#rdm-wallpaper.ad-slot-wallpaper").css("top", "");
				$("#rdm-wallpaper.ad-slot-wallpaper").removeClass("alignbeneathheader");
			}
		}else{
			$('.nav').removeClass('nav-fixed');
			$('.search-1').removeClass('hide');
			//if article nav still exists
			$(".article-nav").removeClass("sticky");
			if($("body").hasClass("wallpaper-visible")){
				var stickybetween = HeaderTop-$(document).scrollTop()+49;
				$("#rdm-wallpaper.ad-slot-wallpaper").css("top", stickybetween)
				$("#rdm-wallpaper.ad-slot-wallpaper").addClass("alignbeneathheader");
			}
	   }
	});
	function recalcStickyHeader(){
		window.scrollTo(0,0); 
		var HeaderTop = $('.nav').offset().top + 1;
		$(window).scroll(function(){
			if( $(document).scrollTop() > HeaderTop ) {
				$('.nav').addClass('nav-fixed');
				$('.search-1').addClass('hide');
				//if article page + article sticky tools exists
				$(".article-nav").addClass("sticky");
				if($("body").hasClass("wallpaper-visible")){
					// Remove alignment fix class
					$("#rdm-wallpaper.ad-slot-wallpaper").css("top", "");
					$("#rdm-wallpaper.ad-slot-wallpaper").removeClass("alignbeneathheader");
				}
			}else{
				$('.nav').removeClass('nav-fixed');
				$('.search-1').removeClass('hide');
				//if article nav still exists
				$(".article-nav").removeClass("sticky");			
				if($("body").hasClass("wallpaper-visible")){
					var stickybetween = HeaderTop-$(document).scrollTop()+49;
					$("#rdm-wallpaper.ad-slot-wallpaper").css("top", stickybetween)
					$("#rdm-wallpaper.ad-slot-wallpaper").addClass("alignbeneathheader");
				}
			}
		});
	}

/* -------------- Conditional Loading Nav -------------- */
	function buildLegacyNav(){
		if(LegacyMSIE != false || LegacyAndroid != false){
			var ieLegacymenu3 = document.getElementById('conditional-navigation');
			$(".mask").prepend("<div class='menu3'>"+ieLegacymenu3.innerHTML+"</div>")
		}else{
			// console.log("Browser not IE789 or Android < 4" );
		}
	}
	$(function(){ 
		buildLegacyNav();
	});

/* -------------- Wrap this in the following to ensure that the DOM is ready (supports >=IE8): -------------- */
	document.onreadystatechange = function () {
		if (document.readyState === "interactive") {
			var div2 = document.getElementById('conditional-navigation'),
			desktop_html2 = div2.innerHTML,
			tablet_html2 = document.getElementById('tablet-conditional-navigation').innerHTML;
			
			function mediaqueryresponse(mql2){
				if (!mql2.matches){ // if media query matches
					div2.innerHTML = tablet_html2; 
				}else if(mql2.matches){
					div2.innerHTML = desktop_html2;    
					$('.mobile-branding').addClass('show');
				}
			}//mediaqueryresponse end
			var mql2 = window.matchMedia("screen and (max-width: 768px)"); /* 48.000em */
			mediaqueryresponse(mql2); // call listener function explicitly at run time
			mql2.addListener(mediaqueryresponse); // attach listener function to listen in on state changes
		} //if readyState === "interactive"
	} //onreadystatechange end 

/* -------------- Back to top Scroll -------------- */
	function scrollToTop(){
		var page = $("html, body");
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $(page).position().top }, 'slow' , function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 	
	}
	$('.scrollup').click(function(){
		scrollToTop()
	});

/* -------------- Gallery -------------- */
	/* Load adverts on lightbox -------------- */ 
		function loadLightboxAdverts(){
			if(googletag != "undefined"){
				for (var i=12; i < ad_slots_array.length; i++) {
					if (document.getElementById(ad_slots_array[i].div) !== null && document.getElementById(ad_slots_array[i].div).innerHTML == "") {
						googletag.cmd.push(function() { googletag.display(ad_slots_array[i].div); });
						//console.log("%cAd Slot " + i + " - Injected - " + ad_slots_array[i].div, "color:red;text-shadow:2px 2px 0px green;");
						console.log("Ad Slot " + i + " - Injected - " + ad_slots_array[i].div);
					}
				}
			}else{
				// console.debug("googletag not avail");	
			}
		}
	/* Globals -------------- */	
		var parentList = ".gallery-carousel-container";
		var outputLocation = ".lightbox-slider-wrapper";
		var slideClass = ".gallery-slide";
		function buildSlider(parentList, slideClass, outputLocation, showThumbs){
			if (typeof slideClass === 'undefined') { slideClass = 'slide'; }
			if (typeof showThumbs === 'undefined') { showThumbs = 0; }
			$(parentList).slick({
				lazyLoad: 'ondemand',
				autoplay: true,
				autoplaySpeed:8000,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade:true,
				arrows: true,
				dots:false,
				slide:slideClass,
				asNavFor: '.thumb-slider',
				touchThreshold:20
			});
			if (parentList == outputLocation){
				if(showThumbs === 1 || showThumbs === true){	
					buildThumbSlider(parentList, outputLocation);
				}else{
					// show thumbs is false - show carousel but dont show thumbslider
				}
			}else{
				// If carousel needs to go somewhere other than in the same place on the page. 			
				buildLightboxSlider();
				initlightboxClicks();
			}
		}
		function buildThumbSlider(parentList, outputLocation){
			var slideArray = [];
			slideArray  = $(parentList).find(".slick-slide");
			var sliderThumbBase ="";
			for(var i=0; i < slideArray.length; i++){
				var imgComponent = $(slideArray[i]).find("img").attr("src");
				/*Thumbnail slider array*/
				var rebuildThumbSlide = '<div class="slider-thumbnail"><div><img class="" src="'+imgComponent+'" alt="" /></div></div>';
				if(imgComponent !== undefined){
					sliderThumbBase =  sliderThumbBase+rebuildThumbSlide;
				}
			}
			var thumbSliderWrap = '<div class="thumb-slider">'+sliderThumbBase+'</div>';
			$(outputLocation).append(thumbSliderWrap);			
			$('.thumb-slider').slick({
				/*https://github.com/kenwheeler/slick/issues/475*/
				/*!BUG  As nav for not working*/
				asNavFor: parentList,
				slidesToShow: 5,
				slide:'.slider-thumbnail',
				slidesToScroll: 1,
				dots: false,
				centerMode: true,
				focusOnSelect: true,
				arrows:false,
				touchThreshold:20,
				responsive: [
					{	
						breakpoint: 1024,
						settings: {
								slidesToShow:4,
								slidesToScroll: 1,
								infinite: true,
								dots: false,
								centerMode:false
							}
						},
						{
						breakpoint: 720,
						settings: 
							{
								slidesToShow: 3,
								slidesToScroll: 1
							}
						},
						{
						breakpoint: 480,
						settings: 
							{
								slidesToShow: 2,
								slidesToScroll: 1,
								centerMode:false, 
								arrows:false
							}
					}
				]
			});
		}
	/* Lightbox -------------- */
		function buildLightbox(){
			var lightboxContainerOPEN = '<div class="lightbox" style="display:none;"><div class="content-width lightbox-wrapper">'
			var lightboxContainerCLOSE = '</div></div>';
			var pageTitle = $("h1.article-title").text();
			var closeButton = '<div class="close-lightbox">Close</div>';
			var lightboxHeader = '<h1 class="lightbox-carousel-title">'+pageTitle+'</h1>'+closeButton;
			var socialShareButtons = '<div class="socialshare" style=""><div class="" style="color:white;text-align:left;  font-size: 14px;">Share</div><ul class="tools-container">'+$("article ul.tools-container").html()+'</ul></div>';
			var outSliderwrapper ='<div class="lightbox-caption-wrapper" style="">'+'<p class="offsliderArrows" style="color:white;">'+	'<button type="button" data-role="none" class="slick-prev-arrow-custom">Prev</button>'+	'<button type="button" data-role="none" class="slick-next-arrow-custom">Next</button>'+	'</p>'+	'<p class="positionIndex" style="color:white;"></p>'+'<p class="gallery-slide-caption" style="color:white;"></p>'+socialShareButtons+'</div>';			
			var outSliderAdvert = '<div class="lightbox-ad-wrapper" style=""><div id="rdm-rhc-lightbox"></div></div>';		
			//var outSliderAdvert = '';		
			var lightboxMain = '<div class="lightbox-slider-wrapper">'+'</div>';
			var lightboxAside = '<div class="lightbox-aside-wrapper">'+outSliderwrapper+outSliderAdvert+'</div>';
			var LightboxContent =lightboxHeader+ lightboxMain+""+lightboxAside;
			lightboxContainer = lightboxContainerOPEN+LightboxContent+lightboxContainerCLOSE;
			$(lightboxContainer).insertAfter(".article-header");	
			$('.gallery-slide').append("<div class='slideshowTrigger'></div>");	
		}
		function buildLightboxSlider(){
			var slideArray = [];
			slideArray  = $(parentList+" "+slideClass);
			var sliderBase ="";
			var sliderThumbBase ="";
			for(var i=0; i < slideArray.length; i++){
				var imgComponent = $(slideArray[i]).find("img").attr("src");
				var captionComponent = $(slideArray[i]).find(".gallery-slide-caption").text();
				//if caption or image isnt found- put in a fallback
				/*Thumbnail slider array*/
				var rebuildSlide = '<div><img class="" data-lazy="'+imgComponent+'" alt="" /><p class="gallery-slide-caption">'+captionComponent+'</p></div>';
				sliderBase =  sliderBase+rebuildSlide;	
			}
			/*Output*/
			var sliderWrap ='<div class="lightbox-slider">'+sliderBase+'</div>';		
			$(outputLocation).append(sliderWrap);
			$('.lightbox-slider').slick({
				lazyLoad: 'ondemand',
				slidesToShow: 1,
				slidesToScroll: 1,
				fade:true,
				arrows: true,
				dots:false,
				asNavFor: '.lightbox .thumb-slider'
			});
			$('.lightbox .thumb-slider').slick({
				lazyLoad: 'ondemand',
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.lightbox-slider',
				dots: false,
				centerMode: true,
				focusOnSelect: true,
				arrows:false,
				touchThreshold:20,
				responsive: [
					{
						breakpoint: 1024,
						settings: 
						{
							slidesToShow:4,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode:false
						}
					},
					{
						breakpoint: 720,
						settings: 
						{
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings: 
						{
							slidesToShow: 2,
							slidesToScroll: 1,
							centerMode:false, 
							arrows:false
						}
					}
				]
			});	 
			initlightboxClicks();
		}
		function gotoLightboxSlide(slideIndex){
			$('.lightbox-slider').slick('slickSetOption', {option:'asNavFor',value:''}, false);
			$('.lightbox .thumb-slider').slick('slickGoTo', slideIndex, true);
			openLightbox();
			$('.lightbox-slider').slick('slickGoTo', slideIndex, false);
			$('.lightbox-slider').slick('slickSetOption', {option:'asNavFor', value:'.lightbox .thumb-slider'}, false);
			if ($(".lightbox").length > 0 ){$("body").addClass("modal-open-noscroll");}
			$('.lightbox-slider').resize();	
		}
		//Open Lightbox
			function openLightbox(){
				$(".lightbox").fadeIn(400);
				if ($(".lightbox").length > 0 ){$("body").addClass("modal-open-noscroll");}
				$('.lightbox-slider').resize();	
				$('.thumb-slider').resize();			
				if($(".lightbox").hasClass("firstrun")){
					//dont run advert load script
				}else{
					$(".lightbox").addClass("firstrun");
					loadLightboxAdverts();
				}
			}
		//Close Lightbox
			function closeLightbox(){
				if($(".lightbox:visible")){
					$(".lightbox").fadeOut(300);
					$("body").removeClass("modal-open-noscroll");
				}
			}
		function initlightboxClicks(){
			//run after lightbox slider is init
			$(".lightbox, .close-lightbox").on("click",(function(e){
				closeLightbox();
			}));
			$(".lightbox-slider-wrapper, .lightbox-aside-wrapper").on("click",(function(e){
				e.stopPropagation();
			}));
			$(outputLocation+" .lightbox-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
				// console.log(nextSlide);
				var nextinLine = slick.$slides[nextSlide];
				var imageCaption = $(nextinLine).find(".gallery-slide-caption").text();
				var parseCurrentslide = nextSlide+1;
				var slidePositionofIndex = "Slide "+parseCurrentslide+" of "+slick.slideCount;
				$(".lightbox-caption-wrapper p.positionIndex").html(slidePositionofIndex); 
				if (imageCaption){ 
					$(".lightbox-caption-wrapper .gallery-slide-caption").html(imageCaption);
				}else{
					$(".lightbox-caption-wrapper .gallery-slide-caption").html("");
				}
			});
			$(".slick-next-arrow-custom").click(function(){
				$('.lightbox-slider').slick("slickNext");
			});
			$(".slick-prev-arrow-custom").click(function(){
				$('.lightbox-slider').slick("slickPrev");
			});
		}
		function initializeGallery(CAROUSEL,LIGHTBOX){		
			if(CAROUSEL === 1) {
				buildSlider(parentList, slideClass,parentList, 1);
			}
			if( LIGHTBOX === 1){
				buildLightbox(); 
				buildLightboxSlider(parentList, slideClass,outputLocation, 1);		
			}
		}
		$(".gallery-carousel-container .gallery-slide, .slideshowTrigger").click(function(e){
			/* !BUG - this needs a teeny check to see if cursor moves before opening lightbox - */
			var  slideIndex = parseInt( $(this).index());
			gotoLightboxSlide(slideIndex);
		});

/* -------------- Video -------------- */
	$(".video-player-carousel").slick({
		'mobileFirst':false, "touchThreshold":200,
		"infinite":false, "variableWidth":false,
		"slidesToShow": 5,"slidesToScroll": 1,
		"arrows":true,
		"responsive": [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:4,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					centerMode:false
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode:false, 
					arrows:true
				}
			}	
		]
	});

/* -------------- jw player video player console -------------- */
	$(".video-article-thumbnail > a, .video-player-carousel .listings-article-title > a").click(
		function(e){
			e.preventDefault();
		}
	);
	$(".video-player-carousel article").click(
		function(e){
			// e.preventDefault();
			var mediaID = "";
			mediaID = $(this).find(".video-id").text();
			var playerArray = [];
			playerArray = mediaID.split("-");
			if (typeof jwplayer == "function"){
				jwplayer().load([{
					file:"http://content.jwplatform.com/manifests/"+playerArray[0]+".m3u8"
				}]).play();
			}
			var title = $(this).find(".listings-article-title").text();
			var summary = $(this).find(".description").text();
			var pubdate = $(this).find(".video-hidden-meta .article-publishdate").html();
			if (!pubdate){
				pubdate = "";		
			}
			if (!summary){
				summary = "";	
			}
			$(".video-player-info h2").html(title);
			$(".video-player-info p").html(summary);
			$(".video-player-info .article-publishdate").html(pubdate);
			var readmore_link = $(this).find(".article-permalink a").attr("href");
			$(".video-player-info .full-article-link").attr("href", readmore_link);
			$(".video-article-thumbnail").removeClass("now-playing");
			$(this).find(".video-article-thumbnail").addClass("now-playing");
			/* Add now playing icon/ overlay */
			$(".video-player-carousel article .now-playing-overlay").remove();
			var overlayHtml = "<div class='now-playing-overlay'>Now playing<div class='thumbnnail-overlay-article-link'><a href='"+readmore_link+"'>Read the full article</a></div></div>"
			$(this).find(".video-article-thumbnail").prepend(overlayHtml);
			//$(this).find(".thumbnnail-overlay-article-link a").click(function(e){e.stopPropagation()})
		}
	);

/* -------------- Flex-box fixes: Fallback for Flex settings on non-support browsers --------------  */
	/* https://gist.github.com/jcypret/5800690 Demo : https://css-tricks.com/examples/EqualHeightsInRows/ */
	var na = navigator.appVersion;
	if (na.indexOf("MSIE 10") !== -1){
		flexFallBack();
	}
	var v = document.body || document.documentElement, v = v.style;
	((v.webkitFlexWrap === '' || v.msFlexWrap === '' || v.flexWrap === '' ) || flexFallBack());
	function flexFallBack(){
		document.documentElement.className = document.documentElement.className+= ' no-flexbox';
		function setComponentHeight() {
			var current_width = $(window).width();
			var mainCols = $('.component-news .primary-news >');
			var righttopHeight = $(".component-news .subsidary-news-top").height();
			var rightbottomHeight = $(".component-news .subsidary-news-lower").height();
			var lowerCols = $('.component-news .subsidary-news-lower .col-lrg');
			if( mainCols.length  && current_width >= 768) {
				mainCols.height('auto');
				lowerCols.height('auto');
				var maxHeight = Math.max.apply(Math, $.map(mainCols, function(e) {
					return $(e).height(); 
				}
				));
				mainCols.height(maxHeight);
				var lowerColsNew = maxHeight - righttopHeight - 18;
				lowerCols.height(lowerColsNew);
			} else {
				mainCols.height('auto');
			}
		}
		equalheight = function(container){
			var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el,
			topPosition = 0;
			$(container).each(function() {
				$el = $(this);
				$($el).height('auto')
				topPostion = $el.position().top;
				if (currentRowStart != topPostion) {
					for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					rowDivs.length = 0; // empty the array
					currentRowStart = topPostion;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					rowDivs.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}
		$(window).load(function() {
			equalheight('.component-news .subsidary-news-top .col-lrg');
			equalheight('.component-news2 .span-lrg_1_of_3');
			equalheight('.component-highlights .section .col-lrg.span-lrg_2_of_4');
			equalheight('.component-opinion .span-lrg_2_of_4')
			equalheight('.component-trendlines .col-lrg.span-lrg_1_of_3')
			equalheight('.component-more-from .col-lrg.span-lrg_1_of_4')
			equalheight('main.content-inner.content-full-width .main-content section.group .col-lrg.span-lrg_2_of_4')
			setComponentHeight(); 
		});
		$(window).resize(function() {
			equalheight('.component-news .subsidary-news-top .col-lrg');
			equalheight('.component-news2 .span-lrg_1_of_3');
			equalheight('.component-highlights .section .col-lrg.span-lrg_2_of_4');
			equalheight('.component-opinion .span-lrg_2_of_4')
			equalheight('.component-trendlines .col-lrg.span-lrg_1_of_3')
			equalheight('.component-more-from .col-lrg.span-lrg_1_of_4')
			equalheight('main.content-inner.content-full-width .main-content section.group .col-lrg.span-lrg_2_of_4')
			setComponentHeight();
		});
	}

/* -------------- Toggle Listings view modes GRID/LIST -------------- */
	var listingsLoop = "#listings-savedlist, #listings";
	var groupA = $(".image-text-group-a", listingsLoop);
	var groupB = $(".image-text-group-b", listingsLoop);
	var cookieName = "Listing_view";
	function listingGridView(){ 
			$(listingsLoop).removeClass("list-view");
			$(listingsLoop).addClass("grid-view");
			$("#listings-list-grid-view").removeClass("grid-view-icon").addClass("list-view-icon");
	    (groupA.hasClass("hide-element")) ? setCookieList(cookieName,'grid_without_image') : setCookieList(cookieName,'grid_with_image');
	}
	function listingListView(){ 
			$(listingsLoop).removeClass("grid-view");
			$(listingsLoop).addClass("list-view");
			$("#listings-list-grid-view").addClass("grid-view-icon").removeClass("list-view-icon");
	    (groupA.hasClass("hide-element")) ? setCookieList(cookieName,'list_without_image') : setCookieList(cookieName,'list_with_image');
	}
	function hideImage(){ 
			groupA.addClass("hide-element");
			groupB.addClass("no-article-image");
			$("#listings-image-view").removeClass("hide-image-icon").addClass("show-image-icon");
	    ($(listingsLoop).hasClass("grid-view")) ? setCookieList(cookieName,'grid_without_image') : setCookieList(cookieName,'list_without_image');
	}
	function showImage(){ 
	    groupA.removeClass("hide-element");
	    groupB.removeClass("no-article-image");
		$("#listings-image-view").addClass("hide-image-icon").removeClass("show-image-icon");
	    ($(listingsLoop).hasClass("grid-view")) ? setCookieList(cookieName,'grid_with_image') : setCookieList(cookieName,'list_with_image');
	}
	// -------------- buttons
		$("#listings-image-view").on('click', function() { 
			return (groupB.hasClass("no-article-image")) ? showImage() : hideImage(); 
		});

		$("#listings-list-grid-view").on('click', function() { 
		  return ($(listingsLoop).hasClass("grid-view")) ? listingListView() : listingGridView();
		});
	function setCookieList(cookieName,cookieValue,nDays) {
		var nDays = 365;
	    var today = new Date();
	    var expire = new Date();
	    if (nDays==null || nDays==0) nDays=1;
	    expire.setTime(today.getTime() + 3600000*24*nDays);
	    document.cookie = cookieName+"="+escape(cookieValue)
	        + ";expires="+expire.toGMTString()+";path=/";
	}  
	function getCookieList(name) {
	      var dc = document.cookie;
	      var prefix = name + "=";
	      var begin = dc.indexOf("; " + prefix);
	      if (begin == -1) {
	          begin = dc.indexOf(prefix);
	          if (begin != 0) return null;
	      } else {
	          begin += 2;
	          var end = document.cookie.indexOf(";", begin);
	          if (end == -1) {
	          end = dc.length;
	          }
	      }
	    return unescape(dc.substring(begin + prefix.length, end));
	} 
	var listingView = getCookieList(cookieName);
	switch(listingView){
	    case ((listingView == null)? listingView : undefined ):
	    break;  
	    case ((listingView.match(/^list_with_image/g))? listingView : undefined ) :
	        listingListView();
	        showImage();  
	    break;
	    case ((listingView.match(/^list_without_image/g))? listingView : undefined ) :
	      listingListView();
	      hideImage();    
	    break; 
	    case ((listingView.match(/^grid_with_image/g))? listingView : undefined ) :
	        listingGridView();
	        showImage(); 
	    break;         
	    case ((listingView.match(/^grid_without_image/g))? listingView : undefined ) :
	      listingGridView();
	      hideImage()    
	    break;
	    default:
	    break;
	}

/* -------------- Tooltip -------------- */
	$('.site-tooltip').hover(function(){
		// Hover over code
		var title = $(this).attr('title');
		$(this).data('tip_text', title).removeAttr('title');
		$('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
	}, function() {
		$(this).attr('title', $(this).data('tip_text'));
		$('.tooltip').fadeOut(function(){$(this).remove();});
	}).mousemove(function(e) {
		var mousex = e.pageX + -20; 
		var mousey = e.pageY + 15; 
		$('.tooltip').css({ top: mousey, left: mousex })
	});

/* -------------- Tabs -------------- */
	$('[data-tab]').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active').siblings('[data-tab]').removeClass('active');
			$('[data-content=' + $(this).data('tab') + ']').removeClass('active').siblings('[data-content]').removeClass('active');
		} else {
			$(this).addClass('active').siblings('[data-tab]').removeClass('active');
			$('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
		}
	});

/* -------------- Saved, account and contact links open tabs -------------- */
	function myAccountTab(){
		$('[data-tab="2"]').trigger('click').addClass('active');
	}
	function customerServicesTab(){
		$('[data-tab="3"]').trigger('click').addClass('active');
	}
	$(window).load(function() {
		var hash = location.hash.substring(1);
		(hash === "myaccount")? myAccountTab() : undefined; 
		(hash === "contact")? customerServicesTab() : undefined; 
	});
	$('.user-menu').on('click','.account-user-link, .contact-user-link',function(){
		var url = $(this).attr('href');
		var hash = url.substring(url.indexOf('#')+1);
		(hash === "myaccount")? myAccountTab() : undefined; 
		(hash === "contact")? customerServicesTab() : undefined; 
	});	

/* -------------- Header panel toggle open closed -------------- */
	var topDropdown = $(".main-top-tab-panel");
	function opentopDropdown(toppanelItem){
		if($(toppanelItem).hasClass("selected")){
			/* do nothing */
		}else{
			closetopDropdown();
			$(toppanelItem).addClass('selected').find( ".menu-top-panel" ).addClass("show-panel");
			/* menu panels close if open by clicking on page*/
			if ($(".main-top-title").hasClass("selected")){
				$(".page-content").on("click", function(e){
					closeMenus();
				});
			}
		}
	}	
	function toggletopDropdown(toppanelItem){
		if (toppanelItem){ 
			/* do nothing */
		}else{
			toppanelItem = this;
		}
		if($(toppanelItem).hasClass("selected")){
			$(toppanelItem).removeClass('selected');
			closetopDropdown()
		}else{ 
			opentopDropdown(toppanelItem)
		}
	}
	function closetopDropdown(){
		$(topDropdown).removeClass('selected').find( ".menu-top-panel" ).removeClass("show-panel"); 
	}

	topDropdown.on('click', function(e){
		e.preventDefault();
	})
	topDropdown.on('click', debounce(function(e){
		toggletopDropdown(this);
		}, 200, true)
	);
	$(topDropdown).find( ".menu-top-panel" ).click(function(event){
		event.stopPropagation()
	});

/* -------------- Cookies -------------- */
	/* Paul Stephens' NetScape-based cookie-handling library http://web.ukonline.co.uk/paul.stephens/index.htm */
	function setCookie (name, value, lifespan, access_path) {
		var cookietext = name + "=" + escape(value)  
		if (lifespan != null) {
			var today=new Date();
			var expiredate = new Date();
			expiredate.setTime(today.getTime() + 1000*60*60*24*lifespan);
			cookietext += "; expires=" + expiredate.toGMTString();
		}
		if (access_path != null) { 
			cookietext += "; PATH="+access_path;
		}
		document.cookie = cookietext;
		return null
	}
	function setDatedCookie(name, value, expire, access_path) {
		var cookietext = name + "=" + escape(value)  + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()));
		if (access_path != null) { 
			cookietext += "; PATH="+access_path; 
		}
		document.cookie = cookietext;
		return null
	}
	function deleteCookie(Name, Path) {
		setCookie(Name,"Deleted", -1, Path);
	}

/* -------------- HIDE / SHOW Comments -------------- */
	var listDisplay2 = $(".list-inner");
	$(".comment").click(function(event){
		listDisplay2.toggleClass("hide");
		$('div a',this).toggleClass('font-nada');
		$('span:first-of-type',this).toggleClass('font-nada');
		$('.btn.comments .comment-add').toggleClass('less');
		$('div', this).toggleClass('less');
		if (DISQUS !== "undefined"){
			DISQUS.reset({reload:true});
		}
		$(window).resize();
		event.preventDefault();
	});

/* -------------- SITE TRACKING -- Behaviour tracking Universal analytics -------------- */
	var article_short_url = document.location.origin+document.location.pathname;
	var socialTrack = {
	stickyHeader : function(){
		var stickyObjects = $(".article-nav.sticky").find(".tools-container").find("li");
		stickyObjects.each(function(){ 
			var toolObjects = $(this).find(".article-tools");
			toolObjects.each(function(){
				//bug- not delegating till visible - needs to run after conditional nav is loaded. 
				if ($(this).hasClass("twitter-icon")){	
					$(this).find("a").on("click", function(e){
					// gua('uni.send', 'event', 'Article Page Interaction', 'Facebook Share', 'Article Top', 1);	
					gua('uni.send', 'event', 'Article Page Interaction', 'Twitter Share', 'Sticky Header',1); 
					gua('uni.send', 'social', 'Twitter', 'Tweet', article_short_url);
					});
					$(this).attr("data-social-tracking","added");
				} 			
				if ($(this).hasClass("linkedin-icon")){	
					$(this).find("a").on("click", function(e){
						 gua('uni.send', 'event','Article Page Interaction', 'Linkedin Share', 'Sticky Header',1);
						 gua('uni.send', 'social', 'Linkedin', 'Share', article_short_url);
						});
						$(this).attr("data-social-tracking","added");
				} 							
				if ($(this).hasClass("facebook-icon")){	
					$(this).find("a").on("click",  function(e){
						 gua('uni.send', 'event','Article Page Interaction', 'Facebook Share', 'Sticky Header',1);
						gua('uni.send', 'social', 'Facebook', 'Share', article_short_url);
						});
						$(this).attr("data-social-tracking","added");
				} 			
				if ($(this).hasClass("gplus-icon")){	
					$(this).find("a").on("click", function(e){ 
						gua('uni.send', 'event','Article Page Interaction', 'Google Share', 'Sticky Header',1);
						gua('uni.send', 'social', 'Google+', 'Share', article_short_url);
						});
						$(this).attr("data-social-tracking","added");
				} 			
				if ($(this).hasClass("email-icon")){	
					$(this).find("a").on("click", function(e){ 
						gua('uni.send', 'event','Article Page Interaction', 'Email', 'Sticky Header',1);
						});
						$(this).attr("data-social-tracking","added");
				} 			
				if ($(this).hasClass("save-icon")){	
					$(this).find("a").on("click", function(e){ 
					if($(this).parent().hasClass("saved")){
							gua('uni.send', 'event','Article Page Interaction', 'Remove from Saved', 'Sticky Header',1);
					}else{
							gua('uni.send', 'event','Article Page Interaction', 'Save', 'Sticky Header',1);
					}	
					//gua('uni.send', 'event','Article Page Interaction', 'Save Article', 'Sticky Header',1);
						});
						$(this).attr("data-social-tracking","added");
				} 			
				if ($(this).hasClass("comment-icon")){	
					$(this).find("a").on("click", function(e){ 
						gua('uni.send', 'event','Article Page Interaction', 'Comments', 'Sticky Header',1); 
						});
						$(this).attr("data-social-tracking","added");
				} 		
				if ($(this).hasClass("print-icon")){	
					$(this).find("a").on("click", function(e){ 
						gua('uni.send', 'event','Article Page Interaction', 'Print', 'Sticky Header',1); 
						});
						$(this).attr("data-social-tracking","added");
				} 
			}); 
		})
	}, 
	articleTop : function(){
		var articleTopObjects = $(".article-meta-container").find(".tools-container").find(".article-tools");
		articleTopObjects.each(function(){
			if ($(this).hasClass("twitter-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Article Page Interaction', 'Twitter Share', 'Article Top',1); 
					gua('uni.send', 'social', 'Twitter', 'Tweet', article_short_url);								

				});
			} 			
			if ($(this).hasClass("linkedin-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Article Page Interaction', 'Linkedin Share', 'Article Top',1);
					gua('uni.send', 'social', 'Linkedin', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("facebook-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Facebook Share', 'Article Top',1); 
					gua('uni.send', 'social', 'Facebook', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("gplus-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Google Share', 'Article Top',1);
					gua('uni.send', 'social', 'Google+', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("email-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Email', 'Article Top',1);
				});
			} 			
			if ($(this).hasClass("save-icon")){	
				$(this).find("a").on("click", function(e){	
					if($(this).parent().hasClass("saved")){
						gua('uni.send', 'event','Article Page Interaction', 'Remove from Saved', 'Article Top',1);
					} else {
						gua('uni.send', 'event','Article Page Interaction', 'Save Article', 'Article Top',1);
					}
				});
			} 		
			if ($(this).hasClass("comment-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Comments', 'Article Top',1); 
				});
			} 					
			$(this).attr("data-social-tracking","added");	
		})
	},			
	articleEnd : function(){
		var articleEndObjects = $(".article-page-body-content").find(".tools-container").find(".article-tools");
		articleEndObjects.each(function(){
			var article_short_url = document.location.origin+document.location.pathname;
			if ($(this).hasClass("twitter-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Article Page Interaction', 'Twitter Share', 'Article End',1); 
					gua('uni.send', 'social', 'Twitter', 'Tweet', article_short_url);								
				});
			} 			
			if ($(this).hasClass("linkedin-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Article Page Interaction', 'Linkedin Share', 'Article End',1);
					gua('uni.send', 'social', 'Linkedin', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("facebook-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Facebook Share', 'Article End',1); 
					gua('uni.send', 'social', 'Facebook', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("gplus-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Google Share', 'Article End',1);
					gua('uni.send', 'social', 'Google+', 'Share', article_short_url);
				});
			} 			
			if ($(this).hasClass("email-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Email', 'Article End',1);
				});
			} 			
			if ($(this).hasClass("save-icon")){	
				$(this).find("a").on("click", function(e){
					//	gua('uni.send', 'event','Article Page Interaction', 'Save', 'Article End',1);
					if($(this).parent().hasClass("saved")){
							gua('uni.send', 'event','Article Page Interaction', 'Remove from Saved', 'Article End',1);
					}else{
							gua('uni.send', 'event','Article Page Interaction', 'Save Article', 'Article End',1);
					}	
				});
			} 			
			if ($(this).hasClass("comment-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Comments', 'Article End',1); 
				});
			} 
			$(this).attr("data-social-tracking","added");				
		})
	},
	articleAuthorTop: function(){
		var articleAuthorTopObjects = $(".article-meta-container .meta-taxonomy-list.author-dateline a");
		articleAuthorTopObjects.each(function(){
			if ($(this).hasClass("twitter-follow")){	
				$(this).on("click", function(e){ 				
					gua('uni.send', 'event','Article Page Interaction', 'Twitter Follow Author', 'Article Top',1); 
				});
			} else {
				$(this).on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Author Profile', 'Article Top',1); 
				});
			}		
		})
	},
	articleAuthorEnd: function(){
		var articleAuthorEndObjects = $(".about-author.boxout .meta-taxonomy-list.author-dateline a");
		articleAuthorEndObjects.each(function(){
			if ($(this).hasClass("twitter-follow")){	
				$(this).on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Twitter Follow Author', 'Article End',1); 
				});
			} else { 
				$(this).on("click", function(e){ 
					gua('uni.send', 'event','Article Page Interaction', 'Author Profile', 'Article End',1); 
				});
			}
		})
	},
	headerMenu : function(){
		var headersocialObjects = $(".main-top-sociallinks").find(".header-tools-content").find(".nav-tools");
		headersocialObjects.each(function(){
			if ($(this).hasClass("twitter-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Header Interaction', 'Twitter Follow', 'Header Social Links',1); 
					gua('uni.send', 'social', 'Twitter', 'Follow', article_short_url);								
				});
			} 			
			if ($(this).hasClass("linkedin")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Header Interaction', 'Linkedin Follow', 'Header Social Links',1);
					gua('uni.send', 'social', 'Linkedin', 'Follow', article_short_url);
				});
			} 			
			if ($(this).hasClass("facebook-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Header Interaction', 'Facebook Follow', 'Header Social Links',1); 
					gua('uni.send', 'social', 'Facebook', 'Follow', article_short_url);
				});
			} 			
			if ($(this).hasClass("gplus-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Header Interaction', 'Google Follow', 'Header Social Links',1);
					gua('uni.send', 'social', 'Google+', 'Follow', article_short_url);
				});
			} 		
			if ($(this).hasClass("youtube-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Header Interaction', 'Youtube Follow', 'Header Social Links',1);
					gua('uni.send', 'social', 'Google+', 'Subscribe', article_short_url);
				});
			} 		
			if ($(this).hasClass("rss-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Header Interaction', 'RSS Feed', 'Header Social Links',1);
				});
			} 			
			if ($(this).hasClass("newsletters")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Header Interaction', 'Newsletters Signup', 'Header Social Links',1);
				});
			} 			
			if ($(this).hasClass("apps")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Header Interaction', 'Mobile apps', 'Header Social Links',1); 
				});
			}
			$(this).attr("data-social-tracking","added");			
		})
	},
	footerMenu : function(){
		var footersocialObjects = $(".main-footer-content").find(".footer-tools-content").find(".nav-tools");
		footersocialObjects.each(function(){
			var article_short_url = document.location.origin+document.location.pathname;

			if ($(this).hasClass("twitter-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Footer Interaction', 'Twitter Follow', 'Footer Social Links',1); 
					gua('uni.send', 'social', 'Twitter', 'Follow', article_short_url);								
				});
			} 			
			if ($(this).hasClass("linkedin")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Footer Interaction', 'Linkedin Follow', 'Footer Social Links',1);
					gua('uni.send', 'social', 'Linkedin', 'Follow', article_short_url);
				});
			} 			
			if ($(this).hasClass("facebook-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Footer Interaction', 'Facebook Follow', 'Footer Social Links',1); 
					gua('uni.send', 'social', 'Facebook', 'Follow', article_short_url);
				});
			} 			
			if ($(this).hasClass("gplus-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Footer Interaction', 'Google Follow', 'Footer Social Links',1);
					gua('uni.send', 'Google+', 'Follow', article_short_url);
				});
			} 		
			if ($(this).hasClass("youtube-icon")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Footer Interaction', 'Youtube Follow', 'Footer Social Links',1);
					gua('uni.send', 'Google+', 'Subscribe', article_short_url);
				});
			} 		
			if ($(this).hasClass("rss-icon")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Footer Interaction', 'RSS Feed', 'Footer Social Links',1);
				});
			} 			
			if ($(this).hasClass("newsletters")){	
				$(this).find("a").on("click", function(e){
					gua('uni.send', 'event','Footer Interaction', 'Newsletters Signup', 'Footer Social Links',1);
				});
			} 			
			if ($(this).hasClass("apps")){	
				$(this).find("a").on("click", function(e){ 
					gua('uni.send', 'event','Footer Interaction', 'Mobile apps', 'Footer Social Links',1); 
				});
			}
			$(this).attr("data-social-tracking","added");			
			})
		}		
	}

/* -------------- SITE TRACKING -------------- */
	var siteTrack = {
		maintop : function(){
		var maintopObjects = $(".main-top-content.main-top-menu").find(".main-top-title");
			maintopObjects.each(function(){
				if ($(this).hasClass("main-top-events")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Events', 'Commercial Navigation', 1); 
					});
				}
				if ($(this).hasClass("main-top-awards")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Awards', 'Commercial Navigation', 1); 
					});
				}
				if ($(this).hasClass("main-top-hound")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Whitepapers', 'Commercial Navigation', 1); 
					});
				}
				if ($(this).hasClass("main-top-fundcentre")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Fund Centre', 'Commercial Navigation', 1); 
					});
				}		

				if ($(this).hasClass("main-top-research")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Research', 'Commercial Navigation', 1); 
					});
				}		
				if ($(this).hasClass("main-top-books")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Books', 'Commercial Navigation', 1); 
					});
				}						
				if ($(this).hasClass("main-top-jobs")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Jobs', 'Commercial Navigation', 1); 
					});
				}	
				if ($(this).hasClass("main-top-register")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Subscribe', 'Commercial Navigation', 1); 
					});
				}						
				if ($(this).hasClass("main-top-trial")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Register', 'Commercial Navigation', 1); 
					});
				}	
				if ($(this).hasClass("main-top-analysis")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Analysis', 'Commercial Navigation', 1); 
					});
				}						
				if ($(this).hasClass("main-top-data")){	
					$(this).find("a").on("click", function(e){
						gua('uni.send', 'event','Header Interaction', 'Data', 'Commercial Navigation', 1); 
					});
				}				
			}) 				
		},
		mainmenu : function(){
			var mainmenuObjects = $("nav.nav .main-menu.main-top-content li.menu-title > a");
				mainmenuObjects.each(function(){
					if($(this).hasClass("more-panel")){
							$(this).on("click", function(e){
							gua('uni.send', 'event','Header Interaction', 'All Sections Link', 'Primary Navigation', 1); 
							})		
					}else{
							$(this).on("click", function(e){
							gua('uni.send', 'event','Header Interaction', 'Primary Nav', 'Primary Navigation', 1); 
							})
					}
				})
		},	
		submenu : function(){
			$("nav.nav .main-menu.main-top-content ul.main-sub-menu li.sub-menu-content > a").on("click", function(e){
				gua('uni.send', 'event','Header Interaction', 'Sub Nav Link', 'Sub Navigation', 1); 
			})
		},
		megamenuarticles: function(){
			$("nav.nav .main-menu.main-top-content article.menu-contents.col-lrg.span-lrg_1_of_5 a").on("click", function(e){
				gua('uni.send', 'event','Header Interaction', 'Sub Nav Article', 'Sub Navigation', 1); 
			})		
			
		},
		allSections : function(){
			var allSectionsObjects = $("nav.nav .main-menu.main-top-content li.menu-title .navigation-all-sections .menu-contents").find("a");
			allSectionsObjects.each(function(){
				$(this).on("click", function(e){
				gua('uni.send', 'event','Header Interaction', 'All Sections Link', 'All Sections', 1); 
				})		
			})
		}	
	}

/* -------------- RELATED ARTICLE TRACKING -------------- */
	var relatedTracking	= {
		boxRelatedArticles : function(){
			var inbodyrelated =  $(".related-article-holder .related-in-article li");
			for(var q = 0; q < inbodyrelated.length; q++){
				(function(w){
					$(inbodyrelated[w]).find("a").on("click", function(){
						var pos = 'Related Articles '+String(w+1);
						gua('uni.send', 'event','Article Page Interaction', pos , 'Related Articles', 1); 
					})		
				}(q))
			}
		},
		moreoncontenttypeRelatedArticles : function(){
		var moreoncontenttype =  $("section.news-articles .col.span_2_of_4");
		for(var q = 0; q < moreoncontenttype.length; q++){
			(function(w){
				$(moreoncontenttype[w]).find("a").not(".article-meta-details li a").on("click", function(e){
					var pos = 'More On Content Type '+String(w+1);
					gua('uni.send', 'event','Article Page Interaction', pos , 'More On Content Type', 1); 

				})
			}(q))

			}
		},
		/*risk end of article tracking*/
		/*
		section.component-more-from
		component-weekly-wrap
		component-most-read
		*/	
		moreonFurtherreadingArticles : function(){
			var moreonFurtherreading =  $(".related-articles .col.span_2_of_4");
			for(var q = 0; q < moreonFurtherreading.length; q++){
				(function(w){
					$(moreonFurtherreading[w]).find("a").on("click", function(){
						var pos = 'Further Reading '+String(w+1);
						gua('uni.send', 'event','Article Page Interaction', pos , 'Further reading', 1); 
				
					})
				}(q))

			}
		},
		moreoncategoryeRelatedArticles : function(){
		var moreoncategorytype =  $("section.component-more-from .col-lrg.span-lrg_1_of_4");
		for(var q = 0; q < moreoncategorytype.length; q++){
			(function(w){
				$(moreoncategorytype[w]).find("a").not(".article-meta-details li a").on("click", function(e){
					var pos = 'More On Category '+String(w+1);
					gua('uni.send', 'event','Article Page Interaction', pos , 'More On Category', 1); 

				})
			}(q))

			}
		},
		moreonMostRead : function(){
			var mostread =  $(".component-most-read  ol li");
			for(var q = 0; q < mostread.length; q++){
				(function(w){
					$(mostread[w]).find("a").on("click", function(){
						var pos = 'Most Read '+String(w+1);
						gua('uni.send', 'event','Article Page Interaction', pos , 'Most Read', 1); 
					})
				}(q))
			}
		},
		moreonWeeklywrap : function(){
			var weeklywrap =  $(".component-weekly-wrap  article");
			for(var q = 0; q < weeklywrap.length; q++){
				(function(w){
					$(weeklywrap[w]).find("a").on("click", function(){
						var pos = 'Weekly Wrap '+String(w+1);
						gua('uni.send', 'event','Article Page Interaction', pos , 'Weekly Wrap', 1); 
					})
				}(q))
			}
		}
	}
	
/* -------------- EVENT TRACKING FOR SITE INTERACTION -------------- */	
	function eventTrackingRelated(){
		//relatedTracking.sidebarRelatedArticles();
		relatedTracking.boxRelatedArticles();
		// relatedTracking.moreonRelatedArticles();
		relatedTracking.moreoncontenttypeRelatedArticles();
		relatedTracking.moreonFurtherreadingArticles()
		relatedTracking.moreoncategoryeRelatedArticles()
		relatedTracking.moreonMostRead()
		relatedTracking.moreonWeeklywrap()
	}	

	function eventTrackingArticle(){
	//	socialTrack.stickyHeader()
		socialTrack.articleTop()
		socialTrack.articleEnd()
		socialTrack.articleAuthorTop()
		socialTrack.articleAuthorEnd()

	}

	function eventTrackingHeader(){
		siteTrack.maintop()
		siteTrack.mainmenu()
		siteTrack.submenu()
		siteTrack.megamenuarticles()
		siteTrack.allSections()
	}	

	function eventTrackingsiteWide(){
		socialTrack.headerMenu()
		socialTrack.footerMenu()
	}
	$(function(){ 
		eventTrackingHeader();
		eventTrackingArticle();
		eventTrackingRelated();
		eventTrackingsiteWide();
	});

/* -------------- EVENTS FILTERING -------------- */
	// Events filter section toggle on events listing template only
	var eventFilterHeader = document.getElementById("events_filter_header"); 
	var eventFilterOptions = document.getElementById("events_filter_options");
	var eventFilterApplication = document.getElementById("apply_events_filter");
	var eventsFilterClear =  document.getElementById("clear_event_filter");
	function toggleEventFilterOptions(){ 
		if(eventFilterOptions.style.display == "none"){ 
			eventFilterOptions.style.display = "block";
			eventFilterHeader.setAttribute("class","events-filter-header-link filter-open"); 
		} else { 
			eventFilterOptions.style.display = "none";
			eventFilterHeader.setAttribute("class","events-filter-header-link");
		} 
	} 
	// event filter functions
	function checkEventFilters(){
		var conference = document.getElementsByClassName('type-Conference');
		var corpnetwork = document.getElementsByClassName('type-Corporate-Networking');
		var exhibition = document.getElementsByClassName('type-Exhibition');
		var indbriefing = document.getElementsByClassName('type-Industry-Briefing');
		var roadshow = document.getElementsByClassName('type-Roadshow');
		var training = document.getElementsByClassName('type-Training');
		var awards = document.getElementsByClassName('type-Awards/Rankings');
		var online = document.getElementsByClassName('type-Online');
		var seminar = document.getElementsByClassName('type-Seminar');
		if(location.href.indexOf("type=conference") > 0 ){
			document.getElementById("event_type_conference").checked = true;
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-on");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-on");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-on");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-on");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-on");
			}
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-off");
			}
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-off");
			}
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-off");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-off");
			}
		} else if(location.href.indexOf("type=training") > 0 ){
			document.getElementById("event_type_training").checked = true;
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-off");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-off");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-off");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-off");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-off");
			}
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-on");
			}
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-off");
			}
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-off");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-off");
			}
		} else if(location.href.indexOf("type=awards") > 0 ){
			document.getElementById("event_type_awards").checked = true;
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-off");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-off");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-off");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-off");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-off");
			}
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-off");
			}
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-on");
			}
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-off");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-off");
			}
		} else if(location.href.indexOf("type=online") > 0 ){
			document.getElementById("event_type_online").checked = true;
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-off");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-off");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-off");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-off");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-off");
			}
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-off");
			}
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-off");
			}
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-on");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-on");
			}
		}
		if(location.href.indexOf("type=events") > 0 ){
			document.getElementById("event_type_conference").checked = true;
			document.getElementById("event_type_awards").checked = true;
			document.getElementById("event_type_online").checked = true;
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-on");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-on");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-on");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-on");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-on");
			}
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-off");
			}
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-on");
			}
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-on");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-on");
			}
		}
	}
	// clear filters or apply filters called from buttons
	// apply filter then checks what items are requests and appends classes to show/hide event listings based on class names
	// class names for event types are written on to template via eventive feed information
	function clearEventFilters(){
		var conference = document.getElementsByClassName('type-Conference');
		var corpnetwork = document.getElementsByClassName('type-Corporate-Networking');
		var exhibition = document.getElementsByClassName('type-Exhibition');
		var indbriefing = document.getElementsByClassName('type-Industry-Briefing');
		var roadshow = document.getElementsByClassName('type-Roadshow');
		var training = document.getElementsByClassName('type-Training');
		var awards = document.getElementsByClassName('type-Awards/Rankings');
		var online = document.getElementsByClassName('type-Online');
		var seminar = document.getElementsByClassName('type-Seminar');
		document.getElementById("event_type_conference").checked = false;
		document.getElementById("event_type_training").checked = false;
		document.getElementById("event_type_awards").checked = false;
		document.getElementById("event_type_online").checked = false;
		document.getElementById("noeventsmsg").style.display = "none";
		for (var i = 0; i < conference.length; i++) {
			conference[i].setAttribute("class","group event type-Conference filtered-on");
		}
		for (var i = 0; i < corpnetwork.length; i++) {
			corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-on");
		}
		for (var i = 0; i < exhibition.length; i++) {
			exhibition[i].setAttribute("class","group event type-Exhibition filtered-on");
		}
		for (var i = 0; i < indbriefing.length; i++) {
			indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-on");
		}
		for (var i = 0; i < roadshow.length; i++) {
			roadshow[i].setAttribute("class","group event type-Roadshow filtered-on");
		}
		for (var i = 0; i < conference.length; i++) {
			training[i].setAttribute("class","group event type-Training filtered-on");
		}
		for (var i = 0; i < awards.length; i++) {
			awards[i].setAttribute("class","group event type-Awards/Rankings filtered-on");
		}
		for (var i = 0; i < online.length; i++) {
			online[i].setAttribute("class","group event type-Online filtered-on");
		}
		for (var i = 0; i < seminar.length; i++) {
			seminar[i].setAttribute("class","group event type-Seminar filtered-on");
		}
	}
	function applyEventFilters(){
		var eventsFilter = document.getElementsByClassName("events-filter")[0];
		var eventsFilter_checkbox = eventsFilter.getElementsByTagName("input");
		if(eventsFilter_checkbox[0].checked || eventsFilter_checkbox[1].checked || eventsFilter_checkbox[2].checked || eventsFilter_checkbox[3].checked){
			eventFilterType();
		} else {
			clearEventFilters();
		}
	}
	function eventFilterType(){
		var conference = document.getElementsByClassName('type-Conference');
		var corpnetwork = document.getElementsByClassName('type-Corporate-Networking');
		var exhibition = document.getElementsByClassName('type-Exhibition');
		var indbriefing = document.getElementsByClassName('type-Industry-Briefing');
		var roadshow = document.getElementsByClassName('type-Roadshow');
		var training = document.getElementsByClassName('type-Training');
		var awards = document.getElementsByClassName('type-Awards/Rankings');
		var online = document.getElementsByClassName('type-Online');
		var seminar = document.getElementsByClassName('type-Seminar');
		if (document.getElementById("event_type_conference").checked){
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-on");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-on");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-on");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-on");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-on");
			}
		} else {
			for (var i = 0; i < conference.length; i++) {
				conference[i].setAttribute("class","group event type-Conference filtered-off");
			}
			for (var i = 0; i < corpnetwork.length; i++) {
				corpnetwork[i].setAttribute("class","group event type-Corporate-Networking filtered-off");
			}
			for (var i = 0; i < exhibition.length; i++) {
				exhibition[i].setAttribute("class","group event type-Exhibition filtered-off");
			}
			for (var i = 0; i < indbriefing.length; i++) {
				indbriefing[i].setAttribute("class","group event type-Industry-Briefing filtered-off");
			}
			for (var i = 0; i < roadshow.length; i++) {
				roadshow[i].setAttribute("class","group event type-Roadshow filtered-off");
			}
		}
		if(document.getElementById("event_type_training").checked){
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-on");
			}
		} else {
			for (var i = 0; i < training.length; i++) {
				training[i].setAttribute("class","group event type-Training filtered-off");
			}
		}
		if(document.getElementById("event_type_awards").checked){
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-on");
			}
		} else {
			for (var i = 0; i < awards.length; i++) {
				awards[i].setAttribute("class","group event type-Awards/Rankings filtered-off");
			}
		}
		if(document.getElementById("event_type_online").checked){
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-on");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-on");
			}
		} else {
			for (var i = 0; i < online.length; i++) {
				online[i].setAttribute("class","group event type-Online filtered-off");
			}
			for (var i = 0; i < seminar.length; i++) {
				seminar[i].setAttribute("class","group event type-Seminar filtered-off");
			}
		}
		if (document.getElementsByClassName("filtered-on").length == 0){
			document.getElementById("noeventsmsg").style.display = "block";
		}else{
			document.getElementById("noeventsmsg").style.display = "none";
		}
	}
	function AttachEvent(element, type, handler) { 
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else {
			element.attachEvent("on"+type, handler); 
		}
	}
	function createFilterClick(){ 
		AttachEvent(eventFilterHeader, "click", toggleEventFilterOptions); 
	} 
	function createApplyFilterClick(){ 
		AttachEvent(eventFilterApplication, "click", applyEventFilters); 
	} 
	function createClearFilterClick(){ 
		AttachEvent(eventsFilterClear, "click", clearEventFilters); 
	} 
	if(location.href.indexOf("/events") > 0 ){
		createFilterClick();
		createApplyFilterClick();
		createClearFilterClick();
		checkEventFilters();
		$('<div class="no-events-message" id="noeventsmsg"><article class="event-details"><p class="error">There are currently no events that match your search. Please try again.</p></article></div>').insertAfter($('.events-filter')[0]);
	}

/* -------------- REVIEW CLICKS -------------- */
	if (window.location.href.indexOf("/review/") >= 0) {
	// Review specifications section open/close controls
		function toggleReviewSpec(){ 
			var reviewSpecLink = document.getElementById("review_spec_link"); 
			var reviewSpecDetails = document.getElementById("review_spec_details");
			if(reviewSpecDetails.style.display == "none"){ 
				reviewSpecLink.setAttribute("class", "btn review-spec-shown");
				reviewSpecDetails.style.display = "block";
			} else { 
				reviewSpecLink.setAttribute("class", "btn review-spec-hidden");
				reviewSpecDetails.style.display = "none";
			}
		}
		function createReviewSpecClick(){ 
			var reviewSpecLink = document.getElementById("review_spec_link"); 
			var reviewSpecDetails = document.getElementById("review_spec_details");
			AttachEvent(reviewSpecLink, "click", toggleReviewSpec); 
			reviewSpecLink.innerHTML = "Specifications";
		} 
	// Review details section open/close controls
		function showReviewDetails(){
			var reviewDetails = document.getElementById("review_details");
			var reviewDetailsLink = document.getElementById("review_details_link");
			if (reviewDetails.className === "review-details"){
				reviewDetails.setAttribute("class","review-details review-open");
				reviewDetailsLink.innerHTML = "Hide";
			} else {
				reviewDetails.setAttribute("class","review-details");
				reviewDetailsLink.innerHTML = "Show review details";
			}
		}
		function createReviewDetailsClick(){ 
			var reviewDetailsLink = document.getElementById("review_details_link"); 
			AttachEvent(reviewDetailsLink, "click", showReviewDetails);
		} 
	// Page navigation section open controls
		function openPageNav(){
			var pageNavAdd = document.getElementById("review_page_nav_additional");
			var pageNavCur = document.getElementById("review_page_nav_current");
			var pageNavLink = document.getElementById("review_page_nav_link");
			pageNavCur.setAttribute("class","review-nav-list nav-list-current page-nav-current-open");
			pageNavAdd.setAttribute("class","review-nav-list nav-list-additional page-nav-open");
		}
		function closePageNav(){
			var pageNavAdd = document.getElementById("review_page_nav_additional");
			var pageNavCur = document.getElementById("review_page_nav_current");
			var pageNavLink = document.getElementById("review_page_nav_link");
			pageNavCur.setAttribute("class","review-nav-list nav-list-current");
			pageNavAdd.setAttribute("class","review-nav-list nav-list-additional");
		}
		function createReviewNavClick(){ 
			var reviewNavLink = document.getElementById("review_page_nav_link"); 
			AttachEvent(reviewNavLink, "click", openPageNav); 
			createReviewNavOpenClick();
		} 
		function createReviewNavOpenClick(){ 
			var reviewNavLinkOpen = document.getElementById("review_page_nav_link_open"); 
			AttachEvent(reviewNavLinkOpen, "click", closePageNav); 
		}
	// Check for elements on page and create required clicks 
		function reviewArticleControls(){
			var reviewDetailsHolder = document.getElementById("review_details_holder");
			var reviewSpecHolder = document.getElementsByClassName("review-spec")[0];
			var reviewNavHolder = document.getElementsByClassName("nav-list-current")[0];
			var reviewPageNavLink = document.getElementsByClassName("review-nav-link")[0];
			var reviewPageNext = document.getElementsByClassName("next_page")[0];
			var reviewPagePrev = document.getElementsByClassName("prev_page")[0];
			var reviewPageNameNav = document.getElementsByClassName("review-nav-list");
			var reviewPageNameNavLink = document.getElementsByClassName("review-nav-list-item");
			if (reviewSpecHolder !== "undefined" && typeof reviewSpecHolder == "object"){
				createReviewSpecClick();
			}
			if (reviewNavHolder !== "undefined" && typeof reviewNavHolder == "object"){
				createReviewNavClick();
			}
			if (reviewDetailsHolder !== "undefined" && typeof reviewDetailsHolder == "object"){	
				createReviewDetailsClick();
				var reviewDetails = document.getElementById("review_details");
				var reviewDetailsLink = document.getElementById("review_details_link");
				if (location.href.indexOf("/page/") > 0 ){
					reviewDetails.setAttribute("class","review-details");
					reviewDetailsLink.innerHTML = "Show review details";
				}
			}
			if(reviewPageNavLink !== "undefined" && typeof reviewPageNavLink == "object"){
				if(reviewPageNext !== "undefined" && typeof reviewPageNext == "object"){
					reviewPageNext.innerHTML = 'Next<span class="next-page-after"></span>';
				}
				if(reviewPagePrev !== "undefined" && typeof reviewPagePrev == "object"){
					reviewPagePrev.innerHTML = 'Previous<span class="prev-page-after"></span>';
				}
			}
			if(reviewPageNameNav !== "undefined" && typeof reviewPageNameNav =="object"){
				if(reviewPageNameNavLink !== "undefined" && typeof reviewPageNameNavLink =="object"){
					$(".review-nav-list .review-nav-list-item p").after('<span class="nav-list-item-after"></span>');
				}
			}
		}
	// start function call for click creation
		reviewArticleControls();
	}

/* -------------- IE clearfix -------------- */
	if(ie987 === true){
		$('.component-more-from .span-lrg_1_of_4:nth-child(2n+1)').addClass("clearfix");
	}


$(document).ready(function(){
	//Print tracking
		$(".article-meta-container").on("click", ".print-icon a", function(){ gua('uni.send', 'event', 'Article Page Interaction', 'Print', 'Article Top',1); })
		$(".article-page-body-content").on("click", ".print-icon a", function(){ gua('uni.send', 'event', 'Article Page Interaction', 'Print', 'Article End',1); })
		$("nav.nav").on("click", ".print-icon a", function(){ gua('uni.send', 'event', 'Article Page Interaction', 'Print', 'Sticky Header',1);  })
	/*Sticky header tracking*/
		$("nav.nav").on("click", ".twitter-icon a", function(){	gua('uni.send', 'event', 'Article Page Interaction', 'Twitter Share', 'Sticky Header',1); gua('uni.send', 'social', 'Twitter', 'Tweet', article_short_url);})														
		$("nav.nav").on("click", ".facebook-icon a", function(){ gua('uni.send', 'event', 'Article Page Interaction', 'Facebook Share', 'Sticky Header',1); gua('uni.send', 'social', 'Facebook', 'Share', article_short_url);})
		$("nav.nav").on("click", ".linkedin-icon a", function(){  gua('uni.send', 'event', 'Article Page Interaction', 'Linkedin Share', 'Sticky Header',1); gua('uni.send', 'social', 'Linkedin', 'Share', article_short_url);})
		$("nav.nav").on("click", ".gplus-icon a", function(){ gua('uni.send', 'event', 'Article Page Interaction', 'Google Share', 'Sticky Header',1); gua('uni.send', 'social', 'Google+', 'Share', article_short_url);})
		$("nav.nav").on("click", ".email-icon a", function(){	gua('uni.send', 'event', 'Article Page Interaction', 'Email', 'Sticky Header',1 );});
});


// Jobs static page iframe dynamic width display 
	function setJobsIframeWidth(){
		var jobsIframeHolder = document.getElementsByClassName('static-page-content')[0];
		//var jobsIframeHolderWidth = document.getElementsByClassName('static-page-content')[0].offsetWidth;
		
		var jobsIframe = jobsIframeHolder.getElementsByTagName('iframe')[0];
		jobsIframe.setAttribute("width","100%");
	}
	if (window.location.href.indexOf("/static/jobs") >= 0) { 
		setJobsIframeWidth();
	}

// TEMPORARY FIXES - go Live day
	// Hide country name for event listing on homepage
		function addNewsHeader(){
			var newsComp = document.getElementsByClassName("component-news2")[0];
			var newsHeader = newsComp.getElementsByTagName("header")[0];
			newsHeader.setAttribute("class","header-news");
			newsHeader.innerHTML = '<h4 itemprop="name"><a href="/type/news" class="section-title-link">News</a></h4>';
		}
	// Remove Jobs header link
		function setJobsCompLink(){
			var jobsComp = document.getElementsByClassName("component-jobs")[0];
			var jobsCompHeader = jobsComp.getElementsByClassName("header-jobs")[0];
			var jobsCompHeaderLink = jobsCompHeader.getElementsByClassName("section-title-link")[0];
			jobsCompHeaderLink.setAttribute("href","/static/jobs");
		}
	// Hide country name for Marrakesh event listing on homepage
		function changeEventLocation(){
			var eventsComp = document.getElementsByClassName("component-events")[0];
			var eventsListing = eventsComp.getElementsByClassName("span_1_of_3")[2];
			var eventsListingLocation = eventsListing.getElementsByTagName("p")[0];
			eventsListingLocation.innerHTML = '<p>07 Nov 2016, Marrakesh</p>';
		}
		if(checkIfObj(universal_variable, 'page', 'type') && universal_variable.page.type == "home"){ 
			setJobsCompLink();
			addNewsHeader();
			changeEventLocation();
		}
	// Hide sponsor ribbon for PWC article
		if (window.location.href.indexOf("sponsored/2444413") >= 0) { 
			var sponsoredRibbonHolder = document.getElementsByClassName("blog-ribbon")[0];
			sponsoredRibbonHolder.style.display = "none";
		}

