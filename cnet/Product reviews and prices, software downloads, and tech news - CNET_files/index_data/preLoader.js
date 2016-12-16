// JavaScript Document

// The setWidthAndHeight() function is used to establish the 'correct' width and height dimensions based on the 
// serving environment for positioning of creative elements. 
function setWidthAndHeight(){
	// This uses the FT api to determine if the environment if in-app or mobile web (Q: based on presence of mraid?). 
	// Mobile web returns 'ft', in-app returns 'EXT'

	// Question - is get('api') just testing for mraid?  and if so, should there be a way to test for a device?
	myAPI = myFT.get('api');

	// using innerWidth and innerHeight is a reliable width and height property for Mobile Web environment
	screenW = document.documentElement.clientWidth;
	screenH = document.documentElement.clientHeight;
	
	
	// fixed size banner
	// When myAPI is 'EXT', then we are within an 'in-app' environment
	if(myAPI == 'ext'){
		// Because the http://webtester.mraid.org, simulates in-app (on desktop), we need the following conditional
		// otherwise using screen.width or screen.height will use the desktop browser screen dimensions.
		
		// When detectmob() is true, then we have tested for userAgent to check if we're in an actual mobile device 
		// AND mraid is present (b/c of get('api')?).
		// We know that screen.width and screen.height can reliably return device screen dimesions, so we will 
		// use these values for W and H. 
		if(detectmob()){
			screenW = screen.width;
			screenH = screen.height;
		}
		// For high pixel density devices in environments that return screen W and H dimensions without factoring
		// in devicePixelRatio, we compare screen.width against a use a benchmark width of 500 pixels. Since mobile 
		// phone device widths (generally) will not exceed an actual screen width of ~400px, if the returned screenW 
		// is greater than 500, we are assuming that the value has not taken into account devicePixelRatio, so we divide
		// by this property to get 'actual' screen dimensions.
		if(screenW > 480){
			screenW = screenW/window.devicePixelRatio;
			screenH = screenH/window.devicePixelRatio;
		}
		
		
	}

}

// The detectmob() function is only used to detect the User Agent when testing with
// http://webtester.mraid.org, which simulates 'in-app' environment

// This function tests if environment is an actual mobile device, and not simulated a mraid environment
function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		return true;
	}
	else {
		return false;
	}
}


// orientation adjusterm
function getOrientation(){
	// if none mobile
	if(myOrientation == undefined){
		// this is desktop
		myOrientation = 0
	}else if(myAPI == "ext" && !detectmob()){
		// desktop mraid tester
		//alert(" w: " +  document.documentElement.clientWidth + " h : " +document.documentElement.clientHeight )
		if(document.documentElement.clientHeight > document.documentElement.clientWidth){
			myOrientation = 0;
		}else{
			myOrientation = 90;
		}
	}
}
 


var images = new Array();
var imagesLoaded = 0;

