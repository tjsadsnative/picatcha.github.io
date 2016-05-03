// BrightScope Google Analytics utility functions. These functions allow
// event context and triggering to be defined by attribute tags.

// The functions require both the Google Analytics scripts and jQuery.
// To remain compliant with XHTML we are using the namespace of bsga for
// the attributes. If we transition to HTML5 we will need to change
// these to data attributes.


(function () {
'use strict';
var bsga_ns = 'data-bsga-';
var dummy=10;

function get_bsga_attr(target, attr) {
    // get a BrightScope Google Analytics data attribute from either the
    // target, or the closest parent
    var value;
    value = $(target).attr(bsga_ns + attr);
    if (typeof value !== 'undefined') { return value; }
    return $(target).closest('[' + bsga_ns + attr + ']').attr(bsga_ns
        + attr);
}


function send_event(category, action, label, value, noninteraction) {
    if (typeof category === 'undefined') { category = 'fix-me'; }
    if (typeof action === 'undefined') { action = 'fix-me'; }
    if (typeof label === 'undefined') { label = 'fix-me'; }
    if (typeof value === 'undefined') { value = 0; }
    if (typeof noninteraction === 'undefined') { noninteraction = false; }
    _gaq.push(['_trackEvent', category, action, label, value,
        noninteraction]);
}


function bsga_click(e) {
    var category, action, label, value, noninteraction;
    category = get_bsga_attr(e.target, 'e-category');
    action = get_bsga_attr(e.target, 'e-action');
    label = get_bsga_attr(e.target, 'e-label');
    value = get_bsga_attr(e.target, 'e-value');
    noninteraction = get_bsga_attr(e.target, 'e-noninteraction');
    send_event(category, action, label, value, noninteraction);
}


function register_bsga_click(selector) {
    // register a click event to grab the respective BrightScope Google
    // Analytics data attributes
    $(selector).click(bsga_click);
}


window.bsga = send_event;


$(document).ready(function() {
    register_bsga_click('[' + bsga_ns + 'e-click]');
});


}).call(this);


/*
 */


/*
 */

