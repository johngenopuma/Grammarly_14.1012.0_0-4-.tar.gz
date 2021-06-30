(self.webpackChunk = self.webpackChunk || []).push([
    [371], {
        97751: (e, t, s) => {
            s.r(t), s.d(t, {
                BusinessUphookPopup: () => c
            });
            var l = s(5872),
                a = s(88326),
                n = s(27378),
                o = s(45801),
                i = s(39047),
                r = s(19232);
            const c = e => {
                const {
                    domainCategory: t,
                    isFlipped: s,
                    popupType: c,
                    showDismissPermanently: u
                } = e, p = n.useMemo((() => (0, i.cO)(t)), [t]), m = n.useMemo((() => (0, i.aC)(t)), [t]), _ = (0, l.cs)(r.gButtonPopup, r.businessUphookPopup, s && r.isFlipped, c === o.L.statistics && r.headerGraphic), d = () => p ? n.createElement(n.Fragment, null, n.createElement("div", {
                    className: (0, l.cs)(r.text, r.listTitle)
                }, p.title), n.createElement("ul", {
                    className: r.bulletedList
                }, p.list.map(((e, t) => n.createElement("li", {
                    key: t,
                    className: (0, l.cs)(r.text, r.item)
                }, e))))) : null, E = () => m ? n.createElement(n.Fragment, null, n.createElement("span", {
                    className: (0, l.cs)(r.text, r.textBold)
                }, m.bolded), n.createElement("span", null, " "), n.createElement("span", {
                    className: r.text
                }, m.normal)) : null, b = () => {
                    e.closeBusinessPopup(), e.remove()
                };
                return n.createElement("div", {
                    className: _
                }, n.createElement("div", {
                    className: (0, l.cs)(r.swoosh, s && r.isFlipped)
                }), n.createElement("div", {
                    className: r.title
                }, "Grammarly for your team"), n.createElement((() => c === o.L.bulletedList ? n.createElement(d, null) : n.createElement(E, null)), null), n.createElement(a.M, {
                    clickHandler: () => {
                        e.onBusinessUphookPopupFollowCta(t, c)
                    }
                }, n.createElement("button", {
                    className: r.blueCtaButton
                }, "Explore Grammarly Business")), n.createElement(a.M, {
                    clickHandler: b
                }, n.createElement("button", {
                    className: (0, l.cs)(r.secondary)
                }, u ? "Don't show this again" : "Dismiss")), n.createElement(a.M, {
                    clickHandler: b
                }, n.createElement("button", {
                    className: r.close
                })), n.createElement("div", {
                    className: (0, l.cs)(r.popupFooter, s && r.isFlipped)
                }, "▲"))
            }
        },
        19232: e => {
            e.exports = {
                gButtonPopup: "_1lTE2",
                newDataControl: "_1gsZQ",
                showWrapper: "_2ei_O",
                flipped: "_3uYTr",
                title: "gainz",
                icon: "Pivkw",
                button: "xY0X9",
                buttonText: "_2U8eo",
                popupFooter: "_14I1c",
                isFlipped: "_2AdW6",
                settings: "_2vyty",
                text: "_2gHfL",
                bold: "_3Aiys",
                link: "_3Egqd",
                secondary: "_3Ax2F",
                firstTime: "_1iibO",
                close: "_4EKnF",
                disable: "_1i4Lv",
                gdocs: "_2HXiW",
                gdocsBeta: "_1gpKJ",
                header: "_39sF8",
                headerUnavailable: "MioHQ",
                cardsIcon: "_1X1gn",
                bubbleArrow: "_2h7sR",
                unavailablePopup: "_2bpEL",
                loginReminder: "_2SiRG",
                permission: "_1Y1Cu",
                secondaryButton: "_3gyhh",
                onboarding: "_3X1pb",
                chipmunkGButtonCalloutPopup: "B67S_",
                btn: "_2-37m",
                buttonContainer: "wHkZL",
                primaryButtonContainer: "s5m4l",
                primaryButton: "_2UfJe",
                secondaryButtonContainer: "_2QZzm",
                hardDismiss: "_32ee7",
                softDismiss: "_2RqCN",
                calloutArrow: "_1Mr5Z",
                warningPopup: "_1cce2",
                warning: "_1M-B9",
                ctaBtnGroup: "_3E2Dj",
                ctaButton: "_1Z4N2",
                later: "_2ECwI",
                managedSSOControl: "_3NJaO",
                illustration: "_1nEBr",
                signInWithSSO: "_1fEnz",
                signInWithSSO2: "_1SV_T",
                headerGraphic: "_3iPE7",
                businessUphookPopup: "bWMuL",
                swoosh: "_2oV7q",
                blueCtaButton: "_1hLI1",
                listTitle: "_2vuCQ",
                bulletedList: "FFlg5",
                item: "_2RFIZ",
                textBold: "_1q9M_",
                subtitle: "_1fMNf"
            }
        }
    }
]);
