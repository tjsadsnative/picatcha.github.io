var sdthreadrate_getting = 0;
var sdthreadrate_postid = 0;
var sdthreadrate_url = "";

function sdthreadrate_vote(postid, vote, controltype, forumid)
{
    abandoned=false;
    controltype = typeof(controltype) != 'undefined' ? controltype : "thread";

    // use url embeded on page
    if (typeof(fb_object_url)  != 'undefined')
    {
        sdthreadrate_url = fb_object_url;
    }
    else
    {
        if (controltype == "permadeal")
        {
            sdthreadrate_url = $("#sdpermadeal_" + postid).find("a.tup").attr("facebook_url");
        }
        else
        {
            sdthreadrate_url = $("#sdhottopic_" + postid).find("a.voteup").attr("facebook_url");
        }
    }
    var object_title_override = false;
    var do_fb_vote = false;
    var votefeedback;
    if (controltype == 'modal_deal' || controltype == 'modal_coupon')
    {
        votefeedback = $('#modal_vote_feedback_' + postid + '_' + vote);
    }
    else if (controltype == 'modern')
    {
        votefeedback = $("#vote_feedback_" + forumid + '_' + vote);
        votefeedback.find("input[postid]").attr("postid", postid).prop("checked", false);
    }
    else if (controltype == 'modern_modal')
    {
        votefeedback = $("#modal_vote_feedback_" + forumid + '_' + vote);
        votefeedback.find("input[postid]").attr("postid", postid).prop("checked", false);
    }
    else
    {
        votefeedback = $("#vote_feedback_" + postid + "_" + vote);
    }
    if (votefeedback.length > 0)
    {
        if (votefeedback.find("input").length == 1)
        {
            if (vote == 1 && typeof sdfacebook != "undefined" && sdfacebook.SDLoggedIn)
            {
                if (controltype == "permadeal")
                {
                    object_title_override = $("h1#fb_deal_title_" + postid).html();
                    do_fb_vote = true;
                    if (typeof(fb_action) == "undefined")
                    {
                        fb_action  = "deal";
                    }
                }
                else if (controltype == "fpdeal")
                {
                    do_fb_vote = true;
                    if (typeof(fb_action) == "undefined")
                    {
                        fb_action  = "deal";
                    }
                }
                else if (controltype == 'hottopic')
                {
                    object_title_override = $("#sdhottopic_" + postid).find("a.fb_popular_deal_title").html();
                    do_fb_vote            = true;
                    if (typeof(fb_action) == "undefined")
                    {
                        fb_action = "deal";
                    }
                }
                else if (controltype == 'thread')
                {
                    do_fb_vote = true;
                }
                else if (controltype == 'modal_deal' || controltype == 'modal_coupon')
                {
                    do_fb_vote = true;
                    if (typeof(fb_action) == "undefined")
                    {
                        fb_action = "deal";
                    }
                }

                sdthreadrate_submit(postid,vote,votefeedback.find("input").val(),controltype);
            }
            else
            {
                sdthreadrate_submit(postid,vote,votefeedback.find("input").val(),controltype);
            }
        }
        else
        {
            votefeedback.find(".voteselected").attr("postid", postid);
            votefeedback.find(".voteselected").attr("vote", vote);
            if (controltype != 'modern')
            {
                votefeedback.slideDown("fast");
            }
        }
    }
    else
    {
        sdthreadrate_submit(postid,vote,0,controltype);
    }
}

function sdthreadrate_extendedvote(input, controltype)
{
    input = $(input);
    vote = input.attr("vote");
    postid = input.attr("postid");
    var forumid = input.attr("forumid");
    if ($.fn.dropdown && $("#vote_feedback_" + forumid + "_" + vote).length > 0 && $("#vote_feedback_" + forumid + "_" + vote).dropdown)
    {
        $("#vote_feedback_" + forumid + "_" + vote).dropdown("hide");
    }
    $("#vote_feedback_" + postid + "_" + vote).slideUp("fast");
    $("#modal_vote_feedback_" + postid + "_" + vote).slideUp("fast");
    sdthreadrate_submit(postid,vote,input.val(),controltype);
}

function sdthreadrate_submit(postid, vote, votetypeid, controltype, user_response, show_error)
{
    controltype = typeof(controltype) != 'undefined' ? controltype : "thread";
    if (typeof show_error == "undefined")
    {
        show_error = true;
    }

    if (controltype == "merchant_widget")
    {
        show_error = false;
    }

    if (sdthreadrate_getting == 1)
    {
        return false;
    }
    else
    {
        sdthreadrate_getting = 1;
        setTimeout("sdthreadrate_getting = 0", 1000);
    }
    if (controltype == "coupon")
    {
        $("#votecontrol_wrap_"+postid).btOff();
    }
    else if (controltype == "permadeal")
    {
        $("#ratecontrol_"+postid+"_"+vote).css("background-image", "url(http://static.slickdealscdn.com/images/buttons/ajaxsmall.gif)");
    }
    else if (controltype == "merchant_widget")
    {
        $(".tup").css("background-image", "url(http://static.slickdealscdn.com/images/buttons/ajaxsmall.gif)");
    }

    var sdthreadrate_param = {};

    if (typeof FACEBOOK_OFF != "undefined" && !FACEBOOK_OFF && typeof sdfacebook != "undefined")
    {
        if (sdfacebook.fb_message != "")
        {
            sdthreadrate_param['fb_message'] = sdfacebook.fb_message;
        }
    }

    sdthreadrate_param['ajax'] = 1;
    sdthreadrate_param['do'] = "sdthreadratevote";
    sdthreadrate_param['postid'] = postid;
    sdthreadrate_param['vote'] = vote;
    sdthreadrate_param['votetypeid'] = votetypeid;
    var currentControlType = controltype;
    if (controltype == "mobile3")
    {
        controltype = "modern";
    }
    sdthreadrate_param['controltype'] = controltype;
    sdthreadrate_param['securitytoken'] = SECURITYTOKEN;
    sdthreadrate_param['where_from'] = '/forums/sdthreadrate_ajax.php';
    var voteimgindex = vote + 1, vtarget = $("#ratecontrol_" + postid + " img:eq(" + voteimgindex + ")"), voteorigimg = vtarget.attr('src');
    vtarget.attr("src","/images/buttons/ajaxsmall.gif");

    //ADDED David - Prompt for sharing on facebook before we vote
    if (user_response)
    {
        sdthreadrate_param['fb_vote']     = user_response.answer;
        sdthreadrate_param['fb_options']  = user_response.options;
        sdthreadrate_param['fb_object']   = fb_action;
        sdthreadrate_param['fb_url']      = sdthreadrate_url;
        sdthreadrate_param['fb_explicit'] = user_response.explicit;
    }
    // END

    var localdeal = document.location.pathname.match(/^\/localdeal\/(\d+)/);

    if (localdeal != null)
    {
        sdthreadrate_param['localdeal'] = 1;
        // get the localdeal id
        sdthreadrate_param['ddid'] = localdeal[1];
    }

    $.post('/forums/sdthreadrate_ajax.php', sdthreadrate_param, function(data)
    {
        controltype = currentControlType;
        if ($(data).find("error").length === 0)
        {
            $("#sharethistab:visible").hide();
            $("#showfeedback:hidden").show();
            $("#fistthread_publicopinion:hidden").css("visibility","").hide().fadeIn();
            var postid;
            if (controltype == "modern")
            {
                postid = $(data).find("htmlbit").attr("postid");

                var redir = $(data).find('redirecturl');
                if (redir.length > 0)
                {
                    if (redir.attr('delay'))
                    {
                        setTimeout("window.location = '"+redir.text()+"';", redir.attr('delay'));
                    }
                    else
                    {
                        window.location = redir.text();
                    }
                }
            }
            else
            {
                postid = geturlvar($(this).attr("data"), "postid");
                updateHtmlBits(data);
            }
            var skipSlide = false;
            var score = $(".vote_score");
            score.hide();
            score.slideDown("normal");
            var error = $(data).find("errormsg");
            var success = $(data).find("successmsg");
            var custom = $(data).find("custommsg");

            if (success.length > 0)
            {
                successdialog(success.text());
            }

            var voteError = false;

            if (custom.length > 0 && currentControlType != "mobile3")
            {
                genericdialog(custom.attr("title"), custom.text(), false, true);
                voteError = custom.attr("voteError");
            }

            if (error.length > 0)
            {
                if (show_error)
                {
                    errordialog(error.text(), null, 300);
                }
            }
            else if ($(data).find('dologin').length == 1)
            {
                if (controltype == 'mobile3')
                {
                    //We are on mobile so we need to redirect instead of calling the ajax login
                    location.href = "/forums/register.php?url=" + location.pathname + location.search;
                }
                else
                {
                    vtarget.attr('src', voteorigimg);

                    if (score.length === 0)
                    {
                        if (controltype == 'modal_deal' || controltype == 'modal_coupon')
                        {
                            sd_ajax_login(null, null, null, null, null, null,'acmodal');
                        }
                        else
                        {
                            sd_ajax_login();
                        }
                    }
                    else
                    {
                        score.slideDown("normal", function ()
                        {
                            sd_ajax_login();
                        });
                        skipSlide = true;
                    }
                }
            }
            else if (controltype == "modern" && !voteError)
            {
                SD.Analytics.trackThreadVote(vote);

                // Don't change the vote displayed if there was an error (duplicate vote or time limit exceeded)
                // voteError flag set when custom dialog is used above, and in sdthreadrate_ajax.php
                var htmlbit = $(data).find("htmlbit");
                apply_threadrate_styles(htmlbit.attr("postid"), vote, htmlbit.attr("pos"), htmlbit.attr("neg"), htmlbit.attr("score"));
                var threadrating = $("[role='threadrating'][data-postid='"+htmlbit.attr("postid")+"']"),
                    threadlabel = $(".likesContainer[data-postid='"+htmlbit.attr("postid")+"']");
                threadrating.find("[role='thread.sign']").text(htmlbit.attr("sign"));
                threadrating.find("[role='thread.score']").text(htmlbit.attr("score"));

                var signClass = "default";
                if (htmlbit.attr("sign") === "+")
                {
                    signClass = "positive";
                    threadlabel.find(".icon-thumbsdown").removeClass("icon-thumbsdown").addClass("icon-thumbsup");
                }
                else if (parseInt(htmlbit.attr("score"), 10) < 0)
                {
                    signClass = "negative";
                    threadlabel.find(".icon-thumbsup").removeClass("icon-thumbsup").addClass("icon-thumbsdown");
                }
                threadrating.find("[role='thread.score']").parent().addClass("voteCount").add(threadlabel)
                    .removeClass("positive").removeClass("negative").addClass(signClass);
            }
            else if (controltype == "coupon")
            {
                SD.Analytics.trackThreadVote(vote);

                $("#votecontrol_wrap_"+postid).
                    parents(".coupon_info").
                    removeClass("pos").
                    removeClass("neg").
                    addClass(vote > 0 ? "pos" : "neg");
            }
            else if (controltype == "mobile3")
            {
                SD.Analytics.trackThreadVote(vote);

                var htmlbit = $(data).find("htmlbit");
                if (vote > 0)
                {
                    $('.thumbsUp').addClass('voted');
                    $('.thumbsDown').removeClass('voted');
                }
                else
                {
                    $('.thumbsUp').removeClass('voted');
                    $('.thumbsDown').addClass('voted');
                }

                $(".social-info #threadVote").text((htmlbit.attr("sign") == '+' ? '' : htmlbit.attr("sign")) + '' + htmlbit.attr("score"));
            }
            else if (controltype == "permadeal")
            {
                SD.Analytics.trackThreadVote(vote);

                $(".score").hide().fadeIn();
            }
            else if (controltype == 'merchant_widget')
            {
                SD.Analytics.trackThreadVote(vote);
                
                $(".tup").hide().after('<div class="thanks">Thanks for buying!</div>');

            }
            else if (controltype == "fpdeal")
            {
                SD.Analytics.trackThreadVote(vote);

                $("#thumbup_"+postid).addClass("pos");
            }
            else if (controltype == 'hottopic')
            {
                SD.Analytics.trackThreadVote(vote);

                postid = $(data).find('htmlbits htmlbit').attr('id');
                $('#sdhottopic_' + postid + ' td.htscore').html($(data).find('htmlbits htmlbit').text());
            }
            if (!skipSlide)
            {
                score.slideDown("normal");
            }
        }
        else
        {
            if (show_error)
            {
                var errorText = $(data).find("error").text();
                if (errorText == 'Unverified Email' && $("#unverifiedEmailError").length > 0)
                {
                    unverifiedEmailDialog();
                }
                else if (errorText == 'Unverified Email' && controltype == "mobile3")
                {
                    resendValidationModal.show();
                }
                else if(typeof(errordialog) == "function")
                {
                    errordialog(errorText, null, 300);
                }
                else
                {
                    alert(errorText);
                }
            }
        }
    });

    return false;
}

