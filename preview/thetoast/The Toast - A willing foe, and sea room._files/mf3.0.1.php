            try {
                
            var slide_mode = 0;

            function zxcBAnimator(zxcmde,zxcobj,zxcsrt,zxcfin,zxctime){
                if (typeof(zxcobj)=='string'){ zxcobj=document.getElementById(zxcobj); }
                if (!zxcobj||(!zxcsrt&&!zxcfin)||zxcsrt==zxcfin) return;
                var zxcoop=zxcobj[zxcmde.replace(/[-#]/g,'')+'oop'];
                if (zxcoop){
                    clearTimeout(zxcoop.to);
                    if (zxcoop.srtfin[0]==zxcsrt&&zxcoop.srtfin[1]==zxcfin&&zxcmde.match('#'))zxcoop.update([zxcoop.data[0],(zxcoop.srtfin[0]==zxcoop.data[2])?zxcfin:zxcsrt],zxctime);
                    else zxcoop.update([zxcsrt,zxcfin],zxctime);
                }
                else zxcobj[zxcmde.replace(/[-#]/g,'')+'oop']=new zxcBAnimatorOOP(zxcmde,zxcobj,zxcsrt,zxcfin,zxctime);
            }
            function zxcBAnimatorOOP(zxcmde,zxcobj,zxcsrt,zxcfin,zxctime){
                this.srtfin=[zxcsrt,zxcfin];
                this.to=null;
                this.obj=zxcobj;
                this.mde=zxcmde.replace(/[-#]/g,'');
                this.update([zxcsrt,zxcfin],zxctime);
            }
            zxcBAnimatorOOP.prototype.update=function(zxcsrtfin,zxctime){
                this.time=zxctime||this.time||2000;
                this.data=[zxcsrtfin[0],zxcsrtfin[0],zxcsrtfin[1]];
                this.srttime=new Date().getTime();
                this.cng();
            }
            zxcBAnimatorOOP.prototype.cng=function(){
                var zxcms=new Date().getTime()-this.srttime;
                this.data[0]=(this.data[2]-this.data[1])/this.time*zxcms+this.data[1];
                if (this.mde!='left'&&this.mde!='top'&&this.data[0]<0) this.data[0]=0;
                if (this.mde!='opacity') this.obj.style[this.mde]=this.data[0]+'px';
                else  zxcOpacity(this.obj,this.data[0]);
                if (zxcms<this.time) this.to=setTimeout(function(zxcoop){return function(){zxcoop.cng();}}(this),10);
                else {
                    this.data[0]=this.data[2];
                    if (this.mde!='opacity') this.obj.style[this.mde]=this.data[0]+'px';
                    else zxcOpacity(this.obj,this.data[0]);
                }
            }
            function zxcOpacity(zxcobj,zxcopc){
                if (zxcopc<0||zxcopc>100) return;
                zxcobj.style.filter='alpha(opacity='+zxcopc+')';
                zxcobj.style.opacity=zxcobj.style.MozOpacity=zxcobj.style.KhtmlOpacity=zxcopc/100-.001;
            }
            function handleTimeout(){
                if (slide_mode == 0){
                    document.getElementById('companiondiv').style.zIndex = '99';
                }
                else
                {
                    document.getElementById('companiondiv').style.zIndex = '-1';
                }
                slide_mode++;
                if (slide_mode > 1){
                    slide_mode = 0;
                }
            }

            function toggleCompanion(slideMode, slideDistance){
                if (slideMode && slideMode == 'debug') {
                    document.getElementById('companiondiv').innerHTML = "<img style='width: 300px; height:250px;' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_xrsjhSAhoKen8spx41NWYnyzuOT_xzeXBXEsssKOGVpJY_Mi'>";
                }

                var slideMode = 0;
                var slideDistance = '250';
                if (slideMode == 0){
                    document.getElementById('companiondiv').style.width='300px';
                    document.getElementById('companiondiv').style.height='250px';
                    var startTop = 551;
                    zxcBAnimator('#top','companiondiv', -startTop , (startTop - slideDistance) * -1,1000);
                } else {
                    document.getElementById('companiondiv').style.width='0px';
                    document.getElementById('companiondiv').style.height='0px';
                    //zxcBAnimator('#left','companiondiv',(slideDistance / 2) - 150, slideDistance, 1000);
                    zxcBAnimator('#left','companiondiv', 0 , slideDistance, 1000);
                }
                setTimeout(handleTimeout, 1100);
            }                function BFM__Player(){
                    var a = this;
                    var embedTag = null;
                    this.pid = '8eee0b9bfb4c467a5ebaefa6778f4a56';
                    this.main = function () {
                        if (document.getElementById(a.pid)){
                            embedTag = document.getElementById(a.pid);
                        } else {
                            var scripts = document.getElementsByTagName('script');
                            for(var i = (scripts.length-1); i >= 0; i--){
                                var cur = scripts[i].getAttribute('src');
                                if(cur && (cur.indexOf(this.pid) > 0)) {
                                    embedTag = scripts[i];
                                    break;
                                }
                            }
                        }
                        if (embedTag) {
                            var el0 = document.createElement('div');
                            el0.id = 'adaptvDiv';
                            el0.innerHTML=  '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="301" height="551" id="myFlashMovie" align="middle" style="width:301px!important; height:551px!important;"><param name="movie" value="http://shared.mefeedia.com/BFMPlayer.swf" /><param name="allowFullScreen" value="true"/><param name="wmode" value="transparent"/><param name="allowscriptaccess" value="always"/><param name="FlashVars" value="pubid=SOLToastPb&width=301&height=251&ap=1&clr=%23000000&furl=http%3A%2F%2Fmefeedia.com%2Fsolutions%2Fapi%2F18%2Fjson&chr=1&exp=0&cmp=1&cmploc=bottom&cmpd=companiondiv&av=0&dcv=0&ro=1&pl=1"/><!--[if !IE]>--><object type="application/x-shockwave-flash" data="http://shared.mefeedia.com/BFMPlayer.swf" width="301" height="551" style="width:301px!important; height:551px!important;"><param name="movie" value="http://shared.mefeedia.com/BFMPlayer.swf" /><param name="allowFullScreen" value="true"/><param name="wmode" value="transparent"/><param name="allowscriptaccess" value="always"/><param name="FlashVars" value="pubid=SOLToastPb&width=301&height=251&ap=1&clr=%23000000&furl=http%3A%2F%2Fmefeedia.com%2Fsolutions%2Fapi%2F18%2Fjson&chr=1&exp=0&cmp=1&cmploc=bottom&cmpd=companiondiv&av=0&dcv=0&ro=1&pl=1" /></object><!--<![endif]--></object>';
                            embedTag.parentNode.insertBefore(el0, embedTag);
                            el1 = document.createElement('div');el1.id = 'companiondiv';el1.style.position='relative';el1.style.top='-551px'; embedTag.parentNode.insertBefore(el1, embedTag);                        }
                    };
                };
                BFM__player_obj = new BFM__Player();
                BFM__player_obj.main();
            } catch (e) {}
        