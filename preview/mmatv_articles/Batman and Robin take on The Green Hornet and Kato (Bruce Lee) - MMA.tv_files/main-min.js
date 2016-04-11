var Banner = {

  init: function() {

    'use strict';
    var gsap = TweenLite; // throw undefined error only once
    var qs = function(selector){
      return document.querySelector(selector);
    };
    // Set banner dimensions
    var del,
        adContent = qs("#ad_content"),
        backUp = qs("#back_up"),
        goose = qs("#goose"),
        timerholder1 = qs("#timerholder1"),
        timerholder2 = qs("#timerholder2"),
        timerholder3 = qs("#timerholder3"),
        timerholder4 = qs("#timerholder4"),
        daysleft = qs("#daysleft"),
        egg = qs("#egg"),
        text1 = qs("#text1"),
        text2 = qs("#text2"),
        frame1 = qs("#frame1"),
        frame2 = qs("#frame2"),
        cta_bg = qs("#cta_bg"),
        adWidth = 300,
        adHeight = 600,
        g,
        gooseArray = [],
        utcSeconds = 1461038340,
        // April 18, 2016, 11:59 pm
        // utcSeconds = 1457154000,
        // TODAY for testing
        deadline = new Date(0),
        getDaysTens,
        getDaysOnes,
        getHoursTens,
        getHoursOnes,
        getMinsTens,
        getMinsOnes,
        getSecTens,
        getSecOnes,
        counter = 0,
        adSeen = false;


    function startGooseWalk() {
      var gooseImage = 'svg-goose';
      var preEggLay = 25;
      var max = 83;
      var speed;
      var i;
      var pause = 0;

      for (i=0; i<=max; i++) {
        if(i >= preEggLay) pause = 2;
        gooseArray.push( g = gsap.set(goose, {className:gooseImage+i, delay:i * 0.05 + pause, overwrite:false}) );
      }
    }

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      console.log('t: ' + t);
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function clockIt(){
      // updates the countdown based on current time
      var timeleft = getTimeRemaining(deadline);
      console.log('days: ' + timeleft.days);
      console.log('hours: ' + timeleft.hours);
      console.log('minutes: ' + timeleft.minutes);
      console.log('seconds: ' + timeleft.seconds);

      getDaysTens = Math.floor(timeleft.days/10);
      getDaysOnes = timeleft.days%10;
      getHoursTens = Math.floor(timeleft.hours/10);
      getHoursOnes = timeleft.hours%10;
      getMinsTens = Math.floor(timeleft.minutes/10);
      getMinsOnes = timeleft.minutes%10;
      getSecTens = Math.floor(timeleft.seconds/10);
      getSecOnes = timeleft.seconds%10;
    }

    function setCountDown() {
      // this function is for the endframe counter

      clockIt();

      var lilDaysTens = "<div class='svg-number"+getDaysTens+" displayinline'></div>";
      var lilDaysOnes = "<div class='svg-number"+getDaysOnes+" displayinline'></div>";
      var lilHoursTens = "<div class='svg-number"+getHoursTens+" displayinline'></div>";
      var lilHoursOnes = "<div class='svg-number"+getHoursOnes+" displayinline'></div>";
      var lilMinsTens = "<div class='svg-number"+getMinsTens+" displayinline'></div>";
      var lilMinsOnes = "<div class='svg-number"+getMinsOnes+" displayinline'></div>";
      var lilSecTens = "<div class='svg-number"+getSecTens+" displayinline'></div>";
      var lilSecOnes = "<div class='svg-number"+getSecOnes+" displayinline'></div>";

      timerholder1.innerHTML =  lilDaysTens + lilDaysOnes;
      timerholder2.innerHTML =  lilHoursTens + lilHoursOnes;
      timerholder3.innerHTML =  lilMinsTens + lilMinsOnes;
      timerholder4.innerHTML =  lilSecTens + lilSecOnes;

      // if the banner has been running for less than 15 seconds then loop
      if(counter < 15){
        // don't loop if the timer hits 0 while counting down
        if(getTimeRemaining(deadline).total >= 0) loopTimer();
      }
      counter++;
    }

    function loopTimer() {
      // TODO make a dummy variable instead of using opacity
      var dummy;
      gsap.to(adContent, 1, {opacity:1, onComplete:setCountDown});
      console.log('looping');
    }

    ////////////////////////////////////////////////////// ANIMATION //////////////////////////////////////////////////////

    function startAnimation() {
      initAdListeners();

      // SET DEADLINE to utc seconds
      deadline.setUTCSeconds(utcSeconds);

      if(preIE10Check()){
        gsap.set(backUp, {className:"+=back-up"});
      } else {
        if(getTimeRemaining(deadline).total > 0) {
          frame0();
        } else {
          gsap.set(backUp, {className:"+=back-up"});
        }
      }

      gsap.set(adContent, {opacity:1});
    }

    //this is the first frame on your animation
    function frame0() {

      del=0;

      //
      clockIt();
      var bigDaysTens = getDaysTens > 0 ? "<div class='svg-number"+getDaysTens+" displayinline'></div>" : "<div></div>";
      var bigDaysOnes = "<div class='svg-number"+getDaysOnes+" displayinline'></div>";
      //
      daysleft.innerHTML =  bigDaysTens +
                            bigDaysOnes +
                            '<div class="displayinline"><div id="text-days" class="svg-text-days"></div></div>';

      // POSITION text2 based on width of daysleft
      if(getDaysTens > 0){
        //gsap.set(text2, {left:250});
      } else if (getDaysTens == 0 && getDaysOnes == 1) {
        gsap.set(daysleft, {width:85});
        //gsap.set(text2, {left:185});
      } else {
        //gsap.set(text2, {left:200});
      }

      // FRAME 1
      startGooseWalk();

      gsap.to(goose, 0.5, {opacity:1, delay:del});
      gsap.to(daysleft, 0.5, {opacity:1, delay:del+=0.5});
      gsap.set(egg, {opacity:1, delay:del+=1});
      gsap.to(text2, 0.5, {opacity:1, delay:del});

      gsap.to(text1, 0.2, {opacity:0, delay:del+=5});
      gsap.to(text2, 0.2, {opacity:0, delay:del});
      gsap.to(daysleft, 0.2, {opacity:0, delay:del});
      gsap.to(egg, 0.2, {opacity:0, delay:del});
      gsap.to(frame1, 0.2, {opacity:0, delay:del});


      // FRAME 2
      gsap.to(frame2, 0.5, {opacity:1, delay:del+=0.5});
      setCountDown();
    }



    ////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

    function onAdClick(e) {
      window.open(window.clickTag);
    }

    function onAdHover(e) {
      gsap.to(cta_bg, 0.25, {scale:1.1});
    }

    function onAdOut(e) {
      gsap.to(cta_bg, 0.25, {scale:1});
    }

    function initAdListeners() {
      if (adContent.addEventListener) {
        // adContent.addEventListener('touchEnd', onAdClick, false);
        adContent.addEventListener('click', onAdClick, false);
        adContent.addEventListener('mouseover', onAdHover, false);
        adContent.addEventListener('mouseout', onAdOut, false);
      } else {
        // adContent.attachEvent('touchEnd', onAdClick, false);
        adContent.attachEvent('onclick', onAdClick, false);
        adContent.attachEvent('onmouseover', onAdHover, false);
        adContent.attachEvent('onmouseout', onAdOut, false);
      }
    }

    function preIE10Check() {
      if (window.attachEvent && !window.navigator.msPointerEnabled) {
        console.log('IE 9 or below detected.');
        return true;
      } else {
        console.log('This browsers is not IE 9 or below. 001');
        return false;
      }
    }


    ////////////////////////////////////////////////////// INIT //////////////////////////////////////////////////////

    startAnimation();
  }
};

window.onload = function() {
  'use strict';
  Banner.init();
};
