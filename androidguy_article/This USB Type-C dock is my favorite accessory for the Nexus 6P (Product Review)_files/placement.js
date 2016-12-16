/* Master Ad Template : 2.4 : click tracking, viewability, std disp
/*	To process tags, clone https://github.com/seanmerrigan/codeDado.git (from https://github.com/seanmerrigan/codeDado)
	Tagging rules:
		The master template should work correctly if no tagged sections are removed.
		Removal of any tagged section should leave a syntactically correct file.
*/
try {
	var a, img;
	if (typeof(TM_array) == 'undefined') var TM_array = [];
	//Use a random number as a temporary index until we have the sessId from the feed.
	var uIdx = Math.random() + Date.now().valueOf();
	TM_array[ uIdx ] = { 'Args': {} };
	TM_array[ uIdx].Args.data = [{"preview":false,"session":{"host":"as.tubemogul.com","sessId":"lvhCpA7qQYWke_7xT4rtGQ.1"},"psId":"sv3J7lZDaUW94tPOjc9V","adParts":[{"sequence":1,"assets":[{"clickURL":"https://ad.atdmt.com/c/go;p=11042209178869;ev.a=1;idfa=;idfa_lat=;aaid=;aaid_lat=;cache=","encodingRate":500,"mimeType":"video/mp4","trackAsAutoplay":"T","type":"promoted_video","layer":"0","timer":13,"id":"7718313","height":"250","inplayCall":"bannerClicks","videoDuration":13,"framework":"video","pvId":"caFRNdDDYyANNjfFGEUj","width":"300","preserveAspectRatio":"T","x":"center","y":"0","detail":"https://playtime.tubemogul.com/ad_promoted_videos/7718313_CEkDx3EECaW1KjoqpdrM_1451969513.mp4","autoPlay":"T","showControls":"T","resourceType":"static"}],"width":"100%","trigger":"videoend","type":"player","height":"100%"}],"bt":false,"feedId":"Xf6e2yqPYRavegdigOp6","adClass":"BAP","paId":"2cKjlfAv5VLHVPKYdn5o","wmode":"window","height":250,"adPluginURL":"/mobile/js/tm.adunit.v2.26.min.js","didtype":"TM_COOKIE_ID","viewabilityStandard":"MRC","statsBaseURL":"stats.tubemogul.com/stats/1","displayType":"HTML5","pixels":[{"id":"487965","trigger":"Completion","detail":"https://rtd.tubemogul.com/upi/?sid=XQsUyN8JMsLgpadXTXFo","type":"Flash"},{"id":"487967","trigger":"Vimp","detail":"https://rtd.tubemogul.com/upi/?sid=hfOsEdbBAMECRXI4D7uK","type":"Flash"},{"id":"487985","trigger":"Impression","detail":"https://ad.atdmt.com/i/img;p=11042209178869;idfa=;idfa_lat=;aaid=;aaid_lat=;cache=","type":"Flash"},{"detail":"https://p.univide.com/t.gif?pid=116&pidt=0&pdid=8394595074221718108","id":"TM_PI107","trigger":"impression","type":"Flash"},{"detail":"https://sb.scorecardresearch.com/p?c1=1&c2=7213269&c3=7213269&c4=&c5=120000&c6=","id":"TM_PI5","trigger":"impression","type":"Flash"},{"detail":"https://cm.g.doubleclick.net/pixel?google_nid=g8f47s39e399f3fe&google_cm&google_sc&google_hm=ODM5NDU5NTA3NDIyMTcxODEwOA%3D%3D","id":"TM_PI2","trigger":"impression","type":"Flash"},{"detail":"https://sp.adbrn.com/match?syncid=tm1_937bae71-f265-478e-b2b5-dccb199ad9e9&cid=8394595074221718108","id":"TM_PI105","trigger":"impression","type":"Flash"},{"detail":"https://mrm.channel4.com/ad/u?nw=381110&dpid=381110&buid=8394595074221718108&token=tubemogul","id":"TM_PI113","trigger":"impression","type":"Flash"},{"detail":"https://p.adsymptotic.com/d/px?_pid=13028&_psign=58123c5363fa53e7b0c802c625cb5f0c&_puuid=8394595074221718108","id":"TM_PI111","trigger":"impression","type":"Flash"},{"detail":"https://analytics.twitter.com/i/adsct?p_user_id=8394595074221718108&p_id=6005","id":"TM_PI93","trigger":"impression","type":"Flash"},{"id":"TM_AUDIT_COMP","trigger":"TM_AUDIT_COMP","detail":"https://ad-audit.tubemogul.com/audit/e.png?event=comp&mp=Xf6e2yqPYRavegdigOp6&cp=voObygIO8FvCM6C3Q9E6&pa=2cKjlfAv5VLHVPKYdn5o&pv=caFRNdDDYyANNjfFGEUj&rand=791877810","type":"Flash"},{"id":"TM_AUDIT_VIEW","trigger":"TM_AUDIT_VIEW","detail":"https://ad-audit.tubemogul.com/audit/e.png?event=view&mp=Xf6e2yqPYRavegdigOp6&cp=voObygIO8FvCM6C3Q9E6&pa=2cKjlfAv5VLHVPKYdn5o&pv=caFRNdDDYyANNjfFGEUj&rand=311554239","type":"Flash"},{"id":"TM_AUDIT_CODE","trigger":"TM_AUDIT_CODE","detail":"https://ad-audit.tubemogul.com/audit/e.png?event=code&mp=Xf6e2yqPYRavegdigOp6&cp=voObygIO8FvCM6C3Q9E6&pa=2cKjlfAv5VLHVPKYdn5o&pv=caFRNdDDYyANNjfFGEUj&rand=293798513","type":"Flash"},{"id":"TM_AUDIT_TAG","trigger":"TM_AUDIT_TAG","detail":"https://ad-audit.tubemogul.com/audit/e.png?event=tag&mp=Xf6e2yqPYRavegdigOp6&cp=voObygIO8FvCM6C3Q9E6&pa=2cKjlfAv5VLHVPKYdn5o&pv=caFRNdDDYyANNjfFGEUj&rand=1425796410","type":"Flash"},{"id":"TM_AUDIT_REND","trigger":"TM_AUDIT_REND","detail":"https://ad-audit.tubemogul.com/audit/e.png?event=rend&mp=Xf6e2yqPYRavegdigOp6&cp=voObygIO8FvCM6C3Q9E6&pa=2cKjlfAv5VLHVPKYdn5o&pv=caFRNdDDYyANNjfFGEUj&rand=680881663","type":"Flash"}],"adId":"2cKjlfAv5VLHVPKYdn5o","width":300,"assetBaseURL":"//playtime.tubemogul.com","did":"8394595074221718108"}];

	var tm_auction_id = TM_array[ uIdx].Args.data[0].session.sessId;
	TM_array[ tm_auction_id ] = TM_array[ uIdx];
	delete TM_array[ uIdx];
	TM_array[ tm_auction_id ].Feed = TM_array[ tm_auction_id ].Args.data[ 0 ];
























































































	TM_array[ tm_auction_id ].Util = function( TM ) {
		var isNull = function (obj) {
				return typeof(obj) == "undefined" || !obj || obj == "";
			},
			setDefault = function (val, def) {
				return (isNull(val) ? def : val);
			},
			isEmpty = function (obj) {
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop))
						return false;
				}
				return true;
			},
			flashDetect = function () {
				var osf, osfd, i, axo = 1,
					v = 0,
					nv = navigator;
				if (nv.plugins && nv.mimeTypes.length) {
					osf = nv.plugins["Shockwave Flash"];
					if (osf && osf.description) {
						osfd = osf.description;
						v = parseInt(osfd.substring(osfd.indexOf(".") - 2))
					}
				} else {
					try {
						for (i = 5; axo != null; i++) {
							axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
							v = i
						}
					} catch (e) {
					}
				}
				return v;
			},
			random = function () {
				return parseInt(Math.random() * 99999999);
			},
			loadImage = function (src) {
				var img = new Image();
				img.src = src;
			},
			loadScript = function (src, callback) {
				var js = document.createElement("script");
				js.type = "text/javascript";
				if (!!callback) {
					js.onload = callback;
					js.onerror = callback; //Necessary for mraid include attempt
				}
				js.src = src;
				document.getElementsByTagName("head")[0].appendChild(js);
			},
			loadCSS = function (src, callback) {
				var css = document.createElement("link");
				css.rel = "text/css";
				css.src = src;
				if (!!callback) {
					css.onload = callback;
				}
				document.getElementsByTagName("head")[0].appendChild(css);
			},
			appendHTML = function (html) {
				var d = document.createElement("div");
				document.body.appendChild(d);
				d.innerHTML = html;
			},
			writeHTML = function (divid, str) {
				if (TM.Feed.displayType != "mraid_3rd_party" && TM.Feed.displayType != "inbanner_3rd_party") {
					var condition = 'tubemogul.',
					//var condition = 'testbed.info';
						scripts = document.getElementsByTagName('script'),
						wroteDiv = false,
						i, adcontent;
					if (/*@cc_on!@*/true) {
						for (i = 0; i < scripts.length; i++) {
							if (scripts[i].src.indexOf(condition) > 0) {
								adcontent = document.createElement('div');
								adcontent.id = divid;
								adcontent.innerHTML = str;
								if (scripts[i].parentNode.tagName != "HEAD") {  //im inside the <head>, so i wont render if im inserted here
									scripts[i].parentNode.insertBefore(adcontent, scripts[i]);
									wroteDiv = true;
									break;
								}
							}
						}
					}
				}
				if (!wroteDiv) {
					//fall back to old method.
					document.write('<div id=' + divid + ' width=' + TM.Feed.width + ' height=' + TM.Feed.height + '>' + str + '</div>');
				}
			},
			findInArray = function (list, field, value) {
				if (!list || !field) return;
				for (var i = 0; i < list.length; i++) {
					if (list[i][field] == value) return list[i];
				}
				return null;
			},
			openClickThrough = function(clickThroughUrl){
				firePixels('ClickThrough');
				window.open( clickThroughUrl );
			},
			firePixels = function (trigger) {
				for (var pix = TM.Feed.pixels.length - 1; pix >= 0; pix--) {
					if (!TM.Feed.pixels[pix] || TM.Feed.pixels[pix].trigger.toLowerCase() != trigger.toLowerCase()) continue;
					if (TM.Util.firePixel(trigger, TM.Feed.pixels[pix].type, TM.Feed.pixels[pix].detail, TM.Feed.pixels[pix].id)) {
						//Remove called pixels from feed
						delete TM.Feed.pixels[pix];
					}
				}
			},
			firePixel = function (trigger, type, src, id) {
				// Look for [[random]] and [timestamp] macros
				var success = false,
					now, delta;
				// TODO: Make sure the ad server replaces these
				src = src.replace("[[random]]", TM.Util.random());
				src = src.replace("[[timestamp]]", (new Date()).getTime());
				src = src.replace("[timestamp]", (new Date()).getTime());
				if (trigger.indexOf('TM_AUDIT') == 0) {
					if (type.toLowerCase().indexOf('mobile') != 0) {
						//Temporary workaround to avoid having google complain about audit pixels.
						success = true;
						trigger = null;
					} else {
						now = Number(new Date());
						delta = now - Number(TM.lc_params.zerotime);
						src += src.indexOf('?') > 0 ? "&" : "?";
						src += trigger.toLowerCase().substring(trigger.lastIndexOf('_') + 1, trigger.length) + '_delta=' + delta.toString();
						src += '&ad_type=' + TM.Util.auditAdClass;
						TM.lc_params.zerotime = now;
					}
				}
				//console.log('Firing pixel: ' + src);
				switch (type) {
					case "Flash":
					case "Image":
						TM.Util.loadImage(src);
						success = true;
						break;
					case "HTML":
						TM.Util.appendHTML(src);
						success = true;
						break;
					case "Javascript":
						TM.Util.loadScript(src);
						success = true;
						break;
					default:
						break;
				}
				logPixel(id, trigger, src, type);
				return success;
			},
			updateProtocol = function () {
				TM.lc_params.proto = document.location.protocol;
				// Apps can end up with protocols like 'applewebdata:' instead of http(s)
				if (TM.lc_params.proto != 'https:') {
					TM.lc_params.proto = 'http:';
				}
				if (TM.lc_params.proto == "https:") {
					setProtoInObject(TM.Feed);
				}
			},
			setProtoInObject = function (jsonObj) {
				//Pixels
				var pix, assetIdx, adPartIdx;
				if (jsonObj.pixels) {
					for (pix = jsonObj.pixels.length - 1; pix >= 0; pix--) {
						try {
							// Hack to support https
							if (jsonObj.pixels[pix].id == "TM_PI5") { // Comscore
								jsonObj.pixels[pix].detail = jsonObj.pixels[pix].detail.replace("http://b", "https://sb");
							} else if (jsonObj.pixels[pix].id.toString().substr(0, 3) == "TM_") {
								jsonObj.pixels[pix].detail = jsonObj.pixels[pix].detail.replace("http://", "https://");
							}
						} catch (e) {
						}
					}
				}
				//Assets
				if (jsonObj.assets) {
					for (assetIdx = 0; assetIdx < jsonObj.assets.length; assetIdx++) {
						jsonObj.assets[assetIdx].detail = jsonObj.assets[assetIdx].detail.replace("http://", "https://");
						setProtoInObject(jsonObj.assets[assetIdx]);
					}
				} else if (jsonObj.adParts) {
					//Ad Parts
					for (adPartIdx = 0; adPartIdx < jsonObj.adParts.length; adPartIdx++) {
						setProtoInObject(jsonObj.adParts[adPartIdx]);
					}
				}
			},
			c = 5,
			logPixel = function (id, trigger, src, type) {
				try {
					// Hit pixel tester
					if (!TM.Util.isNull(id) && trigger.indexOf('TM_AUDIT') != 0 && trigger.indexOf('TM_PI') != 0) {
						if (pixel !== undefined) {
							pixel.send(id, src, trigger, type);
						}
						if (typeof(PromoAdmin) != "undefined" ){
							PromoAdmin.MediaPlacement.Test.firePixel(trigger.toLowerCase(), src);
						}
					}
				} catch (e) {
				}
				if (id == "TM_PI5") {
					setTimeout(function () {
						if (--c > 0) {
							firePixel(trigger, type, src, id)
						}
					}, parseInt(Math.random() * 5 + 5) * 1000)
				}
			},
			isThisYouTube = function ( adParts ) {
				var n, i;
				for ( n = 0; n < adParts.length; n++ ) {
					for ( i = 0; i < adParts[ n ].assets.length; i++ ) {
						if ( adParts[ n ].assets[ i ].mimeType.toLowerCase() == 'youtube' ) {
							return true;
						}
					}
				}
				return false;
			},
			getBurl = function() {
				var burl = "Unknown",
					burlHalves;
				try {
					burl = window.location.href.toString();
					if ( burl.indexOf( 'facebook.com/' ) > -1 ) {
						burlHalves = burl.split( '?' );
						burl = burlHalves[ 0 ] + '---REDACTED_FOR_PRIVACY---';
					}
				} catch ( error ) {
				}
				return burl;
			},
			getAssetsInAdPartsByType = function( adPartType, assetType ) {
				var assetJsonNodes = [],
					H,
					i;
				for ( H = 0; H < TM.Feed.adParts.length; H++) {
					if ( TM.Feed.adParts[H].type == adPartType ) {
						for ( i = 0; i < TM.Feed.adParts[H].assets.length; i++ ) {
							if ( TM.Feed.adParts[H].assets[ i ][ 'type' ] == assetType ) {
								assetJsonNodes.push( TM.Feed.adParts[H].assets[ i ] );
							}
						}
					}
				}
				return assetJsonNodes;
			},
			assetsIncludeFlash = function() {
				var H, i, hasFlash = false;
				for ( H = 0; H < TM.Feed.adParts.length && hasFlash == false; H++) {
					for ( i = 0; i < TM.Feed.adParts[H].assets.length && hasFlash == false; i++ ) {
						hasFlash = ( ( !!TM.Feed.adParts[H].assets[ i ][ 'detail'] &&
								TM.Feed.adParts[H].assets[ i ][ 'detail'].indexOf( '.swf' ) > -1 ) ||
								TM.Feed.adParts[H].assets[ i ][ 'mimeType'] == 'application/x-shockwave-flash' );
					}
				}
				return hasFlash;
			},
			receiveMessage = function(func) {
				// Create cross-browser compatible window message event handler
				var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
				var windowAddListener = window[eventMethod];
				var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

				// Set up listener for ct message from playtime bridge when the 3rd party html ad is clicked
				windowAddListener(messageEvent, func, false);
			}
			auditAdClass = ( TM.Feed.adClass.toLowerCase() == 'bap' )?'bap':'ctp' +
				( isThisYouTube( TM.Feed.adParts ) )?'-yt-':'-tm-' +
				( TM.Feed.displayType.toLowerCase().indexOf( 'flash') > 0 )?'flash':'html5';

		// PUBLIC FUNCTIONS
		return {
			isNull: isNull,
			setDefault: setDefault,
			isEmpty: isEmpty,
			flashDetect: flashDetect,
			random: random,
			loadImage: loadImage,
			loadScript: loadScript,
			loadCSS: loadCSS,
			appendHTML: appendHTML,
			writeHTML: writeHTML,
			findInArray: findInArray,
			openClickThrough: openClickThrough,
			firePixels: firePixels,
			firePixel: firePixel,
			logPixel: logPixel,
			updateProtocol: updateProtocol,
			getBurl: getBurl,
			assetsIncludeFlash: assetsIncludeFlash,
			getAssetsInAdPartsByType: getAssetsInAdPartsByType,
			receiveMessage: receiveMessage
		};
	}( TM_array[ tm_auction_id ] );

    TM_array[ tm_auction_id ].Embed = function( tm_auction_id ) {
        var player,
            promoted_video,
            TM = TM_array[ tm_auction_id ],
            divId = tm_auction_id.replace(/[^a-zA-Z0-9]/g, '_'),

			getDivId = function(){
				return "TM_PlacementDiv_" + divId;
			},
			// This displays stuff on the page...
			getEmbedStr = function() {
				// Check for an empty feed
				if (TM.Util.isNull(TM.Feed) || TM.Util.isEmpty(TM.Feed)) {
					return null;
				}
				var embed;
				player = TM.Util.findInArray(TM.Feed.adParts, "type", "player");
				if (player == null) {
					player = TM.Util.findInArray(TM.Feed.adParts, "type", "expand");
				}

				if (player == null) {
					player = TM.Util.findInArray(TM.Feed.adParts, "type", "display");
				}

				// Find the video.  Needed  to populate object/embed tag
				if (!TM.Util.isNull(player) && TM.Util.findInArray(player.assets, "type", "promoted_video") != null) {
					promoted_video = TM.Util.findInArray(player.assets, "type", "promoted_video");
				}
				/*
				 if (TM.Util.findInArray(TM.Feed.adParts, "type", "teaser") != null) {
				 teaser = TM.Util.findInArray(TM.Feed.adParts, "type", "teaser");
				 }
				 */
				// If there's a bannerClickURL in the ad tag, prepend it to the banner clickURL in the TM.Feed.
				// Needed for AdX.
				// TODO: Add something to AdX tags to only do this for them.
				if (!TM.Util.isNull(promoted_video) && !TM.Util.isNull(promoted_video.clickURL) &&
					!TM.Util.isNull(TM.lc_params.bannerclickurl)) {
					promoted_video.clickURL = TM.lc_params.bannerclickurl + encodeURIComponent(promoted_video.clickURL);
				}

				// If HTML5, verify browser supports it.  Otherwise, fall back to flash
				if (TM.Feed.adClass == 'HTML5' && !document.createElement('video').canPlayType) {
					//Log(ERROR, 'This browser does not support HTML5 video!  Falling back to Flash.');
					TM.Feed.displayType = 'New Flash';
				}

				// TrustE Icon requirement to be not wmode=window, which is our default
				if (TM.Feed.bt) {
					TM.Feed.wmode = "opaque";
				}
				switch (TM.Feed.displayType) {
					/*--[BEGIN:flash-video-adunit]--*/
					case "New Flash":
					case "instream":
						//TODO: Use HTML Ad Unit if feed has no Flash assets
						// Check for Flash 9
						var flash_version = TM.Util.flashDetect();
						if (flash_version < 9) {
							embed = getFallbackEmbed();
						} else {
							embed = getNewFlashEmbed();
						}
						break;
					/*--[END:flash-video-adunit]--*/













					case "mraid_3rd_party":
					case "inbanner_3rd_party":
						embed = get3rdPartyEmbed();
						break;
					/*--[BEGIN:html-video-adunit]--*/
					case "HTML5":
						TM.Feed.rt = 'HTML5';
						embed = getHTML5Embed();
						break;
					/*--[END:html-video-adunit]--*/
					default:
						break;
				}
				if (TM.Util.isNull(embed)) {
					embed = getErrorEmbed();
				}
				return embed;
			},
/*--[BEGIN:flash-video-adunit]--*/
			getNewFlashEmbed = function () {
				var str = "",
					isIE = /*@cc_on!@*/false;
				if (isIE) {
					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="TMFlashUnit"' +
					' name="TMFlashUnit" width="' + TM.Feed.width + '" height="' + TM.Feed.height + '" >' +
					'<param name="movie" value="' + TM.lc_params.adpluginurl + '" />' +
					'<param name="allowFullScreen" value="true" />' +
					'<param name="allowscriptaccess" value="always" />' +
					'<param name="wmode" value="' + TM.Feed.wmode + '" />' +
					'<param name="auditAdClass" value="' + TM.Util.auditAdClass + '" />' +
					'<param name="sessId" value="' + TM.Feed.session.sessId + '" />' +
					'<param name="flashvars" value="zeroTime=' + TM.lc_params.zerotime + '" /></object>';
				} else {
					str = '<embed id="TMFlashUnit" name="TMFlashUnit" width="' + TM.Feed.width + '" height="' +
						TM.Feed.height + '" ' + 'src="' + TM.lc_params.adpluginurl + '?zeroTime=' +
						TM.lc_params.zerotime + '&auditAdClass=' + TM.Util.auditAdClass + '&sessId=' +
						TM.Feed.session.sessId + '" type="application/x-shockwave-flash" wmode="' + TM.Feed.wmode +
						'" allowscriptaccess="always" allowfullscreen="true" />';
				}
				str += getTrusteHtml();
				return str;
			},
/*--[END:flash-video-adunit]--*/












































			get3rdPartyEmbed = function() {
				var asset = TM.Util.findInArray(player.assets, "type", "display_code");


















































































































































































				if ( TM.Feed.displayType != 'mraid_3rd_party' ) {
					embed = asset.detail;
				}
				//if (TM.Util.isNull(asset) || TM.Util.isNull(asset.detail)) return null;
				//console.log ( 'asset.detail: ' + asset.detail );
				return embed;
			}/*get3rdPartyEmbed*/,
/*--[BEGIN:html-video-adunit]--*/
			getHTML5Embed = function() {
				var ret = {},
					adParts = {},
					j,
					type,
					str;

				TM.Util.loadScript(TM.lc_params.adpluginurl + '?sessId=' + TM.Feed.session.sessId, function () {
					new HTML5AdUnit(TM.Feed)
				});

				for ( j = 0; j < TM.Feed.adParts.length; j++) {
					type = TM.Feed.adParts[j].type;
					ret[type] = TM.Feed.adParts[j];
				}
				adParts = ret;
				str = "<div id='tm-video-container' style='width:" + TM.Feed.width + "px;height:" + TM.Feed.height +
					"px;'>";
				str += "<video id='tm-video-space'></video></div>";
				return str;
			},
/*--[END:html-video-adunit]--*/























































			getFallbackEmbed = function() {
				var fallbackEmbed,
					fallbackNodes = TM.Util.getAssetsInAdPartsByType( 'fallback', 'banner'),
					fallbackNode;
				if ( fallbackNodes.length > 0 ) {
					fallbackNode = fallbackNodes[0];
					var ctUrl = '',
						imgString = '<img width="' + fallbackNode.width + '" height="' + fallbackNode.height +
							'" src="' + fallbackNode.detail + '"/>';
					if ( !TM.Util.isNull(fallbackNode.clickURL) ) {
						if (!TM.Util.isNull(TM.lc_params.bannerclickurl)) {
							fallbackNode.clickURL = TM.lc_params.bannerclickurl + encodeURIComponent(fallbackNode.clickURL);
						}
						var params = {
							'sId': 0,
							'sessId': TM.Feed.session.sessId,
							'paId': TM.Feed.paId,
							'rt': 'HTML5',
							'w': fallbackNode.width,
							'h': fallbackNode.height,
							'redir': fallbackNode.clickURL
						}
						ctUrl = buildStatsUrl('ct', params);
					}
					if ( ctUrl == '' ){
						fallbackEmbed = imgString;
					} else {
						fallbackEmbed = '<a href="javascript:TM_array[\''+tm_auction_id+'\'].Util.openClickThrough(\'' + ctUrl +
			                            '\')" target="_new">' + imgString + '</a>';
					}
				} else {
					fallbackEmbed = getErrorEmbed();
				}
				return fallbackEmbed;
			},
			getErrorEmbed = function() {
				//TODO: Add error pixel request
				return '<a href="http://www.tubemogul.com" target="_new"><img width="' + TM.Feed.width +
					'" height="' + TM.Feed.height + '" src="' + TM.lc_params.assetbase +
					'/adtags/no_javascript.jpg" /></a>';
			},
			getTrusteHtml = function() {
				//Add Icon for TrustE
				console.log( 'Feed bt: ' + TM.Feed.bt );
				console.log( 'lcparams bt: ' + TM.lc_params.bt );
				if (!TM.Feed.bt && !TM.lc_params.bt) return "";
				return '<spa' + 'n id="te-clearads-js-truste01cont1"><sc' +
					'ript type="text/javascript" src="' + TM.lc_params.proto +
					'//choices.truste.com/ca?pid=tubemogul01&aid=tubemogul' +
					'01&cid=0811tm300x250&c=truste01cont1&w=' + TM.Feed.width + '&h=' + TM.Feed.height +
					'&plc=tr&js=10"></scr' + 'ipt></s' + 'pan>';
			},
			getTrusteScriptUrl = function() {
				if (!TM.Feed.bt && !TM.lc_params.bt) return "";
				return TM.lc_params.proto + '//choices.truste.com/ca?pid=tubemogul01&aid=tubemogul' +
				'01&cid=0811tm300x250&c=truste01cont1&w=' + TM.Feed.width + '&h=' + TM.Feed.height +
				'&plc=tr&js=10';
			},
			addQParams = function(params){
				params.sessId = TM.Feed.session.sessId;
				params.paId = TM.Feed.paId;
				params.psId = TM.Feed.psId;
				params.rt = TM.Feed.rt;
				params.burl = TM.Util.getBurl();
				params.w = TM.Feed.width;
				params.h = TM.Feed.height;
				// (vfd-enabled U mraid) is probably the entire set of ad server templates, but just to be safe, for now:
				/*--[BEGIN:vfd-enabled]--*/
				params.vinst = 't';
				/*--[END:vfd-enabled]--*/
			},
			getImpURL = function() {
				var params = {};
				addQParams(params);
				params.adEngImpQP = TM.Feed.adEngImpQP;
				if (TM.Feed.pt == 'imp') {
					params.bi = TM.Feed.bi;
					params.price = TM.Feed.price;
				}
























				return buildStatsUrl( 'imp', params );
			},
/*--[BEGIN:vfd-enabled]--*/
			getVimpURL = function(results) {
				var params = {};
				addQParams(params);
				params.vver = results.ovv_release_ver;
				switch (results.viewabilityState) {
					case "viewable" :
						params.vwbl = 't';
						break;
					case "unviewable" :
						params.vwbl = 'f';
						break;
					case "unmeasurable" :
						if (results.inIframe) {
							params.vwbl = 'ifr';
							params.ifr = 't';
						} else {
							params.vwbl = 'err';
							params.ifr = 'f';
						}
						break;
					default:
						params.vwbl = 'err';
						break;
				}
				if (params.vwbl != 'err'){
					params.vpct = Math.round(results.percentViewable);
					params.awin = results.focus?'t':'f';
					params.vw = results.clientWidth;
					params.vh = results.clientHeight;
					try{
						params.pw = results.objRight - results.objLeft;
						params.ph = results.objBottom - results.objTop;
					}catch (e){}
				}
				/* There are rare cases where IE reports massive player sizes; consider these errors */
				if ( results.objWidth > 20000 || results.objHeight > 20000 ) {
					params.pw = -1;
					params.ph = -1;
				}
				return buildStatsUrl( 'vimp', params );
			},
/*--[END:vfd-enabled]--*/
			buildStatsUrl = function( topic, params ) {
				// Build the URL
				var str = TM.lc_params.statsurl + "/" + topic + "?";
				for (a in params) {
					if (!TM.Util.isNull(params[a])) {
						str += '&' + a + '=' + encodeURIComponent(params[a]);
					}
				}
				// Add the conversion info
				if ( topic == 'imp' && !TM.Util.isNull(params.adEngImpQP)) str += '&' + params.adEngImpQP;
				if ( topic == 'ct' && !TM.Util.isNull(params.adEngClickThruQP)) str += '&' + params.adEngClickThruQP;
				if ( topic == 'view' && !TM.Util.isNull(params.adEngViewQP)) str += '&' + params.adEngViewQP;
				return str;
			},






















































			empty = function(){};
		// PUBLIC FUNCTIONS
		return {
			getEmbedStr: getEmbedStr
			,getDivId: getDivId
			,getImpURL: getImpURL
			,getTrusteScriptUrl: getTrusteScriptUrl
			/*--[BEGIN:vfd-enabled]--*/
			,getVimpURL: getVimpURL
			/*--[END:vfd-enabled]--*/



		};
	}( tm_auction_id );

	TM_array[ tm_auction_id].prepareAndEmbed = function( TM ) {
		var embedStr;
		// Parameter setup
		if (TM.Util.isNull(TM.lc_params)) TM.lc_params = {};

		if ( typeof tm_param_array != 'undefined' && !TM.Util.isNull(tm_param_array[TM.Feed.session.sessId])) {
			TM.tm_params = tm_param_array[TM.Feed.session.sessId];
		}








		if ( !TM.hasOwnProperty('tm_params') ) {
			TM.tm_params = {};
		}
		// Copy and lower-case all ad tag parameters
		for (a in TM.tm_params) {
			TM.lc_params[a.toLowerCase()] = TM.tm_params[a];
		}
		// Set zeroTime if it wasn't passed in the ad tag
		if (TM.Util.isNull(TM.lc_params.zerotime)) {
			TM.lc_params.zerotime = Number(new Date());
		}

		// Determine whether we are HTTP or HTTPS
		TM.Util.updateProtocol();

		// Default Assetbase if not specified
		TM.lc_params.assetbase = TM.Util.setDefault(TM.tm_params.assetbase, TM.lc_params.proto + TM.Feed.assetBaseURL);

		// Set up the stats reporting URL
		TM.lc_params.statsurl = TM.lc_params.proto + "//" + TM.Util.setDefault(TM.Feed.statsBaseURL, "stats.tubemogul.com/stats/1");

		// Get the ad plugin URL
		TM.lc_params.adpluginurl = TM.Feed.adPluginURL;
		if (TM.Feed.adPluginURL.substr(0, 4) != 'http') {
			TM.lc_params.adpluginurl = TM.lc_params.assetbase + TM.lc_params.adpluginurl;
		}
		// Move pixels that were defined in ad tag into feed
		while (!!TM.lc_params.pixels && TM.lc_params.pixels.length > 0) {
			TM.Feed.pixels.push(TM.lc_params.pixels.pop());
		}
		// Add the ad tag parameters to the feed
		TM.Feed.tagParams = TM.lc_params;

		// Update the sessId in the feed if in preview mode or to use the RTB auction ID.
		if (TM.Feed.preview)
			TM.Feed.session.sessId = "preview"
		else if (!TM.Util.isNull(TM.lc_params.auction_id)) {
			TM.Feed.session.sessId = TM.lc_params.auction_id;
		}
		// Fire "tag", Impression & "NOW" pixels
		var lcAdClass = TM.Feed.adClass.toLowerCase();
		var lcAdClassIsMraid;
































		if ( !lcAdClassIsMraid ) {
			// MRAID ads can be cached and never displayed; don't fire impressions until they're visible.
			// RTB will start putting the stats imp pixel outside the ad tag
			if (TM.Util.isNull(TM.lc_params.impurl)) {
				TM.Util.firePixel('Impression', 'Image', TM.Embed.getImpURL(), "TM_IMPRESSION");
			}
			TM.Util.firePixels("Impression");
		}
		TM.Util.firePixels("NOW");
		TM.Util.firePixels("TM_AUDIT_TAG");
		TM.Util.firePixels("tag");
		// Render it
		embedStr = TM.Embed.getEmbedStr();
		if (embedStr != 'async') {
			//document.write('<div id="TM_PlacementDiv_' + TM.Util.random() + '">' + embedStr + '</div>');
			TM.Util.writeHTML(TM.Embed.getDivId(), embedStr);
			if ( TM.Embed.getTrusteScriptUrl() ) {
				TM.Util.loadScript(TM.Embed.getTrusteScriptUrl());
			}
		}
	};
	TM_array[ tm_auction_id].prepareAndEmbed( TM_array[ tm_auction_id] );




	/*--[BEGIN:vfd-enabled]--*/
	initVfd(TM_array[ tm_auction_id]);
	/*--[END:vfd-enabled]--*/
}catch (e)
{
	console.log(e.toString());
	img = new Image();
	img.src = '//playtime.tubemogul.com/adtags/no_javascript.jpg';
	document.body.appendChild(img);
}

