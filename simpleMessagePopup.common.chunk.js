(self.webpackChunk = self.webpackChunk || []).push([
    [378], {
        45447: (e, s, l) => {
            l.r(s), l.d(s, {
                SimpleMessagePopup: () => i
            });
            var a = l(27378),
                p = l(88326),
                t = l(57347);
            const i = ({
                title: e,
                text: s,
                onSimpleMessageClose: l,
                onNotificationClick: i
            }) => a.createElement("div", {
                className: t.simpleMessagePopup,
                onClick: i
            }, a.createElement("p", {
                className: t.simpleMessageTitle
            }, e), a.createElement("p", {
                className: t.simpleMessageText
            }, s), a.createElement(p.M, {
                className: t.simpleMessageCloseButton,
                clickHandler: l
            }))
        },
        57347: e => {
            e.exports = {
                simpleMessagePopup: "_1pPbY",
                showWrapper: "_44bxJ",
                flipped: "_3QAjP",
                simpleMessageText: "_3LkXL",
                simpleMessageTitle: "_2PNdr",
                simpleMessageCloseButton: "RbtMo"
            }
        }
    }
]);
