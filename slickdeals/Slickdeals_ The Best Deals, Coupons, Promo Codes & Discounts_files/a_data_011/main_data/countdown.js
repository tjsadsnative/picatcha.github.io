//author: Andy W
//----------------------------------------------------
// NOTE: Legend of required parameters
//----------------------------------------------------
// fontPath       : (STRING) the date in mm/dd/yy format
//----------------------------------------------------

var returnDate;

function countdown(date) {
	var tempDateArray = date.split("/");
	var tempYear = (tempDateArray[2].length < 4)?Number(tempDateArray[2])+2000:Number(tempDateArray[2]);
	var DateVs = new Date(tempYear,Number(tempDateArray[0])-1,Number(tempDateArray[1]),23,59);
	var today = new Date();
	var aDay = 24*60*60*1000;
	var diff = (DateVs.getTime()-today.getTime())/aDay				
	console.log(DateVs.toString(),today.toString(),diff);
	returnDate = date;


	if (diff > 4) {
		returnDate = "ENDS SOON";
	} else {
		if (diff < 4) {
			returnDate = "ENDS IN " + Math.ceil(diff) + " DAYS";	
			if (diff < 2) {
				returnDate = "ENDS TOMORROW";	
				if (diff < 1) {	
					returnDate = "ENDS TODAY";	
					if (diff < 0) {	
						returnDate = "";
					}															
				}								
			}						
		} 
	}
}

countdown.prototype = {
	get output(){
        return returnDate;
    },	
}