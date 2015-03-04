(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Module: Breakout (Bridge)
// Description: Module contains an object with attributes used in multiple other modules

module.exports = {
    c: {
        ad: 'section-ad-unit',
        background: 'section-breakout-background',
        breakCover: 'breakout-cover',
        breakSpot: 'section-placeholder-break',
        container: 'section-breakout-container',
        cover: {
            header: 'cover-header',
            init: 'featured-template-header',
            image: 'cover-image',
            video: 'cover-video'
        },
        join: 'joiner',
        mainWrapper: 'wrapper',
        story: {
            container: 'section-breakout-story-container',
            mode: 'story-mode',
            wrapper: 'section-breakout-story-wrap'
        },
        template: 'template',
        title: 'section-breakout-title',
        video: {
            breakV: 'break-vid',
            init: 'video-load-init',
            section: 'section-breakout-video'
        },
        wrapper: 'section-breakout-wrapper',
        wrapperBreak: 'section-breakout-wrapper-break'
    },
    d: {
        autoplay: 'data-video-autoplay',
        image: 'data-breakout-bg-image',
        mp4: 'data-breakout-bg-video-mp4',
        loop: 'data-video-loop',
        ogg: 'data-breakout-bg-video-ogg',
        opacity: 'data-breakout-opacity',
        video: 'data-video-bg-img'
    }
};
},{}],2:[function(require,module,exports){
// Module: Gallery (Bridge)
// Description: Module contains an object with attributes used in multiple other modules

// Requiring Modules
var _a = require('../config/items.ads');
var _e = require('../config/items.content');

// Exporting the bridge
module.exports = {
    ads: {
        divs: {
            box: false,
            skyscraper: false
        },
        units: {
            box: _a.atf_primary,
            skyscraper: _a.btf_sky
        }
    },
    c: {
        ads: {
            boxNew: 'unit-box-new',
            boxOriginal: 'unit-box-original'
        },
        fade: 'gallery-fade-in',
        fullscreen: 'gallery-fullview',
        fullscreenWrap: 'gallery-fullscreen-wrap',
        hidden: 'gallery-hidden',
        lockdown: 'lockdown',
        modal: 'gallery-modal',
        modalOverlay: 'gallery-modal-overlay',
        sidebar: 'gallery-modal-sidebar',
        viewClose: 'view-full-close',
        viewFull: 'view-full',
        viewFullScreen: 'gallery-fullview',
        wrap: 'gallery-wrap'
    },
    gallery: _e.photoSlider,
    preload: document.querySelectorAll('.galleryPreLoad'),
    els: false
};
},{"../config/items.ads":11,"../config/items.content":12}],3:[function(require,module,exports){

/*!
 * TechnoBuffalo JS
 * http://www.technobuffalo.com
 */

// Requiring the "globals" //
// In this project, "globals" are mainly external variables (such as Google Analytics, advertisement, etc..). The globals config is used as a fail safe for these variables - just in case they don't load / execute properly. This ensures that other code dependant on these variables don't break.
var globals = require('../config/globals');

// Initializing the jQuery Util methods
var $util = require('../utils/utils.jquery');

// Requiring config
var config = require('../modules/config');
var util = require('../utils/utils');

var getReport = require('../utils/utils.getReport');

// Defining the API Object
var API = {

    bridges: {
        breakout: require('../bridges/bridge.breakout'),
        gallery: require('../bridges/bridge.gallery')
    },

    Collections: {
        Articles: require('../collections/collection.Articles'),
        Breakouts: require('../collections/collection.Breakouts'),
        Galleries: require('../collections/collection.Galleries'),
        MagnifyVideos: require('../collections/collection.MagnifyVideos'),
        Tabs: require('../collections/collection.Tabs'),
    },

    config: config,

    items: {
        ads: require('../config/items.ads.js'),
        content: require('../config/items.content.js')
    },

    modules: {

        adx: require('../modules/adx'),

        advertisePage: require('../modules/adminBar'),

        articles: require('../modules/articles'),

        breakout: require('../modules/breakout'),

        captchaText: require('../modules/captchaText'),

        clickTracking: require('../modules/clickTracking'),

        crew: require('../modules/crew'),

        elementToggle: require('../modules/elementToggle'),

        gallery: require('../modules/gallery'),

        idSweeper: require('../modules/idSweeper'),

        lazy: require('../modules/lazy/lazy'),

        magnify: require('../modules/magnify'),

        navigation: {
            backToTop: require('../modules/navigation/navigation.backToTop'),
            main: require('../modules/navigation/navigation.main'),
            moreStories: require('../modules/navigation/navigation.moreStories'),
        },

        pinterest: require('../modules/pinterest'),

        scrolling: {
            content: require('../modules/scrolling/scrolling.content'),
            query: require('../modules/scrolling/scrolling.query')
        },

        tableOfContents: require('../modules/tableOfContents'),

        tabs: require('../modules/tabs')
    },

    util: _.extend(util, { getReport: getReport })

};


// Defining the init method for app.js
var initialize = function() { 'use strict';

    // Remove empty paragraphs from the page
    var p = document.querySelectorAll('p:empty');
    if(p[0]) util.removeAll(p);

    // util.process.remove.emptyParagraphs();

    // Checking and sending the ad block report
    if(config.check.desktop()) {
        config.check.adBlock();
    }

    return 'TechnoBuffalo Initialized.';

};

// Pushing the API to the global Window
window.TechnoBuffalo = API;

// Creating the window.t alias for Dev environment
if(config.check.dev()) window.t = API;

// Initialize the application.
initialize();

},{"../bridges/bridge.breakout":1,"../bridges/bridge.gallery":2,"../collections/collection.Articles":4,"../collections/collection.Breakouts":5,"../collections/collection.Galleries":6,"../collections/collection.MagnifyVideos":7,"../collections/collection.Tabs":9,"../config/globals":10,"../config/items.ads.js":11,"../config/items.content.js":12,"../modules/adminBar":17,"../modules/adx":18,"../modules/articles":19,"../modules/breakout":20,"../modules/captchaText":21,"../modules/clickTracking":22,"../modules/config":24,"../modules/crew":25,"../modules/elementToggle":26,"../modules/gallery":28,"../modules/idSweeper":29,"../modules/lazy/lazy":30,"../modules/magnify":33,"../modules/navigation/navigation.backToTop":34,"../modules/navigation/navigation.main":35,"../modules/navigation/navigation.moreStories":36,"../modules/pinterest":37,"../modules/scrolling/scrolling.content":38,"../modules/scrolling/scrolling.query":39,"../modules/tableOfContents":40,"../modules/tabs":41,"../utils/utils":46,"../utils/utils.getReport":44,"../utils/utils.jquery":45}],4:[function(require,module,exports){
// Collection: Articles

// Defining the collection
var Articles = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var Model = require('../models/model.Article');
    var View = require('../views/view.Article');


    return Backbone.Collection.extend({

        els: null,

        model: Model,

        shares: [],

        socialClass: 'social-tab',

        initialize: function() {
            this.init();
        },

        // fn: Reset (Removing all the models from the collection)
        reset: function(models, options) {

            // Setting the options
            options = options || {};

            // Removing the social shares
            this.removeSocials();

            // Reset the collection
            Backbone.Collection.prototype.reset.call(this, models, options);

            // Returning the collection
            return this;

        },

        init: function(viewEls) {
            var self = this;

            var els = viewEls || self.els;

            // Return false if els is missing
            if(!els) return false;

            els = els.querySelectorAll('article.row');

            // Return false if els is missing
            if(!els) return false;

            // Looping through all the articles of within the els array
            for(var i = 0, len = els.length; i < len; i++) {

                // Defining the element
                var ele = els[i];

                // Creating a new model for each article
                var model = new Model({
                    el: ele
                });

                var view = new View({
                    collection: self,
                    el: ele,
                    model: model
                });

                // Adding the article model to the collection
                self.add(model);

            }

            // Returning the collection
            return this;

        },

        optimize: function() {

            var models = this.models;

            // Return false if collection does not have models
            if(!models) {
                return false;
            }

            // Loop through the models to initialize optimization method
            for(var i = 0, len = models.length; i < len; i++) {

                // Firing the optimization method of each model
                models[i].optimize();

            }

            // Returning the collection
            return this;

        },

        // fn: Removing all the social shares from all the models in the collection
        removeSocials: function() {

            // Loop through all the models of the collection
            _.each(this.models, function(model) {
                // Initialize the removeSocial method
                model.removeSocial();
            });

            return this;
        }

    });

})(jQuery);

// Exporting the collection
module.exports = Articles;
},{"../models/model.Article":13,"../modules/config":24,"../views/view.Article":51}],5:[function(require,module,exports){
// Collection: Breakouts

// Defining the collection
var Breakouts = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var _e = require('../config/items.content');
    var bridge = require('../bridges/bridge.breakout');
    var Model = require('../models/model.Breakout');
    var View = require('../views/view.Breakout');

    // Defining the Defaults
    var def = {
        container: _e.theMain,
        marginOffset: 0,
        marginOffsetHeight: 0,
        size: 0.9,
        widthBreakpoint: 960,
        window: {
            height: _e.theWindow.height(),
            offset: 30,
            width: _e.theWindow.width()
        }
    };

    var status = false;

    // Creating an array to temporarily store the fetched breakouts
    var breakoutsArray = false;

    // Fn: Check to see if breakouts are present in the DOM
    var breakoutCheckExist = function() {
        var breakouts = document.querySelectorAll('.section-breakout');
        if(breakouts[0] !== undefined) {
            status = true;
            breakoutsArray = breakouts;
            return true;
        } else {
            return false;
        }
    };


    return Backbone.Collection.extend({

        // Defining the Default settings into the Collection
        container: def.container,

        mainWrapper: _e.theMainWrapper,
        marginOffset: def.marginOffset,
        marginOffsetHeight: def.marginOffsetHeight,

        size: def.size,

        widthBreakpoint: def.widthBreakpoint,

        window: _e.theWindow,
        windowHeight: def.window.height,
        windowOffset: def.window.offset,
        windowWidth: def.window.width,

        wrapperDimensions: {
            width: 0,
            height: 0
        },

        // Defining the model
        model: Model,

        // Fn: Initialize the data for the collection
        initialize: function() {

            var self = this;

            // Verify that page is single + featured size && breakout divs exist
            if(!config.state.isSingleFeatured || !breakoutCheckExist()) return false;

            // Event: For Window Resizing
            var breakoutEventWindowResize = _.debounce(function() {
                self.resizeEvent();
                self.scrollEvent();
            }, 160);

            // Event: For Window Scrolling
            var breakoutEventWindowScrolling = _.debounce(function() {
                self.scrollEvent();
            }, 192);

            // Adding event for Resize
            _e.theWindow.on('resize', breakoutEventWindowResize);

            // Adding event for Scrolling
            _e.theWindow.on('scroll', breakoutEventWindowScrolling);

            // Adding event for orientation change (devices going from portrait to landscape)
            window.addEventListener('orientationchange', breakoutEventWindowResize, false);

            this.init();

            // Returning the collection
            return this;

        },

        // Fn: Populating the collection with data from the DOM breakout elements
        init: function() {

            // Looping through all the breakouts
            for(var i = 0, len = breakoutsArray.length; i < len; i++) {

                // Defining the breakout
                var breakout = breakoutsArray[i];

                // Continue the loop if breakout is not defined
                if(!breakout) continue;

                // Defining the model/view's attributes from the DOM elements
                var breakspot = breakout.classList.contains(bridge.c.breakSpot);
                var story = breakout.getElementsByTagName('p');
                var title = breakout.getElementsByTagName('h3')[0];
                var ad = breakout.querySelectorAll('.'+bridge.c.ad)[0];
                var opacity = breakout.getAttribute(bridge.d.opacity);
                var joiner = breakout.classList.contains(bridge.c.join);

                // Creating the the new model
                var model = new Model({
                    breakspot: breakspot,
                    el: breakout,
                    joiner: (joiner === true ? true : false),
                    opacity: (opacity !== null ? parseFloat(opacity) : false),
                    parent: breakout.parentNode,
                    sectionBreak: (ad !== undefined ? ad : false),
                    story: (story.length > 0 ? story : false),
                    title: (title !== undefined ? title : false)
                });

                // Creating the new view
                var view = new View({
                    collection: this,
                    el: model.get('el'),
                    model: model
                });

                // Rendering the breakout model's view
                // view.render();

                // Adding the model to the collection
                this.add(model);
            }

            // Initializing the resizeEvent
            this.resizeEvent();

            // Returning the collection
            return this;

        },

        // Fn: Public method to console log the collection
        echo: function() {
            console.log(this.toJSON());

            // Returning the collection
            return this;
        },

        // Event: Resize
        resizeEvent: function() {
            var self = this;

            // Adjust the windowOffset if the device is mobile
            if(config.check.match.mobile()) {
                // Divide the offset(gutter) by half for mobile
                self.windowOffset = def.window.offset / 2;
            } else {
                self.windowOffset = def.window.offset;
            }

            // Readjusting the attributes of the collection
            self.siteWidth = Math.round(self.mainWrapper.width());
            self.windowHeight = Math.round(self.window.height());
            self.windowWidth = Math.round(self.window.width());

            // Adjusting the marginOffset and windowWidth based on viewport size
            if(self.windowWidth <= self.siteWidth) {
                self.marginOffset = Math.round(self.windowOffset);
                self.windowWidth = self.siteWidth;
            } else {
                self.marginOffset = Math.round(((self.windowWidth - self.container.outerWidth()) / 2 ));
            }

            // Adjust wrapper dimensions
            this.resizeAdjustWrapperDimensions();

            // Re-rendering all the models of the collection
            self.resizeRenderModels();

            // Returning the collection
            return this;
        },

        // Event: Adjusting the breakout wrapper dimensions
        resizeAdjustWrapperDimensions: function() {
            var self = this;

            // Adjusting the wrapperDimensions to 2:1 ratio
            this.wrapperDimensions = {
                width: Math.round(self.window.width()),
                height: Math.round(self.windowWidth / 1.888875)
            };

            // Returning the collection
            return this;
        },

        // Event: Adjusting all the breakouts on resize
        resizeRenderModels: function() {
            // Looping through the models
            for(var i = 0, len = this.length; i < len; i++) {
                // Adjust the resize of the model
                this.models[i].adjustResize();
            }

            // Returning the collection
            return this;
        },

        // Event: Scrolling
        scrollEvent: function() {
            // Rendering the models based on scroll
            this.scrollRenderModels();

            // Returning the collection
            return this;
        },

        // Event: Adjusting the applicable breakouts on scroll
        scrollRenderModels: function() {
            // Looping through the models
            for(var i = 0, len = this.length; i < len; i++) {

                var model = this.models[i];

                // This applies only to models with video
                if(model.get('mediaType') !== 'video') continue;
                model.adjustVideoRender();
            }

            // Returning the collection
            return this;
        }

    });

})(jQuery);

// Exporting the collection
module.exports = Breakouts;
},{"../bridges/bridge.breakout":1,"../config/items.content":12,"../models/model.Breakout":14,"../modules/config":24,"../views/view.Breakout":52}],6:[function(require,module,exports){
// Collection: Galleries


// Defining the collection
var Galleries = (function ($, undefined) { 'use strict';

    // Require
    var _a = require('../config/items.ads');
    var config = require('../modules/config');
    var Model = require('../models/model.Gallery');
    var View = require('../views/view.Gallery');

    var adx = require('../modules/adx');

    var def = require('../bridges/bridge.gallery');

    // Defining the RoyalSlider Options Object
    var galleryOptions = false;

    // Fn: Creating and defining the gallery pages elements
    var createGalleryPageElements = function() {

        // Return false if els has already been defined
        if(def.els) return def.els;

        // Creating the Fullscreen Wrapper
        var fullscreenWrap = document.createElement('div');
        fullscreenWrap.classList.add(def.c.fullscreenWrap);
        fullscreenWrap.id = def.c.fullscreenWrap;

        // Creating the Gallery Popup Modal
        var galleryModal = document.createElement('div');
        galleryModal.classList.add(def.c.modal);
        galleryModal.id = def.c.modal;

        // Creating the Gallery Popup Modal Overlay
        var galleryModalOverlay = document.createElement('div');
        galleryModalOverlay.classList.add(def.c.modalOverlay);
        galleryModalOverlay.id = def.c.modalOverlay;

        // Createing the Gallery Popup Modal Sidebar
        var galleryModalSidebar = document.createElement('div');
        galleryModalSidebar.classList.add(def.c.sidebar);
        galleryModalSidebar.id = def.c.sidebar;

        // Appending the wrapper and sidebar to the model
        galleryModal.appendChild(fullscreenWrap);
        galleryModal.appendChild(galleryModalSidebar);
        galleryModal.appendChild(galleryModalOverlay);

        // Appending the modal to the body
        document.body.appendChild(galleryModal);

        def.els = {
            fullscreenWrap: fullscreenWrap,
            modal: galleryModal,
            modalOverlay: galleryModalOverlay,
            modalSidebar: galleryModalSidebar
        };

        return def.els;

    };

    // Fn: Createing and defining the gallery pages ad elements
    var createGalleryPageAdElements = function() {

        // Return false if the elements have already been defined
        if(def.ads.divs.box || def.ads.divs.skyscraper) return false;

        // Return false if the modal sidebar is not defined
        if(!def.els || !def.els.modalSidebar) return false;

        var adBoxNew = document.createElement('div');
        adBoxNew.id = def.c.ads.boxNew;

        var adBoxOriginal = document.createElement('div');
        adBoxOriginal.id = def.c.ads.boxOriginal;


        // Appending the original ad box below the ad unit
        var $adBox = def.ads.units.box;
        $(adBoxOriginal).insertAfter($adBox);

        // Appending the new ad box to the modal's sidebar
        def.els.modalSidebar.appendChild(adBoxNew);

        // Pushing the ad boxs to the Defaults
        var adBoxOptions = {
            newer: adBoxNew,
            original: adBoxOriginal
        };

        def.ads.divs.box = adBoxOptions;

        return adBoxOptions;

    };

    // Fn: Setting up the RoyalSlider Gallery Options
    var setupGalleryOptions = function() {

        // Return the galleryOptions if they've already been defined
        if(galleryOptions && typeof galleryOptions === 'object') return galleryOptions;


        var galleryScaleHeight = def.gallery.width() > 680 ? 620 : 820;
        galleryOptions = {
            autoScaleSlider: true,
            autoScaleSliderWidth: 960,
            autoScaleSliderHeight: galleryScaleHeight,
            imageScaleMode: 'fit',
            controlNavigation: 'thumbnails',
            controlsInside:false,
            globalCaption: true,
            arrowsNavAutoHide: false,
            arrowsNavHideOnTouch: false,
            imgWidth: 630,
            imgHeight: 354,
            numImagesToPreload: 2,
            imageScalePadding: 0,
            loopRewind: true,
            sliderDrag: false,
            transitionType: 'move',
            transitionSpeed: 200,
            thumbs: {
                drag: false,
                spacing: 5,
                arrowsAutoHide: false,
                transitionSpeed: 200
            },
            fullscreen: {
                buttonFS: false,
                enabled: true,
                nativeFS: false,
                keyboardNav: true
            }
        };

        return galleryOptions;

    };

    return Backbone.Collection.extend({

        activeGalleryModel: false,

        els: def.els,

        galleries: def.gallery ? def.gallery : false,

        model: Model,

        options: galleryOptions,

        initialize: function() {

            var self = this;

            // Look for all gallery instances on page
            this.galleries = $('.photo-gallery.slider');

            // Setting up the RoyalSlider Gallery Options
            this.galleryOptions = setupGalleryOptions();

            // Setting up the els for this collection
            this.els = createGalleryPageElements();

            // Setting up the ad els for this collection
            this.adEls = createGalleryPageAdElements();

            // Return false if gallery is not defined
            if(!this.galleries) return false;

            if(this.galleries instanceof jQuery) {

                this.galleries.each(function(index) {

                    // Creating the new gallery model
                    var model = new Model({
                        collection: self,
                        id: index,
                        el: this,
                        $el: $(this)
                    });

                    // Creating the new gallery view
                    var view = new View({
                        collection: self,
                        el: this,
                        $el: $(this),
                        model: model
                    });

                    // Setting the view for the model
                    model.set('view', view);

                    // Adding the model to the collection
                    self.add(model);

                });
            }

            // Setting up events for the collection
            this.setupEvents();

        },

        // Fn: Setting up events for the collection
        setupEvents: function() {

            var self = this;

            // Defining the els
            var els = self.els;
            if(!els) return false;

            // Binding a click event to the modal
            els.modalOverlay.addEventListener(config.event.click, function() {

                // Defining the active view from the activeModel
                var activeModel = self.activeGalleryModel;
                var view = activeModel.get('view');

                // Triggering the fullscreen close method from the view
                view.fullscreenClose();

                return this;

            }, false);

        },

        // Fn: Activating the fullscreen view
        fullscreenActive: function() {

            // Defining the els
            var els = this.els;
            if(!els) return false;

            // Adjusting the properties of the modal
            els.modal.classList.add(def.c.fullscreen);
            els.modal.style.display = 'block';

            // Moving the skyscraper ad
            def.ads.units.skyscraper.css({'position':'fixed', 'bottom' : '-99999px'});

            return true;

        },

        // Fn: Deactivating the fullscreen view
        fullscreenDeactive: function() {

            // Defining the els
            var els = this.els;
            if(!els) return false;

            // Adjusting the properties of the modal
            els.modal.classList.remove(def.c.fullscreen);
            els.modal.style.display = 'none';

            // Moving the skyscraper ad
            def.ads.units.skyscraper.css({'position':'relative', 'bottom' : 'inherit'});

            return true;

        },

        // Method to refresh ads
        refreshAds: function() {
           if (config.state.isDesktop) {
            adx.push(_a.atf_primary, 'visible', 'refresh');
            adx.push(_a.btf_sky, 'visible', 'refresh');
            return true;
        } else {
            return false;
        }
    }

});

})(jQuery);

// Exporting the collection
module.exports = Galleries;
},{"../bridges/bridge.gallery":2,"../config/items.ads":11,"../models/model.Gallery":15,"../modules/adx":18,"../modules/config":24,"../views/view.Gallery":53}],7:[function(require,module,exports){
// Collection: MagnifyVideos

// Defining the collection
var MagnifyVideos = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var View = require('../views/view.MagnifyVideos');

    var status = false;

    var Model = Backbone.Model.extend({});

    // Defining and returning the Backbone Collection
    return Backbone.Collection.extend({

        // Magnify API URL
        url: 'http://video.technobuffalo.com/api/content/find?vq=&per_page=3&key=FN697D1RFGP2VQLR&format=json',

        // Parsing the Magnify URL
        parse: function(response, options) {
            // Created parse so that collection doesn't automatically
            // add the fetch data as a model
        },

        // Initialize
        initialize: function() {
            var self = this;

            // Fetching data from the Magnify API
            self.fetch({dataType: 'jsonp'})

            .success(function(data) {

                // Grabbing the entries from the response
                var entries = data.entry;
                if(!entries || !(entries instanceof Array)) {
                    return false;
                }

                // Looping through all the entries to setup the models
                for(var i = 0, len = entries.length; i < len; i++) {
                    var entry = entries[i];

                    /**
                     * Defining the Model
                     * Have to do this "manually" because magnify returns objects with ":" in the keys, which doesn't work natively with Backbone's model + collection.add() method
                     */
                    var model = new Backbone.Model({
                        content: entry.content,
                        media: {
                            content: entry['media:content'],
                            thumbnail: entry['media:thumbnail']
                        },
                        link: entry.link,
                        published: entry.published,
                        title: entry.title
                    });
                    // Adding the model to the collection
                    self.add(model);
                }

            })
            .done(function() {
                // Render the view
                self.render();
            });
        },

        // Rendering
        render: function() {

            // Rendering the view
            var view = new View({
                collection: this
            });

            return this;

        }

    });

})(jQuery);

