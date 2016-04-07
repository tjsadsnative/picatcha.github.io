try{window.parent._dv_win['dvCallback_1451434940428634']($dv,window,'a85b07f7cc044a2eb4863755b288bcfa','tps10213.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.pubSub.subscribe('ImpressionServed', $uid, 'sfp',function () {
                var sf = (window.parent.$sf);   
                if(!sf) return;

                var checkScenario = function() {
                   try {

                       if($dv.CommonData && $dv.CommonData.Scenario)
                       return $dv.CommonData.Scenario;

                       var curWin = window.parent;
                       if (curWin.top == curWin) {
                           return 1;
                       }
                       var level = 0;
                       while (curWin.parent != curWin && level < 300) {
                           if (curWin.parent.document.domain != curWin.document.domain) {
                               return 128;
                           }
                           curWin = curWin.parent;
                           level++;
                       }
                       return 2;
                   } catch (e) { }
                   return 128;
                }

                var isIABViewableDV = function () {
                    if (window.document.hasFocus && $dv.CommonData.BrowserId == 1 && /^8/.test($dv.CommonData.BrowserVersion)) {
                        isInFocusDV = window.document.hasFocus();
                    }

                    if ( sf.ext.inViewPercentage() >= 50 && isInFocusDV) {
                       var now = new Date();
                       if (sf_inview_dv == false){
                           sf_inview_dv = true;
                           sf_viewtime_dv = now;
                       } else if ( (now.getTime() - sf_viewtime_dv.getTime() >= 1000) ) {
                           window.clearInterval(dv_focus_interval);
                           var tpsServerUrl2 = tpsServerUrl + '&dvp_sf_iavdv=1';
                           
                           $dv.domUtilities.addImage(tpsServerUrl2, $dv.tags[$uid].tagElement.parentElement);
                       }
                    } else {
                       sf_inview_dv = false;
                    }
                }

                var isIABViewableSF = function () {
                    if (window.document.hasFocus && $dv.CommonData.BrowserId == 1 && /^8/.test($dv.CommonData.BrowserVersion)) {
                        isInFocusDV = window.document.hasFocus();
                    }
                    var inFocus = sf.ext.winHasFocus ? sf.ext.winHasFocus() : isInFocusDV;

                    if ( sf.ext.inViewPercentage() >= 50 && inFocus) {
                       var now = new Date();
                       if (sf_inview_sf == false){
                           sf_inview_sf = true;
                           sf_viewtime_sf = now;
                       } else if ( (now.getTime() - sf_viewtime_sf.getTime() >= 1000) ) {
                           window.clearInterval(sf_focus_interval);
                           var tpsServerUrl2 = tpsServerUrl + '&dvp_sf_iavsf=1';

                           $dv.domUtilities.addImage(tpsServerUrl2, $dv.tags[$uid].tagElement.parentElement);
                       }
                    } else {
                       sf_inview_sf = false;
                    }
                }
                var getFocBluEventCallback = function () {
                    var that = this;
                    return function (ev) {
                        try {

                            if (!ev) {
                                var ev = window.event;
                            }
                            if (ev.type == 'blur' || ev.type == 'focusout') {
                                isInFocusDV = false;
                            } else if (visibilityBrowserProperty) {
                                isInFocusDV = window.document[visibilityBrowserProperty] ? false : true;
                            } else {
                                isInFocusDV = true;
                            }
                        } catch (e) {
                        }
                    };
                };

                var setPageFocusDetectionEvents = function () {
                    addEventCallback(window, 'blur', getFocBluEventCallback());
                    addEventCallback(window, 'focus', getFocBluEventCallback());
                    addEventCallback(window.document, 'click', getFocBluEventCallback());
                    addEventCallback(window.document, 'mousedown', getFocBluEventCallback());
                    addEventCallback(window.document, 'mouseup', getFocBluEventCallback());

                    hookToBrowserVisibilityEvents();
                };

                var hookToBrowserVisibilityEvents = function () {
                    var hidden = null,
                        change = null,
                        vis = {
                            hidden: 'visibilitychange',
                            mozHidden: 'mozvisibilitychange',
                            webkitHidden: 'webkitvisibilitychange',
                            msHidden: 'msvisibilitychange',
                            oHidden: 'ovisibilitychange'
                        };

                    for (hidden in vis) {
                        if (vis.hasOwnProperty(hidden) && hidden in document) {
                            change = vis[hidden];
                            break;
                        }
                    }

                    if (change) {
                        visibilityBrowserProperty = hidden;
                        addEventCallback(window.document, change, getFocBluEventCallback());
                    }
                };

                var addEventCallback = (function () {
                    var setListener = function (el, ev, fn) {
                        if (el.addEventListener) {
                            setListener = function (el, ev, fn) {
                                el.addEventListener(ev, fn, false);
                            };
                        } else if (el.attachEvent) {
                            setListener = function (el, ev, fn) {
                                el.attachEvent('on' + ev, fn);
                            };
                        } else {
                            setListener = function (el, ev, fn) {
                                el['on' + ev] = fn;
                            };
                        }
                        setListener(el, ev, fn);
                    };

                    return function (el, ev, fn) {
                        setListener(el, ev, fn);
                    };

                }());

                var initFocusState = function () {
                    var visibilityState = true;
                    if (typeof document.hidden !== 'undefined')
                        visibilityState = !document.hidden;
                    else if ($dv.CommonData.BrowserId == 1 && $dv.CommonData.BrowserVersion < 10 && (typeof document.hasFocus === 'function' || typeof document.hasFocus === 'object' ))
                        visibilityState = document.hasFocus();
                    return visibilityState;
                };

                setPageFocusDetectionEvents();

                var tpsServerUrl = "//"+  window.$dv.tags[$uid].ServerPublicDns + '/event.gif?impid=' + $uid;             
                var is_in_sf = false;
                var sf_scenario = checkScenario();
                var sf_host = '0';
                var sf_ext = '0';
                var sf_geom = '0';
                var sf_win = '0';
                var sf_self = '0';
                var sf_par = '0';
                var sf_inview_dv = false;
                var sf_inview_sf = false;
                var sf_viewtime_dv = '';
                var sf_viewtime_sf = '';
                var sf_focus = '0';
                var sf_focus_interval;
                var dv_focus_interval;
                var isInFocusDV = initFocusState();
                var visibilityBrowserProperty;
                                   
                if (sf) {
                   is_in_sf = true;
                   sf_host = sf.host ? '1' : '0';
                   if (sf.ext) {
                       sf_ext = '1';
                       if (sf.ext.winHasFocus) {
                           sf_focus= '1';
                       }
                       if (sf.ext.inViewPercentage) {
                           sf_inview_dv = sf_inview_sf = sf.ext.inViewPercentage() >= 50;
                           sf_viewtime_dv = sf_viewtime_sf = new Date();
                           sf_focus_interval = window.setInterval(isIABViewableSF, 100);
                           dv_focus_interval = window.setInterval(isIABViewableDV, 100); 
                       }
                       if (sf.ext.geom) {
                           sf_geom = '1';
                           var geomData = sf.ext.geom();
                           sf_win = geomData.win ? '1' : '0';
                           sf_self = geomData.self ? '1' : '0';
                           sf_par = geomData.par ? '1' : '0';
                       }
                   }

                   if(is_in_sf) {
                       var tpsServerUrl1 = tpsServerUrl +
                           '&dvp_sf=' + (is_in_sf ? '1' : '0') +
                           '&dvp_sf_scr=' + sf_scenario +
                           '&dvp_sf_host=' + sf_host +
                            '&dvp_sf_ext=' + sf_ext +
                            '&dvp_sf_geom=' + sf_geom +
                            '&dvp_sf_win=' + sf_win +
                            '&dvp_sf_self=' + sf_self +
                            '&dvp_sf_par=' + sf_par +
                            '&dvp_sf_focus=' + sf_focus;
                       $dv.domUtilities.addImage(tpsServerUrl1, $dv.tags[$uid].tagElement.parentElement);
                   }
                }
        });$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_CollectDvtpSrcPerformanceData', function(){ try {var dvTagCreated = '';var dvTagCreatedSetInCallBack = '';var beforeVisitCall = '';var callTPSFromIframe = window.callTPSFromIframe;var beginVisitCallbackTS = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if(dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 1) {dvTagCreated = dv_win.t2tTimestampData[0].dvTagCreated;}if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}if ($dv.tags[$uid]) {dvTagCreatedSetInCallBack = $dv.tags[$uid].t2tIframeCreationTime;beginVisitCallbackTS = $dv.tags[$uid].beginVisitCallbackTS;}var message = $dv.tags[$uid].dv_protocol + '//' + $dv.tags[$uid].ServerPublicDns + '/event.gif?impid=' + $uid;message += '&dvp_dvTagCreated='+dvTagCreated+'&dvp_dvTagCreatedSetInCallBack='+dvTagCreatedSetInCallBack+'&dvp_callTPSFromIframe='+callTPSFromIframe+'&dvp_beforeVisitCall='+beforeVisitCall+'&dvp_beginVisitCallbackTS='+beginVisitCallbackTS+'&dvp_templateStartTime='+templateStartTime+'&dvp_tpsProcessingTime=+0';var image = window.document.createElement('img');image.src = message;} catch(e) {};});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 2791987},{name : 'plmt', value : 2791991}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });function pixel(message){$dv.registerEventCall($uid,{dvp_vs:message})}var visibilityStateEnum={hidden:1,visible:2,prerender:3,unloaded:4};try{function handleVisibilityChange(){var _visibilityState=document.visibilityState;if(tmpData[$uid]=='prerender'&&_visibilityState=='visible'){tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState])}}var _visibilityState=document.visibilityState;if(_visibilityState=='prerender'){var tmpData={};tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState]);var hidden,visibilityChange;if(typeof document.hidden!=='undefined'){hidden='hidden';visibilityChange='visibilitychange'}else if(typeof document.mozHidden!=='undefined'){hidden='mozHidden';visibilityChange='mozvisibilitychange'}else if(typeof document.msHidden!=='undefined'){hidden='msHidden';visibilityChange='msvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){hidden='webkitHidden';visibilityChange='webkitvisibilitychange'}document.addEventListener(visibilityChange,handleVisibilityChange,false)}}catch(e){pixel('error_'+e.message)};var impId = 'a85b07f7cc044a2eb4863755b288bcfa';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var lbl='';var f=dvObj==window.$dv,g=f?parent:window,h=dvObj.tags[impId].protocol+'/'+'/'+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+'/'+(f?'event':'bsevent')+'.gif?impid='+impId,i=0,j=[];function k(a,c){function b(){if(!n[c]&&(rhe(c),n[c]=!0,a))for(var d=0;d<e.length;d++)a.removeEventListener?a.removeEventListener(e[d],b):a.detachEvent?a.detachEvent('on'+e[d],b):a['on'+e[d]]=void 0}var e='click input change focus keyup textInput keypress paste'.split(' '),n=[];n[c]=!1;if(a)for(var d=0;d<e.length;d++)a.addEventListener?a.addEventListener(e[d],b,!0):a.attachEvent?a.attachEvent('on'+e[d],b):a['on'+e[d]]=b}window.rhe=function(a){var c='';'number'===typeof a&&void 0==j[a]&&(j[a]=!0,i+=a,c='&'+lbl+'heas='+i);dvObj.domUtilities.addImage(h+'&'+lbl+'hea=1'+c,dvObj.tags[impId].tagElement.parentNode)};g.rhe=rhe;function l(a,c){var b=document.createElement(a);b.id=(c||a)+'-'+impId;b.style.visibility='hidden';b.style.position='absolute';return b}function m(a){var c=o;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);'createEvent'in document?(b=document.createEvent('HTMLEvents'),b.initEvent('change',!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent('onchange',b))}})}var p=l('form');p.submit=function(){window.rhe(1)};var o=l('input','txt');o.name=o.id;o.type='text';m('value');m('textContent');var q=l('input','btn');q.name=q.id;q.type='button';var r=l('input','sbmt');r.name=r.id;r.type='submit';r.click=function(){window.rhe(2)};var s=l('a');s.href='javascript:window.rhe(16);';g.document.body.insertBefore(p,null);g.document.body.insertBefore(s,null);p.insertBefore(o,null);p.insertBefore(q,null);p.insertBefore(r,null);k(o,8);k(q,4);k(r,2);k(p,1);} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}