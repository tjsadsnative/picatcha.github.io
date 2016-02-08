function runAdiplyRef(adDiv,siteID, unitID) {		 	 
    var  elementCount = document.getElementsByName(adDiv).length;
    var  currentDiv = document.getElementsByName(adDiv);
    for (i = 0; i < elementCount; i++) {	
	   if(i >= (elementCount-2)){
		    currentDiv[i].innerHTML = "";
		    postscribe(currentDiv[i], '<script type=\"text\/javascript\" src="\/\/rev.adip.ly\/revive\/www\/delivery\/spcjs.php?id=' + siteID + '"><\/script><script type=\"text\/javascript\">OA_show(' + unitID + ');<\/script>');	  	   
	   }	  
              
    }   
 }    
 
 
function runAdiplyRefresh() {		 	 
   	   
   	   //adiply
   	    //adiplyRefresh('left');  
   	   
   	   //ATF 300     
	    runAdiplyRef('TBATF300','695','3871'); 
	    
	      //160 1 
	    runAdiplyRef('TBBTF1601','696','3890');
	      //160 2
		runAdiplyRef('TBBTF1602','696','3891');
		
		//300 Post break
		runAdiplyRef('TBPB300','696','3906');
		
		//300 BTF
		runAdiplyRef('TBBTF300','696','3889');
		
		//728 ATF
		runAdiplyRef('TBATF728','695','3904');
 
 }    