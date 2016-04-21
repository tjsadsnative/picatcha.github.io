 // Adpated for Universal Analytics

/**
 * Tracks Facebook likes, unlikes and sends by suscribing to the Facebook
 * JSAPI event model. Note: This will not track facebook buttons using the
 * iframe method.
 */
trackGAEeventsFB = function() {
  try {
	if (FB && FB.Event && FB.Event.subscribe) {
	  FB.Event.subscribe('edge.create', function(opt_target, object) 
	  {
		var gaeAction = 'social';
		var gaeLabel = 'facebook_like';
		if($(object).attr('data-gae-action')){
			gaeAction = $(object).attr('data-gae-action');
		}
		if($(object).attr('data-gae-label')){
			gaeLabel = $(object).attr('data-gae-label');
		}
		
		// sometimes we have a "Like" button on a bootstrap-driven modal dialog and
		// we want the "Like" action to auto-close the modal. We use the data-close-modal
		// attribute to hold the modal's id
		if($(object).attr('data-close-modal'))
		{
			var modalId = "#" + $(object).attr('data-close-modal');
			console.log('close bootstrap modal: ' + modalId);
			$(modalId).modal('hide');
		}
		console.log('SocialActionTrackers: like');
		ga('send', 'social', 'facebook', 'like', opt_target);
		console.log('_trackEvent:  category: surround_article;  action: '+gaeAction+';   label: '+gaeLabel);
		ga('send', 'event',		'surround_article',		gaeAction,		gaeLabel);
	  });
	  FB.Event.subscribe('edge.remove', function(opt_target) 
	  {
		console.log('SocialActionTrackers: unlike');
		ga('send', 'social', 'facebook', 'unlike', opt_target);
		// console.log('_trackEvent:  category: Engagement;  action: Facebook Like;   label: Top');
		//ga('send', 'event',		'Engagement',		'Facebook Unlike',		'Top');
	  });
	  FB.Event.subscribe('message.send', function(opt_target) 
	  {
		console.log('SocialActionTrackers: send');
		ga('send', 'social', 'facebook', 'send', opt_target);
		// console.log('_trackEvent:  category: Engagement;  action: Facebook Send;   label: Top');
		//ga('send', 'event',		'Engagement',		'Facebook Send',		'Top');
	  });
	  FB.Event.subscribe('comments.create', function(opt_target) 
	  {
		console.log('SocialActionTrackers: comment-add');
		ga('send', 'social', 'facebook', 'comment-create', opt_target);
		console.log('_trackEvent:  category: surround_article;  action: social;   label: comment');
		ga('send', 'event',		'surround_article',		'social',		'comment');
	  });
	  FB.Event.subscribe('comments.remove', function(opt_target) 
	  {
		console.log('SocialActionTrackers: comment-remove');
		ga('send', 'social', 'facebook', 'comment-remove', opt_target);
		// console.log('_trackEvent:  category: surround_article;  action: Facebook Uncomment;   label: Top');
		//ga('send', 'event',		'Engagement',		'Facebook Uncomment',		'Bottom');
	  });
	}
  } catch (e) {}
};

trackGAEeventsTwitter = function() {
	function trackTwitterHandler(intent_event) {
	  if (intent_event && intent_event.type === "tweet" || intent_event.type === "click" || intent_event.type === "follow") {
		var socialAction = intent_event.type + (intent_event.type === "click" ? "-" + intent_event.region : "");
		ga('send', 'social', 'twitter', socialAction);
	  }
	}

	try {
		/*global twttr*/
		twttr.events.bind("click", trackTwitterHandler);
		twttr.events.bind("tweet", trackTwitterHandler);
		twttr.events.bind('follow', trackTwitterHandler);
	} catch (e) {}
};