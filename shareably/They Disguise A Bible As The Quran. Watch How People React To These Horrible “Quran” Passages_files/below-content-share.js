jQuery(document).ready(function($) {
  insertBelowContentShare($);

  // Float source span to the right
  $('p').each(function() {
    if ($(this).html().lastIndexOf('Source') > 0) {
      $(this).css('text-align', 'right');
    }
  });
});

function insertBelowContentShare($) {
  var belowContentShareHTML = 
    '<div class="below-content-share-container">\
        <a style="cursor: pointer;" onClick="facebookShare(); showLikeModal();">\
          <div class="btn-facebook">\
            <i class="fa fa-facebook"></i>\
            SHARE ON FACEBOOK\
          </div>\
        </a>\
    </div>';

  var belowContentShare = $.parseHTML(belowContentShareHTML, null, true);
  $(belowContentShare).insertBefore('#end-of-content');
}
