$(document).bind('ad:load', function(event, adPos, w, h, scriptId) {
    var ad = $('#' + scriptId).parent();
    if (!ad.length) {
        return;
    }
    if (adPos == 'in-article') {
        var link = ad.find('a.lightbox');
        var colorBoxOpts = {
            iframe: true,
            transition: 'fade',
            fastIframe: false,
            fixed: true,
            onOpen: function() {
                $('#colorbox').addClass('sponsored');
            },
            onClosed: function() {
                $('#colorbox').removeClass('sponsored');
            }
        };
        // jQuery converts data('lightboxWidth) to a check on the
        // data-lightbox-width attribute.
        var width = link.data('lightboxWidth');
        var height = link.data('lightboxHeight');
        if (width) { colorBoxOpts.width = width; }
        if (height) { colorBoxOpts.height = height; }
        link.colorbox(colorBoxOpts);
    }
});

$(document).ready(function() {

    // Wire up nav-channels on hover, on ie
    if($.browser.msie && $.browser.msie.version < 9) {
        $lis.hover(function hoverIn() {
            $(this).addClass('hovered');
        },
        function hoverOut() {
            $(this).removeClass('hovered');
        });
    }

    // The search bar should wait a beat before hiding again.
    $('#nav-social .search-icon').each(function() {
        var tid = null;
        $(this).hover(function hoverIn() {
            if(tid !== null) {
                window.clearTimeout(tid);
                tid = null;
            }
            $(this).addClass('hovered');
        },
        function hoverOut() {
            if(tid === null) {
                var obj = this;
                tid = window.setTimeout(function() {
                    $(obj).removeClass('hovered');
                    obj = null; // For the love of IE!
                }, 500);
            }
        });
    });
    
    (function() {
        
        var timer;

        var clearTimer = function(src) {
            if (!src) {src = '';}
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };

        var call_omniture = function(nav) {
            // Omniture blocks, so do it after any user facing javascript happens
            window.setTimeout(function() {
                try {
                    var s = s_gi(s_account);
                    s.events = "event1";
                    s.tl(true, 'o', "navopen`" + window.location.pathname + "`" + nav);
                } catch(e) {
                    // Too bad, no tracking
                    if(window.console && window.console.log) {
                        console.log('Omniture Error ' + e);
                    }
                }
            }, 10);
        }        
    })();

    adFunctions();
    setTimeout('adFunctions()', 250);
    setTimeout('adFunctions()', 1000);
    setTimeout('adFunctions()', 3000);
    
    // search
    $("#search #query").val("SEARCH OUR SITE").focus(function(){
        if ($(this).val() == "SEARCH OUR SITE") {
            $(this).val("");
        }
    }).blur(function(){
        if ($(this).val() == "") {
            $(this).val("SEARCH OUR SITE");
        }
    });

    // popular tabs switch 
    $('a.tab').click(function() {
        $('#searched').toggle();
        $('#emailed').toggle();
        return false;
    });
    
    function removeFormLabel(inputBox){
        if ($(inputBox).val().toLowerCase() == $(inputBox).attr('longdesc').toLowerCase()){
            $(inputBox).val('');
            $(inputBox).removeClass('label');
        }
    }
    function addFormLabel(inputBox){
        if ($(inputBox).val().toLowerCase() == ''){
            $(inputBox).val($(inputBox).attr('longdesc'));
            $(inputBox).addClass('label');
        }
    }
    
    //toggle field labels on circ form if it exists
    $("form.labeled input:text").focus(function(){
        removeFormLabel(this);
    });
    
    //Set all unfilled fields to blank before submitting
    $(".labeled").submit(function(event){
        $(this).find("input:text").each(function(){
            removeFormLabel(this);
        });
    });

    $("form.labeled input:text").blur(function(){
        addFormLabel(this);
    });
    $("form.labeled input:text").each(function(){
        addFormLabel(this);
    });


    // Expanding Menus
    $(".expandingMenu .expandingArrow").click(function() {
    
        var shouldOpen = true;
        if ( $(this).hasClass('open') == true ) {
            shouldOpen = false;
        }

        $(".expandingMenu .expandingContent").slideUp(80);
        $(".expandingMenu .expandingArrow").removeClass('open');

        if ( shouldOpen == true ) {
            $(this).parent().find('.expandingContent').slideDown(80);
            $(this).addClass('open');
        }

        return false;
    });

    $(".expandingMenu .expandingContent a").click(function() {
        $(this).parent().parent().parent().find('.expandingTitle').html('Loading...');
    });

    $("html").click(function(){
        $(".expandingMenu .expandingContent").slideUp(80);
        $(".expandingMenu .expandingArrow").removeClass('open');
    });


    // open print links in a new window
    $(".print").click(function(){
        window.open($(".print").attr("href"),'','width=800,height=480,scrollbars,resizable,location=no,menubar=no,toolbar=no');
        return false;
    });
    
    //decode email obfuscation
    if ($(".authorEmail").length){
        $(".authorEmail").each(function(){
            $(this).attr('href',$(this).attr('href').replace(' at ','@'));
        });
    }
    
    /**** functions to toggle through Our Latest Post **/
    if ($("#ourLatestPost").length > 0){
        window.latestOffset = 0;
        latestPostWidth = 335;
        
        //Preload the loading gif to avoid loading delay on click
        var loadingImage = new Image();
        loadingImage.src = 'http://cdn.theatlantic.com/static/front/images/loadingSmall.gif';
    
        //Add function to toggle through Our Latest Post entries
        $("#ourLatestPost .nextEntryLink").live("click", function(){
    
            window.latestOffset++;
            
            $(".promoColumn #olpEntry" + window.latestOffset + "  .nextEntryLink").addClass('olpLoading');
            
            var url = "/widget/recent/" + $("#olpEntry" + window.latestOffset + " .justInUnixDate").html() + "/" + window.latestOffset;
            
            $.getJSON(url,{} ,function(data){
                
                $("#ourLatestPost #olpScroll").append(Utf8.decode(data.output));
                $("#ourLatestPost #olpScroll").animate({
                    marginLeft: '-=' + latestPostWidth + 'px'
                }, 800);
                $(".promoColumn #olpEntry" + window.latestOffset + " .nextEntryLink").removeClass("olpLoading");
            });
            
            if (window.latestOffset == 1){
                $("#olp1 .previousEntryLink").fadeIn();
            }
            setLatestPostTimer();
            return false;
        });
        
        $("#ourLatestPost .previousEntryLink").live("click", function(){
            if (window.latestOffset >= 1){
                window.latestOffset--;
                $("#ourLatestPost #olpScroll").animate({
                    marginLeft: '+=' + latestPostWidth + 'px'
                }, 800);
            }
            setLatestPostTimer();
            return false;
        });
        
        $("#olpEntry1 .previousEntryLink").unbind("click");
        
    
        //Function to update ourlatest post with newest content after a certain amount of time
        function setLatestPostTimer(){
            window.clearTimeout(window.latestPostRefresh);
            window.latestPostRefresh = setTimeout(function() {
                
                var url = "/widget/recent/";
                
                $.getJSON(url,{} ,function(data){
                    if ($(data.output).find(".justInUnixDate").html() > $("#olpEntry1 .justInUnixDate").html()){
                        
                        window.latestOffset = 0;
                        $("#ourLatestPost #olpScroll").animate(
                            {
                            marginLeft:'0px'
                            }, 1000 , function(){
                                $("#ourLatestPost #olpScroll").html(data.output);
                            });
                        
                        
                    }
                    setLatestPostTimer();
                });
            
            }, 300000);
        }
        if ($("#ourLatestPost").length){
            setLatestPostTimer();
        }
    }
    
    //a minor css change for infocus, will remove after next pseudo launch
    $("#inFocusPage .articleContent").first().css("min-height","260px");

    // Wrap chinese characters in <span class="chinese"></span>. see site.js
    var start = (new Date()).getTime();
    if (window.ChineseWrap) {
        var wrap = function(i, el) {
            el.innerHTML = ChineseWrap.wrapTags(el.innerHTML);
        };
        $('.articleContent').each(wrap);
        $('h1.headline').each(wrap);
        $('.hasChinese.postContent').each(wrap);
        $('.hasChinese h3.headline').each(wrap);
    }
    
    var end = (new Date()).getTime();
    if (window.loadTimes && window.loadTimes.js) {
        loadTimes.js.chinese_wrap = (end - start)/1000;
    }    
});
 
