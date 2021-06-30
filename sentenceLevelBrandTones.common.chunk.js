(self.webpackChunk = self.webpackChunk || []).push([
    [25], {
        32173: (e, t, s) => {
            s.r(t), s.d(t, {
                SentenceLevelBrandTonesFeature: () => g
            });
            var r = s(40327),
                a = s(17404),
                n = s(84966);
            class i {
                constructor() {
                    this._feedback = new Map
                }
                getFeedback(e) {
                    return this._feedback.get(e)
                }
                setFeedback(e, t) {
                    this._feedback.set(e, t)
                }
                get addFeedbackToRawAlertTransformer() {
                    return e => {
                        if (n.wQ.isSentenceLevelBrandTones(e)) {
                            const t = this.getFeedback(e.id);
                            return t ? {
                                ...e,
                                extra_properties: {
                                    ...e.extra_properties,
                                    brandToneFeedback: t
                                }
                            } : e
                        }
                        return e
                    }
                }
            }
            var c = s(90361),
                d = s(40018),
                o = s(15646),
                b = s(14601),
                l = s(93508),
                h = s(16118),
                u = s(77176),
                p = s(85985),
                k = s(83078),
                f = s(22232),
                _ = s(5114);
            class g {
                constructor(e, t, s) {
                    this._alertProcessor = t, this._gnar = s, this._subs = new b.w, this.feedbackStore = new i, this._subs.add(e.pipe(l.O([]), h.G(), u.U((([e, t]) => {
                        const s = Array.from(t.values()),
                            r = new Set(Array.from(e.values()).map((e => e.meta.alertId)));
                        return s.filter((e => !r.has(e.meta.alertId)))
                    })), u.U((e => e.map((e => this._alertProcessor.alerts.getAlertById(e.meta.alertId))).filter(c.fQ).filter(a.S.isSentenceLevelBrandTonesAlert)))).subscribe((e => e.forEach((() => this._gnar.brandTonesSentenceHighlight())))))
                }
                initCardActionsProcessing(e, t) {
                    this._subs.add(e.pipe(p.h(o.lY.isSentenceLevelBrandTonesFeedbackAction)).subscribe((e => {
                        (0, r.pipe)(t.getById(e.alertId), _.chain((e => d.bZ.getRawId(e))), k.tap((t => this.feedbackStore.setFeedback(t, e.feedbackType)))), this._trackAssistantFeedbackClick(e.feedbackType)
                    }))), this._subs.add(e.pipe(p.h(o.lY.isAlertCardShow)).subscribe((e => {
                        (0, r.pipe)(t.getById(e.alertId), _.filter(d.bZ.isSentenceLevelBrandTones), k.tap((() => this._gnar.brandTonesSentenceCardShow("assistant"))))
                    }))), this._subs.add(e.pipe(p.h(o.lY.isAlertIgnoreAction)).subscribe((e => {
                        (0, r.pipe)(t.getById(e.alertId), _.filter(d.bZ.isSentenceLevelBrandTones), k.tap((() => this._gnar.brandTonesSentenceCardDismissButtonClick("assistant"))))
                    })))
                }
                get addFeedbackToRawAlertTransformer() {
                    return this.feedbackStore.addFeedbackToRawAlertTransformer
                }
                _trackAssistantFeedbackClick(e) {
                    switch (e) {
                        case d.id.accurate:
                            this._gnar.brandTonesSentenceFeedbackClick("assistant", "yes");
                            break;
                        case d.id.inaccurate:
                            this._gnar.brandTonesSentenceFeedbackClick("assistant", "no");
                            break;
                        default:
                            (0, f.vE)(e)
                    }
                }
                dispose() {
                    this._subs.unsubscribe()
                }
            }
        },
        16118: (e, t, s) => {
            s.d(t, {
                G: () => n
            });
            var r = s(59312),
                a = s(98036);

            function n() {
                return function(e) {
                    return e.lift(new i)
                }
            }
            var i = function() {
                    function e() {}
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new c(e))
                    }, e
                }(),
                c = function(e) {
                    function t(t) {
                        var s = e.call(this, t) || this;
                        return s.hasPrev = !1, s
                    }
                    return r.__extends(t, e), t.prototype._next = function(e) {
                        var t;
                        this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
                    }, t
                }(a.L)
        }
    }
]);
