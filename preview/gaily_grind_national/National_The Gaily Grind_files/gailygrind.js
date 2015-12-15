/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';
$('body').addClass('cbp-spmenu-push');
// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

$( document ).ready(function() {
	




	
	
(function() {

	var Config = {
		Link: "a.share",
		Width: 500,
		Height: 500
	};

	// add handler links
	var slink = document.querySelectorAll(Config.Link);
	for (var a = 0; a < slink.length; a++) {
		slink[a].onclick = PopupHandler;
	}

	// create popup
	function PopupHandler(e) {

		e = (e ? e : window.event);
		var t = (e.target ? e.target : e.srcElement);

		// popup position
		var
			px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);

		// open popup
		var popup = window.open(t.href, "social", "width="+Config.Width+",height="+Config.Height+",left="+px+",top="+py+",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		if (popup) {
			popup.focus();
			if (e.preventDefault) e.preventDefault();
			e.returnValue = false;
		}

		return !!popup;
	}

}());

  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: false,
    customDirectionNav:  $(".custom-navigation span"),
	itemWidth: '1050px',
	slideshowSpeed : 5000,
  });
if ($("body").hasClass("single-post")) {
	  	$('.flexslider-top').show();

    $('.flexslider-top').flexslider({
	 	animation: "slide",
		animationLoop: true,    
		customDirectionNav:  $(".arrows-top span"),
		itemWidth: 330,
		itemMargin: 5,
		minItems: 3,
		maxItems: 3,
  });

  
}
  
  (function($) {
	 var page = 2;

	$(document).on( 'click', '.fancy-purple', function( event ) {
		event.preventDefault();
		
		
		var load_posts = function(){ 
			 $.ajax({
				url: ajaxpagination.ajaxurl,
				type: 'post',
				data: {
					action: 'ajax_pagination',
					cat: ajaxpagination.category,
					pageNumber: page,
					},
				success: function( result ) {
					if (!result || 0 === result.length){
						
					$(".fancy-purple h3").text('No more stories to load');
					}else{
					
					$(".more").append(result);
					page++;
					}
				}
			});
		};

		load_posts();
	
	});
})(jQuery);



$('#trending a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$('#latest a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


var	
menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
showRightPush = document.getElementById( 'togglemenu' ),
closeright =document.getElementById('closemenu'),
	body = document.body;
	
	$("#togglemenu, #closemenu").click(function(event){
    event.preventDefault();
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toright' );
		$('body').toggleClass( "noscroll" );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
	}); 
	
	
	




	

var scrollTimer, lastScrollFireTime = 0;
var top ;
if ($("body").hasClass("single-post")) {
	top = $('.full-height-block').offset().top - parseFloat($('.full-height-block').css('marginTop').replace(/auto/, 0));	
}

$(window).on('scroll', function() {
	
	if ($("body").hasClass("single-post")) {

	if (window.innerWidth < 767){
		
		if ($(window).scrollTop() > 520){
			$("#adtop").hide();
		}else{
			$("#adtop").show();
		}
		
		if ($(window).scrollTop() > 150){
			
			$(".social-mobile2").show();
			$(".logo-mobile").addClass('shareview');
			$("body.single-post header .container").addClass('shareview');
			
			$(".social-mobile").hide();
			
		}else{
			$(".social-mobile2").hide();
			$(".logo-mobile").removeClass('shareview');
			$("body.single-post header .container").removeClass('shareview');
			$(".social-mobile").show();
			
		}
	}
	}
	function processScroll(){

		if (($(window).scrollTop() > 83)){
			$(".top-header").hide();
			$("#site-navigation").hide();
			$("#site-navigation-2").show();
			$(".site-header").addClass('sticky');
			
		}else{
			$(".top-header").show();
			$("#site-navigation-2").hide();
			$("#site-navigation").show();
			$(".site-header").removeClass('sticky');
		}
		

var footTop;
var maxY ;

if ($("body").hasClass("single-post")) {

    footTop = $('#fin-article').offset().top - parseFloat($('#fin-article').css('marginTop').replace(/auto/, 0));
    maxY = footTop - 360;
	maxY = maxY;
}

		
		
		var y = $(this).scrollTop();
        if (y > top && (window.innerWidth > 767)) {
            if (y < maxY) {
                $('.article-social-float').addClass('fixed').removeAttr('style');
            } else {
                $('.article-social-float').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY + 30 - top) + 'px'
                });
            }
        } else {
            $('.article-social-float').removeClass('fixed');
        }
		
		
	}

    var minScrollTime = 50;
    var now = new Date().getTime();


    if (!scrollTimer) {
        if (now - lastScrollFireTime > (3 * minScrollTime)) {
            processScroll();   // fire immediately on first scroll
            lastScrollFireTime = now;
        }
        scrollTimer = setTimeout(function() {
            scrollTimer = null;
            lastScrollFireTime = new Date().getTime();
            processScroll();
        }, minScrollTime);
    }
	
	
	
});
	
	

	

	
	
	
	
	
	
	
	
	
	
});