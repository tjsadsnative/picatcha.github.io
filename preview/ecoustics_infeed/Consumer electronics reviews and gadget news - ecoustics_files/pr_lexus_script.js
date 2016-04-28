/*
Author:
Nick Fox
last Edit: LG-112015-r05

last Edit: by Steve Tamayo - 02/12/16 (Files pulled from CFP)
Rev 1.6

Scope: 
L - Lexus - Lexus Repository 2015 HTML and 2016

Media Path:
Id: 201128 
Name: LEXUS_PHOTO_GALLERY_ASSETS
Url: http://speed.pointroll.com/PointRoll/Media/Asset/Lexus/201128/

Assets:
P:\_CFP\Lexus\2014_LEXUS_Dynamic\CREATIVE FOLDER\CD Files\PhotoGallery_HTML

Version: 
Photo Gallery

Panel (All Sizes):
Id: 887194
Name: Lexus_HTML_PhotoGallery_AllSizes_Pol_DERIVE 

Creative:
Id: 2035296
Name: Lexus_HTML_PhotoGallery_728x90_Pol_DERIVE
	
Id: 2035297
Name: Lexus_HTML_PhotoGallery_160x600_Pol_DERIVE

Id: 2030492	
Name: Lexus_HTML_PhotoGallery_300x250_Pol_DERIVE

Macro Values: 
$MACRO75$ = prCust1
$MACRO11$ = prCust2
$MACRO12$ = prCust3
$MACRO13$ = prCust4
$MACRO14$ = prCust5
$MACRO15$ = prCust6
$MACRO16$ = prCust7
$MACRO17$ = prCust8
$MACRO18$ = prCust9
$MACRO19$ = prCust10
$MACRO20$ = prCust11
$MACRO21$ = prCust12
$MACRO22$ = prCust13
$MACRO23$ = prCust14
$MACRO24$ = prCust15
$MACRO25$ = AdControl Inferface Id
$MACRO26$ = Ad Size (300x250, 160x600, 728x90)

Activities:
1, Select_Exterior
2, Select_Interior
3, Select_Left_Arrow
4, Select_Right_Arrow
5, Select_Exterior_First_Navigation_Dot
6, Select_Exterior_Second_Navigation_Dot
7, Select_Exterior_Third_Navigation_Dot
8, Select_Exterior_Fourth_Navigation_Dot
9, Select_Exterior_Fifth_Navigation_Dot
10, Select_Interior_First_Navigation_Dot
11, Select_Interior_Second_Navigation_Dot
12, Select_Interior_Third_Navigation_Dot
13, Select_Interior_Fourth_Navigation_Dot
14, Select_Interior_Fifth_Navigation_Dot

Clicks:
1, CTA_Click
2, General_Click

*/



function prLogOut(msg){try{console.log(msg);}catch(err){};};

var prTesting = location.href.indexOf('http')==-1;
var prTestingAdControlId = 'a2d9b02f-96bc-4b9f-b35d-56c000ff2688';
var prImages = 5;
var prExtArray = [];
var prCurrentImage = 1;
var prCurrentVerion = 'Exterior';
var prEnableGallery = true;
var prNonUserInitGallerySliderTimer;
var prNonUserInitCounter = 0;
var prNonUserInitDelay = 2000;
var prAnimateDirection1; 
var prAnimateDirection2; 
var prAnimateDirection3;
var prVersionNumber;
var prDisclaimer;
var prImpressionId;
var prPubClickOverride;

var prAdControlData;
var prAdControlCta;
var prAdControlYear;
var prAdControlModel;
var prAdControlStartImage;
var prOmnitureTracking;
var prOverrideAdSize = '728x90'; // This value will only be used if local testing is set to true. Otherwise it will come from $MACRO26$
var prFilePath = prSSL('http://speed.pointroll.com/PointRoll/Media/Asset/Lexus/201128/');

var prWindowsBrowser = false;
var prChromeBrowser = false;

if(navigator.userAgent.indexOf('Windows') >= 0){
	prWindowsBrowser = true;
}

if(navigator.userAgent.indexOf('Chrome') >= 0){
	prChromeBrowser = true;
}

var prSafariBrowser = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');//soro
			   
console.log('isSafari? : ' + prSafariBrowser);//soro

