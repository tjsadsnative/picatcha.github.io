function loadMoreLatest(issueId,tag,stories,date){
	var newStartRow = 1;
	//var lastRow = -1;
	lastRow = $('.story-list article').length;

	if (lastRow > 0) {//if there are stories. set up page and start row
		newStartRow = lastRow + 1;
		tempPage = parseInt (Math.ceil(newStartRow / parseInt(numberPerPage)));
	}
	else {
		tempPage = 1;
	}
	$.post(nodeurl+"/magazine/archive/more.cfm",{
		issueId: issueId,
		tag: tag,
		numberPerPage: numberPerPage,
		startrow: newStartRow,
		stories: stories,
		date: date
	},function(html){
		if (html.indexOf('MORE STORIES') >0){
			$('.more-stories').show();
		}
		else{
			$('.more-stories').hide();
		}
		if (html.indexOf('NO STORIES') <0){
			$(".story-list").append(html).fadeIn();
			getShareCounts();
		}
	});
}

function loadMoreDigests(alerttypeid){
	var newStartRow = 1;
	//var lastRow = -1;
	lastRow = $('ol.cover-list li').length;

	if (lastRow > 0) {//if there are digests. set up page and start row
		newStartRow = lastRow + 1;
		tempPage = parseInt (Math.ceil(newStartRow / parseInt(numberPerPage)));
	}
	else {
		tempPage = 1;
	}
	$.post(nodeurl+"/magazine/newsletter/more.cfm",{
		alerttypeid: alerttypeid,
		numberPerPage: numberPerPage,
		startrow: newStartRow
	},function(html){
		if (html.indexOf('MORE DIGESTS') >0){
			$('.load-more').show();
		}
		else{
			$('.load-more').hide();
		}
		if (html.indexOf('NO DIGESTS') <0){
			$("ol.cover-list").append(html);
		}
	});
}
function loadMoreSearch(keyword,dt,reporter,sort){
	var newStartRow = 1;
	//var lastRow = -1;
	lastRow = $('.content-primary ol.story-list article').length;

	if (lastRow > 0) {//if there are stories. set up page and start row
		newStartRow = lastRow + 1;
	}
	$.post(dynurl+"/magazine/search/more.cfm",{
		key:keyword,
		dt:dt,
		reporter:reporter,
		sort:sort,
		numberPerPage: numberPerPage,
		startrow: newStartRow
	},function(html){
		if (html.indexOf('MORE STORIES') >0){
			$('.content-actions').show();
		}
		else{
			$('.content-actions').hide();
		}
		if (html.indexOf('NO STORIES') <0){
			$(".content-primary ol.story-list").append(html);
		}
	});
}
function checkEmail(divIdToCheck){
	var isEmail_re= /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	var s=document.getElementById(divIdToCheck).value;
	if ((document.getElementById(divIdToCheck).value==null)||(document.getElementById(divIdToCheck).value=="")){alert("Please enter a valid email!");}else if (String(s).search(isEmail_re) == -1){alert("Please enter a valid email!");return false;}
};
//DEFINE COMMON WIDGETS PLUGIN
(function( $ ){
	
	$.fn.commonWidgetsJs = function( options ) {  
	
		/*If we want to add options later, do so here
		'location'         : 'top',
		'background-color' : 'blue'
		*/
		
		var settings = {
		};
		
		return this.each(function() {  
			  
			//If options exist, let's merge them with our default settings
			if ( options ) { 
				$.extend( settings, options );
			}
		
		
			//Define common widgets plugin target
			var $e = $(this);
						
		});
	};
	$.fn.commonWidgetsLoadDivViaXml = function( sUrl, pagekey ) {  
			$.ajax({type:"GET", url:sUrl, cache: false,success: function(xml){
				var rootNode = $(xml).find('inc');
				var rootNodeID = rootNode.attr("divid");  
				var rootNodeText = rootNode.text();   
				var tempIDName="#"+rootNodeID;
				$(tempIDName).html('');
				$(tempIDName).html(rootNodeText).commonWidgetsJs();
				},complete: function(){
				     if (pagekey!='undefined' && (pagekey=='magazine-story'|| pagekey=='magazine-opinionstory')){
						var p3SponsoredContent = "";
						try {
							p3SponsoredContent = $("div#widgetMagazineGlobalSponsoredContent").text().trim();//use .text() to ignore timestamp in xml
						} 
						catch (e) {}
						//no Sponsored Content, show ad_type ad
						adSlot = PP_pagekey + '_x01';
						if (p3SponsoredContent === '') {
							googletag.cmd.push(function(){
								googletag.display(adSlot);
							});
							
						}
					}
			   }
			});//ajax	
	};
	
	//set links to open in new window if they appear in story paragraphs, but not inset boxes, headers or footers 
	$('.story-text').children('p').find('a').attr('target','_blank');
	
})( jQuery );