function cm8_collapse(){
    $(".adPush").animate({height:'66px'},500);
}
function cm8_click(){
    location.href = $("#FLASH_AD param[name='href']").val();
}
function cm8_expand(){
    $(".adPush").animate({height:'418px'},500);
}


function FLASH_AD_DoFSCommand(command,args) { 
    if (command == "cm8_click") {     
        cm8_click();
    }else if (command == "cm8_collapse") {     
        cm8_collapse();
    }else if (command == "cm8_expand") {     
        cm8_expand();
    }
}

$(".relatedContentVideo .relatedArrowRight").click(function(){
    if ($("#relatedSlideshow").position().left > -(143 * ($("#relatedSlideshow li").length - 4))){
    
        $("#relatedSlideshow").animate({
            left:"-=143"
        }, {
            duration:1000,
            queue: false
        });
    }    
    return false;
});
$(".relatedContentVideo .relatedArrowLeft").click(function(){
    if ($("#relatedSlideshow").position().left < 0){
        $("#relatedSlideshow").animate({
                left:"+=143"
        }, {
            duration:1000,
            queue: false
        });
    }
    return false;
});

function adFunctions() {

    //    Hide tracking pixels
    $(".ad").each(function(i, ad){
        var isInterstitial = $(ad).hasClass('adInterstitial');
        $(ad).find("img").each(function(j, img){
            if( $(img).attr("src") && $(img).attr("src").search("grey.gif") != -1 ) {
                if (isInterstitial) {
                    $(img).hide();
                } else {
                    if ($(ad).hasClass("adBottomboxleft")){
                        $(ad).parent().hide();
                    }
                    $(ad).height(0);
                    // set so we can check whether an ad failed elsewhere
                    $(ad).addClass("adNotLoaded");
                }
            }
            // else if( 
            //     ($(img).width() == 1 && $(img).height() == 1) || 
            //     ($(img).attr('width') == 0 && $(img).attr('width') == 0)
            // ) {
            //     $(img).addClass('trackingPixel');
            // }
        });
    });
}

