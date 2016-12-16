ebO.extensionHooks && ebO.extensionHooks.push(function(adConfig){
	EBG.RichModules.FlashVisibilityProvider._isAvailable = function() {
		return false;
	}
});