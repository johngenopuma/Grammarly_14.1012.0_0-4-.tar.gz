! function(e, t) {
    if (self === self.top) {
        const n = t("Grammarly-gDocsCanvasFallbackInjected.js"),
            c = document.head || document.documentElement,
            a = document.createElement("link");
        a.href = n, a.rel = "preload", a.as = "script", a.onload = () => {
            a.remove()
        }, c.appendChild(a);
        const r = document.createElement("script");
        r.type = "text/javascript", r.async = !1, r.defer = !1, r.src = n, r.setAttribute("data-ext-id", e), r.onload = () => {
            r.remove()
        }, c.appendChild(r)
    }
}(chrome.runtime.id, (e => chrome.runtime.getURL(`src/js/${e}`)));
