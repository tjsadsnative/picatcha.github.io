(function() {
//var feedaddr = 'http://www.reuters.com/assets/JSONvideos?videoChannel=2602';
  var feedaddr = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/reuters/USVideoBusiness&callback=?";
  var totalstories = 3;
  var thumbwidth = 160;

  var thumbwidthreplace = "~" + thumbwidth;

  $.getJSON( feedaddr )
    .done(function( data ) {
      $.each( data.responseData.feed.entries, function( i, item ) {
      var imglink = item.mediaGroups[0].contents[0].thumbnails[0].url.replace("~120x120", thumbwidthreplace);
      var storylink = item.link;
      var headline = item.title;
      var timearr = item.publishedDate.split(' ');
      var timestamp = timearr[0] + ' ' + timearr[2] + ' ' + timearr[1] + ' ' + timearr[3];

var formatted = '<div class="photo"><a href="' + storylink + '" target="_top"><img src="' + imglink +'" border=0></a></div><div class="info"><a href="' + storylink + '" target="_top">' + headline + '</a><span class="timestamp">' + timestamp + '</span></div></li>';
    $('<li>').append(formatted).appendTo("#lbrssthumbgroup");

        if ( i == (totalstories - 1) ) {
          return false;
        }       
      });
    });
})();
