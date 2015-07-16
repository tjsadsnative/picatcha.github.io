if(dataLayer){
  author = dataLayer[0].author;
  section = dataLayer[0].section_tier1;
  title = dataLayer[0].title;
}

if(window.SEATIMESCO){
  // turn on seatimesco domain to segment by actual domain instead of grouping under df
  //domain = window.SEATIMESCO.payMeter.currentDomain;
  env = window.SEATIMESCO.payMeter.currentDomain;
  if(env=='seattletimes.com' || env=='www.seattletimes.com'){
      domain = 'seattletimes.com'
  }
  else {
      domain = 'df.seattletimes.com';
  }
}

var _sf_async_config={};
/** CONFIGURATION START **/
_sf_async_config.uid = 22565;
_sf_async_config.domain = domain;
//_sf_async_config.path = '';
_sf_async_config.title = title;
_sf_async_config.sections = section;
_sf_async_config.authors = author;
_sf_async_config.useCanonical = true;

/** CONFIGURATION END **/
(function(){
  function loadChartbeat() {
    window._sf_endpt=(new Date()).getTime();
    var e = document.createElement("script");
    e.setAttribute("language", "javascript");
    e.setAttribute("type", "text/javascript");
    e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
    document.body.appendChild(e);
  }
  var oldonload = window.onload;
  window.onload = (typeof window.onload != "function") ?
     loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();