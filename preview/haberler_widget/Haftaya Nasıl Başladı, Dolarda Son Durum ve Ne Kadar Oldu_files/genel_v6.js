function RObj(ea) { var LS = ""; var QS = new Object(); var un = "undefined"; var x = null; var f = "function"; var n = "number"; var r = "string"; var e1 = "ERROR:Index out of range in\r\nRequest.QueryString"; var e2 = "ERROR:Wrong number of arguments or invalid property assignment\r\nRequest.QueryString"; var e3 = "ERROR:Object doesn't support this property or method\r\nRequest.QueryString.Key"; var dU = window.decodeURIComponent ? 1 : 0; function Err(arg) { if (ea) { alert("Request Object:\r\n" + arg) } }; function URID(t) { var d = ""; if (t) { for (var i = 0; i < t.length; ++i) { var c = t.charAt(i); d += (c == "+" ? " " : c) } } return (dU ? decodeURIComponent(d) : unescape(d)) }; function OL(o) { var l = 0; for (var i in o) { if (typeof o[i] != f) { l++ } }; return l }; function AK(key) { var auk = true; for (var u in QS) { if (typeof QS[u] != f && u.toString().toLowerCase() == key.toLowerCase()) { auk = false; return u } } if (auk) { QS[key] = new Object(); QS[key].toString = function () { return TS(QS[key]) }; QS[key].Count = function () { return OL(QS[key]) }; QS[key].Count.toString = function () { return OL(QS[key]).toString() }; QS[key].Item = function (e) { if (typeof e == un) { return QS[key] } else { if (typeof e == n) { var a = QS[key][Math.ceil(e)]; if (typeof a == un) { Err(e1 + "(\"" + key + "\").Item(" + e + ")") }; return a } else { Err("ERROR:Expecting numeric input in\r\nRequest.QueryString(\"" + key + "\").Item(\"" + e + "\")") } } }; QS[key].Item.toString = function (e) { if (typeof e == un) { return QS[key].toString() } else { var a = QS[key][e]; if (typeof a == un) { Err(e1 + "(\"" + key + "\").Item(" + e + ")") }; return a.toString() } }; QS[key].Key = function (e) { var t = typeof e; if (t == r) { var a = QS[key][e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e3 + "(" + (e ? e : "") + ")") } }; QS[key].Key.toString = function () { return x } }; return key }; function AVTK(key, val) { if (key != "") { var key = AK(key); var l = OL(QS[key]); QS[key][l + 1] = val } }; function TS(o) { var s = ""; for (var i in o) { var ty = typeof o[i]; if (ty == "object") { s += TS(o[i]) } else if (ty != f) { s += o[i] + ", " } }; var l = s.length; if (l > 1) { return (s.substring(0, l - 2)) } return (s == "" ? x : s) }; function KM(k, o) { var k = k.toLowerCase(); for (var u in o) { if (typeof o[u] != f && u.toString().toLowerCase() == k) { return u } } } if (window.location && window.location.search) { LS = window.location.search; var l = LS.length; if (l > 0) { LS = LS.substring(1, l); var preAmpAt = 0; var ampAt = -1; var eqAt = -1; var k = 0; var skip = false; for (var i = 0; i < l; ++i) { var c = LS.charAt(i); if (LS.charAt(preAmpAt) == "=" || (preAmpAt == 0 && i == 0 && c == "=")) { skip = true } if (c == "=" && eqAt == -1 && !skip) { eqAt = i } if (c == "&" && ampAt == -1) { if (eqAt != -1) { ampAt = i } if (skip) { preAmpAt = i + 1 }; skip = false } if (ampAt > eqAt) { AVTK(URID(LS.substring(preAmpAt, eqAt)), URID(LS.substring(eqAt + 1, ampAt))); preAmpAt = ampAt + 1; eqAt = ampAt = -1; ++k } } if (LS.charAt(preAmpAt) != "=" && (preAmpAt != 0 || i != 0 || c != "=")) { if (preAmpAt != l) { if (eqAt != -1) { AVTK(URID(LS.substring(preAmpAt, eqAt)), URID(LS.substring(eqAt + 1, l))) } else if (preAmpAt != l - 1) { AVTK(URID(LS.substring(preAmpAt, l)), "") } } if (l == 1) { AVTK(LS.substring(0, 1), "") } } } }; var TC = OL(QS); if (!TC) { TC = 0 }; QS.toString = function () { return LS.toString() }; QS.Count = function () { return (TC ? TC : 0) }; QS.Count.toString = function () { return (TC ? TC.toString() : "0") }; QS.Item = function (e) { if (typeof e == un) { return LS } else { if (typeof e == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return QS[i] } }; Err(e1 + "().Item(" + e + ")") } else { return QS[KM(e, QS)] } }; return x }; QS.Item.toString = function () { return LS.toString() }; QS.Key = function (e) { var t = typeof e; if (t == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return i } } } else if (t == r) { var e = KM(e, QS); var a = QS[e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e2 + "().Key(" + (e ? e : "") + ")") }; Err(e1 + "().Item(" + e + ")") }; QS.Key.toString = function () { Err(e2 + "().Key") }; this.QueryString = function (k) { if (typeof k == un) { return QS } else { if (typeof k == n) { return QS.Item(k) }; var k = KM(k, QS); if (typeof QS[k] == un) { t = new Object(); t.Count = function () { return 0 }; t.Count.toString = function () { return "0" }; t.toString = function () { return x }; t.Item = function (e) { return x }; t.Item.toString = function () { return x }; t.Key = function (e) { Err(e3 + "(" + (e ? e : "") + ")") }; t.Key.toString = function () { return x }; return t } else { return QS[k] } } }; this.QueryString.toString = function () { return LS.toString() }; this.QueryString.Count = function () { return (TC ? TC : 0) }; this.QueryString.Count.toString = function () { return (TC ? TC.toString() : "0") }; this.QueryString.Item = function (e) { if (typeof e == un) { return LS.toString() } else { if (typeof e == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] != f && ++c == e) { return QS[i] } }; Err(e1 + ".Item(" + e + ")") } else { return QS[KM(e, QS)] } } if (typeof e == n) { Err(e1 + ".Item(" + e + ")") }; return x }; this.QueryString.Item.toString = function () { return LS.toString() }; this.QueryString.Key = function (e) { var t = typeof e; if (t == n) { var e = Math.ceil(e); var c = 0; for (var i in QS) { if (typeof QS[i] == "object" && (++c == e)) { return i } } } else if (t == r) { var e = KM(e, QS); var a = QS[e]; return (typeof a != un && a && a.toString() ? e : "") } else { Err(e2 + ".Key(" + (e ? e : "") + ")") }; Err(e1 + ".Item(" + e + ")") }; this.QueryString.Key.toString = function () { Err(e2 + ".Key") }; this.Version = 1.4; this.Author = "Andrew Urquhart (http://andrewu.co.uk)" }; var Request = new RObj(false);
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 4 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function setCookie20dk(name, value, days) {
	setCookieMain(name, value, 20)
}

