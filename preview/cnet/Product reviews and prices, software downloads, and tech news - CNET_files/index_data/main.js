FT.include('subloader');	 
//main FT object
var myFT = new FT,



// booleans
myOrientation, myAPI, 
isAdExpanded = false, isTagSetup = false, setMask = false, carouselBlock = false, arrowDone = false, auto = false,
contAnimDone = false, cleaned = false, isExpandSetup = false, isContracted = true, autoDone = false, mainCopyShow = false;
zoomTrue = false; legalShow = true, posId = 0, spinMax = 0, i = 0, currBox = -1, currState = -1, first = false, autoCount = 0, autoDone = false;


// others
screenH = 1200, screenW = 558, gap = 1051;

//divs 
expanded = FT.query("#expanded"), 
container = FT.query("#container"),
tracer = FT.query("#tracer"),
//arrays
arrElement = new Array(), 
arrMask = new Array(),
arrFrame = new Array(),
arrFrameFull = new Array();
arrTracking = new Array("In the laundry cta click","In the kitchen cta click","In the bathroom cta click","In the nursery cta click")


// image name
//arrPath = new Array("090","100","103","105","110","120","140","160","179","200","220","240","250","260","280","290","300","073")
//in between image are smaller so we can fit in more images width 500px --- hot spot images 720px - 73/100/105/179
arrPath = new Array("02","04","06","08","10",
					"12","14","16","18","20",
					"22","23","24","25","26")
spinMax = arrPath.length;

// set image var dynamically
for(var m=0; m<spinMax; m++){
	window["p" + m] = "images3/26_cropped_PNG_000" + arrPath[m] + ".png";
}

for(var n=1; n<3; n++){
	window["circle" + n] = "circle" + n + ".png";
	window["circleOver" + n] = "circleOver" + n + ".png";
}

for(var o=0; o<7; o++){
	window["box" + o] = "box" + o + ".png";
}

function autoSpin(){};
function spinner(){};


var blank = "blank.png",

cta = "cta.png",
contLogo = "contLogo.png",
expMenu = "expMenu.png",
menuBar1 = "menuBar1.png",
menuBar2 = "menuBar2.png",
black = "black.png",
blank1 = "blank1.png",
purple = "purple.png";

expLaundry = "expLaundry.png";
expKitchen = "expKitchen.png";
expBathroom = "expBathroom.png";
expNursery = "expNursery.png";
//------------------------- functinos --------------------------
// ft functions


myFT.addEventListener('subload', function(e){
    if(e === 'FT_politeLoad') {
	   //console.log("subloaded");
      // imageSetup();
    }
}); 



/*position array "-": center
default - left/top/width 
overwrite - right/bottom/width
[left ---- [pixels from center], top    [pixels from center] , right, bottom, width, height , mask:1       
"+" streches keeping ratio aspect of the image and centers
*/		

var arrPath= new Array([],[],[],[],[],[],[],[]),		
			
base = this,


arrPos356 = new Array(
[[0,0,,,"-","-"],[["off",-10],0,,,919,95],["-",0,,,589,194]],
[],																	
[[["off",-488],0,,,gap,558,1]],
[[0,0,,,186,78],[["off",-70],-460,,,1329,559],[["off",370],0,,,250,95],[["off",120],5,,,299,30],[["off",-19],-209,,,23,232],
	[["off",-70],-460,,,1329,559],[["off",-70],-460,,,1329,559],[["off",-70],-460,,,1329,559],[["off",-70],-460,,,1329,559]],
[],									
[[["off",-120],0,,,60,85],[["off",-62],0,,,54,85],[["off",8],0,,,85,85],[["off",98],0,,,92,85],[["off",191],0,,,92,85],[["off",284],0,,,92,85],[["off",382],0,,,102,85],
	[["off",-315],55,,,497,266],[["off",-315],55,,,497,266],[["off",-480],70,,,160,100],[["off",-314],70,,,170,100],[["off",-150],70,,,157,100],[["off",-315],55,,,497,266]],		
[[["off",250],260,,,520,40],[["off",250],302,,,520,40],[["off",250],344,,,520,40],[["off",250],386,,,520,40],[["off",250],428,,,520,40],
[["off",285],470,,,100,85]],									
[]														
),

// only one layout
arrPos = new Array(arrPos356);
// banner will start once the IA variables are loaded in

