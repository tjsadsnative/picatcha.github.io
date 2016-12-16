twoOhSix.config({
  css: '.promotional-container [class*="span"],.trc_related_container [class*="span"] {position:static;}.ad.gpt {height:auto;overflow:visible;width:auto;}div.tpd-mobile,div[id^="ad-320x50-mob-"],div[id^="ad-300x250-mob-"] {display:none;}.tpd-sticky-left {left:0;position:fixed;top:80px;z-index:99;}body.single div[id^="ad-300x250"] {display:block;}body.single article div[id^="ad-300x250-b"] {float:left;line-height:250px;margin:0 20px 20px 0;width:300px;height:250px;}body.single article div[id^="ad-300x250-c"] {margin-bottom:20px;}@media screen and (max-width:1365px) {.tpd-sticky-left {display:none;}}@media screen and (max-width:768px) {div.tpd-desktop,div[id^="ad-728x90-"],div[id^="ad-300x250-"] {display:none;}div.tpd-mobile,body.single div[id^="ad-300x250-b"],body.single div[id^="ad-300x250-c"],div[id^="ad-300x250-e"],div[id^="ad-320x50-mob-"],div[id^="ad-300x250-mob-"],body.single div[id^="ad-300x250"] {display:block;}.ad-leader-insert .full-width {margin-left:0;margin-right:0;}.ad.full-width {margin-left:0;margin-right:0;}}@media screen and (max-width:480px) {body.single article div[id^="ad-300x250-b"] {float:none;margin:0 auto 20px;}.infscr-post-break {display:none;}}',
  js: '(function(){var mob320x50c = document.createElement(\'div\');mob320x50c.setAttribute(\'id\', \'ad-320x50-mob-c\');mob320x50c.setAttribute(\'class\', \'ad gpt\');document.body.appendChild(mob320x50c);var nstrack = document.createElement(\'script\');var el_nstrack = document.getElementsByTagName(\'script\')[0];nstrack.async = true;nstrack.src = \'http://track.netshelter.net/async/js/sites/technobuffalo.com-async.js\';el_nstrack.parentNode.insertBefore(nstrack, el_nstrack);if (document.body.className.indexOf(\'single\')> -1){var ad160x600b = document.createElement(\'div\');ad160x600b.setAttribute(\'class\', \'ad gpt tpd-sticky-left\');ad160x600b.setAttribute(\'id\', \'ad-160x600-b\');ad160x600b.setAttribute(\'style\', \'width:160px;height:600px;\');document.body.appendChild(ad160x600b);}window.twoOhSixPageLoad = function(){if (document.body.className.indexOf(\'single\')> -1){var ps = document.querySelectorAll(\'#main-template > .row:last-child .article-body > p\');if (ps.length > 0){var ad1 = document.createElement(\'div\');ad1.setAttribute(\'class\', \'ad gpt\');ad1.setAttribute(\'id\', \'ad-300x250-b\');ps[0].parentNode.insertBefore(ad1, ps[0]);}var sv = document.querySelectorAll(\'#main-template > .row:last-child div.sourcevia-wrapper\');if (sv.length > 0){var ad2 = document.createElement(\'div\');ad2.setAttribute(\'class\', \'ad gpt\');ad2.setAttribute(\'id\', \'ad-300x250-c\');sv[0].parentNode.insertBefore(ad2, sv[0]);}var bt = document.querySelectorAll(\'#main-template > .row:last-child #bottom_teasers\');if (bt.length > 0){var n = document.createElement(\'div\');n.setAttribute(\'id\', \'native-a\');bt[0].parentNode.insertBefore(n, bt[0]);}} else if (document.body.className.indexOf(\'home\')> -1){var posts = document.querySelectorAll(\'#post-list > article\');if (posts.length >= 1){var n = document.createElement(\'div\');n.setAttribute(\'id\', \'native-b\');posts[1].parentNode.insertBefore(n, posts[1].nextSibling);}}};window.twoOhSixPageLoad(document);}());',
  sites:
  [
    {domain: 'dev.technobuffalo.com'},
    {domain: 'staging.technobuffalo.com'}
  ],
  ga: 'UA-41929724-6',
  rf: 0,
  gpt:
  {
    slots:
    [
      {id: '/134702932/206_TB_BTF_Skyscraper', sz: [[160, 600],[300, 600], [300, 1050]], div: 'ad-160x600-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_Article_160x600', sz: [160, 600], div: 'ad-160x600-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_NS_1x1', sz: [1, 1], div: 'ad-1x1-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_Skinny', sz: [1, 1], div: 'ad-1x1-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_Primary_Box', sz: [[300, 250],[300, 600]], div: 'ad-300x250-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box', sz: [300, 250], div: 'ad-300x250-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Third_Box', sz: [300, 250], div: 'ad-300x250-c', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Fourth_Box', sz: [300, 250], div: 'ad-300x250-d', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box', sz: [300, 250], div: 'ad-300x250-e', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box', sz: [300, 250], div: 'ad-300x250-mob-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box', sz: [300, 250], div: 'ad-300x250-mob-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Fourth_Box', sz: [300, 250], div: 'ad-300x250-mob-c', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Third_Box', sz: [300, 250], div: 'ad-300x250-mob-d', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTFWebStories_BoxVertical', sz: [300, 380], div: 'ad-300x380-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_Mobile_ATF_320x50', sz: [320, 50], div: 'ad-320x50-mob-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Third_Box', sz: [300, 250], div: 'ad-320x50-mob-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_MobileTheory_320x50', sz: [320, 50], div: 'ad-320x50-mob-c', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_WideBox', sz: [600, 300], div: 'ad-600x300-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_Leaderboard', sz: [[728, 90],[970, 250]], div: 'ad-728x90-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Leaderboard', sz: [728, 90], div: 'ad-728x90-b', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_Sliver_960x66', sz: [960, 66], div: 'ad-960x66-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_ATF_Takeover', sz: [1, 1], div: 'ad-takeover-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_BTF_Skyscraper_PB_A', sz: [160, 600], div: 'pb-160x600-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Skyscraper_PB_B', sz: [160, 600], div: 'pb-160x600-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Primary_Box_PB_A', sz: [300, 250], div: 'pb-300x250-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Primary_Box_PB_B', sz: [300, 250], div: 'pb-300x250-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box_PB_A', sz: [300, 250], div: 'pb-300x250-c', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box_PB_B', sz: [300, 250], div: 'pb-300x250-d', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Third_Box_PB_A', sz: [300, 250], div: 'pb-300x250-e', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Third_Box_PB_B', sz: [300, 250], div: 'pb-300x250-f', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Fourth_Box_PB_A', sz: [300, 250], div: 'pb-300x250-g', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Fourth_Box_PB_B', sz: [300, 250], div: 'pb-300x250-h', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_ATF_300x250_PB_A', sz: [300, 250], div: 'pb-300x250-mob-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_ATF_300x250_PB_B', sz: [300, 250], div: 'pb-300x250-mob-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_BTF_300x250_PB_A', sz: [300, 250], div: 'pb-300x250-mob-c', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_BTF_300x250_PB_B', sz: [300, 250], div: 'pb-300x250-mob-d', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Primary_Box_PB_A', sz: [300, 600], div: 'pb-300x600-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Primary_Box_PB_B', sz: [300, 600], div: 'pb-300x600-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box_PB_A', sz: [300, 250], div: 'pb-300x600-c', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Second_Box_PB_B', sz: [300, 250], div: 'pb-300x600-d', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Skyscraper_PB_A', sz: [300, 600], div: 'pb-300x600-i', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Skyscraper_PB_B', sz: [300, 600], div: 'pb-300x600-j', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_ATF_320x50_PB_A', sz: [320, 50], div: 'pb-320x50-mob-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_ATF_320x50_PB_B', sz: [320, 50], div: 'pb-320x50-mob-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_BTF_320x50_PB_A', sz: [320, 50], div: 'pb-320x50-mob-c', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Mobile_BTF_320x50_PB_B', sz: [320, 50], div: 'pb-320x50-mob-d', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Leaderboard_PB_A', sz: [728, 90], div: 'pb-728x90-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Leaderboard_PB_B', sz: [728, 90], div: 'pb-728x90-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Leaderboard_PB_A', sz: [728, 90], div: 'pb-728x90-c', pb: 1, rf: 0},
      {id: '/134702932/206_TB_BTF_Leaderboard_PB_B', sz: [728, 90], div: 'pb-728x90-d', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Leaderboard_PB_A', sz: [970, 250], div: 'pb-970x250-a', pb: 1, rf: 0},
      {id: '/134702932/206_TB_ATF_Leaderboard_PB_B', sz: [970, 250], div: 'pb-970x250-b', pb: 1, rf: 0},
      {id: '/134702932/206_TB_Video', sz: [300, 250], div: 'vc-300x250-a', pb: 0, rf: 0},
      {id: '/134702932/206_TB_Video', sz: [320, 50], div: 'vc-320x50-a', pb: 0, rf: 0}
    ]
  },
  adsnative:
  {
    placements:
    [
      {id: 'rwdIft6PFKQBeDAqFaKl9meRUTkaL_fjdZTKTFDa', div: 'native-a'},
      {id: 'v9qgZdO1OYl6RIOFbkHTMTnYT3zAuDKVxsStW8VB', div: 'native-b'}
    ]
  },
  outbrain:
  {
    placements:
    [
      {
        divId: 'bottom_teasers',
        widgets:
        [
          {widgetId: 'AR_2', template: 'technobuffalo', mobile: 0},
          {widgetId: 'AR_1', template: 'technobuffalo', mobile: 0},
          {widgetId: 'MB_1', template: 'technobuffalo', mobile: 1}
        ]
      },
      {
        divId: 'contextual-b',
        widgets:
        [
          {widgetId: 'SF_1', template: 'technobuffalo', mobile: 0}
        ]
      },
      {
        divId: 'contextual-f',
        widgets:
        [
          {widgetId: 'AR_2', template: 'technobuffalo', mobile: 0},
          {widgetId: 'AR_1', template: 'technobuffalo', mobile: 0},
          {widgetId: 'MB_1', template: 'technobuffalo', mobile: 1}
        ]
      }
    ]
  },
  pricegrabber:
  {
    placements:
    [
      {mid: 36871, pid: 2715, t: '0dac818c736fdbb72a15856966839aac', div: 'recommendations-a'}
    ]
  },
  zergnet:
  {
    placements:
    [
      {id: '27630', div: 'contextual-c', inf: 0}
    ]
  }
});