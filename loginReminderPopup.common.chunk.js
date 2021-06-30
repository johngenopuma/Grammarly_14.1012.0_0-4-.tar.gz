(self.webpackChunk = self.webpackChunk || []).push([
    [600], {
        53874: (e, n, r) => {
            r.d(n, {
                o: () => l
            });
            var t = r(29511),
                i = r(27378);
            const s = async () => {
                var e;
                return null === (e = await (0, t.O)().bgRpc.api.checkAuthPermissions()) || void 0 === e || e
            }, o = async () => {
                var e;
                return null === (e = await (0, t.O)().bgRpc.api.requestAuthPermissions()) || void 0 === e || e
            };

            function l({
                checkPermissions: e = s,
                requestPermissions: n = o
            } = {}) {
                return function({
                    checkPermissions: e,
                    requestPermissions: n
                }) {
                    const [r, t] = (0, i.useState)(), s = Boolean(r), [o, l] = (0, i.useState)(!1);
                    return {
                        needPermissions: s,
                        requestingPermissions: o,
                        bindSignIn: n => () => {
                            s || o || e().then((e => {
                                e ? (t(void 0), n()) : t((e => n))
                            }))
                        },
                        onRequestPermissions: () => {
                            o || (l(!0), n().then((e => {
                                l(!1), e && (t(void 0), null == r || r())
                            })))
                        }
                    }
                }({
                    checkPermissions: e,
                    requestPermissions: n
                })
            }
        },
        1371: (e, n, r) => {
            r.r(n), r.d(n, {
                LoginReminderPopup: () => d,
                LoginReminderPopupView: () => p
            });
            var t = r(5872),
                i = r(88326),
                s = r(62111),
                o = r(27378),
                l = r(19106),
                a = r(53874),
                m = r(24606),
                c = r(61658);
            const u = o.createElement(o.Fragment, null, o.createElement("h1", null, "Looks like you got signed out!"), o.createElement("p", null, "In order to continue receiving your personalized Grammarly suggestions, please sign back in.")),
                g = o.createElement(o.Fragment, null, o.createElement("h1", null, "You’re missing out on your Grammarly Premium features."), o.createElement("h2", null, "Sign back in to receive"), o.createElement("ul", null, o.createElement("li", null, "Advanced grammar checks"), o.createElement("li", null, "Vocabulary enhancements"))),
                d = ({
                    openSignInDialogFromLoginReminder: e,
                    ...n
                }) => {
                    o.useEffect((() => {
                        l.J.loginReminderPopupShow(), (0, s.T)().loginReminderPopupShow()
                    }), []);
                    const {
                        bindSignIn: r,
                        ...t
                    } = (0, a.o)(), i = r(e);
                    return o.createElement(p, Object.assign({}, t, {
                        onSignIn: i
                    }, n))
                },
                p = ({
                    isFlipped: e,
                    reminderType: n,
                    remove: r,
                    disableLoginReminder: s,
                    closeLoginReminder: l,
                    onSignIn: a,
                    needPermissions: d,
                    requestingPermissions: p,
                    onRequestPermissions: E
                }) => {
                    const k = (0, t.cs)(c.gButtonPopup, c.loginReminder, d && c.permission, c[n], e && c.isFlipped, e && c.flipped);
                    return o.createElement("div", {
                        className: k
                    }, o.createElement("div", {
                        className: (0, t.cs)(c.popupFooter, e && c.isFlipped)
                    }, "▲"), o.createElement(i.M, {
                        clickHandler: () => {
                            l(), r()
                        }
                    }, o.createElement("button", {
                        className: c.close
                    })), d ? o.createElement(o.Fragment, null, o.createElement("h1", null, "Chrome requires your permission to let Grammarly sign you in"), o.createElement("p", null, "Please follow your browser′s prompts to allow Grammarly to read grammarly.com site data."), o.createElement("div", null, o.createElement(m.z, {
                        kind: "success",
                        onClick: E,
                        containerClassName: c.mainButton
                    }, "Allow ", o.createElement(m.g, null, "and continue to sign in"))), o.createElement("footer", null, p ? o.createElement(o.Fragment, null, "We are requesting your browser to grant permission.") : o.createElement(o.Fragment, null, "Next, your browser will ask you to grant permission."))) : o.createElement(o.Fragment, null, "free" === n ? u : g, o.createElement(m.z, {
                        kind: "success",
                        onClick: a,
                        containerClassName: c.mainButton
                    }, "Sign back in"), o.createElement(m.z, {
                        kind: "link",
                        onClick: s,
                        containerClassName: c.secondaryButton
                    }, "Don’t show this again")))
                }
        }
    }
]);
