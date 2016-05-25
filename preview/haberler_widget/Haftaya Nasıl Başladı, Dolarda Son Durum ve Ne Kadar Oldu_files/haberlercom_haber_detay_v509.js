function setCookie(name, value, days) { if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 4 * 60 * 60 * 1000)); var expires = "; expires=" + date.toGMTString(); } else { var expires = ""; } document.cookie = name + "=" + value + expires + "; path=/"; }
function getCookie(name) { var nameEQ = name + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') { c = c.substring(1, c.length); } if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); } return null; }

function setCookie20dk(name, value, days) {
    // if (days) {
    var date = new Date();
    //date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    date.setTime(date.getTime() + (20 * 60 * 1000)); //20 dakika süreli
    var expires = "; expires=" + date.toGMTString();
    //}
    //else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    //alert(document.cookie);
}


function anasayfadanmi() {

    var gelenUrl = document.referrer;
    var gelenUrlKalan = gelenUrl.replace("http://www.haberler.com/", "").replace("http://haberler.com/", "").replace("http://yeni.haberler.com/", "");
    var n = false;

    if ((document.referrer.indexOf("haberler.com")) > 1) n = true;
    if (gelenUrlKalan.indexOf("/") > 1 || gelenUrlKalan.indexOf(".") > 1) n = false;
    return n;

}

/***** js1_haber.js BAŞALDI *****/

function impressions(id, havuz) {

    if ((anasayfadanmi() && havuz == 50) || (havuz != 50)) {
        var id;
        var havuz;
        var isIE = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;
        var req = new XMLHttpRequest();
        if (req) {
            req.open('POST', '/dinamik/PH/click.aspx?', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
            req.send('id=' + id + '&havuz=' + havuz);
        }
    }
}

function ikinci_manset_impressions(id, s) {
    var id;
    var havuz;
    var isIE = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;
    var req = new XMLHttpRequest();
    if (req) {
        req.open('POST', '/islem/ikinci_manset_impressions.asp?', true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
        req.send('id=' + id + '&s=' + s);
    }
}
/***** js1_haber.js BİTTİ *****/
/***** js1_mobil_haberler.js BAŞALDI *****/
function RObj(ea) { var LS = ""; var QS = new Object(); var un = "undefined"; var x = null; var f = "function"; var n = "number"; var r = "string"; var e1 = "ERROR:Index out of range in\r\nRequest.QueryString"; var e2 = "ERROR:Wrong number of arguments or invalid property assignment\r\nRequest.QueryString"; var e3 = "ERROR:Object doesn't support this property or method\r\nRequest.QueryString.Key"; var dU = window.decodeURIComponent ? 1 : 0; function Err(arg) { if (ea) { alert("Request Object:\r\n" + arg) } }; function URID(t) { var d = ""; if (t) { for (var i = 0; i < t.length; ++i) { var c = t.charAt(i); d += (c == "+" ? " " : c) } } return (dU ? decodeURIComponent(d) : unescape(d)) }; function OL(o) { var l = 0; for (var i in o) { if (typeof o[i] != f) { l++ } }; return l }; function AK(key) { var auk = true; for (var u in QS) { if (typeof QS[u] != f && u.toString().toLowerCase() == key.toLowerCase()) { auk = false; return u } } if (auk) { QS[key] = new Object(); QS[key].toString = function () { return TS(QS[key]) }; QS[key].Count = function () { return OL(QS[key]) }; QS[key].Count.toString = function () { return OL(QS[key]).toString() }; QS[key].Item = function (e) { if (typeof e == un) { return QS[key] } else { if (typeof e == n) { var a = QS[key][Math.ceil(e)]; if (typeof a == un) { Err(e1 + "(\"" + key + "\").Item(" + e + ")") }; return a } else { Err("ERROR:Expecting numeric input in\r\nRequest.QueryString(\"" + key + "\").Item(\"" + e + "\")") } } }; QS[key].Item.toString = function (e) { if (typeof e == un) { return QS[key].toString() } else { var a = QS[key][e]; if (typeof a == un) { Err(e1 + "(\"" + key + "\").Item(" + e + ")") }; return a.toString() } }; QS[key].Key = function (e) { var t = typeof e; if (t == r) { var a = QS[key][e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e3 + "(" + (e ? e : "") + ")") } }; QS[key].Key.toString = function () { return x } }; return key }; function AVTK(key, val) { if (key != "") { var key = AK(key); var l = OL(QS[key]); QS[key][l + 1] = val } }; function TS(o) { var s = ""; for (var i in o) { var ty = typeof o[i]; if (ty == "object") { s += TS(o[i]) } else if (ty != f) { s += o[i] + ", " } }; var l = s.length; if (l > 1) { return (s.substring(0, l - 2)) } return (s == "" ? x : s) }; function KM(k, o) { var k = k.toLowerCase(); for (var u in o) { if (typeof o[u] != f && u.toString().toLowerCase() == k) { return u } } } if (window.location && window.location.search) { LS = window.location.search; var l = LS.length; if (l > 0) { LS = LS.substring(1, l); var preAmpAt = 0; var ampAt = -1; var eqAt = -1; var k = 0; var skip = false; for (var i = 0; i < l; ++i) { var c = LS.charAt(i); if (LS.charAt(preAmpAt) == "=" || (preAmpAt == 0 && i == 0 && c == "=")) { skip = true } if (c == "=" && eqAt == -1 && !skip) { eqAt = i } if (c == "&" && ampAt == -1) { if (eqAt != -1) { ampAt = i } if (skip) { preAmpAt = i + 1 }; skip = false } if (ampAt > eqAt) { AVTK(URID(LS.substring(preAmpAt, eqAt)), URID(LS.substring(eqAt + 1, ampAt))); preAmpAt = ampAt + 1; eqAt = ampAt = -1; ++k } } if (LS.charAt(preAmpAt) != "=" && (preAmpAt != 0 || i != 0 || c != "=")) { if (preAmpAt != l) { if (eqAt != -1) { AVTK(URID(LS.substring(preAmpAt, eqAt)), URID(LS.substring(eqAt + 1, l))) } else if (preAmpAt != l - 1) { AVTK(URID(LS.substring(preAmpAt, l)), "") } } if (l == 1) { AVTK(LS.substring(0, 1), "") } } } }; var TC = OL(QS); if (!TC) { TC = 0 }; QS.toString = function () { return LS.toString() }; QS.Count = function () { return (TC ? TC : 0) }; QS.Count.toString = function () { return (TC ? TC.toString() : "0") }; QS.Item = function (e) { if (typeof e == un) { return LS } else { if (typeof e == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return QS[i] } }; Err(e1 + "().Item(" + e + ")") } else { return QS[KM(e, QS)] } }; return x }; QS.Item.toString = function () { return LS.toString() }; QS.Key = function (e) { var t = typeof e; if (t == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return i } } } else if (t == r) { var e = KM(e, QS); var a = QS[e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e2 + "().Key(" + (e ? e : "") + ")") }; Err(e1 + "().Item(" + e + ")") }; QS.Key.toString = function () { Err(e2 + "().Key") }; this.QueryString = function (k) { if (typeof k == un) { return QS } else { if (typeof k == n) { return QS.Item(k) }; var k = KM(k, QS); if (typeof QS[k] == un) { t = new Object(); t.Count = function () { return 0 }; t.Count.toString = function () { return "0" }; t.toString = function () { return x }; t.Item = function (e) { return x }; t.Item.toString = function () { return x }; t.Key = function (e) { Err(e3 + "(" + (e ? e : "") + ")") }; t.Key.toString = function () { return x }; return t } else { return QS[k] } } }; this.QueryString.toString = function () { return LS.toString() }; this.QueryString.Count = function () { return (TC ? TC : 0) }; this.QueryString.Count.toString = function () { return (TC ? TC.toString() : "0") }; this.QueryString.Item = function (e) { if (typeof e == un) { return LS.toString() } else { if (typeof e == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return QS[i] } }; Err(e1 + ".Item(" + e + ")") } else { return QS[KM(e, QS)] } } if (typeof e == n) { Err(e1 + ".Item(" + e + ")") }; return x }; this.QueryString.Item.toString = function () { return LS.toString() }; this.QueryString.Key = function (e) { var t = typeof e; if (t == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] == "object" && (++c == e)) { return i } } } else if (t == r) { var e = KM(e, QS); var a = QS[e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e2 + ".Key(" + (e ? e : "") + ")") }; Err(e1 + ".Item(" + e + ")") }; this.QueryString.Key.toString = function () { Err(e2 + ".Key") }; this.Version = 1.4; this.Author = "Andrew Urquhart (http://andrewu.co.uk)" }; var Request = new RObj(false);

