
// <script type="text/javascript">

	(function () {

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();	var supportFlashPlayerVersion = true;
	var playerType = 'sPlayer';
	if (typeof(swfobject) != 'undefined' && !swfobject.hasFlashPlayerVersion("1"))
	{
		supportFlashPlayerVersion = false;
	}
/**
 * Created by tamirg on 12/04/15.
 */
function SekindoBus()
{
    this.callbacksArray = new Array();
}

SekindoBus.prototype.callback = function callback(busItm)
{
    for(var i = 0; i < this.callbacksArray.length; i++)
    {
        if(busItm.callbackID == this.callbacksArray[i].callbackID && busItm.callbackFunc == this.callbacksArray[i].callbackFunc)
        {
            return;
        }
    }
    this.callbacksArray.push(busItm);
};

SekindoBus.prototype.trigger = function trigger(busNote)
{
    for(var i = 0; i < this.callbacksArray.length; i++)
    {
        if(busNote.callbackID == this.callbacksArray[i].callbackID)
        {
            this.callbacksArray[i].callbackFunc(busNote.content);
        }
    }
};

SekindoBus.prototype.triggerNote = function triggerNote(callbackID, content)
{
    var busNote = new SekindoBusNote();
    busNote.callbackID = callbackID;
    busNote.content = content;
    this.trigger(busNote);
};

SekindoBus.prototype.addCallBack = function addCallBack(callbackID, callbackFunc)
{
    var busItm = new SekindoBusItm();
    busItm.callbackID = callbackID;
    busItm.callbackFunc = callbackFunc;
    this.callback(busItm);
    return busItm;
};

SekindoBus.prototype.removeCallBack = function removeCallBack(callbackID, callbackFunc)
{

    for(var i = 0; i < this.callbacksArray.length; i++)
    {
        if(callbackID == this.callbacksArray[i].callbackID && callbackFunc == this.callbacksArray[i].callbackFunc)
        {
            this.callbacksArray.splice(i, 1);
        }
    }

};
SekindoBus.prototype.removeBusItm = function removeBusItm(busItm)
{

    for(var i = 0; i < this.callbacksArray.length; i++)
    {


        if(busItm == this.callbacksArray[i])
        {
            this.callbacksArray.splice(i, 1);
        }
    }

};
function SekindoBusItm()
{
    this.callbackID = null;
    this.callbackFunc = null;
}

function SekindoBusNote()
{
    this.callbackID = null;
    this.content = null;
}

/**
 * Created by tamirg on 30/03/15.
 */
function SekindoAdsManager(uniqueID, config, containerDiv)
{
    var ref = this;
    this.uniqueID = uniqueID;
    this.config = config;
    this.containerDiv = containerDiv;
    this.videoElement = null;
    this.currAd = null;
    this.progressArray = new Array();
    this.videoDuration = null;
    this.timeOutObj = null;
    this.adsProccessPaused = !(this.config.isAutoPlay == true || this.config.isAutoPlay == 'true');
    this.adsProgram = null;
    this.adsProgramIndex = -1;
    this.progressStatus = 'init';
    this.adVideoStatus = 'init';// null, init, start, complete
    this.adProccessStatus = 'null';
    this.loadVastOnce = true;
    this.reportVideoEvent = null;
    this.config.impressionTimeout = 0;
    this.config.killTime = 0;
    this.adType = null;
    if(!this.config.waterFall || this.config.waterFall.length == 0)return;

    window['sekindoBus'+this.uniqueID].addCallBack('onPlay', function(val){ref.onUserEvent('onPlay');});
    window['sekindoBus'+this.uniqueID].addCallBack('onPause', function(val){ref.onUserEvent('onPause');});
    window['sekindoBus'+this.uniqueID].addCallBack('onMute', function(val){ref.onUserEvent('onMute',val);});
    window['sekindoBus'+this.uniqueID].addCallBack('vpaidEvent', function(val){ref.onVpaidEvent(val);});

    if(!this.adsProccessPaused)this.loadAdsProgram();

}

SekindoAdsManager.prototype.loadAdsProgram = function loadAdsProgram()
{
    this.adsXmlhttp = new XMLHttpRequest();
    var ref = this;

    this.adsXmlhttp.addEventListener("load", transferComplete, false);
    this.adsXmlhttp.addEventListener("error", transferFailed, false);
    this.adsXmlhttp.addEventListener("abort", transferCanceled, false);
    function transferComplete(evt)
    {
        if(ref.adsProccessPaused)return;
        try
        {
            var json = JSON.parse(ref.adsXmlhttp.responseText);
            ref.adsProgram = json.ads;
            ref.config.impressionTimeout = json.impressionTimeout?json.impressionTimeout:0;
            if(json.loadVastOnce != undefined && (json.loadVastOnce == 'false' || json.loadVastOnce == false))
            {
                ref.loadVastOnce = false;
            }
            ref.adsProgramIndex = -1;
            ref.queryVasts();
        }
        catch(e)
        {
            setTimeout(function(){ref.loadAdsProgram();}, 30000);
        }
    }

    function transferFailed(evt)
    {
        if(ref.adsProccessPaused)return;
        ref.loadAdsProgram();
    }

    function transferCanceled(evt)
    {
        if(ref.adsProccessPaused)return;
        ref.loadAdsProgram();
    }
    var cBuster = new Date().getTime().toString();
    var waterFallUrl = this.config.waterFall.replace('${CBUSTER}', cBuster);
    this.adsXmlhttp.open("GET", waterFallUrl, true);
    this.adsXmlhttp.send();
};

SekindoAdsManager.prototype.reloadAds = function reloadAds()
{
    if(this.loadVastOnce && this.adsProgram)
    {
        this.adsProgramIndex = -1;
        this.queryVasts();
    }
    else
    {
        this.loadAdsProgram();
    }
};

SekindoAdsManager.prototype.queryVasts = function queryVasts()
{
    var ref = this;
    this.adProccessStatus = 'start';
    clearTimeout(ref.timeOutObj);
    this.timeOutObj = null;
    this.currAd = null;
    this.adsProgramIndex++;
    if(this.adsProgram.length <= this.adsProgramIndex)
    {
        var timeout = this.config.adsTimeGap*1000;
        this.timeOutObj = setTimeout(function()
        {
           ref.reloadAds();
        }, timeout);

        return;
    }

    var vastUrl = this.adsProgram[this.adsProgramIndex].vastURL;
    this.config.killTime = this.adsProgram[this.adsProgramIndex].killTime?this.adsProgram[this.adsProgramIndex].killTime:0;
    var timeStamp = (new Date().getTime().toString());
    vastUrl = vastUrl.replace('[timestamp]',timeStamp);
    vastUrl = vastUrl.replace('[CACHEBUSTING]',timeStamp);
    window.sekindoConfig = this.config;
    SekindoQueryVAST(vastUrl, function(ads){ref.adsLoaded(ads);});
    ref.trackSekindoEvents('onAttempt');//onAttempt onRequest impression clickThrough
    ref.trackSekindoEvents('onRequest');//onAttempt onRequest impression clickThrough
};

SekindoAdsManager.prototype.adsLoaded = function adsLoaded(ads)
{
    //Avoid loading new ad when one is in proccess.
    if(this.currAd)return;

    //Avoid loading ad when player is paused
    if(this.adsProccessPaused)
    {
        this.adProccessStatus = 'complete';
        return;
    }

    //no ads available - lets try again.
    if(ads == null)
    {
        if(!this.currAd)this.queryVasts();
        return;
    }

    this.currAd = ads.getAd(false);
    if(!this.currAd.linear)
    {
        this.currAd = null;
        this.queryVasts();
        return;
    }

    this.currAd.sentImpression = false;
    this.progressArray = new Array();
    for(var i = 0; i < this.currAd.getTrackingPoints().length; i++)
    {
        var evt = this.currAd.getTrackingPoints()[i];
        if(evt.event.indexOf('progress') != -1)
        {
            this.progressArray.push(evt);
        }
    }

    var medias = this.currAd.linear.getAllMedias();

    //no ads in xml - lets try again
    if(!medias.length || medias.length == 0)
    {
        this.queryVasts();
        return;
    }

    var selectedMedia = null;
    var selectedVPAID = null;
    for(var i = 0; i <medias.length; i++ )
    {
        if(medias[i].type.indexOf('mp4') != -1)
        {
            selectedMedia = medias[i];
            break;
        }
        else  if(medias[i].type.indexOf('javascript') != -1)
        {
            this.config.isFlashVpaid = false;
            selectedVPAID = medias[i];
            break;
        }
        else  if(medias[i].type.indexOf('shockwave') != -1)
        {
            this.config.isFlashVpaid = true;
            selectedVPAID = medias[i];
            break;
        }
    }

    if(selectedMedia != null && selectedMedia.src != undefined && validURL(selectedMedia.src))
    {
        this.loadLinearContent(selectedMedia.src);
    }
     else if(selectedVPAID != null && selectedVPAID.src != undefined && validURL(selectedVPAID.src))
    {
        this.loadVPAIDContent(selectedVPAID.src);
    }
    else
    {
        this.queryVasts();
        return;
    }

    function validURL(str)
    {
        var regex = /^https?:/;
        if(!regex .test(str))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
};

SekindoAdsManager.prototype.loadVPAIDContent = function loadVPAIDContent(url)
{
    if(this.rapper)this.destructVpaidRapper();
    this.adType = 'vpaid';
    var creativeData = this.currAd.linear.adParameters;
    var environmentVars = [];
    this.generateVpaidSlot();
    environmentVars.slot = this.vpaidSlot;
    this.generateVideoElement();
    environmentVars.videoSlot = this.videoElement;

    this.rapper = new SekindoVPAIDWrapper(this.config, url, creativeData, environmentVars, this.uniqueID);
    this.videoElement.contetnType = 'vpaidSrc';
}

SekindoAdsManager.prototype.destructVpaidRapper = function destructVpaidRapper()
{
    if(!this.rapper)return;
    this.rapper.destruct();
    this.rapper = null;
}


SekindoAdsManager.prototype.loadLinearContent = function loadLinearContent(url)
{
    var ref = this;
    this.adType = 'linear';
    this.currSrc = unescape(url);
    this.generateVpaidSlot();
    this.generateVideoElement();
    this.addListeners();

    this.videoElement.src = this.currSrc;
    this.videoElement.play();
    this.videoElement.contetnType = 'adSrc';
};
SekindoAdsManager.prototype.generateVpaidSlot = function generateVpaidSlot()
{
    var ref = this;
    if(this.vpaidSlot && this.vpaidSlot.parentNode)
    {
        this.disposeVpaidSlot();
    }
    this.vpaidSlot = this.config.iframeDoc.createElement("div");
    this.vpaidSlot.style.width = this.config.width+'px';//"320px";
    this.vpaidSlot.style.height = this.config.height+'px';//"240px";
    this.vpaidSlot.style.marginLeft = 'auto';//Center div in explorer
    this.vpaidSlot.style.marginRight = 'auto';//Center div in explorer
    this.vpaidSlot.style.zIndex = -3;
    this.vpaidSlot.style.position = "absolute";
    this.vpaidSlot.style.left ="0px";
    this.vpaidSlot.style.top = "0px";
    this.vpaidSlot.style.overflow = 'hidden';
    this.containerDiv.appendChild(this.vpaidSlot);
};

SekindoAdsManager.prototype.generateVideoElement = function generateVideoElement()
{
    var ref = this;
    if(this.videoElement && this.videoElement.parentNode)
    {
        this.disposeVideoElement();
    }
    if(this.config.isNative)
    {
        this.videoElement = this.config.iframeDoc.createElement('video');
    }
    else
    {
        this.videoElement = new SekindoVideoObj(this.uniqueID, this.config, this.config.audioObj);
    }
    this.videoElement.width = this.config.width;
    this.videoElement.height = this.config.height;
    this.videoElement.style.top = "0px";
    this.videoElement.muted = this.config.isMuted;
    this.videoElement.volume = this.config.volume;
    this.vpaidSlot.appendChild(this.videoElement);
    this.videoElement.addEventListener('volumechange', function func4(val){ref.reportVideoEvent(ref.videoElement, val)});
    this.videoElement.addEventListener('playing', function func5(val){ref.reportVideoEvent(ref.videoElement, val)});
    this.videoElement.addEventListener('pause', function func6(val){ref.reportVideoEvent(ref.videoElement, val)});
};

SekindoAdsManager.prototype.disposeVpaidSlot = function disposeVpaidSlot()
{
    if(!this.vpaidSlot)return;
    this.vpaidSlot.parentNode.removeChild(this.vpaidSlot);
    this.vpaidSlot = null;
};

SekindoAdsManager.prototype.disposeVideoElement = function disposeVideoElement()
{
    if(!this.videoElement) return;
    this.removeListeners();
    this.videoElement.parentNode.removeChild(this.videoElement);
    if(this.videoElement.destruct)this.videoElement.destruct();
    delete this.videoElement;
    this.videoElement = null;
};

SekindoAdsManager.prototype.addListeners = function addListeners()
{
    var ref = this;

    this.videoElement.addEventListener('play', function func1(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('ended', function func2(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('click', function func3(val){ref.onVideoEvent(val)});
};

SekindoAdsManager.prototype.removeListeners = function removeListeners()
{
    var ref = this;
    if(!this.videoElement)return;
    this.videoElement.removeEventListener('play', function func1(val){ref.onVideoEvent(val)});
    this.videoElement.removeEventListener('ended', function func2(val){ref.onVideoEvent(val)});
    this.videoElement.removeEventListener('click', function func3(val){ref.onVideoEvent(val)});
    this.videoElement.removeEventListener('volumechange', function func4(val){ref.reportVideoEvent(ref.videoElement, val)});
    this.videoElement.removeEventListener('playing', function func5(val){ref.reportVideoEvent(ref.videoElement, val)});
    this.videoElement.removeEventListener('pause', function func6(val){ref.reportVideoEvent(ref.videoElement, val)});
};


SekindoAdsManager.prototype.onVideoEvent = function onVideoEvent(val)
{
    var ref = this;
    if( this.adType == 'vpaid')return;
    switch(val.type)
    {
        case 'play':
            window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', 'Ad by Sekindo');
            window['sekindoBus'+ref.uniqueID].triggerNote('adStarted', 'linear');
            this.currAd.track("creativeView");//This also reports impression
            this.currAd.track('start');
            this.trackSekindoEvents('adStart');
            this.trackSekindoEvents('impression');//onAttempt onRequest impression clickThrough
            this.constructProgressEvents();
            this.adVideoStatus = 'start';// null, init, start, complete
            this.progressStatus = 'start';
            this.videoElement.parentNode.style.display = 'block';
            this.vpaidSlot.style.zIndex = 3;
            break;
        case 'ended':
            this.videoElement.parentNode.style.display = 'none';
            this.videoElement.contetnType = 'null';
            window['sekindoBus'+ref.uniqueID].triggerNote('adCompleted');
            this.timeOutObj = setTimeout(function(){ref.reloadAds(); ref.timeOutObj = null;},ref.config.adsTimeGap*1000);
            this.currAd.track('complete');
            this.trackSekindoEvents('complete');//onAttempt onRequest impression clickThrough
            this.adVideoStatus = 'null';// null, init, start, complete
            this.adProccessStatus = 'complete';
            this.disposeVideoElement();
            this.currAd = null;
            break;

        case 'click':
            this.currAd.track('click');
            this.trackSekindoEvents('clickThrough');//onAttempt onRequest impression clickThrough
            var url = this.currAd.linear.getClickThrough();
            window.open(url, "_blank");
            break;
    }
    this.trackSekindoEvents(val.type);
};

SekindoAdsManager.prototype.onVpaidEvent = function onVpaidEvent(val)
{

    var ref = this;
    var type = (typeof val == 'string')?val:val.type;
    switch(type)
    {
        case 'onAdLoaded':
            this.videoElement.contetnType = 'vpaidSrc';
            break;
        case 'onAdPaused':

            break;
        case 'onAdPlaying':

            break;
        case 'onAdUserAcceptInvitation':

            break;
        case 'onAdUserMinimize':

            break;
        case 'onAdUserClose':
            this.onAdComplete();
            break;
        case 'onAdError':
            this.disposeVideoElement();
            this.disposeVpaidSlot();
            this.queryVasts();
            this.onAdComplete();
            break;
        case 'onAdSkippableStateChange':

            break;
        case 'onAdExpandedChange':

            break;
        case 'onAdSizeChange':

            break;
        case 'onAdDurationChange':

            break;
        case 'onAdRemainingTimeChange':
            break;
        case 'onAdImpression':
            this.currAd.track("creativeView");//This also reports impression
            this.trackSekindoEvents('impression');//onAttempt onRequest impression clickThrough
            window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', '');
            this.vpaidSlot.style.zIndex = 3;
            if(this.config.isMuted)
            {
                this.rapper.setAdVolume(0);
            }
            else
            {
                this.rapper.setAdVolume(ref.config.volume);
            }
            break;
        case 'onAdClickThru':
            this.currAd.track('click');
            this.trackSekindoEvents('clickThrough');//onAttempt onRequest impression clickThrough
            break;
        case 'onAdInteraction':

            break;
        case 'onAdVideoStart':
            this.currAd.track('start');
            this.trackSekindoEvents('adStart');
            this.videoElement.parentNode.style.display = 'block';
            this.adVideoStatus = 'start';// null, init, start, complete
            window['sekindoBus'+ref.uniqueID].triggerNote('adStarted','vpaid');
            this.videoElement.style.top = (this.config.height - Number(this.videoElement.offsetHeight))/2+'px';
            break;
        case 'onAdVideoFirstQuartile':
            this.currAd.track('firstQuartile');
            break;
        case 'onAdVideoMidpoint':
            this.currAd.track('midpoint');
            break;
        case 'onAdVideoThirdQuartile':
            this.currAd.track('thirdQuartile');
            break;
        case 'onAdVideoComplete':
            this.trackSekindoEvents('complete');
            this.currAd.track('complete');
            break;
        case 'onAdLinearChange':

            break;
        case 'onStartAd':
            if(this.config.isMuted && !this.videoElement.muted)this.videoElement.muted = true;
            window['sekindoBus'+ref.uniqueID].triggerNote('adStarted', 'vpaid');
            break;
        case 'onStopAd':

            this.onAdComplete();
            break;
        case 'onSkipAd':
            this.onAdComplete();
            break;
        case 'onAdVolumeChange':

            if(val.val == 0)
            {
                this.currAd.track('mute');
            }
            else
            {
                this.currAd.track('unmute');
            }
            break;
    }
};

SekindoAdsManager.prototype.onAdComplete = function onAdComplete()
{
    var ref = this;
    if(this.adProccessStatus == 'complete')return;

    this.disposeVideoElement();
    this.disposeVpaidSlot();

    this.timeOutObj = setTimeout(function(){ref.reloadAds(); ref.timeOutObj = null;},ref.config.adsTimeGap*1000);

    this.adVideoStatus = 'null';// null, init, start, complete
    this.adProccessStatus = 'complete';
    window['sekindoBus'+ref.uniqueID].triggerNote('adCompleted');
    this.currAd = null;
    if(this.rapper)this.destructVpaidRapper();
};

SekindoAdsManager.prototype.onUserEvent = function onUserEvent(type, val)
{
    var ref = this;
    switch(type)
    {
        case 'onPlay':
            if(this.adsProccessPaused && !this.timeOutObj && this.adVideoStatus != 'start')
            {
                this.reloadAds();
            }
            this.adsProccessPaused = false;
            break;
        case 'onPause':
            if(this.timeOutObj)
            {
                clearTimeout(ref.timeOutObj);
                this.timeOutObj = null;
            }
            this.adsProccessPaused = true;

            break;
        case 'onMute':
            if(this.currAd && this.adVideoStatus == 'start')// null, init, start, complete
            {
                if(val)
                {
                    this.currAd.track('mute');
                }
                else
                {
                    this.currAd.track('unmute');
                }
            }
            break;
    }
};

SekindoAdsManager.prototype.constructProgressEvents = function constructProgressEvents()
{
    var ref = this;
    this.videoElement.addEventListener('timeupdate', function func(val){ref.onVideoProgressEvent(val)});
    if(this.progressArray.length == 0)return;

    for(var i = 0; i < this.progressArray.length; i++)
    {
        var evt = this.progressArray[i].event;
        var evtTime = null;
        if(evt.indexOf('%') != -1)
        {
            var pct = (evt.substr(9));
            pct = Number(pct.substr(0, pct.length - 1));
            evtTime = this.videoElement.duration*pct/100;
        }
        else
        {
            var ts = evt.substr(9);
            var tmpArr = ts.split(':');
            evtTime = Number(tmpArr[0])*60*60 + Number(tmpArr[1])*60 + Number(tmpArr[2]);

        }
        this.progressArray[i].eventTime = evtTime;
    }
};

SekindoAdsManager.prototype.onVideoProgressEvent = function onVideoProgressEvent(val)
{
    if(this.videoElement.src != this.currSrc)return;
    window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', 'Ad by Sekindo '+ (Math.round(this.videoElement.duration)-Math.round(this.videoElement.currentTime)));
    for(var i = 0; i < this.progressArray.length; i++)
    {
        if(this.progressArray[i].eventTime && this.progressArray[i].eventTime < this.videoElement.currentTime)
        {
            this.progressArray[i].eventTime = null;
            this.currAd.track( this.progressArray[i].event);
        }
    }
    this.reportProgressStatus();
};

SekindoAdsManager.prototype.reportProgressStatus = function reportProgressStatus()
{
    switch(this.progressStatus)
    {
        case 'inited':

            break;
        case 'start':
            if(this.videoElement.currentTime > this.videoElement.duration/4)
            {
                this.progressStatus = 'firstQuartile';
                this.currAd.track('firstQuartile');
            }
            break;
        case 'firstQuartile':
            if(this.videoElement.currentTime > this.videoElement.duration/2)
            {
                this.progressStatus = 'midpoint';
                this.currAd.track('midpoint');
            }
            break;
        case 'midpoint':
            if(this.videoElement.currentTime > this.videoElement.duration/4*3)
            {
                this.progressStatus = 'thirdQuartile';
                this.currAd.track('thirdQuartile');
            }
            break;
        case 'thirdQuartile':
            if(this.videoElement.currentTime > this.videoElement.duration)
            {
                this.progressStatus = 'complete';

            }
            break;
    }
};

SekindoAdsManager.prototype.trackSekindoEvents = function trackSekindoEvents(val)//onAttempt onRequest impression clickThrough
{
    if(!this.adsProgram || !this.adsProgram[this.adsProgramIndex] || !this.adsProgram[this.adsProgramIndex].trackingEvents)return;
    var tmpArr = this.adsProgram[this.adsProgramIndex].trackingEvents[val];
    if (!tmpArr) return;
    if(typeof tmpArr === 'string')
    {
        SekindoUtils.firePixel(tmpArr);
    }
    else
    {
        for (var i = 0; i < tmpArr.length; i++)
        {
            SekindoUtils.firePixel(tmpArr[i]);
        }
    }
};

/**
 * Created by tamirg on 06/04/15.
 */
function SekindoVideoInterface(videoDiv)
{
    var ref = this;
    this.videoDiv = videoDiv;
    this.audioObj = null;
    this.jpgSeqObj = null;
    this.videoObj = null;
    this.videoDiv.audioTracks = new AudioTrackList();
    this.videoDiv.buffered = new TimeRanges();
    this.videoDiv.controller = new MediaController();
    this.videoDiv.textTracks = new TextTrackList();
    this.videoDiv.videoTracks = new VideoTrackList();
    this.eventListeners = new Array();
    this._autoPlay = true;

    //autoplay
    this.videoDiv.__defineGetter__("autoplay", function(){
        return ref._autoPlay;
    });
    this.videoDiv.__defineSetter__("autoplay", function(val){
        ref._autoPlay = val;
        ref.videoObj.autoplay = val;
    });

    //buffered
    this.videoDiv.__defineGetter__("buffered", function(){
        var tr = new TimeRanges();
        tr.endTime = ref.jpgSeqObj.buffered;
        return tr;
    });


    //controls
    this.videoDiv.__defineGetter__("controls", function(){
        return false;
    });
    this.videoDiv.__defineSetter__("controls", function(val){

    });


    //currentSrc
    this.videoDiv.__defineGetter__("currentSrc", function(){
        return ref.videoSrc;
    });
    this.videoDiv.__defineSetter__("currentSrc", function(val){

    });

    //currentTime
    this.videoDiv.__defineGetter__("currentTime", function(){
        return (ref.jpgSeqObj)?Math.min(ref.jpgSeqObj.currTime, (ref.jpgSeqObj.config.totalFrames/ref.jpgSeqObj.config.frameRate)):0;
    });
    this.videoDiv.__defineSetter__("currentTime", function(val){
        if(ref.jpgSeqObj)ref.jpgSeqObj.currentTime = val;
    });


    //defaultMuted
    this.videoDiv.__defineGetter__("defaultMuted", function(){
        return true;
    });
    this.videoDiv.__defineSetter__("defaultMuted", function(val){

    });


    //defaultPlaybackRate
    this.videoDiv.__defineGetter__("defaultPlaybackRate", function(){
        return true;
    });
    this.videoDiv.__defineSetter__("defaultPlaybackRate", function(val){

    });


    //duration
    this.videoDiv.__defineGetter__("duration", function(){
        return (ref.jpgSeqObj.config.totalFrames/ref.jpgSeqObj.config.frameRate) || 'NaN';
    });


    //ended
    this.videoDiv.__defineGetter__("ended", function(){
        return (ref.jpgSeqObj)?ref.jpgSeqObj.ended:true;
    });


    //error
    this.videoDiv.__defineGetter__("error", function(){
        return 1;//'no error';//MediaError
    });


    //height
    this.videoDiv.__defineGetter__("height", function(){
        return ref.jpgSeqObj.config.height;
    });
    this.videoDiv.__defineSetter__("height", function(val){
        //TODO set height
    });

    //loop
    this.videoDiv.__defineGetter__("loop", function(){
        return (ref.jpgSeqObj)?ref.jpgSeqObj.loop:false;
    });
    this.videoDiv.__defineSetter__("loop", function(val){
        if(ref.jpgSeqObj)ref.jpgSeqObj.loop = val;
    });

    //mediaGroup
    this.videoDiv.__defineGetter__("mediaGroup", function(){
        return 'Media Group';
    });
    this.videoDiv.__defineSetter__("mediaGroup", function(val){

    });


    //muted
    this.videoDiv.__defineGetter__("muted", function(){
        if(!ref.jpgSeqObj || ref.videoDiv.style.display == 'none')return true;
        return ref.audioObj.audioElement.isMuted;
    });
    this.videoDiv.__defineSetter__("muted", function(val){
        if(ref.audioObj)ref.audioObj.muted = val;
        if(!ref.jpgSeqObj || ref.videoDiv.style.display == 'none')return;
        ref.audioObj.audioElement.muted = val;
        ref.audioObj.audioElement.isMuted = val;

        if(!val)
        {
            if(!ref.jpgSeqObj.isPaused)
            {
                if(!ref.videoObj.config.soundEnabledByUser)return;
                ref.audioObj.play();
            }
        }
        else
        {
            if(!ref.jpgSeqObj.isPaused) {
                ref.audioObj.pause();
            }
        }
    });


    //networkState
    this.videoDiv.__defineGetter__("networkState", function(){
        return 0;
    });


    //paused
    this.videoDiv.__defineGetter__("paused", function(){
        if(!ref.jpgSeqObj)return true;
        return ref.jpgSeqObj.isPaused;
    });
    this.videoDiv.__defineSetter__("paused", function(val){
        if(!ref.jpgSeqObj)return;
        ref.jpgSeqObj.pause();
    });


    //playbackRate
    this.videoDiv.__defineGetter__("playbackRate", function(){
        return 1.0;
    });
    this.videoDiv.__defineSetter__("playbackRate", function(val){

    });

    //played
    this.videoDiv.__defineGetter__("played", function(){
        return new TimeRanges();
    });

    //poster
    this.videoDiv.__defineGetter__("poster", function(){
        return 'poster url';
    });
    this.videoDiv.__defineSetter__("poster", function(val){

    });

    //preload
    this.videoDiv.__defineGetter__("preload", function(){
        return 'auto';//|metadata|none';
    });
    this.videoDiv.__defineSetter__("preload", function(val){

    });

    //readyState
    this.videoDiv.__defineGetter__("readyState", function(){
        return 4;
    });


    //seekable
    this.videoDiv.__defineGetter__("seekable", function(){
        return new TimeRanges();
    });
    this.videoDiv.__defineSetter__("seekable", function(val){

    });


    //seeking
    this.videoDiv.__defineGetter__("seeking", function(){
        return false;
    });

    //src
    this.videoDiv.__defineGetter__("src", function(){
        return ref.videoSrc;
    });
    this.videoDiv.__defineSetter__("src", function(val){
        ref.videoSrc = val;
        ref.videoObj.loadSrc(val);
    });

    //startDate
    this.videoDiv.__defineGetter__("startDate", function(){
        return 0;
    });

    //volume
    this.videoDiv.__defineGetter__("volume", function(){
        return ref.audioObj.audioElement.volume;

    });
    this.videoDiv.__defineSetter__("volume", function(val){
        if(!ref.jpgSeqObj || ref.audioObj.audioLock)return;
        if(!ref.jpgSeqObj.isPaused && ref.audioObj.muted)
        {
           if(!ref.videoObj.config.soundEnabledByUser)return;
            ref.audioObj.play();
        }
        ref.audioObj.muted = false;
        ref.audioObj.audioElement.muted = false;
        ref.audioObj.audioElement.isMuted = false;
        ref.audioObj.audioElement.volume = val;

    });

    //width
    this.videoDiv.__defineGetter__("width", function(){
        return 100;//TODO important
    });
    this.videoDiv.__defineSetter__("width", function(val){
        //TODO important
    });




    this.videoDiv.addTextTrack = function  addTextTrack(kind,label,language)
    {
        var textTrack = new TextTrack();
        textTrack.kind = kind;
        textTrack.label = label;
        textTrack.language = language;
        this.textTracks.push(textTrack);
        return textTrack;
    };

    this.videoDiv.canPlayType = function  canPlayType(type)
    {
        var result = '';
        if(type == 'video/mp4; codecs="avc1.4D401E, mp4a.40.2"')
        {
            result = 'probably';
        }
        else if(type.indexOf('video/mp4') != -1 )
        {
            result = 'maybe';
        }
        return result;
    };

    this.videoDiv.load = function  load()
    {

    };

    this.videoDiv.play = function play()
    {
        if(!ref.jpgSeqObj)return;
        ref.jpgSeqObj.play();
    };

    this.videoDiv.pause = function pause()
    {
        if(!ref.jpgSeqObj)return;
        ref.jpgSeqObj.pause();
    };




    this.videoDiv.addEventListener = function addEventListener(type, callbackFunc)
    {
        for(var i = 0; i < ref.eventListeners.length; i++)
        {
            try {
                if(ref.eventListeners[i].type == type && ref.eventListeners[i].callbackFunc == callbackFunc) return;
            }catch(e){};
        }
        ref.eventListeners.push({type:type,callbackFunc:callbackFunc});
    };

    this.videoDiv.removeEventListener = function removeEventListener(type, callbackFunc)
    {
        if(!ref.eventListeners)return;
        for(var i = 0; i < ref.eventListeners.length; i++) {
            try {

                if (ref.eventListeners[i].type == type && ref.eventListeners[i].callbackFunc == callbackFunc) ref.eventListeners[i] = undefined;
            }catch(e){};
        }
    };

    this.videoDiv.dispatchEvent = function dispatchEvent(type, val)
    {
        if(ref.eventListeners)
        {
            var length = ref.eventListeners.length;
            for(var i = 0; i < length; i++)
            {
                if(ref.eventListeners && ref.eventListeners[i] && ref.eventListeners[i].type && ref.eventListeners[i].type == type)
                {
                    ref.eventListeners[i].callbackFunc({type:type, val:val});
                }
            }
        }

    };

    this.attributeSetted = false;
    this.videoDiv.setAttribute = function setAttribute(type, val)
    {
        if(type == 'src' && !ref.attributeSetted)
        {
            ref.videoSrc = val;
            ref.videoObj.loadSrc(val);

            //this is for avoiding multiple videos added
            ref.attributeSetted = true;
            setTimeout(function(){ref.attributeSetted = false},1000)
        }
    }

    this.videoDiv.destruct = function()
    {
        if(ref.videoObj)ref.videoObj.destruct();
    }
}

function AudioTrackList()
{
    this.length = null;
}

AudioTrackList.prototype.getTrackById = function  getTrackById(id)
{

};

function AudioTrack()
{

}


function TimeRanges()
{
    this.length = 1;
    this.endTime = 0;
    this.start = function(index)
    {
        return 0;
    };

    this.end = function(index)
    {
        return this.endTime;
    };
}

TimeRanges.prototype.start = function  start(index)
{

};

TimeRanges.prototype.end = function  end(index)
{

};

function MediaController()
{
    this.buffered; //- get the buffered ranges of the video
    this.seekable; //- get the seekable ranges of the video
    this.duration; //- get the duration of the video
    this.currentTime; //- get or set the current playback position of the video
    this.paused; //- check if the video is paused
    this.played; //- check if the video has been played
    this.defaultPlaybackRate; //- get or set the default playback rate of the video
    this.playbackRate; //- get or set the current playback rate of the video
    this.volume; //- get or set the volume of the video
    this.muted; //- get or set if the video is muted
}
MediaController.prototype.play = function  play()
{
    this.jpgSeqObj.play();
};
MediaController.prototype.pause = function  pause()
{
    this.jpgSeqObj.pause();
};



TextTrackList = Array;

TextTrack = function()
{
    this.kind;// - get the type of the text track (can be: "subtitles", "caption", "descriptions", "chapters", or "metadata")
    this.label;// - get the label of the text track
    this.language;// - get the language of the text track
    this.mode;// - get or set if the track is active ("disabled"|"hidden"|"showing")
    this.cues;// - get a list of cues as a TextTrackCueList object
    this.activeCues;// - get the currently active text track cues as a TextTrackCueList object
    this.addCue = function(cue){};// - add a cue to the list of cues
    this.removeCue = function(cue){};// - remove a cue from the list of cues

};

VideoTrackList = Array;

VideoTrackList.prototype.getTrackById = function getTrackById(id)
{
    return new VideoTrack();
};

VideoTrack  = function()
{

    this.id;// - get the id of the video track
    this.kind;// - get the type of the video track (can be: "alternative", "captions", "main", "sign", "subtitles", "commentary", or "" (empty string))
    this.label;// - get the label of the video track
    this.language;// - get the language of the video track
    this.selected;// - get or set if the track is active (true|false)

};

/* jshint loopfunc:true,sub:true */
// TODO: timecodeTo/FromString should not be on VASTCreative - useful elsewhere
/**
 * exports
 */
var VASTAds, VASTAd, VASTLinear;

/**
 * Asynchronously fetches the given URL, parses the returned content as XML and
 * passes the resulting DOMDocument to onSuccess. If an error occurs, onFailure
 * is called with details of the error as parameters.
 *
 * @param {string} url URL to fetch
 * @param {*} identifier Will be passed to the onSuccess and onFailure callbacks
 * @param {function(Document, *)} onSuccess Callback for success
 * @param {function()} onFailure Callback for failure. First parameter is the
 *   cause of the error, which is either an exception, or the XmlHttpRequest
 *   object if the response was not parsed as XML. The second parameter is the
 *   identifier.
 */
function SekindoFetchXML(url, identifier, onSuccess, onFailure)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState === 4)
        {
            if (request.status === 200)
            {
                if (request.responseXML !== null)
                {
                    onSuccess(request.responseXML, identifier);
                }
                else if (request.responseText !== null)
                {
                    var str = request.responseText;
                    str = str.trim();
                    var xml = StringtoXML(str);
                    onSuccess(xml, identifier);
                }
                else
                {
                    onFailure(request, identifier);
                }
            }
            else
            {
                onFailure(request, identifier);
            }
        }
    };

    function StringtoXML(text)
    {
        if (window.ActiveXObject)
        {
            var doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.async = 'false';
            doc.loadXML(text);
        }
        else
        {
            var parser = new DOMParser();
            var doc = parser.parseFromString(text, 'text/xml');
        }
        return doc;
    }

    var allowCredentials = false;
    var whiteListArray = ['spotxchange.com',
        'btrll.com',
        'stickyadstv.com',
        'adaptv.advertising.com',
        'lkqd.net'
    ]
    for (var i = 0; i < whiteListArray.length; i++)
    {
        var whiteBoy = whiteListArray[i];
        if (url.indexOf(whiteBoy) != -1)
        {
            allowCredentials = true;
            break;
        }
    }
    request.open("GET", url, true);
    if (allowCredentials) request.withCredentials = true;
    request.send(null);
}

/**
 * Queries the given VAST endpoint for ads and calls the given function when the
 * ads have been loaded, giving the corresponding VASTAds object
 *
 * @param {string} endpoint The VAST endpoint URL
 * @param {function(?VASTAds)} onFetched Function to call when ads fetched or
 *   null if the request to the endpoint failed
 * @param {?VASTAd} parentAd The ad containing the results from this query
 */
function SekindoQueryVAST(endpoint, onFetched, parentAd)
{
    SekindoFetchXML(endpoint, null, function(doc)
        {
            try
            {
                new SekindoVASTAds(doc, onFetched, parentAd);
            }
            catch (e)
            {
                onFetched(null);
            }
        },
        function(e)
        {
            onFetched(null);
        });
}

/**
 * Extracts tracking events from the given XML fragment
 *
 * @constructor
 * @param {Element} root XML node that contains <TrackingEvents>
 * @param {VASTAd} [ad] The ad holding whatever element has Tracking Events.
 *   This is provided so that "creativeView" will also automatically track to an
 *   ad impression.
 */
function SekindoTrackingEvents(root, ad)
{
    this.events = {};
    this.ad = ad;

    if (root === null)
    {
        return;
    }

    if (root.tagName !== "TrackingEvents")
    {
        root = root.getElementsByTagName("TrackingEvents");
        if (root.length !== 1)
        {
            return;
        }

        root = root.item(0);
    }

    var tracks = root.getElementsByTagName("Tracking");
    for (var i = 0; i < tracks.length; i++)
    {
        var e = tracks[i].getAttribute("event");
        if (!e)
        {
            continue;
        }

        var offset = null;
        if (e === "progress")
        {
            offset = tracks[i].getAttribute("offset");
            e += "-" + offset;
        }

        this.events[e] = this.events[e] || [];

        var ev = {
            "url": tracks[i].textContent.replace(/\s/g, ""),
            "offset": offset,
            "event": e
        };
        this.events[e].push(ev);
    }
}

/**
 * Returns a new, but identical TrackingEvents object
 *
 * @param {VASTAd} ad The to associate the new copy with
 */
SekindoTrackingEvents.prototype.copy = function(ad)
{
    var n = Object.create(SekindoTrackingEvents.prototype);
    n.events = {};
    for (var e in this.events)
    {
        if (this.events.hasOwnProperty(e))
        {
            n.events[e] = [].concat(this.events[e]);
        }
    }
    n.ad = ad;
    return n;
};


/**
 * Sends a GET request to the given URL
 *
 * @param {string} url The URL to request
 */
SekindoTrackingEvents.prototype.finger = function(url)
{
    var request = new XMLHttpRequest();
    request.open("get", url, true);
    request.send();
};



/**
 * Adds the tracking events found in the given TrackingEvents object to this one
 *
 * @param {TrackingEvents} other TrackingEvents object to merge in
 */
SekindoTrackingEvents.prototype.augment = function(other)
{
    for (var e in other.events)
    {
        if (!other.events.hasOwnProperty(e))
        {
            continue;
        }

        if (!this.events[e])
        {
            this.events[e] = other.events[e];
        }
        else
        {
            this.events[e] = this.events[e].concat(other.events[e]);
        }
    }
};

/**
 * Adds a click tracking URI, since those are often not specified in a
 * <TrackingEvents> wrapper for some reason
 *
 * @param {string} url Tracking URL for clicks
 */
SekindoTrackingEvents.prototype.addClickTracking = function(url)
{
    var ev = {
        "url": url,
        "event": "click",
        "offset": null
    };

    if (!this.events["click"])
    {
        this.events["click"] = [ev];
    }
    else
    {
        this.events["click"].push(ev);
    }
};

/**
 * Returns all events of the given types
 *
 * @param {string[]} evs Event types to look for
 * @returns {object[]} A list of objects each representing one tracked event.
 *   Every object contains an "event" index holding the event name and
 *   optionally an "attributes" index holding a key-value mapping of any
 *   additional attributes for the event (like "offset" for progress events).
 */
SekindoTrackingEvents.prototype.getEventsOfTypes = function(evts)
{
    var ret = [];
    var includeProgress = evts.indexOf('progress') > -1;

    for (var e in this.events)
    {
        if (!this.events.hasOwnProperty(e))
        {
            continue;
        }

        if (evts.indexOf(e) > -1 || (includeProgress && e.indexOf("progress-") === 0))
        {
            ret = ret.concat(this.events[e]);
        }
    }

    return ret;
};

/**
 * Notifies all URIs that have subscribed to the given event type.
 *
 * @param {string} ev Event type to notify
 * @param {object} macros Macros to replace in the tracking URIs
 */
SekindoTrackingEvents.prototype.track = function(ev, macros)
{
    if ((!this.events[ev] || this.events[ev].length === 0) && !ev === "creativeView")
    {
        return;
    }
    var evs = [].concat(this.events[ev]);
    var i;

    for (var m in macros)
    {
        if (!macros.hasOwnProperty(m))
        {
            continue;
        }
        macros["[" + m + "]"] = encodeURIComponent(macros[m]);
        delete macros[m];
    }

    // First creative view for a creative within an ad should count as an impression
    if (ev === "creativeView")
    {
        var ad = this.ad;
        while (ad !== null && !ad.hasSentImpression())
        {
            ad.impressionSent();
            for (i = 0; i < ad.impressions.length; i++)
            {
                evs.push({
                    "url": ad.impressions[i]
                });
            }
            ad = ad.parentAd;
        }
    }

    var that = this;
    for (i = 0; i < evs.length; i++)
    {
        var e = evs[i];

        var url = e ? e["url"] : "";

        // Standard dictates 8 digits of randomness
        var rand = '' + parseInt(Math.random() * 99999999, 10);
        while (rand.length !== 8)
        {
            rand = '0' + rand;
        }
        macros["[CACHEBUSTING]"] = rand;

        for (m in macros)
        {
            if (!macros.hasOwnProperty(m))
            {
                continue;
            }
            url = url.replace(m, macros[m]);
        }

        SekindoUtils.firePixel(url);
    }
};



/**
 * Represents one VAST response which might contain multiple ads
 *
 * Note that this method will also start asynchronously fetching the ads
 * contained in the VAST response. It will stop fetching when it has an
 * acceptable ad for playback
 *
 * @constructor
 * @param {Element} root The root node of the VAST XML response
 * @param {function(?VASTAds)} onAdsAvailable The function to call when at least
 *   one ad is available. When this function is called, it is safe to call
 *   getBestAd(). Will be passed this VASTAds object. Should be null if no
 *   callback is required. The call to getBestAd() might change over time as
 *   more ads become available.
 */
function SekindoVASTAds(root, onAdsAvailable, parentAd)
{
    this.onAdsAvailable = onAdsAvailable;
    var adElements = root.getElementsByTagName('Ad');
    if (adElements.length == 0)
    {
        if (onAdsAvailable)
        {
            // Needs to be reset before calling user function since user function
            // may take long to execute
            var oaf = this.onAdsAvailable;
            this.onAdsAvailable = null;
            oaf.call(this, this);
        }
        return;
    }

    if (!this.ads) this.ads = new Array();

    for (var i = 0; i < adElements.length; i++)
    {
        var ad = new SekindoVASTAd(this, adElements.item(i), parentAd || null);
        if (ad.isEmpty())
        {
            continue;
        }

        this.ads.push(ad);
        if (ad.hasData() && (!ad.hasSequence() || ad.isNumber(1)))
        {
            if (onAdsAvailable)
            {
                // Needs to be reset before calling user function since user function
                // may take long to execute
                var oaf = this.onAdsAvailable;
                this.onAdsAvailable = null;
                oaf.call(this, this);
            }
        }
        else
        {
            var that = this;
            var wrapper = adElements.item(i).getElementsByTagName('Wrapper').item(0);
            var uri = wrapper.getElementsByTagName('VASTAdTagURI');
            if (uri.length === 0)
            {
                // No uri...
                continue;
            }
            uri = uri.item(0).textContent.replace(/\s/g, "");
            var allowPods = wrapper.getAttribute("allowMultipleAds") === "true";

            var onGotFirstAd;
            (function(ad, allowPods, that)
            {
                onGotFirstAd = function(ads)
                {
                    ad.onLoaded(ads, allowPods);
                    if (that.onAdsAvailable)
                    {
                        var oaf = that.onAdsAvailable;
                        that.onAdsAvailable = null;
                        oaf.call(that, that);
                    }
                };
            })(ad, allowPods, that);
            SekindoQueryVAST(uri, onGotFirstAd, ad);
        }
    }
}

/**
 * Returns an ad from the list of ads given by the VAST server
 *
 * Will prefer pods unless allowPods === false
 *
 * Note that the result of a call to this function might change over time as
 * more ads are loaded
 *
 * @param {boolean} allowPods whether to allow ad pods (multiple videos) or not
 * @returns {VASTAd} An ad.
 */
SekindoVASTAds.prototype.getAd = function(allowPods)
{
    var ad = null;
    if (allowPods)
    {
        ad = this.getAdWithSequence(1);
        if (ad && !ad.current().isEmpty())
        {
            return ad.current();
        }
    }

    // So, no pods available.
    // Just pick the first one we find
    // Standard does not dictate how to pick an ad...
    // Theoretically, we could look deep into the Linears to find the ad with the
    // media file that suits the player best, but that seems like overengineering.
    for (var i = 0; i < this.ads.length; i++)
    {
        if (this.ads[i].hasSequence())
        {
            continue;
        }

        if (!this.ads[i].current().isEmpty())
        {
            return this.ads[i].current();
        }
    }
};

/**
 * Returns the ad with the given sequence number
 *
 * @param {number} seq The sequence number of the ad to get
 * @returns {?VASTAd} The ad with the given sequence number or null
 */
SekindoVASTAds.prototype.getAdWithSequence = function(seq)
{
    for (var i = 0; i < this.ads.length; i++)
    {
        if (this.ads[i].isNumber(seq))
        {
            return this.ads[i];
        }
    }

    return null;
};

/**
 * Represents a single VAST ad
 *
 * Beware, beyond lies dragons and pits of fire.
 *
 * TODO: Add interface for reporting errors, possibly also "rejecting" the ad
 * TODO: Add support for <Icons> as dictated by the standard
 * TODO: Add method for tracking impression without tracking creative view
 *
 * @constructor
 * @param {VASTAds} vast Parent VAST record
 * @param {Element} root The root node of this <Ad> in the VAST XML response
 * @param {function} onAdAvailable The function to call when the ad has been
 *   fully fetched and parsed. Until this function is called, other methods on
 *   this object may return incomplete or inconsistent results.
 */
function SekindoVASTAd(vast, root, parentAd, onAdAvailable)
{
    var ref = this;
    this.vast = vast;
    this.pod = vast;
    this.parentAd = parentAd;
    this.onAdAvailable = onAdAvailable;
    this.sequence = null;
    this.hasContent = true;
    this.loaded = true;
    this.linear = null;
    this.id = root.id;
    // Can that even be done here, or must it be done by interface?
    // Must give interface a way of "rejecting" an ad?

    this.impressions = [];
    this.currentPodAd = this;
    this.sentImpression = false;
    this.properties = {};

    /**
     * Copy over tracking and creatives from parent
     */
    var i, k;
    if (this.parentAd !== null)
    {
        var pa = this.parentAd;

        this.linear = pa.linear ? pa.linear.copy(this) : null;

        for (k in pa.properties)
        {
            if (pa.properties.hasOwnProperty(k))
            {
                this.properties[k] = pa.properties[k];
            }
        }
    }


    if (root.hasAttribute('sequence'))
    {
        this.sequence = parseInt(root.getAttribute('sequence'), 10);
    }

    var inline = root.getElementsByTagName("InLine");
    if (inline.length === 0)
    {
        this.loaded = false;
        inline = root.getElementsByTagName("Wrapper");
        // Note here that VASTAds will automatically fetch wrapped responses for us,
        // so we don't need to do anything special with it here
        if (inline.length === 0)
        {
            this.hasContent = false;
            return;
        }
    }

    inline = inline.item(0);

    var prop = inline.firstChild;
    while (prop !== null)
    {
        if (prop.nodeType === 1)
        {
            switch (prop.tagName)
            {
                case 'Creatives':
                case 'InLine':
                case 'Wrapper':
                case 'Impression':
                case 'VASTAdTagURI':
                case 'Error':
                    break;
                default:
                    this.properties[prop.tagName] = prop.textContent.replace(/^\s*|\s*$/g, "");
            }
        }
        prop = prop.nextSibling;
    }

    // Extract Impressions
    var imps = inline.getElementsByTagName("Impression");
    for (i = 0; i < imps.length; i++)
    {
        this.impressions.push(imps.item(i).textContent.replace(/\s/g, ""));
    }

    /**
     * Time to find our creatives.
     * What makes this a lot more ugly that it should be is that we have to merge
     * up any tracking or creative elements that our wrapper ad created. Not only
     * that, but the spec isn't particularly helpful in how we might figure out
     * which elements to merge, so we have to do some heuristics as well.
     * Oh well, here goes...
     */
    var creatives = inline.getElementsByTagName("Creatives");
    if (creatives.length === 0 )
    {
        return;
    }

    creatives = creatives.item(0).getElementsByTagName("Creative");
    for (i = 0; i < creatives.length; i++)
    {
        var creative = creatives.item(i).firstChild;
        // skip TextNodes
        while (creative !== null && creative.nodeType === 3)
        {
            creative = creative.nextSibling;
        }

        if (creative === null)
        {
            continue;
        }

        var n;
        switch (creative.tagName)
        {
            case "Linear":
                n = new SekindoVASTLinear(this, creative);
                if (this.linear)
                {
                    this.linear.augment(n);
                }
                else
                {
                    this.linear = n;
                }
                break;
        }
    }

    if (this.linear)
    {

        this.trackings = this.linear.tracking;

    }

    if (this.parentAd && this.parentAd.trackings)
    {
        if(this.trackings)
        {
            this.trackings.augment(ref.parentAd.trackings);
        }
        else
        {
            this.trackings = this.parentAd.trackings
        }

    }
}

/**
 * Returns the value of the given tag for this ad
 *
 * See the VAST spec for what tags may be present on an ad
 * Note that ad tags are merged from the parent
 *
 * @param {string} tag The attribute to get
 * @param {*} [nothing] Value to return if tag isn't present. Defaults to
 *   undefined
 * @returns {?string} The value for that tag for this ad or default if unset
 */
SekindoVASTAd.prototype.getTag = function(tag, nothing)
{
    if (!this.properties.hasOwnProperty(tag))
    {
        return nothing;
    }

    return this.properties[tag];
};

/**
 * Should be called the VAST response matching this wrapped ad is parsed and
 * ready.
 *
 * @param {VASTAds} ads VASTAds object wrapped by this ad
 */
SekindoVASTAd.prototype.onLoaded = function(ads, allowPods)
{
    if (ads)
    {
        this.pod = ads;
        this.currentPodAd = ads.getAd(allowPods);

        if (!this.currentPodAd.isEmpty())
        {
            this.loaded = true;
            if (this.onAdAvailable)
            {
                this.onAdAvailable.call(this, this);
            }
        }
    }
    else
    {
        this.loaded = true;
        if (this.onAdAvailable)
        {
            this.onAdAvailable.call(this, this);
        }
    }

};

/**
 * Returns true if impression metrics has been sent for this ad, false otherwise
 *
 * @returns {boolean} true if impression metrics have been sent, false otherwise
 */
SekindoVASTAd.prototype.hasSentImpression = function()
{
    return this.sentImpression;
};

/**
 * Indicate that impression metrics have been sent for this ad
 */
SekindoVASTAd.prototype.impressionSent = function()
{
    this.sentImpression = true;
};

/**
 * Returns the representative ad for this ad.
 *
 * For normal ads, this should just return this ad, for pods, it should return
 * the current ad withing the pod
 *
 * @returns {VASTAd} the representative ad for this ad
 */
SekindoVASTAd.prototype.current = function()
{
    return this.currentPodAd;
};

/**
 * Determines if this ad has the given sequence number
 *
 * @param {number} seq The target sequence number
 * @returns {boolean} true if this ad has the given sequence number, false
 *   otherwise
 */
SekindoVASTAd.prototype.isNumber = function(seq)
{
    return this.sequence === seq;
};

/**
 * Determines if this ad has a sequence number
 *
 * @returns {boolean} true if this ad has a sequence number, false otherwise
 */
SekindoVASTAd.prototype.hasSequence = function()
{
    return this.sequence !== null;
};

/**
 * Determine if this ad has any content (wrapped or inline) or not
 *
 * @returns {boolean} True if this <Ad> contains a <Wrapper> or <InLine>, false
 *   otherwise
 */
SekindoVASTAd.prototype.isEmpty = function()
{
    return !this.hasContent;
};

/**
 * Determines if the current VASTAd has inline data. Returns false if it is a
 * wrapper ad entry that has not yet been loaded.
 *
 * @returns {boolean} True if this ad contains an <InLine>, false otherwise
 */
SekindoVASTAd.prototype.hasData = function()
{
    return this.loaded;
};

/**
 * Returns the next ad after this one (if any)
 *
 * TODO: In VAST 2.0, this should return any next ad, not just based on seq
 *
 * @returns {?VASTAd} The next ad or null
 */
SekindoVASTAd.prototype.getNextAd = function()
{
    if (this.vast !== this.pod)
    {
        this.currentPodAd = this.currentPodAd.getNextAd();
        if (this.currentPod !== null)
        {
            return this.currentPodAd.current();
        }
    }

    if (!this.hasSequence())
    {
        return null;
    }

    return this.vast.getAdWithSequence(this.sequence + 1).current();
};

/**
 * Returns the linear creative element associated with this ad.
 *
 * @returns {?VASTLinear} the linear creative element associated with this ad or
 *   null
 */
SekindoVASTAd.prototype.getLinear = function()
{
    return this.linear;
};


SekindoVASTAd.prototype.track = function(ev, position, asset)
{
    this.trackings.track(ev, {
        "CONTENTPLAYHEAD": this.timecodeToString(position),
        "ASSETURI": asset
    });
};

SekindoVASTAd.prototype.getTrackingPoints = function()
{
    var events = this.trackings?this.trackings.getEventsOfTypes(VAST_LINEAR_TRACKING_POINTS):[];
    var points = [];
    for (var i = 0; i < events.length; i++)
    {
        var point =
        {
            "event": events[i]["event"],
            "offset": null
        };
        switch (events[i]["event"])
        {
            case "start":
                point["offset"] = "start";
                break;
            case "firstQuartile":
                point["offset"] = "25%";
                break;
            case "midpoint":
                point["offset"] = "50%";
                break;
            case "thirdQuartile":
                point["offset"] = "75%";
                break;
            case "complete":
                point["offset"] = "end";
                break;
            default:
                // progress-...
                var offset = events[i]["offset"];
                if (!offset)
                {
                    continue;
                }

                point["offset"] = SekindoVASTCreative.prototype.timecodeFromString(offset);
        }
        points.push(point);
    }

    return points;
};

SekindoVASTAd.prototype.timecodeToString = function(time)
{
    var hrs = '0' + parseInt(time / 3600, 10);
    var mts = '0' + parseInt((time % 3600) / 60, 10);
    var scs = '0' + time % 60;
    var str = hrs + ':' + mts + ':' + scs;
    return str.replace(/(^|:|\.)0(\d{2})/g, "$1$2");
};

/**
 * A base class for VAST Creative elements
 *
 * TODO: Add support for getting adParameters and duration (for Linears)
 *
 * @param {VASTAd} ad The ad holding this creative
 * @param {Element} root The root node of this creative in the VAST XML
 * @constructor
 */
function SekindoVASTCreative(ad, root)
{
    this.root = root;
    this.clickThrough = null;
    this.tracking = new SekindoTrackingEvents(root, ad);
}

/**
 * Should be called whenever a trackable event occurs
 *
 * Trackable events in the VAST stack are:
 *   - click
 *   - creativeView
 *   - start
 *   - firstQuartile
 *   - midpoint
 *   - thirdQuartile
 *   - complete
 *   - mute
 *   - unmute
 *   - pause
 *   - rewind
 *   - resume
 *   - fullscreen
 *   - exitFullscreen
 *   - expand
 *   - collapse
 *   - acceptInvitation
 *   - close
 *   - progress
 *
 * The video player should report these whenever possible, except all the
 * progress events (start, complete, midpoint and *Quartile), which should only
 * be reported for Linear Creative elements according to the positions returned
 * from getTrackingPoints().
 *
 * This function will only do any real work if the reported event actually has a
 * tracking entry in the VAST document
 *
 * @param {string} ev The event type to report
 * @param {number} position The number of seconds into ad playback where the
 *   event occured
 * @param {string} asset The asset URI being played
 */
SekindoVASTCreative.prototype.track = function(ev, position, asset)
{
    this.tracking.track(ev, {
        "CONTENTPLAYHEAD": this.timecodeToString(position),
        "ASSETURI": asset
    });
};

/**
 * Takes a timestamp and returns it as a timecode string HH:MM:SS
 *
 * @param {number} time Timestamp in seconds
 * @returns {string} Timestamp as timecode
 */
SekindoVASTCreative.prototype.timecodeToString = function(time)
{
    var hrs = '0' + parseInt(time / 3600, 10);
    var mts = '0' + parseInt((time % 3600) / 60, 10);
    var scs = '0' + time % 60;
    var str = hrs + ':' + mts + ':' + scs;
    return str.replace(/(^|:|\.)0(\d{2})/g, "$1$2");
};

/**
 * Takes a string and returns it as a number of seconds if it is a timecode,
 * otherwise just returns the string (XX% for example)
 *
 * @param {string} time Timecode
 * @returns {number|string} Timecode in seconds or input string
 */
SekindoVASTCreative.prototype.timecodeFromString = function(time)
{
    if (time.indexOf(':') === -1)
    {
        return time;
    }

    return parseInt(time.substr(0, 2), 10) * 3600 +
        parseInt(time.substr(3, 2), 10) * 60 +
        parseInt(time.substr(6, 2), 10);
};

/**
 * Returns the URL to send the user to if this creative is clicked
 *
 * @returns {?string} URL to send the user to or null if none has been set
 */
SekindoVASTCreative.prototype.getClickThrough = function()
{
    return this.clickThrough;
};

/**
 * Returns the value of the given attribute for the creative
 *
 * See the VAST spec for what attributes may be present on the different types
 * of creatives
 *
 * Handles any timecode attribute as a timecode and converts it to a number
 *
 * @param {string} name The attribute name
 * @param {*} [nothing] Value to return if attribute isn't present. Defaults to
 *   undefined
 * @returns {?string} The value for that attribute for this creative or default
 *   if unset
 */
SekindoVASTCreative.prototype.attribute = function(name, nothing)
{
    // TODO: attributes should be merged when augmented
    if (!this.root.hasAttribute(name))
    {
        return nothing;
    }

    var attr = this.root.getAttribute(name);
    switch (name)
    {
        case 'skipoffset':
        case 'duration':
        case 'offset':
        case 'minSuggestedDuration':
            attr = this.timecodeFromString(attr);
    }
    return attr;
};

/**
 * Parses the VAST creative element at the given root node and returns an object
 * representing that linear creative
 *
 * @constructor
 * @extends VASTCreative
 * @param {VASTAd} ad The ad holding this creative
 * @param {Element} root Root node of creative
 */
function SekindoVASTLinear(ad, root)
{
    SekindoVASTCreative.call(this, ad, root);
    this.mediaFiles = [];
    this.clickThrough = null;
    this.duration = null;
    this.adParameters = null;
    var i;

    var clicks = root.getElementsByTagName("VideoClicks");
    if (clicks.length)
    {
        clicks = clicks.item(0);
        var ct = clicks.getElementsByTagName("ClickThrough");
        if (ct.length)
        {
            this.clickThrough = ct.item(0).textContent.replace(/\s/g, "");
        }

        ct = clicks.getElementsByTagName("ClickTracking");
        for (i = 0; i < ct.length; i++)
        {
            this.tracking.addClickTracking(ct.item(i).textContent.replace(/\s/g, ""));
        }
    }

    var d = root.getElementsByTagName("Duration");
    if (d.length)
    {
        this.duration = this.timecodeFromString(d.item(0).textContent.replace(/\s/g, ""));
    }

    var ap = root.getElementsByTagName("AdParameters");
    if (ap.length)
    {
        try
        {
            string = [].map.call(root.getElementsByTagName("AdParameters"),
                function(node)
                {
                    return node.textContent || node.innerText || "";
                }
            ).join("");
            this.adParameters = string;
        }
        catch (e)
        {
            this.adParameters = null;
        }
    }


    var medias = root.getElementsByTagName("MediaFiles");
    if (!medias.length)
    {
        return;
    }

    medias = medias.item(0).getElementsByTagName("MediaFile");
    for (i = 0; i < medias.length; i++)
    {
        var m = medias.item(i);
        var mf = {};
        for (var a = 0; a < m.attributes.length; a++)
        {
            mf[m.attributes[a].name] = m.attributes[a].value;
        }
        mf["src"] = medias.item(i).textContent.replace(/\s/g, "");
        this.mediaFiles.push(mf);
    }


}

SekindoVASTLinear.prototype = Object.create(SekindoVASTCreative.prototype);

/**
 * Returns the duration for this linear creative, or null if not set
 *
 * @returns {?number} The duration of this linear in seconds, null otherwise
 */
SekindoVASTLinear.prototype.getDuration = function()
{
    return this.duration;
};

/**
 * Returns a new, but identical VASTLinear object pointing to the given ad
 *
 * @param {VASTAd} ad The ad holding the copy of this creative
 */
SekindoVASTLinear.prototype.copy = function(ad)
{
    return new SekindoVASTLinear(ad, this.root);
};

/**
 * Adds the tracking events and creative elements found in the given VASTLinear
 * record to those currently in this creative
 *
 * @param {VASTLinear} other VASTLinear object to merge into this one
 */
SekindoVASTLinear.prototype.augment = function(other)
{
    this.duration = other.duration || this.duration;
    this.mediaFiles = other.mediaFiles.slice(0) || this.mediaFiles.slice(0);
    this.tracking.augment(other.tracking);
    this.clickThrough = other.clickThrough || this.clickThrough;
    this.adParameters = other.adParameters || this.adParameters;
};

/**
 * Returns all media files associated with this linear so the caller can decide
 * which one to play
 *
 * Each object in the returned list contains a "src" attribute, as well as any
 * of the following attributes:
 *   - delivery
 *   - type
 *   - bitrate
 *   - minBitrate
 *   - maxBitrate
 *   - width
 *   - height
 *   - scalable
 *   - maintainAspectRatio
 *   - codec
 *   - src
 * according to the VAST specification.
 *
 * @returns {object[]} a list of media files for this linear
 */
SekindoVASTLinear.prototype.getAllMedias = function()
{
    return this.mediaFiles;
};

/**
 * This methods makes a best guess at what media file to choose for this linear
 * based on the given target parameters. The target object should contain the
 * width and height of the video player, as well as a target bitrate if
 * applicable. If no bitrate is given, the highest bitrate is chosen, otherwise
 * the closest bitrate is chosen.
 *
 * @param {{width: number, height: number, ?bitrate: number}} target The target
 *   video settings
 * @returns {?object} a single media file with the properties given for each
 *   object in getAllMedias() or null if no media file is available
 */
SekindoVASTLinear.prototype.getBestMedia = function(target)
{
    var best = Number.POSITIVE_INFINITY;
    var besti = -1;
    for (var i = 0; i < this.mediaFiles.length; i++)
    {
        var media = this.mediaFiles[i];
        // Root of the sum of the squares seems as good a mesure as any for a
        // two-dimensional distance. Pythagoras FTW!
        var distance = Math.sqrt(
            Math.pow(target["width"] - media["width"], 2) +
            Math.pow(target["height"] - media["height"], 2)
        );

        if (distance < best)
        {
            best = distance;
            besti = i;
        }
        else if (distance === best)
        {
            // If the two files are equally close to the target resolution, use
            // bitrate as the pivot. Has bitrate > closer to target bitrate > highest
            // bitrate
            var other = this.mediaFiles[besti];
            var otherBR = other["bitrate"] || other["maxBitrate"];
            var mediaBR = media["bitrate"] || media["maxBitrate"];

            if (mediaBR && !otherBR)
            {
                besti = i;
            }
            else if (target["bitrate"] && otherBR && mediaBR)
            {
                if (Math.abs(mediaBR - target["bitrate"]) < Math.abs(otherBR - target["bitrate"]))
                {
                    besti = i;
                }
            }
            else if (mediaBR > otherBR)
            {
                besti = i;
            }
        }
    }

    if (besti === -1)
    {
        return null;
    }
    return this.mediaFiles[besti];
};

/** @const **/
var VAST_LINEAR_TRACKING_POINTS = ['start',
    'firstQuartile',
    'midpoint',
    'thirdQuartile',
    'complete',
    'progress'
];

/**
 * Returns a list of positions in the playback of this ad when track() should be
 * called. Each position is an object containing a position (either a percentage
 * into the clip given by a number suffixed with %, an absolute number of
 * seconds or one of the strings "start" or "end") and an event name. When the
 * given position is reached in the playback of the ad, VASTAd.track() should be
 * called giving the event name and the current playback position in absolute
 * number of seconds.
 *
 * Note that this function will include points for the start, complete,
 * firstQuartile, midpoint and thirdQuartile events, so these need not be
 * explicitly added. There MAY be multiple events with the same offset, in which
 * case track must be called for each one with their respective event names.
 *
 * The list will only include points that the VAST response explicitly request
 * tracking for.
 */
SekindoVASTLinear.prototype.getTrackingPoints = function()
{
    var events = this.tracking?this.tracking.getEventsOfTypes(VAST_LINEAR_TRACKING_POINTS):[];
    var points = [];
    for (var i = 0; i < events.length; i++)
    {
        var point = {
            "event": events[i]["event"],
            "offset": null
        };
        switch (events[i]["event"])
        {
            case "start":
                point["offset"] = "start";
                break;
            case "firstQuartile":
                point["offset"] = "25%";
                break;
            case "midpoint":
                point["offset"] = "50%";
                break;
            case "thirdQuartile":
                point["offset"] = "75%";
                break;
            case "complete":
                point["offset"] = "end";
                break;
            default:
                // progress-...
                var offset = events[i]["offset"];
                if (!offset)
                {
                    continue;
                }

                point["offset"] = SekindoVASTCreative.prototype.timecodeFromString(offset);
        }
        points.push(point);
    }

    return points;
};/**
 * Created by tamirg on 30/03/15.
 */
function SekindoPlaylistManager(uniqueID, config)
{
    this.uniqueID = uniqueID;
    this.loaderTimeout = null;
    this.config = config;

    this.videoTitle = '';
    this.currSrc;
    this.contentPlayList = config.contentPlayList;
    this.index = 0;
    this.playlistMultiplierIndex = 0;
    this.faiTimeout = null;
    this.generateVideoElement();
    this.loadNextContent(this.index);
};

SekindoPlaylistManager.prototype.generateVideoElement = function generateVideoElement()
{
    if(this.config.isNative)
    {
        this.videoElement = this.config.iframeDoc.createElement('video');
    }
    else
    {
        this.videoElement = new SekindoVideoObj(this.uniqueID, this.config, this.config.audioObj);
    }

    this.videoElement.width = this.config.width;
    this.videoElement.height = this.config.height;
    this.videoElement.style.top = "0px";
    this.videoElement.style.zIndex = 2;
    if(this.config.contentClickUrl)this.videoElement.style.cursor = 'pointer';
    this.videoElement.muted = (this.config.mute == true || this.config.mute == 'true');
    this.videoElement.volume = this.config.volume;
    this.videoElement.autoplay = (this.config.isAutoPlay == true || this.config.isAutoPlay == 'true');
    window['sekindoBus'+this.uniqueID].triggerNote('addChild', {visual:this.videoElement,destiny:'video'});
    this.addListeners();
};

SekindoPlaylistManager.prototype.loadNextContent = function loadNextContent(index)
{
    var ref = this;

    if(!this.contentPlayList || this.contentPlayList.length <= 0)return;

    this.videoTitle = ref.contentPlayList[index].title;
    var ref = this;
    this.currSrc = unescape(ref.contentPlayList[index].url);
    this.videoElement.src = this.currSrc;
    this.videoElement.videoTitle = ref.contentPlayList[index].title;
    this.videoElement.contetnType = 'playlistSrc';
    this.videoElement.style.display = 'block';
};


SekindoPlaylistManager.prototype.addListeners = function addListeners()
{
    var ref = this;
    this.videoElement.addEventListener('ended', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener("play", function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('click', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('playing', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('pause', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('error', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('progress', function(val){ref.onVideoEvent(val)});
    this.videoElement.addEventListener('timeupdate', function(val){ref.onVideoEvent(val)});

    window['sekindoBus'+this.uniqueID].addCallBack('adCompleted', function(){ref.onAdComplete();});
    window['sekindoBus'+this.uniqueID].addCallBack('adStarted', function(){ref.onAdStart();});
    window['sekindoBus'+this.uniqueID].addCallBack('timeScrabber', function(val){ref.onTimeScrabber(val);});

    if(this.contentPlayList.length > 1)this.videoElement.loop = false;
};

SekindoPlaylistManager.prototype.onTimeScrabber = function onTimeScrabber(val)
{
    if(this.videoElement.style.display == 'block')this.videoElement.currentTime = val*this.videoElement.duration;
};

SekindoPlaylistManager.prototype.onAdStart = function onAdStart()
{
    var ref = this;
    this.videoElement.pause();
    this.videoElement.style.display = 'none';

};
SekindoPlaylistManager.prototype.onAdComplete = function onAdComplete()
{
    var ref = this;

    this.videoElement.play();
    this.videoElement.style.display = 'block';
    this.videoElement.videoTitle = this.videoTitle;
    window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', ref.videoTitle);

};
SekindoPlaylistManager.prototype.onVideoEvent = function onVideoEvent(val)
{
    var ref = this;
    switch(val.type)
    {
        case 'error':
            this.index++;
            if(this.index >= this.contentPlayList.length)
            {
                this.playlistMultiplierIndex ++;
                if(this.playlistMultiplierIndex >= this.config.playlistMultiplier)
                {
                    this.videoElement.autoplay = false;
                    this.playlistMultiplierIndex = 0;
                    window['sekindoBus'+ref.uniqueID].triggerNote('onPause', null);
                }
                this.index = 0;
            }
            this.loadNextContent(this.index);
            break;
        case 'play':
            this.videoElement.autoplay = true;
            if(this.videoElement.src == this.currSrc) window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', ref.videoTitle);

            break;
        case 'progress':
        case 'timeupdate':
            try
            {
                window['sekindoBus'+this.uniqueID].triggerNote('onVideoProgress', {currTime:ref.videoElement.currentTime,duration:ref.videoElement.duration,loaded:ref.videoElement.buffered.end(0)});
            }
            catch(e)
            {

            }

            break;



        case 'playing':
            if(this.videoElement.contetnType != 'playlistSrc' && this.videoElement.src == this.currSrc)
            {
                this.videoElement.contetnType = 'playlistSrc';
                window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', ref.videoTitle);
            }

            break;

        case 'ended':

            this.index++;
            if(this.index >= this.contentPlayList.length)
            {
                this.playlistMultiplierIndex ++;
                if(this.playlistMultiplierIndex >= this.config.playlistMultiplier)
                {
                    this.videoElement.autoplay = false;
                    this.playlistMultiplierIndex = 0;
                    window['sekindoBus'+ref.uniqueID].triggerNote('onPause', null);
                }
                this.index = 0;
            }
            this.loadNextContent(this.index);

            window['sekindoBus'+this.uniqueID].triggerNote('changeTitle', '');
            window['sekindoBus'+this.uniqueID].triggerNote('contentEnded', '');

            break;
    };

    function validURL(str)
    {
        var regex = /^https?:/;
        if(!regex .test(str))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
};/**
 * Created by tamirg on 16/03/15.
 */
function SekindoAudioObj(uniqueID, config)
{
    var ref = this;
    this.uniqueID = uniqueID;
    this.config = config;
    this.muted = true;
    this.audioSrc = null;
    this.jpgSeqObj = null;
    this.audioLock = false;
    this.audioStatus = 'inited';// inited playRequested pauseRequested canplaythrough playing pause ended
    this.audioElement = document.getElementById(uniqueID+"Audio");
    this.audioElement.isMuted = true;
    this.onErrorEvent = function(e)
    {
        ref.muted = true;
        ref.isPlayingAudio = false;
        ref.audioLock = true;
    }
    this.audioElement.addEventListener('error', ref.onErrorEvent, false);

    this.canplaythrough1 = function ()
    {

        if(ref.audioSrc != ref.audioElement.src || ref.audioStatus == 'playing')return;
        ref.audioStatus = 'canplaythrough';// inited playRequested pauseRequested canplaythrough playing pause ended
        ref.audioElement.currentTime = ref.jpgSeqObj.currAnimTime;
        try
        {
            ref.audioElement.play();
            ref.isPlayingAudio = true;
            setTimeout(function(){try{ref.audioElement.muted = false;}catch(e){}},500);
        }
        catch(e)
        {
            console.log('rr'+e);
        }
    };
    this.audioElement.addEventListener("canplaythrough", ref.canplaythrough1, false);

    this.playing1 = function ()
    {

        if(ref.audioSrc != ref.audioElement.src)return;
        if(!ref.isPlayingAudio && ref.audioStatus != 'playing')
        {
            ref.audioElement.currentTime = ref.jpgSeqObj.currAnimTime;
            ref.isPlayingAudio = true;
            setTimeout(function(){try{ref.audioElement.muted = false;}catch(e){}},500);
            if(ref.dispatchEvent)ref.dispatchEvent('volumechange');

        }
        ref.audioStatus = 'playing';// inited playRequested pauseRequested canplaythrough playing pause ended
    };
    this.audioElement.addEventListener( "playing", ref.playing1, false);

    this.pause1 = function ()
    {
        if(ref.audioSrc != ref.audioElement.src)return;
        ref.audioStatus = 'pause';// inited playRequested pauseRequested canplaythrough playing pause ended
        ref.isPlayingAudio = false;
        if(ref.audioSrc != ref.audioElement.src)return;
        if(ref.dispatchEvent)ref.dispatchEvent('volumechange');
    };
    this.audioElement.addEventListener("pause", ref.pause1, false);

    this.ended1 = function ()
    {
        if(ref.audioSrc != ref.audioElement.src)return;
        ref.audioStatus = 'ended';// inited playRequested pauseRequested canplaythrough playing pause ended
        ref.isPlayingAudio = false;
        ref.playRequest = false;
    };
    this.audioElement.addEventListener("ended", ref.ended1, false);

    this.volumechange1 = function ()
    {
        if(ref.audioSrc != ref.audioElement.src)return;
        if(ref.dispatchEvent)ref.dispatchEvent('volumechange');
    };
    this.audioElement.addEventListener("volumechange", ref.volumechange1, false);

};

SekindoAudioObj.prototype.play = function play()
{
    var ref = this;
    this.audioStatus = 'playRequested';// inited playRequested pauseRequested canplaythrough playing pause ended
    this.muted = false;
    if(this.audioSrc != this.audioElement.src)
    {
        this.audioLock = false;
        try
        {
            this.audioElement.src = this.audioSrc;
            this.audioElement.currentTime = this.jpgSeqObj.currAnimTime;
        }
        catch(e)
        {
            console.log(e);
        }
        this.isPlayingAudio = false;
        this.audioElement.muted = false;
        try
        {
            this.audioElement.play();
        }
        catch(e)
        {
            console.log(e);
        }
    }
    else
    {
        if(this.audioLock) return;
        try
        {
            this.audioElement.currentTime = this.jpgSeqObj.currAnimTime;
            this.audioElement.play();
            this.audioElement.muted = false;
            if(ref.dispatchEvent)ref.dispatchEvent('volumechange');
        }
        catch(e)
        {
            console.log(e);
        }
    }
    this.playRequest = true;
};
SekindoAudioObj.prototype.pause = function pause()
{
    if(this.audioLock) return;
    this.audioStatus = 'pauseRequested';// inited playRequested pauseRequested canplaythrough playing pause ended
    if(this.audioSrc != this.audioElement.src)return;
    this.audioElement.pause();
    this.playRequest = false;
    this.muted = true;
};


SekindoAudioObj.prototype.preloadSound = function preloadSound(url)
{
    var audioElement = this.config.iframeDoc.createElement('audio');
    var source1 = this.config.iframeDoc.createElement('source');
    source1.type = 'audio/mpeg';
    source1.src = url;
    audioElement.appendChild(source1);
    audioElement.load();
};

SekindoAudioObj.prototype.removeListeners = function removeListeners()
{
    var ref = this;
    this.audioElement.removeEventListener('error', ref.onErrorEvent, false);
    this.audioElement.removeEventListener("canplaythrough", ref.canplaythrough1, false);
    this.audioElement.removeEventListener( "playing", ref.playing1, false);
    this.audioElement.removeEventListener("pause", ref.pause1, false);
    this.audioElement.removeEventListener("ended", ref.ended1, false);
    this.audioElement.removeEventListener("volumechange", ref.volumechange1, false);
};

/**
 * Created by tamirg on 19/03/15.
 */


function SekindoVideoObj(uniqueID, config, audioObj)
{
    this.videoDiv = config.iframeDoc.createElement("div");
    this.uniqueID = uniqueID;
    this.vidUniqueID = uniqueID+Math.floor( Math.random()*100000);
    this.config = config;
    this.audioObj = new SekindoAudioObj(this.uniqueID, this.config);
    this.mute = true;
    this.eventListeners = new Array();
    this.interface = new SekindoVideoInterface(this.videoDiv);
    this.interface.audioObj = this.audioObj;
    this.interface.videoObj = this;
    this.autoplay = true;
    return this.videoDiv;
};

SekindoVideoObj.prototype.loadSrc = function loadSrc(src)
{
    var ref = this;
    this.faiTimeout = null;
    if(src) this.src = src;
    if(!this.src)return;
    this.xmlhttp = new XMLHttpRequest();

    var url = this.config.encoderUrl.replace('[TARGET]',encodeURIComponent(this.src));
    if (url)url = url.replace('[ORIGIN]', 'pl');

    this.xmlhttp.addEventListener("load", transferComplete, false);
    this.xmlhttp.addEventListener("error", transferFailed, false);
    this.xmlhttp.addEventListener("abort", transferCanceled, false);
    function transferComplete(evt)
    {
        try
        {
            if (!/^-?[0-9]+$/.test(ref.xmlhttp.responseText))
            {
                var config = JSON.parse(ref.xmlhttp.responseText);
                ref.constructVideo(config);
                clearTimeout(ref.loaderTimeout);
            }
            else
            {
                ref.faiTimeout = setTimeout(function(){ref.loadSrc();},4000);
            }
        }
        catch(e)
        {
            if(!ref.faiTimeout)
            {
                ref.faiTimeout = setTimeout(function(){ref.loadSrc();},4000);
            }

        }
    }

    function transferFailed(evt)
    {
        if(!ref.faiTimeout)
        {
            ref.faiTimeout = setTimeout(function ()
            {
                ref.loadSrc();
            }, 4000);
        }
    }

    function transferCanceled(evt)
    {
        if(!ref.faiTimeout)
        {
            ref.faiTimeout = setTimeout(function ()
            {
                ref.loadSrc();
            }, 4000);
        }
    }

    this.xmlhttp.open("GET", url, true);
    this.xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    this.xmlhttp.send();
};

SekindoVideoObj.prototype.constructVideo = function constructVideo(jpgConfig)
{
    var ref = this;
    jpgConfig.iframeDoc = this.config.iframeDoc;
    jpgConfig.iframewindow = this.config.iframewindow;
    jpgConfig.absolutePath = this.config.absolutePath;
    this.jpgSeqObj = new SekindoJpgSeqObj(this.vidUniqueID,jpgConfig);
    this.audioObj.audioSrc = jpgConfig.dir+"/audio/audio.mp3";
    this.jpgSeqObj.audioObj = this.audioObj;
    this.jpgSeqObj.videoObj = this;
    this.interface.jpgSeqObj = this.jpgSeqObj;
    this.audioObj.jpgSeqObj = this.jpgSeqObj;

    if(this.config.isHasAudio == true || this.config.isHasAudio == 'true')
    {
        this.audioObj.preloadSound(this.jpgSeqObj.audioSrc);
    }else
    {
        this.audioObj.isHasAudio = false;
    }

    this.videoDiv.appendChild(this.jpgSeqObj.container);
    this.jpgSeqObj.dispatchEvent = function(type, val){ref.videoDiv.dispatchEvent(type, val);};
    this.audioObj.dispatchEvent = function(type, val){ref.videoDiv.dispatchEvent(type, val);};
    this.jpgSeqObj.constructVideoDiv();
    this.setDimentions();
    this.busItms = new Array();
    this.busItms.push(window['sekindoBus'+this.uniqueID].addCallBack('onMute', function(val){ref.interface.muted = val;}));

    this.busItms.push(window['sekindoBus'+this.uniqueID].addCallBack('skipAd', function(val){ref.jpgSeqObj.syncAnimToSound();}));
    if(this.autoplay)this.jpgSeqObj.play();
};

SekindoVideoObj.prototype.setDimentions = function setDimentions()
{
    var vidRatio = Number(this.jpgSeqObj.container.offsetWidth)/Number(this.jpgSeqObj.container.offsetHeight);
    var containerRatio = this.config.width/this.config.height;
    var scale = this.config.width/Number(this.jpgSeqObj.container.offsetWidth);
    if(vidRatio < containerRatio)
    {
        var scale = this.config.height/Number(this.jpgSeqObj.container.offsetHeight);
    }
    //strech video to container dimentions with aspect ratio
    this.jpgSeqObj.container.style.transform = 'scale('+scale+','+scale+')';
    this.jpgSeqObj.container.style.mozTransform = 'scale('+scale+','+scale+')';
    this.jpgSeqObj.container.style.webkitTransform = 'scale('+scale+','+scale+')';

    //vertically center the content
    this.jpgSeqObj.container.style.top = (this.config.height - Number(this.jpgSeqObj.container.offsetHeight))/2+'px';
    //horisontally center the content only if it is retracted - browsers bug.
    this.jpgSeqObj.container.style.left = (Number(this.config.width - this.jpgSeqObj.container.offsetWidth)  )/2+'px';
}

SekindoVideoObj.prototype.show = function show()
{
    //Hide and Show cannot use "style.display" because it resets animation and other style settings.
    this.jpgSeqObj.container.style.zIndex = 1;
    this.jpgSeqObj.container.style.display = 'block';
};

SekindoVideoObj.prototype.hide = function hide()
{
    //Hide and Show cannot use "style.display" because it resets animation and other style settings.
    this.jpgSeqObj.container.style.zIndex = -1000;
    this.jpgSeqObj.container.style.display = 'none';
};

SekindoVideoObj.prototype.destruct = function destruct()
{
    this.audioObj.removeListeners();
    function purge(d)
    {
        if(!d)return;
        var a = d.attributes, i, l, n;
        if (a)
        {
            l = a.length;
            for (i = 0; i < l; i += 1)
            {
                n = a[i].name;

                if (typeof d[n] === 'function')
                {
                    d[n] = null;
                }
            }
        }
        a = d.childNodes;
        if (a)
        {
            l = a.length;
            for (i = 0; i < l; i += 1)
            {
                purge(d.childNodes[i]);
                if(d.childNodes[i])d.removeChild(d.childNodes[i]);
            }
        }
    }
    if(this.jpgSeqObj && this.jpgSeqObj.container)purge(this.jpgSeqObj.container);
    if(this.jpgSeqObj)this.jpgSeqObj.destruct();
    if(this.jpgSeqObj && this.jpgSeqObj.container && this.jpgSeqObj.container.parentNode)this.jpgSeqObj.container.parentNode.removeChild(this.jpgSeqObj.container);
    if(this.busItms)
    {
        for(var i = 0 ; i < this.busItms.length ; i++)
        {
            window['sekindoBus'+this.uniqueID].removeBusItm(this.busItms[i]);
        }
    }

    for(var prop in this.interface)
    {
        this.interface[prop] = null;
    }
    for(var prop in this.audioObj)
    {
        this.audioObj[prop] = null;
    }
    if(this.videoDiv && this.videoDiv.parentNode)this.videoDiv.parentNode.removeChild(this.videoDiv);
    delete this.jpgSeqObj;
    delete this.audioObj;
    delete this.interface;
    delete this.videoDiv;
    for(var prop in this)
    {
        this[prop] = null;
    }
};



/**
 * Created by tamirg on 30/03/15.
 */
function SekindoJpgSeqObj(uniqueID, config)
{
    /*
     this.config.framePerSequance
     this.config.sequancesPerSec
     this.config.totalFrames
     this.config.frameRate
     this.config.seqNum
     //*/
    var ref = this;
    this.uniqueID = uniqueID;
    this.config = config;
    this.dispatchEvent = null;
    this.audioSrc = this.config.dir+"/audio/audio.mp3";
    this.isPaused = false;
    this.currDiv = null;
    this.nxtDiv = null;
    this.videoWidth = config.width;
    this.videoHeight = config.height;
    this.container = this.config.iframeDoc.createElement("div");
    this.container.style.width = this.videoWidth + "px";
    this.container.style.height = this.videoHeight + "px";
    this.container.style.position = 'absolute';
    this.container.style.marginLeft = 'auto';//Center div in explorer
    this.container.style.marginRight = 'auto';//Center div in explorer
    this.container.style.textAlign = 'center';
    this.container.id = "containerDiv";
    this.imagesLoaded = new Array();//array of loaded images
    this.divsArray = new Array();//array of generated div frames
    this.totalDivs = 2;//number of frames will be created on init
    this.buffer = 3;//int in seconds
    this.buffered = 0;
    this.audioObj = null;
    this.playingStatus = 'inited';//'playing', 'paused', 'buffer', 'complete'
    this.progressStatus = 'inited';//start, firstQuartile, midpoint, thirdQuartile, complete
    this.ended = false;
    this.loop = true;
    this.frameTimeStamp = null;
    this.pauseTimeStamp = null;
    this.currValidFrame = 0;

    this.startTime = Date.now();
    this.currTime = 0;
    this.currFrame = 0;
    this.currSequance = -1;
    this.currAnimTime = 0;
};
SekindoJpgSeqObj.prototype.bufferAnimation = function bufferAnimation()
{
    this.bufferDiv = this.config.iframeDoc.createElement("div");

    this.bufferDiv.id = "this.bufferDiv"+this.uniqueID;
    this.bufferDiv.style.position = "absolute";
    this.bufferDiv.style.zIndex = 10;
    this.bufferDiv.style.display = "block";
    this.bufferDiv.style.width = this.videoWidth + "px";
    this.bufferDiv.style.height = this.videoHeight + "px";

    this.bufferDiv.style.overflow = 'hidden';
    this.bufferDiv.style.marginLeft = 'auto';//Center div in explorer
    this.bufferDiv.style.marginRight = 'auto';//Center div in explorer
    this.bufferDiv.style.textAlign = 'center';

    this.container.appendChild(this.bufferDiv);
    this.img = this.config.iframeDoc.createElement("img");
    this.img.src = this.config.absolutePath+"/content/video/splayer/assets//bufferAnim.gif";
    this.img.width = 80;
    this.img.height = 80;
    this.img.style.marginTop = this.videoHeight/2-40+"px";
    this.bufferDiv.appendChild(this.img);
};


SekindoJpgSeqObj.prototype.constructVideoDiv = function constructVideoDiv()
{
    var ref = this;
    this.videoDiv = this.config.iframeDoc.createElement("div");
    this.videoDiv.id = "videoDiv"+this.uniqueID;
    this.container.appendChild(this.videoDiv);

    var frame = this.constructDiv('poster');
    this.videoDiv.appendChild(frame);

    for(var j = 0; j < this.totalDivs; j++)
    {
        var frame = this.constructDiv(j);
        this.videoDiv.appendChild(frame);
        this.divsArray.push(frame);
    }
    this.videoDiv.addEventListener('click',
        function (event)
        {
            ref.dispatchEvent('clickThrough');
            ref.dispatchEvent('click');
        });

    this.loadImagesStock(0);
};



SekindoJpgSeqObj.prototype.constructDiv = function constructDiv(i)
{
    var ref = this;
    var classID = "frame"+this.uniqueID+i;
    ///Constructing the div elements

    var frameDiv = this.config.iframeDoc.createElement("div");
    frameDiv.className = classID;
    frameDiv.id = classID;
    frameDiv.style.position = "absolute";
    frameDiv.style.left ="0px";
    frameDiv.style.top = "0px";
    frameDiv.style.width = this.videoWidth + "px";
    frameDiv.style.height = this.videoHeight + "px";
    frameDiv.style.webkitTransform  = 'translate3d(1, 1, 1)';
    if( i == 'poster')
    {
        frameDiv.style.background = "url("+this.config.dir+"/framesSeq/poster.jpg)";
        frameDiv.style.zIndex = 0;
        frameDiv.style.display = 'block';
    }
    else
    {
        frameDiv.style.background = "url("+this.config.dir+"/framesSeq/framesSeq"+i+".jpg)";
        frameDiv.style.zIndex = -1000;
        frameDiv.style.display = 'none';
        frameDiv.setAttribute("data-frame", i);
    }
    frameDiv.style.backgroundColor = 'black';

    return frameDiv;
};



SekindoJpgSeqObj.prototype.onAnimationStart = function onAnimationStart()
{
    if(this.playingStatus == 'inited')//'playing', 'paused', 'buffer', 'complete')
    {
        this.dispatchEvent('start');
        this.dispatchEvent('play');
        this.dispatchEvent('playing');

        this.playingStatus = 'playing';
        this.progressStatus = 'start';
    }
};

SekindoJpgSeqObj.prototype.isBuffering = function isBuffering()
{
    var bufCount = Math.max(1,Math.floor(this.buffer*this.config.sequancesPerSec));
    var result = true;
    var counter = 0;
    for(var i = 0; i < bufCount; i++)
    {
        if(this.imagesLoaded[this.currSequance + i])
        {
            if(this.imagesLoaded[this.currSequance + i].result)counter++;
        }
        else
        {
            //reaching the end of the video so no frame is available -
            counter++;
        }

    }

    var j = 0;
    while(this.imagesLoaded[j] && this.imagesLoaded[j].result)j++;
    this.buffered = Math.min((j*this.config.framePerSequance/this.config.frameRate),(this.config.totalFrames/this.config.frameRate));

    if(counter == bufCount)result = false;
    return result;
};

SekindoJpgSeqObj.prototype.loadImagesStock = function loadImagesStock(i)
{
    var ref = this;
    this.i = i;
    function callback()
    {
        ref.i++;
        if(ref.i < ref.config.seqNum)
        {
            ref.loadImagesStock(ref.i);
        }
    }
    var imgObj = new SekindoImgLoaderObj(callback, this.config.dir+"/framesSeq/framesSeq"+i+".jpg", this.config, i);
    this.imagesLoaded[i] = imgObj;
};

//image loader enables buffering and controlling the images proccessing
SekindoImgLoaderObj = function(callback, imgURL, config, i)
{
    var ref = this;
    this.result = false;

    function onImgLoad(evt)
    {
        config.iframeDoc.body.removeChild(image);
        ref.result = true;
        callback();
    }
    var image = config.iframeDoc.createElement('img');
    image.addEventListener("load", onImgLoad);
    image.src = imgURL;
    config.iframeDoc.body.appendChild(image);
};

SekindoJpgSeqObj.prototype.setCurrTime = function setCurrTime()
{
    if(this.destructed)return;
    var ref = this;
    switch(this.playingStatus)
    {
        case 'inited':
            this.currTime = 0;
            break;
        case 'playing':
            this.currTime = (Date.now() - this.startTime)/1000;
            break;
        case 'paused':
            this.startTime = Date.now() - this.currTime*1000;
            break;
        case 'buffer':
            this.startTime = Date.now() - this.currTime*1000;
            break;
        case 'complete':
            return;
            break;

    }
    if(!this.audioObj.muted && this.playingStatus == 'playing' && (this.audioObj.audioStatus == 'inited' || this.audioObj.audioStatus == 'pauseRequested' || this.audioObj.audioStatus == 'pause' || this.audioObj.audioStatus == 'ended')){
        this.audioObj.play();
    }

    if(this.audioObj.audioSrc == this.audioObj.audioElement.src && this.audioObj.audioStatus == 'playing')
    {
        this.currAnimTime += ((this.audioObj.audioElement.currentTime +0.2) - this.currAnimTime)/10;
        this.currTime = Math.round(this.currAnimTime*1000)/1000;

    }else{
        this.currAnimTime = Math.round(this.currTime *1000)/1000;
    }

    var lastSequance = this.currSequance;
    this.currSequance = Math.floor(this.currTime * this.config.sequancesPerSec);
    var dif = this.currTime - this.currSequance / this.config.sequancesPerSec;
    this.currFrame = Math.min( Math.round(dif * this.config.frameRate),(this.config.framePerSequance - 1));

    if(lastSequance != this.currSequance)
    {
        this.switchSequances();
    }
    if(this.playingStatus == 'playing')this.switchFrames();

    this.reportProgressStatus();

    this.config.iframewindow.requestAnimationFrame(function(){try{ref.setCurrTime();}catch(e){}});
};
SekindoJpgSeqObj.prototype.switchFrames = function switchFrames()
{
   var ref = this;
    try
    {
        this.currDiv.style.backgroundPosition = (this.currFrame * -this.config.width) + "px";
        this.dispatchEvent('onProgress', ref.currTime);
        this.dispatchEvent('timeupdate');
    }
    catch(e)
    {

    }

};

SekindoJpgSeqObj.prototype.switchSequances = function switchSequances()
{
    var ref = this;
    if(this.currSequance >= this.config.seqNum && this.loop)
    {
        this.currSequance = 0;
        this.playingStatus = 'inited';//'playing', 'paused', 'buffer', 'complete'
    }

    if(this.isBuffering())
    {
        setTimeout(function(){ref.switchSequances()}, 1000);
        this.bufferDiv.style.zIndex = 10;
        this.bufferDiv.style.display = "block";
        this.playingStatus = 'buffer';//'playing', 'paused', 'buffer', 'complete'
        if(!this.audioObj.muted && this.audioObj.audioSrc == this.audioObj.audioElement.src)
        {
            this.audioObj.pause(this);
        }
        return;
    }
    else
    {
        if( this.playingStatus == 'buffer' )
        {
            if(this.isPaused)
            {
                this.playingStatus = 'paused';
            }
            else
            {
                this.playingStatus = 'playing'; //'playing', 'paused', 'buffer', 'complete'
            }
        }

        this.bufferDiv.style.display = "none";
        this.dispatchEvent('loadstart');
        this.dispatchEvent('progress');
        this.dispatchEvent('durationchange');
        this.dispatchEvent('loadedmetadata');
        this.dispatchEvent('loadeddata');
        this.dispatchEvent('canplay');
        this.dispatchEvent('canplaythrough');
    }

    if(this.currDiv)
    {
        this.currDiv.style.zIndex = -1000;
        this.currDiv = this.nxtDiv;
    }
    else ///first time running this video
    {
        this.currTime = 0;
        this.startTime = Date.now();
        this.currDiv = this.divsArray[0];
        this.currDiv.style.background = "url(" + this.config.dir + "/framesSeq/framesSeq" + (this.currSequance) + ".jpg)";
        this.playingStatus = 'inited';
        this.onAnimationStart();
    }
    this.currDiv.style.zIndex = 0;
    this.currDiv.style.display = "block";
    if(this.currSequance < this.config.seqNum - 1 )
    {
        this.nxtDiv = this.divsArray[(this.currSequance+1)%this.totalDivs];
        this.nxtDiv.style.background = "url(" + this.config.dir + "/framesSeq/framesSeq" + (this.currSequance +1) + ".jpg)";
    }
    else if(this.currSequance > this.config.seqNum - 1 )
    {
        this.progressStatus = 'complete';
        this.ended = true;
        this.playingStatus = 'complete';
        this.dispatchEvent('complete');
        this.dispatchEvent('ended');
    }

    if(!this.audioObj.isPlayingAudio && !this.audioObj.audioElement.isMuted  && this.audioObj.audioSrc == this.audioObj.audioElement.src && this.playingStatus == 'playing')
    {
        this.audioObj.play();
    }
    this.config.iframewindow.requestAnimationFrame(function(){try{ref.setCurrTime();}catch(e){}});
};
SekindoJpgSeqObj.prototype.reportProgressStatus = function reportProgressStatus()
{
    var ref = this;
    switch(this.progressStatus)
    {
        case 'inited':

            break;
        case 'start':
            if(this.currTime > (this.config.totalFrames/this.config.frameRate)/4)
            {
                this.progressStatus = 'firstQuartile';
                this.dispatchEvent('firstQuartile');
            }
            break;
        case 'firstQuartile':
            if(this.currTime > (this.config.totalFrames/this.config.frameRate)/2)
            {
                this.progressStatus = 'midpoint';
                this.dispatchEvent('midpoint');
            }
            break;
        case 'midpoint':
            if(this.currTime > (this.config.totalFrames/this.config.frameRate)/4*3)
            {
                this.progressStatus = 'thirdQuartile';
                this.dispatchEvent('thirdQuartile');
            }
            break;
        case 'thirdQuartile':
            if(this.currTime >= (this.config.totalFrames/this.config.frameRate))
            {
                this.progressStatus = 'complete';
                this.ended = true;
                this.playingStatus = 'complete';
                this.dispatchEvent('pause');
                this.dispatchEvent('ended');
            }
            break;
    }
};


SekindoJpgSeqObj.prototype.play = function play()
{
    var ref = this;
    if(this.pauseTimeStamp)
    {
        this.frameTimeStamp = Date.now() - this.pauseTimeStamp;
    }
    this.isPaused = false;
    if(this.playingStatus == 'paused')
    {
        this.dispatchEvent('playing');
    }

    this.playingStatus = 'playing';//'playing', 'paused', 'buffer', 'complete'


    if(!this.bufferDiv)this.bufferAnimation();
    this.config.iframewindow.requestAnimationFrame(function(){try{ref.setCurrTime();}catch(e){}});
};

SekindoJpgSeqObj.prototype.pause = function pause()
{
   if(this.ended)return;
    this.isPaused = true;
    this.playingStatus = 'paused';//'playing', 'paused', 'buffer', 'complete'
    this.pauseTimeStamp = Date.now() - this.frameTimeStamp;
    this.audioObj.pause();
    this.dispatchEvent('pause');
};

SekindoJpgSeqObj.prototype.destruct = function destruct()
{
    this.destructed = true;
    for(var i = 0; i < this.divsArray.length; i++)
    {
        this.divsArray[i].style.display = "none";
        this.divsArray[i].className = '';
    }
    for(var prop in this)
    {
        this[prop] = null;
    }
};
/**
 * Created by tamirg on 30/03/15.
 */
function SekindoCBar(uniqueID, config)
{
    this.uniqueID = uniqueID;
    this.config = config;
    this.container = this.config.iframeDoc.createElement('div');
    this.container.style.textAlign = 'left';
    this.container.style.direction = 'ltr';
    this.container.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/bg.png)";
    this.container.style.backgroundRepeat = "repeat-x";
    this.container.style.width = this.config.width+'px';
    this.container.style.height = '25px';
    this.container.style.position = "relative";
    this.container.style.left ="0px";
    this.container.style.bottom = "0px";
    this.adPlayStatus = false;
    var ref = this;
    this.jenerateButton = function(name, callBackFunc, imgUrl, width, height  )
    {
        var btn = this.config.iframeDoc.createElement("img");
        btn.id = name;
        btn.src = this.config.absolutePath+"/content/video/splayer/assets/"+imgUrl;
        btn.style.float = 'left';
        btn.style.cursor = 'pointer';

        if(callBackFunc)btn.onclick = callBackFunc;
        this.container.appendChild(btn);
        return btn;
    };

    this.onButton = function(event)
    {
        switch(event.currentTarget.id)
        {
            case "Play":
                window['sekindoBus'+ref.uniqueID].triggerNote('onPlay', null);
                break;
            case "Pause":
                window['sekindoBus'+ref.uniqueID].triggerNote('onPause', null);
                break;
            case "Mute":
                window['sekindoBus'+ref.uniqueID].triggerNote('onMute', true);
                break;
            case "UnMute":
                window['sekindoBus'+ref.uniqueID].triggerNote('onMute', false);
                break;
            case "SkipAd":
                window['sekindoBus'+ref.uniqueID].triggerNote('skipAd', false);
                break;
            case "FS":
                ref.callBack('fullscreen');
                break;
            case "NS":
                ref.callBack('normalscreen');
                break;
            case "Logo":
                window.open(ref.config.logoClickUrl, '_blank');
                break;
        }
    };

    this.playBtn = this.jenerateButton("Play", this.onButton, 'playBtn.png');
    this.pauseBtn = this.jenerateButton("Pause", this.onButton, 'pauseBtn.png');
    this.muteBtn = this.jenerateButton("Mute", this.onButton, 'muteBtn.png');
    this.unMuteBtn = this.jenerateButton("UnMute", this.onButton, 'unMuteBtn.png');
    if(this.config.showLogo == 'true')
    {
        var logoType = 'sekindoLogo.png';
        if(this.config.logoType != 'sekindo')logoType = 'mcLogo.png';
        this.logoBtn = this.jenerateButton("Logo", this.onButton, logoType);
        this.logoBtn.style.float = 'right';
    }

    this.playBtn.style.display = (this.config.isAutoPlay == true || this.config.isAutoPlay == 'true')?'none':'block';
    this.pauseBtn.style.display = (this.config.isAutoPlay == true || this.config.isAutoPlay == 'true')?'block':'none';
    this.muteBtn.style.display = (this.config.mute == true || this.config.mute == 'true')?'none':'block';
    this.unMuteBtn.style.display = (this.config.mute == true || this.config.mute == 'true')?'block':'none';

    this.volScrubber = new SekindoVolScrubber(this.uniqueID, this.config);
    this.container.appendChild(this.volScrubber.container);

    var txt1 = '0:0/0:0';
    this.timeProgressBox = this.config.iframeDoc.createElement("DIV");
    this.timeProgressBox.innerHTML = '<font size="1px" color="#f0ffff" type="Arial">'+txt1+'</font>';//name;//
    this.timeProgressBox.style.height = '22px';
    this.timeProgressBox.style.position = "absolute";
    this.timeProgressBox.style.left ="60px";
    this.timeProgressBox.style.top = "0px";
    this.timeProgressBox.style.textAlign = 'left';
    this.timeProgressBox.style.direction = 'ltr';
    this.timeProgressBox.style.marginLeft = '4px';
    this.timeProgressBox.style.paddingTop = '6px';
    this.container.appendChild(this.timeProgressBox);
    this.volScrubber.timeProgressBox = this.timeProgressBox;

    var txt = '';
    this.txtBox = this.config.iframeDoc.createElement("DIV");
    this.txtBox.innerHTML = '<font size="2px" color="#f0ffff" type="Arial">'+txt+'</font>';
    this.txtBox.style.textAlign = 'left';
    this.txtBox.style.direction = 'ltr';
    this.txtBox.style.marginLeft = '5px';
    this.txtBox.style.paddingTop = '4px';
    this.txtBox.style.height = '22px';
    this.txtBox.style.overflow = 'hidden';
    this.txtBox.style.zIndex = 100000;
    this.txtBox.style.top = "0px";

    this.timeScrubber = new SekindoTimeScrubber(this.uniqueID, this.config)

    if(this.config.isNative)
    {
        this.unMuteBtn.onmouseover = function(){ref.volScrubber.onMouseOver();};
        this.unMuteBtn.onmouseout = function(){ref.volScrubber.onMouseOut();};
        this.muteBtn.onmouseover = function(){ref.volScrubber.onMouseOver();};
        this.muteBtn.onmouseout = function(){ref.volScrubber.onMouseOut();};
        this.volScrubber.container.onmouseover = function(){ref.volScrubber.onMouseOver();};
        this.volScrubber.container.onmouseout = function(){ref.volScrubber.onMouseOut();};
    }
    else
    {
        this.volScrubber.onMouseOver();
    }

    window['sekindoBus'+this.uniqueID].triggerNote('addChild', {visual:this.timeScrubber.container,destiny:'bar'});
    window['sekindoBus'+this.uniqueID].triggerNote('addChild', {visual:this.container,destiny:'bar'});
    window['sekindoBus'+this.uniqueID].triggerNote('addChild', {visual:this.txtBox,destiny:'header'});

    window['sekindoBus'+this.uniqueID].addCallBack('changeTitle', function(val){ref.changeTitle(val);});
    window['sekindoBus'+this.uniqueID].addCallBack('onVideoEvent', function(val){ref.onVideoEvent(val);});
    window['sekindoBus'+this.uniqueID].addCallBack('onVideoProgress', function(val){ref.onVideoEvent({type:'onVideoProgress',val:val});});
    window['sekindoBus'+this.uniqueID].addCallBack('adCompleted', function(){ref.onAdEvent(false);});
    window['sekindoBus'+this.uniqueID].addCallBack('adStarted', function(val){ref.onAdEvent(true, val);});
};

SekindoCBar.prototype.onAdEvent = function onAdEvent(adStarted, adType)
{
    if(adStarted)
    {
        this.adPlayStatus = true;
        this.timeScrubber.adPlayStatus = true;
        if(adType == 'vpaid')
        {
            this.container.style.display = 'none';
            this.timeScrubber.container.style.display = 'none';
            this.txtBox.style.display = 'none';
        }
    }
    else
    {
        this.adPlayStatus = false;
        this.timeScrubber.adPlayStatus = false;
        this.container.style.display = 'block';
        this.timeScrubber.container.style.display = 'block';
        this.txtBox.style.display = 'block';
    }
};
SekindoCBar.prototype.onVideoEvent = function onVideoEvent(val)
{
    switch (val.type){

        case 'volumechange':
            if(val.val)
            {
                this.muteBtn.style.display = 'none';
                this.unMuteBtn.style.display = 'block';
            }
            else
            {
                this.muteBtn.style.display = 'block';
                this.unMuteBtn.style.display = 'none';
            }
            break;
        case 'playing':
            this.pauseBtn.style.display = 'block';
            this.playBtn.style.display = 'none';
            break;
        case 'pause':
            this.pauseBtn.style.display = 'none';
            this.playBtn.style.display = 'block';
            break;
        case 'onVideoProgress':

            this.timeScrubber.onTimeEvent(val.val);
            var txt1 = timeToString(val.val.currTime)+'/'+timeToString(val.val.duration);
            this.timeProgressBox.innerHTML = '<font size="1px" color="#f0ffff" type="Arial">'+txt1+'</font>';
            break;
    }

    function timeToString(val)
    {
        var time = val?Math.round(val):0;
        var min = Math.floor(time/60);
        var sec = time%60;
        sec < 10? sec = '0'+sec : sec= sec;
        return min+':'+sec;
    }
};

SekindoCBar.prototype.changeTitle = function changeTitle(val)
{
    this.txtBox.innerHTML = '<font size="2px" color="#f0ffff" type="Arial">'+val+'</font>';
    this.txtBox.style.zIndex = 100000;
};

function SekindoTimeScrubber(uniqueID, config)
{
    var ref = this;
    this.uniqueID = uniqueID;
    this.config = config;
    this.dragging = false;
    this.adPlayStatus = false;
    this.container = this.config.iframeDoc.createElement('div');
    this.container.style.textAlign = 'left';
    this.container.style.direction = 'ltr';
    this.container.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/timeScrubberBG.png)";
    this.container.style.backgroundRepeat = "repeat-x";
    this.container.style.width = this.config.width+'px';
    this.container.style.height = '6px';
    this.container.style.position = "relative";
    this.container.style.left ="0px";
    this.container.style.bottom = "0px";

    this.loadBar = this.config.iframeDoc.createElement('div');
    this.loadBar.style.textAlign = 'left';
    this.loadBar.style.direction = 'ltr';
    this.loadBar.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/timeScrubberLoad.png)";
    this.loadBar.style.backgroundRepeat = "repeat-x";
    this.loadBar.style.width = '0px';
    this.loadBar.style.height = '6px';
    this.loadBar.style.position = "absolute";
    this.loadBar.style.left ="0px";
    this.loadBar.style.bottom = "0px";
    this.loadBar.style.zIndex = 1;
    this.loadBar.style.cursor = 'pointer';
    this.container.appendChild(this.loadBar);

    this.timeBar = this.config.iframeDoc.createElement('div');
    this.timeBar.style.textAlign = 'left';
    this.timeBar.style.direction = 'ltr';
    this.timeBar.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/timeScrubberProgress.png)";
    this.timeBar.style.backgroundRepeat = "repeat-x";
    this.timeBar.style.width = '0px';
    this.timeBar.style.height = '6px';
    this.timeBar.style.position = "absolute";
    this.timeBar.style.left ="0px";
    this.timeBar.style.bottom = "0px";
    this.timeBar.style.zIndex = 2;
    this.timeBar.style.cursor = 'pointer';
    this.container.appendChild(this.timeBar);
    this.addDragEvents()
};

SekindoTimeScrubber.prototype.onTimeEvent = function onTimeEvent(val)
{
    this.loadBar.style.width = val.loaded/val.duration*100+'%';
    if(!this.dragging)this.timeBar.style.width = val.currTime/val.duration*100+'%';
};

SekindoTimeScrubber.prototype.addDragEvents = function addDragEvents()
{
    var ref = this;

    this.loadBar.addEventListener('mousedown', onMouseDown, false);
    this.timeBar.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    this.config.iFrame.contentWindow.document.body.addEventListener('mouseup', onMouseUp, false);
    function onMouseUp()
    {
        ref.dragging = false;
        ref.loadBar.removeEventListener('mousemove', divMove, false);
        ref.timeBar.removeEventListener('mousemove', divMove, false);
    }

    function onMouseDown(e){
        if(ref.adPlayStatus)return;
        ref.dragging = true;
        ref.timeBar.style.width = Math.max(0,(e.offsetX)) + 'px';
        ref.loadBar.addEventListener('mousemove', divMove, false);
        ref.timeBar.addEventListener('mousemove', divMove, false);
        var time = Math.min(1, Math.max(0, e.offsetX/ref.config.width));
        window['sekindoBus'+ref.uniqueID].triggerNote('timeScrabber', time);
    }

    function divMove(e){
        if(ref.adPlayStatus)return;
        ref.timeBar.style.width = Math.max(0,(e.offsetX)) + 'px';
        var time = Math.min(1, Math.max(0, e.offsetX/ref.config.width));
        window['sekindoBus'+ref.uniqueID].triggerNote('timeScrabber', time);
    }
};


function SekindoVolScrubber(uniqueID, config)
{
    this.config = config;
    this.uniqueID = uniqueID;
    this.timeProgressBox = null;
    this.container = this.config.iframeDoc.createElement('div');
    this.container.style.textAlign = 'right';
    this.container.style.direction = 'ltr';
    this.container.style.width = '2px';
    this.container.style.height = '25px';
    this.container.style.position = "relative";
    this.container.style.left ="0px";
    this.container.style.top = "0px";
    this.container.style.cursor = 'pointer';
    this.container.style.overflow = 'hidden';

    this.scrubBG = this.config.iframeDoc.createElement('div');
    this.scrubBG.style.textAlign = 'left';
    this.scrubBG.style.direction = 'ltr';
    this.scrubBG.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/volScrubBG.png)";
    this.scrubBG.style.width = '61px';
    this.scrubBG.style.height = '25px';
    this.scrubBG.style.position = "absolute";
    this.scrubBG.style.right ="0px";
    this.scrubBG.style.top = "0px";
    this.scrubBG.style.zIndex = 100000;
    this.scrubBG.style.overflow = 'hidden';

    this.scrubber = this.config.iframeDoc.createElement('div');
    this.scrubber.style.background = "url("+this.config.absolutePath+"/content/video/splayer/assets/volScrubBar.png)";
    this.scrubber.style.width = '61px';
    this.scrubber.style.height = '25px';
    this.scrubber.style.position = "absolute";
    this.scrubber.style.left = this.config.volume * -61 +"px";//TODO set it by volume param
    this.scrubber.style.top = "0px";
    this.scrubber.style.zIndex = 100000;

    this.cover = this.config.iframeDoc.createElement('div');
    this.cover.style.width = '61px';
    this.cover.style.height = '25px';
    this.cover.style.position = "absolute";
    this.cover.style.left ="0px";
    this.cover.style.top = "0px";
    this.cover.style.zIndex = 100000;
    this.container.appendChild(this.scrubBG);
    this.scrubBG.appendChild(this.scrubber);
    this.container.appendChild(this.cover);

    this.addDragEvents()
};

SekindoVolScrubber.prototype.addDragEvents = function addDragEvents()
{
    var ref = this;
    this.cover.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    this.config.iFrame.contentWindow.document.body.addEventListener('mouseup', onMouseUp, false);
    function onMouseUp()
    {
        ref.cover.removeEventListener('mousemove', divMove, false);
    }

    function onMouseDown(e){
        ref.scrubber.style.left = Math.min(0,(e.offsetX - 52)) + 'px';
        ref.cover.addEventListener('mousemove', divMove, false);
        var vol = Math.min(1, Math.max(0, e.offsetX/52));
        window['sekindoBus'+ref.uniqueID].triggerNote('volumeScrabber', vol);
    }

    function divMove(e){
        ref.scrubber.style.left = Math.min(0,(e.offsetX - 52)) + 'px';
        var vol = Math.min(1, Math.max(0, e.offsetX/52));
        window['sekindoBus'+ref.uniqueID].triggerNote('volumeScrabber', vol);
    }
};


SekindoVolScrubber.prototype.onMouseOver = function onMouseOver()
{
    var ref = this;
    var animateBg = function()
    {
        var dist = (71 - ref.container.offsetWidth)/16
        ref.container.style.width = ref.container.offsetWidth + dist + 'px';
        ref.timeProgressBox.style.left = (60 + ref.container.offsetWidth + dist) + 'px';
        if(ref.container.offsetWidth > 59){
            window.clearTimeout(ref.animInterval);
            ref.container.style.width = '61px';
        }
        else
        {
            ref.animInterval = setTimeout(animateBg,20);
        }
    }
    window.clearTimeout(ref.animInterval);
    animateBg();
};


SekindoVolScrubber.prototype.onMouseOut = function onMouseOut()
{
    var ref = this;
    var dist = 62 - ref.container.offsetWidth;
    var animateBg = function()
    {
        dist *= 1.2;
        ref.container.style.width = Math.max(2,(61 - dist)) + 'px';
        ref.timeProgressBox.style.left = Math.max(60,(121 - dist)) + 'px';
        if(ref.container.offsetWidth <= 8){
            window.clearTimeout(ref.animInterval);
            ref.container.style.width = '2px';
        }
        else
        {
            ref.animInterval = setTimeout(animateBg,20);
        }
    }
    window.clearTimeout(ref.animInterval);
    animateBg();
};/**
 * Created by tamirg on 14/06/2015.
 */


SekindoVPAIDWrapper = function(config, VPAIDUrl, creativeData, environmentVars, uniqueID)
{
    var ref = this;
    this.uniqueID = uniqueID;
    this.config = config;

    //clear previouse iframe if available
    this.destruct();
    if (this.killTimeOut)clearTimeout(this.killTimeOut);
    if (this.config.killTime && this.config.killTime > 0)
    {
        this.killTimeOut = setTimeout
        (
            function ()
            {
                ref.onAdError('killTimeOut')
            }
            , ref.config.killTime
        );
    }


    if (ref.config.isFlashVpaid)
    {
        ref.VPAIDCreative = ref.config.flashStapler;
        ref.VPAIDCreative.VPAIDUrl = VPAIDUrl;
        environmentVars.videoSlot.style.display = 'none';
        onScriptLoad();
    }
    else
    {
        this.iframe = this.config.iframeDoc.createElement('iframe');
        this.iframe.style.border = "none";
        this.iframe.style.margin = "0px";
        this.iframe.scrolling = "no";
        this.iframe.sandbox = 'allow-scripts allow-same-origin allow-top-navigation allow-pointer-lock allow-forms allow-popups';
        this.iframe.id = 'sekindoVpaidIframe';
        this.VPAIDCreative = null;
        environmentVars.slot.appendChild(this.iframe);

        var iFrameWindow = this.iframe.contentWindow || this.iframe.contentDocument.defaultView;
        var iFrameDoc = iFrameWindow.document || this.iframe.contentDocument;

        iFrameDoc.open();
        iFrameDoc.close();

        var readyStateCheckInterval = setInterval(function () {
            if (iFrameDoc.readyState === "complete") {
                clearInterval(readyStateCheckInterval);
                injectScript();
            }
        }, 10);

        function injectScript()
        {
            var head = iFrameDoc.getElementsByTagName("head")[0];

            ref.script = iFrameDoc.createElement("script");
            ref.script.type = 'text/javascript';
            ref.script.src = VPAIDUrl;

            ref.script.onload = onScriptLoad;

            //Internet explorer
            ref.script.onreadystatechange = function () {
                if (ref.readyState == 'complete')onScriptLoad();
            }
            head.appendChild(ref.script);
        }
    }


    function onScriptLoad()
    {
        if(!ref.VPAIDCreative)ref.VPAIDCreative = iFrameWindow['getVPAIDAd'];

        if (ref.VPAIDCreative && typeof ref.VPAIDCreative == 'function' )
        {
            ref._creative = ref.VPAIDCreative();
        }
        else if (ref.VPAIDCreative && typeof ref.VPAIDCreative == 'object')
        {
            ref._creative = ref.VPAIDCreative;
        }

        if (!ref.checkVPAIDInterface(ref._creative))
        {
            //The VPAIDCreative doesn't conform to the VPAID spec
            return;
        }

        ref.setCallbacksForCreative();
        ref.initAd(ref.config.width, ref.config.height, 'normal', 766, creativeData, environmentVars);
    }
}

SekindoVPAIDWrapper.prototype.checkVPAIDInterface = function(VPAIDCreative) {
    if(VPAIDCreative&&
        //VPAIDCreative.handshakeVersion && typeof VPAIDCreative.handshakeVersion == "function" &&
        VPAIDCreative.initAd && typeof VPAIDCreative.initAd == "function" &&
        VPAIDCreative.startAd && typeof VPAIDCreative.startAd == "function" &&
        VPAIDCreative.stopAd && typeof VPAIDCreative.stopAd == "function" &&
        VPAIDCreative.skipAd && typeof VPAIDCreative.skipAd == "function" &&
        VPAIDCreative.resizeAd && typeof VPAIDCreative.resizeAd == "function" &&
        VPAIDCreative.pauseAd && typeof VPAIDCreative.pauseAd == "function" &&
        VPAIDCreative.resumeAd && typeof VPAIDCreative.resumeAd == "function" &&
        VPAIDCreative.expandAd && typeof VPAIDCreative.expandAd == "function" &&
        VPAIDCreative.collapseAd && typeof VPAIDCreative.collapseAd == "function" &&
        VPAIDCreative.subscribe && typeof VPAIDCreative.subscribe == "function" &&
        VPAIDCreative.unsubscribe && typeof VPAIDCreative.unsubscribe == "function" )
    {
        return true;
    }
    return false;
};
// This function registers the callbacks of each of the events
SekindoVPAIDWrapper.prototype.setCallbacksForCreative = function()
{
    var ref = this;
    //The key of the object is the event name and the value is a reference to the callback function that is registered with the creative
    var callbacks = {
        AdStarted : this.onStartAd,
        AdStopped : this.onStopAd,
        AdSkipped : this.onSkipAd,
        AdLoaded : this.onAdLoaded,
        AdLinearChange : this.onAdLinearChange,
        AdSizeChange : this.onAdSizeChange,
        AdExpandedChange : this.onAdExpandedChange,
        AdSkippableStateChange : this.onAdSkippableStateChange,
        AdDurationChange : this.onAdDurationChange,
        AdRemainingTimeChange : this.onAdRemainingTimeChange,
        AdVolumeChange : this.onAdVolumeChange,
        AdImpression : this.onAdImpression,
        AdClickThru : this.onAdClickThru,
        AdInteraction : this.onAdInteraction,
        AdVideoStart : this.onAdVideoStart,
        AdVideoFirstQuartile : this.onAdVideoFirstQuartile,
        AdVideoMidpoint : this.onAdVideoMidpoint,
        AdVideoThirdQuartile : this.onAdVideoThirdQuartile,
        AdVideoComplete : this.onAdVideoComplete,
        AdUserAcceptInvitation : this.onAdUserAcceptInvitation,
        AdUserMinimize : this.onAdUserMinimize,
        AdUserClose : this.onAdUserClose,
        AdPaused : this.onAdPaused,
        AdPlaying : this.onAdPlaying,
        AdError : this.onAdError,
        AdLog : this.onAdLog
    };

    // Looping through the object and registering each of the callbacks with the creative
    for ( var eventName in callbacks)
    {
        this._creative.subscribe(callbacks[eventName], String(eventName), this)
    }
};
// Pass through for initAd - when the video player wants to call the ad
SekindoVPAIDWrapper.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars)
{
    environmentVars.videoSlotCanAutoPlay = true;
    this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
};
// Callback for AdPaused


SekindoVPAIDWrapper.prototype.onAdPaused = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdPaused');
};
// Callback for AdPlaying
SekindoVPAIDWrapper.prototype.onAdPlaying = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdPlaying');
};
// Callback for AdError
SekindoVPAIDWrapper.prototype.onAdError = function(message)
{
    if(message.indexOf('Event:AdImpression')!= -1){
       return;
    }
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdError');
    this.destruct();
};
// Callback for AdLog
SekindoVPAIDWrapper.prototype.onAdLog = function(message)
{
    //console.log("onAdLog: " + message);
};
// Callback for AdUserAcceptInvitation
SekindoVPAIDWrapper.prototype.onAdUserAcceptInvitation = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdUserAcceptInvitation');
};
// Callback for AdUserMinimize
SekindoVPAIDWrapper.prototype.onAdUserMinimize = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdUserMinimize');
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdUserClose = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdUserClose');
    this.destruct();
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdSkippableStateChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdSkippableStateChange', val:this._creative.getAdSkippableState()});
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdExpandedChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdExpandedChange', val:this._creative.getAdExpanded()});
};
// Pass through for getAdExpanded
SekindoVPAIDWrapper.prototype.getAdExpanded = function()
{
    return this._creative.getAdExpanded();
};
// Pass through for getAdSkippableState
SekindoVPAIDWrapper.prototype.getAdSkippableState = function()
{
    return this._creative.getAdSkippableState();
};
// Callback for AdSizeChange
SekindoVPAIDWrapper.prototype.onAdSizeChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdSizeChange', width:this._creative.getAdWidth(), height:this._creative.getAdHeight()});
};
// Callback for AdDurationChange
SekindoVPAIDWrapper.prototype.onAdDurationChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdDurationChange', val:this._creative.getAdDuration()});
};
// Callback for AdRemainingTimeChange
SekindoVPAIDWrapper.prototype.onAdRemainingTimeChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdRemainingTimeChange', val:this._creative.getAdRemainingTime()});
};
// Pass through for getAdRemainingTime
SekindoVPAIDWrapper.prototype.getAdRemainingTime = function()
{
    return this._creative.getAdRemainingTime();
};
// Callback for AdImpression
SekindoVPAIDWrapper.prototype.onAdImpression = function()
{
    var ref = this;
    clearInterval(ref.killTimeOut);
    this.hadImpression = true;
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdImpression');
    if(this.impressionTimer)clearTimeout(this.impressionTimer);
    if(this.config.impressionTimeout && this.config.impressionTimeout>0)this.impressionTimer = setTimeout(function(){ref.onAdError('impressionTimer')},ref.config.impressionTimeout);
};
// Callback for AdClickThru
SekindoVPAIDWrapper.prototype.onAdClickThru = function(url, id, playerHandles)
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdClickThru');
};
// Callback for AdInteraction
SekindoVPAIDWrapper.prototype.onAdInteraction = function(id)
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdInteraction');
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdVideoStart = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdVideoStart');
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdVideoFirstQuartile = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdVideoFirstQuartile');
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdVideoMidpoint = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdVideoMidpoint');
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onAdVideoThirdQuartile = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdVideoThirdQuartile');
};
// Callback for AdVideoComplete
SekindoVPAIDWrapper.prototype.onAdVideoComplete = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdVideoComplete');
};
// Callback for AdLinearChange
SekindoVPAIDWrapper.prototype.onAdLinearChange = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdLinearChange');
};
// Pass through for getAdLinear
SekindoVPAIDWrapper.prototype.getAdLinear = function()
{
    return this._creative.getAdLinear();
};
// Pass through for startAd()
SekindoVPAIDWrapper.prototype.startAd = function()
{
    this._creative.startAd();
};
// Callback for AdLoaded

