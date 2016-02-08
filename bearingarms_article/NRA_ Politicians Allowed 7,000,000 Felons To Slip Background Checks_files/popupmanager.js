///**Check this link for usage**//
//https://github.com/carhartl/jquery-cookie
//$.cookie('test', '10'); To Set Cookie
//$.cookie('test'); Syntax For get Cookie

///**Check this link for usage**//
//https://github.com/mathiasbynens/jquery-placeholder

var thadpopshow = true;
(function ($) {
    $(document).ready(function () {
      
        var Townhall = { PopUpId : $("#TestPopUpId").val(), BaseUrl: "http://townhall.com" };

        (function ($) {
            $.cookie = function (key, value, options) {
                if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
                    options = $.extend({}, options);

                    if (value === null || value === undefined) {
                        options.expires = -1;
                    }

                    if (typeof options.expires === "number") {
                        var days = options.expires, t = options.expires = new Date();
                        t.setDate(t.getDate() + days);
                    }

                    value = String(value);

                    return (document.cookie = [
				        encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value),
				        options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
				        options.path ? "; path=" + options.path : "",
				        options.domain ? "; domain=" + options.domain : "",
				        options.secure ? "; secure" : ""
                    ].join(""));
                }

                options = value || {};

                var decode = options.raw ? function (s) { return s; } : decodeURIComponent;
                var pairs = document.cookie.split("; ");

                for (var i = 0, pair; pair = pairs[i] && pairs[i].split("=") ; i++) {
                    if (decode(pair[0]) === key) return decode(pair[1] || ""); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
                }

                return null;
            };
        })(jQuery);

        function CookieInfo() {
            var cookieinfo = {
                user: $.cookie("j3D3a4M1k10t9"),
                newsletter: $.cookie("newsletters"),
                popupSession: $.cookie("PopupSession"),
                site: $.cookie("site"),
                popupsessionTest: $.cookie("PopupSessiontest"),
                popups: $.cookie("Popups")
            };

            return JSON.stringify(cookieinfo);
        }

        function launchWindow(id) {
            //Get the screen height and width
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            //Set heigth and width to mask to fill up the whole screen
            $("#mask").css({ "width": maskWidth, "height": maskHeight });

            //transition effect		
            $("#mask").fadeIn(100);
            $("#mask").fadeTo("fast", 0.8);

            //Get the window height and width
            var winH = $(window).height();
            var winW = $(window).width();

            //Set the popup window to center
            $(id).css("top", winH / 2 - $(id).height() / 2);
            $(id).css("left", winW / 2 - $(id).width() / 2);

            //transition effect
            $(id).fadeIn(2000);
        }

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

            return pattern.test(emailAddress);
        };

        (function (f, h, $) { var a = "placeholder" in h.createElement("input"), d = "placeholder" in h.createElement("textarea"), i = $.fn, c = $.valHooks, k, j; if (a && d) { j = i.placeholder = function () { return this }; j.input = j.textarea = true } else { j = i.placeholder = function () { var l = this; l.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({ "focus.placeholder": b, "blur.placeholder": e }).data("placeholder-enabled", true).trigger("blur.placeholder"); return l }; j.input = a; j.textarea = d; k = { get: function (m) { var l = $(m); return l.data("placeholder-enabled") && l.hasClass("placeholder") ? "" : m.value }, set: function (m, n) { var l = $(m); if (!l.data("placeholder-enabled")) { return m.value = n } if (n == "") { m.value = n; if (m != h.activeElement) { e.call(m) } } else { if (l.hasClass("placeholder")) { b.call(m, true, n) || (m.value = n) } else { m.value = n } } return l } }; a || (c.input = k); d || (c.textarea = k); $(function () { $(h).delegate("form", "submit.placeholder", function () { var l = $(".placeholder", this).each(b); setTimeout(function () { l.each(e) }, 10) }) }); $(f).bind("beforeunload.placeholder", function () { $(".placeholder").each(function () { this.value = "" }) }) } function g(m) { var l = {}, n = /^jQuery\d+$/; $.each(m.attributes, function (p, o) { if (o.specified && !n.test(o.name)) { l[o.name] = o.value } }); return l } function b(m, n) { var l = this, o = $(l); if (l.value == o.attr("placeholder") && o.hasClass("placeholder")) { if (o.data("placeholder-password")) { o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")); if (m === true) { return o[0].value = n } o.focus() } else { l.value = ""; o.removeClass("placeholder"); l == h.activeElement && l.select() } } } function e() { var q, l = this, p = $(l), m = p, o = this.id; if (l.value == "") { if (l.type == "password") { if (!p.data("placeholder-textinput")) { try { q = p.clone().attr({ type: "text" }) } catch (n) { q = $("<input>").attr($.extend(g(this), { type: "text" })) } q.removeAttr("name").data({ "placeholder-password": true, "placeholder-id": o }).bind("focus.placeholder", b); p.data({ "placeholder-textinput": q, "placeholder-id": o }).before(q) } p = p.removeAttr("id").hide().prev().attr("id", o).show() } p.addClass("placeholder"); p[0].value = p.attr("placeholder") } else { p.removeClass("placeholder") } } }(this, document, jQuery));

        Townhall.getPopup = function () {
            if (this.PopUpId == null || this.PopUpId == undefined) {
                Townhall.getPopupInfo();
            } else {
                Townhall.getTestPopupInfo();
            }
        };

        Townhall.getTestPopupInfo = function () {
            $.ajax({
                type: "GET",
                crossDomain: true,
                url: this.BaseUrl + "/thtest/getpopup", //root, thtestcontroller
                jsonp: "callback",
                data: { id: this.PopUpId },
                dataType: "html",
                success: function (popup) {
                    $("object[type='application/x-shockwave-flash']").append("<param name='wMode' value='transparent'/>");
                    
                    $("#mask").after(popup);
                    $("#mask").css({ "position": "absolute", "left": "0", "top": "0", "z-index": "7000", "background-color": "#000", "display": "none" })

                    $("#newsletterHtml").prependTo($(".popup_content"));
                    $("#actionUrl").prependTo($(".popup_submit"));
                        
                    launchWindow("#th-pop");
                }
            });
        };

        Townhall.getPopupInfo = function () {
            if (navigator.cookieEnabled) {
                if ($.cookie("PopupSessiontest") != "active") {
                    if ($.cookie("PopStatus") != "active") {
                        var cookie = CookieInfo();
                        $.ajax({
                            type: "GET",
                            crossDomain: true,
                            url: this.BaseUrl + "/plugins/popup",
                            jsonp: "callback",
                            data: { cookieInfo: cookie },
                            contentType: "application/json; charset=utf-8",
                            dataType: "jsonp",
                            success: function (j) {
                                if (j.ShowPopup == "true") {
                                    var userInfo = { email: "test@test.com", newsletters: $.cookie("newsletter") };

                                    $("object[type='application/x-shockwave-flash']").append("<param name='wMode' value='transparent'/>");
                                    var popup = $("#mask").clone();
                                    $("#mask").after('<div id="th-pop" class="window" style="position: fixed; display: none;z-index: 8000;"></div>');
                                    $("#mask").css({ "position": "absolute", "left": "0", "top": "0", "z-index": "7000", "background-color": "#000", "display": "none" });
                                    $("#th-pop").css({ "width": j.PopupWidth, "height": j.PopupHeight });
                                    $("#th-pop").prepend(j.PopupStyles);
                                    $("#th-pop").append(j.PopupHtml);
                                    if (j.PopupNewslettersHtml != "") {
                                        $(".popup_content").append(j.PopupNewslettersHtml);
                                    }
                                    $(".popup_submit").append('<input id="actionUrl"  type="hidden" value= ' + j.RedirectURL + ' />');
                                    $.cookie("site", j.PopupSiteId, { expires: 365, path: "/" });
                                    $.cookie("newsletter", j.Newsletter, { expires: 365, path: "/" });
                                    $.cookie("PopupSessiontest", JSON.stringify(userInfo), { expires: 7, path: "/" });
                                    $.cookie("PopStatus", "active", { expires: 1, path: "/" });
                                    $.cookie("Popups", j.Popups, { expires: j.PopupInterval, path: "/" });
                                    thadpopshow = false;
                                    launchWindow("#th-pop");

                                    var script = document.createElement("script");
                                    script.type = "text/javascript";
                                    script.src = "http://media.townhall.com/townhall/th-widgets/scripts/th-popupbinder.js";
                                    document.body.appendChild(script);
                                }
                            },
                            error: function (e) {
                            }
                        });
                    }
                };
            }
        };

        Townhall.closePopup_click = function () {
            $("#mask").hide();
            $(".window").hide();
            $("#mask").empty();
        };

        Townhall.submit_click = function (e) {
            var actionurl = $(".popup_submit #actionUrl").val();
            var emailaddress = $(".popup_email").val();

            if ($(".popup_email").length > 0) {
                if (isValidEmailAddress(emailaddress)) {
                    var selected = new Array();
                    $("[type=checkbox]:checked").each(function () {
                        selected.push($(this).attr("id"));
                    });
                    selected = selected.slice(selected.pop());
                    var newletters = selected.join(",");
                    var postData = "http://townhall.com/wservices/handlers/newsletters.ashx?email=" + emailaddress + "&lists=" + newletters + "&tid=townhallPopups&ip=" + clientIp;
                    $.post(postData);
                    var signupcookieInfo = { email: emailaddress, newsletters: newletters };
                    $.cookie();
                    if (actionurl.length) {
                        window.location.replace(actionurl);
                    }
                    Townhall.closePopup_click();
                }
                else {
                    alert("Please Enter Valid Email And Resubmit");
                }
            }
            else {
                if (actionurl.length) {
                    window.location.replace(actionurl);
                }
                Townhall.closePopup_click();
            }
        };

        Townhall.assignEventHandlers = function () {
            $("body").on("click", ".popup_close", function (e) { Townhall.closePopup_click(); });
            $("body").on("mouseover", ".popup_submit", function (e) { $(this).css("cursor", "pointer"); });
            $("body").on("mouseover", ".popup_close", function (e) { $(this).css("cursor", "pointer"); });

            $("#mask").click(function () { $(this).hide(); $(".window").hide(); });
            $(window).unload(function () { $.cookie("PopupSession", null); });
            $("body").on("click", ".popup_submit", function (e) { return Townhall.submit_click(e); });
        };

        page_Load = function () {
            Townhall.getPopup();
            Townhall.assignEventHandlers();
            $("input, textarea").placeholder();
        };

        page_Load();
    });
})(jQuery);