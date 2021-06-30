(self.webpackChunk = self.webpackChunk || []).push([
    [94], {
        44827: (e, t, s) => {
            s.r(t), s.d(t, {
                BoomerangButtonService: () => h
            });
            var n = s(2844),
                a = s(80900),
                i = s(17343),
                r = s(93508),
                o = s(28043),
                l = s(85985);
            const c = s(74850).Y.create("BoomerangButtonService");
            class h {
                constructor(e, t, s, c) {
                    this._boomerangService = e, this._serviceState = t, this._popupState = s, this._updatePopupState = c, this._subs = [], this.onButtonClick = () => {
                        this._togglePopup()
                    }, this._subs.push((0, n.aj)([this._boomerangService.state, (0, a.H)(300).pipe((0, i.h)(!0), (0, r.O)(!1))]).pipe((0, o.x)()).subscribe((([{
                        status: e,
                        hasText: t
                    }, s]) => {
                        s && (t ? this._serviceState.set("getFeedback") : t || "IDLE" !== e || this._serviceState.set("none"))
                    }))), this._subs.push((0, n.aj)([this._boomerangService.state]).pipe((0, l.h)((([{
                        linkId: e
                    }]) => !!e))).subscribe((() => {
                        this._showWaitingBanner()
                    })))
                }
                _togglePopup() {
                    "none" === this._popupState.get().type ? this._updatePopupState({
                        type: "boomerang",
                        boomerang: this._boomerangService
                    }) : this._updatePopupState({
                        type: "none"
                    })
                }
                _showWaitingBanner() {
                    this._serviceState.set("waitingForFeedback")
                }
                dispose() {
                    try {
                        this._subs.forEach((e => e.unsubscribe()))
                    } catch (e) {
                        c.warn("Failed to dispose", e)
                    }
                }
            }
        },
        67758: (e, t, s) => {
            s.r(t), s.d(t, {
                BoomerangService: () => l
            });
            var n = s(92783),
                a = s(78674),
                i = s(2834),
                r = s(69184),
                o = s(38983);
            class l {
                constructor(e, t, s, l, c, h, m) {
                    this.browser = e, this._getSharedLink = t, this._getReviewFeedback = s, this._openAssistant = l, this._closePopup = c, this._textObserver = h, this._gnar = m, this._subs = [], this._intervalId = null, this._submissionsPerLink = {}, this._requestLinkErrors = [], this._state = o.h.create({
                        status: "IDLE",
                        linkId: "",
                        isLinkRegenerated: !1,
                        hasText: !1,
                        numberOfViews: 0,
                        reviewers: []
                    }), this.state = this._state.view(), this.sharedLink = this._state.lens("linkId").view((e => `${(0,n.Um)().boomerangReviewerUI}${e}`)), this.getSharedLink = (e = !1) => {
                        var t;
                        this._requestLinkErrors = [], this._gnar.boomerangGenerateLinkButtonClick(e, "boomerang-popup"), this._state.set({
                            ...this._state.get(),
                            status: "REQUESTING_LINK",
                            isLinkRegenerated: e
                        }), null === (t = this._getSharedLink()) || void 0 === t || t.then((t => {
                            this._gnar.boomerangSharedLinkReceived(e), this._state.set({
                                ...this._state.get(),
                                status: "RECEIVED_LINK",
                                linkId: t,
                                reviewers: [],
                                numberOfViews: 0
                            }), this._startPollingForFeedback(), this.copySharedLinkToClipboard()
                        })).catch((() => {
                            this._gnar.boomerangSharedLinkRequestFailed(e, this._requestLinkErrors && this._requestLinkErrors.join("; ")), this._state.lens("status").set("ERROR")
                        }))
                    }, this.copySharedLinkToClipboard = () => {
                        (e => {
                            const t = document.createElement("textarea");
                            t.value = e, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
                        })(this.sharedLink.get())
                    }, this.openAssistantClick = () => {
                        this._gnar.boomerangViewReviewsButtonClick("boomerang-popup"), this._closePopup(), this._openAssistant(null, null, r.Rx.boomerangPopup)
                    }, this.trackShowPopup = () => {
                        this._gnar.boomerangPopupShow()
                    };
                    this._textObserver.getTextSource().getPlainText().trim() && this._state.lens("hasText").set(!0), this._subs.push(this._textObserver.contentChanges.async.pipe((0, a.b)(1e3), (0, i.b)((({
                        newText: e
                    }) => {
                        const t = this._state.lens("status").get();
                        "REQUESTING_LINK" !== t && "RECEIVED_LINK" !== t || (this._gnar.boomerangTextChangedAfterLinkRequest(), this._state.lens("status").set("TEXT_IS_CHANGED_AFTER_REQUEST")), this._state.lens("hasText").set(!!e.trim())
                    }))).subscribe())
                }
                _startPollingForFeedback() {
                    this._intervalId && self.clearInterval(this._intervalId), this._intervalId = self.setInterval((() => {
                        this._getReviewFeedback(this._state.lens("linkId").get())
                    }), 15e3)
                }
                onReviewProgress({
                    sharedLink: e,
                    reviewers: t
                }) {
                    const s = t.filter((({
                        isFeedbackSubmitted: e
                    }) => !!e)).map((({
                        name: e
                    }) => e));
                    this._state.set({
                        ...this._state.get(),
                        reviewers: s,
                        numberOfViews: t.length
                    });
                    const n = this._submissionsPerLink[e] || 0,
                        a = s.length;
                    if (a > n) {
                        this._submissionsPerLink = {
                            ...this._submissionsPerLink,
                            [e]: s.length
                        };
                        for (let e = n + 1; e <= a; e++) this._gnar.boomerangReviewReceived(e)
                    }
                }
                onBoomerangError(e) {
                    "REQUESTING_LINK" === this._state.lens("status").get() && (this._requestLinkErrors = [...this._requestLinkErrors, e])
                }
                dispose() {
                    this._subs.forEach((e => e.unsubscribe())), this._intervalId && self.clearInterval(this._intervalId)
                }
            }
        },
        14891: (e, t, s) => {
            s.r(t), s.d(t, {
                BoomerangButton: () => o,
                BoomerangButtonTooltipMessage: () => l
            });
            var n = s(27378),
                a = s(20855),
                i = s(63758),
                r = s.n(i);
            const o = ({
                    tooltip: e = "",
                    onBoomerangButtonClick: t
                }) => n.createElement(a.u, {
                    message: e,
                    style: {
                        textAlign: "center"
                    },
                    offset: {
                        vertical: 2
                    }
                }, n.createElement("div", {
                    className: r().buttonContainer,
                    onClick: t
                }, n.createElement("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28 16C28 22.6271 22.6277 28 16 28C9.37287 28 4 22.6271 4 16C4 9.37235 9.37287 4 16 4C22.6277 4 28 9.37235 28 16Z",
                    fill: "#4A6EE0"
                }), n.createElement("path", {
                    d: "M15 11.5H13.5C12.3954 11.5 11.5 12.3954 11.5 13.5V19.5C11.5 20.6046 12.3954 21.5 13.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V18M16.5 16.5L21.5 11.5M21.5 11.5H17.5M21.5 11.5V15.5",
                    stroke: "white",
                    strokeLinecap: "round"
                })))),
                l = ({
                    boomerangServiceState: e
                }) => "getFeedback" === e ? n.createElement(n.Fragment, null, "Get writing suggestions", n.createElement("br", null), "from others.") : n.createElement(n.Fragment, null, "Review pending.", n.createElement("br", null), "Please don't close this tab.")
        },
        53580: (e, t, s) => {
            s.r(t), s.d(t, {
                BoomerangPopup: () => c
            });
            var n = s(27378),
                a = s(86705),
                i = s(24606),
                r = s(12187),
                o = s(5739),
                l = s(37798);
            const c = ({
                    boomerangState: e,
                    sharedLink: t,
                    browser: s,
                    getSharedLink: c,
                    copySharedLinkToClipboard: g,
                    trackShowPopup: _,
                    onOpenAssistantClick: E,
                    onClose: k
                }) => (n.useEffect((() => {
                    _()
                }), []), n.createElement("section", Object.assign({}, (0, r.Sh)(l.gButtonPopup, l.boomerangPopup)), n.createElement("button", Object.assign({}, (0, r.Sh)(l.btn, l.close), {
                    onClick: k,
                    "data-grammarly-part": "btnBoomerangPopupClose"
                })), n.createElement(o.F.section, null, n.createElement("div", {
                    className: l.header
                }, n.createElement("span", {
                    className: l.headerText
                }, "Project Boomerang"), n.createElement(a.v, {
                    browser: s,
                    className: l.betaBadge
                })), n.createElement("div", {
                    className: l.title
                }, "Get writing suggestions from others"), n.createElement("div", {
                    className: l.description
                }, "Please keep this browser tab open until review is complete."), e.view((({
                    status: s
                }) => "REQUESTING_LINK" === s ? n.createElement("div", Object.assign({}, (0, r.Sh)(l.generatingLink, l.row)), n.createElement("div", null, "Creating link..."), n.createElement(d, null)) : "ERROR" === s ? n.createElement(n.Fragment, null, n.createElement("div", {
                    className: l.warning
                }, "Failed to generate a link. Please try again later or contact support"), n.createElement(u, {
                    getSharedLink: c
                })) : "RECEIVED_LINK" === s ? n.createElement(n.Fragment, null, n.createElement(m, {
                    sharedLink: t,
                    copySharedLinkToClipboard: g
                }), n.createElement(p, {
                    boomerangState: e,
                    onOpenAssistantClick: E
                })) : "TEXT_IS_CHANGED_AFTER_REQUEST" === s ? n.createElement(n.Fragment, null, n.createElement(h, null), n.createElement(m, {
                    sharedLink: t,
                    copySharedLinkToClipboard: g
                }), n.createElement("div", {
                    className: l.generateNewLink
                }, n.createElement(i.z, {
                    kind: "link",
                    onClick: () => {
                        c(!0)
                    }
                }, "Create new link")), n.createElement(p, {
                    boomerangState: e,
                    onOpenAssistantClick: E
                })) : "IDLE" === s ? n.createElement(u, {
                    getSharedLink: c
                }) : null))))),
                h = () => n.createElement("div", {
                    className: l.warning
                }, "You made changes to your text. To share the latest version, create a new link. Reviewers will no longer be able use the old link."),
                m = ({
                    sharedLink: e,
                    copySharedLinkToClipboard: t
                }) => n.createElement("div", {
                    className: l.linkInputContainer
                }, n.createElement(o.F.input, {
                    className: l.linkInput,
                    type: "text",
                    defaultValue: e,
                    readOnly: !0
                }), n.createElement(i.z, {
                    containerClassName: l.copyLinkButton,
                    onClick: () => t()
                }, "Copy")),
                u = ({
                    getSharedLink: e
                }) => n.createElement(i.z, {
                    kind: "primary",
                    onClick: () => {
                        e()
                    },
                    containerClassName: l.ctaButton
                }, "Create link"),
                p = ({
                    boomerangState: e,
                    onOpenAssistantClick: t
                }) => n.createElement(o.F.section, {
                    className: l.statusContainer
                }, e.view((({
                    numberOfViews: e,
                    reviewers: s
                }) => s.length ? n.createElement("div", null, n.createElement("div", {
                    className: l.row
                }, n.createElement("div", null, "Feedback received"), n.createElement(g, {
                    onClick: t
                })), n.createElement("div", {
                    className: l.reviewers
                }, s.join(", "))) : e ? n.createElement("div", {
                    className: l.row
                }, n.createElement("div", null, "Viewed by ", e, " ", 1 === e ? "person" : "people"), n.createElement(d, null)) : n.createElement("div", {
                    className: l.row
                }, n.createElement("div", null, "Waiting for feedback..."), n.createElement(d, null))))),
                d = () => n.createElement("div", {
                    className: l.loaderContainer
                }, n.createElement("div", {
                    className: l.loaderIcon
                })),
                g = ({
                    onClick: e
                }) => n.createElement("div", {
                    className: l.openAssistantButton
                }, n.createElement(i.z, {
                    kind: "link",
                    onClick: e
                }, n.createElement("span", {
                    className: l.openAssistantIcon
                })))
        },
        86705: (e, t, s) => {
            s.d(t, {
                v: () => i
            });
            var n = s(27378),
                a = s(80895);
            const i = ({
                browser: e,
                className: t
            }) => "safari" !== e ? n.createElement(a.C, {
                title: "BETA",
                kind: "success",
                className: t
            }) : null
        },
        63758: e => {
            e.exports = {
                buttonContainer: "_1wKpU"
            }
        },
        37798: e => {
            e.exports = {
                boomerangPopup: "_1Ck9n",
                showWrapper: "_2EyfR",
                flipped: "_1u2aM",
                row: "_2vv5k",
                close: "MlGB0",
                header: "_2ju2B",
                headerText: "_3t7tQ",
                betaBadge: "_1SCEi",
                title: "_4chBV",
                description: "_2KhZo",
                warning: "qu8Xl",
                linkInputContainer: "_1_z_R",
                linkInput: "_1hLNT",
                linkInputhover: "u2h9G",
                linkInputfocus: "_2MxZw",
                copyLinkButton: "_3B24Z",
                generateNewLink: "_28CrS",
                generatingLink: "_22C5p",
                statusContainer: "_3xBKp",
                openAssistantButton: "_22ox9",
                openAssistantIcon: "vVFyz",
                reviewers: "_2gvEM",
                loaderContainer: "_3jfuu",
                loaderIcon: "_3XLA2",
                spin: "_2npWk"
            }
        }
    }
]);
