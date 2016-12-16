function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null)
                return errorsArr;
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    }

    function handleSpecificHandler(handler) {
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
            if (url) {
                if (!handler.sendRequest(url))
                    errorObj = createAndGetError('sendRequest failed.', url, handler.getVersion(), handler.getVersionParamName(), handler.dv_script);
            }
            else
                errorObj = createAndGetError('createRequest failed.', url, handler.getVersion(), handler.getVersionParamName(), handler.dv_script);
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, url, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD')
            errorObj['dvp_isOnHead'] = '1';
        if (url)
            errorObj['dvp_jsErrUrl'] = url;
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) //This allows a scenario where no evaluation version is chosen
                isEvaluationVersionChosen = true;
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable())
            return handlersArray[index].handler;
        else
            return null;
    }    
}

function getCurrentTime() {
    "use strict";
    if (Date.now) {
        return Date.now();
    }
    return (new Date()).getTime();
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS, 'i');
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_GetKeyValue(url) {
    var keyReg = new RegExp(".*=");
    var keyRet = url.match(keyReg)[0];
    keyRet = keyRet.replace("=", "");

    var valReg = new RegExp("=.*");
    var valRet = url.match(valReg)[0];
    valRet = valRet.replace("=", "");

    return { key: keyRet, value: valRet };
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url, prefix) {
    try {
        prefix = (prefix != undefined && prefix != null) ? prefix : 'dvp';
        var regex = new RegExp("[\\?&](" + prefix + "_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = [];
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (var key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            } else {
                var params = ['ctx', 'cmp', 'plc', 'sid'];
                for (var i = 0; i < params.length; i++) {
                    var pvalue = dv_GetParam(errorObj[key], params[i]);
                    if (pvalue) {
                        errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                    }
                }
            }
        }
    }

    var windowProtocol = 'http:';
    var sslFlag = '&ssl=0';
    if (window._dv_win.location.protocol === 'https:') {
        windowProtocol = 'https:';
        sslFlag = '&ssl=1';
    }

    var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) { }
}

