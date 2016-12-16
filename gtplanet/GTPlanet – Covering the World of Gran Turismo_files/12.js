/*** VARIABLE SETUP ***/
var page_width = document.documentElement.clientWidth;

/*** FUNCTIONS ***/
/* jquery resize text plugin */
/* https://gist.github.com/mekwall/1263939 */
/* http://stackoverflow.com/questions/687998/auto-size-dynamic-text-to-fill-fixed-size-container */
(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function(){
            var ourText = $("a", this),
                parent = ourText.parent(),
                maxHeight = parent.height(),
                maxWidth = parent.width(),
                fontSize = parseInt(ourText.css("fontSize"), 10),
                multiplier = maxWidth/ourText.width(),
                newSize = (fontSize*(multiplier-0.1));
            ourText.css(
                "fontSize", 
                (maxFontSize > 0 && newSize > maxFontSize) ? 
                    maxFontSize : 
                    newSize
            );
        });
    };
})(jQuery);

function randomInt(max) {
	return (Math.floor(Math.random() * max));
}


/*** DOCUMENT READY ***/
$(document).ready(function() {
	
	/******************************/
	/* CLOSE POP-UP SOCIALS WHEN CLICKED OUTSIDE */
	$(document).click(function(e) {
		$('.social-popup').hide();
		var container = $('div#xen-search-popup');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('li#searchbox').removeClass('xen-searchbox-active');
				$('a#xen-search-tab').removeClass('nav-menu-search-active');
		        container.hide();
		}
	});
	
	/******************************/
	/* RESPONSIVE POP-UP MENUS */
	$(".nav-menu-tab").click(function(event) {
		event.stopPropagation();
		
		$(".nav").toggle();
		$(".nav-search-popup").hide();
		$(".nav-menu-search").removeClass("nav-menu-search-active");
		
		$(".nav-menu-tab").toggleClass("nav-menu-tab-active");
		
		if ($(".nav-menu-tab").hasClass("nav-menu-tab-active")) {
			$("#nav-menu-arrow").html("▲");
		}
		else {
			$("#nav-menu-arrow").html("▼");
		}
		
		return false;
	});
	
	/* pop-up responsive Google search box */
	$("#google-search-tab").click(function(event) {
		event.stopPropagation();
		
		$('#g-search-submit').prependTo('#g-search-popup');
		$('#g-search-textfield').prependTo('#g-search-popup');
		
		$('.nav').hide();
		$('.nav-menu-tab').removeClass('nav-menu-tab-active');
		$('#nav-menu-arrow').html('▼');
		
		$('#g-search-popup').toggle();
		$('.nav-menu-search').toggleClass('nav-menu-search-active');
		
		return false;
	});
	
	/* pop-up for responsive Xen search box */
	$('#xen-search-tab').click(function(event) {
		event.stopPropagation();
		
		$('#QuickSearchQuery').show();
		$('#QuickSearchQuery').attr( "name", "keywords" );
		
		$('.nav').hide();
		$('.nav-menu-tab').removeClass('nav-menu-tab-active');
		$('#nav-menu-arrow').html('▼');
		
		$('#xen-search-popup').toggle();
		$('.nav-menu-search').toggleClass('nav-menu-search-active');
		
		return false;
	});
	
	/* pop-up for xenforo search menu */
	$('input#xen-search-textfield').click(function(event) {
		$('li#searchbox').addClass('xen-searchbox-active');
		$('div#xen-search-popup').show();
		
		return false;
	});
	
	/******************************/
	/* SOCIAL BUTTONS */
	if (page_width > 935) {
		$('a#gp').click(function(event) {
			$('.social-popup').hide();
			event.stopPropagation();
			event.preventDefault();
			$('#gp-pop').show();
			
			(function() {
			  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			  po.src = 'https://apis.google.com/js/plusone.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			})();
		});
		
		$('a#fb').click(function(event) {
			$('.social-popup').hide();
			event.stopPropagation();
			event.preventDefault();
			$('#fb-pop').show();
			
			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=360623070677053";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		});
		
		$('a#tw').click(function(event) {
			$('.social-popup').hide();
			event.stopPropagation();
			event.preventDefault();
			$('#tw-pop').show();
			
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		});
		
		/*$('a#yt').click(function(event) {
			$('.social-popup').hide();
			event.preventDefault();
			event.stopPropagation();
			
			$('#yt-pop').show();
			
			$('#yt-pop-iframe').attr('src','http://www.youtube.com/subscribe_widget?p=gtplanet');
		});*/
	}
	
	/* GTPEDIA BLOG PSEUDO-MINIPOST RANDOM IMAGE, ONLY ON PAGES THAT NEED IT */
	if ($('#gtpedia-minipost-link').length)
	{
		$('<img src="/assets/12/gtpedia-minipost-thumbs/' + randomInt(10) + '.jpg" height="200" width="200" alt="GTPEDIA" />').appendTo('a#gtpedia-minipost-link');
	}

	/******************************/
	/* DISABLE MEMBER CARD POPUPS IN XENFORO */
	//$('a.username, a.avatar').unbind();
	 
	/* AD BLOCK REPLACEMENTS */
	if (adBlock && (page_width > 970))
	{
			// log visit
			_gaq.push(['_setCustomVar', 2, 'adBlocked', 'True', 2]);

			// leaderboards
			var leaderboards = new Array(
				'<a class="blocked-replacement-leaderboard" style="background-image:url(/assets/12/ab/gtpedia-770.png?v=2);" href="/gtpedia/?utm_source=ab&utm_medium=banner&utm_content=GTPEDIA-770&utm_campaign=GTPEDIA"></a>',
				'<a class="blocked-replacement-leaderboard" style="background-image:url(/assets/12/ab/gt6-AVAILABLE-audiquattro.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-leaderboard" style="background-image:url(/assets/12/ab/gt6-AVAILABLE-countach.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-leaderboard" style="background-image:url(/assets/12/ab/gt6-AVAILABLE-deltawing.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-leaderboard" style="background-image:url(/assets/12/ab/gt6-AVAILABLE-medley.jpg)" href="/geo-GT6-preorder.php?action=go"></a>'
			);			
			$('#pre-content').html(leaderboards[randomInt(leaderboards.length)]);
			
			// squares
			/*'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/grand-valley-speedway.png)" href="/gtpedia/?utm_source=ab&utm_medium=banner&utm_content=GTPEDIA-300&utm_campaign=GTPEDIA"></a>',
			'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/special-stage-route-11.png)" href="/gtpedia/?utm_source=ab&utm_medium=banner&utm_content=GTPEDIA-300&utm_campaign=GTPEDIA"></a>',
			'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/trial-mountain.png)" href="/gtpedia/?utm_source=ab&utm_medium=banner&utm_content=GTPEDIA-300&utm_campaign=GTPEDIA"></a>',*/
			var squares = new Array(
				'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/gtpedia-square.png)" href="/gtpedia/?utm_source=ab&utm_medium=banner&utm_content=GTPEDIA-300&utm_campaign=GTPEDIA"></a>',
				'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/gt6-AVAILABLE-gtr.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/gt6-AVAILABLE-quattro.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/gt6-AVAILABLE-rocket.jpg)" href="/geo-GT6-preorder.php?action=go"></a>',
				'<a class="blocked-replacement-square" style="background-image:url(/assets/12/ab/squares/gt6-AVAILABLE-sls.jpg)" href="/geo-GT6-preorder.php?action=go"></a>'
			);
			$('#sidebar1').html(squares[randomInt(squares.length)]);
			$('#sidebar2').html(squares[randomInt(squares.length)]);
			$('#sidebar3').html(squares[randomInt(squares.length)]);
	}
	
	/* resize long usernames in forum posts */
	$(".usernameContainer").textfill(15);
});
