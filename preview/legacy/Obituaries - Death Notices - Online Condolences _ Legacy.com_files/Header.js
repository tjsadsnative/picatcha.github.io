; (function ($, window, document) {
    if (!$.LEGACY) {
        $.LEGACY = new Object();
    }

    $.LEGACY.GlobalHeader = function (el, options) {
        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$menu = $(el).find('.GlobalHeader_Menu');
        base.$subMenu = $(el).find('.GlobalHeader_SubMenu');
        base.$headerLink = $(el).find('ul.GlobalHeader_MainMenu > li');
        base.$searchIcon = $(el).find('.GlobalHeader_SearchIcon');
        base.$mobileSearchButton = $(el).find('.GlobalHeader_Search_SearchButton');
        base.$mobileCancelButton = $(el).find('.GlobalHeader_Search_CancelButton');
        base.$searchBody = $(el).find('.GlobalHeader_Search .GlobalHeader_Search_Body');
        base.$mobileSearch = $(el).find('.GlobalHeader_Search_Mobile');
        base.$searchFirstName = $(el).find('#globalHeaderSearchFirstName');
        base.$searchLastName = $(el).find('#globalHeaderSearchLastName');
        base.$searchFirstNameMobile = $(el).find('#mGlobalHeaderSearchFirstName');
        base.$searchLastNameMobile = $(el).find('#mGlobalHeaderSearchLastName');
        base.$hamburgerMenu = $(el).find('.GlobalHeader_MobileHamburger');
        base.$mobileMenuOverlay = $(el).find('.mobileMenuOverlay');
        base.$cobranding = $(el).find(".GlobalHeader_Cobranding");
        
        base.$searchInputSelectors =
            [
                base.$searchFirstName.selector,
                base.$searchLastName.selector,
                base.$searchFirstNameMobile.selector,
                base.$searchLastNameMobile.selector
            ].join(",");

        base.init = function () {
            base.options = $.extend({}, $.LEGACY.GlobalHeader.defaultOptions, options);
            base.options.isMobile = $('.GlobalHeader_JSMediaQueryHook').is(':visible');

            if (!Modernizr.input.placeholder)
            {
                $(base.$searchInputSelectors).placeholder();
            }

            //adding both event calls for cross-browser compatibility
            if (window.onpagehide === null || window.onpageshow === null) {
                $(window).on("pageshow", base.resetHeader);
                $(window).on("pagehide", base.resetHeader);
            }
            else if (window.addEventListener) {
                $(window).on("unload", base.resetHeader);
            }
    
            if (window.addEventListener) {
                window.addEventListener('resize', base.resize);
            }
            else {
                window.attachEvent('onresize', base.resize);
            }

            if (base.$cobranding.attr('showcobranding').toLowerCase() === "true")
            {
                base.loadAffiliateLogo();
            }
            
            base.$searchIcon.click(base.searchToggle);
            base.$mobileSearchButton.click(base.search);
            base.$mobileMenuOverlay.click(base.resetSubMenu);
            base.$hamburgerMenu.click(function ()
            {
                base.$mobileSearch.removeClass('open');
                base.closeMobileMenu();
            });
        }

        base.resetHeader = function () {
            base.resetMenu();
            base.$searchFirstName.val('');
            base.$searchFirstNameMobile.val('');
            base.$searchLastName.val('');
            base.$searchLastNameMobile.val('');
        }

        $(document).bind('touchstart', function (e) {
            if (!base.options.isMobile && e.target.className !== 'GlobalHeader_MainMenuLink') {
                base.$headerLink.removeClass('hover');
            }
        });

        $('.GlobalHeader_MainMenuLink').bind("click", function (e) {
            if (stopMainMenuLink) {
                e.preventDefault();
            }
        });

        var stopMainMenuLink = false; // needed for android galaxy tab. preventdefault() does not fix issue.

        $('.GlobalHeader_MainMenuLink').bind("touchstart", function (e) {
            if (!base.options.isMobile) {
                if ($(this).parent('li').hasClass('hover') && e.target.nodeName === 'A') {
                    stopMainMenuLink = false;
                }
                else {
                    base.$headerLink.removeClass('hover');
                    $(this).parent('li').addClass('hover');
                    stopMainMenuLink = true;
                }
            }
        });

        base.$headerLink.bind("click", function (e) {
            if (base.options.isMobile) {
                if (base.$subMenu.hasClass('open')) {
                    return true;
                }

                $(this).addClass('active');
                $(this).find('.GlobalHeader_SubMenu').addClass('open');
                $(this).find('.GlobalHeader_SubMenu').css('top', -($(this).position().top));
                base.$mobileMenuOverlay.show();
                return false;
            }
        });

        base.$mobileCancelButton.click(function () {
            base.$searchFirstNameMobile.val('');
            base.$searchLastNameMobile.val('');
            base.$mobileSearch.toggleClass('open');
        });

        $(base.$searchInputSelectors).keypress(function (e) {
            if (e.which == 13) {
                base.search();
            }
        });

        base.closeMobileMenu = function () {
            base.$hamburgerMenu.toggleClass('open');
            base.$menu.toggleClass('open');
            base.resetSubMenu();
        }

        base.loadAffiliateLogo = function () {
            var affiliateUrl = base.getCookieValue('LegacyGlobal', 'AffiliateUrl');
            var affiliateLogoUrl = base.getCookieValue('LegacyGlobal', 'AffiliateLogo');
            if (affiliateUrl != "" && affiliateLogoUrl != "") {
                $(".GlobalHeader_AffiliateLogo").attr("src", affiliateLogoUrl);
                $(".GlobalHeader_AffiliateLogoLink").attr("href", affiliateUrl);
                base.$cobranding.css('visibility', 'visible');
            }
            else {
                base.$cobranding.css('visibility', 'hidden');
            }
        }

        base.getCookieData = function (c_name) {
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    var c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return document.cookie.substring(c_start, c_end);
                }
            }
            return "";
        }

        base.getCookieValue = function (cookieName, valueName) {
            var cookieValue = base.getCookieData(cookieName);
            if (cookieValue != '') {
                var valueStartIndex = cookieValue.indexOf(valueName + "=");
                if (valueStartIndex != -1) {
                    valueStartIndex = valueStartIndex + valueName.length + 1;
                    var valueEndIndex = cookieValue.indexOf("|", valueStartIndex);
                    if (valueEndIndex == -1) valueEndIndex = cookieValue.length;
                    return unescape(cookieValue.substring(valueStartIndex, valueEndIndex));
                }
            }
            return "";
        }

        base.searchToggle = function()
        {
            if (base.$hamburgerMenu.hasClass('open'))
            {
                base.closeMobileMenu();
            }

            var firstName = base.$searchFirstName.val() || base.$searchFirstNameMobile.val();
            var lastName = base.$searchLastName.val() || base.$searchLastNameMobile.val();

            if (base.options.isMobile || ((firstName === '' || firstName.toLowerCase() === 'first name') && (lastName === '' || lastName.toLowerCase() === 'last name'))) {
                if (base.options.isMobile) {
                    base.$mobileSearch.toggleClass('open');
                }
                else {
                    base.$searchBody.toggleClass('open');
                }
            }
            else if (!base.options.isMobile)
            {
                base.search();
            }
        }

        base.search = function () {
            var firstName = base.options.isMobile ? base.$searchFirstNameMobile.val() : base.$searchFirstName.val();
            var lastName = base.options.isMobile ? base.$searchLastNameMobile.val() : base.$searchLastName.val();

            if ((firstName !== '' && firstName.toLowerCase() !== 'first name') || (lastName !== '' && lastName.toLowerCase() !== 'last name'))
            {
                window.location = base.$searchIcon.attr('searchurl').replace('##FIRSTNAME##', firstName).replace('##LASTNAME##', lastName);
            }
        }

        base.resize = function () {
            if ($('.GlobalHeader_JSMediaQueryHook').is(':visible') && !base.options.isMobile) {
                if (base.$searchBody.hasClass('open') && !base.$mobileSearch.hasClass('open')) {
                    base.$searchFirstNameMobile.val(base.$searchFirstName.val());
                    base.$searchLastNameMobile.val(base.$searchLastName.val());
                    base.$mobileSearch.toggleClass('open');
                    base.$searchBody.toggleClass('open');
                }

                base.options.isMobile = true;
            }
            else if (!$('.GlobalHeader_JSMediaQueryHook').is(':visible') && base.options.isMobile) {
                if (base.$mobileSearch.hasClass('open') && !base.$searchBody.hasClass('open')) {
                    base.$searchFirstName.val(base.$searchFirstNameMobile.val());
                    base.$searchLastName.val(base.$searchLastNameMobile.val());
                    base.$mobileSearch.toggleClass('open');
                    base.$searchBody.toggleClass('open');
                }

                base.resetMenu();
                base.options.isMobile = false;
            }
        }

        base.resetMenu = function () {
            base.$menu.removeClass('open');
            base.$hamburgerMenu.removeClass('open');
            base.resetSubMenu();
        }

        base.resetSubMenu = function (e) {
            base.$mobileMenuOverlay.hide();
            base.$subMenu.removeClass('open');
            base.$headerLink.removeClass('active');
            base.adjustMobileSubMenuHeight();
        }

        base.adjustMobileSubMenuHeight = function () {
            $.each(base.$subMenu, function (key, value) {
                if (base.$menu.hasClass('open')) {
                    $(value).css('min-height', base.$menu.outerHeight() + 'px');
                }
                else {
                    $(value).css('min-height', 'initial');
                    $(value).css('top', base.$menu.outerHeight() + 'px');
                }
            });
        }

        base.init();
    }

    $(document).ready(function ()
    {
        $('#GlobalHeaderWidget').legacy_GlobalHeader();
    });

    $.LEGACY.GlobalHeader.defaultOptions =
    {
        isMobile: false
    }
    $.fn.legacy_GlobalHeader =
         function () {
             return new $.LEGACY.GlobalHeader(this);
         };
})(jQuery, window, document);