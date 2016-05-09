(function () {
    var WIDGET_KEY = "Lp0UMMkNvH8d7JdgXWy31i";
    var ADMIN_JSON = {"widget":"desktop_classic","items_per_line":3,"lines_per_widget":2,"internal_item_indication":"NONE","font_family":"","item_text_location":"BELOW_IMAGE","titleFontFamilyType":"site_css","itemFontFamilyType":"site_css","external_size":6,"zoom_in_on_hover":true,"vertical_separator":{},"items_bullets":{},"hover_effects":{},"admin_props":{"is_custom":false},"platform":"desktop","list_size":6,"dev_version":2,"enabled":true,"logoRedirectUrl":"http://www.reklamnative.com/?utm_source=icon/","clientKey":"Lp0UMMkNvH8d7JdgXWy31i","attributes":{"elements":[{"selector":".my6_item_title","changes":{"css":{"color":"rgba(0,0,0,255)","font-family":"inherit"},"addClass":" yp6-bold "}},{"selector":".my6_title","changes":{"html":"","css":{"color":"rgba(0,0,0,255)","font-weight":"normal","font-style":"normal","font-family":"inherit"}}},{"selector":".my6_title_bg","changes":{"css":{"background-color":"rgba(255,255,255,255)"}}},{"selector":".my6_widget_bg","changes":{"css":{"background-color":"rgba(255,255,255,255)","border":"none"}}},{"selector":".my6_button_bg","changes":{"css":{}}},{"selector":".my6_item_title_bg","changes":{"css":{"background":"transparent"}}},{"selector":".my6_around_the_web_wrapper","changes":{"css":{"display":"none"}}},{"selector":".my6_around_the_web_text","changes":{"html":""}},{"selector":".my6_logo_img","changes":{"attr":{"src":"//d2ymkpxi1rgldj.cloudfront.net/static/assets/logo/reklamnative.png"}}},{"selector":".my6_alias","changes":{"css":{"color":"rgba(0, 0, 0, 0.5)"},"addClass":""}},{"selector":"[data-template='default']","changes":{"addClass":""}},{"selector":"[data-template^='external']","changes":{"addClass":""}}]},"apiUrl":"http://ad.reklamnative.com/pub2/"};

    function runWhenReady() {
        if (yp6 && yp6.define) {
            if (!yp6.require.specified(WIDGET_KEY + '_config') && !yp6.require.defined(WIDGET_KEY + '_config')) {
                yp6.define(WIDGET_KEY + '_config',
                    ["require", "flow/addWidgetId", "flow/startWidget", "lib/jquery"],
                    function (require, addId, process, $) {
                        function widgetSetup() {
                            var widgetConfig = {
                                "widget_key": WIDGET_KEY,
                                "widget": "embedded_button",
                                "papi": true
                                //"platform": "mobile"
                            };
                            $.extend(true, widgetConfig, ADMIN_JSON);
                            //===add unique id===
                            widgetConfig = addId(widgetConfig);
                            //===start widget===
                            process(widgetConfig);
                        }

                        return widgetSetup;
                    }
                );
            }
            yp6.require([WIDGET_KEY + '_config'], function (widgetSetup) {
                widgetSetup();
            });
        }
        else {
            setTimeout(runWhenReady, 10);
        }
    }

    runWhenReady();
})();