(function() {
  (function(BS_AUTOCOMPLETE, $) {
    var GLOBAL_AUTOCOMPLETE_TIMESTAMP, cache_dummy, cache_length, format_search_data, format_sitewide_search_data, initialize_company_only_searchbars, initialize_company_only_searchbars_registration, initialize_plan_searchbars, initialize_rated_company_only_searchbars, only_company_names, open_autocomplete, redirect_to_page, redirect_to_plan, set_company_id, strip_em, submit_search, wrap_in_tags, wrap_json_response_for_autocompleter, wrap_json_response_for_sitewide_autocompleter, wrap_json_response_for_wc_autocompleter;
    cache_dummy = 10;
    cache_length = 8;
    wrap_json_response_for_autocompleter = function(data, additional_value_f, options) {
      $(data).each(function(i, row) {
        var additional_value;
        additional_value = "";
        if (additional_value_f) {
          additional_value = additional_value_f(row);
        }
        if (!row.data) {
          row.data = row;
        }
        if (!row.value) {
          row.value = row.data.display_values[0] + additional_value;
        }
        if (options && options.display_result_index) {
          row.result = row.data.display_values[options.display_result_index] + additional_value;
        } else {
          row.result = row.data.display_values[0];
        }
        if (row.result && options && options.formatResult) {
          row.result = options.formatResult(row.result);
        }
      });
      return data;
    };
    format_search_data = function(row, position, max, value, extra_class, onclick) {
      var row_html;
      if (typeof onclick === "function") {
        onclick = onclick(row);
      }
      row_html = "<div class=\"searchbar-row " + extra_class + "\" onclick=\"" + onclick + "\">";
      if (!row.display_values || !row.extra) {
        return row_html;
      }
      $(row.display_values).each(function(i, val) {
        if (!(i === 0 && val === "")) {
          if (extra_class === "sitewide-searchbar-dropdown client" && $.trim(val).length) {
            val += "<div class=\"brightscope-logo\"></div>";
          }
          if (!val) {
            val = "&nbsp;";
          }
          row_html += "<div class=\"searchbar-column searchbar-column-" + i.toString() + "\">" + val + "</div>";
        }
      });
      row_html += "</div>";
      return row_html;
    };
    BS_AUTOCOMPLETE.bind_autocomplete_keypress = function() {
      var $selected;
      $selected = void 0;
      $("input.autocompleting:not(.keypress-bound)").each(function(i, input) {
        $(input).addClass("keypress-bound");
        $(input).bind("keydown", function(event) {
          var row;
          if (event.keyCode === 13) {
            event.preventDefault();
            $selected = $(".ui-state-focus")[0];
            if ($selected) {
              row = $($selected).find('div.searchbar-row')[0];
              row.click();
            } else {
              submit_search($(this));
            }
          }
        });
      });
    };
    submit_search = function(clicked) {
      $(clicked).closest("form").submit();
    };
    open_autocomplete = function(input) {
      var event;
      event = jQuery.Event({
        type: "keydown"
      });
      event.keyCode = 40;
      input.focus();
      input.trigger(event);
    };
    strip_em = function(result) {
      return result.replace(/<\/?[^>]+>/g, "");
    };

    /**
     */

    /**
     */
    GLOBAL_AUTOCOMPLETE_TIMESTAMP = 0;
    wrap_json_response_for_sitewide_autocompleter = function(data, hide_extra_row) {
      var dif, options;
      if (data && data.length) {
        if (GLOBAL_AUTOCOMPLETE_TIMESTAMP > data[0].timestamp) {
          return false;
        } else {
          dif = data[0].timestamp - GLOBAL_AUTOCOMPLETE_TIMESTAMP;
        }
        if (data.length > 0) {
          GLOBAL_AUTOCOMPLETE_TIMESTAMP = data[0].timestamp;
        }
      }
      options = {
        display_result_index: 1,
        formatResult: strip_em
      };
      data = wrap_json_response_for_autocompleter(data, "", options);
      return data;
    };
    redirect_to_page = function(url) {
      document.location = url;
    };
    format_sitewide_search_data = function(row, position, max, value) {
      var onclick, rating_class;
      if (row.object_id === 0) {
        return "";
      }
      rating_class = strip_em(row.display_values[1].replace(" ", "-").replace("\"", ""));
      onclick = "";
      if (!row.extra.onclick) {
        onclick = "redirect_to_plan('" + row.extra.company_id + "','" + row.extra.company_slug + "');";
      } else {
        onclick = row.extra.onclick;
      }
      if (row.extra.special_html) {
        return row.extra.special_html;
      }
      if (row.extra.extra_class && row.extra.extra_class === 1) {
        rating_class = "client";
      }
      if (!row.extra.additional_class) {
        return format_search_data(row, position, max, value, "sitewide-searchbar-dropdown " + rating_class, onclick);
      } else {
        return format_search_data(row, position, max, value, row.extra.additional_class + " sitewide-searchbar-dropdown " + rating_class, onclick);
      }
    };
    wrap_in_tags = function(text) {
      var e;
      e = $(document.createElement("div"));
      e.html(text);
      return e;
    };

    /**
     */
    wrap_json_response_for_wc_autocompleter = function(data, hide_extra_row) {
      var extra_row, q;
      data = wrap_json_response_for_autocompleter(data);
      if (!hide_extra_row && data.length > 9) {
        q = data[0].data.extra.q.toLowerCase();
        extra_row = {
          data: {
            display_values: ["<span class=\"link-div\">Show all results for \"" + q + "\"</span>", "", ""],
            extra: {
              onclick: "document.location='/ratings/';"
            }
          },
          value: "",
          result: ""
        };
        data.push(extra_row);
      }
      return data;
    };
    redirect_to_plan = function(company_id, company_slug) {
      var url;
      url = "/401k-rating/" + company_id.toString() + "/" + company_slug + "/";
      document.location = url;
    };
    initialize_plan_searchbars = function(passed_options) {
      var extra_selector, options;
      options = {
        formatItem: only_company_names,
        extraParams: {},
        dataType: "json",
        resultsClass: "ac_results company-only-searchbar",
        selectFirst: false,
        parse: wrap_json_response_for_autocompleter,
        width: "400px",
        scrollHeight: "none",
        max: 11,
        cacheLength: cache_length,
        matchSubset: false
      };
      if (passed_options) {
        options = $.extend(options, passed_options);
      }
      extra_selector = (passed_options && passed_options.extra_selector) || "";
      BS_AUTOCOMPLETE.bind_autocomplete_keypress();
      $(extra_selector + ".plan-searchbar-input").autocomplete("/ajax/do-autocomplete-search/", options);
    };
    set_company_id = function(row) {
      return "$('#id_company_id').val('" + row.extra.company_id + "');";
    };
    only_company_names = function(row, position, max, value) {
      return format_search_data(row, position, max, value, "plan-searchbar", set_company_id);
    };
    initialize_company_only_searchbars_registration = function(passed_options) {
      var options;
      $(".company-only-searchbar-input-registration").removeClass("keypress-bound").unautocomplete();
      options = {
        extra_selector: ".company-only-searchbar-input-registration",
        parse: wrap_json_response_for_plan_autocompleter_companies_only
      };
      if (passed_options) {
        $.extend(options, passed_options);
      }
      initialize_plan_searchbars(options);
    };
    initialize_company_only_searchbars = function(passed_options) {
      var options;
      $(".company-only-searchbar-input.plan-searchbar-input").removeClass("keypress-bound").unautocomplete();
      options = {
        extra_selector: ".company-only-searchbar-input",
        parse: wrap_json_response_for_autocompleter_partial
      };
      if (passed_options) {
        $.extend(options, passed_options);
      }
      initialize_plan_searchbars(options);
    };
    initialize_rated_company_only_searchbars = function(passed_options) {
      var options;
      options = {
        extraParams: {
          rated: "True"
        }
      };
      if (passed_options) {
        $.extend(options, passed_options);
      }
      initialize_company_only_searchbars(options);
    };
    window.redirect_to_company = function(company_id, company_slug) {
      var url;
      url = "/401k-rating/" + company_id.toString() + "/" + company_slug + "/";
      document.location = url;
    };
    window.redirect_to_firm = function(firm_id, firm_slug) {
      var url;
      url = "/financial-planning/firm/" + firm_id.toString() + "/" + firm_slug + "/";
      document.location = url;
    };
    window.redirect_to_advisor = function(advisor_id, advisor_slug) {
      var url;
      url = "/financial-planning/advisor/" + advisor_id.toString() + "/" + advisor_slug + "/";
      document.location = url;
    };
    window.redirect_to_question = function(question_id) {
      var url;
      url = "/financial-planning/advice/question/" + question_id;
      document.location = url;
    };
    window.redirect_to_fundfamily = function(fundfamily_id) {
      var url;
      url = "/fund-pages/fundfamily/" + fundfamily_id + "/";
      document.location = url;
    };
    window.redirect_to_fund = function(fund_id) {
      var url;
      if (window.FUNDPAGES && window.FUNDPAGES.initialState) {
        url = "/fund-pages/fund/" + fund_id + "/#/" + window.FUNDPAGES.initialState;
      } else {
        url = "/fund-pages/fund/" + fund_id + "/";
      }
      document.location = url;
    };
    window.redirect_to_shareclass = function(shareclass_id) {
      var url;
      if (window.FUNDPAGES && window.FUNDPAGES.initialState) {
        url = "/fund-pages/shareclass/" + shareclass_id + "/#/" + window.FUNDPAGES.initialState;
      } else {
        url = "/fund-pages/shareclass/" + shareclass_id;
      }
      document.location = url;
    };
    window.redirect_to_targetdateseries = function(tds_id) {
      var url;
      if (window.FUNDPAGES && window.FUNDPAGES.initialState) {
        url = "/fund-pages/target-date-series/" + tds_id + "/#/" + window.FUNDPAGES.initialState;
      } else {
        url = "/fund-pages/target-date-series/" + tds_id + "/";
      }
      document.location = url;
    };
    BS_AUTOCOMPLETE.initialize_whack_text = function() {
      $("input.unedited,textarea.unedited").attr("alt", function() {
        return $(this).val();
      }).bind("focus", function(evt) {
        if ($(this).hasClass("unedited")) {
          $(this).val("").removeClass("unedited").addClass("edited");
        }
      }).bind("blur", function(evt) {
        if ($(this).val().length === 0) {
          $(this).val(this.alt).removeClass("edited").addClass("unedited");
        }
      });
    };
    BS_AUTOCOMPLETE.sitewide_search_option = function(searchType) {
      var options;
      options = {
        extraParams: {},
        dataType: "json",
        delay: 100,
        test: "/autocomplete/search-box/" + searchType + "/",
        source: function(request, response) {
          return $.ajax({
            url: "/autocomplete/search-box/" + searchType + "/",
            dataType: "json",
            data: {
              q: request.term,
              limit: 10,
              timestamp: Date.now()
            },
            success: function(data) {
              var d, j, len, r, x, y;
              data = wrap_json_response_for_sitewide_autocompleter(data);
              r = [];
              for (j = 0, len = data.length; j < len; j++) {
                d = data[j];
                x = format_sitewide_search_data(d, "", "");
                y = {
                  label: d.result,
                  data: wrap_in_tags(x),
                  value: d.result
                };
                if (x && y.value) {
                  r.push(y);
                }
              }
              response(r);
            }
          });
        },
        open: function(event, ui) {
          $('.ui-autocomplete').off('menufocus hover mouseover mouseenter');
          return $(".ui-autocomplete:visible").css({
            top: "+=2"
          });
        },
        max: 15
      };
      return options;
    };
    BS_AUTOCOMPLETE.init_bs_autocomplete = function(searchType, location, globalAutoComplete) {
      var error, l, t;
      BS_AUTOCOMPLETE.initialize_whack_text();
      BS_AUTOCOMPLETE.bind_autocomplete_keypress();
      l = location;
      t = searchType;
      try {
        return $("." + t + l + ".autocomplete").autocomplete(BS_AUTOCOMPLETE.sitewide_search_option(t)).autocomplete("instance")._renderItem = function(ul, item) {
          if ($(this.element[0]).hasClass('global-search')) {
            $(ul).addClass("global-search-dropdown");
            $(ul).appendTo('.nav-search-inner');
          }
          return $("<li>").append(item.data).appendTo(ul);
        };
      } catch (_error) {
        error = _error;
      }
    };
  })(window.BS_AUTOCOMPLETE = window.BS_AUTOCOMPLETE || {}, jQuery);

}).call(this);

