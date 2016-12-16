
//<script>
var viewTools = (function() {
    "use strict";
    return {
        isCanvasSupported: function() {
            var c = document.createElement('canvas');
            return !!(c.getContext && c.getContext('2d'));
        },

        /**
         * Duplicated code.
         * Refer to tools.js
         * Checks for a device identified as being a 'Windows OS'
         * @param   {boolean} windowsRT is a Windows OS system for ARM processors
         * @returns {boolean}
         */
        isWindowsOS: function (windowsRT) {
            if (navigator) {
                if (navigator.userAgent) {
                    var userAgent = navigator.userAgent;

                    if (userAgent.match("Windows")) {
                        if (windowsRT && !userAgent.match("ARM")) {
                            return false;
                        }
                        return true;
                    }
                }
            }
            return false;
        },

        /**
         * Duplicated code.
         * Refer to tools.js
         * Checks for a device identified as being a 'Windows Phone'
         * @returns {boolean}
         */
        isWindowsPhone: function () {
            var wPhone = false;
            if (navigator) {
                if (navigator.userAgent) {
                    var a = navigator.userAgent;
                    var wpAgents = ["WPDesktop", "Windows Phone"];
                    for (var i = 0; i < wpAgents.length; i++) {
                        var agent = wpAgents[i];
                        if (a.match(agent)) {
                            wPhone = true;
                            break;
                        }
                    }
                }
            }
            return wPhone;
        },

        /**
         * Duplicated code.
         * Refer to tools.js
         */
        settingEnabled: function (settings, settingName) {
            var isEnabled = false;

            for (var i = 0; i < settings.length; i++) {
                if (settings[i].name === settingName) {
                    isEnabled = true;
                    break;
                }
            }

            return isEnabled;
        },

        isMobile: (function() {
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
        }()),

        /**
         * Duplicated code.
         * Refer to tools.js
         * Detects if the current session supports touch events
         * Many exceptions for windows devices.
         * @returns {boolean|*|boolean}
         */
        hasTouchEvents: function() {
            if (this.isWindowsOS(true) || this.isWindowsPhone()) { // Windows phone
                return true;
            } else if (
                (
                    ('ontouchstart' in window)
                        || window.DocumentTouch && document instanceof DocumentTouch
                    )
                    || (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints)
                ) { // Is Touch
                if (this.isWindowsOS(false)) { // Is windows
                    return false;
                }
                return true;
            } else {
                return false;
            }
        }
    }
}());

