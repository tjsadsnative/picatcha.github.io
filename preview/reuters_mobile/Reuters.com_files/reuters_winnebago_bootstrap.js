window.TR3= {};
TR3.logEnabled = 1;
TR3.logs       = [];
TR3.intervals  = {};
TR3.tagEvents  = {};
TR3.sync       = {};
TR3.tags       = {};
TR3.counters   = {};
TR3.data       = {};
TR3.Ads        = {};
TR3.data.adslots = [];

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

TR3.extractStoryChannel = function() {
    var m = document.getElementsByTagName('meta');
    for (i=0; i<m.length; i++) {
        if(m[i].name == "DCSext.ContentChannel"){
            return m[i].content;
        }
    }
    return "undefined";
};

TR3.extractArticleID = function() {
    var m = document.getElementsByTagName('meta');
    for (i=0; i<m.length; i++) {
        if(m[i].name == "DCSext.articleID"){
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
var adStoryChannel = TR3.extractStoryChannel();
var adArticleID = TR3.extractArticleID();
var adVBCVal = TR3.extractVBC();
var adDartZone = TR3.extractDartZone();

var adParams ="";

if(typeof(adTest)!='undefined'){
	adParams += ";adstest=" + adTest;
}

if(typeof(adArticleID)!='undefined'){
	adParams += ";articleID=" + adArticleID;
}

if(typeof(adSymbol)!='undefined'){
	adParams += ";symbol=" + adSymbol;
}

if(typeof(adVBCVal)!='undefined'){
	adParams += ";vbc=" + adVBCVal;
}

if(typeof(adStoryChannel)!='undefined'){
	adParams += ";storychannel=" +adStoryChannel;
}// Revenue Science Begin

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

}//  Lotame Begin

 var latome_sids ={"us.mobile.reuters.com":5155,"uk.mobile.reuters.com":5156,"in.mobile.reuters.com":5157,"mobile.reuters.com":5155};

 if (!!latome_sids[window.location.hostname] )  {
    (function() {
         var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
         s.async = false;
         s.id = "LOTCC_" + latome_sids[window.location.hostname];
         s.src = document.location.protocol + "//tags.crwdcntrl.net/c/" + latome_sids[window.location.hostname] + "/cc_af.js";
         el.parentNode.insertBefore(s, el);
         console.info("completed:lotame for " + s.src);
     })();

 }

    //  Comscore Begin
    (function() {
           var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
           s.async = true;
           _comscore = window._comscore || [];
          _comscore.push({ c1: "2", c2: "6035630" }); 
           s.src = "http://b.scorecardresearch.com/beacon.js";

           el.parentNode.insertBefore(s, el);
           console.info("completed:Comscore added  " + s.src);
      })();

   // GPT Begin

 var gptadslots=[];
                (function(){
                                var useSSL = 'https:' == document.location.protocol;
                                var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
                                document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
                })();



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
                                if (t[k].indexOf("=") > 0)
                                   gptadslots[pDivId].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                else
                                   console.error("Targeting string "+ pTarget + " in Error for " + pDivId);
                                
                              
                        } else console.error("Targeting string "+ pTarget + " in Error." + pDivId);
                        
						googletag.pubads().collapseEmptyDivs();
                    
						//googletag.pubads().enableSingleRequest();
                        googletag.pubads().enableSyncRendering();
                        googletag.enableServices();
                        
                        //display ad
                        googletag.display(pDivId); 
                    })
					
				}
				
				console.log("Display Ad via GPT: Site:" + pSite + " Target:" + pTarget + " Div Slot:" + pDivId );
                    
};


function placeNativeAd(){ 
$('#div_gpt_native').insertAfter('.wire-module .article:eq(0)'); 
        
}

function placeMPU(){ 
$('#div_gpt_mpu').insertAfter('.wire-module .article:eq(0)'); 
 displayAd("div_gpt_mpu", TR3.extractDartZone(), [[300, 250],[320,50]], "type=mpu" + adParams);
}

console.info("GPT.js LOADED");