//# sourceMappingURL=autocomplete.js.map

(function() {
  $(function() {
    var error_msg, success_msg;
    $.cookie('name', 'value');
    success_msg = $.cookie('success_msg');
    error_msg = $.cookie('error_msg');
    if (success_msg && success_msg !== "-") {
      $('.flash-messages .message').text(success_msg);
      $('.flash-messages').animate({
        top: '0'
      }, 1000);
      setTimeout(function() {
        $('.flash-messages').animate({
          top: '-70'
        }, 1000);
        return $.removeCookie('success_msg', {
          path: '/'
        });
      }, 5000);
    }
    if (error_msg) {
      $('.flash-messages .message').text(error_msg);
      $('.flash-messages').animate({
        top: '0'
      }, 1000);
      return setTimeout(function() {
        $('.flash-messages').animate({
          top: '-70'
        }, 1000);
        return $.removeCookie('error_msg', {
          path: '/'
        });
      }, 5000);
    }
  });

}).call(this);

//# sourceMappingURL=messaging.js.map

(function() {
  var sendToGA, setLoggedinMenu;

  sendToGA = function(mResp) {
    if (mResp.user_type_description) {
      _gaq.push(['_setCustomVar', 1, 'User Type', "" + mResp.user_type_description, 2]);
    }
    if (mResp.email) {
      return _gaq.push(['_setCustomVar', 2, 'User Email', "" + mResp.email, 2]);
    }
  };

  setLoggedinMenu = function(resp) {
    var li, loggedin_menu, menu_entries;
    $(".anonymous-nav-option.login").hide();
    $(".anonymous-nav-option.signup").hide();
    loggedin_menu = $(".loggedin-menu")[0];
    loggedin_menu.innerHTML = "<h5 class=\"capitalize\">" + (encodeURI(resp.first_name)) + "</h5><ul class='menu-wrap-list with-border'></ul>";
    menu_entries = loggedin_menu.children[1];
    if (resp.advisor) {
      li = document.createElement('li');
      li.innerHTML = "<a href='" + resp.advisor_paths.dashboard + "'>Dashboard</a>";
      menu_entries.appendChild(li);
    }
    li = document.createElement('li');
    li.innerHTML = "<a href='/settings'>Account Settings</a>";
    menu_entries.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = "<a href='" + BS_NAVIGATION.logout + "'>Log Out</a>";
    return menu_entries.appendChild(li);
  };

  BS_NAVIGATION.login_colorbox = function(current) {
    document.location = "/login/?next=" + escape(current);
    return false;
  };

  BS_NAVIGATION.bsIsLoggedIn = function(true_f, false_f) {
    jQuery.getJSON('/isloggedin/', {
      donotcache: '' + Math.random()
    }, function(data) {
      if (data.success) {
        return true_f(data);
      } else {
        return false_f(data);
      }
    });
    return false;
  };

  BS_NAVIGATION.login_colorbox = function(current) {
    document.location = "/login/?next=" + escape(current);
    return false;
  };

  $(BS_NAVIGATION).on('session_retrieved', function(e, mResp) {
    sendToGA(mResp);
    return setLoggedinMenu(mResp);
  });

  $(function() {
    var hideMenu;
    $(".dropdown").click(function() {
      return $(this).toggleClass("open");
    });
    $("html").on("touchstart mousedown", function() {
      return hideMenu();
    });
    $(".header-search-icon").click(function(e) {
      $('#navigation-search-overlay').fadeIn(300);
      $(this).fadeOut(300);
      $('.nav-search-container').addClass('show');
      return $('#funds-all-search').focus();
    });
    $("#global_search_close").click(function(e) {
      $('#navigation-search-overlay').fadeOut(300);
      $('.nav-search-container').removeClass('show');
      $('#fundsponsor-search').val("");
      return $(".header-search-icon").fadeIn(300);
    });
    hideMenu = function() {
      if ($(".menu-wrap").is(":visible")) {
        $(".overlay").hide();
        return $(".menu-wrap").removeClass('open');
      }
    };
    $(".menu-wrap").on("touchstart mousedown", function(e) {
      return e.stopPropagation();
    });
    $(".show-menu").on("touchstart mousedown", function(e) {
      e.preventDefault();
      $(".overlay").toggle();
      $(".menu-wrap").toggleClass('open');
      return e.stopPropagation();
    });
    return $(".close-menu").click(function(e) {
      e.preventDefault();
      $(".overlay").hide();
      return $(".menu-wrap").removeClass('open');
    });
  });

  window.notificationCount = {
    values: {},
    render: function() {
      var id, notificationElement, ref, totalNotificationElement, totalNotifications, value;
      totalNotifications = 0;
      ref = this.values;
      for (id in ref) {
        value = ref[id];
        notificationElement = $("\#" + id);
        totalNotifications += value;
        if (value) {
          notificationElement.show();
        } else {
          notificationElement.hide();
        }
        notificationElement.text(value);
      }
      totalNotificationElement = $("#total_notification_count");
      if (totalNotifications) {
        totalNotificationElement.show();
      } else {
        totalNotificationElement.hide();
      }
      return totalNotificationElement.text(totalNotifications);
    },
    set: function(id, count) {
      this.values[id] = count;
      return this.render();
    }
  };

}).call(this);

