/*!CK:3986051523!*//*1438194034,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["I6t2K"]); }

__d("HelloCDN-loader",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){try{var j=document.createElement("IFRAME");j.src=h.testing_url;j.style.position="absolute";j.style.left="-1000px";j.style.top="-1000px";j.style.height="1px";j.style.width="1px";j.onload=function(){j.contentWindow.postMessage(JSON.stringify({config:h.cases}),"*");};document.body.appendChild(j);}catch(i){}}f.run=function(h){window.setTimeout(function(){h.resources.forEach(function(i){g(i);});},0,false);};},null);