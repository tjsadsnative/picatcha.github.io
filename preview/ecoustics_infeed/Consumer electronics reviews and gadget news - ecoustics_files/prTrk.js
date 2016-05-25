// NICK FOX!
// JOE BRUST
// 02/19/16

function prTrk(obj){
	var type,url;
	var noun = (typeof obj.noun === 'undefined') ? '' : '&n=' + obj.noun;
	var target = (typeof obj.target === 'undefined') ? '_blank' : obj.target;
	var impIdShort = (typeof obj.imp !== 'undefined') ? obj.imp : (typeof praui === 'undefined') ? 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' : praui;
	var impId = impIdShort.substr(0, 8) + '-' + impIdShort.substr(8, 4) + '-' + impIdShort.substr(12, 4) + '-' + impIdShort.substr(16, 4) + '-' + impIdShort.substr(20, 12);
	var creativeId = (typeof obj.creativeId !== 'undefined') ? obj.creativeId : (typeof praui === 'undefined') ? 'XXXXXX' : document.getElementById('pradi' + impIdShort).src.split('PRCID=')[1].split('&')[0];
	var panelId = (typeof prup === 'undefined') ? 0 : document.getElementById('prf' + impIdShort) && document.getElementById('prf' + impIdShort).innerHTML.length > 0 ? prup : 0;
	
	if(typeof obj.panelId !== 'undefined'){
		panelId = obj.panelId;
	}
	var isSecure = function(url){
		if(typeof coProtocol !== 'undefined'){
			if(coProtocol == 'https://speed-s'){
				url = url.replace('http://','https://');
			}
		}else if(document.location.protocol == 'https:'){
			url = url.replace('http://','https://');
		}
		return url;
	}
	
	var getUrl = function(url){
		
		if(typeof sizmekPixel !== 'undefined'){
			url = sizmekPixel + url;
		}
	
		if(typeof(prEncodingLevel) != 'number'){
			prEncodingLevel = 0;
		}
	
		switch(prEncodingLevel){
			
			case 0: // completely decode sent url, break it apart, and then iteratively encode each step
				var _urls = url.split('http');
				var _url = '';
				_urls.splice(0, 1);
				for(var i = 0; i < _urls.length; i++){
					_urls[i] = 'http' + _urls[i];
					for(var j = 0; j < 10; j++){
						try{_url = decodeURIComponent(_url);}catch(err){}
					}
					for(var k = 0; k < i + 1; k++){
						_urls[i] = encodeURIComponent(_urls[i]);
					}
					_url += _urls[i];
				}
				return _url;
			break;
	
			case 1: // completely decode sent url and then encode the entire url once
				var _url = url;
				for(var i = 0; i < 10; i++){
					try{_url = decodeURIComponent(_url);}catch(err){}
				}
				return encodeURIComponent(_url);
			break;
			
			case 3: // completely decode sent url, single encode the url between '&tpc=' and '&rurl=', then single encode the entire url
				var _url = url;
				var urlSplit = _url.split('%');
				var urlSplitLength = urlSplit.length;
				_url = urlSplit[0];

				for(i = 1; i < urlSplitLength; i++){ // start at 1 since split will display before %
					val1 = urlSplit[i].slice(0,1);
					val2 = urlSplit[i].slice(1,2);
					if(!val1.match(/[0-7]/) || !val2.match(/[0-9A-F]/i)){ // check to see if the 2 characters after '%' are not valid URI encodes
						//not a valid URI encode, swap in custom '__PERCENT__'
						urlSplit[i] = '__PERCENT__' + urlSplit[i];
					}else{
						//valid URI encode 
						urlSplit[i] = '%' + urlSplit[i];
					}
					_url += urlSplit[i]; // concatinate splits back 
				}

				for(var i = 0; i < 10; i++){
					try{_url = decodeURIComponent(_url);}catch(err){}
				}

				if(_url.indexOf('&tpc=') > -1){ // if present
					var encodeUrl = _url.match("&tpc=(.*)&rurl=");
					_url = _url.replace(encodeUrl[1], encodeURIComponent(encodeUrl[1]))
					_url = encodeURIComponent(_url);
					_url = _url.replace('__PERCENT__', '%2525');
				}else{ // otherwise use encoding level 1
					_url = encodeURIComponent(_url);
					_url = _url.replace('__PERCENT__', '%2525');
				}
				return _url;
			break;
			
			case 4: // completely decode sent url and then encode 'bs.serving-sys.com' url once and the remainder of the url twice
				var _url = url;
				for(var i = 0; i < 10; i++){
					try{_url = decodeURIComponent(_url);}catch(err){}
				}
				if(_url.indexOf('bs.serving-sys.com') > -1){ // if present
					var urlSplit = _url.split('&rtu=');
					var doubleUrl = _url = encodeURIComponent(urlSplit[0]) + '%26rtu%3D' +  encodeURIComponent(encodeURIComponent(urlSplit[1]));
				}
				return _url;
			break;
			
			case 5: // do magic
				var _url = url;
				for(var i = 0; i < 10; i++){
					try{_url = decodeURIComponent(_url);}catch(err){}
				}
				if(_url.indexOf('bs.serving-sys.com') > -1){ // if present
					var urlSplit = _url.split('&rtu=');
					var doubleUrl = _url = encodeURIComponent(urlSplit[0]) + '%26rtu%3D' +  encodeURIComponent(encodeURIComponent(urlSplit[1]));
				}
				var encodeUrl = _url.match("%2526tpc%253D(.*)adurl%253D");
				if(encodeUrl != null){
					_url = _url.replace(encodeUrl[1], encodeURIComponent(encodeUrl[1]))
				}
				return _url;
			break;
			default:
				return url;
			break;
			
		}
	}
	
	if(typeof obj.id === 'undefined'){
		if(window.console && window.console.log){
			console.error('Pointrol Trk Error:', 'Missing parameter or non json object sent');
		}
		return;	
	}
	
	if(typeof praui === 'undefined'){
		if(window.console && window.console.log){
			console.log('Pointrol Trk:', JSON.stringify(obj));
		}
		if(typeof obj.url !== 'undefined'){
			url = 'http://clk.pointroll.com/pc/?p=XXXXXX&c=' + obj.id + '&i=' + impId + noun + '&clickurl=' + getUrl(obj.url);
			window.open(url,target);
		}
		return;
	}
	
	if(panelId == 0){ 
		if(typeof obj.url === 'undefined'){
			// banner activity
			type = 'ba';
			url = 'http://t.pointroll.com/pointroll/track/?q=' + type + '&u=0&p=' + eval('prpi' + impIdShort) + '&o=1&i=' + impId + noun + '&c=' + obj.id  + '&r=' + Math.random();
		}else{
			//banner click
			type = 'bc';
			url = 'http://clk.pointroll.com/' + type + '/?a=' + creativeId + '&c=' + obj.id + '&i=' + impId + noun + '&clickurl=' + getUrl(obj.url);
		}
	}else{
		if(typeof obj.url === 'undefined'){
			// panel activity
			type = 'pa';
			url = 'http://t.pointroll.com/pointroll/track/?q=' + type + '&o=' + panelId + '&i=' + impId + noun + '&p=' + eval('prpi' + impIdShort) + '&u=' + panelId + '&c=' + obj.id + '&r=' + Math.random();
		}else{
			// panel click
			type = 'pc';
			url = 'http://clk.pointroll.com/' + type + '/?p=' + panelId + '&c=' + obj.id + '&i=' + impId + noun + '&clickurl=' + getUrl(obj.url);
		}
	}
	
	if(typeof prInteract === 'function'){
		prInteract(type, 1, impIdShort, obj.id);
	}
	
	if(typeof obj.url === 'undefined'){
		(new Image()).src = isSecure(url);
		if(typeof obj.phone !== 'undefined'){
			if(typeof mraid === 'undefined'){
				window.setTimeout(function(){window.open('tel:+' + obj.phone);},100);
			}else{
				window.setTimeout(function(){mraid.open('tel:+' + obj.phone);},100);
			}
		}
	}else{
		if(typeof mraid === 'undefined'){
			window.open(url,target);
		}else{
			mraid.open(url);
		}
	}
}