function dvType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
                $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (ex) { }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        for (i = 0; i < collision.eventsToFire.length; i++) {
            this.pubSub.publish(collision.eventsToFire[i], tag.uid);
        }
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&colltid=' + collision.allReasonsForTagBitFlag;

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&' + reason.name + "ms=" + reason.milliseconds;
        }

        if (collision.thisTag) {
            tpsServerUrl += '&tlts=' + collision.thisTag.t2tLoadTime;
        }
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBSIdFound = function (bsID, tag) {
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&bsimpid=' + bsID;
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBABSVerbose = function (verboseReportingValues, tag) {
        var queryString = "";
        //get each frame, translate


        var dvpPrepend = "&dvp_BABS_";
        queryString += dvpPrepend + 'NumBS=' + verboseReportingValues.bsTags.length;

        for (var i = 0; i < verboseReportingValues.bsTags.length; i++) {
            var thisFrame = verboseReportingValues.bsTags[i];

            queryString += dvpPrepend + 'GotCB' + i + '=' + thisFrame.callbackReceived;
            queryString += dvpPrepend + 'Depth' + i + '=' + thisFrame.depth;

            if (thisFrame.callbackReceived) {
                if (thisFrame.bsAdEntityInfo && thisFrame.bsAdEntityInfo.comparisonItems) {
                    for (var itemIndex = 0; itemIndex < thisFrame.bsAdEntityInfo.comparisonItems.length; itemIndex++) {
                        var compItem = thisFrame.bsAdEntityInfo.comparisonItems[itemIndex];
                        queryString += dvpPrepend + "tag" + i + "_"+ compItem.name + '=' + compItem.value;
                    }
                }
            }
        }

        if (queryString.length > 0) {
            var tpsServerUrl = '';
            if(tag){
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
            }
            var requestString = tpsServerUrl + queryString;
            $dv.domUtilities.addImage(requestString, tag.tagElement.parentElement);
        }
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dv.tags) {
                for (var uid in $dv.tags) {
                    if ($dv.tags.hasOwnProperty(uid) && $dv.tags[uid] && $dv.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            var tag;
            switch (data.action) {
                case 'uniquePageViewIdDetermination':
                    if (visitJSHasBeenCalledForThisTag) {
                        $dv.processT2TEvent(data, $dv.tags[myUID]);
                        $dv.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dv.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) { tag.uniquePageViewId = data.uniquePageViewId; }
                    data.collision.commonRecievedTS = timeCalled;
                    $dv.processTagToTagCollision(data.collision, tag);
                    break;
                case 'bsIdFound':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) { tag.uniquePageViewId = data.uniquePageViewId; }
                    $dv.processBSIdFound(data.id, tag);
                    break;
                case 'babsVerbose':
                    try {
                        tag = $dv.tags[myUID];
                        $dv.processBABSVerbose(data, tag);
                    } catch(err){
                    }
                    break;
            }

        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (ex) { }
        }
    };

    if (window.addEventListener)
        addEventListener("message", messageEventListener, false);
    else
        attachEvent("onmessage", messageEventListener);

    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({ Func: func, ActionName: actionName });
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {

        this.addImage = function (url, parentElement) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        }
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () { };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        }
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () { }
    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.registerEventCall = function (impressionId, eventObject, timeoutMs, isRegisterEnabled) {
        if (typeof isRegisterEnabled !== 'undefined' && isRegisterEnabled === true) {
            addEventCallForDispatch(impressionId, eventObject);

            if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
                dispatchEventCallsNow(impressionId, eventObject);
            else {
                if (timeoutMs > 2000)
                    timeoutMs = 2000;

                var that = this;
                setTimeout(
                function () {
                    that.dispatchEventCalls(impressionId);
                }, timeoutMs);
            }

        } else {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObject);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentNode);
        }
    };

    var dispatchEventCallsNow = function (impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                this.dispatchEventCalls(impressionId);
        }
    };

    this.dispatchEventCalls = function (impressionId) {
        if (typeof eventsForDispatch[impressionId] !== 'undefined' && eventsForDispatch[impressionId] != null) {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventsForDispatch[impressionId]);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };


    if (window.addEventListener) {
        window.addEventListener('unload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
        window.addEventListener('beforeunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
        window.attachEvent('onbeforeunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
    }
    else {
        window.document.body.onunload = function () { that.dispatchRegisteredEventsFromAllTags(); };
        window.document.body.onbeforeunload = function () { that.dispatchRegisteredEventsFromAllTags(); };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };

    this.Enums = {
        BrowserId: { Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5 },
        TrafficScenario: { OnPage: 1, SameDomain: 2, CrossDomain: 128 }
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) { return false; }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };
}

function dv_baseHandler(){function K(a){if(window._dv_win.document.body)return window._dv_win.document.body.insertBefore(a,window._dv_win.document.body.firstChild),!0;var b=0,c=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(a,window._dv_win.document.body.firstChild)}catch(e){}else b++,150>b&&setTimeout(c,20)};setTimeout(c,20);return!1}function ba(a){var b;if(document.createElement&&(b=document.createElement("iframe")))b.name=b.id=window._dv_win.dv_config.emptyIframeID||
"iframe_"+Math.floor(1E12*(Math.random()+"")),b.width=0,b.height=0,b.style.display="none",b.src=a;return b}function ua(a){var b={};try{for(var c=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),e=c.exec(a);null!=e;)"eparams"!==e[1]&&(b[e[1]]=e[2]),e=c.exec(a);return b}catch(f){return b}}function Qa(a){try{if(1>=a.depth)return{url:"",depth:""};var b,c=[];c.push({win:window._dv_win.top,depth:0});for(var e,f=1,B=0;0<f&&100>B;){try{if(B++,e=c.shift(),f--,0<e.win.location.toString().length&&e.win!=a)return 0==e.win.document.referrer.length||
0==e.depth?{url:e.win.location,depth:e.depth}:{url:e.win.document.referrer,depth:e.depth-1}}catch(K){}b=e.win.frames.length;for(var w=0;w<b;w++)c.push({win:e.win.frames[w],depth:e.depth+1}),f++}return{url:"",depth:""}}catch(C){return{url:"",depth:""}}}function ca(a){var b=String(),c,e,f;for(c=0;c<a.length;c++)f=a.charAt(c),e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(f),0<=e&&(f="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((e+
47)%94)),b+=f;return b}function Ra(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(a){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||
!1==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&
window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var b=!1;try{var c=document.createElement("p");c.innerText=".";c.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";b=void 0!=c.style.textShadow}catch(e){}return 0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&b&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(f){return 0}}this.createRequest=function(){var a,b,c;window._dv_win.$dv.DebugInfo={};var e=!1,f=window._dv_win,
B=0,va=!1,w=getCurrentTime();window._dv_win.t2tTimestampData=[{dvTagCreated:w}];var C;try{for(C=0;10>=C;C++)if(null!=f.parent&&f.parent!=f)if(0<f.parent.location.toString().length)f=f.parent,B++,e=!0;else{e=!1;break}else{0==C&&(e=!0);break}}catch(db){e=!1}var D;0==f.document.referrer.length?D=f.location:e?D=f.location:(D=f.document.referrer,va=!0);var wa="",da=null,ea=null;try{window._dv_win.external&&(da=void 0!=window._dv_win.external.QueuePageID?window._dv_win.external.QueuePageID:null,ea=void 0!=
window._dv_win.external.CrawlerUrl?window._dv_win.external.CrawlerUrl:null)}catch(eb){wa="&dvp_extErr=1"}if(!window._dv_win._dvScriptsInternal||!window._dv_win.dvProcessed||0==window._dv_win._dvScriptsInternal.length)return null;var L=window._dv_win._dvScriptsInternal.pop(),x=L.script;this.dv_script_obj=L;this.dv_script=x;window._dv_win.t2tTimestampData[0].dvWrapperLoadTime=L.loadtime;window._dv_win.dvProcessed.push(L);var d=x.src,q,Sa="https:"===window._dv_win.location.protocol?"https:":"http:",
fa=!0,ga=window.parent.postMessage&&window.JSON,xa=!1;if("0"==dv_GetParam(d,"t2te")||window._dv_win.dv_config&&!0===window._dv_win.dv_config.supressT2T)xa=!0;if(ga&&!1===xa)try{q=ba(window._dv_win.dv_config.t2turl||"https://cdn3.doubleverify.com/t2tv7.html"),fa=K(q)}catch(fb){}window._dv_win.$dv.DebugInfo.dvp_HTML5=ga?"1":"0";var M=dv_GetParam(d,"region")||"",ha="http:",ya="0";"https"==d.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(ha="https:",ya="1");try{for(var Ta=
f,ia=f,ja=0;10>ja&&ia!=window._dv_win.top;)ja++,ia=ia.parent;Ta.depth=ja;var za=Qa(f);dv_aUrlParam="&aUrl="+encodeURIComponent(za.url);dv_aUrlDepth="&aUrlD="+za.depth;dv_referrerDepth=f.depth+B;va&&f.depth--}catch(gb){dv_aUrlDepth=dv_aUrlParam=dv_referrerDepth=f.depth=""}for(var Aa=dv_GetDynamicParams(d,"dvp"),N=dv_GetDynamicParams(d,"dvpx"),O=0;O<N.length;O++){var Ba=dv_GetKeyValue(N[O]);N[O]=Ba.key+"="+encodeURIComponent(Ba.value)}"41"==M&&(M=50>100*Math.random()?"41":"8",Aa.push("dvp_region="+
M));var Ca=Aa.join("&"),Da=N.join("&"),Ua=window._dv_win.dv_config.tpsAddress||"tps"+M+".doubleverify.com",E="visit.js";switch(dv_GetParam(d,"dvapi")){case "1":E="dvvisit.js";break;case "5":E="query.js";break;default:E="visit.js"}window._dv_win.$dv.DebugInfo.dvp_API=E;for(var P="ctx cmp ipos sid plc adid crt btreg btadsrv adsrv advid num pid crtname unit chnl uid scusrid tagtype sr dt".split(" "),ka=[],l=0;l<P.length;l++){var la=dv_GetParam(d,P[l])||"";ka.push(P[l]+"="+la);""!==la&&(window._dv_win.$dv.DebugInfo["dvp_"+
P[l]]=la)}for(var ma="turl icall dv_callback useragent xff timecheck".split(" "),l=0;l<ma.length;l++){var Ea=dv_GetParam(d,ma[l]);null!=Ea&&ka.push(ma[l]+"="+(Ea||""))}var Va=ka.join("&"),r;var Wa=function(){try{return!!window.sessionStorage}catch(b){return!0}},Xa=function(){try{return!!window.localStorage}catch(b){return!0}},Ya=function(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var a=b.getContext("2d");a.textBaseline="top";a.font="14px 'Arial'";a.textBaseline=
"alphabetic";a.fillStyle="#f60";a.fillRect(0,0,62,20);a.fillStyle="#069";a.fillText("!image!",2,15);a.fillStyle="rgba(102, 204, 0, 0.7)";a.fillText("!image!",4,17);return b.toDataURL()}return null};try{var m=[];m.push(["lang",navigator.language||navigator.browserLanguage]);m.push(["tz",(new Date).getTimezoneOffset()]);m.push(["hss",Wa()?"1":"0"]);m.push(["hls",Xa()?"1":"0"]);m.push(["odb",typeof window.openDatabase||""]);m.push(["cpu",navigator.cpuClass||""]);m.push(["pf",navigator.platform||""]);
m.push(["dnt",navigator.doNotTrack||""]);m.push(["canv",Ya()]);var i=m.join("=!!!=");if(null==i||""==i)r="";else{for(var F=function(a){for(var b="",d,c=7;0<=c;c--)d=a>>>4*c&15,b+=d.toString(16);return b},Za=[1518500249,1859775393,2400959708,3395469782],i=i+String.fromCharCode(128),s=Math.ceil((i.length/4+2)/16),t=Array(s),h=0;h<s;h++){t[h]=Array(16);for(var u=0;16>u;u++)t[h][u]=i.charCodeAt(64*h+4*u)<<24|i.charCodeAt(64*h+4*u+1)<<16|i.charCodeAt(64*h+4*u+2)<<8|i.charCodeAt(64*h+4*u+3)}t[s-1][14]=
8*(i.length-1)/Math.pow(2,32);t[s-1][14]=Math.floor(t[s-1][14]);t[s-1][15]=8*(i.length-1)&4294967295;for(var Q=1732584193,R=4023233417,S=2562383102,T=271733878,U=3285377520,j=Array(80),y,k,n,p,V,h=0;h<s;h++){for(var g=0;16>g;g++)j[g]=t[h][g];for(g=16;80>g;g++)j[g]=(j[g-3]^j[g-8]^j[g-14]^j[g-16])<<1|(j[g-3]^j[g-8]^j[g-14]^j[g-16])>>>31;y=Q;k=R;n=S;p=T;V=U;for(g=0;80>g;g++){var Fa=Math.floor(g/20),$a=y<<5|y>>>27,z;c:{switch(Fa){case 0:z=k&n^~k&p;break c;case 1:z=k^n^p;break c;case 2:z=k&n^k&p^n&p;break c;
case 3:z=k^n^p;break c}z=void 0}var ab=$a+z+V+Za[Fa]+j[g]&4294967295;V=p;p=n;n=k<<30|k>>>2;k=y;y=ab}Q=Q+y&4294967295;R=R+k&4294967295;S=S+n&4294967295;T=T+p&4294967295;U=U+V&4294967295}r=F(Q)+F(R)+F(S)+F(T)+F(U)}}catch(hb){r=null}r=null!=r?"&aadid="+r:"";var Ga=d,d=(window._dv_win.dv_config.visitJSURL||ha+"//"+Ua+"/"+E)+"?"+Va+"&dvtagver=6.1.src&srcurlD="+f.depth+"&curl="+(null==ea?"":encodeURIComponent(ea))+"&qpgid="+(null==da?"":da)+"&ssl="+ya+"&refD="+dv_referrerDepth+"&htmlmsging="+(ga?"1":"0")+
r+wa,na;a:{try{if("object"==typeof window.mraid||"object"==typeof window.parent.mraid){na=!0;break a}}catch(ib){}na=!1}na&&(d+="&ismraid=1");"http:"==d.match("^http:")&&"https"==window._dv_win.location.toString().match("^https")&&(d+="&dvp_diffSSL=1");var Ha=x&&x.parentElement&&x.parentElement.tagName&&"HEAD"===x.parentElement.tagName;if(!1===fa||Ha)d+="&dvp_isBodyExistOnLoad="+(fa?"1":"0"),d+="&dvp_isOnHead="+(Ha?"1":"0");Ca&&(d+="&"+Ca);Da&&(d+="&"+Da);var G="srcurl="+encodeURIComponent(D);window._dv_win.$dv.DebugInfo.srcurl=
D;var W;var X=window._dv_win[ca("=@42E:@?")][ca("2?46DE@C~C:8:?D")];if(X&&0<X.length){var oa=[];oa[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var Y=0;Y<X.length;Y++)oa[Y+1]=X[Y];W=oa.reverse().join(",")}else W=null;W&&(G+="&ancChain="+encodeURIComponent(W));var H=dv_GetParam(d,"uid");null==H?(H=dv_GetRnd(),d+="&uid="+H):(H=dv_GetRnd(),d=d.replace(/([?&]uid=)(?:[^&])*/i,"$1"+H));var pa=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(pa=
2E3);var Ia=navigator.userAgent.toLowerCase();if(-1<Ia.indexOf("webkit")||-1<Ia.indexOf("chrome")){var Ja="&referrer="+encodeURIComponent(window._dv_win.location);d.length+Ja.length<=pa&&(d+=Ja)}dv_aUrlParam.length+dv_aUrlDepth.length+d.length<=pa&&(d+=dv_aUrlDepth,G+=dv_aUrlParam);d+="&"+this.getVersionParamName()+"="+this.getVersion();d+="&eparams="+encodeURIComponent(ca(G));if(void 0!=window._dv_win.$dv.CommonData.BrowserId&&void 0!=window._dv_win.$dv.CommonData.BrowserVersion&&void 0!=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent)a=
window._dv_win.$dv.CommonData.BrowserId,b=window._dv_win.$dv.CommonData.BrowserVersion,c=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent;else{for(var Ka=dv_GetParam(d,"useragent"),La=Ka?decodeURIComponent(Ka):navigator.userAgent,A=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",
verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],qa=0,Ma="",v=0;v<A.length;v++)if(null!=La.match(RegExp(A[v].brRegex))){qa=A[v].id;if(null==A[v].verRegex)break;var ra=La.match(RegExp(A[v].verRegex+"[0-9]*"));if(null!=ra)var bb=ra[0].match(RegExp(A[v].verRegex)),Ma=ra[0].replace(bb[0],
"");break}var Na=Ra();a=Na;b=Na===qa?Ma:"";c=qa;window._dv_win.$dv.CommonData.BrowserId=a;window._dv_win.$dv.CommonData.BrowserVersion=b;window._dv_win.$dv.CommonData.BrowserIdFromUserAgent=c}d+="&brid="+a+"&brver="+b+"&bridua="+c;window._dv_win.$dv.DebugInfo.dvp_BRID=a;window._dv_win.$dv.DebugInfo.dvp_BRVR=b;window._dv_win.$dv.DebugInfo.dvp_BRIDUA=c;var I;void 0!=window._dv_win.$dv.CommonData.Scenario?I=window._dv_win.$dv.CommonData.Scenario:(I=this.getTrafficScenarioType(window._dv_win),window._dv_win.$dv.CommonData.Scenario=
I);d+="&tstype="+I;window._dv_win.$dv.DebugInfo.dvp_TS=I;var Z="";try{window.top==window?Z="1":window.top.location.host==window.location.host&&(Z="2")}catch(jb){Z="3"}var $=window._dv_win.document.visibilityState;"prerender"===$&&(d+="&prndr=1");var Oa="dvCallback_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd()),cb=this.dv_script;window._dv_win[Oa]=function(a,b,c,e){var f=getCurrentTime();b.$uid=c;b=ua(Ga);a.tags.add(c,b);b=ua(d);a.tags[c].set(b);
a.tags[c].beginVisitCallbackTS=f;a.tags[c].set({tagElement:cb,dv_protocol:ha,protocol:Sa,uid:c});a.tags[c].ImpressionServedTime=getCurrentTime();a.tags[c].getTimeDiff=function(){return(new Date).getTime()-this.ImpressionServedTime};try{"undefined"!=typeof e&&null!==e&&(a.tags[c].ServerPublicDns=e),a.tags[c].adServingScenario=Z,a.tags[c].t2tIframeCreationTime=w,a.tags[c].t2tProcessed=!1,a.tags[c].t2tIframeId=q.id,a.tags[c].t2tIframeWindow=q.contentWindow,$dv.t2tEventDataZombie[q.id]&&(a.tags[c].uniquePageViewId=
$dv.t2tEventDataZombie[q.id].uniquePageViewId,$dv.processT2TEvent($dv.t2tEventDataZombie[q.id],a.tags[c]))}catch(g){}if("prerender"===$)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)a.registerEventCall(c,{prndr:0});else{var h;"undefined"!==typeof window._dv_win.document.hidden?h="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?h="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?h="msvisibilitychange":
"undefined"!==typeof window._dv_win.document.webkitHidden&&(h="webkitvisibilitychange");var i=function(){var b=window._dv_win.document.visibilityState;"prerender"===$&&("prerender"!==b&&"unloaded"!==b)&&($=b,a.registerEventCall(c,{prndr:0}),window._dv_win.document.removeEventListener(h,i))};window._dv_win.document.addEventListener(h,i,!1)}};for(var Pa,aa="auctionid vermemid source buymemid anadvid ioid cpgid cpid sellerid pubid advcode iocode cpgcode cpcode pubcode prcpaid auip auua".split(" "),sa=
[],J=0;J<aa.length;J++){var ta=dv_GetParam(Ga,aa[J]);null!=ta&&(sa.push("dvp_"+aa[J]+"="+ta),sa.push(aa[J]+"="+ta))}(Pa=sa.join("&"))&&(d+="&"+Pa);return d+"&jsCallback="+Oa};this.sendRequest=function(a){var b;b=this.getVersionParamName();var c=this.getVersion(),e={};e[b]=c;e.dvp_jsErrUrl=a;e.dvp_jsErrMsg=encodeURIComponent("Error loading visit.js");window._dv_win.dv_config=window._dv_win.dv_config||{};window._dv_win.dv_config.tpsErrAddress=window._dv_win.dv_config.tpsAddress||"tps30.doubleverify.com";
b='try{ script.onerror = function(){ try{(new Image()).src = "'+dv_CreateAndGetErrorImp(window._dv_win.dv_config.tpsErrAddress+"/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1",e)+'";}catch(e){}}}catch(e){}';b='<html><head></head><body><script id="TPSCall" type="text/javascript" src="'+a+'"><\/script><script type="text/javascript">var script = document.getElementById("TPSCall"); if (script && script.readyState) { script.onreadystatechange = function() { if (script.readyState == "complete") document.close(); }; if(script.readyState == "complete") document.close(); } else document.close(); '+
b+"<\/script></body></html>";c=ba("about:blank");this.dv_script.id=c.id.replace("iframe","script");dv_GetParam(a,"uid");K(c);a=dv_getPropSafe(c,"contentDocument")||dv_getPropSafe(dv_getPropSafe(c,"contentWindow"),"document")||dv_getPropSafe(window._dv_win.frames[c.name],"document");window._dv_win.t2tTimestampData.push({beforeVisitCall:getCurrentTime()});if(a){a.open();if(c=c.contentWindow||window._dv_win.frames[c.name])c.$dv=window._dv_win.$dv;a.write(b)}else a=b.replace(/'/g,"\\'"),a='javascript: (function(){document.open(); document.domain="'+
window.document.domain+"\"; window.$dv = window.parent.$dv; document.write('"+encodeURIComponent(a)+"');})()",c=ba(a),this.dv_script.id=c.id.replace("iframe","script"),K(c);return!0};this.isApplicable=function(){return!0};this.onFailure=function(){window._dv_win._dvScriptsInternal.unshift(this.dv_script_obj);var a=window._dv_win.dvProcessed,b=this.dv_script_obj;null!=a&&(void 0!=a&&b)&&(b=a.indexOf(b),-1!=b&&a.splice(b,1));return window._dv_win.$dv.DebugInfo};this.getTrafficScenarioType=function(a){var a=
a||window,b=a._dv_win.$dv.Enums.TrafficScenario;try{if(a.top==a)return b.OnPage;for(var c=0;a.parent!=a&&1E3>c;){if(a.parent.document.domain!=a.document.domain)return b.CrossDomain;a=a.parent;c++}return b.SameDomain}catch(e){}return b.CrossDomain};this.getVersionParamName=function(){return"jsver"};this.getVersion=function(){return"68"}};


function dv_src_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dv = (window._dv_win.$dv || new dvType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.tpsErrAddress = window._dv_win.dv_config.tpsAddress || 'tps30.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (e) { }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dv_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }

