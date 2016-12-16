var sdfollowers          = {}; // global namespace for slickdeals js followers

$(function () {
    if($('.checkall'))
    {
        $('.checkall').click(function () {
            $('#ffform').find(':checkbox').attr('checked', this.checked);
        });
    }

    if($('.fb-logout-button'))
    {
        $('.fb-logout-button').click(function () {
            FB.logout(function(response) {
            });
        });
    }
});

var forum_id = 0;
$(document).ready(function () {
    if($("select.forum_multiselect").length)
    {
        $("select.forum_multiselect").multiselect({
            noneSelectedText: "Select Forums",
            selectedList: 100,
            minWidth: 300,
            classes: "sel_multi_forums"
        });
    }

    if($("select.notify_multiselect").length)
    {
        $("select.notify_multiselect").multiselect({
            noneSelectedText: "Select Notification Methods",
            selectedList: 3,
            minWidth: 300,
            classes: "sel_multi_notify"
        });
    }

    if($('#btn_remove').length)
    {
        $('#btn_remove').click(function(){
            genericdialog("Unfollow Users", "Are you sure you want to unfollow the selected users?", false,
            function(){
                $('#subtask').val('remove');
                $('#frm_follow').submit();
            },
            function(){

            });
        });
    }

    if($('#btn_remove_recommended').length)
    {
        $('#btn_remove_recommended').click(function(){
            genericdialog("Remove Users", "Are you sure you want to remove the selected users?", false,
            function(){
                $('#rec_subtask').val('remove');
                $('#frm_rec_follow').submit();
            },
            function(){

            });
        });
    }

    if($('#btn_more').length)
    {
        $('#btn_more').click(function(e){
             e.preventDefault();
             $('#frm_rec_follow .usercp_table tr.overflow').removeClass('hide');
             $('#span_more').hide();
             $('#span_less').show();
        });
    }

    if($('#btn_less').length)
    {
        $('#btn_less').click(function(e){
             e.preventDefault();
             $('#frm_rec_follow .usercp_table tr.overflow').addClass('hide');
             $('#span_less').hide();
             $('#span_more').show();
        });
    }

    $("#aboutOP_dropdownmenu").on("click", "a.btn_follow", followUserAction);

    $("#aboutOP_dropdownmenu").on("click", "a.btn_follow", function() {
        $("#aboutOP_dropdownmenu").hide();
    });

    if ($('#posts').length)
    {
        // $('#posts a.btn_follow').click(function(e){
        $("#posts").on("click", "a.btn_follow", followUserAction);
    }

    if($('#pause_until_date').length)
    {
        $( "#pause_until_date" ).datepicker({
            dateFormat: 'yy-mm-dd',
            minDate: new Date()
        });
    }

    $('#pause_until_date').click(function(e){
        e.preventDefault();
    });

    if($('#pause_following_notifications').length)
    {
        $('#pause_following_notifications').click(function(){
            $('#following_pause_until').toggleClass('hide');
        });
    }

    $('#follow_chk_all_rec').click(function(e){
        e.preventDefault();
        $('#recommended_follow table.usercp_table.follow_table tr td input[type="checkbox"]').attr('checked', true);
    });

    $('#follow_unchk_all_rec').click(function(e){
        e.preventDefault();
        $('#recommended_follow table.usercp_table.follow_table tr td input[type="checkbox"]').attr('checked', false);
    });

    $('#follow_chk_all').click(function(e){
        e.preventDefault();
        $('#frm_follow table.usercp_table.follow_table tr td input[type="checkbox"]').attr('checked', true);
    });

    $('#follow_unchk_all').click(function(e){
        e.preventDefault();
        $('#frm_follow table.usercp_table.follow_table tr td input[type="checkbox"]').attr('checked', false);
    });
});

sdfollowers.getMoreRecommendedFriends = function()
{
    $.ajax({
        url: '/ajax/following.php',
        cache: false,
        data: {
            'do': 'initFollowingPopup',
            'securitytoken' : SECURITYTOKEN
        },
        dataType: 'json',
        type: 'POST',
        success: function(data){
            sdfollowers.RecommendedFriendsDialog(data);
        }
    });
};

sdfollowers.RecommendedFriendsDialog = function(data)
{
    if (typeof data !== "object")
    {
        data = $.parseJSON(data);
    }

    if (typeof data == "object" && data.success == true && typeof data.form != "undefined")
    {
        $('#loginbox_overlay').remove();
        html = '';
        var output = '<div id="dialog_newuserfollowpopup" title="Recommended Users to Follow on Slickdeals" style="display:none;">'+data.form+'</div>';
        $('body').append(output);
        $('#dialog_newuserfollowpopup').dialog
        ({
            autoOpen:true,
            height:"auto",
            width: "570px",
            modal:true,
            resizable:false,
            draggable:false,
            zIndex: 21001,
            position: "top",
            buttons: {
                "Continue": function() {
                    if (data.goto)
                    {
                        location.href = data.goto;
                    }
                    else
                    {
                        location.reload(true);
                    }
                }
            },
            close: function() {
                if (data.goto)
                {
                    location.href = data.goto;
                }
                else
                {
                    location.reload(true);
                }
            }
        });

        $('.ui-widget-overlay').click(function(elem){
            if($(elem.target).attr('class') == 'ui-widget-overlay')
            {
                if (data.goto)
                {
                    location.href = data.goto;
                }
                else
                {
                    location.reload(true);
                }
            }
        });

        $('.usercp_table.follow_table tr td.checkbox a.btn_follow').click(function(e){
            e.preventDefault();
            var userid = $(this).attr('userid');
            var href = $(this).data('url');
            var id = $(this).attr('id');
            var new_val;
            $.ajax({
                url: href,
                type: 'POST',
                data: {
                    'securitytoken': SECURITYTOKEN
                }
            });

            if(href.indexOf('do=unfollowuser') > 0)
            {
                href = href.replace('do=unfollowuser', 'do=followuser');
                $(this).data('url', href);
                $(this).html('Follow');
                $(this).addClass('btn_blue').removeClass('btn_grey');

                if($('.user_'+userid+'_followcount').length)
                {
                    new_val = ($('.user_'+userid+'_followcount').html() - 0) - 1;
                    $('.user_'+userid+'_followcount').html(new_val);
                }
            }
            else if(href.indexOf('do=followuser') > 0)
            {
                href = href.replace('do=followuser', 'do=unfollowuser');
                $(this).data('url', href);
                $(this).html('Unfollow');
                $(this).addClass('btn_grey').removeClass('btn_blue');

                if($('.user_'+userid+'_followcount').length)
                {
                    new_val = ($('.user_'+userid+'_followcount').html() - 0) + 1;
                    $('.user_'+userid+'_followcount').html(new_val);
                }
            }
        });
    }
    else
    {
        location.reload(true);
    }
};

function followUserAction (e){
    e.preventDefault();
    var elem = $(this);
    var href = "/ajax/following.php";
    var data = {};
    if (elem.data('action'))
    {
        data = {
            'u':  elem.data('userid'),
            'do': elem.data('action'),
            'f':  elem.data('forumid'),
            'ajax': 1
        };
    }
    else if (elem.data('url'))
    {
        href = elem.data('url');
    }
    else
    {
        href = elem.attr('href');
    }

    data.securitytoken = SECURITYTOKEN;

    $.ajax({
        url: href,
        type: 'POST',
        data: data
    }).done(function(html) {
        if ($(html).find('dologin').length > 0)
        {
            sd_ajax_login();
            return;
        }
        var userid = 0;
        var forum_id = 0;
        var action = '';
        if (elem.data('action'))
        {
            userid   = elem.data('userid');
            forum_id = elem.data('forumid');
            action   = elem.data('action');
        }
        else
        {
            if (!href)
            {
                href = elem.data('url');

                if (!href)
                {
                    href = elem.attr('href');
                }
            }
            href = href.replace("/ajax/following.php?", "");
            var params = href.split('&');
            for (var i in params)
            {
                var val = params[i].split('=');
                if (val[0] == 'u')
                {
                    userid = val[1];
                }
                if (val[0] == 'f')
                {
                    forum_id = val[1];
                }
                if (val[0] == 'do')
                {
                    action = val[1];
                }
            }
        }

        if (action == 'unfollowuser')
        {
            if (elem.data('action'))
            {
                $(".btn_follow[data-userid='"+userid+"']")
                    .data('action', 'followuser')
                    .find(".icon-user-delete6")
                    .toggleClass("icon-user-delete6 icon-user-add6")[0]
                    .nextSibling.nodeValue = 'Follow User';
            }
            else
            {
                elem = $('a.btn_follow_'+userid+':first');
                href = "/ajax/following.php?" + href;
                href = href.replace('do=unfollowuser', 'do=followuser');
                $("a.btn_follow_"+userid).each(function () {
                    $(this).data('url', href).html('+ Follow');
                });
            }

            if ($('.user_'+userid+'_followcount').length)
            {
                var new_val = ($('.user_'+userid+'_followcount').html() - 0) - 1;
                $('.user_'+userid+'_followcount').html(new_val);
            }
        }
        else if (action == 'followuser')
        {
            //show popup to select options
            if (html != '')
            {
                var output = '<div id="dialog_followoptions" title="Settings for Following User" style="display:none;">'+html+'</div>';
                $('body').append(output);
                $('#dialog_followoptions').dialog
                ({
                    autoOpen:true,
                    height:"auto",
                    width: "486px",
                    modal:true,
                    resizable:false,
                    draggable:false,
                    zIndex: 21001,
                    buttons: {
                        "Save": function(event) {
                            var follow_user_id = $('#dialog_followoptions #follow_user_id').val();

                            var chk_follow = {};
                            chk_follow[follow_user_id] = 'on';

                            var sel_forum_ids = {};
                            sel_forum_ids[follow_user_id] = $('select.forum_multiselect').val();

                            var sel_notify_methods = {};
                            sel_notify_methods[follow_user_id] = $('select.notify_multiselect').val();

                            $('.err_forums').hide();
                            $('.err_notify').hide();

                            var error = false;
                            if(sel_forum_ids[follow_user_id] == null)
                            {
                                $('.err_forums').show();
                                error = true;
                            }
                            if(sel_notify_methods[follow_user_id] == null)
                            {
                                $('.err_notify').show();
                                error = true;
                            }

                            if ($("select.notify_multiselect").data("emailoff") && $.inArray("1", sel_notify_methods[follow_user_id]) != -1 && typeof emConfirmModal == "function")
                            {
                                var thisEvent = event;

                                emConfirmModal({
                                    type: 'followed_users',
                                    name: "Followed User",
                                    text: "You have Followed User emails turned off. If you'd like to follow this user and receive these emails please confirm by clicking the button below.",
                                    containerCss: {
                                        "width": "577px"
                                    },
                                    zIndex: 23000,
                                    onSuccess: function()
                                    {
                                        $("select.notify_multiselect").data("emailoff", 0);
                                        $(thisEvent.currentTarget).trigger("click");
                                    }
                                });

                                error = true;
                            }

                            if(error != true)
                            {
                                $.ajax({
                                   url: '/ajax/following.php',
                                   type: 'POST',
                                   dataType: 'json',
                                   data: {
                                       'securitytoken': SECURITYTOKEN,
                                       'chk_follow': chk_follow,
                                       'sel_forum_ids': sel_forum_ids,
                                       'sel_notify_methods': sel_notify_methods,
                                       'u': follow_user_id
                                   },
                                   success: function(data)
                                   {
                                        if(data === null)
                                        {
                                            $('#dialog_followoptions').dialog("close");
                                            if (elem.data('action'))
                                            {
                                                $(".btn_follow[data-userid='"+follow_user_id+"']")
                                                    .data('action', 'unfollowuser')
                                                    .find(".icon-user-add6")
                                                    .toggleClass("icon-user-add6 icon-user-delete6")[0]
                                                    .nextSibling.nodeValue = 'Unfollow User';
                                            }
                                            else
                                            {
                                                elem = $('a.btn_follow_'+follow_user_id+':first');
                                                var href = elem.data('url');
                                                href = href.replace('do=followuser', 'do=unfollowuser');
                                                $("a.btn_follow_"+follow_user_id).each(function () {
                                                    $(this).data('url', href).html('- Unfollow');
                                                });
                                            }

                                            if ($('.user_'+follow_user_id+'_followcount').length)
                                            {
                                                var new_val = ($('.user_'+follow_user_id+'_followcount').html() - 0) + 1;
                                                $('.user_'+follow_user_id+'_followcount').html(new_val);
                                            }
                                        }
                                        else if(data != null && typeof(data) == "object" && data.success && data.success == false)
                                        {
                                            var errors = data.errors;
                                            if(data.errors.no_forum)
                                            {
                                                $('.err_forums').show();
                                            }
                                            if(data.errors.no_notifymethod)
                                            {
                                                $('.err_notify').show();
                                            }
                                        }
                                   }

                                });
                            }
                        },
                        "Cancel": function() {
                            $(this).dialog("close");
                        }
                    },
                    close: function() {
                        $('#dialog_followoptions').remove();
                    }
                });

                $("select.forum_multiselect").multiselect({
                    noneSelectedText: "Select Forums",
                    selectedList: 100,
                    minWidth: 300,
                    classes: "sel_multi_forums",
                    click: function(event, ui)
                    {
                        var checked = $(this).multiselect("getChecked");
                        if(checked.length == 0)
                        {
                            $('.err_forums').show();
                        }
                        else
                        {
                            $('.err_forums').hide();
                        }
                    },
                    uncheckAll: function()
                    {
                        $('.err_forums').show();
                    }
                });

                $("select.notify_multiselect").multiselect({
                    //header: "Select Notify Methods",
                    noneSelectedText: "Select Notification Methods",
                    selectedList: 3,
                    minWidth: 300,
                    classes: "sel_multi_notify",
                    click: function(event, ui)
                    {
                        var checked = $(this).multiselect("getChecked");
                        if(checked.length == 0)
                        {
                            $('.err_notify').show();
                        }
                        else
                        {
                            $('.err_notify').hide();
                        }
                    },
                    uncheckAll: function()
                    {
                        $('.err_notify').show();
                    }
                });

                $("div.ui-multiselect-menu.sel_multi_forums").css('z-index', 60000);
                $("div.ui-multiselect-menu.sel_multi_notify").css('z-index', 60000);

                //hook onto checkbox click
                $('.usercp_table.follow_table tr td input[type="checkbox"]').click(function(){
                    var userid = $(this).attr('userid');
                    var href = '/forums/profile.php';
                    var action;

                    if($(this).is(':checked'))
                    {
                        action = 'followuser';
                    }
                    else
                    {
                        action = 'unfollowuser';
                    }
                    $.ajax({
                        url: href,
                        type: 'POST',
                        data: {
                            'do': action,
                            'u': userid,
                            'securitytoken': SECURITYTOKEN
                        }
                    });
                });

                $('.usercp_table.follow_table tr td.checkbox a.btn_follow').click(function(e){
                    e.preventDefault();
                    var userid = $(this).attr('userid');
                    var href = $(this).data('url');
                    var id = $(this).attr('id');
                    var new_val;

                    if (href.indexOf('do=followuser') > 0 && $("select.notify_multiselect").data("emailNotification") && typeof emConfirmModal == "function")
                    {
                        var thisVar = this;
                        emConfirmModal({
                            type: 'followed_users',
                            name: "Followed Users",
                            text: "You have Followed User emails turned off. If you'd like to follow this user and receive these emails please confirm by clicking the button below.",
                            onSuccess: function()
                            {
                                handleFlight.manual({emitGA: true, data: 'emailManagement,showthread > followed_users,enable,1'});
                                $("select.notify_multiselect").data("emailNotification", 0);
                                $(thisVar).trigger("click");
                            },
                            zIndex: 23000
                        });
                    }
                    else
                    {
                        $.ajax({
                            url: href,
                            type: 'POST',
                            data: {
                                'securitytoken': SECURITYTOKEN
                            }
                        });

                        if (href.indexOf('do=unfollowuser') > 0)
                        {
                            href = href.replace('do=unfollowuser', 'do=followuser');
                            $(this).data('url', href);
                            $(this).html('Follow');
                            $(this).addClass('btn_blue').removeClass('btn_grey');

                            if ($('.user_' + userid + '_followcount').length)
                            {
                                new_val = ($('.user_' + userid + '_followcount').html() - 0) - 1;
                                $('.user_' + userid + '_followcount').html(new_val);
                            }
                        }
                        else if (href.indexOf('do=followuser') > 0)
                        {
                            href = href.replace('do=followuser', 'do=unfollowuser');
                            $(this).data('url', href);
                            $(this).html('Unfollow');
                            $(this).addClass('btn_grey').removeClass('btn_blue');

                            if ($('.user_' + userid + '_followcount').length)
                            {
                                new_val = ($('.user_' + userid + '_followcount').html() - 0) + 1;
                                $('.user_' + userid + '_followcount').html(new_val);
                            }
                        }
                    }
                });
                var recommended_loaded = false;
                $('#rec_follow_hide').click(function(e){
                    e.preventDefault();
                    $('#popup_recommended_follow').hide();
                    $('#rec_follow_hide').hide();
                    $('#rec_follow_show').show();
                    $('#dialog_followoptions').dialog( 'option', 'position', 'center' );
                });
                $('#rec_follow_show').click(function(e){
                    e.preventDefault();
                    //var forum_id = 0;
                    if(recommended_loaded == false)
                    {
                        $('#popup_recommended_follow_toggle .ajax_loader').html('<img src="/images/slickdeals/ajaxsmall.gif" />');

                        $('#rec_follow_show').block({
                            message: null,
                            overlayCSS:  {
                                backgroundColor: '',
                                opacity: 'inherit',
                                timeout: 5000
                            }
                        });
                        $.ajax({
                           url: '/ajax/following.php',
                           type: 'POST',
                           dataType: 'json',
                           data: {
                               'securitytoken': SECURITYTOKEN,
                               'do': 'getRecommendedUsers',
                               'f': forum_id
                           },
                           success: function(data)
                           {
                               var new_val;
                               if(data)
                               {
                                   $('#popup_recommended_follow_toggle .ajax_loader').html('');
                                   $('#rec_follow_show').unblock();
                                   if(data.success)
                                   {
                                        $('#popup_recommended_follow').html(data.html);
                                        $('#popup_recommended_follow').show();
                                        $('#rec_follow_show').hide();
                                        $('#rec_follow_hide').show();
                                        $('#dialog_followoptions').dialog( 'option', 'position', 'center' );
                                        recommended_loaded = true;

                                        $('.usercp_table.follow_table tr td.checkbox a.btn_follow').click(function(e){
                                            e.preventDefault();
                                            var userid = $(this).attr('userid');
                                            var href = $(this).data('url');
                                            var id = $(this).attr('id');

                                            if (href.indexOf('do=followuser') > 0 && $("select.notify_multiselect").data("emailNotification") && typeof emConfirmModal == "function")
                                            {
                                                var thisVar = this;
                                                emConfirmModal({
                                                    type: 'followed_users',
                                                    name: "Followed Users",
                                                    text: "You have Followed User emails turned off. If you'd like to follow this user and receive these emails please confirm by clicking the button below.",
                                                    onSuccess: function()
                                                    {
                                                        handleFlight.manual({emitGA: true, data: 'emailManagement,showthread > followed_users,enable,1'});
                                                        $("select.notify_multiselect").data("emailNotification", 0);
                                                        $(thisVar).trigger("click");
                                                    },
                                                    zIndex: 23000
                                                });
                                            }
                                            else
                                            {
                                                $.ajax({
                                                    url: href,
                                                    type: 'POST',
                                                    data: {
                                                        'securitytoken': SECURITYTOKEN
                                                    }
                                                });

                                                if (href.indexOf('do=unfollowuser') > 0)
                                                {
                                                    href = href.replace('do=unfollowuser', 'do=followuser');
                                                    $(this).data('url', href);
                                                    $(this).html('Follow');
                                                    $(this).addClass('btn_blue').removeClass('btn_grey');

                                                    if ($('.user_' + userid + '_followcount').length)
                                                    {
                                                        new_val = ($('.user_' + userid + '_followcount').html() - 0) - 1;
                                                        $('.user_' + userid + '_followcount').html(new_val);
                                                    }
                                                }
                                                else if (href.indexOf('do=followuser') > 0)
                                                {
                                                    href = href.replace('do=followuser', 'do=unfollowuser');
                                                    $(this).data('url', href);
                                                    $(this).html('Unfollow');
                                                    $(this).addClass('btn_grey').removeClass('btn_blue');

                                                    if ($('.user_' + userid + '_followcount').length)
                                                    {
                                                        new_val = ($('.user_' + userid + '_followcount').html() - 0) + 1;
                                                        $('.user_' + userid + '_followcount').html(new_val);
                                                    }
                                                }
                                            }
                                        });
                                   }
                               }
                               else
                               {
                                   $('#popup_recommended_follow_toggle .ajax_loader').html('');
                                   $('#rec_follow_show').unblock();
                                   $('#popup_recommended_follow').html('Currently, you have no recommended users to follow.');
                                   $('#popup_recommended_follow').show();
                                   $('#rec_follow_show').hide();
                                   $('#rec_follow_hide').show();
                               }
                           }
                        });
                    }
                    else
                    {
                        $('#popup_recommended_follow').show();
                        $('#rec_follow_show').hide();
                        $('#rec_follow_hide').show();
                        $('#dialog_followoptions').dialog( 'option', 'position', 'center' );
                    }
                });
            }
        }
        if (href.indexOf("/ajax/following.php") == -1)
        {
            href = "/ajax/following.php?" + href;
        }
        elem.data('url', href);
    });
}
;if (typeof DISPLAY_NOJS == "undefined")
{
    var isModal = /modal=[^0.]/.test(window.location.search);

    // Variables we use throughout the application
    var FACEBOOK_OFF = false;

    var sdfacebook = sdfacebook || {}; // global namespace for slickdeals js facebook
    sdfacebook.read_permissions = ['email'];
    sdfacebook.write_permissions = [];
    sdfacebook.permissions = sdfacebook.read_permissions.concat(sdfacebook.write_permissions);
    sdfacebook.profile = {};
    sdfacebook.fb_message = "";

    // We set this in the code of the header via the users options from the database
    sdfacebook.fb_options = sdfacebook.fb_options || 0;

    sdfacebook.EVERYTHING_OFF = 4026531840;

    // comma separated list of fields we want to pull from the facebook users profile
    sdfacebook.profile_fields = "first_name,last_name,birthday,gender,email,location";

    // boolean flag sets true when user is logged in on slickdeals
    sdfacebook.SDLoggedIn = sdfacebook.SDLoggedIn || false;
    sdfacebook.AccessToken = "";
    sdfacebook.usingDefaultOptions = false;

    sdfacebook.complete_signup = false;
    sdfacebook.chosen_username = '';
    sdfacebook.newsletter = 0;
    sdfacebook.need_permission_rerequest = false;

    $(document).ready(function () {
        // Load the SDK Asynchronously
        $(window).load(function () {
            (function(d){
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id))
                {
                    return;
                }
                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                ref.parentNode.insertBefore(js, ref);
            }(document));
        });

        if (sdfacebook.fb_options == sdfacebook.EVERYTHING_OFF)
        {
            FACEBOOK_OFF = true;
        }

        // Init the SDK upon load
        window.fbAsyncInit = function()
        {
            if (typeof FB != "undefined")
            {
                FB.init({
                    appId      : facebook_appid, // Production appid
                    status     : true, // check login status
                    cookie     : true, // enable cookies to allow the server to access the session
                    xfbml      : false,// parse XFBML
                    version    : 'v2.2'
                });

                // listen for and handle auth.statusChange events
                FB.Event.subscribe('auth.statusChange', sdfacebook.FacebookInit);

                sdfacebook.xfbmlParse();
            }
            else
            {
                FACEBOOK_OFF = true;
            }
        };

        // Click the link facebook button from account settings page
        $("#link_facebook").click(function (e) {
            sdfacebook.FacebookLogin(function () {
                location.reload();
            }, true);
            e.preventDefault();
            return false;
        });

        // creates div for facebook dialog
        if ($("#sdfacebook_options_dialog").length == 0)
        {
            $('body').append("<div id='sdfacebook_options_dialog'></div>");
        }
    });

    sdfacebook.xfbmlParse = function() {
        var fblike = document.getElementById('fblike');

        if (typeof fblike !== 'undefined' && fblike !== null)
        {
            FB.XFBML.parse(fblike);
        }
    };

    sdfacebook.CollapseDialogOptions = function()
    {
        $('#fbchangeLink').text("Don't Ask Me Again");

        $('#fbchangeLink').unbind('click');
        $('#fbchangeLink').click(function()
        {
            sdfacebook.ExpandDialogOptions();
        });

        $('.fbPreviewContainer.activity').removeClass("hide");
        $('.fbPreviewContainer.settings').addClass('hide');
    };

    // This will remove the app from the users permissions
    sdfacebook.DeleteApp = function(access_token)
    {
        FB.api('/me/permissions', 'delete', {
            access_token: access_token
        });
    };

    sdfacebook.DialogDefaultRenderCheck = function()
    {
        if (sdfacebook.usingDefaultOptions == true)
        {
            $('#optionChange').val('1');
            $('input[name="optionChange"]').val('1');
        }
    };

    sdfacebook.ExpandDialogOptions = function()
    {
        $('#fbchangeLink').text("Save Settings");

        $('#fbchangeLink').unbind('click');
        $('#fbchangeLink').click(function()
        {
            sdfacebook.CollapseDialogOptions();
        });

        $('.fbPreviewContainer.activity').addClass("hide");
        $('.fbPreviewContainer.settings').removeClass('hide');
    };

    // Runs every time the page loads if user is logged into facebook, so be careful what goes in here
    sdfacebook.FacebookInit = function(response)
    {
        if(response.status == "not_authorized")
        {

        }
        else
        {
            // They click unlink from account settings
            $("#unlinkFacebook").click(function(e){
                e.preventDefault();
                if(sdfacebook.UnlinkFacebook(response.authResponse.accessToken))
                {
                    location.reload();
                }
            });

            sdfacebook.AccessToken = response.authResponse.accessToken;
            sdfacebook.FacebookId  = response.authResponse.userID;
        }
    };

    sdfacebook.CheckPassword = function(r, callback)
    {
        var html = 'This action requires you to enter your Slickdeals.net password.<br />' +
                '<input type="password" name="password" id="link_facebook_password" />';

        var okfunc = function()
        {
            var password = $("#link_facebook_password").val();
            $.post("/ajax/profile_ajax.php",
                    {
                        "do" : "check_password",
                        'securitytoken': SECURITYTOKEN,
                        'password' : hex_md5(password)
                    },
                    function(data)
                    {
                        if(data.error)
                        {
                            var errorokfunc = function()
                            {
                                if(typeof callback == "function")
                                {
                                    callback();
                                }
                            };

                            genericdialog("Error", data.error, null, errorokfunc);
                        }
                        else
                        {
                            if(typeof FB != "undefined")
                            {
                                FB.api('/me?fields=' + sdfacebook.profile_fields, function(profile)
                                {
                                    // don't do this if they're not logged into slickdeals
                                    sdfacebook.UpdateFacebookId(r.authResponse.userID, r.authResponse.accessToken, profile, callback);
                                });
                            }
                        }
                    },
                    "json"
            );
        };

        genericdialog("Please enter your password", html, null, okfunc);
        $("#link_facebook_password").focus().keypress(function(e){
            if(e.keyCode == 13)
            {
                $(e.target).closest(".ui-dialog").find(".ui-dialog-buttonpane button").click();
            }
        });
    };

    sdfacebook.checkHasGrantedAllLoginPermissions = function(successCallback, failCallback){
        FB.api('/me/permissions', function(response){
            if (!sdfacebook.hasGrantedAllLoginPermissions(response)) {
                return failCallback();
            } else {
                return successCallback();
            }
        });
    };

    sdfacebook.hasGrantedAllLoginPermissions = function(response) {
        if (typeof response !== 'object' || !response.hasOwnProperty('data') || !$.isArray(response.data)) {
            return false;
        }

        for (var i in response.data) {
            var permission = response.data[i];
            if (!permission.hasOwnProperty('status') || permission.status !== 'granted') {
                // permission hasn't been granted
                return false;
            }
        }

        return true;
    };

    sdfacebook.FacebookLoginCallback = function(r, callback, nosave)
    {
        // if error, user canceled or closed window
        if (!r.authResponse)
        {
            return false;
        }

        var handleUserHasGrantedLoginPermissions = function(){
            sdfacebook.handleUserHasGrantedLoginPermissions(r, callback, nosave)
        };

        sdfacebook.checkHasGrantedAllLoginPermissions(
            handleUserHasGrantedLoginPermissions,
            sdfacebook.handleUserHasNotGrantedAllLoginPermissions
        );
        return true;
    };

    sdfacebook.handleUserHasGrantedLoginPermissions = function(r, callback, nosave) {
        if(sdfacebook.SDLoggedIn)
        {
            if (nosave)
            {
                sdfacebook.CheckPassword(r, callback);
            }
            else if(typeof FB != "undefined")
            {
                FB.api('/me?fields=' + sdfacebook.profile_fields, function(profile)
                {
                    sdfacebook.UpdateFacebookId(r.authResponse.userID, r.authResponse.accessToken, profile, callback);
                });
            }
        }
        else if(typeof callback === "function")
        {
            callback();
            return true;
        }
        return false;
    };

    sdfacebook.handleUserHasNotGrantedAllLoginPermissions = function() {
        sdfacebook.need_permission_rerequest = true;
        window.parent.errordialog('You must grant all Facebook permissions to login with Facebook. Please login again and accept those permissions to login with Facebook');
        return false;
    };

    sdfacebook.FacebookLogin = function(callback, nosave, write_perms)
    {
        var request_permissions = [];
        request_permissions.push(sdfacebook.read_permissions);

        if(write_perms)
        {
            request_permissions.push(sdfacebook.write_permissions);
        }

        var params = {
            scope: request_permissions.join(",")
        };

        if (sdfacebook.need_permission_rerequest)
        {
            params.auth_type = 'rerequest';
        }

        if(typeof FB != "undefined")
        {
            // logs them in, and fetches permissions
            FB.login(function(r) {
                sdfacebook.FacebookLoginCallback(r, callback, nosave);
            }, params);
        }
    };

    sdfacebook.SaveOptions = function(options, callback)
    {
        if(options != sdfacebook.fb_options)
        {
            $.post("/ajax/profile_ajax.php",
                    {
                        "do"            : "update_fb_options",
                        "securitytoken" : SECURITYTOKEN,
                        "fb_options"    : options
                    },
                    function(data)
                    {
                        if(data.success)
                        {
                            sdfacebook.fb_options = options;
                        }

                        if(typeof callback == "function")
                        {
                            callback();
                        }
                    },
                    "json"
            );
        }
        else
        {
            if(typeof callback == "function")
            {
                callback();
            }
        }
    };

    // Does login for slickdeals via facebook
    sdfacebook.SlickdealsLogin = function()
    {
        var params = {};

        params['securitytoken'] = SECURITYTOKEN;
        params['do']            = "facebook";
        params['access_token']  = sdfacebook.AccessToken;
        params['complete_signup'] = sdfacebook.complete_signup;
        params['chosen_username'] = sdfacebook.chosen_username;
        params['newsletter']      = sdfacebook.newsletter;
        params['modal'] = isModal ? 1 : 0;

        if ($("input[name=fbuid]").length > 0)
        {
            params['fbuid'] = $("input[name=fbuid]").val();
        }

        $.post('/forums/sdlogin.php', params, function(data, x, request)
        {
            if($(data).find('retry').length > 0)
            {
                sdfacebook.FacebookLogin(function(){
                    sdfacebook.SlickdealsLogin();
                });
            }
            else if($(data).find('error').length > 0)
            {
                if (params.complete_signup)
                {
                    SD.Analytics.signUpTrack('unsuccessful');
                }
                else
                {
                    SD.Analytics.loginTrack('unsuccessful');
                }
                //window.parent.location = $(data).find('goto').text();
                window.parent.errordialog($(data).find('error').text(), false, 200);
            }
            else if($(data).find('success').length > 0)
            {
                if (params.complete_signup)
                {
                    if (params.newsletter)
                    {
                        SD.Analytics.newsletterTrack('successful');
                    }
                    SD.Analytics.signUpTrack('successful');
                }
                else
                {
                    SD.Analytics.loginTrack('successful');
                }

                if (window.location.pathname === "/fullreg/" && window.handleFlight !== undefined)
                {
                    handleFlight.manual({emitGA: true, data: 'fullreg,success,facebook'});
                }

                if($(data).find('goto').length > 0)
                {
                    window.parent.location = $(data).find('goto').text();
                }
                else
                {
                    window.parent.location.reload();
                }
            }
            else if($(data).find('sdsso_link').length > 0)
            {
                sdfacebook.initSingleSignOnLink(data);
            }
            else if($(data).find('checkusername').length > 0)
            {
                var form = $($(data).find('checkusername').text()), doc = $(document), overlay;

                if (form.length > 0)
                {
                    sdfacebook.initChooseUsername(data);
                }
            }
            else
            {
                sdfollowers.RecommendedFriendsDialog(data);
            }
        });
    };

    sdfacebook.initSingleSignOnLink = function(data) {
        var form = $($(data).find('sdsso_link').text()), doc = $(document), overlay;

        if (form.length > 0)
        {
            if($("#loginbox_overlay").length > 0)
            {
                $("#loginbox_overlay").remove();
            }
            $('body').append(form);
            $('.req_error').show();
            $("#loginbox_overlay").show();

            // Attach events
            overlay = $('#loginbox_overlay');
            overlay.css('height', doc.height() + 'px');     // Set overlay to height of page
            overlay.click(function () {$(this).hide()});    // Hide form if overlay is clicked

            form = $('div.loginbox_container', overlay);
            form.click(function (e) {e.stopPropagation()}); // Allow clicks on form to prevent hiding stuff

            $('span.meh', form).click(function () {overlay.hide()}); // Allow hiding on a "never mind"

            $('#regform_username', form).focus(); // Foooocus!
        }
    };

    // Logs into facebook, then does the login for slickdeals
    sdfacebook.SingleSignon = function()
    {
        if($('#loginbox_signin_ajax'))
        {
            $('#loginbox_signin_ajax').css('display', 'inline-block');
            $('#loginbox_signin_ajax > img').attr('src', '/images/slickdeals/ajaxsmall.gif');
        }
        sdfacebook.FacebookLogin(function(){
            sdfacebook.SlickdealsLogin();
        });
    };

    // Unlinks the current account from facebook, and deauthorizes the app
    sdfacebook.UnlinkFacebook = function(access_token)
    {
        $.post("/ajax/profile_ajax.php",
                {
                    "do"            : "unlink_facebook",
                    "securitytoken" : SECURITYTOKEN
                },
                function(data)
                {
                    if(data.error)
                    {
                        errordialog(data.error, false, 200);
                        return false;
                    }
                    else
                    {
                        if(typeof(access_token) != "undefined")
                        {
                            sdfacebook.DeleteApp(access_token);
                            return true;
                        }
                        return false;
                    }
                },
                "json"
        );
    };

    // Updates the facebook id on the users account, and immediately gets an extended auth token
    sdfacebook.UpdateFacebookId = function(fbid, access_token, profile, callback)
    {
        $.post("/ajax/profile_ajax.php",
                {
                    "do"            : "link_facebook",
                    "facebookid"    : fbid,
                    "access_token"  : access_token,
                    'securitytoken' : SECURITYTOKEN,
                    'profile'       : profile
                },
                function(data)
                {
                    if(data.error != false)
                    {
                        errordialog(data.error, false, 200);
                    }
                    else
                    {
                        if(typeof callback == "function")
                        {
                            callback();
                        }
                    }
                },
                'json'
        );
    };

    sdfacebook.initChooseUsername = function(data)
    {
        var form = $($(data).find('checkusername').text()), doc = $(document), overlay;

        if($("#loginbox_overlay").length > 0)
        {
            $("#loginbox_overlay").remove();
        }
        $('body').append(form);
        $("#loginbox_overlay").show();

        $("#popup_dialog_newsletter_link").click(function () {
            $('#dialog_newsletter').dialog('open');
            return false;
        });

        // Attach events
        overlay = $('#loginbox_overlay');
        overlay.css('height', doc.height() + 'px');     // Set overlay to height of page
        overlay.click(function () {$(this).hide()});    // Hide form if overlay is clicked

        form = $('div.loginbox_container', overlay);
        form.click(function (e) {e.stopPropagation()}); // Allow clicks on form to prevent hiding stuff

        $('#loginbox_overlay').click(function(elem){
            if($(elem.target).attr('id') == 'loginbox_overlay')
            {
                overlay.remove();
                $('#loginbox_signin_ajax').hide();
            }
        });
        $('span.meh', form).click(function () {
            overlay.remove();
            $('#loginbox_signin_ajax').hide();
        }); // Allow hiding on a "never mind"

        $('#regform_choose_username', form).focus(); // Foooocus!

        $('#regform_choose_username').keyup(function(){
            $('#regform_submit').hide();
        });

        $('#regform_checkusername').click(function(){
            $('#regform_username_status > img').attr('src', '/images/slickdeals/ajaxsmall.gif');
            $('#regform_username_status').css('display', 'inline-block');
            var params = {};
            params['do'] = 'check_username';
            params['username'] = $('#regform_choose_username').val();
            var source =  $('#regform_checkusername').data('source');

            $.ajax({
                url: '/forums/sdlogin.php',
                cache: false,
                data: params,
                dataType: 'json',
                type: 'POST',
                success: function(data){
                    if(data.form)
                    {
                        $('body').append(data.form);
                    }
                    else
                    {
                        if(data.error == true)
                        {
                            SD.Analytics.signUpTrack('unsuccessful');
                            if (source == "mobile3") {
                                $('#regform_submit').hide();
                                $('#regform_username_status').html('Username has already been registered&hellip;');
                                $('#regform_username_status').removeClass('success');
                                $('#regform_username_status').addClass('failure');
                                $('#regform_username_status').show();
                            }
                            else
                            {
                                $('#regform_submit').hide();
                                $('#regform_errormessage').html(data.message);
                                $('#regform_username_status > img').attr('src', '/images/slickdeals/cross.png');
                            }
                        }
                        else
                        {
                            if (source == "mobile3") {
                                $('#regform_username_status').html('Username is available!');
                                $('#regform_username_status').removeClass('failure');
                                $('#regform_username_status').addClass('success');
                                $('#regform_username_status').show();
                                $('#regform_submit').show();
                            }
                            else
                            {
                                $('#regform_errormessage').html('');
                                $('#regform_submit').show();
                                $('#regform_username_status > img').attr('src', '/images/slickdeals/tick.png');
                            }
                        }
                    }
                }
            });
            return false;
        });

        $('#loginbox_overlay.loginbox_overlay_chooseuser #regform_submit').click(function(){
            if ($('.loginbox_form_container').length > 0) {
                $('.loginbox_form_container').block({
                    message: null,
                    overlayCSS:  {
                        backgroundColor: '',
                        opacity: 'inherit',
                        timeout: 5000
                    }
                });
            }

            sdfacebook.complete_signup = true;
            sdfacebook.chosen_username = $('#regform_choose_username').val();
            if($('#chk_newsletter').is(':checked') == true)
            {
                sdfacebook.newsletter = 1;
            }
            else
            {
                sdfacebook.newsletter = 0;
            }
            sdfacebook.SlickdealsLogin();
        });
    };

    function elementSupportsAttribute(element, attribute) {
        var test = document.createElement(element);
        return attribute in test;
    }
}

;/*
 * jQuery dropdown: A simple dropdown plugin
 *
 * Copyright 2013 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Licensed under the MIT license: http://opensource.org/licenses/MIT
 *
 */
if (jQuery) (function ($) {

    $.extend($.fn, {
        dropdown: function (method, data) {

            switch (method) {
                case 'show':
                    show(null, $(this));
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    return $(this).attr('data-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-dropdown');
                case 'disable':
                    return $(this).addClass('dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('dropdown-disabled');
            }

        }
    });

    function show(event, object) {

        var ibr = $(this).closest(".itemBottomRow, .content");
        if (ibr.length == 0 || !ibr.data("user_is_touching") || !ibr.data("user_is_entering"))
        {

            var trigger = event ? $(this) : object,
                dropdown = $(trigger.attr('data-dropdown')),
                isOpen = trigger.hasClass('dropdown-open');

            // In some cases we don't want to show it
            if (event) {
                if ($(event.target).hasClass('dropdown-ignore')) return;

                event.preventDefault();
                event.stopPropagation();
            } else {
                if (trigger !== object.target && $(object.target).hasClass('dropdown-ignore')) return;
            }
            hide();

            if (isOpen || trigger.hasClass('dropdown-disabled')) return;
            
            // Show it
            trigger.addClass('dropdown-open');
            dropdown
                .data('dropdown-trigger', trigger)
                .show();

            // Position it
            position();

            // Trigger the show callback
            dropdown
                .trigger('show', {
                             dropdown: dropdown,
                             trigger: trigger
                         });
        }
    }

    function hide(event) {

        // In some cases we don't hide them
        var targetGroup = event ? $(event.target).parents().addBack() : null;

        // Are we clicking anywhere in a dropdown?
        if (targetGroup && targetGroup.is('.dropdown')) {
             // Is it a dropdown menu?
             if (targetGroup.is('.dropdown-menu')) {
                 // Did we click on an option? If so close it.
                 if (!targetGroup.is('A')) return;
             } else {
                 // Nope, it's a panel. Leave it open.
                 return;
             }
        }

        // Hide any dropdown that may be showing
        $(document).find('.dropdown:visible').each(function () {
            var dropdown = $(this);
            dropdown
                .hide()
                .removeData('dropdown-trigger')
                .trigger('hide', { dropdown: dropdown });
        });

        // Remove all dropdown-open classes
        $(document).find('.dropdown-open').removeClass('dropdown-open');
    }

    function position() {

        var dropdown = $('.dropdown:visible').eq(0),
            trigger = dropdown.data('dropdown-trigger'),
            hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
            vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;

        if (dropdown.length === 0 || !trigger) return;

        // Position the dropdown relative-to-parent...
        if (dropdown.hasClass('dropdown-relative')) {
            dropdown.css({
                             left: dropdown.hasClass('dropdown-anchor-right') ?
                                   trigger.position().left - (dropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset :
                                   trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
                             top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset
                         });
        } else {
            // ...or relative to document
            dropdown.css({
                             left: dropdown.hasClass('dropdown-anchor-right') ?
                                   trigger.offset().left - (dropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
                             top: trigger.offset().top + trigger.outerHeight() + vOffset
                         });
        }
    }

    $(document).on('click.dropdown', '[data-dropdown]', show);
    $(document).on('click.dropdown', hide);
    $(window).on('resize', position);

})(jQuery);

;function genericdialog(title, msg, nomodal, ok, cancel, id)
{
    var div = document.createElement('div');
    div.id = (typeof(id) == 'undefined') ? 'generic_dialog_' + parseInt(((new Date).getTime())/ 1000) : id;
    div.title = title;

    $('body').append(div);
    var gdialog = $('#' + div.id);
    var gbuttons = {};
    if (cancel)
    {
        gbuttons.Cancel = function ()
        {
            if (typeof(cancel) == "function")
            {
                cancel(this);
            }
            $(this).dialog('close');
            $('#' + div.id).remove();
        };
    }
    if (ok)
    {
        gbuttons.Ok = function ()
        {
            if (typeof(ok) == "function")
            {
                ok(this);
            }
            $(this).dialog('close');
            $('#' + div.id).remove();
        };
    }
    gdialog.dialog({
        autoOpen: false,
        zIndex: 30000,
        modal: !nomodal,
        buttons: gbuttons
    });
    gdialog.html(msg);
    gdialog.dialog('open');
    $(".ui-dialog-buttonpane button:last").focus();
    return div.id;
}

function hidegenericdialog(id)
{
    id = (typeof(id) == 'undefined') ? 'generic_dialog' : id;
    var gdialog = $('#' + id);
    if (gdialog && gdialog.length > 0)
    {
        gdialog.dialog('close');
        gdialog.remove();
    }
}

function successdialog(msg, okfunc, w)
{
    hidegenericdialog();
    var sdialog = $("#success_dialog");
    if (sdialog.length === 0)
    {
        $("body").append("<div id='success_dialog' title='Success'></div>");
        sdialog = $("#success_dialog");
        sdialog.dialog({
            autoOpen: false,
            modal: true,
            zIndex: 30001,
            width: w || '',
            buttons: {
                Ok: function ()
                {
                    if (okfunc)
                    {
                        okfunc(this);
                    }
                    $(this).dialog('close');
                }
            }
        });
    }
    sdialog.html(msg);
    sdialog.dialog("open");
    $(".ui-dialog-buttonpane button:last").focus();
}

function errordialog(error, nobuttons, w)
{
    hidegenericdialog();
    var errdialog = $("#errordialog");
    if (errdialog.length === 0)
    {
        $("body").append("<div id='errordialog' title='Error'></div>");
        errdialog = $("#errordialog");
        errdialog.dialog({
            bgiframe: true,
            autoOpen: false,
            modal: true,
            width: w || '',
            buttons: (nobuttons ? {} : {
                Ok: function()
                {
                    $(this).dialog('close');
                }
            })
        }).parent('.ui-dialog').css('zIndex', 300002);
        // Fix for removal of z-index property in jQuery Ui v1.10
    }
    errdialog.html(error);
    errdialog.dialog('open');
    $(".ui-dialog-buttonpane button:last").focus();
}

function unverifiedEmailDialog()
{
    $('#unverifiedEmailError').modal({overlayClose:true, maxWidth:'420px'});
    return false;
}

$(document).ready(function() {
    if ($("#unverifiedEmailError").length > 0)
    {
        $("body").on("click", ".sendActivationEmail", function (e) {
            e.preventDefault();
            $.resendValidation({
                success : function (message) {
                    $.modal.close();
                    successdialog(message, null, 300);
                }, error: function (errorMessage) {
                    $.modal.close();
                    errordialog(errorMessage, null, 300);
                }
            });
        });
    }
});

;/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
*/
(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop,
                xMax: false
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});

                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        options.deactivate(activeRow);
                    }

                    activeRow = null;
                }
            };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                if (row == activeRow) {
                    return;
                }

                if (activeRow) {
                    options.deactivate(activeRow);
                }

                options.activate(row);
                activeRow = row;
            };

        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function(row) {
                var delay = activationDelay();

                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                    // If there is no other submenu row already active, then
                    // go ahead and activate immediately.
                    return 0;
                }

                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: options.xMax || offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: options.xMax || offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];

                if (!loc) {
                    return 0;
                }

                if (!prevLoc) {
                    prevLoc = loc;
                }

                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }

                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }

                // Detect if the user is moving towards the currently activated
                // submenu.
                //
                // If the mouse is heading relatively clearly towards
                // the submenu's content, we should wait and give the user more
                // time before activating a new row. If the mouse is heading
                // elsewhere, we can immediately activate a new row.
                //
                // We detect this by calculating the slope formed between the
                // current mouse location and the upper/lower right points of
                // the menu. We do the same for the previous mouse location.
                // If the current mouse location's slopes are
                // increasing/decreasing appropriately compared to the
                // previous's, we know the user is moving toward the submenu.
                //
                // Note that since the y-axis increases as the cursor moves
                // down the screen, we are looking for the slope between the
                // cursor and the upper right corner to decrease over time, not
                // increase (somewhat counterintuitively).
                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };

                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;

                // Our expectations for decreasing or increasing slope values
                // depends on which direction the submenu opens relative to the
                // main menu. By default, if the menu opens on the right, we
                // expect the slope between the cursor and the upper right
                // corner to decrease over time, as explained above. If the
                // submenu opens in a different direction, we change our slope
                // expectations.
                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }

                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);

                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {
                    // Mouse is moving from previous location towards the
                    // currently activated submenu. Delay before activating a
                    // new menu row, because user may be moving into submenu.
                    lastDelayLoc = loc;
                    return DELAY;
                }

                lastDelayLoc = null;
                return 0;
            };

        /**
         * Hook up initial menu events
         */
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);

        $(document).mousemove(mousemoveDocument);

    };
})(jQuery);
;/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*   sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*   interval: 100,   // number = milliseconds of polling interval
*   over: showNav,  // function = onMouseOver callback (required)
*   timeout: 0,   // number = milliseconds delay before onMouseOut function call
*   out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($) {
    $.fn.hoverIntent = function(f,g) {
        // default configuration options
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        // override configuration options with user supplied object
        cfg = $.extend(cfg, g ? { over: f, out: g } : f );

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).unbind("mousemove",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).bind("mousemove",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

            // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).unbind("mousemove",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // bind the function to the two event listeners
        return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
    };
})(jQuery);

