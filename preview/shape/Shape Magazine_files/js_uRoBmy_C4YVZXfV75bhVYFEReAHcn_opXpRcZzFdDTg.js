function ami_add_script(path, async, onload, attrs) {

    if (!async) async = false;

    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');

    script.setAttribute('async', async);
    script.setAttribute('defer', 'defer');
    for (var name in attrs) {
      script.setAttribute(name, attrs[name]);
    }

    script.setAttribute('src', path);

	if (onload) {
		script.onload = onload;
	}

    head.appendChild(script);
}

function ami_set_shared(url, $container) {

	jQuery.ajax({
    async: "true",
    type: 'GET',
    data: { url:url },
    url: '/ajax/ami-social-network/total',
    dataType: 'html',
    success: function (data) {
	    $container.html(data + '');
    },
    error: function() {
    	$container.html(0);
    }

   });

}

(function ($) {

  Drupal.ami_social_network = Drupal.ami_social_network || {};

  function ami_build_fb_src(url) {
  	
  	var href='http://' + window.location.hostname+url;
  	
  	var params = new Array(), query = new Array();

    params['app_id'] = '';
    
    params['href'] = href;
    
    params['layout'] = 'button_count';
    
    params['locale'] = 'en_US';
    
    params['sdk'] = 'joey';
    
    params['send'] = 'false';
    
    params['show_faces'] = 'false';
    
    params['channel'] = href;

    for (key in params) {
       query.push(key + '=' + params[key]);
    }

    var src = 'https://www.facebook.com/plugins/like.php?' + query.join('&');
    
    return src;
  };
  
  //points facebook like buttons to the gallery landing page, i.e. the first slide
  Drupal.ami_social_network.set_gallery_fb = function(settings) {
  
    if (((typeof settings.ami_social_network !== 'undefined')
      && (typeof settings.ami_social_network.eachSlide !== 'undefined'))
      && settings.ami_social_network.eachSlide) {
	  
	  $('.st_fblike_hcount iframe[title*="fb:like"').each(function(i, $iframe) {
	  	
	  	 $iframe.attr('src',ami_build_fb_src(gallery_landing_page));
     	 $iframe.attr('style','border:none;visibility:visible;width:450px;height:365px;z-index:999;');
     	 
	   });
    }
 };
 
 //points facebook like button to the slide page
 Drupal.ami_social_network.set_slide_fb = function(settings, slide) {
  
    if (((typeof settings.ami_social_network !== 'undefined')
      && (typeof settings.ami_social_network.eachSlide !== 'undefined'))
      && settings.ami_social_network.eachSlide) {
     	  
	  var gallery_landing_page = settings.ami_slideshow.path.replace('/slide/%INDEX%','');
	  
	  var $iframe=$('#fblike_slide iframe[title*="fb:like"]');
	  
	  $iframe.attr('src',ami_build_fb_src(slide.url));
	  
      $iframe.attr('style','border:none;visibility:visible;width:450px;height:365px;z-index:999;');
      
      var $phrase_el=$('#fb_like_each_slide_phrase');
      
      var phrase=slide.text.fb_like_each_slide_phrase?slide.text.fb_like_each_slide_phrase:'';
      
      $phrase_el.html(phrase);
      
    }
 };

  Drupal.behaviors.ami_social_network = {
    attach: function (context, settings) {

      $('body').once('ami_social_network', function() {
         // additional attribute for the pinit.js script exposes the PinIt reparse function (parsePinBtns()) in the global scope
         ami_add_script('http://assets.pinterest.com/js/pinit.js', true, function(){}, {'data-pin-build': 'parsePinBtns'});
         var switchTo5x=true;
         var stLightOptions = {
            publisher: "d443fa37-246d-42e6-b17a-80ceab5d20f2",
            doNotHash: true,
            doNotCopy: true,
            hashAddressBar: false
         };
         ami_add_script('http://w.sharethis.com/button/buttons.js', true, function() {
           // Theck if the stLight objeck exists.
           if (typeof stLight !== 'undefined') {
            stLight.options(stLightOptions);
           }
         }
         );
      });
    }
  };

})(jQuery);
;
