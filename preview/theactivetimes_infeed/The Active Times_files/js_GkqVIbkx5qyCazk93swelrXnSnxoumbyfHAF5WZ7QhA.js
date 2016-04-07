(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.ctools_patch = {
    attach: function (context, settings) {
      if ('#modalContent' == context) {
        $(window).resize();
      }
    }
  }
})(jQuery, Drupal, this, this.document);

/**
 * Custom function to open/reload popup with HTML contents.
 *
 * @param href
 * @param ctools_link_class
 * @param ctools_modal_class
 * @param open_callback
 */
function ctools_modal_html(href, ctools_link_class, ctools_modal_class, open_callback) {
  // validate arguments
  if (typeof ctools_link_class == 'undefined') {
    ctools_link_class = '';
  }
  if (typeof ctools_modal_class == 'undefined') {
    ctools_modal_class = '';
  }
  if (typeof open_callback != 'function') {
    open_callback = false;
  }

  if (_ctools_modal_get()) {
    ctools_modal_load(href, open_callback);
  }
  else {
    ctools_modal_open(href, ctools_link_class, ctools_modal_class, open_callback);
  }
}

/**
 * Custom function to open/reload popup with JSON contents.
 *
 * @param href
 * @param ctools_link_class
 */
function ctools_modal_json(href, ctools_link_class) {
  var ctools_link =
    jQuery("<a></a>")
      .hide()
      .attr('href', href)
      .addClass('ctools-use-modal ' + ctools_link_class);
  jQuery('body').append(ctools_link);
  Drupal.attachBehaviors();
  ctools_link.click();
}

/**
 * @returns {*}
 */
function _ctools_modal_get() {
  return jQuery('#modalContent');
}

/**
 * Custom function to open popup.
 *
 * @param href
 * @param ctools_link_class
 * @param ctools_modal_class
 * @param open_callback
 */
function ctools_modal_open(href, ctools_link_class, ctools_modal_class, open_callback) {
  // open empty modal with throbber
  jQuery("<a></a>")
    .attr('href', href)
    .addClass('ctools-use-modal-processed ' + ctools_link_class)
    .click(Drupal.CTools.Modal.clickAjaxLink)
    .click();

  // add modal class
  _ctools_modal_get().addClass(ctools_modal_class);

  // load modal content
  ctools_modal_load(href, open_callback);
}

/**
 * Load the content into popup.
 *
 * @param href
 * @param open_callback
 */
function ctools_modal_load(href, open_callback) {
  ctools_modal_loading();

  var data = {};
  jQuery.ajax({
    type: "GET",
    dataType: "html",
    url: href,
    data: data,
    success: function (response) {
      _ctools_modal_get().find('#modal-content').html(response);

      if (typeof open_callback == 'function') {
        open_callback();
      }
    }
  });
}

/**
 *
 */
function ctools_modal_loading() {
  //
}

/**
 *
 */
function ctools_modal_adjust_height() {
  var modal = _ctools_modal_get();
  var content = modal.find('#modal-content');
  content.height('auto');
  modal.find('.ctools-modal-dialog').animate({
    height: content.height() + 20
  }, 500);
}

/**
 * Custom function to close popup.
 */
function ctools_modal_close() {
  Drupal.CTools.Modal.dismiss();
}

