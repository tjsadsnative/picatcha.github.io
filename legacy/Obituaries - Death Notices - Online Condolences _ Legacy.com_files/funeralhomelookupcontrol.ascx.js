; (function ($, window, document) {
    $.extend($.easing,
    {
        def: 'easeOutQuad',
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }
    });

    if (!$.LEGACY) {
        $.LEGACY = new Object();
    };

    $.LEGACY.FuneralHomeSearch = function (el, options) {

        var base = this;

        base.$el = $(el);
        base.el = el;
        base.$bg = $(el).find('.funeralHomeSearchBg');
        base.$funeralHomeTitle = $(el).find('.funeralHomeSearchText .funeralHomeTitle');
        base.$marker = $(el).find('.funeralHomeSearchMarker');
        base.$spot = $(el).find('.funeralHomeSearchSpot');
        base.$bgImage = $(el).find('.funeralHomeSearchBgImage');
        base.$markerImage = $(el).find('.funeralHomeSearchMarkerImage');
        base.$spotHolder = $(el).find('.funeralHomeSearchSpotHolder');

        base.$el.data('LEGACY.FuneralHomeSearch', base);

        base.init = function () {
            base.options = $.extend({}, $.LEGACY.FuneralHomeSearch.defaultOptions, options);
            //

            if (window.addEventListener) {
                window.addEventListener('resize', function (evt) {
                    base.resizeMe();
                });

                window.addEventListener('orientationchange', function () {
                    base.resizeMe();
                }, false);

                window.addEventListener('mousemove', function (evt) {
                    base.options.position = base.$el.position();
                    var top = base.options.position.top
                    var left = base.options.position.left;
                    var mouseX = evt.clientX;
                    var mouseY = evt.clientY + $(window).scrollTop();
                    if (mouseY >= top - base.options.yBuffer && mouseY < top + base.options.yBuffer + 300) {
                        var moduleWidth = base.$el.width();
                        var totalXSpace = left + moduleWidth + base.options.xBuffer;
                        if (mouseX >= left && mouseX < totalXSpace) {
                            var totalYSpace = 400 + (base.options.yBuffer * 2);
                            var newXPos = Math.round(100 * (mouseX / totalXSpace)) - 100;
                            var newYPos = Math.round(100 * ((mouseY - top) / totalYSpace)) - 100;
                            if (newXPos < -100) {
                                newXPos = -100;
                            }
                            if (newXPos > 0) {
                                newXPos = 0;
                            }
                            if (newYPos < -100) {
                                newYPos = -100;
                            }
                            if (newYPos > 0) {
                                newYPos = 0;
                            }
                            base.$bgImage.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 2000, easing: 'easeOutExpo' });
                            base.$markerImage.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 2500, easing: 'easeOutExpo' });
                            base.$spotHolder.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 3000, easing: 'easeOutExpo' });
                        }
                    }
                });
            }
            else {//for IE versions <=8
                window.attachEvent('onresize', function (evt) {
                    base.resizeMe();
                });

                window.attachEvent('onorientationchange', function () {
                    base.resizeMe();
                }, false);
                document.attachEvent('onmousemove', function (evt) {
                    base.options.position = base.$el.position();
                    var top = base.options.position.top
                    var left = base.options.position.left;
                    var mouseX = evt.clientX;
                    var mouseY = evt.clientY + $(window).scrollTop();
                    if (mouseY >= top - base.options.yBuffer && mouseY < top + base.options.yBuffer + 300) {
                        var moduleWidth = base.$el.width();
                        var totalXSpace = left + moduleWidth + base.options.xBuffer;
                        if (mouseX >= left && mouseX < totalXSpace) {
                            var totalYSpace = 400 + (base.options.yBuffer * 2);
                            var newXPos = Math.round(100 * (mouseX / totalXSpace)) - 100;
                            var newYPos = Math.round(100 * ((mouseY - top) / totalYSpace)) - 100;
                            if (newXPos < -100) {
                                newXPos = -100;
                            }
                            if (newXPos > 0) {
                                newXPos = 0;
                            }
                            if (newYPos < -100) {
                                newYPos = -100;
                            }
                            if (newYPos > 0) {
                                newYPos = 0;
                            }
                            base.$bgImage.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 2000, easing: 'easeOutExpo' });
                            base.$markerImage.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 2500, easing: 'easeOutExpo' });
                            base.$spotHolder.animate({ top: newYPos + 'px', left: newXPos + 'px' }, { queue: false, duration: 3000, easing: 'easeOutExpo' });
                        }
                    }
                });
            }

            if (Modernizr.mq('(orientation: portrait)')) {
                base.options.mql = window.matchMedia('(orientation: portrait)');
                base.options.mql.addListener(function (m) {
                    base.resizeMe();
                });
            }

            base.resizeMe();

            base.$el.find(".selectHolder select").change(function () {

                var searchUrl = base.options.funeralLookupUrl + $(this).val();
                window.location = searchUrl;
                //console.log("search by state: " + $(this).val());
                //alert($this.val());
            });



        };

        base.resizeMe = function () {
            base.options.position = base.$el.position();
            var width = base.$el.width();
            var newWidth = ((width / 2) - 400);
            base.$bg.css('left', newWidth + 'px');
            base.$marker.css('left', newWidth + 'px');
            base.$spot.css('left', newWidth + 'px');
        };

        base.init();
    };

    $.LEGACY.FuneralHomeSearch.defaultOptions = {
        breakPoint: 500,
        mouseX: 0,
        mouseY: 0,
        xp: 0,
        yp: 0,
        follower: {},
        loop: 0,
        mql: {},
        position: {},
        xBuffer: 0,
        yBuffer: 0,
        funeralLookupUrl: 'http://www.legacy.com/funeral-homes/directory/search?StateName='
    };

    $.fn.legacy_FuneralHomeSearch = function (options) {
        return this.each(function () {
            (new $.LEGACY.FuneralHomeSearch(this, options));
        });
    };

    $.fn.legacy_FuneralHomeSearch.options = {

    };

})(jQuery, window, document);