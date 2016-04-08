var tatOAS = tatOAS || {};
tatOAS.init = Date.now();
tatOAS.removedContainers = new Array();

var oas_tag = oas_tag || {};
oas_tag.url = 'oascentral.theactivetimes.com';
ad_target_sitepage = ad_target_sitepage.replace("//", "/");


var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

function resizeAdContainer(position){
	var e; (e=document.getElementById("oas_"+position)) && e.setAttribute("style",  'margin-left:auto;margin-right:auto;width:'+tatOAS.data[position].width+'px;');
}

function resizeTopAd(){
	if(document.getElementById("oas_Top")){
		resizeAdContainer("Top");
	}else{
		setTimeout(resizeTopAd, 500);
	}
}

function resizeBottomAd(){
	if(document.getElementById("oas_Bottom")){
		resizeAdContainer("Bottom");
	}else{
		setTimeout(resizeBottomAd, 500);
	}
}

function resizeX89Ad(){
	if(document.getElementById("oas_x89")){
		resizeAdContainer("oas_x89");
	}else{
		setTimeout(resizeX89Ad, 500);
	}
}

function resizeBottom1Ad(){
	if(document.getElementById("oas_Bottom1")){
		resizeAdContainer("Bottom1");
	}else{
		setTimeout(resizeBottom1Ad, 500);
	}
}

//For mobile
function resizeRight3(){
	if(document.getElementById("oas_frame_Right3")){
		var right3; (right3=document.getElementById("oas_Right3")) && right3.setAttribute("style",  'margin-left:auto;margin-right:auto;width:320px; height:50px;');
		var right3iFrame; (right3iFrame=document.getElementById("oas_frame_Right3")) && right3iFrame.setAttribute("style",  'width:320px; height:50px;');
	}else{
		setTimeout(resizeRight3, 500);
	}
}


//Mobile treatment
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){
  var viewport;
  viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute("content", "initial-scale=0.6, width=1280, user-scalable=1");
}
if( window.innerWidth < 1000){

	oas_tag.lazyload=true;

       var contentTypeWithMobileTreatment = {
		"story": true,
		"channel": true,
		"section": true,
		"homepage": true
	}

	domReady(function() {
		if(typeof ResponsiveBootstrapToolkit == 'undefined') return;

		if(ResponsiveBootstrapToolkit.is('>=md')){
			return;
		}
		//Remove ad containers that will never be used on mobile
		var desktopOnlyContainers = new Array("#oas_Top", "#oas_Bottom", "#oas_Frame1", "#oas_Frame2", "#oas_x88", "#oas_x89");
		for(var i=0; i<desktopOnlyContainers.length; i++){
			var e = document.querySelector( desktopOnlyContainers[i] );
			if(e){
				e.parentNode.removeChild(e);
				tatOAS.removedContainers.push(desktopOnlyContainers[i]);
			}
		}

		if( Drupal.settings.open_adstream &&
		    contentTypeWithMobileTreatment[Drupal.settings.open_adstream.node_type]
		  ){

				var contentType = Drupal.settings.open_adstream.node_type;

				if( contentType=="slideshow"){
					var e = document.querySelector(".ad-container #oas_Right");
					if(e){
						e.parentNode.removeChild(e);
						tatOAS.removedContainers.push(".ad-container #oas_Right");
					}
				}

				//Move ad containers to proper position for mobile view
				var movedContainers = new Array("#oas_Right", "#oas_Right2", "#oas_Right3");
				for(var i=0; i<movedContainers.length; i++){
					var e = document.querySelector( movedContainers[i] );
					if(e){
						e.parentNode.removeChild(e);
						tatOAS.removedContainers.push(movedContainers[i]);
					}
				}

				var oasRight = document.createElement("div");
				oasRight.setAttribute("id", "oas_Right");
				oasRight.setAttribute("style", "margin-left:auto;margin-right:auto;width:300px;");

				var oasRight2 = document.createElement("div");
				oasRight2.setAttribute("id", "oas_Right2");
				oasRight2.setAttribute("style", "margin-left:auto;margin-right:auto;width:300px;");

				var oasRight3 = document.createElement("div");
				oasRight3.setAttribute("id", "oas_Right3");
				oasRight3.setAttribute("style", "margin-left:auto;margin-right:auto;width:300px;");

				switch(contentType){
					case 'story':
						var paragraphs= document.querySelectorAll(".region-content .field-name-body .field-item > p");
						var adsAppended = 0;
						var characterCount = 0;
						for(var i=0; i<paragraphs.length; i++){
							characterCount+=paragraphs[i].textContent.length;
							if( characterCount>200 ){
								switch(adsAppended){
									case 0:
										paragraphs[i].appendChild(oasRight2);
										adsAppended++;
										break;
									case 1:
										paragraphs[i].appendChild(oasRight3);
										adsAppended++;
										break;
								}
								characterCount=0;
							}
							if(adsAppended>=2) break;
						}
						break;
					default:
						document.querySelector(".region-content > div:nth-of-type(1)").appendChild(oasRight);
						document.querySelector(".region-content > div:nth-of-type(2)").appendChild(oasRight2);
						document.querySelector(".region-content > div:nth-of-type(3)").appendChild(oasRight3);
						break;
				}
		    }
	});
}
// End mobile treatment

