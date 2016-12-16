(function (window) {
    function insertScript(url) {
        var headElement = window.document.getElementsByTagName("head"), scriptElement;
        if (headElement && headElement[0]) {
            try {
                scriptElement = window.document.createElement('script');
                scriptElement.type = "text/javascript";
                scriptElement.src = url;
                headElement[0].appendChild(scriptElement);
                return;
            } catch (e) {
                //Do noting
            }
        }

        writeScript(url);
    }

    function serialize(obj, prefix) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push(typeof v == "object" ?
                        serialize(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("%26");
    }

    function paramsToUrl(params) {
        var key, parts = [];
        for (key in params) {
            if (params.hasOwnProperty(key)) {
            	if (key != 'price_floor' && key != 'price_floor_offset' && key != 'pixel') {
            		parts.push(key + "=" + params[key]);
            	}
            }
        }

        return parts.join("&");
    }

    function writeScript(url) {
        document.write('<' + 'scri' + 'pt type="text/javascript" src="' + url + '"></' + 'scri' + 'pt>');
    }

    function length(obj) {
        var count = 0, key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                count += 1;
            }
        }

        return count;
    }

    /**
     * Fisher–Yates shuffle implementation
     * see: http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
     */
    function shuffle(myArray) {
        var i = myArray.length;
        if (i == 0) {
            return;
        }

        while (--i) {
            var j = Math.floor(Math.random() * ( i + 1 )), tmp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = tmp;
        }
    }

    function checkServerUrl(serverUrl) {
    	if (serverUrl && window.location && window.location.protocol && window.location.protocol == "https:" && serverUrl.indexOf("http://") == 0) {
    		return "https://" + serverUrl.substring(7);
    	}
    	return serverUrl;
    }
    
    function round(value) {
    	var result = Math.round(value*100)/100;
    	if (result == 0) {
    		result = value;
    	}
    	return result;
    }

    var pubmatic_pixels_saved = false;
    var rtb = {
        'script_url': '',
        'confirm_banner_url': '',
        'admeld': {
            'server_url': '',
            'callbacks': {},
            'callbacksCount': 0
        },
        'pubmatic': {
            'server_url': '',
            'callbacks': {},
            'callbacksCount': 0
        },
        'openrtb': {
            'server_url': '',
            'callbacks': {},
            'callbacksCount': 0
        },
        'waiting_sources': {},
        'waiting_ads' : [],
        'bids': {},
        'above_the_fold': {},
        'ad_height': 0,
        'above_the_fold_threshold': 0.5
    };

    rtb.verify = function() {
        var view_id, source, sources;

        for (view_id in rtb.waiting_sources) {
            if (rtb.waiting_sources.hasOwnProperty(view_id)) {
                sources = rtb.waiting_sources[view_id];
                for (source in sources) {
                    if (sources.hasOwnProperty(source)) {
                        rtb.bids[view_id].push({
                            'source' : source,
                            'time' : new Date().getTime() - sources[source].start,
                            'status' : 'error',
                            'ask_price' : sources[source].ask_price,
                            'price_floor' : sources[source].price_floor
                        });
                    }
                }

                delete rtb.waiting_sources[view_id];
                rtb.finishBidding(view_id);
            }
        }
    };

    rtb.finishBidding = function(view_id) {
        var bids = rtb.bids[view_id], result = bids[0],
                max_bid = bids[0].bid, i, above_the_fold = rtb.above_the_fold[view_id],
                bid, result_pos = 0;
        if (length(rtb.waiting_sources[view_id]) > 0) {
            //Not all RTB sources was responded
            return;
        }

        //Choose maximum bid and start ad selection
        var second_price_bid = 0;
        var second_price_pos = -1;
        for (i = 1; i < bids.length; i++) {
        	bid = bids[i].bid;
        	if (bid) {
	          if (bid > max_bid && bid >= bids[i].price_floor) {
	           	max_bid = bid;
	            result = bids[i];
	            result_pos = i;
	          }
	            
	          if (bids[i].provider && bids[i].json) {
	          	var bidders = bids[i].json.bidders;
	          	if (bidders && bidders.length) {
		           	for (var j=0; j<bidders.length; j++) {
		           		var provider_bid = bidders[j]; 
		          		if (provider_bid.name && provider_bid.name.toLowerCase() == bids[i].provider.toLowerCase()) { // find data for winning provider
		          			if (provider_bid.closeType != "SELF" && provider_bid.bid) {
		          				second_price_bid = provider_bid.bid;
		          				second_price_pos = i;
		          			}
		          			break;
		          		}
		          	}
	          	}
	          }
        	}
        }
        
        if (second_price_pos >= 0 && second_price_pos != result_pos) {
        	// we have second price and it isn't current winner
        	if (second_price_bid > max_bid) {
        		result = bids[second_price_pos];
        		result.bid = max_bid + 0.01;
        	}
        }

        delete rtb.bids[view_id];
        delete rtb.waiting_sources[view_id];
        delete rtb.above_the_fold[view_id];

        result.show_creative(result.bid);

        for (i = 0; i < bids.length; i++) {
        	if (bids[i].show_footer) {
        		bids[i].show_footer(result.bid);
        	}
        }
        
        if (result.pixel) {
        	document.write(result.pixel);
        }

        rtb.confirmImpression(result.source, bids, above_the_fold);
    };

    rtb.pubmatic.callback = function(json_ad) {
        var callback = rtb.pubmatic.callbacks['callback_' + json_ad['meta_data']['rid']];
        if (callback) {
            callback('callback_' + json_ad['meta_data']['rid'], json_ad);
        }
    };

    rtb.createAdMeldCallback = function(view_id, price_floor, ask_price, pixel) {
        var start = new Date().getTime(), callback = function (callbackId, json) {
            delete rtb.admeld[callbackId];
            delete rtb.admeld.callbacks[callbackId];
            delete rtb.waiting_sources[view_id]['admeld'];

            var rtb_creative = json['ad']['creative'], beacons = json['pixels'], bid = json['ad']['bid'];

            //Clean-up JSON object to reduce debug traffic
            delete json['ad']['creative'];
            delete json['pixels'];

            rtb.bids[view_id].push({
                'bid': bid,
                'source' : 'admeld',
                'price_floor' : price_floor,
                'ask_price' : ask_price,
                'pixel' : pixel, 
                'show_creative' : function(result_bid) {
                    document.write(rtb_creative);
                },
                'show_footer' : function(result_bid) {
                    var key;
                    for (key in beacons) {
                    	if (beacons.hasOwnProperty(key)) {
                            document.write(beacons[key]);
                        }
                    }
                },
                'json' : json,
                'time' : new Date().getTime() - start,
                'status': bid > 0 ? 'ok' : 'nobid'
            });

            rtb.finishBidding(view_id);
        };

        var callbackId = 'callback_' + rtb.admeld.callbacksCount;
        rtb.admeld.callbacksCount += 1;
        rtb.admeld.callbacks[callbackId] = callback;
        rtb.admeld[callbackId] = function(json) {
            rtb.admeld.callbacks[callbackId](callbackId, json);
        };
        return 'window.adjuggler.rtb.admeld.' + callbackId;
    };

    rtb.createOpenRtbCallback = function(view_id, price_floor, ask_price, pixel) {
        var start = new Date().getTime(), callback = function (callbackId, json) {
            delete rtb.openrtb[callbackId];
            delete rtb.openrtb.callbacks[callbackId];
            delete rtb.waiting_sources[view_id]['openrtb'];

            var rtb_creative = json['ad'], beacons = json['pixels'], bid = json['bid'];

            //Clean-up JSON object to reduce debug traffic
            delete json['ad'];
            delete json['pixels'];

            rtb.bids[view_id].push({
                'bid': bid,
                'source' : 'openrtb',
                'provider': json['source'],
                'price_floor' : price_floor,
                'ask_price' : ask_price,
                'pixel' : pixel, 
                'show_creative' : function(result_bid) {
                    if (typeof(result_bid) !== 'undefined') {
                        rtb_creative = rtb_creative.replace("${AUCTION_PRICE}", result_bid);
                    }
                    document.write(rtb_creative);
                },
                'show_footer' : function(result_bid) {
	                	if (beacons) {
	                				if (typeof(result_bid) !== 'undefined') {
	                					document.write(beacons.replace("${AUCTION_PRICE}", result_bid));
	                				} else {
	                					document.write(beacons);
	                				}
	                    }
                },
                'json' : json,
                'time' : new Date().getTime() - start,
                'status': bid > 0 ? 'ok' : 'nobid'
            });

            rtb.finishBidding(view_id);
        };

        var callbackId = 'callback_' + rtb.openrtb.callbacksCount;
        rtb.openrtb.callbacksCount += 1;
        rtb.openrtb.callbacks[callbackId] = callback;
        rtb.openrtb[callbackId] = function(json) {
            rtb.openrtb.callbacks[callbackId](callbackId, json);
        };
        return 'window.adjuggler.rtb.openrtb.' + callbackId;
    };

    rtb.createPubMaticCallback = function(view_id, price_floor, ask_price, pixel) {
        var start = new Date().getTime(), callback = function (callbackId, json) {
            delete rtb.pubmatic[callbackId];
            delete rtb.pubmatic.callbacks[callbackId];
            delete rtb.waiting_sources[view_id]['pubmatic'];

            var k, rtb_creative = json['PubMatic_Bid']['creative_tag'], tracking_url = json['PubMatic_Bid']['tracking_url'], bid = json['PubMatic_Bid']['ecpm'], error = json['PubMatic_Bid']['error_code'];

            if (typeof(error) !== 'undefined') {
                rtb.bids[view_id].push({
                    'source' : 'pubmatic',
                    'json' : json,
                    'time' : new Date().getTime() - start,
                    'status': 'error'
                });
                rtb.finishBidding(view_id);
                return;
            }

            if (tracking_url) {
                rtb_creative = rtb_creative + '<' + 'scri' + 'pt type="text/javascript" src="' + tracking_url + '"></' + 'scri' + 'pt>';
            }

            //Clean-up JSON object to reduce debug traffic
            for (k in json['PubMatic_Bid']) {
                if (k != 'ecpm' && json['PubMatic_Bid'].hasOwnProperty(k)) {
                    delete json['PubMatic_Bid'][k];
                }
            }

            for (k in json) {
                if (k != 'PubMatic_Bid' && json.hasOwnProperty(k)) {
                    delete json[k];
                }
            }

            rtb.bids[view_id].push({
                'bid' : bid,
                'source' : 'pubmatic',
                'price_floor' : price_floor,
                'ask_price' : ask_price,
                'pixel' : pixel, 
                'show_creative' : function(result_bid) {
                    document.write(rtb_creative);
                },
                'show_footer' : function(result_bid) {
                	if (!pubmatic_pixels_saved) {
                		document.write('<iframe src="http://ads.pubmatic.com/AdServer/js/syncuppixels.html" style="width:0;height:0;display:block;" frameborder="0"></iframe>');
                		pubmatic_pixels_saved = true;
                	}
                },
                'json' : json,
                'time' : new Date().getTime() - start,
                'status': bid > 0 ? 'ok' : 'nobid'
            });

            rtb.finishBidding(view_id);
        };

        var rid = rtb.pubmatic.callbacksCount, callbackId = 'callback_' + rid;
        rtb.pubmatic.callbacksCount += 1;
        rtb.pubmatic.callbacks[callbackId] = callback;

        return rid;
    };

    rtb.calcAskPrice = function(aj_ecpm, request) {
    	var ask_price = Math.max(request['price_floor'], aj_ecpm);
    	if (ask_price == aj_ecpm) {
    		ask_price = ask_price + request['price_floor_offset'];
    		ask_price = Math.round(ask_price*10000)/10000;  //avoid values like 0.020000000001
    	}
    	return ask_price;
    };

    rtb.callAdMeld = function(view_id, aj_ecpm, request) {
        var url = "", ask_price = rtb.calcAskPrice(aj_ecpm, request);
        url += checkServerUrl(rtb.admeld.server_url) + '?' + paramsToUrl(request);
        url += "&floor_price=" + ask_price;
        url += "&callback=" + rtb.createAdMeldCallback(view_id, request['price_floor'], ask_price, request['pixel']);

        writeScript(url);
    };

    rtb.callPubMatic = function(view_id, aj_ecpm, request) {
        var url = "", ask_price = rtb.calcAskPrice(aj_ecpm, request);
        url += checkServerUrl(rtb.pubmatic.server_url) + '?operId=102&rs=2&' + paramsToUrl(request);
        url += '&kadfloor=' + ask_price;
        url += '&rid=' + rtb.createPubMaticCallback(view_id, request['price_floor'], ask_price, request['pixel']);
        url += '&timezone=' + (-((new Date()).getTimezoneOffset() / 60));
        if (screen) {
            url += '&screenResolution=' + screen.width + "x" + screen.height;
        }

        writeScript(url);
    };

    rtb.callOpenRtb = function(view_id, aj_ecpm, request) {
        var url = "",
            ask_price = rtb.calcAskPrice(aj_ecpm, request),
            ajkey = rtb.confirm_banner_url.replace(/.*ajkey=/, "");
        url += checkServerUrl(rtb.openrtb.server_url) + '?' + paramsToUrl(request);
        url += '&tz=' + (new Date()).getTimezoneOffset();
        url += "&ask_price=" + ask_price;
        if (screen) {
            url += '&psr=' + screen.width + "x" + screen.height;
        } else {
            url += '&psr=-1x-1';
        }
        var dt = new Date();
        function pad(num) {
        	return num >= 9 ? "" + num : "0" + num;
        } 
        url += '&ptz=' + (-(dt.getTimezoneOffset() / 60));
        url += '&pts=' + encodeURIComponent(
        		dt.getFullYear() + "-" + pad(dt.getMonth()+1) + "-" + pad(dt.getDate()) +	" " +
        		pad(dt.getHours()) + ":" + pad(dt.getMinutes()) + ":" + pad(dt.getSeconds())
        );
        
        if (ajkey.length <= 200) {
            url += "&ajkey=" + ajkey;
        }
        url += "&callback=" + rtb.createOpenRtbCallback(view_id, request['price_floor'], ask_price, request['pixel']);

        writeScript(url);
    };
    rtb.callAllSources = function (request, show_aj_ad_callback) {
        var i, view_id = String(new Date().getTime()) + '_' + Math.round(Math.random() * 10000), requests = [];

        rtb.above_the_fold[view_id] = true;

        rtb.waiting_sources[view_id] = {};
        rtb.bids[view_id] = [{
            'bid' : request['aj_ecpm'],
            'source' : 'adjuggler',
            'show_creative' : show_aj_ad_callback,
            'show_footer' : function() {}
        }];


        if (request['admeld_request']) {
            rtb.waiting_sources[view_id]['admeld'] = {
                start: new Date().getTime(),
                ask_price: rtb.calcAskPrice(request['aj_ecpm'], request['admeld_request']),
                price_floor: request['admeld_request']['price_floor']
            };
            requests.push(function () {
                rtb.callAdMeld(view_id, request['aj_ecpm'], request['admeld_request']);
            });
        }

        if (request['pubmatic_request']) {
            rtb.waiting_sources[view_id]['pubmatic'] =  {
                start: new Date().getTime(),
                ask_price: rtb.calcAskPrice(request['aj_ecpm'], request['pubmatic_request']),
                price_floor: request['pubmatic_request']['price_floor']
            };
            requests.push(function () {
                rtb.callPubMatic(view_id, request['aj_ecpm'], request['pubmatic_request']);
            });
        }

        if (request['openrtb_request']) {
            rtb.waiting_sources[view_id]['openrtb'] =  {
                start: new Date().getTime(),
                ask_price: rtb.calcAskPrice(request['aj_ecpm'], request['openrtb_request']),
                price_floor: request['openrtb_request']['price_floor']
            };
            requests.push(function () {
                rtb.callOpenRtb(view_id, request['aj_ecpm'], request['openrtb_request']);
            });
        }

        //Shuffle order of requests to avoid priority of one RTB source
        shuffle(requests);

        for (i = 0; i < requests.length; i++) {
            requests[i]();
        }

        document.write('<scr' + 'ipt type="text/javascript" src="' + rtb.script_url + 'verifyrtb.js"></scr' + 'ipt>');
    };

    rtb.detectWindowHeight = function() {
	  if( typeof( window.innerHeight ) == 'number' ) {
		  return window.innerHeight;
	  } else if( document.documentElement && document.documentElement.clientHeight ) {
		  return document.documentElement.clientHeight;
	  } else if( document.body && document.body.clientHeight ) {
		  return document.body.clientHeight;
	  }
	  return 0;
    };

    rtb.confirmImpression = function (source, bids, above_the_fold) {
        var i, j, bid, url = rtb.confirm_banner_url, tags = ['bid', 'price_floor', 'ask_price', 'time', 'status'];

        url += '&rtb_source=' + source;
        url += '&abf=' + above_the_fold;

        for (i = 0; i < bids.length; i++) {
            bid = bids[i];

            for (j = 0; j < tags.length; j++) {
                if (bid[tags[j]]) {
                    url += "&" + bid.source + '.' + tags[j] + '=' + bid[tags[j]];
                }
            }
        }

        for (i = 0; i < bids.length; i++) {
            bid = bids[i];
            if (bid.json) {
                url += '&' + bid.source + '.json=' + serialize(bid.json, null);
            }

            if (bid.source && bid.source == 'openrtb' && bid.provider) {
            	url += '&openrtb.source=' + bid.provider;
            }
        }

        try {
	        // Crop to 2000 symbols for IE6
	        if (url.length > 2000 && navigator.userAgent.toLowerCase().indexOf('msie 6') != -1) {
	        	url = url.slice(0, 2000);
	        }
	        
	        // Crop to 4000 symbols for IE7+ (MSIE) and IE11 (Trident)
	        if (url.length > 4000 && (navigator.userAgent.toLowerCase().indexOf('msie') != -1 || (!!navigator.userAgent.match(/Trident/)) ) ) {
	        	url = url.slice(0, 4000);
	        }
        } catch (e){}

        insertScript(url);
    };

    if (!window.adjuggler) {
        window.adjuggler = {};
    }

    if (!window.adjuggler.rtb) {
        window.adjuggler.rtb = rtb;
        window.processPubMaticBid = rtb.pubmatic.callback;
    }

    /* Since IE doesn't guarantee JS execution order, we need to store this ad until rtb.js was successfully loaded */
    if (window.adjuggler.waiting_ads) {
        var i, ads = window.adjuggler.waiting_ads;
        for (i = 0; i < ads.length; i++) {
            if (ads[i]) {
                ads[i](window.adjuggler.rtb);
                delete ads[i];
            }
        }
    }
})(window);
