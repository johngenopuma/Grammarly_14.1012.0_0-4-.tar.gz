(self.webpackChunk = self.webpackChunk || []).push([
    [923], {
        77869: (e, t, n) => {
            n.r(t), n.d(t, {
                ReadersAttentionFeature: () => pe,
                getLogName: () => ue
            });
            var s = n(8482),
                i = n(24448),
                a = n(97757),
                r = n(14601),
                o = n(32952),
                h = n(5114),
                g = n(38983),
                c = n(40327),
                l = n(75003),
                d = n(90361),
                u = n(15646),
                p = n(83078);

            function _(e) {
                switch (e) {
                    case l.a.ReadersAttention.Caller.Type.inlineCard:
                        return "inlineCard";
                    case l.a.ReadersAttention.Caller.Type.predictionWidget:
                        return "predictionWidget";
                    case l.a.ReadersAttention.Caller.Type.navigation:
                        return "navigation";
                    default:
                        (0, d.vE)(e)
                }
            }
            class m {
                constructor(e, t, n, s) {
                    this._gnar = e, this._statistics = t, this._getTextScore = n, this._getAlertById = s, this._statsOnOpen = h.none
                }
                _getLaunchSourceLabel(e, t) {
                    switch (e.type) {
                        case l.a.ReadersAttention.Caller.Type.inlineCard:
                            return (0, c.pipe)(this._getAlertById(e.alertId), h.filter((e => e.isTakeaway)), h.fold((() => ""), (e => e._legacyAlert.title || "")));
                        case l.a.ReadersAttention.Caller.Type.predictionWidget:
                            return t;
                        case l.a.ReadersAttention.Caller.Type.navigation:
                            return "";
                        default:
                            (0, d.vE)(e)
                    }
                }
                _getBasicOpenMetrics(e, t) {
                    return {
                        textScore: this._getTextScore(),
                        numWords: this._statistics.wordsCount.get(),
                        alertCounts: this._statistics.alertCounts.get(),
                        launchSource: _(t.type),
                        launchSourceLabel: this._getLaunchSourceLabel(t, e)
                    }
                }
                onOpen(e, t, n, s) {
                    (0, c.pipe)(this._statsOnOpen, h.fold((() => h.some({
                        ...this._getBasicOpenMetrics(t, s),
                        numCards: n,
                        checklist: e,
                        time: performance.now(),
                        numParagraphs: this._statistics.paragraphsCount.get(),
                        numFormattingSpans: this._statistics.formattingSpansCount.get()
                    })), (() => h.none)), p.tap((e => {
                        const t = e.alertCounts.expandedViewSupported,
                            s = e.alertCounts.freeClarity,
                            i = e.alertCounts.critical,
                            a = e.alertCounts.filter((e => "priority" === e.assistantView)).expandedViewSupported,
                            r = e.checklist.filter((e => e.checked)).length;
                        this._gnar.attentionPanelShow(Array.from(e.checklist), e.launchSource, e.launchSourceLabel, t, s, i, r, n.takeaway, a, n.nonTakeaway, e.numWords, e.textScore), this._statsOnOpen = h.some(e)
                    })))
                }
                onClose(e, t) {
                    (0, c.pipe)(this._statsOnOpen, p.tap((n => {
                        const s = performance.now() - n.time,
                            i = n.checklist.filter((e => e.checked)).length,
                            a = e.filter((e => e.checked)).length;
                        this._gnar.attentionPanelHide(Array.from(e), Array.from(n.checklist), this._statistics.wordsCount.get(), this._getTextScore(), n.numWords, n.textScore, n.launchSource, n.launchSourceLabel, this._statistics.formattingSpansCount.get(), n.numFormattingSpans, a, i, t.takeaway, n.numCards.takeaway, this._statistics.paragraphsCount.get(), n.numParagraphs, t.nonTakeaway, n.numCards.nonTakeaway, s), this._statsOnOpen = h.none
                    })))
                }
                onHelpScreenShow(e) {
                    this._gnar.attentionHelpScreenShow(e)
                }
                onTakeawayUserAction(e, t, n, s) {
                    switch (n.type) {
                        case u.lY.Type.takeawayCorrectlyDetected:
                            return this._gnar.attentionKeyTakeawayFeedbackClick(s.end, s.start, t, "up");
                        case u.lY.Type.takeawayIncorrectlyDetected:
                            return this._gnar.attentionKeyTakeawayFeedbackClick(s.end, s.start, t, "down");
                        case u.lY.Type.takeawayDismiss:
                            return this._gnar.attentionKeyTakeawayIgnored(e, s.end, s.start, t);
                        case u.lY.Type.takeawayResolve:
                            return this._gnar.attentionKeyTakeawayAcknowledged(e, s.end, s.start, t);
                        default:
                            (0, d.vE)(n)
                    }
                }
                onKeyTakeawayCardShow(e, t) {
                    this._gnar.attentionKeyTakeawayCardShow(t.end, t.start, e)
                }
                onChecklistItemExpand(e) {
                    this._gnar.attentionChecklistItemExpand(e.checked, e.id, e.numAlerts, e.title)
                }
            }
            var f, v, y, x = n(76974),
                R = n(66310),
                b = n(77176),
                w = n(28043),
                C = n(93508),
                I = n(85985);
            ! function(e) {
                e.emptyLinesRegex = /([\t ]*\r*\n){2,}/, e.lineBreakRegex = /([\t ]*\r*\n){1,}/, e.split = function({
                    start: t,
                    end: n
                }, s, i = e.emptyLinesRegex) {
                    var a;
                    const r = [];
                    if (!i.test(s.slice(t, n))) return [];
                    let o = t;
                    for (;;) {
                        const e = s.slice(o, n).match(i),
                            t = null !== (a = null == e ? void 0 : e.index) && void 0 !== a ? a : n - o;
                        if (o !== o + t && r.push({
                                start: o,
                                end: o + t
                            }), !e) break;
                        o += t + e[0].length
                    }
                    return r
                }, e.isFormattingChange = function(e) {
                    return 0 === e.changes.length && !e.deltaChange.isEmpty
                }
            }(f || (f = {})),
            function(e) {
                e.lerp = function(e, t, n) {
                    return (1 - n) * e + n * t
                }, e.mean = function(e) {
                    return e.reduce(((e, t) => e + t), 0) / e.length
                }
            }(v || (v = {})),
            function(e) {
                e.lerp = function(e, t) {
                    return v.lerp(e[0], e[1], t)
                }, e.approxEqual = function(e, t, n = .001) {
                    return Math.abs(e[0] - t[0]) < n && Math.abs(e[1] - t[1]) < n
                }, e.getAverage = function(e) {
                    const t = e.reduce(((e, t) => e + (t.range.end - t.range.start)), 0);
                    return e.reduce(((e, n) => e + (n.intensity[0] + n.intensity[1]) / 2 * (n.range.end - n.range.start) / t), 0)
                }, e.constant = function(e) {
                    return [e, e]
                }, e.linear = function(e, t) {
                    return [e, t]
                }, e.toColors = function(e) {
                    const t = e => `rgba(135, 232, 209, ${e.toFixed(2)})`,
                        n = function([e, t]) {
                            const n = e => Math.max(Math.min(e, 1), 0),
                                [s, i] = [0, 1];
                            return {
                                start: v.lerp(s, i, n(e)),
                                end: v.lerp(s, i, n(t))
                            }
                        }(e);
                    return [t(n.start), t(n.end)]
                }
            }(y || (y = {}));
            var M, S = n(36991),
                k = n(71249);
            ! function(e) {
                let t, n;
                ! function(e) {
                    let t;
                    ! function(e) {
                        e.fromCapi = function(e) {
                            return `${e}`
                        }, e.toCapi = function(e) {
                            return Number(e)
                        }, e.create = function(e) {
                            return void 0 === e ? `${d.iy.create().slice(0,6)}` : e
                        }
                    }(t = e.Id || (e.Id = {})), e.fromCapi = function(e = [0, 0]) {
                        return n => ({
                            id: t.fromCapi(n.id),
                            range: {
                                start: n.begin,
                                end: n.end
                            },
                            intensity: n.intensities || e,
                            text: n.text
                        })
                    }
                }(t = e.Range || (e.Range = {})),
                function(e) {
                    let t;
                    ! function(e) {
                        e[e.v3 = 3] = "v3"
                    }(t = e.Version || (e.Version = {}))
                }(n = e.Capi || (e.Capi = {}))
            }(M || (M = {}));
            class T {
                constructor(e, t, n, s, i = M.Range.Id.create) {
                    this._getClosestRangeToPosition = e, this._getIntersectingRanges = t, this._getLastRevisionSent = n, this._getText = s, this._nextRangeId = i
                }
                pushChanges(e, t) {
                    var n;
                    const i = (n = e.delta, S.s.normalizeDelta(n).ops.reduce(((e, t) => {
                        var n;
                        return S.s.isRetain(t) ? e.index += t.retain : S.s.isDelete(t) || S.s.isInsertString(t) && (e.insertions.push({
                            text: t.insert.trim(),
                            pos: e.index + ((null === (n = t.insert.match(/^\s+/)) || void 0 === n ? void 0 : n[0].length) || 0)
                        }), e.index += t.insert.length), e
                    }), {
                        index: 0,
                        insertions: []
                    }).insertions.filter((e => "" !== e.text))).filter((e => !t.resized.find((t => s.SV.intersects(t.range, {
                        start: e.pos,
                        end: e.pos + e.text.length
                    })))));
                    return k.compact(i.map((e => this._highlight(e))))
                }
                _highlight(e) {
                    const t = this._getText(),
                        n = h.toNullable(this._getClosestRangeToPosition(e.pos, (t => t.range.start < e.pos))),
                        s = !n && e.pos > 0 && "" !== t.slice(0, e.pos).trim() || n && "" !== t.slice(n.range.end, e.pos).trim(),
                        i = n && !t.slice(n.range.end, e.pos).includes("\n");
                    if (s) return h.none;
                    if (n && i) return h.some(this._highlightInsertionWithRangeOnLeftSide(e, n));
                    const a = h.toNullable(this._getClosestRangeToPosition(e.pos, (t => t.range.start >= e.pos + e.text.length))),
                        r = a && !t.slice(e.pos + e.text.length, a.range.start).includes("\n");
                    return a && r ? h.some(this._highlightInsertionWithRangeOnRightSide(e, a)) : this._highlightStandaloneInsertion(e)
                }
                _highlightInsertionWithRangeOnLeftSide(e, t) {
                    const n = A(t, this._getLastRevisionSent());
                    return {
                        id: n ? t.id : this._nextRangeId(),
                        range: {
                            start: n ? t.range.start : Math.max(t.range.end, e.pos),
                            end: e.pos + e.text.length
                        },
                        intensity: n ? t.intensity : y.constant(t.intensity[1])
                    }
                }
                _highlightInsertionWithRangeOnRightSide(e, t) {
                    const n = A(t, this._getLastRevisionSent());
                    return {
                        id: n ? t.id : this._nextRangeId(),
                        range: {
                            start: e.pos,
                            end: n ? t.range.end : Math.min(t.range.start, e.pos + e.text.length)
                        },
                        intensity: n ? t.intensity : y.constant(t.intensity[0])
                    }
                }
                _highlightStandaloneInsertion(e) {
                    const t = {
                        start: e.pos,
                        end: e.pos + e.text.length
                    };
                    return (0, c.pipe)(this._getIntensityForNewInsertion(t), h.map((n => ({
                        id: this._nextRangeId(),
                        range: t,
                        intensity: n,
                        text: e.text
                    }))))
                }
                _getIntensityForNewInsertion(e) {
                    const t = f.split({
                            start: 0,
                            end: e.start
                        }, this._getText(), f.lineBreakRegex),
                        n = f.split({
                            start: e.end,
                            end: this._getText().length
                        }, this._getText(), f.lineBreakRegex),
                        s = t.length > 0 ? t[t.length - 1] : null,
                        i = n.length > 0 ? n[0] : null;
                    if (s && i) {
                        const e = this._getAverageIntensityOver(s),
                            t = this._getAverageIntensityOver(i);
                        return h.some(y.linear(e, t))
                    }
                    if (s) {
                        const e = this._getAverageIntensityOver(s);
                        return h.some(y.constant(e))
                    }
                    if (i) {
                        const e = this._getAverageIntensityOver(i);
                        return h.some(y.constant(e))
                    }
                    return h.none
                }
                _getAverageIntensityOver(e) {
                    const t = this._getIntersectingRanges(e);
                    return y.getAverage(t.map((e => ({
                        range: {
                            start: e.range.start,
                            end: e.range.end
                        },
                        intensity: e.intensity
                    }))))
                }
            }

            function A(e, t) {
                return h.isSome(e.localInfo) && p.unsafeGet(e.localInfo).lastRevision === t
            }
            var L = n(55073),
                F = n(74850),
                $ = n(25938),
                B = n(64450);
            class O {
                constructor(e) {
                    this._text = e, this._log = F.Y.create(ue(O.name)), this._changes = []
                }
                registerRevision(e) {
                    this._changes.push({
                        delta: $.RI.delta(new B.Delta, this._text.length),
                        textBeforeChange: this._text,
                        revision: e
                    }), this._log.info(`registered revision ${e}`)
                }
                revisionFinished(e) {
                    const t = this._changes.findIndex((t => t.revision === e));
                    if (t < 0) return this._log.info(`revision ${e} finished -- not found`), [];
                    const n = this._changes.splice(0, t + 1).map((e => e.revision));
                    return this._log.info(`revision ${e} finished -- dropped [${n.join(", ")}]`), n
                }
                getChangesSinceRevision(e) {
                    const t = this._changes.findIndex((t => t.revision === e));
                    if (t < 0) return this._log.warn(`revision ${e} not found in history`), h.none;
                    const n = this._changes.slice(t).map((e => e.delta)),
                        s = n.slice(1).reduce(((e, t) => e.compose(t)), n[0]);
                    return s.isEmpty ? h.none : h.some({
                        textBeforeChanges: this._changes[t].textBeforeChange,
                        delta: s
                    })
                }
                pushChanges(e) {
                    if (e.isEmpty) return;
                    if (this._text = (0, L.l)(e.delta, this._text), 0 === this._changes.length) return;
                    const t = this._changes[this._changes.length - 1];
                    t.delta = t.delta.compose(e)
                }
                get text() {
                    return this._text
                }
            }
            var E, P = n(76331),
                Q = n(34311),
                H = n(62337);
            ! function(e) {
                e.stitchAdjacent = function(e, t = 1, n = .5, s = .5) {
                    const i = function(e, t = .5) {
                        const n = e.length > 0 ? [{
                            rects: [e[0]],
                            top: e[0].rect.top,
                            bottom: e[0].rect.top + e[0].rect.height
                        }] : [];
                        for (let s = 1; s < e.length; ++s) {
                            const i = n[n.length - 1],
                                a = e[s].rect;
                            i.bottom - a.top >= t * Math.min(i.bottom - i.top, a.height) ? (i.rects.push(e[s]), i.top = a.top < i.top ? a.top : i.top, i.bottom = a.top + a.height > i.bottom ? a.top + a.height : i.bottom) : n.push({
                                rects: [e[s]],
                                top: a.top,
                                bottom: a.top + a.height
                            })
                        }
                        return n
                    }(e, s);
                    for (let e = 0; e < i.length; ++e) {
                        if (e > 0) {
                            const t = i[e].top - i[e - 1].bottom,
                                s = i[e].bottom - i[e].top,
                                a = i[e - 1].bottom - i[e - 1].top;
                            t < Math.min(s, a) * n && (i[e].top = i[e - 1].bottom)
                        }
                        if (e < i.length - 1) {
                            const t = i[e + 1].top - i[e].bottom,
                                s = i[e].bottom - i[e].top,
                                a = i[e + 1].bottom - i[e + 1].top,
                                r = .5 * t;
                            t < Math.min(s, a) * n && (i[e].bottom = i[e].bottom + r)
                        }
                        for (let t = 0; t < i[e].rects.length; ++t) i[e].rects[t].rect = {
                            ...i[e].rects[t].rect,
                            top: i[e].top,
                            height: i[e].bottom - i[e].top
                        };
                        for (let n = 1; n < i[e].rects.length; ++n) {
                            const s = i[e].rects[n - 1].rect.left + i[e].rects[n - 1].rect.width,
                                a = i[e].rects[n].rect.left - s,
                                r = .5 * a;
                            a > 0 && a < Math.min(i[e].rects[n].rect.height, i[e].rects[n - 1].rect.height) * t && (i[e].rects[n - 1].rect = {
                                ...i[e].rects[n - 1].rect,
                                width: i[e].rects[n - 1].rect.width + r
                            }, i[e].rects[n].rect = {
                                ...i[e].rects[n].rect,
                                left: s + r,
                                width: i[e].rects[n].rect.left + i[e].rects[n].rect.width - s - r
                            })
                        }
                    }
                    return i.flatMap((e => e.rects))
                }, e.getMinDistanceBetween = function(e, t) {
                    if (H.UL.intersects(e, t)) return 0;
                    const n = e.left + e.width < t.left,
                        s = e.top > t.top + t.height,
                        i = e.left > t.left + t.width,
                        a = e.top + e.height < t.top;
                    return (n || i) && (a || s) ? 1 / 0 : n ? t.left - (e.left + e.width) : i ? e.left - (t.left + t.width) : a ? t.top - (e.top + e.height) : e.top - (t.top + t.height)
                }, e.getBoundingBox = function(e) {
                    return e.slice(1).reduce(((e, t) => {
                        const n = Math.min(t.top, e.top),
                            s = Math.min(t.left, e.left);
                        return {
                            top: n,
                            left: s,
                            width: Math.max(e.left + e.width, t.left + t.width) - s,
                            height: Math.max(e.top + e.height, t.top + t.height) - n
                        }
                    }), e[0])
                }
            }(E || (E = {}));
            class N {
                constructor(e, t, n, s, i, a) {
                    this._geometryProvider = e, this._geometryLayout = t, this._textFieldRectInvalidated = n, this._formattingChanged = s, this._getTextMap = i, this.heatmapChanges = a, this._highlightsCollection = new P.C(this._geometryProvider, this._geometryLayout, this._getTextMap, Q.qH.everything, this._textFieldRectInvalidated, void 0, void 0, void 0, void 0, F.Y.create(ue(N.name))), this._sub = new r.w, this.geometry = this._highlightsCollection.geometry.view(V), this._sub.add(a.subscribe((e => this._onRangeChanges(e)))), this._sub.add(this._formattingChanged.subscribe((e => {
                        this._highlightsCollection.maintainConsistency([], (e => e), !0)
                    })))
                }
                _onRangeChanges(e) {
                    this._highlightsCollection.removeHighlights(e.removed.map(Q.y$.Id.create)), "update" === e._tag && (e.changed.forEach((e => {
                        this._highlightsCollection.updateHighlight(Q.y$.Id.create(e.id), e.range, {
                            intensity: e.intensity,
                            range: e.range,
                            isLocal: h.isSome(e.localInfo)
                        })
                    })), this._highlightsCollection.maintainConsistency(e.changed.map((e => Q.y$.Id.create(e.id)))))
                }
                dispose() {
                    this._sub.unsubscribe(), this._highlightsCollection.dispose()
                }
            }

            function V(e) {
                const t = function(e) {
                    const t = e.map((e => ({
                            ...e,
                            boundingBox: E.getBoundingBox(e.rects)
                        }))),
                        n = [...t.slice(0, 1).map((e => ({
                            ranges: [e],
                            boundingBox: e.boundingBox
                        })))];
                    for (const e of t.slice(1)) {
                        let t = !1;
                        const s = 1 * v.mean(e.rects.map((e => e.height)));
                        for (let i = n.length - 1; i >= 0; --i) {
                            const a = n[i];
                            if (E.getMinDistanceBetween(a.boundingBox, e.boundingBox) <= s && a.ranges.some((t => E.getMinDistanceBetween(t.boundingBox, e.boundingBox) <= s))) {
                                t = !0, a.boundingBox = E.getBoundingBox([a.boundingBox, e.boundingBox]), a.ranges.push(e);
                                break
                            }
                        }
                        t || n.push({
                            ranges: [e],
                            boundingBox: e.boundingBox
                        })
                    }
                    return n.map((e => e.ranges))
                }([...e.entries()].filter((e => !!e[1])).map((([e, {
                    rects: t,
                    meta: {
                        range: n,
                        isLocal: s
                    }
                }]) => ({
                    id: M.Range.Id.create(e),
                    range: n,
                    rects: t,
                    isLocal: s
                }))).sort(((e, t) => e.range.start - t.range.start))).map(((e, t) => e.flatMap((({
                    id: e,
                    rects: n,
                    isLocal: s
                }) => n.map((n => ({
                    id: e,
                    rect: n,
                    groupIdx: t,
                    isLocal: s
                }))))).map(((e, t) => ({
                    ...e,
                    rectIdx: t
                }))))).flatMap((e => E.stitchAdjacent(e))).reduce(((e, {
                    id: t,
                    rect: n,
                    rectIdx: s,
                    groupIdx: i,
                    isLocal: a
                }) => {
                    var r;
                    return e.has(t) ? null === (r = e.get(t)) || void 0 === r || r.rects.push({
                        ...n,
                        rectIdx: s
                    }) : e.set(t, {
                        id: t,
                        rects: [{
                            ...n,
                            rectIdx: s
                        }],
                        intensities: [],
                        groupIdx: i,
                        isLocal: a
                    }), e
                }), new Map);
                for (const [n, s] of t.entries()) s.intensities = j(e.get(Q.y$.Id.create(n)).meta.intensity, s.rects);
                return t
            }

            function j(e, t) {
                const [n, s] = e, i = (s - n) / t.reduce(((e, t) => e + t.width), 0), a = [];
                let r = n;
                for (const e of t) {
                    const t = e.width * i;
                    a.push([r, r + t]), r += t
                }
                return t.length > 0 && (a[a.length - 1][1] = s), a
            }
            var W = n(57050),
                Y = n(64015),
                D = n(17889),
                z = n(51996),
                K = n(55360);

            function U({
                start: e,
                end: t,
                meta: {
                    id: n,
                    intensity: s,
                    localInfo: i
                }
            }) {
                return {
                    id: n,
                    range: {
                        start: e,
                        end: t
                    },
                    intensity: s,
                    localInfo: i
                }
            }
            class q {
                constructor(e, t, n, s, i = M.Range.Id.create) {
                    this._changesQueue = e, this._rangePositionManager = t, this._localRangeManager = n, this._changesHighlighter = s, this._nextLocalRangeId = i, this._log = F.Y.create(ue(q.name)), this._changes = new o.xQ, this._debug = !1, this.changes = this._changes.asObservable()
                }
                get empty() {
                    return this._rangePositionManager.empty
                }
                getAllRanges() {
                    return this._rangePositionManager.getAll()
                }
                clear() {
                    const e = this._rangePositionManager.clear();
                    this._localRangeManager.clear(), this._log.debug(`clearing heatmap ranges [${e.join(", ")}]`), this._changes.next({
                        _tag: "remove",
                        removed: e
                    })
                }
                registerRevision(e) {
                    this._changesQueue.registerRevision(e), this._localRangeManager.registerRevision(e)
                }
                revisionFinished(e) {
                    this._changesQueue.revisionFinished(e);
                    const t = this._localRangeManager.clearRangesRegisteredBeforeRevision(e);
                    t.length > 0 && (t.forEach((e => this._deleteRange(e))), this._changes.next({
                        removed: t,
                        _tag: "remove"
                    }))
                }
                onHeatmapMessage(e, t) {
                    const n = this._changesQueue.getChangesSinceRevision(t);
                    this._log.debug(`received heatmap for revision ${t} - ${h.fold((()=>"no local changes"),(e=>`local changes ${JSON.stringify(e.delta.delta.ops)}`))(n)}`, e);
                    const s = [],
                        i = [];
                    e.remove.map(M.Range.Id.fromCapi).forEach((e => {
                        this._deleteRange(e), s.push(e)
                    }));
                    for (const a of e.add.concat(e.update)) {
                        if ("" === a.text.trim()) {
                            this._log.warn(`invalid range #${a.id}, text = [${a.text}] -- dropping`);
                            continue
                        }
                        const e = (0, c.pipe)(n, h.fold((() => ({
                            start: a.begin,
                            end: a.end
                        })), (e => G({
                            start: a.begin,
                            end: a.end
                        }, e.delta))));
                        this._clearLocalRangesIntersecting(e).forEach((e => {
                            s.push(e)
                        }));
                        const r = M.Range.Id.fromCapi(a.id),
                            o = a.intensities || (0, c.pipe)(this._rangePositionManager.getById(r), h.chain((e => e.intensity ? h.some(e.intensity) : h.none)), h.getOrElse((() => [0, 0]))),
                            g = {
                                id: r,
                                range: e,
                                intensity: o
                            };
                        (0, c.pipe)((0, D.nI)(J(this._changesQueue.text, g, this._nextLocalRangeId)), h.fold((() => {
                            this._setRange(g, t, !1), i.push({
                                ...g,
                                localInfo: h.none
                            })
                        }), (e => {
                            this._deleteRange(r), s.push(r), e.forEach((e => {
                                this._setRange(e, t, !0), i.push({
                                    ...e,
                                    localInfo: h.some({
                                        lastRevision: t
                                    })
                                })
                            }))
                        })))
                    }
                    i.length > 0 ? this._changes.next({
                        changed: i,
                        removed: s,
                        _tag: "update"
                    }) : s.length > 0 && this._changes.next({
                        removed: s,
                        _tag: "remove"
                    })
                }
                pushChanges(e) {
                    this._debug && this._log.trace(`processing text changes ${JSON.stringify(e.delta.ops)}`), this._changesQueue.pushChanges(e), (0, c.pipe)(this._rangePositionManager.pushChanges(e), p.tap((t => this._onTextChanges(e, t))))
                }
                _onTextChanges(e, t) {
                    const n = new Set,
                        s = new Map;
                    this._changesHighlighter.pushChanges(e, t).flatMap((e => (0, c.pipe)((0, D.nI)(J(this._changesQueue.text, e, this._nextLocalRangeId)), h.fold((() => [e]), Y.qo)))).forEach((e => {
                        this._setRange(e, this._localRangeManager.lastRevisionSent, !0), s.set(e.id, {
                            ...e,
                            localInfo: h.some({
                                lastRevision: this._localRangeManager.lastRevisionSent
                            })
                        })
                    })), t.collapsed.forEach((e => {
                        this._deleteRange(e.id), n.add(e.id)
                    })), t.resized.forEach((e => {
                        (0, c.pipe)((0, D.nI)(J(this._changesQueue.text, e, this._nextLocalRangeId)), h.fold((() => {
                            s.set(e.id, {
                                ...e,
                                localInfo: e.localInfo
                            })
                        }), (t => {
                            this._deleteRange(e.id), n.add(e.id), t.forEach((e => {
                                this._setRange(e, this._localRangeManager.lastRevisionSent, !0), s.set(e.id, {
                                    ...e,
                                    localInfo: h.some({
                                        lastRevision: this._localRangeManager.lastRevisionSent
                                    })
                                })
                            }))
                        })))
                    })), t.shifted.filter((e => !s.has(e.id))).forEach((e => s.set(e.id, {
                        ...e,
                        localInfo: e.localInfo
                    })));
                    const i = {
                        changed: Array.from(s.values()),
                        removed: Array.from(n)
                    };
                    this._debug && this._log.debug("processed text changes", {
                        ...i,
                        ops: JSON.stringify(e.delta.ops)
                    }), i.changed.length > 0 ? this._changes.next({
                        ...i,
                        _tag: "update"
                    }) : i.removed.length > 0 && this._changes.next({
                        removed: i.removed,
                        _tag: "remove"
                    })
                }
                _clearLocalRangesIntersecting(e) {
                    const t = this._localRangeManager.clearIntersectingRanges(e, (0, W.flow)((e => this._rangePositionManager.getById(e)), h.map((e => e.range))));
                    return t.forEach((e => {
                        this._deleteRange(e), this._log.trace("removed intersecting range", e)
                    })), t
                }
                _deleteRange(e) {
                    this._rangePositionManager.remove(e) || this._log.debug(`range #${e} already removed`)
                }
                _setRange({
                    id: e,
                    range: t,
                    intensity: n
                }, i, a) {
                    a && this._localRangeManager.registerRange(e);
                    const r = {
                        start: 0,
                        end: this._changesQueue.text.length
                    };
                    s.SV.contains(r, t) || this._log.warn(`range #${e} [${t.start}-${t.end}] is out of bounds: ${s.SV.toString(t)} vs ${s.SV.toString(r)}`), this._rangePositionManager.set(e, t, {
                        intensity: n,
                        localInfo: a ? h.some({
                            lastRevision: i
                        }) : h.none
                    })
                }
            }

            function J(e, {
                range: {
                    start: t,
                    end: n
                },
                intensity: s
            }, i) {
                return f.split({
                    start: t,
                    end: n
                }, e).map((e => ({
                    id: i(),
                    range: e,
                    intensity: y.linear(v.lerp(s[0], s[1], (e.start - t) / (n - t)), v.lerp(s[0], s[1], (e.end - t) / (n - t)))
                })))
            }

            function G(e, t) {
                const {
                    changed: n
                } = (0, K.wb)(t, [z.SV.create(e.start, e.end)]);
                return (0, c.pipe)(k.head(n), h.fold((() => e), W.identity), (e => ({
                    start: e.start,
                    end: e.end
                })))
            }
            class X {
                constructor() {
                    this._log = F.Y.create(ue(X.name)), this._revisionsQueue = [], this.clear()
                }
                get lastRevisionSent() {
                    return (0, c.pipe)(k.last(this._revisionsQueue), h.chain((e => e.revision)), h.getOrElse((() => "no-rev")))
                }
                clear() {
                    this._revisionsQueue = [{
                        revision: h.none,
                        ids: new Set
                    }]
                }
                registerRange(e) {
                    (0, c.pipe)(k.last(this._revisionsQueue), p.tap((t => {
                        t.ids.add(e)
                    })))
                }
                registerRevision(e) {
                    this._revisionsQueue.push({
                        revision: h.some(e),
                        ids: new Set
                    })
                }
                clearRangesRegisteredBeforeRevision(e) {
                    return (0, c.pipe)(this._revisionsQueue, k.findLastIndex((t => h.isSome(t.revision) && t.revision.value === e)), h.map((e => {
                        if (e > 0) {
                            return this._revisionsQueue.splice(0, e).flatMap((e => [...e.ids]))
                        }
                        return []
                    })), p.tap((t => {
                        const n = [...t];
                        n.length > 0 && this._log.trace(`clearing local ranges inserted before ${e} - [${n.join(", ").slice(0,100)}]`)
                    })), h.getOrElse((() => [])))
                }
                clearIntersectingRanges(e, t) {
                    const n = [];
                    return this._revisionsQueue.forEach((i => {
                        i.ids.forEach((a => (0, c.pipe)(t(a), h.chain(h.fromPredicate((t => s.SV.intersects(e, {
                            start: t.start,
                            end: t.end
                        })))), p.tap((() => {
                            n.push(a), i.ids.delete(a)
                        })))))
                    })), n
                }
            }
            class Z {
                constructor(e, t) {
                    this._transformRange = t, this._log = F.Y.create(ue(Z.name)), this._positionManager = new K.Xr, this._positionManager.pushChanges($.RI.resFromText(e))
                }
                get empty() {
                    return 0 === this._positionManager.getRegisteredRanges().length
                }
                getAll() {
                    return this._positionManager.getRegisteredRanges().map(this._transformRange)
                }
                getById(e) {
                    return (0, c.pipe)(h.tryCatch((() => this._positionManager.getRange(e))), h.map(this._transformRange))
                }
                set(e, t, n) {
                    h.tryCatch((() => this._positionManager.deregisterRange(e))), h.tryCatch((() => this._positionManager.registerRange(e, z.SV.create(t.start, t.end, {
                        ...n,
                        _range: t
                    }))))
                }
                remove(e) {
                    return (0, c.pipe)(h.tryCatch((() => this._positionManager.deregisterRange(e))), h.fold((() => !1), (() => !0)))
                }
                clear() {
                    return (0, c.pipe)(this._positionManager.getRegisteredRanges(), k.map((e => e.meta.id)), k.map((e => this.remove(e) ? h.some(e) : h.none)), k.compact)
                }
                findClosestToPosition(e, t) {
                    return (0, c.pipe)(this._positionManager.findClosestToPosition(e, (0, W.flow)(this._transformRange, t)), h.map(this._transformRange))
                }
                findIntersection(e) {
                    return this._positionManager.findIntersections(z.SV.create(e.start, e.end)).map(this._transformRange)
                }
                pushChanges(e) {
                    if (e.isEmpty) return this._log.debug("processed text changes: NO OP"), h.none;
                    const t = this._positionManager.pushChanges(e).changed,
                        n = t.filter((e => e.meta._range.end - e.meta._range.start != e.end - e.start && e.end !== e.start)),
                        s = t.filter((e => e.meta._range.end === e.end && e.meta._range.start === e.start && e.end !== e.start)),
                        i = t.filter((e => e.meta._range.end - e.meta._range.start == e.end - e.start && e.meta._range.start !== e.start && e.end !== e.start)),
                        a = t.filter((e => e.end === e.start));
                    return t.forEach((e => {
                        e.meta._range = {
                            start: e.start,
                            end: e.end
                        }
                    })), h.some({
                        affected: s.map(this._transformRange),
                        resized: n.map(this._transformRange),
                        shifted: i.map(this._transformRange),
                        collapsed: a.map(this._transformRange)
                    })
                }
            }
            class ee {
                constructor(e, t, n, s, i, a, o) {
                    this._initialText = e, this._textChanges = t, this._geometryInvalidated = n, this._geometryProvider = s, this._geometryLayout = i, this._heatmapVisible = a, this._connectionId = null, this._changesQueue = new O(this._initialText), this._rangePositionManager = new Z(this._initialText, U), this._localRangeManager = new X, this._changesHighlighter = new T(((e, t) => this._rangePositionManager.findClosestToPosition(e, t)), (e => this._rangePositionManager.findIntersection(e)), (() => this._localRangeManager.lastRevisionSent), (() => this._changesQueue.text)), this._processor = new q(this._changesQueue, this._rangePositionManager, this._localRangeManager, this._changesHighlighter), this._highlights = g.h.create(null), this._version = g.h.create(void 0), this._averageIntensity = g.h.create(0), this._sub = new r.w, this.heatmap = this._highlights.pipe((0, R.w)((e => (null == e ? void 0 : e.geometry) || (0, x.of)(new Map))), (0, b.U)((e => ({
                        highlights: e,
                        version: this._version.get()
                    })))), this.averageIntensity = this._averageIntensity.view(), this._sub.add(this._heatmapVisible.pipe((0, w.x)()).subscribe((e => {
                        var t;
                        null === (t = this._highlights.get()) || void 0 === t || t.dispose(), e && this._highlights.set(new N(this._geometryProvider, this._geometryLayout, this._geometryInvalidated, this._textChanges.pipe(I.h((e => f.isFormattingChange(e.textChanges) || e.textChanges.deltaChange.isEmpty)), b.U((e => e.textMap))), o, this._processor.changes.pipe((0, C.O)({
                            removed: [],
                            changed: this._processor.getAllRanges(),
                            textMap: o(),
                            _tag: "update"
                        }))))
                    })))
                }
                onTextChanges(e) {
                    this._processor.pushChanges(e)
                }
                onFinished(e) {
                    this._processor.revisionFinished(e)
                }
                onNewRemoteRevision(e) {
                    this._processor.registerRevision(e)
                }
                onAttentionHeatmapMessage(e, t) {
                    t !== this._connectionId && null !== this._connectionId && this._processor.clear(), this._connectionId = t;
                    const n = s.QT.create(t, e.rev);
                    this._processor.onHeatmapMessage(e, n), this._averageIntensity.set(y.getAverage(this._processor.getAllRanges()))
                }
                dispose() {
                    var e;
                    null === (e = this._highlights.get()) || void 0 === e || e.dispose(), this._sub.unsubscribe()
                }
            }
            var te = n(27378),
                ne = n(5739),
                se = n(2844),
                ie = n(67521);
            const ae = ({
                heatmap: e,
                size: t,
                style: n,
                className: s,
                felog: i,
                debug: a = !1
            }) => {
                const r = te.useRef(null);
                return (0, ie.A)((0, se.aj)(e, t, ((e, {
                    width: t,
                    height: n
                }) => {
                    const s = null == i ? void 0 : i.attentionHeatmap.renderTime.startMeasure(),
                        o = r.current,
                        h = null == o ? void 0 : o.getContext("2d");
                    if (o && h) {
                        o.width = t, o.height = n, h.clearRect(0, 0, t, n);
                        for (const t of e.highlights.values()) t.rects.forEach(((e, n) => {
                            re(h, t, e, t.intensities[n], a)
                        }));
                        null == s || s.endMeasure()
                    } else null == s || s.cancelMeasure()
                }))), te.createElement("canvas", {
                    ref: r,
                    style: n,
                    className: s,
                    "data-grammarly-part": "heatmap"
                })
            };

            function re(e, t, n, s, i) {
                const [a, r] = y.toColors(s);
                if (a !== r) {
                    const t = e.createLinearGradient(n.left, 0, n.left + n.width, 0);
                    t.addColorStop(0, a), t.addColorStop(1, r), e.fillStyle = t
                } else e.fillStyle = a;
                if (e.fillRect(n.left, n.top, n.width, n.height), i) {
                    e.strokeStyle = "black", e.lineWidth = 1, e.strokeRect(n.left, n.top, n.width, n.height);
                    const s = `${t.id}-${t.groupIdx}-${n.rectIdx}`,
                        i = 12;
                    e.font = `normal normal bold ${i}px Arial`, e.fillStyle = "white", e.fillRect(n.left + 1, n.top + n.height - 1 - i, Math.min(n.width, e.measureText(s).width), Math.min(n.height, i)), e.fillStyle = "red", e.fillText(s, n.left + 1, n.top + n.height - 1)
                }
            }
            const oe = ({
                heatmap: e,
                className: t,
                style: n,
                debug: s
            }) => te.createElement(ne.F.div, {
                className: t,
                style: n
            }, e.pipe((0, b.U)((e => Array.from(e.highlights.values()).flatMap((e => e.rects.map(((t, n) => ({
                ...t,
                intensity: e.intensities[n],
                id: `${e.id}-${n}`,
                highlightId: e.id,
                groupIdx: e.groupIdx,
                isLocal: e.isLocal
            }))))).map((e => te.createElement("div", Object.assign({}, s ? {
                "data-highlight-id": e.highlightId,
                "data-group-idx": e.groupIdx,
                "data-rect-idx": e.rectIdx
            } : {}, {
                key: e.id,
                style: {
                    position: "absolute",
                    width: e.width,
                    height: e.height,
                    left: e.left,
                    top: e.top,
                    background: he(e.intensity),
                    ...s ? {
                        border: "1px solid " + (e.isLocal ? "red" : "black")
                    } : {}
                }
            }))))))));

            function he(e) {
                const [t, n] = y.toColors(e);
                return `linear-gradient(to right, ${t}, ${n})`
            }
            var ge = n(23866);
            class ce {
                constructor(e, t, n, s, i) {
                    this._useHeatmapCanvas = e, this._service = t, this._visible = n, this._textFieldLayout = s, this._felog = i, this._debug = !1
                }
                get view() {
                    return te.createElement(ne.F.Fragment, null, this._visible.view((e => e ? this._useHeatmapCanvas ? te.createElement(ae, {
                        debug: this._debug,
                        felog: this._felog,
                        heatmap: this._service.heatmap,
                        size: this._textFieldLayout.scrollSize.behavior,
                        className: ge.heatmap
                    }) : te.createElement(oe, {
                        debug: this._debug,
                        heatmap: this._service.heatmap,
                        className: ge.heatmap
                    }) : null)))
                }
            }
            var le = n(84966);
            class de {
                constructor() {
                    this._takeawaysFeedback = new Map, this._log = F.Y.create("TakeawayFeedbackStore")
                }
                registerFeedback(e, t) {
                    this._takeawaysFeedback.get(e) !== t && (this._takeawaysFeedback.set(e, t), this._log.debug(`Feedback "${t}" stored for alert #${e}]`))
                }
                deleteFeedback(e) {
                    this._takeawaysFeedback.delete(e), this._log.debug(`Removed feedback for alert #${e}`)
                }
                get addFeedbackToRawAlertTransformer() {
                    return e => {
                        if (le.wQ.isTakeaway(e)) {
                            const t = this._takeawaysFeedback.get(e.id);
                            return t ? {
                                ...e,
                                extra_properties: {
                                    ...e.extra_properties,
                                    takeawayFeedback: t
                                }
                            } : e
                        }
                        return e
                    }
                }
            }

            function ue(e) {
                return `ReadersAttn-${e}`
            }
            class pe {
                constructor(e, t, n, s, c, l, d, u, p, _) {
                    this._useHeatmapCanvas = e, this._textObserver = t, this._geometryInvalidated = n, this._geometryProvider = s, this._geometryLayout = c, this._textFieldLayout = l, this._getAlertById = d, this._gnar = u, this._felog = p, this._statistics = _, this._subs = new r.w, this.heatmapVisible = g.h.create(!1), this._heatmapReceived = g.h.create(!1), this._messages = g.h.create(h.none), this._rawChecklist = g.h.create({
                        wordsCount: 0,
                        items: new Map
                    }), this.rawChecklist = this._rawChecklist.view(), this.tracking = new m(this._gnar, this._statistics, (() => this._heatmapService.averageIntensity.get()), (e => this._getAlertById(e))), this._textChangesSubject = new o.xQ, this._revisionMeasures = new i.P(50), this._heatmapService = new ee(this._textObserver.getCurrentTextMap().getPlainText(), this._textChangesSubject, this._geometryInvalidated, this._geometryProvider, this._geometryLayout, this.heatmapVisible, (() => this._textObserver.getCurrentTextMap())), this._heatmapController = new ce(this._useHeatmapCanvas, this._heatmapService, this.heatmapVisible, this._textFieldLayout, this._felog), this.takeawaysFeedbackStore = new de, this.heatmapView = this._heatmapController.view, this.heatmapReceived = this._heatmapReceived.view(), this.messages = this._messages.view(), this._subs.add(this._textObserver.contentChanges.immediate.subscribe((e => this._textChangesSubject.next({
                        textChanges: e,
                        textMap: this._textObserver.getCurrentTextMap()
                    })))), this._subs.add(this._textChangesSubject.pipe(a.d.measure(this._felog.attentionHeatmap.textChangeProcessingTime.measure)).subscribe((e => {
                        this._heatmapService.onTextChanges(e.textChanges.deltaChange)
                    })))
                }
                get addFeedbackToRawAlertTransformer() {
                    return this.takeawaysFeedbackStore.addFeedbackToRawAlertTransformer
                }
                onNewRemoteRevision(e) {
                    const t = this._revisionMeasures.enqueue({
                        revision: e,
                        measure: this._felog.attentionHeatmap.responseTime.startMeasure()
                    });
                    null == t || t.measure.cancelMeasure(), this._heatmapService.onNewRemoteRevision(e)
                }
                onAttentionHeatmapMessage(e, t) {
                    var n;
                    this._heatmapReceived.set(!0);
                    const i = s.QT.create(t, null !== (n = e.originalRev) && void 0 !== n ? n : e.rev),
                        a = this._revisionMeasures.toArray().find((e => e.revision === i));
                    a && (this._revisionMeasures.delete(a), a.measure.endMeasure());
                    const r = this._felog.attentionHeatmap.responseProcessingTime.startMeasure();
                    this._heatmapService.onAttentionHeatmapMessage(e, t), r.endMeasure()
                }
                onAttentionInfoMessage(e) {
                    const t = new Map(this._rawChecklist.get().items);
                    e.checklist.forEach((e => t.set(e.id, e))), this._rawChecklist.set({
                        wordsCount: e.wordsCount,
                        items: t
                    }), this._messages.set(h.some({
                        headerMessage: e.headerMessage,
                        predictionMessage: e.predictionMessage
                    }))
                }
                onFinished(e) {
                    this._heatmapService.onFinished(e)
                }
                dispose() {
                    this._subs.unsubscribe(), this._heatmapService.dispose()
                }
            }
        },
        23866: e => {
            e.exports = {
                heatmap: "_2rx7l",
                fadeIn: "_3nM-b"
            }
        }
    }
]);
