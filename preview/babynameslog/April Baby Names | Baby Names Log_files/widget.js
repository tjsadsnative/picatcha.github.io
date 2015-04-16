

// added this code to find all script tables that have a
// src value that has an api.content.ad widget.js call
var contentAdScriptUrl = "http://api.content.ad/Scripts/widget.aspx?id=fd5adab2-14c1-4ad9-b83b-85f0527ca405&d=YmFieW5hbWVzbG9nLmNvbQ%3D%3D&wid=34054&pubdate=2015-04-15+23%3A55%3A27";
var contentAdScript;

var scripts = document.getElementsByTagName("script");

// only add the scripts that are actual content.ad widget.js calls
for (var index = 0; index < scripts.length; ++index) {
    if (contentAdScriptUrl == scripts[index].src) {
        contentAdScript = scripts[index];
    }
}

var contentAdParams = (function () {
    var result = {}, queryString = contentAdScriptUrl.substring(contentAdScriptUrl.indexOf("id=")), re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    var contentAdScriptUrlFromDomain = contentAdScriptUrl.substr(contentAdScriptUrl.indexOf("://") + 3);
    var server = contentAdScriptUrlFromDomain.substr(0, contentAdScriptUrlFromDomain.indexOf("/"));
    
    result["lazyLoad"] = (result["lazyLoad"] == true ? true : false);
    result["server"] = (result["test"] == true ? "test." + server : server);
    result["title"] = (result["title"] ? result["title"] : encodeURI(escape(document.title)));
    result["url"] = (result["url"] ? result["url"] : encodeURIComponent(window.location));
    return result;
} ());

var contentAdParamArray = [];
for (var key in contentAdParams) {
    contentAdParamArray.push(key + '=' + contentAdParams[key]);
}

var contentAdWidgetUrl = (location.protocol === 'https:' ? 'https:' : 'http:') + "//" + contentAdParams.server + "/GetWidget.aspx?" + contentAdParamArray.join('&');
var contentAdWidgetCodeLoaded = false;

function contentAdInit(widgetId, widgetUrl, script, lazyLoad, loadMultiple) {
    if (typeof (this["contentAd" + widgetId]) == 'undefined') {
        if (!contentAdWidgetCodeLoaded) {
            contentAdWidgetCodeLoaded = true;
            if (lazyLoad) {
                (function () {
                    function asyncLoad() {
                        var s = document.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = widgetUrl;
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                    }
                    if (window.attachEvent)
                        window.attachEvent('onload', asyncLoad);
                    else
                        window.addEventListener('load', asyncLoad, false);
                })();
            } else {
                (function () {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = widgetUrl;
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                })();
            }
        }
        setTimeout(function () { contentAdInit(widgetId, widgetUrl, script, lazyLoad, loadMultiple) }, 50);
    } else {
        var content = this["contentAd" + widgetId]();
        var newDiv = document.createElement("div");
        newDiv.innerHTML = content;
        var container = document.getElementById("contentad" + widgetId);
        container.parentNode.insertBefore(newDiv, container);
        if (typeof (this["initJQuery" + widgetId]) != 'undefined') {
            this["initJQuery" + widgetId]();
        }
        if (loadMultiple) {
            this["contentAd" + widgetId] = undefined;
        }
    }
}
contentAdInit(contentAdParams.wid, contentAdWidgetUrl, contentAdScript, contentAdParams.lazyLoad, contentAdParams.loadMultiple);