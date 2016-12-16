(function(){
    var $buttons = $("[data-share-url]");
    var $btn, url;
    for (var i = 0; i < $buttons.length; i++) {
        $btn = $buttons.eq(i);
        if ($btn.data("shareUrl").indexOf("utm_source=") === -1) {
            url = $btn.data("shareUrl") + "?utm_source=btn-" + $btn.data("share") + "-" + Atlantic.ab.getGroup("btnutm");
            $btn.data("shareUrl", url);
        }
    }    
}());