SekindoVPAIDWrapper.prototype.onAdLoaded = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onAdLoaded');
    this.startAd();
};
// Callback for StartAd()
SekindoVPAIDWrapper.prototype.onStartAd = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onStartAd');
};
//Pass through for stopAd()
SekindoVPAIDWrapper.prototype.stopAd = function()
{
    this._creative.stopAd();
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onStopAd = function()
{
    var ref = this;
    setTimeout(function (){
        window['sekindoBus'+ref.uniqueID].triggerNote('vpaidEvent', 'onStopAd');
        ref.destruct();
    }, 2)
};
// Callback for AdUserClose
SekindoVPAIDWrapper.prototype.onSkipAd = function()
{
    window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', 'onSkipAd');
    this.destruct();
};
//Passthrough for setAdVolume
SekindoVPAIDWrapper.prototype.setAdVolume = function(val)
{
    this._creative.setAdVolume(val);
};
//Passthrough for getAdVolume
SekindoVPAIDWrapper.prototype.getAdVolume = function()
{
    return this._creative.getAdVolume();
};
// Callback for AdVolumeChange
SekindoVPAIDWrapper.prototype.onAdVolumeChange = function()
{
    if(this.hadImpression)window['sekindoBus'+this.uniqueID].triggerNote('vpaidEvent', {type:'onAdVolumeChange',val:this._creative.getAdVolume()});
};
//Passthrough for resizeAd
SekindoVPAIDWrapper.prototype.resizeAd = function(width, height, viewMode)
{
    this._creative.resizeAd(width, height, viewMode);
};
//Passthrough for pauseAd()
SekindoVPAIDWrapper.prototype.pauseAd = function()
{
    this._creative.pauseAd();
};
//Passthrough for resumeAd()
SekindoVPAIDWrapper.prototype.resumeAd = function()
{
    this._creative.resumeAd();
};
//Passthrough for expandAd()
SekindoVPAIDWrapper.prototype.expandAd = function()
{
    this._creative.expandAd();
};
//Passthrough for collapseAd()
SekindoVPAIDWrapper.prototype.collapseAd = function()
{
    this._creative.collapseAd();
};

SekindoVPAIDWrapper.prototype.destruct = function()
{
    var ref = this;
    clearInterval(ref.killTimeOut);
    clearInterval(ref.impressionTimer);
    if(this.VPAIDCreative && this.VPAIDCreative.destruct)this.VPAIDCreative.destruct();

    var iframe1 = document.getElementById('sekindoVpaidIframe');

    if(iframe1 && iframe1.parentNode)iframe1.parentNode.removeChild(iframe1);

    try
    {
        var allsuspects = document.getElementsByTagName("script");
        for (var i = allsuspects.length; i >= 0; i--)
        {
            if (allsuspects[i] && allsuspects[i].getAttribute("src") != null && allsuspects[i].getAttribute("src").indexOf(ref.script.src)!=-1)
            {
                allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
            }
        }
    }
    catch(e){}
};

/**
 * Created by tamirg on 12/11/2015.
 */

SekindoFlashVpaid = function(config)
{

    var ref = this;
    this.config = config;
    this.flashIsLoaded = false;
    this.adEventCallbacks = [];
    this.VPAIDUrl = null;
    this.adInited = false;
    this.constructFlash();

}
SekindoFlashVpaid.prototype.constructFlash = function()
{
    var ref = this;
    this.VPAIDCreative = null;

    function injectScript()
    {
        ref.videoDiv = document.createElement("div");
        ref.width = 300;
        ref.height = 200;
        ref.videoDiv.style.background = "white";
        ref.videoDiv.style.marginLeft = 'auto';//Center div in explorer
        ref.videoDiv.style.marginRight = 'auto';//Center div in explorer
        ref.videoDiv.style.position = 'absolute';
        ref.videoDiv.style.zIndex = 10000;
        ref.videoDiv.style.left = "-10000px";
        ref.videoDiv.style.top = "0px";

        var adManagerUrl = ref.config.absolutePath+'/content/video/splayer/jsStapler_v'+ref.config.staplerVersion+'.swf';
        ///generate flash object
        var innetHTML = '';
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
            innetHTML =   '<object ' +
            'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' +
            'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ' +
            'width="'+ref.width+'" ' +
            'height="'+ref.height+'" ' +
            'id="flashObj'+ref.config.uniqueID+'" ' +
            'align="middle">' +
            '<param name="allowScriptAccess" value="always" />' +
            '<param name="allowFullScreen" value="true" />' +
            '<param name="movie" value="'+adManagerUrl+'" />' +
            '<param name="loop" value="false" />' +
            '<param name="quality" value="high" />' +
            '<param name="bgcolor" value="#000000" />' +
            '<param name="wmode" value="window" />'+
            '</object>'
        }
        else
        {
            innetHTML =   '<object ' +
            'width="'+ref.width+'" ' +
            'height="'+ref.height+'" ' +
            'id="flashObj'+ref.config.uniqueID+'" ' +
            'data="'+adManagerUrl+'" '+
            'type="application/x-shockwave-flash"> '+
            '<param name="allowfullscreen" value="true" />'+
            '<param name="movie" value="'+adManagerUrl+'" />' +
            '<param name="allowscriptaccess" value="always" />'+
            '<param name="quality" value="high" />'+
            '<param name="bgcolor" value="#000000" />'+
            '<param name="wmode" value="window" />'+
            '</object>'
        }

        ref.videoDiv.innerHTML = innetHTML;

        //Insert a flash object to the div
        ref.config.mainDiv.appendChild(ref.videoDiv);


        //Set refference ot the object
        ref.flashObj = document.getElementById("flashObj"+ref.config.uniqueID);

        var isMainDiv = 'false';
        if (typeof (ref.config.mainDiv) != undefined && typeof (ref.config.mainDiv) != null && typeof (ref.config.mainDiv) != 'undefined') {
            isMainDiv = 'true';
        }

        var isFlashObj = 'false';
        if (typeof (ref.flashObj) != undefined && typeof (ref.flashObj) != null && typeof (ref.flashObj) != 'undefined') {
            isFlashObj = 'true';
        }
    }
    injectScript();
};

