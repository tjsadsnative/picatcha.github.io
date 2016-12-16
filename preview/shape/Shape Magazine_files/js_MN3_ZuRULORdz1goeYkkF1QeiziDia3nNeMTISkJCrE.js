/*!
 * Modernizr v2.6.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 *//*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");if(F(b,"string")||F(b,"undefined"))return H(e,b);e=(a+" "+q.join(d+" ")+d).split(" ");return I(e,b,c)}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement);return u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++){k.setAttribute("type",f=a[d]);e=k.type!=="text";if(e){k.value=l;k.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(f)&&k.style.WebkitAppearance!==c){g.appendChild(k);h=b.defaultView;e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0;g.removeChild(k)}else/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)}t[a[d]]=!!e}return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--){j=b.createElement("div");j.id=e?e[d]:h+(d+1);k.appendChild(j)}f=["&#173;",'<style id="s',h,'">',a,"</style>"].join("");k.id=h;(l?k:m).innerHTML+=f;m.appendChild(k);if(!l){m.style.background="";g.appendChild(m)}i=c(k,a);l?k.parentNode.removeChild(k):m.parentNode.removeChild(m);return!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"});return d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div");d="on"+d;var f=d in e;if(!f){e.setAttribute||(e=b.createElement("div"));if(e.setAttribute&&e.removeAttribute){e.setAttribute(d,"");f=F(e[d],"function");F(e[d],"undefined")||(e[d]=c);e.removeAttribute(d)}}e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});s.flexbox=function(){return J("flexWrap")};s.flexboxlegacy=function(){return J("boxDirection")};s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")};s.webgl=function(){return!!a.WebGLRenderingContext};s.touch=function(){var c;"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9});return c};s.geolocation=function(){return"geolocation"in navigator};s.postmessage=function(){return!!a.postMessage};s.websqldatabase=function(){return!!a.openDatabase};s.indexedDB=function(){return!!J("indexedDB",a)};s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)};s.history=function(){return!!a.history&&!!history.pushState};s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a};s.rgba=function(){D("background-color:rgba(150,255,150,.5)");return G(j.backgroundColor,"rgba")};s.hsla=function(){D("background-color:hsla(120,40%,100%,.5)");return G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")};s.multiplebgs=function(){D("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(j.background)};s.backgroundsize=function(){return J("backgroundSize")};s.borderimage=function(){return J("borderImage")};s.borderradius=function(){return J("borderRadius")};s.boxshadow=function(){return J("boxShadow")};s.textshadow=function(){return b.createElement("div").style.textShadow===""};s.opacity=function(){E("opacity:.55");return/^0.55$/.test(j.opacity)};s.cssanimations=function(){return J("animationName")};s.csscolumns=function(){return J("columnCount")};s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length));return G(j.backgroundImage,"gradient")};s.cssreflections=function(){return J("boxReflect")};s.csstransforms=function(){return!!J("transform")};s.csstransforms3d=function(){var a=!!J("perspective");a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3});return a};s.csstransitions=function(){return J("transition")};s.fontface=function(){var a;y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0});return a};s.generatedcontent=function(){var a;y(['#modernizr:after{content:"',l,'";visibility:hidden}'].join(""),function(b){a=b.offsetHeight>=1});return a};s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c);c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(d){}return c};s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c);c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,"");c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(d){}return c};s.localstorage=function(){try{localStorage.setItem(h,h);localStorage.removeItem(h);return!0}catch(a){return!1}};s.sessionstorage=function(){try{sessionStorage.setItem(h,h);sessionStorage.removeItem(h);return!0}catch(a){return!1}};s.webworkers=function(){return!!a.Worker};s.applicationcache=function(){return!!a.applicationCache};s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};s.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==r.svg};s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))};s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)if(C(s,L)){x=L.toLowerCase();e[x]=s[L]();v.push((e[x]?"":"no-")+x)}e.input||K();e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b;f&&(g.className+=" "+(b?"":"no-")+a);e[a]=b}return e};D("");i=k=null;(function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];if(!b){b={};h++;a[g]=h;i[h]=b}return b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a);return g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){if(!b.cache){b.cache={};b.createElem=a.createElement;b.createFrag=a.createDocumentFragment;b.frag=b.createFrag()}a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"));j||p(a,c);return a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>";f="hidden"in a;j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0;j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r;q(b)})(this,b);e._version=d;e._prefixes=n;e._domPrefixes=q;e._cssomPrefixes=p;e.mq=z;e.hasEvent=A;e.testProp=function(a){return H([a])};e.testAllProps=J;e.testStyles=y;e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")};g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):"");return e}(this,this.document);;
(!window.console || !console.log) && function () {
  var e = function () {
    }, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
    n = t.length,
    r = window.console = {};
  while (n--) r[t[n]] = e
}();

//helper function for capitalization in JavasScript
(function () {
  var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
  var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";

  this.titleCaps = function (title) {
    var parts = [], split = /[:.;?!] |(?: |^)["?]/g, index = 0;

    while (true) {
      var m = split.exec(title);

      parts.push(title.substring(index, m ? m.index : title.length)
        .replace(/\b([A-Za-z][a-z.'?]*)\b/g, function (all) {
          return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
        })
        .replace(RegExp("\\b" + small + "\\b", "ig"), lower)
        .replace(RegExp("^" + punct + small + "\\b", "ig"), function (all, punct, word) {
          return punct + upper(word);
        })
        .replace(RegExp("\\b" + small + punct + "$", "ig"), upper));

      index = split.lastIndex;

      if (m) parts.push(m[0]);
      else break;
    }

    return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
      .replace(/(['?])S\b/ig, "$1s")
      .replace(/\b(AT&T|Q&A)\b/ig, function (all) {
        return all.toUpperCase();
      });
  };

  function lower(word) {
    return word.toLowerCase();
  }

  function upper(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }
})();


/* Starting some basic section for jquery in drupal 7. Rodney Gracia
 Feel free to coninue adding to this section
 */

