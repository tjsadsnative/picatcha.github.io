var
    myIndex = 0,
    myWidth=300,
    myHeight=600,
    weatherIndex,
    weatherIconIndex,
    dayOfWeekIndex=0,
    monthIndex=0,
    date=1,
    outImageIndex = 0,
    inImageIndex = 0,
    currentImage = 0,
    numImages = 2,
    startAd,
    startAdStandard,
    startPSA,
    goToURL,
    moveItArrow,
    dayOfWeekArray=new Array('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'),
    monthArray=new Array('JAN','FEB',"MAR","APR",'MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'),
    weatherArray = new Array("NICE", "HOT", 'COLD', 'RAIN', 'SNOW', 'OTHER'),
    weatherIconArray = new Array("rain", "snow",'sunny', 'cloudy', 'partlycloudy'),
    geoArray = new Array('NE-MW', 'SE', 'NW', 'W'),
    geoIndex,
    myXML,
    destURL,
    xmlString,

    introTimer,
    introTimerCounter=0,
    highTemp,
    lowTemp,
    populateText,
    getXML;

    var highTempArray = new Array();
    var lowTempArray = new Array();
    var conditionArray = new Array();
    var urlArray = new Array();
    var zapposConditionArray = new Array();

startAd = function (ind) {
    myIndex = ind;
    if(myIndex===0){
        myWidth=160;
        myHeight=600;
    }
    else if(myIndex===1){
        myWidth=300;
        myHeight=250;
    }
    else if(myIndex===2){
        myWidth=300;
        myHeight=600;
    }
    else if(myIndex===3){
        myWidth=728;
        myHeight=90;
    }
    else if(myIndex===4){
        myWidth=320;
        myHeight=480;
    }


    xmlString = 'https://dyncreative.choicestream.com/zappos/timberland?campaign_type=geo&size='+myWidth+'x'+myHeight+'&format=xml';
    //xmlString = 'https://dyncreative.choicestream.com/zappos/timberland?campaign_type=nongeo&size=300x250&format=xml';
    getXML();
};

    
function getXML(){
    $.ajax({
        type: "GET",
        url: xmlString,
        timeout:3000,
        dataType: "xml",
        xhrFields: {
            withCredentials: true
        },

        error: function(){
            console.log("success")
            startDefault();
        },

        success: function(xml) {
            console.log("success")
            myXML = xml;
            loadPixel($(xml).find("tracker_url").text())
            startAdStandard();
            //startDefault();
            
        }
    })
}


function startDefault(){
  var defaultImage;
  if(myIndex == 0){
    defaultImage = "_images/default/160x600-default.jpg";
  }
  else if(myIndex == 1){
    defaultImage = "_images/default/300x250-default.jpg";  
  }
  else if(myIndex == 2){
    defaultImage = "_images/default/300x600-default.jpg";  
  }
  else if(myIndex == 3){
    defaultImage = "_images/default/728x90-default.jpg";  
  }

  $( "#header" ).remove();
  $( "#weatherText" ).remove();
  $( "#weatherImage" ).remove();
  $( "#footer" ).remove();
  $( "#arrowL" ).remove();
  $( "#arrowR" ).remove();
  $( "#CTA" ).remove();
  $( "#store" ).remove();
  $( "#theArt" ).remove();

  $('#wrapper').prepend('<img id="theImg" src="" />')
  $('#theImg').attr('src', defaultImage);

    var urlDestArray = new Array(
        "https://ad.doubleclick.net/ddm/trackclk/N3093.273259.CHOICESTREAM/B5817522.124882554;dc_trk_aid=297726045;dc_trk_cid=66616597;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?camp=T:A:GEN:Prospecting:TBL",
        "https://ad.doubleclick.net/ddm/trackclk/N3093.273259.CHOICESTREAM/B5817522.124882555;dc_trk_aid=297726044;dc_trk_cid=66616599;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?camp=T:A:GEN:Prospecting:TBL",
        "https://ad.doubleclick.net/ddm/trackclk/N3093.273259.CHOICESTREAM/B5817522.124882557;dc_trk_aid=297726042;dc_trk_cid=66617306;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?camp=T:A:GEN:Prospecting:TBL",
        "https://ad.doubleclick.net/ddm/trackclk/N3093.273259.CHOICESTREAM/B5817522.124882556;dc_trk_aid=297726043;dc_trk_cid=66616079;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?camp=T:A:GEN:Prospecting:TBL")

  $('#wrapper').click(function (event) {
        event.stopPropagation();
        dest = urlDestArray[myIndex];
        window.open(dest, 'new_window');

    });
  var pixelArray = new Array(
        "https://ad.doubleclick.net/ddm/trackimp/N3093.273259.CHOICESTREAM/B5817522.124882554;dc_trk_aid=297726045;dc_trk_cid=66616597",
        "https://ad.doubleclick.net/ddm/trackimp/N3093.273259.CHOICESTREAM/B5817522.124882555;dc_trk_aid=297726044;dc_trk_cid=66616599",
        "https://ad.doubleclick.net/ddm/trackimp/N3093.273259.CHOICESTREAM/B5817522.124882557;dc_trk_aid=297726042;dc_trk_cid=66617306",
        "https://ad.doubleclick.net/ddm/trackimp/N3093.273259.CHOICESTREAM/B5817522.124882556;dc_trk_aid=297726043;dc_trk_cid=66616079")
  var pixelURL = pixelArray[myIndex];
  loadPixel(pixelURL);
  
}

