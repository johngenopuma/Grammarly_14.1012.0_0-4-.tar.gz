(self.webpackChunk = self.webpackChunk || []).push([
    [931], {
        5381: (e, n, a) => {
            a.r(n), a.d(n, {
                AssistantOnboarding: () => d
            });
            var o = a(88326),
                i = a(27378),
                t = a(12187),
                l = a(84496);
            const d = ({
                onSeenAssistantOnboarding: e,
                onConfirm: n,
                isFlipped: a
            }) => i.createElement("div", Object.assign({}, (0, t.Sh)(l.onboardingPopup, a && l.flipped)), i.createElement("div", {
                className: l.onboardingLogo
            }, i.createElement("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none"
            }, i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 16C32 24.8362 24.8369 32 16 32C7.16383 32 0 24.8362 0 16C0 7.16313 7.16383 0 16 0C24.8369 0 32 7.16313 32 16Z",
                fill: "#15C39A"
            }), i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.0913 19.4546C18.1859 19.9785 18.6784 20.3374 19.2106 20.3374H20.8871L21.8589 20.2011C20.3041 22.4821 17.6043 23.5319 14.6526 23.0685C12.2499 22.6915 10.1859 21.0658 9.31491 18.7952C7.33786 13.6411 11.102 8.72003 16.0071 8.72003C18.5636 8.72003 20.805 10.2164 22.0906 12.0237C22.4321 12.5155 23.109 12.6957 23.6015 12.3541C24.069 12.0299 24.2053 11.4143 23.9243 10.9301C22.1462 8.15446 18.9511 6.37846 15.358 6.61916C10.6798 6.9329 6.89404 10.7611 6.62482 15.4421C6.31247 20.8891 10.6332 25.3364 16.0071 25.3364C18.83 25.3364 21.3573 24.1072 23.0791 22.1183L22.8753 23.2592V24.2901C22.8753 24.8216 23.2335 25.3148 23.7573 25.4094C24.4453 25.5332 25.0436 25.008 25.0436 24.343V18.1684H19.157C18.492 18.1684 17.9667 18.7673 18.0913 19.4546Z",
                fill: "white"
            }))), i.createElement("p", {
                className: l.onboardingText
            }, "View Grammarly's additional suggestions for this document."), i.createElement(o.M, {
                dataGrammarlyPart: "btnCancelOnboarding",
                clickHandler: () => {
                    e(), n()
                },
                className: l.onboardingConfirm
            }, "Got it"))
        },
        84496: e => {
            e.exports = {
                onboardingPopup: "_2aIAG",
                showWrapper: "_3cvFG",
                flipped: "_1PKCw",
                onboardingText: "_2o6EB",
                onboardingConfirm: "_1Bws-",
                onboardingLogo: "_3kuat"
            }
        }
    }
]);