(function ($, Drupal, window, document, undefined) {
  $(document).ready(function () {

    //Runs on small layout and converts Hollywood Nav into a select list
    if (window.innerWidth < 767) {

      // Create the dropdown base
      $("<select />").appendTo("#hollywood-nav-container");

       // Create default option "for no selection" grab first path chunck and replace dashes with space, css does the rest
      var pathArray = window.location.pathname.split('/'),
        channelPath = window.location.pathname,
        channelName = pathArray[1],
        cleanChannelName = channelName.replace("-", ' '),
        formattedChannelName = titleCaps(cleanChannelName);

      // Populate dropdown with menu items
      $("a", '#hollywood-nav-container').each(function () {
        var el = $(this);
        $("<option />", {
          "value": el.attr("href"),
          "text": el.text()
        }).appendTo("#hollywood-nav-container select");

      });

      //Cleanup the hidden container children
      $("#hollywood-nav-container #hollywood-links-wrapper").remove();

      $("#hollywood-nav-container select").change(function () {
        window.location = $(this).find("option:selected").val();
      });

      $('#hollywood-nav-container select option').each(function () {
        var thePath = window.location.pathname;
        if ($(this).val() == thePath) {
          $(this).attr("selected", "selected");
        }
      });
    }
    var headerDiv = $(".logo-wrapper");
    if(window.innerWidth < 767) {
      headerDiv.height(50);
      var top_spot = 100,
        spot = $(window).scrollTop();

      $(window).scroll(function(e) {
        var newScrollTop = $(this).scrollTop();

        if (newScrollTop > top_spot && spot > newScrollTop) {
          headerDiv.addClass('moving');
        }
        else {
          headerDiv.removeClass('moving');
        }
        spot = newScrollTop;
      });
    }

     //Jquery only to run when on small and medium layouts are detected, handles the select list conversion
    if (window.innerWidth <= 768) {

      //Move nutrition info to the bottom of the node content SHAPEII 106
      $('.aside-nutrition').appendTo($('.recipe-instructions'));

      //turning sub navigtion into a select list SHAPEII 260

      // Create the dropdown base
      var submenuSelector = ".submenu-1:eq(0)";
      $("<select />").appendTo(submenuSelector);

      // Create default option "for no selection" grab first path chunck and replace dashes with space, css does the rest

      var channelPath = window.location.pathname;
      var pathArray = channelPath.split('/');

      var channelName = pathArray[1];
      var cleanChannelName = channelName.replace("-", ' ');
      var formattedChannelName = titleCaps(cleanChannelName);

      $("<option />", {
        "selected": "selected",
        "value": "/" + channelName,
        "text": "More " + formattedChannelName
      }).appendTo(submenuSelector + " select");

      // Populate dropdown with menu items
      $(".submenu-1:eq(0) a").each(function () {
        var el = $(this);
        $("<option />", {
          "value": el.attr("href"),
          "text": el.text()
        }).appendTo(submenuSelector + " select");

      });

      $(submenuSelector + " select").change(function () {
        window.location = $(this).find("option:selected").val();
      });

      $(submenuSelector + ' select option').each(function () {
        var thePath = window.location.pathname;
        if ($(this).val() == thePath) {
          $(this).attr("selected", "selected");
        }
      });
    }

    //Fixing select list insude JPanel Menu SHAPEII-122A
    $('#mobile_menu select').change(function () {
      //alert('url = ' + this.value );
      window.location.href = this.value;
    });

    //adding a class to html element for ie10
    function getIEVersion() {
      var agent = navigator.userAgent;
      var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
      var matches = agent.match(reg);
      if (matches != null) {
        return { major: matches[1], minor: matches[2] };
      }
      return { major: "-1", minor: "-1" };
    }

    var ie_version = getIEVersion();
    var is_ie10 = ie_version.major == 10;
    if (is_ie10) {
      $("html").addClass("ie10");
    }

    // Form input hide/display default text on focus/blur
    //adding more space to make sure git gets this
    $("#txt-search").on('click focusout', function () {
      this.value = '';
    });

    // Add class to nodes on /videos page, need in IE
    $('.channel_video .AMIMainWrapper .AMIPostBox.small-noshare:nth-child(3n+2)').addClass('ie-small-noshare');

    //BMI JS
    function mod(div, base) {
      return Math.round(div - (Math.floor(div / base) * base));
    }

    function calcBmi() {
      var w = document.bmi.weight.value * 1;
      var HeightFeetInt = document.bmi.htf.value * 1;
      var HeightInchesInt = document.bmi.hti.value * 1;
      HeightFeetConvert = HeightFeetInt * 12;
      h = HeightFeetConvert + HeightInchesInt;
      var $bmiAdvice = $("#bmi-advice");
      var $resultsTable = $("#results-table");
      displaybmi = (Math.round((w * 703) / (h * h) * 10) / 10);
      var rvalue = true;
      if ((w <= 35) || (w >= 500) || (h <= 48) || (h >= 120)) {
        alert("Invalid data.  Please check and re-enter!");
        rvalue = false;
      }
      if (rvalue) {
        if (HeightInchesInt > 11) {
          reminderinches = mod(HeightInchesInt, 12);
          document.bmi.hti.value = reminderinches;
          document.bmi.htf.value = HeightFeetInt +
            ((HeightInchesInt - reminderinches) / 12);
          document.bmi.answer.value = displaybmi;
        }
        if (displaybmi > 0)
          ($("#answer").attr('class', 'result-displayed'));
          ($("#bmi-result-title").attr('class', 'result-displayed'));
        if (displaybmi < 18.5)
          (document.bmi.comment.value = "underweight") &&
          ($bmiAdvice.attr('class', 'underweight')) &&
          ($resultsTable.attr('class', 'underweight-active'));
        if (displaybmi > 18.5 && displaybmi <= 24.9)
          (document.bmi.comment.value = "normal") &&
          ($bmiAdvice.attr('class', 'normal')) &&
          ($resultsTable.attr('class', 'normal-active'));
        if (displaybmi >= 25 && displaybmi <= 29.9)
          (document.bmi.comment.value = "overweight") &&
          ($bmiAdvice.attr('class', 'overweight')) &&
          ($resultsTable.attr('class', 'overweight-active'));
        if (displaybmi >= 30)
          (document.bmi.comment.value = "obese") &&
            ($bmiAdvice.attr('class', 'obese')) &&
          ($resultsTable.attr('class', 'obese-active'));
        document.bmi.answer.value = displaybmi;
      }
      return rvalue;
    }

    $('#calcBMI').click(function () {
      calcBmi();
    });


    // New search bar animation code, copied from Men's Fitness
      $('input.search-btn', '#top-nav-btns')
          .bind('focus', function () {
              if (window.matchMedia('(max-width: 767px)').matches) {
                  $tmp_scroll = $(window).scrollTop();
                  $('header.logo-wrapper, #hdr-wrap').css({position: 'static'});
              }
              $('input.search-btn').animate({width: '170px', lineHeight: '16px', fontSize: '16px'}, 300).closest('#top-nav-btns').addClass('opened');
              $('#top-nav-btns').css({position: 'absolute'}).animate({width: '170px'}, 300);
          })
          .bind('blur', function () {
              if (window.matchMedia('(max-width: 767px)').matches) {
                  $(window).scrollTop($tmp_scroll);
              }
              $('header.logo-wrapper, #hdr-wrap').css({position: 'fixed'});
              $('input.search-btn').animate({width: '40px'}, 300).closest('#top-nav-btns').removeClass('opened');
              $('#top-nav-btns').animate({width: '40px'}, 300).css({position: 'absolute'});
      });
      // Makes search wider on click

    //Adding active class to main menu items based on node url root Author @RGracia
    if (window.innerWidth > 767) {
      //testing some menu work

      var rootElement = $('.nice-menu'),
        pathname = window.location.pathname,
        parts = pathname.split('/'),
        pathnameRoot = '/' + parts[1];

      //Try to find the parent with the pathnameRoot.
      $(rootElement, '#hdr-wrap').find('a[href="' + pathnameRoot + '"]').addClass('active');
      $(rootElement, '#hdr-wrap').find('a[href="' + pathnameRoot + '"]').parent().addClass('active-trail');
      //alert(pathnameRoot);
    }
    jQuery('.menu-path-front a:contains("More")').attr('onclick', 'return false;');
  });//end document.ready
})(jQuery, Drupal, this, this.document);

