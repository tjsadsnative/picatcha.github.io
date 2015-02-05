define('components/centerPiece',['jquery','pubsub','fotorama','ba-resize'], function(jquery){


    var module = {

        showFbShare : function(options){
        	
         /* Commented out as part of removing the facebook call from the CPC - Modified by Sreela 
          *  var j=0,cpShareCounts =[];
		   cpShareCounts = $(options.el).attr('fbjsonObj');

           if(cpShareCounts != undefined && cpShareCounts != 'undefined'){

               cpShareCounts =  JSON.parse(unescape(cpShareCounts));
               jQuery.each(cpShareCounts, function(i, val) {
                  if(val.shares != undefined && val.shares >1000){
                     $('.fbShare').eq(j).html( require('app/utils').addCommaToNumber(val.shares) + " shared this");
                   }
                   j++;
               });
           }
           $(options.el).removeAttr('fbjsonObj'); */
           this.init();
		   /* US7316 - Stop Autoplay on carousel hover */
            this.stopAutoplayOnHover();
        },
        
    	init: function(options){    
		  	// Initialize the gallery
    	  	$('#centerPieceCotainer').fotorama();
    	},
		stopAutoplayOnHover: function(){
            var winWidth = $(window).width();
			if(winWidth> 1024){
				var $fotorama = $('#centerPieceCotainer'),
					interval = $fotorama.data('autoplay'),
					fotorama = $fotorama.data('fotorama');

				$fotorama.find('.fotorama__stage').hover(
					function () {
						fotorama.stopAutoplay();
					},
					function () {
						fotorama.startAutoplay(interval);
					}
				);
			}
        }
		
	}
	
	return module;
});