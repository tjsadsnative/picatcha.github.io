try{window.parent._dv_win['dvCallback_1452801513551508']($dv,window,'eeb19003a9a2432a9cc0f137de81f82c','tps10200.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});(function () {                                                                               
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
                                    })();$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_CollectDvtpSrcPerformanceData', function(){ try {var dvTagCreated = '';var dvTagCreatedSetInCallBack = '';var beforeVisitCall = '';var callTPSFromIframe = window.callTPSFromIframe;var beginVisitCallbackTS = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if(dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 1) {dvTagCreated = dv_win.t2tTimestampData[0].dvTagCreated;}if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}if ($dv.tags[$uid]) {dvTagCreatedSetInCallBack = $dv.tags[$uid].t2tIframeCreationTime;beginVisitCallbackTS = $dv.tags[$uid].beginVisitCallbackTS;}var message = $dv.tags[$uid].dv_protocol + '//' + $dv.tags[$uid].ServerPublicDns + '/event.gif?impid=' + $uid;message += '&dvp_dvTagCreated='+dvTagCreated+'&dvp_dvTagCreatedSetInCallBack='+dvTagCreatedSetInCallBack+'&dvp_callTPSFromIframe='+callTPSFromIframe+'&dvp_beforeVisitCall='+beforeVisitCall+'&dvp_beginVisitCallbackTS='+beginVisitCallbackTS+'&dvp_templateStartTime='+templateStartTime+'&dvp_tpsProcessingTime=+0';var image = window.document.createElement('img');image.src = message;} catch(e) {};});var impId = 'eeb19003a9a2432a9cc0f137de81f82c';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var lbl='';var f=dvObj==window.$dv,g=f?parent:window,h=dvObj.tags[impId].protocol+'/'+'/'+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+'/'+(f?'event':'bsevent')+'.gif?impid='+impId,i=0,j=[];function k(a,c){function b(){if(!n[c]&&(rhe(c),n[c]=!0,a))for(var d=0;d<e.length;d++)a.removeEventListener?a.removeEventListener(e[d],b):a.detachEvent?a.detachEvent('on'+e[d],b):a['on'+e[d]]=void 0}var e='click input change focus keyup textInput keypress paste'.split(' '),n=[];n[c]=!1;if(a)for(var d=0;d<e.length;d++)a.addEventListener?a.addEventListener(e[d],b,!0):a.attachEvent?a.attachEvent('on'+e[d],b):a['on'+e[d]]=b}window.rhe=function(a){var c='';'number'===typeof a&&void 0==j[a]&&(j[a]=!0,i+=a,c='&'+lbl+'heas='+i);dvObj.domUtilities.addImage(h+'&'+lbl+'hea=1'+c,dvObj.tags[impId].tagElement.parentNode)};g.rhe=rhe;function l(a,c){var b=document.createElement(a);b.id=(c||a)+'-'+impId;b.style.visibility='hidden';b.style.position='absolute';return b}function m(a){var c=o;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);'createEvent'in document?(b=document.createEvent('HTMLEvents'),b.initEvent('change',!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent('onchange',b))}})}var p=l('form');p.submit=function(){window.rhe(1)};var o=l('input','txt');o.name=o.id;o.type='text';m('value');m('textContent');var q=l('input','btn');q.name=q.id;q.type='button';var r=l('input','sbmt');r.name=r.id;r.type='submit';r.click=function(){window.rhe(2)};var s=l('a');s.href='javascript:window.rhe(16);';g.document.body.insertBefore(p,null);g.document.body.insertBefore(s,null);p.insertBefore(o,null);p.insertBefore(q,null);p.insertBefore(r,null);k(o,8);k(q,4);k(r,2);k(p,1);} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}