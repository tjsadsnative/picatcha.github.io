jQuery(document).ready(function($) {

	// Mobi nav menu
  	$("#nav-mobi select").change(function() {
	 window.location = $(this).find("option:selected").val();
	});
  
	// Tabs

	//When page loads...
	$('.tabber-container').each(function() {
		$(this).find(".tabber-content").hide(); //Hide all content
		$(this).find("ul.tabber li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tabber-content:first").show(); //Show first tab content
	});
	
	//On Click Event
	$("ul.tabber li").click(function(e) {
		$(this).parents('.tabber-container').find("ul.tabber li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabber-container').find(".tabber-content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabber-container').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	
	$("ul.tabber li a").click(function(e) {
		e.preventDefault();
	})


});

jQuery(document).ready(function($) {
	var ticker = function()
	{
		setTimeout(function(){
			$("ul.ticker-list li:first").animate( {marginTop: '-30px'}, 800, function()
			{
				$(this).detach().appendTo("ul.ticker-list").removeAttr("style");	
			});
			ticker();
		}, 5000);
	};
	ticker();

});