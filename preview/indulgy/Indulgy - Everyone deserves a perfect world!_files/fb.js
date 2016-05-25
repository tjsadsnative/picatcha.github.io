window.fbAsyncInit = function() {
	FB.init({ appId: fbAppId, 
		    status: true, 
		    version: 'v2.2',
		    cookie: true,
		    xfbml: true,
		    oauth: true});	

	function checkLogin(response){
		if (response.authResponse) {
		    //user is already logged in and connected
			var indUsr=$("meta[name='indulgy:userId']").attr("content");
			if(indUsr==''){
				$.post("/do/service/template/fb/login/"+response.authResponse.accessToken, function(resp){
					$("body").trigger($.Event("indulgy.user.login"));
					var tmpl=_.template(resp);
					$("#header").hide("drop", {direction:"up"}, 200, function(){
					    $(this).replaceWith($(tmpl()).hide());
					    $("#header").show("drop", {direction:"up"}, 200);
					    initLiveSearch();
					});
				});
			}
		} else {
		      //user is not connected to your app or logged out
		}
	}
	  
	FB.Event.subscribe('auth.statusChange', checkLogin);
	
	FB.getLoginStatus(function(response) {
		if(response.status != 'connected') {
			$("body").trigger($.Event("indulgy.user.notconnected"));
		}
	});
};

$(function() {
	  var e = document.createElement('script'); e.async = true;
	  e.src = document.location.protocol 
	    + '//connect.facebook.net/en_US/sdk.js';
	  document.getElementById('fb-root').appendChild(e);
});