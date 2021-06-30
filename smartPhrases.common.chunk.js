(self.webpackChunk = self.webpackChunk || []).push([
    [547], {
        51897: (e, t, a) => {
            var r = a(25682),
                i = "chrome-extension://__MSG_@@extension_id__/",
                n = "moz-extension://__MSG_@@extension_id__/",
                s = self.GR_RESOURCE_ROOT || i,
                o = self.GR_RESOURCE_ROOT || n;
            e.exports = {
                __css: r.toString().replace(new RegExp(i, "g"), s).replace(new RegExp(n, "g"), o),
                ...r.locals
            }
        },
        98403: (e, t, a) => {
            a.d(t, {
                PU: () => I,
                wW: () => E,
                Ft: () => C,
                wX: () => F,
                gw: () => T,
                Dx: () => B,
                ab: () => O,
                GQ: () => R,
                RX: () => H,
                Hl: () => N,
                b2: () => w,
                jw: () => D,
                aI: () => M
            });
            var r = a(25656),
                i = a(38983),
                n = a(8125),
                s = a(5114),
                o = a(95195),
                l = a(22232),
                d = a(83078),
                c = a(40151),
                h = a(76974),
                u = a(13444),
                m = a(44586),
                p = a(77176),
                g = a(12126),
                f = a(93508),
                b = a(91224),
                _ = a(24209),
                v = a(17343),
                S = a(78674),
                x = a(28043),
                k = a(66310),
                P = a(8473),
                y = a(55935),
                A = a(14601),
                I = void 0;

            function E(e) {
                return function(t) {
                    return e.set(t)
                }
            }
            var w, C = function(e) {
                    return (0, n.RN)(e, c.E)
                },
                F = function(e) {
                    return (0, n.RN)(c.E, e)
                },
                T = function(e, t) {
                    return h.of(e).pipe(u.g(t))
                };

            function B(e) {
                return e instanceof m.y ? e : h.of(e)
            }

            function O(e, t) {
                return e instanceof m.y ? e.pipe(p.U(t)) : t(e)
            }

            function R(e) {
                return g.D(e().then((function(e) {
                    return s.some(o.right(e))
                })).catch((function(e) {
                    return s.some(o.left(e))
                }))).pipe(f.O(s.none))
            }

            function H(e) {
                return function(t, a) {
                    return a.pipe(b.K((function(a, r) {
                        return e.error(t + " exception", a), r
                    }))).subscribe()
                }
            }

            function N(e, t, a) {
                return void 0 === a && (a = !0), _.T(e.pipe(v.h(a)), e.pipe(S.b(t), v.h(!a))).pipe(x.x())
            }

            function D(e, t) {
                var a = function(t) {
                    return "function" == typeof e ? e(t) : t[e]
                };
                return t.view(a).view((function(e) {
                    return function(e, t) {
                        var a = t.get();
                        (0, l.kG)(e(a), "first value should satisfy predicate");
                        var r = i.h.create(a),
                            n = r.set.bind(r);
                        r.set = function(a) {
                            e(a) ? n(a) : s.closed || t.set(a)
                        };
                        var s = t.pipe(P.o(e), y.T(1)).subscribe(E(r)).add(void 0 !== t.set ? r.subscribe(E(t)) : A.w.EMPTY);
                        return r
                    }((function(t) {
                        return a(t) === e
                    }), t)
                }))
            }

            function M(e) {
                return d.mapOrDefault((function(t) {
                    return m.y.create((function(a) {
                        try {
                            return e(t)
                        } catch (e) {
                            return a.error(e), r.Z
                        }
                    }))
                }), c.E)
            }! function(e) {
                e.ricScheduler = function(t) {
                    return "requestIdleCallback" in self ? function(e) {
                        var a = self;
                        return m.y.create((function(r) {
                            var i = a.requestIdleCallback((function(t) {
                                (t.timeRemaining() > 0 || t.didTimeout) && r.next(e)
                            }), {
                                timeout: t
                            });
                            return function() {
                                return a.cancelIdleCallback(i)
                            }
                        }))
                    } : e.rafScheduler
                }, e.rafScheduler = function(e) {
                    return m.y.create((function(t) {
                        var a = requestAnimationFrame((function() {
                            return t.next(e)
                        }));
                        return function() {
                            return cancelAnimationFrame(a)
                        }
                    }))
                }, e.syncScheduler = function(e) {
                    return h.of(e)
                }, e.inRaf = function(t) {
                    return t.pipe(k.w(e.rafScheduler))
                }, e.inRic = function(t, a) {
                    return t.pipe(k.w(e.ricScheduler(a)))
                }
            }(w || (w = {}))
        },
        5178: (e, t, a) => {
            a.d(t, {
                Q: () => r,
                _: () => s
            });
            var r, i = a(75003),
                n = a(53844);
            ! function(e) {
                e.readersAttention = "readers_attention", e.settings = "settings", e.smartPhrases = "smart_phrases"
            }(r || (r = {}));
            class s {
                constructor(e, t, a) {
                    this._assistantLayoutViewModel = e, this._domain = t, this._gnar = a
                }
                getDomain() {
                    return this._domain
                }
                openFeedback(e) {
                    this._entryPoint = e, this._gnar.assistantFeedbackButtonClick(this._entryPoint), this._assistantLayoutViewModel.pushActiveView({
                        type: i.a.Type.feedback
                    })
                }
                submitFeedback(e) {
                    this._gnar.assistantFeedbackSubmitButtonClick(this._entryPoint, e.domain, e.text, (0, n.d)(e) ? e.score : void 0)
                }
                get entryPoint() {
                    return this._entryPoint
                }
            }
        },
        15401: (e, t, a) => {
            a.r(t), a.d(t, {
                SmartPhrasesFeature: () => T
            });
            var r = a(40327),
                i = a(23830),
                n = a(17404),
                s = a(5178),
                o = a(34311),
                l = a(56983),
                d = a(90361),
                c = a(74850),
                h = a(84966),
                u = a(80800),
                m = a(40018),
                p = a(14601),
                g = a(16118),
                f = a(77176),
                b = a(85985),
                _ = a(2844),
                v = a(98403),
                S = a(80900),
                x = a(17343),
                k = a(2834),
                P = a(13444),
                y = a(42833),
                A = a(50628),
                I = a(28043),
                E = a(15646),
                w = a(5114),
                C = a(83078),
                F = a(38983);
            class T {
                constructor(e, t, a, r, i, s, o, l, h, u, m) {
                    this._highlights = e, this._alertProcessor = t, this._alertStateService = a, this._geometryProvider = r, this._textObserver = i, this._getCheckingService = s, this._assistantOpenState = o, this._experiments = l, this._actions = h, this._state = u, this._gnar = m, this._subs = new p.w, this._log = c.Y.create("SmartPhrasesFeature"), this._smartPhrasesAlertState = new Map, this._addedPhraseHighlightId = F.h.create(null), this._activeSmartPhrasesAlertAssistant = F.h.create(null), this._activeSmartPhrasesAlertInline = F.h.create(null), this._subs.add(this._highlights.geometry.pipe(g.G(), f.U((([e, t]) => {
                        const a = new Set(Array.from(e.values()).map((e => e.meta.alertId)));
                        return Array.from(t.values()).filter((e => !a.has(e.meta.alertId))).map((e => this._alertProcessor.alerts.getAlertById(e.meta.alertId))).find((e => e && n.S.isSmartPhrasesAlert(e)))
                    })), b.h(d.fQ), b.h(n.S.isSmartPhrasesAlert)).subscribe((e => {
                        var t;
                        return this._gnar.smartPhrasesIntentSentenceHighlight(e.title, (null === (t = this._experiments) || void 0 === t ? void 0 : t.smartPhrasesInline) ? "V2" : "V1")
                    }))), this._subs.add(_.aj([this._alertStateService.getActiveAlert(), this._assistantOpenState]).pipe(f.U((([e, t]) => "closed" === t ? (null == e ? void 0 : e.alertId) && this._alertProcessor.alerts.getAlertById(e.alertId) : null)), f.U((e => e && n.S.isSmartPhrasesAlert(e) ? e : null))).subscribe(v.wW(this._activeSmartPhrasesAlertInline)))
                }
                get pinRect() {
                    return F.h.combine(this._activeSmartPhrasesAlertInline, this._activeSmartPhrasesAlertAssistant, this._addedPhraseHighlightId, ((e, t, a) => a ? null : e || t)).view((e => {
                        var t;
                        return (null === (t = this._experiments) || void 0 === t ? void 0 : t.smartPhrasesInline) && e ? this._calculatePinRect(e) : null
                    }))
                }
                get addStateToRawAlertTransformer() {
                    return e => {
                        if (h.wQ.isSmartPhrases(e)) {
                            const t = this.getAlertState(e.id);
                            return t && e.extra_properties.smart_phrases_intent ? {
                                ...e,
                                extra_properties: {
                                    ...e.extra_properties,
                                    smart_phrases_alert_state: {
                                        ...e.extra_properties.smart_phrases_alert_state,
                                        ...t
                                    }
                                }
                            } : e
                        }
                        return e
                    }
                }
                get seenPinTooltip() {
                    return this._state.view((e => Boolean(e.page.seenSmartPhrasesPinTooltip)))
                }
                markSeenPinTooltip() {
                    this._actions.seenSmartPhrasesPinTooltip()
                }
                getAlertState(e) {
                    return this._smartPhrasesAlertState.get(e)
                }
                registerAlertState(e, t) {
                    this._smartPhrasesAlertState.set(e, t)
                }
                highlightAddedPhrase(e, t, a, r = !1) {
                    const i = S.H(100).pipe(x.h(o.y$.Id.create(`${e}-${a.trim().toLowerCase().replace(/\s+/g,"-")}`)), k.b((i => {
                        const n = {
                            start: t.start,
                            end: t.start + a.length
                        };
                        this._log.trace(`Adding highlight to added phrase. Highlight ID: ${i}. Range:`, n), this._highlights.addHighlight(i, n, {
                            highlightId: i,
                            alertId: e,
                            highlightColor: l.hE.green,
                            highlightDisplayFormat: l.jk.background,
                            highlightDisappearOnHoverDelay: null
                        }), r && this._addedPhraseHighlightId.set(i)
                    })));
                    this._subs.add(i.pipe(P.g(2500), b.h((() => !r))).subscribe((e => {
                        this._removeHighlightFromAddedPhrase(e)
                    })))
                }
                initCardActionsProcessing(e, t, a, i) {
                    this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesUpdateStateAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), w.chain((e => m.bZ.getRawId(e))), C.tap((t => this.registerAlertState(t, e.state))))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowMiniCardAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((e => this._gnar.smartPhrasesAssistantCardMinifiedShow(e.title))))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowFullCardAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((e => this._gnar.smartPhrasesAssistantCardExpandedShow(e.title))))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesApplyAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), w.chain(m.bZ.getRawId), w.chain((e => w.fromNullable(this._alertProcessor.alerts.getAlertById(e)))), w.filter(n.S.isSmartPhrasesAlert), C.tap((t => {
                        this.highlightAddedPhrase(h.wQ.Id.create(t.id), t.transformRange, t.replacements[e.originalReplacementIndex], !0), this._hideAppliedSmartPhrasesAlertOnContentChange = this._textObserver.contentChanges.async.pipe(y.u(S.H(1e3)), b.h((e => e.changes.length > 0)), A.P()).subscribe((() => this._removeAppliedSmartPhrasesAlert())), this._subs.add(this._hideAppliedSmartPhrasesAlertOnContentChange), this._gnar.smartPhrasesAssistantCardExpandedReplacementApply(t.title, t.replacements[e.originalReplacementIndex])
                    })))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowMoreIdeasAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((e => {
                        var t;
                        this._removeHighlightFromAddedPhrase(), null === (t = this._hideAppliedSmartPhrasesAlertOnContentChange) || void 0 === t || t.unsubscribe(), this._hideAppliedSmartPhrasesAlertOnContentChange = null, this._gnar.smartPhrasesAssistantCardExpandedShowMoreIdeasButtonClick(e.title)
                    })))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesDismissAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((e => this._gnar.smartPhrasesAssistantCardExpandedDismissButtonClick(e.title))))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesFeedbackAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((t => {
                        e.feedbackType === m.cm.SMART_PHRASES_INTENT_DETECTED_ACCURATE ? this._gnar.smartPhrasesAssistantCardMinifiedYesButtonClick(t.title) : e.feedbackType === m.cm.SMART_PHRASES_INTENT_DETECTED_INACCURATE && this._gnar.smartPhrasesAssistantCardMinifiedNoButtonClick(t.title)
                    })))))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesDoneAction)).subscribe((e => (0, r.pipe)(t.getById(e.alertId), C.tap((t => {
                        this._removeHighlightFromAddedPhrase(), "user" === e.source ? this._gnar.smartPhrasesAssistantCardExpandedDoneButtonClick(t.title) : this._gnar.smartPhrasesAssistantCardHide(t.title)
                    })))))), this._subs.add(this._assistantOpenState.pipe(I.x(), b.h((e => "closed" === e))).subscribe((() => this._removeAppliedSmartPhrasesAlert()))), this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesOpenFeedbackFormAction)).subscribe((() => {
                        a.openFeedback(s.Q.smartPhrases)
                    }))), this._subs.add(_.aj([i.activeAlert, this._assistantOpenState]).pipe(f.U((([e, a]) => (0, r.pipe)(w.fromNullable("open" === a ? e : null), w.chain((e => t.getById(e.id))), w.chain(m.bZ.getRawId), w.fold((() => null), (e => e))))), f.U((e => e ? this._alertProcessor.alerts.getAlertById(e) : null)), f.U((e => e && n.S.isSmartPhrasesAlert(e) ? e : null))).subscribe(v.wW(this._activeSmartPhrasesAlertAssistant)))
                }
                static shouldCreate(e, t, a, r) {
                    var i, n, s, o;
                    const l = null !== (s = null === (n = null === (i = t.smartPhrases) || void 0 === i ? void 0 : i.enableByBrowser) || void 0 === n ? void 0 : n[e]) && void 0 !== s && s,
                        d = Boolean(null === (o = a.experiments) || void 0 === o ? void 0 : o.smartPhrases);
                    return l && d && "docs.google.com" !== r
                }
                _removeAppliedSmartPhrasesAlert() {
                    this._removeHighlightFromAddedPhrase(), this._smartPhrasesAlertState.forEach(((e, t) => {
                        var a;
                        e.hideReplacements && this._alertProcessor.alerts.getAlertById(t) && (this._log.trace("Dismissing used SmartPhrases alert:", t), null === (a = this._getCheckingService()) || void 0 === a || a.onAlertHideById(t, h.e3.Sidebar), this._alertProcessor.removeAlert(t, {
                            _tag: i.i.alertAccepted
                        }), this._smartPhrasesAlertState.delete(t))
                    }))
                }
                _removeHighlightFromAddedPhrase(e) {
                    const t = this._addedPhraseHighlightId.get(),
                        a = null != e ? e : t;
                    a && (this._log.trace(`Removing highlight from added phrase. Highlight ID: ${a}.`), this._highlights.removeHighlights([a]), t && this._addedPhraseHighlightId.set(null))
                }
                _calculatePinRect(e) {
                    const t = this._geometryProvider.create({
                        start: e.transformRange.start - 1,
                        end: e.transformRange.end
                    }, this._textObserver.getCurrentTextMap());
                    if (t) {
                        const e = this._geometryProvider.getClientRects(t);
                        return e ? Array.from(e)[0] : null
                    }
                    return null
                }
                dispose() {
                    this._subs.unsubscribe()
                }
            }
            T.getRequiredDenaliSupportedFeatures = (e, t, a, r) => T.shouldCreate(e, t, a, r) ? [u.zV.smartPhrases] : []
        },
        29207: (e, t, a) => {
            a.r(t), a.d(t, {
                SmartPhrasesCardView: () => r.K,
                SmartPhrasesPinView: () => m
            });
            var r = a(77753),
                i = a(27378),
                n = a(20855),
                s = a(23828),
                o = a(12187),
                l = a(11702);
            const d = ({
                height: e,
                top: t,
                left: a,
                tooltipMessage: r = "Text will be added here.",
                position: d = "absolute",
                zIndex: c = "auto",
                showDelay: h = 0,
                showInitialTooltip: u = !1,
                onHideTooltip: m
            }) => {
                const [p, g] = i.useState(!h), [f, b] = i.useState(null);
                return (0, s.x)((() => b(!0)), 2e3, [u, p, f], (() => p && u && null === f)), (0, s.x)((() => b(!1)), 4e3, [u, p, f], (() => p && u && Boolean(f))), i.useEffect((() => {
                    b(null)
                }), [u, h]), (0, s.x)((() => g(!0)), h, [h, p], (() => !p)), i.useEffect((() => {
                    g(!h)
                }), [h]), p ? i.createElement("div", {
                    "data-grammarly-part": "add-text-pin",
                    className: l.addTextPin,
                    style: {
                        top: t,
                        left: a,
                        height: e,
                        position: d,
                        zIndex: c
                    }
                }, i.createElement(n.u, {
                    message: r,
                    forceHovered: Boolean(f),
                    onHideTooltip: m
                }, i.createElement("div", Object.assign({}, (0, o.Sh)(l.addTextPinHead, f ? l.addTextPinHeadHovered : null)), i.createElement("div", {
                    className: l.addTextPinHeadAnimationHover
                }), i.createElement("div", {
                    className: l.addTextPinHeadAnimationInitial
                }), i.createElement("div", {
                    className: l.addTextPinHeadAnimationInitialTwo
                }))), i.createElement("div", {
                    className: l.addTextPinBody
                }, i.createElement("div", Object.assign({}, (0, o.Sh)(l.addTextPinBodyAnimationRing, l.addTextPinBodyAnimationRingInner))), i.createElement("div", Object.assign({}, (0, o.Sh)(l.addTextPinBodyAnimationRing, l.addTextPinBodyAnimationRingOuter))))) : null
            };
            var c = a(2844),
                h = a(77176),
                u = a(5739);
            const m = ({
                rect: e,
                seenPinTooltip: t,
                onPinTooltipSeen: a,
                zIndex: r
            }) => i.createElement(u.F.Fragment, null, c.aj([e, t]).pipe(h.U((([e, t]) => e ? i.createElement(d, {
                position: "fixed",
                zIndex: r,
                left: e.left + 2,
                top: e.top,
                height: e.height,
                tooltipMessage: "The phrase you select will be inserted here.",
                showDelay: 2500,
                showInitialTooltip: !t,
                onHideTooltip: a
            }) : null))))
        },
        95888: (e, t, a) => {
            a.d(t, {
                J: () => l
            });
            var r = a(27378),
                i = a(53112);
            const n = ({
                color: e = i.Z.neutral0
            }) => r.createElement("svg", {
                width: "16",
                height: "13",
                viewBox: "0 0 16 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("g", {
                filter: "url(#filter0_d)"
            }, r.createElement("path", {
                d: "M3 5L6.5 8.5L13 2",
                stroke: e,
                strokeWidth: "2"
            })), r.createElement("defs", null, r.createElement("filter", {
                id: "filter0_d",
                x: "0.292892",
                y: "0.292847",
                width: "15.4142",
                height: "12.6213",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, r.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), r.createElement("feOffset", {
                dy: "1"
            }), r.createElement("feGaussianBlur", {
                stdDeviation: "1"
            }), r.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.211765 0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0.5 0"
            }), r.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), r.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))));
            var s = a(12187),
                o = a(53358);
            const l = ({
                onChange: e = (() => null),
                labelId: t,
                className: a,
                children: i
            }) => {
                const [l, d] = r.useState(!1);
                r.useEffect((() => {
                    e(l)
                }), [l]);
                const c = e => {
                    e.preventDefault(), e.stopPropagation(), d(!l)
                };
                return r.createElement("div", {
                    "data-grammarly-part": "ui-kit-checkbox",
                    className: a
                }, r.createElement("div", {
                    className: o.checkboxContainer
                }, r.createElement("div", Object.assign({}, (0, s.Sh)(o.checkbox, l ? o.checkboxChecked : null), {
                    role: "checkbox",
                    "aria-checked": l,
                    tabIndex: 0,
                    "aria-labelledby": t,
                    onKeyDown: e => {
                        " " === e.key && c(e)
                    },
                    onClick: c
                }), l ? r.createElement(n, null) : null), r.createElement("label", {
                    id: t,
                    onClick: c
                }, i)))
            }
        },
        47422: (e, t, a) => {
            a.d(t, {
                z: () => l
            });
            var r = a(27378),
                i = a(84488),
                n = a(68370),
                s = a(51897),
                o = a.n(s);
            const l = ({
                placeholder: e,
                onChange: t,
                ariaLabel: a,
                className: s
            }) => {
                const [l, d] = r.useState("");
                return r.useEffect((() => {
                    t(l)
                }), [l]), r.createElement(i.G, {
                    "data-grammarly-part": "ui-kit-textbox",
                    className: s,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, r.createElement(n.b, null, o().__css), r.createElement("div", {
                    role: "textbox",
                    className: o().textBox,
                    contentEditable: !0,
                    onInput: e => d(e.target.innerText),
                    "data-placeholder": e,
                    "aria-placeholder": e,
                    "aria-label": a
                }))
            }
        },
        53844: (e, t, a) => {
            a.d(t, {
                q: () => f,
                d: () => g
            });
            var r = a(27378),
                i = a(12187),
                n = a(21420);
            const s = ({
                options: e,
                onChange: t = (() => null),
                ariaLabel: a,
                className: s
            }) => {
                const o = [],
                    [l, d] = r.useState(null);
                r.useEffect((() => {
                    var a;
                    null !== l && (null === (a = o[l]) || void 0 === a || a.focus()), t(null !== l ? e[l].value : null)
                }), [l]);
                const c = null !== l ? e[l] : null;
                return r.createElement("div", {
                    "data-grammarly-part": "ui-kit-radio-group",
                    className: s
                }, r.createElement("div", {
                    className: n.radioGroup,
                    role: "radiogroup",
                    "aria-label": a,
                    onKeyDown: t => {
                        if (" " !== t.key || c) {
                            if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                d(((l || 0) + 1) % e.length)
                            } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                const a = (l || 0) - 1;
                                d(a < 0 ? e.length - 1 : a)
                            }
                        } else t.preventDefault(), t.stopPropagation(), d(0)
                    }
                }, e.map(((e, t) => {
                    const a = (null == c ? void 0 : c.value) === e.value,
                        s = 0 === t;
                    return r.createElement("div", Object.assign({
                        key: e.value
                    }, (0, i.Sh)(n.radioGroupOption, a ? n.radioGroupOptionSelected : null), {
                        role: "radio",
                        tabIndex: a || s && !c ? 0 : -1,
                        "aria-checked": a,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), d(t)
                        },
                        ref: e => o.push(e)
                    }), e.render())
                }))))
            };
            var o, l = a(24606),
                d = a(47422),
                c = a(95888),
                h = a(53112),
                u = a(5872),
                m = a(51217),
                p = a(44544);

            function g(e) {
                return "score" in e
            }! function(e) {
                e.bad = "bad", e.ok = "ok", e.good = "good"
            }(o || (o = {}));
            const f = e => {
                const t = [o.bad, o.ok, o.good],
                    [a, n] = r.useState(null),
                    [g, f] = r.useState(""),
                    [b, _] = r.useState(!1),
                    [v, S] = r.useState(!1);
                let x;
                return x = v ? r.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-thank-you"
                }, (0, i.Sh)(m.feedbackFormContainer, m.feedbackFormContainerAlignCenter)), r.createElement("div", {
                    className: m.feedbackFormSuccessMessageTextContainer
                }, r.createElement("div", {
                    className: m.feedbackFormSuccessMessageIcon
                }), r.createElement("div", {
                    className: m.feedbackFormSuccessMessageTitle
                }, "Thank you!"), r.createElement("div", {
                    className: m.feedbackFormSuccessMessageSubtitle
                }, "Your feedback helps us improve.")), r.createElement(l.z, {
                    containerClassName: (0, u.cs)(m.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? m.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    onClick: e.onClose,
                    style: {
                        height: "32px"
                    }
                }, "Done")) : r.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-fields"
                }, (0, i.Sh)(m.feedbackFormContainer, "center" === e.align ? m.feedbackFormContainerAlignCenter : null)), r.createElement("div", {
                    className: m.feedbackFormFields
                }, e.hideLogo ? null : r.createElement("div", {
                    className: m.feedbackFormLogo
                }), r.createElement("div", {
                    className: m.feedbackFormTitle
                }, e.title || r.createElement("span", null, "How do you like ", r.createElement("br", null), " Grammarly?")), e.withScore ? r.createElement(r.Fragment, null, r.createElement(s, {
                    ariaLabel: "Feedback Score",
                    options: t.map((e => ({
                        value: e,
                        render() {
                            let t, a;
                            return e === o.bad ? (t = p.feedbackFormOptionIconDisheartening, a = "Dissatisfied") : e === o.ok ? (t = p.feedbackFormOptionIconNeutral, a = "It's Ok") : (t = t = p.feedbackFormOptionIconSmiling, a = "Satisfied"), r.createElement("div", {
                                className: p.feedbackFormOption
                            }, r.createElement("div", Object.assign({}, (0, i.Sh)(p.feedbackFormOptionIcon, t))), r.createElement("div", null, a))
                        }
                    }))),
                    onChange: n,
                    className: m.feedbackFormScore
                }), r.createElement("div", {
                    className: m.feedbackFormTextBoxTitle
                }, "How can we improve?")) : null, r.createElement(d.z, {
                    onChange: f,
                    placeholder: "Tell us what you think",
                    ariaLabel: "Feedback Text",
                    className: m.feedbackFormTextBox
                }), e.domain ? r.createElement(r.Fragment, null, r.createElement("div", {
                    className: m.feedbackFormShareDomainTitle
                }, "Help improve Grammarly by sharing the domain you’re on:"), r.createElement(c.J, {
                    labelId: "feedback-form-share-domain-checkbox",
                    onChange: _,
                    className: m.feedbackFormShareDomainCheckbox
                }, "Include the domain ", r.createElement("b", null, e.domain), " with my feedback")) : null), r.createElement(l.z, {
                    containerClassName: (0, u.cs)(m.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? m.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    disabled: e.withScore ? !a : !g,
                    onClick: () => {
                        var t, r;
                        e.withScore && a ? (null === (t = e.onSubmit) || void 0 === t || t.call(e, {
                            score: a,
                            text: g,
                            domain: b ? e.domain : void 0
                        }), S(!0)) : !e.withScore && g && (null === (r = e.onSubmit) || void 0 === r || r.call(e, {
                            text: g,
                            domain: b ? e.domain : void 0
                        }), S(!0))
                    },
                    style: {
                        height: "32px",
                        background: (e.withScore ? a : g) ? void 0 : h.Z.neutral40
                    }
                }, "Submit")), r.createElement("div", {
                    style: {
                        height: "100%",
                        ...e.style
                    },
                    "data-grammarly-part": "surveys-feedback-form"
                }, x)
            };
            f.defaultProps = {
                hideLogo: !1,
                align: "center",
                fixSubmitButtonOverflowBottomPadding: !1
            }
        },
        25682: (e, t, a) => {
            var r = a(93476)((function(e) {
                return e[1]
            }));
            r.push([e.id, "._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}", ""]), r.locals = {
                textBox: "_380Y1-textBox"
            }, e.exports = r
        },
        53358: e => {
            e.exports = {
                checkboxContainer: "_30OQ2",
                checkbox: "_1eqmB",
                checkboxChecked: "_105R3"
            }
        },
        21420: e => {
            e.exports = {
                radioGroup: "_3jZFB",
                radioGroupOption: "_1Boe7",
                radioGroupOptionSelected: "_37tnK"
            }
        },
        11702: e => {
            e.exports = {
                addTextPin: "_2g-uW",
                addTextPinHead: "_2kBck",
                addTextPinHeadAnimationInitial: "_1PeWi",
                addTextPinHeadAnimationInitialTwo: "_3hxBW",
                addTextPinHeadAnimationHover: "_2Nt4p",
                pinHeadAnimationInitial: "_1Sff4",
                addTextPinHeadHovered: "_1pIf",
                pinHeadAnimationHover: "_3zvrY",
                addTextPinBody: "_3qZMz",
                spin: "_3M1r1"
            }
        },
        51217: e => {
            e.exports = {
                feedbackFormContainer: "_1M-GI",
                feedbackFormContainerAlignCenter: "_3QNrK",
                feedbackFormFields: "Jg_OY",
                feedbackFormTitle: "nPjzw",
                feedbackFormTextBoxTitle: "_2yUbL",
                feedbackFormLogo: "_2C-d7",
                feedbackFormScore: "_3AmBq",
                feedbackFormTextBox: "FO2oU",
                feedbackFormShareDomainTitle: "_2UXTO",
                feedbackFormShareDomainCheckbox: "_3mSXM",
                feedbackFormSubmitButton: "_32xYR",
                feedbackFormSubmitButtonFixOverflowBottomPadding: "IJDSA",
                feedbackFormSuccessMessageTextContainer: "_2JO6Z",
                feedbackFormSuccessMessageIcon: "oVxds",
                feedbackFormSuccessMessageTitle: "_1MdvM",
                feedbackFormSuccessMessageSubtitle: "_1EKkw",
                spin: "_2ycFE"
            }
        },
        44544: e => {
            e.exports = {
                feedbackFormOption: "_9K_Q8",
                feedbackFormOptionIcon: "_259oL",
                feedbackFormOptionIconDisheartening: "_3NJTM",
                feedbackFormOptionIconNeutral: "i-5N8",
                feedbackFormOptionIconSmiling: "_1Dxi9",
                spin: "_2elyX"
            }
        },
        16118: (e, t, a) => {
            a.d(t, {
                G: () => n
            });
            var r = a(59312),
                i = a(98036);

            function n() {
                return function(e) {
                    return e.lift(new s)
                }
            }
            var s = function() {
                    function e() {}
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new o(e))
                    }, e
                }(),
                o = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.hasPrev = !1, a
                    }
                    return r.__extends(t, e), t.prototype._next = function(e) {
                        var t;
                        this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
                    }, t
                }(i.L)
        },
        42833: (e, t, a) => {
            a.d(t, {
                u: () => n
            });
            var r = a(59312),
                i = a(46601);

            function n(e) {
                return function(t) {
                    return t.lift(new s(e))
                }
            }
            var s = function() {
                    function e(e) {
                        this.notifier = e
                    }
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new o(e, this.notifier))
                    }, e
                }(),
                o = function(e) {
                    function t(t, a) {
                        var r = e.call(this, t) || this;
                        r.hasValue = !1;
                        var n = new i.IY(r);
                        r.add(n), r.innerSubscription = n;
                        var s = (0, i.ft)(a, n);
                        return s !== n && (r.add(s), r.innerSubscription = s), r
                    }
                    return r.__extends(t, e), t.prototype._next = function(t) {
                        this.hasValue && e.prototype._next.call(this, t)
                    }, t.prototype.notifyNext = function() {
                        this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
                    }, t.prototype.notifyComplete = function() {}, t
                }(i.Ds)
        }
    }
]);
