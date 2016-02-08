
/*de.bild.mobile.env:35439590.12*/


var de = de || {};
de.bild = de.bild || {};
de.bild.env = {
    'base' : 'http://m.bild.de',
    'scriptBase' : 'http://m.bild.de',
    'hostname': 'm.bild.de',
    'domainName': 'bild.de',
    'cssLegacyUrl': 'http://m.bild.de' + "/code/bde_legacy,35166768.6.bild.css",
    'don' : 'https://don.bild.de',
    'home' : 'http://m.bild.de',
    'meinKonto' : 'https://meinkonto.bild.de',
    'webFontURL': 'http://bilder.bild.de/media/icomoon-woff-34734832/Download/10.bild.woff',
    'client'   : 'bildMobile.html', //mobile Client
    'clientStat' : 'bild.html', //stationärer Client
    'stationaryHost' : 'http://www.bild.de',
    callingName: "Bild.de",
   'facebookAppId' : '78193590860'

}


/*de.bild.mobile.legacySwitch:35439732.1*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.legacySwitch = function() {
    var settings = {
        legacySwitchCookieName: "legacySwitch",
        legacySwitchCookieDays: 30,
        legacySwitchText: 'Wenn Ihr Handy diese Seite nicht korrekt anzeigen kann, wechseln Sie mit "OK" zu wap2.bild.de',
        legacySwitchDelay: 5e3,
        legacySwitchUrl: "http://wap2.bild.de"
    };
    function checkLegacySwitch() {
        if (needsLegacySwitch()) {
            doLegacySwitch();
        }
    }
    function needsLegacySwitch() {
        return !("localStorage" in window);
    }
    function doLegacySwitch() {
        var legacyVal = readCookie(settings.legacySwitchCookieName);
        if (!legacyVal) {
            createCookie(settings.legacySwitchCookieName, "1", settings.legacySwitchCookieDays);
            if (confirm(settings.legacySwitchText)) {
                window.location.href = settings.legacySwitchUrl;
            }
        } else if (legacyVal == "1") {
            createCookie(settings.legacySwitchCookieName, "2", settings.legacySwitchCookieDays);
            if (confirm(settings.legacySwitchText)) {
                window.location.href = settings.legacySwitchUrl;
            }
        }
    }
    function createCookie(name, value, days) {
        if (!document.cookie) {
            return null;
        }
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; domain=." + de.bild.env.domainName + "; path=/";
    }
    function readCookie(name) {
        if (!document.cookie) {
            return null;
        }
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    return {
        checkLegacySwitch: function() {
            return checkLegacySwitch();
        }
    };
}();

de.bild.mobile.legacySwitch.checkLegacySwitch();
/*de.bild.user:34734586.5*/

var de = de || {};

de.bild = de.bild || {};

