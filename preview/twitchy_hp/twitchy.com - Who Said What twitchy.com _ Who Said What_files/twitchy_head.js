// resize throttle handler
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

var twt_i = 0,
	i = 0,
	n = 3;

jQuery(document).ready(function($){
	var $twireContainer = $( '.twire .tweets' ),
		infinite_count = 0;

	on_resize(function() {
		var w = $(window).width();

		if ( w <= 480 )
			n = 2;
		else if ( w < 768 )
			n = 3;
		else
			n = 3;
	})();

	$twireContainer.imagesLoaded( function(){
		$twireContainer.masonry({
			itemSelector: '.bubble',
			stamp: '.stamp'
		});
	});

	$( document.body ).on( 'post-load', function () {
		infinite_count += 1;

		var $selector = $( '#infinite-view-' + infinite_count ),
			$elements = $selector.find( '.bubble' );

		$twireContainer.imagesLoaded( function() {
			$twireContainer.masonry( 'appended', $elements );
		});

	});
});