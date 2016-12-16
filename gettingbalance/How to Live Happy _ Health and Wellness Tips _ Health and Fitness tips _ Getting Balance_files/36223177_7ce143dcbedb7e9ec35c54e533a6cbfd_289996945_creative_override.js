(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_FIRST_QUARTILE: '960584',
      VIDEO_THIRD_QUARTILE: '960585',
      VIDEO_UNMUTE: '149645',
      FULL_SCREEN: '286263',
      DYNAMIC_CREATIVE_IMPRESSION: '536393',
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'Default Click',
        reportingId: '1441561',
        url: 'http://www.jeep.com/en/2015/renegade/?bid\x3d%ebuy!\x26sid\x3d%esid!\x26pid\x3d%epid!\x26adid\x3d%eaid!\x26cid\x3d%ecid!\x26buytype\x3dLF\x26TR\x3d1\x26channel\x3ddisplay',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'EXPLORE THE RENEGADE',
        reportingId: '2278985',
        url: 'http://www.jeep.com/en/2015/renegade/?bid\x3d%ebuy!\x26sid\x3d%esid!\x26pid\x3d%epid!\x26adid\x3d%eaid!\x26cid\x3d%ecid!\x26buytype\x3dLF\x26TR\x3d1\x26channel\x3ddisplay',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'legalClose',
        reportingId: '1147681',
        videoData: null
      },
      {
        name: 'legalOpen',
        reportingId: '1147682',
        videoData: null
      },
      {
        name: 'replay',
        reportingId: '1231846',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: '15_JPRGD_Testimonial_728x90_DSFLS_0.swf',
        url: '/ads/richmedia/studio/pv2/35998647/20150331100442383/15_JPRGD_Testimonial_728x90_DSFLS_0.swf',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: '15_JPRGD_Testimonial_728x90_DSFLS_default.jpg',
        url: '/ads/richmedia/studio/pv2/35998647/20150331100442383/15_JPRGD_Testimonial_728x90_DSFLS_default.jpg',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '36043273',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '728',
        height: '90',
        servingPath: '/ads/richmedia/studio/pv2/35998647/20150331100442383/15_JPRGD_Testimonial_728x90_DSFLS_POLITE.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'opaque',
          sdkVersion: '2.4.4',
          flashBackgroundColor: '',
          allowScriptAccess: 'always'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '62371216';
  var adId = '289996945';
  var templateVersion = '200_91';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
