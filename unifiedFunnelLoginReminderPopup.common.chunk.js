(self.webpackChunk = self.webpackChunk || []).push([
    [530], {
        53874: (e, n, t) => {
            t.d(n, {
                o: () => s
            });
            var i = t(29511),
                o = t(27378);
            const l = async () => {
                var e;
                return null === (e = await (0, i.O)().bgRpc.api.checkAuthPermissions()) || void 0 === e || e
            }, r = async () => {
                var e;
                return null === (e = await (0, i.O)().bgRpc.api.requestAuthPermissions()) || void 0 === e || e
            };

            function s({
                checkPermissions: e = l,
                requestPermissions: n = r
            } = {}) {
                return function({
                    checkPermissions: e,
                    requestPermissions: n
                }) {
                    const [t, i] = (0, o.useState)(), l = Boolean(t), [r, s] = (0, o.useState)(!1);
                    return {
                        needPermissions: l,
                        requestingPermissions: r,
                        bindSignIn: n => () => {
                            l || r || e().then((e => {
                                e ? (i(void 0), n()) : i((e => n))
                            }))
                        },
                        onRequestPermissions: () => {
                            r || (s(!0), n().then((e => {
                                s(!1), e && (i(void 0), null == t || t())
                            })))
                        }
                    }
                }({
                    checkPermissions: e,
                    requestPermissions: n
                })
            }
        },
        27990: (e, n, t) => {
            t.r(n), t.d(n, {
                UnifiedFunnelLoginReminderPopup: () => m,
                UnifiedFunnelLoginReminderPopupView: () => p
            });
            var i = t(5872),
                o = t(88326),
                l = t(62111),
                r = t(27378),
                s = t(19106),
                a = t(24606),
                u = t(53874),
                c = t(90055);
            const m = ({
                    continueWithFacebook: e,
                    continueWithEmail: n,
                    continueWithGoogle: t,
                    openSigninPage: i,
                    ...o
                }) => {
                    r.useEffect((() => {
                        s.J.loginReminderPopupShow(), (0, l.T)().loginReminderPopupShow()
                    }), []);
                    const {
                        bindSignIn: a,
                        ...c
                    } = (0, u.o)(), m = {
                        onSignIn: a(i),
                        onContinueWithFacebook: a(e),
                        onContinueWithGoogle: a(t),
                        onContinueWithEmail: a(n)
                    };
                    return r.createElement(p, Object.assign({}, c, m, o))
                },
                p = ({
                    isFlipped: e,
                    needPermissions: n,
                    requestingPermissions: t,
                    onRequestPermissions: l,
                    remove: s,
                    onContinueWithEmail: u,
                    onSignIn: m
                }) => r.createElement("div", {
                    className: (0, i.cs)(c.unifiedFunnel, e && c.isFlipped, e && c.flipped)
                }, r.createElement(o.M, {
                    clickHandler: s
                }, r.createElement("button", {
                    className: c.close
                })), r.createElement("div", {
                    className: (0, i.cs)(c.popupFooter, e && c.isFlipped)
                }, "▲"), n ? r.createElement(r.Fragment, null, r.createElement("h1", null, "Chrome requires your permission to let Grammarly sign you in"), r.createElement("p", null, "Please follow your browser′s prompts to  allow Grammarly to  read grammarly.com site data."), r.createElement("div", null, r.createElement(a.z, {
                    kind: "success",
                    onClick: l,
                    containerClassName: c.mainButton
                }, "Allow ", r.createElement(a.g, null, "and continue to sign in"))), r.createElement("p", {
                    className: c.footer
                }, t ? r.createElement(r.Fragment, null, "We are requesting your browser to grant permission.") : r.createElement(r.Fragment, null, "Next, your browser will ask you to grant permission."))) : r.createElement(r.Fragment, null, r.createElement("h1", null, "You’re missing out on key Grammarly features!"), r.createElement("h2", null, "Sign up to:"), r.createElement("ul", null, r.createElement("li", null, "Get Grammarly for Google Docs Beta"), r.createElement("li", null, "Toggle Grammarly for any website"), r.createElement("li", null, "Start your personalized dictionary")), r.createElement(a.z, {
                    kind: "success",
                    onClick: u
                }, "Sign up"), r.createElement("footer", {
                    className: c.login
                }, "Already have an account? ", r.createElement(o.M, {
                    clickHandler: m
                }, r.createElement("span", {
                    className: c.link
                }, "Log in")))))
        },
        90055: e => {
            e.exports = {
                unifiedFunnel: "_37tnf",
                showWrapper: "_6DZ2i",
                flipped: "fgZks",
                button: "_1SYtG",
                login: "_39IYt",
                link: "_1Ev2K",
                popupFooter: "_1oFOe",
                isFlipped: "_2pXPb",
                close: "_2X7Gd",
                auth_button: "QBmGx"
            }
        }
    }
]);
