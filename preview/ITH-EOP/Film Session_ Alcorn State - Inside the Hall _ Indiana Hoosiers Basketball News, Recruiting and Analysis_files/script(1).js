

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
	console.log("startAd");
    addEventListeners();
}

function addEventListeners() {
	console.log(">>addEventListeners");
    document.getElementById("click_capture").addEventListener("click", clickthrough);
}

function clickthrough() {
	console.log("clicked");
    EB.clickthrough();
}

window.addEventListener("load", initEB);