oas_tag.callbackHandler = function () {
	oas_tag.addHandler('callbackId', function(data){
		tatOAS.oasResponse= Date.now();
		tatOAS.data = data;

		if( data['Top'] ){
			if( data['Top'].width!=728 && data['Top'].width!=0){
				resizeTopAd();
			}
		}

		if( data['Bottom'] ){
			if( data['Bottom'].width!=300 && data['Bottom'].width!=0){
				resizeBottomAd();
			}
		}
		if( data['Bottom1'] ){
			if( data['Bottom1'].width!=300 && data['Bottom1'].width!=0){
				resizeBottom1Ad();
			}
		}
		if( data['x89'] ){
			if( data['x89'].width!=300 && data['x89'].width!=0){
				resizeX89Ad();
			}
		}

		//Resize Right3 to 320x50 (hardcoded for mobile - will need to change if we change the ad strategy)
		if( tatOAS.data.Right3.campaignId=="SpanFell/TDM_Rubicon_Mobile_Right3"){
		  resizeRight3();
		}
	})
};

oas_tag.sizes = function () {
	oas_tag.definePos('Top',    [728,90]);
	oas_tag.definePos('Right',  [300,250]);
	oas_tag.definePos('Right2', [300,250]);
	oas_tag.definePos('Right3', [300,250]);
	oas_tag.definePos('x88',    [300,250]);
	oas_tag.definePos('Bottom',  [300,250]);
	oas_tag.definePos('Frame1',  [1,1]);
	oas_tag.definePos('Frame2',  [1,1]);
	oas_tag.definePos('Bottom1',  [1,1]);
	oas_tag.definePos('x89',    [300,250]);
};

oas_tag.allowSizeOverride = true;

oas_tag.site_page = ad_target_sitepage;