// this will only happen once to dynamically generate the images and put into array;
// image preloading 
function preLoader(){ 

	for(var i = 0; i<arrPath.length; i++){
		var me = new Array();
		var me1 = new Array();

		arrMask.push(me1);
		arrElement.push(me);
		
		for(var j= 0; j<arrPath[i].length; j++){
			images.push(loadImage(arrPath[i][j], i, j));
			
		}	
	}          
	
		
	function loadImage(url, i, j){
			
		var image = new Image();
		image.setAttribute('id', url); //set preloader class
		
		if(arrPreloader[i] == 1 || arrPreloader[i] == 2 || arrPreloader[i] == 3 ){
			image.setAttribute('class',arrPreloaderClass[arrPreloader[i]] + ' expImage'); 
			image.setAttribute('data-src',window[url]);
		}else if(arrPreloader[i] == 0 ){
			image.setAttribute('class','expImage'); // this make the images position absolute;
			image.src = window[ url];
		}else if(arrPreloader[i] == 4){
			image.setAttribute('class','expImage'); // this make the images position absolute;
			image.src = myFT.instantAds[url];
			//alert(myFT.instantAds[String(url)])
		}

		if(arrPos[posId][i][j][6] == 0){
			
			var mc = makeMaskDiv(image, i, j);
			arrElement[i].push(mc); // dumpts in array so we can use from anywhere;
			arrMask[i][j] = image;
			setRollover(image, arrPos[posId][i][j][5]);
			return mc;
		}else if(arrPos[posId][i][j][6] == 1){
			var mc = makeMaskDiv(image, i, j);
			arrElement[i].push(mc); // dumpts in array so we can use from anywhere;
			arrMask[i][j] = image;
			return mc;
		}else if(arrPos[posId][i][j][6] == 2){
			var mc = makeMaskDiv(image, i, j);
			arrElement[i].push(mc); // dumpts in array so we can use from anywhere;
			arrMask[i][j] = image;
			//makeShimmer(mc)
			mc.appendChild(shimmer);
			return mc;
		}else{
			arrElement[i].push(image); // dumpts in array so we can use from anywhere;
			return image;
		}
	
	}
	
	for(var i = 0; i<arrPath.length; i++){
		var frameDiv = document.createElement("div");		// creating div
		arrFrame.push(frameDiv);				
		arrFrame[i].setAttribute('id',arrFrameId[i]);			// arr to be call frames
		arrFrame[i].setAttribute('class',arrFrameClass[i]);
		// set the frame class
		arrFrameShell[i].appendChild(frameDiv);				// put into the mother container
		
		for(var j= 0; j<arrPath[i].length; j++){
			arrFrame[i].appendChild(arrElement[i][j]);		// put the elements to the frame just created
		}
	}
	setWidthAndHeight();	// reads the screen H and W
	imageSetup();	// position the element based on Flash guide
	
}

function makeMaskDiv(img, i, j){
	// shell the makee to masker 
	var frameDiv = document.createElement("div");
	frameDiv.className = "maskShell";
	frameDiv.appendChild(img);
	
	return frameDiv
	
}

function divHider(arr){
	for(var i=0; i<arr.length; i++){
		arr[i].style.display = "none";
	}
}

function divShow(arr){
	for(var i=0; i<arr.length; i++){
		arr[i].style.display = "block";
		arr[i].style.opacity = 1;
	}
}

function divAlpha(arr, al){
	for(var i=0; i<arr.length; i++){
		arr[i].style.opacity = al;
	}
}

