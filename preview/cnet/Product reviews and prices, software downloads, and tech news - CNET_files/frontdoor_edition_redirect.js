// TODO: Please kill this file some day.
// early JS redirect to proper edition FD if FD URL and preferred edition cookie don't match
(function () {
    var path = window.location.pathname;
    var frontDoorPaths = [ '/', '/uk/', '/au/', '/es/' ];

    // only activate on front doors
    if(frontDoorPaths.indexOf && frontDoorPaths.indexOf(path) >= 0) {
        // Get the edition cookies.
        var preferredEdition = /fly_preferred_edition=../.exec(document.cookie);
        var defaultEdition = /fly_default_edition=../.exec(document.cookie);

        // Get the edition values out of the cookies.
        if(preferredEdition) {
            preferredEdition = preferredEdition[0].split("=")[1];
        }

        if(defaultEdition) {
            defaultEdition = defaultEdition[0].split("=")[1];
        }

        // Redirect only if the user has a preferred edition or their default edition is not "us".
        if(preferredEdition || (defaultEdition && defaultEdition !== 'us')) {
            var edition = preferredEdition || defaultEdition;

            if (frontDoorPaths.indexOf('/' + edition.trim() + '/') >= 0 || edition == 'us') {
                var editionPath = (edition == "us") ? "/" : "/" + edition + "/";

                if (path != editionPath) { // attempting to view FD of non-preferred edition; redirect
                    window.location = editionPath + window.location.search + window.location.hash;
                }
            }
        }
    }
})();