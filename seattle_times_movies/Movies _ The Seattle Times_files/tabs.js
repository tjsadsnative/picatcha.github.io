
/*
 *
 * This controls the swapping of tabs. This is
 * a rewrite of the code supplied by Mule.
 *
 */
jQuery('document').ready(function() {
  'use strict';
  var setupTabs;
  setupTabs = function(tabSelector, wrapperSelector) {
    jQuery(tabSelector).on('click', function(e) {
      var $active, $wrapper, newTab;
      $wrapper = jQuery(this).closest(wrapperSelector);
      $active = $wrapper.find('.active');
      newTab = jQuery(this).attr('href');
      jQuery($active).removeClass('active');
      jQuery(this).addClass('active');
      jQuery(newTab).addClass('active');
      return e.preventDefault();
    });
    return jQuery(wrapperSelector + ' select').on('change', function(e) {
      return jQuery(tabSelector + '[href="' + jQuery(this).val() + '""]').on('click', function(e) {
        return e.preventDefault();
      });
    });
  };
  setupTabs('.tabs-list a', '.tabs-wrapper');
});
