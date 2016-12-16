/*
*     PluginName- jQuery plugin
*     written by Bill Milstead
*     http://townhall.com
*
*     Copyright (c) 2012 Bill Milstead (http://townhall.com)
*     Dual licensed under the MIT (MIT-LICENSE.txt)
*     and GPL (GPL-LICENSE.txt) licenses.
*
*     Built for jQuery library
*     http://jquery.com
*
*
*
*     markup example
*/
//IIFE
//wrapped set
(function ($) {
    $.fn.feelings = function (options) {

        var settings = {};
        $.extend(settings, this.feelings.defaults, options);

        return this.each(function () {
            var $input = $(this);
            var emotionKey = createKey(settings.url);
            $input.load("/mservices/widgets/feelingswidget", { url: settings.url, version: settings.version }, function () {
                $(settings.button).click(function () {
                    //maintain button state and log emotion
                    var emotionBtn = $(this);
                    var emotionId = emotionBtn.data("emotionid");
                    var thankyou = $(".feelings-thankyou");
              
                    if (checkState(emotionKey)) {
                        $.post("/mservices/widgets/feelingswidgetupdate", { id: emotionId, url: settings.url }, function () {
                            var feelingSpan = $("#" + emotionId + "-lnk");
                            var feelingsCount = parseInt(feelingSpan.html());
                            feelingSpan.html(feelingsCount + 1);
                            pesistState(emotionKey, emotionId);
                            thankyou.css("display", "block").html("Thank you for voting");
                        });
                    } else {
                        thankyou.css("display", "block").html("You have already voted").hide().fadeIn("slow");
                    }
                });
            });
        });
        function createKey(key) {
            var prefix = 'themotion.';
            var newKey = prefix + key.replace(/[^a-z0-9]/gi, '');
            return newKey;
        }

        function pesistState(key, value) {
            $.cookie(key, value, { expires: 1, path: '/' });
        }

        function checkState(key) {
            if ($.cookie(key) === null) {
                return true;
            }
            return false;
        }
    };
    $.fn.feelings.defaults = {
        button: '.feelings-btn-emotion',
        url: window.location.href,
        version: 1
    };
})(jQuery);