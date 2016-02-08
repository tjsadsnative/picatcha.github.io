
if(SbSocialWidget == undefined) {
	
	var SbSocialWidget = {
		options : {
			cmsPath : 'http://dev.publishers.springboardplatform.com'
		},
		init : function(optionsR) {
			
			//Merge options, we NEED TO CLONE!!!!
			var options = SbSocialWidget.clone(SbSocialWidget.options);
			//Merge - extend default options
			options = SbSocialWidget.extend(options, optionsR);
			
			SbSocialWidget.options = options;
			
			//Load overlay if it is not loaded
			var scripts = document.getElementsByTagName("script");
			var loadOverlay = true;
			for (var i=0; i<scripts.length; i++) {
				if (scripts[i].src && scripts[i].src.indexOf('js/overlay') != -1) {
					loadOverlay = false;
					break;
				}
			}
			if(loadOverlay) {
				var env = '';
				//match environment
				var envTestRegex = /http:\/\/([a-z0-9]+)\.cms/i;
				if ( envTestRegex.test(optionsR.cmsPath) ) {
					var patt = new RegExp(/http:\/\/([a-z0-9]+)\.cms/i);
					var res = patt.exec(optionsR.cmsPath);
					
					env = res[1] + '.';
				}
				
				var oHead = document.getElementsByTagName('head')[0];
				var oScript = document.createElement('script');
				oScript.type = 'text/javascript';
				oScript.src = 'http://'+env+'cdn.springboardplatform.com/js/overlay';
				oHead.appendChild(oScript);
			}
			
			this.makeCall();
		},
		clone : function(obj) {
			if (!obj || typeof obj != 'object') { return obj; }
			var temp = new obj.constructor();	
			for (var key in obj) {	
				if (obj.hasOwnProperty(key)) {
					temp[key] = SbSocialWidget.clone(obj[key]);
				}
			}
			return temp;
		},
		extend : function(destination, source) {
		
			for(var prop in source) {
				if(typeof destination[prop] == 'object') {
					destination[prop] = SbSocialWidget.extend(destination[prop], source[prop])
				} else {
					destination[prop] = source[prop]; 
				}
			}
			return destination;
		},
		makeCall : function() {
			//http://dev.publishers.springboardplatform.com/cpv/social_widget/261/test165
			var request = this.options.cmsPath+'/cpv/social_widget/'+this.options.partnerId+'/'+this.options.widgetId;
			
			var head = document.getElementsByTagName("head").item(0);
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", request);
			script.async = true;
			head.appendChild(script);
		}
	};
}

function fillSocialWidget() {
	document.getElementById('social_widget').innerHTML = SbSocialWidget.options.embed;
}

function fillContentDir(JSONFeed) {
	//console.dir(JSONFeed);
	
	if(JSONFeed.collapse) {
		document.getElementById('social_widget').style.width = '0px';
		document.getElementById('social_widget').style.height = '0px';
	} else if(JSONFeed.snapshot) {
		//document.getElementById('social_widget').innerHTML = '<img src="'+JSONFeed.snapshot+'" style="cursor: pointer;" onclick="fillSocialWidget()" width="'+SbSocialWidget.options.width+'" height="'+SbSocialWidget.options.height+'" />';
		document.getElementById('social_widget').insertAdjacentHTML('beforeend', '<img src="'+JSONFeed.snapshot+'" style="cursor: pointer;" onclick="fillSocialWidget()" width="'+SbSocialWidget.options.width+'" height="'+SbSocialWidget.options.height+'" />');
		SbSocialWidget.options.embed = JSONFeed.embed;
	} else {
		//document.getElementById('social_widget').innerHTML = JSONFeed.embed;
		document.getElementById('social_widget').insertAdjacentHTML('beforeend', JSONFeed.embed);
	}
}

