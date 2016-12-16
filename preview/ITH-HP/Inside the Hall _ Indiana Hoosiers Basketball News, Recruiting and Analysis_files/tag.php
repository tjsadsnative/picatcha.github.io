
(function() {
var tag = {
loc:   function(p) { try { return p+escape(window.location); } catch(e) {} return ''; },
tzo:   function(p) { try { return p+(new Date().getTimezoneOffset()); } catch(e) {} return ''; },
cset:  function(p,v) { try { return v != '' ? p+v : (document.charset ? p+document.charset : (document.characterSet ? p+document.characterSet : '')); } catch(e) {} return ''; },
ref:   function(p) { try { return document.referrer ? p+escape(document.referrer) : ''; } catch(e) {} return ''; },
ct:    function(p,u) { try { return (typeof(u)!='undefined' && u.substring(0,4)=='http') ? p+escape(u) : ''; } catch(e) {} return ''; },
isTrue:function(p,u,o) { try { return u ? p : o; } catch(e) {} return o; },

build: function()  {

            var winW=0;
            var winH=0;
            if (document.body && document.body.offsetWidth) {
                winW = document.body.offsetWidth;
                winH = document.body.offsetHeight;
            }

            if (document.compatMode=='CSS1Compat' &&
                document.documentElement &&
                document.documentElement.offsetWidth ) {

                winW = document.documentElement.offsetWidth;
                winH = document.documentElement.offsetHeight;
            }

            if (window.innerWidth && window.innerHeight) {
                winW = window.innerWidth;
                winH = window.innerHeight;
            } 

            var s =
                '<scr'+'ipt type="text/javascript" src="http://delivery.roimediadigital.com/adserver/www/delivery/ajs.php?zoneid=2339&amp;cb='+Math.floor(Math.random()*99999999999)+

this.cset('&amp;charset=','')+
this.loc('&amp;loc=')+
this.tzo('&amp;tzo=')+


'&amp;target=_blank'+


  



this.ref('&amp;referer=')+
(document.context ? '&amp;context=' + escape(document.context) : '')+


'&amp;st=2761360294'+

                ((document.sw44d55683ed10b5788d9b1d3880b2f8fd.flash) ? '&amp;mmm_fo=1' : '')+
                ((winW > 0) ? '&bw=' + winW : '') +
                ((winH > 0) ? '&bh=' + winH : '') +
                '"><\/scr'+'ipt>';

     document.write(s);
}
    };
    
    if (typeof document.sw44d55683ed10b5788d9b1d3880b2f8fd == 'undefined') {
       document.sw44d55683ed10b5788d9b1d3880b2f8fd = {
           used: false,
           context: false,
           flash: false
       }
    }   
    tag.build();
})();
