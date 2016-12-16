!function(t){"use strict";function e(){}function n(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var r;e.prototype={constructor:e,debug:!1,trace:function(e){this.debug&&t.console&&t.console.log(e)},timerStart:function(){r=(new Date).getTime()},timerStop:function(){var t=(new Date).getTime()-r;this.trace("seconds elapsed: "+.001*t)},preloadImages:function(t){function e(){r++,r==t.length&&o(n)}for(var n=[],r=0,o=function(){},t="object"!=typeof t?[t]:t,a=0;a<t.length;a++)n[a]=new Image,n[a].onload=function(){e()},n[a].onerror=function(){e()},n[a].src=t[a];return{done:function(t){o=t||o}}},qs:function(t,e){return(e||document).querySelector(t)},qsa:function(t,e){return(e||document).querySelectorAll(t)},on:function(t,e,n,r){var o;o="string"==typeof t?qs(t):t,o.addEventListener(e,n,r||!1)},delegate:function(t,e,n,r){function o(n){var o=n.target,i=a.qsa(e,t),c=Array.prototype.indexOf.call(i,o)>=0;c&&r.call(o,n)}var a=this,i="blur"===n||"focus"===n;this.on(t,n,o,i)},parent:function(t,e){return t.parentNode?t.parentNode.tagName.toLowerCase()===e.toLowerCase()?t.parentNode:this.parent(t.parentNode,e):void 0},makeVar:function(t,e,n){var r;return r=n?t.replace(/-(.)|_(.)/g,function(t,e,n){var r="";return e&&(r+=e.charAt(0).toUpperCase()+e.substring(1,e.length)),n&&(r+=n.toUpperCase()),r}):t.replace(/-/g,"_"),e[r]=document.getElementById(t)},makeVars:function(t,e,n,r){for(var o=t.length,a;o--;)a=this.makeVar(t[o],e,r),n.push(a)},getAllIdElements:function(t){for(var e=t.getElementsByTagName("*"),n=[],r=e.length;r--;)e[r].hasAttribute("id")&&n.push(e[r]);return n},getAllIds:function(t,e,n){for(var r=t.getElementsByTagName("*"),o=[],a=r.length;a--;)if(r[a].hasAttribute("id")&&(o.push(r[a].id),e)){var i=n||"bu",c=r[a].id.replace(/-/g,"_");this.trace("var "+c+" = "+i+".qs('#"+r[a].id+"');")}return o},makeVarsFromIds:function(e,n,r,o){var a=this.getAllIds(e);this.makeVars(a,n||t,r||[],o)},recordStates:function(t){(!t||t.length<1)&&(t=this.getAllIdElements(document));for(var e=t.length;e--;)t[e].cl="",t[e].cl+=t[e].className},resetStates:function(t,e){(!t||t.length<1)&&(t=this.getAllIdElements(document));for(var n=t.length;n--;)t[n].cl?t[n].className=t[n].cl:this.trace("initial state not recorded for: "+t[n].id);if(e){var r=10*t.length;setTimeout(function(){e.apply()},r)}}},NodeList.prototype.forEach=Array.prototype.forEach;var o,a;t.addEventListener?(o=function(t,e,n){t.addEventListener(e,n,!1)},a=function(t,e,n){t.removeEventListener(e,n,!1)}):(o=function(e,n,r){e["e"+n+r]=r,e[n+r]=function(){e["e"+n+r](t.event)},e.attachEvent("on"+n,e[n+r])},a=function(t,e,n){t.detachEvent("on"+e,t[e+n]),t[e+n]=null}),e.prototype.addListener=o,e.prototype.removeListener=a;var i;i=t.stopPropagation?function(t){t.stopPropagation(),t.preventDefault()}:function(t){t.returnValue=!1,t.cancelBubble=!0},e.prototype.stopPropagation=i;var c;c=t.requestAnimationFrame?function(e){return t.requestAnimationFrame(e)}:t.webkitRequestAnimationFrame?function(e){return t.webkitRequestAnimationFrame(e)}:t.MozRequestAnimationFrame?function(e){return t.MozRequestAnimationFrame(e)}:function(e){return t.setTimeout(e,17)},e.prototype.requestFrame=c;var s;s=t.cancelAnimationFrame?function(e){return t.cancelAnimationFrame(e)}:t.webkitCancelAnimationFrame?function(e){return t.webkitCancelAnimationFrame(e)}:t.MozCancelAnimationFrame?function(e){return t.MozCancelAnimationFrame(e)}:function(e){return t.clearTimeout(e)},e.prototype.cancelFrame=s;var u;u=t.getComputedStyle?function(e){return t.getComputedStyle(e)}:function(t){return t.currentStyle},e.prototype.getStyle=u;var l,m,f;"classList"in document.documentElement?(l=function(t,e){return t.classList.contains(e)},m=function(t,e){t.classList.add(e)},f=function(t,e){t.classList.remove(e)}):(l=function(t,e){return n(e).test(t.className)},m=function(t,e){l(t,e)||(t.className=t.className+" "+e)},f=function(t,e){t.className=t.className.replace(n(e)," ")}),e.prototype.addClass=m,e.prototype.removeClass=f,e.prototype.hasClass=l,e.prototype.replaceClass=function(t,e,n){f(t,e),m(t,n)},t.BannerUtils=e}(window);

// @codekit-prepend "BannerUtils.min.js";

var Banner = {

	init: function() {

		'use strict'; 

		// Create new bannerUtils Class
		var bu = new BannerUtils();

		// Ad size and seen state
		var adWidth = 300,
			adHeight = 250,
			adSeen = false;

		// For debugging porpuses. Set this to false for final publishing
		// bu.debug = true;

		// Uncomment the line below to generate all variables from IDs in the HTML file (see browser console)
		// bu.getAllIds(document, true);

		var cta = bu.qs('#cta');
		var headline_4 = bu.qs('#headline-4');
		var bubble_2 = bu.qs('#bubble-2');
		var emoji_2 = bu.qs('#emoji-2');
		var bubble_1 = bu.qs('#bubble-1');
		var emoji_1 = bu.qs('#emoji-1');
		var headline_3 = bu.qs('#headline-3');
		var legal = bu.qs('#legal');
		var text = bu.qs('#text');
		var headline_2 = bu.qs('#headline-2');
		var bubble_0 = bu.qs('#bubble-0');
		var phone_2 = bu.qs('#phone-2');
		var phone_1 = bu.qs('#phone-1');
		var headline_1 = bu.qs('#headline-1');
		var branding = bu.qs('#branding');
		var ad_content = bu.qs('#ad_content');

		// Log all IDs
		var adLog = bu.getAllIdElements(document);		


		////////////////////////////////////////////////////// GSAP ANIMATION //////////////////////////////////////////////////////

		function adReset() {
			if(adSeen){
				disableRollover();
				TweenLite.set(adLog, { clearProps:'all' }); // reset all the tweens
				bu.resetStates(adLog, frame0); // put back the original classes
			} else {
				bu.recordStates(adLog);
				adClickThru();
				frame0();
			}
		}

		function frame0() {
			bu.removeClass(headline_1, 'alpha-0');
			TweenLite.from(headline_1, 0.5, { x: "-50", alpha: 0 });

			bu.removeClass(phone_1, 'alpha-0');
			TweenLite.from(phone_1, 0.5, { x: 100, alpha: 0 })

			bu.removeClass(phone_2, 'alpha-0');
			TweenLite.from(phone_2, 0.5, { x: 100, alpha: 0, delay: 0.25 })

			bu.removeClass(bubble_0, 'alpha-0');
			TweenLite.from(bubble_0, 0.5, { transformOrigin: "100% 100%", scale: 0.3, alpha: 0, delay: 0.75, ease: Back.easeOut });

			TweenLite.to([headline_1, bubble_0], 0.5, { alpha: 0, delay: 3 });

			TweenLite.delayedCall(3.5, frame1);			
		}

		function frame1() {
			bu.removeClass(headline_2, 'alpha-0');
			TweenLite.from(headline_2, 0.5, { x: "-50", alpha: 0 });

			bu.removeClass(text, 'alpha-0');
			TweenLite.from(text, 0.5, { x: "-50", alpha: 0, delay: 0.5 });

			bu.removeClass(legal, 'alpha-0');
			TweenLite.from(legal, 0.5, { x: "-50", alpha: 0, delay: 1 });

			TweenLite.to([headline_2, phone_1, phone_2, text, legal], 0.5, { alpha: 0, delay: 4 });

			TweenLite.delayedCall(4.5, frame2);
		}

		function frame2() {
			bu.removeClass(headline_3, 'alpha-0');
			TweenLite.from(headline_3, 0.5, { x: "-50", alpha: 0 });

			bu.removeClass(emoji_1, 'alpha-0');
			TweenLite.from(emoji_1, 0.5, { scale: 0.3, rotation: "-90", alpha: 0 });

			bu.removeClass(bubble_1, 'alpha-0');
			TweenLite.from(bubble_1, 0.5, { transformOrigin: "0% 100%", scale: 0.3, alpha: 0, delay: 0.5, ease: Back.easeOut });

			bu.removeClass(emoji_2, 'alpha-0');
			TweenLite.from(emoji_2, 0.5, { scale: 0.3, rotation: "-90", alpha: 0, delay: 1 });

			bu.removeClass(bubble_2, 'alpha-0');
			TweenLite.from(bubble_2, 0.5, { transformOrigin: "100% 100%", scale: 0.3, alpha: 0, delay: 1.5, ease: Back.easeOut });

			TweenLite.to([headline_3, emoji_1, emoji_2, bubble_1, bubble_2], 0.5, { alpha: 0, delay: 3 });

			TweenLite.delayedCall(3.5, frame3);
		}

		function frame3() {
			TweenLite.set(headline_2, { clearProps: "all" });
			TweenLite.from(headline_2, 0.5, { x: "-50", alpha: 0 });

			TweenLite.set(phone_1, { clearProps: "all" });
			TweenLite.from(phone_1, 0.5, { x: 100, alpha: 0 })

			TweenLite.set(phone_2, { clearProps: "all" });
			TweenLite.from(phone_2, 0.5, { x: 100, alpha: 0, delay: 0.25 });

			TweenLite.set(text, { clearProps: "all" });
			TweenLite.from(text, 0.5, { x: "-50", alpha: 0, delay: 0.5 });

			TweenLite.set(legal, { clearProps: "all" });
			TweenLite.from(legal, 0.5, { x: "-50", alpha: 0, delay: 0.75 });

			bu.removeClass(cta, 'alpha-0');
			TweenLite.from(cta, 0.5, { alpha: 0 });
		}

		function frameEnd() {
			enableRollover();
			adSeen = true;
		}


		////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

		function onAdClick(e) {
			window.open(window.clickTag);
		}

		function onAdHover(e) {
			TweenLite.to(cta, 0.5, { alpha: 0.7 });
		}

		function onAdOut(e) {
			TweenLite.to(cta, 0.5, { alpha: 1 });

		}

		function adClickThru() {
			bu.addListener(ad_content, 'touchEnd', onAdClick);
			bu.addListener(ad_content, 'click', onAdClick);
		}

		function enableRollover() {
			bu.addListener(ad_content, 'mouseenter', onAdHover);
			bu.addListener(ad_content, 'mouseleave', onAdOut);
		}

		function disableRollover() {
			bu.removeListener(ad_content, 'mouseenter', onAdHover);
			bu.removeListener(ad_content, 'mouseleave', onAdOut);
		}


		////////////////////////////////////////////////////// INIT ////////////////////////////////////////////////////////////////
		
		adReset();
	}
};

window.onload = function(){
	Banner.init();
};

