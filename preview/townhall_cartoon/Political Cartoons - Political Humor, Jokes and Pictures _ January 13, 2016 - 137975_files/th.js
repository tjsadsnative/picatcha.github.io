/// <reference path="../lib/jquery/jquery-2.1.0.js" />
//global namespace
var townhall = {};

//DOM event handling - on ready
$(document).ready(function () {
    //STICKY AD
    var stickyAd = $(".sticky-ad");
    var stickyAdReference = $(".sticky-reference").css("position", "relative");
    var footer = $(".footer-links");
    
    $(window).scroll(function() {
        if (stickyAd.length && stickyAdReference.length) {
            var footerOffsetTop = footer.offset().top;
            var scrolltop = $(this).scrollTop();

            if ((scrolltop >= stickyAdReference.offset().top)) {
                stickyAd.css("position", "fixed").css("top", "10px");
                //console.log("stickyad sliding")

            }
            if ((scrolltop < stickyAdReference.offset().top)) {
                stickyAd.css("position", "relative").css("top", "");
                //console.log("stickyad locked!")
            }
            if (scrolltop > footerOffsetTop-275) {
                stickyAd.css("position", "absolute").css("top", footerOffsetTop - 275);
                //console.log("thebottom")
            }
        }
    });
    //LAZY LOAD HOMEPAGE IMAGES
    if (jQuery().lazyload) {
        $('img.lazy').lazyload({
            threshold: 200,
            failure_limit: 10
        });
    }
    //BREAKING NEW WIDGET
    $('.carousel').carousel({
        interval: false
    });
    //POST FOR PULSE WIDGET
    $(".box-body-pulse").on("click", "#th-pulse-widget-submit", function (e) {
        e.preventDefault();
        $.post("/pulsewidget/pollresult", $("#frm-pulse-widget").serialize(), function(data) {
            $(".box-body-pulse").html(data);
        });
    });
    $('.tippy').tooltip();
    
    //conservative investor widget/issues page partner links
    //$(".prt").click(function (e) {
    //    e.preventDefault();

    //    var $hash = $(this).attr("hash-code");
    //    var $partner = $(this).attr("partner");
    //    var url = $(this).attr("href");
    //    var link = "partner?lt=1&s=1&h=" + $hash + "&p=" + $partner + "&url=" + url;
    //    //this.href = link;
    //    window.open(link);
    //});
    $(".trk").click(function () {
        //alert("tracking");
        var clickObject = {
            Url: this.href,
            RefSystemObjectId: $(this).attr("ob"),
            RefSystemObjectTypeId: $(this).attr("ot"),
            ClickTrackingLocationType: $("#location").val()
        };
        //alert(clickObject);
        $.ajax({
            cache: false,
            type: "POST",
            url: "/tracking/click",
            data: JSON.stringify(clickObject),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
        return true;
    });
    //header search
    $(".th-search-button").click(function () {
        var searchTerm = $("#search").val();
        //alert(searchTerm);
        document.location.href = "http://townhall.com/search2.aspx?SearchSection=all&SearchWord=" + searchTerm;
    });
    //check for breaking news
    $("#alert-bar").load("/mservices/alertbar/get");
    
    //check for mobile
    $("#mobile-view").load("http://townhall.com/viewswitcher",
        
       function () {
           $(".switch-to-mobile").click(function (event) {
               event.preventDefault();
               $.removeCookie('nomobile2', { domain: '.townhall.com' });
               window.location = "http://m.townhall.com";
           });
       }
     );

    Sharerer();
    Sharerer.load();

}); //End document.ready



Sharerer = function () {
    Sharerer.url = "";
    Sharerer.title = "";
    Sharerer.top = window.screen.height / 2 - (218);
    Sharerer.left = window.screen.width / 2 - (313);
    Sharerer.height = 436;
    Sharerer.width = 626;
    Sharerer.shareType = "";
    Sharerer.shareUrl = "";

    Sharerer.load = function () {
        $(".site-social-icons").on("click", ".sharerer", function (e) {
            e.preventDefault();

            Sharerer.shareType = $(this).data("share-type");
            Sharerer.url = $(this).parent().data("url");
            Sharerer.title = $(this).parent().data("title");

            switch (Sharerer.shareType) {
                case "facebook":
                    shareUrl = "http://www.facebook.com/sharer.php?u=" + Sharerer.url;
                    break;
                case "twitter":
                    shareUrl =  "https://twitter.com/intent/tweet?text=" + encodeURIComponent(Sharerer.title) + "&url=" + Sharerer.url;
                    Sharerer.height = 276;
                    break;
                case "google":
                    shareUrl = "https://plus.google.com/share?url=" + Sharerer.url;
                    Sharerer.width = 600;
                    Sharerer.width = 600;
                    break;
                default:
            }      

            window.open(shareUrl, "sharer", "toolbar=0,status=0,width=" + Sharerer.width + ",height=" + Sharerer.height + ",top=" + Sharerer.top + ",left=" + Sharerer.left);
        });
    };
};

$.postify = function (value) {
    var result = {};

    var buildResult = function (object, prefix) {
        for (var key in object) {

            var postKey = isFinite(key)
                ? (prefix !== "" ? prefix : "") + "[" + key + "]"
                : (prefix !== "" ? prefix + "." : "") + key;

            switch (typeof (object[key])) {
                case "number":
                case "string":
                case "boolean":
                    result[postKey] = object[key];
                    break;
                case "object":
                    if (object[key].toUTCString)
                        result[postKey] = object[key].toUTCString().replace("UTC", "GMT");
                    else {
                        buildResult(object[key], postKey !== "" ? postKey : key);
                    }
            }
        }
    };

    buildResult(value, "");

    return result;
};

townhall.createActivity = function (activity) {
    var serviceUrl = "http://townhall.com/mservices/Activity/create";
    $.post(serviceUrl, activity);
};