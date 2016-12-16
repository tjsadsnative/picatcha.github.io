/**/
//used to sync advertiser without leaking referer to final destination
	    var frm = document.createElement('iframe');
	    frm.style.visibility = 'hidden';
	    frm.style.display = 'none';
	    frm.src = "http://pixel.mathtag.com/sync/iframe?sync=auto&mt_uuid=d9685513-40c2-4c00-8726-640c9701bc2f&no_iframe=1";
	    document.body.appendChild(frm);
      