jQuery( document ).ready( function ( $ ) {
	// Have to wait until the page is fully loaded because ads loading
	// asynchronously will change the last ad's position
	$( window ).bind( 'load', function() {
		$( '#div-gpt-1613311184-4 iframe, .fb-like-box.fb_iframe_widget' ).ready(function () {
			var $header = $( document.getElementById( 'header') );
			var $ad = $( '.sticky-ad' );
			var initialSpot = $ad.offset().top - $header.height() - 32;

			$( window ).scroll(function() {
				if ( $( window ).scrollTop() > initialSpot ) {
					$ad.css( 'position', 'fixed' );
					$ad.css( 'top', '85px' );
				} else {
					$ad.css( 'position', '' );
					$ad.css( 'top', '' );
				}
			});
		});
	});
});