function sdlocaldeal_vote_submit(threadid, vote, ddid, user_response)
{
    var sdthreadrate_param = {};
    sdthreadrate_param['ajax'] = 1;
    sdthreadrate_param['do'] = "sdthreadratevote";
    sdthreadrate_param['threadid'] = threadid;
    sdthreadrate_param['vote'] = vote;
    sdthreadrate_param['votetypeid'] = 0;
    sdthreadrate_param['controltype'] = 'fpdeal';
    sdthreadrate_param['securitytoken'] = SECURITYTOKEN;
    sdthreadrate_param['where_from'] = '/forums/sdthreadrate_ajax.php';
    sdthreadrate_param['localdeal'] = 1;
    sdthreadrate_param['ddid'] = ddid;

    if (typeof sdfacebook != "undefined" && sdfacebook.fb_message != "")
    {
        sdthreadrate_param['fb_message'] = sdfacebook.fb_message;
    }

    if (user_response)
    {
        sdthreadrate_param['fb_vote']    = user_response.answer;
        sdthreadrate_param['fb_options'] = user_response.options;
        sdthreadrate_param['fb_object']  = "deal";
        sdthreadrate_param['fb_url']     = sdthreadrate_url;
    }

    $.post('/forums/sdthreadrate_ajax.php', sdthreadrate_param, function(data){
        if ($(data).find("error").length == 0)
        {
            if ($(data).find('dologin').length == 1)
            {
                sd_ajax_login();
            }
            else if (vote < 0)
            {
                // $('#localdailydeal_' + ddid).hide();
                $('a#thumbdown_' + threadid).addClass('thumb_selected');
                $('a#thumbup_' + threadid).removeClass('thumb_selected');
            }
            else
            {
                $('a#thumbdown_' + threadid).removeClass('thumb_selected');
                $('a#thumbup_' + threadid).addClass('thumb_selected');
            }
            createCookie('dailydeal_' + ddid, vote, 7);
        }
        else
        {
            errordialog($(data).find("error").text(), null, 300);
        }
    });
    return false;
}

function sdlocaldeal_vote(threadid, vote, ddid)
{
    sdlocaldeal_vote_submit(threadid, vote, ddid);
}

function apply_threadrate_styles(postid, vote, votepos, voteneg, score)
{
    var threadrating = $("[role='threadrating'][data-postid='"+postid+"']");
    var pos          = threadrating.find("[role='button'][data-vote='1']");
    var neg          = threadrating.find("[role='button'][data-vote='-1']");
    var voted        = vote > 0 ? pos : neg;

    if (vote > 0)
    {
        threadrating.removeClass("voteneg").addClass("votepos");
    }
    else if (vote < 0)
    {
        threadrating.removeClass("votepos").addClass("voteneg");
    }

    if (score < 0)
    {
        threadrating.removeClass("scorepos").addClass("scoreneg");
    }
    else
    {
        threadrating.removeClass("scoreneg").addClass("scorepos");
    }

    threadrating.find("[role='button']").removeClass("voted");
    voted.addClass("voted");

    if (votepos)
    {
        pos.find("[role='value']").text(votepos);
    }
    if (voteneg)
    {
        neg.find("[role='value']").text(voteneg);
    }

    threadrating.removeClass("hover");
}

function sdthreadrate_highlightfp(threadids)
{
    $.post("/ajax/threadrate.php", { 'ti': threadids, 'securitytoken': SECURITYTOKEN }, function (data) {
        $.each(data, function (index, value) {
            var el = $("#thread-rating-" + index);

            if (value == "up")
            {
                el.addClass('votepos');
            }
            else if (value == "down")
            {
                el.addClass('voteneg');
            }
        });
    });
}

$(document).ready(function () {
    $(document).on("click", "[role='threadrating'] [role='button']", function (ev) {
        var threadrate = $(this).closest("[role='threadrating']");
        var ibr = $(this).closest(".itemBottomRow, .content");
        var controltype = "modern";
        if ($(this).data("controltype"))
        {
            controltype = $(this).data("controltype");
        }
        if (ibr.length === 0 || !ibr.data("user_is_touching") || !ibr.data("user_is_entering"))
        {
            if (threadrate.data('threadtitle'))
            {
                SD.Analytics.addDataLayerProductTitle(threadrate.data('threadtitle'));
            }
            sdthreadrate_vote(threadrate.data('postid'), $(this).data('vote'), controltype, threadrate.data('forumid'));
        }
        ibr.data("user_is_entering", false);
        ibr.data("user_is_touching", false);
    }).on("mouseenter", "[role='threadrating']", function (ev) {
        $(".hover[role='threadrating']").removeClass("hover");
        $(this).addClass('hover');
    });

    if (window.navigator.msPointerEnabled)
    {
        $(document).on("click", function (ev) {
            if ($(ev.target).closest("[role='threadrating']").length === 0)
            {
                $(".hover[role='threadrating']").removeClass("hover");
            }
        });
    }
    else
    {
        $(document).on("mouseleave", "[role='threadrating']", function (ev) {
            $(this).removeClass('hover');
        });
    }

    $(document).on("mouseenter", "[role='threadrating']", function (ev) {
        $(this).find("[role='button'][data-dropdown]").each(function () {
            if ($($(this).data("dropdown")).find("label[for]").length < 2)
            {
                $(this).removeAttr("data-dropdown");
            }
        });
    });
});