de.bild.user = function() {
    
    var initialized = false;
    var USERTYPES_FOR_TRACKING = {
        BUYER: "kaeufer",
        USER: "eingeloggt",
        COM_USER: "community",
        COM_PREMIUM: "kaeufer/community",
        UNKNOWN: "gast"
    };
    var VAuthData = {
        clubs: [],
        loggedIn: false,
        cookieName: "vauth",
        ssoID: ""
    };
    var cookieNames = {
        comActive: "CommunityActive"
    };
    function getCookie(key) {
        var cookieData;
        return (cookieData = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(document.cookie)) ? decodeURIComponent(cookieData[1]) : null;
    }
    function userHasClub(clubName) {
        for (var i = 0; i < VAuthData.clubs.length; i++) {
            if (VAuthData.clubs[i] == clubName) {
                return true;
            }
        }
        return false;
    }
    function getVAuthData() {
        var vauthCookie = getCookie(VAuthData.cookieName);
        if (!vauthCookie) {
            return;
        }
        var clubsRegex = new RegExp(/~id=:?([^~]*[^:~]):?~/);
        var loggedInRegex = new RegExp(/~data=u=([^&~]*)[&~]/);
        var clubs = clubsRegex.exec(vauthCookie);
        VAuthData.clubs = [];
        if (clubs != null) {
            VAuthData.clubs = clubs[1].split(":");
        }
        var loggedIn = loggedInRegex.exec(vauthCookie);
        if (loggedIn && loggedIn.length) {
            loggedIn = loggedIn[1];
            VAuthData.ssoID = loggedIn;
            if (loggedIn && loggedIn !== "" && loggedIn !== "UNKNOWN") {
                VAuthData.loggedIn = true;
            }
        }
    }
    function getTrackingInfo() {
        var param = USERTYPES_FOR_TRACKING.UNKNOWN;
        if (VAuthData.loggedIn) {
            var comActive = getCookie(cookieNames.comActive) === "1";
            var isPremium = VAuthData.clubs.length > 0;
            if (comActive && isPremium) {
                param = USERTYPES_FOR_TRACKING.COM_PREMIUM;
            } else if (isPremium) {
                param = USERTYPES_FOR_TRACKING.BUYER;
            } else if (comActive) {
                param = USERTYPES_FOR_TRACKING.COM_USER;
            } else {
                param = USERTYPES_FOR_TRACKING.USER;
            }
        }
        return param;
    }
    getVAuthData();
    function init() {
        initialized = true;
    }
    var abSettings = {
        eleTag: "<div></div>",
        adClasses: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
        eleCSS: {
            width: "1px",
            height: "1px",
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        }
    };
    var $body, $checkEle, abData = false;
    function abElemHidden() {
        if (window.jQuery) {
            var $ = jQuery;
            if (!$body) {
                $body = $("body");
            }
            $checkEle = $(abSettings.eleTag);
            $checkEle.addClass(abSettings.adClasses).css(abSettings.eleCSS);
            $body.append($checkEle);
            var ab = $checkEle[0].offsetParent === null || $checkEle[0].offsetHeight === 0 || $checkEle[0].offsetWidth === 0;
            $checkEle.remove();
            return ab;
        }
        return false;
    }
    function abSaDisabled() {
        return (window.SmartAdServerAjax === undefined || window.SmartAdServerAjax.toString().length < 50) && window.sasmobile === undefined;
    }
    function getAbData() {
        if (abData === false) {
            abData = {
                elemHidden: abElemHidden(),
                saDisabled: abSaDisabled()
            };
            abData.blockerActive = abData.elemHidden || abData.saDisabled;
        }
        return abData;
    }
    return {
        init: function() {
            init();
        },
        reInit: function() {
            VAuthData.loggedIn = false;
            getVAuthData();
        },
        isLoggedIn: function() {
            return VAuthData.loggedIn;
        },
        getUserClubs: function() {
            return VAuthData.clubs;
        },
        userHasClub: function(clubName) {
            return userHasClub(clubName);
        },
        getTrackingInfo: function() {
            return getTrackingInfo();
        },
        getSSOID: function() {
            return VAuthData.ssoID;
        },
        ocbDown: function() {
            return VAuthData.ssoID == "UNKNOWN";
        },
        getAbData: function() {
            return getAbData();
        }
    };
}();
/*de.bild.mobile.classifier:34734606.12*/

var de = de || {};

de.bild = de.bild || {};

de.bild.mobile = de.bild.mobile || {};

