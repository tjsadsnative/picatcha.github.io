(function (win) {
    'use strict';

    var $  = win.jQuery,
        PB = win.PB;

    /**
     * Sets window mode to transparent for videos on an article.
     *
     * INFO: This should probably be in PHP using the 'the_content' filter.
     *
     * @see http://helpx.adobe.com/flash/kb/flash-object-embed-tag-attributes.html
     */
    PB.Core.register('transparency-setter', function () {
        var TransparencySetter = {
            $videos: ''
        };

        TransparencySetter.setTransparencyFor = function ($video) {
            var videoType           = $video.prop('tagName'),
                needsToBeReAppended = false,
                $param;

            switch (videoType) {
            case 'IFRAME':
                if (!/wmode=transparent/gi.test($video.attr('src'))) {
                    $video.attr('src', function (i, oldHtml) {
                        oldHtml += /\?[\w\W]+=/gi.test(oldHtml) ?
                                '&wmode=transparent' :
                                '?wmode=transparent';

                        return oldHtml;
                    });
                }

                break;
            case 'OBJECT':
                $param = $video.find('param[name=wmode]');

                if ($param.length > 0 && $param.attr('value') !== 'transparent') {
                    $param.attr('value', 'transparent');
                    needsToBeReAppended = true;
                } else if ($param.length === 0) {
                    $param = $('<param>', {
                        'name' : 'wmode',
                        'value': 'transparent'
                    });

                    $video.prepend($param);
                    needsToBeReAppended = true;
                }

                break;
            case 'EMBED':
                if ($video.attr('wmode') !== 'transparent') {
                    $video.attr('wmode', 'transparent');
                    needsToBeReAppended = true;
                }

                break;
            }

            // re-appending object/embed elements in order to apply new properties
            if (needsToBeReAppended) {
                $video.parent().prepend($video);
            }
        };

        TransparencySetter.setTransparency = function () {
            var self = this;

            this.$videos.each(function () {
                self.setTransparencyFor($(this));
            });
        };

        TransparencySetter.init = function () {
            if (this.$videos === '') {
                this.$videos = $('.js-article-content')
                    .find('iframe, embed, object');
            }

            this.setTransparency();
        };

        return {
            init: function () {
                TransparencySetter.init();
            }
        };
    });

}(window));