(function() {
	oas_tag.version ='1'; oas_tag.loadAd = oas_tag.loadAd || function(){};
	var oas = document.createElement('script'),
	protocol = 'https:' == document.location.protocol?'https://':'http://',
	node = document.getElementsByTagName('script')[0];
	oas.type = 'text/javascript'; oas.async = true;
	oas.src = protocol + oas_tag.url + '/om/' + oas_tag.version + '.js';
	node.parentNode.insertBefore(oas, node);
})();
;
(function ($) {

  $(document).ready(function () {
    // size: embed video
    function iframe_embed_video (iframe) {
      iframe.height(iframe.width() * 9 / 16);
    }

    var selector = 'iframe.embed-video';
    $(selector).each(function (i, e) {
      var iframe = $(e);

      // trigger on resize
      iframe.resize(function () {
        iframe_embed_video(iframe);
      });

      // trigger immediately
      iframe_embed_video(iframe);
    });

    // 
    $(window).resize(function () {
      $(selector).trigger('resize');
    });

  });

})(jQuery);;
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
  this.element = $('<div class="progress-wrapper" aria-live="polite"></div>');
  this.element.html('<div id ="' + id + '" class="progress progress-striped active">' +
                    '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
                    '<div class="percentage sr-only"></div>' +
                    '</div></div>' +
                    '</div><div class="percentage pull-right"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.progress-bar', this.element).css('width', percentage + '%');
    $('div.progress-bar', this.element).attr('aria-valuenow', percentage);
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
  var error = $('<div class="alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">&times;</a><h4>Error message</h4></div>').append(string);
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

    // Position autocomplete results based on the scroll position of the modal.
    $('#modalContent .modal-content').delegate('input.form-autocomplete', 'keyup', function() {
      $('#autocomplete').css('top', $(this).position().top + $(this).outerHeight() + $(this).offsetParent().filter('#modal-content').scrollTop());
    });
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
        if (element_settings.url == '') {
          element_settings.url = $(this).closest('form').attr('action');
        }
        element_settings.event = 'click';
        element_settings.setClick = true;

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
          // Stop autocomplete from submitting.
          if (Drupal.autocompleteSubmit && !Drupal.autocompleteSubmit()) {
            return false;
          }
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

    // Attach behaviors within a modal dialog.
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.attachBehaviors('#modalContent', settings);
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

    // If we already have modalContent, remove it.
    if ($('#modalBackdrop').length) $('#modalBackdrop').remove();
    if ($('#modalContent').length) $('#modalContent').remove();

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

      if ($(target).is('#modalContent, body') || $(target).filter('*:visible').parents('#modalContent').length) {
        // Allow the event only if target is a visible child node
        // of #modalContent.
        return true;
      }
      else {
        $('#modalContent').focus();
      }

      event.preventDefault();
    };
    $('body').bind( 'focus', modalEventHandler );
    $('body').bind( 'keypress', modalEventHandler );

    // Create our content div, get the dimensions, and hide it
    var modalContent = $('#modalContent').css('top','-1000px');
    var mdcTop = wt + ( winHeight / 2 ) - (  modalContent.outerHeight() / 2);
    var mdcLeft = ( winWidth / 2 ) - ( modalContent.outerWidth() / 2);
    $('#modalBackdrop').css(css).css('top', 0).css('height', docHeight + 'px').css('width', docWidth + 'px').show();
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

      // position code lifted from http://www.quirksmode.org/viewport/compatibility.html
      if (self.pageYOffset) { // all except Explorer
      var wt = self.pageYOffset;
      } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        var wt = document.documentElement.scrollTop;
      } else if (document.body) { // all other Explorers
        var wt = document.body.scrollTop;
      }

      // Get our heights
      var docHeight = $(document).height();
      var docWidth = $(document).width();
      var winHeight = $(window).height();
      var winWidth = $(window).width();
      if( docHeight < winHeight ) docHeight = winHeight;

      // Get where we should move content to
      var modalContent = $('#modalContent');
      var mdcTop = wt + ( winHeight / 2 ) - ( modalContent.outerHeight() / 2);
      var mdcLeft = ( winWidth / 2 ) - ( modalContent.outerWidth() / 2);

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
  $(document).ready(function () {
    $(document).on('submit', 'form.simplenews_custom', function (event) {
      event.preventDefault();

      var form = $(this),
          mail = form.find('input[name="mail"]').val(),
          tids = [];
      form.find('input[type="checkbox"]').each(function (i, e) {
        var cbox = $(e);
        if (cbox.is(':checked')) {
          tids.push(cbox.val());
        }
      });

      // request
      var request = $.ajax({
        url     : '/simplenews_custom',
        method  : "POST",
        data    : {tids: tids, mail: mail},
        dataType: "json"
      });

      //
      form.find('.form-type-item').show();
      form.find('.form-type-checkboxes').hide();
      form.find('.actions').hide();

      request.done(function (msg) {
        //
      });

      request.fail(function (jqXHR, textStatus) {
        //
      });
    });
  });
})(jQuery);;
(function ($) {
  $(document).ready(function () {

    var blocks = $('.you-are-here');
    if (blocks.length) {
      $.ajax({
        type    : "POST",
        dataType: 'html',
        url     : "/tat_gatherpoint",
        data    : {
          page : (typeof Drupal.settings.tat_gatherpoint!= 'undefined') ? Drupal.settings.tat_gatherpoint['page'] : ''
        },
        success : function (response) {
          if (response) {
            blocks.replaceWith(response);
          }
        }
      });
    }

  });
})(jQuery);
;
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
;
(function ($, Drupal) {
  var timer_starts, timer_ends;
  var right_sidebar_top = 200;
  var ads_released = false;


  /**
   * 1- On load: make header, top ad and right sidebar sticky
   * 2- After timer ends: release top ad and right sidebar
   */
  /*
   @todo: use bootstrap responsive toolkit
   */
  function is_tablet() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return /android|ipad|playbook|silk/i.test(a);
  }

  var isTablet = is_tablet();

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }


  function AdsInsertionListener(event) {
    if (event.target && event.target.getAttribute) {
      if (event.target.getAttribute('id') == 'oas_frame_Top') {
        AdsHaveLoaded();
      }
    }
  }

  var AdsInsertionTimeout;

  $(function () {
    timer_starts = Drupal.settings.tat_sticky_ads.timer_starts || 3;
    timer_ends = Drupal.settings.tat_sticky_ads.timer_ends || 5;
    // Make everithing sticky
    $(".navbar.navbar-default").stick_in_parent({parent: document.body});

    if ($(document.body).hasClass('node-type-slideshow')) {
      return;
    }

    // Top ad
    $("<div id='_sticky_spacer_oas_dx_ad_top1'></div>").insertBefore(".main-top");
    $(".main-top").stick_in_parent({
      spacer: '#_sticky_spacer_oas_dx_ad_top1',
      parent: document.body,
      offset_top: 90
    });
    // Carousel
    if ($("#block-trending-stories-trending-stories #trending-stories:visible").length > 0) {
      $("#block-trending-stories-trending-stories").stick_in_parent({
        parent: document.body,
        offset_top: 165
      });
      right_sidebar_top = 305;
    }

    // Right sidebar
    $("<div id='_sticky_spacer_sidebar-second'></div>").insertBefore(".main-top");
    $(".region.region-sidebar-first").stick_in_parent({
      spacer: '#_sticky_spacer_sidebar-second',
      parent: document.body,
      offset_top: right_sidebar_top,
      bottoming: false,
      inner_scrolling: false
    });

    // Listen for Ads loaded...
    document.addEventListener("DOMNodeInserted", AdsInsertionListener);
    // ... or fallback to timer_starts seconds
    AdsInsertionTimeout = setTimeout(AdsHaveLoaded, timer_starts * 1000);
  });


  var AdsHaveLoaded = once(function () {
    // Remove listeners and fallback timer
    document.removeEventListener("DOMNodeInserted", AdsInsertionListener);
    clearTimeout(AdsInsertionTimeout);

    // Wait to hide the ads
    setTimeout(ReleaseAds, timer_ends * 1000);
  });

  var ReleaseAds = function () {
    $(".main-top").trigger("sticky_kit:detach");
    $(".region.region-sidebar-first").trigger("sticky_kit:detach");

    $("#block-trending-stories-trending-stories")
      .trigger("sticky_kit:detach")
      .stick_in_parent({
        parent: document.body,
        offset_top: 82
      });

    $("#header").addClass('noad');
    $(document.body).addClass('no-fixed-ads');
  }

})(jQuery, Drupal);
;
(function ($) {
  Drupal.behaviors.tdmGlobalMobileMenu = {
    attach: function (context, settings) {
      var block_duration = Drupal.settings.tdm_facebook_flyout.block_duration || 20;
      var cookie_duration = Drupal.settings.tdm_facebook_flyout.cookie_duration || 15;
      var hide_timeout;

      function setCookie(cname, cvalue, exdays) {
        if(exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires="+d.toUTCString();
        }
        document.cookie = cname + "=" + cvalue + "; " + (expires ? expires + "; " : "") + "path=/";
      }
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
      }

      function closeFacebookFlyout() {
        // Either closed manually or automatically
        // remember for this session that the overlay has been closed
        setFacebookFlyoutSessionCookie();

        if(hide_timeout) {
          try {
            clearTimeout(hide_timeout);
          } catch(e) {}
        }
        $('.block.block-fblikebutton').animate({ right: -400 }, 750, function() {
          $('.block.block-fblikebutton').hide();
        });
      }

      // Sets a cookie to remember opting out for the Facebook flyout
      function setFacebookFlyoutCookie() {
        setCookie('TDM_FacebookFlyout_Optout', 1, cookie_duration);
      }

      // Reads the opt-out cookie
      function getFacebookFlyoutCookie() {
        return getCookie('TDM_FacebookFlyout_Optout');
      }

      // Sets a cookie to remember the overlay has closed by itself on this session
      function setFacebookFlyoutSessionCookie() {
        setCookie('TDM_FacebookFlyout_Session', 1);
      }

      // Reads the session cookie
      function getFacebookFlyoutSessionCookie() {
        return getCookie('TDM_FacebookFlyout_Session');
      }

      $('.block.block-fblikebutton', context).once('show-facebook-flyout', function(){
        // Create and style the close button
        $closeButton = $("<div>")
          .html("&times;")
          .css('position', 'absolute')
          .css('top', '15px')
          .css('right', '15px')
          .css('cursor', 'pointer')
          .css('font-size', '16px');

        // Handle click on close button
        $closeButton.click(function() {
          closeFacebookFlyout();
          setFacebookFlyoutCookie();
        });

        // Append close button to block
        $closeButton.appendTo('.block.block-fblikebutton');

        // If user opted out, or the overlay closed by itself on this session
        if(getFacebookFlyoutCookie() || getFacebookFlyoutSessionCookie()) {
          // Hide the block (already invisible by css position)
          $('.block.block-fblikebutton').hide();
        } else {
          // Wait for 5 secs and show the block
          setTimeout(function() {
            $('.block.block-fblikebutton').animate({ right: 0 }, 750);
            hide_timeout = setTimeout(closeFacebookFlyout, block_duration * 1000);
          }, 5000);
        }
      });
    }
  };
})(jQuery);
;
/**
 * Makes the AJAX requests to the social providers
 *  to retrieve the sharing count for the given url.
 *
 * @param url
 */
