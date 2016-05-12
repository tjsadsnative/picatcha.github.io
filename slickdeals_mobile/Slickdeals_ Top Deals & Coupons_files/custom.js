
/**
 * @fileoverview Custom functionality to apply throughout every adsize. This
 * has a dependency on common.js and utils.js
 */
var custom = (function() {

  /**
   * Classes which our JS hooks into. Add more class names as necessary.
   * @enum
   * @private
   */
  var elementClass_ = {
    item: 'js-item',
    itemName: 'js-item-name',
    itemPrice: 'js-item-price',
    itemSalePrice: 'js-item-saleprice',
    itemRegularPrice: 'js-item-regularprice'
  };

  var elementId_ = {
    arrowPrevious: 'arrow-left',
    arrowNext: 'arrow-right',
    headlineTxt: 'headline-txt',
    subtitleTxt: 'subtitle-txt',
    subtitleHolder: 'subtitle-holder',
    gpaDataProvider: 'gpa-data-provider',
    swipeGallery: 'swipegallery_items'
  };

  /**
   * Initialization. Called from handleAdInitialized on each page.
   */
  function init() {
    utils.log('custom.init()');
    var data = common.getAdData();
    if (!data) return;

    // shouldn't need to call resizeTextElements since GWD now supports fitting
    
    // regular method doesn't operate correctly on the transformed data
    textResizer.resizeTextElements('text-fit');

    // works with a timeout but seems unreliable
    // setTimeout(function() {
    //   textResizer.resizeTextElements('text-fit');
    // }, 100);

    // If you're using the swipe gallery to display feed items.
    initItemsUsingGallery_();

    // If you're NOT using the swipe gallery to display feed items.
    //initItemsWithoutGallery_();
  }

  /**
   * Find all items used in the swipe gallery and initialize custom behavior.
   * @private
   */
  function initItemsUsingGallery_() {
    var gallery = common.getGallery();

    // Apply settings to each item in the gallery (only if layout has a gallery; there's no gallery in 320x50)
    if (document.querySelector('#' + elementId_.swipeGallery)) {
      var items = gallery.querySelectorAll('.' + elementClass_.item);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        initItemDisplay_(item);
      }
    }
  }

  /**
   * Find all items used outside the gallery and initialize custom behavior.
   * @private
   */
  function initItemsWithoutGallery_() {
    // Apply settings to each item
    var items = document.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Set the display settings for each item.
   * Add any custom functionality you need applied on load.
   * @param {Element} item Item element.
   * @private
   */
  function initItemDisplay_(item) {

    // if you're using sales prices.
    //setSalePricesDisplay_(item);

    // Set mouseout.
    itemMouseOut(item);
  }

  function handleWebComponentReady(){
    console.log("custom handleWebComponentReady");
  }

  function handleDomContentLoaded(dynamicData){
    console.log("custom handleDomContentLoaded");
  }
  
  function transformDynamicData () {
    console.log("transformDynamicData")
    var dataProvider = document.querySelector('#' + elementId_.gpaDataProvider);
    console.log("data: " + dataProvider);
    dataProvider.addDataTransformer(function(dynamicData) {
      var data = dynamicData;
      if (data.Headline.txt) {
        console.log("there is a headline");
        var subtitleHolder = document.querySelector('#' + elementId_.subtitleHolder);
        if (data.Headline.txt.split("^")[1]) {
          console.log("has a ^ in it");
          var fullHeadline = data.Headline.txt;
          var headline1 = data.Headline.txt.split("^")[0];
          var headline2 = data.Headline.txt.split("^")[1];
          data.Headline.txt = headline1;
          data.Headline.subTitle = headline2;
        } else {
          console.log("headline text has no ^");
        }
      }
    });
  }

  /**
   * Sets the 3 price elements to display correctly when using sales price.
   * Find your price elements and set into common functionality.
   * @param {Element} item Item element.
   * @private
   */
  function setSalePricesDisplay_(item) {
    // Get reference to each price element.
    var itemPrice = item.querySelector('.' + elementClass_.itemPrice);
    var itemSalePrice = item.querySelector('.' + elementClass_.itemSalePrice);
    var itemRegularPrice = item.querySelector('.' + elementClass_.itemRegularPrice);

    // Sets each item to display correct prices.
    common.displayCorrectPrices(itemPrice, itemSalePrice, itemRegularPrice);
  }

   /**
 * Custom updates per frame shown event.
 * @param {Event event
 */
function galleryFrameShown(event) {
  var gallery = common.getGallery();
  var itemsLength = gallery.frameCount;
  var indexFirst = common.getGalleryFrameIndexFirst(event);
  var indexLast = common.getGalleryFrameIndexLast(event);
  var arrowPrevious = utils.getElement(elementId_.arrowPrevious);
  var arrowNext = utils.getElement(elementId_.arrowNext);

  if (itemsLength < 2) {
    // utils.showElement(arrowPrevious, false);
    // utils.showElement(arrowNext, false);
    arrowPrevious.style.opacity = 0;
    arrowNext.style.opacity = 0;
    return;
  }
  if (indexFirst > 0) {
    // utils.showElement(arrowPrevious, true);
    arrowPrevious.style.opacity = 0.5;
  } else {
    // utils.showElement(arrowPrevious, false);
    arrowPrevious.style.opacity = 0;
  }
  if (indexLast < itemsLength - 1) {
    // utils.showElement(arrowNext, true);
    arrowNext.style.opacity = 0.5;
  } else {
    // utils.showElement(arrowNext, false);
    arrowNext.style.opacity = 0;
  }
}

function customArrowMouseOver(target, event) {
  var gallery = common.getGallery();
  var itemsLength = gallery.frameCount;
  var indexFirst = common.getGalleryFrameIndexFirst(event);
  var indexLast = common.getGalleryFrameIndexLast(event);

  if (target.style.opacity == 0.5) {
    target.style.opacity = 1;
    return;
  }

}

function customArrowMouseOut(target, event) {
  var gallery = common.getGallery();
  var itemsLength = gallery.frameCount;
  var indexFirst = common.getGalleryFrameIndexFirst(event);
  var indexLast = common.getGalleryFrameIndexLast(event);

  if (target.style.opacity == 1) {
    target.style.opacity = 0.5;
    return;
  }
}

  /**
   * Custom Item Mouse Interactions. Add your own behavior.
   */

  /**
   * Custom Mouseover interaction functionality.
   * @param {Element} item
   */
  function itemMouseOver(item) {
 
  }

  /**
   * Custom Mouseout interaction functionality.
   * @param {Element} item
   */
  function itemMouseOut(item) {

  }

  return {
    init: init,
    itemMouseOver: itemMouseOver,
    itemMouseOut: itemMouseOut,
    galleryFrameShown: galleryFrameShown,
    customArrowMouseOver: customArrowMouseOver,
    customArrowMouseOut: customArrowMouseOut,
    handleDomContentLoaded: handleDomContentLoaded,
    handleWebComponentReady: handleWebComponentReady,
    transformDynamicData: transformDynamicData
  };

})();
