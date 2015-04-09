window.Atlantic = window.Atlantic || {};
window.Atlantic.social = {};

/*
 * Example of binding to a social:share event
 * 
 *   $(document).on("social:share", function(event, data) {
 *       alert(
 *          "Type: " + data.type +
 *          "\nAction: " + data.action +
 *          "\nURL: " + data.url +
 *          "\nHTML: " + $(data.el).html()
 *       );
 *    });
 */

/**
 * Send info to Omniture after a share
 */
$(document).on("social:share", function(event, data) {
    var location, omniData, $articleTools;

    location = 'NA';
    if (data.el !== undefined) {
        var $el = $(data.el);
        var omni = $el.attr('data-omni-click');

        // If omniture click tracking data is on the button
        if (omni !== undefined) {
            $el.click(); // Triggers the omniture click tracking

        // Default tracking behavior
        } else {
            var $articleTools = $el.closest('.article-tools');
            var pageType = $('body').hasClass('article') ? 'article' : 'misc';

            if ($articleTools.hasClass('vertical')) {
                location = 'top';
            } else if ($articleTools.hasClass('horizontal')) {
                location = 'bottom';
            }
            omniData = pageType + data.type + '`' + location + '`' + document.URL;
            window.Atlantic.Omniture.trackLink(omniData);
        }
    }
});

// Make More Button work on touch devices
var toggleShareMenu = function(event){
    var obj = $(event.currentTarget);
    obj.toggleClass('active');
};
$(document).on("touchstart", ".more-btn-container", toggleShareMenu);

Atlantic.social.googlePlusClick = function(data) {

    if (data.state === 'on') {
        $(document).trigger('social:share', [{
            type: 'google',
            action: 'plus',
            url: data.href,
            el: undefined // Google+ doens't return the current element
        }]);
    }
};
Atlantic.social.twitterClick = function(data) {
    $.event.trigger('social:share.tweet', [{
        type: 'twitter',
        action: data.type,
        el: data.target.parentNode
    }]);
 };
Atlantic.social.facebookClick = function (url, el) {
    $.event.trigger('social:share', [{
        type: 'fb',
        action: 'like',
        url: url,
        el: el
    }]);
};
Atlantic.social.linkedInClick = function(url) {
    $(document).trigger('social:share', [{
        type: 'linkedin',
        action: 'share',
        url: url,
        el: undefined // LinkdeIn doens't return the current element
    }]);
};

// Bind to Twitter to Share
if (window.twttr !== undefined) {
    twttr.ready(function (twttr) {
        twttr.events.bind('tweet', Atlantic.social.twitterClick);
    });
}

// Bind to Facebook Like
if (!window.FB || !window.FB.Event) {
    // Hook into the fbAsyncInit function and register our listener there
    var oldFbAsyncInit = (window.fbAsyncInit) ? window.fbAsyncInit : (function() { });
    window.fbAsyncInit = function() {
        oldFbAsyncInit();
        FB.Event.subscribe('edge.create', Atlantic.social.facebookClick);
    };
} else {
    FB.Event.subscribe('edge.create', Atlantic.social.facebookClick);
}

$(document).ready(function () {
    if (window.addthis) {
        addthis.addEventListener('addthis.menu.share', function(evt) {
            $(document).trigger('social:share', [{
                type: 'addthis',
                action: 'share',
                url: undefined,
                el: undefined
            }]);
        });
    }
});

// Make GooglePlusClick accessible 
window["Atlantic.social.googlePlusClick"] = Atlantic.social.googlePlusClick;
window["Atlantic.social.linkedInClick"] = Atlantic.social.linkedInClick;
