function setCookie (name, value, lifespan, access_path) {
      
  var cookietext = name + "=" + escape(value)  
    if (lifespan != null) {  
      var today=new Date()     
      var expiredate = new Date()      
      expiredate.setTime(today.getTime() + 1000*60*60*24*lifespan)
      cookietext += "; expires=" + expiredate.toGMTString()
    }
    if (access_path != null) { 
      cookietext += "; PATH="+access_path 
    }
   document.cookie = cookietext 
   return null  
}


function setDatedCookie(name, value, expire, access_path) {
    var cookietext = name + "=" + escape(value)
      + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
     if (access_path != null) { 
      cookietext += "; PATH="+access_path 
     }
   document.cookie = cookietext 
   return null        
}


function getCookie(Name) {
  var search = Name + "="                       
  var CookieString = document.cookie            
  var result = null                               
  if (CookieString.length > 0) {                
    offset = CookieString.indexOf(search)       
    if (offset != -1) {                         
      offset += search.length                   
      end = CookieString.indexOf(";", offset)   
      if (end == -1)                            
        end = CookieString.length               
      result = unescape(CookieString.substring(offset, end))         
                                                
      } 
    }
   return result                                
}


function deleteCookie(Name, Path) {
  setCookie(Name,"Deleted", -1, Path)
}


