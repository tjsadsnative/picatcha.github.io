if(typeof _mediabongCallBack != "undefined") {
	_mediabongCallBack(2,{"result":"video","title":"Syncroll video"});
}
if(typeof window.MB_loadCSS == "undefined") {
	window.MB_loadCSS = function(cssLink) {
	    var ss = document.styleSheets;
	    for (var i = 0, max = ss.length; i < max; i++) {
	        if (ss[i].href == cssLink)
	            return;
	    }
	    
	    var link = document.createElement("link");
	    link.rel = "stylesheet";
	    link.href = cssLink;
	
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
}

(function() {
					MB_loadCSS("http://static.mediabong.com/css/mb.1601131.css");
		        var _tmp = document.getElementById("mb_video");
        if(_tmp != null) {
            var mb_div = document.createElement("div");
            mb_div.id = "mb_video_c119dcd90c4c89fbe4f7318762a04520";
			mb_div.className = "mb_video";
            _tmp.parentNode.replaceChild(mb_div, _tmp);
        }
        
        })();

if(typeof mb_players == 'undefined') {
        var mb_players = {};
	}

		
	mb_players["mb_video_c119dcd90c4c89fbe4f7318762a04520"] = {"mobile_script_url":"http:\/\/static.mediabong.com\/videojs\/mb.1604081.js","jsmpg_script_url":"http:\/\/static.mediabong.com\/jsmpg\/jsmpgmb.js","prod":"1","pub":"656","publisherId":"656","isExternal":0,"currentScript":null,"start":"0.23268200 1460151802","server":"http:\/\/player.mediabong.net","div":"mb_video_c119dcd90c4c89fbe4f7318762a04520","pcent":0,"stopIfAutoplay":0,"mouseOver":0,"width":"100%","height":"100%","delay":1000,"ready":false,"checkScroll":false,"checkStopScroll":false,"timeoutObj":null,"playerState":0,"currentVolume":0,"snap_id":"2267194","thumbnail":"http:\/\/static.mediabong.com\/img\/default_preroll_picture_fr.png","flashvars":{"application_id":"mb_video_c119dcd90c4c89fbe4f7318762a04520","application_name":"mediabong.com","manifest_url":"http%3A%2F%2Fplayer.mediabong.net%2Fmanifest%2F3%2F656-2.json%3Fsessid%3D16_570825f9cd74d3.55663099%26bloc%3D0%26display_title%3D1","display_start":1,"session_id":12,"estat_id":"","estat_media_section_1":"","estat_media_section_2":"","estat_media_section_3":"","estat_media_referer":"#","estat_media_genre":"#"},"params":{"allowscriptaccess":"always","allowfullscreen":"true","wmode":"opaque","quality":"high","bgcolor":"#222222"},"attributes":{"allowscriptaccess":"always","allowfullscreen":"true","wmode":"opaque","quality":"high","bgcolor":"#222222","styleclass":"mb_video"},"videoStart":0,"doConvert":true,"inBlock":0,"blocplayer_id":0,"jsonDoc":null,"myPlayer":null,"tdVideoAdBegin":false,"tdVideoAdFiq":false,"tdVideoAdMid":false,"tdVideoAdThq":false,"tdVideoAdComp":false,"tdVideoAdEnd":false,"tdVideoAdClick":false,"tdVideoContentStart":false,"tdVideoContentFiq":false,"tdVideoContentMid":false,"tdVideoContentThq":false,"tdVideoContentComp":false,"tdVideoContentEnd":false,"tdVideoContentFullSc":false,"clickAdLink":"","playingAdd":false,"videoContentPlaying":false,"adAlertPopin":false,"posRV":0,"nbVideoRV":0,"nb_loop":0,"cpt":0,"xmlDoc2":null,"taghttp":null,"isPlaying":false,"isFS":false,"events":{"print":"http%3A%2F%2Fplayer.mediabong.net%2Ft%2Fprint.php%3Fsessid%3D16_570825f9cd74d3.55663099%26sid%3D2267194%26bloc%3D0%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D","printSyncroll":"http%3A%2F%2Fplayer.mediabong.net%2Fprint_syncroll.php%3Fsessid%3D16_570825f9cd74d3.55663099%26sid%3D2267194%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D","syncrollScrolled":"http%3A%2F%2Fplayer.mediabong.net%2Ft%2Fsyncroll_scrolled.php%3Fsessid%3D16_570825f9cd74d3.55663099%26sid%3D2267194%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D","syncrollNoAd":"http%3A%2F%2Fplayer.mediabong.net%2Ft%2Fsyncroll_no_ad.php%3Fsessid%3D16_570825f9cd74d3.55663099%26sid%3D2267194%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D"},"title":"Syncroll video","endAfterPreroll":1,"title_position":"NONE","custom_title":"","addMuteButton":0,"disable_syncad":0,"syncroll_z_index":0,"noMouseOverVolume":0,"skip_duration":5,"campaigns":[],"timeTracker":"http:\/\/player.mediabong.net\/t\/visibility.php?a=[ad_server_id]&snap=2267194&s=[second]&m=[mute]&rnd=[RND]&pcent=[visibility]&progress=[adprogress]&sessid=16_570825f9cd74d3.55663099&uid=0b1c24cfcbcbdf28&syncroll=[syncrollenabled]&pos=[playerposition]&attnscore=[attentionscore]&synctype=[syncrolltype]&url=[referer]&bloc=0&smid=0","adserverLoading":"http:\/\/player.mediabong.net\/t\/inventory.php?a=[ad_server_id]&snap=2267194&adb=[adblock]","adError":"http:\/\/player.mediabong.net\/aderror.php?cid=656&sid=2267194&url=[referer]&rnd=[RND]&adid=[ad_server_id]","eventTracker":"http:\/\/player.mediabong.net\/t\/event_pr.php?sessid=[session_id]&sid=2267194&url=[referer]&rnd=[rnd]&value=[event]&adid=[ad_server_id]&adb=[adblock]&bloc=0&second=[second]&syncroll=[syncrollenabled]&pos=[playerposition]&attnscore=[attentionscore]&synctype=[syncrolltype]","enableFloatingBug":0,"ipadAsIphone":0,"requireSyncroll":1,"sessionId":"16_570825f9cd74d3.55663099"};
	if(typeof Mb_current_url === "undefined") {
		console.log("No current url defined"); 
		mb_players["mb_video_c119dcd90c4c89fbe4f7318762a04520"]["flashvars"]["referer"] = encodeURIComponent(document.location.href);
		mb_players["mb_video_c119dcd90c4c89fbe4f7318762a04520"]["flashvars"]["website"] = encodeURIComponent(document.location.host.substring(document.location.host.lastIndexOf(".", document.location.host.lastIndexOf(".") - 1) + 1));
	} else {
		console.log("Current url : "+Mb_current_url);
		mb_players["mb_video_c119dcd90c4c89fbe4f7318762a04520"]["flashvars"]["referer"] = Mb_current_url;
		mb_players["mb_video_c119dcd90c4c89fbe4f7318762a04520"]["flashvars"]["website"] = encodeURIComponent(document.location.host.substring(document.location.host.lastIndexOf(".", document.location.host.lastIndexOf(".") - 1) + 1));
	}
	
if (window.Mb === undefined) {
	var sv = document.createElement('script');
        sv.type ="text/javascript";
        sv.src = "http://static.mediabong.com/scripts/mb.1604081.js";
        sv.async = true;
        if(sv.addEventListener) {
            sv.addEventListener("load",function() { Mb.boot("mb_video_c119dcd90c4c89fbe4f7318762a04520",'1512101'); }, false);
        }
        else if(sv.readyState) {
            sv.onreadystatechange = function() {
                if(this.readyState === "loaded" || this.readyState === "complete") {
			Mb.boot("mb_video_c119dcd90c4c89fbe4f7318762a04520",'1512101');
                }
            };
        }
        document.getElementsByTagName("head")[0].appendChild(sv);
        if(typeof window.onMediabongExternalPlayerReady == 'function') { 
            window.onMediabongExternalPlayerReady(["http%3A%2F%2Fplayer.mediabong.net%2Fprint.php%3Fsid%3D2267194%26bloc%3D0%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D","http%3A%2F%2Fplayer.mediabong.net%2Fplay.php%3Fsid%3D2267194%26bloc%3D0%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D"]); 
        }
} else {
	Mb.boot("mb_video_c119dcd90c4c89fbe4f7318762a04520",'1512101');
}

var mb_skipin = "Skip in";
var mb_skip = "Skip";
	