///**Check this link for usage**//
//https://github.com/carhartl/jquery-cookie
//$.cookie('test', '10'); To Set Cookie
//$.cookie('test'); Syntax For get Cookie

/// <reference path="../lib/jquery/jquery-1.7.1.min.js" />
/// <reference path="../lib/jquery/jquery.cookie.js" />

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//READ ME!!
//http://www.pauljoyceuk.com/codex/2011/jquery-is-not-a-function/
//WordPress loads jQuery in a ‘no-conflicts’ mode to significantly reduce the likelihood of it conflicting with other third party libraries that a owner may install on their blog/site.
//In ‘no conflict’ mode the $ shortcut is disabled, so you must replace it with the word ‘jQuery’ (notice the capitalised Q).
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var thBaseUrl = "http://townhall.com";
if (window.location.href.indexOf("dev.") > -1) {
    thBaseUrl = "http://dev.townhall.com";
}

jQuery(function () {
    CapturatorLoader();
});

CapturatorLoader = function () {
    jQuery(".capturator-main-container").each(function () {
        Capturator();

        Capturator.container = jQuery(this);
        Capturator.capturatorInfo.systemObjectId = Capturator.container.data("soid");
        Capturator.capturatorInfo.systemObjectType = Capturator.container.data("sot");
        
        if (Capturator.container.data("pos") != undefined) {
            Capturator.capturatorInfo.position = Capturator.container.data("pos");
        }

        Capturator.getCookie();
        Capturator.getMe(Capturator.container);
        
        Capturator.container.on("click", ".submit-capturator", function (e) {
            Capturator.submitMe(e);
        });
    });
};

Capturator = function() {
    Capturator.getCookie = function () {
        var cookie = jQuery.cookie("th-cap-offer");

        if (cookie != undefined) {
            var cookieJson = jQuery.parseJSON(cookie);

            this.capturatorInfo.userId = cookieJson.userId;
            this.capturatorInfo.email = cookieJson.email;
            this.capturatorInfo.offersSeen = cookieJson.offersSeen;
        }
    };

    Capturator.setCookie = function () {       
        jQuery.cookie("th-cap-offer", JSON.stringify(this.capturatorInfo), { expires: 365, path: "/" });
    };

    Capturator.getMe = function (container) {
        var capturator = this;

        container.load(thBaseUrl + "/mservices/capturator/get", 
            jQuery.postifyMe(capturator.capturatorInfo),
            function (response, status, xhr) {
                if (status != "error" && xhr.status != 400) {
                    var offerId = container.find(".cap-offer-id").val();
                    var offers = capturator.capturatorInfo.offersSeen;
                    var isNew = true;
          
                    for (var i = 0; i < offers.length; i++) {
                        if (offers[i].offerId == offerId) {
                            isNew = false;

                            offers[i].seenCount++;
                        }
                    }

                    if (isNew) {
                        var offerInfo = capturator.userOfferInfo;

                        offerInfo.offerId = offerId;
                        offerInfo.seenCount = 1;

                        capturator.capturatorInfo.offersSeen.push(offerInfo);
                    }

                    capturator.setCookie(capturator.capturatorInfo);

                    jQuery.get(thBaseUrl + "/mservices/kpi/action", 
                        { 
                            "title": container.find(".cap-name").val(), 
                            "url": capturator.capturatorInfo.url,
                            "act": "8", 
                            "tlist": null 
                        });
                }
            });
    };

    Capturator.submitMe = function (e) {
        var capturator = this;
        var $container = jQuery(e.currentTarget).parentsUntil(".capturator-main-container");
        var email = $container.find(".email-address-capturator").val();
        //{"UserId":266472,"Email":"1@1.com","Domain":null,"Url":null,"SystemObjectId":0,"SystemObjectType":0,"OffersSeen":null,"IsSuccess":true,"Status":"Failed - Duplicate Lead","Position":0}
        if (isValidEmail(email)) {
            jQuery.post(thBaseUrl + "/mservices/capturator/vote",
                $container.serialize())
            .done(function (capturatorInfo) {
                if (capturatorInfo.IsSuccess) {
                    capturator.capturatorInfo.userId = capturatorInfo.UserId;
                    capturator.capturatorInfo.email = email;

                    capturator.setCookie();
                    if (capturatorInfo.Status === "1") {
                        //log conversion
                        jQuery.get(thBaseUrl + "/mservices/kpi/action",
                            {
                                "title": $container.find(".cap-name").val(),
                                "url": capturator.capturatorInfo.url,
                                "act": "9",
                                "tlist": null
                            });
                    }
                    
                    $container.find(".capturator-thankyou").show();
                    $container.find(".capturator-form").hide();
                    $container.find(".capturator-disclaimer").hide();
                }
            });
        } else {
            //consider using bootstrap/toastr alert in the future
            alert("Please enter a valid email address");
        }
    };

    Capturator.container = "";

    Capturator.capturatorInfo = {
        userId: 0,
        email: "",
        domain: location.hostname,
        url: location.href,
        offersSeen: [],
        systemObjectId: 0,
        systemObjectType: "",
        position: ""
    };

    Capturator.userOfferInfo = {
        offerId: 0,
        seenCount: 0
    };

    Capturator.position = {
        bodyLarge: 1,
        bodySmall: 2,
        sidebar: 3,
        embed: 4,
        gathering: 5
    };
};

//isValidEmail and postify exist in th.js but I need this to be more self-contained for non TH sites
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

    return pattern.test(emailAddress);
}

jQuery.postifyMe = function (value) {
    var result = {};

    var buildResult = function (object, prefix) {
        for (var key in object) {

            var postKey = isFinite(key)
                ? (prefix != "" ? prefix : "") + "[" + key + "]"
                : (prefix != "" ? prefix + "." : "") + key;

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
                        buildResult(object[key], postKey != "" ? postKey : key);
                    }
            }
        }
    };

    buildResult(value, "");

    return result;
};
