var Background_Exit_URL,CTA_URL,Legal_Text,Legal_TRUE,Text_LegalBox,Logo,Background_Image,Blip,Frame_Image_1,Frame_Image_2,Frame_Image_3,Frame_Image_4,Frame_ImageText_4,CTA_Image,Legal_Coordinates,adSize,refArray,totalImages,loadArray,adWidth,adHeight,adWidthStyle,adHeightStyle,legalText,legalBoolean,legalRollover,legalXYCoords,legalX,legalY,legalUp;

adSize = "160x600";

////////////////////////////////////////////////////////////
////// STANDARD ANIMATION BLOCK DO NOT TOUCH ///////////////
////////////////////////////////////////////////////////////
function ImageObject (objRef){
    var defaultValues = [{x:0, y:0, srcX:0, srcY:0, scale:1, alpha:1, rotation:0}];
    this.img = new Image();
    for(var key in objRef){this[key] = objRef[key];}
    for(var key in defaultValues[0]){this[key] = ((this[key] != undefined) ? this[key] : defaultValues[0][key]);}
    this.img.src = this.source;
    this.width = this.srcWidth;
    this.height = this.srcHeight;
}

ImageObject.prototype.draw = function(context) {
    try{
    context.save();
    context.translate(this.x, this.y);
    context.globalAlpha = this.alpha;
    context.drawImage(this.img, this.srcX, this.srcY, this.srcWidth, this.srcHeight, 0, 0, (this.width * this.scale), (this.height * this.scale));
    context.restore();
    } catch (e) {}
};

function imageLoadComplete(){
    totalImages++;
    if(totalImages >= loadArray.length){
        runAnimations();
    }
}

function renderTween (){
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var key in refArray){
        refArray[key].draw(context);
    }
}
////////////////////////////////////////////////////////////
////// END ANIMATION BLOCK /////////////////////////////////
////////////////////////////////////////////////////////////

if (!Enabler.isInitialized()) {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
} else {
   enablerInitialized();
}

function enablerInitialized() {             
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

function pageLoadedHandler() {
    invocationCode();
    dynamicToLocal(dynamicContent);
    setTimeout(function(){loadBanner();}, 2000);
}

function invocationCode (){

    // Dynamic Content variables and sample values
    Enabler.setProfileId(1040518);
    var devDynamicContent = {};

    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting= [{}];
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]._id = 0;
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Unique_ID = "D23_MosaicTile_Incremental_Update";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Reporting_Label = "D23_023-006_n\/a_MosaicTile_Standard_ShopNow";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Start_Date = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Start_Date.RawValue = "3/2/2015";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Start_Date.UtcValue = 1425283200000;
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].End_Date = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].End_Date.RawValue = "4/12/2015 23:59:00";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].End_Date.UtcValue = 1428908340000;
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Exit_URL = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Exit_URL.Url = "http://www.homedepot.com/b/Flooring-Tile-Mosaic-Tile/N-5yc1vZc8gf";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_URL = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_URL.Url = "http://www.homedepot.com/b/Flooring-Tile-Mosaic-Tile/N-5yc1vZc8gf";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/33256071/18984_20140820144702215_empty.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658804/18984_20150211083028070_CTA.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/34886474/18984_20141117095718255_Logo.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35639083/18984_20150210074153692_Background.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35652899/18984_20150211083029222_Image1.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659303/18984_20150211083030594_Image2.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35654148/18984_20150211083032096_Image3.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658387/18984_20150211100206091_Product1Image.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660707/18984_20150211100147301_Product1Text.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_Color_300x250 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_300x250 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Text_LegalBox_300x250 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_300x250_Coordinates = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_TRUE_300x250 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/33256071/18984_20140820144702215_empty.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35652895/18984_20150211082947243_CTA.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35654147/18984_20150211082953766_Logo.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35657616/18984_20150211082945949_Background.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35652896/18984_20150211082948681_Image1.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658803/18984_20150211082950862_Image2.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35652897/18984_20150211082952431_Image3.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660215/18984_20150211095956415_Product1Image.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659474/18984_20150211095934013_Product1Text.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_Color_160x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_160x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Text_LegalBox_160x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_160x600_Coordinates = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_TRUE_160x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/33256071/18984_20140820144702215_empty.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35657520/18984_20150211083127898_CTA.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/34885677/18984_20141117095841061_Logo.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35642421/18984_20150210080532907_Background.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659305/18984_20150211083129272_Image1.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658807/18984_20150211083130514_Image2.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35654152/18984_20150211083131602_Image3.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659179/18984_20150211100620949_Product1Image.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660415/18984_20150211100615110_Product1Text.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_Color_728x90 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_728x90 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Text_LegalBox_728x90 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_728x90_Coordinates = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_TRUE_728x90 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Blip_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/33256071/18984_20140820144702215_empty.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_Image_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658806/18984_20150211083057383_CTA.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Logo_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35654151/18984_20150211083104202_Logo.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Image_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35647294/18984_20150210133501553_Background.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_1_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35654150/18984_20150211083058741_Image1.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_2_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659700/18984_20150211083100752_Image2.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_3_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659304/18984_20150211083102943_Image3.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_Image_4_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660219/18984_20150211100507680_Product1Image.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Frame_ImageText_4_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35659476/18984_20150211100447991_Product1Text.png";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_Color_300x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_Text_300x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Text_LegalBox_300x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_300x600_Coordinates = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Legal_TRUE_300x600 = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x250 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x250.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658393/18984_20150211100851762_THD_D23_MosaicTile_300x250_F.jpg";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_728x90 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_728x90.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660416/18984_20150211100804517_THD_D23_MosaicTile_728x90_F.jpg";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_160x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_160x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35660418/18984_20150211100838898_THD_D23_MosaicTile_160x600_F.jpg";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x600 = {};
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x600.Type = "file";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].HTML5_Backup_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35658391/18984_20150211100817650_THD_D23_MosaicTile_300x600_F.jpg";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Exit_URLs_Text = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Image_SKUs_Reporting = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Copy_Other = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Creative_File_note = "";
    devDynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Campaign_File_note = "";
    Enabler.setDevDynamicContent(devDynamicContent);
}

