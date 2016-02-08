; (function ($, window, document) {
    if (!$.LEGACY) {
        $.LEGACY = new Object();
    };

    $.LEGACY.GlobalFooter = function (el, options) {
        var base = this;

        base.$el = $(el);
        base.el = el;
        base.$hoverImageLinks = $(el).find('.HasHoverImage');
        base.$hoverSectionTitle = $(el).find('.GlobalFooter_Section_Title');

        base.init = function () {
            base.options = $.extend({}, $.LEGACY.GlobalFooter.defaultOptions, options);
            base.options.isMobile = $('.GlobalFooter_JSMediaQueryHook').is(':visible');

            if (window.onpagehide === null || window.onpageshow === null) {
                $(window).on("pageshow", base.resetFooter);
                $(window).on("pagehide", base.resetFooter);
            }
            else if (window.addEventListener) {
                $(window).on("unload", base.resetFooter);
            }

            base.$hoverImageLinks.each(function () {
                $(this).hover(function () {
                    var overSrc = $(this).find('img').attr('data-over');
                    $(this).find('img').attr('src', overSrc);
                }, function () {
                    var offSrc = $(this).find('img').attr('data-off');
                    $(this).find('img').attr('src', offSrc);
                });
            });

            if (window.addEventListener) {
                window.addEventListener('resize', base.resize);
            }
            else {
                window.attachEvent('onresize', base.resize);
            }
        }

        base.$hoverSectionTitle.click(function () {
            $(this).parent('.GlobalFooter_Section').toggleClass('open');
        });

        base.resize = function () {
            if ($('.GlobalFooter_JSMediaQueryHook').is(':visible') && !base.options.isMobile) {
                base.options.isMobile = true;
            }
            else if (!$('.GlobalFooter_JSMediaQueryHook').is(':visible') && base.options.isMobile) {
                base.options.isMobile = false;
            }
        }

        base.resetFooter = function () {
            $('.GlobalFooter_Section').removeClass('open');
        }

        base.init();
    };

    $(document).ready(function() {
        $('#GlobalFooterWidget').legacy_GlobalFooter();
    });

    $.LEGACY.GlobalFooter.defaultOptions =
    {
        desktopMenuBreakpoint: 767,
        isMobile: false
    }

    $.fn.legacy_GlobalFooter =
        function () {
            return new $.LEGACY.GlobalFooter(this);
        };
})(jQuery, window, document)