(function ($) {

    var humanize = function(n) {
        if (n >= 10000000) {
            return (n / 1000000).toFixed() + "m";
        } else if (n >= 1000000) {
            return (n / 1000000).toFixed(1) + "m";
        } else if (n >= 10000) {
            return (n / 1000).toFixed() + "k";
        } else if (n >= 1000) {
            return (n / 1000).toFixed(1) + "k";
        }
        return n.toFixed();
    };

    var displayShareCount = function(fb_json, twitter_json) {
        var fb_count = +fb_json[0].shares || 0;
        var twitter_count = +twitter_json[0].count || 0;
        var total_count = fb_count + twitter_count;
        if (total_count > 0) {
            $button = $('.article-social-icons .share-count');
            var share_text = (total_count == 1)? "Share": "Shares";
            $button.html("<big>" + humanize(total_count) + "</big> " + share_text);
            $button.css('display', 'block');
        }
    };

    // If the full size version of the FB icon is visible, go ahead and look up our share count
    if ($('.article-social-icons .facebook span').is(':visible')) {
        var canonical_url = $("link[rel='canonical']").attr("href");
        var fb_api_url = 'http://graph.facebook.com/?id=' + encodeURIComponent(canonical_url);

        var og_url = $("meta[property='og:url']").attr("content");
        var twitter_api_url = 'http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=' +
            encodeURIComponent(og_url);

        $.when($.getJSON(fb_api_url), $.getJSON(twitter_api_url)).done(displayShareCount);
    }

})($);
