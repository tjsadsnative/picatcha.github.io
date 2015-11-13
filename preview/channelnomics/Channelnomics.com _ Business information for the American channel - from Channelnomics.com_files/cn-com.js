/* JS Document */
/* cn-com.css for www.channelnomics.com */
/* Created by: Vinst */
/* Copyright Incisive Media 2014 */
/* Updated:02-10-2014 */

//start cookie code
/*
Paul Stephens' NetScape-based cookie-handling library
http://web.ukonline.co.uk/paul.stephens/index.htm
*/

function setCookie (name, value, lifespan, access_path) {
  var cookietext = name + "=" + escape(value)  
    if (lifespan != null) {  
      var today=new Date()     
      var expiredate = new Date()      
      expiredate.setTime(today.getTime() + 1000*60*60*24*lifespan)
      cookietext += "; expires=" + expiredate.toGMTString()
    }
    if (access_path != null) { 
      cookietext += "; PATH="+access_path 
    }
   document.cookie = cookietext 
   return null  
}

function setDatedCookie(name, value, expire, access_path) {
    var cookietext = name + "=" + escape(value)
      + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
     if (access_path != null) { 
      cookietext += "; PATH="+access_path 
     }
   document.cookie = cookietext 
   return null        
}

function getCookie(Name) {
  var search = Name + "="                       
  var CookieString = document.cookie            
  var result = null                               
  if (CookieString.length > 0) {                
    offset = CookieString.indexOf(search)       
    if (offset != -1) {                         
      offset += search.length                   
      end = CookieString.indexOf(";", offset)   
      if (end == -1)                            
        end = CookieString.length               
      result = unescape(CookieString.substring(offset, end))         
                                                
      } 
    }
   return result                                
}
function deleteCookie(Name, Path) {
  setCookie(Name,"Deleted", -1, Path)
}
/*
Uname = getCookie("login_error_message");          
if (Uname != null){
    mes=Uname.split("+").join(" ");
    if (mes!=""){
        if ($('#login_error_message_teaser')[0]!=null);
    {
        $('#login_error_message_teaser').show();
        $('#login_error_message_teaser').html(mes);
    }
  }
  deleteCookie("login_error_message","/");      
}
*/
//end cookie code


