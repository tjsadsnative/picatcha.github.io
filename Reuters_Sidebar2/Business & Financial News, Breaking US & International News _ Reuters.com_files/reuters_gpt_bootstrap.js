

TR3.log = function(msgs) {
    TR3.logs.push([new Date()].concat(Array.prototype.slice.call(arguments)));
    if (TR3.logEnabled === 1) {
        return window.console && console.log &&
            Function.apply.call(console.log, console, arguments);
    }
};

TR3.getURLQueryParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

TR3.extractDartZone = function() {
    var m = document.getElementsByTagName('meta');
    for (i=0; i<m.length; i++) {
        if(m[i].name == "DCSext.DartZone"){
            return m[i].content;
        }
    }
    return "undefined";
};


TR3.extractVBC = function() {
    var m = document.getElementsByTagName('meta');
    for (i=0; i<m.length; i++) {
        if(m[i].name == "DCSext.vbcParam"){
            return m[i].content;
        }
    }
    return "undefined";
};


var adSymbol = TR3.getURLQueryParameterByName("symbol");
var adTest = TR3.getURLQueryParameterByName("adstest");
var adVBCVal = TR3.extractVBC();
var adDartZone = TR3.extractDartZone();
var adParams ="";
var adParams2 ="";

if (TR3.data.admantx !=="" && !!TR3.data.admantx){
	adParams += ";admant=" + TR3.data.admantx;
	adParams2 += ";admant=" + TR3.data.admantx;
}

if(typeof(adTest)!='undefined'){
	adParams += ";adstest=" + adTest;
	adParams2 += ";adstest=" + adTest;
}


if(typeof(adSymbol)!='undefined'){
	adParams += ";symbol=" + adSymbol;
	adParams2 += ";symbol=" + adSymbol;
}

if(typeof(adVBCVal)!='undefined'){
	adParams += ";vbc=" + adVBCVal;
}


admantx_callback  = function (data) {
    TR3.data.admantx = "";
    if (data && data.admants && data.status == "OK") {
        TR3.log("admantx_callback :" + data.status);
        for (var i = 0; i < data.admants.length; i++) {
            if (i>0) TR3.data.admantx += ",";
            TR3.data.admantx += data.admants[i];
        } 
        TR3.log("admantx_callback TR3.data.admantx:" + TR3.data.admantx);
    }
};

var flag = !!(TR3.checkHosts(["www.reuters.com", "uk.reuters.com"])&& (!!TR3.data.contentType));

if (TR3.checkHosts(["www.reuters.com", "uk.reuters.com"])&& (!!TR3.data.contentType)){ 
     if ( TR3.checkHosts(["www.reuters.com"]) ){
       var adxsvcReq = '//async01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"' + encodeURIComponent(document.location.href) + '"}');   
}
else{
      var adxsvcReq = '//async01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"' + encodeURIComponent(document.location.href) + '"}');
}

    var adxsvcSE = document.createElement('script');
    adxsvcSE.id = "adxsvcSE_2";
    adxsvcSE.type = 'text/javascript';
    adxsvcSE.async = true;
    adxsvcSE.src = adxsvcReq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(adxsvcSE, s);
}
var rsc_src= 'http://js.revsci.net/gateway/gw.js?csid=I07714&auto=t';

var rsc = document.createElement('script');
    rsc.id = "rsc";
    rsc.type = 'text/javascript';
    rsc.async = true;
    rsc.src = rsc_src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(rsc, s);


  TR3.log("Revenue Science is loaded via bootstrap.");

var run_revsci = function() {
  I07714.DM_cat(TR3.data.adZone + " > " + TR3.data.dfpZone);
  I07714.DM_tag();

}// GPT Begin

var gptadslots=[];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
var node =document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(gads, node);
})();

// function to gather ad variables and define ad slot

displayAd = function(pDivId, pSite, pSize, pTarget) {
       		pDivId = pDivId.trim();
                
        	if (!!pDivId){
            	googletag.cmd.push(function() {
                        
            	//define slot
            	gptadslots[pDivId] = googletag.defineSlot("/4735792/" + pSite, pSize, pDivId).addService(googletag.pubads());
		  
				//add the targetting
            	if (!!pTarget) {
                  	var t = pTarget.split(";");
                  	for (var k = 0; k<t.length; k++)
                         	if (t[k].indexOf("=") > 0){
                            	gptadslots[pDivId].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                      		}
                            else
                              	console.error("Targeting string index of = "+ pTarget + " in Error for " + pDivId);
                                
                 	} else console.error("Targeting string not target "+ pTarget + " in Error." + pDivId);
				})
			}
			
			//googletag.cmd.push(function() { googletag.display(pDivId); });
				
			console.log("Display Ad via GPT: Site:" + pSite + " Target:" + pTarget + " Div Slot:" + pDivId );               
};


displayAd_sync = function(pDivId, pSite, pSize, pTarget) {
       		pDivId = pDivId.trim();
                
        	if (!!pDivId){
            	
               googletag.cmd.push(function() {
                        
            	//Adslot 1 declaration
				gptadslots[1]= googletag.defineSlot('/4735792/'+dz_final,  pSize,'div_gpt_lb').addService(googletag.pubads());

                 console.log("Display Ad via GPT: Site:" + pSite + " Target:" + pTarget + " Div Slot:" + pDivId + " Sync" );  
  
				//Adslot 2 declaration
				gptadslots[2]= googletag.defineSlot('/4735792/'+dz_final,  pSize,'div_gpt_mpu').addService(googletag.pubads());

                 console.log("Display Ad via GPT: Site:" + pSite + " Target:" + pTarget + " Div Slot:" + pDivId + " Sync");  
		  
				//add the targetting
            	if (!!pTarget) {
                  	var t = pTarget.split(";");
                  	for (var k = 0; k<t.length; k++)
                         	if (t[k].indexOf("=") > 0){
                            	gptadslots[1].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                  gptadslots[2].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                      		}
                            else
                              	console.error("Targeting string index of = "+ pTarget + " in Error for " + pDivId);
                                
                 	} 

                googletag.pubads().enableSingleRequest();
				googletag.pubads().enableAsyncRendering();
				googletag.enableServices();
				})
			}
			googletag.cmd.push(function() { googletag.display(pDivId); });		             
};


if(window.console){
console.info("GPT.js LOADED");
}
