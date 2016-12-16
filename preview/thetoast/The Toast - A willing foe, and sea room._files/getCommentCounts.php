var counts = [], linkUrls = [], targets = [], ids = [];IDHasLoaded = true;counts[0] = '48 Comments';linkUrls[0] = 'http://the-toast.net/2015/02/10/gal-science-ant-lab/#idc-container';targets[0] = '';ids[0] = 'IDShowCommentLink20445';counts[1] = '28 Comments';linkUrls[1] = 'http://the-toast.net/2015/02/10/starfish-story/#idc-container';targets[1] = '';ids[1] = 'IDShowCommentLink21646';counts[2] = '20 Comments';linkUrls[2] = 'http://the-toast.net/2015/02/10/watching-downton-abbey-with-an-historian-queer-downton/#idc-container';targets[2] = '';ids[2] = 'IDShowCommentLink21603';counts[3] = '12 Comments';linkUrls[3] = 'http://the-toast.net/2015/02/10/tituba/#idc-container';targets[3] = '';ids[3] = 'IDShowCommentLink20798';counts[4] = '18 Comments';linkUrls[4] = 'http://the-toast.net/2015/02/10/alive/#idc-container';targets[4] = '';ids[4] = 'IDShowCommentLink21615';counts[5] = '91 Comments';linkUrls[5] = 'http://the-toast.net/2015/02/10/women-inexpertly-groped-western-art-history/#idc-container';targets[5] = '';ids[5] = 'IDShowCommentLink21622';counts[6] = '158 Comments';linkUrls[6] = 'http://the-toast.net/2015/02/10/link-roundup-268/#idc-container';targets[6] = '';ids[6] = 'IDShowCommentLink21618';counts[7] = '15 Comments';linkUrls[7] = 'http://the-toast.net/2015/02/09/musical-saw/#idc-container';targets[7] = '';ids[7] = 'IDShowCommentLink19904';var theCount = 0;
var idLinksToReplace = Array();
var spans = document.getElementsByTagName("span");
for ( var i = 0, sp_lng = spans.length; i < sp_lng; i++ ) {	
	if ( spans[i].className == "IDCommentsReplace" ) {
		idLinksToReplace[idLinksToReplace.length] = spans[i].parentNode;
		theCount++;
	}
}

for ( var i = 0, repl_lng = idLinksToReplace.length; i < repl_lng; i++ ) {
	if ( !linkUrls[i] )
		break;
	
	if ( typeof idLinksToReplace[i].href != 'undefined' ) idLinksToReplace[i].href = idLinksToReplace[i].href.replace( /#.*/, '#idc-container' );
	idLinksToReplace[i].id = ids[i];
	idLinksToReplace[i].target = targets[i];
	idLinksToReplace[i].innerHTML = counts[i];
}