;/*! jCarousel - v0.3.1 - 2014-04-26
* http://sorgalla.com/jcarousel
* Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';

    var jCarousel = $.jCarousel = {};

    jCarousel.version = '0.3.1';

    var rRelativeTarget = /^([+\-]=)?(.+)$/;

    jCarousel.parseTarget = function(target) {
        var relative = false,
            parts    = typeof target !== 'object' ?
                           rRelativeTarget.exec(target) :
                           null;

        if (parts) {
            target = parseInt(parts[2], 10) || 0;

            if (parts[1]) {
                relative = true;
                if (parts[1] === '-=') {
                    target *= -1;
                }
            }
        } else if (typeof target !== 'object') {
            target = parseInt(target, 10) || 0;
        }

        return {
            target: target,
            relative: relative
        };
    };

    jCarousel.detectCarousel = function(element) {
        var carousel;

        while (element.length > 0) {
            carousel = element.filter('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            carousel = element.find('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            element = element.parent();
        }

        return null;
    };

    jCarousel.base = function(pluginName) {
        return {
            version:  jCarousel.version,
            _options:  {},
            _element:  null,
            _carousel: null,
            _init:     $.noop,
            _create:   $.noop,
            _destroy:  $.noop,
            _reload:   $.noop,
            create: function() {
                this._element
                    .attr('data-' + pluginName.toLowerCase(), true)
                    .data(pluginName, this);

                if (false === this._trigger('create')) {
                    return this;
                }

                this._create();

                this._trigger('createend');

                return this;
            },
            destroy: function() {
                if (false === this._trigger('destroy')) {
                    return this;
                }

                this._destroy();

                this._trigger('destroyend');

                this._element
                    .removeData(pluginName)
                    .removeAttr('data-' + pluginName.toLowerCase());

                return this;
            },
            reload: function(options) {
                if (false === this._trigger('reload')) {
                    return this;
                }

                if (options) {
                    this.options(options);
                }

                this._reload();

                this._trigger('reloadend');

                return this;
            },
            element: function() {
                return this._element;
            },
            options: function(key, value) {
                if (arguments.length === 0) {
                    return $.extend({}, this._options);
                }

                if (typeof key === 'string') {
                    if (typeof value === 'undefined') {
                        return typeof this._options[key] === 'undefined' ?
                                null :
                                this._options[key];
                    }

                    this._options[key] = value;
                } else {
                    this._options = $.extend({}, this._options, key);
                }

                return this;
            },
            carousel: function() {
                if (!this._carousel) {
                    this._carousel = jCarousel.detectCarousel(this.options('carousel') || this._element);

                    if (!this._carousel) {
                        $.error('Could not detect carousel for plugin "' + pluginName + '"');
                    }
                }

                return this._carousel;
            },
            _trigger: function(type, element, data) {
                var event,
                    defaultPrevented = false;

                data = [this].concat(data || []);

                (element || this._element).each(function() {
                    event = $.Event((pluginName + ':' + type).toLowerCase());

                    $(this).trigger(event, data);

                    if (event.isDefaultPrevented()) {
                        defaultPrevented = true;
                    }
                });

                return !defaultPrevented;
            }
        };
    };

    jCarousel.plugin = function(pluginName, pluginPrototype) {
        var Plugin = $[pluginName] = function(element, options) {
            this._element = $(element);
            this.options(options);

            this._init();
            this.create();
        };

        Plugin.fn = Plugin.prototype = $.extend(
            {},
            jCarousel.base(pluginName),
            pluginPrototype
        );

        $.fn[pluginName] = function(options) {
            var args        = Array.prototype.slice.call(arguments, 1),
                returnValue = this;

            if (typeof options === 'string') {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (!instance) {
                        return $.error(
                            'Cannot call methods on ' + pluginName + ' prior to initialization; ' +
                            'attempted to call method "' + options + '"'
                        );
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        return $.error(
                            'No such method "' + options + '" for ' + pluginName + ' instance'
                        );
                    }

                    var methodValue = instance[options].apply(instance, args);

                    if (methodValue !== instance && typeof methodValue !== 'undefined') {
                        returnValue = methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (instance instanceof Plugin) {
                        instance.reload(options);
                    } else {
                        new Plugin(this, options);
                    }
                });
            }

            return returnValue;
        };

        return Plugin;
    };
}(jQuery));

(function($, window) {
    'use strict';

    var toFloat = function(val) {
        return parseFloat(val) || 0;
    };

    $.jCarousel.plugin('jcarousel', {
        animating:   false,
        tail:        0,
        inTail:      false,
        resizeTimer: null,
        lt:          null,
        vertical:    false,
        rtl:         false,
        circular:    false,
        underflow:   false,
        relative:    false,

        _options: {
            list: function() {
                return this.element().children().eq(0);
            },
            items: function() {
                return this.list().children();
            },
            animation:   400,
            transitions: false,
            wrap:        null,
            vertical:    null,
            rtl:         null,
            center:      false
        },

        // Protected, don't access directly
        _list:         null,
        _items:        null,
        _target:       null,
        _first:        null,
        _last:         null,
        _visible:      null,
        _fullyvisible: null,
        _init: function() {
            var self = this;

            this.onWindowResize = function() {
                if (self.resizeTimer) {
                    clearTimeout(self.resizeTimer);
                }

                self.resizeTimer = setTimeout(function() {
                    self.reload();
                }, 100);
            };

            return this;
        },
        _create: function() {
            this._reload();

            $(window).on('resize.jcarousel', this.onWindowResize);
        },
        _destroy: function() {
            $(window).off('resize.jcarousel', this.onWindowResize);
        },
        _reload: function() {
            this.vertical = this.options('vertical');

            if (this.vertical == null) {
                this.vertical = this.list().height() > this.list().width();
            }

            this.rtl = this.options('rtl');

            if (this.rtl == null) {
                this.rtl = (function(element) {
                    if (('' + element.attr('dir')).toLowerCase() === 'rtl') {
                        return true;
                    }

                    var found = false;

                    element.parents('[dir]').each(function() {
                        if ((/rtl/i).test($(this).attr('dir'))) {
                            found = true;
                            return false;
                        }
                    });

                    return found;
                }(this._element));
            }

            this.lt = this.vertical ? 'top' : 'left';

            // Ensure before closest() call
            this.relative = this.list().css('position') === 'relative';

            // Force list and items reload
            this._list  = null;
            this._items = null;

            var item = this._target && this.index(this._target) >= 0 ?
                           this._target :
                           this.closest();

            // _prepare() needs this here
            this.circular  = this.options('wrap') === 'circular';
            this.underflow = false;

            var props = {'left': 0, 'top': 0};

            if (item.length > 0) {
                this._prepare(item);
                this.list().find('[data-jcarousel-clone]').remove();

                // Force items reload
                this._items = null;

                this.underflow = this._fullyvisible.length >= this.items().length;
                this.circular  = this.circular && !this.underflow;

                props[this.lt] = this._position(item) + 'px';
            }

            this.move(props);

            return this;
        },
        list: function() {
            if (this._list === null) {
                var option = this.options('list');
                this._list = $.isFunction(option) ? option.call(this) : this._element.find(option);
            }

            return this._list;
        },
        items: function() {
            if (this._items === null) {
                var option = this.options('items');
                this._items = ($.isFunction(option) ? option.call(this) : this.list().find(option)).not('[data-jcarousel-clone]');
            }

            return this._items;
        },
        index: function(item) {
            return this.items().index(item);
        },
        closest: function() {
            var self    = this,
                pos     = this.list().position()[this.lt],
                closest = $(), // Ensure we're returning a jQuery instance
                stop    = false,
                lrb     = this.vertical ? 'bottom' : (this.rtl && !this.relative ? 'left' : 'right'),
                width;

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            this.items().each(function() {
                closest = $(this);

                if (stop) {
                    return false;
                }

                var dim = self.dimension(closest);

                pos += dim;

                if (pos >= 0) {
                    width = dim - toFloat(closest.css('margin-' + lrb));

                    if ((Math.abs(pos) - dim + (width / 2)) <= 0) {
                        stop = true;
                    } else {
                        return false;
                    }
                }
            });


            return closest;
        },
        target: function() {
            return this._target;
        },
        first: function() {
            return this._first;
        },
        last: function() {
            return this._last;
        },
        visible: function() {
            return this._visible;
        },
        fullyvisible: function() {
            return this._fullyvisible;
        },
        hasNext: function() {
            if (false === this._trigger('hasnext')) {
                return true;
            }

            var wrap = this.options('wrap'),
                end = this.items().length - 1;

            return end >= 0 && !this.underflow &&
                ((wrap && wrap !== 'first') ||
                    (this.index(this._last) < end) ||
                    (this.tail && !this.inTail)) ? true : false;
        },
        hasPrev: function() {
            if (false === this._trigger('hasprev')) {
                return true;
            }

            var wrap = this.options('wrap');

            return this.items().length > 0 && !this.underflow &&
                ((wrap && wrap !== 'last') ||
                    (this.index(this._first) > 0) ||
                    (this.tail && this.inTail)) ? true : false;
        },
        clipping: function() {
            return this._element['inner' + (this.vertical ? 'Height' : 'Width')]();
        },
        dimension: function(element) {
            return element['outer' + (this.vertical ? 'Height' : 'Width')](true);
        },
        scroll: function(target, animate, callback) {
            if (this.animating) {
                return this;
            }

            if (false === this._trigger('scroll', null, [target, animate])) {
                return this;
            }

            if ($.isFunction(animate)) {
                callback = animate;
                animate  = true;
            }

            var parsed = $.jCarousel.parseTarget(target);

            if (parsed.relative) {
                var end    = this.items().length - 1,
                    scroll = Math.abs(parsed.target),
                    wrap   = this.options('wrap'),
                    current,
                    first,
                    index,
                    start,
                    curr,
                    isVisible,
                    props,
                    i;

                if (parsed.target > 0) {
                    var last = this.index(this._last);

                    if (last >= end && this.tail) {
                        if (!this.inTail) {
                            this._scrollTail(animate, callback);
                        } else {
                            if (wrap === 'both' || wrap === 'last') {
                                this._scroll(0, animate, callback);
                            } else {
                                if ($.isFunction(callback)) {
                                    callback.call(this, false);
                                }
                            }
                        }
                    } else {
                        current = this.index(this._target);

                        if ((this.underflow && current === end && (wrap === 'circular' || wrap === 'both' || wrap === 'last')) ||
                            (!this.underflow && last === end && (wrap === 'both' || wrap === 'last'))) {
                            this._scroll(0, animate, callback);
                        } else {
                            index = current + scroll;

                            if (this.circular && index > end) {
                                i = end;
                                curr = this.items().get(-1);

                                while (i++ < index) {
                                    curr = this.items().eq(0);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().append(curr);

                                    if (!isVisible) {
                                        props = {};
                                        props[this.lt] = this.dimension(curr);
                                        this.moveBy(props);
                                    }

                                    // Force items reload
                                    this._items = null;
                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.min(index, end), animate, callback);
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max((this.index(this._first) - scroll) + 1, 0), animate, callback);
                    } else {
                        first  = this.index(this._first);
                        current = this.index(this._target);
                        start  = this.underflow ? current : first;
                        index  = start - scroll;

                        if (start <= 0 && ((this.underflow && wrap === 'circular') || wrap === 'both' || wrap === 'first')) {
                            this._scroll(end, animate, callback);
                        } else {
                            if (this.circular && index < 0) {
                                i    = index;
                                curr = this.items().get(0);

                                while (i++ < 0) {
                                    curr = this.items().eq(-1);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().prepend(curr);

                                    // Force items reload
                                    this._items = null;

                                    var dim = this.dimension(curr);

                                    props = {};
                                    props[this.lt] = -dim;
                                    this.moveBy(props);

                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.max(index, 0), animate, callback);
                            }
                        }
                    }
                }
            } else {
                this._scroll(parsed.target, animate, callback);
            }

            this._trigger('scrollend');

            return this;
        },
        moveBy: function(properties, opts) {
            var position = this.list().position(),
                multiplier = 1,
                correction = 0;

            if (this.rtl && !this.vertical) {
                multiplier = -1;

                if (this.relative) {
                    correction = this.list().width() - this.clipping();
                }
            }

            if (properties.left) {
                properties.left = (position.left + correction + toFloat(properties.left) * multiplier) + 'px';
            }

            if (properties.top) {
                properties.top = (position.top + correction + toFloat(properties.top) * multiplier) + 'px';
            }

            return this.move(properties, opts);
        },
        move: function(properties, opts) {
            opts = opts || {};

            var option       = this.options('transitions'),
                transitions  = !!option,
                transforms   = !!option.transforms,
                transforms3d = !!option.transforms3d,
                duration     = opts.duration || 0,
                list         = this.list();

            if (!transitions && duration > 0) {
                list.animate(properties, opts);
                return;
            }

            var complete = opts.complete || $.noop,
                css = {};

            if (transitions) {
                var backup = list.css(['transitionDuration', 'transitionTimingFunction', 'transitionProperty']),
                    oldComplete = complete;

                complete = function() {
                    $(this).css(backup);
                    oldComplete.call(this);
                };
                css = {
                    transitionDuration: (duration > 0 ? duration / 1000 : 0) + 's',
                    transitionTimingFunction: option.easing || opts.easing,
                    transitionProperty: duration > 0 ? (function() {
                        if (transforms || transforms3d) {
                            // We have to use 'all' because jQuery doesn't prefix
                            // css values, like transition-property: transform;
                            return 'all';
                        }

                        return properties.left ? 'left' : 'top';
                    })() : 'none',
                    transform: 'none'
                };
            }

            if (transforms3d) {
                css.transform = 'translate3d(' + (properties.left || 0) + ',' + (properties.top || 0) + ',0)';
            } else if (transforms) {
                css.transform = 'translate(' + (properties.left || 0) + ',' + (properties.top || 0) + ')';
            } else {
                $.extend(css, properties);
            }

            if (transitions && duration > 0) {
                list.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', complete);
            }

            list.css(css);

            if (duration <= 0) {
                list.each(function() {
                    complete.call(this);
                });
            }
        },
        _scroll: function(item, animate, callback) {
            if (this.animating) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            if (typeof item !== 'object') {
                item = this.items().eq(item);
            } else if (typeof item.jquery === 'undefined') {
                item = $(item);
            }

            if (item.length === 0) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            this.inTail = false;

            this._prepare(item);

            var pos     = this._position(item),
                currPos = this.list().position()[this.lt];

            if (pos === currPos) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._animate(properties, animate, callback);

            return this;
        },
        _scrollTail: function(animate, callback) {
            if (this.animating || !this.tail) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var pos = this.list().position()[this.lt];

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            if (this.rtl && !this.vertical) {
                pos += this.tail;
            } else {
                pos -= this.tail;
            }

            this.inTail = true;

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._update({
                target:       this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            });

            this._animate(properties, animate, callback);

            return this;
        },
        _animate: function(properties, animate, callback) {
            callback = callback || $.noop;

            if (false === this._trigger('animate')) {
                callback.call(this, false);
                return this;
            }

            this.animating = true;

            var animation = this.options('animation'),
                complete  = $.proxy(function() {
                    this.animating = false;

                    var c = this.list().find('[data-jcarousel-clone]');

                    if (c.length > 0) {
                        c.remove();
                        this._reload();
                    }

                    this._trigger('animateend');

                    callback.call(this, true);
                }, this);

            var opts = typeof animation === 'object' ?
                           $.extend({}, animation) :
                           {duration: animation},
                oldComplete = opts.complete || $.noop;

            if (animate === false) {
                opts.duration = 0;
            } else if (typeof $.fx.speeds[opts.duration] !== 'undefined') {
                opts.duration = $.fx.speeds[opts.duration];
            }

            opts.complete = function() {
                complete();
                oldComplete.call(this);
            };

            this.move(properties, opts);

            return this;
        },
        _prepare: function(item) {
            var index  = this.index(item),
                idx    = index,
                wh     = this.dimension(item),
                clip   = this.clipping(),
                lrb    = this.vertical ? 'bottom' : (this.rtl ? 'left'  : 'right'),
                center = this.options('center'),
                update = {
                    target:       item,
                    first:        item,
                    last:         item,
                    visible:      item,
                    fullyvisible: wh <= clip ? item : $()
                },
                curr,
                isVisible,
                margin,
                dim;

            if (center) {
                wh /= 2;
                clip /= 2;
            }

            if (wh < clip) {
                while (true) {
                    curr = this.items().eq(++idx);

                    if (curr.length === 0) {
                        if (!this.circular) {
                            break;
                        }

                        curr = this.items().eq(0);

                        if (item.get(0) === curr.get(0)) {
                            break;
                        }

                        isVisible = this._visible.index(curr) >= 0;

                        if (isVisible) {
                            curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                        }

                        this.list().append(curr);

                        if (!isVisible) {
                            var props = {};
                            props[this.lt] = this.dimension(curr);
                            this.moveBy(props);
                        }

                        // Force items reload
                        this._items = null;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.last    = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            if (!this.circular && !center && wh < clip) {
                idx = index;

                while (true) {
                    if (--idx < 0) {
                        break;
                    }

                    curr = this.items().eq(idx);

                    if (curr.length === 0) {
                        break;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.first   = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            this._update(update);

            this.tail = 0;

            if (!center &&
                this.options('wrap') !== 'circular' &&
                this.options('wrap') !== 'custom' &&
                this.index(update.last) === (this.items().length - 1)) {

                // Remove right/bottom margin from total width
                wh -= toFloat(update.last.css('margin-' + lrb));

                if (wh > clip) {
                    this.tail = wh - clip;
                }
            }

            return this;
        },
        _position: function(item) {
            var first  = this._first,
                pos    = first.position()[this.lt],
                center = this.options('center'),
                centerOffset = center ? (this.clipping() / 2) - (this.dimension(first) / 2) : 0;

            if (this.rtl && !this.vertical) {
                if (this.relative) {
                    pos -= this.list().width() - this.dimension(first);
                } else {
                    pos -= this.clipping() - this.dimension(first);
                }

                pos += centerOffset;
            } else {
                pos -= centerOffset;
            }

            if (!center &&
                (this.index(item) > this.index(first) || this.inTail) &&
                this.tail) {
                pos = this.rtl && !this.vertical ? pos - this.tail : pos + this.tail;
                this.inTail = true;
            } else {
                this.inTail = false;
            }

            return -pos;
        },
        _update: function(update) {
            var self = this,
                current = {
                    target:       this._target || $(),
                    first:        this._first || $(),
                    last:         this._last || $(),
                    visible:      this._visible || $(),
                    fullyvisible: this._fullyvisible || $()
                },
                back = this.index(update.first || current.first) < this.index(current.first),
                key,
                doUpdate = function(key) {
                    var elIn  = [],
                        elOut = [];

                    update[key].each(function() {
                        if (current[key].index(this) < 0) {
                            elIn.push(this);
                        }
                    });

                    current[key].each(function() {
                        if (update[key].index(this) < 0) {
                            elOut.push(this);
                        }
                    });

                    if (back) {
                        elIn = elIn.reverse();
                    } else {
                        elOut = elOut.reverse();
                    }

                    self._trigger(key + 'in', $(elIn));
                    self._trigger(key + 'out', $(elOut));

                    self['_' + key] = update[key];
                };

            for (key in update) {
                doUpdate(key);
            }

            return this;
        }
    });
}(jQuery, window));

(function($) {
    'use strict';

    $.jcarousel.fn.scrollIntoView = function(target, animate, callback) {
        var parsed = $.jCarousel.parseTarget(target),
            first  = this.index(this._fullyvisible.first()),
            last   = this.index(this._fullyvisible.last()),
            index;

        if (parsed.relative) {
            index = parsed.target < 0 ? Math.max(0, first + parsed.target) : last + parsed.target;
        } else {
            index = typeof parsed.target !== 'object' ? parsed.target : this.index(parsed.target);
        }

        if (index < first) {
            return this.scroll(index, animate, callback);
        }

        if (index >= first && index <= last) {
            if ($.isFunction(callback)) {
                callback.call(this, false);
            }

            return this;
        }

        var items = this.items(),
            clip = this.clipping(),
            lrb  = this.vertical ? 'bottom' : (this.rtl ? 'left'  : 'right'),
            wh   = 0,
            curr;

        while (true) {
            curr = items.eq(index);

            if (curr.length === 0) {
                break;
            }

            wh += this.dimension(curr);

            if (wh >= clip) {
                var margin = parseFloat(curr.css('margin-' + lrb)) || 0;
                if ((wh - margin) !== clip) {
                    index++;
                }
                break;
            }

            if (index <= 0) {
                break;
            }

            index--;
        }

        return this.scroll(index, animate, callback);
    };
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselControl', {
        _options: {
            target: '+=1',
            event:  'click',
            method: 'scroll'
        },
        _active: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onEvent = $.proxy(function(e) {
                e.preventDefault();

                var method = this.options('method');

                if ($.isFunction(method)) {
                    method.call(this);
                } else {
                    this.carousel()
                        .jcarousel(this.options('method'), this.options('target'));
                }
            }, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend jcarousel:scrollend', this.onReload);

            this._element
                .on(this.options('event') + '.jcarouselcontrol', this.onEvent);

            this._reload();
        },
        _destroy: function() {
            this._element
                .off('.jcarouselcontrol', this.onEvent);

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend jcarousel:scrollend', this.onReload);
        },
        _reload: function() {
            var parsed   = $.jCarousel.parseTarget(this.options('target')),
                carousel = this.carousel(),
                active;

            if (parsed.relative) {
                active = carousel
                    .jcarousel(parsed.target > 0 ? 'hasNext' : 'hasPrev');
            } else {
                var target = typeof parsed.target !== 'object' ?
                                carousel.jcarousel('items').eq(parsed.target) :
                                parsed.target;

                active = carousel.jcarousel('target').index(target) >= 0;
            }

            if (this._active !== active) {
                this._trigger(active ? 'active' : 'inactive');
                this._active = active;
            }

            return this;
        }
    });
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselPagination', {
        _options: {
            perPage: null,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            },
            event:  'click',
            method: 'scroll'
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onScroll = $.proxy(this._update, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend', this.onReload)
                .on('jcarousel:scrollend', this.onScroll);

            this._reload();
        },
        _destroy: function() {
            this._clear();

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend', this.onReload)
                .off('jcarousel:scrollend', this.onScroll);

            this._carouselItems = null;
        },
        _reload: function() {
            var perPage = this.options('perPage');

            this._pages = {};
            this._items = {};

            // Calculate pages
            if ($.isFunction(perPage)) {
                perPage = perPage.call(this);
            }

            if (perPage == null) {
                this._pages = this._calculatePages();
            } else {
                var pp    = parseInt(perPage, 10) || 0,
                    items = this._getCarouselItems(),
                    page  = 1,
                    i     = 0,
                    curr;

                while (true) {
                    curr = items.eq(i++);

                    if (curr.length === 0) {
                        break;
                    }

                    if (!this._pages[page]) {
                        this._pages[page] = curr;
                    } else {
                        this._pages[page] = this._pages[page].add(curr);
                    }

                    if (i % pp === 0) {
                        page++;
                    }
                }
            }

            this._clear();

            var self     = this,
                carousel = this.carousel().data('jcarousel'),
                element  = this._element,
                item     = this.options('item'),
                numCarouselItems = this._getCarouselItems().length;

            $.each(this._pages, function(page, carouselItems) {
                var currItem = self._items[page] = $(item.call(self, page, carouselItems));

                currItem.on(self.options('event') + '.jcarouselpagination', $.proxy(function() {
                    var target = carouselItems.eq(0);

                    // If circular wrapping enabled, ensure correct scrolling direction
                    if (carousel.circular) {
                        var currentIndex = carousel.index(carousel.target()),
                            newIndex     = carousel.index(target);

                        if (parseFloat(page) > parseFloat(self._currentPage)) {
                            if (newIndex < currentIndex) {
                                target = '+=' + (numCarouselItems - currentIndex + newIndex);
                            }
                        } else {
                            if (newIndex > currentIndex) {
                                target = '-=' + (currentIndex + (numCarouselItems - newIndex));
                            }
                        }
                    }

                    carousel[this.options('method')](target);
                }, self));

                element.append(currItem);
            });

            this._update();
        },
        _update: function() {
            var target = this.carousel().jcarousel('target'),
                currentPage;

            $.each(this._pages, function(page, carouselItems) {
                carouselItems.each(function() {
                    if (target.is(this)) {
                        currentPage = page;
                        return false;
                    }
                });

                if (currentPage) {
                    return false;
                }
            });

            if (this._currentPage !== currentPage) {
                this._trigger('inactive', this._items[this._currentPage]);
                this._trigger('active', this._items[currentPage]);
            }

            this._currentPage = currentPage;
        },
        items: function() {
            return this._items;
        },
        reloadCarouselItems: function() {
            this._carouselItems = null;
            return this;
        },
        _clear: function() {
            this._element.empty();
            this._currentPage = null;
        },
        _calculatePages: function() {
            var carousel = this.carousel().data('jcarousel'),
                items    = this._getCarouselItems(),
                clip     = carousel.clipping(),
                wh       = 0,
                idx      = 0,
                page     = 1,
                pages    = {},
                curr;

            while (true) {
                curr = items.eq(idx++);

                if (curr.length === 0) {
                    break;
                }

                if (!pages[page]) {
                    pages[page] = curr;
                } else {
                    pages[page] = pages[page].add(curr);
                }

                wh += carousel.dimension(curr);

                if (wh >= clip) {
                    page++;
                    wh = 0;
                }
            }

            return pages;
        },
        _getCarouselItems: function() {
            if (!this._carouselItems) {
                this._carouselItems = this.carousel().jcarousel('items');
            }

            return this._carouselItems;
        }
    });
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselAutoscroll', {
        _options: {
            target:    '+=1',
            interval:  3000,
            autostart: true
        },
        _timer: null,
        _init: function () {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);

            this.onAnimateEnd = $.proxy(this.start, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy);

            if (this.options('autostart')) {
                this.start();
            }
        },
        _destroy: function() {
            this.stop();
            this.carousel()
                .off('jcarousel:destroy', this.onDestroy);
        },
        start: function() {
            this.stop();

            this.carousel()
                .one('jcarousel:animateend', this.onAnimateEnd);

            this._timer = setTimeout($.proxy(function() {
                this.carousel().jcarousel('scroll', this.options('target'));
            }, this), this.options('interval'));

            return this;
        },
        stop: function() {
            if (this._timer) {
                this._timer = clearTimeout(this._timer);
            }

            this.carousel()
                .off('jcarousel:animateend', this.onAnimateEnd);

            return this;
        }
    });
}(jQuery));

;$(function ()
{
    var caro = $(".jcarousel").jcarousel({
        wrap: 'circular'
    });
    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function ()
        {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function ()
        {
            $(this).addClass('inactive');
        })
        .jcarouselControl(
        {
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function ()
        {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function ()
        {
            $(this).addClass('inactive');
        })
        .jcarouselControl(
        {
            target: '+=1'
        });
    $(".jcarousel-pagination")
        .on('jcarouselpagination:active', 'a', function ()
        {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function ()
        {
            $(this).removeClass('active');
        })
        .jcarouselPagination(
        {
            carousel: caro
        });
});

;/*
 *  jQuery dotdotdot 1.6.16
 *
 *  Copyright (c) Fred Heusschen
 *  www.frebsite.nl
 *
 *  Plugin website:
 *  dotdotdot.frebsite.nl
 *
 *  Dual licensed under the MIT and GPL licenses.
 *  http://en.wikipedia.org/wiki/MIT_License
 *  http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

;/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.6.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
   Please attribute the author if you use it. */

