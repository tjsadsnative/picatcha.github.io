/**/
(function() {
    metric = function(url, wait)
    {
        setTimeout(function() {
                var e = document.createElement("img");
                e.src = url;
            }, wait);
    }

    var intervals = [0, 10];
    var inlen = intervals.length;
    for (var k = 0; k < inlen; ++k)
        this.metric("http://pixel.mathtag.com/misc/img?mm_bnc&bcdv="+k, intervals[k] * 1000);
})();

//used to sync advertiser without leaking referer to final destination
	  var frm = document.createElement('iframe');
	  frm.style.visibility = 'hidden';
	  frm.style.display = 'none';
	  frm.src = "http://pixel.mathtag.com/sync/iframe?sync=auto&mt_lim=5&mt_uuid=d9685513-40c2-4c00-8726-640c9701bc2f&no_iframe=1";
	  frm.setAttribute("id", "mm_sync_back_ground");
	  var trys = 0;
	  var interval = setInterval(function(){
	      if (trys++ < 20 && interval && !document.getElementById("mm_sync_back_ground"))
		  if (document.body) {
		      if (interval) {
			  clearInterval(interval);
			  interval = 0;
		       }
		      document.body.appendChild(frm);
		  }
	  }, 100);
