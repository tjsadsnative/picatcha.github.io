function PMC_AB_Test(options){if(this.init){try{this.init(options);this.run();}catch(e){}}else{return new PMC_AB_Test(options);}}
PMC_AB_Test.prototype.init=function(options){this.options={id:'pmc_abt',bias:50,usecookie:false,a:function(){},b:function(){}};if(typeof options.a=='function'){this.options.a=options.a;}
if(typeof options.b=='function'){this.options.b=options.b;}
if(typeof options.id=='string'){this.options.id=options.id;}
if(typeof options.bias=='number'){this.options.bias=options.bias;}
if(typeof options.usecookie=='boolean'){this.options.usecookie=options.usecookie;}
if(this.options.usecookie){this.cookie=pmc.cookie.get(this.options.id+options.bias);if(typeof this.cookie=='undefined'||!this.cookie){this.cookie=this.get_ab();pmc.cookie.set(this.options.id+options.bias,this.cookie);}}else{this.cookie=this.get_ab();}
if(this.cookie=='a'){this.do_test=this.options.a;}else{this.do_test=this.options.b;}};PMC_AB_Test.prototype.run=function(){try{if(typeof this.do_test=='function'){this.do_test();}}catch(e){}}
PMC_AB_Test.prototype.get_ab=function(){if(Math.floor((Math.random()*100)+1)<=this.options.bias){return'a';}else{return'b';}};PMC_AB_Ads=window.PMC_AB_Ads||{};PMC_AB_Ads.LoadScript=function(src){var a,s=document.getElementsByTagName("script")[0];a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;s.parentNode.insertBefore(a,s);};PMC_AB_Ads.Luminate=function(id){if(typeof id=='undefined'||!id){id='9502f9019';}
PMC_AB_Ads.LoadScript("http://www.luminate.com/widget/async/"+id+"/");};PMC_AB_Ads.GumGum=function(id){if(typeof id=='undefined'||!id){id='5cc3fdcf';}
jQuery.globalEval('var ggv2id = "'+id+'";');PMC_AB_Ads.LoadScript("http://g2.gumgum.com/javascripts/ggv2.js");};