var illyData = [
	{
		"videoThumb": "http://static.largetail.com/illy/dist/img/illy-video-thumb-1.jpg",
		"videoImage": "http://static.largetail.com/illy/dist/img/illy-video-overlay-1.jpg",
		"videoTitle": "<span>The Modernist</span>Antonino Buzzetta, Antonino Buzzetta Design &#45; New York, NY",
		"videoURL": "https://www.youtube.com/embed/jjL4EnNSaO8",
		"label": "The Modernist",
		"trackingLabel": "the_modernist",
		"copy": "New York native Antonino Buzzetta has always been inspired by art, fashion, and good design. It was only natural when he opened an interior design firm, pursuing a career in all things beautiful. Antonino is constantly on the hunt for things that move and inspire him &#45; 'this is where fashion comes into place; it allows me to feel confident while taking a risk. I love the unexpected and the reaction that it generates.'",
		"impressionTracker": "<IMG SRC='https://ad.doubleclick.net/ddm/ad/N5192.1997511COOLHUNTING/B9009375.121886762;sz=1x1;"
	},
	{
		"videoThumb": "http://static.largetail.com/illy/dist/img/illy-video-thumb-2.jpg",
		"videoImage": "http://static.largetail.com/illy/dist/img/illy-video-overlay-2.jpg",
		"videoTitle": "<span>The Cultivator</span>Eliza Blank, Founder of The Sill &#45; New York, NY",
		"videoURL": "https://www.youtube.com/embed/zC1Wuv6Tz5c",
		"label": "The Cultivator",
		"trackingLabel": "the_cultivator",
		"copy": "Eliza Blank started The Sill, a potted houseplant business, with a simple ambition &#45; to inspire people to bring more of the outdoors inside. Eliza&apos;s mission is to make the experience of discovering the perfect plant as wonderful as the plant itself. She gives advice on plant care and pairs people with the perfect plants for their spaces &#45; helping to reinvigorate homes and offices all over New York City by incorporating 'things that inspire.'",
		"impressionTracker": "<IMG SRC='https://ad.doubleclick.net/ddm/ad/N5192.1997511COOLHUNTING/B9009375.121887243;sz=1x1;"
	},
	{
		"videoThumb": "http://static.largetail.com/illy/dist/img/illy-video-thumb-3.jpg",
		"videoImage": "http://static.largetail.com/illy/dist/img/illy-video-overlay-3.jpg",
		"videoTitle": "<span>The Artisans</span>Jessica Barensfeld &#38; Simon Howell, Co-Founders of Lynn &#38; Lawrence Hats &#45; Brooklyn, NY",
		"videoURL": "https://www.youtube.com/embed/otMvhI4G29Q",
		"label": "The Artisans",
		"trackingLabel": "the_artisans",
		"copy": "Jessica and Simon perfectly represent the modern creative life. Drawing on old and new inspiration and strong DIY sensibilities, their knit-hat company, Lynn and Lawrence, came naturally. What started as Jessica&apos;s hobby of making handmade hats for friends soon became a labor of love and collaboration. Simon now photographs the lookbook, and his mother helps hand knit every hat designed and made with love.",
		"impressionTracker": "<IMG SRC='https://ad.doubleclick.net/ddm/ad/N5192.1997511COOLHUNTING/B9009375.121887245;sz=1x1;"
	}
];
var ca ={};
ca.title = "Presented by Illy";
var illy = {};
var illyPlayer;

illy.Main = function () {
	var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	this.shuffle(illyData);
	this.setupPanel();
	this.updatePanel();
};

illy.Main.prototype.shuffle = function(sourceArray) {
	for (var n = 0; n < sourceArray.length - 1; n++) {
        var k = n + Math.floor(Math.random() * (sourceArray.length - n));
        var temp = sourceArray[k];
        sourceArray[k] = sourceArray[n];
        sourceArray[n] = temp;
    }
};

