(function (win) {
    'use strict';

    var $        = win.jQuery,
        defaults = {
            imageClass: '.thumb',
            linkClass : '.text'
        };

    function HoverPost(elem, options) {
        this.config   = $.extend({}, defaults, options);
        this.element  = elem;
        this.elements = this.get(this.config.imageClass + ', ' + this.config.linkClass);
        this.init();
    }

    HoverPost.prototype.init = function () {
        var self = this;

        this.elements.on('hover focusin focusout', function () {
            self.elements.toggleClass('active');
        });
    };

    HoverPost.prototype.get = function (elemClass) {
        return this.element.find(elemClass);
    };

    $.fn.hoverpost = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + 'hoverpost')) {
                $.data(this, 'plugin_' + 'hoverpost', new HoverPost($(this), options));
            }
        });
    };

}(window));
