(function() {
  $(function() {
    var $signupModal, clickedCloseIcon;
    $signupModal = $('.bs-email-signup');
    clickedCloseIcon = false;
    $(window).scroll(function(e) {
      var insightsSection, scrollTop;
      e.preventDefault();
      insightsSection = $('.bs-insights');
      scrollTop = $(this).scrollTop();
      if (!bsAuthenticationService.isLoggedInData.isLoggedIn) {
        if (scrollTop > (insightsSection.offset().top - 1000) && !clickedCloseIcon) {
          return $signupModal.fadeIn();
        } else {
          return $signupModal.fadeOut();
        }
      }
    });
    return $(".icon-close").click(function() {
      clickedCloseIcon = true;
      return $signupModal.fadeOut();
    });
  });

}).call(this);

//# sourceMappingURL=insights.js.map
