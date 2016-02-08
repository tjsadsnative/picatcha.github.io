var BonnierAdsCirc = {
  addAd: function (container, position) {
    if (typeof Drupal.settings.bonnier_ads_circ.ad_blocks === 'object') {
      ad = {container: container, position: position};
      Drupal.settings.bonnier_ads_circ.ad_blocks.push(ad);
    }
  }
};

(function ($) {
  $(window).load(function () {
    var circOptions = Drupal.settings.bonnier_ads_circ;
    if (typeof circOptions.account === 'string' && typeof circOptions.server === 'string') {
      var data = {'acct': circOptions.account};
      if (typeof s === 'object' && s.channel.length > 0) {
        data['channel'] = s.channel;
      }
      data['url'] = window.location.protocol + "//" + window.location.host + window.location.pathname;
      var divMatch = [];
      $.ajax({
        url: circOptions.server + '/service/index.php',
        dataType: 'jsonp',
        type: 'GET',
        data: data,
        jsonp: 'callback',
        success: function (data) {
          $.each(circOptions.ad_blocks, function (i, v) {
            if (typeof data.positions[v.position] !== 'undefined') {
              $('div#' + v.container).html(data.positions[v.position]);
            }
          });
        }
      });
    }
  });
  // Allow adding circ into any drupal menus
  Drupal.behaviors.BonnnierCircMenu = {
    attach: function (context, settings) {
      // Loop thru each circ ads in the menu that has a value in circ ad menu
      $('ul.menu a[data-menu_circ_ads], ul.menu span[data-menu_circ_ads]').once('circMenu').parent('li').each(function(index, value) {
        // Grab the name of the circ ads
        var circName =  $(this).children('a, span').attr('data-menu_circ_ads');
        // Set name of container id for circ ads
        var circContainer = 'ad-manager-ad-menu-' + index;
        // Create the DOM element with ID and class
        var circMenu = '<div id="' + circContainer + '" class="ad-manager-ad bonnier-ads-circ-ads circ-menu"></div>';
        // Replace the link with the dom element.
        $(this).html(circMenu);
        // Intialize the circs for that dom inside of the menu link
        BonnierAdsCirc.addAd(circContainer, circName);
      });
      // We only want this code ran once on initial page build, for performance
      // we unset it after running once.
      // If this needs to ever run after initial page load we'll need to use a
      // static index variable and increment.
      delete Drupal.behaviors.BonnierCircMenu;
    }
  }; 
})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 *
 * Implement a modal form.
 *
 * @see modal.inc for documentation.
 *
 * This javascript relies on the CTools ajax responder.
 */

(function ($) {
  // Make sure our objects are defined.
  Drupal.CTools = Drupal.CTools || {};
  Drupal.CTools.Modal = Drupal.CTools.Modal || {};

  /**
   * Display the modal
   *
   * @todo -- document the settings.
   */
  Drupal.CTools.Modal.show = function(choice) {
    var opts = {};

    if (choice && typeof choice == 'string' && Drupal.settings[choice]) {
      // This notation guarantees we are actually copying it.
      $.extend(true, opts, Drupal.settings[choice]);
    }
    else if (choice) {
      $.extend(true, opts, choice);
    }

    var defaults = {
      modalTheme: 'CToolsModalDialog',
      throbberTheme: 'CToolsModalThrobber',
      animation: 'show',
      animationSpeed: 'fast',
      modalSize: {
        type: 'scale',
        width: .8,
        height: .8,
        addWidth: 0,
        addHeight: 0,
        // How much to remove from the inner content to make space for the
        // theming.
        contentRight: 25,
        contentBottom: 45
      },
      modalOptions: {
        opacity: .55,
        background: '#fff'
      }
    };

    var settings = {};
    $.extend(true, settings, defaults, Drupal.settings.CToolsModal, opts);

    if (Drupal.CTools.Modal.currentSettings && Drupal.CTools.Modal.currentSettings != settings) {
      Drupal.CTools.Modal.modal.remove();
      Drupal.CTools.Modal.modal = null;
    }

    Drupal.CTools.Modal.currentSettings = settings;

    var resize = function(e) {
      // When creating the modal, it actually exists only in a theoretical
      // place that is not in the DOM. But once the modal exists, it is in the
      // DOM so the context must be set appropriately.
      var context = e ? document : Drupal.CTools.Modal.modal;

      if (Drupal.CTools.Modal.currentSettings.modalSize.type == 'scale') {
        var width = $(window).width() * Drupal.CTools.Modal.currentSettings.modalSize.width;
        var height = $(window).height() * Drupal.CTools.Modal.currentSettings.modalSize.height;
      }
      else {
        var width = Drupal.CTools.Modal.currentSettings.modalSize.width;
        var height = Drupal.CTools.Modal.currentSettings.modalSize.height;
      }

      // Use the additionol pixels for creating the width and height.
      $('div.ctools-modal-content', context).css({
        'width': width + Drupal.CTools.Modal.currentSettings.modalSize.addWidth + 'px',
        'height': height + Drupal.CTools.Modal.currentSettings.modalSize.addHeight + 'px'
      });
      $('div.ctools-modal-content .modal-content', context).css({
        'width': (width - Drupal.CTools.Modal.currentSettings.modalSize.contentRight) + 'px',
        'height': (height - Drupal.CTools.Modal.currentSettings.modalSize.contentBottom) + 'px'
      });
    }

    if (!Drupal.CTools.Modal.modal) {
      Drupal.CTools.Modal.modal = $(Drupal.theme(settings.modalTheme));
      if (settings.modalSize.type == 'scale') {
        $(window).bind('resize', resize);
      }
    }

    resize();

    $('span.modal-title', Drupal.CTools.Modal.modal).html(Drupal.CTools.Modal.currentSettings.loadingText);
    Drupal.CTools.Modal.modalContent(Drupal.CTools.Modal.modal, settings.modalOptions, settings.animation, settings.animationSpeed);
    $('#modalContent .modal-content').html(Drupal.theme(settings.throbberTheme));
  };

  /**
   * Hide the modal
   */
  Drupal.CTools.Modal.dismiss = function() {
    if (Drupal.CTools.Modal.modal) {
      Drupal.CTools.Modal.unmodalContent(Drupal.CTools.Modal.modal);
    }
  };

  /**
   * Provide the HTML to create the modal dialog.
   */
  Drupal.theme.prototype.CToolsModalDialog = function () {
    var html = ''
    html += '  <div id="ctools-modal">'
    html += '    <div class="ctools-modal-content">' // panels-modal-content
    html += '      <div class="modal-header">';
    html += '        <a class="close" href="#">';
    html +=            Drupal.CTools.Modal.currentSettings.closeText + Drupal.CTools.Modal.currentSettings.closeImage;
    html += '        </a>';
    html += '        <span id="modal-title" class="modal-title">&nbsp;</span>';
    html += '      </div>';
    html += '      <div id="modal-content" class="modal-content">';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';

    return html;
  }

  /**
   * Provide the HTML to create the throbber.
   */
  Drupal.theme.prototype.CToolsModalThrobber = function () {
    var html = '';
    html += '  <div id="modal-throbber">';
    html += '    <div class="modal-throbber-wrapper">';
    html +=        Drupal.CTools.Modal.currentSettings.throbber;
    html += '    </div>';
    html += '  </div>';

    return html;
  };

  /**
   * Figure out what settings string to use to display a modal.
   */
  Drupal.CTools.Modal.getSettings = function (object) {
    var match = $(object).attr('class').match(/ctools-modal-(\S+)/);
    if (match) {
      return match[1];
    }
  }

  /**
   * Click function for modals that can be cached.
   */
  Drupal.CTools.Modal.clickAjaxCacheLink = function () {
    Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));
    return Drupal.CTools.AJAX.clickAJAXCacheLink.apply(this);
  };

  /**
   * Handler to prepare the modal for the response
   */
  Drupal.CTools.Modal.clickAjaxLink = function () {
    Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));
    return false;
  };

  /**
   * Submit responder to do an AJAX submit on all modal forms.
   */
  Drupal.CTools.Modal.submitAjaxForm = function(e) {
    var $form = $(this);
    var url = $form.attr('action');

    setTimeout(function() { Drupal.CTools.AJAX.ajaxSubmit($form, url); }, 1);
    return false;
  }

  /**
   * Bind links that will open modals to the appropriate function.
   */
  Drupal.behaviors.ZZCToolsModal = {
    attach: function(context) {
      // Bind links
      // Note that doing so in this order means that the two classes can be
      // used together safely.
      /*
       * @todo remimplement the warm caching feature
       $('a.ctools-use-modal-cache', context).once('ctools-use-modal', function() {
         $(this).click(Drupal.CTools.Modal.clickAjaxCacheLink);
         Drupal.CTools.AJAX.warmCache.apply(this);
       });
        */

      $('area.ctools-use-modal, a.ctools-use-modal', context).once('ctools-use-modal', function() {
        var $this = $(this);
        $this.click(Drupal.CTools.Modal.clickAjaxLink);
        // Create a drupal ajax object
        var element_settings = {};
        if ($this.attr('href')) {
          element_settings.url = $this.attr('href');
          element_settings.event = 'click';
          element_settings.progress = { type: 'throbber' };
        }
        var base = $this.attr('href');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
      });

      // Bind buttons
      $('input.ctools-use-modal, button.ctools-use-modal', context).once('ctools-use-modal', function() {
        var $this = $(this);
        $this.click(Drupal.CTools.Modal.clickAjaxLink);
        var button = this;
        var element_settings = {};

        // AJAX submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = Drupal.CTools.Modal.findURL(this);
        element_settings.event = 'click';

        var base = $this.attr('id');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

        // Make sure changes to settings are reflected in the URL.
        $('.' + $(button).attr('id') + '-url').change(function() {
          Drupal.ajax[base].options.url = Drupal.CTools.Modal.findURL(button);
        });
      });

      // Bind our custom event to the form submit
      $('#modal-content form', context).once('ctools-use-modal', function() {
        var $this = $(this);
        var element_settings = {};

        element_settings.url = $this.attr('action');
        element_settings.event = 'submit';
        element_settings.progress = { 'type': 'throbber' }
        var base = $this.attr('id');

        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        Drupal.ajax[base].form = $this;

        $('input[type=submit], button', this).click(function(event) {
          Drupal.ajax[base].element = this;
          this.form.clk = this;
          // An empty event means we were triggered via .click() and
          // in jquery 1.4 this won't trigger a submit.
          if (event.bubbles == undefined) {
            $(this.form).trigger('submit');
            return false;
          }
        });
      });

      // Bind a click handler to allow elements with the 'ctools-close-modal'
      // class to close the modal.
      $('.ctools-close-modal', context).once('ctools-close-modal')
        .click(function() {
          Drupal.CTools.Modal.dismiss();
          return false;
        });
    }
  };

  // The following are implementations of AJAX responder commands.

  /**
   * AJAX responder command to place HTML within the modal.
   */
  Drupal.CTools.Modal.modal_display = function(ajax, response, status) {
    if ($('#modalContent').length == 0) {
      Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(ajax.element));
    }
    $('#modal-title').html(response.title);
    // Simulate an actual page load by scrolling to the top after adding the
    // content. This is helpful for allowing users to see error messages at the
    // top of a form, etc.
    $('#modal-content').html(response.output).scrollTop(0);
    Drupal.attachBehaviors();
  }

  /**
   * AJAX responder command to dismiss the modal.
   */
  Drupal.CTools.Modal.modal_dismiss = function(command) {
    Drupal.CTools.Modal.dismiss();
    $('link.ctools-temporary-css').remove();
  }

  /**
   * Display loading
   */
  //Drupal.CTools.AJAX.commands.modal_loading = function(command) {
  Drupal.CTools.Modal.modal_loading = function(command) {
    Drupal.CTools.Modal.modal_display({
      output: Drupal.theme(Drupal.CTools.Modal.currentSettings.throbberTheme),
      title: Drupal.CTools.Modal.currentSettings.loadingText
    });
  }

  /**
   * Find a URL for an AJAX button.
   *
   * The URL for this gadget will be composed of the values of items by
   * taking the ID of this item and adding -url and looking for that
   * class. They need to be in the form in order since we will
   * concat them all together using '/'.
   */
  Drupal.CTools.Modal.findURL = function(item) {
    var url = '';
    var url_class = '.' + $(item).attr('id') + '-url';
    $(url_class).each(
      function() {
        var $this = $(this);
        if (url && $this.val()) {
          url += '/';
        }
        url += $this.val();
      });
    return url;
  };


  /**
   * modalContent
   * @param content string to display in the content box
   * @param css obj of css attributes
   * @param animation (fadeIn, slideDown, show)
   * @param speed (valid animation speeds slow, medium, fast or # in ms)
   */
  Drupal.CTools.Modal.modalContent = function(content, css, animation, speed) {
    // If our animation isn't set, make it just show/pop
    if (!animation) {
      animation = 'show';
    }
    else {
      // If our animation isn't "fadeIn" or "slideDown" then it always is show
      if (animation != 'fadeIn' && animation != 'slideDown') {
        animation = 'show';
      }
    }

    if (!speed) {
      speed = 'fast';
    }

    // Build our base attributes and allow them to be overriden
    css = jQuery.extend({
      position: 'absolute',
      left: '0px',
      margin: '0px',
      background: '#000',
      opacity: '.55'
    }, css);

    // Add opacity handling for IE.
    css.filter = 'alpha(opacity=' + (100 * css.opacity) + ')';
    content.hide();

    // if we already ahve a modalContent, remove it
    if ( $('#modalBackdrop')) $('#modalBackdrop').remove();
    if ( $('#modalContent')) $('#modalContent').remove();

    // position code lifted from http://www.quirksmode.org/viewport/compatibility.html
    if (self.pageYOffset) { // all except Explorer
    var wt = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      var wt = document.documentElement.scrollTop;
    } else if (document.body) { // all other Explorers
      var wt = document.body.scrollTop;
    }

    // Get our dimensions

    // Get the docHeight and (ugly hack) add 50 pixels to make sure we dont have a *visible* border below our div
    var docHeight = $(document).height() + 50;
    var docWidth = $(document).width();
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    if( docHeight < winHeight ) docHeight = winHeight;

    // Create our divs
    $('body').append('<div id="modalBackdrop" style="z-index: 1000; display: none;"></div><div id="modalContent" style="z-index: 1001; position: absolute;">' + $(content).html() + '</div>');

    // Keyboard and focus event handler ensures focus stays on modal elements only
    modalEventHandler = function( event ) {
      target = null;
      if ( event ) { //Mozilla
        target = event.target;
      } else { //IE
        event = window.event;
        target = event.srcElement;
      }

      var parents = $(target).parents().get();
      for (var i = 0; i < parents.length; ++i) {
        var position = $(parents[i]).css('position');
        if (position == 'absolute' || position == 'fixed') {
          return true;
        }
      }
      if( $(target).filter('*:visible').parents('#modalContent').size()) {
        // allow the event only if target is a visible child node of #modalContent
        return true;
      }
      if ( $('#modalContent')) $('#modalContent').get(0).focus();
      return false;
    };
    $('body').bind( 'focus', modalEventHandler );
    $('body').bind( 'keypress', modalEventHandler );

    // Create our content div, get the dimensions, and hide it
    var modalContent = $('#modalContent').css('top','-1000px');
    var mdcTop = wt + ( winHeight / 2 ) - (  modalContent.outerHeight() / 2);
    var mdcLeft = ( winWidth / 2 ) - ( modalContent.outerWidth() / 2);
    $('#modalBackdrop').css(css).css('top', 0).css('height', docHeight + 'px').css('width', docWidth + 'px').show();
    // IE9 bug: modalContent may disappear due to width being auto (0px) so we set it explicitly
    modalContent.css('width', modalContent.outerWidth() + 'px');
    modalContent.css({top: mdcTop + 'px', left: mdcLeft + 'px'}).hide()[animation](speed);

    // Bind a click for closing the modalContent
    modalContentClose = function(){close(); return false;};
    $('.close').bind('click', modalContentClose);

    // Bind a keypress on escape for closing the modalContent
    modalEventEscapeCloseHandler = function(event) {
      if (event.keyCode == 27) {
        close();
        return false;
      }
    };

    $(document).bind('keydown', modalEventEscapeCloseHandler);

    // Close the open modal content and backdrop
    function close() {
      // Unbind the events
      $(window).unbind('resize',  modalContentResize);
      $('body').unbind( 'focus', modalEventHandler);
      $('body').unbind( 'keypress', modalEventHandler );
      $('.close').unbind('click', modalContentClose);
      $('body').unbind('keypress', modalEventEscapeCloseHandler);
      $(document).trigger('CToolsDetachBehaviors', $('#modalContent'));

      // Set our animation parameters and use them
      if ( animation == 'fadeIn' ) animation = 'fadeOut';
      if ( animation == 'slideDown' ) animation = 'slideUp';
      if ( animation == 'show' ) animation = 'hide';

      // Close the content
      modalContent.hide()[animation](speed);

      // Remove the content
      $('#modalContent').remove();
      $('#modalBackdrop').remove();
    };

    // Move and resize the modalBackdrop and modalContent on resize of the window
     modalContentResize = function(){
      // Get our heights
      var docHeight = $(document).height();
      var docWidth = $(document).width();
      var winHeight = $(window).height();
      var winWidth = $(window).width();
      if( docHeight < winHeight ) docHeight = winHeight;

      // Get where we should move content to
      var modalContent = $('#modalContent');
      var mdcTop =  $(document).scrollTop() + ( winHeight / 2 ) - ( modalContent.outerHeight() / 2); 
      var mdcLeft = $(document).scrollLeft() + ( winWidth / 2 ) - ( modalContent.outerWidth() / 2); 

      if(mdcLeft < 0) { mdcLeft = 0; }

      // Apply the changes
      $('#modalBackdrop').css('height', docHeight + 'px').css('width', docWidth + 'px').show();
      modalContent.css('top', mdcTop + 'px').css('left', mdcLeft + 'px').show();
    };
    $(window).bind('resize', modalContentResize);

    $('#modalContent').focus();
  };

  /**
   * unmodalContent
   * @param content (The jQuery object to remove)
   * @param animation (fadeOut, slideUp, show)
   * @param speed (valid animation speeds slow, medium, fast or # in ms)
   */
  Drupal.CTools.Modal.unmodalContent = function(content, animation, speed)
  {
    // If our animation isn't set, make it just show/pop
    if (!animation) { var animation = 'show'; } else {
      // If our animation isn't "fade" then it always is show
      if (( animation != 'fadeOut' ) && ( animation != 'slideUp')) animation = 'show';
    }
    // Set a speed if we dont have one
    if ( !speed ) var speed = 'fast';

    // Unbind the events we bound
    $(window).unbind('resize', modalContentResize);
    $('body').unbind('focus', modalEventHandler);
    $('body').unbind('keypress', modalEventHandler);
    $('.close').unbind('click', modalContentClose);
    $(document).trigger('CToolsDetachBehaviors', $('#modalContent'));

    // jQuery magic loop through the instances and run the animations or removal.
    content.each(function(){
      if ( animation == 'fade' ) {
        $('#modalContent').fadeOut(speed, function() {
          $('#modalBackdrop').fadeOut(speed, function() {
            $(this).remove();
          });
          $(this).remove();
        });
      } else {
        if ( animation == 'slide' ) {
          $('#modalContent').slideUp(speed,function() {
            $('#modalBackdrop').slideUp(speed, function() {
              $(this).remove();
            });
            $(this).remove();
          });
        } else {
          $('#modalContent').remove();
          $('#modalBackdrop').remove();
        }
      }
    });
  };