function setCookieInMinutes(name, value, minutes) {
	setCookieMain(name, value, minutes)
}

function setCookieMain(cname, cvalue, exminute, path) {
	var d = new Date();
	d.setTime(d.getTime() + (exminute * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires; + "; path=" + path == null ? "/" : path;
}

function getCookie(name) {
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}

var strmobilMi = Request.QueryString("m");
//alert(strmobilMi);

if (strmobilMi == "0") {
	setCookie20dk("mobilkapaY", "evet", 1);
}



var newURL = window.location.protocol + "//m." + window.location.hostname.replace("yeni.", "").replace("yeni2.", "").replace("www.", "").replace("www1.", "").replace("www2.", "").replace("www3.", "") + window.location.pathname + window.location.search
var md = new MobileDetect(window.navigator.userAgent);

if (((getCookie("mobilkapaY") != "evet") || (getCookie("mobilkapaY") == null)) && window.location.pathname != "/arama.asp") {
	if (md.phone()) { location.href = newURL; }
}



function asnyc_imp(id, havuz, mod, kayit) {
	var req = new XMLHttpRequest();
	if (req) {
		req.onreadystatechange = function () { };
		req.open('POST', 'http://dynamic.haberler.com/dinamik/PH/imp.aspx?', true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
		req.send('id=' + id + '&havuz=' + havuz + '&mod=' + mod + '&kayit=' + kayit);
	}
}

function asnyc_cid(haber_id, galeri_id, galeri_resim_id, yorum_id, yorum_ilgi_id, yorum_ilgi_tur, Kategori, url, url_tur, super_icerik, baslik) {
	var req = new XMLHttpRequest();
	if (req) {
		req.onreadystatechange = function () { };
		req.open('POST', 'http://www.haberler.com/dinamik/CID_IP_islem.aspx?', true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-9');
		req.send('haber_id=' + haber_id + '&galeri_id=' + galeri_id + '&galeri_resim_id=' + galeri_resim_id + '&yorum_id=' + yorum_id + '&yorum_ilgi_id=' + yorum_ilgi_id + '&yorum_ilgi_tur=' + yorum_ilgi_tur + '&Kategori=' + Kategori + '&url=' + url + '&url_tur=' + url_tur + '&super_icerik=' + super_icerik + '&baslik=' + baslik);
	}
}

function SlotDurum(slot) {
	var req = new XMLHttpRequest();
	var code = "";
	if (req) {
		req.onreadystatechange = function () {
			if (req.readyState == 4 && (req.status == 200 || req.status == 304)) {
				code = req.responseText;
			}
			else { code = ""; }
		}
	};
	req.open('POST', 'http://ads.minireklam.com/switch/Default.aspx?', false);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send('s=' + slot);
	return code;
}

if (getCookie("ClientCountryCode") == "" || getCookie("ClientCountryCode") == null || getCookie("ClientCountryCode") == undefined) {
    var ClientCountryCode = CountryCode();
}
else {
    var ClientCountryCode = getCookie("ClientCountryCode");
}

function CountryCode() {
	var req = new XMLHttpRequest();
	var code = "";
	if (req) {
		req.onreadystatechange = function () {
			if (req.readyState == 4 && (req.status == 200 || req.status == 304)) {
			    code = req.responseText;
			    setCookie("ClientCountryCode", code, 1);
			}
			else { code = ""; }
		}
	};
	req.open('POST', '/islem/CountryCode.aspx?', true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send();
	return code;
}
/*loadEventEnd dedector KULLANIM: loadEventEnd.addFunction(function () {alert(Load Event End);});*/

var loadEventEndInterval = setInterval(function () {
	var b = window.performance || window.webkitPerformance,
                b = b && b.timing;
	if (b&&b.loadEventEnd > 0) { clearInterval(loadEventEndInterval); loadEventEnd.runFunction(); }
}, 1);
var funcList = [];
var loadEventEnd = {
	addFunction: function (inFunc) { funcList.push(inFunc); },
	runFunction: function () {
		for (index = 0; index < funcList.length; index++)
			funcList[index].call();
		funcList = [];
	}
}
/*loadEventEnd dedector*/