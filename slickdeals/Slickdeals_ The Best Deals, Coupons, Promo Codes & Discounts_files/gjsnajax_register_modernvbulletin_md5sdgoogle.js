function sd_ajax_register() {
    SD_Modern_LoginSignup.startSignup();
}

function sd_ajax_login() {
    var userName = '';

    if ($('#dealalerts_subscribe_popup').is(':visible')) {
        $('#dealalerts_subscribe_popup').hide();
    }

    // This is necessary to not break backwards compatibility with classic by renaming all of these calls
    // This will also make all the login calls trigger the registration page instead of the login page
    SD_Modern_LoginSignup.startSignup(userName);
}
;/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.

 * vBulletin Usage: md5hash(input,output)
 * Recommend: input = password input field; output = hidden field

 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = new Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

function str_to_ent(str)
{
	var result = '';
	var i;

	for (i = 0; i < str.length; i++)
	{
		var c = str.charCodeAt(i);
		var tmp = '';

		if (c > 255)
		{

			while (c >= 1)
			{
				tmp = "0123456789" . charAt(c % 10) + tmp;
				c = c / 10;
			}

			if (tmp == '')
			{
				tmp = "0";
			}
			tmp = "#" + tmp;
			tmp = "&" + tmp;
			tmp = tmp + ";";

			result += tmp;
		}
		else
		{
			result += str.charAt(i);
		}
	}
	return result;
}

function trim(s)
{
	while (s.substring(0, 1) == ' ')
	{
		s = s.substring(1, s.length);
	}
	while (s.substring(s.length-1, s.length) == ' ')
	{
		s = s.substring(0, s.length-1);
	}
	return s;
}

