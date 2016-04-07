twoOhSix.config({
css: 'div.ad.gpt {margin:0 auto;text-align:center;}div.ad.gpt[id^="ad-160x600-a"] {margin:0 auto;text-align:center;}div.ad.gpt[id^="ad-320x50-a"] {margin-bottom:20px;}div.ad.gpt[id^="ad-728x90-a"] {margin-bottom:20px;}div.tpd-mobile,div[id^="ad-320x50-"],div[id^="ad-320x50-mob-"],div[id^="ad-300x250-mob-"] {display:none;}body.home div.entries div.ad.gpt[id^="ad-300x250-mob-"] {border-bottom:1px solid #ddd;margin-bottom:30px;padding-bottom:30px;}body.single div.ad.gpt[id^="ad-300x250-mob-"] {margin-bottom:30px;}@media screen and (max-width:768px) { div.tpd-desktop,div[id^="ad-728x90-a"],div[id^="ad-300x250-"] {display:none;}div.tpd-mobile,div[id^="ad-320x50-"],div[id^="ad-320x50-mob-"],div[id^="ad-300x250-mob-"] {display:block;}div.ad.gpt[id^="ad-320x50-"],div.ad.gpt[id^="ad-320x50-mob-"],div.tpd-box[data-ad-id^="ad-320x50-"],div.tpd-box[data-ad-id^="ad-320x50-mob-"] {bottom:0;display:block;left:50%;margin-left:-160px;min-height:1px;min-width:1px;position:fixed;z-index:10000;}div.ad.gpt[id^="ad-320x50-"] a.tpd-close-btn,div.ad.gpt[id^="ad-320x50-mob-"] a.tpd-close-btn,div.tpd-box[data-ad-id^="ad-320x50-"] a.tpd-close-btn,div.tpd-box[data-ad-id^="ad-320x50-mob-"] a.tpd-close-btn {left:0;position:absolute;top:-15px;z-index:10001;}}@media screen and (max-width:360px) { div.ad.gpt[id^="ad-300x250-mob"] {margin-left:-13px;}}',
js: '(function(){var divs = [\'ad-1x1-a\', \'ad-1x1-b\', \'ad-320x50-b\'];for (var i=0; i<divs.length; i++){var div = document.createElement(\'div\');div.setAttribute(\'id\', divs[i]);div.setAttribute(\'class\', \'ad gpt\');document.body.appendChild(div);}var div320x50a = document.getElementById(\'ad-320x50-a\');if (div320x50a){div320x50a.setAttribute(\'id\', \'ad-300x250-mob-a\');}if (document.body.className.indexOf(\'home\')> -1){var posts = document.querySelectorAll(\'section.latest-posts div.entries > article\');if (posts.length > 0){for (var i=0;i<posts.length;i++){if (i === 3){var n = document.createElement(\'div\');n.setAttribute(\'id\', \'ad-native-a\');posts[i].parentNode.insertBefore(n, posts[i]);} else if (i === 6){var n = document.createElement(\'div\');n.setAttribute(\'id\', \'ad-native-c\');posts[i].parentNode.insertBefore(n, posts[i]);} else if (i === 10){var n = document.createElement(\'div\');n.setAttribute(\'class\', \'ad gpt\');n.setAttribute(\'id\', \'ad-300x250-mob-b\');posts[i].parentNode.insertBefore(n, posts[i]);break;}}var div = document.createElement(\'div\');div.setAttribute(\'class\', \'ad gpt\');div.setAttribute(\'id\', \'ad-300x250-mob-c\');posts[0].parentNode.appendChild(div);}} else if (document.body.className.indexOf(\'single\')> -1){var comments = document.getElementById(\'disqus_thread\');if (comments && typeof comments !== typeof undefined){var n = document.createElement(\'div\');n.setAttribute(\'id\', \'ad-native-d\');comments.parentNode.insertBefore(n, comments.nextSibling);}var c = document.getElementById(\'contextual-a\');if (c !== null){var native = document.createElement(\'div\');native.setAttribute(\'id\', \'ad-native-b\');c.parentNode.insertBefore(native, c);}}window.twoOhSixPageSwitch = function(html){var c = html.querySelectorAll(\'#contextual-a\');if (c && c.length > 0){twoOhSix.insertContextualAds([c[0]]);}}}());',
version: '2.1',
ga: 'UA-41929724-10',
criteo: 0,
logging: 0,
gpt:
{
  slots:
  [
    {id: '/70201765/Autofluence_BTF_Skyscraper//Halfpage', sz: [[160, 600], [300, 600], [300, 1050]], div: 'ad-160x600-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-160x600_300x600-dsk-ad-b', sz: [[160, 600], [300, 600]], div: 'ad-160x600-b_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_Takeover_a', sz: [1, 1], div: 'ad-1x1-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-1x1-dsk-ad-a', sz: [1, 1], div: 'ad-1x1-a_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_Takeover_b', sz: [1, 1], div: 'ad-1x1-b', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-1x1-dsk-ad-b', sz: [1, 1], div: 'ad-1x1-b_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_Native', sz: [1, 1], div: 'ad-1x1-native-a', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_BTF_300x250', sz: [[300, 250], [300, 600]], div: 'ad-300x250-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250_300x600_300x1050-dsk-ad-a', sz: [[300, 250], [300, 600], [300, 1050]], div: 'ad-300x250-a_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_BTF_300x250_2', sz: [300, 250], div: 'ad-300x250-b', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-ad-b', sz: [300, 250], div: 'ad-300x250-b_2', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-ad-c', sz: [300, 250], div: 'ad-300x250-c_2', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-ad-d', sz: [300, 250], div: 'ad-300x250-d_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_ATF_Mobile_300x250', sz: [300, 250], div: 'ad-300x250-mob-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-ad-a', sz: [300, 250], div: 'ad-300x250-mob-a_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_BTF_Mobile_300x250', sz: [300, 250], div: 'ad-300x250-mob-b', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-ad-b', sz: [300, 250], div: 'ad-300x250-mob-b_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_BTF_Mobile_300x250_2', sz: [300, 250], div: 'ad-300x250-mob-c', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-ad-c', sz: [300, 250], div: 'ad-300x250-mob-c_2', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-320x50-mob-ad-a', sz: [320, 50], div: 'ad-320x50-a_2', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_ATF_Mobile_320x50', sz: [320, 50], div: 'ad-320x50-b', pb: 0, rf: 0},
    {id: '/70201765/Autofluence_ATF_Leaderboard', sz: [[728, 90], [970, 90], [970, 250]], div: 'ad-728x90-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-728x90_970x90_970x250-dsk-ad-a', sz: [[728, 90], [970, 90], [970, 250]], div: 'ad-728x90-a_2', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-native-a', sz: [1, 1], div: 'ad-native-a', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-native-b', sz: [1, 1], div: 'ad-native-b', pb: 0, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-160x600_300x600-dsk-pb-b.1', sz: [[160, 600], [300, 600]], div: 'pb-160x600-b1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-160x600_300x600-dsk-pb-b.2', sz: [[160, 600], [300, 600]], div: 'pb-160x600-b2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250_300x600_300x1050-dsk-pb-a.1', sz: [[300, 250], [300, 600], [300, 1050]], div: 'pb-300x250-a1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-b.1', sz: [300, 250], div: 'pb-300x250-b1', pb: 1, rf: 0},
    {id: '/134702932/177533692', sz: [[300, 250], [300, 600], [300, 1050]], div: 'pb-300x250-b2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-b.2', sz: [300, 250], div: 'pb-300x250-b2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-c.1', sz: [300, 250], div: 'pb-300x250-c1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-c.2', sz: [300, 250], div: 'pb-300x250-c2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-d.1', sz: [300, 250], div: 'pb-300x250-d1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-dsk-pb-d.2', sz: [300, 250], div: 'pb-300x250-d2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-a.1', sz: [300, 250], div: 'pb-300x250-mob-a1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-a.2', sz: [300, 250], div: 'pb-300x250-mob-a2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-b.1', sz: [300, 250], div: 'pb-300x250-mob-b1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-b.2', sz: [300, 250], div: 'pb-300x250-mob-b2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-c.1', sz: [300, 250], div: 'pb-300x250-mob-c1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-300x250-mob-pb-c.2', sz: [300, 250], div: 'pb-300x250-mob-c2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-320x50-mob-pb-a.1', sz: [320, 50], div: 'pb-320x50-a1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-320x50-mob-pb-a.2', sz: [320, 50], div: 'pb-320x50-a2', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-728x90_970x90_970x250-dsk-pb-a.1', sz: [[728, 90], [970, 90], [970, 250]], div: 'pb-728x90-a1', pb: 1, rf: 0},
    {id: '/134702932/0005-blog.dupontregistry.com-728x90_970x90_970x250-dsk-pb-a.2', sz: [[728, 90], [970, 90], [970, 250]], div: 'pb-728x90-a2', pb: 1, rf: 0}
  ]
},
adsnative:
{
  placements:
  [
    {id: 'JB5wVSm47_l1yMPRasONMV5q1ewDtsgNImnj6h5z', div: 'ad-native-d'},
    {id: 'dbG4wYbUOXwAkgab9R4Sz5GfeHcVmXE4X8x3dbiZ', div: 'ad-native-c'}
  ]
},
adsense:
{
  channelId: '9011256416'
},
connatix:
{
  placements:
  [
    {id: '208bd818-6ffc-4e2b-94a7-322c9199a9f7', div: 'ad-native-a', wait: 0, append: 0},
    {id: 'de41e62a-ca66-4dbd-ab99-c6a12c0e1e16', div: 'ad-native-b', wait: 0, append: 0}
  ]
},
outbrain:
{
  placements:
  [
    {
      div: 'contextual-a',
      widgets:
      [
        {widgetId: 'AR_1', template: 'duPontRegistry', mobile: 0},
        {widgetId: 'AR_2', template: 'duPontRegistry', mobile: 0},
        {widgetId: 'MB_1', template: 'duPontRegistry', mobile: 1}
      ]
    }
  ]
}
});