(self.webpackChunk = self.webpackChunk || []).push([
    [485], {
        70607: (e, a, o) => {
            o.r(a), o.d(a, {
                ClaimedUserPopup: () => r
            });
            var t = o(27378),
                c = o(67166),
                n = o(24606),
                i = o(40412);
            const r = ({
                onClose: e,
                onClickMoreInfo: a
            }) => t.createElement(c.X, {
                onClose: e,
                mainContent: t.createElement("div", {
                    "data-grammarly-part": "claimed-user-popup-main-content",
                    className: i.claimedUserPopup
                }, t.createElement("div", {
                    className: i.claimedUserPopupIcon
                }), t.createElement("div", {
                    className: i.claimedUserPopupTitle
                }, "Action required!"), t.createElement("div", {
                    className: i.claimedUserPopupText
                }, "Your organization wants to add you to their team account. You'll need to either join the team account or change the email you use for this account."), t.createElement(n.z, {
                    onClick: a,
                    kind: "success",
                    rounded: !0
                }, "More info")),
                size: "medium"
            })
        },
        40412: e => {
            e.exports = {
                claimedUserPopup: "BHPcZ",
                claimedUserPopupIcon: "_3PVR9",
                claimedUserPopupTitle: "uDbdk",
                claimedUserPopupText: "_3M3kr",
                spin: "_3-D0u"
            }
        }
    }
]);
