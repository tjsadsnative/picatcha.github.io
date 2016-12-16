/* This source code is Copyright (c) Vibrant Media 2001-2015 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
$iTXT.js.loader["$iTXT.data.AdLogger"]=true;$iTXT.data.AdLogger_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.data.BeaconMode={SCRIPT:0,IMAGE:1,IFRAME:2};$iTXT.data.TTCloseSource={MOUSEOUT:1,CLOSECLICK:2,KEYWORDCLICK:3,TOOLTIPCLICK:4,OVERNEWHOOK:5};$iTXT.data.LogEventType={ADVIEW:1,TOOLTIPCLICK:2,HOOKCLICK:3,MONITOR:4,HOOKLOG:5};$iTXT.data.ClickSource={KEYWORD:0,TOOLTIP:1,ICON:2,AUTOPEEK:3};$iTXT.data.AdViewValue={ADVIEW_KEYWORD:1,ADVIEW_ADVERT:2,ADVIEW_VIDEO_FIRSTFRAME:3,ADVIEW_VIDEO_LASTFRAME:4,ADVIEW_ENG_KEYWORD:5,ADVIEW_ENG_TOOLTIP:6,ADVIEW_UNQUALIFIED:7,ADVIEW_CPAV_CLOSED:8,ADVIEW_MOBT_OPEN:9,ADVIEW_CLICKED_HOOK_ICON:21,ADVIEW_CLICKED_CLOSED:22};$iTXT.data.AdLogger=$iTXT.core.Class.create({disallowTemplateAdView:{'9':true},server:"",qavTID:-1,viewabilityTID:-1,interactionTID:-1,trkDrps:null,pWind:null,pWindName:"",pWindUrl:"",demoMode:false,allowHookClick:true,logsInProgress:0,logsViewability:false,logsInteraction:false,init:function(o)
{if($iTXT.data.al)
{return;}
this.demoMode=o.demo||false;$iTXT.data.al=this;this.server=o.server||"mymachine";this.trkDrps={};var evt=$iTXT.core.Event;$iTXT.core.$(document).itxtBatchSubscribe([["$iTXT:data:log:monitor",evt.bind(this,this._mtrLog)],["$iTXT:tt:open",evt.bind(this,this._ttOpn)],["$iTXT:tt:close",evt.bind(this,this._ttCls)],["$iTXT:tt:mouse:over",evt.bind(this,this._ttMsOvr)],["$iTXT:tt:mouse:out",evt.bind(this,this._ttMsOut)],["$iTXT:hook:over",evt.bind(this,this._hkOvr)],["$iTXT:hook:out",evt.bind(this,this._hkOut)],["$iTXT:tt:click",evt.bind(this,this._ttClick)],["$iTXT:hook:click",evt.bind(this,this._hookClick)],["$iTXT:hook:touch",evt.bind(this,this._hookClick)],["$iTXT:hooks:loaded",evt.bind(this,this._pageHooksLoaded)],["$iTXT:livelookup:finished",evt.bind(this,this.llLoad)]],this.evtDspFuncs);this.logsViewability=$iTXT.glob.params.getBool('js.viewability.on',true);this.logsInteraction=$iTXT.glob.params.getBool('js.interaction.on',true);},_logQS:function(qs,o,ret)
{var url=this._mkLogUrl(qs,o);var cb=function(params)
{if($itxtUtil.isObject(params))
{var extraParams="";for(var name in params)
{var val=params[name];extraParams+="&"+name+"="+encodeURIComponent(val);}
url+=extraParams;}};$iTXT.fire("$iTXT:adlogger:before:log",cb);var o=o||{};$iTXT.data.al.logsInProgress++;if(!o.onLoad){o.onLoad=function()
{$iTXT.data.al.logsInProgress--;};}
if(ret)
{return url;}
else
{$itxtUtil.dropScript(url,function(removeFunction)
{removeFunction();if(o!=null&&o.onLoad)
{o.onLoad();}});}},_mkLogUrl:function(qs,o)
{o=o||{};var ld=o.logDocument||"al.asp";var proto=document.location.href.substr(0,document.location.href.indexOf('//'));var url=proto+'//'+this.server+'/'+ld+'?ts='+$iTXT.glob.params.get('ts','');if(this.demoMode)
{url+="&demogen=1";}
url+="&"+this._fixQs('http://'+this.server+'/'+ld,qs);return url;},_fixQs:function(baseLogUrl,qs)
{var wrongRedir,qsObject,redir;wrongRedir=qs.indexOf('redir='+encodeURIComponent(baseLogUrl))>-1;if(wrongRedir){qsObject=$iTXT.core.Util.decodeQueryString(qs);redir=qsObject.redir.split('redir%3D');if(2==redir.length){qs=qs.replace(qsObject.redir,decodeURIComponent(redir[1]));}}
return qs;},_pageHooksLoaded:function(e)
{var hks=e.data||[];var dids="";var adids="";var syids="";var apids="";var upw="";var upwr="";var kwp="";for(var i=0;i<hks.length;i++)
{var hk=hks[i];var ad=hk.ad;if(ad)
{var adtmp=ad.getTemplate();if(undefined!=adtmp)
{var addetails=adtmp.hookViewLogDetails(ad);if(i>0)
{dids+=",";adids+=",";syids+=",";apids+=",";upw+=",";upwr+=",";}
dids+=addetails.did;adids+=addetails.adid;syids+=addetails.syid;apids+=addetails.pid;upw+=addetails.uf;upwr+=addetails.ur;var tOff=hk.getPosition();kwp+=parseInt(tOff.left,10)+","+parseInt(tOff.top,10)+";";}}}
var alOpts={adid:adids,di:dids,pid:apids,syid:syids,uf:upw,ur:upwr,hk:1,kp:kwp,so:$iTXT.cnst.Source.ITXT+""};var qps=this._makeQPrms(this.pvPrms,$iTXT.glob.params,alOpts);for(var i=0;i<hks.length;i++)
{var hk=hks[i];var ad=hk.ad;if(ad&&ad.getTemplate)
{var atmp=ad.getTemplate();if(atmp)
{if(atmp.onLogEvent)
{if(!atmp.onLogEvent($iTXT.data.LogEventType.HOOKLOG,qps,ad))
{return;}}}}}
this._logQS(this._buildQS(qps));},_ttOpn:function(e)
{var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(ad)
{$iTXT.fire("$iTXT:ad:view",ad);var qavd=ad.params.get("qavd")||0;if(qavd>0)
{var t=this;this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_UNQUALIFIED,0,o);this.qavTID=window.setTimeout(function(){t.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_KEYWORD,1,o);},qavd);}
else
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_KEYWORD,0,o);}
if(this.logsViewability)
{var t=this;this.viewabilityTID=window.setTimeout(function()
{if($iTXT.ui.tt&&$iTXT.ui.tt.content)
{var viewable=$iTXT.core.Util.getVisiblePercent($iTXT.ui.tt.content.rootElement)>=50;t.logViewability(ad,viewable);}},1000);}}},llLoad:function(e)
{var o=e.data;var ad=o.advert;if(ad&&$iTXT.ui.tt&&$iTXT.ui.tt.currentAdvert==ad&&$iTXT.ui.tt.isOpen)
{ad.avSent=false;this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_KEYWORD,0,{});}},_ttCls:function(e)
{this._cancelQAVT();this._cancelViewability();this._cancelInteraction();var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(ad)
{if(e.data.closeSource&&e.data.closeSource==$iTXT.data.TTCloseSource.CLOSECLICK)
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_CLICKED_CLOSED,0,o);}
this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_ENG_TOOLTIP,0,o);this.logViewability(ad,false);this.logInteraction(ad,false);ad.avSent=false;var openLength=$iTXT.ui.tt.getTimeSinceOpen();if(openLength>1000)
{this.logAV(ad,openLength,0,o);}
this._lgMtr({mt:67,mv:o.closeSource,mv2:o.tso||$iTXT.ui.tt.getTimeSinceOpen()});var qavd=ad.params.get("qavd")||0;if(qavd>0&&openLength<qavd)
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_CPAV_CLOSED,0,o);}}},_ttMsOvr:function(e)
{var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(ad&&!ad.loggedAV2)
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_ADVERT,0,o);ad.loggedAV2=true;}
if(this.logsInteraction)
{var t=this;this.interactionTID=window.setTimeout(function()
{t.logInteraction(ad,true);},500);}},_ttMsOut:function(e)
{this._cancelInteraction();},_hkOvr:function(e)
{},_hkOut:function(e)
{var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(ad)
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_ENG_KEYWORD,0,o);}},_mtrLog:function(e)
{if(e.data&&e.data.mt){this._lgMtr(e.data);}},_lgMtr:function(o)
{var ad=o.advert||$iTXT.ui.tt.currentAdvert;var qps=this._makeQPrms(this.mtrPrms,ad.params,o);if(ad&&ad.getTemplate)
{var atmp=ad.getTemplate();if(atmp)
{if(atmp.onLogEvent)
{if(!atmp.onLogEvent($iTXT.data.LogEventType.MONITOR,qps,ad,o))
{return;}}}}
this._logQS(this._buildQS(qps),o);},monitor:function(ad,data){if(!(ad instanceof $iTXT.data.Advert)){if(!(ad.params instanceof $iTXT.data.Param)){return false;}}
if(!VM._.isObject(data)){return false;}
if(!data.mt){return false;}
data.advert=ad;this._lgMtr(data);return true;},getTrackerUrl:function(av)
{var qps=this.getAVQueryParams($iTXT.ui.tt.currentAdvert,av,0,{});return this._mkLogUrl(this._buildQS(qps));},getAVQueryParams:function(ad,av,uqav,o)
{var qps=this._makeQPrms(this.avPrms,ad.params,o);qps.uav=uqav?1:undefined;qps.so=(0==ad.params.get("A.AT")?9:ad.params.get("ISO"));qps.av=av;qps.ll=ad.params.get("ll")||0;qps.llip=ad.params.get("llip")||0;qps.hbll=ad.params.get("hbll")||0;qps.syid=ad.params.get("syid")||0;return qps;},logAV:function(ad,av,uqav,o)
{var msg;var qavd=ad.params.get("qavd")||0;var openLength=$iTXT.ui.tt.getTimeSinceOpen();if(av<1000){switch(parseInt(av)){case 1:if(qavd>0){msg="Qualified ad view - popup was open long enough, (required QAVD = "+qavd+"ms)";}
else{msg="Qualified ad view - popup opened, no minimal ad view length (QAVD) is set";}
break;case 2:msg="User mouseovered tooltip";break;case 5:msg="User moused-out the hook";break;case 6:msg="Tooltip is closing";break;case 7:msg="Unqualified ad view, popup wasn't open long enough. Open time: "+openLength+"ms, (required QAVD = "+qavd+"ms)";break;case 9:msg="MOBT opened.";break;case 21:msg="User clicked hook icon";break;case 22:msg="User clicked (X) button";break;}}else{msg="Popup was opened longer than 1000ms, total time: "+av+"ms.";}
if(ad)
{if(1==av)
{var ll=ad.params.get("LIVELOOKUP",0);var llip=ad.params.get("LIVELOOKUPFINISHED",0);if((ll&&!llip))
{return;}
if(ad.avSent)
{return;}
if(!ad.params.getBool('js.temp.av1',true)){ad.avSent=true;}}
o=o||{};if(ad.oldDid)
{o.ldid=ad.oldDid;o.di=ad.did;}
var qps=this.getAVQueryParams(ad,av,uqav,o);if(!this.disallowTemplateAdView[av+'']){var adTemplate=ad.getTemplate();if(adTemplate)
{if(adTemplate.onLogAVEvent)
{if(!adTemplate.onLogAVEvent(av,qps,ad,o))
{return;}}}}
this._logQS(this._buildQS(qps),o);if(1==av)
{if(ad.params.getBool('js.temp.av1',true)){ad.avSent=true;}
this._drpBkns(ad);}}},logViewability:function(ad,viewable)
{if(!this.logsViewability)
{return;}
if($iTXT.MOBILE){return;}
if(!ad.params.get('iab.is',false)){return;}
if($iTXT.ui.tt.currentAdvert!=ad)
{return;}
if(ad.loggedViewability)
{return;}
ad.loggedViewability=1;var timeOpen=$iTXT.ui.tt.getTimeSinceOpen();this._lgMtr({mt:130,mv:timeOpen?timeOpen:0,mv2:viewable?1:0});},logInteraction:function(ad,interacted)
{if(!this.logsInteraction)
{return;}
if($iTXT.MOBILE){return;}
if(!ad.params.get('iab.is',false)){return;}
if(ad.loggedInteraction)
{return;}
ad.loggedInteraction=1;var timeInTooltip=$iTXT.ui.tt.getTimeInTooltip();this._lgMtr({mt:131,mv:timeInTooltip?timeInTooltip:0,mv2:interacted?1:0});},_drpBkns:function(ad)
{if(ad.droppedBeacons)
{return;}
ad.droppedBeacons=1;var bcs=ad.params.get("trkimages");var atmpl=ad.getTemplate();if(atmpl)
{if(atmpl.onTrackingDrop)
{if(!atmpl.onTrackingDrop(bcs,ad))
{return;}}}
if(bcs&&VM._.isArray(bcs))
{for(var i=0;i<bcs.length;i++)
{var src=ad.params.parse(bcs[i],{'TIMESTAMP':$iTXT.core.Util.isoTs()});this._drpBkn(src);}}},_drpBkn:function(url)
{var bm=$iTXT.data.BeaconMode;var util=$iTXT.core.Util;var mode=url.match(/^https?\:\/\/.*\/(.*\.js|al\.asp)/i)?bm.SCRIPT:url.match(/^https?\:\/\/.*\/.*\.gif|png|jpg|jpeg/i)?bm.IMAGE:bm.IFRAME;var cb=function()
{if(this.parentNode)
{this.parentNode.removeChild(this);}};switch(mode)
{case bm.SCRIPT:util.dropScript(url,cb);break;case bm.IMAGE:util.dropImage(url,cb);break;case bm.IFRAME:util.dropIframe(url,cb);break;}},_cancelQAVT:function()
{if(-1!=this.qavTID)
{window.clearTimeout(this.qavTID);this.qavTID=-1;}},_cancelViewability:function()
{if(-1!=this.viewabilityTID)
{window.clearTimeout(this.viewabilityTID);this.viewabilityTID=-1;}},_cancelInteraction:function()
{if(-1!=this.interactionTID)
{window.clearTimeout(this.interactionTID);this.interactionTID=-1;}},prmMap:{'av':"ADVIEWTYPE",'at':"A.AT",'ipid':"IPID",'di':"A.LDID",'syid':"A.SYID",'adid':"A.ADID",'pid':"A.PID",'cc':"CC",'rcc':"RCC",'so':"so",'mh':"SID",'ll':"LIVELOOKUP",'hbll':"LIVELOOKUPFINISHED",'id':"H.ID",'idh':"H.IDH",'pvu':"pvu",'pvm':"pvm",'uf':"A.UF",'ur':"A.UR",'redir':"CLICKTAG"},pvPrms:['adid','cc','di','hk','ipid','mh','pid','pvm','pvu','rcc','so','syid','uf','ur','kp'],avPrms:['av','at','ipid','di','syid','adid','pid','cc','rcc','so','mh','ll','hbll','id','idh','pvu','pvm','uf','ur','len','wch','ldid'],clkPrms:['at','ipid','di','ldid','syid','adid','pid','cc','rcc','so','mh','ll','hbll','id','idh','pvu','pvm','uf','ur','ttv','llip','kp','redir','vt','qavclk'],mtrPrms:['mt','mv','mv2','ipid','di','id','idh','cc','rcc','pvu'],_makeQPrms:function(nms,params,o)
{var retObj={};if(params)
{for(var i=0;i<nms.length;i++)
{var qp=nms[i];var mapName=this.prmMap[qp];if(mapName)
{var val=o[qp]||params.get(mapName);if(val||(0==val&&'number'==typeof val))
{retObj[qp]=params.parse(val+"");}}
else if(o[qp]||(0==o[qp]&&'number'==typeof o[qp]))
{retObj[qp]=o[qp];}}}
return retObj;},_buildQS:function(map)
{var qs="";var addAmp=0;for(var qsName in map)
{var qsVal=map[qsName];if(qsVal||(0==qsVal&&'number'==typeof qsVal))
{if(addAmp)
{qs+="&";}
else
{addAmp=1;}
qs+=qsName+"="+encodeURIComponent(qsVal);}}
return qs;},clickThrough:function(opts){this._ttClick({data:opts});},_ttClick:function(e)
{var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(!o.so)
{o.so=$iTXT.cnst.Source.TT;}
if(ad)
{var now=(new Date()).getTime();if(ad.lastClickTime)
{var clickDelay=parseInt(ad.params.get("RECLICKDELAY",10000));if(clickDelay>(now-ad.lastClickTime))
{return;}}
var ll=ad.params.get("LIVELOOKUP",0);var llif=ad.params.get("LIVELOOKUPFINISHED",0);if(ll&&!llif)
{o.llip=1;o.recurseTime=o.recurseTime?(o.recurseTime+250):250;if(o.recurseTime<5000)
{var t=this;window.setTimeout(function(){t._ttClick({data:o});},250);return;}
else
{return;}}
else
{o.llip=0;}
this.logViewability(ad,false);this.logInteraction(ad,false);var tso=$iTXT.ui.tt.getTimeSinceOpen();var qavd=ad.params.get("QAVD",0);if(qavd>0)
{if(tso<qavd)
{o.qavclk=1;this._cancelQAVT();}
else
{o.qavclk=2;}}
if(ad.oldDid)
{o.ldid=ad.oldDid;o.di=ad.did;}
var qParams=this._makeQPrms(this.clkPrms,ad.params,o);qParams.ttv=$iTXT.ui.tt.isOpen?1:0;if(ad.params.get("KP",0))
{var hkPos=ad.hook.getPosition();qParams.kp=hkPos.left+","+hkPos.top;}
var adTemplate=ad.getTemplate();if(adTemplate)
{if(adTemplate.onLogEvent)
{if(!adTemplate.onLogEvent($iTXT.data.LogEventType.TOOLTIPCLICK,qParams,ad,o))
{return;}}}
var redirect=qParams.redir;qParams.redir=undefined;var qString=this._buildQS(qParams);qString+="&redir="+encodeURIComponent(redirect);var url=this._mkLogUrl(qString,o);var cts=parseInt(ad.params.get("cts",0));if(o.cts!==undefined)
{cts=o.cts;}
this.openUrl(url,cts);if(!cts&&$iTXT.ui.tt.isOpen)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:close",{closeSource:$iTXT.data.TTCloseSource.TOOLTIPCLICK});}
ad.lastClickTime=now;}},openUrl:function(url,cts,recurseTime){if(cts&&$iTXT.data.al.logsInProgress>0){var timedRecursed=recurseTime?(recurseTime+250):250;if(timedRecursed<5000){var t=this;window.setTimeout(function(){t.openUrl(url,cts,timedRecursed);},250);return;}}
$itxtUtil.openUrl(url,cts);},_hookClick:function(e)
{if(!this.allowHookClick)
{return;}
var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;var hkClickMode=0;var hkClickModeTimeout=0;if(ad)
{hkClickMode=ad.params.getInt("hk.click.mode",0);hkClickModeTimeout=ad.params.getInt("hk.click.mode.time",0);}
switch(hkClickMode)
{case 1:return;break;case 2:if(!$iTXT.ui.tt.isOpen)
{return;}
break;case 3:var tso=$iTXT.ui.tt.getTimeSinceOpen();if(tso==null||tso<hkClickModeTimeout)
{return;}
break;case 0:default:break;}
if(!o.so)
{o.so=$iTXT.cnst.Source.KW;}
if(ad)
{var ll=ad.params.get("LIVELOOKUP",0);var llif=ad.params.get("LIVELOOKUPFINISHED",0);if(ll&&!llif)
{o.llip=1;o.recurseTime=o.recurseTime?(o.recurseTime+250):250;if(o.recurseTime<5000)
{var t=this;window.setTimeout(function(){t._hookClick({data:o});},250);return;}
else
{return;}}
else
{o.llip=0;}
this.logViewability(ad,false);this.logInteraction(ad,false);var now=(new Date()).getTime();var tso=$iTXT.ui.tt.getTimeSinceOpen();if(ad.lastClickTime)
{var clickDelay=parseInt(ad.params.get("RECLICKDELAY",10000));if(clickDelay>(now-ad.lastClickTime))
{return;}}
if(e.data.source&&e.data.source==$iTXT.data.ClickSource.ICON)
{this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_CLICKED_HOOK_ICON,0,o);}
var qavd=ad.params.get("QAVD",0);if(qavd>0)
{if(tso<qavd)
{return false;}}
var qParams=this._makeQPrms(this.clkPrms,ad.params,o);qParams.ttv=ad.params.get('ttv',($iTXT.ui.tt.isOpen?1:0));var adTemplate=ad.getTemplate();if(adTemplate)
{if(adTemplate.onLogEvent)
{if(!adTemplate.onLogEvent($iTXT.data.LogEventType.HOOKCLICK,qParams,ad,o))
{return;}}}
var redirect=qParams.redir;qParams.redir=undefined;var qString=this._buildQS(qParams);var override=false;if(VM._.isArray(ad.params.get('clicktag','')))
{if(''!=$iTXT.glob.params.get('sest',''))
{var seID=$iTXT.glob.params.get('seid',-1);var adType=ad.params.get('a.at',-1);if((0==seID||14==seID)&&(32==adType||34==adType||46==adType))
{var adx=ad.params.get('adx',null);if(adx&&adx.get)
{var clk=adx.get("webClickURL2",null);if(clk)
{override=true;}}}}}
if(!override)
{qString+="&redir="+encodeURIComponent(redirect);}
var url=this._mkLogUrl(qString,o);var cts=ad.params.getInt("cts",0);if(o.cts!==undefined)
{cts=o.cts;}
this.logAV(ad,$iTXT.data.AdViewValue.ADVIEW_KEYWORD,0,o);this.openUrl(url,cts);if(!cts&&$iTXT.ui.tt.isOpen)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:close",{closeSource:$iTXT.data.TTCloseSource.KEYWORDCLICK});}
ad.lastClickTime=now;}},getClickURL:function(ad,opts,params,noredir)
{opts=opts||{};params=params||this.clkPrms;if(!opts.so)
{opts.so=$iTXT.cnst.Source.ITXT;}
var qParams=this._makeQPrms(params,ad.params,opts);qParams.ttv=1;if(ad.params.get("KP",0))
{var hkPos=ad.hook.getPosition();qParams.kp=hkPos.left+","+hkPos.top;}
var redirect=(noredir||undefined==qParams.redir)?'':qParams.redir;qParams.redir=undefined;var qString=this._buildQS(qParams);if(!noredir)
{qString+="&redir="+encodeURIComponent(redirect);}
var url=this._mkLogUrl(qString,{});return url;}});$iTXT.data.AdLogger.getInstance=function(){return $iTXT.data.al;};};$iTXT.js.loader["$iTXT.data.Advert"]=true;$iTXT.data.Advert_Load=function(){var undefined;$iTXT.data.AdvertManager={id:0,ads:{},remapped:{},add:function(ad)
{if(ad)
{var cAd=this.getByDid(ad.did);if(null!=cAd)
{this.remove(cAd);}
ad.id=this.id++;this.ads["itxtAdvert"+ad.id]=(ad);}},remove:function(advert)
{var newAds=[];for(var adid in this.ads)
{var ad=this.ads[adid];if(ad!=advert)
{newAds["itxtAdvert"+ad.id]=ad;}}
this.ads=newAds;},get:function(id)
{return this.ads["itxtAdvert"+id]||null;},getByDid:function(did,caller)
{for(var adid in this.ads)
{var ad=this.ads[adid];if(ad.$A&&ad.$A.did&&did==ad.$A.did&&ad!=caller)
{return ad;}}
return null;},list:function()
{var rArr=[];for(var i=1;i<this.id;i++)
{rArr.push(this.ads["itxtAdvert"+i]);}
return rArr;},remap:function(did,newdid)
{this.remapped[did]=newdid;},getMapping:function(did)
{if(this.remapped[did])
{return this.getByDid(this.remapped[did]);}
return null;},setCurrentAdvert:function(ad){$iTXT.ui.tt.currentAdvert=ad;},getCurrentAdvert:function(){return $iTXT.ui.tt.currentAdvert;},noDynamicAdhesions:function(){return VM._(this.ads).every(function(ad){return!ad.isDynamicAdhesion();});}};$iTXT.data.Advert=$iTXT.core.Class.create({template:null,params:null,id:-1,did:0,liveLookupFinished:false,avSent:false,childAdverts:null,processed:false,init:function(template,params,attributes)
{this.$A=attributes||{livelookup:false};this.did=this.$A.did;$iTXT.data.AdvertManager.add(this);this.templateClass=template||"$iTXT.tmpl.TemplateBase";this.params=params;this.clickTag=this.params.get("CLICKTAG");this.childAdverts=[];var childArr=params.get("children.adverts",[]);params.unset("children.adverts");this.addChildAds(childArr);},setHook:function(hk)
{this.hook=hk;this.params.set("KEYWORD",hk.options.value,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);},createTemplate:function()
{if(!this.template)
{var _tKlass=eval(this.templateClass);this.template=new _tKlass({advert:this});}},processAdvert:function()
{if(this.processed)
{return;}
this.processed=true;var w=$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN;this.params.set("ITXTSERVER",$iTXT.js.serverName,w);for(var att in this.$A)
{this.params.set("a."+att,this.$A[att],w);}
var clickTag=this.clickTag;if(null!=clickTag)
{var clickTagValues=clickTag.split("##");var clickVarNames=this.params.get("CVN","");clickVarNames=clickVarNames.split(",");for(var i=0;i<clickVarNames.length;i++)
{if(clickVarNames.length>i&&clickTagValues.length>i)
{var clickVarName=clickVarNames[i];var clickTagValue=clickTagValues[i];if($iTXT.data.al&&""!=clickVarName)
{var url=$iTXT.data.al.getClickURL(this,{redir:clickTagValue});;this.params.set(clickVarName,url,w);}}}
this.params.set("SEARCHCLICKTAG",clickTagValues[0],w);if(clickVarNames.length==0)
{this.params.set("CLICKTAG",clickTagValues[0],w);}}
var wd=this.params.get("w");if(null!=wd)
{this.params.set("width",wd,w);}
var ht=this.params.get("h");if(null!=ht)
{this.params.set("height",ht,w);}
if($iTXT.data.al&&$iTXT.data.al.getClickURL)
{var clkUrl=$iTXT.data.al.getClickURL(this,{so:$iTXT.cnst.Source.LOGO,ll:this.params.get('ll',"0"),llip:this.params.get('llip',"0"),hbll:this.params.get('hbll',"0")});this.params.set("A.CLICKURL",clkUrl,w);this.params.set("clickURL",encodeURIComponent(clkUrl),w);}
var opts={ll:'0',llip:'0',hbll:'0',uf:null,ur:null};opts.so=$iTXT.data.ClickSource.LOGO;this.params.set('stub.tu',$iTXT.data.al.getClickURL(this,opts),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.params.set('stub.tu.noredirect',$iTXT.data.al.getClickURL(this,opts,null,true),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);opts.so=$iTXT.data.ClickSource.ICON;this.params.set('stub.t',$iTXT.data.al.getClickURL(this,opts),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);opts.so='0',opts.av=1;this.params.set('stub.av',$iTXT.data.al.getClickURL(this,opts,$iTXT.data.al.avPrms,true),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.params.set("LIVELOOKUP",this.$A.livelookup,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.params.set("LIVELOOKUPFINISHED",0,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);},getTemplate:function()
{this.createTemplate();return this.template;},addTemplateParams:function(params,weight)
{if(this.params&&this.params.set)
{var w=(undefined==weight)?$iTXT.cnst.WEIGHTING_DEFAULT_DATABASE:weight;this.params.set(params,null,w);}},tokenize:function(obj)
{return this.params.tokenize(obj);},isSameOrChild:function(a)
{try
{if(a==this)
{return true;}
if(null!=this.childAdverts&&VM._.isArray(this.childAdverts))
{for(var i=0;i<this.childAdverts.length;i++)
{var ca=this.childAdverts[i];if(a==ca)
{return true;}}}}
catch(e)
{}
return false;},addChildAds:function(children)
{if(children&&children.length>0)
{$iTXT.core.$A(children).itxtEach($iTXT.core.Event.bind(this,this.addChildAd));}},addChildAd:function(child)
{if(child)
{var adParams=new $iTXT.data.Param(this.params);adParams.set(child,null,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);var adAttributes={};var ad=new $iTXT.data.Advert(this.templateClass,adParams,adAttributes);this.childAdverts.push(ad);}},addChildAdvert:function(ad)
{if(ad)
{this.childAdverts.push(ad);}},getAdvertType:function()
{return parseInt((this.$A.rat||this.$A.at),10);},getKeywordId:function(){return this.$A.kwid;},getDetailId:function(){return this.$A.did;},getMoatConfig:function(){var p=this.params;var conf={enabled:p.getBool('js.moat.enabled',false),ad_tag:decodeURIComponent(p.get('js.moat.adtag','http://js.moatads.com/${js.moat.partnercode}/moatad.js'+'?moatClientLevel1=${js.moat.advertiser}'+'&moatClientLevel2=${js.moat.campaign}'+'&moatClientLevel3=${js.moat.lineitem}'+'&moatClientLevel4=${js.moat.creative}'+'&moatClientSlicer1=${js.moat.site}'+'&moatClientSlicer2=${js.moat.placement}')),partner_code:decodeURIComponent(p.get('js.moat.partnercode','vibrantdivid37533632349')),advertiser:decodeURIComponent(p.get('js.moat.advertiser',p.get('IONO'))),campaign:decodeURIComponent(p.get('js.moat.campaign',this.getDetailId())),line_item:decodeURIComponent(p.get('js.moat.lineitem',this.getKeywordId())),creative:decodeURIComponent(p.get('js.moat.creative','-')),site:decodeURIComponent(p.get('js.moat.site','-')),placement:decodeURIComponent(p.get('js.moat.placement','-'))};return conf;},useAdChoices:function(){var privIconMode=parseInt(this.params.get(this.params.parse("hdr.privacyicon.mode.${cc}"),$iTXT.ui.privacyIconAlign.ICON_ONLY),10);var allowedRegions=this.params.get("tt.privacyicon.regions","").toLowerCase().split(',');var countryCode=this.params.get("cc","en").toLowerCase();var country_on=($iTXT.core.Util.inArray(allowedRegions,'all')||$iTXT.core.Util.inArray(allowedRegions,countryCode))&&privIconMode>0;var ad_on=this.params.get("hdr.privacyicon");var rv=false;if(null!=ad_on){rv=this.params.getBool("hdr.privacyicon");}else{rv=country_on;}
return rv;},isDynamicAdhesion:function(){var typeEnum=$iTXT.data.Advert.ADVERTTYPE,type=this.getAdvertType();switch(type){case typeEnum.DYNAMIC_ADHESION:case typeEnum.DA_LIGHTBOX:case typeEnum.DA_MOSAIC:case typeEnum.DA_YELL:case typeEnum.DA_YAHOO:case typeEnum.DA_SHOPPINGDOTCOM:return true;default:return false;}},isCPE:function(){var typeEnum=$iTXT.data.Advert.ADVERTTYPE,type=this.getAdvertType();switch(type){case typeEnum.LIGHTBOX:case typeEnum.LIGHTBOXMOBILE:case typeEnum.LIGHTBOX30:case typeEnum.MOSAIC:case typeEnum.STORYBOARD:return true;default:return false;}},isKelkoo:function(){return this.getAdvertType()===$iTXT.data.Advert.ADVERTTYPE.KELKOO;}});$iTXT.data.Advert.ADVERTTYPE={KELKOO:5,LIGHTBOX:160,LIGHTBOXMOBILE:163,LIGHTBOX30:164,MOSAIC:165,DYNAMIC_ADHESION:173,STORYBOARD:178,DA_LIGHTBOX:179,DA_MOSAIC:180,DA_YELL:181,DA_YAHOO:182,DA_SHOPPINGDOTCOM:183};};$iTXT.js.loader["$iTXT.data.AdvertHandler"]=true;$iTXT.data.AdvertHandler_Load=function(){var undefined;$iTXT.data.AdvertHandler=$iTXT.core.Class.create({advert:null,callback:null,init:function(advert)
{this.advert=advert;},handle:function(callback)
{this.callback=callback;if(this.advert.$A.livelookup&&$iTXT.js.serverUrl&&$iTXT.cnst.CONTROLLER_LOOK)
{if(this.advert.liveLookupInProgress)
{return;}
this.advert.liveLookupInProgress=true;var fo=0;var lookUrl=$iTXT.js.serverUrl+$iTXT.cnst.CONTROLLER_LOOK+"?ts="+$iTXT.core.Util.ts();var lookKeys=[$iTXT.cnst.Params.REF,$iTXT.cnst.Params.REF_MD5,$iTXT.cnst.Params.UID,$iTXT.cnst.Params.UID_MD5,"ipid","cc","rcc","reg","dma","city","auat","fo",["did","a.did"],["syid","a.syid"],["pid","a.pid"],"eat","dat","sest","seid","sehs","test","ugoogle"];lookUrl+="&"+$iTXT.core.Util.generateQueryString(lookKeys,this.advert.params);var t=this;$iTXT.core.Util.dropScript(lookUrl,function(details)
{t._liveLookupLoad(details);});}
else
{callback();}},_liveLookupLoad:function(liveLookupDetails)
{var newAd=$iTXT.data.AdvertManager.getByDid(liveLookupDetails.did);if(liveLookupDetails.did!=this.advert.did)
{newAd.oldDid=this.advert.did;}
var backfillParams=newAd.params.get('BACKFILLPROPERTIES');if(backfillParams)
{newAd.addTemplateParams(backfillParams,$iTXT.cnst.WEIGHTING_DEFAULT_CONFIG);if($iTXT.debug.Util.isLoggingOn())
{for(var prop in backfillParams)
{if(backfillParams.hasOwnProperty(prop))
{}}}}
var templateParams=newAd.params.get('TEMPLATEPROPERTIES');if(templateParams)
{newAd.addTemplateParams(templateParams,$iTXT.cnst.WEIGHTING_DEFAULT_CONFIG);if($iTXT.debug.Util.isLoggingOn())
{for(var prop in templateParams)
{if(templateParams.hasOwnProperty(prop))
{}}}}
this.advert.hook.options.uid=liveLookupDetails.uid;this.advert.hook.options.uidh=liveLookupDetails.uidh;this.advert.hook.setAdvert(newAd);newAd.setHook(this.advert.hook);newAd.$A.livelookup=false;newAd.liveLookupFinished=true;newAd.params.set("LIVELOOKUPFINISHED",1,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);newAd.params.set("LIVELOOKUP",0,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.advert.params.set("LIVELOOKUPFINISHED",1,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.advert.params.set("LIVELOOKUP",0,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.advert.$A.livelookup=false;this.advert.liveLookupFinished=true;if(this.advert.templateClass!=newAd.templateClass)
{var templateName=newAd.templateClass.substring(newAd.templateClass.lastIndexOf('.')+1);$iTXT.core.Util.loadTemplate(templateName,function(){$iTXT.core.$(document).itxtFire("$iTXT:tt:content:change:ad",newAd);});this.advert.template.dispose();}
else
{$iTXT.core.$(document).itxtFire("$iTXT:tt:content:change:ad",newAd);}
$iTXT.fire("$iTXT:livelookup:finished",{advert:newAd});}});};$iTXT.js.loader["$iTXT.data.Channel"]=true;$iTXT.data.Channel_Load=function(){var undefined;$iTXT.data.Channel=$iTXT.core.Class.create({init:function()
{$iTXT.glob.currentChannel=this;if($iTXT.glob.params)
{this._processChannelParams();}},_processChannelParams:function()
{var p=$iTXT.glob.params;p.set("normalisedcountry",p.get("cc"));p.set("realcountry",p.get("rcc"));p.set("region",p.get("reg"));p.set("pcode",p.get("postcode"));}});};$iTXT.js.loader["$iTXT.data.Context"]=true;$iTXT.data.Context_Load=function()
{var $itxtUtil=$iTXT.core.Util;$iTXT.data.Context={BAD_EXCL:1,BAD_SHORT:2,BAD_SML_IMG:4,BAD_IAB_IMG:8,BAD_NOT_CONTENT:16,allowedFields:{c:'itxtAllowed',h:'itxtAllowed',n:'itxtAllowed',p:'itxtAllowed',t:'itxtAllowed',u:'itxtAllowed',v:'itxtAllowed',w:'itxtAllowed',x:'itxtAllowed'},changedContentSections:{},contextFull:true,currentDepth:0,dynamicContentHandler:null,dynamicContentMode:false,dynamicContentThreshold:15,dynamicContentURLs:{},eligibleElementsTotal:-1,harvestCount:0,harvestedCount:0,lastTime:0,lastTimeOut:-1,metrics:0,modifiedTrees:[],nodeAssessments:{},nodeTextLengths:{},observationTypes:{transform:{label:"TRANSFORM",strategy:function(node){var transitionEndEvent='transitionend';var prefixedTransitions={'WebkitTransition':'webkitTransitionEnd','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd'};for(var t in prefixedTransitions){if(node.style[t]!==undefined){transitionEndEvent=prefixedTransitions[t];break;}}
$iTXT.addEvent(node,transitionEndEvent,function(){$iTXT.data.Context.onContentStateChange(node);});},getDynamicContentState:function(node){return $iTXT.core.Util.getVisiblePercent(node)>$iTXT.data.Context.dynamicContentThreshold;},isMutation:false},mutationObserver:{label:"MUTATION OBSERVER",strategy:function(node){var obs=new MutationObserver(function(mutations){VM._.each(mutations,function(){$iTXT.data.Context.onContentStateChange(node);});});obs.observe(node,{childList:true,subtree:true});},getDynamicContentState:function(){return true;},isMutation:true},mutationEvents:{label:"MUTATION EVENTS",strategy:function(node){$iTXT.addEvent(node,'DOMSubtreeModified',function(){$iTXT.data.Context.onContentStateChange(node);});},getDynamicContentState:function(){return true;},isMutation:true}},pageElementsTotal:-1,pageTitle:'',paragraphNodes:[],processedElementsCount:0,textNodes:[],timedOut:false,timings:{},treeObjectMode:false,dynScanned:false,Node:$iTXT.core.Class.create({c:null,h:null,n:null,p:null,t:null,u:null,v:null,w:null,x:null,tn:'',init:function(n,params,parent)
{if(this._checkLimits(params))
{this._suicide();return;}
var hC=n.itxtHarvested;if(n&&null!==hC&&undefined!==hC&&hC==$iTXT.data.Context.harvestCount)
{this._suicide();return;}
var nT=n.nodeType;if(nT!=$itxtUtil.ELEMENT_NODE)
{this._suicide();return;}
else
{this.tn=n.tagName.toLowerCase();}
if(n.itxtBad)
{this._bad=n.itxtBad;if(this._isBad(n))
{this._suicide();return;}}
this._nId=$iTXT.data.Dom.setNodeId(n);parent=parent||{};try
{n.itxtHarvested=$iTXT.data.Context.harvestCount;}
catch(x)
{}
var didA=false;var thisA=$iTXT.data.Context.loadAssessment(n);if((!$itxtUtil.isObject(thisA)||!thisA)&&params.assessor&&params.assessor.assess)
{var sel=$iTXT.data.Dom.parseElement(n,params.intattrs);thisA=params.assessor.assess(sel);didA=true;if($iTXT.data.Context.metrics&$iTXT.debug.Util.ECH_ASSESS_DUMP)
{var aStr='';for(var a in thisA)
{if('function'!==typeof thisA[a])
{var tag=(a.indexOf('is')===0)?'b':'span';aStr+='&nbsp;&nbsp;&nbsp;&nbsp;'+a+':<'+tag+' style="color:'+((thisA[a]===true)?'green':'red')+';">'+thisA[a]+'</'+tag+'><br/>';}}
if(''!==aStr&&$iTXT.debug.Util.isLoggingOn())
{var sSel=$itxtUtil.serialiseJSON(sel);}}}
var assessment=thisA||{};if(didA)
{$iTXT.data.Context.saveAssessment(n,assessment);}
$iTXT.data.Context.processedElementsCount++;if(!params.processed)
{if(undefined===params.maxImageW)
{params.maxImageW=-1;}
if(undefined===params.maxImageH)
{params.maxImageH=-1;}
if(undefined===params.initskip)
{params.initskip=-1;}
if(undefined===params.maxnodes)
{params.maxnodes=-1;}
if(undefined===params.maxnodedepth)
{params.maxnodedepth=255;}
if(undefined===params.mintextlength)
{params.mintextlength=-1;}
if(undefined===params.maxheaderdepth)
{params.maxheaderdepth=3;}
if(undefined===params.timeout)
{params.timeout=1500;}
if(params.initskip>0&&params.maxnodes>0)
{params.maxnodes+=params.initskip;}
params.processed=true;}
this._setType(n,params,assessment,parent);if(this._isBad(n,assessment.hasHooknodes))
{this._suicide();return;}
if(""===this.t)
{delete this.t;}
$iTXT.data.Context.currentDepth++;this._getChildren(n,params,assessment);this._setDynamicContent(n,params,assessment,parent);this._setHookable(n,params,assessment,parent);this._setParagraph(n,params,assessment,parent);this._setWeight(n,params,assessment,parent);this._setContent(n,params,assessment,parent);if(this._isBad(n,assessment.hasHooknodes))
{$iTXT.data.Context.currentDepth--;this._suicide();return;}
if($iTXT.debug.CurrentConsole&&!$iTXT.glob.params.get('itxthln-xx'))
{if(assessment.isUnbreaknode)
{$iTXT.debug.Util.hilite(n.firstChild,$iTXT.debug.Util.HL_COL_SKIP,$iTXT.debug.Util.HL_BORDER_UPN,true);}
if(1==this.h||false===assessment.isContent)
{$iTXT.debug.Util.hilite(n,$iTXT.debug.Util.HL_COL_SKIP,true);}
else if(true===assessment.isContent)
{$iTXT.debug.Util.hilite(n,$iTXT.debug.Util.HL_COL_CONTENT,null,true);}}
var me={h:this.h,p:this.p,t:this.t,v:this.v,tn:this.tn};if(parent&&parent.p&&1==parent.p)
{me.p=1;}
if(parent&&1==parent.h)
{me.h=1;}
if(!me.v&&parent&&parent.v)
{me.v=parent.v;}
if(assessment.isHooknode||(parent&&parent.isHooknode))
{me.isHooknode=true;}
if(assessment.isSkipnode||(parent&&parent.isSkipnode))
{me.isSkipnode=true;}
this._setChildren(n,params,assessment,me);if(this.x&&this.x.length===0)
{this.x=null;}
$iTXT.data.Context.currentDepth--;if(!this.c&&!this.u&&!this.x)
{this._suicide();}
delete this._bad;if(this.t&&this.x&&!this.u&&!this.c)
{delete this.t;}
if(this.h&&this.x&&!this.u&&!this.c)
{delete this.h;}
if(1==this.h)
{this.h=0;}},serialise:function(all)
{if(all||this.c||this.u||this.w||this.x)
{return $itxtUtil.serialiseJSON(this,$iTXT.data.Context.allowedFields);}
else
{return'{}';}},simplify:function(all)
{var rO={},rF=[];if(all||this.c||this.u||this.w||this.x)
{for(var f in $iTXT.data.Context.allowedFields)
{if(null!==this[f])
{rF[rF.length]=f;rO[f]=this[f];}}}
return(rF.length>0)?rO:null;},_addParagraphNode:function()
{var currL=$iTXT.data.Context.paragraphNodes.length;if(currL>0)
{var lastM=currL-1;var lastP=$iTXT.data.Context.paragraphNodes[lastM];if(!lastP||0===lastP.length)
{currL=lastM;}}
$iTXT.data.Context.paragraphNodes[currL]=[];},_checkLimits:function(params)
{if(params.maxnodes>0&&$iTXT.data.Context.textNodes.length>=params.maxnodes)
{return true;}
var tc=new Date().getTime();if(params.timeout>0&&undefined!==$iTXT.data.Context.timings.cStart&&(tc-$iTXT.data.Context.timings.cStart)>params.timeout)
{$iTXT.data.Context.timings.cEnd=tc;$iTXT.data.Context.timedOut=true;$iTXT.data.Context.lastTimeOut=params.timeout;return true;}
return false;},_getChildren:function(n,params)
{var badTags={'applet':true,'embed':true,'iframe':true,'img':true,'object':true,'script':true,'style':true,'xml':true};var childTags=[],childTexts=[],childAttrs=[];var nTn=n.tagName.toLowerCase();if(n.nodeType==$itxtUtil.ELEMENT_NODE)
{if(params.maxnodedepth&&params.maxnodedepth>-1&&$iTXT.data.Context.currentDepth>=params.maxnodedepth)
{}
else
{var cs=n.childNodes,t='';var l=cs.length;while(l--)
{var c=cs[l];var cT=c.nodeType;if(cT==$itxtUtil.TEXT_NODE)
{if(!badTags[nTn])
{var cV=$itxtUtil.cleanString(c.nodeValue);if(null!==cV&&undefined!==cV&&''!==cV)
{t+=' '+cV;childTexts[childTexts.length]=c;}}}
else if(cT==$itxtUtil.ELEMENT_NODE)
{childTags[childTags.length]=c;var childA=$iTXT.data.Context.loadAssessment(c);if(!childA||!$itxtUtil.isObject(childA))
{childA=params.assessor.assess($iTXT.data.Dom.parseElement(c,params.intattrs));$iTXT.data.Context.saveAssessment(c,childA);}}}
$iTXT.data.Context.nodeTextLengths[n.itxtNodeId]=$itxtUtil.cleanString(t).length||0;if($iTXT.data.Context.contextFull)
{var iAttrs=params.intattrs.split(","),nAttrs=n.attributes;var k=iAttrs.length;while(k--)
{if(iAttrs[k]=='name'&&nTn=='meta')
{childAttrs[childAttrs.length]=nAttrs.content;}
if(iAttrs[k]!=='name'&&nAttrs[aName]&&nAttrs[aName].specified)
{var aName=iAttrs[k];childAttrs[childAttrs.length]=nAttrs[aName];}}}}}
this._childTags=childTags.reverse();this._childTexts=childTexts.reverse();this._childAttrs=childAttrs;},_isBad:function(n,nohilite)
{if(this._bad>0)
{if(!nohilite)
{var col=$iTXT.debug.Util.HL_COL_EXCLUDE;var bor=$iTXT.debug.Util.HL_BORDER_STD;if($iTXT.data.Context.BAD_NOT_CONTENT==this._bad)
{col=$iTXT.debug.Util.HL_RESET;}
else if($iTXT.data.Context.BAD_SHORT==this._bad)
{col=$iTXT.debug.Util.HL_COL_SKIP;bor=$iTXT.debug.Util.HL_BORDER_SHORT;}
else if($iTXT.data.Context.BAD_SML_IMG==this._bad||$iTXT.data.Context.BAD_IAB_IMG==this._bad||$iTXT.data.Context.BAD_EXCL==this._bad)
{col=$iTXT.debug.Util.HL_COL_SKIP;}
$iTXT.debug.Util.hilite(n,col,bor,true);}
return true;}
else
{return false;}},_processNodes:function(n,nodeList,params,parent)
{var rA=[];var killChildren=('a'==this.t)?true:false;var hasContent=false;var hasUrl=false;for(var i=0,len=nodeList.length;i<len;i++)
{var thisChild=nodeList[i];if(this._isBad(thisChild))
{continue;}
var noContentTags={"br":true,"hr":true};if(thisChild.tagName&&noContentTags[thisChild.tagName.toLowerCase()])
{continue;}
var node=new $iTXT.data.Context.Node(thisChild,params,parent);if(1==this.h&&null!==node.h&&undefined!==node.h)
{delete this.h;}
if(node.u)
{hasUrl=true;}
if(node.c&&"std"==node.t)
{if(parent&&parent.t&&"std"!==parent.t)
{node.t=parent.t;}
hasContent=true;}
if("a"==this.t&&hasContent&&hasUrl)
{killChildren=false;}
if($iTXT.data.Context.treeObjectMode)
{var cId=$iTXT.data.Dom.setNodeId(thisChild);node=node.simplify();if(null!==node)
{var next=rA.length;rA[next]=node;if(cId)
{$iTXT.data.Dom.nodeIds[cId]=rA[next];}}}
else
{var json=node.serialise();if('{}'!==json)
{rA[rA.length]=json;}
node=null;}}
if(killChildren)
{rA=[];}
return rA;},_setChildren:function(n,params,assessment,parent)
{var children=this._childTags||[];if(null===this.x)
{this.x=[];}
if(children.length>0)
{children=this._processNodes(n,children,params,parent);if(children.length>0)
{this.x=this.x.concat(children);}}},_setContent:function(n,params,assessment,parent)
{if(!parent)
{parent={};}
var cont=null;if(('title'==parent.t||'title'==this.t)&&n.innerText)
{cont=$itxtUtil.cleanString(n.innerText);}
var contents=[];if(null!==cont)
{contents=[cont];}
if(this._childTexts)
{contents=contents.concat(this._childTexts);delete this._childTexts;}
if(this._childAttrs)
{contents=contents.concat(this._childAttrs);delete this._childAttrs;}
var res=[];for(var i=0,l=contents.length;i<l;i++)
{var content=contents[i],cN=null,cT=null;var nT=content.nodeType;if(nT&&nT==$itxtUtil.TEXT_NODE)
{cN=content;content=$itxtUtil.cleanString(content.nodeValue);}
else if(nT&&nT==$itxtUtil.ATTRIBUTE_NODE)
{cN=content;cT=content.nodeName.toLowerCase();content=$itxtUtil.cleanString(content.nodeValue);}
else
{cN=n;}
if(null!==content&&content.length>1)
{content=content.replace(/\\/g,'\\\\');content=content.replace(/"/g,'\\"');content=content.replace(/<.*>|\{|\}/g,"");var inst=this.simplify(true)||{};delete inst.p;delete inst.w;if(cT)
{inst.t=cT;inst.h=1;if('title'==inst.t&&this.t&&'title'!==this.t)
{inst.t=this.t+'-'+inst.t;}
if(('href'==inst.t||'src'==inst.t)&&this.t)
{inst.t=this.t;}
if('content'==inst.t)
{inst.t='meta';}}
if(1!==this.p&&1!==parent.p)
{if(content.length>params.mintextlength&&this._relatedBPNs(cN,params))
{inst.p=1;this.p=null;this._addParagraphNode();}}
var t=this.t||parent.t;if(params.mintextlength>0&&content.length<params.mintextlength&&inst.p!==1&&this.p!==1&&parent.p!==1&&t!=="h"&&t!=="title"&&this._childTags.length===0&&t!=="meta")
{if(!assessment.isContent)
{assessment.isContent=false;}
this._bad=$iTXT.data.Context.BAD_SHORT;continue;}
if(content.length!==0){var std=((this.t&&'std'==this.t)||(parent.t&&'std'==parent.t)||(!parent.t&&!this.t))?true:false;if(std)
{var pN=n.parentNode;var tN=n.tagName||pN.tagName;if(null!==tN)
{if(tN.toLowerCase)
{tN=tN.toLowerCase();}
if('strong'==tN||'b'==tN)
{inst.t='b';}
else if('em'==tN||'i'==tN)
{inst.t='i';}
else if('u'==tN)
{inst.t='u';}
else if('li'==tN)
{inst.t='l';}}
std=true;tN=n.tagName||pN.tagName;if(null!==tN)
{if(tN.toLowerCase)
{tN=tN.toLowerCase();}
if('strong'==tN||'b'==tN)
{this.t='b';}
else if('em'==tN||'i'==tN)
{this.t='i';}
else if('u'==tN)
{this.t='u';}
else if('li'==tN)
{this.t='l';}}}
if('title'==parent.t||'title'==this.t)
{$iTXT.data.Context.pageTitle=$itxtUtil.cleanString(content);inst.h=1;this.h=1;}
var h=inst.h||this.h;if(null===h||undefined===h||h<1)
{if(!inst.t)
{inst.t='std';}
$iTXT.data.Context.textNodes[$iTXT.data.Context.textNodes.length]=cN;inst.n=$iTXT.data.Context.textNodes.length;assessment.isContent=true;var currPara=$iTXT.data.Context.paragraphNodes.length-1;if(currPara>=0)
{$iTXT.data.Context.paragraphNodes[currPara].push(cN);}}
var rX=/([^\w\s\-\!\"#$&\'()*+,.\/:;<=>?@[\\\]\^_`{|}~])/g;if(content.match(rX))
{content=content.replace(rX,function(s)
{return encodeURIComponent(s);});}
$iTXT.data.Context.harvestedCount++;if(cT&&$itxtUtil.isURL(content))
{if(content.indexOf('javascript:')===0)
{if(!assessment.isContent)
{assessment.isContent=false;}
continue;}
inst.u=content;}
else
{inst.c=content;}
if(1==inst.h)
{inst.h=0;}
res[res.length]=inst;}}}
if(res.length>0)
{if(this.x)
{this.x=this.x.concat(res);}
else
{this.x=res;}}},_setHookable:function(n,params,assessment,parent)
{if('meta'==this.t)
{this.h=1;return;}
var v=this.v||((parent)?parent.v:null);if(parent&&1==parent.h&&(v||!assessment.hasHooknodes))
{var keepCalmAndCarryOn=false;if(v)
{keepCalmAndCarryOn=$iTXT.data.Dom.dynamicContentStates[v];}
if(!keepCalmAndCarryOn)
{this.h=1;return;}}
if(null!==parent&&null===parent.h&&null!==this.t&&('alt'==this.t||('h'==this.t&&!$iTXT.data.Context.hookableHeaders[this.tn])||'img'==this.t||'meta'==this.t||'title'==this.t||'url'==this.t))
{this.h=1;if(parent&&assessment.hasHooknodes&&!parent.isHooknode&&('alt'==this.t||'h'==this.t))
{this._bad=$iTXT.data.Context.BAD_NOT_CONTENT;}
return;}
if((!assessment.hasHooknodes&&(assessment.isSkipnode||parent.isSkipnode))||(assessment.hasHooknodes&&((!assessment.isHooknode&&!parent.isHooknode)||(parent.isHooknode&&assessment.isSkipnode))))
{this.h=1;return;}},_lenOK:function(n,params)
{var textLength=$iTXT.data.Context.nodeTextLengths[n.itxtNodeId];if(undefined===textLength)
{if(params.maxnodedepth&&params.maxnodedepth>-1&&$iTXT.data.Context.currentDepth>=params.maxnodedepth)
{return false;}
textLength=$iTXT.data.Dom.getInnerTextLength(n);$iTXT.data.Context.nodeTextLengths[n.itxtNodeId]=textLength;}
if(!params.mintextlength||isNaN(params.mintextlength)||params.mintextlength<0)
{params.mintextlength=1;}
return(textLength>=params.mintextlength);},_childBPNs:function(n,params)
{if(null!==this._childTags)
{var cNodes=this._childTags;var i=cNodes.length;while(i--)
{var cNode=cNodes[i];var childA=$iTXT.data.Context.loadAssessment(cNode);if(!childA||!$itxtUtil.isObject(childA))
{childA=params.assessor.assess($iTXT.data.Dom.parseElement(cNode,params.intattrs));$iTXT.data.Context.saveAssessment(cNode,childA);}
if(childA.isBreaknode)
{return true;}}}
return false;},_relatedBPNs:function(n,params)
{var cands=[];if(null!==n.parentNode&&$itxtUtil.ELEMENT_NODE==n.parentNode.nodeType)
{cands[cands.length]=n.parentNode;}
if(null!==n.previousSibling&&$itxtUtil.ELEMENT_NODE==n.previousSibling.nodeType)
{var pS=n.previousSibling;while(pS)
{cands[cands.length]=pS;pS=pS.previousSibling;}}
if(null!==n.nextSibling&&$itxtUtil.ELEMENT_NODE==n.nextSibling.nodeType)
{var nS=n.nextSibling;while(nS)
{cands[cands.length]=nS;nS=nS.nextSibling;}}
for(var i=0,len=cands.length;i<len;i++)
{var cand=cands[i];if(cand&&cand.nodeType&&$itxtUtil.ELEMENT_NODE==cand.nodeType)
{var candA=$iTXT.data.Context.loadAssessment(cand);if(!candA||!$itxtUtil.isObject(candA))
{candA=params.assessor.assess($iTXT.data.Dom.parseElement(cands[i],params.intattrs));$iTXT.data.Context.saveAssessment(cands[i],candA);}
if(candA.isBreaknode)
{return true;}}}
return false;},_setParagraph:function(n,params,assessment,parent)
{delete this.p;if(!assessment.isSkipnode)
{if(!parent||!parent.p||1!=parent.p)
{if((!parent||!parent.t||("title"!=parent.t&&"h"!=parent.t))&&(!this.t||("title"!=this.t&&"h"!=this.t))&&(!this.h||1!=this.h))
{if(!this._childBPNs(n,params))
{if(this._lenOK(n,params)&&(assessment.isBreaknode||assessment.isUnbreaknode))
{this.p=1;}}}}}
if(1==this.p)
{this._addParagraphNode();}},_setType:function(n,params,assessment,parent)
{delete this.t;if(assessment.isExcludenode&&!assessment.isContentnode)
{this._bad=$iTXT.data.Context.BAD_EXCL;return;}
var nN=n.nodeName.toLowerCase();if('img'==nN)
{this.t="img";}
else if("title"==nN||"meta"==nN||"a"==nN)
{if('meta'==nN&&!assessment.isContentnode)
{this._bad=$iTXT.data.Context.BAD_NOT_CONTENT;return;}
this.t=nN;}
else if('h'==nN.substr(0,1)&&!isNaN(nN.substr(1,1)))
{var hLevel=nN.substr(1,1);if(hLevel<=params.maxheaderdepth||$iTXT.data.Context.hookableHeaders[nN])
{this.t="h";}}
if(!this.t)
{this.t="std";if(parent.t)
{this.t=parent.t;}}},_notValidDynamicElement:function(node){return!node.nodeType||$itxtUtil.ELEMENT_NODE!=node.nodeType||this.h;},_notDynamic:function(node,assessment){return this._notValidDynamicElement(node)||!assessment.isDynamicnode||assessment.isSkipnode;},_setDynamicContent:function(node,params,assessment){var element_active;if(this._notDynamic(node,assessment)){return;}
if($iTXT.data.Dom.assessDynamicContent(node)){this.v=$iTXT.data.Dom.dynamicContentSections[this._nId];element_active=$iTXT.data.Context.dynamicContentHandler.getDynamicContentState(node);if(!$iTXT.data.Context.changedContentSections[this.v]){$iTXT.data.Context.changedContentSections[this.v]={dynamicContentURL:''};}
if(!params.dynscanwholepage||!element_active){}
if(!element_active){this.h=1;$iTXT.data.Context.getDynamicContentURL(this.v);}else{if(!$iTXT.data.Context.changedContentSections[this.v]){var dcURL=$iTXT.glob.params.get('refurl');$iTXT.data.Context.changedContentSections[this.v]={dynamicContentURL:dcURL};if(!$iTXT.data.Context.dynamicContentURLs[dcURL]){$iTXT.data.Context.dynamicContentURLs[dcURL]={};}
$iTXT.data.Context.dynamicContentURLs[dcURL].sent=true;}else{$iTXT.data.Context.getDynamicContentURL(this.v);}}
if(!$iTXT.data.Context.dynScanned){var nId=$iTXT.data.Dom.setNodeId(node);if(!VM._.isObject($iTXT.data.Dom.nodeIds[nId])){$iTXT.data.Dom.nodeIds[nId]=this;}
$iTXT.data.Context.dynamicContentHandler.strategy(node);}}},_setWeight:function(n,params,assessment)
{if(assessment.isWeightset)
{this.w=assessment.weightset;delete assessment.weightset;}},_suicide:function()
{for(var fN in this)
{if('function'!=typeof this[fN])
{delete this[fN];}}}}),determineCompatMode:function()
{var nds=document.getElementsByName('intelliTxt');if(nds&&nds.length===0)
{nds=document.getElementsByName('intelliTXT');}
if(nds&&nds.length>0)
{return'v1';}
if(document.getElementById('intelliTxt'))
{return'v1';}
if(document.getElementById('intelliTXT'))
{return'v1';}
var hkNodes=$iTXT.data.Context.params.get("hooknodes",[]);if(hkNodes.length>1)
{return'v1';}
return'v2';},getContent:function()
{if($iTXT.data.Context.dynScanned)
{return;}
this.metrics=this.params.get('metrics',0);this.setContextFull();this.setDynamicContentMode();if(this.dynamicContentMode){this.setDynamicContentType();this.setDynamicContentThreshold();}
this.setTreeObjectMode();this.setPageTitle();var startNodes=this.getStartNodes();var timeoutName='timeout.light';if(this.contextFull)
{timeoutName='timeout.full';}
if($iTXT.core.Browser.is("Explorer",8,2))
{timeoutName+='.ie';}
this.params.set("timeout",this.params.get(timeoutName,1500),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);if(!this.contextFull)
{this.params.set('excludenodes',this.params.get('excludenodes').concat('<img>'),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);if(null===this.params.get('hooknodes',null))
{this.params.set('excludenodes',this.params.get('excludenodes').concat(this.params.get('skipnodes')),$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.params.set('skipnodes',[],$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
else
{}}
else
{this.preprocessImages(this.params);}
this.preprocessExcludeNodes(this.params);var oParams={};var sA=new $iTXT.data.Dom.SelectorAssessor();var pL=this.params.list();for(var i=0,len=pL.length;i<len;i++)
{var pK=pL[i].toLowerCase();var pV=this.params.get(pK);if(null!==pV&&undefined!==pV)
{if(VM._.isArray(pV)&&pV.length>0)
{var nodes=[],oths=[];if(pV[0].match(/:/))
{for(var j=0,lenj=pV.length;j<lenj;j++)
{var bits=pV[j].split(':');nodes[nodes.length]=bits[0];oths[oths.length]=bits[1]||1;}
pV=nodes;}
sA.add($iTXT.data.Dom.parseVMNode(pV),pK.replace(/s$/,''),oths);pV=null;}}
if(pK&&pV)
{oParams[pK]=pV;}}
if(sA.count()>0)
{this.params.set('assessor',sA);oParams.assessor=sA;if(this.metrics&$iTXT.debug.Util.ECH_ASSESS_DUMP_INPUT)
{if($iTXT.debug.Util.isLoggingOn())
{}}}
if(this.dynamicContentMode)
{oParams.dynscanwholepage=('*'==this.params.get('dynamicnodes',[])[0]);}
if(!this.timings||!$itxtUtil.isObject(this.timings))
{this.timings={};}
this.timings.cStart=new Date().getTime();var trees=[];this.params.set('oparams',oParams);for(i=0,len=startNodes.length;i<len;i++)
{var tc=new Date().getTime();tc=tc-this.timings.cStart;if(tc>oParams.timeout)
{break;}
var sN=startNodes[i];var tree=new this.Node(sN,oParams);if(this.treeObjectMode)
{tree=tree.simplify();}
else
{tree=tree.serialise();if('{}'==tree)
{tree=null;}}
if(null!==tree)
{trees[trees.length]=tree;}}
this.tree=(this.treeObjectMode)?{x:trees}:'{x:['+trees.join(',')+']}';var msgM='completed before timeout of '+oParams.timeout+'ms';if(this.timedOut||undefined!==this.timings.cEnd)
{msgM='reached timeout of '+oParams.timeout+'ms';this.timedOut=true;this.lastTimeOut=oParams.timeout;}
else
{this.timings.cEnd=new Date().getTime();}
this.lastTime=(this.timings.cEnd-this.timings.cStart);if($iTXT.debug.Util.isLoggingOn())
{var sTree=(this.treeObjectMode)?$itxtUtil.serialiseJSON(this.tree,this.allowedFields):this.tree;var json=(this.metrics&$iTXT.debug.Util.ECH_XPAND_JSON)?$itxtUtil.formatJSONString(sTree,true):sTree;}
if(this.metrics&$iTXT.debug.Util.ECH_TEXTNODES_DUMP)
{var hnl=$iTXT.data.Context.textNodes.length;if(hnl>0)
{var dbNodes='<b style="color:blue;">ECH:</b> Hookable text nodes are:';for(var k=0;k<hnl;k++)
{var nV=$itxtUtil.cleanString($iTXT.data.Context.textNodes[k].nodeValue);dbNodes+='<br />'+k+': '+((nV.length>72)?nV.substr(0,70)+'...':nV)+' ('+nV.length+')';}}}},getProcessedPercentage:function()
{if(this.processedElementsCount>0&&this.eligibleElementsTotal>0)
{return Math.round((this.processedElementsCount/this.eligibleElementsTotal)*100);}
else
{return-1;}},getDynamicContentURL:function(sId){var ccSec=this.changedContentSections[sId],dcURL='';var aURL=$iTXT.glob.params.get('refurl','').split('?',2);var cURL=document.location.href.split('?')[0];if(aURL!=cURL){dcURL=cURL;}
else if(ccSec&&ccSec.dynamicContentURL){dcURL=ccSec.dynamicContentURL;}
else{dcURL=aURL[0]+'¤itxtSec'+sId;if(aURL[1]){dcURL+='?'+aURL[1];}}
if(undefined===ccSec||null===ccSec){ccSec=this.changedContentSections[sId];}
ccSec.dynamicContentURL=dcURL;this.setDynamicContentUrlReady(dcURL);return dcURL;},getStartNodes:function()
{if(!this.timings||!$itxtUtil.isObject(this.timings))
{this.timings={};}
this.timings.snStart=new Date().getTime();var rA=[];if(this.contextFull)
{if($iTXT.data.Context.params&&$iTXT.data.Context.params.get('contentnodes'))
{var heads=document.getElementsByTagName('head');var cN=$iTXT.data.Dom.parseVMNode($iTXT.data.Context.params.get('contentnodes'));var tags={};for(var k=0,lenk=cN.length;k<lenk;k++)
{if(cN[k].tag)
{tags[cN[k].tag]=true;}}
for(var j=0,lenj=heads.length;j<lenj;j++)
{for(var tag in tags)
{var tA=heads[j].getElementsByTagName(tag);for(var l=0,lenl=tA.length;l<lenl;l++)
{rA[rA.length]=tA[l];}}}
if(rA.length>0)
{}}}
else
{}
var detectedVersion=this.determineCompatMode();var overrideVersion=this.params.get('compatmode');var cM=this.params.get('compatmode',detectedVersion);var nA=document.getElementsByTagName('*');this.pageElementsTotal=nA.length;var hookNodes=this.params.get("hooknodes",null);this.hookableHeaders={};if(null!==hookNodes&&hookNodes.length>0)
{var hRegEx=new RegExp("<(h[0-9])>","i");for(var i=0;i<hookNodes.length;i++)
{var hn=hookNodes[i];var m=hRegEx.exec(hn);if(m)
{this.hookableHeaders[m[1].toLowerCase()]=true;}}}
if("v1"==cM)
{var assessor;if(null!==hookNodes&&hookNodes.length>0)
{assessor=new $iTXT.data.Dom.SelectorAssessor();assessor.add($iTXT.data.Dom.parseVMNode(hookNodes),'startnode');}
for(var n=0,lenn=nA.length;n<lenn;n++)
{var nd=nA[n];var assessment={'isStartnode':false};if(assessor)
{assessment=assessor.assess($iTXT.data.Dom.parseElement(nd));}
var nameAttr=nd.getAttribute('name');if((VM._.isString(nd.id)&&'intellitxt'==nd.id.toLowerCase())||(nameAttr&&VM._.isString(nameAttr)&&'intellitxt'==nameAttr.toLowerCase())||assessment.isStartnode)
{if(this.metrics&$iTXT.debug.Util.ECH_TEXTNODES_DUMP)
{}
rA[rA.length]=nd;}}
this.params.set("mintextlength",0);this.params.set("compatmode","v1");var hN=this.params.get("hooknodes",null);if(hN&&VM._.isArray(hN))
{hN[hN.length]='intellitxt';hN[hN.length]='!intellitxt';}
this.params.set("hooknodes",hN);if(rA.length===0)
{}}
else
{this.params.set("compatmode","v2");var bN=document.getElementsByTagName('body');for(var o=0,leno=bN.length;o<leno;o++)
{var nod=bN[o];if(this.metrics&$iTXT.debug.Util.ECH_TEXTNODES_DUMP)
{}
rA[rA.length]=nod;}}
this.timings.snEnd=new Date().getTime();return rA;},loadAssessment:function(n)
{if(!n||!n.itxtNodeId||!this.nodeAssessments[n.itxtNodeId])
{return null;}
return this.nodeAssessments[n.itxtNodeId];},modifyTree:function()
{var _iter=function(s,tA)
{var spliced=[];for(var tI=0,tL=tA.length;tI<tL;tI++)
{var tC=tA[tI];if(tC.newTree)
{var nId=tC.nodeId;var k=tC.fieldName;var v=tC.fieldValue;var t=tC.newTree;if(s[k]&&v==s[k])
{for(var f in s)
{delete s[f];}
for(var m in t)
{s[m]=t[m];}
if(nId)
{$iTXT.data.Dom.nodeIds[nId]=s;}
spliced.push(nId);tA[tI]={};}}}
if(1==s.p)
{var currL=pNodes.length;if(currL>0)
{var lastM=currL-1;var lastP=pNodes[lastM];if(!lastP||0===lastP.length)
{currL=lastM;}}
pNodes[currL]=[];}
if(s.n)
{var n=$iTXT.data.Context.textNodes[s.n-1];tNodes[tNodes.length]=n;s.n=tNodes.length;var currPara=pNodes.length-1;if(currPara>=0)
{pNodes[currPara].push(n);}}
if(s.x&&s.x.length&&s.x.length>0)
{for(var i=0,l=s.x.length;i<l;i++)
{var rIds=_iter(s.x[i],tA);if(rIds.length>0)
{spliced=spliced.concat(rIds);}}}
return spliced;};var dS=[];if(this.modifiedTrees.length)
{var pNodes=[],tNodes=[];dS=_iter(this.tree,this.modifiedTrees);if(dS.length>0)
{this.paragraphNodes=pNodes;this.textNodes=tNodes;}
this.modifiedTrees=[];}
return dS;},setDynamicContentUrlReady:function(dcURL){if(!this.dynamicContentURLs[dcURL]){this.dynamicContentURLs[dcURL]={sent:false};}},_alreadyScanning:function(){if($iTXT.data.Context.dynamicContentHandler.isMutation&&$iTXT.data.Context.dynScanned){return true;}
return false;},_isInvalidNode:function(contentNode,dcSec,nodeId){if(!VM._.isObject(contentNode)){return true;}else if(!dcSec){return true;}
return false;},_recontextualiseSubtree:function(node,nodeId,contentNode,oParams){this.timings.cStart=new Date().getTime();this.harvestCount++;this.modifiedTrees.push({nodeId:nodeId,fieldName:'v',fieldValue:contentNode.v,newTree:new this.Node(node,oParams).simplify()});this.timings.cEnd=new Date().getTime();},_reinitialise:function(dcSec,doneFlag,dcURL){var tmpDispArr=[];$iTXT.subscribe("$iTXT:tmpl:load",$iTXT.core.Event.bind($iTXT.itxt.currentController,$iTXT.itxt.currentController.templatesLoad),tmpDispArr);$iTXT.itxt.currentController.templateLoadUnSubFunc=tmpDispArr.pop();$iTXT.itxt.currentController.initialiserLoaded=false;$iTXT.itxt.currentController.limitClientParams=['page.md5','pvm','pvu','sid'];$iTXT.itxt.currentController.skipRecontext=doneFlag;$iTXT.itxt.currentController.dropInitialiser();if(!this.dynamicContentURLs[dcURL]){this.dynamicContentURLs[dcURL]={};}
this.dynamicContentURLs[dcURL].sent=true;},_echMetrics:function(){if(this.metrics&$iTXT.debug.Util.ECH_TEXTNODES_DUMP){var hnl=$iTXT.data.Context.textNodes.length;if(hnl>0){var dbNodes='<b style="color:#ff6600;">ECH:</b> Hookable text nodes are:';for(var j=0;j<hnl;j++){var nV=$itxtUtil.cleanString($iTXT.data.Context.textNodes[j].nodeValue);dbNodes+='<br />'+j+': '+'('+nV.length+') '+((nV.length>73)?nV.substr(0,70)+'...':nV);}}}},_processDynamicNode:function(dcURL,dcSec){$iTXT.glob.params.set('refurl',dcURL,100);this.modifyTree();this.lastTime=(this.timings.cEnd-this.timings.cStart);if($iTXT.debug.Util.isLoggingOn()){var sTree=$itxtUtil.serialiseJSON(this.tree,this.allowedFields);var json=(this.metrics&$iTXT.debug.Util.ECH_XPAND_JSON)?$itxtUtil.formatJSONString(sTree,true):sTree;}
this._echMetrics();},onContentStateChange:function(node){if(this._alreadyScanning()){return;}
$iTXT.data.Context.dynScanned=true;var nodeId=$iTXT.data.Dom.setNodeId(node);var contentNode=$iTXT.data.Dom.nodeIds[nodeId];var dcSec=contentNode.v;if(this._isInvalidNode(contentNode,dcSec,nodeId)){return;}
var oParams=this.params.get('oparams');this._recontextualiseSubtree(node,nodeId,contentNode,oParams);var dcURL=this.getDynamicContentURL(dcSec);this.setDynamicContentUrlReady(dcURL);this.setPageTitle();var doneFlag=false;if($iTXT.data.Context.dynamicContentHandler.isMutation){doneFlag=this.dynamicContentURLs[dcURL].sent;}
var dcState=$iTXT.data.Context.dynamicContentHandler.getDynamicContentState(node);if(dcState){this._processDynamicNode(dcURL,dcSec);this._reinitialise(dcSec,doneFlag,dcURL);}},preprocessExcludeNodes:function(params)
{var fS=new Date().getTime();var eN=params.get('excludenodes',null),badC=0;if(eN&&eN.length)
{var i=eN.length,keep=[];while(i--)
{var tN=eN[i];if('<'==tN.substring(0,1)&&'>'==tN.slice(-1))
{tN=tN.slice(1,-1).toLowerCase();var tags=document.getElementsByTagName('body')[0].getElementsByTagName(tN);var j=tags.length;while(j--)
{var n=tags[j];try
{n.itxtBad=this.BAD_EXCL;badC++;}
catch(x)
{}}}
else
{keep[keep.length]=tN;}}
params.set('excludenodes',keep);}
this.eligibleElementsTotal=this.pageElementsTotal-badC;var fE=new Date().getTime();var fD=(fE-fS);},preprocessImages:function(params)
{var fS=new Date().getTime();var fE=null;var minimagew=params.get('minimagew',300);var minimageh=params.get('minimageh',300);var imgs=document.getElementsByTagName('img');var len=imgs.length,badC=0;var i=len;var fD;var timeout=params.get('timeout.image',params.get('timeout',1500));while(i--)
{var n=imgs[i],bad=false;var imgW=n.width;var imgH=n.height;var imgD="-"+imgW+"x"+imgH;if(minimagew>=0&&minimageh>=0&&(imgW<minimagew||imgH<minimageh))
{bad=this.BAD_SML_IMG;}
else if("-120x600"==imgD||"-160x600"==imgD||"-300x250"==imgD||"-180x150"==imgD||"-728x90"==imgD)
{bad=this.BAD_IAB_IMG;}
if(bad)
{try
{n.itxtBad=bad;badC++;}
catch(x)
{}}
fE=new Date().getTime();fD=(fE-fS);if(fD>timeout)
{break;}}
var proc=len-i-1;var msg=(fD>timeout)?"reached":"completed before";},saveAssessment:function(n,a)
{if(n.nodeType&&n.nodeType==$itxtUtil.ELEMENT_NODE)
{var id=$iTXT.data.Dom.setNodeId(n);$iTXT.data.Context.nodeAssessments[id]=a;}},setContextFull:function()
{var sV=true;var pV=$iTXT.glob.params.get('force.context',-1);if(!$iTXT.js.requiresContextualization)
{sV=false;}
if(pV>=0)
{sV=(pV>0);}
this.contextFull=sV;},setPageTitle:function()
{var t=document.getElementsByTagName('title')[0];if(t)
{if(!!t.childNodes.length)
{this.pageTitle=$itxtUtil.cleanString(t.firstChild.data);}
else if(t.innerText)
{this.pageTitle=$itxtUtil.cleanString(t.innerText);}}},setDynamicContentMode:function()
{var vN=this.params.get('dynamicnodes',[]);this.dynamicContentMode=(vN.length>0);if(this.dynamicContentMode){var resetFlag=function(){window.setTimeout(function(){$iTXT.data.Context.dynScanned=false;},1000);};$iTXT.subscribe("$iTXT:initialiser:load:complete",resetFlag);$iTXT.subscribe("$iTXT:hooks:loaded",resetFlag);}},setDynamicContentThreshold:function()
{this.dynamicContentThreshold=this.params.getInt('dynamicthreshold',15);},setDynamicContentType:function(){var dcType=this.params.get('dynamictype','mutation');this.dynamicContentHandler=this.observationTypes.mutationObserver;if('transform'==dcType){this.dynamicContentHandler=this.observationTypes.transform;}else if('mutation'==dcType){if(window.MutationObserver||window.WebKitMutationObserver){this.dynamicContentHandler=this.observationTypes.mutationObserver;}else if(window.MutationEvent){this.dynamicContentHandler=this.observationTypes.mutationEvents;}else{this.dynamicContentMode=false;}}
if(!!this.dynamicContentHandler){}},setTreeObjectMode:function()
{var pV=$iTXT.glob.params.get('context.tree.object',0);this.treeObjectMode=!!(this.dynamicContentMode||pV>0);}};};$iTXT.js.loader["$iTXT.data.Country"]=true;$iTXT.data.Country_Load=function(){var undefined;$iTXT.data.Country={langs:{de:"de",at:"de",ch:"de",fr:"fr",gb:"en-gb",uk:"en-gb",it:"it",nl:"nl",se:"sv",no:"no",dk:"da",jp:"ja",cn:"zh",es:"es",fi:"fi",pl:"pl",ru:"ru",pt:"pt"},translations:{en:{sCC:"$",sspl:"Advertisement",swti:"What's this?",slm:"LEARN MORE",ssch:"Searching...",sbn:"Buy now",scls:"Close",sEet:"End time",sEcb:"Place bid",sEsn:"Seller",ierao:"Related Articles on ",iera:"Related Articles",wcfa:"Featured article",iist:"Shop for items related to ",iirt:"Search the web for info related to ",iimsnt:"Live Search for ",iivt:"Show video related to ",iiat:"Information related to ",gRCSrcTSt:"Search this site:",gRCSrc:"Search",gRCMor:"MORE",gROTE:"Roll over to expand",gCTLM:"Click to learn more","TRANS.PRECS":"${SCC}","TRANS.POSTCS":"","TRANS.PRICE":"Price","TRANS.DECIMALPLACE":".","TRANS.SEARCH":"Search","trans.moreres":'More Results',"trans.visitstore":'Visit Store',"trans.gotostore":'Go to store',"trans.privacyicon.txt":'AdChoices',"trans.expanding":'Expanding...',"trans.ad":"Ad","trans.progressbar":"Click or hover to expand","trans.from":"from","trans.more":"more"},"en-gb":{sCC:"&pound;","trans.privacyicon.txt":'AdChoices'},fr:{sCC:"&euro;",sspl:"Publicit&#233;",swti:"Qu'est-ce que c'est?",sbn:"Achat maintenant",scls:"Fermer",sEet:"Temps restant",sEcb:"Ench&#233;rir",sEsn:"Vendeur",ierao:"Articles connexes sur ",iera:"Articles connexes",wcfa:"Article phare",iist:"Boutique pour les produits apparent&#233;s &#224; ",iirt:"Rechercher sur le web une info apparent&#233;e &#224; ",iivt:"Visualiser les vid&#233;os apparent&#233;es &#224; ",iiat:"Information apparent&#233;e &#224; ",gRCSrcTSt:"Rechercher sur le site:",gRCSrc:"Rechercher",gRCMor:"PLUS",gROTE:"Agrandir la vid\u00E9o",gCTLM:"En savoir plus","TRANS.DECIMALPLACE":",","TRANS.SEARCH":"Rechercher","trans.moreres":'Plus',"trans.visitstore":'Boutique en ligne',"trans.gotostore":'Aller &#224 la boutique',"trans.privacyicon.txt":'Choisir sa pub',"trans.expanding":'Chargement...',"trans.ad":"Publicit&#233;"},de:{sCC:"&euro;",sspl:"Werbung",swti:"was ist das?",sbn:"Jetzt kaufen",scls:"Schlie&#223;en",sEet:"Angebotsende",sEcb:"Bieten",sEsn:"Verk&#228;ufer",ierao:"Themenverwandte Artikel ",iera:"Themenverwandte Artikel",wcfa:"Artikelhighlight",iist:"Finden Sie weitere Produkte zum Thema ",iirt:"Finden Sie weitere Informationen zum Thema ",iivt:"Videos zum Thema ",iiat:"Weitere Informationen zum Thema ",gRCSrcTSt:"Suche auf:",gRCSrc:"Suchen",gRCMor:"MEHR INFO",mlm:true,gROTE:"Hier Vergr\u00F6ssern",gCTLM:"Mehr Info",TR_PRICE:"Aktuell","TRANS.PRECS":" ","TRANS.POSTCS":" ${SCC}","TRANS.DECIMALPLACE":",","TRANS.SEARCH":"Suchen","trans.moreres":'Mehr',"trans.visitstore":'Zum Shop',"trans.gotostore":'Zum Shop',"trans.privacyicon.txt":'Werbung',"trans.expanding":'Video L&#228;dt...',"trans.ad":"Werbung","trans.from":"ab","trans.more":"mehr"},es:{sCC:"&euro;",sspl:"Publicidad",swti:"&#191; Qu&#233; es esto?",scls:"cierre",ierao:"Otros art&#237;culos sobre ",iera:"Otros art&#237;culos",wcfa:"Art&#237;culo principal",iist:"Compra art&#237;culos relacionados con ",iirt:"B&#250;squeda para informaci&#243;n relacionado con ",iivt:"Mostrar video relacionado con ",iiat:"Informaci&#243;n relacionado con ",gRCSrcTSt:"B&#250;squeda del sitio:",gRCSrc:"Buscar",gRCMor:"M&#193;S",gROTE:"Pasar por encima",gCTLM:"Haz clic aqu\u00ED","TRANS.DECIMALPLACE":",","TRANS.SEARCH":"Buscar","trans.moreres":"M&#225;s","trans.visitstore":'Ir a tienda',"trans.gotostore":'Ir a tienda',"trans.privacyicon.txt":'Publicidad',"trans.expanding":'Cargando video...',"trans.ad":"Publicidad"},it:{sCC:"&euro;",sspl:"Pubblicit&#224;",swti:"Che cos'&#232;?",sbn:"Compra ora",scls:"Chiudi",sEet:"Ora di scadenza",sEcb:"Fai un'offerta",sEsn:"Venditore",ierao:"Altri articoli su ",iera:"Altri articoli",wcfa:"In primo piano",iist:"Acquista prodotti in relazione a ",iirt:"Cerca nel web informazioni su ",iivt:"Mostra video su ",iiat:"Informazioni su ",gRCSrcTSt:"Cerca nel sito:",gRCSrc:"Cerca",gRCMor:"VAI",gROTE:"Passa il cursore qui sopra",gCTLM:"Clicca qui","TRANS.DECIMALPLACE":",","TRANS.SEARCH":"Cerca","trans.moreres":"Vai","trans.visitstore":'Visita il negozio',"trans.gotostore":'Visita il negozio',"trans.privacyicon.txt":'Scegli tu!',"trans.expanding":'Caricamento video...',"trans.ad":"Pubblicit&#224;"},nl:{sCC:"&euro;",sspl:"Advertentie",swti:"Wat is dit?",scls:"Sluiten",sEet:"End time",iist:"Shop voor een item in verband met ",iirt:"Zoek op het net voor informatie in verband met ",iivt:"Laat een video zien in verband met ",iiat:"Informatie in verband met ",gRCSrcTSt:"Zoeken op deze site:",gRCSrc:"Zoeken",gRCMor:"MEER",gROTE:"Wijs aan en vergroot",gCTLM:"Klik voor meer info","TRANS.DECIMALPLACE":",","TRANS.SEARCH":"Zoeken","trans.moreres":"Meer","trans.privacyicon.txt":'Info',"trans.ad":"Advertentie"},sv:{sCC:"kr ",sspl:"Annons",swti:"Vad &#228;r detta?",sbn:"K&#246;pa nu",scls:"St&#228;nga",sEet:"Sluttid",sEcb:"L&#228;gg bud",sEsn:"s&#228;ljare",iist:"Handla varor relaterade till ",iirt:"S&#246;k p&#229; webben f&#246;r info relaterad till ",iivt:"Spela upp video relaterad till ",iiat:"Information relaterad till ",gRCSrcTSt:"S&#246;k p&#229; sidan:",gRCSrc:"S&#246;k",gRCMor:"MER",gROTE:"F\u00F6rstora med musen",gCTLM:"Klicka f\u00F6r mer info","TRANS.SEARCH":"S&#246;k","trans.moreres":"Mer","trans.privacyicon.txt":'Annonsval',"trans.ad":"Annons"},no:{sCC:"kr ",sspl:"Annonse",sspls:"Annonse",swti:"Hva er dette?",sbn:"Kj\u00D8p n\u00E5",scls:"Lukk vindu",sEet:"Sluttdato",sEcb:"Legg inn bud",sEsn:"Selger",iist:"Shop etter relaterte produkter ",iirt:"S&#248;k p&#229; nettet for mer informasjon av ",iivt:"Se video p&#229; ",iiat:"Informasjon relatert til ",gRCSrcTSt:"S&#248;k p&#229; siden:",gRCSrc:"S&#248;ke",gRCMor:"MER",gROTE:"Mus over og utvid",gCTLM:"Klikk for \u00E5 se mer","TRANS.SEARCH":"S&#248;ke","trans.moreres":"Mer","trans.privacyicon.txt":'Annonsevalg',"trans.ad":"Annonse"},da:{sCC:"kr ",sspl:"Annonce",swti:"Hvad er dette?",sbn:"K\u00D8b nu",scls:"Luk vindue",sEet:"Slut",sEcb:"Byd",sEsn:"S\u00E6lger",iist:"Shop for ting relateret til ",iirt:"S&#248;g p&#229; nettet for ting relateret til ",iivt:"Vis video relateret til ",iiat:"Information relateret til ",gRCSrcTSt:"S&#248;g p&#229; siden:",gRCSrc:"S&#248;gning",gRCMor:"MERE",gROTE:"Rul over for st\u00F8rre",gCTLM:"Klik for mere viden","TRANS.SEARCH":"S&#248;gning","trans.moreres":"Mere","trans.privacyicon.txt":'Annoncevalg',"trans.ad":"Annonce"},fi:{sCC:"&euro;",sspl:"Mainos",swti:"Mik&#228; t&#228;m&#228; on?",ssch:"Etsim&#228;ss&#228;...",scls:"Sulje",gROTE:"Kohdista suurentaaksesi",gCTLM:"Klikkaa lis\u00E4tietoja","trans.privacyicon.txt":'Mainokseni',"trans.ad":"Mainos"},ru:{sCC:"\u0440\u0443\u0431",sspl:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",swti:"\u0447\u0442\u043E \u044D\u0442\u043E?",slm:"\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",ssch:"\u041F\u043E\u0438\u0441\u043A...",sbn:"\u041A\u0443\u043F\u0438\u0442\u044C \u0421\u0435\u0439\u0447\u0430\u0441",scls:"\u0437\u0430\u043A\u0440\u044B\u0442\u044C (\u043E\u043A\u043D)",sEet:"\u0414\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",sEcb:"\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443",sEsn:"\u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446",ierao:"\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 ",iera:"\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 ",wcfa:"\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0421\u0442\u0430\u0442\u044C\u044F",iist:"\u041A\u0443\u043F\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0441\u0445\u043E\u0436\u0438\u0439 \u0441 ",iirt:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E ",iivt:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u0441\u0445\u043E\u0436\u0435\u0435 \u0441 ",iiat:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0430\u044F\u0441\u044F \u043A ",gRCSrcTSt:"\u041F\u043E\u0438\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443:",gRCSrc:"\u041F\u043E\u0438\u0441\u043A",gRCMor:"\u0414\u0410\u041B\u0415\u0415",gROTE:"&#1053;&#1072;&#1074;&#1077;&#1076;&#1080;&#32;&#1080;&#32;&#1091;&#1074;&#1077;&#1083;&#1080;&#1095;&#1100;",gCTLM:"&#1055;&#1086;&#1076;&#1088;&#1086;&#1073;&#1085;&#1086;","TRANS.SEARCH":"\u041F\u043E\u0438\u0441\u043A","trans.moreres":"\u0414\u0410\u041B\u0415\u0415","trans.ad":"\u0420\u0435\u043A\u043B\u0430\u043C\u0430"},pl:{sCC:"z\u0142",sspl:"Reklama",swti:"Co to jest?",slm:"DOWIEDZ SI\u0118 WI\u0118CEJ",ssch:"Trwa przeszukiwanie",sbn:"Kup teraz",scls:"Zamknij",sEet:"Koniec",sEcb:"Z\u0142\u00f3\u017c Ofert\u0119",sEsn:"Sprzedawca",iist:"Kupuj powi\u0105zane przedmioty ",iirt:"Szukaj w Internecie Informacji na podobny temat ",iivt:"Poka\u017c Video na podobny temat ",iiat:"Informacja na podobny temat ",gRCSrcTSt:"Szukaj na tej Stronie:",gRCSrc:"Szukaj",gRCMor:"Wi\u0119cej","TRANS.SEARCH":"Szukaj","trans.moreres":"Wi\u0119cej","trans.visitstore":'Odwied\u017a sklep',"trans.gotostore":'Odwied\u017a sklep',"trans.privacyicon.txt":'Informacja',"trans.expanding":'Otwieranie...',"trans.ad":"Reklama"},ja:{sCC:"&yen;",sspl:"\u30b9\u30dd\u30f3\u30b5\u30fc\u30ea\u30f3\u30af",swti:"\u3053\u306e\u5e83\u544a\u306b\u3064\u3044\u3066",sbn:"\u4eca\u8cb7\u7269",scls:"\u9589\u3058\u308b","trans.ad":"\u30b9\u30dd\u30f3\u30b5\u30fc\u30ea\u30f3\u30af"},zh:{sCC:"&yen;",sspl:"\u5e7f\u544a",swti:"\u8fd9\u662f\u4ec0\u4e48\u5e7f\u544a",sbn:"\u4eca\u8cb7\u7269",scls:"\u5173\u5e7f\u544a","trans.ad":"\u5e7f\u544a"},pt:{gROTE:"Clique para aumentar",gCTLM:"Clique para mais info","trans.privacyicon.txt":'Your online choices'}},country:"en",tr:function(name,cc)
{cc=cc||this.country;var lang=this.langs[cc.toLowerCase()]||"en";return this.translations[lang][name]||this.translations["en"][name]||"";},init:function(l)
{this.country=l;for(var prop in this.translations.en)
{$iTXT.glob.dbParams.set(prop,this.tr(prop),$iTXT.cnst.WEIGHTING_DEFAULT_TRANSLATION);}
$iTXT.glob.translationSet={};$iTXT.glob.translationSet.isMLM=(""==this.tr("mlm"))?false:this.tr("mlm");$iTXT.glob.dbParams.set("trans.lang",this.langs[this.country]||"en",$iTXT.cnst.WEIGHTING_DEFAULT_TRANSLATION);}};};$iTXT.js.loader["$iTXT.data.Dom"]=true;$iTXT.data.Dom_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.data.Dom={nodeIds:[],Selector:$iTXT.core.Class.create({init:function(tag,id,className,attrs)
{if(null!=tag&&'string'==typeof tag&&""!=tag)
{this.tag=tag.toLowerCase();}
if(null!=id&&'string'==typeof id&&""!=id)
{this.id=id.toLowerCase();}
if(null!=className&&'string'==typeof className&&""!=className)
{this.className=className.toLowerCase();}
if(null!=attrs&&$itxtUtil.isObject(attrs)&&$itxtUtil.objCount(attrs)>0)
{this.attrs={};for(var attr in attrs)
{try
{var tAttr=attrs[attr].toLowerCase();if('string'==typeof tAttr||!isNaN(tAttr))
{this.attrs[attr.toLowerCase()]=tAttr;}}catch(e){}}}}}),SelectorAssessor:$iTXT.core.Class.create({_othHash:{},_tagHash:{},_idHash:{},_classHash:{},_attrHash:{},_intHash:{},_selHash:{},_count:0,_addToHash:function(h,i,k,v)
{var xI={};if(undefined!=h[i])
{xI=h[i];}
var xV=[];if(undefined!=xI[k])
{xV=xI[k];}
if(!VM._.isArray(xV)||$itxtUtil.inArray(xV,v))
{return;}
xV[xV.length]=v;xI[k]=xV;if(k.match&&k.match(/\*/))
{xI.wild=true;}
h[i]=xI;},_extract:function(rO,i,h,s,f)
{if($itxtUtil.isObject(rO)&&$itxtUtil.isObject(i)&&$itxtUtil.isObject(h)&&$itxtUtil.isClass(s)&&'string'==typeof f&&(undefined!=s[f]||'sel'==f))
{var sz=$itxtUtil.flattenJSON(s);for(var intt in i)
{var thisI=i[intt],thisH=h[intt];if(thisI&&'function'!=typeof thisI)
{if(thisH&&$itxtUtil.isObject(thisH))
{var tO=thisH;var comps=[];var match=false;if('sel'==f)
{if(thisH[sz])
{var kN='is'+intt.substr(0,1).toUpperCase()+intt.substr(1);rO[kN]=true;match=true;}}
else
{var sF=s[f];if($itxtUtil.isObject(sF))
{for(var oK in sF)
{var sFoK=sF[oK];if('function'!=typeof sFoK)
{comps.push=sFoK;}}}
else
{comps[comps.length]=sF;}
var cands=[];var j=comps.length;while(j--)
{var comp=comps[j];if(tO[comp])
{cands=cands.concat(tO[comp]);}
else if(tO.wild)
{for(var o in tO)
{var tOo=tO[o];if(VM._.isArray(tOo))
{cands=cands.concat(tOo);}}}}
if(cands.length>0&&$iTXT.data.Dom.findSelector(s,cands,1))
{var kN='is'+intt.substr(0,1).toUpperCase()+intt.substr(1);rO[kN]=true;match=true;}}
if(true==match)
{if(this._othHash[intt]&&this._othHash[intt][sz]&&VM._.isArray(this._othHash[intt][sz]))
{rO[intt]=this._othHash[intt][sz][0];}
delete i[intt];}}}}}
return rO;},add:function(sel,intt,oth)
{if((!$itxtUtil.isClass(sel)&&!VM._.isArray(sel))||'string'!=typeof intt)
{return;}
var sA=[];var oA=[];if(!VM._.isArray(sel))
{sA[0]=sel;}
else
{sA=sel;}
if(!VM._.isArray(oth))
{oA[0]=oth;}
else
{oA=oth;}
if(!$itxtUtil.isClass(sA[0]))
{return;}
var i=sA.length;while(i--)
{sel=sA[i];oth=oA[i];if(undefined==sel.tag&&undefined==sel.id&&undefined==sel.className&&undefined==sel.attrs)
{continue;}
var s=$itxtUtil.flattenJSON(sel);this._intHash[intt]=true;this._addToHash(this._selHash,intt,s,sel);if(undefined!=sel.tag)
{this._addToHash(this._tagHash,intt,sel.tag,sel);}
if(undefined!=sel.id)
{this._addToHash(this._idHash,intt,sel.id,sel);}
if(undefined!=sel.className)
{this._addToHash(this._classHash,intt,sel.className,sel);}
if($itxtUtil.isObject(sel.attrs))
{for(var aN in sel.attrs)
{if('function'!=typeof sel.attrs[aN])
{this._addToHash(this._attrHash,intt,aN,sel);}}}
if(undefined!=oth)
{this._addToHash(this._othHash,intt,s,oth);}
this._count++;}},assess:function(sel,spInt)
{if(!sel instanceof $iTXT.data.Dom.Selector)
{return{};}
var intHash={};if(spInt&&'string'==typeof spInt)
{intHash[spInt]=true;}
else
{for(var k in this._intHash)
{if('function'!=typeof this._intHash)
{intHash[k]=this._intHash[k];}}}
var rO={};for(var intt in intHash)
{if('function'!=typeof intt)
{rO['has'+intt.substr(0,1).toUpperCase()+intt.substr(1)+'s']=true;rO['is'+intt.substr(0,1).toUpperCase()+intt.substr(1)]=false;}}
if($iTXT.core.Browser.is("Explorer"))
{rO=this._extract(rO,intHash,this._selHash,sel,'sel');}
rO=this._extract(rO,intHash,this._tagHash,sel,'tag');if(sel.id)
{rO=this._extract(rO,intHash,this._idHash,sel,'id');}
if(sel.className)
{rO=this._extract(rO,intHash,this._classHash,sel,'className');}
if(sel.attrs)
{rO=this._extract(rO,intHash,this._attrHash,sel,'attrs');}
return rO;},count:function()
{return this._count;},summarise:function(html)
{try
{var op=(html)?'&lt;':'<';var cl=(html)?'&gt;':'>';var nl=(html)?'<br />':'\n';var out=[];for(var intt in this._intHash)
{if('function'!=typeof this._intHash[intt])
{var mems=[];if(undefined!=this._selHash[intt])
{for(var s in this._selHash[intt])
{var sels=this._selHash[int][s];if(sels.length)
{var i=sels.length;while(i--)
{var sel=sels[i];var mem='';if(sel.tag)
{mem+=op+sel.tag+cl;}
else
{}
if(sel.id)
{mem+='#'+sel.id;}
if(sel.className)
{mem+='.'+sel.className;}
if(sel.attrs)
{for(var a in sel.attrs)
{if('function'!=typeof sel.attrs[a])
{mem+='@'+a;if('*'!=sel.attrs[a])
{mem+='='+sel.attrs[a];}}}}
if(this._othHash[intt]&&this._othHash[intt][s])
{mem+=':'+this._othHash[intt][s][0];}
mems[mems.length]=mem;}}}}
mems=mems.join(',');out[out.length]=intt+': '+mems;}}
return out.join(nl);}
catch(x)
{return x.message;}},init:function()
{}}),getElementsByClassName:function(c,n)
{if(!n&&null!=document)
{n=document;}
if(n)
{if(n.getElementsByClassName&&'function'==typeof n.getElementsByClassName)
{return n.getElementsByClassName(c);}
else
{var rN=[];var rX=new RegExp('\\b'+c+'\\b');var aN=n.getElementsByTagName('*');for(var i=0,len=aN.length;i<len;i++)
{if(rX.test(aN[i].className))
{rN[rN.length]=aN[i];}}
return rN;}}},parseSelector:function(selector,vmmode)
{var tag='',separator='',identifier='',value='',out=null;var PATTERN1=(vmmode)?/(\>\@|\>|\!|\@)/:/(\#|\.)/;var PATTERN2=/\=/;var priMatch=selector.match(PATTERN1);if(priMatch)
{separator=priMatch[0];var bits=selector.split(separator,2);if(vmmode)
{separator=separator.replace(/\>\@/,'@').replace(/\>/,'#').replace(/\!/,'.');}
tag=bits[0];identifier=bits[1];if(vmmode&&identifier.match(PATTERN2))
{var vsep=identifier.match(PATTERN2)[0];var vbits=identifier.split(vsep,2);identifier=vbits[0];value=vbits[1];}}
else
{tag=selector;}
if(vmmode)
{var id=null,className=null,attr=null,val=null;if(selector==tag)
{separator='#';identifier=selector;tag='';}
if(''!=tag)
{tag=tag.toLowerCase().replace(/\<|\>/,'');}
if(''!=identifier)
{switch(separator)
{case"#":id=identifier;break;case".":className=identifier;break;case"@":attr=identifier;if(''!=value)
{val=value;}
else
{val='*';}
break;}}
var attrO={};if(attr)
{attrO[attr]=val;}
out=new $iTXT.data.Dom.Selector(tag,id,className,attrO);}
else
{out=[tag.toLowerCase(),separator,identifier];}
return out;},findSelector:function(needle,haystack,precision)
{var _checkField=function(n,h,p,d)
{if(undefined==n&&undefined==h)
{return(p>=0)?true:false;}
else if(undefined!=n&&undefined==h)
{return(p>=0)?true:false;}
else if(undefined==n&&undefined!=h)
{return(p==0)?true:false;}
else if($itxtUtil.isObject(n))
{var res=false;for(var a in n)
{if('function'!=typeof n[a])
{var aRes=_checkField(n[a],h[a],p,'attr['+a+']');res=aRes;if((aRes&&p<0)||(!aRes&&p>=0))
{break;}}}
return res;}
else
{return $itxtUtil.fuzzyMatch(h,n);}};if(!precision||isNaN(precision))
{precision=0;}
var nA=[];if(!VM._.isArray(needle))
{nA[nA.length]=needle;}
else
{nA=needle;}
var hA=[];if(!VM._.isArray(haystack))
{hA[hA.length]=haystack;}
else
{hA=haystack;}
var i=nA.length;while(i--)
{var j=hA.length;while(j--)
{var ret=false;var tN=nA[i];var tH=hA[j];if(precision<0)
{ret=(_checkField(tN.tag,tH.tag,precision,'tag')||_checkField(tN.id,tH.id,precision,'id')||_checkField(tN.className,tH.className,precision,'class')||_checkField(tN.attrs,tH.attrs,precision,'attrs'));}
else
{ret=(_checkField(tN.tag,tH.tag,precision,'tag')&&_checkField(tN.id,tH.id,precision,'id')&&_checkField(tN.className,tH.className,precision,'class')&&_checkField(tN.attrs,tH.attrs,precision,'attrs'));}
if(ret)
{return ret;}}}
return false;},extractAttrs:function(elem,constraint)
{var out={};if(elem&&elem.nodeType&&$itxtUtil.ELEMENT_NODE==elem.nodeType&&elem.attributes)
{if(constraint&&$itxtUtil.isObject(constraint))
{for(var cName in constraint)
{if('function'!=typeof constraint[cName])
{var cValue=elem.getAttribute(cName);if(cValue)
{out[cName]=cValue;}}}}
else
{var i=elem.attributes.length;while(i--)
{var attr=elem.attributes[i];if("id"!=attr.nodeName&&"class"!=attr.nodeName)
{out[attr.nodeName]=attr.nodeValue;}}}}
return out;},parseVMNode:function(inp)
{var outA=[];if(null!=inp)
{if(!VM._.isArray(inp))
{inp=[inp];}
var i=inp.length;while(i--)
{var sel=this.parseSelector(inp[i],true);if(sel instanceof $iTXT.data.Dom.Selector)
{outA[outA.length]=sel;}}}
if(outA.length==1)
{return outA[0];}
else
{return outA;}},parseElement:function(inp,attrC)
{var inA=[],outA=[];if(inp&&inp.nodeType&&$itxtUtil.ELEMENT_NODE==inp.nodeType)
{inA[inA.length]=inp;}
else if(undefined==inp)
{return null;}
else
{inA=inp;}
if(attrC&&'string'==typeof attrC)
{attrC=attrC.split(",");}
var i=inA.length;while(i--)
{var elem=inA[i];if(elem&&elem.nodeType&&$itxtUtil.ELEMENT_NODE==elem.nodeType)
{if(outA.length==0)
{var attrO=null;if(attrC&&attrC.length>0)
{attrO={};for(var j=0,lenj=attrC.length;j<lenj;j++)
{attrO[attrC[j]]=true;}
attrO=this.extractAttrs(elem,attrO);}
outA[outA.length]=new $iTXT.data.Dom.Selector(elem.tagName.toLowerCase(),elem.id,elem.className,attrO);}}
if(i<0)
{break;}}
if(outA.length==1)
{return outA[0];}
else
{return outA;}},getElementSignature:function(n,e)
{if(n&&n.tagName)
{return((e)?'&lt;':'<')+n.tagName.toLowerCase()+((e)?'&gt;':'>')+((n.id)?'#':'')+n.id+((n.className)?'.':'')+n.className;}
else
{return'';}},getInnerTextLength:function(n)
{var v=0;var badTags={'a':true,'applet':true,'embed':true,'form':true,'iframe':true,'img':true,'noscript':true,'object':true,'script':true,'style':true,'xml':true};if(!n||!n.tagName||badTags[n.tagName.toLowerCase()])
{return v;}
var t='',children=n.childNodes;var i=children.length;while(i--)
{var c=children[i];if($itxtUtil.TEXT_NODE==c.nodeType)
{t+=' '+c.nodeValue;}}
return $itxtUtil.cleanString(t).length;},getElementByTagName:function(tag,index)
{index=index||0;var ts=document.getElementsByTagName(tag);if(ts.length>index)
{return ts[index];}
return null;},getElementByClassName:function(className,index)
{index=index||0;var ts=$iTXT.data.Dom.getElementsByClassName(className);if(ts.length>index)
{return ts[index];}
return null;},getNodeByTagClassOrId:function(p,i)
{p=$itxtUtil.getTagName(p);var tag=this.getElementByTagName(p,i);if(!tag&&p.charAt(0)=="!")
{tag=$iTXT.data.Dom.getElementByClassName(p.substring(1),i);}
else if(!tag)
{tag=document.getElementById(p);}
return tag;},searchEngines:{},detectSearchEngines:function()
{function _parseTerms(sQry,sQSD)
{sQry=sQry.replace(/%20/g,"+");var i;var sC;var sPrv='+';var sFlat='';var r=new RegExp("[&|?]"+sQSD+"=\+?([^&]*)");oT=(r.exec(sQry));if(oT===null)
{return'';}
sQry=oT[oT.length-1];for(var i=0;i<sQry.length;i++)
{sC=sQry.charAt(i);if(!(sC==='+'&&sPrv==='+'))
{sFlat+=sC==='+'?' ':sC;}
sPrv=sC;}
sQry=sFlat;return sFlat;}
function _parseReferer(sU)
{var sQ,sT,r,oT,D,i,iD;r=/(^https?:\/\/)([^\/]+)(.*)/gi;oT=r.exec(sU);if(oT==null||oT.length<2)
{return;}
sU=oT[2];sT=oT.length>=4?oT[3].replace(/\./g,"%2E"):'';D=sU.split('.');iD=D.length;if(iD<2)
{return;}
outer:for(var i=0;i<iD-1;i++)
{if($iTXT.data.Dom.searchEngines[D[i]])
{var sE=$iTXT.data.Dom.searchEngines[D[i]];var flds=sE.flds;for(var j=0;j<sE.flds.length;j++)
{sQ=sE.flds[j];r=new RegExp('[\?|\&|\;]'+sQ+'=');if(sQ==='*'||sQ==='')
{$iTXT.js.SearchEngineSettings.current={seid:sE.id,sehs:D[i],sest:''};}
else if(r.test(document.referrer))
{$iTXT.js.SearchEngineSettings.current={seid:sE.id,sehs:D[i],sest:_parseTerms(sT,sQ)};break outer;}}}}
if($iTXT.js.SearchEngineSettings.current)
{}}
var foundSE=false;var seHosts=$iTXT.js.SearchEngineSettings.hosts;if(seHosts&&'string'==typeof seHosts)
{seHosts=seHosts.split(',');var i=seHosts.length;while(i--)
{var seHost=seHosts[i];var seID=$iTXT.js.SearchEngineSettings['ids.'+seHost];var seFlds=$iTXT.js.SearchEngineSettings['fields.'+seHost];seFlds=(seFlds)?seFlds.split(','):[];if(seID&&seFlds.length>0)
{this.searchEngines[seHost]={id:seID,flds:seFlds};foundSE=true;}}}
else
{}
if(foundSE)
{_parseReferer(document.referrer);}},setNodeId:function(n)
{var nId=n.itxtNodeId;if(null==nId||undefined==nId)
{nId=this.nodeIds.length;this.nodeIds[nId]=nId;if(n.nodeType&&$itxtUtil.ELEMENT_NODE==n.nodeType)
{try
{n.itxtNodeId=nId;}
catch(x)
{}}}
return nId;},getComputedStyles:function(elmt)
{if(!elmt.nodeType||$itxtUtil.ELEMENT_NODE!=elmt.nodeType)
{return{};}
try
{if(window.getComputedStyle)
{return window.getComputedStyle(elmt,null);}
else
{return elmt.currentStyle;}}
catch(x)
{return{};}},dynamicContentCount:0,dynamicContentSections:{},dynamicContentStates:{},assessDynamicContent:function(elmt)
{if(!elmt.nodeType||$itxtUtil.ELEMENT_NODE!=elmt.nodeType)
{return false;}
var nId=this.setNodeId(elmt),tSec;var tSec=null;if(this.dynamicContentSections[nId])
{tSec=this.dynamicContentSections[nId];}
var pState=null,pSec=null;if(elmt.parentNode)
{var pId=this.setNodeId(elmt.parentNode);if(this.dynamicContentSections[pId])
{pSec=this.dynamicContentSections[pId];pState=this.dynamicContentStates[pSec];}}
var dcState=$iTXT.data.Context.dynamicContentHandler.getDynamicContentState(elmt);if(pState==null||pState!=dcState)
{if(null==tSec)
{tSec=++this.dynamicContentCount;}
this.dynamicContentSections[nId]=tSec;this.dynamicContentStates[tSec]=dcState;return true;}
else
{this.dynamicContentSections[nId]=pSec;return false;}},isVisible:function(n)
{var cS=this.getComputedStyles(n);return!!(cS.visibility!='hidden'&&cS.display!='none'&&n.clientWidth>0&&n.clientHeight>0);},getDefinedStyle:function(elmt,style,defaultStyle,rejects){var retStyle=defaultStyle,found=false;;try{var retStyle=getComputedStyle(elmt,null)[style];found=true;if(rejects){if(rejects.length===1){if(retStyle===rejects[0]){found=false;}}else{for(var i=0,len=rejects.length;i<len;i++){if(retStyle===rejects[0]){found=false;}}}}}catch(e){return defaultStyle;}
if(!found){return $iTXT.data.Dom.getDefinedStyle(elmt.parentNode,style,defaultStyle,rejects);}else{return retStyle;}}};};$iTXT.js.loader["$iTXT.data.Param"]=true;$iTXT.data.Param_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.data.Param=$iTXT.core.Class.create({paramHash:null,parent:null,debugName:null,init:function(p,params,weight,dbgName)
{this.debugName=dbgName||"Uknown";if($iTXT.js.umat)
{}
this.isFuncRegEx=/^\$[a-zA-Z]+\{/;this.isTokenRegEx=/^\$\{[a-zA-Z0-9_.]*\}/;this.containsFuncRegEx=/\$[a-zA-Z]+\{/;this.containsTokenRegEx=/\$\{[a-zA-Z0-9_.]*\}/;this.paramHash={};this.parent=p||null;if(params&&weight)
{this.set(params,null,weight);}},setParent:function(p)
{if(p)
{this.parent=p;}},list:function()
{return $itxtUtil.objKeys(this.paramHash);},get:function(pname,defVal)
{var retVal=(undefined==defVal)?null:defVal;var pV=null,pW=0,mV=null,mW=0;var pnameU=pname.toUpperCase();var v=this.paramHash[pnameU];if(null!=v)
{mW=v.w;mV=v.v;}
var p=this.parent;if(p!=null&&p.get)
{pW=p.weigh(pnameU);pV=p.get(pnameU,defVal);}
if(null!=pV&&null==mV)
{retVal=pV;}
else if(null!=mV&&null==pV)
{retVal=mV;}
else if(null!=mV&&null!=pV)
{if(pW>mW)
{retVal=pV;}
else
{retVal=mV;}}
return retVal;},getBool:function(name,def)
{var val=this.get(name);if(null!=val&&("1"==val||"true"==val))
{return true;}
else if(null!=val&&("0"==val||"false"==val))
{return false;}
if(null!==val)
{if("true"===val.toLowerCase())
{return true;}
if("false"===val.toLowerCase())
{return false;}}
return def;},getObj:function(name,defVal)
{var val=this.get(name,defVal);if('string'==typeof val)
{try
{val=eval(val);}
catch(e)
{}}
if(!$itxtUtil.isObject(val))
{return{};}
return val;},getInt:function(name,def)
{var value=this.get(name);if(value||value===0)
{try
{if(typeof value==='string'&&value.charAt(0)==='.'&&!isNaN(parseInt(value.substring(1),10)))
{return 0;}
value=parseInt(value,10);if(isNaN(value))
{return def;}}
catch(e)
{return def;}}
else
{return def;}
return value;},getByNS:function(ns){if(!VM._.isString(ns)||!ns){return{};}
var obj={},keys=VM._(this.paramHash).keys();ns=ns.toLowerCase();VM._(keys).forEach(function(key){key=key.toLowerCase();if(key.indexOf(ns+'.')==0){var value=this.get(key);key=key.substr(ns.length+1);obj[key]=this.parse(value);}},this);if(this.parent){obj=VM._.extend(obj,this.parent.getByNS(ns));}
return obj;},weigh:function(pname)
{var retVal=0,pW=0,mW=0;if(null!=this.paramHash[pname])
{mW=this.paramHash[pname].w;}
if(null!=this.parent&&this.parent.weigh)
{pW=this.parent.weigh(pname);}
if(pW>mW)
{retVal=pW;}
else
{retVal=mW;}
return retVal;},set:function(arg1,arg2,arg3)
{if('string'==typeof arg1)
{this.paramHash[arg1.toUpperCase()]=this._qualify(arg1,arg2,arg3);}
else if($itxtUtil.isObject(arg1))
{for(var nm in arg1)
{this.paramHash[nm.toUpperCase()]=this._qualify(nm,arg1[nm],arg3);}}},unset:function(pname)
{delete this.paramHash[pname.toUpperCase()];},exists:function(pname)
{var pT=false;if(this.parent!=null&&this.parent.exists)
{pT=this.parent.exists(pname);}
var mT=(this.paramHash[pname.toUpperCase()]!=null);return pT||mT;},parse:function(s,rep)
{if(!s||""==s)
{return"";}
if(typeof s!='string')
{return s;}
if(s.indexOf("_")>-1)
{s=s.replace(/_VM_UECLICK_/g,'${stub.tu}');s=s.replace(/_VM_CLICK_/g,'$ENCODE{${stub.tu}}');s=s.replace(/_VM_NRDCLICK_/g,'${stub.tu.noredirect}&redir=');s=s.replace(/_VM_ENRDCLICK_/g,'$ENCODE{${stub.tu.noredirect}&redir=}');s=s.replace(/_KEYWORD_/g,'$ENCODE{${keyword}}');s=s.replace(/_TITLE_/g,'${title}');s=s.replace(/_DESCRIPTION_/g,'${body}');s=s.replace(/_ENCODED_URL_/g,'$ENCODE{${stub.t}}');s=s.replace(/_URL_/g,'${stub.t}');s=s.replace(/_CALL_TO_ACTION_/g,'$ENCODE{${cta}}');s=s.replace(/_CLICK_TO_SELF_/g,'$ENCODE{${cts}}');s=s.replace(/_TRACKING_IMAGE_2_/g,'$ENCODE{$ARRAYITEM{trkimages,2}}');s=s.replace(/_TRACKING_IMAGE_1_/g,'$ENCODE{$ARRAYITEM{trkimages,1}}');s=s.replace(/_TRACKING_IMAGE_0_/g,'$ENCODE{$ARRAYITEM{trkimages,0}}');s=s.replace(/_TRACKING_IMAGE_/g,'$ENCODE{$ARRAYITEM{trkimages,0}}');s=s.replace(/_ADVIEW_/g,'$ENCODE{${stub.av}}');s=s.replace(/_SERVER_/g,'$ENCODE{${itxtserver}}');s=s.replace(/_SEARCHTERMS_/g,'$ENCODE{${sest}}');s=s.replace(/_SEARCHENGINE_/g,'$ENCODE{${seid}}');}
s=s.replace(/\$\{timestamp\}/gi,$iTXT.core.Util.isoTs());s=s.replace(/\$\{epochtimestamp\}/gi,$iTXT.core.Util.ts());if(!this.containsTokens(s))
{return s;}
rep=this.fixOverrideObject(rep);var pt=this._buildParseTree(s);return this._serializeParseTree(pt,rep);},parseObject:function(o,rep){for(var m in o){o[m]=this.parse(o[m],rep);}
return o;},fixOverrideObject:function(obj)
{var no={};for(var name in obj)
{no[name.toUpperCase()]=obj[name];}
return no;},containsTokens:function(s)
{if(s&&'string'==typeof s)
{if(s.match(this.containsTokenRegEx))
return true;if(s.match(this.containsFuncRegEx))
return true;}
return false;},BranchType:{ROOT:"ROOT",FUNC:"FUNC",STRING:"STRING",TOKEN:"TOKEN",PARAM:"PARAM"},ParseMode:{NONE:0,STRING:1,TOKEN:2,FUNCNAME:3,FUNCTION:4,PARAM:5},_buildParseTree:function(s)
{var rootNode=this._branch(this.BranchType.ROOT);var stack=[rootNode];var mode=[this.ParseMode.NONE];var buffer="";var pchar="";for(var i=0;i<s.length;i++)
{var ss=s.substring(i);var charr=s.charAt(i);if(this._mode(mode,this.ParseMode.NONE))
{if(this._isToken(ss))
{mode.push(this.ParseMode.TOKEN);i++;}
else if(this._isFunc(ss))
{mode.push(this.ParseMode.FUNCNAME);}
else
{mode.push(this.ParseMode.STRING);buffer+=charr;}}
else if(this._mode(mode,this.ParseMode.STRING))
{if('$'==charr&&'\\'==pchar)
{buffer=buffer.substring(0,buffer.length-1)+"$";}
else if(this._isToken(ss))
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
mode.push(this.ParseMode.TOKEN);i++;}
else if(this._isFunc(ss))
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
mode.push(this.ParseMode.FUNCNAME);}
else if(i==(s.length-1))
{buffer+=charr;this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";mode.pop();}
else
{buffer+=charr;}}
else if(this._mode(mode,this.ParseMode.TOKEN))
{if('}'==charr)
{mode.pop();this._addBranch(stack,this._branch(this.BranchType.TOKEN,buffer));buffer="";}
else
{buffer+=charr;}}
else if(this._mode(mode,this.ParseMode.FUNCNAME))
{if('{'==charr)
{mode.pop();mode.push(this.ParseMode.FUNCTION);this._addBranch(stack,this._branch(this.BranchType.FUNC,buffer));buffer="";}
else
{buffer+=charr;}}
else if(this._mode(mode,this.ParseMode.FUNCTION))
{mode.pop();if('}'!=charr)
{this._addBranch(stack,this._branch(this.BranchType.PARAM,buffer));mode.push(this.ParseMode.PARAM);if(this._isToken(ss))
{mode.push(this.ParseMode.TOKEN);i++;}
else if(this._isFunc(ss))
{mode.push(this.ParseMode.FUNCNAME);}
else
{buffer+=charr;}}}
else if(this._mode(mode,this.ParseMode.PARAM))
{if('}'==charr&&'\\'!=pchar)
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
stack.pop();stack.pop();mode.pop();}
else if(','==charr&&'\\'!=pchar)
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
stack.pop();this._addBranch(stack,this._branch(this.BranchType.PARAM,buffer));}
else if('$'==charr&&'\\'==pchar)
{buffer=buffer.substring(0,buffer.length-1)+"$";}
else if(','==charr&&'\\'==pchar)
{buffer=buffer.substring(0,buffer.length-1)+",";}
else if(this._isToken(ss))
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
mode.push(this.ParseMode.TOKEN);i++;}
else if(this._isFunc(ss))
{if(""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));buffer="";}
mode.push(this.ParseMode.FUNCNAME);}
else
{buffer+=charr;}}
pchar=charr;}
if(this._mode(mode,this.ParseMode.STRING)&&""!=buffer)
{this._addBranch(stack,this._branch(this.BranchType.STRING,buffer));}
return rootNode;},_branch:function(t,s)
{var rObj={t:t,v:s||"",branches:[]};return rObj;},_addBranch:function(s,b)
{s[s.length-1].branches.push(b);if(b.t==this.BranchType.FUNC||b.t==this.BranchType.PARAM)
{s.push(b);}},_mode:function(m,t)
{return((m.length>0)&&(m[m.length-1]==t));},_serializeParseTree:function(pt,obj)
{var parsedStr="";for(var i=0;i<pt.branches.length;i++)
{var branch=pt.branches[i];if(branch.t==this.BranchType.FUNC)
{if(undefined!=this.tokenFuncs[branch.v.toUpperCase()]&&branch.branches.length>0)
{var paramArray=[];for(var j=0;j<branch.branches.length;j++)
{var paramBranch=branch.branches[j];if(paramBranch.t==this.BranchType.PARAM)
{paramArray.push(this._serializeParseTree(paramBranch,obj));}}
parsedStr+=this.tokenFuncs[branch.v.toUpperCase()].apply(this,paramArray);}}
else if(branch.t==this.BranchType.TOKEN)
{parsedStr+=this._expandToken(branch.v,obj);}
else if(branch.t==this.BranchType.STRING)
{parsedStr+=branch.v;}}
return parsedStr;},_isFunc:function(s)
{return(null!=s.match(this.isFuncRegEx));},_isToken:function(s)
{return(null!=s.match(this.isTokenRegEx));},_expandToken:function(name,obj)
{if(obj&&obj[name])
{return this.parse(obj[name]+"",obj);}
else if(this.exists(name))
{return this.parse(this.get(name)+"",obj);}
if((name.indexOf("P.")==0)&&this.parent)
{var pName=name.substring(2);if(this.parent.exists(pName))
{return this.parse(this.parent.get(pName)+"",obj);}}
return"${"+name+"}";},_param:function(pname,val,weight)
{if('string'==typeof val)
{var itemIndex=val.toUpperCase().indexOf("${"+pname.toUpperCase()+"}");if(itemIndex!=-1)
{val=val.substring(0,itemIndex+2)+"P."+val.substring(itemIndex+2);}}
var r={n:pname.toUpperCase(),v:val,w:(weight||0)};return r;},_qualify:function(pname,val,weight)
{if(VM._.isArray(val))
{for(var i=0;i<val.length;i++)
{this._qualify(pname+i,val[i],weight);}}
if($itxtUtil.isObject(val)&&undefined!=val.v&&undefined!=val.w)
{weight=val.w;val=val.v;}
if(('clicktag'==pname.toLowerCase()||'tt.logo.url'==pname.toLowerCase())&&val.toLowerCase().indexOf('${keyword}')>-1&&val.toLowerCase().indexOf('$encode{${keyword}}')<0)
{val=val.replace(/\$\{keyword\}/i,'$ENCODE{${keyword}}');}
var retV=null;if(null!=this.paramHash[pname.toUpperCase()])
{var curV=this.paramHash[pname.toUpperCase()];var newV=this._param(pname.toUpperCase(),val,weight);retV=curV;if(newV.w>=curV.w)
{retV=newV;}}
else
{retV=this._param(pname.toUpperCase(),val,weight);}
if($iTXT.js.umat)
{var dV=retV.v;if(dV)
{if(dV.join)
{dV=dV.join(',');}
if(dV.replace)
{dV=dV.replace(/>/g,'&gt;').replace(/</g,'&lt;');}}}
return retV;},getParamList:function(childParams)
{var returnParams=childParams||{};for(var p in this.paramHash)
{if(!returnParams[p])
{returnParams[p]=this.get(p);}}
if(this.parent)
{return this.parent.getParamList(returnParams);}
return returnParams;},getParamLevel:function(pname,lvl)
{lvl=lvl||0;if(null==this.paramHash[pname.toUpperCase()])
{if(this.parent!=null&&this.parent.getParamLevel)
{return this.parent.getParamLevel(pname,lvl+1);}}
else if(this.parent!=null&&this.parent.getParamLevel)
{var w=this.paramHash[pname.toUpperCase()].w;var pW=this.parent.weigh(pname.toUpperCase());if(pW>w)
{return this.parent.getParamLevel(pname,lvl+1);}}
return lvl;},getAtLevel:function(pname,requestedLevel,lvl)
{lvl=lvl||0;if(lvl==requestedLevel)
{return this.paramHash[pname.toUpperCase()]||null;}
if(this.parent!=null&&this.parent.getAtLevel)
{return this.parent.getAtLevel(pname,requestedLevel,lvl+1);}
return"";},numberOfLevels:function(lvl)
{lvl=lvl||1;if(this.parent!=null&&this.parent.numberOfLevels)
{return this.parent.numberOfLevels(lvl+1);}
return lvl;},tokenize:function(obj)
{if('string'===typeof obj)
{obj=this.parse(obj);}
else if($itxtUtil.isObject(obj))
{for(var p in obj)
{obj[p]=this.tokenize(obj[p]);}}
return obj;},tokenFuncs:{ENCODE:function(s)
{try
{return encodeURIComponent(s);}
catch(e){}
return s;},DECODE:function(s)
{try
{return decodeURIComponent(s);}
catch(e){}
return s;},REPLACE:function(needle,haystack,replacement,attributes)
{attributes=attributes||"g";return haystack.replace(new RegExp(needle,attributes),replacement);},SUBSTR:function(s,i,l)
{if(undefined==i)
{return"";}
try
{i=parseInt(i);if(undefined!=l)
{l=parseInt(l);return s.substring(i,l);}
return s.substring(i);}
catch(e){}
return"";},INDEXOF:function(s,c)
{},TRIM:function(s,l,p)
{return $iTXT.core.Util.summarize(s,l,p);},TRIMHTML:function(s,l,p)
{var newStr=s;var newLength=l;var tagReplacements=[];var matches=s.match($iTXT.core.Regex.htmlAnyOpenOrCloseTag);if(null!=matches)
{for(var i=0;i<matches.length;i++)
{var rs="#TAG"+i+"#";newStr=newStr.replace(matches[i],rs);newLength+=rs.length;tagReplacements.push(matches[i]);}}
newStr=$iTXT.core.Util.summarize(newStr,newLength,p);for(var i=0;i<tagReplacements.length;i++)
{var rs="#TAG"+i+"#";newStr=newStr.replace(rs,tagReplacements[i]);}
return newStr;},ARRAYITEM:function(n,i)
{var arr=this.get(n);if(VM._.isArray(arr))
{if(arr.length>i)
{return arr[i];}}
return'';},OBJECTITEM:function(n,k){var map=this.get(n);if($itxtUtil.isObject(map))
{if(map.hasOwnProperty(k))
{return map[k];}}
return'';},CAPITALIZE:function(s)
{return s.replace(/\w\S*/g,function(match){return match.charAt(0).toUpperCase()+match.substr(1);});},O:function(s)
{return s;}}});};$iTXT.js.loader["$iTXT.data.Pixel"]=true;$iTXT.data.Pixel_Load=function()
{var undefined;var $itxtUtil=$iTXT.core.Util;$iTXT.data.Pixel=$iTXT.core.Class.create({blind:false,cat:"",detailid:0,done:false,id:"",keyword:"",type:"",url:"",init:function(detailid,keyword,url,blind,cat,type)
{this.id=$itxtUtil.genUUID();var idS='('+this.id+')';this.detailid=detailid;this.keyword=keyword;this.url=url;var ifrStub='http://'+$iTXT.js.serverName+'/'+$iTXT.cnst.IFRAME_SCRIPT_DROPPER_LOC+'?'+$iTXT.cnst.IFRAME_SCRIPT_DROPPER_FLD+'=';if(this.url.match($iTXT.cnst.IFRAME_SCRIPT_DROPPER_LOC))
{var candUrl=decodeURIComponent(this.url.replace(ifrStub,'')).replace(/\%26/g,'&');if($itxtUtil.isURL(candUrl))
{this.url=candUrl;blind=true;}}
this.type=(this.url.match(/^<iframe/i))?'iframe':(this.url.match(/^https?\:\/\/.*\/.*\.gif|png|jpg|jpeg/i)||this.url.match(/type\=(img|image)/i))?'img':(this.url.match(/^https?\:\/\/.*\/.*\.js/i)||this.url.match(/type\=script/i))?'script':type;if(!this.type||undefined==this.type||''==this.type)
{this.type='img';}
else
{}
if('boolean'==typeof blind)
{this.blind=blind;}
else if(!url.match($iTXT.cnst.DNS_INTELLITXT_SUFFIX)&&!url.match($iTXT.cnst.DNS_SMARTAD_MARKER))
{this.blind=true;}
if((url.match($iTXT.cnst.DNS_INTELLITXT_SUFFIX)||url.match($iTXT.cnst.DNS_SMARTAD_MARKER))&&url.match(/al\.(a|j)sp/))
{this.blind=false;}
if('iframe'==this.type)
{this.url=$itxtUtil.getEmbeddedURL(url);this.blind=false;}
if(cat&&'string'==typeof cat)
{cat=cat.replace("$iTXT.glob.track.",'');this.cat=cat;if('rand'==this.cat)
{this.blind=false;}}
if(this.url.match($iTXT.cnst.PIXEL_SERVER_PREFIX+$iTXT.cnst.DNS_INTELLITXT_SUFFIX))
{this.url=decodeURIComponent(this.url);var ipid=$iTXT.glob.params?$iTXT.glob.params.get("ipid",0):0;if($iTXT.js.ipid&&!isNaN($iTXT.js.ipid))
{ipid=$iTXT.js.ipid;}
this.url=$itxtUtil.appendToURL(this.url,'ipid='+ipid);var sfid=0;if($iTXT.glob.currentAd&&$iTXT.glob.currentAd.sfid&&!isNaN($iTXT.glob.currentAd.sfid))
{sfid=$iTXT.glob.currentAd.sfid;}
if($iTXT.glob.params&&$iTXT.glob.params.get('testrandsfid'))
{sfid=Math.round(10000*Math.random());}
this.url=$itxtUtil.appendToURL(this.url,'sfid='+sfid);}}});$iTXT.data.PixelManager={pixelQueue:[],activePixels:[],active:function()
{return(this.activePixels.length>0)?true:false;},defer:function(job,iteration)
{try
{var mode=null;var id='',idS='';if('function'==typeof job)
{id=job.toString();idS='(function)';mode='normal';}
else if('string'==typeof job)
{id=job;idS='('+id+')';job=new Function('$iTXT.data.PixelManager.drop($iTXT.data.PixelManager.activePixels[$iTXT.data.PixelManager.findActive("'+id+'")],null,true);');mode='drop';}
if(!mode)
{throw new Error('Job is not valid.');}
var itrDelay=$iTXT.glob.params.get("pxid")||100;var maxDelay=$iTXT.glob.params.get("pxmd")||1000;if(null==iteration)
{iteration=0;}
var execute=true;if(this.active())
{if('normal'==mode)
{execute=false;}
else if(id!=this.activePixels[0].id)
{execute=false;}}
if(execute)
{}
else if(iteration*itrDelay>=maxDelay)
{execute=true;}
if(execute)
{job();}
else
{if('drop'==mode&&'function'==typeof job)
{job=id;}
iteration++;window.setTimeout(function(){$iTXT.data.PixelManager.defer(job,iteration);},itrDelay);}}
catch(x)
{var msg='ERROR attempting to defer for function "'+job+'" on iteration '+iteration+'.  Error message is "'+x.message+'".';}},drop:function(pixel,mode,confirm)
{try
{if(undefined==pixel||'string'!=typeof pixel.url||'string'!=typeof pixel.id||'string'!=typeof pixel.type)
{return;}
if(!pixel.url.match(/^http/))
{return;}
if(!mode||undefined==mode)
{mode=pixel.type;}
if(pixel.blind&&pixel.type=='script')
{mode='iframe';}
else
{mode=pixel.type;}
if(confirm&&'script'==mode&&$iTXT.core.Browser.is('Explorer')&&!(pixel.url.match(/al\.asp/)||pixel.url.match($iTXT.cnst.PIXEL_SERVER_PREFIX+$iTXT.cnst.DNS_INTELLITXT_SUFFIX)))
{this.remove(pixel.id);}
pixel.url=$iTXT.glob.params.parse(pixel.url);var cb=null;if(confirm)
{cb=function(){$iTXT.data.PixelManager.remove(pixel.id);};}
switch(mode.toLowerCase())
{case'img':case'image':$itxtUtil.dropImage(pixel.url,cb,cb);break;case'iframe':if(pixel.blind&&!pixel.url.match(/^<iframe/i)&&!pixel.url.match($iTXT.cnst.IFRAME_SCRIPT_DROPPER_LOC))
{pixel.url='http://'+$iTXT.js.serverName+'/'+$iTXT.cnst.IFRAME_SCRIPT_DROPPER_LOC+'?'+$iTXT.cnst.IFRAME_SCRIPT_DROPPER_FLD+'='+encodeURIComponent(pixel.url);}
$itxtUtil.dropIframe(pixel.url,cb,cb);break;default:$itxtUtil.dropScript(pixel.url,cb,cb);break;}}
catch(x)
{var msg='('+pixel.id+') ERROR attempting to drop Pixel "'+pixel.url+'" in mode "'+mode+'" with confirm '+confirm+'.  Error message is "'+x.message+'".';}},findActive:function(id)
{for(var i=0;i<this.activePixels.length;i++)
{if(id==this.activePixels[i].id)
{return i;}}
return-1;},flush:function()
{var aggPXs={};while(this.pixelQueue.length>0)
{var pX=this.pixelQueue.shift();if(!pX.url.match($iTXT.cnst.PIXEL_SERVER_PREFIX+$iTXT.cnst.DNS_INTELLITXT_SUFFIX)||pX.type=='img')
{aggPXs[pX.id]=pX;continue;}
var qsArgs=$itxtUtil.getQueryParams(pX.url);var pId=qsArgs.id;var aggIdx=(pX.type||'*')+':'+qsArgs.ipid+':'+qsArgs.sfid;if(aggPXs[aggIdx]&&undefined!=aggPXs[aggIdx])
{var aggPX=aggPXs[aggIdx];var newURL=aggPX.url.replace(/id\=/,'id='+pId+',');if(newURL.length>2048)
{aggPXs[pX.id]=aggPX;aggPXs[aggIdx]=pX;}
else
{aggPX.url=newURL;}}
else
{aggPXs[aggIdx]=pX;}}
var c=0;for(var k in aggPXs)
{c++;if('function'!=typeof aggPXs[k])
{var aPx=aggPXs[k];this.activePixels.push(aPx);this.defer(aPx.id);}}
this.pixelQueue=[];},get:function(cat,cri)
{var uCat,uCri;if(null!=cri&&'string'==typeof cri)
{uCri='keyword';}
else if(null!=cri&&!isNaN(cri))
{uCri='detail ID';}
else
{return;}
var uCat;switch(cat)
{case'guar':uCat='GUARANTEED';break;case'rand':uCat='RANDOM';break;default:uCat=cat.toUpperCase();break;}
if($iTXT.glob.track&&$iTXT.glob.track[cat]&&VM._.isArray($iTXT.glob.track[cat])&&$iTXT.glob.track[cat].length>0)
{var eC=0,fC=0,dC=0;var px=$iTXT.glob.track[cat];for(var i=0;i<px.length;i++)
{eC++;var tPx=px[i];var t=('string'==typeof cri)?tPx.keyword:tPx.detailid;if(t==cri)
{fC++;var dupe=false;for(var j=0;j<px.length&&!dupe;j++)
{var cPx=px[j];if(cPx.url==tPx.url&&cPx.done)
{dupe=true;}}
if(!dupe)
{tPx.done=true;this.queue(tPx);dC++;if('hook'!=cat)
{if(!$iTXT.js.modAdTypes)
{var mon='http://'+$iTXT.js.serverName+'/al.asp?ipid='+ipid+'&mt=54&ts='+$iTXT.glob.params.get('timestamp')+'&cc='+$iTXT.glob.geo.get('normalisedcountry')+'&rcc='+$iTXT.glob.geo.get('realcountry')+'&mh='+$iTXT.glob.params.get('page.md5')+'&mv='+tPx.detailid;$itxtUtil.dropScript(mon,function(removeFunction){removeFunction(removeFunction);});}
else
{var mOpts={mt:54,mv:tPx.detailid};$iTXT.core.$(document).itxtFire("$iTXT:data:log:monitor",mOpts);}}
if('rand'==cat)
{break;}}}}}
else
{}},queue:function(pixel,always)
{if(pixel.id&&'string'==typeof pixel.id)
{if(always||pixel.url.match($iTXT.cnst.DNS_INTELLITXT_SUFFIX)||pixel.url.match($iTXT.cnst.DNS_SMARTAD_MARKER))
{this.pixelQueue.push(pixel);}
else
{window.setTimeout(function(){$iTXT.data.PixelManager.drop(pixel);},50);}}},queued:function()
{return(this.pixelQueue.length>0)?true:false;},remove:function(id)
{var idx=this.findActive(id);if(idx>=0)
{this.activePixels.splice(idx,1);}
else
{}}};$iTXT.data.PixelController={init:function()
{$iTXT.core.$(document).itxtBatchSubscribe([["$iTXT:tt:open",$iTXT.core.Event.bind(this,this._ttOpn)],["$iTXT:location:change",$iTXT.core.Event.bind(this,this.locationChange)],["$iTXT:hook:hooked",$iTXT.core.Event.bind(this,this.hookHooked)],["$iTXT:hooks:loaded",$iTXT.core.Event.bind(this,this.hooksLoaded)]]);},locationChange:function(e)
{var o=e.data||{};if($iTXT.data.PixelManager&&$iTXT.data.PixelManager.active())
{if(o.defer&&o.cb)
{o.defer(this);$iTXT.data.PixelManager.defer(o.cb);}}},_ttOpn:function(e)
{var o=e.data||{};var ad=o.advert||$iTXT.ui.tt.currentAdvert;if(ad)
{$iTXT.data.PixelManager.get('rand',ad.params.get("A.KW","").replace(/\'/g,"\\'"));$iTXT.data.PixelManager.get('guar',ad.params.get("A.KW","").replace(/\'/g,"\\'"));window.setTimeout(function(){$iTXT.data.PixelManager.flush();},50);}},hookHooked:function(e)
{var hk=e.data||null;if(null!=hk)
{$iTXT.data.PixelManager.get('hook',hk.options.value.replace(/\'/g,"\\'"));}},hooksLoaded:function()
{$iTXT.data.PixelManager.flush();}};};