function writeCookie(name, value, days) {
    //Fix Days 
    if (days == null || days == "") days = 365;

    // Set Date 
    var d = new Date();
    //d.setTime(d.getTime()+(days*24*60*60*1000));
    d.setTime(d.getTime() + (20 * 60 * 1000)); //20 dakika süreli
    var expires = "; expires=" + d.toGMTString();

    // Write Cookie 
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) { // by .fm 
    var c = document.cookie;
    if (c.indexOf(name) != -1) {
        pos1 = c.indexOf("=", c.indexOf(name)) + 1;
        pos2 = c.indexOf(";", pos1);
        // If last cookie 
        if (pos2 == -1) pos2 = c.length;;

        data = c.substring(pos1, pos2);

        return data;
    }
}

/*---Bu alanı değiştirmeyin---*/
function parseQuery(query) {
    var Params = new Object();
    if (!query) return Params;
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];
var queryString = myScript.src.replace(/^[^\?]+\??/, '');
var params = parseQuery(queryString);
var haber_kat_id = params['haber_kat'];
var referrer_url = document.referrer;
var kat_param = "";

if (haber_kat_id != null && (referrer_url.indexOf("google.com") > -1 || referrer_url.indexOf("yandex.com") > -1 || referrer_url.indexOf("bing.com") > -1)) {
    if (window.location.search.indexOf("?") > -1)
        kat_param = "&haber_kat=" + haber_kat_id;
    else
        kat_param = "?haber_kat=" + haber_kat_id;
}
/*---Bu alanı değiştirmeyin---*/

