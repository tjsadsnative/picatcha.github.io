(function (win) {
    'use strict';

    var $ = win.jQuery;

    $(function () {
        var PB         = win.PB || {},
            iframe     = win.frameElement,
            doc        = win.document,
            dir        = $(iframe).attr('resize') || 'none',
            $html      = $('html'),
            $body      = $(doc.body),
            maxTimeout = 0,
            timeout    = 1000;

        //
        // Function to know if the ad has been loaded and resized
        //
        function notifyAdLoaded() {
            var adTitle  = iframe.getAttribute('id'),
                PBParent = win.top.PB || {},
                options  = win.options || win.gn_ads_opts || {};

            // letting the world know the ad has been loaded
            $(PBParent).trigger(adTitle, [iframe]);

            // triggering the ad
            PBParent.ad.event.trigger(adTitle, options);
            PBParent.ad.event.get(adTitle).loaded = true;
        }

        function resize(e) {
            var height;

            // Resize the iframe
            if (dir === 'height' || dir === 'both') {

                // resize the iframe using its body height for the height
                height = $body.height();

                // sometimes the body width may be zero, in that case
                // use the html height
                if (height === 0) {
                    $(iframe).attr('height', $html.height());
                } else {
                    $(iframe).attr('height', height);
                }
            }

            if (dir === 'width' || dir === 'both') {
                $(iframe).attr('width', $(doc).width());
            }

            // once the ad has been resized, we notify it to the app
            notifyAdLoaded();

            // Now the fun stuff... attempt to re-resize every
            // 'timeout' ms until we hit the 'maxTimeout'
            // this works around cases where the iframe size will
            // change after the page "loads", eg: async loading ads

            if (e) {

                // set a 5 second timeout for 'load' events; no timeout  for 'resize' events
                maxTimeout = (e.type === 'load') ? 5000 : 0;
            }

            if (timeout < maxTimeout) {

                // wait for the current timeout before re-running resize
                setTimeout(resize, timeout);

                // Wait an extra 500ms before the next call
                timeout += 500;
            }
        }

        // if resizing is present and set
        if (dir && dir !== 'none') {

            // if window is already loaded
            if (win.loaded) {
                resize();

            // resize on load
            } else {
                $(win).on('load', resize);
            }

            // listen for resize events
            if ($ && PB) {
                $(PB).on('resize', resize);
            }
        } else {

            // If resizing is absent or turned off
            // set the html and body elements to 100% wide/tall
            // eg: as wide/tall as the iframe itself
            $html.css({
                width : '100%',
                height: '100%'
            });

            $body.css({
                width : '100%',
                height: '100%'
            });
        }
    });

}(window));