;/**
 * Script loader plugin 1.2.1
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

var scripts = [];

function loadScript(url, callback, context) {

    var script = scripts[url] || (scripts[url] = {
        loaded    : false,
        callbacks : []
    });

    if(script.loaded) {
        return callback.apply(context);
    }

    script.callbacks.push({
        fn      : callback,
        context : context
    });

    if(script.callbacks.length == 1) {
        $.ajax({
            type     : 'GET',
            url      : url,
            dataType : 'script',
            cache    : true,
            success  : function() {
                script.loaded = true;
                $.each(script.callbacks, function() {
                    this.fn.apply(this.context);
                });
                script.callbacks.length = 0;
            }
        });
    }

}

$.requireScript = function(url, callback, context, options) {

    if(typeof options === 'undefined' && context && context.hasOwnProperty('parallel')) {
        options = context;
        context = window;
    }

    options = $.extend({ parallel : true }, options);

    if(!$.isArray(url)) {
        return loadScript(url, callback, context);
    }

    var counter = 0;

    // parallel loading
    if(options.parallel) {
        return $.each(url, function() {
            loadScript(this, function() {
                if(++counter == url.length) {
                    callback.apply(context);
                }
            });
        });
    }

    // sequential loading
    (function() {
        if(counter == url.length) {
            return callback.apply(context);
        }
        loadScript(url[counter++], arguments.callee);
    })();

};

$.requireScript.registerLoaded = function(url) {
    $.each($.makeArray(url), function() {
        (scripts[url] || (scripts[url] = {})).loaded = true;
    });
};

})(jQuery);
;/*!
 * jQuery blockUI plugin
 * Version 2.42 (11-MAY-2012)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2010 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {

	function setup($) {
		if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
			alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
			return;
		}

		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// retarded userAgent strings on Vista)
		var mode = document.documentMode || 0;
		var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
		var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout == undefined) timeout = 3000;
			$.blockUI({
				message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
				timeout: timeout, showOverlay: false,
				onUnblock: onClose,
				css: $.blockUI.defaults.growlCSS
			});
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static')
					this.style.position = 'relative';
				if ($.browser.msie)
					this.style.zoom = 1; // force 'hasLayout'
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.42; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,	  // title string; only used when theme == true
			draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor: '#000',
				opacity:	  	 0.6,
				cursor:		  	 'wait'
			},

			// styles applied when using $.growlUI
			growlCSS: {
				width:  	'350px',
				top:		'10px',
				left:   	'',
				right:  	'10px',
				border: 	'none',
				padding:	'5px',
				opacity:	0.6,
				cursor: 	'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius': '10px',
				'-moz-border-radius':	 '10px',
				'border-radius': 		 '10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	 onUnblock(element, options)
			onUnblock: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking

			var lyr1 = ($.browser.msie || opts.forceIframe)
				? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
				: $('<div class="blockUI" style="display:none"></div>');

			var lyr2 = opts.theme
				? $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>')
				: $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			var lyr3, s;
			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">' +
						'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
						'<div class="ui-widget-content ui-dialog-content"></div>' +
					'</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">' +
						'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
						'<div class="ui-widget-content ui-dialog-content"></div>' +
					'</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme && (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform))))
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if ($.browser.msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each([lyr1,lyr2,lyr3], function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
							 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
						full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
							 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(':input:enabled:visible',pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					full ? $.unblockUI(opts) : $(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		};

		// remove the block
		function remove(el, opts) {
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $('.blockUI', el);

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				els.fadeOut(opts.fadeOut);
				setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
			}
			else
				reset(els, data, opts, el);
		};

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				if (data.parent)
					data.parent.appendChild(data.el);
				$(el).removeData('blockUI.history');
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);
		};

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress';
			b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

		// former impl...
		//	   var $e = $('a,:input');
		//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		};

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back)},10);
						return false;
					}
				}
			}
			var opts = e.data;
			// allow events within the message content
			if ($(e.target).parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return $(e.target).parents().children().filter('div.blockUI').length == 0;
		};

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		};

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		};

		function sz(el, p) {
			return parseInt($.css(el,p))||0;
		};

	};


	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();

;/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

;/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *    The different options for target are:
 *      - A number position (will be applied to all axes).
 *      - A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *      - A jQuery/DOM element ( logically, child of the element to scroll )
 *      - A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *      - A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*       - A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *      - The string 'max' for go-to-end.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *   @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *   @option {Number} duration The OVERALL length of the animation.
 *   @option {String} easing The easing method for the animation.
 *   @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *   @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *   @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *   @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *   @option {Function} onAfter Function to be called after the scrolling ends.
 *   @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *          $('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *              alert('scrolled!!');
 *          }});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){

    var $scrollTo = $.scrollTo = function( target, duration, settings ){
        $(window).scrollTo( target, duration, settings );
    };

    $scrollTo.defaults = {
        axis:'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
    };

    // Returns the element that needs to be animated to scroll the window.
    // Kept for backwards compatibility (specially for localScroll & serialScroll)
    $scrollTo.window = function( scope ){
        return $(window)._scrollable();
    };

    // Hack, hack, hack :)
    // Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
    $.fn._scrollable = function(){
        return this.map(function(){
            var elem = this,
                isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

                if( !isWin )
                    return elem;

            var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;

            return $.browser.safari || doc.compatMode == 'BackCompat' ?
                doc.body :
                doc.documentElement;
        });
    };

    $.fn.scrollTo = function( target, duration, settings ){
        if( typeof duration == 'object' ){
            settings = duration;
            duration = 0;
        }
        if( typeof settings == 'function' )
            settings = { onAfter:settings };

        if( target == 'max' )
            target = 9e9;

        settings = $.extend( {}, $scrollTo.defaults, settings );
        // Speed is still recognized for backwards compatibility
        duration = duration || settings.speed || settings.duration;
        // Make sure the settings are given right
        settings.queue = settings.queue && settings.axis.length > 1;

        if( settings.queue )
            // Let's keep the overall duration
            duration /= 2;
        settings.offset = both( settings.offset );
        settings.over = both( settings.over );

        return this._scrollable().each(function(){
            var elem = this,
                $elem = $(elem),
                targ = target, toff, attr = {},
                win = $elem.is('html,body');

            switch( typeof targ ){
                // A number will pass the regex
                case 'number':
                case 'string':
                    if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
                        targ = both( targ );
                        // We are done
                        break;
                    }
                    // Relative selector, no break!
                    targ = $(targ,this);
                case 'object':
                    // DOMElement / jQuery
                    if( targ.is || targ.style )
                        // Get the real position of the target
                        toff = (targ = $(targ)).offset();
            }
            $.each( settings.axis.split(''), function( i, axis ){
                var Pos = axis == 'x' ? 'Left' : 'Top',
                    pos = Pos.toLowerCase(),
                    key = 'scroll' + Pos,
                    old = elem[key],
                    max = $scrollTo.max(elem, axis);

                if( toff ){// jQuery / DOMElement
                    attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

                    // If it's a dom element, reduce the margin
                    if( settings.margin ){
                        attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
                        attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
                    }

                    attr[key] += settings.offset[pos] || 0;

                    if( settings.over[pos] )
                        // Scroll to a fraction of its width/height
                        attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
                }else{
                    var val = targ[pos];
                    // Handle percentage values
                    attr[key] = val.slice && val.slice(-1) == '%' ?
                        parseFloat(val) / 100 * max
                        : val;
                }

                // Number or 'number'
                if( /^\d+$/.test(attr[key]) )
                    // Check the limits
                    attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

                // Queueing axes
                if( !i && settings.queue ){
                    // Don't waste time animating, if there's no need.
                    if( old != attr[key] )
                        // Intermediate animation
                        animate( settings.onAfterFirst );
                    // Don't animate this axis again in the next iteration.
                    delete attr[key];
                }
            });

            animate( settings.onAfter );

            function animate( callback ){
                $elem.animate( attr, duration, settings.easing, callback && function(){
                    callback.call(this, target, settings);
                });
            };

        }).end();
    };

    // Max scrolling position, works on quirks mode
    // It only fails (not too badly) on IE, quirks mode.
    $scrollTo.max = function( elem, axis ){
        var Dim = axis == 'x' ? 'Width' : 'Height',
            scroll = 'scroll'+Dim;

        if( !$(elem).is('html,body') )
            return elem[scroll] - $(elem)[Dim.toLowerCase()]();

        var size = 'client' + Dim,
            html = elem.ownerDocument.documentElement,
            body = elem.ownerDocument.body;

        return Math.max( html[scroll], body[scroll] )
             - Math.min( html[size]  , body[size]   );

    };

    function both( val ){
        return typeof val == 'object' ? val : { top:val, left:val };
    };

})( jQuery );

;/*!
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery BBQ: Back Button & Query Library
//
// *Version: 1.2.1, Last updated: 2/17/2010*
//
// Project Home - http://benalman.com/projects/jquery-bbq-plugin/
// GitHub       - http://github.com/cowboy/jquery-bbq/
// Source       - http://github.com/cowboy/jquery-bbq/raw/master/jquery.ba-bbq.js
// (Minified)   - http://github.com/cowboy/jquery-bbq/raw/master/jquery.ba-bbq.min.js (4.0kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// Basic AJAX     - http://benalman.com/code/projects/jquery-bbq/examples/fragment-basic/
// Advanced AJAX  - http://benalman.com/code/projects/jquery-bbq/examples/fragment-advanced/
// jQuery UI Tabs - http://benalman.com/code/projects/jquery-bbq/examples/fragment-jquery-ui-tabs/
// Deparam        - http://benalman.com/code/projects/jquery-bbq/examples/deparam/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4,
//                   Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-bbq/unit/
//
// About: Release History
//
// 1.2.1 - (2/17/2010) Actually fixed the stale window.location Safari bug from
//         <jQuery hashchange event> in BBQ, which was the main reason for the
//         previous release!
// 1.2   - (2/16/2010) Integrated <jQuery hashchange event> v1.2, which fixes a
//         Safari bug, the event can now be bound before DOM ready, and IE6/7
//         page should no longer scroll when the event is first bound. Also
//         added the <jQuery.param.fragment.noEscape> method, and reworked the
//         <hashchange event (BBQ)> internal "add" method to be compatible with
//         changes made to the jQuery 1.4.2 special events API.
// 1.1.1 - (1/22/2010) Integrated <jQuery hashchange event> v1.1, which fixes an
//         obscure IE8 EmulateIE7 meta tag compatibility mode bug.
// 1.1   - (1/9/2010) Broke out the jQuery BBQ event.special <hashchange event>
//         functionality into a separate plugin for users who want just the
//         basic event & back button support, without all the extra awesomeness
//         that BBQ provides. This plugin will be included as part of jQuery BBQ,
//         but also be available separately. See <jQuery hashchange event>
//         plugin for more information. Also added the <jQuery.bbq.removeState>
//         method and added additional <jQuery.deparam> examples.
// 1.0.3 - (12/2/2009) Fixed an issue in IE 6 where location.search and
//         location.hash would report incorrectly if the hash contained the ?
//         character. Also <jQuery.param.querystring> and <jQuery.param.fragment>
//         will no longer parse params out of a URL that doesn't contain ? or #,
//         respectively.
// 1.0.2 - (10/10/2009) Fixed an issue in IE 6/7 where the hidden IFRAME caused
//         a "This page contains both secure and nonsecure items." warning when
//         used on an https:// page.
// 1.0.1 - (10/7/2009) Fixed an issue in IE 8. Since both "IE7" and "IE8
//         Compatibility View" modes erroneously report that the browser
//         supports the native window.onhashchange event, a slightly more
//         robust test needed to be added.
// 1.0   - (10/2/2009) Initial release

(function($,window){
  '$:nomunge'; // Used by YUI compressor.

  // Some convenient shortcuts.
  var undefined,
    aps = Array.prototype.slice,
    decode = decodeURIComponent,

    // Method / object references.
    jq_param = $.param,
    jq_param_fragment,
    jq_deparam,
    jq_deparam_fragment,
    jq_bbq = $.bbq = $.bbq || {},
    jq_bbq_pushState,
    jq_bbq_getState,
    jq_elemUrlAttr,
    jq_event_special = $.event.special,

    // Reused strings.
    str_hashchange = 'hashchange',
    str_querystring = 'querystring',
    str_fragment = 'fragment',
    str_elemUrlAttr = 'elemUrlAttr',
    str_location = 'location',
    str_href = 'href',
    str_src = 'src',

    // Reused RegExp.
    re_trim_querystring = /^.*\?|#.*$/g,
    re_trim_fragment = /^.*\#/,
    re_no_escape,

    // Used by jQuery.elemUrlAttr.
    elemUrlAttr_cache = {};

  // A few commonly used bits, broken out to help reduce minified file size.

  function is_string( arg ) {
    return typeof arg === 'string';
  };

  // Why write the same function twice? Let's curry! Mmmm, curry..

  function curry( func ) {
    var args = aps.call( arguments, 1 );

    return function() {
      return func.apply( this, args.concat( aps.call( arguments ) ) );
    };
  };

  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    return url.replace( /^[^#]*#?(.*)$/, '$1' );
  };

  // Get location.search (or what you'd expect location.search to be) sans any
  // leading #. Thanks for making this necessary, IE6!
  function get_querystring( url ) {
    return url.replace( /(?:^[^?#]*\?([^#]*).*$)?.*/, '$1' );
  };

  // Section: Param (to string)
  //
  // Method: jQuery.param.querystring
  //
  // Retrieve the query string from a URL or if no arguments are passed, the
  // current window.location.
  //
  // Usage:
  //
  // > jQuery.param.querystring( [ url ] );
  //
  // Arguments:
  //
  //  url - (String) A URL containing query string params to be parsed. If url
  //    is not passed, the current window.location is used.
  //
  // Returns:
  //
  //  (String) The parsed query string, with any leading "?" removed.
  //

  // Method: jQuery.param.querystring (build url)
  //
  // Merge a URL, with or without pre-existing query string params, plus any
  // object, params string or URL containing query string params into a new URL.
  //
  // Usage:
  //
  // > jQuery.param.querystring( url, params [, merge_mode ] );
  //
  // Arguments:
  //
  //  url - (String) A valid URL for params to be merged into. This URL may
  //    contain a query string and/or fragment (hash).
  //  params - (String) A params string or URL containing query string params to
  //    be merged into url.
  //  params - (Object) A params object to be merged into url.
  //  merge_mode - (Number) Merge behavior defaults to 0 if merge_mode is not
  //    specified, and is as-follows:
  //
  //    * 0: params in the params argument will override any query string
  //         params in url.
  //    * 1: any query string params in url will override params in the params
  //         argument.
  //    * 2: params argument will completely replace any query string in url.
  //
  // Returns:
  //
  //  (String) Either a params string with urlencoded data or a URL with a
  //    urlencoded query string in the format 'a=b&c=d&e=f'.

  // Method: jQuery.param.fragment
  //
  // Retrieve the fragment (hash) from a URL or if no arguments are passed, the
  // current window.location.
  //
  // Usage:
  //
  // > jQuery.param.fragment( [ url ] );
  //
  // Arguments:
  //
  //  url - (String) A URL containing fragment (hash) params to be parsed. If
  //    url is not passed, the current window.location is used.
  //
  // Returns:
  //
  //  (String) The parsed fragment (hash) string, with any leading "#" removed.

  // Method: jQuery.param.fragment (build url)
  //
  // Merge a URL, with or without pre-existing fragment (hash) params, plus any
  // object, params string or URL containing fragment (hash) params into a new
  // URL.
  //
  // Usage:
  //
  // > jQuery.param.fragment( url, params [, merge_mode ] );
  //
  // Arguments:
  //
  //  url - (String) A valid URL for params to be merged into. This URL may
  //    contain a query string and/or fragment (hash).
  //  params - (String) A params string or URL containing fragment (hash) params
  //    to be merged into url.
  //  params - (Object) A params object to be merged into url.
  //  merge_mode - (Number) Merge behavior defaults to 0 if merge_mode is not
  //    specified, and is as-follows:
  //
  //    * 0: params in the params argument will override any fragment (hash)
  //         params in url.
  //    * 1: any fragment (hash) params in url will override params in the
  //         params argument.
  //    * 2: params argument will completely replace any query string in url.
  //
  // Returns:
  //
  //  (String) Either a params string with urlencoded data or a URL with a
  //    urlencoded fragment (hash) in the format 'a=b&c=d&e=f'.

  function jq_param_sub( is_fragment, get_func, url, params, merge_mode ) {
    var result,
      qs,
      matches,
      url_params,
      hash;

    if ( params !== undefined ) {
      // Build URL by merging params into url string.

      // matches[1] = url part that precedes params, not including trailing ?/#
      // matches[2] = params, not including leading ?/#
      // matches[3] = if in 'querystring' mode, hash including leading #, otherwise ''
      matches = url.match( is_fragment ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/ );

      // Get the hash if in 'querystring' mode, and it exists.
      hash = matches[3] || '';

      if ( merge_mode === 2 && is_string( params ) ) {
        // If merge_mode is 2 and params is a string, merge the fragment / query
        // string into the URL wholesale, without converting it into an object.
        qs = params.replace( is_fragment ? re_trim_fragment : re_trim_querystring, '' );

      } else {
        // Convert relevant params in url to object.
        url_params = jq_deparam( matches[2] );

        params = is_string( params )

          // Convert passed params string into object.
          ? jq_deparam[ is_fragment ? str_fragment : str_querystring ]( params )

          // Passed params object.
          : params;

        qs = merge_mode === 2 ? params                              // passed params replace url params
          : merge_mode === 1  ? $.extend( {}, params, url_params )  // url params override passed params
          : $.extend( {}, url_params, params );                     // passed params override url params

        // Convert params object to a string.
        qs = jq_param( qs );

        // Unescape characters specified via $.param.noEscape. Since only hash-
        // history users have requested this feature, it's only enabled for
        // fragment-related params strings.
        if ( is_fragment ) {
          qs = qs.replace( re_no_escape, decode );
        }
      }

      // Build URL from the base url, querystring and hash. In 'querystring'
      // mode, ? is only added if a query string exists. In 'fragment' mode, #
      // is always added.
      result = matches[1] + ( is_fragment ? '#' : qs || !matches[1] ? '?' : '' ) + qs + hash;

    } else {
      // If URL was passed in, parse params from URL string, otherwise parse
      // params from window.location.
      result = get_func( url !== undefined ? url : window[ str_location ][ str_href ] );
    }

    return result;
  };

  jq_param[ str_querystring ]                  = curry( jq_param_sub, 0, get_querystring );
  jq_param[ str_fragment ] = jq_param_fragment = curry( jq_param_sub, 1, get_fragment );

  // Method: jQuery.param.fragment.noEscape
  //
  // Specify characters that will be left unescaped when fragments are created
  // or merged using <jQuery.param.fragment>, or when the fragment is modified
  // using <jQuery.bbq.pushState>. This option only applies to serialized data
  // object fragments, and not set-as-string fragments. Does not affect the
  // query string. Defaults to ",/" (comma, forward slash).
  //
  // Note that this is considered a purely aesthetic option, and will help to
  // create URLs that "look pretty" in the address bar or bookmarks, without
  // affecting functionality in any way. That being said, be careful to not
  // unescape characters that are used as delimiters or serve a special
  // purpose, such as the "#?&=+" (octothorpe, question mark, ampersand,
  // equals, plus) characters.
  //
  // Usage:
  //
  // > jQuery.param.fragment.noEscape( [ chars ] );
  //
  // Arguments:
  //
  //  chars - (String) The characters to not escape in the fragment. If
  //    unspecified, defaults to empty string (escape all characters).
  //
  // Returns:
  //
  //  Nothing.

  jq_param_fragment.noEscape = function( chars ) {
    chars = chars || '';
    var arr = $.map( chars.split(''), encodeURIComponent );
    re_no_escape = new RegExp( arr.join('|'), 'g' );
  };

  // A sensible default. These are the characters people seem to complain about
  // "uglifying up the URL" the most.
  jq_param_fragment.noEscape( ',/' );

  // Section: Deparam (from string)
  //
  // Method: jQuery.deparam
  //
  // Deserialize a params string into an object, optionally coercing numbers,
  // booleans, null and undefined values; this method is the counterpart to the
  // internal jQuery.param method.
  //
  // Usage:
  //
  // > jQuery.deparam( params [, coerce ] );
  //
  // Arguments:
  //
  //  params - (String) A params string to be parsed.
  //  coerce - (Boolean) If true, coerces any numbers or true, false, null, and
  //    undefined to their actual value. Defaults to false if omitted.
  //
  // Returns:
  //
  //  (Object) An object representing the deserialized params string.

  $.deparam = jq_deparam = function( params, coerce ) {
    var obj = {},
      coerce_types = { 'true': !0, 'false': !1, 'null': null };

    // Iterate over all name=value pairs.
    $.each( params.replace( /\+/g, ' ' ).split( '&' ), function(j,v){
      var param = v.split( '=' ),
        key = decode( param[0] ),
        val,
        cur = obj,
        i = 0,

        // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
        // into its component parts.
        keys = key.split( '][' ),
        keys_last = keys.length - 1;

      // If the first keys part contains [ and the last ends with ], then []
      // are correctly balanced.
      if ( /\[/.test( keys[0] ) && /\]$/.test( keys[ keys_last ] ) ) {
        // Remove the trailing ] from the last keys part.
        keys[ keys_last ] = keys[ keys_last ].replace( /\]$/, '' );

        // Split first keys part into two parts on the [ and add them back onto
        // the beginning of the keys array.
        keys = keys.shift().split('[').concat( keys );

        keys_last = keys.length - 1;
      } else {
        // Basic 'foo' style key.
        keys_last = 0;
      }

      // Are we dealing with a name=value pair, or just a name?
      if ( param.length === 2 ) {
        val = decode( param[1] );

        // Coerce values.
        if ( coerce ) {
          val = val && !isNaN(val)            ? +val              // number
            : val === 'undefined'             ? undefined         // undefined
            : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
            : val;                                                // string
        }

        if ( keys_last ) {
          // Complex key, build deep object structure based on a few rules:
          // * The 'cur' pointer starts at the object top-level.
          // * [] = array push (n is set to array length), [n] = array if n is
          //   numeric, otherwise object.
          // * If at the last keys part, set the value.
          // * For each keys part, if the current level is undefined create an
          //   object or array based on the type of the next keys part.
          // * Move the 'cur' pointer to the next level.
          // * Rinse & repeat.
          for ( ; i <= keys_last; i++ ) {
            key = keys[i] === '' ? cur.length : keys[i];
            cur = cur[key] = i < keys_last
              ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
              : val;
          }

        } else {
          // Simple key, even simpler rules, since only scalars and shallow
          // arrays are allowed.

          if ( $.isArray( obj[key] ) ) {
            // val is already an array, so push on the next value.
            obj[key].push( val );

          } else if ( obj[key] !== undefined ) {
            // val isn't an array, but since a second value has been specified,
            // convert val into an array.
            obj[key] = [ obj[key], val ];

          } else {
            // val is a scalar.
            obj[key] = val;
          }
        }

      } else if ( key ) {
        // No value was defined, so set something meaningful.
        obj[key] = coerce
          ? undefined
          : '';
      }
    });

    return obj;
  };

  // Method: jQuery.deparam.querystring
  //
  // Parse the query string from a URL or the current window.location,
  // deserializing it into an object, optionally coercing numbers, booleans,
  // null and undefined values.
  //
  // Usage:
  //
  // > jQuery.deparam.querystring( [ url ] [, coerce ] );
  //
  // Arguments:
  //
  //  url - (String) An optional params string or URL containing query string
  //    params to be parsed. If url is omitted, the current window.location
  //    is used.
  //  coerce - (Boolean) If true, coerces any numbers or true, false, null, and
  //    undefined to their actual value. Defaults to false if omitted.
  //
  // Returns:
  //
  //  (Object) An object representing the deserialized params string.

  // Method: jQuery.deparam.fragment
  //
  // Parse the fragment (hash) from a URL or the current window.location,
  // deserializing it into an object, optionally coercing numbers, booleans,
  // null and undefined values.
  //
  // Usage:
  //
  // > jQuery.deparam.fragment( [ url ] [, coerce ] );
  //
  // Arguments:
  //
  //  url - (String) An optional params string or URL containing fragment (hash)
  //    params to be parsed. If url is omitted, the current window.location
  //    is used.
  //  coerce - (Boolean) If true, coerces any numbers or true, false, null, and
  //    undefined to their actual value. Defaults to false if omitted.
  //
  // Returns:
  //
  //  (Object) An object representing the deserialized params string.

  function jq_deparam_sub( is_fragment, url_or_params, coerce ) {
    if ( url_or_params === undefined || typeof url_or_params === 'boolean' ) {
      // url_or_params not specified.
      coerce = url_or_params;
      url_or_params = jq_param[ is_fragment ? str_fragment : str_querystring ]();
    } else {
      url_or_params = is_string( url_or_params )
        ? url_or_params.replace( is_fragment ? re_trim_fragment : re_trim_querystring, '' )
        : url_or_params;
    }

    return jq_deparam( url_or_params, coerce );
  };

  jq_deparam[ str_querystring ]                    = curry( jq_deparam_sub, 0 );
  jq_deparam[ str_fragment ] = jq_deparam_fragment = curry( jq_deparam_sub, 1 );

  // Section: Element manipulation
  //
  // Method: jQuery.elemUrlAttr
  //
  // Get the internal "Default URL attribute per tag" list, or augment the list
  // with additional tag-attribute pairs, in case the defaults are insufficient.
  //
  // In the <jQuery.fn.querystring> and <jQuery.fn.fragment> methods, this list
  // is used to determine which attribute contains the URL to be modified, if
  // an "attr" param is not specified.
  //
  // Default Tag-Attribute List:
  //
  //  a      - href
  //  base   - href
  //  iframe - src
  //  img    - src
  //  input  - src
  //  form   - action
  //  link   - href
  //  script - src
  //
  // Usage:
  //
  // > jQuery.elemUrlAttr( [ tag_attr ] );
  //
  // Arguments:
  //
  //  tag_attr - (Object) An object containing a list of tag names and their
  //    associated default attribute names in the format { tag: 'attr', ... } to
  //    be merged into the internal tag-attribute list.
  //
  // Returns:
  //
  //  (Object) An object containing all stored tag-attribute values.

  // Only define function and set defaults if function doesn't already exist, as
  // the urlInternal plugin will provide this method as well.
  $[ str_elemUrlAttr ] || ($[ str_elemUrlAttr ] = function( obj ) {
    return $.extend( elemUrlAttr_cache, obj );
  })({
    a: str_href,
    base: str_href,
    iframe: str_src,
    img: str_src,
    input: str_src,
    form: 'action',
    link: str_href,
    script: str_src
  });

  jq_elemUrlAttr = $[ str_elemUrlAttr ];

  // Method: jQuery.fn.querystring
  //
  // Update URL attribute in one or more elements, merging the current URL (with
  // or without pre-existing query string params) plus any params object or
  // string into a new URL, which is then set into that attribute. Like
  // <jQuery.param.querystring (build url)>, but for all elements in a jQuery
  // collection.
  //
  // Usage:
  //
  // > jQuery('selector').querystring( [ attr, ] params [, merge_mode ] );
  //
  // Arguments:
  //
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    merge params or url into. See <jQuery.elemUrlAttr> for a list of default
  //    attributes.
  //  params - (Object) A params object to be merged into the URL attribute.
  //  params - (String) A URL containing query string params, or params string
  //    to be merged into the URL attribute.
  //  merge_mode - (Number) Merge behavior defaults to 0 if merge_mode is not
  //    specified, and is as-follows:
  //
  //    * 0: params in the params argument will override any params in attr URL.
  //    * 1: any params in attr URL will override params in the params argument.
  //    * 2: params argument will completely replace any query string in attr
  //         URL.
  //
  // Returns:
  //
  //  (jQuery) The initial jQuery collection of elements, but with modified URL
  //  attribute values.

  // Method: jQuery.fn.fragment
  //
  // Update URL attribute in one or more elements, merging the current URL (with
  // or without pre-existing fragment/hash params) plus any params object or
  // string into a new URL, which is then set into that attribute. Like
  // <jQuery.param.fragment (build url)>, but for all elements in a jQuery
  // collection.
  //
  // Usage:
  //
  // > jQuery('selector').fragment( [ attr, ] params [, merge_mode ] );
  //
  // Arguments:
  //
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    merge params into. See <jQuery.elemUrlAttr> for a list of default
  //    attributes.
  //  params - (Object) A params object to be merged into the URL attribute.
  //  params - (String) A URL containing fragment (hash) params, or params
  //    string to be merged into the URL attribute.
  //  merge_mode - (Number) Merge behavior defaults to 0 if merge_mode is not
  //    specified, and is as-follows:
  //
  //    * 0: params in the params argument will override any params in attr URL.
  //    * 1: any params in attr URL will override params in the params argument.
  //    * 2: params argument will completely replace any fragment (hash) in attr
  //         URL.
  //
  // Returns:
  //
  //  (jQuery) The initial jQuery collection of elements, but with modified URL
  //  attribute values.

  function jq_fn_sub( mode, force_attr, params, merge_mode ) {
    if ( !is_string( params ) && typeof params !== 'object' ) {
      // force_attr not specified.
      merge_mode = params;
      params = force_attr;
      force_attr = undefined;
    }

    return this.each(function(){
      var that = $(this),

        // Get attribute specified, or default specified via $.elemUrlAttr.
        attr = force_attr || jq_elemUrlAttr()[ ( this.nodeName || '' ).toLowerCase() ] || '',

        // Get URL value.
        url = attr && that.attr( attr ) || '';

      // Update attribute with new URL.
      that.attr( attr, jq_param[ mode ]( url, params, merge_mode ) );
    });

  };

  $.fn[ str_querystring ] = curry( jq_fn_sub, str_querystring );
  $.fn[ str_fragment ]    = curry( jq_fn_sub, str_fragment );

  // Section: History, hashchange event
  //
  // Method: jQuery.bbq.pushState
  //
  // Adds a 'state' into the browser history at the current position, setting
  // location.hash and triggering any bound <hashchange event> callbacks
  // (provided the new state is different than the previous state).
  //
  // If no arguments are passed, an empty state is created, which is just a
  // shortcut for jQuery.bbq.pushState( {}, 2 ).
  //
  // Usage:
  //
  // > jQuery.bbq.pushState( [ params [, merge_mode ] ] );
  //
  // Arguments:
  //
  //  params - (String) A serialized params string or a hash string beginning
  //    with # to merge into location.hash.
  //  params - (Object) A params object to merge into location.hash.
  //  merge_mode - (Number) Merge behavior defaults to 0 if merge_mode is not
  //    specified (unless a hash string beginning with # is specified, in which
  //    case merge behavior defaults to 2), and is as-follows:
  //
  //    * 0: params in the params argument will override any params in the
  //         current state.
  //    * 1: any params in the current state will override params in the params
  //         argument.
  //    * 2: params argument will completely replace current state.
  //
  // Returns:
  //
  //  Nothing.
  //
  // Additional Notes:
  //
  //  * Setting an empty state may cause the browser to scroll.
  //  * Unlike the fragment and querystring methods, if a hash string beginning
  //    with # is specified as the params agrument, merge_mode defaults to 2.

  jq_bbq.pushState = jq_bbq_pushState = function( params, merge_mode ) {
    if ( is_string( params ) && /^#/.test( params ) && merge_mode === undefined ) {
      // Params string begins with # and merge_mode not specified, so completely
      // overwrite window.location.hash.
      merge_mode = 2;
    }

    var has_args = params !== undefined,
      // Merge params into window.location using $.param.fragment.
      url = jq_param_fragment( window[ str_location ][ str_href ],
        has_args ? params : {}, has_args ? merge_mode : 2 );

    // Set new window.location.href. If hash is empty, use just # to prevent
    // browser from reloading the page. Note that Safari 3 & Chrome barf on
    // location.hash = '#'.
    window[ str_location ][ str_href ] = url + ( /#/.test( url ) ? '' : '#' );
  };

  // Method: jQuery.bbq.getState
  //
  // Retrieves the current 'state' from the browser history, parsing
  // location.hash for a specific key or returning an object containing the
  // entire state, optionally coercing numbers, booleans, null and undefined
  // values.
  //
  // Usage:
  //
  // > jQuery.bbq.getState( [ key ] [, coerce ] );
  //
  // Arguments:
  //
  //  key - (String) An optional state key for which to return a value.
  //  coerce - (Boolean) If true, coerces any numbers or true, false, null, and
  //    undefined to their actual value. Defaults to false.
  //
  // Returns:
  //
  //  (Anything) If key is passed, returns the value corresponding with that key
  //    in the location.hash 'state', or undefined. If not, an object
  //    representing the entire 'state' is returned.

  jq_bbq.getState = jq_bbq_getState = function( key, coerce ) {
    return key === undefined || typeof key === 'boolean'
      ? jq_deparam_fragment( key ) // 'key' really means 'coerce' here
      : jq_deparam_fragment( coerce )[ key ];
  };

  // Method: jQuery.bbq.removeState
  //
  // Remove one or more keys from the current browser history 'state', creating
  // a new state, setting location.hash and triggering any bound
  // <hashchange event> callbacks (provided the new state is different than
  // the previous state).
  //
  // If no arguments are passed, an empty state is created, which is just a
  // shortcut for jQuery.bbq.pushState( {}, 2 ).
  //
  // Usage:
  //
  // > jQuery.bbq.removeState( [ key [, key ... ] ] );
  //
  // Arguments:
  //
  //  key - (String) One or more key values to remove from the current state,
  //    passed as individual arguments.
  //  key - (Array) A single array argument that contains a list of key values
  //    to remove from the current state.
  //
  // Returns:
  //
  //  Nothing.
  //
  // Additional Notes:
  //
  //  * Setting an empty state may cause the browser to scroll.

  jq_bbq.removeState = function( arr ) {
    var state = {};

    // If one or more arguments is passed..
    if ( arr !== undefined ) {

      // Get the current state.
      state = jq_bbq_getState();

      // For each passed key, delete the corresponding property from the current
      // state.
      $.each( $.isArray( arr ) ? arr : arguments, function(i,v){
        delete state[ v ];
      });
    }

    // Set the state, completely overriding any existing state.
    jq_bbq_pushState( state, 2 );
  };

  // Event: hashchange event (BBQ)
  //
  // Usage in jQuery 1.4 and newer:
  //
  // In jQuery 1.4 and newer, the event object passed into any hashchange event
  // callback is augmented with a copy of the location.hash fragment at the time
  // the event was triggered as its event.fragment property. In addition, the
  // event.getState method operates on this property (instead of location.hash)
  // which allows this fragment-as-a-state to be referenced later, even after
  // window.location may have changed.
  //
  // Note that event.fragment and event.getState are not defined according to
  // W3C (or any other) specification, but will still be available whether or
  // not the hashchange event exists natively in the browser, because of the
  // utility they provide.
  //
  // The event.fragment property contains the output of <jQuery.param.fragment>
  // and the event.getState method is equivalent to the <jQuery.bbq.getState>
  // method.
  //
  // > $(window).bind( 'hashchange', function( event ) {
  // >   var hash_str = event.fragment,
  // >     param_obj = event.getState(),
  // >     param_val = event.getState( 'param_name' ),
  // >     param_val_coerced = event.getState( 'param_name', true );
  // >   ...
  // > });
  //
  // Usage in jQuery 1.3.2:
  //
  // In jQuery 1.3.2, the event object cannot to be augmented as in jQuery 1.4+,
  // so the fragment state isn't bound to the event object and must instead be
  // parsed using the <jQuery.param.fragment> and <jQuery.bbq.getState> methods.
  //
  // > $(window).bind( 'hashchange', function( event ) {
  // >   var hash_str = $.param.fragment(),
  // >     param_obj = $.bbq.getState(),
  // >     param_val = $.bbq.getState( 'param_name' ),
  // >     param_val_coerced = $.bbq.getState( 'param_name', true );
  // >   ...
  // > });
  //
  // Additional Notes:
  //
  // * Due to changes in the special events API, jQuery BBQ v1.2 or newer is
  //   required to enable the augmented event object in jQuery 1.4.2 and newer.
  // * See <jQuery hashchange event> for more detailed information.

  jq_event_special[ str_hashchange ] = $.extend( jq_event_special[ str_hashchange ], {

    // Augmenting the event object with the .fragment property and .getState
    // method requires jQuery 1.4 or newer. Note: with 1.3.2, everything will
    // work, but the event won't be augmented)
    add: function( handleObj ) {
      var old_handler;

      function new_handler(e) {
        // e.fragment is set to the value of location.hash (with any leading #
        // removed) at the time the event is triggered.
        var hash = e[ str_fragment ] = jq_param_fragment();

        // e.getState() works just like $.bbq.getState(), but uses the
        // e.fragment property stored on the event object.
        e.getState = function( key, coerce ) {
          return key === undefined || typeof key === 'boolean'
            ? jq_deparam( hash, key ) // 'key' really means 'coerce' here
            : jq_deparam( hash, coerce )[ key ];
        };

        old_handler.apply( this, arguments );
      };

      // This may seem a little complicated, but it normalizes the special event
      // .add method between jQuery 1.4/1.4.1 and 1.4.2+
      if ( $.isFunction( handleObj ) ) {
        // 1.4, 1.4.1
        old_handler = handleObj;
        return new_handler;
      } else {
        // 1.4.2+
        old_handler = handleObj.handler;
        handleObj.handler = new_handler;
      }
    }

  });

})(jQuery,this);

