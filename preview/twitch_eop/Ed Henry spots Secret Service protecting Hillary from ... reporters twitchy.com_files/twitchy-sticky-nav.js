jQuery(document).ready(function($){
	var $nav = $( document.getElementById('header-wrapper') );
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 75) {
			$nav.addClass('sticky-nav');
		} else {
			$nav.removeClass('sticky-nav');
			$nav.find('*').removeAttr('style');
		}
	});

	$( document ).on( 'click', '#nav-toggle', function (event) {
		event.preventDefault();
		event.stopPropagation();
		if ( $(this).hasClass( 'fa-times' ) ) {
			$(this).removeClass( 'fa-times' );
			$(this).addClass( 'fa-bars' );
			$('#nav-wrapper').hide();
			$('#nav-title, .social-icons').show();
		} else {
			$(this).removeClass( 'fa-bars' );
			$(this).addClass( 'fa-times' );
			$('#nav-title, .social-icons').hide();
			$('#nav-wrapper').show();
		}
	});

	$( document ).on( 'click', '.nav-icon.up', function (event) {
		event.preventDefault();
		event.stopPropagation();
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});