function startAdStandard(xml){


    $('#wrapper').click(function (event) {
        event.stopPropagation();
        goToURL();

    });

    $('#arrowL').click(function (event) {
        event.stopPropagation();
        clearInterval(introTimer);
        moveIt(0);

    });
    $('#arrowR').click(function (event) {
        event.stopPropagation();
        clearInterval(introTimer);
        moveIt(1);
    });
    setTimeout(fadeInArt, 1000);
    

    // this is GEO, 0 days ahead.  Need to grab 1st product.

    //max
    $(myXML).find("zapposProduct").each(function(){
        $(this).find("max_temp").each(function(){
            highTempArray.push($(this).text());
        })
        $(this).find("min_temp").each(function(){
            lowTempArray.push($(this).text());
        })
    })
    highTemp = highTempArray[0];
    
    //min
    lowTemp = lowTempArray[0];


    ee = $(xml).find("min_temp").text();
/*
    // geo
    ee = $(myXML).find("region").text();
    
    if(ee==="northeast"){
        geoIndex=0;
    }
    else if(ee==='midwest'){
        geoIndex=0;
    }
    else if(ee==='southeast'){
        geoIndex=1;
    }
    else if(ee==='northwest'){
        geoIndex=2;
    }
    else if(gg==='west'){
        geoIndex=3;
    }
  */
    
    // condition for background (nice, hot, cold, rain, snow)
    var gg;
    $(myXML).find("zapposProduct").each(function(){
        $(this).find("condition").each(function(){
            conditionArray.push($(this).text());            
        })
    })
    gg = conditionArray[0];
    if(gg==="nice"){
        weatherIndex=5;
    }
    else if(gg==='hot'){
        weatherIndex=5;
    }
    else if(gg==='cold'){
        weatherIndex=5;
    }
    else if(gg==='rain'){
        weatherIndex=3;
    }
    else if(gg==='snow'){
        weatherIndex=4;
    }
    else{
        weatherIndex=5;
    }

     // weatherIndex = 3

   if (weatherIndex !=5){
        introTimer=setInterval(autoForward, 2000);
   }


    //condition for icon
     var g;
    $(myXML).find("zapposProduct").each(function(){
        $(this).find("zappos_condition").each(function(){
            zapposConditionArray.push($(this).text());
        })
    })
    g = zapposConditionArray[0];

    if(g==="rainy"){
        weatherIconIndex=0;
    }
    else if(g==='snowy'){
        weatherIconIndex=1
    }
    else if(g==='sunny'){
        weatherIconIndex=2
    }
    else if(g==='cloudy'){
        weatherIconIndex=3
    }
    else if(g==='partlycloudy'){
        weatherIconIndex=4
    }
   populateText();
}
    
    
function fadeInArt(){
    $( "#theArt" ).fadeTo( "slow" , 1, function() {
    // Animation complete.
  });
}
function autoForward(){
    if(introTimerCounter < 8){
        introTimerCounter++;
        moveIt(1);
    }
    else{
        clearInterval(introTimer);
    }
}