// Exporting the collection
module.exports = MagnifyVideos;
},{"../modules/config":24,"../views/view.MagnifyVideos":54}],8:[function(require,module,exports){
// Collection: PressVideos

// Defining the collection
var PressVideos = (function ($, undefined) { 'use strict';

    // Require
    var _e = require('../config/items.content');
    var Model = require('../models/model.Lazy');
    var View = require('../views/view.PressVideo');

    // Defining the Defaults
    var def = {
        c: {
            page: 'page-press-archive',
            wrapper: 'video-wrapper',
            videos: 'press-video'
        },
        post: {
            slug: 'in-the-news',
            type: 'page'
        }
    };

    return Backbone.Collection.extend({

        lazyLoadCount: 0,

        count: function() {
            return this.lazyLoadCount;
        },

        eles: [],

        initialize: function() {
            this.init();
        },

        init: function() {
            var self = this;
            // Fetching the press videos from the DOM
            for(var i = 0, len = this.eles.length; i < len; i++) {

                // Defining the DOM element
                var ele = this.eles[i];
                // Getting the video embed code from the element
                var wrapper = ele.querySelectorAll('.'+def.c.wrapper)[0];
                var embed = ele.getElementsByTagName('textarea')[0];

                // Checking to see if the wrapper and embed exist
                if(wrapper !== undefined && embed !== undefined) {

                    // Creating the model
                    var model = new Model({
                        el: ele,
                        embed: embed,
                        embedCode: embed.value,
                        lazy: false,
                        renderStatus: false,
                        wrapper: wrapper
                    });

                    // Creating the view
                    var view = new View({
                        collection: self,
                        model: model,
                        el: ele
                    });

                    // Adding the model to the collection
                    self.add(model);

                }
            }

            self.lazyLoadScroll();

            self.lazyLoad.call(self);

        },

        // Fn: Lazy loading the video embed codes
        lazyLoad: function() {
            for(var i = 0, len = this.models.length; i < len; i++) {
                var model = this.models[i];
                model.visible();
            }
        },

        // Event: Lazy loading the video embeds on window scroll
        lazyLoadScroll: function() {
            var self = this;
            _e.theWindow.on('scroll', function(){
                self.lazyLoad.call(self);
            });

        }

    });

})(jQuery);

// Exporting the collection
module.exports = PressVideos;
},{"../config/items.content":12,"../models/model.Lazy":16,"../views/view.PressVideo":55}],9:[function(require,module,exports){
// Collection: Tabs

// Defining the collection
var Tabs = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var View = require('../views/view.Tab');

    // Defining the Defaults
    var def = {
        tabs: false
    };

    var status = false;

    // Fn: Check if Tabs exist in the DOM
    var checkTabsExist = function(callback) {

        // Getting the Tabs from the DOM
        var tabs = document.querySelectorAll('.tabs li a');
        var tabsCount = tabs.length;

        if(tabsCount > 0) {

            // Changing the status to true
            status = true;

            // Pushing the nodeList to the Defaults
            def.tabs = tabs;

            return true;

        } else {
            return false;
        }

    };


    return Backbone.Collection.extend({

        initialize: function() {
            var self = this;

            if(checkTabsExist() === false) return false;

            // Create a model for each tab
            for(var i = 0, len = def.tabs.length; i < len; i++) {
                var tab = def.tabs[i];

                var tabId = tab.getAttribute('href');
                tabId = tabId.replace('#','');

                var tabbedContent = document.getElementById(tabId);

                // Creating the model
                var model = new Backbone.Model({
                    el: tab,
                    content: tabbedContent,
                    href: tabId
                });

                // Creating the view
                var view = new View({
                    collection: self,
                    model: model,
                    el: tab
                });

                // Adding the model to the collection
                self.add(model);

            }

        },

        eachModel: function(callback) {
            // Defining the models of the collection
            var models = this.models;
            var modelsCount = models.length;

            if(modelsCount > 0) {

                 // Looping through each model
                for(var i = 0; i < modelsCount; i++) {
                    // Returning the callback if applicable with the model
                    config.check.callback(callback(models[i]));
                }

                return true;

            } else {
                return false;
            }
        },

        // Fn: Removing the active class from all the tabs
        removeActiveClass: function() {
            this.eachModel(function(model) {

                var tab = model.get('el');
                tab.classList.remove('active');

                return true;

            });
        },

        // Fn: Removing the active class from all the tabbed content
        removeContentActiveClass: function() {
            this.eachModel(function(model) {

                var content = model.get('content');

                // Removing the active class and hiding the tabbed content
                if(content !== null) {
                    content.classList.remove('active');
                    content.style.display = 'none';
                }

            });
        }

    });

})(jQuery);

// Exporting the collection
module.exports = Tabs;
},{"../modules/config":24,"../views/view.Tab":56}],10:[function(require,module,exports){
// Module: Globals
// Description: Defines and provides "fail safe" for global based variables (Google Analyics, advertisers, etc..)


// Exporting the Module
module.exports = (function ($, undefined) { 'use strict';

    var init = function() {

        // 206 Advertising Object
        if (typeof twoOhSix === "undefined") {
            var twoOhSix = {};
            twoOhSix.insertAds = function() {
                return false;
            };
        }

        // Google Analytics Failsafe
        if(typeof _gaq === "undefined") {
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-8941471-1']);
            _gaq.push(['_trackPageview']);

            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        }

        // LazyLoading.js Echo Object
        if (typeof Echo === "undefined") {
            Echo = {
                init: function() { return false; },
                render: function() { return false; }
            };
        }

        // TechnoBuffalo Body Class
        if(typeof tbBodyClass === 'undefined') {
            var tbBodyClass = { status: false };
        }

        // Returning true
        return true;
    };

    // Initiailizing the module
    init();

    return {
        init: init
    };

})(jQuery);


},{}],11:[function(require,module,exports){
// Module: Items (Ads)
// Description: Defines and provides various ad-based jQuery DOM objects used throughout the site

// Defining the exports variable
var exports;

(function($, undefined) {

    'use strict';

    // Creating the content exports object within an anon function
    // This allows for the use of $ with jQuery
    exports = {

        // Primary / main ad units
        atf_leader: $('#ad-728x90-a'),
        atf_primary: $('#ad-300x250-a'),
        atf_skinny: $('#ad-960x66-a'),
        atf_takeover: $('#ad-takeover-a'),
        btf_sky: $('#ad-160x600-a'),
        btf_leader: $('#ad-728x90-b'),
        btf_box_wide: $('#ad-600x300-a'),

        // Vendor based units
        outBrain: $('.post-break-insert-ob'),

        // Containers
        leaderContainer: $('#ad-leader-container')

    };

})(jQuery);

// Exporting the content exports object
module.exports = exports;
},{}],12:[function(require,module,exports){
// Module: Items (Content)
// Description: Defines and provides various jQuery DOM objects used throughout the site

// Defining the exports variable
var exports;

(function($, undefined) {

    'use strict';

    // Creating the content exports object within an anon function
    // This allows for the use of $ with jQuery
    exports = {

        // The Window
        theWindow: $(window),

        // Body elements
        theBody: $('body'),
        thePageWrap: $('#body-page-wrap'),

        // Navigation elements
        theNavigation: $('#top-primary-nav'),
        thePrimary: $('#primary-nav'),
        theNavMenu: $('#top-navigation-menu'),

        // Main elements (content)
        theMain: $('#main'),
        theMainWrapper: $('#main-wrapper'),
        theTemplate: $('#main-template'),
        theContent: $('#content'),
        theSidebar: $('#sidebar'),
        theTrendingBar: $('#trending-bar'),

        // Modal elements
        theModal: $('#cover-modal'),
        theMainModal: $('#main-modal'),

        // Pagination elements
        loadingMore: $('#load-more-posts'),
        moreStories: $('#more-stories'),
        relatedPostsList: $('#related-stories-list'),

        // Galleries and sliders
        photoSlider: $('.photo-gallery.slider'),
        featuredHero: $('#featured-hero'),

        // Table of content elements
        tableOfContents: $('#tb-table-of-contents'),
        tableOfContentsWrapper: $('#table-of-contents-wrapper')

    };

})(jQuery);

// Exporting the content exports object
module.exports = exports;
},{}],13:[function(require,module,exports){
// Model: Article

// Defining the Model
var Article = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var process = require('../utils/utils.process');

    return Backbone.Model.extend({
        defaults: {
            author: null,
            authorUrl: null,
            date: null,
            shares: [],
            title: null,
            thumbnail: null,
            url: null,
            socialCount: 0,
            socialShare: null
        },

        initStatus: false,

        init: function() {

            if(this.initStatus) {
                return false;
            }

            // Update the initStatus to prevent re-rendering
            this.initStatus = true;

            // Intializing the methods to set the model's properties
            this.setTitle();
            this.setUrl();
            this.setThumbnail();
            this.setMeta();
            this.setSocial();

            this.socialShareEvent();

        },

        // Fn: Fetching the social share counts of the article
        getSocialCount: function() {

            var self = this;

            // Return false if the social counts have already been fetched OR if the device's resolution is not desktop
            if(self.get('socialCount') || !config.check.match.desktop()) {
                return false;
            }

            // Set the socialCount to true to prevent re-calling
            self.set('socialCount', true);

            // Fetching the social count using sharrre
            $(self.get('el')).getSocial(
                function(count){
                    // Updating the socialCount with the count callback object
                    self.set('socialCount', count);
                },
                function(site) {
                    self.socialShareEvent(site);
                }
                );

            // Returning self
            return self;

        },

        // Fn: Sets the author and the date of the article
        setMeta: function() {

            // Return false if the author + date has already been set
            if(this.get('author') && this.get('date')) {
                return false;
            }

            // Fetching the credit element from the DOM
            var meta = this.get('el').querySelector('.credit');

            // Returning false if the meta element is not found
            if(!meta) {
                return false;
            }

            var authorUrl;
            var author = meta.querySelector('a.author');
            var date = meta.querySelector('time');

            // Return false if either the date or the author elements are not found
            if(!date || !author) {
                return false;
            }

            // Retrieving the href property of author before author is transformed to a string
            authorUrl = author.href;

            // Retrieving the text content of the nodes, and removing the white space using a process filter
            author = process.removeWhitespace(author.firstChild.nodeValue);
            date = process.removeWhitespace(date.firstChild.nodeValue);

            // Setting the meta information for the model
            this.set('author', author);
            this.set('authorUrl', authorUrl);
            this.set('date', date);

            // Returning the model
            return this;

        },

        setTitle: function() {

            // Return false if the Title has already been set
            if(this.get('title')) {
                return false;
            }

            // Fetching the title element from the DOM
            var title = this.get('el').querySelector('.block-title a');


            // Return false if the title element is not found
            if(!title) {
                return false;
            }

            title = process.removeWhitespace(title.firstChild.nodeValue);

            // Setting the title from the querySelector
            this.set('title', title);

            // Returning the model
            return this;

        },

        setThumbnail: function() {

            // Return false if the Thumbnail has already been set
            if(this.get('thumbnail')) {
                return false;
            }

            // Fetching the image element from the DOM
            var image = this.get('el').querySelector('.block-image img');

            // Return false if the image element is not found
            if(!image) {
                return false;
            }

            // Defining the image source to add to the model
            var src;

            // Check for lazy load image source
            if(image.hasAttribute('data-echo')) {
                src = image.getAttribute('data-echo');
            } else {
                src = image.src;
            }

            // Setting the Thumbnail
            this.set('thumbnail', src);

            // Returning the model
            return this;

        },

        setUrl: function() {

            // Return false if the Url has already been set
            if(this.get('url')) {
                return false;
            }

            // Fetching the URL element from the DOM
            var url = this.get('el').querySelector('.block-title a');

            // Return false if the URL is not defined
            if(!url) {
                return false;
            }

            // Setting the URL from the querySelector
            this.set('url', url.href);

            // Returning the model
            return this;

        },

        setSocial: function() {

            // Return false if socials have already been set
            if(this.get('socialShare')) {
                return false;
            }

            // Defining and fetching the social tab from the DOM
            var ele = this.get('el');
            var social = ele.querySelectorAll('.'+this.collection.socialClass)[0];

            if(social) {
                // Setting the socialShare to the social DOM element
                this.set('socialShare', social);

                // Setting the height of the social share tab
                social.style.height = 31 + 'px';

                return this;

            } else {
                return false;
            }

        },

        socialShareEvent: function(target) {

            // Return false if the target is invalid or undefined
            if(!target) {
                return false;
            }

            var share = {
                article: this.get('title'),
                site: target,
                url: this.get('url')
            };

            var _arr = _.clone(this.get('shares'));
            _arr.push(share);
            this.set('shares', _arr);

            // console.log('User just shared "'+this.get('title')+'" on '+target+'.');

            return this;

        },

        optimize: function() {

            this.removeSocial();

        },

        removeSocial: function() {

            // Defining the socialShare
            var socialShare = this.get('socialShare');
            // Return false if socialShare is not set
            if(!socialShare) return false;

            // Creating the jQuery socialShare object
            var $socialShare = $(socialShare);

            // Unbinding all events from children (Necessary, since the shares are using $.sharrre)
            $socialShare.children().unbind();
            // Removing the socialShare from the DOM
            $socialShare.remove();

            return this;

        }

    });

})(jQuery);

// Exporting the Model
module.exports = Article;
},{"../modules/config":24,"../utils/utils.process":47}],14:[function(require,module,exports){
// Model: Breakout

// Defining the Model
var Breakout = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var util = require('../utils/utils');

    return Backbone.Model.extend({

        defaults: {
            breakspot: false,
            el: false,
            joiner: false,
            mediaType: 'image',
            parent: false,
            opacity: false,
            sectionBreak: false,
            settings: {
                breakThreshold: 250,
                containerWidth: 0,
                wrapperHeight: 0
            },
            story: false,
            title: false
        },

        // Fn: Init to adjust the entire model DOM element on resize
        adjustResize: function() {

            // Getting the DOM elements for adjusting
            var el = this.get('el');
            var wrapper = this.get('wrapper');
            var media = this.get('media');
            var title = this.get('title');

            // Initializing the resizing for various DOM elements
            this.adjustWrapperResize(wrapper);
            this.adjustMediaResize(media);
            this.adjustBreakoutResize(el, wrapper);
            this.adjustTitleResize(title);

            // Returning the Model's DOM element
            return el;

        },

        // Fn: Adjusting the breakout's wrapper
        adjustWrapperResize: function(wrapper) {
            if(!wrapper) return false;

            // Defining the collection
            var collection = this.collection;

            // Defining the new wrapper attributes
            var containerHeight = collection.wrapperDimensions.height;
            var containerWidth = collection.wrapperDimensions.width;
            var settings = this.get('settings');

            // Getting the offset left of the wrapper's parent
            var marginLeft = Math.round(wrapper.parentNode.getBoundingClientRect().left);

            // Setting the new wrapper attributes
            wrapper.style.width = containerWidth + 'px';
            wrapper.style.marginLeft = '-'+( marginLeft + 1 )+'px';
            wrapper.style.maxHeight =  containerHeight + 'px';

            // Setting the new wrapper attributes to Model attributes
            settings.wrapperHeight = containerHeight;
            settings.containerWidth = containerWidth;

            // Returning the wrapper
            return wrapper;
        },

        // Fn: Adjusting the breakout
        adjustBreakoutResize: function(el) {
            if(!el) return false;

            // Defining the collection
            var collection = this.collection;

            // Defining the new wrapper attributes
            var containerHeight = collection.wrapperDimensions.height;

            // Setting the new breakout attributes
            el.style.height = containerHeight + 'px';

            // Returning the breakout element
            return el;
        },

        // Fn: Adjusting the breakout's media element
        adjustMediaResize: function(media) {
            if(!media) return false;

            // Defining the new media attributes
            var wrapperHeight = this.get('settings').wrapperHeight;
            var height = media.clientHeight;

            // Readjust the Model's wrapper height if media height exists
            if(height !== 0 && height !== wrapperHeight) {
                this.get('settings').wrapperHeight = height;
            }

            var offset = Math.round((height - this.get('settings').wrapperHeight) / 2);

            // Setting the new media attributes
            // media.style.marginTop = '-' + offset + 'px';
            util.cssTransform(media, 0, '-'+offset, 0);

            // Returning the media
            return media;
        },

        // Fn: Adjusting the breakout's title element
        adjustTitleResize: function(title) {

            if(!title) return false;

            // // Defining the new properties for the title
            // var collection = this.collection;
            // var settings = this.get('settings');

            // // Using jQuery to determine the height/size do the resizing after DOM load
            // var $title = $(title);
            // var height = $title.height();
            // var width = $title.width();


            // var marginTop = Math.round((settings.wrapperHeight / 2) - (height / 2) - collection.windowOffset);
            // var marginLeft = 0;

            // // If the viewport is mobile
            // if(config.check.match.mobile()) {
            //     // Reset the margins to zero
            //     marginLeft = 0;
            //     marginTop = 0;
            // }
            // else if(collection.widthBreakpoint < settings.containerWidth) {
            //     marginLeft = Math.round((width / 2) - collection.windowOffset);
            // }
            // else {
            //     marginLeft = (settings.containerWidth / 2) - (width / 2) - (collection.windowOffset * 2);
            // }

            // // Setting the new title attributes
            // title.style.margin = '0px';

            // // Apply the repositioning via transform: translate3d
            // util.cssTransform(title, marginLeft, marginTop, 0);

            // // Returning the title
            // return title;

        },

        // Fn: Method used to adjust and optimize how the breakout videos behave in the DOM
        adjustVideoRender: function() {
            // Check to see if this breakout model contains video
            if(this.get('mediaType') !== 'video') return false;

            var video = this.get('media');
            var $video = $(video);

            // Getting the video's play state
            var videoPlayState = video.paused;

            // Check the visibility of the video
            if($video.visible(true) === true && video !== undefined) {
                if(videoPlayState === true) {
                    video.play();
                }
            } else {
                if(videoPlayState === false) {
                    video.pause();
                }
            }

            return video;
        }

    });

})(jQuery);

// Exporting the Model
module.exports = Breakout;
},{"../modules/config":24,"../utils/utils":46}],15:[function(require,module,exports){
// Model: Gallery

// Defining the Model
var Gallery = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var process = require('../utils/utils.process');

    var def = require('../bridges/bridge.gallery');

    return Backbone.Model.extend({
        // Rendering the elements for the model
        renderEls: function() {

            var thisGallery = this.get('el');

            if(this.get('els') || !thisGallery) return false;

            // Creating the Galley Wrap
            var galleryWrap = document.createElement('div');
            galleryWrap.classList.add(def.c.wrap);


            // Creating the Large View Open Button
            var largeViewOpen = document.createElement('div');
            largeViewOpen.classList.add(def.c.viewFull);
            largeViewOpen.classList.add('tb-button');
            largeViewOpen.classList.add('large');
            largeViewOpen.classList.add('black');
            largeViewOpen.innerHTML = '<i class="icon-resize-enlarge"></i>';
            largeViewOpen.id = def.c.viewFull;

            // Creating the Large View Close Button
            var largeViewClose = document.createElement('div');
            largeViewClose.classList.add(def.c.viewClose);
            largeViewClose.classList.add('tb-button');
            largeViewClose.classList.add('x-large');
            largeViewClose.classList.add('black');
            largeViewClose.innerHTML = '<i class="icon-resize-shrink"></i>';
            largeViewClose.id = def.c.vewClose;


            // Wrapping the gallery into the galleryWrap
            thisGallery.parentNode.insertBefore(galleryWrap, thisGallery);
            galleryWrap.appendChild(thisGallery);

            // Assigning the ID to the galleryWrap
            galleryWrap.id = 'gallery-wrap-' + parseInt((this.get('id') + 1), 10);

            // Assigning the elements to the el object
            var els = {
                galleryEl: thisGallery,
                largeViewOpen : largeViewOpen,
                largeViewClose: largeViewClose,
                galleryWrap: galleryWrap
            };

            this.set('els', els);

            return this;

        },

        // Fn: Rendering the gallery using RoyalSlider jQuery plugin
        renderGallery: function() {
            var els = this.get('els');

            // Return false if els is not defined
            if(!els) return false;

            var $gallery = this.get('$el').royalSlider(this.collection.galleryOptions);

            this.set('gallery', $gallery);

            return this;

        }

    });

})(jQuery);