;
// Copyright (c) 2014 comScore, Inc.
var ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||function(){function h(t,n){var r=t||"",i=e,s="undefined",o=l.comScore||l.sitestat||function(e){var t="comScore=",n=c.cookie,r="",i="indexOf",o="substring",a="length",f=2048,h,p="&ns_",d="&",v,m,g,y,b=l.encodeURIComponent||escape;if(n[i](t)+1)for(g=0,m=n.split(";"),y=m[a];g<y;g++)v=m[g][i](t),v+1&&(r=d+unescape(m[g][o](v+t[a])));e+=p+"_t="+ +(new Date)+p+"c="+(c.characterSet||c.defaultCharset||"")+r,e[a]>f&&e[i](d)>0&&(h=e[o](0,f-8).lastIndexOf(d),e=(e[o](0,h)+p+"cut="+b(e[o](h+1)))[o](0,f)),u.httpGet(e),typeof ns_p===s&&(ns_p={src:e}),ns_p.lastMeasurement=e};if(typeof n!==s){var a=[],f=l.encodeURIComponent||escape;for(var h in n)n.hasOwnProperty(h)&&a.push(f(h)+"="+f(n[h]));/[\?\&]$/.test(r)||(r+="&"),r+=a.join("&")}return o(r)}function p(e,t){var n,r=2048,i=l.encodeURIComponent||escape,s=[],o=y.LABELS_ORDER,u=e.split("?"),a=u[0],f=u[1],h=f.split("&");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("="),m=unescape(v[0]),g=unescape(v[1]);m&&(t[m]=g)}var b={};for(var p=0,d=o.length;p<d;p++){var w=o[p];if(t.hasOwnProperty(w)){var E=t[w];typeof E!="undefined"&&E!=null&&(b[w]=!0,s.push(i(w)+"="+i(t[w])))}}for(var w in t){if(b[w])continue;if(t.hasOwnProperty(w)){var E=t[w];typeof E!="undefined"&&E!=null&&s.push(i(w)+"="+i(t[w]))}}return n=a+"?"+s.join("&"),n=n+(n.indexOf("&c8=")<0?"&c8="+i(c.title):"")+(n.indexOf("&c7=")<0?"&c7="+i(c.URL):"")+(n.indexOf("&c9=")<0?"&c9="+i(c.referrer):""),n.length>r&&n.indexOf("&")>0&&(last=n.substr(0,r-8).lastIndexOf("&"),n=(n.substring(0,last)+"&ns_cut="+i(n.substring(last+1))).substr(0,r)),n}var e=function(){var e=function(){function e(e,t){var o=e[0],u=e[1],a=e[2],f=e[3];o=n(o,u,a,f,t[0],7,-680876936),f=n(f,o,u,a,t[1],12,-389564586),a=n(a,f,o,u,t[2],17,606105819),u=n(u,a,f,o,t[3],22,-1044525330),o=n(o,u,a,f,t[4],7,-176418897),f=n(f,o,u,a,t[5],12,1200080426),a=n(a,f,o,u,t[6],17,-1473231341),u=n(u,a,f,o,t[7],22,-45705983),o=n(o,u,a,f,t[8],7,1770035416),f=n(f,o,u,a,t[9],12,-1958414417),a=n(a,f,o,u,t[10],17,-42063),u=n(u,a,f,o,t[11],22,-1990404162),o=n(o,u,a,f,t[12],7,1804603682),f=n(f,o,u,a,t[13],12,-40341101),a=n(a,f,o,u,t[14],17,-1502002290),u=n(u,a,f,o,t[15],22,1236535329),o=r(o,u,a,f,t[1],5,-165796510),f=r(f,o,u,a,t[6],9,-1069501632),a=r(a,f,o,u,t[11],14,643717713),u=r(u,a,f,o,t[0],20,-373897302),o=r(o,u,a,f,t[5],5,-701558691),f=r(f,o,u,a,t[10],9,38016083),a=r(a,f,o,u,t[15],14,-660478335),u=r(u,a,f,o,t[4],20,-405537848),o=r(o,u,a,f,t[9],5,568446438),f=r(f,o,u,a,t[14],9,-1019803690),a=r(a,f,o,u,t[3],14,-187363961),u=r(u,a,f,o,t[8],20,1163531501),o=r(o,u,a,f,t[13],5,-1444681467),f=r(f,o,u,a,t[2],9,-51403784),a=r(a,f,o,u,t[7],14,1735328473),u=r(u,a,f,o,t[12],20,-1926607734),o=i(o,u,a,f,t[5],4,-378558),f=i(f,o,u,a,t[8],11,-2022574463),a=i(a,f,o,u,t[11],16,1839030562),u=i(u,a,f,o,t[14],23,-35309556),o=i(o,u,a,f,t[1],4,-1530992060),f=i(f,o,u,a,t[4],11,1272893353),a=i(a,f,o,u,t[7],16,-155497632),u=i(u,a,f,o,t[10],23,-1094730640),o=i(o,u,a,f,t[13],4,681279174),f=i(f,o,u,a,t[0],11,-358537222),a=i(a,f,o,u,t[3],16,-722521979),u=i(u,a,f,o,t[6],23,76029189),o=i(o,u,a,f,t[9],4,-640364487),f=i(f,o,u,a,t[12],11,-421815835),a=i(a,f,o,u,t[15],16,530742520),u=i(u,a,f,o,t[2],23,-995338651),o=s(o,u,a,f,t[0],6,-198630844),f=s(f,o,u,a,t[7],10,1126891415),a=s(a,f,o,u,t[14],15,-1416354905),u=s(u,a,f,o,t[5],21,-57434055),o=s(o,u,a,f,t[12],6,1700485571),f=s(f,o,u,a,t[3],10,-1894986606),a=s(a,f,o,u,t[10],15,-1051523),u=s(u,a,f,o,t[1],21,-2054922799),o=s(o,u,a,f,t[8],6,1873313359),f=s(f,o,u,a,t[15],10,-30611744),a=s(a,f,o,u,t[6],15,-1560198380),u=s(u,a,f,o,t[13],21,1309151649),o=s(o,u,a,f,t[4],6,-145523070),f=s(f,o,u,a,t[11],10,-1120210379),a=s(a,f,o,u,t[2],15,718787259),u=s(u,a,f,o,t[9],21,-343485551),e[0]=h(o,e[0]),e[1]=h(u,e[1]),e[2]=h(a,e[2]),e[3]=h(f,e[3])}function t(e,t,n,r,i,s){return t=h(h(t,e),h(r,s)),h(t<<i|t>>>32-i,n)}function n(e,n,r,i,s,o,u){return t(n&r|~n&i,e,n,s,o,u)}function r(e,n,r,i,s,o,u){return t(n&i|r&~i,e,n,s,o,u)}function i(e,n,r,i,s,o,u){return t(n^r^i,e,n,s,o,u)}function s(e,n,r,i,s,o,u){return t(r^(n|~i),e,n,s,o,u)}function o(t){txt="";var n=t.length,r=[1732584193,-271733879,-1732584194,271733878],i;for(i=64;i<=t.length;i+=64)e(r,u(t.substring(i-64,i)));t=t.substring(i-64);var s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<t.length;i++)s[i>>2]|=t.charCodeAt(i)<<(i%4<<3);s[i>>2]|=128<<(i%4<<3);if(i>55){e(r,s);for(i=0;i<16;i++)s[i]=0}return s[14]=n*8,e(r,s),r}function u(e){var t=[],n;for(n=0;n<64;n+=4)t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24);return t}function f(e){var t="",n=0;for(;n<4;n++)t+=a[e>>n*8+4&15]+a[e>>n*8&15];return t}function l(e){for(var t=0;t<e.length;t++)e[t]=f(e[t]);return e.join("")}function c(e){return l(o(e))}function h(e,t){return e+t&4294967295}var a="0123456789abcdef".split("");if(c("hello")!="5d41402abc4b2a76b9719d911017c592")function h(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}return c}(),t=function(){function h(e,t,n){e!=null&&("number"==typeof e?this.fromNumber(e,t,n):t==null&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function p(){return new h(null)}function w(e){return m.charAt(e)}function E(e,t){var n=g[e.charCodeAt(t)];return n==null?-1:n}function S(e){for(var t=this.t-1;t>=0;--t)e[t]=this[t];e.t=this.t,e.s=this.s}function x(e){this.t=1,this.s=e<0?-1:0,e>0?this[0]=e:e<-1?this[0]=e+DV:this.t=0}function T(e){var t=p();return t.fromInt(e),t}function N(e,t){var n;if(t==16)n=4;else if(t==8)n=3;else if(t==256)n=8;else if(t==2)n=1;else if(t==32)n=5;else{if(t!=4){this.fromRadix(e,t);return}n=2}this.t=0,this.s=0;var r=e.length,i=!1,s=0;while(--r>=0){var o=n==8?e[r]&255:E(e,r);if(o<0){e.charAt(r)=="-"&&(i=!0);continue}i=!1,s==0?this[this.t++]=o:s+n>this.DB?(this[this.t-1]|=(o&(1<<this.DB-s)-1)<<s,this[this.t++]=o>>this.DB-s):this[this.t-1]|=o<<s,s+=n,s>=this.DB&&(s-=this.DB)}n==8&&(e[0]&128)!=0&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),i&&h.ZERO.subTo(this,this)}function C(){var e=this.s&this.DM;while(this.t>0&&this[this.t-1]==e)--this.t}function k(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(e==16)t=4;else if(e==8)t=3;else if(e==2)t=1;else if(e==32)t=5;else{if(e!=4)return this.toRadix(e);t=2}var n=(1<<t)-1,r,i=!1,s="",o=this.t,u=this.DB-o*this.DB%t;if(o-->0){u<this.DB&&(r=this[o]>>u)>0&&(i=!0,s=w(r));while(o>=0)u<t?(r=(this[o]&(1<<u)-1)<<t-u,r|=this[--o]>>(u+=this.DB-t)):(r=this[o]>>(u-=t)&n,u<=0&&(u+=this.DB,--o)),r>0&&(i=!0),i&&(s+=w(r))}return i?s:"0"}function L(){var e=p();return h.ZERO.subTo(this,e),e}function A(){return this.s<0?this.negate():this}function O(e){var t=this.s-e.s;if(t!=0)return t;var n=this.t;t=n-e.t;if(t!=0)return this.s<0?-t:t;while(--n>=0)if((t=this[n]-e[n])!=0)return t;return 0}function M(e){var t=1,n;return(n=e>>>16)!=0&&(e=n,t+=16),(n=e>>8)!=0&&(e=n,t+=8),(n=e>>4)!=0&&(e=n,t+=4),(n=e>>2)!=0&&(e=n,t+=2),(n=e>>1)!=0&&(e=n,t+=1),t}function _(){return this.t<=0?0:this.DB*(this.t-1)+M(this[this.t-1]^this.s&this.DM)}function D(e,t){var n;for(n=this.t-1;n>=0;--n)t[n+e]=this[n];for(n=e-1;n>=0;--n)t[n]=0;t.t=this.t+e,t.s=this.s}function P(e,t){for(var n=e;n<this.t;++n)t[n-e]=this[n];t.t=Math.max(this.t-e,0),t.s=this.s}function H(e,t){var n=e%this.DB,r=this.DB-n,i=(1<<r)-1,s=Math.floor(e/this.DB),o=this.s<<n&this.DM,u;for(u=this.t-1;u>=0;--u)t[u+s+1]=this[u]>>r|o,o=(this[u]&i)<<n;for(u=s-1;u>=0;--u)t[u]=0;t[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()}function B(e,t){t.s=this.s;var n=Math.floor(e/this.DB);if(n>=this.t){t.t=0;return}var r=e%this.DB,i=this.DB-r,s=(1<<r)-1;t[0]=this[n]>>r;for(var o=n+1;o<this.t;++o)t[o-n-1]|=(this[o]&s)<<i,t[o-n]=this[o]>>r;r>0&&(t[this.t-n-1]|=(this.s&s)<<i),t.t=this.t-n,t.clamp()}function j(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]-e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r-=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r-=e[n],t[n++]=r&this.DM,r>>=this.DB;r-=e.s}t.s=r<0?-1:0,r<-1?t[n++]=this.DV+r:r>0&&(t[n++]=r),t.t=n,t.clamp()}function F(e,t){var n=this.abs(),r=e.abs(),i=n.t;t.t=i+r.t;while(--i>=0)t[i]=0;for(i=0;i<r.t;++i)t[i+n.t]=n.am(0,r[i],t,i,0,n.t);t.s=0,t.clamp(),this.s!=e.s&&h.ZERO.subTo(t,t)}function I(e){var t=this.abs(),n=e.t=2*t.t;while(--n>=0)e[n]=0;for(n=0;n<t.t-1;++n){var r=t.am(n,t[n],e,2*n,0,1);(e[n+t.t]+=t.am(n+1,2*t[n],e,2*n+1,r,t.t-n-1))>=t.DV&&(e[n+t.t]-=t.DV,e[n+t.t+1]=1)}e.t>0&&(e[e.t-1]+=t.am(n,t[n],e,2*n,0,1)),e.s=0,e.clamp()}function q(e,t,n){var r=e.abs();if(r.t<=0)return;var i=this.abs();if(i.t<r.t){t!=null&&t.fromInt(0),n!=null&&this.copyTo(n);return}n==null&&(n=p());var s=p(),o=this.s,u=e.s,a=this.DB-M(r[r.t-1]);a>0?(r.lShiftTo(a,s),i.lShiftTo(a,n)):(r.copyTo(s),i.copyTo(n));var f=s.t,l=s[f-1];if(l==0)return;var c=l*(1<<this.F1)+(f>1?s[f-2]>>this.F2:0),d=this.FV/c,v=(1<<this.F1)/c,m=1<<this.F2,g=n.t,y=g-f,b=t==null?p():t;s.dlShiftTo(y,b),n.compareTo(b)>=0&&(n[n.t++]=1,n.subTo(b,n)),h.ONE.dlShiftTo(f,b),b.subTo(s,s);while(s.t<f)s[s.t++]=0;while(--y>=0){var w=n[--g]==l?this.DM:Math.floor(n[g]*d+(n[g-1]+m)*v);if((n[g]+=s.am(0,w,n,y,0,f))<w){s.dlShiftTo(y,b),n.subTo(b,n);while(n[g]<--w)n.subTo(b,n)}}t!=null&&(n.drShiftTo(f,t),o!=u&&h.ZERO.subTo(t,t)),n.t=f,n.clamp(),a>0&&n.rShiftTo(a,n),o<0&&h.ZERO.subTo(n,n)}function R(e){var t=p();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(h.ZERO)>0&&e.subTo(t,t),t}function U(e){this.m=e}function z(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e}function W(e){return e}function X(e){e.divRemTo(this.m,null,e)}function V(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function $(e,t){e.squareTo(t),this.reduce(t)}function J(){if(this.t<1)return 0;var e=this[0];if((e&1)==0)return 0;var t=e&3;return t=t*(2-(e&15)*t)&15,t=t*(2-(e&255)*t)&255,t=t*(2-((e&65535)*t&65535))&65535,t=t*(2-e*t%this.DV)%this.DV,t>0?this.DV-t:-t}function K(e){this.m=e,this.mp=e.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function Q(e){var t=p();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(h.ZERO)>0&&this.m.subTo(t,t),t}function G(e){var t=p();return e.copyTo(t),this.reduce(t),t}function Y(e){while(e.t<=this.mt2)e[e.t++]=0;for(var t=0;t<this.m.t;++t){var n=e[t]&32767,r=n*this.mpl+((n*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;n=t+this.m.t,e[n]+=this.m.am(0,r,e,t,0,this.m.t);while(e[n]>=e.DV)e[n]-=e.DV,e[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)}function Z(e,t){e.squareTo(t),this.reduce(t)}function et(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function tt(){return(this.t>0?this[0]&1:this.s)==0}function nt(e,t){if(e>4294967295||e<1)return h.ONE;var n=p(),r=p(),i=t.convert(this),s=M(e)-1;i.copyTo(n);while(--s>=0){t.sqrTo(n,r);if((e&1<<s)>0)t.mulTo(r,i,n);else{var o=n;n=r,r=o}}return t.revert(n)}function rt(e,t){var n;return e<256||t.isEven()?n=new U(t):n=new K(t),this.exp(e,n)}function it(){var e=p();return this.copyTo(e),e}function st(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function ot(){return this.t==0?this.s:this[0]<<24>>24}function ut(){return this.t==0?this.s:this[0]<<16>>16}function at(e){return Math.floor(Math.LN2*this.DB/Math.log(e))}function ft(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function lt(e){e==null&&(e=10);if(this.signum()==0||e<2||e>36)return"0";var t=this.chunkSize(e),n=Math.pow(e,t),r=T(n),i=p(),s=p(),o="";this.divRemTo(r,i,s);while(i.signum()>0)o=(n+s.intValue()).toString(e).substr(1)+o,i.divRemTo(r,i,s);return s.intValue().toString(e)+o}function ct(e,t){this.fromInt(0),t==null&&(t=10);var n=this.chunkSize(t),r=Math.pow(t,n),i=!1,s=0,o=0;for(var u=0;u<e.length;++u){var a=E(e,u);if(a<0){e.charAt(u)=="-"&&this.signum()==0&&(i=!0);continue}o=t*o+a,++s>=n&&(this.dMultiply(r),this.dAddOffset(o,0),s=0,o=0)}s>0&&(this.dMultiply(Math.pow(t,s)),this.dAddOffset(o,0)),i&&h.ZERO.subTo(this,this)}function ht(e,t,n){if("number"==typeof t)if(e<2)this.fromInt(1);else{this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(h.ONE.shiftLeft(e-1),wt,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(t))this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(h.ONE.shiftLeft(e-1),this)}else{var r=new Array,i=e&7;r.length=(e>>3)+1,t.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function pt(){var e=this.t,t=new Array;t[0]=this.s;var n=this.DB-e*this.DB%8,r,i=0;if(e-->0){n<this.DB&&(r=this[e]>>n)!=(this.s&this.DM)>>n&&(t[i++]=r|this.s<<this.DB-n);while(e>=0){n<8?(r=(this[e]&(1<<n)-1)<<8-n,r|=this[--e]>>(n+=this.DB-8)):(r=this[e]>>(n-=8)&255,n<=0&&(n+=this.DB,--e)),(r&128)!=0&&(r|=-256),i==0&&(this.s&128)!=(r&128)&&++i;if(i>0||r!=this.s)t[i++]=r}}return t}function dt(e){return this.compareTo(e)==0}function vt(e){return this.compareTo(e)<0?this:e}function mt(e){return this.compareTo(e)>0?this:e}function gt(e,t,n){var r,i,s=Math.min(e.t,this.t);for(r=0;r<s;++r)n[r]=t(this[r],e[r]);if(e.t<this.t){i=e.s&this.DM;for(r=s;r<this.t;++r)n[r]=t(this[r],i);n.t=this.t}else{i=this.s&this.DM;for(r=s;r<e.t;++r)n[r]=t(i,e[r]);n.t=e.t}n.s=t(this.s,e.s),n.clamp()}function yt(e,t){return e&t}function bt(e){var t=p();return this.bitwiseTo(e,yt,t),t}function wt(e,t){return e|t}function Et(e){var t=p();return this.bitwiseTo(e,wt,t),t}function St(e,t){return e^t}function xt(e){var t=p();return this.bitwiseTo(e,St,t),t}function Tt(e,t){return e&~t}function Nt(e){var t=p();return this.bitwiseTo(e,Tt,t),t}function Ct(){var e=p();for(var t=0;t<this.t;++t)e[t]=this.DM&~this[t];return e.t=this.t,e.s=~this.s,e}function kt(e){var t=p();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}function Lt(e){var t=p();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}function At(e){if(e==0)return-1;var t=0;return(e&65535)==0&&(e>>=16,t+=16),(e&255)==0&&(e>>=8,t+=8),(e&15)==0&&(e>>=4,t+=4),(e&3)==0&&(e>>=2,t+=2),(e&1)==0&&++t,t}function Ot(){for(var e=0;e<this.t;++e)if(this[e]!=0)return e*this.DB+At(this[e]);return this.s<0?this.t*this.DB:-1}function Mt(e){var t=0;while(e!=0)e&=e-1,++t;return t}function _t(){var e=0,t=this.s&this.DM;for(var n=0;n<this.t;++n)e+=Mt(this[n]^t);return e}function Dt(e){var t=Math.floor(e/this.DB);return t>=this.t?this.s!=0:(this[t]&1<<e%this.DB)!=0}function Pt(e,t){var n=h.ONE.shiftLeft(e);return this.bitwiseTo(n,t,n),n}function Ht(e){return this.changeBit(e,wt)}function Bt(e){return this.changeBit(e,Tt)}function jt(e){return this.changeBit(e,St)}function Ft(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]+e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r+=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r+=e[n],t[n++]=r&this.DM,r>>=this.DB;r+=e.s}t.s=r<0?-1:0,r>0?t[n++]=r:r<-1&&(t[n++]=this.DV+r),t.t=n,t.clamp()}function It(e){var t=p();return this.addTo(e,t),t}function qt(e){var t=p();return this.subTo(e,t),t}function Rt(e){var t=p();return this.multiplyTo(e,t),t}function Ut(){var e=p();return this.squareTo(e),e}function zt(e){var t=p();return this.divRemTo(e,t,null),t}function Wt(e){var t=p();return this.divRemTo(e,null,t),t}function Xt(e){var t=p(),n=p();return this.divRemTo(e,t,n),new Array(t,n)}function Vt(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}function $t(e,t){if(e==0)return;while(this.t<=t)this[this.t++]=0;this[t]+=e;while(this[t]>=this.DV)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}function Jt(){}function Kt(e){return e}function Qt(e,t,n){e.multiplyTo(t,n)}function Gt(e,t){e.squareTo(t)}function Yt(e){return this.exp(e,new Jt)}function Zt(e,t,n){var r=Math.min(this.t+e.t,t);n.s=0,n.t=r;while(r>0)n[--r]=0;var i;for(i=n.t-this.t;r<i;++r)n[r+this.t]=this.am(0,e[r],n,r,0,this.t);for(i=Math.min(e.t,t);r<i;++r)this.am(0,e[r],n,r,0,t-r);n.clamp()}function en(e,t,n){--t;var r=n.t=this.t+e.t-t;n.s=0;while(--r>=0)n[r]=0;for(r=Math.max(t-this.t,0);r<e.t;++r)n[this.t+r-t]=this.am(t-r,e[r],n,0,0,this.t+r-t);n.clamp(),n.drShiftTo(1,n)}function tn(e){this.r2=p(),this.q3=p(),h.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function nn(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=p();return e.copyTo(t),this.reduce(t),t}function rn(e){return e}function sn(e){e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(e.compareTo(this.r2)<0)e.dAddOffset(1,this.m.t+1);e.subTo(this.r2,e);while(e.compareTo(this.m)>=0)e.subTo(this.m,e)}function on(e,t){e.squareTo(t),this.reduce(t)}function un(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function an(e,t){var n=e.bitLength(),r,i=T(1),s;if(n<=0)return i;n<18?r=1:n<48?r=3:n<144?r=4:n<768?r=5:r=6,n<8?s=new U(t):t.isEven()?s=new tn(t):s=new K(t);var o=new Array,u=3,a=r-1,f=(1<<r)-1;o[1]=s.convert(this);if(r>1){var l=p();s.sqrTo(o[1],l);while(u<=f)o[u]=p(),s.mulTo(l,o[u-2],o[u]),u+=2}var c=e.t-1,h,d=!0,v=p(),m;n=M(e[c])-1;while(c>=0){n>=a?h=e[c]>>n-a&f:(h=(e[c]&(1<<n+1)-1)<<a-n,c>0&&(h|=e[c-1]>>this.DB+n-a)),u=r;while((h&1)==0)h>>=1,--u;(n-=u)<0&&(n+=this.DB,--c);if(d)o[h].copyTo(i),d=!1;else{while(u>1)s.sqrTo(i,v),s.sqrTo(v,i),u-=2;u>0?s.sqrTo(i,v):(m=i,i=v,v=m),s.mulTo(v,o[h],i)}while(c>=0&&(e[c]&1<<n)==0)s.sqrTo(i,v),m=i,i=v,v=m,--n<0&&(n=this.DB-1,--c)}return s.revert(i)}function fn(e){var t=this.s<0?this.negate():this.clone(),n=e.s<0?e.negate():e.clone();if(t.compareTo(n)<0){var r=t;t=n,n=r}var i=t.getLowestSetBit(),s=n.getLowestSetBit();if(s<0)return t;i<s&&(s=i),s>0&&(t.rShiftTo(s,t),n.rShiftTo(s,n));while(t.signum()>0)(i=t.getLowestSetBit())>0&&t.rShiftTo(i,t),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),t.compareTo(n)>=0?(t.subTo(n,t),t.rShiftTo(1,t)):(n.subTo(t,n),n.rShiftTo(1,n));return s>0&&n.lShiftTo(s,n),n}function ln(e){if(e<=0)return 0;var t=this.DV%e,n=this.s<0?e-1:0;if(this.t>0)if(t==0)n=this[0]%e;else for(var r=this.t-1;r>=0;--r)n=(t*n+this[r])%e;return n}function cn(e){var t=e.isEven();if(this.isEven()&&t||e.signum()==0)return h.ZERO;var n=e.clone(),r=this.clone(),i=T(1),s=T(0),o=T(0),u=T(1);while(n.signum()!=0){while(n.isEven()){n.rShiftTo(1,n);if(t){if(!i.isEven()||!s.isEven())i.addTo(this,i),s.subTo(e,s);i.rShiftTo(1,i)}else s.isEven()||s.subTo(e,s);s.rShiftTo(1,s)}while(r.isEven()){r.rShiftTo(1,r);if(t){if(!o.isEven()||!u.isEven())o.addTo(this,o),u.subTo(e,u);o.rShiftTo(1,o)}else u.isEven()||u.subTo(e,u);u.rShiftTo(1,u)}n.compareTo(r)>=0?(n.subTo(r,n),t&&i.subTo(o,i),s.subTo(u,s)):(r.subTo(n,r),t&&o.subTo(i,o),u.subTo(s,u))}return r.compareTo(h.ONE)!=0?h.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u}function dn(e){var t,n=this.abs();if(n.t==1&&n[0]<=hn[hn.length-1]){for(t=0;t<hn.length;++t)if(n[0]==hn[t])return!0;return!1}if(n.isEven())return!1;t=1;while(t<hn.length){var r=hn[t],i=t+1;while(i<hn.length&&r<pn)r*=hn[i++];r=n.modInt(r);while(t<i)if(r%hn[t++]==0)return!1}return n.millerRabin(e)}function vn(e){var t=this.subtract(h.ONE),n=t.getLowestSetBit();if(n<=0)return!1;var r=t.shiftRight(n);e=e+1>>1,e>hn.length&&(e=hn.length);var i=p();for(var s=0;s<e;++s){i.fromInt(hn[Math.floor(Math.random()*hn.length)]);var o=i.modPow(r,this);if(o.compareTo(h.ONE)!=0&&o.compareTo(t)!=0){var u=1;while(u++<n&&o.compareTo(t)!=0){o=o.modPowInt(2,this);if(o.compareTo(h.ONE)==0)return!1}if(o.compareTo(t)!=0)return!1}}return!0}function mn(){this.i=0,this.j=0,this.S=new Array}function gn(e){var t,n,r;for(t=0;t<256;++t)this.S[t]=t;n=0;for(t=0;t<256;++t)n=n+this.S[t]+e[t%e.length]&255,r=this.S[t],this.S[t]=this.S[n],this.S[n]=r;this.i=0,this.j=0}function yn(){var e;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,e=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=e,this.S[e+this.S[this.i]&255]}function bn(){return new mn}function Tn(e){Sn[xn++]^=e&255,Sn[xn++]^=e>>8&255,Sn[xn++]^=e>>16&255,Sn[xn++]^=e>>24&255,xn>=wn&&(xn-=wn)}function Nn(){Tn((new Date).getTime())}function kn(){if(En==null){Nn(),En=bn(),En.init(Sn);for(xn=0;xn<Sn.length;++xn)Sn[xn]=0;xn=0}return En.next()}function Ln(e){var t;for(t=0;t<e.length;++t)e[t]=kn()}function An(){}function On(e,t){return new h(e,t)}function Mn(e,t){var n="",r=0;while(r+t<e.length)n+=e.substring(r,r+t)+"\n",r+=t;return n+e.substring(r,e.length)}function _n(e){return e<16?"0"+e.toString(16):e.toString(16)}function Dn(e,t){if(t<e.length+11)return alert("Message too long for RSA"),null;var n=new Array,r=e.length-1;while(r>=0&&t>0){var i=e.charCodeAt(r--);i<128?n[--t]=i:i>127&&i<2048?(n[--t]=i&63|128,n[--t]=i>>6|192):(n[--t]=i&63|128,n[--t]=i>>6&63|128,n[--t]=i>>12|224)}n[--t]=0;var s=new An,o=new Array;while(t>2){o[0]=0;while(o[0]==0)s.nextBytes(o);n[--t]=o[0]}return n[--t]=2,n[--t]=0,new h(n)}function Pn(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function Hn(e,t){e!=null&&t!=null&&e.length>0&&t.length>0?(this.n=On(e,16),this.e=parseInt(t,16)):alert("Invalid RSA public key")}function Bn(e){return e.modPowInt(this.e,this.n)}function jn(e){var t=Dn(e,this.n.bitLength()+7>>3);if(t==null)return null;var n=this.doPublic(t);if(n==null)return null;var r=n.toString(16);return(r.length&1)==0?r:"0"+r}function Fn(e,t){var n=e.toByteArray(),r=0;while(r<n.length&&n[r]==0)++r;if(n.length-r!=t-1||n[r]!=2)return null;++r;while(n[r]!=0)if(++r>=n.length)return null;var i="";while(++r<n.length){var s=n[r]&255;s<128?i+=String.fromCharCode(s):s>191&&s<224?(i+=String.fromCharCode((s&31)<<6|n[r+1]&63),++r):(i+=String.fromCharCode((s&15)<<12|(n[r+1]&63)<<6|n[r+2]&63),r+=2)}return i}function In(e,t,n){e!=null&&t!=null&&e.length>0&&t.length>0?(this.n=On(e,16),this.e=parseInt(t,16),this.d=On(n,16)):alert("Invalid RSA private key")}function qn(e,t,n,r,i,s,o,u){e!=null&&t!=null&&e.length>0&&t.length>0?(this.n=On(e,16),this.e=parseInt(t,16),this.d=On(n,16),this.p=On(r,16),this.q=On(i,16),this.dmp1=On(s,16),this.dmq1=On(o,16),this.coeff=On(u,16)):alert("Invalid RSA private key")}function Rn(e,t){var n=new An,r=e>>1;this.e=parseInt(t,16);var i=new h(t,16);for(;;){for(;;){this.p=new h(e-r,1,n);if(this.p.subtract(h.ONE).gcd(i).compareTo(h.ONE)==0&&this.p.isProbablePrime(10))break}for(;;){this.q=new h(r,1,n);if(this.q.subtract(h.ONE).gcd(i).compareTo(h.ONE)==0&&this.q.isProbablePrime(10))break}if(this.p.compareTo(this.q)<=0){var s=this.p;this.p=this.q,this.q=s}var o=this.p.subtract(h.ONE),u=this.q.subtract(h.ONE),a=o.multiply(u);if(a.gcd(i).compareTo(h.ONE)==0){this.n=this.p.multiply(this.q),this.d=i.modInverse(a),this.dmp1=this.d.mod(o),this.dmq1=this.d.mod(u),this.coeff=this.q.modInverse(this.p);break}}}function Un(e){if(this.p==null||this.q==null)return e.modPow(this.d,this.n);var t=e.mod(this.p).modPow(this.dmp1,this.p),n=e.mod(this.q).modPow(this.dmq1,this.q);while(t.compareTo(n)<0)t=t.add(this.p);return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)}function zn(e){var t=On(e,16),n=this.doPrivate(t);return n==null?null:Fn(n,this.n.bitLength()+7>>3)}function Vn(e){var t,n,r="";for(t=0;t+3<=e.length;t+=3)n=parseInt(e.substring(t,t+3),16),r+=Wn.charAt(n>>6)+Wn.charAt(n&63);t+1==e.length?(n=parseInt(e.substring(t,t+1),16),r+=Wn.charAt(n<<2)):t+2==e.length&&(n=parseInt(e.substring(t,t+2),16),r+=Wn.charAt(n>>2)+Wn.charAt((n&3)<<4));while((r.length&3)>0)r+=Xn;return r}function $n(e){var t="",n,r=0,i;for(n=0;n<e.length;++n){if(e.charAt(n)==Xn)break;v=Wn.indexOf(e.charAt(n));if(v<0)continue;r==0?(t+=w(v>>2),i=v&3,r=1):r==1?(t+=w(i<<2|v>>4),i=v&15,r=2):r==2?(t+=w(i),t+=w(v>>2),i=v&3,r=3):(t+=w(i<<2|v>>4),t+=w(v&15),r=0)}return r==1&&(t+=w(i<<2)),t}function Jn(e){var t=$n(e),n,r=new Array;for(n=0;2*n<t.length;++n)r[n]=parseInt(t.substring(2*n,2*n+2),16);return r}var e={},t="=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=function(e,t){var r=n.indexOf(e.charAt(t));if(r===-1)throw new Error;return r},i=function(e){e=""+e;var n,i,s,o=e.length;if(o===0)return e;if(o%4!==0)throw new Error;n=0,e.charAt(o-1)===t&&(n=1,e.charAt(o-2)===t&&(n=2),o-=4);var u=[];for(i=0;i<o;i+=4)s=r(e,i)<<18|r(e,i+1)<<12|r(e,i+2)<<6|r(e,i+3),u.push(String.fromCharCode(s>>16,s>>8&255,s&255));switch(n){case 1:s=r(e,i)<<18|r(e,i+1)<<12|r(e,i+2)<<6,u.push(String.fromCharCode(s>>16,s>>8&255));break;case 2:s=r(e,i)<<18|r(e,i+1)<<12,u.push(String.fromCharCode(s>>16))}return u.join("")},s=function(e,t){var n=e.charCodeAt(t);if(n>255)throw new Error;return n},o=function(e){if(arguments.length!==1)throw new SyntaxError("Not enough arguments");var r=t,i=n,o,u,a=[];e=""+e;var f=e.length-e.length%3;if(e.length===0)return e;for(o=0;o<f;o+=3)u=s(e,o)<<16|s(e,o+1)<<8|s(e,o+2),a.push(i.charAt(u>>18)),a.push(i.charAt(u>>12&63)),a.push(i.charAt(u>>6&63)),a.push(i.charAt(u&63));switch(e.length-f){case 1:u=s(e,o)<<16,a.push(i.charAt(u>>18)+i.charAt(u>>12&63)+r+r);break;case 2:u=s(e,o)<<16|s(e,o+1)<<8,a.push(i.charAt(u>>18)+i.charAt(u>>12&63)+i.charAt(u>>6&63)+r)}return a.join("")},u=i,a=o,f,l=0xdeadbeefcafe,c=(l&16777215)==15715070;h.prototype.am=function(e,t,n,r,i,s){var o=t&16383,u=t>>14;while(--s>=0){var a=this[e]&16383,f=this[e++]>>14,l=u*a+f*o;a=o*a+((l&16383)<<14)+n[r]+i,i=(a>>28)+(l>>14)+u*f,n[r++]=a&268435455}return i},f=28,h.prototype.DB=f,h.prototype.DM=(1<<f)-1,h.prototype.DV=1<<f;var d=52;h.prototype.FV=Math.pow(2,d),h.prototype.F1=d-f,h.prototype.F2=2*f-d;var m="0123456789abcdefghijklmnopqrstuvwxyz",g=new Array,y,b;y="0".charCodeAt(0);for(b=0;b<=9;++b)g[y++]=b;y="a".charCodeAt(0);for(b=10;b<36;++b)g[y++]=b;y="A".charCodeAt(0);for(b=10;b<36;++b)g[y++]=b;U.prototype.convert=z,U.prototype.revert=W,U.prototype.reduce=X,U.prototype.mulTo=V,U.prototype.sqrTo=$,K.prototype.convert=Q,K.prototype.revert=G,K.prototype.reduce=Y,K.prototype.mulTo=et,K.prototype.sqrTo=Z,h.prototype.copyTo=S,h.prototype.fromInt=x,h.prototype.fromString=N,h.prototype.clamp=C,h.prototype.dlShiftTo=D,h.prototype.drShiftTo=P,h.prototype.lShiftTo=H,h.prototype.rShiftTo=B,h.prototype.subTo=j,h.prototype.multiplyTo=F,h.prototype.squareTo=I,h.prototype.divRemTo=q,h.prototype.invDigit=J,h.prototype.isEven=tt,h.prototype.exp=nt,h.prototype.toString=k,h.prototype.negate=L,h.prototype.abs=A,h.prototype.compareTo=O,h.prototype.bitLength=_,h.prototype.mod=R,h.prototype.modPowInt=rt,h.ZERO=T(0),h.ONE=T(1),Jt.prototype.convert=Kt,Jt.prototype.revert=Kt,Jt.prototype.mulTo=Qt,Jt.prototype.sqrTo=Gt,tn.prototype.convert=nn,tn.prototype.revert=rn,tn.prototype.reduce=sn,tn.prototype.mulTo=un,tn.prototype.sqrTo=on;var hn=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],pn=(1<<26)/hn[hn.length-1];h.prototype.chunkSize=at,h.prototype.toRadix=lt,h.prototype.fromRadix=ct,h.prototype.fromNumber=ht,h.prototype.bitwiseTo=gt,h.prototype.changeBit=Pt,h.prototype.addTo=Ft,h.prototype.dMultiply=Vt,h.prototype.dAddOffset=$t,h.prototype.multiplyLowerTo=Zt,h.prototype.multiplyUpperTo=en,h.prototype.modInt=ln,h.prototype.millerRabin=vn,h.prototype.clone=it,h.prototype.intValue=st,h.prototype.byteValue=ot,h.prototype.shortValue=ut,h.prototype.signum=ft,h.prototype.toByteArray=pt,h.prototype.equals=dt,h.prototype.min=vt,h.prototype.max=mt,h.prototype.and=bt,h.prototype.or=Et,h.prototype.xor=xt,h.prototype.andNot=Nt,h.prototype.not=Ct,h.prototype.shiftLeft=kt,h.prototype.shiftRight=Lt,h.prototype.getLowestSetBit=Ot,h.prototype.bitCount=_t,h.prototype.testBit=Dt,h.prototype.setBit=Ht,h.prototype.clearBit=Bt,h.prototype.flipBit=jt,h.prototype.add=It,h.prototype.subtract=qt,h.prototype.multiply=Rt,h.prototype.divide=zt,h.prototype.remainder=Wt,h.prototype.divideAndRemainder=Xt,h.prototype.modPow=an,h.prototype.modInverse=cn,h.prototype.pow=Yt,h.prototype.gcd=fn,h.prototype.isProbablePrime=dn,h.prototype.square=Ut,mn.prototype.init=gn,mn.prototype.next=yn;var wn=256,En,Sn,xn;if(Sn==null){Sn=new Array,xn=0;var Cn;while(xn<wn)Cn=Math.floor(65536*Math.random()),Sn[xn++]=Cn>>>8,Sn[xn++]=Cn&255;xn=0,Nn()}An.prototype.nextBytes=Ln,Pn.prototype.doPublic=Bn,Pn.prototype.setPublic=Hn,Pn.prototype.encrypt=jn,Pn.prototype.doPrivate=Un,Pn.prototype.setPrivate=In,Pn.prototype.setPrivateEx=qn,Pn.prototype.generate=Rn,Pn.prototype.decrypt=zn;var Wn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xn="=";Pn.prototype.parseKey=function(e){e=this.prepareKey(e);var t=this.structure(),n=0,r=null,i=null,s=0;for(var o in t)r=t[o],r.hasOwnProperty("offset")&&(n+=r.offset*2),s=typeof r.length=="string"?this[r.length]:r.length,s*=2,i=e.substr(n,s),r.hasOwnProperty("type")&&(r.type=="int"?i=parseInt(i,16):r.type=="bigint"&&(i=On(i,16))),n+=s,this[o]=i},Pn.prototype.char64ToHex=function(e){var t="";e=u(e);for(var n=0;n<e.length;++n){var r=e.charCodeAt(n).toString(16);r.length===1&&(r="0"+r),t+=r}return t},Pn.prototype.prepareKey=function(e){e=e.replace(/^\s+|\s+$/g,"");var t=e.split(/\r?\n/);return t[0].substring(0,10)=="-----BEGIN"&&(t=t.slice(1,t.length-1)),e=t.join(""),this.char64ToHex(e)},Pn.prototype.getBaseKey=function(){var e="",t=this.structure(),n=null,r=null,i=0;for(var s in t)n=t[s],n.variable&&(r=this[s].toString(16),!(r.length%2)||(r="0"+r),n.hasOwnProperty("padded")&&n.padded&&(r="00"+r),i=r.length/2,i=i.toString(16),!(i.length%2)||(i="0"+i),n.hasOwnProperty("extraspace")&&(e+=i),e+=i,e+=r,e+="02");return e.slice(0,-2)},Pn.prototype.wordwrap=function(e,t){t=t||64;if(!e)return e;var n="(.{1,"+t+"})( +|$\n?)|(.{1,"+t+"})";return e.match(RegExp(n,"g")).join("\n")},Pn.prototype.getPrivateKey=function(){var e="-----BEGIN RSA PRIVATE KEY-----\n",t="3082025e02010002";return t+=this.getBaseKey(),e+=this.wordwrap(Vn(t))+"\n",e+="-----END RSA PRIVATE KEY-----",e},Pn.prototype.getPublicKey=function(){var e="-----BEGIN PUBLIC KEY-----\n",t="30819f300d06092a864886f70d010101050003818d0030818902";return t+=this.getBaseKey(),e+=this.wordwrap(Vn(t))+"\n",e+="-----END PUBLIC KEY-----",e};var Kn=function(e){Pn.call(this),e&&this.parseKey(e)};Kn.prototype=new Pn,Kn.prototype.constructor=Kn,Kn.prototype.structure=function(){return{header:{length:4},versionlength:{length:1,offset:1,type:"int"},version:{length:"versionlength",type:"int"},n_length:{length:1,offset:2,type:"int"},n:{length:"n_length",type:"bigint",variable:!0,padded:!0,extraspace:!0},e_length:{length:1,offset:1,type:"int"},e:{length:"e_length",type:"int",variable:!0},d_length:{length:1,offset:2,type:"int"},d:{length:"d_length",type:"bigint",variable:!0,padded:!0,extraspace:!0},p_length:{length:1,offset:1,type:"int"},p:{length:"p_length",type:"bigint",variable:!0,padded:!0},q_length:{length:1,offset:1,type:"int"},q:{length:"q_length",type:"bigint",variable:!0,padded:!0},dmp1_length:{length:1,offset:1,type:"int"},dmp1:{length:"dmp1_length",type:"bigint",variable:!0},dmq1_length:{length:1,offset:1,type:"int"},dmq1:{length:"dmq1_length",type:"bigint",variable:!0,padded:!0},coeff_length:{length:1,offset:1,type:"int"},coeff:{length:"coeff_length",type:"bigint",variable:!0,padded:!0}}};var Qn=function(e){Pn.call(this),e&&(typeof e=="string"?this.parseKey(e):e.hasOwnProperty("n")&&e.hasOwnProperty("e")&&(this.n=e.n,this.e=e.e))};Qn.prototype=new Pn,Qn.prototype.constructor=Qn,Qn.prototype.structure=function(){return{header:{length:25},n_length:{length:1,offset:2,type:"int"},n:{length:"n_length",type:"bigint",variable:!0,padded:!0,extraspace:!0},e_length:{length:1,offset:1,type:"int"},e:{length:"e_length",type:"int",variable:!0}}};var Gn=function(){this.privkey=null,this.pubkey=null};return Gn.prototype.setPrivateKey=function(e){this.privkey=new Kn(e),this.pubkey=new Qn(this.privkey)},Gn.prototype.setPublicKey=function(e){this.pubkey=new Qn(e)},Gn.prototype.decrypt=function(e){return this.privkey?this.privkey.decrypt($n(e)):!1},Gn.prototype.encrypt=function(e){var t=this.pubkey||this.privkey;return t?Vn(t.encrypt(e)):!1},Gn.prototype.getPrivateKey=function(){return this.privkey||(this.privkey=new Kn,this.privkey.generate(1024,"010001"),this.pubkey=new Qn(this.privkey)),this.privkey.getPrivateKey()},Gn.prototype.getPublicKey=function(){return this.pubkey||(this.pubkey=new Qn,this.pubkey.generate(1024,"010001")),this.pubkey.getPublicKey()},function(e){var t=new Gn;return t.setPublicKey(Constants.RSA_PUBLIC_KEY),t.encrypt(e)}}(),n={uid:
function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getString:function(e,t){var n=String(e);return e==null?t||"na":n},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return typeof e!="undefined"&&e!=null&&typeof e.length!="undefined"&&e.length>0},indexOf:function(e,t){var r=-1;return n.forEach(t,function(t,n){t==e&&(r=n)}),r},forEach:function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:null;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var i=0,s=e.length;i<s;i++)t.call(n,e[i],i)}}catch(o){}},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0},size:function(e){var t=0,n;for(var n in e)e.hasOwnProperty(n)&&t++;return t},log:function(e,t){if(typeof t!="undefined"&&t){var n=new Date,r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log(r,e)}},isTrue:function(e){return typeof e=="undefined"?!1:typeof e=="string"?(e=e.toLowerCase(),e==="true"||e==="1"||e==="on"):e?!0:!1},toString:function(e){if(typeof e=="undefined")return"undefined";if(typeof e=="string")return e;if(Object.prototype.toString.call(e)==="[object Array]")return e.join(",");if(n.size(e)>0){var t="";for(var r in e)e.hasOwnProperty(r)&&(t+=r+":"+e[r]+";");return t}return e.toString()},exists:function(e){return typeof e!="undefined"&&e!=null},firstGreaterThan0:function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(n>0)return n}return 0},cloneObject:function(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},safeGet:function(e,t){return t=n.exists(t)?t:"",n.exists(e)?e:t},md5:e,encrypt:t,getBrowserName:function(){var e=navigator.userAgent,t=navigator.appName,n,r,i;return(r=e.indexOf("Opera"))!=-1?t="Opera":(r=e.indexOf("MSIE"))!=-1?t="Internet Explorer":(r=e.indexOf("Android"))!=-1?t="Android":(r=e.indexOf("Chrome"))!=-1?t="Chrome":(r=e.indexOf("Safari"))!=-1?t="Safari":(r=e.indexOf("Firefox"))!=-1?t="Firefox":(r=e.indexOf("Windows NT"))!=-1?t="Internet Explorer":(n=e.lastIndexOf(" ")+1)<(r=e.lastIndexOf("/"))&&(t=e.substring(n,r),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName)),t},getBrowserFullVersion:function(){var e=navigator.userAgent,t=""+parseFloat(navigator.appVersion),n=parseInt(navigator.appVersion,10),r,i,s;return(i=e.indexOf("Opera"))!=-1?(t=e.substring(i+6),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("MSIE"))!=-1?t=e.substring(i+5):(i=e.indexOf("Android"))!=-1?t=e.substring(i+8):(i=e.indexOf("Chrome"))!=-1?t=e.substring(i+7):(i=e.indexOf("Safari"))!=-1?(t=e.substring(i+7),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("Firefox"))!=-1?t=e.substring(i+8):(i=e.indexOf("Windows NT"))!=-1?(i=e.indexOf("rv:"),t=e.substring(i+3)):(r=e.lastIndexOf(" ")+1)<(i=e.lastIndexOf("/"))&&(t=e.substring(i+1)),(s=t.indexOf(";"))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(" "))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(")"))!=-1&&(t=t.substring(0,s)),n=parseInt(""+t,10),isNaN(n)&&(t=""+parseFloat(navigator.appVersion)),t}};return n}(),t=function(){var t="cs_",n=function(){var n=this,r=typeof localStorage!="undefined"?localStorage:{};e.extend(this,{get:function(e){return r[t+e]},set:function(e,n){r[t+e]=n},has:function(e){return t+e in r},remove:function(e){delete r[t+e]},clear:function(){for(var e in r)r.hasOwnProperty(e)&&delete r[e]}})};return n}(),n=function(e,t){var n=new Image;n.onload=function(){t&&t(200)},n.onerror=function(){t&&t()},n.src=e},r=function(e,t){t&&setTimeout(t,0)},i=function(e,t,n){n&&setTimeout(n,0)},s=function(){return{dir:function(e){return null},append:function(e,t,n){},write:function(e,t,n){},deleteFile:function(e,t){return!1},read:function(e,t){return null}}}(),o=function(e,t){typeof engine!="undefined"&&t&&setTimeout(t,0);var n=engine.createHttpClient(),r=n.createRequest("GET",e,null);r.start(),t&&setTimeout(t,0)},u=function(){var e={PLATFORM:"generic",httpGet:n,httpPost:i,Storage:t,IO:s,getCrossPublisherId:function(){return null},getAppName:function(){return Constants.UNKNOWN_VALUE},getAppVersion:function(e){return Constants.UNKNOWN_VALUE},getVisitorId:function(){return this.getDeviceName()+ +(new Date)+~~(Math.random()*1e3)},getVisitorIdSuffix:function(){return"72"},getDeviceName:function(){return""},getPlatformVersion:function(){return""},getPlatformName:function(){return"js"},getRuntimeName:function(){return""},getRuntimeVersion:function(){return""},getResolution:function(){return""},getLanguage:function(){return""},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},isCrossPublisherIdChanged:function(){return!1}};return e}(),a=function(){function f(){return typeof engine!="undefined"&&typeof engine.stats!="undefined"}function l(){return e.isNotEmpty(engine.stats.device.id)?engine.stats.device.id:e.isNotEmpty(engine.stats.network.mac)?engine.stats.network.mac:null}function c(){if(r==null){var e=l();e!=null?(r=e,u="31",a=e):(r=+(new Date)+~~(Math.random()*1e3),u="72",a=null)}}var n=this,r=null,u=null,a=null;return{PLATFORM:"trilithium",httpGet:o,httpPost:i,Storage:t,IO:s,getCrossPublisherId:function(){return c(),a},getAppName:function(){return e.isNotEmpty(engine.stats.application.name)?engine.stats.application.name:Constants.UNKNOWN_VALUE},getAppVersion:function(t){return e.isNotEmpty(engine.stats.application.version)?engine.stats.application.version:Constants.UNKNOWN_VALUE},getVisitorId:function(){return c(),r},getVisitorIdSuffix:function(){return u},getDeviceName:function(){return e.safeGet(engine.stats.device.platform,"")},getPlatformVersion:function(){return e.safeGet(engine.stats.device.version,"")},getPlatformName:function(){return"js"},getRuntimeName:function(){return"trilithium"},getRuntimeVersion:function(){return""},getResolution:function(){return typeof screen!="undefined"&&typeof screen.height!="undefined"&&typeof screen.width!="undefined"?screen.height+"x"+screen.width:""},getLanguage:function(){return""},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},isCompatible:f}}();u.autoSelect=function(){a.isCompatible()&&e.extend(u,a)};var f=typeof window!="undefined"&&typeof document!="undefined",l,c;f?(l=window,c=document):(l={},c={location:{href:""},title:"",URL:"",referrer:"",cookie:""});var e=e||{};e.filterMap=function(t,n){for(var r in t)e.indexOf(r,n)==-1&&delete t[r]},e.getKeys=function(e,t){var n,r=[];for(n in e)(!t||t.test(n))&&e.hasOwnProperty(n)&&(r[r.length]=n);return r};var d=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),m=function(){var e=[d.END,d.PLAY,d.PAUSE,d.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),g={ADPLAY:d.AD_PLAY,ADPAUSE:d.AD_PAUSE,ADEND:d.AD_END,ADCLICK:d.AD_CLICK},y={STREAMSENSE_VERSION:"4.1410.01",DEFAULT_PLAYERNAME:"streamsense",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",LABELS_ORDER:["c1","c2","ns_site","ns_vsite","ns_ap_an","ns_ap_pn","ns_ap_pv","c12","name","ns_ak","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ns_ap_sv","ns_type","ns_radio","ns_nc","ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_c12m","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ns_st_pe","ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_ct","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","c3","c4","c5","c6","c10","c11","c12","c13","c14","c15","c16","c7","c8","c9"]},b=function(){var t=function(){function l(e,t){var n=t[e];n!=null&&(f[e]=n)}var t=this,n=0,r=0,i=0,s=0,o=0,u=0,a,f;e.extend(this,{reset:function(n){n!=null&&n.length>0?e.filterMap(f,n):f={},f.hasOwnProperty("ns_st_cl")||(f.ns_st_cl="0"),f.hasOwnProperty("ns_st_pn")||(f.ns_st_pn="1"),f.hasOwnProperty("ns_st_tp")||(f.ns_st_tp="1"),t.setPauses(0),t.setStarts(0),t.setBufferingTime(0),t.setBufferingTimestamp(-1),t.setPlaybackTime(0),t.setPlaybackTimestamp(-1)},setLabels:function(n,r){n!=null&&e.extend(f,n),t.setRegisters(f,r)},getLabels:function(){return f},setLabel:function(e,n){var r={};r[e]=n,t.setLabels(r,null)},getLabel:function(e){return f[e]},getClipId:function(){return(typeof a=="undefined"||a==null)&&t.setClipId("1"),a},setClipId:function(e){a=e},setRegisters:function(e,s){var u=e.ns_st_cn;u!=null&&(t.setClipId(u),delete e.ns_st_cn),u=e.ns_st_bt,u!=null&&(i=Number(u),delete e.ns_st_bt),l("ns_st_cl",e),l("ns_st_pn",e),l("ns_st_tp",e),l("ns_st_ub",e),l("ns_st_br",e);if(s==m.PLAYING||s==null)u=e.ns_st_sq,u!=null&&(r=Number(u),delete e.ns_st_sq);s!=m.BUFFERING&&(u=e.ns_st_pt,u!=null&&(o=Number(u),delete e.ns_st_pt));if(s==m.PAUSED||s==m.IDLE||s==null)u=e.ns_st_pc,u!=null&&(n=Number(u),delete e.ns_st_pc)},createLabels:function(i,s){var o=s||{};o.ns_st_cn=t.getClipId(),o.ns_st_bt=String(t.getBufferingTime());if(i==d.PLAY||i==null)o.ns_st_sq=String(r);if(i==d.PAUSE||i==d.END||i==d.KEEP_ALIVE||i==d.HEART_BEAT||i==null)o.ns_st_pt=String(t.getPlaybackTime()),o.ns_st_pc=String(n);return e.extend(o,t.getLabels()),o},incrementPauses:function(){n++},incrementStarts:function(){r++},getBufferingTime:function(){var e=i;return s>=0&&(e+=+(new Date)-s),e},setBufferingTime:function(e){i=e},getPlaybackTime:function(){var e=o;return u>=0&&(e+=+(new Date)-u),e},setPlaybackTime:function(e){o=e},getPlaybackTimestamp:function(){return u},setPlaybackTimestamp:function(e){u=e},getBufferingTimestamp:function(){return s},setBufferingTimestamp:function(e){s=e},getPauses:function(){return n},setPauses:function(e){n=e},getStarts:function(){return r},setStarts:function(e){r=e}}),f={},t.reset()};return t}(),w=function(){var t=function(){var t=this,n=null,r,i=0,s=0,o=0,u=0,a=0,f,l=0,c=!1;e.extend(this,{reset:function(n){n!=null&&n.length>0?e.filterMap(f,n):f={},t.setPlaylistId(+(new Date)+"_"+l),t.setBufferingTime(0),t.setPlaybackTime(0),t.setPauses(0),t.setStarts(0),t.setRebufferCount(0),c=!1},setLabels:function(n,r){n!=null&&e.extend(f,n),t.setRegisters(f,r)},getLabels:function(){return f},setLabel:function(e,n){var r={};r[e]=n,t.setLabels(r,null)},getLabel:function(e){return f[e]},getClip:function(){return n},getPlaylistId:function(){return r},setPlaylistId:function(e){r=e},setRegisters:function(e,t){var n=e.ns_st_sp;n!=null&&(i=Number(n),delete e.ns_st_sp),n=e.ns_st_bc,n!=null&&(o=Number(n),delete e.ns_st_bc),n=e.ns_st_bp,n!=null&&(u=Number(n),delete e.ns_st_bp),n=e.ns_st_id,n!=null&&(r=n,delete e.ns_st_id),t!=m.BUFFERING&&(n=e.ns_st_pa,n!=null&&(a=Number(n),delete e.ns_st_pa));if(t==m.PAUSED||t==m.IDLE||t==null)n=e.ns_st_pp,n!=null&&(s=Number(n),delete e.ns_st_pp)},createLabels:function(n,u){var a=u||{};a.ns_st_bp=String(t.getBufferingTime()),a.ns_st_sp=String(i),a.ns_st_id=String(r),o>0&&(a.ns_st_bc=String(o));if(n==d.PAUSE||n==d.END||n==d.KEEP_ALIVE||n==d.HEART_BEAT||n==null)a.ns_st_pa=String(t.getPlaybackTime()),a.ns_st_pp=String(s);if(n==d.PLAY||n==null)t.didFirstPlayOccurred()||(a.ns_st_pb="1",t.setFirstPlayOccurred(!0));return e.extend(a,t.getLabels()),a},incrementStarts:function(){i++},incrementPauses:function(){s++,n.incrementPauses()},setPlaylistCounter:function(e){l=e},incrementPlaylistCounter:function(){l++},addPlaybackTime:function(e){if(n.getPlaybackTimestamp()>=0){var r=e-n.getPlaybackTimestamp();n.setPlaybackTimestamp(-1),n.setPlaybackTime(n.getPlaybackTime()+r),t.setPlaybackTime(t.getPlaybackTime()+r)}},addBufferingTime:function(e){if(n.getBufferingTimestamp()>=0){var r=e-n.getBufferingTimestamp();n.setBufferingTimestamp(-1),n.setBufferingTime(n.getBufferingTime()+r),t.setBufferingTime(t.getBufferingTime()+r)}},getBufferingTime:function(){var e=u;return n.getBufferingTimestamp()>=0&&(e+=+(new Date)-n.getBufferingTimestamp()),e},setBufferingTime:function(e){u=e},getPlaybackTime:function(){var e=a;return n.getPlaybackTimestamp()>=0&&(e+=+(new Date)-n.getPlaybackTimestamp()),e},setPlaybackTime:function(e){a=e},getStarts:function(){return i},setStarts:function(e){i=e},getPauses:function(){return s},setPauses:function(e){s=e},getRebufferCount:function(){return o},incrementRebufferCount:function(){o++},setRebufferCount:function(e){o=e},didFirstPlayOccurred:function(){return c},setFirstPlayOccurred:function(e){c=e}}),n=new b,f={},t.reset()};return t}(),E=function(){var t=function(t,n){function q(e){var t=0;if(k!=null)for(var n=0;n<k.length;n++){var r=k[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function R(){X();var e=q(b.getClip().getPlaybackTime());if(e>0){var t=O>0?O:e;C=setTimeout(W,t)}O=0}function U(){X();var e=q(b.getClip().getPlaybackTime());O=e-b.getClip().getPlaybackTime()%e,C!=null&&X()}function z(){O=0,_=0,M=0}function W(){M++;var e=mt(d.HEART_BEAT,null);rt(e),O=0,R()}function X(){C!=null&&(clearTimeout(C),C=null)}function V(){J(),N=setTimeout($,L)}function $(){var e=mt(d.KEEP_ALIVE,null);rt(e),g++,V()}function J(){N!=null&&(clearTimeout(N),N=null)}function K(){G(),r.isPauseOnBufferingEnabled()&&at(m.PAUSED)&&(x=setTimeout(Q,A))}function Q(){if(P==m.PLAYING){b.incrementRebufferCount(),b.incrementPauses();var e=mt(d.PAUSE,null);rt(e),g++,P=m.PAUSED}}function G(){x!=null&&(clearTimeout(x),x=null)}function Y(e){return e==m.PLAYING||e==m.PAUSED}function Z(){l&&(clearTimeout(l),l=null)}function et(e){return e==d.PLAY?m.PLAYING:e==d.PAUSE?m.PAUSED:e==d.BUFFER?m.BUFFERING:e==d.END?m.IDLE:null}function tt(t,n,r){Z();if(r)l=setTimeout(function(e,t){return function(){tt(e,t)}}(t,n),r);else if(ct(t)){var i=pt(),s=a,o=lt(n),u=s>=0?o-s:0;ot(pt(),n),ut(t,n),dt(pt()),ht(t);for(var f=0,c=F.length;f<c;f++)F[f](i,t,n,u);nt(n),b.setRegisters(n,t),b.getClip().setRegisters(n,t);var h=mt(m.toEventType(t),n);e.extend(h,n),at(v)&&(rt(h),P=v,g++)}}function nt(e){var t=e.ns_st_mp;t!=null&&(H=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(B=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(g=Number(t),delete e.ns_st_ec)}function rt(e,t){t===undefined&&(t=!0),t&&st(e);var n=r.getPixelURL();if(E){if(!it()){var i=I.am,s=I.et,o=i.newApplicationMeasurement(E,s.HIDDEN,e,n);E.getQueue().offer(o)}}else n&&u.httpGet(p(n,e))}function it(){var e=E.getAppContext(),t=E.getSalt(),n=E.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function st(t){j=mt(null),e.extend(j,t)}function ot(t,n){var r=lt(n);if(t==m.PLAYING)b.addPlaybackTime(r),U(),J();else if(t==m.BUFFERING)b.addBufferingTime(r),G();else if(t==m.IDLE){var i=e.getKeys(b.getClip().getLabels());b.getClip().reset(i)}}function ut(e,t){var n=lt(t),r=ft(t);f=r,e==m.PLAYING?(R(),V(),b.getClip().setPlaybackTimestamp(n),at(e)&&(b.getClip().incrementStarts(),b.getStarts()<1&&b.setStarts(1))):e==m.PAUSED?at(e)&&b.incrementPauses():e==m.BUFFERING?(b.getClip().setBufferingTimestamp(n),T&&K()):e==m.IDLE&&z()}function at(e){return e!=m.PAUSED&&e!=m.IDLE||P!=m.IDLE&&P!=null?e!=m.BUFFERING&&P!=e:!1}function ft(t){var n=-1;return t.hasOwnProperty("ns_st_po")&&(n=e.getInteger(t.ns_st_po)),n}function lt(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function ct(e){return e!=null&&pt()!=e}function ht(e){v=e,a=+(new Date)}function pt(){return v}function dt(e){c=e}function vt(){return c}function mt(){var t,n;arguments.length==1?(t=m.toEventType(v),n=arguments[0]):(t=arguments[0],n=arguments[1]);var i={};if(typeof document!="undefined"){var s=document;i.c7=s.URL,i.c8=s.title,i.c9=s.referrer}return n!=null&&e.extend(i,n),i.hasOwnProperty("ns_ts")||(i.ns_ts=String(+(new Date))),t!=null&&!i.hasOwnProperty("ns_st_ev")&&(i.ns_st_ev=d.toString(t)),r.isPersistentLabelsShared()&&E&&e.extend(i,E.getLabels()),e.extend(i,r.getLabels()),gt(t,i),b.createLabels(t,i),b.getClip().createLabels(t,i),i.hasOwnProperty("ns_st_mp")||(i.ns_st_mp=H),i.hasOwnProperty("ns_st_mv")||(i.ns_st_mv=B),i.hasOwnProperty("ns_st_ub")||(i.ns_st_ub="0"),i.hasOwnProperty("ns_st_br")||(i.ns_st_br="0"),i.hasOwnProperty("ns_st_pn")||(i.ns_st_pn="1"),i.hasOwnProperty("ns_st_tp")||(i.ns_st_tp="1"),i.hasOwnProperty("ns_st_it")||(i.ns_st_it="c"),i.ns_st_sv=y.STREAMSENSE_VERSION,i.ns_type="hidden",i}function gt(t,n){var r=n||{};r.ns_st_ec=String(g);if(!r.hasOwnProperty("ns_st_po")){var i=f,s=lt(r);if(t==d.PLAY||t==d.KEEP_ALIVE||t==d.HEART_BEAT||t==null&&v==m.PLAYING)i+=s-b.getClip().getPlaybackTimestamp();r.ns_st_po=e.getInteger(i)}return t==d.HEART_BEAT&&(r.ns_st_hc=String(M)),r}function yt(e){var t=lt(e);t<0&&(e.ns_ts=String(+(new Date)))}function bt(e,t,n){t=t||{},t.ns_st_ad=1,e>=d.AD_PLAY&&e<=d.AD_CLICK&&r.notify(e,t,n)}function wt(e,t){r.notify(d.CUSTOM,e,t)}var r=this,i=500,s,o=null,a=0,f=0,l,c,v,g=0,b=null,E,S=!0,x,T=!0,N,C,k=y.DEFAULT_HEARTBEAT_INTERVAL,L=y.DEFAULT_KEEP_ALIVE_INTERVAL,A=y.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,O=0,M=0,_=0,D=!1,P,H,B,j,F,I={};u.autoSelect(),e.extend(this,{reset:function(t){b.reset(t),b.setPlaylistCounter(0),b.setPlaylistId(+(new Date)+"_1"),b.getClip().reset(t),t!=null&&!t.isEmpty()?e.filterMap(s,t):s={},g=1,M=0,U(),z(),J(),G(),Z(),v=m.IDLE,c=null,a=-1,P=null,H=y.DEFAULT_PLAYERNAME,B=y.STREAMSENSE_VERSION,j=null},setPauseOnBufferingInterval:function(e){A=e},getPauseOnBufferingInterval:function(){return A},setKeepAliveInterval:function(e){L=e},getKeepAliveInterval:function(){return L},setHeartbeatIntervals:function(e){k=e},notify:function(){var t,n,s,o;n=arguments[0],arguments.length==3?(s=arguments[1],o=arguments[2]):(s={},o=arguments[1]),t=et(n);var u=e.extend({},s);yt(u),u.hasOwnProperty("ns_st_po")||(u.ns_st_po=e.getInteger(o).toString());if(n==d.PLAY||n==d.PAUSE||n==d.BUFFER||n==d.END)r.isPausePlaySwitchDelayEnabled()&&Y(v)&&Y(t)&&(v!=m.PLAYING||t!=m.PAUSED||!!l)?tt(t,u,i):tt(t,u);else{var a=mt(n,u);e.extend(a,u),rt(a,!1),g++}},getLabels:function(){return s},getState:function(){return v},setLabels:function(t){t!=null&&(s==null?s=t:e.extend(s,t))},getLabel:function(e){return s[e]},setLabel:function(e,t){t==null?delete s[e]:s[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=decodeURIComponent||unescape,n=e.indexOf("?");if(n>=0){if(n<e.length-1){var i=e.substring(n+1).split("&");for(var s=0,u=i.length;s<u;s++){var a=i[s],f=a.split("=");f.length==2?r.setLabel(f[0],t(f[1])):f.length==1&&r.setLabel(y.PAGE_NAME_LABEL,t(f[0]))}e=e.substring(0,n+1)}}else e+="?";return o=e,o},getPixelURL:function(){return o?o:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?o=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?o=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPersistentLabelsShared:function(){return S},setPersistentLabelsShared:function(e){S=e},isPauseOnBufferingEnabled:function(){return T},setPauseOnBufferingEnabled:function(e){T=e},isPausePlaySwitchDelayEnabled:function(){return D},setPausePlaySwitchDelayEnabled:function(e){D=e},setPausePlaySwitchDelay:function(e){e&&e>0&&(i=e)},getPausePlaySwitchDelay:function(){return i},setClip:function(e,t){var n=!1;return v==m.IDLE&&(b.getClip().reset(),b.getClip().setLabels(e,null),t&&b.incrementStarts(),n=!0),n},setPlaylist:function(e){var t=!1;return v==m.IDLE&&(b.incrementPlaylistCounter(),b.reset(),b.getClip().reset(),b.setLabels(e,null),t=!0),t},importState:function(t){reset();var n=e.extend({},t);b.setRegisters(n,null),b.getClip().setRegisters(n,null),nt(n),g++},exportState:function(){return j},getVersion:function(){return y.STREAMSENSE_VERSION},addListener:function(e){F.push(e)},removeListener:function(t){F.splice(e.indexOf(t,F),1)},getClip:function(){return b.getClip()},getPlaylist:function(){return b}}),e.extend(this,{adNotify:bt,customNotify:wt,viewNotify:function(e,t){e=e||r.getPixelURL(),e&&h(e,t)}}),ns_.comScore&&(I=ns_.comScore.exports,E=I.c()),s={},g=1,v=m.IDLE,b=new w,x=null,T=!0,C=null,M=0,z(),N=null,l=null,D=!1,P=null,f=0,F=[],r.reset(),t&&r.setLabels(t),n&&r.setPixelURL(n)};return function(t){function s(e,t){return n[i]||u(e,t)}function o(){i=-1;for(var e=0;e<=r;e++)if(n.hasOwnProperty(e)){i=e;break}return ns_.StreamSense.activeIndex=i,i}function u(e,t){return e=e||null,t=t||null,e&&typeof e=="object"&&(t=e,e=null),n[++r]=new ns_.StreamSense(t,e),o(),n[r]}function a(){var e=!1,t=i;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))t=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var r in n)if(n[r]===arguments[0]){t=r;break}return n.hasOwnProperty(t)&&(e=n[t],delete n[t],e.reset(),o()),e}function f(e){return e=e||{},s().setPlaylist(e),s().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),s().setClip(e,n),s().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},s().notify(e,t,n))}function h(e){typeof e!="undefined"&&s().setLabels(e)}function p(){return s().getLabels()}function d(e){typeof e!="undefined"&&s().getPlaylist().setLabels(e)}function v(){return s().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&s().getClip().setLabels(e)}function g(){return s().getClip().getLabels()}function y(e){return s().reset(e||{})}function b(e){return s().getPlaylist().reset(e||{})}function w(e){return s().getClip().reset(e||{})}function E(e){return e=e||{},s().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),s().customNotify(e,t)}function x(){return s().exportState()}function T(e){s().importState(e)}var n={},r=-1,i=-1;e.extend(t,{activeIndex:i,newInstance:u,"new":u,destroyInstance:a,destroy:a,newPlaylist:f,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return E.AdEvents=g,E.PlayerEvents=d,ns_.StreamingTag=ns_.StreamingTag||function(){var t=function(){var t=function(t){function f(){if(e.exists(t)&&e.exists(t.customerC2)){var n=t.secure?"https://sb":"http"+(document.location.href.charAt(4)=="s"?"s://sb":"://b");a.setPixelURL(n+".scorecardresearch.com/p?c1=2"),a.setLabel("c2",t.customerC2),a.setLabel("ns_st_it","r")}}function l(t){return e.exists(t)||(t={}),e.exists(t.ns_st_ci)||(t.ns_st_ci="0"),e.exists(t.c3)||(t.c3="*null"),e.exists(t.c4)||(t.c4="*null"),e.exists(t.c6)||(t.c6="*null"),t}function c(e){return i>0&&e>=i?s+=e-i:s=0,s}function h(e){a.getState()!=m.IDLE&&a.getState()!=m.PAUSED?a.notify(d.END,c(e)):a.getState()==m.PAUSED&&a.notify(d.END,s)}function p(e){return v("ns_st_ci",o,e)&&v("c3",o,e)&&v("c4",o,e)&&v("c6",o,e)}function v(t,n,r){if(e.exists(t)&&e.exists(n)&&e.exists(r)){var i=n[t],s=r[t];return e.exists(i)&&e.exists(s)&&i===s}return!1}function g(e,t){h(e),r++,a.setClip({ns_st_cn:r,ns_st_pn:"1",ns_st_ct:"vc",ns_st_tp:"0"}),a.getClip().setLabels(t),o=t,i=e,s=0,a.notify(d.PLAY,s)}var n=this,r=0,i=0,s=0,o=null,u=!1,a=new E;e.extend(this,{playAdvertisement:function(){var e=+(new Date);h(e),r++;var t=l(null);t.ns_st_cn=r,t.ns_st_pn="1",t.ns_st_ct="va",t.ns_st_tp="1",t.ns_st_ad="1",a.setClip(t),s=0,a.notify(d.PLAY,s),i=e,u=!1},playContentPart:function(e){var t=+(new Date);e=l(e),u?p(e)?(a.getClip().setLabels(e),a.getState()!=m.PLAYING&&(i=t,a.notify(d.PLAY,s))):g(t,e):g(t,e),u=!0},stop:function(){var e=+(new Date);a.notify(d.PAUSE,c(e))}}),f()};return function(e){}(t),t}();return t}(),E}();;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
;(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
	if ($.fn.cycle.debug)
		log(s);
}		
function log() {
	/*global console */
	if (window.console && console.log)
		console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
};


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;
		this.cycleStop = 0; // issue #108

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	if (!opts)
		return;
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop === undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			if (opts.elements)
				$(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(cont, opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			if (typeof arg2 == 'string') 
				opts.oneTimeFx = arg2;
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		}
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
}

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
}

// unbind event handlers
function destroy(cont, opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	$(cont).unbind('mouseenter.cycle mouseleave.cycle');
	if (opts.destroy) // callback
		opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide !== undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z);
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
				"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
			});
		});
	}
		
	// stretch container
	var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (opts.containerResize && maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
		if (opts.containerResizeHeight && maxh > 0)
			$cont.css({height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.bind('mouseenter.cycle', function(){
			pauseFlag = true;
			this.cyclePause++;
			triggerPause(cont, true);
		}).bind('mouseleave.cycle', function(){
				if (pauseFlag)
					this.cyclePause--;
				triggerPause(cont, true);
		});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loading) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (var p in txs) {
			if (txs.hasOwnProperty(p)) {
				tx = txs[p];
				if (txs.hasOwnProperty(p) && $.isFunction(tx))
					opts.fxs.push(p);
			}
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
		clearTimeout(p.cycleTimeout);
	}

	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}


	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		var roll;
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
	}
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
}

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	};
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				if (pauseFlag)
					cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	}
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	}
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
    activePagerClass: 'activeSlide', // class name used for the active pager link
    after:            null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn:           null,     // properties that define how the slide animates in
    animInDelay:      0,        // allows delay before next slide transitions in	
    animOut:          null,     // properties that define how the slide animates out
    animOutDelay:     0,        // allows delay before current slide transitions out
    aspect:           false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop:         0,        // true to end slideshow after X transitions (where X == slide count)
    autostopCount:    0,        // number of transitions (optionally used with autostop to define X)
    backwards:        false,    // true to start slideshow at last slide and move backwards through the stack
    before:           null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center:           null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype:        !$.support.opacity,  // true if clearType corrections should be applied (for IE)
    cleartypeNoBg:    false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize:  1,        // resize container to fit largest slide
    containerResizeHeight:  0,  // resize containers height to fit the largest slide but leave the width dynamic
    continuous:       0,        // true to start next transition immediately after current one completes
    cssAfter:         null,     // properties that defined the state of the slide after transitioning out
    cssBefore:        null,     // properties that define the initial state of the slide before transitioning in
    delay:            0,        // additional delay (in ms) for first transition (hint: can be negative)
    easeIn:           null,     // easing for "in" transition
    easeOut:          null,     // easing for "out" transition
    easing:           null,     // easing method for both in and out transitions
    end:              null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent:      0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit:              0,        // force slides to fit container
    fx:               'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn:             null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height:           'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump:      true,     // causes manual transition to stop an active transition instead of being ignored
    metaAttr:         'cycle',  // data- attribute that holds the option data for the slideshow
    next:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap:           0,        // true to prevent slideshow from wrapping
    onPagerEvent:     null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent:  null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager:            null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent:       'click.cycle', // name of event which drives the pager navigation
    pause:            0,        // true to enable "pause on hover"
    pauseOnPagerHover: 0,       // true to pause when hovering over pager link
    prev:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent:    'click.cycle',// event which drives the manual transition to the previous or next slide
    random:           0,        // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout:   250,      // ms delay for requeue
    rev:              0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle:          null,     // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr:        null,     // expression for selecting slides (if something other than all children is required)
    slideResize:      1,        // force slide width/height to fixed size before every transition
    speed:            1000,     // speed of the transition (any valid fx speed value)
    speedIn:          null,     // speed of the 'in' transition
    speedOut:         null,     // speed of the 'out' transition
    startingSlide:    undefined,// zero-based index of the first slide to be displayed
    sync:             1,        // true if in/out transitions should occur simultaneously
    timeout:          4000,     // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn:        null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width:            null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
