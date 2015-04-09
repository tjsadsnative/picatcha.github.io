/**
 * Open share popups on links with data-share attribute.
 * Ported from django-atlantic
 */

window.Atlantic = window.Atlantic || {};
Atlantic.SimpleShare = Atlantic.SimpleShare || {};

/**
 * There are two ways that networks can be referenced.
 *
 *  - As an object. This will create a popup window based on an underscore
 *    template. This object should contain the following keys:
 *      * `url` -- an underscore template of the share network
 *      * `width`/`height` -- each corresponding the size of the popup window
 *
 *  - As a function. This is a callback that receives a data object.
 */
Atlantic.SimpleShare.networks = {
    "facebook": function (data) {
        // Fallback to sharer.php if FB isn't available.
        if (typeof FB === "undefined") {
            Atlantic.SimpleShare.openWindow({
                "url": _.template("https://www.facebook.com/sharer/sharer.php?u=<%= url %>"),
                "width": 626,
                "height": 436
            }, data);
            return;
        }

        var params = {
            method: "feed",
            display: "popup",
            link: data.url
        };

        var fbMappings = {title: "name", dek: "description", image: "picture"};
        for (var key in fbMappings) {
            if (data[key]) {
                params[fbMappings[key]] = data[key];
            }
        }

        FB.ui(params);
    },
    "twitter": {
        "url": _.template("https://twitter.com/share?text=<%= text %>&url=<%= url %><% if (via) { %>&via=<%= via %><% } %>"),
        "width": 600,
        "height": 250
    },
    "googleplus": {
        "url": _.template("https://plus.google.com/share?url=<%= url %>"),
        "width": 500,
        "height": 600
    },
    "linkedin": {
        "url": _.template("http://www.linkedin.com/shareArticle?mini=true&url=<%= url %>"),
        "width": 520,
        "height": 570
    },
    "reddit": {
        "url": _.template("https://www.reddit.com/submit?url=<%= url %>"),
        "width": 900,
        "height": 600
    },
    "instapaper": {
        "sameWindow": true,
        "url": _.template("http://www.instapaper.com/hello2?url=<%= url %>"),
        "width": 900,
        "height": 600
    },
    "pocket": {
        "url": _.template("https://getpocket.com/edit.php?url=<%= url %>"),
        "width": 900,
        "height": 600
    },
    "tumblr": {
        "url": _.template("https://www.tumblr.com/share/link?url=<%= url %><% if (text) { %>&name=<%= text %><% } %>"),
        "width": 900,
        "height": 600
    },
    "pinterest": {
        "url": _.template("http://www.pinterest.com/pin/create/button/?url=<%= url %>&description=<%= text %><% if (image) { %>&media=<%= image %><% } %>"),
        "width": 900,
        "height": 600
    },
    "whatsapp": {
        "url": _.template("whatsapp://send?text=<%=text + ' ' + url %>"),
        "width": 900,
        "height": 600
    },
    "email": function(data) {
        var sender = "The Atlantic";
        if (window.location.host.match("citylab.com")) {
            sender = "CityLab";
        }
        window.location.href = "mailto:?subject=" + sender + ": " + data.text +
            "&body=Read this:%0A" + data.url;
    },
    "print": function(data) { window.print(); }
};

Atlantic.SimpleShare.openWindow = function (network, data) {
    var url = network.url(data);
    if (network.sameWindow){
        window.location.href = url;
    }else{
        window.open(url, "share", "width=" + network.width + ",height=" + network.height + ",top=100,left=100");
    }
};

(function($) {
    $(document).on('click tap', '[data-share]',
        function(e) {
        var $this = $(this);
        var network_name = $this.data("share");
        var network = Atlantic.SimpleShare.networks[network_name];
        var data = {
            'url': $this.data('shareUrl') || window.location.href,
            'text': $this.data('shareText') || document.title,
            'title': $this.data('shareTitle'),
            'via': $this.data('shareVia'),
            'dek': $this.data('shareDescription'),
            'image': $this.data('shareImage')
        };
        if (typeof network === "function") {
            network(data);
        } else if (typeof network === "object") {
            Atlantic.SimpleShare.openWindow(network, data);
        }

        return false;
    });
})(jQuery);