function loader(){
	// all other images will be dynamic as well, so this is like RL flash, loading in images from IA images
	arrPath[0] = ["purple","contLogo","blank"];
	arrPath[1] = [];
	arrPath[2] = ["black"];
	arrPath[3] = ["blank","expMenu","blank","menuBar1","menuBar2","expLaundry","expKitchen","expBathroom","expNursery"];
	arrPath[4] = [];
	arrPath[5] = ["blank","blank","blank","blank","blank","blank","blank",
					"blank","blank","blank","blank","blank","blank"];
	arrPath[6] = ["blank","blank","blank","blank","blank","blank"];
	arrPath[7] = [];
	// set up the banner elements
	
	//set dynamic phone images
	for(var m=0; m<spinMax; m++){
		arrPos356[1].push([["px", m*gap+ 30],0,,,gap,558]);
		arrPath[1].push("p"+m);
	}
	preLoader(); 

	trace(circle1)
}


// dynamic Frame Shells 

// preloader class 
var arrPreloaderClass = new Array("","FT_politeLoad", "FT_richLoad", "FT_subLoad"),
// per frame if will be preloaded then which class above
arrPreloader = new Array(0,0,0,0,0,0,0,0),
// frame 100% height
arrFrameFull = new Array(true, true, true, false, true, false, true, true),
// frame id names
arrFrameId = new Array('base Frame','360 spin Image Frame','spin Shell Frame','cont Frame','pops Frame','drag Frame','hit Frame','empty Frame')
// frame class names from css
arrFrameClass 	= new Array("expShell","expShell","expShell","expShell","expShell","expShell","expThrough","expShell"),	
// frame mother div name - mothers are already set on html 
arrFrameShell 	= new Array(expanded, expanded, expanded, expanded, expanded, expanded, expanded, container);			





// set up 360 images, son is div where all the images are set as train, mom shells the train so we can move X, 
// base is dragging div which sit on top, speed is the how fast the traing moves
// this works on both desktop and tablet
function setSpinner(son, mom, base, speed){					
								
	// spin 360
	var autospin, posXori = 1, mdown=false, posXori, tickAmount = speed, autoId = 0;
	 
	function moveBack(){
		i++;
		if(i > spinMax - 1){
			i=0;
		}
		spinner(i)
	}
	
	function moveForward(){
		i--;
		if(i < 0){
			i = spinMax-1;
		}
		spinner(i);
	}
	
	mom.appendChild(son);
		
	spinner = function(sp){
		// spinner frame has all the to be spinner images on x gap space, so we can place them on x=spinId*image width, so we give illusion of spin, haha
		// display -none vs block- is too much on processor, using one div with images as train, moving x direction is so far, best to spin 
		arrFrame[1].style.left = -gap*sp;
		//trace(sp)
	}

}
// debugging toll
function trace(st){
	//tracer.innerHTML = st;
}


// tags are set only once after the divs are created
function setTags(){
	divHider([expanded]);
	
	for(var j=5; j<9; j++){
		arrElement[3][j].style.display = "none";
	}
	// set 360spinner (son, mom, base for drag, speed)
	setSpinner(arrFrame[1], arrElement[2][0], arrElement[5][1], 10);
	
	myFT.applyButton(arrElement[5][0], function(){ myFT.clickTag(1) });
	myFT.applyButton(arrElement[5][1], function(){ myFT.clickTag(2) });
	myFT.applyButton(arrElement[5][2], function(){ myFT.clickTag(3) });
	myFT.applyButton(arrElement[5][3], function(){ myFT.clickTag(4) });
	myFT.applyButton(arrElement[5][4], function(){ myFT.clickTag(5) });
	myFT.applyButton(arrElement[5][5], function(){ myFT.clickTag(6) });
	myFT.applyButton(arrElement[5][6], function(){ myFT.clickTag(7) });
	myFT.applyButton(arrElement[5][7], function(){ myFT.clickTag(8) });
	myFT.applyButton(arrElement[5][8], function(){ myFT.clickTag(9) });
	myFT.applyButton(arrElement[5][9], function(){ myFT.clickTag(10) });
	myFT.applyButton(arrElement[5][10], function(){ myFT.clickTag(11) });
	myFT.applyButton(arrElement[5][11], function(){ myFT.clickTag(12) });
	myFT.applyButton(arrElement[5][12], function(){ myFT.clickTag(13) });
	myFT.applyButton(arrElement[5][13], function(){ myFT.clickTag(14) });
	myFT.applyButton(arrElement[6][5], function(){ myFT.clickTag(14) });
	
	myFT.applyButton(arrElement[6][0], overBar0);
	myFT.applyButton(arrElement[6][1], overBar1);
	myFT.applyButton(arrElement[6][2], overBar2);
	myFT.applyButton(arrElement[6][3], overBar3);
	myFT.applyButton(arrElement[6][4], function(){ myFT.clickTag(14) });
	arrElement[6][0].addEventListener("mouseover", overBar0);
	arrElement[6][1].addEventListener("mouseover", overBar1);
	arrElement[6][2].addEventListener("mouseover", overBar2);
	arrElement[6][3].addEventListener("mouseover", overBar3);
	//arrElement[5][1].style.cursor='w-resize'
}

