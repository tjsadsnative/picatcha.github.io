


/* ---------------------------------------------------------------------------------
DEFINE VARS
--------------------------------------------------------------------------------- */

var banner = document.getElementById("banner");
//path refers to the class path inside the logo svg path in order to animate color
cta = document.getElementById("cta");
myEaseOut = Expo.easeOut;
myElastic = Elastic.easeOut.config(0.2, 0.1);





/* ---------------------------------------------------------------------------------
ADD LISTENERS & HANDLERS
---------------------------------------------------------------------------------

banner.addEventListener( "click", exitHandler );

function exitHandler() {
window.open(window.clickTag);
} */


/* ---------------------------------------------------------------------------------
DEFINE ANIMATION
--------------------------------------------------------------------------------- */

function startAd() {

//Create Timeline Animation
var tl = new TimelineMax();



//setting starting positions

tl.set(banner, {autoAlpha:1})
tl.set([price_lgl, x1glow ], {autoAlpha:0})
.set([txt1, txt2, tv, phone, txt3, ef_subh], {x:"+=300px"})
.set (x1_content, {scale:3, autoAlpha:0})
.set([price_hl, price ], {x:"-=300px"})
.set(cta, {bottom:-13})
.set(cta_arrow, {top:11,left:283})
.set(cta_legal, {top:25, autoAlpha:0})
//.set(price_line2, {top:174})



//animate
//frame 1

tl.to(txt1, .5, {x:"-=300px", ease:myEaseOut}, "+=0.2")
.to(txt1, .5, {x:"-=300px", ease:myEaseOut}, "+=1.8")
.to(x1_content, .25,  {scale:1,autoAlpha:1})
.to(x1glow, .5,  {autoAlpha:1}, "+=0.2")
.to(x1_content, .5, {x:"-=300px", ease:myEaseOut}, "+=2")
.to(txt2, .5, {x:"-=300px", ease:myEaseOut}, "-=0.5")
.to(tv, .5, {x:"-=300px", ease:myEaseOut}, "-=0.2")
.to(phone, .5, {x:"-=300px", ease:myEaseOut}, "-=0.3")
.to([txt2,tv, phone,txt3], .5, {x:"-=300px", ease:myEaseOut}, "+=2")

.to(txt3, .5, {x:"-=300px", ease:myEaseOut}, "+=.8")

.from(ef_hl, .25, {scale:1.20,y:"+=100px",autoAlpha:0}, "+=0")
.from([price_line1,price_line2], .25, {width:0, ease:myEaseOut}, "+=0.1")
//.to(price_line2, .25, {top:174, ease:myEaseOut}, "+=0.1")

.to([price_hl, price], .25, {x:"+=300px", ease:myEaseOut})
.to(ef_subh, .25, {x:"-=300px", ease:myEaseOut}, "-=0.25")
.to(price_lgl, .25,  {autoAlpha:1}, "-=0.25")

.to(cta, .5, {bottom:-2, ease:myEaseOut}, "+=0.1")
.to(cta_legal, .25, {top:25, autoAlpha:1, ease:myEaseOut}, "-=0.1")
.to(cta_arrow, .25, {top:17,left:283, ease:myEaseOut}, "-=0.6")
.fromTo(cta, .5, {backgroundPosition:"-350px 0"},{backgroundPosition:"450px 0", overwrite:false});
;


// alert(tl.duration());


/* ---------------------------------------------------------------------------------
CREATE MouseOver Effects
--------------------------------------------------------------------------------- */

var mouseEffect = TweenMax.fromTo(cta, 1, {backgroundPosition:"-350px 0"},{backgroundPosition:"450px 0",paused:true});

clicktag.addEventListener("mouseover",function(){
mouseEffect.restart();
});

}

