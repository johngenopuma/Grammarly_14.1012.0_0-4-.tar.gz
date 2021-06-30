(self.webpackChunk = self.webpackChunk || []).push([
    [391], {
        26172: (e, t, n) => {
            n.r(t), n.d(t, {
                OnboardingDialog: () => Q
            });
            var a = n(44577),
                s = n(26273),
                o = n(37896),
                r = n(27378),
                i = n(41263),
                l = n(6318),
                c = n(2780),
                p = n(68383),
                d = n(38983),
                h = n(5872),
                A = n(92783),
                u = n(62111),
                g = n(19106),
                m = n(1620),
                b = n(88326),
                k = n(33304),
                v = n.n(k);
            const E = e => r.createElement(b.M, {
                    clickHandler: e.clickHandler
                }, r.createElement("button", {
                    className: v().buttonPrimary
                }, e.children)),
                S = e => r.createElement(b.M, {
                    clickHandler: e.clickHandler
                }, r.createElement("button", {
                    className: v().buttonSecondary
                }, e.children));
            var y = n(43694),
                f = n.n(y);
            class C extends r.Component {
                constructor() {
                    super(...arguments), this.onClick = () => {
                        g.J.onboardingOverlayLetsWriteButtonClick("end-step"), this.props.onClose()
                    }
                }
                render() {
                    return r.createElement(r.Fragment, null, r.createElement("h3", {
                        className: f().header
                    }, "You’re all set. Happy writing!"), r.createElement(E, {
                        clickHandler: this.onClick
                    }, "Let’s Write"))
                }
            }
            class I extends r.Component {
                componentDidMount() {
                    g.J.onboardingOnboardingStepOverlayShow(this.props.stepName)
                }
                render() {
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        className: f().content
                    }, r.createElement("h3", {
                        className: f().header
                    }, this.props.header), r.createElement("p", {
                        className: f().text
                    }, this.props.text), r.createElement("div", {
                        className: f().footer
                    }, r.createElement("span", {
                        className: f().stepIndicator
                    }, this.props.currentStep, " of ", this.props.totalStep), r.createElement(E, {
                        clickHandler: this.props.onNext
                    }, "Next"))))
                }
            }
            var W = n(73580),
                x = n.n(W);
            const w = e => r.createElement(b.M, {
                clickHandler: e.onChange
            }, r.createElement("div", {
                className: x().checkboxWrapper,
                onClick: e.onChange
            }, r.createElement("div", {
                className: (0, h.cs)(x().checkbox, !0 === e.value && x().checkboxActive)
            }), r.createElement("span", {
                className: x().label
            }, e.label)));
            var z = n(32930),
                P = n(94633),
                R = n.n(P);
            const F = [{
                value: "british",
                title: "🇬🇧 British English"
            }, {
                value: "american",
                title: "🇺🇸 American English"
            }, {
                value: "australian",
                title: "🇦🇺 Australian English"
            }, {
                value: "canadian",
                title: "🇨🇦 Canadian English"
            }];
            class D extends r.Component {
                constructor() {
                    super(...arguments), this.state = {
                        dialect: this.defaultDialect,
                        autocorrect: this.props.personalizablePageState.autocorrectEnabled || !1,
                        defs: this.props.personalizablePageState.enabledDefs
                    }, this.onSave = () => {
                        const e = this.props.personalizeActions;
                        this.state.dialect && e.changeStrongDialect(this.state.dialect), e.toggleAutocorrect(this.state.autocorrect), e.toggleDefs(this.state.defs), this.props.onNext(), g.J.onboardingOverlaySaveButtonClick("personalize-step")
                    }, this.onSkip = () => {
                        g.J.onboardingOverlaySkipPersonalizationButtonClick("personalize-step"), this.props.onNext()
                    }
                }
                get defaultDialect() {
                    return this.props.personalizablePageState.dialectStrong || this.props.personalizablePageState.dialectWeak
                }
                render() {
                    return r.createElement("div", {
                        className: R().personalizeStep
                    }, r.createElement("h2", {
                        className: R().header
                    }, "Personalize Grammarly to meet your writing needs."), r.createElement("div", {
                        className: R().formWrapper
                    }, r.createElement(z.P, {
                        label: "I write in:",
                        options: F,
                        onChange: e => this.setState({
                            dialect: e
                        }),
                        defaultValue: this.defaultDialect
                    }), r.createElement(w, {
                        onChange: () => this.setState({
                            autocorrect: !this.state.autocorrect
                        }),
                        value: this.state.autocorrect,
                        label: "Correct spelling automatically"
                    }), r.createElement(w, {
                        onChange: () => this.setState({
                            defs: !this.state.defs
                        }),
                        value: this.state.defs,
                        label: "Show synonyms and definitions"
                    })), r.createElement("div", {
                        className: R().footer
                    }, r.createElement(S, {
                        clickHandler: this.onSkip
                    }, "Skip"), r.createElement(E, {
                        clickHandler: this.onSave
                    }, "Save")))
                }
            }
            var J;
            ! function(e) {
                e[e.checkWriting = 0] = "checkWriting", e[e.acceptSuggestion = 1] = "acceptSuggestion", e[e.popupEditor = 2] = "popupEditor", e[e.personalize = 3] = "personalize", e[e.end = 4] = "end"
            }(J || (J = {}));
            const _ = {
                    [J.checkWriting]: "https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-check-text.mp4",
                    [J.acceptSuggestion]: "https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-accept-suggestion.mp4",
                    [J.popupEditor]: "https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-popup-editor.mp4",
                    [J.end]: "https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-white-G.mp4"
                },
                N = {
                    [J.checkWriting]: "data:image/png;base64,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"
                };
            var Z = n(12187);
            const B = [J.checkWriting, J.acceptSuggestion, J.popupEditor, J.personalize, J.end];
            class V extends r.Component {
                constructor() {
                    super(...arguments), this.state = {
                        stepIndex: 0
                    }, this.goToNextStep = () => {
                        this.state.stepIndex < B.length - 1 && this.setState({
                            stepIndex: this.state.stepIndex + 1
                        })
                    }
                }
                componentDidMount() {
                    g.J.onboardingOverlayShow(), (0, u.T)().onboardingTutorialShow()
                }
                get currentStep() {
                    return B[this.state.stepIndex]
                }
                renderStep() {
                    const e = {
                            onClose: this.props.onClose,
                            onNext: this.goToNextStep,
                            key: this.currentStep
                        },
                        t = {
                            ...e,
                            currentStep: this.state.stepIndex + 1,
                            totalStep: B.filter((e => e !== J.end)).length
                        };
                    switch (this.currentStep) {
                        case J.checkWriting:
                            return r.createElement(I, Object.assign({}, t, {
                                stepName: "checkWriting",
                                header: "When you see the Grammarly logo, it means Grammarly is checking your writing.",
                                text: "When Grammarly finds an issue, you’ll see a red number. When it’s green, it means Grammarly found no issue."
                            }));
                        case J.acceptSuggestion:
                            return r.createElement(I, Object.assign({}, t, {
                                stepName: "acceptSuggestion",
                                header: "Review and accept Grammarly suggestions as you’re writing.",
                                text: "Hover on underlines to see Grammarly’s suggestion and click to apply the change."
                            }));
                        case J.popupEditor:
                            return r.createElement(I, Object.assign({}, t, {
                                stepName: "popupEditor",
                                header: "Click the Grammarly logo to go deeper.",
                                text: "Clicking the Grammarly logo will open an editing window. Here you can see additional details about Grammarly’s suggestions."
                            }));
                        case J.personalize:
                            return r.createElement(D, Object.assign({}, e, {
                                personalizeActions: this.props.personalizeActions,
                                personalizablePageState: this.props.personalizablePageState,
                                saveAnonymousProps: this.props.saveAnonymousProps
                            }));
                        case J.end:
                            return r.createElement(C, Object.assign({}, e));
                        default:
                            return null
                    }
                }
                renderVideoWithPreload() {
                    return B.map(((e, t) => !!_[e] && t <= this.state.stepIndex + 1 && r.createElement("video", Object.assign({
                        key: t
                    }, (0, Z.Sh)(f().video, this.currentStep === e && f().show), {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        preload: "auto",
                        poster: N[e]
                    }), r.createElement("source", {
                        src: _[e]
                    }))))
                }
                render() {
                    return r.createElement("div", Object.assign({}, (0, Z.Sh)(f().onboardingTour, this.currentStep === J.end && f().white)), r.createElement("div", {
                        className: f().close
                    }, r.createElement(m.P, {
                        onClick: () => {
                            g.J.onboardingOverlayCloseButtonClick("dialog"), this.props.onClose()
                        },
                        hoverable: !1
                    })), this.renderVideoWithPreload(), this.renderStep())
                }
            }
            var H = n(33163);
            class O extends r.Component {
                constructor() {
                    super(...arguments), this._containerRef = null, this.state = {
                        hide: !1
                    }, this.onClose = e => {
                        e && e.stopPropagation(), this.setState({
                            hide: !0
                        }), this._containerRef && this._containerRef.addEventListener("animationend", (() => this.props.onClose()))
                    }, this.setOnboardingRef = e => {
                        e && !this._containerRef ? (this._containerRef = e, this._containerRef.addEventListener("click", this.preventClick)) : !e && this._containerRef && (this._containerRef.removeEventListener("click", this.preventClick), this._containerRef = null)
                    }, this.preventClick = e => {
                        e.stopPropagation(), e.stopImmediatePropagation()
                    }
                }
                componentDidMount() {
                    this._sub = this.props.shouldClose.subscribe((e => {
                        e && this.onClose()
                    }))
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._sub) || void 0 === e || e.unsubscribe()
                }
                render() {
                    const e = (0, h.cs)({
                        [H.onboardingDialog]: !0,
                        [H.hide]: this.state.hide,
                        [H.windows]: (0, A.ED)()
                    });
                    return r.createElement("div", {
                        ref: this.setOnboardingRef,
                        className: e,
                        "data-grammarly-part": "onboarding"
                    }, r.createElement("div", {
                        className: H.content
                    }, r.createElement("div", {
                        className: H.viewContainer
                    }, r.createElement(V, {
                        onClose: this.onClose,
                        personalizeActions: this.props.personalizeActions,
                        personalizablePageState: this.props.personalizablePageState,
                        saveAnonymousProps: this.props.saveAnonymousProps
                    }))))
                }
            }
            class Q extends((0, o.qH)(a.u)) {
                constructor({
                    doc: e,
                    saveAnonymousProps: t,
                    personalizeActions: n,
                    personalizablePageState: a
                }) {
                    super(), this.view = null, this.shouldClose = d.h.create(!1), this.onKey = e => {
                        (0, o.rw)(e) === o.DG && this.view && this.shouldClose.set(!0)
                    }, this.onClose = () => {
                        this.emit("hide"), this.remove()
                    }, this.component = () => (r.useEffect((() => ((0, s.o)(this.doc.defaultView, "keydown", this.onKey, !1), () => (0, s.E)(this.doc.defaultView, "keydown", this.onKey, !1))), []), r.createElement(i.L, {
                        chunkName: "onboardingDialog"
                    }, r.createElement(O, {
                        saveAnonymousProps: this.saveAnonymousProps,
                        personalizeActions: this.personalizeActions,
                        personalizablePageState: this.personalizablePageState,
                        onClose: this.onClose,
                        shouldClose: this.shouldClose
                    }))), this.doc = e, this.saveAnonymousProps = t, this.personalizeActions = n, this.personalizablePageState = a, this.createView()
                }
                createView() {
                    if (!this.view) {
                        const e = this.component;
                        this.view = l.VB.get({
                            monitorAs: "onboarding"
                        }).inject(c.EM.fromDocument(this.doc, "grammarly-onboarding"), c.zs.appendChild(this.doc.documentElement), p.G7.showWhenLoaded(r.createElement(e, null)))
                    }
                }
                remove() {
                    this.view && (this.view.dispose(), this.view = null)
                }
            }
        },
        33163: e => {
            e.exports = {
                onboardingDialog: "_2PUCY",
                gr__onboarding_dialog_appear: "_2kQom",
                viewContainer: "_2r76m",
                experimentSize: "_3QRBn",
                view: "iXxau",
                windows: "_3YNSP",
                footer: "_220RP",
                hide: "_2crZn",
                gr__onboarding_dialog_disappear: "_3pI3R",
                content: "_2WdMd",
                gr__centered_onboarding_dialog_content_disappear: "_1MuSx",
                gr__centered_onboarding_dialog_content_appear: "_1PPL8"
            }
        },
        33304: e => {
            e.exports = {
                buttonPrimary: "DeSZy",
                buttonSecondary: "_19BHo"
            }
        },
        73580: e => {
            e.exports = {
                checkboxWrapper: "_1nbHQ",
                checkbox: "_1rrFK",
                checkboxActive: "_3QCtQ",
                label: "_2uB3E"
            }
        },
        43694: e => {
            e.exports = {
                onboardingTour: "_1kT00",
                close: "_1d9eL",
                video: "_1EkJs",
                show: "_30F92",
                content: "_26qzv",
                header: "_5zyYS",
                text: "_1nSmD",
                footer: "_1U2Zt",
                stepIndicator: "_1ASb6",
                white: "_1a0vu"
            }
        },
        94633: e => {
            e.exports = {
                personalizeStep: "_3UcZy",
                header: "_2WHOT",
                formWrapper: "_18hhZ",
                footer: "_3Laiq"
            }
        }
    }
]);
