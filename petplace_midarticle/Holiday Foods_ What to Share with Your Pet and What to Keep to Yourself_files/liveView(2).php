(function () {
	function getUrl()
	{
		var url = null;
		if (parent !== window)
			url = document.referrer;
		else
			url = window.location.href;

		return url;
	}

	var url = 'http://live.sekindo.com/live/liveView.php?s=60687&pubUrl=http://www.petplace.com/article/dogs/keeping-your-dog-healthy/feeding-nutrition/holiday-foods-what-to-share-with-your-pet-and-what-to-keep-to-yourself&subId=[SUBID_ENCODED]&cbuster=53056395&nofr=1' + '&pubUrlAuto=' + encodeURIComponent(getUrl());
	document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
})();
