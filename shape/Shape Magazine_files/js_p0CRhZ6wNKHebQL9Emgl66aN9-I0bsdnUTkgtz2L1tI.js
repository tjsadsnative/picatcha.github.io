(function ($) {
  Drupal.behaviors.shapeAdsKargo = {
    attach: function (context, settings) {
      // If desktop or tablet layout.
      if (window.innerWidth <= 1024) {
        // Js file for tablet.
        var file = '_jK9-qqSVnbI1La9XYxymg0b';
        if (window.innerWidth <= 768) {
          // Override for mobile.
          var file = '_jK9-qqSV2NA1La9T9FUSk0b';
        }
        // Add first kargo script.
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "http://storage.cloud.kargo.com/ad/network/tag/v3/" + file + ".js";
        a.async = true;
        document.getElementsByTagName("head")[0].appendChild(a);
        // Add second kargo script.
        var b = document.createElement("script");
        b.type = "text/javascript";

        b.text = '(function(w){'  + '\n' +
        '(w.Kargo = w.Kargo || {}).target_params = ' + '\n' +
        '{ ' +
        '"CATEGORY": "' + settings.shapeAds.kargo.category + '", ' +
        '"SECTION": "' + settings.shapeAds.kargo.section + '" ' +
        '};'+ '\n'  +
        '(w.Kargo.setTargetParams || function(){})();' + '\n' +
        '})(window);';

        document.getElementsByTagName("head")[0].appendChild(b);
      }
    }
  };
})(jQuery);;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
// $Id$
/*
 * Drupal Most Popular - Showcase the most popular content across your Drupal website and engage your audience.
 * Copyright © 2009-2012 New Signature
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * You can contact New Signature by electronic mail at labs@newsignature.com -or- by U.S. Postal Service at 1100 H St. NW, Suite 940, Washington, DC 20005.
 */
/**
 * @file 
 * Overwrites jQuery's fade functions to better support IE.
 * Borrowed from http://www.malsup.com/jquery/fadetest.html
 */
(function ($) {
	
    $.fn.fadeIn = function (speed, callback) {
        return this.animate({opacity: 'show'}, speed, function () { 
            if ($.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) { 
                callback();
            }
        }); 
    }; 
 
    $.fn.fadeOut = function (speed, callback) { 
        return this.animate({opacity: 'hide'}, speed, function () { 
            if ($.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) { 
                callback();  
            }
        }); 
    };
     
    $.fn.fadeTo = function (speed, to, callback) { 
        return this.animate({opacity: to}, speed, function () { 
            if (to == 1 && $.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) {
                callback();
            }
        });
    };
    
})(jQuery);;
