//helpers
window.SEATIMESCO = window.SEATIMESCO || {};
window.SEATIMESCO.helpers = window.SEATIMESCO.helpers || {};

SEATIMESCO.helpers = {
  get_params: function(){
    qs = document.location.search;
    qs = qs.split("+").join(" ");
    var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
}

SEATIMESCO.device = {

  initialize: function(){
    this.md = new MobileDetect(window.navigator.userAgent);
  },

  checkInit: function(){
    if(!this.md){
      this.initialize();
    }
  },

  isApp:function(){
    this.checkInit();
    if(app = this.getPlatform()) {
      return app;
    }

  },

  isMobile: function(){
    this.checkInit();
    return this.md.mobile();
  },

  isTablet: function(){
    this.checkInit();
    return this.md.tablet();
  },

  isPhone: function(){
    this.checkInit();
    return this.md.phone();
  },

  isDesktop: function(){
    if(!this.isMobile() && !this.isPhone() && !this.isTablet()){
      return true;
    }
  },

  getMD: function(){
    this.checkInit();
    return this.md;
  },

  getPlatform: function(){
    params = SEATIMESCO.helpers.get_params();
    if(params.platform==='android' || params.platform==='ios'){
      return params.platform;
    }
  },

  getApp: function(){
    if(app = this.getPlatform()){
      return app;
    }
    else if(app = this.isMobile()){
      return "mobile";
    }
    else{
      return "desktop";
    }
  },

  appToDataLayer: function(){
    dataLayer[0].app = this.getApp();
  }

};


if ( typeof dataLayer !== "undefined") {
  SEATIMESCO.device.appToDataLayer();
}
