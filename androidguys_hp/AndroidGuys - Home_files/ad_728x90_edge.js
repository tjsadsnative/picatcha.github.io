/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'White',
                            type: 'rect',
                            rect: ['0px', '0px', '726px', '0px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(102, 102, 102)","solid"]
                        },
                        {
                            id: 'img-bg-grey',
                            type: 'image',
                            rect: ['0px', '1px', '728px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-bg-grey.jpg",'0px','0px']
                        },
                        {
                            id: 'img-bg-blue',
                            type: 'image',
                            rect: ['0px', '166px', '585px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-bg-blue.jpg",'0px','0px']
                        },
                        {
                            id: 'img-bg-teal',
                            type: 'image',
                            rect: ['0px', '0px', '585px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-bg-teal.jpg",'0px','0px']
                        },
                        {
                            id: 'SnowAnimated',
                            symbolName: 'SnowAnimated',
                            type: 'rect',
                            rect: ['-10px', '1px', '450', '125', 'auto', 'auto'],
                            opacity: '0.5'
                        },
                        {
                            id: 'txt-samsung',
                            type: 'image',
                            rect: ['194px', '17px', '87px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-samsung.png",'0px','0px']
                        },
                        {
                            id: 'txt-GS6',
                            type: 'image',
                            rect: ['214px', '35px', '226px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-GS6.png",'0px','0px']
                        },
                        {
                            id: 'img-leaf-orange',
                            type: 'image',
                            rect: ['-89px', '229px', '137px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-leaf-orange.png",'0px','0px'],
                            transform: [[],['14'],[],['0.5','0.5']]
                        },
                        {
                            id: 'img-leaf-blue',
                            type: 'image',
                            rect: ['82px', '226px', '58px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-leaf-blue.png",'0px','0px'],
                            transform: [[],['38'],[],['0.7','0.7']]
                        },
                        {
                            id: 'img-phone-GS6-sm',
                            type: 'image',
                            rect: ['264px', '99px', '86px', '81px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"img-phone-GS6-sm.png",'0px','0px']
                        },
                        {
                            id: 'txt-final-samsung',
                            type: 'image',
                            rect: ['-197px', '-135px', '71px', '11px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-final-samsung.png",'0px','0px']
                        },
                        {
                            id: 'txt-final-GS6',
                            type: 'image',
                            rect: ['-200px', '-121px', '131px', '25px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-final-GS6.png",'0px','0px']
                        },
                        {
                            id: 'img-final-swirls',
                            type: 'image',
                            rect: ['462px', '16px', '151px', '53px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-final-swirls.png",'0px','0px']
                        },
                        {
                            id: 'txt-final-0down',
                            type: 'image',
                            rect: ['-31px', '-133px', '139px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-final-0down.png",'0px','0px']
                        },
                        {
                            id: 'txt-final-with',
                            type: 'image',
                            rect: ['118px', '-118px', '34px', '13px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-final-with.png",'0px','0px']
                        },
                        {
                            id: 'txt-final-attnext',
                            type: 'image',
                            rect: ['-26px', '-97px', '161px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-final-attnext.png",'0px','0px']
                        },
                        {
                            id: 'img-phone-GS6',
                            type: 'image',
                            rect: ['201px', '-123px', '214px', '449px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"img-phone-GS6.png",'0px','0px'],
                            transform: [[],[],[],['0.35','0.35']]
                        },
                        {
                            id: 'img-stocking-hat',
                            type: 'image',
                            rect: ['210px', '-112px', '156px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-stocking-hat.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'img-badge',
                            type: 'image',
                            rect: ['778px', '174px', '71px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img-badge.png",'0px','0px']
                        },
                        {
                            id: 'txt-0down',
                            type: 'image',
                            rect: ['38px', '187px', '210px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-0down.png",'0px','0px']
                        },
                        {
                            id: 'txt-with',
                            type: 'image',
                            rect: ['256px', '204px', '43px', '17px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-with.png",'0px','0px']
                        },
                        {
                            id: 'txt-attnext',
                            type: 'image',
                            rect: ['305px', '196px', '242px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-attnext.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '728px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.749)"],
                            stroke: [1,"rgb(102, 102, 102)","none"]
                        },
                        {
                            id: 'OrangeBG',
                            type: 'rect',
                            rect: ['0px', '0px', '150px', '90px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(239,111,0,1.00)"],
                            stroke: [0,"rgb(102, 102, 102)","none"]
                        },
                        {
                            id: 'globe_intro',
                            type: 'image',
                            rect: ['340px', '30px', '24px', '24px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"att_globe_wht.svg",'0px','0px']
                        },
                        {
                            id: 'CTA_ShopNow',
                            symbolName: 'CTA_ShopNow',
                            type: 'rect',
                            rect: ['625px', '6px', '100', '25', 'auto', 'auto']
                        },
                        {
                            id: 'Border',
                            type: 'rect',
                            rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(102,102,102,1.00)","solid"]
                        },
                        {
                            id: 'legalBG',
                            type: 'rect',
                            rect: ['83px', '6px', '503px', '78px', 'auto', 'auto'],
                            clip: 'rect(0px 493.69140625px 80px 491.64453125px)',
                            borderRadius: ["10px", "10px", "10px", "10px 10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(102, 102, 102)","solid"]
                        },
                        {
                            id: 'legal_render',
                            type: 'image',
                            rect: ['115px', '7px', '444px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"legal_render.jpg",'0px','0px']
                        },
                        {
                            id: 'TXT_Legal',
                            type: 'image',
                            rect: ['630px', '34px', '91px', '16px', 'auto', 'auto'],
                            clip: 'rect(0px 91.0185546875px 16px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"TXT_Legal.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            sizeRange: ['728px','728px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 12337,
                    autoPlay: true,
                    labels: {
                        "adEnd": 10837,
                        "legalOpen": 11185,
                        "legalClose": 11828
                    },
                    data: [
                        [
                            "eid1061",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${SnowAnimated}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1062",
                            "opacity",
                            3750,
                            0,
                            "easeInOutCubic",
                            "${SnowAnimated}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1063",
                            "opacity",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${SnowAnimated}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1064",
                            "opacity",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${SnowAnimated}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid55",
                            "height",
                            0,
                            1000,
                            "easeOutCubic",
                            "${globe_intro}",
                            '80px',
                            '60px'
                        ],
                        [
                            "eid59",
                            "height",
                            1000,
                            500,
                            "easeOutCubic",
                            "${globe_intro}",
                            '60px',
                            '24px'
                        ],
                        [
                            "eid1060",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-samsung}",
                            [[233.5, 19, 0, 0, 0, 0,0],[212.5, 24, 0, 0, 0, 0,21.59]]
                        ],
                        [
                            "eid1052",
                            "location",
                            3750,
                            0,
                            "easeInOutCubic",
                            "${txt-samsung}",
                            [[223.5, 19, 0, 0, 0, 0,0],[237.5, 265.95, 0, 0, 0, 0,247.35]]
                        ],
                        [
                            "eid924",
                            "scaleX",
                            3750,
                            1000,
                            "easeOutCubic",
                            "${img-leaf-orange}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid965",
                            "scaleX",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-orange}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid714",
                            "opacity",
                            11212,
                            500,
                            "easeOutQuad",
                            "${legalBG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid717",
                            "opacity",
                            11837,
                            500,
                            "easeInOutQuart",
                            "${legalBG}",
                            '1',
                            '0'
                        ],
                        [
                            "eid675",
                            "top",
                            10351,
                            0,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid641",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Border}",
                            '88px',
                            '88px'
                        ],
                        [
                            "eid1043",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-final-GS6}",
                            [[-134.3, -108.5, 0, 0, 0, 0,0],[-134.3, -108.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1030",
                            "location",
                            9330,
                            500,
                            "easeInOutCubic",
                            "${txt-final-GS6}",
                            [[100.5, 129.5, 0, 0, 0, 0,0],[100.5, 39.5, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid937",
                            "scaleY",
                            4089,
                            1022,
                            "easeOutCubic",
                            "${img-leaf-blue}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid970",
                            "scaleY",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-blue}",
                            '1',
                            '1.33'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Border}",
                            'rgba(192,192,192,0.00)',
                            'rgba(192,192,192,0.00)'
                        ],
                        [
                            "eid1007",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${img-badge}",
                            [[813.67, 211.5, 0, 0, 0, 0,0],[813.67, 211.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1033",
                            "location",
                            10000,
                            449,
                            "easeInOutCubic",
                            "${img-badge}",
                            [[623.5, 56.5, 0, 0, 0, 0,0],[517.34, 55.5, 0, 0, 0, 0,106.16]]
                        ],
                        [
                            "eid947",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${img-phone-GS6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid938",
                            "rotateZ",
                            4089,
                            1022,
                            "easeOutCubic",
                            "${img-leaf-blue}",
                            '38deg',
                            '0deg'
                        ],
                        [
                            "eid891",
                            "height",
                            3557,
                            0,
                            "easeOutQuad",
                            "${legal_render}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid1045",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-final-attnext}",
                            [[54.7, -86, 0, 0, 0, 0,0],[54.7, -86, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1026",
                            "location",
                            9851,
                            500,
                            "easeInOutCubic",
                            "${txt-final-attnext}",
                            [[289.5, 152, 0, 0, 0, 0,0],[289.5, 62, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid666",
                            "left",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${OrangeBG}",
                            '0px',
                            '578px'
                        ],
                        [
                            "eid950",
                            "location",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            [[308, 98.5, 0, 0, 0, 0,0],[310.5, 104.58, 0, 0, 0, 0,6.57]]
                        ],
                        [
                            "eid985",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            [[310.5, 104.58, 0, 0, 0, 0,0],[725, 254, 0, 0, 0, 0,440.61]]
                        ],
                        [
                            "eid1002",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            [[725, 254, 0, 0, 0, 0,0],[451, 90.5, 0, 0, 0, 0,319.07]]
                        ],
                        [
                            "eid955",
                            "scaleX",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6-sm}",
                            '1',
                            '1.22'
                        ],
                        [
                            "eid1044",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-final-samsung}",
                            [[-161.3, -129.5, 0, 0, 0, 0,0],[-161.3, -129.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1031",
                            "location",
                            9250,
                            500,
                            "easeInOutCubic",
                            "${txt-final-samsung}",
                            [[73.5, 108.5, 0, 0, 0, 0,0],[73.5, 18.5, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid760",
                            "top",
                            11212,
                            0,
                            "easeInOutQuart",
                            "${legal_render}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid892",
                            "top",
                            11625,
                            0,
                            "easeOutQuad",
                            "${legal_render}",
                            '100px',
                            '21px'
                        ],
                        [
                            "eid898",
                            "top",
                            11964,
                            0,
                            "easeOutQuad",
                            "${legal_render}",
                            '21px',
                            '100px'
                        ],
                        [
                            "eid949",
                            "scaleY",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            '0.4',
                            '0.5'
                        ],
                        [
                            "eid1001",
                            "scaleY",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            '0.5',
                            '0.35'
                        ],
                        [
                            "eid676",
                            "top",
                            10351,
                            0,
                            "easeOutCubic",
                            "${TXT_Legal}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid509",
                            "left",
                            10351,
                            604,
                            "easeOutCubic",
                            "${TXT_Legal}",
                            '732px',
                            '630px'
                        ],
                        [
                            "eid653",
                            "top",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${OrangeBG}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid654",
                            "top",
                            2000,
                            0,
                            "easeInOutCubic",
                            "${OrangeBG}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid992",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-0down}",
                            [[143, 211, 0, 0, 0, 0,0],[143, 211, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid993",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${txt-0down}",
                            [[143, 211, 0, 0, 0, 0,0],[139, 46, 0, 0, 0, 0,165.05]]
                        ],
                        [
                            "eid998",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${txt-0down}",
                            [[139, 46, 0, 0, 0, 0,0],[139, 188, 0, 0, 0, 0,142]]
                        ],
                        [
                            "eid918",
                            "location",
                            0,
                            0,
                            "easeOutBounce",
                            "${img-leaf-blue}",
                            [[110.84, 256.09, 0, 0, 0, 0,0],[110.84, 256.09, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid935",
                            "location",
                            4089,
                            1022,
                            "easeOutCubic",
                            "${img-leaf-blue}",
                            [[318.93, 89.05, 0, 0, 0, 0,0],[345.2, 81.11, 34.34, -19.64, 33.98, -19.43,27.59],[364.47, 63, 0, 0, 0, 0,54.21]]
                        ],
                        [
                            "eid968",
                            "location",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-blue}",
                            [[364.47, 63, 0, 0, 0, 0,0],[374, 143, 0, 0, 0, 0,80.57]]
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Border}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid490",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '305px',
                            '733px'
                        ],
                        [
                            "eid492",
                            "left",
                            10351,
                            604,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '733px',
                            '625px'
                        ],
                        [
                            "eid990",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-attnext}",
                            [[426, 215.5, 0, 0, 0, 0,0],[426, 215.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid995",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${txt-attnext}",
                            [[426, 215.5, 0, 0, 0, 0,0],[422, 50.5, 0, 0, 0, 0,165.05]]
                        ],
                        [
                            "eid996",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${txt-attnext}",
                            [[422, 50.5, 0, 0, 0, 0,0],[422, 192.5, 0, 0, 0, 0,142]]
                        ],
                        [
                            "eid936",
                            "scaleX",
                            4089,
                            1022,
                            "easeOutCubic",
                            "${img-leaf-blue}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid969",
                            "scaleX",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-blue}",
                            '1',
                            '1.33'
                        ],
                        [
                            "eid958",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${img-phone-GS6-sm}",
                            '1',
                            '0'
                        ],
                        [
                            "eid978",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${img-bg-blue}",
                            [[292.5, 211, 0, 0, 0, 0,0],[292.5, 211, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid979",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${img-bg-blue}",
                            [[292.5, 211, 0, 0, 0, 0,0],[292.5, 45, 0, 0, 0, 0,166]]
                        ],
                        [
                            "eid999",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-bg-blue}",
                            [[292.5, 45, 0, 0, 0, 0,0],[292.5, 187, 0, 0, 0, 0,142]]
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Border}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid649",
                            "height",
                            0,
                            0,
                            "easeInOutCubic",
                            "${OrangeBG}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid651",
                            "height",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${OrangeBG}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid652",
                            "height",
                            2000,
                            0,
                            "easeInOutCubic",
                            "${OrangeBG}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid1037",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${img-final-swirls}",
                            [[48.87, 161.21, 0, 0, 0, 0,0],[48.87, 161.21, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1029",
                            "location",
                            9402,
                            500,
                            "easeInOutCubic",
                            "${img-final-swirls}",
                            [[102.5, 146.5, 0, 0, 0, 0,0],[102.5, 56.5, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid956",
                            "scaleY",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6-sm}",
                            '1',
                            '1.22'
                        ],
                        [
                            "eid741",
                            "opacity",
                            11625,
                            87,
                            "easeOutQuad",
                            "${legal_render}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid757",
                            "opacity",
                            11837,
                            127,
                            "easeInOutQuart",
                            "${legal_render}",
                            '1',
                            '0'
                        ],
                        [
                            "eid948",
                            "scaleX",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            '0.4',
                            '0.5'
                        ],
                        [
                            "eid1000",
                            "scaleX",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-phone-GS6}",
                            '0.5',
                            '0.35'
                        ],
                        [
                            "eid647",
                            "height",
                            0,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid56",
                            "width",
                            0,
                            1000,
                            "easeOutCubic",
                            "${globe_intro}",
                            '80px',
                            '60px'
                        ],
                        [
                            "eid60",
                            "width",
                            1000,
                            500,
                            "easeOutCubic",
                            "${globe_intro}",
                            '60px',
                            '24px'
                        ],
                        [
                            "eid646",
                            "width",
                            0,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '728px',
                            '728px'
                        ],
                        [
                            "eid991",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-with}",
                            [[277.5, 212.5, 0, 0, 0, 0,0],[277.5, 212.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid994",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${txt-with}",
                            [[277.5, 212.5, 0, 0, 0, 0,0],[273.5, 47.5, 0, 0, 0, 0,165.05]]
                        ],
                        [
                            "eid997",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${txt-with}",
                            [[273.5, 47.5, 0, 0, 0, 0,0],[273.5, 189.5, 0, 0, 0, 0,142]]
                        ],
                        [
                            "eid137",
                            "opacity",
                            10351,
                            619,
                            "easeOutCubic",
                            "${TXT_Legal}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid693",
                            "opacity",
                            11212,
                            0,
                            "linear",
                            "${TXT_Legal}",
                            '1',
                            '1'
                        ],
                        [
                            "eid694",
                            "opacity",
                            11712,
                            0,
                            "linear",
                            "${TXT_Legal}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1046",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-final-0down}",
                            [[38.7, -118.5, 0, 0, 0, 0,0],[38.7, -118.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1028",
                            "location",
                            9619,
                            500,
                            "easeInOutCubic",
                            "${txt-final-0down}",
                            [[273.5, 119.5, 0, 0, 0, 0,0],[273.5, 29.5, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid915",
                            "location",
                            3750,
                            1161,
                            "easeOutBounce",
                            "${img-stocking-hat}",
                            [[288, -33, 0, 0, 0, 0,0],[288, 17, 0, 0, 0, 0,50]]
                        ],
                        [
                            "eid976",
                            "location",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            [[288, 17, 0, 0, 0, 0,0],[288, 2, 0, 0, 0, 0,15]]
                        ],
                        [
                            "eid986",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            [[288, 2, 0, 0, 0, 0,0],[702, 151.5, 0, 0, 0, 0,440.17]]
                        ],
                        [
                            "eid1003",
                            "location",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            [[702, 151.5, 0, 0, 0, 0,0],[434, 19, 0, 0, 0, 0,298.97]]
                        ],
                        [
                            "eid926",
                            "rotateZ",
                            3750,
                            1000,
                            "easeOutCubic",
                            "${img-leaf-orange}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid1038",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-final-with}",
                            [[135.2, -111.5, 0, 0, 0, 0,0],[135.2, -111.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1027",
                            "location",
                            9645,
                            500,
                            "easeInOutCubic",
                            "${txt-final-with}",
                            [[370, 126.5, 0, 0, 0, 0,0],[370, 36.5, 0, 0, 0, 0,90]]
                        ],
                        [
                            "eid644",
                            "width",
                            0,
                            0,
                            "easeInCubic",
                            "${OrangeBG}",
                            '728px',
                            '728px'
                        ],
                        [
                            "eid648",
                            "width",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${OrangeBG}",
                            '728px',
                            '150px'
                        ],
                        [
                            "eid643",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Border}",
                            '726px',
                            '726px'
                        ],
                        [
                            "eid523",
                            "opacity",
                            11212,
                            500,
                            "easeOutCubic",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid552",
                            "opacity",
                            11837,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid912",
                            "scaleX",
                            3750,
                            0,
                            "linear",
                            "${img-stocking-hat}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid974",
                            "scaleX",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            '0.4',
                            '0.5'
                        ],
                        [
                            "eid1004",
                            "scaleX",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            '0.5',
                            '0.35'
                        ],
                        [
                            "eid719",
                            "top",
                            11185,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid725",
                            "top",
                            11212,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '94px',
                            '6px'
                        ],
                        [
                            "eid726",
                            "top",
                            12337,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '6px',
                            '94px'
                        ],
                        [
                            "eid720",
                            "left",
                            11185,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '83px',
                            '83px'
                        ],
                        [
                            "eid724",
                            "left",
                            11212,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid727",
                            "left",
                            12337,
                            0,
                            "easeOutQuad",
                            "${legalBG}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid894",
                            "left",
                            11702,
                            0,
                            "easeOutQuad",
                            "${legal_render}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid1059",
                            "location",
                            0,
                            0,
                            "easeInOutCubic",
                            "${txt-GS6}",
                            [[303, 54.5, 0, 0, 0, 0,0],[283, 59.5, 0, 0, 0, 0,20.62]]
                        ],
                        [
                            "eid1058",
                            "location",
                            3750,
                            0,
                            "easeInOutCubic",
                            "${txt-GS6}",
                            [[293, 54.5, 0, 0, 0, 0,0],[307, 299.45, 0, 0, 0, 0,245.35]]
                        ],
                        [
                            "eid705",
                            "clip",
                            11212,
                            500,
                            "easeOutQuad",
                            "${legalBG}",
                            [0,493.69140625,80,491.64453125],
                            [0,493.69140625,80,-4.25390625],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid723",
                            "clip",
                            11837,
                            500,
                            "easeInOutQuart",
                            "${legalBG}",
                            [0,493.69140625,80,-4.253905773162842],
                            [0,493.69140625,80,491.10546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid910",
                            "location",
                            0,
                            0,
                            "linear",
                            "${img-phone-GS6-sm}",
                            [[307, 139.5, 0, 0, 0, 0,0],[307, 139.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid909",
                            "location",
                            3750,
                            0,
                            "linear",
                            "${img-phone-GS6-sm}",
                            [[307, 49.5, 0, 0, 0, 0,0],[307, 49.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid957",
                            "location",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-phone-GS6-sm}",
                            [[307, 49.5, 0, 0, 0, 0,0],[311, 41.5, 0, 0, 0, 0,8.94]]
                        ],
                        [
                            "eid981",
                            "location",
                            7500,
                            0,
                            "easeInOutCubic",
                            "${img-phone-GS6-sm}",
                            [[311, 41.5, 0, 0, 0, 0,0],[311, 41.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid925",
                            "scaleY",
                            3750,
                            1000,
                            "easeOutCubic",
                            "${img-leaf-orange}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid966",
                            "scaleY",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-orange}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid919",
                            "location",
                            0,
                            0,
                            "easeOutBounce",
                            "${img-leaf-orange}",
                            [[-20.66, 256.09, 0, 0, 0, 0,0],[-20.66, 256.09, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid927",
                            "location",
                            3750,
                            1000,
                            "easeOutCubic",
                            "${img-leaf-orange}",
                            [[303.5, 93, 0, 0, 0, 0,0],[260.1, 86.36, -52.02, -34.76, -44.39, -29.66,44.53],[232.98, 63, 0, 0, 0, 0,80.41]]
                        ],
                        [
                            "eid967",
                            "location",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-leaf-orange}",
                            [[232.98, 63, 0, 0, 0, 0,0],[232.98, 143, 0, 0, 0, 0,80]]
                        ],
                        [
                            "eid50",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${globe_intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid903",
                            "location",
                            0,
                            0,
                            "easeOutCubic",
                            "${img-bg-teal}",
                            [[292.5, 44, 0, 0, 0, 0,0],[292.5, 44, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid908",
                            "location",
                            3750,
                            0,
                            "easeOutCubic",
                            "${img-bg-teal}",
                            [[292.5, 44, 0, 0, 0, 0,0],[292.5, 285.95, 0, 0, 0, 0,241.95]]
                        ],
                        [
                            "eid911",
                            "scaleY",
                            3750,
                            0,
                            "linear",
                            "${img-stocking-hat}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid975",
                            "scaleY",
                            6000,
                            500,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            '0.4',
                            '0.5'
                        ],
                        [
                            "eid1005",
                            "scaleY",
                            9250,
                            0,
                            "easeInOutCubic",
                            "${img-stocking-hat}",
                            '0.5',
                            '0.35'
                        ],
                        [
                            "eid667",
                            "location",
                            1000,
                            750,
                            "easeInOutCubic",
                            "${globe_intro}",
                            [[354.5, 44.5, 0, 0, 0, 0,0],[540.87, 59.47, 216.43, 72.54, 349.57, 117.16,189.47],[709, 72, 0, 0, 0, 0,359.17]]
                        ],
                        [
                            "eid890",
                            "width",
                            3557,
                            0,
                            "easeOutQuad",
                            "${legal_render}",
                            '444px',
                            '444px'
                        ],
                            [ "eid512", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CTA_ShopNow}', [0] ] ],
                            [ "eid1056", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SnowAnimated}', [] ] ],
                            [ "eid1057", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SnowAnimated}', [] ] ],
                            [ "eid1065", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SnowAnimated}', [0] ] ],
                            [ "eid1066", "trigger", 10837, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SnowAnimated}', [] ] ]
                    ]
                }
            },
            "CTA_ShopNow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CTA_ShopNow',
                            rect: ['0px', '0px', '100px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CTA_ShopNow.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 4368,
                    autoPlay: true,
                    labels: {
                        "scaleUp": 125,
                        "scaleDown": 500
                    },
                    data: [
                        [
                            "eid477",
                            "rotateZ",
                            375,
                            0,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid484",
                            "left",
                            125,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid487",
                            "left",
                            500,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '-4px',
                            '0px'
                        ],
                        [
                            "eid474",
                            "scaleX",
                            125,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid480",
                            "scaleX",
                            500,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid475",
                            "scaleY",
                            125,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid481",
                            "scaleY",
                            500,
                            250,
                            "easeOutCubic",
                            "${CTA_ShopNow}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "SnowCombo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Snow_Vector',
                            type: 'image',
                            rect: ['1px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy',
                            type: 'image',
                            rect: ['151px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy2',
                            type: 'image',
                            rect: ['300px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy3',
                            type: 'image',
                            rect: ['450px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy4',
                            type: 'image',
                            rect: ['600px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy5',
                            type: 'image',
                            rect: ['750px', '1px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy11',
                            type: 'image',
                            rect: ['1px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy10',
                            type: 'image',
                            rect: ['151px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy9',
                            type: 'image',
                            rect: ['300px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy8',
                            type: 'image',
                            rect: ['450px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy7',
                            type: 'image',
                            rect: ['600px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        },
                        {
                            id: 'Snow_VectorCopy6',
                            type: 'image',
                            rect: ['750px', '150px', '150px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Snow%20Vector.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '900px', '300px'],
                            sizeRange: ['900px', '900px', '', '']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SnowAnimated": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SnowCombo',
                            symbolName: 'SnowCombo',
                            rect: ['0px', '-150px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'SnowComboCopy2',
                            symbolName: 'SnowCombo',
                            rect: ['0px', '-75px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '900px', '300px'],
                            sizeRange: ['900px', '900px', '', '']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1019",
                            "location",
                            0,
                            6000,
                            "linear",
                            "${SnowComboCopy2}",
                            [[450, -151, 0, 0, 0, 0,0],[450, 150, 0, 0, 0, 0,301]]
                        ],
                        [
                            "eid4906",
                            "location",
                            0,
                            6000,
                            "linear",
                            "${SnowCombo}",
                            [[450, 150, 0, 0, 0, 0,0],[450, 451.21, 0, 0, 0, 0,301.21]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ad_728x90_edgeActions.js");
})("ATT_OLA-728x90");
