function startLoading() {
  var elem = document.getElementById("devices");
  elem.parentNode.removeChild(elem);
  setVars();
}

function setVars() {
  var plans = _id('plans');
  var primary_copy = _id('primary_copy');
  var offer_eyebrow_copy = _id('offer_eyebrow_copy');
  var supporting1_copy = _id('supporting1_copy');
  var supporting2_copy = _id('supporting2_copy');
  var closing_headline = _id('closing_headline');
  var summary_copy = _id('summary_copy');
  var urgency_message = _id('urgency_message');
  var cta = _id('cta');
  var cta_copy = _id('cta_copy');
  var icon_1 = _id('icon_1');
  var icon_2 = _id('icon_2');
  var legal = _id('legal');
  var legal_rollover = _id('legal_rollover');
  var legal_copy = _id('primary_copy');
  var background_color = _id('background_color');
  var urgency_box_color;
  var text_color;
  var cta_copy_color;
  var cta_button_color;
  var cta_rollover_text_color;
  var cta_rollover_button_color;
  var logo = _id('logo');
  var image1 = _id('image1');
  var banner = _id('banner');
  setDyn();
}

function setDyn() {
  primary_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].primary_copy_300x250;
  //offer_eyebrow_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].offer_eyebrow_copy_300x250 ;
  supporting1_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].supporting1_copy_300x250;
  //supporting2_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].supporting2_copy_300x250 ;
  image1.style.backgroundImage = 'url(' + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Image1.Url + ')';
  legal_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Legal_Copy;
  legal_rollover.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Legal_Rollover;
  closing_headline.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].closing_headline_300x250;
  summary_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].summary_copy_300x250;
  urgency_message.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].urgency_message_300x250;
  background_color.style.backgroundColor = "#" + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Background_Color;
  legal.style.backgroundColor = "#" + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Background_Color;
  banner.style.color = "#" + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Text_Color;
  cta_copy.innerHTML = dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].CTA_copy;
  //cta.style.backgroundColor = "#" + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].CTA_button_color;
  //cta_copy.style.color = "#" + dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].CTA_copy_color;
  if (window.loaded = true) startAd();
}
///////////////////////////////////////
var _time = .4;

function slideInRight(_id, _delay) {
  TweenMax.from(_id, _time, {
    delay: _delay,
    x: "+100",
    scale: 1.2,
    autoAlpha: 0,
    ease: Back.easeOut
  });
}

function fallIn(_id, _delay) {
  TweenMax.from(_id, _time, {
    delay: _delay,
    scale: 1.2,
    autoAlpha: 0,
    ease: Back.easeOut
  });
}

function slideOutDown(_id, _delay) {
  TweenMax.to(_id, _time, {
    delay: _delay,
    y: "+50",
    autoAlpha: 0,
    ease: Back.easeIn
  });
}

function slideInUp(_id, _delay) {
  TweenMax.from(_id, _time, {
    delay: _delay,
    y: "+30",
    autoAlpha: 0,
    ease: Back.easeOut
  });
}

function fadeOut(_id, _delay) {
  TweenMax.to(_id, _time, {
    delay: _delay,
    autoAlpha: 0
  });
}

function fadeIn(_id, _delay) {
  TweenMax.from(_id, _time, {
    delay: _delay,
    autoAlpha: 0
  });
}

function legalIn() {
  TweenMax.to(legal, _time, {
    alpha: 1
  });
  TweenMax.to(cta, _time, {
    alpha: 0
  });
}

function legalOut() {
  TweenMax.to(legal, _time, {
    alpha: 0
  });
  TweenMax.to(cta, _time, {
    alpha: 1
  });
}

function adOver() {
  cta_copy.style.color = "#000";
  cta.style.backgroundColor = "#FFF";
}

function adOut() {
  cta_copy.style.color = "#FFF";
  cta.style.backgroundColor = "#000";
  //cta_copy.style.color = "#"+dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].CTA_copy_color ;
  //cta.style.backgroundColor = "#"+dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].CTA_button_color ;
}

function _id(e) {
  return document.getElementById(e);
}

function setListeners() {
  plans.addEventListener('click', ctaHandler);
  legal_rollover.addEventListener('mouseover', legalIn);
  legal_rollover.addEventListener('mouseout', legalOut);
  plans.addEventListener('mouseover', adOver);
  plans.addEventListener('mouseout', adOut)
}

function ctaHandler() {
  Enabler.exitOverride("clickthrough", dynamicContent.Sprint_2015_HTML5_ZMOT_Dynamic_Feed__Sheet1[0].Exit_URL.Url);
}

function startAd() {
  setListeners();
  TweenMax.set(legal, {
    alpha: 0
  });
  TweenMax.defaultOverwrite = 'false';
  plans.style.visibility = 'visible';
  slideInRight(primary_copy, .1);
  var screen2 = 2.5;
  TweenMax.to(primary_copy, _time, {
    delay: screen2 + .1,
    y: "-15",
    ease: Back.easeOut
  });
  slideInRight(supporting1_copy, screen2);
  var screen3 = 5;
  slideOutDown(supporting1_copy, screen3 + .2);
  slideOutDown(primary_copy, screen3 + .4);
  var screen4 = 5.5;
  slideInRight(closing_headline, screen4);
  slideInUp(summary_copy, screen4 + .2);
  fallIn(image1, .3);
  slideInUp(urgency_message, screen4 + .5);
  TweenMax.from(cta, _time, {
    delay: screen4 + .7,
    scale: 0,
    ease: Back.easeOut
  });
  fadeIn(legal_rollover, screen4 + .7);
}