/* Display a countdown timer.
   Attach it with options like:
   $('div selector').countdown(
       {until: new Date(2009, 1 - 1, 1, 0, 0, 0), onExpiry: happyNewYear}); */

(function($) { // Hide scope, no $ conflict

/* Countdown manager. */
function Countdown() {
    this.regional = []; // Available regional settings, indexed by language code
    this.regional[''] = { // Default regional settings
        // The display texts for the counters
        labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
        // The display texts for the counters if only one
        labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
        compactLabels: ['y', 'm', 'w', 'd'], // The compact texts for the counters
        whichLabels: null, // Function to determine which labels to use
        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // The digits to display
        timeSeparator: ':', // Separator for time periods
        isRTL: false // True for right-to-left languages, false for left-to-right
    };
    this._defaults = {
        br: '<br/>',
        until: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
            // or numeric for seconds offset, or string for unit offset(s):
            // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
        since: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count up from
            // or numeric for seconds offset, or string for unit offset(s):
            // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
        timezone: null, // The timezone (hours or minutes from GMT) for the target times,
            // or null for client local
        serverSync: null, // A function to retrieve the current server time for synchronisation
        format: 'dHMS', // Format for display - upper case for always, lower case only if non-zero,
            // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
        layout: '', // Build your own layout for the countdown
        compact: false, // True to display in a compact format, false for an expanded one
        significant: 0, // The number of periods with values to show, zero for all
        description: '', // The description displayed for the countdown
        expiryUrl: '', // A URL to load upon expiry, replacing the current page
        expiryText: '', // Text to display upon expiry, replacing the countdown
        alwaysExpire: false, // True to trigger onExpiry even if never counted down
        onExpiry: null, // Callback when the countdown expires -
            // receives no parameters and 'this' is the containing division
        onTick: null, // Callback when the countdown is updated -
            // receives int[7] being the breakdown by period (based on format)
            // and 'this' is the containing division
        tickInterval: 1 // Interval (seconds) between onTick callbacks
    };
    $.extend(this._defaults, this.regional['']);
    this._serverSyncs = [];
    // Shared timer for all countdowns
    function timerCallBack(timestamp) {
        var drawStart = (timestamp < 1e12 ? // New HTML5 high resolution timer
            (drawStart = performance.now ?
            (performance.now() + performance.timing.navigationStart) : Date.now()) :
            // Integer milliseconds since unix epoch
            timestamp || new Date().getTime());
        if (drawStart - animationStartTime >= 1000) {
            plugin._updateTargets();
            animationStartTime = drawStart;
        }
        requestAnimationFrame(timerCallBack);
    }
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
        // This is when we expect a fall-back to setInterval as it's much more fluid
    var animationStartTime = 0;
    if (!requestAnimationFrame || $.noRequestAnimationFrame) {
        $.noRequestAnimationFrame = null;
        setInterval(function() { plugin._updateTargets(); }, 980); // Fall back to good old setInterval
    }
    else {
        animationStartTime = window.animationStartTime ||
            window.webkitAnimationStartTime || window.mozAnimationStartTime ||
            window.oAnimationStartTime || window.msAnimationStartTime || new Date().getTime();
        requestAnimationFrame(timerCallBack);
    }
}

var Y = 0; // Years
var O = 1; // Months
var W = 2; // Weeks
var D = 3; // Days
var H = 4; // Hours
var M = 5; // Minutes
var S = 6; // Seconds

$.extend(Countdown.prototype, {
    /* Class name added to elements to indicate already configured with countdown. */
    markerClassName: 'hasCountdown',
    /* Name of the data property for instance settings. */
    propertyName: 'countdown',

    /* Class name for the right-to-left marker. */
    _rtlClass: 'countdown_rtl',
    /* Class name for the countdown section marker. */
    _sectionClass: 'countdown_section',
    /* Class name for the period amount marker. */
    _amountClass: 'countdown_amount',
    /* Class name for the countdown row marker. */
    _rowClass: 'countdown_row',
    /* Class name for the holding countdown marker. */
    _holdingClass: 'countdown_holding',
    /* Class name for the showing countdown marker. */
    _showClass: 'countdown_show',
    /* Class name for the description marker. */
    _descrClass: 'countdown_descr',

    /* List of currently active countdown targets. */
    _timerTargets: [],

    /* Override the default settings for all instances of the countdown widget.
       @param  options  (object) the new settings to use as defaults */
    setDefaults: function(options) {
        this._resetExtraLabels(this._defaults, options);
        $.extend(this._defaults, options || {});
    },

    /* Convert a date/time to UTC.
       @param  tz     (number) the hour or minute offset from GMT, e.g. +9, -360
       @param  year   (Date) the date/time in that timezone or
                      (number) the year in that timezone
       @param  month  (number, optional) the month (0 - 11) (omit if year is a Date)
       @param  day    (number, optional) the day (omit if year is a Date)
       @param  hours  (number, optional) the hour (omit if year is a Date)
       @param  mins   (number, optional) the minute (omit if year is a Date)
       @param  secs   (number, optional) the second (omit if year is a Date)
       @param  ms     (number, optional) the millisecond (omit if year is a Date)
       @return  (Date) the equivalent UTC date/time */
    UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {
        if (typeof year == 'object' && year.constructor == Date) {
            ms = year.getMilliseconds();
            secs = year.getSeconds();
            mins = year.getMinutes();
            hours = year.getHours();
            day = year.getDate();
            month = year.getMonth();
            year = year.getFullYear();
        }
        var d = new Date();
        d.setUTCFullYear(year);
        d.setUTCDate(1);
        d.setUTCMonth(month || 0);
        d.setUTCDate(day || 1);
        d.setUTCHours(hours || 0);
        d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
        d.setUTCSeconds(secs || 0);
        d.setUTCMilliseconds(ms || 0);
        return d;
    },

    /* Convert a set of periods into seconds.
       Averaged for months and years.
       @param  periods  (number[7]) the periods per year/month/week/day/hour/minute/second
       @return  (number) the corresponding number of seconds */
    periodsToSeconds: function(periods) {
        return periods[0] * 31557600 + periods[1] * 2629800 + periods[2] * 604800 +
            periods[3] * 86400 + periods[4] * 3600 + periods[5] * 60 + periods[6];
    },

    /* Attach the countdown widget to a div.
       @param  target   (element) the containing division
       @param  options  (object) the initial settings for the countdown */
    _attachPlugin: function(target, options) {
        target = $(target);
        if (target.hasClass(this.markerClassName)) {
            return;
        }
        var inst = {options: $.extend({}, this._defaults), _periods: [0, 0, 0, 0, 0, 0, 0]};
        target.addClass(this.markerClassName).data(this.propertyName, inst);
        this._optionPlugin(target, options);
    },

    /* Add a target to the list of active ones.
       @param  target  (element) the countdown target */
    _addTarget: function(target) {
        if (!this._hasTarget(target)) {
            this._timerTargets.push(target);
        }
    },

    /* See if a target is in the list of active ones.
       @param  target  (element) the countdown target
       @return  (boolean) true if present, false if not */
    _hasTarget: function(target) {
        return ($.inArray(target, this._timerTargets) > -1);
    },

    /* Remove a target from the list of active ones.
       @param  target  (element) the countdown target */
    _removeTarget: function(target) {
        this._timerTargets = $.map(this._timerTargets,
            function(value) { return (value == target ? null : value); }); // delete entry
    },

    /* Update each active timer target. */
    _updateTargets: function() {
        for (var i = this._timerTargets.length - 1; i >= 0; i--) {
            this._updateCountdown(this._timerTargets[i]);
        }
    },

    /* Reconfigure the settings for a countdown div.
       @param  target   (element) the control to affect
       @param  options  (object) the new options for this instance or
                        (string) an individual property name
       @param  value    (any) the individual property value (omit if options
                        is an object or to retrieve the value of a setting)
       @return  (any) if retrieving a value */
    _optionPlugin: function(target, options, value) {
        target = $(target);
        var inst = target.data(this.propertyName);
        if (!options || (typeof options == 'string' && value == null)) { // Get option
            var name = options;
            options = (inst || {}).options;
            return (options && name ? options[name] : options);
        }

        if (!target.hasClass(this.markerClassName)) {
            return;
        }
        options = options || {};
        if (typeof options == 'string') {
            var name = options;
            options = {};
            options[name] = value;
        }
        this._resetExtraLabels(inst.options, options);
        $.extend(inst.options, options);
        this._adjustSettings(target, inst);
        var now = new Date();
        if ((inst._since && inst._since < now) || (inst._until && inst._until > now)) {
            this._addTarget(target[0]);
        }
        this._updateCountdown(target, inst);
    },

    /* Redisplay the countdown with an updated display.
       @param  target  (jQuery) the containing division
       @param  inst    (object) the current settings for this instance */
    _updateCountdown: function(target, inst) {
        var $target = $(target);
        inst = inst || $target.data(this.propertyName);
        if (!inst) {
            return;
        }
        $target.html(this._generateHTML(inst)).toggleClass(this._rtlClass, inst.options.isRTL);
        if ($.isFunction(inst.options.onTick)) {
            var periods = inst._hold != 'lap' ? inst._periods :
                this._calculatePeriods(inst, inst._show, inst.options.significant, new Date());
            if (inst.options.tickInterval == 1 ||
                    this.periodsToSeconds(periods) % inst.options.tickInterval == 0) {
                inst.options.onTick.apply(target, [periods]);
            }
        }
        var expired = inst._hold != 'pause' &&
            (inst._since ? inst._now.getTime() < inst._since.getTime() :
            inst._now.getTime() >= inst._until.getTime());
        if (expired && !inst._expiring) {
            inst._expiring = true;
            if (this._hasTarget(target) || inst.options.alwaysExpire) {
                this._removeTarget(target);
                if ($.isFunction(inst.options.onExpiry)) {
                    inst.options.onExpiry.apply(target, []);
                }
                if (inst.options.expiryText) {
                    var layout = inst.options.layout;
                    inst.options.layout = inst.options.expiryText;
                    this._updateCountdown(target, inst);
                    inst.options.layout = layout;
                }
                if (inst.options.expiryUrl) {
                    window.location = inst.options.expiryUrl;
                }
            }
            inst._expiring = false;
        }
        else if (inst._hold == 'pause') {
            this._removeTarget(target);
        }
        $target.data(this.propertyName, inst);
    },

    /* Reset any extra labelsn and compactLabelsn entries if changing labels.
       @param  base     (object) the options to be updated
       @param  options  (object) the new option values */
    _resetExtraLabels: function(base, options) {
        var changingLabels = false;
        for (var n in options) {
            if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
                changingLabels = true;
                break;
            }
        }
        if (changingLabels) {
            for (var n in base) { // Remove custom numbered labels
                if (n.match(/[Ll]abels[02-9]/)) {
                    base[n] = null;
                }
            }
        }
    },

    /* Calculate interal settings for an instance.
       @param  target  (element) the containing division
       @param  inst    (object) the current settings for this instance */
    _adjustSettings: function(target, inst) {
        var now;
        var serverOffset = 0;
        var serverEntry = null;
        for (var i = 0; i < this._serverSyncs.length; i++) {
            if (this._serverSyncs[i][0] == inst.options.serverSync) {
                serverEntry = this._serverSyncs[i][1];
                break;
            }
        }
        if (serverEntry != null) {
            serverOffset = (inst.options.serverSync ? serverEntry : 0);
            now = new Date();
        }
        else {
            var serverResult = ($.isFunction(inst.options.serverSync) ?
                inst.options.serverSync.apply(target, []) : null);
            now = new Date();
            serverOffset = (serverResult ? now.getTime() - serverResult.getTime() : 0);
            this._serverSyncs.push([inst.options.serverSync, serverOffset]);
        }
        var timezone = inst.options.timezone;
        timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);
        inst._since = inst.options.since;
        if (inst._since != null) {
            inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
            if (inst._since && serverOffset) {
                inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);
            }
        }
        inst._until = this.UTCDate(timezone, this._determineTime(inst.options.until, now));
        if (serverOffset) {
            inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);
        }
        inst._show = this._determineShow(inst);
    },

    /* Remove the countdown widget from a div.
       @param  target  (element) the containing division */
    _destroyPlugin: function(target) {
        target = $(target);
        if (!target.hasClass(this.markerClassName)) {
            return;
        }
        this._removeTarget(target[0]);
        target.removeClass(this.markerClassName).empty().removeData(this.propertyName);
    },

    /* Pause a countdown widget at the current time.
       Stop it running but remember and display the current time.
       @param  target  (element) the containing division */
    _pausePlugin: function(target) {
        this._hold(target, 'pause');
    },

    /* Pause a countdown widget at the current time.
       Stop the display but keep the countdown running.
       @param  target  (element) the containing division */
    _lapPlugin: function(target) {
        this._hold(target, 'lap');
    },

    /* Resume a paused countdown widget.
       @param  target  (element) the containing division */
    _resumePlugin: function(target) {
        this._hold(target, null);
    },

    /* Pause or resume a countdown widget.
       @param  target  (element) the containing division
       @param  hold    (string) the new hold setting */
    _hold: function(target, hold) {
        var inst = $.data(target, this.propertyName);
        if (inst) {
            if (inst._hold == 'pause' && !hold) {
                inst._periods = inst._savePeriods;
                var sign = (inst._since ? '-' : '+');
                inst[inst._since ? '_since' : '_until'] =
                    this._determineTime(sign + inst._periods[0] + 'y' +
                        sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' +
                        sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' +
                        sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
                this._addTarget(target);
            }
            inst._hold = hold;
            inst._savePeriods = (hold == 'pause' ? inst._periods : null);
            $.data(target, this.propertyName, inst);
            this._updateCountdown(target, inst);
        }
    },

    /* Return the current time periods.
       @param  target  (element) the containing division
       @return  (number[7]) the current periods for the countdown */
    _getTimesPlugin: function(target) {
        var inst = $.data(target, this.propertyName);
        return (!inst ? null : (!inst._hold ? inst._periods :
            this._calculatePeriods(inst, inst._show, inst.options.significant, new Date())));
    },

    /* A time may be specified as an exact value or a relative one.
       @param  setting      (string or number or Date) - the date/time value
                            as a relative or absolute value
       @param  defaultTime  (Date) the date/time to use if no other is supplied
       @return  (Date) the corresponding date/time */
    _determineTime: function(setting, defaultTime) {
        var offsetNumeric = function(offset) { // e.g. +300, -2
            var time = new Date();
            time.setTime(time.getTime() + offset * 1000);
            return time;
        };
        var offsetString = function(offset) { // e.g. '+2d', '-4w', '+3h +30m'
            offset = offset.toLowerCase();
            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth();
            var day = time.getDate();
            var hour = time.getHours();
            var minute = time.getMinutes();
            var second = time.getSeconds();
            var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
            var matches = pattern.exec(offset);
            while (matches) {
                switch (matches[2] || 's') {
                    case 's': second += parseInt(matches[1], 10); break;
                    case 'm': minute += parseInt(matches[1], 10); break;
                    case 'h': hour += parseInt(matches[1], 10); break;
                    case 'd': day += parseInt(matches[1], 10); break;
                    case 'w': day += parseInt(matches[1], 10) * 7; break;
                    case 'o':
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, plugin._getDaysInMonth(year, month));
                        break;
                    case 'y':
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, plugin._getDaysInMonth(year, month));
                        break;
                }
                matches = pattern.exec(offset);
            }
            return new Date(year, month, day, hour, minute, second, 0);
        };
        var time = (setting == null ? defaultTime :
            (typeof setting == 'string' ? offsetString(setting) :
            (typeof setting == 'number' ? offsetNumeric(setting) : setting)));
        if (time) time.setMilliseconds(0);
        return time;
    },

    /* Determine the number of days in a month.
       @param  year   (number) the year
       @param  month  (number) the month
       @return  (number) the days in that month */
    _getDaysInMonth: function(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    },

    /* Determine which set of labels should be used for an amount.
       @param  num  (number) the amount to be displayed
       @return  (number) the set of labels to be used for this amount */
    _normalLabels: function(num) {
        return num;
    },

    /* Generate the HTML to display the countdown widget.
       @param  inst  (object) the current settings for this instance
       @return  (string) the new HTML for the countdown display */
    _generateHTML: function(inst) {
        var self = this;
        // Determine what to show
        inst._periods = (inst._hold ? inst._periods :
            this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()));
        // Show all 'asNeeded' after first non-zero value
        var shownNonZero = false;
        var showCount = 0;
        var sigCount = inst.options.significant;
        var show = $.extend({}, inst._show);
        for (var period = Y; period <= S; period++) {
            shownNonZero |= (inst._show[period] == '?' && inst._periods[period] > 0);
            show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);
            showCount += (show[period] ? 1 : 0);
            sigCount -= (inst._periods[period] > 0 ? 1 : 0);
        }
        var showSignificant = [false, false, false, false, false, false, false];
        for (var period = S; period >= Y; period--) { // Determine significant periods
            if (inst._show[period]) {
                if (inst._periods[period]) {
                    showSignificant[period] = true;
                }
                else {
                    showSignificant[period] = sigCount > 0;
                    sigCount--;
                }
            }
        }
        var labels = (inst.options.compact ? inst.options.compactLabels : inst.options.labels);
        var whichLabels = inst.options.whichLabels || this._normalLabels;
        var showCompact = function(period) {
            var labelsNum = inst.options['compactLabels' + whichLabels(inst._periods[period])];
            return (show[period] ? self._translateDigits(inst, inst._periods[period]) +
                (labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');
        };
        var showFull = function(period) {
            var labelsNum = inst.options['labels' + whichLabels(inst._periods[period])];
            return ((!inst.options.significant && show[period]) ||
                (inst.options.significant && showSignificant[period]) ?
                '<span class="' + plugin._sectionClass + '">' +
                '<span class="' + plugin._amountClass + '">' +
                self._translateDigits(inst, inst._periods[period]) + '</span>' + inst.options.br +
                (labelsNum ? labelsNum[period] : labels[period]) + '</span>' : '');
        };
        return (inst.options.layout ? this._buildLayout(inst, show, inst.options.layout,
            inst.options.compact, inst.options.significant, showSignificant) :
            ((inst.options.compact ? // Compact version
            '<span class="' + this._rowClass + ' ' + this._amountClass +
            (inst._hold ? ' ' + this._holdingClass : '') + '">' +
            showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) +
            (show[H] ? this._minDigits(inst, inst._periods[H], 2) : '') +
            (show[M] ? (show[H] ? inst.options.timeSeparator : '') +
            this._minDigits(inst, inst._periods[M], 2) : '') +
            (show[S] ? (show[H] || show[M] ? inst.options.timeSeparator : '') +
            this._minDigits(inst, inst._periods[S], 2) : '') :
            // Full version
            '<span class="' + this._rowClass + ' ' + this._showClass + (inst.options.significant || showCount) +
            (inst._hold ? ' ' + this._holdingClass : '') + '">' +
            showFull(Y) + showFull(O) + showFull(W) + showFull(D) +
            showFull(H) + showFull(M) + showFull(S)) + '</span>' +
            (inst.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' +
            inst.options.description + '</span>' : '')));
    },

    /* Construct a custom layout.
       @param  inst             (object) the current settings for this instance
       @param  show             (string[7]) flags indicating which periods are requested
       @param  layout           (string) the customised layout
       @param  compact          (boolean) true if using compact labels
       @param  significant      (number) the number of periods with values to show, zero for all
       @param  showSignificant  (boolean[7]) other periods to show for significance
       @return  (string) the custom HTML */
    _buildLayout: function(inst, show, layout, compact, significant, showSignificant) {
        var labels = inst.options[compact ? 'compactLabels' : 'labels'];
        var whichLabels = inst.options.whichLabels || this._normalLabels;
        var labelFor = function(index) {
            return (inst.options[(compact ? 'compactLabels' : 'labels') +
                whichLabels(inst._periods[index])] || labels)[index];
        };
        var digit = function(value, position) {
            return inst.options.digits[Math.floor(value / position) % 10];
        };
        var subs = {desc: inst.options.description, sep: inst.options.timeSeparator,
            yl: labelFor(Y), yn: this._minDigits(inst, inst._periods[Y], 1),
            ynn: this._minDigits(inst, inst._periods[Y], 2),
            ynnn: this._minDigits(inst, inst._periods[Y], 3), y1: digit(inst._periods[Y], 1),
            y10: digit(inst._periods[Y], 10), y100: digit(inst._periods[Y], 100),
            y1000: digit(inst._periods[Y], 1000),
            ol: labelFor(O), on: this._minDigits(inst, inst._periods[O], 1),
            onn: this._minDigits(inst, inst._periods[O], 2),
            onnn: this._minDigits(inst, inst._periods[O], 3), o1: digit(inst._periods[O], 1),
            o10: digit(inst._periods[O], 10), o100: digit(inst._periods[O], 100),
            o1000: digit(inst._periods[O], 1000),
            wl: labelFor(W), wn: this._minDigits(inst, inst._periods[W], 1),
            wnn: this._minDigits(inst, inst._periods[W], 2),
            wnnn: this._minDigits(inst, inst._periods[W], 3), w1: digit(inst._periods[W], 1),
            w10: digit(inst._periods[W], 10), w100: digit(inst._periods[W], 100),
            w1000: digit(inst._periods[W], 1000),
            dl: labelFor(D), dn: this._minDigits(inst, inst._periods[D], 1),
            dnn: this._minDigits(inst, inst._periods[D], 2),
            dnnn: this._minDigits(inst, inst._periods[D], 3), d1: digit(inst._periods[D], 1),
            d10: digit(inst._periods[D], 10), d100: digit(inst._periods[D], 100),
            d1000: digit(inst._periods[D], 1000),
            hl: labelFor(H), hn: this._minDigits(inst, inst._periods[H], 1),
            hnn: this._minDigits(inst, inst._periods[H], 2),
            hnnn: this._minDigits(inst, inst._periods[H], 3), h1: digit(inst._periods[H], 1),
            h10: digit(inst._periods[H], 10), h100: digit(inst._periods[H], 100),
            h1000: digit(inst._periods[H], 1000),
            ml: labelFor(M), mn: this._minDigits(inst, inst._periods[M], 1),
            mnn: this._minDigits(inst, inst._periods[M], 2),
            mnnn: this._minDigits(inst, inst._periods[M], 3), m1: digit(inst._periods[M], 1),
            m10: digit(inst._periods[M], 10), m100: digit(inst._periods[M], 100),
            m1000: digit(inst._periods[M], 1000),
            sl: labelFor(S), sn: this._minDigits(inst, inst._periods[S], 1),
            snn: this._minDigits(inst, inst._periods[S], 2),
            snnn: this._minDigits(inst, inst._periods[S], 3), s1: digit(inst._periods[S], 1),
            s10: digit(inst._periods[S], 10), s100: digit(inst._periods[S], 100),
            s1000: digit(inst._periods[S], 1000)};
        var html = layout;
        // Replace period containers: {p<}...{p>}
        for (var i = Y; i <= S; i++) {
            var period = 'yowdhms'.charAt(i);
            var re = new RegExp('\\{' + period + '<\\}(.*)\\{' + period + '>\\}', 'g');
            html = html.replace(re, ((!significant && show[i]) ||
                (significant && showSignificant[i]) ? '$1' : ''));
        }
        // Replace period values: {pn}
        $.each(subs, function(n, v) {
            var re = new RegExp('\\{' + n + '\\}', 'g');
            html = html.replace(re, v);
        });
        return html;
    },

    /* Ensure a numeric value has at least n digits for display.
       @param  inst   (object) the current settings for this instance
       @param  value  (number) the value to display
       @param  len    (number) the minimum length
       @return  (string) the display text */
    _minDigits: function(inst, value, len) {
        value = '' + value;
        if (value.length >= len) {
            return this._translateDigits(inst, value);
        }
        value = '0000000000' + value;
        return this._translateDigits(inst, value.substr(value.length - len));
    },

    /* Translate digits into other representations.
       @param  inst   (object) the current settings for this instance
       @param  value  (string) the text to translate
       @return  (string) the translated text */
    _translateDigits: function(inst, value) {
        return ('' + value).replace(/[0-9]/g, function(digit) {
                return inst.options.digits[digit];
            });
    },

    /* Translate the format into flags for each period.
       @param  inst  (object) the current settings for this instance
       @return  (string[7]) flags indicating which periods are requested (?) or
                required (!) by year, month, week, day, hour, minute, second */
    _determineShow: function(inst) {
        var format = inst.options.format;
        var show = [];
        show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));
        show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));
        show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));
        show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));
        show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));
        show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));
        show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));
        return show;
    },

    /* Calculate the requested periods between now and the target time.
       @param  inst         (object) the current settings for this instance
       @param  show         (string[7]) flags indicating which periods are requested/required
       @param  significant  (number) the number of periods with values to show, zero for all
       @param  now          (Date) the current date and time
       @return  (number[7]) the current time periods (always positive)
                by year, month, week, day, hour, minute, second */
    _calculatePeriods: function(inst, show, significant, now) {
        // Find endpoints
        inst._now = now;
        inst._now.setMilliseconds(0);
        var until = new Date(inst._now.getTime());
        if (inst._since) {
            if (now.getTime() < inst._since.getTime()) {
                inst._now = now = until;
            }
            else {
                now = inst._since;
            }
        }
        else {
            until.setTime(inst._until.getTime());
            if (now.getTime() > inst._until.getTime()) {
                inst._now = now = until;
            }
        }
        // Calculate differences by period
        var periods = [0, 0, 0, 0, 0, 0, 0];
        if (show[Y] || show[O]) {
            // Treat end of months as the same
            var lastNow = plugin._getDaysInMonth(now.getFullYear(), now.getMonth());
            var lastUntil = plugin._getDaysInMonth(until.getFullYear(), until.getMonth());
            var sameDay = (until.getDate() == now.getDate() ||
                (until.getDate() >= Math.min(lastNow, lastUntil) &&
                now.getDate() >= Math.min(lastNow, lastUntil)));
            var getSecs = function(date) {
                return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
            };
            var months = Math.max(0,
                (until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() +
                ((until.getDate() < now.getDate() && !sameDay) ||
                (sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));
            periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);
            periods[O] = (show[O] ? months - periods[Y] * 12 : 0);
            // Adjust for months difference and end of month if necessary
            now = new Date(now.getTime());
            var wasLastDay = (now.getDate() == lastNow);
            var lastDay = plugin._getDaysInMonth(now.getFullYear() + periods[Y],
                now.getMonth() + periods[O]);
            if (now.getDate() > lastDay) {
                now.setDate(lastDay);
            }
            now.setFullYear(now.getFullYear() + periods[Y]);
            now.setMonth(now.getMonth() + periods[O]);
            if (wasLastDay) {
                now.setDate(lastDay);
            }
        }
        var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
        var extractPeriod = function(period, numSecs) {
            periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);
            diff -= periods[period] * numSecs;
        };
        extractPeriod(W, 604800);
        extractPeriod(D, 86400);
        extractPeriod(H, 3600);
        extractPeriod(M, 60);
        extractPeriod(S, 1);
        if (diff > 0 && !inst._since) { // Round up if left overs
            var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
            var lastShown = S;
            var max = 1;
            for (var period = S; period >= Y; period--) {
                if (show[period]) {
                    if (periods[lastShown] >= max) {
                        periods[lastShown] = 0;
                        diff = 1;
                    }
                    if (diff > 0) {
                        periods[period]++;
                        diff = 0;
                        lastShown = period;
                        max = 1;
                    }
                }
                max *= multiplier[period];
            }
        }
        if (significant) { // Zero out insignificant periods
            for (var period = Y; period <= S; period++) {
                if (significant && periods[period]) {
                    significant--;
                }
                else if (!significant) {
                    periods[period] = 0;
                }
            }
        }
        return periods;
    }
});