"use strict";

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++) {
				if (fwd)
					opts.els.push(opts.els.shift());
				else
					opts.els.unshift(opts.els.pop());
			}
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssAfter.display = '';
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);;
(function ($, Drupal, window, document, undefined) {

  $(document).ready(function () {

    // update width of one player
    function video_player_resize(player) {
      var carousel = player.find('.carousel-inner');
      carousel.height(
        carousel.width() *
        0.7 * // items are 70% width
        (9 / 16) * // aspect ratio
        (1 / 2) * // 2 items per line
        0.96 // each block is 48% width
      );
    }

    // update widths of all players
    function video_player_resize_all() {
      $('.video-player').each(function (i, e) {
        video_player_resize($(e));
      });
    }

    // trigger now and on resize
    video_player_resize_all();
    $(window).resize(function () {
      video_player_resize_all();
    });

    // attach actions to the prev/next links
    $('.video-player').each(function (i, e) {
      var carousel = $(e).find('.carousel');
      carousel.find('.carousel-control').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('left')) {
          carousel.carousel('prev');
        }
        if ($(this).hasClass('right')) {
          carousel.carousel('next');
        }
      });
    });


    /**
     * Trigger handling.
     *
     * @type {*|HTMLElement}
     */
    $(document).on("jwplayer.info", "body", function (e, rel, data) {
      $('.' + rel).each(function (i, element) {
        // video player
        if ($(element).hasClass('video-player')) {
          $(element).find('.video-player-title').html(data['title']);
        }

        // video-player-hero
        if ($(element).hasClass('video-player-hero')) {
          if (!$(element).hasClass('fixed-title')) {
            $(element).find('.video-player-hero-content-title').html('<a href="' + data['link'] + '">' + data['title'] + '</a>');
          }
          if (!$(element).hasClass('fixed-description')) {
            $(element).find('.video-player-hero-content-description').html(data['description']);
          }
        }
      });
    });

    // video-player-hero
    $(document).on("click", ".video-player-hero a.video_item", function (e) {
      e.preventDefault();

      var rel = $(this).attr('rel'), id = $(this).attr('id'), parent = $(this).parents('.video-player-hero');

      // selected
      parent.find('.video_item[rel="' + rel + '"]').removeClass('selected');
      $(this).addClass('selected');

      // jwUseVideoInfo
      jQuery('body').trigger('jwplayer.info', [rel, jwGetVideoInfo(id)]);

      // load video
      jwLoadVideoId(rel, id);

      // scroll
      $('html, body').animate({scrollTop: $('.' + rel).offset().top}, 'slow');
    });

  });

})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 *
 * CTools flexible AJAX responder object.
 */

(function ($) {
  Drupal.CTools = Drupal.CTools || {};
  Drupal.CTools.AJAX = Drupal.CTools.AJAX || {};
  /**
   * Grab the response from the server and store it.
   *
   * @todo restore the warm cache functionality
   */
  Drupal.CTools.AJAX.warmCache = function () {
    // Store this expression for a minor speed improvement.
    $this = $(this);
    var old_url = $this.attr('href');
    // If we are currently fetching, or if we have fetched this already which is
    // ideal for things like pagers, where the previous page might already have
    // been seen in the cache.
    if ($this.hasClass('ctools-fetching') || Drupal.CTools.AJAX.commandCache[old_url]) {
      return false;
    }

    // Grab all the links that match this url and add the fetching class.
    // This allows the caching system to grab each url once and only once
    // instead of grabbing the url once per <a>.
    var $objects = $('a[href="' + old_url + '"]')
    $objects.addClass('ctools-fetching');
    try {
      url = old_url.replace(/\/nojs(\/|$)/g, '/ajax$1');
      $.ajax({
        type: "POST",
        url: url,
        data: { 'js': 1, 'ctools_ajax': 1},
        global: true,
        success: function (data) {
          Drupal.CTools.AJAX.commandCache[old_url] = data;
          $objects.addClass('ctools-cache-warmed').trigger('ctools-cache-warm', [data]);
        },
        complete: function() {
          $objects.removeClass('ctools-fetching');
        },
        dataType: 'json'
      });
    }
    catch (err) {
      $objects.removeClass('ctools-fetching');
      return false;
    }

    return false;
  };

  /**
   * Cachable click handler to fetch the commands out of the cache or from url.
   */
  Drupal.CTools.AJAX.clickAJAXCacheLink = function () {
    $this = $(this);
    if ($this.hasClass('ctools-fetching')) {
      $this.bind('ctools-cache-warm', function (event, data) {
        Drupal.CTools.AJAX.respond(data);
      });
      return false;
    }
    else {
      if ($this.hasClass('ctools-cache-warmed') && Drupal.CTools.AJAX.commandCache[$this.attr('href')]) {
        Drupal.CTools.AJAX.respond(Drupal.CTools.AJAX.commandCache[$this.attr('href')]);
        return false;
      }
      else {
        return Drupal.CTools.AJAX.clickAJAXLink.apply(this);
      }
    }
  };

  /**
   * Find a URL for an AJAX button.
   *
   * The URL for this gadget will be composed of the values of items by
   * taking the ID of this item and adding -url and looking for that
   * class. They need to be in the form in order since we will
   * concat them all together using '/'.
   */
  Drupal.CTools.AJAX.findURL = function(item) {
    var url = '';
    var url_class = '.' + $(item).attr('id') + '-url';
    $(url_class).each(
      function() {
        var $this = $(this);
        if (url && $this.val()) {
          url += '/';
        }
        url += $this.val();
      });
    return url;
  };

  // Hide these in a ready to ensure that Drupal.ajax is set up first.
  $(function() {
    Drupal.ajax.prototype.commands.attr = function(ajax, data, status) {
      $(data.selector).attr(data.name, data.value);
    };


    Drupal.ajax.prototype.commands.redirect = function(ajax, data, status) {
      if (data.delay > 0) {
        setTimeout(function () {
          location.href = data.url;
        }, data.delay);
      }
      else {
        location.href = data.url;
      }
    };

    Drupal.ajax.prototype.commands.reload = function(ajax, data, status) {
      location.reload();
    };

    Drupal.ajax.prototype.commands.submit = function(ajax, data, status) {
      $(data.selector).submit();
    }
  });
})(jQuery);
;
// global
var comscore_streamsense;
var comscore_streamsense_current = 0;

/**
 * Safe console.log()
 *
 * @param text
 */
function comscore_streamsense_log(text) {
  if (!window.console) window.console = {};
  if (!window.console.log) window.console.log = function () { };
  console.log(text);
}

/**
 * @param e
 * @param item
 */
function comscore_streamsense_log_jwplayer(e, item) {
  comscore_streamsense_log("Event: " + e.handleObj.origType + ' for #' + item.mediaid);
}

(function ($, Drupal, window, document, undefined) {

  /**
   * Attach the the listeners of the jwplayer.* triggered events
   */
  $(document).ready(function () {

    comscore_streamsense = new ns_.StreamingTag({customerC2: Drupal.settings.comscore.comscore_id});

    /**
     * @param item
     */
    function comscore_streamsense_play(item) {
      try {
        comscore_streamsense_current = parseInt(item['mediaid']);

        var metadata = {
          ns_st_ci: item['mediaid'], // Content Asset ID
          c3      : '', // Dictionary Classification Value
          c4      : "*null", // Unused Dictionary Classification Value
          c6      : "*null" // Unused Dictionary Classification Value
        };
        comscore_streamsense.playContentPart(metadata);

        comscore_streamsense_log('streamingTag.playContentPart');
        comscore_streamsense_log(metadata);
      } catch (error) {
        //
      }
    }

    /**
     *
     */
    function comscore_streamsense_stop() {
      if (comscore_streamsense_current == 0) {
        return;
      }

      try {
        comscore_streamsense_current = 0;
        comscore_streamsense.stop();

        comscore_streamsense_log('streamingTag.stop');
      } catch (error) {
        //
      }
    }

    /**
     *
     */
    function comscore_streamsense_ads() {
      if (comscore_streamsense_current == -1) {
        return;
      }

      try {
        comscore_streamsense_current = -1;
        comscore_streamsense.playAdvertisement();

        comscore_streamsense_log('streamingTag.playAdvertisement');
      } catch (error) {
        //
      }
    }

    $(document).on("jwplayer.play", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_play(item);
    });

    $(document).on("jwplayer.pause", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_stop();
    });

    $(document).on("jwplayer.complete", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_stop();
    });

    $(document).on("jwplayer.playlist", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_stop();
    });

    $(document).on("jwplayer.adplay", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_ads();
    });

    $(document).on("jwplayer.adpause", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
    });

    $(document).on("jwplayer.adcomplete", "body", function (e, rel, item, event) {
      comscore_streamsense_log_jwplayer(e, item);
      comscore_streamsense_stop();
    });

  });

  // Drupal.settings.comscore.comscore_id

})(jQuery, Drupal, this, this.document);
;
(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.block_collapsible = {
    attach: function (context, settings) {
      $('.block-collapsible').once('block-collapsible').each(function (i, e) {
        var accordion = $(e),
          accordion_toggle = accordion.children('.block-title'),
          accordion_content = accordion_toggle.siblings();
        accordion_content.collapse({
          toggle: true
        });
        accordion_content.collapse("toggle").collapse("hide");
        accordion_toggle.on('click', function () {
          accordion_toggle.toggleClass('active');
          accordion_content.collapse("toggle");
        });
      });
    }
  };
})(jQuery, Drupal, this, this.document);
;
/**
 * Checks that contents of an iFrame are loaded
 *
 * @param iframe_id
 * @returns {boolean}
 */
function iframe_is_loaded(iframe_id) {
  var iframe = document.getElementById(iframe_id);
  if (iframe) {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (iframeDoc.readyState == 'complete') {
      return true;
    }
  }

  return false;
}

(function ($) {
  $(document).ready(function () {
    if ($.fn.chosen) {
      $('.chosen-select').chosen();
    }
  });
})(jQuery);
;

