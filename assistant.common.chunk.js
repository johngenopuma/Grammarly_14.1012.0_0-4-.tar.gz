(self.webpackChunk = self.webpackChunk || []).push([
    [721, 806], {
        51897: (e, t, i) => {
            var a = i(25682),
                n = "chrome-extension://__MSG_@@extension_id__/",
                s = "moz-extension://__MSG_@@extension_id__/",
                r = self.GR_RESOURCE_ROOT || n,
                o = self.GR_RESOURCE_ROOT || s;
            e.exports = {
                __css: a.toString().replace(new RegExp(n, "g"), r).replace(new RegExp(s, "g"), o),
                ...a.locals
            }
        },
        16037: (e, t, i) => {
            i.d(t, {
                t: () => R
            });
            var a = i(32952),
                n = i(95300),
                s = i(24209),
                r = i(80900),
                o = i(85985),
                l = i(77176),
                c = i(77150),
                d = i(50628),
                p = i(40273),
                h = i(90361),
                m = i(36991);
            var u = i(34311),
                g = i(62337),
                v = i(95384),
                f = i(63919),
                w = i(30067),
                _ = i(74850),
                b = i(93508);
            class y {
                constructor() {
                    this._mapByHighlightId = new Map, this._mapByAlertId = new Map, this._highlightDataChanged = new a.xQ, this.highlightDataChanged = this._highlightDataChanged
                }
                getByHighlightId(e) {
                    return this._mapByHighlightId.get(e)
                }
                getByAlertId(e) {
                    const t = this._mapByAlertId.get(e) || new Set;
                    return Array.from(t).map((e => this._mapByHighlightId.get(e))).filter((e => !!e))
                }
                get(e) {
                    return this._mapByHighlightId.get(e)
                }
                has(e) {
                    return this._mapByHighlightId.has(e)
                }
                set(e, t) {
                    this._mapByHighlightId.set(e, t);
                    const i = this._mapByAlertId.get(t.alertId) || new Set;
                    i.add(e), this._mapByAlertId.set(t.alertId, i), this._highlightDataChanged.next(e)
                }
                delete(e) {
                    const t = this._mapByHighlightId.get(e);
                    if (t) {
                        const i = this._mapByAlertId.get(t.alertId);
                        void 0 !== i && (i.delete(e), 0 === i.size && this._mapByAlertId.delete(t.alertId)), this._mapByHighlightId.delete(e)
                    }
                    this._highlightDataChanged.next(e)
                }
                forEach(e) {
                    this._mapByHighlightId.forEach(e)
                }
                getHighlightDataObs(e) {
                    return this._highlightDataChanged.pipe(o.h((t => t === e)), l.U((() => this.getByHighlightId(e))), b.O(this.getByHighlightId(e)))
                }
            }
            class E {
                constructor(e, t, i, a, n = (() => f.E9.zero), s = _.Y.create(E.name)) {
                    this._denaliHighlights = e, this._getFluidHighlights = t, this._getTextMap = i, this._getParentRect = a, this._getParentScroll = n, this._log = s
                }
                register(e, t, i, a) {
                    if (null !== e) {
                        if (this._denaliHighlights.has(e)) return this.update(e, t, i, a); {
                            const n = new v.Fd(e, t, this._getFluidHighlights(), this._getParentRect, this._getParentScroll),
                                s = {
                                    id: e,
                                    alertId: a.alertId,
                                    mark: n,
                                    visualization: i
                                };
                            this._denaliHighlights.set(e, s);
                            const r = this._getTextMap().getPlainText();
                            return this._getFluidHighlights().addHighlight(e, (0, w.rX)((0, w.mp)(n.range), r), a), s
                        }
                    }
                    return null
                }
                remove(e) {
                    this._denaliHighlights.has(e) ? (this._getFluidHighlights().removeHighlights([e]), this._denaliHighlights.delete(e)) : this._log.warn(`can't remove mark #${e}, doesn't exist`)
                }
                update(e, t, i, a) {
                    const n = this._denaliHighlights.get(e);
                    if (n) {
                        this._denaliHighlights.set(e, {
                            ...n,
                            visualization: i
                        });
                        const s = this._getTextMap().getPlainText();
                        return this._getFluidHighlights().updateHighlight(e, (0, w.rX)(t.meta.range(), s), a), n
                    }
                    return this._log.warn("cannot update not existing highlight", e), null
                }
                clearAll() {
                    this._denaliHighlights.forEach((e => {
                        this._getFluidHighlights().removeHighlights([e.id])
                    }))
                }
            }
            var k = i(55073),
                S = i(5817),
                C = i(25938),
                I = i(64450),
                A = i(59443),
                M = i(24645),
                x = i(45586),
                L = i(22232),
                T = i(95574),
                F = i(5114),
                P = i(95195);
            class R {
                constructor(e, t, i, r, c, d, p = _.Y.create(R.name), h, m) {
                    this._highlights = e, this._textObserver = t, this._replacementService = i, this._layout = r, this._scroller = c, this._selectedHighlightsTracker = d, this._log = p, this._requestAwaitService = h, this._formattingService = m, this._subs = new x.w.Keeper, this._disposed = !1, this._highlightedAlertId = null, this._highlightsDataStore = new y, this._highlightUpdater = new E(this._highlightsDataStore, (() => this._highlights), (() => this._textObserver.getTextSource()), (() => {
                        const e = this._layout.textField.rect.getApproximate();
                        return g.Pf.create({
                            ...e.client,
                            ...e.size
                        })
                    }), (() => this._layout.textField.scroll.getApproximate())), this.highlightHoverProvider = {
                        getHoveredStateBehavior: e => this._highlightsDataStore.getHighlightDataObs(e).pipe(l.U((e => e && e.visualization.type === v.sO.Change.VisualState.Type.highlighted ? {
                            [v.sO.Change.VisualState.Source.sidebar]: u.pc.hovered_needs_attention,
                            [v.sO.Change.VisualState.Source.text]: u.pc.hovered,
                            [v.sO.Change.VisualState.Source.api]: this._highlightedAlertId === e.alertId ? u.pc.hovered : u.pc.none
                        } [e.visualization.source] : u.pc.none)))
                    }, this._updateContentsBuffer = new a.xQ, this._flushUpdater = new a.xQ, this._echoChanges = new a.xQ, this.changes = s.T(this._echoChanges, this._textObserver.contentChanges.async.pipe((0, o.h)((e => e.changes.length > 0)), (0, l.U)((({
                        deltaChange: e
                    }) => e)))), this.getContents = (e, t) => {
                        if (this._log.trace(`getContents, ${e}, ${t}`), this._formattingService) {
                            const i = this._textObserver.getTextSource().getRichText();
                            return C.RI.unsafeRes(void 0 !== e ? i.slice(e, void 0 !== t ? e + t : void 0) : i)
                        } {
                            const i = void 0 !== e ? this.getText().slice(e, void 0 !== t ? e + t : void 0) : this.getText();
                            return C.RI.resFromText(i)
                        }
                    }, this.activeMarks = new n.X(F.none), this.contentUpdated = new a.xQ, this.hoveredMarks = new n.X(F.none), this.textChangedAfterPaste = new a.xQ, this.activeWord = new n.X(F.none), this.clickedWord = new n.X(F.none), this.ongoingSelection = new n.X(!1), this._log.info(`${R.name} created`), this._subs.push(this._subscribeToContentUpdates(), this._subscribeToSelectedHighlight(), this._trackFocusedAlert())
                }
                _trackFocusedAlert() {
                    return this._highlightsDataStore.highlightDataChanged.pipe(l.U((e => this._highlightsDataStore.getByHighlightId(e))), o.h((e => !!e))).subscribe((e => {
                        this._highlightedAlertId === e.alertId || e.visualization.type !== v.sO.Change.VisualState.Type.highlighted || e.visualization.source !== v.sO.Change.VisualState.Source.text && e.visualization.source !== v.sO.Change.VisualState.Source.sidebar ? e.alertId === this._highlightedAlertId && e.visualization.type === v.sO.Change.VisualState.Type.visible && (this._highlightedAlertId = null, this._log.trace(`Mark ${e.id} unfocused - alertId ${e.alertId}`)) : (this._highlightedAlertId = e.alertId, this._log.trace(`Mark ${e.id} focused - alertId ${e.alertId}`))
                    }))
                }
                pushChanges(e, t) {
                    this._log.trace("pushChanges", {
                        change: e,
                        source: t
                    }), C.RI.isFlush(e) ? this._flushUpdater.next() : C.RI.isReset(e) ? m.s.deltaEq.equals(e.delta, this.getContents().delta) ? this._echoChanges.next(e) : this._log.warn("Got unknown reset") : this._updateContents(e.delta, t)
                }
                getText() {
                    return this._log.trace("getText"), this._formattingService ? (0, k.l)(this._textObserver.getTextSource().getRichText(), "") : this._textObserver.getTextSource().getPlainText()
                }
                getTextLength() {
                    return this._log.trace("getTextLength"), this.getText().length
                }
                flushChanges() {
                    this._log.trace("flushChanges")
                }
                getCursor() {
                    return this._log.trace("getCursor"), A.Y1.empty
                }
                setCursor(e, t, i) {
                    return this._log.trace("setCursor", {
                        _index: e,
                        _length: t,
                        _source: i
                    }), P.right(void 0)
                }
                getLastPossibleCursorPosition() {
                    return this._log.trace("getLastPossibleCursorPosition"), 0
                }
                _doMarkAction(e) {
                    const t = u.y$.Id.create(e.id),
                        i = e.meta.capiAlertId;
                    switch (e.action) {
                        case M.v.Change.ActionType.create:
                            const a = this._highlightUpdater.register(t, e, e.meta.visualState, {
                                alertId: i,
                                highlightId: t,
                                highlightColor: e.meta.highlightColor,
                                highlightDisplayFormat: e.meta.highlightDisplayFormat,
                                highlightDisappearOnHoverDelay: e.meta.highlightDisappearOnHoverDelay
                            });
                            return (null == a ? void 0 : a.mark) || null;
                        case M.v.Change.ActionType.update:
                            const n = this._highlightUpdater.update(t, e, e.meta.visualState, {
                                alertId: i,
                                highlightId: t,
                                highlightColor: e.meta.highlightColor,
                                highlightDisplayFormat: e.meta.highlightDisplayFormat,
                                highlightDisappearOnHoverDelay: e.meta.highlightDisappearOnHoverDelay
                            });
                            return (null == n ? void 0 : n.mark) || null;
                        case M.v.Change.ActionType.remove:
                            return this._highlightUpdater.remove(t), null;
                        default:
                            (0, L.vE)(e)
                    }
                }
                changeMarks(e) {
                    return this._disposed ? (this._log.debug("changeMarks called after disposed, returning empty result"), M.v.Change.Result.getEmpty()) : (this._log.trace("changeMarks", {
                        rawMarks: e
                    }), e.reduce(((e, t) => {
                        switch (t.action) {
                            case M.v.Change.ActionType.create:
                                e.created.set(t.id, P.fromNullable(new Error("Cannot create mark"))(this._doMarkAction(t)));
                                break;
                            case M.v.Change.ActionType.update:
                                e.updated.set(t.id, P.fromNullable(new Error("Cannot update mark"))(this._doMarkAction(t)));
                                break;
                            case M.v.Change.ActionType.remove:
                                this._doMarkAction(t), e.removed.set(t.id, P.right(void 0))
                        }
                        return e
                    }), M.v.Change.Result.getEmpty()))
                }
                scrollToMark(e, t) {
                    return this._log.trace("scrollToMark", {
                        mark: e,
                        opts: t
                    }), this._scroller.scrollToMark(e, t)
                }
                _subscribeToContentUpdates() {
                    return this._updateContentsBuffer.pipe((0, c.R)((() => (0, s.T)((0, r.H)((0, S.Xd)(20)), this._flushUpdater).pipe((0, d.P)()))), (0, o.h)((e => e.length > 0)), (0, l.U)((e => e.reduce(((e, t) => e.compose(t)), new I.Delta)))).subscribe((e => {
                        const t = this._replacementService.performBatchReplacements((i = e, i.reduce((({
                            actions: e,
                            index: t
                        }, i) => {
                            const a = e[0];
                            return m.s.isInsertString(i) ? (e.unshift({
                                pos: {
                                    start: t,
                                    end: t
                                },
                                value: i.insert
                            }), {
                                actions: e,
                                index: t
                            }) : m.s.isInsertEmbed(i) ? {
                                actions: e,
                                index: t + 1
                            } : m.s.isRetain(i) ? {
                                actions: e,
                                index: t + i.retain
                            } : m.s.isDelete(i) ? (a && a.pos.start === a.pos.end && a.pos.end === t ? a.pos = {
                                ...a.pos,
                                end: a.pos.end + i.delete
                            } : e.unshift({
                                pos: {
                                    start: t,
                                    end: t + i.delete
                                },
                                value: ""
                            }), {
                                actions: e,
                                index: t + i.delete
                            }) : void(0, h.vE)(i)
                        }), {
                            actions: [],
                            index: 0
                        }).actions.reduce(((e, t) => (e.length && e[e.length - 1].value && e[e.length - 1].pos.start === t.pos.start ? e[e.length - 1].value = `${t.value}${e[e.length-1].value}` : e.push(t), e)), []))).then((() => {
                            const t = (e => e.reduce((({
                                formattings: e,
                                index: t
                            }, i) => p.m.hasFormatting(i) ? m.s.isInsertString(i) ? (e.push({
                                range: {
                                    start: t,
                                    end: "\n" === i.insert ? t : t + i.insert.length
                                },
                                formatting: i.attributes
                            }), {
                                formattings: e,
                                index: t + i.insert.length
                            }) : m.s.isInsertEmbed(i) ? {
                                formattings: e,
                                index: t + 1
                            } : m.s.isRetain(i) ? (e.push({
                                range: {
                                    start: t,
                                    end: t + i.retain
                                },
                                formatting: i.attributes
                            }), {
                                formattings: e,
                                index: t + i.retain
                            }) : {
                                formattings: e,
                                index: t
                            } : m.s.isInsertString(i) ? {
                                formattings: e,
                                index: t + i.insert.length
                            } : m.s.isInsertEmbed(i) ? {
                                formattings: e,
                                index: t + 1
                            } : m.s.isRetain(i) ? {
                                formattings: e,
                                index: t + i.retain
                            } : m.s.isDelete(i) ? {
                                formattings: e,
                                index: t
                            } : void(0, h.vE)(i)), {
                                formattings: [],
                                index: 0
                            }).formattings)(e);
                            this._formattingService && t.length && (this._log.trace("Have formattings, applying", t), t.forEach((e => {
                                this._formattingService && this._formattingService.apply(e.range, e.formatting)
                            })))
                        }), (() => {
                            this._log.warn("Failed to apply batch replacements")
                        }));
                        var i;
                        this._requestAwaitService && this._requestAwaitService.addRequest(t)
                    }))
                }
                _subscribeToSelectedHighlight() {
                    return this._selectedHighlightsTracker.pipe((0, l.U)((e => e.map((e => {
                        var t;
                        return null === (t = this._highlightsDataStore.get(e)) || void 0 === t ? void 0 : t.mark
                    })).filter((e => !!e))))).subscribe((e => this.activeMarks.next(F.some(e))))
                }
                _updateContents(e, t) {
                    this._updateContentsBuffer.next((0, k.AQ)(e))
                }
                getSelectionRect() {
                    throw this._log.trace("getSelectionRect"), Error("not implemented")
                }
                setContents(e) {
                    this._log.trace("setContents", {
                        _value: e
                    })
                }
                getHTML() {
                    return this._log.trace("getHTML"), ""
                }
                getPossibleCursorPosition(e, t) {
                    return this._log.trace("getPossibleCursorPosition", {
                        _x: e,
                        _y: t
                    }), T.tryCatchError((() => {
                        throw new Error("Not implemented")
                    }))
                }
                dispose() {
                    this._highlightUpdater.clearAll(), this._subs.dispose(), this._log.info(`${R.name} disposed`), this._disposed = !0
                }
            }
        },
        18126: (e, t, i) => {
            i.d(t, {
                f: () => o
            });
            var a = i(95300),
                n = i(2844),
                s = i(66310),
                r = i(34311);
            class o {
                constructor(e) {
                    this._originalHoverProvider = e, this._assistantHoverProviderSbj = new a.X(null)
                }
                setAssistantHover(e) {
                    this._assistantHoverProviderSbj.next(e)
                }
                removeAssistantHover() {
                    this._assistantHoverProviderSbj.next(null)
                }
                getHoveredStateBehavior(e) {
                    const t = this._originalHoverProvider.getHoveredStateBehavior(e);
                    return this._assistantHoverProviderSbj.pipe((0, s.w)((i => null == i ? t : (0, n.aj)(t, i.getHoveredStateBehavior(e), ((e, t) => t !== r.pc.none ? t : e)))))
                }
            }
        },
        8467: (e, t, i) => {
            i.d(t, {
                t: () => c
            });
            var a = i(40327),
                n = i(44586),
                s = i(30067),
                r = i(95384),
                o = i(95574),
                l = i(95195);

            function c({
                scrollToMarkRect: e,
                scrollToRange: t
            }) {
                return {
                    scrollToMark: (i, c) => new n.y((n => (0, a.pipe)(r.Fd.getMarkRect(i), o.chainLeft((() => (t((0, s.mp)(i.range)), r.Fd.getMarkRect(i)))), l.fold((() => {
                        n.error(new Error(`Cannot get mark's rect: ${i.id}`))
                    }), (t => {
                        n.next(void 0), e(t, c)
                    })))))
                }
            }
        },
        93620: (e, t, i) => {
            i.r(t), i.d(t, {
                AssistantController: () => as,
                AssistantControllerInjectedParams: () => a.AssistantControllerInjectedParams,
                AssistantService: () => us,
                AssistantServiceInjectedParams: () => n.AssistantServiceInjectedParams,
                LocalAssistantHighlightCollection: () => s.c
            });
            var a = {};
            i.r(a), i.d(a, {
                e: () => as
            });
            var n = {};
            i.r(n), i.d(n, {
                e: () => us
            });
            var s = i(45662),
                r = i(40327),
                o = i(27378),
                l = i(74850),
                c = i(69184),
                d = i(41398),
                p = i(77176),
                h = i(93508),
                m = i(46861),
                u = i(17771),
                g = i(57050),
                v = i(26328),
                f = i(75003),
                w = i(40018),
                _ = i(4390),
                b = i(19751),
                y = i(16118),
                E = i(85985),
                k = i(92843),
                S = i(83078),
                C = i(5114);
            var I, A = i(90361),
                M = i(66896),
                x = i(14601),
                L = i(76974),
                T = i(28043),
                F = i(2844),
                P = i(34383),
                R = i(15215),
                V = i(35416),
                O = i(71249),
                N = i(73975);

            function D(e) {
                return f.a.isReadersAttention(e) || f.a.isReadersAttentionHelp(e)
            }! function(e) {
                e.ok = "ok", e.warning = "warning", e.feedback = "feedback"
            }(I || (I = {}));
            class U {
                constructor(e, t, i, a, n, s, o) {
                    this._readersAttentionFeature = e, this._checklistItemsCollection = t, this._assistantLayoutVM = i, this._alertsCollection = a, this._alertsReader = n, this._assistantLensState = s, this._takeawayAlertChanges = o, this._subs = new x.w, this.predictionCardState = (0, r.pipe)(this._readersAttentionFeature, C.fold((() => L.of(C.none)), (e => function(e, t, i) {
                        return F.aj([e.messages, e.heatmapReceived, t]).pipe(E.h((([e, t, i]) => C.some(e) && t && i.size > 0)), p.U((([e, t, a]) => (0, r.pipe)(e, C.map((e => ({
                            message: e.predictionMessage,
                            icon: Array.from(a.values()).every(H) ? I.ok : Array.from(a.values()).every((e => (0, r.pipe)(e.suggestionsView, C.map(function(e) {
                                return t => (0, r.pipe)(t.alertIds, (0, v.UI)((0, g.flow)(e.getById, C.filter((e => w.bZ.isTakeaway(e) && e.takeawayIsLikelyToBeRead && C.isNone(e.takeawayFeedback))))), O.every(C.isSome))
                            }(i)), C.getOrElse((() => C.isSome(e.successView) || e.emptyView.checked))))) ? I.feedback : I.warning,
                            alertsCount: C.some(G(a))
                        })))))), h.O(C.none))
                    }(e, this._checklistItemsCollection, this._alertsReader)))), this._subs.add(this._handleHeatmapVisibilityAndNavigationTracking()), this._subs.add(this._trackChecklistItemExpand()), (0, r.pipe)(this._readersAttentionFeature, S.tap((e => {
                        var t, i;
                        this._subs.add((t = this._takeawayAlertChanges, i = e.takeawaysFeedbackStore, t.subscribe((e => {
                            Array.from(e.changed.values()).forEach((e => {
                                (0, r.pipe)(u.Y(C.option)({
                                    rawId: (0, r.pipe)(e, w.bZ.getRawId),
                                    feedback: e.takeawayFeedback
                                }), S.tap((({
                                    rawId: e,
                                    feedback: t
                                }) => {
                                    i.registerFeedback(e, t)
                                })))
                            })), Array.from(e.removed.values()).forEach((e => {
                                (0, r.pipe)(e, w.bZ.getRawId, S.tap((e => {
                                    i.deleteFeedback(e)
                                })))
                            }))
                        }))))
                    })))
                }
                open(e) {
                    this._assistantLayoutVM.pushActiveView({
                        type: f.a.Type.readersAttention,
                        caller: e
                    })
                }
                showHelp(e) {
                    this._assistantLayoutVM.pushActiveView({
                        type: f.a.Type.readersAttentionHelp,
                        caller: e
                    }), this._trackOnShowHelp(e)
                }
                dispose() {
                    D(this._assistantLayoutVM.activeView.get()) && (0, r.pipe)(this._readersAttentionFeature, S.tap((e => e.heatmapVisible.set(!1)))), D(this._assistantLayoutVM.activeView.get()) && this._trackOnReadersAttentionHide(), this._subs.unsubscribe()
                }
                _handleHeatmapVisibilityAndNavigationTracking() {
                    return this._assistantLayoutVM.activeView.pipe(T.x(((e, t) => e.type === t.type)), h.O(null), y.G()).subscribe((([e, t]) => {
                        (0, r.pipe)(this._readersAttentionFeature, S.tap((e => {
                            D(t) && !e.heatmapVisible.get() ? e.heatmapVisible.set(!0) : !D(t) && e.heatmapVisible.get() && e.heatmapVisible.set(!1)
                        }))), !f.a.isReadersAttention(t) || e && f.a.isReadersAttentionHelp(e) ? !D(t) && e && D(e) && this._trackOnReadersAttentionHide() : this._trackOnReadersAttentionShow(t.caller)
                    }))
                }
                _trackChecklistItemExpand() {
                    return this._assistantLensState.pipe(p.U((e => (0, r.pipe)(C.fromPredicate(V.nL.hasItems)(e), C.map(V.nL.Prism.getLens().get), C.filter((e => e.id === M.R.SpecialId.PredictionTakeaways)), C.chain(V.In.getActiveItemOfType(R.d.isChecklistItem)), C.map((e => {
                        return {
                            id: (t = e.id, i = M.R.SpecialId.PredictionTakeaways, P.T.Id.create(t.substr(i.length + 1) || t)),
                            title: (0, r.pipe)(e.itemMeta.miniTitle, C.getOrElse((() => e.itemMeta.title))),
                            checked: B(e),
                            numAlerts: R.d.isChecklistItemWithAlerts(e) ? e.alerts.length : 0
                        };
                        var t, i
                    }))))), T.x(C.getEq(N.contramap((e => e.id))(N.eqString)).equals), p.U(C.getOrElse(g.constNull)), E.h(A.fQ)).subscribe((e => (0, r.pipe)(this._readersAttentionFeature, S.tap((t => t.tracking.onChecklistItemExpand(e))))))
                }
                _trackOnReadersAttentionShow(e) {
                    (0, r.pipe)(this._readersAttentionFeature, C.chain((e => (0, r.pipe)(u.g(C.option)(e.messages.get(), j(this._checklistItemsCollection.get())), C.map((t => ({
                        feature: e,
                        predictionMessage: t[0].predictionMessage,
                        checklistInfo: t[1]
                    })))))), S.tap((({
                        feature: t,
                        predictionMessage: i,
                        checklistInfo: a
                    }) => {
                        t.tracking.onOpen(a, i, this._getNumAlerts(), e)
                    })))
                }
                _trackOnReadersAttentionHide() {
                    (0, r.pipe)(this._readersAttentionFeature, C.chain((e => (0, r.pipe)(j(this._checklistItemsCollection.get()), C.map((t => ({
                        feature: e,
                        checklistInfo: t
                    })))))), S.tap((({
                        feature: e,
                        checklistInfo: t
                    }) => {
                        e.tracking.onClose(t, this._getNumAlerts())
                    })))
                }
                _trackOnShowHelp(e) {
                    (0, r.pipe)(this._readersAttentionFeature, S.tap((t => {
                        t.tracking.onHelpScreenShow(e)
                    })))
                }
                _getNumAlerts() {
                    return (0, r.pipe)(this._alertsCollection.get(), _.p.reduce({
                        takeaway: 0,
                        nonTakeaway: 0
                    }, ((e, t) => {
                        const i = w.bZ.isTakeaway(t.alert),
                            a = w.bZ.belongsToPredictionTakeaways(t.alert) && !i;
                        return {
                            takeaway: e.takeaway + (i ? 1 : 0),
                            nonTakeaway: e.nonTakeaway + (a ? 1 : 0)
                        }
                    })))
                }
            }

            function B(e) {
                return R.d.isChecklistItemWithAlerts(e) && "single" === e.viewKind || R.d.isChecklistItemEmpty(e) && e.itemMeta.checked
            }

            function H(e) {
                return C.isNone(e.suggestionsView) && (C.isSome(e.successView) || e.emptyView.checked)
            }

            function j(e) {
                const t = Array.from(e.values()).sort(((e, t) => e.rank - t.rank));
                return (0, r.pipe)(t.map((e => ({
                    checked: H(e),
                    message: (0, r.pipe)(e.suggestionsView, S.orElse(e.successView), C.map((e => (0, r.pipe)(e.miniTitle, C.getOrElse((() => e.title))))), C.getOrElse((() => (0, r.pipe)(e.emptyView.miniTitle, C.getOrElse((() => e.emptyView.title))))))
                }))), v.nI)
            }

            function G(e) {
                return (0, r.pipe)(Array.from(e.values()), O.reduce(0, ((e, t) => e + (0, r.pipe)(t.suggestionsView, C.map((e => e.alertIds.length)), C.alt((() => (0, r.pipe)(t.successView, C.map((() => 1))))), C.getOrElse((() => 0))))))
            }
            var Z = i(79921),
                W = i(19217);
            const q = ({
                message: e,
                emoji: t,
                emojiId: i,
                icon: a,
                iconPartName: n
            }) => o.createElement("div", {
                className: W.insight
            }, t && i && o.createElement("div", {
                className: W.insight__inline_icon
            }, o.createElement(Z.dy, {
                unicodeHexArray: [i],
                unicodeLiteral: t
            })), a && o.createElement("div", {
                className: W.insight__inline_icon,
                "data-grammarly-part": n
            }, a), o.createElement("div", {
                className: W.insight__inline_text
            }, e));
            var z = i(53112);
            const Y = () => o.createElement("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
                fill: z.Z.red50
            }), o.createElement("path", {
                d: "M8.94827 4H7.05196L7.22242 10.1108H8.78208L8.94827 4ZM8.00225 12.8381C8.5477 12.8381 9.02071 12.3821 9.02498 11.8153C9.02071 11.2571 8.5477 10.8011 8.00225 10.8011C7.43975 10.8011 6.97526 11.2571 6.97952 11.8153C6.97526 12.3821 7.43975 12.8381 8.00225 12.8381Z",
                fill: z.Z.neutral0
            }));
            var K, Q = i(46547),
                $ = i(88326),
                X = i(94793),
                J = i(3656),
                ee = i(18208),
                te = i(5739),
                ie = i(31881),
                ae = i(98029);
            ! function(e) {
                e.hidden = "hidden", e.zero = "zero", e.visible = "visible"
            }(K || (K = {}));
            const ne = ({
                    predictionsVM: e
                }) => ie.UI.mount(de, e.previewFlow),
                se = ie.UI.Grid.make((({
                    slots: e
                }) => o.createElement("div", {
                    className: ae.predictions
                }, o.createElement("div", {
                    className: ae.predictions__header
                }, "Predictions"), e.children))),
                re = ({
                    children: e,
                    count: t,
                    dataPartName: i
                }) => o.createElement(Q.Z, {
                    kind: "assistant-priority-lens",
                    dataPartName: i,
                    marginBottom: "12px"
                }, o.createElement("div", {
                    className: ae.predictions__card
                }, e, t > 0 && o.createElement("div", {
                    className: ae.counterContainer
                }, o.createElement(J.CL, null, t)))),
                oe = ie.UI.Node.make((({
                    state: e,
                    notify: t
                }) => o.createElement($.M, {
                    clickHandler: t("select")
                }, o.createElement(te.F.Fragment, null, e.pipe(p.U((e => o.createElement(re, {
                    count: e.alertsCount,
                    dataPartName: "emogenie-prediction-card"
                }, o.createElement(q, {
                    key: "tone",
                    message: "off" === e.emotion.brandToneLabel ? o.createElement(o.Fragment, null, "May sound ", o.createElement("span", {
                        className: ae.predictions__off_brand
                    }, "off-brand")) : `Sounds ${e.emotion.name}`,
                    emoji: e.emotion.emoji,
                    emojiId: e.emotion.emojiId
                }))))))))),
                le = ie.UI.Node.make((({
                    state: e,
                    notify: t
                }) => o.createElement($.M, {
                    clickHandler: t("select")
                }, o.createElement(te.F.Fragment, null, e.pipe(p.U((e => o.createElement(re, {
                    count: e.alertsCount,
                    dataPartName: "readers-attention-prediction-card"
                }, o.createElement(q, {
                    key: "readersAttention",
                    message: ee.capitalize(e.message),
                    icon: e.icon === I.ok ? o.createElement(X.JO.ValidationOk, {
                        width: 16
                    }) : e.icon === I.warning ? o.createElement(Y, null) : e.icon === I.feedback ? o.createElement(X.JO.Megaphone, {
                        width: 16
                    }) : (0, A.vE)(e.icon),
                    iconPartName: e.icon === I.ok ? "icon-ok" : e.icon === I.warning ? "icon-warning" : e.icon === I.feedback ? "icon-feedback" : (0, A.vE)(e.icon)
                }))))))))),
                ce = ie.UI.Group.make({
                    tone: pe(oe),
                    readersAttention: pe(le)
                }),
                de = ie.UI.Union.make("kind", {
                    [K.hidden]: ie.UI.Node.empty,
                    [K.zero]: ie.UI.Node.empty,
                    [K.visible]: ie.UI.Composite.make(se, ce)
                });

            function pe(e) {
                return {
                    tag: "_tag",
                    members: {
                        Some: (0, r.pipe)(e, ie.UI.contramapState((e => e.value))),
                        None: ie.UI.Node.empty
                    }
                }
            }
            var he = i(10720);
            var me, ue = i(35214),
                ge = i(9671),
                ve = i(13922),
                fe = i(73582),
                we = i(70023),
                _e = i(61903),
                be = i(45586),
                ye = i(60797),
                Ee = i(85089),
                ke = i(95300),
                Se = i(2834),
                Ce = i(95093),
                Ie = i(32952),
                Ae = i(16782),
                Me = i(24209),
                xe = i(78674),
                Le = i(57091),
                Te = i(50628),
                Fe = i(66310),
                Pe = i(93494),
                Re = i(27125),
                Ve = i(8125),
                Oe = i(38983);
            ! function(e) {
                let t;
                ! function(e) {
                    e.clickOnEmpty = "clickOnEmpty", e.clickOnFakeCard = "clickOnFakeCard"
                }(t = e.Type || (e.Type = {}))
            }(me || (me = {}));
            class Ne {
                constructor(e, t, i, a, n) {
                    this._lensState = e, this._predictionsVM = t, this._upgradeViewModel = i, this._capabilities = a, this._gnar = n, this._subs = new be.w.Keeper, this.activeAlert = this._lensState.pipe(p.U((e => V.nL.hasCards(e) && M.R.isMainLens(e.currentLens.id) ? ve.O.getActiveItemWithAlert(e.currentLens) : C.none)), p.U((e => (0, r.pipe)(e, C.fold((() => null), (e => e.activeAlert)))))), this.successView = Oe.h.combine(this._lensState, this._predictionsVM.previewState, ((e, t) => Pe.v.WithSuccess.State.isInSuccess(this._capabilities)(e) ? C.some(t.kind === K.visible ? Re.g.SuccessType.applied : Re.g.SuccessType.small) : C.none)), this._premiumAlertsCount = this._upgradeViewModel.advancedAlerts.view((0, g.flow)(C.map((e => e.count)), C.getOrElse((() => 0)))), this.havePremiumAlerts = this._premiumAlertsCount.view((e => e > 0)), this._upgradeHookExpanded = new ke.X(!1), this.upgradeHookExpanded = (0, r.pipe)(this._upgradeHookExpanded, T.x()), this.upgradeHookFlow = (0, r.pipe)((0, we.d)(this._upgradeViewModel.advancedAlerts), ie.Z.extendActions(Se.b((e => {
                        e.key === _e.n.State.expanded ? "upgrade" === e.action.kind ? (this._upgradeViewModel.openUpgradeUrl(fe.L.Place.assistantCardList), this._gnar.assistantExpandedUpgradeHookClick(this._premiumAlertsCount.get())) : "onUpgradeButtonMount" === e.action.kind && this._onUpgradeButtonMount.next(e.action.element) : e.key === _e.n.State.minimized && "onClick" === e.action.action && this._upgradeHookExpandReason.next("click")
                    }))), ie.Z.patchState(Ce.T(this._autoOpenUpgradeHook())), ie.Z.patchState(Se.b((e => this._onUpgradeHookShown.next(function(e) {
                        switch (e) {
                            case "hidden":
                                return _e.n.State.hidden;
                            case "expanded":
                                return _e.n.State.expanded;
                            case "minimized":
                                return _e.n.State.minimized;
                            default:
                                (0, A.vE)(e)
                        }
                    }(e.kind))))), ie.Z.patchState(Se.b((e => this._upgradeHookExpanded.next("expanded" === e.kind))))), this.cardListContext = new ke.X(C.none), this.assistantActions = new Ie.xQ, this.autoFocusEnabled = Oe.h.create(!0), this._onUpgradeButtonMount = new Ae.t, this._upgradeHookExpandReason = new Ae.t, this._onUpgradeHookShown = new Ie.xQ, this._unselectActiveAlert = this.assistantActions.pipe(E.h((e => e.type === me.Type.clickOnEmpty || e.type === me.Type.clickOnFakeCard)), Se.b((() => this.autoFocusEnabled.set(!1))), p.U((() => e => e.patch({
                        currentLens: (0, r.pipe)(V.In.getActiveItem(e.currentLens), C.fold((() => e.currentLens), (t => V.nL.hasItems(e) ? this._capabilities.unselectItem()(e.currentLens) : e.currentLens))),
                        switchOrder: "lensOrder",
                        alertSource: w.l$.sidebar
                    })))), this.applicatorEffects = {
                        id: "assistantCardListViewModel.effects",
                        when: M.R.isWithAlertsId,
                        what: V.nL.Effect.Applicator.create(Me.T(this._unselectActiveAlert))
                    }, this._subs.push(this._onUpgradeHookShown.pipe(xe.b(1), T.x(), E.h((e => e === _e.n.State.minimized))).subscribe((() => this._gnar.assistantCollapsedUpgradeHookShow())), this._onUpgradeButtonMount.pipe(ye.oA, Le.a(this.cardListContext.pipe(ye.oA, Te.P())), Fe.w((([e, t]) => Ee.n(e, {
                        root: t
                    }).pipe(Te.P()))), E.h(Ve.Dw), p.U((e => Math.trunc(100 * e[0].intersectionRatio))), d.M(this._upgradeHookExpandReason, this._premiumAlertsCount)).subscribe((([e, t, i]) => this._gnar.assistantExpandedUpgradeHookShow(i, t, e))), this._lensState.pipe(E.h(V.nL.hasCards), p.U((e => V.In.getActiveItem(e.currentLens))), y.G(), E.h((([e, t]) => C.isNone(e) && C.isSome(t)))).subscribe((e => {
                        this.autoFocusEnabled.set(!0)
                    })))
                }
                dispose() {
                    this._subs.dispose()
                }
                _autoOpenUpgradeHook() {
                    return this._lensState.pipe(E.h((e => (0, r.pipe)(e.currentLens.id, (0, Ve.Kg)(M.R.isPriority, M.R.isAllAlerts)))), p.U(Pe.v.WithSuccess.State.isInSuccess(this._capabilities)), Le.a(this.havePremiumAlerts, ((e, t) => e && t)), T.x(), Se.b((e => {
                        e && this._upgradeHookExpandReason.next("alertsAddressed")
                    })), d.M(this._upgradeViewModel.advancedAlerts), p.U((([e, t]) => (0, r.pipe)(t, C.fold((() => ({
                        kind: _e.n.State.hidden
                    })), (t => e ? {
                        kind: _e.n.State.expanded,
                        showCloseButton: !0,
                        alertsState: {
                            count: t.count,
                            alerts: t.alerts()
                        }
                    } : {
                        kind: _e.n.State.minimized,
                        alertsCount: t.count
                    }))))))
                }
            }
            var De, Ue, Be = i(5178),
                He = i(81301),
                je = i(87667),
                Ge = i(24713),
                Ze = i(22232);
            ! function(e) {
                e.equals = (e, t) => "score" in e && "score" in t ? e.score === t.score : e.type === t.type
            }(De || (De = {}));
            class We {
                constructor(e, t, i, a, n, s, o, l, c, d, h, m) {
                    this._sessionModel = e, this._layoutVM = t, this._predictionsVM = i, this._importanceSurveyVM = a, this._modalManager = n, this._lensPreviewVM = s, this._currentLensId = o, this._lensChanged = l, this._cardsListScrollManager = c, this._user = d, this._gnar = h, this._closeAssistant = m, this.showSetGoalsActionButton = Oe.h.create(!0), this.showSettingsActionButton = Oe.h.create(!0), this.close = () => {
                        const e = this._layoutVM.activeView.get();
                        e.type === f.a.Type.popup && e.popupType === f.a.PopupType.importanceSurvey ? this._importanceSurveyVM.dismiss() : this._closeAssistant()
                    }, this.score = (0, r.pipe)(this._sessionModel.score.view(C.map((e => e.rank))), p.U((e => (0, u.Y)(C.option)({
                        capiScore: e
                    }))), Le.a(this._sessionModel.checkingState, ((e, t) => (0, r.pipe)(e, C.map((e => ({
                        ...e,
                        isLoading: "idle" !== t
                    }))))))), this.summary = this._sessionModel.textInfo.view((0, g.flow)(C.chain((e => e.messages)), C.map((e => e.assistantHeader)), C.getOrElse((() => "Looking good so far")), (e => ({
                        content: e
                    })))), this.logoScore = (0, F.aj)([this._cardsListScrollManager.scrollTop, this._layoutVM.activeView, this.score, this._user.view("experiments")]).pipe(p.U((([e, t, i, a]) => (0, r.pipe)(i, C.fold((() => ({
                        type: "logo"
                    })), (i => !(null == a ? void 0 : a.assistantHeaderRemoval) && e < 66 || t.type !== f.a.Type.default ? {
                        type: "logo"
                    } : {
                        type: "score",
                        score: i
                    }))))), T.x(De.equals)), this.visibility = this._layoutVM.activeView.view((e => e.type === f.a.Type.default ? "visible" : "hidden")), this.lensSwitchFlow = ie.Z.fromSideEffect((e => {
                        switch (e.action.action) {
                            case je.n.Actions.switchToAll:
                                this._lensChanged.next({
                                    lensId: M.R.SpecialId.AllAlerts,
                                    focusFirstCard: !0
                                }), this._gnar.assistantPriorityDropdownClick("all");
                                break;
                            case je.n.Actions.switchToPriority:
                                this._lensChanged.next({
                                    lensId: M.R.SpecialId.Priority,
                                    focusFirstCard: !0
                                }), this._gnar.assistantPriorityDropdownClick("priority");
                                break;
                            case je.n.Actions.openSetGoals:
                                break;
                            default:
                                (0, Ze.vE)(e.action.action)
                        }
                    }), F.aj(this._currentLensId.pipe(E.h((e => e !== M.R.SpecialId.Premium)), p.U((e => e === M.R.SpecialId.Priority ? "priority" : "all")), T.x()), this._lensPreviewVM.getLens(M.R.SpecialId.AllAlerts).pipe(Ge.j("count"), T.x()), this._lensPreviewVM.getLens(M.R.SpecialId.Priority).pipe(Ge.j("count"), T.x()), this._predictionsVM.previewState, ((e, t, i, a) => (0, r.pipe)({
                        allAlertsCount: t,
                        priorityAlertsCount: i,
                        selectedLens: e
                    }, C.fromPredicate((() => a.kind !== K.hidden)))))), this._subs = new be.w.Keeper, this._trackHeaderMessageChanges(), this._trackToShowActionButtons()
                }
                open(e) {
                    switch (e) {
                        case "setGoals":
                            this._subs.push(this._modalManager.show(He.Iy.setGoals("user")).subscribe());
                            break;
                        default:
                            (0, Ze.vE)(e)
                    }
                }
                _trackHeaderMessageChanges() {
                    const e = this.summary.pipe(y.G()).subscribe((([e, t]) => {
                        var i, a;
                        this._gnar.assistantHeaderMessageUpdate(e.content, t.content, null === (i = (0, r.pipe)(this._sessionModel.textInfo.get(), C.toUndefined)) || void 0 === i ? void 0 : i.wordsCount, null === (a = (0, r.pipe)(this._sessionModel.score.get(), S.orUndefined)) || void 0 === a ? void 0 : a.rank)
                    }));
                    this._subs.push(e)
                }
                _trackToShowActionButtons() {
                    const e = (0, F.aj)([this._layoutVM.activeView, this._user]).subscribe((([e, t]) => {
                        t.isAnonymous || e.type === f.a.Type.popup ? (this.showSetGoalsActionButton.set(!1), this.showSettingsActionButton.set(!1)) : (this.showSetGoalsActionButton.set(!0), this.showSettingsActionButton.set(!0))
                    }));
                    this._subs.push(e)
                }
                dispose() {
                    this._subs.dispose()
                }
            }! function(e) {
                e.importance = "importance", e.kindOfFeedback = "kindOfFeedback", e.thankYou = "thankYou"
            }(Ue || (Ue = {}));
            class qe {
                constructor(e, t, i) {
                    this._closeAssistant = e, this._gnar = t, this._bgActions = i, this.hideBackButton = Oe.h.create(!0), this.step = Oe.h.create(Ue.importance), this._onCompleteAllQuestions = () => {
                        this.step.set(Ue.thankYou), this._bgActions.hideImportanceSurvey()
                    }, this.done = () => {
                        this._closeAssistant()
                    }, this.dismiss = () => {
                        this._closeAssistant(), this._bgActions.dismissImportanceSurvey()
                    }, this.submit = e => {
                        const t = this.step.get();
                        switch (this._gnar.importanceSurveySubmitButtonClick(e, t), t) {
                            case Ue.importance:
                                "extremelyImportant" === e[0] || "somewhatImportant" === e[0] ? this.step.set(Ue.kindOfFeedback) : this._onCompleteAllQuestions();
                                break;
                            case Ue.kindOfFeedback:
                            default:
                                this._onCompleteAllQuestions()
                        }
                    }
                }
            }
            var ze = i(63919);
            const Ye = e => {
                const t = e.initialPositionOffset.get();
                return {
                    initialPositionOffset: t,
                    onDrag: i => {
                        e.updateInitialPositionOffset(ze.E9.plus(t, function({
                            x: e,
                            y: t
                        }) {
                            return ze.E9.create({
                                top: t,
                                left: e
                            })
                        }(i.translate)))
                    }
                }
            };
            var Ke = i(98403);
            class Qe {
                constructor(e, t, i, a, n, s, o) {
                    this._lensPreviewVM = e, this._layoutVM = t, this._readersAttentionVM = i, this._emogenieService = a, this._session = n, this._readersAttentionPredictionCardState = s, this._gnar = o, this._subs = new be.w.Keeper, this.previewState = Oe.h.create({
                        kind: K.hidden
                    }), this.previewFlow = ie.Z.fromSideEffect((e => {
                        switch (e.action.key) {
                            case "tone":
                                const t = this._emogenieService.viewState.view("prevalentEmotion").get();
                                return t && this._gnar.emogeniePredictionButtonClick(t.name), this._layoutVM.pushActiveView({
                                    type: f.a.Type.emogenie
                                });
                            case "readersAttention":
                                return this._readersAttentionVM.open({
                                    type: f.a.ReadersAttention.Caller.Type.predictionWidget
                                });
                            default:
                                (0, Ze.vE)(e.action)
                        }
                    }), this.previewState), this._previewState = (0, r.pipe)(F.aj([this._emogenieService.viewState.view((e => C.fromNullable(e.settings.hiddenReport ? void 0 : e.prevalentEmotion))), this._emogenieService.viewState.view("brandToneOffImageUrl"), this._readersAttentionPredictionCardState, this._session.documentLength, this._lensPreviewVM.getLens(M.R.SpecialId.PredictionEmogenie), this._lensPreviewVM.getLens(M.R.SpecialId.PredictionTakeaways)]), p.U((([e, t, i, a, n, s]) => (C.isSome(e) || C.isSome(i)) && a.trimmed > 0 ? {
                        kind: K.visible,
                        tone: (0, r.pipe)(e, C.map((e => ({
                            emotion: e,
                            alertsCount: n.count,
                            brandToneOffImageUrl: t
                        })))),
                        readersAttention: (0, r.pipe)(i, C.map((e => ({
                            ...e,
                            alertsCount: (0, r.pipe)(i, C.chain((e => e.alertsCount)), C.getOrElse((() => s.count)))
                        }))))
                    } : a.trimmed > 0 ? {
                        kind: K.zero
                    } : {
                        kind: K.hidden
                    }))), this._subs.push(this._previewState.subscribe(Ke.wW(this.previewState)))
                }
                dispose() {
                    this._subs.dispose()
                }
            }
            var $e = i(77843),
                Xe = i(2768),
                Je = i(10247);
            class et {
                constructor(e, t, i, a) {
                    this.feature = t, this._closeAssistant = i, this._gnar = a, this._subs = [], this._subs.push(this.feature.requestInfo.view("status").pipe((0, T.x)(), (0, y.G)(), (0, d.M)(e.activeView)).subscribe((([
                        [t, i], a
                    ]) => {
                        t === Je.eE.REVIEWING && a.type === f.a.Type.proofitReview && e.popActiveView()
                    }))), this._subs.push(this.feature.layoutCreated.pipe((0, d.M)(e.activeView)).subscribe((([t, i]) => {
                        i.type !== f.a.Type.proofitRequest && i.type !== f.a.Type.proofitReview || t || e.popActiveView()
                    })))
                }
                onSubmitRequest(e) {
                    this.feature.submitRequest(), this._gnar.proofitRequestFormSubmit();
                    const t = this.feature.requestInfo.lens("status").pipe((0, E.h)((e => e === Je.eE.ACCEPTED)));
                    (0, $e.F)(100).pipe((0, Xe.R)(t)).subscribe({
                        complete: () => this._closeAssistant(e)
                    })
                }
                onCompleteRequest(e) {
                    this.feature.resetRequest(), this._gnar.proofitOrderDone(), this._closeAssistant(e)
                }
                dispose() {
                    this._subs.forEach((e => e.unsubscribe()))
                }
            }
            var tt = i(17889),
                it = i(17594),
                at = i(86718);
            class nt {
                constructor(e, t, i, a, n, s = ve.O.getActiveItemWithAlert) {
                    this._feature = e, this._alertsCollection = t, this._alertsService = i, this._assistantLensState = a, this._takeawayAlertChanges = n, this._getActiveItemWithAlert = s, this._log = l.Y.create(nt.name), this._checklist = Oe.h.create(P.D.empty()), this._subscription = new x.w, this.checklist = this._checklist.view(), (0, g.pipe)(this._feature, S.tap((e => this._subscription.add(this._handleChecklistUpdates(e))))), this._subscription.add(this._markTakeawaysAsDoneWhenChecklistItemCollapsed()), this._subscription.add(this._markTakeawayAsDoneWhenMarkedCorrectlyDetectedOutsideOfChecklist()), this._subscription.add(this._markTakeawayNotDoneIfUnreadable()), this._subscription.add(this._checklist.subscribe((e => this._log.debug("State changed", e))))
                }
                _handleChecklistUpdates(e) {
                    return this._subscription.add((t = e, i = this._alertsCollection, Oe.h.combine(t.rawChecklist, i, ((e, t) => {
                        const i = _.p.reduce(new Map, ((e, t) => {
                            return (0, g.pipe)((i = t, (0, g.pipe)(i.alert.extraProperties.takeawayBundleId, C.map(P.T.Id.create))), C.fold((() => e), (i => e.set(i, (e.get(i) || []).concat([t])))));
                            var i
                        }))(t);
                        return new Map(Array.from(e.items.values()).map((t => [P.T.Id.create(t.id), rt(t, e.wordsCount, i)])))
                    }))).subscribe(Ke.wW(this._checklist)));
                    var t, i
                }
                _markTakeawaysAsDoneWhenChecklistItemCollapsed() {
                    return this._assistantLensState.pipe(p.U((e => V.nL.hasItems(e) ? V.In.getActiveItem(e.currentLens) : C.none)), y.G(), p.U((([e, t]) => (0, g.pipe)(e, C.filter(R.d.isChecklistItemWithAlerts), C.map((e => ({
                        item: e,
                        alerts: e.alerts.filter(lt).map((e => e.id))
                    }))), C.filter((({
                        item: e
                    }) => (0, g.pipe)(t, C.fold(g.constTrue, (t => t.id !== e.id))))), C.fold((() => []), (e => e.alerts)))))).subscribe((e => {
                        e.forEach((e => {
                            this._alertsService.changeTakeawayFeedback(e, w.TO.correctlyDetectedAndDone)
                        }))
                    }))
                }
                _markTakeawayNotDoneIfUnreadable() {
                    return this._takeawayAlertChanges.pipe(p.U((e => Array.from(e.changed.values()).filter((e => S.contains(w.TO.correctlyDetectedAndDone)(e.takeawayFeedback) && !e.takeawayIsLikelyToBeRead)).map((e => e.id))))).subscribe((e => {
                        e.forEach((e => {
                            this._alertsService.changeTakeawayFeedback(e, w.TO.correctlyDetected)
                        }))
                    }))
                }
                _markTakeawayAsDoneWhenMarkedCorrectlyDetectedOutsideOfChecklist() {
                    return this._takeawayAlertChanges.pipe(p.U((e => e.changed)), E.h((e => e.size > 0)), d.M(this._assistantLensState), p.U((([e, t]) => (0, g.pipe)(V.nL.hasItems(t) ? this._getActiveItemWithAlert(t.currentLens) : C.none, C.filter((0, g.not)(R.d.isChecklistItemWithAlerts)), C.fold((() => []), (() => Array.from(e.values()).filter((0, g.flow)(it.$.fromModel, lt)).map((e => e.id)))))))).subscribe((e => {
                        e.forEach((e => {
                            this._alertsService.changeTakeawayFeedback(e, w.TO.correctlyDetectedAndDone)
                        }))
                    }))
                }
                dispose() {
                    this._subscription.unsubscribe()
                }
            }

            function st(e) {
                return w.bZ.isTakeaway(e) && e.takeawayIsLikelyToBeRead && (S.contains(w.TO.correctlyDetected)(e.takeawayFeedback) || S.contains(w.TO.correctlyDetectedAndDone)(e.takeawayFeedback))
            }

            function rt(e, t, i) {
                const a = P.T.Id.create(e.id),
                    n = (i.get(a) || []).map((e => e.alert)),
                    s = (0, g.pipe)(n.filter(st), tt.nI),
                    r = (0, g.pipe)(n, O.filter((e => !w.bZ.isTakeaway(e) || C.isNone(e.takeawayFeedback) || S.contains(w.TO.correctlyDetected)(e.takeawayFeedback))), (e => e.every(st) ? [] : e), tt.nI);
                return {
                    id: a,
                    rank: e.rank,
                    suggestionsView: (0, g.pipe)(e.suggestionsCard, C.chain((e => (0, g.pipe)(r, C.map((t => ({
                        title: e.title,
                        miniTitle: e.miniTitle,
                        miniLabel: C.none,
                        alertIds: (0, g.pipe)(t, (0, tt.UI)((e => e.id)))
                    }))))))),
                    successView: (0, g.pipe)(e.successCard, C.chain((e => (0, g.pipe)(s, C.map((t => ({
                        title: e.title,
                        miniTitle: e.miniTitle,
                        miniLabel: C.none,
                        alertIds: (0, g.pipe)(t, (0, tt.UI)((e => e.id)))
                    }))))))),
                    emptyView: {
                        checked: e.defaultCard.checked,
                        title: e.defaultCard.title,
                        miniTitle: e.defaultCard.miniTitle,
                        miniLabel: "textLength" === e.defaultCard.kind ? C.some(`${t} words`) : C.none,
                        card: ot(e, t)
                    }
                }
            }

            function ot(e, t) {
                const i = "simple" === e.defaultCard.kind ? at.f.Kind.simple : "textLength" === e.defaultCard.kind ? at.f.Kind.textLength : (0, A.vE)(e.defaultCard.kind);
                return i === at.f.Kind.simple ? {
                    kind: i,
                    explanation: e.defaultCard.description,
                    details: e.defaultCard.details
                } : {
                    kind: i,
                    explanation: e.defaultCard.description,
                    details: e.defaultCard.details,
                    wordCount: t
                }
            }

            function lt(e) {
                return it.$.isTakeaway(e) && e.takeawayIsLikelyToBeRead && S.contains(w.TO.correctlyDetected)(e.takeawayFeedback)
            }

            function ct(e) {
                return Array.from(e.values()).reduce(((e, t) => function(e) {
                    return C.isNone(e.suggestionsView) && (C.isSome(e.successView) || e.emptyView.checked)
                }(t) ? e + 1 : e), 0)
            }
            var dt = i(15646);
            class pt {
                constructor(e, t, i, a, n) {
                    this._feature = e, this._assistantLensState = t, this._assistantCardActions = i, this._getAlertById = a, this._getActiveAlert = n, this._subs = new x.w, (0, r.pipe)(this._feature, S.tap((e => {
                        this._subs.add(this._trackTakeawayUserActions(e.tracking)), this._subs.add(this._trackTakeawayCardShow(e.tracking))
                    })))
                }
                _trackTakeawayUserActions(e) {
                    return this._assistantCardActions.pipe(E.h(dt.lY.isTakeawayFeedbackAction)).pipe(p.U((e => (0, r.pipe)(this._getAlertById(e.alertId), C.chain((t => u.Y(C.option)({
                        id: C.some(t.id),
                        rawId: w.bZ.getRawId(t),
                        isLikelyToRead: (0, r.pipe)(t.extraProperties.takeaway, C.map((e => e.isLikelyToBeRead))),
                        score: (0, r.pipe)(t.extraProperties.takeaway, C.map((e => e.score))),
                        textRange: C.fromNullable(t.getHighlightRanges()[0]),
                        action: C.some(e)
                    }))), C.getOrElse(g.constUndefined)))), E.h(A.fQ)).subscribe((t => {
                        e.onTakeawayUserAction(t.isLikelyToRead, t.score, t.action, t.textRange)
                    }))
                }
                _trackTakeawayCardShow(e) {
                    return this._assistantLensState.pipe(p.U(V.nL.getActiveAlert(this._getActiveAlert)), p.U(C.map((e => e.id)))).pipe(p.U(C.getOrElse(g.constUndefined)), E.h(A.fQ), T.x(), p.U((0, g.flow)(this._getAlertById, C.chain((e => (0, r.pipe)(e.extraProperties.takeaway, C.map((({
                        score: t
                    }) => ({
                        score: t,
                        textRange: e.getHighlightRanges()[0]
                    })))))), C.getOrElse(g.constUndefined))), E.h(A.fQ)).subscribe((t => {
                        e.onKeyTakeawayCardShow(t.score, t.textRange)
                    }))
                }
                dispose() {
                    this._subs.unsubscribe()
                }
            }
            class ht {
                constructor(e) {
                    this._readersAttentionFeature = e, this.message = (0, r.pipe)(this._readersAttentionFeature, C.map((e => e.messages)), C.getOrElse((() => Oe.h.create(C.none)))).view((0, g.flow)(C.map((e => e.headerMessage)), C.getOrElse((() => ""))))
                }
            }
            var mt = i(38040);
            class ut {
                constructor(e, t, i) {
                    this._contentScriptState = e, this._contentScriptActions = t, this.domain = i, this.state = this._contentScriptState.view((e => ({
                        user: e.user,
                        commonSettings: e.page,
                        dynamicConfig: e.dynamicConfig
                    }))), this.actions = {
                        toggleSite: (e, t) => this._contentScriptActions.toggleSite(e, t, (0, mt.IJ)(this.state.view("user").get())),
                        toggleDefs: this._contentScriptActions.toggleDefs,
                        toggleAutocomplete: this._contentScriptActions.toggleAutocomplete,
                        toggleAutocorrect: this._contentScriptActions.toggleAutocorrect,
                        toggleHotkeys: this._contentScriptActions.toggleHotkeys,
                        changeStrongDialect: this._contentScriptActions.changeStrongDialect,
                        setLlamaIntegrationDisable: this._contentScriptActions.setLlamaIntegrationDisable
                    }
                }
            }
            var gt = i(29909),
                vt = i(16868),
                ft = i(99116),
                wt = i(74364),
                _t = i(91402),
                bt = i(40151),
                yt = i(598),
                Et = i(83401),
                kt = i(95195);

            function St(e, t, i, a, n) {
                return {
                    id: "changeAlertEffect",
                    when: M.R.isWithAlertsId,
                    what: V.nL.Effect.SwitchAlert.create(e.actionEvents.pipe(Fe.w((e => {
                        const s = t.get();
                        if (!V.nL.hasCards(s)) return _t._(new Ze.ej("Cannot update state without cards"));
                        switch (e.type) {
                            case dt.lY.Type.alertMinicardButtonClick:
                                return (0, r.pipe)(i.getRegistered(e.alertHighlight.alert.id), C.fold((() => (n.warn("somehow we got click on non registered alert", e.alertHighlight.alert), bt.E)), (() => L.of(e.alertHighlight))));
                            case dt.lY.Type.cardMatchesNavigationButtonClick:
                                const t = e.transitionTo;
                                switch (t.kind) {
                                    case "anotherAlert":
                                        return (0, r.pipe)("right" === e.direction ? a.nextAlert(t.card) : (0, r.pipe)(a.prevAlert(t.card), S.orElse(a.anyRegisteredAlert(t.card))), C.fold((() => bt.E), (e => L.of({
                                            alert: e,
                                            highlightIndex: 0
                                        }))));
                                    case "sameAlert":
                                        return (0, r.pipe)(i.getRegistered(t.card.activeAlert.id), C.fold((() => bt.E), (() => L.of({
                                            alert: t.card.activeAlert,
                                            highlightIndex: t.highlightIndex
                                        }))));
                                    default:
                                        return (0, Ze.vE)(t)
                                }
                                default:
                                    return bt.E
                        }
                    })), p.U((e => ({
                        alertHighlight: e,
                        alertSource: w.l$.sidebar,
                        options: {
                            order: "lensOrder"
                        }
                    })))))
                }
            }

            function Ct(e, t, i) {
                const a = e.pipe(E.h(V.nL.hasCards), xe.b(0), p.U((e => e)), E.h((e => e.currentLens.items.size > 0 && C.isNone(V.In.getActiveItem(e.currentLens)) && i.get())), p.U((e => (0, r.pipe)(e.currentLens.items.getAt(0), C.chain(ve.O.checksFeedItemsMapper((e => C.some(e.activeAlert)), (e => C.some(e.activeAlert)), (() => C.none), (() => C.none), (() => C.none))), S.tap((() => t.set(C.some(vt.CV.skip))))))), ye.oA, E.h((e => e.state.type === w.bZ.State.Type.REGISTERED)), T.x());
                return {
                    id: "focusFirstCardSideEffect",
                    when: e => e !== M.R.SpecialId.PredictionTakeaways && e !== M.R.SpecialId.PredictionEmogenie,
                    what: V.nL.Effect.SwitchLens.create(a.pipe(d.M(e), p.U((([e, t]) => ({
                        lensId: t.currentLens.id,
                        alertSource: w.l$.text,
                        options: {
                            order: "lensOrder",
                            toFocus: V.nL.Effect.FocusBehavior.focusAlert({
                                alert: e,
                                highlightIndex: 0
                            })
                        }
                    })))))
                }
            }

            function It(e, t, i) {
                const a = e.pipe(p.U((e => a => e.type === wt.tn.Type.AppliedAlertAnimationFinished && a.currentLens.meta.filter(e.alert) && V.nL.hasItems(a) ? a.patch({
                    currentLens: (0, r.pipe)(kt.tryCatch((() => w.bZ.isApplicableAlert(e.alert) ? t.finishApplyAnimation([e.alert])(a.currentLens) : a.currentLens), (e => i.error("could not update lens state on applied animation finish", e))), kt.getOrElse((() => a.currentLens))),
                    alertSource: e.alert.state.source
                }) : a)));
                return {
                    id: "onAlertApply",
                    when: g.constTrue,
                    what: V.nL.Effect.Applicator.create(a)
                }
            }

            function At(e, t) {
                return {
                    id: "lensChangeEffect",
                    when: g.constTrue,
                    what: V.nL.Effect.SwitchLens.create(e.pipe(d.M(t), E.h((([e, t]) => e.lensId !== t)), p.U((([e]) => ({
                        lensId: e.lensId,
                        alertSource: w.l$.sidebar,
                        options: {
                            order: "lensOrder",
                            toFocus: e.focusFirstCard ? V.nL.Effect.FocusBehavior.focusFirst : V.nL.Effect.FocusBehavior.noFocus
                        }
                    })))))
                }
            }
            const Mt = (e, t, i) => {
                    const a = (0, r.pipe)(e, p.U(V.nL.mapper((({
                        currentLens: e,
                        alertSource: t
                    }) => C.some({
                        currentLens: e,
                        alertSource: t
                    })))), xt(i), Fe.w(Ke.b2.rafScheduler), Se.b((e => t.moveCardsBy(e, "freezeActiveCardOnCardsListUpdate"))));
                    return {
                        id: "freezeActiveCardOnCardsListUpdate",
                        when: M.R.isWithAlertsId,
                        what: V.nL.Effect.Applicator.create(Me.T(Me.T(a).pipe(yt.c(Et.C))))
                    }
                },
                xt = e => t => t.pipe((0, ft.Sd)(e), p.U(C.map((e => e.currentLens))), y.G(), E.h((([e, t]) => (0, r.pipe)((0, g.tuple)(e, t), (0, g.tupled)(S.map2(((e, t) => e.id === t.id && (0, r.pipe)((0, g.tuple)(V.In.getActiveItem(e), e.cardIndex, V.In.getActiveItem(t), t.cardIndex), (0, g.tupled)((0, u.g)(C.option)), C.map((([e, t, i, a]) => e.id === i.id && t !== a)), C.getOrElse((() => !1)))))), C.getOrElse((() => !1))))), p.U((0, g.flow)(gt.Pd(C.chain(V.In.getActiveItem), C.chain(V.In.getActiveItem)), (0, g.tupled)(S.map2(((e, t) => t.positionState.absTop - e.positionState.absTop))), C.getOrElse((() => 0)))));
            var Lt = i(63047),
                Tt = i(20544),
                Ft = i(5920),
                Pt = i(80900),
                Rt = i(55415);
            class Vt {
                constructor(e, t) {
                    this._intentDetectionFeature = e, this._checksFeedCapabilities = t, this._subs = new x.w, this._log = l.Y.create("IntentDetectionViewModelImpl"), this.intentDetectionActions = new Ie.xQ, this._newIntentDetectionInfo = this._intentDetectionFeature.intentDetectionInfo.pipe(p.U((() => g.identity))), this._focusIntentDetectionItem = this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemClickAction), p.U((e => t => t.patch({
                        currentLens: (0, r.pipe)(t.currentLens.items.find((t => t.id === e.id)), C.fold((() => (this._log.error("Cannot focus non-existing IntentDetectionItem."), t.currentLens)), (() => (0, g.unsafeCoerce)((0, r.pipe)(t.currentLens, this._checksFeedCapabilities.selectItemById(e.id))))))
                    })))), this._acceptIntentDetectionItem = this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemAcceptAction), p.U((e => t => (0, r.pipe)((0, r.pipe)(Ft.l.find(t.currentLens.items, Lt.Z.isIntentDetectionItem), C.map(Rt.pick("value"))), C.fold((() => (this._log.error("Cannot accept non-existing IntentDetectionItem."), t)), (i => {
                        const a = new Map;
                        a.set(e.id, this._checksFeedCapabilities.transitionTo({
                            type: "success",
                            clockwise: !0
                        })(i));
                        const n = t.currentLens.items.patchWith(a, ((e, t) => C.some(t)));
                        return V.nL.Prism.getLens().compose(Pe.v.Prism.items).set(n, t)
                    })))))), this._subs.add(this.intentDetectionActions.subscribe((e => this._log.trace("Action received:", e)))), this._subs.add(this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemFeedbackInaccurateAction)).subscribe((e => {
                        this._intentDetectionFeature.onIntentDetectionFeedback(Tt.IntentDetection.IntentDetectionFeedback.INACCURATE, {
                            predictionId: e.predictionId,
                            label: e.label
                        }), this._intentDetectionFeature.intentDetectionInfo.next(null)
                    }))), this._subs.add(this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemFeedbackAccurateAction)).subscribe((e => {
                        this._intentDetectionFeature.onIntentDetectionFeedback(Tt.IntentDetection.IntentDetectionFeedback.ACCURATE, {
                            predictionId: e.predictionId,
                            label: e.label
                        }), "rendered" === e.transitionType ? (this.intentDetectionActions.next({
                            kind: Lt.Z.Event.Kind.intentDetectionItemClick,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label
                        }), Pt.H(100).subscribe((() => this.intentDetectionActions.next({
                            kind: Lt.Z.Event.Kind.intentDetectionItemAccept,
                            id: e.id
                        })))) : this.intentDetectionActions.next({
                            kind: Lt.Z.Event.Kind.intentDetectionItemAccept,
                            id: e.id
                        }), Pt.H(3e3).subscribe((() => this.intentDetectionActions.next({
                            kind: Lt.Z.Event.Kind.intentDetectionItemClose,
                            id: e.id
                        })))
                    }))), this._subs.add(this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemCloseAction)).subscribe((() => this._intentDetectionFeature.intentDetectionInfo.next(null)))), this._subs.add(this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemShowAction)).subscribe((e => this._intentDetectionFeature.onIntentDetectionItemShow({
                        predictionId: e.predictionId,
                        label: e.label
                    })))), this._subs.add(this.intentDetectionActions.pipe(E.h(Lt.Z.Event.isIntentDetectionItemExpandAction)).subscribe((e => this._intentDetectionFeature.onIntentDetectionItemExpand({
                        predictionId: e.predictionId,
                        label: e.label
                    }))))
                }
                getApplicatorEffects() {
                    return (0, r.pipe)([
                        [this._newIntentDetectionInfo, "newIntentDetectionInfo"],
                        [this._focusIntentDetectionItem, "focusIntentDetectionItem"],
                        [this._acceptIntentDetectionItem, "acceptIntentDetectionItem"]
                    ], O.map((([e, t]) => ({
                        id: `intentDetectionViewModel.effects.${t}`,
                        when: M.R.isMainLens,
                        what: V.nL.Effect.Applicator.create(e)
                    }))))
                }
                dispose() {
                    this._intentDetectionFeature.onIntentDetectionViewModelDisposed(), this._subs.unsubscribe()
                }
            }
            var Ot = i(77394),
                Nt = i(51540),
                Dt = i(11755),
                Ut = i(62346),
                Bt = i(71962),
                Ht = i(92783),
                jt = i(44618),
                Gt = i(13313),
                Zt = i(21619),
                Wt = i(54216),
                qt = i(88643),
                zt = i(48052),
                Yt = i(91549),
                Kt = i(83167),
                Qt = i(20594),
                $t = i(35607),
                Xt = i(20291),
                Jt = i(33806),
                ei = i(86775),
                ti = i(11245),
                ii = i(4890),
                ai = i(73841),
                ni = i(89770),
                si = i(39920),
                ri = i(88772),
                oi = i(95574),
                li = i(81531);
            const ci = (e, t, i, a, n, s, o, l, c, d, m, u, v, I, x, F, R, O, N, D, B, H) => {
                var j;
                const G = li.Monitoring.Logging.getLogger("view_models"),
                    Z = Oe.h.create(Gt.A.defaultState),
                    W = Oe.h.create(g.constFalse),
                    q = (null === (j = R.get().experiments) || void 0 === j ? void 0 : j.keyTakeawaysVisibleInPriorityView) ? (0, Ve.Kg)(w.bZ.belongsToPriorityLens, w.bZ.isTakeaway) : w.bZ.belongsToPriorityLens,
                    z = Wt.t.create({
                        ...Wt.t.defaultLensFilters,
                        [M.R.SpecialId.Priority]: q
                    }, {
                        ...Wt.t.defaultTextFilters,
                        [M.R.SpecialId.Closed]: g.constFalse,
                        [M.R.SpecialId.Priority]: q,
                        [M.R.SpecialId.PredictionTakeaways]: e => W.get()(e)
                    }),
                    Y = Gt.A.get(e.alertsList.state, e.alertsList.lensesScores, z).subscribe(Ke.wW(Z)),
                    K = new Dt.t(Z.view("lenses"), z),
                    Q = (0, zt.$)((0, jt.a)(t).getContents),
                    $ = {
                        features: new Set([Qt.IG.Features.showCardLabelInOutcomes]),
                        cardLayoutDensityMode: ii.j.Density.minimal,
                        shouldAnimateAlertApply: Qt.IG.Default.shouldAnimateAlertApply
                    },
                    X = (0, Qt.Ls)(Q, e.alertsReader, $, (() => L.of(C.none)), e.mutingAlertsReader),
                    J = Yt.R.ItemFactory.create(Q, e.mutingAlertsReader, $, (() => L.of(C.none))),
                    ee = (0, ti.U)(Q, e.alertsReader, $, P.T.ordAlert),
                    te = Oe.h.create(P.D.empty()),
                    ie = ve.O.getCapabilities(X, J, ee, e.alertsReader, Q, te),
                    ae = new si.gi(X, z, ve.O.equatable.structEq, ve.O.defaultOrd),
                    ne = (0, si.is)(X, ie),
                    se = new ni.oq(e.alertsList.state, e.alertsReader, Z.view("lenses"), e.positionManager, K, new si.ad(J, z, (e => e.id === M.R.SpecialId.Priority), new Jt.c(ee, te, e.alertsReader, (e => e.id === M.R.SpecialId.PredictionTakeaways), ae, ve.O.equatable.structEq), ve.O.equatable.structEq, ve.O.bundlesOrd), (0, si.kn)(J, $, (e => e === M.R.SpecialId.Priority), (0, Jt.E)(ee, te, e.alertsReader, (e => e === M.R.SpecialId.PredictionTakeaways), ne, ie), ie), ie, z),
                    re = i.get(),
                    oe = Oe.h.create(se.emptyState(re).patch({
                        alertSource: w.l$.sidebar
                    })),
                    le = oe.view((e => (0, r.pipe)(C.fromPredicate(V.nL.hasItems)(e), C.map(V.nL.Prism.getLens().get), C.filter((e => e.id === M.R.SpecialId.PredictionTakeaways)), C.chain(V.In.getActiveItem)))).view(C.fold((() => g.constFalse), (e => t => ie.hasAlert(t.id)(e)))).subscribe(Ke.wW(W));
                d.next({
                    kind: Ot.R.ChangeLens,
                    selectedLens: re === M.R.SpecialId.Priority ? "priority" : "all"
                });
                const ce = (0, Kt.u0)((() => t.getCursor().index), se),
                    de = new fe.x(e.alertsList, oe, 3),
                    pe = new He.EQ(new Bt.o(e.sessionModel, de, R.get().isPremium)),
                    he = new qt.Xx({
                        flush: () => t.flushChanges()
                    }, new Ie.xQ, X, e.alertsService, (() => Promise.resolve()), (() => Promise.resolve()), (0, r.pipe)(e.mutedAlertsCategoriesModel, C.map((e => ({
                        model: e,
                        openSuggestionsManagement: () => self.open((0, Ht.Um)().suggestionsSettings)
                    })))), C.none, (() => !1), ve.O.getActiveItemWithAlert, ie, oe),
                    me = new ge.y(he.actionEvents, x, e.alertsReader, R),
                    we = new $t.o((() => kt.right(void 0))),
                    _e = new Ut.o(e.alertsList, e.alertsReader, e.positionManager, e.alertsService, t, oe, z, ve.O.getActiveItemWithAlert, R.view("experiments"), m, !0),
                    be = (0, vt.hp)(oe, _e, Oe.h.create(16), we, t, G),
                    ye = new f.D(I, x, N, D, H),
                    Ee = new qe(O, x, I),
                    ke = new Ie.xQ,
                    Se = oe.pipe(p.U((e => e.currentLens.id))),
                    Ce = e.alertsList.state.pipe(h.O(_.p.empty), y.G(), p.U((([e, t]) => (0, r.pipe)(_.p.diff(e, t), _.p.Diff.filter((e => w.bZ.isTakeaway(e.alert)))))), E.h((0, g.not)(k.v.isEmpty)), p.U(k.v.reduce({
                        changed: new Map,
                        removed: new Map
                    }, ((e, t) => w.bZ.isTakeaway(t.alert) ? (e.removed.set(t.alert.id, t.alert), e) : e), ((e, t, i) => w.bZ.isTakeaway(i.alert) ? (e.changed.set(i.alert.id, i.alert), e) : e), ((e, t) => w.bZ.isTakeaway(t.alert) ? (e.changed.set(t.alert.id, t.alert), e) : e))), b.d({
                        bufferSize: 1,
                        refCount: !0
                    }));
                const Ae = new U(n, te, ye, e.alertsList.state, e.alertsReader, oe, Ce),
                    Me = new nt(n, e.alertsList.state, e.alertsService, oe, Ce),
                    xe = Me.checklist.subscribe(Ke.wW(te)),
                    Le = new Qe(K, ye, Ae, a, e.sessionModel, Ae.predictionCardState, x),
                    Te = new We(e.sessionModel, ye, Le, Ee, pe, K, Se, ke, we, R, x, O),
                    Fe = new Ne(oe, Le, de, ie, x),
                    Re = new Be._(ye, F, x),
                    De = (0, r.pipe)(c, C.map((e => new et(ye, e, O, x))));
                (0, r.pipe)(s, S.tap((t => t.initCardActionsProcessing(he.actionEvents, e.alertsReader, Re, Fe)))), (0, r.pipe)(l, S.tap((t => t.initCardActionsProcessing(he.actionEvents, e.alertsReader))));
                const Ue = (0, r.pipe)(o, C.map((e => new Vt(e, ie)))),
                    je = new Zt.m(t, oe, _e, e.alertsReader, ve.O.getActiveItemWithAlert),
                    Ge = Oe.h.create((0, r.pipe)(u, C.fold((() => vt.CV.skip), (() => w.l$.text)), C.some)),
                    Ze = [(0, Nt.A7)(je, oe), (0, r.pipe)(wt.EQ.focusMarkByActiveAlert(oe, _e, e.alertsReader, ve.O.getActiveFocusableItem, G.getLogger("MarksEffects.focusMarkByActiveAlert")), V.nL.Effect.Producer.delayed(m)), wt.EQ.highlightMarkByHighlightedCard(he, oe, _e, e.alertsReader, ie, G.getLogger("MarksEffects.highlightMarkByHighlightedCard")), It(_e.events, ie, G.getLogger("createOnAlertApplySideEffect")), St(he, oe, e.alertsReader, X, G), Ct(oe, Ge, Fe.autoFocusEnabled), ...he.getApplicatorEffects(), Fe.applicatorEffects, Xt.R7(oe, we, ie, (0, g.unsafeCoerce)(he.actionEvents), {
                        cardsAroundActive: 10,
                        cardsBeyondViewport: 10
                    }), (0, r.pipe)((0, vt.k9)(oe, be, Ge, ve.O.getActiveAlignableItem, ie), V.nL.Effect.Producer.delayed(m)), Mt(oe, we, ie), At(ke, Se), qt.dv.createSendActiveAlertFeedbacksEffect(oe, ve.O.getActiveItemWithAlert, e.alertsService, e.alertsReader, G.getLogger("MarksEffects.highlightMarkByHighlightedCard")), ei.G.getChecklistHandlerSideEffect(ee, Me.checklist, e.alertsReader, ve.O.getActiveItemWithAlert, (e => e === M.R.SpecialId.PredictionTakeaways)), ...(0, r.pipe)(Ue, C.fold((() => []), (e => e.getApplicatorEffects())))],
                    ze = Oe.h.create(M.R.SpecialId.AllAlerts),
                    $e = oe.view((e => e.currentLens.id)).pipe(E.h((e => e === M.R.SpecialId.Priority || e === M.R.SpecialId.AllAlerts))).subscribe(Ke.wW(ze)),
                    Xe = (0, Kt.VC)(se, ce, ze, ve.O.getActiveItemWithAlert, ie),
                    Je = Oe.h.create(u),
                    tt = (0, Kt.Dv)((e => M.R.isPriority(e.currentLens.id)), Xe, ie),
                    it = new Kt.vM(e.sessionModel.checkingState, oe),
                    at = (0, r.pipe)([(0, r.pipe)((e => Kt.Py.whenShouldVerifyCurrentLens(ve.O.getActiveItemWithAlert, ie)(e) && e.currentLens.id !== M.R.SpecialId.PredictionTakeaways), Kt.Py.behaviorToEffect((() => C.some(V.nL.Effect.FocusBehavior.focusNext)))), (0, r.pipe)((0, Ve.W9)((() => C.isSome(Je.get())), Kt.Py.whenNoActiveCard), Kt.Py.behaviorToEffect((e => (0, r.pipe)((e => {
                        const t = (0, C.fromPredicate)((0, Ve.Kg)(ve.O.isAlertCard, ve.O.isAlertsBundle));
                        return (0, r.pipe)(Je.get(), C.chain((i => (Je.set(C.none), V.nL.hasCards(e) ? (0, r.pipe)(e.currentLens.items.reduce(((e, a) => (0, r.pipe)(e, C.alt((() => (0, r.pipe)(a, t, C.chain((e => C.fromNullable(e.alerts.find((e => e.id.startsWith(i + "_"))))))))))), C.none), C.map((t => ({
                            alert: t,
                            highlightIndex: 0,
                            lensId: e.currentLens.id
                        })))) : C.none))))
                    })(e), C.map((e => V.nL.Effect.FocusBehavior.focusAlert(e))))))), (0, r.pipe)((0, Ve.W9)((() => Fe.autoFocusEnabled.get()), (0, Ve.W9)(Kt.Py.whenFirstOpeningDocumentWithAlerts(it), Kt.Py.whenNoActiveCard)), Kt.Py.behaviorToEffect((() => C.some(V.nL.Effect.FocusBehavior.focusFirst))))], (0, ue.fold)((0, ue.getFunctionMonoid)(C.getFirstMonoid())())),
                    st = Kt.Py.getStateTransformer(at, tt, e.alertsReader, ie, (e => Fe.autoFocusEnabled.get() && "text" !== e.alertSource), g.constVoid, ze),
                    rt = Pe.v.Items.getItemsPositionsUpdateTransformer(ie),
                    ot = (0, r.pipe)(o, C.fold((() => ri.t.nothing), (e => Lt.Z.getStateTransformer(e.intentDetectionInfo)))),
                    lt = (0, g.flow)(st, oi.chainLeft(rt), oi.chainLeft(ot)),
                    ct = new ai.l(oe, se, e.alertsReader, e.alertsService, Ze, ve.O.getActiveItemWithAlert, lt),
                    dt = ke.pipe(p.U((({
                        lensId: e
                    }) => e)), E.h((e => e === M.R.SpecialId.AllAlerts || e === M.R.SpecialId.Priority)), T.x()).subscribe((e => {
                        i.set(e), d.next({
                            kind: Ot.R.ChangeLens,
                            selectedLens: e === M.R.SpecialId.Priority ? "priority" : "all"
                        })
                    })),
                    mt = ye.activeView.pipe(p.U((e => {
                        switch (e.type) {
                            case f.a.Type.default:
                                return i.get();
                            case f.a.Type.emogenie:
                                return M.R.SpecialId.PredictionEmogenie;
                            case f.a.Type.readersAttention:
                                return M.R.SpecialId.PredictionTakeaways;
                            case f.a.Type.readersAttentionHelp:
                                return M.R.SpecialId.Closed;
                            case f.a.Type.proofitReview:
                                return M.R.SpecialId.RealTimeProofit;
                            default:
                                return null
                        }
                    })), E.h(A.fQ), T.x(), p.U((e => [e, e === M.R.SpecialId.AllAlerts || e === M.R.SpecialId.Priority]))).subscribe((([e, t]) => ke.next({
                        lensId: e,
                        focusFirstCard: t
                    }))),
                    gt = new ut(v, I, F),
                    ft = new pt(n, oe, he.actionEvents, (t => e.alertsReader.getById(t)), ve.O.getActiveItemWithAlert),
                    _t = new ht(n),
                    bt = Ye(B);
                return {
                    lensState: oe,
                    cardsViewModel: he,
                    lensPreviewViewModel: K,
                    cardsListScrollManager: we,
                    upgradeViewModel: de,
                    assistantHeaderViewModel: Te,
                    assistantLayoutViewModel: ye,
                    assistantCardListViewModel: Fe,
                    lensChanged: ke,
                    predictionsPreviewViewModel: Le,
                    assistantFeedbackViewModel: Re,
                    assistantSettingsViewModel: gt,
                    assistantProofitViewModel: De,
                    readersAttentionViewModel: Ae,
                    readersAttentionChecklistViewModel: Me,
                    readersAttentionHeaderViewModel: _t,
                    importanceSurveyViewModel: Ee,
                    assistantModalManager: pe,
                    marksViewModel: _e,
                    gnar: x,
                    positionViewModel: bt,
                    user: R,
                    capabilities: ie,
                    intentDetectionViewModel: Ue,
                    dispose: () => {
                        ft.dispose(), le.unsubscribe(), xe.unsubscribe(), Me.dispose(), he.dispose(), ct.dispose(), _e.dispose(), Le.dispose(), dt.unsubscribe(), Y.unsubscribe(), mt.unsubscribe(), Te.dispose(), Fe.dispose(), pe.hideAll(), Ae.dispose(), $e.unsubscribe(), (0, r.pipe)(De, S.tap((e => e.dispose()))), (0, r.pipe)(Ue, S.tap((e => e.dispose()))), me.dispose()
                    }
                }
            };
            var di, pi = i(30763),
                hi = i(88056),
                mi = i(35407),
                ui = i(19429);
            ! function(e) {
                e.Context = o.createContext(hi.Y.invariantContent("AssistantTextResources")), e.holder = ui.VF((() => ({
                    setGoalsTooltip: "Set goals to get tailored writing suggestions",
                    proofitTooltip: "Expert writing help"
                })))
            }(di || (di = {}));
            const gi = mi.createFrom(mi.composeS({
                denali: pi.m.holder,
                assistant: di.holder
            }))((() => ({
                denali: {}
            })));
            var vi = i(18756),
                fi = i(20855),
                wi = i(79073),
                _i = i(12187),
                bi = i(57398);
            const yi = o.memo((({
                width: e,
                strokeWidth: t,
                generalScore: i,
                componentStyle: a,
                fontSize: n = 9,
                isLoading: s
            }) => {
                const r = e / 2,
                    l = r - t / 2,
                    c = 2 * l * Math.PI,
                    d = (s ? 75 : i) / 100 * c,
                    p = c - d,
                    h = (e => {
                        const {
                            red40: t,
                            yellow50: i,
                            green50: a
                        } = z.Z;
                        return e < 65 ? t : e < 95 ? i : a
                    })(i);
                return o.createElement("div", Object.assign({}, (0, _i.Sh)(bi.scoreRing, s && bi.loading), {
                    style: a
                }), o.createElement("svg", {
                    width: e,
                    height: e,
                    viewBox: `0 0 ${e} ${e}`
                }, o.createElement("circle", {
                    fill: "white",
                    r: l,
                    cx: r,
                    cy: r
                }), o.createElement("circle", {
                    stroke: z.Z.neutral20,
                    fill: "transparent",
                    strokeWidth: t,
                    style: {
                        strokeDashoffset: d
                    },
                    r: l,
                    cx: r,
                    cy: r
                }), o.createElement("circle", {
                    stroke: h,
                    fill: "transparent",
                    strokeWidth: t,
                    strokeDasharray: `${c} ${c}`,
                    style: {
                        strokeDashoffset: p
                    },
                    r: l,
                    cx: r,
                    cy: r
                }), o.createElement("text", {
                    className: bi.scoreText,
                    x: "50%",
                    y: "-35%",
                    fontSize: n,
                    fill: "black",
                    textAnchor: "middle",
                    transform: "rotate(90)"
                }, i > 0 && !s ? i : "")))
            }));
            var Ei = i(75039),
                ki = i(93756),
                Si = i(35327);
            const Ci = e => o.createElement("div", Object.assign({}, (0, _i.Sh)(Si.summary_wrapper, e.className)), ie.UI.mount(xi, ie.Z.animatingFlow((() => e.summaryVM.summary), Ii))),
                Ii = (e, t) => (0, r.pipe)(e, C.filter((e => e.content !== t.content)), C.map((() => ki.Hk("fadeout", "fadein")))),
                Ai = ie.UI.Node.make((({
                    view: e
                }) => o.createElement(te.F.div, {
                    className: Si.summary_heading,
                    "data-grammarly-part": "assistant-summary-header"
                }, e("content")))),
                Mi = ie.UI.Transition.make({
                    fadein: Si.summary_fadein
                }, {
                    fadeout: Si.summary_fadeout
                }),
                xi = ie.UI.Animated.make(Mi, Ai),
                Li = ({
                    headerVM: e,
                    experiments: t
                }) => o.createElement(te.F.div, {
                    style: {
                        visibility: e.visibility
                    }
                }, !(null == t ? void 0 : t.assistantHeaderRemoval) && o.createElement("div", {
                    className: Ei.panel
                }, o.createElement(Ci, {
                    summaryVM: e
                }), o.createElement(te.F.div, {
                    className: Ei.score_container,
                    "data-grammarly-part": "assistant-score"
                }, (0, r.pipe)(e.score, p.U(C.map((({
                    capiScore: e,
                    isLoading: t
                }) => o.createElement(o.Fragment, null, o.createElement(yi, {
                    generalScore: e,
                    strokeWidth: 3,
                    width: 38,
                    fontSize: e < 100 ? 16 : 14,
                    isLoading: t,
                    componentStyle: {
                        margin: "-3px -3px 0 0",
                        cursor: "default"
                    }
                }), o.createElement(fi.u, {
                    message: `Text score: ${e} out of 100. This score represents the quality of writing.`
                }, o.createElement("div", {
                    className: Ei.info_icon
                }, o.createElement(wi.s, {
                    color: z.Z.neutral40,
                    size: 9
                }))))))), p.U(S.orNull)))), !(null == t ? void 0 : t.hidePriorityToggle) && o.createElement("div", {
                    className: Ei.lens_switch,
                    "data-grammarly-part": "assistant-lens-switch"
                }, ie.UI.mount(Ti, e.lensSwitchFlow))),
                Ti = ie.UI.Union.asOption(je.n.Switch);
            var Fi = i(68340),
                Pi = i(19962),
                Ri = i(33751),
                Vi = i(28378),
                Oi = i(89379),
                Ni = i(62513);
            const Di = o.forwardRef((({
                    successView: e
                }, t) => o.createElement("div", {
                    className: Ni.compactSuccessLens,
                    ref: t
                }, o.createElement("div", {
                    className: Ni.compactSuccessLensContainer
                }, ie.UI.mount(Vi.q, (0, Oi.hM)((0, Oi.JT)((0, r.pipe)(e, ye.oA)))))))),
                Ui = o.forwardRef((({
                    viewModels: e
                }, t) => o.createElement("div", {
                    className: Ri.mainView
                }, o.createElement(Hi, {
                    ref: t,
                    state: e.lensState,
                    cardsViewModel: e.cardsViewModel,
                    upgradeViewModel: e.upgradeViewModel,
                    cardsListScrollManager: e.cardsListScrollManager,
                    assistantCardListViewModel: e.assistantCardListViewModel,
                    predictionsPreviewViewModel: e.predictionsPreviewViewModel,
                    assistantFeedbackViewModel: e.assistantFeedbackViewModel,
                    headerViewModel: e.assistantHeaderViewModel,
                    layoutViewModel: e.assistantLayoutViewModel,
                    capabilities: e.capabilities,
                    intentDetectionViewModel: e.intentDetectionViewModel,
                    experiments: e.user.view("experiments").get()
                })))),
                Bi = ({
                    position: e,
                    isSuccess: t,
                    children: i
                }) => o.createElement(te.F.Fragment, null, e.pipe(T.x(((e, t) => e.offset === t.offset && e.visible === t.visible)), p.U((e => e.visible ? o.createElement(te.F.div, Object.assign({}, (0, _i.Sh)(Ri.cardListFooterStatic, e.animationInProgress ? Ri.cardListFooterAnimate : void 0, t ? void 0 : Ri.cardListFooterDynamic), {
                    style: t ? {} : {
                        transform: Pi.CSS.translateY(e.offset)
                    }
                }), i) : null)))),
                Hi = o.forwardRef((({
                    state: e,
                    assistantCardListViewModel: t,
                    cardsViewModel: i,
                    upgradeViewModel: a,
                    cardsListScrollManager: n,
                    capabilities: s,
                    intentDetectionViewModel: l,
                    experiments: c,
                    ...m
                }, u) => {
                    const g = Ke.jw((e => {
                            let t = 7;
                            return t = 31 * t + (0, vi.AC)(e.currentLens.id), t = 31 * t + (Pe.v.WithSuccess.State.isInSuccess(s)(e) ? 1231 : 1237), t
                        }), e),
                        v = (0, r.pipe)(g, p.U((e => {
                            const t = e.get();
                            return Pe.v.WithSuccess.State.isInSuccess(s)(t)
                        }))),
                        f = (0, r.pipe)((0, he.u)(e, n, s), d.M(e), p.U((([e, t]) => ({
                            visible: !V.nL.hasCards(t) || C.isNone(t.currentLens.items.find((e => !e.positionState.isHeightValid))),
                            offset: e + 6,
                            animationInProgress: !0
                        }))), h.O({
                            visible: !1,
                            offset: 0,
                            animationInProgress: !0
                        }));
                    return o.createElement(Fi.C, {
                        className: Ri.cardList,
                        onClick: e => {
                            e.target.getAttribute("class") === Ri.cardList && t.assistantActions.next({
                                type: me.Type.clickOnEmpty
                            })
                        },
                        footer: o.createElement(te.F.Fragment, null, (0, r.pipe)(v, p.U((e => o.createElement(Bi, {
                            position: f,
                            isSuccess: e
                        }, o.createElement(ne, {
                            predictionsVM: m.predictionsPreviewViewModel
                        }))))))
                    }, (a => o.createElement(te.F.Fragment, null, (0, r.pipe)(F.aj(v, t.havePremiumAlerts), p.U((([r, d]) => r && !d ? o.createElement(o.Fragment, null, o.createElement(Li, {
                        headerVM: m.headerViewModel,
                        experiments: c
                    }), o.createElement(Di, {
                        successView: t.successView,
                        ref: u
                    })) : o.createElement(he.h, {
                        state: e,
                        cardsViewModel: i,
                        cardsListScrollManager: n,
                        connectorElements: a,
                        ref: u,
                        header: o.createElement(o.Fragment, null, o.createElement(Li, {
                            headerVM: m.headerViewModel,
                            experiments: c
                        }), d ? o.createElement("div", {
                            className: Ri.upgradeHookWrapper,
                            role: "uphook-wrapper"
                        }, ie.UI.mount(_e.n.TogglablePanel, t.upgradeHookFlow)) : null),
                        comparator: ve.O.listItemOrd,
                        capabilities: s,
                        intentDetectionViewModel: l
                    })))))))
                })),
                ji = o.forwardRef((({
                    viewModels: e,
                    header: t,
                    footer: i,
                    className: a
                }, n) => o.createElement(Fi.C, {
                    ref: n,
                    className: a
                }, (a => o.createElement(he.h, {
                    state: e.lensState,
                    cardsViewModel: e.cardsViewModel,
                    cardsListScrollManager: e.cardsListScrollManager,
                    connectorElements: a,
                    header: t,
                    footer: i,
                    comparator: ve.O.listItemOrd,
                    capabilities: e.capabilities,
                    intentDetectionViewModel: C.none
                })))));
            var Gi = i(73008);
            const Zi = ({
                children: e,
                layoutVM: t,
                panelClassName: i,
                contentClassName: a,
                footer: n,
                onClickBack: s,
                hideBackButton: r = Oe.h.create(!1),
                dataPartName: l
            }) => o.createElement("div", {
                className: Gi.viewOverlay,
                "data-grammarly-part": "assistant-view-overlay"
            }, o.createElement(te.F.Fragment, null, r.view((e => !e && o.createElement($.M, {
                className: Gi.viewOverlayGoBack,
                clickHandler: () => s ? s() : t.popActiveView(),
                dataGrammarlyPart: "assistant-go-back"
            }, "<- Back")))), o.createElement("div", {
                className: i || Gi.defaultViewOverlayPanel
            }, o.createElement("div", {
                className: a || Gi.content,
                "data-grammarly-part": l
            }, e), n && o.createElement("div", {
                className: Gi.footer
            }, n)));
            var Wi = i(28288),
                qi = i(42373),
                zi = i(40145);
            const Yi = o.forwardRef((({
                    emogenieService: e,
                    viewModels: t
                }, i) => o.createElement(Zi, {
                    dataPartName: "emogenie-view-overlay",
                    layoutVM: t.assistantLayoutViewModel,
                    panelClassName: Gi.gradientViewOverlayPanel,
                    hideBackButton: t.user.view((e => e.isAnonymous))
                }, o.createElement(te.F.Fragment, null, t.lensPreviewViewModel.getLens(M.R.SpecialId.PredictionEmogenie).pipe(p.U((e => e.count > 0)), T.x(), p.U((a => a ? o.createElement(ji, {
                    key: "emogeniePredictionCardList",
                    viewModels: t,
                    ref: i,
                    header: o.createElement(o.Fragment, null, o.createElement(Ki, {
                        emogenieService: e
                    }), o.createElement("div", {
                        className: zi.relatedSuggestionsTitle
                    }, "RELATED SUGGESTIONS"))
                }) : o.createElement("div", {
                    className: Gi.gradientViewOverlayContent
                }, o.createElement(Ki, {
                    emogenieService: e
                }))))))))),
                Ki = ({
                    emogenieService: e
                }) => {
                    var t;
                    const i = e.viewState.get(),
                        a = null === (t = i.report) || void 0 === t ? void 0 : t.institutionLogo,
                        n = i.isBrandTonesEnabled ? o.createElement("div", null, a ? o.createElement("img", {
                            className: Gi.logo,
                            src: a
                        }) : null, i.institutionName, " Tone detector") : "Tone detector";
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: Gi.defaultViewOverlayHeader
                    }, n, (0, Ht.G6)() ? null : o.createElement(Wi.m, {
                        secondary: !0
                    })), o.createElement(te.F.Fragment, null, e.viewState.view((({
                        report: t,
                        emotionsPoll: i,
                        settings: a,
                        isBrandTonesEnabled: n
                    }) => t && Array.isArray(t.emotions) && o.createElement(qi.G, {
                        key: "emogenieReportPopup",
                        showBanner: !1,
                        report: t,
                        actions: e.actions,
                        emotionsPoll: i,
                        settings: a,
                        isBrandTonesEnabled: n
                    })))))
                };
            var Qi = i(53844);
            const $i = ({
                feedbackVM: e,
                layoutVM: t
            }) => {
                const i = e.entryPoint === Be.Q.smartPhrases;
                return o.createElement(Zi, {
                    dataPartName: "feedback-view-overlay",
                    layoutVM: t,
                    panelClassName: Gi.gradientViewOverlayPanel
                }, o.createElement("div", {
                    className: Gi.gradientViewOverlayContent
                }, o.createElement("div", {
                    className: Gi.defaultViewOverlayHeader
                }, "Product Feedback"), o.createElement(Qi.q, {
                    domain: e.getDomain(),
                    onClose: () => t.popActiveView(),
                    align: "left",
                    style: {
                        height: "calc(100% - 48px)"
                    },
                    title: i ? o.createElement("span", null, "How do you like ", o.createElement("br", null), " this feature?") : void 0,
                    onSubmit: t => e.submitFeedback(t),
                    withScore: !0,
                    fixSubmitButtonOverflowBottomPadding: !0,
                    hideLogo: !0
                })))
            };
            var Xi = i(22667),
                Ji = i(78846);
            const ea = e => o.createElement("div", {
                    className: Ji.logo_score
                }, ie.UI.mount(ra, ie.Z.animatingFlow((() => e.headerVM.logoScore), ta))),
                ta = (e, t) => (0, r.pipe)(e, C.filter((e => e.type !== t.type)), C.map((() => ki.Hk("fadeout", "fadein")))),
                ia = ie.UI.Node.make((() => o.createElement(Xi.K, {
                    className: Ji.grammarly_logo,
                    size: 22
                }))),
                aa = ie.UI.Node.make((({
                    view: e
                }) => o.createElement(te.F.div, {
                    className: Ji.score_container,
                    "data-grammarly-part": "assistant-score"
                }, (0, r.pipe)(e("score"), (0, p.U)((({
                    capiScore: e,
                    isLoading: t
                }) => o.createElement(o.Fragment, null, o.createElement(yi, {
                    generalScore: e,
                    strokeWidth: 2,
                    width: 22,
                    fontSize: e < 100 ? 11 : 9,
                    isLoading: t,
                    componentStyle: {
                        transform: "translate(2px, -2px) rotate(-90deg)",
                        cursor: "default"
                    }
                })))))))),
                na = ie.UI.Union.make("type", {
                    logo: ia,
                    score: aa
                }),
                sa = ie.UI.Transition.make({
                    fadein: Ji.logoscore_fadein
                }, {
                    fadeout: Ji.logoscore_fadeout
                }),
                ra = ie.UI.Animated.make(sa, na);
            var oa = i(22679),
                la = i(2027),
                ca = i(3860),
                da = i(1620);
            const pa = ({
                    color: e = z.Z.neutral50
                }) => o.createElement("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, o.createElement("path", {
                    d: "M15.8256 15.75L21.5 10M21.5 10V7.375M21.5 10H24.1047M23.5 5.5V8.125H26.1047M11.3605 24L12.8462 21.375M12.8462 21.375C13.734 21.8536 14.7483 22.125 15.8256 22.125C16.9028 22.125 17.9172 21.8536 18.805 21.375M12.8462 21.375C10.8548 20.3014 9.5 18.1852 9.5 15.75C9.5 12.2292 12.3321 9.375 15.8256 9.375C16.8052 9.375 17.7327 9.59941 18.5605 10M20.2907 24L18.805 21.375M18.805 21.375C20.7964 20.3014 22.1512 18.1852 22.1512 15.75C22.1512 14.7652 21.9296 13.8326 21.534 13M16.5 12.4435C16.2822 12.3986 16.0566 12.375 15.8256 12.375C13.9761 12.375 12.4767 13.886 12.4767 15.75C12.4767 17.614 13.9761 19.125 15.8256 19.125C17.6751 19.125 19.1744 17.614 19.1744 15.75C19.1744 15.5171 19.151 15.2897 19.1064 15.07",
                    stroke: e,
                    strokeLinecap: "round"
                })),
                ha = ({
                    color: e = z.Z.neutral50
                }) => o.createElement("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, o.createElement("path", {
                    d: "M15.5 9.5V9C15.2239 9 15 9.22386 15 9.5H15.5ZM17.5 9.5H18C18 9.22386 17.7761 9 17.5 9V9.5ZM20.8333 10.8333L21.1869 10.4798C21.0931 10.386 20.9659 10.3333 20.8333 10.3333C20.7007 10.3333 20.5735 10.386 20.4798 10.4798L20.8333 10.8333ZM22.1667 12.1667L22.5202 12.5202C22.7155 12.325 22.7155 12.0084 22.5202 11.8131L22.1667 12.1667ZM23.5 15.5H24C24 15.2239 23.7761 15 23.5 15V15.5ZM23.5 17.5V18C23.7761 18 24 17.7761 24 17.5H23.5ZM22.1667 20.8333L22.5202 21.1869C22.7155 20.9916 22.7155 20.675 22.5202 20.4798L22.1667 20.8333ZM20.8333 22.1667L20.4798 22.5202C20.675 22.7155 20.9916 22.7155 21.1869 22.5202L20.8333 22.1667ZM17.5 23.5V24C17.7761 24 18 23.7761 18 23.5H17.5ZM15.5 23.5H15C15 23.7761 15.2239 24 15.5 24V23.5ZM12.1667 22.1667L11.8131 22.5202C12.0084 22.7155 12.325 22.7155 12.5202 22.5202L12.1667 22.1667ZM10.8333 20.8333L10.4798 20.4798C10.386 20.5735 10.3333 20.7007 10.3333 20.8333C10.3333 20.9659 10.386 21.0931 10.4798 21.1869L10.8333 20.8333ZM9.5 17.5H9C9 17.7761 9.22386 18 9.5 18V17.5ZM9.5 15.5V15C9.22386 15 9 15.2239 9 15.5H9.5ZM10.8333 12.1667L10.4798 11.8131C10.386 11.9069 10.3333 12.0341 10.3333 12.1667C10.3333 12.2993 10.386 12.4265 10.4798 12.5202L10.8333 12.1667ZM12.1667 10.8333L12.5202 10.4798C12.4265 10.386 12.2993 10.3333 12.1667 10.3333C12.0341 10.3333 11.9069 10.386 11.8131 10.4798L12.1667 10.8333ZM12.7686 11.4353L12.4151 11.7888L12.7686 11.4353ZM11.4353 12.7686L11.0817 13.1222L11.4353 12.7686ZM21.5647 20.2314L21.2112 20.5849L21.5647 20.2314ZM21.5647 12.7686L21.2112 12.4151L21.5647 12.7686ZM15.5 10H17.5V9H15.5V10ZM17 9.5V10.3039H18V9.5H17ZM20.5849 11.7888L21.1869 11.1869L20.4798 10.4798L19.8778 11.0817L20.5849 11.7888ZM20.4798 11.1869L21.8131 12.5202L22.5202 11.8131L21.1869 10.4798L20.4798 11.1869ZM21.8131 11.8131L21.2112 12.4151L21.9183 13.1222L22.5202 12.5202L21.8131 11.8131ZM22.6961 16H23.5V15H22.6961V16ZM23 15.5V17.5H24V15.5H23ZM23.5 17H22.6961V18H23.5V17ZM21.2112 20.5849L21.8131 21.1869L22.5202 20.4798L21.9183 19.8778L21.2112 20.5849ZM21.8131 20.4798L20.4798 21.8131L21.1869 22.5202L22.5202 21.1869L21.8131 20.4798ZM21.1869 21.8131L20.5849 21.2112L19.8778 21.9183L20.4798 22.5202L21.1869 21.8131ZM17 22.6961V23.5H18V22.6961H17ZM17.5 23H15.5V24H17.5V23ZM16 23.5V22.6961H15V23.5H16ZM12.4151 21.2112L11.8131 21.8131L12.5202 22.5202L13.1222 21.9183L12.4151 21.2112ZM12.5202 21.8131L11.1869 20.4798L10.4798 21.1869L11.8131 22.5202L12.5202 21.8131ZM11.1869 21.1869L11.7888 20.5849L11.0817 19.8778L10.4798 20.4798L11.1869 21.1869ZM10.3039 17H9.5V18H10.3039V17ZM10 17.5V15.5H9V17.5H10ZM9.5 16H10.3039V15H9.5V16ZM11.7888 12.4151L11.1869 11.8131L10.4798 12.5202L11.0817 13.1222L11.7888 12.4151ZM11.1869 12.5202L12.5202 11.1869L11.8131 10.4798L10.4798 11.8131L11.1869 12.5202ZM11.8131 11.1869L12.4151 11.7888L13.1222 11.0817L12.5202 10.4798L11.8131 11.1869ZM16 10.3039V9.5H15V10.3039H16ZM19.6667 16.5C19.6667 14.7511 18.2489 13.3333 16.5 13.3333V14.3333C17.6966 14.3333 18.6667 15.3034 18.6667 16.5H19.6667ZM16.5 19.6667C18.2489 19.6667 19.6667 18.2489 19.6667 16.5H18.6667C18.6667 17.6966 17.6966 18.6667 16.5 18.6667V19.6667ZM12.4151 11.7888C13.738 13.1118 16 12.1748 16 10.3039H15C15 11.2839 13.8151 11.7747 13.1222 11.0817L12.4151 11.7888ZM10.3039 16C12.1748 16 13.1118 13.738 11.7888 12.4151L11.0817 13.1222C11.7747 13.8151 11.2839 15 10.3039 15V16ZM11.7888 20.5849C13.1118 19.262 12.1748 17 10.3039 17V18C11.2839 18 11.7747 19.1849 11.0817 19.8778L11.7888 20.5849ZM17 10.3039C17 12.1748 19.262 13.1118 20.5849 11.7888L19.8778 11.0817C19.1849 11.7747 18 11.2839 18 10.3039H17ZM13.3333 16.5C13.3333 18.2489 14.7511 19.6667 16.5 19.6667V18.6667C15.3034 18.6667 14.3333 17.6966 14.3333 16.5H13.3333ZM16 22.6961C16 20.8252 13.738 19.8882 12.4151 21.2112L13.1222 21.9183C13.8151 21.2253 15 21.7161 15 22.6961H16ZM20.5849 21.2112C19.262 19.8882 17 20.8252 17 22.6961H18C18 21.7161 19.1849 21.2253 19.8778 21.9183L20.5849 21.2112ZM22.6961 17C20.8252 17 19.8882 19.262 21.2112 20.5849L21.9183 19.8778C21.2253 19.1849 21.7161 18 22.6961 18V17ZM21.2112 12.4151C19.8882 13.738 20.8252 16 22.6961 16V15C21.7161 15 21.2253 13.8151 21.9183 13.1222L21.2112 12.4151ZM14.3333 16.5C14.3333 15.3034 15.3034 14.3333 16.5 14.3333V13.3333C14.7511 13.3333 13.3333 14.7511 13.3333 16.5H14.3333Z",
                    fill: e
                })),
                ma = e => {
                    const t = (0, la.e8)(),
                        [i, a] = o.useState(!1),
                        [n, s] = o.useState(!1),
                        l = e.viewModels.assistantLayoutViewModel,
                        c = e.viewModels.assistantHeaderViewModel,
                        d = o.useContext(di.Context),
                        h = (0, r.pipe)(e.viewModels.assistantProofitViewModel, C.map((e => e.feature)), C.map((e => o.createElement(te.F.Fragment, null, F.aj([e.layoutCreated, l.activeView.view((t => t.type === e.assistantViewType()))]).pipe(p.U((([t, i]) => t ? o.createElement(fi.u, {
                            message: d.proofitTooltip,
                            showDelay: oa.gk,
                            disabled: i
                        }, o.createElement("div", {
                            "data-grammarly-part": "assistant-header-action-btn-proofit",
                            className: Ji.headerActionBtn
                        }, o.createElement(ca.h, {
                            onClick: () => i ? l.popActiveView() : l.pushActiveView({
                                type: e.assistantViewType()
                            })
                        }, o.createElement("div", {
                            className: Ji.headerActionBtnProofitIcon
                        })))) : null)))))), C.toNullable),
                        m = o.createElement(fi.u, {
                            message: "Close panel",
                            showDelay: oa.gk
                        }, o.createElement("div", {
                            "data-grammarly-part": "assistant-header-action-btn-close",
                            className: Ji.headerActionBtn
                        }, o.createElement(da.P, {
                            onClick: c.close
                        })));
                    return o.createElement(fi.u, {
                        message: "Grab and drag to move panel",
                        showDelay: oa.gk,
                        disabled: i
                    }, o.createElement("div", Object.assign({}, (0, _i.Sh)(Ji.header, n && Ji.actions_hovered), {
                        ref: t,
                        onMouseDown: () => a(!0),
                        onMouseOut: () => a(!1)
                    }), o.createElement(ea, {
                        headerVM: c
                    }), o.createElement(ua, null), o.createElement(te.F.div, {
                        className: Ji.headerActions,
                        onMouseOver: () => s(!0),
                        onMouseOut: () => s(!1)
                    }, l.isHeaderNavigationEnabled.view((e => e ? o.createElement(o.Fragment, null, h, o.createElement(te.F.Fragment, null, c.showSetGoalsActionButton.view((e => e && o.createElement(fi.u, {
                        message: d.setGoalsTooltip,
                        showDelay: oa.gk
                    }, o.createElement("div", {
                        "data-grammarly-part": "assistant-header-action-btn-set-goals",
                        className: Ji.headerActionBtn
                    }, o.createElement(ca.h, {
                        onClick: () => c.open("setGoals")
                    }, o.createElement(pa, null))))))), o.createElement(te.F.Fragment, null, Oe.h.combine(c.showSettingsActionButton, l.activeView, ((e, t) => {
                        const i = t.type === f.a.Type.settings;
                        return e && o.createElement(fi.u, {
                            message: "Settings",
                            showDelay: oa.gk,
                            disabled: i
                        }, o.createElement("div", {
                            "data-grammarly-part": "assistant-header-action-btn-settings",
                            className: Ji.headerActionBtn
                        }, o.createElement(ca.h, {
                            onClick: () => i ? l.popActiveView() : l.pushActiveView({
                                type: f.a.Type.settings
                            })
                        }, o.createElement(ha, null))))
                    }))), m) : m)))))
                },
                ua = () => o.createElement("div", {
                    className: Ji.draggableWrapper,
                    "data-grammarly-part": "assistant-draggable-handler"
                }, o.createElement("div", {
                    className: Ji.draggable
                }));
            var ga = i(24606),
                va = i(95888),
                fa = i(2249),
                wa = i(41794),
                _a = i.n(wa);
            const ba = [{
                    question: "How important do you consider this piece of writing?",
                    helperText: "Make a selection below",
                    multiSelect: !1,
                    options: [{
                        value: "extremelyImportant",
                        label: "Extremely important"
                    }, {
                        value: "somewhatImportant",
                        label: "Somewhat important"
                    }, {
                        value: "neutral",
                        label: "Neutral"
                    }, {
                        value: "somewhatUnimportant",
                        label: "Somewhat unimportant"
                    }, {
                        value: "extremelyUnimportant",
                        label: "Extremely unimportant"
                    }]
                }, {
                    question: "What kind of feedback would be helpful when writing something like this?",
                    helperText: "Select all that apply",
                    multiSelect: !0,
                    options: [{
                        value: "clearCommunication",
                        label: "Clear communication"
                    }, {
                        value: "soundingFluent",
                        label: "Sounding fluent"
                    }, {
                        value: "toneAndDelivery",
                        label: "Tone and delivery"
                    }, {
                        value: "synonyms",
                        label: "Synonyms"
                    }, {
                        value: "conciseness",
                        label: "Conciseness"
                    }]
                }],
                ya = e => {
                    const [t, i] = (0, o.useState)(void 0);
                    return o.createElement("form", {
                        className: _a().contentContainer
                    }, o.createElement("div", {
                        className: _a().main
                    }, o.createElement("div", {
                        className: _a().question
                    }, e.question), o.createElement("div", {
                        className: _a().helperText
                    }, e.helperText), o.createElement("div", {
                        className: _a().optionsContainer
                    }, e.options.map(((e, a) => o.createElement("div", {
                        key: a,
                        className: _a().radioOption
                    }, o.createElement("input", {
                        type: "radio",
                        id: e.value,
                        name: "contact",
                        value: e.value,
                        checked: t === e.value,
                        onChange: e => i(e.target.value)
                    }), o.createElement("label", {
                        htmlFor: e.value
                    }, e.label)))))), o.createElement("div", {
                        className: _a().buttonsContainer
                    }, o.createElement(ga.z, {
                        style: {
                            color: "#4A6EE0"
                        },
                        kind: "transparent-hoverable",
                        onClick: e.dismissPopup
                    }, "Dismiss"), o.createElement(ga.z, {
                        disabled: !t,
                        onClick: () => t && e.submitAnswers([t])
                    }, "extremelyImportant" === t || "somewhatImportant" === t ? "Next" : "Submit")))
                },
                Ea = e => {
                    const [t, i] = (0, o.useState)([]);
                    return o.createElement("form", {
                        className: _a().contentContainer
                    }, o.createElement("div", {
                        className: _a().main
                    }, o.createElement("div", {
                        className: _a().question
                    }, e.question), o.createElement("div", {
                        className: _a().helperText
                    }, e.helperText), o.createElement("div", {
                        className: _a().optionsContainer
                    }, e.options.map(((e, a) => o.createElement(va.J, {
                        key: a,
                        className: _a().checkboxOption,
                        labelId: `importance-survey-${e.value}-checkbox`,
                        onChange: a => {
                            i(a ? [...t, e.value] : t.filter((t => t !== e.value)))
                        }
                    }, e.label))))), o.createElement("div", {
                        className: _a().buttonsContainer
                    }, o.createElement(ga.z, {
                        style: {
                            color: "#4A6EE0"
                        },
                        kind: "transparent-hoverable",
                        onClick: e.dismissPopup
                    }, "Dismiss"), o.createElement(ga.z, {
                        disabled: 0 === t.length,
                        onClick: () => e.submitAnswers(t)
                    }, "Submit")))
                },
                ka = e => o.createElement("div", {
                    className: _a().thankYouContentContainer
                }, o.createElement("div", {
                    className: _a().thankYouMain
                }, o.createElement(fa.R, {
                    size: 44
                }), o.createElement("div", {
                    className: _a().thankYou
                }, "Thank you!"), o.createElement("div", {
                    className: _a().thankYouSubtext
                }, "Your feedback helps us develop features tailored to your writing needs.")), o.createElement("div", {
                    className: _a().buttonsContainer
                }, o.createElement(ga.z, {
                    onClick: e.closePopup
                }, "Done"))),
                Sa = ({
                    importanceSurveyVM: e,
                    layoutVM: t
                }) => o.createElement(Zi, {
                    dataPartName: "importance-survey-view-overlay",
                    layoutVM: t,
                    hideBackButton: e.hideBackButton
                }, o.createElement("div", {
                    className: _a().container
                }, o.createElement("div", {
                    className: Gi.defaultViewOverlayHeader
                }, "Help Grammarly get smarter!"), o.createElement(te.F.Fragment, null, e.step.view((t => t === Ue.importance ? o.createElement(ya, Object.assign({}, ba[0], {
                    dismissPopup: e.dismiss,
                    submitAnswers: e.submit
                })) : t === Ue.kindOfFeedback ? o.createElement(Ea, Object.assign({}, ba[1], {
                    dismissPopup: e.dismiss,
                    submitAnswers: e.submit
                })) : t === Ue.thankYou ? o.createElement(ka, {
                    closePopup: e.done
                }) : null))))),
                Ca = ({
                    viewModels: e
                }) => o.createElement(te.F.Fragment, null, e.assistantLayoutViewModel.activeView.view((t => {
                    if (t.type !== f.a.Type.popup) return null;
                    const {
                        popupType: i
                    } = t;
                    return i === f.a.PopupType.importanceSurvey ? o.createElement(Sa, {
                        layoutVM: e.assistantLayoutViewModel,
                        importanceSurveyVM: e.importanceSurveyViewModel
                    }) : null
                })));
            var Ia = i(55364),
                Aa = i(86705);
            const Ma = ({
                layoutVM: e,
                onClickBack: t,
                children: i
            }) => {
                const [a, n] = o.useState(!1);
                return o.createElement(Zi, {
                    dataPartName: "proofit-view-overlay",
                    layoutVM: e,
                    panelClassName: Ia.proofitViewOverlayPanel,
                    onClickBack: t
                }, o.createElement("div", {
                    className: Ia.proofitViewOverlayContent,
                    tabIndex: -1,
                    ref: e => {
                        null === e || a || (e.focus(), n(!0))
                    }
                }, o.createElement("div", {
                    className: Gi.defaultViewOverlayHeader
                }, o.createElement("div", {
                    className: Ia.proofitViewOverlayHeader
                }, "Expert Writing Help", o.createElement(Aa.v, {
                    browser: e.browser,
                    className: Ia.proofitViewOverlayHeaderBetaBadge
                }))), i))
            };
            var xa = i(81108),
                La = i(59e3),
                Ta = i(17487);
            const Fa = ({
                turnaroundTime: e,
                freeTrialQuota: t,
                onSubmit: i,
                disabledInfo: a,
                isLoading: n,
                style: s,
                onTogglePrivacyInfo: r,
                showPrivacyInfo: l
            }) => {
                const [c, d] = o.useState(null != l && l), p = t > 0 ? t : 0;
                return o.useEffect((() => {
                    null == r || r(c)
                }), [c]), o.useEffect((() => {
                    d(null != l && l)
                }), [l]), o.createElement("div", {
                    "data-grammarly-part": "proofit-request-form",
                    style: {
                        width: "100%",
                        height: "100%",
                        ...s
                    }
                }, o.createElement("div", {
                    className: Ta.proofitRequestForm
                }, c ? o.createElement(o.Fragment, null, o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoTitle
                }, "How we protect you"), o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescription
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItem
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItemBulletPoint
                }), o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItemText
                }, "Our writing experts will see only your current email draft—no prior messages or contact details.")), o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItem
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItemBulletPoint
                }), o.createElement("div", {
                    className: Ta.proofitRequestFormPrivacyInfoDescriptionItemText
                }, "We will not sell, rent, or make public any of your personal data."))), o.createElement(ga.z, {
                    kind: "neutral",
                    onClick: () => d(!1)
                }, "Continue")) : o.createElement(o.Fragment, null, o.createElement("div", {
                    className: Ta.proofitRequestFormImg
                }), o.createElement("div", {
                    className: Ta.proofitRequestFormTitle
                }, "Get instant writing help"), o.createElement("div", {
                    className: Ta.proofitRequestFormDescription
                }, "Our writing experts are standing by to review your email."), o.createElement("div", {
                    className: Ta.proofitRequestFormCostAndTime
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormCost
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormCostAndTimeTitle
                }, p, " free ", ee.pluralize(p, "review", "reviews")), o.createElement("div", {
                    className: Ta.proofitRequestFormCostAndTimeSubtitle
                }, "left this month", o.createElement("sup", null, "*"))), o.createElement("div", {
                    className: Ta.proofitRequestFormTime
                }, o.createElement("div", {
                    className: Ta.proofitRequestFormCostAndTimeTitle
                }, e, " seconds"), o.createElement("div", {
                    className: Ta.proofitRequestFormCostAndTimeSubtitle
                }, "average turnaround"))), o.createElement(ga.z, {
                    kind: Boolean(a) ? "neutral" : "primary",
                    containerClassName: Ta.proofitRequestFormRequestBtn,
                    disabled: Boolean(a || n),
                    onClick: i
                }, n ? o.createElement("div", {
                    className: La.proofitRequestFormBtnLoadingSpinner
                }) : "Request now"), a || n ? a ? o.createElement("div", {
                    className: Ta.proofitRequestFormUnavailableMsg
                }, o.createElement(xa.Q, {
                    info: a
                })) : null : o.createElement(ga.z, {
                    kind: "link",
                    onClick: () => d(!0)
                }, "Learn how we protect your privacy"), o.createElement("div", {
                    className: Ta.proofitRequestFormFreeTrialFootnote
                }, o.createElement("span", null, o.createElement("sup", null, "*"), " included with your Premium subscription")))))
            };
            Fa.defaultProps = {
                disabledInfo: null,
                isLoading: !1
            };
            const Pa = ({
                layoutVM: e,
                proofitVM: t
            }) => {
                const i = (0, la.fW)(),
                    [a, n] = o.useState(!1);
                return o.createElement(Ma, {
                    layoutVM: e,
                    onClickBack: () => {
                        a ? n(!1) : e.popActiveView()
                    }
                }, o.createElement(te.F.Fragment, null, (0, F.aj)([t.feature.layoutCreated, t.feature.requestInfo, t.feature.turnaroundTime, t.feature.quotaRemaining, t.feature.requestDisabledInfo]).pipe((0, p.U)((([e, s, r, l, c]) => e && s.status !== Je.eE.REVIEWING ? o.createElement(Fa, {
                    turnaroundTime: r,
                    freeTrialQuota: l,
                    onSubmit: () => t.onSubmitRequest(i),
                    style: {
                        height: "calc(100% - 48px)"
                    },
                    disabledInfo: c,
                    isLoading: s.status === Je.eE.PREPARING || s.status === Je.eE.PRE_SUBMIT,
                    showPrivacyInfo: a,
                    onTogglePrivacyInfo: n
                }) : null)))))
            };
            var Ra = i(8400);
            const Va = ({
                    suggestionsMade: e,
                    onAccept: t
                }) => o.createElement("div", {
                    className: Ra.proofitReviewForm,
                    "data-grammarly-part": "proofit-review-form"
                }, o.createElement("div", {
                    className: Ra.proofitReviewFormImg
                }), o.createElement("div", {
                    className: Ra.proofitReviewFormTitle
                }, "Our experts made ", e, " ", ee.pluralize(e, "suggestion", "suggestions")), o.createElement("div", {
                    className: Ra.proofitReviewFormDescription
                }, "Their changes are highlighted in your email."), o.createElement(ga.z, {
                    onClick: t
                }, "Done")),
                Oa = ({
                    layoutVM: e,
                    proofitVM: t
                }) => {
                    const i = (0, la.fW)();
                    return o.createElement(Ma, {
                        layoutVM: e
                    }, o.createElement(te.F.Fragment, null, (0, F.aj)([t.feature.layoutCreated, t.feature.requestInfo]).pipe((0, p.U)((([e, a]) => e && a.status === Je.eE.REVIEWING ? o.createElement(Va, {
                        suggestionsMade: a.suggestionsMade,
                        onAccept: () => t.onCompleteRequest(i)
                    }) : null)))))
                };
            class Na extends o.Component {
                render() {
                    return this._idSuffix = this._idSuffix || "readersAttentionOnboardingBanner_" + Na._nextIdSuffix++, o.createElement("svg", {
                        className: this.props.className,
                        viewBox: "0 2 296 144",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.createElement("g", {
                        clipPath: `url(#clip0_${this._idSuffix})`
                    }, o.createElement("rect", {
                        width: "296",
                        height: "144",
                        fill: "#4A6EE0"
                    }), o.createElement("path", {
                        d: "M-5.5 -3.5H261.5V47.5H-5.5V-3.5Z",
                        fill: "#6E66DE",
                        stroke: "#1F243C"
                    }), o.createElement("path", {
                        d: "M-2.79293 -197.5L429.5 234.793V-197.5H-2.79293Z",
                        fill: "#15C39A",
                        stroke: "#1F243C"
                    }), o.createElement("path", {
                        d: "M219.057 33C222.992 33 226.182 29.8101 226.182 25.875C226.182 21.94 222.992 18.7501 219.057 18.7501C215.122 18.7501 211.932 21.94 211.932 25.875C211.932 29.8101 215.122 33 219.057 33Z",
                        fill: "#1F243C",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M221.477 31.0899C225.92 31.0899 229.522 27.4881 229.522 23.045C229.522 18.6018 225.92 15 221.477 15C217.033 15 213.432 18.6018 213.432 23.045C213.432 27.4881 217.033 31.0899 221.477 31.0899Z",
                        fill: "#41D9B5",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M220.188 27.045C220.009 27.045 219.841 26.9778 219.717 26.8434L216.927 24.0646C216.67 23.8069 216.67 23.3811 216.927 23.1122C217.185 22.8545 217.611 22.8545 217.88 23.1122L220.188 25.4204L225.353 20.2662C225.611 20.0085 226.037 20.0085 226.306 20.2662C226.563 20.5239 226.563 20.9497 226.306 21.2186L220.67 26.8546C220.535 26.9778 220.367 27.045 220.188 27.045Z",
                        fill: "white"
                    }), o.createElement("path", {
                        d: "M68.125 57C72.06 57 75.25 53.8101 75.25 49.875C75.25 45.94 72.06 42.7501 68.125 42.7501C64.19 42.7501 61 45.94 61 49.875C61 53.8101 64.19 57 68.125 57Z",
                        fill: "#1F243C",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M70.545 55.0899C74.9881 55.0899 78.5899 51.4881 78.5899 47.045C78.5899 42.6018 74.9881 39 70.545 39C66.1018 39 62.5 42.6018 62.5 47.045C62.5 51.4881 66.1018 55.0899 70.545 55.0899Z",
                        fill: "#41D9B5",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M69.2564 51.045C69.0771 51.045 68.909 50.9778 68.7858 50.8434L65.9958 48.0646C65.7381 47.8069 65.7381 47.3811 65.9958 47.1122C66.2535 46.8545 66.6793 46.8545 66.9482 47.1122L69.2564 49.4204L74.4217 44.2662C74.6794 44.0085 75.1052 44.0085 75.3741 44.2662C75.6318 44.5239 75.6318 44.9497 75.3741 45.2186L69.7382 50.8546C69.6037 50.9778 69.4357 51.045 69.2564 51.045Z",
                        fill: "white"
                    }), o.createElement("rect", {
                        x: "132",
                        y: "38",
                        width: "39",
                        height: "24",
                        rx: "2",
                        fill: "#1F243C",
                        stroke: "#1F243C"
                    }), o.createElement("rect", {
                        x: "135",
                        y: "35",
                        width: "39",
                        height: "24",
                        rx: "2",
                        fill: "#F8C6DA",
                        stroke: "#1F243C"
                    }), o.createElement("path", {
                        d: "M135 58.3296L149.303 47.4857L153.298 44.4591C154.007 43.923 154.993 43.923 155.702 44.4591L159.697 47.4857L174 58.3296",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M173.914 35.5L159.698 47.6583L155.806 50.9962C155.063 51.6361 153.956 51.6361 153.212 50.9962L149.303 47.6583L135.087 35.5",
                        fill: "#F8C6DA"
                    }), o.createElement("path", {
                        d: "M173.914 35.5L159.698 47.6583L155.806 50.9962C155.063 51.6361 153.956 51.6361 153.212 50.9962L149.303 47.6583L135.087 35.5",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("rect", {
                        x: "135",
                        y: "35",
                        width: "39",
                        height: "24",
                        rx: "2",
                        stroke: "#1F243C"
                    }), o.createElement("rect", {
                        y: "32",
                        width: "296",
                        height: "112",
                        fill: `url(#paint0_linear_${this._idSuffix})`
                    }), o.createElement("path", {
                        d: "M185.5 22C185.5 18.961 183.039 16.5 180 16.5C183.039 16.5 185.5 14.039 185.5 11C185.5 14.039 187.961 16.5 191 16.5C187.965 16.5 185.5 18.9651 185.5 22Z",
                        fill: "#F9EA9E",
                        stroke: "#1F243C",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), o.createElement("path", {
                        d: "M239.5 128C239.5 124.961 237.039 122.5 234 122.5C237.039 122.5 239.5 120.039 239.5 117C239.5 120.039 241.961 122.5 245 122.5C241.965 122.5 239.5 124.965 239.5 128Z",
                        fill: "#F9EA9E",
                        stroke: "#1F243C",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), o.createElement("path", {
                        d: "M24.5 63C24.5 59.961 22.039 57.5 19 57.5C22.039 57.5 24.5 55.039 24.5 52C24.5 55.039 26.961 57.5 30 57.5C26.9651 57.5 24.5 59.9651 24.5 63Z",
                        fill: "#F9EA9E",
                        stroke: "#1F243C",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), o.createElement("rect", {
                        x: "263",
                        y: "76",
                        width: "63",
                        height: "77",
                        rx: "2",
                        fill: "#1F243C",
                        stroke: "#1F243C"
                    }), o.createElement("rect", {
                        x: "267",
                        y: "72",
                        width: "63",
                        height: "77",
                        rx: "2",
                        fill: "#F9FAFF",
                        stroke: "#1F243C"
                    }), o.createElement("path", {
                        d: "M318.759 89.7112H278",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M318.759 101.227H278",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M318.759 112.743H278.095",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("path", {
                        d: "M318.759 124.259H278",
                        stroke: "#1F243C",
                        strokeMiterlimit: "10"
                    }), o.createElement("g", {
                        style: {
                            mixBlendMode: "multiply"
                        },
                        opacity: "0.4"
                    }, o.createElement("path", {
                        d: "M318.759 101.227H278",
                        stroke: "#41D9B5",
                        strokeWidth: "10",
                        strokeMiterlimit: "10"
                    })), o.createElement("g", {
                        style: {
                            mixBlendMode: "multiply"
                        },
                        opacity: "0.4"
                    }, o.createElement("path", {
                        d: "M305.43 112.743H278.095",
                        stroke: "#41D9B5",
                        strokeWidth: "10",
                        strokeMiterlimit: "10"
                    }))), o.createElement("defs", null, o.createElement("linearGradient", {
                        id: `paint0_linear_${this._idSuffix}`,
                        x1: "148",
                        y1: "32",
                        x2: "148",
                        y2: "144",
                        gradientUnits: "userSpaceOnUse"
                    }, o.createElement("stop", {
                        stopColor: "#26307D",
                        stopOpacity: "0"
                    }), o.createElement("stop", {
                        offset: "1",
                        stopColor: "#26307D",
                        stopOpacity: "0.5"
                    })), o.createElement("clipPath", {
                        id: `clip0_${this._idSuffix}`
                    }, o.createElement("rect", {
                        width: "296",
                        height: "144",
                        fill: "white"
                    }))))
                }
            }
            Na._nextIdSuffix = 0;
            var Da = i(80895),
                Ua = i(44715);
            const Ba = ({
                layoutVM: e
            }) => o.createElement(Zi, {
                dataPartName: "readers-attention-help-overlay",
                layoutVM: e,
                panelClassName: Ua.helpPanel,
                contentClassName: Ua.helpPanelContent
            }, o.createElement("div", {
                className: Ua.helpBanner
            }, o.createElement(Na, {
                className: Ua.helpBannerImage
            }), o.createElement("div", {
                className: Ua.helpHeader
            }, "Reader′s attention", o.createElement(Da.C, {
                title: "NEW",
                kind: "gold"
            })), o.createElement("div", {
                className: Ua.helpBannerMessage
            }, "Get your important information across")), o.createElement("div", {
                className: Ua.helpContent
            }, o.createElement("div", null, "Grammarly predicts which parts of your email will be read.", o.createElement("ul", null, o.createElement("li", null, o.createElement("span", {
                className: Ua.heatmap
            }, o.createElement("b", null, "Highlighted text is most likely to be read."))), o.createElement("li", null, "The rest of the text may be skimmed or skipped.")), "Follow Grammarly’s suggestions to keep your reader’s attention.")));
            var Ha = i(47960);
            const ja = ({
                feedbackVM: e,
                className: t,
                entryPoint: i
            }) => o.createElement(fi.u, {
                showDelay: oa.gk,
                message: "Leave feedback"
            }, o.createElement("div", Object.assign({}, (0, _i.Sh)(Ri.feedback_button, t), {
                onClick: () => e.openFeedback(i),
                "data-grammarly-part": "assistant-feedback-btn"
            }), o.createElement(Ha.A, {
                color: z.Z.blue50
            }), "Anything we can improve?"));
            var Ga = i(82318);
            const Za = o.forwardRef((({
                    viewModels: e,
                    readersAttentionVM: t,
                    checklistVM: i,
                    headerVM: a
                }, n) => o.createElement(Zi, {
                    dataPartName: "readers-attention-view-overlay",
                    layoutVM: e.assistantLayoutViewModel,
                    panelClassName: Gi.gradientViewOverlayPanel
                }, o.createElement(ji, {
                    key: "takeawaysPredictionCardList",
                    ref: n,
                    viewModels: e,
                    className: Ga.cardList,
                    header: o.createElement(Wa, {
                        readersAttentionVM: t,
                        checklistVM: i,
                        headerVM: a
                    }),
                    footer: o.createElement(ja, {
                        feedbackVM: e.assistantFeedbackViewModel,
                        entryPoint: Be.Q.readersAttention
                    })
                })))),
                Wa = ({
                    readersAttentionVM: e,
                    headerVM: t,
                    checklistVM: i
                }) => {
                    const a = t.message.view((e => ({
                        content: e
                    })));
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: Gi.defaultViewOverlayHeader
                    }, o.createElement("div", {
                        className: Ga.headerGroup
                    }, "Reader′s attention", o.createElement("div", {
                        onClick: () => e.showHelp(f.a.ReadersAttentionHelp.Caller.headerButton),
                        className: Ga.questionMarkButton,
                        "data-grammarly-part": "readers-attention-question-mark-button"
                    }, o.createElement(X.JO.QuestionMark, {
                        width: 12,
                        className: Ga.questionMarkIcon
                    }))), o.createElement(Da.C, {
                        title: "BETA",
                        kind: "success"
                    })), o.createElement(Ci, {
                        summaryVM: {
                            summary: a
                        },
                        className: Ga.summaryWrapper
                    }), o.createElement("div", {
                        className: Ga.message
                    }, "Grammarly", " ", o.createElement("div", {
                        onClick: () => e.showHelp(f.a.ReadersAttentionHelp.Caller.descriptionLink),
                        className: Ga.inlineButton,
                        "data-grammarly-part": "readers-attention-help-link"
                    }, "highlights sentences"), " ", "that are likely to be read. If important sentences aren’t highlighted, state them earlier in the message or make them shorter."), o.createElement(te.F.div, Object.assign({}, (0, _i.Sh)(zi.relatedSuggestionsTitle, Ga.relatedSuggestionsTitle)), i.checklist.view((e => `${ct(e)} OF ${e.size} COMPLETED`))))
                };
            var qa = i(19106),
                za = i(17324),
                Ya = i(4148);
            const Ka = () => o.createElement("svg", {
                width: "11",
                height: "12",
                viewBox: "0 0 11 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.createElement("path", {
                d: "M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",
                stroke: "#4A6EE0",
                strokeLinecap: "round"
            }));
            var Qa = i(26485),
                $a = i(68089);
            const Xa = ({
                children: e,
                blocked: t,
                wrapperClassName: i
            }) => t ? o.createElement(fi.u, {
                message: "Sign in to use this feature",
                position: "top"
            }, o.createElement("div", {
                className: i
            }, o.createElement("div", {
                className: $a.hover_blocker,
                onClick: A.EI,
                onDoubleClick: A.EI
            }, e))) : o.createElement(o.Fragment, null, e);
            class Ja extends o.Component {
                constructor() {
                    super(...arguments), this.handleChange = e => {
                        (this.props.skipTrustedCheck || e.isTrusted) && this.props.onChange(e)
                    }
                }
                render() {
                    return o.createElement("div", Object.assign({}, (0, _i.Sh)(this.props.extraClassName, Qa.setting_item, this.props.disabled && Qa.disabled)), o.createElement("label", {
                        className: Qa.select_checkbox,
                        "data-grammarly-part": this.props.dataGrammarlyPart
                    }, o.createElement("div", null, this.props.children, this.props.beta && o.createElement("span", {
                        className: (0, Ht.G6)() ? Qa.new : Qa.beta
                    })), o.createElement(Xa, {
                        wrapperClassName: Qa.checkbox_control_wrapper,
                        blocked: this.props.disabled
                    }), o.createElement("input", {
                        className: Qa.checkbox,
                        onChange: this.props.disabled ? A.EI : this.handleChange,
                        checked: this.props.checked,
                        type: "checkbox"
                    }), o.createElement("div", Object.assign({}, (0, _i.Sh)(Qa.checkbox_check, this.props.grayOut && Qa.grayOut, this.props.checked ? Qa.on : Qa.off)), o.createElement("div", Object.assign({}, (0, _i.Sh)(Qa.on_off)), this.props.checked ? "ON" : "OFF"), o.createElement("div", {
                        className: Qa.checkbox_check_round
                    }))))
                }
            }
            var en = i(62111),
                tn = i(47740);
            const an = ({
                showTitle: e,
                openGBLanding: t
            }) => o.createElement("div", {
                className: tn.container
            }, o.createElement("div", {
                className: tn.contant
            }, e && o.createElement("div", {
                className: tn.title
            }, "Grammarly for your team"), o.createElement("div", null, "Help your team make your business look great with top-notch writing."), o.createElement("div", {
                className: tn.spacer
            }), o.createElement(ga.z, {
                size: "medium",
                onClick: () => {
                    t((0, Ht.Um)().businessEHomepage), (0, en.T)().gGbUpHookClick()
                }
            }, "Explore Grammarly Business")));
            var nn = i(1005);
            const sn = ({
                heading: e,
                enabled: t,
                children: i
            }) => t ? o.createElement(o.Fragment, null, o.createElement("div", {
                className: nn.heading
            }, e), o.createElement("div", null, i)) : o.createElement(o.Fragment, null, i);
            var rn = i(4120),
                on = i(24372);
            class ln extends o.Component {
                constructor() {
                    super(...arguments), this.onEnableDefsClick = e => {
                        const {
                            toggleDefs: t
                        } = this.props, i = e.target.checked;
                        t(i), on.J.definitionToggleClick(i ? "on" : "off"), (0, en.T)().toggleExtensionDefs(i)
                    }
                }
                render() {
                    const {
                        enabledDefs: e,
                        disabled: t
                    } = this.props;
                    return o.createElement(Ja, {
                        onChange: this.onEnableDefsClick,
                        checked: e,
                        extraClassName: za.def_switcher,
                        dataGrammarlyPart: "definitionAndSynonymsSwitcher",
                        disabled: t,
                        skipTrustedCheck: this.props.skipTrustedCheck
                    }, "Show definitions and synonyms ", o.createElement("br", null), "via double clicks (all sites)")
                }
            }
            var cn = i(6304),
                dn = i(66402);
            const pn = () => o.createElement("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.createElement("path", {
                d: "M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z",
                stroke: "#6D758D",
                strokeWidth: "2"
            }));
            var hn = i(7046),
                mn = i(95286),
                un = i(71527);
            const gn = {
                    american: o.createElement((() => o.createElement("div", {
                        className: dn.american,
                        role: "presentation"
                    })), null),
                    australian: o.createElement((() => o.createElement("div", {
                        className: dn.australian,
                        role: "presentation"
                    })), null),
                    british: o.createElement((() => o.createElement("div", {
                        className: dn.british,
                        role: "presentation"
                    })), null),
                    canadian: o.createElement((() => o.createElement("div", {
                        className: dn.canadian,
                        role: "presentation"
                    })), null)
                },
                vn = ["british", "american", "australian", "canadian"],
                fn = e => {
                    return o.createElement(o.Fragment, null, gn[e.dialect], o.createElement("span", {
                        "data-test-attr": `dialect_${e.dialect}`,
                        className: un.label
                    }, (t = e.dialect).charAt(0).toUpperCase() + t.slice(1) + " English"));
                    var t
                };
            class wn extends o.Component {
                render() {
                    const e = this.props.dropdownOnTop ? {
                        customPosition: {
                            top: "-100px",
                            left: "0"
                        },
                        vAlign: "top"
                    } : {
                        customPosition: {
                            top: "36px",
                            left: "0"
                        }
                    };
                    return o.createElement(mn.L, Object.assign({}, e, {
                        showDelay: 0,
                        closeDelay: 150,
                        appearanceBehavior: "mouseClick",
                        name: "dialect",
                        label: o.createElement(hn.zx.White, {
                            name: "dialect.box",
                            style: {
                                padding: "0"
                            }
                        }, o.createElement("div", {
                            className: un.selected
                        }, o.createElement(fn, {
                            dialect: this.props.dialect
                        }), o.createElement(pn, null)))
                    }), vn.filter((e => e !== this.props.dialect)).map((e => o.createElement(hn.zx.Flat, {
                        name: e,
                        onClick: () => this.props.onSetDialect(e),
                        key: e
                    }, o.createElement("div", {
                        className: un.option
                    }, o.createElement(fn, {
                        dialect: e
                    }))))))
                }
            }
            class _n extends o.Component {
                constructor() {
                    super(...arguments), this.setDialect = e => {
                        const {
                            changeStrongDialect: t,
                            dialectWeak: i
                        } = this.props;
                        t(e);
                        const a = e + "English";
                        on.J.languageSettingUpdate(a, "user", i && e === i)
                    }
                }
                render() {
                    const e = this.props.dialectStrong || this.props.dialectWeak || "american";
                    return o.createElement("div", Object.assign({}, (0, _i.Sh)(cn.line, this.props.disabled && cn.disabled)), o.createElement("div", null, "I write in"), o.createElement(Xa, {
                        blocked: this.props.disabled
                    }, o.createElement("div", {
                        className: cn.dialectPicker
                    }, o.createElement(wn, {
                        dialect: e,
                        onSetDialect: this.setDialect,
                        dropdownOnTop: !!this.props.dropdownOnTop
                    }))))
                }
            }
            const bn = ({
                    toggleHotkeys: e,
                    enabledHotkeys: t
                }) => {
                    const i = ((0, Ht.ED)() ? "Alt" : "Ctrl") + " + g";
                    return o.createElement(Ja, {
                        onChange: t => {
                            const i = t.target.checked;
                            e(i), on.J.hotkeyToggleClick(i ? "on" : "off")
                        },
                        checked: t,
                        extraClassName: za.hotkeys
                    }, o.createElement("span", {
                        className: za.shortcut_title
                    }, "Shortcut:"), " Open Popup editor ", o.createElement("br", null), o.createElement("span", {
                        className: za.shortcut
                    }, i))
                },
                yn = e => {
                    var t;
                    const i = "docs.google.com" === e.domain,
                        a = i ? "Google Docs" : e.domain,
                        n = i && (null === (t = e.experiments) || void 0 === t ? void 0 : t.anonUserGDocsSidebar),
                        {
                            enabledInConfig: s,
                            siteSwitcherChecked: r,
                            favicon: l
                        } = e,
                        c = r.checked && s,
                        d = s ? "Check for writing suggestions" : "Checking is not supported";
                    return o.createElement(Ja, {
                        grayOut: !s,
                        onChange: e => r.update(e.target.checked),
                        checked: c,
                        extraClassName: za.site_switcher,
                        dataGrammarlyPart: "siteSwitcher",
                        skipTrustedCheck: e.skipTrustedCheck
                    }, o.createElement("div", {
                        "data-test-attr": "siteControlsLabelText"
                    }, d, o.createElement("br", null), " ", o.createElement("span", {
                        className: za.domain
                    }, o.createElement("span", {
                        className: za.thin_text
                    }, "on"), " ", l && o.createElement("span", {
                        className: za.favicon
                    }, o.createElement("img", {
                        width: "16px",
                        height: "16px",
                        src: l
                    })), a, n && o.createElement("span", {
                        className: Qa.beta
                    }))))
                };
            var En = i(56542),
                kn = i(37896),
                Sn = i(23345);
            const Cn = o.createContext({}),
                In = e => {
                    const t = o.useContext(Cn),
                        {
                            registrationDate: i
                        } = e.user,
                        a = (0, kn.p6)(i);
                    return o.createElement("div", {
                        className: Sn.line
                    }, o.createElement("div", {
                        className: Sn.content
                    }, a && o.createElement("div", {
                        "data-test-attr": "checked_since"
                    }, "Grammarly has been correcting your text since ", a, "."), o.createElement("div", {
                        className: Sn.upgrade,
                        onClick: () => {
                            e.openSubscriptionDialog({
                                utmSource: "upHook",
                                utmCampaign: "extensionSettingsToolbar"
                            }), on.J.getPremiumButtonClick("settingsToolbar"), (0, en.T)().userUpgradeClick("settingsToolbar")
                        },
                        style: {
                            fontSize: t.ctaFontSize
                        }
                    }, "Go Premium to Enable Advanced Fixes")))
                },
                An = e => o.createElement(Ja, {
                    onChange: t => {
                        e.toggle(t.target.checked)
                    },
                    checked: e.enabled,
                    extraClassName: za.def_switcher
                }, "Correct spelling automatically"),
                Mn = e => o.createElement(Ja, {
                    checked: e.enabled,
                    extraClassName: za.def_switcher,
                    onChange: t => {
                        e.toggle(t.target.checked)
                    },
                    dataGrammarlyPart: "disableDesktopIntegrationToggle"
                }, o.createElement("div", {
                    className: za.llamaTitle
                }, "Check text with browser extension"), o.createElement("div", {
                    className: za.llamaDescription
                }, "Grammarly's browser extension was deactivated since you're using Grammarly's Desktop integration.")),
                xn = e => o.createElement(Ja, {
                    onChange: t => {
                        e.toggle(t.target.checked)
                    },
                    beta: !0,
                    checked: e.enabled,
                    extraClassName: za.def_switcher
                }, "Show phrasal predictions"),
                Ln = e => {
                    var t;
                    const {
                        actions: i,
                        activeTab: a,
                        config: n,
                        settings: s,
                        user: r,
                        siteCategory: l,
                        openSubscriptionDialog: c,
                        openGBLanding: d,
                        showGBUpHook: p,
                        placement: h,
                        showAutocorrectToggle: m,
                        dynamicConfig: u,
                        enableRenderingHack: g = !1
                    } = e;
                    g && o.useEffect((() => {
                        (0, Ht.CB)() && (self.screenLeft < 0 || self.screenTop < 0 || self.screenLeft > self.screen.width || self.screenTop > self.screen.height) && chrome.runtime.getPlatformInfo((e => {
                            if ("mac" === e.os) {
                                const e = new CSSStyleSheet;
                                e.insertRule("\n            @keyframes redraw {\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: .99;\n              }\n            }\n          "), e.insertRule("\n            html {\n              animation: redraw 1s linear infinite;\n            }\n          "), document.adoptedStyleSheets = [...document.adoptedStyleSheets, e]
                            }
                        }))
                    }), []);
                    const {
                        premium: v,
                        experiments: f,
                        anonymous: w
                    } = r, _ = p && v && !rn.n5.doesUserBelongToInstitution(r), b = v || w, y = f && f.hotkeysExperiment, E = e.siteSwitcherChecked || {
                        checked: !!s.enabled,
                        update: t => {
                            const {
                                siteCategory: a
                            } = e;
                            i.toggleSite(t, n.domain), on.J.checkingToggleClick("toolbar", a, t ? "on" : "off"), (0, en.T)().toggleExtension(t, "toolbar")
                        }
                    }, k = !1;
                    return o.createElement("div", {
                        className: En.settingsContent
                    }, o.createElement("div", {
                        className: En.heading
                    }, o.createElement("div", null, "Quick Settings"), o.createElement(ga.z, {
                        kind: "link",
                        onClick: () => {
                            e.openUrl((0, Ht.Um)().allSettings), on.J.allSettingsButtonClick(h)
                        }
                    }, o.createElement("div", {
                        className: En.allSettings
                    }, o.createElement("span", null, "All Settings"), o.createElement(Ka, null)))), Ya.V.showSettingPopupToggle(s, u, f, null == a ? void 0 : a.url) && o.createElement(sn, {
                        heading: "DESKTOP INTEGRATION SETTING",
                        enabled: k
                    }, o.createElement(Mn, {
                        toggle: e => {
                            i.setLlamaIntegrationDisable(e), on.J.desktopIntegrationToggleClick(e ? "on" : "off")
                        },
                        enabled: s.isLlamaIntegrationDisable || !1
                    }), o.createElement("div", {
                        className: En.separator
                    })), o.createElement(sn, {
                        heading: "SITE SETTINGS",
                        enabled: k
                    }, o.createElement(yn, {
                        domain: n.domain,
                        enabledInConfig: n.enabled,
                        siteSwitcherChecked: E,
                        favicon: null == a ? void 0 : a.favIconUrl,
                        siteCategory: l,
                        experiments: f
                    }), o.createElement("div", {
                        className: En.separator
                    })), o.createElement(sn, {
                        heading: "FEATURES (ALL SITES)",
                        enabled: k
                    }, o.createElement(ln, {
                        disabled: w,
                        enabledDefs: s.enabledDefs,
                        toggleDefs: i.toggleDefs
                    }), y && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: En.separator
                    }), o.createElement(bn, {
                        enabledHotkeys: s.enabledHotkeys || !1,
                        toggleHotkeys: i.toggleHotkeys
                    })), m && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: En.separator
                    }), o.createElement(An, {
                        enabled: s.autocorrectEnabled || !1,
                        toggle: e => {
                            i.toggleAutocorrect(e), on.J.autocorrectToggleClick(e ? "on" : "off")
                        }
                    })), (null === (t = r.experiments) || void 0 === t ? void 0 : t.autocompleteEnabled) && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: En.separator
                    }), o.createElement(xn, {
                        enabled: s.autocompleteEnabled || !1,
                        toggle: e => {
                            i.toggleAutocomplete(e), on.J.autocompleteFeatureToggleClick("popup", e ? "on" : "off")
                        }
                    }))), o.createElement(sn, {
                        heading: "CUSTOMIZE GRAMMARLY",
                        enabled: k
                    }, o.createElement(_n, {
                        changeStrongDialect: i.changeStrongDialect,
                        dialectStrong: s.dialectStrong,
                        dialectWeak: s.dialectWeak,
                        dropdownOnTop: b,
                        disabled: w
                    }), k), !b && o.createElement(In, {
                        user: r,
                        openSubscriptionDialog: c
                    }), _ && o.createElement(an, {
                        openGBLanding: d,
                        showTitle: "popup" === h
                    }))
                };
            var Tn = i(32138),
                Fn = i(82785),
                Pn = i(91574);
            const Rn = ({
                viewModels: e
            }) => {
                const {
                    domain: t,
                    actions: i,
                    state: a
                } = e.assistantSettingsViewModel, [n, s] = o.useState(!!a.view("commonSettings", "enabled").get()), r = {
                    checked: n,
                    update: s
                };
                return o.createElement(Zi, {
                    dataPartName: "settings-view-overlay",
                    layoutVM: e.assistantLayoutViewModel,
                    panelClassName: Gi.gradientViewOverlayPanel,
                    footer: o.createElement(ga.z, {
                        containerClassName: Pn.settingsDoneButton,
                        kind: "success",
                        type: "submit",
                        onClick: () => {
                            i.toggleSite(n, t), qa.J.checkingToggleClick("assistant", Fn.y.other, n ? "on" : "off"), (0, en.T)().toggleExtension(n, "assistant"), e.assistantLayoutViewModel.popActiveView()
                        },
                        style: {
                            height: "32px"
                        }
                    }, "Done")
                }, o.createElement("div", {
                    className: Gi.gradientViewOverlayContent
                }, o.createElement(te.F.Fragment, null, a.view((({
                    user: n,
                    commonSettings: s,
                    dynamicConfig: l
                }) => {
                    var c;
                    return o.createElement(Cn.Provider, {
                        value: {
                            ctaFontSize: 13
                        }
                    }, o.createElement(Ln, {
                        actions: i,
                        config: {
                            enabled: !0,
                            domain: t
                        },
                        settings: s,
                        user: n,
                        dynamicConfig: l,
                        siteCategory: Fn.y.other,
                        openSubscriptionDialog: () => e.upgradeViewModel.openUpgradeUrl(fe.L.Place.extensionSettingsAssistant),
                        openGBLanding: e => {
                            const t = (0, Tn.Z4)(e, "gbExtensionSettingsAssistant");
                            self.open(t)
                        },
                        openUrl: e => self.open(e),
                        showGBUpHook: (0, Ht.i7)(),
                        placement: "assistant",
                        showAutocorrectToggle: (0, Ht.i7)() || !!(null === (c = a.view("user", "experiments").get()) || void 0 === c ? void 0 : c.autoCompleteCorrectAllBrowsers),
                        siteSwitcherChecked: r
                    }))
                }))), o.createElement(ja, {
                    feedbackVM: e.assistantFeedbackViewModel,
                    entryPoint: Be.Q.settings
                })))
            };
            var Vn = i(86620),
                On = i(80550),
                Nn = i(92132),
                Dn = i(70091),
                Un = i(63544),
                Bn = i(17161),
                Hn = i(67521),
                jn = i(5817),
                Gn = i(71284),
                Zn = i(41046),
                Wn = i(41488),
                qn = i(97528),
                zn = i(53187),
                Yn = i(52342),
                Kn = i(8313);
            const Qn = o.memo((({
                    viewModels: e,
                    emogenieService: t,
                    height: i,
                    ready: a,
                    OuterElementsPortalSource: n
                }) => {
                    const s = new Vn.C;
                    (0, Ve.iR)("viewModels", e);
                    const l = (0, la.IQ)(),
                        c = o.useContext(la.Dg).state.pipe(E.h((e => !e.dragging)), h.O(Un.zM)),
                        d = o.useContext(Bn.Y),
                        m = Oe.h.create(Pi.Rect.empty),
                        {
                            initialPositionOffset: u
                        } = e.positionViewModel;
                    (0, Hn.A)((0, F.aj)([c, d]).pipe(p.U((([e, t]) => ({
                        height: t.height,
                        width: t.width,
                        top: t.top + e.translate.y + u.top,
                        left: t.left + e.translate.x + u.left,
                        bottom: t.top + t.height + e.translate.y,
                        right: t.left + t.width + e.translate.x
                    }))), Se.b(Ke.wW(m)))), (0, Hn.A)(c.pipe(Se.b((t => e.positionViewModel.onDrag(t))))), (0, Hn.A)(e.assistantLayoutViewModel.activeView.pipe(y.G(), Se.b((([t, i]) => {
                        t.type !== i.type && i.type === f.a.Type.default && e.cardsListScrollManager.paddingTop.set(0)
                    }))));
                    const g = o.useRef(null);
                    return o.useEffect((() => {
                        e.assistantCardListViewModel.cardListContext.next(C.fromNullable(g.current));
                        const t = g.current ? Ee.rl(g.current, {
                                subtree: !0,
                                childList: !0
                            }) : Et.C,
                            i = m.view((e => ({
                                top: e.top,
                                left: e.left
                            }))),
                            n = (0, r.pipe)(t, Yn.V((0, jn.m9)(1)), xe.b(10), Te.P()).subscribe((() => a(i, l)), (() => {
                                a(i, l, !0)
                            }));
                        return () => {
                            n.unsubscribe()
                        }
                    }), []), o.createElement($n, {
                        environment: s,
                        viewport: d.pipe(p.U((e => ({
                            height: e.height,
                            width: e.width,
                            top: e.top,
                            left: e.left,
                            bottom: e.top + e.height,
                            right: e.left + e.width
                        }))))
                    }, o.createElement(te.F.div, Object.assign({
                        "data-grammarly-part": "assistant-popup-content"
                    }, (0, _i.Sh)(Ri.assistant, l.pipe(h.O(!1), p.U((e => e && Ri.dragging)))), {
                        style: {
                            height: i,
                            maxHeight: "90vh"
                        }
                    }), o.createElement(ma, {
                        viewModels: e
                    }), e.assistantLayoutViewModel.activeView.view((i => i.type === f.a.Type.default ? o.createElement(Ui, {
                        viewModels: e,
                        ref: g,
                        key: "default-view"
                    }) : i.type === f.a.Type.emogenie ? o.createElement(Yi, {
                        emogenieService: t,
                        viewModels: e,
                        key: "emogenie-view",
                        ref: g
                    }) : i.type === f.a.Type.readersAttention ? o.createElement(Za, {
                        viewModels: e,
                        readersAttentionVM: e.readersAttentionViewModel,
                        checklistVM: e.readersAttentionChecklistViewModel,
                        headerVM: e.readersAttentionHeaderViewModel,
                        key: "readers-attention-view",
                        ref: g
                    }) : i.type === f.a.Type.readersAttentionHelp ? o.createElement(Ba, {
                        layoutVM: e.assistantLayoutViewModel,
                        key: "readers-attention-help"
                    }) : i.type === f.a.Type.feedback ? o.createElement($i, {
                        feedbackVM: e.assistantFeedbackViewModel,
                        layoutVM: e.assistantLayoutViewModel,
                        key: "feedback-view"
                    }) : i.type === f.a.Type.settings ? o.createElement(Rn, {
                        viewModels: e,
                        key: "settings-view"
                    }) : i.type === f.a.Type.proofitRequest && C.isSome(e.assistantProofitViewModel) ? o.createElement(Pa, {
                        layoutVM: e.assistantLayoutViewModel,
                        proofitVM: e.assistantProofitViewModel.value,
                        key: "proofit-request-view"
                    }) : i.type === f.a.Type.proofitReview && C.isSome(e.assistantProofitViewModel) ? o.createElement(Oa, {
                        layoutVM: e.assistantLayoutViewModel,
                        proofitVM: e.assistantProofitViewModel.value,
                        key: "proofit-review-view"
                    }) : i.type === f.a.Type.popup ? o.createElement(Ca, {
                        key: "popup-view",
                        viewModels: e
                    }) : null))), o.createElement(n, null, o.createElement(Dn.jv, null, o.createElement(On.L, {
                        modalManager: e.assistantModalManager
                    }))), o.createElement(zn.X, null))
                })),
                $n = ({
                    environment: e,
                    viewport: t,
                    children: i
                }) => {
                    const a = o.useRef(gi(pi.m.getConfig(e.has(Vn.U.Flag.isAppleSystem) ? "mac" : "windows")));
                    return o.createElement(Nn.Q, {
                        remSize: L.of(16),
                        setter: e => Zn.u.setRootCssVar(document.documentElement, e)
                    }, o.createElement(Vn.U.Context.Provider, {
                        value: e
                    }, o.createElement(Gn.a.Context.Provider, {
                        value: e
                    }, o.createElement(di.Context.Provider, {
                        value: a.current.assistant
                    }, o.createElement(pi.m.Context.Provider, {
                        value: a.current.denali
                    }, o.createElement(Kn.TG.ContextMock, null, o.createElement(Wn.l.RootVirtualContainer, {
                        viewport: t,
                        name: "draggable"
                    }, o.createElement(qn.G.DefaultProvider, null, o.createElement(Dn.jv, null, i)))))))))
                };
            var Xn = i(53447);
            const Jn = e => {
                const {
                    assistantLayout: t,
                    textFieldRect: i,
                    viewModels: a,
                    emogenieService: n,
                    ready: s,
                    height: r,
                    OuterElementsPortalSource: l
                } = e, {
                    initialPositionOffset: c
                } = a.positionViewModel, d = {
                    ...i.client,
                    ...i.size
                }, p = (0, Xn.C7)();
                return o.createElement(la._l, {
                    bounds: p,
                    hasDragHandle: !0
                }, (({
                    translate: e
                }) => o.createElement(Bn.s, {
                    anchorRect: d,
                    viewportRect: p,
                    anchorOrigin: t.anchorOrigin,
                    elementOrigin: t.assistantOrigin,
                    anchorMargin: t.anchorMargin,
                    repositioning: t.repositioningStrategy,
                    stickToTarget: !1,
                    viewportMargin: 0,
                    postRepositioningOffset: {
                        horizontal: c.left + e.x,
                        vertical: c.top + e.y
                    }
                }, (({
                    top: t,
                    left: i
                }) => o.createElement("div", {
                    "data-grammarly-part": "assistant-popup",
                    style: {
                        position: "fixed",
                        top: t - e.y,
                        left: i - e.x,
                        transform: `translate(${e.x}px, ${e.y}px)`,
                        zIndex: oa.Eq
                    }
                }, o.createElement(Qn, {
                    viewModels: a,
                    emogenieService: n,
                    height: r,
                    ready: s,
                    OuterElementsPortalSource: l
                }))))))
            };
            var es = i(39485),
                ts = i(84966),
                is = i(49708);
            (0, es.C)();
            class as {
                constructor(e, t) {
                    this._params = e, this._felog = t, this._log = l.Y.create(as.name), this._integration = null, this._viewModels = Oe.h.create(null), this._assistantPopupIsReady = new Ie.xQ, this._initPerformance = void 0, this._openMeasure = void 0, this._height = Oe.h.create(0), this.openState = Oe.h.create("closed"), this._subs = new be.w.Keeper, this.open = async (e, t, i, a) => {
                        var n, s;
                        const o = this._viewModels.get();
                        if (null !== o) ns(!0, o, e, i, a);
                        else {
                            this._openMeasure = this._felog.openTime.startMeasure();
                            const t = this._felog.initTime.startMeasure();
                            this.openState.set("opening");
                            const o = this._params.assistantService,
                                l = o.createIntegration();
                            if (!l) return this._log.warn("tried to open assistant with checking service not initialized"), t.cancelMeasure(), void this._openMeasure.cancelMeasure();
                            null === (s = (n = this._params).onOpen) || void 0 === s || s.call(n, l), this._integration = l;
                            const c = this._params.contentScriptState.view("user").view((e => ({
                                    isPremium: e.premium,
                                    isAnonymous: e.anonymous,
                                    experiments: e.experiments,
                                    customFields: e.customFields
                                }))),
                                d = ci(l.engine, l.denaliViewAdapter, l.document.settings.lens("selectedLens"), this._params.emogenieService, C.fromNullable(this._params.readersAttentionFeature), C.fromNullable(this._params.smartPhrasesFeature), C.fromNullable(this._params.intentDetectionFeature), C.fromNullable(this._params.sentenceLevelBrandTonesFeature), C.fromNullable(this._params.proofitFeature), o.sidebarEvents, this._assistantPopupIsReady, (0, r.pipe)(C.fromNullable(e), C.map(ts.wQ.Id.create)), this._params.contentScriptState, this._params.contentScriptActions, this._params.gnar, this._params.domain, c, this.close, this._params.assistantService.selectedHighlightsTracker, this._params.assistantService.isTextFieldEmpty, this._params.assistantService.positionModel, this._params.browser);
                            ns(!1, d, e, i, a), this._initPerformance = t.endMeasure(), this._viewModels.set(d)
                        }
                    }, this.close = () => {
                        var e, t, i, a;
                        null !== this._viewModels.get() && (this._trackAssistantClose(), null === (t = (e = this._params).onClose) || void 0 === t || t.call(e), this.openState.set("closed"), null === (i = this._integration) || void 0 === i || i.dispose(), this._integration = null, null === (a = this._viewModels.get()) || void 0 === a || a.dispose(), this._viewModels.set(null))
                    }, this._getReadyFn = () => {
                        const e = this._felog.renderTime.startMeasure();
                        return (t, i, a) => {
                            const n = e.endMeasure();
                            a && this._openMeasure.cancelMeasure();
                            const s = this._openMeasure.endMeasure();
                            s && s.duration > 500 && this._log.warn("assistant popup took too long to open:", {
                                init: this._initPerformance.duration,
                                render: n.duration,
                                total: s.duration
                            }), setTimeout((() => {
                                this.openState.set("open"), this._assistantPopupIsReady.next(), this._trackAssistantOpen(t, null == s ? void 0 : s.duration), this._trackAssistantDrag(t, i)
                            }), 0)
                        }
                    }, this._applyIframeOffset = e => {
                        var t, i;
                        const a = null === (i = (t = this._params).getCustomOffset) || void 0 === i ? void 0 : i.call(t);
                        return a ? {
                            ...e,
                            size: {
                                width: a.width,
                                height: a.height
                            },
                            client: {
                                ...e.client,
                                left: a.left + e.client.left,
                                top: a.top + e.client.top
                            },
                            offset: {
                                ...e.offset,
                                left: a.left + e.offset.left,
                                top: a.top + e.offset.top
                            },
                            page: {
                                ...e.page,
                                left: a.left + e.page.left,
                                top: a.top + e.page.top
                            }
                        } : e
                    }
                }
                get view() {
                    return this._viewModels.pipe(Fe.w((e => null === e ? L.of(null) : is.R(self, "resize").pipe(h.O(null), d.M(this._params.layout.textField.rect.behavior), p.U((([t, i]) => {
                        const a = this._applyIframeOffset(i),
                            n = ((e, t, i) => {
                                const a = (0, he.u)(e.lensState, e.cardsListScrollManager, i),
                                    n = Math.max(600, t.size.height + m.O.headerHeight + m.O.panelHeight);
                                return a.pipe((0, d.M)(e.predictionsPreviewViewModel.previewState), (0, p.U)((([e, t]) => {
                                    if (t.kind !== K.visible) return e;
                                    const i = [t.readersAttention, t.tone].filter(C.isSome).length;
                                    return i > 0 ? e + m.O.predictionsPreviewHeaderHeight + m.O.predictionInsightHeight * i + m.O.predictionInsightBottomMargin : e
                                })), (0, h.O)(0), (0, p.U)((e => Math.max(e + m.O.headerHeight, n))), (0, p.U)((e => Math.min(e, 750))))
                            })(e, a, e.capabilities).pipe(Xe.R(this._assistantPopupIsReady.asObservable()), Se.b(Ke.wW(this._height)));
                        return o.createElement(Jn, {
                            textFieldRect: a,
                            assistantLayout: this._params.layout.assistant,
                            height: n,
                            viewModels: e,
                            emogenieService: this._params.emogenieService,
                            ready: this._getReadyFn(),
                            OuterElementsPortalSource: this._params.OuterElementsPortalSource
                        })
                    }))))))
                }
                get activeView() {
                    return this._viewModels.pipe(Fe.w((e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.assistantLayoutViewModel.activeView) && void 0 !== t ? t : L.of(null)
                    })))
                }
                dispose() {
                    this.close(), this._subs.dispose()
                }
                _trackAssistantOpen(e, t) {
                    const i = this._viewModels.get();
                    if (null != i) {
                        const {
                            initialPositionOffset: a
                        } = i.positionViewModel, {
                            statisticsService: n
                        } = this._params, s = n.alertCounts.get(), r = 0 === a.top && 0 === a.left ? "default" === this._params.layout.assistant.name ? "smart" : "hardcoded" : "sticky", o = i.assistantLayoutViewModel.activeView.get();
                        this._params.gnar.assistantPopupShow(o.type, this._height.get(), e.get().left, e.get().top, s.expandedViewSupported, s.freeClarity, s.critical, s.filter((e => "priority" === e.assistantView)).expandedViewSupported, n.wordsCount.get(), r, o.type === f.a.Type.popup ? o.popupType : void 0, t, n.generalScore.get())
                    }
                }
                _trackAssistantClose() {
                    var e;
                    const {
                        statisticsService: t
                    } = this._params, i = t.alertCounts.get(), a = (null === (e = this._viewModels.get()) || void 0 === e ? void 0 : e.assistantLayoutViewModel.activeView.get()) || {
                        type: f.a.Type.default
                    };
                    this._params.gnar.assistantPopupCloseButtonClick(a.type, i.expandedViewSupported, i.freeClarity, i.critical, i.filter((e => "priority" === e.assistantView)).expandedViewSupported, a.type === f.a.Type.popup ? a.popupType : void 0)
                }
                _trackAssistantDrag(e, t) {
                    const i = e.get();
                    let a = i;
                    this._subs.push(t.pipe(y.G(), E.h((([e, t]) => e && !t))).subscribe((() => {
                        const t = e.get();
                        ze.E9.l1Distance(t, a) < 10 || (this._params.gnar.assistantPopupDrag(t.left, t.top, this._height.get(), i.left, i.top), a = t)
                    })))
                }
            }

            function ns(e, t, i, a, n) {
                a === c.Rx.emogenie ? t.assistantLayoutViewModel.pushActiveView({
                    type: f.a.Type.emogenie
                }) : a === c.Rx.proofitRequest ? t.assistantLayoutViewModel.pushActiveView({
                    type: f.a.Type.proofitRequest
                }) : a === c.Rx.proofitReview ? t.assistantLayoutViewModel.pushActiveView({
                    type: f.a.Type.proofitReview
                }) : a === c.Rx.takeawayCard && i ? t.readersAttentionViewModel.open({
                    type: f.a.ReadersAttention.Caller.Type.inlineCard,
                    alertId: i
                }) : !e && a === c.Rx.assistantPopupService && n && t.assistantLayoutViewModel.pushActiveView({
                    type: f.a.Type.popup,
                    popupType: n
                })
            }
            var ss = i(18126),
                rs = i(16037),
                os = i(64213),
                ls = i(14568),
                cs = i(99015);
            class ds {
                constructor(e, t, i, a, n, s, r, o, l, c, d) {
                    this.connectionState = e, this.pageState = t, this.actions = i, this.gnar = a, this.user = n, this._hoverProvider = s, this.document = r, this.formattingService = o, this.denaliViewAdapter = l, this.capiProxy = c, this.engine = d, s.setAssistantHover(l.highlightHoverProvider)
                }
                static create(e) {
                    var t;
                    const i = new rs.t(e.highlights, e.textObserver, e.replacementService.get(), e.layout, e.scroller, e.selectedHighlightsTracker, void 0, e.requestAwaitService, null === (t = e.formattingService) || void 0 === t ? void 0 : t.get()),
                        a = ls.p.create(e.checkingService.get(), e.checkingServiceInitialState, e.alertsTransformer, e.alertProcessor, e.sidebarEvents),
                        n = (0, cs.r)(a, i, e.document.settings.lens("context"), (() => {
                            var t, i;
                            return null !== (i = null === (t = e.getExistingAlerts) || void 0 === t ? void 0 : t.call(e)) && void 0 !== i ? i : (0, os.q)(e.alertProcessor)
                        }), e.textObserver, (() => e.checkingServiceInitialState.value.lastStart), e.smartPhrasesFeature, e.readersAttentionFeature, e.sentenceLevelBrandTonesFeature);
                    return new ds(e.connectionState, e.pageState, e.actions, e.gnar, e.user, e.hoverProvider, e.document, e.formattingService, i, a, n)
                }
                dispose() {
                    this.capiProxy.dispose(), this.denaliViewAdapter.dispose(), this.engine.shutdown(), this._hoverProvider.removeAssistantHover()
                }
            }
            var ps = i(8467);
            class hs {
                constructor({
                    layout: e
                }) {
                    this._scroller = (0, ps.t)({
                        scrollToMarkRect(t, i) {
                            const a = e.textField.visibleRect.getApproximate();
                            let n = (i && i.paddingTop || 0) - a.client.top;
                            (n <= 0 || n >= a.size.height) && (n = a.size.height / 2);
                            const s = t.top - n - a.client.top,
                                r = t.right - t.left,
                                o = Math.max(0, (a.size.width - r) / 2);
                            t.left, a.client.left;
                            requestAnimationFrame((() => e.textField.scroller.scrollBy({
                                top: s,
                                left: void 0
                            })))
                        },
                        scrollToRange() {}
                    })
                }
                scrollToMark(e, t) {
                    return this._scroller.scrollToMark(e, t)
                }
            }
            var ms = i(53783);
            class us {
                constructor(e) {
                    this._params = e, this.sidebarEvents = new Ie.xQ, this.hoverProvider = new ss.f(this._params.hoverProvider), this.selectedHighlightsTracker = this._params.highlights.getSelectedHighlightsTracker({
                        textField: this._params.originalTextField,
                        selectionService: this._params.selectionService
                    }), this.positionModel = (0, ms.j)(this._params.originalTextField, this._params.state, this._params.actions), this.isTextFieldEmpty = this._params.textObserver.contentChanges.async.pipe(p.U((e => "" === e.newText.trim())), T.x()), this._checkingService = null
                }
                setCheckingService(e) {
                    this._checkingService = e
                }
                getCheckingServiceState() {
                    var e;
                    return null === (e = this._checkingService) || void 0 === e ? void 0 : e.state.value
                }
                createIntegration() {
                    const {
                        layout: e,
                        highlights: t,
                        textObserver: i,
                        replacementService: a,
                        alertProcessor: n,
                        state: s,
                        gnar: r,
                        alertsTransformer: o,
                        document: l,
                        requestAwaitService: c,
                        formattingService: d,
                        actions: p,
                        getCheckingServicePreviousState: h,
                        createAssistantScroller: m = (() => new hs({
                            layout: e
                        })),
                        getExistingAlerts: u
                    } = this._params;
                    if (null == this._checkingService) return null;
                    const g = null == h ? void 0 : h();
                    g && (this._checkingService.state.value = g);
                    const v = m(),
                        {
                            user: f
                        } = s.get();
                    return ds.create({
                        layout: e,
                        alertProcessor: n,
                        connectionState: s.view((e => e.connection)),
                        pageState: s.view((e => e.page)),
                        actions: p,
                        highlights: t,
                        textObserver: i,
                        replacementService: a,
                        checkingService: this._checkingService.lazyCheckingService,
                        checkingServiceInitialState: this._checkingService.state,
                        gnar: r,
                        user: {
                            isPremium: f.premium,
                            isAnonymous: f.anonymous,
                            experiments: f.experiments,
                            customFields: f.customFields
                        },
                        hoverProvider: this.hoverProvider,
                        selectedHighlightsTracker: this.selectedHighlightsTracker,
                        scroller: v,
                        sidebarEvents: this.sidebarEvents,
                        document: l,
                        alertsTransformer: o,
                        requestAwaitService: c,
                        formattingService: d,
                        getExistingAlerts: u,
                        smartPhrasesFeature: this._params.smartPhrasesFeature,
                        readersAttentionFeature: this._params.readersAttentionFeature,
                        sentenceLevelBrandTonesFeature: this._params.sentenceLevelBrandTonesFeature
                    })
                }
                dispose() {
                    var e;
                    null === (e = this._checkingService) || void 0 === e || e.state.dispose()
                }
            }
        },
        99015: (e, t, i) => {
            i.d(t, {
                r: () => P
            });
            var a = i(57050),
                n = i(35214),
                s = i(40327),
                r = i(32952),
                o = i(73353),
                l = i(21729),
                c = i(83078),
                d = i(51072),
                p = i(5114),
                h = i(38983);
            var m = i(80358),
                u = i(84966),
                g = i(6488),
                v = i(79227),
                f = i(20869),
                w = i(95362),
                _ = i(5008),
                b = i(43320),
                y = i(6956),
                E = i(35301),
                k = i(85654),
                S = i(55360),
                C = i(45586),
                I = i(98403),
                A = i(2834),
                M = i(78674),
                x = i(77176),
                L = i(93508),
                T = i(8125),
                F = i(71249);
            const P = (e, t, i, r, L, T, P, V, O, N = R("permanentStorageSync", t.getContents())) => {
                    const D = new C.w.Keeper,
                        U = function(e, t, i) {
                            const n = h.h.create(p.none),
                                r = h.h.create(p.none);
                            return {
                                score: h.h.create(p.none),
                                textInfo: h.h.create(p.none),
                                checkingState: h.h.create(e.checkingState),
                                asyncChecksState: h.h.create(e.asyncChecksState),
                                context: i,
                                contextCompleteness: i.view(l.j.calculateCompleteness),
                                updateContext: e => {
                                    const t = !o.R$.equals(i.get(), e);
                                    return i.set(e), t
                                },
                                defaultContext: n,
                                updateDefaultContext: e => {
                                    const t = !(0, s.pipe)((0, a.tuple)([n.get(), e], c.map2(o.R$.equals)));
                                    return n.set(e), t
                                },
                                documentText: t.getText(),
                                documentLength: h.h.create({
                                    full: t.getTextLength(),
                                    trimmed: t.getTextLength()
                                }),
                                counters: h.h.create(l.dM.group.empty),
                                calculateStats: () => d.toPromise(e.requestDocStats).then((e => (r.set(p.some(e)), e))),
                                recentDocumentStats: r
                            }
                        }(e, t, i);
                    D.push(e.events.pipe(A.b((t => {
                        var i;
                        U.checkingState.set(e.checkingState), m.h.is("text_info")(t) ? U.textInfo.set(p.some(t.data)) : m.h.is("finish")(t) ? U.score.set(t.score) : m.h.is("feedback_ack")(t) ? (0, s.pipe)(p.fromNullable(null === (i = t.outcomeScores) || void 0 === i ? void 0 : i.GeneralScore), p.map((e => Math.trunc(100 * e))), p.map((e => {
                            U.score.modify((0, a.flow)(p.map((t => ({
                                ...t,
                                rank: e
                            })))))
                        }))) : m.h.is("session_started")(t) && U.updateDefaultContext(t.defaultDocumentContext)
                    }))).subscribe(), L.contentChanges.async.pipe(M.b(300), x.U((e => e.newText)), x.U((e => ({
                        full: e.length - 1,
                        trimmed: e.trim().length
                    }))), A.b(I.wW(U.documentLength))).subscribe()), (0, s.pipe)(T(), p.map((e => {
                        U.updateDefaultContext(o.R$.parseDefault(e.defaultDocumentContext))
                    })));
                    const B = new S.Xr,
                        H = new w.Ek,
                        j = (0, n.fold)((0, n.getEndomorphismMonoid)())(F.compact([p.fromNullable(null == P ? void 0 : P.addStateToRawAlertTransformer), p.fromNullable(null == V ? void 0 : V.addFeedbackToRawAlertTransformer), p.fromNullable(null == O ? void 0 : O.addFeedbackToRawAlertTransformer)])),
                        G = new f.S(B, H, (() => t.getContents().delta), e.events, e, U.counters, j),
                        Z = g.e.create(G.state),
                        W = new v.k(Z, G._ops);
                    D.push(b.R.init(y.$.connectAsPrimarySourceWithoutDuplex(t), e.events, N, _.n.ignoreTEResult(e), _.n.ignoreResult(B), H, _.A.merge([G])).subscribe()), e.loadAlerts(r()), G.flushAlerts();
                    const q = p.some(E.J.CategoriesModel.create(e.events, e, G.state, W, u.JW.ScopeType.GLOBAL)),
                        z = p.some(k.k.create(Z));
                    return {
                        alertsList: G,
                        alertsReader: Z,
                        alertsService: W,
                        positionManager: B,
                        sessionModel: U,
                        mutedAlertsCategoriesModel: q,
                        mutingAlertsReader: z,
                        shutdown: () => {
                            G.dispose(), D.dispose()
                        }
                    }
                },
                R = (e, t) => ({
                    pushChanges: T.ZT,
                    changes: (new r.xQ).pipe(L.O(t))
                })
        },
        9671: (e, t, i) => {
            i.d(t, {
                y: () => o,
                t: () => l
            });
            var a = i(20016),
                n = i(15646),
                s = i(77176),
                r = i(85985);
            class o {
                constructor(e, t, i, n) {
                    this._cardActions = e, this._subs = [l(e, t, "assistant"), (0, a.u)(e, t, i.getById, n.get())]
                }
                dispose() {
                    this._subs.forEach((e => e.unsubscribe()))
                }
            }
            const l = (e, t, i) => e.pipe(s.U((e => e.type)), r.h((e => e === n.lY.Type.muteAlertCategory || e === n.lY.Type.undoMuteAlertCategory || e === n.lY.Type.mutedAlertSuggestionManagementClick || e === n.lY.Type.mutedAlertSuccessShow))).subscribe((e => {
                switch (e) {
                    case n.lY.Type.muteAlertCategory:
                        t.mutedAlertsCardTurnOffButtonClick(i);
                        break;
                    case n.lY.Type.undoMuteAlertCategory:
                        t.mutedAlertsTurnBackOnButtonClick(i);
                        break;
                    case n.lY.Type.mutedAlertSuggestionManagementClick:
                        t.suggestionManagementClick(i);
                        break;
                    case n.lY.Type.mutedAlertSuccessShow:
                        t.categoryDeactivatedShow(i)
                }
            }))
        },
        13922: (e, t, i) => {
            i.d(t, {
                O: () => S
            });
            var a = i(57050),
                n = i(35214),
                s = i(45701),
                r = i(40327),
                o = i(27378),
                l = i(63047),
                c = i(24394),
                d = i(46547),
                p = i(79921),
                h = i(1620),
                m = i(86705),
                u = i(12187),
                g = i(67489),
                v = i.n(g);
            const f = ({
                emojiUnicode: e,
                title: t,
                expanded: i,
                accepted: a,
                onShow: n,
                onExpand: s,
                onClick: r,
                onClose: l,
                onVote: g,
                browser: f,
                lensIsPriority: w
            }) => (o.useEffect((() => {
                null == n || n()
            }), [t]), o.useEffect((() => {
                i && (null == s || s())
            }), [i]), o.createElement(d.Z, {
                kind: w ? "assistant-priority-lens" : "assistant-all-lens",
                onClick: () => {
                    i || r()
                },
                dataPartName: "intent-detection-card"
            }, o.createElement("div", Object.assign({}, (0, u.Sh)(v().intentDetectionCardContent, i && !a ? v().intentDetectionCardContentExpanded : null, a ? v().intentDetectionCardContentAccepted : null)), o.createElement("div", {
                className: v().intentDetectionCardEmojiAndTitle
            }, o.createElement(p.dy, {
                className: v().intentDetectionCardEmoji,
                unicodeLiteral: null,
                unicodeHexArray: a ? ["1f64c"] : [e]
            }), a ? o.createElement("div", null, "Thanks for helping us build new suggestions!") : o.createElement("div", null, o.createElement("div", null, t), o.createElement("div", {
                className: v().intentDetectionCardExpandedInfo
            }, "Your input helps us develop more tailored suggestions for you."))), a ? o.createElement("div", {
                className: v().intentDetectionCardBetaBadgeAndCloseButton
            }, o.createElement(h.P, {
                onClick: e => {
                    e.stopPropagation(), l()
                },
                size: "small",
                containerClassName: v().intentDetectionCardCloseButton
            }), o.createElement(m.v, {
                browser: f,
                className: v().intentDetectionCardBetaBadge
            })) : o.createElement("div", {
                className: v().intentDetectionCardVoteAndBetaBadge
            }, o.createElement(c.A, {
                ariaLabel: t,
                voteYesAriaLabel: "Yes",
                voteNoAriaLabel: "No",
                voteYesTooltipMessage: "Yes",
                voteNoTooltipMessage: "No",
                onVote: g,
                voteYesMarginRight: 8,
                irrevocable: !0
            }), o.createElement(m.v, {
                browser: f,
                className: v().intentDetectionCardExpandedInfo
            })))));
            f.defaultProps = {
                expanded: !1,
                accepted: !1,
                lensIsPriority: !0
            };
            const w = ({
                emojiUnicode: e,
                title: t,
                expanded: i,
                accepted: a,
                onShow: n,
                onExpand: s,
                onClick: r,
                onClose: l,
                onFeedbackAccurate: d,
                onFeedbackInaccurate: p,
                browser: h,
                lensIsPriority: m
            }) => o.createElement(f, {
                emojiUnicode: e,
                title: t,
                expanded: i,
                accepted: a,
                onShow: n,
                onExpand: s,
                onClick: r,
                onClose: l,
                onVote: e => {
                    e === c.x.YES ? d() : p()
                },
                browser: h,
                lensIsPriority: m
            });
            var _, b = i(28043),
                y = i(77176),
                E = i(5739),
                k = i(31881);
            ! function(e) {
                e.IntentDetection = k.UI.Node.make((({
                    view: e,
                    notify: t
                }) => {
                    const i = e("view");
                    return o.createElement(E.F.div, null, i.pipe(b.x(l.Z.eq.equals), y.U((e => o.createElement(w, {
                        emojiUnicode: e.emojiUnicode,
                        title: e.title,
                        expanded: "focused" === e.visualState.transition.type,
                        accepted: "success" === e.visualState.transition.type,
                        onShow: t({
                            kind: l.Z.Event.Kind.intentDetectionItemShow,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label
                        }),
                        onExpand: t({
                            kind: l.Z.Event.Kind.intentDetectionItemExpand,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label
                        }),
                        onClick: t({
                            kind: l.Z.Event.Kind.intentDetectionItemClick,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label
                        }),
                        onClose: t({
                            kind: l.Z.Event.Kind.intentDetectionItemClose,
                            id: e.id
                        }),
                        onFeedbackAccurate: t({
                            kind: l.Z.Event.Kind.intentDetectionItemFeedbackAccurate,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label,
                            transitionType: e.visualState.transition.type
                        }),
                        onFeedbackInaccurate: t({
                            kind: l.Z.Event.Kind.intentDetectionItemFeedbackInaccurate,
                            id: e.id,
                            predictionId: e.predictionId,
                            label: e.label
                        }),
                        browser: e.browser,
                        lensIsPriority: e.lensIsPriority
                    })))))
                }))
            }(_ || (_ = {}));
            var S, C = i(22373),
                I = i(7910),
                A = i(84246),
                M = i(84974),
                x = i(98752),
                L = i(17594),
                T = i(26027),
                F = i(91549),
                P = i(20594),
                R = i(86775),
                V = i(77610),
                O = i(16892),
                N = i(48521),
                D = i(15215),
                U = i(70100),
                B = i(47306),
                H = i(35416),
                j = i(93494),
                G = i(8125),
                Z = i(83078),
                W = i(5114),
                q = i(73975);
            ! function(e) {
                function t(e, t, i, a, n) {
                    return H.nL.Items.mapper((e => e.kind), {
                        [T.X.Kind]: e,
                        [F.R.Kind]: t,
                        [U.X.kind]: i,
                        [B.J.kind]: a,
                        [l.Z.Kind]: n
                    })
                }

                function i(e) {
                    return e.kind === T.X.Kind
                }

                function o(e) {
                    return e.kind === F.R.Kind
                }

                function c() {
                    return (0, I.Pv)(e.disposable, (e => t((t => ({
                        view: t,
                        isLastCard: e,
                        kind: "alertCard"
                    })), (t => ({
                        view: t,
                        isLastCard: e,
                        kind: "alertsBundle"
                    })), (e => ({
                        view: e,
                        kind: "checklistItemEmpty"
                    })), (t => ({
                        view: t,
                        kind: "checklistItemWithAlerts",
                        isLastCard: e
                    })), (e => ({
                        view: e,
                        kind: "intentDetection"
                    })))))
                }
                e.isSelectableWithAlertItem = (0, G.Kg)(i, o, D.d.isChecklistItemWithAlerts), e.getActiveItemWithAlert = H.In.getActiveItemOfType(e.isSelectableWithAlertItem), e.getActiveAlignableItem = H.In.getActiveItemOfType(e.isSelectableWithAlertItem), e.getActiveFocusableItem = H.In.getActiveItemOfType(e.isSelectableWithAlertItem), e.checksFeedItemsMapper = t, e.isAlertCard = i, e.isAlertsBundle = o, e.defaultOrd = (0, n.fold)(s.getMonoid())([(0, r.pipe)(s.ordBoolean, s.contramap(i)), s.fromCompare(((e, t) => i(e) && i(t) && !V.C.isSmartPhrasesItem(e) && !V.C.isSmartPhrasesItem(t) ? T.X.ord.compare(e, t) : i(e) && V.C.isSmartPhrasesItem(e) ? -1 : i(t) && V.C.isSmartPhrasesItem(t) ? 1 : 0)), (0, r.pipe)(s.ordBoolean, s.contramap(l.Z.isIntentDetectionItem))]), e.bundlesOrd = (0, n.fold)(s.getMonoid())([(0, r.pipe)(s.ordBoolean, s.contramap(o)), s.fromCompare(((e, t) => o(e) && o(t) ? F.R.ord.compare(e, t) : 0)), (0, r.pipe)(s.ordBoolean, s.contramap(l.Z.isIntentDetectionItem))]), e.item = e => k.UI.Union.make("kind", {
                    alertCard: C.p.Card(e),
                    alertsBundle: A.Q.Card(e),
                    checklistItemEmpty: M.z.Card(e),
                    checklistItemWithAlerts: x.fw.Card(e),
                    intentDetection: _.IntentDetection
                }), e.viewState = c, e.createCardListFlow = e => (0, I.sJ)((t => (0, r.pipe)(e, Z.tap((e => {
                    e.intentDetectionActions.next(t.action)
                }))))), e.listItemOrd = e => (0, s.contramap)((e => e.cell.item.view))(e).compare;
                const d = {
                        equals: (e, t) => e.kind === t.kind && O.s.eqById.equals(e, t)
                    },
                    p = (e, t, i, a, n) => ({
                        equals: (s, r) => {
                            const o = {
                                [T.X.Kind]: e,
                                [F.R.Kind]: t,
                                [U.X.kind]: i,
                                [B.J.kind]: a,
                                [l.Z.Kind]: n
                            };
                            return d.equals(s, r) && function(e, t) {
                                return (i, a) => t[e(i)].equals(i, a)
                            }((e => e.kind), o)(s, r)
                        }
                    }),
                    h = (0, n.fold)(q.getMonoid())([N.o.eq, O.s.verticalPositionEq, d]);

                function m(e, i) {
                    const a = T.X.Capabilities.getChangePosition(e);
                    return {
                        changePosition: e => t(a.changePosition(e), F.R.changePosition(e), U.X.changePositionState(e), i.changePositionState(e), l.Z.Capabilities.changePosition(e))
                    }
                }

                function u(e, i) {
                    const a = T.X.Capabilities.getTransitionTo(e);
                    return {
                        transitionTo: e => t(a.transitionTo(e), F.R.transitionTo(e), U.X.transitionTo(e), i.transitionTo(e), l.Z.Capabilities.transitionTo(e))
                    }
                }

                function g(e, i) {
                    const a = T.X.Capabilities.getCompleteTransition(e);
                    return {
                        completeTransition: e => t(a.completeTransition(e), F.R.completeTransition(e), U.X.completeTransition(e), i.completeTransition(e), l.Z.Capabilities.completeTransition(e))
                    }
                }

                function v(e, i, n, s, r) {
                    const o = F.R.getCardHydrator(r),
                        c = F.R.getSelect(n, s, o),
                        d = F.R.getSelectByAlert(n, s, o),
                        p = T.X.Capabilities.getSelect(e);
                    return {
                        select: (e, n) => t(p.select(e, n), c(e, n), U.X.select(e), i.selectFirstAlert((0, a.unsafeCoerce)(e), n), l.Z.Capabilities.select(e)),
                        selectByAlert: (e, n, s) => t(p.selectByAlert(e, n, s), d(n, e, s), U.X.select(e), i.selectByAlert(n, (0, a.unsafeCoerce)(e), s), a.identity),
                        unselect: (e, n) => t(p.unselect((0, a.unsafeCoerce)(e), n), F.R.unselect((0, a.unsafeCoerce)(e), n), U.X.unselect(e), i.unselect((0, a.unsafeCoerce)(e), n), l.Z.Capabilities.unselect(e))
                    }
                }

                function f(e, n, s, r, l, c) {
                    return {
                        removeAlertFromItem: (d, p) => t((t => T.X.Capabilities.getRemoveAlerts(e, p.itemsOrd)(d, H.In.getActiveItemOfType(i)(p))(t)), (e => F.R.getRemoveAlertsCapability(r, l, c, p.itemsOrd)(d, H.In.getActiveItemOfType(o)(p))(e)), a.identity, (e => R.G.getRemoveAlert(n, s, r).removeAlertFromItem(d, p)(e)), a.identity)
                    }
                }

                function w(e, i, n) {
                    const s = T.X.Capabilities.getRemove(e);
                    return {
                        remove: (e, r) => t(s.remove(e, r), (t => e(t) ? F.R.getRemove(n)([t.activeAlert], r(t))(t) : t), a.identity, (t => e(t) ? i.removeAlerts(t.alerts, r(t))(t) : t), a.identity)
                    }
                }

                function b(e, i, n) {
                    const s = T.X.Capabilities.getUpdateWithAlert(e),
                        r = F.R.getUpdatableWithAlertsCapability(i);
                    return {
                        updateWithAlerts: e => t(s.updateWithAlerts(e), r(e), a.identity, n.updateWith(e), a.identity)
                    }
                }
                e.equatable = {
                    structEq: p(T.X.eq, F.R.eq, U.X.eq, B.J.eq, l.Z.eq),
                    idEq: p(d, d, d, d, d),
                    visualStateEq: p(h, h, h, h, h)
                }, e.changePosition = m, e.disposable = {
                    isScheduledToDispose: t((e => V.C.willBeDisposed(e, e.removedAlertsIds)), (e => V.C.willBeDisposed(e, e.removedAlertsIds)), a.constFalse, (e => V.C.willBeDisposed(e, e.removedAlertsIds)), a.constFalse)
                }, e.hidable = {
                    isHidden: t(N.o.isHidden, N.o.isHidden, N.o.isHidden, N.o.isHidden, N.o.isHidden)
                }, e.transitionTo = u, e.completeTransition = g, e.hasAlertsQueries = {
                    isSelectableByAlert: e => t(V.C.hasAlert(e.alert.id), V.C.hasAlert(e.alert.id), a.constFalse, V.C.hasAlert(e.alert.id), a.constFalse),
                    hasAlert: e => t(V.C.hasAlert(e), V.C.hasAlert(e), a.constFalse, V.C.hasAlert(e), a.constFalse),
                    hasActiveAlert: t((e => W.some(e.activeAlert)), (e => W.some(e.activeAlert)), (() => W.none), (e => W.some(e.activeAlert)), (() => W.none))
                }, e.changePositionStrategyQueries = {
                    useReferenceHeightOnRemove: t(a.constFalse, a.constFalse, a.constFalse, a.constTrue, a.constFalse)
                }, e.select = v, e.removeAlert = f, e.remove = w, e.updateWithAlert = b, e.releaseAlert = (t, i, a, n, s, r) => j.v.Capabilities.getAlertReleaser({
                    ...f(t, i, a, n, s, r),
                    ...e.disposable
                }), e.unselectable = (e, t, i, a, n) => j.v.Capabilities.getUnselectable(H.In.getActiveItem, v(e, t, i, a, n)), e.selectableByAlert = (t, i, a, n, s) => j.v.Capabilities.getSelectableByAlert(H.In.getActiveItem, {
                    ...e.hasAlertsQueries,
                    ...v(t, i, a, n, s)
                }), e.selectableById = (e, t, i, a, n) => j.v.Capabilities.getSelectableById(H.In.getActiveItem, v(e, t, i, a, n)), e.updateMeta = () => ({
                    updateMeta: j.v.Capabilities.getMetaUpdatable().updateMeta
                }), e.animatable = (t, i, a, n, s, r) => j.v.Capabilities.getAnimatable(t, {
                    ...f(t, i, a, n, s, r),
                    ...e.hasAlertsQueries
                }), e.hasPriorityToggle = (t, i) => j.v.WithPriority.getHasPriorityToggle({
                    ...u(t, i),
                    ...e.hasAlertsQueries,
                    ...e.disposable
                });
                const y = t => ["focused", "expanded"].includes(t.visualState.transition.type) && !e.disposable.isScheduledToDispose(t);

                function E(e, i) {
                    const a = P.Mq.getCardSelections(i);
                    return {
                        nextAlert: t(a.nextAlert, a.nextAlert, (() => W.none), e.nextAlert, (() => W.none)),
                        prevAlert: t(a.prevAlert, a.prevAlert, (() => W.none), e.prevAlert, (() => W.none))
                    }
                }

                function S() {
                    return {
                        updateUserInput: e => t(T.X.updateUserInput(e), F.R.changeUserInput(e), a.identity, a.identity, a.identity)
                    }
                }
                e.alignable = {
                    isValidToAlign: t(y, y, a.constFalse, y, a.constFalse)
                }, e.alertIterator = E, e.itemReleaser = (e, t, i) => {
                    const {
                        removeItemById: a
                    } = R.G.getItemReleaser(e, t, i, j.v.Capabilities.getItemReleaser());
                    return {
                        removeItemById: a
                    }
                }, e.hasAlerts = j.v.Capabilities.getHasAlerts, e.getDefaultNextAlertItemFilter = t => (0, G.W9)(e.isSelectableWithAlertItem, (i => !e.disposable.isScheduledToDispose(i) && (0, r.pipe)(i, e.hasAlertsQueries.hasActiveAlert, W.map((e => t.isRegistered(e.id))), W.getOrElse(a.constFalse)))), e.hasUserInput = S, e.priorityTest = (0, G.W9)(i, (e => L.$.isPriority(e.activeAlert))), e.verifiable = () => j.v.Capabilities.getVerifiable(e.disposable), e.getCapabilities = function(t, i, a, n, s, r, o = P.IG.Default) {
                    return {
                        ...c(),
                        ...e.disposable,
                        ...e.hidable,
                        ...e.equatable,
                        ...S(),
                        ...m(t, a),
                        ...u(t, a),
                        ...g(t, a),
                        ...v(t, a, n, o, s),
                        ...w(t, a, o),
                        ...f(t, a, r, n, o, s),
                        ...b(t, i, a),
                        ...e.hasAlertsQueries,
                        ...e.changePositionStrategyQueries,
                        ...e.alignable,
                        ...e.releaseAlert(t, a, r, n, o, s),
                        ...e.unselectable(t, a, n, o, s),
                        ...e.selectableByAlert(t, a, n, o, s),
                        ...e.selectableById(t, a, n, o, s),
                        ...e.updateMeta(t),
                        ...e.animatable(t, a, r, n, o, s),
                        ...e.hasPriorityToggle(t, a),
                        ...e.itemReleaser(a, r, n),
                        ...e.verifiable(),
                        ...e.hasAlerts(E(a, n), e.hasAlertsQueries, (() => e.getDefaultNextAlertItemFilter(n)))
                    }
                }
            }(S || (S = {}))
        },
        5178: (e, t, i) => {
            i.d(t, {
                Q: () => a,
                _: () => r
            });
            var a, n = i(75003),
                s = i(53844);
            ! function(e) {
                e.readersAttention = "readers_attention", e.settings = "settings", e.smartPhrases = "smart_phrases"
            }(a || (a = {}));
            class r {
                constructor(e, t, i) {
                    this._assistantLayoutViewModel = e, this._domain = t, this._gnar = i
                }
                getDomain() {
                    return this._domain
                }
                openFeedback(e) {
                    this._entryPoint = e, this._gnar.assistantFeedbackButtonClick(this._entryPoint), this._assistantLayoutViewModel.pushActiveView({
                        type: n.a.Type.feedback
                    })
                }
                submitFeedback(e) {
                    this._gnar.assistantFeedbackSubmitButtonClick(this._entryPoint, e.domain, e.text, (0, s.d)(e) ? e.score : void 0)
                }
                get entryPoint() {
                    return this._entryPoint
                }
            }
        },
        28288: (e, t, i) => {
            i.d(t, {
                m: () => o,
                _: () => l
            });
            var a = i(27378),
                n = i(92783),
                s = i(12187),
                r = i(2112);
            const o = ({
                    className: e,
                    text: t,
                    secondary: i = !1
                }) => a.createElement("span", Object.assign({}, (0, s.Sh)(e, r.labelBeta, i && r.labelBetaSecondary)), t || "BETA"),
                l = ({
                    text: e
                }) => a.createElement("span", {
                    className: r.label
                }, "GRAMMARLY TONE Detector ", (0, n.G6)() ? null : a.createElement(o, {
                    className: r.labelBetaWrapper,
                    text: e
                }))
        },
        42373: (e, t, i) => {
            i.d(t, {
                G: () => C
            });
            var a = i(27378),
                n = i(80900),
                s = i(76974),
                r = i(16118),
                o = i(77176),
                l = i(93508),
                c = i(66310),
                d = i(17343),
                p = i(20855),
                h = i(24394),
                m = i(32275),
                u = i(53112);
            const g = ({
                fill: e = u.Z.green50
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
            var v = i(79921),
                f = i(12187),
                w = i(5739),
                _ = i(79461),
                b = i(2112);
            const y = ({
                emotion: e,
                isBrandTonesEnabled: t,
                actions: i,
                emotionValue: u,
                index: y
            }) => {
                const E = (e, t) => {
                        i.filterEmotionByName(e), i.dislikeEmotion(e, t)
                    },
                    k = a.createElement(p.u, {
                        message: `${e.prevalence} intensity`,
                        showDelay: 300
                    }, a.createElement("div", {
                        className: b.emotionIntensity
                    }, [0, 1, 2, 3, 4].map((t => {
                        const i = t / 5 <= e.confidence;
                        return a.createElement("div", Object.assign({
                            key: `${e.name}-intensity-${t}`
                        }, (0, f.Sh)(b.emotionIntensityItem, i && b.emotionIntensityActive)))
                    })))),
                    S = e.brandToneLabel ? a.createElement("div", {
                        className: b.emotionBrandInfoWrapper
                    }, a.createElement("span", {
                        className: b[`brand-badge-${e.brandToneLabel}`]
                    }, e.brandToneLabel, "-BRAND")) : a.createElement("span", {
                        className: b.emotionBrandIntensityWrapper
                    }, " ", k, " "),
                    C = t ? t => {
                        const a = e.brandToneLabel || "neutral";
                        t === h.x.YES ? i.likeEmotion(e.name, a) : E(e.name, a)
                    } : t => {
                        if (t === h.x.YES) i.likeEmotion(e.name);
                        else if (t === h.x.OFFENSIVE) i.reportEmotion(e.name, "EMOTION_OFFENSIVE");
                        else if (t === h.x.INCORRECT) {
                            const t = !0;
                            i.reportEmotion(e.name, "EMOTION_INCORRECT", t)
                        } else E(e.name)
                    },
                    I = a.createElement(a.Fragment, null, S, a.createElement(h.A, {
                        onDropdownPress: t ? void 0 : () => {
                            i.reportEmotionWithoutTracking(e.name, "EMOTION_DISLIKE")
                        },
                        voteNoWithDropdown: !t,
                        ariaLabel: `Does the emotion "${e.name}" seem correct?`,
                        voteYesAriaLabel: "This seems right",
                        voteNoAriaLabel: "This seems wrong",
                        voteYesTooltipMessage: "This seems right",
                        voteNoTooltipMessage: "This seems wrong",
                        onVote: C,
                        irrevocable: !0,
                        voteValue: u === _.b.dislike || u === _.b.offensive ? h.x.NO : u === _.b.like ? h.x.YES : void 0,
                        useShadowDom: !1
                    })),
                    A = e => t ? e === _.b.dislike : e === _.b.incorrect || e === _.b.offensive,
                    M = (0, m.K)(u).pipe((0, r.G)(), (0, o.U)((([e, t]) => e === _.b.none && A(t))), (0, l.O)(!1), (0, c.w)((e => e ? (0, n.H)(3e3).pipe((0, d.h)(!1), (0, l.O)(!0)) : (0, s.of)(!1)))),
                    x = a.createElement("div", {
                        className: b.feedbackContainer
                    }, a.createElement("div", {
                        className: b.feedbackIcon
                    }, a.createElement(g, null)), a.createElement("div", {
                        className: b.feedbackText
                    }, "Your feedback helps us improve our accuracy."));
                return a.createElement(w.F.div, null, M.pipe((0, o.U)((e => e ? x : null))), A(u) ? null : a.createElement("div", {
                    role: `emotion-${y}-${e.name}`
                }, a.createElement("div", {
                    className: b.emotion
                }, a.createElement("div", {
                    className: b.emotionEmojiAndName
                }, a.createElement(v.dy, {
                    size: "medium",
                    unicodeHexArray: [e.emojiId],
                    unicodeLiteral: e.emoji,
                    className: b.emotionEmoji
                }), a.createElement("span", {
                    className: b.emotionName
                }, e.name)), I), t ? a.createElement("div", {
                    className: b.description
                }, a.createElement("div", {
                    className: b.descriptionText
                }, e.brandToneDescription)) : null))
            };
            var E = i(88326);
            const k = ({
                value: e
            }) => a.createElement("div", Object.assign({}, (0, f.Sh)(b.checkbox, e && b.checkboxActive), {
                "data-grammarly-part": "showEmogenieCheckbox"
            }));
            var S = i(28288);
            const C = ({
                report: e,
                actions: t,
                emotionsPoll: i,
                showBanner: n,
                settings: s,
                isBrandTonesEnabled: r
            }) => {
                let o, l;
                switch (a.useEffect((() => {
                        t.trackReportShow(r)
                    }), []), !0) {
                    case e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel && e.confidence > .75)):
                        o = "Your tone sounds off";
                        break;
                    case e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel)):
                        o = "Something sounds slightly off...";
                        break;
                    case e.emotions.some((e => e.brandToneLabel && "on" === e.brandToneLabel)):
                        o = r ? "You're on-brand! Great job!" : "Your writing sounds clear and aligned. Great job!";
                        break;
                    default:
                        o = "Here’s how your text may sound to readers"
                }
                switch (!0) {
                    case r && e.emotions.some((e => e.brandToneLabel && "off" === e.brandToneLabel)):
                        l = a.createElement("div", {
                            className: b.brandOffSubtitle
                        }, "Consider revising your message to align with your brand.");
                        break;
                    case r && e.emotions.some((e => e.brandToneLabel && "on" === e.brandToneLabel)):
                        l = "Read about the tones below to learn more.";
                        break;
                    case r:
                        l = "Check your writing to see if the tone is what you had in mind.";
                        break;
                    default:
                        l = e.emotions.length > 1 ? "Which tones did we get right? Help us improve by letting us know." : "Did we get it right?"
                }
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: b.reportHeader
                }, n && a.createElement(S._, null), a.createElement("span", {
                    className: b.popupTitle
                }, o), a.createElement("span", {
                    className: b.popupSubTitle
                }, l)), a.createElement("div", null, e.emotions.map(((e, n) => a.createElement(y, {
                    actions: t,
                    key: e.name,
                    index: n,
                    emotion: e,
                    emotionValue: i[e.name] || _.b.none,
                    isBrandTonesEnabled: r
                })))), !!e.recommendation && a.createElement("span", Object.assign({}, (0, f.Sh)(b.popupText, b.popupRecommendation)), e.recommendation), !r && a.createElement(E.M, {
                    className: b.popupReportCheckbox,
                    clickHandler: () => t.setShowEmojiState(!s.showEmoji)
                }, a.createElement("span", {
                    className: b.checkboxWrapper
                }, a.createElement(k, {
                    value: s.showEmoji
                })), a.createElement("span", {
                    className: b.popupText
                }, "Always show emoji for detected tones")))
            }
        },
        20016: (e, t, i) => {
            i.d(t, {
                u: () => o
            });
            var a = i(40327),
                n = i(85985),
                s = i(15646),
                r = i(83078);

            function o(e, t, i, o) {
                return e.pipe(n.h(s.lY.isAlertApplyAction)).subscribe((e => (0, a.pipe)(i(e.alertId), r.tap((e => {
                    var i;
                    if ("unlocked" === r.orUndefined(e.extraProperties.freePremium)) {
                        const e = null === (i = o.experiments) || void 0 === i ? void 0 : i.clarityAIFree;
                        "alert_only" === e ? t.freePremiumClarityAISuggestionAcceptButtonClick() : "alert_email" === e && t.freePremiumClarityAISuggestionAcceptForEmailButtonClick()
                    }
                })))))
            }
        },
        45662: (e, t, i) => {
            i.d(t, {
                c: () => n
            });
            var a = i(41186);
            class n {
                constructor(e) {
                    this._highlights = e
                }
                addHighlight(e, t, i) {
                    return this._highlights.addHighlight(e, t, i)
                }
                updateHighlight(e, t, i) {
                    return this._highlights.updateHighlight(e, t, i)
                }
                removeHighlights(e) {
                    return this._highlights.removeHighlights(e)
                }
                recalculateHighlight(e) {
                    return this._highlights.recalculateHighlight(e)
                }
                recalculateAllHighlights() {
                    return this._highlights.recalculateAllHighlights()
                }
                maintainConsistency(e, t = (e => e), i = !1) {
                    return this._highlights.maintainConsistency(e, t, i)
                }
                hasHighlight(e) {
                    return this._highlights.hasHighlight(e)
                }
                getSelectedHighlightsTracker(e) {
                    return (0, a.H)({
                        ...e,
                        highlights: this._highlights
                    })
                }
                getGeometryByHighlightId(e) {
                    return this._highlights.geometry.get().get(e)
                }
            }
        },
        20544: (e, t, i) => {
            i.r(t), i.d(t, {
                IntentDetection: () => a,
                IntentDetectionFeature: () => l
            });
            var a, n = i(74850),
                s = i(79961),
                r = i(14601),
                o = i(95300);
            ! function(e) {
                let t;
                ! function(e) {
                    e.ACCURATE = "ACCURATE", e.INACCURATE = "INACCURATE"
                }(t = e.IntentDetectionFeedback || (e.IntentDetectionFeedback = {}))
            }(a || (a = {}));
            class l {
                constructor(e, t, i) {
                    this._browser = e, this._getCheckingService = t, this._gnar = i, this._subs = new r.w, this._log = n.Y.create("IntentDetectionFeature"), this._currentIntentDetectionInfo = null, this._currentlyVisibleIntentDetectionItemLabel = null, this._intentDetectionItemsAcknowledged = new Set, this.intentDetectionInfo = new o.X(null)
                }
                onIntentDetectionMessage(e) {
                    var t, i;
                    let a = e.intent.aggregated.length > 0 ? {
                        predictionId: e.intent.aggregated[0].id,
                        label: e.intent.aggregated[0].prediction.label,
                        emojiUnicode: e.intent.aggregated[0].prediction.bundle.title_icon_id,
                        title: e.intent.aggregated[0].prediction.bundle.title,
                        browser: this._browser
                    } : null;
                    if (a && this._intentDetectionItemsAcknowledged.has(null == a ? void 0 : a.label) && (this._log.trace("New intent detection info was already ack'd by the user, considering it `null`:", a), a = null), (null === (t = this._currentIntentDetectionInfo) || void 0 === t ? void 0 : t.label) !== (null == a ? void 0 : a.label)) {
                        if (this._log.trace("Updating current intent detection info:", a), this._currentIntentDetectionInfo = a, this.intentDetectionInfo.next(this._currentIntentDetectionInfo), this._currentIntentDetectionInfo || (this._currentlyVisibleIntentDetectionItemLabel = null), this._currentIntentDetectionInfo) {
                            const e = null === (i = this._getCheckingService()) || void 0 === i ? void 0 : i.sessionUuid;
                            e && this._gnar.intentInfoReceived(this._currentIntentDetectionInfo.predictionId, this._currentIntentDetectionInfo.label, e)
                        }
                    } else this._log.trace("New intent detection info is the same that we currently have, nothing to do:", a)
                }
                onIntentDetectionFeedback(e, t) {
                    const i = this._getCheckingService(),
                        n = null == i ? void 0 : i.sessionUuid;
                    e === a.IntentDetectionFeedback.ACCURATE ? (this._log.trace("Sending INTENT_ACCEPTED feedback to CAPI:", t), null == i || i.onIntentFeedback(s.l.Intent.FeedbackType.INTENT_ACCEPTED, t.predictionId), n && this._gnar.intentYesButtonClick(t.predictionId, t.label, n)) : e === a.IntentDetectionFeedback.INACCURATE && (this._log.trace("Sending INTENT_IGNORED feedback to CAPI:", t), null == i || i.onIntentFeedback(s.l.Intent.FeedbackType.INTENT_IGNORED, t.predictionId), n && this._gnar.intentNoButtonClick(t.predictionId, t.label, n)), this._intentDetectionItemsAcknowledged.add(t.label)
                }
                onIntentDetectionItemShow(e) {
                    var t, i;
                    if (this._currentlyVisibleIntentDetectionItemLabel !== e.label) {
                        this._log.trace("Sending INTENT_ALERT feedback to CAPI:", e), this._currentlyVisibleIntentDetectionItemLabel = e.label, null === (t = this._getCheckingService()) || void 0 === t || t.onIntentFeedback(s.l.Intent.FeedbackType.INTENT_ALERT, e.predictionId);
                        const a = null === (i = this._getCheckingService()) || void 0 === i ? void 0 : i.sessionUuid;
                        a && this._gnar.intentShow(e.predictionId, e.label, a)
                    }
                }
                onIntentDetectionItemExpand(e) {
                    var t, i;
                    this._log.trace("Sending INTENT_LOOKED feedback to CAPI:", e), null === (t = this._getCheckingService()) || void 0 === t || t.onIntentFeedback(s.l.Intent.FeedbackType.INTENT_LOOKED, e.predictionId);
                    const a = null === (i = this._getCheckingService()) || void 0 === i ? void 0 : i.sessionUuid;
                    a && this._gnar.intentCardExpanded(e.predictionId, e.label, a)
                }
                onIntentDetectionViewModelDisposed() {
                    this._currentlyVisibleIntentDetectionItemLabel = null
                }
                dispose() {
                    this._subs.unsubscribe()
                }
            }
        },
        63047: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var a, n = i(40327),
                s = i(66896),
                r = i(36156),
                o = i(5920),
                l = i(48521),
                c = i(16892),
                d = i(4890),
                p = i(35416),
                h = i(93494),
                m = i(73975),
                u = i(5114),
                g = i(83078),
                v = i(95195),
                f = i(55415);
            ! function(e) {
                let t, i;
                e.id = "IntentDetectionItemId", e.Kind = "IntentDetectionItem", e.isIntentDetectionItem = function(t) {
                        return t.id === e.id
                    }, e.eq = m.fromEquals(((e, t) => e.hashCode() === t.hashCode())),
                    function(e) {
                        let t;
                        ! function(e) {
                            e.intentDetectionItemShow = "intentDetectionItemShow", e.intentDetectionItemExpand = "intentDetectionItemExpand", e.intentDetectionItemClick = "intentDetectionItemClick", e.intentDetectionItemFeedbackAccurate = "intentDetectionItemFeedbackAccurate", e.intentDetectionItemFeedbackInaccurate = "intentDetectionItemFeedbackInaccurate", e.intentDetectionItemClose = "intentDetectionItemClose", e.intentDetectionItemAccept = "intentDetectionItemAccept"
                        }(t = e.Kind || (e.Kind = {})), e.isIntentDetectionItemShowAction = function(e) {
                            return e.kind === t.intentDetectionItemShow
                        }, e.isIntentDetectionItemExpandAction = function(e) {
                            return e.kind === t.intentDetectionItemExpand
                        }, e.isIntentDetectionItemClickAction = function(e) {
                            return e.kind === t.intentDetectionItemClick
                        }, e.isIntentDetectionItemFeedbackInaccurateAction = function(e) {
                            return e.kind === t.intentDetectionItemFeedbackInaccurate
                        }, e.isIntentDetectionItemFeedbackAccurateAction = function(e) {
                            return e.kind === t.intentDetectionItemFeedbackAccurate
                        }, e.isIntentDetectionItemCloseAction = function(e) {
                            return e.kind === t.intentDetectionItemClose
                        }, e.isIntentDetectionItemAcceptAction = function(e) {
                            return e.kind === t.intentDetectionItemAccept
                        }
                    }(t = e.Event || (e.Event = {})),
                    function(e) {
                        e.changePosition = e => t => new w(t.predictionId, t.label, t.emojiUnicode, t.title, t.browser, t.lensIsPriority, e, t.visualState), e.transitionTo = e => t => new w(t.predictionId, t.label, t.emojiUnicode, t.title, t.browser, t.lensIsPriority, t.positionState, l.o.VisualState.to(t.visualState, e)), e.completeTransition = e => t => new w(t.predictionId, t.label, t.emojiUnicode, t.title, t.browser, t.lensIsPriority, t.positionState, l.o.VisualState.complete(t.visualState, e)), e.select = e => t => (0, n.pipe)(e, u.filter((e => e.id === t.id)), g.orElse((0, n.pipe)(t, u.fromPredicate((e => "focused" === e.visualState.transition.type)))), u.fold((() => {
                            const i = c.s.PositionState.invalidateHeight(t.positionState),
                                a = {
                                    type: "focused",
                                    clockwise: !0
                                },
                                s = (0, n.pipe)(e, u.fold((() => l.o.VisualState.initial(a)), (() => l.o.VisualState.to(t.visualState, a))));
                            return new w(t.predictionId, t.label, t.emojiUnicode, t.title, t.browser, t.lensIsPriority, i, s)
                        }), (() => t))), e.unselect = e => t => (0, n.pipe)(e, u.filter((e => e.id === t.id)), g.orElse((0, n.pipe)(t, u.fromPredicate((e => "rendered" === e.visualState.transition.type)))), u.fold((() => {
                            const e = c.s.PositionState.invalidateHeight(t.positionState),
                                i = "hidden" === t.visualState.transition.type ? t.visualState : l.o.VisualState.to(t.visualState, {
                                    type: "rendered",
                                    clockwise: !0
                                });
                            return new w(t.predictionId, t.label, t.emojiUnicode, t.title, t.browser, t.lensIsPriority, e, i)
                        }), (() => t)))
                    }(i = e.Capabilities || (e.Capabilities = {}));
                e.getStateTransformer = t => ({
                    state: i,
                    metadata: a
                }) => {
                    if (!p.nL.hasItems(i) || !s.R.isMainLens(i.currentLens.id) || !p.nL.isLensview(i)) return v.left({
                        state: i,
                        metadata: a
                    });
                    const r = (0, n.pipe)(o.l.find(i.currentLens.items, e.isIntentDetectionItem), u.map(f.pick("value")));
                    return (0, n.pipe)(i, p.nL.getLens, u.chain(((e, t) => i => {
                        const a = t.getValue(),
                            r = a ? new w(a.predictionId, a.label, a.emojiUnicode, a.title, a.browser, s.R.isPriority(i.id), c.s.PositionState.changeWatched(c.s.PositionState.empty, !0), l.o.VisualState.initial({
                                type: "rendered",
                                clockwise: !0
                            }, !1)) : null;
                        return (0, n.pipe)(e, u.fold((() => u.some({
                            lens: i,
                            newIntentDetectionItem: r
                        })), (e => (null == r ? void 0 : r.label) === e.label ? u.none : u.some({
                            lens: i,
                            newIntentDetectionItem: r
                        }))))
                    })(r, t)), u.map((({
                        lens: e,
                        newIntentDetectionItem: t
                    }) => {
                        let a = (0, n.pipe)(r, u.fold((() => e.items), (t => e.items.remove(t.id))));
                        return t && (a = a.add(t)), p.nL.Prism.getLens().compose(h.v.Prism.items).set(a, i)
                    })), u.getOrElse((() => i)), (e => v.left({
                        state: e,
                        metadata: a
                    })))
                }
            }(a || (a = {}));
            class w {
                constructor(e, t, i, n, s, r, o, l) {
                    this.predictionId = e, this.label = t, this.emojiUnicode = i, this.title = n, this.browser = s, this.lensIsPriority = r, this.positionState = o, this.visualState = l, this.kind = a.Kind, this.id = a.id, this.renderOptions = d.j.defaultOptions
                }
                equals(e) {
                    return a.eq.equals(this, e)
                }
                hashCode() {
                    return (0, r.NO)({
                        predictionId: this.predictionId,
                        label: this.label,
                        emojiUnicode: this.emojiUnicode,
                        title: this.title,
                        browser: this.browser,
                        lensIsPriority: this.lensIsPriority,
                        positionState: JSON.stringify(this.positionState),
                        visualState: JSON.stringify(this.visualState)
                    })
                }
            }
        },
        73122: (e, t, i) => {
            if (i.d(t, {
                    w: () => n
                }), 75 == i.j) var a = i(20594);
            class n {
                constructor(e, t, i) {
                    var a;
                    if (this._pageState = e, this._isEnabled = !1, !i.isPremium || !(null === (a = i.experiments) || void 0 === a ? void 0 : a.premiumAlertLabels)) return;
                    const {
                        gdocsPremiumEmblemNewEndTimestamp: n
                    } = this._pageState.get();
                    n || t.startShowingPremiumEmblems(), this._isEnabled = !0
                }
                get premiumAlertHighlightsEnabled() {
                    const {
                        gdocsPremiumEmblemNewEndTimestamp: e
                    } = this._pageState.get();
                    return this._isEnabled && !!e
                }
                get premiumAlertHighlightRenderOption() {
                    const {
                        gdocsPremiumEmblemNewEndTimestamp: e
                    } = this._pageState.get();
                    return e < Date.now() ? a.IG.Features.showPersistentPremiumCardLabels : a.IG.Features.showNewPremiumCardLabels
                }
            }
        },
        86620: (e, t, i) => {
            i.d(t, {
                U: () => a,
                C: () => l
            });
            var a, n = i(27378),
                s = i(29511),
                r = i(71284),
                o = i(88056);
            ! function(e) {
                let t;
                ! function(e) {
                    e.isAppleSystem = "isAppleSystem"
                }(t = e.SidebarFlag || (e.SidebarFlag = {})), e.Flag = {
                    ...t,
                    ...r.a.Flag
                }, e.Context = n.createContext(o.Y.invariantContent("Environment"))
            }(a || (a = {}));
            class l {
                constructor() {
                    this._flags = new Set, this.actions = {
                        openUrl: () => {
                            throw new Error("Not implemented")
                        },
                        openPopup: () => {
                            throw new Error("Not implemented")
                        }
                    };
                    (0, s.O)().config.systemInfo.os.isMac && this._flags.add(a.Flag.isAppleSystem), this._flags.add(a.Flag.supportsSVGDominantBaseline), this._flags.add(a.Flag.onlyTrustedEvents)
                }
                has(e) {
                    return this._flags.has(e)
                }
            }
        },
        90989: (e, t, i) => {
            i.d(t, {
                S: () => a,
                I: () => c
            });
            var a, n = i(27378),
                s = i(30763),
                r = i(88056),
                o = i(19429),
                l = i(35407);
            ! function(e) {
                e.Context = n.createContext(r.Y.invariantContent("SidebarTextResources")), e.holder = o.VF((() => ({
                    logoText: "GRAMMARLY",
                    plagiarismTooltip: "Scan for plagiarism",
                    setGoalsTooltip: "Adjust goals",
                    statisticsTooltip: "See performance"
                })))
            }(a || (a = {}));
            const c = l.composeS({
                denali: s.m.holder,
                sidebar: a.holder
            })
        },
        10720: (e, t, i) => {
            i.d(t, {
                h: () => Z,
                u: () => W
            });
            var a, n = i(57050),
                s = i(27378),
                r = i(13922),
                o = i(2027),
                l = i(90361),
                c = i(66896),
                d = i(68579),
                p = i(36156),
                h = i(71841),
                m = i(74238),
                u = i(99116),
                g = i(35416),
                v = i(18955),
                f = i(77176),
                w = i(98403),
                _ = i(32952),
                b = i(93508),
                y = i(76974),
                E = i(2844),
                k = i(60797),
                S = i(24209),
                C = i(18625),
                I = i(66310),
                A = i(40151),
                M = i(85089),
                x = i(2834),
                L = i(95093),
                T = i(24713),
                F = i(85985),
                P = i(49708),
                R = i(17343),
                V = i(19751),
                O = i(5114),
                N = i(19962),
                D = i(5739),
                U = i(81531),
                B = i(31881),
                H = i(47476);
            ! function(e) {
                e.regular = "regular", e.small = "small"
            }(a || (a = {}));
            const j = B.UI.Grid.make((({
                slots: e,
                view: t
            }) => s.createElement(D.F.div, {
                className: t("spacing").pipe(f.U((e => e === a.regular ? H.spacingRegular : e === a.small ? H.spacingSmall : (0, l.vE)(e))))
            }, e.children)));

            function G(e) {
                switch (e) {
                    case c.R.SpecialId.PredictionTakeaways:
                    case c.R.SpecialId.Priority:
                        return a.small;
                    default:
                        return a.regular
                }
            }
            const Z = s.forwardRef((({
                    state: e,
                    cardsViewModel: t,
                    cardsListScrollManager: i,
                    connectorElements: a,
                    header: l,
                    footer: c,
                    capabilities: m,
                    comparator: u,
                    intentDetectionViewModel: f
                }, E) => {
                    const k = w.jw((e => {
                            let t = 7;
                            return t = 31 * t + (0, p.AC)(e.currentLens.id), t = 31 * t + (g.nL.hasItems(e) ? 1231 : 1237), t
                        }), e).view((e => g.nL.hasItems(e.get()) ? e.view(g.nL.Prism.getLens()) : null)).view((e => e ? {
                            state: e,
                            spacing: G(e.get().id)
                        } : null)),
                        S = s.useContext(o.Dg).state;
                    return s.createElement(v.d, {
                        className: y.of(""),
                        name: "cardlist",
                        stateSyncListener: q(i, a, S),
                        height: W(e, i, m),
                        isMaster: !0
                    }, s.createElement(s.Fragment, null, l ? s.createElement(D.F.div, {
                        className: H.headerOrFooterWrapper,
                        mount: e => a.lens("title").set(O.fromNullable(e))
                    }, l) : null, s.createElement(D.F.div, {
                        mount: E
                    }, k.view((e => {
                        return e ? B.UI.mount((a = e.spacing, (0, n.pipe)(d.A.cardList(r.O.item(t.actionEvents)), B.UI.patch("content", "cell", "item")((e => (0, n.pipe)(B.UI.Knot.make(j, {
                            children: e.child
                        }), B.UI.squash, B.UI.contramapState((e => ({
                            children: e,
                            root: {
                                spacing: a
                            }
                        }))), B.UI.mapAction((e => e.action))))))), (e => (0, n.pipe)(r.O.createCardListFlow(f)(t, e, new _.xQ, h.i$(i).pipe(b.O(!1)), m, u)))(e.state)) : null;
                        var a
                    }))), c ? s.createElement(D.F.div, {
                        className: H.headerOrFooterWrapper
                    }, c) : null))
                })),
                W = (e, t, i) => {
                    const a = (0, u.Sd)(i)(e.view(g.nL.mapper((({
                        currentLens: e,
                        alertSource: t
                    }) => O.some({
                        currentLens: e,
                        alertSource: t
                    })))));
                    return E.aj([a.pipe(k.oA, f.U((({
                        currentLens: e
                    }) => e.cardsHeight)), b.O(0)), t.paddingTop]).pipe(f.U((([e, t]) => e + t)))
                },
                q = (e, t, i) => {
                    const a = U.Monitoring.Logging.getLogger("view_models");
                    return S.T(C.P((() => {
                        e.paddingTop.set(0)
                    })), t.view("viewport").pipe(I.w(O.fold((() => A.E), (e => M.YC(e).pipe(x.b((() => a.debug("update card list viewport due to viewport resize event"))), L.T(i.pipe(T.j("dragging"), F.h((e => !e)), I.w(w.b2.rafScheduler), x.b((() => a.debug("update card list viewport due to drag end event"))))), f.U((() => e.getBoundingClientRect())), f.U((e => ({
                        top: m.r.FromWindowTop.ISO.wrap(e.top),
                        height: e.height
                    }))))))), x.b(w.wW(e.viewport))), t.view("scrollProvider").pipe(I.w(O.fold((() => A.E), (t => P.R(t, "scroll").pipe(f.U((() => t.scrollTop)), b.O(t.scrollTop), x.b(w.wW(e.scrollTop)), R.h(w.PU)))))), t.view("title").pipe(I.w(O.fold((() => y.of(N.Rect.empty)), (e => M.YC(e)))), f.U((e => e.height)), V.d({
                        bufferSize: 1,
                        refCount: !0
                    }), x.b(w.wW(e.paddingTop))), t.view("scrollConsumer").pipe(I.w(O.fold((() => A.E), (t => e.scrollOffset.pipe(x.b((e => {
                        t.scrollTop += e
                    })))))))).pipe(R.h(void 0))
                }
        },
        68340: (e, t, i) => {
            i.d(t, {
                C: () => R,
                S: () => P
            });
            var a = i(40327),
                n = i(18756),
                s = i(27378),
                r = i(13922),
                o = i(10720),
                l = i(73582),
                c = i(41488),
                d = i(66896),
                p = i(70023),
                h = i(61903),
                m = i(93494),
                u = i(18955),
                g = i(98403),
                v = i(60797),
                f = i(2834),
                w = i(77176),
                _ = i(19962),
                b = i(5114),
                y = i(5739),
                E = i(31881),
                k = i(74880),
                S = i(57050),
                C = i(38819),
                I = i(30509);
            const A = ({
                upgradeViewModel: e
            }) => s.createElement(y.F.div, {
                className: I.premiumLens
            }, E.UI.mount(C.r, E.Z.fromSideEffect((t => {
                "upgrade" === t.action.action.action.kind && e.openUpgradeUrl(l.L.Place.gdocsSidebarSuccessView)
            }), e.advancedAlerts.pipe(w.U((0, S.flow)(b.map((e => ({
                count: e.count,
                alerts: e.alerts()
            })))))))));
            var M = i(30763),
                x = i(89379),
                L = i(28378),
                T = i(879);
            const F = ({
                    successLensViewModel: e
                }) => {
                    const t = (0, x.hM)((0, x.wK)(e.successState.view("type"), s.useContext(M.m.Context)));
                    return s.createElement(y.F.div, {
                        className: T.successLens
                    }, E.UI.mount(L.q, t))
                },
                P = s.forwardRef((({
                    state: e,
                    cardsViewModel: t,
                    upgradeViewModel: i,
                    cardsListScrollManager: c,
                    capabilities: u,
                    ...v
                }, w) => {
                    const _ = g.jw((e => {
                            let t = 7;
                            return t = 31 * t + (0, n.AC)(e.currentLens.id), t = 31 * t + (m.v.WithSuccess.State.isInSuccess(u)(e) ? 1231 : 1237), t
                        }), e),
                        k = (0, a.pipe)((0, p.d)(i.advancedAlerts), E.Z.extendActions(f.b((e => {
                            e.key === h.n.State.expanded && "upgrade" === e.action.kind && i.openUpgradeUrl(l.L.Place.gdocsSidebarCardList)
                        }))));
                    return s.createElement(R, {
                        ref: w
                    }, (e => s.createElement(y.F.Fragment, null, _.view((a => {
                        const n = a.get();
                        return n.currentLens.id === d.R.SpecialId.Premium ? s.createElement(A, {
                            upgradeViewModel: i
                        }) : m.v.WithSuccess.State.isInSuccess(u)(n) ? s.createElement(F, {
                            successLensViewModel: v.successLensViewModel
                        }) : s.createElement("div", null, s.createElement(o.h, {
                            state: a,
                            cardsViewModel: t,
                            cardsListScrollManager: c,
                            connectorElements: e,
                            header: E.UI.mount(h.n.TogglablePanel, k),
                            comparator: r.O.listItemOrd,
                            capabilities: u,
                            intentDetectionViewModel: b.none
                        }))
                    })))))
                })),
                R = s.forwardRef((({
                    children: e,
                    onClick: t,
                    className: i = k.cardList,
                    footer: n
                }, r) => {
                    const o = u.d.Elements.create(),
                        l = (0, a.pipe)(o.view("viewport"), v.oA, w.U(_.Rect.fromEl));
                    return s.createElement("div", {
                        onClick: t,
                        className: i,
                        ref: e => {
                            "function" == typeof r ? r(e) : r && (r.current = e);
                            const t = b.fromNullable(e);
                            o.lens("scrollConsumer").set(t), o.lens("scrollProvider").set(t), o.lens("viewport").set(t)
                        }
                    }, s.createElement(c.l.RootVirtualContainer, {
                        name: "cardListConnector",
                        viewport: l
                    }, e(o)), n)
                }))
        },
        1309: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var a = i(27378);
            if (75 == i.j) var n = i(87380);
            if (75 == i.j) var s = i(94793);
            if (75 == i.j) var r = i(66896);
            if (75 == i.j) var o = i(5739);
            var l = i(57731);
            const c = ({
                    lensPreviewViewModel: e
                }) => {
                    const t = e.getLens(r.R.SpecialId.AllAlerts).view((e => e.count));
                    return a.createElement(o.F.div, {
                        className: l.footer
                    }, a.createElement(d, {
                        activeAlerts: t
                    }))
                },
                d = ({
                    activeAlerts: e
                }) => a.createElement(o.F.Fragment, null, e.view((e => e > 0 ? a.createElement(n.x.OutcomeCounter, {
                    count: e,
                    theme: {
                        counterWrapper: l.counterWrapper,
                        counterContent: l.counter
                    }
                }) : a.createElement(s.JO.CheckmarkOutcomes, {
                    className: l.counterCheckmarkIcon
                }))))
        },
        74928: (e, t, i) => {
            i.d(t, {
                $l: () => I
            });
            var a = i(27378);
            if (75 == i.j) var n = i(77394);
            if (75 == i.j) var s = i(90989);
            if (75 == i.j) var r = i(7046);
            if (75 == i.j) var o = i(94793);
            if (75 == i.j) var l = i(81301);
            if (75 == i.j) var c = i(3656);
            if (75 == i.j) var d = i(66896);
            if (75 == i.j) var p = i(40018);
            if (75 == i.j) var h = i(40743);
            if (75 == i.j) var m = i(87667);
            if (75 == i.j) var u = i(92644);
            if (75 == i.j) var g = i(15774);
            if (75 == i.j) var v = i(89186);
            if (75 == i.j) var f = i(84317);
            if (75 == i.j) var w = i(77176);
            if (75 == i.j) var _ = i(85985);
            if (75 == i.j) var b = i(22232);
            if (75 == i.j) var y = i(8125);
            if (75 == i.j) var E = i(5114);
            if (75 == i.j) var k = i(12187);
            var S = i(31881),
                C = i(21831);
            const I = ({
                    state: e,
                    navigationViewModel: t,
                    modalManager: i,
                    lensPreviewViewModel: s,
                    features: r
                }) => {
                    switch (r.priorityLens.kind) {
                        case n.h.Kind.dropdown:
                            return a.createElement(A, {
                                state: e,
                                navigationViewModel: t,
                                modalManager: i,
                                lensPreviewViewModel: s
                            });
                        case n.h.Kind.priorityToggle:
                            return a.createElement(M, {
                                state: e,
                                navigationViewModel: t,
                                modalManager: i,
                                lensPreviewViewModel: s,
                                defaultMode: r.priorityLens.defaultMode
                            });
                        case n.h.Kind.none:
                            return a.createElement(x, {
                                navigationViewModel: t,
                                modalManager: i
                            });
                        default:
                            (0, b.vE)(r.priorityLens)
                    }
                },
                A = ({
                    state: e,
                    navigationViewModel: t,
                    modalManager: i,
                    lensPreviewViewModel: n
                }) => a.createElement("div", {
                    className: C.priorityLensHeader
                }, a.createElement(L, {
                    navigationViewModel: t,
                    modalManager: i
                }), a.createElement("div", {
                    className: C.prioritySwitchWrapper
                }, S.UI.mount(m.n.Switch, (0, u.i)(n, t, e.pipe(w.U((e => e.currentLens.id))))))),
                M = ({
                    state: e,
                    navigationViewModel: t,
                    modalManager: i,
                    lensPreviewViewModel: n,
                    defaultMode: s
                }) => a.createElement("div", {
                    className: C.priorityLensHeader
                }, a.createElement(L, {
                    navigationViewModel: t,
                    modalManager: i
                }), a.createElement("div", {
                    className: C.prioritySwitchFlatWrapper
                }, S.UI.mount(v.B.DefaultHeader, (0, f.HP)(t, e.pipe(w.U((e => e.currentLens.id)), _.h((0, y.Kg)(d.R.isPriority, d.R.isAllAlerts))), "priority" === s ? g.H.LensMode.priority : g.H.LensMode.all, "compact", n, 10)))),
                x = ({
                    navigationViewModel: e,
                    modalManager: t
                }) => a.createElement("div", {
                    className: C.defaultHeader
                }, a.createElement(L, {
                    navigationViewModel: e,
                    modalManager: t
                }), a.createElement("div", Object.assign({}, (0, k.Sh)(C.lensNavigation, C.disabledLensNavigation)), S.UI.mount(h.C, S.Z.fromSideEffect((t => {
                    e.events.next({
                        type: "switchToLens",
                        id: t.lens.id,
                        focusFirst: !1,
                        actionSource: p.l$.sidebar
                    })
                }), {
                    activeLensId: E.none,
                    previews: Object.values(e.lensPreviews.get()).filter((e => e.id !== d.R.SpecialId.Vox)),
                    disabled: !1
                })))),
                L = ({
                    navigationViewModel: e,
                    modalManager: t
                }) => {
                    const i = a.useContext(s.S.Context),
                        n = t.state.view(E.exists((e => e.instance.type === l.dC.SetGoals)));
                    return a.createElement("div", {
                        className: C.head
                    }, a.createElement("div", {
                        className: C.headerGroup
                    }, a.createElement(o.JO.Grammarly, {
                        className: C.logoIcon,
                        width: 18
                    }), a.createElement(c.H5, {
                        className: C.logoText
                    }, i.logoText)), a.createElement(r.zx.Flat, {
                        name: "setGoals",
                        className: C.setGoalsButton,
                        title: i.setGoalsTooltip,
                        titleAlign: "bottomCenter",
                        active: n,
                        disabled: n,
                        onClick: () => e.events.next({
                            type: "setGoals"
                        })
                    }, a.createElement(o.JO.GoalsEmpty, {
                        width: 24
                    })), a.createElement("div", {
                        className: C.headerGroup
                    }, a.createElement("div", {
                        className: C.divider
                    }), a.createElement(r.zx.Flat, {
                        name: "closeSidebar",
                        onClick: () => e.events.next({
                            type: "toggleSidebar",
                            actionSource: p.l$.sidebar
                        })
                    }, a.createElement(o.JO.Close, {
                        width: 16
                    }))))
                }
        },
        80550: (e, t, i) => {
            i.d(t, {
                L: () => o
            });
            var a = i(57050),
                n = i(27378),
                s = i(5114),
                r = i(5739);
            const o = ({
                modalManager: e
            }) => n.createElement(r.F.Fragment, null, e.state.view((0, a.flow)(s.map((({
                component: e
            }) => e)), s.toNullable)))
        },
        11177: (e, t, i) => {
            i.d(t, {
                P: () => o
            });
            var a = i(27378),
                n = i(50790),
                s = i(95403),
                r = i(32380);
            const o = {
                    unauthorizedError: (e, t) => a.createElement(s.s.UnauthorizedError, {
                        action: t("gotoLogin")
                    }),
                    offline: () => a.createElement(l, null),
                    alertUndo: (e, t) => a.createElement(r.A.Standard, {
                        action: t("undo"),
                        params: e.args.params
                    })
                },
                l = () => a.createElement(n.DI.TitledContent, {
                    title: "Lost Connection"
                }, "Your Internet session was interrupted.")
        },
        92132: (e, t, i) => {
            i.d(t, {
                Q: () => l
            });
            var a = i(27378),
                n = i(41046),
                s = i(60797),
                r = i(95300),
                o = i(5114);
            const l = ({
                children: e,
                remSize: t,
                setter: i
            }) => (c += 1, a.useEffect((() => {
                const e = t.subscribe((e => {
                    d.next(o.some(e)), i(o.some(e))
                }));
                return () => {
                    e.unsubscribe(), c -= 1, 0 === c && (d.next(o.none), i(o.none))
                }
            }), [t]), a.createElement(n.u.Context.Provider, {
                value: d.pipe(s.oA)
            }, e));
            let c = 0;
            const d = new r.X(o.none)
        },
        9025: (e, t, i) => {
            i.d(t, {
                _: () => s
            });
            var a = i(27378);
            if (75 == i.j) var n = i(94071);
            const s = ({
                children: e,
                className: t
            }) => a.createElement("div", {
                className: t,
                style: {
                    position: "fixed",
                    right: "0px",
                    top: "0px",
                    bottom: "0px",
                    width: n.xK,
                    zIndex: 1e3,
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100vh"
                }
            }, e)
        },
        94071: (e, t, i) => {
            i.d(t, {
                iB: () => a,
                xK: () => n,
                H2: () => s,
                kl: () => r
            });
            const a = ".docs-companion-sidebar",
                n = "300px";
            var s;
            ! function(e) {
                e.selector = ".companion-guest-app-switcher .app-switcher-button", e.selectedClass = "app-switcher-button-selected", e.selectedSelector = `.${e.selectedClass}`, e.activeClass = "app-switcher-button-active", e.hoverClass = "app-switcher-button-hover", e.disabledClass = "app-switcher-button-disabled"
            }(s || (s = {}));
            const r = ".companion-about-panel-button"
        },
        94663: (e, t, i) => {
            i.d(t, {
                I: () => r
            });
            var a = i(5802),
                n = i(41966);
            const s = {
                priority: a.P.Priority.highest,
                timeout: a.P.TimeoutDisabled,
                position: a.P.Position.top,
                viewType: a.P.ViewType.standard
            };
            var r;
            ! function(e) {
                e.createFactory = function() {
                    return {
                        alertUndo: n.r.createBuilder().build({
                            priority: a.P.Priority.low,
                            timeout: a.P.DefaultTimeout,
                            position: a.P.Position.bottomRight,
                            viewType: a.P.ViewType.standard
                        }),
                        unauthorizedError: n.r.createBuilder().build(s),
                        offline: n.r.createBuilder().build(s)
                    }
                }
            }(r || (r = {}))
        },
        70091: (e, t, i) => {
            i.d(t, {
                U9: () => M,
                jv: () => L
            });
            var a = i(27378);
            if (75 == i.j) var n = i(86620);
            if (75 == i.j) var s = i(90989);
            if (75 == i.j) var r = i(68340);
            if (75 == i.j) var o = i(1309);
            if (75 == i.j) var l = i(74928);
            if (75 == i.j) var c = i(80550);
            if (75 == i.j) var d = i(11177);
            if (75 == i.j) var p = i(92132);
            if (75 == i.j) var h = i(9025);
            if (75 == i.j) var m = i(50981);
            var u = i(48189);
            if (75 == i.j) var g = i(71284);
            if (75 == i.j) var v = i(41046);
            if (75 == i.j) var f = i(30763);
            if (75 == i.j) var w = i(47861);
            if (75 == i.j) var _ = i(97528);
            if (75 == i.j) var b = i(53187);
            if (75 == i.j) var y = i(85255);
            if (75 == i.j) var E = i(76974);
            if (75 == i.j) var k = i(8313);
            var S = i(79850),
                C = i(75259),
                I = i(67129);
            const A = ({
                state: e,
                cardsViewModel: t,
                navigationViewModel: i,
                successLensViewModel: n,
                upgradeViewModel: s,
                cardsListScrollManager: c,
                notificationManager: p,
                lensPreviewViewModel: m,
                modalManager: u,
                features: g,
                capabilities: v
            }) => a.createElement(h._, {
                className: I.sidebarContainer
            }, a.createElement(l.$l, {
                state: e,
                navigationViewModel: i,
                modalManager: u,
                lensPreviewViewModel: m,
                features: g
            }), a.createElement(r.S, {
                cardsViewModel: t,
                state: e,
                successLensViewModel: n,
                upgradeViewModel: s,
                cardsListScrollManager: c,
                capabilities: v
            }), "none" !== g.priorityLens.kind ? null : a.createElement(o.Z, {
                lensPreviewViewModel: m
            }), a.createElement(w.i, {
                key: "notificationCenter",
                manager: p,
                views: d.P,
                theme: {
                    grid: {
                        container: C.container,
                        bottomLeft: C.bottomLeft,
                        bottomRight: C.bottomRight,
                        top: C.top
                    },
                    view: {
                        wrapper: C.notificationWrapper
                    }
                }
            }));

            function M(e) {
                return ({
                    integration: t,
                    sidebarReady: i
                }) => () => {
                    const s = t.engine,
                        r = new n.C,
                        {
                            lensState: o,
                            cardsViewModel: l,
                            navigationViewModel: d,
                            successLensViewModel: p,
                            upgradeViewModel: h,
                            dispose: u,
                            cardsListScrollManager: g,
                            notificationManager: v,
                            lensPreviewViewModel: f,
                            modalManager: w,
                            capabilities: _
                        } = (0, m.G)(s, t.denaliViewAdapter, e, t.connectionState, t.pageState, t.actions, t.gnar, t.user, t.document.settings.lens("selectedLens"), t.features, i);
                    return y.P.useEffectOnWillUnmount((() => {
                        s.shutdown(), u()
                    })), a.createElement(x, {
                        environment: r
                    }, a.createElement(A, {
                        state: o,
                        cardsViewModel: l,
                        navigationViewModel: d,
                        successLensViewModel: p,
                        upgradeViewModel: h,
                        cardsListScrollManager: g,
                        notificationManager: v,
                        lensPreviewViewModel: f,
                        modalManager: w,
                        features: t.features,
                        capabilities: _
                    }), a.createElement(c.L, {
                        modalManager: w
                    }), a.createElement(b.X, null))
                }
            }
            const x = ({
                    environment: e,
                    children: t
                }) => {
                    const i = a.useRef((0, s.I)(f.m.getConfig(e.has(n.U.Flag.isAppleSystem) ? "mac" : "windows")));
                    return a.createElement(p.Q, {
                        remSize: E.of(16),
                        setter: e => v.u.setRootCssVar(document.documentElement, e)
                    }, a.createElement(n.U.Context.Provider, {
                        value: e
                    }, a.createElement(g.a.Context.Provider, {
                        value: e
                    }, a.createElement(s.S.Context.Provider, {
                        value: i.current.sidebar
                    }, a.createElement(f.m.Context.Provider, {
                        value: i.current.denali
                    }, a.createElement(k.TG.ContextMock, null, a.createElement(_.G.DefaultProvider, null, a.createElement(L, null, t))))))))
                },
                L = ({
                    children: e
                }) => a.createElement(a.Fragment, null, a.createElement("div", {
                    "data-grammarly-part": "gdocs-sidebar",
                    className: S.wrapper
                }, e), a.createElement(u.p, {
                    thin: !0,
                    thinItalic: !0,
                    regular: !0,
                    italic: !0,
                    bold: !0,
                    boldItalic: !0,
                    semiBold: !0
                }))
        },
        16868: (e, t, i) => {
            i.d(t, {
                hp: () => N,
                CV: () => D,
                k9: () => U
            });
            var a = i(57050),
                n = i(40327),
                s = i(74850),
                r = i(59443),
                o = i(40018),
                l = i(66896),
                c = i(18625),
                d = i(76974),
                p = i(60797),
                h = i(77176),
                m = i(66310),
                u = i(17343),
                g = i(98403),
                v = i(91224),
                f = i(40151),
                w = i(38194),
                _ = i(24209),
                b = i(93508),
                y = i(16118),
                E = i(85985),
                k = i(28043),
                S = i(41398),
                C = i(83401),
                I = i(598),
                A = i(25980),
                M = i(58562),
                x = i(74238),
                L = i(99116),
                T = i(4890),
                F = i(35416),
                P = i(5114),
                R = i(83078),
                V = i(38983);
            class O {
                constructor(e, t) {
                    this._cardPositions = e, this._markPositions = t, this._log = s.Y.create(O.name)
                }
                alignCardToMark({
                    id: e,
                    renderOptions: {
                        features: t
                    },
                    activeAlert: i,
                    activeHighlightIndex: a
                }, s) {
                    return c.P((() => d.of(this._markPositions.getMarkAlertPosition({
                        alert: i,
                        highlightIndex: a
                    })))).pipe(p.oA, h.U((i => (0, n.pipe)(this._cardPositions.getCardSuggestedPositionInViewport(e, t.has(T.j.Features.showLabel), P.some(i), "cardContentTop"), P.fromEither))), p.oA, m.w((i => this._cardPositions.setCardPosition(e, t.has(T.j.Features.showLabel), !0, i.top))), u.h(g.PU), v.K((e => (this._log.error("Cannot align card to mark", e), f.E))), w.B())
                }
                alignMarkTo(e, t, i, a) {
                    return c.P((() => d.of((0, n.pipe)(this._cardPositions.getCardSuggestedPositionInViewport(e.id, e.renderOptions.features.has(T.j.Features.showLabel), P.some(i), "cardContentTop"), P.fromEither)).pipe(p.oA))).pipe(m.w((i => _.T(this._markPositions.moveAlertHighlightInViewport(t, x.r.FromWindowTop.ISO.modify(x.L.concatC(i.contentOffset))(i.top), r.uq.initial), this._cardPositions.setCardPosition(e.id, e.renderOptions.features.has(T.j.Features.showLabel), !0, i.top)))), u.h(g.PU), v.K((e => (this._log.error("Cannot align mark to suggested position", e), f.E))), w.B())
                }
                alignMarkToCard({
                    id: e,
                    renderOptions: {
                        features: t
                    },
                    activeHighlightIndex: i,
                    activeAlert: a
                }, s, o = P.none) {
                    return c.P((() => d.of((0, n.pipe)(this._cardPositions.getCardSuggestedPositionInViewport(e, t.has(T.j.Features.showLabel), o, "cardContentTop"), P.fromEither)).pipe(p.oA))).pipe(m.w((n => _.T(this._markPositions.moveAlertHighlightInViewport({
                        alert: a,
                        highlightIndex: i
                    }, x.r.FromWindowTop.ISO.modify(x.L.concatC(n.contentOffset))(n.top), r.uq.initial), this._cardPositions.setCardPosition(e, t.has(T.j.Features.showLabel), !0, n.top)))), u.h(g.PU), v.K((e => (this._log.error("Cannot align mark to card", e), f.E))), w.B())
                }
                alignCardTo(e, t, i) {
                    const a = i !== A.v.Animation.NO_ANIMATION;
                    return c.P((() => d.of((0, n.pipe)(this._cardPositions.getCardSuggestedPosition(e.id, e.renderOptions.features.has(T.j.Features.showLabel), P.some(t), "cardTop"), P.fromEither)).pipe(p.oA))).pipe(m.w((t => this._cardPositions.setCardPosition(e.id, e.renderOptions.features.has(T.j.Features.showLabel), a, t.top))), u.h(g.PU), v.K((e => (this._log.error("Cannot align card to required top", e), f.E))), w.B())
                }
            }
            const N = (e, t, i, a, n, s) => new O(M.eZ.getSuperScrollMapper(e, a, V.h.create(16)), M.UC.getMapper(t, n, s));
            var D;
            ! function(e) {
                e.skip = "skip"
            }(D || (D = {}));
            const U = (e, t, i, s, r, c = g.b2.rafScheduler) => {
                const d = (e, i, a, n) => {
                        if (a === o.l$.text) return t.alignCardToMark(e, i ? A.v.Animation.ANIMATE_ALL : A.v.Animation.NO_ANIMATION, !0);
                        if (a === F.h8.forceText) return t.alignCardToMark(e, A.v.Animation.NO_ANIMATION, !1); {
                            const s = a === o.l$.sidebar;
                            return t.alignMarkToCard(e, s ? i ? A.v.Animation.ANIMATE_ALL : A.v.Animation.ANIMATE_MARK : A.v.Animation.NO_ANIMATION, n)
                        }
                    },
                    p = _.T(e.view(F.nL.mapper((({
                        currentLens: e,
                        alertSource: t
                    }) => P.some({
                        currentLens: e,
                        alertSource: t
                    })))).pipe(b.O(P.none), h.U(P.map((e => e.currentLens.id))), y.G(), E.h((([e, t]) => (0, n.pipe)(R.map2(((e, t) => e !== t))(e, t), P.exists(a.identity)))), u.h(P.none)), e.view(F.nL.mapper((({
                        currentLens: e,
                        alertSource: t
                    }) => P.some({
                        currentLens: e,
                        alertSource: t
                    })))).pipe(E.h(P.exists((({
                        currentLens: e
                    }) => (0, L.Bk)(r)(e)))), h.U(P.chain((({
                        currentLens: e,
                        alertSource: t
                    }) => (0, n.pipe)(s(e), P.filter(r.isValidToAlign), P.map((i => ({
                        item: i,
                        source: t,
                        lensId: e.id
                    }))))))))).pipe(k.x((0, a.flow)(R.map2(((e, t) => e.lensId === t.lensId && e.item.activeAlert.id === t.item.activeAlert.id && e.item.visualState.transition.type === t.item.visualState.transition.type && e.item.activeHighlightIndex === t.item.activeHighlightIndex)), P.exists(a.identity))), b.O(P.none), y.G(), h.U((([e, t]) => (0, n.pipe)(t, P.map((i => ({
                        item: i.item,
                        source: i.source,
                        animate: (0, n.pipe)(e, R.forAll((({
                            lensId: e
                        }) => e === i.lensId))),
                        suggestedPosition: (0, n.pipe)(e, P.filter((e => !r.isScheduledToDispose(e.item))), P.chain((e => (0, n.pipe)(t, P.map((t => [e.item, t.item]))))), P.filter((([e, t]) => t.lensId === e.lensId && t.positionState.absTop > e.positionState.absTop)), P.map((([e, t]) => x.r.FromWindowTop.ISO.wrap(t.positionState.absTop))))
                    })))))), m.w(P.fold((() => f.E), c)), S.M(i), m.w((([{
                        item: e,
                        source: t,
                        animate: a,
                        suggestedPosition: s
                    }, r]) => (0, n.pipe)(r, P.fold((() => d(e, a, t, s)), (t => (i.set(P.none), t === D.skip ? C.C : d(e, a, t, s))))))));
                return {
                    id: "alignmentSideEffect",
                    when: l.R.isWithAlertsId,
                    what: F.nL.Effect.Applicator.create(p.pipe(I.c(C.C)))
                }
            }
        },
        93829: (e, t, i) => {
            if (i.d(t, {
                    C: () => d
                }), 75 == i.j) var a = i(9671);
            if (75 == i.j) var n = i(20016);
            if (75 == i.j) var s = i(9105);
            if (75 == i.j) var r = i(32138);
            if (75 == i.j) var o = i(45586);
            if (75 == i.j) var l = i(85985);
            if (75 == i.j) var c = i(15646);
            class d {
                constructor(e, t, i, a) {
                    this._cardsViewModel = e, this._gnar = t, this._getAlertById = i, this._user = a, this._subs = new o.w.Keeper, this.subscribeToSidebarCardActions()
                }
                subscribeToSidebarCardActions() {
                    this._subs.push(this.subscribeToAnonymousUserSignInClick(), this.subscribeToPremiumTrialFooterCtaClick(), (0, n.u)(this._cardsViewModel.actionEvents, this._gnar, this._getAlertById, this._user), (0, a.t)(this._cardsViewModel.actionEvents, this._gnar, "gdocs"))
                }
                subscribeToAnonymousUserSignInClick() {
                    return this._cardsViewModel.actionEvents.pipe(l.h((e => e.type === c.lY.Type.toSignIn))).subscribe((() => {
                        this._gnar.gdocsSidebarAnonymousUserSignIn(), self.open((0, r.s7)())
                    }))
                }
                subscribeToPremiumTrialFooterCtaClick() {
                    return s.Z.subscribeToCardFooterAction(this._cardsViewModel.actionEvents, this._gnar)
                }
                dispose() {
                    this._subs.dispose()
                }
            }
        },
        51540: (e, t, i) => {
            i.d(t, {
                A7: () => S,
                uo: () => C,
                Ng: () => I,
                CH: () => A
            });
            var a = i(57050),
                n = i(40018);
            if (75 == i.j) var s = i(66896);
            var r = i(55935),
                o = i(66310),
                l = i(40151),
                c = i(76974),
                d = i(41398),
                p = i(85985),
                h = i(77176);
            if (75 == i.j) var m = i(28043);
            if (75 == i.j) var u = i(598);
            if (75 == i.j) var g = i(83401);
            if (75 == i.j) var v = i(13444);
            if (75 == i.j) var f = i(57091);
            if (75 == i.j) var w = i(16118);
            var _ = i(35416);
            if (75 == i.j) var b = i(93494);
            var y = i(5114);
            if (75 == i.j) var E = i(83078);
            if (75 == i.j) var k = i(38983);

            function S(e, t) {
                return {
                    id: "alertSwitchingByClickSideEffect",
                    when: a.constTrue,
                    what: _.nL.Effect.SwitchAlert.create(e.alertClicked.pipe(r.T(1), o.w(y.fold((() => l.E), c.of)), d.M(t.pipe(p.h(_.nL.hasCards), h.U((e => e.currentLens.id))), ((e, t) => ({
                        ...e,
                        lensId: t
                    }))), h.U((({
                        alert: e,
                        highlightIndex: t,
                        lensId: i
                    }) => ({
                        alertHighlight: {
                            alert: e,
                            highlightIndex: t
                        },
                        alertSource: n.l$.text,
                        options: {
                            lensId: i,
                            order: "textOrder"
                        }
                    })))))
                }
            }

            function C(e, t) {
                return {
                    id: "connectionManager",
                    when: () => !0,
                    what: _.nL.Effect.SwitchAlert.create(e.pipe(h.U((e => e.online)), m.x(), o.w((e => e ? l.E : t.enqueue("offline", {
                        reconnectTime: k.h.create(10)
                    }))), u.c(g.C)))
                }
            }

            function I(e, t, i) {
                const a = e.getLens(s.R.SpecialId.Premium).pipe(h.U((e => e.count > 0)), m.x());
                return {
                    id: "autoSwitchToPremiumLensSideEffect",
                    when: e => e === s.R.SpecialId.AllAlerts || e === s.R.SpecialId.Priority,
                    what: _.nL.Effect.SwitchLens.create(t.pipe(h.U(b.v.WithSuccess.State.isInSuccess(i)), m.x(), v.g(1), f.a(a), p.h((([e, t]) => e && t)), h.U((() => ({
                        lensId: s.R.SpecialId.Premium,
                        alertSource: n.l$.sidebar,
                        options: {
                            toFocus: _.nL.Effect.FocusBehavior.noFocus
                        }
                    })))))
                }
            }

            function A(e, t) {
                const i = e.getLens(s.R.SpecialId.AllAlerts).pipe(h.U((e => e.count > 0)), m.x()),
                    r = e.getLens(s.R.SpecialId.Priority).pipe(h.U((e => e.count > 0)), m.x());
                return {
                    id: "autoSwitchFromPremiumLensSideEffect",
                    when: a.constTrue,
                    what: _.nL.Effect.SwitchLens.create(t.pipe(h.U((e => e.currentLens.id)), m.x(), w.G(), p.h((([e, t]) => t === s.R.SpecialId.Premium)), h.U((([e, t]) => e)), f.a(i, r), h.U((([e, t, i]) => e === s.R.SpecialId.Priority && i ? y.some(s.R.SpecialId.Priority) : e === s.R.SpecialId.AllAlerts && t ? y.some(s.R.SpecialId.AllAlerts) : y.none)), p.h(y.isSome), h.U(E.unsafeGet), h.U((e => ({
                        lensId: e,
                        alertSource: n.l$.sidebar,
                        options: {
                            toFocus: _.nL.Effect.FocusBehavior.noFocus
                        }
                    })))))
                }
            }
        },
        50981: (e, t, i) => {
            if (i.d(t, {
                    G: () => ie
                }), 75 == i.j) var a = i(57050);
            if (75 == i.j) var n = i(40327);
            if (75 == i.j) var s = i(58809);
            if (75 == i.j) var r = i(13922);
            if (75 == i.j) var o = i(9105);
            if (75 == i.j) var l = i(73122);
            if (75 == i.j) var c = i(77394);
            if (75 == i.j) var d = i(94663);
            if (75 == i.j) var p = i(93829);
            if (75 == i.j) var h = i(62346);
            if (75 == i.j) var m = i(37290);
            if (75 == i.j) var u = i(73582);
            if (75 == i.j) var g = i(92783);
            if (75 == i.j) var v = i(44618);
            if (75 == i.j) var f = i(90361);
            if (75 == i.j) var w = i(81301);
            if (75 == i.j) var _ = i(61813);
            if (75 == i.j) var b = i(66896);
            if (75 == i.j) var y = i(13313);
            if (75 == i.j) var E = i(98403);
            if (75 == i.j) var k = i(76974);
            if (75 == i.j) var S = i(77176);
            if (75 == i.j) var C = i(85985);
            if (75 == i.j) var I = i(21619);
            if (75 == i.j) var A = i(54216);
            if (75 == i.j) var M = i(88643);
            if (75 == i.j) var x = i(48052);
            if (75 == i.j) var L = i(91549);
            if (75 == i.j) var T = i(83167);
            if (75 == i.j) var F = i(20594);
            if (75 == i.j) var P = i(35607);
            if (75 == i.j) var R = i(20291);
            if (75 == i.j) var V = i(34383);
            if (75 == i.j) var O = i(11245);
            if (75 == i.j) var N = i(4890);
            if (75 == i.j) var D = i(35416);
            if (75 == i.j) var U = i(93494);
            if (75 == i.j) var B = i(73841);
            if (75 == i.j) var H = i(89770);
            if (75 == i.j) var j = i(39920);
            if (75 == i.j) var G = i(17372);
            if (75 == i.j) var Z = i(74364);
            if (75 == i.j) var W = i(27125);
            if (75 == i.j) var q = i(5114);
            if (75 == i.j) var z = i(95195);
            if (75 == i.j) var Y = i(8125);
            if (75 == i.j) var K = i(95574);
            if (75 == i.j) var Q = i(38983);
            if (75 == i.j) var $ = i(81531);
            if (75 == i.j) var X = i(16868);
            if (75 == i.j) var J = i(51540);
            if (75 == i.j) var ee = i(11755);
            if (75 == i.j) var te = i(71962);
            const ie = (e, t, i, ie, ae, ne, se, re, oe, le, ce) => {
                var de;
                const pe = $.Monitoring.Logging.getLogger("view_models"),
                    he = Q.h.create(y.A.defaultState),
                    me = A.t.create(A.t.defaultLensFilters, A.t.defaultTextFilters),
                    ue = new l.w(ae, ne, re),
                    ge = e.alertsList.state.pipe((t => y.A.get(t, e.alertsList.lensesScores, me))).subscribe(E.wW(he)),
                    ve = new ee.t(he.view("lenses"), me),
                    fe = (0, x.$)((0, v.a)(t).getContents),
                    we = {
                        features: (() => {
                            var e;
                            const t = new Set;
                            return re.isAnonymous && (null === (e = re.experiments) || void 0 === e ? void 0 : e.anonUserGDocsSidebar) && t.add(F.IG.Features.showAnonymousUserFooters), t.add(F.IG.Features.showCardLabelInOutcomes), o.Z.isInFreeTrial(re, ae.get()) && t.add(F.IG.Features.showPremiumTrialFooters), ue.premiumAlertHighlightsEnabled && t.add(ue.premiumAlertHighlightRenderOption), t
                        })(),
                        cardLayoutDensityMode: N.j.Density.compact,
                        shouldAnimateAlertApply: a.constFalse
                    },
                    _e = (0, F.Ls)(fe, e.alertsReader, we, (() => k.of(q.none)), e.mutingAlertsReader),
                    be = L.R.ItemFactory.create(fe, e.mutingAlertsReader, we, (() => k.of(q.none))),
                    ye = (0, O.U)(fe, e.alertsReader, we, V.T.ordAlert),
                    Ee = r.O.getCapabilities(_e, be, ye, e.alertsReader, fe, Q.h.create(V.D.empty())),
                    ke = new H.oq(e.alertsList.state, e.alertsReader, he.view("lenses"), e.positionManager, ve, new j.gi(_e, me, r.O.equatable.structEq, r.O.defaultOrd), (0, j.is)(_e, Ee), Ee, me),
                    Se = (null === (de = re.experiments) || void 0 === de ? void 0 : de.hidePriorityToggle) ? b.R.SpecialId.AllAlerts : ((e, t) => {
                        switch (e.kind) {
                            case c.h.Kind.dropdown:
                                return t.get();
                            case c.h.Kind.priorityToggle:
                                return "priority" === e.defaultMode ? b.R.SpecialId.Priority : b.R.SpecialId.AllAlerts;
                            case c.h.Kind.none:
                                return b.R.SpecialId.AllAlerts;
                            default:
                                (0, f.vE)(e)
                        }
                    })(le.priorityLens, oe);
                i.next({
                    kind: c.R.ChangeLens,
                    selectedLens: Se === b.R.SpecialId.Priority ? "priority" : "all"
                });
                const Ce = Q.h.create(ke.emptyState(Se)),
                    Ie = Ce.pipe(S.U((e => e.currentLens.id)), C.h(s.U.SelectedLens.filter)).subscribe((e => oe.set(e))),
                    Ae = (0, T.u0)((() => t.getCursor().index), ke),
                    Me = new u.x(e.alertsList, Ce, 5),
                    xe = new w.EQ(new te.o(e.sessionModel, Me, re.isPremium)),
                    Le = new m.$(Ce, ve, i, xe, t, le, se, G.z.all),
                    Te = new M.Xx({
                        flush: () => t.flushChanges()
                    }, Le.events, _e, e.alertsService, (() => Promise.resolve()), (() => Promise.resolve()), (0, n.pipe)(e.mutedAlertsCategoriesModel, q.map((e => ({
                        model: e,
                        openSuggestionsManagement: () => self.open((0, g.Um)().suggestionsSettings)
                    })))), q.none, (() => !1), r.O.getActiveItemWithAlert, Ee, Ce),
                    Fe = new p.C(Te, se, e.alertsReader.getById, re),
                    Pe = new h.o(e.alertsList, e.alertsReader, e.positionManager, e.alertsService, t, Ce, me, r.O.getActiveItemWithAlert, Q.h.create(re.experiments).view(), ce),
                    Re = new P.o((() => z.right(void 0))),
                    Ve = (0, X.hp)(Ce, Pe, Q.h.create(16), Re, t, pe),
                    Oe = new I.m(t, Ce, Pe, e.alertsReader, r.O.getActiveItemWithAlert),
                    Ne = new _.y(Q.h.create([]), d.I.createFactory(), 3, 5e3),
                    De = [M.dv.changeAlertEffect(Ce, Te, _e, r.O.getActiveItemWithAlert, e.alertsReader, q.some(Ve), Ae, pe.getLogger("CardsViewModelEffects.changeAlertEffect")), ...Te.getApplicatorEffects(), R.R7(Ce, Re, Ee, (0, a.unsafeCoerce)(Te.actionEvents), {
                        cardsAroundActive: 25,
                        cardsBeyondViewport: 25
                    }), J.A7(Oe, Ce), (0, X.k9)(Ce, Ve, Q.h.create(q.none), r.O.getActiveAlignableItem, Ee), R.XU(Ce, Re, Ee), Z.EQ.focusMarkByActiveAlert(Ce, Pe, e.alertsReader, r.O.getActiveFocusableItem, pe.getLogger("MarksEffects.focusMarkByActiveAlert")), Z.EQ.highlightMarkByHighlightedCard(Te, Ce, Pe, e.alertsReader, Ee, pe.getLogger("MarksEffects.highlightMarkByHighlightedCard")), J.uo(ie, Ne), M.dv.createSendActiveAlertFeedbacksEffect(Ce, r.O.getActiveItemWithAlert, e.alertsService, e.alertsReader, pe.getLogger("MarksEffects.highlightMarkByHighlightedCard")), J.Ng(ve, Ce, Ee), J.CH(ve, Ce), Le.lensChangeEffect],
                    Ue = "none" !== le.priorityLens.kind ? Le.lensMode.view(G.K.isPriorityMode).view((0, Y.RN)(b.R.SpecialId.Priority, b.R.SpecialId.AllAlerts)) : Q.h.create(b.R.SpecialId.AllAlerts),
                    Be = (0, T.VC)(ke, Ae, Ue, r.O.getActiveItemWithAlert, Ee),
                    He = Q.h.create(!0),
                    je = T.Py.getStateTransformer(T.Py.getDefaultBehavior(r.O.getActiveItemWithAlert, Ee), Be, e.alertsReader, Ee, (e => He.get() && "text" !== e.alertSource), a.constVoid, Ue),
                    Ge = U.v.Items.getItemsPositionsUpdateTransformer(Ee),
                    Ze = (0, a.flow)(je, K.chainLeft(Ge)),
                    We = new B.l(Ce, ke, e.alertsReader, e.alertsService, De, r.O.getActiveItemWithAlert, Ze),
                    qe = new W.L(Ce, e.sessionModel, a.constVoid, Ee, q.none, q.none, (e => D.nL.isWithPriorityList(e) && U.v.WithPriority.onlyNonPriorityAlertsLeft(e.currentLens, r.O.priorityTest, Ee)), U.v.WithPriority.isInSuccess(r.O.priorityTest, Ee), Q.h.create(!1));
                return {
                    lensState: Ce,
                    lensStateManager: We,
                    cardsViewModel: Te,
                    marksViewModel: Pe,
                    navigationViewModel: Le,
                    successLensViewModel: qe,
                    alignmentViewModel: Ve,
                    lensPreviewViewModel: ve,
                    cardsListScrollManager: Re,
                    notificationManager: Ne,
                    upgradeViewModel: Me,
                    modalManager: xe,
                    capabilities: Ee,
                    dispose: () => {
                        Pe.dispose(), Ie.unsubscribe(), ge.unsubscribe(), Fe.dispose()
                    }
                }
            }
        },
        11755: (e, t, i) => {
            i.d(t, {
                t: () => v
            });
            var a = i(71249),
                n = i(57050),
                s = i(40327),
                r = i(45614),
                o = i(32426),
                l = i(66896),
                c = i(2291),
                d = i(64992),
                p = i(8125),
                h = i(22232),
                m = i(5114),
                u = i(90329),
                g = i(38983);
            class v {
                constructor(e, t) {
                    this._lensesList = e, this._alertsFilterService = t, this.getLens = (0, p.HP)((function(e) {
                        switch (e) {
                            case l.R.SpecialId.AllAlerts:
                                return this._lensesList.view(f(l.R.Info.allAlerts, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.AllAlerts)));
                            case l.R.SpecialId.Priority:
                                return this._lensesList.view(f(l.R.Info.priority, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.Priority)));
                            case l.R.SpecialId.PredictionTakeaways:
                                return this._lensesList.view(f(l.R.Info.predictionTakeaways, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.PredictionTakeaways)));
                            case l.R.SpecialId.PredictionEmogenie:
                                return this._lensesList.view(f(l.R.Info.predictionEmogenie, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.PredictionEmogenie)));
                            case l.R.SpecialId.RealTimeProofit:
                                return this._lensesList.view(f(l.R.Info.realTimeProofit, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.RealTimeProofit)));
                            case l.R.SpecialId.Plagiarism:
                                return this._lensesList.view(this._getPlagiarismLens);
                            case l.R.SpecialId.Premium:
                                return this._lensesList.view(f(l.R.Info.premium, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(l.R.SpecialId.Premium)));
                            case l.R.SpecialId.Correctness:
                            case l.R.SpecialId.Clarity:
                            case l.R.SpecialId.Engagement:
                            case l.R.SpecialId.Delivery:
                            case l.R.SpecialId.Vox:
                            case l.R.SpecialId.CorrectnessPriority:
                            case l.R.SpecialId.ClarityPriority:
                            case l.R.SpecialId.EngagementPriority:
                            case l.R.SpecialId.DeliveryPriority:
                            case l.R.SpecialId.VoxPriority:
                                return this._lensesList.view(f(l.R.Info.createOutcome(e), l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(e)));
                            case l.R.SpecialId.RealTimeProofit:
                                return this._lensesList.view(f(l.R.Info.realTimeProofit, l.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(e)));
                            default:
                                return (0, h.vE)(e)
                        }
                    })), this._outcomes = [l.R.SpecialId.Correctness, l.R.SpecialId.Clarity, l.R.SpecialId.Engagement, l.R.SpecialId.Delivery], this._previews = (0, p.HP)((() => r.fromFoldableMap((0, o.getFirstSemigroup)(), a.array)(this._outcomes, (e => [e, this._getPreview(e)])))), this._isDocumentEmpty = g.h.create(!1), this._isFree = g.h.create(!1), this._outcomeStatusMask = g.h.combine(this._isDocumentEmpty, this._isFree, ((e, t) => {
                        let i = 0;
                        return e && (i |= d.x.IsDocumentEmpty), t && (i |= d.x.IsFreeUser), i
                    })), this._getPlagiarismLens = (0, n.flow)(f(l.R.Info.plagiarism, {
                        ...l.R.Meta.group.empty,
                        percentile: c.T.MAX
                    }, this._alertsFilterService.getLensesFilter(l.R.SpecialId.Plagiarism)), l.R.WithAlerts.modifyMeta((e => ({
                        ...e,
                        percentile: c.T.groupSum.concat(c.T.MAX, c.T.groupSum.inverse(e.percentile))
                    }))))
                }
                findLens(e) {
                    return (0, s.pipe)(m.fromNullable([this.getLens(l.R.SpecialId.AllAlerts), this.getLens(l.R.SpecialId.Premium)].find((t => e(t.get())))), m.map((e => e.get().id)))
                }
                _getPreview(e) {
                    return {
                        ...l.R.Info.base,
                        logo: m.none,
                        ...this._getOutcomeButtonData(e)
                    }
                }
                get lensPreviews() {
                    return this._previews()
                }
                _getOutcomeButtonData(e) {
                    const t = this.getLens(e),
                        i = t.get().title,
                        a = this._isFree.view((t => t && (e === l.R.SpecialId.Engagement || e === l.R.SpecialId.Delivery))),
                        n = g.h.combine(t.view("count").view((e => 0 === e)), a, ((e, t) => e && !t)),
                        {
                            description: s,
                            stateMessage: r
                        } = (0, d.O)(e),
                        o = g.h.combine(this._isDocumentEmpty, n, t.view("percentile"), ((e, t, i) => e ? c.T.MIN : t ? c.T.MAX : i)).view(c.g.fromRatio),
                        p = g.h.create(!1),
                        h = g.h.combine(t, o, this._outcomeStatusMask, p, r);
                    return {
                        id: e,
                        title: i,
                        description: s,
                        status: h,
                        progress: o,
                        isUnavailable: a
                    }
                }
                get nonEmptyLensId() {
                    return (0, s.pipe)(m.fromNullable([this.getLens(l.R.SpecialId.AllAlerts), this.getLens(l.R.SpecialId.Premium)].find((e => e.get().count > 0))), m.map((e => e.get().id)))
                }
            }

            function f(e, t, i) {
                return a => {
                    return new l.R.LensImpl(e, (n = e.id, r = t, e => (0, s.pipe)(u.P5(l.R.Id.ord)(n, e), m.getOrElse((() => r))))(a), i);
                    var n, r
                }
            }
        },
        62346: (e, t, i) => {
            i.d(t, {
                o: () => Z
            });
            var a, n, s = i(57050),
                r = i(40327),
                o = i(33381),
                l = i(95572),
                c = i(56983),
                d = i(95384),
                p = i(5817),
                h = i(51374),
                m = i(66896),
                u = i(40018),
                g = i(4390),
                v = i(45586),
                f = i(98403),
                w = i(59368),
                _ = i(16746),
                b = i(17594),
                y = i(35416),
                E = i(93494),
                k = i(74364),
                S = i(76974),
                C = i(32952),
                I = i(16118),
                A = i(77176),
                M = i(85985),
                x = i(40151),
                L = i(24209),
                T = i(60797),
                F = i(41398),
                P = i(24713),
                R = i(28043),
                V = i(5114),
                O = i(8125),
                N = i(92843),
                D = i(95195),
                U = i(83078),
                B = i(55415),
                H = i(22232),
                j = i(38983),
                G = i(81531);
            ! function(e) {
                e.create = (e, t, i, a, n, s, r) => (o, l) => {
                    const p = h.x.isEnclosingView(o());
                    return d.sO.Change.getCreateAction({
                        range: o,
                        capiAlertId: e,
                        visualState: l.to.visualState === w.Bd.highlighted ? {
                            type: d.sO.Change.VisualState.Type.highlighted,
                            source: t()
                        } : {
                            type: d.sO.Change.VisualState.Type.visible
                        },
                        highlightColor: i,
                        highlightDisplayFormat: p ? c.jk.enclosing : r() && a === c.jk.underlineAndBackground ? c.jk.underline : a,
                        highlightDisappearOnHoverDelay: n,
                        order: s
                    })
                }, e.update = (e, t, i, a, n, s, r) => (o, l) => {
                    const p = h.x.isEnclosingView(o());
                    return d.sO.Change.getUpdateAction({
                        range: o,
                        capiAlertId: e,
                        visualState: l.to.visualState === w.Bd.highlighted ? {
                            type: d.sO.Change.VisualState.Type.highlighted,
                            source: t()
                        } : {
                            type: d.sO.Change.VisualState.Type.visible
                        },
                        highlightColor: i,
                        highlightDisplayFormat: p ? c.jk.enclosing : r() && a === c.jk.underlineAndBackground ? c.jk.underline : a,
                        highlightDisappearOnHoverDelay: n,
                        order: s
                    })
                }, e.remove = e => t => d.sO.Change.getRemoveAction({
                    range: t,
                    capiAlertId: e
                })
            }(a || (a = {}));
            class Z {
                constructor(e, t, i, c, p, f, y, E, L, T = S.of(void 0), F = !1) {
                    this._alertList = e, this._alertsReader = t, this._positionManager = i, this._alertsService = c, this._ded = p, this._lensState = f, this._alertsFilterService = y, this._getActiveItemWithAlert = E, this._experiments = L, this._readyObs = T, this._emulateAppliedAlertAnimation = F, this._highlightedAlert = V.none, this._focusedAlert = V.none, this._marksMap = new Map, this._subs = new v.w.Keeper, this.events = new C.xQ, this._alertStateDiff = this._alertList.state.pipe(I.G(), A.U((([e, t]) => g.p.diff(e, t))), M.h((0, O.ff)(N.v.isEmpty))), this._alertsFilter = j.h.create(s.constFalse), this._filteredAlerts = j.h.create(V.none), this._ready = !1, this._log = G.Monitoring.Logging.getLogger("marks_view_model"), this.getMarkByAlert = e => (0, r.pipe)(this._marksMap.get(e.alert.id), V.fromNullable, V.chain((t => t.markByIndex(e.highlightIndex)))), this.getAlertByMark = e => (0, r.pipe)(this._alertsReader.getRegistered(h.P.fromRangeIdToAlertId(e.id)), V.chain((t => (0, r.pipe)(k.$A.getHighlightIndex(t, e.range()), D.map((e => ({
                        alert: b.$.fromModel(t),
                        highlightIndex: e
                    }))), V.fromEither)))), this.ensureAlertHighlightInViewport = (e, t, i) => (0, r.pipe)(this.getMarkByAlert(e), V.fold((() => x.E), (e => this._ded.scrollToMark(e, {
                        animate: i,
                        paddingTop: t
                    })))), this._createMA = e => {
                        const t = U.unsafeGet(e.rawId),
                            {
                                impact: i,
                                cardLayout: {
                                    outcome: s
                                },
                                extra_properties: {
                                    smart_phrases_intent: c
                                }
                            } = e.toRawAlert(),
                            p = o.M.getHighlightColor(l.DD.createOutcomeType(s), "critical" === i ? l.Hg.critical : l.Hg.advanced, Boolean(c), this._experiments.get()),
                            u = o.M.getHighlightDisplayFormat(Boolean(c), this._experiments.get()),
                            g = o.M.getHighlightDisappearOnHoverDelay(Boolean(c), this._experiments.get()),
                            v = m.R.getSortOrder(e.lensType),
                            f = () => e.getHighlightRanges().some(h.x.isEnclosingView),
                            y = new _.v((t => (0, r.pipe)(this._alertsReader.getById(e.id), V.alt((() => (t && this._log.warn("Could not find alert for provided MarkAlert", {
                                alert: e,
                                source: t
                            }), V.some(e)))), V.map(b.$.fromModel), U.unsafeGet)), this._alertsService, this._alertsService, (e => this._ded.changeMarks(e)), a.create(t, (() => d.sO.Change.VisualState.Source.api), p, u, g, v, f), a.update(t, (() => n.getAlertSource(e, this._lensState.get(), this._getActiveItemWithAlert)), p, u, g, v, f), a.remove(t), (t => {
                                t.to.visualState === w.Bd.applied && (this.events.next({
                                    type: k.tn.Type.AppliedAlertAnimationFinished,
                                    alert: e
                                }), this._handleRemovedAlerts([e]).forEach((e => e.apply())))
                            }));
                        return this._marksMap.set(e.id, y), y
                    }, this._handleRemovedAlerts = e => e.map((({
                        id: e
                    }) => {
                        const t = this._marksMap.get(e);
                        return this._marksMap.delete(e), t.scheduleApply(w.Bd.disposed), t
                    })), this._handleAlertUpdate = e => e.map((e => u.bZ.isRegistered(e) && !u.bZ.isMuted(e) ? (0, r.pipe)(V.fromNullable(this._marksMap.get(e.id)), V.fold((() => this._alertsFilter.get()(e) ? this._createMA(e) : null), (e => (e.scheduleUpdate(), w.Oe.isOrWillBe(w.Bd.success)(e) && e.scheduleApply(w.Bd.highlighted), e)))) : (0, r.pipe)(V.fromNullable(this._marksMap.get(e.id)), V.fold((() => {}), (t => (e.allowUpdate && u.bZ.isCapiDone(e) && u.bZ.isRated(e) && w.Oe.isOrWillBe(w.Bd.highlighted)(t) ? (t.scheduleUpdate(), t.scheduleApply(w.Bd.success)) : (t.scheduleApply(w.Bd.disposed), this._marksMap.delete(t.alert.id)), t)))))).filter((e => Boolean(e))), this._subs.push(this._readyObs.subscribe((() => {
                        this._subs.push(this._listenAlertsUpdates(), this._listenRangesUpdates(), this._listenFilterChange(), this._listenFilteredAlerts()), this._ready = !0
                    })))
                }
                focusAlertHighlight(e) {
                    return this._ready ? (0, r.pipe)(this._marksMap.get(e.alert.id), V.fromNullable, V.map((t => {
                        this._focusedAlert = V.some(e.alert.id), t.scheduleApply(w.Bd.highlighted), t.scheduleForceUpdate(), t.apply()
                    })), D.fromOption((() => new Error("Unknown alert"))), D.map((() => ({
                        dispose: () => {
                            V.exists((t => t === e.alert.id))(this._focusedAlert) && (this._highlightedAlert = V.none), (0, r.pipe)(this._marksMap.get(e.alert.id), V.fromNullable, V.filter((() => !(0, r.pipe)(this._highlightedAlert, V.exists((t => t === e.alert.id))))), V.map((e => {
                                e.scheduleApply(w.Bd.visible), e.apply()
                            })))
                        }
                    })))) : D.left(new Error("marks view model is not ready yet"))
                }
                highlightAlertHighlight(e) {
                    return this._ready ? (0, r.pipe)(this._marksMap.get(e.id), V.fromNullable, V.map((t => {
                        this._highlightedAlert = V.some(e.id), t.scheduleApply(w.Bd.highlighted), t.apply()
                    })), D.fromOption((() => new Error("Unknwn alert"))), D.map((() => ({
                        dispose: () => {
                            V.exists((t => t === e.id))(this._highlightedAlert) && (this._highlightedAlert = V.none), (0, r.pipe)(this._marksMap.get(e.id), V.fromNullable, V.filter((() => !(0, r.pipe)(this._focusedAlert, V.exists((t => t === e.id))))), V.map((e => {
                                e.scheduleApply(w.Bd.visible), e.apply()
                            })))
                        }
                    })))) : D.left(new Error("marks view model is not ready yet"))
                }
                moveCursorToHighlight(e, t) {
                    return this._ready ? (0, r.pipe)(this._marksMap.get(e.alert.id), V.fromNullable, V.chain((t => t.markByIndex(e.highlightIndex))), V.chain((e => V.fromEither(e.range()))), V.fold((() => D.left(new Error("Cannot find mark for given range"))), (e => {
                        const {
                            index: i,
                            length: a
                        } = this._ded.getCursor();
                        if (0 === a && (i < e.start || i > e.end)) {
                            const i = Math.min(e[t], this._ded.getLastPossibleCursorPosition());
                            return (0, r.pipe)(this._ded.setCursor(i, 0), D.orElse(D.left))
                        }
                        return D.right(void 0)
                    }))) : D.left(new Error("marks view model is not ready yet"))
                }
                dispose() {
                    this._subs.dispose()
                }
                _listenAlertsUpdates() {
                    const e = e => ({
                        activeAlerts: [],
                        updatedAlerts: [],
                        removedAlerts: [],
                        acceptedAlerts: [],
                        hiddenMarkAlerts: [],
                        ...e
                    });
                    return L.T(this._filteredAlerts.pipe(T.cp((({
                        visible: t,
                        hidden: i
                    }) => S.of(e({
                        activeAlerts: B.toArray(t),
                        removedAlerts: B.toArray(i)
                    }))))), this._alertStateDiff.pipe(F.M(this._alertsFilter), A.U((([t, i]) => (0, r.pipe)(t, N.v.reduce(e({}), ((e, t) => (this._marksMap.has(t.alert.id) && e.removedAlerts.push(t.alert), e)), ((e, t, i) => (u.bZ.isAccepted(i.alert) ? e.acceptedAlerts.push(i.alert) : e.updatedAlerts.push(i.alert), e)), ((e, t) => (i(t.alert) && e.activeAlerts.push(t.alert), e)))))))).pipe(A.U((({
                        activeAlerts: e,
                        removedAlerts: t,
                        updatedAlerts: i,
                        acceptedAlerts: a
                    }) => {
                        let n = [];
                        return n = n.concat(e.filter((0, O.W9)((0, O.ff)(u.bZ.isPremium), (e => V.isSome(e.rawId)))).map((e => {
                            const t = this._marksMap.get(e.id);
                            return void 0 !== t ? (t.scheduleForceUpdate(), t) : this._createMA(e)
                        }))), this._emulateAppliedAlertAnimation && setTimeout((() => {
                            a.forEach((e => {
                                this.events.next({
                                    type: k.tn.Type.AppliedAlertAnimationFinished,
                                    alert: e
                                })
                            }))
                        }), 3 * (0, p.Xd)(20)), n = n.concat(this._handleRemovedAlerts(t.concat(a).filter((e => this._marksMap.has(e.id))))), n = n.concat(this._handleAlertUpdate(i)), n
                    }))).subscribe((e => {
                        if (e.length > 0) {
                            const [t, ...i] = e;
                            t.applyWith(i)
                        }
                    }))
                }
                _listenRangesUpdates() {
                    return this._positionManager.rangeChanged.pipe(P.j("changed"), A.U((e => e.filter((e => h.P.is(e) && h.x.isVisible(e) && this._marksMap.has(e.meta.alertId))))), M.h((e => e.length > 0))).subscribe((e => {
                        const t = Array.from(e.values()).filter((e => V.isSome(this._alertsReader.getById(e.meta.alertId)))).reduce(((e, t) => ((0, r.pipe)(this._alertsReader.getRegistered(t.meta.alertId), V.chain((e => V.fromNullable(this._marksMap.get(e.id)))), V.fold(O.ZT, (t => {
                            t.scheduleForceUpdate(), e.push(t)
                        }))), e)), []);
                        if (t.length > 0) {
                            const [e, ...i] = t;
                            e.applyWith(i)
                        }
                    }))
                }
                _listenFilterChange() {
                    return this._lensState.pipe(M.h((e => e.currentLens.id !== m.R.SpecialId.Premium)), R.x(((e, t) => !(e.currentLens.id !== t.currentLens.id || y.nL.isWithPriorityList(e) && y.nL.isWithPriorityList(t) && E.v.WithPriority.isNonPriorityListOpened(e.currentLens) !== E.v.WithPriority.isNonPriorityListOpened(t.currentLens) || t.currentLens.id === m.R.SpecialId.PredictionTakeaways))), R.x(), A.U((e => this._alertsFilterService.alertVisibleInText(e.currentLens.id, E.v.WithPriority.nonPriorityAlertsVisible(e))))).subscribe(f.wW(this._alertsFilter))
                }
                _listenFilteredAlerts() {
                    return this._alertsFilter.pipe(F.M(this._alertList.state), A.U((([e, t]) => (0, r.pipe)(t, g.p.reduce({
                        visible: {},
                        hidden: {}
                    }, ((t, i) => (e(i.alert) && u.bZ.isRegistered(i.alert) ? t.visible[i.alert.id] = i.alert : t.hidden[i.alert.id] = i.alert, t))), (e => V.some(e)))))).subscribe(f.wW(this._filteredAlerts))
                }
            }! function(e) {
                e.toSidebarFluidMarkSource = e => {
                    switch (e) {
                        case u.l$.text:
                        case y.h8.forceText:
                            return d.sO.Change.VisualState.Source.text;
                        case u.l$.sidebar:
                        case y.h8.forceSidebar:
                            return d.sO.Change.VisualState.Source.sidebar;
                        case u.l$.api:
                            return d.sO.Change.VisualState.Source.api;
                        default:
                            return (0, H.vE)(e)
                    }
                }, e.getAlertSource = (t, i, a) => y.nL.hasCards(i) ? (0, r.pipe)(a(i.currentLens), V.fold((() => d.sO.Change.VisualState.Source.api), (a => a.activeAlert.id === t.id ? e.toSidebarFluidMarkSource(i.alertSource) : d.sO.Change.VisualState.Source.api))) : d.sO.Change.VisualState.Source.api
            }(n || (n = {}))
        },
        71962: (e, t, i) => {
            i.d(t, {
                o: () => x
            });
            var a = i(57050),
                n = i(40327),
                s = i(98403),
                r = i(18625),
                o = i(57091),
                l = i(66310),
                c = i(76974),
                d = i(13444),
                p = i(93508),
                h = i(48403),
                m = i(95343),
                u = i(25970),
                g = i(5114),
                v = i(95195),
                f = i(38983),
                w = i(81531);
            class _ {
                constructor(e, t) {
                    this._documentModel = e, this._modalOperations = t, this.reportViewModel = g.none, this.state = r.P((() => s.GQ((() => this._documentModel.calculateStats())))).pipe(o.a(this._documentModel.checkingState, ((e, t) => (0, n.pipe)(e, g.filter((() => "idle" === t))))), l.w(g.fold((() => c.of({
                        type: u.g.State.Type.LOADING
                    }).pipe(d.g(150))), v.fold((e => (w.Monitoring.Logging.getLogger("editor.toolbar").error("Error on requesting document stats", e), this.onModalClose(), c.of({
                        type: u.g.State.Type.ERROR
                    }))), (e => f.h.combine(this._documentModel.score, this._documentModel.counters, this._documentModel.documentLength.view("trimmed"), ((t, i, a) => (0, n.pipe)(t, g.fold((() => ({
                        type: u.g.State.Type.SHORT_CONTENT
                    })), (t => ({
                        type: u.g.State.Type.READY,
                        documentIsEmpty: 0 === a,
                        score: t,
                        counters: i,
                        stats: e
                    })))))))))), p.O({
                        type: u.g.State.Type.EMPTY
                    }), h._(1), m.x()), this.onModalClose = () => {
                        this._modalOperations.onClose()
                    }
                }
            }
            var b = i(73582),
                y = i(73353),
                E = i(81301),
                k = i(54286),
                S = i(22621),
                C = i(39321),
                I = i(77176),
                A = i(22232),
                M = i(31881);
            class x {
                constructor(e, t, i) {
                    this._documentModel = e, this._upgradeViewModel = t, this._isPremiumUser = i
                }
                load(e) {
                    switch (e.type) {
                        case E.dC.SetGoals:
                            return this._loadSetGoals(e.source);
                        case E.dC.Performance:
                            return this._loadPerformance();
                        default:
                            return (0, A.vE)(e)
                    }
                }
                _loadSetGoals(e) {
                    return Promise.resolve((t => {
                        const i = {
                                demoMode: !1,
                                isRedesign: !1,
                                isFree: !this._isPremiumUser,
                                defaultAudience: "knowledgeable"
                            },
                            s = k._.create(this._documentModel.context.get(), (0, n.pipe)(this._documentModel.defaultContext.get(), g.fold((() => y.R$.defaultContextFallback), a.identity)), i, !1),
                            r = f.h.combine(s.showSetGoalsLoader, s.localContext, ((t, a) => ({
                                blocks: s.blocks,
                                context: a,
                                showOnLoad: t,
                                features: i,
                                source: e
                            }))),
                            o = M.Z.fromSideEffect((e => {
                                switch (e.kind) {
                                    case S.R.ActionsKind.open:
                                        break;
                                    case S.R.ActionsKind.upgrade:
                                        this._upgradeViewModel.openUpgradeUrl(b.L.Place.gdocsGoals);
                                        break;
                                    case S.R.ActionsKind.close:
                                        t.onClose(), this._documentModel.updateContext(e.context);
                                        break;
                                    case S.R.ActionsKind.reset:
                                        s.localContext.set(y.R$.unset);
                                        break;
                                    case S.R.ActionsKind.showOnLoadChanged:
                                        s.showSetGoalsLoader.set(e.value);
                                        break;
                                    default:
                                        (0, A.vE)(e)
                                }
                            }), r);
                        return {
                            instance: {
                                type: E.dC.SetGoals,
                                source: e
                            },
                            component: M.UI.mount(S.R.Modal, o)
                        }
                    }))
                }
                _loadPerformance() {
                    return Promise.resolve((e => {
                        const t = new _(this._documentModel, e),
                            i = M.UI.Knot.make(C.q.ModalView, {
                                downloadButton: M.UI.Node.empty
                            }),
                            a = M.Z.fromSideEffect((t => {
                                switch (t.action.kind) {
                                    case C.q.ActionsKind.close:
                                        e.onClose();
                                        break;
                                    default:
                                        (0, A.vE)(t.action.kind)
                                }
                            }), t.state.pipe(I.U((e => ({
                                root: e
                            })))));
                        return {
                            instance: {
                                type: E.dC.Performance
                            },
                            component: M.UI.mount(i, a)
                        }
                    }))
                }
            }
        },
        37290: (e, t, i) => {
            if (i.d(t, {
                    $: () => b
                }), 75 == i.j) var a = i(57050);
            if (75 == i.j) var n = i(77394);
            if (75 == i.j) var s = i(81301);
            if (75 == i.j) var r = i(40018);
            if (75 == i.j) var o = i(66896);
            if (75 == i.j) var l = i(32952);
            if (75 == i.j) var c = i(45586);
            if (75 == i.j) var d = i(41398);
            if (75 == i.j) var p = i(77176);
            if (75 == i.j) var h = i(85985);
            if (75 == i.j) var m = i(66310);
            if (75 == i.j) var u = i(40151);
            if (75 == i.j) var g = i(35416);
            if (75 == i.j) var v = i(43637);
            if (75 == i.j) var f = i(5114);
            if (75 == i.j) var w = i(22232);
            if (75 == i.j) var _ = i(38983);
            class b {
                constructor(e, t, i, n, s, m, u, w) {
                    this._state = e, this._lensPreviewVM = t, this._sidebarEvents = i, this._modalManager = n, this._ded = s, this._features = m, this._gnar = u, this._defaultLensMode = w, this.isUphooksRedesign = !1, this.popover = _.h.create(f.none), this.events = new l.xQ, this.activeLensId = this._state.view("currentLens", "id"), this.documentActions = _.h.create({
                        proofit: v.Bo.proofitDisabled(v.TV.NotAvailable),
                        plagiarism: v.Bo.plagiarismDisabled(v.eh.NotAvailable)
                    }), this.showMuteControl = _.h.create(!1), this._subs = new c.w.Keeper, this._lensSwitch = new l.xQ, this.lensMode = _.h.create(this._defaultLensMode), this.lensTitleType = "none" !== this._features.priorityLens.kind ? v.Bo.LensTitleType.priority : v.Bo.LensTitleType.default, this.lensChangeEffect = {
                        id: "lensChangeEffect",
                        when: a.constTrue,
                        what: g.nL.Effect.SwitchLens.create(this._lensSwitch.pipe(d.M(this._state.pipe(p.U((e => e.currentLens.id)))), h.h((([{
                            lensId: e
                        }, t]) => e !== t)), p.U((([{
                            lensId: e,
                            focusFirst: t
                        }]) => ({
                            lensId: e,
                            alertSource: r.l$.sidebar,
                            options: {
                                order: "lensOrder",
                                toFocus: t ? g.nL.Effect.FocusBehavior.focusFirst : g.nL.Effect.FocusBehavior.noFocus
                            }
                        })))))
                    }, this._listenNavigationEvent();
                    const b = [o.R.SpecialId.Correctness, o.R.SpecialId.Clarity, o.R.SpecialId.Engagement, o.R.SpecialId.Delivery].reduce(((e, t) => (e[t] = this._lensPreviewVM.lensPreviews[t], e)), {});
                    this.lensPreviews = _.h.create(b)
                }
                dispose() {
                    this._subs.dispose()
                }
                _listenNavigationEvent() {
                    this._subs.push(this.events.pipe(m.w((e => {
                        switch (e.type) {
                            case "toggleSidebar":
                                return this._sidebarEvents.next({
                                    kind: n.R.Close
                                }), u.E;
                            case "switchToLens":
                                if ("none" !== this._features.priorityLens.kind) {
                                    const t = e.id === o.R.SpecialId.Priority ? "priority" : "all";
                                    this._sidebarEvents.next({
                                        kind: n.R.ChangeLens,
                                        selectedLens: t
                                    }), this._lensSwitch.next({
                                        lensId: e.id,
                                        focusFirst: e.focusFirst
                                    }), this._gnar.gdocsSidebarChangeLensButtonClick(t, this._lensPreviewVM.getLens(o.R.SpecialId.AllAlerts).get().count, this._ded.getTextLength(), this._lensPreviewVM.getLens(o.R.SpecialId.Priority).get().count, "dropdown" === this._features.priorityLens.kind ? "dropdown" : "priorityToggle")
                                } else this._gnar.gdocsSidebarOpenLensButtonClick(e.id);
                                return u.E;
                            case "setGoals":
                                return this._modalManager.show(s.Iy.setGoals("user"));
                            case "performance":
                                return this._modalManager.show(s.Iy.performance);
                            case "switchToCritical":
                            case "switchToAdvanced":
                            case "preferences":
                            case "switchToAll":
                                return u.E;
                            default:
                                return (0, w.vE)(e)
                        }
                    }))).subscribe())
                }
            }
        },
        73582: (e, t, i) => {
            i.d(t, {
                L: () => a,
                x: () => b
            });
            var a, n = i(40327),
                s = i(65421),
                r = i(39354),
                o = i(66896),
                l = i(40018),
                c = i(6782),
                d = i(4390),
                p = i(2844),
                h = i(77176),
                m = i(98403),
                u = i(5114),
                g = i(8125),
                v = i(95574),
                f = i(95195),
                w = i(38983),
                _ = i(81531);
            ! function(e) {
                let t;
                ! function(e) {
                    e.gdocsSidebarCardList = "gdocsSidebarCardList", e.gdocsSidebarSuccessView = "gdocsSidebarSuccessView", e.gdocsGoals = "gdocsGoals", e.assistantCardList = "assistantCardList", e.extensionSettingsAssistant = "extensionSettingsAssistant"
                }(t = e.Place || (e.Place = {}))
            }(a || (a = {}));
            class b {
                constructor(e, t, i) {
                    this._alertsList = e, this._lensState = t, this._maxAlertCategories = i, this._log = _.Monitoring.Logging.getLogger("UpgradeViewModel"), this._advancedAlerts = w.h.create([]), this.advancedAlerts = this._advancedAlerts.view((e => e.length > 0 ? u.some({
                        count: e.length,
                        alerts: () => this._formatLiteAlerts(b._getGroupedLiteAlerts(e))
                    }) : u.none)), this._formatLiteAlerts = e => {
                        const t = e.slice(0, this._maxAlertCategories),
                            i = e.slice(this._maxAlertCategories).map((e => e.count)).reduce(g.Sm, 0);
                        return i > 0 ? [...t, {
                            group: "",
                            category: "",
                            categoryHuman: "more...",
                            count: i
                        }] : t
                    }, p.aj([this._lensState.view("currentLens").view("id").view(o.R.isPriority).view((e => e ? e => l.bZ.isRegistered(e) && l.bZ.isPremium(e) && l.bZ.isPriority(e) : e => l.bZ.isRegistered(e) && l.bZ.isPremium(e))), this._alertsList.state]).pipe(h.U((([e, t]) => d.p.reduce([], ((t, {
                        alert: i
                    }) => (e(i) && t.push(i), t)))(t)))).subscribe(m.wW(this._advancedAlerts))
                }
                openUpgradeUrl(e) {
                    (0, n.pipe)(v.tryCatchError((() => {
                        (0, r.P4)().openSubscriptionDialog({
                            currentAlerts: this._getCapiAlerts(),
                            isAnonymousUser: !1,
                            showPlanComparison: !0,
                            isFromEmail: !1,
                            forceUtmCampaign: e
                        })
                    })), f.getOrElse((e => this._log.fatal("unexpected error on open upgrade page", e))))
                }
                _getCapiAlerts() {
                    return this._advancedAlerts.get().map((e => (0, s.fe)(b._toRawAlertWithPossibleWrongId(e), "sidebar")))
                }
                static _getGroupedLiteAlerts(e) {
                    return c.Q.group(e.map((e => e.toLiteAlert())))
                }
                static _toRawAlertWithPossibleWrongId(e) {
                    return {
                        ...e.toRawAlert(),
                        id: (0, n.pipe)(e.rawId, u.getOrElse((() => e.id)))
                    }
                }
            }
        },
        86705: (e, t, i) => {
            i.d(t, {
                v: () => s
            });
            var a = i(27378),
                n = i(80895);
            const s = ({
                browser: e,
                className: t
            }) => "safari" !== e ? a.createElement(n.C, {
                title: "BETA",
                kind: "success",
                className: t
            }) : null
        },
        95888: (e, t, i) => {
            i.d(t, {
                J: () => l
            });
            var a = i(27378),
                n = i(53112);
            const s = ({
                color: e = n.Z.neutral0
            }) => a.createElement("svg", {
                width: "16",
                height: "13",
                viewBox: "0 0 16 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, a.createElement("g", {
                filter: "url(#filter0_d)"
            }, a.createElement("path", {
                d: "M3 5L6.5 8.5L13 2",
                stroke: e,
                strokeWidth: "2"
            })), a.createElement("defs", null, a.createElement("filter", {
                id: "filter0_d",
                x: "0.292892",
                y: "0.292847",
                width: "15.4142",
                height: "12.6213",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, a.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), a.createElement("feOffset", {
                dy: "1"
            }), a.createElement("feGaussianBlur", {
                stdDeviation: "1"
            }), a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.211765 0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0.5 0"
            }), a.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), a.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))));
            var r = i(12187),
                o = i(53358);
            const l = ({
                onChange: e = (() => null),
                labelId: t,
                className: i,
                children: n
            }) => {
                const [l, c] = a.useState(!1);
                a.useEffect((() => {
                    e(l)
                }), [l]);
                const d = e => {
                    e.preventDefault(), e.stopPropagation(), c(!l)
                };
                return a.createElement("div", {
                    "data-grammarly-part": "ui-kit-checkbox",
                    className: i
                }, a.createElement("div", {
                    className: o.checkboxContainer
                }, a.createElement("div", Object.assign({}, (0, r.Sh)(o.checkbox, l ? o.checkboxChecked : null), {
                    role: "checkbox",
                    "aria-checked": l,
                    tabIndex: 0,
                    "aria-labelledby": t,
                    onKeyDown: e => {
                        " " === e.key && d(e)
                    },
                    onClick: d
                }), l ? a.createElement(s, null) : null), a.createElement("label", {
                    id: t,
                    onClick: d
                }, n)))
            }
        },
        47422: (e, t, i) => {
            i.d(t, {
                z: () => l
            });
            var a = i(27378),
                n = i(84488),
                s = i(68370),
                r = i(51897),
                o = i.n(r);
            const l = ({
                placeholder: e,
                onChange: t,
                ariaLabel: i,
                className: r
            }) => {
                const [l, c] = a.useState("");
                return a.useEffect((() => {
                    t(l)
                }), [l]), a.createElement(n.G, {
                    "data-grammarly-part": "ui-kit-textbox",
                    className: r,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, a.createElement(s.b, null, o().__css), a.createElement("div", {
                    role: "textbox",
                    className: o().textBox,
                    contentEditable: !0,
                    onInput: e => c(e.target.innerText),
                    "data-placeholder": e,
                    "aria-placeholder": e,
                    "aria-label": i
                }))
            }
        },
        81108: (e, t, i) => {
            i.d(t, {
                Q: () => o
            });
            var a = i(27378),
                n = i(90361),
                s = i(10247);
            const r = e => {
                    if (e.reason === s.rS.NO_FREE_TRIALS_LEFT) {
                        const t = "No email reviews left this month";
                        let i;
                        if (e.meta.quotaResetDate) {
                            const t = Intl.DateTimeFormat([], {
                                month: "short",
                                day: "numeric"
                            }).format(new Date(Date.parse(e.meta.quotaResetDate)));
                            i = `You will get ${s.SR} free reviews again next month (${t}). You can also use paid expert writing help in Grammarly's web editor anytime.`
                        } else i = `You will get ${s.SR} free reviews again next month. You can also use paid expert writing help in Grammarly's web editor anytime.`;
                        return {
                            title: t,
                            message: i
                        }
                    }
                    return (e => {
                        switch (e) {
                            case s.rS.NOT_AVAILABLE:
                                return {
                                    message: "Our experts are currently working on other text. Please try again later."
                                };
                            case s.rS.NOT_AVAILABLE_QUOTA_ERROR:
                                return {
                                    title: "Something went wrong", message: "We couldn't determine how many requests you have left. Please try again later."
                                };
                            case s.rS.NOT_ENOUGH_WORDS:
                                return {
                                    message: `Your email must be at least ${s.fy} words.`
                                };
                            case s.rS.TOO_MANY_WORDS:
                                return {
                                    message: `Your email must be under ${s.Vw} words.`
                                };
                            case s.rS.CONFLICTING_REQUEST:
                                return {
                                    title: "Separate request in progress", message: "You can submit this request once the experts are finished with the one you already submitted."
                                };
                            case s.rS.CHECKING_INITIAL_AVAILABILITY:
                                return {
                                    message: "Checking for available experts..."
                                };
                            case s.rS.UNSUPPORTED_LANGUAGE:
                                return {
                                    message: "Our writing experts can only help with emails written in English."
                                };
                            default:
                                (0, n.vE)(e)
                        }
                    })(e.reason)
                },
                o = ({
                    info: e,
                    includeTitle: t
                }) => {
                    const i = r(e);
                    return a.createElement(a.Fragment, null, t ? a.createElement(a.Fragment, null, i.title ? a.createElement("b", null, i.title) : a.createElement("b", null, "Get expert writing help"), a.createElement("br", null)) : null, i.message)
                };
            o.defaultProps = {
                includeTitle: !1
            }
        },
        53844: (e, t, i) => {
            i.d(t, {
                q: () => v,
                d: () => g
            });
            var a = i(27378),
                n = i(12187),
                s = i(21420);
            const r = ({
                options: e,
                onChange: t = (() => null),
                ariaLabel: i,
                className: r
            }) => {
                const o = [],
                    [l, c] = a.useState(null);
                a.useEffect((() => {
                    var i;
                    null !== l && (null === (i = o[l]) || void 0 === i || i.focus()), t(null !== l ? e[l].value : null)
                }), [l]);
                const d = null !== l ? e[l] : null;
                return a.createElement("div", {
                    "data-grammarly-part": "ui-kit-radio-group",
                    className: r
                }, a.createElement("div", {
                    className: s.radioGroup,
                    role: "radiogroup",
                    "aria-label": i,
                    onKeyDown: t => {
                        if (" " !== t.key || d) {
                            if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                c(((l || 0) + 1) % e.length)
                            } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                const i = (l || 0) - 1;
                                c(i < 0 ? e.length - 1 : i)
                            }
                        } else t.preventDefault(), t.stopPropagation(), c(0)
                    }
                }, e.map(((e, t) => {
                    const i = (null == d ? void 0 : d.value) === e.value,
                        r = 0 === t;
                    return a.createElement("div", Object.assign({
                        key: e.value
                    }, (0, n.Sh)(s.radioGroupOption, i ? s.radioGroupOptionSelected : null), {
                        role: "radio",
                        tabIndex: i || r && !d ? 0 : -1,
                        "aria-checked": i,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), c(t)
                        },
                        ref: e => o.push(e)
                    }), e.render())
                }))))
            };
            var o, l = i(24606),
                c = i(47422),
                d = i(95888),
                p = i(53112),
                h = i(5872),
                m = i(51217),
                u = i(44544);

            function g(e) {
                return "score" in e
            }! function(e) {
                e.bad = "bad", e.ok = "ok", e.good = "good"
            }(o || (o = {}));
            const v = e => {
                const t = [o.bad, o.ok, o.good],
                    [i, s] = a.useState(null),
                    [g, v] = a.useState(""),
                    [f, w] = a.useState(!1),
                    [_, b] = a.useState(!1);
                let y;
                return y = _ ? a.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-thank-you"
                }, (0, n.Sh)(m.feedbackFormContainer, m.feedbackFormContainerAlignCenter)), a.createElement("div", {
                    className: m.feedbackFormSuccessMessageTextContainer
                }, a.createElement("div", {
                    className: m.feedbackFormSuccessMessageIcon
                }), a.createElement("div", {
                    className: m.feedbackFormSuccessMessageTitle
                }, "Thank you!"), a.createElement("div", {
                    className: m.feedbackFormSuccessMessageSubtitle
                }, "Your feedback helps us improve.")), a.createElement(l.z, {
                    containerClassName: (0, h.cs)(m.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? m.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    onClick: e.onClose,
                    style: {
                        height: "32px"
                    }
                }, "Done")) : a.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-fields"
                }, (0, n.Sh)(m.feedbackFormContainer, "center" === e.align ? m.feedbackFormContainerAlignCenter : null)), a.createElement("div", {
                    className: m.feedbackFormFields
                }, e.hideLogo ? null : a.createElement("div", {
                    className: m.feedbackFormLogo
                }), a.createElement("div", {
                    className: m.feedbackFormTitle
                }, e.title || a.createElement("span", null, "How do you like ", a.createElement("br", null), " Grammarly?")), e.withScore ? a.createElement(a.Fragment, null, a.createElement(r, {
                    ariaLabel: "Feedback Score",
                    options: t.map((e => ({
                        value: e,
                        render() {
                            let t, i;
                            return e === o.bad ? (t = u.feedbackFormOptionIconDisheartening, i = "Dissatisfied") : e === o.ok ? (t = u.feedbackFormOptionIconNeutral, i = "It's Ok") : (t = t = u.feedbackFormOptionIconSmiling, i = "Satisfied"), a.createElement("div", {
                                className: u.feedbackFormOption
                            }, a.createElement("div", Object.assign({}, (0, n.Sh)(u.feedbackFormOptionIcon, t))), a.createElement("div", null, i))
                        }
                    }))),
                    onChange: s,
                    className: m.feedbackFormScore
                }), a.createElement("div", {
                    className: m.feedbackFormTextBoxTitle
                }, "How can we improve?")) : null, a.createElement(c.z, {
                    onChange: v,
                    placeholder: "Tell us what you think",
                    ariaLabel: "Feedback Text",
                    className: m.feedbackFormTextBox
                }), e.domain ? a.createElement(a.Fragment, null, a.createElement("div", {
                    className: m.feedbackFormShareDomainTitle
                }, "Help improve Grammarly by sharing the domain you’re on:"), a.createElement(d.J, {
                    labelId: "feedback-form-share-domain-checkbox",
                    onChange: w,
                    className: m.feedbackFormShareDomainCheckbox
                }, "Include the domain ", a.createElement("b", null, e.domain), " with my feedback")) : null), a.createElement(l.z, {
                    containerClassName: (0, h.cs)(m.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? m.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    disabled: e.withScore ? !i : !g,
                    onClick: () => {
                        var t, a;
                        e.withScore && i ? (null === (t = e.onSubmit) || void 0 === t || t.call(e, {
                            score: i,
                            text: g,
                            domain: f ? e.domain : void 0
                        }), b(!0)) : !e.withScore && g && (null === (a = e.onSubmit) || void 0 === a || a.call(e, {
                            text: g,
                            domain: f ? e.domain : void 0
                        }), b(!0))
                    },
                    style: {
                        height: "32px",
                        background: (e.withScore ? i : g) ? void 0 : p.Z.neutral40
                    }
                }, "Submit")), a.createElement("div", {
                    style: {
                        height: "100%",
                        ...e.style
                    },
                    "data-grammarly-part": "surveys-feedback-form"
                }, y)
            };
            v.defaultProps = {
                hideLogo: !1,
                align: "center",
                fixSubmitButtonOverflowBottomPadding: !1
            }
        },
        24372: (e, t, i) => {
            i.d(t, {
                J: () => n
            });
            var a = i(64408);
            const n = new Proxy({}, {
                get: (e, t) => (...e) => a.emitBackground("gnar-track", {
                    method: t,
                    props: e
                })
            })
        },
        25682: (e, t, i) => {
            var a = i(93476)((function(e) {
                return e[1]
            }));
            a.push([e.id, "._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}", ""]), a.locals = {
                textBox: "_380Y1-textBox"
            }, e.exports = a
        },
        41794: e => {
            e.exports = {
                container: "rWxB3",
                contentContainer: "_1MFbY",
                thankYouContentContainer: "_3tH8C",
                main: "_2DNNh",
                thankYouMain: "_1wXyS",
                question: "UhER3",
                helperText: "_3te2s",
                optionsContainer: "_2rd2k",
                checkboxOption: "_8Cmo7",
                radioOption: "_3lgCn",
                thankYou: "_3DVR-",
                thankYouSubtext: "_2tIVN",
                buttonsContainer: "bOyYX"
            }
        },
        33751: e => {
            e.exports = {
                cardList: "_1Eape",
                cardListFooterDynamic: "Inkbe",
                cardListFooterStatic: "_7OpWh",
                cardListFooterAnimate: "_29PbU",
                upgradeHookWrapper: "_9GpAY",
                footer_button: "_1Vj8X",
                assistant: "AnaVG",
                feedback_button: "ncuAb",
                personalization_button: "_3lVFJ",
                dragging: "_1XWvb",
                mainView: "_38aRY"
            }
        },
        78846: e => {
            e.exports = {
                actions_hovered: "Xf2Pk",
                header: "_3p6xo",
                draggableWrapper: "_2_Oau",
                draggable: "_1m9e2",
                headerActions: "_2asjJ",
                headerActionBtn: "_2u6D9",
                headerActionBtnProofitIcon: "_1GEsJ",
                logoscore_fadein: "xzxut",
                fadein: "_30rWn",
                logoscore_fadeout: "_1DBSi",
                fadeout: "_24pVK",
                logo_score: "_6nCpo",
                spin: "_2gcAi"
            }
        },
        19217: e => {
            e.exports = {
                insight: "_3o8h_",
                insight__inline_icon: "svSbC",
                insight__inline_text: "_3Uft0"
            }
        },
        75039: e => {
            e.exports = {
                panel: "_1_EJL",
                score_container: "_2K_dc",
                info_icon: "wbvN6",
                lens_switch: "_3zrPc"
            }
        },
        98029: e => {
            e.exports = {
                predictions: "_3feHG",
                predictions__header: "_35Gcg",
                predictions__card: "_2xc9F",
                counterContainer: "_2co0s",
                predictions__zero_text: "_25oPK",
                predictions__off_brand: "_1sCHK"
            }
        },
        40145: e => {
            e.exports = {
                relatedSuggestionsTitle: "_3lmjh"
            }
        },
        55364: e => {
            e.exports = {
                viewOverlay: "_3iGYO",
                content: "_2sw8A",
                footer: "_3kpn-",
                viewOverlayGoBack: "_2Z1Xu",
                defaultViewOverlayPanel: "jqEio",
                gradientViewOverlayPanel: "_3Qgxa",
                proofitViewOverlayPanel: "_9lDqb",
                defaultViewOverlayHeader: "_1GTGF",
                defaultViewOverlayContent: "nXzeg",
                gradientViewOverlayContent: "_2hao0",
                proofitViewOverlayContent: "_2XeMU",
                logo: "xQSpk",
                proofitViewOverlayHeader: "_3dGrl",
                proofitViewOverlayHeaderBetaBadge: "_2wTGA"
            }
        },
        44715: e => {
            e.exports = {
                viewOverlay: "_2Unkh",
                content: "_2jpRZ",
                footer: "_24flt",
                viewOverlayGoBack: "a19pK",
                defaultViewOverlayPanel: "KLJW2",
                gradientViewOverlayPanel: "_2_U8f",
                helpPanel: "_1PEah",
                defaultViewOverlayHeader: "_2_b0R",
                defaultViewOverlayContent: "_1PG6A",
                gradientViewOverlayContent: "_21gzK",
                logo: "_3JvmB",
                helpPanelContent: "_7zg7r",
                helpBanner: "_3zyoV",
                helpBannerImage: "_3bc5C",
                helpHeader: "_1vP1w",
                helpBannerMessage: "uCPe4",
                helpContent: "FQviE",
                heatmap: "BPLCG"
            }
        },
        82318: e => {
            e.exports = {
                viewOverlay: "_24v8y",
                content: "_1GUCQ",
                footer: "_VXnz",
                viewOverlayGoBack: "_2vYal",
                defaultViewOverlayPanel: "_181-n",
                gradientViewOverlayPanel: "_30LCU",
                defaultViewOverlayHeader: "_2YCIK",
                defaultViewOverlayContent: "_1T1GW",
                gradientViewOverlayContent: "_2hMw0",
                logo: "_1wpBP",
                cardList: "_2M4t-",
                headerGroup: "Qwt6V",
                questionMarkButton: "_2U3v1",
                questionMarkIcon: "_3hiB8",
                summaryWrapper: "_3f-rw",
                message: "_2UO09",
                inlineButton: "_1-m6b",
                relatedSuggestionsTitle: "_3oKNQ"
            }
        },
        91574: e => {
            e.exports = {
                settingsDoneButton: "_3hYyu"
            }
        },
        35327: e => {
            e.exports = {
                summary_heading: "_28Zxw",
                summary_wrapper: "_3qF24",
                summary_fadein: "_1OTrB",
                fadein: "_1ETLE",
                summary_fadeout: "GJSzn",
                fadeout: "YHKQy"
            }
        },
        73008: e => {
            e.exports = {
                viewOverlay: "_8FYR8",
                content: "D8x8A",
                footer: "_1oEdF",
                viewOverlayGoBack: "_2IRn0",
                defaultViewOverlayPanel: "_3wpsL",
                gradientViewOverlayPanel: "_2zadI",
                defaultViewOverlayHeader: "_3Y5Ie",
                defaultViewOverlayContent: "_1FPwk",
                gradientViewOverlayContent: "_2WqSK",
                logo: "oiRsy"
            }
        },
        62513: e => {
            e.exports = {
                compactSuccessLens: "_1G56p",
                compactSuccessLensContainer: "_1cOu3"
            }
        },
        47476: e => {
            e.exports = {
                headerOrFooterWrapper: "_1snlI",
                spacingRegular: "_1QmQP",
                spacingSmall: "vv_Ep"
            }
        },
        74880: e => {
            e.exports = {
                cardList: "_2bCPN"
            }
        },
        30509: e => {
            e.exports = {
                premiumLens: "_2XK23"
            }
        },
        879: e => {
            e.exports = {
                successLens: "_1mbLA"
            }
        },
        57731: e => {
            e.exports = {
                footer: "_3W9PJ",
                plagiarismButton: "_1nouH",
                counterWrapper: "GHbf1",
                counter: "_2h93m",
                counterCheckmarkIcon: "_2-1xd"
            }
        },
        21831: e => {
            e.exports = {
                defaultHeader: "ghh6_",
                priorityLensHeader: "_2xf6x",
                head: "_1uTIv",
                headerGroup: "_1oce-",
                logoIcon: "_3Ey-O",
                logoText: "_1hTkC",
                headerButton: "_2HD8-",
                setGoalsButton: "_1EomQ",
                divider: "_2ku5Y",
                lensNavigation: "_1d7rU",
                disabledLensNavigation: "NFW3f",
                prioritySwitchWrapper: "EIY83",
                prioritySwitchFlatWrapper: "_3ujn6"
            }
        },
        79850: e => {
            e.exports = {
                wrapper: "_2PLre"
            }
        },
        75259: e => {
            e.exports = {
                container: "_2D4XC",
                baseGrid: "_2pCwn",
                bottomLeft: "_3_LGs",
                bottomRight: "_2tHhO",
                top: "_2Qg0A",
                notificationWrapper: "_3waR1"
            }
        },
        67129: e => {
            e.exports = {
                sidebarContainer: "_1_f6i"
            }
        },
        67489: e => {
            e.exports = {
                intentDetectionCardContent: "n8ZBv",
                intentDetectionCardContentExpanded: "_1zJsg",
                intentDetectionCardContentAccepted: "_2Nm5X",
                intentDetectionCardEmojiAndTitle: "W04V0",
                intentDetectionCardEmoji: "_2E35l",
                intentDetectionCardBetaBadgeAndCloseButton: "bRRgr",
                intentDetectionCardBetaBadge: "u4Umu",
                intentDetectionCardCloseButton: "_1kFTv",
                intentDetectionCardVoteAndBetaBadge: "Szcks",
                intentDetectionCardExpandedInfo: "_1iUYT"
            }
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
        59e3: e => {
            e.exports = {
                proofitRequestFormBtnLoadingSpinner: "_1dhPr",
                spin: "_34iE-"
            }
        },
        17487: e => {
            e.exports = {
                proofitRequestForm: "_16jRB",
                proofitRequestFormImg: "L3ge0",
                proofitRequestFormTitle: "_2AohE",
                proofitRequestFormDescription: "_1-l2N",
                proofitRequestFormCostAndTime: "_1fthW",
                proofitRequestFormTime: "XwGo8",
                proofitRequestFormCostAndTimeTitle: "kTnKg",
                proofitRequestFormCostAndTimeSubtitle: "_12FlO",
                proofitRequestFormRequestBtn: "_3Iaok",
                proofitRequestFormUnavailableMsg: "_1hKiE",
                proofitRequestFormFreeTrialFootnote: "Ir66w",
                proofitRequestFormPrivacyInfoTitle: "_2YkLm",
                proofitRequestFormPrivacyInfoDescription: "_23aSV",
                proofitRequestFormPrivacyInfoDescriptionItem: "_31giz",
                proofitRequestFormPrivacyInfoDescriptionItemBulletPoint: "_3vURB"
            }
        },
        8400: e => {
            e.exports = {
                proofitReviewForm: "_1_T1p",
                proofitReviewFormImg: "_1JRxr",
                proofitReviewFormTitle: "_1VtIM",
                proofitReviewFormDescription: "gQQZe"
            }
        },
        57398: e => {
            e.exports = {
                scoreRing: "_1V95O",
                loading: "_3_fuY",
                rotation: "_3cevg",
                scoreText: "_3MN4B"
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
        71527: e => {
            e.exports = {
                selected: "_3Ibej",
                label: "EKNV1",
                option: "ygVjN"
            }
        },
        66402: e => {
            e.exports = {
                american: "pyFmV",
                australian: "_2WGo3",
                british: "_1nkJZ",
                canadian: "_35Lt7"
            }
        },
        68089: e => {
            e.exports = {
                hover_blocker: "_1b9OS"
            }
        },
        56542: e => {
            e.exports = {
                settingsContent: "_2LPPC",
                heading: "uyO-m",
                allSettings: "_3yj-F",
                separator: "_2LaDH",
                settingsLink: "_1DiWR"
            }
        },
        1005: e => {
            e.exports = {
                heading: "LLSOT"
            }
        },
        26485: e => {
            e.exports = {
                select_checkbox: "_3jXk9",
                beta: "_2D7H7",
                new: "_3Lqg-",
                checkbox: "_2nj-e",
                checkbox_check: "_28S0f",
                on: "UigB5",
                off: "_30ryz",
                checkbox_check_round: "_1PwEM",
                checkbox_control_wrapper: "_1KIp6",
                grayOut: "ZleQc",
                on_off: "_3mcZ6",
                disabled: "_1Sp_7",
                setting_item: "_3JLH2"
            }
        },
        6304: e => {
            e.exports = {
                line: "_2vgUt",
                disabled: "_3kA-F",
                dialectPicker: "_2v6OJ"
            }
        },
        47740: e => {
            e.exports = {
                container: "_1eoMt",
                contant: "_255K3",
                title: "_3hI6a",
                spacer: "_2uzpC"
            }
        },
        17324: e => {
            e.exports = {
                windows: "_2wKpF",
                setting_item: "_6eFop",
                fixing: "_3sQF9",
                thin_text: "_2m369",
                footer: "AIrzw",
                gr_popup_settings: "_18flg",
                footer_btn: "_16bxQ",
                short_border: "FqAkb",
                top: "_2N9kH",
                show_news: "_3gR-M",
                news: "_1cBf5",
                news_content: "_3szOJ",
                close_news: "_8vCda",
                upgraded: "_1D3x1",
                content: "_36NTm",
                since: "dfV8r",
                business: "Nb2Rp",
                edu: "_3Q9EY",
                my_grammarly: "_1NXBN",
                new_document: "bpEGW",
                unsupported_site: "iBAYN",
                unsupported_item: "_13zLn",
                unsupported_title: "_3rfYX",
                domain: "_1tlAE",
                domain_in_details: "_2z4_y",
                unsupported_temporary: "Xw4Jp",
                unsupported_permanently: "_27hK2",
                unsupported_grammarly: "_2xTYa",
                diamond: "p3X6p",
                userPanel: "_3cZ8t",
                email: "bBX3_",
                link: "_3ko8g",
                blue: "b4yKe",
                edc_stripe: "_1wkrp",
                line: "_2_8JS",
                not_supported: "kU9B_",
                site_switcher: "_2KZQq",
                upgrade: "_1zI1G",
                def_switcher: "_29_cp",
                on: "_2JO5i",
                off: "_3f4Zs",
                favicon: "sjSDn",
                hotkeys: "DWDpl",
                shortcut_title: "rI_db",
                shortcut: "ynWKZ",
                summary: "_1cNov",
                upgrade_title: "_3aOe6",
                settingsContent: "_2BkNA",
                llamaTitle: "h5j0H",
                llamaDescription: "mHaqr"
            }
        },
        23345: e => {
            e.exports = {
                line: "NMkwQ",
                content: "lWYTI",
                upgrade: "_2GRJe"
            }
        }
    }
]);