SekindoFlashVpaid.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars)
{
    if(this.adInited)return;
    this.adInited = true;
    var ref = this;

    this.width = width;
    this.height = height;
    this.videoDiv.style.width = this.width+"px";
    this.videoDiv.style.height =  this.height+"px";
    this.videoDiv.style.left = "-10000px";
    this.videoDiv.style.top = "0px";
    this.flashObj.width = this.width;
    this.flashObj.height = this.height;

    this.viewMode = viewMode;
    this.desiredBitrate = desiredBitrate;
    this.creativeData = creativeData;
    this.environmentVars = environmentVars;

    ////init the flash
    var isVpaidLoadedInterval = null;
    if(this.flashIsLoaded)
    {
        ref.flashObj.callFlash('addJsListenersAndLoad', 'onAdEvent'+ref.config.uniqueID, ref.VPAIDUrl);
        isVpaidLoadedInterval = setInterval(initVpaid,100);
    }
    else
    {
        var isFlashLoadedInterval = setInterval(function(){loadVpaid()},100);
        var flashConstructTimeout = setTimeout(function(){loadVpaid(true)},10000);
    }

    function loadVpaid(timeout)
    {
        if(timeout)
        {
            clearInterval(isFlashLoadedInterval);
            ref.destructFlash();
            ref.constructFlash();
            return;
        }
        var result = false;
        try
        {
            result = ref.flashObj.callFlash('isFlashLoaded');
        }
        catch(e)
        {
            result = false;
        }
        if(result)
        {
            ref.flashIsLoaded = true;
            clearInterval(isFlashLoadedInterval);
            clearTimeout(flashConstructTimeout);
            ref.flashObj.callFlash('addJsListenersAndLoad', 'onAdEvent'+ref.config.uniqueID, ref.VPAIDUrl);
            isVpaidLoadedInterval = setInterval(function(){initVpaid();},100);
        }
    }

    function initVpaid()
    {
        var result = false;
        try
        {
            result = ref.flashObj.callFlash('isVpaidLoaded');
        }
        catch(e)
        {
            result = false;
        }

        if(result)
        {
            clearInterval(isVpaidLoadedInterval);
            var creativeData = ref.creativeData?String(ref.creativeData):'';
            ref.flashObj.callFlash('initAd', ref.width, ref.height, ref.viewMode, ref.desiredBitrate, creativeData, '');
        }
    }


    window['onAdEvent'+ref.config.uniqueID] = function(e, msg)
    {
        if(e == 'AdImpression')
        {
            ref.videoDiv.style.left = '0px';
        }
        ref.adEventCallbacks[e](msg);
    }
};

