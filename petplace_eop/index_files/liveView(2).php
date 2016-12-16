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

	var url = 'http://live.sekindo.com/live/liveView.php?s=60687&pubUrl=http://www.petplace.com/article/cats/behavior-training/normal-behavior/why-do-cats-carry-food-from-their-bowls&subId=[SUBID_ENCODED]&cbuster=1971784407&nofr=1' + '&pubUrlAuto=' + encodeURIComponent(getUrl());
	document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
})();
