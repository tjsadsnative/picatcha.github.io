

$(document).ready(function () {

//var API_URL = "http://cdn.api.twitter.com/1/urls/count.json";
//	var FB_URL = "https://api.facebook.com/method/";
  
	
	//$(".like").each(function() {
  //  var elem = $(this);
   // url = encodeURIComponent(elem.attr("data-url") || document.location.href);
//	url = elem.attr('data-url');
  //  $.getJSON(FB_URL + "links.getStats?urls=" + url + "&format=json", function(data) {
 //       elem.find(".count").html(data[0]['total_count']);
  //  });
//});

     
//$(".tweet").each(function() {
  //   var elem = $(this);
   // url = encodeURIComponent(elem.attr("data-url") || document.location.href);
	//url = elem.attr('data-url');
  //  $.getJSON(API_URL + "?callback=?&url=" + url, function(data) {
  //      elem.find(".count").html(data.count);
  //  });
//});


if (!$("html").hasClass("ie8") && !$("html").hasClass("ie9"))  {
   //header ad http://stackoverflow.com/questions/1591135/why-does-appending-a-script-to-a-dynamically-created-iframe-seem-to-run-the
    
     
	 var iframe = document.createElement('iframe');
	// iframe.src = 'about:blank'; 
	  var ad = document.getElementById('ad-container');
     ad.appendChild(iframe);
	
           var val = '<scr' + 'ipt src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\">    googletag.pubads().definePassback(\"\/20893548\/yb\/insidethehall\", [728,90]).setClickUrl(\"%%CLICK_URL_UNESC%%\").display();\r\n<\/script>';
	 var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=282152&u=pabozich&width=320&height=50"></sc'+'ript>';
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      var width = window.innerWidth || document.documentElement.clientWidth;
	if (width >= 728) {
      doc.write(val);
      }
      else {
      // doc.write(valm);
      }
      doc.close();
// ,
      
  
     var iframe = document.createElement('iframe');
	 var ad = document.getElementById('top-ad');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=214471&u=pabozich&width=300&height=250"></sc'+'ript>';
     
     
     
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
      
         var iframe = document.createElement('iframe');
	 var ad = document.getElementById('bottom-ad');
     ad.appendChild(iframe);

          
     var valm = '<scr' + 'ipt src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\">    googletag.pubads().definePassback(\"\/20893548\/yb\/insidethehall\", [300,250]).setClickUrl(\"%%CLICK_URL_UNESC%%\").display();\r\n<\/script>';
     
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
       var iframe = document.createElement('iframe');
	 var ad = document.getElementById('left-sidebar-ad');
     ad.appendChild(iframe);

          
     var valm = '<scr' + 'ipt src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\">    googletag.pubads().definePassback(\"\/20893548\/yb\/insidethehall\", [160,600]).setClickUrl(\"%%CLICK_URL_UNESC%%\").display();\r\n<\/script>';
     
     
     
   
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
        var iframe = document.createElement('iframe');
	 var ad = document.getElementById('right-sidebar-ad');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=283638&u=pabozich&width=160&height=600"></sc'+'ript>';
     

     
     
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
  
  	 var iframe = document.createElement('iframe');
	 var ad = document.getElementById('sidebar-last');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=131888&u=pabozich&width=300&height=250"></sc'+'ript>';
    
     
   
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
      var iframe = document.createElement('iframe');
	 var ad = document.getElementById('sidebar-last-last');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=131889&u=pabozich&width=300&height=250"></sc'+'ript>';
    
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
       var iframe = document.createElement('iframe');
	 var ad = document.getElementById('footer-ad');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=283639&u=pabozich&width=728&height=90"></sc'+'ript>';
    
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
      doc.write(valm);
      doc.close();
      
    
      
        var iframe = document.createElement('iframe');
	 var ad = document.getElementById('google-footer');
     ad.appendChild(iframe);

          
     var valm = '<scr'+'ipt type="text/javascript" src="http://ap.lijit.com/www/delivery/fpi.js?z=282153&u=pabozich&width=320&height=50"></sc'+'ript>';
    
      
      // get a handle on the <iframe>d document (in a cross-browser way)
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) {
        doc = doc.document;
      }

      // open, write content to, and close the document
      doc.open();
     // doc.write(valm);
      doc.close();
	
  $("#ad-container iframe,  #bottom-ad iframe, #top-ad iframe, #left-sidebar-ad iframe, #right-sidebar-ad iframe, #sidebar-last iframe, #sidebar-last-last iframe, #footer-ad iframe, #google-footer iframe"  ).on("load", function () {
       $(this).css({'visibility': 'visible'});
});

}

      


$(window).resize(function () {


});

$( "ul.search li" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);

	
		$('#toggle-photos').click(function(e) {
		e.preventDefault();
	  if ($(this).hasClass('collapse')) {
		 $('#news-wrap').slideDown(425);
		 $('#photos-wrap').slideUp(425);
		 $('#toggle-photos').removeClass('collapse');
		 $('#toggle-photos .glyphicons.circle_remove').removeClass('show');
		 $('#toggle-photos .glyphicons.circle_plus').removeClass('hide');
		 
		 
	   ;
	  }

	  
	  else {
	 
	    $('#news-wrap').slideUp(425);
		 $('#photos-wrap').slideDown(425);
		 $('#toggle-photos').addClass('collapse');
		 $('#toggle-photos .glyphicons.circle_remove').addClass('show');
		 $('#toggle-photos .glyphicons.circle_plus').addClass('hide');	 	  }
	  
	});
	
	
  $('#toggle-comments').click(function(e) {
		e.preventDefault();
	  if ($(this).hasClass('collapse')) {
		 $('.post.comments').slideUp(425);
		  $('#toggle-comments').removeClass('collapse');
		 $('#toggle-comments .glyphicons.circle_remove').removeClass('show');
		 $('#toggle-comments .glyphicons.circle_plus').removeClass('hide');
		 
		 
	   ;
	  }	
	
	  else {
	 
		 $('.post.comments').slideDown(425);
		 $('#toggle-comments').addClass('collapse');
		 $('#toggle-comments .glyphicons.circle_remove').addClass('show');
		 $('#toggle-comments .glyphicons.circle_plus').addClass('hide');	 	  }
	  
	});
	
	
	$('#magnify').click(function() {
	  if ($(this).hasClass('hi')) {
		$('.search-box').fadeOut();
  $('#magnify').removeClass('hi')
	  }
	  
	  else {
$('.search-box').fadeIn();
  $('#magnify').addClass('hi');
	  }
	});
	

$('#smoothup').on('click', function(){

        $('html, body').animate({scrollTop:0}, 'fast');

        return false;

        });
	
	
	$(".left-rail h2 a").each(function() {
  var wordArray = $(this).text().split(" ");
  if (wordArray.length > 1) {
    wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
    wordArray.pop();
    $(this).html(wordArray.join(" "));
  }
});


	$(".single .left-rail h2").each(function() {
  var wordArray = $(this).text().split(" ");
  if (wordArray.length > 1) {
    wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
    wordArray.pop();
    $(this).html(wordArray.join(" "));
  }
});
	



  });	
  
  