function flipTags(id){
	
	if(id == 0){
		divShow([arrElement[5][0],arrElement[5][1],arrElement[5][2],arrElement[5][3],arrElement[5][4],arrElement[5][5],arrElement[5][6]])
	}else{
		divHider([arrElement[5][0],arrElement[5][1],arrElement[5][2],arrElement[5][3],arrElement[5][4],arrElement[5][5],arrElement[5][6]])
	}
}

function setBars(id){
	curBox = id;
	//console.log(id);
	for(var j=5; j<9; j++){
		arrElement[3][j].style.display = "none";
	}
	for(var j=7; j<13; j++){
		arrElement[5][j].style.display = "none";
	}
	if(id != -1){
		myFT.tracker(arrTracking[id], 0, "");
		//console.log(arrTracking[id])
		arrElement[3][id + 5].style.display = "block";
		TweenLite.killTweensOf(arrElement[3][id + 5]);
		TweenLite.set(arrElement[3][id + 5], {alpha:0});
		TweenLite.to(arrElement[3][id + 5], .3, {alpha:1});
	}
	
	if(id == 0){
		arrElement[5][id + 7].style.display = "block";
	}else if(id == 1){
		arrElement[5][id + 7].style.display = "block";
	}else if(id == 2){
		arrElement[5][id + 7].style.display = "block";
		arrElement[5][id + 8].style.display = "block";
		arrElement[5][id + 9].style.display = "block";
	}else if(id == 3){
		arrElement[5][id + 9].style.display = "block";
	}
}

function overBar0(){
	autoDone = true;
	setBars(0);
}
function overBar1(){
	autoDone = true;
	setBars(1);
}
function overBar2(){
	autoDone = true;
	setBars(2);
}
function overBar3(){
	autoDone = true;
	setBars(3);
}

// tags
function clickBase(){	
	myFT.clickTag(1);
}
function clickCta(){	
	setBars(-1);
	window['open'](myFT.getClickTag(14), '_self');
}


// if there is need for depth
function setZ(){

}



function contClean(){

}
// clean up the expand tween class
function expClean(){
	currId = -1;
	killTweens([],1)
	killTweens([],0); // items
	killArrTweens();  
	clickLegalClose();

}

function animExp(){
	//console.log("anim")
	divShow([arrFrame[0], arrFrame[1], arrFrame[2], arrFrame[3], arrFrame[6], arrFrame[4], arrFrame[5]]);

	if(currState == 0){
		arrElement[3][1].style.opacity = 0;
		arrElement[3][3].style.opacity = 0;
		arrElement[3][4].style.opacity = 0;
		arrElement[2][0].style.opacity = 0;
	}else{
		arrElement[0][1].style.opacity = 0;
	}
	// test
	//tester(1)
	
}

function tester(id){
	if(id == 1){
		// test
		autoPlay();
		divShow([expanded]);
		first = true;
		TweenLite.from(expanded, .3, {css:{alpha:0}});
		
		divShow([arrFrame[6]]);
		arrFrame[3].style.top = "460px"

		TweenLite.to(arrElement[3][1],.3, {css:{alpha:1}});
		
		TweenLite.to(arrElement[3][3],.3, {css:{alpha:1}});
		TweenLite.to(arrElement[3][4],.3, {css:{alpha:1}});
		flipTags(1);
	}else{
		divShow([expanded]);
		first = true;
		TweenLite.from(expanded, .3, {css:{alpha:0}});
		TweenLite.to(arrElement[0][1],.5, {css:{alpha:1}});
		flipTags(0);
	}
}