function handleAd(site_id, width, height, widget_id, env) {
	
	//check if widget is in iframe
	if (top === self) {
		//alert('Out of iframe');
		var s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		//s.value = 'alert(1)';
		s.src = 'http://'+env+'cdn.springboardplatform.com/js/overlay';
		document.getElementById('social_widget').appendChild(s);
		
		s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		s.src = 'http://'+env+'cdn.springboardplatform.com/storage/js/swfobject/swfobject.js';
		document.getElementById('social_widget').appendChild(s);
		
		
		SbSocialWidget.init({
			partnerId : site_id,
			width : width,
			height : height,
			widgetId : widget_id,
			cmsPath : 'http://'+env+'cms.springboardplatform.com'
		});
	} else {
		var friendly_iframe = false;
		//alert('In iframe');
		//alert(typeof inDapIF);
		if(typeof inDapIF != 'undefined') {
			friendly_iframe = true;
		} else {
			//alert(typeof top.location.host);
			if(top.location.host == self.location.host) {
				friendly_iframe = true;
			}
			
		}
		if(friendly_iframe) {
			var f = window.frameElement; //get iframe element
			var g=f.parentNode;  //get iframe parent node
			
			var s = document.createElement('script');
			s.setAttribute('type', 'text/javascript');
			//s.value = 'alert(1)';
			s.src = 'http://'+env+'cdn.springboardplatform.com/storage/js/social_widget/sw.js';
			g.appendChild(s);
			
			var s = document.createElement('script');
			s.setAttribute('type', 'text/javascript');
			//s.value = 'alert(1)';
			s.src = 'http://'+env+'cdn.springboardplatform.com/js/overlay';
			g.appendChild(s);
			
			s = document.createElement('script');
			s.setAttribute('type', 'text/javascript');
			s.src = 'http://'+env+'cdn.springboardplatform.com/storage/js/swfobject/swfobject.js';
			g.appendChild(s);
			
			s = document.createElement('div');
			s.id = 'social_widget';
			s.style.width = width+'px';
			s.style.height = height+'px';
			s.style.position = 'relative';
			s.style.overflow = 'hidden';
			g.appendChild(s);
			
			f.style.width = 0+"px";
			f.style.height = 0+"px"
			
			//alert('Vreme');
			
			var s = document.createElement('script');
			s.setAttribute('type', 'text/javascript');
			//s.innerText = 'SbSocialWidget.init({partnerId : '+site_id+', width : '+width+', height : '+height+', widgetId : \''+widget_id+'\', cmsPath : \'http://'+env+'cms.springboardplatform.com\'	});';
			
			var innerJs = 'overInterval = setInterval(function(){';
			innerJs += 'if(typeof SbSocialWidget == "undefined") {} else { clearInterval(overInterval); SbSocialWidget.init({partnerId : '+site_id+', width : '+width+', height : '+height+', widgetId : \''+widget_id+'\', cmsPath : \'http://'+env+'cms.springboardplatform.com\'	});  } }';
			innerJs += ', 200);'
			
				
			//s.innerText = innerJs;
			s.innerHTML = innerJs;
			//s.innerText = 'if(typeof SbSocialWidget == \'undefined\') {alert(\'Nema\')}';
			
			//clearInterval(overInterval);
			//overInterval = setInterval(function(){slideUp(eid, endBottomValue, bottomStart);}, timeStep);
			//s.innerText = 'alert(1)';
			g.appendChild(s);
		}
	}
}

function slideDownSocialWidget() {
	
	var currentValue = parseInt(document.getElementById('social_widget').style.height);
	
	if(currentValue + 20 > SbSocialWidget.options.height) {
		currentValue = SbSocialWidget.options.height;
		clearInterval(slideDownInterval);
	} else {
		currentValue = currentValue + 20;
	}
	
	document.getElementById('social_widget').style.height = currentValue + 'px';
}

function setCookie(cname, cvalue) {
	var d = new Date();
	d.setTime( d.getTime() + (60*60*1000) );
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
	
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

function checkCookie(cname) {
	var username = getCookie(cname);
	if (username != "") {
		return true;
	} else {
		return false;
	}
}

function showWidget() {
	
	var showWidget = false;
	//check SbSearchEngineCookie
	if( checkCookie('SbSearchEngineCookie') ) {
		showWidget = true;
	} else {
		//console.log('document.referrer = ' + document.referrer);
		
		var pattRef = /(^https?:\/\/(www\.)?(r\.search\.)?(google|bing|yahoo)\.)/;
		if (pattRef.test(document.referrer)) {
			
			showWidget = true;
			
			//set cookie
			setCookie('SbSearchEngineCookie', 'search-engine');
		}
	}
	
	return showWidget;
}

respondToPostMessage = function(e) {
	
	if( e.data.indexOf("showCollapsed") != -1 ) {
		
		var social_widget_div = document.getElementById('social_widget');
		//if(social_widget_div.style.height == '0px') {
			
			var msgElements = e.data.split("|");
			if(msgElements[1] == 'true') {
				social_widget_div.style.height = SbSocialWidget.options.height + 'px';
				social_widget_div.style.left = '0px';
				//slideDownInterval = setInterval(function(){slideDownSocialWidget();}, 20);
				
			} else {
				/*social_widget_div.style.width = '0px';*/
				if(social_widget_div.style.left == '-10000px') { //SET ONLY WHEN Start collapsed if no pre-roll available is CHECKED
					social_widget_div.style.height = '0px';
				}
				/*social_widget_div.innerHTML = '';*/
			}
		//}
		
	}
}

if (window['addEventListener']) {
	window.addEventListener('message', respondToPostMessage, false);
} else {
    window.attachEvent('onmessage', respondToPostMessage);
}