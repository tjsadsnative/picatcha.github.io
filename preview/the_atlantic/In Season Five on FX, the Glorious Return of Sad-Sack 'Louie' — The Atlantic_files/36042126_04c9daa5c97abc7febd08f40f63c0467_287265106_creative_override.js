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
        name: 'Background Exit',
        reportingId: '2155300',
        url: 'http://welcome.libertymutual.com/campaigns/display/auto-2014-v8.html?cmpgncde\x3d2051\x26keyCode\x3dIDPMAALP\x26src\x3dim-ddis-aut-aod-8443668-150214010-%epid!',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'lmiLogo.png',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/lmiLogo.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'LMDRAuto_Q115_DayNight_NoZip_300x250.js',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMDRAuto_Q115_DayNight_NoZip_300x250.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'LMDRAuto_Q115_DayNight_NoZip_300x250.jpg',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMDRAuto_Q115_DayNight_NoZip_300x250.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'LMI_DR_Auto_Zipcode_300x250_backup.jpg',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMI_DR_Auto_Zipcode_300x250_backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'LMDRAuto_Q115_DayNight_NoZip_300x250.css',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMDRAuto_Q115_DayNight_NoZip_300x250.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'LMDRAuto_Q115_DayNight_NoZip_300x250_night.jpg',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMDRAuto_Q115_DayNight_NoZip_300x250_night.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'loading.gif',
        url: '/ads/richmedia/studio/pv2/35279849/20150312083320682/loading.gif',
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
        id: '35969872',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/35279849/20150312083320682/LMDRAuto_Q115_DayNight_NoZip_300x250.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_55' // Duplicating sdk version in subsequent field as version format not the same.
        },
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
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '61115036';
  var adId = '287265106';
  var templateVersion = '200_74';
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
