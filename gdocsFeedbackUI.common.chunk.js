(self.webpackChunk = self.webpackChunk || []).push([
    [628], {
        51897: (e, t, a) => {
            var o = a(25682),
                n = "chrome-extension://__MSG_@@extension_id__/",
                r = "moz-extension://__MSG_@@extension_id__/",
                l = self.GR_RESOURCE_ROOT || n,
                c = self.GR_RESOURCE_ROOT || r;
            e.exports = {
                __css: o.toString().replace(new RegExp(n, "g"), l).replace(new RegExp(r, "g"), c),
                ...o.locals
            }
        },
        6028: (e, t, a) => {
            a.r(t), a.d(t, {
                GdocsFeedbackUI: () => c
            });
            var o = a(27378),
                n = a(19106),
                r = a(67166),
                l = a(53844);
            class c extends o.Component {
                constructor() {
                    super(...arguments), this._close = () => this.props.close(), this._onSubmitFeedback = e => {
                        n.J.feedbackSentButtonClick(e.text, "gdocs", e.score)
                    }
                }
                render() {
                    return o.createElement(r.X, {
                        mainContent: o.createElement(l.q, {
                            title: o.createElement("span", null, "How do you like ", o.createElement("br", null), " Grammarly for Google Docs?"),
                            onClose: this._close,
                            onSubmit: this._onSubmitFeedback,
                            style: {
                                height: 528
                            },
                            withScore: !0
                        }),
                        onClose: this._close
                    })
                }
            }
        },
        95888: (e, t, a) => {
            a.d(t, {
                J: () => i
            });
            var o = a(27378),
                n = a(53112);
            const r = ({
                color: e = n.Z.neutral0
            }) => o.createElement("svg", {
                width: "16",
                height: "13",
                viewBox: "0 0 16 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.createElement("g", {
                filter: "url(#filter0_d)"
            }, o.createElement("path", {
                d: "M3 5L6.5 8.5L13 2",
                stroke: e,
                strokeWidth: "2"
            })), o.createElement("defs", null, o.createElement("filter", {
                id: "filter0_d",
                x: "0.292892",
                y: "0.292847",
                width: "15.4142",
                height: "12.6213",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, o.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), o.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), o.createElement("feOffset", {
                dy: "1"
            }), o.createElement("feGaussianBlur", {
                stdDeviation: "1"
            }), o.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.211765 0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0.5 0"
            }), o.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), o.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))));
            var l = a(12187),
                c = a(53358);
            const i = ({
                onChange: e = (() => null),
                labelId: t,
                className: a,
                children: n
            }) => {
                const [i, s] = o.useState(!1);
                o.useEffect((() => {
                    e(i)
                }), [i]);
                const d = e => {
                    e.preventDefault(), e.stopPropagation(), s(!i)
                };
                return o.createElement("div", {
                    "data-grammarly-part": "ui-kit-checkbox",
                    className: a
                }, o.createElement("div", {
                    className: c.checkboxContainer
                }, o.createElement("div", Object.assign({}, (0, l.Sh)(c.checkbox, i ? c.checkboxChecked : null), {
                    role: "checkbox",
                    "aria-checked": i,
                    tabIndex: 0,
                    "aria-labelledby": t,
                    onKeyDown: e => {
                        " " === e.key && d(e)
                    },
                    onClick: d
                }), i ? o.createElement(r, null) : null), o.createElement("label", {
                    id: t,
                    onClick: d
                }, n)))
            }
        },
        47422: (e, t, a) => {
            a.d(t, {
                z: () => i
            });
            var o = a(27378),
                n = a(84488),
                r = a(68370),
                l = a(51897),
                c = a.n(l);
            const i = ({
                placeholder: e,
                onChange: t,
                ariaLabel: a,
                className: l
            }) => {
                const [i, s] = o.useState("");
                return o.useEffect((() => {
                    t(i)
                }), [i]), o.createElement(n.G, {
                    "data-grammarly-part": "ui-kit-textbox",
                    className: l,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, o.createElement(r.b, null, c().__css), o.createElement("div", {
                    role: "textbox",
                    className: c().textBox,
                    contentEditable: !0,
                    onInput: e => s(e.target.innerText),
                    "data-placeholder": e,
                    "aria-placeholder": e,
                    "aria-label": a
                }))
            }
        },
        53844: (e, t, a) => {
            a.d(t, {
                q: () => p,
                d: () => k
            });
            var o = a(27378),
                n = a(12187),
                r = a(21420);
            const l = ({
                options: e,
                onChange: t = (() => null),
                ariaLabel: a,
                className: l
            }) => {
                const c = [],
                    [i, s] = o.useState(null);
                o.useEffect((() => {
                    var a;
                    null !== i && (null === (a = c[i]) || void 0 === a || a.focus()), t(null !== i ? e[i].value : null)
                }), [i]);
                const d = null !== i ? e[i] : null;
                return o.createElement("div", {
                    "data-grammarly-part": "ui-kit-radio-group",
                    className: l
                }, o.createElement("div", {
                    className: r.radioGroup,
                    role: "radiogroup",
                    "aria-label": a,
                    onKeyDown: t => {
                        if (" " !== t.key || d) {
                            if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                s(((i || 0) + 1) % e.length)
                            } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                const a = (i || 0) - 1;
                                s(a < 0 ? e.length - 1 : a)
                            }
                        } else t.preventDefault(), t.stopPropagation(), s(0)
                    }
                }, e.map(((e, t) => {
                    const a = (null == d ? void 0 : d.value) === e.value,
                        l = 0 === t;
                    return o.createElement("div", Object.assign({
                        key: e.value
                    }, (0, n.Sh)(r.radioGroupOption, a ? r.radioGroupOptionSelected : null), {
                        role: "radio",
                        tabIndex: a || l && !d ? 0 : -1,
                        "aria-checked": a,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), s(t)
                        },
                        ref: e => c.push(e)
                    }), e.render())
                }))))
            };
            var c, i = a(24606),
                s = a(47422),
                d = a(95888),
                m = a(53112),
                u = a(5872),
                f = a(51217),
                b = a(44544);

            function k(e) {
                return "score" in e
            }! function(e) {
                e.bad = "bad", e.ok = "ok", e.good = "good"
            }(c || (c = {}));
            const p = e => {
                const t = [c.bad, c.ok, c.good],
                    [a, r] = o.useState(null),
                    [k, p] = o.useState(""),
                    [h, g] = o.useState(!1),
                    [x, v] = o.useState(!1);
                let S;
                return S = x ? o.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-thank-you"
                }, (0, n.Sh)(f.feedbackFormContainer, f.feedbackFormContainerAlignCenter)), o.createElement("div", {
                    className: f.feedbackFormSuccessMessageTextContainer
                }, o.createElement("div", {
                    className: f.feedbackFormSuccessMessageIcon
                }), o.createElement("div", {
                    className: f.feedbackFormSuccessMessageTitle
                }, "Thank you!"), o.createElement("div", {
                    className: f.feedbackFormSuccessMessageSubtitle
                }, "Your feedback helps us improve.")), o.createElement(i.z, {
                    containerClassName: (0, u.cs)(f.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? f.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    onClick: e.onClose,
                    style: {
                        height: "32px"
                    }
                }, "Done")) : o.createElement("div", Object.assign({
                    "data-grammarly-part": "surveys-feedback-form-fields"
                }, (0, n.Sh)(f.feedbackFormContainer, "center" === e.align ? f.feedbackFormContainerAlignCenter : null)), o.createElement("div", {
                    className: f.feedbackFormFields
                }, e.hideLogo ? null : o.createElement("div", {
                    className: f.feedbackFormLogo
                }), o.createElement("div", {
                    className: f.feedbackFormTitle
                }, e.title || o.createElement("span", null, "How do you like ", o.createElement("br", null), " Grammarly?")), e.withScore ? o.createElement(o.Fragment, null, o.createElement(l, {
                    ariaLabel: "Feedback Score",
                    options: t.map((e => ({
                        value: e,
                        render() {
                            let t, a;
                            return e === c.bad ? (t = b.feedbackFormOptionIconDisheartening, a = "Dissatisfied") : e === c.ok ? (t = b.feedbackFormOptionIconNeutral, a = "It's Ok") : (t = t = b.feedbackFormOptionIconSmiling, a = "Satisfied"), o.createElement("div", {
                                className: b.feedbackFormOption
                            }, o.createElement("div", Object.assign({}, (0, n.Sh)(b.feedbackFormOptionIcon, t))), o.createElement("div", null, a))
                        }
                    }))),
                    onChange: r,
                    className: f.feedbackFormScore
                }), o.createElement("div", {
                    className: f.feedbackFormTextBoxTitle
                }, "How can we improve?")) : null, o.createElement(s.z, {
                    onChange: p,
                    placeholder: "Tell us what you think",
                    ariaLabel: "Feedback Text",
                    className: f.feedbackFormTextBox
                }), e.domain ? o.createElement(o.Fragment, null, o.createElement("div", {
                    className: f.feedbackFormShareDomainTitle
                }, "Help improve Grammarly by sharing the domain you’re on:"), o.createElement(d.J, {
                    labelId: "feedback-form-share-domain-checkbox",
                    onChange: g,
                    className: f.feedbackFormShareDomainCheckbox
                }, "Include the domain ", o.createElement("b", null, e.domain), " with my feedback")) : null), o.createElement(i.z, {
                    containerClassName: (0, u.cs)(f.feedbackFormSubmitButton, e.fixSubmitButtonOverflowBottomPadding ? f.feedbackFormSubmitButtonFixOverflowBottomPadding : null),
                    kind: "success",
                    type: "submit",
                    disabled: e.withScore ? !a : !k,
                    onClick: () => {
                        var t, o;
                        e.withScore && a ? (null === (t = e.onSubmit) || void 0 === t || t.call(e, {
                            score: a,
                            text: k,
                            domain: h ? e.domain : void 0
                        }), v(!0)) : !e.withScore && k && (null === (o = e.onSubmit) || void 0 === o || o.call(e, {
                            text: k,
                            domain: h ? e.domain : void 0
                        }), v(!0))
                    },
                    style: {
                        height: "32px",
                        background: (e.withScore ? a : k) ? void 0 : m.Z.neutral40
                    }
                }, "Submit")), o.createElement("div", {
                    style: {
                        height: "100%",
                        ...e.style
                    },
                    "data-grammarly-part": "surveys-feedback-form"
                }, S)
            };
            p.defaultProps = {
                hideLogo: !1,
                align: "center",
                fixSubmitButtonOverflowBottomPadding: !1
            }
        },
        25682: (e, t, a) => {
            var o = a(93476)((function(e) {
                return e[1]
            }));
            o.push([e.id, "._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}", ""]), o.locals = {
                textBox: "_380Y1-textBox"
            }, e.exports = o
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
        }
    }
]);