// Exporting the Model
module.exports = Gallery;
},{"../bridges/bridge.gallery":2,"../modules/config":24,"../utils/utils.process":47}],16:[function(require,module,exports){
// Model: Lazy

// Defining the Model
var Lazy = (function ($, undefined) { 'use strict';

    return Backbone.Model.extend({

        defaults: {
            renderStatus: false
        },

        visible: function() {
            if(this.get('renderStatus')) {
                return false;
            }

            if($(this.get('el')).visible(true) === true) {
                this.trigger('lazyLoad', this);
                return true;
            } else {
                return false;
            }

        }

    });

})(jQuery);

// Exporting the Model
module.exports = Lazy;
},{}],17:[function(require,module,exports){
// Module: Admin Bar
// Description: Module contains the singleton that adjusts various elements in the DOM if the admin bar is present

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../config/items.content');
    var config = require('./config');

    // Defining the Defaults
    var def = {
        adminBarHeight: 28,
        barClass: 'admin-bar',
        bar: null,
        barHeight: 50,
        nav: null,
        navHeight: 50,
        tableContents: _e.tableOfContentsWrapper[0],
        topOffset: 0
    };

    // Defining the Status (Presence) of the WP admin bar
    var status = false;

    // Memoizing the Init Function
    var initMemo = false;

    // Fn: Method to Set the Bar element and return the bar height
    var getElementHeight = function(element, height, id) {
        if(!status) return false;

        // Check to see if the bar and height have been previously defined
        if(def[element] === null && def[height] === 0) {
            var bar = document.getElementById(id);
            if(bar !== null) {
                def[element] = bar;
                def[height] = bar.clientHeight;
                return height;
            } else {
                return false;
            }
        } else {
            // If so, return the barHeight
            return height;
        }

    };

    // Fn: Setting and returning the admin bar height
    var setBarHeight = function() {
        // return getElementHeight('bar', 'barHeight', 'wpadminbar');
        return def.adminBarHeight;
    };

    // Fn: Setting and returning the nav bar height
    var setNavHeight = function() {
        // return getElementHeight('nav', 'navHeight', 'top-nav');
        return def.barHeight;
    };

    // Fn: Setting and returning the top offset (admin bar + nav height)
    var setTopOffset = function() {
        if(def.topOffset !== 0) return def.topOffset;

        // Defining the topOffset
        def.topOffset = def.adminBarHeight + def.navHeight;

        // Retuning the topOffset
        return def.topOffset;
    };

    // Fn: Adjusting the 'top' of an element
    var adjustElementOffset = function(element, offset) {
        // Determining of the element exists and is a DOM object
        if(!status || !element) return false;

        if(typeof element !== 'object') return false;

        // Adjusting the style.top, applying the offset
        element.style.top = offset + 'px';

        // returning the element
        return element;

    };

    // Fn: Adjusting the DOM elements if Admin Bar is present
    var adminBarAdjust = function() {
        // Proceed if "status" is true (admin bar is present in the DOM)
        if(!status) return false;

        // Only works after $ document is ready. WP loads admin bar via jQuery
        $(document).ready(function() {

            // Setting the admin bar and nav bar into Defaults object
            setBarHeight();
            // setNavHeight();

            // Adjusting the top offset for the table of contents
            adjustElementOffset(def.tableContents, setTopOffset());

        });
    };

    // Fn: Verifying the state of the WP-admin-bar
    var adminBarVerify = function(callback) {

        // Return false if the module has already initialized
        if(initMemo) return false;

        initMemo = true;
        // Check to see if theBody DOM object exists
        if(!_e.theBody[0]) return false;

        // Check to see if the body contains the admin-bar class
        if(!config.check.adminBar()) {
            status = false;
            return false;
        }

        // Changing the status to true
        status = true;

        // Initializing the callbacks
        return config.check.callback(callback);

    };

    // Fn: Private Init Function
    var adminBarInit = function() {
        return adminBarVerify(function() {
            adminBarAdjust();
        });
    };

    // Fn: Public Init Function
    var init = function() {
        return adminBarInit();
    };

    // Fn: Public - Checking the status of the admin bar
    var getAdminBarStatus = function() {
        // Return the status
        return status;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        status: getAdminBarStatus
    };

})(jQuery);
},{"../config/items.content":12,"./config":24}],18:[function(require,module,exports){
// Module: Adx
// Description: Module that contains methods that for the ad units on the site

module.exports = (function ($, undefined) { "use strict";

    // Requiring Modules
    var _a = require('../config/items.ads');
    var config = require('./config');
    var util = require('../utils/utils');

    // Defining the defaults
    var def = {
        c: {
            atf: 'atf-ad',
            container: 'ad-container',
            once: 'ad-once',
            optim: 'ad-load-optim',
            unload: 'ad-once-unloaded',
            viglink: 'vglnk'
        },
        d: {
            id: 'data-ad-id'
        }
    };

    // Defining the ad units
    var units = {
        atf: [
            _a.atf_leader[0],
            _a.atf_primary[0]
        ],
        spec: [
            _a.atf_skinny[0],
            _a.atf_takeover[0],
            _a.btf_box_wide[0]
        ]
    };

    // Defining the adsEnabled setting
    var adsEnabled = true;

    // API: Action
    var action = {
        // fn: Push method to DFP
        push: function(unit, refresh) {
            // Return false if adsEnabled is switched off
            if(!adsEnabled) return false;

            // Defining and getting the ad id
            var adId;
            if(unit[0] !== undefined) {
                adId = unit[0].id;
            } else {
                adId = $(unit).attr('id');
            }

            // Return false if googletag is not available (DPF)
            if(typeof googletag !== "object") return false;

            // Defining ad and slot from DFP's API
            var ad = googletag.slot_manager_instance.b[adId];
            var slot = googletag.slot_manager_instance.a;

            // DPF Reference ////////////////////////////
            //
            // ad Object
            // b:
            // |--- a: div ID (string)
            // c:   slot name (string)
            // w:   sizes (array)
            //
            /////////////////////////////////////////////

            // Return false if ad or slot is not defined
            if(!ad || !slot) return false;

            // Refresh the ad if the refresh setting is set
            // Note: Fixed ad slot for refresh - March 29, 2014 (DFP changed their object keys)
            if(refresh === 'refresh') {
                if(ad.w !== undefined) {
                    googletag.pubads().refresh([slot[ad.c][0]]);
                }
            // Otherwise, push the ad
            } else {
                googletag.cmd.push(function() {
                    googletag.display(adId);
                });
            }

            return true;
        }
    };

    // fn: Pushing the ad in DFP
    var pushInit = function(unit, onscreen, refresh) {

        // Return false if adsEnabled is off or if units aren't in the DOM
        if(!adsEnabled || !unit.length) return false;

        // If onscreen setting is visible
        if(onscreen === 'visible') {
            // Push the unit if it is visible in the DOM
            if (unit.visible(true) === true ) {
                // Pushing the ad unit
                action.push(unit, refresh);
            }
        } else {
            // Pushing the ad unit
            action.push(unit, refresh);
        }
        return true;
    };

    // fn: Public method to push an ad unit
    var push = function(unit, onscreen, refresh) {
        // Return the private push method
        return pushInit(unit, onscreen, refresh);
    };

    var assemble = {
    };

    var setup = function() {
        // ATF Units
        for(var iA = 0; iA < units.atf.length; iA++) {
            var atfUnit = units.atf[iA];
            if(atfUnit !== undefined) {
                atfUnit.classList.add(def.c.atf);
            }
        }
        // Special Units
        for(var iSp = 0; iSp < units.spec.length; iSp++) {
            var specUnit = units.spec[iSp];
            if(specUnit !== undefined) {
                specUnit.classList.add(def.c.once, def.c.unload);
            }
        }

        // assemble.text();

        checkAdsOff();
    };

    // fn: Method to define the next page URL for PubDesh
    var pageUrl = function(url) {
        if(!url) return false;

        // Assigning the URl to 206's pageUrl variable
        window.twoOhSixPageUrl = url;

        // Return the URL
        return url;
    };

    // fn: Method to scan the DOM and return a list of ad units to use for the insert method
    var getAdsToInsert = function() {

        // Getting the ad units from the DOM
        var ads = document.querySelectorAll('.ad');
        if(!ads[0]) return 'There are no ads on the page.';

        // Transforming the nodeList to an array
        var adsArray = Array.prototype.slice.call(ads);

        // Filtering the array to locate units with the class of gpt
        adsArray = _.filter(adsArray, function(ad) {
            if(ad.classList.contains('gpt')) {
                return ad;
            }
        });

        // Returning the ad array
        return adsArray;

    };

    // fn: Method to insert ad units (206)
    var insert = function(options) {
        // Return false if adsEnabled is switched off
        if(!adsEnabled) return false;

        // Defining the default options
        var defaults = {
            ads: null,
            scan: false,
            url: false
        };

        // Extend the default options if options is defined
        if(options && typeof options === 'object') {
            defaults = _.extend(defaults, options);
        }

        // Initialize pageUrl method if url is defined
        if(defaults.url) pageUrl(defaults.url);

        // Initialize scanning of the DOM for ads if defaults.scan is true
        if(defaults.scan === true) {
            // Updating the defaults ads key with ads array from getAdsToInsert
            defaults.ads = getAdsToInsert();
        }

        // Init the 206 insertAds method
        twoOhSix.insertAds(defaults.ads);

        // If units is defined, return the units array
        if(defaults.ads && defaults.ads instanceof Array) {
            return defaults.ads;
        } else {
            // Return true
            return true;
        }

    };

    // fn: Method to remove the 'gpt' class from ad units
    var removeAdClass = function() {
        // Getting the ads from the DOM
        var ads = document.querySelectorAll('.ad');
        if(!ads[0]) return false;

        // Looping through the ad units
        for(var i = 0, len = ads.length; i < len; i++) {
            ads[i].classList.remove('gpt');
        }

        // Returning the array of ads
        return ads;
    };

    // fn: Method to remove the 'data-ad-id' attribute from ads
    var removeAdData = function() {
        // Getting the ads from the DOM
        var ads = document.querySelectorAll('.ad');
        if(!ads[0]) return false;

        // Looping through the ad units
        for(var i = 0, len = ads.length; i < len; i++) {
            ads[i].removeAttribute('data-ad-id');
        }

        // Returning the array of ads
        return ads;
    };

    // fn: Init the module
    var init = function() {
        return setup();
    };

    // Fn: Check to see if ads are enabled
    var adsEnabledCheck = function() {
        // Return ads enabled status
        return adsEnabled;
    };


    // fn: Remove All Ad Units
    var removeAllInit = function() {
        // Return false if site is not dev
        if(!config.host.dev) return false;

        // Get all ad units in the DOM
        var ads = document.querySelectorAll('.ad ad-container');
        // Remove all ad units from the DOM
        util.removeAll(ads);

        return 'All ads on the page have been removed';
    };

    var pauseInit = function() {
        // Return false if site is not dev
        if(!config.host.dev) return false;
        // Switch the adsEnabled status
        adsEnabled = false;

        return 'Ads are paused.';
    };

    var unpauseInit = function() {
        // Return false if site is not dev
        if(!config.host.dev) return false;
        // Switch the adsEnabled status
        adsEnabled = true;

        return 'Ads are unpaused.';
    };

    // Fn: Pause Ads (for development)
    var pause = function() {
        // Initiate ad pause
        return pauseInit();
    };

    // Fn: Unpause Ads (for development)
    var unpause = function() {
        // Initiate ad unpause
        return unpauseInit();
    };

    // Fn: Remove all ads (for development)
    var removeAll = function() {
        // Remove all ads from the page
        return removeAllInit();
    };

    // Fn: Check AdsOff option (for development)
    var checkAdsOff = function() {
        // Return false if site is not dev
        if(!config.check.dev) return false;

        // Remove ads if params are in the URL
        if(config.host.full.indexOf('?adsOff=true&user=1') != -1) {
            removeAll();
            pause();
            return 'Ads have been disabled';
        } else {
            return false;
        }
    };

    // Exporting the content exports object
    return {
        enabled: adsEnabledCheck,
        getAdsToInsert: getAdsToInsert,
        init: init,
        insert: insert,
        pageUrl: pageUrl,
        pause: pause,
        push: push,
        removeAdClass: removeAdClass,
        removeAdData: removeAdData,
        removeAll: removeAll,
        unpause: unpause
    };

})(jQuery);
},{"../config/items.ads":11,"../utils/utils":46,"./config":24}],19:[function(require,module,exports){
// Module: Articles
// Description: Module initializes the Backbone MVC for articles

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');
    var Collection = require('../collections/collection.Articles');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    var collections = [];

    // Fn: Method to loop through each collection
    var eachCollection = function(callback) {
        var length = collections.length;

        // Return false if collections is empty
        if(length === 0) {
            return false;
        }

        // Looping through the collections to add to the share count
        for(var i = 0; i < length; i++) {

            // Executing the callback if applicable
            config.check.callback(callback(collections[i]));

        }

        return true;

    };

    // Fn: Method to loop through each model for each collection
    var eachModelInCollections = function(callback) {

        // Looping through each collection
        eachCollection(function(collection) {

            // Looping through each model for each collection
            for(var i = 0, len = collection.models.length; i < len; i++) {

                // Defining the model
                var model = collection.models[i];

                // Executing the callback if applicable
                config.check.callback(callback(model));

            }

        });

        return true;

    };

    // Fn: Public: Adding a collection to articles.collection
    var addCollection = function(collection) {

        // Verify that collection is valid and defined
        if(collection === undefined && typeof collection === 'object') {
            return false;
        }

        // Pushing the collection to articles.collection array
        collections.push(collection);

        return collection;

    };

    // Fn: Public: Returning a post count
    var getPostCount = function() {

        // Defining a count
        var count = 0;

        // Looping through the collections to add to the post count
        eachCollection(function(collection) {
            count = count + collection.length;
        });

        // Returning the post count
        return count;

    };

    // Fn: Public: Returning a share array
    var getShares = function() {
        // Defining a share array
        var shares = [];

        // Looping through each model for shares
        eachModelInCollections(function(model) {

            // Defining the share attribute from the model
            var share = model.get('shares');

            // Check to make sure there are shares within the model
            if(share.length > 0) {
                // Push the share objects to the share array
                shares.push(share);
            }

        });

        // Change shares to false if it is empty
        if(shares.length === 0) {
            shares = false;
        }

        // Returning the shares array
        return shares;

    };

    // Fn: Public: Returning a share count
    var getShareCount = function() {

        // Defining a count
        var count = 0;

        var shareData = getShares();

        for(var i = 0, len = shareData.length; i < len; i++) {
            count += shareData[i].length;
        }

        // Returning the share count
        return count;

    };

    // Fn: Private init of this module
    var moduleInit = function() {
        verifyInit(function() {

            var ArticleCollection = Collection.extend({
                els: document.querySelector('.post-list')
            });

            var collection = new ArticleCollection();

            collections.push(collection);

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo === false) {
            initMemo = true;
            config.check.callback(callback);
        } else {
            return false;
        }
    };

    // Fn: Public init of this module
    var init = function() {
        moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collections;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        collections: getCollection,
        init: init,
        status: getStatus,
        addCollection: addCollection,
        get: {
            postCount: getPostCount,
            shares: getShares,
            shareCount: getShareCount
        }
    };

})(jQuery);

},{"../collections/collection.Articles":4,"./config":24}],20:[function(require,module,exports){
// Module: Back to Top (Navigation)
// Description: Module contains the singleton for the "Back to Top" button

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');
    var Collection = require('../collections/collection.Breakouts');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    var collection;

    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            // Verify that page is single + featured size && breakout divs exist
            if(!config.state.isSingleFeatured) return false;

            // Backbone: Initiating the Breakout collection
            collection = new Collection();

            // Returning true
            return true;

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo) return false;

        // Updating the status of the init
        initMemo = true;
        // Return the init of the callback
        return config.check.callback(callback);

    };

    // Fn: Public init of this module
    var init = function() {
        // Returning the moduleInit method
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collection;
    };


    // Initiailizing the module
    init();

    // Exporting the export object
    return {
        collection: getCollection,
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../collections/collection.Breakouts":5,"./config":24}],21:[function(require,module,exports){
// Module: Captcha Text
// Description: Module contains the model constructor that renders a canvas DOM element used for Captcha

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    // fn: Captcha Canvas Constructor
    var Captcha = function(defaults) {

        // Defining the canvas
        this.canvas = false;

        // Default properties for the canvas
        this.defaults = {
            font: '15px Helvetica Neue, Helvetica, Arial',
            fontColor: '#333',
            id: false,
            width: 200,
            height: 18,
            text: '',
            textX: 0,
            textY: 13
        };

        // fn: Creating the canvas
        this.createCanvas = function() {
            var self = this;

            // Return the canvas if it already exists
            if(self.canvas) return self.canvas;

            // Creating a canvas element and adding it to the constructor
            self.canvas = document.createElement('canvas');

            // Defining the canvas ID
            self.canvas.id = self.defaults.id + '-captcha';

            // Setting the attributes of the canvas
            var context = self.canvas.getContext('2d');
            context.canvas.width = self.defaults.width;
            context.canvas.height = self.defaults.height;
            context.canvas.style.verticalAlign = 'middle';
            context.font = self.defaults.font;
            context.fillStyle = self.defaults.fontColor;
            context.fillText(self.defaults.text, self.defaults.textX, self.defaults.textY);

            // Returning the class
            return self;

        };

        // fn: Rendering / adding the canvas into the DOM
        this.render = function() {
            var self = this;

            // Return false if the canvas doesn't exist
            if(!self.canvas) return false;

            // Appending the canvas to the assigned DOM element
            document.getElementById(self.defaults.id).appendChild(self.canvas);

            // Returning the class
            return self;

        };

        // fn: Initialize method to define / build the canvas
        this.initialize = function(defaults) {

            var self = this;

            // Extend the default options if applicable
            if(defaults && typeof defaults === 'object') {
                self.defaults = _.extend(self.defaults, defaults);
            }

            // defaults.id is Required! Return false if undefined
            if(!self.defaults.id) return false;

            // Return false if the DOM element is not defined
            if(!document.getElementById(self.defaults.id)) return false;

            // Creating the canvas
            self.createCanvas();

            // Rendering the canvas
            self.render();

            // Returning the class
            return self;

        };

        // Init the constructor
        this.initialize(defaults);

    };

    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            var contact = new Captcha({
                id: 'cap-contact-em',
                text: 'contact@technobuffalo.com'
            });

            var tip = new Captcha({
                id: 'cap-tip-em',
                text: 'tips@technobuffalo.com'
            });

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // Initializing the module
    init();

    // Exporting the export object
    return {
        create: Captcha,
        init: init,
        status: getStatus
    };

})(jQuery);

},{"./config":24}],22:[function(require,module,exports){
// Module: Click Tracking
// Description: Module contains the singleton that renders the Google Analytics click tracking attribute for various elements in the DOM

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../config/items.content');
    var config = require('./config');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    // Defining the els array
    var els = [];

    // fn: El Model constructor
    var ElTrack = function(attributes) {
        // Return false if attributes is not defined or if attributes is not an object
        if(!attributes || typeof attributes !== 'object') return false;

        // Define el object (model)
        var el = {
            initStatus: false
        };
        // Extend el with attributes
        _.extend(el, attributes);

        // Pushing the element model to the els array (collection)
        els.push(el);

        // Return the el object (model)
        return el;

    };


    // fn: Creating the initial els to track
    var createElTracks = function() {

        var featuredHero = new ElTrack({
            el: _e.featuredHero.find('a'),
            label: 'Featured Hero',
            value: 'Click - Featured Hero',
            interaction: 'Featured Hero'
        });

        var moreStories = new ElTrack({
            el: _e.moreStories,
            label: 'More Stories',
            value: 'Click - More Stories',
            interaction: 'More Stories'
        });

        var productsMentioned = new ElTrack({
            el: $('#product-mentioned').find('.product-grid'),
            label: 'Product Mentioned',
            value: 'Click - Product Mentioned',
            interaction: 'Product Mentioned'
        });

        var vendorLink = new ElTrack({
            el: $('.single-product').find('a.the-vendor-link'),
            label: 'Vendor Link - Product Page',
            value: 'Click - Vendor Link',
            interaction: 'Vendor Link - Product Page'
        });

        // Return the els collection
        return els;

    };

    // fn: Setting up the initialize clickTracking els
    var setupEls = function() {

        // Defining the length from the els
        var len = els.length;
        // Return false if els is empty
        if(len <= 0) return false;

        // Looping through the els
        for(var i = 0; i < len; i++) {

            var elTrack = els[i];

            if(elTrack.el.length <= 0) continue;

            // Skip the el if the initStatus is true
            if(elTrack.initStatus) continue;

            elTrack.initStatus = true;

            elTrack.el.attr("onClick","_gaq.push(['_trackEvent', '"+elTrack.label+"', '"+elTrack.value+"', '"+elTrack.interaction+"']);");

        }

        // Return the els collection
        return els;

    };

    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            // Create the els to track
            createElTracks();

            // Setup the els to track
            setupEls();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        return config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // Initializing the module
    init();

    // Exporting the export object
    return {
        El: ElTrack,
        els: els,
        init: init,
        setup: setupEls,
        status: getStatus
    };

})(jQuery);
},{"../config/items.content":12,"./config":24}],23:[function(require,module,exports){
// Module: Config (Check)
// Description: Contains methods that provide information about the current state/page

// Defining the module exports
module.exports = (function () { 'use strict';

    // Require Modeuls
    var _e = require('../config/items.content');

    // Defining the Defaults
    var defaults = {
        c: {
            desktop: 'desktop',
            dev: 'dev',
            ie: 'ie',
            ie8: 'ie8',
            mobile: 'phone',
            nonceKey: 'tb-wp-setup-key',
            single: 'single',
            singleFeatured: 'single-full-width',
            tablet: 'tablet'
        },
        d: {
            nonceKey: 'data-key'
        },
        match: {
            mobile: {
                min: 0,
                max: 569
            },
            tablet: {
                min: 570,
                max: 959
            },
            desktop: {
                min: 960,
                max: 9999999
            }
        }
    };

    var device = 'desktop';

    // Defining the adblock status
    var adBlockStatus = false;



    // Fn: Checking and executing the callback if defined
    var setCallback = function(callback) {
        if(!callback || typeof callback !== 'function') return false;
        return callback();
    };



    // Fn: Checking the device
    var deviceCheck = function(className, deviceName, callback) {

        if(!_e.theMainWrapper.hasClass(className)) return false;
        device = deviceName;
        setCallback(callback);

        return true;

    };

    // Fn: Check if the environment is desktop
    var checkDesktop = function(callback) {
        return deviceCheck(defaults.c.desktop, 'desktop', callback);
    };

    // Fn: Check if the environment is tablet
    var checkTablet = function(callback) {
        return deviceCheck(defaults.c.tablet, 'tablet', callback);
    };

    // Fn: Check if the environment is mobile
    var checkMobile = function(callback) {
        return deviceCheck(defaults.c.mobile, 'mobile', callback);
    };


    // Fn: Checking the Current Device
    var currentDeviceCheck = function() {

        checkDesktop();
        checkTablet();
        checkMobile();

        return device;

    };



    // Fn: Private method Checking if the is dev
    var devCheckInit = function() {
        if(window.location.hostname.indexOf(defaults.c.dev) != -1) {
            return true;
        } else {
            return false;
        }
    };

    // Fn: Public init to check if the environment is dev
    var devCheck = function() {
        return devCheckInit();
    };

    // Fn: Updating the events with touch if applicable
    var deviceEvents = function() {

        var events = {};

        // Update the events if the device is not a desktop
        if(!checkDesktop()) {

            // Adjust for all mobile touch platform (of touchstart)
            if('ontouchstart' in document.documentElement) {

                events.click = 'touchstart';
                events.hover = 'touchstart';
                events.mouseenter = 'touchstart';
                events.mouseleave = 'touchstart';

            } else {

                // This should account for Internet Explorer 10/11
                events.click = 'click';
                events.hover = 'click';
                events.mouseenter = 'click';
                events.mouseleave = 'click';

            }

        } else {

            // Default events for desktop
            events = {
                click: 'click',
                hover: 'mouseenter mouseleave',
                mouseenter: 'mouseenter',
                mouseleave: 'mouseleave'
            };

        }

        // Returning the event object
        return events;

    };

    // Fn: Match Check
    var matchCheck = function(device) {

        // Return false if window.matchMedia is not defined
        if(!matchMedia) return false;

        // Return true if screen dimensions matches device width
        // Get the attributes from def
        if(matchMedia('only screen and (min-width: '+defaults.match[device].min+'px) and (max-width: '+defaults.match[device].max+'px)').matches) {
            return true;
        }

        // Else return false
        return false;

    };

    // Fn: Match - Mobile (Check for a mobile-sized screen)
    var matchMobile = function() {
        return matchCheck('mobile');
    };

    // Fn: Match - Tablet (Check for a Tablet-sized screen)
    var matchTablet = function() {
        return matchCheck('tablet');
    };

    // Fn: Match - Desktop (Check for a Desktop-sized screen)
    var matchDesktop = function() {
        return matchCheck('desktop');
    };


    // fn: Match - Detect current device based on viewport
    var currentMatchDevice = function() {

        // Define the devices array with device objects
        var deviceArray = [
            // Each object runs the match method to return true/false
            {
                device: 'desktop',
                status: matchDesktop()
            },
            {
                device: 'tablet',
                status: matchTablet()
            },
            {
                device: 'phone',
                status: matchMobile()
            }
        ];

        // Filter the devices array to get the device with the 'true' status
        var devices = _.filter(deviceArray, function(dev) {
            if(dev.status === true) return dev;
        });

        // Return the device name
       if(devices[0]) {
            return devices[0].device;
        } else {
            return 'desktop';
        }

    };



    // Fn: Checking the IE Version
    // http://stackoverflow.com/questions/10964966/detect-ie-version-in-javascript
    var checkInternetExplorer = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1], 10) : false;
    };

    // Fn: Check if the environment is Internet Explorer
    var checkIE = function(callback) {

        if(!_e.theBody[0]) return false;

        // Defining the status
        var status = false;

        // Checking the IE version
        var version = checkInternetExplorer();

        // Checking to see if hte body contains an IE class
        if(_e.theBody[0].classList.contains(defaults.c.ie)) {

            // Initializing the callback
            setCallback(callback);
            // Updating the status
            status = true;

        } else {

            // Updating the status
            status = false;

        }

        // Add IE8 .class to the body if browser is IE8
        if(version === 8) _e.theBody[0].classList.add(defaults.c.ie8);

        // Retuning the IE status
        return status;

    };

    // fn: Check Ad Blocker
    var checkAdBlock = function() {

        // Defining the URL of the test ads.js file
        var url = 'http://'+window.location.hostname+'/wp-content/themes/technobuffalo/resources/js/ads/ads.js';

        // Fetching the script
        $.getScript(url)

        // If successful, adblock is OFF
        .done(function() {

            _gaq.push(['_trackEvent', 'AdBlock (Off)', 'AdBlock (Off)', 'AdBlock']);

            adBlockStatus = false;

            return 'Ad block is off.';

        })
        // If fail, adblock is ON
        .fail(function() {

            _gaq.push(['_trackEvent', 'AdBlock (On)', 'AdBlock (On)', 'AdBlock']);

            adBlockStatus = true;

            return 'Ad block is on.';
        });

    };

    // fn: Returns the adBlock status
    var checkAdBlockStatus = function() {
        return adBlockStatus;
    };


    // Fn: Checking for the presence of the Wordpress admin bar
    var checkAdminBar = function() {
        if(!_e.theBody[0]) return false;

        // Check to see if the body contains the admin-bar class
        if(_e.theBody[0].classList.contains('admin-bar')) {
            // Return true
            return true;
        } else {
            // Return false
            return false;
        }
    };

    // fn: Checking if the user has logged in
    var checkLoggedIn = function() {
        if(!_e.theBody[0]) return false;

        // Check to see if the body contains the admin-bar class
        if(_e.theBody[0].classList.contains('logged-in')) {
            // Return true
            return true;
        } else {
            // Return false
            return false;
        }
    };


    // Fn: Checking for Overflow Scrolling Support in the browser
    var overflowScrolling = function() {

        // Defining the document.style for checking
        var docStyle = window.document.documentElement.style;

        // Detect scrolling properties in the style
        if("WebkitOverflowScrolling" in docStyle ||
        // Test the windows scrolling property as well
        "msOverflowStyle" in docStyle) {

            // If available, return true
            return true;
        }

        // Else, return false
        return false;

    };



    // Fn: Checking and returning the Wordpress nounce key
    var keyNonce = function() {
        var nonce = document.getElementById(defaults.c.nonceKey);
        if(!nonce) return false;

        var key = nonce.getAttribute(defaults.d.nonceKey);
        if(key) {
            return key;
        } else {
            return false;
        }
    };



    // Fn: Checking and returning the page info generated by Wordpress
    var pageInfo = function() {
        if(!tbBodyClass.status) return false;

        var info = tbBodyClass;
        var adminBarStatus = checkAdminBar();

        info.adminBar = adminBarStatus;

        // Returning the bodyClass object
        return info;

    };

    // Fn: Checking whether the page is a 'single' type page
    var pageSingle = function(callback) {
        if(!_e.theBody[0]) return false;

        if(_e.theBody[0].classList.contains(defaults.c.single)) {
            setCallback(callback);
            return true;
        } else {
            return false;
        }
    };

    // Fn: Checking if the page is a 'featured' type page
    var pageSingleFeatured = function(callback) {

        if(!pageSingle() || !_e.theContent[0]) return false;

        if(_e.theContent[0].classList.contains(defaults.c.singleFeatured)) {
            setCallback(callback);
            return true;
        } else {
            return false;
        }

    };




    // Exporting the content exports object
    return {
        adBlock: checkAdBlock,
        adBlockStatus: checkAdBlockStatus,
        adminBar: checkAdminBar,
        callback: setCallback,
        desktop: checkDesktop,
        dev: devCheck,
        device: currentDeviceCheck,
        events: deviceEvents,
        loggedIn: checkLoggedIn,
        mobile: checkMobile,
        tablet: checkTablet,
        ie: checkIE,
        keys: {
            nonce: keyNonce
        },
        match: {
            current: currentMatchDevice,
            desktop: matchDesktop,
            mobile: matchMobile,
            tablet: matchTablet
        },
        overflowScrolling: overflowScrolling,
        page: {
            info: pageInfo,
            single: pageSingle,
            singleFeatured: pageSingleFeatured
        }
    };

})();

},{"../config/items.content":12}],24:[function(require,module,exports){
// Module: Config
// Description: Contains information ( data / events / states ) of the current site/page based.

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    var process = require('../utils/utils.process');
    var check = require('./config.check');

    // Defining the defaults for config
    var defaults = {
        c: {
            desktop: 'desktop',
            tablet: 'tablet',
            mobile: 'phone'
        },
        check: {
            keys: {},
            page: {}
        },
        device: 'desktop',
        event: {
            click: 'click',
            hover: 'mouseenter mouseleave',
            mouseenter: 'mouseenter',
            mouseleave: 'mouseleave'
        },
        key: {
            nonce: ''
        }
    };

    var device;
    var deviceEvents;
    var hostSetup;
    var keyNonce = check.keys.nonce();
    var pageInfo;
    var stateSetup;

    var config = {};


    // Fn: Checking for development environment
    var configCheckDevelopment = function(host) {

        // Defining the host (defaults)
        host = host || window.location.hostname;
        // Defining the status
        var status = false;

        // Check for 'dev' in the URL
        if(host.indexOf('.dev') != -1) status = true;

        // Check for 'dev' in the URL
        if(host.indexOf('dev.technobuffalo.com') != -1) status = true;

        // Check for Local Development (Apple Router)
        if(host.indexOf('10.0.1') != -1) status = true;

        return status;

    };


    // Fn: Creating the host config object
    var configHost = function() {

        // Defining the host
        var host = 'http://' + window.location.hostname;

        var devEnv = configCheckDevelopment(host);

        // Returning the host object
        return {
            host: 'http://' + window.location.hostname,
            ajax: host + '/wp-admin/admin-ajax.php',
            dev: devEnv,
            full: host + '/' + window.location.search,
            protocol: window.location.protocol + "//",
            location: window.location.host,
            page: {},
            path: window.location.pathname
        };

    };

    // Fn: Creating and defining (and resets) the state object
    var configState = function() {

        // Returning the default states object
        return {
            isDesktop: check.desktop(),
            isIE: check.ie(),
            isMobile: check.mobile,
            isSingle: check.page.single(),
            isSingleFeatured: check.page.singleFeatured(),
            isTablet: check.tablet()
        };

    };

    // Using setup to privatize the method
    var setup = function() {

        // Initializing the removal of empty paragraphs
        process.remove.emptyParagraphs();
    };

    // Fn: Public init method
    var init = function() {
        return setup();
    };

    // Pushing information to the main API

    config.check = check;

    config.device = device = check.device();

    config.event = deviceEvents = check.events();

    config.info = pageInfo = check.page.info();

    config.keys = {
        nonce: keyNonce
    };

    config.host = hostSetup = configHost();

    config.state = stateSetup = configState();

    return config;

})(jQuery);


},{"../utils/utils.process":47,"./config.check":23}],25:[function(require,module,exports){
// Module: Crew
// Description: Module contains the singleton that renders the portrait effect for team members on the crew page

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');

    // Defining the Defaults
    var hoverClass = 'hover';
    var status = false;
    var crewBlocks = [];

    // Collection of crew members
    var crewMembers = [];

    var initMemo = false;

    // Fn: Adding a DOM crew block to the crewBlock array
    var crewBlockAddToArray = function(block) {
        if(!block) return false;
        crewBlocks.push(block);
        return block;
    };

    // Fn: Creating and adding the crew models to the members collection
    var crewCreateModel = function(block) {

        if(!block) return false;

        // Getting the crew member's name
        var name = block.getElementsByTagName('h4')[0];
        if(!name) return false;

        // Defining the model
        var model = { name: name.firstChild.nodeValue };

        // Adding the crew model to the members collection
        crewMembers.push(model);

        // Returning the model
        return model;

    };

    // Fn: Return the members collection
    var crewGetMembers = function() {
        // Retuning the crew members
        return crewMembers;
    };

    // Event: Hover toggle for the crew block
    var crewBlockEventToggle = function(event) {
        // event.preventDefault();
        this.classList.toggle(hoverClass);
        return this;
    };

    // Fn: Binding Events to the crew blocks
    var crewBlockBindEvents = function(block) {

        if(!block) return false;

        // Defining the jQuery block for event binding
        var $block = $(block);

        // Binding the click event
        $block.on('click', crewBlockEventToggle);

        return block;

    };


    // Fn: Setting up the crew blocks
    var crewBlockSetup = function() {

        // Defining and getting the crew blocks from the DOM
        var blocks = document.querySelectorAll('.block-crew');

        // Looping through all the crew blocks
        for (var i = 0, len = blocks.length; i < len; i++) {

            var block = blocks[i];

            // Adding the block to the crewBlock array
            crewBlockAddToArray(block);

            // Creating and adding the crew model to the members collection
            crewCreateModel(block);

            // Bind events to the crew blocks
            crewBlockBindEvents(block);

        }

        return crewBlocks;

    };

    // Fn: Private Init method
    var crewInit = function() {

        if(initMemo !== false) return false;

        initMemo = true;
        // Testing to see if the page is the crew page based on the TechnoBuffalo.config.info object
        var post = config.info.post;
        if(post.slug === 'crew' && post.type === 'page') {
            status = true;
            return crewBlockSetup();
        }

    };

    // Fn: Public init method
    var init = function() {
        return crewInit();
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        members: crewGetMembers
    };

})(jQuery);

},{"./config":24}],26:[function(require,module,exports){
// Module: Element Toggle
// Description: Module contains the singleton that enables the toggling of various DOM elements.

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');

    // Defining the Defaults
    var elements = [];

    // Defining the status of the module
    var status = false;

    // Memoizing the Init State
    var initMemo = false;

    // Fn: Defining and setting up the various elements that require toggling
    var setupElements = function() {
        if(status !== true) return false;

        // Defining the various toggle elements
        elements = [

            // Comments
            {
                name: 'comments',
                trigger: $('#response-show-comments-button'),
                element: $('#respond'),
                togClass: 'hidden-phone',
                callback: function() {
                    var self = this;

                    // Return false if the comment div container doesn't have the trigger class
                        // If it doesn't have the trigger class, that means that the comments are already showing
                    if(!self.element.hasClass(self.togClass)) return false;

                    // Removing the hidden-phone class from the comments container
                    self.element.removeClass(self.togClass);

                    // Hide the show comments container
                        // Hiding the container instead of removing it to prevent memory issues from possible event binded objects
                    var showCommentsContainer = document.getElementById('response-show-comments');
                    if(!showCommentsContainer) return false;

                    // Remove the visible-phone class due to it's use of !important
                    showCommentsContainer.classList.remove('visible-phone');
                    showCommentsContainer.style.display = 'none';

                    return this;
                }
            },

            // Press Release
            {
                name: 'pressRelease',
                trigger: $('.startpress'),
                element: $('.pressrelease'),
                togClass: 'active',
                callback: function() {
                    var self = this;
                    self.trigger.toggleClass(self.togClass);
                    self.element.toggle();
                    return this;
                }
            },

            // Products Mentioned
            {
                name: 'productsMentioned',
                trigger: $('#product-mentioned-expander'),
                element: $('#product-container'),
                togClass: 'expanded',
                callback: function() {
                    var self = this;
                    self.element.toggleClass(self.togClass);
                    self.trigger.find('.more').toggleClass('hidden');
                    self.trigger.find('.less').toggleClass('hidden');
                    return this;
                }
            },

            // Sort
            {
                name: 'sort',
                trigger: $('#sort-button'),
                element: $('#sort'),
                togClass: 'active',
                callback: function() {
                    var self = this;
                    self.trigger.toggleClass(self.togClass);
                    self.element.slideToggle('fast');
                    return this;
                }
            }

        ];
    };

    // Fn: Callback executor for triggers
    var elementSetupTrigger = function() {
        var item = this,
            id = item.getAttribute('data-element-trigger'),
            element = elements[id];

        // Vars used to target the element
        if(element.callback !== null && typeof element.callback === 'function') {
            // Executing the element's callback function
            element.callback();
        }
    };

    // Fn: Setting up the events for all the toggle objects
    var elementSetupEvents = function() {
        // If status is true and elements are defined
        var len = elements.length;
        if(status !== true && len < 0) return false;

        // Looping through the elements array
        for(var i = 0; i < len; i++) {
            var element = elements[i];
            // If the element's trigger is present in the DOM
            if(element.trigger.length) {
                // Setting the index as DOM data on the trigger
                element.trigger.attr('data-element-trigger', i);
                // Binding the trigger method to the element's trigger
                element.trigger.on(config.event.click, elementSetupTrigger);
            }
        }

    };

    // Fn: Private Init Method
    var elementToggleInit = function() {
        initVerify(function() {

            // Setting up the elements array
            setupElements();

            // Setting up the element's events
            elementSetupEvents();

        });
    };

    // Fn: Method to verify if the module was intiated
    var initVerify = function(callback) {
        if(initMemo === false) {
            initMemo = true;
            status = true;
            config.check.callback(callback);
        } else {
            return false;
        }
    };

    // Fn: Public Init Method
    var init = function() {
        return elementToggleInit();
    };

    init();

    // Exporting the export object
    return {
        init: init
    };

})(jQuery);
},{"./config":24}],27:[function(require,module,exports){
// Module: Fetch
// Description: Module that contains methods that fetch/return data.

// Defining the module exports
module.exports = (function ($, undefined) { "use strict";

    // Fn: NativeJS Ajax Method
    var ajaxSetup = function(options, callback) {
        if(!options) return false;

        // Defining and creating the new XMLHttpRequest
        var request = new XMLHttpRequest();

        // Defining the settings and request URL
        var settings = options;
        var requestUrl = settings.url;

        // Return false if settings are not defined or if settings is not an object
        if(!settings || typeof settings !== 'object') return false;

        // Make sure the Ajax URL & Ajax Type is defined
        if(!settings.url && !settings.type) return false;

        // Defining the request type
        var requestType = settings.type;
        requestType = requestType.toLowerCase();

        // Make Sure Ajax Type is either Get or Post
        if(requestType !== 'get' || requestType === 'post') return false;

        // Check data object
        if(settings.data !== undefined) {
            // Serialize data object, add it to the request URL (jusing jQuery Param)
            requestUrl = requestUrl+'?'+$.param(settings.data);
        }

        // BeforeSend
        if(settings.beforeSend !== undefined) {
            if(typeof settings.beforeSend === 'function') {
                settings.beforeSend();
            }
        }

        // Opening and sending the XMLHttpRequest
        request.open(requestType, requestUrl, true);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.send();

        // Initiating the callback / promise method on readystatechange
        request.onreadystatechange = function(data) {

            if (request.readyState != 4 || request.status != 200) return;
            // Success

            if(settings.success !== undefined) {
                if(typeof settings.success === 'function') {
                    var results = JSON.parse([request.responseText]);

                    return settings.success(results);

                }

                return true;

            }

        };
    };

    // Fn: Public method for nativeJS ajax method
    var ajax = function(options, callback) {
        return ajaxSetup(options, callback);
    };

    // Fn: Fetching from the Disqus URL
    var disqusUrl = function(callback) {
        var username = 'technobuffalobeta';
        var url = 'http://disqus.com/forums/'+username+'/count.js';
        return $.getScript(url, callback);
    };

    // Fn: Fetching the Disqus comment count
    var disqusCount = function(element) {

        // Defining the elements and getting the span DOM objects
        var ele = element || document;
        var nodes = ele.getElementsByTagName('span');

        // Return false if the DOM objects are not found
        if(!nodes[0]) return false;

        // Looping through the nodeList to prepare for comment count fetching
        for (var i = 0, url; i < nodes.length; i++) {

            if (nodes[i].className.indexOf('dsq-postid') != -1) {

                // Setting the Disqus ID
                nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('rel'));

                // Setting the URL
                url = nodes[i].parentNode.href.split('#', 1);
                if (url.length > 0) { url = url[0]; }
                else { url = url[1]; }

                // nodes[i].parentNode.href = url + '#disqus_thread';
            }

            // Continue if the node object doesn't meet the requirement above
            continue;
        }

        // Calling the disqusURL method to ping Disqus
        disqusUrl();

        // Returning true
        return true;

    };

    // Exporting the fetch modules to the main API
    return {
        ajax: ajax,
        disqus: {
            count: disqusCount,
            url: disqusUrl
        }
    };

})(jQuery);
},{}],28:[function(require,module,exports){
// Module: Galleries
// Description: Module that contains the gallery based methods and BackBone (MVC) elements that render the gallery in the DOM

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');
    var Collection = require('../collections/collection.Galleries');
    var def = require('../bridges/bridge.gallery');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    // Defining the RoyalSlider Options Object
    var galleryOptions = false;

    var collection;


    // Fn: Removing Preload Placeholder DOM elements
    var removePreloadPlaceholders = function() {
        // Return false if preload elements are not defined
        if(!def.preload[0]) return false;

        $(def.preload).remove();

        return true;

    };


    // Fn: Private init of this module
    var moduleInit = function() {

        if(initMemo !== false) return false;
        initMemo = true;

        // Removing the preload placeholder items
        removePreloadPlaceholders();

        // Defining and creating the new gallery colletion
        collection = new Collection();

    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collection;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        collection: getCollection,
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../bridges/bridge.gallery":2,"../collections/collection.Galleries":6,"./config":24}],29:[function(require,module,exports){
// Module: ID Sweeper
// Description: Module contains the method that detects and removes duplicate ad IDs in the DOM

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../config/items.content');

    // Defining the Defaults
    var def = {
        count: 0,
        eles: [],
        ids: [],
        sweeped: [],
        scanClass: 'ad'
    };

    // Defining the state of this moduole
    var status = false;

    // Fn: Scanning the content view for duplicate IDs
    var contentViewScan = function() {

        // Defining the content DOM element for scanning
        var content = _e.theContent[0];
        if(!status || !content) return false;

        // Fetching the DOM elements
        var units = content.querySelectorAll('.'+def.scanClass);
        var len = units.length;

        // Adding the specified DOM element's IDs to the ID array
        for(var i = 0; i < len; i++) {
            var unit = units[i];
            var id = unit.id;
            // Adding the unit IDs to the ID array
            def.ids.push(id);
        }

        // Returning the IDs array
        return def.ids;

    };

    // Fn: Scanning the sidebawr view for ad units
    var sidebarViewScan = function() {
        // Defining the sidebar DOM element for scanning
        var sidebar = _e.theSidebar[0];
        if(!status  || !sidebar) return false;

        // Fetcing the DOM elements
        var units = sidebar.querySelectorAll('.'+def.scanClass);
        var len = units.length;

        // Adding the specified DOM element's IDs to the ID array
        for(var i = 0; i < len; i++) {
            var unit = units[i];
            // Adding the units to the eles array
            def.eles.push(unit);
        }

        // Returning the Eles array
        return def.eles;

    };

    // Fn: Identifying and removing elements with duplicate IDs
    var sweepDuplicateIds = function() {
        if(!status) return false;

        // Defining and using the eles array
        var eles = def.eles;
        var len = eles.length;

        // Identify that the eles array contains elements to filter
        if(len <= 0) return false;

        // Looping through all the elements
        for(var i = 0; i < len; i++) {

            var ele = eles[i];
            var id = ele.id;

            // Check if the element is duplicated
            if(checkDuplicateIds(id)) {

                // Remove the element from the DOM
                ele.remove();

            }

        }

        // Resetting the ele's array
        def.eles.length = 0;

        // Returning the sweeped array
        return def.sweeped;

    };

    // Fn: Checking and removing elements with duplicate IDs
    var checkDuplicateIds = function(id) {
        if(!status || !id) return false;

        // Looping through the ID array
        for(var i = 0, len = def.ids.length; i < len; i++) {
            // If the ID provided matches any of the IDs in the ID array
            if(id === def.ids[i]) {
                // Push the ID to the sweeped array
                def.sweeped.push(id);
                // Increasing the "sweep" count
                def.count++;

                // return true;
            }
        }
    };

    // Fn: Private init of this module
    var moduleInit = function() {
        // Switch the status to true if the module is verified
        if(status !== true) {
            status = true;
        }

        // Initializing the scan methods
        contentViewScan();
        sidebarViewScan();

        // Initialize the sweep method
        sweepDuplicateIds();

    };

    // Fn: Public init of this module
    var init = function() {
        moduleInit();

        return initMessage();
    };

    // Fn: Public return message for init
    var initMessage = function() {
        var count = getCount();

        return 'Document Sweeped for elements with duplicated IDs. '+count+' items were removed';
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // Fn: Publicly returns the Sweeped IDs
    var getSweeped = function() {
        return def.sweeped;
    };

    // Fn: Publicly returns the # of sweeped items
    var getCount = function() {
        return def.count;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        status: getStatus,
        get: {
            count: getCount,
            sweeped: getSweeped
        }
    };

})(jQuery);
},{"../config/items.content":12}],30:[function(require,module,exports){
// Module: Lazy
// Description: Contains the models and methods used for async lazy based content

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var press = require('./lazy.press');
    var social = require('./lazy.social');

    // Exporting the export object
    return {
        press: press,
        social: social
    };

})(jQuery);
},{"./lazy.press":31,"./lazy.social":32}],31:[function(require,module,exports){
// Module: Lazy Press
// Description: Contains the singleton that renders the lazy loading of videos on the Press page

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('../config');

    var Collection = require('../../collections/collection.PressVideos');

    // Defining the Defaults
    var def = {
        c: {
            page: 'page-press-archive',
            wrapper: 'video-wrapper',
            videos: 'press-video'
        },
        post: {
            slug: 'in-the-news',
            type: 'page'
        }
    };

    // Defining the state of this moduole
    var status = false;

    var collection;

    // Fn: Verify to see if the page is the press page
    var verifyPressPage = function() {
        var info = config.info.post;

        if(info.slug === def.post.slug && info.type === def.post.type) {
            // Switching module status to true
            if(status === false) {
                status = true;
            }
            // Returing true if the page is the press page
            return true;
        } else {
            return false;
        }
    };

    // Fn: Private init of this module
    var moduleInit = function() {
        // Check to see if the page is the press page
        if(verifyPressPage()) {

            var pressVideos = document.querySelectorAll('.'+def.c.videos);

            // Passing on attributes to the Backbone press collection
            var PressVideos = Collection.extend({
                eles: pressVideos
            });

            // Initalizing the new collection + pushing the collection to the main API
            collection = new PressVideos();

        }
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collection;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        collection: getCollection,
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../../collections/collection.PressVideos":8,"../config":24}],32:[function(require,module,exports){
// Module: Lazy Social
// Description: Module contains singleton which initializes lazy loading of social count/icons

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('../config');
    var util = require('../../utils/utils');

    // Memoizing the init of this module
    var initMemo = false;

    // Fn: Click event for the social sharing icons in social-tab-mini
    var singleSocialTabEvent = function() {

        // Defining the social sharing tab
        // Using jQuery to Event Delegation
        var $socialSharing = $('.social-tab-mini');

        // When the "a" target of $socialSharing is clicked
        $socialSharing.on('click', 'a', function(e) {
            // Prevent default opening of new window
            e.preventDefault();
            // Trigger the socialClick event
            singleSocialClickEvent.call(this);
        });

    };


    // fn: Open a new window for a social sharing event
    var singleSocialClickEvent = function(event) {
        // Return false if the viewport is not desktop
        // if(!config.check.match.desktop()) return false;

        // Open a new window with the openWindow util method
        return util.openWindow(this.href);

    };

    // Fn: Lazy Loading Social Shares for single pages
    var lazyLoadSocialSingle = function() {

        // Return false if page is not single
        if(!config.state.isSingle) return false;

        // Defining the socialTab
        var socialTab = document.getElementById('social-tab-large');
        if(!socialTab) return false;

        // $getSocial for hte socialTab
        $(socialTab).getSocial();

        // Setting up the click event for the social sharing mini icons
        singleSocialTabEvent();

        return true;
    };


    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            lazyLoadSocialSingle();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        return config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return initMemo;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../../utils/utils":46,"../config":24}],33:[function(require,module,exports){
// Module: Magnify
// Description: Magnify widget that showcases the 3 latest videos for video.technobuffalo.com

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('./config');
    var Collection = require('../collections/collection.MagnifyVideos');

    var collection;

    // Getting the el from the DOM (for verification of init)
    var el = document.getElementsByClassName('.magnify-video-container');


    // Memoizing the init of this module
    var initMemo = false;

    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            collection = new Collection();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        // Return false if el is not in the DOM
        if(!el) return false;

        if(initMemo !== false) return false;
        initMemo = true;
        return config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return initMemo;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collection;
    };


    // Initialize the module
    init();

    // Exporting the export object
    return {
        collection: getCollection,
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../collections/collection.MagnifyVideos":7,"./config":24}],34:[function(require,module,exports){
// Module: Back to Top (Navigation)
// Description: Module contains the singleton for the "Back to Top" button

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../../config/items.content');
    var config = require('../config');

    var backToTop = {
        def: {
            c: {
                active: 'active',
                page: {
                    next: 'pagination-next'
                },
                scroll: {
                    back: 'back-scrolling',
                    top: 'scrolled-top'
                }
            },
            click: config.event.click,
            e: {
                body: _e.theBody[0],
                button: document.getElementById('back-to-top'),
                pageBreak: document.querySelectorAll('.scroll-page-break')
            },
            time: {
                out: null,
                vars: 500
            }
        },
        initStatus: false,
        verify: function(self, def) {
            if(self.initStatus) return false;
            self.initStatus = true;
            if(def.e.button !== null) {
                self.setup(self, def);
            }
        },
        action: {
            scroll: function(self, def) {
                var active = def.c.active;
                var button = def.e.button;

                if(config.check.match.mobile()) {
                    if(button.classList.contains(active)) {
                        button.classList.remove(active);
                    }
                    return def.e.button;
                }

                if(_e.theWindow.scrollTop()) {
                    button.classList.add(active);
                } else {
                    button.classList.remove(active);
                }
            }
        },
        setup: function(self, def) {

            var backTopOpt = _.debounce(function() { self.action.scroll(self, def); }, 320);
            _e.theWindow.on('scroll', backTopOpt);

            $(def.e.button).on(def.click, function() {
                def.time.out = def.time.vars;
                def.e.body.classList.add(def.c.scroll.back);
                def.e.body.classList.add(def.c.scroll.top);

                for(var i = 0; i < def.e.pageBreak.length; i++) {
                    var pageBreak = def.e.pageBreak[i];
                    pageBreak.classList.remove(def.c.page.next);
                }

                backToTopScroll();

                setTimeout(function() {
                    def.e.body.classList.remove(def.c.scroll.back);
                }, def.time.out);
            });
        },
        init: function() {
            var self = this;
            var def = self.def;

            // Return false if device is mobile
            if(config.check.mobile()) {
                return false;
            }

            self.verify(self, def);
        }
    };

    var init = function() {
        return backToTop.init();
    };

    var backToTopScroll = function() {
        return $('body, html').animate({scrollTop: 0}, 500);
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        scroll: backToTopScroll
    };

})(jQuery);

},{"../../config/items.content":12,"../config":24}],35:[function(require,module,exports){
// Module: Navigation (Main)
// Description: Contains the singleton that renders the primary/main navigation for the site. This module creates the dropdown / responsive properties of the nav.

module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../../config/items.content');
    var config = require('../config');

    // Defining the Defaults
    var def = {

        c: {
            active: 'active',
            links: 'nav-link',
            navOpen: 'body-responsive-nav-open',
            subMenu: 'sub-navigation'
        },

        id: {
            sectionMenu: 'main-nav-link-nav',
            searchMenu: 'main-nav-link-search'
        },

        navHeight: 50,

        $navSectionHeader: $('a[title="nav-section-header"]'),

        menuStatus: false,

        sectionMenuWidth: {
            mobile: 270,
            tablet: 300
        }

    };

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;


    // Fn: Check to see if the object "triggered" is the section menu
    var isSectionMenu = function() {

        // Return false if the ID for the object is not defined
        if(!this.id) return false;

        // Validate the ID
        if(this.id === def.id.sectionMenu) {
            return true;
        } else {
            return false;
        }
    };

    // Fn: Defining and setting up the main nav DOM elements
    var getNavEls = function() {

        // Return def.els if it has already been defined
        if(def.els) return def.els;

        // Defining the navigation DOM elements
        var topNav = _e.theNavigation[0];
        if(!topNav) topNav = false;

        var primaryNav = _e.thePrimary[0];
        if(!primaryNav) primaryNav = false;

        var navMenu = _e.theNavMenu[0];
        if(!navMenu) navMenu = false;

        // Adding the DOM elements to defaults.els
        return {
            topNav: topNav,
            primaryNav: primaryNav,
            navMenu: navMenu
        };

    };

    // Fn: Defining and setting up the nav links
    var getNavLinkEls = function() {

        // Return def.linkEls if it has already been defined
        if(def.linkEls) return def.linkEls;

        // Defining the primary nav
        var nav = getNavEls().primaryNav;

        // Return false if the nav.primaryNav is not defined/does not exist
        if(!nav) return false;

        // Defining / Getting the links from the nav
        var links = nav.querySelectorAll('.'+def.c.links);
        if(!links) return false;

        // Return the nodeList of links
        return links;

    };

    // Fn: Toggling the menu's state
    var menuToggleState = function() {

        if(!isSectionMenu.call(this)) return false;

        def.menuStatus = !def.menuStatus;

        // DEBUG: Console logging the menu state
        // console.log('Menu State: ' + def.menuStatus);

        return def.menuStatus;

    };

    // Fn: Setting the properties for the section menu
    var setSectionMenuProperties = function(height, width, position) {

        if(height && width && position) {

            this.style.height = Math.round(height) + 'px';
            this.style.width = width + 'px';
            this.style.position = position;

        } else {

            this.style.height = null;
            this.style.width = null;
            this.style.position = null;

        }

        return this;
    };

    // Fn: Setting up the events for the nav links
    var navLinkElsAddEvents = function() {

        // Defining the links
        var links = getNavLinkEls();

        // alert(config.event.hover);

        // Looping through all the link DOM elements
        for(var i = 0, len = links.length; i < len; i++) {

            // Defining the jQuery object for links to use with $.on() method for event bindings
            var $link = $(links[i]);

            // Adding the event listener to the link to init the dropdowns
            $link.on(config.event.hover, navEventDropdown);
            // $link.on(config.event.click, navEventDropdown);

            // Adding the event listener to the sub navs in the dropdown
            $link.find('.'+def.c.subMenu).on(config.event.mouseenter, navEventDropdownSubMenu);

            if(config.state.isDesktop) {
                $link.find('.'+def.c.subMenu).on(config.event.mouseleave, navEventDropdownCloseAll);
            }

        }

        // Adding event to body - click closes all menus (this applies moreso for touch based devices)
        if(!config.state.isDesktop) {

            // Binding the event to the body
            _e.theBody.on(config.event.click, navEventDropdownCloseAll);

            // Bindign the event to the modal
            // _e.theMainModal.on(config.event.click, navEventDropdownCloseAll);

        } else {
            // Binding the event to the body
            _e.theBody.on(config.event.hover, navEventDropdownCloseAll);
        }

        // Adding event to the nav section headers - preventing the clicks from browser loading /#
        def.$navSectionHeader.removeAttr('href');

        // Adding resize event to the window
        if(config.check.match.desktop()) {

            // Adding resize to device if the viewport is desktop
            // This fixes the issue on Android
            _e.theWindow.on('resize', navEventDropdownCloseAll);

        }

        // Adding orientation change event to close all menus
        window.addEventListener("orientationchange", navEventDropdownCloseAll, false);

        // Returning the links nodeList
        return links;

    };

    // Fn: Adjusting the page position
    var adjustPagePosition = function() {

        // Return if the object is not the search trigger or if the viewport is desktop
        if(this.id !== def.id.searchMenu ||
            config.check.match.desktop()) return this;

        // Reset the scroll position
        navEventResetWindowScroll();

        // Return this (the search trigger)
        return this;

    };


    // Fn: Adjusting the section menu (toggling)
    var sectionMenuToggle = function() {

        //  Return false if the object triggered is not the section menu
        if(!isSectionMenu.call(this)) return navEventDeactivateSectionMenu();

        // Activate/deactivate the section menu dependin on the menu's state
        if(def.menuStatus) {

            // Activating the section menu
            navEventActivateSectionMenu();

        } else {

            // Deactivating the section menu
            navEventDeactivateSectionMenu();

        }

        // Returning this (the section menu)
        return this;

    };

    // Fn: Navigation drop down event
    var navEventDropdown = function(event) {

        // Stop propagation to prevent the menu from closing
        event.stopPropagation();

        // Toggling the class of menu nav link
        this.classList.toggle(def.c.active);

        // Toggling the Menu State
        menuToggleState.call(this);

        // Defining the siblingNodes
        var siblingNodes = this.parentNode.childNodes;

        // Removing the active class from all other siblings
        for (var i in siblingNodes) {

            // Skip "this" element
            // Skip nodes that aren't <li> tags
            // Skip nodes that don't have the appropriate .class

            if( siblingNodes[i] === this ||
                siblingNodes[i].nodeName !== 'LI' ||
                !siblingNodes[i].classList.contains(def.c.links)) continue;

            // Remove the .active class from the node
            siblingNodes[i].classList.remove(def.c.active);

        }

        // Toggle the section menu (if applicable)
        sectionMenuToggle.call(this);

        // Adjust the page position
        adjustPagePosition.call(this);

        // Returning the nav menu item
        return this;

    };

    // Fn: Sub navigation drop down event
    var navEventDropdownSubMenu = function(event) {

        // Stop propagation to prevent the menu from closing
        event.stopPropagation();

        // Return the sub menu
        return this;
    };

    // Fn: Closing all the dropdowns
    var navEventDropdownCloseAll = function(event) {

        // event.preventDefault();
        event.stopPropagation();

        // preventDefault if the "this" is the main modal
        // if(this && this.id === _e.theMainModal[0].id) {
        //     event.preventDefault();
        // }

        // preventDefault if the body was clicked when the sectionMenu was active
        if(this && this === _e.theBody[0] && def.menuStatus) {
            event.preventDefault();
        }


        // Defining the links
        var links = getNavLinkEls();

        // Looping through all the link DOM elements
        for(var i = 0, len = links.length; i < len; i++) {
            // Removing the active class from the nav links
            links[i].classList.remove(def.c.active);
        }

        // Resetting the section menu
        navEventDeactivateSectionMenu();

        // Returning true
        return true;

    };

    // Fn: Activating the section menu (dropdown)
    var navEventActivateSectionMenu = function() {

        // Setting the menu state to true
        def.menuStatus = true;

        // Defining the section menu
        var sectionMenu = getNavEls().navMenu;
        var $sectionMenu = $(sectionMenu);
        var $sectionMenuList = $sectionMenu.find('ul');
        var $sectionMenuListHeight = $sectionMenuList.height();

        // Return false if the viewport size is desktop
        if(config.check.match.desktop()) {

            return (function() {
                sectionMenu.style.height = null;
                sectionMenu.style.width = null;
            })();

        }

        // Defining the default adjusted width
        var adjustedWidth = def.sectionMenuWidth.mobile;

        // Adjust the width if the viewport is tablet
        if(config.check.match.tablet()) {
            adjustedWidth = def.sectionMenuWidth.tablet;
        }

        // Adjust the height to 100% of the browser
        // Adjust the width to appropriate size
        setSectionMenuProperties.call(sectionMenu, $sectionMenuListHeight, adjustedWidth, 'absolute');


        // Adjust the height of the main wrapper to match the section menu
        _e.theMainWrapper[0].style.height = Math.round($sectionMenuListHeight + def.navHeight) + 'px';

        // Adding the nav-open class to the body
        document.body.classList.add(def.c.navOpen);

        // Adding the .active class from the menu modal
        // _e.theMainModal.addClass(def.c.active);

        // Reseting the window scroll
        navEventResetWindowScroll();

        // Returning the seciton menu
        return sectionMenu;

    };

    // Fn: Deactivating the section menu (dropdown)
    var navEventDeactivateSectionMenu = function() {

        // Resetting the menu status to false
        def.menuStatus = false;

        // Removing the .active class from the menu modal
        // _e.theMainModal.removeClass(def.c.active);

        // Resetting the attributes for the section menu
        var sectionMenu = getNavEls().navMenu;
        setSectionMenuProperties.call(sectionMenu);

        // Removing the height property of the main wrapper
        _e.theMainWrapper[0].style.height = null;

        // Removing the nav-open class to the body
        document.body.classList.remove(def.c.navOpen);

        // Retuning the section menu
        return this;

    };

    // Fn: Reseting the window scroll of the DOM (back to top)
    var navEventResetWindowScroll = function() {

        return $('body, html').scrollTop(0);

        // return true;

    };

    // Fn: Private init of this module
    var moduleInit = function() {
        verifyInit(function() {

            // Defining the nav elements
            def.els = getNavEls();
            def.linkEls = getNavLinkEls();

            // Adding the events to the nav links
            navLinkElsAddEvents();

            // Returning true
            return true;

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../../config/items.content":12,"../config":24}],36:[function(require,module,exports){
// Module: More Stories (Navigation)
// Description: Contains the singleton for the "More Stories" button

// Defining the module exports
module.exports = (function ($, undefined) { "use strict";

    // Requiring Modules
    var _e = require('../../config/items.content');
    var config = require('../config');

    var moreStories = {
        def: {
            e: {
                body: _e.theBody,
                button: _e.moreStories,
                target: _e.relatedPostsList
            },
            time: 500
        },
        initStatus: false,
        verify: function(self, def) {
            if(self.initStatus) return false;
            self.initStatus = true;
            if(def.e.button.length) {
                self.setup(self, def);
            }
        },
        setup: function(self, def) {
            def.e.button.on('click', function() {
                if(def.e.target.length) {
                    var top = def.e.target.offset().top - 80;
                    def.e.body.animate({ scrollTop: top }, def.time);
                }
            });
        },
        init: function() {
            var self = this;
            var def = self.def;
            self.verify(self, def);
        }
    };

    var init = function() {
        return moreStories.init();
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        init: init
    };

})(jQuery);
},{"../../config/items.content":12,"../config":24}],37:[function(require,module,exports){
// Module: Pinterest
// Description: Contains the singleton that renders the Pinterest pin/share icons for images in the DOM (for single pages)

module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../config/items.content');
    var config = require('./config');

    // Defining the default settings
    var def = {
        c: {
            active: 'active'
        },
        content: '',
        contentWidth: 0,
        pinnable: [],
        pinners: [],
        pinnableImages: [],
        shareClass: 'image-sharing',
        threshold: 0.7,
        window: {
            width: 900,
            height: 550
        }
    };
    // Defining the status: For fn to check whether or not to execute
    var status = false;

    // Fn: Locating and adding applicable images to the pinnable array
    var pinnableSetup = function() {
        if(!status) return false;

        var images = def.content.getElementsByTagName('img');
        var imageCount = images.length;
        if(imageCount > 0) {
            for(var i = 0; i < imageCount; i++) {
                var image = images[i];
                if(image.classList.contains('no-pin')) continue;
                pinnableAdd(image);
            }
        } else {
            status = false;
            return false;
        }

    };

    // Fn: Verify to see if the image is pinnable
    var pinnableCheck = function(image) {
        if(!image) return false;

        var imageWidth = image.clientWidth;

        if(!image.classList.contains('rsImg') && !image.classList.contains('section-breakout-background') && imageWidth >= (def.contentWidth * def.threshold)) {
            return true;
        } else {
            return false;
        }

    };

    // Fn: Adding the image to the pinnable array
    var pinnableAdd = function(image) {
        var width = image.clientWidth;

        // Check to see if the image is "pinnable"
        if(pinnableCheck(image)) {
            // Add the image object the pinnable array
            def.pinnable.push(image);
        }

     };



    // Fn: Setting up the pins
    var pinnerSetup = function() {
        if(!status) return false;
        for(var i = 0, len = def.pinnable.length; i < len; i++) {
            var image = def.pinnable[i];
            pinnerCreateButton(image);
        }
    };

    // Fn: Creating the "pin" button
    var pinnerCreateButton = function(image) {
        if(!image) return false;

        var box = document.createElement('div');
        var media = image.getAttribute('src');

        box.classList.add(def.shareClass);
        box.innerHTML = '<div class="img-share pinterest" title="Pin This Image" data-media="'+media+'"><i class="icon-pinterest2"></i></div>';

        // Inserting the box before the image in the DOM
        image.parentNode.insertBefore(box, image);
        // Injecting the image into the box from the DOM
        box.appendChild(image);

        // Adding the srcs of images to pinnableImages for public
        def.pinnableImages.push(media);

        // Adding the box to the pinner array
        def.pinners.push(box);

        return box;

    };

    // Fn: Binding click and mouse events to applicable pinners
    var pinnerBindEvents = function() {
        if(!status) return false;

        for(var i = 0, len = def.pinners.length; i < len; i++) {
            var pin = def.pinners[i];
            var pinterest = pin.querySelectorAll('.pinterest')[0];

            if(pinterest !== undefined) {
                pinterest.addEventListener(config.event.click, pinnerEventClick, false);
            }

            pin.addEventListener(config.event.mouseenter, pinnerEventEnter, false);
            pin.addEventListener(config.event.mouseleave, pinnerEventLeave, false);

        }

    };

    // Fn: Pinner click event
    var pinnerEventClick = function() {
        var thePin = this.parentNode;
        var image = thePin.childNodes[0];
        if(image !== undefined) {
            // Trigger the popup
            pinnerPopup(event, image);
        } else {
            return false;
        }
    };

    // Fn: Pinner mouseenter to reveal the pin button
    var pinnerEventEnter = function() {
        this.classList.add(def.c.active);
    };

    // Fn: Pinner mouseleave to hide the pin button
    var pinnerEventLeave = function() {
        this.classList.remove(def.c.active);
    };

    // Fn: Popup window for pinterest sharing
    var pinnerPopup = function(evnet, image) {
        event.preventDefault();
        var media = image.getAttribute('data-media'),
        w = def.window.width,
        h = def.window.height,
        left = (screen.width/2)-(w/2),
        top = (screen.height/2)-(h/2),
        shareUrl = 'http://www.pinterest.com/pin/create/button/?url='+document.URL+'&media='+media,
        win = window.open(shareUrl, '_blank', 'width='+w+', height='+h+', top='+top+', left='+left);
        win.focus();
        image.parentNode.classList.remove(def.c.active);
    };

    // Fn: Contains the stack of functions for intialization
    var pinterestSetup = function() {
        pinnableSetup();
        pinnerSetup();
        pinnerBindEvents();
    };

    // Fn: Initializating the function (Private)
    var pinterestInit = function() {
        // Only initialize on single article pages
        if(!config.state.isSingle) return false;

        // Temp fix for recommended-reading thumbnails
        // Return false if recommended reading is used on the page
        var recommendedReading = document.querySelectorAll('.recommended-reading');
        if(recommendedReading[0]) return false;

        var content = _e.theContent[0];
        if(!content) return false;

        // Adding the $content object to def
        def.content = content;
        // Adding the content width to def
        def.contentWidth = content.clientWidth;

        status = true;

        // Initialize the setup
        pinterestSetup();

        return true;

    };

    // Fn: Returning the pinnable images array to the public
    var pinnableImagesCheck = function() {
        return def.pinnableImages;
    };

    // Fn: Public initialization function
    var init = function() {
        // Privatizing the function
        return pinterestInit();
    };

    // Initialize the module
    init();

    // Exporting the content exports object
    return {
        init: init,
        images: pinnableImagesCheck
    };

})(jQuery);

},{"../config/items.content":12,"./config":24}],38:[function(require,module,exports){
// Module: Scrolling Content
// Description: Contains the singleton that's responsible for Infinite Scrolling

module.exports = (function ($, undefined) { "use strict";

    // Requiring Modules
    var _a = require('../../config/items.ads');
    var _e = require('../../config/items.content');
    var config = require('../config');

    var articles = require('../articles');

    var ArticleCollection = require('../../collections/collection.Articles');

    var adx = require('../adx');
    var query = require('./scrolling.query');
    var fetch = require('../fetch');
    var util = require('../../utils/utils');

    var backToTop = require('../navigation/navigation.backToTop');


    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    // Defining the Els

    // El: Scroll Switch
    var scrollSwitch = document.getElementById('infinite-scroll-option');

    // El: Scroll Enable / Disable
    var enableScrollTrigger = document.getElementById('enable-infinite-scroll');
    var disableScrollTrigger = document.getElementById('disable-infinite-scroll');

    // El: Ad - ATF Leaderbard
    var adLeaderContainer = _a.leaderContainer[0];

    // El: Content Row
    var theContentRow = document.getElementById('content-row');


    // Array caches for scrolled content
    var pageBreakArray = [];
    var contentCacheArray = [];

    // Defining the pagination
    var pagination;
    var pagingSpy;



    // Default options for the Content infinite scroll
    var postsPerPage = 10;
    var scrollCounter = 0;
    var scrollLoadCount = 0;
    var scrollThreshold = 14;
    var sidebarCache = false;
    var loadingInit = _e.loadingMore[0];


    // Registering private computing options
    var theLoadingInit = true;
    var scrollEnabled = true;
    var theLoadingButton = false;
    var scrollPlaceholder = false;


    // Fn: Checking if the scrolling counter has reached the scrolling threshold
    var scrollCounterCheck = function() {
        if(scrollCounter !== scrollThreshold) return false;

        scrollCounter = 0;
        return true;

    };

    // Fn: Updating the scroll counter
    var scrollCounterUpdate = function() {
        if(scrollLoadCount !== undefined && scrollCounter !== undefined) {
            scrollLoadCount++;
            scrollCounter++;
            return true;
        } else {
            return false;
        }
    };

    // Fn: Create the loading button
    var theLoadingButtonInit = function() {
        if(!_e.loadingMore[0]) return false;
        // Assigning the loadingMore DOM element to the loadingButton
        theLoadingButton = _e.loadingMore[0];
        // Returning the loadinfg Button
        return theLoadingButton;

    };

    // Fn: Creating the paginated loading button
    var theLoadingButtonCreateNext = function() {
        if(!theLoadingButton) return false;

        if(!config.state.isSingle) {
            var newButton = document.createElement('a');
            newButton.classList.add('tb-button');
            newButton.classList.add('x-large');
            newButton.classList.add('center');
            newButton.classList.add('scroll-load-trigger');
            newButton.style.display = 'block';
            newButton.style.marginBottom = '40px';
            newButton.setAttribute('href', config.host.page.next);
            newButton.innerHTML = 'Load More Articles';

            theLoadingButton.parentNode.insertBefore(newButton, theLoadingButton);

            theLoadingInit = false;
        }

        return theLoadingButtonRemove();
    };


    // fn: Setting the loadingButton status to busy
    var theLoadingButtonStartBusy = function() {
        if(!theLoadingButton) return false;
        // Deactivating the loadingInit status
        theLoadingInit = false;
        // Updating the innerHTMl to add the spinner
        theLoadingButton.innerHTML = '<div class="load-spinner"></div>';
        // Returining the loading button
        return theLoadingButton;

    };

    // Fn: Reset the loading button from "busy" start, make it "ready"
    var theLoadingButtonReady = function() {
        if(!theLoadingButton) return false;

        // Update the innerHTML of the loading Button
        theLoadingButton.innerHTML = 'Load More Articles';
        // Activate the loadingInit status
        theLoadingInit = true;
        // Return the status
        return true;

    };

    // Fn: Removing the loading button
    var theLoadingButtonRemove = function() {
        if(!theLoadingButton) return false;

        theLoadingInit = false;

        // Remove the loading button
        return util.removeThis(theLoadingButton);

    };

    // Fn: Add a Small Trigger Delay for Infinite Scroll
    var theLoadingDelay = function() {
        // Apply the delay to single pages
        if(!_e.isSingle) return false;

        if(theLoadingButton) {
            theLoadingInit = false;
            var loadingTimer = setTimeout(function(){
                theLoadingInit = true;
            }, 1050);
            clearTimeout(loadingTimer);
        }

        return true;

    };



    // Fn: Creating and adding the placeholder div where new content will append to
    var addScrollPlaceholder = function() {
        if(!theLoadingButton) return false;
        scrollPlaceholder = document.createElement('div');
        scrollPlaceholder.id = 'scroll-new-content';
        theLoadingButton.parentNode.insertBefore(scrollPlaceholder, theLoadingButton);
        return true;
    };


    // Fn: Add the initial "Content Row" to the Content array cache
    var addInitialContentRow = function() {
        if(!theContentRow) return false;

        if(contentCacheArray instanceof Array) {
            return contentCacheArray.push(theContentRow);
        } else {
            return false;
        }

    };

    // Fn: Cloning the sidebar to couple with the scrolled content
    var sidebarClone = function(row, callback){
        if(!this) return false;

        var newSidebar = this.cloneNode(true);
        newSidebar.removeAttribute('id');
        row.appendChild(newSidebar);

        if(callback !== undefined && typeof callback === 'function') {
            callback(newSidebar);
        }

        return this;

    };

    // fn: Adding new set of content to the articles collection
    var addNewPostsToCollection = function(els) {
        // Return false if articles collection is not defined
        if(!els) return false;

        // Setting the els property of the collections
        var Collection = ArticleCollection.extend({
            els: els
        });

        // Initializing and adding the new article collection to Data
        articles.addCollection(new Collection());

        // Return the collections
        return articles.collections();

    };

    // fn: Optimizing the scrolling experience by removing DOM elements
    var scrollOptimization = function() {

        // Enable only on desktops
        // if(!config.check.desktop()) return false;

        if(!contentCacheArray) return false;

        // Remove scrolling after 2/3 scrolls on single pages
        if(config.state.isSingle && scrollCounter >= 2) {
            return theLoadingButtonRemove();
        }

        // Disable scroll after every 2 scrolls
        if((scrollCounter) % 3 === 2) {
            scrollEnabled = false;
        }

        // Validation: Return false if not every 3 scrolls
        if((scrollCounter) % 3 !== 0) return false;

        // If the user enabled scroll by default, turn scrollEnabled back on
        if(localStorage.__TB_InfiniteScroll === 'true') {
            scrollEnabled = true;
        } else {
            scrollEnabled = false;
        }

        // Add scroll pagination to wrapper (effect)
        _e.theMainWrapper.addClass('scrolling-pagination');

        // Pause scrollSpy
        pagingSpy.stop();

        // "Back to Top" button to scroll up
        backToTop.scroll();

        // Remove the leaderboard ad
        _a.leaderContainer.remove();

        // Store article share data before reset
        articles.get.shares();

        // Remove all the content from the content array
        setTimeout(function(){

            // Defining the content array and content count
            var contents = contentCacheArray;
            var len = contents.length;
            var i = contents.length;

            // While looping through the content array
            while(i--) {

                // Skip the last content in the array
                if(i + 1 === len) continue;

                // Reseting / removing the content's Backbone Collection
                articles.collections()[i].reset();
                articles.collections().splice(i, 1);

                // Remove the content element from the array
                contents[i].parentNode.removeChild(contents[i]);
                contentCacheArray.splice(i, 1);

            }


            // Remove the scroll pagination effect
            _e.theMainWrapper.removeClass('scrolling-pagination');

            // Remove the Trending Bar
            _e.theTrendingBar.remove();

            // Reset the scrollPosition
            // util.scrollPositionReset();

            // Restart the scrollySpy
            pagingSpy.start();

        }, 500);

    };



    // Fn: Defining the Ajax Hook Verification
    var ajaxPostLoad = function() {

        return ajaxPostLoadInit();

    };

    // fn: Create the scroll spy and pagination modules
    var createPagingSpy = function() {

        // Return false if pagination or pagingSpy have already been defined
        if(pagination || pagingSpy) return false;

        // Creating a pagination module for the content
        pagination = new util.Pagination();

        // Creating a scrollSpy to watch for paging
        pagingSpy = new util.ScrollSpy({

            offset: 200,

            targets: contentCacheArray,

            delay: true,

            // "Action" callback when ScrollSpy see's target
            action: function(target) {

                // Return false if target is not defined
                if(!target) return false;

                // Getting the pagination attributes from the target
                var title = target.getAttribute('data-pagination-title');
                var path = target.getAttribute('data-pagination-path');

                // Update the browser history
                util.pushHistory(title, path);

                // Redefine the path for reporting
                path = '/scroll' + path;

                // Adding to the pagination count of the Pagination object
                pagination.addCount();
                pagination.updateCurrentPath(path);

                // Report the path to Google Analytics
                pagination.report(path);

            }

        });

        // Add pagination attributes to intial content row
        if(theContentRow) {
            theContentRow.setAttribute('data-pagination-title', pagination.getTitle());
            theContentRow.setAttribute('data-pagination-path', pagination.getPath());
        }

        // Start the paging spy
        pagingSpy.start();

    };


    // fn: Ajax method for loading the next set of content
    var ajaxPostLoadInit = function(callback){
        $.ajax({
            type: "GET",
            url : config.host.ajax,
            data : query.get(),
            beforeSend: function(data) {

                // Initiate the "Busy" start for the loading button
                theLoadingButtonStartBusy();

                // Remove ad data attributes from ads
                adx.removeAdClass();
                adx.removeAdData();

            },
            success: function(response) {

                // Remove the loading button and return false if the return results isn't available
                if (response.have_posts !== true) {
                    theLoadingButtonRemove();
                    return false;
                }

                scrollCounterUpdate();

                // Defining the responseData from the response
                var responseData = response.html.replace(/(\r\n|\n|\r)/gm, '');
                // Defining the offset
                var offset = query.get().offset;

                // Defining the new content ID
                var newContentId = 'content-id-'+offset;

                // Creating the next row that contains the new content
                var nextRowInsert = document.createElement('div');
                nextRowInsert.classList.add('row', newContentId);

                // Adding the pagination data to the next content row
                nextRowInsert.setAttribute('data-pagination-path', pagination.getPath('next'));
                nextRowInsert.setAttribute('data-pagination-title', pagination.getTitle('next'));

                // Defining the next row's content insert (HTML to inject via innerHTML)
                var nextRowInsertContent = '';

                // Insert Leaderboard Container
                var nextPageBreak = document.createElement('div');
                nextPageBreak.classList.add('ad-leader-insert');
                nextPageBreak.classList.add('span12');
                nextPageBreak.classList.add('pagination-previous');
                nextPageBreak.classList.add('fluid-column');
                nextPageBreak.classList.add('scroll-page-break');

                nextPageBreak.id = 'scroll-pagination-'+offset;
                nextPageBreak.innerHTML = '<hr><div class="ad leader-container"><div id="ad-728x90-a" class="ad ad-container gpt" data-ad-id="ad-728x90-a"></div></div><div class="ad full-width"><div class="ad gpt" id="ad-320x50-mob-a" width="320" height="50" data-ad-id="ad-320x50-mob-a"></div></div><hr>';

                // Push the page break into the Page break array cache
                pageBreakArray.push(nextPageBreak);

                // Create the next row container div
                var nextRowContent = document.createElement('div');
                nextRowContent.classList.add('span8');
                nextRowContent.classList.add('content');
                nextRowContent.classList.add('fluid-column');

                // var entries = response.entries;
                // var output = '';
                // var partial = document.getElementById('templatePostBlog').innerHTML;
                // for(var i = 0; i < entries.length; i++) {
                //     output += _.template(partial, entries[i]);
                // }

                // Insert the response data into the next row container div
                var nextPostList = document.createElement('div');
                nextPostList.classList.add('post-list');
                nextPostList.classList.add('block-list');
                nextPostList.innerHTML = responseData;

                // Adding the post list into the next row
                nextRowContent.appendChild(nextPostList);

                // Removing the magnify container from the next row content
                $(nextRowContent).find('.magnify-video-container').remove();

                // Adding the new articles to the collection
                addNewPostsToCollection(nextPostList);

                // Inserting the page break and content into the next row container
                nextRowInsert.appendChild(nextPageBreak);
                nextRowInsert.appendChild(nextRowContent);

                // Clone and insert the next sidebar
                sidebarClone.call(_e.theSidebar[0], nextRowInsert, function(sidebar) {

                    var sidebarUnits = sidebar.querySelectorAll('.ad-init');
                    for(var sui = 0; sui < sidebarUnits.length; sui++) {
                        var sidebarUnit = sidebarUnits[sui];
                        var sidebarUnitId = sidebarUnit.getAttribute('data-ad-id');

                        var sidebarAd = document.createElement('div');
                        sidebarAd.classList.add('ad');
                        sidebarAd.classList.add('gpt');
                        sidebarAd.classList.add('ad-container');
                        sidebarAd.setAttribute('data-ad-id', sidebarUnitId);

                        sidebarUnit.innerHTML = '';
                        sidebarUnit.appendChild(sidebarAd);

                    }

                });


                // Pushing the next row container into the Content cache array
                contentCacheArray.push(nextRowInsert);

                // Insert the next content and sidebar into the scroll content placeholder
                if(scrollPlaceholder !== false) {
                    scrollPlaceholder.appendChild(nextRowInsert);
                }

                // Encapsulate disqus fetch in requestAnimationFrame for performance
                requestAnimationFrame(function() {
                    // Fetch Disqus CommentCounts
                    fetch.disqus.count(nextRowInsert);
                });


                // Updating the posts_returned key to use as offset
                query.set('posts_returned', response.returned);
                query.set('offset', query.get().offset + query.get().posts_returned);

                // Ready the Loading button
                theLoadingButtonReady();

                // Refresh the ScrollSpy to account for the new content row
                pagingSpy.refresh();

                // Temp: Optimize scroll after 3 scroll
                scrollOptimization();

                // Return true
                return true;

            }
        }).done(function(data) {

            // Initiate the ad call
            adx.insert({
                scan: true,
                url: pagination.getPath('next')
            });

        });
    };

    // Fn: Initiate infinite scroll if the Trigger is visible
    var triggerVisible = function() {
        // Return false if the loadingButton is undefined or the loadingInit is false
        if(!theLoadingButton || !theLoadingInit) return false;

        // Defining the defaults for trigger
        var objDiff = 750;
        var objOffset;
        var w = _e.theWindow[0];

        // Adjust the offset difference based on page / device
        if(config.state.isSingle) { objDiff = 150; }
        if(config.state.isTablet) { objDiff = objDiff * 2; }

        // Set the object offset
        objOffset = theLoadingButton.offsetTop - w.innerHeight - objDiff;


        // document.documentElement.scrollTop
        // if the trigger is visible and IS is enabled
        if ($(window).scrollTop() >= objOffset && scrollEnabled) {
            // perform the IS action
            ajaxPostLoad();
            // return true
            return true;
        } else {
            // return false
            return false;
        }

    };

    // Fn: Scroll Settings Toggle Event
    var scrollSettingsToggleEvent = function() {

        var select;
        var options = scrollSwitch.getElementsByTagName('li');

        if(options[0] !== undefined) {
            for(var i = 0; i < options.length; i++) {
                var option = options[i];
                option.classList.remove('selected');
                option.classList.remove('enable');
            }
        }

        if(localStorage.__TB_InfiniteScroll === 'true') {
            select = enableScrollTrigger;
        } else {
            select = disableScrollTrigger;
        }

        select.classList.add('selected');

    };

    // Fn: Enable infinite scrolling
    var scrollEnable = function(){

        // Update IS localStorage setting to true
        if(typeof(Storage) !== 'undefined') {
            localStorage.__TB_InfiniteScroll = true;
        }

        scrollEnabled = true;

        scrollSettingsToggleEvent();

        triggerVisible();

        return true;
    };

    // Fn: Disable infinite scrolling
    var scrollDisable = function(){

        // Update IS localStorage setting to true
        if(typeof(Storage) !== 'undefined') {
            localStorage.__TB_InfiniteScroll = false;
        }

        scrollEnabled = false;

        scrollSettingsToggleEvent();

        return true;
    };

    // Fn: Check scroll enabled
    var scrollEnableCheck = function() {
        return scrollEnabled;
    };

    // Fn: Binding infinite scroll to the loading button
    var triggerBindScrollInit = function() {
        // Return false if the loadingButton is undefined
        if(!theLoadingButton) return false;
        // Initializing Infinite Scroll Upon Clicking on Triggers
        theLoadingButton.addEventListener(config.event.click, function() {
            // if loadingInit is valid, execute ajaxPostLoad
            if(theLoadingInit) return ajaxPostLoad();
        }, false);
        // Return the loading button
        return theLoadingButton;
    };

    // Fn: Binding "Enable" infinite scroll to menu trigger
    var triggerBindScrollEnable = function() {
        // Return false if enableScroll is undefined
        if(!enableScrollTrigger) return false;
        // Bind scrollEnable to the enableScrollTrigger in the scroll menu
        enableScrollTrigger.addEventListener(config.event.click, scrollEnable, false);
        // Return the enableScrollTrigger
        return enableScrollTrigger;
    };

    // Fn: Binding "Disable" infinite scroll to menu trigger
    var triggerBindScrollDisable = function() {
        // Return false if disableScroll is undefined
        if(!disableScrollTrigger) return false;
        // Bind scrollDisable to the disableScrollTrigger in the scroll menu
        disableScrollTrigger.addEventListener(config.event.click, scrollDisable, false);
        // Return the disableScrollTrigger
        return disableScrollTrigger;
    };

    // Fn: Binding infinite scroll trigger to "More Stories" button
    var triggerBindMoreStories = function() {
        // Return false if "More Stories" is undefined
        if(!_e.moreStories[0]) return false;
        // Initialize IS upon clicking moreStories
        _e.moreStories[0].addEventListener(config.event.click, function() {
            // if loadingInit is valid, execute ajaxPostLoad
            if(theLoadingInit) return ajaxPostLoad();
        }, false);
        // Return the more stories button
        return _e.moreStories[0];
    };

    // Fn: Collectively initiate all the triggers
    var triggerBindInit = function() {
        triggerBindScrollInit();
        triggerBindMoreStories();
        triggerBindScrollEnable();
        triggerBindScrollDisable();
        return true;
    };


    // Fn: Check localStorage for scroll settings
    var scrollSettingsCheck = function() {

        // Return false if localStorage is not defined
        if(typeof(Storage) === 'undefined') {
            // Set scrollEnabled to true
            scrollEnabled = true;
            // return false
            return false;
        }

        // Set infinite scroll for Mobile
        if(config.check.mobile()) {
            // Set localStorage infiniteScroll setting to true (by default)
            localStorage.__TB_InfiniteScroll = true;
        } else {

            // if localStorage IF setting is not set
            if(localStorage.__TB_InfiniteScroll === undefined) {

                // Setting infinite scroll to "on" by default (Desktop)
                if(config.check.desktop()) {
                    // Set localStorage IF to true
                    localStorage.__TB_InfiniteScroll = true;
                } else {
                    // Set localStorage IF to true
                    localStorage.__TB_InfiniteScroll = true;
                }
            }
        }

        // If enable/disable Infinite scroll based on localStorage setting
        if(localStorage.__TB_InfiniteScroll === 'true') {
            scrollEnable();
        } else {
            scrollDisable();
        }

        // Return the scrollEnabled setting
        return scrollEnabled;

    };



    // Fn: Debounce checking of the scroll trigger
    var infiniteScrollTriggerInit = _.debounce(triggerVisible, 4);
    var infiniteScrollTriggerOpt = function() {
        // Calculate and Execute the Pagination Title + URL Update

        requestAnimationFrame(function() {
            infiniteScrollTriggerInit();
        });

    };


    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            // Init: Create the loading button
            theLoadingButtonInit();

            // Delay the scroll (if applicable)
            theLoadingDelay();

            // Adding the scroll placeholder
            addScrollPlaceholder();

            // Adding the initial content row to the content row array
            addInitialContentRow();

            // Creating the ScrollSpy for the content
            createPagingSpy();

            // Bind scroll-based triggers for events
            triggerBindInit();

            // Init the scrollSettingCheck
            scrollSettingsCheck();

            // Triggering the Infinite Scroll
            _e.theWindow.on('scroll', infiniteScrollTriggerOpt);

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        return config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // fn: Public get method to return the pagination
    var getPagination = function() {
        return pagination;
    };

    // fn: Public get method to return the scrollspy
    var getScrollSpy = function() {
        return pagingSpy;
    };

    // Initialize the module
    init();

    // Exporting the content exports object
    return {
        enable: scrollEnable,
        disable: scrollDisable,
        init: init,
        trigger: triggerVisible,
        enabled: scrollEnableCheck,
        pagination: getPagination,
        scrollSpy: getScrollSpy
    };


})(jQuery);

},{"../../collections/collection.Articles":4,"../../config/items.ads":11,"../../config/items.content":12,"../../utils/utils":46,"../adx":18,"../articles":19,"../config":24,"../fetch":27,"../navigation/navigation.backToTop":34,"./scrolling.query":39}],39:[function(require,module,exports){
// Module: Scrolling Query
// Description: Module that returns an object with info needed to make a WP Query via Ajax. Used for features like Infinite Scrolling.

// Defining the module exports
module.exports = (function () { 'use strict';

    // Defining a variable for access to the Main Content Objects
    var config = require('../config');

    // Defining the Defaults
    var def = {
        action: 'tb_json_api',
        postInfo: config.info
    };

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;


    // fn: Creating the Query
    var createQuery = function() {

        // Return the query if it already exists
        if(def.query) return def.query;

        // Defining the query
        var scrollQuery = {
            action: def.action,
            offset: def.postInfo.offset,
            key: config.keys.nonce,
            posts_per_page: def.postInfo.postsPerPage,
            posts_returned: 0,
            returned: def.postInfo.returned,
            is: def.postInfo.is,
            query: def.postInfo.query,
            initStatus: false
        };

        // Updating defaults query
        def.query = scrollQuery;

        // Returning the query
        return def.query;

    };


    // Fn: Getting the scrolling query needed for wp-ajax
    var initQuery = function() {

        // Return scrollQuery if initStatus is true
        if(def.query.initStatus) return def.query;

        // Switch the initStatus to true
        def.query.initStatus = true;

        // Reset the post type to "any" of post_type is "post" or undefined
        if(def.postInfo.query.post_type === 'post' || !def.postInfo.query.post_type) {
            def.query.post_type = "any";
        } else {
            def.query.post_type = def.postInfo.query.post_type;
        }

        // Adjusting the offset for the query
        def.query.offset = def.query.offset + def.query.posts_returned;

        // Return the def.query
        return def.query;

    };


    // fn: Updating a key/value on the Query
    var setQuery = function(key, value) {
        // Return false if the key or values are undefined
        if(key === undefined || value === undefined) return false;
        // Update the scrollQuery's key and value
        def.query[key] = value;

        // Returning the def.query
        return def.query;
    };


    // fn: Public method to getting the query
    var getQuery = function() {
        // Returning the query
        return initQuery();
    };


    // Fn: Private init of this module
    var moduleInit = function() {
        verifyInit(function() {

            // Creating the query
            createQuery();

            // Initializing + updating the query properties
            initQuery();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // Initialize the module
    init();

    return {
        get: getQuery,
        set: setQuery,
        init: init,
        status: getStatus
    };

})();

},{"../config":24}],40:[function(require,module,exports){
// Module: Table of Contents
// Description: Contains the singleton that renders the Table of Contents for a single page

module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var _e = require('../config/items.content');
    var config = require('./config');

    // Setting up the Defaults
    var def = {
        c: {
            active: 'active',
            inactive: 'inactive',
            reveal: 'reveal',
        },
        contentListHtml: null,
        contentOffset: 0,
        ender: null,
        endPoint: 0,
        headers: [],
        titles: [],
        table: _e.tableOfContents,
        tableDom: false,
        wrapper: _e.tableOfContentsWrapper
    };

    // Status determines whether or not functions should fire
    var status = false;

    // Creating the memo'ed init to prevent multiple firing
    var initMemo = false;

// Table of Contents Setup

    // Fn: Return the DOM Table of Contents object
    var getTableDom = function() {

        // Defining the table
        var table = def.table[0];

        // If tableDom has already been set, return that instead
        if(def.tableDom !== false) {
            return def.tableDom;
        }

        // Return false if table is not defined
        if(!table) return false;

        // Adding the table Dom object to the Defaults
        def.tableDom = table;

        // Returning the table
        return table;

    };

    // Fn: Return the offset for the #content
    var getContentOffset = function() {

        // Defining the content
        var content = _e.theContent[0];

        // Return false if content is not defined
        if(!content) return false;

        // Return the contentOffset (memo) if it exists
        if(def.contentOffset !== 0) {
            return def.contentOffset;
        }

        // Defining the contentOffset
        var offset = content.offsetTop;
        def.contentOffset = offset;

        // Returning the offset
        return offset;
    };

    // Fn: Public: Returning list of titles
    var getTableTitles = function() {
        // Returning the titles
        return def.titles;
    };

    // Fn: Check if H3 headers exist on the page
    var headerCheckExist = function() {

        // Defining the content
        var content = _e.theContent[0];
        if(!content) return false;

        // Defining the headers
        var headers = content.getElementsByTagName('h3');
        if(!headers[0]) return false;

        // Setting the headers in defaults
        def.headers = headers;
        // Updating the status
        status = true;
        // Returning true
        return true;

    };

    // Fn: Creating the Table of Contents List
    var tableCreateList = function() {

        // Return false if status is not true
        if(!status) return false;

        // Add to the innerHTML of the ToC
        def.contentListHtml += '<ul class="content-list">';
        def.contentListHtml += '<li class="active first"><a href="#content">Table of Contents</li>';

        // Create the ToC headers
        tableCreateHeaders();

        // Close the UL of .content-list in the innerHtml
        def.contentListHtml += '</ul>';

        // Returning the innerHTML
        return def.contentListHtml;
    };

    // Fn: Creating the Headers in the Table of Contents
    var tableCreateHeaders = function() {

        // Return false if status is not true
        if(!status) return false;

        // Looping through all the headers
        for(var id = 0, len = def.headers.length; id < len; id++) {

            // Defining the header and the title
            var header = def.headers[id];
            var title = header.firstChild.nodeValue;

            if(!title) continue;

            title = title.toString().replace(/\t/g, '').replace(/\n/g, '');

            // header.setAttribute('id', 'post-section-id-'+id);

            // HAVE to use jQuery method to get the plugin working
            $(header).attr('id', 'post-section-' + id);

            // Adding the list item to the content HTML inject
            def.contentListHtml += '<li><a href="#post-section-' + id + '">' + title + '</a></li>';

            // Adding the header title to the settings object
            def.titles.push(title);

        }

        // Returning true
        return true;
    };

    // Fn: Defining and Setting the end point for the Table of Contents
    var tableEnderSet = function() {

        // Return false if status is not true
        if(!status) return false;

        // Defining and getting the "ender" DOM element
        var ender = document.getElementById('article-end');
        if(!ender) return false;

        // Pusing the ender Dom object to Defaults
        def.ender = ender;

        // Getting and assigning the offset of the "Ender" element
        tableEnderOffsetGet();

        // Returning the ender
        return def.ender;
    };

    // Fn: Getting the offset Top of the "Ender"
    var tableEnderOffsetGet = function() {
        // Return false if ender is not set
        if(!def.ender) return false;

        // Defining the offset from the Ender element
        var offset = def.ender.offsetTop;

        // Defining / returning the "endpoint"
        if(def.endPoint !== 0 && offset === def.endPoint) {
            return def.endPoint;
        } else {
            def.endPoint = offset;
            return offset;
        }

    };

    // Fn: Rendering and Adding the Table of Contents to the DOM
    var tableRender = function() {

        // Return false if status is not true
        if(!status) return false;

        // Start the innerHTML for the table
        def.contentListHtml = '<div class="menu-drop"><i class="icon-list"></i></div><div class="menu-drop drop-arrow"><span class="toc-arrow"></span></div>';

        // Generate the innerHTML and add to contentListHtml
        tableCreateList();

        // Injecting the contentListHtml to the Table of Contents in DOM
        def.tableDom.innerHTML = def.contentListHtml;

        // Pushing the jQuery tableDom to the Defaults
        def.$table = $(def.tableDom);

        // Initiating the table events
        tableEvents();

        // Initializing the jQuery onePageNav plugin for the ToC
        tableRenderPlugin();

        // Trigger the scroll event once to check for positioning
        tableEventScroll();

        // Returning the table DOM element
        return def.tableDom;

    };

    // Fn: Initializing the jQuery onePageNav plugin for the ToC
    var tableRenderPlugin = function() {

        // Init $.onePageNav for the table
        $(function() {
            def.$table.onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 500,
                scrollOffset: 100,
                scrollThreshold: 0.08,
                filter: '',
                easing: 'swing',
                scrollChange: function($currentListItem) {}
            });
        });

        // Returning the $table (jQuery object)
        return def.$table;

    };


    // Fn: Collection of Events for the Table of Contents
    var tableEvents = function() {

        // Defining the table
        var table = def.tableDom;
        if(!table) return false;

        // Assigning the click event
        table.addEventListener(config.event.click, tableEventToggle, false);

        // Assigning the mouseleave event
        table.addEventListener(config.event.mouseleave, tableEventHideList, false);

        // Assigning the scroll event
        _e.theWindow.on('scroll', tableEventScrollDebounced);

        // Returning the table
        return table;
    };



// Table of Content Events

    // Fn: Click event for toggling the class of the Table of Contents
    var tableEventToggle = function() {
        if(this.classList.contains(def.c.reveal)) {
            tableEventHideList.call(this);
        } else {
            tableEventShowList.call(this);
        }

        // Returning this
        return this;
    };

    // Fn: Event to hide the Table of Contents List
    var tableEventHideList = function() {
        // Removing the .reveal class
        this.classList.remove(def.c.reveal);
        // Returning this
        return this;
    };

    // Fn: Event to show the Table of Contents List
    var tableEventShowList = function() {
        // Adding the reveal class
        this.classList.add(def.c.reveal);
        // Returning this
        return this;
    };

    // Fn: Event to hide the Table of Contents
    var tableEventHide = function() {
        // Adding the .inactive class
        this.classList.add(def.c.inactive);
        this.style.display = 'none';
        // Returning this
        return this;
    };

    // Fn: Event to show the Table of Contents
    var tableEventShow = function() {
        // Removing the .inactive class
        this.classList.remove(def.c.inactive);
        this.style.display = 'block';
        // Returning this
        return this;
    };

    // Fn: Public API to hide Table of Contents
    var tableEventHidePub = function() {
        // Hiding the table
        tableEventHide.call(def.tableDom);
        // Returning this
        return this;
    };

    // Fn: Public API to show Table of Contents
    var tableEventShowPub = function() {
        // Showing the table
        tableEventShow.call(def.tableDom);
        // Returning this
        return this;
    };

    // Fn: Event to calculate visibility of Table on scrolls
    var tableEventScroll = function() {

        // Defining the distance
        var distance = $(window).scrollTop();
        // Defining the offset
        var contentOffset = getContentOffset();

        // Showing the table on scroll/
        if(distance >= contentOffset || distance <= def.endPoint) {
            tableEventShow.call(def.tableDom);
        }

        // Hiding the table on scroll
        if(distance <= contentOffset || distance >= def.endPoint) {
            tableEventHide.call(def.tableDom);
        }

        // Returning the table DOM element
        return def.tableDom;

    };

    // Fn: Debouncing the scroll event
    var tableEventScrollDebounced = _.debounce(tableEventScroll, 320);

    // Fn: Public: Simulating clicks in Table of Content
    var tableGoTo = function(index) {
        // Return false if the status is not true
        if(!status) return false;

        // Defining i for ID
        var i = index - 1;

        // If the index is valid
        if(index <= def.titles.length && index !== 0) {

            // Locating the link and initiating a click
            def.$table.find('a')[i].click();
            // Hiding the table
            tableEventHideList.call(def.tableDom);

            // Returning the title
            return def.titles[i];

        } else {
            return false;
        }
    };

// Table of Contents Init

    // Fn: Private fn to initialize Table of Contents
    var tableOfContentsInit = function() {

        if(initMemo !== false) return false;
        initMemo = true;

        // Initialize only if the device is desktop AND single
        if(!config.state.isDesktop || !config.state.isSingle || !def.table[0]) return false;

        return (function() {

            getTableDom();

            headerCheckExist();

            tableEnderSet();

            tableRender();

            _e.theWindow.load(function(){

                tableEnderOffsetGet();

            });
        })();
    };

    // Fn: Public fn to initialize Table of Contents
    var init = function() {
        return tableOfContentsInit();
    };

    // Initialize the module
    init();

    // Exporting the content exports object
    return {
        init: init,
        goTo: tableGoTo,
        show: tableEventShowPub,
        hide: tableEventHidePub,
        endPoint: tableEnderOffsetGet,
        titles: getTableTitles
    };

})(jQuery);
},{"../config/items.content":12,"./config":24}],41:[function(require,module,exports){
// Module: Tabs
// Description: Module that creates tabbed content in the DOM

// Defining the module exports
module.exports = (function () { 'use strict';

    // Defining a variable for access to the Main Content Objects
    var config = require('./config');
    var TabCollection = require('../collections/collection.Tabs');

    // Defining the state of this moduole
    var status = false;

    // Memoizing the init of this module
    var initMemo = false;

    var collection = false;

    // Fn: Private init of this module
    var moduleInit = function() {
        verifyInit(function() {

            // Creating the new tab collection
            collection = new TabCollection();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo === false) {
            initMemo = true;
            config.check.callback(callback);
        } else {
            return false;
        }
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return status;
    };

    // fn: Publicly returning the collection
    var getCollection = function() {
        return collection;
    };

    // Initialize the module
    init();

    return {
        init: init,
        collection: getCollection,
        status: getStatus
    };

})();

},{"../collections/collection.Tabs":9,"./config":24}],42:[function(require,module,exports){
// Module: Pagination
// Description: Contains Pagination class constructor. Used to create a pagination model that tracks previous, current, and next page information based on the window's location / pathname.

// Defining the module exports
module.exports = (function () { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');
    var pushHistory = require('./utils.pushHistory');
    var sendReport = require('./utils.sendReport');

    // Defining / creating the pagination class / constructor
    var Pagination = function() {

        // The pagination count
        this.count = 0;

        this.currentPath = '';

        this.history = [];

        // Page: Used to track page data
        this.page = {};


        // fn: Initialization method
        this.initialize = function() {

        };

        // Initializing the class
        this.initialize();

    };

    // fn: Adding +1 to the pagination count
    Pagination.prototype.addCount = function() {
        this.count = this.count + 1;
        return this;
    };

    // fn: Updating the current Path
    Pagination.prototype.updateCurrentPath = function(path) {
        if(!path) return false;

        // Updating the currentPath
        this.currentPath = path;

        // Adding the path to the pathHistory
        this.history.push(path);

        return this;
    };


    // fn: Setting the path for the class
    Pagination.prototype.path = function() {

        // Defining the origin
        var origin = window.location.pathname;

        // Split the path root into an array
        var array = origin.split('/');

        // Setting the path's root
        var root = array.slice(1, -2).join('/');

        var params = window.location.search;

        // Return the path object
        return {
            origin: origin,
            array: array,
            root: root,
            sep: '/',
            params: params
        };

    };


    // fn: Setting the title for the class
    Pagination.prototype.title = function() {

        // Defining the original title
        var origin = document.title;

        // Splitting the original title based on " - "
        var array = origin.split(' - ');

        // Setting the title's root
        var root = array[0] ? array[0] : false;

        // Returning the title object
        return {
            origin: origin,
            array: array,
            root: array[0],
            sep: ' - Page '
        };

    };



    // fn: Method to check to see if the current page is the front/first page
    Pagination.prototype.isFirstPage = function() {

        // Determines if the current page is "Page 2" or more
        if(this.path().array.indexOf('page') > -1) {
            // Return false of page is paginated
            return false;
        } else {
            // Return true for first page
            return true;
        }

    };


    // fn: Method to get the current page number
    Pagination.prototype.getPageNumber = function() {

        // Return 1 if the page is first page
        if(this.isFirstPage()) return 1;

        var array = this.path().array;

        // Return the page number, parsing the path.array
        return parseInt(array[array.length - 2], 10);

    };

    // fn: Method to get the previous page number
    Pagination.prototype.getPageNumberPrevious = function() {
        // Defining the currentPage number
        var currentPage = this.getPageNumber();

        // if the current page is smaller than 1 (page 1)
        if(currentPage <= 1)
            // Return 0 (page 0)
            return 0;

        // else, return currentPage - 1
        return currentPage - 1;

    };

    // fn: Method to get the next page number
    Pagination.prototype.getPageNumberNext = function() {

        // Return this pageNumber + 1
        return this.getPageNumber() + 1;

    };

    // fn: Creating/generating the page path
    // example: "/category/gaming/page/4/"
    Pagination.prototype.createPath = function(number) {

        // Defining the path output
        var path;

        var thisPath = this.path();

        // if the number is equal to or smaller than 1
        if(number <= 1) {
            // use the path root
            path = thisPath.origin + thisPath.params;
        } else {
            // otherwise, create the updated path
            if(this.isFirstPage()) {
                path = thisPath.origin + 'page/' + number + '/' + thisPath.params;
            } else {
                path = '/' + thisPath.root + '/' + number + '/' + thisPath.params;
            }
        }

        // Returning the path output
        return path;

    };

    // fn: Method to get the path
    Pagination.prototype.getPath = function(path) {

        var def = this.createPath(this.getPageNumber());

        if(config.info.single) return def;

        // path is "next"
        if(path === 'next') {
            // create path for next page
            return this.createPath(this.getPageNumberNext());
        }

        // path is "previous"
        if(path === 'previous') {
            // create path for previous page
            return this.createPath(this.getPageNumberPrevious());
        }

        // otherwise, create path for the current page
        return def;

    };

    // fn: Creating/generating the title
    Pagination.prototype.createTitle = function(number) {

        // Defining the title output
        var title;

        // if the number is equal to or smaller than 1
        if(number <= 1) {
            // use the title root
            title = this.title().root;
        } else {
            // otherwise, create the updated title
            title = this.title().root + this.title().sep + number;
        }

        // return the title output
        return title;

    };

    // fn: Method to get the Title
    Pagination.prototype.getTitle = function(page) {

        var def = this.title().origin;

        if(config.info.single) return def;

        // page is "next"
        if(page === 'next') {
            // create Title for next page
            return this.createTitle(this.getPageNumberNext());
        }

        // page is "previous"
        if(page === 'previous') {
            // create Title for previous page
            return this.createTitle(this.getPageNumberPrevious());
        }

        // otherwise, return the current title
        return def;
    };


    // fn: Simulates a pagination
    Pagination.prototype.paginate = function(direction) {

        // Return false if direction is not defined
        if(!direction) return false;

        // pushHistory if direction is 'next' or 'previous'
        if(direction === 'next' || direction === 'previous') {

            if(this.isFirstPage() && direction === 'previous') return false;

            // Defining the scroll based report title
            var reportTitle = '/scroll' + this.getPath(direction);

            // Return if the page is single (prevents history pushes)
            if(config.info.single === true) {

                // Update report title
                reportTitle = '/scroll' + this.path().origin;
                return this.report(reportTitle);
            }

            // Send report with the page title
            this.report(reportTitle);

            // Returning the util pushHistory method with direction
            return pushHistory(this.getTitle(direction), this.getPath(direction));

        } else {

            // Return false
            return false;
        }

    };

    // fn: Method to send report (Analytics)
    Pagination.prototype.report = function(title) {

        // Send the report
        return sendReport.push(title);

    };

    return Pagination;

})();
},{"../modules/config":24,"./utils.pushHistory":48,"./utils.sendReport":49}],43:[function(require,module,exports){
// Module: ScrollSpy
// Description: Contains the scrollSpy class constructor. Class is used to spy on elements and react to their positioning.

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Defining the ScrollSpy class (constructor)
    var ScrollSpy = function(options) {

        // Defining the initStatus
        // this.initStatus = false;

        // Defining the "default" options method
        this.defaults = {};

        // Defining the target items (original array)
        this.targetItems = false;

        // Defining the targets (mapped array)
        this.targets = false;

        // Defining the view
        this.view = window;

        // Defining the listener method for scroll events
        this.listener = false;

        // Defining the currentTarget
        this.currentTarget = false;

        // Defining the watchStatus
        this.watchStatus = false;

        // Defining delayStatus
        this.delayStatus = false;

        // Defining the optionsCache used for refresh
        this.optionsCache = options;

        // fn: Parsing options
        this.parseOptions = function(options) {

            // Return false if options fails validation
            if(!options || typeof options !== 'object') return false;

            // Assigning the offset
            this.defaults.offset = options.offset ? options.offset : 0;

            // Assigning the navOffset
            this.defaults.navOffset = options.navOffset ? options.navOffset : 50;

            // Assigning the "delay"
            this.defaults.delay = options.delay ? options.delay : false;

            // Assigning the callback "Action"
            this.defaults.action = options.action ? options.action : false;

            // Assigning the targets
            this.targetItems = options.targets ? options.targets : [];

            // Parse/process the targets
            this.assignTargets();

            // Return the scrollSpy
            return this;

        };

        // fn: Parsing (mapping) the scroll spy targets
        this.assignTargets = function() {

            // Return false if targetItems is not defined
            if(!this.targetItems) return false;

            // Parse targets using Array Map (this assumes that the targets are contained in a nativeJS nodeList, not a jQuery object)
            this.targets = Array.prototype.map.call(this.targetItems, function(item) {

                // Return the item if it exists
                if(item.clientHeight) return item;

            });

            // Returning the list of targets
            return this.targets;

        };

        // fn: Initialization method
        this.initialize = function(options) {

            // parsing the Class options
            this.parseOptions(options);

            // Debug: Init log
            // console.log('ScrollSpy initialized.');

            // Return the scrollSpy
            return this;

        };

        // Init the class with options
        this.initialize(options);

    };

    // fn: Method to creating custom events
    ScrollSpy.prototype.customEvent = function(event) {

        // Return false if event is not defined
        if(!event) return false;

        // Had to disable  - Not supported on IE
        // window.addEventListener(event, function(e) {
        //     return e.detail;
        // });

        // window.dispatchEvent(
        //     new CustomEvent(event, {
        //         detail: {
        //             target: self
        //         },
        //         bubbles: true,
        //         cancelable: false
        //     })
        // );

        // Return the scrollSpy
        return this;

    };

    // fn: Method to refresh targets
    ScrollSpy.prototype.refresh = function(options) {

        options = options ? options : this.optionsCache;

        // parsing the Class options
        this.parseOptions(options);

        // Return the scrollSpy
        return this;

    };

    // fn: Method for watching and tracking the targets
    ScrollSpy.prototype.watch = function(event) {

        // Debug Message
        // console.log('Watching..');

        var self = this;

        // Defining how many pixels have been scrolled from the top + navOffset + user defined offset
        var viewScrolled = $(window).scrollTop() + self.defaults.navOffset + self.defaults.offset;

        // Defining the current items in view (array)
        var target = self.targets.filter(function(item) {

            // Using jQuery's offset().top method vs. viewScrolled
            if($(item).offset().top < viewScrolled) {
                // Return the item
                return item;
            }

        });

        // if the target[] only contains 1 (or less) && options to delay is set to true, return false
        if( target.length <= 1 &&
            this.defaults.delay &&
            !this.delayStatus) {
            return false;
        }

        // update delayStatus
        this.delayStatus = true;

        // Defining the target from the target filtered array
        target = target[target.length - 1];

        // Return false if target is undefined
        if(!target) {
            // Reset the currentTarget
            self.currentTarget = false;
            return false;
        }

        // If the current target isn't the filtered target
        if(self.currentTarget !== target) {

            // Update current target
            self.currentTarget = target;

            // Init the "action" callback if available
            if(self.defaults.action && typeof self.defaults.action === 'function') {
                // Pass the currentTarget into the callback
                self.defaults.action(self.currentTarget);
            }

        }

        // Return the class
        return self;

    };

    // fn: Method to start spying
    ScrollSpy.prototype.spy = function() {

        var self = this;

        if(self.watchStatus) return 'Already spying..';

        self.watchStatus = true;

        // Debug Message
        // console.log('Started spying..');

        // Redefining the listener to use for scroll events
        // This solves the issue of "this" conflict with the watch method
        self.listener = function() {
            return self.watch.call(self);
        };

        // Adding the event listener for scrolling
        self.view.addEventListener('scroll', self.listener, false);

        // Adding the custom event
        self.customEvent('scrollSpyStart');

        // Return the class
        return self;

    };

    // fn: Alias method to start spying
    ScrollSpy.prototype.start = function() {
        // Returning the spy method
        return this.spy();
    };

    // fn: Method to stop spying
    ScrollSpy.prototype.stop = function() {

        var self = this;

        if(!self.watchStatus) return 'Already stopped spying..';

        self.watchStatus = false;

        // Debug Message
        // console.log('Stopped spying..');

        // Removing the event listener for scrolling
        self.view.removeEventListener('scroll', self.listener, false);

        // Adding the custom event
        self.customEvent('scrollSpyStop');

        // Return the class
        return self;

    };


    // Exporting the content exports object
    return ScrollSpy;

})(jQuery);
},{}],44:[function(require,module,exports){
// Module: Get Report
// Description: Module generates a report of the user's session activity of the site.

// fn: Private method to return a report
var getReport = function() { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');

    // Return false if the user is not logged in
    if(!config.check.loggedIn()) return 'You must be logged in to generate a report.';

    var util = require('./utils');

    var articles = require('../modules/articles');
    var scrollingContent = require('../modules/scrolling/scrolling.content');

    // Defining the report
    var report = {
        AdBlock: config.check.adBlockStatus(),
        Device: config.check.device(),
        Development: config.check.dev(),
        InfiniteScroll: scrollingContent.enabled(),
        Pageviews: {
            Analytics: util.analyticsHistory(),
            Count: util.analyticsHistory().length + 1
        },
        Pagination: {
            Current: scrollingContent.pagination().currentPath,
            History: scrollingContent.pagination().history
        },
        Shares: {
            Activity: articles.get.shares(),
            Count: articles.get.shareCount()
        },
        Viewport: config.check.match.current()
    };

    // Returning the report
    return report;

};

// fn: Public method to return a report
var init = function() { 'use strict';
    return getReport();
};

// Exporting the method
module.exports = init;
},{"../modules/articles":19,"../modules/config":24,"../modules/scrolling/scrolling.content":38,"./utils":46}],45:[function(require,module,exports){
// Module: Utils (jQuery)
// Description: Module contains the (jQuery) utility based methods

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // jQuery Visible
    $.fn.visible = function(e, threshold){
        var a = $(this),
        b = $(window),
        th = threshold || 0,
        f = b.scrollTop() + th;
        b = f+b.height();
        var d = a.offset().top;
        a = d+a.height() - th;
        var g = e===true ? a : d;
        return(e === true ? d : a)<= b && g >= f;
    };

    // getSocial
    $.fn.getSocial = function(callback, clickEvent) {

        return this.each(function() {

            var self = this;

            var ele = $(this);

            // Defining the share object to return
            var shareCount = {};
            var shareCounter = 0;
            var shareNetworks = 3;

            var clickShare = function(site) {

                if(!clickEvent || typeof clickEvent !== 'function') {
                    return false;
                }

                clickEvent(site);
            };

            ele.find('.social-stub.twitter').sharrre({
                share: {twitter: true},
                enableHover: false,
                enableTracking: false,
                buttons: { twitter: {via: 'TechnoBuffalo'}},
                click: function(api, options){
                    api.simulateClick();
                    api.openPopup('twitter');
                    clickShare('twitter');
                },
                // Pushes the share count to the shareCount {}
                render: function(api, options) {
                    shareCount.twitter = options.count.twitter;
                    returnShareCount();
                }
            });
            ele.find('.social-stub.facebook').sharrre({
                share: {facebook: true},
                enableHover: false,
                enableTracking: false,
                click: function(api, options){
                    api.simulateClick();
                    api.openPopup('facebook');
                    clickShare('facebook');
                },
                // Pushes the share count to the shareCount {}
                render: function(api, options) {
                    shareCount.facebook = options.count.facebook;
                    returnShareCount();
                }
            });
            ele.find('.social-stub.googleplus').sharrre({
                share: {googlePlus: true},
                enableHover: false,
                enableTracking: false,
                urlCurl: '/wp-content/themes/technobuffalo/resources/js/libs/sharrre.php',
                click: function(api, options){
                    api.simulateClick();
                    api.openPopup('googlePlus');
                    clickShare('googlePlus');
                },
                // Pushes the share count to the shareCount {}
                render: function(api, options) {
                    shareCount.googlePlus = options.count.googlePlus;
                    returnShareCount();
                }
            });

            ele.find('.social-stub.reddit').on('click', function(){
                var r = 'http://www.reddit.com/submit?url=';
                var u = window.location.href;
                var t = $('article').find('header h2').text();
                var shareUrl = r + u + "&title=" + t;

                TechnoBuffalo.util.openWindow(shareUrl);

                return false;
            });

            // Method to return the total share count into a callback
            var returnShareCount = function() {
                // Increase the shareCounter by 1 on activation
                shareCounter = shareCounter + 1;
                // If the shareCounter equals to the number of networks
                if(shareCounter === shareNetworks) {
                    // Intialize the callback, passing the shareCount
                    if(callback !== undefined && typeof callback === 'function') {
                    callback(shareCount);
                    }
                }
            };

            return this;

        });
    };

})(jQuery);
},{}],46:[function(require,module,exports){
// Module: Utils
// Description: Module contains the (native JS) utility based methods

// Defining the module exports
module.exports = (function (undefined) { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');
    var process = require('./utils.process');

    var pushHistory = require('./utils.pushHistory');
    var sendReport = require('./utils.sendReport');

    var Pagination = require('./utils.Pagination');
    var ScrollSpy = require('./utils.ScrollSpy');
    var viewportSpy = require('./utils.viewportSpy');

    // Scrolling attributes
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
    position = document.body.scrollTop;

    // Fn: CSS Transform Method
    var cssTransform = function(element, X, Y, Z) {

        // Element must be defined in order to proceed with this method
        if(element !== undefined && typeof element === 'object') {
            // Defining the variables
            var cssX = X || 0,
            cssY = Y || 0,
            cssZ = Z || 0,
            translate = 'translate3d('+ cssX + 'px, '+ cssY + 'px, '+cssZ+'px)';

            // Setting the transform attribute for various browser vendors
            element.style.webkitTransform = translate;
            element.style.MozTransform = translate;
            element.style.msTransform = translate;
            element.style.OTransform = translate;
            element.style.transform = translate;

            // Returning the element
            return element;

        } else {
            return false;
        }
    };

    // Fn: Used to clear variables
    var clearVar = function(list) {
        if(list !== undefined) {
            return true;
        } else {
            return false;
        }
    };

    // Vanilla Javascript Empty
    // Source: http://jsperf.com/jquery-html-vs-empty-vs-innerhtml/9
    // 211% Faster than jQuery and Javascript innerHTML = '';
    var empty = function(element) {
        while (element.childNodes.length > 0) {
            element.removeChild(element.childNodes[0]);
        }
    };

    // Fn: Opening a New Window
    var openWindow = function(url, width, height) {

        // Return false if url is not defined
        if(!url) return false;

        // Defining the settings
        var w = width ? width : 900;
        var h = height ? height : 800;
        var left = ( screen.width / 2)-( w / 2);
        var top = ( screen.height / 2)-( h / 2);

        // Returning the window.open function with the new settings
        return window.open(url,'_blank', 'width='+w+', height='+h+', top='+top+', left='+left);

    };

    // Fn: Rendering a HTML 5 video
    var renderVideo = function(settings, returnObject) {

        // All arguments must be supplied for this method to proceed
        if(typeof settings !== 'object' || !settings) return false;

        // Defining the video attributes
        var image = settings.image || false,
        mp4 = settings.mp4 || false,
        ogg = settings.ogg || false;

        // Determine whether MP4 and OGG were defined
        if(!mp4 || !ogg) return false;

        // Defining the HTML5 video elements
        var poster, posterImage, img, video, videoHtml;

        // Updating the undefined variables if "image" is defined
        if(image !== null && image !== undefined) {
            poster = true;
            posterImage =  'poster="'+image+'"';
            img = '<img src="'+image+'">';
        }

        // Setting the sources for the video object
        videoHtml = '<source src="'+mp4+'" type="video/mp4"><source src="'+ogg+'" type="video/ogg">'+img;

        // Return the video as a DOM object if returnObject is true
        if(returnObject === true) {

            // Create the video DOM object
            video = document.createElement('video');
            video.style.width = '100%';

            // Adding loop to the video
            // Source: http://stackoverflow.com/questions/3455229/control-html5-video-player-loop-with-javascript
            if (typeof video.loop === 'boolean') {
                video.loop = true;
            } else {
                video.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }

            // Add the poster to the video if image is defined
            if(poster === true) {
                video.setAttribute('poster', image);
            }

            // Injecting the source files for the video object
            video.innerHTML = videoHtml;

        } else {

            // Creating a serialized HTML video object
            video = '<video style="width: 100%;" loop '+posterImage+'>'+videoHtml+'</video>';
        }

        return video;
    };

    // Vanilla JS: Removing objects
    var removeThis = function(item) {
        if(item !== undefined || item !== null) {
            item.parentNode.removeChild(item);
            return true;
        } else {
            return false;
        }
    };

    // Fn: Removing all child nodes from parent Node
    var removeAll = function(item) {
        if((item !== undefined || item !== null) && item.length > 0) {
            for(var i = item.length - 1; i > -1; i-- ) {
                item[i].parentNode.removeChild(item[i]);
            }
            return true;
        } else {
            return false;
        }
    };

    // fn: Returns the direction of the user's scroll
    var scrollDirection = function () {

        var scroll = document.body.scrollTop;
        var direction = false;

        if (scroll > position) {
            direction = 'down';
        } else {
            direction = 'up';
        }

        position = scroll;

        return direction;

    };

    // fn: Resets scroll direction position attributes
    var scrollPositionReset = function() {

        // Scrolling attributes
        scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        position = document.body.scrollTop;

        return position;

    };

    // Vanilla Javascript Visible
    var isVisible = function(obj, threshold) {

        // Getting the object's attributes (offsets)
        var coords = obj.getBoundingClientRect();
        // Determining visible offset, if specified by the user
        var offset = threshold || 0;

        // Calculating the visibile (true/false) of the object

        // return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset, 10));

        // Improved calculations for visible

        var wt = window.pageYOffset,
        wb = wt + window.innerHeight,
        it = coords.top,
        ib = it + coords.height;

        var calculations = (ib >= wt - offset && it <= wb + offset);

        return calculations;
    };

    // Fn: Check to see if the element is in the viewport
    var inViewport = function(element) {
        // Returning false if the element is not defined
        if(!element || 1 !== element.nodeType) {
            return false;
        }
        // Definining the Viewport and element coordinates
        var htmlDoc = document.documentElement;
        var coords = element.getBoundingClientRect();

        // Returning true/false if element is visible
        return (!!coords && coords.bottom > 0 && coords.right > 0 && coords.top < htmlDoc.clientHeight && coords.left < htmlDoc.clientWidth);
    };

    // fn: Returning the analyticsHistory array
    var getAnalyticsHistory = function() {
        return sendReport.history;
    };

    // Exporting the method export object
    return {
        analyticsHistory: getAnalyticsHistory,
        clearVar: clearVar,
        cssTransform: cssTransform,
        empty: empty,
        inViewport: inViewport,
        openWindow: openWindow,
        Pagination: Pagination,
        process: process,
        pushHistory: pushHistory,
        removeAll: removeAll,
        removeThis: removeThis,
        renderVideo: renderVideo,
        ScrollSpy: ScrollSpy,
        scrollDirection: scrollDirection,
        scrollPositionReset: scrollPositionReset,
        sendReport: sendReport,
        viewportSpy: viewportSpy,
        visible: isVisible
    };

})();
},{"../modules/config":24,"./utils.Pagination":42,"./utils.ScrollSpy":43,"./utils.process":47,"./utils.pushHistory":48,"./utils.sendReport":49,"./utils.viewportSpy":50}],47:[function(require,module,exports){
// Module: Process
// Description: Contains processing based methods

// Defining the module exports
module.exports = (function() { 'use strict';

    // Requiring Modules
    // var util = require('./utils');

    // Fn: Checking if an object is empty
    var isEmptyObject = function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    };

    // Fn: Transforming a nodeList to an Array
    var toArray = function(nodeList) {
        if(nodeList !== undefined) {
            return [].slice.call(nodeList);
        } else {
            return false;
        }
    };

    // Fn: Removing all empty paragraphs from the DOM
    var removeEmptyParagraphs = function() {
        var p = document.querySelectorAll('p:empty');
        // return util.removeAll(p);
    };

    // Fn: Removing all white space from a string
    var removeWhitespace = function(string) {

        // Return false if string is invalid
        if(string === undefined && typeof string !== 'string') {
            return false;
        }

        // Returning the processed string
        return string.replace(/(^\s+|\s+$)/g, '');

    };


    // Exporting the content exports object
    return {
        isEmptyObject: isEmptyObject,
        remove: {
            emptyParagraphs: removeEmptyParagraphs,
            whitespace: removeWhitespace
        },
        removeWhitespace: removeWhitespace,
        toArray: toArray
    };

})();
},{}],48:[function(require,module,exports){
// Module: Push History (Utils)
// Description: Module contains the pushHistory method, which updates the Browser's history

// Defining the module exports
module.exports = (function (undefined) { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');

    // fn: Updating the browser's history
    var pushHistory = function(title, path) {

        // Return false if direction is not defined
        if(!title || !path) return false;

        // Return false device is IE or is NOT desktop
        if(!config.check.desktop()) return false;

        if(typeof history.pushState === 'function') {
            history.pushState(null, null, path);
            document.title = title;
        }

        return path;

    };

    // Exporting the method export object
    return pushHistory;

})();
},{"../modules/config":24}],49:[function(require,module,exports){
// Module: Send Report (Utils)
// Description: Module contains the Send Report method, which sends a report to Google Analytics

// Defining the module exports
module.exports = (function (undefined) { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');

    // Defining the Analytics History
    var analyticsHistory = [];

    // fn: Method to send report to analytics services
    var push = function(path) {

        // return false if path is not defined
        if(!path) return false;

        // Google Analytics
        _gaq.push(['_trackPageview', path]);

        // Adding the path to the Analytics History
        analyticsHistory.push(path);

        return true;

    };

    // Exporting the method export object
    return {
        history: analyticsHistory,
        push: push
    };

})();
},{"../modules/config":24}],50:[function(require,module,exports){
// Module: Viewport Spy
// Description: Module that updates the DOM body's class depending on the viewport size (responsive) //

// Defining the module exports
module.exports = (function ($, undefined) { 'use strict';

    // Requiring Modules
    var config = require('../modules/config');
    var _e = require('../config/items.content');

    // Defining the current Device
    var currentDevice = 'desktop';

    // Memoizing the init of this module
    var initMemo = false;

    var detectViewport = function() {

        // alert(config.check.match.current());

        // Defining the device
        var device = config.check.match.current();
        if(!device) return false;

        // Retun false if the device is the same as the current device
        if(currentDevice === device) return false;

        // Remove the currentDevice class from the body
        _e.theBody[0].classList.remove(currentDevice);

        // Update the currentDevice with the device
        currentDevice = device;

        // Add the new device class to the body
        _e.theBody[0].classList.add(currentDevice);

        // Return the current device
        return currentDevice;

    };

    // fn: Window resize event
    var resizeEvent = _.debounce(function() {
        // Init the detectViewport method
        detectViewport();
    }, 216);

    // fn: Binding the resize event to the Window
    var bindEvent = function() {
        // Binding the resize event to $window
        _e.theWindow.resize(resizeEvent);
        return 'Viewport Spy is now active';
    };

    // fn: Unbinding the resize event to the Window
    var unbindEvent = function() {
        // Unbinding the resize event to $window
        _e.theWindow.off('resize', resizeEvent);
        return 'Viewport Spy is now inactive';
    };

    // Fn: Private init of this module
    var moduleInit = function() {
        return verifyInit(function() {

            // Binding the resize event
            bindEvent();

            // Detecting the viewport
            detectViewport();

        });
    };

    // Fn: Verifying the init of this module
    var verifyInit = function(callback) {
        if(initMemo !== false) return false;
        initMemo = true;
        return config.check.callback(callback);
    };

    // Fn: Public init of this module
    var init = function() {
        return moduleInit();
    };

    // Fn: Publicly returning the status of the module
    var getStatus = function() {
        return initMemo;
    };

    // fn: Public method to return the current device
    var getDevice = function() {
        return currentDevice;
    };

    // Initialize the module
    init();

    // Exporting the export object
    return {
        activate: bindEvent,
        deactivate: unbindEvent,
        device: getDevice,
        init: init,
        status: getStatus
    };

})(jQuery);
},{"../config/items.content":12,"../modules/config":24}],51:[function(require,module,exports){
// View: Article

// Defining the View
var Article = (function ($, undefined) { 'use strict';

    return Backbone.View.extend({

        renderStatus: false,

        events: {
            'mouseenter'        : 'mouseoverEvent'
        },

        initialize: function() {
            this.collection.bind('add', this.render, this);
        },

        render: function() {

            // Return false if the view has already been rendered
            if(this.renderStatus) {
                return false;
            }

            // Changing the render status of this model to true to prevent re-rendering
            this.renderStatus = true;

            // Initializing the model's init method
            this.model.init();

        },

        // Event: Overall mouseover Event init
        mouseoverEvent: function() {

            // Fetching the social counts if social counts are undefined
            if(!this.model.get('socialCount')) {
                this.model.getSocialCount();
            }

        }

    });

})(jQuery);

// Exporting the view
module.exports = Article;
},{}],52:[function(require,module,exports){
// View: Breakout

// Defining the View
var Breakout = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');
    var bridge = require('../bridges/bridge.breakout');
    var util = require('../utils/utils');

    return Backbone.View.extend({

        // Status to ensure that the view is rendered only once
        status: false,

        wrapperHtml: '',

        initialize: function() {

            // Render the view when the model is added to the collection
            this.collection.bind('add', this.render, this);

            // Return the view
            return this;
        },

        // Fn: Setting up the media element of the breakout
        setupMedia: function() {

            // Defining the el and model
            var el = this.el;
            var model = this.model;
            var image = el.getAttribute(bridge.d.image);

            // Setup the image media if the media is an image
            if(image) {

                // Setup the image media
                model.set('mediaType', 'image');
                this.setupImage();

            // Setup the video media if the media is a video
            } else if(el.classList.contains(bridge.c.video.section)) {

                // Setup the video media
                model.set('mediaType', 'video');
                this.setupVideo();

            } else {
                return false;
            }

            // Return the view
            return this;
        },

        // Fn: Setting up the image
        setupImage: function() {

            // Defining the el and model
            var model = this.model;

            // Return false if the mediaType is not an image
            if(model.get('mediaType') !== 'image') return false;

            var el = this.el;

            // Defining the image
            var image = el.getAttribute(bridge.d.image);
            // Setting the image
            model.set('background', image);
            model.set('mediaType', 'image');

            // Creating and defining the hero element of this model
            var media = document.createElement('img');
            media.setAttribute('src', image);
            media.classList.add(bridge.c.background);
            // Setting the media
            model.set('media', media);

            // Returning the view
            return this;
        },

        // Fn: Setting up the video elements
        setupVideo: function() {

            // Defining the model
            var model = this.model;

            // Return false if the mediaType is not video
            if(model.get('mediaType') !== 'video') return false;

            var el = this.el;

            // Defining and getting the video attributes
            var image = el.getAttribute(bridge.d.video);
            var autoplay = el.getAttribute(bridge.d.autoplay);
            var loop = el.getAttribute(bridge.d.loop);
            var mp4 = el.getAttribute(bridge.d.mp4);
            var ogg = el.getAttribute(bridge.d.ogg);

            // Setting the video attributes
            model.set('background', image);
            model.set('mediaType', 'video');
            model.set('videoSettings', {
                autoplay: autoplay,
                loop: loop,
                mp4: mp4,
                ogg: mp4
            });

            model.set('videoInit', false);

            // Creating and defining the hero element of this model
            var media = document.createElement('div');
            media.classList.add(bridge.c.background);
            media.classList.add(bridge.c.video.breakV);
            media.setAttribute('data-mp4', mp4);
            media.setAttribute('data-ogg', ogg);
            media.setAttribute('data-image', image);
            media.innerHTML = '<img src="'+image+'" />';
            // Setting the media
            model.set('media', media);

            // Returning the view
            return this;
        },

        // Fn: Setting up the story <p> elements
        setupStory: function() {

            // Defining the model and the stories
            var model = this.model;
            var stories = model.get('story');

            if(!stories || model.get('breakspot')) return false;

            // Defining the wrapper
            var wrapper = model.get('wrapper');
            wrapper.classList.add(bridge.c.story.mode);

            // Creating the wrapper and container
            var storyWrap = document.createElement('div');
            storyWrap.classList.add(bridge.c.story.wrapper);

            var storyContainer = document.createElement('div');
            storyContainer.classList.add(bridge.c.story.container);

            // Setting the wrapper / container
            model.set('storyWrap', storyWrap);
            model.set('storyContainer', storyContainer);
            model.set('sectionBreak', true);

            // Returning the model
            return this;
        },

        // Fn: Setting up the title element
        setupTitle: function() {

            // Defining the title
            var title = this.model.get('title');
            if(!title) return false;

            // Rendering the title
            this.renderTitle(title);

            // Returning the view
            return this;

        },

        // Fn: Setting up the section break (ad)
        setupSectionBreak: function() {

            // Defining the model and the ad
            var model = this.model;
            var ad = model.get('sectionBreak');

            // Return false if the ad is not defined
            if(!ad) return false;

            // Getting the ad unit
            var unit = ad.querySelectorAll('.ad')[0];
            if(!unit) return false;

            // Defining the wrapper
            var wrapper = model.get('wrapper');
            if(!wrapper) return false;

            var height = unit.getAttribute('height');
            var threshold = model.get('settings').breakThreshold;
            var extra = 45;

            // Set the height as the threshold if applicable
            height = parseInt((height <= threshold ? threshold : height), 10) + extra;

            // Setting the section break class and adjusting the height of the wrapper
            wrapper.classList.add(bridge.c.wrapperBreak);
            wrapper.style.minHeight = height + 'px';

            // Returning the view
            return this;
        },

        // Fn: Setting and rendering the opacity change of the model's media
        setupOpacity: function() {

            // Defining the model and opacity
            var model = this.model;
            var opacity = model.get('opacity');

            if(!opacity) return false;

            var media = model.get('media');
            if(!media) return false;

            // Adjusting the media's opacity
            media.style.opacity = opacity;

            // Returning the view
            return this;
        },

        // Fn: Setting up the "joiner"
        setupJoiner: function() {

            // Defining the model and the joiner
            var model = this.model;
            var joiner = model.get('joiner');

            if(!joiner) return false;

            var wrapper = model.get('wrapper');
            // Adding the joiner class to the wrapper
            wrapper.classList.add(bridge.c.join);

            // Returning the view
            return this;
        },

        // Fn: Setting up the wrapper element where the breakout will be injected
        setupWrapper: function() {

            // Defining the model
            var model = this.model;

            // Create the Wrapper
            var wrapper = document.createElement('div');
            wrapper.classList.add(bridge.c.wrapper);
            model.set('wrapper', wrapper);

            // Create the template container
            var templateContainer = document.createElement('div');
            templateContainer.classList.add(bridge.c.container);
            model.set('templateContainer', templateContainer);

            // Create the template wrapper
            var templateWrapper = document.createElement('div');
            templateWrapper.classList.add(bridge.c.mainWrapper);
            model.set('templateWrapper', templateWrapper);

            // Create the template
            var template = document.createElement('div');
            template.classList.add(bridge.c.template);
            model.set('template', template);

            // Returning the view
            return this;

        },

        // Fn: Rendering the media of the model
        renderMedia: function() {

            // Render the media's video if the model contains video
            this.renderVideo();

            var model = this.model;
            var wrapper = model.get('wrapper');
            var media = model.get('media');

            if(!wrapper || !media) return false;

            // Appending the media to the wrapper
            wrapper.appendChild(media);

            // Returning the media element
            return media;

        },

        // Fn: Rendering the video if the model contains a video
        renderVideo: function() {

            // Return false if the device or if the viewport is not desktop
            if( !config.check.desktop() || !config.check.match.desktop()) return false;

            var model = this.model;
            // Check to see if this breakout model contains video
            if(model.get('mediaType') !== 'video') return false;

            // Check to see if the video has been loaded
            if(model.get('videoInit')) return false;

            // Changing the video init state of the model
            model.set('videoInit', true);

            // Defining the video's attributes
            var video = model.get('media'),
            settings = model.get('videoSettings'),
            mp4 = settings.mp4,
            ogg = settings.ogg,
            image = model.get('background'),
            autoplay = settings.autoplay,
            loop = settings.loop;

            // Rendering the HTML 5 video
            var videoMedia = util.renderVideo({
                mp4: mp4,
                ogg: ogg,
                image: image
            }, true);

            // Updating the model's media object with the new Video object
            model.set('media', videoMedia);

            // Playing the video if the video is on screen
            model.adjustVideoRender();

            // Returning the video media
            return videoMedia;
        },

        // Fn: Rendering the title of the model
        renderTitle: function(title) {

            // Defining the model
            var model = this.model;
            // Defining "t" as title. If title isn not defined, get it from the model

            // Defining the title
            var t = title || model.get('title');
            if(!t) return false;

            var id = t.id;

            // Adding the breakout title class to the title
            t.classList.add(bridge.c.title);

            // Setting the ID of the title to the Wrapper
            model.get('wrapper').id = id;

            var titleWrapper = document.createElement('div');
            titleWrapper.classList.add('section-breakout-title-wrapper');

            t.parentNode.insertBefore(titleWrapper, t);
            titleWrapper.appendChild(t);


            // Removing the ID of the title from the <h3> tag
            t.removeAttribute('id');

            // Returning the title
            return title;

        },

        renderStory: function() {
            var model = this.model;
            // Initialize if this breakout contains story elements

            // Return false if the story / sectionBreak is not defined
            if(!model.get('story') || !model.get('sectionBreak')) return false;

            // Defining the story elements
            var story = model.get('story');
            var storyWrap = model.get('storyWrap');
            var storyContainer = model.get('storyContainer');
            if(!storyContainer) return false;

            // Rendering the HTML of the story
            storyContainer.innerHTML = this.el.innerHTML;
            storyWrap.appendChild(storyContainer);

            // Empty this view (since it's contents were transfered to the story DOM element)
            util.empty(this.el);

            // if(config.check.match.mobile()) {
            //     this.el.classList.add('mobile');
            // }

            // Appending the story wrap
            this.el.appendChild(storyWrap);

            // Returning the view
            return this;
        },

        // Fn: Injecting the wrapperHtml and injecting the Wrapper into the DOM
        renderWrapper: function() {

            var el = this.el;
            var model = this.model;

            // Getting the wrapper div object from the Model
            var wrapper = model.get('wrapper');
            var templateContainer = model.get('templateContainer');
            var templateWrapper = model.get('templateWrapper');
            var template = model.get('template');

            // Return false if the templateWrapper or template is not defined
            if(!templateWrapper || !template) return false;

            // Injecting the templates into the Wrapper
            templateWrapper.appendChild(template);
            templateContainer.appendChild(templateWrapper);

            // Render the media
            this.renderMedia();

            // Append the templateContainer intot he wrapper
            wrapper.appendChild(templateContainer);

            // Injecting the wrapper into the DOM
            el.parentNode.insertBefore(wrapper, el);

            // Rendering the story view (if applicable)
            this.renderStory();

            // Injecting the break el into the wrapper's template
            template.appendChild(el);

            // Returning the template
            return template;

        },

        render: function(callback) {

            // Return false if the render status is true
            if(this.status) return false;
            // Updating the render status
            this.status = true;

            // Sets up the wrapper
            this.setupWrapper();

            // Sets up other elements of the breakout
            this.setupMedia();
            this.setupTitle();
            this.setupSectionBreak();
            this.setupStory();
            this.setupOpacity();
            this.setupJoiner();

            // Renders and injects the wrapper into the DOM
            this.renderWrapper();

            // Returning the callback after rendering
            config.check.callback(callback);
        }

    });

})(jQuery);

