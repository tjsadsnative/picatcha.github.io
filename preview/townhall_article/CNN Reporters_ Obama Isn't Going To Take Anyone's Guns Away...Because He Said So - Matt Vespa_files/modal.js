/// <reference path="../lib/jquery/jquery-2.1.0.js" />


$(document).ready(function () {
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });
    var location = "";
    //email contributor modal
    $(".modal-generic-innerwrap").on("click", "#th-btn-email-contributor", function(data) {
        data.preventDefault();
        $.post('/utils/emailmodal?version=2&contributorNamespace=' + window.location, $("#frmEmail").serialize(), function(e) {
            $(".modal-generic-innerwrap").html(e);
            loadjscssfile("https://www.google.com/recaptcha/api.js", "js") //dynamically load and add this .js file
        });
    });
    //email contributor modal button - inside modal
    $("#th-modal-email-contributor").click(function(data) {
        $(".modal-generic-innerwrap").load('/utils/emailmodal?version=2&contributorNamespace=' + window.location, function () {
            loadjscssfile("https://www.google.com/recaptcha/api.js", "js") //dynamically load and add this .js file
        });
    });

    //send to a friend
    $(".modal-email-innerwrap").on("click", "#th-btnSendToFriend", function (data) {
        data.preventDefault();
        $.post('/utils/emailsendtofriendmodal', $("#frmSendToFriend").serialize(), function(data) {
            $(".modal-email-innerwrap").html(data);
            loadjscssfile("https://www.google.com/recaptcha/api.js", "js") //dynamically load and add this .js file
        });
    });
    $(".th-btn-send-to-friend").click(function() {
        var title = $("meta[property='og:title']").attr("content");
        var url = $("meta[property='og:url']").attr("content");
        $(".modal-email-innerwrap").load(encodeURI('/utils/emailsendtofriendmodal?version=2&isScraped=false&contentUrl=' + url + '&title=' + title), function () {
            loadjscssfile("https://www.google.com/recaptcha/api.js", "js") //dynamically load and add this .js file
        }
        );
    });
});
//End of scripts to be loaded on document.ready

//credit to http://www.javascriptkit.com/
function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}