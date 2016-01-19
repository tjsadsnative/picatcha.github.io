; (function () {
    //DETERMINE BASE URL FROM CURRENT SCRIPT PATH
    var scripts = document.getElementsByTagName("script");
    var src = scripts[scripts.length - 1].src;
    var baseUrl = src.substring(src.indexOf(document.location.pathname), src.lastIndexOf('/'));


    //HANDLE JQUERY IF LOADED ALREADY TO AVOID OVERWRITING EXISTING JQUERY PROPERTIES AND PLUGINS
    //CHECK FOR OLD VERSIONS OF JQUERY
    var oldjQuery = !!(window.jQuery && !!window.jQuery.fn.jquery.match(/^1\.[0-4]/));

    //LOAD JQUERY IF NOT AVAILABLE OR BELOW MIN
    if (!window.jQuery || oldjQuery) {
        require.config({
            paths: {
                baseUrl: baseUrl,
                jquery: [
                    '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
                    //If the CDN location fails, load from this location
                    'jquery.min'
                ]
			}
        });
    } else {
        //REGISTER THE CURRENT JQUERY
        define('jquery', [], function () { return window.jQuery; });
    }

    //CONFIGURE LIBRARIES AND DEPENDENCIES VIA REQUIREJS
    require.config({
        baseUrl: baseUrl,
        waitSeconds: 10,
        //ASSIGN SHORTCUTS FOR EASY LOADING AND VERSION ABSTRACTION
        paths: {
            blockUI: 'jquery.blockUI',
            bootstrap: 'bootstrap',
            browserselector: 'css_browser_selector',
			bxslider: 'jquery.bxslider.min',
            camera: 'camera',
            can: 'can.jquery.min',
            canfixture: 'can.fixture',
            colorbox: 'jquery.colorbox-min',
            cufon: 'cufon-yui',
            easing: 'jquery.easing.1.3',
            equalheight: 'jquery.equalheights',
            emailThis: 'emailThis-min',
            greensock: 'greensock',
            html5placeholder: 'html5placeholder.mod',
            html5shiv: 'html5shiv',
            isotope: 'jquery.isotope.min',
            jqueryColor: 'jquery.color-2.1.2.min',
            jqueryCookies: 'jquery.cookies',
            jqueryDdslick: 'jquery.ddslick.min',
            jqueryGlobal: 'jquery.global',
            jqueryMigrate: 'jquery-migrate-1.2.1.min',
            jquerymobile: 'jquery.mobile-1.2.0-beta.1.min',
            jquerymobilecustom: 'jquery.mobile.customized.min',
            jqueryui: 'jquery-ui.min',
            jqueryValidate: 'jquery.validate.min',
            jqueryValidateMethods: 'additional-methods.min',
            kendoall: [
                '//da7xgjtj801h2.cloudfront.net/2014.1.318/js/kendo.all.min',
                'kendo.all.min'
            ],
            kendoweb: [
                '//da7xgjtj801h2.cloudfront.net/2014.1.318/js/kendo.web.min',
                'kendo.web.min'
            ],
            kendomobile: [
                '//da7xgjtj801h2.cloudfront.net/2014.1.318/js/kendo.mobile.min',
                'kendo.mobile.min'
            ],
            kendodataviz: [
                '//da7xgjtj801h2.cloudfront.net/2014.1.318/js/kendo.dataviz.min',
                'kendo.dataviz.min'
            ],
            layerSlider: 'layerslider.kreaturamedia.jquery',
            layerSliderTransitions: 'layerslider.transitions',
            lazyLoader: 'lazyLoadScroll',
            magnificPopup: 'jquery.magnific-popup.min',
            mobilemenu: 'jquery.mobilemenu',
            moment: 'moment.min',
            notifier: 'notifier.mod',
            nailthumb: 'jquery.nailthumb.1.1.min',
            onebyone: 'jquery.onebyone',
            placeholder: 'jquery.placeholder-min',
            qtip: [
                '//cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min.js',
                'jquery.qtip.min'
            ],
            sidr: 'jquery.sidr',
            selectivizr: 'selectivizr-1.0.3b',
            superfish: 'superfish',
            topArticles: 'topArticles.min',
            totop: 'jquery.ui.totop',
            touchwipe: 'jquery.touchwipe.min',
            underscore: 'underscore-min',
            underscorestring: 'underscore.string.min'
        },
        //DECLARE NON-AMD COMPLIANT JS AND DEPENDENCIES
        shim: {
            blockUI: ['jquery'],
            bootstrap: {
                deps: ['jquery', 'mobilemenu'],
                exports: 'bootstrap'
            },
            bxslider: ['jquery'],
            camera: ['jquery'],
            can: {
                deps: ['jquery'],
                exports: 'can'
            },
            canfixture: ['can'],
            colorbox: ['jquery'],
            cufon: ['jquery'],
            easing: ['jquery'],
            equalheight: ['jquery'],
            emailThis: ['jquery','magnificPopup'],
            html5placeholder: ['jquery'],
            html5shiv: ['jquery'],
            jqueryCookies: ['jquery'],
            jqueryDdslick: ['jquery'],
            jqueryGlobal: ['jquery'],
            jqueryMigrate: ['jquery'],
            jquerymobilecustom: ['jquery'],
            jqueryui: ['jquery'],
            kendoall: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendoweb: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendomobile: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendodataviz: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            layerSlider: [
                'greensock',
                'layerSliderTransitions'
            ],
            lazyLoader: ['jquery'],
            magnificPopup: ['jquery'],
            mobilemenu: ['jquery'],
            moment: {
                deps: ['jquery'],
                exports: 'moment'
            },
            nailthumb: ['jquery'],
            notifier: {
                deps: ['jquery'],
                exports: 'Notifier'
            },
            onebyone: ['jquery'],
            placeholder: ['jquery'],
            qtip: ['jquery'],
            sidr: ['jquery'],
            selectivizr: ['jquery'],
            superfish: ['jquery'],
            totop: ['jquery'],
            touchwipe: ['jquery'],
            underscore: {
                deps: ['jquery'],
                exports: '_'
            },
            underscorestring: ['underscore']
        }
    });
})();