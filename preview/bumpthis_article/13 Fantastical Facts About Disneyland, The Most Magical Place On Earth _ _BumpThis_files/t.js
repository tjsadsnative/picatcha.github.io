function eof_track_event(a, c, e) {
    if (null != eof_opt_track_url) {
        var d = new Image;
        "undefined" == typeof a && (a = "");
        "undefined" == typeof c && (c = "");
        "undefined" == typeof e && (e = "");
        d.src = eof_opt_track_url + "&label=" + a + "&player=" + c + "&dtsum=" + e + "&cb=" + (new Date).getTime().toString(36);
    }
}

function eof_add_opt_handler(a, c, e) {
    "undefined" == typeof e && (e = function () {
        return "";
    });
    optWrapper = function () {
        eof_track_event(c, e());
    };
    window.addEventListener ? window.addEventListener(a, optWrapper, !0) : window.attachEvent ? "click" == a ? document.attachEvent("on" + a, optWrapper) : window.attachEvent("on" + a, optWrapper) : (window[a + "Chain"] = window["on" + a], window["on" + a] = "function" != typeof window["on" + a] ? optWrapper : function () {
        window[a + "Chain"]();
        optWrapper();
    })
}

function eof_getUrlParams() {
    var a = {},
        c = [];
    try {
        c = window.location.search.substring(1).split("&");
    } catch (e) {}
    for (var d = 0; d < c.length; d++) if (0 != c[d].length) {
        var b = c[d].split("=");
        a[b[0]] = "";
        for (var g = 1; g < b.length; g++) a[b[0]] += b[g] + "=";
        0 < a[b[0]].length && (a[b[0]] = a[b[0]].substring(0, a[b[0]].length - 1));
    }
    c = [];
    d = null;
    "undefined" != typeof a.utm_campaign && (b = new Date, b.setTime(b.getTime() - 864E5), document.cookie = "zzz=; expires=" + b.toGMTString() + "; path=/; domain=." + eof_website);
    for (var b = null, g = document.cookie.split(";"), h = 0; h < g.length; h++) {
        for (var f = g[h]; " " == f.charAt(0);) 
        	f = f.substring(1, f.length);
        0 == f.indexOf("zzz=") && (b = f.substring(4, f.length))
    }
    b=decodeURIComponent(b);
    
    if (("null" == b) && ("undefined" !== typeof zzz)) {
        b = zzz;
    }
    
    null != b && (b = b.split(","));
    if ("undefined" != typeof a.utm_campaign) {
        a.impc = 1;
        "undefined" == typeof a.setup && "undefined" != b[3] && (a.setup = b[3]);
        b && 4 <= b.length && (a.impc = parseInt(b[3]) + 1);
        b = new Date;
        b.setTime(b.getTime() + 18E5);
	document.cookie = "zzz=" + a.utm_campaign + "," + a.utm_source + "," + a.country + "," + a.setup + "," + a.impc + "; expires=" + b.toGMTString() + "; path=/; domain=." + eof_website;
        return a
    }
    return null != b ? (data = b, {
    	utm_campaign: data[0],
    	utm_source: data[1],
    	country: data[2],
        setup: data[3],
        impc: data[4]
    }) : null
}
try {
    var eof_opt_track_url = null;
    var eof_website = window.location.host;
    eof_website = eof_website.replace("www.","");
    var n=eof_website.split(":",1);
    eof_website = n[0];
    eof_params = eof_getUrlParams();

    if (null != eof_params) {
        eof_opt_track_url = "http://log.805metrics.com/track/log.php?cam=" + eof_params.utm_campaign + "&src=" + eof_params.utm_source + "&cntr=" + eof_params.country + "&stp=" + eof_params.setup + "&website=" + eof_website;
    }
} catch (err$$1) {
    var eof_pixel = new Image;
    eof_pixel.src = "http://log.805metrics.com/track/error.php?url=" + escape(window.location.href) + "&ref=" + escape(document.referrer) + "&err=" + escape(err$$1.message) + "&cb=" + (new Date).getTime().toString(36)
};