//# sourceMappingURL=navigation.js.map

(function() {
  angular.module('bs.getCookie', []).factory("getCookie", function() {
    return function(name) {
      var cookie, cookieValue, cookies, i, len;
      cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        cookies = document.cookie.split(";");
        for (i = 0, len = cookies.length; i < len; i++) {
          cookie = cookies[i];
          cookie = jQuery.trim(cookie);
          if (cookie.substring(0, name.length + 1) === (name + "=")) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    };
  });

}).call(this);

//# sourceMappingURL=getCookie.js.map

(function() {
  angular.module("bs.registration.lite", ["ui.bootstrap", "bs.getCookie", "bs.constants", "bs-registration-templates"]).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol("[[");
    $interpolateProvider.endSymbol("]]");
  }).run([
    '$http', 'getCookie', 'AUTH_API', function($http, getCookie, AUTH_API) {
      if (!getCookie('csrftoken')) {
        return $http.get(AUTH_API.SECURITY_TOKEN).then(function(response) {
          return $http.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');
        });
      } else {
        return $http.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');
      }
    }
  ]).value("track", bsga);

  angular.module('bs.registration.lite').controller('RegistrationModalController', function($scope, $modalInstance, $window, registrationModal, user, track) {
    $scope.templateContent = '/jade/bs_registration/signup.jade';
    $scope.errors = [];
    if ($window.location.protocol === 'https:') {
      $scope.secure = true;
    } else {
      $scope.secure = false;
      $scope.nextPath = $window.location.pathname;
    }
    $scope.tryDifferentEmail = function() {
      $scope.errors = [];
      return $scope.templateContent = '/jade/bs_registration/signup.jade';
    };
    $scope.logIn = function() {
      $scope.errors = [];
      return $scope.templateContent = '/jade/bs_registration/log_in.jade';
    };
    $scope.forgotPassword = function() {
      $scope.errors = [];
      return $scope.templateContent = '/jade/bs_registration/forgot_password.jade';
    };
    $scope.signUp = function() {
      $scope.errors = [];
      return $scope.templateContent = '/jade/bs_registration/signup.jade';
    };
    $scope.registerAdvisor = function(user, registrationForm) {
      var data;
      if (!registrationForm.$valid) {
        return;
      }
      data = $scope.userData;
      data.first_name = AdvisorRegistrationForm.first_name.value;
      data.last_name = AdvisorRegistrationForm.last_name.value;
      data.phone = AdvisorRegistrationForm.phone.value;
      $scope.errors = [];
      $scope.loading = true;
      return registrationModal.registerUser(data).then(function(response) {
        return $scope.templateContent = '/jade/bs_registration/email_verification.jade';
      }, function(response) {
        var error, errors, k, results, v;
        errors = response.data.errors;
        track("Registration", "Sign Up Error - Modal - Advisor", $scope.userData.email);
        results = [];
        for (k in errors) {
          v = errors[k];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = v.length; i < len; i++) {
              error = v[i];
              results1.push($scope.errors.push(error));
            }
            return results1;
          })());
        }
        return results;
      })["finally"](function() {
        return $scope.loading = false;
      });
    };
    $scope.logInUser = function() {
      var data;
      data = {};
      data.email = LoginForm.email.value;
      data.password = LoginForm.password.value;
      $scope.errors = [];
      $scope.loading = true;
      return registrationModal.logInUser(data).then(function(response) {
        user.getAuthStatus();
        return $modalInstance.dismiss();
      }, function(response) {
        var error, errors, k, results, v;
        errors = response.data.errors;
        results = [];
        for (k in errors) {
          v = errors[k];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = v.length; i < len; i++) {
              error = v[i];
              results1.push($scope.errors.push(error));
            }
            return results1;
          })());
        }
        return results;
      })["finally"](function() {
        return $scope.loading = false;
      });
    };
    $scope.resetPassword = function() {
      var data;
      data = {};
      data.email = ForgotPasswordForm.email.value;
      data.nextPath = $window.location.pathname;
      $scope.loading = true;
      $scope.errors = [];
      $scope.email = data.email;
      return registrationModal.resetPassword(data).then(function(response) {
        return $scope.templateContent = '/jade/bs_registration/forgot_password_confirm.jade';
      }, function(response) {
        var error, errors, k, results, v;
        errors = response.data.errors;
        results = [];
        for (k in errors) {
          v = errors[k];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = v.length; i < len; i++) {
              error = v[i];
              results1.push($scope.errors.push(error));
            }
            return results1;
          })());
        }
        return results;
      })["finally"](function() {
        return $scope.loading = false;
      });
    };
    return $scope.registerUser = function(user, registrationForm) {
      var data;
      if (!registrationForm.$valid) {
        return;
      }
      data = {};
      data.user_type = user.user_type;
      data.email = user.email;
      data.nextPath = $window.location.pathname;
      $scope.email = data.email;
      $scope.userData = data;
      $scope.loading = true;
      $scope.errors = [];
      if (data.user_type === "3" || data.user_type === "11") {
        $scope.loading = false;
        return $scope.templateContent = '/jade/bs_registration/advisor_signup.jade';
      } else {
        return registrationModal.registerUser(data).then(function(response) {
          return $scope.templateContent = '/jade/bs_registration/email_verification.jade';
        }, function(response) {
          var error, errors, k, results, v;
          errors = response.data.errors;
          track("Registration", "Sign Up Error - Modal - Non-advisor", $scope.userData.email);
          results = [];
          for (k in errors) {
            v = errors[k];
            results.push((function() {
              var i, len, results1;
              results1 = [];
              for (i = 0, len = v.length; i < len; i++) {
                error = v[i];
                results1.push($scope.errors.push(error));
              }
              return results1;
            })());
          }
          return results;
        })["finally"](function() {
          return $scope.loading = false;
        });
      }
    };
  });

  angular.module('bs.registration.lite').controller('UnverifiedModalController', function($scope, $modalInstance, $window, emailAddress, registrationModal) {
    var data;
    $scope.email = emailAddress;
    data = {};
    data.email = emailAddress;
    data.nextPath = $window.location.pathname;
    $scope.errors = [];
    return registrationModal.resendEmail(data).then(function(response) {}, function(response) {
      var error, errors, k, results, v;
      errors = response.data.errors;
      results = [];
      for (k in errors) {
        v = errors[k];
        results.push((function() {
          var i, len, results1;
          results1 = [];
          for (i = 0, len = v.length; i < len; i++) {
            error = v[i];
            results1.push($scope.errors.push(error));
          }
          return results1;
        })());
      }
      return results;
    });
  });

  angular.module("bs.registration.lite").service('registrationModal', function($modal, $http, APP_SECURE_URL, REGISTRATION_API) {
    var logInUser, registerUser, resendEmail, resetPassword, showModal, showUnverifiedModal;
    showModal = function() {
      return $modal.open({
        templateUrl: '/jade/bs_registration/modal_wrapper.jade',
        controller: 'RegistrationModalController',
        windowClass: 'fp-modal fp-modal-information small fp-modal-registration',
        backdrop: 'static',
        keyboard: false
      });
    };
    showUnverifiedModal = function(email) {
      return $modal.open({
        templateUrl: '/jade/bs_registration/email_unverified.jade',
        controller: 'UnverifiedModalController',
        windowClass: 'fp-modal fp-modal-information small fp-modal-registration',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          emailAddress: function() {
            return email;
          }
        }
      });
    };
    resendEmail = function(data) {
      return $http({
        method: 'POST',
        url: "" + REGISTRATION_API.VERIFY_EMAIL,
        data: data
      });
    };
    registerUser = function(data) {
      return $http({
        method: 'POST',
        url: "" + REGISTRATION_API.REGISTER,
        data: data
      });
    };
    logInUser = function(data) {
      return $http({
        method: 'POST',
        url: "" + APP_SECURE_URL + REGISTRATION_API.LOGIN,
        data: data
      });
    };
    resetPassword = function(data) {
      return $http({
        method: 'POST',
        url: "" + REGISTRATION_API.RESET_PASSWORD,
        data: data
      });
    };
    return {
      showModal: showModal,
      resendEmail: resendEmail,
      showUnverifiedModal: showUnverifiedModal,
      registerUser: registerUser,
      logInUser: logInUser,
      resetPassword: resetPassword
    };
  });

}).call(this);

