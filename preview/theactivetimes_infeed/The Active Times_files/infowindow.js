google.maps.__gjsload__('infowindow', function(_){'use strict';var jaa=function(a){a=a.__gm.get("panes");if(!_.Yk())return{Zj:null,view:new _.lI(a,new _.cI,_.ey.j)};var b=_.V("div");b.style.borderTop="1px solid #ccc";b.style.marginTop="9px";b.style.paddingTop="6px";var c=new _.Sg(b),d=new _.lI(a,new _.cI,_.ey.j,b);_.J.addListener(c,"place_changed",function(){var a=c.get("place");d.set("apiContentSize",a?_.bO:_.jh);_.VC(b,!!a)});return{Zj:c,view:d}},kaa=function(){this.j=new _.KC},c_=function(a,b,c){this.V=!0;var d=b.__gm;this.Sa=c;c.bindTo("center",
d,"projectionCenterQ");c.bindTo("zoom",d);c.bindTo("offset",d);c.bindTo("projection",b);c.bindTo("focus",b,"position");c.bindTo("latLngPosition",a,"position");this.j=b instanceof _.Dd?a.j.get("logAsInternal")?"Ia":"Id":null;this.R=[];var e=new _.Rv(["scale"],"visible",function(a){return null==a||.3<=a});e.bindTo("scale",c);var f=jaa(b);this.$=f.Zj;this.U=f.view;var f=this.$,g=this.U;f&&(f.bindTo("place",a),f.bindTo("attribution",a));g.set("logAsInternal",!!a.j.get("logAsInternal"));g.bindTo("zIndex",
a);g.bindTo("layoutPixelBounds",d);g.bindTo("maxWidth",a);g.bindTo("content",a);g.bindTo("pixelOffset",a);g.bindTo("visible",e);g.bindTo("position",c,"pixelPosition");g.set("open",!0);this.R.push(_.J.forward(b,"forceredraw",g),_.J.addListener(g,"domready",function(){a.trigger("domready")}));this.T=new _.rv(function(){var a=g.get("pixelBounds");a?_.J.trigger(d,"pantobounds",a):this.T.uc()},150,this);a.get("disableAutoPan")||this.T.uc();var h=this;this.R.push(_.J.addListener(g,"closeclick",function(){a.close();
a.trigger("closeclick");h.j&&_.sm(h.j,"-i",h,!!b.j)}));if(this.j){var l=this.j;_.Y(b,this.j);_.sm(l,"-p",this,!!b.j);c=function(){var c=a.get("position"),d=b.getBounds();c&&d&&d.contains(c)?_.sm(l,"-v",h,!!b.j):_.tm(l,"-v",h)};this.R.push(_.J.addListener(b,"idle",c));c()}};c_.prototype.close=function(){if(this.V){this.V=!1;this.j&&(_.tm(this.j,"-p",this),_.tm(this.j,"-v",this));_.G(this.R,_.J.removeListener);this.R.length=0;this.T.stop();var a=this.$;a&&(a.unbindAll(),a.setPlace(null),a.setAttribution(null));a=this.U;a.unbindAll();a.set("open",!1);a.Mb();this.Sa.unbindAll()}};_.nc("infowindow",{Em:function(a){var b=null;_.oD(a,function d(){var e=a.get("map");b&&(b.Fi.j.remove(a),b.Np.close(),b=null);if(e){var f=e.__gm;f.get("panes")?(f=new c_(a,e,new _.nI),e=e.__gm,e=e.IW_AUTO_CLOSER=e.IW_AUTO_CLOSER||new kaa,b={Np:f,Fi:e},f=b.Fi,1==f.j.qc()&&(e=f.j.wb()[0],e.Be!=a.Be&&(e.set("map",null),f.j.remove(e))),f.j.add(a)):_.J.addListenerOnce(f,"panes_changed",d)}})}});});