function autoPlay(){
	// auto play
	//console.log("autoPlay")
	contReset()
	divShow([arrElement[5][1]])
	var spin = {score:0}
	var tween = TweenLite.to(spin, 2 , {score:spinMax-1, onUpdate:showScore, ease:Linear.easeNone, delay:0, onComplete:function(){
		
		TweenLite.delayedCall(1, turnAuto);
		}})
	//TweenLite.to(arrElement[3][1], 1, {css:{alpha:1}, delay:0, ease:Cubic.easeInOut});
	TweenLite.to(arrElement[2][0], 1, {css:{alpha:1}, delay:0, ease:Cubic.easeInOut});
	
	//each time the tween updates this function will be called.
	function showScore() {
	  var me = Math.floor(spin.score.toFixed(1));
	  spinner(me)
	}
}

function contReset(){
	auto = false;
	mainCopyShow = false;
	killTweens([arrElement[0][2], arrElement[2][0]],0); // items
	setBars(-1);
	//cleanHit();
	arrElement[0][2].style.opacity = 0;
	//arrElement[3][1].style.opacity = 0;
	arrElement[2][0].style.opacity = 0;
}


 
myFT.pageScrollUpdate = function(e){
	if(!first){
		//console.log("first");
		divShow([expanded]);
		first = true;
		TweenLite.from(expanded, .3, {css:{alpha:0}});
	}
	var yto = e.scrollPos;
	var yto1 = 0;//558 - e.scrollPos ;
	if(yto1 < 0){
		yto1 = 0;
	}
	if( e.scrollPos && e.scrollPos < e.adExpHght ){ //not fully expanded (in progress)
		divShow([arrFrame[6]]);
		flipTags(1);
		setBars(-1);
		if(yto > 463){
			yto = 463;
		}

		arrFrame[3].style.top = "460px"
		
		TweenLite.to(arrElement[3][1],.3, {css:{alpha:1}});
		
		TweenLite.to(arrElement[3][3],.3, {css:{alpha:1}});
		TweenLite.to(arrElement[3][4],.3, {css:{alpha:1}});
		if(!auto){
			TweenLite.to(arrElement[0][1],.2, {css:{alpha:0}});
			autoPlay();
			auto = true;
		}
		//console.log("expanding: "+e.scrollPos);
		currState = 1;
		
	}else if(e.scrollPos >= e.adExpHght){ //ad totally expanded
		flipTags(1);
		divShow([arrFrame[6]]);
		arrFrame[3].style.top = "460px"
		if(yto > 463){
			yto = 463;
		}
		TweenLite.to(arrElement[3][1],.3, {css:{alpha:1}});
		
		TweenLite.to(arrElement[3][3],.3, {css:{alpha:1}});
		TweenLite.to(arrElement[3][4],.3, {css:{alpha:1}});
	
		if(!auto){
			autoPlay();
			auto = true;
		}
		//console.log("expanded: "+e.scrollPos);
		currState = 2;
		
	}else{ // ad totally collapsed
		flipTags(0);
		arrFrame[3].style.top = "0px"
	
		divHider([arrFrame[6]]);
		
		TweenLite.to(arrElement[3][1],0, {css:{alpha:0}});
		TweenLite.to(arrElement[3][3],0, {css:{alpha:0}});
		TweenLite.to(arrElement[3][4],0, {css:{alpha:0}});
		//console.log("collapsed: "+e.scrollPos);
		TweenLite.to(arrElement[0][1],.5, {css:{alpha:1}});
		TweenLite.to(arrElement[3][2],.5, {css:{top:("0px")}});
		currState = 0;
		contReset();
	}
}
// jw template addition
myFT['addEventListener']('ready', function(){
	//console.log("Ready");
	var expandVals = myFT['getManifest']('expand');
	myFT.send('manifestExp', expandVals);

});

			
loader();

function killAuto(){
	autoDone = true;
	TweenLite.killDelayedCallsTo(turnAuto);
}

function autoClick(id){
	switch (id){
		
	case 0: setBars(0);
	break;
	
	case 1: setBars(1);
	break;
	
	case 2: setBars(2);
	break;
	
	case 3: setBars(3);
	break;
	}
	
}

function turnAuto(){
	//console.log(0)
	if(autoCount > 3 && !autoDone){
		console.log(autoCount)
		autoClick(0);
		autoDone = true;;
		
	}else{
		//console.log(2)
		if(!autoDone){
			console.log(autoCount)
			
			autoClick(autoCount);
			TweenLite.delayedCall(3, turnAuto);
			autoCount++;
		}
	}
		
}
