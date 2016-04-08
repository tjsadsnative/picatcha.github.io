//establish environment variables for the ad-stack based on which widget is being called
(function() {
   var protocolToUse = (location.protocol == "https:") ? "https" : "http";
   var embedURL = protocolToUse + "://content.synapsys.us/embeds/realestate/weather_rand1/remnant.js";
   var widgetURLs = [
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_avg_prec.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_avg_temp.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_clear_days.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_cloudy_days.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_snow_fall.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_thunder.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/highest_wind_spd.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_avg_prec.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_avg_temp.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_clear_days.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_cloudy_days.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_snow_fall.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_thunder.html",
      protocolToUse + "://w1.synapsys.us/widgets/realestate/lowest_wind_spd.html",
   ];
   var types = [
      "realestate_highest_avg_prec",
      "realestate_highest_avg_temp",
      "realestate_highest_clear_days",
      "realestate_highest_cloudy_days",
      "realestate_highest_snow_fall",
      "realestate_highest_thunder",
      "realestate_highest_wind_spd",
      "realestate_lowest_avg_prec",
      "realestate_lowest_avg_temp",
      "realestate_lowest_clear_days",
      "realestate_lowest_cloudy_days",
      "realestate_lowest_snow_fall",
      "realestate_lowest_thunder",
      "realestate_lowest_wind_spd",
   ];
   var randNum = Math.floor(Math.random() * widgetURLs.length);
   var domain = (function() {
      var myHost = top.location.host;
      var tempHost = myHost.split(".");
      switch (tempHost.length) {
         case 0:  //crash me, please
         case 1:  //crash me, please
            break;
         case 2:  //exactly what we want
            break;
         default: //break it down
            //AT&T uses att.yahoo.com, so here's the exception to avoid a collision with yahoo.com
            if (tempHost[tempHost.length - 3] == "att" && tempHost[tempHost.length - 2] == "yahoo" && tempHost[tempHost.length - 1] == "com") {
               myHost = "att.yahoo.com";
            } else if (tempHost[tempHost.length - 2] == "co" && tempHost[tempHost.length - 1] == "uk") {
               myHost = tempHost[tempHost.length - 3] + "." + tempHost[tempHost.length - 2] + "." + tempHost[tempHost.length - 1];
            } else {
               myHost = tempHost[tempHost.length - 2] + "." + tempHost[tempHost.length - 1]; //no matter how many layers of subdomain there are, this should return only the domain
            }
            break;
      }
      return myHost;
   })();
   var adUnitName = domain.split(".").join("_") + "_remnant_300x250";

   var currentScript = document.currentScript || (function() {
      var scripts = document.getElementsByTagName("script");
      for (var i = scripts.length - 1; i >= 0; i--) {
         if (scripts[i].src.indexOf(embedURL) != -1) {
            return scripts[i];
         }
      }
   })();

   var q = {
      dom: domain,   //the domain according to the client
      type: types[randNum],  //the widget's type
      subd: false,   //deprecated; intended to indicate if this was going to show up on the old finance subdomains
      remn: true, //if this is being served as a remnant
      src: embedURL, //this
      name: adUnitName,
      widU: widgetURLs[randNum],  //full url to the widget's live code
      widW: 300,  //the widget's width
      widH: 600,  //the widget's height
      adW: 300,  //the ad's width
      adH: 250,  //the ad's height
      ofx: 0,  //offset in the X direction that the ad-stack needs to be adjusted to match the designated ad-space for this widget
      ofy: 350,  //offset in the Y direction that the ad-stack needs to be adjusted to match the designated ad-space for this widget
      rand: Math.random() * 10000000000000000000,
   }

   var newScript = document.createElement("script");
   newScript.src = protocolToUse + "://content.synapsys.us/l/n/index-mdb.php?"+Object.keys(q).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(q[key])}).join("&");
   currentScript.parentNode.insertBefore(newScript, currentScript);

})();