SekindoFlashVpaid.prototype.subscribe = function(aCallback, eventName, aContext)
{
    this.aContext = aContext;
    this.adEventCallbacks[eventName] = aCallback.bind(aContext);
};

SekindoFlashVpaid.prototype.startAd = function()
{
    return this.flashObj.callFlash('startAd');
};

SekindoFlashVpaid.prototype.stopAd = function(e, p)
{
    return this.callFlash('stopAd');
};

SekindoFlashVpaid.prototype.setAdVolume = function(val)
{
    return this.callFlash('setAdVolume', val);
};

SekindoFlashVpaid.prototype.getAdVolume = function()
{
    return this.callFlash('getAdVolume');
};

SekindoFlashVpaid.prototype.resizeAd = function(width, height, viewMode)
{
    return this.callFlash('resizeAd', width, height, viewMode);
};

SekindoFlashVpaid.prototype.pauseAd = function()
{
    return this.callFlash('pauseAd');
};

SekindoFlashVpaid.prototype.resumeAd = function()
{
    return this.callFlash('resumeAd');
};

SekindoFlashVpaid.prototype.expandAd = function()
{
    return this.callFlash('expandAd');
};

SekindoFlashVpaid.prototype.getAdExpanded = function(val)
{
    return this.callFlash('getAdExpanded');
};

