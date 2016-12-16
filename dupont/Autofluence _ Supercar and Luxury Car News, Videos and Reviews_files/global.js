jQuery(function($){

	// FitVids
	$('.entry-content').fitVids();
	
	// Fixed header on scroll
	var header = {
		current: 0,
		prev: 0,
	    allow: true,
	    reallow: function() {
	        header.allow = true;
	    },
	    delay: 50 //(milliseconds) adjust to the highest acceptable value
	};

	$(window).scroll(function(){
		if( header.allow ) {
		
			header.allow = false;
			setTimeout(header.reallow, header.delay);
			header.current = $(window).scrollTop();
			
			if( 500 < header.current )
				$('.persistent-header').addClass('fixed');
			else
				$('.persistent-header').removeClass('fixed');
			

			if( header.current < header.prev )
				$('.persistent-header').addClass('down');
			else
				$('.persistent-header').removeClass('down');
				
			header.prev = header.current;

		}
	});
			
	// Expand Comments
	$('.comment-toggle').click(function(e){
		e.preventDefault();
		$(this).find('span').toggleClass('active');
		$('#respond').slideToggle();
	});

	// Move total share count number
	$('.ea-share-count-wrap').each(function(){
		var count = $(this).find('.ea-share-count-button.included_total');
		if( count.length ) {
			$(count).find('.ea-share-count').prependTo(count).css('display', 'block');
		}
	});
	
	// Expand facebook share after article
	if( $('body').hasClass('single-post') ) {
		$('.entry-footer .facebook .ea-share-count-label').text('LIKE THIS ARTICLE? SHARE IT ON FACEBOOK!');
	}
	
	// Play button on archive images
	$('.blog-archive .has-post-thumbnail.has-video').each(function(){
		$(this).find('.entry-image-link').prepend( '<i class="icon-play"></i>' );
	});
	
	// Home Rotator
	$('.home-featured .flexslider').flexslider({
		animation: 'slide',
		controlNav: false,
		prevText: '<i class="icon-slider-arrow-left"></i>',
		nextText: '<i class="icon-slider-arrow-right"></i>',
	});
	
	// Mobile Menu
	$('#mobile-menu-toggle').sidr({
		name: 'mobile-menu',
	});
	$('.sidr .menu-item-has-children > a').append( ' <i class="icon-arrow-right"></i><i class="icon-close"></i>' );
	$('.sidr .menu-item-has-children > a').click(function(e){
		$(this).parent().toggleClass('submenu-active');
		e.preventDefault();
	});
	$('.sidr .menu-close').click(function(){
		$.sidr('close', 'mobile-menu');
	})
		
	// Smooth scrolling anchor links
	function ea_scroll( hash ) {
		var target = $( hash );
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			var top_offset = 0;
			if ( $('.site-header').css('position') == 'fixed' ) {
				top_offset = $('.site-header').height();
			}
			if( $('body').hasClass('admin-bar') ) {
				top_offset = top_offset + $('#wpadminbar').height();
			}
			 $('html,body').animate({
				 scrollTop: target.offset().top - top_offset
			}, 1000);
			return false;
		}
	}
	// -- Smooth scroll on pageload
	if( window.location.hash ) {
		ea_scroll( window.location.hash );
	}
	// -- Smooth scroll on click
	$('a[href*=#]:not([href=#]):not(.no-scroll)').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			ea_scroll( this.hash );
		}
	});
	
	
});