(function ($) {
  $(document).ready(function () {
    $(document).ShapeInitSelectbox($);
  });
})(jQuery);

jQuery.fn.ShapeInitSelectbox = function ($) {
  if ($ == null) {
    $ = jQuery;
  }
  if ($.fn.selectbox !== undefined) {
    $('.search-form select, .training_plan #shape-training-plans-generator-filter-form select').selectbox({onOpen: function () {
      var ind = $('.search-form select, #shape-training-plans-generator-filter-form select').index(this);
      var selectorObj = $('.sbHolder .sbSelector:eq(' + ind + ')');
      selectorObj.css({background: 'white'});


      if (selectorObj.text() == $('.sbHolder .sbOptions:eq(' + ind + ') li:eq(0) a').text()) {
        $('.sbHolder .sbOptions:eq(' + ind + ') li:eq(0)').hide();
      } else {
        $('.sbHolder .sbOptions:eq(' + ind + ') li:eq(0)').show();
      }

    }, onClose: function () {
      var ind = $('.search-form select, #shape-training-plans-generator-filter-form select').index(this);
      $('.search-form .sbHolder .sbSelector:eq(' + ind + ')').css({background: 'url(/sites/shape.com/themes/shape/images/bg-selectbox.png) repeat-x 0 0'});
      $('#shape-training-plans-generator-filter-form .sbHolder .sbSelector:eq(' + ind + ')').css({background: 'url(/sites/shape.com/themes/shape/images/training_plan_selector.png) repeat-x 0 0'});
    }});
  }
};

