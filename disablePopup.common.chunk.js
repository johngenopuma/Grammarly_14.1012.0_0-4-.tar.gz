(self.webpackChunk = self.webpackChunk || []).push([
    [822], {
        86330: (e, t, s) => {
            s.r(t), s.d(t, {
                DisablePopup: () => i
            });
            var l = s(5872),
                a = s(7417),
                n = s(88326),
                r = s(27378),
                c = s(61658);
            class i extends r.Component {
                constructor() {
                    super(...arguments), this.cancel = () => this.props.remove()
                }
                render() {
                    return r.createElement("div", {
                        className: (0, l.cs)(c.gButtonPopup, c.disable, {
                            [c.gdocs]: this.props.gdocsView
                        }, this.props.isFlipped && c.flipped)
                    }, r.createElement("p", {
                        className: c.text
                    }, "Disable Grammarly ", r.createElement("br", null), " on ", r.createElement("span", {
                        className: c.bold
                    }, this.props.domain), "?"), this.props.gdocsView ? r.createElement((() => r.createElement(r.Fragment, null, r.createElement(a.z, {
                        cls: "disable",
                        styles: {
                            width: 208
                        },
                        text: "yes, disable",
                        onClick: () => this.props.disableSite()
                    }), r.createElement(n.M, {
                        clickHandler: () => this.cancel()
                    }, r.createElement("button", {
                        className: c.link
                    }, "no, keep it working")))), null) : r.createElement((() => r.createElement(r.Fragment, null, r.createElement(a.z, {
                        cls: "disable",
                        styles: {
                            width: 208
                        },
                        text: "Disable until next visit",
                        onClick: () => this.props.disableOnTab()
                    }), r.createElement(a.z, {
                        cls: "disable",
                        styles: {
                            width: 208
                        },
                        text: "Disable Forever",
                        onClick: () => this.props.disableSite()
                    }), r.createElement(n.M, {
                        clickHandler: () => this.cancel()
                    }, r.createElement("button", {
                        className: c.link
                    }, "keep it working")))), null), r.createElement(n.M, {
                        clickHandler: () => this.cancel()
                    }, r.createElement("button", {
                        className: c.close
                    })))
                }
            }
        },
        7417: (e, t, s) => {
            s.d(t, {
                z: () => i
            });
            var l = s(5872),
                a = s(88326),
                n = s(27378),
                r = s(61007);
            s(54817);
            const c = ({
                className: e
            }) => n.createElement("div", {
                className: `gr_-spinner ${e}`
            }, n.createElement("div", {
                className: "gr_-bounce1"
            }), n.createElement("div", {
                className: "gr_-bounce2"
            }), n.createElement("div", {
                className: "gr_-bounce3"
            }));
            class i extends n.Component {
                constructor() {
                    super(...arguments), this.onClick = e => {
                        e.preventDefault(), this.props.loading || this.props.onClick && this.props.onClick(e)
                    }
                }
                render() {
                    const {
                        loading: e,
                        cls: t
                    } = this.props, s = e ? "" : this.props.text, i = this.props.styles || {
                        width: 290
                    }, o = (0, l.cs)({
                        [r.buttonContainer]: !0,
                        [r[t]]: void 0 !== t,
                        [r.loading]: e
                    });
                    return n.createElement("div", {
                        className: o,
                        style: i
                    }, e && n.createElement(c, {
                        className: r.buttonSpinner
                    }), n.createElement(a.M, {
                        clickHandler: this.onClick,
                        dataGrammarlyPart: this.props.dataGrammarlyPart
                    }, n.createElement("button", {
                        type: "button",
                        style: i,
                        className: r.button
                    }, s)))
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
