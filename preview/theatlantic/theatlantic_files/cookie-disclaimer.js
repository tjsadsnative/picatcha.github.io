/**
 * Shows cookie disclaimer to EU users.
 *
 * ?debug_cookie_disclaimer=1 works too.
 */
(function($) {

    var EU_COUNTRIES = [
        "AUS", // Austria
        "BEL", // Belgium
        "BGR", // Bulgaria
        "HRV", // Croatia
        "CYP", // Cyprus
        "CZE", // Czech Republic
        "DNK", // Denmark
        "EST", // Estonia
        "FIN", // Finland
        "FRA", // France
        "DEU", // Germany
        "GRC", // Greece
        "HUN", // Hungary
        "IRL", // Ireland
        "ITA", // Italy
        "LVA", // Latvia
        "LTU", // Lithuania
        "LUX", // Luxembourg
        "MLT", // Malta
        "NLD", // The Netherlands
        "POL", // Poland
        "PRT", // Portugal
        "ROU", // Romania
        "SVK", // Slovakia
        "SVN", // Slovenia
        "ESP", // Spain
        "SWE", // Sweden
        "GBR" // United Kingdom
    ];

    function render() {
        var msgText = "TheAtlantic.com uses cookies to enhance your experience when " +
            "visiting the website and to serve you with advertisements that might interest you. " +
            "By continuing to use this site, you agree to our use of cookies. ";
        var linkText = "Find out more here.";
        var linkUrl = "/privacy-policy/";
        var html = [
            '<div class="cookie-disclaimer">',
                '<div class="wrapper">',
                    '<p>',
                        msgText,
                        '<a href="'+linkUrl+'">' + linkText + '</a>',
                    '</p>',
                    '<button class="accept" data-role="none">Accept cookies</button>',
                '</div>',
            '</div>'
        ].join("");
        var $module = $(html);
        $(".ui-body-c, body").prepend($module);

        // Bind Event
        $module.on("click", "button", function(){
            $module.slideUp(100);
            Atlantic.Utils.createCookie("acceptsCookies", 1, 365);
        });
    }

    /**
     * Check if the user is in an EU country.
     */
    function renderForEuropeans() {

        // This is cached to a cookie so we only ping once per person
        var inEuropeanUnion = Atlantic.Utils.readCookie("inEuropeanUnion");

        if (inEuropeanUnion === null) {  // Not recorded. Look it up.
            $.getJSON("/api/user_country", function(resp){
                var inEuropeanUnion = EU_COUNTRIES.indexOf(resp.country) > -1;
                if (inEuropeanUnion) {
                    Atlantic.Utils.createCookie("inEuropeanUnion", "1", 180);
                    render();
                } else {
                    Atlantic.Utils.createCookie("inEuropeanUnion", "0", 180);
                }
            });
        } else if (inEuropeanUnion === "1") {
            render();
        }
    }

    var alreadyAccepted = Atlantic.Utils.readCookie("acceptsCookies");
    var debug = /\?debug_cookie_disclaimer/.test(window.location.search);
    
    if (debug) {
        render();
    } else if (!alreadyAccepted) {
        renderForEuropeans();
    }

})(jQuery);