$(function() {
  Drupal.ajax.prototype.commands.modal_display = Drupal.CTools.Modal.modal_display;
  Drupal.ajax.prototype.commands.modal_dismiss = Drupal.CTools.Modal.modal_dismiss;
});

})(jQuery);
;
/**
* Provide the HTML to create the modal dialog.
*/
Drupal.theme.prototype.ModalFormsPopup = function () {
  var html = '';

  html += '<div id="ctools-modal" class="popups-box">';
  html += '  <div class="ctools-modal-content modal-forms-modal-content">';
  html += '    <div class="popups-container">';
  html += '      <div class="modal-header popups-title">';
  html += '        <span id="modal-title" class="modal-title"></span>';
  html += '        <span class="popups-close close">' + Drupal.CTools.Modal.currentSettings.closeText + '</span>';
  html += '        <div class="clear-block"></div>';
  html += '      </div>';
  html += '      <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  return html;
}
;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
// =======================================================================================
// MOBILE DEVICE RECOGNITION & DEVICE CAPTURE 
// =======================================================================================
var deviceRec = {
  // --------------------------------------------------------------------------------------------------
  // --- Change DisplayValues variable to Y to display all values in table in browser - for testing ---
  // --------------------------------------------------------------------------------------------------
  displayValues : true,
  userAgent : navigator.userAgent,
  output : '',
  device : '',
  deviceInfo : null,
  mobileBrowser : 0,
  storeAsVariable : false,
  trackName : '',
  trackUrl : '',
  debug : false,
  // =====================================================================================
  // --- STEP 1 - Parse User_Agent string to identify the DEVICE ---
  // --- The first three segments of the User_Agent are parsed from complete string 
  // ---    then the 'semi-colon + space' combinations are replaced with forward slashes '/'  to make
  // ---    data import into marketing database easier 
  // --- Screen resolution taken from Browser
  // =====================================================================================   
  buildDevice : function() {
    
    var screen_res = screen.width + 'x' + screen.height;
    var user_agent = this.userAgent;
    var deviceArray = new Array();
    var replaceSpace = '';
    var systemInfo = user_agent.match(/\(([^\)]+)\)/);
    if (systemInfo.length > 1) {
      var infoArray = systemInfo[1].split(';');
      if (infoArray.length > 0) {
        var count = 0;
        for (var i = 0; i < infoArray.length; i++) {
          // Just grabbing the first 3 delimiters
          if (count == 3) {
            break;
          }
          // Trim value and replace spaces with url encode space value
          replaceSpace = infoArray[i].replace(/\s+/g, '');
          // We don't want the U or I status in the string which are single character string
          if (replaceSpace.length > 1) {
            deviceArray[count] = replaceSpace;
            count++;
          } 
        }
      }
    }
    if (this.device == 'kindle-fire' || this.device == 'nook-color') {
      // Set the device to kindle fire or nook color
      deviceArray[0] = this.device;
    }
    // Pipe is not allowed in URL (RFC1738), must encode
    // Add pipe seperators in array
    var language = window.navigator.userLanguage || window.navigator.language;
    language = language.toLowerCase();

    this.setDeviceCookie('langauge', language);
    deviceArray[2] = language; 
    var DeviceStr = deviceArray.join('/');
    this.setDeviceCookie('device', this.device);
    this.setDeviceCookie('resolutions', screen_res);
   
    DeviceStr += '/' + screen_res;
    // Format as Device type/Operating System/Language/Screen Resolutions
    // eg: ipad/CPU OS 4_3_3likeMacOSX/en-us/1280x1024
    this.deviceInfo = DeviceStr;
  },
  // ======================================================================
  // --- STEP 2 - Identify if MOBILE device and what device ---
  // ======================================================================
  detectMobileDevice : function() {
    var mobile_browser = false;
    var user_agent = navigator.userAgent;
    var user_agent_lower = user_agent.toLowerCase();
    var deviceArray = ['pda','wap','palm','iphone','ipad','kindle fire','kindle','silk-accelerated','nook','android','up.browser','up.link','mmp','symbian','smartphone','midp','windows ce','mobile','mini','phone'];
    for (var x = 0; x <= deviceArray.length; x++)  { 
      if(user_agent_lower.indexOf(deviceArray[x]) > -1) {
        this.device = deviceArray[x];
        // Silk accelerted is the kindle version of cloud base browsing
        if (this.device == 'silk-accelerated' || this.device == 'kindle fire') {
          this.device = 'kindle-fire';
        }
        else if (this.device == 'rim') {
          // Set all RIM devices to blackberry
          this.device = 'blackberry';
        }
        mobile_browser = true;
        break;
      }
    }
    // Nook has some ridicolous user agent
    var nook_array = ['mozilla', 'linux', 'applewebkit', 'khtml', 'gecko', 'safari'];
    var nook_match = 0;
    if (!mobile_browser) {
      for (var x = 0; x <= nook_array.length; x++)  {
        if(user_agent_lower.indexOf(nook_array[x])> -1) {
          // Must match all in array and if there is a desktop mode(intel) or tablet mode (android)
          nook_match++;
          if (nook_match == nook_array.length && (user_agent_lower.indexOf('android')> -1 || user_agent_lower.indexOf('intel')> -1) ) {
            this.device = 'nook-color';
            mobile_browser = true;
          }
        }
        else{
          // Miss one or more keywords in the user agent
          break;
        }
      }
    }  

    if (!mobile_browser) {
      // If we are not already mobile, check the first four characters of user agent
      // against another bunch of devices.
      var mobile_ua = user_agent_lower.substring(0,4);
      var AgentsArray = [ 'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
                    'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
                    'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
                    'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
                    'newt','noki','oper','palm','pana','pant','phil','play','port','prox',
                    'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
                    'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
                    'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
                    'vwapr','webc','winw','winw','xda ','xda-' ];

      for (x = 0; x <= AgentsArray.length; x++) { 
        if(mobile_ua.indexOf(AgentsArray[x]) > 0) {
          this.device = 'other';
          mobile_browser = true;
          break;
        }
      }
    }

    // Not sure why we switch back to non-mobile browser is user agent containsi
    // "windows". Newer Windows mobile phones will contain that string, so this
    // is probably deprecated.
    // http://wmpoweruser.com/developers-changes-to-user-agent-string-of-ie9-mobile-on-windows-phone-mango/
    //if (user_agent_lower.indexOf('windows') > 0) {
    //  mobile_browser = 0;
    //}
    this.mobileBrowser = mobile_browser;
  },
  cookies : {
    setCookie : function(name, value, exdays){
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
      document.cookie = name + "=" + c_value;
    },
    getCookie : function(name){
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++) {
        x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x = x.replace(/^\s+|\s+$/g,"");
        if (x == name) {
          return unescape(y);
        }
      }
    },
    deleteCookie : function(name){
      this.setCookie(name, null, -1000);
    }
  },
  getAllDeviceCookie : function (name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    var data = {};
    for (i=0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x = x.replace(/^\s+|\s+$/g,"");
      var regex = new RegExp( '^' + name + "\\[([a-z]*)\\]$");
      if (regex.exec(x)) {
        data[x] = unescape(y);
      }
      else if (x == name) {
        return unescape(y);
      }
    }
    return data;
  }, 
  setDeviceCookie : function (name, value, exdays) {
    this.cookies.setCookie('deviceRecognition[' + name + ']', value, exdays);
  },
  getDeviceCookie : function (name) {
    return this.cookies.getCookie('deviceRecognition[' + name + ']');
  },
  deleteDeviceCookie : function (name) {
    var cookieData = this.getAllDeviceCookie(name);
    
    if (typeof(cookieData) != 'undefined') {
      if (typeof(cookieData) == 'object') {
        jQuery.each(cookieData, function(key, value){
          // Delete all cookies in object
          deviceRec.cookies.deleteCookie(key);
        });
      }
      else{
        // Delete a single cookie
        deviceRec.cookies.deleteCookie(name);
      }
    } 
  },
  // ====================================================================================================
  // --- STEP 3 - Create servlet string and print pixel for Silverpop Engage conversion tracking 
  // --- Calls COT servlet with parameters that were stored in a session
  // ====================================================================================================
  /**
   * Initialized value
   */
  init : function () {
    // Always run the detect mobile device code, so we can share the variable with other js that wants to access the objects
    this.detectMobileDevice();
    // Only run if no cookie is set
    if(!this.getDeviceCookie('mobile')) {
      this.buildDevice();
      // set cookies only for mobile device
      this.setDeviceCookie('mobile', true);
    }
  }
};