(function($){

//nav stuff starts here 
var holder = $(".holder").height();
var maskHeight = 0; 
var holderOuter = $(".holder").outerHeight();
var padTop = parseInt($(".clicker1").css("padding-top")) * 2;


$("nav .test").click(function(e) {

 //alert("test clicked");
}); 


$(".clicker1").click(function(e) {
      $(".menu1").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
      $(".clicker1").toggleClass("active");

  if ($(".nav .menuOn").is(":visible")) {
     maskHeight = ($(".nav .menu1").height());
     $(".mask").animate({"height": maskHeight}, "fast");
  } else {
      maskHeight = 0;
      $(".mask").animate({"height": maskHeight}, "fast");
  }      

//if menus are open------------------------------------------------
  if ($('.nav .menu2').css('top') > "0px"){
    $(".menu2").toggleClass("menuOn");
      $(".clicker2").toggleClass("active");
      $(".menu2").toggleClass("menuPos");

      maskHeight = ($(".nav .menu1").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu3').css('top') > "0px"){
      $(".menu3").toggleClass("menuOn");
      $(".clicker3").toggleClass("active");
      $(".menu3").toggleClass("menuPos");

      maskHeight = ($(".nav .menu1").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu4').css('top') > "0px"){
      $(".menu4").toggleClass("menuOn");
      $(".clicker4").toggleClass("active");
      $(".menu4").toggleClass("menuPos");

      maskHeight = ($(".nav .menu1").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu5').css('top') > "0px"){
      $(".menu5").toggleClass("menuOn");
      $(".clicker5").toggleClass("active");
      $(".menu5").toggleClass("menuPos");

      maskHeight = ($(".nav .menu1").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  }
  e.stopPropagation();
});

$(".clicker2").click(function(e) {
      $(".menu2").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
      $(".clicker2").toggleClass("active");

  if ($(".nav .menuOn").is(":visible")) {
      maskHeight = ($(".nav .menu2").height());
     $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else {
      maskHeight = 0;
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } 

//if menus are open------------------------------------------------
  if ($('.nav .menu1').css('top') > "0px"){
    $(".menu1").toggleClass("menuOn");
      $(".clicker1").toggleClass("active");
      $(".menu1").toggleClass("menuPos");

      maskHeight = ($(".nav .menu2").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu3').css('top') > "0px"){
      $(".menu3").toggleClass("menuOn");
      $(".clicker3").toggleClass("active");
      $(".menu3").toggleClass("menuPos");

      maskHeight = ($(".nav .menu2").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu4').css('top') > "0px"){
      $(".menu4").toggleClass("menuOn");
      $(".clicker4").toggleClass("active");
      $(".menu4").toggleClass("menuPos");

      maskHeight = ($(".nav .menu2").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  }  else if ($('.nav .menu5').css('top') > "0px"){
      $(".menu5").toggleClass("menuOn");
      $(".clicker5").toggleClass("active");
      $(".menu5").toggleClass("menuPos");

      maskHeight = ($(".nav .menu2").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  }
  e.stopPropagation();
});






$(".clicker5").click(function(e) {


      $(".menu5").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
      $(".clicker5").toggleClass("active");

  if ($(".nav .menuOn").is(":visible")) {
      maskHeight = ($(".nav .menu5").height());
     $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else {
      maskHeight = 0;
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } 


//if menus are open------------------------------------------------
  if ($('.nav .menu1').css('top') > "0px"){
    $(".menu1").toggleClass("menuOn");
      $(".clicker1").toggleClass("active");
      $(".menu1").toggleClass("menuPos");

      maskHeight = ($(".nav .menu5").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu2').css('top') > "0px"){
      $(".menu2").toggleClass("menuOn");
      $(".clicker2").toggleClass("active");
      $(".menu2").toggleClass("menuPos");

      maskHeight = ($(".nav .menu5").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu3').css('top') > "0px"){
      $(".menu3").toggleClass("menuOn");
      $(".clicker3").toggleClass("active");
      $(".menu3").toggleClass("menuPos");

      maskHeight = ($(".nav .menu5").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu4').css('top') > "0px"){
      $(".menu4").toggleClass("menuOn");
      $(".clicker4").toggleClass("active");
      $(".menu4").toggleClass("menuPos");

      maskHeight = ($(".nav .menu5").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } 




  //alert("Edition tab");
   e.stopPropagation();
}); 









$(".clicker3").click(function(e) {
      $(".menu3").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
      $(".clicker3").toggleClass("active");

  if ($(".nav .menuOn").is(":visible")) {
      maskHeight = ($(".nav .menu3").height());
     $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } else {
      maskHeight = 0;
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } 

//if menus are open------------------------------------------------
  if ($('.nav .menu1').css('top') > "0px"){
    $(".menu1").toggleClass("menuOn");
      $(".clicker1").toggleClass("active");
      $(".menu1").toggleClass("menuPos");

      maskHeight = ($(".nav .menu3").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu2').css('top') > "0px"){
      $(".menu2").toggleClass("menuOn");
      $(".clicker2").toggleClass("active");
      $(".menu2").toggleClass("menuPos");

      maskHeight = ($(".nav .menu3").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu4').css('top') > "0px"){
      $(".menu4").toggleClass("menuOn");
      $(".clicker4").toggleClass("active");
      $(".menu4").toggleClass("menuPos");

      maskHeight = ($(".nav .menu3").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  }  else if ($('.nav .menu5').css('top') > "0px"){
      $(".menu5").toggleClass("menuOn");
      $(".clicker5").toggleClass("active");
      $(".menu5").toggleClass("menuPos");

      maskHeight = ($(".nav .menu3").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  }
  e.stopPropagation();
});

/*
var loggedOut = '<li><a href="http://www.risk.net/static/generic-trial-page">Take a Risk.net free trial now</a></li>'
    +'<div id="otdm-user-menu-below-free-trial"></div>'
    +'<li><a href="http://www.risk.net/static/subscribe">Subscribe to Risk.net</a></li>'
    +'<div id="otdm-user-menu-below-subscribe"></div>'
    +'<li><a href="http://newsletters.incisivemedia.com/incisive_newsletters/risknet/newsletter_signup.html" target="_blank">Email alerts</a></li>'
    +'<div id="otdm-user-menu-below-newsletter"></div>';    

var loggedIn = '<li><a href="http://newsletters.incisivemedia.com/incisive_newsletters/risknet/newsletter_signup.html" target="_blank">Email alerts</a></li>'
    +'<div id="otdm-user-menu-below-newsletter"></div>'
    +'<li class="last-list"><a href="/home/logout">Log out</a></li>'
    +'<div id="otdm-user-menu-below-logout"></div>';
*/

$(".clicker4").click(function(e) {
/*
function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      } else {
          begin += 2;
          var end = document.cookie.indexOf(";", begin);
          if (end == -1) {
          end = dc.length;
          }
      }
    return unescape(dc.substring(begin + prefix.length, end));
  } 

    var myCookie = getCookie("logged_in");
    if (myCookie === null) {

    
    if($(".menu4 ul:not('Email alerts')").length) {
        $('.menu4 ul >').detach();
        $(".menu4 ul").append(loggedOut);
    }
    } else {

    if($(".menu4 ul:not('Take a Risk.net free trial now')").length) {
      $('.menu4 ul >').detach();
        $(".menu4 ul").append(loggedIn);
    } 
    }

*/





      $(".menu4").toggleClass("menuOn").css({"margin-top":-holder}).toggleClass("menuPos");
      $(".clicker4").toggleClass("active");

  if ($(".nav .menuOn").is(":visible")) {
      maskHeight = ($(".nav .menu4").height());
     $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  } else {
      maskHeight = 0;
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  }  

//if menus are open------------------------------------------------
  if ($('.nav .menu1').css('top') > "0px"){
    $(".menu1").toggleClass("menuOn");
      $(".clicker1").toggleClass("active");
      $(".menu1").toggleClass("menuPos");

      maskHeight = ($(".nav .menu4").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu2').css('top') > "0px"){
      $(".menu2").toggleClass("menuOn");
      $(".clicker2").toggleClass("active");
      $(".menu2").toggleClass("menuPos");

      maskHeight = ($(".nav .menu4").height());  //default to no. 1 height var
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  } else if ($('.nav .menu3').css('top') > "0px"){
      $(".menu3").toggleClass("menuOn");
      $(".clicker3").toggleClass("active");
      $(".menu3").toggleClass("menuPos");

      maskHeight = ($(".nav .menu4").height());  //default to no. 1 height var
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");

  }  else if ($('.nav .menu5').css('top') > "0px"){
      $(".menu5").toggleClass("menuOn");
      $(".clicker5").toggleClass("active");
      $(".menu5").toggleClass("menuPos");

      maskHeight = ($(".nav .menu4").height());  
      $(".mask").toggleClass("border-bottom").animate({"height": maskHeight}, "fast");
  }
  e.stopPropagation();
});
//end nav stuff -------------------------------------------------------------------------------

$("html").click(function(e) {
//alert("doc");
  //e.stopPropagation();
});  

$("body").click(function(e) {
  //alert("doc");
  //e.stopPropagation();
}); 

$(".mask").click(function(e) {
  e.stopPropagation();
});

//::::::::::::::::::::::: check if menu items are open :::::::::::::::::::::::::::
$("html, body, #container").click(function(e) {
  if ($('.nav .menu1').css('top') > "0px"){
    $(".menu1").toggleClass("menuOn");
    $(".clicker1").toggleClass("active");
    $(".menu1").toggleClass("menuPos");
    var maskHeight = 0; 
    $(".mask").toggleClass("border-bottom").animate({"height": maskHeight }, "fast");
  } else if ($('.nav .menu2').css('top') > "0px"){
    $(".menu2").toggleClass("menuOn");
    $(".clicker2").toggleClass("active");
    $(".menu2").toggleClass("menuPos");
    var maskHeight = 0; 
    $(".mask").toggleClass("border-bottom").animate({"height": maskHeight }, "fast");
  } else if ($('.nav .menu3').css('top') > "0px") {
    $(".menu3").toggleClass("menuOn");
    $(".clicker3").toggleClass("active");
    $(".menu3").toggleClass("menuPos");
    var maskHeight = 0; 
    $(".mask").toggleClass("border-bottom").animate({"height": maskHeight }, "fast");
  } else if ($('.nav .menu4').css('top') > "0px") {
    $(".menu4").toggleClass("menuOn");
    $(".clicker4").toggleClass("active");
    $(".menu4").toggleClass("menuPos");
    var maskHeight = 0; 
    $(".mask").toggleClass("border-bottom").animate({"height": maskHeight }, "fast");
  } else if ($('.nav .menu5').css('top') > "0px") {
    $(".menu5").toggleClass("menuOn");
    $(".clicker5").toggleClass("active");
    $(".menu5").toggleClass("menuPos");
    var maskHeight = 0; 
    $(".mask").toggleClass("border-bottom").animate({"height": maskHeight }, "fast");
  }
  e.stopPropagation();
});

if('ontouch' in document){
   $("#container").bind('touchend', function() {
   return false
 });
}  

//resize menu if open
function resizedMenu(){
  //iterates thru menu
  $('nav div[class^="menu"]').each(function() { 
  var st = $(this).attr('class');
    if(st === "menu1 menuPos menuOn"){
        var maskHeight = ($("nav .menu1").height())+holder;
        $(".mask").animate({"height": maskHeight}, "fast");
    } else if (st === "menu2 menuPos menuOn"){
        var maskHeight = ($("nav .menu2").height())+holder;
        $(".mask").animate({"height": maskHeight}, "fast");
    } else if (st === "menu3 menuPos menuOn"){
        var maskHeight = ($("nav .menu3").height())+holder;
        $(".mask").animate({"height": maskHeight}, "fast");
    }  
  });
}
//timer for resize
var resizeTimer;
$(window).bind('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizedMenu, 100);
});  


function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}
if (!supportsSVG()){
    document.documentElement.className = document.documentElement.className.replace(/\bsvg\b/g, 'no-svg');
    var imgs = document.getElementsByTagName('img');
    var dotSVG = /.*\.svg$/;
    for (var i = 0; i != imgs.length; ++i) {
        if(imgs[i].src.match(dotSVG)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }
}
/* logo background image fix in old ies */
var na = navigator.appVersion;
if ((na.indexOf("MSIE 9.0") !== -1)||(na.indexOf("MSIE 8.0") !== -1)||(na.indexOf("MSIE 7.0") !== -1)) {  
    document.documentElement.className = document.documentElement.className.match(/\bno-svg\b|\bsvg\b/g) + ' lt-ie9';
}

var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//checking for IE "fixed header" 
if (navigator.userAgent.match(/IEMobile/i)) {
  //$("nav").addClass("topHigh");
  //alert("ie?");
} else {
  $("nav").addClass("topNormal");
} 

//truncate start
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  if($("#content .follow-box h6 a").length){
    var authorStr = $("#content .follow-box h6 a").html();
  } else {
    var authorStr = " ";
  }
  var spaceChar = authorStr.indexOf(" ");
  var reqstr = authorStr.substring(0, spaceChar);

  var more_text = "Full job details";
  var less_text = "Hide full job details";
  var more_text_biog = "Read more on"+" "+reqstr;
  var less_text_biog = "Read less on"+" "+reqstr;
  var ellipsis_text = "...";
  var max_length = 100; /* set the max content length before a read more link will be added */
  var max_length_listings = 80; /* for mobile listings max content length */
  var max_length_biog = 180; 

  $("#content section.larger p").addClass("truncate-listing");
  $("#content section p.more-link").removeClass("truncate-listing");

  $(".truncate-listing strong").replaceWith(function(){
    //remove the strong tag
    return $(this).html().replace(/<\/?strong>/g, "");
  });

  /* for mobile listings summary */
  $(".truncate-listing").each(function(event){
    if($(this).html().length > max_length_listings){
      var short_ = $(this).html().substr(0, max_length_listings); /* split the content in two parts */
      var short_content = $(this).html().substr(0, max_length_listings); /* split in two parts for regex*/
        short_content = short_content.replace(/\s+\S*$/, "");

      var end_trim = short_.match(/\S*$/); //this regex dosen't bring back the space
      var long_content = $(this).html().substr(max_length_listings); 

    $(this).html(short_content+
            "<span class=\"more-ellipsis\">"+ellipsis_text+"</span>"+
            "<span class=\"more-text-hide\">"+end_trim+long_content+"</span>");
    }
  });

  $(".truncate").each(function(event){ /* select all divs with the item class */
    if($(this).html().length > max_length){ /* check for content length */
      var short_ = $(this).html().substr(0, max_length); /* split the content in two parts */
      var short_content = $(this).html().substr(0, max_length); /* split in two parts for regex*/
        short_content = short_content.replace(/\s+\S*$/, "");

      //pulling back the last word space and characters from the string 
      var end_trim = short_.match(/\S*$/); //this dosen't bring back the space
      var long_content = $(this).html().substr(max_length);
      $(this).html(short_content+
            "<span class=\"more-ellipsis\">"+ellipsis_text+"</span>"+
            "<span class=\"more-text-hide\">"+"&#160;"+end_trim+long_content+"</span>"+
            "<div class=\"more-holder\" style=\"\"><span class=\"more-plus-icon\"></span><p class=\"read-more\"><a href=\"#\">"+more_text+"</a></p></div>"); 
      $(this).find(".read-more").click(function(event){ /* find the read_more element within the new html and bind the following code to it */
          if($(this).hasClass("less")){
            $(this).parents(".truncate").find(".more-plus-icon").removeClass("less"); 
            $("a", this).text(more_text);
            $(this).parents(".truncate").find(".more-ellipsis").show();
            $(this).parents(".truncate").find(".more-text-show").toggleClass("more-text-show more-text-hide");
            $(this).removeClass("less");
          } else { 
            $(this).addClass("less");
            $(this).parents(".truncate").find(".more-plus-icon").addClass("less"); 
            $("a", this).text(less_text);
            $(this).parents(".truncate").find(".more-ellipsis").hide();
            $(this).parents(".truncate").find(".more-text-hide").toggleClass("more-text-hide more-text-show");
          }
        event.preventDefault(); /* prevent the a from changing the url */
      });
    }
  });




//For authors bio, review with Deepa
$("#content .follow-box p:first-of-type").addClass("truncate02");
$(".truncate02").each(function(event){ /* select all divs with the item class */
    if($(this).html().length > max_length_biog ){ /* check for content length */
      var short_ = $(this).html().substr(0, max_length_biog ); /* split the content in two parts */
      var short_content = $(this).html().substr(0, max_length_biog ); /* split in two parts for regex*/
        short_content = short_content.replace(/\s+\S*$/, "");

      //pulling back the last word space and characters from the string 
      var end_trim = short_.match(/\S*$/); //this dosen't bring back the space
      var long_content = $(this).html().substr(max_length_biog );
      $(this).html(short_content+
            "<span class=\"more-ellipsis\">"+ellipsis_text+"</span>"+
            "<span class=\"more-text-hide\">"+"&#160;"+end_trim+long_content+"</span>"+
            "<div class=\"more-holder\"><span class=\"more-plus-icon\"></span><p class=\"read-more\"><a href=\"#\">"+more_text_biog+"</a></p></div>"); 
      $(this).find(".read-more").click(function(event){ /* find the read_more element within the new html and bind the following code to it */
          if($(this).hasClass("less")){
            $(this).parents(".truncate02").find(".more-plus-icon").removeClass("less"); 
            $("a", this).text(more_text_biog)+" name";
            $(this).parents(".truncate02").find(".more-ellipsis").show();
            $(this).parents(".truncate02").find(".more-text-show").toggleClass("more-text-show more-text-hide");
            $(this).removeClass("less");
          } else { 
            $(this).addClass("less");
            $(this).parents(".truncate02").find(".more-plus-icon").addClass("less"); 
            $("a", this).text(less_text_biog)+" name";
            $(this).parents(".truncate02").find(".more-ellipsis").hide();
            $(this).parents(".truncate02").find(".more-text-hide").toggleClass("more-text-hide more-text-show");
            //p.truncate02 > span.more-text-hide

          }
        event.preventDefault(); /* prevent the a from changing the url */
      });
    }
  });





//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//truncate end

/* :::::::::::::::::::::::::::::::::: related article dropdown function start :::::::::::::::::::::*/
var current_width = $(window).width();
var related = $(".related-article-inner");

if(isMobile.any()){
  if (current_width <= 683) {
    $("#content .related-article-holder .read_more").addClass("activated");
    related.addClass("hide");

    $(".related-article-title").click(function(event){
      related.toggleClass("hide");
      $(".read_more",this).toggleClass("less");
      event.preventDefault();
    });
  }
 } 
/*::::::::::::::::::::::::::::::::::: related article dropdown function end ::::::::::::::::::::::*/

/*:::::::::::::::::::::::::::::::::: review article list dropdown function start ::::::::::::::::::::::::::::*/
/*  reviews top spec component, for now  */
var listDisplay01 = $(".article-top-container .list-inner01");
listDisplay01.addClass("hide");

  $(".article-top-container .list-title01").click(function(){
    listDisplay01.toggleClass("hide");
    $(".read_more",this).toggleClass("less");
    $("div",this).html($("div",this).html() === 'Hide specifications' ? 'View specifications' : 'Hide specifications');
  });
/*  reviews top spec component end, for now  */

var listDisplay = $(".list-inner");
listDisplay.addClass("hide");

  $(".list-title").click(function(){
    listDisplay.toggleClass("hide");
    $(".read_more",this).toggleClass("less");
  });

/*::::::::::::::::::::::::::::::::: review article list dropdown function end ::::::::::::::::::::::::::::::*/

//detect if android version 3 or less than, IE9 and less, Blackberry, as z-index not respected, bug!!
var ua = window.navigator.userAgent;
var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
if ((ua.indexOf("Android") >= 0 && androidversion <= 3) || (ua.match(/IEMobile/i) && (ua.match(/MSIE\s(?!9.0)/))) || (ua.indexOf("BlackBerry") >= 0 && ua.indexOf("WebKit") >= 0)){
      //alert("this is android 2.2")
      $(".nav").addClass("nav-float");
      $(".page-head .cn-logo").addClass("not-fixed");
} else {
     $(".nav").addClass("nav-fixed");
}

/* box-sizing fix in ie7 and gingerbread */
if ((na.indexOf("MSIE 7.0") !== -1) || (ua.indexOf("Android") >= 0 && androidversion <= 3)) {  
    /*
    $('.box-out').each(function(){
      var f, a, n;
      f = $(this).outerWidth();
      a = $(this).width();
      n = a-(f-a);
      $(this).css('width', n);
    });
  */
}



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//fix for ios input and select bug
if (ua.match(/iPhone|iPad|iPod/i)) {  
  $('input, select, option').bind('focus',function(e) { 
  
  $(".nav").removeClass("nav-fixed").addClass("nav-absolute");
    $('html, body').animate({
          //scrollTop:0
    });
  });
  
  $('input, select, option').bind('blur',function(e) {
    $(".nav").removeClass("nav-absolute").addClass("nav-fixed");
  });
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//fix for ios input bug end

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//fallback for browsers (ie9 and lower, for example) that do not support the placeholder
    if ( !("placeholder" in document.createElement("input")) ) {
        $("input[placeholder], textarea[placeholder]").each(function() {
            var val = $(this).attr("placeholder");
            if ( this.value == "" ) {
                this.value = val;
            }
            $(this).focus(function() {
                if ( this.value == val ) {
                    this.value = "";
                }
            }).blur(function() {
                if ( $.trim(this.value) == "" ) {
                    this.value = val;
                }
            })
        });
 
        // Clear default placeholder values on form submit
        $('form').submit(function() {
            $(this).find("input[placeholder], textarea[placeholder]").each(function() {
                if ( this.value == $(this).attr("placeholder") ) {
                    this.value = "";
                }
            });
        });
    }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//search relevance select function
$('#search-relevance select.select').each(function(){
    //alert("selected");
    var title = $(this).attr('title');
    if( $('option:selected', this).val() != '') title = $('option:selected',this).text();

      $(this)
      .addClass("customise")
      .after('<span class="select">' + title + '</span>')
      .change(function(){
        val = $('option:selected',this).text();
        $(this).next().text(val);
      })
});
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//search page refine search button functionality end

//The PI debounce start
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
if ($('.content-spacer').length > 0 || $('footer .main-columns')) {
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 300);
      };
  }
  jQuery.fn[sr] = function(fn){ return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');

$(window).smartresize(function(){
   //console.log("yep, resize");
  //for static pages with the content-spacer
  var height = $(this).height() - $(".nav").height() - $("header").height() - $(".rounded-box1").height() - $("footer").height();
  $('.content-spacer').height(height);

  //footer column heights
  var highestCol = Math.max($('footer .display-left').height(),$('footer .display-right').height());
  $('footer .menu-columns').height(highestCol);
});
 $(window).resize(); //on page load resize
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//The PI debounce end

//adding non-breaking space to pagination for arrow display
var nonbreaking = "&nbsp;"; 
$(".pagination-holder a.prev_page, .pagination-holder a.next_page").html(nonbreaking);

//this is twitter fix to display full author name
$("#content").on("DOMNodeInserted ", ".follow-box iframe", function(){
    $(this).css({"float":"left","width":"55%"});
});

//get year for static component "mobile-footer-copyright" 
var currentYear = (new Date).getFullYear();
$(".copyright-truncated .current-year, .copyright-full .current-year").text(currentYear);

//test for article author/tweet component
var tagsCategories = $("#otdm-article-below-further-reading + .content-columns.display-left + .content-columns.display-right");
var authorComponentDiv = $("#otdm-article-below-further-reading + .content-columns.display-left");
var testForEmpty = /^[\s]*[\s]*$/; //this is empty or full of white space
var authorComponent = $("#otdm-article-below-further-reading + .content-columns.display-left").text();
var articleCatList = $("#content article .list-horizontal li:first-child + li").text();

if (authorComponent.search(testForEmpty) === 0) {
  $(authorComponentDiv).hide();
  $(tagsCategories).css({"width":"100%"});
} 
/* for the author category list-horizontal item on article pages when empy */
if (articleCatList.search(testForEmpty) === 0) {
  $("#content article .list-horizontal li:nth-child(2)").addClass("empty-list-content");
} 


//$('#content article .list-horizontal li:first-child + li').css({"border":"1px solid #0f0"}); 

//removing nbsp that's creating a gap on barrier page
function removeNbsp($el){
    $el.contents().each(function(){
      if (this.nodeType === 3){
        this.nodeValue = this.nodeValue.replace(/\u00A0/g, "");
      } else {
        removeNbsp($(this));
      }
    });
}
removeNbsp($("#otdm-barrier-customer-service"));

//removes the p tags of "Pros" & "Cons" on review page
$('#content .article-top-container .list-generic li p, #content article .list-inner p').replaceWith(function(){
    //alert("la catanga 2")
    return $(this).html().replace(/<\/?>/g, "");
});
//adds space after strong tag
$("#content article .title_left strong").append(" ");

//article page, change text Tags-Categories to Topics
$('#content .related-links li:first-child:contains("Tags")').text('Topics');
$('.list-horizontal.related-links').not(':first').remove().children('li').appendTo('.list-horizontal.related-links:first');
//$(".list-horizontal.related-links li:contains('Categories')").addClass("hide-element"); 
$(".list-horizontal.related-links li:contains('Categories')").hide();


/* Correct article page spacing issue for square images of 120px x 120px or smaller, task 25351 */


$(function() {
  var screenImage = $("#content article p a .left");
  //console.log("vinst test");
  $(screenImage).each(function(){
    var theImage = new Image();
    theImage.src = screenImage.attr("src");
    var self = theImage.width;
    //alert(self);

    //var self = $(this).width();
    if (self < 121){
      $(this).parent().parent().addClass("clear-paragraph");
    }
  });
  function removeNbsp($el){
    $el.contents().each(function(){
      if (this.nodeType === 3){
        this.nodeValue = this.nodeValue.replace(/\u00A0/g, " ");
      } else {
        removeNbsp($(this));
      }
    });
  }
  removeNbsp($("#content article .clear-paragraph ~ p"));
  $("#content article p:empty").remove();
});

//when two article images are together clear the para
$('img + img').closest('#content article p').addClass('clear-paragraph x2-images');


if($.trim($("#content article .article-top-container").text()) === ""){
    $("#content article .article-top-container").addClass("hide-element");
}













//Review page, remove formatting, create list, then add strong tags, my holy grail!! 
/*


var regex = /(\w+\s\w+:|\w+:)/g; 
console.log('Hi Vinst');
string = string.replace(/<[\/]{0,1}(STRONG|strong)[^><]*>/g,'');
$('.article-top-container .list-inner').html(string);

$( '.article-top-container .list-inner' ).contents().filter(function() {
  return this.nodeType === 3;
}).wrap( '<li></li>' ).end().filter('br').remove();

$( '.article-top-container .list-inner' ).wrapInner('<ul class="list-generic"></ul>');

$('.article-top-container .list-generic li').each(function() {
    text = $(this).html();
    if (text.match(/(\w+\s\w+:|\w+:)/g)) {
    $(this).html(text.replace(regex, '<strong>$1</strong>'));
    }
});
*/


//this to remove ad gaps, only works for ios...
/*var myTimer = setTimeout(checkIframes, 2000);
function checkIframes(){
  $("#otdm-homepage-slot-3, #otdm-homepage-slot-1").each(function() {
      var cette = $(this);
      if (cette.find("iframe").length > 1) { 
        cette.find("iframe").remove();
      }
  });
} */

//prepend class to white papers and jobs component
//$('.section-jobs').prepend('<div class="branding"></div>');
//$('.section-white-papers').prepend('<div class="branding"></div>');
//prepend class to jobs component and list-inner div 
//$('.section-jobs').prepend('<div class="branding"></div>');
//$('#content .comment-title').after('<div class="tap-this"><p>Tap above to show comments</p></div>');

//kontera scoping and article page rule
if ($("#content article").length){
  //$("#content article").addClass("KonaBody");
   $("#content main").addClass("main-article");
}



  //for tabbed content  
 $('[data-tab]').on('click', function(e){
    $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
    e.preventDefault();
  });
     
//edition branding
$('.header-search-holder').append('<div class="edition"></div>'); 
$( '<div class="edition"></div>').insertAfter('footer .container .display-right');
$('.menu5 div ul').after('<li class="edition2"><a href="http://www.channelnomics.eu/" target="_blank" title="European edition"><div class="edition2-link">&nbsp;</div></a></li>');

})(jQuery); //end doc load



/*
 * jQuery FlexSlider v2.4.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!=c&&void 0!=c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li class="'+n+'nav-prev"><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li class="'+n+'nav-next"><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),g=c?a.h:a.w,S=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g,p=c?b:x,m=c?x:b,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",s,!1))}function n(e){x=e.touches[0].pageX,b=e.touches[0].pageY,h=c?p-b:p-x,y=c?Math.abs(h)<Math.abs(x-m):Math.abs(h)<Math.abs(b-m);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h/=0===a.currentSlide&&0>h||a.currentSlide===a.last&&h>0?Math.abs(h)/g+2:1),a.setProps(f+h,"setTouch")))}function s(t){if(e.removeEventListener("touchmove",n,!1),a.animatingTo===a.currentSlide&&!y&&null!==h){var i=d?-h:h,r=a.getTarget(i>0?"next":"prev");a.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(i)>50||Math.abs(i)>g/2)?a.flexAnimate(r,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",s,!1),p=null,m=null,h=null,f=null}function r(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,g=c?a.h:a.w,S=Number(new Date),f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g)}function o(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,h=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=d?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}p=null,m=null,h=null,f=null,w=0}}var p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=a,e.addEventListener("MSGestureChange",o,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
if($('.flexslider').length){
   $('.flexslider').flexslider({ animation:"slide" });
}
/* End jQuery FlexSlider v2.1 */

