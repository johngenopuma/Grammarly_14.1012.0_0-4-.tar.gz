(self.webpackChunk = self.webpackChunk || []).push([
    [73], {
        7656: (e, r, t) => {
            t.r(r), t.d(r, {
                PremiumResurrectionPopup: () => l
            });
            var n = t(27378),
                a = t(1620),
                i = t(24606),
                c = t(22667),
                m = t(53112);
            const o = ({
                color: e = m.Z.neutral50,
                className: r = ""
            }) => n.createElement("svg", {
                className: r,
                style: {
                    height: "1em"
                },
                viewBox: "0 0 8 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, n.createElement("path", {
                d: "M2.16665 0.900146L0.874146 2.19265L5.07248 6.40015L0.874146 10.6076L2.16665 11.9001L7.66665 6.40015L2.16665 0.900146Z",
                fill: e
            }));
            var s = t(44192);
            const l = ({
                onClose: e,
                onMouseOver: r,
                previouslyPremium: t
            }) => {
                const [m, l] = n.useState(!1);
                return n.createElement("div", {
                    "data-grammarly-part": "premium-resurrection-card",
                    onMouseOverCapture: r
                }, n.createElement("div", {
                    className: s.card
                }, n.createElement("div", {
                    className: s.premiumResurrectionContainer
                }, n.createElement("div", {
                    className: s.close
                }, n.createElement(a.P, {
                    onClick: e
                })), m ? n.createElement("div", {
                    className: s.premiumResurrectionVideoContainer
                }, n.createElement("video", {
                    key: "active",
                    className: s.premiumResurrectionVideo,
                    preload: "",
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    width: "276",
                    height: "248"
                }, n.createElement("source", {
                    src: "https://d201kpdrh73vuz.cloudfront.net/resurrection/premium-extension-hires.mp4"
                })), n.createElement(i.z, {
                    kind: "link",
                    onClick: e
                }, n.createElement("a", {
                    href: "https://grammarly.com/plans",
                    target: "_blank",
                    rel: "noopener",
                    className: `${s.premiumResurrectionCTA} ${s.link}`
                }, t ? "Reactivate" : "Activate", " Premium Now", " ", n.createElement(o, {
                    color: "currentColor",
                    className: s.chevron
                })))) : n.createElement("div", {
                    className: s.premiumResurrectionCTAContainer
                }, n.createElement("video", {
                    key: "preload",
                    preload: "",
                    controls: !1,
                    autoPlay: !1,
                    loop: !1,
                    width: "0",
                    height: "0",
                    hidden: !0
                }, n.createElement("source", {
                    src: "https://d201kpdrh73vuz.cloudfront.net/resurrection/premium-extension-hires.mp4"
                })), n.createElement("div", null, n.createElement("div", {
                    className: s.premiumResurrectionHeading
                }, "Premium became smarter"), n.createElement(i.z, {
                    kind: "link",
                    onClick: () => l(!0)
                }, n.createElement("div", {
                    className: s.premiumResurrectionCTA
                }, "Take a quick look"))), n.createElement(c.K, {
                    size: 22,
                    className: s.icon
                })))))
            }
        },
        44192: e => {
            e.exports = {
                card: "_2VUqE",
                premiumResurrectionCTAContainer: "_2j3IA",
                icon: "_2x75u",
                premiumResurrectionContainer: "_17QrJ",
                close: "_1A3YE",
                premiumResurrectionCTA: "xnc1J",
                link: "Lg_8U",
                chevron: "_1-yiv",
                premiumResurrectionHeading: "_2YLPb",
                premiumResurrectionVideo: "BQpIe",
                premiumResurrectionVideoContainer: "_1NHai",
                appear: "_1mYsq"
            }
        }
    }
]);
