(function (win) {
    'use strict';

    var $  = win.jQuery,
        PB = win.PB;

    PB.Core.register('rich-most-craved', function () {
        var RichMostCraved = {
            $ele: {}
        };

        /**
         * Set up event handlers.
         */
        RichMostCraved.setEvents = function () {
            var self = this;

            // pause the carousel when module is hovered over or clicked
            this.$ele.main.on('mouseenter', function (e) {
                e.preventDefault();

                self.pause();

                return false;
            });

            // activate heading when slide finished changing
            this.$ele.carousel.on('slid', function () {
                var index = self.getIndex();

                self.activateHeading(index);
            });

            // change slides when clicking a heading
            this.$ele.heading.on('click', function (e) {
                var index = $(this).index();

                e.preventDefault();
                self.goToSlide(index);
                self.pause();

                return false;
            });
        };

        /**
         * Start the carousel given certain options.
         *
         * @param options {Object} - The plugin's options.
         */
        RichMostCraved.startCarousel = function (options) {
            this.$ele.carousel.carousel(options || {});
        };

        /**
         * Activates a given heading and deactivates the previous one.
         *
         * @param index {Number} - The heading number we want to activate.
         */
        RichMostCraved.activateHeading = function (index) {
            this.$ele.heading.eq(index)
                .addClass('active')
                .siblings().removeClass('active');
        };

        /**
         * Transition to a given zero based index slide.
         *
         * @param index {Number} - The slide number we want to transition to.
         */
        RichMostCraved.goToSlide = function (index) {
            this.$ele.carousel.carousel(index);
            this.activateHeading(index);
        };

        /**
         * Returns the zero based index of the current slide.
         *
         * @return index {Number}
         */
        RichMostCraved.getIndex = function () {
            return this.$ele.carousel.find('.active').index();
        };

        RichMostCraved.cycle = function () {
            this.$ele.carousel.carousel('cycle');
        };

        /**
         * Pauses the carousel.
         */
        RichMostCraved.pause = function () {
            this.$ele.carousel.carousel('pause');
        };

        /**
         * Initializes the module.
         *
         * Caches elements, starts the carousel and sets events.
         */
        RichMostCraved.init = function () {
            if ($.isEmptyObject(this.$ele)) {
                this.$ele = {
                    main    : $('#js-mc-main'),
                    carousel: $('#js-mc-carousel'),
                    headings: $('#js-mc-headings')
                };

                this.$ele.heading = this.$ele.headings.find('.js-mc-heading');
            }

            this.startCarousel({ interval: 6000 });
            this.setEvents();
        };

        return {
            init: function () {
                RichMostCraved.init();
            }
        };
    });

}(window));