// Uncomment line below to always fire even after first hit.
// deviceRec.deleteDeviceCookie('deviceRecognition');
// Track page title in link
/*
deviceRec.trackName = document.title;
// Track URL in link
deviceRec.trackUrl = document.location.href;
//Change value to true to see output test value
deviceRec.displayValues = false;
// run initialized object
deviceRec.init();
*/
;
// =======================================================================================
// DEVICE CAPTURE 
// 
// Author: Mark Crone, Bonnier Corp 
// 
// Step 1 - Identify if MOBILE device
//    Algorithm is lightweight � code is mostly based on a list 
//      of about 90 well-known mobile browser User-Agent string snippets, 
//      with a couple of special cases for Opera Mini, 
//      the W3C Default Delivery Context and some other Windows browsers. 
//    The code also looks to see if the browser advertises WAP capabilities as a hint.

// Step 2-3 - Get screen resolution and device information from User_Agent

// Step 4-5 - Create servlet to and print pixel to activate Silverpop conversion tracking
// Revised (06/27/2012)
// =======================================================================================
var csTracking = {
  // --------------------------------------------------------------------------------------------------
  // --- Change DisplayValues variable to Y to display all values in table in browser - for testing ---
  // --------------------------------------------------------------------------------------------------
  displayValues : true,
  output : '',
  mobileBrowser : 0,
  storeAsVariable : false,
  trackName : '',
  trackUrl : '',
  // ====================================================================================================
  // --- STEP 3 - Read Silverpop values from Silverpop Click Thru ULR
  // ====================================================================================================

  // --- Attn: AMSTELNET 
  // --- spMailingID, spUSerID, spJobID and spReportID are NVP's passed from Silverpop in URL

  // Example of URL 
  //http://www.productdesign-biz.com/bonnier/devicerecognition_java_MASTER.php?spMailingID=4146475&spUserID=MTc4OTYwMTg4MjES1&spJobID=249958349&spReportId=MjQ5OTU4MzQ5S0
  readSilverpopNVPValues : function() {
    var parseUrl = {
      m : this.getParameterByName('spMailingID'),
      r : this.getParameterByName('spUserID'),
      j : this.getParameterByName('spJobID'),
      // --- Note small "d" on spReportId - Silverpop convention
      rj : this.getParameterByName('spReportId'),
      spPodId : this.getParameterByName('spPodID')
    };
    return parseUrl;
  },
  // ====================================================================================================
  // --- STEP 3 - Create servlet string and print pixel for Silverpop Engage conversion tracking 
  // --- Calls COT servlet with parameters that were stored in a session
  // ====================================================================================================

  // --- PARAMETER NOTES ---  
  // ---  1) 'servlet_loc' value is based on Pod2 - must be dynamic based on sending Pod
  // ---  2) 'Action' is a text to identify the detail as a Device Recognition string ---
  // ---  3) 'Detail' is the string identifying the Device, Operating System, etc
  createSilverpopServlet : function (deviceStr) {
    var servlet_loc = '';
    var img = false;
    var servlet = 'cot';
    var action = 'Device_Rec';
    var detail = deviceStr;
    var amount = '0.00';
    var conversion_post = false;
    var deviceType = 'Computer';
    var output = '';
    var url = this.readSilverpopNVPValues();
    // Grab the pod id and return the link depending on id
    servlet_loc = this.decodePodId(url.spPodId);

    var servlet_call = 
      servlet_loc + 
      servlet + 
      '?m='  + url.m + 
      '&r='   + url.r + 
      '&j='  + url.j + 
      '&rj=' + url.rj + 
      '&a='  + action +
      '&d='  + detail + 
      '&amt='+ amount;
    if (this.trackUrl != '') {
      servlet_call += '&name=' + this.trackUrl;
    }
    if (this.trackName != '') {
      servlet_call += '&s=' + this.trackName;
    }
    // --- Replacing 'spaces' with '+' 
    var new_str = servlet_call.replace(/[\s]/g,'+'); 
    servlet_call = new_str;
    if (url.m != null && url.r != null) {
      if (this.mobileBrowser > 0){
        conversion_post = true;
        deviceType =  'Mobile';
        img = document.createElement('img');
        img.setAttribute('alt', 'clickstream');
        img.setAttribute('src', servlet_call);
        img.setAttribute('height', '1');
        img.setAttribute('width', '1');
        output = '<img src="' + servlet_call + '" width="1" height="1" />';
      }
      if (this.displayValues) {
        output += '<table width="600">';
        output += '<tr><td colspan="2" width="30%" nowrap="nowrap"><strong>Conversion Tracking - Mobile Device Recognition</strong></td></tr>';
        output += '<tr><th align="right">Type of Device</th><td align=left>' + deviceType + '</td></tr>';
        output += '<tr><th align=right>Detail</th><td>' + detail + '</td></tr>';
        output += '<tr><th align=right>MailingID</th><td>' + url.m + '</td></tr>';
        output += '<tr><th align=right>UserID</th><td>' + url.r + '</td></tr>';
        output += '<tr><th align=right>JobID</th><td>' + url.j + '</td></tr>';
        output += '<tr><th align=right>ReportId</th><td>' +url.rj+ '</td></tr>';
        output += '<tr><th align=right>Did Conversion Post?</th><td>' + conversion_post + '</td></tr>';
        output += '</table>';
        output += '<p>Servlet_call = '+servlet_call+ '</p>';
      }
    }
    this.output = output;
    if (this.storeAsVariable && img) {
      // Store output as a variable
      return;
    }
    else if (img){
      // Write the output on screen
      var bodyTag = document.body;
      bodyTag.appendChild(img);
    }
  },
  decodePodId : function (id) {
    var return_link = '';
    switch (id) {
      case '010':
        return_link = 'http://sdm3.rm04.net/';
        break;
      case '01S':
        return_link = 'https://engage1.silverpop.com/';
        break;
      case '020':
        return_link = 'http://recp.rm05.net/';
        break;
      case '02S':
        return_link = 'https://engage2.silverpop.com/';
        break;
      case '030':
        return_link = 'http://recp.mkt31.net/';
        break;
      case '03S':
        return_link = 'https://engage3.silverpop.com/';
        break;
      default:
        return_link = 'http://recp.rm05.net/';
        break;
    }
    return return_link;
  },
  /**
   * http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript
   * Parses query string for get values.
   */
  getParameterByName : function (name) {
    var match = RegExp('[?&]' + name + '=([^&]*)')
    .exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  },
  /**
   * Initialized value
   */
  init : function () {
    if (typeof(deviceRec) == 'object' && deviceRec.deviceInfo != ''){
      deviceRec.debug = csTracking.getParameterByName('bctdebug');
      if (deviceRec.debug !== null) {
        alert(deviceRec.device);
      }
      if (!deviceRec.getDeviceCookie('spTracking')) {
        this.mobileBrowser = deviceRec.mobileBrowser;
        this.createSilverpopServlet(deviceRec.deviceInfo);
        deviceRec.setDeviceCookie('spTracking', deviceRec.deviceInfo);
      }
    }
  }
};;
function omniture_cleanup(json, pass) {
  // Defaults to 2 loops if none is pass
  var defaultPass = 2;
  if (typeof(pass) !== 'number') {
     pass = defaultPass;
  }
  else if (pass >= 10 && pass <= 0) {
    pass = defaultPass;
  }
  if (typeof json !== 'undefined') {
    // Number of pass it runs thru to parse undefined values in scode
    for (var i = 0; i < pass; i++) {
      for (var key in json) {
        if (json.hasOwnProperty(key)) {
          var omniValue = json[key];
          var data = key.split('.');
          // Only parse data beging with s.xxxx
          if (data.length == 2 && data[0] == 's') {
            if (s[data[1]].search('undefined') > -1) {
              // Re-evaluate the undefined value;
              s[data[1]] = eval(omniValue);
            }
            // Strip thru all the scode parameters with double colon with two pass
            s[data[1]] = s[data[1]].replace('::', ':').replace('::', ':');
          }
        }
      }
    }
  }
}

function omniture_update_scode(json, pass) {
  if (typeof(json) == 'object') {
    // Number of pass it runs thru to parse undefined values in scode
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var omniValue = json[key];
        var data = key.split('.');
        // Only parse data beging with s.xxxx
        if (data.length == 2 && data[0] == 's') {
          s[data[1]] = eval(omniValue);
        }
      }
    }
  }
  omniture_cleanup(json, pass);
}
;
/**
 * @file
 * Get the value for SOLR and go to the search results page.
 */

(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.solrSearchField =  {
  attach: function (context, settings) {
    $('.solr_client_form').submit(function(event) {
      event.preventDefault();

      var field = $(this).find('input.solr_client_form_search');
      if (field.length !== 1) {
        return;
      }
      if (field.val() === '') {
        alert (field[0].title);
        return false;
      }

      var path = $(this).find('input.solr_client_path').val();
      if (typeof path === 'undefined' || path === '') { path = 'find'; }
      window.location = Drupal.settings.basePath + path + '/' + field.val();
    });
  }
}

})(jQuery, Drupal, this, this.document);