/*!
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.2, Last updated: 2/11/2010*
//
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (1.1kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// This working example, complete with fully commented code, illustrate one way
// in which this plugin can be used.
//
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4, Chrome, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
//
// About: Known issues
//
// While this jQuery hashchange event implementation is quite stable and robust,
// there are a few unfortunate browser bugs surrounding expected hashchange
// event-based behaviors, independent of any JavaScript window.onhashchange
// abstraction. See the following examples for more information:
//
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
//
// About: Release History
//
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.

  // Method / object references.
  var fake_onhashchange,
    jq_event_special = $.event.special,

    // Reused strings.
    str_location = 'location',
    str_hashchange = 'hashchange',
    str_href = 'href',

    // IE6/7 specifically need some special love when it comes to back-button
    // support, so let's do a little browser sniffing..
    browser = $.browser,
    mode = document.documentMode,
    is_old_ie = browser.msie && ( mode === undefined || mode < 8 ),

    // Does the browser support window.onhashchange? Test for IE version, since
    // IE8 incorrectly reports this when in "IE7" or "IE8 Compatibility View"!
    supports_onhashchange = 'on' + str_hashchange in window && !is_old_ie;

  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || window[ str_location ][ str_href ];
    return url.replace( /^[^#]*#?(.*)$/, '$1' );
  };

  // Property: jQuery.hashchangeDelay
  //
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 100.

  $[ str_hashchange + 'Delay' ] = 100;

  // Event: hashchange event
  //
  // Fired when location.hash changes. In browsers that support it, the native
  // window.onhashchange event is used (IE8, FF3.6), otherwise a polling loop is
  // initialized, running every <jQuery.hashchangeDelay> milliseconds to see if
  // the hash has changed. In IE 6 and 7, a hidden Iframe is created to allow
  // the back button and hash-based history to work.
  //
  // Usage:
  //
  // > $(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  //
  // Additional Notes:
  //
  // * The polling loop and Iframe are not created until at least one callback
  //   is actually bound to 'hashchange'.
  // * If you need the bound callback(s) to execute immediately, in cases where
  //   the page 'state' exists on page load (via bookmark or page refresh, for
  //   example) use $(window).trigger( 'hashchange' );
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a $(document).ready() callback.

  jq_event_special[ str_hashchange ] = $.extend( jq_event_special[ str_hashchange ], {

    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },

    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }

  });

  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,
      iframe,
      set_history,
      get_history;

    // Initialize. In IE 6/7, creates a hidden Iframe for history handling.
    function init(){
      // Most browsers don't need special methods here..
      set_history = get_history = function(val){ return val; };

      // But IE6/7 do!
      if ( is_old_ie ) {

        // Create hidden Iframe after the end of the body to prevent initial
        // page load from scrolling unnecessarily.
        iframe = $('<iframe src="javascript:0"/>').hide().insertAfter( 'body' )[0].contentWindow;

        // Get history by looking at the hidden Iframe's location.hash.
        get_history = function() {
          return get_fragment( iframe.document[ str_location ][ str_href ] );
        };

        // Set a new history item by opening and then closing the Iframe
        // document, *then* setting its location.hash.
        set_history = function( hash, history_hash ) {
          if ( hash !== history_hash ) {
            var doc = iframe.document;
            doc.open().close();
            doc[ str_location ].hash = '#' + hash;
          }
        };

        // Set initial history.
        set_history( get_fragment() );
      }
    };

    // Start the polling loop.
    self.start = function() {
      // Polling loop is already running!
      if ( timeout_id ) { return; }

      // Remember the initial hash so it doesn't get triggered immediately.
      var last_hash = get_fragment();

      // Initialize if not yet initialized.
      set_history || init();

      // This polling loop checks every $.hashchangeDelay milliseconds to see if
      // location.hash has changed, and triggers the 'hashchange' event on
      // window when necessary.
      (function loopy(){
        var hash = get_fragment(),
          history_hash = get_history( last_hash );

        if ( hash !== last_hash ) {
          set_history( last_hash = hash, history_hash );

          $(window).trigger( str_hashchange );

        } else if ( history_hash !== last_hash ) {
          window[ str_location ][ str_href ] = window[ str_location ][ str_href ].replace( /#.*/, '' ) + '#' + history_hash;
        }

        timeout_id = setTimeout( loopy, $[ str_hashchange + 'Delay' ] );
      })();
    };

    // Stop the polling loop, but only if an IE6/7 Iframe wasn't created. In
    // that case, even if there are no longer any bound event handlers, the
    // polling loop is still necessary for back/next to work at all!
    self.stop = function() {
      if ( !iframe ) {
        timeout_id && clearTimeout( timeout_id );
        timeout_id = 0;
      }
    };

    return self;
  })();

})(jQuery,this);

;(function (onLoad) {
    if (typeof requirejs === 'function')
    {
        onLoad();
    }
    else
    {
        $(window).load(onLoad);
    }
}(function () {
    $(".lazyimg").show().lazyload({
        'effect': 'show',
        'event': 'sporty',
        'skip_invisible': false
    });

    setTimeout(function () {
        $(".lazyimg").trigger("sporty");
    }, 500);
}));

$(document).ready(function () {

    $("#nojs").removeAttr("id");

    var activateFunc = (function () {
        var subPanes = $(".subPane");
        return function activateFunc(row) {
            var jqRow = $(row),
                rowContent = jqRow.find(".subPane");
            subPanes.hide();
            rowContent.show();
            jqRow.addClass("active");
        };
    }());

    function deactivateFunc(row)
    {
        var jqRow = $(row),
            rowContent = jqRow.find(".subPane");
        rowContent.hide();
        jqRow.removeClass("active");
    }

    $("ul.globalNav li.globalDropdown > ul.subContainer").menuAim({
        activate: activateFunc,
        deactivate: deactivateFunc,
        xMax: 303
    });

    var handlerIn = function (e) {
        var jqThis = $(this),
            jqSub = jqThis.find("ul.subContainer:first, .subPane:first");
        jqThis.addClass("hover");
        $(".globalNav > li > ul.subContainer").hide();
        jqSub.show();

        //check if search auto suggest is open and if it is close it
        var searchAutoSuggest = $("div.searchSuggest");
        if ( searchAutoSuggest.length )
        {
            searchAutoSuggest.remove();
        }
    }

    function handlerOut(e)
    {
        var jqThis = $(this),
            jqSub = jqThis.find(".subContainer:first");
        jqThis.removeClass("hover");
    }

    $(".globalNav > li").hoverIntent({
        over: handlerIn,
        out: handlerOut,
        timeout: 100
    });

    $(".globalInnerLeft").on("mouseleave", function () {
        $(".subContainer").hide();
    });

    $("#userDropdownMenu > ul").find("> li.closed, > li.open").find("> a").click(function (ev) {
        $(this).parent().toggleClass("closed").toggleClass("open");
        ev.preventDefault();
        return false;
    });

    $(".beta .icon").click(function () {
        var confirm_var = confirm("If you want to change your view later you can use the view links at the bottom of the page");
        if (confirm_var == true)
        {
            var d = new Date;
            d.setTime(new Date().getTime() + 15552000000);
            document.cookie = 'fpDismissedOptInBanner=1; expires=' + d.toUTCString() + '; path=/';

            $(".beta").hide();
        }
        else
        {
            return false;
        }

    });

    $('#globalBar:not([data-nosticky])').scrollToFixed({
        dontSetWidth: true
    });

    $('#dealStats:not(.expiredDeal):not([data-nosticky])').scrollToFixed({
        marginTop: 64,
        zIndex: 100,
        dontSetWidth: true
    });

    $("body").on("click", (function () {
        var cachedElements;
        return function (e) {
            if (!cachedElements)
            {
                cachedElements = {
                    jqSearchDrop: $("div.searchDropdown"),
                    jqUpAndDown: $(".globalSearch .icon-arrow-down, .globalSearch  .icon-arrow-up")
                };
            }

            closeSearchDropdown(cachedElements, e.target);
        };
    }()));

    function closeSearchDropdown(cached, target)
    {
        if ((!($.contains(cached.jqSearchDrop[0], target)) || cached.jqSearchDrop.is(target)) && !cached.jqUpAndDown.is(target))
        {
            cached.jqSearchDrop.hide();

            $(".globalSearch .icon-arrow-down").show();
            $(".globalSearch .icon-arrow-up").hide();
        }
    }

    $(".globalSearch .icon-arrow-down").click(function (e) {
        $(".searchDropdown").toggle();
        $(".globalSearch .icon-arrow-down").toggle();
        $(".globalSearch .icon-arrow-up").toggle();
        e.preventDefault();
    });

    $(".globalSearch .icon-arrow-up").click(function (e) {
        $(".searchDropdown").hide();
        $(".globalSearch .icon-arrow-down").show();
        $(this).hide();
        e.preventDefault();
    });

    $(".globalSearch input.searchBox").focus(function () {
        $(this).parent().parent().addClass("globalSearchFocus");
    }).blur(function () {
        $(this).parent().parent().removeClass("globalSearchFocus");
    });

    $(".globalSearch input.searchBox").hover(function () {
        $(this).parent().parent().addClass("globalSearchHover");
    });

    $(".globalSearch input.searchBox").hover(function () {
        $(this).parent().parent().addClass("globalSearchHover");
    }, function () {
        $(this).parent().parent().removeClass("globalSearchHover");
    });

});

