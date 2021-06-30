(self.webpackChunk = self.webpackChunk || []).push([
    [749], {
        28288: (e, t, n) => {
            n.d(t, {
                m: () => r,
                _: () => l
            });
            var a = n(27378),
                o = n(92783),
                s = n(12187),
                i = n(2112);
            const r = ({
                    className: e,
                    text: t,
                    secondary: n = !1
                }) => a.createElement("span", Object.assign({}, (0, s.Sh)(e, i.labelBeta, n && i.labelBetaSecondary)), t || "BETA"),
                l = ({
                    text: e
                }) => a.createElement("span", {
                    className: i.label
                }, "GRAMMARLY TONE Detector ", (0, o.G6)() ? null : a.createElement(r, {
                    className: i.labelBetaWrapper,
                    text: e
                }))
        },
        96659: (e, t, n) => {
            n.r(t), n.d(t, {
                EmogeniePopup: () => c
            });
            var a = n(27378),
                o = n(1620),
                s = n(5739),
                i = n(12187),
                r = n(28288),
                l = n(2112),
                m = n(42373);
            const c = e => a.createElement(s.F.div, Object.assign({}, (0, i.Sh)(l.wrapper, e.flipped && l.flipped, e.state.view("settings", "showPopup").view((e => e ? l.wrapperShow : l.wrapperHide)))), e.state.view((({
                settings: t,
                report: n,
                emotionsPoll: s,
                isBrandTonesEnabled: i
            }) => n && Array.isArray(n.emotions) && !n.hidden && a.createElement("div", {
                className: l.popup,
                onMouseLeave: () => !t.showClose && e.actions.hidePopup(),
                "data-grammarly-part": "emogenieReportPopup"
            }, t.showClose && a.createElement("div", {
                className: l.closeButton
            }, a.createElement(o.P, {
                onClick: () => e.actions.hidePopup()
            })), !t.hideWelcomeNotification && a.createElement("div", {
                className: l.popupNotification
            }, a.createElement("div", null, a.createElement(r._, {
                text: "NEW"
            }), a.createElement("span", {
                className: l.popupSubTitle
            }, "How do you want to sound?", a.createElement("br", null), "Analyze your tone before you hit send!"))), a.createElement("div", {
                className: l.popupContent
            }, a.createElement(m.G, {
                showBanner: t.hideWelcomeNotification,
                report: n,
                actions: e.actions,
                emotionsPoll: s,
                settings: t,
                isBrandTonesEnabled: i
            }))))))
        },
        42373: (e, t, n) => {
            n.d(t, {
                G: () => x
            });
            var a = n(27378),
                o = n(80900),
                s = n(76974),
                i = n(16118),
                r = n(77176),
                l = n(93508),
                m = n(66310),
                c = n(17343),
                d = n(20855),
                p = n(24394),
                u = n(32275),
                b = n(53112);
            const E = ({
                fill: e = b.Z.green50
            }) => a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                height: "24",
                width: "24"
            }, a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 20a8 8 0 100-16 8 8 0 000 16z",
                fill: e
            }), a.createElement("path", {
                d: "M9.03 12.47a.75.75 0 10-1.06 1.06zM11 15.5l-.53.53.53.53.53-.53zm6.03-4.97a.75.75 0 10-1.06-1.06zm-9.06 3l2.5 2.5 1.06-1.06-2.5-2.5zm3.56 2.5l5.5-5.5-1.06-1.06-5.5 5.5z",
                fill: "#fff"
            }));
            var h = n(79921),
                v = n(12187),
                f = n(5739),
                w = n(79461),
                N = n(2112);
            const g = ({
                emotion: e,
                isBrandTonesEnabled: t,
                actions: n,
                emotionValue: b,
                index: g
            }) => {
                const T = (e, t) => {
                        n.filterEmotionByName(e), n.dislikeEmotion(e, t)
                    },
                    y = a.createElement(d.u, {
                        message: `${e.prevalence} intensity`,
                        showDelay: 300
                    }, a.createElement("div", {
                        className: N.emotionIntensity
                    }, [0, 1, 2, 3, 4].map((t => {
                        const n = t / 5 <= e.confidence;
                        return a.createElement("div", Object.assign({
                            key: `${e.name}-intensity-${t}`
                        }, (0, v.Sh)(N.emotionIntensityItem, n && N.emotionIntensityActive)))
                    })))),
                    k = e.brandToneLabel ? a.createElement("div", {
                        className: N.emotionBrandInfoWrapper
                    }, a.createElement("span", {
                        className: N[`brand-badge-${e.brandToneLabel}`]
                    }, e.brandToneLabel, "-BRAND")) : a.createElement("span", {
                        className: N.emotionBrandIntensityWrapper
                    }, " ", y, " "),
                    x = t ? t => {
                        const a = e.brandToneLabel || "neutral";
                        t === p.x.YES ? n.likeEmotion(e.name, a) : T(e.name, a)
                    } : t => {
                        if (t === p.x.YES) n.likeEmotion(e.name);
                        else if (t === p.x.OFFENSIVE) n.reportEmotion(e.name, "EMOTION_OFFENSIVE");
                        else if (t === p.x.INCORRECT) {
                            const t = !0;
                            n.reportEmotion(e.name, "EMOTION_INCORRECT", t)
                        } else T(e.name)
                    },
                    L = a.createElement(a.Fragment, null, k, a.createElement(p.A, {
                        onDropdownPress: t ? void 0 : () => {
                            n.reportEmotionWithoutTracking(e.name, "EMOTION_DISLIKE")
                        },
                        voteNoWithDropdown: !t,
                        ariaLabel: `Does the emotion "${e.name}" seem correct?`,
                        voteYesAriaLabel: "This seems right",
                        voteNoAriaLabel: "This seems wrong",
                        voteYesTooltipMessage: "This seems right",
                        voteNoTooltipMessage: "This seems wrong",
                        onVote: x,
                        irrevocable: !0,
                        voteValue: b === w.b.dislike || b === w.b.offensive ? p.x.NO : b === w.b.like ? p.x.YES : void 0,
                        useShadowDom: !1
                    })),
                    S = e => t ? e === w.b.dislike : e === w.b.incorrect || e === w.b.offensive,
                    O = (0, u.K)(b).pipe((0, i.G)(), (0, r.U)((([e, t]) => e === w.b.none && S(t))), (0, l.O)(!1), (0, m.w)((e => e ? (0, o.H)(3e3).pipe((0, c.h)(!1), (0, l.O)(!0)) : (0, s.of)(!1)))),
                    I = a.createElement("div", {
                        className: N.feedbackContainer
                    }, a.createElement("div", {
                        className: N.feedbackIcon
                    }, a.createElement(E, null)), a.createElement("div", {
                        className: N.feedbackText
                    }, "Your feedback helps us improve our accuracy."));
                return a.createElement(f.F.div, null, O.pipe((0, r.U)((e => e ? I : null))), S(b) ? null : a.createElement("div", {
                    role: `emotion-${g}-${e.name}`
                }, a.createElement("div", {
                    className: N.emotion
                }, a.createElement("div", {
                    className: N.emotionEmojiAndName
                }, a.createElement(h.dy, {
                    size: "medium",
                    unicodeHexArray: [e.emojiId],
                    unicodeLiteral: e.emoji,
                    className: N.emotionEmoji
                }), a.createElement("span", {
                    className: N.emotionName
                }, e.name)), L), t ? a.createElement("div", {
                    className: N.description
                }, a.createElement("div", {
                    className: N.descriptionText
                }, e.brandToneDescription)) : null))
            };
            var T = n(88326);
            const y = ({
                value: e
            }) => a.createElement("div", Object.assign({}, (0, v.Sh)(N.checkbox, e && N.checkboxActive), {
                "data-grammarly-part": "showEmogenieCheckbox"
            }));
            var k = n(28288);
            const x = ({
                report: e,
                actions: t,
                emotionsPoll: n,
                showBanner: o,
                settings: s,
                isBrandTonesEnabled: i
            }) => {
                let r, l;
                switch (a.useEffect((() => {
                        t.trackReportShow(i)
                    }), []), !0) {
                    case e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel && e.confidence > .75)):
                        r = "Your tone sounds off";
                        break;
                    case e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel)):
                        r = "Something sounds slightly off...";
                        break;
                    case e.emotions.some((e => e.brandToneLabel && "on" === e.brandToneLabel)):
                        r = i ? "You're on-brand! Great job!" : "Your writing sounds clear and aligned. Great job!";
                        break;
                    default:
                        r = "Here’s how your text may sound to readers"
                }
                switch (!0) {
                    case i && e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel)):
                        l = a.createElement("div", {
                            className: N.brandOffSubtitle
                        }, "Consider revising your message to align with your brand.");
                        break;
                    case i && e.emotions.some((e => e.brandToneLabel && "on" === e.brandToneLabel)):
                        l = "Read about the tones below to learn more.";
                        break;
                    case i:
                        l = "Check your writing to see if the tone is what you had in mind.";
                        break;
                    default:
                        l = e.emotions.length > 1 ? "Which tones did we get right? Help us improve by letting us know." : "Did we get it right?"
                }
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: N.reportHeader
                }, o && a.createElement(k._, null), a.createElement("span", {
                    className: N.popupTitle
                }, r), a.createElement("span", {
                    className: N.popupSubTitle
                }, l)), a.createElement("div", null, e.emotions.map(((e, o) => a.createElement(g, {
                    actions: t,
                    key: e.name,
                    index: o,
                    emotion: e,
                    emotionValue: n[e.name] || w.b.none,
                    isBrandTonesEnabled: i
                })))), !!e.recommendation && a.createElement("span", Object.assign({}, (0, v.Sh)(N.popupText, N.popupRecommendation)), e.recommendation), !i && a.createElement(T.M, {
                    className: N.popupReportCheckbox,
                    clickHandler: () => t.setShowEmojiState(!s.showEmoji)
                }, a.createElement("span", {
                    className: N.checkboxWrapper
                }, a.createElement(y, {
                    value: s.showEmoji
                })), a.createElement("span", {
                    className: N.popupText
                }, "Always show emoji for detected tones")))
            }
        },
        16118: (e, t, n) => {
            n.d(t, {
                G: () => s
            });
            var a = n(59312),
                o = n(98036);

            function s() {
                return function(e) {
                    return e.lift(new i)
                }
            }
            var i = function() {
                    function e() {}
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new r(e))
                    }, e
                }(),
                r = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.hasPrev = !1, n
                    }
                    return a.__extends(t, e), t.prototype._next = function(e) {
                        var t;
                        this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
                    }, t
                }(o.L)
        }
    }
]);
