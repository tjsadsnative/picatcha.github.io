(function($, Drupal, window, document, undefined) {
  $(document).ready(function() {

  var $menu = $("#mobile-menu");
  var $page = $("#mobile-content");
  var $placeholder = $("#mobile-menu-placeholder");
  var $trigger=$("#menu-trigger");

  var open_menu_class='menu-visible';

  var ghost_click_time=null;
  var ghost_click_delay=300;//millis

  $trigger.click(function(e) {
    e.preventDefault();
    ghost_click_time=Date.now();
			
    $menu.hasClass(open_menu_class)?close_menu():open_menu();
            
    function open_menu() {
      $page.addClass(open_menu_class);
      $menu.addClass(open_menu_class);
      $placeholder.addClass(open_menu_class);

      $placeholder.bind({
        touchstart: function(e) {e.preventDefault();close_menu();},
        touchend:   function(e) {e.preventDefault();close_menu();},
        touchmove: function(e) {e.preventDefault();close_menu();},
        click: function(e) {e.preventDefault(); if (Date.now()-ghost_click_time<ghost_click_delay) return; close_menu();}
      });

      $('body,html').css({overflow : 'hidden', 'height' : $(window).height() + 'px'});
    }
            
    function close_menu() {
      $placeholder.unbind({
        touchstart: null,
        touchend: null,
        touchmove: null,
        click: null
      });

      $page.removeClass(open_menu_class);
      $menu.removeClass(open_menu_class);
      $placeholder.removeClass(open_menu_class);

      $('body,html').css({overflow : 'scroll', height : 'auto'});
    }
  });
});
})(jQuery, Drupal, this, this.document);

