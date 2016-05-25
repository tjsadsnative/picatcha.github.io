
/*de.bild.mobile.nav:34734582.18*/

define("navigation", function() {
    
    var theNav;
    var settings = {
        actionButton: ".nav-btn",
        navWrapper: ".mainnav",
        triggerClass: "js-nav",
        logo: ".logo",
        triggerElem: "body",
        contentElem: "main, .masthead",
        mastHead: ".masthead",
        mainElement: "main",
        outerWrapper: "#outerWrapper",
        stickyBanner: ".sticky-banner",
        searchForm: ".global-search",
        searchInput: "#search_field",
        submitButton: ".btn-submit",
        blockButtonsSel: ".register, .log-in-out",
        isAnimatingClass: "is-animating",
        stickyBannerDefaultHeight: 0,
        retrGeoLoc: ".renew-location",
        Events: de.bild.events
    };
    var Navi = function(options) {
        if (theNav) {
            return theNav;
        }
        theNav = this;
        theNav.options = options;
        theNav.settings = settings;
        theNav.init();
        return theNav;
    };
    Navi.prototype = {
        init: function() {
            this.$body = $(this.settings.triggerElem);
            this.triggerClass = this.settings.triggerClass;
            this.$navWrapper = $(this.settings.navWrapper);
            this.$searchForm = this.$navWrapper.children(this.settings.searchForm);
            this.$searchInput = this.$searchForm.find(this.settings.searchInput);
            this.$contentElem = $(this.settings.contentElem);
            this.$outerWrapper = $(this.settings.outerWrapper);
            this.mainElement = $(this.settings.mainElement);
            this.$mastHead = $(this.settings.mastHead);
            this.$actionButton = $(this.settings.actionButton);
            this.isAnimating = false;
            this.$el = $(theNav.options.el);
            this.$submitButton = this.$navWrapper.find(this.settings.submitButton);
            this.trackingEnabled = theNav.options && theNav.options.trackingEnabled === true;
            this.bindUIEvents();
        },
        bindUIEvents: function() {
            if (!de.bild.mobile.conf.positionFixedSupported()) {
                theNav.needsFixes = true;
            } else {
                $("html").addClass("fixed");
                if (!Modernizr.csspositionsticky) {
                    $(window).on("onorientationchange" in window ? "orientationchange" : "resize", theNav.orientationChangeHandler);
                    $(window).on("touchmove scroll", theNav.stickyBannerScrollHandler);
                }
            }
            if (navigator.userAgent.match(/(iPad|iPhone|iPod|iPod touch);.*CPU.*OS 8_\d/i)) {
                this.$navWrapper.get(0).style.WebkitOverflowScrolling = "auto";
            }
            theNav.$el.on("touchstart click", theNav.settings.actionButton, theNav.navBtnClickHandler);
            theNav.$searchForm.on("submit", function(e) {
                if (theNav.$searchInput.val().length === 0) e.preventDefault();
            });
            theNav.$submitButton.on("touchstart", function(e) {
                e.preventDefault();
                theNav.$searchForm.submit();
            });
            theNav.$navWrapper.on("click", "a,button", theNav.docClickHandler);
            theNav.$el.on("click", theNav.settings.logo, theNav.trackLogoClick);
            theNav.$navWrapper.on("click", theNav.settings.retrGeoLoc, function(event) {
                event.preventDefault();
                theNav.close();
                de.bild.events.publish("renewGeoLoc");
            });
            theNav.$navWrapper.on("transitionend ontransitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", theNav.transitionEndHandler);
        },
        orientationChangeHandler: function() {
            if (window.orientation && window.orientation !== 0) {
                theNav.$mastHead.removeClass("fixed");
                $("html").removeClass("fixed-active");
            } else {
                theNav.stickyBannerScrollHandler();
            }
        },
        stickyBannerScrollHandler: function() {
            if (window.orientation && window.orientation !== 0) {
                return;
            }
            var stickyBannerHeight = theNav.settings.stickyBannerDefaultHeight;
            if (typeof sas_12815_height !== "undefined") {
                stickyBannerHeight = sas_12815_height.replace("px", "");
            }
            var scrolloffset = window.scrollY || document.documentElement.scrollTop;
            theNav.$mastHead[scrolloffset > stickyBannerHeight ? "addClass" : "removeClass"]("fixed");
            $("html")[scrolloffset > stickyBannerHeight ? "addClass" : "removeClass"]("fixed-active");
        },
        navBtnClickHandler: function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (theNav.needsFixes && theNav.$actionButton.hasClass(theNav.settings.isAnimatingClass)) {
                return false;
            }
            if (theNav.isOpen()) {
                theNav.close();
                theNav.$contentElem.off("touchstart.docClick click.docClick");
            } else {
                theNav.open();
            }
        },
        docClickHandler: function(e) {
            var $target = $(e.target);
            if (theNav.isOpen()) {
                if ($target.closest(theNav.$navWrapper).length === 0) {
                    theNav.close(e);
                } else {
                    if (theNav.trackingEnabled) {
                        theNav.settings.Events.publish("de.bild.mobile.clickTracking", [ false, {
                            webtrekk: {
                                trackOnNextPage: true,
                                linkId: "navi",
                                customClickParameter: {
                                    11: "nav/" + $target.text() + "/##CONTENTID##"
                                }
                            }
                        } ]);
                    }
                }
            } else {
                e.preventDefault();
            }
        },
        transitionEndHandler: function() {
            theNav.isAnimating = false;
            if (theNav.$outerWrapper.css("overflow") === "hidden") {
                theNav.$outerWrapper.css("overflow", "");
            } else {
                theNav.$outerWrapper.css("overflow", "hidden");
                if (theNav.noPositionFixed) {
                    theNav.bindFixHandlers();
                }
            }
            var actionButtonSpan = theNav.$actionButton.children("span");
            var actionButtonText = actionButtonSpan.text();
            actionButtonSpan.text(actionButtonText + " ");
            setTimeout(function() {
                actionButtonSpan.text(actionButtonText);
            });
        },
        open: function() {
            if (!theNav.isAnimating) {
                theNav.$body.addClass(this.triggerClass);
                theNav.isAnimating = theNav.needsFixes ? false : true;
                if (!theNav.needsFixes) {
                    theNav.$contentElem.on("touchstart.docClick click.docClick", function(e) {
                        e.preventDefault();
                        theNav.close();
                        theNav.$contentElem.off("touchstart.docClick click.docClick");
                    });
                }
                if (theNav.needsFixes) {
                    theNav.$navWrapper.find(theNav.settings.blockButtonsSel).add(theNav.$actionButton).addClass(theNav.settings.isAnimatingClass);
                    if (theNav.isAnimatingTimeout) {
                        clearTimeout(theNav.isAnimatingTimeout);
                    }
                    theNav.isAnimatingTimeout = setTimeout(function() {
                        theNav.$navWrapper.find(theNav.settings.blockButtonsSel).add(theNav.$actionButton).removeClass(theNav.settings.isAnimatingClass);
                    }, 1e3);
                }
                if (theNav.trackingEnabled) {
                    theNav.settings.Events.publish("de.bild.mobile.clickTracking", [ false, {
                        webtrekk: {
                            linkId: "navi",
                            customClickParameter: {
                                11: "nav/open/##CONTENTID##"
                            }
                        }
                    } ]);
                }
            }
        },
        close: function() {
            if (theNav.isOpen()) {
                theNav.$body.removeClass(theNav.triggerClass);
                theNav.isAnimating = theNav.needsFixes ? false : true;
                if (theNav.needsFixes) {
                    theNav.$navWrapper.find(theNav.settings.blockButtonsSel).add(theNav.$actionButton).addClass(theNav.settings.isAnimatingClass);
                    if (theNav.isAnimatingTimeout) {
                        clearTimeout(theNav.isAnimatingTimeout);
                    }
                    theNav.isAnimatingTimeout = setTimeout(function() {
                        theNav.$navWrapper.find(theNav.settings.blockButtonsSel).add(theNav.$actionButton).removeClass(theNav.settings.isAnimatingClass);
                    }, 1e3);
                }
                theNav.$searchInput.blur();
            }
        },
        isOpen: function() {
            return !theNav.isAnimating && theNav.$body.hasClass(theNav.triggerClass);
        },
        trackLogoClick: function() {
            if (theNav.trackingEnabled) {
                theNav.settings.Events.publish("de.bild.mobile.clickTracking", [ false, {
                    webtrekk: {
                        trackOnNextPage: true,
                        linkId: "navi",
                        customClickParameter: {
                            11: "nav/BildLogo/##CONTENTID##"
                        }
                    }
                } ]);
            }
        }
    };
    return Navi;
});