SekindoFlashVpaid.prototype.getAdSkippableState = function(val)
{
    return this.callFlash('getAdSkippableState');
};

SekindoFlashVpaid.prototype.collapseAd = function()
{
    return this.callFlash('collapseAd');
};

SekindoFlashVpaid.prototype.skipAd = function()
{
    return this.callFlash('skipAd');
};

SekindoFlashVpaid.prototype.unsubscribe = function(eventName)
{

};

SekindoFlashVpaid.prototype.callFlash = function ()
{
    try
    {
        return this.flashObj.callFlash.apply(this, arguments);
    }
    catch(e)
    {

    }
};

SekindoFlashVpaid.prototype.destruct = function()
{
    var ref = this;
    this.adInited = false;
    this.flashObj.callFlash('destruct');
    this.videoDiv.style.left = "-10000px";
    this.adEventCallbacks = [];
};

SekindoFlashVpaid.prototype.destructFlash = function()
{
    var ref = this;
    this.adInited = false;
    this.flashIsLoaded = false;
    this.config.mainDiv.removeChild(ref.videoDiv);
};/**
 * Created by tamirg on 03/05/15.
 */

function SekindoDebugConsole (uniqueID, containerDiv)
{
    var ref = this;
    this.uniqueID = uniqueID;
    this.txtBox = document.createElement("TextArea");

    this.txtBox.style.width = '200px';
    this.txtBox.style.height = '200px';
    this.txtBox.style.textAlign  = 'left';
    this.txtBox.style.direction = "ltr";
    this.txtBox.style.align = "center";
    this.txtBox.style.marginLeft = 'auto';//Center div in explorer
    this.txtBox.style.marginRight = 'auto';//Center div in explorer
    containerDiv.appendChild(this.txtBox); // put it into the DOM
    this.txtBox.value = 'blabla';

    window.onerror = function (errorMsg, url, lineNumber, column, errorObj)
    {
        ref.txtBox.value += '\n' + '--------------------\n'  + lineNumber + ' - '  + errorMsg  + '\n' ;//+ lineNumber + ' - '  + errorObj?errorObj:''
        ref.txtBox.scrollTop = ref.txtBox.scrollHeight;
    };
    window.onlog = function (logMsg)
    {
        ref.txtBox.value += '\n' + '--------------------\n'  + logMsg +  '\n' ;//+ lineNumber + ' - '  + errorObj?errorObj:''
        ref.txtBox.scrollTop = ref.txtBox.scrollHeight;
    };

};