// Replacing SDXT crud
if (typeof __linkCap == "undefined")
{
    __linkCap = new Date();
    __linkCap.setTime(new Date().getTime() + 31449600000);

    $(document).on('mousedown', 'a[data-link]', function (e) {
        if (typeof $ != 'undefined' && 'cookie' in $)
        {
            $.cookie('sdxt', window.location.pathname + ':' + $(this).data('link'), {expires: 364, path: '/'});
        }
        else
        {
            document.cookie = 'sdxt=' + window.location.pathname + ':' + $(this).data('link') + '; expires=' + __linkCap.toUTCString() + '; path=/';
        }
    });

    if (typeof $ != 'undefined' && 'removeCookie' in $)
    {
        $.removeCookie('sdxt');
    }
    else
    {
        document.cookie = 'sdxt=""; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    }
}

if (window.handleFlight === undefined)
{
    /*jslint nomen: true, plusplus: true, white: true */
    (function (w, d) {
        "use strict";
        var handleEvent,
            manual,
            emitGA,
            req = false,
            sendReq,
            idx;

        // And another IE correction
        w.hasOwnProperty = w.hasOwnProperty || Object.prototype.hasOwnProperty;

        // Send event to Google Analytics.
        emitGA = function (csv, doNotCountInBounce) {
            if (csv)
            {
                w._gaq = w._gaq || [];
                csv = csv.split(',');
                if (csv.length > 2)
                {
                    w._gaq.push(['_trackEvent', csv[0], csv[1], csv[2], csv.length === 4 ? parseInt(csv[3], 10) : undefined, doNotCountInBounce === undefined ? true : doNotCountInBounce]);
                }
            }
        };

        // Send ajax post request to predetermined endpoint.
        // Old style - deal with it.
        sendReq = function (data) {
            var reqIdx = 0;

            if (!(typeof data === "string" && data.indexOf(',') !== -1))
            {
                return;
            }

            if (!req)
            {
                req = [];
            }

            reqIdx = req.length;

            if (w.XMLHttpRequest)
            {
                req.push(new w.XMLHttpRequest());
            }
            else if (w.ActiveXObject)
            {
                try {
                    req.push(new w.ActiveXObject('Microsoft.XMLHTTP'));
                }
                catch (e) {
                    try {
                        req.push(new w.ActiveXObject('Msxml2.XMLHTTP'));
                    }
                    catch (f) {
                        return;
                    }
                }
            }

            if (req[reqIdx])
            {
                req[reqIdx].open('POST', '/ajax/flightRecorder.php');
                req[reqIdx].setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                req[reqIdx].send('aio=' + encodeURIComponent(data));
            }

            for (null; reqIdx >= 0; reqIdx--) {
                if (req[reqIdx] !== null && req[reqIdx].readyState == 4)
                {
                    req[reqIdx] = null;
                }
            }
        };

        handleEvent = function (e) {
            var levels = 4,
                elem = e.target || e.srcElement,
                eventTrack = elem.getAttribute('data-eventtrack'),
                gaPresent;

            // Mainly for those who click directly on the arrow or buried icons
            if (eventTrack === null)
            {
                for (null; levels > 0; levels--) {
                    elem = elem.parentNode;

                    if (elem.getAttribute === undefined)
                    {
                        return;
                    }

                    if (elem.getAttribute('data-eventTrack') !== null)
                    {
                        levels = 0;
                    }
                }
                eventTrack = elem.getAttribute('data-eventtrack');
            }

            // Noop
            if (!eventTrack)
            {
                return;
            }

            gaPresent = !!elem.getAttribute('data-emitGA');

            if (gaPresent)
            {
                emitGA(eventTrack);
            }

            sendReq(eventTrack);
        };

        manual = function (obj) {
            if (obj.data === undefined)
            {
                return;
            }

            if (!!obj.emitGA)
            {
                // Magical IE
                obj.hasOwnProperty = obj.hasOwnProperty || Object.prototype.hasOwnProperty;

                // Just in case IE is worse than I thought.
                if (!!obj.hasOwnProperty)
                {
                    emitGA(obj.data, obj.hasOwnProperty('doNotCountInBounce') ? !!obj.doNotCountInBounce : true);
                }
            }

            sendReq(obj.data);
        };

        // Attach to d
        if (d.addEventListener)
        {
            d.addEventListener('mousedown', handleEvent, false);
        }
        else if (d.attachEvent)
        {
            d.attachEvent('onmousedown', handleEvent);
        }

        // Grab any pending events:
        if (!!w.hasOwnProperty && w.hasOwnProperty('_fRD'))
        {
            for (idx = 0; idx < w._fRD.length; idx++) {
                manual(w._fRD[idx]);
            }
        }

        // Expose
        w.handleFlight = {manual: manual};

    }(window, document));
}

;function SD_QuickReply()
{
    var mobile_device = navigator.userAgent.match(/(iPad|iPhone|Android|Mobile)/i);

    var div      = $("#quickreply");
    var add      = $(".add-comment");
    var add2     = $("#addComment");
    var content  = $("#qr_content");
    var min      = $("#qr_frame_controls .min");
    var close    = $("#qr_frame_controls .close");
    var instance = null;

    var enabled  = !mobile_device;

    function toggle(ev)
    {
        content.slideToggle('fast', function () {
            min.toggleClass("icon-arrow-up2").toggleClass("icon-arrow-down2");
        });

        if (ev)
        {
            ev.preventDefault();
            return false;
        }
    }
    this.toggle = toggle;

    function hide(ev)
    {
        div.hide();
        if (!div.hasClass("floating"))
        {
            add2.show();
        }

        if (ev)
        {
            ev.preventDefault();
            return false;
        }
    }
    this.hide = hide;

    function show(ev)
    {
        if (!div.hasClass("floating"))
        {
            add2.hide();
        }
        div.show();

        instance.focus();

        if (ev)
        {
            ev.preventDefault();
            return false;
        }
    }
    this.show = show;

    function popOut(ev)
    {
        div.addClass("floating").show();
        add2.show();

        instance.focus();

        if (ev)
        {
            ev.preventDefault();
            return false;
        }
    }
    this.popOut = popOut;

    function popIn(ev)
    {
        add2.hide();
        div.removeClass("floating");

        if (ev)
        {
            ev.preventDefault();
            return false;
        }
    }
    this.popIn = popIn;

    if (!mobile_device)
    {
        min.click(toggle);
        close.click(hide);
    }

    $("body").on("click", ".postReply", function (ev) {
        if (enabled)
        {
            if (!mobile_device && !div.hasClass("floating"))
            {
                popOut();
            }
            show();
            $.get("/ajax/fetch_quote.php", {
                p: $(this).data('postid'),
                mode: instance ? instance.mode : 'source'
            }, function (data, textStatus) {
                if (data.success)
                {
                    if (instance && instance.mode == 'wysiwyg')
                    {
                        instance.focus();

                        var sel     = instance.getSelection();
                        var ranges  = sel.getRanges();
                        var node    = ranges[0].startContainer;
                        var parents = node.getParents(true);

                        node = parents[parents.length - 2].getFirst();
                        if (node)
                        {
                            while (true)
                            {
                                var x = node.getNext();
                                if (x === null)
                                {
                                    break;
                                }
                                node = x;
                            }

                            sel.selectElement(node);
                            ranges = sel.getRanges();
                            ranges[0].collapse(false);
                            sel.selectRanges(ranges);
                        }

                        instance.insertHtml(data.quote);
                    }
                    else
                    {
                        var cke = getEditor();
                        cke.val(cke.val() + data.quote);
                    }

                    if (mobile_device)
                    {
                        $.scrollTo(div);
                    }
                }
                else
                {
                    errordialog("We're sorry, there was a problem fetching the quote text", null, 300);
                }
            }, 'json');

            ev.preventDefault();
            return false;
        }
    });

    function getEditor()
    {
        var e = $("#cke_1_contents textarea");
        return e.length > 0 ? e : $("#qr_editor");
    }

    if (enabled)
    {
        if (mobile_device)
        {
            add.click(show);
        }
        else
        {
            add.click(popOut);
        }

        var cfgDom = '';
        if (!window.location.host.match(/sdhq\.local/) && vb_min_debug == '')
        {
            cfgDom = '//static.slickdealscdn.com';
        }

        CKEDITOR.replace('qr_editor', {
            customConfig: cfgDom + '/scripts/ckeditor.config.js?v=' + vb_minify,
            contentsCss: cfgDom + '/css/modern/contents.css?v=' + vb_minify,
            startupFocus: true
        });

        CKEDITOR.on('instanceReady', function (ev) {
            instance = CKEDITOR.instances.qr_editor;

            if (instance.getData().trim() !== '')
            {
                if (mobile_device)
                {
                    show();
                }
                else
                {
                    popOut();
                }
            }
        });
    }
}

var sdqr;
$(document).ready(function () {
    if ($("#quickreply").length > 0)
    {
        sdqr = new SD_QuickReply();
    }

    $(".add-comment.disabled").unbind("click").removeAttr("href");
});

;if (typeof(window.SD) === "undefined")
{
    window.SD = {};
}
(function (SD)
{
    var decodeCombinedCookie = function (cookieData)
    {
        if (!cookieData)
        {
            return {};
        }
        var keyValuePairs = cookieData.split("&");

        var cookieMap = {};
        $.each(keyValuePairs, function (index, keyValuePair)
        {
            var arr = keyValuePair.split("=");
            cookieMap[arr[0]] = decodeURIComponent(arr[1]);
        });

        return cookieMap;
    };

    var encodeCombinedCookie = function (cookieMap)
    {
        var keyValuePairs = [];
        $.each(cookieMap, function (key, value)
        {
            keyValuePairs.push(key + "=" + encodeURIComponent(value));
        });
        return keyValuePairs.join("&");
    };

    var CombinedCookie = function (containerName, currentCookieData, cookieOptions, cookieDefinitions)
    {
        this.containerName = containerName;
        this.decodedCookie = decodeCombinedCookie(currentCookieData);
        this.cookieOptions = cookieOptions;
        this.cookieDefinitions = cookieDefinitions || {};
    };

    CombinedCookie.prototype.getCookie = function (cookieName)
    {
        var value = this.decodedCookie[cookieName];
        if (this.cookieDefinitions[cookieName])
        {
            value = this.cookieDefinitions[cookieName].deserialize(value);
        }
        return value;
    };

    CombinedCookie.prototype.setCookie = function (cookieName, value)
    {
        if (value === null)
        {
            delete this.decodedCookie[cookieName];
        }
        else
        {
            if (this.cookieDefinitions[cookieName])
            {
                value = this.cookieDefinitions[cookieName].serialize(value);
            }
            this.decodedCookie[cookieName] = value;
        }
        var oldRaw = $.cookie.raw;
        var oldJson = $.cookie.json;
        $.cookie.raw = true;
        $.cookie.json = false;
        $.cookie(this.containerName, encodeCombinedCookie(this.decodedCookie), this.cookieOptions);
        $.cookie.raw = oldRaw;
        $.cookie.json = oldJson;
    };

    var oldRaw = $.cookie.raw;
    var oldJson = $.cookie.json;
    $.cookie.raw = true;
    $.cookie.json = false;

    var callQueue = [];
    if (SD.CookieService && SD.CookieService.callQueue)
    {
        callQueue = SD.CookieService.callQueue;
    }

    SD.CookieService = {
        persistent: new CombinedCookie('sd_p', $.cookie("sd_p"), {
            expires: 365,
            path: '/',
            domain: "." + window.location.hostname
        }),
        session: new CombinedCookie(
                'sd_s',
                $.cookie("sd_s"),
                {
                    path: '/',
                    domain: "." + window.location.hostname
                },
                {
                    funnel: (function ()
                    {
                        var FunnelTypes = function (cookieObj)
                        {
                            var funnelData = {};
                            $.each(cookieObj, function (key, value)
                            {
                                var state = value.substr(0, 1);
                                var entryData = value.substr(1).split(',');
                                var entryPoint = decodeURIComponent(entryData.shift());
                                var startPage = entryData.join(',');
                                funnelData[key] = {state: state, entryPoint: entryPoint, startPage: startPage};
                            });

                            this.funnelData = funnelData;
                        };
                        FunnelTypes.prototype.getType = function (type)
                        {
                            return this.funnelData[type];
                        };
                        FunnelTypes.prototype.setType = function (type, state, entryPoint, startPage)
                        {
                            this.funnelData[type] = {state: state, entryPoint: entryPoint, startPage: startPage};
                        };
                        FunnelTypes.prototype.getSerializedType = function (type)
                        {
                            var typeData = this.funnelData[type];
                            return typeData.state + typeData.entryPoint.replace(/[,%]/g, encodeURIComponent) + ',' + typeData.startPage;
                        };
                        return {
                            serialize: function (json)
                            {
                                var serializedArray = [];
                                $.each(json.funnelData, function (k, v)
                                {
                                    var value = v.state + v.entryPoint;
                                    serializedArray.push(
                                            k.replace(/[&=;%]/g, encodeURIComponent)
                                            + '='
                                            + json.getSerializedType(k).replace(/[&;%]/g, encodeURIComponent)
                                    );
                                });

                                return serializedArray.join('&');
                            },
                            deserialize: function (serialized)
                            {
                                if (!serialized)
                                {
                                    return new FunnelTypes({});
                                }
                                var json = {}, serializedArray = serialized.split('&');
                                $.each(serializedArray, function (index, keyValuePair)
                                {
                                    var arr = keyValuePair.split("=");
                                    json[decodeURIComponent(arr.shift())] = decodeURIComponent(arr.join('='));
                                });

                                return new FunnelTypes(json);
                            }
                        };
                    })()
                }
        )
    };
    $.each(callQueue, function (index, callback)
    {
        callback();
    });
    SD.CookieService.callQueue = {
        push: function (callback)
        {
            callback();
        }
    };
    $.cookie.raw = oldRaw;
    $.cookie.json = oldJson;
})(window.SD);
;(function (window)
{
    var parseQueryString = function (queryString)
    {
        if (!queryString.length) return {};
        var queryStringKVPairs = queryString.split('&'),
                queryMap = {};


        for (var i = 0; i < queryStringKVPairs.length; i++)
        {
            var kv = queryStringKVPairs[i].split('=');
            queryMap[decodeURIComponent(kv.shift())] = decodeURIComponent(kv.join('='));
        }

        return queryMap;
    };

    var parseGacSessionData = function (cookieString)
    {
        var gaqCookie = cookieString.match(/__utmz=(?:[0-9]+\.)+([^;]+)/);

        if (!gaqCookie) return {};
        var parameters = ("|" + gaqCookie[1]).match(/\|utmc[a-z]{2}=.*?(?=\|utm|$)/g);
        var campaign = {};
        for (var i = 0; i < parameters.length; i++)
        {
            var kv = parameters[i].substr(1).split('=');
            var k = kv.shift();
            var v = decodeURIComponent(kv.join('='));

            if (k == 'utmcsr') campaign.source = v;
            if (k == 'utmccn') campaign.campaign = v;
            if (k == 'utmcmd') campaign.medium = v;
            if (k == 'utmctr') campaign.term = v;
            if (k == 'utmcct') campaign.content = v;
        }

        return campaign;
    };

    var hasGacActiveCookie = function (cookieString)
    {
        return !!cookieString.match(/__utmb=[^;]+/);
    };

    var cleanValue = function (v)
    {
        if (typeof(v) == "undefined" || v == null || v == '(not set)' || v == '(direct)' || v == '(none)')
        {
            return '';
        }
        return v;
    };

    var compareCampaigns = function (c1, c2)
    {
        if (cleanValue(c1.source) != cleanValue(c2.source)) return false;
        if (cleanValue(c1.campaign) != cleanValue(c2.campaign)) return false;
        if (cleanValue(c1.medium) != cleanValue(c2.medium)) return false;
        if (cleanValue(c1.term) != cleanValue(c2.term)) return false;
        return cleanValue(c1.content) == cleanValue(c2.content);
    };

    var jct = function (queryMap, previousCampaign, referrerHost, referrerPath, currentHost, isNew)
    {
        this.queryMap = queryMap;
        this.previousCampaign = previousCampaign;
        this.referrerHost = referrerHost;
        this.referrerPath = referrerPath;
        this.currentHost = currentHost;
        this.overrideCampaign = {};
        this.isNew = isNew;
    };

    jct.prototype.getCampaignData = function ()
    {
        var campaign = {};

        if (this.queryMap.gclid || this.queryMap.gclsrc)
        {
            campaign.source = 'google';
            campaign.medium = 'cpc';
            campaign.campaign = this.queryMap.utm_campaign;
            campaign.term = this.queryMap.utm_term;
            campaign.content = this.queryMap.utm_content;
        }
        else if (this.overrideCampaign.source)
        {
            campaign.source = this.overrideCampaign.source;
            campaign.medium = this.overrideCampaign.medium || '(not set)';
            campaign.campaign = this.overrideCampaign.campaign || '(not set)';
            campaign.term = this.overrideCampaign.term;
            campaign.content = this.overrideCampaign.content;
        }
        else if (this.queryMap.utm_source)
        {
            campaign.source = this.queryMap.utm_source;
            campaign.medium = this.queryMap.utm_medium || '(not set)';
            campaign.campaign = this.queryMap.utm_campaign || '(not set)';
            campaign.term = this.queryMap.utm_term;
            campaign.content = this.queryMap.utm_content;
        }
        else
        {
            if (this.referrerHost && this.referrerHost != this.currentHost)
            {
                campaign.source = this.referrerHost;
                campaign.medium = 'referral';
                campaign.campaign = '(referral)';
                campaign.content = this.referrerPath;
            }
            else
            {
                campaign.source = this.previousCampaign.source || '(direct)';
                campaign.medium = this.previousCampaign.medium || '(not set)';
                campaign.campaign = this.previousCampaign.campaign || '(not set)';
                campaign.term = this.previousCampaign.term;
                campaign.content = this.previousCampaign.content;
            }
        }
        campaign.isNew = this.isNew || !compareCampaigns(campaign, this.previousCampaign);
        return campaign;
    };

    jct.track = function (campaign)
    {
        var referrerData = document.referrer.match(/^https?:\/\/([^/]+)(\/.*)$/);
        var rHost = referrerData ? referrerData[1] : null;
        var rPath = referrerData ? referrerData[2] : null;

        var tracker = new jct(parseQueryString(window.location.search.substr(1)), parseGacSessionData(window.document.cookie), rHost, rPath, window.location.hostname, !hasGacActiveCookie(window.document.cookie));
        if (campaign) tracker.overrideCampaign = campaign;
        return tracker.getCampaignData();
    };

    window.jct = jct;
})(window);
;if (typeof(window.SD) === "undefined")
{
    window.SD = {};
}

SD.Analytics = {
    socialFollow: function (socialNetwork)
    {
        "use strict";

        if (typeof(dataLayer.social) === "undefined")
        {
            dataLayer.social = {
                platform: ""
            };
        }

        if (socialNetwork !== "")
        {
            dataLayer.social.platform = socialNetwork;
        }

        this.satelliteTrack('social-media-follow');

        return true;
    },
    socialShare: function (shareType)
    {
        "use strict";

        if (typeof(dataLayer.social) === "undefined")
        {
            dataLayer.social = {
                platform: ""
            };
        }

        if (shareType !== "")
        {
            dataLayer.social.platform = shareType;
        }

        this.satelliteTrack('social-media-share');

        return true;
    },
    loginTrack: function(trackType)
    {
        if (!trackType)
        {
            return false;
        }

        this.satelliteTrack('login-' + trackType);
        return true;
    },
    signUpTrack: function(trackType)
    {
        if (!trackType)
        {
            return false;
        }

        this.satelliteTrack('sign-up-' + trackType);
        return true;
    },
    newsletterTrack: function(trackType)
    {
        if (!trackType)
        {
            return false;
        }

        this.satelliteTrack('newsletter-' + trackType);
        return true;
    },
    satelliteTrack: function(item) {
        "use strict";

        if (typeof(_satellite) === "object")
        {
            _satellite.track(item);

            return true;
        }

        return false;
    },
    /**
     * Process click event, provided target element has data-product-products as an attribute.
     *
     * @param   {Object}    ev
     * @param   {Boolean}   skipNav - prevents navigation if true.
     *
     * @return  {Boolean}
     */
    processClickEvent: function (ev, skipNav)
    {
        "use strict";

        var target, found = false, depth = 3, link, newWindow, linkResult, clickButton = SD.Analytics.util.getMouseButton(ev);

        for (target = ev.target; depth > -1; depth--)
        {
            if (target !== null && !!target.hasAttribute && target.hasAttribute('data-product-products'))
            {
                found = true;
                depth = -1;
            }
            else if (!found && target !== null)
            {
                target = target.parentNode;
            }
        }

        if (!found)
        {
            return true;
        }

        // Descending checks:
        if (target.hasAttribute('data-href'))
        {
            link = target.getAttribute('data-href');
        }
        else
        {
            link = target.href;
        }

        linkResult = SD.Analytics.util.rewriteUrl(link);

        newWindow = target.hasAttribute("target") && target.target === "_blank";

        // Hammer time!
        window.dataLayer.product = {};
        window.dataLayer.outclick = {};

        if (clickButton !== "right")
        {
            dataLayer.product.products = ';' + target.getAttribute('data-product-products');
            dataLayer.product.forum = target.getAttribute('data-product-forum');
            dataLayer.product.exitWebsite = target.getAttribute('data-product-exitwebsite');
            dataLayer.outclick.typeOfOutclick = target.getAttribute('data-outclick-typeofoutclick');
            dataLayer.outclick.identifier = linkResult[1];
            link = linkResult[0];

            SD.Analytics.satelliteTrack('out-click');

            if (!skipNav)
            {
                switch(clickButton)
                {
                    case "middle":
                    case "override:touchstart":
                        // Adjustment to revert link after short delay.
                        if (target.hasAttribute("href"))
                        {
                            if (!!Function.prototype.bind)
                            {
                                // Bind permits restoration of original href.  1st arg is ref, 2nd is argument and does not change with subsequent assignment.
                                setTimeout(function (url)
                                {
                                    this.href = url;
                                }.bind(target, target.href), 100);
                            }
                            target.href = link;
                        }
                        return true;
                    default:
                        ev.preventDefault();

                        if (newWindow)
                        {
                            if ($(target).attr('rel') && $(target).attr('rel').search(/noreferrer/) != -1)
                            {
                                var site = window.open("");
                                site.document.open();
                                site.document.writeln('<a id="block-referrer" style="display:none" href="' + link + '" rel="noreferrer">clickme</a><script>document.getElementById("block-referrer").click()</script>');
                                site.document.close();
                            }
                            else
                            {
                                window.open(link);
                            }
                        }
                        else
                        {
                            window.location.href = link;
                        }
                        break;
                }
            }
        }
    },
    util: {
        /**
         * Things likely to be regretted.  ie: the code started
         * with behaves well for cases like left/middle clicks on
         * links, but not right click and open in new tab.
         *
         * @param   Object  e
         * @return  String
         **/
        getMouseButton: function(e)
        {
            "use strict";

            var btn = "unknown";

            e = e || window.event;

            /**
             * Technically a left click, but I assume iOS/Android users
             * want the power to open in new tab/copy link at times.
             **/
            if (e.type === "touchstart")
            {
                return "override:touchstart";
            }

            if (e.which === null)
            {
                btn = (e.button < 2)
                    ? "left"
                    : (
                        (e.button === 4)
                            ? "middle"
                            : "right"
                    );
            }
            else
            {
                btn = (e.which < 2)
                    ? "left"
                    : (
                        (e.which === 2)
                            ? "middle"
                            : "right"
                    );
            }

            return btn;
        },
        /**
         * Yank current view SID and increment it for subsequent clicks
         *
         * @return  String
         */
        getAndIncrementSid: function()
        {
            "use strict";

            var sid, counter;

            if (!window.hasOwnProperty('\u200BviewSid'))
            {
                return '';
            }

            sid = window['\u200BviewSid'];

            counter = parseInt(sid.substring(32) , 16);
            counter += 1;

            window['\u200BviewSid'] = sid.substring(0, 32) + ('0000' + counter.toString(16)).substr(-4);

            return sid;
        },
        /**
         * Rewrites given url to include SID.  Won't double-rewrite.
         *
         * @param   String  url
         * @return  String|Array
         **/
        rewriteUrl: function(url)
        {
            "use strict";

            var linkCheck = new RegExp("(pno|lno|u2|u1|u3|sid|sn|cno|ccid|ddid|bfid)="), uSplode = new RegExp("u(\\d+)="), delim, uuid = SD.Analytics.util.getAndIncrementSid();

            if (url.indexOf(window['\u200BviewSid'].substring(0, 32)) === -1 && url.indexOf('adobeRef=') > -1)
            {
                // Strip out invalid adobeRef
                url = url.substring(0, url.indexOf('adobeRef=') - 1) + url.substring(url.indexOf('adobeRef=') + 36)
            }

            if (url.indexOf("adobeRef=") > -1 || !linkCheck.test(url))
            {
                return [url];
            }

            if (uSplode.test(url))
            {
                delim = uSplode.exec(url);
                delim = ["u", delim[1], "="].join("");

                url = url.split(delim);
                url[0] = url[0] + "adobeRef=" + uuid + "&";
                url = url.join(delim);
            }
            else
            {
                url = url.indexOf("?") > 0
                    ? (url + "&adobeRef=" + uuid)
                    : (url + "?adobeRef=" + uuid);
            }

            return [url, uuid];
        }
    },
    trackThreadVote: function(vote) {
        if (vote > 0)
        {
            SD.Analytics.satelliteTrack('thread-voteup')
        }
        else if (vote < 0)
        {
            SD.Analytics.satelliteTrack('thread-votedown')
        }
    },
    addDataLayerProductTitle: function(title)
    {
        if (typeof(dataLayer.product) === "undefined")
        {
            dataLayer.product = {
                title: title
            };
        }
        else
        {
            dataLayer.product.title = title;
        }
    },
    addDataLayerProductId: function(threadId)
    {
        if (typeof(dataLayer.product) === "undefined")
        {
            dataLayer.product = {
                products: ';' + threadId
            };
        }
        else
        {
            dataLayer.product.products = ';' + threadId;
        }
    },
    addDataLayerCouponIdentifier: function(couponId)
    {
        "use strict";

        if (typeof(dataLayer.coupon) === "undefined")
        {
            dataLayer.coupon = {
                identifier: couponId
            };
        }
        else
        {
            dataLayer.coupon.identifier = couponId;
        }
    },
    ajaxThreadTracking: function(threadids)
    {
        var threadString = "";
        for (var i = 0; i < threadids.length; i++)
        {
            threadString += ";" + threadids[i] + ","
        }
        threadString = threadString.substring(0, (threadString.length - 1));
        dataLayer.product.products = threadString;
        this.satelliteTrack('product-impression');
    },
    addDataLayerProductTileNumber: function(tilePosition)
    {
        if (typeof(dataLayer.product) === "undefined")
        {
            dataLayer.product = {
                tileNumber: tilePosition
            };
        }
        else
        {
            dataLayer.product.tileNumber = tilePosition;
        }
    },
    addDataLayerProductFireSign: function(fireSignEnabled)
    {
        var fireSignOn = fireSignEnabled ? 'yes' : 'no';

        if (typeof(dataLayer.product) === "undefined")
        {
            dataLayer.product = {
                fireSign: fireSignOn
            };
        }
        else
        {
            dataLayer.product.fireSign = fireSignOn;
        }
    },
    addDataLayerProductModule: function(moduleName)
    {
        if (typeof(dataLayer.product) === "undefined")
        {
            dataLayer.product = {
                module: moduleName
            };
        }
        else
        {
            dataLayer.product.module = moduleName;
        }
    },
    trackDealClick: function(threadId, position, fireSign, module)
    {
        SD.Analytics.addDataLayerProductId(threadId);
        SD.Analytics.addDataLayerProductTileNumber(position);
        SD.Analytics.addDataLayerProductFireSign(fireSign);
        SD.Analytics.addDataLayerProductModule(module);
        SD.Analytics.satelliteTrack('product-selection');
    },
    getGridTilePosition: function(tileIndex)
    {
        var windowWidth =  $(window).width();
        var tilesPerRow = 7;

        if (windowWidth < 1099)
        {
            tilesPerRow = 4;
        }
        else if (windowWidth < 1372)
        {
            tilesPerRow = 5;
        }
        else if (windowWidth < 1540)
        {
            tilesPerRow = 6;
        }

        var row = Math.ceil(tileIndex / tilesPerRow);
        var col = tileIndex % tilesPerRow == 0 ? tilesPerRow : tileIndex % tilesPerRow;

        return row + ':' + col;
    },
    getClassicGridTilePosition: function(tileIndex)
    {
        var windowWidth =  $(window).width();
        var tilesPerRow = 6;

        if (windowWidth < 1117)
        {
            tilesPerRow = 4;
        }
        else if (windowWidth < 1270)
        {
            tilesPerRow = 5;
        }

        var row = Math.ceil(tileIndex / tilesPerRow);
        var col = tileIndex % tilesPerRow == 0 ? tilesPerRow : tileIndex % tilesPerRow;

        return row + ':' + col;
    },
    getClassicCategoryTilePosition: function(tileIndex)
    {
        var windowWidth =  $(window).width();
        var tilesPerRow = 3;

        if (windowWidth < 1344)
        {
            tilesPerRow = 2;
        }

        var row = Math.ceil(tileIndex / tilesPerRow);
        var col = tileIndex % tilesPerRow == 0 ? tilesPerRow : tileIndex % tilesPerRow;

        return row + ':' + col;
    },
    handleFpDealLink: function(linkElement, view)
    {
        var parentElement, headingElement, position;

        if (view == 'redesign')
        {
            parentElement = linkElement.closest('.fpGridBox');
            headingElement = linkElement.closest('.gridCategory').find('.headingLeft');

            if (parentElement.hasClass('grid'))
            {
                position = SD.Analytics.getGridTilePosition(parentElement.first().index());
            }
            else
            {
                position = parentElement.first().index() + 1 + ':1';
            }
        }
        else if (view == 'classic')
        {
            parentElement = linkElement.closest('.dealitem');
            headingElement = parentElement.prevAll('.deal_header_date:first').find('.deal_header_date_link');

            if ($("#deal_list").hasClass("grid"))
            {
                position = SD.Analytics.getClassicGridTilePosition(parentElement.data('position'));
            }
            else
            {
                position = parentElement.data('position') + ':1';
            }
        }
        else if (view == 'mobile')
        {
            parentElement = linkElement.closest('.coupon-content');
            headingElement = linkElement.closest('.wrapper').prev().find('.date');
            position = parentElement.data('position') + ':1';
        }

        var threadId = parentElement.data('threadid');
        var fireDeal = parentElement.hasClass('firedeal');
        var heading = headingElement.data('deal-list-heading') || headingElement.text().trim();

        SD.Analytics.trackDealClick(threadId, position, fireDeal, heading);
    },
    handleClassicFpDetailsLink: function(linkElement)
    {
        var parentElement = linkElement.closest('.deal_body');

        var threadId = parentElement.prev().data('threadid');
        var fireDeal = parentElement.prev().hasClass('firedeal');
        var position = parentElement.prev().data('position') + ':1';
        var heading = parentElement.prevAll('.deal_header_date:first').find('.deal_header_date_link').text().trim();

        SD.Analytics.trackDealClick(threadId, position, fireDeal, heading);
    },
    handlePopularDealLink: function(linkElement, view)
    {
        var parentElement, heading;

        if (view == 'mobile')
        {
            parentElement = linkElement.closest('.coupon-content');
            heading = linkElement.closest('.wrapper').prev().find('.date').text().trim();
        }
        else
        {
            parentElement = linkElement.closest('.dealRow');
            heading = $('.popularDealsPageTitle').data('heading');
        }

        var threadId = parentElement.data('threadid');
        var fireDeal = parentElement.hasClass('firedeal');
        var position = parentElement.data('position') + ':1';

        SD.Analytics.trackDealClick(threadId, position, fireDeal, heading);
    },
    handleStoreDealLink: function(linkElement, view)
    {
        var parentElement, position, headingElement;

        if (view == 'classic')
        {
            parentElement = linkElement.closest('.deal_block');
            headingElement = '.fpcontent.store.deals';

            position = SD.Analytics.getClassicCategoryTilePosition(parentElement.data('position'));
        }
        else if (view == 'redesign')
        {
            parentElement = linkElement.closest('.item');
            position = parentElement.data('bestorder') + ':1';
            headingElement = '#storeTop';
        }
        else if (view == 'mobile')
        {
            parentElement = linkElement.closest('.coupon-content');
            position = parentElement.data('position') + ':1';
            headingElement = '#dealWrapper';
        }

        var threadId = parentElement.data('threadid');
        var fireDeal = parentElement.hasClass('firedeal');
        var heading = $(headingElement).data('heading');

        SD.Analytics.trackDealClick(threadId, position, fireDeal, heading);
    },
    addDataLayerFrontpageLayout: function(layoutType)
    {
        if (typeof(dataLayer.frontpage) === "undefined")
        {
            dataLayer.frontpage = {
                layout: layoutType
            };
        }
        else
        {
            dataLayer.frontpage.layout = layoutType;
        }
    },
    trackNewThreadCreated: function()
    {
        this.satelliteTrack('newthread-successful');
    },
    updateFormFunnel: function (type, entryPoint, entryPage, status)
    {
        dataLayer.formFunnel = {
            type: type,
            entryPoint: entryPoint,
            status: status,
            startPage: entryPage
        };
    },
    handleClick: function (selector, callback)
    {
        this.clickHandlers.push({selector: selector, callback: callback});
    },
    clickHandlers: [],
    processGlobalClick: function (ev)
    {
        var sendClickEvent = false;
        $.each(SD.Analytics.clickHandlers, function (i, handler)
        {
            var matches = $(ev.target).closest(handler.selector);
            if (matches.length)
            {
                sendClickEvent = handler.callback(matches) || sendClickEvent;
            }
        });

        if (sendClickEvent)
        {
            SD.Analytics.satelliteTrack('process-click');
        }
    }
};

window.dataLayer.gaCampaign = jct.track();

$(window).load(function()
{
    "use strict";

    if (!!window['\u200BsdAnalytics'] === false)
    {
        window['\u200BsdAnalytics'] = true;
    }
    else
    {
        return false;
    }

    //Adobe social sharing analytics tracking
    $('.social-follow').on('click', function()
    {
        SD.Analytics.socialFollow($(this).data('platform'));
        return true;
    });

    $('.social-share').on('click', function()
    {
        SD.Analytics.socialShare($(this).data('platform'));
        return true;
    });

    $(window).on('click', SD.Analytics.processClickEvent);

    $(window).on('click', SD.Analytics.processGlobalClick);

    SD.Analytics.handleClick("[data-funnel-entry][data-funnel-type]", function (target)
    {
        SD.Analytics.updateFormFunnel(target.data('funnel-type'), target.data('funnel-entry'), dataLayer.page.pageName, 'started');
        var funnelCookie = SD.CookieService.session.getCookie('funnel');
        funnelCookie.setType(target.data('funnel-type'), 1, target.data('funnel-entry'), dataLayer.page.pageName);
        SD.CookieService.session.setCookie('funnel', funnelCookie);
        return true;
    });

    var formInteracted = false;
    var funnelForms = $("form[data-funnel-type]");
    funnelForms.each(function ()
    {
        var type = $(this).closest("form").data('funnel-type');
        var funnels = SD.CookieService.session.getCookie('funnel');
        var funnelTypeData = funnels.getType(type);
        var entry, statuses;
        if (!funnelTypeData)
        {
            entry = '(none specified)';
            statuses = 'started';

            SD.Analytics.updateFormFunnel(type, entry, entry, statuses);
            funnels.setType(type, 1, entry, entry);
            SD.CookieService.session.setCookie('funnel', funnels);
            SD.Analytics.satelliteTrack('form-funnel-updated');
        }

    });
    funnelForms.find("input,select,textarea").click(function ()
    {
        if (!formInteracted)
        {
            var type = $(this).closest("form").data('funnel-type');
            var funnels = SD.CookieService.session.getCookie('funnel');
            var funnelData = funnels.getType(type);
            var state, entry, startPage, statuses;
            if (funnelData)
            {
                state = funnelData.state;
                entry = funnelData.entryPoint;
                startPage = funnelData.startPage;
                statuses = 'interacted';
            }
            else
            {
                state = 1;
                startPage = entry = '(none specified)';
                statuses = 'interacted';
            }

            if (state == 1)
            {
                SD.Analytics.updateFormFunnel(type, entry, startPage, statuses);
                funnels.setType(type, 2, entry, startPage);
                SD.CookieService.session.setCookie('funnel', funnels);
                SD.Analytics.satelliteTrack('form-funnel-updated');
            }
        }
    });

    // Sign-up, Login, Newsletter Tracking
    if (window.location.href.indexOf('login=1') >= 0)
    {
        SD.Analytics.loginTrack('successful');
    }

    $('.track-sign-up').on('click', function(ev) {
        SD.Analytics.signUpTrack('start');
        return true;
    });

    $('.track-login').on('click', function(ev) {
        SD.Analytics.loginTrack('start');
        return true;
    });

    $('.track-newsletter-checkbox').on('click', function(ev)
    {
        if (this.checked)
        {
            SD.Analytics.newsletterTrack('start');
            return true;
        }
    });

    $('.track-fpDealLink').on('click', function(ev) {
        SD.Analytics.handleFpDealLink($(ev.target), 'redesign');
        return true;
    });

    $(document).on('click', '.track-fpDealDetailLink', function(ev) {
        SD.Analytics.handleFpDealLink($(this), 'redesign');
        return true;
    });

    $(document).on('click', '.track-classicFpDetailsLink', function(ev) {
        SD.Analytics.handleClassicFpDetailsLink($(this));
        return true;
    });

    $('.track-popularDealLink').on('click', function(ev) {
        SD.Analytics.handlePopularDealLink($(this));
        return true;
    });

    $('.track-storeDealLink').on('click', function(ev) {
        SD.Analytics.handleStoreDealLink($(this), 'redesign');
        return true;
    });

    $('.track-classicStoreDealLink').on('click', function(ev) {
        SD.Analytics.handleStoreDealLink($(this), 'classic');
        return true;
    });

    $(document).on('click', '#dealWrapper .coupon-content a', function(ev) {
        SD.Analytics.handleStoreDealLink($(this), 'mobile');
        return true;
    });

    $(document).on('click', '.coupon-wrapper.onFrontPage a', function(ev) {
        SD.Analytics.handleFpDealLink($(this), 'mobile');
        return true;
    });

    $(document).on('click', '.coupon-wrapper.onPopularDeals a', function(ev) {
        SD.Analytics.handlePopularDealLink($(this), 'mobile');
        return true;
    });
});


;jQuery.extend({
    resendValidation: function (callbacks) {

        var defaults = {
            success : function (message) {},
            error: function (errorMessage) {}
        };

        callbacks = $.extend({}, defaults, callbacks);

        var activationData = {
            "do": "emailcode",
            "securitytoken": SECURITYTOKEN
        };

        $.post("/forums/register.php", activationData, function (data) {
            if (data.status == 'success')
            {
                if (callbacks.success)
                {
                    callbacks.success("Email Sent! Please activate the link in the email to complete registration for the Slickdeals community.");
                }
            }
            else
            {
                if (callbacks.error)
                {
                    callbacks.error("We could not find a user with the email provided.  Please try again.");
                }
            }
        }, "json");

    }
});
;if (typeof jQuery != 'undefined')
{
    'use strict';

    /*
     * Reusable Javascript UI components used to handle common UI patterns.
     *
     * @author Rob Erekson
     *
     * NOTE: All components are wrapped in an if statement checking for undefined to make sure components aren't
     * created twice.
     */

    String.prototype.normalizeSlug = function()
    {
        return this.trim().toLowerCase().replace(' ', '-');
    }


    if (typeof TreeCheck == 'undefined')
    {
        var TreeCheck = function(element, options)
        {
            this.init(element, options);
        }

        TreeCheck.prototype = $.extend({}, TreeCheck.prototype, {
            constructor: TreeCheck,

            init: function(element, options)
            {
                this.$element = $(element);
                this.options = $.extend({}, {
                    id: 0,
                    parent: 0
                }, options, this.$element.data());

                if (!this.options.id)
                {
                    this.options.id = this.$element.val();
                }

                this.$element.on('click', this._handleClick.bind(this));
                this.$element.data('TreeView', this);
            },
            _handleClick: function(e)
            {
                this.set(this.$element.prop('checked'));
            },
            set: function(checked)
            {
                $('input[type="checkbox"][data-parent="' + this.options.id + '"]')
                    .not(this.$element)
                    .prop('checked', checked)
                    .filter('[data-ui*="tree-check"]').each(function()
                    {
                        $(this).data('TreeView').set(checked);
                    });
            }
        });
        $.fn.treeCheck = function(options)
        {
            return this.each(function()
            {
                new TreeCheck(this, options);
            });
        }
    }

    if (typeof Clickable == 'undefined')
    {
        /**
         * Makes an entire element clickable as if it were a link.
         *
         * Usage:
         * Add 'data-ui="clickable" and data-href="{{url}}"' attributes to element, where {{url}} is the URL a click will direct to.
         *
         * Options:
         *  href:   (string)    URL to link to when element is clicked
         *
         * Example:
         * <div data-ui="clickable" data-href="/index.php">...</div>
         *
         * Note:
         * Any <a> elements inside of a Clickable element will retain their normal functionality (linking to their own href attribute).
         *
         * @param (DOM element) element - The element to create the component on
         * @param (object) options - Options for the component
         * @constructor Clickable
         */
        var Clickable = function(element, options)
        {
            this.init(element, options);
        }

        Clickable.prototype = $.extend({}, Clickable.prototype, {
            constructor: Clickable,
            init: function(element, options)
            {
                this.$element = $(element);
                this.options = $.extend({}, {
                    href: ''
                }, options, this.$element.data());
                this.$element.on('click', this._handleClick.bind(this));
                this.$element.addClass('ui-clickable');
                this.$element.data('Clickable', this);
            },
            _handleClick: function(event)
            {
                if (!$(event.target).is('a'))
                {
                    if (this.options.href)
                    {
                        location.href = this.options.href;
                    }
                }
            }
        });

        /**
         * Plugin definition for Clickable component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object for chaining
         */
        $.fn.clickable = function(options)
        {
            this.each(function()
            {
                new Clickable(this, options);
            });
            return this;
        }
    }


    if (typeof Collapsible == 'undefined')
    {
        /**
         * Show/hide element(s) when a click occurs on the trigger element(s).
         *
         * Usage:
         * Add 'data-ui="collapsible" attribute to element, along with any desired options listed below. Any element with a data attribute
         * of 'data-action="toggle-collapsible"' will serve as a trigger for the collapsing action
         *
         * Options:
         *  collapse:           (string)    Selector for the element(s) to show/hide
         *  toggleIcon:         (string)    Selector for an icon element to toggle classes on when collapsible is activated (optional)
         *  toggleIconClass:    (string)    Class names to toggle (e.g. 'icon-arrow-up icon-arrow-down')
         *  animate:            (boolean)   Use animation when showing/hiding element?
         *
         * Example:
         * <div data-ui="collapsible" data-toggle-icon=".icon" data-toggle-icon="icon-arrow-up icon-arrow-down" data-animate="false">
         *      <span class="icon icon-arrow-up" data-action="toggle-collapsible"></span>
         *      <div class="collapsible">...</div>
         * </div>
         *
         * @param (DOM element) element - The element to bind the component to
         * @param (object) options - Options for the component
         * @constructor Collapsible
         */
        var Collapsible = function(element, options)
        {
            this.init(element, options);
        }

        Collapsible.prototype = $.extend({}, Collapsible.prototype, {
            constructor: Collapsible,
            init: function(element, options)
            {
                this.$element = $(element);
                this.options = $.extend({}, {
                    collapse: '.collapsible',
                    toggleIcon: '',
                    toggleIconClass: '',
                    animate: true
                }, options, this.$element.data());
                this.$element.addClass('ui-collapsible');
                this.$collapsibleElms = this.$element.find(this.options.collapse);
                this.$toggleIconElms = this.$element.find('[data-collapsible-class-toggle]');
                this.isCollapsed = !this.$collapsibleElms.is(':visible');
                this.$element.find('[data-action="toggle-collapsible"]').on('click', this._handleClick.bind(this));
                this.$element.data('Collapsible', this);
            },
            _handleClick: function(event)
            {
                event.preventDefault();
                this._toggle();
            },
            _toggle: function()
            {
                if (this.options.animate)
                {
                    this.$collapsibleElms.slideToggle(200);
                    this.$toggleIconElms.each(function()
                    {
                        var $elm = $(this);
                        $elm.toggleClass($elm.data('collapsibleClassToggle'));
                    });
                }
                else
                {
                    this.$collapsibleElms.toggle();
                    this.$toggleIconElms.toggleClass(this.options.toggleIconClass);
                }
                this.isCollapsed = !this.isCollapsed;
            },
            isVisible: function()
            {
                return !this.isCollapsed;
            },
            expand: function()
            {
                if (!this.isVisible())
                {
                    this._toggle();
                }
            },
            collapse: function()
            {
                if (this.isVisible())
                {
                    this._toggle();
                }
            }
        });


        /**
         * Plugin definition for Collapsible component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object
         */
        $.fn.collapsible = function(options)
        {
            return this.each(function()
            {
                new Collapsible(this, options);
            });
        }
    }

    if (typeof TreeView == 'undefined')
    {
        /**
         * Handles collapsing of nested ULs in a "tree" view.
         *
         * Usage:
         * Add 'data-ui="tree-view" attributes to a UL element. For any elements used to collapse/expand the nested lists, add trigger selectors for
         * both 'show' and 'hide' triggers.
         *
         * Options:
         *  collapsed:      (bool)    If tree should be completely collapsed on load
         *
         * Example:
         * <ul data-ui="tree-view">
         *     <li>Option 1</li>
         *     <li>
         *         <a href="#" data-tree-view-trigger="show">+</a>
         *         <a href="#" data-tree-view-trigger="hide">-</a>
         *         Option 2
         *         <ul>
         *             <li>Option 2a</li>
         *             <li>Option 2b</li>
         *         </ul>
         *     </li>
         * </ul>
         *
         * Note:
         * Any desired styling for the tree view can be used. This component merely handles the Javascript functionality.
         *
         * @param (DOM element) element - The element to create the component on
         * @param (object) options - Options for the component
         * @constructor TreeView
         */
        var TreeView = function(element, options)
        {
            this.init(element, options);
        }

        TreeView.prototype = $.extend({}, TreeView.prototype, {
            constructor: TreeView,
            init: function(element, options)
            {
                this.$element = $(element);
                if (!this.$element.is('ul'))
                {
                    return;
                }
                this.options = $.extend({}, {
                    defaultCollapsed: true
                }, options, this.$element.data());
                this.settings = {
                    trigger: '[data-tree-view-trigger]',
                    triggerHide: '[data-tree-view-trigger="hide"]',
                    triggerShow: '[data-tree-view-trigger="show"]',
                    dataObjs: 'tree-view-objs',
                    expandedClass: 'ui-treeview-expanded',
                    animationSpeed: 200
                }
                this.$triggerElms = this.$element.find(this.settings.trigger);
                this.$element.attr('data-ui-tree-view', '');

                this._crawlTree(this.$element);

                if (this.options.defaultCollapsed)
                {
                    this.$element.find('ul').hide();
                    this.$element.find(this.settings.triggerHide).hide();
                }

                this.$triggerElms.on('click', this._handleClick.bind(this));
                this.$element.data('TreeView', this);
            },
            _handleClick: function(event)
            {
                event.preventDefault();
                var $liElm = $(event.target).closest('li'),
                    $childElm = $liElm.data(this.settings.dataObjs).child;

                if ($childElm.length)
                {
                    if ($childElm.is(':visible'))
                    {
                        this.collapse($liElm);
                    }
                    else
                    {
                        this.expand($liElm);
                    }
                }
            },
            collapse: function(liElm)
            {
                var $liElm = $(liElm);
                if ($liElm.is('.ui-treeview-expanded'))
                {
                    $liElm.data(this.settings.dataObjs).child.slideUp(this.settings.animationSpeed, function()
                    {
                        // Make sure the element is always hidden since slideUp won't do anything if the element is hidden via its parent
                        $(this).hide();
                    });
                    $liElm.data(this.settings.dataObjs).triggerHide.hide();
                    $liElm.data(this.settings.dataObjs).triggerShow.show();
                    $liElm.removeClass(this.settings.expandedClass);
                }
            },
            collapseAll: function(ulElm)
            {
                var that = this,
                    $ulElm = $(ulElm);
                if (!$ulElm.length)
                {
                    $ulElm = this.$element;
                }
                $ulElm.children('li').each(function()
                {
                    var $liElm = $(this);
                    that.collapse($liElm);
                    if ($liElm.data(that.settings.dataObjs) && $liElm.data(that.settings.dataObjs).child.length)
                    {
                        that.collapseAll($liElm.data(that.settings.dataObjs).child);
                    }
                });
            },
            expand: function(liElm)
            {
                var $liElm = $(liElm);
                if (!$liElm.data(this.settings.dataObjs).child.is(':visible'))
                {
                    $liElm.data(this.settings.dataObjs).child.slideDown(this.settings.animationSpeed);
                    $liElm.data(this.settings.dataObjs).triggerHide.show();
                    $liElm.data(this.settings.dataObjs).triggerShow.hide();
                    $liElm.addClass(this.settings.expandedClass);
                }
            },
            _crawlTree: function(ulElm)
            {
                var $ulElm = $(ulElm);
                if (!$ulElm.is('ul'))
                {
                    return;
                }
                var that = this;
                $ulElm.children('li').each(function(idx, liElm)
                {
                    var $liElm = $(liElm);
                    $liElm.data(that.settings.dataObjs, {
                        child: $liElm.children('ul'),
                        triggerShow: $liElm.children(that.settings.triggerShow),
                        triggerHide: $liElm.children(that.settings.triggerHide)
                    });
                    $liElm.data(that.settings.dataObjs).child.each(function(idx, childUlElm)
                    {
                        that._crawlTree(childUlElm);
                    });
                });
            },
            makeVisible: function(liElm, debug)
            {
                var $liElm = $(liElm);
                if (!this.$element)
                {
                    $liElm.closest('ul[data-ui-tree-view]').data('TreeView').makeVisible($liElm, debug);
                    return;
                }
                var that = this;
                $liElm.parentsUntil('ul[data-ui-tree-view]', 'li').each(function()
                {
                    that.expand($(this));
                });
            }
        });

        /**
         * Plugin definition for TreeView component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object for chaining
         */
        $.fn.treeView = function(options)
        {
            return this.each(function()
            {
                new TreeView(this, options);
            });
        }
    }

    if (typeof ScreenOverlay == 'undefined')
    {
        /**
         * An opaque overlay that covers the page content while an action is being performed.
         *
         * Usage:
         * Create a new OverlayScreen object in Javascript, passing either the message or an options object as a parameter.
         *
         * Options:
         *  spinner:        (int)       The size of the spinner to be displayed. Provide 0 or false to hide the spinner.
         *  message:        (string)    The message to be displayed
         *  showOnCreate:   (bool)      Should the screen be displayed automatically when the object is created
         *
         * Example:
         * new ScreenOverlay('Loading...');
         * new ScreenOverlay({
         *      spinner:        false,
         *      message:        'Loading...')
         * });
         *
         * Note:
         * Any desired styling for the overlay can be used. This component merely handles the Javascript functionality of creating the DOM elements, and
         * showing/hiding the overlay.
         *
         * @param (object) options - Options for the component
         * @constructor ScreenOverlay
         */
        var ScreenOverlay = function(options)
        {
            this.init(options);
        }

        ScreenOverlay.prototype = $.extend({}, ScreenOverlay.prototype, {
            constructor: ScreenOverlay,
            init: function(options)
            {
                this.$element = null;
                if (typeof options == 'string')
                {
                    options = {
                        message: options
                    };
                }
                this.options = $.extend({}, {
                    message: 'Loading...',
                    spinner: 60,
                    showOnCreate: true
                }, options);
                this._buildElement();
            },
            _buildElement: function()
            {
                this.$element = $('<div class="ui-screen"></div>').hide();

                if (this.options.spinner)
                {
                    var spinner = new Spinner({
                        size: this.options.spinner
                    });
                    this.$element.append(spinner.getElement());
                }

                this.$element.append('<p>' + this.options.message + '</p>');

                $('body').prepend(this.$element);

                if (this.options.showOnCreate)
                {
                    this.show();
                }
            },
            show: function()
            {
                this.$element.fadeIn();
            },
            hide: function()
            {
                this.$element.fadeOut();
            },
            destroy: function()
            {
                this.$element.remove();
                this.$element = null;
            }
        });
    }

    if (typeof Spinner == 'undefined')
    {
        /**
         * Creates CSS-based spinner element, used for loading animations.
         *
         * Usage:
         * Add 'data-ui="spinner" attribute to an existing DIV element, or create a Spinner object directly in Javascript
         *
         * Options:
         *  size:       (int)   Size of the spinner to create
         *
         * Example:
         * <div data-ui="spinner" data-size="16"></div>
         * new Spinner({
         *      size: 16
         * });
         *
         * @param (DOM element) element - The element to create the component on
         * @param (object) options - Options for the component
         * @constructor Spinner
         */
        var Spinner = function(element, options)
        {
            this.init(element, options);
        }

        Spinner.prototype = $.extend({}, Spinner.prototype, {
            constructor: Spinner,
            init: function(element, options)
            {
                if ($.isPlainObject(element) && !options)
                {
                    options = element;
                    element = null;
                }
                if (!element)
                {
                    element = $('<div>');
                }
                this.$element = $(element);
                this.options = $.extend({}, {
                    size: 16
                }, options, this.$element.data());
                this._buildElement();
                this.$element.data('Spinner', this);
            },
            _buildElement: function()
            {
                this.$element.addClass('ui-spinner');
                if (this.options.size)
                {
                    this.$element.css({
                        width: this.options.size + 'px',
                        height: this.options.size + 'px'
                    });
                }
                for (var i = 0; i < 12; i++)
                {
                    this.$element.append('<div class="ui-spinner-blade"></div>');
                }
            },
            getElement: function()
            {
                return this.$element;
            }
        });

        /**
         * Plugin definition for Spinner component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object for chaining
         */
        $.fn.spinner = function(options)
        {
            return this.each(function()
            {
                new Spinner(this, options);
            });
        }
    }


    if (typeof TagSearch == 'undefined')
    {
        /**
         * Handles ajax searching of categories, stores, brands, and tags
         *
         * Usage:
         * Create a TagSearch object directly in Javascript
         *
         * Options:
         *  onSelect:   (function)          Callback function for when user selects a tag from the list. Function is sent the following parameters:
         *                                      tag:    Object containing the tag, tag ID, category ID, and tag text
         *                                      callback:   A function that MUST be called at the end of the external callback function
         *  tagList:    (jQuery|DOM|String) A UL element containing a list of selected tags to append new selections to
         *  ajaxUrl:    (string)            URL to be called to complete AJAX call. Must return a JSON array of matching tags
         *
         * Example:
         * $('#tagsearch').tagSearch({
         *      onSelect:   function(
         * });
         *
         * @param (DOM element) element - The element to create the component on
         * @param (object) options - Options for the component
         * @constructor TagSearch
         */
        var TagSearch = function(element, options)
        {
            this.init(element, options);
        }

        TagSearch.prototype = $.extend({}, TagSearch.prototype, {
            constructor: TagSearch,
            init: function(element, options)
            {
                this.$element = $(element);
                // Make sure the same element doesn't get initialized twice
                if (!this.$element.data('TagSearch'))
                {
                    this.options = $.extend({}, {
                        onSelect: null,
                        tagList: null,
                        ajaxUrl: '/filtersuggest.php?limit=10&json=1&slug=1'
                    }, options, this.$element.data());

                    // Find the parent element containing the list of currently-selected tags
                    this.$tagListElm = null;
                    // tagList option was not provided
                    if (this.options.tagList === null)
                    {
                        // Search up the DOM tree for a parent element
                        this.$tagListElm = this.$element.parents('[data-role="tag-list"]');
                        // Still no parent element found, so search the entire DOM
                        if (!this.$tagListElm)
                        {
                            this.$tagListElm = $('[data-role="tag-list"]');
                        }
                    }
                    // tagList option is a DOM element or jQuery object
                    else if (typeof this.options.tagList == 'object')
                    {
                        // tagList option is a jQuery object
                        if (this.options.tagList instanceof jQuery)
                        {
                            this.$tagListElm = this.options.tagList;
                        }
                        // tagList option is a DOM element
                        else
                        {
                            this.$tagListElm = $(this.options.tagList);
                        }
                    }
                    // tagList option is a selector
                    else if (typeof this.options.tagList == 'string')
                    {
                        this.$tagListElm = $(this.options.tagList);
                    }
                    // Somebody screwed up and there isn't a valid option passed in tagList
                    else
                    {
                        throw "Valid parent tag list not provided.";
                    }

                    // Create the spinner to display while performing search
                    this.$spinnerElm = $('<div data-ui="spinner" data-size="16"></div>');
                    this._hideSpinner();
                    this.$element.after(this.$spinnerElm);
                    this.$spinnerElm.spinner();

                    // Create the list that will display matching tags
                    this.$matchesElm = $('<ul class="dropdown-menu" data-role="matched-tags" style="display: none;"></ul>');
                    this.$spinnerElm.after(this.$matchesElm);

                    // Trap clicks and close the list of matches if the click is anywhere else
                    $('body').on('click', function(event)
                    {
                        if (!$(event.target).parents('[data-role="add-tag"]').length)
                        {
                            this.hideMatches();
                        }
                    }.bind(this));

                    this.$element.on('keyup', this._handleKeyboardInput.bind(this))
                        .on('focus', this._handleInputFocus.bind(this));

                    this.searchTimer = null;

                    this.$element.data('TagSearch', this);
                }
            },
            /**
             * Display the list of matches when the input receives focus if there are matches
             *
             * @param   (object) event - Javascript event object
             * @private
             */
            _handleInputFocus: function(event)
            {
                if (this.$matchesElm.children('li').length > 0)
                {
                    this.showMatches();
                }
            },
            /**
             * Handle user keyboard actions in the filter input
             *
             * @param (object) event - Javascript event object
             * @private
             */
            _handleKeyboardInput: function(event)
            {
                // Make sure we're only working with alphanumeric characters, the ENTER key, the backspace key, the delete key, the period key, and the spacebar
                if (event.which == 13 || (event.which >= 65 && event.which <= 90) || (event.which >= 96 && event.which <= 105) || (event.which >= 48 && event.which <= 57) || event.which == 46 || event.which == 8 || event.which == 32 || event.which == 110 || event.which == 190)
                {
                    // If the user pressed ENTER, then we want to make sure any forms aren't submitted
                    if (event.which == 13)
                    {
                        event.preventDefault();
                    }
                    // Hide the matches list since the user input requires a new search
                    this.$matchesElm.filter(':visible').slideUp(200);
                    // Clear the previous timeout and we'll restart it later
                    clearTimeout(this.searchTimer);
                    // If we don't have more than 3 characters, then wait for the user to provide more input
                    if (this.$element.val().length < 3)
                    {
                        return;
                    }

                    // Set the timeout to make an ajax call to load new filters
                    this.searchTimer = setTimeout(function()
                    {
                        // Add the filter to the URL and override the built-in URL in _load()
                        this._load(this.options.ajaxUrl + '&q=' + encodeURIComponent(this.$element.val().toLowerCase()));
                    }.bind(this), 250);
                }
            },
            /**
             * Make ajax call to load tags using supplied URL or options URL
             *
             * @param (string) url - An option URL for the ajax call to override the one stored in this.options.ajaxUrl
             * @private
             */
            _load: function(url)
            {
                // Show the loading spinner
                this._showSpinner();
                // Make the ajax call and set up callbacks
                $.ajax(url ? url : this.options.ajaxUrl, {
                    context: this,
                    dataType: 'json',
                    error: this._ajaxError,
                    success: this._ajaxSuccess,
                    complete: this._hideSpinner
                });
            },
            /**
             * Hide the loading spinner
             *
             * @private
             */
            _hideSpinner: function()
            {
                if (this.$spinnerElm)
                {
                    this.$spinnerElm.hide();
                }
            },
            /**
             * Show the loading spinner
             *
             * @private
             */
            _showSpinner: function()
            {
                if (this.$spinnerElm)
                {
                    this.$spinnerElm.show();
                }
            },
            /**
             * Callback from _load() for an error with the ajax call
             *
             * @param (jqXHR) xhr - jqXHR object
             * @param (string) status - Text status of ajax call
             * @param (string) error - Error message
             * @private
             */
            _ajaxError: function(xhr, status, error)
            {
                // Display an error modal to the user, log the actual error to the console
                new ErrorModal('There was an error loading the filters.');
                console.log('TagSearch ajax error: ' + error);
            },
            /**
             * Callback from _load() to handle data returned from successful ajax call
             *
             * @param (array) data - JSON data returned by the server. In this instance, an array of available filters.
             * @param (string) status - Text status of ajax call
             * @param (jqXHR) xhr - jqXHR object
             * @private
             */
            _ajaxSuccess: function(data, status, xhr)
            {
                // If we have data, then we have matches
                if ($.isArray(data) && data.length || data.filters)
                {
                    this.$element.find('div[data-role="no-matches"]:visible').slideUp(200, function()
                    {
                        this.remove();
                    });
                    // Convert the returned JSON into usable data
                    var $tagList = this._buildTagList(data);
                    this.$matchesElm.css({width: this.$element.outerWidth() + 'px'});
                    this.$matchesElm.empty().append($tagList);
                    $tagList.on('click', this._selectTag.bind(this));
                    this.showMatches();
                }
                // If no data, then no matches
                else
                {
                    this.$matchesElm.empty()
                        .html('<li data-role="no-matches" class="no-matches">There were no tags matching your search</li>');
                    this.showMatches();
                }
            },
            /**
             * Build a collection of LI elements — one for each returned match
             *
             * @param (array) matches - An array of plain objects containing matched tags
             * @returns jQuery
             * @private
             */
            _buildTagList: function(matches)
            {
                var $returnElms = $();
                for (var i = 0; i < Math.min(matches.length, 10); i++)
                {
                    $returnElms = $returnElms.add('<li><a href="#" data-tag="' + matches[i].tag + '" data-slug="' + matches[i].slug + '" data-catid="' + matches[i].catid + '" data-tagid="' + matches[i].tagid + '">' + matches[i].name + '</a></li>');
                }
                return $returnElms;
            },
            /**
             * Action handler for user selecting a tag
             *
             * @param   (object) event - Javascript event object
             * @private
             */
            _selectTag: function(event)
            {
                event.preventDefault();
                // Stop propagation so dropdown menus containing tag search aren't hidden
                event.stopPropagation();
                var $elm = $(event.target);
                // Check for duplicate element and either highlight the duplicate or insert a new one
                var $duplicateElm = this.$tagListElm.find('a[data-tagid="' + $elm.data('tagid') + '"]').not($elm);
                if ($duplicateElm.length)
                {
                    this.hideMatches();
                    this._highlightTag($duplicateElm);
                }
                else
                {
                    // Insert a new element into the tag lsit
                    this._insertNewTag($elm);
                    // Tag is selected, so hide matches list
                    this.hideMatches();
                    // If the callback is a function, then call it. Otherwise call our callback directly. Replace with Promises eventually.
                    if ($.isFunction(this.options.onSelect))
                    {
                        // Add tagText to the attributes already attached to the selected tag
                        this.options.onSelect($.extend({}, $elm.data(), {
                            tagText: $elm.html()
                        }), this._selectTagCallback.bind(this));
                    }
                    else
                    {
                        this._selectTagCallback(true, $elm.data('tagid'));
                    }
                }
            },
            /**
             * A callback function that is called after any external scripts are done in the options.onSelect callback. This should be replaced by Promises eventually.
             *
             * @param (boolean) result - If whatever the external script performed was successful
             * @param (int) tagid - The tag id that was selected
             * @param (int) threadtagid - The threadtagid (if one was created)
             * @private
             */
            _selectTagCallback: function(result, tagid, threadtagid)
            {
                var $selectedTagElm = this.$matchesElm.find('a[data-tagid="' + tagid + '"]'),
                    $tagElm = this.$tagListElm.find('a[data-tagid="' + tagid + '"]').not($selectedTagElm),
                    $tagLiElm = $tagElm.parent(),
                    that = this;
                if (result)
                {
                    $tagLiElm.slideDown(200, function()
                    {
                        this._highlightTag($tagLiElm.children('a.tag'));
                    }.bind(this));
                    $selectedTagElm.parent('li').slideUp(200, function()
                    {
                        $(this).remove();
                        that.reset();
                        that.$element.focus();
                    });
                    if (threadtagid)
                    {
                        $tagElm.attr('data-threadtagid', threadtagid);
                    }
                }
                else if (!result)
                {
                    $tagLiElm.parents('li').slideUp(200, function()
                    {
                        $(this).remove();
                    });
                }
            },
            /**
             * Create a new LI element and add it to the tag list
             *
             * @param (jQuery) $elm - The LI element selected by the user
             * @private
             */
            _insertNewTag: function($elm)
            {
                var tagid = $elm.data('tagid'),
                    type = this._getTagType($elm);
                var $liElm = $('<li data-tag-type="' + type + '">' +
                    '<a href="' + this._buildTagUrl($elm) + '" data-tag="' + $elm.data('tag') + '" data-tagid="' + $elm.data('tagid') + '" class="tag tag_' + type + '">' + $elm.html().trim() + '</a>' +
                    '<a href="#" class="change icon icon-remove" data-role="remove-tag"></a>' +
                    '</li>').hide();
                this._getInsertLocation(type).after($liElm);
            },
            /**
             * Figure out where which section (Categories, Brands, Stores, Tags) the new element belongs to. If it doesn't belong, then create it.
             *
             * @param (string) type - The tag type (category, brand, store, tag)
             * @returns (jQuery) The element to insert the new tag element after
             * @private
             */
            _getInsertLocation: function(type)
            {
                // See if any tags for type already exist
                var $sectionElms = this.$tagListElm.children('li[data-tag-type="' + type + '"]');
                // If they exist already, then return the last one in the list
                if ($sectionElms.length)
                {
                    return $sectionElms.last();
                }
                // Otherwise create the section header and return it
                else
                {
                    var sectionTitle = '';
                    switch (type)
                    {
                        case 'brand':
                        case 'store':
                        case 'tag':
                            sectionTitle = type.charAt(0).toUpperCase() + type.slice(1) + 's';
                            break;
                        case 'category':
                            sectionTitle = 'Categories';
                            break;
                    }
                    var $liElm = $('<li><label>' + sectionTitle + '</label></li>').hide();
                    this.$tagListElm.append($liElm);
                    $liElm.slideDown(200);
                    return $liElm;
                }
            },
            /**
             * Element an element that is either a duplicate or has been newly added
             *
             * @param (jQuery) $elm - The element to highlight
             * @private
             */
            _highlightTag: function($elm)
            {
                // Add the higlight class
                $elm.addClass('highlight');
                // Add a class to enable animation and remove highlight class, triggering animation
                setTimeout(function()
                {
                    $elm.addClass('animate').removeClass('highlight');
                }, 1000);
                // Remove animate class to keep clean color change if element is highlighted again
                setTimeout(function()
                {
                    $elm.removeClass('animate');
                }, 3500);
            },
            /**
             * Determine tag type based on path displayed to user
             *
             * @param (jQuery) $elm - The element to determine the type of
             * @returns (string) The tag type
             * @private
             */
            _getTagType: function($elm)
            {
                var name = $elm.html().trim(),
                // Start with most generic type, then check for other tag types
                    type = 'tag';
                // Check if path is: Brands > [tag]
                if (name.indexOf('Brands') == 0)
                {
                    //name = name.replace('Brands &gt;', '');
                    type = 'brand';
                }
                // Check if path is: Stores > [tag]
                else if (name.indexOf('Stores') == 0)
                {
                    name = name.replace('Stores &gt;', '');
                    type = 'store';
                }
                // Otherwise if there is a catid, then it's a category
                else if ($elm.data('catid') > 0)
                {
                    type = 'category';
                }
                return type;
            },
            /**
             * Build the clickable URL for the tag list based on the tag type
             *
             * @param (jQuery) $elm - The element we're building the URL for
             * @returns {string}
             * @private
             */
            _buildTagUrl: function($elm)
            {
                var type = this._getTagType($elm),
                    url = '';
                switch (type)
                {
                    case 'category':
                        url = '/deals/' + $elm.data('slug').normalizeSlug() + '/';
                        break;

                    case 'store':
                        url = '/coupons/' + $elm.data('slug').normalizeSlug() + '/';
                        break;

                    default:
                    case 'brand':
                    case 'tag':
                        url = '/forums/forumdisplay.php?f=9&intagid[]=' + $elm.data('tagid');
                        break;
                }
                return url;
            },
            /**
             * Hide the matches list, if it's not already hidden
             */
            hideMatches: function()
            {
                if (this.$matchesElm.is(':visible'))
                {
                    this.$matchesElm.slideUp(200);
                }
            },
            /**
             * Show the matches list, if it's not already visible
             */
            showMatches: function()
            {
                if (!this.$matchesElm.is(':visible'))
                {
                    this.$matchesElm.slideDown(200);
                }
            },
            /**
             * Are there current matches for a search term?
             *
             * @returns (boolean) If there are matches
             */
            hasMatches: function()
            {
                return this.$matchesElm.find('a[data-tag]').length;
            },
            /**
             * Reset the component
             */
            reset: function()
            {
                this.$matchesElm.empty();
                this.$element.val('');
            }
        });

        /**
         * Plugin definition for TagSearch component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object for chaining
         */
        $.fn.tagSearch = function(options)
        {
            return this.each(function()
            {
                new TagSearch(this, options);
            });
        }

    }


    if (typeof FileUpload == 'undefined')
    {
        /**
         * Allows styling of input[type="file"] form elements
         *
         * Usage:
         * Add 'data-ui="file-upload"' attribute to an existing input[type="file"] element
         *
         * Example:
         * <input type="file" name="transcript" id="transcript" data-ui="file-upload">
         *
         * Note:
         * Any attributes on the original input[type="file"] element other than type, name, and id will be moved to the new faux input field
         *
         * @param (DOM element) element - The element to create the component on
         * @constructor
         */
        var FileUpload = function(element)
        {
            this.init(element);
        }

        FileUpload.prototype = $.extend({}, FileUpload.prototype, {
            constructor: FileUpload,
            init: function(element)
            {
                this.$element = $(element);
                this.$inputElm = null;

                if (!this.$element.data('FileUpload'))
                {
                    var $wrapperElm = $('<div class="ui-file-upload">'),
                        $uploadElm = $('<input type="file">'),
                        $inputElm = $('<input type="text" readonly>');

                    $.each(this.$element.get(0).attributes, function(idx, attr)
                    {
                        if (attr.name == 'id' || attr.name == 'name')
                        {
                            $uploadElm.attr(attr.nodeName, attr.nodeValue);
                        }
                        else if (attr.name != 'type')
                        {
                            $inputElm.attr(attr.nodeName, attr.nodeValue);
                        }
                    });

                    $wrapperElm.append($inputElm).
                        append('<div class="button"><span>Browse</span></div>');
                    $wrapperElm.find('div.button').append($uploadElm);

                    this.$element.replaceWith($wrapperElm);
                    this.$element = $wrapperElm.find('input[type="file"]');

                    this.$inputElm = $inputElm;

                    this.$element.on('change', this._handleFileSelect.bind(this));
                    this.$inputElm.on('click', this._handleInputClick.bind(this));

                    this.$element.data('FileUpload', this);
                }
            },
            _handleFileSelect: function(e)
            {
                this.$inputElm.val(this.$element.val().replace(/^.*(\\|\/|\:)/, ''));
                if (this.$inputElm.is('.parsley-error'))
                {
                    this.$inputElm.parsley().validate();
                }
            },
            _handleInputClick: function()
            {
                this.$element.click();
            }
        });

        /**
         * Plugin definition for FileUpload component
         *
         * @param (object) options
         * @returns (jQuery) Original jQuery object for chaining
         */
        $.fn.fileUpload = function(options)
        {
            return this.each(function()
            {
                new FileUpload(this, options);
            });
        }
    }



    if (typeof DatePlaceholder == 'undefined')
    {
        /**
         * ALlows an element to have an attribute changed when receiving focus
         *
         * Usage:
         * Add 'data-ui="change-on-focus"' attribute to an existing element and include the 'data-change-attribute' and 'data-change-to' option attributes.
         *
         * Example:
         * <input type="text" placeholder="Placeholder text" data-ui="change-on-focus" data-change-attribute="type" change-to="date">
         *
         * @param (DOM element) element - The element to create the component on
         * @param (object) options - Options for the component
         * @constructor ChangeOnFocus
         */
        var DatePlaceholder = function(element, options)
        {
            this.init(element, options);
        }

        DatePlaceholder.prototype = $.extend({}, DatePlaceholder.prototype, {
            constructor: DatePlaceholder,
            init: function(element, options)
            {
                this.$element = $(element);

                // Make sure the same element doesn't get initialized twice
                if (!this.$element.data('DatePlaceholder'))
                {
                    this.options = $.extend({}, {
                        placeholder: '',
                    }, options, this.$element.data());

                    if (this.$element.attr('placeholder'))
                    {
                        this.options.placeholder = this.$element.attr('placeholder');
                    }

                    this.$element.wrap('<div class="ui-date-placeholder" />')
                        .after('<label>' + this.options.placeholder + '</label>');

                    this.$wrapperElm = this.$element.parent();

                    this.$element.on('focus', this._handleFocus.bind(this))
                        .on('blur', this._handleBlur.bind(this));

                    this.$element.data('DatePlaceholder', this);
                }
            },
            _handleFocus: function()
            {
                this.$wrapperElm.addClass('hide-label');
            },
            _handleBlur: function()
            {
                if (this.$element.val().trim() == '')
                {
                    this.$wrapperElm.removeClass('hide-label');
                }
                else
                {
                    if (this.$element.is('[data-parsley-error-message]'))
                    {
                        this.$element.parsley().validate();
                    }
                }
            }
        });

        $.fn.datePlaceholder = function(options)
        {
            return this.each(function()
            {
                new DatePlaceholder(this, options);
            });
        }
    }



    var initComponents = function ()
    {
        $('[data-ui="clickable"]').clickable();
        $('[data-ui="collapsible"]').collapsible();
        $('[data-ui="date-placeholder"]').datePlaceholder();
        $('[data-ui="file-upload"]').fileUpload();
        $('[data-ui="tag-search"]').tagSearch();
        $('[data-ui*="tree-check"]').treeCheck();
        $('[data-ui="tree-view"]').treeView();
        $('[data-ui="spinner"]').spinner();
    };

    /**
     *  Initialize components through HTML data- attributes
     */
    $(document).ready(function()
    {
        initComponents();
        // Make sure initComponents can only be called once
        initComponents = $.noop;
    });
}
;/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */

/**
 * SimpleModal is a lightweight jQuery plugin that provides a simple
 * interface to create a modal dialog.
 *
 * The goal of SimpleModal is to provide developers with a cross-browser
 * overlay and container that will be populated with data provided to
 * SimpleModal.
 *
 * There are two ways to call SimpleModal:
 * 1) As a chained function on a jQuery object, like $('#myDiv').modal();.
 * This call would place the DOM object, #myDiv, inside a modal dialog.
 * Chaining requires a jQuery object. An optional options object can be
 * passed as a parameter.
 *
 * @example $('<div>my data</div>').modal({options});
 * @example $('#myDiv').modal({options});
 * @example jQueryObject.modal({options});
 *
 * 2) As a stand-alone function, like $.modal(data). The data parameter
 * is required and an optional options object can be passed as a second
 * parameter. This method provides more flexibility in the types of data
 * that are allowed. The data could be a DOM object, a jQuery object, HTML
 * or a string.
 *
 * @example $.modal('<div>my data</div>', {options});
 * @example $.modal('my data', {options});
 * @example $.modal($('#myDiv'), {options});
 * @example $.modal(jQueryObject, {options});
 * @example $.modal(document.getElementById('myDiv'), {options});
 *
 * A SimpleModal call can contain multiple elements, but only one modal
 * dialog can be created at a time. Which means that all of the matched
 * elements will be displayed within the modal container.
 *
 * SimpleModal internally sets the CSS needed to display the modal dialog
 * properly in all browsers, yet provides the developer with the flexibility
 * to easily control the look and feel. The styling for SimpleModal can be
 * done through external stylesheets, or through SimpleModal, using the
 * overlayCss, containerCss, and dataCss options.
 *
 * SimpleModal has been tested in the following browsers:
 * - IE 6+
 * - Firefox 2+
 * - Opera 9+
 * - Safari 3+
 * - Chrome 1+
 *
 * @name SimpleModal
 * @type jQuery
 * @requires jQuery v1.3
 * @cat Plugins/Windows and Overlays
 * @author Eric Martin (http://ericmmartin.com)
 * @version 1.4.4
 */

;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}
(function ($) {
    var d = [],
        doc = $(document),
        ua = navigator.userAgent.toLowerCase(),
        wndw = $(window),
        w = [];

    var browser = {
        ieQuirks: null,
        msie: /msie/.test(ua) && !/opera/.test(ua),
        opera: /opera/.test(ua)
    };
    browser.ie6 = browser.msie && /msie 6./.test(ua) && typeof window['XMLHttpRequest'] !== 'object';
    browser.ie7 = browser.msie && /msie 7.0/.test(ua);

    /*
     * Create and display a modal dialog.
     *
     * @param {string, object} data A string, jQuery object or DOM object
     * @param {object} [options] An optional object containing options overrides
     */
    $.modal = function (data, options) {
        return $.modal.impl.init(data, options);
    };

    /*
     * Close the modal dialog.
     */
    $.modal.close = function () {
        $.modal.impl.close();
    };

    /*
     * Set focus on first or last visible input in the modal dialog. To focus on the last
     * element, call $.modal.focus('last'). If no input elements are found, focus is placed
     * on the data wrapper element.
     */
    $.modal.focus = function (pos) {
        $.modal.impl.focus(pos);
    };

    /*
     * Determine and set the dimensions of the modal dialog container.
     * setPosition() is called if the autoPosition option is true.
     */
    $.modal.setContainerDimensions = function () {
        $.modal.impl.setContainerDimensions();
    };

    /*
     * Re-position the modal dialog.
     */
    $.modal.setPosition = function () {
        $.modal.impl.setPosition();
    };

    /*
     * Update the modal dialog. If new dimensions are passed, they will be used to determine
     * the dimensions of the container.
     *
     * setContainerDimensions() is called, which in turn calls setPosition(), if enabled.
     * Lastly, focus() is called is the focus option is true.
     */
    $.modal.update = function (height, width) {
        $.modal.impl.update(height, width);
    };

    /*
     * Chained function to create a modal dialog.
     *
     * @param {object} [options] An optional object containing options overrides
     */
    $.fn.modal = function (options) {
        return $.modal.impl.init(this, options);
    };

    /*
     * SimpleModal default options
     *
     * appendTo:		(String:'body') The jQuery selector to append the elements to. For .NET, use 'form'.
     * focus:			(Boolean:true) Focus in the first visible, enabled element?
     * opacity:			(Number:50) The opacity value for the overlay div, from 0 - 100
     * overlayId:		(String:'simplemodal-overlay') The DOM element id for the overlay div
     * overlayCss:		(Object:{}) The CSS styling for the overlay div
     * containerId:		(String:'simplemodal-container') The DOM element id for the container div
     * containerCss:	(Object:{}) The CSS styling for the container div
     * dataId:			(String:'simplemodal-data') The DOM element id for the data div
     * dataCss:			(Object:{}) The CSS styling for the data div
     * minHeight:		(Number:null) The minimum height for the container
     * minWidth:		(Number:null) The minimum width for the container
     * maxHeight:		(Number:null) The maximum height for the container. If not specified, the window height is used.
     * maxWidth:		(Number:null) The maximum width for the container. If not specified, the window width is used.
     * autoResize:		(Boolean:false) Automatically resize the container if it exceeds the browser window dimensions?
     * autoPosition:	(Boolean:true) Automatically position the container upon creation and on window resize?
     * zIndex:			(Number: 1000) Starting z-index value
     * close:			(Boolean:true) If true, closeHTML, escClose and overClose will be used if set.
     If false, none of them will be used.
     * closeHTML:		(String:'<a class="modalCloseImg" title="Close"></a>') The HTML for the default close link.
     SimpleModal will automatically add the closeClass to this element.
     * closeClass:		(String:'simplemodal-close') The CSS class used to bind to the close event
     * escClose:		(Boolean:true) Allow Esc keypress to close the dialog?
     * overlayClose:	(Boolean:false) Allow click on overlay to close the dialog?
     * fixed:			(Boolean:true) If true, the container will use a fixed position. If false, it will use a
     absolute position (the dialog will scroll with the page)
     * position:		(Array:null) Position of container [top, left]. Can be number of pixels or percentage
     * persist:			(Boolean:false) Persist the data across modal calls? Only used for existing
     DOM elements. If true, the data will be maintained across modal calls, if false,
     the data will be reverted to its original state.
     * modal:			(Boolean:true) User will be unable to interact with the page below the modal or tab away from the dialog.
     If false, the overlay, iframe, and certain events will be disabled allowing the user to interact
     with the page below the dialog.
     * onOpen:			(Function:null) The callback function used in place of SimpleModal's open
     * onShow:			(Function:null) The callback function used after the modal dialog has opened
     * onClose:			(Function:null) The callback function used in place of SimpleModal's close
     */
    $.modal.defaults = {
        appendTo: 'body',
        focus: true,
        opacity: 50,
        overlayId: 'simplemodal-overlay',
        overlayCss: {},
        containerId: 'simplemodal-container',
        containerCss: {},
        dataId: 'simplemodal-data',
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: false,
        autoPosition: true,
        zIndex: 10000,
        close: true,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: 'simplemodal-close',
        escClose: true,
        overlayClose: false,
        fixed: true,
        position: null,
        persist: false,
        modal: true,
        onOpen: null,
        onShow: null,
        onClose: null
    };

    /*
     * Main modal object
     * o = options
     */
    $.modal.impl = {
        /*
         * Contains the modal dialog elements and is the object passed
         * back to the callback (onOpen, onShow, onClose) functions
         */
        d: {},
        /*
         * Initialize the modal dialog
         */
        init: function (data, options) {
            var s = this;

            // don't allow multiple calls
            if (s.d.data) {
                return false;
            }

            // $.support.boxModel is undefined if checked earlier
            browser.ieQuirks = browser.msie && !$.support.boxModel;

            // merge defaults and user options
            s.o = $.extend({}, $.modal.defaults, options);

            // keep track of z-index
            s.zIndex = s.o.zIndex;

            // set the onClose callback flag
            s.occb = false;

            // determine how to handle the data based on its type
            if (typeof data === 'object') {
                // convert DOM object to a jQuery object
                data = data instanceof $ ? data : $(data);
                s.d.placeholder = false;

                // if the object came from the DOM, keep track of its parent
                if (data.parent().parent().size() > 0) {
                    data.before($('<span></span>')
                                    .attr('id', 'simplemodal-placeholder')
                                    .css({display: 'none'}));

                    s.d.placeholder = true;
                    s.display = data.css('display');

                    // persist changes? if not, make a clone of the element
                    if (!s.o.persist) {
                        s.d.orig = data.clone(true);
                    }
                }
            }
            else if (typeof data === 'string' || typeof data === 'number') {
                // just insert the data as innerHTML
                data = $('<div></div>').html(data);
            }
            else {
                // unsupported data type!
                alert('SimpleModal Error: Unsupported data type: ' + typeof data);
                return s;
            }

            // create the modal overlay, container and, if necessary, iframe
            s.create(data);
            data = null;

            // display the modal dialog
            s.open();

            // useful for adding events/manipulating data in the modal dialog
            if ($.isFunction(s.o.onShow)) {
                s.o.onShow.apply(s, [s.d]);
            }

            // don't break the chain =)
            return s;
        },
        /*
         * Create and add the modal overlay and container to the page
         */
        create: function (data) {
            var s = this;

            // get the window properties
            s.getDimensions();

            // add an iframe to prevent select options from bleeding through
            if (s.o.modal && browser.ie6) {
                s.d.iframe = $('<iframe src="javascript:false;"></iframe>')
                    .css($.extend(s.o.iframeCss, {
                        display: 'none',
                        opacity: 0,
                        position: 'fixed',
                        height: w[0],
                        width: w[1],
                        zIndex: s.o.zIndex,
                        top: 0,
                        left: 0
                    }))
                    .appendTo(s.o.appendTo);
            }

            // create the overlay
            s.d.overlay = $('<div></div>')
                .attr('id', s.o.overlayId)
                .addClass('simplemodal-overlay')
                .css($.extend(s.o.overlayCss, {
                    display: 'none',
                    opacity: s.o.opacity / 100,
                    height: s.o.modal ? d[0] : 0,
                    width: s.o.modal ? d[1] : 0,
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: s.o.zIndex + 1
                }))
                .appendTo(s.o.appendTo);

            // create the container
            s.d.container = $('<div></div>')
                .attr('id', s.o.containerId)
                .addClass('simplemodal-container')
                .css($.extend(
                    {position: s.o.fixed ? 'fixed' : 'absolute'},
                    s.o.containerCss,
                    {display: 'none', zIndex: s.o.zIndex + 2}
                ))
                .append(s.o.close && s.o.closeHTML
                            ? $(s.o.closeHTML).addClass(s.o.closeClass)
                            : '')
                .appendTo(s.o.appendTo);

            s.d.wrap = $('<div></div>')
                .attr('tabIndex', -1)
                .addClass('simplemodal-wrap')
                .css({height: '100%', outline: 0, width: '100%'})
                .appendTo(s.d.container);

            // add styling and attributes to the data
            // append to body to get correct dimensions, then move to wrap
            s.d.data = data
                .attr('id', data.attr('id') || s.o.dataId)
                .addClass('simplemodal-data')
                .css($.extend(s.o.dataCss, {
                    display: 'none'
                }))
                .appendTo('body');
            data = null;

            s.setContainerDimensions();
            s.d.data.appendTo(s.d.wrap);

            // fix issues with IE
            if (browser.ie6 || browser.ieQuirks) {
                s.fixIE();
            }
        },
        /*
         * Bind events
         */
        bindEvents: function () {
            var s = this;

            // bind the close event to any element with the closeClass class
            $('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
                e.preventDefault();
                s.close();
            });

            // bind the overlay click to the close function, if enabled
            if (s.o.modal && s.o.close && s.o.overlayClose) {
                s.d.overlay.bind('click.simplemodal', function (e) {
                    e.preventDefault();
                    s.close();
                });
            }

            // bind keydown events
            doc.bind('keydown.simplemodal', function (e) {
                if (s.o.modal && e.keyCode === 9) { // TAB
                    s.watchTab(e);
                }
                else if ((s.o.close && s.o.escClose) && e.keyCode === 27) { // ESC
                    e.preventDefault();
                    s.close();
                }
            });

            // update window size
            wndw.bind('resize.simplemodal orientationchange.simplemodal', function () {
                // redetermine the window width/height
                s.getDimensions();

                // reposition the dialog
                s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();

                if (browser.ie6 || browser.ieQuirks) {
                    s.fixIE();
                }
                else if (s.o.modal) {
                    // update the iframe & overlay
                    s.d.iframe && s.d.iframe.css({height: w[0], width: w[1]});
                    s.d.overlay.css({height: d[0], width: d[1]});
                }
            });
        },
        /*
         * Unbind events
         */
        unbindEvents: function () {
            $('.' + this.o.closeClass).unbind('click.simplemodal');
            doc.unbind('keydown.simplemodal');
            wndw.unbind('.simplemodal');
            this.d.overlay.unbind('click.simplemodal');
        },
        /*
         * Fix issues in IE6 and IE7 in quirks mode
         */
        fixIE: function () {
            var s = this, p = s.o.position;

            // simulate fixed position - adapted from BlockUI
            $.each([s.d.iframe || null, !s.o.modal ? null : s.d.overlay, s.d.container.css('position') === 'fixed' ? s.d.container : null], function (i, el) {
                if (el) {
                    var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth',
                        bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft',
                        bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth',
                        ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth',
                        sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop',
                        s = el[0].style;

                    s.position = 'absolute';
                    if (i < 2) {
                        s.removeExpression('height');
                        s.removeExpression('width');
                        s.setExpression('height','' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
                        s.setExpression('width','' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
                    }
                    else {
                        var te, le;
                        if (p && p.constructor === Array) {
                            var top = p[0]
                                ? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '')
                                : el.css('top').replace(/px/, '');
                            te = top.indexOf('%') === -1
                                ? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
                                : parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';

                            if (p[1]) {
                                var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
                                le = left.indexOf('%') === -1
                                    ? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
                                    : parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
                            }
                        }
                        else {
                            te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
                            le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
                        }
                        s.removeExpression('top');
                        s.removeExpression('left');
                        s.setExpression('top', te);
                        s.setExpression('left', le);
                    }
                }
            });
        },
        /*
         * Place focus on the first or last visible input
         */
        focus: function (pos) {
            var s = this, p = pos && $.inArray(pos, ['first', 'last']) !== -1 ? pos : 'first';

            // focus on dialog or the first visible/enabled input element
            var input = $(':input:enabled:visible:' + p, s.d.wrap);
            setTimeout(function () {
                input.length > 0 ? input.focus() : s.d.wrap.focus();
            }, 10);
        },
        getDimensions: function () {
            // fix a jQuery bug with determining the window height - use innerHeight if available
            var s = this,
                h = typeof window.innerHeight === 'undefined' ? wndw.height() : window.innerHeight;

            d = [doc.height(), doc.width()];
            w = [h, wndw.width()];
        },
        getVal: function (v, d) {
            return v ? (typeof v === 'number' ? v
                : v === 'auto' ? 0
                            : v.indexOf('%') > 0 ? ((parseInt(v.replace(/%/, '')) / 100) * (d === 'h' ? w[0] : w[1]))
                      : parseInt(v.replace(/px/, '')))
                : null;
        },
        /*
         * Update the container. Set new dimensions, if provided.
         * Focus, if enabled. Re-bind events.
         */
        update: function (height, width) {
            var s = this;

            // prevent update if dialog does not exist
            if (!s.d.data) {
                return false;
            }

            // reset orig values
            s.d.origHeight = s.getVal(height, 'h');
            s.d.origWidth = s.getVal(width, 'w');

            // hide data to prevent screen flicker
            s.d.data.hide();
            height && s.d.container.css('height', height);
            width && s.d.container.css('width', width);
            s.setContainerDimensions();
            s.d.data.show();
            s.o.focus && s.focus();

            // rebind events
            s.unbindEvents();
            s.bindEvents();
        },
        setContainerDimensions: function () {
            var s = this,
                badIE = browser.ie6 || browser.ie7;

            // get the dimensions for the container and data
            var ch = s.d.origHeight ? s.d.origHeight : browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'),
                cw = s.d.origWidth ? s.d.origWidth : browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'),
                dh = s.d.data.outerHeight(true), dw = s.d.data.outerWidth(true);

            s.d.origHeight = s.d.origHeight || ch;
            s.d.origWidth = s.d.origWidth || cw;

            // mxoh = max option height, mxow = max option width
            var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null,
                mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null,
                mh = mxoh && mxoh < w[0] ? mxoh : w[0],
                mw = mxow && mxow < w[1] ? mxow : w[1];

            // moh = min option height
            var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
            if (!ch) {
                if (!dh) {ch = moh;}
                else {
                    if (dh > mh) {ch = mh;}
                    else if (s.o.minHeight && moh !== 'auto' && dh < moh) {ch = moh;}
                    else {ch = dh;}
                }
            }
            else {
                ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
            }

            // mow = min option width
            var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
            if (!cw) {
                if (!dw) {cw = mow;}
                else {
                    if (dw > mw) {cw = mw;}
                    else if (s.o.minWidth && mow !== 'auto' && dw < mow) {cw = mow;}
                    else {cw = dw;}
                }
            }
            else {
                cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
            }

            s.d.container.css({height: ch, width: cw});
            s.d.wrap.css({overflow: (dh > ch || dw > cw) ? 'auto' : 'visible'});
            s.o.autoPosition && s.setPosition();
        },
        setPosition: function () {
            var s = this, top, left,
                hc = (w[0]/2) - (s.d.container.outerHeight(true)/2),
                vc = (w[1]/2) - (s.d.container.outerWidth(true)/2),
                st = s.d.container.css('position') !== 'fixed' ? wndw.scrollTop() : 0;

            if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
                top = st + (s.o.position[0] || hc);
                left = s.o.position[1] || vc;
            } else {
                top = st + hc;
                left = vc;
            }
            s.d.container.css({left: left, top: top});
        },
        watchTab: function (e) {
            var s = this;

            if ($(e.target).parents('.simplemodal-container').length > 0) {
                // save the list of inputs
                s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);

                // if it's the first or last tabbable element, refocus
                if ((!e.shiftKey && e.target === s.inputs[s.inputs.length -1]) ||
                    (e.shiftKey && e.target === s.inputs[0]) ||
                    s.inputs.length === 0) {
                    e.preventDefault();
                    var pos = e.shiftKey ? 'last' : 'first';
                    s.focus(pos);
                }
            }
            else {
                // might be necessary when custom onShow callback is used
                e.preventDefault();
                s.focus();
            }
        },
        /*
         * Open the modal dialog elements
         * - Note: If you use the onOpen callback, you must "show" the
         *         overlay and container elements manually
         *         (the iframe will be handled by SimpleModal)
         */
        open: function () {
            var s = this;
            // display the iframe
            s.d.iframe && s.d.iframe.show();

            if ($.isFunction(s.o.onOpen)) {
                // execute the onOpen callback
                s.o.onOpen.apply(s, [s.d]);
            }
            else {
                // display the remaining elements
                s.d.overlay.show();
                s.d.container.show();
                s.d.data.show();
            }

            s.o.focus && s.focus();

            // bind default events
            s.bindEvents();
        },
        /*
         * Close the modal dialog
         * - Note: If you use an onClose callback, you must remove the
         *         overlay, container and iframe elements manually
         *
         * @param {boolean} external Indicates whether the call to this
         *     function was internal or external. If it was external, the
         *     onClose callback will be ignored
         */
        close: function () {
            var s = this;

            // prevent close when dialog does not exist
            if (!s.d.data) {
                return false;
            }

            // remove the default events
            s.unbindEvents();

            if ($.isFunction(s.o.onClose) && !s.occb) {
                // set the onClose callback flag
                s.occb = true;

                // execute the onClose callback
                s.o.onClose.apply(s, [s.d]);
            }
            else {
                // if the data came from the DOM, put it back
                if (s.d.placeholder) {
                    var ph = $('#simplemodal-placeholder');
                    // save changes to the data?
                    if (s.o.persist) {
                        // insert the (possibly) modified data back into the DOM
                        ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
                    }
                    else {
                        // remove the current and insert the original,
                        // unmodified data back into the DOM
                        s.d.data.hide().remove();
                        ph.replaceWith(s.d.orig);
                    }
                }
                else {
                    // otherwise, remove it
                    s.d.data.hide().remove();
                }

                // remove the remaining elements
                s.d.container.hide().remove();
                s.d.overlay.hide();
                s.d.iframe && s.d.iframe.hide().remove();
                s.d.overlay.remove();

                // reset the dialog object
                s.d = {};
            }
        }
    };

    $.extend($.modal.defaults, {
        closeClass : "icon-close2",
        closeHTML  : ""
    });
}));

