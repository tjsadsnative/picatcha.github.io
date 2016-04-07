jQuery( document ).ready( function( $ ) {
	// Find all content blocks with paragraphs containing twitter and try to "oembed" them
	$('.entry-content')
		.find('p:contains("twitter.com")')
			.each( twitchy_do_twitter_oembed );

	// Also handle failed tweets or tweets that haven't been fetched yet
	$( '.pending-tweet' ).each( twitchy_do_twitter_oembed );

	function twitchy_do_twitter_oembed() {
		var $this = $(this),
			text = $this.text(),
			url = 'http://api.twitter.com/1/statuses/oembed.json?omit_script=true&callback=?&';

		// get rid of extra spaces in the tweet URL, since that can break the regex
		text = $.trim( text );

		// If we find an exact match, we want to fetch its content from the oembed endpoint and display it
		if ( text.match( /^(http|https):\/\/twitter\.com(\/\#\!\/|\/)([a-zA-Z0-9_]{1,20})\/status(es)*\/(\d+)$/ ) ) {
			url += 'url=' + encodeURIComponent( text );
		} else if ( text.match( /^(\d+)$/ ) ) {
			url += 'id=' + text;
		} else {
			return;
		}

		// Need to make a JSONP call to avoid CORS issues
		$.getJSON( url, function( data ) {
			if ( data.html ) {
				$this.html( data.html );
				$this.show();
			}
		} );
	}
} );