/**
 * Created by tamirg on 15/12/2015.
 */
function SekindoUtils(){};

SekindoUtils.scriptOptimizer = function()
{
    // avoid IE script errors on log
    if (!window.console)
    {
        Window.prototype.console = {};
        Window.prototype.console.error = function(msg) {};
        Window.prototype.console.info = function(msg) {};
        Window.prototype.console.log = function(msg) {};
        Window.prototype.console.warn = function(msg) {};
    }

    // reduce reported errors to console
    function silentErrorHandler() {return true;};
    //window.onerror = silentErrorHandler;
    //console.error = silentErrorHandler;

    //Disable scroll to ad
    Element.prototype.scrollIntoView = function(){};

    // Disable geo location
    navigator.geolocation.getCurrentPosition = function(success, error)
    {
        error({code:0});
    };
    navigator.geolocation.watchPosition= function(success, error)
    {
        error({code:0});
    };

    // unify window.requestAnimationFrame for all browsers
    (function()
    {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
        {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
                window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
        {
            window.requestAnimationFrame = function(callback, element)
            {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }


        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id)
            {
                clearTimeout(id);
            };
    }());

}
SekindoUtils.isElementInViewPort = function(e, w)
{
    function getViewportSize(w)
    {
        var w = w || window;
        if(w.innerWidth != null) return {w:w.innerWidth, h:w.innerHeight};
        var d = w.document;
        if (document.compatMode == "CSS1Compat")
        {
            return{
                w: d.documentElement.clientWidth,
                h: d.documentElement.clientHeight
            };
        }
        return { w: d.body.clientWidth, h: d.body.clientWidth };
    }

    function isViewportVisible(e, w)
    {
        if(w.document.visibilityState != 'visible')return false;
        if(w.parent != w)
        {
            var res = isViewportVisible(w.frameElement, w.parent);
            if(!res)return false;
        }
        var result = true;
        var box = e.getBoundingClientRect();
        var height = box.height || (box.bottom - box.top);
        var width = box.width || (box.right - box.left);
        var viewport = getViewportSize(w);
        if(!height || !width) result = false;
        if(box.top > viewport.h || box.bottom < 0) result = false;
        if(box.right < 0 || box.left > viewport.w) result = false;

        return result;
    }
    return isViewportVisible(e, w);
}

SekindoUtils.firePixel = function firePixel(url)
{
    if (!url || url == '')return;
    url += '&cbuster=' + (new Date().getTime().toString());
    try
    {
        var oImg = document.createElement("img");
        oImg.setAttribute('src', url);
        oImg.setAttribute('height', '0px');
        oImg.setAttribute('width', '0px');
        oImg.style.display = "none";
        document.body.appendChild(oImg);
    }
    catch(e)
    {
        var code = '<img src="'+url+'" height="0px" width="0px" ></img>';
        document.write(code);
    }

};/**
 * Created by tamirg on 30/03/15.
 */
function SekindoView(uniqueID, containerDiv, callBack, config) {
    this.uniqueID = uniqueID;
    this.config = config;
    var ref = this;
    this.videoItem = null;

    //create iframe to avoide style inheritance
    this.iFrame = this.config.iFrame;//document.createElement('iframe');
    this.iFrame.style.width = this.config.width + 'px';
    this.iFrame.style.height = this.config.height + 'px';
    this.iFrame.scrolling = "no";
    this.iFrame.frameBorder = "0";
    this.construct();
    callBack();
}
SekindoView.prototype.construct = function construct()
{
    var ref = this;

    this.containerDiv = this.config.iframeDoc.createElement("div");
    var doc;
    // Firefox, Opera
    if(this.iFrame.contentDocument) doc = this.iFrame.contentDocument;
    // Internet Explorer
    else if(this.iFrame.contentWindow) doc = this.iFrame.contentWindow.document;

    this.config.iframeDoc.body.appendChild(this.containerDiv);
    this.config.iframeDoc.body.style.padding = 0;
    this.config.iframeDoc.body.style.margin = 0;

    this.containerDiv.style.width = this.config.width+'px';
    this.containerDiv.style.height = this.config.height+'px';

    //Create a video player div
    this.videoDiv = this.config.iframeDoc.createElement("div");
    this.videoDiv.style.width = this.config.width+'px';
    this.videoDiv.style.height = this.config.height+'px';
    this.videoDiv.style.position = 'absolute';
    this.videoDiv.style.background = "black";
    this.videoDiv.style.marginLeft = 'auto';//Center div in explorer
    this.videoDiv.style.marginRight = 'auto';//Center div in explorer
    this.videoDiv.style.marginTop = 'auto';//Center div in explorer
    this.videoDiv.style.marginBottom = 'auto';//Center div in explorer
    this.videoDiv.style.zIndex = 1;
    this.videoDiv.style.top = "0px";
    this.videoDiv.onclick = onVideoClick;
    this.containerDiv.appendChild(this.videoDiv);

    this.bar = this.config.iframeDoc.createElement("div");
    this.bar.style.width = this.config.width+'px';
    this.bar.style.height = '31px';
    this.bar.style.marginLeft = 'auto';//Center div in explorer
    this.bar.style.marginRight = 'auto';//Center div in explorer
    this.bar.style.textAlign = 'center';
    this.bar.style.left ="0px";
    this.bar.style.bottom = "0px";
    this.bar.style.zIndex = 10000000000;
    this.bar.style.position = "absolute";
    this.containerDiv.appendChild(this.bar);

    this.header = this.config.iframeDoc.createElement("div");
    this.header.style.width = this.config.width+'px';
    this.header.style.height = '25px';
    this.header.style.marginLeft = 'auto';//Center div in explorer
    this.header.style.marginRight = 'auto';//Center div in explorer
    this.header.style.textAlign = 'center';
    this.header.style.left ="0px";
    this.header.style.top = "0px";
    this.header.style.zIndex = 10000000000;
    this.header.style.position = "absolute";
    this.containerDiv.appendChild(this.header);

    window['sekindoBus'+this.uniqueID].addCallBack('addChild', function(val){ref.addChild(val)});
    function onVideoClick()
    {
        var url = ref.config.contentClickUrl;
        if(!validURL(url))return;
        window.open(url, "_blank");
    }
    function validURL(str)
    {
        var regex = /^https?:/;
        if(!regex .test(str))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

};

SekindoView.prototype.addChild = function addChild(params)
{
    switch(params.destiny)
    {
        case "video":

            params.visual.style.top = "0px";

            this.videoItem = params.visual;
            this.videoDiv.appendChild(params.visual);

            break;
        case "videoAd":

            params.visual.style.top = "0px";

            this.videoItem = params.visual;
            this.vpaidDiv.appendChild(params.visual);

            break;
        case "bar":

            this.bar.appendChild(params.visual);

            break;
        case "header":

            this.header.appendChild(params.visual);

            break;
    }
};/**
 * Created by tamirg on 30/03/15.
 */

function SekindoSPlayer(config, uniqueID)
{
    var ref = this;
    this.config = config;
    this.config.isNative = (this.config.isNative == true || this.config.isNative == 'true');
    this.uniqueID = uniqueID;
    this.config.uniqueID = uniqueID;
    this.mouseOnStage = false;
    this.mouseEnterTimeOut = null;
    this.config.soundEnabledByUser = false;
    this.config.isMuted = (this.config.mute == true || this.config.mute == 'true');
    this.hadImpression = false;
    this.config.doc = document;
    this.isFloating = false;

    if(document && document.readyState && document.readyState == 'complete')
    {
        ref.currentScript = document.currentScript || (function() {var scripts = document.getElementsByTagName('script');return scripts[scripts.length - 1];})();

        var mainDiv = document.createElement('div');
        mainDiv.id = 'SekiNdo-SPlayer-Div-'+ref.uniqueID;

        var iframe = document.createElement('iframe');
        iframe.id = 'SekiNdo-SPlayer-iFrame-'+ref.uniqueID;
        iframe.style.position = 'absolute';
        iframe.style.marginLeft = 'auto';//Center div in explorer
        iframe.style.marginRight = 'auto';//Center div in explorer
        iframe.style.top = '-0px';
        iframe.style.left = '-1000px';
        iframe.style.marginLeft = '0';
        mainDiv.appendChild(iframe);

        if(ref.currentScript && ref.currentScript.parentNode)
        {
            ref.currentScript.parentNode.insertBefore(mainDiv, ref.currentScript)
            ref.parentNode = ref.currentScript.parentNode;
            iframe.style.position = 'relative';
        }
        else
        {
            document.body.appendChild(mainDiv);
            ref.isFloating = true;
        }

        if(!ref.isNative)
        {
            var audio = document.createElement('AUDIO');
            audio.id = ref.uniqueID+'Audio';
            document.body.appendChild(audio);
        }
        ref.constructContainer(iframe);
    }
    else
    {
        if (!this.isNative)
        {
            var code = '<audio id="' + this.uniqueID + 'Audio"></audio>';
            document.write(code);
        }

        window['construct' + this.uniqueID] = function (iframe)
        {
            if (!ref.config.supportFlashPlayerVersion)
            {
                try
                {
                    ref.constructContainer(iframe);
                }
                catch (e)
                {
                    if (window.addEventListener)
                    {
                        window.addEventListener('load', function () {
                            ref.constructContainer();
                        }, false);
                    }
                    else if (window.attachEvent)
                    {
                        window.attachEvent('onload', function () {
                            ref.constructContainer();
                        });
                    }
                }
            }
        }

        var code = '<div id="SekiNdo-SPlayer-Div-' + this.uniqueID + '"><iframe src="about:blank" id="SekiNdo-SPlayer-iFrame-' + this.uniqueID + '" onload="construct' + this.uniqueID + '(this)"></iframe></div>';
        document.write(code);

        if (this.config.supportFlashPlayerVersion)
        {
            if (window.addEventListener)
            {
                window.addEventListener('load', function () {
                    ref.constructContainer();
                }, false);
            }
            else if (window.attachEvent)
            {
                window.attachEvent('onload', function () {
                    ref.constructContainer();
                });
            }
        }
    }
};

SekindoSPlayer.prototype.constructContainer = function constructContainer(iframe)
{
    var ref = this;
    SekindoUtils.scriptOptimizer();

    this.adImpTimer = null;

    if(iframe)
    {
        this.iFrame = iframe;
    }
    else
    {
        this.iFrame = document.getElementById('SekiNdo-SPlayer-iFrame-'+this.uniqueID);
    }

    this.iFrame.sandbox = 'allow-scripts allow-same-origin allow-top-navigation allow-pointer-lock allow-forms allow-popups';
    this.iFrame.frameBorder = "0";
    this.iFrame.scrolling = "no";

    this.iFramewindow = this.iFrame.contentWindow || this.iFrame.contentDocument.defaultView;
    this.iFrameDoc = this.iFramewindow.document || this.iFrame.contentDocument;

    this.iFrameDoc.body.style.overflow = 'hidden';

    this.containerDiv = this.iFrameDoc.createElement('div');
    this.iFrameDoc.body.appendChild(this.containerDiv);

    this.config.iFrame = this.iFrame;
    this.config.iframewindow = this.iFramewindow;
    this.config.iframeDoc = this.iFrameDoc;

    this.containerDiv.style.position = 'relative';

    if(this.config.isNative)
    {
        this.containerDiv.onmouseenter = function(){ref.onMouseEnter();};
        this.containerDiv.onmouseleave = function(){ref.onMouseLeave();};
    }

    window['sekindoBus'+this.uniqueID] = new SekindoBus();
    window['sekindoBus'+this.uniqueID].addCallBack('adCompleted', function(){ref.onAdEvent('adCompleted');});
    window['sekindoBus'+this.uniqueID].addCallBack('adStarted', function(){ref.onAdEvent('adStarted');});

    function callback()
    {
        setTimeout(function(){ref.constructPlayer()},0);
    }
    this.viewManager = new SekindoView(this.uniqueID, this.containerDiv, callback, this.config);
    window.onlog = function(){};
    if(this.config.debug == true || this.config.debug == 'true')this.debugger = new SekindoDebugConsole(this.uniqueID, document.body);

    if(this.config.supportFlashPlayerVersion)
    {
        this.config.mainDiv = document.getElementById('SekiNdo-SPlayer-Div-'+this.uniqueID);
        this.config.mainDiv.style.position = 'relative';
        this.config.flashStapler = new SekindoFlashVpaid(ref.config);
    }
};

SekindoSPlayer.prototype.constructPlayer = function constructPlayer()
{
    var ref = this;
    this.controllBar = new SekindoCBar(this.uniqueID, this.config);

    this.adsManager = new SekindoAdsManager(this.uniqueID, this.config, this.viewManager.containerDiv);
    this.playlistManager = new SekindoPlaylistManager(this.uniqueID, this.config);

    window['sekindoBus'+this.uniqueID].addCallBack('onPlay', function(val){ref.onUserEvent('onPlay');});
    window['sekindoBus'+this.uniqueID].addCallBack('onPause', function(val){ref.onUserEvent('onPause');});
    window['sekindoBus'+this.uniqueID].addCallBack('onMute', function(val){ref.onUserEvent('onMute',val);});
    window['sekindoBus'+this.uniqueID].addCallBack('volumeScrabber', function(val){ref.onUserEvent('onVolumeScrabber',val);});
    //window['sekindoBus'+this.uniqueID].addCallBack('contentEnded', function(){ref.onContentEnded();});


    this.playlistManager.videoElement.addEventListener('volumechange', function(val){ref.onVideoEvent(ref.playlistManager.videoElement,val)});
    this.playlistManager.videoElement.addEventListener('playing', function(val){ref.onVideoEvent(ref.playlistManager.videoElement,val)});
    this.playlistManager.videoElement.addEventListener('pause', function(val){ref.onVideoEvent(ref.playlistManager.videoElement,val)});

    this.adsManager.reportVideoEvent = function(_videoElement, val){ref.onVideoEvent(_videoElement, val)};
    this.videoElement = this.playlistManager.videoElement;
    this.audioElement = document.getElementById(this.uniqueID+"Audio");
};

SekindoSPlayer.prototype.onVideoEvent = function onVideoEvent(_videoElement, val)
{
    var ref = this;
    if(_videoElement != this.videoElement)return;
    switch (val.type)
    {
        case 'volumechange':
            var muted = this.videoElement.muted;

            if(ref.videoElement == ref.playlistManager.videoElement)
            {
                if(ref.adsManager.videoElement)ref.adsManager.videoElement.muted = muted
            }
            else
            {
                ref.playlistManager.videoElement.muted = muted;
            }
            setTimeout(function()
            {
                window['sekindoBus'+ref.uniqueID].triggerNote('onVideoEvent', {type:'volumechange',val:ref.videoElement.muted});
            }, 100);
            break;
        case 'playing':
            window['sekindoBus'+ref.uniqueID].triggerNote('onVideoEvent', {type:'playing',val:''});
            break;
        case 'pause':
            window['sekindoBus'+ref.uniqueID].triggerNote('onVideoEvent', {type:'pause',val:''});
            break;
    }
};
SekindoSPlayer.prototype.onContentEnded = function onContentEnded(type)
{
    var ref = this;
    if(this.config.flashStapler && SekindoUtils.isElementInViewPort(this.config.mainDiv, window))
    {
        this.config.flashStapler.destructFlash();
        this.config.flashStapler = new SekindoFlashVpaid(ref.config);
    }
};
SekindoSPlayer.prototype.onAdEvent = function onAdEvent(type)
{
    var ref = this;
    if(type == 'adStarted')
    {
        this.videoElement =  this.adsManager.videoElement;
        this.hadImpression = true;
        if(ref.adImpTimer)
        {
            clearTimeout(ref.adImpTimer);
            ref.adImpTimer = null;
            this.iFrame.style.left = '0px';
        }
    }
    else if(type == 'adCompleted')
    {
        this.videoElement =  this.playlistManager.videoElement;
        if(this.config.adImpTimeout && Number(this.config.adImpTimeout)>0 && this.hadImpression)
        {
            ref.iFrame.parentNode.removeChild(ref.iFrame);
        }
    }
};



SekindoSPlayer.prototype.onUserEvent = function onUserEvent(type, val)
{
    var ref = this;
    switch(type)
    {
        case 'onPlay':
            if(this.videoElement)this.videoElement.play();
             this.adsManager.adsProccessPaused = false;

            //In case of user click to play we enable sound controll by initing audio eelement with silent.mp3
            if(this.config.isNative || this.config.soundEnabledByUser)return;//No need for this opration.
            this.audioElement.src = this.config.absolutePath+'/content/video/splayer/assets/silent.mp3';
            this.audioElement.play();
            this.config.soundEnabledByUser = true;
            break;
        case 'onPause':
            if(this.videoElement)this.videoElement.pause();
            this.adsManager.adsProccessPaused = true;
            break;
        case 'onVolumeScrabber':
            this.config.soundEnabledByUser = true;
            this.playlistManager.videoElement.volume = val;
            if(this.adsManager.videoElement)this.adsManager.videoElement.volume = val;
            this.playlistManager.videoElement.muted = false;
            if(this.adsManager.videoElement)this.adsManager.videoElement.muted = false;
            this.config.isMuted = false;
            this.config.volume = val;
            break;
        case 'onMute':
            if(val)
            {
                this.playlistManager.videoElement.muted = true;
                if(this.adsManager.videoElement)this.adsManager.videoElement.muted = true;
                this.config.isMuted = true;
            }
            else
            {
                this.config.soundEnabledByUser = true;
                this.playlistManager.videoElement.muted = false;
                if(this.adsManager.videoElement)this.adsManager.videoElement.muted = false;
                this.config.isMuted = false;
            }
            break;
    }
};

SekindoSPlayer.prototype.onMouseEnter = function onMouseEnter()
{
    var ref = this;
    if(!this.mouseOnStage)
    {
        this.mouseOnStage = true;
        this.mouseEnterTimeOut = setTimeout(function()
        {
            ref.playlistManager.videoElement.muted = false;
            if(ref.adsManager.videoElement)ref.adsManager.videoElement.muted = false;
        }, 3000)
    }
};

SekindoSPlayer.prototype.onMouseLeave = function onMouseLeave()
{
    var ref = this;
    this.mouseOnStage = false;
    clearInterval(ref.mouseEnterTimeOut);
    this.mouseEnterTimeOut = null;

    if(!this.config.isMuted)return;

    this.playlistManager.videoElement.muted = true;
    if(this.adsManager.videoElement)this.adsManager.videoElement.muted = true;
};

// <script type="text/javascript">

	//adaptv detection support
	if(document.readyState != 'complete')
	{
		var code = '<script type="text/javascript" language="javascript" src="http://redir.Adap.tv/redir/javascript/lightintegration.js"></script>';
		document.write(code);
	}

	var configPlayer = new Object();
	configPlayer.width = 300;
	configPlayer.height = 250;
	configPlayer.logoClickUrl = 'http://www.sekindo.com';
	configPlayer.logoType = 'sekindo';
	configPlayer.logoPath = '/content/video/splayer/assets/sekindoLogo.png';
	configPlayer.showLogo = 'false';
	configPlayer.isAutoPlay = 'true';
	configPlayer.volume = ".5"; // Number(0 ...1)
	configPlayer.mute = "true"; //Boolean
	configPlayer.adsTimeGap = 5;//in seconds - Number
	configPlayer.adVast = null;
	configPlayer.waterFall = 'http://live.sekindo.com/live/liveView.php?s=57993&vid_debugInfo=5801476_apn_0_0_1360_6074870_www.insidethehall.com&vid_vastTimeout=-1&vid_content_url=https%3A%2F%2Fvideo.sekindo.com%2Fuploads%2Fvideo%2Flosing_weight_on_the_hunger_scale_mini.mp4&vid_content_id=losing_weight_on_the_hunger_scale&vid_content_desc=A+New+Way+of+Eating+-+Losing+Weight+on+the+Hunger+Scale&vid_content_title=Health+-+Losing+Weight+on+the+Hunger+Scale&vid_content_duration=108&vid_vastType=3&vid_waterfall=auto&vid_playerVer=&ri=6C69766553746174737C736B317B54307D7B64323031362D30312D30365F30307D7B73353830313437367D7B6355537D7B5359584275587A42664D4638784D7A5977587A59774E7A51344E7A4266643364334C6D6C7563326C6B5A58526F5A57686862477775593239747D3A6C69766553746174737C736B317B54327D7B64323031362D30312D30365F30307D7B73353830313437367D7B6355537D7B5359584275587A42664D4638784D7A5977587A59774E7A51344E7A4266643364334C6D6C7563326C6B5A58526F5A57686862477775593239747D7B626368726F6D657D7B716465736B746F707D7B6F6D61636F73787DFEFE&pubUrl=http%3A%2F%2Fwww.insidethehall.com%2F2015%2F09%2F08%2Fan-early-look-at-the-2015-2016-backcourt%2F%3Fntv_a%3DVesBAAAAAAHroMA%26prx_ro%3Ds&cbuster=${CBUSTER}' + '&vid_vpaidFlash=' + (supportFlashPlayerVersion ? '1' : '0');
	configPlayer.playlistMultiplier = 25; // (0 ...Infinity) - int
	configPlayer.contentClickUrl = '';
	configPlayer.contentPlayList = [{
				"url": "https://video.sekindo.com/uploads/video/losing_weight_on_the_hunger_scale_mini.mp4",
				"title": "Health - Losing Weight on the Hunger Scale"
			}];
	configPlayer.debug = 'false';
	configPlayer.controlBar = ['mute','pause','logo'];
	configPlayer.encoderUrl = 'http://live.sekindo.com/live/liveJsonVid.php?vidUrl=[TARGET]&origin=[ORIGIN]';
	configPlayer.absolutePath = 'http://live.sekindo.com';
	configPlayer.isNative = 'true';
	configPlayer.adImpTimeout = '0';
	configPlayer.staplerVersion = '1.1.5';
	configPlayer.supportFlashPlayerVersion = supportFlashPlayerVersion;
	configPlayer.parallelAdsMethod = true;

	var randName = ("SekindoSPlayer"+Math.floor( Math.random()*100000)).toString();
	window[randName] = new SekindoSPlayer(configPlayer, randName);

})();
