jQuery.noConflict();









// Smooth scroll to top
(function( $ ) {
  $(function() {


    // More code using $ as alias to jQuery
  var $scrollup = $('.js-scrollup');
  $(window).scroll(function() {


	  if ( $(window).scrollTop() > $('.page-menu-options').offset().top ) {
		    $scrollup.fadeIn(200);
	  } else {
		    $scrollup.fadeOut(200);
	  }

  });
  $scrollup.click(function() {
    console.log(1);
    $('html, body').animate({scrollTop: $(".page-menu-options").offset().top - 100}, 800);
    return false;
  });
  });
})(jQuery);




// Smooth scroll to an anchor
(function( $ ) {
$(document).ready(function(){

	$('.smoothscroll[href^="#"]').on('click', function(e) {
	    e.preventDefault();
      var target = this.hash;
      $target = $(target);

      console.log($target.offset().top);
      console.log($target.offset().top + 100);

      $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


})(jQuery);














// Dynamically add Subscribe to Email list button to end of article based on page location
(function( $ ) {




  $(function() {

	var cultureForm = '<div class="article-subscription"><form class="article-subscription__form" method="post" action="http://link.lamag.com/s"><label class="article-subscription__label sans-serif" for="email">RECEIVE MORE STORIES LIKE THIS IN YOUR INBOX</label> <fieldset class="article-subscription__fieldset"><input class="article-subscription__input article-subscription__input--email sans" type="email" required name="email" placeholder="Your Email Address" /><input id="btnValidate" class="article-subscription__input article-subscription__input--subscribe sans-serif" type="submit" value="SUBSCRIBE" /><input type="hidden" name="redirect" value="http://www.lamag.com/newsletters/culture-subscription-confirmation/"/><input type="hidden" name="template" value="confirmation-culture"/><input type="hidden" name="vars[source]" value="culturepost" /></fieldset></form></div>';

	var digestForm = '<div class="article-subscription"><form class="article-subscription__form" method="post" action="http://link.lamag.com/s"><label class="article-subscription__label sans-serif" for="email">RECEIVE MORE STORIES LIKE THIS IN YOUR INBOX</label> <fieldset class="article-subscription__fieldset"><input class="article-subscription__input article-subscription__input--email sans" type="email" required name="email" placeholder="Your Email Address" /><input id="btnValidate" class="article-subscription__input article-subscription__input--subscribe sans-serif" type="submit" value="SUBSCRIBE" /><input type="hidden" name="redirect" value="http://www.lamag.com/newsletters/digest-subscription-confirmation/"/><input type="hidden" name="template" value="confirmation-digest"/><input type="hidden" name="vars[source]" value="digestpost" /></fieldset></form></div>';

	var clutchForm = '<div class="article-subscription"><form class="article-subscription__form" method="post" action="http://link.lamag.com/s"><label class="article-subscription__label sans-serif" for="email">RECEIVE MORE STORIES LIKE THIS IN YOUR INBOX</label> <fieldset class="article-subscription__fieldset"><input class="article-subscription__input article-subscription__input--email sans" type="email" required name="email" placeholder="Your Email Address" /><input id="btnValidate" class="article-subscription__input article-subscription__input--subscribe sans-serif" type="submit" value="SUBSCRIBE" /><input type="hidden" name="redirect" value="http://www.lamag.com/newsletters/clutch-newsletter-subscription-confirmation/"/><input type="hidden" name="template" value="confirmation-clutch"/><input type="hidden" name="vars[source]" value="clutchpost" /></fieldset></form></div>';

  var insiderForm = '<div class="article-subscription"><form class="article-subscription__form" method="post" action="http://link.lamag.com/s"><label class="article-subscription__label sans-serif" for="email">RECEIVE MORE STORIES LIKE THIS IN YOUR INBOX</label> <fieldset class="article-subscription__fieldset"><input class="article-subscription__input article-subscription__input--email sans" type="email" required name="email" placeholder="Your Email Address" /><input id="btnValidate" class="article-subscription__input article-subscription__input--subscribe sans-serif" type="submit" value="SUBSCRIBE" /><input type="hidden" name="redirect" value="http://www.lamag.com/newsletters/insider-alert-subscription-confirmation/"/><input type="hidden" name="template" value="confirmation-insider"/><input type="hidden" name="vars[source]" value="insiderpost" /></fieldset></form></div>';


  var shortstackForm = '<div class="article-subscription"><form class="article-subscription__form" method="post" action="http://link.lamag.com/s"><label class="article-subscription__label sans-serif" for="email">RECEIVE MORE STORIES LIKE THIS IN YOUR INBOX</label> <fieldset class="article-subscription__fieldset"><input class="article-subscription__input article-subscription__input--email sans" type="email" required name="email" placeholder="Your Email Address" /><input id="btnValidate" class="article-subscription__input article-subscription__input--subscribe sans-serif" type="submit" value="SUBSCRIBE" /><input type="hidden" name="redirect" value="http://www.lamag.com/newsletters/short-stack-newsletter-subscription-confirmation/"/><input type="hidden" name="template" value="confirmation-shortstack"/><input type="hidden" name="vars[source]" value="shortstackpost" /></fieldset></form></div>';


if ( window.location.href.substring(21, 33) === "culturefiles" ) {

	$( cultureForm ).insertAfter( $('.entry-content .story-tags').eq(1) );

} else

if ( window.location.href.substring(21, 31) === "digestblog" ) {

	$( digestForm ).insertAfter( $('.entry-content .story-tags').eq(1) );

} else

if ( window.location.href.substring(21, 30) === "theclutch" ) {

	$( clutchForm ).insertAfter( $('.entry-content .story-tags').eq(1) );

}


if ( window.location.pathname.substring(1, 9) === "longform" ) {

  $( insiderForm ).insertAfter( $('.entry-content .story-tags').eq(1) );

}

if ( window.location.pathname.substring(1, 14) === "citythinkblog" ) {

  $( shortstackForm ).insertAfter( $('.entry-content .story-tags').eq(1) );

}


  });




})(jQuery);













// (function( $ ) {
//
//   // Dynamically adjust height of LA Social promo unit container
//   $('#promounit-iframe').iFrameResize();
//   $('#mostread-iframe iframe').iFrameResize();
//
//
// })(jQuery);










(function( $ ) {

// Get rid of pesky &nbsp; entities that Wordpress generates by adding to containers a helper class called no-breaking-spaces
var $noBreakingSpaces = $('.no-breaking-spaces');

$noBreakingSpaces.each(function() {

  var $this = $(this);
  $this.html($this.html().replace(/&nbsp;/g, ''));

});

// Get rid of empty paragraph tags that create unwanted spacing

var $noEmptyP = $('.no-empty-p');

$noEmptyP.each(function() {
  var allP = $(this).find('p');
  allP.each(function(i, val) {
    if (val.innerHTML === "") {
      $(this).remove();
    }
  });
});



// Add Gotham font to head
// $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '//cloud.typography.com/7997572/693284/css/fonts.css') );



})(jQuery);
