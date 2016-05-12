
            (function() {
                // Dynamic values from page request
                
            var script = document.getElementById("celtra-script-1");
            if (!script || script.tagName.toLowerCase() !== 'script')
               throw 'Element with id equal to scriptId does not exist or is not a script.';
        
                var runtimeParams = {"deviceInfo":{"platformVersion":null,"model":"Chrome - OS X","browserVersion":"48.0.2564.103","deviceType":"Desktop","browserName":"Chrome","primaryHardwareType":"Desktop","browserRenderingEngine":"WebKit","osName":"OSX","osVersion":"10.11.2","mobileDevice":false,"platform":"DesktopPlatform","vendor":"Google"},"ipDmaCode":807,"authToken":"ce5be4d66e1600ea9fca347992ea8c1a","externalLineItemId":"343030324","ipCity":"San Jose","externalSiteId":"97790164","ipCountryCode":"US","gpsLat":"","customAudiences":{},"clientTimeZoneOffsetInMinutes":480,"externalPlacementId":"98749684","preferredClickThroughWindow":"new","ipRegionName":"California","ipAreaCode":408,"accountId":"c75de9d1","derivedAudiences":{},"ipPostalCode":"95113","purpose":"live","externalAdServer":"DFPPremium","authBasis":"1454973850458,e0ddc739,e33e6ca7","gpsLng":"","neustarSegment":null,"variantChoices":{"CdnTiming":null},"scriptId":"celtra-script-1","language":"en","ipLat":37.3338,"ipCountryName":"United States","pippioId":null,"ipMetroCode":807,"sessionId":"s1454973850x530ec96d935142x85887273","clickUrl":"https:\/\/tk.kargo.com\/t\/cp.bFCJ.1NAo3AM1pQ0?rand=738371395&url=https:\/\/adclick.g.doubleclick.net\/aclk?sa=L&ai=BtZJqfSO5VraMF-ydkwKI0pOADbzv5d8HAAAAEAEgnNnyIjgAWJSm84DZAmDJ9viGyKOgGbIBD20uYXVkaW9tYWNrLmNvbboBCWdmcF9pbWFnZcgBCdoBF2h0dHA6Ly9tLmF1ZGlvbWFjay5jb20vwAIC4AIA6gI4Lzk4NzkwMDQ0L0NvbXBsZXgvQ29tcGxleF9NdXNpYy9Db21wbGV4X011c2ljX01vYmlsZV9XZWL4AvzRHpAD8AGYA6QDqAMB0ASQTuAEAZAGAaAGINgGAtgHAA&num=0&cid=5GiwekblggXYjWrOne83Ti5G&sig=AOD64_1W7EZFdXbkKFZCm4_ACFdV9dmBaA&client=ca-pub-3961626861596160&adurl=","clientTimestamp":"1454973821.551","expandDirection":"undefined","weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":24},"ipTimeZone":"America\/Los_Angeles","ipRegionCode":"CA","tagVersion":"3","ipLng":-121.89149,"clickEvent":"advertiser","secure":0,"platformAdvIdTrackingLimited":null,"platformAdvId":null,"customIdentifiers":{},"externalCreativeId":"92612121364","placementId":"e33e6ca7","firstPage":1,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null};
                runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
                
                var macros = function (x) {
                    if (x instanceof Array) {
                        return x.map(macros);
                    } else {
                        var macroTags = [['{celtraPlacementId}', "e33e6ca7"],
                                         ['{celtraCreativeId}', "e0ddc739"],
                                         ['{celtraAccountId}', "c75de9d1"],
                                         ['{celtraCampaignId}', "08379338"],
                                         ['{celtraSupplierId}', "208fae25"],
                                         ['{celtraProto}',"http"],
                                         ['{celtraRandom}', (Math.random()+'').slice(2)],
                                         ['{celtraPlatformAdvId}', null],
                                         ['{celtraPlatformAdvIdTrackingLimited}', ""],
                                         ['{celtraSessionId}', "s1454973850x530ec96d935142x85887273"],
                                         ['{celtraIosAdvId}', null],
                                         ['{celtraIosAdvIdTrackingLimited}', ""],
                                         ['{celtraIosAdvIdTrackingLimitedBoolStr}', ""],
                                         ['{celtraAndroidAdvId}', null],
                                         ['{celtraAndroidAdvIdTrackingLimited}', ""],
                                         ['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""],
                                         ['%s', "http"],
                                         ['%n', (Math.random()+'').slice(2)],
                                         ['{celtraCreativeId:int}', 3772630841],
                                         ['{celtraPlacementId:int}', 3812519079],
                                         ['{celtraCampaignId:int}', 137859896],
                                         ['{celtraSupplierId:int}', 546287141]
                                        ];
                        return macroTags.reduce(function(str, replacementRule, idx, arr) {
                            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
                        }, x);
                    }
                };
        
                
                // Dynamic values that we do not want to pass forward in urls,
                // so we look them up on every page request based on runtimeParams
                var openWebsiteOverrideUrls = {};
                var getAppOverrideUrls      = {};
                
                // Less dynamic values for payload request
                var payloadBase = "http:\/\/cache.celtra.com\/api\/creatives\/e0ddc739\/compiled\/web.js";
                var cacheParams = {"v": "1-b2180f2098", "secure": 0};
                
                var trackers = (function() {
            return [

        // 3rd-party tracker (regular)
        function(event) {
            if (event.name == 'adLoading')
                return {urls: macros(["https:\/\/bs.serving-sys.com\/BurstingPipe\/adServer.bs?cn=tf&c=19&mc=imp&pli=15662787&PluID=0&ord=%n&rtu=-1"])};

            if (event.name == 'firstInteraction')
                return {urls: macros([])};

            if (event.name == 'creativeLoaded')
                return {urls: macros([])};
            
            if (event.name == 'viewable00')
                return {urls: macros([])};
            
            if (event.name == 'viewable501')
                return {urls: macros([])};

            if (event.name == 'videoPlayInitiated')
                return {urls: macros([])};

            if (event.name == 'videoStart')
                return {urls: macros([])};

            if (event.name == 'videoFirstQuartile')
                return {urls: macros([])};

            if (event.name == 'videoMidpoint')
                return {urls: macros([])};

            if (event.name == 'videoThirdQuartile')
                return {urls: macros([])};

            if (event.name == 'videoComplete')
                return {urls: macros([])};

            if (event.name == 'custom')
                return {urls: macros({}[event.label] || [])};
            
            if (event.name == 'urlOpened')
                return {urls: macros({}[event.label] || [])};
                
            if (event.name == 'storeOpened')
                return {urls: macros({}[event.label] || [])};
        },

        // 3rd-party tracker (click regular)
        function(event) {
            if (event.name === "firstInteraction")
                return {urls: macros(["https:\/\/bs.serving-sys.com\/BurstingPipe\/adServer.bs?cn=tf&c=20&mc=click&pli=15662787&PluID=0&ord=%n"]), events: [{name: 'click'}] };
        },

            // Ad server tracker
            function(event) {
                if (event.name === "firstInteraction")
                    return {urls: macros(["https:\/\/tk.kargo.com\/t\/cp.bFCJ.1NAo3AM1pQ0?rand=738371395&url=https:\/\/adclick.g.doubleclick.net\/aclk?sa=L&ai=BtZJqfSO5VraMF-ydkwKI0pOADbzv5d8HAAAAEAEgnNnyIjgAWJSm84DZAmDJ9viGyKOgGbIBD20uYXVkaW9tYWNrLmNvbboBCWdmcF9pbWFnZcgBCdoBF2h0dHA6Ly9tLmF1ZGlvbWFjay5jb20vwAIC4AIA6gI4Lzk4NzkwMDQ0L0NvbXBsZXgvQ29tcGxleF9NdXNpYy9Db21wbGV4X011c2ljX01vYmlsZV9XZWL4AvzRHpAD8AGYA6QDqAMB0ASQTuAEAZAGAaAGINgGAtgHAA&num=0&cid=5GiwekblggXYjWrOne83Ti5G&sig=AOD64_1W7EZFdXbkKFZCm4_ACFdV9dmBaA&client=ca-pub-3961626861596160&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
            }
]
        })();
                trackers.urlsAndEventsFor = function(event) {
                    return this.reduce(function(acc, tracker) {
                        var ue = tracker(event) || {};
                        return {
                            urls:   acc.urls.concat(ue.urls || []),
                            events: acc.events.concat(ue.events || [])
                        };
                    }, {urls: [], events: []});
                };
                
                var adLoadingEvent = {"name":"adLoading","sessionId":"s1454973850x530ec96d935142x85887273"};
                adLoadingEvent.clientTimestamp = new Date/1000;

                trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
                    (new Image).src = url;
                });

                // Build payload url
                var pairs = [];
                for (var k in cacheParams)
                    pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
                var payloadUrl = payloadBase + '?' + pairs.join('&');
                
                // Request and run payload
                var payload = document.createElement('script');
                payload.src = payloadUrl;
                payload.onload = function() {
                    runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
                    window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, openWebsiteOverrideUrls, getAppOverrideUrls, macros);
                };
                script.parentNode.insertBefore(payload, script.nextSibling);
        
            })();
            