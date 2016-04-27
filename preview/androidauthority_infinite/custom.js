// Generic function for invite feed pages
function displayNativeAd(postElementID, placementID, cssPath, positionIndex) {
    var dynamicPlacement = new AdsNative(placementID, []),
        placementContainer = document.createElement('div'),
        containerRef = document.querySelectorAll('#' + postElementID + ' ' + cssPath)[(positionIndex) ? positionIndex : 0];

    // Insert container
    if(!containerRef) return;
    placementContainer.id = 'adsnative-post-' + postElementID;
    containerRef.parentNode.insertBefore(placementContainer, containerRef.nextSibling);

    // Fetch and render Ad
    dynamicPlacement.fetchAd(function(status) {
        if (status) { // If returned a valid campaign to display.
            var didDisplay = dynamicPlacement.displayAd(placementContainer.id);
        }
    });
}
// Custom script for each publisher site
// Parameters : <postElementID> <placementID> and <cssPath>
displayNativeAd('post-689441', 'knvM8o5Nnya9ytqfSWx6RhQFmAexM97zwwmQ_vMv', 'div.postinfo'); // EOP
displayNativeAd('post-689441', 'm2zRLEXqO3ztZtfjROgoo480y6DTnogd9WAHjm_3', 'div.the-content p', 3); // MOP
