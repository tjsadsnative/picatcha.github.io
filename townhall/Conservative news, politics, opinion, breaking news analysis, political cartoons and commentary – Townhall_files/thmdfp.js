/// <reference path="lib/jquery/jquery-2.1.0.js" />
/// <reference path="lib/bootstrap/bootstrap.js" />

$(function () {
    
    if (typeof ($configDfp) !== 'undefined') {
        //create container based on command
        var loadDelay = $configDfp.loadDelaySeconds * 1000 || 0;
        var overlayIt = $configDfp.overlaymask || false;

        var closebutton = $("<a />", {
            "class": "close close-overlay",
            text: "×"
        });
        var slideoutDiv = jQuery("<div />", {
            "class": "thmslideout slideoutbox so",
        }).append(closebutton.clone());

        var modalDiv = jQuery("<div />", {
            "style": "position: fixed; z-index: 2002; top: 50%;left: 50%;box-shadow: 0 4px 10px #666;border: 1px solid rgba(0, 0, 0, 0.2);",
            "class": "thmmodal"
        }).append(closebutton.clone());
        var bottomfloater = jQuery("<div />", {
            "style": "position: fixed; z-index: 2002; bottom:0; box-shadow: 0 4px 10px #666;border: 1px solid rgba(0, 0, 0, 0.2); left:50%;",
            "class": "thmbottomfloater"
        }).append(closebutton.clone());
        var overlay = jQuery("<div />", {
            "style": "position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.5);z-index:10;",
            "class": "thmoverlay"
        });

        var thmdfp = {
            getWidth: function () { // from http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
                var x = 0;
                if (self.innerWidth) {
                    x = self.innerWidth;
                }
                else if (document.documentElement && document.documentElement.clientHeight) {
                    x = document.documentElement.clientWidth;
                }
                else if (document.body && document.body.clientWidth) {
                    x = document.body.clientWidth;
                }
                return x;
            },
            getDevice: function () { // based on bootstrap's media queries
                var width = thmdfp.getWidth();

                if (width <= 768) return "mobile";
                if (width < 992) return "tablet";

                return "desktop";
            },
            fillContainerThenBind: function (container, config) {
                var $c = jQuery(container);
                $c.find(".close-overlay").click(function (e) {
                    $c.hide();
                    $(".thmoverlay").hide();
                });
                switch (config.command) {
                    case "slideout":
                        if ($c.css("right") === "-500px") {
                            var ifrm = thmdfp.createIframe(config);
                            jQuery(container)
                                .css("width", config.width + "px")
                                .css("height", config.height + "px")
                                .addClass("slideout")
                                .append(ifrm);
                        }
                        break;
                    case "modal":
                        var ifrm = thmdfp.createIframe(config);
                        var $c = jQuery(container)
                            .css("width", config.width + "px")
                            .css("height", config.height + "px")
                            .css("margin-left", -config.width / 2)
                            .css("margin-top", -config.height / 2)
                            .append(ifrm);
                        break;
                    case "bottomfloater":
                        var ifrm = thmdfp.createIframe(config);
                        var $c = jQuery(container)
                            .css("width", config.width + "px")
                            .css("height", config.height + "px")
                            .css("margin-left", -config.width / 2)
                            .append(ifrm);
                        break;
                }
            },
            createIframe: function (config) {
                ifrm = document.createElement("IFRAME");
                ifrm.setAttribute("src", config.iframeUrl);
                ifrm.setAttribute("scrolling", "no");
                ifrm.style.width = config.width + "px";
                ifrm.style.height = config.height + "px";
                ifrm.style.border = "none";
                return ifrm;
            }
        }
        var thmbody = jQuery("body");
        switch ($configDfp.command) {
            case "slideout":
                setTimeout(function () {
                    thmbody.prepend(slideoutDiv);
                    thmdfp.fillContainerThenBind(".thmslideout", $configDfp);
                }, loadDelay);

                break;
            case "modal":
                setTimeout(function () {
                    if (overlayIt) {
                        thmbody.prepend(overlay);
                    }
                    thmbody.prepend(modalDiv);
                    thmdfp.fillContainerThenBind(".thmmodal", $configDfp)
                }, loadDelay);

                break;
            case "bottomfloater":
                setTimeout(function () {
                    thmbody.prepend(bottomfloater);
                    thmdfp.fillContainerThenBind(".thmbottomfloater", $configDfp);
                }, loadDelay);
                break;
        }
    }
});