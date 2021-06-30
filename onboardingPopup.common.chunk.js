(self.webpackChunk = self.webpackChunk || []).push([
    [26], {
        45702: (e, t, a) => {
            a.r(t), a.d(t, {
                OnboardingPopup: () => p
            });
            var n = a(5872),
                o = a(7417),
                r = a(88326),
                s = a(62111),
                l = a(27378),
                i = a(19106),
                c = a(61658);
            class p extends l.Component {
                constructor() {
                    super(...arguments), this.cancel = () => {
                        this.props.remove()
                    }
                }
                componentDidMount() {
                    i.J.onboardingPopupShow(), (0, s.T)().onboardingPopupShow()
                }
                render() {
                    return l.createElement("div", {
                        className: (0, n.cs)(c.gButtonPopup, c.onboarding, this.props.isFlipped && c.flipped)
                    }, l.createElement("p", {
                        className: c.title
                    }, "Grammarly is Now Active"), l.createElement("p", {
                        className: c.text
                    }, "Want to see how it works?"), l.createElement(o.z, {
                        dataGrammarlyPart: "btnTakeOnboardingTour",
                        cls: "onboarding",
                        styles: {
                            width: "180px"
                        },
                        text: "take a quick tour",
                        onClick: () => this.props.startOnboardingTour()
                    }), l.createElement(r.M, {
                        dataGrammarlyPart: "btnCancelOnboarding",
                        clickHandler: () => {
                            i.J.onboardingPopupCloseButtonClick("onboardingPopup"), (0, s.T)().onboardingPopupCancel(), this.cancel()
                        }
                    }, l.createElement("button", {
                        className: c.link
                    }, "No, thanks")), l.createElement("div", {
                        className: (0, n.cs)(c.popupFooter, this.props.isFlipped && c.isFlipped)
                    }, "▲"))
                }
            }
        },
        7417: (e, t, a) => {
            a.d(t, {
                z: () => i
            });
            var n = a(5872),
                o = a(88326),
                r = a(27378),
                s = a(61007);
            a(54817);
            const l = ({
                className: e
            }) => r.createElement("div", {
                className: `gr_-spinner ${e}`
            }, r.createElement("div", {
                className: "gr_-bounce1"
            }), r.createElement("div", {
                className: "gr_-bounce2"
            }), r.createElement("div", {
                className: "gr_-bounce3"
            }));
            class i extends r.Component {
                constructor() {
                    super(...arguments), this.onClick = e => {
                        e.preventDefault(), this.props.loading || this.props.onClick && this.props.onClick(e)
                    }
                }
                render() {
                    const {
                        loading: e,
                        cls: t
                    } = this.props, a = e ? "" : this.props.text, i = this.props.styles || {
                        width: 290
                    }, c = (0, n.cs)({
                        [s.buttonContainer]: !0,
                        [s[t]]: void 0 !== t,
                        [s.loading]: e
                    });
                    return r.createElement("div", {
                        className: c,
                        style: i
                    }, e && r.createElement(l, {
                        className: s.buttonSpinner
                    }), r.createElement(o.M, {
                        clickHandler: this.onClick,
                        dataGrammarlyPart: this.props.dataGrammarlyPart
                    }, r.createElement("button", {
                        type: "button",
                        style: i,
                        className: s.button
                    }, a)))
                }
            }
        },
        61007: e => {
            e.exports = {
                buttonContainer: "zh9NK",
                form: "_1Fp6z",
                buttonSpinner: "_2ox-M",
                button: "w4BE8",
                loading: "II5Au",
                onboarding: "_3f6zz",
                disable: "_26Laa"
            }
        },
        54817: () => {}
    }
]);