//GLOBAL CACHEBUSTING HELPER
function cacheBuster(secondsToCache) {
	var returnedString = "";
	var newDate = new Date();
	var seconds = Math.ceil(newDate.getUTCSeconds()/secondsToCache)
	var dateTime = newDate.getUTCFullYear().toString() + newDate.getUTCMonth().toString() + newDate.getUTCDate().toString();
	if (secondsToCache <= 3600){dateTime += newDate.getUTCHours().toString();
		if(secondsToCache > 60){dateTime += Math.ceil(newDate.getUTCMinutes()/(secondsToCache/60))*secondsToCache;}
		else{dateTime += newDate.getUTCMinutes().toString();}}
	dateTime += seconds.toString();
	returnedString = "?cachebuster=" + dateTime;
	return returnedString;
}

$("#superNewsletterSubmit").on( 'click', function( event ) {
	event.preventDefault();
	var formData = $('#superNewsletterForm').serialize();
	$.ajax({
		type: $('#superNewsletterForm').attr('method'),
		url: $('#superNewsletterForm').attr('action'),
		data: formData,
		success: function (data) {
			if (data.success == true) {
				$(".newsletter-signup").empty().html('<div class="system-message is-success">'
					+ '<h6><b class="icon icon-success" aria-hidden="true"></b>Thank You For Signing Up</h6>'
					+ '<p>' + data.msg +'</p></div>');
			} else {
				window.location.href = data.redirect;
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			return false;
		},
		dataType: 'json'
	});
});

//POLITICO COOKIES
function ReadCookie(d){var b=d+"=";var c=document.cookie.split(';');for(var e=0;e<c.length;e++){var a=c[e];while(a.charAt(0)==' ')a=a.substring(1,a.length);if(a.indexOf(b)==0)return a.substring(b.length,a.length)}return null}function Get_Cookie(d){var b=document.cookie.split(';');var c='';var e='';var a='';var f=false;for(i=0;i<b.length;i++){c=b[i].split('=');e=c[0].replace(/^\s+|\s+$/g,'');if(e==d){f=true;if(c.length>1){a=unescape(c[1].replace(/^\s+|\s+$/g,''))}return a;break}c=null;e=''}if(!f){return null}}
function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	var domain = window.location.hostname.indexOf("politico.com")>0?"politico.com":window.location.hostname;
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";path=/;domain="+domain+";expires="+exdate.toUTCString());
}

if(window.location.href.indexOf('/story/') > 0){
	if(window.location.search.indexOf('print') > 0){
		window.print();
	}
}

function infinite_scroll_home(){
	var Story = Backbone.Model.extend({});

	var Stories = Backbone.Collection.extend({
		model: Story,
		url: feedLocation + cacheBuster(300),
	});

	var StoryRowsView = Backbone.View.extend({
		el: "#superLatest ol.story-list",
		template: _.template($("#storyRawTemplate").html()),
		omnitureTracking: 'ml=lb_',
		startStory: 0,
		initialNumberOfRows: 0,
		storiesPerRow: 3,
		extraRowsOnScroll: 3,
		maxNumberOfRows: 68,
		maxRowReached: false,
		debug: false,
		storyCounter: 1,
		rowCounter: 1,
		footerSize: 430,

		initialize: function(attrs) {
			this.options = attrs;

			//Bind scroll listener to the window
			_.bindAll(this, 'loadMoreBottomStories');
		    $('div.content-actions').click(this.loadMoreBottomStories);
		    
		    this.loadMoreBottomStories();
		},

		loadMoreBottomStories: function(){
			//Check if we have reached the max number of rows
			if (this.maxRowReached == true) {
				return;
			}

			//Create extra rows with stories
			for (var i=1; i<=this.extraRowsOnScroll; i++) {
				var models = new Array();

				for (var j=0; j<this.storiesPerRow; j++) {
					var model = this.collection[this.storyCounter - 1 + j];
					if (typeof model === "undefined") return;

					models.push(model);
				}

				this.$el.append(this.createStoryRowView(models));
				if (this.maxRowReached == true) {
					$('div.content-actions').css('display', 'none');
				}
			}
			if(typeof this.collection[this.storyCounter + this.storiesPerRow - 1] === "undefined"){
				$('div.content-actions').css('display', 'none');
			}
			getShareCounts();
			refresh_comment_counts();
			return this;
		},

		//Creates one row of stories
		createStoryRowView: function(models) {
			//Check if we have reached the max number of rows
			if (this.rowCounter > this.maxNumberOfRows) {
				this.maxRowReached = true;
				return;
			}

			var row = '';

			_.each(models, function(model) {
				var story = this.createStoryView(model);
			  	row += story;
		   	}, this);

			this.rowCounter++;

			return row;
		},

		//Creates one story item
		createStoryView: function(model) {
			var template = _.template($("#storyTemplate").html());

			//Add omniture tracking
			var permalink = model.get('permalink');
			model.set('permalink_track', permalink + '?' + this.omnitureTracking + this.storyCounter);

			this.storyCounter++;

			return template(model.toJSON());
		}
	}); //End StoryRowsView

	//Fetch the JSON file and populate the collection
	if(collection.length == 0){
		collection = new Stories();
		collection.fetch();
		
		//Set timeout
		setTimeout(function() {
			//Populate the story rows and listen for scroll events
			var storyRowsView = new StoryRowsView({collection: collection.slice(0, collection.length), debug: false});

		}, 550); //End Set timeout
	}
}