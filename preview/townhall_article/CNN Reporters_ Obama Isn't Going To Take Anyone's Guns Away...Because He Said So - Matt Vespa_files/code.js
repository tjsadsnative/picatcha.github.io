/////////////Animation

function startAd() {
//

    /*========================  CLICKTAG  =============================*/

    // var clickTag = "http://www.merrilledge.com/";
    // var adBtn = document.getElementById("ad");

    // function OPENW(){
    //     window.open(clickTag);
    // }

    // adBtn.addEventListener("click", OPENW, false);
    /*================================================================*/
    var screen = document.getElementById('screen');

    //Set positions and attributes
     TweenLite.set(m, {left:44, opacity:0});
     TweenLite.set(txt1_line1_a, {left:76, opacity:0});
     TweenLite.set(txt1_line1_b, {left:180, opacity:0});
     TweenLite.set(txt1_line2, {left:71, opacity:0});
     TweenLite.set(txt1_line3, {left:41, opacity:0});
     TweenLite.set(m1, {left:44, opacity:0});
     TweenLite.set(m2, {left:44, opacity:0});
     TweenLite.set(m3, {left:44, opacity:0});
     TweenLite.set(m4, {left:44, opacity:0});
     TweenLite.set(y_word, {opacity:0});
     TweenLite.set(txt2_a, {left:80, opacity:0});
     TweenLite.set(txt2_b, {left:230, opacity:0});
     TweenLite.set(txt_check1, {left:16, opacity:0});
     TweenLite.set(txt_check2, {left:13, opacity:0});
     TweenLite.set(txt_check3, {left:12, opacity:0});
     TweenLite.set(check1, {opacity:0});
     TweenLite.set(check1T, {opacity:0});
     TweenLite.set(check2, {opacity:0});
     TweenLite.set(check2T, {opacity:0});
     TweenLite.set(check3, {opacity:0});
     TweenLite.set(check3T, {opacity:0});
     TweenLite.set(yellow_note, {opacity:0});
     TweenLite.set(txt3, {opacity:0});
     TweenLite.set(ms, {opacity:0});
     TweenLite.set(cta, {top:188, left:10, opacity:1});

    var adContainer = document.getElementById("container");
    var ctaShimmer = document.getElementById("ctaShimmer");

    TweenLite.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();

    function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }

    function ctaOver(){
        TweenLite.to(shine, .5, {left:142, ease:Sine.easeIn});
        TweenLite.to(shine, 0, {left:-142, delay:.5});
    }

    function ctaOut(){
        TweenLite.to(shine, 0, {left:-142, ease:Sine.easeIn});
    }
}

function init(){
    setTimeout (function(){animation1()}, 100);
};

function animation1(){
         TweenLite.to(m, .2, {delay:0, opacity:1, ease:Sine.easeIn});
         TweenLite.to(txt1_line1_a, .2, {delay:0, left:76, opacity:1, ease:Sine.easeIn});
         TweenLite.to(txt1_line1_b, .2, {delay:0, left:180, opacity:1, ease:Sine.easeIn});
         TweenLite.to(txt1_line2, .2, {delay:0, left:71, opacity:1, ease:Sine.easeIn});
         TweenLite.to(txt1_line3, .2, {delay:0, left:41, opacity:1, ease:Sine.easeIn});
         TweenLite.to(y_word, .2, {delay:0, opacity:1, ease:Sine.easeIn});
         TweenLite.to(txt1_line2, .5, {delay:2, opacity:1, left:700, ease:Linear.easeNone});
         TweenLite.to(txt1_line3, .5, {delay:2, opacity:1, left:700, ease:Linear.easeNone});
         TweenLite.to(y_word, .5, {delay:2, y:270, ease:Linear.easeNone});
         TweenLite.to(txt1_line1_a, .5, {delay:2, opacity:0, ease:Linear.easeNone});
         TweenLite.to(txt1_line1_b, .5, {delay:2, opacity:0, ease:Linear.easeNone});
         TweenLite.to(m, .2, {delay:2, opacity:0, ease:Sine.easeNone});
         TweenLite.to(m, .2, {delay:2.05, left:45, opacity:0, ease:Linear.easeIn});
         TweenLite.to(m1, .2, {delay:2.1, opacity:1, ease:Linear.easeNone});
         TweenLite.to(m1, .2, {delay:2.15, left:45, opacity:0, ease:Linear.easeIn});
         TweenLite.to(m2, .2, {delay:2.2, opacity:1, ease:Linear.easeNone});
         TweenLite.to(m2, .2, {delay:2.25, left:45, opacity:0, ease:Linear.easeIn});
         TweenLite.to(m3, .2, {delay:2.3, opacity:1, ease:Linear.easeNone});
         TweenLite.to(m3, .2, {delay:2.35, left:45, opacity:0, ease:Linear.easeIn});
         TweenLite.to(m4, .2, {delay:2.4, opacity:1, ease:Linear.easeNone, onComplete:animation2});
};