;
/*!
	Colorbox v1.5.13 - 2014-08-04
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(I).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){!y&&e.body&&(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(I=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),F=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(F),t(e.body).append(v,y.append(x,M)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,I,R,F,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){F.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),F.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,F.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),F.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),i&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},I.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {
  // High level scope variables.

  // Load more page number counter.
  var loadMoreCount = 1;
  // Busy flag, need it to prevent multiple calls.
  var busy = false;
  // Variable to set content selector.
  var shapeLoadMoreContent = '#content .AMIMainWrapper';

  Drupal.behaviors.shapeLoadMore = {
    refreshAds: function () {
      if (typeof(Drupal.behaviors.dfp_yieldbot) == "object") {
        Drupal.behaviors.dfp_yieldbot.refresh();
      }
      else if (typeof(Drupal.behaviors.dfp_amobee2) == "object" && window.innerWidth < 768) {
        Drupal.behaviors.dfp_amobee2.refresh();
      }
      else {
        // If we need to refresh all ads we will use below line commented .
        // googletag.pubads().refresh();
        // In our case we need to refresh all tags except skin or interstitial.
        if (typeof(googletag.slots) !== 'undefined') {
          var new_slots = [];
          $.each(googletag.slots, function(index,value) {
            if (typeof(value.getTargetingMap().pos) !== 'undefined') {
              var i = value.getTargetingMap().pos.toString();
              var dontrefresh = ["skin", "interstitial", "wallpaper", "slideshow_interstitial", "mobile_interstitial"];
              if(dontrefresh.indexOf(i) == -1) {
                new_slots.push(value);
              }
            }
          });
          if(new_slots.length > 0){
            googletag.pubads().refresh(new_slots);
          }
        }
      }

      if (typeof(konaAjaxPageKey) == 'function') {
        var slideIndex = $('.memento-gallery .first-slide .count').text().split(" ")[0];
        konaAjaxPageKey(Drupal.settings.ami_slideshow.nid + '|' + slideIndex);
      }

    },
    isScrolledIntoView: function (elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return (elemBottom <= docViewBottom);
    },
    contentRefresh: function (content, loadSpiner) {

      // Prepare request parameters.
      var request_params = {
        'is_ajax':'TRUE',
        'page':loadMoreCount
      };

      // Set ajax request with special $_POST['is_ajax'] = TRUE parameter to give page without all markup.
      $.ajax({
        type: 'GET',
        data: request_params
      }).done(function (data) {
        // Remove old load more link.
        $(".ajax-pager--load-more").remove();
        if (data) {
          // Increase load more page number.
          loadMoreCount++;
          // Append data received from server.
          content.append(data);
          // Inset new load more link.
          content.append(loadSpiner);
          // Set busy flag to false.
          busy = false;
          // Reload ads.
          Drupal.behaviors.shapeLoadMore.refreshAds();
        }
      });
    },
    loadMore: function(context, settings, shapeLoadMoreContent) {

      // Define element trigger for load more content.
      var loadMoreTrigger = document.getElementById('block-shape-load-more-shape-load-more-fake-pager');

      // Get content area.
      var content = $(shapeLoadMoreContent);

      //Fire event for desktop on scroll.
      if (window.innerWidth > 979) {
        $(window).scroll(function (e) {
          if (Drupal.behaviors.shapeLoadMore.isScrolledIntoView(loadMoreTrigger) && !busy) {

            // Set busy flag to true to prevent multiple calls.
            busy = true;

            // Removing not need elements.
            $(".ajax-pager--load-more, #block-shape-load-more-shape-load-more-fake-pager a").remove();

            // Create DOM load more element.
            var loadSpiner = $('<div class="ajax-pager--load-more spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');

            // Append load more link at the bottom of content.
            content.append(loadSpiner);

            //Refreshing the content.
            Drupal.behaviors.shapeLoadMore.contentRefresh(content, loadSpiner);

            e.preventDefault();
          }
        });
      }
      //Fire event for mobile and tablet on click/tap.
      if (window.innerWidth < 980) {

          // Removing not need elements.
          $("#block-shape-load-more-shape-load-more-fake-pager a").remove();

          // Create DOM load more element.
          var loadClicker = $('<span class="load-more-clicker">Load More</span>');

          // Append load more link at the bottom of content.
          content.append(loadClicker);

          loadClicker.on('click', function(event) {
            event.preventDefault();
            if (!busy) {
              // Set busy flag to true to prevent multiple calls.
              busy = true;
              //Refreshing the content.
              Drupal.behaviors.shapeLoadMore.contentRefresh(content, loadClicker);
            }
          });

        }

    },
    attach: function (context, settings) {
      this.loadMore(context, settings, shapeLoadMoreContent);
    }
  };
})(jQuery);
;
(function($) {
  Drupal.behaviors.dfp_yieldbot = {
    refresh: function() {
      ybotq.push(function() {
        googletag.cmd.push(function() {
          if (Drupal.settings.dfp_yieldbot != null && Drupal.settings.dfp_yieldbot.targeting != null) {
            $.each(googletag.slots, function (key, val) {
              $.each(Drupal.settings.dfp_yieldbot.targeting, function () {
                if (key == this['dfp_slot']) {
                  yieldbot.setSlotTargeting(this['yieldbot_slot'], val);

                  return false;
                }
              });
            });
          }

          googletag.pubads().refresh();
        });
      });
    }
  };
}(jQuery));
;
/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.2N.3g=6(4){4=23.2H({2B:\'#34\',2g:0.8,1d:F,1M:\'18/5-33-Y.16\',1v:\'18/5-1u-2Q.16\',1E:\'18/5-1u-2L.16\',1W:\'18/5-1u-2I.16\',19:\'18/5-2F.16\',1f:10,2A:3d,2s:\'1j\',2o:\'32\',2j:\'c\',2f:\'p\',2d:\'n\',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$(\'1U, 1S, 1R\').l({\'1Q\':\'2E\'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17(\'J\'),1e.17(\'2v\')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17(\'J\'),I[i].17(\'2v\')))}}2n(4.h[4.9][0]!=1e.17(\'J\')){4.9++}D()}6 1O(){$(\'m\').31(\'<e g="q-13"></e><e g="q-5"><e g="5-s-b-w"><e g="5-s-b"><1w g="5-b"><e 2V="" g="5-k"><a J="#" g="5-k-V"></a><a J="#" g="5-k-X"></a></e><e g="5-Y"><a J="#" g="5-Y-29"><1w W="\'+4.1M+\'"></a></e></e></e><e g="5-s-b-T-w"><e g="5-s-b-T"><e g="5-b-A"><1i g="5-b-A-1t"></1i><1i g="5-b-A-1g"></1i></e><e g="5-1s"><a J="#" g="5-1s-22"><1w W="\'+4.1W+\'"></a></e></e></e></e>\');f z=1D();$(\'#q-13\').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$(\'#q-13,#q-5\').C(6(){1a()});$(\'#5-Y-29,#5-1s-22\').C(6(){1a();u F});$(G).2G(6(){f z=1D();$(\'#q-13\').l({S:z[0],P:z[1]});f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$(\'#5-Y\').E();7(4.1d){$(\'#5-b,#5-s-b-T-w,#5-b-A-1g\').1b()}j{$(\'#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g\').1b()}f Q=v 1j();Q.1P=6(){$(\'#5-b\').2D(\'W\',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$(\'#5-s-b-w\').S();f 1K=$(\'#5-s-b-w\').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$(\'#5-s-b-w\').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$(\'#5-s-b-T-w\').l({S:1o});$(\'#5-k-V,#5-k-X\').l({P:1r+(4.1f*2)})};6 2y(){$(\'#5-Y\').1b();$(\'#5-b\').1V(6(){2u();2t()});2r()};6 2u(){$(\'#5-s-b-T-w\').38(\'35\');$(\'#5-b-A-1t\').1b();7(4.h[4.9][1]){$(\'#5-b-A-1t\').2p(4.h[4.9][1]).E()}7(4.h.B>1){$(\'#5-b-A-1g\').2p(4.2s+\' \'+(4.9+1)+\' \'+4.2o+\' \'+4.h.B).E()}}6 2t(){$(\'#5-k\').E();$(\'#5-k-V,#5-k-X\').l({\'K\':\'1C M(\'+4.19+\') L-O\'});7(4.9!=0){7(4.1d){$(\'#5-k-V\').l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9-1;D();u F})}j{$(\'#5-k-V\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$(\'#5-k-X\').l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9+1;D();u F})}j{$(\'#5-k-X\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14==\'x\')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$(\'#q-5\').2a();$(\'#q-13\').2T(6(){$(\'#q-13\').2a()});$(\'1U, 1S, 1R\').l({\'1Q\':\'2S\'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11(\'C\').C(20)}})(23);',62,204,'||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do'.split('|'),0,{}));
(function($) {
  Drupal.behaviors.sailthru_pop = {
    attach: function() {
	  $('a.lightbox').lightBox();
      if($('.social-media-icons .views-row-last').offset()) {
        var formData = $('#flyout-sail-form').html();
        $('#flyout-sail-form').remove();

        var buttonX = ($('.region-header .block-social-media-icons').width() / 2) + 53; //466     Math.round($('.social-media-icons .views-row-last').offset().left);
        var buttonY = 92;//Math.round($('.social-media-icons .views-row-last').offset().top - $(window).scrollTop());
        var bCenterX = ($('#footer-wrapper .block-social-media-icons').width() / 2) + 22;
        var bCenterY = -310;//Math.round($('.social-media-icons .views-row-last').offset().top - $(window).scrollTop());
        var isOpen = false;

        //console.log(bCenterX);
        //console.log(buttonY);


        $('.region-header .social-media-icons .views-row-last').bind("click", function(){
          if(!isOpen) {
            isOpen = true;
            $('<div id="flyout-sail-form"></div>').insertAfter(this);
            $('#flyout-sail-form').append(formData);

            $("#flyout-sail-form").css({
              left:buttonX,
              top:buttonY
            }).show().animate({top:buttonY-25, opacity:1}, 150, function() {
                  $('#flyout-sail-form .closeBtn').bind("click", attachCloseBtnEvt);
                });
          }
          return false;
        });

        function attachCloseBtnEvt(e) {
          if(isOpen) {
            isOpen = false;
            $("#flyout-sail-form").animate({top:buttonY, opacity:0}, 150, function(){
              $("#flyout-sail-form").empty();
              $("#flyout-sail-form").remove();
              $('#flyout-sail-form .closeBtn').unbind();
            });
          }
        }

        $('#footer-wrapper .social-media-icons .views-row-last').bind("click", function(){
          if(!isOpen) {
            isOpen = true;
            //$('<div id="flyout-sail-form"></div>').insertAfter('#footer-wrapper .block-social-media-icons');
            $('<div id="flyout-sail-form"></div>').insertAfter(this);
            $('#flyout-sail-form').append(formData);

            $("#flyout-sail-form").css({
              left:bCenterX,
              marginTop:bCenterY
            }).show().animate({marginTop:bCenterY-25, opacity:1}, 150, function() {
                  $('#flyout-sail-form .closeBtn').bind("click", attachCloseBtnEvt);
                });
          }
          return false;
        });

      }
    }
  }
})(jQuery);
;
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
        for (var i = 0, len = AMIShapeNowGallery.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
}

/**
 * Helper funtions for Shape Now popup
 * @Author: Sasha Levchuk, Vasyl Zhuk
 *
 */
