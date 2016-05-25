(function (win) {
    'use strict';

    var $  = win.jQuery,
        PB = win.PB;

    PB.Core.register('post-highlighter', function () {
        var PostHighlighter = {};

        // TODO: needs refactoring
        PostHighlighter.init = function () {

            // set up hoverpost for main images on home, entertainment lp and tags page
            $('.featured-content').hoverpost({
                imageClass: '.featured-main-image img',
                linkClass : '.featured-main-link'
            });

            $('.featured-item').hoverpost({
                imageClass: '.featured-item-thumb img',
                linkClass : '.featured-item-title'
            });

            $('.most-craved-featured-item').hoverpost({
                imageClass: '.most-craved-item-thumb img',
                linkClass : '.most-craved-item-title'
            });

            // set up hoverpost for article page
            $('.pb-related-post').hoverpost({
                imageClass: '.imgholder img',
                linkClass : 'a:nth-child(2)'
            });

            $('.more-you-crave-item').hoverpost({
                imageClass: '.more-you-crave-item-thumb img',
                linkClass : '.more-you-crave-item-title a'
            });

            $('.most-craved-item').hoverpost({
                imageClass: '.most-craved-item-thumb img',
                linkClass : '.most-craved-item-title'
            });

            $('.recommended-item').hoverpost({
                imageClass: '.recommended-item-thumb img',
                linkClass : '.recommended-item-source'
            });

            // set up hoverpost for tag page
            $('.tagged-article').hoverpost({
                imageClass: '.featured-main-image img',
                linkClass : '.featured-main-link'
            });

            // set up hoverpost for category page
            $('article.post').hoverpost({
                imageClass: '.post-thumb img',
                linkClass : '.post-title'
            });
        };

        return {
            init: function () {
                PostHighlighter.init();
            }
        };
    });

}(window));
