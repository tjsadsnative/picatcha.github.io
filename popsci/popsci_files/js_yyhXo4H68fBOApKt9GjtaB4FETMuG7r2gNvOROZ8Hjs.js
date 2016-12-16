(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
(function ($) {
  Drupal.behaviors.borrowedPane = {
    attach: function (context, settings) {
      $('.borrowed-pane-container').not('.no-refresh').each(function () {
        $(this).html('');
        var lender = $($(this).data('selector'));
        if (lender.length === 0) {
          $(this).closest('.pane-borrowed-pane').hide();
        }
        else {
          lender.clone($(this).data('events')).appendTo($(this));
          $(this).closest('.pane-borrowed-pane').show();
          if ($(this).data('flag')) {
            lender.closest($(this).data('flag')).addClass('borrowed-pane-lender');
          }
          else {
            lender.addClass('borrowed-pane-lender');
          }
        }
        if (!$(this).data('refresh')) {
          $(this).addClass('no-refresh');
        }
      });
    }
  };
}(jQuery));
;
(function ($, Drupal, window, document, undefined) {
  var post_loaded = false;
  Drupal.behaviors.postSocial =  {
    attach: function (context, settings) {
      if (typeof settings.post_social == 'undefined') {
        return;
      }

      var s = settings.post_social.settings;

      if (typeof pwidget_config === 'undefined') {
        pwidget_config = {
          publisherKey: s.publisher_key,
          click: s.click,
          track: s.track,
          copypaste: s.copypaste,
          shareQuote: s.sharequote,
          onload: function () {
            post_loaded = true;
            // post_init() limits the scope of selector searching for post_widget(),
            // drastically improving performance on large DOM pages.
            post_init(context);

            // post_widget alters the object passed to it, so we clone.
            post_widget('.postButtons',
                $.extend({}, settings.post_social.widget));
            post_widget('.customIcon', { click: true });
            var counterOpts = {};
            if (typeof $('.postButtons').attr('pw:url') !== 'undefined') {
              counterOpts.url = $('.postButtons').attr('pw:url');
            }
            pwidget_api.counter(".customCounter", counterOpts);
          }
        };
      }

      var shareImage = '';
      if (context == document) {
        // First page load, just grab the og:image value.
        shareImage = $("meta[property=og\\:image]").attr('content');
      }
      else {
        // Grab the context's img - this will be on an ajax gallery call.
        shareImage = $('img', context).attr('src');
      }

      $('body').once('postSocial', function() {
        // Insert the OG image, if any, into the Po.st widget attr.
        $('.postButtons').attr('pw:image', shareImage);
        // Insert the OG title, if any into the Po.st widget attr.
        // Otherwise it will pick up the <title>... booo.
        if (typeof $('.postButtons').attr('pw:title') === 'undefined') {
          // Do not overwrite pw:title attribute if it is already set.
          var ogTitle = $("meta[property=og\\:title]").attr('content');
          $('.postButtons').attr('pw:title', ogTitle);     
        }
      });
      // Allows post widget to update when infinite scroll is active.
      var seen = [];
      $('.inactive-postButtons', context)
         // Remove duplicate po.st elements.
        .filter(function () {
          $(this).removeClass('inactive-postButtons');
          if ($.inArray($(this).attr('class'), seen) !== -1) {
            return;
          }
          seen.push($(this).attr('class'));
          return true;
        })
        .each(function () {
          var u = $(this).attr('pw:url')
            , i = $(this).data('img')
            , c = $(this).attr('class')
            , cRe = /postButtons-([^\s]+)/
            , match = c.match(cRe)
            , selector = match[0]
            , findNid = /(\d+)/
            , matchSelector = selector.match(findNid)
            , nid = matchSelector[0];
          var obj = {};
          if (i.length !== 0) {
            obj.image = i;
          }
          var init_widget = function () {
            if (post_loaded) {
              // Use post_init() for performance.
              post_init(context);
              post_widget('.' + selector,
                  $.extend(obj, settings.post_social.widget));
              $('.inactive-customIcon', context).removeClass('inactive-customIcon').addClass('customIcon');
              post_widget('.customIcon',
                  $.extend(obj, { click: true }));
              pwidget_api.counter($('[data-id="'+nid+'"] .customCounter'), {'url': u});
            }
            else {
              setTimeout(init_widget, 100);
            }
          }
          setTimeout(init_widget, 8);
        });
    }
  }
})(jQuery, Drupal, this, this.document);
;
(function ($, Drupal, window, document, undefined) {

  var ran = false;

  Drupal.behaviors.silverpopEngage =  {
    attach: function (context, settings) {

      var silverpopVars = settings.silverpop_engage;

      // Only run once if object is not empty.
      if (ran || $.isEmptyObject(silverpopVars)) {
        return;
      }
      ran = true;

      // Only have to check for one conversion variable.
      // Drupal admin form validation requires both.
      if (silverpopVars.silverpop_engage_conversion_tracking_meta_name) {
        $('head').append('<meta name="' + silverpopVars.silverpop_engage_conversion_tracking_meta_name + '" content="' + silverpopVars.silverpop_engage_conversion_tracking_meta_content + '" />');
      }
      // Only have to check for one tracking variable.
      // Drupal admin form validation requires both.
      if (silverpopVars.silverpop_engage_web_tracking_meta_name) {
        $('head').append('<meta name="' + silverpopVars.silverpop_engage_web_tracking_meta_name + '" content="' + silverpopVars.silverpop_engage_web_tracking_meta_content + '" />');
      }
      // Append the script to the head.
      if (silverpopVars.silverpop_engage_meta_script_src) {
        var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = silverpopVars.silverpop_engage_meta_script_src;
            $('head').append(s);
      }
    }
  }
})(jQuery, Drupal, this, this.document);
;
(function ($, Drupal, window, document, undefined) {

  var ran = false;

  Drupal.behaviors.smartappBanners =  {
    attach: function (context, settings) {

      var smartappVars = settings.smartapp_banners;

      // Only run once if object is not empty.
      if (ran || $.isEmptyObject(smartappVars)) {
        return;
      }
      ran = true;

      var is_iPad       = false;
      var is_iPhone     = false;
      var supportiPhone = smartappVars.smartapp_banners_iphone;
      var supportiPad   = smartappVars.smartapp_banners_ipad;

      if (supportiPad) {
        is_iPad = navigator.userAgent.match(/iPad/i) != null;
      }
      if (supportiPhone) {
        is_iPhone = navigator.userAgent.match(/iPhone/i) != null;
      }
      // Append the tracking script to the head.
      if (is_iPad || is_iPhone) {
        window._emags_insight = {
          user: '5',
          g: '{' + smartappVars.smartapp_banners_g + '}',
          support_iphone: supportiPhone,
          support_ipad: supportiPad
        };
        (function () {
          var script_tag = document.createElement('script');
          script_tag.type = 'text/javascript';
          script_tag.async = true;
          script_tag.src = smartappVars.smartapp_banners_src;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(script_tag, s);
        })();
      }
    }
  }
})(jQuery, Drupal, this, this.document);
;
(function ($, Drupal, window, document, undefined) {
  
  // Activate the login prompted for users if not logged in.
  Drupal.behaviors.votePromptLogin =  {
    attach: function (context, settings) {
      $('.not-logged-in .vud-widget').once('prompt').bind('click', function() {
        $('.init-modal-forms-login-processed').trigger('click');
      });
    }
  }
  // disable all forms and prompt user to log in on submission form.
  Drupal.behaviors.formPromptLogin =  {
    attach: function (context, settings) {
      $('.not-logged-in .pane-user-contest-entry-form input').once('prompt').bind('click', function(e) {
        // remove focus from the input.
        $(this).blur();
        // Trigger the event to call the modal
        $('.init-modal-forms-login-processed').trigger('click');
        // Prevent the actions from occuring. 
        e.preventDefault();
      })
    }
  }
  
})(jQuery, Drupal, this, this.document);;
(function () {
  // Define CSS to hide ad units, rather than using display none.
  (function () {
    var h = document.head || document.getElementsByTagName('head')[0]
      , s = document.createElement('style')
      , css = '.gpt-hidden-ad { display: block !important; position: absolute !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; height: 1px !important; width: 1px !important; margin: -1px !important; padding: 0 !important; border: 0 !important; }';

    s.type = 'text/css';
    if (s.styleSheet) {
      s.styleSheet.cssText = css;
    }
    else {
      s.appendChild(document.createTextNode(css));
    }
    h.appendChild(s);
  })();

  var spaceRegex = /[\n\t\r]/g;

  var hasClass = function (el, selector) {
    return ( (' ' + el.className + ' ').replace(spaceRegex, ' ').indexOf(' ' + selector + ' ') > -1);
  }

  var addClass = function (el, selector) {
    if (!hasClass(el, selector)) {
      el.className = (selector + ' ' + el.className).trim();
    }
  }

  var removeClass = function (el, selector) {
    if (hasClass(el, selector)) {
      var newClass = ''
        , i = 0
        , classes = (' ' + el.className + ' ').replace(spaceRegex, ' ').split(' ');
      for (i; i < classes.length; i++) {
        if (classes[i] !== selector) {
          newClass += classes[i] + ' ';
        }
      }
      el.className = newClass.trim();
    }
  }

  var cloneInto = function (src, dest) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        if (dest.hasOwnProperty(key)) {
          dest[key].concat(src[key]);
        }
        else {
          dest[key] = src[key];
        }
      }
    }
  };

  /**
   * Define GPT Ad class constructor.
   */
  var GPTAd = function (ad, responsive) {
    // To not lose scope in responsive handler we need to use self.
    var self = this;

    // Set properties.
    self.breakpoint = null;
    self.domEl = document.getElementById(ad.domId);
    self.networkCode = ad.networkCode || ad.network_code;
    self.outOfPage = ad.outOfPage || ad.outofpage || false;
    self.refresh = ad.refresh || false;
    self.resizeListener = null;
    self.size = self.outOfPage ? [[0,0]] : ad.size;
    self.slot = {};
    self.slotDomEl = {};
    self.targetedAdUnit = ad.targetedAdUnit || ad.targeted_ad_unit;
    self.targeting = ad.targeting || null;
    self.populated = {};
    self.renderEndedCallback = ad.renderEndedCallback || null;
    self.skipPageTargeting = typeof ad.skipPageTargeting !== 'undefined' ? ad.skipPageTargeting : false;

    // Add responsive listener if the ad has breakpoints and is responsive.
    if (responsive) {
      var count = 0;
      for (var i in self.size) { 
        if (++count > 1) {
          // Create named anonymous function to preserve scope in listener.
          var resizeListener = function () { self.responsiveHandler() };
          if (window.addEventListener) {
            window.addEventListener('resize', resizeListener, false);
          }
          else if (window.attachEvent) {
            window.attachEvent('onresize', resizeListener);
          }
          break;
        }
      }
    }

    // Determine the initial breakpoint to use and create the dom element.
    self.setBreakpoint().getSlotDomEl();
  };

  /**
   * Define slot at breakpoint.
   */
  GPTAd.prototype.defineSlot = function (breakpoint) {
    breakpoint = this.getBreakpoint(breakpoint);
    this.slot[breakpoint] = Drupal.GPT.defineSlot({
        domId: this.getSlotDomId(breakpoint)
      , outOfPage: this.outOfPage
      , size: this.getSize(breakpoint)
      , targeting: this.targeting
      , unitName: this.getUnitName()
      , skipPageTargeting: this.skipPageTargeting
    });
  };
  
  /**
   * Create a polyfill for the custom events to work with IE
   */
  if (document.addEventListener) {
    // Create a custom event function for IE to use (IE9+)
    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    };
    // Create the prototype.
    CustomEvent.prototype = window.Event.prototype;
    // Ad the custom even to the window.
    window.CustomEvent = CustomEvent;
  }
  else {
    // Create an event listener for IE8.
    Event.trigger = function (eventName) {
      if(document.createEvent) {
        var event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
        document.dispatchEvent(event);
      }
      else {
        eval('document.documentElement.' + eventName + '++');
      }
    }
  }

  /**
   * Make the slot and relevant parents display/hide.
   */
  GPTAd.prototype.display = function () {
    var details, slotEl = this.slotDomEl[this.breakpoint]
      , populated
      , event;
    // If populated.
    if (this.populated[slotEl.id]) {
      removeClass(slotEl, 'gpt-hidden-ad');
      removeClass(this.domEl, 'gpt-hidden-ad');
      populated = true;
    }
    // Else not populated.
    else {
      addClass(slotEl, 'gpt-hidden-ad');
      addClass(this.domEl, 'gpt-hidden-ad');
      populated = false;
    }
    // Create the details for inclusion.
    details = { 'detail': {
      'populated': populated,
      'el': this.domEl
    }};
    // We must use a timeout to ensure the JS stack allows any
    // addEventListener()s to bind before we dispatch.
    window.setTimeout(function () {
      if (document.addEventListener) {
        event = new CustomEvent('gptAdDisplay', details);
        document.dispatchEvent(event);
      }
      else {
        window.gptAdUnit = details;
        Event.trigger('gptAdDisplay');
      }
    }, 100);
  };

  /**
   * Helper to retrieve current breakpoint or sanitize passed breakpoint.
   */
  GPTAd.prototype.getBreakpoint = function (breakpoint) {
    if (typeof breakpoint === 'undefined') {
      breakpoint = this.breakpoint;
    }
    else {
      this.validBreakpoint(breakpoint);
    }
    return breakpoint;
  }

  /**
   * Retrieve ad slot DOM element at breakpoint, creates if needed.
   */
  GPTAd.prototype.getSlotDomEl = function (breakpoint) {
    var self = this;
    breakpoint = this.getBreakpoint(breakpoint);
    // If the dom element for this breakpoint does not exist.
    if (!(breakpoint in this.slotDomEl)) {
      var domId = self.getSlotDomId(breakpoint)
        , el = null;

      // Create the div for the slot if it doesn't exist.
      // TODO: May need document.write here for sync, doesn't seem to be needed.
      el = document.createElement('div');
      el.id = domId;
      self.domEl.appendChild(el);

      // Store the element.
      self.slotDomEl[breakpoint] = el;

      // Create the ad if there is a size for it.
      if (self.size[breakpoint] !== null || self.outOfPage) {
        Drupal.GPT.fetchSlot(self.getSlotDomId(breakpoint), self.defineSlot, self);
      }
      // If there is not a size for it, hide it and the parent and set its
      // populated value.
      else {
        self.populated[domId] = false;
        self.display();
      }
    }

    return self.slotDomEl[breakpoint];
  };

  /**
   * Concatenate domId with specified breakpoint to get element ID.
   */
  GPTAd.prototype.getSlotDomId = function (breakpoint) {
    breakpoint = this.getBreakpoint(breakpoint);
    return this.domEl.id + '-' + breakpoint;
  };

  /**
   * Fetch the ad size.
   */
  GPTAd.prototype.getSize = function (breakpoint) {
    breakpoint = this.getBreakpoint(breakpoint);
    return this.size[breakpoint];
  };

  /**
   * Retrieve the unit name.
   */
  GPTAd.prototype.getUnitName = function () {
    return '/' + this.networkCode + '/' + this.targetedAdUnit;
  };

  /**
   * Determine if the ad unit has a slot at the breakpoint.
   */
  GPTAd.prototype.hasSlot = function (breakpoint) {
    breakpoint = this.getBreakpoint(breakpoint);
    return typeof this.slot[breakpoint] !== 'undefined';
  }

  /**
   * Retrieve the current slot that should be refreshed.
   */
  GPTAd.prototype.refreshSlot = function () {
    // Validate the ad can refresh and if its current slot has a size.
    if (this.refresh && this.getSize(this.breakpoint)) {
      return this.slot[this.breakpoint];
    }
  };

  /**
   * Resize ad for responsive support.
   */
  GPTAd.prototype.responsiveHandler = function () {
    var breakpoint = null;

    // Determine breakpoint for current size.
    for (var i in this.size) {
      if (i <= document.documentElement.clientWidth) {
        breakpoint = i;
      }
      else {
        break;
      }
    }
    // If the ad breakpoint needs to change.
    if (breakpoint !== this.breakpoint) {
      // Update the breakpoint, so this won't trigger again.
      this.breakpoint = breakpoint;
      // Hide all ads that are not being displayed.
      var current = this.getSlotDomEl();
      for (var j in this.slotDomEl) {
        if (this.slotDomEl[j].id !== current.id) {
          addClass(this.slotDomEl[j], 'gpt-hidden-ad');
        }
        else{
          removeClass(this.slotDomEl[j], 'gpt-hidden-ad');
        }
      }
      // Display or hide current slot el if it was previously defined for the
      // breakpoint, see GPT.prototype.defineSlot.
      if (typeof this.populated[current.id] !== 'undefined') {
        this.display();
      }
    }
  };

  /**
   * Determine the current breakpoint.
   */
  GPTAd.prototype.setBreakpoint = function (breakpoint) {
    // If a breakpoint was specified, attempt to use it.
    if (typeof breakpoint !== 'undefined') {
      this.validBreakpoint(breakpoint).breakpoint = breakpoint;
    }
    // Otherwise determine the current breakpoint.
    else {
      for (var i in this.size) {
        if (i <= document.documentElement.clientWidth) {
          this.breakpoint = i;
        }
        else {
          break;
        }
      }
    }
    return this;
  };

  /**
   * Validate the breakpoint specified exists.
   */
  GPTAd.prototype.validBreakpoint = function (breakpoint) {
    if (breakpoint in this.size) {
      return this;
    }
    throw 'Invalid breakpoint specified.';
  };

  // Expose GPTAd to global scope through the Drupal object.
  Drupal.GPTAdClass = GPTAd;

  /**
   * Define GPT class constructor.
   */
  var GPT = function (options) {
    var self = this;
    options = options || {};
    self.pageOptions = {
        // Asynchronous mode.
        async: typeof options.async !== 'undefined' ? options.async : 1
        // Collapse div elements when there is no creative.
      , collapse: options.collapse || 0
        // Default network code for ad slots on the page.
      , networkCode: options.networkCode || options.network_code
        // Refreshing ads allowed.
      , refresh: typeof options.refresh !== 'undefined' ? options.async : 1
        // Whether responsive ads can be supported, condition below.
      , responsive: false
        // Single request architecture.
      , sra: typeof options.sra !== 'undefined' ? options.sra : 1
        // Page level targeting settings.
      , targeting: options.targeting || {}
        // Default targeted ad unit for ad slots on the page.
      , targetedAdUnit: options.targetedAdUnit || options.targeted_ad_unit
      , pageLevelTargeting: typeof options.pageLevelTargeting !== 'undefined' ? options.pageLevelTargeting : true
    };
    if (this.isIE8OrWorse()) {
      self.pageOptions.sra = 1;
    }
    self.ads = {};
    self.initialized = false;

    // This is a bit wonky, but it's private.
    // Different init if async without SRA, if we try to use the async init
    // with SRA on some page loads googletag has not loaded from the external
    // JS before jQuery's .ready() occurs and .load() is too slow.
    if (self.pageOptions.async && !self.pageOptions.sra) {
      (function () {
        window.googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
        var gads = document.createElement("script");
        gads.async = self.pageOptions.async;
        gads.type = "text/javascript";
        var useSSL = "https:" == document.location.protocol;
        gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
        var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(gads, node);
      })();
      // Responsive ads can only be supported if async is enabled and SRA is
      // disabled.
      self.pageOptions.responsive = true;
    }
    else {
      (function () {
        var useSSL = 'https:' == document.location.protocol;
        var src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
      })();
    }
  };

  /**
   * Return true if browser is IE and version 8 or older.
   */
  GPT.prototype.isIE8OrWorse = function () {
    var rv = -1;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(navigator.userAgent) != null) {
      rv = parseFloat(RegExp.$1);
    }

    return (rv > 0 && rv <=8);
  }

  /**
   * Define a GPT slot object.
   *
   * In most cases you should not use this method directly but instead use
   * registerSlot().
   */
  GPT.prototype.defineSlot = function (o) {
    var self = Drupal.GPT
      , slot = null
      , targeting = {}
      // We can't do if (targeting) so we'd have to use convoluted or slow
      // methods to tell if it is populated at certain stages, instead we just
      // use a boolean - inelegant but fast.
      , populated = false;

    if (o.size === null && !o.outOfPage) {
      return;
    }

    if (o.outOfPage) {
      slot = googletag.defineOutOfPageSlot(o.unitName, o.domId);
    }
    else {
      slot = googletag.defineSlot(o.unitName, o.size, o.domId);
    }

    if (slot) {
      slot.addService(googletag.pubads());
      // Apply page level targeting to the slot if page level
      // targeting is disabled and the slot is not to skip it.
      if (!self.pageOptions.pageLevelTargeting && !o.skipPageTargeting) {
        // Note, we have to clone as the targeting object may be altered,
        // which would affect references if not cloned.
        cloneInto(self.pageOptions.targeting, targeting);
        populated = true;
      }
      // If the slot has targeting.
      if ('targeting' in o) {
        if (populated) {
          cloneInto(o.targeting, targeting);
        }
        else {
          // We may directly assign at this point as there will not be
          // any altering of targeting at this point, leaving references
          // unaffected.
          targeting = o.targeting;
          populated = true;
        }
      }
      if (populated) {
        self.setTargeting(slot, targeting);
      }
    }

    return slot;
  }

  /**
   * Retrieve ad slot DOM element, creates ad slot if non-existant.
   */
  GPT.prototype.fetchSlot = function (domId, callback, cbScope, cbArgs) {
    var self = this;

    // Create and load the ad.
    if (self.pageOptions.async) {
      // If GPT has already loaded ads on the site, render inline.
      if (self.initialized) {
        googletag.cmd.push(function () {
          callback.apply(cbScope, cbArgs);
          googletag.display(domId);
        });
      }
      // If GPT has not initialized then the ad will be displayed during
      // init.
    }
    else {
      // Define and display slot immediately for render, done inline.
      callback.apply(cbScope, cbArgs);
      googletag.display(domId);
    }
  }

  /**
   * Refresh all refreshable ad units on the page.
   */
  GPT.prototype.refresh = function () {
    // If not yet initialized then don't try to refresh.
    if (!this.initialized) {
      return;
    }

    // Only attempt refreshing if async and page enabled.
    if (!this.pageOptions.async || !this.pageOptions.refresh) {
      return;
    }

    var slots = [];
    for (var i in this.ads) {
      var slot = this.ads[i].refreshSlot();
      if (slot) {
        slots.push(slot);
      }
    }
    if (slots.length) {
      googletag.pubads().refresh(slots);
    }
  }

  /**
   * Register an element as an ad slot.
   */
  GPT.prototype.registerSlot = function (identifier, ad, callback) {
    var self = Drupal.GPT;

    if (typeof identifier !== 'string') {
      throw 'registerSlot(): Invalid identifier provided.';
    }

    if (typeof ad !== 'object') {
      throw 'registerSlot(): Invalid arg provided.';
    }

    if (typeof callback === 'function') {
      ad.renderEndedCallback = callback;
    }

    // Provide defaults from GPT page state.
    ad.networkCode = ad.networkCode || self.pageOptions.networkCode;
    ad.targetedAdUnit = ad.targetedAdUnit || self.pageOptions.targetedAdUnit;
    ad.domId = identifier;

    self.ads[identifier] = new Drupal.GPTAdClass(ad, self.pageOptions.responsive);
  };

  /**
   * Initialize GPT by enabling services.
   */
  GPT.prototype.run = function () {
    // When ran as a callback of googletag.cmd we lose scope...
    // this should be handled more elloquently instead of hard coding.
    var self = Drupal.GPT;

    // Only run once.
    if (self.initialized) {
      return;
    }

    // Define each slot registered. Note, when synchronous this will be empty.
    for (var i in self.ads) {
      self.ads[i].defineSlot();
    }

    // Set page level targeting.
    if (self.pageOptions.pageLevelTargeting) {
      self.setTargeting(googletag.pubads(), self.pageOptions.targeting);
    }

    if (self.pageOptions.async) {
      // Set collapse div elements when no creative.
      if (self.pageOptions.collapse) {
        googletag.pubads().collapseEmptyDivs();
      }

      // Set single request.
      if (self.pageOptions.sra) {
        googletag.pubads().enableSingleRequest();
      }
    }
    else {
      googletag.pubads().enableSyncRendering();
    }

    googletag.pubads().addEventListener('slotRenderEnded', function (event) {
      // We use a timeout to push this code to the end of the callstack, the
      // event.slot.b.d property is not populated until the end.
      window.setTimeout(function () {
        var el = document.getElementById(event.slot.b.d)
          , adObj = self.ads[el.parentNode.id];
        adObj.populated[event.slot.b.d] = !event.isEmpty;
        adObj.display();
        if (adObj.renderEndedCallback) {
          adObj.renderEndedCallback(event);
        }
      }, 8);
    });

    // Enable services.
    googletag.enableServices();

    // Render ads that are already registered, if async.
    if (self.pageOptions.async) {
      for (var j in self.ads) {
        if (self.ads[j].hasSlot()) {
          googletag.display(self.ads[j].getSlotDomId());
        }
      }
    }

    // We are now initialized. Note that this anonymous function is called
    // after the ads in the body register at runtime, which is why we need an
    // initialized property.
    self.initialized = true;
  };

  /**
   * Apply targeting object to a slot object or the pubads object.
   */
  GPT.prototype.setTargeting = function (obj, targeting) {
    for (var i in targeting) {
      var t = [];
      // Eval values if they need to be.
      for (var j = 0; j < targeting[i].length; j++) {
        if (typeof targeting[i][j] === 'object' ) {
          if (targeting[i][j].eval) {
            // Wrap eval in a try in case of error.
            try {
              t.push(eval(targeting[i][j].value));
            }
            catch (e) {}
          }
          else {
            t.push(targeting[i][j].value);
          }
        }
      }

      // Set either the only item, or the whole array.
      if (t.length === 1) {
        obj.setTargeting(i, t[0]);
      }
      else {
        obj.setTargeting(i, t);
      }
    }
  };

  // Expose GPT to global scope through the Drupal object.
  Drupal.GPTClass = GPT;
})();

/**
 * Refresh GPT ads.
 */
Drupal.behaviors.gpt = {
  attach: function (context, settings) {
    settings.gpt = settings.gpt || {};
    if (settings.gpt.notFirstRun) {
      // It's possible Drupal.GPT is not defined if critical values were missing.
      if (typeof Drupal.GPT !== 'undefined') {
        Drupal.GPT.refresh();
      }
    }
    else {
      settings.gpt.notFirstRun = true;
    }
  }
};

;