var AMIShapeNowGallery = AMIShapeNowGallery || ( function($) {

		
		//global constats
        var nodes;
        var images;
	    var supportPushState;
    	var returnToUrl;

		//global vars
		var layout;
	    var currentImageIdx;

		//layout-specific DOM objects
		var dom;
		
		var animationInProgress=false;
		
        return {
            init : function(nodesIn) {

                //init non layout-related properties
                $('.trigger', '.shape-now-block').off('click').click(AMIShapeNowGallery.toggle);
                
                $('.AMIShapeNowGalleryTrigger').off('click').click(AMIShapeNowGallery.toggle);

                nodes = nodesIn;

                var blocks = $('.shape-now-block');

                images = new Array();

                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];

                    var image = {
                        'node_id' : node['node_id'],
                        'node_idx' : i,
                        'src' : node['images']
                    };

                    images.push(image);

                };

                returnToUrl = document.location.href;

                supportPushState = window.history && window.history.pushState && window.history.replaceState
                // pushState isn't reliable on iOS until 5.
                && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);

                //register listeners to re-init layout-related properties on each layout change
                $(window).on("desktop", function(e) {
                    shape_now_apply("desktop");
                });

                $(window).on("tablet", function(e) {
                    shape_now_apply("tablet");
                });

                $(window).on("mobile", function(e) {
                    shape_now_apply("mobile");
                });

                /*
                 * Turns on / off 'shape now' block based on config settings.
                 * The config settings arrive in data-responsive HTML attribute.
                 */
                function shape_now_apply(layoutIn) {

                    var old_layout = layout;

                    layout = layoutIn;
    
    				if (!dom) dom = new Array();
    				
                    if (!( layout in AMIShapeNowGallery )) {
                        dom[layout] = new Array();
                        
                        dom[layout].container = $('#' + 'AMIGalleryPopupWrapper_' + layout);
                       
                        dom[layout].kickers = dom[layout].container.find('#amiShapeNowGalleryKickersUrl_' + layout);
                        dom[layout].title = dom[layout].container.find('#amiShapeNowGalleryTitleUrl_' + layout);
                        dom[layout].subtitle = dom[layout].container.find('#amiShapeNowGallerySubtitleUrl_' + layout);
                        dom[layout].overlay = dom[layout].container.find('#amiShapeNowGalleryPicNumberWrapper_' + layout);
                        dom[layout].changed = dom[layout].container.find('.AMIQueueGalleryDateAndTime');
                        dom[layout].social = dom[layout].container.find('.counter-social');

                        dom[layout].container.find("#prev").off('click').click(function(e) {
                            e.preventDefault();
                            AMIShapeNowGallery.swap(true);
                        });

                        dom[layout].container.find("#next").off('click').click(function(e) {
                            e.preventDefault();
                            AMIShapeNowGallery.swap(false);
                        });

                        dom[layout].container.click(function(e) {
                            e.stopPropagation();
                        });
                        
                    } 
                    

                    //show or hide blocks according to the data-responsive attribute
                    blocks.each(function(i, e) {

                        var block = $(e);

                        var config = block.data('responsive');

                        if (!config[layout]) {
                            block.hide();
                            return;
                        }


						currentImageIdx = block.data('index');
						
                        block.attr('class', '').addClass('shape-now-block').show();

                        var css_class = config[layout]['css_class'];

                        var image = config[layout]['image'];

                        block.addClass(css_class).find('img').attr('src', image);

                    });

                    if (old_layout != 'undefined') {
                        var overlay = $('#slideshowOverlay_' + old_layout);
                        if (overlay.is(':visible')) {
                            overlay.hide();

                            AMIShapeNowGallery.run();
                            
                            dom[layout].container.parent().show();
                            
                            dom[layout].container.focus();

                            dom[layout].container.off('keydown').keydown(function(e) {
                                if (e.keyCode == 37 || e.keyCode == 39) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    AMIShapeNowGallery.swap(e.keyCode == 37);
                                }
                            });

                            AMIShapeNowGallery.fitSize();

                        }
                    }

                }

            },
            run : function() {

                $('.popup-gallery-image-holder', dom[layout].container).attr('idx', currentImageIdx);

                AMIShapeNowGallery.setNode(currentImageIdx);

                AMIShapeNowGallery.preloadSlides(currentImageIdx);

            },
            preloadSlides : function(idx) {
				
                var nextIdGuessed = AMIShapeNowGallery.guessNextImage(true, idx);

                var nextIdGuessed2 = AMIShapeNowGallery.guessNextImage(false, idx);

                var current = dom[layout].container.find('.popup-gallery-image-holder[idx="' + idx + '"]');

                var width = current.width();

                $('.popup-gallery-image-holder[idx!="' + idx + '"]', dom[layout].container).remove();

                //if (!$('.popup-gallery-image-holder[idx="' + nextIdGuessed + '"]', dom[layout].container).length) {
                    var prevSlide = current.clone().hide().css('left', -1 * width + 'px').attr('idx', nextIdGuessed).insertBefore(current).find('.popup-gallery-image-url').attr('href', nodes[nextIdGuessed]['alias']).find('img').attr('src', nodes[nextIdGuessed]['images'][layout]);
                   
                //}
                //if (!$('.popup-gallery-image-holder[idx="' + nextIdGuessed2 + '"]', dom[layout].container).length) {
                    var nextSlide = current.clone().hide().css('left', width + 'px').attr('idx', nextIdGuessed2).insertAfter(current).find('.popup-gallery-image-url').attr('href', nodes[nextIdGuessed2]['alias']).find('img').attr('src', nodes[nextIdGuessed2]['images'][layout]);
                //}
            },
            swap : function(forward) {
				if (animationInProgress) return;
                var slideWidth = dom[layout].container.find('.popup-gallery-image-holder[idx="' + currentImageIdx + '"]').width();
                currentImageIdx = AMIShapeNowGallery.guessNextImage(forward, currentImageIdx);

                var node_idx = images[currentImageIdx]['node_idx'];
                var node = nodes[node_idx];
                var $image=dom[layout].container.find('.popup-gallery-image-holder[idx="' + currentImageIdx + '"]');
            	$image.show();
                animationInProgress=true;
                dom[layout].container.find('.popup-gallery-image-holder').animate({                	
                    left : ( forward ? '+' : '-') + '=' + slideWidth                    
                }, 600, function() {
                    AMIShapeNowGallery.setNode(currentImageIdx);
                    dom[layout].container.find('div').show();
                    AMIShapeNowGallery.preloadSlides(currentImageIdx);
                    animationInProgress=false;
                });

                dom[layout].kickers.parent().fadeOut(300, function() {
                    dom[layout].kickers.html(node['kickers']);
                    dom[layout].kickers.attr('href', '/' + node['kickers_url']);
                    dom[layout].kickers.parent().fadeIn(300);
                });

                dom[layout].title.fadeOut(300, function() {
                    dom[layout].title.attr('href', node['alias']);
                    dom[layout].title.html(node['title']);
                    dom[layout].title.fadeIn(300);
                });

                dom[layout].subtitle.fadeOut(300, function() {
                    dom[layout].subtitle.attr('href', node['alias']);
                    dom[layout].subtitle.html(node['subtitle']);
                    dom[layout].subtitle.fadeIn(300);
                });

                if (node['shared'] !== null) {
                    dom[layout].social.fadeOut(300, function() {
                        dom[layout].social.html(node['shared'] + '<span>shared this</span>');
                        dom[layout].social.fadeIn(300);
                    });
                }

                AMIShapeNowGallery.trackGoogle(currentImageIdx);
                AMIShapeNowGallery.trackComscore(currentImageIdx);

                return false;
            },
            setNode : function(idx) {

                var $imageHolder = $('.popup-gallery-image-holder[idx="' + idx + '"]', dom[layout].container);
                var $image = $imageHolder.find('.popup-gallery-image');
                var $nodeUrl = $imageHolder.find('.popup-gallery-image-url');

                $image.attr("src", images[idx]['src'][layout]);

                var node = nodes[images[idx]['node_idx']];

                $nodeUrl.attr("href", node['alias']);

                dom[layout].title.html(node['title']);
                dom[layout].subtitle.html(node['subtitle']);
                dom[layout].kickers.html(node['kickers']);
                dom[layout].kickers.attr('href', '/' + node['kickers_url']);
                dom[layout].title.attr('href', node['alias']);
                dom[layout].subtitle.attr('href', node['alias']);               
                dom[layout].changed.html('<span>' + node['changed_date'] + '</span>');
                if (node['shared'] !== null) {
                    dom[layout].social.html(node['shared'] + '<span>shared this</span>');
                }
                if (supportPushState) {
                    window.history.replaceState({}, document.title, node['alias']);
                }
            },
            guessNextImage : function(forward, current) {

                if (forward) {

                    if ((current + 1) >= images.length)
                        return 0;

                    return current + 1;

                } else {

                    if ((current - 1) < 0)
                        return images.length - 1;

                    return (current - 1);
                }

            },
            toggle : function(e) {

                e.stopPropagation();
                e.preventDefault();
                if (!dom[layout].container.is(':visible')) {
                    AMIShapeNowGallery.run();
                    dom[layout].container.parent().show();
                    dom[layout].container.focus();
                    $(document).one('click', AMIShapeNowGallery.toggle);
                    dom[layout].container.keydown(function(e) {
                        if (e.keyCode == 37 || e.keyCode == 39) {
                            e.preventDefault();
                            e.stopPropagation();
                            AMIShapeNowGallery.swap(e.keyCode == 37);
                        }
                    });
                    AMIShapeNowGallery.fitSize();
                } else {
                    $('.popup-gallery-image-holder:hidden', dom[layout].container).remove();
                    dom[layout].container.parent().hide();
                    dom[layout].container.off('keydown');
                    $(document).off('click', AMIShapeNowGallery.toggle);
                    if (supportPushState) {
                        window.history.replaceState({}, document.title, returnToUrl);
                    }
                }
                return false;
            },
            fitSize : function() {
                //this is not working in current shape.
                //will be fixed once SHAPEII-1902 is fixed.
                return;
                var scaleRatio = $(window).height() / dom[layout].container.height();
                if (scaleRatio >= 1)
                    return;
                dom[layout].container.jqScale(scaleRatio);
            },

            // Track a new Google Analytics pageview.
            trackGoogle : function(idx) {
                var path = document.location.pathname + document.location.search + document.location.hash;
                _gaq.push(['_trackPageview', path]);
            },

            // Track a new comScore pageview.
            trackComscore : function(idx) {
                AMIShapeNowGallery.reinitializeComscore();
                var pageview_ajax = '/shapenow-comscore/' + nodes[images[idx]['node_idx']]['node_id'] + '/1'/*idx*/;
                $.getJSON(pageview_ajax);
            },

            reinitializeComscore : function() {
                var path = document.location.pathname + document.location.search + document.location.hash;
                var comScoreMarkup = ['<script>', 'var _comscore = _comscore || [];', '_comscore.push({', 'c1: "2",', 'c2: "' + Drupal.settings.ami_shape_now.comscore_direct_id + '",', 'c3: "",', 'c4: "' + document.location.origin + path + '"', '});', '(function() {', 'var s = document.createElement("script"),', 'el = document.getElementsByTagName("script")[0];', 's.async = true;', 's.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";', 'el.parentNode.insertBefore(s, el);', '})();', '</script>', '<noscript>', '<img src="http://b.scorecardresearch.com/p?c1=2&c2=' + Drupal.settings.ami_shape_now.comscore_direct_id + '&cv=2.0&cj=1" />', '</noscript>'].join('');

                if (!$("#comscore_markup").length) {
                    $('body').append('<div id="comscore_markup">' + comScoreMarkup + '</div>');
                } else {
                    $("#comscore_markup").html(comScoreMarkup);
                }
            },
            initTimezones : function(nodes) {
                var d = new Date(), blockTime = $('.time', '.shape-now-block'), blockDate = $('.date', '.shape-now-block');
                blockTime.html(getAMPMTime(new Date()));
                dateCurrentLocalParts = d.toString().match(/^(\w+)\s+(\w+)\s+(\w+)\s+/);
                blockDate.html(dateCurrentLocalParts[2] + ' ' + dateCurrentLocalParts[3]);

                for (var nodeOrd in nodes) {
                    var nodeDate = nodes[nodeOrd].changed_date, nodeTime = nodes[nodeOrd].changed_time, nodeDateTime = nodeDate.replace(',', '') + ' ' + d.getFullYear() + ' ' + parseAMPMTime(nodeTime), date = dateTimeMakeLocal(nodeDateTime), parts = date.toString().match(/^(\w{3}) (\w{3}) (\d{1,2})/), formattedDate = parts[1] + ', ' + parts[2] + ' ' + parts[3], formattedTime = getAMPMTime(date);
                    nodes[nodeOrd].changed_date = formattedDate;
                    nodes[nodeOrd].changed_time = formattedTime;
                }
            },

            parseAMPMTime : function(AMPMString) {
                var parts = AMPMString.match(/(\d{1,2})\s*:\s*(\d{1,2})\s*(AM|PM)/), hours = parseInt(parts[1]), minutes = parts[2];
                if (parts[3] == 'PM') {
                    hours += 12;
                }

                return hours + ':' + minutes;
            },

            getAMPMTime : function(date) {
                var hours = date.getHours(), minutes = date.getMinutes(), ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                // the hour '0' should be '12'
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            },

            dateTimeMakeLocal : function(dateTimeString) {
                var d = new Date(dateTimeString), offsetLocal = -1 * d.getTimezoneOffset() * 60000, offsetServer = Drupal.settings.ami_node_queue.timezoneOffset * 1000, time = d.getTime(), localTime = time + offsetLocal - offsetServer, nd = new Date(localTime);
                return nd;
            },
            
            
        };
    }(jQuery));
