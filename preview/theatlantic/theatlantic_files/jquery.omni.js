window.Atlantic = window.Atlantic || {};
window.Atlantic.Omniture = window.Atlantic.Omniture || {};

$(function() {

    if(/_debug_omniture/.test(window.location.search)) {
        Atlantic.Omniture.trackLink = function(link) {
            alert("Omniture test:" + link);
            return false;
        };
    } else {
        Atlantic.Omniture.trackLink = function(link, external, async) {
            if (typeof external === "undefined") { external = false; }
            // Omniture blocks, so do it after any user facing javascript happens
            var run = function() {
                try {
                    if (external === true) {
                        var s = s_gi(s_account);
                        s.events = "event1";
                        s.tl(true, 'o',  link);
                    } else {
                        Atlantic.Utils.createCookie('omni_click', link);
                    }
                } catch(e) {
                    // Too bad, no tracking
                    if(window.console && window.console.log) {
                        console.log('Omniture Error ' + e);
                    }
                }
            };
            if(async) {
                window.setTimeout(run, 10);
            } else {
                run();
            }
            return true;
        };
    }

    /*
    Parser

    Commands: 
        @property -> element[@property]
        t -> text of element
        l.prop -> window.location[prop]
        w.prop -> window[prop]
        $ -> Element position
        $(filter) -> Element position of parent filter
        r'Raw' -> "Raw"
    */

    var parse = (function() {
        var rx = /(@)([^,]+)|(e|r)'([^']+)'|(l|w).([\w]+)|(\$|t)([^,]*)/;
        return function(raw) {
            var commands = [];
            while(true) {
                var pieces = rx.exec(raw);
                if(pieces === null) return commands;
                for(var i = 1; i < pieces.length; i += 2) {
                    if(pieces[i]) {
                        commands.push([pieces[i], pieces[i+1]]);
                        break;
                    }
                }
                // Strip the delimiter out as well, which was arbitrarily 
                // decided to be a comma
                raw = raw.substr(pieces[0].length + 1);
            }
        };
    })();

    function evaluate_cmd(elem, command, argument) {
        switch(command) {
            case "@":
                return $(elem).attr(argument);

            case "t":
                if(argument) {
                    return $(argument).text();
                }
                return $(elem).text();

            case "l":
                return window.location[argument];

            case "$":
                var $e = $(elem);
                if(argument) {
                    $e = $e.parents(argument).slice(0,1);
                }
                return $e.index();

            case "r":
                return argument;

            default:
                if(window.console !== undefined && window.console.log) {
                    console.log("Invalid command `"+command+"`.");
                } 
                return "";
        }
    }

    function find_next_omni_click(elem) {
        var expr;
        // Trace through and find the element
        while(elem.tagName !== "HTML") {
            expr = $(elem).attr('data-omni-click');
            if(expr !== undefined) break;
            elem = elem.parentNode;
        }

        // Are we inheriting?
        if(/^inherit/.test(expr)) {
            // Do we have a reference?
            var search_elem = elem.parentNode;
            var selector = /inherit:(.*)/.exec(expr);
            if( selector !== null) {
                // Grab the element from the selector
                var $s = $(selector);
                search_elem = $s.length === 0 ? document.body : $s[0];
            } 
            expr = find_next_omni_click(search_elem).expr;
        }
        return {elem: elem, expr: expr};
    }

    var check_domain = new RegExp("^(((http|https):|())//" + document.location.host + "|([.]{0,2})/[^/])", "i");
    var onDataOmniClick = function(e) {
        var q = find_next_omni_click(e.target);
        var elem = q.elem,
            expr = q.expr;


        if (expr === undefined) {
            return;
        }

        // We only accept clicks on anchor tags, unless we manually trigger the 
        // click event with JavaScript
        if (elem.tagName !== 'A' && e.isTrigger !== true) {
            return;
        }

        // Parse the commands from the data string
        var commands = parse(expr);

        // Are we external?
        var external = false;
        if ($(e.target).closest("a").attr("href") !== undefined) {
            external = ($(e.target).closest("a").attr("href").match(check_domain) === null);
        }

        // Evaluate the commands
        var response = [];
        for(var i = 0; i < commands.length; i++) {
            var c = commands[i][0],
                arg = commands[i][1];
            response.push( evaluate_cmd.call(e.target, elem, c, arg) );
        }
        var r = response.join('`');

        if(!Atlantic.Omniture.trackLink(r, external, false)) {
            // Check if we are actually continuing
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // On body click, check to see if we need to track links
    // An alternative event for the cases where event.preventDefault() is
    // called on a link (e.g. for facebook sharer.php)
    $(document.body).on('click omniclick.omniture', '[data-omni-click]', onDataOmniClick);
});