(function($) {

/**
 * Drupal FieldGroup object.
 */
Drupal.FieldGroup = Drupal.FieldGroup || {};
Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
Drupal.FieldGroup.groupWithfocus = null;

Drupal.FieldGroup.setGroupWithfocus = function(element) {
  element.css({display: 'block'});
  Drupal.FieldGroup.groupWithfocus = element;
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processFieldset = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.fieldset', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $('legend span.fieldset-legend', $(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());
        }
        if ($('.error', $(this)).length) {
          $('legend span.fieldset-legend', $(this)).eq(0).addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processAccordion = {
  execute: function (context, settings, type) {
    $('div.field-group-accordion-wrapper', context).once('fieldgroup-effects', function () {
      var wrapper = $(this);

      wrapper.accordion({
        autoHeight: false,
        active: '.field-group-accordion-active',
        collapsible: true,
        changestart: function(event, ui) {
          if ($(this).hasClass('effect-none')) {
            ui.options.animated = false;
          }
          else {
            ui.options.animated = 'slide';
          }
        }
      });

      if (type == 'form') {

        var $firstErrorItem = false;

        // Add required fields mark to any element containing required fields
        wrapper.find('div.field-group-accordion-item').each(function(i) {

          if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
            $('h3.ui-accordion-header a').eq(i).append(' ').append($('.form-required').eq(0).clone());
          }
          if ($('.error', $(this)).length) {
            // Save first error item, for focussing it.
            if (!$firstErrorItem) {
              $firstErrorItem = $(this).parent().accordion("activate" , i);
            }
            $('h3.ui-accordion-header').eq(i).addClass('error');
          }
        });

        // Save first error item, for focussing it.
        if (!$firstErrorItem) {
          $('.ui-accordion-content-active', $firstErrorItem).css({height: 'auto', width: 'auto', display: 'block'});
        }

      }
    });
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processHtabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any element containing required fields
      $('fieldset.horizontal-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('horizontalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('horizontalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processTabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.vertical-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('verticalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('verticalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 *
 * TODO clean this up meaning check if this is really
 *      necessary.
 */
Drupal.FieldGroup.Effects.processDiv = {
  execute: function (context, settings, type) {

    $('div.collapsible', context).once('fieldgroup-effects', function() {
      var $wrapper = $(this);

      // Turn the legend into a clickable link, but retain span.field-group-format-toggler
      // for CSS positioning.

      var $toggler = $('span.field-group-format-toggler:first', $wrapper);
      var $link = $('<a class="field-group-format-title" href="#"></a>');
      $link.prepend($toggler.contents());

      // Add required field markers if needed
      if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
        $link.append(' ').append($('.form-required').eq(0).clone());
      }

      $link.appendTo($toggler);

      // .wrapInner() does not retain bound events.
      $link.click(function () {
        var wrapper = $wrapper.get(0);
        // Don't animate multiple times.
        if (!wrapper.animating) {
          wrapper.animating = true;
          var speed = $wrapper.hasClass('speed-fast') ? 300 : 1000;
          if ($wrapper.hasClass('effect-none') && $wrapper.hasClass('speed-none')) {
            $('> .field-group-format-wrapper', wrapper).toggle();
          }
          else if ($wrapper.hasClass('effect-blind')) {
            $('> .field-group-format-wrapper', wrapper).toggle('blind', {}, speed);
          }
          else {
            $('> .field-group-format-wrapper', wrapper).toggle(speed);
          }
          wrapper.animating = false;
        }
        $wrapper.toggleClass('collapsed');
        return false;
      });

    });
  }
};

/**
 * Behaviors.
 */
Drupal.behaviors.fieldGroup = {
  attach: function (context, settings) {
    settings.field_group = settings.field_group || Drupal.settings.field_group;
    if (settings.field_group == undefined) {
      return;
    }

    // Execute all of them.
    $.each(Drupal.FieldGroup.Effects, function (func) {
      // We check for a wrapper function in Drupal.field_group as
      // alternative for dynamic string function calls.
      var type = func.toLowerCase().replace("process", "");
      if (settings.field_group[type] != undefined && $.isFunction(this.execute)) {
        this.execute(context, settings, settings.field_group[type]);
      }
    });

    // Fixes css for fieldgroups under vertical tabs.
    $('.fieldset-wrapper .fieldset > legend').css({display: 'block'});
    $('.vertical-tabs fieldset.fieldset').addClass('default-fallback');


    // Add a new ID to each fieldset.
    $('.group-wrapper fieldset').each(function() {
      // Tats bad, but we have to keep the actual id to prevent layouts to break.
      var fieldgorupID = 'field_group-' + $(this).attr('id') + ' ' + $(this).attr('id');
      $(this).attr('id', fieldgorupID);
    })
    // Set the hash in url to remember last userselection.
    $('.group-wrapper ul li').each(function() {
      var fieldGroupNavigationListIndex = $(this).index();
      $(this).children('a').click(function() {
        var fieldset = $('.group-wrapper fieldset').get(fieldGroupNavigationListIndex);
        // Grab the first id, holding the wanted hashurl.
        var hashUrl = $(fieldset).attr('id').replace(/^field_group-/, '').split(' ')[0];
        window.location.hash = hashUrl;
      });
    });
  }
};

})(jQuery);;
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.jwplayer=b():a.jwplayer=b()}(this,function(){return function(a){function b(c){if(d[c])return d[c].exports;var e=d[c]={exports:{},id:c,loaded:!1};return a[c].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(d,f){for(var g,h,i=0,j=[];i<d.length;i++)h=d[i],e[h]&&j.push.apply(j,e[h]),e[h]=0;for(g in f)a[g]=f[g];for(c&&c(d,f);j.length;)j.shift().call(null,b)};var d={},e={0:0};return b.e=function(a,c){if(0===e[a])return c.call(null,b);if(void 0!==e[a])e[a].push(c);else{e[a]=[c];var d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.type="text/javascript",f.charset="utf-8",f.async=!0,f.src=b.p+""+({1:"polyfills.promise",2:"polyfills.base64",3:"provider.youtube",4:"provider.dashjs",5:"provider.shaka",6:"provider.cast"}[a]||a)+".js",d.appendChild(f)}},b.m=a,b.c=d,b.p="",b(0)}([function(a,b,c){a.exports=c(39)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(a,b,c){var d,e;d=[c(40),c(173),c(44)],e=function(a,b,c){return window.jwplayer?window.jwplayer:c.extend(a,b)}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(41),c(47),c(167)],e=function(a,b){return c.p=b.loadFrom(),a.selectPlayer}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(42),c(98),c(44)],e=function(a,b,c){var d=a.selectPlayer,e=function(){var a=d.apply(this,arguments);return a?a:{registerPlugin:function(a,c,d){"jwpsrv"!==a&&b.registerPlugin(a,c,d)}}};return c.extend(a,{selectPlayer:e})}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(43),c(44),c(86),c(84),c(80),c(98)],e=function(a,b,c,d,e,f){function g(a){var f=a.getName().name;if(!b.find(e,b.matches({name:f}))){if(!b.isFunction(a.supports))throw{message:"Tried to register a provider with an invalid object"};e.unshift({name:f,supports:a.supports})}var g=function(){};g.prototype=c,a.prototype=new g,d[f]=a}var h=[],i=0,j=function(b){var c,d;return b?"string"==typeof b?(c=k(b),c||(d=document.getElementById(b))):"number"==typeof b?c=h[b]:b.nodeType&&(d=b,c=k(d.id)):c=h[0],c?c:d?l(new a(d,m)):{registerPlugin:f.registerPlugin}},k=function(a){for(var b=0;b<h.length;b++)if(h[b].id===a)return h[b];return null},l=function(a){return i++,a.uniqueId=i,h.push(a),a},m=function(a){for(var b=h.length;b--;)if(h[b].uniqueId===a.uniqueId){h.splice(b,1);break}},n={selectPlayer:j,registerProvider:g,availableProviders:e,registerPlugin:f.registerPlugin};return j.api=n,n}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(61),c(46),c(47),c(60),c(50),c(44),c(62),c(164),c(165),c(166),c(59)],e=function(a,b,c,d,e,f,g,h,i,j,k,l){function m(a){d.addClass(a,"jw-tab-focus")}function n(a){d.removeClass(a,"jw-tab-focus")}var o=function(f,o){var p,q=this,r=!1,s={};g.extend(this,c),this.utils=d,this._=g,this.Events=c,this.version=l,this.trigger=function(a,b){return b=g.isObject(b)?g.extend({},b):{},b.type=a,window.jwplayer&&window.jwplayer.debug?c.trigger.call(q,a,b):c.triggerSafe.call(q,a,b)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var t=function(){p=new h(f),i(q,p),j(q,p),p.on(a.JWPLAYER_PLAYLIST_ITEM,function(){s={}}),p.on(a.JWPLAYER_MEDIA_META,function(a){g.extend(s,a.metadata)}),p.on(a.JWPLAYER_VIEW_TAB_FOCUS,function(a){a.hasFocus===!0?m(this.getContainer()):n(this.getContainer())}),p.on(a.JWPLAYER_READY,function(a){r=!0,u.tick("ready"),a.setupTime=u.between("setup","ready")}),p.on("all",q.trigger)};t(),k(this),this.id=f.id;var u=this._qoe=new e;u.tick("init");var v=function(){r=!1,s={},q.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()};return this.getPlugin=function(a){return q.plugins&&q.plugins[a]},this.addPlugin=function(a,b){this.plugins=this.plugins||{},this.plugins[a]=b,this.onReady(b.addToPlayer),b.resize&&this.onResize(b.resizeHandler)},this.setup=function(a){return u.tick("setup"),v(),t(),d.foreach(a.events,function(a,b){var c=q[a];"function"==typeof c&&c.call(q,b)}),a.id=q.id,p.setup(a,this),q},this.qoe=function(){var b=p.getItemQoe(),c=u.between("setup","ready"),d=b.between(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,a.JWPLAYER_MEDIA_FIRST_FRAME);return{setupTime:c,firstFrame:d,player:u.dump(),item:b.dump()}},this.getContainer=function(){return p.getContainer?p.getContainer():f},this.getMeta=this.getItemMeta=function(){return s},this.getPlaylistItem=function(a){if(!d.exists(a))return p._model.get("playlistItem");var b=q.getPlaylist();return b?b[a]:null},this.getRenderingMode=function(){return"html5"},this.load=function(a){var b=this.getPlugin("vast")||this.getPlugin("googima");return b&&b.destroy(),p.load(a),q},this.play=function(a){if(a===!0)return p.play(),q;if(a===!1)return p.pause(),q;switch(a=q.getState()){case b.PLAYING:case b.BUFFERING:p.pause();break;default:p.play()}return q},this.pause=function(a){return g.isBoolean(a)?this.play(!a):this.play()},this.createInstream=function(){return p.createInstream()},this.castToggle=function(){p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=d.noop,this.remove=function(){return o(q),q.trigger("remove"),v(),q},this};return o}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a={},b=Array.prototype,c=Object.prototype,d=Function.prototype,e=b.slice,f=b.concat,g=c.toString,h=c.hasOwnProperty,i=b.map,j=b.reduce,k=b.forEach,l=b.filter,m=b.every,n=b.some,o=b.indexOf,p=Array.isArray,q=Object.keys,r=d.bind,s=function(a){return a instanceof s?a:this instanceof s?void 0:new s(a)},t=s.each=s.forEach=function(b,c,d){if(null==b)return b;if(k&&b.forEach===k)b.forEach(c,d);else if(b.length===+b.length){for(var e=0,f=b.length;f>e;e++)if(c.call(d,b[e],e,b)===a)return}else for(var g=s.keys(b),e=0,f=g.length;f>e;e++)if(c.call(d,b[g[e]],g[e],b)===a)return;return b};s.map=s.collect=function(a,b,c){var d=[];return null==a?d:i&&a.map===i?a.map(b,c):(t(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)};var u="Reduce of empty array with no initial value";s.reduce=s.foldl=s.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),j&&a.reduce===j)return d&&(b=s.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(t(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(u);return c},s.find=s.detect=function(a,b,c){var d;return v(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},s.filter=s.select=function(a,b,c){var d=[];return null==a?d:l&&a.filter===l?a.filter(b,c):(t(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},s.reject=function(a,b,c){return s.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},s.compact=function(a){return s.filter(a,s.identity)},s.every=s.all=function(b,c,d){c||(c=s.identity);var e=!0;return null==b?e:m&&b.every===m?b.every(c,d):(t(b,function(b,f,g){return(e=e&&c.call(d,b,f,g))?void 0:a}),!!e)};var v=s.some=s.any=function(b,c,d){c||(c=s.identity);var e=!1;return null==b?e:n&&b.some===n?b.some(c,d):(t(b,function(b,f,g){return e||(e=c.call(d,b,f,g))?a:void 0}),!!e)};s.size=function(a){return null==a?0:a.length===+a.length?a.length:s.keys(a).length},s.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},s.before=function(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),1>=a&&(b=null),c}};var w=function(a){return null==a?s.identity:s.isFunction(a)?a:s.property(a)};s.sortedIndex=function(a,b,c,d){c=w(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f};var v=s.some=s.any=function(b,c,d){c||(c=s.identity);var e=!1;return null==b?e:n&&b.some===n?b.some(c,d):(t(b,function(b,f,g){return e||(e=c.call(d,b,f,g))?a:void 0}),!!e)};s.contains=s.include=function(a,b){return null==a?!1:(a.length!==+a.length&&(a=s.values(a)),s.indexOf(a,b)>=0)},s.where=function(a,b){return s.filter(a,s.matches(b))},s.findWhere=function(a,b){return s.find(a,s.matches(b))},s.max=function(a,b,c){if(!b&&s.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);var d=-(1/0),e=-(1/0);return t(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;h>e&&(d=a,e=h)}),d},s.difference=function(a){var c=f.apply(b,e.call(arguments,1));return s.filter(a,function(a){return!s.contains(c,a)})},s.without=function(a){return s.difference(a,e.call(arguments,1))},s.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=s.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(o&&a.indexOf===o)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1};var x=function(){};s.bind=function(a,b){var c,d;if(r&&a.bind===r)return r.apply(a,e.call(arguments,1));if(!s.isFunction(a))throw new TypeError;return c=e.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(e.call(arguments)));x.prototype=a.prototype;var f=new x;x.prototype=null;var g=a.apply(f,c.concat(e.call(arguments)));return Object(g)===g?g:f}},s.partial=function(a){var b=e.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===s&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},s.once=s.partial(s.before,2),s.memoize=function(a,b){var c={};return b||(b=s.identity),function(){var d=b.apply(this,arguments);return s.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},s.delay=function(a,b){var c=e.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},s.defer=function(a){return s.delay.apply(s,[a,1].concat(e.call(arguments,1)))},s.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:s.now(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=s.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},s.keys=function(a){if(!s.isObject(a))return[];if(q)return q(a);var b=[];for(var c in a)s.has(a,c)&&b.push(c);return b},s.invert=function(a){for(var b={},c=s.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},s.defaults=function(a){return t(e.call(arguments,1),function(b){if(b)for(var c in b)void 0===a[c]&&(a[c]=b[c])}),a},s.extend=function(a){return t(e.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},s.pick=function(a){var c={},d=f.apply(b,e.call(arguments,1));return t(d,function(b){b in a&&(c[b]=a[b])}),c},s.omit=function(a){var c={},d=f.apply(b,e.call(arguments,1));for(var g in a)s.contains(d,g)||(c[g]=a[g]);return c},s.clone=function(a){return s.isObject(a)?s.isArray(a)?a.slice():s.extend({},a):a},s.isArray=p||function(a){return"[object Array]"==g.call(a)},s.isObject=function(a){return a===Object(a)},t(["Arguments","Function","String","Number","Date","RegExp"],function(a){s["is"+a]=function(b){return g.call(b)=="[object "+a+"]"}}),s.isArguments(arguments)||(s.isArguments=function(a){return!(!a||!s.has(a,"callee"))}),s.isFunction=function(a){return"function"==typeof a},s.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},s.isNaN=function(a){return s.isNumber(a)&&a!=+a},s.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==g.call(a)},s.isNull=function(a){return null===a},s.isUndefined=function(a){return void 0===a},s.has=function(a,b){return h.call(a,b)},s.identity=function(a){return a},s.constant=function(a){return function(){return a}},s.property=function(a){return function(b){return b[a]}},s.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}},s.matches=function(a){return function(b){if(b===a)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0}},s.now=Date.now||function(){return(new Date).getTime()},s.result=function(a,b){if(null==a)return void 0;var c=a[b];return s.isFunction(c)?c.call(a):c};var y=0;return s.uniqueId=function(a){var b=++y+"";return a?a+b:b},s}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",OUT:"out"},b={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick"};return b.touchEvents=a,b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b=[],c=b.slice,d={on:function(a,b,c){if(!f(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c}),this},once:function(b,c,d){if(!f(this,"once",b,[c,d])||!c)return this;var e=this,g=a.once(function(){e.off(b,g),c.apply(this,arguments)});return g._callback=c,this.on(b,g,d)},off:function(b,c,d){var e,g,h,i,j,k,l,m;if(!this._events||!f(this,"off",b,[c,d]))return this;if(!b&&!c&&!d)return this._events=void 0,this;for(i=b?[b]:a.keys(this._events),j=0,k=i.length;k>j;j++)if(b=i[j],h=this._events[b]){if(this._events[b]=e=[],c||d)for(l=0,m=h.length;m>l;l++)g=h[l],(c&&c!==g.callback&&c!==g.callback._callback||d&&d!==g.context)&&e.push(g);e.length||delete this._events[b]}return this},trigger:function(a){if(!this._events)return this;var b=c.call(arguments,1);if(!f(this,"trigger",a,b))return this;var d=this._events[a],e=this._events.all;return d&&g(d,b,this),e&&g(e,arguments,this),this},triggerSafe:function(a){if(!this._events)return this;var b=c.call(arguments,1);if(!f(this,"trigger",a,b))return this;var d=this._events[a],e=this._events.all;return d&&h(d,b,this),e&&h(e,arguments,this),this}},e=/\s+/,f=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var f in c)a[b].apply(a,[f,c[f]].concat(d));return!1}if(e.test(c)){for(var g=c.split(e),h=0,i=g.length;i>h;h++)a[b].apply(a,[g[h]].concat(d));return!1}return!0},g=function(a,b,c){var d,e=-1,f=a.length,g=b[0],h=b[1],i=b[2];switch(b.length){case 0:for(;++e<f;)(d=a[e]).callback.call(d.context||c);return;case 1:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g);return;case 2:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g,h);return;case 3:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g,h,i);return;default:for(;++e<f;)(d=a[e]).callback.apply(d.context||c,b);return}},h=function(a,b,c){for(var d,e=-1,f=a.length;++e<f;)try{(d=a[e]).callback.apply(d.context||c,b)}catch(g){}};return d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51),c(44),c(52),c(53),c(55),c(48),c(56),c(49),c(57),c(50)],e=function(a,b,c,d,e,f,g,h,i,j){var k={};return k.log=function(){window.console&&("object"==typeof console.log?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},k.between=function(a,b,c){return Math.max(Math.min(a,c),b)},k.foreach=function(a,b){var c,d;for(c in a)"function"===k.typeOf(a.hasOwnProperty)?a.hasOwnProperty(c)&&(d=a[c],b(c,d)):(d=a[c],b(c,d))},k.indexOf=b.indexOf,k.noop=function(){},k.seconds=a.seconds,k.prefix=a.prefix,k.suffix=a.suffix,b.extend(k,f,h,c,g,d,e,i,j),k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(49),c(50)],e=function(a,b,c){function d(a){return/^(?:(?:https?|file)\:)?\/\//.test(a)}function e(b){return a.some(b,function(a){return"parsererror"===a.nodeName})}var f={};return f.getAbsolutePath=function(a,c){if(b.exists(c)||(c=document.location.href),b.exists(a)){if(d(a))return a;var e,f=c.substring(0,c.indexOf("://")+3),g=c.substring(f.length,c.indexOf("/",f.length+1));if(0===a.indexOf("/"))e=a.split("/");else{var h=c.split("?")[0];h=h.substring(f.length+g.length+1,h.lastIndexOf("/")),e=h.split("/").concat(a.split("/"))}for(var i=[],j=0;j<e.length;j++)e[j]&&b.exists(e[j])&&"."!==e[j]&&(".."===e[j]?i.pop():i.push(e[j]));return f+g+"/"+i.join("/")}},f.getScriptPath=a.memoize(function(a){for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c++){var d=b[c].src;if(d&&d.indexOf(a)>=0)return d.substr(0,d.indexOf(a))}return""}),f.parseXML=function(a){var b=null;return c.tryCatch(function(){window.DOMParser?(b=(new window.DOMParser).parseFromString(a,"text/xml"),(e(b.childNodes)||b.childNodes&&e(b.childNodes[0].childNodes))&&(b=null)):(b=new window.ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}),b},f.serialize=function(a){if(void 0===a)return null;if("string"==typeof a&&a.length<6){var b=a.toLowerCase();if("true"===b)return!0;if("false"===b)return!1;if(!isNaN(Number(a))&&!isNaN(parseFloat(a)))return Number(a)}return a},f.parseDimension=function(a){return"string"==typeof a?""===a?0:a.lastIndexOf("%")>-1?a:parseInt(a.replace("px",""),10):a},f.timeFormat=function(a,b){if(0>=a&&!b)return"00:00";var c=0>a?"-":"";a=Math.abs(a);var d=Math.floor(a/3600),e=Math.floor((a-3600*d)/60),f=Math.floor(a%60);return c+(d?d+":":"")+(10>e?"0":"")+e+":"+(10>f?"0":"")+f},f.adaptiveType=function(a){if(-1!==a){var b=-120;if(b>=a)return"DVR";if(0>a||a===1/0)return"LIVE"}return"VOD"},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b={};return b.exists=function(a){switch(typeof a){case"string":return a.length>0;case"object":return null!==a;case"undefined":return!1}return!0},b.isHTTPS=function(){return 0===window.location.href.indexOf("https")},b.isRtmp=function(a,b){return 0===a.indexOf("rtmp")||"rtmp"===b},b.isYouTube=function(a,b){return"youtube"===b||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)},b.youTubeID=function(a){var b=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(a);return b?b.slice(1).join("").replace("?",""):""},b.typeOf=function(b){if(null===b)return"null";var c=typeof b;return"object"===c&&a.isArray(b)?"array":c},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a=function(a,c,d){if(c=c||this,d=d||[],window.jwplayer&&window.jwplayer.debug)return a.apply(c,d);try{return a.apply(c,d)}catch(e){return new b(a.name,e)}},b=function(a,b){this.name=a,this.message=b.message||b.toString(),this.error=b};return{tryCatch:a,Error:b}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){function b(a){return a.indexOf("(format=m3u8-")>-1?"m3u8":!1}var c=function(a){return a.replace(/^\s+|\s+$/g,"")},d=function(a,b,c){for(a=""+a,c=c||"0";a.length<b;)a=c+a;return a},e=function(a,b){for(var c=0;c<a.attributes.length;c++)if(a.attributes[c].name&&a.attributes[c].name.toLowerCase()===b.toLowerCase())return a.attributes[c].value.toString();return""},f=function(a){if(!a||"rtmp"===a.substr(0,4))return"";var c=b(a);return c?c:(a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0],a.lastIndexOf(".")>-1?a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase():void 0)},g=function(a){var b=parseInt(a/3600),c=parseInt(a/60)%60,e=a%60;return d(b,2)+":"+d(c,2)+":"+d(e.toFixed(3),6)},h=function(b){if(a.isNumber(b))return b;b=b.replace(",",".");var c=b.split(":"),d=0;return"s"===b.slice(-1)?d=parseFloat(b):"m"===b.slice(-1)?d=60*parseFloat(b):"h"===b.slice(-1)?d=3600*parseFloat(b):c.length>1?(d=parseFloat(c[c.length-1]),d+=60*parseFloat(c[c.length-2]),3===c.length&&(d+=3600*parseFloat(c[c.length-3]))):d=parseFloat(b),d},i=function(b,c){return a.map(b,function(a){return c+a})},j=function(b,c){return a.map(b,function(a){return a+c})};return{trim:c,pad:d,xmlAttribute:e,extension:f,hms:g,seconds:h,suffix:j,prefix:i}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){function b(a){return function(){return d(a)}}var c={},d=a.memoize(function(a){var b=navigator.userAgent.toLowerCase();return null!==b.match(a)}),e=c.isInt=function(a){return parseFloat(a)%1===0};c.isFlashSupported=function(){var a=c.flashVersion();return a&&a>=11.2},c.isFF=b(/firefox/i),c.isIPod=b(/iP(hone|od)/i),c.isIPad=b(/iPad/i),c.isSafari602=b(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),c.isOSX=b(/Mac OS X/i),c.isEdge=b(/\sedge\/\d+/i);var f=c.isIETrident=function(a){return c.isEdge()?!0:a?(a=parseFloat(a).toFixed(1),d(new RegExp("trident/.+rv:\\s*"+a,"i"))):d(/trident/i)},g=c.isMSIE=function(a){return a?(a=parseFloat(a).toFixed(1),d(new RegExp("msie\\s*"+a,"i"))):d(/msie/i)},h=b(/chrome/i);c.isChrome=function(){return h()&&!c.isEdge()},c.isIE=function(a){return a?(a=parseFloat(a).toFixed(1),a>=11?f(a):g(a)):g()||f()},c.isSafari=function(){return d(/safari/i)&&!d(/chrome/i)&&!d(/chromium/i)&&!d(/android/i)};var i=c.isIOS=function(a){return d(a?new RegExp("iP(hone|ad|od).+\\sOS\\s"+a,"i"):/iP(hone|ad|od)/i)};c.isAndroidNative=function(a){return j(a,!0)};var j=c.isAndroid=function(a,b){return b&&d(/chrome\/[123456789]/i)&&!d(/chrome\/18/)?!1:a?(e(a)&&!/\./.test(a)&&(a=""+a+"."),d(new RegExp("Android\\s*"+a,"i"))):d(/Android/i)};return c.isMobile=function(){return i()||j()},c.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName},c.flashVersion=function(){if(c.isAndroid())return 0;var a,b=navigator.plugins;if(b&&(a=b["Shockwave Flash"],a&&a.description))return parseFloat(a.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(a=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(a.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(d){return 0}return a}return 0},c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51),c(44),c(54)],e=function(a,b,c){var d={};return d.createElement=function(a){var b=document.createElement("div");return b.innerHTML=a,b.firstChild},d.styleDimension=function(a){return a+(a.toString().indexOf("%")>0?"":"px")},d.classList=function(a){return a.classList?a.classList:a.className.split(" ")},d.hasClass=c.hasClass,d.addClass=function(c,d){var e=b.isString(c.className)?c.className.split(" "):[],f=b.isArray(d)?d:d.split(" ");b.each(f,function(a){b.contains(e,a)||e.push(a)}),c.className=a.trim(e.join(" "))},d.removeClass=function(c,d){var e=b.isString(c.className)?c.className.split(" "):[],f=b.isArray(d)?d:d.split(" ");c.className=a.trim(b.difference(e,f).join(" "))},d.toggleClass=function(a,c,e){var f=d.hasClass(a,c);e=b.isBoolean(e)?e:!f,e!==f&&(e?d.addClass(a,c):d.removeClass(a,c))},d.emptyElement=function(a){for(;a.firstChild;)a.removeChild(a.firstChild)},d.addStyleSheet=function(a){var b=document.createElement("link");b.rel="stylesheet",b.href=a,document.getElementsByTagName("head")[0].appendChild(b)},d.empty=function(a){if(a)for(;a.childElementCount>0;)a.removeChild(a.children[0])},d.bounds=function(a){var b={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!a||!document.body.contains(a))return b;if(a.getBoundingClientRect){var c=a.getBoundingClientRect(a),d=window.pageYOffset,e=window.pageXOffset;if(!(c.width||c.height||c.left||c.top))return b;b.left=c.left+e,b.right=c.right+e,b.top=c.top+d,b.bottom=c.bottom+d,b.width=c.right-c.left,b.height=c.bottom-c.top}else{b.width=0|a.offsetWidth,b.height=0|a.offsetHeight;do b.left+=0|a.offsetLeft,b.top+=0|a.offsetTop;while(a=a.offsetParent);b.right=b.left+b.width,b.bottom=b.top+b.height}return b},d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{hasClass:function(a,b){var c=" "+b+" ";return 1===a.nodeType&&(" "+a.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(c)>=0}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51)],e=function(a){function b(a){a=a.split("-");for(var b=1;b<a.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join("")}function c(b,c,d){if(""===c||void 0===c||null===c)return"";var e=d?" !important":"";return"string"==typeof c&&isNaN(c)?/png|gif|jpe?g/i.test(c)&&c.indexOf("url")<0?"url("+c+")":c+e:0===c||"z-index"===b||"opacity"===b?""+c+e:/color/i.test(b)?"#"+a.pad(c.toString(16).replace(/^0x/i,""),6)+e:Math.ceil(c)+"px"+e}var d,e={},f=function(a,b){d||(d=document.createElement("style"),d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d));var c=a+JSON.stringify(b).replace(/"/g,""),f=document.createTextNode(c);e[a]&&d.removeChild(e[a]),e[a]=f,d.appendChild(f)},g=function(a,d){if(void 0!==a&&null!==a){void 0===a.length&&(a=[a]);var e,f={};for(e in d)f[e]=c(e,d[e]);for(var g=0;g<a.length;g++){var h,i=a[g];if(void 0!==i&&null!==i)for(e in f)h=b(e),i.style[h]!==f[e]&&(i.style[h]=f[e])}}},h=function(a){for(var b in e)b.indexOf(a)>=0&&(d.removeChild(e[b]),delete e[b])},i=function(a,b){var c="transform",d={};b=b||"",d[c]=b,d["-webkit-"+c]=b,d["-ms-"+c]=b,d["-moz-"+c]=b,d["-o-"+c]=b,g(a,d)},j=function(a,b){var c="rgb";a?(a=String(a).replace("#",""),3===a.length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2])):a="000000";var d=[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)];return void 0!==b&&100!==b&&(c+="a",d.push(b/100)),c+"("+d.join(",")+")"};return{css:f,style:g,clearCss:h,transform:i,hexToRgba:j}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(49),c(48),c(50)],e=function(a,b,c,d){function e(a){return a&&a.indexOf("://")>=0&&a.split("/")[2]!==window.location.href.split("/")[2]}function f(a,b,c){return function(){a("Error loading file",b,c)}}function g(a,b,c,d,e){return function(){if(4===a.readyState)switch(a.status){case 200:h(a,b,c,d,e)();break;case 404:d("File not found",b,a)}}}function h(b,d,e,f,g){return function(){var h,i;if(g)e(b);else{try{if(h=b.responseXML,h&&(i=h.firstChild,h.lastChild&&"parsererror"===h.lastChild.nodeName))return void(f&&f("Invalid XML",d,b))}catch(j){}if(h&&i)return e(b);var k=c.parseXML(b.responseText);if(!k||!k.firstChild)return void(f&&f(b.responseText?"Invalid XML":d,d,b));b=a.extend({},b,{responseXML:k}),e(b)}}}var i={};return i.ajax=function(a,c,i,j){var k,l=!1;if(a.indexOf("#")>0&&(a=a.replace(/#.*$/,"")),e(a)&&b.exists(window.XDomainRequest))k=new window.XDomainRequest,k.onload=h(k,a,c,i,j),k.ontimeout=k.onprogress=function(){},k.timeout=5e3;else{if(!b.exists(window.XMLHttpRequest))return i&&i("",a,k),k;k=new window.XMLHttpRequest,k.onreadystatechange=g(k,a,c,i,j)}k.overrideMimeType&&k.overrideMimeType("text/xml"),k.onerror=f(i,a,k);var m=d.tryCatch(function(){k.open("GET",a,!0)});return m instanceof d.Error&&(l=!0),setTimeout(function(){if(l)return void(i&&i(a,a,k));var b=d.tryCatch(function(){k.send()});b instanceof d.Error&&i&&i(a,a,k)},0),k},i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(58),c(44),c(49),c(48),c(59)],e=function(a,b,c,d,e){var f={};return f.repo=b.memoize(function(){var b=e.split("+")[0],d=a.repo+b+"/";return c.isHTTPS()?d.replace(/^http:/,"https:"):d}),f.versionCheck=function(a){var b=("0"+a).split(/\W/),c=e.split(/\W/),d=parseFloat(b[0]),f=parseFloat(c[0]);return d>f?!1:d===f&&parseFloat("0"+b[1])>parseFloat(c[1])?!1:!0},f.loadFrom=function(){return f.repo()},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{repo:"http://ssl.p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"]}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return"7.2.4+commercial_v7-2-4.70.commercial.89ee8a.jwplayer.e0580e.analytics.c225de.vast.49cb89.googima.97a01c.plugin-sharing.ab95e2.plugin-related.b67145.plugin-gapro.0374cd"}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b=function(){var b={},c={},d={},e={};return{start:function(c){b[c]=a.now(),d[c]=d[c]+1||1},end:function(d){if(b[d]){var e=a.now()-b[d];c[d]=c[d]+e||e}},dump:function(){return{counts:d,sums:c,events:e}},tick:function(b,c){e[b]=c||a.now()},between:function(a,b){return e[b]&&e[a]?e[b]-e[a]:-1}}};return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(63),c(81)],e=function(a,b){var d=a.prototype.setup;return a.prototype.setup=function(){d.apply(this,arguments);var a=this._model.get("edition"),e=b(a),f=this._model.get("cast"),g=this;e("casting")&&f&&f.appid&&c.e(6,function(a){var b=c(158);g._castController=new b(g,g._model),g.castToggle=g._castController.castToggle.bind(g._castController)})},a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(72),c(115),c(74),c(44),c(93),c(111),c(77),c(114),c(64),c(47),c(116),c(46),c(76),c(61),c(45),c(156)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(a){return function(){var b=Array.prototype.slice.call(arguments,0);this.eventsQueue.push([a,b])}}function r(a){return a===n.LOADING||a===n.STALLED?n.BUFFERING:a}var s=function(a){this.originalContainer=this.currentContainer=a,this.eventsQueue=[],d.extend(this,l),this._model=new g};return s.prototype={play:q("play"),pause:q("pause"),setVolume:q("setVolume"),setMute:q("setMute"),seek:q("seek"),stop:q("stop"),load:q("load"),playlistNext:q("playlistNext"),playlistPrev:q("playlistPrev"),playlistItem:q("playlistItem"),setFullscreen:q("setFullscreen"),setCurrentCaptions:q("setCurrentCaptions"),setCurrentQuality:q("setCurrentQuality"),setup:function(g,l){function p(){V.mediaModel.on("change:state",function(a,b){var c=r(b);V.set("state",c)})}function q(){Y=null,D(V.get("item")),V.on("change:state",m,this),V.on("change:castState",function(a,b){ba.trigger(o.JWPLAYER_CAST_SESSION,b)}),V.on("change:fullscreen",function(a,b){ba.trigger(o.JWPLAYER_FULLSCREEN,{fullscreen:b})}),V.on("itemReady",function(){ba.trigger(o.JWPLAYER_PLAYLIST_ITEM,{index:V.get("item"),item:V.get("playlistItem")})}),V.on("change:playlist",function(a,b){b.length&&ba.trigger(o.JWPLAYER_PLAYLIST_LOADED,{playlist:b})}),V.on("change:volume",function(a,b){ba.trigger(o.JWPLAYER_MEDIA_VOLUME,{volume:b})}),V.on("change:mute",function(a,b){ba.trigger(o.JWPLAYER_MEDIA_MUTE,{mute:b})}),V.on("change:controls",function(a,b){ba.trigger(o.JWPLAYER_CONTROLS,{controls:b})}),V.on("change:scrubbing",function(a,b){b?y():w()}),V.on("change:captionsList",function(a,b){ba.trigger(o.JWPLAYER_CAPTIONS_LIST,{tracks:b,track:Q()})}),V.mediaController.on("all",ba.trigger.bind(ba)),W.on("all",ba.trigger.bind(ba)),this.showView(W.element()),window.addEventListener("beforeunload",function(){T()||x(!0)}),d.defer(s)}function s(){for(ba.trigger(o.JWPLAYER_READY,{setupTime:0}),ba.trigger(o.JWPLAYER_PLAYLIST_LOADED,{
playlist:V.get("playlist")}),ba.trigger(o.JWPLAYER_PLAYLIST_ITEM,{index:V.get("item"),item:V.get("playlistItem")}),ba.trigger(o.JWPLAYER_CAPTIONS_LIST,{tracks:V.get("captionsList"),track:V.get("captionsIndex")}),V.get("autostart")&&w();ba.eventsQueue.length>0;){var a=ba.eventsQueue.shift(),b=a[0],c=a[1]||[];ba[b].apply(ba,c)}}function t(a){switch(V.get("state")===n.ERROR&&V.set("state",n.IDLE),x(!0),V.get("autostart")&&V.once("itemReady",w),typeof a){case"string":u(a);break;case"object":var b=C(a);b&&D(0);break;case"number":D(a)}}function u(a){var b=new i;b.on(o.JWPLAYER_PLAYLIST_LOADED,function(a){t(a.playlist)}),b.on(o.JWPLAYER_ERROR,function(a){a.message="Error loading playlist: "+a.message,this.triggerError(a)},this),b.load(a)}function v(){var a=ba._instreamAdapter&&ba._instreamAdapter.getState();return d.isString(a)?a:V.get("state")}function w(){var a;if(V.get("state")!==n.ERROR){var b=ba._instreamAdapter&&ba._instreamAdapter.getState();if(d.isString(b))return l.pauseAd(!1);if(V.get("state")===n.COMPLETE&&(x(!0),D(0)),!_&&(_=!0,ba.trigger(o.JWPLAYER_MEDIA_BEFOREPLAY,{}),_=!1,$))return $=!1,void(Z=null);if(z()){if(0===V.get("playlist").length)return!1;a=j.tryCatch(function(){V.loadVideo()})}else V.get("state")===n.PAUSED&&(a=j.tryCatch(function(){V.playVideo()}));return a instanceof j.Error?(ba.triggerError(a),Z=null,!1):!0}}function x(a){V.off("itemReady",w);var b=!a;Z=null;var c=j.tryCatch(function(){V.stopVideo()},ba);return c instanceof j.Error?(ba.triggerError(c),!1):(b&&(aa=!0),_&&($=!0),!0)}function y(){Z=null;var a=ba._instreamAdapter&&ba._instreamAdapter.getState();if(d.isString(a))return l.pauseAd(!0);switch(V.get("state")){case n.ERROR:return!1;case n.PLAYING:case n.BUFFERING:var b=j.tryCatch(function(){ca().pause()},this);if(b instanceof j.Error)return ba.triggerError(b),!1;break;default:_&&($=!0)}return!0}function z(){var a=V.get("state");return a===n.IDLE||a===n.COMPLETE||a===n.ERROR}function A(a){V.get("state")!==n.ERROR&&(V.get("scrubbing")||V.get("state")===n.PLAYING||w(!0),ca().seek(a))}function B(a){x(!0),D(a),w()}function C(a){var b=h(a);return b=h.filterPlaylist(b,V.getProviders(),V.get("androidhls"),V.get("drm"),V.get("preload")),V.set("playlist",b),d.isArray(b)&&0!==b.length?!0:(ba.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}function D(a){var b=V.get("playlist");a=(a+b.length)%b.length,V.set("item",a),V.set("playlistItem",b[a]),V.setActiveItem(b[a])}function E(){B(V.get("item")-1)}function F(){B(V.get("item")+1)}function G(){if(z()){if(aa)return void(aa=!1);Z=G;var a=V.get("item");return a===V.get("playlist").length-1?void(V.get("repeat")?F():(V.set("state",n.COMPLETE),ba.trigger(o.JWPLAYER_PLAYLIST_COMPLETE,{}))):void F()}}function H(a){ca().setCurrentQuality(a)}function I(){return ca()?ca().getCurrentQuality():-1}function J(){return this._model?this._model.getConfiguration():void 0}function K(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var a=L();if(a){var b=I(),c=a[b];if(c)return{level:d.extend({index:b},c),mode:"",reason:""}}return null}function L(){return ca()?ca().getQualityLevels():null}function M(a){ca().setCurrentAudioTrack(a)}function N(){return ca()?ca().getCurrentAudioTrack():-1}function O(){return ca()?ca().getAudioTracks():null}function P(a){V.setVideoSubtitleTrack(a),ba.trigger(o.JWPLAYER_CAPTIONS_CHANGED,{tracks:R(),track:a})}function Q(){return X.getCurrentIndex()}function R(){return X.getCaptionsList()}function S(){var a=V.getVideo();if(a){var b=a.detachMedia();if(b instanceof HTMLVideoElement)return b}return null}function T(){var a=V.getVideo();return a?a.isCaster:!1}function U(a){var b=j.tryCatch(function(){V.getVideo().attachMedia(a)});return b instanceof j.Error?void j.log("Error calling _attachMedia",b):void("function"==typeof Z&&Z())}var V,W,X,Y,Z,$,_=!1,aa=!1,ba=this,ca=function(){return V.getVideo()},da=new a(g);V=this._model.setup(da),W=this._view=new k(l,V),X=new f(l,V),Y=new e(l,V,W,C),Y.on(o.JWPLAYER_READY,q,this),Y.on(o.JWPLAYER_SETUP_ERROR,this.setupError,this),V.mediaController.on(o.JWPLAYER_MEDIA_COMPLETE,function(){d.defer(G)}),V.mediaController.on(o.JWPLAYER_MEDIA_ERROR,this.triggerError,this),V.on("change:flashBlocked",function(a,b){if(!b)return void this._model.set("errorEvent",void 0);var c=!!a.get("flashThrottle"),d={message:c?"Click to run Flash":"Flash plugin failed to load"};c||this.trigger(o.JWPLAYER_ERROR,d),this._model.set("errorEvent",d)},this),p(),V.on("change:mediaModel",p),this.play=w,this.pause=y,this.seek=A,this.stop=x,this.load=t,this.playlistNext=F,this.playlistPrev=E,this.playlistItem=B,this.setCurrentCaptions=P,this.setCurrentQuality=H,this.detachMedia=S,this.attachMedia=U,this.getCurrentQuality=I,this.getQualityLevels=L,this.setCurrentAudioTrack=M,this.getCurrentAudioTrack=N,this.getAudioTracks=O,this.getCurrentCaptions=Q,this.getCaptionsList=R,this.getVisualQuality=K,this.getConfig=J,this.getState=v,this.setVolume=V.setVolume,this.setMute=V.setMute,this.getProvider=function(){return V.get("provider")},this.getWidth=function(){return V.get("containerWidth")},this.getHeight=function(){return V.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=W.resize,this.getSafeRegion=W.getSafeRegion,this.setCues=W.addCues,this.setFullscreen=function(a){d.isBoolean(a)||(a=!V.get("fullscreen")),V.set("fullscreen",a),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",a)},this.addButton=function(a,b,c,e,f){var g={img:a,tooltip:b,callback:c,id:e,btnClass:f},h=V.get("dock");h=h?h.slice(0):[],h=d.reject(h,d.matches({id:g.id})),h.push(g),V.set("dock",h)},this.removeButton=function(a){var b=V.get("dock")||[];b=d.reject(b,d.matches({id:a})),V.set("dock",b)},this.checkBeforePlay=function(){return _},this.getItemQoe=function(){return V._qoeItem},this.setControls=function(a){d.isBoolean(a)||(a=!V.get("controls")),V.set("controls",a);var b=V.getVideo();b&&b.setControls(a)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),W&&W.destroy(),V&&V.destroy(),Y&&(Y.destroy(),Y=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return V.getVideo().checkComplete()},this.createInstream=function(){return this.instreamDestroy(),this._instreamAdapter=new c(this,V,W),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){ba._instreamAdapter&&ba._instreamAdapter.destroy()},b(l,this),Y.start()},showView:function(a){(document.documentElement.contains(this.currentContainer)||(this.currentContainer=document.getElementById(this._model.get("id")),this.currentContainer))&&(this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(a,this.currentContainer),this.currentContainer=a)},triggerError:function(a){this._model.set("errorEvent",a),this._model.set("state",n.ERROR),this._model.once("change:state",function(){this._model.set("errorEvent",void 0)},this),this.trigger(o.JWPLAYER_ERROR,a)},setupError:function(a){var b=a.message,c=j.createElement(p(this._model.get("id"),this._model.get("skin"),b)),e=this._model.get("width"),f=this._model.get("height");j.style(c,{width:e.toString().indexOf("%")>0?e:e+"px",height:f.toString().indexOf("%")>0?f:f+"px"}),this.showView(c);var g=this;d.defer(function(){g.trigger(o.JWPLAYER_SETUP_ERROR,{message:b})})}},s}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(65),c(66),c(47),c(45),c(46),c(44)],e=function(a,b,c,d,e,f){var g=function(){function g(e){var f=c.tryCatch(function(){for(var c=e.responseXML.childNodes,f="",g=0;g<c.length&&(f=c[g],8===f.nodeType);g++);if("xml"===a.localName(f)&&(f=f.nextSibling),"rss"!==a.localName(f))return void i("Not a valid RSS feed");var h=b.parse(f);k.trigger(d.JWPLAYER_PLAYLIST_LOADED,{playlist:h})});f instanceof c.Error&&i()}function h(a){i(a.match(/invalid/i)?"Not a valid RSS feed":"")}function i(a){k.trigger(d.JWPLAYER_ERROR,{message:a?a:"Error loading file"})}var j,k=f.extend(this,e);this.load=function(a){j=c.ajax(a,g,h)},this.destroy=function(){this.off(),j=null}};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51)],e=function(a){return{localName:function(a){return a?a.localName?a.localName:a.baseName?a.baseName:"":""},textContent:function(b){return b?b.textContent?a.trim(b.textContent):b.text?a.trim(b.text):"":""},getChildNode:function(a,b){return a.childNodes[b]},numChildren:function(a){return a.childNodes?a.childNodes.length:0}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51),c(65),c(67),c(68),c(69)],e=function(a,b,c,d,e){function f(b){for(var f={},h=0;h<b.childNodes.length;h++){var i=b.childNodes[h],k=j(i);if(k)switch(k.toLowerCase()){case"enclosure":f.file=a.xmlAttribute(i,"url");break;case"title":f.title=g(i);break;case"guid":f.mediaid=g(i);break;case"pubdate":f.date=g(i);break;case"description":f.description=g(i);break;case"link":f.link=g(i);break;case"category":f.tags?f.tags+=g(i):f.tags=g(i)}}return f=d(b,f),f=c(b,f),new e(f)}var g=b.textContent,h=b.getChildNode,i=b.numChildren,j=b.localName,k={};return k.parse=function(a){for(var b=[],c=0;c<i(a);c++){var d=h(a,c),e=j(d).toLowerCase();if("channel"===e)for(var g=0;g<i(d);g++){var k=h(d,g);"item"===j(k).toLowerCase()&&b.push(f(k))}}return b},k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(65),c(51),c(47)],e=function(a,b,c){var d="jwplayer",e=function(e,f){for(var g=[],h=[],i=b.xmlAttribute,j="default",k="label",l="file",m="type",n=0;n<e.childNodes.length;n++){var o=e.childNodes[n];if(o.prefix===d){var p=a.localName(o);"source"===p?(delete f.sources,g.push({file:i(o,l),"default":i(o,j),label:i(o,k),type:i(o,m)})):"track"===p?(delete f.tracks,h.push({file:i(o,l),"default":i(o,j),kind:i(o,"kind"),label:i(o,k)})):(f[p]=c.serialize(a.textContent(o)),"file"===p&&f.sources&&delete f.sources)}f[l]||(f[l]=f.link)}if(g.length)for(f.sources=[],n=0;n<g.length;n++)g[n].file.length>0&&(g[n][j]="true"===g[n][j]?!0:!1,g[n].label.length||delete g[n].label,f.sources.push(g[n]));if(h.length)for(f.tracks=[],n=0;n<h.length;n++)h[n].file.length>0&&(h[n][j]="true"===h[n][j]?!0:!1,h[n].kind=h[n].kind.length?h[n].kind:"captions",h[n].label.length||delete h[n].label,f.tracks.push(h[n]));return f};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(65),c(51),c(47)],e=function(a,b,c){var d=b.xmlAttribute,e=a.localName,f=a.textContent,g=a.numChildren,h="media",i=function(a,b){function j(a){var b={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return b[a]?b[a]:a}var k,l,m="tracks",n=[];for(l=0;l<g(a);l++)if(k=a.childNodes[l],k.prefix===h){if(!e(k))continue;switch(e(k).toLowerCase()){case"content":d(k,"duration")&&(b.duration=c.seconds(d(k,"duration"))),g(k)>0&&(b=i(k,b)),d(k,"url")&&(b.sources||(b.sources=[]),b.sources.push({file:d(k,"url"),type:d(k,"type"),width:d(k,"width"),label:d(k,"label")}));break;case"title":b.title=f(k);break;case"description":b.description=f(k);break;case"guid":b.mediaid=f(k);break;case"thumbnail":b.image||(b.image=d(k,"url"));break;case"player":break;case"group":i(k,b);break;case"subtitle":var o={};o.file=d(k,"url"),o.kind="captions",d(k,"lang").length>0&&(o.label=j(d(k,"lang"))),n.push(o)}}for(b.hasOwnProperty(m)||(b[m]=[]),l=0;l<n.length;l++)b[m].push(n[l]);return b};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(70),c(71)],e=function(a,b,c){var d={sources:[],tracks:[]},e=function(e){e=e||{},a.isArray(e.tracks)||delete e.tracks;var f=a.extend({},d,e);a.isObject(f.sources)&&!a.isArray(f.sources)&&(f.sources=[b(f.sources)]),a.isArray(f.sources)&&0!==f.sources.length||(e.levels?f.sources=e.levels:f.sources=[b(e)]);for(var g=0;g<f.sources.length;g++){var h=f.sources[g];if(h){var i=h["default"];i?h["default"]="true"===i.toString():h["default"]=!1,f.sources[g].label||(f.sources[g].label=g.toString()),f.sources[g]=b(f.sources[g])}}return f.sources=a.compact(f.sources),a.isArray(f.tracks)||(f.tracks=[]),a.isArray(f.captions)&&(f.tracks=f.tracks.concat(f.captions),delete f.captions),f.tracks=a.compact(a.map(f.tracks,c)),f};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(51),c(44)],e=function(a,b,c){var d={"default":!1},e=function(e){if(e&&e.file){var f=c.extend({},d,e);f.file=b.trim(""+f.file);var g=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(g.test(f.type)&&(f.type=f.type.replace(g,"$1")),!f.type)if(a.isYouTube(f.file))f.type="youtube";else if(a.isRtmp(f.file))f.type="rtmp";else{var h=b.extension(f.file);f.type=h}if(f.type)return"m3u8"===f.type&&(f.type="hls"),"smil"===f.type&&(f.type="rtmp"),"m4a"===f.type&&(f.type="aac"),c.each(f,function(a,b){""===a&&delete f[b]}),f}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b={kind:"captions","default":!1},c=function(c){return c&&c.file?a.extend({},b,c):void 0};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(73),c(44)],e=function(a,b,d){function e(b){d.each(b,function(c,d){b[d]=a.serialize(c)})}function f(a){return a.slice&&"px"===a.slice(-2)&&(a=a.slice(0,-2)),a}function g(b,c){if(-1===c.toString().indexOf("%"))return 0;if("string"!=typeof b||!a.exists(b))return 0;var d=b.indexOf(":");if(-1===d)return 0;var e=parseFloat(b.substr(0,d)),f=parseFloat(b.substr(d+1));return 0>=e||0>=f?0:f/e*100+"%"}var h={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:b.UNIFORM,mute:!1,volume:90,width:480,height:270},i=function(b){var i=d.extend({},(window.jwplayer||{}).defaults,b);e(i);var j=d.extend({},h,i);if("."===j.base&&(j.base=a.getScriptPath("jwplayer.js")),j.base=(j.base||a.loadFrom()).replace(/\/?$/,"/"),c.p=j.base,j.width=f(j.width),j.height=f(j.height),j.flashplayer=j.flashplayer||a.getScriptPath("jwplayer.js")+"jwplayer.flash.swf","http:"===window.location.protocol&&(j.flashplayer=j.flashplayer.replace("https","http")),j.aspectratio=g(j.aspectratio,j.width),d.isObject(j.skin)&&(j.skinUrl=j.skin.url,j.skinColorInactive=j.skin.inactive,j.skinColorActive=j.skin.active,j.skinColorBackground=j.skin.background,j.skin=d.isString(j.skin.name)?j.skin.name:h.skin),d.isString(j.skin)&&j.skin.indexOf(".xml")>0&&(console.log("JW Player does not support XML skins, please update your config"),j.skin=j.skin.replace(".xml","")),j.aspectratio||delete j.aspectratio,!j.playlist){var k=d.pick(j,["title","description","type","mediaid","image","file","sources","tracks","preload"]);j.playlist=[k]}return j};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(47),c(55)],e=function(a,b,c){var d={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"},e=function(a,b,d,e,f){var g="";b=b||1,d=d||1,e=0|e,f=0|f,(1!==b||1!==d)&&(g="scale("+b+", "+d+")"),(e||f)&&(g&&(g+=" "),g+="translate("+e+"px, "+f+"px)"),c.transform(a,g)},f=e,g=function(e,g,h,i,j,k){if(!g)return!1;if(!(h&&i&&j&&k))return!1;e=e||d.UNIFORM;var l=2*Math.ceil(h/2)/j,m=2*Math.ceil(i/2)/k,n="video"===g.tagName.toLowerCase(),o=!1,p="jw-stretch-"+e.toLowerCase(),q=!1;switch(e.toLowerCase()){case d.FILL:l>m?m=l:l=m,o=!0;break;case d.NONE:l=m=1;case d.EXACTFIT:o=!0;break;case d.UNIFORM:default:l>m?(j*m/h>.95?(o=!0,p="jw-stretch-exactfit"):(j*=m,k*=m),q=!0):(k*l/i>.95?(o=!0,p="jw-stretch-exactfit"):(j*=l,k*=l),q=!1),o&&(l=2*Math.ceil(h/2)/j,m=2*Math.ceil(i/2)/k)}if(n){var r={left:"",right:"",width:"",height:""};if(o?(j>h&&(r.left=r.right=Math.ceil((h-j)/2)),k>i&&(r.top=r.bottom=Math.ceil((i-k)/2)),r.width=j,r.height=k,f(g,l,m,0,0)):(o=!1,c.transform(g)),b.isIOS(8)&&o===!1){var s={width:"auto",height:"auto"};e.toLowerCase()===d.UNIFORM&&(s[q===!1?"width":"height"]="100%"),a.extend(r,s)}c.style(g,r)}else g.className=g.className.replace(/\s*jw\-stretch\-(none|exactfit|uniform|fill)/g,"")+" "+p;return o};return{scale:e,stretching:d,stretch:g}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(75),c(92),c(45),c(61),c(47),c(46),c(44)],e=function(a,b,c,d,e,f,g){function h(c){var d=c.get("provider").name||"";return d.indexOf("flash")>=0?b:a}var i={skipoffset:null,tag:null},j=function(a,b,f){function j(a,b){b=b||{},u.tag&&!b.tag&&(b.tag=u.tag),this.trigger(a,b)}function k(a){s._adModel.set("duration",a.duration),s._adModel.set("position",a.position)}function l(a){if(m&&t+1<m.length){s._adModel.set("state","buffering"),b.set("skipButton",!1),t++;var d,e=m[t];n&&(d=n[t]),this.loadItem(e,d)}else a.type===c.JWPLAYER_MEDIA_COMPLETE&&(j.call(this,a.type,a),this.trigger(c.JWPLAYER_PLAYLIST_COMPLETE,{})),this.destroy()}var m,n,o,p,q,r=h(b),s=new r(a,b),t=0,u={},v=g.bind(function(a){a=a||{},a.hasControls=!!b.get("controls"),this.trigger(c.JWPLAYER_INSTREAM_CLICK,a),s&&s._adModel&&(s._adModel.get("state")===d.PAUSED?a.hasControls&&s.instreamPlay():s.instreamPause())},this),w=g.bind(function(){s&&s._adModel&&s._adModel.get("state")===d.PAUSED&&b.get("controls")&&(a.setFullscreen(),a.play())},this);this.type="instream",this.init=function(){o=b.getVideo(),p=b.get("position"),q=b.get("playlist")[b.get("item")],s.on("all",j,this),s.on(c.JWPLAYER_MEDIA_TIME,k,this),s.on(c.JWPLAYER_MEDIA_COMPLETE,l,this),s.init(),o.detachMedia(),b.mediaModel.set("state",d.BUFFERING),a.checkBeforePlay()||0===p&&!o.checkComplete()?(p=0,b.set("preInstreamState","instream-preroll")):o&&o.checkComplete()||b.get("state")===d.COMPLETE?b.set("preInstreamState","instream-postroll"):b.set("preInstreamState","instream-midroll");var g=b.get("state");return(g===d.PLAYING||g===d.BUFFERING)&&o.pause(),f.setupInstream(s._adModel),s._adModel.set("state",d.BUFFERING),f.clickHandler().setAlternateClickHandlers(e.noop,null),this.setText("Loading ad"),this},this.loadItem=function(a,d){if(e.isAndroid(2.3))return void this.trigger({type:c.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});g.isArray(a)&&(m=a,n=d,a=m[t],n&&(d=n[t])),this.trigger(c.JWPLAYER_PLAYLIST_ITEM,{index:t,item:a}),u=g.extend({},i,d),s.load(a),this.addClickHandler();var f=a.skipoffset||u.skipoffset;f&&(s._adModel.set("skipMessage",u.skipMessage),s._adModel.set("skipText",u.skipText),s._adModel.set("skipOffset",f),b.set("skipButton",!0))},this.play=function(){s.instreamPlay()},this.pause=function(){s.instreamPause()},this.hide=function(){s.hide()},this.addClickHandler=function(){f.clickHandler().setAlternateClickHandlers(v,w),s.on(c.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(a){var b=c.JWPLAYER_AD_SKIPPED;this.trigger(b,a),l.call(this,{type:b})},this.metaHandler=function(a){a.width&&a.height&&f.resizeMedia()},this.destroy=function(){if(this.off(),b.set("skipButton",!1),s){f.clickHandler()&&f.clickHandler().revertAlternateClickHandlers(),s.instreamDestroy(),f.destroyInstream(),s=null,a.attachMedia();var c=b.get("preInstreamState");switch(c){case"instream-preroll":case"instream-midroll":var h=g.extend({},q);h.starttime=p,b.loadVideo(h),e.isMobile()&&b.mediaModel.get("state")===d.BUFFERING&&o.setState(d.BUFFERING),o.play();break;case"instream-postroll":case"instream-idle":o.stop()}}},this.getState=function(){return s&&s._adModel?s._adModel.get("state"):!1},this.setText=function(a){f.setAltText(a?a:"")},this.hide=function(){f.useExternalControls()}};return g.extend(j.prototype,f),j}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(46),c(76),c(45),c(61),c(77)],e=function(a,b,c,d,e,f){var g=function(g,h){function i(){var b=m.getVideo();if(n!==b){if(n=b,!b)return;b.off(),b.on("all",function(b,c){c=a.extend({},c,{type:b}),this.trigger(b,c)},o),b.on(d.JWPLAYER_MEDIA_BUFFER_FULL,l),b.on(d.JWPLAYER_PLAYER_STATE,j),b.attachMedia(),b.mute(h.get("mute")),b.volume(h.get("volume")),m.on("change:state",c,o)}}function j(a){switch(a.newstate){case e.PLAYING:m.set("state",a.newstate);break;case e.PAUSED:m.set("state",a.newstate)}}function k(a){h.trigger(a.type,a),o.trigger(d.JWPLAYER_FULLSCREEN,{fullscreen:a.jwstate})}function l(){m.getVideo().play()}var m,n,o=a.extend(this,b);return g.on(d.JWPLAYER_FULLSCREEN,function(a){this.trigger(d.JWPLAYER_FULLSCREEN,a)},o),this.init=function(){m=(new f).setup({id:h.get("id"),volume:h.get("volume"),fullscreen:h.get("fullscreen"),mute:h.get("mute")}),m.on("fullscreenchange",k),this._adModel=m},o.load=function(a){m.set("item",0),m.set("playlistItem",a),m.setActiveItem(a),i(),m.off(d.JWPLAYER_ERROR),m.on(d.JWPLAYER_ERROR,function(a){this.trigger(d.JWPLAYER_ERROR,a)},o),m.loadVideo(a)},this.instreamDestroy=function(){m&&(m.off(),this.off(),n&&(n.detachMedia(),n.off(),n.destroy()),m=null,g.off(null,null,this),g=null)},o.instreamPlay=function(){m.getVideo()&&m.getVideo().play(!0)},o.instreamPause=function(){m.getVideo()&&m.getVideo().pause(!0)},o};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(61)],e=function(a){function b(b){return b===a.COMPLETE||b===a.ERROR?a.IDLE:b}return function(a,c,d){if(c=b(c),d=b(d),c!==d){var e=c.replace(/(?:ing|d)$/,""),f={type:e,newstate:c,oldstate:d,reason:a.mediaModel.get("state")};this.trigger(e,f)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(78),c(89),c(90),c(44),c(46),c(91),c(45),c(61)],e=function(a,b,c,d,e,f,g,h,i){var j=["volume","mute","captionLabel","qualityLabel"],k=function(){function g(a,b){switch(a){case"flashThrottle":var c="resume"!==b.state;this.set("flashThrottle",c),this.set("flashBlocked",c);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":case"mute":return void this.set(a,b[a]);case h.JWPLAYER_MEDIA_TYPE:this.mediaModel.set("mediaType",b.mediaType);break;case h.JWPLAYER_PLAYER_STATE:return void this.mediaModel.set("state",b.newstate);case h.JWPLAYER_MEDIA_BUFFER:this.set("buffer",b.bufferPercent);case h.JWPLAYER_MEDIA_META:var d=b.duration;e.isNumber(d)&&(this.mediaModel.set("duration",d),this.set("duration",d));break;case h.JWPLAYER_MEDIA_BUFFER_FULL:this.mediaModel.get("playAttempt")?this.playVideo():this.mediaModel.on("change:playAttempt",function(){this.playVideo()},this);break;case h.JWPLAYER_MEDIA_TIME:this.mediaModel.set("position",b.position),this.mediaModel.set("duration",b.duration),this.set("position",b.position),this.set("duration",b.duration);break;case h.JWPLAYER_PROVIDER_CHANGED:this.set("provider",m.getName());break;case h.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(b.currentQuality,b.levels),this.mediaModel.set("levels",b.levels);break;case h.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(b.currentQuality,b.levels),this.persistQualityLevel(b.currentQuality,b.levels);break;case h.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(b.currentTrack,b.tracks),this.mediaModel.set("audioTracks",b.tracks);break;case h.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(b.currentTrack,b.tracks);break;case"visualQuality":var f=e.extend({},b);this.mediaModel.set("visualQuality",f)}var g=e.extend({},b,{type:a});this.mediaController.trigger(a,g)}var k,m,n=this,o=a.noop;this.mediaController=e.extend({},f),this.mediaModel=new l,d.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(b){var d=new c;return d.track(j,this),e.extend(this.attributes,b,d.getAllItems(),{item:0,state:i.IDLE,flashBlocked:!1,fullscreen:!1,compactUI:!1,scrubbing:!1,duration:0,position:0,buffer:0}),a.isMobile()&&!b.mobileSdk&&this.set("autostart",!1),this.updateProviders(),this},this.getConfiguration=function(){return e.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){k=new b(this.getConfiguration())},this.setQualityLevel=function(a,b){a>-1&&b.length>1&&"youtube"!==m.getName().name&&this.mediaModel.set("currentLevel",parseInt(a))},this.persistQualityLevel=function(a,b){var c=b[a]||{},d=c.label;this.set("qualityLabel",d)},this.setCurrentAudioTrack=function(a,b){a>-1&&b.length>1&&this.mediaModel.set("currentAudioTrack",parseInt(a))},this.onMediaContainer=function(){var a=this.get("mediaContainer");o.setContainer(a)},this.changeVideoProvider=function(a){this.off("change:mediaContainer",this.onMediaContainer),m&&(m.off(null,null,this),m.getContainer()&&m.remove()),o=new a(n.get("id"),n.getConfiguration());var b=this.get("mediaContainer");b?o.setContainer(b):this.once("change:mediaContainer",this.onMediaContainer),this.set("provider",o.getName()),-1===o.getName().name.indexOf("flash")&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),m=o,m.volume(n.get("volume")),m.mute(n.get("mute")),m.on("all",g,this)},this.destroy=function(){m&&(m.off(null,null,this),m.destroy())},this.getVideo=function(){return m},this.setFullscreen=function(a){a=!!a,a!==n.get("fullscreen")&&n.set("fullscreen",a)},this.chooseProvider=function(a){return k.choose(a).provider},this.setActiveItem=function(a){this.mediaModel.off(),this.mediaModel=new l,this.set("mediaModel",this.mediaModel);var b=a&&a.sources&&a.sources[0];if(void 0!==b){var c=this.chooseProvider(b);if(!c)throw new Error("No suitable provider found");o instanceof c||n.changeVideoProvider(c),o.init&&o.init(a),this.trigger("itemReady",a)}},this.getProviders=function(){return k},this.resetProvider=function(){o=null},this.setVolume=function(a){a=Math.round(a),n.set("volume",a),m&&m.volume(a);var b=0===a;b!==n.get("mute")&&n.setMute(b)},this.setMute=function(b){if(a.exists(b)||(b=!n.get("mute")),n.set("mute",b),m&&m.mute(b),!b){var c=Math.max(10,n.get("volume"));this.setVolume(c)}},this.loadVideo=function(a){if(this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(h.JWPLAYER_MEDIA_PLAY_ATTEMPT),!a){var b=this.get("item");a=this.get("playlist")[b]}this.set("position",a.starttime||0),this.set("duration",a.duration||0),m.load(a)},this.stopVideo=function(){m&&m.stop()},this.playVideo=function(){m.play()},this.persistCaptionsTrack=function(){var a=this.get("captionsTrack");a?this.set("captionLabel",a.label):this.set("captionLabel","Off")},this.setVideoSubtitleTrack=function(a){this.set("captionsIndex",a),this.persistCaptionsTrack(),m.setSubtitlesTrack&&m.setSubtitlesTrack(a)}},l=k.MediaModel=function(){this.set("state",i.IDLE)};return e.extend(k.prototype,g),e.extend(l.prototype,g),k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(79)],e=function(a){return a.prototype.providerSupports=function(a,b){return a.supports(b,this.config.edition)},a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(80),c(84),c(44)],e=function(a,b,c){function d(b){this.providers=a.slice(),this.config=b||{},"flash"===this.config.primary&&f(this.providers,"html5","flash")}function e(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return c;return-1}function f(a,b,c){var d=e(a,b),f=e(a,c),g=a[d];a[d]=a[f],a[f]=g}return c.extend(d.prototype,{providerSupports:function(a,b){return a.supports(b)},choose:function(a){a=c.isObject(a)?a:{};for(var d=this.providers.length,e=0;d>e;e++){var f=this.providers[e];if(this.providerSupports(f,a)){var g=d-e-1;return{priority:g,name:f.name,type:a.type,provider:b[f.name]}}}return null}}),d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(81),c(44),c(82)],e=function(a,b,c,d){function e(c,d){var e=b(d);if(!e("dash"))return!1;if(c.drm&&!e("drm"))return!1;if(!window.MediaSource)return!1;if(!a.isChrome()&&!a.isEdge())return!1;var f=c.file||"";return"dash"===c.type||"mpd"===c.type||f.indexOf(".mpd")>-1||f.indexOf("mpd-time-csf")>-1?!0:!1}var f=c.find(d,c.matches({name:"flash"})),g=f.supports;return f.supports=function(c,d){if(!a.isFlashSupported())return!1;var e=c&&c.type;if("hls"===e||"m3u8"===e){var f=b(d);return f("hls")}return g.apply(this,arguments)},d.push({name:"dashjs",supports:c.constant(!1)}),d.push({name:"shaka",supports:e}),d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b={setup:["free","premium","enterprise","ads","trial"],"custom-rightclick":["free","premium","enterprise","ads","trial"],dash:["premium","enterprise","ads","trial"],drm:["enterprise","ads","trial"],hls:["premium","ads","enterprise","trial"],ads:["ads","trial"],casting:["premium","enterprise","ads","trial"]},c=function(c){return function(d){return a.contains(b[d],c)}};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(44),c(83)],e=function(a,b,c){function d(b){if("hls"===b.type)if(b.androidhls!==!1){var c=a.isAndroidNative;if(c(2)||c(3)||c("4.0"))return!1;if(a.isAndroid())return!0}else if(a.isAndroid())return!1;return null}var e=[{name:"youtube",supports:function(b){return a.isYouTube(b.file,b.type)}},{name:"html5",supports:function(b){var e={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},f=b.file,g=b.type,h=d(b);if(null!==h)return h;if(a.isRtmp(f,g))return!1;if(!e[g])return!1;if(c.canPlayType){var i=c.canPlayType(e[g]);return!!i}return!1}},{name:"flash",supports:function(c){var d={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},e=b.keys(d);if(!a.isFlashSupported())return!1;var f=c.file,g=c.type;return a.isRtmp(f,g)?!0:b.contains(e,g)}}];return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return document.createElement("video")}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(85),c(87)],e=function(a,b){var c={html5:a,flash:b};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(55),c(47),c(73),c(44),c(45),c(61),c(86),c(46)],e=function(a,b,c,d,e,f,g,h){function i(a,c){b.foreach(a,function(a,b){c.addEventListener(a,b,!1)})}function j(a,c){b.foreach(a,function(a,b){c.removeEventListener(a,b,!1)})}function k(a){if("hls"===a.type)if(a.androidhls!==!1){var c=b.isAndroidNative;if(c(2)||c(3)||c("4.0"))return!1;if(b.isAndroid())return!0}else if(b.isAndroid())return!1;return null}function l(l,v){function w(a){ea.trigger("click",a)}function x(){ka&&(A(U(),ba,qa.duration),C(qa.duration))}function y(){ka&&A(U(),ba,aa)}function z(){m(ia),ga=!0,ka&&(ea.state===f.STALLED?ea.setState(f.PLAYING):ea.state===f.PLAYING&&(ia=setTimeout(T,n)),C(qa.duration),B(qa.currentTime),A(U(),ba,aa),ea.state===f.PLAYING&&ea.trigger(e.JWPLAYER_MEDIA_TIME,{position:ba,duration:aa}))}function A(a,b,c){(a!==ja||c!==aa)&&(ja=a,ea.trigger(e.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100*a,position:b,duration:c}))}function B(a){ba=a}function C(a){aa=a,ha>0&&aa>ha&&ea.seek(ha)}function D(){ea.trigger(e.JWPLAYER_MEDIA_META,{duration:qa.duration,height:qa.videoHeight,width:qa.videoWidth}),C(qa.duration)}function E(){ka&&(ga=!0,G())}function F(){ka&&(qa.muted&&(qa.muted=!1,qa.muted=!0),D())}function G(){ca||(ca=!0,ea.trigger(e.JWPLAYER_MEDIA_BUFFER_FULL))}function H(){ea.setState(f.PLAYING),ea.trigger(e.JWPLAYER_PROVIDER_FIRST_FRAME,{})}function I(){ea.state!==f.COMPLETE&&qa.currentTime!==qa.duration&&ea.setState(f.PAUSED)}function J(){ma||qa.paused||qa.ended||ea.state!==f.LOADING&&ea.state!==f.ERROR&&(ea.seeking||ea.setState(f.STALLED))}function K(){ka&&(b.log("Error playing media: %o %s",qa.error,qa.src||_.file),ea.trigger(e.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"}))}function L(a){var c;return"array"===b.typeOf(a)&&a.length>0&&(c=d.map(a,function(a,b){return{label:a.label||b}})),c}function M(a){da=a,la=N(a);var b=L(a);b&&ea.trigger(e.JWPLAYER_MEDIA_LEVELS,{levels:b,currentQuality:la})}function N(a){var b=Math.max(0,la),c=v.qualityLabel;if(a)for(var d=0;d<a.length;d++)if(a[d]["default"]&&(b=d),c&&a[d].label===c)return d;return b}function O(){return p||q}function P(a,c){_=da[la],ha=0,m(ia);var d=qa.src!==_.file;d||O()?(aa=c,
Q(),qa.load()):(0===a&&0!==qa.currentTime&&(ha=-1,ea.seek(a)),qa.play()),ba=qa.currentTime,p&&(G(),qa.paused||ea.state===f.PLAYING||ea.setState(f.LOADING)),b.isIOS()&&ea.getFullScreen()&&(qa.controls=!0),a>0&&ea.seek(a)}function Q(){ga=!1,ca=!1,ma=k(_),qa.src=_.file,_.preload&&qa.setAttribute("preload",_.preload)}function R(){ea.seeking=!1,ea.trigger(e.JWPLAYER_MEDIA_SEEKED)}function S(){ea.trigger("volume",{volume:Math.round(100*qa.volume)}),ea.trigger("mute",{mute:qa.muted})}function T(){qa.currentTime===ba&&J()}function U(){var a=qa.buffered,c=qa.duration;return!a||0===a.length||0>=c||c===1/0?0:b.between(a.end(a.length-1)/c,0,1)}function V(){if(ka&&ea.state!==f.IDLE&&ea.state!==f.COMPLETE){if(m(ia),la=-1,na=!0,ea.trigger(e.JWPLAYER_MEDIA_BEFORECOMPLETE),!ka)return;W()}}function W(){m(ia),ea.setState(f.COMPLETE),na=!1,ea.trigger(e.JWPLAYER_MEDIA_COMPLETE)}function X(a){oa=!0,Z(a),b.isIOS()&&(qa.controls=!1)}function Y(a){oa=!1,Z(a),b.isIOS()&&(qa.controls=!1)}function Z(a){ea.trigger("fullscreenchange",{target:a.target,jwstate:oa})}this.state=f.IDLE,this.seeking=!1,d.extend(this,h),this.trigger=function(a,b){return ka?h.trigger.call(this,a,b):void 0},this.setState=function(a){return ka?g.setState.call(this,a):void 0};var $,_,aa,ba,ca,da,ea=this,fa={click:w,durationchange:x,ended:V,error:K,loadedmetadata:F,canplay:E,playing:H,progress:y,pause:I,seeked:R,timeupdate:z,volumechange:S,webkitbeginfullscreen:X,webkitendfullscreen:Y},ga=!1,ha=0,ia=-1,ja=-1,ka=!0,la=-1,ma=null,na=!1,oa=!1,pa=document.getElementById(l),qa=pa?pa.querySelector("video"):void 0;qa=qa||document.createElement("video"),qa.className="jw-video jw-reset",i(fa,qa),t||(qa.controls=!0,qa.controls=!1),qa.setAttribute("x-webkit-airplay","allow"),qa.setAttribute("webkit-playsinline",""),this.stop=function(){m(ia),ka&&(qa.removeAttribute("src"),o||qa.load(),b.isIETrident()&&qa.pause(),la=-1,this.setState(f.IDLE))},this.destroy=function(){j(fa,qa),this.remove(),this.off()},this.init=function(a){ka&&(da=a.sources,la=N(a.sources),this.sendMediaType(a.sources),_=da[la],ba=a.starttime||0,aa=a.duration||0,Q(a))},this.load=function(a){ka&&(M(a.sources),this.sendMediaType(a.sources),p||ea.setState(f.LOADING),P(a.starttime||0,a.duration||0))},this.play=function(){return ea.seeking?(ea.setState(f.LOADING),void ea.once(e.JWPLAYER_MEDIA_SEEKED,ea.play)):void qa.play()},this.pause=function(){m(ia),qa.pause(),this.setState(f.PAUSED)},this.seek=function(a){if(ka)if(0===ha&&this.trigger(e.JWPLAYER_MEDIA_SEEK,{position:qa.currentTime,offset:a}),ga){ha=0;var c=b.tryCatch(function(){ea.seeking=!0,qa.currentTime=a});c instanceof b.Error&&(ha=a)}else ha=a,r&&qa.paused&&qa.play()},this.volume=function(a){a=b.between(a/100,0,1),qa.volume=a},this.mute=function(a){qa.muted=!!a},this.checkComplete=function(){return na},this.detachMedia=function(){return m(ia),ka=!1,qa},this.attachMedia=function(a){ka=!0,a||(ga=!1),this.seeking=!1,qa.loop=!1,na&&W()},this.setContainer=function(a){$=a,a.appendChild(qa)},this.getContainer=function(){return $},this.remove=function(){qa&&(qa.removeAttribute("src"),o||qa.load()),m(ia),la=-1,$===qa.parentNode&&$.removeChild(qa)},this.setVisibility=function(b){b=!!b,b||s?a.style($,{visibility:"visible",opacity:1}):a.style($,{visibility:"",opacity:0})},this.resize=function(a,b,d){return c.stretch(d,qa,a,b,qa.videoWidth,qa.videoHeight)},this.setFullscreen=function(a){if(a=!!a){var c=b.tryCatch(function(){var a=qa.webkitEnterFullscreen||qa.webkitEnterFullScreen;a&&a.apply(qa)});return c instanceof b.Error?!1:ea.getFullScreen()}var d=qa.webkitExitFullscreen||qa.webkitExitFullScreen;return d&&d.apply(qa),a},ea.getFullScreen=function(){return oa||!!qa.webkitDisplayingFullscreen},this.setCurrentQuality=function(a){if(la!==a&&(a=parseInt(a,10),a>=0&&da&&da.length>a)){la=a,this.trigger(e.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:a,levels:L(da)}),v.qualityLabel=da[a].label;var b=qa.currentTime||0,c=qa.duration||0;0>=c&&(c=aa),ea.setState(f.LOADING),P(b,c)}},this.getCurrentQuality=function(){return la},this.getQualityLevels=function(){return L(da)},this.getName=function(){return{name:u}}}var m=window.clearTimeout,n=256,o=b.isMSIE(),p=b.isMobile(),q=b.isSafari(),r=b.isFF(),s=b.isAndroidNative(),t=b.isIOS(7),u="html5",v=function(){};return v.prototype=g,l.prototype=new v,l}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45),c(61),c(44)],e=function(a,b,c,d){var e=a.noop,f=d.constant(!1),g={supports:f,play:e,load:e,stop:e,volume:e,mute:e,seek:e,resize:e,remove:e,destroy:e,setVisibility:e,setFullscreen:f,getFullscreen:e,getContainer:e,setContainer:f,getName:e,getQualityLevels:e,getCurrentQuality:e,setCurrentQuality:e,getAudioTracks:e,getCurrentAudioTrack:e,setCurrentAudioTrack:e,checkComplete:e,setControls:e,attachMedia:e,detachMedia:e,setState:function(a){var d=this.state||c.IDLE;this.state=a,a!==d&&this.trigger(b.JWPLAYER_PLAYER_STATE,{newstate:a})},sendMediaType:function(a){var c=a[0].type,d="oga"===c||"aac"===c||"mp3"===c||"mpeg"===c||"vorbis"===c;this.trigger(b.JWPLAYER_MEDIA_TYPE,{mediaType:d?"audio":"video"})}};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(44),c(45),c(61),c(88),c(86),c(46)],e=function(a,b,c,d,e,f,g){function h(a){return a+"_swf_"+k++}function i(b){var c=document.createElement("a");c.href=b.flashplayer;var d=c.hostname===window.location.host;return a.isChrome()&&!d}function j(j,k){function l(a){if(C)for(var b=0;b<a.length;b++){var c=a[b];if(c.bitrate){var d=Math.round(c.bitrate/1024);c.label=m(d)}}}function m(a){var b=C[a];if(!b){for(var c=1/0,d=C.bitrates.length;d--;){var e=Math.abs(C.bitrates[d]-a);if(e>c)break;c=e}b=C.labels[C.bitrates[d+1]],C[a]=b}return b}function n(){var a=k.hlslabels;if(!a)return null;var b={},c=[];for(var d in a){var e=parseFloat(d);if(!isNaN(e)){var f=Math.round(e);b[f]=a[d],c.push(f)}}return 0===c.length?null:(c.sort(function(a,b){return a-b}),{labels:b,bitrates:c})}var o,p,q,r=null,s=-1,t=!1,u=-1,v=null,w=-1,x=null,y=!0,z=!1,A=function(){return p&&p.__ready},B=function(){p&&p.triggerFlash.apply(p,arguments)},C=n();b.extend(this,g,{init:function(a){a.preload&&"none"!==a.preload&&!k.autostart&&(r=a)},load:function(a){r=a,t=!1,this.setState(d.LOADING),B("load",a),this.sendMediaType(a.sources)},play:function(){B("play")},pause:function(){B("pause"),this.setState(d.PAUSED)},stop:function(){B("stop"),u=-1,r=null,this.setState(d.IDLE)},seek:function(a){B("seek",a)},volume:function(a){if(b.isNumber(a)){var c=Math.min(Math.max(0,a),100);A()&&B("volume",c)}},mute:function(a){A()&&B("mute",a)},setState:function(){return f.setState.apply(this,arguments)},checkComplete:function(){return t},attachMedia:function(){y=!0,t&&(this.setState(d.COMPLETE),this.trigger(c.JWPLAYER_MEDIA_COMPLETE),t=!1)},detachMedia:function(){return y=!1,null},getSwfObject:function(a){var b=a.getElementsByTagName("object")[0];return b?(b.off(null,null,this),b):e.embed(k.flashplayer,a,h(j),k.wmode)},getContainer:function(){return o},setContainer:function(e){if(o!==e){o=e,p=this.getSwfObject(e);var f=this;s=setTimeout(function(){g.trigger.call(f,"flashBlocked")},4e3),p.once("embedded",function(){clearTimeout(s),g.trigger.call(f,"flashUnblocked")},this),p.once("ready",function(){clearTimeout(s),p.once("pluginsLoaded",function(){p.queueCommands=!1,B("setupCommandQueue",p.__commandQueue),p.__commandQueue=[]});var a=b.extend({},k),d=p.triggerFlash("setup",a);d===p?p.__ready=!0:this.trigger(c.JWPLAYER_MEDIA_ERROR,d),r&&B("init",r)},this);var h=[c.JWPLAYER_MEDIA_META,c.JWPLAYER_MEDIA_ERROR,c.JWPLAYER_MEDIA_SEEK,c.JWPLAYER_MEDIA_SEEKED,"subtitlesTracks","subtitlesTrackChanged","subtitlesTrackData"],j=[c.JWPLAYER_MEDIA_BUFFER,c.JWPLAYER_MEDIA_TIME],m=[c.JWPLAYER_MEDIA_BUFFER_FULL];p.on(c.JWPLAYER_MEDIA_LEVELS,function(a){l(a.levels),u=a.currentQuality,v=a.levels,this.trigger(a.type,a)},this),p.on(c.JWPLAYER_MEDIA_LEVEL_CHANGED,function(a){l(a.levels),u=a.currentQuality,v=a.levels,this.trigger(a.type,a)},this),p.on(c.JWPLAYER_AUDIO_TRACKS,function(a){w=a.currentTrack,x=a.tracks,this.trigger(a.type,a)},this),p.on(c.JWPLAYER_AUDIO_TRACK_CHANGED,function(a){w=a.currentTrack,x=a.tracks,this.trigger(a.type,a)},this),p.on(c.JWPLAYER_PLAYER_STATE,function(a){var b=a.newstate;b!==d.IDLE&&this.setState(b)},this),p.on(j.join(" "),function(a){"Infinity"===a.duration&&(a.duration=1/0),this.trigger(a.type,a)},this),p.on(h.join(" "),function(a){this.trigger(a.type,a)},this),p.on(m.join(" "),function(a){this.trigger(a.type)},this),p.on(c.JWPLAYER_MEDIA_BEFORECOMPLETE,function(a){t=!0,this.trigger(a.type),y===!0&&(t=!1)},this),p.on(c.JWPLAYER_MEDIA_COMPLETE,function(a){t||(this.setState(d.COMPLETE),this.trigger(a.type))},this),p.on("visualQuality",function(a){a.reason=a.reason||"api",this.trigger("visualQuality",a),this.trigger(c.JWPLAYER_PROVIDER_FIRST_FRAME,{})},this),p.on(c.JWPLAYER_PROVIDER_CHANGED,function(a){q=a.message,this.trigger(c.JWPLAYER_PROVIDER_CHANGED,a)},this),p.on(c.JWPLAYER_ERROR,function(b){a.log("Error playing media: %o %s",b.code,b.message,b),this.trigger(c.JWPLAYER_MEDIA_ERROR,b)},this),i(k)&&p.on("throttle",function(a){clearTimeout(s),"resume"===a.state?g.trigger.call(f,"flashThrottle",a):s=setTimeout(function(){g.trigger.call(f,"flashThrottle",a)},250)},this)}},remove:function(){u=-1,v=null,e.remove(p)},setVisibility:function(a){a=!!a,o.style.opacity=a?1:0},resize:function(a,b,c){c&&B("stretch",c)},setControls:function(a){B("setControls",a)},setFullscreen:function(a){z=a,B("fullscreen",a)},getFullScreen:function(){return z},setCurrentQuality:function(a){B("setCurrentQuality",a)},getCurrentQuality:function(){return u},setSubtitlesTrack:function(a){B("setSubtitlesTrack",a)},getName:function(){return q?{name:"flash_"+q}:{name:"flash"}},getQualityLevels:function(){return v||r.sources},getAudioTracks:function(){return x},getCurrentAudioTrack:function(){return w},setCurrentAudioTrack:function(a){B("setCurrentAudioTrack",a)},destroy:function(){this.remove(),p&&(p.off(),p=null),o=null,r=null,this.off()}}),this.trigger=function(a,b){return y?g.trigger.call(this,a,b):void 0}}var k=0,l=function(){};return l.prototype=f,j.prototype=new l,j}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(46),c(44)],e=function(a,b,c){function d(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function e(e,f,i,j){var k;if(j=j||"opaque",a.isMSIE()){var l=document.createElement("div");f.appendChild(l),l.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+i+'" name="'+i+'" tabindex="0"><param name="movie" value="'+e+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+j+'"><param name="bgcolor" value="'+h+'"><param name="menu" value="false"></object>';for(var m=f.getElementsByTagName("object"),n=m.length;n--;)m[n].id===i&&(k=m[n])}else k=document.createElement("object"),k.setAttribute("type","application/x-shockwave-flash"),k.setAttribute("data",e),k.setAttribute("width","100%"),k.setAttribute("height","100%"),k.setAttribute("bgcolor",h),k.setAttribute("id",i),k.setAttribute("name",i),d(k,"allowfullscreen","true"),d(k,"allowscriptaccess","always"),d(k,"wmode",j),d(k,"menu","false"),f.appendChild(k,f);return k.className="jw-swf jw-reset",k.style.display="block",k.style.position="absolute",k.style.left=0,k.style.right=0,k.style.top=0,k.style.bottom=0,c.extend(k,b),k.queueCommands=!0,k.triggerFlash=function(b){var d=this;if("setup"!==b&&d.queueCommands||!d.__externalCall){for(var e=d.__commandQueue,f=e.length;f--;)e[f][0]===b&&e.splice(f,1);return e.push(Array.prototype.slice.call(arguments)),d}var h=Array.prototype.slice.call(arguments,1),i=a.tryCatch(function(){if(h.length){for(var a=h.length;a--;)"object"==typeof h[a]&&c.each(h[a],g);var e=JSON.stringify(h);d.__externalCall(b,e)}else d.__externalCall(b)});return i instanceof a.Error&&(console.error(b,i),"setup"===b)?(i.name="Failed to setup flash",i):d},k.__commandQueue=[],k}function f(a){a&&a.parentNode&&(a.style.display="none",a.parentNode.removeChild(a))}function g(a,b,c){a instanceof window.HTMLElement&&delete c[b]}var h="#000000";return{embed:e,remove:f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(47)],e=function(a,b){function c(a){return"jwplayer."+a}function d(){return a.reduce(this.persistItems,function(a,d){var e=j[c(d)];return e&&(a[d]=b.serialize(e)),a},{})}function e(a,b){try{j[c(a)]=b}catch(d){i&&i.debug&&console.error(d)}}function f(){a.each(this.persistItems,function(a){j.removeItem(c(a))})}function g(){}function h(b,c){this.persistItems=b,a.each(this.persistItems,function(a){c.on("change:"+a,function(b,c){e(a,c)})})}var i=window.jwplayer,j={removeItem:b.noop};try{j=window.localStorage}catch(k){}return a.extend(g.prototype,{getAllItems:d,track:h,clear:f}),g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(60),c(45),c(44)],e=function(a,b,c){function d(a){a.mediaController.off(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,a._onPlayAttempt),a.mediaController.off(b.JWPLAYER_PROVIDER_FIRST_FRAME,a._triggerFirstFrame),a.mediaController.off(b.JWPLAYER_MEDIA_TIME,a._onTime)}function e(a){d(a),a._triggerFirstFrame=c.once(function(){var c=a._qoeItem;c.tick(b.JWPLAYER_MEDIA_FIRST_FRAME);var e=c.between(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,b.JWPLAYER_MEDIA_FIRST_FRAME);a.mediaController.trigger(b.JWPLAYER_MEDIA_FIRST_FRAME,{loadTime:e}),d(a)}),a._onTime=g(a._triggerFirstFrame),a._onPlayAttempt=function(){a._qoeItem.tick(b.JWPLAYER_MEDIA_PLAY_ATTEMPT)},a.mediaController.once(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,a._onPlayAttempt),a.mediaController.once(b.JWPLAYER_PROVIDER_FIRST_FRAME,a._triggerFirstFrame),a.mediaController.on(b.JWPLAYER_MEDIA_TIME,a._onTime)}function f(c){function d(c,d,f){c._qoeItem&&f&&c._qoeItem.end(f.get("state")),c._qoeItem=new a,c._qoeItem.tick(b.JWPLAYER_PLAYLIST_ITEM),c._qoeItem.start(d.get("state")),e(c),d.on("change:state",function(a,b,d){c._qoeItem.end(d),c._qoeItem.start(b)})}c.on("change:mediaModel",d)}var g=function(a){var b=Number.MIN_VALUE;return function(c){c.position>b&&a(),b=c.position}};return{model:f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(46)],e=function(a,b){var c=a.extend({get:function(a){return this.attributes=this.attributes||{},this.attributes[a]},set:function(a,b){if(this.attributes=this.attributes||{},this.attributes[a]!==b){var c=this.attributes[a];this.attributes[a]=b,this.trigger("change:"+a,this,b,c)}},clone:function(){return a.clone(this.attributes)}},b);return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(46),c(77),c(76),c(45),c(61),c(47),c(44)],e=function(a,b,c,d,e,f,g){var h=function(a,d){this.model=d,this._adModel=(new b).setup({id:d.get("id"),volume:d.get("volume"),fullscreen:d.get("fullscreen"),mute:d.get("mute")}),this._adModel.on("change:state",c,this);var e=a.getContainer();this.swf=e.querySelector("object")};return h.prototype=g.extend({init:function(){if(f.isChrome()){var a=-1,b=!1;this.swf.on("throttle",function(c){if(clearTimeout(a),"resume"===c.state)b&&(b=!1,this.instreamPlay());else{var d=this;a=setTimeout(function(){d._adModel.get("state")===e.PLAYING&&(b=!0,d.instreamPause())},250)}},this)}this.swf.on("instream:state",function(a){switch(a.newstate){case e.PLAYING:this._adModel.set("state",a.newstate);break;case e.PAUSED:this._adModel.set("state",a.newstate)}},this).on("instream:time",function(a){this._adModel.set("position",a.position),this._adModel.set("duration",a.duration),this.trigger(d.JWPLAYER_MEDIA_TIME,a)},this).on("instream:complete",function(a){this.trigger(d.JWPLAYER_MEDIA_COMPLETE,a)},this).on("instream:error",function(a){this.trigger(d.JWPLAYER_MEDIA_ERROR,a)},this),this.swf.triggerFlash("instream:init")},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(a){this.swf.triggerFlash("instream:load",a)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},a),h}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(94),c(46),c(44),c(45)],e=function(a,b,c,d){var e=function(b,e,f,g){function h(){m("Setup Timeout Error","Setup took longer than "+q+" seconds to complete.")}function i(){c.each(p,function(a){a.complete!==!0&&a.running!==!0&&null!==b&&k(a.depends)&&(a.running=!0,j(a))})}function j(a){var c=function(b){b=b||{},l(a,b)};a.method(c,e,b,f,g)}function k(a){return c.all(a,function(a){return p[a].complete})}function l(a,b){"error"===b.type?m(b.msg,b.reason):"complete"===b.type?(clearTimeout(n),o.trigger(d.JWPLAYER_READY)):(a.complete=!0,i())}function m(a,b){clearTimeout(n),o.trigger(d.JWPLAYER_SETUP_ERROR,{message:a+": "+b}),o.destroy()}var n,o=this,p=a.getQueue(),q=30;this.start=function(){n=setTimeout(h,1e3*q),i()},this.destroy=function(){clearTimeout(n),this.off(),p.length=0,b=null,e=null,f=null}};return e.prototype=b,e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(95),c(81),c(80),c(44),c(47),c(97)],e=function(a,b,d,e,f,g){function h(a,b,c){if(b){var d=b.client;delete b.client,/\.(js|swf)$/.test(d||"")||(d=f.repo()+c),a[d]=b}}function i(a,c){var d=e.clone(c.get("plugins"))||{},g=c.get("edition"),i=b(g),j=/\.(js|swf)$/,k=f.repo(),l=c.get("advertising");i("ads")&&l&&(j.test(l.client)?d[l.client]=l:d[k+l.client+".js"]=l,delete l.client);var m=c.get("analytics");e.isObject(m)||(m={}),h(d,m,"jwpsrv.js"),h(d,c.get("ga"),"gapro.js"),h(d,c.get("sharing"),"sharing.js"),h(d,c.get("related"),"related.js"),c.set("plugins",d),a()}function j(b,c){var d=c.get("key")||window.jwplayer&&window.jwplayer.key,e=new a(d),f=e.edition();c.set("key",d),c.set("edition",f),c.updateProviders(),"invalid"===f?g.error(b,"Error setting up player",(void 0===d?"Missing":"Invalid")+" license key"):b()}function k(a,b,d){"dashjs"===a?c.e(4,function(a){var e=c(107);e.register(window.jwplayer),d.updateProviders(),b()}):c.e(5,function(a){var e=c(109);e.register(window.jwplayer),d.updateProviders(),b()})}function l(a,b){var c=b.get("playlist"),f=b.get("edition"),g=b.get("dash");e.contains(["shaka","dashjs"],g)||(g="shaka");var h=e.where(d,{name:g})[0].supports,i=e.some(c,function(a){return h(a,f)});i?k(g,a,b):a()}function m(){var a=g.getQueue();return a.LOAD_DASH={method:l,depends:["CHECK_KEY","FILTER_PLAYLIST"]},a.CHECK_KEY={method:j,depends:["LOADED_POLYFILLS"]},a.FILTER_PLUGINS={method:i,depends:["CHECK_KEY"]},a.FILTER_PLAYLIST.depends.push("CHECK_KEY"),a.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),a.SETUP_VIEW.depends.push("CHECK_KEY"),a.SEND_READY.depends.push("LOAD_DASH"),a}return{getQueue:m}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(96),c(81)],e=function(a,b,c){var d="invalid",e="RnXcsftYjWRDA^Uy",f=function(f){function g(f){a.exists(f)||(f="");try{f=b.decrypt(f,e);var g=f.split("/");h=g[0],"pro"===h&&(h="premium");var k=c(h);if(g.length>2&&k("setup")){i=g[1];var l=parseInt(g[2]);l>0&&(j=new Date,j.setTime(l))}else h=d}catch(m){h=d}}var h,i,j;this.edition=function(){return j&&j.getTime()<(new Date).getTime()?d:h},this.token=function(){return i},this.expiration=function(){return j},g(f)};return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a=function(a){return window.atob(a)},b=function(a){return unescape(encodeURIComponent(a))},c=function(a){try{return decodeURIComponent(escape(a))}catch(b){return a}},d=function(a){for(var b=new Array(Math.ceil(a.length/4)),c=0;c<b.length;c++)b[c]=a.charCodeAt(4*c)+(a.charCodeAt(4*c+1)<<8)+(a.charCodeAt(4*c+2)<<16)+(a.charCodeAt(4*c+3)<<24);return b},e=function(a){for(var b=new Array(a.length),c=0;c<a.length;c++)b[c]=String.fromCharCode(255&a[c],a[c]>>>8&255,a[c]>>>16&255,a[c]>>>24&255);return b.join("")};return{decrypt:function(f,g){if(f=String(f),g=String(g),0==f.length)return"";for(var h,i,j=d(a(f)),k=d(b(g).slice(0,16)),l=j.length,m=j[l-1],n=j[0],o=2654435769,p=Math.floor(6+52/l),q=p*o;0!=q;){i=q>>>2&3;for(var r=l-1;r>=0;r--)m=j[r>0?r-1:l-1],h=(m>>>5^n<<2)+(n>>>3^m<<4)^(q^n)+(k[3&r^i]^m),n=j[r]-=h;q-=o}var s=e(j);return s=s.replace(/\0+$/,""),c(s)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(98),c(64),c(101),c(58),c(44),c(47),c(45)],e=function(a,b,d,e,f,g,h){function i(){var a={LOAD_PROMISE_POLYFILL:{method:j,depends:[]},LOAD_BASE64_POLYFILL:{method:k,depends:[]},LOADED_POLYFILLS:{method:l,depends:["LOAD_PROMISE_POLYFILL","LOAD_BASE64_POLYFILL"]},LOAD_PLUGINS:{method:m,depends:["LOADED_POLYFILLS"]},INIT_PLUGINS:{method:n,depends:["LOAD_PLUGINS","SETUP_VIEW"]},LOAD_YOUTUBE:{method:v,depends:["FILTER_PLAYLIST"]},LOAD_SKIN:{method:u,depends:["LOADED_POLYFILLS"]},LOAD_PLAYLIST:{method:p,depends:["LOADED_POLYFILLS"]},FILTER_PLAYLIST:{method:q,depends:["LOAD_PLAYLIST"]},SETUP_VIEW:{method:w,depends:["LOAD_SKIN"]},SEND_READY:{method:x,depends:["INIT_PLUGINS","LOAD_YOUTUBE","SETUP_VIEW"]}};return a}function j(a){window.Promise?a():c.e(1,function(b){c(104),a()})}function k(a){window.btoa&&window.atob?a():c.e(2,function(b){c(105),a()})}function l(a){a()}function m(b,c){z=a.loadPlugins(c.get("id"),c.get("plugins")),z.on(h.COMPLETE,b),z.on(h.ERROR,f.partial(o,b)),z.load()}function n(a,b,c){z.setupPlugins(c,b),a()}function o(a,b){y(a,"Could not load plugin",b.message)}function p(a,c){var d=c.get("playlist");f.isString(d)?(A=new b,A.on(h.JWPLAYER_PLAYLIST_LOADED,function(b){c.set("playlist",b.playlist),a()}),A.on(h.JWPLAYER_ERROR,f.partial(r,a)),A.load(d)):a()}function q(a,b,c,d,e){var f=b.get("playlist"),g=e(f);g?a():r(a)}function r(a,b){b&&b.message?y(a,"Error loading playlist",b.message):y(a,"Error loading player","No playable sources found")}function s(a,b){return f.contains(e.SkinsLoadable,a)?b+"skins/"+a+".css":void 0}function t(a){for(var b=document.styleSheets,c=0,d=b.length;d>c;c++)if(b[c].href===a)return!0;return!1}function u(a,b){var c=b.get("skin"),g=b.get("skinUrl");if(f.contains(e.SkinsIncluded,c))return void a();if(g||(g=s(c,b.get("base"))),f.isString(g)&&!t(g)){b.set("skin-loading",!0);var i=!0,j=new d(g,i);j.addEventListener(h.COMPLETE,function(){b.set("skin-loading",!1)}),j.addEventListener(h.ERROR,function(){b.set("skin","seven"),b.set("skin-loading",!1)}),j.load()}f.defer(function(){a()})}function v(a,b){var d=b.get("playlist"),e=f.some(d,function(a){var b=g.isYouTube(a.file,a.type);if(b&&!a.image){var c=a.file,d=g.youTubeID(c);a.image="//i.ytimg.com/vi/"+d+"/0.jpg"}return b});e?c.e(3,function(b){var d=c(106);d.register(window.jwplayer),a()}):a()}function w(a,b,c,d){d.setup(),a()}function x(a){a({type:"complete"})}function y(a,b,c){a({type:"error",msg:b,reason:c})}var z,A;return{getQueue:i,error:y}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(99),c(102),c(103),c(100)],e=function(a,b,c,d){var e={},f={},g=function(c,d){return f[c]=new a(new b(e),d),f[c]},h=function(a,b,f,g){var h=d.getPluginName(a);e[h]||(e[h]=new c(a)),e[h].registerPlugin(a,b,f,g)};return{loadPlugins:g,registerPlugin:h}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(100),c(47),c(45),c(46),c(44),c(101)],e=function(a,b,c,d,e,f){function g(a,b,c){return function(){var d=a.getContainer().getElementsByClassName("jw-overlays")[0];d&&(d.appendChild(c),c.left=d.style.left,c.top=d.style.top,b.displayArea=d)}}function h(a){function b(){var b=a.displayArea;b&&a.resize(b.clientWidth,b.clientHeight)}return function(){b(),setTimeout(b,400)}}var i=function(i,j){function k(){q||(q=!0,p=f.loaderstatus.COMPLETE,o.trigger(c.COMPLETE))}function l(){if(!s&&(j&&0!==e.keys(j).length||k(),!q)){var d=i.getPlugins();n=e.after(r,k),e.each(j,function(e,g){var h=a.getPluginName(g),i=d[h],j=i.getJS(),k=i.getTarget(),l=i.getStatus();l!==f.loaderstatus.LOADING&&l!==f.loaderstatus.NEW&&(j&&!b.versionCheck(k)&&o.trigger(c.ERROR,{message:"Incompatible player version"}),n())})}}function m(a){if(!s){var d="File not found";a.url&&b.log(d,a.url),this.off(),this.trigger(c.ERROR,{message:d}),l()}}var n,o=e.extend(this,d),p=f.loaderstatus.NEW,q=!1,r=e.size(j),s=!1;this.setupPlugins=function(c,d){var f=[],j=i.getPlugins(),k=d.get("plugins");e.each(k,function(d,i){var l=a.getPluginName(i),m=j[l],n=m.getFlashPath(),o=m.getJS(),p=m.getURL();if(n){var q=e.extend({name:l,swf:n,pluginmode:m.getPluginmode()},d);f.push(q)}var r=b.tryCatch(function(){if(o&&k[p]){var a=document.createElement("div");a.id=c.id+"_"+l,a.className="jw-plugin jw-reset";var b=e.extend({},k[p]),d=m.getNewInstance(c,b,a);d.addToPlayer=g(c,d,a),d.resizeHandler=h(d),c.addPlugin(l,d,a)}});r instanceof b.Error&&b.log("ERROR: Failed to load "+l+".")}),d.set("flashPlugins",f)},this.load=function(){if(b.exists(j)&&"object"!==b.typeOf(j))return void l();p=f.loaderstatus.LOADING,e.each(j,function(a,d){if(b.exists(d)){var e=i.addPlugin(d);e.on(c.COMPLETE,l),e.on(c.ERROR,m)}});var a=i.getPlugins();e.each(a,function(a){a.load()}),l()},this.destroy=function(){s=!0,this.off()},this.getStatus=function(){return p}};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51)],e=function(a){var b={},c=b.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return b.getPluginPathType=function(b){if("string"==typeof b){b=b.split("?")[0];var d=b.indexOf("://");if(d>0)return c.ABSOLUTE;var e=b.indexOf("/"),f=a.extension(b);return!(0>d&&0>e)||f&&isNaN(f)?c.RELATIVE:c.CDN}},b.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},b.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(46),c(44)],e=function(a,b,c){var d={},e={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},f=function(f,g){function h(b){k=e.ERROR,j.trigger(a.ERROR,b)}function i(b){k=e.COMPLETE,j.trigger(a.COMPLETE,b)}var j=c.extend(this,b),k=e.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(a){var b=document.createElement("link");return b.type="text/css",b.rel="stylesheet",b.href=a,b},this.makeScriptTag=function(a){var b=document.createElement("script");return b.src=a,b},this.makeTag=g?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(k===e.NEW){var b=d[f];if(b&&(k=b.getStatus(),2>k))return b.on(a.ERROR,h),void b.on(a.COMPLETE,i);var c=document.getElementsByTagName("head")[0]||document.documentElement,j=this.makeTag(f),l=!1;j.onload=j.onreadystatechange=function(a){l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(l=!0,i(a),j.onload=j.onreadystatechange=null,c&&j.parentNode&&!g&&c.removeChild(j))},j.onerror=h,c.insertBefore(j,c.firstChild),k=e.LOADING,d[f]=this}},this.getStatus=function(){return k}};return f.loaderstatus=e,f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(100),c(103)],e=function(a,b){var c=function(c){this.addPlugin=function(d){var e=a.getPluginName(d);return c[e]||(c[e]=new b(d)),c[e]},this.getPlugins=function(){return c}};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(100),c(45),c(46),c(101),c(44)],e=function(a,b,c,d,e,f){var g={FLASH:0,JAVASCRIPT:1,HYBRID:2},h=function(h){function i(){switch(b.getPluginPathType(h)){case b.pluginPathType.ABSOLUTE:return h;case b.pluginPathType.RELATIVE:return a.getAbsolutePath(h,window.location.href)}}function j(){f.defer(function(){q=e.loaderstatus.COMPLETE,p.trigger(c.COMPLETE)})}function k(){q=e.loaderstatus.ERROR,p.trigger(c.ERROR,{url:h})}var l,m,n,o,p=f.extend(this,d),q=e.loaderstatus.NEW;this.load=function(){if(q===e.loaderstatus.NEW){if(h.lastIndexOf(".swf")>0)return l=h,q=e.loaderstatus.COMPLETE,void p.trigger(c.COMPLETE);if(b.getPluginPathType(h)===b.pluginPathType.CDN)return q=e.loaderstatus.COMPLETE,void p.trigger(c.COMPLETE);q=e.loaderstatus.LOADING;var a=new e(i());a.on(c.COMPLETE,j),a.on(c.ERROR,k),a.load()}},this.registerPlugin=function(a,b,d,f){o&&(clearTimeout(o),o=void 0),n=b,d&&f?(l=f,m=d):"string"==typeof d?l=d:"function"==typeof d?m=d:d||f||(l=a),q=e.loaderstatus.COMPLETE,p.trigger(c.COMPLETE)},this.getStatus=function(){return q},this.getPluginName=function(){return b.getPluginName(h)},this.getFlashPath=function(){if(l)switch(b.getPluginPathType(l)){case b.pluginPathType.ABSOLUTE:return l;case b.pluginPathType.RELATIVE:return h.lastIndexOf(".swf")>0?a.getAbsolutePath(l,window.location.href):a.getAbsolutePath(l,i())}return null},this.getJS=function(){return m},this.getTarget=function(){return n},this.getPluginmode=function(){return void 0!==typeof l&&void 0!==typeof m?g.HYBRID:void 0!==typeof l?g.FLASH:void 0!==typeof m?g.JAVASCRIPT:void 0},this.getNewInstance=function(a,b,c){return new m(a,b,c)},this.getURL=function(){return h}};return h}.apply(b,d),!(void 0!==e&&(a.exports=e))},,,,,,,,function(a,b,c){var d,e;d=[c(65),c(112),c(113),c(47)],e=function(a,b,c,d){var e=function(e,f){function g(a){d.log("CAPTIONS("+a+")")}function h(a,b){p=[],q={},r={},s=0;var c,d,e,f=b.tracks;for(e=0;e<f.length;e++)c=f[e],d=c.kind.toLowerCase(),("captions"===d||"subtitles"===d)&&(c.file?(j(c),k(c)):c.data&&j(c));var g=n();this.setCaptionsList(g),o()}function i(a,b){var c=null;0!==b&&(c=p[b-1]),a.set("captionsTrack",c)}function j(a){"number"!=typeof a.id&&(a.id=a.name||a.file||"cc"+p.length),a.data=a.data||[],a.label||(a.label="Unknown CC",s++,s>1&&(a.label+=" ("+s+")")),p.push(a),q[a.id]=a}function k(a){d.ajax(a.file,function(b){l(b,a)},m,!0)}function l(e,f){var h,i=e.responseXML?e.responseXML.firstChild:null;if(i)for("xml"===a.localName(i)&&(i=i.nextSibling);i.nodeType===i.COMMENT_NODE;)i=i.nextSibling;h=i&&"tt"===a.localName(i)?d.tryCatch(function(){f.data=c(e.responseXML)}):d.tryCatch(function(){f.data=b(e.responseText)}),h instanceof d.Error&&g(h.message+": "+f.file)}function m(a){g(a)}function n(){for(var a=[{id:"off",label:"Off"}],b=0;b<p.length;b++)a.push({id:p[b].id,label:p[b].label});return a}function o(){var a=0,b=f.get("captionLabel");if("Off"===b)return void f.set("captionsIndex",0);for(var c=0;c<p.length;c++){var d=p[c];if(b&&b===d.label){a=c+1;break}d["default"]||d.defaulttrack?a=c+1:d.autoselect}f.set("captionsIndex",a)}f.on("change:playlistItem",h,this),f.on("change:captionsIndex",i,this),f.mediaController.on("subtitlesTracks",function(a){if(a.tracks.length){f.mediaController.off("meta"),p=[],q={},r={},s=0;for(var b=a.tracks||[],c=0;c<b.length;c++){var d=b[c];d.id=d.name,d.label=d.name||d.language,j(d)}var e=n();this.setCaptionsList(e),o()}},this),f.mediaController.on("subtitlesTrackData",function(a){var b=q[a.name];if(b){b.source=a.source;for(var c=a.captions||[],d=!1,e=0;e<c.length;e++){var f=c[e],g=a.name+"_"+f.begin+"_"+f.end;r[g]||(r[g]=f,b.data.push(f),d=!0)}d&&b.data.sort(function(a,b){return a.begin-b.begin})}},this),f.mediaController.on("meta",function(a){var b=a.metadata;if(b&&"textdata"===b.type){var c=q[b.trackid];if(!c){c={kind:"captions",id:b.trackid,data:[]},j(c);var d=n();this.setCaptionsList(d)}var e=a.position||f.get("position"),g=""+Math.round(10*e)+"_"+b.text,h=r[g];h||(h={begin:e,text:b.text},r[g]=h,c.data.push(h))}},this);var p=[],q={},r={},s=0;this.getCurrentIndex=function(){return f.get("captionsIndex")},this.getCaptionsList=function(){return f.get("captionsList")},this.setCaptionsList=function(a){f.set("captionsList",a)}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(51)],e=function(a,b){function c(a){var b={},c=a.split("\r\n");1===c.length&&(c=a.split("\n"));var e=1;if(c[0].indexOf(" --> ")>0&&(e=0),c.length>e+1&&c[e+1]){var f=c[e],g=f.indexOf(" --> ");g>0&&(b.begin=d(f.substr(0,g)),b.end=d(f.substr(g+5)),b.text=c.slice(e+1).join("<br/>"))}return b}var d=a.seconds;return function(a){var d=[];a=b.trim(a);var e=a.split("\r\n\r\n");1===e.length&&(e=a.split("\n\n"));for(var f=0;f<e.length;f++)if("WEBVTT"!==e[f]){var g=c(e[f]);g.text&&d.push(g)}if(!d.length)throw new Error("Invalid SRT file");return d;
}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(51)],e=function(a){function b(a){a||c()}function c(){throw new Error("Invalid DFXP file")}var d=a.seconds;return function(e){b(e);var f=[],g=e.getElementsByTagName("p");b(g),g.length||(g=e.getElementsByTagName("tt:p"),g.length||(g=e.getElementsByTagName("tts:p")));for(var h=0;h<g.length;h++){var i=g[h],j=i.innerHTML||i.textContent||i.text||"",k=a.trim(j).replace(/>\s+</g,"><").replace(/tts?:/g,"");if(k){var l=i.getAttribute("begin"),m=i.getAttribute("dur"),n=i.getAttribute("end"),o={begin:d(l),text:k};n?o.end=d(n):m&&(o.end=o.begin+d(m)),f.push(o)}}return f.length||c(),f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(69),c(70),c(44),c(78)],e=function(a,b,c,d){function e(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=b.choose(d);if(e)return d.type}return null}var f=function(b){return b=c.isArray(b)?b:[b],c.compact(c.map(b,a))};f.filterPlaylist=function(a,b,d,e,f){var i=[];return c.each(a,function(a){a=c.extend({},a),a.allSources=g(a.sources,d,a.drm||e,a.preload||f),a.sources=h(a.allSources,b),a.sources.length&&(a.file=a.sources[0].file,(a.preload||f)&&(a.preload=a.preload||f),i.push(a))}),i};var g=function(a,d,e,f){return c.compact(c.map(a,function(a){return c.isObject(a)?(void 0!==d&&null!==d&&(a.androidhls=d),(a.drm||e)&&(a.drm=a.drm||e),(a.preload||f)&&(a.preload=a.preload||f),b(a)):void 0}))},h=function(a,b){b&&b.choose||(b=new d({primary:b?"flash":null}));var f=e(a,b);return c.where(a,{type:f})};return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return function(a,b){a.getPlaylistIndex=a.getItem;var c={jwPlay:b.play,jwPause:b.pause,jwSetMute:b.setMute,jwLoad:b.load,jwPlaylistItem:b.item,jwGetAudioTracks:b.getAudioTracks,jwDetachMedia:b.detachMedia,jwAttachMedia:b.attachMedia,jwAddEventListener:b.on,jwRemoveEventListener:b.off,jwStop:b.stop,jwSeek:b.seek,jwSetVolume:b.setVolume,jwPlaylistNext:b.next,jwPlaylistPrev:b.prev,jwSetFullscreen:b.setFullscreen,jwGetQualityLevels:b.getQualityLevels,jwGetCurrentQuality:b.getCurrentQuality,jwSetCurrentQuality:b.setCurrentQuality,jwSetCurrentAudioTrack:b.setCurrentAudioTrack,jwGetCurrentAudioTrack:b.getCurrentAudioTrack,jwGetCaptionsList:b.getCaptionsList,jwGetCurrentCaptions:b.getCurrentCaptions,jwSetCurrentCaptions:b.setCurrentCaptions,jwSetCues:b.setCues};a.callInternal=function(a){console.log("You are using the deprecated callInternal method for "+a);var d=Array.prototype.slice.call(arguments,1);c[a].apply(b,d)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(117),c(45),c(154)],e=function(a,b,c){var d=function(d,e){var f=new a(d,e),g=f.setup;return f.setup=function(){if(g.call(this),"trial"===e.get("edition")){var a=document.createElement("div");a.className="jw-icon jw-watermark",this.element().appendChild(a)}e.on("change:skipButton",this.onSkipButton,this),e.on("change:castActive change:playlistItem",this.showDisplayIconImage,this)},f.showDisplayIconImage=function(a){var b=a.get("castActive"),c=a.get("playlistItem"),d=f.controlsContainer().getElementsByClassName("jw-display-icon-container")[0];b&&c&&c.image?(d.style.backgroundImage='url("'+c.image+'")',d.style.backgroundSize="contain"):(d.style.backgroundImage="",d.style.backgroundSize="")},f.onSkipButton=function(a,b){b?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)},f.addSkipButton=function(){this._skipButton=new c(this.instreamModel),this._skipButton.on(b.JWPLAYER_AD_SKIPPED,function(){this.api.skipAd()},this),this.controlsContainer().appendChild(this._skipButton.element())},f};return d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45),c(46),c(61),c(128),c(129),c(130),c(132),c(118),c(134),c(148),c(149),c(152),c(44),c(153)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=a.style,q=a.bounds,r=a.isMobile(),s=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],t=function(t,u){function v(b){var c=a.between(u.get("position")+b,0,u.get("duration"));t.seek(c)}function w(b){var c=a.between(u.get("volume")+b,0,100);t.setVolume(c)}function x(a){return a.ctrlKey||a.metaKey?!1:u.get("controls")?!0:!1}function y(a){if(!x(a))return!0;switch(Fa||_(),a.keyCode){case 27:t.setFullscreen(!1);break;case 13:case 32:t.play();break;case 37:Fa||v(-5);break;case 39:Fa||v(5);break;case 38:w(10);break;case 40:w(-10);break;case 77:t.setMute();break;case 70:t.setFullscreen();break;default:if(a.keyCode>=48&&a.keyCode<=59){var b=a.keyCode-48,c=b/10*u.get("duration");t.seek(c)}}return/13|32|37|38|39|40/.test(a.keyCode)?(a.preventDefault(),!1):void 0}function z(){Ja=!0,Ka.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function A(){var a=!Ja;Ja=!1,a&&Ka.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!0}),Fa||_()}function B(){Ja=!1,Ka.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function C(){var a=q(ha),c=Math.round(a.width),d=Math.round(a.height);return document.body.contains(ha)?c&&d&&(c!==la||d!==ma)&&(la=c,ma=d,clearTimeout(Ha),Ha=setTimeout(W,50),u.set("containerWidth",c),u.set("containerHeight",d),Ka.trigger(b.JWPLAYER_RESIZE,{width:c,height:d})):(window.removeEventListener("resize",C),r&&window.removeEventListener("orientationchange",C)),a}function D(b,c){c=c||!1,a.toggleClass(ha,"jw-flag-casting",c)}function E(b,c){a.toggleClass(ha,"jw-flag-cast-available",c),a.toggleClass(ia,"jw-flag-cast-available",c)}function F(b,c,d){d&&a.removeClass(ha,"jw-stretch-"+d),a.addClass(ha,"jw-stretch-"+c)}function G(b,c){a.toggleClass(ha,"jw-flag-compact-player",c)}function H(a){a&&!r&&(a.element().addEventListener("mousemove",K,!1),a.element().addEventListener("mouseout",L,!1))}function I(){u.get("state")!==d.IDLE&&u.get("state")!==d.COMPLETE&&u.get("state")!==d.PAUSED||!u.get("controls")||t.play(),Ga?$():_()}function J(a){a.link?(t.pause(!0),t.setFullscreen(!1),window.open(a.link,a.linktarget)):u.get("controls")&&t.play()}function K(){clearTimeout(Ca)}function L(){_()}function M(a){Ka.trigger(a.type,a)}function N(b,c){c?(xa&&xa.destroy(),a.addClass(ha,"jw-flag-flash-blocked")):(xa&&xa.setup(u,ha,ha),a.removeClass(ha,"jw-flag-flash-blocked"))}function O(){u.get("controls")&&t.setFullscreen()}function P(){qa=new f(u,ja),qa.on("click",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),u.get("controls")&&t.play()}),qa.on("tap",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),I()}),qa.on("doubleClick",O);var c=new g(u);c.on("click",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),t.play()}),c.on("tap",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),I()}),a.isChrome()&&c.el.addEventListener("mousedown",function(){var a=u.getVideo(),b=a&&0===a.getName().name.indexOf("flash");if(b){var d=function(){document.removeEventListener("mouseup",d),c.el.style.pointerEvents="auto"};this.style.pointerEvents="none",document.addEventListener("mouseup",d)}}),ia.appendChild(c.element()),sa=new h(u),ta=new i(u),ta.on(b.JWPLAYER_LOGO_CLICK,J);var d=document.createElement("div");d.className="jw-controls-right jw-reset",u.get("logo")&&d.appendChild(ta.element()),d.appendChild(sa.element()),ia.appendChild(d),va=new e(u),va.setup(u.get("captions")),ia.parentNode.insertBefore(va.element(),ua.element());var k=u.get("height");r&&("string"==typeof k||k>=1.5*Ea)?a.addClass(ha,"jw-flag-touch"):(xa=new l,xa.setup(u,ha,ha)),oa=new j(t,u),oa.on(b.JWPLAYER_USER_ACTION,_),u.on("change:scrubbing",R),u.on("change:compactUI",G),ia.appendChild(oa.element()),ha.onfocusin=A,ha.onfocusout=B,ha.addEventListener("focus",A),ha.addEventListener("blur",B),ha.addEventListener("keydown",y),ha.onmousedown=z}function Q(b){return b.get("state")===d.PAUSED?void b.once("change:state",Q):void(b.get("scrubbing")===!1&&a.removeClass(ha,"jw-flag-dragging"))}function R(b,c){b.off("change:state",Q),c?a.addClass(ha,"jw-flag-dragging"):Q(b)}function S(b,c,d){var e,f=ha.className;d=!!d,d&&(f=f.replace(/\s*aspectMode/,""),ha.className!==f&&(ha.className=f),a.style(ha,{display:"block"},d)),a.exists(b)&&a.exists(c)&&(u.set("width",b),u.set("height",c)),e={width:b},a.hasClass(ha,"jw-flag-aspect-mode")||(e.height=c),p(ha,e,!0),ta&&ta.offset(oa&&ta.position().indexOf("bottom")>=0?oa.element().clientHeight:0),T(c),W(b,c)}function T(b){if(wa=U(b),oa&&!wa){var c=Fa?na:u;ga(c,c.get("state"))}a.toggleClass(ha,"jw-flag-audio-player",wa)}function U(a){if(u.get("aspectratio"))return!1;if(n.isString(a)&&a.indexOf("%")>-1)return!1;var b=n.isNumber(a)?a:u.get("containerHeight");return V(b)}function V(a){return a&&Ea*(r?1.75:1)>=a}function W(b,c){if(!b||isNaN(Number(b))){if(!ja)return;b=ja.clientWidth}if(!c||isNaN(Number(c))){if(!ja)return;c=ja.clientHeight}a.isMSIE(9)&&document.all&&!window.atob&&(b=c="100%");var d=u.getVideo();if(d){var e=d.resize(b,c,u.get("stretching"));e&&(clearTimeout(Ha),Ha=setTimeout(W,250)),va.resize(),oa.checkCompactMode(b)}}function X(){if(Ia){var a=document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement;return!(!a||a.id!==u.get("id"))}return Fa?na.getVideo().getFullScreen():u.getVideo().getFullScreen()}function Y(a){var b=u.get("fullscreen"),c=void 0!==a.jwstate?a.jwstate:X();b!==c&&u.set("fullscreen",c),clearTimeout(Ha),Ha=setTimeout(W,200)}function Z(b,c){a.removeClass(b,"jw-flag-fullscreen"),c?(a.addClass(b,"jw-flag-fullscreen"),p(document.body,{"overflow-y":"hidden"}),_()):p(document.body,{"overflow-y":""}),W()}function $(){Ga=!1,clearTimeout(Ca),oa.hideComponents(),a.addClass(ha,"jw-flag-user-inactive")}function _(){Ga||(a.removeClass(ha,"jw-flag-user-inactive"),oa.checkCompactMode(ja.clientWidth)),Ga=!0,clearTimeout(Ca),Ca=setTimeout($,Da)}function aa(){t.setFullscreen(!1)}function ba(){ra&&ra.setState(u.get("state")),ca(u,u.mediaModel.get("mediaType")),u.mediaModel.on("change:mediaType",ca,this)}function ca(b,c){var d="audio"===c;a.toggleClass(ha,"jw-flag-media-audio",d)}function da(b,c){var d="LIVE"===a.adaptiveType(c);a.toggleClass(ha,"jw-flag-live",d),Ka.setAltText(d?"Live Broadcast":"")}function ea(a,b){return b?void(b.name?ua.updateText(b.name,b.message):ua.updateText(b.message,"")):void ua.playlistItem(a,a.get("playlistItem"))}function fa(){var a=u.getVideo();return a?a.isCaster:!1}function ga(b,c){if(a.removeClass(ha,"jw-state-"+ya),a.addClass(ha,"jw-state-"+c),ya=c,fa())return void a.addClass(ja,"jw-media-show");switch(c){case d.PLAYING:W();break;case d.PAUSED:_()}}var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca=-1,Da=r?4e3:2e3,Ea=40,Fa=!1,Ga=!1,Ha=-1,Ia=!1,Ja=!1,Ka=n.extend(this,c);this.model=u,this.api=t,ha=a.createElement(o({id:u.get("id")}));var La=u.get("width"),Ma=u.get("height");p(ha,{width:La.toString().indexOf("%")>0?La:La+"px",height:Ma.toString().indexOf("%")>0?Ma:Ma+"px"}),Aa=ha.requestFullscreen||ha.webkitRequestFullscreen||ha.webkitRequestFullScreen||ha.mozRequestFullScreen||ha.msRequestFullscreen,Ba=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,Ia=Aa&&Ba,this.onChangeSkin=function(b,c,d){d&&a.removeClass(ha,"jw-skin-"+d),c&&a.addClass(ha,"jw-skin-"+c)},this.handleColorOverrides=function(){function b(b,d,e){if(e){b=a.prefix(b,"#"+c+" ");var f={};f[d]=e,a.css(b.join(", "),f)}}var c=u.get("id"),d=u.get("skinColorActive"),e=u.get("skinColorInactive"),f=u.get("skinColorBackground");b([".jw-toggle",".jw-button-color:hover"],"color",d),b([".jw-active-option",".jw-progress",".jw-playlist-container .jw-option.jw-active-option",".jw-playlist-container .jw-option:hover"],"background",d),b([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-tooltip-title",".jw-skip .jw-skip-icon",".jw-playlist-container .jw-icon"],"color",e),b([".jw-cue",".jw-knob"],"background",e),b([".jw-playlist-container .jw-option"],"border-bottom-color",e),b([".jw-background-color",".jw-tooltip-title",".jw-playlist",".jw-playlist-container .jw-option"],"background",f),b([".jw-playlist-container ::-webkit-scrollbar"],"border-color",f)},this.setup=function(){this.handleColorOverrides(),u.get("skin-loading")===!0&&(a.addClass(ha,"jw-flag-skin-loading"),u.once("change:skin-loading",function(){a.removeClass(ha,"jw-flag-skin-loading")})),this.onChangeSkin(u,u.get("skin"),""),u.on("change:skin",this.onChangeSkin,this),ja=ha.getElementsByClassName("jw-media")[0],ia=ha.getElementsByClassName("jw-controls")[0],ka=ha.getElementsByClassName("jw-aspect")[0];var c=ha.getElementsByClassName("jw-preview")[0];pa=new k(u),pa.setup(c);var e=ha.getElementsByClassName("jw-title")[0];ua=new m(u),ua.setup(e),P(),_(),u.set("mediaContainer",ja),u.mediaController.on("fullscreenchange",Y);for(var f=s.length;f--;)document.addEventListener(s[f],Y,!1);window.removeEventListener("resize",C),window.addEventListener("resize",C,!1),r&&(window.removeEventListener("orientationchange",C),window.addEventListener("orientationchange",C,!1)),u.on("change:errorEvent",ea),u.on("change:controls",Na),Na(u,u.get("controls")),u.on("change:state",ga),u.on("change:duration",da,this),u.on("change:flashBlocked",N),N(u,u.get("flashBlocked")),t.onPlaylistComplete(aa),t.onPlaylistItem(ba),u.on("change:castAvailable",E),E(u,u.get("castAvailable")),u.on("change:castActive",D),D(u,u.get("castActive")),u.get("stretching")&&F(u,u.get("stretching")),u.on("change:stretching",F),ga(u,d.IDLE),u.on("change:fullscreen",Oa),r||(qa.element().addEventListener("mouseout",_,!1),qa.element().addEventListener("mousemove",_,!1)),H(oa),H(ta),u.get("aspectratio")&&(a.addClass(ha,"jw-flag-aspect-mode"),a.style(ka,{"padding-top":u.get("aspectratio")})),t.on(b.JWPLAYER_READY,function(){C(),S(u.get("width"),u.get("height"))})};var Na=function(b,c){if(c){var d=Fa?na.get("state"):u.get("state");ga(b,d)}a.toggleClass(ha,"jw-flag-controls-disabled",!c)},Oa=function(b,c){var d=u.getVideo();Ia?(c?Aa.apply(ha):Ba.apply(document),Z(ha,c)):a.isIE()?Z(ha,c):(na&&na.getVideo()&&na.getVideo().setFullscreen(c),d.setFullscreen(c)),d&&0===d.getName().name.indexOf("flash")&&d.setFullscreen(c)};this.resize=function(a,b){var c=!0;S(a,b,c),C()},this.resizeMedia=W,this.reset=function(){document.contains(ha)&&ha.parentNode.replaceChild(za,ha),a.emptyElement(ha)},this.setupInstream=function(b){this.instreamModel=na=b,na.on("change:controls",Na,this),na.on("change:state",ga,this),Fa=!0,a.addClass(ha,"jw-flag-ads"),_()},this.setAltText=function(a){oa.setAltText(a)},this.useExternalControls=function(){a.addClass(ha,"jw-flag-ads-hide-controls")},this.destroyInstream=function(){if(Fa=!1,na&&(na.off(null,null,this),na=null),this.setAltText(""),a.removeClass(ha,"jw-flag-ads"),a.removeClass(ha,"jw-flag-ads-hide-controls"),u.getVideo){var b=u.getVideo();b.setContainer(ja)}da(u,u.get("duration")),qa.revertAlternateClickHandlers()},this.addCues=function(a){oa&&oa.addCues(a)},this.clickHandler=function(){return qa},this.controlsContainer=function(){return ia},this.getContainer=this.element=function(){return ha},this.getSafeRegion=function(b){var c={x:0,y:0,width:u.get("containerWidth")||0,height:u.get("containerHeight")||0},d=u.get("dock");return d&&d.length&&u.get("controls")&&(c.y=sa.element().clientHeight,c.height-=c.y),b=b||!a.exists(b),b&&u.get("controls")&&(c.height-=oa.element().clientHeight),c},this.destroy=function(){window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C);for(var b=s.length;b--;)document.removeEventListener(s[b],Y,!1);u.mediaController&&u.mediaController.off("fullscreenchange",Y),ha.removeEventListener("keydown",y,!1),xa&&xa.destroy(),ra&&(u.off("change:state",ra.statusDelegate),ra.destroy(),ra=null),ia&&(qa.element().removeEventListener("mousemove",_),qa.element().removeEventListener("mouseout",_)),Fa&&this.destroyInstream(),a.clearCss("#"+u.get("id"))}};return t}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(119),c(47),c(45),c(44),c(46),c(120)],e=function(a,b,c,d,e,f){var g=b.style,h={linktarget:"_blank",margin:8,hide:!1,position:"top-right"},i=function(i){function j(){n=d.extend({},h,p),n.hide="true"===n.hide.toString(),k()}function k(){if(m=b.createElement(f({file:n.file})),n.file){if(n.hide&&b.addClass(m,"jw-hide"),n.position!==h.position||n.margin!==h.margin){var c=/(\w+)-(\w+)/.exec(n.position),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};3===c.length&&(d[c[1]]=n.margin,d[c[2]]=n.margin,g(m,d))}var e=new a(m);e.on("click tap",l)}}function l(a){b.exists(a)&&a.stopPropagation&&a.stopPropagation(),o.trigger(c.JWPLAYER_LOGO_CLICK,{link:n.link,linktarget:n.linktarget})}var m,n,o=this,p=d.extend({},i.get("logo"));return d.extend(this,e),this.element=function(){return m},this.offset=function(a){g(m,{marginBottom:a})},this.position=function(){return n.position},this.margin=function(){return parseInt(n.margin,10)},j(),this};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(46),c(45),c(44),c(47)],e=function(a,b,c,d){function e(a,b){return/touch/.test(a.type)?(a.originalEvent||a).changedTouches[0]["page"+b]:a["page"+b]}function f(a){var b=a||window.event;return a instanceof MouseEvent?"which"in b?3===b.which:"button"in b?2===b.button:!1:!1}function g(a,b,c){var d;return d=b instanceof MouseEvent||!b.touches&&!b.changedTouches?b:b.touches&&b.touches.length?b.touches[0]:b.changedTouches[0],{type:a,target:b.target,currentTarget:c,pageX:d.pageX,pageY:d.pageY}}function h(a){(a instanceof MouseEvent||a instanceof window.TouchEvent)&&(a.preventManipulation&&a.preventManipulation(),a.cancelable&&a.preventDefault&&a.preventDefault())}var i=!c.isUndefined(window.PointerEvent),j=!i&&d.isMobile(),k=!i&&!j,l=d.isFF()&&d.isOSX(),m=function(a,d){function j(a){(k||i&&"touch"!==a.pointerType)&&q(b.touchEvents.OVER,a)}function m(c){(k||i&&"touch"!==c.pointerType&&!a.contains(document.elementFromPoint(c.x,c.y)))&&q(b.touchEvents.OUT,c)}function n(b){r=b.target,v=e(b,"X"),w=e(b,"Y"),f(b)||(i?b.isPrimary&&(d.preventScrolling&&(s=b.pointerId,a.setPointerCapture(s)),a.addEventListener("pointermove",o),a.addEventListener("pointerup",p),a.addEventListener("pointercancel",p)):k&&(document.addEventListener("mousemove",o),l&&"object"===b.target.nodeName.toLowerCase()?a.addEventListener("click",p):document.addEventListener("mouseup",p)),r.addEventListener("touchmove",o),r.addEventListener("touchend",p),r.addEventListener("touchcancel",p))}function o(a){var c=b.touchEvents,f=6;if(u)q(c.DRAG,a);else{var g=e(a,"X"),i=e(a,"Y"),j=g-v,k=i-w;j*j+k*k>f*f&&(q(c.DRAG_START,a),u=!0,q(c.DRAG,a))}d.preventScrolling&&h(a)}function p(c){var e=b.touchEvents;i?(d.preventScrolling&&a.releasePointerCapture(s),a.removeEventListener("pointermove",o),a.removeEventListener("pointercancel",p),a.removeEventListener("pointerup",p)):k&&(document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",p)),r.removeEventListener("touchmove",o),r.removeEventListener("touchcancel",p),r.removeEventListener("touchend",p),u?q(e.DRAG_END,c):d.directSelect&&c.target!==a||(i&&c instanceof window.PointerEvent?"touch"===c.pointerType?q(e.TAP,c):q(e.CLICK,c):k?q(e.CLICK,c):(q(e.TAP,c),h(c))),r=null,u=!1}function q(a,e){var f;if(d.enableDoubleTap&&(a===b.touchEvents.CLICK||a===b.touchEvents.TAP))if(c.now()-x<y){var h=a===b.touchEvents.CLICK?b.touchEvents.DOUBLE_CLICK:b.touchEvents.DOUBLE_TAP;f=g(h,e,t),z.trigger(h,f),x=0}else x=c.now();f=g(a,e,t),z.trigger(a,f)}var r,s,t=a,u=!1,v=0,w=0,x=0,y=300;d=d||{},i?(a.addEventListener("pointerdown",n),d.useHover&&(a.addEventListener("pointerover",j),a.addEventListener("pointerout",m))):k&&(a.addEventListener("mousedown",n),d.useHover&&(a.addEventListener("mouseover",j),a.addEventListener("mouseout",m))),a.addEventListener("touchstart",n);var z=this;return this.triggerEvent=q,this.destroy=function(){a.removeEventListener("touchstart",n),a.removeEventListener("mousedown",n),r&&(r.removeEventListener("touchmove",o),r.removeEventListener("touchcancel",p),r.removeEventListener("touchend",p)),i&&(d.preventScrolling&&a.releasePointerCapture(s),a.removeEventListener("pointerdown",n),a.removeEventListener("pointermove",o),a.removeEventListener("pointercancel",p),a.removeEventListener("pointerup",p)),a.removeEventListener("click",p),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",p)},this};return c.extend(m.prototype,a),m}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'src="'+h((e=null!=(e=b.file||(null!=a?a.file:a))?e:g,typeof e===f?e.call(a,{name:"file",hash:{},data:d}):e))+'"'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ';return e=b["if"].call(a,null!=a?a.file:a,{name:"if",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+">\n</div>"},useData:!0})},function(a,b,c){a.exports=c(122)},function(a,b,c){"use strict";var d=c(123),e=c(125)["default"],f=c(126)["default"],g=c(124),h=c(127),i=function(){var a=new d.HandlebarsEnvironment;return g.extend(a,d),a.SafeString=e,a.Exception=f,a.Utils=g,a.escapeExpression=g.escapeExpression,a.VM=h,a.template=function(b){return h.template(b,a)},a},j=i();j.create=i,j["default"]=j,b["default"]=j},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new g("Missing helper: '"+arguments[arguments.length-1].name+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(k(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=q(c.data);g.contextPath=f.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){if(!b)throw new g("Must pass iterator to #each");var c,d,e=b.fn,h=b.inverse,i=0,j="";if(b.data&&b.ids&&(d=f.appendContextPath(b.data.contextPath,b.ids[0])+"."),l(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(k(a))for(var m=a.length;m>i;i++)c&&(c.index=i,c.first=0===i,c.last=i===a.length-1,d&&(c.contextPath=d+i)),j+=e(a[i],{data:c});else for(var n in a)a.hasOwnProperty(n)&&(c&&(c.key=n,c.index=i,c.first=0===i,d&&(c.contextPath=d+n)),j+=e(a[n],{data:c}),i++);return 0===i&&(j=h(this)),j}),a.registerHelper("if",function(a,b){return l(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||f.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){l(a)&&(a=a.call(this));var c=b.fn;if(f.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=q(b.data);d.contextPath=f.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}var f=c(124),g=c(126)["default"],h="2.0.0";b.VERSION=h;var i=6;b.COMPILER_REVISION=i;var j={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=j;var k=f.isArray,l=f.isFunction,m=f.toString,n="[object Object]";b.HandlebarsEnvironment=d,d.prototype={constructor:d,logger:o,log:p,registerHelper:function(a,b){if(m.call(a)===n){if(b)throw new g("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){m.call(a)===n?f.extend(this.partials,a):this.partials[a]=b},unregisterPartial:function(a){delete this.partials[a]}};var o={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(o.level<=a){var c=o.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};b.logger=o;var p=o.log;b.log=p;var q=function(a){var b=f.extend({},a);return b._parent=a,b};b.createFrame=q},function(a,b,c){"use strict";function d(a){return j[a]}function e(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function f(a){return a instanceof i?a.toString():null==a?"":a?(a=""+a,l.test(a)?a.replace(k,d):a):a+""}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return(a?a+".":"")+b}var i=c(125)["default"],j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/;b.extend=e;var m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o,b.escapeExpression=f,b.isEmpty=g,b.appendContextPath=h},function(a,b){"use strict";function c(a){this.string=a}c.prototype.toString=function(){return""+this.string},b["default"]=c},function(a,b){"use strict";function c(a,b){var c;b&&b.firstLine&&(c=b.firstLine,a+=" - "+c+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<d.length;f++)this[d[f]]=e[d[f]];c&&(this.lineNumber=c,this.column=b.firstColumn)}var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=l;if(b!==c){if(c>b){var d=m[c],e=m[b];throw new k("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new k("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new k("No environment passed to template");if(!a||!a.main)throw new k("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var c=function(c,d,e,f,g,h,i,l,m){g&&(f=j.extend({},f,g));var n=b.VM.invokePartial.call(this,c,e,f,h,i,l,m);if(null==n&&b.compile){var o={helpers:h,partials:i,data:l,depths:m};i[e]=b.compile(c,{data:void 0!==l,compat:a.compat},b),n=i[e](f,o)}if(null!=n){if(d){for(var p=n.split("\n"),q=0,r=p.length;r>q&&(p[q]||q+1!==r);q++)p[q]=d+p[q];n=p.join("\n")}return n}throw new k("The partial "+e+" could not be compiled when running in runtime-only mode")},d={lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:j.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c){var d=this.programs[a],e=this.fn(a);return b||c?d=f(this,a,e,b,c):d||(d=this.programs[a]=f(this,a,e)),d},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=j.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler},e=function(b,c){c=c||{};var f=c.data;e._setup(c),!c.partial&&a.useData&&(f=i(b,f));var g;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(d,b,d.helpers,d.partials,f,g)};return e.isTop=!0,e._setup=function(c){c.partial?(d.helpers=c.helpers,d.partials=c.partials):(d.helpers=d.merge(c.helpers,b.helpers),a.usePartial&&(d.partials=d.merge(c.partials,b.partials)))},e._child=function(b,c,e){if(a.useDepths&&!e)throw new k("must pass parent depths");return f(d,b,a[b],c,e)},e}function f(a,b,c,d,e){var f=function(b,f){return f=f||{},c.call(a,b,a.helpers,a.partials,f.data||d,e&&[b].concat(e))};return f.program=b,f.depth=e?e.length:0,f}function g(a,b,c,d,e,f,g){var h={partial:!0,helpers:d,partials:e,data:f,depths:g};if(void 0===a)throw new k("The partial "+b+" could not be found");return a instanceof Function?a(c,h):void 0}function h(){return""}function i(a,b){return b&&"root"in b||(b=b?n(b):{},b.root=a),b}var j=c(124),k=c(126)["default"],l=c(123).COMPILER_REVISION,m=c(123).REVISION_CHANGES,n=c(123).createFrame;b.checkRevision=d,b.template=e,b.program=f,b.invokePartial=g,b.noop=h},function(a,b,c){var d,e;d=[c(47),c(55),c(61),c(44)],e=function(a,b,c,d){var e=b.style,f={back:!0,fontSize:15,fontFamily:"Arial,sans-serif",fontOpacity:100,color:"#FFF",backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFF",windowOpacity:0,preprocessor:d.identity},g=function(g){function h(b){b=b||"";var c="jw-captions-window jw-reset";b?(s.innerHTML=b,r.className=c+" jw-captions-window-active"):(r.className=c,a.empty(s))}function i(a){p=a,k(n,p)}function j(a,b){var c=a.source,e=b.metadata;return c?e&&d.isNumber(e[c])?e[c]:!1:b.position}function k(a,b){if(a&&a.data&&b){var c=j(a,b);if(c!==!1){var d=a.data;if(!(o>=0&&l(d,o,c))){for(var e=-1,f=0;f<d.length;f++)if(l(d,f,c)){e=f;break}-1===e?h(""):e!==o&&(o=e,h(t.preprocessor(d[o].text)))}}}}function l(a,b,c){return a[b].begin<=c&&(!a[b].end||a[b].end>=c)&&(b===a.length-1||a[b+1].begin>=c)}function m(a,c,d){var e=b.hexToRgba("#000000",d);"dropshadow"===a?c.textShadow="0 2px 1px "+e:"raised"===a?c.textShadow="0 0 5px "+e+", 0 1px 5px "+e+", 0 2px 5px "+e:"depressed"===a?c.textShadow="0 -2px 1px "+e:"uniform"===a&&(c.textShadow="-2px 0 1px "+e+",2px 0 1px "+e+",0 -2px 1px "+e+",0 2px 1px "+e+",-1px 1px 1px "+e+",1px 1px 1px "+e+",1px -1px 1px "+e+",1px 1px 1px "+e)}var n,o,p,q,r,s,t={};q=document.createElement("div"),q.className="jw-captions jw-reset",this.show=function(){q.className="jw-captions jw-captions-enabled jw-reset"},this.hide=function(){q.className="jw-captions jw-reset"},this.populate=function(a){return o=-1,n=a,a?void k(a,p):void h("")},this.resize=function(){var a=q.clientWidth,b=Math.pow(a/400,.6);if(b){var c=t.fontSize*b;e(q,{fontSize:Math.round(c)+"px"})}},this.setup=function(a){if(r=document.createElement("div"),s=document.createElement("span"),r.className="jw-captions-window jw-reset",s.className="jw-captions-text jw-reset",t=d.extend({},f,a),a){var c=t.fontOpacity,h=t.windowOpacity,i=t.edgeStyle,j=t.backgroundColor,k={},l={color:b.hexToRgba(t.color,c),fontFamily:t.fontFamily,fontStyle:t.fontStyle,fontWeight:t.fontWeight,textDecoration:t.textDecoration};h&&(k.backgroundColor=b.hexToRgba(t.windowColor,h)),m(i,l,c),t.back?l.backgroundColor=b.hexToRgba(j,t.backgroundOpacity):null===i&&m("uniform",l),e(r,k),e(s,l)}r.appendChild(s),q.appendChild(r),this.populate(g.get("captionsTrack"))},this.element=function(){return q},g.on("change:playlistItem",function(){p=null,o=-1,h("")},this),g.on("change:captionsTrack",function(a,b){this.populate(b)},this),g.mediaController.on("seek",function(){o=-1},this),g.mediaController.on("time seek",i,this),g.mediaController.on("subtitlesTrackData",function(){k(n,p)},this),g.on("change:state",function(a,b){switch(b){case c.IDLE:case c.ERROR:case c.COMPLETE:this.hide();break;default:this.show()}},this)};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(119),c(45),c(46),c(44)],e=function(a,b,c,d){var e=function(e,f){function g(a){return e.get("flashBlocked")?void 0:j?void j(a):void m.trigger(a.type===b.touchEvents.CLICK?"click":"tap")}function h(){return k?void k():void m.trigger("doubleClick")}var i,j,k;d.extend(this,c),i=f,this.element=function(){return i};var l=new a(i,{enableDoubleTap:!0});l.on("click tap",g),l.on("doubleClick doubleTap",h),this.clickHandler=g;var m=this;this.setAlternateClickHandlers=function(a,b){j=a,k=b||null},this.revertAlternateClickHandlers=function(){j=null,k=null}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(46),c(119),c(131),c(44)],e=function(a,b,c,d,e){var f=function(f){e.extend(this,b),this.model=f,this.el=a.createElement(d({}));var g=this;this.iconUI=new c(this.el).on("click tap",function(a){g.trigger(a.type)})};return e.extend(f.prototype,{element:function(){return this.el;
}}),f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'},useData:!0})},function(a,b,c){var d,e;d=[c(133),c(47),c(44),c(119)],e=function(a,b,c,d){var e=function(a){this.model=a,this.setup(),this.model.on("change:dock",this.render,this)};return c.extend(e.prototype,{setup:function(){var c=this.model.get("dock"),e=this.click.bind(this),f=a(c);this.el=b.createElement(f),new d(this.el).on("click tap",e)},getDockButton:function(a){return b.hasClass(a.target,"jw-dock-button")?a.target:b.hasClass(a.target,"jw-dock-text")?a.target.parentElement.parentElement:a.target.parentElement},click:function(a){var b=this.getDockButton(a),d=b.getAttribute("button"),e=this.model.get("dock"),f=c.findWhere(e,{id:d});f&&f.callback&&f.callback(a)},render:function(){var c=this.model.get("dock"),d=a(c),e=b.createElement(d);this.el.innerHTML=e.innerHTML},element:function(){return this.el}}),e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='    <div class="jw-dock-button jw-background-color jw-reset';return e=b["if"].call(a,null!=a?a.btnClass:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+='" button="'+i((f=null!=(f=b.id||(null!=a?a.id:a))?f:h,typeof f===g?f.call(a,{name:"id",hash:{},data:d}):f))+'">\n        <div class="jw-icon jw-dock-image jw-reset" ',e=b["if"].call(a,null!=a?a.img:a,{name:"if",hash:{},fn:this.program(4,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+='></div>\n        <div class="jw-arrow jw-reset"></div>\n',e=b["if"].call(a,null!=a?a.tooltip:a,{name:"if",hash:{},fn:this.program(6,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+"    </div>\n"},2:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return" "+h((e=null!=(e=b.btnClass||(null!=a?a.btnClass:a))?e:g,typeof e===f?e.call(a,{name:"btnClass",hash:{},data:d}):e))},4:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return"style='background-image: url(\""+h((e=null!=(e=b.img||(null!=a?a.img:a))?e:g,typeof e===f?e.call(a,{name:"img",hash:{},data:d}):e))+"\")'"},6:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+h((e=null!=(e=b.tooltip||(null!=a?a.tooltip:a))?e:g,typeof e===f?e.call(a,{name:"tooltip",hash:{},data:d}):e))+"</span>\n        </div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-dock jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(47),c(44),c(46),c(119),c(136),c(135),c(142),c(144),c(146),c(147)],e=function(a,b,c,d,e,f,g,h,i,j){function k(a,b){var c=document.createElement("div");return c.className="jw-icon jw-icon-inline jw-button-color jw-reset "+a,c.style.display="none",b&&new d(c).on("click tap",function(){b()}),{element:function(){return c},toggle:function(a){a?this.show():this.hide()},show:function(){c.style.display=""},hide:function(){c.style.display="none"}}}function l(a){var b=document.createElement("span");return b.className="jw-text jw-reset "+a,b}function m(a){var b=new g(a);return b}function n(a,c){var d=document.createElement("div");return d.className="jw-group jw-controlbar-"+a+"-group jw-reset",b.each(c,function(a){a.element&&(a=a.element()),d.appendChild(a)}),d}function o(b,c){this._api=b,this._model=c,this._isMobile=a.isMobile(),this._compactModeMaxSize=400,this._maxCompactWidth=-1,this.setup()}return b.extend(o.prototype,c,{setup:function(){this.build(),this.initialize()},build:function(){var a,c,d,g,o=new f(this._model,this._api),p=new j("jw-icon-more");this._model.get("visualplaylist")!==!1&&(a=new h("jw-icon-playlist")),this._isMobile||(g=k("jw-icon-volume",this._api.setMute),c=new e("jw-slider-volume","horizontal"),d=new i(this._model,"jw-icon-volume")),this.elements={alt:l("jw-text-alt"),play:k("jw-icon-playback",this._api.play),prev:k("jw-icon-prev",this._api.playlistPrev),next:k("jw-icon-next",this._api.playlistNext),playlist:a,elapsed:l("jw-text-elapsed"),time:o,duration:l("jw-text-duration"),drawer:p,hd:m("jw-icon-hd"),cc:m("jw-icon-cc"),audiotracks:m("jw-icon-audio-tracks"),mute:g,volume:c,volumetooltip:d,cast:k("jw-icon-cast jw-off",this._api.castToggle),fullscreen:k("jw-icon-fullscreen",this._api.setFullscreen)},this.layout={left:[this.elements.play,this.elements.prev,this.elements.playlist,this.elements.next,this.elements.elapsed],center:[this.elements.time,this.elements.alt],right:[this.elements.duration,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.drawer,this.elements.mute,this.elements.cast,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen],drawer:[this.elements.hd,this.elements.cc,this.elements.audiotracks]},this.menus=b.compact([this.elements.playlist,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.volumetooltip]),this.layout.left=b.compact(this.layout.left),this.layout.center=b.compact(this.layout.center),this.layout.right=b.compact(this.layout.right),this.layout.drawer=b.compact(this.layout.drawer),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset",this.elements.left=n("left",this.layout.left),this.elements.center=n("center",this.layout.center),this.elements.right=n("right",this.layout.right),this.el.appendChild(this.elements.left),this.el.appendChild(this.elements.center),this.el.appendChild(this.elements.right)},initialize:function(){this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),this.onVolume(this._model,this._model.get("volume")),this.onPlaylist(this._model,this._model.get("playlist")),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.onMediaModel(this._model,this._model.get("mediaModel")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCastActive(this._model,this._model.get("castActive")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlist",this.onPlaylist,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:castActive",this.onCastActive,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this._model.on("change:compactUI",this.onCompactUI,this),this.elements.volume&&this.elements.volume.on("update",function(a){var b=a.percentage;this._api.setVolume(b)},this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",function(a){var b=a.percentage;this._api.setVolume(b)},this),this.elements.volumetooltip.on("toggleValue",function(){this._api.setMute()},this)),this.elements.playlist&&this.elements.playlist.on("select",function(a){this._model.once("itemReady",function(){this._api.play()},this),this._api.load(a)},this),this.elements.hd.on("select",function(a){this._model.getVideo().setCurrentQuality(a)},this),this.elements.hd.on("toggleValue",function(){this._model.getVideo().setCurrentQuality(0===this._model.getVideo().getCurrentQuality()?1:0)},this),this.elements.cc.on("select",function(a){this._api.setCurrentCaptions(a)},this),this.elements.cc.on("toggleValue",function(){var a=this._model.get("captionsIndex");this._api.setCurrentCaptions(a?0:1)},this),this.elements.audiotracks.on("select",function(a){this._model.getVideo().setCurrentAudioTrack(a)},this),new d(this.elements.duration).on("click tap",function(){"DVR"===a.adaptiveType(this._model.get("duration"))&&this._api.seek(-.1)},this),new d(this.el).on("click tap drag",function(){this.trigger("userAction")},this),this.elements.drawer.on("open-drawer close-drawer",function(b,c){a.toggleClass(this.el,"jw-drawer-expanded",c.isOpen),c.isOpen||this.closeMenus()},this),b.each(this.menus,function(a){a.on("open-tooltip",this.closeMenus,this)},this)},onCaptionsList:function(a,b){var c=a.get("captionsIndex");this.elements.cc.setup(b,c),this.clearCompactMode()},onCaptionsIndex:function(a,b){this.elements.cc.selectItem(b)},onPlaylist:function(a,b){var c=b.length>1;this.elements.next.toggle(c),this.elements.prev.toggle(c),this.elements.playlist&&this.elements.playlist.setup(b,a.get("item"))},onPlaylistItem:function(a){this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00",this.clearCompactMode();var b=a.get("item");this.elements.playlist&&this.elements.playlist.selectItem(b),this.elements.audiotracks.setup()},onMediaModel:function(c,d){d.on("change:levels",function(a,b){this.elements.hd.setup(b,a.get("currentLevel")),this.clearCompactMode()},this),d.on("change:currentLevel",function(a,b){this.elements.hd.selectItem(b)},this),d.on("change:audioTracks",function(a,c){var d=b.map(c,function(a){return{label:a.name}});this.elements.audiotracks.setup(d,a.get("currentAudioTrack"),{toggle:!1}),this.clearCompactMode()},this),d.on("change:currentAudioTrack",function(a,b){this.elements.audiotracks.selectItem(b)},this),d.on("change:state",function(b,c){"complete"===c&&(this.elements.drawer.closeTooltip(),a.removeClass(this.el,"jw-drawer-expanded"))},this)},onVolume:function(a,b){this.renderVolume(a.get("mute"),b)},onMute:function(a,b){this.renderVolume(b,a.get("volume"))},renderVolume:function(b,c){this.elements.mute&&a.toggleClass(this.elements.mute.element(),"jw-off",b),this.elements.volume&&this.elements.volume.render(b?0:c),this.elements.volumetooltip&&(this.elements.volumetooltip.volumeSlider.render(b?0:c),a.toggleClass(this.elements.volumetooltip.element(),"jw-off",b))},onCastAvailable:function(a,b){this.elements.cast.toggle(b),this.clearCompactMode()},onCastActive:function(b,c){a.toggleClass(this.elements.cast.element(),"jw-off",!c)},onElapsed:function(b,c){var d,e=b.get("duration");d="DVR"===a.adaptiveType(e)?"-"+a.timeFormat(-e):a.timeFormat(c),this.elements.elapsed.innerHTML=d},onDuration:function(b,c){var d;"DVR"===a.adaptiveType(c)?(d="Live",this.clearCompactMode()):d=a.timeFormat(c),this.elements.duration.innerHTML=d},onFullscreen:function(b,c){a.toggleClass(this.elements.fullscreen.element(),"jw-off",c)},element:function(){return this.el},getVisibleBounds:function(){var b,c=this.el,d=getComputedStyle?getComputedStyle(c):c.currentStyle;return"table"===d.display?a.bounds(c):(c.style.visibility="hidden",c.style.display="table",b=a.bounds(c),c.style.visibility=c.style.display="",b)},setAltText:function(a){this.elements.alt.innerHTML=a},addCues:function(a){this.elements.time&&(b.each(a,function(a){this.elements.time.addCue(a)},this),this.elements.time.drawCues())},closeMenus:function(a){b.each(this.menus,function(b){a&&a.target===b.el||b.closeTooltip(a)})},hideComponents:function(){this.closeMenus(),this.elements.drawer.closeTooltip(),a.removeClass(this.el,"jw-drawer-expanded")},clearCompactMode:function(){this._maxCompactWidth=-1,this._model.set("compactUI",!1),this._containerWidth&&this.checkCompactMode(this._containerWidth)},setCompactModeBounds:function(){if(this.element().offsetWidth>0){var b=this.elements.left.offsetWidth+this.elements.right.offsetWidth;if("LIVE"===a.adaptiveType(this._model.get("duration")))this._maxCompactWidth=b+this.elements.alt.offsetWidth;else{var c=b+(this.elements.center.offsetWidth-this.elements.time.el.offsetWidth),d=.2;this._maxCompactWidth=c/(1-d)}}},checkCompactMode:function(a){-1===this._maxCompactWidth&&this.setCompactModeBounds(),this._containerWidth=a,-1!==this._maxCompactWidth&&(a>=this._compactModeMaxSize&&a>this._maxCompactWidth?this._model.set("compactUI",!1):(a<this._compactModeMaxSize||a<=this._maxCompactWidth)&&this._model.set("compactUI",!0))},onCompactUI:function(c,d){a.removeClass(this.el,"jw-drawer-expanded"),this.elements.drawer.setup(this.layout.drawer,d),(!d||this.elements.drawer.activeContents.length<2)&&b.each(this.layout.drawer,function(a){this.elements.right.insertBefore(a.el,this.elements.drawer.el)},this)}}),o}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(136),c(47),c(139),c(140),c(141)],e=function(a,b,c,d,e,f){var g=d.extend({setup:function(){this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset";var a=document.createElement("div");a.className="jw-time-tip jw-background-color jw-reset",a.appendChild(this.img),a.appendChild(this.text),c.removeClass(this.el,"jw-hidden"),this.addContent(a)},image:function(a){c.style(this.img,a)},update:function(a){this.text.innerHTML=a}}),h=b.extend({constructor:function(c,d){this._model=c,this._api=d,this.timeTip=new g("jw-tooltip-time"),this.timeTip.setup(),this.cues=[],this.seekThrottled=a.throttle(this.performSeek,400),this._model.on("change:playlistItem",this.onPlaylistItem,this).on("change:position",this.onPosition,this).on("change:duration",this.onDuration,this).on("change:buffer",this.onBuffer,this),b.call(this,"jw-slider-time","horizontal")},setup:function(){b.prototype.setup.apply(this,arguments),this._model.get("playlistItem")&&this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.elementRail.appendChild(this.timeTip.element()),this.el.addEventListener("mousemove",this.showTimeTooltip.bind(this),!1),this.el.addEventListener("mouseout",this.hideTimeTooltip.bind(this),!1)},update:function(c){this.activeCue&&a.isNumber(this.activeCue.pct)?this.seekTo=this.activeCue.pct:this.seekTo=c,this.seekThrottled(),b.prototype.update.apply(this,arguments)},dragStart:function(){this._model.set("scrubbing",!0),b.prototype.dragStart.apply(this,arguments)},dragEnd:function(){b.prototype.dragEnd.apply(this,arguments),this._model.set("scrubbing",!1)},onSeeked:function(){this._model.get("scrubbing")&&this.performSeek()},onBuffer:function(a,b){this.updateBuffer(b)},onPosition:function(a,b){this.updateTime(b,a.get("duration"))},onDuration:function(a,b){this.updateTime(a.get("position"),b)},updateTime:function(a,b){var d=0;if(b){var e=c.adaptiveType(b);"DVR"===e?d=(b-a)/b*100:"VOD"===e&&(d=a/b*100)}this.render(d)},onPlaylistItem:function(b,c){this.reset(),b.mediaModel.on("seeked",this.onSeeked,this);var d=c.tracks;a.each(d,function(a){a&&a.kind&&"thumbnails"===a.kind.toLowerCase()?this.loadThumbnails(a.file):a&&a.kind&&"chapters"===a.kind.toLowerCase()&&this.loadChapters(a.file)},this)},performSeek:function(){var a,b=this._model.get("duration"),d=c.adaptiveType(b);"LIVE"===d||0===b?this._api.play():"DVR"===d?(a=(1-this.seekTo/100)*b,this._api.seek(Math.min(a,-.25))):(a=this.seekTo/100*b,this._api.seek(Math.min(a,b-.25)))},showTimeTooltip:function(a){var b=this._model.get("duration");if(0!==b){var d=c.bounds(this.elementRail),e=a.pageX?a.pageX-d.left:a.x;e=c.between(e,0,d.width);var f=e/d.width,g=b*f;0>b&&(g=b-g);var h;if(this.activeCue)h=this.activeCue.text;else{var i=!0;h=c.timeFormat(g,i),0>b&&Math.abs(g)<1&&(h="Live")}this.timeTip.update(h),this.showThumbnail(g),c.addClass(this.timeTip.el,"jw-open"),this.timeTip.el.style.left=100*f+"%"}},hideTimeTooltip:function(){c.removeClass(this.timeTip.el,"jw-open")},reset:function(){this.resetChapters(),this.resetThumbnails()}});return a.extend(h.prototype,e,f),h}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(137),c(119),c(138),c(47)],e=function(a,b,c,d){var e=a.extend({constructor:function(a,b){this.className=a+" jw-background-color jw-reset",this.orientation=b,this.dragStartListener=this.dragStart.bind(this),this.dragMoveListener=this.dragMove.bind(this),this.dragEndListener=this.dragEnd.bind(this),this.tapListener=this.tap.bind(this),this.setup()},setup:function(){var a={"default":this["default"],className:this.className,orientation:"jw-slider-"+this.orientation};this.el=d.createElement(c(a)),this.elementRail=this.el.getElementsByClassName("jw-slider-container")[0],this.elementBuffer=this.el.getElementsByClassName("jw-buffer")[0],this.elementProgress=this.el.getElementsByClassName("jw-progress")[0],this.elementThumb=this.el.getElementsByClassName("jw-knob")[0],this.userInteract=new b(this.element(),{preventScrolling:!0}),this.userInteract.on("dragStart",this.dragStartListener),this.userInteract.on("drag",this.dragMoveListener),this.userInteract.on("dragEnd",this.dragEndListener),this.userInteract.on("tap click",this.tapListener)},dragStart:function(){this.trigger("dragStart"),this.railBounds=d.bounds(this.elementRail)},dragEnd:function(a){this.dragMove(a),this.trigger("dragEnd")},dragMove:function(a){var b,c,e=this.railBounds=this.railBounds?this.railBounds:d.bounds(this.elementRail);return"horizontal"===this.orientation?(b=a.pageX,c=b<e.left?0:b>e.right?100:100*d.between((b-e.left)/e.width,0,1)):(b=a.pageY,c=b>=e.bottom?0:b<=e.top?100:100*d.between((e.height-(b-e.top))/e.height,0,1)),this.render(c),this.update(c),!1},tap:function(a){this.railBounds=d.bounds(this.elementRail),this.dragMove(a)},update:function(a){this.trigger("update",{percentage:a})},render:function(a){a=Math.max(0,Math.min(a,100)),"horizontal"===this.orientation?(this.elementThumb.style.left=a+"%",this.elementProgress.style.width=a+"%"):(this.elementThumb.style.bottom=a+"%",this.elementProgress.style.height=a+"%")},updateBuffer:function(a){this.elementBuffer.style.width=a+"%"},element:function(){return this.el}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(46),c(44)],e=function(a,b){function c(){}var d=function(a,c){var d,e=this;d=a&&b.has(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)},b.extend(d,e,c);var f=function(){this.constructor=d};return f.prototype=e.prototype,d.prototype=new f,a&&b.extend(d.prototype,a),d.__super__=e.prototype,d};return c.extend=d,b.extend(c.prototype,a),c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div class="'+h((e=null!=(e=b.className||(null!=a?a.className:a))?e:g,typeof e===f?e.call(a,{name:"className",hash:{},data:d}):e))+" "+h((e=null!=(e=b.orientation||(null!=a?a.orientation:a))?e:g,typeof e===f?e.call(a,{name:"orientation",hash:{},data:d}):e))+' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'},useData:!0})},function(a,b,c){var d,e;d=[c(137),c(47)],e=function(a,b){var c=a.extend({constructor:function(a){this.el=document.createElement("div"),this.el.className="jw-icon jw-icon-tooltip "+a+" jw-button-color jw-reset jw-hidden",this.container=document.createElement("div"),this.container.className="jw-overlay jw-reset",this.openClass="jw-open",this.componentType="tooltip",this.el.appendChild(this.container)},addContent:function(a){this.content&&this.removeContent(),this.content=a,this.container.appendChild(a)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)},hasContent:function(){return!!this.content},element:function(){return this.el},openTooltip:function(a){this.trigger("open-"+this.componentType,a,{isOpen:!0}),this.isOpen=!0,b.toggleClass(this.el,this.openClass,this.isOpen)},closeTooltip:function(a){this.trigger("close-"+this.componentType,a,{isOpen:!1}),this.isOpen=!1,b.toggleClass(this.el,this.openClass,this.isOpen)},toggleOpenState:function(a){this.isOpen?this.closeTooltip(a):this.openTooltip(a)}});return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(47),c(112)],e=function(a,b,c){function d(a,b){this.time=a,this.text=b,this.el=document.createElement("div"),this.el.className="jw-cue jw-reset"}a.extend(d.prototype,{align:function(a){if("%"===this.time.toString().slice(-1))this.pct=this.time;else{var b=this.time/a*100;this.pct=b+"%"}this.el.style.left=this.pct}});var e={loadChapters:function(a){b.ajax(a,this.chaptersLoaded.bind(this),this.chaptersFailed,!0)},chaptersLoaded:function(b){var d=c(b.responseText);a.isArray(d)&&(a.each(d,this.addCue,this),this.drawCues())},chaptersFailed:function(){},addCue:function(a){this.cues.push(new d(a.begin,a.text))},drawCues:function(){var b=this._model.mediaModel.get("duration");if(!b||0>=b)return void this._model.mediaModel.once("change:duration",this.drawCues,this);var c=this;a.each(this.cues,function(a){a.align(b),a.el.addEventListener("mouseover",function(){c.activeCue=a}),a.el.addEventListener("mouseout",function(){c.activeCue=null}),c.elementRail.appendChild(a.el)})},resetChapters:function(){a.each(this.cues,function(a){a.el.parentNode&&a.el.parentNode.removeChild(a.el)},this),this.cues=[]}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(47),c(112)],e=function(a,b,c){function d(a){this.begin=a.begin,this.end=a.end,this.img=a.text}var e={loadThumbnails:function(a){a&&(this.vttPath=a.split("?")[0].split("/").slice(0,-1).join("/"),this.individualImage=null,b.ajax(a,this.thumbnailsLoaded.bind(this),this.thumbnailsFailed.bind(this),!0))},thumbnailsLoaded:function(b){var e=c(b.responseText);a.isArray(e)&&(a.each(e,function(a){this.thumbnails.push(new d(a))},this),this.drawCues())},thumbnailsFailed:function(){},chooseThumbnail:function(b){var c=a.sortedIndex(this.thumbnails,{end:b},a.property("end"));c>=this.thumbnails.length&&(c=this.thumbnails.length-1);var d=this.thumbnails[c].img;return d.indexOf("://")<0&&(d=this.vttPath?this.vttPath+"/"+d:d),d},loadThumbnail:function(b){var c=this.chooseThumbnail(b),d={display:"block",margin:"0 auto",backgroundPosition:"0 0"},e=c.indexOf("#xywh");if(e>0)try{var f=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(c);c=f[1],d.backgroundPosition=-1*f[2]+"px "+-1*f[3]+"px",d.width=f[4],d.height=f[5]}catch(g){return}else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=a.bind(function(){this.individualImage.onload=null,this.timeTip.image({width:this.individualImage.width,height:this.individualImage.height})},this),this.individualImage.src=c);return d.backgroundImage='url("'+c+'")',d},showThumbnail:function(a){this.thumbnails.length<1||this.timeTip.image(this.loadThumbnail(a))},resetThumbnails:function(){this.timeTip.image({backgroundImage:"",width:0,height:0}),this.thumbnails=[]}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(139),c(47),c(44),c(119),c(143)],e=function(a,b,c,d,e){var f=a.extend({setup:function(a,f,g){this.iconUI||(this.iconUI=new d(this.el,{useHover:!0,directSelect:!0}),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),a=c.isArray(a)?a:[],b.toggleClass(this.el,"jw-hidden",a.length<2);var h=a.length>2||2===a.length&&g&&g.toggle===!1,i=!h&&2===a.length;if(b.toggleClass(this.el,"jw-toggle",i),b.toggleClass(this.el,"jw-button-color",!i),this.isActive=h||i,h){b.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var j=e(a),k=b.createElement(j);this.addContent(k),this.contentUI=new d(this.content).on("click tap",this.selectListener)}else i&&this.iconUI.on("click tap",this.toggleValueListener);this.selectItem(f)},toggleValue:function(){this.trigger("toggleValue")},select:function(a){if(a.target.parentElement===this.content){var d=b.classList(a.target),e=c.find(d,function(a){return 0===a.indexOf("jw-item")});e&&(this.trigger("select",parseInt(e.split("-")[2])),this.closeTooltipListener())}},selectItem:function(a){if(this.content)for(var c=0;c<this.content.children.length;c++)b.toggleClass(this.content.children[c],"jw-active-option",a===c);else b.toggleClass(this.el,"jw-off",0===a)},reset:function(){b.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"        <li class='jw-text jw-option jw-item-"+f(e(d&&d.index,a))+" jw-reset'>"+f(e(null!=a?a.label:a,a))+"</li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<ul class="jw-menu jw-background-color jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"</ul>"},useData:!0})},function(a,b,c){var d,e;d=[c(47),c(44),c(139),c(119),c(145)],e=function(a,b,c,d,e){var f=c.extend({setup:function(c,e){if(this.iconUI||(this.iconUI=new d(this.el,{useHover:!0}),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.onSelect.bind(this)),this.reset(),c=b.isArray(c)?c:[],a.toggleClass(this.el,"jw-hidden",c.length<2),c.length>=2){this.iconUI=new d(this.el,{useHover:!0}).on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var f=this.menuTemplate(c,e),g=a.createElement(f);this.addContent(g),this.contentUI=new d(this.content),this.contentUI.on("click tap",this.selectListener)}this.originalList=c},menuTemplate:function(a,c){var d=b.map(a,function(a,b){return{active:b===c,label:b+1+".",title:a.title}});return e(d)},onSelect:function(c){var d=c.target;if("UL"!==d.tagName){"LI"!==d.tagName&&(d=d.parentElement);var e=a.classList(d),f=b.find(e,function(a){return 0===a.indexOf("jw-item")});f&&(this.trigger("select",parseInt(f.split("-")[2])),this.closeTooltip())}},selectItem:function(a){this.setup(this.originalList,a)},reset:function(){this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f="";return e=b["if"].call(a,null!=a?a.active:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.program(4,d),data:d}),null!=e&&(f+=e),f},2:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"                <li class='jw-option jw-text jw-active-option jw-item-"+f(e(d&&d.index,a))+' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">'+f(e(null!=a?a.title:a,a))+"</span>\n                </li>\n"},4:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"                <li class='jw-option jw-text jw-item-"+f(e(d&&d.index,a))+' jw-reset\'>\n                    <span class="jw-label jw-reset">'+f(e(null!=a?a.label:a,a))+'</span>\n                    <span class="jw-name jw-reset">'+f(e(null!=a?a.title:a,a))+"</span>\n                </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"    </ul>\n</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(139),c(136),c(119),c(47)],e=function(a,b,c,d){var e=a.extend({constructor:function(e,f){this._model=e,a.call(this,f),this.volumeSlider=new b("jw-slider-volume jw-volume-tip","vertical"),this.addContent(this.volumeSlider.element()),this.volumeSlider.on("update",function(a){this.trigger("update",a)},this),d.removeClass(this.el,"jw-hidden"),new c(this.el,{useHover:!0,directSelect:!0}).on("click",this.toggleValue,this).on("tap",this.toggleOpenState,this).on("over",this.openTooltip,this).on("out",this.closeTooltip,this),this._model.on("change:volume",this.onVolume,this)},toggleValue:function(){this.trigger("toggleValue")}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(139),c(47),c(44),c(119)],e=function(a,b,c,d){var e=a.extend({constructor:function(b){a.call(this,b),this.container.className="jw-overlay-horizontal jw-reset",this.openClass="jw-open-drawer",this.componentType="drawer"},setup:function(a,e){this.iconUI||(this.iconUI=new d(this.el,{useHover:!0,directSelect:!0}),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this)),this.reset(),a=c.isArray(a)?a:[],this.activeContents=c.filter(a,function(a){return a.isActive}),b.toggleClass(this.el,"jw-hidden",!e||this.activeContents.length<2),e&&this.activeContents.length>1&&(b.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener),c.each(a,function(a){this.container.appendChild(a.el)},this))},reset:function(){b.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b=function(a){this.model=a,this.model.on("change:playlistItem",this.loadImage,this)};return a.extend(b.prototype,{setup:function(a){this.el=a,this.model.get("playlistItem")&&this.loadImage(this.model,this.model.get("playlistItem"))},loadImage:function(b,c){var d=c.image;a.isString(d)?(d=encodeURI(d),this.el.style.backgroundImage='url("'+d+'")'):this.el.style.backgroundImage=""},element:function(){return this.el}}),b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(81),c(150),c(44),c(59)],e=function(a,b,c,d){function e(a){return"pro"===a?"p":"premium"===a?"r":"enterprise"===a?"e":"ads"===a?"a":"f"}var f=function(){};return c.extend(f.prototype,b.prototype,{buildArray:function(){var c=b.prototype.buildArray.apply(this,arguments),f=this.model.get("edition"),g="//jwplayer.com/learn-more/?m=h&e="+e(f)+"&v="+d;c.items[0].link=g;var h=a(f);if(!h("custom-rightclick"))return c;if(this.model.get("abouttext")){c.items[0].showLogo=!1,c.items.push(c.items.shift());var i={title:this.model.get("abouttext"),link:this.model.get("aboutlink")||g};c.items.unshift(i)}return c}}),f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(151),c(44),c(119),c(59)],e=function(a,b,c,d,e){var f=function(){};return c.extend(f.prototype,{buildArray:function(){var b=e.split("+"),c=b[0],d={items:[{title:"Powered by JW Player "+c,featured:!0,showLogo:!0,link:"//jwplayer.com/learn-more/?m=h&e=o&v="+e}]},f=c.indexOf("-")>0,g=b[1];if(f&&g){var h=g.split(".");d.items.push({title:"build: ("+h[0]+"."+h[1]+")",link:"#"})}var i=this.model.get("provider").name;if(i.indexOf("flash")>=0){var j="Flash Version "+a.flashVersion();d.items.push({title:j,link:"http://www.adobe.com/software/flash/about/"
})}return d},buildMenu:function(){var c=this.buildArray();return a.createElement(b(c))},updateHtml:function(){this.el.innerHTML=this.buildMenu().innerHTML},rightClick:function(a){return this.lazySetup(),this.mouseOverContext?!1:(this.hideMenu(),this.showMenu(a),!1)},getOffset:function(a){for(var b=a.target,c=a.offsetX||a.layerX,d=a.offsetY||a.layerY;b!==this.playerElement;)c+=b.offsetLeft,d+=b.offsetTop,b=b.parentNode;return{x:c,y:d}},showMenu:function(b){var c=this.getOffset(b);return this.el.style.left=c.x+"px",this.el.style.top=c.y+"px",a.addClass(this.playerElement,"jw-flag-rightclick-open"),a.addClass(this.el,"jw-open"),!1},hideMenu:function(){this.mouseOverContext||(a.removeClass(this.playerElement,"jw-flag-rightclick-open"),a.removeClass(this.el,"jw-open"))},lazySetup:function(){this.el||(this.el=this.buildMenu(),this.layer.appendChild(this.el),this.hideMenuHandler=this.hideMenu.bind(this),this.addOffListener(this.playerElement),this.addOffListener(document),this.model.on("change:provider",this.updateHtml,this),this.elementUI=new d(this.el,{useHover:!0}).on("over",function(){this.mouseOverContext=!0},this).on("out",function(){this.mouseOverContext=!1},this))},setup:function(a,b,c){this.playerElement=b,this.model=a,this.mouseOverContext=!1,this.layer=c,b.oncontextmenu=this.rightClick.bind(this)},addOffListener:function(a){a.addEventListener("mousedown",this.hideMenuHandler),a.addEventListener("touchstart",this.hideMenuHandler),a.addEventListener("pointerdown",this.hideMenuHandler)},removeOffListener:function(a){a.removeEventListener("mousedown",this.hideMenuHandler),a.removeEventListener("touchstart",this.hideMenuHandler),a.removeEventListener("pointerdown",this.hideMenuHandler)},destroy:function(){this.el&&(this.hideMenu(),this.elementUI.off(),this.removeOffListener(this.playerElement),this.removeOffListener(document),this.hideMenuHandler=null,this.el=null),this.playerElement&&(this.playerElement.oncontextmenu=null,this.playerElement=null),this.model&&(this.model.off("change:provider",this.updateHtml),this.model=null)}}),f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='        <li class="jw-reset';return e=b["if"].call(a,null!=a?a.featured:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+='">\n            <a href="'+i((f=null!=(f=b.link||(null!=a?a.link:a))?f:h,typeof f===g?f.call(a,{name:"link",hash:{},data:d}):f))+'" class="jw-reset" target="_top">\n',e=b["if"].call(a,null!=a?a.showLogo:a,{name:"if",hash:{},fn:this.program(4,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+"                "+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+"\n            </a>\n        </li>\n"},2:function(a,b,c,d){return" jw-featured"},4:function(a,b,c,d){return'                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n';return e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"    </ul>\n</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(44)],e=function(a){var b=function(a){this.model=a,this.model.on("change:playlistItem",this.playlistItem,this)};return a.extend(b.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(a){this.el=a;var b=this.el.getElementsByTagName("div");this.title=b[0],this.description=b[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem"))},playlistItem:function(a,b){if(a.get("displaytitle")||a.get("displaydescription")){var c="",d="";b.title&&a.get("displaytitle")&&(c=b.title),b.description&&a.get("displaydescription")&&(d=b.description),this.updateText(c,d)}else this.hide()},updateText:function(a,b){this.title.innerHTML=a,this.description.innerHTML=b,this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div id="'+h((e=null!=(e=b.id||(null!=a?a.id:a))?e:g,typeof e===f?e.call(a,{name:"id",hash:{},data:d}):e))+'" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'},useData:!0})},function(a,b,c){var d,e;d=[c(47),c(45),c(119),c(46),c(44),c(155)],e=function(a,b,c,d,e,f){var g=function(a){this.model=a,this.setup()};return e.extend(g.prototype,d,{setup:function(){this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var b=f();this.el=a.createElement(b),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=e.once(this.skipAd.bind(this)),new c(this.el).on("click tap",e.bind(function(){this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))},updateMessage:function(a){this.skiptext.innerHTML=a},updateCountdown:function(a){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-a)))},onChangeDuration:function(b,c){if(c){if(this.waitPercentage){if(!c)return;this.itemDuration=c,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}a.removeClass(this.el,"jw-hidden")}},onChangePosition:function(b,c){this.waitTime-c>0?this.updateCountdown(c):(this.updateMessage(this.skipMessage),this.skippable=!0,a.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(b){if(e.isString(b)&&"%"===b.slice(-1)){var c=parseFloat(b);return void(this.itemDuration&&!isNaN(c)?this.waitTime=this.itemDuration*c/100:this.waitPercentage=b)}e.isNumber(b)?this.waitTime=b:"string"===a.typeOf(b)?this.waitTime=a.seconds(b):isNaN(Number(b))?this.waitTime=0:this.waitTime=Number(b)},skipAd:function(){this.trigger(b.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'},useData:!0})},function(a,b,c){var d,e;d=[c(157)],e=function(a){function b(b,c,d,e){return a({id:b,skin:c,title:d,body:e})}return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(121);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div id="'+h((e=null!=(e=b.id||(null!=a?a.id:a))?e:g,typeof e===f?e.call(a,{name:"id",hash:{},data:d}):e))+'"class="jw-skin-'+h((e=null!=(e=b.skin||(null!=a?a.skin:a))?e:g,typeof e===f?e.call(a,{name:"skin",hash:{},data:d}):e))+' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">'+h((e=null!=(e=b.title||(null!=a?a.title:a))?e:g,typeof e===f?e.call(a,{name:"title",hash:{},data:d}):e))+'</div>\n        <div class="jw-title-secondary jw-reset">'+h((e=null!=(e=b.body||(null!=a?a.body:a))?e:g,typeof e===f?e.call(a,{name:"body",hash:{},data:d}):e))+'</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},,,,function(a,b,c){var d,e;d=[],e=function(){var a=window.chrome,b={};return b.NS="urn:x-cast:com.longtailvideo.jwplayer",b.debug=!1,b.availability=null,b.available=function(c){c=c||b.availability;var d="available";return a&&a.cast&&a.cast.ReceiverAvailability&&(d=a.cast.ReceiverAvailability.AVAILABLE),c===d},b.log=function(){if(b.debug){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}},b.error=function(){var a=Array.prototype.slice.call(arguments,0);console.error.apply(console,a)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},,,function(a,b,c){var d,e;d=[c(98),c(44)],e=function(a,b){return function(c,d){var e=["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia"];b.each(e,function(a){c[a]=function(){return d[a].apply(d,arguments),c}}),c.registerPlugin=a.registerPlugin}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44)],e=function(a){return function(b,c){var d=["buffer","controls","position","duration","fullscreen","volume","mute","item","stretching","playlist"];a.each(d,function(a){var d=a.slice(0,1).toUpperCase()+a.slice(1);b["get"+d]=function(){return c._model.get(a)}});var e=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],f=["setControls","setFullscreen","setVolume","setMute","setCues"];a.each(e,function(a){b[a]=function(){return c[a]?c[a].apply(c,arguments):null}}),a.each(f,function(a){b[a]=function(){return c[a].apply(c,arguments),b}})}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(45)],e=function(a,b){return function(c){var d={onBufferChange:b.JWPLAYER_MEDIA_BUFFER,onBufferFull:b.JWPLAYER_MEDIA_BUFFER_FULL,onError:b.JWPLAYER_ERROR,onSetupError:b.JWPLAYER_SETUP_ERROR,onFullscreen:b.JWPLAYER_FULLSCREEN,onMeta:b.JWPLAYER_MEDIA_META,onMute:b.JWPLAYER_MEDIA_MUTE,onPlaylist:b.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:b.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:b.JWPLAYER_PLAYLIST_COMPLETE,onReady:b.JWPLAYER_READY,onResize:b.JWPLAYER_RESIZE,onComplete:b.JWPLAYER_MEDIA_COMPLETE,onSeek:b.JWPLAYER_MEDIA_SEEK,onTime:b.JWPLAYER_MEDIA_TIME,onVolume:b.JWPLAYER_MEDIA_VOLUME,onBeforePlay:b.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:b.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:b.JWPLAYER_DISPLAY_CLICK,onControls:b.JWPLAYER_CONTROLS,onQualityLevels:b.JWPLAYER_MEDIA_LEVELS,onQualityChange:b.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:b.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:b.JWPLAYER_CAPTIONS_CHANGED,onAdError:b.JWPLAYER_AD_ERROR,onAdClick:b.JWPLAYER_AD_CLICK,onAdImpression:b.JWPLAYER_AD_IMPRESSION,onAdTime:b.JWPLAYER_AD_TIME,onAdComplete:b.JWPLAYER_AD_COMPLETE,onAdCompanions:b.JWPLAYER_AD_COMPANIONS,onAdSkipped:b.JWPLAYER_AD_SKIPPED,onAdPlay:b.JWPLAYER_AD_PLAY,onAdPause:b.JWPLAYER_AD_PAUSE,onAdMeta:b.JWPLAYER_AD_META,onCast:b.JWPLAYER_CAST_SESSION,onAudioTrackChange:b.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:b.JWPLAYER_AUDIO_TRACKS},e={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};a.each(e,function(b,d){c[d]=a.partial(c.on,b,a)}),a.each(d,function(b,d){c[d]=a.partial(c.on,b,a)})}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(168);"string"==typeof d&&(d=[[a.id,d,""]]);c(172)(d,{});d.locals&&(a.exports=d.locals)},function(a,b,c){b=a.exports=c(169)(),b.push([a.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url("+c(170)+") format('woff'),url("+c(171)+') format(\'truetype\');font-weight:normal;font-style:normal}.jw-icon-inline,.jw-icon-tooltip,.jw-icon-display,.jw-controlbar .jw-menu .jw-option:before{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\e600"}.jw-icon-buffer:before{content:"\\e601"}.jw-icon-cast:before{content:"\\e603"}.jw-icon-cast.jw-off:before{content:"\\e602"}.jw-icon-cc:before{content:"\\e605"}.jw-icon-cue:before{content:"\\e606"}.jw-icon-menu-bullet:before{content:"\\e606"}.jw-icon-error:before{content:"\\e607"}.jw-icon-fullscreen:before{content:"\\e608"}.jw-icon-fullscreen.jw-off:before{content:"\\e613"}.jw-icon-hd:before{content:"\\e60a"}.jw-watermark:before,.jw-rightclick-logo:before{content:"\\e60b"}.jw-icon-next:before{content:"\\e60c"}.jw-icon-pause:before{content:"\\e60d"}.jw-icon-play:before{content:"\\e60e"}.jw-icon-prev:before{content:"\\e60f"}.jw-icon-replay:before{content:"\\e610"}.jw-icon-volume:before{content:"\\e612"}.jw-icon-volume.jw-off:before{content:"\\e611"}.jw-icon-more:before{content:"\\e614"}.jw-icon-close:before{content:"\\e615"}.jw-icon-playlist:before{content:"\\e616"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer:focus,.jwplayer .jw-swf{outline:none}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-media,.jw-preview,.jw-overlays,.jw-controls{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jw-media video::-webkit-media-controls-start-playback-button{display:none}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:white;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0 auto;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\e60e"}.jw-tab-focus:focus{outline:solid 2px #0b7ef4}.jw-preview,.jw-captions,.jw-title,.jw-overlays,.jw-controls{pointer-events:none}.jw-overlays>div,.jw-media,.jw-controlbar,.jw-dock,.jw-logo,.jw-skip,.jw-display-icon-container{pointer-events:all}.jw-click{position:absolute;width:100%;height:100%}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview,.jw-stretch-uniform .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle !important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group{opacity:0}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-elapsed,.jw-text-duration{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast{display:none}.jw-slider-volume.jw-slider-horizontal,.jw-icon-inline.jw-icon-volume{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-0.2em;width:.5em;height:.2em;left:50%;margin-left:-0.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-overlay,.jw-dock-button:hover .jw-arrow{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top, #000 0, #000 18%, rgba(0,0,0,0) 100%);background:linear-gradient(to bottom, #000 0, #000 18%, rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:75%;color:white;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:bold}.jw-title-secondary{margin-top:-0.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;-ms-touch-action:none;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:100%;height:.4em}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-buffer{width:0}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-0.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{bottom:0;height:100%}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-buffer{height:0}.jw-slider-vertical .jw-slider-container,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-progress{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:white;background-color:black;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-rightclick{display:none;position:absolute;white-space:nowrap}.jw-rightclick.jw-open{display:block}.jw-rightclick ul{list-style:none;font-weight:bold;border-radius:.15em;margin:0;border:1px solid #444;padding-left:0}.jw-rightclick .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jw-rightclick li{background-color:#000;border-bottom:1px solid #444;margin:0}.jw-rightclick a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em}.jw-rightclick li:last-child{border-bottom:none}.jw-rightclick li:hover{background-color:#1a1a1a;cursor:pointer}.jw-rightclick .jw-featured{background-color:#252525;vertical-align:middle}.jw-rightclick .jw-featured a{color:#777}.jw-logo{float:right;padding:.75em;cursor:pointer;pointer-events:all}.jw-logo .jw-flag-audio-player{display:none}.jw-watermark{position:absolute;top:50%;left:0;right:0;bottom:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer:before{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:rgba(0,0,0,0);content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-time-tip,.jw-volume-tip,.jw-menu{position:relative;left:-50%;border:solid 1px #000;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:solid 4px #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:hover,.jw-controlbar .jw-option:before:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid black;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:white;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:white;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em}.jw-skip .jw-skip-icon:before{content:"\\e60c"}.jw-skip .jw-text,.jw-skip .jw-skip-icon{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-text,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;top:8em;padding:2em 5em;border:1px solid white}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:10px;right:10px;bottom:50%;margin-bottom:100px;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\e60e"}.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-captions{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before{content:"\\e60d"}.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before{content:"\\e60e"}.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\e601"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\e610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,.jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,.jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,.jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-controlbar,.jwplayer.jw-state-error .jw-controlbar{display:none}body .jw-error .jw-captions,.jwplayer.jw-state-error .jw-captions{display:none}body .jw-error:hover .jw-display-icon-container,.jwplayer.jw-state-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}body .jw-error .jw-icon-display,.jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,.jwplayer.jw-state-error .jw-icon-display:before{content:"\\e607"}body .jw-error .jw-icon-display:hover,.jwplayer.jw-state-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-fullscreen.jw-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jw-flag-user-inactive.jw-state-playing .jw-dock{display:none}.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jw-flag-user-inactive.jw-state-playing .jw-plugin,.jw-flag-user-inactive.jw-state-playing .jw-captions{bottom:.5em}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-dock{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads .jw-logo{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-skip,.jw-flag-touch .jw-plugin{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{content:"\\e615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-icon-next,.jw-flag-compact-player .jw-icon-prev,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-compact-player .jw-text-duration{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jw-flag-audio-player .jw-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;left:0}.jwplayer.jw-flag-audio-player .jw-controlbar{height:auto}.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-audio-player .jw-display-icon-container{display:none}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:#333 1px solid;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,0.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,0.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option:hover,.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option{background-color:black}.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color{color:#fff}.jw-skin-seven .jw-button-color:hover{color:#ff0046}.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-elapsed,.jw-skin-seven .jw-text-duration{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-prev:before{padding-right:.25em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0 .45em}.jw-skin-seven .jw-controlbar .jw-icon-next:before{padding-left:.25em}.jw-skin-seven .jw-icon-prev,.jw-skin-seven .jw-icon-next{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display{color:#fff}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-rail,.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-0.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-0.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-rail,.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress{width:.2em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip,.jw-skin-seven .jw-skip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1.75em}.jw-skin-seven .jw-skip .jw-text,.jw-skin-seven .jw-skip .jw-icon-inline{color:#fff;line-height:1.75em}.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text,.jw-skin-seven .jw-skip.jw-skippable:hover .jw-icon-inline{color:#ff0046}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon:before,.jw-skin-seven.jw-flag-touch .jw-text-elapsed,.jw-skin-seven.jw-flag-touch .jw-text-duration{padding:0 .35em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-prev:before{padding:0 .125em 0 .7em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-next:before{padding:0 .7em 0 .125em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-playlist:before{padding:0 .225em}',""]);
},function(a,b){a.exports=function(){var a=[];return a.toString=function(){for(var a=[],b=0;b<this.length;b++){var c=this[b];c[2]?a.push("@media "+c[2]+"{"+c[1]+"}"):a.push(c[1])}return a.join("")},a.i=function(b,c){"string"==typeof b&&(b=[[null,b,""]]);for(var d={},e=0;e<this.length;e++){var f=this[e][0];"number"==typeof f&&(d[f]=!0)}for(e=0;e<b.length;e++){var g=b[e];"number"==typeof g[0]&&d[g[0]]||(c&&!g[2]?g[2]=c:c&&(g[2]="("+g[2]+") and ("+c+")"),a.push(g))}},a}},function(a,b){a.exports="data:application/font-woff;base64,d09GRgABAAAAABQ4AAsAAAAAE+wAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID2WNtYXAAAAFoAAAAVAAAAFQaVsydZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAD3AAAA9wKJaoQ2hlYWQAABE0AAAANgAAADYIhqKNaGhlYQAAEWwAAAAkAAAAJAmCBdxobXR4AAARkAAAAGwAAABscmAHPWxvY2EAABH8AAAAOAAAADg2EDnwbWF4cAAAEjQAAAAgAAAAIAAiANFuYW1lAAASVAAAAcIAAAHCwZOZtHBvc3QAABQYAAAAIAAAACAAAwAAAAMEmQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5hYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOYW//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABgAAAFoAOAADoAPwBEAEkAACUVIi4CNTQ2Ny4BNTQ+AjMyHgIVFAYHHgEVFA4CIxEyFhc+ATU0LgIjIg4CFRQWFz4BMxExARUhNSEXFSE1IRcVITUhAUAuUj0jCgoKCkZ6o11do3pGCgoKCiM9Ui4qSh4BAjpmiE1NiGY6AQIeSioCVQIL/fWWAXX+i0oBK/7VHh4jPVIuGS4VH0MiXaN6RkZ6o10iQx8VLhkuUj0jAcAdGQ0bDk2IZjo6ZohNDhsNGR3+XgNilZXglZXglZUAAAABAEAAAAPAA4AAIQAAExQeAjMyPgI1MxQOAiMiLgI1ND4CMxUiDgIVMYs6ZohNTYhmOktGeqNdXaN6RkZ6o11NiGY6AcBNiGY6OmaITV2jekZGeqNdXaN6Rks6ZohNAAAEAEAAAATAA4AADgAcACoAMQAAJS4BJyERIREuAScRIREhByMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAn8DBQQCDPxGCysLBDz9v1NaCERrjE9irINTCLVbByc6Sio9a1I1CLaBL0YMQgsoCgLB/ukDCgIBSPzCQk6HaEIIWAhQgKdgKUg5JgdYBzRRZzx9C0QuAAAAAAUAQAAABMADgAAOABkAJwA1ADwAACUuASchESERLgEnESERIQE1IREhLgMnMQEjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQKAAgYFAg38QAwqCgRA/cD+gANA/iAYRVlsPgEtWghFa4xPYq2DUgmzWgcnO0oqPGpSNgm6gDBEDEAMKAwCwP7tAggDAUb8wAHQ8P3APWdUQRf98E2IaEIHWghQgKhgKUg4JgdaCDVRZzt9DEMuAAAEAEAAAAXAA4AABAAJAGcAxQAANxEhESEBIREhEQU+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzEhPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxQAWA+oAFNvsUBOz8Iw4hExQsGBIhEA8cDQwUCAgLAlsBBQUECgYHDggIEAkQGgsLEgcHCgMDAwMDAwoHBxILCxoQFiEMDA8DWgIJBwgTDQwcERAkFBgsFBMhDg0VBwcHBwcHFQ0Bug0hFBMsGREhEBAcDAwVCAgKAloCBQQECwYGDggIEQgQGwsLEgcHCgMDAwMDAwoHBxILCxsQFSIMDA4DWwIJCAcUDAwdEBEkExksExQhDQ4UBwcICAcHFA4AA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwAAAAADAEAAAAXAA4AAEABvAM4AACUhIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDAFc+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAANxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAAGNgLCNsIADgP5zgLCNsIAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAA3ESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcAA4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUABAA9AAAFwAOAABAAHQA7AFkAACUhIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HAFg+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwAAAAABAEMABgOgA3oAjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAJREzESMJAhEDxnBw/IADgPyAAAOA/IADgP5A/kADgAAAAgCAAAADgAOAAAQACQAAJREhESEBIREhEQKAAQD/AP4AAQD/AAADgPyAA4D8gAOAAAAAAAEAgAAABAADgAADAAAJAREBBAD8gAOAAcD+QAOA/kAAAgBKAAAEOgOAAAQACAAANxEjETMJAhG6cHADgPyAA4AAA4D8gAOA/kD+QAOAAAAAAQBDACADQwOgACkAAAEeARUUDgIjIi4CNTQ+AjM1DQE1Ig4CFRQeAjMyPgI1NCYnNwMNGhw8aYxPT4xoPT1ojE8BQP7APGlOLS1OaTw8aU4tFhNTAmMrYzVPjGg9PWiMT0+MaD2ArbOALU5pPDxpTi0tTmk8KUsfMAAAAAEAQABmAiADEwAGAAATETMlESUjQM0BE/7tzQEzARPN/VPNAAQAQAAABJADgAAXACsAOgBBAAAlJz4DNTQuAic3HgMVFA4CBzEvAT4BNTQmJzceAxUOAwcxJz4BNTQmJzceARUUBgcnBREzJRElIwPaKiY+KxcXKz4mKipDMBkZMEMqpCk5REQ5KSE0JBQBFCQzIcMiKCgiKiYwMCYq/c3NARP+7c0AIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAACAEAAAAPDA4AABwAPAAABFyERFzcXBwEHJzcnIREnAypw/qlwl3mZ/iaWepZwAVdtAnNwAVdwlnqT/iOWepZw/qpsAAMAQAETBcACYAAMABkAJgAAARQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVAY1iRUVhYUVFYgIWYUVFYmJFRWECHWFFRWJiRUVhAbpFYmJFRWFhRUViYkVFYWFFRWJiRUVhYUUAAAAAAQBmACYDmgNaACAAAAEXFhQHBiIvAQcGIicmND8BJyY0NzYyHwE3NjIXFhQPAQKj9yQkJGMd9vYkYx0kJPf3JCQkYx329iRjHSQk9wHA9iRjHSQk9/ckJCRjHfb2JGMdJCT39yQkJGMd9gAABgBEAAQDvAN8AAQACQAOABMAGAAdAAABIRUhNREhFSE1ESEVITUBMxUjNREzFSM1ETMVIzUBpwIV/esCFf3rAhX96/6dsrKysrKyA3xZWf6dWVn+nVlZAsaysv6dsrL+nbKyAAEAAAABGZqh06s/Xw889QALBAAAAAAA0dQiKwAAAADR1CIrAAAAAAXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgAAAAAABcAAAQAAAAAAAAAAAAAAAAAAABsEAAAAAAAAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAZgQAAEQAAAAAAAoAFAAeAIgAuAEEAWAChgOyA9QECAQqBKQFJgXoBgAGGgYqBkIGgAaSBvQHFgdQB4YHuAABAAAAGwDPAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIABwCNAAEAAAAAAAMADABFAAEAAAAAAAQADACiAAEAAAAAAAUACwAkAAEAAAAAAAYADABpAAEAAAAAAAoAGgDGAAMAAQQJAAEAGAAMAAMAAQQJAAIADgCUAAMAAQQJAAMAGABRAAMAAQQJAAQAGACuAAMAAQQJAAUAFgAvAAMAAQQJAAYAGAB1AAMAAQQJAAoANADganctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjEAVgBlAHIAcwBpAG8AbgAgADEALgAxanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(a,b){a.exports="data:application/octet-stream;base64,AAEAAAALAIAAAwAwT1MvMg8SA9kAAAC8AAAAYGNtYXAaVsydAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZiiWqEMAAAF4AAAPcGhlYWQIhqKNAAAQ6AAAADZoaGVhCYIF3AAAESAAAAAkaG10eHJgBz0AABFEAAAAbGxvY2E2EDnwAAARsAAAADhtYXhwACIA0QAAEegAAAAgbmFtZcGTmbQAABIIAAABwnBvc3QAAwAAAAATzAAAACAAAwSZAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmFgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5hb//f//AAAAAAAg5gD//f//AAH/4xoEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAA3ESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgADgPyAAzX9FgLq1xAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8QGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPAAAAAAMAQAAABcADgAAQAG8AzgAAJSEiJjURNDYzITIWFREUBiMBPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5ASE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBBSz7qD1XVz0EWD1XVz38mgMKBwYSCwsbEAkQCAgOBgcKBAQGAVoCCggIFA0MHBAPIRIYLBQTIQ4NFQcHBwcHBxUNDiETFCsZFCQQEB0MDBQIBwkCWgMPDAwiFRAbCwsSBgcKAwQDAwQBuQMKBwcSCwsbEAgRCAcPBgYLBAQFAVsCCggIFQwMHBAQIREZLBMUIQ0OFAcHCAgHBxQODSEUEywZEyQREB0MDBQHCAkCWwMODA0hFRAbCwsSBwcKAwMDAwMAVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAEA4ACgAyAC4AAUAAABFA4CIyIuAjU0PgIzMh4CFQMgLU5pPDxpTi0tTmk8PGlOLQHAPGlOLS1OaTw8aU4tLU5pPAAAAwBAABAEQAOQAAMAEAAfAAA3CQEhJTI2NTQmIyIGFRQWMxM0JiMiBhURFBYzMjY1EUACAAIA/AACAA4VFQ4OFRUOIxUODhUVDg4VEAOA/IBwFhAPGBYREBYB5g8YFhH+1w8YFhEBKQACAEAAAAPAA4AABwAPAAA3ERc3FwcXIQEhEScHJzcnQICwjbCA/nMB8wGNgLCNsIAAAY2AsI2wgAOA/nOAsI2wgAAAAAUAQAAABcADgAAEAAkAFgAzAE8AADcRIREhASERIREBMzUzESM1IxUjETMVJR4BFx4BFx4BFRQGBw4BBw4BBw4BKwERMx4BFzEHETMyNjc+ATc+ATc+ATU0JicuAScuAScuASsBQAWA+oAFNvsUBOz8VLZgYLZkZAJcFB4ODxQHBwkGBwcTDAwhExMsG7CwFioToEcJFwkKEggHDQUFBQQDAg0HBxMMDCARNwADgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAEAD0AAAXAA4AAEAAdADsAWQAAJSEiJjURNDYzITIWFREUBiMBIxUjNSMRMzUzFTMRBS4BJy4BJy4BKwERMzI2Nz4BNz4BNz4BNS4BJzkBBw4BBw4BKwERMzIWFx4BFx4BFx4BFRQGBw4BBzkBBSr7qT5YWD4EVz5YWD79s2CzZGSzYAGwBxcMDh8TEycWsLAbLBMTHg8MEwcHBgIICXcIEgoJFAxHNxMeDAwTBwcLBAMEBQUFDQcAWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAAAAAEAQwAGA6ADegCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAlETMRIwkCEQPGcHD8gAOA/IAAA4D8gAOA/kD+QAOAAAACAIAAAAOAA4AABAAJAAAlESERIQEhESERAoABAP8A/gABAP8AAAOA/IADgPyAA4AAAAAAAQCAAAAEAAOAAAMAAAkBEQEEAPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAA3ESMRMwkCEbpwcAOA/IADgAADgPyAA4D+QP5AA4AAAAABAEMAIANDA6AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCYytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACUnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzQAjKF5pcjw8cWleKSMrZnJ8QUF8cmYrgyM1kVRUkTUjHkhQWC8vWVFHHbMWSCkrRhUjHFw0NVkfKQMBE839U80AAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAGYAJgOaA1oAIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIAAQAAAAEZmqHTqz9fDzz1AAsEAAAAAADR1CIrAAAAANHUIisAAAAABcADoAAAAAgAAgAAAAAAAAABAAADwP/AAAAGAAAAAAAFwAABAAAAAAAAAAAAAAAAAAAAGwQAAAAAAAAAAAAAAAIAAAAGAABgBAAAQAUAAEAFAABABgAAQAYAAEAEAADgBIAAQAQAAEAGAABABgAAPQPgAEMEgABGBAAAgAQAAIAEgABKA4AAQwTAAEAEwABABAAAQAYAAEAEAABmBAAARAAAAAAACgAUAB4AiAC4AQQBYAKGA7ID1AQIBCoEpAUmBegGAAYaBioGQgaABpIG9AcWB1AHhge4AAEAAAAbAM8ABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAMAAAAAQAAAAAAAgAHAI0AAQAAAAAAAwAMAEUAAQAAAAAABAAMAKIAAQAAAAAABQALACQAAQAAAAAABgAMAGkAAQAAAAAACgAaAMYAAwABBAkAAQAYAAwAAwABBAkAAgAOAJQAAwABBAkAAwAYAFEAAwABBAkABAAYAK4AAwABBAkABQAWAC8AAwABBAkABgAYAHUAAwABBAkACgA0AOBqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNWZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=l[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(h(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(h(d.parts[f],b));l[d.id]={id:d.id,refs:1,parts:g}}}}function e(a){for(var b=[],c={},d=0;d<a.length;d++){var e=a[d],f=e[0],g=e[1],h=e[2],i=e[3],j={css:g,media:h,sourceMap:i};c[f]?c[f].parts.push(j):b.push(c[f]={id:f,parts:[j]})}return b}function f(){var a=document.createElement("style"),b=o();return a.type="text/css",b.appendChild(a),a}function g(){var a=document.createElement("link"),b=o();return a.rel="stylesheet",b.appendChild(a),a}function h(a,b){var c,d,e;if(b.singleton){var h=q++;c=p||(p=f()),d=i.bind(null,c,h,!1),e=i.bind(null,c,h,!0)}else a.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(c=g(),d=k.bind(null,c),e=function(){c.parentNode.removeChild(c),c.href&&URL.revokeObjectURL(c.href)}):(c=f(),d=j.bind(null,c),e=function(){c.parentNode.removeChild(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function i(a,b,c,d){var e=c?"":d.css;if(a.styleSheet)a.styleSheet.cssText=r(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function j(a,b){var c=b.css,d=b.media;b.sourceMap;if(d&&a.setAttribute("media",d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function k(a,b){var c=b.css,d=(b.media,b.sourceMap);d&&(c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */");var e=new Blob([c],{type:"text/css"}),f=a.href;a.href=URL.createObjectURL(e),f&&URL.revokeObjectURL(f)}var l={},m=function(a){var b;return function(){return"undefined"==typeof b&&(b=a.apply(this,arguments)),b}},n=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),o=m(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,q=0;a.exports=function(a,b){b=b||{},"undefined"==typeof b.singleton&&(b.singleton=n());var c=e(a);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=l[h.id];i.refs--,f.push(i)}if(a){var j=e(a);d(j,b)}for(var g=0;g<f.length;g++){var i=f[g];if(0===i.refs){for(var k=0;k<i.parts.length;k++)i.parts[k]();delete l[i.id]}}}};var r=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}()},function(a,b,c){var d,e;d=[c(41),c(44),c(59),c(47),c(89),c(51),c(119),c(95),c(101),c(96),c(83),c(45),c(61),c(114),c(69),c(161),c(66),c(98)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s={};return s.api=a,s._=b,s.version=c,s.utils=b.extend(d,f,{canCast:p.available,key:h,extend:b.extend,scriptloader:i,rssparser:q,tea:j,UI:g}),s.utils.css.style=s.utils.style,s.vid=k,s.events=b.extend({},l,{state:m}),s.playlist=b.extend({},n,{item:o}),s.plugins=r,s.cast=p,s}.apply(b,d),!(void 0!==e&&(a.exports=e))}])});;
jwplayer.key = "o/orvEF7NlgOlB/5k0KvGHlXqy80cIxotsEjEg==";
;
/**
 * @file This file contains the additional layer for JW6 Embedding and Playlist Manipulations
 *
 * @see http://support.jwplayer.com/customer/portal/articles/1413089-javascript-api-reference
 */

/**
 * The external variables
 */
var video = video || {};

/**
 * JW6 Options and their cleanup on page idle
 *
 * @type {number}
 */
var jwplayer_settings = {
  // volume   : 25,
  mute: false,
  autostart: true
};

var cookie = jQuery.cookie;

// load default values
for (var key in jwplayer_settings) {
  null != cookie('jwplayer.' + key) || cookie('jwplayer.' + key, jwplayer_settings[key], {expires: 1}); // expire in 1 day
}

/**
 * Tracking function
 *
 * @param ref
 */
function hit(ref) {
  if (video['path_api']) {
    jQuery.get(video['path_api'] + "&nocache=1&action=hit&ref=" + ref, function (data) {
      // console.log("HIT VIDEO " + ref);
    });
  }
}

/**
 * Embeds JW Player.
 *
 * @see https://support.jwplayer.com/customer/portal/articles/1413089-javascript-api-reference#all
 *
 * @param element CSS Selector to put the player in.
 * @param options
 * @returns {boolean}
 */
function jwembed(element, options) {
  // params
  var params = {
    debug: video['debug'],
    flashplayer: video['path_jwplayer'] + '/jwplayer.flash.swf',
    playlist: options["playlist"] ? options["playlist"] : [],
    stretching: "fill",
    autostart: (
      options["autoplay"] == "2" ? false : (
        options["autoplay"] == "1" ? true :
          cookie('jwplayer.autostart') == null ? true : cookie('jwplayer.autostart')
      )
    ),
    controlbar: "bottom",
    repeat: false,
    volume: 25,
    skin: 'glow',
    sharing: {
      link: video['path_site'] + "/video/related/MEDIAID",
      sites: ['facebook', 'twitter', 'email']
    },
    ga: {
      idstring: "mediaid"
      // , trackingobject: "_gaq"
    }
  };

  // primary mode
  if (video['mode'] == 'flash') {
    params['primary'] = 'flash';
  }

  // width
  params['width'] = "100%";
  if (options["width"]) {
    params['width'] = options["width"];
  }

  // height / aspectratio
  if (options["height"] && ('100%' != options["height"])) {
    params['height'] = options["height"];
  }
  else {
    params['aspectratio'] = "16:9";
  }

  // adjust volume
  params['volume'] = params['autostart'] ? 10 : 25;
  cookie('jwplayer.volume', params['volume'], {expires: 1})

  // ova
  if (video.ova && video.ova_tag) {
    video.ova_tag = jwplayer_ova_tag(video.ova_tag, params, options);

    params['advertising'] = {
      client: 'vast',
      schedule: {
        preroll: {
          offset: 'pre',
          tag: video.ova_tag
        }
      }
    };

    //
    if (!!options['campaign']) {
      params['advertising']['companiondiv'] = {
        id: "adaptvCompanion-" + element,
        width: 300,
        height: 250
      };
    }
  }

  // Events
  var events = {};

  // Events: onReady
  events.onReady = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.ready', this, event);
  };

  // Events: onSetupError
  events.onSetupError = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.setuperror', this, event);
  };

  // Events: onRemove
  events.onRemove = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.remove', this, event);
  };

  // Events: onPlaylist
  events.onPlaylist = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.playlist', this, event);
  };

  // Events: onPlaylist
  events.onPlaylistItem = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.playlistitem', this, event);
  };

  // Events: onPlaylistComplete
  events.onPlaylistComplete = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.playlistcomplete', this, event);
  };

  // Events: onBufferChange
  events.onBufferChange = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.bufferchange', this, event);
  };

  // Events: onPlay
  events.onPlay = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.play', this, event);

    // set autostart on
    cookie('jwplayer.autostart', true);

    if (!this.currentTrack || this.currentTrack.mediaid !== this.getPlaylistItem().mediaid) {
      this.currentTrack = this.getPlaylistItem();

      // track hits
      if (!this.config.hit) {
        this.config.hit = {};
      }

      // track quartiles
      this.config.quartiles = {};

      // hit view count
      hit(this.currentTrack.mediaid);
    }
  };

  // Events: onPause
  events.onPause = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.pause', this, event);

    // set autostart off
    cookie('jwplayer.autostart', false);
  };

  // Events: onBuffer
  events.onBuffer = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.buffer', this, event);
  };

  // Events: onIdle
  events.onIdle = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.idle', this, event);
  };

  // Events: onComplete
  events.onComplete = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.complete', this, event);

    // get the player to IDLE state
    this.stop();

    // feature to skip video loading with video items
    if (options["nojs"]) {
      return;
    }

    // load next on complete
    var id = jwNextVideoId(this.id);

    // jwUseVideoInfo
    jQuery('body').trigger('jwplayer.info', [this.id, jwGetVideoInfo(id)]);

    // load video
    jwLoadVideoId(this.id, id);
  };

  // Events: onError
  events.onError = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.error', this, event);
  };

  // Events: onSeek
  events.onSeek = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.seek', this, event);

    // Suppress all the quartile events since now.
    // this.config.quartiles[1] = true;
    // this.config.quartiles[2] = true;
    // this.config.quartiles[3] = true;
  };

  // Events: onTime
  events.onTime = function (event) {
    // trigger external jquery
    // jwPlayerTriggerEvent('jwplayer.time', this, event);

    // Quartiles.
    try {
      // Get the multiplier.
      var
        m = 4 / event.duration,
        t = event.position * m,
        quartile = Math.floor(t),
        mediaid = this.getPlaylistItem().mediaid
        ;

      if ((0 != quartile) && (typeof this.config.quartiles[quartile] == 'undefined')) {
        this.config.quartiles[quartile] = true;

        // trigger external jquery
        jwPlayerTriggerEvent('jwplayer.quartile' + quartile, this, event);
      }
    }
    catch (error) {
      //
    }
  };

  // Events: onMute
  events.onMute = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.mute', this, event);
  };

  // Events: onVolume
  events.onVolume = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.volume', this, event);
  };

  // Events: onFullscreen
  events.onFullscreen = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.fullscreen', this, event);
  };

  // Events: onFullscreen
  events.onFullscreen = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.fullscreen', this, event);
  };

  // Events: onResize
  events.onResize = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.resize', this, event);
  };

  // Events: adBlock
  // TODO test
  events.adBlock = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adblock', this, event);
  };

  // Events: onBeforePlay
  events.onBeforePlay = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.beforeplay', this, event);
  };

  // Events: onBeforeComplete
  events.onBeforeComplete = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.beforecomplete', this, event);
  };

  // Events: onAdClick
  events.onAdClick = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adclick', this, event);
  };

  // Events: onAdCompanions
  events.onAdCompanions = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adcompanions', this, event);
  };

  // Events: onAdComplete
  events.onAdComplete = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adcomplete', this, event);

    // clean up companion
    jQuery("#adaptvCompanion-" + element).empty();

    // force start playback
    jwForceStart(element);
  };

  // Events: onAdSkipped
  events.onAdSkipped = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adskipped', this, event);
  };

  // Events: onAdError
  events.onAdError = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.aderror', this, event);
  };

  // Events: onAdRequest
  events.onAdRequest = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adrequest', this, event);
  };

  // Events: onAdStarted
  events.onAdStarted = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adstarted', this, event);
  };

  // Events: onAdImpression
  events.onAdImpression = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adimpression', this, event);
  };

  // Events: onAdTime
  events.onAdTime = function (event) {
    // trigger external jquery
    // jwPlayerTriggerEvent('jwplayer.adtime', this, event);
  };

  // Events: onAdPause
  events.onAdPause = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adpause', this, event);
  };

  // Events: onAdPlay
  events.onAdPlay = function (event) {
    // trigger external jquery
    jwPlayerTriggerEvent('jwplayer.adplay', this, event);
  };

  params['events'] = events;

  // alter the params
  if (typeof video['config_overrides'] != 'undefined') {
    for (var i = 0; i < video['config_overrides'].length; i++) {
      var function_name = video['config_overrides'][i];
      if (typeof window[function_name] == 'function') {
        window[function_name](params, element);
      }
    }
  }

  // start player
  jwplayer(element).setup(params);

  // loaded successfully
  return true;
}