function dynamicToLocal (dynamicContent){

    //GOOGLE DYNAMIC ELEMENTS
    Background_Exit_URL = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].Background_Exit_URL.Url;
    CTA_URL             = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0].CTA_URL.Url; 
    Legal_Text          = "Terms and conditions";            
    Legal_TRUE          = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Legal_TRUE_" + adSize];            
    Text_LegalBox       = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Text_LegalBox_" + adSize];          
    Logo                = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Logo_" + adSize].Url;
    Background_Image    = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Background_Image_" + adSize].Url;
    Blip                = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Blip_" + adSize].Url;
    Frame_Image_1       = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Frame_Image_1_" + adSize].Url;   
    Frame_Image_2       = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Frame_Image_2_" + adSize].Url;  
    Frame_Image_3       = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Frame_Image_3_" + adSize].Url;  
    Frame_Image_4       = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Frame_Image_4_" + adSize].Url;  
    Frame_ImageText_4   = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Frame_ImageText_4_" + adSize].Url;
    CTA_Image           = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["CTA_Image_" + adSize].Url;
    Legal_Coordinates   = dynamicContent.AL_THD_4Frame_General_V2_Exterior_Lighting[0]["Legal_" + adSize + "_Coordinates"];   

    // VARS FOR IMAGE OBJECTS
    refArray = new Array;
    totalImages = 0;
    loadArray = new Array;
    adWidth = adSize.split("x")[0];
    adHeight = adSize.split("x")[1];
    adWidthStyle = adWidth + "px";
    adHeightStyle = adHeight + "px";

    //LEGAL   
    legalText = Legal_Text;
    legalBoolean = Legal_TRUE;
    legalRollover = Text_LegalBox;
    legalXYCoords = Legal_Coordinates;

    //LEGAL X & Y
    legalX;
    legalY;

    //LEGAL ACTIVATED BOOLEAN
    legalUp = false;
}

//TERMS & CONDITIONS FUNCTIONALITY
function showHideLegal(){
    if (legalUp == false){
        legalPopUp.style.display = "block";
        TNC.style.display = "none";
        legalUp=true;}
    else{
        legalPopUp.style.display = "none";
        TNC.style.display = "block";
        legalUp=false;
    }
}

//ADD EVENT LISTENERS TO THE TERMS & CONDITIONS
function TnCEnabled(){                
if ('ontouchstart' in document.documentElement) {
    TNC.addEventListener("touchstart", showHideLegal, false);
    legalPopUp.addEventListener("touchstart", showHideLegal, false);
} else {
    TNC.addEventListener("mouseover", showHideLegal, false);
    legalPopUp.addEventListener("mouseout", showHideLegal, false);
    }
}

