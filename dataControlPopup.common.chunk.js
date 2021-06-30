(self.webpackChunk = self.webpackChunk || []).push([
    [254], {
        61055: (e, t, a) => {
            a.r(t), a.d(t, {
                DataControlPopupDefault: () => r,
                DataControlPopup: () => o
            });
            var c = a(5872),
                n = a(88326),
                l = a(27378),
                p = a(29511),
                s = a(61658);
            const r = e => l.createElement(l.Fragment, null, l.createElement("div", {
                className: s.icon
            }), l.createElement("div", {
                className: s.title
            }, "Grammarly isn’t active yet!"), l.createElement(n.M, {
                clickHandler: e.openAcceptPage
            }, l.createElement("button", {
                className: s.button
            }, l.createElement("span", {
                className: s.buttonText
            }, "Activate Grammarly"))));
            class o extends l.Component {
                constructor() {
                    super(...arguments), this.openAcceptPage = () => {
                        (0, p.O)().bgRpc.api.openDataControl()
                    }
                }
                render() {
                    return l.createElement("div", {
                        className: (0, c.cs)(s.gButtonPopup, s.newDataControl, this.props.isFlipped && s.flipped)
                    }, l.createElement(n.M, {
                        clickHandler: this.props.remove
                    }, l.createElement("button", {
                        className: s.close
                    })), l.createElement(r, {
                        openAcceptPage: this.openAcceptPage
                    }), l.createElement("div", {
                        className: (0, c.cs)(s.popupFooter, this.props.isFlipped && s.isFlipped)
                    }, "▲"))
                }
            }
        }
    }
]);