function killTweens(arr, id){ // 0 tween 1 call
	for(var i=0; i<arr.length; i++){
		if(id == 0){
			TweenLite.killTweensOf(arr[i]);
		}else{
			TweenLite.killDelayedCallsTo(arr[i]);
		}
	}
}
function killArrTweens(){
	for(var i = 0; i<arrElement.length; i++){
		for(var j= 0; j<arrElement[i].length; j++){
			TweenLite.killTweensOf(arrElement[i][j]);
			arrElement[i][j].style.opacity = 1;
		}
	}
}
function frameHcenter(id, w){
	arrFrame[id].style.left = "50%";
	arrFrame[id].style.marginLeft = "-" + String(Math.floor(w/2)) + "px";
}
function elementHcenter(i,j, w){
	arrElement[i][j].style.left = "50%";
	arrElement[i][j].style.marginLeft = "-" + String(Math.floor(w/2)) + "px";
}
function itemSetup(mc, i, j){
	var ratio = 1//screenW/320*.85;
	var pos = arrPos[posId][i][j];
	var myw = pos[4]*ratio/2;
	var myh = pos[5]*ratio/2;
	
	if(i == 0 || i== 7){
		ratio = 1
	}
	if(!zoomTrue){
		ratio = 1;
	}
	// - center W
	if(pos[0] == "-"){					
		mc.style.left = "50%";
		mc.style.marginLeft = -myw + "px";
	}else if(pos[0] instanceof Array && pos[0][0] == "off") {
		mc.style.left = "50%";
		mc.style.marginLeft = -(myw - pos[0][1])+ "px";
	}else if(pos[0] instanceof Array && pos[0][0] == "px") {
		mc.style.left = pos[0][1] + "px";
	}else if(pos[0] instanceof Array) {		
		mc.style.left = "50%";
		mc.style.marginLeft = -(myw - pos[0][0]*2) + "px";
	}else if(pos[0] != undefined){		
		mc.style.left = pos[0]  + "%"}
	// - center H
	if(pos[1] == "-"){					
		mc.style.top = "50%";
		mc.style.marginTop = -myh + "px";
	}else if(pos[1] instanceof Array && pos[1][0] == "off") {
		mc.style.top = pos[1][1] + "%";
		mc.style.marginTop = -(myh - pos[1][2]*2)+ "px";
	}else if(pos[1] instanceof Array && pos[1][0] == "px") {
		mc.style.top = pos[1][1] + "px";
	}else if(pos[1] instanceof Array) {		
		mc.style.top = "50%";
		mc.style.marginTop = -(myh - pos[1][0]*2)+ "px";
	}else if(pos[1] != undefined){		
		mc.style.top = pos[1]  + "px";
	}
	
	if(pos[2] != undefined){			
		mc.style.right 	= pos[2] + "px";
	}
	
	if(pos[3] instanceof Array) {	
		mc.style.bottom = pos[3]  + "px";
	}else if(pos[3] != undefined){			
		mc.style.bottom = pos[3]  + "px";
	}
	// "-" width 100%;
	if(pos[4] == "-"){					mc.style.width 	= "100%";	
	}else if(pos[4] instanceof Array) { mc.style.width = pos[4][0] + "%"
	}else if(pos[4] != undefined){		mc.style.width 	= pos[4]*ratio + "px" }
	// - height 100%
	if(pos[5] == "-"){					mc.style.height = "100%";
	}else if(pos[5] != undefined){		mc.style.height = pos[5]*ratio + "px" }
	
	if(pos[1] == "+"){			
		// fill the bg image to full screen
		var r1 = screenW/pos[4];
		var r2 = screenH/pos[5];
		
		if(r1 > r2){
			mc.style.width 	= String(screenW) + "px";
			mc.style.left = "0px";
			var newH = screenW/pos[4] * pos[5]
			mc.style.height = String(newH) + "px";	
			mc.style.top = String(screenH/2 - newH/2) + "px";
		
		}else{
			
			mc.style.height = String(screenH) + "px";
			mc.style.top = "0px";
			var newW = screenH/pos[5] * pos[4]
			mc.style.width = String(newW) + "px";	
			mc.style.left = String(screenW/2 - newW/2) + "px";

		}

	}
	
}

function itemResize(mc, i, j, ratio){
	
	
	var pos = arrPos[posId][i][j];
	var myw = pos[4]*ratio/2;
	var myh = pos[5]*ratio/2;
	
	if(i == 0 || i== 7){
		ratio = 1
	}
	if(!zoomTrue){
		ratio = 1;
	}
	// - center W
	if(pos[0] == "-"){					
		mc.style.left = "50%";
		mc.style.marginLeft = -myw + "px";
	}
	// - center H
	if(pos[1] == "-"){					
		mc.style.top = "50%";
		mc.style.marginTop = -myh + "px";
	}
	
	// "-" width 100%;
	if(pos[4] != undefined){		mc.style.width 	= pos[4]*ratio + "px" }
	// - height 100%
	if(pos[5] != undefined){		mc.style.height = pos[5]*ratio + "px" }
	
	
}


// set elements on initial setup and on screen resize
function imageSetup(){
	// reads the screen size
	setWidthAndHeight();
	// reset all the shells to screenW H
	//alert("window.innerWidth: " + window.innerWidth)
	expanded.style.width = "100%";
	expanded.style.height = "100%";
	// set frame shells to screen H W except the warning sign shell
	for(var j = 1; j<arrFrame.length-1; j++){
		arrFrame[j].style.width = "100%";
		if(!arrFrameFull[j]){ // all except legal
			arrFrame[j].style.height = "100%";
		}
	}	
	// set the element position
	for(var i = 0; i<arrElement.length; i++){
		for(var j= 0; j<arrElement[i].length; j++){
			itemSetup(arrElement[i][j], i, j);
		}
	}
	// mc, height, top whine shell item's  y.
	setZ();								// some execptions for z to put on top of the banner. (shimmer)
	
	if(!isTagSetup){
		setTags();	
		isTagSetup = true; 
		//console.log("imageSetup1")
		animExp();
	}else{	
		animExp();		
			// initial set up no animation;
		//console.log("imageSetup2")
	}
	
}