/**
 * @param e
 *  Event name.
 * @param jw
 *  jwplayer instance.
 * @param event
 *  jwplayer event.
 */
function jwPlayerTriggerEvent(e, jw, event) {
  if (video['debug']) {
    console.log("[jwplayer] " + e, event);
  }
  jQuery('body').trigger(e, [jw.id, jw.getPlaylistItem(), event]);
}

/**
 * Get the next Video Id on Page
 *
 * @returns {*}
 */
function jwNextVideoId(rel) {
  var selector = '.video_item' + (typeof rel == 'undefined' ? '' : '[rel="' + rel + '"]');

  var list = [];
  jQuery(selector).each(function () {
    list.push(jQuery(this).attr('id'));
  });
  var item = false;
  if (jQuery(selector + '.selected')) {
    item = jQuery(selector + '.selected').attr('id');
  }
  jQuery(selector).removeClass('selected');
  var index = (item !== false ? jQuery.inArray(item, list) : -1);
  index = (index + 1) % list.length;
  jQuery(selector + '#' + list[index]).addClass('selected');
  if (item == list[index]) {
    return false;
  }
  else {
    return list[index];
  }
}

/**
 *
 * @param element
 */
function jwForceStart(element) {
  var attempt = 1, interval = setInterval(function () {
    jwplayer(element).play(true);
    if ("playing" == jwplayer(element).getState() || 30 == attempt) {
      clearInterval(interval);
    }
  }, 100);
}

