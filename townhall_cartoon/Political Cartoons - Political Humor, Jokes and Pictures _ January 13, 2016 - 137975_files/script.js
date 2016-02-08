var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    useInAppCloseButton();
    addEventListeners();
}

function useInAppCloseButton() {
    var sdkData = EB.getSDKData();

    if (sdkData !== null) {
        if (sdkData.SDKType === "MRAID") {
            // set sdk to use custom close button
            EB.setExpandProperties({
                useCustomClose: true
            });
        }
    }
}

function addEventListeners() {
    document.getElementById("expand-button").addEventListener("click", expand);
    document.getElementById("close-button").addEventListener("click", collapse);
    document.getElementById("mainDefault").addEventListener("click", clickthrough);
    document.getElementById("expDefault").addEventListener("click", clickthrough);
    document.getElementById("expCta").addEventListener("click", clickthrough);
    //document.getElementById("user-action-button").addEventListener("click", userActionCounter);
}

function expand() {
	document.getElementById("expand-button").style.display= "none";
    EB.expand();
    EB.userActionCounter("PRI_Main_CLICK_Expand_UP");
    console.log("PRI_Main_CLICK_Expand_UP");
    adDiv.classList.remove("collapsed");
    adDiv.classList.add("expanded");
}

function collapse() {
	setTimeout(function(){document.getElementById("expand-button").style.display= "block";},1000);
    EB.automaticEventCounter("EXP_CloseBtn_CLICK_Collapse_OTHER");
    console.log("EXP_CloseBtn_CLICK_Collapse_OTHER");
    adDiv.classList.remove("expanded");
    adDiv.classList.add("collapsed");
    EB.collapse();
}

function clickthrough(e) {
    //EB.clickthrough();
    if(e.target.id == "mainDefault"){
        EB.clickthrough("PRI_Main_CLICK_Clickthrough_CLICK");
        console.log("PRI_Main_CLICK_Clickthrough_CLICK");
    }else if(e.target.id == "expCta"){
        EB.clickthrough("EXP_CTA_CLICK_Clickthrough_CLICK");
        console.log("EXP_CTA_CLICK_Clickthrough_CLICK");
    }else{
        EB.clickthrough("EXP_Main_CLICK_Clickthrough_CLICK");
        console.log("EXP_Main_CLICK_Clickthrough_CLICK");
    }
}

function userActionCounter() {
    //EB.userActionCounter("CustomInteraction");
}

window.addEventListener("load", initEB);