(function ($) {
  $(document).ready(function () {
    var body = $('body');
    //Animating the scroll to top on shape studio
    if (body.hasClass('shape-studio')) {
      $('#block-dfp-bottom').append('<div id="ss-close"></div>');
      $( "#ss-close" ).click(function() {
        $( "#ss-bottom-ad" ).hide(300);
      });
      $('a[href="#ss-top"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
        return true;
      });
    }

    if (body.hasClass('ami_exercise')) {
      //Find steps with no image and add an empty image container
      $($(".field-exercise-steps:not(:has(.field-step-image))", "div.ex-steps")).each(function(index, addImg) {
        $(addImg).find('h3.field-label').after('<div class="field-step-image empty"></div>');
      });
      //Simple iterator for exercise steps and add their #
      var exCounter = 0;
      $( ".field-step-image", "div.ex-steps" ).each( function( index, step ) {
        exCounter++;
        $( step ).append('<span>'+ exCounter + '</span>');
      });
      //wrapping field collection items in rows of 3
      var wrapperLoop = $( ".field-exercise-steps", ".exercise" );
      wrapperLoop.each(function(i) {
        if( i % 3 == 0 ) {
          $(this).nextAll().andSelf().slice(0,3).wrapAll('<div class="ss-row clearfix"></div>');
        }
      });
      //Setting ieach step image alt text and title
      var str = $( "h1#page-title" ).text();
      var altCounter = 0;
      $( ".field-step-image img", "div.ex-steps" ).each( function( index, altSet ) {
        altCounter++;
        $( altSet ).attr('alt', str + " " + altCounter );
        $( altSet ).attr('title', str + " Step " + altCounter );
      });
    }
    var searchButton = $("input#txt-search.search-btn");
    searchButton.keypress(function (e) {
      if (e.keyCode == 13) {
        window.location.href = "/search/site/" + encodeURIComponent($("#txt-search").val());
      }
    });
    searchButton.click(
      function (e) {
        var mousePos = e.pageX;
        var textFieldWidth = searcButton.width();
        var textFieldLeft = searcButton.offset().left;
        var breakpoint = textFieldWidth + textFieldLeft;
        var searchButtonValue = $("#txt-search").val();
        if (mousePos > breakpoint && searchButtonValue) {
          window.location.href = "/search/site/" + encodeURIComponent(searchButtonValue);
        }
      }
    );
    $("#NmWgContainer a").attr('target', '_blank');
  });
})(jQuery);

(function($) {
  Drupal.behaviors.sailthru_shape = {
    attach: function () {
      var form = $('#sailthru-newsletters-form'),
        email = $('#edit-email', form);
      form.submit(function(e){
        // Check for valid email address entered
        if (!email.val().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}/i)) {
          e.preventDefault();
        }
      });
    }
  };
  $(document).ready(function() {
    if (window.innerWidth < 768 ) {
      var parent_sites_links = $('.parrent_sites_links');
      if (parent_sites_links.length) {
        parent_sites_links.change(function(e) {
          window.location = $(e.target).val();
        });
      }
    }
    $(".print_html a").click(function() {
      window.print();
    });
  });
})(jQuery);

(function($){
  Drupal.behaviors.sailthru_shape = {
    attach: function () {
      $(document).ready(function(e){
        checkDesktop = window.matchMedia('(min-width: 980px)');
        checkTablet = window.matchMedia('(min-width: 768px) and (max-width: 979px)');
        checkMobile = window.matchMedia('(max-width: 767px)');
        if (checkMobile.matches) {
          $(window).trigger('mobile');
        }
        else if (checkTablet.matches) {
          $(window).trigger('tablet');
        }
        else {
          $(window).trigger('desktop');
        }
        checkDesktop.addListener(function(event) {
          if (event.matches) {
            $(window).trigger('desktop');
          }
        });
        checkTablet.addListener(function(event) {
          if (event.matches) {
            $(window).trigger('tablet');
          }
        });
        checkMobile.addListener(function(event) {
          if (event.matches) {
            $(window).trigger('mobile');
          }
        });
      });
    }
  }
  // SHAPE-529 Add some need mobile CSS styles to manipulate of Shape now block
  // @author: Victor Pavlov
  Drupal.behaviors.MobileShapeNow = {
     attach: function (context, settings) {
      var isMobile = window.matchMedia('(max-width: 767px)');
      // Only for mobile layout on home page
      if(isMobile.matches && $('body').hasClass('page-shape-front')) {
        var $regionSidebarFirst = $('.region-sidebar-first'),
            $secondShapeNowBlock = $regionSidebarFirst.find('.shape-now-block:visible');
        if($secondShapeNowBlock.length) {
          var nowBlockHeight = $secondShapeNowBlock.outerHeight(),
              $sidebarInner = $regionSidebarFirst.find('.region-inner');
          $sidebarInner.addClass('shape-now-block-visible');
          $sidebarInner.css('padding-bottom', nowBlockHeight + 12);
        }
      }
    }
  }
  // SHAPE-556 Fix load more videos button from array_shift issue.
  // @author: Victor Pavlov
  Drupal.behaviors.VideosChannelLoadMore = {
     attach: function (context, settings) {
      $('#block-ami-videos-queue-ami-node-queue-videos').once(function(){
        // Define element which should be changed.
        var NeedElement = $(this).find('.list-number-14');
        if (NeedElement.length) {
          NeedElement.removeClass('list-number-14');
          NeedElement.addClass('list-number-15');
        }
      });
    }
  }

})(jQuery);
;
// jQuery hcSticky
// =============
// Version: 1.1.96
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: http://someweblog.com/hcsticky-jquery-floating-sticky-plugin/
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Makes elements on your page float as you scroll