if (typeof window.Atlantic != 'object') {
    window.Atlantic = {};
}

(function() {
    
    Atlantic.getMaxAdChildSize = function(adElement, sizeIndex) {
        if (!sizeIndex) {
            sizeIndex = {};
        }
        var dimensions = {
            width: 0,
            height: 0
        };

        var adChildElements = ['img', 'embed', 'div', 'a', 'object', 'table', 'iframe'];
        
        var childWidths = [];
        var childHeights = [];
        for (var i = 0; i < adChildElements.length; i++) {
            var elName = adChildElements[i];
            var children = $(adElement).find(elName);
            for (var j = 0; j < children.length; j++) {
                var child = children[j];
                var width = $(child).width();
                var height = $(child).height();
                // Exact match to one of our sizes, no need to go through the rest
                if (sizeIndex[width + 'x' + height] == 1) {
                    return {width: width, height: height};
                }
                childWidths.push(width);
                childHeights.push(height);
            }
        }
        if (childWidths.length && childHeights.length) {
            dimensions.width = Math.max.apply(Math, childWidths);
            dimensions.height = Math.max.apply(Math, childHeights);
        }
        
        return dimensions;
    };
    
    Atlantic.parseDartScriptSz = function(scriptElement) {
        var scriptSrc = scriptElement.attr('src');
        if (!scriptSrc) {return [];}
        var sizesStart = scriptSrc.indexOf('sz=');
        if (sizesStart == -1) {
            return [];
        }
        var semiColonPos = scriptSrc.slice(sizesStart).indexOf(';');
        var sizesEnd = (semiColonPos == -1) ? scriptSrc.length : sizesStart + semiColonPos;
        var sizesStr = scriptSrc.slice(sizesStart + 3, sizesEnd);
        return sizesStr.split(/,/);
    };
    
    var applyCallback = function(callback, status, width, height, adElement) {
        if (typeof callback == 'string') {
            // If the string passed is of the form 'Object.SubObject.function',
            // loop through to get the function object
            var functionParts = callback.split(/\./);
            var i = 0;
            var functionPart = functionParts[i];
            var obj = window[functionPart];
            while (typeof obj == 'object' && i < (functionParts.length - 1)) {
                i++;
                functionPart = functionParts[i];
                obj = obj[functionPart];
            }
            callback = obj;
        } 
        if (typeof callback == 'function') {
            var context = (typeof adElement == 'object' && adElement.length) ? adElement[0] : null;
            callback.apply(context, [status, width, height, context]);
        }
    };
    
    /**
     * Accepts an ad pos and a callback. Once completed calls the callback with
     * three parameters:
     *
     *   status - String; either 'success' or 'failure' - depends on whether
     *            the ad unit was found on the page
     *   width  - Number; undefined if status is 'failure', otherwise width
     *            of ad found
     *   height - Number; Like width, only vertical
     *
     * @String adPos
     * @String|Function callback
     */
    Atlantic.getAdSize = function(adPos, callback, tries) {
        if (!tries) {
            tries = 0;
        }
        
        // Prepends 'ad' and uppercases first letter of adPos
        var id = 'ad' + adPos.charAt(0).toUpperCase() + adPos.slice(1);
        
        if (!$('.' + id).length) {
            applyCallback(callback, 'failure', undefined, undefined);
            return;
        }
        
        var el = $('.' + id);
        if (el.html().search("grey.gif") > -1) {
            applyCallback(callback, 'failure', undefined, undefined);
            return;
        }
        
        var sizes = Atlantic.parseDartScriptSz($('#' + id + 'Script'));
        
        // For fast lookup
        var sizeIndex = {};
        $.each(sizes, function(i, size) {
            sizeIndex[size] = 1;
        });
        
        var dimensions = Atlantic.getMaxAdChildSize(el);
        
        var status;
        var width = dimensions.width;
        var height = dimensions.height;
        
        // Exact match
        if (sizeIndex[ width + 'x' + height ] == 1 ) {
            status = 'success';
        // 0x0, so anything goes
        } else if (sizeIndex['0x0'] == 1 && width > 1 && height > 1) {
            status = 'success';
        // If not dart sz, must be a hard-coded ad so use the width and height we've got
        } else if (!sizes.length && width > 1 && height > 1) {
            status = 'success';
        // tried 20 times, ad is greater than 0
        } else if (tries > 20 && width > 0 && height > 0) {
            status = 'success';
        // tried 20 times, width and/or height = 0
        } else if (tries > 20) {
            status = 'failure';
        // haven't finished trying, let's go at it again
        } else {
            setTimeout(function() {
                Atlantic.getAdSize(adPos, callback, tries+1);
            }, 250);
            return;
        }

        if (status == 'failure') {
            width = undefined;
            height = undefined;
        }
        applyCallback(callback, status, width, height, el);
    };

})();



/**
*
*  UTF-8 data encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Utf8 = {
 
    // public method for url decoding
    decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
 
        while ( i < utftext.length ) {
 
            c = utftext.charCodeAt(i);
 
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
 
        }
 
        return string;
    }
 
}