function sharecount_trigger(url) {
  //
  providers = [];

  //
  providers.push({
    url     : 'http://cdn.api.twitter.com/1/urls/count.json',
    param   : 'url',
    callback: 1
  });
  providers.push({
    url     : 'http://graph.facebook.com/',
    param   : 'id',
    callback: 0
  });
  providers.push({
    url     : 'http://api.pinterest.com/v1/urls/count.json',
    param   : 'url',
    callback: 1
  });
  providers.push({
    url     : 'http://www.linkedin.com/countserv/count/share',
    param   : 'url',
    callback: 1
  });

  var counts = [];
  for (var i = 0; i < providers.length; i++) {
    var data = {};
    data[providers[i].param] = url;

    jQuery.ajax({
      url     : providers[i].url,
      data    : data,
      dataType: 'jsonp',
      jsonp   : "callback",
      success : sharecount_trigger_jsonp
    });
  }

  /**
   *
   * @param data
   */
  function sharecount_trigger_jsonp(data) {
    if (typeof data.shares != 'undefined') {
      counts.push(parseInt(data.shares));
    }
    else if (typeof data.count != 'undefined') {
      counts.push(parseInt(data.count));
    }
    else {
      counts.push(0);
    }

    if (counts.length == providers.length) {
      var count = 0;
      for (var i = 0; i < counts.length; i++) {
        count += counts[i];
      }

      jQuery('body').trigger('share_count', [count]);
    }
  }
}