var yukseklik = window.screen.height;
var genislik = window.screen.width;

var strmobilMi = Request.QueryString("m");
if (strmobilMi == "0") {
    setCookie20dk("mobilkapaY", "evet", 1);
}


//if ((window.screen.height < 800 || window.screen.width < 600)) {
//    if ((getCookie("mobilkapaY") != "evet") || (getCookie("mobilkapaY") == null)) {
//        var newURL = window.location.protocol + "//m." + window.location.hostname.replace("yeni.", "").replace("yeni2.", "").replace("www.", "") + window.location.pathname + window.location.search + kat_param;

//        { location.href = newURL; }
//    }
//}



function maximumchracter(ths, size, result) {
    var currentLength = ths.value.length;
    if (currentLength * 1 > size * 1) {
        ths.value = ths.value.substring(0, size * 1);
        currentLength = ths.value.length;
    }

    //document.getElementById(result).innerHTML = size * 1 - currentLength; 
    $(ths).parents(".addComment").find(".count-result").html(size * 1 - currentLength);

}






/***** js1_mobil_haberler.js BİTTİ *****/

/***** js1_yorum_v2.js BAŞALDI *****/
function yorumgonder(i, yer, tur) {

    var yerid = "";
    if (yer == 'ust') { yerid = "ust"; } else { yerid = ""; }
    document.getElementById('mesaj' + yerid).innerHTML = "<font color='#FFFFFF'><span style='background-color: #CC3300'>&nbsp;&nbsp;Lütfen Bekleyiniz...&nbsp; </span></font>";


    var haber_id = i;
    var yorum;
    var e_mail;
    var adi_soyadi;
    var hata = "";
    var isIE = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;

    yorum = document.getElementById('yorum' + yerid).value;

    if (tur == 'tekli') { adi_soyadi = document.getElementById('adSoyad' + yerid).value; }
    else { adi_soyadi = document.getElementById('adSoyad' + yerid).value; e_mail = document.getElementById('email' + yerid).value; }


    if ((adi_soyadi == "") || (adi_soyadi == "Adınız Yazın")) {
        hata = "Lütfen Adınızı ve Soyadınızı Yazınız...\n";
    }

    if ((yorum == "") || (yorum == "Bu Haberle İlgili Yorumunuzu Yazın")) {
        hata = hata + "Lütfen Yorumunuzu Yazınız...\n";
    }
    if (yorum.length > 1000) {
        hata = hata + "Yorum 1000 Karakterden Uzun Olamaz...\n";
    }


    if (tur != 'tekli' && e_mail == "") {
        hata = hata + "Lütfen E-Mail Adresinizi Yazınız...\n";
    }

    if (tur != 'tekli' && e_mail != "") {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(e_mail) == false) {
            hata = hata + "E-Mail Adresi Doğrulanamadı...\n";
        }
    }


    if (hata != "") {
        alert(hata);
        document.getElementById('mesaj' + yerid).innerHTML = "";
        return (false);
    }

    document.getElementById('BtGonder' + yerid).disabled = true;

    var req = new XMLHttpRequest();
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if
                var respose = req.responseText.split("-");
                if (respose[0] == "tamam") { // sonuc 
                    document.getElementById('mesaj' + yerid).innerHTML = "<font color='#000000'><span style='background-color: #B9F0BD'>&nbsp;Yorumunuz Gönderildi. Onaylandıktan sonra yayınlanacaktır.&nbsp;&nbsp;</span></font>";
                    document.getElementById('BtGonder' + yerid).disabled = false;
                    document.getElementById('yorum' + yerid).value = "";
                    //document.getElementById('email' + yerid).value = "";
                    document.getElementById('adSoyad' + yerid).value = "";
                    setCookie("yorumbilgi", adi_soyadi + '#' + e_mail, 365);
                    //TestForumOncesi(yerid);

                } else if (respose[0] == "1dakika") {
                    document.getElementById('mesaj' + yerid).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Bir önceki mesajınızın üzerinden 1 dakika geçmeden yeni mesaj yazamazsınız.</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder' + yerid).disabled = false;
                } else if (respose[0] == "uzun") {
                    document.getElementById('mesaj' + yerid).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Yorum 1000 Karakterden Uzun Olamaz.</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder').disabled = false;
                } else if (respose[0] == "hata") {
                    document.getElementById('mesaj' + yerid).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Yorumunuz Gönderilemedi. Lütfen Tekrar Deneyiniz</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder').disabled = false;
                }
            } // durum if sonu
        };    // func sonu

        var CID = getCookie("CID");

        if (!CID || CID == null || CID == '')
            CID = 0;
        else
            CID = CID.replace('CID=', '');

        var degerler = 'yorum=' + yorum + '&id=' + haber_id + '&e_mail=' + e_mail + '&adi_soyadi=' + adi_soyadi + '&CID=' + CID + '&ClientCountryCode=' + ClientCountryCode;
        degerler = degerler.replace(/ /g, "%20");

        //alert(degerler);
        req.open('POST', '/islem/xml_yorum_yaz2.asp?', true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
        req.send(degerler);
    }	// if req sonu
}

