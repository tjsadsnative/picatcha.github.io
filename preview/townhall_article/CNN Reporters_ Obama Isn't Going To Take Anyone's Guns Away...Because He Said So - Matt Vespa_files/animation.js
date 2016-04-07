// JavaScript Document

//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier

//Function to run with any animations starting on load, or bringing in images etc

init = function()
{
	
	//Assign All the elements to the element on the page
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	//Bring in listeners i.e. if a user clicks or rollovers
	listeners();
	//Show Ad
	content.style.display = "block";
	
	if(frame1_active){
	BordersIn();
	frame1Active();	
	}else if(frame2_active){
	BordersIn();
	frame2Active();		
	}else{
	AnimationEndFrame();	
	}
};

function frame1Active()
{
	TweenMax.to( frame1, 0.5, { left:12, ease:Power4.easeOut, delay: .2});
	TweenMax.to(frame1, 0.1, {textShadow:"3px 0px 2px #fff"});
	TweenMax.to(frame1, 0.1, {textShadow:"0px 0px 0px #fff", delay: .3});
	TweenMax.to( img1, 0.5, { left:12, ease:Power4.easeOut, delay: .2});
	TweenLite.to( img1, 0.5, { left:-300, ease:Power4.easeOut, delay: 2});
	TweenLite.to( frame1, 0.5, { left:-300, ease:Power4.easeOut, delay: 2, onComplete:nextFrame});
	if(!frame2_active){
	BordersOut()
	}
}

function nextFrame()
{

	if(frame2_active){
	nextNum=2;	
	}else{
	nextNum=3;		
	}
	if(nextNum==2){
	frame2Active();	
	}
	if(nextNum==3){
	AnimationEndFrame();	
	}
	
}

function frame2Active()
{
	BordersOut();
	TweenMax.to( frame2, 0.5, { left:12, ease:Power4.easeOut, delay: .2});
	TweenMax.to(frame2, 0.1, {textShadow:"3px 0px 2px #fff"});
	TweenMax.to(frame2, 0.1, {textShadow:"0px 0px 0px #fff", delay: .3});
	TweenMax.to( img2, 0.5, { left:12, ease:Power4.easeOut, delay: .2});
	TweenLite.to( img2, 0.5, { left:-300, ease:Power4.easeOut, delay: 2});
	TweenLite.to( frame2, 0.5, { left:-300, ease:Power4.easeOut, delay: 2, onComplete:AnimationEndFrame});
}


function BordersIn()
{
	TweenMax.to( "#borders", 0.5, { left:12, ease:Power4.easeOut, delay: .2});
}

function BordersOut()
{
	TweenMax.to( "#borders", 0.5, { left:-300, ease:Power4.easeOut, delay: 2});
}

function AnimationEndFrame()
{

	
	TweenMax.to( "#hEnd", 0.3, { left:12, ease:Power4.easeOut, delay: .1});
	TweenMax.to("#hEnd", 0.3, {textShadow:"3px 0px 2px #fff"});
	TweenMax.to("#hEnd", 0.1, {textShadow:"0px 0px 0px #fff", delay: .3});

	TweenMax.to( "#shEnd", 0.3, { left:0,ease:Power4.easeOut, delay: 1});
	TweenMax.to("#shEnd", 0.3, {textShadow:"3px 0px 2px #fff"});
	TweenMax.to("#shEnd", 0.1, {textShadow:"0px 0px 0px #fff", delay: 1.2});

	TweenMax.to( "#endOffer", 0.3, { left:12,ease:Power4.easeOut, delay: 2});
	TweenMax.to("#endOffer", 0.3, {textShadow:"3px 0px 2px #FBAB13"});
	TweenMax.to("#endOffer", 0.1, {textShadow:"0px 0px 0px #FBAB13", delay: 2.2});

	TweenMax.to( "#WhiteBorder", 0.5, { opacity:1, ease:Sine.easeOut, delay: 2.5});
	TweenMax.to( "#lastmsg", 0.5, { opacity:1, ease:Sine.easeOut, delay: 2.8});
	TweenMax.to( "#ctaDate", 0.5, { opacity:0, ease:Sine.easeOut, delay: 3.5});	
	TweenMax.to( "#ctaCopy", 0.5, { opacity:1, ease:Sine.easeOut, delay: 4});

	TweenMax.to( "#ctaBtnOver", 0.2, { opacity:1, left:35, ease:Sine.easeIn, delay: 4.6});
	TweenMax.to( "#ctaBtnOver", 0.2, { opacity:0, left:85, ease:Sine.easeOut, delay: 4.8});
	TweenMax.to( "#ctaBtnOver", 0, { opacity:0, left:-10, delay: 4.9});
	

}

function listeners(){
        content.addEventListener('mouseenter', ctaOver, false);
        content.addEventListener('mouseleave', ctaOut, false);
        bgExit.addEventListener('click', bgExitHandler, false);
    }
    
function ctaOver(){
	TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:1, left:35, ease:Sine.easeIn});
	TweenMax.to(ctaBtnOver, .2, {delay:.2, opacity:0, left:85, ease:Sine.easeOut});
	TweenMax.to(ctaBtnOver, 0, {delay:.3, opacity:0, left:-10});
	
}

function ctaOut(){
   	TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:0, ease:Sine.easeIn});
}



bgExitHandler = function(e)
{
	//Call Exits
	// Enabler.exit('HTML5_Background_Clickthrough',Exit_URL);
	Enabler.exitOverride('HTML5_Background_Clickthrough', Exit_URL);
};

init();


