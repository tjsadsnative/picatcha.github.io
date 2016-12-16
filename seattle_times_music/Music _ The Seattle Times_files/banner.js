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
	//TweenLite.to(ctaBtnOver, .35, {left:140, ease:Sine.easeIn});

	TweenMax.to(ctaBtnOver, .4, {delay:0, autoAlpha:1, left:80, ease:Sine.easeIn});
	TweenMax.to(ctaBtnOver, .4, {delay:.3, autoAlpha:0, left:90, ease:Sine.easeOut});
	TweenMax.to(ctaBtnOver, 0, {delay:.5, autoAlpha:0, left:-50});
	
}

function ctaOut(){
   	TweenLite.to(ctaBtnOver, 0, {autoAlpha:0, left:-50, ease:Sine.easeIn});
}


}

// Animations

function initAnimations(){	

	TweenMax.to( "#copy1", 0.3, { left:4, ease:Power4.easeOut, delay: .1});
	TweenMax.to( "#copy1", 0.2, { autoAlpha:0, ease:Sine.easeOut, delay: .3});
	TweenMax.to( "#copy1b", 0.2, { autoAlpha:1, ease:Sine.easeOut, delay: .3});
	
	TweenMax.to("#copy1", 0.3, {css:{"-webkit-filter": blur("0px"), filter: blur("0px")}, delay:0.3});

	TweenMax.to( "#copy2", 0.3, { left:-518, ease:Power4.easeOut, delay: 1});
	TweenMax.to( "#copy2", 0.2, { autoAlpha:0, ease:Sine.easeOut, delay: 1.1});
	TweenMax.to( "#copy2b", 0.2, { autoAlpha:1, ease:Sine.easeOut, delay: 1.1});


	TweenMax.to( "#copy3", 0.3, { right:12, ease:Power4.easeOut, delay: 2});
	TweenMax.to( "#copy3", 0.2, { autoAlpha:0, ease:Sine.easeOut, delay: 2.1});
	TweenMax.to( "#copy3b", 0.2, { autoAlpha:1, ease:Sine.easeOut, delay: 2.1});

	TweenMax.to( "#WhiteBorder", 0.5, { autoAlpha:1, ease:Sine.easeOut, delay: 2.5});
	TweenMax.to( "#CTACopy1", 0.5, { autoAlpha:0, ease:Sine.easeOut, delay: 3.5});
	TweenMax.to( "#CTACopy2", 0.5, { autoAlpha:1, ease:Sine.easeOut, delay: 4});
	
	TweenMax.to( "#ctaBtnOver", 0.4, { autoAlpha:1, left:80, ease:Sine.easeIn, delay: 4.6});
	TweenMax.to( "#ctaBtnOver", 0.4, { autoAlpha:0, left:90, ease:Sine.easeOut, delay: 4.9});
	TweenMax.to( "#ctaBtnOver", 0, { autoAlpha:0, left:-50, delay: 5.1});
	


}

//
