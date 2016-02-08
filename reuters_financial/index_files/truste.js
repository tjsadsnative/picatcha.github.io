// Instructions:
// ------------------------------------------------------------------------------------------------
//
//  Place in the On Ad Download Section of the Ad (Dropdown Set To JavaScript) regardless of ad type or new/old client
//
//		http://ds.serving-sys.com/BurstingRes/CustomScripts/truste.js?adid=[%tp_adid%]&flightid=[%tp_flightid%]&pid=truste01&aid=trustessl&cid=mm&plc=tr
//
// Parameters:
//
//		pid 	(customer id)
//		aid		(advertiser id)
//		cid		(campaign id)
//		plc		(position of the Ad Choice button.  plc=tr means top right)
//
//		(Note: all parameters should be provided in the script provided by Ad Choice Trusted)
//
// Created : 2013.09.05 Derek Davies
// Updated May-09-2014 by Ivan Ramirez.  Added support for secure (https) calls to the TRUSTe domain. 

(function()
{
	var ebScriptFileName = "truste.js";
	if (!(typeof ebLastQueryUsedArray != 'undefined' && ebLastQueryUsedArray)) {
		ebLastQueryUsedArray = [];
	}
	var ebScriptQuery = function(scriptPath) {
		this.scriptPath = scriptPath;
	};
	ebScriptQuery.prototype = {
		get: function() {
			var lastQuery = '', scripts = document.getElementsByTagName("script")
			var srcRegex = new RegExp(this.scriptPath.replace('.', '\\.') + '(\\?.*)?$', 'i');
			for(var i=0;i<scripts.length;i++) {
				var script = scripts[i], scriptUsed = false;
				if (script.src && script.src.match(srcRegex)) {
					var query = script.src.match(/\?([^#]*)(#.*)?/);
					for (var j = ebLastQueryUsedArray.length - 1; j > -1; j--) {
						if (query[1] == ebLastQueryUsedArray[j]) {
							scriptUsed = true;
							break;
						}
					}
					if (scriptUsed == false) lastQuery = !query ? '' : query[1];
				}
			}
			ebLastQueryUsedArray[ebLastQueryUsedArray.length] = lastQuery;
			return lastQuery;
		},
		parse: function() {
			var result = {}, query = this.get(), components = query.split('&');
			for(var i=0;i<components.length;i++) {
				var pair = components[i].split('='), name = pair[0],
				value = pair[1];
				if (!result[name])result[name] = [];
				if (!value)value = 'true';
				else try { value = decodeURIComponent(value); } catch (e) { value = unescape(value); }
				var values = result[name];
				values[values.length] = value;
			}
			return result;
		},
		flatten: function() {
			var queries = this.parse();
			for(var name in queries) {
				queries[name] = queries[name][0];
			}
			return queries;
		},
		toString: function() {
			return 'ebScriptQuery [path=' + this.scriptPath + ']';
		}
	};

	try {
		var query = new ebScriptQuery(ebScriptFileName).flatten();

		var foundViaEBG = false;
		if(window.EBG) {
			// EBG is available, see if we find the desired ad in EBG.ads, if not, try old client
			try{
				var comAdid = query.adid || -1;
				for(var adIndex in EBG.ads) {
					if(EBG.ads.hasOwnProperty(adIndex)) {
						var ad = EBG.ads[adIndex], cfg = ad._adConfig;
						if(comAdid == cfg.adId) { //found the target ad
							mmWaitForTargetToBeLoaded(ad, "ebDiv" + cfg.rnd, query);
							foundViaEBG = true;
							break;
						}
					}
				}
			}catch(e){}
		}

		if(!foundViaEBG && query.adid){
			// try for old client
			if (typeof gEbEyes != "undefined"){
				for (var i=gEbEyes.length-1;i>-1;i--){
					if (gEbEyes[i].adData.nAdID == query.adid){
						mmWaitForTargetToBeLoaded(gEbEyes[i], "ebFloatingAd_" + gEbEyes[i].adData.nIndex + "_" + gEbEyes[i].adData.strRand, query);
						break;
					}
				}
			}
			if (typeof gEbBanners != "undefined"){
				for (var i=gEbBanners.length-1;i>-1;i--){
					if (gEbBanners[i].adData.nAdID == query.adid){
						mmWaitForTargetToBeLoaded(gEbBanners[i], "ebBannerDiv_" + gEbBanners[i].adData.nIndex + "_" + gEbBanners[i].adData.strRand, query);
						break;
					}
				}
			}
			if (typeof gEbStdBanners != "undefined"){
				for (var id,i=gEbStdBanners.length-1;i>-1;i--){
					if (gEbStdBanners[i].nAdID == query.adid){
						if (gEbStdBanners[i].strImgID != '')id = gEbStdBanners[i].strImgID;
						else id = gEbStdBanners[i].strFlashObjID;
						mmWaitForTargetToBeLoaded(gEbStdBanners[i], id, query);
						break;
					}
				}
			}
			if (ebO.adConfig.adId == query.adid)
				mmWaitForTargetToBeLoaded(ebO, ebO.phid, query);
		}
	}
	catch(e){};

	// Takes a URL -> Returns Query String Parameters
	function mmGetQueryStringParams(scriptPath) {

	    var queries = new Array();
	    var queryString = scriptPath.slice(scriptPath.indexOf("?") + 1);
	    var keyValuePairs = queryString.split("&");

	    for (var items in keyValuePairs) {
	        var item = keyValuePairs[items].split("=");
	        var key = item[0];
	        var value = item[1];
	        queries[key] = value;
	    }
	    return queries;
	}

	// Takes an Array of Scripts -> Returns the Script which has the passed ID, URL, and query string parameter.
	function mmFindScript(scripts, id, url, param) {
	    var lastScript;
	     for (var i = 0; i < scripts.length; ++i) {
	         if ((scripts[i].id.indexOf(id) != -1 || id == "") &&
	        scripts[i].src.indexOf(url) != -1 &&
	        scripts[i].src.indexOf(param) != -1) {
	            lastScript = scripts[i];

	        }
	    }
	    return lastScript;
	}

	function mmWaitForTargetToBeLoaded(obj, id, query) {
		obj.waitTimer = setInterval(function(){mmLoadScriptBeforeBannerParentDiv(obj,id,query)},100);
	}
	function mmLoadScriptBeforeBannerParentDiv(obj,id,query){
		var doc, div = null;
		if(window.EBG) // do new client stuff
			try{
				doc = EBG.adaptor.getDisplayWin().document;
				div = doc.getElementById(id);
			}catch(e){}
		if(!div) { //if didn't find it using EBG, then try old client stuff
			if (typeof gEbDisplayPage != 'undefined' && gEbDisplayPage && typeof gEbDisplayPage.TI != 'undefined' && gEbDisplayPage.TI)
				doc = gEbDisplayPage.TI.getDoc();
			else doc = document;
			div = doc.getElementById(id);
			if((typeof div == "undefined" || !div) && id.indexOf("ebBannerDiv_")>-1)
				div = doc.getElementById(id.replace("ebBannerDiv_","ebBannerImage_"));
		}
		if(div){
			clearInterval(obj.waitTimer);

			var gBsQueries;
			if (ebO != null) {
			    // Rich Banner
			    // Width and Height of Ad
			    query["w"] = ebO.w;
			    query["h"] = ebO.h;
			}
			else {
			    // Standard Banner
			    // Get the width and height of the ad off the http://bs.serving-sys.com URL
			    var bsScript = mmFindScript(document.getElementsByTagName("script"), "", ".serving-sys.com/BurstingPipe/adServer.bs?", ebPli);

			    gBsQueries = mmGetQueryStringParams(bsScript.src);

			    // Set Width and Height of Ad
			    query["w"] = gBsQueries["w"];
			    query["h"] = gBsQueries["h"];
			}

			var spanId = 'te-clearads-js-' + ebPli;
			var scriptPath = '//choices.truste.com/ca?pid=' + query.pid + '&aid=' + query.aid + '&cid=' + query.cid + '&c=' + ebPli + '&w=' + query.w + '&h=' + query.h + '&plc=' + query.plc;
			var trustSpan = doc.createElement('span');
			trustSpan.setAttribute('id',spanId);
			div.parentNode.insertBefore(trustSpan,div);

			var spanDiv = doc.getElementById(spanId);
			if(spanDiv) {
				var trustScript = doc.createElement('script');
				trustScript.setAttribute('type','text/javascript');
				trustScript.setAttribute('src',scriptPath);
				spanDiv.appendChild(trustScript);
			}
		}
	}
})();