//# sourceMappingURL=bs_registration.js.map

(function() {
  angular.module("bs.authentication", ["bs.registration.lite", "bs.constants"]).value("track", bsga);

  angular.module("bs.authentication").service('user', function($http, $location, $window, registrationModal, restrictedPaths, AUTH_API, $rootScope, track) {
    var getAuthStatus, getRestrictedPageViewCount, getSessionData, isLoggedInData, sessionData, showModalOnRestrictedPageViews, updateRestrictedPageViewCount;
    $window.rootScopes = $window.rootScopes || [];
    $window.rootScopes.push($rootScope);
    if (!!$window.bsAuthenticationService) {
      return $window.bsAuthenticationService;
    }
    sessionData = {
      isAdvisor: null,
      advisorId: null,
      loaded: false
    };
    isLoggedInData = {
      isLoggedIn: null,
      loaded: false
    };
    showModalOnRestrictedPageViews = function() {
      var pageViews;
      if (restrictedPaths.isRestrictedPath(window.location.pathname)) {
        pageViews = getRestrictedPageViewCount();
        if (pageViews >= 5) {
          track("Registration", "5 page limit", window.location.pathname);
          registrationModal.showModal();
        }
      }
    };
    updateRestrictedPageViewCount = function() {
      var bsPageviews, bs_pageviews, currentPageViews, error, totalPageViews;
      if (restrictedPaths.isRestrictedPath(window.location.pathname)) {
        try {
          bs_pageviews = localStorage.getItem('bs_pageviews');
          currentPageViews = 0;
          if (!bs_pageviews) {
            totalPageViews = {};
            currentPageViews = 1;
            totalPageViews[moment().format('L')] = currentPageViews;
            localStorage.setItem('bs_pageviews', JSON.stringify(totalPageViews));
          } else {
            try {
              bsPageviews = JSON.parse(bs_pageviews);
              if (bsPageviews[moment().format('L')]) {
                currentPageViews = bsPageviews[moment().format('L')];
              }
            } catch (_error) {
              error = _error;
              localStorage.removeItem('bs_pageviews');
            }
            currentPageViews = Number(currentPageViews) + 1;
            totalPageViews = {};
            totalPageViews[moment().format('L')] = currentPageViews;
            localStorage.setItem('bs_pageviews', JSON.stringify(totalPageViews));
          }
          return totalPageViews;
        } catch (_error) {
          error = _error;
          return track("Registration", "Local storage error", window.location.pathname);
        }
      }
    };
    getRestrictedPageViewCount = function() {
      var bsPageviews, bs_pageviews, error;
      try {
        bs_pageviews = localStorage.getItem('bs_pageviews');
        bsPageviews = JSON.parse(bs_pageviews);
        if (bsPageviews[moment().format('L')]) {
          return bsPageviews[moment().format('L')];
        } else {
          return 0;
        }
      } catch (_error) {
        error = _error;
        return 0;
      }
    };
    getSessionData = function() {
      return $http.get(AUTH_API.SESSION).then(function(response) {
        var data;
        sessionData.loaded = true;
        data = response.data;
        if (!data.email_verified) {
          if (restrictedPaths.isRestrictedPath(window.location.pathname)) {
            registrationModal.showUnverifiedModal(data.email);
          }
        }
        if (data.advisor) {
          sessionData.isAdvisor = true;
          sessionData.advisorId = data.advisor;
          if (!$window.adsAllowed) {
            track("Sitewide", "Ad Blocker Detected", "advisor");
          }
        } else {
          sessionData.isAdvisor = false;
          if (!$window.adsAllowed) {
            track("Sitewide", "Ad Blocker Detected", "non-advisor");
          }
        }
        $rootScope.$broadcast('session_retrieved', [data]);
        $(BS_NAVIGATION).trigger('session_retrieved', [data]);
      });
    };
    getAuthStatus = function() {
      return $http.get(AUTH_API.IS_LOGGED_IN).then(function(response) {
        var data;
        data = response.data;
        isLoggedInData.loaded = true;
        if (data.success) {
          isLoggedInData.isLoggedIn = true;
          return getSessionData();
        } else {
          isLoggedInData.isLoggedIn = false;
          if (!$window.adsAllowed) {
            track("Sitewide", "Ad Blocker Detected", "anonymous");
          }
          updateRestrictedPageViewCount();
          showModalOnRestrictedPageViews();
          return _gaq.push(['_setCustomVar', 1, 'User Type', 'Anonymous User', 2]);
        }
      });
    };
    $window.bsAuthenticationService = {
      getAuthStatus: getAuthStatus,
      sessionData: sessionData,
      isLoggedInData: isLoggedInData
    };
    return $window.bsAuthenticationService;
  });

  angular.module("bs.authentication").service('restrictedPaths', function() {
    var allowedPaths, isRestrictedPath, restrictedPaths;
    restrictedPaths = ['/fund-pages/fundfamily', '/fund-pages/fund', '/fund-pages/shareclass', '/financial-planning/advisor', '/financial-planning/firm/', '/401k-rating', '/form-5500'];
    allowedPaths = ["/financial-planning/advisor/signup", "/financial-planning/advisor/dashboard", "/financial-planning/advisor/prospects", "/financial-planning/advisor/contact", '/financial-planning/firm/edit'];
    isRestrictedPath = function(urlPath) {
      var allowedPath, i, j, len, len1, path;
      for (i = 0, len = allowedPaths.length; i < len; i++) {
        allowedPath = allowedPaths[i];
        if (urlPath.indexOf(allowedPath) > -1) {
          return false;
        }
      }
      for (j = 0, len1 = restrictedPaths.length; j < len1; j++) {
        path = restrictedPaths[j];
        if (urlPath.indexOf(path) > -1) {
          return true;
        }
      }
      return false;
    };
    return {
      isRestrictedPath: isRestrictedPath
    };
  });

}).call(this);

