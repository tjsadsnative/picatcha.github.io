//  Copyright (c) 2000-2015 ZEDO Inc. All Rights Reserved.
var r16="http://xp2.zedo.com/asw";var a13=new function(){var n3=this;
n3.a5=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var i19=-1;
try{
i19=new ActiveXObject(name);
}
catch(err)
{
i19={
zzactiveXError:true};
}
return i19;
};
n3.a13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var o1='application/x-shockwave-flash';var t6=navigator.mimeTypes;
if(t6&&t6[o1]&&t6[o1].enabledPlugin&&t6[o1].enabledPlugin.description){
n3.a5=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var z46=-1;
for(var i=0;i<zzDtctRules.length&&z46==-1;i++){
try{
var i19=zzgetXObj(zzDtctRules[i].name);
if((typeof(i19)!=='undefined')&&!i19.zzactiveXError){
n3.a5=true;
return;
}
}catch(err){
n3.a5=false;
}}}
}();
};
get_flash_bit=function(){
var r4=navigator.userAgent.toLowerCase();var v21=(r4.indexOf('mac')!=-1);var q21=parseInt(navigator.appVersion);
var e23=(!v21&&(r4.indexOf('opera')==-1)&&(r4.indexOf('msie')!=-1)&&(q21>=4)&&(r4.indexOf('webtv')==-1
)&&(r4.indexOf('msie 4')==-1));
var y19=navigator.javaEnabled();var i3=1;var d33=document.createElement("audio");var w37=document.createElement("video");var w23={audio:(d33.play)?true:false,video:(w37.play)?true:false};
if(w23.audio&&w23.video){
i3 |=128;
}
if(y19){i3 |=4;}
if(a13.a5){i3 |=8;}
if(e23){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
i3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
i3 |=16;
}}}
return i3;
};
var a14=get_flash_bit();
if(a14==null){
a14='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var q11=0;var r0='';var w7=0;var o50;var i48;var c49;var q49;var i49;var v48;var v49='';var o14='0';var o12=0;var n31='';var zd_$='';var a5=0;var d27='';var w30='';
var n38="";var e35='';var p37='';var a18=new Array();var w13='';var c35=0;var o31='';var n11="";var i31="";var e31="";var c40="";var r17="";var t30="";var c25="";var z32="";var i25=new Array();
var e39=new Array();var t22=new Array();var v33=0;var a8="";var d20="";
function B5(){
if(typeof zflag_nid=='undefined'){
return false;
}
return true;
}
var r37="";
if(typeof zflag_ct!='undefined'){
r37=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
q11=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
r0=zflag_charset;
zflag_charset="";
}else{
r0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
w7=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
n11+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
n11+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
n11+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var n47=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
n11+="&pc="+n47;
}
else{
n11+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
n11+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
n11+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
i31+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
zflag_cid=zflag_cid.toString();
if(zflag_cid.indexOf("/")>-1){
o14=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
o14=zflag_cid;
}
if(o14<0||o14>999999){
o14=0;
}}
if(typeof zflag_chanlimits!='undefined'){
c35=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
o12=zflag_sz;
if(o12<0||o12>95){
o12=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=U57(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
o12=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
r17=zflag_alter_sz;
if(r17<0||r17>95){
r17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
n31=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
d27="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
n38="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
w30='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
o31='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
e35='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
p37=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
w13='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
e31=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
c40=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
t30="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
c25+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
c25+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
c25+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
a8=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
d20=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var a18="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function F17(){
var z20=new Array();
for(var i=0;i<a18.length;i++){
z20[i]=a18[i].substring(1);
}
return z20;
}
function U14(){
var w25=a18;var a6=new Array();var e14=new RegExp(",","g");
for(var i=0;i<w25.length;i++){
if(eval('typeof(zflag_'+a18[i]+')!="undefined"')){
a6[i]=eval('zflag_'+a18[i]);
if(a6[i]!=""){
a6[i]=a6[i].replace(e14,"Z");
}}}
return a6;
}
e39=F17();
t22=U14();
for(var i=0;i<t22.length;i++){
if(t22[i]!=""&&typeof t22[i]!='undefined'){
i25[i25.length]=e39[i]+":"+t22[i];
}}
if(i25.length!=0){
z32='&dm='+i25;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=w7;var zzPbNId=i48;var zzPbEId=c49;var zzPbAId=q49;var zzPbCId=i49;var zzPbGeoLvl=v48;var zzPbk=v49;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=o50;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(a14<0||a14>159){
a14=1;
}
var o11=new Array();
function B0(zp_label){
if(!o11[zp_label]){
var d36=document.cookie;var r7=new Array();var a15=new Array();
r7=d36.split(';');
var v34=(r7!=null)?r7.length:0;
for(var i=0;i<v34;i++){
r7[i]=r7[i].replace(/^\s/,'');
a15=r7[i].split('=');
o11[a15[0]]=a15[1];
}}
if(o11[zp_label]){
return o11[zp_label];
}else{
return '';
}}
function B65(){
var i44=new Date();var n50=new Date(i44.getFullYear(),0,1,0,0,0,0);var i46=new Date(i44.getFullYear(),6,1,0,0,0,0);var o49=Math.max(n50.getTimezoneOffset(),i46.getTimezoneOffset());
return-o49/60;
}
v33=B65();
function F11(isJsTag){
var a20="";
try{
var v30=F2(F18(isJsTag));var z24=B9().split("?")[0];var r30=F2(decodeURIComponent((a8)));
a20=encodeURIComponent(v30+"_"+z24+"_"+r30+"_"+F26(z24)+"_"+B16());
}catch(t){}
return a20;
}
function F23(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function B22(p2,scrWidth,scrHeight){
if(typeof p2=='undefined'||p2.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
p2.sort(F62);
p2.sort(F32);
var r48=p2[p2.length-1];
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)&&parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)){
return p2[i].tag_dimid;
}}
p2.reverse();
p2.sort(U54);
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
return r48.tag_dimid;
}
function F32(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function F62(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function U54(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function U57(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var p2=new Array();
for(i=0;i<arr.length;i++){
var n41=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=n41.match(/^\d+x\d+:\d+$/)){
p2.push(U45(n41));
}}
return B22(p2,scrWidth,scrHeight);
}
function U45(val){
var arr=val.split(":");var o42=arr[0].split("x");
return new F23(arr[1],o42[1],o42[0]);
}
function F18(isJSTag){
var z9='';var y40=B16();
if(y40>1){
isJSTag=false;
}
try{
if(isJSTag){
z9=(typeof(location.href)=='undefined'?"":location.href.split("?")[0]);
}else{
var doc=B64(y40);
z9=(typeof(doc.referrer)=='undefined'?"":doc.referrer.split("?")[0]);
}
}catch(err){}
return z9;
}
function F14(isJSTag){
var c39='';
try{
if(isJSTag){
c39=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return c39;
}
function F2(url){
var p0="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
p0=url.split('/')[2];
}else{
p0=url.split('/')[0];
}}
}catch(t){}
return p0;
}
function B9(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function F26(stackTopUrl){
var d44="";
try{
if(window.location.ancestorOrigins&&stackTopUrl.length>0){
d44=window.location.ancestorOrigins.length-1;
}
}catch(t){}
return d44;
}
function U15(isJSTag,a8){
var z9='';
try{
if(a8!=''){
z9=decodeURIComponent(a8);
z9=z9.split("?")[0];
}else{
z9=F18(isJSTag);
}
var c13=B9();
if(c13!=null&&c13.length>0){
zd_pg_dom=F2(z9);
zd_stack_top_dom=F2(c13);
if(zd_pg_dom!=zd_stack_top_dom){
z9=c13.split("?")[0];
}}
}catch(err){}
return encodeURIComponent(z9);
}
function F16(passedPu){
var c42,detected_dom;
if(typeof(passedPu)!='undefined'&&passedPu!=null&&passedPu!=''){
c42=F2(passedPu);
var c13=B9();
if(c13!=null&&c13.length>0){
detected_dom=F2(c13);
if(c42==detected_dom){
return 1;
}else{
return 2;
}
}else{
return 3;
}}
return '';
}
function B16(){
var a36=0,frame;
do 
try{
frame=frame?frame.parent:window;
a36++;
}catch(t){}
while(frame!==window.top&&a36<20);
return a36;
}
function F48(win){
try{
win.document.location&&win.parent.document.location;
return true;
}catch(e){
return false;
}}
function B48(win){
return(win.frameElement&&win.frameElement.tagName=="IFRAME");
}
function U65(win){
return(!F48(win)?false:B48(win));
}
function B64(iframeDepth){
var r32=window;var cnt=0;
while(U65(r32)&&cnt<iframeDepth){
try{
r32=window.parent;
cnt++;
}catch(t){}
}
try{
return r32.document;
}catch(t){
return window.document;
}}
var z0="";
if(B5()){
z0=r16+'/fm.js?c='+o14+'&a='+c35+'&f='+p37+'&n='+q11
+'&r='+a14+'&d='+o12+'&adm='+r17+'&q='+n31+'&$='+zd_$+n11+i31+'&s='+w7+d27+n38+w30+e35+o31+
'&ct='+r37+z32+'&z='+Math.random()+'&tt=0'+t30+'&tz='+v33+'&pu='+U15(true,a8)+
'&ru='+((d20!='')?encodeURI(d20.split("?")[0]):F14(true))+'&pi='+zd_pg_id+'&ce='+r0+'&zpu='+F11(true)+'&tpu='+(F16(a8));
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+r0+'></scr'+'ipt>';
}
var i20=B0("ZEDOIDA");
if(!(i20=="OPT_OUT"&&o12==15)){
document.write(z0);
}