de.bild.mobile.classifier = function() {
    
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var settings = {
        layoutClasses: {
            S: width < height ? width < 480 : height < 480,
            M: width < height ? width < 640 : height < 640,
            L: width < height ? width >= 640 : height >= 640
        },
        changeByClasses: [ "L" ],
        changeText: "Wollen Sie auf bild.de wechseln?",
        changeRedirectBaseUrl: "http://www.bild.de",
        mobileSwitchCookieName: "mobileSwitch",
        cssLegacyUrl: de.bild.env.cssLegacyUrl,
        cssLegacyClass: "legacy",
        layoutOrder: [ "S", "M", "L" ],
        classString: ",variante=",
        dataName: "layout",
        calculatedLayoutClass: ""
    };
    function classifyDevice() {
        var html = document.getElementsByTagName("html")[0];
        var data = html.dataset;
        checkLegacySupport();
        if (data === undefined) {
            data = {
                layout: html.getAttribute("data-layout")
            };
        }
        var initialLayoutClass;
        if (data.layout) {
            initialLayoutClass = data[settings.dataName];
        }
        if (initialLayoutClass === undefined || initialLayoutClass.length != 1) {
            return;
        }
        initialLayoutClass = initialLayoutClass.toUpperCase();
        settings.calculatedLayoutClass = getLayout();
        if (settings.calculatedLayoutClass === undefined) {
            return;
        }
        if (settings.calculatedLayoutClass !== initialLayoutClass) {
            changeUrl();
        }
    }
    function getLayout() {
        for (var i = 0; i < settings.layoutOrder.length; i++) {
            var key = settings.layoutOrder[i];
            if (settings.layoutClasses[key] === true) {
                return key;
            }
        }
        return undefined;
    }
    function checkLegacySupport() {
        if (isFeaturePhone()) {
            loadCss(settings.cssLegacyUrl);
            document.getElementsByTagName("html")[0].className += " " + settings.cssLegacyClass;
        }
    }
    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    function isFeaturePhone() {
        return !("querySelector" in document) || !("localStorage" in window) || !("addEventListener" in window) || isAndroidBeforeV3() || isWindowsPhoneBeforeV8();
    }
    function isAndroidBeforeV3() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Android") >= 0) {
            var androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
            if (androidversion < 3) {
                return true;
            }
        }
        return false;
    }
    function isWindowsPhoneBeforeV8() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Windows Phone OS 7.0") >= 0 || ua.indexOf("Windows Phone OS 7.5") >= 0) {
            return true;
        }
        return false;
    }
    function changeUrl() {
        var url = location.href;
        var layoutClass = settings.calculatedLayoutClass;
        var mandant = url.match(/\.[a-zA-Z]*\.html\S*/);
        if (mandant && mandant.length === 1) {
            mandant = mandant[0];
        }
        if (mandant !== null) {
            if (url.indexOf(settings.classString) != -1) {
                url = url.replace(new RegExp(settings.classString + "[A-Za-z]*"), settings.classString + layoutClass);
            } else {
                url = url.replace(mandant, settings.classString + layoutClass + mandant);
            }
        } else {
            if (url.indexOf(settings.classString) != -1) {
                url = url.replace(new RegExp(settings.classString + "[A-Za-z]*"), settings.classString + layoutClass);
            } else {
                if (url.slice(-1) !== "/") {
                    url += "/";
                }
                url += settings.classString + layoutClass;
            }
        }
        if (document.referrer && document.cookie) {
            if (!readCookie("wt_ref")) {
                document.cookie = "wt_ref" + "=" + document.referrer + "; domain=." + de.bild.env.domainName + "; path=/";
            }
        }
        location.href = url;
    }
    function readCookie(key) {
        return (document.cookie.match("(^|; )" + key + "=([^;]*)") || 0)[2];
    }
    classifyDevice();
    return {
        settings: settings
    };
}();
/*de.bild.autoLogin:37607052.2*/

de.bild.autoLogin = function(user, env) {
    
    if (!user || !env) {
        return false;
    }
    var settings = {
        autologinUrl: env.don + "/gw/" + encodeURIComponent(encodeURIComponent(document.location.href)),
        cookieName: "autoLogin",
        autoLoginCookie: "donState",
        expireSeconds: 60,
        aiValue: "li:true",
        cookiePath: "/",
        domain: "." + env.domain
    };
    if (!user.isLoggedIn() && !user.ocbDown() && decodeURIComponent(readCookie(settings.autoLoginCookie)) === settings.aiValue) {
        if (readCookie(settings.cookieName) !== "1") {
            globalCookie(settings.cookieName, "1");
            window.location.href = settings.autologinUrl;
        } else {
            globalCookie(settings.cookieName, null);
            globalCookie(settings.autoLoginCookie, null);
        }
    } else {
        globalCookie(settings.cookieName, null);
    }
    function readCookie(key) {
        return (document.cookie.match("(^|; )" + key + "=([^;]*)") || 0)[2];
    }
    function globalCookie(key, value) {
        var date = new Date();
        date.setTime(date.getTime() + settings.expireSeconds * 1e3);
        var expires = "; expires=" + date.toGMTString();
        document.cookie = key + "=" + value + ";path=" + settings.cookiePath + ";" + "domain=" + settings.domain + expires;
        return true;
    }
}(de.bild.user, de.bild.env);
/*legacyswitch:35439736.2*/

