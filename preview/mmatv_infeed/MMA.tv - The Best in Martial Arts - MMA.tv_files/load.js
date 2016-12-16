if(typeof window.mb_script_started != "undefined") {
	var now = new Date().getTime();
	console.log("(MB) Load : "+(now - window.mb_script_started)+" ms");
}

window.srLoader = function() {
	var articleContent = "", tmpContainer = null;
	var setupRules = [{"config_id":"1035","publisher_id":"656","domain":"mma.tv","syncroll_type":"floating_banner","disable_test":"","detection_rules":[".td-post-content p","","","","",""],"paragraph":"","inread_position":"3","bottom_position":"4","bloc_position":"0","player_100p":"1","passback":"","min_paragraph_count":"0","margin":5,"quick_load":"1","passback_always":0,"stay_in_iframe":"0","max_player_width":"0","editorial_video_position":"keep","pause_after_ad":"1","load_detect_se":"0","inread_at_end":"0","min_width_for_floating":"0","floating_margin_bottom":"0","append_config":"0","articleDetect":[".td-post-content p"],"paragraphPosition":["3","4"],"paragraphCount":0,"quickLoad":1,"maxWidth":0,"videoPosition":"keep","pauseAfterAd":1,"loadDetectScript":0,"inreadAtEnd":0,"minFloatingWidth":0,"floatingMarginBottom":0,"appendConfig":0,"loadDetect":"","impressionUrl":""}];
	for(ruleIdx in setupRules) {
		var matched = matchContent(setupRules[ruleIdx]);
		if(matched) {
			window.MB_PADDING = setupRules[ruleIdx].margin;
			window.MB_VIDEO_POSITION = setupRules[ruleIdx].videoPosition;
			window.MB_PAUSE_AFTER_AD = setupRules[ruleIdx].pauseAfterAd;
			window.MB_FLOATING_MIN_WIDTH = setupRules[ruleIdx].minFloatingWidth;
				
			 // Add main script
			var sc = window.document.createElement("script"), useSSL = 'https:' == window.document.location.protocol;
            sc.type = "text/javascript";
            sc.async = true;
            sc.src = 'http://player.mediabong.net/se/656.js?rnd='+Math.random()+'&url='+encodeURIComponent(window.document.location.href)+'&sessid=16_570807da40f418.27085809';
           	var node = window.document.getElementsByTagName('head')[0];
            node.appendChild(sc);
			break;
		} else {
			// Record container error
			var sc = window.document.createElement("script");
        	sc.type = "text/javascript";
            sc.async = true;
	        sc.src = 'http://player.mediabong.net/t/conterror.php?cid=656&rnd='+Math.random()+'&url='+encodeURIComponent(window.document.location.href);
        	var node = window.document.getElementsByTagName('head')[0];
            node.appendChild(sc);
		}
	}
};

function matchContent(setup) {
	if(setup['disable_test'] != "") {
		var tmp = setup['disable_test'].split(",");
		for(matchIdx = 0; matchIdx < tmp.length; matchIdx++) {
			if(document.querySelectorAll(tmp[matchIdx]).length > 0) 
				return false;
		}
	}
	for(var matchKey in setup['articleDetect']) {
		var tmpContainer = window.document.querySelectorAll(setup['articleDetect'][matchKey]);
		if(tmpContainer.length > setup['paragraphCount']) {
			return insertSlots(tmpContainer, setup);
	                break;
		}
	}
}

function insertSlots(parts, rules) {
	var c1 = window.document.createElement("div"), c1_1 = window.document.createElement("div"), c2 = window.document.createElement("div");
	c1.id = "mb_video_syncad";
	c1.style.display = 'block';
	c1.className = rules['syncroll_type']; 
	c2.id = "mb_container";
	if(rules['player_100p'] == 1) {
		c1_1.style.width = "100%";
		c2.style.width = "100%";
	} else {
		c1_1.style.width = "75%";
		c1_1.style.marginLeft = "auto";
		c1_1.style.marginRight = "auto";
		c2.style.width = "75%";
		c2.style.marginLeft = "auto";
		c2.style.marginRight = "auto";
	}

	if(rules['maxWidth'] > 0) {
		c1_1.style.maxWidth = rules['maxWidth']+"px";
		c2.style.maxWidth = rules['maxWidth']+"px";
		c1_1.style.marginLeft = "auto";
		c1_1.style.marginRight = "auto";
		c2.style.marginLeft = "auto";
		c2.style.marginRight = "auto";
	}	
	
	c2.style.marginTop = "0px";
	c2.style.display = 'block';
	c1.style.marginTop = "0px";
	c1_1.style.marginTop = "0px";
	c1_1.style.display = 'block';
	c1_1.style.boxSizing = "content-box";
	c1_1.appendChild(c1);

	if (rules['appendConfig'] == 1)
	{
		if (typeof parts[0] === "undefined")
			return false;
		parts[0].appendChild(c1_1);
		parts[0].appendChild(c2);
		// Check if container are really added to the dom
		var cont1 = document.getElementById("mb_video_syncad"), cont2 = document.getElementById("mb_container");
		if(cont1 == null || cont2 == null) {
			return false;
		} else {
			return true;
		}
	}

	if (rules['paragraphPosition'][0] == "middle")
		rules['paragraphPosition'][0] = Math.floor(parts.length / 2);

	if (typeof parts[rules['paragraphPosition'][0]] === "undefined" && rules['inreadAtEnd'] == 1)
		rules['paragraphPosition'][0] = "end";

	if (typeof parts[rules['paragraphPosition'][1]] === "undefined")
		rules['paragraphPosition'][1] = "end";

	if (typeof parts[rules['paragraphPosition'][0]] !== "undefined" || (rules['paragraphPosition'][0] == "end" && typeof parts[parts.length - 1] !== "undefined"))
	{
		if(rules['paragraphPosition'][0] == "end") 
			parts[parts.length - 1].parentNode.appendChild(c1_1);
		else
			parts[rules['paragraphPosition'][0]].parentNode.insertBefore(c1_1, parts[rules['paragraphPosition'][0]]);
		if(rules['paragraphPosition'][1] == "end")
			parts[parts.length - 1].parentNode.appendChild(c2);
		else if (typeof parts[rules['paragraphPosition'][1]] !== "undefined")
			parts[rules['paragraphPosition'][1]].parentNode.insertBefore(c2, parts[rules['paragraphPosition'][1]]);

		// Check if container are really added to the dom
		var cont1 = document.getElementById("mb_video_syncad"), cont2 = document.getElementById("mb_container");
		if(cont1 == null || cont2 == null) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
	if(typeof window.mb_script_started != "undefined") {
		var now = new Date().getTime();
		console.log("(MB) Load Done : "+(now - window.mb_script_started)+" ms");
	}
}

	srLoader();
	