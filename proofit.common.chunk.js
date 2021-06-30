(self.webpackChunk = self.webpackChunk || []).push([
    [100], {
        20555: (e, t, o) => {
            o.r(t), o.d(t, {
                ProofitFeature: () => x,
                ProofitGmailInProgressRequestTracker: () => z,
                ProofitGmailIntegrationForComposeWindow: () => k,
                ProofitGmailIntegrationForThreads: () => F,
                ProofitTextReplacement: () => M,
                ProofitViewInjector: () => H.E
            });
            var i = o(2844),
                s = o(24209),
                n = o(76974),
                r = o(80900),
                a = o(77843),
                l = o(77176),
                u = o(85985),
                p = o(28043),
                d = o(16118),
                c = o(93497),
                h = o(50628),
                m = o(66310),
                g = o(17343),
                _ = o(23063),
                f = o(41398),
                v = o(8473),
                E = o(78674),
                y = o(2768),
                w = o(13718),
                I = o(42833),
                b = o(69184),
                C = o(75003),
                T = o(95572),
                P = o(11407),
                R = o(10247),
                S = o(74850),
                W = o(5817),
                L = o(38983);
            class x {
                constructor(e, t, o, a, _, f, v, E, y, w, I, b, C) {
                    this.layout = e, this._checkingStatus = t, this._geometryInvalidated = a, this._textObserver = _, this._gnar = f, this._state = v, this._felog = E, this._docId = y, this._submitRequestToApi = w, this._cancelRequestToApi = I, this._actions = b, this.textReplacement = C, this._subs = [], this._textChangesDuringReviewSubscription = null, this._calculateHighlightsRectsSubscription = null, this._available = L.h.create("unknown"), this._isEnglish = L.h.create("unknown"), this.inProgressTabMounted = L.h.create(!1), this._conflictingInProgressTabMounted = L.h.create(!1), this.quotaRemaining = L.h.create(0), this.requestInfo = L.h.create(x.INITIAL_REQUEST_INFO), this.requestDisabledInfo = L.h.create(null), this._log = S.Y.create(`Proofit - docId: ${y}`), this.turnaroundTime = this._state.view((e => {
                        var t, o;
                        return null !== (o = null === (t = e.dynamicConfig.proofit) || void 0 === t ? void 0 : t.turnaroundTime) && void 0 !== o ? o : 60
                    })), this.layoutCreated = this.layout.view((e => Boolean(e))), this.hideProofitIntroPopup = this._state.view((e => Boolean(e.page.seenProofitIntroPopup) || Boolean(e.page.sentProofitRequest))), this._quotaResetDate = this._state.view((e => e.page.billingSubscriptionStatus)).view((e => {
                        var t;
                        return "MONTHLY" === (null == e ? void 0 : e.billing_subscription_plan_period) && null !== (t = e.billing_subscription_renewal_date) && void 0 !== t ? t : null
                    })), this._subs.push(this.layout.subscribe((e => {
                        e && (this._subs.push(e.proofitInProgressTabLayout.mounted.subscribe((e => this.inProgressTabMounted.set(e)))), this._subs.push(e.proofitInProgressTabLayout.conflictingTabMounted.subscribe((e => this._conflictingInProgressTabMounted.set(e)))))
                    }))), this._subs.push((0, i.aj)([this._available, this._isEnglish, this.quotaRemaining, this._quotaResetDate, o, this._conflictingInProgressTabMounted, this.requestInfo.view("status")]).pipe((0, l.U)((([e, t, o, i, s, n, r]) => r === R.eE.REVIEWING ? null : r === R.eE.INITIAL ? {
                        reason: R.rS.CHECKING_INITIAL_AVAILABILITY
                    } : 0 === o ? {
                        reason: R.rS.NO_FREE_TRIALS_LEFT,
                        meta: {
                            quotaResetDate: i
                        }
                    } : !1 === t ? {
                        reason: R.rS.UNSUPPORTED_LANGUAGE
                    } : o < 0 ? {
                        reason: R.rS.NOT_AVAILABLE_QUOTA_ERROR
                    } : !1 === e ? {
                        reason: R.rS.NOT_AVAILABLE
                    } : n ? {
                        reason: R.rS.CONFLICTING_REQUEST
                    } : s < R.fy ? {
                        reason: R.rS.NOT_ENOUGH_WORDS
                    } : s > R.Vw ? {
                        reason: R.rS.TOO_MANY_WORDS
                    } : null))).subscribe((e => this.requestDisabledInfo.set(e)))), this._subs.push(this.requestDisabledInfo.pipe((0, l.U)((e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.reason) && void 0 !== t ? t : null
                    })), (0, u.h)((e => e !== R.rS.CHECKING_INITIAL_AVAILABILITY)), (0, p.x)()).subscribe((e => {
                        null === e ? this._gnar.proofitButtonEnabled() : this._gnar.proofitButtonDisabled(e)
                    }))), this._subs.push(this.requestInfo.pipe((0, d.G)()).subscribe((([e, t]) => {
                        this._log.trace("Request info changes (previous vs. new):", {
                            previousRequestInfo: e,
                            newRequestInfo: t
                        })
                    }))), this._subs.push((0, i.aj)([this._isEnglish, this._available]).pipe((0, c.n)((([e, t]) => "unknown" === e || "unknown" === t)), (0, h.P)()).subscribe((e => {
                        this.requestInfo.view("status").get() === R.eE.INITIAL && this.requestInfo.modify((e => ({
                            ...e,
                            status: R.eE.IDLE
                        })))
                    }))), this.startedThenStoppedTyping = this._textObserver.contentChanges.async.pipe((0, m.w)((e => (0, s.T)((0, n.of)(e.changes.length > 0), (0, r.H)((0, W.m9)(2)).pipe((0, g.h)(!1))))), (0, d.G)(), (0, l.U)((([e, t]) => !0 === e && !1 === t)))
                }
                onAvailabilityData(e) {
                    this._log.trace("Availability response received:", e), this._available.set(e.quota >= 0 && e.available), this.quotaRemaining.set(e.quota), e.quota < 0 && this._felog.proofit.availabilityQuotaError(this._getDataForErrorTracking())
                }
                setIsEnglish(e) {
                    this._isEnglish.set(e)
                }
                onSubmitResponse(e) {
                    this._log.trace("Submit response received:", e), "error" === e.status ? (this.requestInfo.set({
                        ...x.IDLE_REQUEST_INFO,
                        status: R.eE.ERROR
                    }), this._felog.proofit.submitResponseError(this._getDataForErrorTracking())) : "accepted" === e.status && this.requestInfo.modify((e => ({
                        ...e,
                        status: R.eE.ACCEPTED
                    })))
                }
                onCancelResponse(e) {
                    this._log.trace("Cancel response received:", e), this.quotaRemaining.set(e.quota), this.requestInfo.set({
                        ...x.IDLE_REQUEST_INFO,
                        status: R.eE.CANCELED
                    })
                }
                onProgress(e) {
                    this._log.trace("Request in progress message received:", e);
                    const t = this.requestInfo.get().status;
                    t !== R.eE.ACCEPTED && t !== R.eE.IN_PROGRESS || (this.requestInfo.modify((t => ({
                        ...t,
                        status: R.eE.IN_PROGRESS,
                        slicesChecked: e.checked,
                        totalSlices: e.total,
                        suggestionsMade: e.changesNumber,
                        activeReviewers: e.activeReviewers
                    }))), t === R.eE.ACCEPTED && this._subs.push((0, a.F)(1e3).pipe((0, _.q)(this.turnaroundTime.get() + 1), (0, f.M)(this.requestInfo.view("status")), (0, v.o)((([e, t]) => t === R.eE.IN_PROGRESS)), (0, l.U)((([e, t]) => this.turnaroundTime.get() - e))).subscribe((e => this.requestInfo.modify((t => ({
                        ...t,
                        secondsRemaining: e
                    })))))))
                }
                onCompleted(e) {
                    const t = this.requestInfo.get().timeStarted;
                    if (t) {
                        const e = (Date.now() - t) / 1e3;
                        this._gnar.proofitOrderTurnaroundTimeInSeconds(e)
                    }
                    this._log.trace("Request completed message received:", e), this.requestInfo.modify((t => ({
                        ...t,
                        status: R.eE.COMPLETED,
                        slicesChecked: e.checked,
                        totalSlices: e.total,
                        suggestionsMade: e.changesNumber,
                        textChanges: e.textChanges,
                        timeStarted: void 0
                    })))
                }
                onError(e) {
                    this._log.trace("Request error message received:", e), this.requestInfo.set({
                        ...x.IDLE_REQUEST_INFO,
                        status: R.eE.ERROR
                    }), this._felog.proofit.progressError(this._getDataForErrorTracking(e.reason))
                }
                onRejected(e) {
                    this._log.trace("Request rejected message received:", e), this.requestInfo.set({
                        ...x.IDLE_REQUEST_INFO,
                        status: R.eE.REJECTED
                    }), this._felog.proofit.progressRejected(this._getDataForErrorTracking(e.reason))
                }
                onCAPISessionStart() {
                    this.requestInfo.get().status !== R.eE.ACCEPTED && this.requestInfo.get().status !== R.eE.IN_PROGRESS || (this._log.trace('Submitting request again (with "reconnect: true")'), this._submitRequestToApi(!0))
                }
                resetRequest() {
                    var e;
                    this._log.trace("Resetting request."), null === (e = this._calculateHighlightsRectsSubscription) || void 0 === e || e.unsubscribe(), this.requestInfo.set(x.IDLE_REQUEST_INFO)
                }
                submitRequest() {
                    this._log.trace("Submitting request."), this._actions.sentProofitRequest();
                    const e = Date.now();
                    this.requestInfo.set({
                        ...x.IDLE_REQUEST_INFO,
                        status: R.eE.PREPARING
                    });
                    const t = this._checkingStatus.pipe((0, E.b)(300), (0, u.h)((e => e === T.Hq.idle)));
                    (0, a.F)(100).pipe((0, y.R)(t)).subscribe({
                        complete: () => {
                            this._submitRequestToApi(!1), this.requestInfo.set({
                                ...x.IDLE_REQUEST_INFO,
                                status: R.eE.PRE_SUBMIT,
                                timeStarted: e
                            })
                        }
                    })
                }
                cancelRequest() {
                    this._log.trace("Canceling request."), this._gnar.proofitOrderCanceled(), this._cancelRequestToApi(), this.requestInfo.modify((e => ({
                        ...e,
                        timeStarted: void 0,
                        status: R.eE.PRE_CANCEL
                    })))
                }
                async reviewRequest() {
                    var e, t;
                    this._log.trace("Reviewing request."), this._gnar.proofitOrderReviewed(), this.requestInfo.modify((e => ({
                        ...e,
                        status: R.eE.REVIEWING
                    }))), null === (e = this._textChangesDuringReviewSubscription) || void 0 === e || e.unsubscribe();
                    const o = await this.textReplacement.applyTextChanges(this.requestInfo.get().textChanges);
                    this._calculateHighlightsRects(o), null === (t = this._calculateHighlightsRectsSubscription) || void 0 === t || t.unsubscribe(), this._calculateHighlightsRectsSubscription = this._geometryInvalidated.pipe((0, w.U)(P.S.hz10), (0, f.M)(this.requestInfo.view("highlights"))).subscribe((([e, t]) => {
                        this._calculateHighlightsRects(t)
                    })), this._subs.push(this._calculateHighlightsRectsSubscription), this._textChangesDuringReviewSubscription = this._textObserver.contentChanges.immediate.pipe((0, I.u)((0, r.H)(1e3)), (0, u.h)((e => e.changes.length > 0)), (0, h.P)()).subscribe((() => this.resetRequest())), this._subs.push(this._textChangesDuringReviewSubscription)
                }
                _calculateHighlightsRects(e) {
                    const t = this.textReplacement.calculateHighlightsRects(e);
                    this.requestInfo.modify((e => ({
                        ...e,
                        highlights: t
                    })))
                }
                dialogCaller() {
                    return this._isInReview() ? b.Rx.proofitReview : b.Rx.proofitRequest
                }
                assistantViewType() {
                    return this._isInReview() ? C.a.Type.proofitReview : C.a.Type.proofitRequest
                }
                markSeenProofitIntroPopup() {
                    this._actions.seenProofitIntroPopup(), this._gnar.proofitIntroPopupShow()
                }
                dispose() {
                    this._subs.forEach((e => e.unsubscribe()))
                }
                _getDataForErrorTracking(e) {
                    var t, o;
                    const i = this.requestInfo.get();
                    return {
                        reason: null != e ? e : null,
                        featureState: {
                            available: this._available.get(),
                            quotaRemaining: this.quotaRemaining.get(),
                            isEnglish: this._isEnglish.get(),
                            requestInfo: {
                                status: i.status,
                                slicesChecked: i.slicesChecked,
                                totalSlices: i.totalSlices,
                                suggestionsMade: i.suggestionsMade
                            },
                            requestDisabledReason: null !== (o = null === (t = this.requestDisabledInfo.get()) || void 0 === t ? void 0 : t.reason) && void 0 !== o ? o : null,
                            docId: this._docId
                        }
                    }
                }
                _isInReview() {
                    return this.requestInfo.get().status === R.eE.REVIEWING
                }
            }
            x.INITIAL_REQUEST_INFO = {
                status: R.eE.INITIAL,
                slicesChecked: 0,
                totalSlices: 0,
                suggestionsMade: 0,
                textChanges: [],
                highlights: [],
                activeReviewers: 0
            }, x.IDLE_REQUEST_INFO = {
                ...x.INITIAL_REQUEST_INFO,
                status: R.eE.IDLE
            };
            var q = o(62337),
                A = o(64450),
                D = o(36991);
            class M {
                constructor(e, t, o, i, s) {
                    this._getCurrentTextMap = t, this._geometryProvider = o, this._geometryLayout = i, this._replacementService = s, this._log = S.Y.create(`ProofitTextReplacement - docId: ${e}`)
                }
                calculateHighlightsRects(e) {
                    const t = e.map((e => {
                        const t = this._geometryProvider.create(e.range, this._getCurrentTextMap()),
                            o = t ? this._geometryProvider.getClientRects(t) : [],
                            i = (o ? Array.from(o) : []).map((e => q.UL.setPosition(this._geometryLayout.getCurrentConversionContext().clientToRelative(e), e)));
                        return {
                            ...e,
                            rects: i
                        }
                    }));
                    return this._log.trace("Highlights rects calculated:", t), t
                }
                async applyTextChanges(e) {
                    var t;
                    this._log.trace("Applying text changes:", e), this._log.trace("Text before changes:", `"${this._getCurrentTextMap().getPlainText()}"`);
                    let o = 0,
                        i = [];
                    for (const s of e) {
                        const e = s.context.s + o,
                            n = s.context.e + o,
                            r = await this._applyTextChangesToSlice(e, n, new A.Delta(null === (t = s.alternatives) || void 0 === t ? void 0 : t[0]));
                        o += r.indexRebase, i = i.concat(r.highlights)
                    }
                    return this._log.trace("Text after changes:", `"${this._getCurrentTextMap().getPlainText()}"`), i
                }
                async _applyTextChangesToSlice(e, t, o) {
                    this._log.trace("Applying text changes to slice within the range:", `[${e}, ${t}]`), this._log.trace("Text in slice before changes:", this._getCurrentTextMap().getPlainText().slice(e, t + 1));
                    let i = e - 1,
                        s = 0,
                        n = null;
                    const r = [];
                    for (let e = 0; e < o.ops.length; e++) {
                        const t = o.ops[e],
                            a = i + 1;
                        let l = null,
                            u = null,
                            p = null;
                        if (D.s.isRetain(t)) i += t.retain;
                        else if (D.s.isInsertString(t)) {
                            const r = o.ops[e + 1];
                            r && D.s.isDelete(r) ? n = t : (l = a, u = "", p = t.insert, i += p.length, s += p.length)
                        } else D.s.isDelete(t) && (l = a + t.delete, u = this._getCurrentTextMap().getPlainText().slice(a, a + t.delete), n ? (p = n.insert, n = null) : p = "", i += p.length, s = s + p.length - t.delete);
                        if (null !== l && null !== u && null !== p) {
                            await this._replacementService.performReplacement({
                                start: a,
                                end: l
                            }, p, !1);
                            const e = {
                                start: a,
                                end: a + p.length
                            };
                            if (0 === p.length) {
                                const t = this._getCurrentTextMap().getPlainText();
                                " " === t[e.end] ? e.end = e.end + 1 : " " === t[e.start - 1] ? e.start = e.start - 1 : t[e.end] ? e.end = e.end + 1 : t[e.start - 1] && (e.start = e.start - 1)
                            }
                            r.push({
                                range: e,
                                originalText: u,
                                rects: []
                            })
                        }
                    }
                    return this._log.trace("Text in slice after changes:", this._getCurrentTextMap().getPlainText().slice(0 === e ? e : e + s, t + s + 1)), {
                        indexRebase: s,
                        highlights: r
                    }
                }
            }
            class z {
                constructor() {
                    this._inProgressId = L.h.create(null)
                }
                currentId() {
                    return this._inProgressId.get()
                }
                sameRequestInProgress(e) {
                    return this._inProgressId.view((t => Boolean(t) && t === e))
                }
                differentRequestInProgress(e) {
                    return this._inProgressId.view((t => Boolean(t) && t !== e))
                }
                markInProgress(e) {
                    this._inProgressId.set(e)
                }
                markNotInProgress() {
                    this._inProgressId.set(null)
                }
            }
            z.MESSAGE_ID = 0, z.generateId = () => {
                const e = `proofit-in-progress-${z.MESSAGE_ID}`;
                return z.MESSAGE_ID += 1, e
            };
            var N = o(84970),
                O = o(22679);
            class k {
                constructor(e, t, o) {
                    this._targetTextField = e, this._fieldContainer = t, this._inProgressRequestTracker = o, this._messageId = z.generateId()
                }
                getProofitLayout() {
                    var e, t, o, i, s, n, r, a, l, u, p, d, c, h, m, g, _;
                    const f = null === (o = null === (t = null === (e = this._targetTextField.closest("table")) || void 0 === e ? void 0 : e.closest("table:not(:scope)")) || void 0 === t ? void 0 : t.querySelector('[command="Files"]')) || void 0 === o ? void 0 : o.closest("table"),
                        v = null == f ? void 0 : f.querySelector("tr td:first-of-type");
                    this._composeWindow = this._targetTextField.closest('[role="dialog"]'), this._composeWindowContent = null === (s = null === (i = this._composeWindow) || void 0 === i ? void 0 : i.querySelector(":scope > .nH > .aaZ")) || void 0 === s ? void 0 : s.parentElement, this._composeWindowLabel = null === (n = this._composeWindow) || void 0 === n ? void 0 : n.querySelector(":scope > .nH.Hy.aXJ");
                    const E = null === (a = null === (r = this._composeWindow) || void 0 === r ? void 0 : r.querySelector('input[name="draft"]')) || void 0 === a ? void 0 : a.value,
                        y = E ? null === (l = this._targetTextField.ownerDocument.querySelector(`[data-standalone-draft-id="${E}"]`)) || void 0 === l ? void 0 : l.closest("tr") : null;
                    return this._draftItemLabel = null == y ? void 0 : y.querySelector(":scope > td.yX.xY > div.yW > span.bA4 > span.yP.boq"), this._fullscreenContainer = null === (u = this._composeWindow) || void 0 === u ? void 0 : u.closest(".aVN"), this._fullscreenOverlay = null === (p = this._fullscreenContainer) || void 0 === p ? void 0 : p.closest(".aSs"), this._minimizedComposeWindowContainerWrapperList = this._targetTextField.ownerDocument.querySelector(".dw > div > .nH > .nH > .no"), this._minimizedComposeWindowContainerWrapper = this._fullscreenContainer ? Array.from(null !== (c = null === (d = this._minimizedComposeWindowContainerWrapperList) || void 0 === d ? void 0 : d.querySelectorAll(":scope > .nH.nn")) && void 0 !== c ? c : []).find((e => {
                        const t = e.querySelector(":scope > .no > .nH.nn > .AD > .Hd");
                        return Boolean(t && !t.hasChildNodes())
                    })) : null === (g = null === (m = null === (h = this._composeWindow) || void 0 === h ? void 0 : h.closest(".nH.nn")) || void 0 === m ? void 0 : m.parentElement) || void 0 === g ? void 0 : g.closest(".nH.nn"), this._minimizedComposeWindowContainer = null === (_ = this._minimizedComposeWindowContainerWrapper) || void 0 === _ ? void 0 : _.querySelector(":scope > .no > .nH.nn"), f && v && this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainer ? {
                        proofitButtonLayout: {
                            sibling: v,
                            popupStyle: {
                                zIndex: 1
                            }
                        },
                        proofitInProgressTabLayout: {
                            container: this._minimizedComposeWindowContainer,
                            mounted: this._inProgressRequestTracker.sameRequestInProgress(this._messageId),
                            onMount: () => this._onMountInProgressTab(),
                            onUnmount: () => this._onUnmountInProgressTab(),
                            style: {
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                visibility: "visible"
                            },
                            conflictingTabMounted: this._inProgressRequestTracker.differentRequestInProgress(this._messageId),
                            shouldLimitInteraction: Boolean(this._fullscreenContainer)
                        },
                        proofitHighlightsLayout: {
                            container: this._fieldContainer,
                            style: {
                                position: "absolute",
                                zIndex: O.wJ
                            }
                        },
                        proofitInProgressDraftItemLayout: {
                            clientRect: !this._fullscreenContainer && y ? N.z.createShared(y) : null,
                            style: {
                                position: "fixed",
                                backgroundColor: y ? getComputedStyle(y).backgroundColor : "rgba(242,245,245,0.8)",
                                opacity: .5
                            }
                        }
                    } : null
                }
                _onMountInProgressTab() {
                    var e;
                    if (this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainer) {
                        if (this._inProgressRequestTracker.currentId() === this._messageId) return;
                        if (this._fullscreenContainer) {
                            if (this._minimizedComposeWindowContainerWrapper.style.display = "block", this._fullscreenContainer.style.display = "none", this._fullscreenOverlay) {
                                const e = getComputedStyle(this._fullscreenOverlay),
                                    t = this._targetTextField.ownerDocument.createElement("div");
                                t.style.backgroundColor = e.backgroundColor, t.style.height = "100%", t.style.width = "100%", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.zIndex = e.zIndex, t.setAttribute("data-grammarly-proofit-in-progress-overlay", "true"), this._fullscreenOverlay.style.visibility = "hidden", this._targetTextField.ownerDocument.body.appendChild(t)
                            }
                            null === (e = this._minimizedComposeWindowContainerWrapperList) || void 0 === e || e.querySelectorAll(":scope > .nH.nn").forEach((e => {
                                e !== this._minimizedComposeWindowContainerWrapper && (e.style.opacity = "0.5", e.style.pointerEvents = "none")
                            }))
                        } else this._composeWindowLabel && (this._composeWindowLabel.style.display = "none");
                        this._draftItemLabel && (this._draftItemLabel.innerHTML = "Expert review in progress"), this._minimizedComposeWindowContainerWrapper.style.height = "100vh", this._minimizedComposeWindowContainer.style.height = "100vh", this._minimizedComposeWindowContainer.style.zIndex = "2", this._composeWindowContent.style.display = "none", this._composeWindow.setAttribute("data-grammarly-proofit-in-progress-compose-window-container-width", this._minimizedComposeWindowContainer.style.width), this._composeWindow.setAttribute("data-grammarly-proofit-in-progress-compose-window-container-wrapper-width", this._minimizedComposeWindowContainerWrapper.style.width), this._minimizedComposeWindowContainer.style.width = "260px", this._minimizedComposeWindowContainerWrapper.style.width = "265px", this._inProgressRequestTracker.markInProgress(this._messageId)
                    }
                }
                _onUnmountInProgressTab() {
                    var e;
                    if (this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainer) {
                        if (this._inProgressRequestTracker.currentId() !== this._messageId) return;
                        this._fullscreenContainer ? (this._minimizedComposeWindowContainerWrapper.style.display = "none", this._fullscreenContainer.style.display = "block", this._fullscreenOverlay && (this._fullscreenOverlay.style.visibility = "inherit", null === (e = this._targetTextField.ownerDocument.body.querySelector('div[data-grammarly-proofit-in-progress-overlay="true"]')) || void 0 === e || e.remove()), this._minimizedComposeWindowContainerWrapperList.querySelectorAll(":scope > .nH.nn").forEach((e => {
                            e.style.opacity = "initial", e.style.pointerEvents = "initial"
                        }))) : this._composeWindowLabel && (this._composeWindowLabel.style.display = "block"), this._draftItemLabel && (this._draftItemLabel.innerHTML = "Draft"), this._minimizedComposeWindowContainer.style.zIndex = "auto", this._composeWindowContent.style.display = "block";
                        const t = this._composeWindow.getAttribute("data-grammarly-proofit-in-progress-compose-window-container-width"),
                            o = this._composeWindow.getAttribute("data-grammarly-proofit-in-progress-compose-window-container-wrapper-width");
                        t && o && (this._minimizedComposeWindowContainer.style.width = t, this._minimizedComposeWindowContainerWrapper.style.width = o), this._composeWindow.removeAttribute("data-grammarly-proofit-in-progress-compose-window-container-width"), this._composeWindow.removeAttribute("data-grammarly-proofit-in-progress-compose-window-container-wrapper-width"), this._inProgressRequestTracker.markNotInProgress(), this._targetTextField.focus()
                    }
                }
            }
            class F {
                constructor(e, t, o) {
                    this._targetTextField = e, this._fieldContainer = t, this._inProgressRequestTracker = o, this._progressMessageElement = null, this._hideComposeTab = e => {
                        var t;
                        e.setAttribute("data-grammarly-proofit-in-progress-compose-window-wrapper-display", null !== (t = e.style.display) && void 0 !== t ? t : "inherit"), e.style.display = "none"
                    }, this._showComposeTab = e => {
                        var t;
                        const o = "data-grammarly-proofit-in-progress-compose-window-wrapper-display",
                            i = null !== (t = e.getAttribute(o)) && void 0 !== t ? t : "";
                        e.style.display = i, e.removeAttribute(o)
                    }, this._messageId = z.generateId()
                }
                getProofitLayout() {
                    var e, t, o, i, s, n, r, a, l, u;
                    const p = null === (o = null === (t = null === (e = this._targetTextField.closest("table")) || void 0 === e ? void 0 : e.closest("table:not(:scope)")) || void 0 === t ? void 0 : t.querySelector('[command="Files"]')) || void 0 === o ? void 0 : o.closest("table"),
                        d = null == p ? void 0 : p.querySelector("tr td:first-of-type");
                    return this._composeWindow = this._targetTextField.closest('[role="region"]'), this._composeWindowContent = null === (i = this._composeWindow) || void 0 === i ? void 0 : i.querySelector(":scope > table.HM > tbody > tr > td.I5"), this._fullscreenOverlay = document.querySelector(".aSs"), this._minimizedComposeWindowContainerWrapperList = this._targetTextField.ownerDocument.querySelector(".dw > div > .nH > .nH > .no"), this._minimizedComposeWindowContainerWrapperListParent = null === (a = null === (r = null === (n = null === (s = this._minimizedComposeWindowContainerWrapperList) || void 0 === s ? void 0 : s.parentElement) || void 0 === n ? void 0 : n.parentElement) || void 0 === r ? void 0 : r.parentElement) || void 0 === a ? void 0 : a.parentElement, this._minimizedComposeWindowContainerWrapper = Array.from(null !== (u = null === (l = this._minimizedComposeWindowContainerWrapperList) || void 0 === l ? void 0 : l.querySelectorAll(":scope > .nH.nn")) && void 0 !== u ? u : []).find((e => !e.hasChildNodes() && "2147483647" !== e.style.order)), p && d && this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainerWrapperListParent ? {
                        proofitButtonLayout: {
                            sibling: d,
                            popupStyle: {
                                zIndex: 1
                            }
                        },
                        proofitInProgressTabLayout: {
                            container: this._minimizedComposeWindowContainerWrapper,
                            mounted: this._inProgressRequestTracker.sameRequestInProgress(this._messageId),
                            onMount: () => this._onMountInProgressTab(),
                            onUnmount: () => this._onUnmountInProgressTab(),
                            style: {
                                position: "absolute",
                                bottom: 0,
                                right: 66,
                                visibility: "visible"
                            },
                            conflictingTabMounted: this._inProgressRequestTracker.differentRequestInProgress(this._messageId),
                            shouldLimitInteraction: !0
                        },
                        proofitHighlightsLayout: {
                            container: this._fieldContainer,
                            style: {
                                position: "absolute",
                                zIndex: O.wJ
                            }
                        },
                        proofitInProgressDraftItemLayout: null
                    } : null
                }
                _onMountInProgressTab() {
                    if (this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainerWrapperListParent) {
                        if (this._inProgressRequestTracker.currentId() === this._messageId) return;
                        this._addFullScreenOverlay(), this._allComposeTabContainers().forEach((e => this._hideComposeTab(e))), this._minimizedComposeWindowContainerWrapperListParent.style.top = "0", this._minimizedComposeWindowContainerWrapperListParent.style.position = "absolute", this._minimizedComposeWindowContainerWrapperListParent.style.zIndex = O.wJ.toString(), this._hideComposeWindowContent(), this._inProgressRequestTracker.markInProgress(this._messageId)
                    }
                }
                _onUnmountInProgressTab() {
                    if (this._composeWindow && this._composeWindowContent && this._minimizedComposeWindowContainerWrapperList && this._minimizedComposeWindowContainerWrapper && this._minimizedComposeWindowContainerWrapperListParent) {
                        if (this._inProgressRequestTracker.currentId() !== this._messageId) return;
                        this._removeFullScreenOverlay(), this._allComposeTabContainers().forEach((e => this._showComposeTab(e))), this._minimizedComposeWindowContainerWrapper.style.height = "", this._minimizedComposeWindowContainerWrapperListParent.style.top = "", this._minimizedComposeWindowContainerWrapperListParent.style.position = "", this._minimizedComposeWindowContainerWrapperListParent.style.zIndex = "", this._composeWindowContent.style.display = "block", this._progressMessageElement && (this._progressMessageElement.remove(), this._progressMessageElement = null), this._inProgressRequestTracker.markNotInProgress(), this._targetTextField.focus()
                    }
                }
                _allComposeTabContainers() {
                    var e, t;
                    return Array.from(null !== (t = null === (e = this._minimizedComposeWindowContainerWrapperList) || void 0 === e ? void 0 : e.querySelectorAll(":scope > .nH.nn > .no")) && void 0 !== t ? t : [])
                }
                _hideComposeWindowContent() {
                    var e;
                    this._composeWindowContent && (this._composeWindowContent.style.display = "none", this._progressMessageElement = this._buildProgressMessageElement(), null === (e = this._composeWindowContent.parentElement) || void 0 === e || e.appendChild(this._progressMessageElement))
                }
                _buildProgressMessageElement() {
                    const e = this._targetTextField.ownerDocument.createElement("div");
                    return e.style.background = "#F5F5F5", e.style.borderRadius = "2px", e.style.color = "#777", e.style.marginLeft = "8px", e.style.marginTop = "12px", e.style.padding = "7px", e.textContent = "Your email is being reviewed by our experts.", e
                }
                _addFullScreenOverlay() {
                    const e = this._targetTextField.ownerDocument.createElement("div");
                    if (e.style.height = "100%", e.style.width = "100%", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.setAttribute("data-grammarly-proofit-in-progress-overlay", "true"), this._fullscreenOverlay) {
                        const t = getComputedStyle(this._fullscreenOverlay);
                        e.style.backgroundColor = t.backgroundColor, e.style.zIndex = t.zIndex, this._fullscreenOverlay.style.visibility = "hidden"
                    } else e.style.backgroundColor = "rgba(0, 0, 0, 0.5)", e.style.zIndex = "6";
                    this._targetTextField.ownerDocument.body.appendChild(e)
                }
                _removeFullScreenOverlay() {
                    var e;
                    null === (e = this._targetTextField.ownerDocument.body.querySelector('div[data-grammarly-proofit-in-progress-overlay="true"]')) || void 0 === e || e.remove()
                }
            }
            var H = o(61891)
        },
        53e3: (e, t, o) => {
            o.r(t), o.d(t, {
                ProofitButtonView: () => V,
                ProofitHighlightsView: () => ae,
                ProofitInProgressDraftItemOverlayView: () => ue,
                ProofitInProgressTabView: () => te,
                ProofitViewInjector: () => j.E
            });
            var i, s, n = o(27378),
                r = o(2844),
                a = o(16118),
                l = o(77176),
                u = o(75003),
                p = o(10247),
                d = o(70942),
                c = o(67521),
                h = o(20855),
                m = o(3860),
                g = o(13027),
                _ = o(67166),
                f = o(12187),
                v = o(90412),
                E = o(16774);
            const y = ({
                children: e,
                headerContent: t,
                mainContent: o,
                show: i,
                placement: s,
                showArrow: r,
                onClose: a,
                size: l,
                includeMainContentPadding: u,
                style: p,
                containerId: d
            }) => {
                var c;
                const [h, m] = n.useState(null), [y, w] = n.useState(null), [I, b] = n.useState(null), {
                    styles: C,
                    attributes: T
                } = (0, g.D)(h, y, {
                    placement: s,
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 8]
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: I
                        }
                    }]
                }), P = null === (c = T.popper) || void 0 === c ? void 0 : c["data-popper-placement"];
                return n.createElement("div", {
                    "data-grammarly-part": "ui-kit-popover"
                }, n.createElement("div", {
                    className: E.popoverReferenceElement,
                    ref: m
                }, e), i ? n.createElement(_.X, {
                    containerId: d,
                    headerContent: t,
                    mainContent: n.createElement(n.Fragment, null, o, r ? n.createElement("div", Object.assign({}, (0, f.Sh)(v.popoverArrowElement, "bottom" === P ? v.popoverArrowElementBottom : null, "top" === P ? v.popoverArrowElementTop : null, "right" === P ? v.popoverArrowElementRight : null, "left" === P ? v.popoverArrowElementLeft : null), {
                        ref: b,
                        style: C.arrow
                    })) : null),
                    ref: w,
                    style: {
                        ...p,
                        ...C.popper
                    },
                    attributes: T.popper,
                    includeMainContentPadding: u,
                    size: l,
                    onClose: a
                }) : null)
            };
            y.defaultProps = {
                show: !1,
                placement: "auto",
                showArrow: !0,
                size: null === (i = _.X.defaultProps) || void 0 === i ? void 0 : i.size,
                includeMainContentPadding: null === (s = _.X.defaultProps) || void 0 === s ? void 0 : s.includeMainContentPadding
            };
            var w = o(50258),
                I = o(99369);
            const b = ({
                headerIcon: e,
                title: t,
                message: o,
                children: i,
                show: s,
                placement: r,
                onClose: a,
                style: l
            }) => n.createElement(y, {
                headerContent: n.createElement("div", Object.assign({}, (0, f.Sh)("logo" === e ? w.popoverMessageHeaderContentLogoIcon : null, "logo-with-name" === e ? w.popoverMessageHeaderContentLogoWithNameIcon : null, "logo-error" === e ? w.popoverMessageHeaderContentLogoErrorIcon : null, "notification-ok" === e ? w.popoverMessageHeaderContentNotificationOKIcon : null, "notification-warning" === e ? w.popoverMessageHeaderContentNotificationWarningIcon : null))),
                mainContent: n.createElement("div", {
                    className: I.popoverMessageMainContent
                }, n.createElement("div", {
                    className: I.popoverMessageMainContentTitle
                }, t), o && n.createElement("div", {
                    className: I.popoverMessageMainContentText
                }, o)),
                show: s,
                placement: r,
                onClose: a,
                style: l
            }, i);
            var C;
            b.defaultProps = {
                    headerIcon: "logo-with-name",
                    placement: "auto",
                    show: !1
                },
                function(e) {
                    e.emphasizedToEnabled = "emphasizedToEnabled", e.enabledToEnabled = "enabledToEnabled", e.emphasized = "emphasized", e.disabled = "disabled", e.enabled = "enabled"
                }(C || (C = {}));
            var T = o(81108),
                P = o(90361),
                R = o(56823),
                S = o(82769),
                W = o(36208);

            function L(e) {
                const t = n.useRef();
                return n.useEffect((() => {
                    t.current = e
                })), t.current
            }
            const x = ({
                    prevIsDisabled: e,
                    isDisabled: t,
                    prevIsEmphasized: o,
                    isEmphasized: i
                }) => {
                    const s = (a = t, l = o, u = i, (r = e) || !l || a || u ? r || l || a || u ? u ? C.emphasized : a ? C.disabled : C.enabled : C.enabledToEnabled : C.emphasizedToEnabled);
                    var r, a, l, u;
                    switch (s) {
                        case C.emphasizedToEnabled:
                        case C.enabledToEnabled:
                            return n.createElement(R.gv, {
                                size: 20
                            });
                        case C.enabled:
                            return n.createElement(R.sl, {
                                size: 20
                            });
                        case C.emphasized:
                            return n.createElement(S.l, {
                                size: 20
                            });
                        case C.disabled:
                            return n.createElement(R.qz, {
                                size: 20
                            });
                        default:
                            (0, P.vE)(s)
                    }
                },
                q = ({
                    style: e,
                    onClick: t,
                    disabledInfo: o,
                    isEmphasized: i,
                    showPopup: s,
                    onPopupClose: r,
                    disableIntroTooltip: a,
                    popupStyle: l
                }) => {
                    var u, p;
                    const d = Boolean(o),
                        c = null === (u = L(d)) || void 0 === u || u,
                        g = null !== (p = L(i)) && void 0 !== p && p,
                        _ = n.createElement("div", {
                            "data-grammarly-part": "proofit-button",
                            className: W.proofitButtonIcon,
                            style: e
                        }, n.createElement(m.h, {
                            hoverable: !0,
                            onClick: t,
                            disabled: d
                        }, n.createElement(x, {
                            isDisabled: d,
                            prevIsDisabled: c,
                            isEmphasized: i,
                            prevIsEmphasized: g
                        })));
                    if (d) return n.createElement(h.u, {
                        showDelay: 0,
                        message: n.createElement(T.Q, {
                            info: o,
                            includeTitle: !0
                        }),
                        withGrammarlyIcon: !0
                    }, _);
                    if (s) {
                        let e, t, o = "";
                        return "canceled" === s ? (e = "logo-with-name", o = "Your request was canceled.") : "error" === s ? (e = "logo-error", o = "Something went wrong.", t = "Please try again later.") : "rejected" === s ? (e = "logo-error", o = "Order canceled by writing experts.", t = n.createElement(n.Fragment, null, n.createElement("a", {
                            target: "_blank",
                            href: "https://support.grammarly.com/hc/en-us/articles/360024803951-Expert-writing-service-submission-stand"
                        }, "See our submission guidelines"), ". We'll refund your credit to use on a different email.")) : "intro" === s && (e = "logo-with-name", o = "Are you writing an important email?", t = "Learn how to get instant help from our team of writing experts."), n.createElement(b, {
                            show: Boolean(s),
                            title: o,
                            message: t,
                            onClose: r,
                            placement: "top",
                            headerIcon: e,
                            style: l
                        }, _)
                    }
                    return n.createElement(h.u, {
                        showDelay: 1e3,
                        message: n.createElement(n.Fragment, null, n.createElement("b", null, "Are you writing an important email?"), n.createElement("br", null), "Learn how to get instant help from our team of writing experts."),
                        withGrammarlyIcon: !0,
                        disabled: a
                    }, _)
                };
            q.defaultProps = {
                disabledInfo: null,
                disableIntroTooltip: !1
            };
            var A = o(98403),
                D = o(85985),
                M = o(23063),
                z = o(71032),
                N = o(17343),
                O = o(24209),
                k = o(76974),
                F = o(80900),
                H = o(93508),
                B = o(2834),
                G = o(38983),
                U = o(5739);
            const V = ({
                layout: e,
                gButtonIsVisible: t,
                gButtonHasNoConflictingPopupOrBanner: o,
                requestDisabledInfo: i,
                requestStatus: s,
                assistantActiveView: h,
                onOpenAssistant: m,
                onCloseAssistant: g,
                hideProofitIntroPopup: _,
                markSeenProofitIntroPopup: f,
                startedThenStoppedTyping: v,
                mouseObservable: E
            }) => {
                const [y, w] = n.useState(!1);
                n.useEffect((() => {
                    const e = s.pipe((0, a.G)()).subscribe((([e, t]) => {
                        const o = e !== p.eE.CANCELED && t === p.eE.CANCELED,
                            i = e !== p.eE.ERROR && t === p.eE.ERROR,
                            s = e !== p.eE.REJECTED && t === p.eE.REJECTED;
                        w(o ? "canceled" : i ? "error" : !!s && "rejected")
                    }));
                    return () => e.unsubscribe()
                }), []), n.useEffect((() => {
                    const e = (0, r.aj)([o, i, _, v, s]).pipe(D.h((([e, t, o, i, s]) => !o && e && null === t && i && s === p.eE.IDLE)), M.q(1)).subscribe((() => {
                        w("intro"), f()
                    }));
                    return () => e.unsubscribe()
                }), []), n.useEffect((() => {
                    d.H.updateStyles()
                }), []);
                const I = G.h.create(!1);
                return (0, c.A)(r.aj([i, v]).pipe(D.h((([e, t]) => null === e && !0 === t)), M.q(1), z.b((() => E.pipe(N.h(!0), M.q(1)))), z.b((() => O.T(k.of(!0), F.H(4e3).pipe(N.h(!1), M.q(1))))), H.O(!1), B.b(A.wW(I)))), n.createElement(U.F.Fragment, null, (0, r.aj)([e.view((e => null == e ? void 0 : e.proofitButtonLayout)), t, i, s, h, I]).pipe((0, l.U)((([e, t, o, i, s, r]) => e && t ? n.createElement(q, {
                    style: {
                        marginLeft: 12,
                        marginTop: 4
                    },
                    onClick: () => {
                        w(!1), (null == s ? void 0 : s.type) === u.a.Type.proofitRequest || (null == s ? void 0 : s.type) === u.a.Type.proofitReview ? g() : m()
                    },
                    showPopup: y,
                    onPopupClose: () => w(!1),
                    disabledInfo: o,
                    disableIntroTooltip: i !== p.eE.IDLE || (null == s ? void 0 : s.type) === u.a.Type.proofitRequest || (null == s ? void 0 : s.type) === u.a.Type.proofitReview,
                    popupStyle: e.popupStyle,
                    isEmphasized: r
                }) : null))))
            };
            var j = o(61891),
                $ = o(24606),
                Q = o(32285),
                Y = o.n(Q);
            const K = ({
                ariaMenuId: e,
                ariaMenuLabel: t,
                items: o,
                placement: i,
                onToggle: s,
                children: r
            }) => {
                const a = [];
                let l = null;
                const [u, p] = n.useState(!1), [d, c] = n.useState(null), h = () => {
                    u || p(!0), c(0)
                }, m = () => {
                    u || p(!0), c(o.length - 1)
                }, g = () => {
                    null == l || l.focus(), p(!1)
                }, _ = e => {
                    e.onClick(), g()
                };
                n.useEffect((() => {
                    null !== d && setTimeout((() => {
                        var e;
                        return null === (e = a[d]) || void 0 === e ? void 0 : e.focus()
                    }), 0)
                }), [d]), n.useEffect((() => {
                    u || c(null), null == s || s(u)
                }), [u]);
                const v = "popover-menu-item",
                    E = o.find((e => Boolean(e.icon))),
                    w = n.createElement("ul", {
                        id: e,
                        "aria-label": t,
                        role: "menu",
                        className: Y().popoverMenu,
                        onKeyDown: e => {
                            let t = !1;
                            "ArrowUp" === e.key ? ((() => {
                                let e = (d || 0) - 1;
                                e < 0 && (e = o.length - 1), c(e)
                            })(), t = !0) : "ArrowDown" === e.key ? ((() => {
                                let e = (d || 0) + 1;
                                e >= o.length && (e = 0), c(e)
                            })(), t = !0) : "Home" === e.key ? (h(), t = !0) : "End" === e.key ? (m(), t = !0) : "Escape" === e.key && (g(), t = !0), t && (e.stopPropagation(), e.preventDefault())
                        }
                    }, o.map(((t, o) => n.createElement("li", {
                        key: `popover-menu-item-${o}`,
                        className: Y().popoverMenuItem,
                        "data-role": v,
                        onClick: () => _(t),
                        onKeyDown: e => {
                            let o = !1;
                            " " !== e.key && "Enter" !== e.key || (_(t), o = !0), o && (e.stopPropagation(), e.preventDefault())
                        },
                        onBlur: t => {
                            var o, i;
                            (null === (i = null === (o = t.relatedTarget) || void 0 === o ? void 0 : o.parentElement) || void 0 === i ? void 0 : i.id) !== e && p(!1)
                        },
                        role: "menu-item",
                        tabIndex: -1,
                        ref: e => a.push(e)
                    }, n.createElement("div", Object.assign({}, (0, f.Sh)(Y().popoverMenuItemLabel, E ? Y().popoverMenuItemLabelWithIcon : null)), E ? n.createElement("div", {
                        className: Y().popoverMenuItemLabelIcon
                    }, t.icon) : null, n.createElement("span", null, t.label)))))),
                    I = `popover-container-id-${e}`;
                return n.createElement(y, {
                    containerId: I,
                    mainContent: w,
                    show: u,
                    placement: i,
                    showArrow: !1,
                    size: "small",
                    includeMainContentPadding: !1
                }, n.createElement("div", {
                    ref: e => l = e,
                    "aria-haspopup": !0,
                    "aria-controls": e,
                    "aria-expanded": u,
                    role: "button",
                    tabIndex: 0,
                    style: {
                        display: "inline-flex"
                    },
                    onClick: () => p(!u),
                    onKeyDown: e => {
                        let t = !1;
                        " " === e.key || "Enter" === e.key || "ArrowDown" === e.key ? (h(), t = !0) : "ArrowUp" === e.key ? (m(), t = !0) : "Escape" === e.key && (g(), t = !0), t && (e.stopPropagation(), e.preventDefault())
                    },
                    onBlur: e => {
                        var t, o;
                        (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.id) !== I && (null === (o = e.relatedTarget) || void 0 === o ? void 0 : o.getAttribute("data-role")) !== v && p(!1)
                    }
                }, n.cloneElement(r, {
                    tabIndex: -1
                })))
            };
            K.defaultProps = {
                placement: "auto"
            };
            var X = o(8385),
                J = o(28573);
            const Z = e => {
                const t = e => {
                    let t = Math.round(e);
                    return t > 100 ? t = 100 : t < 0 && (t = 0), t
                };
                return n.createElement("div", {
                    "data-grammarly-part": "proofit-in-progress-tab",
                    style: e.style
                }, n.createElement("div", {
                    className: J.proofitInProgressTab
                }, n.createElement("div", {
                    className: J.proofitInProgressTabContent
                }, n.createElement("div", Object.assign({}, (0, f.Sh)(J.proofitInProgressTabTitleContainer, e.secondaryTitle ? J.proofitInProgressTabTitleContainerMultiple : null)), n.createElement("span", Object.assign({}, (0, f.Sh)(J.proofitInProgressTabTitle, J.proofitInProgressTabTitleMain)), e.title), e.secondaryTitle ? n.createElement("span", Object.assign({}, (0, f.Sh)(J.proofitInProgressTabTitle, J.proofitInProgressTabTitleSecondary)), e.secondaryTitle) : null), e.isCompleted ? n.createElement($.z, {
                    onClick: e.onReview,
                    kind: "success",
                    size: "small",
                    fitContent: !0
                }, "Review") : t(e.progress) < 100 ? n.createElement(K, {
                    ariaMenuId: "proofit-in-progress-tab-actions-menu",
                    ariaMenuLabel: "Proofit In-Progress Tab Actions Menu",
                    items: [{
                        icon: n.createElement("div", {
                            className: X.proofitInProgressTabCancelIcon
                        }),
                        label: "Cancel order",
                        onClick: e.onCancel
                    }],
                    placement: "top-end",
                    onToggle: e.onToggleMenu
                }, n.createElement(m.h, {
                    hoverable: !1
                }, n.createElement("div", {
                    className: X.proofitInProgressTabMenuIcon
                }))) : null), e.isCompleted || e.hideProgressBar ? null : n.createElement("div", {
                    className: J.proofitInProgressTabCompletionBar,
                    style: {
                        width: `${t(e.progress)}%`
                    }
                })))
            };
            var ee = o(18208);
            const te = ({
                layout: e,
                requestInfo: t,
                turnaroundTime: o,
                onCancel: i,
                onReview: s
            }) => {
                const [a, u] = n.useState(null), [c, h] = n.useState(null), [m, g] = n.useState(null), [_, f] = n.useState(null), v = [p.eE.ACCEPTED, p.eE.IN_PROGRESS, p.eE.COMPLETED];
                return n.useEffect((() => {
                    d.H.updateStyles()
                }), []), n.createElement(U.F.Fragment, null, (0, r.aj)([e.view((e => null == e ? void 0 : e.proofitInProgressTabLayout)), t, o]).pipe((0, B.b)((([e, t]) => {
                    e && v.includes(t.status) ? e.onMount() : e && !v.includes(t.status) && (e.onUnmount(), u(null), g(null), c && clearTimeout(c), _ && clearTimeout(_))
                })), (0, l.U)((([e, t, o]) => {
                    var r;
                    const {
                        suggestionsMade: l,
                        slicesChecked: d,
                        totalSlices: c,
                        status: _,
                        secondsRemaining: E,
                        activeReviewers: y
                    } = t;
                    if (e && v.includes(t.status)) {
                        const t = _ === p.eE.ACCEPTED,
                            v = _ === p.eE.IN_PROGRESS,
                            w = _ === p.eE.COMPLETED;
                        let I = 0;
                        c > 0 && (I = d / c * 100);
                        let C, T = "",
                            P = !1;
                        if (t) T = "Connecting you to experts...";
                        else if (v) {
                            T = l > 0 ? `${l} ${ee.pluralize(l,"suggestion","suggestions")} made so far...` : "Review in progress...";
                            const e = null != E ? E : o,
                                t = e > 0;
                            C = t ? y > 0 ? `${y} ${ee.pluralize(y,"expert","experts")} reviewing...` : `About ${e} ${ee.pluralize(e,"second","seconds")} remaining...` : "Wrapping up...", P = !t
                        } else T = `${l} ${ee.pluralize(l,"suggestion","suggestions")}`;
                        let R, S, W = "";
                        return w ? null === m ? (u(!1), g(!0), f(setTimeout((() => g(!1)), 7e3))) : m && (W = "Your email is ready!", R = "Suggestions are highlighted.", S = () => g(!1)) : null === a ? (u(!0), h(setTimeout((() => u(!1)), 7e3))) : a && (W = "We're reviewing your email now.", R = n.createElement(n.Fragment, null, "This takes just a few moments.", e.shouldLimitInteraction ? n.createElement(n.Fragment, null, n.createElement("br", null), "This page is temporarily paused while the experts review your email.") : null), S = () => u(!1)), n.createElement("div", {
                            style: {
                                ...e.style
                            }
                        }, n.createElement(b, {
                            show: null !== (r = a || m) && void 0 !== r ? r : void 0,
                            title: W,
                            message: R,
                            onClose: S,
                            placement: "top",
                            headerIcon: m ? "notification-ok" : void 0
                        }, w ? n.createElement(Z, {
                            isCompleted: w,
                            title: T,
                            onReview: s
                        }) : n.createElement(Z, {
                            isCompleted: w,
                            title: T,
                            secondaryTitle: C,
                            progress: I,
                            onCancel: i,
                            onToggleMenu: e => {
                                e && (null == S || S())
                            },
                            hideProgressBar: P
                        })))
                    }
                    return null
                }))))
            };
            var oe = o(52940),
                ie = o.n(oe),
                se = o(99908),
                ne = o.n(se);
            const re = ({
                originalText: e,
                width: t,
                height: o,
                top: i,
                left: s,
                zIndex: r,
                position: a
            }) => n.createElement("div", {
                "data-grammarly-part": "proofit-highlight",
                style: {
                    width: t,
                    height: o,
                    top: i,
                    left: s,
                    zIndex: r,
                    position: a
                }
            }, n.createElement(h.u, {
                showDelay: 0,
                message: n.createElement("div", {
                    className: ne().proofitHighlightTooltip
                }, e),
                disabled: 0 === e.trim().length
            }, n.createElement("div", {
                className: ie().proofitHighlight
            })));
            re.defaultProps = {
                zIndex: "auto",
                position: "fixed"
            };
            const ae = ({
                layout: e,
                requestInfo: t,
                assistantActiveView: o
            }) => (n.useEffect((() => {
                d.H.updateStyles()
            }), []), n.createElement(U.F.Fragment, null, (0, r.aj)([e.view((e => null == e ? void 0 : e.proofitHighlightsLayout.style)), t, o]).pipe((0, l.U)((([e, t, o]) => (null == o ? void 0 : o.type) === u.a.Type.proofitReview && e && t.status === p.eE.REVIEWING ? t.highlights.map((t => t.rects.map((o => n.createElement(re, {
                key: `${t.originalText}-${t.range.start}-${t.range.end}`,
                originalText: t.originalText,
                top: o.top,
                left: o.left,
                height: o.height,
                width: o.width,
                position: e.position,
                zIndex: e.zIndex
            }))))) : null)))));
            var le = o(66310);
            const ue = ({
                layout: e,
                requestInfo: t
            }) => {
                const o = [p.eE.ACCEPTED, p.eE.IN_PROGRESS, p.eE.COMPLETED];
                return n.useEffect((() => {
                    d.H.updateStyles()
                }), []), n.createElement(U.F.Fragment, null, (0, r.aj)([e.view((e => null == e ? void 0 : e.proofitInProgressDraftItemLayout)).pipe((0, le.w)((e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.clientRect) && void 0 !== t ? t : (0, k.of)(null)
                }))), e.view((e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.proofitInProgressDraftItemLayout) || void 0 === t ? void 0 : t.style
                })), t.view("status")]).pipe((0, l.U)((([e, t, i]) => e && t && o.includes(i) ? n.createElement(h.u, {
                    showDelay: 1e3,
                    message: n.createElement(n.Fragment, null, n.createElement("b", null, "We're reviewing your email now."), n.createElement("br", null), "This will take just a few moments. We've temporarily paused your draft while the experts work on it."),
                    withGrammarlyIcon: !0
                }, n.createElement("div", {
                    "data-grammarly-part": "proofit-in-progress-draft-item-overlay",
                    style: {
                        top: e.top,
                        left: e.left,
                        width: e.width,
                        height: e.height,
                        ...t
                    }
                })) : null))))
            }
        },
        61891: (e, t, o) => {
            o.d(t, {
                E: () => a
            });
            var i = o(27378),
                s = o(6318),
                n = o(2780),
                r = o(68383);
            class a {
                constructor(e, t, o) {
                    this._outerDoc = e, this._proofitLayout = t, this._proofitElements = o
                }
                inject(e) {
                    this._proofitButtonView = s.VB.get({
                        monitorAs: "proofit-button"
                    }).inject(n.EM.fromDocument(this._outerDoc, "grammarly-proofit-button"), (e => {
                        var t;
                        e.style.zIndex = "1", null === (t = this._proofitLayout) || void 0 === t || t.proofitButtonLayout.sibling.insertAdjacentElement("afterend", e)
                    }), r.G7.showWhenLoaded(i.createElement(this._proofitElements.proofitButton, null))), this._proofitInProgressTabView = s.VB.get({
                        monitorAs: "proofit-in-progress-tab"
                    }).inject(n.EM.fromDocument(this._outerDoc, "grammarly-proofit-in-progress-tab"), (e => {
                        var t;
                        null === (t = this._proofitLayout) || void 0 === t || t.proofitInProgressTabLayout.container.appendChild(e)
                    }), r.G7.showWhenLoaded(i.createElement(this._proofitElements.proofitInProgressTab, null))), this._proofitInProgressDraftItemOverlayView = s.VB.get({
                        monitorAs: "proofit-in-progress-draft-item-overlay"
                    }).inject(n.EM.fromDocument(this._outerDoc, "grammarly-proofit-in-progress-draft-item-overlay"), n.zs.appendChild(this._outerDoc.documentElement), r.G7.showWhenLoaded(i.createElement(this._proofitElements.proofitInProgressDraftItemOverlay, null)), {
                        eventPropagationHandler: null == e ? void 0 : e.eventPropagationHandler
                    }), this._proofitHighlightsView = s.VB.get({
                        monitorAs: "proofit-highlights"
                    }).inject(n.EM.fromDocument(this._outerDoc, "grammarly-proofit-highlights"), (e => {
                        var t, o;
                        null === (o = null === (t = this._proofitLayout) || void 0 === t ? void 0 : t.proofitHighlightsLayout.container) || void 0 === o || o.appendChild(e)
                    }), r.G7.showWhenLoaded(i.createElement(this._proofitElements.proofitHighlights, null)))
                }
                dispose() {
                    this._proofitButtonView.dispose(), this._proofitInProgressTabView.dispose(), this._proofitInProgressDraftItemOverlayView.dispose(), this._proofitHighlightsView.dispose()
                }
            }
        },
        81108: (e, t, o) => {
            o.d(t, {
                Q: () => a
            });
            var i = o(27378),
                s = o(90361),
                n = o(10247);
            const r = e => {
                    if (e.reason === n.rS.NO_FREE_TRIALS_LEFT) {
                        const t = "No email reviews left this month";
                        let o;
                        if (e.meta.quotaResetDate) {
                            const t = Intl.DateTimeFormat([], {
                                month: "short",
                                day: "numeric"
                            }).format(new Date(Date.parse(e.meta.quotaResetDate)));
                            o = `You will get ${n.SR} free reviews again next month (${t}). You can also use paid expert writing help in Grammarly's web editor anytime.`
                        } else o = `You will get ${n.SR} free reviews again next month. You can also use paid expert writing help in Grammarly's web editor anytime.`;
                        return {
                            title: t,
                            message: o
                        }
                    }
                    return (e => {
                        switch (e) {
                            case n.rS.NOT_AVAILABLE:
                                return {
                                    message: "Our experts are currently working on other text. Please try again later."
                                };
                            case n.rS.NOT_AVAILABLE_QUOTA_ERROR:
                                return {
                                    title: "Something went wrong", message: "We couldn't determine how many requests you have left. Please try again later."
                                };
                            case n.rS.NOT_ENOUGH_WORDS:
                                return {
                                    message: `Your email must be at least ${n.fy} words.`
                                };
                            case n.rS.TOO_MANY_WORDS:
                                return {
                                    message: `Your email must be under ${n.Vw} words.`
                                };
                            case n.rS.CONFLICTING_REQUEST:
                                return {
                                    title: "Separate request in progress", message: "You can submit this request once the experts are finished with the one you already submitted."
                                };
                            case n.rS.CHECKING_INITIAL_AVAILABILITY:
                                return {
                                    message: "Checking for available experts..."
                                };
                            case n.rS.UNSUPPORTED_LANGUAGE:
                                return {
                                    message: "Our writing experts can only help with emails written in English."
                                };
                            default:
                                (0, s.vE)(e)
                        }
                    })(e.reason)
                },
                a = ({
                    info: e,
                    includeTitle: t
                }) => {
                    const o = r(e);
                    return i.createElement(i.Fragment, null, t ? i.createElement(i.Fragment, null, o.title ? i.createElement("b", null, o.title) : i.createElement("b", null, "Get expert writing help"), i.createElement("br", null)) : null, o.message)
                };
            a.defaultProps = {
                includeTitle: !1
            }
        },
        90412: e => {
            e.exports = {
                popoverArrowElement: "_24bGb",
                popoverArrowElementBottom: "VEtNw",
                popoverArrowElementTop: "AofEI",
                popoverArrowElementRight: "_183A3",
                popoverArrowElementLeft: "TJPLk"
            }
        },
        16774: e => {
            e.exports = {
                popoverReferenceElement: "_2R-WV"
            }
        },
        32285: e => {
            e.exports = {
                popoverMenu: "_hRVl",
                popoverMenuItem: "_2khdM",
                popoverMenuItemLabel: "_31TwG",
                popoverMenuItemLabelWithIcon: "_2sTu4",
                popoverMenuItemLabelIcon: "_1bd8O"
            }
        },
        50258: e => {
            e.exports = {
                popoverMessageHeaderContentLogoIcon: "_2yKay",
                popoverMessageHeaderContentLogoWithNameIcon: "jdCoy",
                popoverMessageHeaderContentLogoErrorIcon: "SX3B2",
                popoverMessageHeaderContentNotificationOKIcon: "_2-xM4",
                popoverMessageHeaderContentNotificationWarningIcon: "_1hdvB",
                spin: "_29C-s"
            }
        },
        99369: e => {
            e.exports = {
                popoverMessageMainContent: "ox2NE",
                popoverMessageMainContentTitle: "_3f46g",
                popoverMessageMainContentText: "XiFNt"
            }
        },
        36208: e => {
            e.exports = {
                proofitButtonIcon: "_2QVlA"
            }
        },
        52940: e => {
            e.exports = {
                proofitHighlight: "_1az99"
            }
        },
        99908: e => {
            e.exports = {
                proofitHighlightTooltip: "_1DQoQ"
            }
        },
        8385: e => {
            e.exports = {
                proofitInProgressTabMenuIcon: "_1_mce",
                proofitInProgressTabCancelIcon: "_1dnfD",
                spin: "_3PjGK"
            }
        },
        28573: e => {
            e.exports = {
                proofitInProgressTab: "Q14bt",
                proofitInProgressTabContent: "_1jG5W",
                proofitInProgressTabTitleContainer: "_4LXE5",
                proofitInProgressTabTitle: "_2bY4K",
                proofitInProgressTabTitleContainerMultiple: "_24oEX",
                proofitInProgressTabTitleMain: "_3LF4o",
                fade: "_3Ae2t",
                proofitInProgressTabTitleSecondary: "_3iGar",
                proofitInProgressTabCompletionBar: "h2POd"
            }
        }
    }
]);
