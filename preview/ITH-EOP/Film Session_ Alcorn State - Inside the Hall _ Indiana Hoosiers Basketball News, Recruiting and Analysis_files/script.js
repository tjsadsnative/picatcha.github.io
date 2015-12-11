function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function initAnimation() {

	TweenMax.to(sp_profileblur, .4, {css:{left:509}});
	TweenMax.to(feature1copy, .3, {css:{left:144}});
	TweenMax.delayedCall(.51, unblur);
	TweenMax.delayedCall(1.7, slide2);
	
	function slide2(){
		blur();
		TweenMax.to(feature1copy, .3, {css:{left:730}});
		TweenMax.to(feature2copy, .4, {css:{left:144}});
		TweenMax.delayedCall(.39, unblur);
		TweenMax.delayedCall(1.7, slide3);
	}
	
	function slide3(){
		blur();
		TweenMax.to(feature2copy, .3, {css:{left:730}});
		TweenMax.to(feature3copy, .4, {css:{left:144}});
		TweenMax.delayedCall(.39, unblur);
		TweenMax.delayedCall(1.7, slide4);
	}
	
	function slide4(){
		blur();
		TweenMax.to(feature3copy, .4, {css:{left:730}});
		TweenMax.to(sp_profileblur, .2, {css:{left:730}});
		TweenMax.to(sp_profile, .2, {css:{left:730}});
		TweenMax.delayedCall(1, cars);
	}
	
	function cars(){
		TweenMax.to(sp_01, .5, {css:{left:336, top:2}});
		TweenMax.to(carName, .3, {css:{left:118}});
		TweenMax.to(sp_08, .15, {delay:.4, css:{opacity:1}});
		TweenMax.to(sp_07, .01, {delay:.56, css:{opacity:0}});
		TweenMax.to(sp_09, .15, {delay:.56, css:{opacity:1}});
		TweenMax.to(sp_08, .01, {delay:.72, css:{opacity:0}});
		TweenMax.to(sp_10, .15, {delay:.72, css:{opacity:1}});
		TweenMax.to(sp_09, .01, {delay:.88, css:{opacity:0}});
		TweenMax.to(sp_11, .15, {delay:.88, css:{opacity:1}});
		TweenMax.to(sp_10, .01, {delay:1.03, css:{opacity:0}});
		TweenMax.to(sp_12, .15, {delay:1.03, css:{opacity:1}});
		TweenMax.to(sp_11, .01, {delay:1.18, css:{opacity:0}});
		TweenMax.to(sp_01, .15, {delay:1.18, css:{opacity:1}});
		TweenMax.to(sp_12, .01, {delay:1.33, css:{opacity:0}});
		TweenMax.to(sp_02, .15, {delay:1.33, css:{opacity:1}});
		TweenMax.to(sp_01, .01, {delay:1.48, css:{opacity:0}});
		TweenMax.to(sp_03, .15, {delay:1.48, css:{opacity:1}});
		TweenMax.to(sp_02, .01, {delay:1.63, css:{opacity:0}});
		TweenMax.to(sp_04, .15, {delay:1.63, css:{opacity:1}});
		TweenMax.to(sp_03, .01, {delay:1.78, css:{opacity:0}});
		TweenMax.to(sp_05, .15, {delay:1.78, css:{opacity:1}});
		TweenMax.to(sp_04, .01, {delay:1.93, css:{opacity:0}});
		TweenMax.to(sp_06, .15, {delay:1.93, css:{opacity:1}});
		TweenMax.to(sp_05, .01, {delay:2.08, css:{opacity:0}});
		TweenMax.to(sp_07, .15, {delay:2.08, css:{opacity:1}});
		TweenMax.to(sp_06, .01, {delay:2.23, css:{opacity:0}});
		TweenMax.to(sp_08, .15, {delay:2.23, css:{opacity:1}});
		TweenMax.to(sp_07, .01, {delay:2.38, css:{opacity:0}});
		TweenMax.to(sp_09, .15, {delay:2.38, css:{opacity:1}});
		TweenMax.to(sp_08, .01, {delay:2.53, css:{opacity:0}});
		TweenMax.to(sp_10, .15, {delay:2.53, css:{opacity:1}});
		TweenMax.to(sp_09, .01, {delay:2.68, css:{opacity:0}});
		TweenMax.to(sp_11, .15, {delay:2.68, css:{opacity:1}});
		TweenMax.to(sp_10, .01, {delay:2.83, css:{opacity:0}});
		TweenMax.to(sp_12, .15, {delay:2.83, css:{opacity:1}});
		TweenMax.to(sp_11, .01, {delay:2.98, css:{opacity:0}});
		TweenMax.to(sp_01, .15, {delay:2.98, css:{opacity:1}});
		TweenMax.to(sp_12, .01, {delay:3.13, css:{opacity:0}});
		TweenMax.to(sp_02, .15, {delay:3.13, css:{opacity:1}});
		TweenMax.to(sp_01, .01, {delay:3.28, css:{opacity:0}});
		TweenMax.to(sp_03, .15, {delay:3.28, css:{opacity:1}});
		TweenMax.to(sp_02, .01, {delay:3.43, css:{opacity:0}});
		TweenMax.delayedCall(3.58, end);
	}
	
	function end(){
		TweenMax.set(sw2, {css:{scaleX:1, scaleY:1}});
		TweenMax.to([sw1, sw2, sw3, sw4, sw5, sw6,  endSubheadline,price], .3, {css:{opacity:1}});
		TweenMax.to(cta, .3, {delay: .1, css:{opacity:1}});
		TweenMax.to(legalLinkText, .6, {css:{opacity:1}});
		TweenMax.delayedCall(.9, enableLegal);
		TweenMax.delayedCall(.9, enableSwatches);
	}	
	
	function unblur(){
		TweenMax.to(sp_profileblur, .2, {delay:.1, css:{opacity:0}});
		TweenMax.to(sp_profile, .2, {css:{opacity:1}});
	}
	
	function blur(){
		TweenMax.to(sp_profileblur, .01, {css:{opacity:1}});
		TweenMax.to(sp_profile, .01, {css:{opacity:0}});
	}
	

	// objects
	var legalBtn = document.getElementById("legalBtn");
	var x = document.getElementById("x");
	var legalPanel = document.getElementById("legalPanel");
	
	function enableLegal(){
		legalBtn.style.cursor = 'pointer';
		x.style.cursor = 'pointer';
		legalBtn.onclick = function() {
			TweenMax.to(legalPanel, .3, {css:{top:1}});
			TweenMax.set(x, {delay:.3, css:{display:'block'}});
		};
		x.onclick = function() {
			TweenMax.to(legalPanel, .3, {css:{top:91}});
			TweenMax.set(x, {css:{display:'none'}});
		};
		legalBtn.onmouseover = function() {
			TweenMax.to(legalPanel, .3, {css:{top:1}});
			TweenMax.set(x, {delay:.3, css:{display:'block'}});
		};
		x.onmouseover = function() {
			TweenMax.to(legalPanel, .3, {css:{top:91}});
			TweenMax.set(x, {css:{display:'none'}});
		};
	}
	// swatches
	var sw1 = document.getElementById("sw1");
	var sw2 = document.getElementById("sw2");
	var sw3 = document.getElementById("sw3");
	var sw4 = document.getElementById("sw4");
	var sw5 = document.getElementById("sw5");
	var sw6 = document.getElementById("sw6");
	
	function enableSwatches(){
		sw1.style.cursor = 'pointer';
		sw2.style.cursor = 'pointer';
		sw3.style.cursor = 'pointer';
		sw4.style.cursor = 'pointer';
		sw5.style.cursor = 'pointer';
		sw6.style.cursor = 'pointer';
		
		sw1.onclick = function() {
			showSwatch(sp_01,[sp_03,sp_05,sp_07,sp_09,sp_11],[sw2,sw3,sw4,sw5,sw6],sw1);
		};
		sw2.onclick = function() {
			showSwatch(sp_03,[sp_01,sp_05,sp_07,sp_09,sp_11],[sw1,sw3,sw4,sw5,sw6],sw2);
		};
		sw3.onclick = function() {
			showSwatch(sp_05,[sp_01,sp_03,sp_07,sp_09,sp_11],[sw2,sw1,sw4,sw5,sw6],sw3);
		};
		sw4.onclick = function() {
			showSwatch(sp_07,[sp_01,sp_03,sp_05,sp_09,sp_11],[sw2,sw3,sw1,sw5,sw6],sw4);
		};
		sw5.onclick = function() {
			showSwatch(sp_09,[sp_01,sp_03,sp_05,sp_07,sp_11],[sw2,sw3,sw4,sw1,sw6],sw5);
		};
		sw6.onclick = function() {
			showSwatch(sp_11,[sp_01,sp_03,sp_05,sp_07,sp_09],[sw2,sw3,sw4,sw5,sw1],sw6);
		};
		
		sw1.onmouseover = function() {
			showSwatch(sp_01,[sp_03,sp_05,sp_07,sp_09,sp_11],[sw2,sw3,sw4,sw5,sw6],sw1);
		};
		sw2.onmouseover = function() {
			showSwatch(sp_03,[sp_01,sp_05,sp_07,sp_09,sp_11],[sw1,sw3,sw4,sw5,sw6],sw2);
		};
		sw3.onmouseover = function() {
			showSwatch(sp_05,[sp_01,sp_03,sp_07,sp_09,sp_11],[sw2,sw1,sw4,sw5,sw6],sw3);
		};
		sw4.onmouseover = function() {
			showSwatch(sp_07,[sp_01,sp_03,sp_05,sp_09,sp_11],[sw2,sw3,sw1,sw5,sw6],sw4);
		};
		sw5.onmouseover = function() {
			showSwatch(sp_09,[sp_01,sp_03,sp_05,sp_07,sp_11],[sw2,sw3,sw4,sw1,sw6],sw5);
		};
		sw6.onmouseover = function() {
			showSwatch(sp_11,[sp_01,sp_03,sp_05,sp_07,sp_09],[sw2,sw3,sw4,sw5,sw1],sw6);
		};
		
		function showSwatch(a,b,c,d){
			TweenMax.set(a, {css:{zIndex:502}});
			TweenMax.set(b, {css:{zIndex:501}});
			TweenMax.set(b, {css:{opacity:0}});
			TweenMax.set(a, {css:{opacity:1}});
			TweenMax.set(c, {css:{scaleX:.8, scaleY:.8}});
			TweenMax.set(d, {css:{opacity:1, scaleX:1, scaleY:1}});
		}
	}


}
