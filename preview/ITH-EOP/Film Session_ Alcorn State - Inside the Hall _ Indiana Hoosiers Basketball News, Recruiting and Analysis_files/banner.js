window.onload = function() {
	getEl('banner').style.display = "block";
	getEl('banner').addEventListener('click', onBannerClick, false);
	getEl('banner').addEventListener('mouseover', onBannerOver, false);
	getEl('banner').addEventListener('mouseout', onBannerOut, false);
	initEB();
}

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startBanner);
    } else {
        startBanner();
    }
}

function onBannerClick(e) {
	window.open(window.clickTag);
}
function onBannerOver(e) {
	getEl('cta').className = "cta cta_over";
}
function onBannerOut(e) {
	getEl('cta').className = "cta cta_out";
}

function startBanner() {
	console.log("startBanner()");
	
	initPhotos();
	
	var delayTime = 0;
	
	// raise tag and frame
	delayTime += 1;
	TweenLite.delayedCall(delayTime, function(){
		TweenLite.to("#tag", 1, {y:"-66"});
		TweenLite.to("#frame", 1, {top:"4px"});
	});
	
	// wiggle mistletoe
	delayTime += 1;
	TweenLite.delayedCall(delayTime, function(){
		TweenLite.to("#mistletoe", .1, {rotation:".1rad", transformOrigin:"center top", delay:0});
		TweenLite.to("#mistletoe", 1, {rotation:"0rad", transformOrigin:"center top", ease:Elastic.easeOut, delay:.1});
		TweenLite.to("#mistletoe", .1, {rotation:"-.1rad", transformOrigin:"center top", delay:.2});
		TweenLite.to("#mistletoe", 1, {rotation:"0rad", transformOrigin:"center top", ease:Elastic.easeOut, delay:.3});
		TweenLite.to("#mistletoe", .1, {rotation:".08rad", transformOrigin:"center top", delay:.4});
		TweenLite.to("#mistletoe", 1, {rotation:"0rad", transformOrigin:"center top", ease:Elastic.easeOut, delay:.5});
		TweenLite.to("#mistletoe", .1, {rotation:"-.08rad", transformOrigin:"center top", delay:.6});
		TweenLite.to("#mistletoe", 3, {rotation:"0rad", transformOrigin:"center top", ease:Elastic.easeOut, delay:.7});
	});
	
	delayTime += 1.5;
	TweenLite.delayedCall(delayTime, function(){
		// take photo
		getEl('frame').style.backgroundColor = "#fff";
		getEl('frame').style.overflow = "hidden";
		TweenLite.to("#person", .5, {opacity:"1"});
		
		TweenLite.set("#mistletoe", {rotation:"0rad", overwrite:true});
	});
	
	delayTime += .5;
	TweenLite.delayedCall(delayTime, function(){
		// raise tag
		TweenLite.to("#tag", 1, {y:"-90"});
		
		// show product
		TweenLite.set("#product", {opacity:"1"});
		TweenLite.from("#product", 1, {top:"90px"});
		
		// animate photo
		TweenLite.to("#frame", 2, {bezier:[{left:300, top:-80},{left:412, top:-75}], ease:Power1.easeInOut});
		TweenLite.to("#frame", 2, {scaleX:.05, scaleY:.05, ease:Power1.easeInOut});
		TweenLite.to("#frame", .5, {opacity:"0", delay:1.5});
		
		// show "EASILY BACK UP..."
		TweenLite.to("#text1", .5, {opacity:"1", delay:1});
	});
	
	delayTime += 3;
	TweenLite.delayedCall(delayTime, function(){
		TweenLite.to("#text1", .5, {opacity:"0"});
		
		// show "ANYTIME. ANYWHERE."
		TweenLite.to("#text2a", .5, {opacity:"1", delay:.5});
		TweenLite.to("#text2b", .5, {opacity:"1", delay:.5});
		
		animatePhotos();
	});
	
	// hide text2 + show text3 'BACKUP PLUS'
	delayTime += 2.75;
	TweenLite.delayedCall(delayTime, function(){
		TweenLite.to("#text2a", .5, {opacity:"0"});
		TweenLite.to("#text2b", .5, {opacity:"0"});
		TweenLite.to("#text3a", .5, {opacity:"1", delay:.5});
		TweenLite.to("#text3b", .5, {opacity:"1", delay:.5});
		TweenLite.to("#cta", .5, {opacity:"1", delay:1});
		TweenLite.to("#legal", .5, {opacity:"1", delay:1});
	});
	
	//alert(delayTime+1.5);
}

function initPhotos() {
	
	var imgNum;
	var imgHTML = "";
	
	for (var a = 0; a < 8; a++) {
		imgNum = randRange(1,3);
		imgHTML += "<img id='photo"+a+"' class='photo' src='photo"+imgNum+".jpg' width='50' height='50'/>";
	}
	
	imgHTML += "<img id='photo_top' class='photo photo_shadow' src='photo1.jpg' width='50' height='50'/>";
	
	getEl('photos').innerHTML = imgHTML;
}

function animatePhotos() {
	
	var delay = .15;
	
	for (var a = 0; a < 8; a++) {
		getEl("photo"+a).style.left = -randRange(60,80)+"px";
		getEl("photo"+a).style.top = randRange(30,90)+"px";
		
		TweenLite.to("#photo"+a, 1.5, {bezier:[{left:100, top:randRange(0,5)}, {left:487, top:4}], delay:delay, ease:Power1.easeInOut});
		TweenLite.to("#photo"+a, 1.5, {scaleX:.2, scaleY:.2, ease:Power1.easeInOut, delay:delay});
		TweenLite.to("#photo"+a, .5, {opacity:"0", delay:delay+1});
		
		delay += randRange(2,5)/30;
	}
	
	TweenLite.to("#photo_top", 1.5, {bezier:[{left:100, top:randRange(0,5)}, {left:468, top:-4}], delay:delay, ease:Power1.easeInOut});
	TweenLite.to("#photo_top", 1.5, {rotation:"-.2rad", scaleX:.6, scaleY:.6, ease:Power1.easeOut, delay:delay});
	TweenLite.from("#photo_top", .5, {boxShadow:"5px 5px 20px 0px rgba(0,0,0,0)", delay:delay+1});
	
	TweenLite.set("#photo_btm", {left:502, top:6, scaleX:.4, scaleY:.4});
	TweenLite.to("#photo_btm", .5, {rotation:".2rad", left:519, ease:Power1.easeOut, delay:delay+1});
}

function randRange(minNum, maxNum) {
	var randNum = Math.floor(Math.random() * ((maxNum - minNum) + 1)) + minNum;
	return randNum;
}

function getEl(id) {
	return document.querySelector('#'+id);
}