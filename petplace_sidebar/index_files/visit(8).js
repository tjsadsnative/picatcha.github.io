try{window.parent._dv_win['dvCallback_1451435564663376']($dv,window,'43e62ae5662448238bb1bd86c5136f3f','tps10203.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});(function () {                                                                               
                                        var tag = $dv.tags[$uid];
                                        var allowedRetries = 13;
                                        var retries = 0;
                                        var vaVersion = 551;                                        
                                        
                                        function isNumeric(n) {
                                          return !isNaN(parseFloat(n)) && isFinite(n);
                                        }

                                        function loadAvs() {                    
                                            function isAvsScriptLoaded() {
                                                var scripts = document.getElementsByTagName("script");
                                                for (var i = 0; i < scripts.length; i++) {
                                                    var script = scripts[i];
                                                    if (script.src.indexOf('cdn.doubleverify.com/avs') > -1) {
                                                        return true;
                                                    }
                                                    return false;
                                                }
                                            };
                                            if (typeof window.IVCallback === "undefined" && !isAvsScriptLoaded()) {
                                                window.IVCallback = function (ViewAssureBootstrapper) {
                                                    if (ViewAssureBootstrapper && typeof (ViewAssureBootstrapper) === 'function') {
                                                        ViewAssureBootstrapper({
                                                            'videoEnable': true,
                                                            'detectVideoPlayer': true,                                                            
                                                            'isRTNsDisabled':true
                                                        });
                                                    }
                                                };
                                                document.write('<scr' + 'ipt type="text/javascript" src="' + $dv.tags[$uid].dv_protocol + '//cdn.doubleverify.com/avs' + vaVersion + '.js"></script>');
                                            }
                                        };

                                        loadAvs();

                                        (function () {
                                            var currentInterval = setInterval(function () {
                                                if (retries < allowedRetries) {
                                                    retries++;
                                                    if (tag.VA && tag.VA.getVisibilityResult && typeof tag.VA.getVisibilityResult == 'function') {                                                                                            
                                                    var results = tag.VA.getVisibilityResult();                                                       
                                                    if (results.adWidth && results.adHeight && isNumeric(results.adWidth) && isNumeric(results.adHeight)) {
                                                        $dv.registerEventCall($uid, {
                                                            'dvp_spw': results.adWidth,
                                                            'dvp_sxh': results.adHeight
                                                        });
                                                    clearInterval(currentInterval);
                                                    };                                                       
                                                    }
                                                } else {
                                                    clearInterval(currentInterval);
                                                    if($dv)
                                                    {
                                                        $dv.registerEventCall($uid, {'dvp_spxn': 1});
                                                    }
                                                }
                                            }, 500);
                                        })();
                                    })();function pixel(message){$dv.registerEventCall($uid,{dvp_vs:message})}var visibilityStateEnum={hidden:1,visible:2,prerender:3,unloaded:4};try{function handleVisibilityChange(){var _visibilityState=document.visibilityState;if(tmpData[$uid]=='prerender'&&_visibilityState=='visible'){tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState])}}var _visibilityState=document.visibilityState;if(_visibilityState=='prerender'){var tmpData={};tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState]);var hidden,visibilityChange;if(typeof document.hidden!=='undefined'){hidden='hidden';visibilityChange='visibilitychange'}else if(typeof document.mozHidden!=='undefined'){hidden='mozHidden';visibilityChange='mozvisibilitychange'}else if(typeof document.msHidden!=='undefined'){hidden='msHidden';visibilityChange='msvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){hidden='webkitHidden';visibilityChange='webkitvisibilitychange'}document.addEventListener(visibilityChange,handleVisibilityChange,false)}}catch(e){pixel('error_'+e.message)};var impId = '43e62ae5662448238bb1bd86c5136f3f';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var lbl='';var f=dvObj==window.$dv,g=f?parent:window,h=dvObj.tags[impId].protocol+'/'+'/'+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+'/'+(f?'event':'bsevent')+'.gif?impid='+impId,i=0,j=[];function k(a,c){function b(){if(!n[c]&&(rhe(c),n[c]=!0,a))for(var d=0;d<e.length;d++)a.removeEventListener?a.removeEventListener(e[d],b):a.detachEvent?a.detachEvent('on'+e[d],b):a['on'+e[d]]=void 0}var e='click input change focus keyup textInput keypress paste'.split(' '),n=[];n[c]=!1;if(a)for(var d=0;d<e.length;d++)a.addEventListener?a.addEventListener(e[d],b,!0):a.attachEvent?a.attachEvent('on'+e[d],b):a['on'+e[d]]=b}window.rhe=function(a){var c='';'number'===typeof a&&void 0==j[a]&&(j[a]=!0,i+=a,c='&'+lbl+'heas='+i);dvObj.domUtilities.addImage(h+'&'+lbl+'hea=1'+c,dvObj.tags[impId].tagElement.parentNode)};g.rhe=rhe;function l(a,c){var b=document.createElement(a);b.id=(c||a)+'-'+impId;b.style.visibility='hidden';b.style.position='absolute';return b}function m(a){var c=o;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);'createEvent'in document?(b=document.createEvent('HTMLEvents'),b.initEvent('change',!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent('onchange',b))}})}var p=l('form');p.submit=function(){window.rhe(1)};var o=l('input','txt');o.name=o.id;o.type='text';m('value');m('textContent');var q=l('input','btn');q.name=q.id;q.type='button';var r=l('input','sbmt');r.name=r.id;r.type='submit';r.click=function(){window.rhe(2)};var s=l('a');s.href='javascript:window.rhe(16);';g.document.body.insertBefore(p,null);g.document.body.insertBefore(s,null);p.insertBefore(o,null);p.insertBefore(q,null);p.insertBefore(r,null);k(o,8);k(q,4);k(r,2);k(p,1);} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}