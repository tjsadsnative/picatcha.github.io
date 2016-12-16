; (function ($, window, document) {
    if (!$.LEGACY) {
        $.LEGACY = new Object();
    };

    $.LEGACY.Promo = function (el, options) {

        var base = this;

        base.$el = $(el);
        base.$Promo_ImageContainer = $(el).find('.Promo_ImageContainer');
        base.$Promo_Image = $(el).find('.Promo_ImageContainer .Promo_Image');
        base.$Promo_Text_DetailsLink = $(el).find('.Promo_Text_Details a');
        base.$Promo_Gradient = $(el).find('.Promo_Gradient');
        base.$Promo_Text = $(el).find('.Promo_Text');
        base.$Promo_Text_Description = $(el).find('.Promo_Text_Description');
        base.el = el;

        base.$el.data('LEGACY.Promo', base);

        base.init = function () {
            base.options = $.extend({}, $.LEGACY.Promo.defaultOptions, options);

            base.on_ImageLoaded(base.$Promo_Image);

            if ($('html').hasClass('no-touch')) {// uses Modernizr classes on HTML tag to verify if no-touch is set (to remove hover functionality from touch devices)
                if (base.$el.data("hoverStyle") == "Rollup") {
                    base.$Promo_Image.addClass('rollup');
                    base.$Promo_Text.addClass('rollup');
                    base.$Promo_Gradient.css('display', 'block');
                    base.$el.hover(
                        function () {
                            var width = base.$el.width();
                            var newTop = 0;
                            var topPos = base.options.defaultImageHeight - base.options.descriptionHeight - base.options.extraLineHeight;
                            base.$Promo_Text.css('top', topPos + 'px');
                            //
                            var topImagePos = newTop - ((base.options.descriptionHeight + base.options.extraLineHeight) / 2);
                            base.$Promo_Image.css('top', topImagePos + 'px');
                            //
                            base.$Promo_Gradient.addClass('over');
                            base.$Promo_Gradient.removeClass('off');
                        },
                        function () {
                            var width = base.$el.width();
                            var newHeight = width * (408 / 626);
                            var newTop = 100 - (newHeight / 2);
                            base.$Promo_Text.css('top', base.options.defaultImageHeight + 'px');
                            //
                            base.$Promo_Image.css('top', 0);
                            //
                            base.$Promo_Gradient.addClass('off');
                            base.$Promo_Gradient.removeClass('over');
                        }
                    );
                } else {
                    base.$Promo_Image.addClass('zoom');
                }
            }

            if (window.addEventListener) {
                window.addEventListener('resize', function (evt) {
                    base.resizeMe();
                    setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

                });

                window.addEventListener('orientationchange', function () {
                    base.resizeMe();
                    setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

                }, false);
            }
            else {//for IE versions <=8
                window.attachEvent('onresize', function (evt) {
                    base.resizeMe();
                    setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

                });

                window.attachEvent('onorientationchange', function () {
                    base.resizeMe();
                    setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

                }, false);
            }

            if (Modernizr.mq('(orientation: portrait)')) {
                base.options.mql = window.matchMedia('(orientation: portrait)');
                base.options.mql.addListener(function (m) {
                    base.resizeMe();
                    setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

                });
            }


            base.resizeMe();
            setTimeout(function () { base.resizeMe(); }, 500);// added to correct for slow resize rendering

        };

        base.resizeMe = function () {
            var width = base.$el.width();
            var newLeft = (width / 2) - (base.options.defaultImageWidth / 2);
            var newTop = 0;

            base.$Promo_Image.css('left', newLeft + 'px');
            base.$Promo_Image.css('top', newTop + 'px');

            base.options.fullContentHeight = base.$Promo_Text.outerHeight();
            base.options.descriptionHeight = base.$Promo_Text_Description.outerHeight();
            base.options.downHeight = base.options.fullContentHeight - base.options.descriptionHeight - base.options.extraLineHeight;
            base.$el.css('height', base.options.defaultImageHeight + base.options.downHeight + 'px');
            var heightOfModule = base.options.defaultImageHeight + base.options.downHeight;
        };

        base.on_ImageLoaded = function ($img) {
            $img.imagesLoaded(function () {
                $img.css('opacity', 1);
            });
        };

        base.init();

    };

    $.LEGACY.Promo.defaultOptions = {
        mql: {},
        rolloverStyle: 'none',
        fullContentHeight: 0,
        descriptionHeight: 0,
        downHeight: 0,
        defaultImageWidth: 768,
        defaultImageHeight: 200,
        extraLineHeight: 8
    };

    $.fn.legacy_Promo = function (options) {
        return this.each(function () {
            (new $.LEGACY.Promo(this, options));
        });
    };

    $.fn.legacy_Promo.options = {

    };

})(jQuery, window, document);
