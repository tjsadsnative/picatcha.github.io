
/*de.bild.mobile.sliderTeaser:34734610.5*/

define([], function() {
    
    var settings = {
        next: "button[rel=next]",
        prev: "button[rel=prev]",
        elems: ".overflow-gallery_item",
        slideContainer: ".overflow-wrapper",
        list: ".overflow-gallery",
        hiddenClass: "hidden"
    };
    var SliderTeaser = function(options) {
        this.options = options;
        this.el = options.el;
        this.$el = $(this.el);
        this.settings = settings;
        this.settings = this.extendSettings();
        this.init();
    };
    SliderTeaser.prototype = {
        init: function() {
            var self = this;
            self.initDefer = $.Deferred();
            self.extendInit();
            self.initDefer.then(function() {
                self.container = $(self.settings.slideContainer, self.$el);
                self.currentPos = 0;
                self.elemWidth = null;
                self.list = $(self.settings.list, self.$el);
                self.elemsVisible = 0;
                self.nextBtn = $(self.settings.next, self.$el);
                self.prevBtn = $(self.settings.prev, self.$el);
                self.useAnim = window.requestAnimationFrame !== undefined;
                if (!self.container || !self.container[0]) {
                    console.error("sliderTeaser: no Container found");
                    return;
                }
                self.initScrollLeft();
                self.setCSS();
                self.bindUIEvents();
                self.showButtons(0);
            });
        },
        bindUIEvents: function() {
            var obj = this;
            obj.$el.on("touchstart mousedown", obj.settings.prev, function(e) {
                e.preventDefault();
                obj.prevUp = true;
                obj.handlePrev();
            });
            obj.$el.on("touchend mouseup", obj.settings.next, function(e) {
                e.preventDefault();
                obj.prevUp = false;
            });
            obj.$el.on("touchstart mousedown", obj.settings.next, function(e) {
                e.preventDefault();
                obj.nextUp = true;
                obj.handleNext();
            });
            obj.$el.on("touchend mouseup", obj.settings.next, function(e) {
                e.preventDefault();
                obj.nextUp = false;
            });
            obj.container.on("scroll", function() {
                if (obj.container[0].scrollLeft <= obj.elemWidth || obj.container[0].scrollLeft >= obj.scrollMax - obj.elemWidth) {
                    obj.showButtons();
                }
            });
            $(window).on("orientationchange resize", function() {
                obj.setCSS();
            });
            obj.extendedBindings();
        },
        initScrollLeft: function() {
            this.container[0].scrollLeft = 0;
        },
        setCSS: function() {
            this.elems = $(this.settings.elems, this.$el);
            this.elemCount = this.elems.length;
            this.elemWidth = this.computeElemWidth();
            this.list.css("width", this.elemWidth * this.elemCount);
            this.elemsVisible = Math.floor(this.container.width() / this.elemWidth);
            this.scrollMax = this.container[0].scrollWidth - this.container[0].clientWidth;
        },
        handlePrev: function() {
            var self = this;
            self.animateTo(-1);
        },
        handleNext: function() {
            var self = this;
            self.animateTo(1);
        },
        animateTo: function(dir) {
            if (this.isFading) return false;
            var obj = this;
            var cPos = this.calculateCurrentPos(dir);
            var nextPos = cPos + dir > obj.elemCount - 1 ? obj.elemCount - 1 : cPos + dir < 0 ? 0 : cPos + dir;
            if (this.useAnim) {
                this.isFading = true;
                window.requestAnimationFrame(function() {
                    obj.fadeToPos(obj.container[0].scrollLeft, nextPos * obj.elemWidth);
                });
            } else {
                this.container[0].scrollLeft = nextPos * this.elemWidth;
            }
            this.showButtons(nextPos);
        },
        fadeToPos: function(from, to, pos) {
            var obj = this;
            pos = pos ? pos * 1.5 : 1;
            var tPos = from > to ? -1 * pos : pos;
            if (tPos > 0 && from + tPos < to || tPos < 0 && from + tPos > to) {
                this.container[0].scrollLeft = from + tPos;
                window.requestAnimationFrame(function() {
                    obj.fadeToPos(from + tPos, to, pos);
                });
            } else {
                this.isFading = false;
                this.container[0].scrollLeft = to;
            }
            return false;
        },
        computeElemWidth: function() {
            var self = this;
            var $firstEl = self.elems.first();
            var firstEl = $firstEl[0];
            var style = firstEl.currentStyle || window.getComputedStyle(firstEl);
            var width = parseInt(style.width.replace("px", ""));
            if (width === 0) {
                width = this.container.width() / 5;
                self.elems.width(width);
                $firstEl.find("img").on("load", function() {
                    self.elems.removeAttr("style");
                    self.setCSS();
                });
            }
            return parseInt(style.marginRight.replace("px", "")) + width;
        },
        calculateCurrentPos: function(direction) {
            var actPos = Math.floor(this.container[0].scrollLeft / this.elemWidth);
            if (direction) {
                var halfPos = this.container[0].scrollLeft % this.elemWidth;
                if (direction < 0) {
                    halfPos = this.elemWidth - halfPos;
                }
                if (direction === 1 && halfPos > this.elemWidth * 2 / 3 || direction === -1 && halfPos < this.elemWidth * 2 / 3) {
                    return actPos + 1;
                }
            }
            return actPos;
        },
        showButtons: function(pos) {
            if (pos === undefined) {
                pos = this.container[0].scrollLeft === this.scrollMax ? this.elemCount - this.elemsVisible : this.calculateCurrentPos(1);
            }
            var hiddenClass = this.settings.hiddenClass;
            if (pos > 0) {
                this.prevBtn.removeClass(hiddenClass);
            } else {
                this.prevBtn.addClass(hiddenClass);
            }
            if (pos >= this.elemCount - this.elemsVisible) {
                this.nextBtn.addClass(hiddenClass);
            } else {
                this.nextBtn.removeClass(hiddenClass);
            }
        },
        extendSettings: function() {
            return this.settings;
        },
        extendedBindings: function() {
            return false;
        },
        extendInit: function() {
            this.initDefer.resolve();
            return false;
        }
    };
    return SliderTeaser;
});