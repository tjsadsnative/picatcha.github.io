/**
 * @file
 * bootstrap.js
 *
 * Provides general enhancements and fixes to Bootstrap's JS files.
 */

var Drupal = Drupal || {};

(function($, Drupal){
  "use strict";

  Drupal.behaviors.bootstrap = {
    attach: function(context) {
      // Provide some Bootstrap tab/Drupal integration.
      $(context).find('.tabbable').once('bootstrap-tabs', function () {
        var $wrapper = $(this);
        var $tabs = $wrapper.find('.nav-tabs');
        var $content = $wrapper.find('.tab-content');
        var borderRadius = parseInt($content.css('borderBottomRightRadius'), 10);
        var bootstrapTabResize = function() {
          if ($wrapper.hasClass('tabs-left') || $wrapper.hasClass('tabs-right')) {
            $content.css('min-height', $tabs.outerHeight());
          }
        };
        // Add min-height on content for left and right tabs.
        bootstrapTabResize();
        // Detect tab switch.
        if ($wrapper.hasClass('tabs-left') || $wrapper.hasClass('tabs-right')) {
          $tabs.on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
            bootstrapTabResize();
            if ($wrapper.hasClass('tabs-left')) {
              if ($(e.target).parent().is(':first-child')) {
                $content.css('borderTopLeftRadius', '0');
              }
              else {
                $content.css('borderTopLeftRadius', borderRadius + 'px');
              }
            }
            else {
              if ($(e.target).parent().is(':first-child')) {
                $content.css('borderTopRightRadius', '0');
              }
              else {
                $content.css('borderTopRightRadius', borderRadius + 'px');
              }
            }
          });
        }
      });
    }
  };

  /**
   * Bootstrap Popovers.
   */
  Drupal.behaviors.bootstrapPopovers = {
    attach: function (context, settings) {
      if (settings.bootstrap && settings.bootstrap.popoverEnabled) {
        var elements = $(context).find('[data-toggle="popover"]').toArray();
        for (var i = 0; i < elements.length; i++) {
          var $element = $(elements[i]);
          var options = $.extend(true, {}, settings.bootstrap.popoverOptions, $element.data());
          $element.popover(options);
        }
      }
    }
  };

  /**
   * Bootstrap Tooltips.
   */
  Drupal.behaviors.bootstrapTooltips = {
    attach: function (context, settings) {
      if (settings.bootstrap && settings.bootstrap.tooltipEnabled) {
        var elements = $(context).find('[data-toggle="tooltip"]').toArray();
        for (var i = 0; i < elements.length; i++) {
          var $element = $(elements[i]);
          var options = $.extend(true, {}, settings.bootstrap.tooltipOptions, $element.data());
          $element.tooltip(options);
        }
      }
    }
  };

  /**
   * Anchor fixes.
   */
  var $scrollableElement = $();
  Drupal.behaviors.bootstrapAnchors = {
    attach: function(context, settings) {
      var i, elements = ['html', 'body'];
      if (!$scrollableElement.length) {
        for (i = 0; i < elements.length; i++) {
          var $element = $(elements[i]);
          if ($element.scrollTop() > 0) {
            $scrollableElement = $element;
            break;
          }
          else {
            $element.scrollTop(1);
            if ($element.scrollTop() > 0) {
              $element.scrollTop(0);
              $scrollableElement = $element;
              break;
            }
          }
        }
      }
      if (!settings.bootstrap || !settings.bootstrap.anchorsFix) {
        return;
      }
      var anchors = $(context).find('a').toArray();
      for (i = 0; i < anchors.length; i++) {
        if (!anchors[i].scrollTo) {
          this.bootstrapAnchor(anchors[i]);
        }
      }
      $scrollableElement.once('bootstrap-anchors', function () {
        $scrollableElement.on('click.bootstrap-anchors', 'a[href*="#"]:not([data-toggle],[data-target],[data-slide])', function(e) {
          this.scrollTo(e);
        });
      });
    },
    bootstrapAnchor: function (element) {
      element.validAnchor = element.nodeName === 'A' && (location.hostname === element.hostname || !element.hostname) && element.hash.replace(/#/,'').length;
      element.scrollTo = function(event) {
        var attr = 'id';
        var $target = $(element.hash);
        if (!$target.length) {
          attr = 'name';
          $target = $('[name="' + element.hash.replace('#', '') + '"');
        }
        var offset = $target.offset().top - parseInt($scrollableElement.css('paddingTop'), 10) - parseInt($scrollableElement.css('marginTop'), 10);
        if (this.validAnchor && $target.length && offset > 0) {
          if (event) {
            event.preventDefault();
          }
          var $fakeAnchor = $('<div/>')
            .addClass('element-invisible')
            .attr(attr, $target.attr(attr))
            .css({
              position: 'absolute',
              top: offset + 'px',
              zIndex: -1000
            })
            .appendTo(document.body);
          $target.removeAttr(attr);
          var complete = function () {
            location.hash = element.hash;
            $fakeAnchor.remove();
            $target.attr(attr, element.hash.replace('#', ''));
          };
          if (Drupal.settings.bootstrap.anchorsSmoothScrolling) {
            $scrollableElement.animate({ scrollTop: offset, avoidTransforms: true }, 400, complete);
          }
          else {
            $scrollableElement.scrollTop(offset);
            complete();
          }
        }
      };
    }
  };

})(jQuery, Drupal);
;
/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   2.5.0 (2015-05-14)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
var ResponsiveBootstrapToolkit = (function($){

    // Internal methods
    var internal = {

        /**
         * Breakpoint detection divs for each framework version
         */
         detectionDivs: {
             // Bootstrap 3
             bootstrap: {
                 'xs': $('<div class="device-xs visible-xs visible-xs-block"></div>'),
                 'sm': $('<div class="device-sm visible-sm visible-sm-block"></div>'),
                 'md': $('<div class="device-md visible-md visible-md-block"></div>'),
                 'lg': $('<div class="device-lg visible-lg visible-lg-block"></div>')
             },
             // Foundation 5
             foundation: {
                 'small':  $('<div class="device-xs show-for-small-only"></div>'),
                 'medium': $('<div class="device-sm show-for-medium-only"></div>'),
                 'large':  $('<div class="device-md show-for-large-only"></div>'),
                 'xlarge': $('<div class="device-lg show-for-xlarge-only"></div>')
             }
         },

         /**
         * Append visibility divs after DOM laoded
         */
         applyDetectionDivs: function() {
             $(document).ready(function(){
                 $.each(self.breakpoints, function(alias){
                     self.breakpoints[alias].appendTo('.responsive-bootstrap-toolkit');
                 });
             });
         },

        /**
         * Determines whether passed string is a parsable expression
         */
        isAnExpression: function( str ) {
            return (str.charAt(0) == '<' || str.charAt(0) == '>');
        },

        /**
         * Splits the expression in into <|> [=] alias
         */
        splitExpression: function( str ) {

            // Used operator
            var operator = str.charAt(0);
            // Include breakpoint equal to alias?
            var orEqual  = (str.charAt(1) == '=') ? true : false;

            /**
             * Index at which breakpoint name starts.
             *
             * For:  >sm, index = 1
             * For: >=sm, index = 2
             */
            var index = 1 + (orEqual ? 1 : 0);

            /**
             * The remaining part of the expression, after the operator, will be treated as the
             * breakpoint name to compare with
             */
            var breakpointName = str.slice(index);

            return {
                operator:       operator,
                orEqual:        orEqual,
                breakpointName: breakpointName
            };
        },

        /**
         * Returns true if currently active breakpoint matches the expression
         */
        isAnyActive: function( breakpoints ) {
            var found = false;
            $.each(breakpoints, function( index, alias ) {
                // Once first breakpoint matches, return true and break out of the loop
                if( self.breakpoints[ alias ].is(':visible') ) {
                    found = true;
                    return false;
                }
            });
            return found;
        },

        /**
         * Determines whether current breakpoint matches the expression given
         */
        isMatchingExpression: function( str ) {

            var expression = internal.splitExpression( str );

            // Get names of all breakpoints
            var breakpointList = Object.keys(self.breakpoints);

            // Get index of sought breakpoint in the list
            var pos = breakpointList.indexOf( expression.breakpointName );

            // Breakpoint found
            if( pos !== -1 ) {

                var start = 0;
                var end   = 0;

                /**
                 * Parsing viewport.is('<=md') we interate from smallest breakpoint ('xs') and end
                 * at 'md' breakpoint, indicated in the expression,
                 * That makes: start = 0, end = 2 (index of 'md' breakpoint)
                 *
                 * Parsing viewport.is('<md') we start at index 'xs' breakpoint, and end at
                 * 'sm' breakpoint, one before 'md'.
                 * Which makes: start = 0, end = 1
                 */
                if( expression.operator == '<' ) {
                    start = 0;
                    end   = expression.orEqual ? ++pos : pos;
                }
                /**
                 * Parsing viewport.is('>=sm') we interate from breakpoint 'sm' and end at the end
                 * of breakpoint list.
                 * That makes: start = 1, end = undefined
                 *
                 * Parsing viewport.is('>sm') we start at breakpoint 'md' and end at the end of
                 * breakpoint list.
                 * Which makes: start = 2, end = undefined
                 */
                if( expression.operator == '>' ) {
                    start = expression.orEqual ? pos : ++pos;
                    end   = undefined;
                }

                var acceptedBreakpoints = breakpointList.slice(start, end);

                return internal.isAnyActive( acceptedBreakpoints );

            }
        }

    };

    // Public methods and properties
    var self = {

        /**
         * Determines default debouncing interval of 'changed' method
         */
        interval: 300,

        /**
         *
         */
        framework: null,

        /**
         * Breakpoint aliases, listed from smallest to biggest
         */
        breakpoints: null,

        /**
         * Returns true if current breakpoint matches passed alias
         */
        is: function( str ) {
            if( internal.isAnExpression( str ) ) {
                return internal.isMatchingExpression( str );
            }
            return self.breakpoints[ str ] && self.breakpoints[ str ].is(':visible');
        },

        /**
         * Determines which framework-specific breakpoint detection divs to use
         */
        use: function( frameworkName, breakpoints ) {
            self.framework = frameworkName.toLowerCase();

            if( self.framework === 'bootstrap' || self.framework === 'foundation') {
                self.breakpoints = internal.detectionDivs[ self.framework ];
            } else {
                self.breakpoints = breakpoints;
            }

            internal.applyDetectionDivs();
        },

        /**
         * Returns current breakpoint alias
         */
        current: function(){
            var name = 'unrecognized';
            $.each(self.breakpoints, function(alias){
                if (self.is(alias)) {
                    name = alias;
                }
            });
            return name;
        },

        /*
         * Waits specified number of miliseconds before executing a callback
         */
        changed: function(fn, ms) {
            var timer;
            return function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    fn();
                }, ms || self.interval);
            };
        }

    };

    // Create a placeholder
    $('<div class="responsive-bootstrap-toolkit"></div>').appendTo('body');

    if( self.framework === null ) {
        self.use('bootstrap');
    }

    return self;

})(jQuery);
;
(function($, document, window, viewport){

  $(function() {
    if($(document.body).hasClass('node-type-channel')) {
      //Move the Video block between its original position (md+) and the content section (md-)
        //Sections: #block-views-channel-sections-block
        //Video: #block-dam-blocks-dam-blocks-block

        // 1, read the original position of video block and sections, and add a placeholder
        $("<div id='video-placeholder-sidebar'></div>").insertBefore('#block-dam-blocks-dam-blocks-block');
        $("<div id='video-placeholder-content'></div>").insertBefore('#block-views-channel-sections-block');

        function moveVideoOnChannels(current_breakpoint) {
          if(current_breakpoint == 'xs' || current_breakpoint == 'sm') {
            $('body.node-type-channel #block-dam-blocks-dam-blocks-block').insertAfter('#video-placeholder-content');
          } else {
            $('body.node-type-channel #block-dam-blocks-dam-blocks-block').insertAfter('#video-placeholder-sidebar');
          }
        }
        // Listen to resize events
        $(window).resize(
          viewport.changed(function(){
            moveVideoOnChannels(viewport.current());
          })
        );

        // Move everything as soon as the page loaded
        moveVideoOnChannels(viewport.current());
    } else if ($(document.body).hasClass('node-type-section')) {
      $("<div id='video-placeholder-sidebar'></div>").insertBefore('#block-dam-blocks-dam-blocks-block');
      $("<div id='video-placeholder-content'></div>").insertBefore('#block-views-featured-stories-block-1');

      function moveVideoOnSections(current_breakpoint) {
        if(current_breakpoint == 'xs' || current_breakpoint == 'sm') {
          $('body.node-type-section #block-dam-blocks-dam-blocks-block').insertAfter('#video-placeholder-content');
        } else {
          $('body.node-type-section #block-dam-blocks-dam-blocks-block').insertAfter('#video-placeholder-sidebar');
        }
      }
      $(window).resize(
        viewport.changed(function(){
          moveVideoOnSections(viewport.current());
        })
      );
      moveVideoOnSections(viewport.current());
    }
  });
})(jQuery, document, window, ResponsiveBootstrapToolkit);
;
