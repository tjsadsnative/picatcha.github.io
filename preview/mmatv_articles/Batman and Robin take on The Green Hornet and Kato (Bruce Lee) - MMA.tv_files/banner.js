// AdBegins

function startAd(){
	
var adContainer = document.getElementById("container");


TweenMax.defaultOverwrite = "false";
document.getElementById("banner").style.visibility = "visible";

initAnimations();
listeners();

function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }
    
function ctaOver(){
	TweenMax.to(ctaBtnOver, .2, {delay:0, autoAlpha:1, left:35, ease:Sine.easeIn});
	TweenMax.to(ctaBtnOver, .2, {delay:.2, autoAlpha:0, left:85, ease:Sine.easeOut});
	TweenMax.to(ctaBtnOver, 0, {delay:.3, autoAlpha:0, left:-10});
	
}

function ctaOut(){
   	TweenMax.to(ctaBtnOver, .2, {delay:0, autoAlpha:0, ease:Sine.easeIn});
}


}

// Animations

function initAnimations(){	

	TweenMax.fromTo("#copy1b", 0.5, {left:300},{ left: 0,autoAlpha:1, ease:Power4.easeOut, delay: .1});

	TweenMax.fromTo("#copy2b", 0.5, {left:300},{ left: 0,autoAlpha:1, ease:Power4.easeOut, delay: 1});

	TweenMax.fromTo("#copy3b", 0.5, {left:300},{ left: 0,autoAlpha:1, ease:Power4.easeOut, delay: 2});
	
	TweenMax.to( "#WhiteBorder", 0.5, { autoAlpha:1, ease:Sine.easeOut, delay: 2.5});
	TweenMax.to( "#CTACopy1", 0.5, { autoAlpha:0, ease:Sine.easeOut, delay: 3.5});
	TweenMax.to( "#CTACopy2", 0.5, { autoAlpha:1, ease:Sine.easeOut, delay: 4});
	
	TweenMax.to( "#ctaBtnOver", 0.2, { autoAlpha:1, left:35, ease:Sine.easeIn, delay: 4.6});
	TweenMax.to( "#ctaBtnOver", 0.2, { autoAlpha:0, left:85, ease:Sine.easeOut, delay: 4.8});
	TweenMax.to( "#ctaBtnOver", 0, { autoAlpha:0, left:-10, delay: 4.9});

}

//