;/**
 *
 *  Modal functions based on modern designs
 *
 *  Note: The inheritance in this class can be cleaned up substantially once IE8 support is dropped
 *
 */
if (typeof jQuery != 'undefined') {

    'use strict';

    var ModernModal = function(options)
    {
        this.init(options);
    }

    ModernModal.prototype = {

        constructor: ModernModal,
        init: function (options)
        {

            this.options = $.extend(true, {
                message: '',
                headline: 'Alert',
                button: 'OK',
                className: [],
                closeButton: true,
                modalOptions: {
                    closeClass: 'simplemodal-close',
                    focus: false,
                    minWidth: 350,
                    maxHeight: 500,
                    maxWidth: 624,
                    overlayClose: true,
                    position: ['20%']
                },
                onClose: $.noop,
                onShow: $.noop,
            }, options);

            this.$element = this.buildElement();

            this.$element.on('click', this.options.modalOptions.closeClass, this._onClose.bind(this));

            this.$element.modal(this.options.modalOptions);

            // Fix crappy height calculations in jquery.simplemodal
            $('#simplemodal-container').css('height', $('#simplemodal-data').height() + 'px');

            if ($.isFunction(this.options.onShow))
            {
                this.options.onShow();
            }

        },
        buildElement: function()
        {
            return $('<div' + (this.options.id ? ' id="' + this.options.id + '"' : '') + ' class="modal modal-modern ' + (this.options.className.length ? this.options.className.join(' ') : '') + '" style="display: none;">'
                        + (this.options.closeButton ? '<div class="close"><span class="icon icon-close2 simplemodal-close"></span></div>' : '')
                        + '<div class="inner">'
                            + '<p>' + this.options.message + '</p>'
                        + '</div>'
                    + '</div>');
        },
        close: function()
        {
            $.modal.close();
        },
        _onClose: function()
        {
            if ($.isFunction(this.options.onClose))
            {
                this.options.onClose();
            }
        }
    };



    /**
     * Basic dialog box with a single button action
     *
     * @extends ModernModal
     */
    var AlertModal = function(options)
    {
        options.className = ModalUtilities.extendArray(options.className, 'modal-alert');
        ModernModal.call(this, $.extend(true, {
            message: 'This is default alert text. You should not be reading this',
            headline: 'Alert',
            button: 'OK',
            bottomHtml: '',
            modalOptions: {
                maxWidth: 425
            }
        }, options));
    }

    AlertModal.prototype = $.extend({}, ModernModal.prototype, AlertModal.prototype, {
        constructor: AlertModal,
        buildElement: function ()
        {
            // Call super buildElement function to get base modal
            var $elm = ModernModal.prototype.buildElement.call(this);

            // Add AlertModal-specific elements
            $elm.find('.inner').prepend('<div class="headline">' + this.options.headline + '</div>');
            $elm.find('.inner').after('<div class="bottom"><button class="button simplemodal-close" data-role="close">' + this.options.button + '</button>' + (this.options.bottomHtml ? '<span class="bottom-html">' + this.options.bottomHtml + '</span>' : '') + '</div>');

            return $elm;
        }
    });



    /**
     * Error dialog box with a 'Close' button
     *
     * @extends AlertModal
     */
    var ErrorModal = function(options)
    {
        if (typeof options == 'string')
        {
            options = {
                message: options
            };
        }

        options.className = ModalUtilities.extendArray(options.className, 'modal-error');
        AlertModal.call(this, $.extend(true, {
                message: 'There was an unspecified error. Please try again.',
                headline: 'Error',
                button: 'Close',
                modalOptions: {
                    overlayClose: false
                }
        }, options));
    }

    ErrorModal.prototype = $.extend({}, AlertModal.prototype, ErrorModal.prototype, {
        constructor: ErrorModal
    });


    /**
     * Dialog box with an action and cancel/close button
     *
     * @extends ModernModal
     */
    var ConfirmModal = function(options)
    {

        options.className = ModalUtilities.extendArray(options.className, 'modal-confirm');

        ModernModal.call(this, $.extend(true, {
            headline: 'Do you really want to perform this action?',
            button: 'Cancel',
            confirmButton: 'OK',
            disableOnSubmit: true,
            modalOptions: {
                maxWidth: 624,
                minHeight: 201,
                overlayClose: false
            },
            onConfirm: $.noop,
            onCancel: $.noop,
        }, options));
    }

    ConfirmModal.prototype = $.extend({}, ModernModal.prototype, ConfirmModal.prototype, {
        constructor: ConfirmModal,
        buildElement: function ()
        {
            // Call super buildElement function to get base modal
            var $elm = ModernModal.prototype.buildElement.call(this);
            // Add ConfirmModal-specific elements
            $elm.find('.inner').prepend('<div class="headline">' + this.options.headline + '</div>');
            $elm.find('.inner').after('<div class="bottom"><button class="button simplemodal-close" data-role="close">' + this.options.button + '</button><button class="button primary" data-role="confirm">' + this.options.confirmButton + '</button></div>');
            $elm.find('span.simplemodal-close').attr('data-role', 'close');

            $elm.find('button[data-role="confirm"]').on('click', this.onConfirm.bind(this));
            $elm.find('[data-role="close"]').on('click', this.onCancel.bind(this));

            return $elm;
        },
        onCancel: function(event)
        {
            event.preventDefault();
            this.options.onCancel(this, event);
        },
        onConfirm: function(event)
        {
            event.preventDefault();
            if (this.options.disableOnSubmit)
            {
                this.$element.find('button').prop('disabled', true);
            }
            this.options.onConfirm(this, event);
        }
    });

    /**
     * A confirmation modal with a disclaimer text
     * @extends ConfirmModal
     */
    var DisclaimerConfirmModal = function(options)
    {
        options.className = ModalUtilities.extendArray(options.className, 'modal-confirm');

        ConfirmModal.call(this, $.extend(true, {
            disclaimerText: 'You can always try again later'
        }, options));
    };

    DisclaimerConfirmModal.prototype = $.extend({}, ModernModal.prototype, ConfirmModal.prototype, DisclaimerConfirmModal.prototype, {
        constructor: DisclaimerConfirmModal,
        buildElement: function()
        {
            var $elm = ConfirmModal.prototype.buildElement.call(this);

            var newEl = $('<p>').addClass('disclaimer').append(this.options.disclaimerText);
            $elm.find('p').after(newEl);

            return $elm;
        }
    });

    /**
     * Dialog box presenting two options for user to choose from
     *
     * @extends ModernModal
     */
    var OptionModal = function(options)
    {

        options.className = ModalUtilities.extendArray(options.className, 'modal-option');

        ModernModal.call(this, $.extend(true, {
            message: 'Which option would you like?',
            name: 'NAME',
            option1: 'Option 1',
            option2: 'Option 2',
            disableOnSubmit: true,
            modalOptions: {
                maxWidth: 400,
                overlayClose: false
            },
            onOptionSelect: $.noop
        }, options));
    }

    OptionModal.prototype = $.extend({}, ModernModal.prototype, OptionModal.prototype, {
        constructor: OptionModal,
        buildElement: function ()
        {
            // Call super buildElement function to get base modal
            var $elm = ModernModal.prototype.buildElement.call(this);
            // Add OptionModal-specific elements
            $elm.find('.inner p').addClass('message').html(this.options.message)
                                 .after('<div class="name">' + this.options.name + '</div>');
            $elm.find('.inner').append('<button class="button" data-option="1" data-option-text="' + this.options.option1 + '">' + this.options.option1 + '</button> or <button class="button" data-option="2" data-option-text="' + this.options.option2 + '">' + this.options.option2 + '</button></div>');

            $elm.find('button').on('click', this._handleOptionSelect.bind(this));

            return $elm;
        },
        _handleOptionSelect: function(event) {
            event.preventDefault();
            var $elm = $(event.delegateTarget);
            if (this.options.disableOnSubmit)
            {
                this.$element.find('button').prop('disabled', true);
            }
            this.options.onOptionSelect($elm.data('option'), $elm.data('optionText'), event);
        }
    });


    /**
     * Dialog box that prompts user for input
     *
     * @extends ModernModal
     */
    var PromptModal = function(options)
    {
        options.className = ModalUtilities.extendArray(options.className, 'modal-prompt');
        ModernModal.call(this, $.extend(true, {
            headline: 'Input Required',
            message: 'Your input is required below.',
            button: 'Cancel',
            disableOnSubmit: true,
            submitButton: 'Save',
            onSubmit: $.noop,
            modalOptions: {
                maxWidth: 350,
                overlayClose: false,
                focus: true
            }
        }, options));
    }

    PromptModal.prototype = $.extend({}, ModernModal.prototype, PromptModal.prototype, {
        constructor: PromptModal,
        buildElement: function()
        {
            // Call super buildElement function to get base modal
            var $elm = ModernModal.prototype.buildElement.call(this);
            // Add PromptModal-specific elements
            $elm.find('.inner').prepend('<div class="headline">' + this.options.headline + '</div>');
            $elm.find('.inner').append('<input type="text" id="PromptModal-prompt">');
            $elm.find('.inner').after('<div class="bottom"><button class="button primary">' + this.options.submitButton + '</button><button class="button simplemodal-close">' + this.options.button + '</button></div>');

            $elm.find('button.primary').click(this.onSubmit.bind(this));
            $elm.find('input[type="text"]').on('keypress', this.checkKeypress.bind(this));

            return $elm;
        },
        onSubmit: function()
        {
            if (this.options.disableOnSubmit)
            {
                this.$element.find('button').prop('disabled', true);
            }
            if ($.isFunction(this.options.onSubmit))
            {
                this.options.onSubmit(this.$element.find('#PromptModal-prompt').val());
            }
        },
        checkKeypress: function(event)
        {
            if (event.which == 13)
            {
                this.onSubmit();
            }
        }
    });


    /**
     * Dialog box requesting a password from the user
     *
     * @extends PromptModal
     */
    var PasswordModal = function(options)
    {
        options.className = ModalUtilities.extendArray(options.className, 'modal-password');
        PromptModal.call(this, $.extend(true, {
            headline: 'Login Required',
            message: 'Enter your password below.',
            button: 'Cancel',
            disableOnSubmit: true,
            submitButton: 'Login',
            onSubmit: $.noop,
            modalOptions: {
                maxWidth: 350,
                overlayClose: false,
                focus: true
            }
        }, options));
    }

    PasswordModal.prototype = $.extend({}, ModernModal.prototype, PromptModal.prototype, PasswordModal.prototype, {
        constructor : PasswordModal,
        buildElement: function ()
        {
            // Call super buildElement function to get base modal
            var $elm = PromptModal.prototype.buildElement.call(this);

            $elm.find('#PromptModal-prompt').replaceWith('<input type="password" id="PasswordModal-prompt">');

            $elm.find('#PasswordModal-prompt').on('keypress', this.checkKeypress.bind(this));

            return $elm;
        },
        onSubmit: function()
        {
            if (this.options.disableOnSubmit)
            {
                this.$element.find('button').prop('disabled', true);
            }
            if ($.isFunction(this.options.onSubmit))
            {
                this.options.onSubmit(this.$element.find('#PasswordModal-prompt').val());
            }
        }
    });

    /**
     * two button modal with the close option.
     *
     * @extends ModernModal
     */
    var CloseOptionModal = function(options)
    {
        options.className = ModalUtilities.extendArray(options.className, 'modal-confirm');

        ModernModal.call(this, $.extend(true, {
            something: 'new',
        }, options));
    }

    CloseOptionModal.prototype = $.extend({}, ModernModal.prototype, CloseOptionModal.prototype, {
        constructor: CloseOptionModal,
        buildElement: function ()
        {
            // Call super buildElement function to get base modal
            var $elm = ModernModal.prototype.buildElement.call(this);

            // Add all elements for the modal
            var newEl = $('<p>').addClass('disclaimer').append(this.options.disclaimerText);
            $elm.find('p').after(newEl);
            $elm.find('.inner').prepend('<div class="close" data-role="close"><span class="icon icon-close2 simplemodal-close"></span></div>');
            $elm.find('.inner').prepend('<div class="headline">' + this.options.headline + '</div>');
            $elm.find('.inner').after('<div class="bottom"><button class="button simplemodal-close" data-role="leftButton">' + this.options.leftButton + '</button><button class="button primary" data-role="rightButton">' + this.options.rightButton + '</button></div>');

            // actions on clicks
            $elm.find('[data-role="leftButton"]').on('click', this.onLeftButtonClick.bind(this));
            $elm.find('button[data-role="rightButton"]').on('click', this.onRightButtonClick.bind(this));
            $elm.find('[data-role="close"], .simplemodal-overlay').on('click', this.onClose.bind(this));

            return $elm;
        },
        onLeftButtonClick: function(event)
        {
            event.preventDefault();
            this.close();
            this.options.onLeftButtonClick(this, event);
        },
        onRightButtonClick: function(event)
        {
            event.preventDefault();
            if (this.options.disableOnSubmit)
            {
                this.$element.find('button').prop('disabled', true);
            }
            this.options.onRightButtonClick(this, event);
        },
        onClose: function(event)
        {
            event.preventDefault();
            this.close();
        }
    });

    /**
     * Utilties for modal classes
     */
    var ModalUtilities = {
        extendArray: function(arr, val) {
            var retArr = [];
            // Manually push the class name since deep extending replaces arrays
            if ($.isArray(arr))
            {
                retArr = arr;
                retArr.push(val);
            }
            else
            {
                retArr = [val];
            }

            return retArr;
        }
    }

}