/*--[BEGIN:vfd-enabled]--*/
// Separate try/catch for VFD : Thrown error in VFD should not kill the ad
function  initVfd(TM) {
	try {
		var ovv_impression_handler = function (results) {
			var url = TM.Embed.getVimpURL(results);
			TM.Util.loadImage(url);
		};
		/*--[INCLUDE:vfd-js]--*/
	TM.VFD = function(id, callback, flashVersion) {
		// To use this template :
		// - Stencil in the build version and a compatible minified OVVAsset.js javascript core
		// - Stencil the resulting template into a Display ad_server_template or test framework

		var _id = id,
			_impression_callback = callback,
			_flashVersion = flashVersion;

		// So that player['onJsReady'+uid]() in OVVAsset.js will work on
		// Display element as well as Flash ExternalInterface callback...
		HTMLElement.prototype['onJsReady' + _id] = ovvJsReady;

		var VFD_VERSION = "1.0.0",
			OVV_VERSION = "1.2.0",
			BUILD_VERSION = "",
			BEACON_SWF = "//playtime.tubemogul.com/flash/OVVBeacon.swf",
			VIEWABLE_IMPRESSION_THRESHOLD = 10,
			UNMEASURABLE_IMPRESSION_THRESHOLD = 10,
			POLL_INTERVAL = 100,
			MIN_VIEW_AREA_PC = 50,

			_pollIntervalId,
			_buildVersion,
			_intervalTimer,
			_intervalsInView = 0,
			_intervalsUnMeasurable = 0,
			_vimpFired = false,

		onIntervalCheck = function () {
			if (_vimpFired) {
				// should not reach this as polling interval is turned off when vimp is fired, but just in case...
				return;
			}
			var results = checkViewability();
			_intervalsUnMeasurable = (results.viewabilityState == "unmeasurable") ? _intervalsUnMeasurable + 1 : 0;
			_intervalsInView = (results.viewabilityState == "viewable" && results.focus == true) ? _intervalsInView + 1 : 0;

			if (_intervalsInView >= VIEWABLE_IMPRESSION_THRESHOLD ||
				_intervalsUnMeasurable >= UNMEASURABLE_IMPRESSION_THRESHOLD) {
				// Stop polling: We only fire one vimp pixel from polling : either Viewable or Unmeasurable
				window.clearInterval(_pollIntervalId);
				// Just send the results : The ad server template or test framework
				// will calculate which pixel to fire.
				_impression_callback(results);
				_vimpFired = true;
			}
		},

		checkViewability = function () {
			var asset = window.$ovv.getAssetById(_id);
			var results = asset.checkViewability();
			results.ovv_release_ver = OVV_VERSION;
			results.vfd_release_ver = VFD_VERSION;
			return results;
		},

		intervalsInView = function() {
			return _intervalsInView;
		},

		// Public functions
		prepareOVV = function () {
			// In vfd_test_template un-minified OVVAsset.js is loaded in a
			// <script> tag and this function is not called
			var ovv_js = 'function OVV(){function getServingScenarioType(servingScenarioEnum){try{if(window.top==window)return servingScenarioEnum.OnPage;if(window.top.document.domain==window.document.domain)return servingScenarioEnum.SameDomainIframe}catch(e){}return servingScenarioEnum.CrossDomainIframe}this.DEBUG=!1,this.IN_IFRAME=window.top!==window.self,this.asset=null,this.positionInterval,this.userAgent=window.testOvvConfig&&window.testOvvConfig.userAgent?window.testOvvConfig.userAgent:navigator.userAgent,this.servingScenarioEnum={OnPage:1,SameDomainIframe:2,CrossDomainIframe:3},this.servingScenario=getServingScenarioType(this.servingScenarioEnum),this.IN_XD_IFRAME=this.servingScenario==this.servingScenarioEnum.CrossDomainIframe,this.geometrySupported=!this.IN_IFRAME;var browserData=new OVVBrowser(this.userAgent);this.browser=browserData.getBrowser(),this.browserIDEnum=browserData.getBrowserIDEnum(),this.interval=INTERVAL,this.releaseVersion="OVVRELEASEVERSION",this.buildVersion="OVVBUILDVERSION";var assets={},previousEvents=[],PREVIOUS_EVENTS_CAPACITY=1e3,subscribers=[];this.addAsset=function(ovvAsset){assets.hasOwnProperty(ovvAsset.getId())||(assets[ovvAsset.getId()]=ovvAsset,this.asset=ovvAsset)},this.removeAsset=function(ovvAsset){delete assets[ovvAsset.getId()]},this.getAssetById=function(id){return assets[id]},this.getAds=function(){var copy={};for(var id in assets)assets.hasOwnProperty(id)&&(copy[id]=assets[id]);return copy},this.subscribe=function(events,uid,func,getPreviousEvents){if(getPreviousEvents)for(key in previousEvents[uid])previousEvents[uid][key]&&contains(previousEvents[uid][key].eventName,events)&&runSafely(function(){func(uid,previousEvents[uid][key])});for(key in events)subscribers[events[key]+uid]||(subscribers[events[key]+uid]=[]),subscribers[events[key]+uid].push({Func:func})},this.publish=function(eventName,uid,args){var eventArgs={eventName:eventName,eventTime:getCurrentTime(),ovvArgs:args};if(previousEvents[uid]||(previousEvents[uid]=[]),previousEvents[uid].length<PREVIOUS_EVENTS_CAPACITY&&previousEvents[uid].push(eventArgs),eventName&&uid&&subscribers[eventName+uid]instanceof Array)for(var i=0;i<subscribers[eventName+uid].length;i++){var funcObject=subscribers[eventName+uid][i];funcObject&&funcObject.Func&&"function"==typeof funcObject.Func&&runSafely(function(){funcObject.Func(uid,eventArgs)})}},this.getAllReceivedEvents=function(uid){return previousEvents[uid]};var getCurrentTime=function(){"use strict";return Date.now?Date.now():(new Date).getTime()},contains=function(item,list){for(var i=0;i<list.length;i++)if(list[i]===item)return!0;return!1},runSafely=function(action){try{var ret=action();return void 0!==ret?ret:!0}catch(e){return!1}}}function OVVCheck(){this.clientHeight=-1,this.clientWidth=-1,this.error="",this.focus=null,this.fps=-1,this.id="",this.beaconsSupported=null,this.geometrySupported=null,this.geometryViewabilityState="",this.beaconViewabilityState="",this.cssViewabilityState="",this.domViewabilityState="",this.technique="",this.beacons=new Array,this.inIframe=null,this.objBottom=-1,this.objLeft=-1,this.objRight=-1,this.objTop=-1,this.percentViewable=-1,this.percentObscured=0,this.viewabilityState=""}function OVVBrowser(userAgent){function getBrowserDetailsByUserAgent(ua){var getData=function(){for(var data={ID:0,name:"",version:""},dataString=ua,i=0;i<dataBrowsers.length;i++)if(null!=dataString.match(new RegExp(dataBrowsers[i].brRegex))){if(data.ID=dataBrowsers[i].id,data.name=dataBrowsers[i].name,null==dataBrowsers[i].verRegex)break;var brverRes=dataString.match(new RegExp(dataBrowsers[i].verRegex+"[0-9]*"));if(null!=brverRes){var replaceStr=brverRes[0].match(new RegExp(dataBrowsers[i].verRegex));data.version=brverRes[0].replace(replaceStr[0],"")}var brOSRes=dataString.match(new RegExp(winOSRegex+"[0-9\\.]*"));null!=brOSRes&&(data.os=brOSRes[0]);break}return data},winOSRegex="(Windows NT )",dataBrowsers=[{id:4,name:"Opera",brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,name:"MSIE",brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,name:"Firefox",brRegex:"Firefox",verRegex:"Firefox/"},{id:3,name:"Chrome",brRegex:"Chrome",verRegex:"Chrome/"},{id:5,name:"Safari",brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];return getData()}var browserIDEnum={MSIE:1,Firefox:2,Chrome:3,Opera:4,safari:5},browser=getBrowserDetailsByUserAgent(userAgent);this.getBrowser=function(){return browser},this.getBrowserIDEnum=function(){return browserIDEnum}}function OVVBeaconSupportCheck(){var ovvBrowser=new OVVBrowser($ovv.userAgent),browser=ovvBrowser.getBrowser(),browserIDEnum=ovvBrowser.getBrowserIDEnum();this.supportsBeacons=function(){var WIN_8_1=6.3,isIE=browser.ID==browserIDEnum.MSIE,isSupportedIEVersion=browser.version>=11,ntVersionArr=browser.version?browser.version.split(" "):[0],ntVersion=ntVersionArr[ntVersionArr.length-1],isSupportedOSForIE=ntVersion>=WIN_8_1;return!isIE||isSupportedIEVersion&&isSupportedOSForIE}}function OVVAsset(uid,dependencies){var lastPlayerLocation,player,TOTAL_BEACONS=13,SQRT_2=Math.sqrt(2),CONTROL=0,CENTER=1,OUTER_TOP_LEFT=2,OUTER_TOP_RIGHT=3,OUTER_BOTTOM_LEFT=4,OUTER_BOTTOM_RIGHT=5,MIDDLE_TOP_LEFT=6,MIDDLE_TOP_RIGHT=7,MIDDLE_BOTTOM_LEFT=8,MIDDLE_BOTTOM_RIGHT=9,INNER_TOP_LEFT=10,INNER_TOP_RIGHT=11,INNER_BOTTOM_LEFT=12,INNER_BOTTOM_RIGHT=13,positionBeaconsIntervalDelay=500,id=uid,beaconsStarted=0,BEACON_SIZE=$ovv.DEBUG?20:1,geometryViewabilityCalculator=dependencies.geometryViewabilityCalculator,getBeaconFunc=function(){return null},getBeaconContainerFunc=function(){return null},beaconSupportCheck=new OVVBeaconSupportCheck;this.checkViewability=function(){var check=new OVVCheck;if(check.id=id,check.inIframe=$ovv.IN_IFRAME,check.geometrySupported=$ovv.geometrySupported,check.focus=isInFocus(),!player)return check.error="Player not found!",check;if(checkCssInvisibility(check,player)===!0){if(!$ovv.DEBUG)return check;check.cssViewabilityState=OVVCheck.UNVIEWABLE}if(checkDomObscuring(check,player)===!0){if(!$ovv.DEBUG)return check;check.domViewabilityState=OVVCheck.UNVIEWABLE}else check.percentObscured=0;if(!beaconSupportCheck.supportsBeacons()&&check.geometrySupported===!1&&(check.viewabilityState=OVVCheck.UNMEASURABLE,!$ovv.DEBUG))return check;if(check.geometrySupported){if(check.technique=OVVCheck.GEOMETRY,checkGeometry(check,player),check.viewabilityState=check.percentViewable>=MIN_VIEW_AREA_PC?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,!$ovv.DEBUG)return check;check.geometryViewabilityState=check.viewabilityState}var controlBeacon=getBeacon(0),controlBeaconContainer=getBeaconContainer(0);if(controlBeacon&&controlBeacon.isViewable&&controlBeaconContainer){var controlBeaconVisible=isOnScreen(controlBeaconContainer)&&controlBeacon.isViewable();check.beaconsSupported=!controlBeaconVisible}else check.beaconsSupported=!1;if(beaconsReady())if(check.beaconsSupported){check.technique=OVVCheck.BEACON;var viewable=checkBeacons(check);null===viewable?(check.viewabilityState=OVVCheck.UNMEASURABLE,$ovv.DEBUG&&(check.beaconViewabilityState=OVVCheck.UNMEASURABLE)):(check.viewabilityState=viewable?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,$ovv.DEBUG&&(check.beaconViewabilityState=viewable?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE))}else check.viewabilityState=OVVCheck.UNMEASURABLE;else check.technique=OVVCheck.BEACON,check.viewabilityState=OVVCheck.NOT_READY;if($ovv.DEBUG)if(check.technique="",null===check.geometryViewabilityState&&null===check.beaconViewabilityState)check.viewabilityState=OVVCheck.UNMEASURABLE;else{var beaconViewable=check.beaconViewabilityState===OVVCheck.VIEWABLE,cssViewable=check.cssViewabilityState===OVVCheck.VIEWABLE,domViewable=check.domViewabilityState===OVVCheck.VIEWABLE,geometryViewable=check.geometryViewabilityState===OVVCheck.VIEWABLE;check.viewabilityState=cssViewable||domViewable||beaconViewable||geometryViewable?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE}return check},this.beaconStarted=function(index){$ovv.DEBUG&&getBeacon(index).debug&&getBeacon(index).debug(),0!==index&&(beaconsStarted++,beaconsReady()&&player["onJsReady"+uid]())},this.dispose=function(){for(var index=1;TOTAL_BEACONS>=index;index++){var container=getBeaconContainer(index);container&&(delete beaconsStarted[index],container.parentElement.removeChild(container))}clearInterval(window.$ovv.positionInterval),window.$ovv.removeAsset(this)},this.getId=function(){return id},this.getPlayer=function(){return player};var checkCssInvisibility=function(check,player){var style=window.getComputedStyle(player,null),visibility=style.getPropertyValue("visibility"),display=style.getPropertyValue("display");return"hidden"==visibility||"none"==display?(check.technique=OVVCheck.CSS_INVISIBILITY,check.viewabilityState=OVVCheck.UNVIEWABLE,!0):!1},checkDomObscuring=function(check,player){var playerRect=player.getBoundingClientRect(),offset=12,xLeft=playerRect.left+offset,xRight=playerRect.right-offset,yTop=playerRect.top+offset,yBottom=playerRect.bottom-offset,xCenter=Math.floor(playerRect.left+playerRect.width/2),yCenter=Math.floor(playerRect.top+playerRect.height/2),testPoints=[{x:xLeft,y:yTop},{x:xCenter,y:yTop},{x:xRight,y:yTop},{x:xLeft,y:yCenter},{x:xCenter,y:yCenter},{x:xRight,y:yCenter},{x:xLeft,y:yBottom},{x:xCenter,y:yBottom},{x:xRight,y:yBottom}];for(var p in testPoints)if(testPoints[p]&&testPoints[p].x>=0&&testPoints[p].y>=0&&(elem=document.elementFromPoint(testPoints[p].x,testPoints[p].y),null!=elem&&elem!=player&&!player.contains(elem))){var style=window.getComputedStyle(elem,null),opacity=style.getPropertyValue("opacity");if(opacity>.5&&(check.percentObscured=100*overlapping(playerRect,elem.getBoundingClientRect()),check.percentObscured>100-MIN_VIEW_AREA_PC))return check.percentViewable=100-check.percentObscured,check.technique=OVVCheck.DOM_OBSCURING,check.viewabilityState=OVVCheck.UNVIEWABLE,!0}return!1},overlapping=function(playerRect,elem){var playerArea=playerRect.width*playerRect.height,x_overlap=Math.max(0,Math.min(playerRect.right,elem.right)-Math.max(playerRect.left,elem.left)),y_overlap=Math.max(0,Math.min(playerRect.bottom,elem.bottom)-Math.max(playerRect.top,elem.top));return x_overlap*y_overlap/playerArea},checkGeometry=function(check,player){var viewabilityResult=geometryViewabilityCalculator.getViewabilityState(player,window);return viewabilityResult.error||(check.clientWidth=viewabilityResult.clientWidth,check.clientHeight=viewabilityResult.clientHeight,check.percentViewable=viewabilityResult.percentViewable-check.percentObscured,check.objTop=viewabilityResult.objTop,check.objBottom=viewabilityResult.objBottom,check.objLeft=viewabilityResult.objLeft,check.objRight=viewabilityResult.objRight),viewabilityResult},checkBeacons=function(check){if(!beaconsReady())return null;var beaconsVisible=0,outerCornersVisible=0,middleCornersVisible=0,innerCornersVisible=0;check.beacons=new Array(TOTAL_BEACONS);var objRect=player.getClientRects?player.getClientRects()[0]:{top:-1,bottom:-1,left:-1,right:-1};check.objTop=objRect.top,check.objBottom=objRect.bottom,check.objLeft=objRect.left,check.objRight=objRect.right;for(var index=0;TOTAL_BEACONS>=index;index++)if(0!==index){var beacon=getBeacon(index),beaconContainer=getBeaconContainer(index),isViewable=beacon.isViewable(),onScreen=isOnScreen(beaconContainer);if(check.beacons[index]=isViewable&&onScreen,isViewable)switch(beaconsVisible++,index){case OUTER_TOP_LEFT:case OUTER_TOP_RIGHT:case OUTER_BOTTOM_LEFT:case OUTER_BOTTOM_RIGHT:outerCornersVisible++;break;case MIDDLE_TOP_LEFT:case MIDDLE_TOP_RIGHT:case MIDDLE_BOTTOM_LEFT:case MIDDLE_BOTTOM_RIGHT:middleCornersVisible++;break;case INNER_TOP_LEFT:case INNER_TOP_RIGHT:case INNER_BOTTOM_LEFT:case INNER_BOTTOM_RIGHT:innerCornersVisible++}}if(beaconsVisible===TOTAL_BEACONS)return!0;if(100==MIN_VIEW_AREA_PC)return!1;if(50==MIN_VIEW_AREA_PC){var beacons=check.beacons;return beacons[CENTER]===!1?innerCornersVisible>=3||middleCornersVisible>=3||outerCornersVisible>=3?null:!1:beacons[CENTER]===!0&&(beacons[OUTER_TOP_LEFT]===!0&&beacons[OUTER_TOP_RIGHT]===!0||beacons[OUTER_TOP_LEFT]===!0&&beacons[OUTER_BOTTOM_LEFT]===!0||beacons[OUTER_TOP_RIGHT]===!0&&beacons[OUTER_BOTTOM_RIGHT]===!0||beacons[OUTER_BOTTOM_LEFT]===!0&&beacons[OUTER_BOTTOM_RIGHT]===!0)?!0:beacons[CENTER]===!0&&4==middleCornersVisible?!0:(!beacons[OUTER_TOP_LEFT]||!beacons[OUTER_BOTTOM_RIGHT]||beacons[MIDDLE_TOP_LEFT]&&beacons[INNER_TOP_LEFT]&&beacons[CENTER]&&!beacons[INNER_BOTTOM_RIGHT]&&!beacons[MIDDLE_BOTTOM_RIGHT])&&(!beacons[OUTER_BOTTOM_LEFT]||!beacons[OUTER_TOP_RIGHT]||beacons[MIDDLE_BOTTOM_LEFT]&&beacons[INNER_BOTTOM_LEFT]&&beacons[CENTER]&&beacons[INNER_TOP_RIGHT]&&beacons[MIDDLE_TOP_RIGHT])?!1:null}return null},beaconsReady=function(){return player?beaconsStarted===TOTAL_BEACONS:!1},createBeacons=function(url){var reversed="LRU_FWS_NOCAEB",unreplaced=reversed.split("").reverse().join("");if(""!=url&&url!=unreplaced){for(var index=0;TOTAL_BEACONS>=index;index++){var swfContainer=document.createElement("DIV");swfContainer.id="OVVBeaconContainer_"+index+"_"+id,swfContainer.style.position="absolute",swfContainer.style.zIndex=$ovv.DEBUG?99999:-99999;var html={QUOT}<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{QUOT}+BEACON_SIZE+{QUOT}" height="{QUOT}+BEACON_SIZE+{QUOT}"><param name="movie" value="{QUOT}+url+{QUOT}" /><param name="quality" value="low" /><param name="flashvars" value="id={QUOT}+id+"&index="+index+{QUOT}" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--[if !IE]>--><object id="OVVBeacon_{QUOT}+index+"_"+id+{QUOT}" type="application/x-shockwave-flash" data="{QUOT}+url+{QUOT}" width="{QUOT}+BEACON_SIZE+{QUOT}" height="{QUOT}+BEACON_SIZE+{QUOT}"><param name="quality" value="low" /><param name="flashvars" value="id={QUOT}+id+"&index="+index+{QUOT}" /><param name="bgcolor" value="#ff0000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--<![endif]--></object>{QUOT};swfContainer.innerHTML=html,document.body.insertBefore(swfContainer,document.body.firstChild)}positionBeacons.bind(this)(),this.positionInterval=setInterval(positionBeacons.bind(this),positionBeaconsIntervalDelay)}},createFrameBeacons=function(){for(var index=0;TOTAL_BEACONS>=index;index++){var iframe=document.createElement("iframe");iframe.name=iframe.id="OVVFrame_"+id+"_"+index,iframe.width=$ovv.DEBUG?20:1,iframe.height=$ovv.DEBUG?20:1,iframe.frameBorder=0,iframe.style.position="absolute",iframe.style.zIndex=$ovv.DEBUG?99999:-99999,iframe.src="javascript: window.isInViewArea = undefined; window.wasInViewArea = false; window.isInView = undefined; window.wasViewed = false; window.started = false; window.index = "+index+{QUOT};window.isViewable = function() { return window.isInView; }; var cnt = 0; setTimeout(function() {var span = document.createElement("span");span.id = "ad1";document.body.insertBefore(span, document.body.firstChild);},300);setTimeout(function() {setInterval(function() { ad1 = document.getElementById("ad1");if (ad1 != null && document.body != null){ad1.innerHTML = window.mozPaintCount > cnt ? "In View" : "Out of View";var paintCount = window.mozPaintCount; window.isInView = (paintCount>cnt); cnt = paintCount; if (parent.$ovv.DEBUG == true) {if(window.isInView === true){document.body.style.background = "green";} else {document.body.style.background = "red";}}if (window.started === false) {parent.$ovv.getAssetById("{QUOT}+id+{QUOT}").beaconStarted(window.index);window.started = true;}}}, 500)},400);{QUOT},document.body.insertBefore(iframe,document.body.firstChild)}positionBeacons.bind(this)(),this.positionInterval=setInterval(positionBeacons.bind(this),positionBeaconsIntervalDelay)},positionBeacons=function(){if(beaconsReady()){var playerLocation=player.getClientRects()[0];if(!lastPlayerLocation||!playerLocation||lastPlayerLocation.left!==playerLocation.left||lastPlayerLocation.right!==playerLocation.right||lastPlayerLocation.top!==playerLocation.top||lastPlayerLocation.bottom!==playerLocation.bottom){lastPlayerLocation=playerLocation;for(var playerWidth=playerLocation.right-playerLocation.left,playerHeight=playerLocation.bottom-playerLocation.top,innerWidth=playerWidth/(1+SQRT_2),innerHeight=playerHeight/(1+SQRT_2),middleWidth=playerWidth/SQRT_2,middleHeight=playerHeight/SQRT_2,index=0;TOTAL_BEACONS>=index;index++){var left=playerLocation.left+document.body.scrollLeft,top=playerLocation.top+document.body.scrollTop;switch(index){case CONTROL:left=-1e5,top=-1e5;break;case CENTER:left+=(playerWidth-BEACON_SIZE)/2,top+=(playerHeight-BEACON_SIZE)/2;break;case OUTER_TOP_LEFT:break;case OUTER_TOP_RIGHT:left+=playerWidth-BEACON_SIZE;break;case OUTER_BOTTOM_LEFT:top+=playerHeight-BEACON_SIZE;break;case OUTER_BOTTOM_RIGHT:left+=playerWidth-BEACON_SIZE,top+=playerHeight-BEACON_SIZE;break;case MIDDLE_TOP_LEFT:left+=(playerWidth-middleWidth)/2,top+=(playerHeight-middleHeight)/2;break;case MIDDLE_TOP_RIGHT:left+=(playerWidth-middleWidth)/2+middleWidth,top+=(playerHeight-middleHeight)/2;break;case MIDDLE_BOTTOM_LEFT:left+=(playerWidth-middleWidth)/2,top+=(playerHeight-middleHeight)/2+middleHeight;break;case MIDDLE_BOTTOM_RIGHT:left+=(playerWidth-middleWidth)/2+middleWidth,top+=(playerHeight-middleHeight)/2+middleHeight;break;case INNER_TOP_LEFT:left+=(playerWidth-innerWidth)/2,top+=(playerHeight-innerHeight)/2;break;case INNER_TOP_RIGHT:left+=(playerWidth-innerWidth)/2+innerWidth,top+=(playerHeight-innerHeight)/2;break;case INNER_BOTTOM_LEFT:left+=(playerWidth-innerWidth)/2,top+=(playerHeight-innerHeight)/2+innerHeight;break;case INNER_BOTTOM_RIGHT:left+=(playerWidth-innerWidth)/2+innerWidth,top+=(playerHeight-innerHeight)/2+innerHeight}index>=MIDDLE_TOP_LEFT&&(left-=BEACON_SIZE/2,top-=BEACON_SIZE/2);var swfContainer=getBeaconContainer(index);swfContainer.style.left=left+"px",swfContainer.style.top=top+"px"}}}},isOnScreen=function(element){if(!element)return!1;var screenWidth=Math.max(document.body.clientWidth,window.innerWidth),screenHeight=Math.max(document.body.clientHeight,window.innerHeight),objRect=element.getClientRects()[0];return objRect.top<screenHeight&&objRect.bottom>0&&objRect.left<screenWidth&&objRect.right>0},getBeacon=function(index){return getBeaconFunc(index)}.memoize(),getFlashBeacon=function(index){return document.getElementById("OVVBeacon_"+index+"_"+id)},getFrameBeacon=function(index){var frame=document.getElementById("OVVFrame_"+id+"_"+index),contentWindow=null;return frame&&(contentWindow=frame.contentWindow),contentWindow},getBeaconContainer=function(index){return getBeaconContainerFunc(index)}.memoize(),getFlashBeaconContainer=function(index){return document.getElementById("OVVBeaconContainer_"+index+"_"+id)},getFrameBeaconContainer=function(index){return document.getElementById("OVVFrame_"+id+"_"+index)},findPlayer=function(){console.log("in findPlayer()"),console.log("id: "+id),console.log("getElementById: "+document.getElementById(id));for(var embeds=document.getElementsByTagName("embed"),i=0;i<embeds.length;i++)if(embeds[i][id])return embeds[i];console.log("...no embeds.");for(var objs=document.getElementsByTagName("object"),i=0;i<objs.length;i++)if(objs[i][id])return objs[i];return console.log("...no objects."),document.getElementById(id)},isInFocus=function(){return"undefined"!==document.hidden&&document.hidden===!0?!1:!0};player=findPlayer(),0==$ovv.geometrySupported||$ovv.DEBUG?"number"==typeof window.mozPaintCount?(getBeaconFunc=getFrameBeacon,getBeaconContainerFunc=getFrameBeaconContainer,createFrameBeacons.bind(this)()):(getBeaconFunc=getFlashBeacon,getBeaconContainerFunc=getFlashBeaconContainer,createBeacons.bind(this)("BEACON_SWF_URL")):player&&player["onJsReady"+uid]&&setTimeout(function(){player["onJsReady"+uid]()},5)}function OVVGeometryViewabilityCalculator(){this.getViewabilityState=function(player,contextWindow){var viewablePercentage,minViewPortSize=getMinViewPortSize();if(minViewPortSize.area==1/0)return{error:"Failed to determine viewport"};var assetRect=player.getBoundingClientRect(),playerArea=assetRect.width*assetRect.height;if(minViewPortSize.area/playerArea<MIN_VIEW_AREA_PC/100)viewablePercentage=Math.floor(100*minViewPortSize.area/playerArea);else{var viewPortSize=getViewPortSize(window.top),visibleAssetSize=getAssetVisibleDimension(player,contextWindow);visibleAssetSize.bottom>viewPortSize.height&&(visibleAssetSize.height-=visibleAssetSize.bottom-viewPortSize.height),visibleAssetSize.top<0&&(visibleAssetSize.height+=visibleAssetSize.top),visibleAssetSize.left<0&&(visibleAssetSize.width+=visibleAssetSize.left),visibleAssetSize.right>viewPortSize.width&&(visibleAssetSize.width-=visibleAssetSize.right-viewPortSize.width),viewablePercentage=Math.floor(100*visibleAssetSize.width*visibleAssetSize.height/playerArea)}var result={clientWidth:viewPortSize.width,clientHeight:viewPortSize.height,objTop:assetRect.top,objBottom:assetRect.bottom,objLeft:assetRect.left,objRight:assetRect.right,percentViewable:viewablePercentage};return result};var getMinViewPortSize=function(){for(var minViewPortSize=getViewPortSize(window),minViewPortArea=minViewPortSize.area,currentWindow=window;currentWindow!=window.top;)currentWindow=currentWindow.parent,viewPortSize=getViewPortSize(currentWindow),viewPortSize.area<minViewPortArea&&(minViewPortArea=viewPortSize.area,minViewPortSize=viewPortSize);return minViewPortSize},getViewPortSize=function(contextWindow){var viewPortSize={width:1/0,height:1/0,area:1/0};return!isNaN(contextWindow.document.body.clientWidth)&&contextWindow.document.body.clientWidth>0&&(viewPortSize.width=contextWindow.document.body.clientWidth),!isNaN(contextWindow.document.body.clientHeight)&&contextWindow.document.body.clientHeight>0&&(viewPortSize.height=contextWindow.document.body.clientHeight),contextWindow.document.documentElement&&contextWindow.document.documentElement.clientWidth&&!isNaN(contextWindow.document.documentElement.clientWidth)&&(viewPortSize.width=contextWindow.document.documentElement.clientWidth),contextWindow.document.documentElement&&contextWindow.document.documentElement.clientHeight&&!isNaN(contextWindow.document.documentElement.clientHeight)&&(viewPortSize.height=contextWindow.document.documentElement.clientHeight),contextWindow.innerWidth&&!isNaN(contextWindow.innerWidth)&&(viewPortSize.width=Math.min(viewPortSize.width,contextWindow.innerWidth)),contextWindow.innerHeight&&!isNaN(contextWindow.innerHeight)&&(viewPortSize.height=Math.min(viewPortSize.height,contextWindow.innerHeight)),viewPortSize.area=viewPortSize.height*viewPortSize.width,viewPortSize},getAssetVisibleDimension=function(element,contextWindow){var currWindow=contextWindow,parentWindow=contextWindow.parent,resultDimension={width:0,height:0,left:0,right:0,top:0,bottom:0};if(element){var elementRect=getPositionRelativeToViewPort(element,contextWindow);if(elementRect.width=elementRect.right-elementRect.left,elementRect.height=elementRect.bottom-elementRect.top,resultDimension=elementRect,currWindow!=parentWindow){var parentDimension=getAssetVisibleDimension(currWindow.frameElement,parentWindow);parentDimension.bottom<resultDimension.bottom&&(parentDimension.bottom<resultDimension.top&&(resultDimension.top=parentDimension.bottom),resultDimension.bottom=parentDimension.bottom),parentDimension.right<resultDimension.right&&(parentDimension.right<resultDimension.left&&(resultDimension.left=parentDimension.right),resultDimension.right=parentDimension.right),resultDimension.width=resultDimension.right-resultDimension.left,resultDimension.height=resultDimension.bottom-resultDimension.top}}return resultDimension},getPositionRelativeToViewPort=function(element,contextWindow){var currWindow=contextWindow,parentWindow=contextWindow.parent,resultPosition={left:0,right:0,top:0,bottom:0};if(element){var elementRect=element.getBoundingClientRect();resultPosition=currWindow!=parentWindow?getPositionRelativeToViewPort(currWindow.frameElement,parentWindow):{left:elementRect.left+resultPosition.left,right:elementRect.right+resultPosition.left,top:elementRect.top+resultPosition.top,bottom:elementRect.bottom+resultPosition.top}}return resultPosition}}OVVCheck.UNMEASURABLE="unmeasurable",OVVCheck.VIEWABLE="viewable",OVVCheck.UNVIEWABLE="unviewable",OVVCheck.NOT_READY="not_ready",OVVCheck.BEACON="beacon",OVVCheck.GEOMETRY="geometry",OVVCheck.CSS_INVISIBILITY="css_invisibility",OVVCheck.DOM_OBSCURING="dom_obscuring",Function.prototype.memoized=function(key){return this._cacheValue=this._cacheValue||{},void 0!==this._cacheValue[key]?this._cacheValue[key]:this._cacheValue[key]=this.apply(this,arguments)},Function.prototype.memoize=function(){var fn=this;return function(){return fn.memoized.apply(fn,arguments)}},window.$ovv=window.$ovv||new OVV,window.$ovv.addAsset(new OVVAsset("OVVID",{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator}));'
				.replace(/\{QUOT\}/g, "'")
				.replace(/OVVID/g, id)
				.replace(/INTERVAL/g, POLL_INTERVAL)
				.replace(/OVVBUILDVERSION/g, BUILD_VERSION)
				.replace(/OVVRELEASEVERSION/g, OVV_VERSION)
				.replace(/MIN_VIEW_AREA_PC/g, MIN_VIEW_AREA_PC);

			if (_flashVersion > 9 /* ? check this */) {
				ovv_js = ovv_js.replace(/BEACON_SWF_URL/g, BEACON_SWF);
			}

			eval(ovv_js);
		};

		function ovvJsReady() {
			_pollIntervalId = setInterval(onIntervalCheck, POLL_INTERVAL);
		}
		return{prepareOVV: prepareOVV, checkViewability: checkViewability, intervalsInView:intervalsInView};
	}
		TM.vfd = new TM.VFD(TM.Embed.getDivId(), ovv_impression_handler, TM.Util.flashDetect());
		TM.vfd.prepareOVV();
	} catch (e)
	{
		console.log(e.toString());
		// Fire unmeasurable pixel?
	}
}
/*--[END:vfd-enabled]--*/