//<script>
var ITGS = ITGS || {loadedMedias:{}};
(function() {
    var error = false;
    if (error) {
        throw new Error("Internal error: " + error);
    }
    var options = {"albumId":10939,"co":11086,"domainName":"widgets.kiosked.com","resDomainName":"http:\/\/resources.kiosked.com","loader":"http:\/\/resources.kiosked.com\/scripts\/mediakiosk763.js","loaderWithDiag":"http:\/\/resources.kiosked.com\/scripts\/mediakioskDiag763.js","sign":"92fe07606df7269bc663a93bee55fce5","resMedia":{"images":"http:\/\/resources.kiosked.com\/res\/overlays\/images.png?763","images@2x":"http:\/\/resources.kiosked.com\/res\/overlays\/images@2x.png?763","imagesVideo":"http:\/\/resources.kiosked.com\/res\/overlays\/imagesVideo.png?763"},"langMedia":"http:\/\/resources.kiosked.com\/\/res\/tag\/en.png?763","scriptUrl":"\/\/widgets.kiosked.com\/sniffer\/get-script\/sign\/92fe07606df7269bc663a93bee55fce5\/albumid\/10939\/co\/11086.js","auth":"688e19b5846213570f39496b0965392c","language":"en","environment":"production","ipAddress":"50.141.83.23","imgMinWidth":320,"imgMinHeight":250,"forceJSONP":false,"endPoint":"widgets.kiosked.com\/sniffer\/get-kiosks-for-zones","maxKioskedImages":0,"pageLoadEventDomain":"bc-ad.kiosked.com","settingsData":{"settings":[{"key":"ui.media.overridePlugins","value":"BannerSlot","target":null,"lastUpdate":"1425574727","meta":{"origin":"override"}},{"key":"ui.sniff.maxBanners","value":"1","target":null,"lastUpdate":"1429262063","meta":{"origin":"override"}},{"key":"ui.media.Banner.provider","value":"Appnexus","target":null,"lastUpdate":"1425574755","meta":{"origin":"override"}},{"key":"ui.sniff.paragraphSniffNthElement","value":"4","target":null,"lastUpdate":"1425575566","meta":{"origin":"override"}},{"key":"ui.media.maxPlugins.ExternalBannerSlot","value":"1","target":null,"lastUpdate":"1427946570","meta":{"origin":"override"}},{"key":"ui.media.cutSizeFromParents","value":"auto","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.media.zIndex","value":"auto","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.sniff.minMediaHeight","value":"200","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.sniff.minMediaWidth","value":"290","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.media.Banner.minMediaSize.horizontalWidth","value":"300","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.media.overlays.Disclaimer.containerWidth","value":"264","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.media.overlays.Disclaimer.disclaimerText","value":"Advertisement","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.media.Banner.showDisclaimer","value":"true","target":null,"lastUpdate":"0","meta":{"origin":"default"}},{"key":"ui.sniff.disableIndexPageAnalysis","value":"true","target":null,"lastUpdate":"1409222197","meta":{"origin":"default"}},{"key":"ui.media.overlays.Disclaimer.disclaimerLink","value":"http:\/\/page.kiosked.com\/who-served-this-ad","target":null,"lastUpdate":"1412848290","meta":{"origin":"default"}},{"key":"ui.sniff.quantcastEnabled","value":"true","target":null,"lastUpdate":"1423226192","meta":{"origin":"default"}},{"key":"ui.sniff.sendZoneDataRequests","value":"false","target":null,"lastUpdate":"1423827257","meta":{"origin":"default"}}],"meta":{"appliedAbTest":null,"appliedAbTestStatus":0}}};
    if (!options || (typeof options !== "object")) {
        throw new Error("Options is empty or null - cannot load!");
    }
    options.cachedZoneResponse = [];
    var countryCode = "US";
    var loader = {
        MOBILE_CAROUSEL_MAX_WIDTH:  721,
        timerId: null,
        isMobile: false,

        isCanvasSupported: function() {
            var c = document.createElement('canvas');
            return !!(c.getContext && c.getContext('2d'));
        },

        isSupportedAndroid: function() {
            var uAgent = navigator.userAgent;
            // We check whether 'Android' is part of user agent string
            if( uAgent.indexOf("Android") >= 0) {
                // Android version comes after the text 'Android'
                var version = parseFloat(uAgent.slice(uAgent.indexOf("Android")+8));
                return (version >= 3);
            }
            return true;
        },
        loadScript: function(src) {
            if(typeof(ITGS.mediaJsLoading) === 'undefined') {
                ITGS.mediaJsLoading = "loading";
                var s = document.createElement('script');
                s.setAttribute('src', src);
                s.setAttribute('async', 'async');
                s.setAttribute('type', 'text/javascript');
                document.getElementsByTagName('head')[0].appendChild(s);
            }
        },
        isStandardCarouselCompatible: function() {
            var compat = true;

            if (window.matchMedia) {
                compat = (window.matchMedia('screen and (min-device-width: ' +
                    loader.MOBILE_CAROUSEL_MAX_WIDTH + 'px)').matches &&
                    window.matchMedia('screen and (min-device-height: ' +
                        loader.MOBILE_CAROUSEL_MAX_WIDTH + 'px)').matches) ||
                    window.navigator.msPointerEnabled || window.navigator.pointerEnabled;
            }
            return compat;
        },
        overrideFunctions: function() {
            // Create an empty array storage for override functions.
            // If you change the name of the array container, change it also in SnifferController.php in function _renderOverrideJSFunctions
            ITGS.overrideFunctions = [];
            ITGS.overrideFunctions['SnifferUtilities.processPageURL'] = function(url) {return ITGS.Facades.URLProcessing.getURLPathOnly(url);};
        },
        init: function() {
            if(ITGS.mediaJsLoading === 'done') {
                ITGS.tools.environment.setContext(options.environment);
                ITGS.tools.environment.setDomainName(options.domainName);
                ITGS.tools.environment.setIPAddress(options.ipAddress);

                clearTimeout(loader.timerId);
                loader.overrideFunctions();
                ITGS.messaging.libraryInit();
                ITGS.sniffer = new ITGS.Sniff(options);
            }
        }
    };
    if(ITGS.mediaJsLoading) {
        delete ITGS.mediaJsLoading;
    }
    if (loader.isStandardCarouselCompatible()) {
        ITGS.isMobile = false;
    } else {
        ITGS.isMobile = true;
    }

    // Functionality for diagnostics switching
    var targetLoader = options.loader;
    if ((window.ITGS_load_diagnostics === true) && (options.loaderWithDiag && (options.loaderWithDiag.length > 0))) {
        targetLoader = options.loaderWithDiag;
    }
    window.ITGS.loadedScript = options.scriptUrl;

    loader.loadScript(targetLoader);

    loader.timerId = setInterval(loader.init, 100);
})();