function AnketSayfa() {
    var CID = getCookie("CID");
    if (!CID || CID == null || CID == '')
        CID = 0;
    else
        CID = CID.replace('CID=', '');

    var myWindow = window.open("/islem/anket_formu_yukle_sayfa.asp?CID=" + CID, "", "width=660, height=300");
}

function TestForumOncesi(yerid) {

    document.getElementById('anket_forum_' + yerid).innerHTML = "<span id=\"anket_forum_msg_ust\" style=\"width:100%; margin:40px 0 0  0px; cursor:pointer; font-weight:bold; color:blue; font-size:14pt; float:left; text-decoration:underline; \" onclick=\"javascript:AnketSayfa('" + yerid + "');\">YORUMLARI DEĞERLENDİRMEDE BİZE YARDIMCI OLUR MUSUNUZ?</span>";

}

function TestForumAnket(yerid, ilk_tiklama) {
    var req = new XMLHttpRequest('anket_forum_' + yerid);
    //alert('anket_forum_' + yerid);
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if 
                document.getElementById('anket_forum_' + yerid).innerHTML = req.responseText;
            }
        } // durum if sonu
    }; // func sonu


    var CID = getCookie("CID");

    if (!CID || CID == null || CID == '')
        CID = 0;
    else
        CID = CID.replace('CID=', '');

    var degerler = 'yerid=' + yerid + '&ilk_tiklama=' + ilk_tiklama + '&CID=' + CID;;


    //degerler = degerler.replace(/ /g, "%20"); 
    req.open('POST', '/islem/anket_formu_yukle.asp?', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
    req.send(degerler);

}

function anketgonder(ilgi_id, cevap, yerid) {
    //document.getElementById('anket_forum_' + yerid).innerHTML = "<font color='#000000'><span style='background-color: #B9F0BD'>&nbsp;Yoruma değerlendirme yaptığınız için teşekkür ederiz&nbsp;&nbsp;</span></font>";

    var req = new XMLHttpRequest();
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if

                TestForumAnket(yerid);

            } // durum if sonu
        }; // func sonu

        var CID = getCookie("CID");
        if (!CID || CID == null || CID == '') CID = "0";
        CID = CID.replace("CID=", "");

        var degerler = 'ilgi_id=' + ilgi_id + '&cevap=' + cevap + '&CID=' + CID;
        degerler = degerler.replace(/ /g, "%20");

        //alert(degerler);
        req.open('POST', '/islem/xml_anket_yaz.asp?', true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
        req.send(degerler);
    } // if req sonu


}


/***************/

function cevap_formu_yukle(ust_mesaj_id, haber_id) {

    //alert(ust_mesaj_id);
    var req = new XMLHttpRequest(ust_mesaj_id);
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if 
                document.getElementById('cevap_formu' + ust_mesaj_id).innerHTML = req.responseText;
            }
        } // durum if sonu
    }; // func sonu


    var degerler = 'ust_mesaj_id=' + ust_mesaj_id + '&haber_id=' + haber_id;
    //degerler = degerler.replace(/ /g, "%20");

    //alert(degerler);
    req.open('POST', '/islem/cevap_formu_yukle.asp?', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
    req.send(degerler);


}