(function(b,k){var c=function(){var b=window.pageXOffset!==k?window.pageXOffset:window.document.documentElement.scrollLeft,e=window.pageYOffset!==k?window.pageYOffset:window.document.documentElement.scrollTop;"undefined"==typeof c.x&&(c.x=b,c.y=e);"undefined"==typeof c.distanceX?(c.distanceX=b,c.distanceY=e):(c.distanceX=b-c.x,c.distanceY=e-c.y);var f=c.x-b,d=c.y-e;c.direction=0>f?"right":0<f?"left":0>=d?"down":0<d?"up":"first";c.x=b;c.y=e};b(window).on("scroll",c);var e=function(b,c){"undefined"==typeof b.cssClone&&(b.cssClone=b.clone().css("display","none"),b.cssClone.find("input:radio").attr("name","sfd4fgdf"),b.after(b.cssClone));var e=b.cssClone[0];if("undefined"!=typeof c){var d;e.currentStyle?d=e.currentStyle[c.replace(/-\w/g,function(b){return b.toUpperCase().replace("-","")})]:window.getComputedStyle&&(d=document.defaultView.getComputedStyle(e,null).getPropertyValue(c));d=/margin/g.test(c)?parseInt(d)===b[0].offsetLeft?d:"auto":d}return{value:d||null,remove:function(){b.cssClone.remove()}}};b.fn.extend({hcSticky:function(k,w){if(0==this.length)return this;var f=k||{},d=this.data("hcSticky")?!0:!1,p=b(window),t=b(document);if("string"==typeof f){switch(f){case "reinit":return p.off("scroll",this.data("hcSticky").f),this.hcSticky({},!0);case "off":this.data("hcSticky",b.extend(this.data("hcSticky"),{on:!1}));break;case "on":this.data("hcSticky",b.extend(this.data("hcSticky"),{on:!0}))}return this}return"object"==typeof f&&(d?this.data("hcSticky",b.extend(this.data("hcSticky"),f)):(this.data("hcSticky",b.extend({top:0,bottom:0,bottomEnd:0,bottomLimiter:null,innerTop:0,innerSticker:null,className:"sticky",wrapperClassName:"wrapper-sticky",noContainer:!1,parent:null,responsive:!0,followScroll:!0,onStart:function(){},onStop:function(){},on:!0},f)),f=this.data("hcSticky").bottomLimiter,null!==f&&this.data("hcSticky").noContainer&&this.data("hcSticky",b.extend(this.data("hcSticky"),{bottomEnd:t.height()-b(f).offset().top}))),d&&!w)?this:this.each(function(){var a=b(this),d=a.data("hcSticky").parent?b(a.data("hcSticky").parent):a.parent(),g=function(){var b=a.parent("."+a.data("hcSticky").wrapperClassName);return 0<b.length?(b.css({height:a.outerHeight(!0),width:function(){var c=e(b,"width").value;e(b).remove();return 0<=c.indexOf("%")||"auto"==c?(a.css("width",b.width()),c):a.outerWidth(!0)}()}),b):!1}()||function(){var c=b("<div>",{"class":a.data("hcSticky").wrapperClassName}).css({height:a.outerHeight(!0),width:function(){var b=e(a,"width").value;return 0<=b.indexOf("%")||"auto"==b?(a.css("width",parseFloat(a.css("width"))),b):"auto"==e(a,"margin-left").value?a.outerWidth():a.outerWidth(!0)}(),margin:e(a,"margin-left").value?"auto":null,position:function(){var b=a.css("position");return"static"==b?"relative":b}(),"float":a.css("float")||null,left:e(a,"left").value,right:e(a,"right").value,top:e(a,"top").value,bottom:e(a,"bottom").value});a.wrap(c);return a.parent()}(),f=function(b){a.hasClass(a.data("hcSticky").className)||(b=b||{},a.css({position:"fixed",top:b.top||0,left:b.left||g.offset().left}).addClass(a.data("hcSticky").className),a.data("hcSticky").onStart.apply(this))},k=function(b){b=b||{};a.css({position:b.position||"absolute",top:b.top||0,left:b.left||0}).removeClass(a.data("hcSticky").className);a.data("hcSticky").onStop.apply(this)};e(a).remove();a.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});if(a.outerHeight(!0)>d.height())return this;b(window).load(function(){a.outerHeight(!0)>d.height()&&(g.css("height",a.outerHeight(!0)),a.hcSticky("reinit"))});var m=!1,h=!1;p.on("resize",function(){a.data("hcSticky").responsive&&(h||(h=a.clone().attr("style","").css({visibility:"hidden",height:0,overflow:"hidden",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}),g.after(h)),e(h,"width").value!=e(g,"width").value&&g.width(e(h,"width").value),e(g).remove(),m&&clearTimeout(m),m=setTimeout(function(){m=!1;e(h).remove();h.remove();h=!1},100));"fixed"==a.css("position")?a.css("left",g.offset().left):a.css("left",0);a.width()!=g.width()&&a.css("width",g.width())});a.data("hcSticky",b.extend(a.data("hcSticky"),{f:function(){}}));a.data("hcSticky",b.extend(a.data("hcSticky"),{f:function(e){$referrer=a.data("hcSticky").noContainer?t:a.data("hcSticky").parent?b(a.data("hcSticky").parent):g.parent();if(a.data("hcSticky").on&&!(a.outerHeight(!0)>=$referrer.height())){var d=a.data("hcSticky").innerSticker?b(a.data("hcSticky").innerSticker).position().top:a.data("hcSticky").innerTop?a.data("hcSticky").innerTop:0,h=g.offset().top,m=$referrer.height()-a.data("hcSticky").bottomEnd+(a.data("hcSticky").noContainer?0:h),r=g.offset().top-a.data("hcSticky").top+d,l=a.outerHeight(!0)+a.data("hcSticky").bottom,n=p.height(),s=p.scrollTop(),q=a.offset().top,u=q-s,v;s>=r?m+a.data("hcSticky").bottom-(a.data("hcSticky").followScroll?0:a.data("hcSticky").top)<=s+l-d-(l-d>n-(r-d)&&a.data("hcSticky").followScroll?0<(v=l-n-d)?v:0:0)?k({top:m-l+a.data("hcSticky").bottom-h}):l-d>n&&a.data("hcSticky").followScroll?u+l<=n?"down"==c.direction?f({top:n-l}):0>u&&"fixed"==a.css("position")&&k({top:q-(r+a.data("hcSticky").top-d)-c.distanceY}):"up"==c.direction&&q>=s+a.data("hcSticky").top-d?f({top:a.data("hcSticky").top-d}):"down"==c.direction&&(q+l>n&&"fixed"==a.css("position"))&&k({top:q-(r+a.data("hcSticky").top-d)-c.distanceY}):f({top:a.data("hcSticky").top-d}):k();!0===e&&a.css("top","fixed"==a.css("position")?a.data("hcSticky").top-d:0)}}}));a.data("hcSticky").f(!0);p.on("scroll",a.data("hcSticky").f)})}})})(jQuery);
	    ;
