var ebScriptFileName = "PL_DetectEnvironment_ALL.js";

/*
	This script detects whether we are serving in a Script, Friendly Iframe, or Unfriendly Iframe environment.
	It will then modify the BS response to mimick a call for that type of serving.
	The served script MUST be a regular script tag.
	Currently only set to work with the default ifl location
	Script CAN correctly identify multiple-nested-friendly-iframes and bust out accordingly
	LIMITATION:
	Script will simply serve blanks if the addineyeV2.html file is not located.  IE8 and lower will show the default image, but
	other browsers will simply serve blanks.  This is how our adserver currently works.
*/

function serveCorrectEnvironment() {
	try {
		// Check if we are able to determine parent hostname (unable if unfriendly iframe)
		var parentHostName = null;
		try { parentHostName = parent.location.hostname; } catch (phnE) { parentHostName = null;}
		
		// If window is same as parent, we're not in any iframe, so nothing is necessary to do.
		// Only need to take action if we're within an iframe.
		if (window!==parent) {
			// We're not a script tag, so we're either a friendly or an unfriendly Iframe
			if (window.location.hostname===parentHostName) {
				// Parent domain same as window domain, Friendly Iframe detected, must ad inDapIF variable to page
				document.write('<scr' + 'ipt>var inDapIF = true;</scr' + 'ipt>\n');
				// Now we need to check how many levels out of the iframe we can bust out of
				var ref = "";
				// Loop through each parent window, seeing if that's the same as it's parent.  If so, we're at the top.
				while (eval("window" + ref).window !== eval("window" + ref + ".parent").window) { ref += ".parent"; }
				ref = ref.substring(8);  // trim off the first ".parent." from the reference to the top as inDapIF already assumes one level of busting
				if (ref.length>0) { // If we have anything left after trimming, assign this value to the gstrEbDisplayPos to bust out correctly
					document.write('<scr' + 'ipt>var gstrEbDisplayPos = "' + ref + '";</scr' + 'ipt>\n');
				}
			} else {
				// Parent domain differs from window domain.  Unfriendly Iframe.  Handle accordingly
				if ((typeof(gfEbOnInternalIframe) !== "undefined") && (gfEbOnInternalIframe)) {
					// We are now in the MM-created iframe (source is addineyeV2.html)
					// We must now CLEAR the values below so the ad correctly renders.
					ebO.ifrm = undefined;
					ebIfrm = undefined;
				}
				else {
					// We're serving in an unfriendly IFrame.  Set vars and ebO values as they would be set from the ifrm=1 param
					ebO.ifrm = 1;
					ebIfrm = ("1" == "1");
				}
			}
		}
	} catch(e) {	}
}

serveCorrectEnvironment();