function cevapgonder(i, ust_mesaj_id) {
    //alert(i+'-'+ust_mesaj_id);
    document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "<font color='#FFFFFF'><span style='background-color: #CC3300'>&nbsp;&nbsp;Lütfen Bekleyiniz...&nbsp; </span></font>";

    var haber_id = i;
    var yorum;
    var e_mail;
    var adi_soyadi;
    var hata = "";
    var isIE = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;

    yorum = document.getElementById('yorum' + ust_mesaj_id).value;
    //e_mail = document.getElementById('email' + ust_mesaj_id).value;
    adi_soyadi = document.getElementById('adSoyad' + ust_mesaj_id).value;

    if (adi_soyadi == "") {
        hata = "Lütfen Adınızı ve Soyadınızı Yazınız...\n";
    }
    /*
    if (e_mail == "") {
        hata = hata + "Lütfen E-Mail Adresinizi Yazınız...\n";
    }*/
    if (yorum == "") {
        hata = hata + "Lütfen Yorumunuzu Yazınız...\n";
    }
    if (yorum.length > 1000) {
        hata = hata + "Yorum 1000 Karakterden Uzun Olamaz...\n";
    }

    /* if (e_mail != "") {
         var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         if (reg.test(e_mail) == false) {
             hata = hata + "E-Mail Adresi Doğrulanamadı...\n";
         }
     }*/

    if (hata != "") {
        alert(hata);
        document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "";
        return (false);
    }



    if (hata != "") {
        alert(hata);
        document.getElementById('mesaj').innerHTML = "";
        return (false);
    }

    document.getElementById('BtGonder').disabled = true;

    var req = new XMLHttpRequest();
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if
                var respose = req.responseText.split("-");
                if (respose[0] == "tamam") { // sonuc 
                    document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "<font color='#000000'><span style='background-color: #B9F0BD'>&nbsp;Yorumunuz Gönderildi. Onaylandıktan sonra yayınlanacaktır.&nbsp;&nbsp;</span></font>";
                    document.getElementById('BtGonder' + ust_mesaj_id).disabled = false;
                    document.getElementById('yorum' + ust_mesaj_id).value = "";
                    //document.getElementById('email' + ust_mesaj_id).value = "";
                    document.getElementById('adSoyad' + ust_mesaj_id).value = "";
                } else if (respose[0] == "1dakika") {
                    document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Bir önceki mesajınızın üzerinden 1 dakika geçmeden yeni mesaj yazamazsınız.</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder' + ust_mesaj_id).disabled = false;
                } else if (respose[0] == "uzun") {
                    document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Yorum 1000 Karakterden Uzun Olamaz.</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder' + ust_mesaj_id).disabled = false;
                } else if (respose[0] == "hata") {
                    document.getElementById('mesaj' + ust_mesaj_id).innerHTML = "<center><span style='background-color: #FF9933'>&nbsp; <b>Yorumunuz Gönderilemedi. Lütfen Tekrar Deneyiniz</b>&nbsp;</span></center>";
                    document.getElementById('BtGonder' + ust_mesaj_id).disabled = false;
                }
            } // durum if sonu
        }; // func sonu

        var CID = getCookie("CID");
        if (!CID || CID == null || CID == '') CID = "0";
        CID = CID.replace("CID=", "");

        var degerler = 'ust_mesaj_id=' + ust_mesaj_id + '&yorum=' + yorum + '&id=' + haber_id + '&e_mail=' + e_mail + '&adi_soyadi=' + adi_soyadi + '&CID=' + CID;
        degerler = degerler.replace(/ /g, "%20");

        //alert(degerler);
        req.open('POST', '/islem/xml_yorum_yaz2.asp?', true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
        req.send(degerler);
    } // if req sonu


} //end of function


function begen(islem, yorum_id, adet) {

    if (getCookie("begen" + yorum_id) == null || getCookie("begen" + yorum_id) == "") {
        var req = new XMLHttpRequest();
        if (req) {
            req.onreadystatechange = function () {
                if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if
                    if (req.responseText == "tamam") { // sonuc 
                        if (islem == "begenmeyen") {

                            if (adet == 0) document.getElementById('begenmeyen' + yorum_id).innerHTML = '(' + parseInt(parseInt(adet) + 1) + ')';
                            else document.getElementById('begenmeyen' + yorum_id).innerHTML = parseInt(adet) + 1;
                        }
                        if (islem == "begenen") {
                            if (adet == 0) document.getElementById('begenen' + yorum_id).innerHTML = '(' + parseInt(parseInt(adet) + 1) + ')';
                            else document.getElementById('begenen' + yorum_id).innerHTML = parseInt(adet) + 1;
                        }
                        setCookie("begen" + yorum_id, yorum_id, 1);
                    }


                    if (req.responseText == "begenen") { // sonuc 
                        alert("Bu yorum için daha önce puan verdiniz!");
                        return false;
                    }


                    if (req.responseText == "begenmeyen") { // sonuc 
                        alert("Bu yorum için daha önce puan verdiniz!");
                        return false;
                    }



                } // durum if sonu
            }; // func sonu

            var degerler = 'islem=' + islem + '&yorum_id=' + yorum_id + '&adet=' + adet;
            degerler = degerler.replace(/ /g, "%20");

            //alert(degerler);
            req.open('POST', '/islem/begen.asp?', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
            req.send(degerler);


        } // if req sonu    

    }
    else {
        alert("Bu yorum için daha önce puan verdiniz!");
        //return false;
    }

}

function yorumSikayetEt(yorum_id) {

    if (getCookie("sikayet" + yorum_id) == null) {
        //alert("işlem basladı"); 

        var req = new XMLHttpRequest();
        if (req) {
            req.onreadystatechange = function () {
                if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if

                    if (req.responseText == "tamam") { // sonuc 
                        document.getElementById('cevap_formu' + yorum_id).innerHTML = 'Şikayetiniz alındı. Teşekkür ederiz.';
                        setCookie("sikayet" + yorum_id, yorum_id, 1);
                    }

                    if (req.responseText == "zatenVar") { // sonuc 
                        alert("Bu yorum için daha önce puan verdiniz!");
                        return false;
                    }

                } // durum if sonu
            }; // func sonu

            var CID = getCookie("CID");
            if (!CID || CID == null || CID == '') CID = "0";
            CID = CID.replace("CID=", "");

            var degerler = "yorum_id=" + yorum_id + "&CookieId=" + CID;
            degerler = degerler.replace(/ /g, "%20");

            //alert(degerler);
            req.open('POST', '/islem/yorumSikayetEt.asp?', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
            req.send(degerler);
        } // if req sonu    

    }
    else {
        alert("Bu yorumu daha önceden şikayet ettiniz!");
        //return false;
    }

}



