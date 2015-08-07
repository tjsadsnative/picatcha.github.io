
rsinetsegs=['I07714_10383','I07714_10173','I07714_10267','I07714_10272','D08734_70043','D08734_70052','D08734_70072','D08734_70075','D08734_70094','D08734_72008','I07714_10445','D08734_72435','I07714_10378','I07714_10382','I07714_10533','I07714_10540','I07714_10583','I07714_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['I07714_10383','I07714_10173','I07714_10267','I07714_10272','D08734_70043','D08734_70052','D08734_70072','D08734_70075','D08734_70094','D08734_72008','I07714_10445','D08734_72435','I07714_10378','I07714_10382','I07714_10533','I07714_10540','I07714_10583','I07714_0'],'i07714');} 