/**
 * Format count of shares.
 *
 * @param count
 * @returns {string}
 */
function sharecount_format(count) {
  if (count >= 1000000) {
    return Math.round((count / 1000000) * 10) / 10 + 'M';
  }
  if (count >= 10000) {
    return Math.round(count / 1000) + 'k';
  }
  if (count >= 1000) {
    return Math.round((count / 1000) * 10) / 10 + 'k';
  }
  if (count >= 100) {
    return '1k';
  }
  if (count > 25) {
    return count;
  }
  return '';
}

(function ($) {

  var tdmSocialfixed = function tdmSocialfixed() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop < 500) {
      $('#block-tdm-social-buttons-tdm-social-buttons').stop().animate({"opacity": '0'});
    } else {
      $left = -46;
      try {
        $left = $('.container.page').offset().left - 46;
        if ($left < 0) {
          $('#block-tdm-social-buttons-tdm-social-buttons').stop().animate({"opacity": '0'});
        } else {
          $('#block-tdm-social-buttons-tdm-social-buttons').stop().animate({"left": $left + 'px', "opacity": '1'});
        }
      } catch(e) {}
    }
  };

  Drupal.behaviors.tdm_social_buttons = {
    attach: function (context, settings) {
      $(window).scroll(function () {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
          tdmSocialfixed();
        }, 250));
      });

      $(window).resize(function () {
        tdmSocialfixed();
      });

      tdmSocialfixed();
    }
  };

  $(document).ready(function () {

    // more social
    $('.tdm-social-top, .tdm-social-bottom, .tdm-social-video').each(function (i, e) {
      var $$ = $(e);
      $$.find('.more-social').click(function () {
        $$.toggleClass('in');
      });
    });

    // sharecount
    if ((typeof Drupal.settings.social_buttons != 'undefined') && !!Drupal.settings.social_buttons.sharecount) {
      var shareurl = 'http://www.theactivetimes.com' + window.location.pathname;
      sharecount_trigger(shareurl);
    }

    // sharecount: trigger
    $('body').on('share_count', function (e, count) {
      var sharecount = sharecount_format(count);
      $('.tdm-social.counter').html('<span>' + sharecount + '</span> Shares');
    });

  });

}(jQuery));
;
(function ($) {
  $(document).ready(function () {
    var $$ = $('#trending-stories');

    $$.find('.trending-stories-content .trending-stories-content-inner').cycle({
      fx     : 'scrollHorz',
      speed  : 1000,
      timeout: 5000,
      prev   : '.trending-stories-control .control.prev',
      next   : '.trending-stories-control .control.next',
      before : trending_stories_slide_change
    });

    //
    function trending_stories_slide_change(curr, next, opts) {
      $$.find('.trending-stories-control .name span').html($(next).data('channel'));
    }

    // remove item from trending ribbon
    if (typeof Drupal.settings.trending_stories != 'undefined') {
      $$.find('.view .trending-' + Drupal.settings.trending_stories).parents('.views-row').remove();
    }
  });
})(jQuery);;
(function ($) {
  $(function() {
    var votecount = 0;
    try {
      votecount = $(".vote-count[data-count]").attr('data-count');
    } catch(e) {}

    if(votecount < 7) {
      $(".vote-count[data-count]").hide();
      $(".view-story-blocks.view-id-story_blocks.view-display-id-story_header .views-field.views-field-field-rating").hide();
    }
  });
})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
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
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
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
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
