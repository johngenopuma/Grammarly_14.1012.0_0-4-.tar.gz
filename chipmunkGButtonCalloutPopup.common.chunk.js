(self.webpackChunk = self.webpackChunk || []).push([
    [778], {
        20882: (e, s, t) => {
            t.r(s), t.d(s, {
                ChipmunkGButtonCalloutPopup: () => r
            });
            var a = t(61658),
                n = t(5872),
                i = t(27378),
                c = t(19106),
                l = t(32713);
            class m extends i.Component {
                constructor() {
                    super(...arguments), this.state = {
                        acknowledgementDone: !1,
                        isAcknowledging: !1
                    }
                }
                async componentDidMount() {
                    !this.state || this.state.isAcknowledging || this.state.acknowledgementDone || (this.setState({
                        isAcknowledging: !0
                    }), await this.acknowledgeMessage(), this.setState({
                        acknowledgementDone: !0
                    }))
                }
                async acknowledgeMessage() {
                    await l.Z.acknowledgeMessage(this.messageId), c.J.chipmunkMessageDisplayed(this.messageId)
                }
                onSoftDismiss() {
                    this.props.softDismiss(), c.J.chipmunkMessageSoftDismissed(this.messageId)
                }
                onHardDismiss() {
                    this.props.hardDismiss(this.messageId), c.J.chipmunkMessageHardDismissed(this.messageId)
                }
                onCTAClick() {
                    c.J.chipmunkMessageCTAClick(this.messageId)
                }
                get message() {
                    return this.props.messages[0].message
                }
                get messageId() {
                    return this.props.messages[0].messageId
                }
            }
            var o = t(88326);
            class r extends m {
                render() {
                    const e = this.message;
                    return i.createElement("div", {
                        className: (0, n.cs)(a.gButtonPopup, a.gdocsBeta, a.chipmunkGButtonCalloutPopup)
                    }, i.createElement(o.M, {
                        clickHandler: () => this.onSoftDismiss()
                    }, i.createElement("button", {
                        className: a.close
                    })), i.createElement("h4", {
                        className: a.title
                    }, e.title), i.createElement("p", {
                        className: a.text
                    }, e.body), i.createElement("div", {
                        className: a.buttonContainer
                    }, i.createElement(o.M, {
                        className: a.primaryButtonContainer,
                        clickHandler: () => this.onCTAClick()
                    }, i.createElement("a", {
                        className: a.primaryButton,
                        href: e.ctaUrl,
                        target: "_blank"
                    }, i.createElement("label", null, e.ctaText))), e.hardDismissalText ? i.createElement(o.M, {
                        className: a.secondaryButtonContainer,
                        clickHandler: () => this.onHardDismiss()
                    }, i.createElement("button", {
                        className: a.hardDismiss
                    }, e.hardDismissalText)) : e.softDismissalText ? i.createElement(o.M, {
                        className: a.secondaryButtonContainer,
                        clickHandler: () => this.onSoftDismiss()
                    }, i.createElement("button", {
                        className: a.softDismiss
                    }, e.softDismissalText)) : i.createElement("div", {
                        className: a.secondaryButtonContainer
                    })), i.createElement("div", {
                        className: (0, n.cs)(a.calloutArrow)
                    }, "▲"))
                }
            }
        }
    }
]);
