(self.webpackChunk = self.webpackChunk || []).push([
    [64], {
        95851: (e, t, a) => {
            a.r(t), a.d(t, {
                DunningMessagePopup: () => o
            });
            var n = a(27378),
                l = a(29187);
            const o = ({
                funnel: e,
                updatePayment: t,
                close: a
            }) => n.createElement(l.l, {
                onClose: a,
                onCtaClick: t,
                title: `Don’t lose your ${e} features`,
                body: `Please update your billing information to avoid losing access to ${e} features.`,
                ctaText: "Update payment information",
                dataGrammarlyPart: "btnDunningMessageClose"
            })
        },
        29187: (e, t, a) => {
            a.d(t, {
                l: () => c
            });
            var n = a(27378),
                l = a(24606),
                o = a(12187),
                s = a(61658);
            const c = ({
                title: e,
                body: t,
                ctaText: a,
                closeText: c = "Later",
                dataGrammarlyPart: r,
                onCtaClick: i,
                onClose: m
            }) => n.createElement("section", Object.assign({}, (0, o.Sh)(s.gButtonPopup, s.warningPopup)), n.createElement("button", Object.assign({}, (0, o.Sh)(s.btn, s.close), {
                onClick: m,
                "data-grammarly-part": r
            })), n.createElement("div", {
                className: s.warning
            }), n.createElement("section", null, e && n.createElement("div", {
                className: s.title
            }, e), t && n.createElement("div", {
                className: s.text
            }, t), n.createElement("section", {
                className: s.ctaBtnGroup
            }, n.createElement(l.z, {
                kind: "primary",
                onClick: i,
                containerClassName: s.ctaButton
            }, a), n.createElement(l.z, {
                kind: "link",
                onClick: m,
                containerClassName: s.later
            }, c))))
        }
    }
]);