var prDisclaimer728x90 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GSh',
	Interior:[
		'F SPORT shown<br/>with options',
		'',
		'',
		'',
		''
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'',
		'Options shown',
		''
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		''
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'',
		'Options shown',
		'',
		''
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

var prDisclaimer300x250 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		''
		]
	},{
	name:'GSh',
	Interior:[
		'F SPORT model shown<br/>with options',
		'',
		'',
		'',
		''
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'',
		'',
		''
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		''
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'',
		'Options shown',
		'',
		''
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

var prDisclaimer160x600 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GSh',
	Interior:[
		'',
		'F SPORT model shown<br/>with options',
		'',
		'F SPORT model shown<br/>with options',
		''
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'',
		'Options shown',
		''
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'Options shown',
		'',
		'',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

var prDisclaimer728x90_2016 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'F SPORT model<br/>shown with options',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'Options shown'
		]
	},{
	name:'GSh',
		Interior:[
			'F SPORT model shown<br/>with options',
			'F SPORT model shown<br/>with options',
			'',
			'',
			''
		],
		Exterior: [
			'Options shown',
			'Options shown',
			'',
			'Options shown',
			''
		]
	},{
	name:'GSF',
		Interior:[
			'',
			'',
			'',
			'Options shown',
			''
		],
		Exterior: [
			'Options shown',
			'Options shown',
			'',
			'Options shown',
			'Options shown'
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		''
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'',
		'Options shown',
		'',
		''
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'Options shown',
		'F SPORT shown<br/>with options',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'F SPORT shown<br/>with options',
		'Options shown',
		'F SPORT shown<br/>with options',
		'F SPORT shown<br/>with options',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

var prDisclaimer300x250_2016 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'F SPORT model<br/>shown with options',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options'
		]
	},{
	name:'GSh',
		Interior:[
			'F SPORT model shown<br/>with options',
			'',
			'',
			'',
			''
		],
		Exterior: [
			'Options shown',
			'Options shown',
			'',
			'',
			''
		]
	},{
	name:'GSF',
		Interior:[
			'Options shown',
			'',
			'Options shown',
			'',
			''
		],
		Exterior: [
			'Options shown',
			'Options shown',
			'',
			'',
			'Options shown'
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		''
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'',
		'Options shown',
		'',
		''
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'F SPORT shown<br/>with options',
		'F SPORT shown<br/>with options',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'F SPORT shown<br/>with options',
		'Options shown',
		'F SPORT shown<br/>with options',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

var prDisclaimer160x600_2016 = [{
	name:'CTh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'ES',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ESh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'GS',
	Interior:[
		'F SPORT model<br/>shown with options',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'F SPORT model<br/>shown with options',
		'Options shown'
		]
	},{
	name:'GSh',
	Interior:[
		'',
		'F SPORT model shown<br/>with options',
		'',
		'F SPORT model shown<br/>with options',
		''
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'',
		'Options shown',
		''
		]
	},{
	name:'GSF',
		Interior:[
			'',
			'Options shown',
			'',
			'',
			''
		],
		Exterior: [
			'Options shown',
			'Options shown',
			'',
			'',
			'Options shown'
		]
	},{
	name:'GX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'IS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'IS Crafted Line model shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'ISC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LS',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'LSh',
	Interior:[
		'',
		'Options shown',
		'',
		'',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'',
		''
		]
	},{
	name:'LX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'',
		'',
		'',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'NXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RC',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'F SPORT shown<br/>with options'
	],
	Exterior: [
		'F SPORT shown<br/>with options',
		'Options shown',
		'F SPORT shown<br/>with options',
		'F SPORT shown<br/>with options',
		'Options shown'
		]
	},{
	name:'RCF',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	},{
	name:'RX',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'',
		'Options shown'
		]
	},{
	name:'RXh',
	Interior:[
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
	],
	Exterior: [
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown',
		'Options shown'
		]
	}
];

function prCheckLoaded(){
	if(typeof(jQuery) != 'undefined'){
		prInitPanel();
	}else{
		window.setTimeout(prCheckLoaded, 100);
	}
}

function prInitPanel(){
	prGetMacros();
	prGetAdControl();
	prSetUpClicks();
}

/*if(prTesting){
	function prSSL(data){
		return data;
	}
}*/

function prGetMacros(){
	prAcid = document.getElementById('prContainer').getAttribute('prAcid');
	prImpressionId = document.getElementById('prContainer').getAttribute('prImpressionId');
	prShortImpressionId = document.getElementById('prContainer').getAttribute('prShortImpressionId');
	prCampaignId = document.getElementById('prContainer').getAttribute('prCampaignId');
	prPubId = document.getElementById('prContainer').getAttribute('prPubId');
	prAdId = document.getElementById('prContainer').getAttribute('prAdId');
	prPlacementId = document.getElementById('prContainer').getAttribute('prPlacementId');
	prDisplayFormat = document.getElementById('prContainer').getAttribute('prDisplayFormat');
	prAdsize = document.getElementById('prContainer').getAttribute('prAdsize');
	prGeoCountry = document.getElementById('prContainer').getAttribute('prGeoCountry');
	prGeoRegion = document.getElementById('prContainer').getAttribute('prGeoRegion');
	prGeoMetro = document.getElementById('prContainer').getAttribute('prGeoMetro');
	prDayOfWeek = document.getElementById('prContainer').getAttribute('prDayOfWeek');
	prDate = document.getElementById('prContainer').getAttribute('prDate');
	prPub = document.getElementById('prContainer').getAttribute('prPub');
	prCust1 = document.getElementById('prContainer').getAttribute('prCust1');
	prCust2 = document.getElementById('prContainer').getAttribute('prCust2');
	prCust3 = document.getElementById('prContainer').getAttribute('prCust3');
	prCust4 = document.getElementById('prContainer').getAttribute('prCust4');
	prCust5 = document.getElementById('prContainer').getAttribute('prCust5');
	prCust6 = document.getElementById('prContainer').getAttribute('prCust6');
	prCust7 = document.getElementById('prContainer').getAttribute('prCust7');
	prCust8 = document.getElementById('prContainer').getAttribute('prCust8');
	prCust9 = document.getElementById('prContainer').getAttribute('prCust9');
	prCust10 = document.getElementById('prContainer').getAttribute('prCust10');
	prCust11 = document.getElementById('prContainer').getAttribute('prCust11');
	prCust12 = document.getElementById('prContainer').getAttribute('prCust12');
	prCust13 = document.getElementById('prContainer').getAttribute('prCust13');
	prCust14 = document.getElementById('prContainer').getAttribute('prCust14');
	prCust15 = document.getElementById('prContainer').getAttribute('prCust15');
	prCustGeo1 = document.getElementById('prContainer').getAttribute('prCustGeo1');
	prCustGeo2 = document.getElementById('prContainer').getAttribute('prCustGeo2');
	prCustGeo3 = document.getElementById('prContainer').getAttribute('prCustGeo3');
	prSexPref = document.getElementById('prContainer').getAttribute('prSexPref');
	prEducationLevel = document.getElementById('prContainer').getAttribute('prEducationLevel');
	prGender = document.getElementById('prContainer').getAttribute('prGender');
	prYearOfBirth = document.getElementById('prContainer').getAttribute('prYearOfBirth');
	prUnder18 = document.getElementById('prContainer').getAttribute('prUnder18');
	prAgeRange = document.getElementById('prContainer').getAttribute('prAgeRange');
	prMaritalStatus = document.getElementById('prContainer').getAttribute('prMaritalStatus');
	prNumChildren = document.getElementById('prContainer').getAttribute('prNumChildren');
	prHouseholdIncome = document.getElementById('prContainer').getAttribute('prHouseholdIncome');
	prNeighborhood = document.getElementById('prContainer').getAttribute('prNeighborhood');
	prPubCategory = document.getElementById('prContainer').getAttribute('prPubCategory');
	prVenCategory = document.getElementById('prContainer').getAttribute('prVenCategory');
	prBrowser = document.getElementById('prContainer').getAttribute('prBrowser');
	prGeoPostal = document.getElementById('prContainer').getAttribute('prGeoPostal');
	prConnSpeed = document.getElementById('prContainer').getAttribute('prConnSpeed');
	prHourOfDay = document.getElementById('prContainer').getAttribute('prHourOfDay');
	prTimeZone = document.getElementById('prContainer').getAttribute('prTimeZone');
	prWeekend = document.getElementById('prContainer').getAttribute('prWeekend');
	prSiteId = document.getElementById('prContainer').getAttribute('prSiteId');
	if(!prTesting){prOverrideAdSize = document.getElementById('prContainer').getAttribute('prOverrideAdSize');}
	document.getElementById('prContainer').className = 'pr' + prOverrideAdSize;
}

function ptSetDisclaimerObj(){
	if(prOverrideAdSize == '728x90'){
		if(prAdControlYear=='2016'){
			prDisclaimer = prDisclaimer728x90_2016;
		}else{
			prDisclaimer = prDisclaimer728x90;
		}
	}
	if(prOverrideAdSize == '300x250'){
		if(prAdControlYear=='2016'){
			prDisclaimer = prDisclaimer300x250_2016;
		}else{
			prDisclaimer = prDisclaimer300x250;
		}
	}
	if(prOverrideAdSize == '160x600'){
		if(prAdControlYear=='2016'){
			prDisclaimer = prDisclaimer160x600_2016;
		}else{
			prDisclaimer = prDisclaimer160x600;
		}
	}
}

function prSetUpClicks(){
	document.getElementById('prCta').addEventListener('click', function(){
				
		var prURL = document.getElementById('prCtaUrl').getAttribute('href');
		
		var prURL_Model = [];
	
		if(prOmnitureTracking.indexOf('%') >= 0){
			prURL_Model = prOmnitureTracking.split('%');
		}else{
			prURL_Model = prOmnitureTracking.split('?');
		}
		
		if(prURL.indexOf('$VEHICLE$') >= 0){
			prURL = prURL.replace('$VEHICLE$', prURL_Model[0]);
		}
		
		prURL = prURL + prOmnitureTracking;
		
		console.log(prURL);
		
		if(typeof(prTrk)!='undefined') {
			console.log('prTrk.');
			prTrk({id: 1, url: prURL});
		} else {
			console.log('prTrk not found.');
			//pr_trk('pc', prup, 1, 1);
			prPubClickOverride = 1;	
			prURL = prGetEncodedUrl(prURL);
			
			var PRctaURL = "http://clk.pointroll.com/pc/?p=" + prup + "&c=" + 1 + "&i=" + prImpressionId + "&clickurl=" + prURL;
			window.setTimeout(function(){window.open(PRctaURL);}, 100);
		}
	});
	
	document.getElementById('prGeneral').addEventListener('click', function()
	{				
		var prURL = document.getElementById('prCtaUrl').getAttribute('href');
		
		if(prURL.indexOf('$VEHICLE$') >= 0){
			prURL = prURL.replace('$VEHICLE$', prAdControlModel);
		}
		
		prURL = prURL + prOmnitureTracking;
		
		console.log(prURL);
		
		if(typeof(prTrk)!='undefined') {
			console.log('prTrk.');
			prTrk({id: 2, url: prURL});
		} else {
			console.log('prTrk not found.');
			//pr_trk('pc', prup, 2, 1);
			prPubClickOverride = 1;	
			
			prURL = prGetEncodedUrl(prURL);
			
			var PRctaURL = "http://clk.pointroll.com/pc/?p=" + prup + "&c=" + 1 + "&i=" + prImpressionId + "&clickurl=" + prURL;
			
			window.setTimeout(function(){window.open(PRctaURL);}, 100);
		}
	});
	
	document.getElementById('prToggleExterior').addEventListener('click', function(){
		try{
			if(typeof(prTrk)!=undefined) {
				prTrk({id: 1});
			}
		}catch(err){
			try{
			prActivity(1);
			}catch(e){}
			console.log('PRLOG: Activity 1')
		};



		prCurrentVerion = 'Exterior';
		if(prAdControlYear=='2016' && prAdControlModelName=='GX') {
			prSetBullets(6);
		}
		prAnimateGalleryImageIntoView(1, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prToggleInterior').addEventListener('click', function(){
		try{
			if(typeof(prTrk)!=undefined) {
				prTrk({id: 2});
			}
		}catch(err){
			try{
			prActivity(2);
			}catch(e){}
			console.log('PRLOG: Activity 2')
		};
			
		prCurrentVerion = 'Interior';
		if(prAdControlYear=='2016' && prAdControlModelName=='GX') {
			prSetBullets(5);
		}
		prAnimateGalleryImageIntoView(1, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet1').addEventListener('click', function(){
		prBulletActivity(1);
		prAnimateGalleryImageIntoView(1, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet2').addEventListener('click', function(){
		prBulletActivity(2);
		prAnimateGalleryImageIntoView(2, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet3').addEventListener('click', function(){
		prBulletActivity(3);
		prAnimateGalleryImageIntoView(3, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet4').addEventListener('click', function(){
		prBulletActivity(4);
		prAnimateGalleryImageIntoView(4, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet5').addEventListener('click', function(){
		prBulletActivity(5);
		prAnimateGalleryImageIntoView(5, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet1').addEventListener('mouseover',function(){
		prUpdateHoverState(1,'over');
	});
	
	document.getElementById('prBullet1').addEventListener('mouseout',function(){
		prUpdateHoverState(1, 'out');
	});
	
	document.getElementById('prBullet2').addEventListener('mouseover',function(){
		prUpdateHoverState(2,'over');
	});
	
	document.getElementById('prBullet2').addEventListener('mouseout',function(){
		prUpdateHoverState(2, 'out');
	});
	
	document.getElementById('prBullet3').addEventListener('mouseover',function(){
		prUpdateHoverState(3,'over');
	});
	
	document.getElementById('prBullet3').addEventListener('mouseout',function(){
		prUpdateHoverState(3, 'out');
	});
	
	document.getElementById('prBullet4').addEventListener('mouseover',function(){
		prUpdateHoverState(4,'over');
	});
	
	document.getElementById('prBullet4').addEventListener('mouseout',function(){
		prUpdateHoverState(4, 'out');
	});
	
	document.getElementById('prBullet5').addEventListener('mouseover',function(){
		prUpdateHoverState(5,'over');
	});
	
	document.getElementById('prBullet5').addEventListener('mouseout',function(){
		prUpdateHoverState(5, 'out');
	});
	
	document.getElementById('prArrowLeft').addEventListener('click', function(){
		try{
			if(typeof(prTrk)!=undefined){
				prTrk({id: 3});
			}
		}catch(err){
			prActivity(3);
			console.log(err +'PRLOG: Activity 3')
		};
			
		var prNewLeftImage = prCurrentImage - 1; 
		if(prNewLeftImage == 0){
			if(prCurrentVerion == 'Interior') {
				prNewLeftImage = 5;
			} else {
				prNewLeftImage = prImages;
			}
		}
		prAnimateGalleryImageIntoView(prNewLeftImage, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prArrowRight').addEventListener('click', function(){
		try{
			if(typeof(prTrk)!=undefined){
				prTrk({id: 4});
			}
		}catch(err){
			prActivity(4);
			console.log(err +'PRLOG: Activity 4')
		};
		var prNewRightImage = prCurrentImage + 1; 
		if(prCurrentVerion == 'Interior' && prNewRightImage == 6){
			prNewRightImage = 1;
		} else if(prNewRightImage==prImages + 1) {
			prNewRightImage = 1;
		}
		prAnimateGalleryImageIntoView(prNewRightImage, prCurrentVerion,'UserInit');
	});
}

function prUpdateHoverState(bullet, state){
	if(bullet != prCurrentImage && state == 'over'){
		document.getElementById('prBullet' + bullet).style.backgroundImage = 'url(' + prFilePath + 'bullet_hover.png)';
	}
	if(bullet != prCurrentImage && state == 'out'){
		document.getElementById('prBullet' + bullet).style.backgroundImage = 'url(' + prFilePath + 'bullet_InActive.png)';
	}
}

function prBulletActivity(image){
	if(prCurrentVerion == 'Exterior'){
		if(image==6) {
			try{prActivity(15)}catch(err){console.log('PRLOG: Activity ' + (15))};
		} else {
			try{prActivity(4 + parseFloat(image))}catch(err){console.log('PRLOG: Activity ' + (4 + parseFloat(image)))};
		}
	}else if(prCurrentVerion == 'Interior'){
		try{prActivity(9 + parseFloat(image))}catch(err){console.log('PRLOG: Activity ' + (9 + parseFloat(image)))};
	}
}

function prAnimateGalleryImageIntoView(image, version, initiated){
	if(prCurrentVerion == 'Exterior') {
		prSetLegal(prDisclaimer[prVersionNumber]['' + version +''][prExtArray[image - 1] - 1]);
		//prSetLegal(prDisclaimer[prVersionNumber]['' + version +''][(image - 1)]);
	} else {
		prSetLegal(prDisclaimer[prVersionNumber]['' + version +''][(image - 1)]);
	}
	
	if(initiated == 'UserInit'){
		window.clearTimeout(prNonUserInitGallerySliderTimer);
	}
	
	if(prEnableGallery){
		prEnableGallery = false;
		prCurrentImage = image;
		for(i = 1; i < prImages + 1; i++){
			if(version == 'Exterior'){
				if(i != image){
					$('#prExteriorImage' + i ).animate(prAnimateDirection1,500);
				}
				$('#prInteriorImage' + i ).animate(prAnimateDirection1,500);
			}else if(version == 'Interior'){
				if(i != image){
					$('#prInteriorImage' + i ).animate(prAnimateDirection1,500);
				}
				$('#prExteriorImage' + i ).animate(prAnimateDirection1,500);
			}
			document.getElementById('prBullet' + i).style.backgroundImage = 'url(' + prFilePath + 'bullet_InActive.png)';
		}
		$('#pr' + version + 'Image' + image).css(prAnimateDirection2);
		$('#pr' + version + 'Image' + image).animate(prAnimateDirection3,500,function(){
			prEnableGallery = true;
		});
		
		document.getElementById('prBullet' + image).style.backgroundImage = 'url(' + prFilePath + 'bullet_Active.png)';
		document.getElementById('prToggleExterior').style.fontFamily = 'Nobel Book';
		document.getElementById('prToggleInterior').style.fontFamily = 'Nobel Book';
		document.getElementById('prToggle' + version).style.fontFamily = 'Nobel Bold';
		
		console.log('---------------' + version);
		
		if(version == 'Exterior'){
			document.getElementById('prToggleExterior').style.fontSize = '12.5px';
			document.getElementById('prToggleExterior').style.letterSpacing = '1px';
			
			document.getElementById('prToggleInterior').style.fontSize = '11.5px';
			document.getElementById('prToggleInterior').style.letterSpacing = '2px';
		}
		
		if(version == 'Interior'){
			document.getElementById('prToggleInterior').style.fontSize = '12.5px';
			document.getElementById('prToggleInterior').style.letterSpacing = '1px';
			
			document.getElementById('prToggleExterior').style.fontSize = '11.5px';
			document.getElementById('prToggleExterior').style.letterSpacing = '2px';
		}
	}
	
}

function prGetAdControl(){
	var head = document.getElementsByTagName("head")[0];
	var JSONscript = document.createElement("Script");
	if(prTesting){
		var prQueryString = '?ifid=' + prTestingAdControlId + '&imp=6F0E0500-F3FA-1F8D-0311-2C0000020101&campid=70336&pub=prtst&cid=2030492&pid=2524156&dispfmt=&creativesz=' + prOverrideAdSize + '&countryid=us&regionid=US:pennsylvania&metroid=504&dayofweek=5&date=&cust01=&cust02=&cust03=&cust04=&cust05=&cust06=&cust07=&cust08=&cust09=&cust10=&cust11=&cust12=&cust13=&cust14=&cust15=&custgeo01=1356&custgeo02=35859&custgeo03=35982&sex_pref=&edu_level=&gender=&year_of_birth=&under_18=&age_range=&marital_stat=&num_children=&h_income=&neighborhood=&pub_category=&ven_category=&browser=&postal=19120&conn_spd=broadband&hour=13&t_zone=&weekend=&siteid=';
	}else{
		var prQueryString = '?ifid=' + prAcid + '&imp=' + prImpressionId + '&campid=' + prCampaignId + '&pub=' + prPubId + '&cid=' + prAdId + '&pid=' + prPlacementId + '&dispfmt=' + prDisplayFormat + '&creativesz=' + prOverrideAdSize + '&countryid=' + prGeoCountry + '&regionid=' + prGeoRegion + '&metroid=' + prGeoMetro + '&dayofweek=' + prDayOfWeek + '&date=' + prDate + '&cust01=' + prCust1 + '&cust02=' + prCust2 + '&cust03=' + prCust3 + '&cust04=' + prCust4 + '&cust05=' + prCust5 + '&cust06=' + prCust6 + '&cust07=' + prCust7 + '&cust08=' + prCust8 + '&cust09=' + prCust9 + '&cust10=' + prCust10 + '&cust11=' + prCust11 + '&cust12=' + prCust12 + '&cust13=' + prCust13 + '&cust14=' + prCust14 + '&cust15=' + prCust15 + '&custgeo01=' + prCustGeo1 + '&custgeo02=' + prCustGeo2 + '&custgeo03=' + prCustGeo3 + '&sex_pref=' + prSexPref + '&edu_level=' + prEducationLevel + '&gender=' + prGender + '&year_of_birth=' + prYearOfBirth + '&under_18=' + prUnder18 + '&age_range=' + prAgeRange + '&marital_stat=' + prMaritalStatus + '&num_children=' + prNumChildren + '&h_income=' + prHouseholdIncome + '&neighborhood=' + prNeighborhood + '&pub_category=' + prPubCategory + '&ven_category=' + prVenCategory + '&browser=' + prBrowser + '&postal=' + prGeoPostal + '&conn_spd=' + prConnSpeed + '&hour=' + prHourOfDay + '&t_zone=' + prTimeZone + '&weekend=' + prWeekend + '&siteid=' + prSiteId;
	}
	prUrl = prSSL('http://clients.pointroll.com/clients/services/dco/ac.ashx') + prQueryString;
	JSONscript.src = prUrl;
	JSONscript.id = "pointroll-adcontrol";
	JSONscript.type = "text/javascript";
	JSONscript.charset = 'utf-8';
	JSONscript.async = false;
	head.appendChild(JSONscript);
}

function acCallback(data){
	prAdControlData = data;
	prAdControlCta = prAdControlData.Lexus_LDA_PhotoGallery.CTA['#cdata-section'];
	prAdControlModelName = prAdControlData.Lexus_LDA_PhotoGallery.Year_Model_GalleryOrder['@Model'].replace('-', ' ');
	prAdControlYear = prAdControlData.Lexus_LDA_PhotoGallery.Year_Model_GalleryOrder['#cdata-section'].split('_')[0];
	prAdControlModel = prAdControlData.Lexus_LDA_PhotoGallery.Year_Model_GalleryOrder['#cdata-section'].split('_')[1];
	prAdControlStartImage = prAdControlData.Lexus_LDA_PhotoGallery.Year_Model_GalleryOrder['#cdata-section'].split('_')[2];
	prOmnitureTracking = prAdControlData.Lexus_LDA_PhotoGallery.Year_Model_GalleryOrder['@omniture'];
	
	
		
	prLogOut(prAdControlData);
	
	
	if(window.location.href.indexOf('file') >= 0){
		prAdControlModelName = 'RC F';
		prAdControlModel = 'RCF';
		prAdControlYear = '2016';
	}
	
	
	prLogOut('-----> prAdControlModelName = ' + prAdControlModelName);
	prLogOut('-----> prAdControlModel = ' + prAdControlModel);
	prLogOut('-----> prAdControlYear = ' + prAdControlYear);
	
	
	
	ptSetDisclaimerObj();
	
	for(i = 0; i < prDisclaimer.length; i++){
		if(prAdControlModel == prDisclaimer[i].name){
			prVersionNumber = i;
		}
	}
	prBuildVersion();
}

function prAddSlide6() {
	prImages = 6;
	// ADD THE 6TH IMAGE
	var prExteriorImage6 = document.createElement('div');
	prExteriorImage6.id = 'prExteriorImage6';
	prExteriorImage6.className = 'prImage';
	document.getElementById('prImages').appendChild(prExteriorImage6);
	
	var prInteriorImage6 = document.createElement('div');
	prInteriorImage6.id = 'prInteriorImage6';
	prInteriorImage6.className = 'prImage';
	document.getElementById('prImages').appendChild(prInteriorImage6);
	
	// ADD THE 6TH BULLET
	var prBullet6 = document.createElement('div');
	prBullet6.id = 'prBullet6';
	prBullet6.style.width = '8px';
	prBullet6.style.height = '8px';
	prBullet6.style.backgroundImage = 'url('+ prFilePath +'bullet_InActive.png)';
	prBullet6.style.backgroundSize = 'cover';
	prBullet6.style.cursor = 'pointer';
	document.getElementById('prNavigation').appendChild(prBullet6);
	
	document.getElementById('prBullet6').addEventListener('click', function(){
		prBulletActivity(11);
		prAnimateGalleryImageIntoView(6, prCurrentVerion,'UserInit');
	});
	
	document.getElementById('prBullet6').addEventListener('mouseover',function(){
		prUpdateHoverState(6,'over');
	});
	
	document.getElementById('prBullet6').addEventListener('mouseout',function(){
		prUpdateHoverState(6, 'out');
	});
	
	// REBUILD NAVIGATION FOR RELATIVE SPACING
	var prArrowLeft = document.getElementById('prArrowLeft');
	var prArrowRight = document.getElementById('prArrowRight');

	document.getElementById('prNavigation').appendChild(prArrowRight);
	prArrowLeft.style.position = 'relative';
	prArrowLeft.style.float = 'left';
	prArrowLeft.style.marginRight = '4px';
	prArrowRight.style.position = 'relative';
	prArrowRight.style.left = '0px';
	prArrowRight.style.top = '0px';
	prArrowRight.style.float = 'left';
	prArrowRight.style.marginLeft = '4px';
	
	for(var i=1; i<=6; i++) {
		var prBullet = document.getElementById('prBullet' + i);
		prBullet.style.left = '0px';
		prBullet.style.top = '0px';
		prBullet.style.position = 'relative';
		prBullet.style.marginTop = '3px';
		prBullet.style.float = 'left';
		prBullet.style.marginLeft = '2px';
		prBullet.style.marginRight = '2px';
	}
}

function prSetBullets(n) {
	switch(n) {
		case 5 :
			document.getElementById('prBullet6').style.display = 'none';
			prBulletMargin = '3px';
			break;
		case 6 :
			document.getElementById('prBullet6').style.display = 'block';
			prBulletMargin = '2px';
			break;
	}
	
	for(var i=1; i<=n; i++) {
		document.getElementById('prBullet' + i).style.marginLeft = prBulletMargin;
		document.getElementById('prBullet' + i).style.marginRight = prBulletMargin;
	}
}

function prBuildVersion(){
	try {
		document.getElementById('prf' + _pr_pid).style.setProperty ("top", "0px", "important");
	} catch(err){}
	
	document.getElementById('prNavigation').style.top = '30px';
	
	
	if(prAdControlYear=='2016') {		
		if(prAdControlModelName=='ES') {
			prDisclaimer[1].Interior[2] = '*<u>Important info</u><br>Options shown';
			
			var prLegalRoll = document.createElement('div');
			prLegalRoll.id = 'prLegalRoll';
			prLegalRoll.innerHTML = 'IMPORTANT INFO';
			
			var prLegalRollClose = document.createElement('div');
			prLegalRollClose.id = 'prLegalRollClose';
			prLegalRollClose.innerHTML = 'X';
			prLegalRollClose.addEventListener('click', function(e) {
				document.getElementById('prLegalRoll').style.display = 'none';
			});
			prLegalRollClose.style.cursor = 'pointer';
			
			var prLegalRollLine = document.createElement('div');
			prLegalRollLine.id = 'prLegalRollLine';
			
			var prLegalRollCopy = document.createElement('div');
			prLegalRollCopy.id = 'prLegalRollCopy';
			prLegalRollCopy.innerHTML = 'Mark Levinson&reg; is a registered trademark of Harman International Industries, Inc.';
			
			prLegalRoll.appendChild(prLegalRollClose);
			prLegalRoll.appendChild(prLegalRollLine);
			prLegalRoll.appendChild(prLegalRollCopy);
			document.getElementById('prContents').appendChild(document.getElementById('prLegal'));
			document.getElementById('prContents').appendChild(prLegalRoll);
		} else if(prAdControlModelName=='GX') {
			prDisclaimer[5].Exterior[2] = '';
			prDisclaimer[5].Exterior[5] = 'Options shown';
			console.log(prDisclaimer[1].Exterior);
			prAddSlide6();
			
			prDisclaimer[5].Exterior[2] = '*Important info<br>Options shown';
			
			var prLegalRoll = document.createElement('div');
			prLegalRoll.id = 'prLegalRoll';
			prLegalRoll.innerHTML = '*IMPORTANT INFO';
			
			var prLegalRollClose = document.createElement('div');
			prLegalRollClose.id = 'prLegalRollClose';
			prLegalRollClose.innerHTML = 'X';
			prLegalRollClose.addEventListener('click', function(e) {
				document.getElementById('prLegalRoll').style.display = 'none';
			});
			prLegalRollClose.style.cursor = 'pointer';
			
			var prLegalRollLine = document.createElement('div');
			prLegalRollLine.id = 'prLegalRollLine';
			
			var prLegalRollCopy = document.createElement('div');
			prLegalRollCopy.id = 'prLegalRollCopy';
			prLegalRollCopy.innerHTML = 'Please consult your Lexus dealer or <i>Ownerâ€™s Manual</i>  for towing and load specifications.<br><br></span>Before towing, confirm your vehicle and trailer are compatible, hooked up and loaded properly and that you have any necessary additional equipment. Do not exceed any Weight Ratings and follow all instructions in your <i>Ownerâ€™s Manual</i>. The maximum you can tow depends on the total weight of any cargo, occupants and available equipment. Calculated with the new SAE J2807 method.';
			
			if(prAdsize=='728x90') {
				prLegalRollLine.style.marginTop = '-4px';
				prLegalRollCopy.style.lineHeight = '10px';
				prLegalRollCopy.style.marginTop = '-4px';
			}
			
			prLegalRoll.appendChild(prLegalRollClose);
			prLegalRoll.appendChild(prLegalRollLine);
			prLegalRoll.appendChild(prLegalRollCopy);
			document.getElementById('prContents').appendChild(document.getElementById('prLegal'));
			document.getElementById('prContents').appendChild(prLegalRoll);
		}
		else if(prAdControlModelName=='LSh') {
			for (var i=0; i< prDisclaimer[9].Exterior.length; i++){
				prDisclaimer[9].Exterior[i] = '';
			}
			
			if(prAdsize=='728x90' || prAdsize=='300x250') {
				prDisclaimer[9].Interior[0] = '';
				prDisclaimer[9].Interior[1] = '';
			}
			else if(prAdsize=='160x600'){
				prDisclaimer[9].Interior[0] = '';
			}
		}
		
	}
	
	if(prAdControlYear == '2016'){
		document.getElementById('prYearAndModel').innerHTML = '<span id ="prYear"></span><br/><div id ="prModel">' + prAdControlModelName + '</div>';
		
		var modelYear = document.getElementById('prYear');
		
		modelYear.style.backgroundSize = 'contain';
		modelYear.style.backgroundRepeat = 'no-repeat';
		
		if(prOverrideAdSize == '160x600'){
			modelYear.style.backgroundImage = 'url(' + prFilePath + 'Lexus_Visualizer_160x600_the2016.png)';
			modelYear.style.width = '57px';
			modelYear.style.height = '14px';
			modelYear.style.left = '52px';
			document.getElementById('prYearAndModel').style.top = '-70px';
			
		}else if(prOverrideAdSize == '300x250'){
			modelYear.style.backgroundImage = 'url(' + prFilePath + 'Lexus_Visualizer_300x250_the2016.png)';
			modelYear.style.width = '57px';
			modelYear.style.height = '14px';
			modelYear.style.left = '5px';
		}else{
			modelYear.style.backgroundImage = 'url(' + prFilePath + 'Lexus_Visualizer_728x90_the2016.png)';
			modelYear.style.width = '57px';
			modelYear.style.height = '14px';
			modelYear.style.left =  '5px';
		}
		
			
		switch(prAdControlModelName){
			case 'GS F':
			case 'RCF':
			case 'RC F'://asdf
				if((prOverrideAdSize == '300x250' || prOverrideAdSize == '728x90') ){
					document.getElementById('prModel').style.fontSize = '45px';
					document.getElementById('prModel').style.letterSpacing = '-1px';
					document.getElementById('prModel').style.lineHeight = '45px';
				}
				if((prOverrideAdSize == '728x90') ){
					document.getElementById('prModel').style.width = '107px';
				} else if((prOverrideAdSize == '300x250') ){
					document.getElementById('prModel').style.width = '105px';
				}
				var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
				console.log('Is this a mac? : ' + mac);
				if (!mac) {
					if((prOverrideAdSize == '728x90') ){
						document.getElementById('prModel').style.top = '33px';
					} else if((prOverrideAdSize == '300x250') ){
						document.getElementById('prModel').style.top = '25px';
					} else if((prOverrideAdSize == '160x600') ){
						document.getElementById('prModel').style.top = '16px';
					}
				} else{
					if((prOverrideAdSize == '728x90') ){
						document.getElementById('prModel').style.top = '36px';
					} else if((prOverrideAdSize == '300x250') ){
						document.getElementById('prModel').style.top = '30px';
					} else if((prOverrideAdSize == '160x600') ){
						document.getElementById('prModel').style.top = '19px';
					}
				}//soro
			break;
			case 'RC':
				var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
				console.log('Is this a mac? : ' + mac);
				if (!mac) {
					if((prOverrideAdSize == '728x90') ){
						document.getElementById('prModel').style.top = '30px';
					} else if((prOverrideAdSize == '300x250') ){
						document.getElementById('prModel').style.top = '22px';
					} else if((prOverrideAdSize == '160x600') ){
						document.getElementById('prModel').style.top = '15px';
					}
				}//soro
			break;
			case 'GS':
				var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
				console.log('Is this a mac? : ' + mac);
				if (!mac) {
					if((prOverrideAdSize == '728x90') ){
						document.getElementById('prModel').style.top = '30px';
					} else if((prOverrideAdSize == '300x250') ){
						document.getElementById('prModel').style.top = '22px';
					} else if((prOverrideAdSize == '160x600') ){
						document.getElementById('prModel').style.top = '15px';
					}
				} else{
					if((prOverrideAdSize == '300x250') ){
						document.getElementById('prModel').style.top = '27px';
					} else if((prOverrideAdSize == '160x600') ){
						document.getElementById('prModel').style.top = '19px';
					}
				}//soro
			break;
			case 'GSh':
				if(prOverrideAdSize == '300x250') {
					document.getElementById('prCtaBg').style.opacity  = '0';
				}
			case 'LSh':
			case 'NXh':
			case 'RXh':
			case 'CTh':
			case 'CT h':
			case 'GS h':
			case 'LS h':
			case 'NX h':
			case 'RX h':
				if((prOverrideAdSize == '300x250' || prOverrideAdSize == '728x90') ){
					document.getElementById('prModel').style.fontSize = '45px';
					document.getElementById('prModel').style.lineHeight = '45px';
				}
			break;
		}
		
		
		if(prAdControlModelName=='RX') {
			//document.getElementById('prModel').style.lineHeight = 'normal';
			var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
			window.setTimeout(function() {
				switch(prOverrideAdSize) {
					case '160x600' :
						document.getElementById('prModel').style.top = '12px';
						document.getElementById('prModel').style.lineHeight = '57px';
						//document.getElementById('prModel').style.webKitTransform ='translateY(6px)';
						if(mac) document.getElementById('prModel').style.top = '18px';	
	
						break;
					case '300x250' :
						document.getElementById('prModel').style.top = '20px';
						document.getElementById('prModel').style.lineHeight = '54px';
						//document.getElementById('prModel').style.webKitTransform ='translateY(6px)';
						if(mac) document.getElementById('prModel').style.top = '26px';	
						break;
					case '728x90' :
						//document.getElementById('prModel').style.marginTop = '-4px';
						document.getElementById('prModel').style.top = '26px';
						document.getElementById('prModel').style.lineHeight = '57px';
						//document.getElementById('prModel').style.webKitTransform ='translateY(6px)';
						if(mac) document.getElementById('prModel').style.top = '32px';	
					break;
				}
			}, 10);
		}
		
		
		//increase font size for all model/sizes
		if((prOverrideAdSize == '160x600' || prOverrideAdSize == '728x90') ){
			//document.getElementById('prModel').style.fontSize = '55px';
			document.getElementById('prModel').style.fontSize = '57px';
		}else{
			//document.getElementById('prModel').style.fontSize = '52px';
			document.getElementById('prModel').style.fontSize = '54px';
		}
		
		
		
		window.setTimeout(function() {
			if((prOverrideAdSize == '300x250' || prOverrideAdSize == '728x90') ){
				document.getElementById('prYear').style.left = (100 - 57)/2 + 'px';
				//document.getElementById('prModel').style.left = (100 - document.getElementById('prModel').clientWidth)/2 + 'px';
			}else{
				document.getElementById('prModel').style.left = (160 - document.getElementById('prModel').clientWidth)/2 + 'px';
			}
		}, 10);
		
		
		
	}else{
		document.getElementById('prYearAndModel').innerHTML = '<span id ="prYear">THE ' + prAdControlYear + '</span><br/><span id ="prModel">' + prAdControlModelName + '</span>';
	}
	
	document.getElementById('prCtaCopy').innerHTML = prAdControlCta;
	document.getElementById('prToggleExterior').style.fontFamily = 'Nobel Bold';
	document.getElementById('prToggleExterior').style.fontSize = '12.5px';
	document.getElementById('prToggleExterior').style.letterSpacing = '1px';
	
	document.getElementById('prBullet1').style.backgroundImage = 'url(' + prFilePath + 'bullet_Active.png)';
	//document.getElementById('prLegal').innerHTML = prDisclaimer[prVersionNumber]['' + prCurrentVerion +''][(0)];
	
	prAdControlStartImage = parseFloat(prAdControlStartImage);
	
	console.log('prAdControlStartImage: ' + prAdControlStartImage);
	
	if(prAdControlStartImage>5) {
		prAdControlStartImage = 5;
	}
	prExtArray.push(parseFloat(prAdControlStartImage));
	
	for(i = 1; i < prImages+1; i++){
		if(i != prAdControlStartImage){
			prExtArray.push(i);
			console.log(prExtArray);
		}
	}
	
	shuffle(prExtArray);
	console.log(prExtArray);
	
	
	function shuffle(array) {
		console.log('in here');
 		var currentIndex = array.length, temporaryValue, randomIndex;
	
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
	
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }
	
	  return array;
	}
	
	for(j = 0; j < prExtArray.length; j++){
		if(prExtArray[j] === prAdControlStartImage){
			prExtArray.splice(j, 1);
		}
	}
	console.log(prExtArray);
	
	prExtArray.unshift(prAdControlStartImage);
	
	console.log(prExtArray);
		
	if(prCurrentVerion == 'Exterior') {
		prSetLegal(prDisclaimer[prVersionNumber]['' + prCurrentVerion +''][prExtArray[prAdControlStartImage-1]-1]);

	} else {
		prSetLegal(prDisclaimer[prVersionNumber]['' + prCurrentVerion +''][0]);
	}
	
	for(i = 0; i < prImages; i++){
		var prImageNum = i + 1;
		switch(prAdControlModel) {
			case 'GX' :
			case 'ESh' :
				var prOptionalMY = (prAdControlYear=='2016') ? '2016_' : '';
			break;
			
			default :
				var prOptionalMY = (prAdControlYear=='2016') ? 'MY16_' : '';
			break;
		}
		
		
			
		document.getElementById('prExteriorImage' + prImageNum).style.backgroundImage = 'url(' + prFilePath + prOverrideAdSize + '_' + prOptionalMY + prAdControlModel + '_Ext' + prExtArray[i] + '.jpg)';
		
		if(i<5) {
			// ALL INTERIORS HAVE ONLY 5 IMAGES
			document.getElementById('prInteriorImage' + prImageNum).style.backgroundImage = 'url(' + prFilePath + prOverrideAdSize + '_' + prOptionalMY + prAdControlModel + '_Int' + prImageNum + '.jpg)';
			
			
		switch(prAdControlModel){
			case 'NX':
			if(prOverrideAdSize == '728x90' && prAdControlYear == '2016'){if(document.getElementById('prExteriorImage' + prImageNum).style.backgroundImage.indexOf('Ext4') >= 0){document.getElementById('prExteriorImage' + prImageNum).style.left = '-10px';}}
			if(prOverrideAdSize == '300x250' && prAdControlYear == '2016'){if(document.getElementById('prExteriorImage' + prImageNum).style.backgroundImage.indexOf('Ext4') >= 0){document.getElementById('prExteriorImage' + prImageNum).style.top = '-9px';}}
			break;	
		}
			
		}
	}
	
	if(prOverrideAdSize == '300x250' || prOverrideAdSize == '160x600'){
		prAnimateDirection1 = {left: '-100%'};
		prAnimateDirection2 = {left: '100%'};
		prAnimateDirection3 = {left: '0%'};
	}else if(prOverrideAdSize == '728x90'){
		prAnimateDirection1 = {top: '-100%'};
		prAnimateDirection2 = {top: '100%'};
		prAnimateDirection3 = {top: '0%'};
	}
	$('#prExteriorImage' + (prAdControlStartImage)).css(prAnimateDirection3);
	
	prStartAnimation();
}

function prStartAnimation(){
	if(prOverrideAdSize == '160x600'){
		window.setTimeout(function(){document.getElementById('prCta').style.left = ((document.getElementById('prContents').offsetWidth - document.getElementById('prCta').offsetWidth) / 2) + 'px';},100);
		$('#prHeader').delay(300).animate({height:'165px'},500);
		$('#prYearAndModel').delay(1250).animate({top:'40px'},400);
		$('#prToggleExIn').delay(1250).animate({top:'115px'},400);
		$('#prLogo').delay(1250).animate({top:'0px'},400);
		$('#prCta').delay(1250).animate({bottom:'25px'},400);
		$('#prLegal').delay(1250).animate({bottom:'52px'},400);
		$('#prImageContainer').delay(750).animate({opacity:'1'},750);
	}
	if(prOverrideAdSize == '300x250'){
		$('#prHeader').delay(300).animate({height:'75px'},500);
		$('#prYearAndModel').delay(1000).animate({left:'0px'},750);
		$('#prToggleExIn').delay(1000).animate({left:'130px'},750);
		$('#prLogo').delay(1000).animate({left:'0px'},750);
		$('#prCta').delay(1000).animate({right:'10px'},750);
		$('#prLegal').delay(1000).animate({right:'10px'},750);
		$('#prImageContainer').delay(1000).animate({opacity:'1'},750);
	}
	if(prOverrideAdSize == '728x90'){
		$('#prHeader').delay(300).animate({width:'261px'},300);
		$('#prYearAndModel').delay(1000).animate({top:'0px'},750);
		$('#prToggleExIn').delay(1000).animate({top:'26px'},750);
		$('#prLogo').delay(1000).animate({top:'5px'},750);
		$('#prCta').delay(1000).animate({bottom:'10px'},750);
		$('#prLegal').delay(1000).animate({bottom:'7px'},750);
		$('#prImageContainer').delay(600).animate({opacity:'1'},750);
	}
	
	window.setTimeout(prNonUserInitGallerySlider,750);
}

function prNonUserInitGallerySlider(){
	prNonUserInitGallerySliderTimer = window.setTimeout(function(){
		prNonUserInitAnimation();
	},prNonUserInitDelay);
}

function prNonUserInitAnimation(){
	prNonUserInitCounter++;
	if(prNonUserInitCounter == 1){
		prCurrentVerion = 'Exterior';
		prAnimateGalleryImageIntoView(prExtArray[1], prCurrentVerion,'NonUserInit');
		prNonUserInitGallerySlider();
	}else if (prNonUserInitCounter == 2){
		prCurrentVerion = 'Exterior';
		prAnimateGalleryImageIntoView(prExtArray[2], prCurrentVerion,'NonUserInit');
		prNonUserInitGallerySlider();
	}else if (prNonUserInitCounter == 3){
		prCurrentVerion = 'Interior';
		if(prAdControlYear=='2016' && prAdControlModelName=='GX') {
			prSetBullets(5);
		}
		prAnimateGalleryImageIntoView(1, prCurrentVerion,'NonUserInit');
		prNonUserInitGallerySlider();
	}else if (prNonUserInitCounter == 4){
		prCurrentVerion = 'Interior';
		prAnimateGalleryImageIntoView(2, prCurrentVerion,'NonUserInit');
		prNonUserInitGallerySlider();
	}else if (prNonUserInitCounter == 5){
		prCurrentVerion = 'Exterior';
		if(prAdControlYear=='2016' && prAdControlModelName=='GX') {
			prSetBullets(6);
		}
		prAnimateGalleryImageIntoView(prExtArray[3], prCurrentVerion,'NonUserInit');
		prNonUserInitGallerySlider();
	}
}

function prSetLegal(c) {
	document.getElementById('prLegal').innerHTML = c;
	
	if(c.indexOf('Important')!=-1) {
		var prLegalHotspot = document.createElement('div');
		prLegalHotspot.id = 'prLegalHotspot';
		prLegalHotspot.style.width = '50px'
		prLegalHotspot.style.height = '8px';
		prLegalHotspot.style.position = 'absolute';
		prLegalHotspot.style.left = '0px';
		prLegalHotspot.style.top = '0px';
		prLegalHotspot.style.cursor = 'pointer';
		prLegalHotspot.addEventListener('mouseover', function(e) {
			document.getElementById('prLegalRoll').style.display = 'block';
		});
		document.getElementById('prLegal').appendChild(prLegalHotspot);
	}
	
	var prLegal = document.getElementById('prLegal');
	
	
	if(prSafariBrowser){
		console.log('AddingFix');
		prLegal.className = 'prSafariDisclaimerFix';
	}//soro
	
	/*if(c.indexOf('F Sport') >= 0) && (prOverrideAdSize == '160x600')){
		prLegal.style.right = '0px';
		prLegal.style.width = '100%';
		prLegal.style.textAlign = 'center';
		
	}else if(c.indexOf('F Sport') < 0 && (prOverrideAdSize == '160x600')){
		prLegal.style.right = '28px';
		prLegal.style.width = 'auto';
		prLegal.style.textAlign = 'right';
	}*/
}

if(prTesting){
	$(document).ready(function(){
		prInitPanel();
	});
}

function prSSL(url){
  var _pr_url_types = ['cdds', 'cgizmo', 'smq', 'smqd', 'speed', 'spd', 'stripe'];

  if(document.location.protocol == 'https:'){
    for(var i = 0; i < _pr_url_types.length; i++){
      if(url.search(_pr_url_types[i]) != -1){
        url = url.replace('http://' + _pr_url_types[i], 'https://' + _pr_url_types[i] + '-s');
      }
    }

    if(url.search('clients.pointroll') != -1){
      url = url.replace('http://', 'https://');
    }

    if(url.search('pointroll') == -1){
      url = url.replace('http://', 'https://');
    }

    if(url.search('css') != -1 && url.search('pointroll') != -1){
      url = url.replace('.css', '-ssl.css');
    }
  }

  return url;
}

var prGetEncodedUrl = function(url){
		/*if(typeof(prPubClickOverride) != 'number'){
			prPubClickOverride = 1
		}*/
	
		switch(prPubClickOverride){
			
			case 0: // completely decode sent url, break it apart, and then iteratively encode each step
				var _urls = url.split('http');
				var _url = '';
				_urls.splice(0, 1);
				for(var i = 0; i < _urls.length; i++){
					_urls[i] = 'http' + _urls[i];
					for(var j = 0; j < 10; j++){
						_urls[i] = decodeURIComponent(_urls[i]);
					}
					for(var k = 0; k < i + 1; k++){
						_urls[i] = encodeURIComponent(_urls[i]);
					}
					_url += _urls[i];
				}
				return _url;
			break;
	
			case 1: // completely decode sent url and then encode the entire url once
				var _url = url;
				for(var i = 0; i < 10; i++){
					_url = decodeURIComponent(_url);
				}
				return encodeURIComponent(_url);
			break;
	
			default:
				//console.error('Pointrol Trk Error:', 'Incorrect or missing encoding level');
				return url;
			break;
			
		}
	}