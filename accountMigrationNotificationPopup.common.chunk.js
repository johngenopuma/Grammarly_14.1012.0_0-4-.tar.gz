(self.webpackChunk = self.webpackChunk || []).push([
    [332], {
        45299: (e, t, a) => {
            a.r(t), a.d(t, {
                AccountMigrationNotificationPopup: () => l
            });
            var n = a(27378),
                c = a(29187);
            const l = ({
                message: e,
                addPaymentInfo: t,
                close: a
            }) => n.createElement(c.l, {
                onClose: a,
                onCtaClick: t,
                title: "Action required: Update your subscription",
                body: e,
                ctaText: "Add Billing Information",
                dataGrammarlyPart: "btnAccountMigrationNotificationClose"
            })
        },
        29187: (e, t, a) => {
            a.d(t, {
                l: () => i
            });
            var n = a(27378),
                c = a(24606),
                l = a(12187),
                o = a(61658);
            const i = ({
                title: e,
                body: t,
                ctaText: a,
                closeText: i = "Later",
                dataGrammarlyPart: r,
                onCtaClick: s,
                onClose: m
            }) => n.createElement("section", Object.assign({}, (0, l.Sh)(o.gButtonPopup, o.warningPopup)), n.createElement("button", Object.assign({}, (0, l.Sh)(o.btn, o.close), {
                onClick: m,
                "data-grammarly-part": r
            })), n.createElement("div", {
                className: o.warning
            }), n.createElement("section", null, e && n.createElement("div", {
                className: o.title
            }, e), t && n.createElement("div", {
                className: o.text
            }, t), n.createElement("section", {
                className: o.ctaBtnGroup
            }, n.createElement(c.z, {
                kind: "primary",
                onClick: s,
                containerClassName: o.ctaButton
            }, a), n.createElement(c.z, {
                kind: "link",
                onClick: m,
                containerClassName: o.later
            }, i))))
        }
    }
]);
