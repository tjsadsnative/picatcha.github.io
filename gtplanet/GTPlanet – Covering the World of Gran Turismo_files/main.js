var masterTl;
function bgAnim(){//background animation
    var tl = new TimelineLite();
    tl
    .add("start")
    .set(".bg", {transformOrigin: "50% 100%", x:16 , scale: 1.4, force3d:true, rotationZ:0.01})
    .to(".bg", 9, {scale:1, x:0, ease:Linear.easeNone}, "start")
    .from(".logo", 0.6, {autoAlpha:0}, "start");
    //.from(".logo", 1, {x:"55px", clip:"rect(0, 75px, 17px, 0)", ease:Strong.easeOut}, "start+=1");
    return tl;
}

function fgAnim(){//foreground animation
    var tl = new TimelineLite();

    tl
    .from(".text1", 0.75, {autoAlpha:0, ease:Sine.easeOut})// fade in text 1
    .to(".text1", 0.75, {autoAlpha:0, ease:Expo.easeInOut}, "+=2" )

    .from(".text2", 0.75, {autoAlpha:0, ease:Sine.easeOut}, "+=0.1")// fade in text 2
    .to(".text2", 0.75, {autoAlpha:0, ease:Expo.easeInOut}, "+=2" )

    .from(".text3", 0.75, {autoAlpha:0, ease:Sine.easeOut}, "+=0.1")// fade in text 3

    .from(".cta", 0.75, {autoAlpha:0, scale:1.2, ease:Back.easeOut}, "-=0.5");// fade in the cta

    return tl;
}

// mouseover/mouseout
function doMouseOver() {//mouseOver animation function
    TweenLite.to(".cta", 0.15, {backgroundColor:"rgb(0, 0, 0, 0.3)", scale:1.1, ease:Expo.easeOut});
}

function doMouseOut() {//initialize the timeline
    TweenLite.to(".cta", 0.35, {backgroundColor:"none", scale:1, ease:Expo.easeOut});
}

function init(){//initialize the timeline
    masterTl = new TimelineLite();

    masterTl
    .set(".wrapper", {autoAlpha:1}) // make the whole banner visible
    .add(bgAnim(), 0.5)
    .add(fgAnim(), 0.5);

    var banner = document.getElementById("banner");//get the html element
    banner.addEventListener("mouseover", doMouseOver);//add the mouseover event listener and call the doMouseOver function
    banner.addEventListener("mouseout", doMouseOut);//add the mouseoout event listener and call the doMouseOut function
}
