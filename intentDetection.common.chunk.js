(self.webpackChunk = self.webpackChunk || []).push([
    [806], {
        20544: (e, t, n) => {
            n.r(t), n.d(t, {
                IntentDetection: () => i,
                IntentDetectionFeature: () => s
            });
            var i, o = n(74850),
                c = n(79961),
                l = n(14601),
                d = n(95300);
            ! function(e) {
                let t;
                ! function(e) {
                    e.ACCURATE = "ACCURATE", e.INACCURATE = "INACCURATE"
                }(t = e.IntentDetectionFeedback || (e.IntentDetectionFeedback = {}))
            }(i || (i = {}));
            class s {
                constructor(e, t, n) {
                    this._browser = e, this._getCheckingService = t, this._gnar = n, this._subs = new l.w, this._log = o.Y.create("IntentDetectionFeature"), this._currentIntentDetectionInfo = null, this._currentlyVisibleIntentDetectionItemLabel = null, this._intentDetectionItemsAcknowledged = new Set, this.intentDetectionInfo = new d.X(null)
                }
                onIntentDetectionMessage(e) {
                    var t, n;
                    let i = e.intent.aggregated.length > 0 ? {
                        predictionId: e.intent.aggregated[0].id,
                        label: e.intent.aggregated[0].prediction.label,
                        emojiUnicode: e.intent.aggregated[0].prediction.bundle.title_icon_id,
                        title: e.intent.aggregated[0].prediction.bundle.title,
                        browser: this._browser
                    } : null;
                    if (i && this._intentDetectionItemsAcknowledged.has(null == i ? void 0 : i.label) && (this._log.trace("New intent detection info was already ack'd by the user, considering it `null`:", i), i = null), (null === (t = this._currentIntentDetectionInfo) || void 0 === t ? void 0 : t.label) !== (null == i ? void 0 : i.label)) {
                        if (this._log.trace("Updating current intent detection info:", i), this._currentIntentDetectionInfo = i, this.intentDetectionInfo.next(this._currentIntentDetectionInfo), this._currentIntentDetectionInfo || (this._currentlyVisibleIntentDetectionItemLabel = null), this._currentIntentDetectionInfo) {
                            const e = null === (n = this._getCheckingService()) || void 0 === n ? void 0 : n.sessionUuid;
                            e && this._gnar.intentInfoReceived(this._currentIntentDetectionInfo.predictionId, this._currentIntentDetectionInfo.label, e)
                        }
                    } else this._log.trace("New intent detection info is the same that we currently have, nothing to do:", i)
                }
                onIntentDetectionFeedback(e, t) {
                    const n = this._getCheckingService(),
                        o = null == n ? void 0 : n.sessionUuid;
                    e === i.IntentDetectionFeedback.ACCURATE ? (this._log.trace("Sending INTENT_ACCEPTED feedback to CAPI:", t), null == n || n.onIntentFeedback(c.l.Intent.FeedbackType.INTENT_ACCEPTED, t.predictionId), o && this._gnar.intentYesButtonClick(t.predictionId, t.label, o)) : e === i.IntentDetectionFeedback.INACCURATE && (this._log.trace("Sending INTENT_IGNORED feedback to CAPI:", t), null == n || n.onIntentFeedback(c.l.Intent.FeedbackType.INTENT_IGNORED, t.predictionId), o && this._gnar.intentNoButtonClick(t.predictionId, t.label, o)), this._intentDetectionItemsAcknowledged.add(t.label)
                }
                onIntentDetectionItemShow(e) {
                    var t, n;
                    if (this._currentlyVisibleIntentDetectionItemLabel !== e.label) {
                        this._log.trace("Sending INTENT_ALERT feedback to CAPI:", e), this._currentlyVisibleIntentDetectionItemLabel = e.label, null === (t = this._getCheckingService()) || void 0 === t || t.onIntentFeedback(c.l.Intent.FeedbackType.INTENT_ALERT, e.predictionId);
                        const i = null === (n = this._getCheckingService()) || void 0 === n ? void 0 : n.sessionUuid;
                        i && this._gnar.intentShow(e.predictionId, e.label, i)
                    }
                }
                onIntentDetectionItemExpand(e) {
                    var t, n;
                    this._log.trace("Sending INTENT_LOOKED feedback to CAPI:", e), null === (t = this._getCheckingService()) || void 0 === t || t.onIntentFeedback(c.l.Intent.FeedbackType.INTENT_LOOKED, e.predictionId);
                    const i = null === (n = this._getCheckingService()) || void 0 === n ? void 0 : n.sessionUuid;
                    i && this._gnar.intentCardExpanded(e.predictionId, e.label, i)
                }
                onIntentDetectionViewModelDisposed() {
                    this._currentlyVisibleIntentDetectionItemLabel = null
                }
                dispose() {
                    this._subs.unsubscribe()
                }
            }
        }
    }
]);