// The list of commands that return values and don't permit chaining
var getters = ['getTimes'];

/* Determine whether a command is a getter and doesn't permit chaining.
   @param  command    (string, optional) the command to run
   @param  otherArgs  ([], optional) any other arguments for the command
   @return  true if the command is a getter, false if not */
function isNotChained(command, otherArgs) {
    if (command == 'option' && (otherArgs.length == 0 ||
            (otherArgs.length == 1 && typeof otherArgs[0] == 'string'))) {
        return true;
    }
    return $.inArray(command, getters) > -1;
}

/* Process the countdown functionality for a jQuery selection.
   @param  options  (object) the new settings to use for these instances (optional) or
                    (string) the command to run (optional)
   @return  (jQuery) for chaining further calls or
            (any) getter value */
$.fn.countdown = function(options) {
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (isNotChained(options, otherArgs)) {
        return plugin['_' + options + 'Plugin'].
            apply(plugin, [this[0]].concat(otherArgs));
    }
    return this.each(function() {
        if (typeof options == 'string') {
            if (!plugin['_' + options + 'Plugin']) {
                throw 'Unknown command: ' + options;
            }
            plugin['_' + options + 'Plugin'].
                apply(plugin, [this].concat(otherArgs));
        }
        else {
            plugin._attachPlugin(this, options || {});
        }
    });
};

/* Initialise the countdown functionality. */
var plugin = $.countdown = new Countdown(); // Singleton instance

})(jQuery);