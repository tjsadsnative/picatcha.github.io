
/*RealVu(R)Copyright(C)2001-2015,RealVu,Inc.,All rights reserved.*/
if(typeof(top2.RealVu_once)=='undefined'){
top2.RealVu_once=true;
top2.RealVu_focus=true;
if(top2.document.hidden)top2.RealVu_focus=false;
top2.RealVu_mouse=true;
top2.RealVu_o=1;
top2.RealVu_ow=0;
top2.RealVu_vnum=0;
top2.RealVu_ff=navigator.userAgent.match(/Firefox/i);
top2.RealVu_ff_o=(top2.RealVu_ff &&(navigator.userAgent.match(/Firefox\/2./i)|| navigator.userAgent.match(/Firefox\/1./i)));
top2.RealVu_ff_n=(top2.RealVu_ff && !top2.RealVu_ff_o);
top2.RealVu_saf=(navigator.userAgent.match(/Safari/)&& !navigator.userAgent.match(/Chrome/));
top2.RealVu_chrome=(navigator.userAgent.match(/Chrome/));
top2.RealVu_ope=window.opera;
top2.RealVu_fowner=null;
top2.RealVu_insider=false;
top2.RealVu_msover=function(){
if(top2.RealVu_mouse){
top2.RealVu_focus=true;
top2.RealVu_mouse=false;
top2.RealVu_removeEvent(top2,"mousemove",top2.RealVu_msover);
top2.RealVu_fo();}
};
top2.RealVu_addEvent=function(elem,evtType,func){
if(elem){
if(elem.addEventListener){
elem.addEventListener(evtType,func,true);
} else if(elem.attachEvent){
elem.attachEvent("on"+evtType,func);
} else {
elem["on"+evtType]=func;}}
};
top2.RealVu_removeEvent=function(elem,evtType,func){
if(elem){
if(elem.removeEventListener){
elem.removeEventListener(evtType,func,false);
} else if(elem.detachEvent){
elem.detachEvent("on"+evtType,func);
} else {
elem["on"+evtType]=func;}}
};
top2.RealVu_bl_insider=function(){
top2.RealVu_removeEvent(top2.RealVu_fowner,"blur",top2.RealVu_bl_insider);
if(top2.RealVu_fowner==top2.document.activeElement){
top2.RealVu_insider=false;
top2.RealVu_bl();}
else {
try {
var ae=top2.document.activeElement;
if(typeof(ae)!='undefined'){
top2.RealVu_insider=true;
top2.RealVu_focus=true;
top2.RealVu_fowner=ae;
top2.RealVu_addEvent(top2.RealVu_fowner,"blur",top2.RealVu_bl_insider);}}
catch(ex1){ }}
};
top2.RealVu_bl=function(){
if(top2.RealVu_focus &&(!top2.RealVu_ie || !top2.RealVu_insider)){
top2.RealVu_focus=false;
var tp=""; if(top2.RealVu_vnum>0)tp=" View Time counter paused.";
rv_log("<span style='background-color:silver;'>Page out of focus.</span>"+tp+" RealVu idle");}
};
top2.RealVu_visibilitychange=function(){
var v=top2.RealVu_focus+'->';
if(top2.document.hidden)top2.RealVu_focus=false;
else top2.RealVu_focus=true;
v+=top2.RealVu_focus;
rv_log("<span style='background-color:silver;'>visibilitychange</span>focus "+v+"");
};
top2.RealVu_fo=function(){
if(!top2.RealVu_focus){
top2.RealVu_focus=true;
var tp=""; if(top2.RealVu_vnum>0)tp=" View Time counter resumes.";
rv_log("<span style='background-color:LightSteelBlue ;'>Page in focus.</span>"+tp+" RealVu resume");}
if(top2.RealVu_ie){
try {
var ae=top2.document.activeElement;
if(typeof(ae)!='undefined'){
top2.RealVu_insider=true;
top2.RealVu_focus=true;
top2.RealVu_fowner=ae;
top2.RealVu_addEvent(top2.RealVu_fowner,"blur",top2.RealVu_bl_insider);}}
catch(ex1){ }}
};
top2.RealVu_df=function(){
top2.focus(); top2.RealVu_fo();
};
top2.RealVu_correlator_onload=function(){
if(top2.RealVu_test){
var now=new Date(),dur=(now.getTime()-top2.RealVu_log.start_time)/1000;
rv_log("Page loaded in "+dur+" sec.");}
};
top2.RealVu_addEvent(top2,"blur",top2.RealVu_bl);
top2.RealVu_addEvent(top2,"focus",top2.RealVu_fo);
top2.RealVu_addEvent(top2,"load",top2.RealVu_correlator_onload);
top2.RealVu_addEvent(top2,"visibilitychange",top2.RealVu_visibilitychange);
function RealVu_check_over(r){
var s_debug="";
var ovr=false;
var divs=document.body.getElementsByTagName('div');
for(var i=0; i<divs.length; i++){
var dv=divs[i];
if(dv.id.indexOf("RealVu")>-1)continue;
var w=findPosG(dv,window);
var q=top2.findWH(dv);
if(w !=null && typeof(w)!='undefined'){
w.x2=w.x+q.w;
w.y2=w.y+q.h;
w.display=dv.style.display;
if(dv.currentStyle){
w.zIndex=parseInt(dv.currentStyle["zIndex"]);
} else if(window.getComputedStyle){
w.zIndex=parseInt(document.defaultView.getComputedStyle(dv,null).getPropertyValue("z-index"));}
if((w.x2>=r.x1)&&(w.y2>=r.y1)&&(w.x<=r.x2)&&(w.y<=r.y2)/*&&(w.display=='block')*/){
if((!isNaN(r.zIndex)&& !isNaN(w.zIndex)&&(w.zIndex>=r.zIndex))||(isNaN(r.zIndex)&& !isNaN(w.zIndex))&&(w.zIndex>0)){
ovr=true;
s_debug+="CHECK "+i+" "+dv.id+" x="+w.x+",y="+w.y+" "+"w="+q.w+" h="+q.h+";<br/>"+" z="+w.zIndex+" display="+dv.style.display+" ovr="+ovr+"<br/>";
rv_log(s_debug);
break;}}}}
return ovr;
};
top2.RealVu_gbw=function(e){
var w=new Object();
w.left=0; w.top=0; w.right=0; w.bottom=0;
if(window.getComputedStyle){
var srs=window.getComputedStyle(e,null);
w.left=parseInt(srs.borderLeftWidth.slice(0,-2));
w.top=parseInt(srs.borderTopWidth.slice(0,-2));
w.right=parseInt(srs.borderRightWidth.slice(0,-2));
w.bottom=parseInt(srs.borderBottomWidth.slice(0,-2));}
else {
w.left=top2.RealVu_pbw(e.style.borderLeftWidth);
w.top=top2.RealVu_pbw(e.style.borderTopWidth);
w.right=top2.RealVu_pbw(e.style.borderRightWidth);
w.bottom=top2.RealVu_pbw(e.style.borderBottomWidth);}
return w;
};
top2.RealVu_pbw=function(w){
var bw=0;
if(typeof(w)=="string" && w !=null && w !=""){
p=w.indexOf("px");
if(p>=0){
bw=parseInt(w.substring(0,p));}
else {
bw=1;}}
return bw;
};
top2.findWH=function(adi){
var ad=adi;
var q=new Object();
q.w=0;
q.h=0;
var wnd=window.self;
try {
q.w=ad.offsetWidth;
q.h=ad.offsetHeight;}
catch(e){ }
return q;}
top2.RealVu_tell=function(wnd,mv){
if(wnd.document[mv])return wnd.document[mv];
else return wnd.document.getElementById(mv);
};
RealVu_pl=function(i,t,sec){
rv_log("<span style='background-color:SkyBlue'>fL"+i+"</span>"+t);
};
RealVu_gv=function(i,k,sw,sh,v,d,x,y,w,h,r,p,de,lv,loc,uh,vqs){
top2.RealVu_adi[i].v=vqs;
top2.RealVu_adi[i].flash.gv(i,k,sw,sh,v,d,x,y,w,h,r,p,de,lv,loc,uh);
};
RealVu_bv=function(i){
top2.RealVu_adi[i].flash.bv();
};
RealVu_uv=function(i){
top2.RealVu_adi[i].flash.uv();
};
RealVu_na=function(i,c,v){
top2.RealVu_o++;
if(c !=0)top2.RealVu_ea_list+=","+c;
if(v !="")top2.RealVu_adi[i].v=v;
};
top2.RealVu_pp=function(n){
for(var i=0; i<top2.RealVu_i; i++){
try {
if(n==null || n !=i){
if(top2.RealVu_adi[i].v !="" && top2.RealVu_adi[i].rend){
top2.RealVu_adi[i].flash.sv();
top2.RealVu_adi[i].vs=true;}}
if(n==i)top2.RealVu_adi[i].vs=false;
} catch(e){/**/}}
};
function RealVu_var(n,v,c){
var adi=top2.RealVu_adi[n];
if(v=='rend'){
adi.rend=true;
adi.cl=c;
adi.track_third(n,adi.rmac);
var now=new Date();
adi.rt=(now.getTime()-adi.rq_time);
if(top2.RealVu_test){
rv_log("Ad"+(Number(n)+1)+" in "+(adi.rt/1000)+" sec Ad Rendered reported.");
top2.document.getElementById("RealVuS_"+n).innerHTML="&nbsp; Rendered in "+(adi.rt/1000)+" sec";}
} else {
adi[v]=c;}
};
top2.RealVu_rv=function(n){
for(var i=0; i<top2.RealVu_i; i++){
try {
if(top2.RealVu_adi[i].v !="" && top2.RealVu_adi[i].rend){
top2.RealVu_adi[i].flash.pv();
top2.RealVu_adi[i].vs=false;}
} catch(e){/**/}}
};
/****/
rv_rx={
jsn: null
,ok: false
,qn: 10
,cap_wnd: null
,receive: function(e){
/*if(e.origin !==this.targetDomain){
return;
}*/
try {
var jsn1=JSON.parse(e.data);
if(jsn1.iam=='realvu'){
rv_rx.jsn=jsn1;
rv_rx.qn=0;
rv_rx.ok=true;
top2.RealVu_focus=rv_rx.jsn.focus;}
} catch(ex){
return;}}
,log: function(str){
var msg=JSON.stringify({
"iam": "realvu","cmd": "log","msg": str
});
top.postMessage(msg,"*");}
,update_decor: function(){
for(var i=0; i<top2.RealVu_adi.length; i++){
var adi=top2.RealVu_adi[i];
var rep=JSON.stringify({
"iam": "realvu"
,"cmd": "do_decor"
,"num": adi.num
,"x": adi.x
,"y": adi.y
,"width": adi.width
,"height": adi.height
,"sec_v": adi.sec_v
,"vz":adi.vz
,"tt": adi.tt
});
top.postMessage(rep,"*");}}}
if(RealVu_iframe)top2.RealVu_addEvent(window,"message",rv_rx.receive);
/****/
findPosG=function(adi,wnd){
var ad=adi;
var q=new Object(); q.x=0; q.y=0;
try {
while(ad !=null && typeof(ad)!='undefined'){
if(ad.tagName=='IFRAME'){
var adbw=top2.RealVu_gbw(ad);
q.x+=adbw.left;
q.y+=adbw.top;}
q.x+=ad.offsetLeft;
q.y+=ad.offsetTop;
var op=ad.offsetParent;
var pn=ad.parentNode;
var bw=null;
while(op !=null && typeof(op)!='undefined'){
q.x+=op.offsetLeft;
q.y+=op.offsetTop;
var ptn=op.tagName;
if((top2.RealVu_ie && ptn !="TABLE")||(top2.RealVu_ff_n && ptn=="TD")|| top2.RealVu_saf){
bw=top2.RealVu_gbw(op);
q.x+=bw.left;
q.y+=bw.top;}
if(ad.tagName !='IFRAME' && op !=wnd.document.body && op !=document.documentElement){
q.x-=op.scrollLeft;
q.y-=op.scrollTop;}
if(!top2.RealVu_ie){
while(op !=pn && pn !=null){
q.x-=pn.scrollLeft;
q.y-=pn.scrollTop;
if(top2.RealVu_ff_o){
bw=top2.RealVu_gbw(pn);
q.x+=bw.left;
q.y+=bw.top;}
pn=pn.parentNode;}}
pn=pn.parentNode;
op=op.offsetParent;}
if(!rv_rx.ok &&(rv_rx.cap_wnd==null || rv_rx.cap_wnd !=wnd)){
try {
ad=wnd.frameElement;
var loc=wnd.parent.document;
if((typeof(loc)!='unknown')&&(typeof(loc)!='undefined')){
wnd=wnd.parent;}
else {
rv_rx.cap_wnd=wnd;}
} catch(e){
rv_rx.cap_wnd=wnd;
break;}}
else if(rv_rx.ok){
q.x+=rv_rx.jsn["x"];
q.y+=rv_rx.jsn["y"];
RealVu_iframe=false;
break;}
else break;}}
catch(e){ }
return q;
};
top2.rviz={
check_over: false,xs1: 0,ys1: 0,xs2: 1000,ys2: 800,curtop: 0,curleft: 0,lv: false,wl: 0,wt: 0,wb: 5,wn: 30,cw: 0,ch: 0,rtime: new Date(),
update: function(){
/****/
if(RealVu_iframe==true && rv_rx.qn>0 && top.postMessage){
rv_rx.qn--;
var msg=JSON.stringify({ "iam": "realvu","cmd": "add_frame","href": window.location.href });
top.postMessage(msg,"*");
return;}
/****/
if(rv_rx.ok){
this.xs1=rv_rx.jsn.xs;
this.ys1=rv_rx.jsn.ys;
this.cw=rv_rx.jsn.cw;
this.ch=rv_rx.jsn.ch;}
else {
this.xs1=this.sl();
this.ys1=this.st();
this.cw=this.wgw(top2);
this.ch=this.gh();}
this.xs2=this.xs1+this.cw;
this.ys2=this.ys1+this.ch;
if(this.cw==0 && this.ch==0)return;
if(top2.screenTop){
this.wl=top2.screenLeft;
this.wt=top2.screenTop;
} else if(window.screenX){
this.wl=window.screenX;
this.wt=window.screenY;}
if(top2.RealVu_ff){
this.wn=170; this.wb=10;
} else if(top2.RealVu_chrome){
this.wn=130;
} else if(top2.RealVu_saf){
this.wn=120; this.wb=10;}
for(var i=0; i<top2.RealVu_i; i++){
var adi=top2.RealVu_adi[i];
if(adi !=null){
var now_tm=new Date();
var d_tm=now_tm-adi.poll_tm;
adi.poll_tm=now_tm;
if(!adi.ovr)this.findPos(adi);
var x1=adi.x,y1=adi.y,x2=(x1+adi.width),y2=(y1+adi.height),pad_rend=0;
if(!adi.pop){
if((adi.rmode==0)||(adi.tt==5)||((x2>=(this.xs1-pad_rend))&&(y2>=(this.ys1-pad_rend))&&(x1<=(this.xs2+pad_rend))&&(y1<=(this.ys2+pad_rend)))){
adi.ovr=false;
/*
for(var z=0; z<(top2.RealVu_i); z++){
var adz=top2.RealVu_adi[z];
if(adz && z !=i && !adz.ovr && adz.tt==5){
this.findPos(adz);
if((adz.x<x2)&&((adz.x+adz.width)>x1)&&(adz.y<y2)&&((adz.y+adz.height)>y1)){
adi.ovr=true;
rv_log("<span style='color:#FF0000;'>Error: Ad Space #"+(z+1)+" "+adz.x+","+adz.y+" overlapping Ad Space #"+(adi.num+1)+" "+x1+","+y1+"</span>");}}
}*/
if(!adi.ovr &&(!RealVu_iframe || rv_rx.qn==0)){
top2.RealVu_ow++;
adi.o=top2.RealVu_ow;
adi.chw="&cw0="+this.cw+"&ch0="+this.ch+"&sl0="+this.xs1+"&st0="+this.ys1+"&ax0="+x1+"&ay0="+y1+"&tr0=0&va0=0";
this.populate(adi);}}}
if(top2.RealVu_focus){
var bfu=false;
if(adi.uf){ adi.uf=false; bfu=true; }
var r=new Object(),overDiv=false; r.x1=x1; r.y1=y1; r.x2=x2; r.y2=y2; r.zOrder='auto';
if(top2.RealVu_test && this.check_over){
overDiv=RealVu_check_over(r);
if(overDiv==false)rv_log("Ad"+(i+1)+" Overlapped by another layer.");}
if(adi.rend && adi.vion){{
adi.vz=this.viz_area(x1,x2,y1,y2);
if(RealVu_iframe &&(this.cw<(adi.width-4)|| this.ch<(adi.height-4))){ adi.track(31); adi.vion=0; continue; }
var vmin=(adi.width*adi.height<242500)? 50 : 30;
if(adi.vz>=adi.vmin){
if(adi.va<adi.vz)adi.va=adi.vz;
adi.sec_v+=d_tm;
var ss=Math.floor(adi.sec_v/1000);
if(adi.nxt<=30){
if(!RealVu_iframe || rv_rx.ok){ if(ss>=adi.nxt)adi.track(0); }
else { adi.track(30); adi.vion=0; }}}
else {
if(adi.nxt==1){
if(adi.sec_v>0)rv_log("Ad"+(i+1)+" Reset Counter");
adi.sec_v=0;}}}}
} else {
if(!adi.uf){
adi.uf=true;
if(adi.nxt==1){
if(adi.sec_v>0)rv_log("Ad"+(i+1)+" Reset Counter");
adi.sec_v=0;}}}
if(rv_rx.ok)rv_rx.update_decor();}}
if(top2.RealVu_test)top2.move_easels();
var now=new Date();
var dt=now.getTime()-this.rtime;
if(dt>1800000){
rv_log("Stop machine");
if(typeof(top2.RealVu_viz_poll)!='undefined')clearInterval(top2.RealVu_viz_poll);}
},
gw: function(){
if(top2.document.compatMode=="BackCompat"){
return top2.document.body.clientWidth;
} else {
if(top2.innerWidth)
return top2.innerWidth;
else
return top2.document.documentElement.clientWidth;}
},
wgw: function(wnd){
if(top2.document.compatMode=="BackCompat"){
return wnd.document.body.clientWidth;
} else {
if(top2.innerWidth)
return wnd.innerWidth;
else
return wnd.document.documentElement.clientWidth;}
},
gh: function(){
if(top2.document.compatMode=="BackCompat"){
return top2.document.body.clientHeight;
} else {
if(top2.innerHeight)
return top2.innerHeight;
else
return top2.document.documentElement.clientHeight;}
},
sl: function(){
if(top2.document.compatMode=="BackCompat"){
return top2.document.body.scrollLeft;
} else {
if(top2.pageXOffset)
return top2.pageXOffset;
else
return top2.document.documentElement.scrollLeft;}
},
st: function(){
if(top2.document.compatMode=="BackCompat"){
return top2.document.body.scrollTop;
} else {
if(top2.pageYOffset)
return top2.pageYOffset;
else
return top2.document.documentElement.scrollTop;}
},
viz_area: function(x1,x2,y1,y2){
var xs1t=this.xs1,ys1t=this.ys1,xs2t=this.xs2,ys2t=this.ys2;
if(rv_rx.ok){
xs1t=rv_rx.jsn["xs"];
ys1t=rv_rx.jsn["ys"];
xs2t=rv_rx.jsn["xs"]+rv_rx.jsn["cw"];
ys2t=rv_rx.jsn["ys"]+rv_rx.jsn["ch"];}
var xv1=Math.max(x1,xs1t),yv1=Math.max(y1,ys1t);
var xv2=Math.min(x2,xs2t),yv2=Math.min(y2,ys2t);
var A=Math.floor(100*((xv2-xv1)*(yv2-yv1))/((x2-x1)*(y2-y1)));
return A;
},
findPos: function(adi){
var s1=adi.mdiv;
var a=null;
if(adi.tt=="5"){
var a=adi.do247();
if(a !=null){
s1=a;
var w1,h1;
if(window.getComputedStyle){
var srs=window.getComputedStyle(a,null);
w1=parseInt(srs.width.slice(0,-2));
h1=parseInt(srs.height.slice(0,-2));}
else {
w1=a.offsetWidth;
h1=a.offsetHeight;}
if((!isNaN(w1))&&(!isNaN(h1))&&(adi.width !=w1 || adi.height !=h1)){
adi.width=w1;
adi.height=h1;
try {
top2.RealVu_adi[i].flash.setSize(w1,h1);}
catch(e){ }
rv_log("findPos w="+w1+" h="+h1);}}}
else {
adi.cont=s1;}
var q=findPosG(s1,adi.wnd);
adi.x=q.x;
adi.y=q.y;
},
populate: function(ai){
if(!ai.place)return;
if(ai.tt==5){
ai.pop=true;
ai.js=1;
ai.track(26);}
else if(ai.tt==7){
if(ai.place_tag()==true)ai.pop=true;}
else if(ai.flok && ai.ua()[0]>7){
ai.pop=true;
ai.ready=setInterval("top2.rviz.mvReady("+ai.num+");",250);
this.mvReady(ai.num);}
else if(ai.nfs !=""){
ai.js=1;
try {
ai.pop=true;
ai.sub=1;
ai.wnd.document.getElementById('RealVuNFS'+ai.num).innerHTML=ai.nfs;
rv_log("Ad"+(ai.num+1)+" populate no-flash");
} catch(e){ rv_log("Ad"+(ai.num+1)+"populate: "+e.message); };}
},
mvReady: function(n){
var ai=top2.RealVu_adi[n];
var srs="Ad"+(ai.num+1)+" mvReady: ";
try {
var p=top2.RealVu_tell(ai.wnd,"RealVuA"+ai.num);
var r=p.lad;
ai.flash=p;
if(typeof(r)!='undefined' && ai.ad2flash !=""/*&& top2.RealVu_o==ai.o*/){
clearInterval(ai.ready);
this.load(ai);}
else if(ai.err_cnt--<0){
clearInterval(ai.ready);}}
catch(e){
if(ai.err_cnt--<0){
clearInterval(ai.ready);
rv_log(srs+"exception: "+e.message);}}
},
load: function(ai){
var t=new Date(); ai.rq_time=t.getTime();
try {
var fsh=ai.flash;
if(ai.tt=="5")fsh.setSize(ai.width,ai.height);
fsh.lad(ai.k,ai.ad2flash+"&key="+ai.k,ai.chw,ai.RealVu_gmp(),top2.RealVu_test);
ai.pop=1;
ai.rend=1;
ai.js=1;
ai.track(26);
} catch(e){/**/rv_log("Ad"+(ai.num+1)+" load: "+e); }}
,passback: function(i){
var ai=top2.RealVu_adi[i];
var u="https://go.realvu.net/cpm/passback.aspx?key="+ai.k;
var f=ai.wnd.document.getElementById("RealVuM"+i);
f.location=ai;}
};
function RealVu_navigate(url,n){
try {
var adi=top2.RealVu_adi[n];
adi.navigate(url);}
catch(e){ }
};
top2.RealVu_correlator_run=function(){
if(RealVu_iframe){
top2.RealVu_msover();}
if(typeof(top2.RealVu_viz_poll)=='undefined'){
top2.rviz.update();
top2.RealVu_viz_poll=setInterval("top2.rviz.update()",100);
rv_log("RealVu Correlator run");
rv_log("<span style='background-color:lime;'>Init</span>focus="+top2.RealVu_focus+"");}
};
top2.RealVu_correlator_run();}
var JSON=JSON || {};
JSON.stringify=JSON.stringify || function(obj){
var t=typeof(obj);
if(t !="object" || obj===null){
if(t=="string")obj='"'+obj+'"';
return String(obj);}
else {
var n,v,json=[],arr=(obj && obj.constructor==Array);
for(n in obj){
v=obj[n]; t=typeof(v);
if(t=="string")v='"'+v+'"';
else if(t=="object" && v !==null)v=JSON.stringify(v);
json.push((arr ? "" : '"'+n+'":')+String(v));}
return(arr ? "[" : "{")+String(json)+(arr ? "]" : "}");}
};
JSON.parse=JSON.parse || function(str){
if(str==="")str='""';
eval("var p="+str+";");
return p;
};