;
/**
 * Renders video player 
 * 
 * @Author: Sasha Levchuk
 * @Date 6/5/2013
 * 
 */

//renders video player within "video" DOM object
//renders AOL video player in large & medium layouts
//sasha 6/5/13
function ami_node_queue_render_video_player(containter_id, aol_video_id, node_url, width, height, image) {

  var $video=jQuery('#'+containter_id);
  if (width<270 && !$video.hasClass('video-processed')) {//render overlay for small containters
   
    $video.addClass('video-processed');
    var $link=jQuery("<a href='/"+node_url+"'></a>").appendTo($video);
    jQuery("<img src='"+image+"'>").appendTo($link);
    jQuery('<a href="/' + node_url + '" class="video-overlay">Play video</a>').appendTo($video);
    return;
  }

  if (height < 400) {//list mode
    height=height+30;//to account for aol's control panel which is 30 px.
  }

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('async', true);
  script.setAttribute('defer', 'defer');
  
  if (aol_video_id && aol_video_id.length >= 9) {//video 
  	script.src = 'http://pshared.5min.com/Scripts/PlayerSeed.js?sid=1126&playList=' + aol_video_id + '&colorPallet=#eb2969&shuffle=0&isFL=1&amp;isAP=1&amp;width=' + width + '&height=' + height + '&videoControlDisplayColor=#191919&hasCompanion=false&relatedMode=1&autoStart=false';
  } else { //playlist
  	script.src = 'http://pshared.5min.com/Scripts/PlayerSeed.js?sid=1126&width=' + width + '&height=' + height + '&videoControlDisplayColor=#191919&colorPallet=#db1278&relatedMode=2&hasCompanion=false&videoGroupID='+aol_video_id+'&sequential=1&shuffle=0';
  }

  var video=document.getElementById(containter_id);


  video.appendChild(script);
}
;
/**
 * jqscale.js v0.1.2
 * jQuery dom-element scaling Plugin - released under MIT License 
 * Author: Toni Wagner <i@itsatony.com>
 * https://github.com/itsatony/jqScale
 * Copyright (c) 2012-2013 ViSERiON UG haftungsbeschraenkt {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * }}}
 *
 * examples / demo:

* getting the scale of ONE element

   ``jQuery('#myDomElement').jqscale();``

    this will return     [ 1, 1 ];     (scale for x-axis, scale for y-axis)


* getting the 'TRUE' scale of an element (meaning the element's scale multiplied with all its parents' scales!)

    ``jQuery('#myDomElement').jqscale(true);``

* setting the scale for an element:

    ``jQuery('#myDomElement').jqscale(0.5);``

* setting different scale values for x and y axis:

    ``jQuery('#myDomElement').jqscale(0.5, 0.7);``

 *
 *
 *
 * 
 */
 (function($) {
	$.fn.jqscale = function(option, independentScaleY) {
		var thisScaler = this;
		var action = 'getScale';
		if (typeof option === 'number') {
			action = 'setScale';
			var scaleX = option;
			var scaleY = (typeof independentScaleY === 'number') ? independentScaleY : option;
		} else if (typeof option === 'boolean' && option === true)  {
			action = 'calculateScale'
		}
		$.fn.jqScale.setScale = function(element) {
			var matrix = $.fn.jqScale.getElementTransformMatrix(element);
			matrix[0] = scaleX;
			matrix[3] = scaleY;
			$(element).css('transform-origin', '0 0');
			$(element).css('transform', 'matrix(' + matrix.toString(',') + ')');
			$(element).attr('data-jqscale', scaleX + ',' + scaleY);
		};
		$.fn.jqScale.getScale = function(element) {	
			var matrix = $.fn.jqScale.getElementTransformMatrix(element);
			$(element).attr('data-jqscale', matrix[0] + ',' + matrix[3]);
			return [ matrix[0], matrix[3] ];
		};
		$.fn.jqScale.calculateScale = function(element) {
			var parents = $(element).parents();
			var parentCount = parents.length;
			var parentScales = [];
			var aggregatedScaleX = 1;
			var aggregatedScaleY = 1;
			var elementScales = $.fn.jqScale.getScale(element);
			parentScales.push(elementScales);
			aggregatedScaleX = aggregatedScaleX * elementScales[0];
			aggregatedScaleY = aggregatedScaleX * elementScales[1];
			for (var i = 0; i < parentCount; i++) {
				var elementScales = $.fn.jqScale.getScale(parents[i]);
				parentScales.push(elementScales);
				aggregatedScaleX = aggregatedScaleX * elementScales[0];
				aggregatedScaleY = aggregatedScaleX * elementScales[1];
			}
			$(element).attr('data-aggregated-jqscale', aggregatedScaleX + ',' + aggregatedScaleY);
			return [ aggregatedScaleX, aggregatedScaleY ];
		};		
		$.fn.jqScale.getElementTransformMatrix = function(element) {
			var matrixArray = [];
			var matrixStrings = $(element).css('transform');
			if (matrixStrings === null) {
				var matrixStrings = $(element).css('-webkit-transform');
			}
			if (typeof matrixStrings === 'undefined' || matrixStrings === null || matrixStrings.indexOf('matrix') !== 0) {
				return [1,0,0,1,0,0];
			}
			matrixStrings = matrixStrings.split('(')[1].split(')')[0].split(',');
			var matrixStringCount= matrixStrings.length;
			for (var i=0; i < matrixStringCount; i++) {
				var value = ( isNaN(Number(matrixStrings[i])) ) ? 0 : Number(matrixStrings[i]);
				matrixArray.push(value);
			}
			return matrixArray;
		};
		return this.each(
			function() {
				var result = $.fn.jqScale[action](this);
				return result;
			}
		);
	};
})(jQuery);;
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain(this.hostname, ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