(function ($) {
    /**
     * Run hcsticky library for shape right sidebar.
     * @type {{attach: Function}}
     */

    Drupal.behaviors.shape_hcsticky_run = {
        attach: function (context, settings) {
            if (typeof $.fn.hcSticky !== 'undefined' && typeof settings.shape.shape_hcsticky_run !== 'undefined') {
                if (settings.shape.shape_hcsticky_run) {
                    if ($(window).width() >= 980) {
                        $('.region-sidebar-second').hcSticky({
                            wrapperClassName: 'shape-sticky-sidebar-wrapper',
                            innerTop: -100
                        });

                        /**
                         * This code binds the Pre roll ads in the videos in the right rail.
                         * Problem : The HcSticky for the right rails removes the scripts tags needed for the JWplayer
                         * pre rol add, in order to bind these events and since the hcStick don't have a callback for onReady
                         * (when the sticky initialization is done, we are running this script a few seconds later of the
                         * invocation to bind the needed events.
                         *
                         * Otherwise the pre rol ads are not going to run in Shape.
                         *
                         * See SHAPE-365
                         */
                        setTimeout(function () {
                            var players = $('.ami_layout_l .region-sidebar-second .jwplayer_wrapper');                            
                            players.each(function (index, player) {
                                player = $(player);
                                var jwId = 'botr_' + player.attr('data-video-id') + '_' + player.attr('data-player-id') + '_div';

                                var started = false;

                                //This is when we display a preroll ad. We'll override the dummy tag from platform with the one we state here.
                                jwplayer(jwId).onBeforePlay(function () {
                                    if (!started) {
                                        started = true;
                                        jwplayer(jwId).playAd(player.attr('data-ads-url'));
                                    }
                                });

                                jwplayer(jwId).onComplete(function () {
                                    //When a video completes, we will allow an ad to play on the next item
                                    started = false;
                                });
                            });
                        }, 3000);
                    }
                }
            }
        }
    }

})(jQuery);