function yorumgizle(yorum_id) {

    var gizlenenler;
    if (getCookie("yorumgizle") == null) { gizlenenler = "*#"; } else { gizlenenler = getCookie("yorumgizle"); }
    //console.log(gizlenenler);



    if (gizlenenler.indexOf(yorum_id) < 0) { // daha önce gizle yapılmadıysa 
        //alert("işlem basladı"); 

        setCookie("yorumgizle", gizlenenler + "#" + yorum_id, 7);
        $("#sk" + yorum_id).hide();

        var req = new XMLHttpRequest();
        if (req) {
            req.onreadystatechange = function () {
                if (req.readyState == 4 && (req.status == 200 || req.status == 304)) { // durum if

                    if (req.responseText == "tamam") { // sonuc 
                        //document.getElementById('cevap_formu' + yorum_id).innerHTML = 'Şikayetiniz alındı. Teşekkür ederiz.';

                    }
                } // durum if sonu
            }; // func sonu

            var CID = getCookie("CID");
            if (!CID || CID == null || CID == '') CID = "0";
            CID = CID.replace("CID=", "");

            var degerler = "yorum_id=" + yorum_id + "&CookieId=" + CID;
            degerler = degerler.replace(/ /g, "%20");

            //alert(degerler);
            req.open('POST', '/islem/yorumSikayetEt.asp?', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
            req.send(degerler);
        } // if req sonu    

    }
    else {
        setCookie("yorumgizle", gizlenenler + "#" + yorum_id, 7);
        $("#sk" + yorum_id).hide();
        console.log('Control:' + gizlenenler);
        //alert("Bu yorumu gizlendi..!");
        //return false;
    }

}



$(window).load(function () {

    var gizlenenler;
    if (getCookie("yorumgizle") == null) { gizlenenler = "*#"; } else { gizlenenler = getCookie("yorumgizle"); }

    var myArray = gizlenenler.split('#');
    for (var i = 0; i < myArray.length; i++) {
        //console.log('#sk' + myArray[i]);
        $('#sk' + myArray[i]).hide();
    }

});



/***************/
/***** js1_yorum_v2.js BİTTİ *****/

/***** üst menü dropdown BAŞALDI *****/
function MenuDRPAc(itm) {
    var mt2 = document.getElementById(itm);
    mt2.setAttribute("style", "display:block;");
}

function MenuDRPKapa(itm) {
    var mt2 = document.getElementById(itm);
    mt2.setAttribute("style", "display:none;");
}
/***** üst menü dropdown BİTTİ *****/





function manch(i) {
    if (isiOS || android) {

    }
    else {
        closeall();
        document.getElementById("manset" + i).style.display = 'block';
        if (i == 1)
            document.getElementById("buton" + i).className = 'first current';
        else
            document.getElementById("buton" + i).className = 'current';
    }
}

curmanset = 1;
man_over = 0;
function closeall() {
    for (i = 1; i < 23; i++) {
        if (document.getElementById("manset" + i)) {
            document.getElementById("manset" + i).style.display = 'none';
            if (i == 1)
                document.getElementById("buton" + i).className = 'first';
            else
                document.getElementById("buton" + i).className = '';
        }
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function abone_kayit() {

    var hata = "";
    var e_mail = document.getElementById('Email_Adresi').value;
    if (e_mail == "" || e_mail == "E-mail Adresiniz") {
        hata = hata + "Lütfen E-Mail Adresinizi Yazınız.";
    }
    else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(e_mail) == false) {
            hata = hata + "E-Mail Adresi Doğrulanamadı. ";
        }
    }

    var konular = "*##*";
    var cboxes = document.getElementsByName('konular');
    var len = cboxes.length;
    for (var i = 0; i < len; i++) {
        if (cboxes[i].checked) {
            konular = konular + "," + cboxes[i].value;
        }
    }

    if (konular == "" || konular == "*##*")
        hata = hata + "Lütfen Konu Seçiniz</br>";

    if (hata == "") {
        var req = new XMLHttpRequest();
        if (req) {
            req.onreadystatechange = function () {
                if (req.readyState == 4 && (req.status == 200 || req.status == 304)) {
                    document.getElementById("abone_mesaj").innerHTML = req.responseText;
                }
            };
            req.open('POST', '/islem/haber_konu_abonelik.asp?', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            req.send('e_mail=' + e_mail + '&konular=' + encodeURIComponent(konular.replace("*##*,", "").replace("*##*", "")));
        }
    }
    else {
        document.getElementById("abone_mesaj").innerHTML = hata;
    }
}


function defaultValueKontrol(nesne, str) {
    if (nesne.value == str) { nesne.value = ''; }
    else if (nesne.value == "") { nesne.value = str; }
}





/* HABER DETAY GRİD*/


$(document).ready(function () {
    //console.log("ready!");

    var container = $("#CntnrNew");
    var item = ".item";
    var columnWidth = 300;
    var columnHeight = 300;
    var gutter = 20;
    var pool = {};
    var grid = [100, 100];
    var colCount = 1;
    var maxRowLimit = 100;
    var resizeEnd, lastY;
    var bannerWidth = 160;
    var leftMarginForCentered = 0;
    var calculatedEmptyWidth = 0;
    var calculatedWidth = 0;
    var containerWidth = 0;
    var addnotloaded = true;
    var totalbox = 0;

    var pageSkinEnabled = false;
    var mustHeadEnabled = false;

    try { pageSkinEnabled = pageSkinEnabledMain; }
    catch (err) { pageSkinEnabled = pageSkinEnabled; }


    //alert("pageSkinEnabled: "+pageSkinEnabled );

    $(window).on('resize', function () {

        clearTimeout(resizeEnd);

        resizeEnd = setTimeout(function () {
            $(window).trigger('resizeEnd');
        }, 50);
    });



    function ColCalculate() {
        //alert($("#BlokSolMtrx").width());
        //alert($(window).width());

        var solw = $("#BlokSolMtrx").width();
        var solh = $("#BlokSolMtrx").height();
        var sagh = solh;

        var tumw = $(window).width();
        var sagw = parseInt(tumw) - parseInt(solw) - 20;

        $('#BlokSagMtrx').css("height", sagh + 50);
        //$('#BlokSagMtrx').css("overflow", "hidden");
        //$('#BlokSagMtrx').css("width", sagw);

        //alert(sagw);



        calculatedWidth = 0;
        containerWidth = sagw;//parseInt(parseInt($(window).width()) -  parseInt($("BlokSolMtrx").width()));


        i = 0;
        while (calculatedWidth <= containerWidth) {
            i++;
            calculatedWidth = (i * columnWidth) + ((i - 1) * gutter);
        }

        colCount = i - 1;
        if (colCount < 1) colCount = 1;

        calculatedEmptyWidth = containerWidth - (calculatedWidth - columnWidth - gutter);
        calculatedWidth = calculatedWidth - columnWidth;

        totalbox = ((colCount * parseInt(solh / 274)) - 1);
        //alert(totalbox);

        //leftMarginForCentered = calculatedEmptyWidth / 2;

    }

    function CreateMatrix() {

        for (y = 0; y < maxRowLimit; y++) {
            grid[y] = new Array(colCount);

            for (x = 0; x < colCount; x++) {
                grid[y][x] = null;
            }
        }

        if (pageSkinEnabled) {
            if (colCount > 1) {
                grid[0][colCount - 1] = "boxPageSkin";
                grid[1][colCount - 1] = "boxPageSkin";
                $("#boxPageSkin").css("display", "block");
                pageSkinHide = false;
                $("#boxPageSkin").height(250);
            }
            else {
                $("#boxPageSkin").css("display", "none");
                pageSkinHide = true;
            }
        }
        else { $("#boxPageSkin").css("display", "none"); }
    }





    function GetItems() {
        $(".item").each(function (i, val) {
            pool[i] = { id: $(this).attr("id"), boxType: $(this).data("box-type"), isLocated: false };
        });
    }

    function SetPosition(element, positionX, positionY, type) {
        //if( element == "box300" || element == "box200" || element == "advertorial") alert(element+"pos y-x: "+ positionY +"-"+positionX);
         
        if (positionY == 0) {
            topX = 0;
        }
        else if (positionY == 1) {
            box = grid[positionY - 1][positionX];
            box = $("#" + box);
            topX = (box.outerHeight() + gutter);
        }
        else if (positionY > 0) {

            try {
                //console.log("**hata***: - " + element + "-" + positionY + "-" + positionX);
                el = grid[positionY - 1][positionX];

                prevElem = document.getElementById(el);
                prevCls = prevElem.className;

                if (prevCls == 'item type1') { prevHeight = 250; }
                if (prevCls == 'item type2') { prevHeight = 250; }
                if (prevCls == 'item type3') { prevHeight = 520; }
                if (prevCls == 'item type4') { prevHeight = 80; }
                if (prevCls == 'adv item type1') { prevHeight = 250; }
                if (el == "boxPageSkin") { prevHeight = 600; }
                if (el == "box300") { prevHeight = 350; }
                if (el == "box200") { prevHeight = 250; }
                if (el == "OzelKutu1") { prevHeight = 520; }

                //prevHeight = prevElem.clientHeight;
                prevTop = prevElem.style.top;
                topX = parseInt(prevTop.replace("px", "")) + parseInt(prevHeight) + gutter;
            }
            catch (err) {
                console.log("**hata***: - " + element + "-" + positionY + "-" + positionX);
                console.log(grid);
            }
        }

        left = leftMarginForCentered + ((positionX) * columnWidth) + (positionX * gutter);
        $("#" + element).css("top", "0").css("left", "0").css("position", "absolute").css("left", left).css("top", topX);
    }

    function WatchDog() {

        //console.log(grid);
        lastY = 0;
        totalsay = 0;
        $.each(pool, function (index, val) {

            //BoxType a göre kontrol edip gride yerleştir sonrada position verip havuzdan pasifle





            totalsay = totalsay + 1;

            if (val.id == "boxPageSkin") { totalsay = totalsay + 1; }

            exit = false;



            if ((val.id == "advertorial") || (val.id == "boxPageSkin") /*|| (val.id == "reklam300x250_1") || (val.id == "reklam300x250_2") || (val.id == "reklam300x250_333")*/) {
                if (val.id == "advertorial" && advertorialEnabled) { SetPosition("advertorial", 0, 1); $("#" + val.id).css("display", "blok"); }
                if (val.id == "boxPageSkin" && pageSkinEnabled && (colCount > 0)) { SetPosition("boxPageSkin", colCount - 1, 0); $("#" + val.id).css("display", "blok"); }



                /*if (val.id == "reklam300x250_1" && (colCount >= 0)) { SetPosition("reklam300x250_1", 0, 0); $("#" + val.id).css("display", "blok"); }
                if (val.id == "reklam300x250_2" && (colCount >= 0)) { SetPosition("reklam300x250_2", 0, 2); $("#" + val.id).css("display", "blok"); }
                //if (val.id == "reklam300x250_3" && (colCount >= 0)) { SetPosition("reklam300x250_3", 0, 4); $("#" + val.id).css("display", "blok"); }*/

            }





            else {

                if (totalsay > totalbox) {
                    //$("#" + val.id).css("display", "none"); /// alanda yer kalmadıysa kutuları gizle
                    $("#" + val.id).remove();
                }
                else {
                    $("#" + val.id).css("display", "block");
                    if (val.boxType == 1) {
                        for (posY = 0; posY < maxRowLimit; posY++) {
                            if (lastY < posY) lastY = posY;
                            if (exit == true) break;

                            for (posX = 0; posX < colCount; posX++) {
                                if (grid[posY][posX] == null) {
                                    grid[posY][posX] = val.id;
                                    exit = true;
                                    SetPosition(val.id, posX, posY);
                                    //console.log("Kare:"+grid[posY][posX]);
                                    break;
                                }
                            }

                        }
                    }
                    else if (val.boxType == 2) {
                        // Yatay ikili

                        for (posY = 0; posY < maxRowLimit; posY++) {
                            if (lastY < posY) lastY = posY;
                            if (exit == true) break;

                            for (posX = 0; posX < colCount;) {
                                if (grid[posY][posX] == null && grid[posY][posX + 1] == null && (posX + 1) < colCount) {
                                    grid[posY][posX] = val.id;
                                    grid[posY][posX + 1] = val.id;
                                    exit = true;
                                    //console.log("**Öncesi***: - " + val.id +"-"+ posX + "-" + posX);
                                    SetPosition(val.id, posX, posY);
                                    //console.log("Yatay:"+grid[posY][posX]);
                                    break;
                                }
                                posX = posX + 2;
                            }

                        }

                    }
                    else if (val.boxType == 3) {
                        // Dikey ikili
                        for (posY = 0; posY < maxRowLimit; posY++) {
                            if (lastY < posY) lastY = posY;
                            if (exit == true) break;

                            for (posX = 0; posX < colCount; posX++) {
                                if (grid[posY][posX] == null && grid[posY + 1][posX] == null) {
                                    grid[posY][posX] = val.id;
                                    grid[posY + 1][posX] = val.id;
                                    exit = true;
                                    SetPosition(val.id, posX, posY);
                                    //console.log("Dikey:"+grid[posY][posX]);
                                    break;
                                }
                            }

                        }

                    }
                } //end if totalbox kontrol
            }

        });




        //console.log(grid);
        //console.log(pool);
        containerHeight = 0;
        for (i = 0; i < colCount; i++) {
            try { element = grid[lastY - 1][i]; }
            catch (err) { break; }
            if (element == null) break;
            //console.log(element);
            if (document.getElementById(element)) {
                LastElem = document.getElementById(element);
                LastTop = LastElem.style.top;
                LastHeight = LastElem.clientHeight;
                containerTempHeight = parseInt(LastTop.replace("px", "")) + parseInt(LastHeight) + gutter + 50;
                if (containerHeight < containerTempHeight) containerHeight = containerTempHeight;
            }
        }

        container.css("position", "relative").css("height", containerHeight);
        //pool = {};
        // grid = [];
        //console.log(grid);
    }

    $(window).on('resizeEnd', function () {
        $("#reklam160x600").hide();
        //console.log('IMMA RESIZED 100 MILLI-FOCKING-SECONDS AGO');
        GetItems();
        ColCalculate();
        CreateMatrix();
        WatchDog();
    });


    $(window).load(function () {
        GetItems();
        ColCalculate();
        CreateMatrix();
        WatchDog();
    });
});