;
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash -o ./dist/lodash.compat.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:b+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:b+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var a=e[u],i=r[u];if(a!==i){if(a>i||typeof a=="undefined")return 1;if(a<i||typeof i=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],a=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&a&&typeof a=="object")return false;for(u=l(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=l(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function a(n){return"\\"+Y[n]
}function i(){return v.pop()||[]}function l(){return y.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function f(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function c(n){n.length=0,v.length<w&&v.push(n)}function p(n){var t=n.l;t&&p(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,y.length<w&&y.push(n)}function s(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];
return u}function g(e){function v(n){return n&&typeof n=="object"&&!qe(n)&&we.call(n,"__wrapped__")?n:new y(n)}function y(n,t){this.__chain__=!!t,this.__wrapped__=n}function w(n){function t(){if(r){var n=s(r);je.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return xt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return ze(t,n),t}function Y(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!xt(n))return n;var a=he.call(n);if(!V[a]||!Le.nodeClass&&f(n))return n;
var l=Te[a];switch(a){case L:case z:return new l(+n);case W:case M:return new l(n);case J:return o=l(n.source,S.exec(n)),o.lastIndex=n.lastIndex,o}if(a=qe(n),t){var p=!r;r||(r=i()),u||(u=i());for(var g=r.length;g--;)if(r[g]==n)return u[g];o=a?l(n.length):{}}else o=a?s(n):Ye({},n);return a&&(we.call(n,"index")&&(o.index=n.index),we.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(a?Xe:tr)(n,function(n,a){o[a]=Y(n,t,e,r,u)}),p&&(c(r),c(u)),o):o}function nt(n){return xt(n)?Se(n):{}}function tt(n,t,e){if(typeof n!="function")return Ht;
if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(Le.funcNames&&(r=!n.name),r=r||!Le.funcDecomp,!r)){var u=be.call(n);Le.funcNames||(r=!A.test(u)),r||(r=B.test(u),ze(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=l?a:this;
if(u){var h=s(u);je.apply(h,arguments)}return(o||c)&&(h||(h=s(arguments)),o&&je.apply(h,o),c&&h.length<i)?(r|=16,et([e,p?r:-4&r,h,null,a,i])):(h||(h=arguments),f&&(e=n[g]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),xt(h)?h:n):e.apply(n,h))}var e=n[0],r=n[1],u=n[2],o=n[3],a=n[4],i=n[5],l=1&r,f=2&r,c=4&r,p=8&r,g=e;return ze(t,n),t}function rt(e,r){var u=-1,a=ht(),i=e?e.length:0,l=i>=_&&a===n,f=[];if(l){var c=o(r);c?(a=t,r=c):l=false}for(;++u<i;)c=e[u],0>a(r,c)&&f.push(c);return l&&p(r),f}function ot(n,t,e,r){r=(r||0)-1;
for(var u=n?n.length:0,o=[];++r<u;){var a=n[r];if(a&&typeof a=="object"&&typeof a.length=="number"&&(qe(a)||dt(a))){t||(a=ot(a,t,e));var i=-1,l=a.length,f=o.length;for(o.length+=l;++i<l;)o[f++]=a[i]}else e||o.push(a)}return o}function at(n,t,e,r,u,o){if(e){var a=e(n,t);if(typeof a!="undefined")return!!a}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&X[typeof n]||t&&X[typeof t]))return false;if(null==n||null==t)return n===t;var l=he.call(n),p=he.call(t);if(l==T&&(l=G),p==T&&(p=G),l!=p)return false;switch(l){case L:case z:return+n==+t;
case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case J:case M:return n==ie(t)}if(p=l==$,!p){var s=we.call(n,"__wrapped__"),g=we.call(t,"__wrapped__");if(s||g)return at(s?n.__wrapped__:n,g?t.__wrapped__:t,e,r,u,o);if(l!=G||!Le.nodeClass&&(f(n)||f(t)))return false;if(l=!Le.argsObject&&dt(n)?oe:n.constructor,s=!Le.argsObject&&dt(t)?oe:t.constructor,l!=s&&!(jt(l)&&l instanceof l&&jt(s)&&s instanceof s)&&"constructor"in n&&"constructor"in t)return false}for(l=!u,u||(u=i()),o||(o=i()),s=u.length;s--;)if(u[s]==n)return o[s]==t;
var h=0,a=true;if(u.push(n),o.push(t),p){if(s=n.length,h=t.length,(a=h==s)||r)for(;h--;)if(p=s,g=t[h],r)for(;p--&&!(a=at(n[p],g,e,r,u,o)););else if(!(a=at(n[h],g,e,r,u,o)))break}else nr(t,function(t,i,l){return we.call(l,i)?(h++,a=we.call(n,i)&&at(n[i],t,e,r,u,o)):void 0}),a&&!r&&nr(n,function(n,t,e){return we.call(e,t)?a=-1<--h:void 0});return u.pop(),o.pop(),l&&(c(u),c(o)),a}function it(n,t,e,r,u){(qe(t)?Dt:tr)(t,function(t,o){var a,i,l=t,f=n[o];if(t&&((i=qe(t))||er(t))){for(l=r.length;l--;)if(a=r[l]==t){f=u[l];
break}if(!a){var c;e&&(l=e(f,t),c=typeof l!="undefined")&&(f=l),c||(f=i?qe(f)?f:[]:er(f)?f:{}),r.push(t),u.push(f),c||it(f,t,e,r,u)}}else e&&(l=e(f,t),typeof l=="undefined"&&(l=t)),typeof l!="undefined"&&(f=l);n[o]=f})}function lt(n,t){return n+de(Fe()*(t-n+1))}function ft(e,r,u){var a=-1,l=ht(),f=e?e.length:0,s=[],g=!r&&f>=_&&l===n,h=u||g?i():s;for(g&&(h=o(h),l=t);++a<f;){var v=e[a],y=u?u(v,a,e):v;(r?!a||h[h.length-1]!==y:0>l(h,y))&&((u||g)&&h.push(y),s.push(v))}return g?(c(h.k),p(h)):u&&c(h),s}function ct(n){return function(t,e,r){var u={};
if(e=v.createCallback(e,r,3),qe(t)){r=-1;for(var o=t.length;++r<o;){var a=t[r];n(u,a,e(a,r,t),t)}}else Xe(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function pt(n,t,e,r,u,o){var a=1&t,i=4&t,l=16&t,f=32&t;if(!(2&t||jt(n)))throw new le;l&&!e.length&&(t&=-17,l=e=false),f&&!r.length&&(t&=-33,f=r=false);var c=n&&n.__bindData__;return c&&true!==c?(c=s(c),c[2]&&(c[2]=s(c[2])),c[3]&&(c[3]=s(c[3])),!a||1&c[1]||(c[4]=u),!a&&1&c[1]&&(t|=8),!i||4&c[1]||(c[5]=o),l&&je.apply(c[2]||(c[2]=[]),e),f&&Ee.apply(c[3]||(c[3]=[]),r),c[1]|=t,pt.apply(null,c)):(1==t||17===t?w:et)([n,t,e,r,u,o])
}function st(){Q.h=F,Q.b=Q.c=Q.g=Q.i="",Q.e="t",Q.j=true;for(var n,t=0;n=arguments[t];t++)for(var e in n)Q[e]=n[e];t=Q.a,Q.d=/^[^,]+/.exec(t)[0],n=ee,t="return function("+t+"){",e=Q;var r="var n,t="+e.d+",E="+e.e+";if(!t)return E;"+e.i+";";e.b?(r+="var u=t.length;n=-1;if("+e.b+"){",Le.unindexedChars&&(r+="if(s(t)){t=t.split('')}"),r+="while(++n<u){"+e.g+";}}else{"):Le.nonEnumArgs&&(r+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+e.g+";}}else{"),Le.enumPrototypes&&(r+="var G=typeof t=='function';"),Le.enumErrorProps&&(r+="var F=t===k||t instanceof Error;");
var u=[];if(Le.enumPrototypes&&u.push('!(G&&n=="prototype")'),Le.enumErrorProps&&u.push('!(F&&(n=="message"||n=="name"))'),e.j&&e.f)r+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",u.length&&(r+="if("+u.join("&&")+"){"),r+=e.g+";",u.length&&(r+="}"),r+="}";else if(r+="for(n in t){",e.j&&u.push("m.call(t, n)"),u.length&&(r+="if("+u.join("&&")+"){"),r+=e.g+";",u.length&&(r+="}"),r+="}",Le.nonEnumShadows){for(r+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)r+="n='"+e.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",e.j||(r+="||(!x[n]&&t[n]!==A[n])"),r+="){"+e.g+"}";
r+="}"}return(e.b||Le.nonEnumArgs)&&(r+="}"),r+=e.c+";return E",n("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",t+r+"}")(tt,q,ce,we,d,dt,qe,kt,Q.f,pe,X,$e,M,se,he)}function gt(n){return Ve[n]}function ht(){var t=(t=v.indexOf)===zt?n:t;return t}function vt(n){return typeof n=="function"&&ve.test(n)}function yt(n){var t,e;return!n||he.call(n)!=G||(t=n.constructor,jt(t)&&!(t instanceof t))||!Le.argsClass&&dt(n)||!Le.nodeClass&&f(n)?false:Le.ownLast?(nr(n,function(n,t,r){return e=we.call(r,t),false}),false!==e):(nr(n,function(n,t){e=t
}),typeof e=="undefined"||we.call(n,e))}function mt(n){return He[n]}function dt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&he.call(n)==T||false}function bt(n,t,e){var r=We(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function _t(n){var t=[];return nr(n,function(n,e){jt(n)&&t.push(e)}),t.sort()}function wt(n){for(var t=-1,e=We(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function jt(n){return typeof n=="function"}function xt(n){return!(!n||!X[typeof n])
}function Ct(n){return typeof n=="number"||n&&typeof n=="object"&&he.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&he.call(n)==M||false}function Et(n){for(var t=-1,e=We(n),r=e.length,u=Zt(r);++t<r;)u[t]=n[e[t]];return u}function Ot(n,t,e){var r=-1,u=ht(),o=n?n.length:0,a=false;return e=(0>e?Be(0,o+e):e)||0,qe(n)?a=-1<u(n,t,e):typeof o=="number"?a=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):Xe(n,function(n){return++r<e?void 0:!(a=n===t)}),a}function St(n,t,e){var r=true;if(t=v.createCallback(t,e,3),qe(n)){e=-1;
for(var u=n.length;++e<u&&(r=!!t(n[e],e,n)););}else Xe(n,function(n,e,u){return r=!!t(n,e,u)});return r}function At(n,t,e){var r=[];if(t=v.createCallback(t,e,3),qe(n)){e=-1;for(var u=n.length;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}}else Xe(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){if(t=v.createCallback(t,e,3),!qe(n)){var r;return Xe(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0}),r}e=-1;for(var u=n.length;++e<u;){var o=n[e];if(t(o,e,n))return o}}function Dt(n,t,e){if(t&&typeof e=="undefined"&&qe(n)){e=-1;
for(var r=n.length;++e<r&&false!==t(n[e],e,n););}else Xe(n,t,e);return n}function Nt(n,t,e){var r=n,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),qe(n))for(;u--&&false!==t(n[u],u,n););else{if(typeof u!="number")var o=We(n),u=o.length;else Le.unindexedChars&&kt(n)&&(r=n.split(""));Xe(n,function(n,e,a){return e=o?o[--u]:--u,t(r[e],e,a)})}return n}function Bt(n,t,e){var r=-1,u=n?n.length:0,o=Zt(typeof u=="number"?u:0);if(t=v.createCallback(t,e,3),qe(n))for(;++r<u;)o[r]=t(n[r],r,n);else Xe(n,function(n,e,u){o[++r]=t(n,e,u)
});return o}function Pt(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i>o&&(o=i)}}else t=null==t&&kt(n)?r:v.createCallback(t,e,3),Xe(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Rt(n,t,e,r){var u=3>arguments.length;if(t=v.createCallback(t,r,4),qe(n)){var o=-1,a=n.length;for(u&&(e=n[++o]);++o<a;)e=t(e,n[o],o,n)}else Xe(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)});return e}function Ft(n,t,e,r){var u=3>arguments.length;
return t=v.createCallback(t,r,4),Nt(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Zt(typeof e=="number"?e:0);return Dt(n,function(n){var e=lt(0,++t);r[t]=r[e],r[e]=n}),r}function $t(n,t,e){var r;if(t=v.createCallback(t,e,3),qe(n)){e=-1;for(var u=n.length;++e<u&&!(r=t(n[e],e,n)););}else Xe(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Lt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;for(t=v.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++
}else if(r=t,null==r||e)return n?n[0]:h;return s(n,0,Pe(Be(0,r),u))}function zt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Be(0,u+r):r||0}else if(r)return r=Kt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=v.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Be(0,t);return s(n,r)}function Kt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?v.createCallback(e,r,1):Ht,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Wt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=v.createCallback(e,r,3)),ft(n,t,e)}function Gt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?Pt(ar(n,"length")):0,r=Zt(0>e?0:e);++t<e;)r[t]=ar(n,t);return r}function Jt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||qe(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?pt(n,17,s(arguments,2),null,t):pt(n,1,null,null,t)
}function Vt(n,t,e){var r,u,o,a,i,l,f,c=0,p=false,s=true;if(!jt(n))throw new le;if(t=Be(0,t)||0,true===e)var g=true,s=false;else xt(e)&&(g=e.leading,p="maxWait"in e&&(Be(t,e.maxWait)||0),s="trailing"in e?e.trailing:s);var v=function(){var e=t-(ir()-a);0<e?l=Ce(v,e):(u&&me(u),e=f,u=l=f=h,e&&(c=ir(),o=n.apply(i,r),l||u||(r=i=null)))},y=function(){l&&me(l),u=l=f=h,(s||p!==t)&&(c=ir(),o=n.apply(i,r),l||u||(r=i=null))};return function(){if(r=arguments,a=ir(),i=this,f=s&&(l||!g),false===p)var e=g&&!l;else{u||g||(c=a);
var h=p-(a-c),m=0>=h;m?(u&&(u=me(u)),c=a,o=n.apply(i,r)):u||(u=Ce(y,h))}return m&&l?l=me(l):l||t===p||(l=Ce(v,t)),e&&(m=true,o=n.apply(i,r)),!m||l||u||(r=i=null),o}}function Ht(n){return n}function Ut(n,t,e){var r=true,u=t&&_t(t);t&&(e||u.length)||(null==e&&(e=t),o=y,t=n,n=v,u=_t(t)),false===e?r=false:xt(e)&&"chain"in e&&(r=e.chain);var o=n,a=jt(o);Dt(u,function(e){var u=n[e]=t[e];a&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,a=[e];if(je.apply(a,arguments),a=u.apply(n,a),r||t){if(e===a&&xt(a))return this;
a=new o(a),a.__chain__=t}return a})})}function Qt(){}function Xt(n){return function(t){return t[n]}}function Yt(){return this.__wrapped__}e=e?ut.defaults(Z.Object(),e,ut.pick(Z,R)):Z;var Zt=e.Array,ne=e.Boolean,te=e.Date,ee=e.Function,re=e.Math,ue=e.Number,oe=e.Object,ae=e.RegExp,ie=e.String,le=e.TypeError,fe=[],ce=e.Error.prototype,pe=oe.prototype,se=ie.prototype,ge=e._,he=pe.toString,ve=ae("^"+ie(he).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ye=re.ceil,me=e.clearTimeout,de=re.floor,be=ee.prototype.toString,_e=vt(_e=oe.getPrototypeOf)&&_e,we=pe.hasOwnProperty,je=fe.push,xe=pe.propertyIsEnumerable,Ce=e.setTimeout,ke=fe.splice,Ee=fe.unshift,Oe=function(){try{var n={},t=vt(t=oe.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),Se=vt(Se=oe.create)&&Se,Ae=vt(Ae=Zt.isArray)&&Ae,Ie=e.isFinite,De=e.isNaN,Ne=vt(Ne=oe.keys)&&Ne,Be=re.max,Pe=re.min,Re=e.parseInt,Fe=re.random,Te={};Te[$]=Zt,Te[L]=ne,Te[z]=te,Te[K]=ee,Te[G]=oe,Te[W]=ue,Te[J]=ae,Te[M]=ie;var $e={};$e[$]=$e[z]=$e[W]={constructor:true,toLocaleString:true,toString:true,valueOf:true},$e[L]=$e[M]={constructor:true,toString:true,valueOf:true},$e[q]=$e[K]=$e[J]={constructor:true,toString:true},$e[G]={constructor:true},function(){for(var n=F.length;n--;){var t,e=F[n];
for(t in $e)we.call($e,t)&&!we.call($e[t],e)&&($e[t][e]=false)}}(),y.prototype=v.prototype;var Le=v.support={};!function(){var n=function(){this.x=1},t={0:1,length:1},r=[];n.prototype={valueOf:1,y:1};for(var u in new n)r.push(u);for(u in arguments);Le.argsClass=he.call(arguments)==T,Le.argsObject=arguments.constructor==oe&&!(arguments instanceof Zt),Le.enumErrorProps=xe.call(ce,"message")||xe.call(ce,"name"),Le.enumPrototypes=xe.call(n,"prototype"),Le.funcDecomp=!vt(e.WinRTError)&&B.test(g),Le.funcNames=typeof ee.name=="string",Le.nonEnumArgs=0!=u,Le.nonEnumShadows=!/valueOf/.test(r),Le.ownLast="x"!=r[0],Le.spliceObjects=(fe.splice.call(t,0,1),!t[0]),Le.unindexedChars="xx"!="x"[0]+oe("x")[0];
try{Le.nodeClass=!(he.call(document)==G&&!({toString:0}+""))}catch(o){Le.nodeClass=true}}(1),v.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:I,variable:"",imports:{_:v}},Se||(nt=function(){function n(){}return function(t){if(xt(t)){n.prototype=t;var r=new n;n.prototype=null}return r||e.Object()}}());var ze=Oe?function(n,t){U.value=t,Oe(n,"__bindData__",U)}:Qt;Le.argsClass||(dt=function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&we.call(n,"callee")&&!xe.call(n,"callee")||false
});var qe=Ae||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&he.call(n)==$||false},Ke=st({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),We=Ne?function(n){return xt(n)?Le.enumPrototypes&&typeof n=="function"||Le.nonEnumArgs&&n.length&&dt(n)?Ke(n):Ne(n):[]}:Ke,Ge={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:We,g:"if(e(t[n],n,g)===false)return E"},Je={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:We,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},Me={i:"if(!B[typeof t])return E;"+Ge.i,b:false},Ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},He=wt(Ve),Ue=ae("("+We(He).join("|")+")","g"),Qe=ae("["+We(Ve).join("")+"]","g"),Xe=st(Ge),Ye=st(Je,{i:Je.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),Ze=st(Je),nr=st(Ge,Me,{j:false}),tr=st(Ge,Me);
jt(/x/)&&(jt=function(n){return typeof n=="function"&&he.call(n)==K});var er=_e?function(n){if(!n||he.call(n)!=G||!Le.argsClass&&dt(n))return false;var t=n.valueOf,e=vt(t)&&(e=_e(t))&&_e(e);return e?n==e||_e(n)==e:yt(n)}:yt,rr=ct(function(n,t,e){we.call(n,e)?n[e]++:n[e]=1}),ur=ct(function(n,t,e){(we.call(n,e)?n[e]:n[e]=[]).push(t)}),or=ct(function(n,t,e){n[e]=t}),ar=Bt,ir=vt(ir=te.now)&&ir||function(){return(new te).getTime()},lr=8==Re(j+"08")?Re:function(n,t){return Re(kt(n)?n.replace(D,""):n,t||0)};
return v.after=function(n,t){if(!jt(t))throw new le;return function(){return 1>--n?t.apply(this,arguments):void 0}},v.assign=Ye,v.at=function(n){var t=arguments,e=-1,r=ot(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Zt(t);for(Le.unindexedChars&&kt(n)&&(n=n.split(""));++e<t;)u[e]=n[r[e]];return u},v.bind=Mt,v.bindAll=function(n){for(var t=1<arguments.length?ot(arguments,true,false,1):_t(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=pt(n[u],1,null,null,n)}return n},v.bindKey=function(n,t){return 2<arguments.length?pt(t,19,s(arguments,2),null,n):pt(t,3,null,null,n)
},v.chain=function(n){return n=new y(n),n.__chain__=true,n},v.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},v.compose=function(){for(var n=arguments,t=n.length;t--;)if(!jt(n[t]))throw new le;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},v.constant=function(n){return function(){return n}},v.countBy=rr,v.create=function(n,t){var e=nt(n);return t?Ye(e,t):e},v.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);
if("object"!=r)return Xt(n);var u=We(n),o=u[0],a=n[o];return 1!=u.length||a!==a||xt(a)?function(t){for(var e=u.length,r=false;e--&&(r=at(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],a===n&&(0!==a||1/a==1/n)}},v.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,pt(n,4,null,null,null,t)},v.debounce=Vt,v.defaults=Ze,v.defer=function(n){if(!jt(n))throw new le;var t=s(arguments,1);return Ce(function(){n.apply(h,t)},1)},v.delay=function(n,t){if(!jt(n))throw new le;var e=s(arguments,2);
return Ce(function(){n.apply(h,e)},t)},v.difference=function(n){return rt(n,ot(arguments,true,true,1))},v.filter=At,v.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Bt(n,e,r)),ot(n,t)},v.forEach=Dt,v.forEachRight=Nt,v.forIn=nr,v.forInRight=function(n,t,e){var r=[];nr(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},v.forOwn=tr,v.forOwnRight=bt,v.functions=_t,v.groupBy=ur,v.indexBy=or,v.initial=function(n,t,e){var r=0,u=n?n.length:0;
if(typeof t!="number"&&null!=t){var o=u;for(t=v.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return s(n,0,Pe(Be(0,u-r),u))},v.intersection=function(){for(var e=[],r=-1,u=arguments.length,a=i(),l=ht(),f=l===n,s=i();++r<u;){var g=arguments[r];(qe(g)||dt(g))&&(e.push(g),a.push(f&&g.length>=_&&o(r?e[r]:s)))}var f=e[0],h=-1,v=f?f.length:0,y=[];n:for(;++h<v;){var m=a[0],g=f[h];if(0>(m?t(m,g):l(s,g))){for(r=u,(m||s).push(g);--r;)if(m=a[r],0>(m?t(m,g):l(e[r],g)))continue n;y.push(g)
}}for(;u--;)(m=a[u])&&p(m);return c(a),c(s),y},v.invert=wt,v.invoke=function(n,t){var e=s(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,a=Zt(typeof o=="number"?o:0);return Dt(n,function(n){a[++r]=(u?t:n[t]).apply(n,e)}),a},v.keys=We,v.map=Bt,v.mapValues=function(n,t,e){var r={};return t=v.createCallback(t,e,3),tr(n,function(n,e,u){r[e]=t(n,e,u)}),r},v.max=Pt,v.memoize=function(n,t){if(!jt(n))throw new le;var e=function(){var r=e.cache,u=t?t.apply(this,arguments):b+arguments[0];return we.call(r,u)?r[u]:r[u]=n.apply(this,arguments)
};return e.cache={},e},v.merge=function(n){var t=arguments,e=2;if(!xt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=s(arguments,1,e),u=-1,o=i(),a=i();++u<e;)it(n,t[u],r,o,a);return c(o),c(a),n},v.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i<o&&(o=i)}}else t=null==t&&kt(n)?r:v.createCallback(t,e,3),Xe(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)
});return o},v.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];nr(n,function(n,t){u.push(t)});for(var u=rt(u,ot(arguments,true,false,1)),o=-1,a=u.length;++o<a;){var i=u[o];r[i]=n[i]}}else t=v.createCallback(t,e,3),nr(n,function(n,e,u){t(n,e,u)||(r[e]=n)});return r},v.once=function(n){var t,e;if(!jt(n))throw new le;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},v.pairs=function(n){for(var t=-1,e=We(n),r=e.length,u=Zt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u
},v.partial=function(n){return pt(n,16,s(arguments,1))},v.partialRight=function(n){return pt(n,32,null,s(arguments,1))},v.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ot(arguments,true,false,1),a=xt(n)?o.length:0;++u<a;){var i=o[u];i in n&&(r[i]=n[i])}else t=v.createCallback(t,e,3),nr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},v.pluck=ar,v.property=Xt,v.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,a=t[e];++o<u;)n[o]===a&&(ke.call(n,o--,1),u--);
return n},v.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Be(0,ye((t-n)/(e||1)));for(var u=Zt(t);++r<t;)u[r]=n,n+=e;return u},v.reject=function(n,t,e){return t=v.createCallback(t,e,3),At(n,function(n,e,r){return!t(n,e,r)})},v.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=v.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),ke.call(n,r--,1),u--);return o},v.rest=qt,v.shuffle=Tt,v.sortBy=function(n,t,e){var r=-1,o=qe(t),a=n?n.length:0,f=Zt(typeof a=="number"?a:0);
for(o||(t=v.createCallback(t,e,3)),Dt(n,function(n,e,u){var a=f[++r]=l();o?a.m=Bt(t,function(t){return n[t]}):(a.m=i())[0]=t(n,e,u),a.n=r,a.o=n}),a=f.length,f.sort(u);a--;)n=f[a],f[a]=n.o,o||c(n.m),p(n);return f},v.tap=function(n,t){return t(n),n},v.throttle=function(n,t,e){var r=true,u=true;if(!jt(n))throw new le;return false===e?r=false:xt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),H.leading=r,H.maxWait=t,H.trailing=u,Vt(n,t,H)},v.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Zt(n);
for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},v.toArray=function(n){return n&&typeof n.length=="number"?Le.unindexedChars&&kt(n)?n.split(""):s(n):Et(n)},v.transform=function(n,t,e,r){var u=qe(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=v.createCallback(t,r,4),(u?Xe:tr)(n,function(n,r,u){return t(e,n,r,u)})),e},v.union=function(){return ft(ot(arguments,true,true))},v.uniq=Wt,v.values=Et,v.where=At,v.without=function(n){return rt(n,s(arguments,1))},v.wrap=function(n,t){return pt(t,16,[n])
},v.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(qe(e)||dt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},v.zip=Gt,v.zipObject=Jt,v.collect=Bt,v.drop=qt,v.each=Dt,v.eachRight=Nt,v.extend=Ye,v.methods=_t,v.object=Jt,v.select=At,v.tail=qt,v.unique=Wt,v.unzip=Gt,Ut(v),v.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Y(n,t,typeof e=="function"&&tt(e,r,1))},v.cloneDeep=function(n,t,e){return Y(n,true,typeof t=="function"&&tt(t,e,1))},v.contains=Ot,v.escape=function(n){return null==n?"":ie(n).replace(Qe,gt)
},v.every=St,v.find=It,v.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=v.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},v.findKey=function(n,t,e){var r;return t=v.createCallback(t,e,3),tr(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},v.findLast=function(n,t,e){var r;return t=v.createCallback(t,e,3),Nt(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0}),r},v.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=v.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;
return-1},v.findLastKey=function(n,t,e){var r;return t=v.createCallback(t,e,3),bt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},v.has=function(n,t){return n?we.call(n,t):false},v.identity=Ht,v.indexOf=zt,v.isArguments=dt,v.isArray=qe,v.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&he.call(n)==L||false},v.isDate=function(n){return n&&typeof n=="object"&&he.call(n)==z||false},v.isElement=function(n){return n&&1===n.nodeType||false},v.isEmpty=function(n){var t=true;if(!n)return t;var e=he.call(n),r=n.length;
return e==$||e==M||(Le.argsClass?e==T:dt(n))||e==G&&typeof r=="number"&&jt(n.splice)?!r:(tr(n,function(){return t=false}),t)},v.isEqual=function(n,t,e,r){return at(n,t,typeof e=="function"&&tt(e,r,2))},v.isFinite=function(n){return Ie(n)&&!De(parseFloat(n))},v.isFunction=jt,v.isNaN=function(n){return Ct(n)&&n!=+n},v.isNull=function(n){return null===n},v.isNumber=Ct,v.isObject=xt,v.isPlainObject=er,v.isRegExp=function(n){return n&&X[typeof n]&&he.call(n)==J||false},v.isString=kt,v.isUndefined=function(n){return typeof n=="undefined"
},v.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Be(0,r+e):Pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},v.mixin=Ut,v.noConflict=function(){return e._=ge,this},v.noop=Qt,v.now=ir,v.parseInt=lr,v.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Fe(),Pe(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):lt(n,t)},v.reduce=Rt,v.reduceRight=Ft,v.result=function(n,t){if(n){var e=n[t];
return jt(e)?n[t]():e}},v.runInContext=g,v.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:We(n).length},v.some=$t,v.sortedIndex=Kt,v.template=function(n,t,e){var r=v.templateSettings;n=ie(n||""),e=Ze({},e,r);var u,o=Ze({},e.imports,r.imports),r=We(o),o=Et(o),i=0,l=e.interpolate||N,f="__p+='",l=ae((e.escape||N).source+"|"+l.source+"|"+(l===I?O:N).source+"|"+(e.evaluate||N).source+"|$","g");n.replace(l,function(t,e,r,o,l,c){return r||(r=o),f+=n.slice(i,c).replace(P,a),e&&(f+="'+__e("+e+")+'"),l&&(u=true,f+="';"+l+";\n__p+='"),r&&(f+="'+((__t=("+r+"))==null?'':__t)+'"),i=c+t.length,t
}),f+="';",l=e=e.variable,l||(e="obj",f="with("+e+"){"+f+"}"),f=(u?f.replace(x,""):f).replace(C,"$1").replace(E,"$1;"),f="function("+e+"){"+(l?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+f+"return __p}";try{var c=ee(r,"return "+f).apply(h,o)}catch(p){throw p.source=f,p}return t?c(t):(c.source=f,c)},v.unescape=function(n){return null==n?"":ie(n).replace(Ue,mt)},v.uniqueId=function(n){var t=++m;return ie(null==n?"":n)+t
},v.all=St,v.any=$t,v.detect=It,v.findWhere=It,v.foldl=Rt,v.foldr=Ft,v.include=Ot,v.inject=Rt,Ut(function(){var n={};return tr(v,function(t,e){v.prototype[e]||(n[e]=t)}),n}(),false),v.first=Lt,v.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=v.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:h;return s(n,Be(0,u-r))},v.sample=function(n,t,e){return n&&typeof n.length!="number"?n=Et(n):Le.unindexedChars&&kt(n)&&(n=n.split("")),null==t||e?n?n[lt(0,n.length-1)]:h:(n=Tt(n),n.length=Pe(Be(0,t),n.length),n)
},v.take=Lt,v.head=Lt,tr(v,function(n,t){var e="sample"!==t;v.prototype[t]||(v.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new y(o,u):o})}),v.VERSION="2.4.1",v.prototype.chain=function(){return this.__chain__=true,this},v.prototype.toString=function(){return ie(this.__wrapped__)},v.prototype.value=Yt,v.prototype.valueOf=Yt,Xe(["join","pop","shift"],function(n){var t=fe[n];v.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new y(e,n):e}}),Xe(["push","reverse","sort","unshift"],function(n){var t=fe[n];v.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),Xe(["concat","slice","splice"],function(n){var t=fe[n];v.prototype[n]=function(){return new y(t.apply(this.__wrapped__,arguments),this.__chain__)}}),Le.spliceObjects||Xe(["pop","shift","splice"],function(n){var t=fe[n],e="splice"==n;v.prototype[n]=function(){var n=this.__chain__,r=this.__wrapped__,u=t.apply(r,arguments);return 0===r.length&&delete r[0],n||e?new y(u,n):u
}}),v}var h,v=[],y=[],m=0,d={},b=+new Date+"",_=75,w=40,j=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",x=/\b__p\+='';/g,C=/\b(__p\+=)''\+/g,E=/(__e\(.*?\)|\b__t\))\+'';/g,O=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,S=/\w*$/,A=/^\s*function[ \n\r\t]+\w/,I=/<%=([\s\S]+?)%>/g,D=RegExp("^["+j+"]*0+(?=.$)"),N=/($^)/,B=/\bthis\b/,P=/['\n\r\t\u2028\u2029\\]/g,R="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),T="[object Arguments]",$="[object Array]",L="[object Boolean]",z="[object Date]",q="[object Error]",K="[object Function]",W="[object Number]",G="[object Object]",J="[object RegExp]",M="[object String]",V={};
V[K]=false,V[T]=V[$]=V[L]=V[z]=V[W]=V[G]=V[J]=V[M]=true;var H={leading:false,maxWait:0,trailing:false},U={configurable:false,enumerable:false,value:null,writable:false},Q={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:false},X={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},Y={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},Z=X[typeof window]&&window||this,nt=X[typeof exports]&&exports&&!exports.nodeType&&exports,tt=X[typeof module]&&module&&!module.nodeType&&module,et=tt&&tt.exports===nt&&nt,rt=X[typeof global]&&global;
!rt||rt.global!==rt&&rt.window!==rt||(Z=rt);var ut=g();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Z._=ut, define(function(){return ut})):nt&&tt?et?(tt.exports=ut)._=ut:nt._=ut:Z._=ut}).call(this);;
function _bonnier_publications_onchange_callback(el) {
  // Retrieve the url from the select box.
  if (el.options[el.selectedIndex].value != '') {
    // Create link for site, than click it.
    var a = document.createElement('a');
    a.setAttribute("href", el.options[el.selectedIndex].value);
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents")
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
  }
}
;
(function ($, Drupal, w, d) {
  var once = false;

  // Define a global function to be called by served ad to invoke CU. This
  // function may potentially be called even if Genesis is not needed on a
  // page, having it present prevents JS errors.
  w.invokeGenesisAsync = function () {
    var a = false;
    if (typeof GMContentUnlockAsyncEventTriggered !== "undefined") {
      a = GMContentUnlockAsyncEventTriggered()
    }
    if (!a) {
      if (typeof GMContentUnlockEventHandler !== "undefined") {
        GMContentUnlockEventHandler.attachEvent("asyncModeReady", GMContentUnlockAsyncEventTriggered)
      } else {
        GMContentUnlockEventHandlerOnReady = function () {
          GMContentUnlockEventHandler.attachEvent("asyncModeReady", GMContentUnlockAsyncEventTriggered)
        }
      }
    }
  }

  // Asynchronously attach Genesis Media's CU.
  function attachJs (account) {
    var h = d.getElementsByTagName('head')[0],
        s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cu.genesismedia.com/pub/' + account + '/config/cuconfig.js';
    h.appendChild(s);
  }

  Drupal.behaviors.genesisMedia = {
    attach: function (context, settings) {
      if (once) {
        return;
      }
      once = true;

      if (settings.hasOwnProperty('genesisMedia') &&
          settings.genesisMedia.hasOwnProperty('account')) {
        attachJs(settings.genesisMedia.account);
      }
    }
  }
})(jQuery, Drupal, window, document);
;
(function ($) {
  var adIndex = 0;
  Drupal.behaviors.inContentAds = {
    attach: function (context, settings) {
      $(settings.inContentAds.selector, context).once('inContentAds').each(function () {
        var body = this;
        // TODO: Right now our markdown parser wraps media embeds in a
        // paragraph tag. This causes empty <p> elements that mess with our
        // detection below. This should be removed and the markdown interpretter
        // needs to prevent this wrapping.
        $('p', body).each(function(index, item) {
            if($.trim($(item).text()) === "") {
                $(item).remove();
            }
        });

        $(body).children().each(function () {
          var nextSibling = $(this).next(),
              ad = Drupal.settings.inContentAds.ad;
          // Skip any elements that are less than next, are not paragraphs, are
          // the last element in the collection, whose next sibling is not a
          // paragraph, or any content that ends with a colon.
          if (this.nodeName !== 'P' ||
              !nextSibling.get(0) ||
              nextSibling.get(0).nodeName !== 'P' ||
              jQuery.trim(jQuery(this).text()).slice(-1) === ':') {
            return;
          }

          // Create ad unit element.
          var container = $('<div id="in-content-ad-' + ++adIndex + '" class="in-content-ad"></div>');
          // Place element after current child.
          $(this).after(container);

          if (typeof Drupal.settings.infiniteScroll !== 'undefined') {
            var curr = $(body).closest('.article-wrapper').index();
            if (curr === -1) {
              curr = 0;
            }
            if (typeof Drupal.settings.infiniteScroll.items[curr].inContentAds !== 'undefined') {
              ad = Drupal.settings.infiniteScroll.items[curr].inContentAds;
            }
          }

          if (ad) {
            Drupal.GPT.registerSlot('in-content-ad-' + adIndex, ad);
          }

          // We only want to insert 1 ad right now, break the each.
          return false;
        });
      });
    }
  };
})(jQuery);
;
(function($, w) {
  function loadVideo (item, tries) {
    // Only proceed if OO is defined, this is a hack since we can't know when
    // the JS has loaded and it is built to work with onload, which doesn't
    // work in async.
    if (typeof OO != 'undefined') {
      // Find the div that will hold the video.
      var ooyalaDiv = $(item.content).find('[id^=onering_]:not([id$=thumb])');
      if (ooyalaDiv.length) {
        // If found, get the id.
        var ooyalaDivId = ooyalaDiv.attr('id');
      }
      // Find the thumb div.
      var ooyalaThumbDiv = $(item.content).find('[id*=onering_][id*=thumb]');
      if (ooyalaThumbDiv.length) {
        // If found parse the embed code out of the url. This is unfourtunately
        // the only reliable way to get the embed code from the front end. Ideally 
        // a div with this information in a data attribute can be added where
        // the video portal builds the html output.
        var ooyalaEmbedCode = ooyalaThumbDiv.html().split('/')[3];
      }
      // If the ooyala object, id, and embed code are set, create the player.
      if (ooyalaDivId && ooyalaEmbedCode) {
        w[ooyalaDiv] = OO.Player.create(ooyalaDivId, ooyalaEmbedCode);
      }
    }
    // Else, try re-running each delay up to three times.
    else if (tries < 3) {
      _.delay(loadVideo, 500, item, tries + 1);
    }
  }

  // Handle videos in the infinite scroll content.
  $(w).bind('bonnierPageView', function(event, item) {
    loadVideo(item, 1);
  });
})(jQuery, window);

