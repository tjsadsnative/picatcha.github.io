/**
 * Comment counting script.
 * This assumes `disqus_shortname` is set somewhere higher on the page.
 *
 * Warning: madness ensures below.
 *
 * Disqus gives us very little control over the formatting of the comment count.
 * So as we fire their script, we rewrite their displayCount method on the fly.
 *
 * To use it, give take links to a post and add either...
 * 1. `#disqus_thread` to the href
 * 2. data-disqus-identifier="unique-id-passed-to-disqus"
 *
 * The inner content of the link should be the default text - what appears if there
 * are no comments and before the comment counts are retrieved.
 *
 * Then add `data-disqus-template="{} comments"`, where `{}` will be replaced by
 * the comment count. This lets use format the comments different on different design elements as needed.
 *
 */

(function() {

    // Abort if there's no shortname
    if (window.disqus_shortname === undefined){
        if (window.console) {
            window.console.error("Disqus name is not defined.")
        };
        return;
    }

    // The Disqus stuff
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';

    // Hook into both the standard and IE script ready events.
    s.onload = s.onreadystatechange = function(e) {

        // Abort if we're not really ready. This throws errors in IE.
        if (window.DISQUSWIDGETS === undefined) {
            return false;
        }

        window.DISQUSWIDGETS.displayCount = function(data) {
            var resp, counter_index, comments, template, html;

            // Roll through the data their API returns. Since they batch their
            // request into groups of ten, we don't actually know the order they'll
            // come back in.
            for (var i = data.counts.length - 1; i >= 0; i--) {
                resp = data.counts[i];
                comments = resp.comments; // And how many comments it has
                if (comments > 0) { // Only change things if there's actually a comment
                    // Looping through, in case the same disqus-identifier is used twice
                    $('[data-disqus-identifier="'+resp.id+'"]').each(function(j, counter) {
                        // There can be a specific template for singular.
                        if (comments === 1){
                            template = $(counter).attr('data-disqus-format-singular') || $(counter).attr('data-disqus-format');
                        } else {
                            template = $(counter).attr('data-disqus-format');
                        }

                        if (template === undefined) {
                            return;
                        }
                        html = template.replace("{}", comments);
                        $(counter).html(html);
                    });
                }
            }
        };

    };

    // Append this last, to avoid a race condition.
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

}());
