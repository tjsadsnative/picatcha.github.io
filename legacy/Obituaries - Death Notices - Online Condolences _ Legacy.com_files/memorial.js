; (function ($, window, document) {
    if (!$.LEGACY) {
        $.LEGACY = new Object();
    };

    $.LEGACY.Memorial = function (el, options) {

        var base = this;

        base.$el = $(el);
        base.el = el;
        base.$memorialImageHolder = $(el).find('.Memorial_ImageHolder');
        base.$memorialImage = $(el).find('.Memorial_ImageHolder .Memorial_ImageHolder_Image');
        base.$memorialTextHolder = $(el).find('.Memorial_ImageHolder .Memorial_TextHolder');
        base.$memorialShade = $(el).find('.Memorial_ImageHolder .Memorial_ImageHolder_MemorialShade');
        base.$memorialSubtitle = $(el).find('.Memorial_ImageHolder .Memorial_TextHolder .Memorial_TextHolder_Subtitle');
        base.$memorialPeopleHolder = $(el).find('.Memorial_PeopleHolder');
        base.$memorialPersonHolder = $(el).find('.PersonHolder');
        base.$memorialPersonHolderRight = $(el).find('.Memorial_PeopleHolder.right');
        base.$memorialPersonInfo = $(el).find('.Memorial_PeopleHolder .PersonHolder .PersonHolder_PersonInfo');
        base.$memorialPersonThumb = $(el).find('.Memorial_PeopleHolder .PersonHolder .PersonHolder_Thumbnail');

        base.$el.data('LEGACY.Memorial', base);

        base.init = function () {
            base.options = $.extend({}, $.LEGACY.Memorial.defaultOptions, options);
            if (base.$el.data("rows") != "0") {
                base.options.rows = base.$el.data("rows");
            }
            if (base.options.rows > base.options.maxRows) {
                base.options.rows = base.options.maxRows;
            }
            var peopleHeight = base.options.rows * 108;
            if (base.options.rows > 1) {
                peopleHeight += 4;
            }
            base.$memorialPeopleHolder.css('height', peopleHeight + 'px');
            if ($('html').hasClass('no-touch')) {// uses Modernizr classes on HTML tag to verify if no-touch is set (to remove hover functionality from touch devices)
                base.$memorialPersonHolder.each(function (index) {
                    $(this).hover(function () {
                        $(this).find('.title').addClass('over');
                        $(this).find('.thumbnail').addClass('over');
                        $(this).find('.thumbnail').removeClass('off');
                    }, function () {
                        $(this).find('.title').removeClass('over');
                        $(this).find('.thumbnail').removeClass('over');
                        $(this).find('.thumbnail').addClass('off');
                    });
                });

                base.$el.hover(
                    function () {
                        $(this).find('.memorialImageHolder .memorialShade').css('background-position', '0 50px');
                    },
                    function () {
                        $(this).find('.memorialImageHolder .memorialShade').css('background-position', '0 0');
                    }
                );
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
            var elWidth = base.$el.width();
            var imageXPos = elWidth / 2 - 384;
            base.$memorialImage.css('left', imageXPos + 'px');
            if (elWidth > 480) {
                base.$memorialPersonHolder.addClass('twoColumn');
                base.$memorialPersonHolder.removeClass('oneColumn');
                base.$memorialPersonHolderRight.addClass('twoColumn');
                base.$memorialPersonHolderRight.removeClass('oneColumn');
            } else {
                base.$memorialPersonHolder.addClass('oneColumn');
                base.$memorialPersonHolder.removeClass('twoColumn');
                base.$memorialPersonHolderRight.addClass('oneColumn');
                base.$memorialPersonHolderRight.removeClass('twoColumn');
            }
            var personWidth = base.$memorialPersonHolder.width();
            if (personWidth < 280) {
                base.$memorialPersonThumb.addClass('small');
                base.$memorialPersonThumb.removeClass('normal');
            } else {
                base.$memorialPersonThumb.removeClass('small');
                base.$memorialPersonThumb.addClass('normal');
            }
            base.$memorialPersonInfo.each(function (index) {
                var infoHeight = $(this).height();
                var parentHeight = 108;
                var newMargin = (parentHeight - infoHeight - 16) / 2;

                $(this).css('margin-top', newMargin / 2 + 'px');
            });
            base.$memorialSubtitle.removeClass('tooTall');
            base.$memorialSubtitle.addClass('normal');
            var textHeight = base.$memorialTextHolder.height();
            if (textHeight > 140) {
                base.$memorialShade.addClass('tall');
                base.$memorialShade.removeClass('middle');
                base.$memorialShade.removeClass('normal');
            } else if (textHeight <= 140 && textHeight > 90) {
                base.$memorialShade.removeClass('tall');
                base.$memorialShade.addClass('middle');
                base.$memorialShade.removeClass('normal');
            } else {
                base.$memorialShade.removeClass('tall');
                base.$memorialShade.removeClass('middle');
                base.$memorialShade.addClass('normal');
            }
            if (textHeight > 170) {
                base.$memorialSubtitle.addClass('tooTall');
                base.$memorialSubtitle.removeClass('normal');
            } else {
                base.$memorialSubtitle.removeClass('tooTall');
                base.$memorialSubtitle.addClass('normal');
            }
        }

        base.init();

    };

    $.LEGACY.Memorial.defaultOptions = {
        mql: {},
        rows: 2,
        maxRows: 3
    };

    $.fn.legacy_Memorial = function (options) {
        return this.each(function () {
            (new $.LEGACY.Memorial(this, options));
        });
    };

    $.fn.legacy_Memorial.options = {

    };

})(jQuery, window, document);