jQuery('document').ready(function () {
    jQuery(window).resize(function () {
        if (typeof jQuery.fn.hcSticky !== 'undefined') {
            if (jQuery(window).width() < 980) {
                jQuery('.region-sidebar-second').hcSticky('off');
            } else {
                jQuery('.region-sidebar-second').hcSticky('on');
            }
        }
        //$('.region-sidebar-second').hcSticky(
    });
});
;
(function($,undefined){var PROP_NAME="selectbox",FALSE=false,TRUE=true;function Selectbox(){this._state=[];this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",classFocus:"sbFocus",speed:200,effect:"slide",onChange:null,onOpen:null,onClose:null}}$.extend(Selectbox.prototype,{_isOpenSelectbox:function(target){if(!target){return FALSE}var inst=this._getInst(target);return inst.isOpen},_isDisabledSelectbox:function(target){if(!target){return FALSE}var inst=this._getInst(target);return inst.isDisabled},_attachSelectbox:function(target,settings){if(this._getInst(target)){return FALSE}var $target=$(target),self=this,inst=self._newInst($target),sbHolder,sbSelector,sbToggle,sbOptions,s=FALSE,optGroup=$target.find("optgroup"),opts=$target.find("option"),olen=opts.length;$target.attr("sb",inst.uid);$.extend(inst.settings,self._defaults,settings);self._state[inst.uid]=FALSE;$target.hide();function closeOthers(){var key,sel,uid=this.attr("id").split("_")[1];for(key in self._state){if(key!==uid){if(self._state.hasOwnProperty(key)){sel=$("select[sb='"+key+"']")[0];if(sel){self._closeSelectbox(sel)}}}}}sbHolder=$("<div>",{id:"sbHolder_"+inst.uid,"class":inst.settings.classHolder,tabindex:$target.attr("tabindex")});sbSelector=$("<a>",{id:"sbSelector_"+inst.uid,href:"#","class":inst.settings.classSelector,click:function(e){e.preventDefault();closeOthers.apply($(this),[]);var uid=$(this).attr("id").split("_")[1];if(self._state[uid]){self._closeSelectbox(target)}else{self._openSelectbox(target)}}});sbToggle=$("<a>",{id:"sbToggle_"+inst.uid,href:"#","class":inst.settings.classToggle,click:function(e){e.preventDefault();closeOthers.apply($(this),[]);var uid=$(this).attr("id").split("_")[1];if(self._state[uid]){self._closeSelectbox(target)}else{self._openSelectbox(target)}}});sbToggle.appendTo(sbHolder);sbOptions=$("<ul>",{id:"sbOptions_"+inst.uid,"class":inst.settings.classOptions,css:{display:"none"}});$target.children().each(function(i){var that=$(this),li,config={};if(that.is("option")){getOptions(that)}else{if(that.is("optgroup")){li=$("<li>");$("<span>",{text:that.attr("label")}).addClass(inst.settings.classGroup).appendTo(li);li.appendTo(sbOptions);if(that.is(":disabled")){config.disabled=true}config.sub=true;getOptions(that.find("option"),config)}}});function getOptions(){var sub=arguments[1]&&arguments[1].sub?true:false,disabled=arguments[1]&&arguments[1].disabled?true:false;arguments[0].each(function(i){var that=$(this),li=$("<li>"),child;if(that.is(":selected")){sbSelector.text(that.text());s=TRUE}if(i===olen-1){li.addClass("last")}if(!that.is(":disabled")&&!disabled){child=$("<a>",{href:"#"+that.val(),rel:that.val()}).text(that.text()).bind("click.sb",function(e){if(e&&e.preventDefault){e.preventDefault()}var t=sbToggle,$this=$(this),uid=t.attr("id").split("_")[1];self._changeSelectbox(target,$this.attr("rel"),$this.text());self._closeSelectbox(target)}).bind("mouseover.sb",function(){var $this=$(this);$this.parent().siblings().find("a").removeClass(inst.settings.classFocus);$this.addClass(inst.settings.classFocus)}).bind("mouseout.sb",function(){$(this).removeClass(inst.settings.classFocus)});if(sub){child.addClass(inst.settings.classSub)}if(that.is(":selected")){child.addClass(inst.settings.classFocus)}child.appendTo(li)}else{child=$("<span>",{text:that.text()}).addClass(inst.settings.classDisabled);if(sub){child.addClass(inst.settings.classSub)}child.appendTo(li)}li.appendTo(sbOptions)})}if(!s){sbSelector.text(opts.first().text())}$.data(target,PROP_NAME,inst);sbHolder.data("uid",inst.uid).bind("keydown.sb",function(e){var key=e.charCode?e.charCode:e.keyCode?e.keyCode:0,$this=$(this),uid=$this.data("uid"),inst=$this.siblings("select[sb='"+uid+"']").data(PROP_NAME),trgt=$this.siblings(["select[sb='",uid,"']"].join("")).get(0),$f=$this.find("ul").find("a."+inst.settings.classFocus);switch(key){case 37:case 38:if($f.length>0){var $next;$("a",$this).removeClass(inst.settings.classFocus);$next=$f.parent().prevAll("li:has(a)").eq(0).find("a");if($next.length>0){$next.addClass(inst.settings.classFocus).focus();$("#sbSelector_"+uid).text($next.text())}}break;case 39:case 40:var $next;$("a",$this).removeClass(inst.settings.classFocus);if($f.length>0){$next=$f.parent().nextAll("li:has(a)").eq(0).find("a")}else{$next=$this.find("ul").find("a").eq(0)}if($next.length>0){$next.addClass(inst.settings.classFocus).focus();$("#sbSelector_"+uid).text($next.text())}break;case 13:if($f.length>0){self._changeSelectbox(trgt,$f.attr("rel"),$f.text())}self._closeSelectbox(trgt);break;case 9:if(trgt){var inst=self._getInst(trgt);if(inst){if($f.length>0){self._changeSelectbox(trgt,$f.attr("rel"),$f.text())}self._closeSelectbox(trgt)}}var i=parseInt($this.attr("tabindex"),10);if(!e.shiftKey){i++}else{i--}$("*[tabindex='"+i+"']").focus();break;case 27:self._closeSelectbox(trgt);break}e.stopPropagation();return false}).delegate("a","mouseover",function(e){$(this).addClass(inst.settings.classFocus)}).delegate("a","mouseout",function(e){$(this).removeClass(inst.settings.classFocus)});sbSelector.appendTo(sbHolder);sbOptions.appendTo(sbHolder);sbHolder.insertAfter($target);$("html").bind("mousedown",function(e){e.stopPropagation();$("select").selectbox("close")});$([".",inst.settings.classHolder,", .",inst.settings.classSelector].join("")).mousedown(function(e){e.stopPropagation()})},_detachSelectbox:function(target){var inst=this._getInst(target);if(!inst){return FALSE}$("#sbHolder_"+inst.uid).remove();$.data(target,PROP_NAME,null);$(target).show()},_changeSelectbox:function(target,value,text){var onChange,inst=this._getInst(target);if(inst){onChange=this._get(inst,"onChange");$("#sbSelector_"+inst.uid).text(text)}value=value.replace(/\'/g,"\\'");$(target).find("option[value='"+value+"']").attr("selected",TRUE);if(inst&&onChange){onChange.apply((inst.input?inst.input[0]:null),[value,inst])}else{if(inst&&inst.input){inst.input.trigger("change")}}},_enableSelectbox:function(target){var inst=this._getInst(target);if(!inst||!inst.isDisabled){return FALSE}$("#sbHolder_"+inst.uid).removeClass(inst.settings.classHolderDisabled);inst.isDisabled=FALSE;$.data(target,PROP_NAME,inst)},_disableSelectbox:function(target){var inst=this._getInst(target);if(!inst||inst.isDisabled){return FALSE}$("#sbHolder_"+inst.uid).addClass(inst.settings.classHolderDisabled);inst.isDisabled=TRUE;$.data(target,PROP_NAME,inst)},_optionSelectbox:function(target,name,value){var inst=this._getInst(target);if(!inst){return FALSE}inst[name]=value;$.data(target,PROP_NAME,inst)},_openSelectbox:function(target){var inst=this._getInst(target);if(!inst||inst.isOpen||inst.isDisabled){return }var el=$("#sbOptions_"+inst.uid),viewportHeight=parseInt($(window).height(),10),offset=$("#sbHolder_"+inst.uid).offset(),scrollTop=$(window).scrollTop(),height=el.prev().height(),diff=viewportHeight-(offset.top-scrollTop)-height/2,onOpen=this._get(inst,"onOpen");el.css({top:height+"px",maxHeight:(diff-height)+"px"});inst.settings.effect==="fade"?el.fadeIn(inst.settings.speed):el.slideDown(inst.settings.speed);$("#sbToggle_"+inst.uid).addClass(inst.settings.classToggleOpen);this._state[inst.uid]=TRUE;inst.isOpen=TRUE;if(onOpen){onOpen.apply((inst.input?inst.input[0]:null),[inst])}$.data(target,PROP_NAME,inst)},_closeSelectbox:function(target){var inst=this._getInst(target);if(!inst||!inst.isOpen){return }var onClose=this._get(inst,"onClose");inst.settings.effect==="fade"?$("#sbOptions_"+inst.uid).fadeOut(inst.settings.speed):$("#sbOptions_"+inst.uid).slideUp(inst.settings.speed);$("#sbToggle_"+inst.uid).removeClass(inst.settings.classToggleOpen);this._state[inst.uid]=FALSE;inst.isOpen=FALSE;if(onClose){onClose.apply((inst.input?inst.input[0]:null),[inst])}$.data(target,PROP_NAME,inst)},_newInst:function(target){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,uid:Math.floor(Math.random()*99999999),isOpen:FALSE,isDisabled:FALSE,settings:{}}},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this selectbox"}},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]}});$.fn.selectbox=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&options=="isDisabled"){return $.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this].concat(otherArgs)):$.selectbox._attachSelectbox(this,options)})};$.selectbox=new Selectbox();$.selectbox.version="0.2"})(jQuery);;