function animation2(){
        TweenLite.to(txt2_a, .5, {delay:0, left:80, opacity:1, scale:1, ease:Linear.easeOut});
        TweenLite.to(txt2_b, .5, {delay:0, left:230, opacity:1, scale:1, ease:Linear.easeOut});
        TweenLite.to(m4, .3, {delay:.3, left:10, top:17, scale:.69, opacity:1, ease:Linear.easeOut});
        TweenLite.to(txt2_a, .3, {delay:.3, left:19, top:18, scale:.7, opacity:1, ease:Linear.easeOut});
        TweenLite.to(txt2_b, .3, {delay:.3, left:105, top:18, scale:.7, opacity:1, ease:Linear.easeOut});
        TweenLite.to(yellow_note, .3, {delay:.3, left:0, opacity:1, ease:Linear.easeIn});
        TweenLite.to(txt_check1, .3, {delay:1, opacity:1, ease:Linear.easeIn});
        TweenLite.to(txt_check2, .3, {delay:1.9, opacity:1, ease:Linear.easeIn});
        TweenLite.to(txt_check3, .3, {delay:2.7, opacity:1, ease:Linear.easeIn});
        TweenLite.to(check1, .1, {delay:1.3, opacity:1, ease:Linear.easeIn});
         TweenLite.to(check1T, .1, {delay:1.4, opacity:1, ease:Linear.easeOut});
         TweenLite.to(check2, .1, {delay:2.2, opacity:1, ease:Linear.easeIn});
         TweenLite.to(check2T, .1, {delay:2.3, opacity:1, ease:Linear.easeOut});
         TweenLite.to(check3, .1, {delay:3.1, opacity:1, ease:Linear.easeIn});
         TweenLite.to(check3T, .1, {delay:3.2, opacity:1, ease:Linear.easeOut, onComplete:animation3});
}

function animation3(){
         TweenLite.to(txt2_a, .3, {delay:2, opacity:0, ease:Linear.easeNone});
         TweenLite.to(txt2_b, .3, {delay:2, opacity:0, ease:Linear.easeNone});
         TweenLite.to(m4, .3, {delay:2, opacity:0, ease:Linear.easeNone});
         TweenLite.to(txt_check1, .3, {delay:2, left:16, opacity:0, ease:Linear.easeIn});
         TweenLite.to(txt_check2, .3, {delay:2, left:13, opacity:0, ease:Linear.easeIn});
         TweenLite.to(txt_check3, .3, {delay:2, left:12, opacity:0, ease:Linear.easeIn});
         TweenLite.to(check1, .1, {delay:2, opacity:0, ease:Linear.easeIn});
         TweenLite.to(check1T, .1, {delay:2, opacity:0, ease:Linear.easeOut});
         TweenLite.to(check2, .1, {delay:2, opacity:0, ease:Linear.easeIn});
         TweenLite.to(check2T, .1, {delay:2, opacity:0, ease:Linear.easeOut});
         TweenLite.to(check3, .1, {delay:2, opacity:0, ease:Linear.easeIn});
         TweenLite.to(check3T, .1, {delay:2, opacity:0, ease:Linear.easeOut});
         TweenLite.to(yellow_note, .2, {delay:2, top:0, scale:2, opacity:1, ease:Linear.easeNone});
         TweenLite.to(txt3, .3, {delay:2.5, left:0, opacity:1, ease:Back.easeOut});
         TweenLite.to(ms, .5, {delay:2.7, left:243, top:-20, opacity:0, scale:.5, ease:Back.easeOut});
         TweenLite.to(ms, .5, {delay:2.9, opacity:1, scale:1, ease:Back.easeOut});
         TweenLite.to(shine, .8, {delay: 3.3, left:142, ease:Sine.easeIn});
         TweenLite.to(shine, 0, {delay: 4.1, left:-142});
}
