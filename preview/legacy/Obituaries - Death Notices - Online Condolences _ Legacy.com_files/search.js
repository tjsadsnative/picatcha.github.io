var heroSearchBoxes = document.querySelectorAll('.HeroSearch_Search--TextBox');
var keywordSearchBoxes = document.querySelectorAll('.KeywordSearch_TextBox');
var searchUrl = '/ns/obitfinder/obituary-search.aspx?daterange=Last30Days&firstname=';

function HeroSearchRedirect() {
    ClearPlaceHolders();
    var firstname = CapitalizeEachWord(heroSearchBoxes[0].value);
    var lastname = CapitalizeEachWord(heroSearchBoxes[1].value);
    window.location = searchUrl + firstname + '&lastname=' + lastname;
}

function KeywordSearchRedirect() {
    ClearPlaceHolders();
    var firstname = CapitalizeEachWord(keywordSearchBoxes[0].value);
    var lastname = CapitalizeEachWord(keywordSearchBoxes[1].value);
    var keyword = keywordSearchBoxes[2].value;
    window.location = searchUrl + firstname + '&lastname=' + lastname + '&keyword=' + keyword;
}

function ClearPlaceHolders() {
    var placeholders = document.querySelectorAll('.placeHolder');
    for (var i = 0; i < placeholders.length; ++i) {
        var placeholder = placeholders[i];
        placeholder.value = "";
    }
}

function CapitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

(function () {
    var funcToUse;

    // Listener for the keypress event
    var listener = function (e) {
        if (e.keyCode === 13) {
            funcToUse();
        }
    }

    // Add event listeners for focus and blur events to search boxes

    for (var i = 0; i < heroSearchBoxes.length; i++) {
        // IE8 check
        if (document.addEventListener) {
            heroSearchBoxes[i].addEventListener('focus', function () {
                funcToUse = HeroSearchRedirect;
                document.addEventListener('keydown', listener);
            });
            heroSearchBoxes[i].addEventListener('blur', function () {
                document.removeEventListener('keydown', listener);
            });
        }
        else // is IE8
        {
            heroSearchBoxes[i].attachEvent('onfocus', function () {
                funcToUse = HeroSearchRedirect;
                document.attachEvent('onkeydown', listener);
            });
            heroSearchBoxes[i].attachEvent('onblur', function () {
                document.detachEvent('onkeydown', listener);
            });
        }
    }

    for (var i = 0; i < keywordSearchBoxes.length; i++) {
        if (document.addEventListener) {
            keywordSearchBoxes[i].addEventListener('focus', function () {
                funcToUse = KeywordSearchRedirect;
                document.addEventListener('keydown', listener);
            });
            keywordSearchBoxes[i].addEventListener('blur', function () {
                document.removeEventListener('keydown', listener);
            });
        }
        else
        {
            keywordSearchBoxes[i].attachEvent('focus', function () {
                funcToUse = KeywordSearchRedirect;
                document.attachEvent('keydown', listener);
            });
            keywordSearchBoxes[i].attachEvent('blur', function () {
                document.detachEvent('keydown', listener);
            });
        }
    }
})(this);