// Exporting the view
module.exports = Breakout;
},{"../bridges/bridge.breakout":1,"../modules/config":24,"../utils/utils":46}],53:[function(require,module,exports){
// View: Gallery

// Defining the View
var Gallery = (function ($, undefined) { 'use strict';

    // Require
    var config = require('../modules/config');

    return Backbone.View.extend({

        renderStatus: false,
        fullscreenStatus: false,

        events: {
            'click  .view-full'         :    'fullscreenOpen',
            'click  .view-full-close'   :    'fullscreenClose'
        },

        initialize: function() {

            this.collection.bind('add', this.render, this);

        },

        render: function() {

            // Return false if the view has already been rendered
            if(this.renderStatus) return false;

            this.renderStatus = true;

            // Creating the els and gallery for the model
            this.model.renderEls();
            this.model.renderGallery();

            // Setting up the fullscreen options
            this.renderFullscreenOptions();

            // Adjusting the height of the wrapper
            // this.renderGalleryWrapper();

            // Setup RoyalSlider Change event
            this.setupGalleryChangeEvent();

            // Setup tracking for the gallery
            this.setupTracking();

            return this;

        },

        // Fn: Rendering and adding the fullscreen options to the gallery
        renderFullscreenOptions: function() {

            var model = this.model;

            // Defining the gallery el
            var gallery = model.get('el');
            if(!gallery) return false;

            // Defining the gallery els
            var els = model.get('els');
            if(!els) return false;

            // Appending the ViewFull buttons to the gallery
            gallery.appendChild(els.largeViewOpen);
            gallery.appendChild(els.largeViewClose);

            return this;

        },

        // Fn: Adjusting the height property of the gallerie's wrapper
        renderGalleryWrapper: function() {
            // Defining the model and wrap elements
            var model = this.model;
            var els = model.get('els');
            if(!els) return false;

            var wrapper = els.galleryWrap;
            if(!wrapper) return false;

            // Adding a height to the wrapper
            wrapper.style.height = wrapper.clientHeight + 'px';
            wrapper.style.marginBottom = '1.5em';

            return this;

        },

        // Fn: Setting up the gallery change event
        setupGalleryChangeEvent: function() {
            var self = this;

            // Defining the model and gallery
            var model = self.model;
            var gallery = model.get('gallery');
            if(!gallery) return false;
            var galleryRS = gallery.data('royalSlider');

            return this;

        },

        // Fn: Setting up click tracking for GA pageviews
        setupTracking: function() {

            // Definining the tracking properties
            var title = config.info.post.title;
            var path = config.host.path;
            if(!title || !path) return false;
            path = '/gallery' + path;

            // Defining the gallery
            var $gallery = this.model.get('gallery');
            if(!$gallery) return false;

            $gallery.find('.rsOverflow, .rsArrow, .rsThumb').each(function() {
                this.setAttribute("onClick", "_gaq.push(['_trackPageview', '"+path+"']);");
            });

            return this;

        },

        // Fn: Resize adjustment method for the gallery
        galleryResize: function() {
            this.style.height = window.innerHeight + 'px';
            return this;
        },

        // Fn: Update thumbnails method for the gallery (Based on RoyalSlider)
        galleryUpdateThumbs: function() {
            this.updateSliderSize(true);
            this.updateThumbsSize();
            return this;
        },

        // Fn: Activating fullscreen mode for this gallery
        fullscreenOpen: function() {
            // Updating the fullscreen status of the view
            this.fullscreenStatus = true;

            // Defining the model and gallery
            var model = this.model;
            var galleryEl = model.get('el');
            var gallery = model.get('gallery');
            var galleryRS = gallery.data('royalSlider');

            // Activating fullscreen mode
            model.collection.fullscreenActive();
            // Appending the gallery to the fullscreen modal
            model.collection.els.fullscreenWrap.appendChild(galleryEl);

            // Activating RoyalSlider fullscreen mode
            galleryRS.enterFullscreen();

            this.galleryResize.call(galleryEl);
            this.galleryUpdateThumbs.call(galleryRS);

            // Setting this model as the collection's active model
            model.collection.activeGalleryModel = model;

            return this;

        },

        // Fn: Deactivating fullscreen mode for this gallery
        fullscreenClose: function() {
            // Updating the fullscreen status of the view
            this.fullscreenStatus = false;

            // Defining the model
            var model = this.model;
            var galleryEls = model.get('els');
            var galleryEl = model.get('el');
            var gallery = model.get('gallery');
            var galleryRS = gallery.data('royalSlider');

            // Dectivating fullscreen mode
            model.collection.fullscreenDeactive();
            // Appending the gallery back to the post
            galleryEls.galleryWrap.appendChild(galleryEl);

            // Dectivating RoyalSlider fullscreen mode
            galleryRS.exitFullscreen();

            this.galleryUpdateThumbs.call(galleryRS);

            // Resetting the collection's active model
            model.collection.activeGalleryModel = false;

            return this;

        }

    });

})(jQuery);

// Exporting the view
module.exports = Gallery;

},{"../modules/config":24}],54:[function(require,module,exports){
// View: MagnifyVideos

// Defining the View
var MagnifyVideos = (function ($, undefined) { 'use strict';

    return Backbone.View.extend({

        // Memoization: Used to ensure view isn't rendered more than once
        renderStatus: false,

        el: '.magnify-video-list',

        templateVideo: _.template('<div class="span3-3 block-wrap"><div class="block-image"><a href="<%= link[1].href %>"><img src="<%= media.thumbnail.url %>"></a></div><div class="block-content"><div class="block-title"><h4><a href="<%= link[1].href %>"><%= title.content %></a></h4></div></div></div>'),

        initialize: function() {

            if(this.renderStatus) {
                return this;
            }
            this.renderStatus = true;

            this.render();

            return this;
        },

        render: function() {
            var self = this;
            // Defining an empty string, used for innerHTML injection
            var elsHtml = '';

            // Looping through all the models
            _.each(self.collection.models, function(model) {
                // Adding the templated model to the elsHtml
                elsHtml += self.templateVideo(model.attributes);
            });

            // Rendering the elsHtml into the $el
            self.$el.html(elsHtml);

            return self;

        }

    });

})(jQuery);

// Exporting the view
module.exports = MagnifyVideos;
},{}],55:[function(require,module,exports){
// View: PressVideo

// Defining the View
var PressVideo = (function ($, undefined) { 'use strict';

    return Backbone.View.extend({

        renderStatus: false,

        events: function() {

        },

        initialize: function() {

            // Binding the view's render method to the collection events

            this.collection.bind('reset', this.render, this);
            this.collection.bind('add', this.render, this);
            this.collection.bind('remove', this.render, this);

            this.model.bind('lazyLoad', this.renderVideo, this);

        },

        render: function() {
            // Check render status. Render view if status if false
            if(!this.renderStatus) return false;
            var model = this.model;

            // Change the view's render status
            this.renderStatus = true;
            // Check to see if the view is visible in viewport
            if(this.model.visible()) {
                // Render the video embed code if the view is visible
                this.renderVideo();
            }
            // Returning the view
            return this;
        },

        // Fn: Rendering the video embed code to the DOM
        renderVideo: function() {
            // Defining the model
            var model = this.model;
            // Execute if the model has not yet rendered
            if(model.get('renderStatus') === false) {
                // Changing the view's render status if false
                if(this.renderStatus === false) {
                    this.renderStatus = true;
                }

                // Defining the embed Code
                var embed = model.get('embed');
                // Updating the render status of the model to true
                model.set('renderStatus', true);
                // Pushing the embed code to the model's wrapper
                model.get('wrapper').innerHTML = model.get('embedCode');
                // Removing the embed textarea DOM element from the model
                embed.parentNode.removeChild(embed);

                // Adding to the collection's load count number
                this.collection.lazyLoadCount++;

            }
            // Returning the view
            return this;
        }

    });

})(jQuery);

// Exporting the view
module.exports = PressVideo;
},{}],56:[function(require,module,exports){
// View: Tab

// Defining the View
var Tab = (function ($, undefined) { 'use strict';

    return Backbone.View.extend({

        // Memoization: Used to ensure view isn't rendered more than once
        renderStatus: false,

        events: {
            'click':        'activateTab'
        },

        initialize: function() {

            // Binding the view's render method to the collection events

            this.collection.bind('reset', this.render, this);
            this.collection.bind('add', this.render, this);
            this.collection.bind('remove', this.render, this);

            // this.render();

        },

        render: function() {
            // Check render status. Render view if status if false
            if(this.renderStatus === false) {
                this.renderStatus = true;



            } else {
                return false;
            }
        },

        // Event: Click action
        activateTab: function() {
            event.preventDefault();

            // Defining the element and active Class
            var el = this.el;
            var activeClass = 'active';

            // Initialize if the element is not ".current"
            if(!el.classList.contains(activeClass)) {

                var id = this.model.get('href');

                // Removing the active .current class from all the tabs
                this.collection.removeActiveClass();

                // Adding the active .current class to the clicked tab
                el.classList.add(activeClass);

                // Removing and activating the current tabbed content
                this.activateTabbedContent();

            } else {
                return false;
            }

        },

        activateTabbedContent: function() {

            var content = this.model.get('content');

            // Removing the active .current class from all the tabbed content
            this.collection.removeContentActiveClass();

            if(content !== null) {
                // Adding the active class and showing the tabbed content
                content.classList.add('active');
                content.style.display = 'block';

                return true;

            } else {
                return false;
            }

        }

    });

})(jQuery);

// Exporting the view
module.exports = Tab;
},{}]},{},[3])