function md5hash(input, output_html, output_utf, skip_empty)
{
    
	if (navigator.userAgent.indexOf("Mozilla/") == 0 && parseInt(navigator.appVersion) >= 4)
	{
		var md5string = hex_md5(str_to_ent(trim(input.value)));
		output_html.value = md5string;
		if (output_utf)
		{
			md5string = hex_md5(trim(input.value));
			output_utf.value = md5string;
		}
		if (!skip_empty)
		{
			// implemented like this to make sure un-updated templates behave as before
			input.value = '';
		}
	}

	return true;
}
;if (typeof DISPLAY_NOJS == "undefined")
{
    // Variables we use throughout the application
    var sdgoogle = sdgoogle || {}; // global namespace for slickdeals js google
    sdgoogle.scopes  = 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';

    // boolean flag sets true when user is logged in on slickdeals
    sdgoogle.SDLoggedIn = false;
    sdgoogle.complete_signup = false;
    sdgoogle.chosen_username = '';
    sdgoogle.google_auth_token = '';
    sdgoogle.clientId = '848950106722-o17212am4mt231tdgatgrh2p1b8shjq1.apps.googleusercontent.com';
    if (typeof sdgoogle_settings != "undefined" && sdgoogle_settings.clientId)
    {
        sdgoogle.clientId = sdgoogle_settings.clientId;
    }
    sdgoogle.apiKey = '';
    sdgoogle.do_link = false;
    sdgoogle.authResult = '';
    sdgoogle.newsletter = 0;

    handleGoogleClientLoad = function()
    {
        gapi.auth.init(function(){});
        // gapi.auth.authorize({client_id: sdgoogle.clientId, scope: sdgoogle.scopes, immediate: true}, sdgoogle.handleGoogleAuthResult);
    };

    sdgoogle.checkGoogleAuth = function()
    {
        if($('#loginbox_signin_ajax'))
        {
            $('#loginbox_signin_ajax').css('display', 'inline-block');
            $('#loginbox_signin_ajax > img').attr('src', '/images/slickdeals/ajaxsmall.gif');
        }

        if ($('.loginbox_box').length)
        {
            $('.loginbox_box').block({
                message: null,
                overlayCSS:  {
                    backgroundColor: '',
                    opacity: 'inherit',
                    timeout: 5000
                }
            });
        }

        gapi.auth.authorize({client_id: sdgoogle.clientId, scope: sdgoogle.scopes, immediate: false, authuser: -1}, sdgoogle.handleGoogleAuthResult);
    };

    sdgoogle.handleGoogleAuthResult = function(authResult)
    {
        var authorizeButton = $('#google-authorize-button');
        if (authResult && !authResult.error)
        {
            if(typeof authResult['created'] == "undefined")
            {
                authResult['created'] = (new Date).getTime();
            }
            sdgoogle.makeGoogleApiCall(authResult);

            if (window.location.pathname === "/fullreg/" && window.handleFlight !== undefined)
            {
                handleFlight.manual({emitGA: true, data: 'fullreg,success,googlePlus'});
            }
        }
        else
        {
            authorizeButton.css('visibility', '');
            authorizeButton.click(sdgoogle.handleGoogleAuthClick);
        }
        sdgoogle.authResult = authResult;
    }

    sdgoogle.handleGoogleAuthClick = function(event) {
        gapi.auth.authorize({client_id: sdgoogle.clientId, scope: sdgoogle.scopes, immediate: false}, sdgoogle.handleGoogleAuthResult);
        return false;
    };

    // Load the API and make an API call.  Display the results on the screen.
    sdgoogle.makeGoogleApiCall = function(access_token) {
        gapi.client.load('plus', 'v1', function()
        {
            var request = gapi.client.plus.people.get({
                userId: 'me'
            });
            request.execute(function(resp) {
                var params = {
                    'do': (typeof(type) == 'undefined') ? 'google' : type,
                    'type': 'userinfo',
                    'complete_signup': sdgoogle.complete_signup,
                    'chosen_username': sdgoogle.chosen_username,
                    'do_link': sdgoogle.do_link,
                    'newsletter': sdgoogle.newsletter,
                    'access_token': {
                        'access_token': access_token.access_token,
                        'created': access_token.created,
                        'expires_in': access_token.expires_in,
                        'state': access_token.state,
                        'token_type': access_token.token_type
                    }
                };
                sdgoogle.google_auth_token = params['access_token'];

                if (sdgoogle.do_link == true)
                {
                    sdgoogle.doLink();
                    return;
                }

                $.ajax({
                    url: '/forums/sdlogin.php',
                    cache: false,
                    data: params,
                    dataType: 'json',
                    type: 'POST',
                    success: function(data) {
                        //Is this here?
                        if ($('.loginbox_box').length)
                        {
                            $('.loginbox_box').unblock();
                        }

                        if ($('#loginbox_signin_ajax'))
                        {
                            $('#loginbox_signin_ajax > img').attr('src', '');
                        }

                        if (data.success && data.form)
                        {
                            sdfollowers.RecommendedFriendsDialog(data);
                        }
                        else if (data.form)
                        {
                            $('#loginbox_overlay').remove();
                            $('body').append(data.form);
                            $('#loginbox_overlay').show();
                            $('form.frm_choose_username span.meh').click(function(){
                                $('#loginbox_overlay.loginbox_overlay_chooseuser').remove();
                            });

                            $('#loginbox_overlay').click(function(elem){
                                if($(elem.target).attr('id') == 'loginbox_overlay')
                                {
                                    $('#loginbox_overlay').remove();
                                    $('#loginbox_signin_ajax').hide();
                                }
                            });
                            $('#loginbox_overlay span.meh').click(function(){
                                $('#loginbox_overlay').remove();
                                $('#loginbox_signin_ajax').hide();
                            });

                            $('#regform_choose_username').keyup(function(){
                                $('#regform_submit').hide();
                            });
                            $('#regform_choose_username').keypress(function(e){
                                if (e.keyCode == 13) return false;
                            });
    
                            $("#popup_dialog_newsletter_link").click(function () {
                                $('#dialog_newsletter').dialog('open');
                                return false;
                            });
                            
                            $('.meh').on('click', function() {
                                $('#loginbox_overlay').hide();
                            });
                            
                            $('#regform_checkusername').click(function(){
                                $('#regform_username_status > img').attr('src', '/images/slickdeals/ajaxsmall.gif');
                                $('#regform_username_status').css('display', 'inline-block');
                                
                                var source =  $('#regform_checkusername').data('source');
                                var params = {
                                    'do': 'check_username',
                                    'username': $('#regform_choose_username').val(),
                                };

                                $.ajax({
                                    url: '/forums/sdlogin.php',
                                    cache: false,
                                    data: params,
                                    dataType: 'json',
                                    type: 'POST',
                                    success: function(data){
                                        if (data.form)
                                        {
                                            sdfollowers.RecommendedFriendsDialog(data);
                                        }
                                        else
                                        {
                                            if (data.error == true)
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
                                $('.loginbox_form_container').block({
                                    message: null,
                                    overlayCSS:  {
                                        backgroundColor: '',
                                        opacity: 'inherit',
                                        timeout: 5000
                                    }
                                });
                                sdgoogle.complete_signup = true;
                                sdgoogle.chosen_username = $('#regform_choose_username').val();
                                if($('#chk_newsletter').is(':checked') == true)
                                {
                                    sdgoogle.newsletter = 1;
                                }
                                else
                                {
                                    sdgoogle.newsletter = 0;
                                }
                                sdgoogle.checkGoogleAuth();
                            });
                        }
                        else
                        {
                            if(data.task == 'choose_username')
                            {
                                sdgoogle.afterChooseUsernameFormGoogle();
                            }
                            else if(data.task == 'do_link')
                            {
                                sdgoogle.doLink();
                            }
                            else if(data.success == true)
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

                                if(data.info && data.info.goto != null)
                                {
                                    window.location = data.info.goto;
                                }
                                else
                                {
                                    location.reload(true);
                                }
                            }
                        }
                    }
                })
            });
        });
    };

    sdgoogle.doLink = function()
    {
        var html = 'This action requires you to enter your Slickdeals.net password.<br />' +
                   '<input type="password" name="password" id="link_google_password" />';

        okfunc = function()
        {
            var password = $("#link_google_password").val();
            var params = {
                'do': 'check_password',
                'securitytoken': SECURITYTOKEN,
                'password': hex_md5(password),
                'action': 'link_google',
                'access_token': sdgoogle.google_auth_token
            };

            $.post("/ajax/profile_ajax.php", params,
                function (data)
                {
                    if (data.error)
                    {
                        errordialog(data.error, false, 300);
                    }
                    else
                    {
                        location.reload(true);
                    }
                },
                "json"
            );
        };

        genericdialog("Please enter your password", html, null, okfunc);
        $("#link_google_password").focus().keypress(function (e) {
            if (e.keyCode == 13)
            {
                $(e.target).closest(".ui-dialog").find(".ui-dialog-buttonpane button").click();
            }
        });
    };

    sdgoogle.afterChooseUsernameFormGoogle = function()
    {
        $('#regform_checkusername').click(function(){
            var params = {
                'do': 'check_username',
                'username': $('#regform_choose_username').val()
            };

            $.ajax({
                url: '/forums/sdlogin.php',
                cache: false,
                data: params,
                dataType: 'json',
                type: 'POST',
                success: function (data) {
                    if (data.form)
                    {
                        sdfollowers.getMoreRecommendedFriends(data);
                    }
                    else
                    {
                        if (data.error == true)
                        {
                            $('#regform_submit').css('display', 'none');
                            $('#regform_errormessage').html(data.message);
                            $('#regform_username_good').css('display', 'none');
                            $('#regform_username_notgood').css('display', 'inline-block');
                        }
                        else
                        {
                            $('#regform_errormessage').html('');
                            $('#regform_submit').css('display', 'block');
                            $('#regform_username_notgood').css('display', 'none');
                            $('#regform_username_good').css('display', 'inline-block');
                        }
                    }
                }
            });
            return false;
        });

        $('#regform_submit').click(function(){
            complete_signup = true;
            chosen_username = $('#regform_choose_username').val();
            sdgoogle.checkGoogleAuth();
        });
    };

    // Unlinks the current account from google, and deauthorizes the app
    sdgoogle.UnlinkGoogle = function()
    {
        $.post("/ajax/profile_ajax.php",
            {
                "do": "unlink_google",
                "securitytoken": SECURITYTOKEN
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
                    location.reload();
                }
            },
            "json"
        );
    };

    sdgoogle.UnlinkGoogleCheck = function ()
    {
        genericdialog("Are you sure?", "Are you sure you want to unlink your slickdeals account from google?", false,
        function () {
            sdgoogle.UnlinkGoogle();
        },
        function () {

        });
    };

    $(document).ready(function () {
        $('#google-authorize-button').click(function (e) {
            sdgoogle.checkGoogleAuth();
        });

        $("#unlinkGoogle").click(function (e) {
            sdgoogle.UnlinkGoogleCheck();

            e.preventDefault();
            return false;
        });

        // Click the link google button from account settings page
        $("#link_google").click(function (e) {
            sdgoogle.do_link = true;
            sdgoogle.checkGoogleAuth();

            e.preventDefault();
            return false;
        });
    });

    $(window).load(function (){
        var gapi = document.createElement('script');
        gapi.async = true;
        gapi.type = 'text/javascript';
        gapi.src = 'https://apis.google.com/js/client.js?onload=handleGoogleClientLoad';

        document.getElementsByTagName("head")[0].appendChild(gapi);
    });
}