/**
 * Load the Video by Id to element
 *
 * @param element
 * @param id
 */
function jwLoadVideoId(element, id) {
  if (id) {
    jQuery('#' + id).children('input[name=playlist]').each(function (i, e) {
      jwplayer(element).load(jQuery.parseJSON(jQuery(e).val()));
      // start the playback
      jwForceStart(element); // jwplayer(element).play(true); fails unexpectedly
    });
  }
}

/**
 * Get Video info by Id
 *
 * @param id
 * @returns {{}}
 */
function jwGetVideoInfo(id) {
  if (id) {
    var list = {};
    jQuery('#' + id).children('input[type=hidden]').each(function () {
      list[jQuery(this).attr('name')] = jQuery(this).attr('value');
    });
    return list;
  }
  else {
    return {};
  }
}

/**
 * Use Video info by Id
 * Function that can be set up on the player page to return playlist item info info
 *
 * @param id
 */
// function jwUseVideoInfo(id) {}

/**
 * Alters and prepares the ova tags
 *
 * @param ova_tags
 * @param params
 * @param options
 * @returns {*}
 */
function jwplayer_ova_tag(ova_tags, params, options) {
  // keep it for testing
  var ova_tag_test = 'http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2';
  var ova_tags_array = [];

  // update tags with inline values
  for (var i = 0; i < ova_tags.length; i++) {
    var ova_tag = ova_tags[i];

    // sitepage
    ova_tag = ova_tag.replace('%OAS_VP%', typeof ad_target_sitepage !== 'undefined' ? ad_target_sitepage : '');

    // Krux oasKeyValues
    var oas_krux = '';
    if ((typeof window.Krux !== 'undefined') && (typeof window.Krux.oasKeyValues !== 'undefined')) {
      oas_krux = window.Krux.oasKeyValues.replace(';', '&');
    }
    ova_tag = ova_tag.replace('%OAS_KRUX%', oas_krux);

    // cleanup
    ova_tag = ova_tag.replace(/\?$/, '');

    ova_tags_array.push(ova_tag);
  }

  return ova_tags_array;
}
;
