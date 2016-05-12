/*
 *  KRESearch 0.1 - jQuery plugin
 *  written by KREATIO
 *
 *  Built for jQuery library
 *  http://jquery.com
 */

var re = /([^&=]+)=?([^&]*)/g;
var decodeRE = /\+/g;
var decode = function(str) {return decodeURIComponent(str.replace(decodeRE, " "));};
$.parseParams = function(query) {
    var params = {}, e;
    while ( e = re.exec(query))
    params[decode(e[1])] = decode(e[2]);
    return params;
};
function search_cache(){
var queryStringObj = $.parseParams(window.location.search.split('?')[1] || '');
jQuery.each( queryStringObj, function( key, value ) {
    var currObj=jQuery("[name="+key+"]");
    if(currObj!=null && currObj.length>0){
        currObj.each(function(index, obj){                       
            var currObjTagName= obj.tagName;
            if(currObjTagName=="INPUT"){
                if(jQuery(obj).is(':radio') || jQuery(obj).is(':checkbox')){
                    if(jQuery(obj).val()==value && value!=""){
                        jQuery(obj).trigger('click');
                    }
                }else if(jQuery(obj).is(':text,[type=search]')){
                    jQuery(obj).val(value);
                }
            }else if(currObjTagName=="SELECT" && value!=""){
                jQuery('option[value="'+value+'"]', currObj).prop('selected',true);
            }
        });
    }
});
}

;(function($, doc, win) {

    $("body").append("<div id=\"loading\"><img alt=\"Loading page\" src=\"/images/loading_image.gif\"></div>");
    $("head").append("<style type=\"text/css\">#loading {display: none;position: fixed;width: 330px;height: 99px;margin: auto;left: 40%;top: 50%;z-index:10;}</style>");
    
    $.fn.KRESearch = function(options){
        this.currentObj  = $(this);
        this.element = "";
        var events={"headerFooter":"submit", "Pagination":"click", "advanceSearch":"click", "dropDown":"change", "formSubmit":"submit"}
        this.timeoutID='';
        var defaults = {
            bindEventFor:'formSubmit', /* headerFooter, Pagination, advanceSearch, dropDown, formSubmit */
            advanceSearchFormId:'#filter',
            loadindIndicatorClass:'charContSpan',
            loadindIndicatorText:'',
            loadindIndicatorImage:'/images/loading_image.gif',
            searchUpdate:'.ajax_search',
            resultUpdate:'.search_results_main_block',
            tracking:true,
            advancedSearch:''
        };
        
        var options = $.extend(defaults, options);
        function private(){
            console.log("Private")
        }
        function bindEvents(element){
            var element=element;
            var behaviour=events[options.bindEventFor];            
            $(element).unbind(behaviour)
            $(element).bind(behaviour, function () {
                submit(element, false, behaviour, this);
                return false;
            });
        }
        function headerFooterSubmit(){
            submit(element.serialize(), false);
        }
        function advanceSubmit(){
            submit(element.serialize(), false);
        }
        function submit(element, scrolltop, behaviour, obj){
        	var updateObject=(options.advancedSearch!="")? jQuery(options.resultUpdate) : jQuery(options.searchUpdate);
            if(behaviour=="submit"){
                var queryParams=(options.advancedSearch!="")? $(element).serialize()+"&"+options.advancedSearch+"=false" : $(element).serialize();

                $("#loading").show();
                jQuery.ajax({
                    url : '/search',
                    type : 'POST',
                    data : queryParams,
                    dataType : 'html',
                    success : function(data) {
                        updateObject.html(data);
                        changeHash(this.url+"?"+queryParams);
                        search_cache();
                        $("#loading").hide();
                        eval(document.getElementById('eval_search').innerHTML);
                        closeMenus();
                    },error:function(){
                        $("#loading").hide();
                    }
                });
                return false;
            }else{
                var searchURL=(behaviour=="change")? "/search" : $(obj).attr("href");
                var sort_value = jQuery("#new_per_page option:selected").val();
                var page_value = jQuery(".sortbydate .sortby-selected a").attr('data-id');
                jQuery("#filter_page").val(sort_value);
                jQuery("#filter_sort").val(page_value);
                $("#loading").show();
                var value = jQuery('#filters').serialize();
                var queryParams=(options.advancedSearch!="")? value+"&"+options.advancedSearch+"=false" : value;
                //value=(behaviour=="change")? "?"+queryParams : queryParams
                    jQuery.ajax({
                    url : searchURL,
                    type : 'POST',
                    data : queryParams,
                    dataType : 'html',
                    success : function(data) {
                        updateObject.html(data);
                        value=(behaviour=="change")? "?"+value : "&"+value;
                        changeHash(this.url+value);
                        search_cache();
                        eval(document.getElementById('eval_search').innerHTML);
                        closeMenus();
                        $("html, body").animate({scrollTop:0},"slow");
                        $("#loading").hide();
                    },error:function(){
                        $("#loading").hide();
                    }
                });
                return false;
            }
            
        }
        function isHistorySupported(){
            return !!(window.history && history.pushState);
		}
        function changeHash(action){
            if(isHistorySupported()){
			 var currentURL=window.location.pathname+window.location.search
			 if(action!=currentURL){window.history.pushState({"page":""}, "Search Page ", action);}
			}
			//if(_gaq && typeof _gaq!="undefined"){_gaq.push(['_trackPageview',action]);}
			//if(_tag && typeof _tag!="undefined"){_tag.dcsCollect();}
			return false;
		}
        return this.each(function() {
            bindEvents(this);
        });
    };
$(document).ready(function(){
    $("#search_form, #search_form_bottom").KRESearch({}); /* for header form submit */
    search_cache();
});
$(window).bind('popstate', function(event){
    if(window.location.pathname=="/search" && history.state && typeof event.state!="null"){
        var searchQuery=(window.location.search.length>1)? window.location.search : {}
        $("#loading").show();
        jQuery.ajax({
	       url : '/search',
	       type : 'GET',
	       data : searchQuery,
	       dataType : 'html',
	       success : function(data) {
	           jQuery(".ajax_search").html(data);
               $("#loading").hide();
               closeMenus();
	       },error:function(){
                $("#loading").hide();
           }
	   });
    }else{ }
    event.preventDefault();
});    
})(jQuery, document, window);
