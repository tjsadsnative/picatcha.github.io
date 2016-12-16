setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'87b5078bfa6845fe87e9b38581b26b0c',
                comparisonItems:[{name : 'cmp', value : 3186721},{name : 'plmt', value : 3186729}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1452709186385103');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);


try{__tagObject_callback_910640847170({ImpressionID:"87b5078bfa6845fe87e9b38581b26b0c", ServerPublicDns:"tps602.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "87b5078bfa6845fe87e9b38581b26b0c");}catch(e){}
try{__verify_callback_910640847170({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "87b5078bfa6845fe87e9b38581b26b0c");}catch(e){}
