(self.webpackChunk = self.webpackChunk || []).push([
    [158], {
        54338: (e, t, n) => {
            n.d(t, {
                f: () => r
            });
            var r, a = n(27378);
            ! function(e) {
                e.empty = {
                    hovered: void 0,
                    disabled: void 0,
                    active: void 0
                }, e.withValue = (e, t) => Object.assign(Object.assign({}, e), t), e.emptyWithName = t => e.withValue(e.empty, {
                    name: t
                }), e.Context = a.createContext(e.empty)
            }(r || (r = {}))
        },
        71284: (e, t, n) => {
            n.d(t, {
                a: () => r
            });
            var r, a = n(27378),
                o = n(88056),
                i = n(95195);
            ! function(e) {
                let t;
                ! function(e) {
                    e.supportsSVGDominantBaseline = "supportsSVGDominantBaseline", e.supportsSetGoalsLoader = "supportsSetGoalsLoader", e.onlyTrustedEvents = "onlyTrustedEvents"
                }(t = e.Flag || (e.Flag = {})), e.Context = a.createContext(o.Y.invariantContent("PlatformEnvironment"));
                e.Mock = class {
                    constructor() {
                        this.has = () => !1, this.actions = {
                            openUrl: () => i.right(void 0),
                            openPopup: () => i.right(void 0)
                        }
                    }
                }
            }(r || (r = {}))
        },
        41488: (e, t, n) => {
            n.d(t, {
                l: () => r
            });
            var r, a = n(27378),
                o = n(5114),
                i = n(19962),
                s = n(18208),
                l = n(81531),
                c = n(95300),
                h = n(60797),
                d = n(66310),
                m = n(24209),
                u = n(85089),
                p = n(49708),
                f = n(85985),
                v = n(76974),
                g = n(98403),
                w = n(17343),
                E = n(93508),
                C = n(77176),
                b = n(2844),
                x = n(41398),
                y = n(19751),
                k = n(18625);
            ! function(e) {
                let t, n, r;
                ! function(e) {
                    e.nextLevel = (e, t) => ({
                        rect: e,
                        level: t + 1
                    })
                }(t = e.State || (e.State = {})),
                function(e) {
                    e.empty = {
                        top: 0,
                        bottom: 0
                    }
                }(n = e.Padding || (e.Padding = {})),
                function(e) {
                    e.root = "root", e.inherit = "inherit"
                }(r = e.ContainerType || (e.ContainerType = {})), e.withViewportContainer = function(t, n) {
                    return class extends a.Component {
                        constructor() {
                            super(...arguments), this._viewportEl = new c.X(o.none), this._onMount = e => {
                                this._viewportEl.next(o.fromNullable(e)), this.props.onMount && e && this.props.onMount(e)
                            }
                        }
                        render() {
                            const {
                                name: o,
                                children: s
                            } = this.props, l = this._viewportEl.pipe(h.oA, d.w((e => m.T(u.Qr, p.R(e, "transitionend").pipe(f.h((t => t.target === e))), v.of(!0).pipe(d.w(g.b2.rafScheduler))).pipe(w.h(e), E.O(e), C.U(i.Rect.fromEl))))), c = n.type === r.root ? e.RootVirtualContainer : e.InheritVirtualContainer;
                            return a.createElement(t, Object.assign({}, this.props, {
                                onMount: this._onMount,
                                name: o
                            }), a.createElement(c, {
                                viewport: l,
                                name: o
                            }, s))
                        }
                    }
                }, e.RootVirtualContainer = ({
                    viewport: t,
                    viewportPadding: n = v.of(e.Padding.empty),
                    name: r,
                    children: o
                }) => {
                    const i = a.useContext(e.Context);
                    return a.createElement(e.Context.Provider, {
                        key: _(r),
                        value: b.aj(t, n, L).pipe(x.M(i.pipe(C.U((e => e.level))), e.State.nextLevel), y.d({
                            bufferSize: 1,
                            refCount: !0
                        }))
                    }, o)
                }, e.InheritVirtualContainer = ({
                    viewport: t,
                    viewportPadding: n = v.of(i.Rect.empty),
                    name: r,
                    children: s
                }) => {
                    const c = a.useContext(e.Context);
                    return a.createElement(e.Context.Provider, {
                        key: _(r),
                        value: b.aj(c.pipe(C.U((e => e.rect))), b.aj(t || c.pipe(C.U((e => e.rect))), n, L), i.Rect.intersection).pipe(C.U(o.getOrElse((() => (l.Monitoring.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport", {
                            name: r
                        }), i.Rect.empty)))), x.M(c.pipe(C.U((e => e.level))), e.State.nextLevel), y.d({
                            bufferSize: 1,
                            refCount: !0
                        }))
                    }, s)
                };
                const s = k.P((() => u.Qr.pipe(w.h(document.body), E.O(document.body), C.U(i.Rect.fromEl), C.U((e => ({
                    rect: e,
                    level: 0
                })))))).pipe(y.d({
                    bufferSize: 1,
                    refCount: !0
                }));
                e.Context = a.createContext(s)
            }(r || (r = {}));
            const L = (e, t) => ({
                    top: e.top + t.top,
                    bottom: e.bottom - t.bottom,
                    height: e.height - t.top - t.bottom,
                    left: e.left,
                    right: e.right,
                    width: e.width
                }),
                _ = e => `viewportProvider${s.camelize(e)}`
        },
        29847: (e, t, n) => {
            n.d(t, {
                l5: () => L,
                EJ: () => _,
                T9: () => N
            });
            var r = n(27378),
                a = n(71249),
                o = n(57050),
                i = n(40327),
                s = n(38983),
                l = n(5739),
                c = n(93508),
                h = n(77176),
                d = n(16118),
                m = n(32952),
                u = n(98403),
                p = n(44586),
                f = n(76974),
                v = n(24209),
                g = n(38062),
                w = n(50628),
                E = n(80900),
                C = n(17343),
                b = n(60797),
                x = n(69935),
                y = n(19751),
                k = n(5114);
            class L extends r.Component {
                constructor() {
                    super(...arguments), this._state = this.props.state.pipe(c.O(void 0), h.U(((e, t) => ({
                        state: e,
                        key: t
                    }))), d.G(), h.U((([e, t]) => {
                        const n = this.props.stateToClassMapper(e.state, t.state);
                        return {
                            prev: {
                                key: e.key,
                                state: e.state,
                                view: z(n.prev)
                            },
                            next: {
                                key: t.key,
                                state: t.state,
                                view: z(n.next)
                            }
                        }
                    }))), this._elements = s.h.create(M.empty), this._done = new m.xQ, this._subs = []
                }
                componentDidMount() {
                    const {
                        children: e
                    } = this.props;
                    this._subs.push(this._state.pipe(h.U((({
                        prev: t,
                        next: n
                    }) => {
                        const r = e;
                        return void 0 === e ? M.empty : [(0, i.pipe)(t.state, k.fromNullable, k.map((e => r({
                            state: e,
                            view: t.view,
                            type: "prev",
                            done: () => this._done.next("prev")
                        }))), k.chain(k.fromNullable), k.map((e => ({
                            key: t.key,
                            entry: e
                        })))), (0, i.pipe)(r({
                            state: n.state,
                            view: n.view,
                            type: "next"
                        }), k.fromNullable, k.map((e => ({
                            key: n.key,
                            entry: e
                        }))))]
                    }))).subscribe(u.wW(this._elements)), this._done.subscribe((e => {
                        "prev" === e && this._elements.modify((([e, t]) => [k.none, t])), "next" === e && this._elements.set(M.empty)
                    })))
                }
                componentWillUnmount() {
                    this._subs.forEach((e => e.unsubscribe())), this._subs = []
                }
                render() {
                    const {
                        children: e,
                        className: t,
                        onMount: n,
                        onMouseDown: o
                    } = this.props;
                    return e ? r.createElement(l.F.div, {
                        className: t,
                        mount: n,
                        onMouseDown: o
                    }, this._elements.view(a.array.compact).view((e => e.map((e => r.createElement(r.Fragment, {
                        key: e.key
                    }, e.entry)))))) : null
                }
            }
            const _ = e => ({
                start: e,
                end: e
            });
            var M;

            function z({
                start: e,
                end: t
            }) {
                return p.y.create((n => {
                    n.next(e);
                    const r = requestAnimationFrame((() => requestAnimationFrame((() => n.next(t)))));
                    return () => cancelAnimationFrame(r)
                }))
            }! function(e) {
                e.empty = [k.none, k.none]
            }(M || (M = {}));
            const N = e => {
                const t = e.content.pipe(h.U((t => ({
                    className: e.classes.rendered,
                    el: t,
                    onTransitionEnd: o.constVoid
                }))), h.U(k.some), c.O(k.none), d.G(), h.U((([t, n]) => (0, i.pipe)(t, k.fold((() => k.map(f.of)(n)), (t => (0, i.pipe)(n, k.map((n => {
                    const r = new m.xQ;
                    return v.T(f.of({
                        className: e.classes.removing,
                        el: t.el,
                        onTransitionEnd: () => r.next()
                    }), g.S3(r.pipe(w.P()), E.H(e.timeout)).pipe(C.h(n)))
                })))))))), b.oA, x.B(), y.d({
                    refCount: !0,
                    bufferSize: 1
                }));
                return r.createElement(l.F.div, {
                    className: t.pipe(h.U((e => e.className))),
                    onTransitionEnd: t.pipe(h.U((e => e.onTransitionEnd)))
                }, t.pipe(h.U((e => e.el))))
            }
        },
        18890: (e, t, n) => {
            n.d(t, {
                Y: () => y
            });
            var r = n(59312),
                a = n(27378),
                o = n(80493),
                i = n(40327),
                s = n(38983),
                l = n(5739),
                c = n(12187),
                h = n(8125),
                d = n(5114),
                m = n(81531),
                u = n(54338),
                p = n(16951),
                f = n(3656),
                v = n(32952),
                g = n(77176),
                w = n(73711),
                E = n(43965);
            const C = e => e ? -1 : 0;
            var b, x;
            ! function(e) {
                e[e.button = 0] = "button", e[e.div = 1] = "div", e[e.link = 2] = "link"
            }(b || (b = {}));
            class y extends a.Component {
                constructor(e, t) {
                    super(e), this._hovered = s.h.create(!1), this.mouseDownEvents = new v.xQ, this._setInternals(e), this._isHovered = void 0 !== t.hovered ? s.h.combine(t.hovered, this._hovered, h.or) : this._hovered
                }
                static get _log() {
                    return void 0 === this.__buttonLogger && (this.__buttonLogger = m.Monitoring.Logging.getLogger("Button")), this.__buttonLogger
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this._setInternals(e)
                }
                render() {
                    const e = {
                            hovered: this._isHovered,
                            disabled: "boolean" == typeof this._isDisabled ? s.h.create(this._isDisabled) : this._isDisabled,
                            active: "boolean" == typeof this._isActive ? s.h.create(this._isActive) : this._isActive
                        },
                        t = this._getElement(this.props.tag, this.props.href);
                    return a.createElement(u.f.Context.Provider, {
                        value: e
                    }, this.props.title ? a.createElement(p.u, {
                        title: this.props.title,
                        align: this.props.titleAlign || "auto"
                    }, t) : t)
                }
                _getElement(e, t) {
                    return void 0 === t || e !== b.link && e ? e === b.button ? this._genButtonEl() : this._genDivEl() : this._genLinkEl()
                }
                get _name() {
                    const e = this.props.name,
                        t = "string" == typeof e ? e : e.get();
                    return void 0 !== this.context.name ? `${this.context.name}/${t}` : t
                }
                _setInternals(e) {
                    const {
                        onClick: t,
                        isDisabled: n
                    } = e.onClick ? this._getGenericButtonInternals(e.onClick, e.disabled) : {
                        onClick: void 0,
                        isDisabled: void 0 !== e.disabled && e.disabled
                    };
                    this._onClick = e => (y._log.info("Button clicked: " + this._name), t && t(e).catch((e => y._log.error("Button click failed: " + this._name, e)))), this._isDisabled = n, this._isActive = void 0 !== e.active && e.active
                }
                _genLinkEl() {
                    return this.props.styleType ? a.createElement(f.ZT, Object.assign({
                        styleType: this.props.styleType,
                        nodeType: "a"
                    }, this._getLinkRenderProps())) : a.createElement(l.F.a, Object.assign({}, this._getLinkRenderProps()))
                }
                _genDivEl() {
                    return this.props.styleType ? a.createElement(f.ZT, Object.assign({
                        styleType: this.props.styleType,
                        nodeType: "div"
                    }, this._getDivRenderProps())) : a.createElement(l.F.div, Object.assign({}, this._getDivRenderProps()))
                }
                _genButtonEl() {
                    return this.props.styleType ? a.createElement(f.ZT, Object.assign({
                        styleType: this.props.styleType,
                        nodeType: "button"
                    }, this._getButtonRenderProps(this.props.role))) : a.createElement(l.F.button, Object.assign({}, this._getButtonRenderProps(this.props.role)))
                }
                _getLinkRenderProps() {
                    return this._getBaseRenderProps(Object.assign({
                        href: this.props.href,
                        target: this.props.target,
                        rel: this.props.rel,
                        role: "button"
                    }, (0, c.Sh)(w.lH, this.props.className)))
                }
                _getDivRenderProps() {
                    return this._getBaseRenderProps({
                        role: "button",
                        className: this.props.className
                    })
                }
                _getButtonRenderProps(e = "button") {
                    return this._getBaseRenderProps({
                        type: e,
                        className: this.props.className
                    })
                }
                _getBaseRenderProps(e) {
                    const t = (0, i.pipe)(d.fromNullable(this.props.textPosition), d.fold((() => x.parseFromNodes(this.props.children)), d.some), d.map((e => ({
                        "data-textpos": e
                    }))), d.getOrElse((() => ({}))));
                    return Object.assign(Object.assign({
                        onClick: this._onClick,
                        onMouseOver: () => this._hovered.set(!0),
                        onMouseLeave: () => this._hovered.set(!1),
                        onMouseDown: ({
                            pageX: e,
                            pageY: t
                        }) => this.mouseDownEvents.next({
                            pageX: e,
                            pageY: t
                        }),
                        onKeyDown: e => {
                            " " !== e.key && "Enter" !== e.key || (e.target.click(), e.preventDefault())
                        },
                        "data-name": this._name,
                        "data-disabled": this._isDisabled,
                        "aria-disabled": this._isDisabled,
                        "data-active": this._isActive,
                        "data-hovered": this._isHovered,
                        style: this.props.style,
                        children: this._renderChildren(),
                        tabIndex: "boolean" == typeof this._isDisabled ? C(this._isDisabled) : (0, i.pipe)(this._isDisabled, g.U(C))
                    }, t), e)
                }
                _renderChildren() {
                    return this.props.animationMode && this.props.animationMode !== E.m.None ? this._renderChildrenAsArray().concat(this._renderRippleAnimation()) : this.props.children
                }
                _renderChildrenAsArray() {
                    return Array.isArray(this.props.children) ? [].concat.apply([], this.props.children) : [this.props.children]
                }
                _renderRippleAnimation() {
                    return a.createElement(E.H, {
                        key: "ripple",
                        animationMode: this.props.animationMode || E.m.FromClickPoint,
                        mouseDownEvents: this.mouseDownEvents
                    })
                }
                _getGenericButtonInternals(e, t = !1) {
                    const n = s.h.create(!1),
                        r = "boolean" == typeof t ? n.view((e => t || e)) : s.h.combine(t, n, h.or);
                    return {
                        onClick: this._decorateOnClickWithStateManager(e, (e => n.set(e)), (() => r.get())),
                        isDisabled: r
                    }
                }
                _decorateOnClickWithStateManager(e, t, n) {
                    return a => (0, r.__awaiter)(this, void 0, void 0, (function*() {
                        if (a.stopPropagation(), !n()) {
                            t(!0);
                            try {
                                return this._hovered.set(!1), yield e(a)
                            } finally {
                                t(!1)
                            }
                        }
                    }))
                }
            }
            y.displayName = "BaseButton", y.contextType = u.f.Context, y.__buttonLogger = void 0,
                function(e) {
                    const t = new Map([
                        ["+", "everywhere"],
                        ["++", "everywhere"],
                        ["+-", "left"],
                        ["-+", "right"],
                        ["+++", "everywhere"],
                        ["+-+", "everywhere"],
                        ["++-", "left"],
                        ["-++", "right"],
                        ["-+-", "surrounded"]
                    ]);
                    e.parseFromNodes = function(e) {
                        const n = o.isFragment(e) ? e.props.children : e,
                            r = (Array.isArray(n) ? n : [n]).map((e => "string" == typeof e ? "+" : "-")).join("");
                        return d.fromNullable(t.get(r))
                    }
                }(x || (x = {}))
        },
        73711: (e, t, n) => {
            n.d(t, {
                LI: () => h,
                Mp: () => d,
                vD: () => m,
                T$: () => u,
                ix: () => p,
                fk: () => f,
                UF: () => v,
                $H: () => g,
                HN: () => w,
                lH: () => E,
                ru: () => C,
                oc: () => b,
                bC: () => x
            });
            var r = n(90351),
                a = n(63969),
                o = n(40219);
            const i = e => Object.assign(Object.assign({}, e.default), {
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true']": Object.assign({}, e.hovered),
                        "&[data-disabled='true']": Object.assign({}, e.disabled),
                        "&:not([data-disabled='true']):active": Object.assign({}, e.clicked),
                        "&[data-active='true']": Object.assign({}, e.toggled),
                        "&:focus": {
                            boxShadow: `0 0 0 2px ${r.Il.CoreBlue40}`
                        },
                        "&:focus:not(:focus-visible)": {
                            boxShadow: "none"
                        },
                        "&:focus-visible": {
                            boxShadow: `0 0 0 2px ${r.Il.CoreBlue40}`
                        }
                    }
                }),
                s = (e, t) => ({
                    $nest: {
                        "&[data-textpos='left']": {
                            padding: `0 ${t} 0 ${e}`
                        },
                        "&[data-textpos='right']": {
                            padding: `0 ${e} 0 ${t}`
                        },
                        "&[data-textpos='everywhere']": {
                            padding: `0 ${e} 0 ${e}`
                        }
                    }
                }),
                l = {
                    borderRadius: a.u.rem(o.fx)
                },
                c = i({
                    default: {
                        position: "relative",
                        display: "inline-block",
                        overflow: "hidden",
                        padding: 0,
                        outline: "none",
                        border: 0,
                        backgroundColor: "transparent",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                        cursor: "default",
                        userSelect: "none"
                    },
                    hovered: {
                        cursor: "pointer"
                    },
                    disabled: {
                        backgroundColor: "initial"
                    },
                    clicked: {},
                    toggled: {}
                }),
                h = a.u.style(c),
                d = a.u.style(c, l, i({
                    default: {
                        padding: `0 ${a.u.rem(.5)}`,
                        backgroundColor: "transparent",
                        color: r.Il.CoreBlue50,
                        lineHeight: a.u.rem(2),
                        transition: "background-color .2s"
                    },
                    hovered: {
                        backgroundColor: r.Il.CoreNeutral1
                    },
                    disabled: {
                        color: r.Il.CoreNeutral30,
                        fontWeight: "normal"
                    },
                    clicked: {
                        transition: "none",
                        transform: "scale(1)"
                    },
                    toggled: {}
                })),
                m = a.u.style({
                    display: "inline-flex"
                }),
                u = a.u.style(c, l, s(a.u.rem(r.Zh.ButtonPrimaryX), 0), i({
                    default: {
                        backgroundColor: r.Il.BackgroundButtonPrimaryNormal,
                        color: r.Il.CoreNeutral0,
                        lineHeight: a.u.rem(2),
                        transitionDuration: ".2s"
                    },
                    hovered: {
                        backgroundColor: r.Il.BackgroundButtonPrimaryHover,
                        $nest: {
                            "& > i": {
                                fill: r.Il.CoreNeutral0,
                                stroke: r.Il.CoreNeutral0
                            }
                        }
                    },
                    disabled: {
                        backgroundColor: r.Il.BackgroundButtonPrimaryDisabled,
                        color: r.Il.TextButtonPrimaryDisabled
                    },
                    clicked: {},
                    toggled: {}
                }), {
                    $nest: {
                        "& > i": {
                            fill: r.Il.CoreNeutral0,
                            stroke: r.Il.CoreNeutral0
                        }
                    }
                }),
                p = a.u.style(c, {
                    $nest: {
                        [`.${m} &`]: {
                            padding: `0 ${a.u.rem(.5)}`,
                            borderRight: `2px solid ${r.Il.CoreNeutral0}`,
                            borderRadius: 0,
                            $nest: {
                                "&:first-child": {
                                    borderRadius: `${a.u.rem(o.fx)} 0 0 ${a.u.rem(o.fx)}`
                                },
                                "&:last-child": {
                                    borderRight: "none",
                                    borderRadius: `0 ${a.u.rem(o.fx)} ${a.u.rem(o.fx)} 0`
                                }
                            }
                        },
                        [`.${m} &:not([data-active='true'])`]: {
                            backgroundColor: r.Il.CoreNeutral10
                        }
                    }
                }, i({
                    default: {
                        padding: `0 ${a.u.rem(.5)}`,
                        borderRadius: a.u.rem(o.fx),
                        backgroundColor: r.Il.CoreNeutral10,
                        color: r.Il.CoreBlue50,
                        textTransform: "capitalize",
                        letterSpacing: 0,
                        fontSize: a.u.rem(.875),
                        lineHeight: a.u.rem(2),
                        transitionDuration: ".2s"
                    },
                    hovered: {
                        backgroundColor: r.Il.CoreNeutral20
                    },
                    toggled: {
                        backgroundColor: r.Il.CoreBlue50,
                        color: r.Il.CoreNeutral0,
                        $nest: {
                            "&:hover": {
                                backgroundColor: r.Il.CoreBlue40,
                                color: r.Il.CoreNeutral0
                            }
                        }
                    },
                    disabled: {
                        backgroundColor: r.Il.CoreNeutral10,
                        color: r.Il.CoreNeutral50
                    },
                    clicked: {}
                })),
                f = a.u.style(c, l, s(a.u.rem(r.Zh.ButtonPrimaryX), 0), i({
                    default: {
                        display: "inline-flex",
                        color: r.Il.CoreBlue50,
                        lineHeight: a.u.rem(2),
                        transitionDuration: ".2s",
                        transitionProperty: "border, background, color",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    hovered: {
                        borderColor: r.Il.BackgroundButtonGhostHover,
                        background: r.Il.BackgroundButtonGhostHover
                    },
                    disabled: {
                        borderColor: r.Il.TextButtonGhostDisabled,
                        color: r.Il.TextButtonGhostDisabled
                    },
                    clicked: {},
                    toggled: {}
                }), {
                    $nest: {
                        "&[data-textpos] i[role='icon']": {
                            margin: `${a.u.rem(-.1)} ${a.u.rem(.25)} 0 0`
                        }
                    }
                }),
                v = a.u.style(c, l, s(a.u.rem(.5), 0), i({
                    default: {
                        display: "inline-flex",
                        color: r.Il.CoreNeutral50,
                        lineHeight: a.u.rem(2),
                        transitionDuration: ".2s",
                        transitionProperty: "border, background, color",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    hovered: {
                        background: r.Il.CoreNeutral1,
                        color: r.Il.CoreBlue50
                    },
                    disabled: {
                        color: r.Il.CoreNeutral30
                    },
                    clicked: {},
                    toggled: {}
                })),
                g = a.u.style(c, s(a.u.rem(1), a.u.rem(.5)), i({
                    default: {
                        display: "inline-flex",
                        color: r.Il.CoreNeutral90,
                        textAlign: "left",
                        fontWeight: "normal",
                        fontSize: a.u.rem(.875),
                        lineHeight: a.u.rem(2),
                        transitionDuration: ".2s",
                        alignItems: "center"
                    },
                    hovered: {
                        backgroundColor: r.Il.CoreNeutral10,
                        color: r.Il.CoreBlue50
                    },
                    disabled: {
                        color: r.Il.CoreNeutral40
                    },
                    clicked: {},
                    toggled: {}
                }), {
                    $nest: {
                        "&[data-textpos] i[role='icon']": {
                            margin: `${a.u.rem(-.1)} ${a.u.rem(.25)} 0 0`
                        }
                    }
                }),
                w = a.u.style(c, l, {
                    display: "flex",
                    margin: `0 ${a.u.rem(.5)} ${a.u.rem(.5)}`,
                    padding: `0 ${a.u.rem(.3)} 0 ${a.u.rem(.5)}`,
                    minHeight: a.u.rem(2),
                    color: r.Il.CoreNeutral70,
                    textAlign: "left",
                    whiteSpace: "normal",
                    fontWeight: "normal",
                    lineHeight: a.u.rem(1.2),
                    transition: "background .2s",
                    alignItems: "center",
                    $nest: {
                        "&[data-hovered='true']": {
                            background: r.Il.CoreNeutral10
                        },
                        "&[data-active='true']": {
                            background: r.Il.CoreNeutral20
                        }
                    }
                }),
                E = a.u.style({
                    textDecoration: "none"
                }),
                C = a.u.style({
                    display: "inline-flex",
                    justifyContent: "space-around",
                    $nest: {
                        "& > *:not(:first-child)": {
                            marginLeft: a.u.rem(.5)
                        }
                    }
                }),
                b = a.u.style({
                    display: "inline-flex",
                    flexDirection: "column",
                    $nest: {
                        "& > *": {
                            borderRadius: 0
                        }
                    }
                }),
                x = a.u.style({
                    whiteSpace: "pre-line"
                })
        },
        7046: (e, t, n) => {
            n.d(t, {
                zx: () => d,
                L_: () => m,
                RZ: () => u
            });
            var r = n(27378),
                a = n(5739),
                o = n(12187),
                i = n(94793),
                s = n(3656),
                l = n(18890),
                c = n(73711),
                h = n(43965);

            function d(e) {
                return r.createElement(l.Y, Object.assign({}, m(e, c.LI)))
            }

            function m(e, t) {
                const {
                    className: n
                } = (0, o.Sh)(e.className, t);
                return Object.assign(Object.assign({}, e), {
                    className: n
                })
            }! function(e) {
                e.Animated = e => r.createElement(l.Y, Object.assign({}, Object.assign(Object.assign({}, e), {
                    animationMode: e.animationMode || h.m.FromClickPoint
                }))), e.Primary = t => r.createElement(e.Animated, Object.assign({
                    styleType: s.ZT.Type.Button
                }, m(t, c.T$))), e.Ghost = t => r.createElement(e.Animated, Object.assign({
                    styleType: s.ZT.Type.Button
                }, m(t, c.fk))), e.Tertiary = t => r.createElement(e.Animated, Object.assign({
                    styleType: s.ZT.Type.Base
                }, m(t, c.UF))), e.Flat = t => r.createElement(e.Animated, Object.assign({}, m(t, c.$H))), e.White = t => r.createElement(e.Animated, Object.assign({}, m(t, c.ix))), e.SidebarFlat = e => r.createElement(l.Y, Object.assign({
                    styleType: s.ZT.Type.H3Legacy
                }, m(e, c.HN))), e.Caps = e => r.createElement(l.Y, Object.assign({
                    styleType: s.ZT.Type.H3Legacy
                }, m(e, c.Mp))), e.Group = ({
                    children: e,
                    className: t,
                    align: n = "horizontal",
                    sticky: i
                }) => r.createElement(a.F.div, Object.assign({}, (0, o.Sh)(t, "horizontal" === n ? i ? c.vD : c.ru : c.oc)), e)
            }(d || (d = {}));
            const u = ({
                title: e,
                titleAlign: t,
                buttonClass: n,
                iconClass: s,
                iconWidth: l,
                tooltipClass: h
            }) => r.createElement(d, {
                name: "info-button",
                title: r.createElement(a.F.div, Object.assign({}, (0, o.Sh)(c.bC, h)), r.createElement("p", null, e)),
                titleAlign: t,
                className: n
            }, r.createElement(i.JO.Info, {
                width: l,
                className: s
            }))
        },
        43965: (e, t, n) => {
            n.d(t, {
                m: () => r,
                H: () => p
            });
            var r, a = n(27378),
                o = n(38983),
                i = n(5739),
                s = n(22232),
                l = n(90351),
                c = n(63969),
                h = n(54338),
                d = n(2834),
                m = n(78674),
                u = n(77176);
            ! function(e) {
                e.None = "none", e.FromClickPoint = "fromClickPoint", e.FromCenter = "fromCenter"
            }(r || (r = {}));
            class p extends a.Component {
                constructor(e, t) {
                    super(e), this._ripples = o.h.create(Array()), this._disabled = o.h.create(!1).view(), this._disabled = void 0 === t.disabled ? this._disabled : t.disabled
                }
                componentDidMount() {
                    this._el && (this._subscription = this.props.mouseDownEvents.pipe(d.b((e => {
                        if (!this._disabled.get() && this._el) {
                            const t = this._getAnimationStyle(this._el, e);
                            this._ripples.modify((e => [...e, t]))
                        }
                    })), m.b(1e3), d.b((() => this._ripples.modify((() => []))))).subscribe())
                }
                componentWillUnmount() {
                    this._subscription && this._subscription.unsubscribe()
                }
                _getAnimationStyle(e, t) {
                    const n = e.getBoundingClientRect(),
                        a = n.width;
                    switch (this.props.animationMode) {
                        case r.None:
                            throw new s.ej("unsupported mode, do not mount component if you do not need ripple animation");
                        case r.FromCenter:
                            return {
                                className: E.rippleFromCenter, top: (n.height - a) / 2, left: 0, width: a, height: a
                            };
                        default:
                            return {
                                className: E.ripple, top: t.pageY - n.top - a / 2, left: t.pageX - n.left - a / 2, width: a, height: a
                            }
                    }
                }
                render() {
                    return a.createElement("span", {
                        className: E.rippleContainer,
                        ref: e => this._el = e
                    }, a.createElement(i.F.span, null, this._ripples.pipe(u.U((e => e.map(((e, t) => a.createElement("span", {
                        className: e.className,
                        key: t,
                        style: e
                    }))))))))
                }
            }
            p.contextType = h.f.Context;
            const f = c.u.keyframes({
                    to: {
                        opacity: 0,
                        transform: "scale(1)"
                    }
                }),
                v = c.u.keyframes({
                    to: {
                        opacity: 0,
                        transform: "scale(2)"
                    }
                }),
                g = {
                    position: "absolute",
                    borderRadius: c.u.percent(100),
                    backgroundColor: l.Il.CoreNeutral90,
                    opacity: .15,
                    transform: "scale(0)",
                    animation: `${v} .4s`
                },
                w = {
                    animationName: f
                },
                E = c.u.stylesheet({
                    rippleContainer: [{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        borderRadius: "inherit",
                        pointerEvents: "none"
                    }],
                    ripple: [g],
                    rippleFromCenter: [g, w]
                })
        },
        95286: (e, t, n) => {
            n.d(t, {
                L: () => O
            });
            var r = n(27378),
                a = n(40327),
                o = n(38983),
                i = n(12187),
                s = n(5739),
                l = n(16118),
                c = n(66310),
                h = n(80900),
                d = n(17343),
                m = n(76974),
                u = n(95093),
                p = n(77176),
                f = n(28043),
                v = n(2834),
                g = n(38194),
                w = n(93508),
                E = n(598),
                C = n(2844),
                b = n(24713),
                x = n(50628),
                y = n(32952),
                k = n(18208),
                L = n(19962),
                _ = n(5114),
                M = n(22232),
                z = n(8125),
                N = n(54338),
                H = n(71284),
                S = n(41488),
                B = n(29847),
                F = n(98403),
                A = n(47486);
            class D extends B.l5 {}
            class O extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = k.alphanumeric(12), this._initialState = !1, this._hovered = o.h.create(this._initialState), this._hidden = o.h.create(!this._initialState), this._listPosState = o.h.create({}), this._dropdownEl = null, this._subs = [], this._viewport = o.h.create(L.Rect.empty), this.hovered = this._hovered.pipe(l.G(), c.w((([e, t]) => t ? h.H(this.props.showDelay).pipe(d.h(!0)) : e ? h.H(void 0 === this.props.closeDelay ? O.defaultProps.closeDelay : this.props.closeDelay).pipe(d.h(!1)) : m.of(!1))), u.T(O._hoveredForce.pipe(p.U(_.exists((e => e === this._uuid))))), f.x(), v.b((e => e && O._hoveredForce.next(_.some(this._uuid)))), v.b((e => e && this._hidden.set(!1))), g.B(), w.O(this._initialState)), this._handleClickForAppearanceHover = e => {
                        const t = e.target;
                        if (L.isDisabled(t) || this.props.dontCloseOnClickInside) return;
                        const n = !L.hasParentWithClassName(t, A.P.list);
                        O._hoveredForce.next(n ? _.some(this._uuid) : _.none), this._hovered.set(n)
                    }, this._handleMouseEnterForAppearanceHover = () => {
                        this._hovered.set(!0)
                    }, this._handleClickForAppearanceClick = (e, t) => {
                        t && !e.isTrusted || this._hovered.modify((e => !e))
                    }, this._handleMouseEnterForAppearanceClick = e => {
                        const t = e.target;
                        L.hasParentWithClassName(t, A.P.list) && (O._hoveredForce.next(_.some(this._uuid)), this._hovered.set(!0))
                    }
                }
                _getHAlign(e) {
                    switch (e) {
                        case "left":
                        case "auto":
                            return {
                                left: "0"
                            };
                        case "right":
                            return {
                                right: "0"
                            };
                        case "center":
                            return {
                                right: "50%", marginRight: `-${(this._dropdownEl?this._dropdownEl.offsetWidth:0)/2}px`
                            };
                        default:
                            return (0, M.vE)(e)
                    }
                }
                _getVAlign(e) {
                    switch (e) {
                        case "top":
                            return {
                                bottom: "100%"
                            };
                        case "bottom":
                        case "auto":
                            return {
                                top: "100%"
                            };
                        default:
                            return (0, M.vE)(e)
                    }
                }
                calcDropdownPosition() {
                    const e = this.props.align,
                        t = this.props.vAlign;
                    this._listPosState.set(Object.assign(Object.assign({}, this._getHAlign(e)), this._getVAlign(t)));
                    const n = "auto" === e,
                        r = "auto" === t;
                    (n || r) && requestAnimationFrame((() => {
                        if (this._dropdownEl) {
                            const a = this._viewport.get(),
                                o = this._dropdownEl.getBoundingClientRect();
                            this._listPosState.set(Object.assign(Object.assign({}, this._getHAlign(n ? a.right < o.right ? "right" : "left" : e)), this._getVAlign(r ? a.bottom < o.bottom ? "top" : "bottom" : t)))
                        }
                    }))
                }
                componentDidMount() {
                    this._subs.push(this.hovered.pipe(v.b((e => {
                        this.props.onVisibilityChange && this.props.onVisibilityChange(e)
                    })), E.c((0, a.pipe)(_.fromNullable(this.props.customPosition), _.fold((() => m.of(_.none)), (({
                        top: e,
                        left: t
                    }) => C.aj(F.Dx(e), F.Dx(t)).pipe(p.U(_.some))))))).subscribe(_.fold((() => this.calcDropdownPosition()), (([e, t]) => this._listPosState.set({
                        top: e,
                        left: t
                    })))), this.context.pipe(b.j("rect")).subscribe(F.wW(this._viewport))), this.props.forceHide && this._subs.push(this._hidden.pipe(c.w(F.wX(this.props.forceHide.pipe(x.P())))).subscribe((() => this._hidden.set(!0))))
                }
                componentWillUnmount() {
                    this._subs.forEach((e => e.unsubscribe())), this._subs = []
                }
                componentWillReciveProps() {
                    this.calcDropdownPosition()
                }
                mapStateToClass(e, t) {
                    const n = {
                        start: "",
                        end: ""
                    };
                    return t ? {
                        prev: n,
                        next: {
                            start: A.P.transparent,
                            end: ""
                        }
                    } : {
                        prev: {
                            start: "",
                            end: A.P.transparent
                        },
                        next: n
                    }
                }
                _behaviour(e) {
                    return "mouseClick" === this.props.appearanceBehavior ? {
                        onClickCapture: t => this._handleClickForAppearanceClick(t, e),
                        onMouseEnter: this._handleMouseEnterForAppearanceClick,
                        onMouseLeave: () => this._hovered.set(this._initialState)
                    } : {
                        onClickCapture: this._handleClickForAppearanceHover,
                        onMouseEnter: this._handleMouseEnterForAppearanceHover,
                        onMouseLeave: () => this._hovered.set(this._initialState)
                    }
                }
                render() {
                    const {
                        label: e,
                        theme: t = {}
                    } = this.props;
                    return r.createElement(H.a.Context.Consumer, null, (n => r.createElement(N.f.Context.Consumer, null, (a => r.createElement(N.f.Context.Provider, {
                        value: N.f.withValue(a, {
                            hovered: this._hovered
                        })
                    }, r.createElement("div", Object.assign({}, (0, i.Sh)(A.P.wrapper, t.dropdownContainer), this._behaviour(n.has(H.a.Flag.onlyTrustedEvents))), e, r.createElement(D, {
                        state: this.hovered,
                        stateToClassMapper: this.mapStateToClass
                    }, (e => e.state ? r.createElement(V, Object.assign({
                        key: "list",
                        name: this.props.name,
                        onTransitionEnd: "prev" === e.type ? () => this._hidden.set(!0) : z.ZT
                    }, (0, i.Sh)(t.dropdownList, e.view, this._hidden.view((e => e ? A.P.hidden : ""))), {
                        mount: e => this._dropdownEl = e,
                        style: this._listPosState
                    }), this.props.children) : null))))))))
                }
            }
            O.defaultProps = {
                align: "auto",
                vAlign: "auto",
                showDelay: 500,
                closeDelay: 500,
                appearanceBehavior: "mouseHover"
            }, O.Delimiter = () => r.createElement("div", {
                className: A.P.delimiter
            }), O._hoveredForce = new y.xQ, O.contextType = S.l.Context;
            class V extends r.Component {
                constructor() {
                    super(...arguments), this._elementState = N.f.emptyWithName(`${void 0!==this.context.name?`${this.context.name}/`:""}dropdown-${this.props.name}`)
                }
                render() {
                    return r.createElement(N.f.Context.Provider, {
                        value: this._elementState
                    }, r.createElement(s.F.div, Object.assign({}, (0, i.Sh)(this.props.className, A.P.list), {
                        style: this.props.style,
                        mount: this.props.mount,
                        role: "dropdown-list",
                        "data-name": "dropdown-" + this.props.name,
                        onTransitionEnd: this.props.onTransitionEnd
                    }), this.props.children))
                }
            }
            V.displayName = "DropdownList", V.contextType = N.f.Context
        },
        47486: (e, t, n) => {
            n.d(t, {
                P: () => l
            });
            var r = n(90351),
                a = n(63969),
                o = n(40219);
            const i = {
                    position: "absolute",
                    zIndex: o.VN,
                    display: "flex",
                    flexDirection: "column",
                    margin: `${a.u.rem(.5)} 0`,
                    padding: `${a.u.rem(.5)} 0`,
                    minWidth: a.u.percent(100),
                    borderRadius: a.u.rem(o.Jr),
                    background: r.Il.CoreNeutral0,
                    boxShadow: r.uc.Z200,
                    opacity: 1,
                    transition: "opacity .2s"
                },
                s = {
                    margin: a.u.rem(.5),
                    height: a.u.px(1),
                    backgroundColor: r.Il.CoreNeutral20
                },
                l = {
                    wrapper: a.u.style({
                        position: "relative"
                    }),
                    list: a.u.style(i),
                    transparent: a.u.style({
                        opacity: 0
                    }),
                    hidden: a.u.style({
                        display: "none"
                    }),
                    delimiter: a.u.style(s)
                }
        },
        94793: (e, t, n) => {
            n.d(t, {
                n4: () => r,
                a1: () => C,
                JO: () => k,
                T1: () => L
            });
            var r, a = n(27378),
                o = n(45614),
                i = n(40327),
                s = n(5739),
                l = n(12187),
                c = n(97881),
                h = n(90351),
                d = n(63969),
                m = n(24588),
                u = n(40219),
                p = n(54338),
                f = n(76974),
                v = n(2844),
                g = n(77176);
            ! function(e) {
                e.down = "down", e.left = "left", e.right = "right", e.up = "up"
            }(r || (r = {}));
            const w = new Map([
                    [r.down, "0 3"],
                    [r.left, "8 0"],
                    [r.up, "10 8"],
                    [r.right, "2 10"]
                ]),
                E = new Map([
                    [r.down, "0"],
                    [r.left, "90"],
                    [r.up, "180"],
                    [r.right, "270"]
                ]);
            class C extends a.Component {
                render() {
                    return a.createElement(s.F.i, Object.assign({}, (0, l.Sh)($.icon, this.props.className), {
                        "data-disabled": this.context.disabled,
                        "data-hovered": this.context.hovered,
                        "data-active": this.context.active,
                        role: "icon"
                    }), a.createElement("svg", {
                        width: this.props.width,
                        viewBox: this.props.viewBox,
                        className: this.props.dontScale ? "" : $.holder,
                        fill: this.props.fill
                    }, this.props.children))
                }
            }
            C.contextType = p.f.Context;
            const b = e => {
                    const t = a.useContext(p.f.Context);
                    return a.createElement(s.F.i, Object.assign({}, (0, l.Sh)($.icon, e.className, e.dontScale ? "" : $.holder), {
                        "data-disabled": t.disabled,
                        "data-hovered": t.hovered,
                        "data-active": t.active,
                        role: "icon"
                    }), e.children)
                },
                x = ({
                    className: e,
                    children: t
                }) => {
                    const n = a.useContext(p.f.Context);
                    return a.createElement(s.F.i, Object.assign({}, (0, l.Sh)($.iconSimple, e), {
                        "data-disabled": n.disabled,
                        "data-hovered": n.hovered,
                        "data-active": n.active,
                        role: "icon"
                    }), t)
                };
            class y extends a.PureComponent {
                render() {
                    return a.createElement("path", Object.assign({
                        d: "M11.18 10.273c-.593 0-1.068.53-.952 1.14.08.46.522.784.997.784h1.496l.87-.115c-1.39 2.016-3.79 2.95-6.423 2.546-2.144-.334-3.988-1.774-4.765-3.79-1.762-4.575 1.6-8.942 5.97-8.942 2.285 0 4.28 1.325 5.427 2.927v.034c.3.438.903.565 1.344.254.417-.287.533-.83.278-1.266h.01C13.846 1.39 11.006-.19 7.793.018 3.633.318.247 3.705.015 7.853c-.278 4.828 3.57 8.768 8.37 8.768 2.516 0 4.766-1.093 6.307-2.856l-.184 1.014v.91c0 .472.325.91.788.99.615.116 1.148-.356 1.148-.944V10.26H11.18v.013z",
                        fill: "#FFF",
                        stroke: "none",
                        fillRule: "evenodd"
                    }, this.props))
                }
            }
            var k;
            y.size = 16.5,
                function(e) {
                    e.Library = ({
                        className: e,
                        width: t = 24
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 24 16"
                    }, a.createElement("path", {
                        d: "M22.16 8.5L18.44 2c-.36-.62-1.02-1-1.74-1H7.28c-.7 0-1.37.38-1.73 1L1.72 8.5h5.96c.27 0 .5.22.5.5 0 1.74 1.85 3.5 3.82 3.5 1.92 0 3.53-1.7 3.53-3.5 0-.28.22-.5.5-.5h6.13zm.34 1h-6c-.27 2.15-2.2 4-4.5 4-2.33 0-4.5-1.9-4.8-4H1.5V13c0 1.1.9 2 2 2h17c1.1 0 2-.9 2-2V9.5zM7.28 0h9.42c1.08 0 2.07.58 2.6 1.5l4.13 7.2c.05.1.07.17.07.26V13c0 1.66-1.34 3-3 3h-17c-1.66 0-3-1.34-3-3V8.74c0-.08.02-.17.07-.25L4.7 1.47C5.22.56 6.2 0 7.27 0z",
                        stroke: "none"
                    })), e.Plagiarism = ({
                        className: e,
                        width: t = 19
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 20 16"
                    }, a.createElement("path", {
                        d: "M11.1 7.38c-.27 0-.48-.2-.48-.48V.48c0-.27.2-.48.47-.48h6.57c.27 0 .48.2.48.48V6.9c0 4.5-1.65 7.37-5.57 9.06-.23.1-.5 0-.6-.2l-1.4-2.6c-.15-.23-.04-.54.2-.65 2.35-1.05 3.1-2.3 3.17-5.12H11.1zm6.1-.48V.96h-5.63v5.46h2.87c.26 0 .47.22.47.48 0 3.32-.78 5-3.25 6.26l.94 1.74c3.26-1.54 4.6-4 4.6-8zm-13.75.48H.6c-.28 0-.5-.2-.5-.48V.48C.1.2.33 0 .6 0h6.56c.27 0 .48.2.48.48V6.9c0 4.5-1.65 7.37-5.57 9.06-.23.1-.5 0-.6-.2l-1.4-2.6c-.14-.23-.04-.54.2-.65 2.35-1.05 3.1-2.3 3.18-5.12zM6.7 6.9V.96H1.05v5.46h2.87c.26 0 .48.22.48.48 0 3.32-.8 5-3.26 6.26l.95 1.74c3.25-1.54 4.6-4 4.6-8z",
                        stroke: "none"
                    })), e.PlagiarismOutcomes = ({
                        className: e,
                        width: t = 22
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 22 18"
                    }, a.createElement("path", {
                        d: "M17.41 9.75l-.67 1.17a14.42 14.42 0 0 1-3.4 3.84l.96 1.43a16.38 16.38 0 0 0 4.96-4.58A10.62 10.62 0 0 0 21 5.55a4 4 0 1 0-4.9 3.9l1.31.3zm-3.94 7l-.96-1.43c-.29-.43-.2-1.02.2-1.35 1.12-.93 1.96-1.8 2.59-2.66.21-.3.4-.6.57-.89A4.96 4.96 0 0 1 12 5.55a5 5 0 1 1 10 0c0 5.2-2.68 8.6-7.19 11.5a.98.98 0 0 1-1.34-.3zm-12 0l-.96-1.43c-.29-.43-.2-1.02.2-1.35 1.12-.93 1.96-1.8 2.59-2.66.21-.3.4-.6.57-.89A4.96 4.96 0 0 1 0 5.55a5 5 0 1 1 10 0c0 5.2-2.68 8.6-7.19 11.5a.98.98 0 0 1-1.34-.3zm3.94-7l-.67 1.17a14.42 14.42 0 0 1-3.4 3.84l.96 1.43a16.38 16.38 0 0 0 4.96-4.58A10.62 10.62 0 0 0 9 5.55a4 4 0 1 0-4.9 3.9l1.31.3z",
                        stroke: "none"
                    })), e.PlagiarismPublication = ({
                        className: e,
                        width: t = 16
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 16 16"
                    }, a.createElement("path", {
                        d: "M16 5.528V16H2c-1.105 0-2-.895-2-2V3.5l.05.048C.017 3.37 0 3.188 0 3c0-1.657 1.343-3 3-3h12.5c.412 0 .647.47.4.8-.563.75-.838 1.482-.838 2.2 0 .718.275 1.45.838 2.2.076.102.107.217.1.328zM14.588 1H3c-1.105 0-2 .895-2 2s.895 2 2 2h11.588c-.348-.658-.525-1.326-.525-2 0-.674.177-1.342.525-2z",
                        fillRule: "nonzero",
                        fill: "#A6ADC9",
                        stroke: "none"
                    })), e.Proofread = ({
                        className: e,
                        width: t = 24
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 24 21"
                    }, a.createElement("path", {
                        d: "M13.97 15.08c2.5 0 4.56-2.03 4.56-4.55 0-2.5-2.06-4.53-4.56-4.53-2.5 0-4.55 2.03-4.55 4.55 0 2.5 2.06 4.53 4.55 4.53zm-.62 7.9L14.3 24H7.58C6.17 24 5 22.84 5 21.43v-.7c0-2.82 2.2-5.2 5-5.4.14 0 .3.06.4.16.98.9 2.24 1.43 3.57 1.43 1.34 0 2.63-.52 3.58-1.44.1-.1.23-.17.38-.17 2.05.15 3.78 1.45 4.56 3.24l-.8.83c-.5-1.6-1.9-2.8-3.6-3-1.14 1-2.58 1.56-4.13 1.56-1.54 0-2.98-.54-4.1-1.57-2.17.27-3.84 2.12-3.84 4.33v.7c0 .85.7 1.54 1.54 1.54h5.78zm.62-15.95c1.93 0 3.53 1.57 3.53 3.52 0 1.93-1.57 3.52-3.53 3.52-1.92 0-3.52-1.56-3.52-3.52 0-1.95 1.6-3.52 3.52-3.52zm3.4 14.66l3.45 3.78 6.8-7.5c.2-.2.5-.2.72-.02.2.18.22.5.03.7l-7.18 7.9c-.2.22-.55.22-.75 0l-3.82-4.2c-.2-.2-.17-.52.03-.7.2-.2.52-.18.7.03z",
                        transform: "translate(-5 -6)",
                        stroke: "none"
                    })), e.ProofreadOutcomes = ({
                        className: e,
                        width: t = 23
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 23 23"
                    }, a.createElement("path", {
                        transform: "translate(-6 -5)",
                        stroke: "none",
                        d: "M15.5 6A3.5 3.5 0 0 0 12 9.5v2a3.5 3.5 0 0 0 7 0v-2A3.5 3.5 0 0 0 15.5 6zm1.5 9.744c-.47.166-.974.256-1.5.256s-1.03-.09-1.5-.256v1.02A2.5 2.5 0 0 1 12.618 19l-4.236 2.118A2.5 2.5 0 0 0 7 23.354V24h5a.5.5 0 1 1 0 1H6.5a.5.5 0 0 1-.5-.5v-1.146a3.5 3.5 0 0 1 1.935-3.13l4.236-2.118A1.5 1.5 0 0 0 13 16.764v-1.522a4.496 4.496 0 0 1-2-3.742v-2a4.5 4.5 0 1 1 9 0v2c0 1.56-.794 2.935-2 3.742V16.7c0 .593.349 1.13.89 1.371l3.313 1.472a.5.5 0 0 1-.406.914l-3.312-1.472A2.5 2.5 0 0 1 17 16.7v-.956zm11.146 2.402a.5.5 0 0 1 .708.708l-9 9a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708l3.646 3.647 8.646-8.647z"
                    })), e.NewBadge = ({
                        className: e
                    }) => a.createElement("div", Object.assign({}, (0, l.Sh)($.newIcon, e)), a.createElement("div", {
                        className: $.newIconCaption
                    }, "NEW")), e.NewBadgeWrapper = ({
                        children: t
                    }) => a.createElement("div", null, a.createElement(e.NewBadge, null), t), e.Exit = ({
                        className: e,
                        width: t = 14
                    }) => a.createElement(C, Object.assign({}, (0, l.Sh)($.exitIcon, e), {
                        width: t,
                        viewBox: "0 0 14 10"
                    }), a.createElement("path", {
                        d: "M8.08 0l4.96 4.96L8 10M1.08 0l4.96 4.96L1 10"
                    })), e.Arrow = ({
                        className: e,
                        width: t = 10,
                        direction: n = r.down
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 10 10"
                    }, a.createElement("path", {
                        d: "M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z",
                        stroke: "none",
                        transform: `translate(${w.get(n)}) rotate(${E.get(n)})`
                    })), e.Download = ({
                        className: e,
                        width: t = 16
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 16 18"
                    }, a.createElement("path", {
                        d: "M7.5 11.06V1c0-.27.22-.5.5-.5s.5.23.5.5v10.04l3.15-3.14c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L8 12.97 3.64 8.62c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l3.15 3.14zm-7 2c0-.26.22-.5.5-.5s.5.24.5.5v2.95c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .84-.67 1.5-1.5 1.5H2C1.2 17.5.5 16.84.5 16v-2.93z",
                        stroke: "none"
                    })), e.Print = ({
                        className: e,
                        width: t = 18
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 18 18"
                    }, a.createElement("path", {
                        d: "M2.5 3.5V1c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v2.5H17c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5h-1.5V17c0 .28-.22.5-.5.5H3c-.28 0-.5-.22-.5-.5v-4.5H1c-.28 0-.5-.22-.5-.5V4c0-.28.22-.5.5-.5h1.5zm0 8V8c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v3.5h1v-7h-15v7h1zm1-3v8h11v-8h-11zm0-7v2h11v-2h-11zm2.5 10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5H6zm0 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5H6z",
                        stroke: "none"
                    })), e.Copy = ({
                        className: e,
                        width: t = 18
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 18 18"
                    }, a.createElement("path", {
                        d: "M13.5 7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.38c.9 0 1.62.73 1.62 1.62v7.76c0 .9-.73 1.62-1.62 1.62H8.12c-.9 0-1.62-.73-1.62-1.62V13.5c0-.28.22-.5.5-.5s.5.22.5.5v2.38c0 .34.28.62.62.62h7.76c.34 0 .62-.28.62-.62V8.12c0-.34-.28-.62-.62-.62H13.5zM.5 2C.5 1.17 1.18.5 2 .5h8c.83 0 1.5.68 1.5 1.5v8c0 .83-.68 1.5-1.5 1.5H2c-.83 0-1.5-.68-1.5-1.5V2zm1 0v8c0 .27.23.5.5.5h8c.27 0 .5-.23.5-.5V2c0-.27-.23-.5-.5-.5H2c-.27 0-.5.23-.5.5z",
                        stroke: "none"
                    })), e.Share = ({
                        className: e,
                        width: t = 18
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 18 18"
                    }, a.createElement("path", {
                        d: "M15.7 5.45h-1.77c-4.33 0-7.85 3.5-7.85 7.83 0 .28-.22.5-.5.5-.27 0-.5-.22-.5-.5 0-4.88 3.97-8.83 8.85-8.83h1.84L12.6 1.28c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.35 4.34-4.36 4.36c-.2.2-.52.2-.7 0-.2-.2-.2-.5 0-.7l3.1-3.13zM.5 13.08c0-.28.22-.5.5-.5s.5.22.5.5v2.94c0 .27.22.5.5.5h12c.28 0 .5-.23.5-.5v-3c0-.3.22-.5.5-.5s.5.2.5.5v3c0 .82-.67 1.5-1.5 1.5H2C1.2 17.5.5 16.83.5 16v-2.94z",
                        stroke: "none"
                    })), e.Stats = ({
                        className: e,
                        width: t = 16
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 16 16"
                    }, a.createElement("path", {
                        d: "M2.5 12h-1V5h1v7zm-1 0V5c0-.67 1-.67 1 0v7c0 .67-1 .67-1 0zm4 0V6c0-.67 1-.67 1 0v6c0 .67-1 .67-1 0zm4 0V4c0-.67 1-.67 1 0v8c0 .67-1 .67-1 0zm4 0V1.14c0-.67 1-.67 1 0V12c0 .67-1 .67-1 0zm-13 3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5H.5z",
                        stroke: "none"
                    })), e.Star = ({
                        className: e,
                        width: t = 16
                    }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.starIcon), {
                        width: t,
                        viewBox: "0 0 16 16"
                    }), a.createElement("path", {
                        d: "M6.65 10.8l-4.02 2.72L4.03 9c.08-.24 0-.5-.2-.65L-.03 5.5l4.86-.1c.24 0 .45-.16.53-.38l1.6-4.5 1.62 4.5c.08.22.3.38.54.38l4.85.1-3.85 2.85c-.2.15-.28.4-.2.64l1.4 4.52-4.02-2.7c-.2-.14-.46-.14-.65 0z",
                        transform: "translate(1 1)",
                        strokeLinejoin: "round"
                    })), e.New = ({
                        className: e,
                        width: t = 18
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 18 18"
                    }, a.createElement("path", {
                        d: "M9.5 8.5H14c.28 0 .5.22.5.5s-.22.5-.5.5H9.5V14c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9.5H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5V4c0-.28.22-.5.5-.5s.5.22.5.5v4.5zm-.5 9C4.3 17.5.5 13.7.5 9S4.3.5 9 .5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zm0-1c4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5z",
                        stroke: "none"
                    })), e.Dict = ({
                        className: e,
                        width: t = 17
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 17 21"
                    }, a.createElement("path", {
                        d: "M1.5 15.26c.53-.47 1.23-.76 2-.76h9V10c0-.28.22-.5.5-.5s.5.22.5.5v5c0 .28-.22.5-.5.5H3.5c-1.1 0-2 .9-2 2s.9 2 2 2H13c.28 0 .5.22.5.5s-.22.5-.5.5H3.5c-1.66 0-3-1.34-3-3V5.14c0-.9.66-1.64 1.5-1.64h5c.28 0 .5.22.5.5s-.22.5-.5.5H2c-.26 0-.5.27-.5.64v10.12zm11-11.76V1c0-.28.22-.5.5-.5s.5.22.5.5v2.5H16c.28 0 .5.22.5.5s-.22.5-.5.5h-2.5V7c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5H10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.5zM3.5 18c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12c.28 0 .5.22.5.5s-.22.5-.5.5H3.5z",
                        stroke: "none"
                    })), e.Ignore = ({
                        className: e,
                        width: t = 18
                    }) => a.createElement(C, {
                        className: e,
                        width: t,
                        viewBox: "0 0 18 19"
                    }, a.createElement("path", {
                        d: "M5 3.5v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1h4c.28 0 .5.22.5.5s-.22.5-.5.5h-1.53l-.8 11.2c-.12 1.58-1.42 2.8-3 2.8H6.33c-1.58 0-2.88-1.22-3-2.8l-.8-11.2H1C.72 4.5.5 4.28.5 4s.22-.5.5-.5h4zm-1.46 1l.8 11.14c.07 1.05.94 1.86 2 1.86h5.33c1.05 0 1.92-.8 2-1.86l.8-11.14H3.53zM6 2.5v1h6v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1zM6.75 7c0-.28.22-.5.5-.5s.5.22.5.5v7.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7zm3.5 0c0-.28.22-.5.5-.5s.5.22.5.5v7.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7z",
                        stroke: "none"
                    }));
                    class t extends a.Component {
                        render() {
                            const {
                                className: e,
                                width: n = 16
                            } = this.props;
                            return this._idSuffix = this._idSuffix || "megaphone_" + t._nextIdSuffix++, a.createElement(C, {
                                className: e,
                                width: n,
                                viewBox: "0 0 20 20"
                            }, a.createElement("g", {
                                stroke: "none"
                            }, a.createElement("path", {
                                d: "M11.7797 14.3022C11.8035 15.2747 11.3069 16.2275 10.4041 16.74C9.50098 17.2518 8.42879 17.1893 7.60723 16.6709L6.49817 17.2993C7.31036 18.4503 9.43348 18.5122 10.9275 17.6637C12.4238 16.8153 13.4597 14.9609 12.8879 13.6731L11.7797 14.3022Z",
                                fill: `url(#paint0_linear_${this._idSuffix})`
                            }), a.createElement("path", {
                                d: "M1.05347 16.3869C1.05347 16.3869 -0.102468 17.1307 1.38347 18.6169C2.87034 20.1032 3.61253 18.9457 3.61253 18.9457L1.05347 16.3869Z",
                                fill: `url(#paint1_linear_${this._idSuffix})`
                            }), a.createElement("path", {
                                d: "M8.47503 1.60596L1.0569 16.335V16.336C0.530966 17.1469 2.85378 19.4728 3.66472 18.9431L18.3828 11.5322L8.47503 1.60596Z",
                                fill: `url(#paint2_linear_${this._idSuffix})`
                            }), a.createElement("path", {
                                d: "M19.0434 10.9432L18.6446 11.3416C17.6243 12.3616 14.5634 10.9513 11.8065 8.19379C9.04868 5.43567 7.63837 2.37442 8.65712 1.35535L9.0565 0.956604L19.0434 10.9432Z",
                                fill: `url(#paint3_linear_${this._idSuffix})`
                            }), a.createElement("path", {
                                d: "M15.8947 4.10531C18.6522 6.86281 20.0628 9.92437 19.0434 10.9431C18.024 11.9616 14.9625 10.5516 12.205 7.795C9.44716 5.03718 8.03716 1.975 9.05654 0.956558C10.0759 -0.062817 13.1359 1.34718 15.8947 4.10531Z",
                                fill: `url(#paint4_radial_${this._idSuffix})`
                            }), a.createElement("path", {
                                d: "M12.2012 7.78905C14.1547 9.74311 16.2622 11.0203 17.6856 11.2356C17.4628 9.81124 16.1897 7.71374 14.2422 5.76655C12.2872 3.81155 10.1812 2.53593 8.75623 2.32062C8.98029 3.74437 10.2534 5.84218 12.2012 7.78905Z",
                                fill: `url(#paint5_radial_${this._idSuffix})`
                            }), a.createElement("defs", null, a.createElement("linearGradient", {
                                id: `paint0_linear_${this._idSuffix}`,
                                x1: "10.9449",
                                y1: "17.6538",
                                x2: "9.67964",
                                y2: "15.4623",
                                gradientUnits: "userSpaceOnUse"
                            }, a.createElement("stop", {
                                stopColor: "#FF2121"
                            }), a.createElement("stop", {
                                offset: "0.3304",
                                stopColor: "#FC1F1F"
                            }), a.createElement("stop", {
                                offset: "0.5957",
                                stopColor: "#F2181B"
                            }), a.createElement("stop", {
                                offset: "0.8377",
                                stopColor: "#E10B13"
                            }), a.createElement("stop", {
                                offset: "1",
                                stopColor: "#D1000B"
                            })), a.createElement("linearGradient", {
                                id: `paint1_linear_${this._idSuffix}`,
                                x1: "1.04497",
                                y1: "16.3921",
                                x2: "2.83903",
                                y2: "19.4995",
                                gradientUnits: "userSpaceOnUse"
                            }, a.createElement("stop", {
                                stopColor: "#D9E0E4"
                            }), a.createElement("stop", {
                                offset: "0.2316",
                                stopColor: "#D6DDE1"
                            }), a.createElement("stop", {
                                offset: "0.8311",
                                stopColor: "#C2CACD"
                            })), a.createElement("linearGradient", {
                                id: `paint2_linear_${this._idSuffix}`,
                                x1: "3.91606",
                                y1: "4.23768",
                                x2: "10.6913",
                                y2: "15.9728",
                                gradientUnits: "userSpaceOnUse"
                            }, a.createElement("stop", {
                                stopColor: "#FF2121"
                            }), a.createElement("stop", {
                                offset: "0.3304",
                                stopColor: "#FC1F1F"
                            }), a.createElement("stop", {
                                offset: "0.5957",
                                stopColor: "#F2181B"
                            }), a.createElement("stop", {
                                offset: "0.8377",
                                stopColor: "#E10B13"
                            }), a.createElement("stop", {
                                offset: "1",
                                stopColor: "#D1000B"
                            })), a.createElement("linearGradient", {
                                id: `paint3_linear_${this._idSuffix}`,
                                x1: "8.32606",
                                y1: "6.31504",
                                x2: "19.0435",
                                y2: "6.31504",
                                gradientUnits: "userSpaceOnUse"
                            }, a.createElement("stop", {
                                stopColor: "#D9E0E4"
                            }), a.createElement("stop", {
                                offset: "0.2316",
                                stopColor: "#D6DDE1"
                            }), a.createElement("stop", {
                                offset: "0.8311",
                                stopColor: "#C2CACD"
                            })), a.createElement("radialGradient", {
                                id: `paint4_radial_${this._idSuffix}`,
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(14.05 5.94975) scale(5.31209 10.6762)"
                            }, a.createElement("stop", {
                                stopColor: "#D9E0E4"
                            }), a.createElement("stop", {
                                offset: "0.3011",
                                stopColor: "#D6DDE1"
                            }), a.createElement("stop", {
                                offset: "0.5285",
                                stopColor: "#C2CACD"
                            }), a.createElement("stop", {
                                offset: "0.7526",
                                stopColor: "#A2AAAD"
                            }), a.createElement("stop", {
                                offset: "1",
                                stopColor: "#A2AAAD"
                            })), a.createElement("radialGradient", {
                                id: `paint5_radial_${this._idSuffix}`,
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(13.2208 6.77573) scale(4.45006 3.13017)"
                            }, a.createElement("stop", {
                                stopColor: "#545061"
                            }), a.createElement("stop", {
                                offset: "0.2793",
                                stopColor: "#464253"
                            }), a.createElement("stop", {
                                offset: "0.6105",
                                stopColor: "#312D3D"
                            }), a.createElement("stop", {
                                offset: "0.7961",
                                stopColor: "#211D2D"
                            }), a.createElement("stop", {
                                offset: "0.9556",
                                stopColor: "#1A1626"
                            })))))
                        }
                    }
                    let n, o, i, c, h;
                    t._nextIdSuffix = 0, e.Megaphone = t, e.TextShort = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 16 13"
                        }, a.createElement("path", {
                            d: "M1 3.5H8M1 0.5H15",
                            strokeLinecap: "round"
                        })), e.TextMedium = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 16 13"
                        }, a.createElement("path", {
                            d: "M1 6.5H8M1 3.5H15M1 0.5H15",
                            strokeLinecap: "round"
                        })), e.TextLong = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 16 13"
                        }, a.createElement("path", {
                            d: "M1 6.5H15M1 3.5H15M1 12.5H8M1 0.5H15M1 9.5H15",
                            strokeLinecap: "round"
                        })), e.Mute = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 16 16"
                        }, a.createElement("path", {
                            d: "M13.0202 3.68689C13.2155 3.49162 13.2155 3.17504 13.0202 2.97978C12.825 2.78452 12.5084 2.78452 12.3131 2.97978L13.0202 3.68689ZM2.97978 12.3131C2.78452 12.5084 2.78452 12.825 2.97978 13.0202C3.17504 13.2155 3.49162 13.2155 3.68689 13.0202L2.97978 12.3131ZM12.3131 2.97978L2.97978 12.3131L3.68689 13.0202L13.0202 3.68689L12.3131 2.97978ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8H14.5C14.5 11.5899 11.5899 14.5 8 14.5V15.5ZM15.5 8C15.5 3.85786 12.1421 0.5 8 0.5V1.5C11.5899 1.5 14.5 4.41015 14.5 8H15.5ZM8 0.5C3.85786 0.5 0.5 3.85786 0.5 8H1.5C1.5 4.41015 4.41015 1.5 8 1.5V0.5ZM0.5 8C0.5 12.1421 3.85786 15.5 8 15.5V14.5C4.41015 14.5 1.5 11.5899 1.5 8H0.5Z",
                            stroke: "none"
                        })), e.Report = ({
                            className: e,
                            width: t = 15
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 15 17"
                        }, a.createElement("path", {
                            d: "M1.03 2.57V9.8h12.19l-2.96-3c-.2-.2-.2-.5-.02-.7l3.08-3.53H1.06h-.03zm0-1.04h13.43c.43 0 .67.53.38.86l-3.5 4 3.48 3.56c.32.33.1.88-.37.88H1.05h-.02v5.65c0 .27-.23.5-.5.5-.3 0-.53-.23-.53-.5V.5C0 .24.23 0 .52 0c.28 0 .5.23.5.5v1.03z",
                            stroke: "none"
                        })), e.Expand = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 18 5"
                        }, a.createElement("path", {
                            d: "M2.5 4.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z",
                            stroke: "none"
                        })), e.Reference = ({
                            className: e,
                            width: t = 13
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 13 19"
                        }, a.createElement("path", {
                            d: "M3 2v1h7V2h1.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.68 1.5-1.5 1.5h-10C.67 19 0 18.33 0 17.5v-14C0 2.67.68 2 1.5 2H3zm8.5 1h-10c-.27 0-.5.23-.5.5v14c0 .28.22.5.5.5h10c.27 0 .5-.23.5-.5v-14c0-.28-.22-.5-.5-.5zm-7.65 7.6l1.68 1.7 3.62-3.65c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L5.53 13.7l-2.38-2.4c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0zM9 3.5v-1c0-.56-.45-1-1-1H5c-.56 0-1 .44-1 1v1h5zm-6-1c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2V4c0 .28-.23.5-.5.5h-6c-.27 0-.5-.22-.5-.5V2.5z",
                            transform: "translate(0 -.5)",
                            stroke: "none"
                        })), e.Yes = ({
                            className: e,
                            width: t = 12
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.yesIcon), {
                            width: t,
                            viewBox: "0 0 12 10"
                        }), a.createElement("path", {
                            d: "M.54 4.35l2.98 3.12L9.46.53",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            transform: "translate(1 1)"
                        })), e.YesCircle = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.yesCircleIcon), {
                            width: t,
                            viewBox: "0 0 18 18"
                        }), a.createElement("circle", {
                            cx: "9",
                            cy: "9",
                            r: "8"
                        }), a.createElement("polyline", {
                            points: "5.5,10 8,12.5 13.5,7"
                        })), e.NoCircle = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noCircleIcon), {
                            width: t,
                            viewBox: "0 0 18 18"
                        }), a.createElement("circle", {
                            cx: "9",
                            cy: "9",
                            r: "8"
                        }), a.createElement("polyline", {
                            points: "5.5,9 12.5,9"
                        })), e.ValidationOk = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 18 18"
                        }, a.createElement("circle", {
                            cx: "9",
                            cy: "9",
                            r: "8",
                            fill: "#15C39A",
                            stroke: "#15C39A",
                            strokeWidth: "1"
                        }), a.createElement("polyline", {
                            points: "5.5,10 8,12.5 13.5,7",
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        })), e.ValidationWarning = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 18 18"
                        }, a.createElement("circle", {
                            cx: "9",
                            cy: "9",
                            r: "8",
                            fill: "none",
                            stroke: "#C6CBDE",
                            strokeWidth: "2"
                        })), e.Controls = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 20 17"
                        }, a.createElement("path", {
                            d: "M10 2a.5.5 0 000 1V2zm9 1a.5.5 0 000-1v1zM1 2a.5.5 0 000 1V2zm0 6a.5.5 0 000 1V8zm9 1a.5.5 0 000-1v1zm9 0a.5.5 0 000-1v1zm-7 5a.5.5 0 000 1v-1zm7 1a.5.5 0 000-1v1zM1 14a.5.5 0 000 1v-1zm9-11h9V2h-9v1zM1 3h4V2H1v1zm0 6h9V8H1v1zm14 0h4V8h-4v1zm-3 6h7v-1h-7v1zM1 15h6v-1H1v1zM7.5 2.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm8 7a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-4 7a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1z",
                            stroke: "none"
                        })), e.Checkmark = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            width: t,
                            className: e,
                            viewBox: "0 0 33 32"
                        }, a.createElement("defs", null, a.createElement("polyline", {
                            id: "path",
                            points: "7.35 14.35 11.9839764 19.5363636 27.65 3.5"
                        })), a.createElement("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2, 2)"
                        }, a.createElement("circle", {
                            id: "Oval",
                            stroke: "#F1F2FA",
                            strokeWidth: "3",
                            cx: "14",
                            cy: "14",
                            r: "14"
                        }), a.createElement("use", {
                            stroke: "#15C39A",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            xlinkHref: "#path"
                        }))), e.CheckmarkAnimated = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            width: t,
                            className: e,
                            viewBox: "0 0 33 32"
                        }, a.createElement("defs", null, a.createElement("polyline", {
                            id: "path",
                            points: "7.35 14.35 11.9839764 19.5363636 27.65 3.5"
                        })), a.createElement("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2, 2)"
                        }, a.createElement("circle", {
                            className: $.circle,
                            stroke: "#A6ADC9",
                            strokeWidth: "1.5",
                            cx: "14",
                            cy: "14",
                            r: "15",
                            transform: "rotate(-240, 14, 14) scale(-1,1) translate(-28, 0)"
                        }), a.createElement("use", {
                            stroke: "#15C39A",
                            className: $.checkmark,
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            xlinkHref: "#path"
                        }))), e.CheckmarkOutcomes = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, {
                            viewBox: "0 0 16 16",
                            width: t,
                            className: e
                        }, a.createElement("path", {
                            stroke: "none",
                            d: "M14.33083 3.1085L7.5 9.93935 5.03033 7.46967c-.2929-.2929-.76777-.2929-1.06066 0-.2929.2929-.2929.76777 0 1.06066L7.5 12.06066l7.65102-7.65102C15.69418 5.48934 16 6.70895 16 8c0 4.41828-3.58172 8-8 8s-8-3.58172-8-8 3.58172-8 8-8c2.576 0 4.86763 1.21752 6.33083 3.1085z"
                        })), e.Helpfull = ({
                            className: e,
                            width: t = 12
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 10 12"
                        }, a.createElement("path", {
                            d: "M1.54 5.346L4.522 8.47l5.938-6.938",
                            strokeWidth: "1.5",
                            stroke: "#4C7AF1",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round"
                        })), e.Close = ({
                            className: e,
                            width: t = 11
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.closeIcon), {
                            width: t,
                            viewBox: "0 0 11 10"
                        }), a.createElement("path", {
                            d: "M1.1.5l7.06 7.07M8.16.5L1.1 7.57",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            transform: "translate(1 1)"
                        })), e.QuestionMark = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e), {
                            width: t,
                            viewBox: "0 0 16 16"
                        }), a.createElement("circle", {
                            cx: "8",
                            cy: "8",
                            r: "7",
                            fill: "none"
                        }), a.createElement("path", {
                            d: "M7.402 10.175H8.51v-.056c.018-1.145.314-1.643 1.126-2.151.813-.494 1.293-1.205 1.293-2.225 0-1.44-1.053-2.493-2.678-2.493-1.495 0-2.682.923-2.751 2.493h1.163c.07-1.09.831-1.533 1.588-1.533.868 0 1.57.573 1.57 1.478 0 .734-.42 1.26-.96 1.588-.905.549-1.445 1.084-1.459 2.843v.056zm.59 2.733a.833.833 0 00.832-.831.833.833 0 00-.831-.831.833.833 0 00-.831.83c0 .458.374.832.83.832z",
                            stroke: "none"
                        })), e.More = ({
                            className: e,
                            width: t = 4
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e), {
                            width: t,
                            viewBox: "0 0 4 16"
                        }), a.createElement("path", {
                            d: "M2 12.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
                            fill: "none"
                        })), e.VoteYes = () => {
                            var e, t, n;
                            const r = a.useContext(p.f.Context),
                                o = null !== (e = r.disabled) && void 0 !== e ? e : f.of(!1),
                                i = null !== (t = r.hovered) && void 0 !== t ? t : f.of(!1),
                                l = null !== (n = r.active) && void 0 !== n ? n : f.of(!1);
                            return a.createElement(x, {
                                className: $.voteYes
                            }, a.createElement(s.F.Fragment, null, v.aj([l, o, i]).pipe(g.U((([e, t, n]) => a.createElement("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z",
                                stroke: "#9FA6BF"
                            }), a.createElement("path", {
                                d: e || !t && n ? "M13.0303 16.4697C12.7374 16.1768 12.2626 16.1768 11.9697 16.4697C11.6768 16.7626 11.6768 17.2374 11.9697 17.5303L13.0303 16.4697ZM15 19.5L14.4697 20.0303L15 20.5607L15.5303 20.0303L15 19.5ZM21.0303 14.5303C21.3232 14.2374 21.3232 13.7626 21.0303 13.4697C20.7374 13.1768 20.2626 13.1768 19.9697 13.4697L21.0303 14.5303ZM11.9697 17.5303L14.4697 20.0303L15.5303 18.9697L13.0303 16.4697L11.9697 17.5303ZM15.5303 20.0303L21.0303 14.5303L19.9697 13.4697L14.4697 18.9697L15.5303 20.0303Z" : "M12.8536 16.6464C12.6583 16.4512 12.3417 16.4512 12.1464 16.6464C11.9512 16.8417 11.9512 17.1583 12.1464 17.3536L12.8536 16.6464ZM15 19.5L14.6464 19.8536L15 20.2071L15.3536 19.8536L15 19.5ZM20.8536 14.3536C21.0488 14.1583 21.0488 13.8417 20.8536 13.6464C20.6583 13.4512 20.3417 13.4512 20.1464 13.6464L20.8536 14.3536ZM12.1464 17.3536L14.6464 19.8536L15.3536 19.1464L12.8536 16.6464L12.1464 17.3536ZM15.3536 19.8536L20.8536 14.3536L20.1464 13.6464L14.6464 19.1464L15.3536 19.8536Z",
                                fill: "#9FA6BF"
                            })))))))
                        }, e.VoteNo = () => {
                            var e, t, n;
                            const r = a.useContext(p.f.Context),
                                o = null !== (e = r.disabled) && void 0 !== e ? e : f.of(!1),
                                i = null !== (t = r.hovered) && void 0 !== t ? t : f.of(!1),
                                l = null !== (n = r.active) && void 0 !== n ? n : f.of(!1);
                            return a.createElement(x, {
                                className: $.voteNo
                            }, a.createElement(s.F.Fragment, null, v.aj([l, o, i]).pipe(g.U((([e, t, n]) => a.createElement("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z",
                                stroke: "#9FA6BF"
                            }), a.createElement("path", {
                                d: "M12.5 16H19.5",
                                stroke: "#9FA6BF",
                                strokeLinecap: "round",
                                strokeWidth: e || !t && n ? "1.5" : void 0
                            })))))))
                        },
                        function(e) {
                            e.ShowMore = ({
                                className: e
                            }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e), {
                                width: "16",
                                viewBox: "0 0 16 16"
                            }), a.createElement("path", {
                                d: "M6 2.89286C3.93249 3.68362 2.5 5.65449 2.5 8C2.5 10.3455 3.96821 12.3481 6.03571 13.1389M9.96429 2.89286C12.0318 3.68362 13.5 5.65449 13.5 8C13.5 10.3455 12.062 12.3481 9.99453 13.1389M3 2.5H6V5.5M13 13.5H10V10.5",
                                fill: "none"
                            })), e.HeaderCirclePlus = ({
                                className: e
                            }) => a.createElement(x, {
                                className: e
                            }, a.createElement("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                                fill: "#11A683"
                            }), a.createElement("path", {
                                d: "M4.5 8H11.5M8 4.5V11.5",
                                stroke: "white",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }))), e.HeaderCheckmark = ({
                                className: e
                            }) => a.createElement(x, {
                                className: e
                            }, a.createElement("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
                                fill: "#15C39A"
                            }), a.createElement("path", {
                                d: "M5.03033 8.46967C4.73744 8.17678 4.26256 8.17678 3.96967 8.46967C3.67678 8.76256 3.67678 9.23744 3.96967 9.53033L5.03033 8.46967ZM7 11.5L6.46967 12.0303L7 12.5607L7.53033 12.0303L7 11.5ZM13.0303 6.53033C13.3232 6.23744 13.3232 5.76256 13.0303 5.46967C12.7374 5.17678 12.2626 5.17678 11.9697 5.46967L13.0303 6.53033ZM3.96967 9.53033L6.46967 12.0303L7.53033 10.9697L5.03033 8.46967L3.96967 9.53033ZM7.53033 12.0303L13.0303 6.53033L11.9697 5.46967L6.46967 10.9697L7.53033 12.0303Z",
                                fill: "white"
                            }))), e.AddPhraseCirclePlus = () => a.createElement(x, {
                                className: $.smartPhrasesAddPhrasesCirclePlus
                            }, a.createElement("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                d: "M10 7.5V12.5M12.5 10H7.5M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z",
                                stroke: "#11A683",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }))), e.OpenFeedbackFormArrow = () => a.createElement(x, {
                                className: $.smartPhrasesOpenFeedbackFormArrow
                            }, a.createElement("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                d: "M13.5 10.5L19 16L13.5 21.5",
                                stroke: "#6D758D",
                                strokeLinecap: "round"
                            })))
                        }(n = e.SmartPhrases || (e.SmartPhrases = {})), e.Gear = ({
                            className: e,
                            width: t = 24
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e), {
                            width: t,
                            viewBox: "0 0 24 24"
                        }), a.createElement("path", {
                            d: "M23 14.325h-1.997c-1.436 0-1.99 1.409-.998 2.401l1.413 1.413a.5.5 0 0 1 0 .707l-2.577 2.576a.5.5 0 0 1-.707 0l-1.414-1.414c-1.003-1.002-2.401-.382-2.401.994V23a.5.5 0 0 1-.5.5h-3.645a.5.5 0 0 1-.5-.5v-2c0-1.23-1.544-1.851-2.397-.998L5.86 21.418a.5.5 0 0 1-.707 0L2.578 18.84a.5.5 0 0 1 0-.707l1.417-1.417c1.067-1.067.477-2.398-.993-2.398H1a.5.5 0 0 1-.5-.5v-3.645a.5.5 0 0 1 .5-.5h2.003c1.29 0 1.908-1.484.996-2.397L2.582 5.861a.5.5 0 0 1 0-.707L5.16 2.577a.5.5 0 0 1 .707 0l1.416 1.416c.824.821 2.4.152 2.4-.994V1a.5.5 0 0 1 .5-.5h3.643a.5.5 0 0 1 .5.5v2c0 1.228 1.512 1.884 2.4.995l1.414-1.413a.5.5 0 0 1 .707 0l2.576 2.577a.5.5 0 0 1 0 .707l-1.413 1.413c-.94.94-.343 2.402.995 2.402H23a.5.5 0 0 1 .5.5v3.644a.5.5 0 0 1-.5.5zm-.5-3.644h-1.496c-2.232 0-3.27-2.542-1.702-4.109l1.06-1.06-1.87-1.869-1.06 1.06c-1.526 1.526-4.107.405-4.107-1.703V1.5h-2.644V3c0 2.03-2.647 3.154-4.106 1.701L5.512 3.638l-1.869 1.87L4.706 6.57c1.543 1.544.476 4.104-1.703 4.104H1.5v2.645h1.502c2.345 0 3.408 2.396 1.7 4.105l-1.064 1.064 1.87 1.869 1.062-1.062c1.479-1.48 4.104-.422 4.104 1.705v1.5h2.645v-1.498c0-2.251 2.464-3.345 4.108-1.7l1.06 1.06 1.87-1.87-1.06-1.058c-1.614-1.615-.632-4.109 1.706-4.109H22.5v-2.644zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
                            stroke: "none"
                        })), e.Info = ({
                            className: e,
                            width: t = 13
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 13 13"
                        }, a.createElement("path", {
                            d: "M6.5 12.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-1c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-7c-.4 0-.75-.34-.75-.75 0-.4.34-.75.75-.75.4 0 .75.34.75.75 0 .4-.34.75-.75.75zM6 6c0-.28.22-.5.5-.5s.5.22.5.5v3.5c0 .28-.22.5-.5.5S6 9.78 6 9.5V6z",
                            stroke: "none"
                        })), e.All = ({
                            className: e,
                            width: t = 25
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 25 13"
                        }, a.createElement("path", {
                            d: "M1.35 6.37l4.82 4.82L16.44.92c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L6.54 12.25c-.2.2-.52.2-.72 0L.65 7.08c-.2-.2-.2-.52 0-.7.2-.2.5-.2.7 0zM20 4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H20zm-3 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H17zm-3 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H14z",
                            fillRule: "nonzero"
                        })), e.SynonymLoader = ({
                            className: e,
                            width: t = 14
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 14 14"
                        }, a.createElement("circle", {
                            cx: "7",
                            cy: "7",
                            r: "6",
                            stroke: "#A6ADC9",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeDasharray: "25,300",
                            strokeLinejoin: "round"
                        })), e.Undo = ({
                            className: e,
                            width: t = 18,
                            color: n = "#E4E6F2"
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 18 12"
                        }, a.createElement("g", {
                            fill: "none",
                            stroke: n,
                            strokeLinecap: "round"
                        }, a.createElement("path", {
                            d: "M4.85498.551514l-3.5 3.49659 3.49435 3.50341"
                        }), a.createElement("path", {
                            d: "M2.00033 4h11.07438c2.03911 0 3.692136 1.534823 3.692136 3.41954 0 1.888558-1.65961 3.419538-3.692137 3.419538h-2.921497"
                        }))), e.OuterLink = ({
                            className: e,
                            width: t = 12
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 12 11",
                            fill: "none"
                        }, a.createElement("path", {
                            d: "M4.5 0.5H3C1.89543 0.5 1 1.39543 1 2.5V8.5C1 9.60457 1.89543 10.5 3 10.5H9C10.1046 10.5 11 9.60457 11 8.5V7M6 5.5L11 0.5M11 0.5H7M11 0.5V4.5",
                            strokeLinecap: "round"
                        })), e.NotificationError = ({
                            className: e,
                            width: t = 26
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 26 26"
                        }, a.createElement("g", {
                            stroke: "none"
                        }, a.createElement("path", {
                            fill: "#FF6C83",
                            d: "M18.943355.651473l6.405172 6.405173c.375073.375072.585786.88378.585786 1.414213v9.05828c0 .530432-.210713 1.03914-.585786 1.414213l-6.405172 6.405172c-.375073.375073-.88378.585786-1.414214.585786H8.47086c-.530434 0-1.039142-.210712-1.414215-.585785l-6.405172-6.40517C.2764 18.56828.065687 18.059575.065687 17.52914V8.47086c0-.530434.210713-1.039142.585786-1.414215L7.056646.651473C7.431718.2764 7.940426.065687 8.47086.065687h9.05828c.530434 0 1.039142.210713 1.414215.585786z"
                        }), a.createElement("g", {
                            fill: "#FFF",
                            transform: "translate(12 7)"
                        }, a.createElement("rect", {
                            width: "2",
                            height: "7",
                            rx: "1"
                        }), a.createElement("circle", {
                            cx: "1",
                            cy: "10.5",
                            r: "1"
                        })))), e.NotificationWarning = ({
                            className: e,
                            width: t = 28
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 28 25"
                        }, a.createElement("g", {
                            stroke: "none"
                        }, a.createElement("path", {
                            fill: "#F6BC41",
                            d: "M15.738773 1.693563l11.3456 19.98132c.5454.96053.20887 2.181324-.75166 2.726722-.301054.170942-.641327.26081-.98753.26081h-22.6912c-1.10457 0-2-.89543-2-2 0-.346203.089867-.686476.26081-.98753l11.3456-19.981323c.545397-.96053 1.766192-1.29706 2.72672-.75166.31377.17816.5735.43789.75166.75166z"
                        }), a.createElement("g", {
                            fill: "#FFF",
                            transform: "translate(13 8)"
                        }, a.createElement("rect", {
                            width: "2",
                            height: "7",
                            rx: "1"
                        }), a.createElement("circle", {
                            cx: "1",
                            cy: "10.5",
                            r: "1"
                        })))), e.NotificationInfo = ({
                            className: e,
                            width: t = 24
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 24 24"
                        }, a.createElement("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            stroke: "none"
                        }, a.createElement("circle", {
                            cx: "12",
                            cy: "12",
                            r: "11.5",
                            fill: "#00CDA3"
                        }), a.createElement("path", {
                            stroke: "#FFF",
                            strokeWidth: "2",
                            d: "M7.54 12.81l3.343 3.5 6.657-7.78",
                            strokeLinecap: "round"
                        }))), e.GreenOk = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 32 32"
                        }, a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            stroke: "none",
                            d: "M32 16c0 8.8366-7.1634 16-16 16-8.83656 0-16-7.1634-16-16C0 7.16344 7.16344 0 16 0c5.152 0 9.7353 2.43504 12.6617 6.21701L15 19.8787l-4.9393-4.9394c-.58583-.5857-1.53557-.5857-2.12136 0-.58579.5858-.58579 1.5356 0 2.1214L15 24.1213 30.302 8.81927C31.3884 10.9787 32 13.4179 32 16z",
                            fill: "#15C39A"
                        })), e.OnboardingTriangle = ({
                            className: e,
                            width: t = 12
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 12 14"
                        }, a.createElement("path", {
                            d: "M6 4l10 12H-4",
                            fill: "#5A5F76",
                            fillRule: "evenodd",
                            fillOpacity: ".97",
                            stroke: "none"
                        })), e.Grammarly = ({
                            className: e,
                            width: t = "100%"
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.gIcon), {
                            width: t,
                            viewBox: "0 0 24 24",
                            dontScale: !0
                        }), a.createElement("circle", {
                            stroke: "none",
                            fill: "#15C39A",
                            cx: "12",
                            cy: "12",
                            r: "11"
                        }), a.createElement(y, {
                            transform: "scale(.8) translate(6.75 6.5)"
                        })), e.GrammarlyInverse = ({
                            className: e,
                            width: t = "100%"
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 64 64",
                            dontScale: !0
                        }, a.createElement("path", {
                            d: "M32 64a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm6.3-27.66c-1.33 0-2.4 1.2-2.14 2.58.18 1.04 1.17 1.77 2.24 1.77h3.36l1.95-.26c-3.12 4.55-8.51 6.66-14.42 5.75-4.8-.76-8.95-4-10.69-8.56-3.95-10.33 3.6-20.19 13.4-20.19 5.13 0 9.6 3 12.18 6.6v.09a2.15 2.15 0 0 0 3.64-2.3h.02A18.84 18.84 0 0 0 30.7 13.2a18.95 18.95 0 0 0-17.46 17.7 18.7 18.7 0 0 0 18.79 19.79c5.64 0 10.69-2.47 14.15-6.45l-.42 2.29v2.05c0 1.07.73 2.06 1.77 2.24 1.38.26 2.58-.8 2.58-2.13V36.32H38.3v.02z",
                            fill: "#FFF",
                            stroke: "none"
                        })), e.Rank = ({
                            className: e,
                            width: t = 29
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 29 28"
                        }, a.createElement("g", {
                            transform: "translate(1 -1)",
                            fill: "none",
                            fillRule: "evenodd"
                        }, a.createElement("path", {
                            stroke: "#B0B9DB",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M1.73 21.53l8.02-9.18 7.65 4.6 8.02-8.42"
                        }), a.createElement("path", {
                            d: "M24.73 13.35c0-.2.17-.38.38-.38.22 0 .4.17.4.38v14.42c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38V13.35zm-8 8c0-.2.17-.38.38-.38.22 0 .4.17.4.38v7.1c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-7.1zm-7-4c0-.2.17-.38.38-.38.22 0 .4.17.4.38v10.92c0 .22-.18.4-.4.4-.2 0-.37-.18-.37-.4V17.35zm-8 7.85c0-.2.17-.38.38-.38.22 0 .4.17.4.38v2.9c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-2.9zm0-23.85c0-.2.17-.38.38-.38.22 0 .4.17.4.38v14.42c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38V1.35zm8 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v7.1c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-7.1zm7 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v10.92c0 .22-.18.4-.4.4-.2 0-.37-.18-.37-.4V1.35zm8 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v2.9c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-2.9z",
                            fill: "#E4E6F2",
                            fillRule: "nonzero"
                        }), a.createElement("circle", {
                            stroke: "#BAC1DD",
                            fill: "#FFF",
                            cx: "2.11",
                            cy: "21.14",
                            r: "1.91"
                        }), a.createElement("circle", {
                            stroke: "#BAC1DD",
                            fill: "#FFF",
                            cx: "9.75",
                            cy: "12.73",
                            r: "1.91"
                        }), a.createElement("circle", {
                            stroke: "#BAC1DD",
                            fill: "#FFF",
                            cx: "17.4",
                            cy: "16.56",
                            r: "1.91"
                        }), a.createElement("circle", {
                            stroke: "#BAC1DD",
                            fill: "#FFF",
                            cx: "24.85",
                            cy: "8.91",
                            r: "1.91"
                        }))), e.Paid = ({
                            className: e,
                            width: t = 22
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 22 17"
                        }, a.createElement("path", {
                            d: "M10.28 8h-.05c-.12 0-.23.07-.3.16l-4.8 5.28c-.18.18-.17.5 0 .66l10.1 10.1c.17.16.5.16.67 0L26 14.1c.16-.17.17-.48 0-.66l-4.8-5.28c-.1-.1-.22-.16-.36-.16H10.28zm.2.96H13l-2.05 4.32H6.55l3.94-4.32zm3.57 0h3.02l2.06 4.32H12l2.05-4.32zm4.08 0h2.5l3.94 4.32H20.2l-2.07-4.32zm-11.5 5.28h4.3l3.2 7.5-7.5-7.5zm5.33 0h7.2l-3.6 8.38-3.6-8.38zm8.24 0h4.3l-7.5 7.5 3.2-7.5z",
                            transform: "translate(-5 -8)",
                            fillRule: "nonzero",
                            stroke: "none"
                        })), e.PaidSmall = ({
                            className: e,
                            width: t = 15
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 14 11"
                        }, a.createElement("path", {
                            d: "M1 4.10345L3.52632 1H6.05263M1 4.10345L7 10M1 4.10345H4.47368M13 4.10345L10.4737 1H7.94737M13 4.10345L7 10M13 4.10345H9.21053M7 10L4.47368 4.10345M7 10L9.21053 4.10345M4.47368 4.10345H9.21053M4.47368 4.10345L6.05263 1M9.21053 4.10345L7.94737 1M7.94737 1H6.05263",
                            strokeLinecap: "round",
                            fill: "none",
                            strokeLinejoin: "round"
                        })), e.PaidLink = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.diamondIcon), {
                            width: t,
                            viewBox: "0 0 20 16"
                        }), a.createElement("path", {
                            d: "M4.92.88h-.04a.45.45 0 0 0-.28.14L.18 5.88a.46.46 0 0 0 .02.6l9.27 9.27c.16.17.46.17.62 0l9.27-9.27a.46.46 0 0 0 .02-.6l-4.42-4.86a.45.45 0 0 0-.32-.14H4.92zm.2.88h2.3l-1.9 3.97H1.5l3.62-3.97zm3.27 0h2.78l1.89 3.97H6.5l1.9-3.97zm3.76 0h2.3l3.6 3.97h-4.01l-1.9-3.97zM1.58 6.6h3.94l2.95 6.9-6.9-6.9zm4.9 0h6.6l-3.3 7.7-3.3-7.7zm7.56 0h3.94l-6.89 6.9 2.95-6.9z"
                        })),
                        function(e) {
                            e.TitleDiamond = ({
                                className: e
                            }) => a.createElement(x, {
                                className: e
                            }, a.createElement("svg", {
                                width: "16",
                                height: "24",
                                viewBox: "0 0 16 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                d: "M2 11.1034L4.52632 8H7.05263M2 11.1034L8 17M2 11.1034H5.47368M14 11.1034L11.4737 8H8.94737M14 11.1034L8 17M14 11.1034H10.2105M8 17L5.47368 11.1034M8 17L10.2105 11.1034M5.47368 11.1034H10.2105M5.47368 11.1034L7.05263 8M10.2105 11.1034L8.94737 8M8.94737 8H7.05263",
                                stroke: "#0E101A",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }))), e.ButtonDiamond = () => a.createElement(x, null, a.createElement("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                d: "M7 14.5L10.7895 9.5H14.5789M7 14.5L16 24M7 14.5H12.2105M25 14.5L21.2105 9.5H17.4211M25 14.5L16 24M25 14.5H19.3158M16 24L12.2105 14.5M16 24L19.3158 14.5M12.2105 14.5H19.3158M12.2105 14.5L14.5789 9.5M19.3158 14.5L17.4211 9.5M17.4211 9.5H14.5789",
                                stroke: "white",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })))
                        }(o = e.UpgradeHookPanel || (e.UpgradeHookPanel = {})), e.CitationStyle = ({
                            className: e,
                            width: t = 8
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 8 3"
                        }, a.createElement("path", {
                            d: "M1 0l3 3 3-3",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round"
                        })), e.Performance = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 32 32"
                        }, a.createElement("g", {
                            stroke: "#A6ADC9",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, a.createElement("path", {
                            d: "M7 22l5-8.5 7 5.5 6-11"
                        }), a.createElement("circle", {
                            fill: "#FFF",
                            cx: "7",
                            cy: "22",
                            r: "2"
                        }), a.createElement("circle", {
                            fill: "#FFF",
                            cx: "12",
                            cy: "13.5",
                            r: "2"
                        }), a.createElement("circle", {
                            fill: "#FFF",
                            cx: "19",
                            cy: "19",
                            r: "2"
                        }), a.createElement("circle", {
                            fill: "#FFF",
                            cx: "25",
                            cy: "8",
                            r: "2"
                        }))), e.GoalsEmpty = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 32 32"
                        }, a.createElement("g", {
                            stroke: "#A6ADC9",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, a.createElement("circle", {
                            cx: "16",
                            cy: "16",
                            r: "8"
                        }), a.createElement("path", {
                            d: "M9 27l2-4m12 4l-2-4m-5-7l9-9V4m0 3h3"
                        }), a.createElement("circle", {
                            cx: "16",
                            cy: "16",
                            r: "4"
                        }))), e.GoalsPartial = ({
                            className: e,
                            width: t = 32,
                            percentage: n = 0
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 32 32"
                        }, a.createElement("circle", {
                            stroke: "#F1F2FA",
                            fill: "none",
                            strokeWidth: "4",
                            cx: "16",
                            cy: "16",
                            r: "7"
                        }), a.createElement("circle", {
                            stroke: "#A6ADC9",
                            fill: "none",
                            transform: "rotate(-90 16 16)",
                            strokeDashoffset: 2 * Math.PI * 7 * (100 - n) / 100,
                            strokeDasharray: "43.98 43.98",
                            strokeWidth: "4",
                            cx: "16",
                            cy: "16",
                            r: "7"
                        })), e.GoalsComplete = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 32 32"
                        }, a.createElement("g", {
                            fill: "none",
                            fillRule: "evenodd"
                        }, a.createElement("circle", {
                            stroke: "#F1F2FA",
                            strokeWidth: "4",
                            cx: "16",
                            cy: "16",
                            r: "7"
                        }), a.createElement("circle", {
                            stroke: "#A6ADC9",
                            strokeWidth: "4",
                            transform: "matrix(1 0 0 -1 0 32)",
                            cx: "16",
                            cy: "16",
                            r: "7"
                        }), a.createElement("path", {
                            d: "M9 27l2-4m12 4l-2-4m-5-7l9-9V4m0 3h3",
                            stroke: "#A6ADC9",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }))), e.Align = ({
                            className: e,
                            width: t = 11
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 11 15"
                        }, a.createElement("path", {
                            transform: "translate(-11.000000, -9.000000)",
                            strokeWidth: "1",
                            stroke: "none",
                            fillRule: "nonzero",
                            d: "M16,13.7426407 L13.3535534,16.3890873 C13.1582912,16.5843494 12.8417088,16.5843494 12.6464466,16.3890873 C12.4511845,16.1938252 12.4511845,15.8772427 12.6464466,15.6819805 L16.0533009,12.2751263 C16.1356181,12.1119288 16.3047379,12 16.5,12 C16.5059664,12 16.5119084,12.0001045 16.5178242,12.0003118 C16.6516221,11.9955992 16.7869515,12.0443108 16.8890873,12.1464466 L20.4802536,15.7376129 C20.6755158,15.9328751 20.6755158,16.2494576 20.4802536,16.4447197 C20.2849915,16.6399819 19.968409,16.6399819 19.7731468,16.4447197 L17,13.6715729 L17,23.5 C17,23.7761424 16.7761424,24 16.5,24 C16.2238576,24 16,23.7761424 16,23.5 L16,13.7426407 Z M11.5,10 C11.2238576,10 11,9.77614237 11,9.5 C11,9.22385763 11.2238576,9 11.5,9 L21.5,9 C21.7761424,9 22,9.22385763 22,9.5 C22,9.77614237 21.7761424,10 21.5,10 L11.5,10 Z"
                        })), e.ToolbarCreate = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.toolbarIcon), {
                            width: t,
                            viewBox: "0 0 20 20"
                        }), a.createElement("g", {
                            transform: "translate(1 1)",
                            strokeWidth: "1"
                        }, a.createElement("circle", {
                            cx: "9",
                            cy: "9",
                            r: "9"
                        }), a.createElement("path", {
                            d: "M9 3.375v11.25M3.375 9h11.25"
                        }))), e.ToolbarDownload = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.toolbarIcon), {
                            width: t,
                            viewBox: "0 0 20 19"
                        }), a.createElement("path", {
                            strokeWidth: "1",
                            d: "M10 .4886514v12.02026821M5 8.06180972l4.99384055 4.98770004 5.00615945-5M1 14.0773926v1.9329052c0 1.1045695.8954305 2 2 2h14c1.1045695 0 2-.8954305 2-2V14.006229"
                        })), e.SearchQuestion = ({
                            className: e,
                            width: t = 18
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 18 17"
                        }, a.createElement("g", {
                            transform: "translate(1 1)",
                            stroke: "#A6ADC9",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, a.createElement("path", {
                            d: "M10.9 10.9l4.972 4.972"
                        }), a.createElement("circle", {
                            cx: "6",
                            cy: "6",
                            r: "6"
                        }))), e.TriangleArrow = ({
                            className: e,
                            width: t = 10
                        }) => a.createElement(C, {
                            viewBox: "0 0 50 50",
                            className: e,
                            width: t
                        }, a.createElement("polygon", {
                            points: "6,40 23,14 40,40"
                        })), e.HideAssistantStatic = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, {
                            viewBox: "0 0 42 26",
                            className: e,
                            width: t
                        }, a.createElement("path", {
                            d: "M0 1h22M0 7h22M0 13h22M0 19h22M0 25h12",
                            stroke: "#A5ACC8",
                            strokeWidth: "2"
                        }), a.createElement("path", {
                            d: "M41.02 2v22a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z",
                            stroke: "#A5ACC8",
                            fill: "none",
                            strokeWidth: "2"
                        })), e.WordCounter = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, {
                            viewBox: "0 0 19 17",
                            className: e,
                            width: t
                        }, a.createElement("path", {
                            d: "M7 16h2v-2.1308594c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.9404297c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.1308593c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-6H1v6h2v-2.1308594c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.9404297c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16zm-7 .4914443V9.5085557C0 9.2274595.2236328 9 .5 9h18c.2763672 0 .5.2274595.5.5085557v6.9828886C19 16.7725405 18.7763672 17 18.5 17H.5c-.2763672 0-.5-.2274595-.5-.5085557zM9.5 0L13 5H6l3.5-5z",
                            fill: "#9FA6BF",
                            fillRule: "evenodd",
                            stroke: "none"
                        })),
                        function(e) {
                            e.VerySatisfied = ({
                                width: e = 24
                            }) => a.createElement(C, {
                                className: $.emote,
                                viewBox: "0 0 24 24",
                                width: e
                            }, a.createElement("path", {
                                d: "M7.75 9.84c-1.52 0-1.75 1.53-1.75.4 0-.96.47-2.8 1.75-2.8s1.75 1.84 1.75 2.8c0 1.13-.23-.4-1.75-.4zm8.5 0c-1.52 0-1.75 1.53-1.75.4 0-.96.47-2.8 1.75-2.8S18 9.28 18 10.24c0 1.13-.23-.4-1.75-.4zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-6.29-8.42a1 1 0 1 1 1.63-1.16A5.71 5.71 0 0 0 12 16.88c1.86 0 3.57-.92 4.66-2.46a1 1 0 0 1 1.63 1.16 7.7 7.7 0 0 1-6.29 3.3 7.7 7.7 0 0 1-6.29-3.3z"
                            })), e.Satisfied = ({
                                width: e = 24
                            }) => a.createElement(C, {
                                className: $.emote,
                                viewBox: "0 0 24 24",
                                width: e
                            }, a.createElement("path", {
                                d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm4.72-7.3A6.33 6.33 0 0 1 12 18.52c-1.93 0-3.53-.6-4.72-1.82a1 1 0 1 1 1.44-1.4c.79.81 1.86 1.22 3.28 1.22 1.42 0 2.5-.4 3.28-1.22a1 1 0 0 1 1.44 1.4z"
                            })), e.Neutral = ({
                                width: e = 24
                            }) => a.createElement(C, {
                                className: $.emote,
                                viewBox: "0 0 24 24",
                                width: e
                            }, a.createElement("path", {
                                d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-3.5-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2h-7z"
                            })), e.Unsatisfied = ({
                                width: e = 24
                            }) => a.createElement(C, {
                                className: $.emote,
                                viewBox: "0 0 24 24",
                                width: e
                            }, a.createElement("path", {
                                d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm4.47-8.14a1 1 0 1 1-.94 1.77A7.7 7.7 0 0 0 12 16.7c-1.21 0-2.44.35-3.54.93a1 1 0 0 1-.92-1.77A9.68 9.68 0 0 1 12 14.7c1.57 0 3.11.44 4.47 1.16z"
                            })), e.VeryUnsatisfied = ({
                                width: e = 24
                            }) => a.createElement(C, {
                                className: $.emote,
                                viewBox: "0 0 24 24",
                                width: e
                            }, a.createElement("path", {
                                d: "M17.44 16.56a1 1 0 1 1-1.76.94C14.8 15.85 13.45 15 12 15c-1.46 0-2.84.86-3.7 2.5a1 1 0 1 1-1.77-.92C7.73 14.28 9.78 13 12 13c2.2 0 4.22 1.27 5.44 3.56zM7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"
                            }))
                        }(i = e.Emote || (e.Emote = {})),
                        function(e) {
                            e.Head = ({
                                className: e,
                                width: t = 17
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 17 16"
                            }, a.createElement("path", {
                                d: "M15.406 9l-2.737 15H11.5l2.737-15H8V8h14v1h-6.594zm4.54 15h-1.17l1.46-8H17v-1h8v1h-3.594l-1.46 8z",
                                transform: "translate(-8 -8)",
                                stroke: "none"
                            })), e.Bold = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M17 14.5c0 1.9329966-1.5670034 3.5-3.5 3.5H8V6h4.5C14.4329966 6 16 7.56700338 16 9.5c0 .7565678-.240051 1.4570687-.6481422 2.029492C16.3415826 12.1478064 17 13.2470124 17 14.5zM10 8v3h2.5c.8284271 0 1.5-.6715729 1.5-1.5 0-.82842712-.6715729-1.5-1.5-1.5H10zm0 5v3h3.5c.8284271 0 1.5-.6715729 1.5-1.5s-.6715729-1.5-1.5-1.5H10z",
                                stroke: "none"
                            })), e.Italic = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M10.5827118 17l1.8181818-10H10V6h6v1h-2.5827118l-1.8181818 10H14v1H8v-1h2.5827118z",
                                stroke: "none"
                            })), e.Underline = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M7.5 6h1v6.5c0 1.9329966 1.5670034 3.5 3.5 3.5s3.5-1.5670034 3.5-3.5V6h1v6.5c0 2.4852814-2.0147186 4.5-4.5 4.5-2.48528137 0-4.5-2.0147186-4.5-4.5V6zM6 20v-1h12v1H6z",
                                stroke: "none"
                            })), e.Header1 = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M6 11h5V6h1v12h-1v-6H6v6H5V6h1v5zm11.6477238-1.7272644V18h-1.0056809v-7.193175h-.0681817c-.1235794.2386362-.8394879.6477267-1.8409074.6477267v-.8863628c1.3465897 0 1.9730095-1.20596475 2.0284072-1.2954533h.8863628z",
                                stroke: "none"
                            })), e.Header2 = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M6 11h5V6h1v12h-1v-6H6v6H5V6h1v5zm7.9034082 7v-.7670447l2.8806791-3.1534061c1.0099422-1.1036921 1.4829531-1.7002825 1.4829531-2.5056794 0-.9204523-.7244311-1.4999986-1.6704529-1.4999986-1.0099422 0-1.6534075.6605107-1.6534075 1.6534075h-1.0056809c0-1.5340894 1.1633512-2.57386117 2.6931793-2.57386117 1.5340894 0 2.6249975 1.07386257 2.6249975 2.42045227 0 .9673286-.4431814 1.7173279-1.94318 3.3238604l-1.9602254 2.0965889v.0681818h4.0568143V18h-5.5056766z",
                                stroke: "none"
                            })), e.Link = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M10.79289322 15.5355339c.19526214-.19526214.51184462-.19526216.70710678 0 .19526216.19526217.19526214.51184464 0 .70710679l-1.06066017 1.06066017c-1.17157288 1.17157287-3.07106785 1.17157284-4.24264069 0s-1.17157287-3.07106781 0-4.24264069l2.47487374-2.47487373c.97631074-.97631075 2.55922315-.97631075 3.5355339 0 .19526216.19526216.19526216.51184462 0 .70710678-.19526216.19526216-.51184462.19526216-.70710678 0-.58578642-.58578642-1.53553392-.58578642-2.12132034 0l-2.47487374 2.47487373c-.78104858.78104859-.78104858 2.04737854 0 2.82842713.78104859.78104858 2.04737854.78104858 2.82842713 0l1.06066017-1.06066017zm1.41421356-7.0710678c-.19526216.19526216-.51184464.19526214-.70710678 0-.19526214-.19526215-.19526216-.51184462 0-.70710679l1.06066017-1.06066017c1.17157284-1.17157284 3.07106785-1.17157284 4.24264069 0s1.17157284 3.07106785 0 4.24264069l-2.47487374 2.47487373c-.97631074.97631075-2.55922315.97631075-3.5355339 0-.19526216-.19526216-.19526216-.51184462 0-.70710678.19526216-.19526216.51184462-.19526216.70710678 0 .58578642.58578642 1.53553392.58578642 2.12132034 0l2.47487374-2.47487373c.78104858-.78104859.78104858-2.04737854 0-2.82842713-.78104859-.78104858-2.04737854-.78104858-2.82842713 0L12.20710678 8.4644661z",
                                stroke: "none"
                            })), e.OrderedList = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M7.28569043 17H9v1H6v-.7643054c0-.2985079.13335599-.5814079.36361705-.7713733l1.45457443-1.2000239C7.933322 15.1693147 8 15.0278648 8 14.8786108V14.425c0-.234721-.19027898-.425-.425-.425H7.5c-.27614237 0-.5.2238576-.5.5v.5H6v-.5c0-.8284271.67157288-1.5 1.5-1.5h.075C8.36200577 13 9 13.6379942 9 14.425v.4536108c0 .4477619-.20003399.8721118-.54542557 1.1570599L7.28569043 17zM9 10v1H6v-1h1V7H6V6h2v4h1zm2.5-2c-.2761424 0-.5-.22385763-.5-.5 0-.27614237.2238576-.5.5-.5h7c.2761424 0 .5.22385763.5.5 0 .27614237-.2238576.5-.5.5h-7zm0 10c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7zm0-5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7z",
                                stroke: "none"
                            })), e.BulletList = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("path", {
                                d: "M10.5 8c-.2761424 0-.5-.22385763-.5-.5 0-.27614237.2238576-.5.5-.5h7c.2761424 0 .5.22385763.5.5 0 .27614237-.2238576.5-.5.5h-7zm-4 5.5c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1 1 .4477153 1 1-.44771525 1-1 1zm0 5c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1 1 .4477153 1 1-.44771525 1-1 1zm0-10c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1 1 .44771525 1 1-.44771525 1-1 1zm4 9.5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7zm0-5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7z",
                                stroke: "none"
                            })), e.Clear = ({
                                className: e,
                                width: t = 24
                            }) => a.createElement(C, {
                                dontScale: !0,
                                className: e,
                                width: t,
                                viewBox: "0 0 24 24"
                            }, a.createElement("rect", {
                                stroke: "none",
                                fill: "none",
                                width: "24",
                                height: "24",
                                rx: "4"
                            }), a.createElement("path", {
                                d: "M16.8328726 18L5.29441111 6h1.37271624L18.2055889 18h-1.3727163zm-5.7179705 0h-1.0214709l.953124-4.574995.8395651.8731477L11.1149021 18zm1.5097756-7.2469228l-.8395651-.87314768L12.3850979 7H9.01594957l-.96153846-1H18v1h-4.5934312l-.7818911 3.7530772z",
                                stroke: "none"
                            }))
                        }(c = e.Formatting || (e.Formatting = {})),
                        function(e) {
                            e.ExpandMenu = ({
                                className: e,
                                width: t = 23
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 23 14"
                            }, a.createElement("path", {
                                d: "M23 6.5L20 9V4l3 2.5zM.85 1C.65 1 .5.78.5.5S.66 0 .85 0h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85zm0 12c-.2 0-.35-.22-.35-.5s.16-.5.35-.5h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85zm0-6C.65 7 .5 6.78.5 6.5S.66 6 .85 6h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85z",
                                stroke: "none"
                            })), e.Collapse = ({
                                className: e,
                                width: t = 27
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 27 15"
                            }, a.createElement("path", {
                                d: "M26 1a.5.5 0 0 0 0-1H7a.5.5 0 1 0 0 1h19zM0 7.5L3 10V5L0 7.5zM26 15a.5.5 0 1 0 0-1H7a.5.5 0 1 0 0 1h19zm0-7a.5.5 0 1 0 0-1H7a.5.5 0 1 0 0 1h19z",
                                stroke: "none"
                            })), e.NewDocument = ({
                                className: e,
                                width: t = 21
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 21 21"
                            }, a.createElement("path", {
                                d: "M11 10h4c.14 0 .26.05.36.14.1.1.14.21.14.36s-.05.27-.14.36c-.1.1-.22.14-.36.14h-4v4c0 .15-.05.27-.14.36-.1.1-.21.15-.36.15a.49.49 0 0 1-.36-.15.49.49 0 0 1-.14-.35V11H6a.49.49 0 0 1-.36-.14.49.49 0 0 1-.14-.36c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14h4V6c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14s.27.04.36.14c.1.1.14.21.14.36v4zm-.5 11c-1.45 0-2.8-.28-4.08-.83a10.66 10.66 0 0 1-5.6-5.59A10.16 10.16 0 0 1 0 10.5c0-1.45.28-2.8.83-4.08A10.66 10.66 0 0 1 6.42.82C7.69.29 9.05 0 10.5 0c1.45 0 2.8.28 4.08.83a10.66 10.66 0 0 1 5.6 5.59c.54 1.27.82 2.63.82 4.08 0 1.45-.28 2.8-.83 4.08a10.66 10.66 0 0 1-5.59 5.6c-1.27.54-2.63.82-4.08.82zm0-1a9.35 9.35 0 0 0 6.72-2.78A9.35 9.35 0 0 0 20 10.5a9.35 9.35 0 0 0-2.78-6.72A9.35 9.35 0 0 0 10.5 1a9.35 9.35 0 0 0-6.72 2.78A9.35 9.35 0 0 0 1 10.5a9.35 9.35 0 0 0 2.78 6.72A9.35 9.35 0 0 0 10.5 20z",
                                stroke: "none"
                            })), e.UploadFile = ({
                                className: e,
                                width: t = 21
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 21 20"
                            }, a.createElement("path", {
                                d: "M10 1.7v12.8l.1.3.4.2c.1 0 .3 0 .4-.2l.1-.3V1.7l4.2 4.1.3.2c.1 0 .3 0 .3-.2l.2-.3c0-.1 0-.3-.2-.3l-5-5a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0 0 .6l.4.2c.1 0 .3 0 .3-.2L10 1.7zM0 15.6l.1-.4.4-.1.4.1.1.4v1.9c0 .4.1.8.4 1 .3.4.7.5 1.1.5h16c.4 0 .8-.1 1-.4.4-.3.5-.7.5-1.1v-2l.1-.4.4-.1.4.1.1.4v2c0 .7-.2 1.3-.7 1.8-.5.5-1.1.7-1.8.7h-16c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8v-2z",
                                stroke: "none"
                            })), e.UndoGrey = ({
                                className: e,
                                width: t = 18
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 18 12"
                            }, a.createElement("path", {
                                d: "M5 0v1L2 4h11a4 4 0 0 1 0 8h-2a1 1 0 0 1 0-1h2a3 3 0 1 0 0-6H2l3 3v1L0 5l5-5z",
                                stroke: "none"
                            })), e.Redo = ({
                                className: e,
                                width: t = 18
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 18 12"
                            }, a.createElement("path", {
                                d: "M5 0v1L2 4h11a4 4 0 0 1 0 8h-2a1 1 0 0 1 0-1h2a3 3 0 1 0 0-6H2l3 3v1L0 5l5-5z",
                                transform: "matrix(-1 0 0 1 17 0)",
                                stroke: "none"
                            })), e.Cut = ({
                                className: e,
                                width: t = 19
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 19 18"
                            }, a.createElement("path", {
                                d: "M8.95 8.126L5.55.717a.5.5 0 0 1 .9-.434L9.5 6.927 12.55.283a.5.5 0 1 1 .9.434l-6.728 14.66a.507.507 0 0 1-.018.034 3.5 3.5 0 1 1 .092-2.592L8.95 8.126zM3.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm6.439-6.22l.55-1.199 1.715 3.738A3.501 3.501 0 0 1 19 14a3.5 3.5 0 0 1-6.704 1.411.507.507 0 0 1-.018-.034l-2.34-5.098zM15.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
                                stroke: "none"
                            })), e.Paste = ({
                                className: e,
                                width: t = 18
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 18 24"
                            }, a.createElement("path", {
                                d: "M4.05 2A2.5 2.5 0 0 1 6.5 0h2c1.2 0 2.22.86 2.45 2h2.55c.83 0 1.5.67 1.5 1.5v2.55a.5.5 0 1 1-1 0V3.5a.5.5 0 0 0-.5-.5H11v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3H1.5c-.28 0-.5.2-.5.45v16.1c0 .24.22.45.5.45H3a.5.5 0 1 1 0 1H1.5C.68 21 0 20.36 0 19.55V3.45C0 2.65.68 2 1.5 2h2.55zm5.95.57a.5.5 0 0 1 0-.13A1.5 1.5 0 0 0 8.5 1h-2C5.67 1 5 1.67 5 2.5V4h5V2.57zM6 9.5v13c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5zM16.5 8c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-10A1.5 1.5 0 0 1 5 22.5v-13C5 8.67 5.67 8 6.5 8h10zm-8 4a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3z",
                                stroke: "none"
                            })), e.PrintFile = ({
                                className: e,
                                width: t = 20
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 20 19"
                            }, a.createElement("path", {
                                d: "M4 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V5h3.5c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H16v3.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15H.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5H4V.5zM5 5h10V1H5v4zm-1 9V9.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V14h3V6H1v8h3zm11-4H5v8h10v-8zm-8.5 2.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5z",
                                stroke: "none"
                            })), e.FreeLabel = ({
                                className: e,
                                width: t = 32
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 32 13"
                            }, a.createElement("rect", {
                                fill: "#4A6EE0",
                                width: "32",
                                height: "13",
                                rx: "2",
                                stroke: "none"
                            }), a.createElement("text", {
                                fontFamily: "Helvetica",
                                fontSize: "10",
                                fontWeight: "bold",
                                letterSpacing: "0.4761905",
                                fill: "#FFFFFF",
                                fontStyle: "normal",
                                stroke: "none"
                            }, a.createElement("tspan", {
                                x: "2.21265806",
                                y: "10"
                            }, "FREE"))), e.PremiumLabel = ({
                                className: e,
                                width: t = 54
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 54 13"
                            }, a.createElement("rect", {
                                fill: "#FAB712",
                                width: "54",
                                height: "13",
                                rx: "2",
                                stroke: "none"
                            }), a.createElement("text", {
                                fontFamily: "Helvetica",
                                fontSize: "10",
                                fontWeight: "bold",
                                letterSpacing: "0.4761905",
                                fill: "#FFFFFF",
                                fontStyle: "normal",
                                stroke: "none"
                            }, a.createElement("tspan", {
                                x: "2.21265806",
                                y: "10"
                            }, "PREMIUM"))), e.BusinessLabel = ({
                                className: e,
                                width: t = 59
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 59 13"
                            }, a.createElement("rect", {
                                fill: "#15C39A",
                                width: "59",
                                height: "13",
                                rx: "2",
                                stroke: "none"
                            }), a.createElement("text", {
                                fontFamily: "Helvetica",
                                fontSize: "10",
                                fontWeight: "bold",
                                letterSpacing: "0.4761905",
                                fill: "#FFFFFF",
                                fontStyle: "normal",
                                stroke: "none"
                            }, a.createElement("tspan", {
                                x: "2.21265806",
                                y: "10"
                            }, "BUSINESS"))), e.AustralianFlag = ({
                                className: e,
                                width: t = 28
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 32 32"
                            }, a.createElement("g", {
                                stroke: "none"
                            }, a.createElement("path", {
                                d: "M24 16a8 8 0 0 1-16 0l8-8a8 8 0 0 1 8 8z",
                                fill: "#006"
                            }), a.createElement("path", {
                                d: "M16 12.17V8a8 8 0 0 0-8 8h4.17v-2.35L14.52 16h1.46l.02-.02v-1.46l-2.35-2.35H16z",
                                fill: "#F0F2FC"
                            }), a.createElement("path", {
                                d: "M12.02 9H16v2.1h-4.9V16H9v-3.98A8.09 8.09 0 0 1 12.02 9zM16 15.01V16l-3.85-3.85h.99L16 15.01z",
                                fill: "#CE1331"
                            }), a.createElement("path", {
                                d: "M13 17.25l.5.99 1.1-.25-.5.99.9.68-1.11.24V21l-.89-.69-.89.69v-1.1L11 19.66l.9-.68-.5-.99 1.1.25.5-.99zM20 19l.25.49.55-.12-.25.48.45.34-.56.12v.54l-.44-.34-.45.34v-.54l-.55-.12.45-.34-.25-.48.55.12L20 19zm-2-4l.25.49.55-.12-.25.48.45.34-.56.12v.54l-.44-.34-.45.34v-.54l-.55-.12.45-.34-.25-.48.55.12L18 15zm2-3l.25.49.55-.12-.25.48.45.34-.56.12v.54l-.44-.34-.45.34v-.54l-.55-.12.45-.34-.25-.48.55.12L20 12zm2 2l.25.49.55-.12-.25.48.45.34-.56.12v.54l-.44-.34-.45.34v-.54l-.55-.12.45-.34-.25-.48.55.12L22 14zm-1.24 2.33l.18.51h.58l-.47.32.18.5-.47-.3-.47.3.18-.5-.47-.32h.58l.18-.5z",
                                fill: "#F0F2FC"
                            }))), e.CanadianFlag = ({
                                className: e,
                                width: t = 16
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 16 16"
                            }, a.createElement("path", {
                                d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
                                fill: "#D8D8D8",
                                stroke: "none"
                            }), a.createElement("mask", {
                                id: "canadian_flag_mask0",
                                "mask-type": "alpha",
                                maskUnits: "userSpaceOnUse",
                                x: "0",
                                y: "0",
                                width: "16",
                                height: "16",
                                stroke: "none"
                            }, a.createElement("path", {
                                d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
                                fill: "white"
                            })), a.createElement("g", {
                                mask: "url(#canadian_flag_mask0)"
                            }, a.createElement("path", {
                                d: "M1.0061 -2H15.0061V18H1.0061V-2Z",
                                fill: "#F0F2FC"
                            }), a.createElement("path", {
                                d: "M-5 -2H1.99903V18H-5V-2ZM14.001 -2H21V18H14.0048L14.001 -2ZM12.915 8.98304L10.5186 10.7764C10.4162 10.8513 10.372 10.9755 10.4063 11.0921L10.596 11.7198C10.187 11.6765 9.80774 11.6232 9.4317 11.5704C9.02819 11.5138 8.6284 11.4576 8.19955 11.4149C8.12987 11.4077 8.01759 11.5261 8.01759 11.605L8.07954 13.94H7.69239L7.80079 11.5978C7.80079 11.5225 7.6769 11.4149 7.60722 11.4149C7.15012 11.4594 6.73016 11.5184 6.31032 11.5775C5.95142 11.628 5.59261 11.6784 5.21078 11.7198L5.42371 11.0562C5.45299 10.943 5.40928 10.8243 5.31144 10.7513L2.915 8.95793L3.41055 8.74273C3.60803 8.67738 3.57745 8.57633 3.50898 8.35011C3.50228 8.32797 3.49522 8.30464 3.48798 8.28003L3.12406 7.04617L4.51779 7.31877C4.62573 7.33811 4.73222 7.27954 4.76556 7.18247L4.94365 6.60141L6.04702 7.7456C6.21349 7.92852 6.53095 7.92852 6.43416 7.50528L5.96184 5.20255L6.59289 5.50743C6.77098 5.5971 6.94907 5.61145 7.04973 5.45004L7.92081 3.94L8.78027 5.4608C8.88093 5.62221 9.05902 5.60786 9.23711 5.51819L9.86815 5.21331L9.39584 7.53039C9.31066 7.95363 9.62812 7.95363 9.78298 7.7707L10.8864 6.62651L11.0644 7.20757C11.0978 7.30464 11.2043 7.36322 11.3122 7.34387L12.7059 7.07128L12.342 8.30514C12.3348 8.32975 12.3277 8.35308 12.321 8.37521C12.2526 8.60144 12.222 8.70249 12.4195 8.76783L12.915 8.98304Z",
                                fill: "#FF0000",
                                stroke: "none"
                            }))), e.GBFlag = ({
                                className: e,
                                width: t = 16
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 16 16"
                            }, a.createElement("g", {
                                stroke: "none"
                            }, a.createElement("circle", {
                                fill: "#006",
                                cx: "8",
                                cy: "8",
                                r: "8"
                            }), a.createElement("path", {
                                d: "M15.75 6a8.01 8.01 0 0 1 0 4h-4.13l2.79 2.79c-.6.8-1.36 1.5-2.22 2.02L10 12.62v3.13a8.01 8.01 0 0 1-4 0v-3.13l-2.2 2.2a8.04 8.04 0 0 1-2.2-2.03L4.37 10H.25a8.01 8.01 0 0 1 0-4h3.13l-2.2-2.2a8.04 8.04 0 0 1 2.03-2.2L6 4.37V.25a8.01 8.01 0 0 1 4 0v4.13l2.79-2.79c.8.6 1.5 1.36 2.02 2.22L12.62 6h3.13z",
                                fill: "#F0F2FC"
                            }), a.createElement("path", {
                                d: "M14.1 13.17c-.32.38-.68.73-1.07 1.05L9 10.18v5.76a8.08 8.08 0 0 1-2 0v-5.01l-3.61 3.6c-.41-.28-.8-.61-1.14-.97L6.8 9H.06a8.08 8.08 0 0 1 0-2H5.1L1.47 3.38c.29-.41.62-.8.98-1.14L7 6.79V.06a8.08 8.08 0 0 1 2 0V6.1l4.19-4.19c.38.33.73.69 1.05 1.08L10.22 7h5.72a8.08 8.08 0 0 1 0 2h-6l4.17 4.17z",
                                fill: "#CE1331"
                            }), a.createElement("path", {
                                d: "M15.94 7H9V.06c.34.04.67.1 1 .2V6h5.75c.08.33.15.66.19 1zM7 .06V7H.06c.04-.34.1-.67.2-1H6V.25c.33-.08.66-.15 1-.19zM15.94 9c-.04.34-.1.67-.2 1H10v5.75c-.33.08-.66.15-1 .19V9h6.94zM.06 9H7v6.94c-.34-.04-.67-.1-1-.2V10H.25a7.96 7.96 0 0 1-.19-1z",
                                fill: "#F0F2FC"
                            }))), e.USFlag = ({
                                className: e,
                                width: t = 16
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 16 16"
                            }, a.createElement("g", {
                                stroke: "none"
                            }, a.createElement("path", {
                                d: "M2.7 2h10.6c.64.57 1.2 1.25 1.63 2H1.07c.44-.75.99-1.43 1.64-2zM.26 6h15.5c.16.64.25 1.3.25 2H0c0-.7.09-1.36.25-2zm0 4h15.5a7.95 7.95 0 0 1-.82 2H1.07a7.95 7.95 0 0 1-.82-2zm2.46 4h10.58a7.97 7.97 0 0 1-10.58 0z",
                                fill: "#CE1331"
                            }), a.createElement("path", {
                                d: "M13.3 2H2.7a7.97 7.97 0 0 1 10.6 0zM1.06 4h13.86c.36.62.64 1.29.82 2H.25c.18-.71.46-1.38.82-2zM0 8h16c0 .7-.09 1.36-.25 2H.25A8.01 8.01 0 0 1 0 8zm1.07 4h13.86a8.04 8.04 0 0 1-1.64 2H2.71a8.04 8.04 0 0 1-1.64-2z",
                                fill: "#F0F2FC"
                            }), a.createElement("path", {
                                d: "M8 0v8H0a8 8 0 0 1 8-8z",
                                fill: "#006"
                            }), a.createElement("path", {
                                d: "M6.05 1.05l.22.7H7l-.59.42.23.68-.59-.42-.59.42.23-.69-.59-.42h.73l.22-.69zM4 2.8l.22.69h.73l-.59.42.22.7L4 4.18l-.59.42.22-.69-.58-.42h.72l.23-.7zM1.94 4.54l.23.7h.72l-.58.42.22.69-.59-.43-.58.43.22-.7L1 5.23h.72l.22-.69zm4.11 0l.22.7H7l-.59.42.23.69-.59-.43-.59.43.23-.7-.59-.42h.73l.22-.69z",
                                fill: "#F0F2FC"
                            }))), e.Home = ({
                                className: e,
                                width: t = 18
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 18 19"
                            }, a.createElement("path", {
                                d: "M1 7.97V18.5a.5.5 0 1 1-1 0V7.74a.5.5 0 0 1 .18-.38L8.68.12a.5.5 0 0 1 .64 0l8.5 7.24c.12.1.18.23.18.38V18.5a.5.5 0 1 1-1 0V7.97L9 1.16l-8 6.8zM7 18.5a.5.5 0 1 1-1 0V13a3 3 0 0 1 6 0v5.5a.5.5 0 1 1-1 0V13a2 2 0 1 0-4 0v5.5z",
                                stroke: "none"
                            })), e.Selected = ({
                                className: e,
                                width: t = 14
                            }) => a.createElement(C, {
                                className: e,
                                width: t,
                                viewBox: "0 0 14 12"
                            }, a.createElement("path", {
                                d: "M4.47 9.72l8.6-9.56a.4.4 0 0 1 .32-.16c.14 0 .26.04.36.13.1.1.16.22.17.35a.5.5 0 0 1-.1.36L4.5 11.16.16 6.66A.5.5 0 0 1 0 6.3a.4.4 0 0 1 .16-.33.5.5 0 0 1 .71 0l3.6 3.75z",
                                stroke: "none",
                                fill: "#4A6EE0"
                            }))
                        }(h = e.DocumentSettings || (e.DocumentSettings = {})), e.VotedUp = ({
                            className: e,
                            width: t = 14
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 14 12"
                        }, a.createElement("path", {
                            d: "M18.38,7 L19.17,7.79 C19.37,8 19.5,8.28 19.5,8.59 L19.5,8.59 L19.48,8.82 L18.82,12 L23,12 C23.55,12 24,12.45 24,13 L24,13 L24,14.25 C24,14.44 23.96,14.63 23.89,14.8 L23.89,14.8 L21.63,19.09 C21.4,19.62 20.87,20 20.25,20 L20.25,20 L14.5,20 C13.67,20 13,19.33 13,18.5 L13,18.5 L13,13 C13,12.59 13.17,12.21 13.44,11.94 L13.44,11.94 L18.38,7 Z M11,12 C11.5522847,12 12,12.4477153 12,13 L12,19 C12,19.5522847 11.5522847,20 11,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,13 C9,12.4477153 9.44771525,12 10,12 L11,12 Z",
                            stroke: "none",
                            transform: "translate(-9, -7)"
                        })), e.VotedDown = ({
                            className: e,
                            width: t = 16
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 16 13"
                        }, a.createElement("path", {
                            d: "M18.38,7 L19.17,7.79 C19.37,8 19.5,8.28 19.5,8.59 L19.5,8.59 L19.48,8.82 L18.82,12 L23,12 C23.55,12 24,12.45 24,13 L24,13 L24,14.25 C24,14.44 23.96,14.63 23.89,14.8 L23.89,14.8 L21.63,19.09 C21.4,19.62 20.87,20 20.25,20 L20.25,20 L14.5,20 C13.67,20 13,19.33 13,18.5 L13,18.5 L13,13 C13,12.59 13.17,12.21 13.44,11.94 L13.44,11.94 L18.38,7 Z M11,12 C11.5522847,12 12,12.4477153 12,13 L12,19 C12,19.5522847 11.5522847,20 11,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,13 C9,12.4477153 9.44771525,12 10,12 L11,12 Z",
                            stroke: "none",
                            transform: "translate(23, 20) scale(-1, -1)"
                        })), e.NoTone = ({
                            className: e,
                            width: t = 19
                        }) => a.createElement(C, {
                            className: e,
                            width: t,
                            viewBox: "0 0 19 18"
                        }, a.createElement("g", {
                            transform: "translate(2 2)",
                            stroke: "#9FA6BF",
                            fill: "none"
                        }, a.createElement("circle", {
                            cx: "7.5",
                            cy: "7.5",
                            r: "7.5"
                        }), a.createElement("circle", {
                            fill: "#D8D8D8",
                            cx: "4.5",
                            cy: "5.5",
                            r: "1"
                        }), a.createElement("circle", {
                            fill: "#D8D8D8",
                            cx: "10.5",
                            cy: "5.5",
                            r: "1"
                        }), a.createElement("path", {
                            d: "M3.5 10.5l.571-.5A2.603 2.603 0 0 1 7.5 10a2.603 2.603 0 0 0 3.429 0l.571-.5"
                        }))), e.ClarityOutcome = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noStrokeIcon), {
                            width: t,
                            viewBox: "0 0 20 20",
                            dontScale: !0
                        }), a.createElement("path", {
                            fill: "#B3D1FF",
                            fillRule: "evenodd",
                            d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                            clipRule: "evenodd",
                            opacity: "0.6"
                        }), a.createElement("path", {
                            fill: "#548AFF",
                            d: "M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"
                        })), e.PlagiarismOutcome = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noStrokeIcon), {
                            width: t,
                            viewBox: "0 0 20 20",
                            dontScale: !0
                        }), a.createElement("path", {
                            fill: "#5CDAE6",
                            d: "M7.8 9.1c0-.8.7-1.5 1.5-1.5h5.2c.8 0 1.5.7 1.5 1.5v5.2c0 .8-.7 1.5-1.5 1.5H9.3c-.8 0-1.5-.7-1.5-1.5V9.1z"
                        }), a.createElement("path", {
                            fill: "#99F7FF",
                            d: "M4.1 5.4c0-.8.7-1.5 1.5-1.5h5.2c.8 0 1.5.7 1.5 1.5v5.2c0 .8-.7 1.5-1.5 1.5H5.6c-.8 0-1.5-.7-1.5-1.5V5.4z"
                        }), a.createElement("path", {
                            fill: "#79E8F2",
                            fillRule: "evenodd",
                            d: "M12.3 7.6v3c0 .8-.7 1.5-1.5 1.5h-3v-3c0-.8.7-1.5 1.5-1.5h3z",
                            clipRule: "evenodd"
                        })), e.DeliveryOutcome = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noStrokeIcon), {
                            width: t,
                            viewBox: "0 0 20 20",
                            dontScale: !0
                        }), a.createElement("path", {
                            fill: "#E8C7FF",
                            fillRule: "evenodd",
                            d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                            clipRule: "evenodd"
                        }), a.createElement("path", {
                            fill: "#D29CFA",
                            fillRule: "evenodd",
                            d: "M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z",
                            clipRule: "evenodd"
                        }), a.createElement("path", {
                            fill: "#BC78ED",
                            fillRule: "evenodd",
                            d: "M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z",
                            clipRule: "evenodd"
                        })), e.EngagementOutcome = ({
                            className: e,
                            width: t = 20
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noStrokeIcon), {
                            width: t,
                            viewBox: "0 0 20 20",
                            dontScale: !0
                        }), a.createElement("path", {
                            fill: "#B9F9EA",
                            fillRule: "evenodd",
                            d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                            clipRule: "evenodd"
                        }), a.createElement("path", {
                            fill: "#0FDCAC",
                            fillRule: "evenodd",
                            d: "M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z",
                            clipRule: "evenodd"
                        }), a.createElement("path", {
                            fill: "#C0F9EC",
                            fillRule: "evenodd",
                            d: "M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z",
                            clipRule: "evenodd"
                        })), e.Sparkles = ({
                            className: e,
                            width: t = 32
                        }) => a.createElement(C, Object.assign({}, (0, l.Sh)(e, $.noStrokeIcon), {
                            width: t,
                            viewBox: "0 0 32 32"
                        }), a.createElement("path", {
                            fill: "url(#sparkles_paint0_linear)",
                            d: "M11.5 2C10.6 12.11 8.75 13.93 1 15c7.75 1.07 9.6 2.89 10.5 13 .9-10.11 2.75-11.93 10.5-13-7.75-1.07-9.6-2.89-10.5-13z"
                        }), a.createElement("path", {
                            fill: "url(#sparkles_paint1_linear)",
                            d: "M25 1c-.52 5.06-1.57 5.97-6 6.5 4.43.53 5.48 1.44 6 6.5.52-5.06 1.57-5.97 6-6.5-4.43-.53-5.48-1.44-6-6.5z"
                        }), a.createElement("path", {
                            fill: "url(#sparkles_paint2_linear)",
                            d: "M22 18c-.52 5.06-1.57 5.97-6 6.5 4.43.53 5.48 1.44 6 6.5.52-5.06 1.57-5.97 6-6.5-4.43-.53-5.48-1.44-6-6.5z"
                        }), a.createElement("defs", null, a.createElement("linearGradient", {
                            id: "sparkles_paint0_linear",
                            x1: "11.5",
                            x2: "11.5",
                            y1: "27.99",
                            y2: "1.99",
                            gradientUnits: "userSpaceOnUse"
                        }, a.createElement("stop", {
                            stopColor: "#F90"
                        }), a.createElement("stop", {
                            offset: ".02",
                            stopColor: "#FF9C03"
                        }), a.createElement("stop", {
                            offset: ".27",
                            stopColor: "#FFB91D"
                        }), a.createElement("stop", {
                            offset: ".52",
                            stopColor: "#FFCE31"
                        }), a.createElement("stop", {
                            offset: ".77",
                            stopColor: "#FFDB3C"
                        }), a.createElement("stop", {
                            offset: "1",
                            stopColor: "#FFDF40"
                        })), a.createElement("linearGradient", {
                            id: "sparkles_paint1_linear",
                            x1: "25",
                            x2: "25",
                            y1: "14",
                            y2: "1",
                            gradientUnits: "userSpaceOnUse"
                        }, a.createElement("stop", {
                            stopColor: "#6FAD00"
                        }), a.createElement("stop", {
                            offset: ".04",
                            stopColor: "#73B202"
                        }), a.createElement("stop", {
                            offset: ".26",
                            stopColor: "#87CC0F"
                        }), a.createElement("stop", {
                            offset: ".49",
                            stopColor: "#96DE17"
                        }), a.createElement("stop", {
                            offset: ".73",
                            stopColor: "#9EE91C"
                        }), a.createElement("stop", {
                            offset: "1",
                            stopColor: "#A1ED1E"
                        })), a.createElement("linearGradient", {
                            id: "sparkles_paint2_linear",
                            x1: "22",
                            x2: "22",
                            y1: "31",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse"
                        }, a.createElement("stop", {
                            stopColor: "#7D0C7A"
                        }), a.createElement("stop", {
                            offset: ".09",
                            stopColor: "#930C90"
                        }), a.createElement("stop", {
                            offset: ".25",
                            stopColor: "#B30DAE"
                        }), a.createElement("stop", {
                            offset: ".42",
                            stopColor: "#CC0DC6"
                        }), a.createElement("stop", {
                            offset: ".59",
                            stopColor: "#DD0ED8"
                        }), a.createElement("stop", {
                            offset: ".78",
                            stopColor: "#E80EE2"
                        }), a.createElement("stop", {
                            offset: "1",
                            stopColor: "#EB0EE5"
                        }))))
                }(k || (k = {}));
            const L = (0, i.pipe)(c.s, (0, o.map)((e => ({
                    className: t
                }) => a.createElement(b, {
                    className: t
                }, a.createElement(e, null))))),
                _ = d.u.keyframes({
                    to: {
                        strokeDashoffset: 13
                    }
                }),
                M = d.u.keyframes({
                    to: {
                        strokeDashoffset: 0
                    }
                }),
                z = {
                    display: "inline-flex",
                    minWidth: d.u.rem(2),
                    minHeight: d.u.rem(2),
                    verticalAlign: "middle",
                    transition: "fill .2s, stroke .2s",
                    justifyContent: "center",
                    alignItems: "center",
                    stroke: h.Il.CoreNeutral50,
                    fill: h.Il.CoreNeutral50,
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
                            stroke: h.Il.CoreBlue50,
                            fill: h.Il.CoreBlue50
                        },
                        "&[data-disabled='true']": {
                            stroke: m.xO,
                            fill: m.xO
                        }
                    }
                },
                N = {
                    minWidth: d.u.rem(1.5),
                    minHeight: d.u.rem(1.5)
                },
                H = {
                    minWidth: d.u.rem(1.5),
                    minHeight: d.u.rem(1.5),
                    stroke: "none",
                    fill: h.Il.CoreYellow50,
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
                            stroke: "none",
                            fill: h.Il.CoreYellow50
                        }
                    }
                },
                S = {
                    stroke: h.Il.CoreNeutral50,
                    fill: "none",
                    strokeWidth: 1,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fillRule: "evenodd",
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true']": {
                            fill: "none"
                        }
                    }
                },
                B = {
                    fill: "none",
                    stroke: m.FW,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true']": {
                            fill: "none",
                            stroke: h.Il.CoreBlue50
                        }
                    }
                },
                F = {
                    animation: `${_} .5s linear forwards`,
                    strokeDasharray: 94,
                    strokeDashoffset: 94
                },
                A = {
                    animation: `${M} 1.5s linear forwards`,
                    strokeDasharray: 100,
                    strokeDashoffset: 100
                },
                D = {
                    fill: h.Il.CoreNeutral30,
                    stroke: "none",
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
                            stroke: "none"
                        }
                    }
                },
                O = {
                    position: "absolute",
                    top: d.u.rem(1.74),
                    left: d.u.rem(7.35),
                    zIndex: 1,
                    width: d.u.rem(1.5),
                    height: d.u.rem(1),
                    borderRadius: d.u.rem(u.mA),
                    background: h.Il.CoreGreen10,
                    color: h.Il.CoreGreen70,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: d.u.rem(.5),
                    lineHeight: d.u.rem(1)
                },
                V = {
                    position: "relative",
                    top: d.u.percent(50),
                    letterSpacing: d.u.px(.8),
                    transform: "translateY(-50%)"
                },
                T = {
                    stroke: h.Il.CoreNeutral50,
                    fill: "none",
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
                            stroke: h.Il.CoreBlue50,
                            fill: "none"
                        },
                        "&[data-disabled='true']": {
                            stroke: m.xO,
                            fill: "none"
                        }
                    }
                },
                P = {
                    $nest: {
                        "&:not([data-disabled='true'])[data-active='true']": {
                            stroke: h.Il.CoreGreen50,
                            fill: h.Il.CoreGreen50,
                            strokeWidth: d.u.px(2)
                        }
                    }
                },
                I = {
                    $nest: {
                        "&:not([data-disabled='true'])[data-active='true']": {
                            stroke: h.Il.CoreRed50,
                            fill: h.Il.CoreRed50,
                            strokeWidth: d.u.px(2)
                        }
                    }
                },
                R = {
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:first-child, &[data-active='true'] > svg > path:first-child": {
                            stroke: "none",
                            fill: h.Il.CoreGreen50
                        },
                        "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:last-child, &[data-active='true'] > svg > path:last-child": {
                            fill: "white"
                        }
                    }
                },
                j = {
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:first-child, &[data-active='true'] > svg > path:first-child": {
                            stroke: "none",
                            fill: h.Il.CoreRed50
                        },
                        "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:last-child, &[data-active='true'] > svg > path:last-child": {
                            stroke: "white"
                        }
                    }
                },
                W = {
                    $nest: {
                        "&:not([data-disabled='true'])[data-hovered='true'] > svg > path": {
                            stroke: h.Il.CoreBlue50
                        }
                    }
                },
                $ = d.u.stylesheet({
                    icon: [z],
                    iconSimple: [{
                        display: "inline-flex"
                    }],
                    gIcon: [N],
                    holder: [{
                        transform: "scale(calc(var(--rem)/16))"
                    }],
                    starIcon: [{
                        fillOpacity: 0,
                        $nest: {
                            "&:not([data-disabled='true'])[data-active='true']": {
                                fillOpacity: 1
                            }
                        }
                    }],
                    diamondIcon: [H],
                    toolbarIcon: [S],
                    exitIcon: [B],
                    circle: [F],
                    checkmark: [A],
                    emote: [D],
                    newIcon: [O],
                    newIconCaption: [V],
                    noStrokeIcon: [{
                        stroke: "none",
                        $nest: {
                            "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
                                stroke: "none"
                            },
                            "&[data-disabled='true']": {
                                stroke: "none"
                            }
                        }
                    }],
                    yesCircleIcon: [T],
                    noCircleIcon: [T],
                    yesIcon: [P],
                    closeIcon: [I],
                    voteYes: [R],
                    voteNo: [j],
                    smartPhrasesAddPhrasesCirclePlus: [{
                        $nest: {
                            "&:not([data-disabled='true'])[data-hovered='true'] > svg > path": {
                                stroke: "white"
                            }
                        }
                    }],
                    smartPhrasesOpenFeedbackFormArrow: [W]
                })
        },
        97528: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r, a = n(27378),
                o = n(40327),
                i = n(38983),
                s = n(18208),
                l = n(5114),
                c = n(49708),
                h = n(41398),
                d = n(98403),
                m = n(85985),
                u = n(2834),
                p = n(66310),
                f = n(40151),
                v = n(80900),
                g = n(95093),
                w = n(9223);
            ! function(e) {
                e.genUuid = () => s.alphanumeric(12), e.defaultState = {
                    visible: !1,
                    content: l.none
                }, e.Context = a.createContext(void 0);
                class t {
                    constructor(t = i.h.create(e.defaultState)) {
                        this._state = t, this.visible = this._state.lens("visible"), this.content = this._state.lens("content"), this.hasContent = this._state.view((e => l.isSome(e.content))), this.state = this._state.view((e => (0, o.pipe)(e.content, l.filter((() => e.visible))))), this.show = () => {
                            this.visible.set(!0)
                        }, this.hide = () => {
                            this._state.set(e.defaultState)
                        }
                    }
                    getTooltipObservable(t, n, r, a) {
                        const i = e.genUuid(),
                            s = () => this._state.modify((t => (0, o.pipe)(t.content, l.exists((e => e.uuid === i))) ? e.defaultState : t));
                        return c.R(t, "mouseenter").pipe(h.M(d.Dx(n).pipe(m.h(Boolean)), ((e, t) => t)), u.b((e => this.content.set(l.some({
                            target: t,
                            content: e,
                            alignment: r,
                            uuid: i
                        })))), p.w((() => (0, o.pipe)(a, l.fold((() => f.E), (e => v.H(e)))).pipe(g.T(c.R(t, "mouseleave")), u.b(s)))), w.x(s))
                    }
                }
                e.Impl = t, e.DefaultProvider = ({
                    children: n
                }) => a.createElement(e.Context.Provider, {
                    value: new t
                }, n)
            }(r || (r = {}))
        },
        16951: (e, t, n) => {
            n.d(t, {
                u: () => l
            });
            var r = n(27378),
                a = n(31542),
                o = n(5114),
                i = n(45586),
                s = n(97528);
            class l extends r.Component {
                constructor() {
                    super(...arguments), this._subs = new i.w.Keeper, this._attachEvents = e => {
                        this._subs.push(this.context.getTooltipObservable(a.findDOMNode(this), e.title, e.align || "auto", o.fromNullable(e.duration)).subscribe())
                    }
                }
                componentDidMount() {
                    this._attachEvents(this.props)
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this._subs.dispose(), this._attachEvents(e)
                }
                componentWillUnmount() {
                    this._subs.dispose()
                }
                render() {
                    return r.Children.only(this.props.children)
                }
            }
            l.contextType = s.G.Context
        },
        3656: (e, t, n) => {
            n.d(t, {
                ZT: () => l,
                H1: () => c,
                H2: () => h,
                H3: () => d,
                H4: () => m,
                H5: () => u,
                Xk: () => p,
                XY: () => f,
                x4: () => v,
                CL: () => g,
                ck: () => w,
                zx: () => E,
                P1: () => C
            });
            var r = n(59312),
                a = n(27378),
                o = n(5739),
                i = n(12187),
                s = n(2040);

            function l(e) {
                var {
                    nodeType: t,
                    styleType: n,
                    className: l
                } = e, c = (0, r.__rest)(e, ["nodeType", "styleType", "className"]);
                const h = o.F[t];
                return a.createElement(h, Object.assign({}, (0, i.Sh)(s[n], l), c))
            }! function(e) {
                let t;
                ! function(e) {
                    e.H1 = "header1", e.H2 = "header2", e.H3 = "header3", e.H3Legacy = "header3legacy", e.H4 = "header4", e.H5 = "header5", e.Paper = "paper", e.Base = "base", e.Small = "small", e.SmallLight = "smallLight", e.Lawyer = "lawyer", e.Title = "title", e.Button = "button", e.Score = "score", e.P1 = "p1"
                }(t = e.Type || (e.Type = {}))
            }(l || (l = {}));
            const c = e => a.createElement(l, Object.assign({
                    styleType: l.Type.H1,
                    nodeType: "h1"
                }, e)),
                h = e => a.createElement(l, Object.assign({
                    styleType: l.Type.H2,
                    nodeType: "h2"
                }, e)),
                d = e => a.createElement(l, Object.assign({
                    styleType: l.Type.H3,
                    nodeType: "h3"
                }, e)),
                m = e => a.createElement(l, Object.assign({
                    styleType: l.Type.H4,
                    nodeType: "h4"
                }, e)),
                u = e => a.createElement(l, Object.assign({
                    styleType: l.Type.H5,
                    nodeType: "h5"
                }, e)),
                p = e => a.createElement(l, Object.assign({
                    styleType: l.Type.Paper,
                    nodeType: "span"
                }, e)),
                f = e => a.createElement(l, Object.assign({
                    styleType: l.Type.Base,
                    nodeType: "div"
                }, e)),
                v = e => a.createElement(l, Object.assign({
                    styleType: l.Type.Small,
                    nodeType: "small"
                }, e)),
                g = e => a.createElement(l, Object.assign({
                    styleType: l.Type.SmallLight,
                    nodeType: "div"
                }, e)),
                w = e => a.createElement(l, Object.assign({
                    styleType: l.Type.Lawyer,
                    nodeType: "span"
                }, e)),
                E = e => a.createElement(l, Object.assign({
                    styleType: l.Type.Button,
                    nodeType: "div"
                }, e)),
                C = e => a.createElement(l, Object.assign({
                    styleType: l.Type.P1,
                    nodeType: "div"
                }, e))
        },
        2040: (e, t, n) => {
            n.r(t), n.d(t, {
                header1: () => o,
                header2: () => i,
                header3: () => s,
                header3legacy: () => l,
                button: () => c,
                header4: () => h,
                paper: () => d,
                base: () => m,
                small: () => u,
                smallLight: () => p,
                score: () => f,
                lawyer: () => v,
                title: () => g,
                p1: () => w,
                header5: () => E
            });
            var r = n(90351),
                a = n(63969);
            const o = a.u.style({
                    margin: 0,
                    color: r.xv.H1Color,
                    letterSpacing: r.xv.H1LetterSpacing,
                    fontWeight: r.xv.H1Weight,
                    fontSize: a.u.rem(r.xv.H1Size),
                    lineHeight: a.u.rem(r.xv.H1LineHeight)
                }),
                i = a.u.style({
                    margin: 0,
                    color: r.xv.H2Color,
                    textTransform: "capitalize",
                    letterSpacing: r.xv.H2LetterSpacing,
                    fontWeight: r.xv.H2Weight,
                    fontSize: a.u.rem(r.xv.H2Size),
                    lineHeight: a.u.rem(r.xv.H2LineHeight)
                }),
                s = a.u.style({
                    margin: 0,
                    color: r.xv.H3Color,
                    letterSpacing: a.u.rem(r.xv.H3LetterSpacing),
                    fontWeight: r.xv.H3Weight,
                    fontSize: a.u.rem(r.xv.H3Size),
                    lineHeight: a.u.rem(r.xv.H3LineHeight)
                }),
                l = a.u.style({
                    margin: 0,
                    color: r.Il.CoreNeutral50,
                    textTransform: "uppercase",
                    letterSpacing: a.u.rem(.04625),
                    fontWeight: 700,
                    fontSize: a.u.rem(.6875),
                    lineHeight: a.u.rem(1.5)
                }),
                c = a.u.style({
                    margin: 0,
                    color: r.xv.ButtonColor,
                    letterSpacing: a.u.rem(r.xv.ButtonLetterSpacing),
                    fontWeight: r.xv.ButtonWeight,
                    fontSize: a.u.rem(r.xv.ButtonSize),
                    lineHeight: a.u.rem(r.xv.ButtonLineHeight)
                }),
                h = a.u.style({
                    margin: 0,
                    color: r.xv.H4Color,
                    letterSpacing: a.u.rem(r.xv.H4LetterSpacing),
                    fontWeight: r.xv.H4Weight,
                    fontSize: a.u.rem(r.xv.H4Size),
                    lineHeight: a.u.rem(r.xv.H4LineHeight)
                }),
                d = a.u.style({
                    color: r.xv.PaperColor,
                    letterSpacing: a.u.rem(r.xv.PaperLetterSpacing),
                    fontWeight: r.xv.PaperWeight,
                    fontSize: a.u.rem(r.xv.PaperSize),
                    lineHeight: a.u.rem(r.xv.PaperLineHeight)
                }),
                m = a.u.style({
                    color: r.xv.BodyColor,
                    letterSpacing: a.u.rem(r.xv.BodyLetterSpacing),
                    fontWeight: r.xv.BodyWeight,
                    fontSize: a.u.rem(r.xv.BodySize),
                    lineHeight: a.u.rem(r.xv.BodyLineHeight)
                }),
                u = a.u.style({
                    color: r.xv.SmallColor,
                    letterSpacing: a.u.rem(r.xv.SmallLetterSpacing),
                    fontWeight: r.xv.SmallWeight,
                    fontSize: a.u.rem(r.xv.SmallSize),
                    lineHeight: a.u.rem(r.xv.SmallLineHeight)
                }),
                p = a.u.style({
                    color: r.xv.SmallLightColor,
                    letterSpacing: a.u.rem(r.xv.SmallLightLetterSpacing),
                    fontWeight: r.xv.SmallLightWeight,
                    fontSize: a.u.rem(r.xv.SmallLightSize),
                    lineHeight: a.u.rem(r.xv.SmallLightLineHeight)
                }),
                f = a.u.style({
                    color: r.xv.ScoreColor,
                    letterSpacing: a.u.rem(r.xv.ScoreLetterSpacing),
                    fontWeight: r.xv.ScoreWeight,
                    fontSize: a.u.rem(r.xv.ScoreSize),
                    lineHeight: a.u.rem(r.xv.ScoreLineHeight)
                }),
                v = a.u.style({
                    color: r.Il.CoreNeutral70,
                    letterSpacing: ".1px",
                    fontWeight: 400,
                    fontSize: a.u.rem(.6875),
                    lineHeight: a.u.rem(1)
                }),
                g = a.u.style({
                    color: r.Il.CoreNeutral90,
                    textTransform: "uppercase",
                    letterSpacing: ".8px",
                    fontWeight: 700,
                    fontSize: a.u.rem(.75),
                    lineHeight: a.u.rem(2)
                }),
                w = a.u.style({
                    color: r.Il.CoreNeutral90,
                    letterSpacing: 0,
                    fontSize: a.u.rem(.9375),
                    lineHeight: a.u.rem(1.5)
                }),
                E = a.u.style({
                    margin: 0,
                    color: r.Il.CoreNeutral50,
                    textTransform: "uppercase",
                    letterSpacing: a.u.rem(.04625),
                    fontWeight: 400,
                    fontSize: a.u.rem(.5625),
                    lineHeight: a.u.rem(1)
                })
        },
        24588: (e, t, n) => {
            n.d(t, {
                zh: () => r,
                jj: () => a,
                xO: () => o,
                FW: () => i,
                UE: () => s,
                mb: () => l,
                kl: () => c,
                AX: () => h,
                lh: () => d,
                Re: () => m,
                BZ: () => u,
                Xd: () => p,
                b6: () => f
            });
            const r = "#f7f8ff",
                a = "#f1f2fa",
                o = "#e4e6f2",
                i = "#97a0bf",
                s = "#8189a9",
                l = "#17d9aa",
                c = "#f23452",
                h = "#fab712",
                d = "#c770c8",
                m = "0 12px 48px 0 rgba(96, 101, 123, .24)",
                u = "linear-gradient(to left, #6391ff 0%, #2a42ef 100%)",
                p = "linear-gradient(to right, #6391ff 0%, #2a42ef 100%)",
                f = "linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)"
        },
        40219: (e, t, n) => {
            n.d(t, {
                LB: () => r,
                Jr: () => a,
                fx: () => o,
                mA: () => i,
                VN: () => s,
                FY: () => l,
                I3: () => c,
                $n: () => h,
                DY: () => d,
                w$: () => m,
                nt: () => u,
                g_: () => p,
                xL: () => f,
                Q9: () => v,
                pZ: () => g,
                rX: () => w,
                mJ: () => E,
                Ig: () => C,
                v4: () => b
            });
            const r = 0,
                a = .5,
                o = .25,
                i = .125,
                s = 1,
                l = 10,
                c = 100,
                h = 1e3,
                d = 1e4,
                m = 10001,
                u = 11e3,
                p = "'ss01'",
                f = "'ss02'",
                v = "'tnum'",
                g = "max-height: 760px",
                w = .04625,
                E = 3.5,
                C = 2,
                b = 300
        },
        24232: (e, t) => {
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                a = n ? Symbol.for("react.portal") : 60106,
                o = n ? Symbol.for("react.fragment") : 60107,
                i = n ? Symbol.for("react.strict_mode") : 60108,
                s = n ? Symbol.for("react.profiler") : 60114,
                l = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                h = n ? Symbol.for("react.async_mode") : 60111,
                d = n ? Symbol.for("react.concurrent_mode") : 60111,
                m = n ? Symbol.for("react.forward_ref") : 60112,
                u = n ? Symbol.for("react.suspense") : 60113,
                p = n ? Symbol.for("react.suspense_list") : 60120,
                f = n ? Symbol.for("react.memo") : 60115,
                v = n ? Symbol.for("react.lazy") : 60116,
                g = n ? Symbol.for("react.fundamental") : 60117,
                w = n ? Symbol.for("react.responder") : 60118,
                E = n ? Symbol.for("react.scope") : 60119;

            function C(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case h:
                                case d:
                                case o:
                                case s:
                                case i:
                                case u:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case m:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                            case v:
                            case f:
                            case a:
                                return t
                    }
                }
            }

            function b(e) {
                return C(e) === d
            }
            t.isFragment = function(e) {
                return C(e) === o
            }
        },
        80493: (e, t, n) => {
            e.exports = n(24232)
        },
        98403: (e, t, n) => {
            n.d(t, {
                PU: () => _,
                wW: () => M,
                Ft: () => N,
                wX: () => H,
                gw: () => S,
                Dx: () => B,
                ab: () => F,
                GQ: () => A,
                RX: () => D,
                Hl: () => O,
                b2: () => z,
                jw: () => V,
                aI: () => T
            });
            var r = n(25656),
                a = n(38983),
                o = n(8125),
                i = n(5114),
                s = n(95195),
                l = n(22232),
                c = n(83078),
                h = n(40151),
                d = n(76974),
                m = n(13444),
                u = n(44586),
                p = n(77176),
                f = n(12126),
                v = n(93508),
                g = n(91224),
                w = n(24209),
                E = n(17343),
                C = n(78674),
                b = n(28043),
                x = n(66310),
                y = n(8473),
                k = n(55935),
                L = n(14601),
                _ = void 0;

            function M(e) {
                return function(t) {
                    return e.set(t)
                }
            }
            var z, N = function(e) {
                    return (0, o.RN)(e, h.E)
                },
                H = function(e) {
                    return (0, o.RN)(h.E, e)
                },
                S = function(e, t) {
                    return d.of(e).pipe(m.g(t))
                };

            function B(e) {
                return e instanceof u.y ? e : d.of(e)
            }

            function F(e, t) {
                return e instanceof u.y ? e.pipe(p.U(t)) : t(e)
            }

            function A(e) {
                return f.D(e().then((function(e) {
                    return i.some(s.right(e))
                })).catch((function(e) {
                    return i.some(s.left(e))
                }))).pipe(v.O(i.none))
            }

            function D(e) {
                return function(t, n) {
                    return n.pipe(g.K((function(n, r) {
                        return e.error(t + " exception", n), r
                    }))).subscribe()
                }
            }

            function O(e, t, n) {
                return void 0 === n && (n = !0), w.T(e.pipe(E.h(n)), e.pipe(C.b(t), E.h(!n))).pipe(b.x())
            }

            function V(e, t) {
                var n = function(t) {
                    return "function" == typeof e ? e(t) : t[e]
                };
                return t.view(n).view((function(e) {
                    return function(e, t) {
                        var n = t.get();
                        (0, l.kG)(e(n), "first value should satisfy predicate");
                        var r = a.h.create(n),
                            o = r.set.bind(r);
                        r.set = function(n) {
                            e(n) ? o(n) : i.closed || t.set(n)
                        };
                        var i = t.pipe(y.o(e), k.T(1)).subscribe(M(r)).add(void 0 !== t.set ? r.subscribe(M(t)) : L.w.EMPTY);
                        return r
                    }((function(t) {
                        return n(t) === e
                    }), t)
                }))
            }

            function T(e) {
                return c.mapOrDefault((function(t) {
                    return u.y.create((function(n) {
                        try {
                            return e(t)
                        } catch (e) {
                            return n.error(e), r.Z
                        }
                    }))
                }), h.E)
            }! function(e) {
                e.ricScheduler = function(t) {
                    return "requestIdleCallback" in self ? function(e) {
                        var n = self;
                        return u.y.create((function(r) {
                            var a = n.requestIdleCallback((function(t) {
                                (t.timeRemaining() > 0 || t.didTimeout) && r.next(e)
                            }), {
                                timeout: t
                            });
                            return function() {
                                return n.cancelIdleCallback(a)
                            }
                        }))
                    } : e.rafScheduler
                }, e.rafScheduler = function(e) {
                    return u.y.create((function(t) {
                        var n = requestAnimationFrame((function() {
                            return t.next(e)
                        }));
                        return function() {
                            return cancelAnimationFrame(n)
                        }
                    }))
                }, e.syncScheduler = function(e) {
                    return d.of(e)
                }, e.inRaf = function(t) {
                    return t.pipe(x.w(e.rafScheduler))
                }, e.inRic = function(t, n) {
                    return t.pipe(x.w(e.ricScheduler(n)))
                }
            }(z || (z = {}))
        },
        85089: (e, t, n) => {
            n.d(t, {
                YC: () => b,
                n: () => x,
                rl: () => y,
                Qr: () => k,
                Lw: () => L
            });
            var r, a = n(97329),
                o = n(19962),
                i = n(8125),
                s = n(81531),
                l = n(44586),
                c = n(2834),
                h = n(18625),
                d = n(49708),
                m = n(38194),
                u = n(76974),
                p = n(66310),
                f = n(8175),
                v = n(93508),
                g = n(77176);

            function w() {
                return r || (r = s.Monitoring.Logging.getLogger("denaliplatform.utils.rxdom"))
            }
            var E = a.default || a,
                C = function(e) {
                    return l.y.create((function(t) {
                        var n = null;
                        try {
                            n = e((function(e) {
                                return t.next(e)
                            }))
                        } catch (e) {
                            t.error(e)
                        }
                        return function() {
                            n && n()
                        }
                    }))
                };

            function b(e) {
                return C((function(t) {
                    var n = new E((function(e) {
                        self.requestAnimationFrame((function() {
                            e.length > 0 ? t(o.Rect.fromRectLike(e[0].contentRect)) : w().warn("ResizeObserver was fired but the callback didn't have any entries")
                        }))
                    }));
                    return n.observe(e),
                        function() {
                            return n.disconnect()
                        }
                })).pipe(c.b(i.ZT, (function(e) {
                    return w().error("Failed to instantiate ResizeObservable.", e)
                })))
            }

            function x(e, t) {
                return C((function(n) {
                    var r = new IntersectionObserver(n, t);
                    return r.observe(e),
                        function() {
                            return r.disconnect()
                        }
                }))
            }

            function y(e, t) {
                return C((function(n) {
                    var r = new MutationObserver(n);
                    return r.observe(e, t),
                        function() {
                            return r.disconnect()
                        }
                }))
            }
            var k = h.P((function() {
                return d.R(self, "resize")
            })).pipe(m.B());

            function L(e) {
                return u.of((function() {
                    return self.matchMedia(e)
                })).pipe(p.w((function(e) {
                    var t = e();
                    return f.R((function(e) {
                        return t.addListener(e)
                    }), (function(e) {
                        return t.removeListener(e)
                    })).pipe(v.O(t))
                })), g.U((function(e) {
                    return e.matches
                })))
            }
        },
        19751: (e, t, n) => {
            n.d(t, {
                d: () => o,
                $f: () => i
            });
            var r = n(34891),
                a = n(28043),
                o = r.d;

            function i(e) {
                return (0, a.x)(e.equals)
            }
        },
        60797: (e, t, n) => {
            n.d(t, {
                cp: () => l,
                oA: () => c
            });
            var r = n(5114),
                a = n(66310),
                o = n(40151),
                i = n(76974),
                s = n(28043);

            function l(e) {
                return a.w(r.fold((function() {
                    return o.E
                }), e))
            }
            var c = l(i.of);
            s.x((function(e, t) {
                return r.isNone(e) && r.isNone(t) || r.isSome(e) && r.isSome(t)
            }))
        },
        88056: (e, t, n) => {
            var r;
            n.d(t, {
                    Y: () => r
                }),
                function(e) {
                    e.invariantContent = function(e) {
                        return "function" == typeof Proxy ? new Proxy({}, {
                            get: function(t, n) {
                                if (!t[n]) throw new Error("Please provide context using " + e + ".Context.Provider");
                                return t[n]
                            }
                        }) : void 0
                    }
                }(r || (r = {}))
        },
        97881: (e, t, n) => {
            t.s = void 0;
            var r = n(27378);
            ! function(e) {
                e.Reload = function() {
                    return r.createElement("svg", {
                        width: "32",
                        viewBox: "0 0 32 32"
                    }, r.createElement("path", {
                        fill: "none",
                        d: "M14.5 11.393A5.428 5.428 0 0011 16.5a5.502 5.502 0 003.536 5.139m3.928-10.246C20.532 12.183 22 14.154 22 16.5a5.475 5.475 0 01-3.506 5.139M11.5 11h3v3m7 8h-3v-3"
                    }))
                }, e.Collapse = function() {
                    return r.createElement("svg", {
                        width: "32",
                        viewBox: "0 0 32 32"
                    }, r.createElement("path", {
                        fill: "none",
                        d: "M11.5 7.5L16 12l4.5-4.5m-9 17L16 20l4.5 4.5",
                        strokeLinecap: "round"
                    }))
                }, e.MoreVertical = function() {
                    return r.createElement("svg", {
                        width: "32",
                        viewBox: "0 0 32 32"
                    }, r.createElement("path", {
                        d: "M17.5 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17.5 22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
                        strokeWidth: "0"
                    }))
                }
            }(t.s || (t.s = {}))
        },
        90351: (e, t) => {
            t.uc = t.xv = t.OC = t.cM = t.Zh = t.Il = t._5 = t.L3 = t.U9 = t.Bf = t.LK = void 0,
                function(e) {
                    e.Badge = "0.4px"
                }(t.LK || (t.LK = {})),
                function(e) {
                    e.Badge = .625
                }(t.Bf || (t.Bf = {})),
                function(e) {
                    e.Badge = 400
                }(t.U9 || (t.U9 = {})),
                function(e) {
                    e.Badge = 1
                }(t.L3 || (t.L3 = {})),
                function(e) {
                    e.Badge = "uppercase"
                }(t._5 || (t._5 = {})),
                function(e) {
                    e.TextBadge = "rgb(13, 128, 101)", e.TextButtonPrimaryDisabled = "rgb(255, 255, 255)", e.TextButtonGhostDisabled = "rgb(198, 203, 222)", e.TextButtonDocumentSettingsHint = "rgb(109, 117, 141)", e.TextFooterWordCounter = "rgb(109, 117, 141)", e.BackgroundBadge = "rgb(215, 247, 240)", e.BackgroundButtonPrimaryNormal = "rgb(74, 110, 224)", e.BackgroundButtonPrimaryHover = "rgb(99, 142, 235)", e.BackgroundButtonPrimaryDisabled = "rgb(153, 194, 255)", e.BackgroundButtonGhostActive = "rgb(237, 245, 255)", e.BackgroundButtonGhostHover = "rgb(249, 250, 255)", e.BackgroundButtonSelectionUnselectedDefault = "rgb(240, 242, 252)", e.BackgroundButtonSelectionUnselectedHover = "rgb(231, 233, 245)", e.BackgroundButtonSelectionSelectedDefault = "rgb(74, 110, 224)", e.BackgroundButtonSelectionSelectedHover = "rgb(99, 142, 235)", e.BackgroundCardApply = "rgb(17, 166, 131)", e.BackgroundNotification = "rgb(51, 57, 84)", e.BackgroundTooltip = "rgb(51, 57, 84)", e.CoreNeutral0 = "rgb(255, 255, 255)", e.CoreNeutral1 = "rgb(249, 250, 255)", e.CoreNeutral10 = "rgb(240, 242, 252)", e.CoreNeutral20 = "rgb(231, 233, 245)", e.CoreNeutral30 = "rgb(198, 203, 222)", e.CoreNeutral40 = "rgb(159, 166, 191)", e.CoreNeutral50 = "rgb(109, 117, 141)", e.CoreNeutral60 = "rgb(77, 83, 110)", e.CoreNeutral70 = "rgb(51, 57, 84)", e.CoreNeutral80 = "rgb(31, 36, 60)", e.CoreNeutral90 = "rgb(14, 16, 26)", e.CoreGreen1 = "rgb(235, 255, 250)", e.CoreGreen10 = "rgb(215, 247, 240)", e.CoreGreen20 = "rgb(170, 242, 225)", e.CoreGreen30 = "rgb(135, 232, 209)", e.CoreGreen40 = "rgb(65, 217, 181)", e.CoreGreen50 = "rgb(21, 195, 154)", e.CoreGreen60 = "rgb(17, 166, 131)", e.CoreGreen70 = "rgb(13, 128, 101)", e.CoreBlue1 = "rgb(237, 245, 255)", e.CoreBlue10 = "rgb(219, 235, 255)", e.CoreBlue20 = "rgb(153, 194, 255)", e.CoreBlue30 = "rgb(121, 168, 242)", e.CoreBlue40 = "rgb(99, 142, 235)", e.CoreBlue50 = "rgb(74, 110, 224)", e.CoreBlue60 = "rgb(54, 89, 181)", e.CoreRed1 = "rgb(253, 240, 243)", e.CoreRed10 = "rgb(255, 219, 227)", e.CoreRed20 = "rgb(255, 153, 171)", e.CoreRed30 = "rgb(242, 115, 136)", e.CoreRed40 = "rgb(238, 68, 95)", e.CoreRed50 = "rgb(234, 21, 55)", e.CoreRed60 = "rgb(206, 19, 49)", e.CoreYellow1 = "rgb(255, 248, 236)", e.CoreYellow10 = "rgb(255, 241, 212)", e.CoreYellow20 = "rgb(255, 223, 128)", e.CoreYellow30 = "rgb(255, 201, 64)", e.CoreYellow40 = "rgb(255, 182, 26)", e.CoreYellow50 = "rgb(255, 166, 0)", e.CoreYellow60 = "rgb(242, 145, 0)", e.CoreYellow70 = "rgb(187, 110, 0)", e.CoreYellow80 = "rgb(140, 84, 4)", e.CorePurple1 = "rgb(249, 240, 255)", e.CorePurple10 = "rgb(242, 224, 255)", e.CorePurple20 = "rgb(211, 161, 247)", e.CorePurple30 = "rgb(189, 121, 237)", e.CorePurple40 = "rgb(169, 99, 218)", e.CorePurple50 = "rgb(143, 77, 191)", e.CorePurple60 = "rgb(126, 61, 173)", e.CoreCyan1 = "rgb(237, 254, 255)", e.CoreCyan10 = "rgb(219, 252, 255)", e.CoreCyan20 = "rgb(147, 237, 245)", e.CoreCyan30 = "rgb(117, 225, 235)", e.CoreCyan40 = "rgb(77, 208, 219)", e.CoreCyan50 = "rgb(40, 186, 199)", e.CoreCyan60 = "rgb(9, 164, 178)"
                }(t.Il || (t.Il = {})),
                function(e) {
                    e.BadgeY = 0, e.BadgeX = .25, e.ButtonOutcomeY = .3125, e.ButtonOutcomeX = .5, e.ButtonPrimaryX = .5
                }(t.Zh || (t.Zh = {})),
                function(e) {
                    e.Badge = "3px"
                }(t.cM || (t.cM = {})),
                function(e) {
                    e.ButtonSelectionRight = "1px"
                }(t.OC || (t.OC = {})),
                function(e) {
                    e.H1Size = 1.75, e.H1Color = "rgb(14, 16, 26)", e.H1LetterSpacing = "-0.07px", e.H1LineHeight = 2, e.H1Weight = 700, e.H2Size = 1.5, e.H2Color = "rgb(14, 16, 26)", e.H2LetterSpacing = "-0.048000000715255745px", e.H2LineHeight = 2, e.H2Weight = 700, e.H3Size = 1.25, e.H3Color = "rgb(14, 16, 26)", e.H3LetterSpacing = 0, e.H3LineHeight = 1.5, e.H3Weight = 700, e.H4Size = 1, e.H4Color = "rgb(14, 16, 26)", e.H4LetterSpacing = 0, e.H4LineHeight = 1.5, e.H4Weight = 700, e.SubheadingSize = .625, e.SubheadingColor = "rgb(77, 83, 110)", e.SubheadingLetterSpacing = "0.4px", e.SubheadingLineHeight = 1, e.SubheadingWeight = 400, e.BodySize = .875, e.BodyColor = "rgb(14, 16, 26)", e.BodyLetterSpacing = 0, e.BodyLineHeight = 1.5, e.BodyWeight = 400, e.ButtonSize = .875, e.ButtonColor = "rgb(74, 110, 224)", e.ButtonLetterSpacing = 0, e.ButtonLineHeight = 2, e.ButtonWeight = 700, e.ButtonTextTransform = "none", e.SmallSize = .75, e.SmallColor = "rgb(14, 16, 26)", e.SmallLetterSpacing = 0, e.SmallLineHeight = 1.125, e.SmallWeight = 400, e.PaperSize = 1.0625, e.PaperColor = "rgb(14, 16, 26)", e.PaperLetterSpacing = 0, e.PaperLineHeight = 2, e.PaperWeight = 400, e.ScoreSize = 1.125, e.ScoreColor = "rgba(0, 0, 0, 1)", e.ScoreLetterSpacing = 0, e.ScoreLineHeight = 1.25, e.ScoreWeight = 700, e.SmallLightSize = .75, e.SmallLightColor = "rgba(14, 16, 26, 1)", e.SmallLightLetterSpacing = 0, e.SmallLightLineHeight = 1.125, e.SmallLightWeight = 300, e.NewSuccessDescriptionSize = .75, e.NewSuccessDescriptionColor = "rgba(14, 16, 26, 1)", e.NewSuccessDescriptionLetterSpacing = 0, e.NewSuccessDescriptionLineHeight = 1.125, e.NewSuccessDescriptionWeight = 400
                }(t.xv || (t.xv = {})),
                function(e) {
                    e.Z100 = "0px 1px 8px rgba(109, 117, 141, 0.18000000715255737)", e.Z200 = "0px 4px 16px rgba(109, 117, 141, 0.20000000298023224)", e.Z300 = "0px 12px 48px rgba(109, 117, 141, 0.20000000298023224)"
                }(t.uc || (t.uc = {}))
        },
        97329: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => k
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function e(e, t) {
                        var n = -1;
                        return e.some((function(e, r) {
                            return e[0] === t && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var n = e(this.__entries__, t),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, t.prototype.set = function(t, n) {
                            var r = e(this.__entries__, t);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                        }, t.prototype.delete = function(t) {
                            var n = this.__entries__,
                                r = e(n, t);
                            ~r && n.splice(r, 1)
                        }, t.prototype.has = function(t) {
                            return !!~e(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var a = r[n];
                                e.call(t, a[1], a[0])
                            }
                        }, t
                    }()
                }(),
                a = "undefined" != typeof self && "undefined" != typeof document && self.document === document,
                o = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math || "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
                i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(e) {
                    return setTimeout((function() {
                        return e(Date.now())
                    }), 1e3 / 60)
                };
            var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                c = function() {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                            var n = !1,
                                r = !1,
                                a = 0;

                            function o() {
                                n && (n = !1, e()), r && l()
                            }

                            function s() {
                                i(o)
                            }

                            function l() {
                                var e = Date.now();
                                if (n) {
                                    if (e - a < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(s, t);
                                a = e
                            }
                            return l
                        }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter((function(e) {
                            return e.gatherActive(), e.hasActive()
                        }));
                        return e.forEach((function(e) {
                            return e.broadcastActive()
                        })), e.length > 0
                    }, e.prototype.connect_ = function() {
                        a && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), self.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function() {
                        a && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), self.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        s.some((function(e) {
                            return !!~n.indexOf(e)
                        })) && this.refresh()
                    }, e.getInstance = function() {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                h = function(e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var a = r[n];
                        Object.defineProperty(e, a, {
                            value: t[a],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                d = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || o
                },
                m = w(0, 0, 0, 0);

            function u(e) {
                return parseFloat(e) || 0
            }

            function p(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce((function(t, n) {
                    return t + u(e["border-" + n + "-width"])
                }), 0)
            }

            function f(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return m;
                var r = d(e).getComputedStyle(e),
                    a = function(e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var a = r[n],
                                o = e["padding-" + a];
                            t[a] = u(o)
                        }
                        return t
                    }(r),
                    o = a.left + a.right,
                    i = a.top + a.bottom,
                    s = u(r.width),
                    l = u(r.height);
                if ("border-box" === r.boxSizing && (Math.round(s + o) !== t && (s -= p(r, "left", "right") + o), Math.round(l + i) !== n && (l -= p(r, "top", "bottom") + i)), ! function(e) {
                        return e === d(e).document.documentElement
                    }(e)) {
                    var c = Math.round(s + o) - t,
                        h = Math.round(l + i) - n;
                    1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(h) && (l -= h)
                }
                return w(a.left, a.top, s, l)
            }
            var v = "undefined" != typeof SVGGraphicsElement ? function(e) {
                return e instanceof d(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
            };

            function g(e) {
                return a ? v(e) ? function(e) {
                    var t = e.getBBox();
                    return w(0, 0, t.width, t.height)
                }(e) : f(e) : m
            }

            function w(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var E = function() {
                    function e(e) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = w(0, 0, 0, 0), this.target = e
                    }
                    return e.prototype.isActive = function() {
                        var e = g(this.target);
                        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    }, e.prototype.broadcastRect = function() {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                    }, e
                }(),
                C = function(e, t) {
                    var n, r, a, o, i, s, l, c = (r = (n = t).x, a = n.y, o = n.width, i = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(s.prototype), h(l, {
                        x: r,
                        y: a,
                        width: o,
                        height: i,
                        top: a,
                        right: r + o,
                        bottom: i + a,
                        left: r
                    }), l);
                    h(this, {
                        target: e,
                        contentRect: c
                    })
                },
                b = function() {
                    function e(e, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return e.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new E(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach((function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        }))
                    }, e.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map((function(e) {
                                    return new C(e.target, e.broadcastRect())
                                }));
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                x = "undefined" != typeof WeakMap ? new WeakMap : new r,
                y = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = c.getInstance(),
                        r = new b(t, n, this);
                    x.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(e) {
                y.prototype[e] = function() {
                    var t;
                    return (t = x.get(this))[e].apply(t, arguments)
                }
            }));
            const k = void 0 !== o.ResizeObserver ? o.ResizeObserver : y
        },
        38062: (e, t, n) => {
            n.d(t, {
                S3: () => l
            });
            var r = n(59312),
                a = n(17733),
                o = n(81967),
                i = n(57655),
                s = n(72500);

            function l() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (1 === e.length) {
                    if (!(0, a.k)(e[0])) return e[0];
                    e = e[0]
                }
                return (0, o.n)(e, void 0).lift(new c)
            }
            var c = function() {
                    function e() {}
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new h(e))
                    }, e
                }(),
                h = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n
                    }
                    return r.__extends(t, e), t.prototype._next = function(e) {
                        this.observables.push(e)
                    }, t.prototype._complete = function() {
                        var e = this.observables,
                            t = e.length;
                        if (0 === t) this.destination.complete();
                        else {
                            for (var n = 0; n < t && !this.hasFirst; n++) {
                                var r = e[n],
                                    a = (0, s.D)(this, r, void 0, n);
                                this.subscriptions && this.subscriptions.push(a), this.add(a)
                            }
                            this.observables = null
                        }
                    }, t.prototype.notifyNext = function(e, t, n) {
                        if (!this.hasFirst) {
                            this.hasFirst = !0;
                            for (var r = 0; r < this.subscriptions.length; r++)
                                if (r !== n) {
                                    var a = this.subscriptions[r];
                                    a.unsubscribe(), this.remove(a)
                                } this.subscriptions = null
                        }
                        this.destination.next(t)
                    }, t
                }(i.L)
        },
        9223: (e, t, n) => {
            n.d(t, {
                x: () => i
            });
            var r = n(59312),
                a = n(98036),
                o = n(14601);

            function i(e) {
                return function(t) {
                    return t.lift(new s(e))
                }
            }
            var s = function() {
                    function e(e) {
                        this.callback = e
                    }
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new l(e, this.callback))
                    }, e
                }(),
                l = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.add(new o.w(n)), r
                    }
                    return r.__extends(t, e), t
                }(a.L)
        },
        16118: (e, t, n) => {
            n.d(t, {
                G: () => o
            });
            var r = n(59312),
                a = n(98036);

            function o() {
                return function(e) {
                    return e.lift(new i)
                }
            }
            var i = function() {
                    function e() {}
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new s(e))
                    }, e
                }(),
                s = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.hasPrev = !1, n
                    }
                    return r.__extends(t, e), t.prototype._next = function(e) {
                        var t;
                        this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
                    }, t
                }(a.L)
        },
        598: (e, t, n) => {
            n.d(t, {
                c: () => a
            });
            var r = n(66310);

            function a(e, t) {
                return t ? (0, r.w)((function() {
                    return e
                }), t) : (0, r.w)((function() {
                    return e
                }))
            }
        }
    }
]);
