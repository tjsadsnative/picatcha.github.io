!function (t, e, n, s, a)
{
    function o(t, e)
    {
        try
        {
            var n = (new Date).getTime().toString(),
                s = Math.floor(65536 * (1 + Math.random())).toString(),
                a = t.createElement("img");
            a.src = "https://s3.amazonaws.com/ds-dd/data/data.gif?er=" + e + "&ts=" + n + "&_=" + s,
                a.style.position = "absolute",
                a.style.top = "-100px",
                a.style.left = "-100px",
                a.style.width = "1px",
                a.style.height = "1px",
                t.getElementsByTagName("body")[0].appendChild(a)
        } catch (o)
        {
        }
    }

    t[s] = t[s] || {}, t[s][a] = t[s][a] || [];
    var i = "script",
        d = e.createElement(i);
    d.src = n,
        d.async = 1;
    var r = e.getElementsByTagName(i)[0];
    r.parentNode.insertBefore(d, r),
        function (t)
        {
            window.setTimeout(
                function ()
                {
                    ("undefined" == typeof window.AMP || "undefined" == typeof window.AMP.DS) && o(t, -1)
                }, 3e3)
        }(e)
}(window, document, "https://s3.amazonaws.com/ds-sys/slickdeals/js/ds-min.js", "AMP", "DSQ");