function populateText(){
    //highTemp = "99";
    //lowTemp = "11"
   // weatherIndex=5;
    //weatherIconIndex=0;
    //geoIndex = 0;


   
 //3 character day of week from dayOfWeekArray
    var d = new Date();
    d.setDate(d.getDate() + 0);
    var n = d.getDay();
    var b;
    if(n == 0){
        b= dayOfWeekArray[dayOfWeekArray.length - 1];
    }
    else{
        b= dayOfWeekArray[n-1];
    }
    $('#day').text(b);


    
    // grab month from monthArray
    n = d.getMonth();

    b=monthArray[n];
    var c = d.getDate();
    $('#date').text(b);
    $('#num').text(c);
    
    // highTemp
    $('#highTemp').text(highTemp+"˚");
    
    // if high temp is 3 characters, increase left of low temp
    
    
    if(highTemp.length>2){
        var h = Number($('#lowTemp').css('left').replace(/[^-\d\.]/g, ''))
        var i=(h+20)
        $("#lowTemp").css("left", i);
    }
          
    // lowTemp
    $('#lowTemp').text(lowTemp+"˚");
        
    // icon from weatherArray, path + width + height + icon + weatherIconArray + .png
    var src="./_images/icon/"+myWidth+'x'+myHeight+'-icon-'+weatherIconArray[weatherIconIndex]+'.png';
    $("#icon").attr("src", src);

    
    //bg from weatherArray, path + width + height + bg + weatherArray + .jpg
    src="./_images/background/bknd-"+myWidth+'x'+myHeight+'-'+weatherArray[weatherIndex]+'.jpg';
    $("#bg").attr("src", src);
    
        //shoes
    src="./_images/product/"+myWidth+'x'+myHeight+'/'+weatherArray[weatherIndex]+'-01.png'
    $("#image00").attr("src", src);
    


    if(weatherIndex == 3 || weatherIndex == 4){

        src="./_images/product/"+myWidth+'x'+myHeight+'/'+weatherArray[weatherIndex]+'-02.png'
        $("#image11").attr("src", src);
        /*
        src="./_images/product/"+myWidth+'x'+myHeight+'/'+weatherArray[weatherIndex]+'-03.png'
        $("#image22").attr("src", src);

        src="./_images/product/"+myWidth+'x'+myHeight+'/'+weatherArray[weatherIndex]+'-04.png'
        $("#image33").attr("src", src);

        src="./_images/product/"+myWidth+'x'+myHeight+'/'+weatherArray[weatherIndex]+'-05.png'
        $("#image44").attr("src", src);
        */
    }   

    if(weatherIndex < 3 || weatherIndex ==5){
        $( "#arrowL" ).remove();
        $( "#arrowR" ).remove();
    }
}

// used when clicking left and right arrows.  this should take 0.5 seconds
var moveIt = function (x) {
    outImageIndex=currentImage;
    if (x === 0) {
        // left
        if (currentImage === 0) {
            currentImage = numImages - 1;
        } else {
            currentImage--;
        }
        $('#image' + currentImage).addClass('inLeft');
        $('#image' + currentImage).removeClass('inRight');
        $('#image' + currentImage).removeClass('outRight');
        $('#image' + currentImage).removeClass('outLeft');


        $('#image' + outImageIndex).addClass('outLeft');
        $('#image' + outImageIndex).removeClass('inLeft');
        $('#image' + outImageIndex).removeClass('inRight');
        $('#image' + outImageIndex).removeClass('outRight');

    } else {
        // right
        if (currentImage === numImages - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        $('#image' + currentImage).addClass('inRight');
        $('#image' + currentImage).removeClass('inLeft');
        $('#image' + currentImage).removeClass('outRight');
        $('#image' + currentImage).removeClass('outLeft');


        $('#image' + outImageIndex).addClass('outRight');
        $('#image' + outImageIndex).removeClass('inLeft');
        $('#image' + outImageIndex).removeClass('inRight');
        $('#image' + outImageIndex).removeClass('outLeft');
    }
};

function goToURL() {
   
   
    // populate clickTagString
    var urlParams,

        match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1),
        myURL,
        dest,
        clickTagString;

    urlParams = {};
    while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
    clickTagString = urlParams["click"];

    if (!clickTagString) {
        clickTagString = "";
    }

     $(myXML).find("zapposProduct").each(function(){
        $(this).find("url").each(function(){
            urlArray.push($(this).text());            
        })
    });

    destURL = urlArray[0];
    dest = clickTagString + destURL;
    window.open(dest, 'new_window');
}

function loadPixel(x) {
    console.log('loading '+x)
    var image = new Image();
    image.src = x;
}