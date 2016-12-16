; (function ($, window, document) {
    if (!$.LEGACY) {
        $.LEGACY = new Object();
    };

    $.LEGACY.NotableDeath = function (el, options) {

        var base = this;

        base.el = el;
        base.$el = $(el);
        base.$notableDeathImageHolder = $(el).find('.NotableDeath_ImageHolder');
        base.$notableDeathImage = $(el).find('.NotableDeath_ImageHolder_Image');
        base.$notableDeathSubtitleLink = $(el).find('.NotableDeath_Content_Text_Subtitle');
        base.$notableDeathGradient = $(el).find('.NotableDeath_Gradient');
        base.$notableDeathContent = $(el).find('.NotableDeath_Content');
        base.$notableDeathText = $(el).find('.NotableDeath_Content_Text');
        base.$notableDeathTitle = $(el).find('.NotableDeath_Content_Text_Title');
        base.$notableDeathArrow = $(el).find('.NotableDeath_Content_Text_Title_LinkArrow');
        base.$notableDeathSubtitle = $(el).find('.NotableDeath_Content_Text_Subtitle');
        base.$notableDeathDetails = $(el).find('.NotableDeath_Content_Text_Details');
        base.$notableDeathSummary = $(el).find('.NotableDeath_Content_Text_Details_Summary');
        base.$notableDeathDesc = $(el).find('.NotableDeath_Content_Text_Details_Description');

        base.$el.data('LEGACY.NotableDeath', base);

        base.init = function () {

            base.options = $.extend({}, $.LEGACY.NotableDeath.defaultOptions, options);
            //

            base.onImageLoaded(base.$notableDeathImage);

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


            if ($('html').hasClass('no-touch')) {
                base.$el.hover(function () {
                    var topPos = base.options.defaultImageHeight - base.options.descriptionHeight + base.options.summaryHeight;
                    base.$notableDeathContent.css('top', topPos + 'px');
                    base.$notableDeathSummary.css('opacity', 0);
                    base.$notableDeathDesc.css('opacity', 1);
                    base.$notableDeathArrow.addClass('open');

                    var newTopPos = (-base.options.descriptionHeight + base.options.summaryHeight) / 2;
                    base.$notableDeathImage.css('top', newTopPos + 'px');
                    base.$notableDeathGradient.addClass('over');
                    base.$notableDeathGradient.removeClass('off');
                }, function () {
                    base.$notableDeathContent.css('top', base.options.defaultImageHeight + 'px');
                    base.$notableDeathSummary.css('opacity', 1);
                    base.$notableDeathDesc.css('opacity', 0);
                    base.$notableDeathArrow.removeClass('open');

                    base.$notableDeathImage.css('top', 0 + 'px');
                    base.$notableDeathGradient.addClass('off');
                    base.$notableDeathGradient.removeClass('over');
                });
            }


        };

        base.resizeMe = function () {
            var width = base.$el.width();

            var imageXPos = (width / 2) - 384;
            base.$notableDeathImage.css('left', imageXPos + 'px');
            //
            base.options.titleHeight = base.$notableDeathTitle.outerHeight();
            base.options.subtitleHeight = base.$notableDeathSubtitle.outerHeight();
            base.options.detailsHeight = base.$notableDeathDetails.outerHeight();
            base.options.summaryHeight = base.$notableDeathSummary.outerHeight();
            base.options.descriptionHeight = base.$notableDeathDesc.outerHeight();
            if (base.options.summaryHeight >= base.options.descriptionHeight) {
                base.$notableDeathDetails.css('height', base.options.summaryHeight + 'px');
            } else {
                base.$notableDeathDetails.css('height', base.options.descriptionHeight + 'px');
            }
            base.options.fullContentHeight = base.$notableDeathText.outerHeight();
            base.options.downHeight = base.options.fullContentHeight - base.options.descriptionHeight + base.options.summaryHeight - base.options.extraLineHeight;
            base.$notableDeathContent.css('top', base.options.defaultImageHeight + 'px');
            base.$notableDeathText.css('height', base.options.fullContentHeight + 'px');
            base.$el.css('height', base.options.defaultImageHeight + base.options.titleHeight + base.options.subtitleHeight + base.options.summaryHeight + base.options.extraLineHeight + 'px');
            base.$notableDeathImage.css('left', imageXPos + 'px');
        };

        base.onImageLoaded = function ($img) {
            $img.one('load error', function () {
                $(this).css('opacity', 1);
            });
            $img.each(function () {
                if (this.complete) {
                    $img.load();
                }
            });
        }

        base.init();
    };

    $.LEGACY.NotableDeath.defaultOptions = {
        mql: {},
        rolloverStyle: 'none',
        fullContentHeight: 0,
        descriptionHeight: 0,
        summaryHeight: 0,
        downHeight: 0,
        defaultImageHeight: 210,
        extraLineHeight: 45,
        titleHeight: 0,
        subtitleHeight: 0,
        detailsHeight: 0
    };

    $.fn.legacy_NotableDeath = function (options) {
        return this.each(function () {
            (new $.LEGACY.NotableDeath(this, options));
        });
    };

    $.fn.legacy_NotableDeath.options = {

    };

})(jQuery, window, document);
