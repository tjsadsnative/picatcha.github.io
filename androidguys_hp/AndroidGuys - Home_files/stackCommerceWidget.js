function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
(function(e){e.fn.ThreeDots=function(h){var g=this;if((typeof h=="object")||(h==undefined)){e.fn.ThreeDots.the_selected=this;var g=e.fn.ThreeDots.update(h)}return g};e.fn.ThreeDots.update=function(u){var k,t=null;var m,j,s,q,o;var l,i;var r,h,n;if((typeof u=="object")||(u==undefined)){e.fn.ThreeDots.c_settings=e.extend({},e.fn.ThreeDots.settings,u);var p=e.fn.ThreeDots.c_settings.max_rows;if(p<1){return e.fn.ThreeDots.the_selected}var g=false;jQuery.each(e.fn.ThreeDots.c_settings.valid_delimiters,function(v,w){if(((new String(w)).length==1)){g=true}});if(g==false){return e.fn.ThreeDots.the_selected}e.fn.ThreeDots.the_selected.each(function(){k=e(this);if(e(k).children("."+e.fn.ThreeDots.c_settings.text_span_class).length==0){return true}l=e(k).children("."+e.fn.ThreeDots.c_settings.text_span_class).get(0);var y=a(k,true);var x=e(l).text();d(k,l,y);var v=e(l).text();if((h=e(k).attr("threedots"))!=undefined){e(l).text(h);e(k).children("."+e.fn.ThreeDots.c_settings.e_span_class).remove()}r=e(l).text();if(r.length<=0){r=""}e(k).attr("threedots",x);if(a(k,y)>p){curr_ellipsis=e(k).append('<span style="white-space:nowrap" class="'+e.fn.ThreeDots.c_settings.e_span_class+'">'+e.fn.ThreeDots.c_settings.ellipsis_string+"</span>");while(a(k,y)>p){i=b(e(l).text());e(l).text(i.updated_string);t=i.word;n=i.del;if(n==null){break}}if(t!=null){var w=c(k,y);if((a(k,y)<=p-1)||(w)||(!e.fn.ThreeDots.c_settings.whole_word)){r=e(l).text();if(i.del!=null){e(l).text(r+n)}if(a(k,y)>p){e(l).text(r)}else{e(l).text(e(l).text()+t);if((a(k,y)>p+1)||(!e.fn.ThreeDots.c_settings.whole_word)||(v==t)||w){while((a(k,y)>p)){if(e(l).text().length>0){e(l).text(e(l).text().substr(0,e(l).text().length-1))}else{break}}}}}}}if(x==e(e(k).children("."+e.fn.ThreeDots.c_settings.text_span_class).get(0)).text()){e(k).children("."+e.fn.ThreeDots.c_settings.e_span_class).remove()}else{if((e(k).children("."+e.fn.ThreeDots.c_settings.e_span_class)).length>0){if(e.fn.ThreeDots.c_settings.alt_text_t){e(k).children("."+e.fn.ThreeDots.c_settings.text_span_class).attr("title",x)}if(e.fn.ThreeDots.c_settings.alt_text_e){e(k).children("."+e.fn.ThreeDots.c_settings.e_span_class).attr("title",x)}}}})}return e.fn.ThreeDots.the_selected};e.fn.ThreeDots.settings={valid_delimiters:[" ",",","."],ellipsis_string:"...",max_rows:2,text_span_class:"ellipsis_text",e_span_class:"threedots_ellipsis",whole_word:true,allow_dangle:false,alt_text_e:false,alt_text_t:false};function c(k,h){if(e.fn.ThreeDots.c_settings.allow_dangle==true){return false}var l=e(k).children("."+e.fn.ThreeDots.c_settings.e_span_class).get(0);var g=e(l).css("display");var i=a(k,h);e(l).css("display","none");var j=a(k,h);e(l).css("display",g);if(i>j){return true}else{return false}}function a(i,j){var g=typeof j;if((g=="object")||(g==undefined)){return e(i).height()/j.lh}else{if(g=="boolean"){var h=f(e(i));return{lh:h}}}}function b(k){var j;var i=e.fn.ThreeDots.c_settings.valid_delimiters;k=jQuery.trim(k);var g=-1;var h=null;var l=null;jQuery.each(i,function(m,o){if(((new String(o)).length!=1)||(o==null)){return false}var n=k.lastIndexOf(o);if(n!=-1){if(n>g){g=n;h=k.substring(g+1);l=o}}});if(g>0){return{updated_string:jQuery.trim(k.substring(0,g)),word:h,del:l}}else{return{updated_string:"",word:jQuery.trim(k),del:null}}}function f(h){e(h).append("<div id='temp_ellipsis_div' style='position:absolute; visibility:hidden'>H</div>");var g=e("#temp_ellipsis_div").height();e("#temp_ellipsis_div").remove();return g}function d(k,l,m){var q=e(l).text();var i=q;var o=e.fn.ThreeDots.c_settings.max_rows;var h,g,n,r,j;var p;if(a(k,m)<=o){return}else{p=0;curr_length=i.length;curr_middle=Math.floor((curr_length-p)/2);h=q.substring(p,p+curr_middle);g=q.substring(p+curr_middle);while(curr_middle!=0){e(l).text(h);if(a(k,m)<=(o)){j=Math.floor(g.length/2);n=g.substring(0,j);p=h.length;i=h+n;curr_length=i.length;e(l).text(i)}else{i=h;curr_length=i.length}curr_middle=Math.floor((curr_length-p)/2);h=q.substring(0,p+curr_middle);g=q.substring(p+curr_middle)}}}})(jQuery);
jQuery(document).ready(function($){var stackElement=$('.stackCommerceWidgetSidebar');var stackCommercePriceClass="";var stackCommerceRibonClass="";var stackCommerceButtonClass="";var stackCommerceImageWidthPercentage=100;var stackCommerceWidgetPerPage;var stackCommerceWidgetSort;var stackCommercePublisherID=stackElement.data('sc-publisher-id');var stackCommerceTargetAttr;var stackCommerceHidePrice;var stackCommerceColumnCount;var stackCommerceHideRibon;var stackCommerceHideButton;var stackCommerceViewDesign;var stackCommerceTitleWidth;var stackCommerceImageWidth;var stackCommerceURLParam;var stackCommerceURLParamMedium;var stackCommerceStyleType;var stackCommerceURLParamAdditional;var stackCommerceAffiliateID;var stackCommerceTitleSize;var stackCommerceWidgetTitle;var stackCommerceAppendType;var stackCommerceTitleAppend=false;stackCommerceQuery();function stackCommerceQuery(){var maxCountPerPage=0;var widgetsRendered=0;stackElement.each(function(index,singleStackElement){stackCommerceWidgetSort=$(singleStackElement).data('sc-sort');stackCommerceWidgetPerPage=$(singleStackElement).data('sc-per-page');stackCommercePublisherID=$(singleStackElement).data('sc-publisher-id');$.ajax({method:"GET",url:"https://api.stacksocial.com/v0/search/sales",data:{per_page:stackCommerceWidgetPerPage,publisher_id:stackCommercePublisherID,sort:stackCommerceWidgetSort}}).done(function(data){stackCommercePriceClass="";stackCommerceRibonClass="";stackCommerceImageWidthPercentage="100%";stackCommerceTargetAttr=$(singleStackElement).data('sc-open-new-tab');stackCommerceHidePrice=$(singleStackElement).data('sc-hide-price');stackCommerceColumnCount=$(singleStackElement).data('sc-column-count');stackCommerceHideRibon=$(singleStackElement).data('sc-hide-ribon');stackCommerceURLParam=$(singleStackElement).data('sc-utm');stackCommerceURLParamMedium=$(singleStackElement).data('sc-utm-medium');stackCommerceURLParamAdditional=$(singleStackElement).data('sc-utm-additional');stackCommerceViewDesign=$(singleStackElement).data('sc-view-design');stackCommerceImageWidth=$(singleStackElement).data('sc-image-width');stackCommerceStyleType=$(singleStackElement).data('sc-widget');stackCommerceWidgetTitle=$(singleStackElement).data('sc-widget-title');stackCommerceAffiliateID=$(singleStackElement).data('sc-affiliate-id');stackCommerceTitleSize=$(singleStackElement).data('sc-title-sizes');stackCommerceAppendType=$(singleStackElement).data('sc-medium-item-name');stackCommerceHideButton=$(singleStackElement).data('sc-hide-button');renderStackCommerceWidget(data,data.per_page,singleStackElement);widgetsRendered++;if(widgetsRendered==stackElement.length){checkTitlesLength();}});});}
function renderStackCommerceWidget(data,perPage,singleStackElement){if(stackCommerceTargetAttr=='on'){stackCommerceTargetAttr="target='_blank'";}else{stackCommerceTargetAttr="";}
if(stackCommerceHidePrice==1){stackCommercePriceClass=" hideSCElement";}else{stackCommercePriceClass="";}
if(stackCommerceHideRibon==1){stackCommerceRibonClass=" hideSCElement";}else{stackCommerceRibonClass="";}
if(stackCommerceHideButton==1){stackCommerceButtonClass=" hideSCElement";}else{stackCommerceButtonClass="";}
if(stackCommerceStyleType==1&&(stackCommerceViewDesign==1||stackCommerceViewDesign==2)){stackCommerceTitleAppend=true;}else{stackCommerceTitleAppend=false;}
if(stackCommerceViewDesign==2&&stackCommerceStyleType!=2){stackCommerceImageWidthPercentage=stackCommerceImageWidth;stackCommerceTitleWidth=100- stackCommerceImageWidthPercentage;}else{stackCommerceImageWidthPercentage=100;stackCommerceTitleWidth=100;}
renderItems(perPage,singleStackElement,data);function renderItems(count,singleStackElement,data){for(var i=0;i<count;i++){renderSingleDeal(data.sales[i],singleStackElement,data);$(singleStackElement).parent().children(".allDealsLink").children("a").attr("href","https://"+ data.publisher.hostname+""+ buildURLParams("SeeAllDealsLink"));$(singleStackElement).parent().children(".allDealsLink").children("a").css("font-size",stackCommerceTitleSize+"px");}}
stackElement.each(function(index,singleStackElement){if($(singleStackElement).hasClass('stackCommerceHeightFix')){$(singleStackElement).find("img").css("height",$(singleStackElement).find('.singlestackCommerceItem').width()/ 1.33 + "px");
heightAdjust(singleStackElement);}});}
function heightAdjust(shortCodeElement){var higestItem=0;$(shortCodeElement).children().children().css("height","auto");$(shortCodeElement).children().each(function(index,childStack){if($(childStack).height()>higestItem){higestItem=$(childStack).height();}});$(shortCodeElement).children().children().each(function(index,childStack){$(childStack).css("height",higestItem- 20+"px");});}
function renderSingleDeal(item,currentStackElement,stackCommerceDataForWidget){var titleAppendix="";if(stackCommerceTitleAppend){if(stackCommerceAppendType==2){titleAppendix="$"+(item.price_in_cents/100).toFixed(2)+" - ";}
else if(stackCommerceAppendType==3){titleAppendix=countDiscount(item.retail_price_in_cents,item.price_in_cents)+"% Off - "}else{titleAppendix="";}}
$(currentStackElement).append(""+"<div class='stackCommerceItemWrap'>"+"<div class='singlestackCommerceItem'>"+"<div class='singlestackCommerceItemDiscount "+ stackCommerceRibonClass+"'>"+
countDiscount(item.retail_price_in_cents,item.price_in_cents)+"% OFF</div>"+"<div class='stackCommerceItemImage' style='width:"+ stackCommerceImageWidthPercentage+"%'>"+"<a "+ stackCommerceTargetAttr+" href='https://"+ stackCommerceDataForWidget.publisher.hostname+ item.permalink+""+ buildURLParams(item.permalink)+"'>"+"<img width='630' alt='"+ item.title+"' height='473' data-aload='"+ item.main_image+"' alt='"+ item.title+"' /></a> "+"</div>"+"<a "+ stackCommerceTargetAttr+" href='https://"+ stackCommerceDataForWidget.publisher.hostname+ item.permalink+""+ buildURLParams(item.permalink)+" ' class='stackCommerceItemPrice "+ stackCommerceButtonClass+"'><div class='stackCommerceBuyButton'>Buy Now</div>"+"<span class='stackCommerceItemOriginalPrice'>$"+(item.retail_price_in_cents/100).toFixed(2)+"</span> "+"<span class='stackCommerceItemSalePrice "+ stackCommercePriceClass+"'>$"+ Number((item.price_in_cents/100).toFixed(2))+"</span>"+"</a>"+"<div class='stackCommerceItemTitle' style='font-size:"+ stackCommerceTitleSize+"px; width:"+ stackCommerceTitleWidth+"%' >"+"<a "+ stackCommerceTargetAttr+" data-price='"+ item.price_in_cents+"' data-discount='"+ countDiscount(item.retail_price_in_cents,item.price_in_cents)+"' href='https://"+ stackCommerceDataForWidget.publisher.hostname+ item.permalink+""+ buildURLParams(item.permalink)+" '><span class='ellipsis_text'>"+
titleAppendix+ item.title+"</span></a>"+"</div> "+"</div>");aload();};function checkTitlesLength(elem,price,discount){$('.stackCommerceItemTitle a').each(function(){var the_obj=$(this).ThreeDots({max_rows:3,whole_word:false,ellipsis_string:"...",allow_dangle:false,valid_delimiters:[" ",": "],alt_text_e:true,alt_text_t:true});if($(this).find('.threedots_ellipsis').length){}else{}})};function countDiscount(retail,discounted){return 100-(discounted/(retail/100)).toFixed(0);}
function buildURLParams(campaign,medium){var urlParams="?";urlParams+="utm_source="+ encodeURIComponent(stackCommerceURLParam);urlParams+="&utm_medium=dealfeed-"+ stackCommerceWidgetTitle.replace(/[^A-Z0-9]/ig,"-");urlParams+="&utm_campaign="+ campaign.replace("/sales/","");if(stackCommerceURLParamAdditional!=""){urlParams+="&"+ stackCommerceURLParamAdditional;}
if(stackCommerceAffiliateID!=""&&(stackCommercePublisherID==1||stackCommercePublisherID==126)){urlParams+="&aid="+ stackCommerceAffiliateID;}
return urlParams;}
$(window).resize(function(){var delay=(function(){var timer=0;return function(callback,ms){clearTimeout(timer);timer=setTimeout(callback,ms);};})();delay(function(){stackElement.each(function(index,singleStackElement){if($(singleStackElement).hasClass('stackCommerceShortcode')){$(singleStackElement).find("img").css("height","auto");heightAdjust(singleStackElement);}});},500);});});