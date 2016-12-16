registerNamespace("Reuters.win");
Reuters.win.wire={wireNewsTmpl:'<article class="article"><header class="article-header"><time class="article-time"><span class="time-icon"></span><span class="timestamp"/></time><h3 class="article-heading"><a></a></h3></header></article>',wireVideoTmpl:'<article class="video group"><a class="thumb-link"><figure class="video-thumb"><img/><span class="slide-length"></span></figure></a><header class="video-header"><h3 class="video-heading"><a></a></h3></header></article>',wireSlideshowTmpl:'<div class="photo-container"><a class="thumb-link"><div class="photo-thumb"><div class="slideshow-marker"></div></div></a><header class="photo-header"><h3 class="photo-heading"><a></a></h3></header></div>',
drawWireNews:function(a,d){for(var e=0;e<d.headlines.length;e++){var c=d.headlines[e],b=$(Reuters.win.wire.wireNewsTmpl).appendTo(a);b.find(".timestamp").text(c.formattedDate);b.find(".timestamp").data("time",c.dateMillis);b.find("h3.article-heading a").attr("href",c.url).text(c.headline)}a.data("ajax-data").endTime=a.find(".article").last().find(".timestamp").data("time");$("#div_gpt_native").insertAfter(".wire-module .article:eq(3)");d.headlines.length<a.data("ajax-data").limit&&a.next(".load-more-link").addClass("load-more-hide");
a.next(".load-more-link").find(".load-more-content").addClass("active");a.next(".load-more-link").find(".loader-wire").removeClass("active")},drawWireVideos:function(a,d){var e=a.find("h3.video-heading a").last().data("id");if(d&&d.videos&&d.videos.length>1)for(var c=0;c<d.videos.length;c++)if(!(c==0&&e&&e==d.videos[0].id)){var b=d.videos[c],f=$(Reuters.win.wire.wireVideoTmpl).appendTo(a);f.find("h3.video-heading a").attr("href",b.url).text(b.headline).data("id",b.id);f.find(".slide-length").text(b.videoLength);
f.find("figure").append('<i class="play-button"></i>');f.find("img").attr("src",b.photo).attr("alt",b.headline);f.find("a.thumb-link").attr("href",b.url).data("id",b.id);a.children().length==1?f.addClass("left-video"):f.prev().hasClass("left-video")?(f.addClass("right-video"),f.after('<div class="video-divider"></div>')):f.prev().hasClass("video-divider")?f.addClass("left-video"):d.videos[c]==d.videos[d.videos.length-1]&&(f.addClass("left-video"),f.after('<div class="video-divider"></div>'));if(a.children("article").length==
a.data("max")){a.next(".load-more-link").addClass("load-more-hide");break}}a.data("ajax-data").vid=a.find("h3.video-heading a").last().data("id");a.data("ajax-data").firstId=a.find("h3.video-heading a").first().data("id");d.videos.length<a.data("ajax-data").limit&&a.next(".load-more-link").addClass("load-more-hide");a.next(".load-more-link").find(".load-more-content").addClass("active");a.next(".load-more-link").find(".loader-wire").removeClass("active")},drawWireSlideshow:function(a,d){for(var e=
0;e<d.headlines.length;e++){var c=d.headlines[e],b=$(Reuters.win.wire.wireSlideshowTmpl).appendTo(a);b.addClass(c.id);b.data("time",c.dateMillis);b.find(".photo-thumb").append('<img src="'+c.photo+'" alt="photo">');b.find("h3.photo-heading a").attr("href",c.slideshowLink).text(c.headline);b.find(".thumb-link").attr("href",c.slideshowLink);e%2!=0&&b.prev().hasClass("left-slideshow")?(b.addClass("right-slideshow"),b.after('<div class="slideshow-divider"></div>')):d.headlines[e]==d.headlines[d.headlines.length-
1]?(b.addClass("left-slideshow"),b.after('<div class="slideshow-divider"></div>')):b.addClass("left-slideshow")}c=a.data("mostshared");if(window[c]&&window[c][0])for(e in c=window[c][0].data,c)if(b=c[e].url,b=b.match(/articleId=(\w+)/))b=b[1],$("div."+b+":not(.most-shared)").addClass("most-shared").append("<span>MOST SHARED </span>");c=a.data("popular");if($("div.popular").length<2&&window[c]&&window[c][0])for(e in c=window[c][0].data,c)if(b=c[e].url,b=b.match(/articleId=(\w+)/))b=b[1],$("div."+b+
":not(.most-shared):not(.popular)").addClass("popular").append("<span>POPULAR</span>");a.data("ajax-data").endTime=a.find(".photo-container").last().data("time");a.find(".photo-container").length>=a.data("max")&&a.next(".load-more-link").addClass("load-more-hide");a.next(".load-more-link").find(".load-more-content").addClass("active");a.next(".load-more-link").find(".loader-wire").removeClass("active")},ajaxCall:function(a){a.next(".load-more-link").find(".load-more-content").removeClass("active");
a.next(".load-more-link").find(".loader-wire").addClass("active");$.ajax({url:a.data("ajax-url"),data:a.data("ajax-data"),success:function(d){var e=Reuters.win.wire[a.data("ajax-callback")];e?e(a,d):console.error("[Ajax Call Error] : Callback not found. Reuters.win.wire."+a.data("ajax-callback"))},error:function(a,e,c){console.error("[Ajax Call Error] : "+e,c)}})}};
$(document).ready(function(){$(".wire-container + .load-more-link .load-more-content").on("click",function(){var a=$(this).parent().prev(".wire-container");Reuters.win.wire.ajaxCall(a);var a={},d=$(this).data("loadmore-type");d&&(a={loadMoreType:d});Reuters.win.event.fire("Load More Click",a)});$.each($(".wire-container"),function(a,d){var e=$(d);e.data("loadonready")&&Reuters.win.wire.ajaxCall(e)})});