var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.1.9',
  'files': '/foresee/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'glVA1cV3yH6AB3EyYXoBtQ==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'uk.reuters.com',
  'site_id': 'uk.reuters.com',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'mobile_web',
    platform: 'phone',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            //e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            //textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter anemail address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 30,
      lf: 2
    },
    include: {
      urls: ['uk.mobile.reuters.com']
    }
  },
  {
    name: 'mobile_web',
    platform: 'phone',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            //e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            //textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter anemail address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 30,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'tablet_web',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Can we email you later a brief customer satisfaction survey so we can improve your tablet experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            //e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            //textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter anemail address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 20,
      lf: 2
    },
    include: {
      urls: ['uk.reuters.com']
    }
  },
  {
    name: 'tablet_web',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Can we email you later a brief customer satisfaction survey so we can improve your tablet experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            //e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            //textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter anemail address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 20,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'browse',
    platform: 'desktop',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 10,
      lf: 2,
      locales: [{
        locale: 'en-GB',
        sp: 20,
        lf: 2
      }]
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 90,

    repeatoverride: false,

    altcookie: {},

    language: {
      locale: 'en',
      src: 'location',
      locales: [{
        match: 'uk.reuters.com',
        locale: 'en-GB'
      },
      {
        match: 'uk.mobile.reuters.com',
        locale: 'en-GB'
      }]
    },

    exclude: {},

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /*mobile on exit heartbeat delay seconds*/
      max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      //alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
          noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window"

        }]
      ],

      exclude: {
        urls: [],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [],
        variables: []
      },
      include: {
        local: ['.']
      },

      delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      //SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 15,

      // Fast timeout is when we think there's a good chance we've closed the browser
      fasttimeout: 15,

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.'
      },
      url: 'tracker.html'
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: false,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {}
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {},

    mode: 'first-party'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);