illy.Main.prototype.setupPanel = function() {
	
	$('.illy-content__copy').html(illyData[0].copy);

	$('.illy-content__thumbnails__thumb__image').eq(0).css('background-image', 'url(' + illyData[0].videoThumb + ')');
	$('.illy-content__thumbnails__thumb__image').eq(1).css('background-image', 'url(' + illyData[1].videoThumb + ')');
	$('.illy-content__thumbnails__thumb__image').eq(2).css('background-image', 'url(' + illyData[2].videoThumb + ')');
	$('.illy-content__thumbnails__thumb__label').eq(0).html(illyData[0].label);
	$('.illy-content__thumbnails__thumb__label').eq(1).html(illyData[1].label);
	$('.illy-content__thumbnails__thumb__label').eq(2).html(illyData[2].label);

	$('.illy-video__container__overlay').css('background-image', 'url(' + illyData[0].videoImage + ')');
	$('.illy-video__container__overlay__label').html(illyData[0].videoTitle);
	
	this.setupPlayer(0);
	this.setTracking(0);

};

illy.Main.prototype.updatePanel = function() {
	var self = this;

	$('.illy-content__thumbnails__thumb').on('click', function() {
		if (!$(this).hasClass('illy-content__thumbnails__thumb--active')) {
			$('.illy-content__thumbnails__thumb').removeClass('illy-content__thumbnails__thumb--active');
			$(this).addClass('illy-content__thumbnails__thumb--active');
			update($(this).data().index);
			self.setTracking($(this).data().index);
			_gaq.push(['_trackEvent', 'Illy', 'Thumbnail Select', illyData[$(this).data().index].label]);
		}
	});

	var update = function(index) {
		if (illyPlayer.getPlayerState() !== 1) {
			$('.illy-video__container__overlay').addClass('illy-video__container__overlay--crossfade');
		}
		// fade out copy
		$('.illy-content__copy').addClass('illy-content__copy--fade');
		
		$('.illy-video__container__overlay').show();
		
		setTimeout(function() {
			$('.illy-video__container').removeClass('illy-video__container--playing');
		}, 50);

		setTimeout(function() {
			$('.illy-video__container__overlay__label').html(illyData[index].videoTitle);
			$('.illy-video__container__overlay').css('background-image', 'url(' + illyData[index].videoImage + ')');
			illyPlayer.pauseVideo();
			$('.illy-content__copy').html(illyData[index].copy);
		}, 400);

		setTimeout(function() {
			$('.illy-content__copy').removeClass('illy-content__copy--fade');
		}, 410);

		setTimeout(function() {
			$('.illy-video__container__overlay').removeClass('illy-video__container__overlay--crossfade');
			illyPlayer.loadVideoByUrl({mediaContentUrl:illyData[index].videoURL});
			illyPlayer.pauseVideo();
		},900);
	};

};

illy.Main.prototype.setupPlayer = function(index) {
  
	window.onYouTubePlayerAPIReady = function () {
		$('#video').attr({'id' : 'video', 'src' : illyData[index].videoURL + '?enablejsapi=1'});
    illyPlayer = new YT.Player('video', { });
	}

	$('#illy-play-button').on('click', function() {
    illyPlayer.playVideo();
    $('.illy-video__container').addClass('illy-video__container--playing');
    setTimeout(function(){
    	$('.illy-video__container__overlay').hide();
    }, 1100);
    _gaq.push(['_trackEvent', 'Illy', 'Play Button', illyPlayer.B.videoData.title]);
  });

};

illy.Main.prototype.setTracking = function(index) {

	var impressionTracker = illyData[index].impressionTracker + "ord=[" + Math.random() + "]?' BORDER=0 WIDTH=1 HEIGHT=1 ALT='Advertisement'>";

	// if tracking exists replace it
	if ($('.illy-tracking').length) {

		var newTag = $('.illy-tracking');
		newTag.html(impressionTracker);
		//log
		console.log(newTag.html());
		return;
	}

	// render tracking pixels
	$('.illy-content').append("<div class='illy-tracking'>" + impressionTracker + "</div>");
	
	//logs
	var tag = $('.illy-tracking');
	console.log(tag.html());
};

illy.init = function() {
	var main = new illy.Main();
	return main;
};

$(function(){
	illy.init();
});