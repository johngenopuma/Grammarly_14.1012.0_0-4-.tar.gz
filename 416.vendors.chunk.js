(self.webpackChunk = self.webpackChunk || []).push([
    [416], {
        56823: (e, t, n) => {
            n.d(t, {
                sl: () => v,
                qz: () => g,
                gv: () => y
            });
            var r = n(27378),
                o = n(34685),
                i = n(63969);
            const a = 96,
                s = i.u.keyframes({
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: `${i.u.px(-3264)} 0`
                    }
                }),
                f = {
                    height: i.u.px(a),
                    width: i.u.px(a),
                    transformOrigin: "top left"
                },
                c = {
                    width: a,
                    height: a,
                    backgroundImage: `url(${o.yr}proofitColorChange.png)`,
                    animation: `${s} ${i.u.seconds(2)} steps(34) forwards 1`,
                    animationFillMode: "forwards"
                },
                u = {
                    width: a,
                    height: a,
                    backgroundImage: `url(${o.yr}proofitColorChange.png)`,
                    backgroundPosition: [0, 0]
                },
                l = {
                    width: a,
                    height: a,
                    backgroundImage: `url(${o.yr}proofitColorChange.png)`,
                    backgroundPosition: [0, -3264]
                },
                p = i.u.style(c),
                d = i.u.style(l),
                h = i.u.style(u),
                m = i.u.style(f),
                v = ({
                    size: e
                }) => r.createElement("div", {
                    style: {
                        height: e,
                        width: e
                    }
                }, r.createElement("div", {
                    className: m,
                    style: {
                        transform: `scale(${e/a})`
                    }
                }, r.createElement("div", {
                    className: p
                }))),
                y = ({
                    size: e
                }) => r.createElement("div", {
                    style: {
                        height: e,
                        width: e
                    }
                }, r.createElement("div", {
                    className: m,
                    style: {
                        transform: `scale(${e/a})`
                    }
                }, r.createElement("div", {
                    className: d
                }))),
                g = ({
                    size: e
                }) => r.createElement("div", {
                    style: {
                        height: e,
                        width: e
                    }
                }, r.createElement("div", {
                    className: m,
                    style: {
                        transform: `scale(${e/a})`
                    }
                }, r.createElement("div", {
                    className: h
                })))
        },
        82769: (e, t, n) => {
            n.d(t, {
                l: () => p
            });
            var r = n(27378),
                o = n(34685),
                i = n(63969);
            const a = 96,
                s = i.u.keyframes({
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: `${i.u.px(-8544)} 0`
                    }
                }),
                f = {
                    height: i.u.px(a),
                    width: i.u.px(a),
                    transformOrigin: "top left"
                },
                c = {
                    width: a,
                    height: a,
                    backgroundImage: `url(${o.yr}proofitSparkle.png)`,
                    animation: `${s} ${i.u.seconds(2)} steps(89) forwards 1`,
                    animationFillMode: "forwards"
                },
                u = i.u.style(c),
                l = i.u.style(f),
                p = ({
                    size: e
                }) => r.createElement("div", {
                    style: {
                        height: e,
                        width: e
                    }
                }, r.createElement("div", {
                    className: l,
                    style: {
                        transform: `scale(${e/a})`
                    }
                }, r.createElement("div", {
                    className: u
                })))
        },
        98403: (e, t, n) => {
            n.d(t, {
                PU: () => D,
                wW: () => S,
                Ft: () => M,
                wX: () => A,
                gw: () => L,
                Dx: () => R,
                ab: () => C,
                GQ: () => B,
                RX: () => N,
                Hl: () => T,
                b2: () => P,
                jw: () => W,
                aI: () => $
            });
            var r = n(25656),
                o = n(38983),
                i = n(8125),
                a = n(5114),
                s = n(95195),
                f = n(22232),
                c = n(83078),
                u = n(40151),
                l = n(76974),
                p = n(13444),
                d = n(44586),
                h = n(77176),
                m = n(12126),
                v = n(93508),
                y = n(91224),
                g = n(24209),
                b = n(17343),
                w = n(78674),
                x = n(28043),
                O = n(66310),
                E = n(8473),
                k = n(55935),
                j = n(14601),
                D = void 0;

            function S(e) {
                return function(t) {
                    return e.set(t)
                }
            }
            var P, M = function(e) {
                    return (0, i.RN)(e, u.E)
                },
                A = function(e) {
                    return (0, i.RN)(u.E, e)
                },
                L = function(e, t) {
                    return l.of(e).pipe(p.g(t))
                };

            function R(e) {
                return e instanceof d.y ? e : l.of(e)
            }

            function C(e, t) {
                return e instanceof d.y ? e.pipe(h.U(t)) : t(e)
            }

            function B(e) {
                return m.D(e().then((function(e) {
                    return a.some(s.right(e))
                })).catch((function(e) {
                    return a.some(s.left(e))
                }))).pipe(v.O(a.none))
            }

            function N(e) {
                return function(t, n) {
                    return n.pipe(y.K((function(n, r) {
                        return e.error(t + " exception", n), r
                    }))).subscribe()
                }
            }

            function T(e, t, n) {
                return void 0 === n && (n = !0), g.T(e.pipe(b.h(n)), e.pipe(w.b(t), b.h(!n))).pipe(x.x())
            }

            function W(e, t) {
                var n = function(t) {
                    return "function" == typeof e ? e(t) : t[e]
                };
                return t.view(n).view((function(e) {
                    return function(e, t) {
                        var n = t.get();
                        (0, f.kG)(e(n), "first value should satisfy predicate");
                        var r = o.h.create(n),
                            i = r.set.bind(r);
                        r.set = function(n) {
                            e(n) ? i(n) : a.closed || t.set(n)
                        };
                        var a = t.pipe(E.o(e), k.T(1)).subscribe(S(r)).add(void 0 !== t.set ? r.subscribe(S(t)) : j.w.EMPTY);
                        return r
                    }((function(t) {
                        return n(t) === e
                    }), t)
                }))
            }

            function $(e) {
                return c.mapOrDefault((function(t) {
                    return d.y.create((function(n) {
                        try {
                            return e(t)
                        } catch (e) {
                            return n.error(e), r.Z
                        }
                    }))
                }), u.E)
            }! function(e) {
                e.ricScheduler = function(t) {
                    return "requestIdleCallback" in self ? function(e) {
                        var n = self;
                        return d.y.create((function(r) {
                            var o = n.requestIdleCallback((function(t) {
                                (t.timeRemaining() > 0 || t.didTimeout) && r.next(e)
                            }), {
                                timeout: t
                            });
                            return function() {
                                return n.cancelIdleCallback(o)
                            }
                        }))
                    } : e.rafScheduler
                }, e.rafScheduler = function(e) {
                    return d.y.create((function(t) {
                        var n = requestAnimationFrame((function() {
                            return t.next(e)
                        }));
                        return function() {
                            return cancelAnimationFrame(n)
                        }
                    }))
                }, e.syncScheduler = function(e) {
                    return l.of(e)
                }, e.inRaf = function(t) {
                    return t.pipe(O.w(e.rafScheduler))
                }, e.inRic = function(t, n) {
                    return t.pipe(O.w(e.ricScheduler(n)))
                }
            }(P || (P = {}))
        },
        54335: e => {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var s, f, c, u;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != a.length) return !1;
                        for (f = s; 0 != f--;)
                            if (!i(e[f], a[f])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!i(f.value[1], a.get(f.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((s = e.length) != a.length) return !1;
                        for (f = s; 0 != f--;)
                            if (e[f] !== a[f]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                    if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (f = s; 0 != f--;)
                        if (!Object.prototype.hasOwnProperty.call(a, c[f])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (f = s; 0 != f--;)
                        if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !e.$$typeof) && !i(e[c[f]], a[c[f]])) return !1;
                    return !0
                }
                return e != e && a != a
            }
            e.exports = function(e, t) {
                try {
                    return i(e, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        13027: (e, t, n) => {
            n.d(t, {
                D: () => ge
            });
            var r = n(27378);

            function o(e) {
                var t = e.getBoundingClientRect();
                return {
                    width: t.width,
                    height: t.height,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    y: t.top
                }
            }

            function i(e) {
                if (null == e) return self;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || self
                }
                return e
            }

            function a(e) {
                var t = i(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function s(e) {
                return e instanceof i(e).Element || e instanceof Element
            }

            function f(e) {
                return e instanceof i(e).HTMLElement || e instanceof HTMLElement
            }

            function c(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function u(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function l(e) {
                return ((s(e) ? e.ownerDocument : e.document) || self.document).documentElement
            }

            function p(e) {
                return o(l(e)).left + a(e).scrollLeft
            }

            function d(e) {
                return i(e).getComputedStyle(e)
            }

            function h(e) {
                var t = d(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function m(e, t, n) {
                void 0 === n && (n = !1);
                var r, s, c = l(t),
                    d = o(e),
                    m = f(t),
                    v = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    y = {
                        x: 0,
                        y: 0
                    };
                return (m || !m && !n) && (("body" !== u(t) || h(c)) && (v = (r = t) !== i(r) && f(r) ? {
                    scrollLeft: (s = r).scrollLeft,
                    scrollTop: s.scrollTop
                } : a(r)), f(t) ? ((y = o(t)).x += t.clientLeft, y.y += t.clientTop) : c && (y.x = p(c))), {
                    x: d.left + v.scrollLeft - y.x,
                    y: d.top + v.scrollTop - y.y,
                    width: d.width,
                    height: d.height
                }
            }

            function v(e) {
                var t = o(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function y(e) {
                return "html" === u(e) ? e : e.assignedSlot || e.parentNode || (c(e) ? e.host : null) || l(e)
            }

            function g(e) {
                return ["html", "body", "#document"].indexOf(u(e)) >= 0 ? e.ownerDocument.body : f(e) && h(e) ? e : g(y(e))
            }

            function b(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = g(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = i(r),
                    s = o ? [a].concat(a.visualViewport || [], h(r) ? r : []) : r,
                    f = t.concat(s);
                return o ? f : f.concat(b(y(s)))
            }

            function w(e) {
                return ["table", "td", "th"].indexOf(u(e)) >= 0
            }

            function x(e) {
                return f(e) && "fixed" !== d(e).position ? e.offsetParent : null
            }

            function O(e) {
                for (var t = i(e), n = x(e); n && w(n) && "static" === d(n).position;) n = x(n);
                return n && ("html" === u(n) || "body" === u(n) && "static" === d(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && f(e) && "fixed" === d(e).position) return null;
                    for (var n = y(e); f(n) && ["html", "body"].indexOf(u(n)) < 0;) {
                        var r = d(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var E = "top",
                k = "bottom",
                j = "right",
                D = "left",
                S = "auto",
                P = [E, k, j, D],
                M = "start",
                A = "end",
                L = "viewport",
                R = "popper",
                C = P.reduce((function(e, t) {
                    return e.concat([t + "-" + M, t + "-" + A])
                }), []),
                B = [].concat(P, [S]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + M, t + "-" + A])
                }), []),
                N = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function T(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }
            var W = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function $() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                }))
            }

            function q(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    i = void 0 === o ? W : o;
                return function(e, t, n) {
                    void 0 === n && (n = i);
                    var o, a, f = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, W, i),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        u = !1,
                        l = {
                            state: f,
                            setOptions: function(n) {
                                p(), f.options = Object.assign({}, i, f.options, n), f.scrollParents = {
                                    reference: s(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
                                    popper: b(t)
                                };
                                var o = function(e) {
                                    var t = T(e);
                                    return N.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, f.options.modifiers)));
                                return f.orderedModifiers = o.filter((function(e) {
                                    return e.enabled
                                })), f.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" == typeof o) {
                                        var i = o({
                                                state: f,
                                                name: t,
                                                instance: l,
                                                options: r
                                            }),
                                            a = function() {};
                                        c.push(i || a)
                                    }
                                })), l.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e = f.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if ($(t, n)) {
                                        f.rects = {
                                            reference: m(t, O(n), "fixed" === f.options.strategy),
                                            popper: v(n)
                                        }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach((function(e) {
                                            return f.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < f.orderedModifiers.length; r++)
                                            if (!0 !== f.reset) {
                                                var o = f.orderedModifiers[r],
                                                    i = o.fn,
                                                    a = o.options,
                                                    s = void 0 === a ? {} : a,
                                                    c = o.name;
                                                "function" == typeof i && (f = i({
                                                    state: f,
                                                    options: s,
                                                    name: c,
                                                    instance: l
                                                }) || f)
                                            } else f.reset = !1, r = -1
                                    }
                                }
                            },
                            update: (o = function() {
                                return new Promise((function(e) {
                                    l.forceUpdate(), e(f)
                                }))
                            }, function() {
                                return a || (a = new Promise((function(e) {
                                    Promise.resolve().then((function() {
                                        a = void 0, e(o())
                                    }))
                                }))), a
                            }),
                            destroy: function() {
                                p(), u = !0
                            }
                        };
                    if (!$(e, t)) return l;

                    function p() {
                        c.forEach((function(e) {
                            return e()
                        })), c = []
                    }
                    return l.setOptions(n).then((function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), l
                }
            }
            var H = {
                passive: !0
            };
            const _ = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        a = void 0 === o || o,
                        s = r.resize,
                        f = void 0 === s || s,
                        c = i(t.elements.popper),
                        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && u.forEach((function(e) {
                            e.addEventListener("scroll", n.update, H)
                        })), f && c.addEventListener("resize", n.update, H),
                        function() {
                            a && u.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, H)
                            })), f && c.removeEventListener("resize", n.update, H)
                        }
                },
                data: {}
            };

            function I(e) {
                return e.split("-")[0]
            }

            function U(e) {
                return e.split("-")[1]
            }

            function z(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function F(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? I(o) : null,
                    a = o ? U(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    f = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case E:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case k:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case j:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case D:
                        t = {
                            x: n.x - r.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? z(i) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case M:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case A:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            const V = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state,
                        n = e.name;
                    t.modifiersData[n] = F({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            };
            var X = Math.max,
                Y = Math.min,
                G = Math.round,
                K = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function Q(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.offsets,
                    s = e.position,
                    f = e.gpuAcceleration,
                    c = e.adaptive,
                    u = e.roundOffsets,
                    p = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = self.devicePixelRatio || 1;
                        return {
                            x: G(G(t * r) / r) || 0,
                            y: G(G(n * r) / r) || 0
                        }
                    }(a) : "function" == typeof u ? u(a) : a,
                    h = p.x,
                    m = void 0 === h ? 0 : h,
                    v = p.y,
                    y = void 0 === v ? 0 : v,
                    g = a.hasOwnProperty("x"),
                    b = a.hasOwnProperty("y"),
                    w = D,
                    x = E,
                    S = self;
                if (c) {
                    var P = O(n),
                        M = "clientHeight",
                        A = "clientWidth";
                    P === i(n) && "static" !== d(P = l(n)).position && (M = "scrollHeight", A = "scrollWidth"), P = P, o === E && (x = k, y -= P[M] - r.height, y *= f ? 1 : -1), o === D && (w = j, m -= P[A] - r.width, m *= f ? 1 : -1)
                }
                var L, R = Object.assign({
                    position: s
                }, c && K);
                return f ? Object.assign({}, R, ((L = {})[x] = b ? "0" : "", L[w] = g ? "0" : "", L.transform = (S.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", L)) : Object.assign({}, R, ((t = {})[x] = b ? y + "px" : "", t[w] = g ? m + "px" : "", t.transform = "", t))
            }
            var Z = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function J(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Z[e]
                }))
            }
            var ee = {
                start: "end",
                end: "start"
            };

            function te(e) {
                return e.replace(/start|end/g, (function(e) {
                    return ee[e]
                }))
            }

            function ne(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && c(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function re(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function oe(e, t) {
                return t === L ? re(function(e) {
                    var t = i(e),
                        n = l(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        f = 0;
                    return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, f = r.offsetTop)), {
                        width: o,
                        height: a,
                        x: s + p(e),
                        y: f
                    }
                }(e)) : f(t) ? function(e) {
                    var t = o(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : re(function(e) {
                    var t, n = l(e),
                        r = a(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = X(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        s = X(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        f = -r.scrollLeft + p(e),
                        c = -r.scrollTop;
                    return "rtl" === d(o || n).direction && (f += X(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: s,
                        x: f,
                        y: c
                    }
                }(l(e)))
            }

            function ie(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = b(y(e)),
                            n = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && f(e) ? O(e) : e;
                        return s(n) ? t.filter((function(e) {
                            return s(e) && ne(e, n) && "body" !== u(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(r, [n]),
                    i = o[0],
                    a = o.reduce((function(t, n) {
                        var r = oe(e, n);
                        return t.top = X(r.top, t.top), t.right = Y(r.right, t.right), t.bottom = Y(r.bottom, t.bottom), t.left = X(r.left, t.left), t
                    }), oe(e, i));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }

            function ae(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function se(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function fe(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    i = void 0 === r ? e.placement : r,
                    a = n.boundary,
                    f = void 0 === a ? "clippingParents" : a,
                    c = n.rootBoundary,
                    u = void 0 === c ? L : c,
                    p = n.elementContext,
                    d = void 0 === p ? R : p,
                    h = n.altBoundary,
                    m = void 0 !== h && h,
                    v = n.padding,
                    y = void 0 === v ? 0 : v,
                    g = ae("number" != typeof y ? y : se(y, P)),
                    b = d === R ? "reference" : R,
                    w = e.elements.reference,
                    x = e.rects.popper,
                    O = e.elements[m ? b : d],
                    D = ie(s(O) ? O : O.contextElement || l(e.elements.popper), f, u),
                    S = o(w),
                    M = F({
                        reference: S,
                        element: x,
                        strategy: "absolute",
                        placement: i
                    }),
                    A = re(Object.assign({}, x, M)),
                    C = d === R ? A : S,
                    B = {
                        top: D.top - C.top + g.top,
                        bottom: C.bottom - D.bottom + g.bottom,
                        left: D.left - C.left + g.left,
                        right: C.right - D.right + g.right
                    },
                    N = e.modifiersData.offset;
                if (d === R && N) {
                    var T = N[i];
                    Object.keys(B).forEach((function(e) {
                        var t = [j, k].indexOf(e) >= 0 ? 1 : -1,
                            n = [E, k].indexOf(e) >= 0 ? "y" : "x";
                        B[e] += T[n] * t
                    }))
                }
                return B
            }

            function ce(e, t, n) {
                return X(e, Y(t, n))
            }

            function ue(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function le(e) {
                return [E, j, k, D].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var pe = q({
                    defaultModifiers: [_, V, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                s = n.roundOffsets,
                                f = void 0 === s || s,
                                c = {
                                    placement: I(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Q(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: f
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Q(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: f
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                f(o) && u(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        f(r) && u(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = B.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = I(e),
                                            o = [D, E].indexOf(r) >= 0 ? -1 : 1,
                                            i = "function" == typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            a = i[0],
                                            s = i[1];
                                        return a = a || 0, s = (s || 0) * o, [D, j].indexOf(r) >= 0 ? {
                                            x: s,
                                            y: a
                                        } : {
                                            x: a,
                                            y: s
                                        }
                                    }(n, t.rects, i), e
                                }), {}),
                                s = a[t.placement],
                                f = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, l = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, y = I(v), g = f || (y === v || !h ? [J(v)] : function(e) {
                                        if (I(e) === S) return [];
                                        var t = J(e);
                                        return [te(e), t, te(t)]
                                    }(v)), b = [v].concat(g).reduce((function(e, n) {
                                        return e.concat(I(n) === S ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                f = n.allowedAutoPlacements,
                                                c = void 0 === f ? B : f,
                                                u = U(r),
                                                l = u ? s ? C : C.filter((function(e) {
                                                    return U(e) === u
                                                })) : P,
                                                p = l.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === p.length && (p = l);
                                            var d = p.reduce((function(t, n) {
                                                return t[n] = fe(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[I(n)], t
                                            }), {});
                                            return Object.keys(d).sort((function(e, t) {
                                                return d[e] - d[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: l,
                                            padding: c,
                                            flipVariations: h,
                                            allowedAutoPlacements: m
                                        }) : n)
                                    }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, A = !0, L = b[0], R = 0; R < b.length; R++) {
                                    var N = b[R],
                                        T = I(N),
                                        W = U(N) === M,
                                        $ = [E, k].indexOf(T) >= 0,
                                        q = $ ? "width" : "height",
                                        H = fe(t, {
                                            placement: N,
                                            boundary: u,
                                            rootBoundary: l,
                                            altBoundary: p,
                                            padding: c
                                        }),
                                        _ = $ ? W ? j : D : W ? k : E;
                                    w[q] > x[q] && (_ = J(_));
                                    var z = J(_),
                                        F = [];
                                    if (i && F.push(H[T] <= 0), s && F.push(H[_] <= 0, H[z] <= 0), F.every((function(e) {
                                            return e
                                        }))) {
                                        L = N, A = !1;
                                        break
                                    }
                                    O.set(N, F)
                                }
                                if (A)
                                    for (var V = function(e) {
                                            var t = b.find((function(t) {
                                                var n = O.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return L = t, "break"
                                        }, X = h ? 3 : 1; X > 0; X--) {
                                        if ("break" === V(X)) break
                                    }
                                t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                s = void 0 !== a && a,
                                f = n.boundary,
                                c = n.rootBoundary,
                                u = n.altBoundary,
                                l = n.padding,
                                p = n.tether,
                                d = void 0 === p || p,
                                h = n.tetherOffset,
                                m = void 0 === h ? 0 : h,
                                y = fe(t, {
                                    boundary: f,
                                    rootBoundary: c,
                                    padding: l,
                                    altBoundary: u
                                }),
                                g = I(t.placement),
                                b = U(t.placement),
                                w = !b,
                                x = z(g),
                                S = "x" === x ? "y" : "x",
                                P = t.modifiersData.popperOffsets,
                                A = t.rects.reference,
                                L = t.rects.popper,
                                R = "function" == typeof m ? m(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : m,
                                C = {
                                    x: 0,
                                    y: 0
                                };
                            if (P) {
                                if (i || s) {
                                    var B = "y" === x ? E : D,
                                        N = "y" === x ? k : j,
                                        T = "y" === x ? "height" : "width",
                                        W = P[x],
                                        $ = P[x] + y[B],
                                        q = P[x] - y[N],
                                        H = d ? -L[T] / 2 : 0,
                                        _ = b === M ? A[T] : L[T],
                                        F = b === M ? -L[T] : -A[T],
                                        V = t.elements.arrow,
                                        G = d && V ? v(V) : {
                                            width: 0,
                                            height: 0
                                        },
                                        K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        Q = K[B],
                                        Z = K[N],
                                        J = ce(0, A[T], G[T]),
                                        ee = w ? A[T] / 2 - H - J - Q - R : _ - J - Q - R,
                                        te = w ? -A[T] / 2 + H + J + Z + R : F + J + Z + R,
                                        ne = t.elements.arrow && O(t.elements.arrow),
                                        re = ne ? "y" === x ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                                        oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement][x] : 0,
                                        ie = P[x] + ee - oe - re,
                                        ae = P[x] + te - oe;
                                    if (i) {
                                        var se = ce(d ? Y($, ie) : $, W, d ? X(q, ae) : q);
                                        P[x] = se, C[x] = se - W
                                    }
                                    if (s) {
                                        var ue = "x" === x ? E : D,
                                            le = "x" === x ? k : j,
                                            pe = P[S],
                                            de = pe + y[ue],
                                            he = pe - y[le],
                                            me = ce(d ? Y(de, ie) : de, pe, d ? X(he, ae) : he);
                                        P[S] = me, C[S] = me - pe
                                    }
                                }
                                t.modifiersData[r] = C
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = e.options,
                                i = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = I(n.placement),
                                f = z(s),
                                c = [D, j].indexOf(s) >= 0 ? "height" : "width";
                            if (i && a) {
                                var u = function(e, t) {
                                        return ae("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                            placement: t.placement
                                        })) : e) ? e : se(e, P))
                                    }(o.padding, n),
                                    l = v(i),
                                    p = "y" === f ? E : D,
                                    d = "y" === f ? k : j,
                                    h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                                    m = a[f] - n.rects.reference[f],
                                    y = O(i),
                                    g = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                                    b = h / 2 - m / 2,
                                    w = u[p],
                                    x = g - l[c] - u[d],
                                    S = g / 2 - l[c] / 2 + b,
                                    M = ce(w, S, x),
                                    A = f;
                                n.modifiersData[r] = ((t = {})[A] = M, t.centerOffset = M - S, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && ne(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = fe(t, {
                                    elementContext: "reference"
                                }),
                                s = fe(t, {
                                    altBoundary: !0
                                }),
                                f = ue(a, r),
                                c = ue(s, o, i),
                                u = le(f),
                                l = le(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: f,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: l
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": l
                            })
                        }
                    }]
                }),
                de = n(54335),
                he = n.n(de),
                me = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                ve = "undefined" != typeof self && self.document && self.document.createElement ? r.useLayoutEffect : r.useEffect,
                ye = [],
                ge = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o = r.useRef(null),
                        i = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || ye
                        },
                        a = r.useState({
                            styles: {
                                popper: {
                                    position: i.strategy,
                                    left: "0",
                                    top: "0"
                                }
                            },
                            attributes: {}
                        }),
                        s = a[0],
                        f = a[1],
                        c = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    f({
                                        styles: me(n.map((function(e) {
                                            return [e, t.styles[e] || {}]
                                        }))),
                                        attributes: me(n.map((function(e) {
                                            return [e, t.attributes[e]]
                                        })))
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        u = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: i.onFirstUpdate,
                                placement: i.placement,
                                strategy: i.strategy,
                                modifiers: [].concat(i.modifiers, [c, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return he()(o.current, e) ? o.current || e : (o.current = e, e)
                        }), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]),
                        l = r.useRef();
                    return ve((function() {
                        l.current && l.current.setOptions(u)
                    }), [u]), ve((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || pe)(e, t, u);
                            return l.current = r,
                                function() {
                                    r.destroy(), l.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: l.current ? l.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: l.current ? l.current.update : null,
                        forceUpdate: l.current ? l.current.forceUpdate : null
                    }
                }
        },
        16118: (e, t, n) => {
            n.d(t, {
                G: () => i
            });
            var r = n(59312),
                o = n(98036);

            function i() {
                return function(e) {
                    return e.lift(new a)
                }
            }
            var a = function() {
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
                }(o.L)
        },
        42833: (e, t, n) => {
            n.d(t, {
                u: () => i
            });
            var r = n(59312),
                o = n(46601);

            function i(e) {
                return function(t) {
                    return t.lift(new a(e))
                }
            }
            var a = function() {
                    function e(e) {
                        this.notifier = e
                    }
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new s(e, this.notifier))
                    }, e
                }(),
                s = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        r.hasValue = !1;
                        var i = new o.IY(r);
                        r.add(i), r.innerSubscription = i;
                        var a = (0, o.ft)(n, i);
                        return a !== i && (r.add(a), r.innerSubscription = a), r
                    }
                    return r.__extends(t, e), t.prototype._next = function(t) {
                        this.hasValue && e.prototype._next.call(this, t)
                    }, t.prototype.notifyNext = function() {
                        this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
                    }, t.prototype.notifyComplete = function() {}, t
                }(o.Ds)
        }
    }
]);