//# sourceMappingURL=bs_authentication.js.map

(function() {
  angular.element(document).ready(function() {
    return angular.bootstrap(document.getElementById("bs_navigation_app"), ['bs.navigation']);
  });

  angular.module("bs.navigation", ["bs.authentication"]).run(function(user) {
    return user.getAuthStatus();
  });

  angular.module("bs.subnavigation", []).directive('fixedNavigation', function($window) {
    return function(scope, element, attrs) {
      var el;
      el = element;
      angular.element($window).bind('scroll', function(event) {
        if (this.pageYOffset > 150 && !$(".menu-wrap").hasClass('open')) {
          el.find('.hero-nav').addClass("is-hidden");
          return el.find('.fixed').addClass("is-visible");
        } else {
          el.find('.hero-nav').removeClass("is-hidden");
          return el.find('.fixed').removeClass("is-visible");
        }
      });
    };
  });

  angular.module('bs.subnavigation').controller('APMobileAccordionController', [
    '$scope', '$anchorScroll', '$timeout', '$window', function($scope, $anchorScroll, $timeout, $window) {
      var firstSection, intialWindowWidth;
      $scope.scrollDefaultOffset = 150;
      $scope.accordionObject = {
        profile: true,
        assets: true,
        flows: true,
        fees: true,
        holdings: true,
        managment: true,
        retirement: true,
        performance: true,
        management: true,
        funds: true,
        holders: true,
        overview: true,
        services: true,
        qualifications: true,
        articles: true,
        licenses: true,
        advisors: true,
        affiliates: true,
        leadership: true,
        plan_components: true,
        investments: true,
        articles_n_questions: true
      };
      $scope.accordionServices = {
        portfilio: true
      };
      intialWindowWidth = $window.innerWidth;
      $scope.closeAccordion = function() {
        var property, results, results1;
        if (window.innerWidth < 769) {
          results = [];
          for (property in $scope.accordionObject) {
            results.push($scope.accordionObject[property] = false);
          }
          return results;
        } else {
          results1 = [];
          for (property in $scope.accordionObject) {
            results1.push($scope.accordionObject[property] = true);
          }
          return results1;
        }
      };
      $scope.closeAccordion();
      if (intialWindowWidth <= 768) {
        firstSection = $('.fp-section')[0];
        $scope.accordionObject[firstSection] = true;
      }
      $scope.toggleAccordion = function(accordionEntry) {
        if ($window.innerWidth < 769) {
          $scope.accordionObject[accordionEntry] = !$scope.accordionObject[accordionEntry];
          $timeout(function() {
            return $scope.$broadcast('highchartsng.reflow');
          }, 10);
        }
        return setTimeout((function() {
          return google.maps.event.trigger($("#map_canvas")[0], 'resize');
        }), 100);
      };
      $scope.goTop = function() {
        return $anchorScroll('top');
      };
      return angular.element(window).bind('resize', function() {
        var property;
        if (intialWindowWidth < 769) {
          if (window.innerWidth >= 769) {
            for (property in $scope.accordionObject) {
              $scope.accordionObject[property] = true;
            }
            return $scope.$apply();
          }
        }
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=bs_navigation.js.map

angular.module('bs-registration-templates', ['/jade/bs_registration/advisor_signup.jade', '/jade/bs_registration/email_unverified.jade', '/jade/bs_registration/email_verification.jade', '/jade/bs_registration/forgot_password.jade', '/jade/bs_registration/forgot_password_confirm.jade', '/jade/bs_registration/log_in.jade', '/jade/bs_registration/modal_wrapper.jade', '/jade/bs_registration/signup.jade']);

angular.module("/jade/bs_registration/advisor_signup.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/advisor_signup.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">Enter your name and phone</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"sub-content registration-sub-content\">\n" +
    "    <form name=\"AdvisorRegistrationForm\" ng-submit=\"submitted = true; registerAdvisor(user, AdvisorRegistrationForm)\" novalidate=\"novalidate\" class=\"main-registration-form\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" name=\"first_name\" ng-model=\"user.first_name\" ng-model-options=\"{ debounce: 1000 }\" placeholder=\"First Name\" required=\"required\" class=\"form-control input-single-line required-input\"/>\n" +
    "        <div ng-show=\"submitted &amp;&amp; AdvisorRegistrationForm.first_name.$invalid\" class=\"form-error form-error-modal\">First name is required</div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" name=\"last_name\" ng-model=\"user.last_name\" ng-model-options=\"{ debounce: 1000 }\" placeholder=\"Last Name\" required=\"required\" class=\"form-control input-single-line required-input\"/>\n" +
    "        <div ng-show=\"submitted &amp;&amp; AdvisorRegistrationForm.last_name.$invalid\" class=\"form-error form-error-modal\">Last name is required</div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" name=\"phone\" ng-model=\"user.phone\" ng-model-options=\"{ debounce: 1000 }\" placeholder=\"Phone\" required=\"required\" class=\"form-control input-single-line required-input\"/>\n" +
    "        <div ng-show=\"submitted &amp;&amp; AdvisorRegistrationForm.phone.$invalid\" class=\"form-error form-error-modal\">Phone number is required</div>\n" +
    "      </div>\n" +
    "      <div ng-show=\"loading\" class=\"animation-image bar-animation margin-auto\"></div>\n" +
    "      <div ng-show=\"errors.length &gt; 0\" class=\"error margin-auto\">\n" +
    "        <div ng-repeat=\"error in errors\">\n" +
    "          <div class=\"form-error subtext error-subtext\">[[error]]</div>\n" +
    "        </div><a ng-click=\"signUp()\">Go back to update your email address</a><span> or</span><a ng-click=\"logIn()\">&nbsp;Log in Here</a>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"submit\" value=\"Complete Sign Up\" class=\"btn btn-extra-padding btn-primary action-button-small complete-sign-up\"/>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/email_unverified.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/email_unverified.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">We're glad you're enjoying the site</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h3>Please verify your email to continue browsing and help us improve your BrightScope experience.</h3>\n" +
    "  <h3>A verification link was sent to:</h3>\n" +
    "  <h3 class=\"margin-auto extra-spacing\">[[email]]</h3><a href=\"/settings\" class=\"btn\">Update my email address</a>\n" +
    "  <div class=\"sub-text need-assistance\">Need Assistance?<a href=\"mailto:support@brightscope.com\"> Contact BrightScope</a></div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/email_verification.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/email_verification.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">You're all set! Check your email.</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h3>A verification link was sent to:</h3>\n" +
    "  <h3 class=\"margin-auto extra-spacing\">[[email]]</h3>\n" +
    "  <button ng-click=\"tryDifferentEmail()\">Try a different email</button>\n" +
    "  <div class=\"sub-text need-assistance\">Need Assistance?<a href=\"mailto:support@brightscope.com\"> Contact BrightScope</a></div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/forgot_password.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/forgot_password.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">Reset your password</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h3 class=\"extra-spacing\">Enter your email address to reset your password</h3>\n" +
    "  <div class=\"sub-content registration-sub-content\">\n" +
    "    <form ng-submit=\"resetPassword()\" name=\"ForgotPasswordForm\" class=\"main-registration-form\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"Email address\" required=\"required\" class=\"form-control input-single-line\"/><i ng-show=\"ForgotPasswordForm.email.$valid\" class=\"icon-check-hollow ng-hide\"></i>\n" +
    "      </div>\n" +
    "      <div ng-show=\"errors\" class=\"error margin-auto\">\n" +
    "        <div ng-repeat=\"error in errors\">\n" +
    "          <div class=\"form-error subtext error-subtext\">[[error]]</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <input type=\"submit\" value=\"Submit\" class=\"btn-extra-padding btn-primary action-button-small\"/>\n" +
    "      <div class=\"form-group extra-spacing-top\">\n" +
    "        <div class=\"sub-text\"><a ng-click=\"logIn()\">&nbsp;Log in Here</a></div>\n" +
    "        <div class=\"sub-text need-assistance\">Need Assistance?<a href=\"mailto:support@brightscope.com\"> Contact BrightScope</a></div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/forgot_password_confirm.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/forgot_password_confirm.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">You're all set! Check your email.</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h3>Password reset request received. If the email address exists in our database, you'll receive password reset instructions momentarily.</h3>\n" +
    "  <h3 class=\"margin-auto extra-spacing\">[[email]]</h3>\n" +
    "  <div class=\"sub-text need-assistance\">Need Assistance?<a href=\"mailto:support@brightscope.com\"> Contact BrightScope</a></div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/log_in.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/log_in.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">BrightScope Log In</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"sub-content registration-sub-content\">\n" +
    "    <form ng-submit=\"logInUser()\" name=\"LoginForm\" class=\"main-registration-form\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"Email address\" required=\"required\" class=\"form-control input-single-line\"/><i ng-show=\"LoginForm.email.$valid\" class=\"icon-check-hollow ng-hide\"></i>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"password\" name=\"password\" ng-model=\"user.password\" placeholder=\"Password\" required=\"required\" class=\"form-control input-single-line\"/><i ng-show=\"LoginForm.password.$valid\" class=\"icon-check-hollow ng-hide\"></i>\n" +
    "      </div>\n" +
    "      <div ng-show=\"errors\" class=\"error margin-auto\">\n" +
    "        <div ng-repeat=\"error in errors\">\n" +
    "          <div class=\"form-error subtext error-subtext\">[[error]]</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group extra-spacing-top\">\n" +
    "        <div class=\"sub-text forgot-password-login\"><a ng-click=\"forgotPassword()\" analytics-on=\"click\" analytics-event=\"forgotPassword\" class=\"shift-right\">Oops, I forgot my password.</a></div>\n" +
    "      </div>\n" +
    "      <input type=\"submit\" value=\"Log in\" class=\"btn-extra-padding btn-primary action-button-small\"/>\n" +
    "      <div class=\"form-group extra-spacing-top\">\n" +
    "        <div class=\"sub-text\"><a ng-click=\"signUp()\" analytics-on=\"click\" analytics-event=\"forgotPassword\" class=\"shift-right\">Sign Up</a></div>\n" +
    "        <div class=\"sub-text need-assistance\">Need Assistance?<a href=\"mailto:support@brightscope.com\"> Contact BrightScope</a></div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/modal_wrapper.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/modal_wrapper.jade",
    "<div class=\"slide-animate-container\">\n" +
    "  <div ng-include=\"templateContent\" class=\"slide-animate\"></div>\n" +
    "</div>");
}]);

angular.module("/jade/bs_registration/signup.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/jade/bs_registration/signup.jade",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"registration-modal-header fp-type-4\">We're glad you're enjoying the site</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h3>Sign Up for FREE to continue browsing and help us improve your BrightScope experience.</h3>\n" +
    "  <h6 class=\"center extra-spacing-bottom\">(It takes less than one minute!)</h6>\n" +
    "  <div class=\"sub-content registration-sub-content\">\n" +
    "    <form name=\"registrationForm\" ng-submit=\"submitted = true; registerUser(user, registrationForm)\" novalidate=\"novalidate\" class=\"main-registration-form extra-spacing-top\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"email\" name=\"email\" bs-registration-input=\"bs-registration-input\" id=\"id_email\" ng-model=\"user.email\" ng-model-options=\"{ debounce: 1000 }\" placeholder=\"Email address\" ng-maxlength=\"75\" required=\"required\" class=\"form-control input-single-line required-input\"/>\n" +
    "        <div ng-show=\"submitted &amp;&amp; registrationForm.email.$invalid\" class=\"form-error form-error-modal\">Enter a valid email address</div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group extra-spacing-bottom\">\n" +
    "        <div class=\"shift-bottom left\">I am a ...<span class=\"registration-required-field\">*</span></div>\n" +
    "        <div class=\"select-container shift-top shift-bottom registration-select-container\"><i class=\"icon-angle-down\"></i>\n" +
    "          <select ng-model=\"user.user_type\" name=\"user_type\" required=\"required\">\n" +
    "            <option value=\"12\">Investor (searching for Advisor)</option>\n" +
    "            <option value=\"1\">401k Participant (I have a 401k)</option>\n" +
    "            <option value=\"2\">Plan Sponsor/Plan Administrator</option>\n" +
    "            <option value=\"11\">Wealth Management Advisor/Consultant</option>\n" +
    "            <option value=\"3\">Retirement Plan Advisor/Consultant</option>\n" +
    "            <option value=\"6\">Provider: Asset Manager</option>\n" +
    "            <option value=\"7\">Provider: TPA/Recordkeeper</option>\n" +
    "            <option value=\"8\">Provider: Bundled</option>\n" +
    "            <option value=\"9\">Government</option>\n" +
    "            <option value=\"4\">Member of the Press</option>\n" +
    "            <option value=\"5\">Other</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "        <div ng-show=\"submitted &amp;&amp; registrationForm.user_type.$invalid\" class=\"form-error form-error-modal\">User type is required</div>\n" +
    "      </div>\n" +
    "      <div ng-show=\"loading\" class=\"animation-image bar-animation margin-auto\"></div>\n" +
    "      <div ng-show=\"errors\" class=\"error margin-auto\">\n" +
    "        <div ng-repeat=\"error in errors\">\n" +
    "          <div class=\"form-error subtext error-subtext\">[[error]]</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"submit\" value=\"Sign Up\" class=\"btn btn-extra-padding btn-primary action-button-small\"/>\n" +
    "      </div>\n" +
    "      <div class=\"form-group extra-spacing-top\">\n" +
    "        <div class=\"sub-text log-in-here\">Already registered?<a ng-click=\"logIn()\">&nbsp;Log in here</a></div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);