;
(function ($, Drupal, window, document, undefined) {
  // Function to return sorted and grouped ad sizes, with memoizing for caching.
  var sortGroupAdSizes = _.memoize(function (s) {
    return _(s).groupBy(function (i) {
      return i[1];
    }).pairs().value();
  });


var infiniteScroll = {
  // Set the overall container.
  container: '#block-system-main',
  // Set the article element default selector.
  article: '#block-system-main .article-wrapper',
  // The name of the site header.
  mainHeader: 'header.main-header',
  // The name of the article wrapper.
  wrapper: 'article-wrapper',
  // The name of the article dividers.
  divider: 'article-divider',
  // The name for a loading icon
  loader: '.infinite-loader',
  // The HTML that will be used for the loader.
  loaderHtml: '<div class="infinite-loader"><div class="inner-loader"><div class="words"></div><i class="fa fa-spinner fa-spin"></i><div></div>',
  // Set whether to adjust the sizes ads can be displayed.
  adjustAds: true,
  // Set the top and bottom offset for the ad unit to stick to the screen.
  adStickOffset: 15,
  // Set the presumed recirc image height.
  recircHeight: 225,
  // Set the title of the recirc.
  recircTitle: 'Related Content',
  // Set how tall the bottom ad should be to hide recirculation.
  maxAdHeight: 600,
  // Set the percentage the article must be viewable to count as current.
  viewAmount: 50,
  // Set how long articles delay between scrolling.
  loadingDelay: 1000,
  // The ammount of offset the article would be before calling another.
  articleOffset: 0,
  // Set a variable to declare if a new artcle is being added to the page.
  placingItem: false,
  // Set the next array index to be placed.
  itemIndex: 0,
  // Set the array of all articles.
  items: [],
  // Set which article is currently viewed.
  currentItem: [],
  // Cache the jQuery object containing the current article.
  currentColle: {},
  // Cache the current sidebar.
  currentSide: {},
  // Cache the current article element.
  currentArticle: {},
  // Set whether a change of state is happening.
  changingState: false,
  // Set the changing ads data as an object, if needed.
  changingAds: {
    num: 0,
    total: 0,
    selector: '',
  },
  // Set the object for Outbrain.
  outbrain: {},
  // Set the loading phrases displayed.
  loadingPhrases: [],
  // Set the configuration options.
  config: [],

  // Start the infinite scroll.
  init : function() {

    // Attach a new class and perform these actions once.
    $('body').once('infinite', function() {
      // Default start current item.
      Drupal.settings.infiniteScroll.currentItem = 0;
      // Get the configuration settings.
      infiniteScroll.config = Drupal.settings.infiniteScroll.config;

      // Get the first few items from the Drupal object.
      infiniteScroll.items = Drupal.settings.infiniteScroll.items;

      // Get the information for outbrain.
      infiniteScroll.outbrain = Drupal.settings.infiniteScroll.outbrain;

      // Get the loading phrases.
      infiniteScroll.loadingPhrases = Drupal.settings.infiniteScroll.loadingPhrases;

      // Get the title of the sidebar Recirc.
      infiniteScroll.recircTitle = Drupal.settings.infiniteScroll.recircTitle;

      // Get the title of the sidebar Recirc.
      infiniteScroll.loadingDelay = Drupal.settings.infiniteScroll.loadingDelay;
      
      // Get the amount of offset for the next article.
      infiniteScroll.articleOffset = Drupal.settings.infiniteScroll.loadingPoint; 

      // Get whether the ads should be adjusted for the content.
      infiniteScroll.adjustAds = Drupal.settings.infiniteScroll.adjustSidebarAds == 0 ? false : true;

      // Get the content to place on the page initially if not on basic content.
      infiniteScroll.replacementHtml = Drupal.settings.infiniteScroll.replacementHtml || false;

      // Set the current item to be the first in the array.
      infiniteScroll.currentItem = infiniteScroll.items[0];

      // Check the replacement value, then act accordingly.
      infiniteScroll.placeReplacementHtml();

      // complete the remaining tasks of the first item.
      infiniteScroll.firstItem();

      var scrollHandler = function () {
        infiniteScroll.scrollWatch();
        infiniteScroll.checkItemNeed();
      };
      // Attach a listener to the window to watch for scrolling.
      $(window).scroll(_.throttle(scrollHandler, infiniteScroll.config.scrollThrottle));
      $(window).scroll(_.throttle(infiniteScroll.followSidebar, infiniteScroll.config.sidebarThrottle));

      // Creating a loading marker for new items.
      $(infiniteScroll.container).append(infiniteScroll.loaderHtml);

      // Hide the footer.
      $('footer').hide();

    });
  },
  // If replacement value is set, update the appropiate values on the page.
  placeReplacementHtml : function() {
    if (infiniteScroll.replacementHtml) {
      $(infiniteScroll.container + ' > .content').html(infiniteScroll.replacementHtml);
      // Add event if replacement occured to change state on scroll.
      $(window).bind('scroll', function (e) {
        var pos = $(this).scrollTop();
        if (pos > 0) {
          infiniteScroll.changeState();
          $(window).unbind(e);
        }
      });
    }
  },
  // Complete the items needed for the first article.
  firstItem : function() {
    // Wrap the first item with a wrapper that contains the ID of the article.
    $(infiniteScroll.container + ' > .content').children(':first')
      .wrap('<div class="' + infiniteScroll.wrapper + '" data-id="'+ infiniteScroll.items[0].id +'"></div>');
    // Set the current collection now that content is formatted properly.
    infiniteScroll.setCurrentColle();
    // Call the remaining item's peices.
    infiniteScroll.placeSidebarAds(infiniteScroll.items[0], infiniteScroll.currentColle);
    infiniteScroll.placeBottom(infiniteScroll.items[0], infiniteScroll.currentColle);
    infiniteScroll.completePlacement();
  },

  // Set the current collection object and set other objects to cache related jQuery selectors.
  setCurrentColle : function() {
    infiniteScroll.currentColle = $('.'+ infiniteScroll.wrapper +'[data-id="'+ infiniteScroll.currentItem.id +'"]');
    infiniteScroll.currentSide = infiniteScroll.currentColle.find('aside.sidebar');
    infiniteScroll.currentArticle = infiniteScroll.currentColle.find('article');
  },

  // Check to see which article is the current one.
  scrollWatch : function() {
    $(infiniteScroll.article).each(function(index) {

      // Get the height values for the article.
      var val = infiniteScroll.checkScrollVals($(this));

      // If the percentage is greater than the view amount the article becomes the currently viewed.
      if (val.percent > infiniteScroll.viewAmount) {

        // set the current item if it does not match the current article.
        if (infiniteScroll.items[index].id != infiniteScroll.currentItem.id) {
          // Set back to global variables so that others modules can
          // see which current slide they are viewing.
          Drupal.settings.infiniteScroll.currentItem = index;
          infiniteScroll.currentItem = infiniteScroll.items[index];
          infiniteScroll.setCurrentColle();
          infiniteScroll.changeState();
          // Break the loop.
          return false;
        }
      }
    });
  },

  // Check to see if there needs to be a new article added to the page.
  checkItemNeed : function() {

    // Find the document and the container's height.
    function checkScroll() {
      var val = infiniteScroll.checkScrollVals($(infiniteScroll.container));
      var offset = val.elemBottom + infiniteScroll.articleOffset;
      return (val.docViewBottom >= offset);
    }

    // Get the next article if the last item is close to coming into view.
    if (checkScroll() == true && infiniteScroll.placingItem == false) {

      // Only continue if the item index is less than the total amount of items.
      if (infiniteScroll.itemIndex < infiniteScroll.items.length) {
        infiniteScroll.startPlacement();
      }
    }
  },

  // Make the sidebar sticky so it follows you down the article.
  followSidebar : function() {
    if (infiniteScroll.currentSide.length) {

      // Get all the values associated with the article body to make that the reference point.
      var val = infiniteScroll.checkScrollVals(infiniteScroll.currentArticle);

      // Get the height of the sidebar to make sure it's not too tall.
      var sidebarHeight = infiniteScroll.currentSide.height() + infiniteScroll.adStickOffset;

      // Get the height of the header.
      var headerHeight = $(infiniteScroll.mainHeader).height();

      // Set the total top and bottom values.
      var totalTop = val.elemTop - (infiniteScroll.adStickOffset + headerHeight);
      var totalBottom = val.elemBottom - (sidebarHeight + headerHeight);

      // Adjust the ad unit to be fixed down the page or pinned to the bottom when completed.
      if (val.docViewTop >= totalTop && val.docViewTop <= totalBottom) {
        infiniteScroll.currentSide.addClass('fixed').removeClass('pinned').css('top', (infiniteScroll.adStickOffset + headerHeight));
      } else if (val.docViewTop > totalBottom - infiniteScroll.adStickOffset) {
        infiniteScroll.currentSide.removeClass('fixed').addClass('pinned').removeAttr('style');
      } else {
        infiniteScroll.currentSide.removeClass('fixed').removeAttr('style');
      }
    }
  },

  // Find out where the elements are in relation to the viewport.
  checkScrollVals : function(element) {
    var visible, percent, values;
    var winHeight = $(window).height();
    var elmHeight = element.height();
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + winHeight;
    var elemTop = element.offset().top;
    var elemBottom = elemTop + elmHeight;

    // Determine if the element is in view
    if ((elemTop >= docViewTop && elemBottom <= docViewBottom) || (elemTop <= docViewTop && elemBottom >= docViewBottom)){
        visible = winHeight;
    } else if (elemTop >= docViewTop) {
        visible = winHeight - (elemTop - docViewTop);
    } else if (elemBottom <= docViewBottom) {
        visible = winHeight - (docViewBottom - elemBottom);
    }

    // Create a percentage of the amount in view.
    percent = (visible / winHeight) * 100;

    // Return an object of values.
    values = {
      docViewTop: docViewTop,
      docViewBottom: docViewBottom,
      elemTop: elemTop,
      elemBottom: elemBottom,
      percent: percent,
    }
    return values;
  },

  // Change any necessary values after switching current articles.
  changeState : function() {
    var item = infiniteScroll.currentItem;
    var count = 0;
    var collection = infiniteScroll.currentColle;
    var position = collection.index();

    // Pin any fixed positioned ad units.
    $('aside.sidebar.fixed').removeClass('fixed').addClass('pinned');

    // Refresh ad units, if needed
    if (item.hasOwnProperty('sidebar') === true &&
        item.sidebar.hasOwnProperty('ads') === true) {
      var ads = item.sidebar.ads
        , slots = [];
      var totalCount = ads.length;

      // Create the new ad object.
      infiniteScroll.changingAds = {
        num: 0,
        total: totalCount,
        selector: collection.selector,
      };

      // Iterate over each ad and place a new one.
      $.each(ads, function(key, val) {
        var adUnit = $('#' + ads[key].identifier);

        // Check to make sure the ad unit wasn't just placed.
        // I'm very suspect of this class being used to prevent refreshing.
        if (adUnit.hasClass('first')) {
          // Remove the first class to allow for refreshes in the future.
          adUnit.removeClass('first');
        }
        else {
          // This is GPT logic, see Drupal.GPT.refresh().
          slots.push(Drupal.GPT.ads[ads[key].identifier].refreshSlot());
        }
      });
      if (slots.length) {
        // This is GPT logic, see Drupal.GPT.refresh().
        googletag.pubads().refresh(slots);
      }
    } else {
      // clear the current ad object.
      infiniteScroll.changingAds = {
        num: 0,
        total: 0,
        selector: '',
      };
    }

    // Change the title tag to match the article.
    document.title = item.title;

    // Get the information about the user agent.
    var isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    var ieVersion = new Number(RegExp.$1);

    // Set the document referrer for the article.
    // IE8 is unable to perform this action.
    if (!(isIE == true && ieVersion == 8)) {
      document.referrer = window.location;
    }

    // Set the history of the current article in view.
    History.replaceState({state:item.id}, document.title, item.url);

    // Update Omniture tracking for page views.
    if (item.hasOwnProperty('analytics') == true) {
      var omn = item.analytics.omniture;

      // Get the index of the selected item.
      var index = position + 1;

      // Attach the index to the prop9 item.
      omn.scode_array['s.prop9'] = '"' + index.toString() + '"';

      // Trigger the event 9 event.
      s.linkTrackEvents = 'event9';

      // Make a call to omniture.
      omniture_update_scode(omn.scode_array, omn.pass_thru);
      omniture_refresh();
    }

    // Update other tracking (Comscore, Quancast, etc).
    $(window).trigger('bonnierPageView', [item]);

    // Update visibility
    infiniteScroll.changeVisible(position);

    // Update the admin menu.
    infiniteScroll.updateAdminLinks(item);
  },

  // Update the visibility of articles and images for performance.
  changeVisible : function(position) {
    $(infiniteScroll.article).each(function(index) {

      // If the article is out of view by more than one extra article.
      if (index < position - 1 || index > position + 1) {
        if (!$(this).hasClass('hidden')) {

          // Get the height and apply it along with a hidden class.
          var height = $(this).height();
          $(this).css('height', height).addClass('hidden');

          // Go through each image and remove the src.
          $('img', this).each(function() {
            var src =  $(this).attr('src');
            // Only switch back to nothing when data-src is already loaded into the source
            if ($(this).attr('data-src') == src) {
              $(this).attr('data-src', src).attr('src', '');
            }
          });
        }
      } else {
        if ($(this).hasClass('hidden')) {

          // Remove the hidden class.
          $(this).removeAttr('style').removeClass('hidden');
          $('img', this).each(function() {

            // Get the image that was in the data source and apply it.
            var data = $(this).attr('data-src');
            $(this).attr('src',data);
          });
        }
      }
    });
  },

  // Update the admin links for whichever content the editors are on.
  updateAdminLinks : function (item) {
     var adminMenuLinks = $('.pane-page-tabs').find('a');
      adminMenuLinks.each(function(index,value) {
      var path = $(this).attr('href').split('/');
      if ((path[1] == 'node' && isNaN(path[2]) === false) || (path[1] == 'taxonomy'&& path[2] == 'term')) {
        // On a term page with infinite scroll, we need to convert the links into node edit links
        if (path[1] == 'taxonomy'&& path[2] == 'term') {
          if ($(this).text() == 'Edit') {
            $(this).text('Edit Page');
            $(this).parent().after('<li><a href="/node/' + item.id + '/edit">Edit Content</a></li>');
          }
        }
        else{
          // Update the new id
          path[2] = item.id;
          $(this).attr('href', path.join('/'));
        }
      }
      else{
        // Change the view links
        $(this).attr('href', item.url);
      }
    });
  },

  // Begin placing content by checking to see if new items are needed and set a delay for content placement.
  startPlacement : function() {
    infiniteScroll.placingItem = true;

    // Change the phrase the loading bar displays if available.
    if (infiniteScroll.loadingPhrases.length != 0) {
      var randomNumber = Math.floor( Math.random() * infiniteScroll.loadingPhrases.length);
      $('.words', infiniteScroll.loader).html(infiniteScroll.loadingPhrases[randomNumber]);
    }

    // Delay placing the next article into the page.
    setTimeout(function () {
      infiniteScroll.placeContent();
    }, infiniteScroll.loadingDelay);
  },

  // Place the article content on the page
  placeContent : function() {
    // Select the item.
    var item = infiniteScroll.items[infiniteScroll.itemIndex];

    // Create the new html that will be appended.
    var itemHtml = '<div class="' + infiniteScroll.wrapper + '" data-id="' + item.id + '">' + item.content + '</div>';

    // Append the new item into the content.
    $('> .content', infiniteScroll.container).append(itemHtml);
    var collection = $('.' + infiniteScroll.wrapper + '[data-id="'+ item.id +'"]');

    // Call the remaining item's peices.
    infiniteScroll.placeSidebarAds(item, collection);
    // Due to Async with GPT, placing the bottom may return after completing core placement.
    infiniteScroll.placeBottom(item, collection);
    infiniteScroll.completePlacement();
  },

  // Evaluate the size and length of the Ads in the sidebar and remove sizes if necessary.
  evalSidebarAds : function(ad, height) {
    // Only adjust ads if enabled.
    if (infiniteScroll.adjustAds == true) {
      $.each(ad.size, function(key, val) {
        if (ad.size[key] != null) {

          // Loop backwards to allow for splicing out items in the array.
          var num = ad.size[key].length;
          while (num--) {
            if (ad.size[key][num][1] > (height - 100)) {
              ad.size[key].splice(num, 1);
            }
          }
        }
      });
    }
    // Return the ad units.
    return ad;
  },

  // Place the ads into the sidebar.
  placeSidebarAds : function(item, collection) {
    // We have to delay this logic as the browser has not yet had the CSS
    // applied to properly scale the article height when images are present.
    // The 100ms value was an arbitrary value that seemed to work in all
    // browsers tested, additional changes may be required in time.
    window.setTimeout(function () {
      // Check to see if there is a sidebar.
      if (collection.length && item.hasOwnProperty('sidebar') === true &&
          item.sidebar.hasOwnProperty('ads') === true) {
        var heightAvailable = collection.find('article').height()
          , usableAdFound = true
          , ads = []
          , adsSizes = []
          , heights = []
          , i;
        // Filter out any ad units that do not have the expected 1000 breakpoint.
        // If the sidebar breakpoint changes we will need to revisit this code.
        ads = _.filter(item.sidebar.ads, function (ad) {
          if (ad.ad.size.hasOwnProperty('1000')) {
            return true;
          }
        });

        // Iterate over the ads and group their ad sizes together based on height.
        for (i = 0; i < ads.length; i++) {
          adsSizes.push(_.clone(sortGroupAdSizes(ads[i].ad.size[1000])));
          heights.push(0);
          // Empty the ad's current size, will be populated below.
          ads[i].ad.size[1000] = [];
        }

        // Determine the ad sizes that can fit based on the content height.
        while (usableAdFound) {
          usableAdFound = false;
          for (i = 0; i < ads.length; i++) {
            // Only try to test this ad if there are sizes to test.
            if (adsSizes[i].length) {
              // Test the smallest size for the ad to see if it would fit,
              // excluding any prior size reduced from heightAvailable for the
              // ad unit.
              if (heightAvailable >= adsSizes[i][0][1][0][1] - heights[i]) {
                heightAvailable -= adsSizes[i][0][1][0][1] - heights[i];
                heights[i] = adsSizes[i][0][1][0][1];
                ads[i].ad.size[1000].push(adsSizes[i][0][1]);
                // Remove the tested array size from the group, we don't want to
                // test it on the next iteration and ad it to the sizes allowed
                // for the ad.
                adsSizes[i].shift();
                usableAdFound = true;
              }
              // The smallest height wouldn't fit, no need to test any larger
              // sizes on the next iteration.
              else {
                adsSizes[i] = [];
              }
            }
          }
        }

        for (i = 0; i < ads.length; i++) {
          if (ads[i].ad.size[1000].length) {
            item.sidebar.ads[i].ad.size[1000] = _.flatten(ads[i].ad.size[1000], true);
          }
          else {
            ads[i] = false;
          }
        }
        item.sidebar.ads = _.compact(ads);

        // Set the number of ads that need to be returned.
        // No idea what count is doing. Need to figure it out when refactoring.
        var count = 0;
        for (i = 0; i < item.sidebar.ads.length; i++) {
          // Create the div and place it on the page.
          $('aside.sidebar', collection)
              .append('<div class="infinite sidebar-item"><div id="' + item.sidebar.ads[i].identifier + '" class="ad-manager-ad gpt-ads first"></div></div>');

          // Finalize the ads.
          infiniteScroll.updateAds(item.sidebar.ads[i].identifier, item.sidebar.ads[i].ad, function() {
            count++;
          });
        };
      }
    }, 350);
  },

  // Place the bottom container after the article.
  placeBottom : function(item, collection) {
    if (collection.length) {
      // Generate the HTML for the divider.
      var html = '<div data-id="' + item.id + '" class="' + infiniteScroll.divider + '"></div>';
      var divider = '.' + infiniteScroll.divider + '[data-id="' + item.id + '"]';
      collection.append(html);

      // Place the bottom ad units.
      infiniteScroll.placeBottomAds(item, divider);
    }
  },

  // Place the ads into the bottom of the article.
  placeBottomAds : function(item, divider) {
    var count = 0;

    // Get the ID of the ad.
    var adName = item.below.ads[0].identifier;

    // Get the ad object
    var ad = item.below.ads[0].ad;

    // Create the div and place it on the page.
    var html = '<div class="divider-item"><div id="' + adName + '" class="ad-manager-ad gpt-ads"></div></div>';
    $(divider).append(html);

    // Finalize the ads.
    infiniteScroll.updateAds(adName, ad, function(size) {
      count++;
      // Continue only once after all ads have been placed.
      if (count == 1) {
        infiniteScroll.placeBottomRecirc(item, divider, adName, size);
      }
    });
  },

  // Place the recirc into the bottom of the article.
  placeBottomRecirc : function(item, divider, adName, size) {
    var height = 0;

    // Retrieve the height of the ad if it exists.
    if (size !== null && size.hasOwnProperty(1) == true) {
      height = size[1];
    }

    // Only display recirc if the ad is not too large.
    if (height <= infiniteScroll.maxAdHeight) {
      if (item.hasOwnProperty('recirc') == true) {

        // Set the html for the list of recirc.
        var html = '<div class="infinite more-like-this"><h2>' + infiniteScroll.recircTitle + '</h2>' + item.recirc + '</div></div>';

        // Place the recirc into the sidebar.
        $(divider).prepend(html);

        // Call the behaviors to set the images for lazy loading.
        Drupal.attachBehaviors();

      } else {
        // If recirc is unavailable revert to outbrain if that's available.
        if (typeof infiniteScroll.outbrain !== 'undefined') {
          var outbrain = infiniteScroll.outbrain;

          // For testing purposes use the selected source from the outbrain object if available.
          var src = outbrain.src != '' ? outbrain.src : item.url;

          // Create the outbrain widget.
          var html = '<div class="divider-item"><div class="OUTBRAIN" data-src="' + src + '" data-widget-id="' + outbrain.widget + '" data-ob-template="' + outbrain.template + '" ></div></div>';
          $(divider).prepend(html);

          // Let outbrain know that there is a new one available.
          if (typeof OBR == 'object') {
            OBR.extern.researchWidget();
          }
        }
      }
    }
  },

  // Register the ads for callbacks.
  updateAds : function(adName, ad, callback) {
    // Create a timeout in case ads die.
    var returned = false;
    var timeout = setTimeout(function() {
      adTimedOut();
    }, 1500);

    // Create a function to call back if time runs out.
    function adTimedOut() {
      returned = true;
      callback(null);
    }

    // Make a call to GPT and ask for an alert that the ad is placed.
    Drupal.GPT.registerSlot(adName, ad, function(object) {
      if (returned == false) {
        returned = true;
        clearTimeout(timeout);
        callback(object.size);
      }
    });
  },
  // Complete the placement of elements.
  completePlacement : function() {

    // If there is only one item left get a few more items from the server.
    var lastNum = infiniteScroll.items.length - 1;
    if (infiniteScroll.itemIndex == lastNum) {
      $.ajax({
        url: '/ajax/infinite-scroll?time='
          + infiniteScroll.items[lastNum].time
          + '&type=' + infiniteScroll.items[lastNum].type
          + '&id=' + infiniteScroll.items[lastNum].id
          + '&begin=' + infiniteScroll.config.begin
          + '&channel=' + infiniteScroll.config.channel
          + '&scope=' + infiniteScroll.config.scope
          + '&excludeid=' + infiniteScroll.config.excludeId
          + '&tids[]=' + infiniteScroll.config.tids,
        error: function(xhr, status, error) {
        },
        success: function(results) {
          if (typeof results == 'object') {
            if (results != '') {
              $.each(results, function(key, val) {
                infiniteScroll.items.push(results[key]);
              });
            } else {
              $(infiniteScroll.loader).hide();
              $('footer').show();
            }
          }
        },
      });
    }

    // Set the item index to the next needed number.
    infiniteScroll.itemIndex++;
    infiniteScroll.placingItem = false;

    // Call the behaviors to call all items that need to be updated.
    Drupal.attachBehaviors();
  },
}

// Attach the infinite Scroll.
Drupal.behaviors.infiniteScroll =  {
  attach: function (context, settings) {
    Drupal.GPT.pageOptions.refresh = 0;
    infiniteScroll.init();
  }
}

})(jQuery, Drupal, this, this.document);
;
