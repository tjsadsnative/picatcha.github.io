/// <reference path="../../lib/jquery/jquery-2.1.0.js" />
jQuery(document).ready(function () {
    var social = jQuery(".th-sharecounts");

    var article = {
        Domain: document.domain,
        Url: social.data("url") || removePaging(document.URL),
        Title: jQuery('meta[property="og:title"]').attr('content') || document.title,
    };

    var btinfo = {
        model: social.data("btmodel"),
        id: social.data("btid"),
    };

    var apiPath = getPath(article.Domain);
    var _path = apiPath;

    function getPath(domain) {
        if (domain.indexOf("townhall.com") > -1) {
            return "http://"+ domain;
        }
        else
        {
            return "http://townhall.com";
        }
    };
    function removePaging(url) {
        var newUrl = url.replace(new RegExp("/\d/$", "i"));
        return newUrl;
    };
    var scJson = {};
    jQuery.post(apiPath + "/api/counts/articleview", article).done(function (data) {
        scJson = data;
        renderCounts(scJson, social);

        //setting hover event
        jQuery(".sc-fb").hover(function () {
            jQuery(this).unbind('mouseenter mouseleave');
            jQuery.getJSON("https://api.facebook.com/method/links.getStats?urls=" + article.Url + "&format=json").done(function (fb) {
                var cnt = fb[0].share_count;
                var commentCounts = fb[0].comment_count;
                var currentCount = 0;
                if (scJson != null) {
                    currentCount = getCount(scJson.ShareCount, "Facebook");
                }

                if (cnt !== currentCount) {
                    var shareCounts = {
                        Url: article.Url,
                        Domain: article.Domain,
                        Title: article.Title,
                        CommentCounts: commentCounts,
                        ShareCount: [{ Type: "Facebook", Count: cnt, Css: "sc-fb" }]
                    };
                    updateThCount(shareCounts);
                }
            });
        });        
        jQuery(".sc-tw").hover(function () {
            jQuery(this).unbind('mouseenter mouseleave');
            jQuery.ajax({ url: 'http://cdn.api.twitter.com/1/urls/count.json?url=' + article.Url, dataType: 'jsonp' })
                .done(function (tw) {
                    var currentCount = 0;
                    var cnt = tw.count;
                    if (scJson != null) {
                        currentCount = getCount(scJson.ShareCount, "Twitter");
                    }

                    if (cnt !== currentCount) {
                        var shareCounts = {
                            Url: article.Url,
                            Domain: article.Domain,
                            Title: article.Title,
                            ShareCount: [{ Type: "Twitter", Count: cnt, Css: "sc-tw" }]
                        };
                        updateThCount(shareCounts);
                    }
                });
        });
    });
    
    //setting click event
    jQuery(".sc-fb").click(function (event) {
        event.preventDefault();
        var fbsharer = "http://www.facebook.com/sharer.php?u=" + article.Url + "&t=" + encodeURIComponent(article.Title);
        var sTop = window.screen.height / 2 - (218);
        var sLeft = window.screen.width / 2 - (313);
              
        window.open(fbsharer, 'sharer', 'toolbar=0,status=0,width=626,height=436,top=' + sTop + ',left=' + sLeft);

        if (btinfo.id !== undefined) {
            _bt.track("shared", {
                model: btinfo.model,
                id: btinfo.id,
                social_network: "facebook"
            });
         
        }

    });
    jQuery(".sc-tw").click(function (event) {
        event.preventDefault();
        var sTop = window.screen.height / 2 - (218);
        var sLeft = window.screen.width / 2 - (313);
        var twsharer = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(article.Title) + "&url=" + article.Url;
        window.open(twsharer, 'sharer', 'toolbar=0,status=0,width=626,height=436,top=' + sTop + ',left=' + sLeft);


        if (btinfo.id !== undefined) {
            _bt.track("shared", {
                model: btinfo.model,
                id: btinfo.id,
                social_network: "twitter"
            });
         
        }

    });
    
    var renderCounts = function (data, list) {
        var fb = 0, tw = 0, total = 0;

        //var arrow = "<span class='fa-arrow-left'></span>"

        if (data != null) {
            fb = getCount(scJson.ShareCount, "Facebook") || 0;
            tw = getCount(scJson.ShareCount, "Twitter") || 0;
            total = (fb + tw);
            var scfb = list.find(".sc-fb-count i");
            var scTotal = list.find(".sc-counts span");
            
            scfb.html(abbreviate(fb, 0, false, false));
            scTotal.html(abbreviate(total, 0, false, false));

            if (fb > 0) {
                scfb.parent().show();
            }
            if (total > 1) {
                scTotal.parent().show();
            }
        }
        
    };
    var updateThCount = function (shareCounts) {
        var serviceUrl = apiPath + "/api/counts/update";
        jQuery.post(serviceUrl, shareCounts);
    };
    var getCount = function (array, lookup) {
        if (array != null) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                if (item.Type === lookup) {
                    return item.Count;
                }
            }
        }

    };

    var abbreviate = function (number, maxPlaces, forcePlaces, forceLetter) {
        number = Number(number);
        forceLetter = forceLetter || false;
        if (forceLetter !== false) {
            return annotate(number, maxPlaces, forcePlaces, forceLetter);
        }
        var abbr;
        if (number >= 1e12) {
            abbr = 'T';
        }
        else if (number >= 1e9) {
            abbr = 'B';
        }
        else if (number >= 1e6) {
            abbr = 'M';
        }
        else if (number >= 1e3) {
            abbr = 'K';
        }
        else {
            abbr = '';
        }
        return annotate(number, maxPlaces, forcePlaces, abbr);
    };
    var annotate = function (number, maxPlaces, forcePlaces, abbr) {
        // set places to false to not round
        var rounded = 0;
        switch (abbr) {
            case 'T':
                rounded = number / 1e12;
                break;
            case 'B':
                rounded = number / 1e9;
                break;
            case 'M':
                rounded = number / 1e6;
                break;
            case 'K':
                rounded = number / 1e3;
                break;
            case '':
                rounded = number;
                break;
        }
        if (maxPlaces !== false) {
            var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$');
            if (test.test(('' + rounded))) {
                rounded = rounded.toFixed(maxPlaces);
            }
        }
        if (forcePlaces !== false) {
            rounded = Number(rounded).toFixed(forcePlaces);
        }
        return rounded + abbr;
    };
});