//REMOVE EVENT LISTENERS TO THE TERMS & CONDITIONS
function TnCDisabled(){                
if ('ontouchstart' in document.documentElement) {
    TNC.removeEventListener("touchstart", showHideLegal, false);
    legalPopUp.removeEventListener("touchstart", showHideLegal, false);
} else {
    TNC.removeEventListener("mouseover", showHideLegal, false);
    legalPopUp.removeEventListener("mouseout", showHideLegal, false);
    }
} 

function setupLegal(){
    TNC.innerHTML = legalText;
    legalPopUp.innerHTML = legalRollover;

    var tempArray = legalXYCoords.split(",");
    //var tempArray = (legalXYCoords != undefined) ? legalXYCoords.split(",") : "0,0";

    legalX = tempArray[0]+"px";
    legalY = tempArray[1]+"px";

    TNC.style.top = legalY;
    TNC.style.left = legalX;
    legalPopUp.style.top = (tempArray[1] - 3).toString() + "px";
    legalPopUp.style.left = 6+"px";
    legalPopUp.style.width = (adWidth - 20).toString() + "px";
}

//MAIN FUNCTION TO START AND SETUP BANNER
function loadBanner(){
    context = document.getElementById("canvas").getContext("2d");
    canvas = document.getElementById("canvas");

    TNC = document.getElementById("TNC");
    legalPopUp = document.getElementById("legalPopUp");

    setupLegal();

    canvas.style.width = adWidthStyle;
    canvas.style.height = adHeightStyle;
    canvas.width = adWidth;
    canvas.height = adHeight;

    canvas.addEventListener("click", clickThrough);

    // save the width and height of the ad as variables so you 
    // don't have to change out all of those values when you do a
    // different size. Note that some of my slides are not full height
    // so those values are hard coded. If you cut everything full frame
    // you'll need to replace those values with adHeight instead

    //put in actual height in place of adWidth of images once seperated and made into jpgs
    loadArray = [
        {name:"bg", source:Background_Image, srcWidth:adWidth, srcHeight:adHeight}, 
        {name:"product1", source:Frame_Image_4, srcWidth:adWidth, srcHeight:adHeight, alpha:0}, 
        {name:"productText1", source:Frame_ImageText_4, srcWidth:adWidth, srcHeight:adHeight, alpha:0}, 
        {name:"product1CTA", source:CTA_Image, srcWidth:adWidth, srcHeight:adHeight, alpha:0},
        {name:"image3", source:Frame_Image_3, srcWidth:adWidth, srcHeight:adHeight},
        {name:"image2", source:Frame_Image_2, srcWidth:adWidth, srcHeight:adHeight},
        {name:"image1", source:Frame_Image_1, srcWidth:adWidth, srcHeight:adHeight},
        {name:"logo", source:Logo, srcWidth:adWidth, srcHeight:adHeight}                  

    ]

    for(var key in loadArray){
        var tempObject = loadArray[key];
        var cntRef = tempObject["name"];
        this[cntRef] = new ImageObject(tempObject);
        refArray.push(this[cntRef]);
        this[cntRef].onLoad = imageLoadComplete();
    }
}

//ONCE IMAGES HAVE ALL BEEN LOADED, THIS IS THE FUNCTION THAT IS CALLED TO START ANIMATIONS
function runAnimations(){

    TweenLite.ticker.addEventListener("tick", renderTween);

    TweenLite.to(image1, .5, {delay:2, alpha:0});
    TweenLite.to(image2, .5, {delay:4.5, alpha:0});
    TweenLite.to(image3, .5, {delay:7, alpha:0});
    TweenLite.to(productText1, .5, {delay:7.5, alpha:1});
    TweenLite.to(product1, .5, {delay:7.5, alpha:1});
    TweenLite.to(product1CTA, .5, {delay:8, alpha:1, onComplete:ctaEnabled});

    if((legalBoolean == "TRUE") || legalBoolean){
        TweenLite.to(TNC, .5, {delay:8, alpha:1, onComplete:TnCEnabled});
    }
}

//CHECK TO SEE WHICH EXIT TO USE BASED ON WHAT PRODUCT IS BEING SHOWN
//NOTE THAT IF THE TOGGLE IS NOT ACTIVATED, IT WILL DEFAULT TO DEFAULT EXIT
var ctaActivated = false;

function ctaEnabled(){
    ctaActivated = true;
}

function clickThrough(){
    if(!ctaActivated) {
        Enabler.exitOverride("Background_Exit",Background_Exit_URL);
    } else {
        Enabler.exitOverride("CTA_Exit",CTA_URL);
    }
}




