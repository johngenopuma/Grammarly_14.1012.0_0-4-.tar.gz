/*! For license information please see Grammarly-popup.js.LICENSE.txt */
var e = {
        24232: (e, t) => {
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                i = n ? Symbol.for("react.fragment") : 60107,
                s = n ? Symbol.for("react.strict_mode") : 60108,
                a = n ? Symbol.for("react.profiler") : 60114,
                u = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                l = n ? Symbol.for("react.async_mode") : 60111,
                f = n ? Symbol.for("react.concurrent_mode") : 60111,
                d = n ? Symbol.for("react.forward_ref") : 60112,
                p = n ? Symbol.for("react.suspense") : 60113,
                h = n ? Symbol.for("react.suspense_list") : 60120,
                g = n ? Symbol.for("react.memo") : 60115,
                m = n ? Symbol.for("react.lazy") : 60116,
                v = n ? Symbol.for("react.fundamental") : 60117,
                b = n ? Symbol.for("react.responder") : 60118,
                y = n ? Symbol.for("react.scope") : 60119;

            function _(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case l:
                                case f:
                                case i:
                                case a:
                                case s:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case d:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                            case m:
                            case g:
                            case o:
                                return t
                    }
                }
            }

            function E(e) {
                return _(e) === f
            }
            t.isFragment = function(e) {
                return _(e) === i
            }
        },
        80493: (e, t, n) => {
            e.exports = n(24232)
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
        22091: function(e, t, n) {
            var r;
            void 0 === (r = function() {
                return function(e) {
                    var t, r, o = [];

                    function i(e, t) {
                        e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    }

                    function s(e, t) {
                        Object.defineProperty(this, "kind", {
                            value: e,
                            enumerable: !0
                        }), t && t.length && Object.defineProperty(this, "path", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function a(e, t, n) {
                        a.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
                            value: t,
                            enumerable: !0
                        }), Object.defineProperty(this, "rhs", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function u(e, t) {
                        u.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function c(e, t) {
                        c.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function l(e, t, n) {
                        l.super_.call(this, "A", e), Object.defineProperty(this, "index", {
                            value: t,
                            enumerable: !0
                        }), Object.defineProperty(this, "item", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function f(e, t, n) {
                        var r = e.slice((n || t) + 1 || e.length);
                        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
                    }

                    function d(e) {
                        var t = typeof e;
                        return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
                    }

                    function p(t, n, r, o, i, s, h) {
                        var g = (i = i || []).slice(0);
                        if (void 0 !== s) {
                            if (o) {
                                if ("function" == typeof o && o(g, s)) return;
                                if ("object" == typeof o) {
                                    if (o.prefilter && o.prefilter(g, s)) return;
                                    if (o.normalize) {
                                        var m = o.normalize(g, s, t, n);
                                        m && (t = m[0], n = m[1])
                                    }
                                }
                            }
                            g.push(s)
                        }
                        "regexp" === d(t) && "regexp" === d(n) && (t = t.toString(), n = n.toString());
                        var v = typeof t,
                            b = typeof n;
                        if ("undefined" === v) "undefined" !== b && r(new u(g, n));
                        else if ("undefined" === b) r(new c(g, t));
                        else if (d(t) !== d(n)) r(new a(g, t, n));
                        else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0) r(new a(g, t, n));
                        else if ("object" === v && null !== t && null !== n) {
                            if ((h = h || []).indexOf(t) < 0) {
                                if (h.push(t), Array.isArray(t)) {
                                    var y;
                                    for (t.length, y = 0; y < t.length; y++) y >= n.length ? r(new l(g, y, new c(e, t[y]))) : p(t[y], n[y], r, o, g, y, h);
                                    for (; y < n.length;) r(new l(g, y, new u(e, n[y++])))
                                } else {
                                    var _ = Object.keys(t),
                                        E = Object.keys(n);
                                    _.forEach((function(i, s) {
                                        var a = E.indexOf(i);
                                        a >= 0 ? (p(t[i], n[i], r, o, g, i, h), E = f(E, a)) : p(t[i], e, r, o, g, i, h)
                                    })), E.forEach((function(t) {
                                        p(e, n[t], r, o, g, t, h)
                                    }))
                                }
                                h.length = h.length - 1
                            }
                        } else t !== n && ("number" === v && isNaN(t) && isNaN(n) || r(new a(g, t, n)))
                    }

                    function h(t, n, r, o) {
                        return o = o || [], p(t, n, (function(e) {
                            e && o.push(e)
                        }), r), o.length ? o : e
                    }

                    function g(e, t, n) {
                        if (n.path && n.path.length) {
                            var r, o = e[t],
                                i = n.path.length - 1;
                            for (r = 0; r < i; r++) o = o[n.path[r]];
                            switch (n.kind) {
                                case "A":
                                    g(o[n.path[r]], n.index, n.item);
                                    break;
                                case "D":
                                    delete o[n.path[r]];
                                    break;
                                case "E":
                                case "N":
                                    o[n.path[r]] = n.rhs
                            }
                        } else switch (n.kind) {
                            case "A":
                                g(e[t], n.index, n.item);
                                break;
                            case "D":
                                e = f(e, t);
                                break;
                            case "E":
                            case "N":
                                e[t] = n.rhs
                        }
                        return e
                    }

                    function m(e, t, n) {
                        if (e && t && n && n.kind) {
                            for (var r = e, o = -1, i = n.path ? n.path.length - 1 : 0; ++o < i;) void 0 === r[n.path[o]] && (r[n.path[o]] = "number" == typeof n.path[o] ? [] : {}), r = r[n.path[o]];
                            switch (n.kind) {
                                case "A":
                                    g(n.path ? r[n.path[o]] : r, n.index, n.item);
                                    break;
                                case "D":
                                    delete r[n.path[o]];
                                    break;
                                case "E":
                                case "N":
                                    r[n.path[o]] = n.rhs
                            }
                        }
                    }

                    function v(e, t, n) {
                        if (n.path && n.path.length) {
                            var r, o = e[t],
                                i = n.path.length - 1;
                            for (r = 0; r < i; r++) o = o[n.path[r]];
                            switch (n.kind) {
                                case "A":
                                    v(o[n.path[r]], n.index, n.item);
                                    break;
                                case "D":
                                case "E":
                                    o[n.path[r]] = n.lhs;
                                    break;
                                case "N":
                                    delete o[n.path[r]]
                            }
                        } else switch (n.kind) {
                            case "A":
                                v(e[t], n.index, n.item);
                                break;
                            case "D":
                            case "E":
                                e[t] = n.lhs;
                                break;
                            case "N":
                                e = f(e, t)
                        }
                        return e
                    }

                    function b(e, t, n) {
                        if (e && t && n && n.kind) {
                            var r, o, i = e;
                            for (o = n.path.length - 1, r = 0; r < o; r++) void 0 === i[n.path[r]] && (i[n.path[r]] = {}), i = i[n.path[r]];
                            switch (n.kind) {
                                case "A":
                                    v(i[n.path[r]], n.index, n.item);
                                    break;
                                case "D":
                                case "E":
                                    i[n.path[r]] = n.lhs;
                                    break;
                                case "N":
                                    delete i[n.path[r]]
                            }
                        }
                    }

                    function y(e, t, n) {
                        e && t && p(e, t, (function(r) {
                            n && !n(e, t, r) || m(e, t, r)
                        }))
                    }
                    return t = "object" == typeof n.g && n.g ? n.g : "undefined" != typeof self ? self : {}, (r = t.DeepDiff) && o.push((function() {
                        void 0 !== r && t.DeepDiff === h && (t.DeepDiff = r, r = e)
                    })), i(a, s), i(u, s), i(c, s), i(l, s), Object.defineProperties(h, {
                        diff: {
                            value: h,
                            enumerable: !0
                        },
                        observableDiff: {
                            value: p,
                            enumerable: !0
                        },
                        applyDiff: {
                            value: y,
                            enumerable: !0
                        },
                        applyChange: {
                            value: m,
                            enumerable: !0
                        },
                        revertChange: {
                            value: b,
                            enumerable: !0
                        },
                        isConflict: {
                            value: function() {
                                return void 0 !== r
                            },
                            enumerable: !0
                        },
                        noConflict: {
                            value: function() {
                                return o && (o.forEach((function(e) {
                                    e()
                                })), o = null), h
                            },
                            enumerable: !0
                        }
                    }), h
                }()
            }.apply(t, [])) || (e.exports = r)
        },
        31699: function(e) {
            e.exports = function() {
                function e(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var t = Object.hasOwnProperty,
                    n = Object.setPrototypeOf,
                    r = Object.isFrozen,
                    o = Object.getPrototypeOf,
                    i = Object.getOwnPropertyDescriptor,
                    s = Object.freeze,
                    a = Object.seal,
                    u = Object.create,
                    c = "undefined" != typeof Reflect && Reflect,
                    l = c.apply,
                    f = c.construct;
                l || (l = function(e, t, n) {
                    return e.apply(t, n)
                }), s || (s = function(e) {
                    return e
                }), a || (a = function(e) {
                    return e
                }), f || (f = function(t, n) {
                    return new(Function.prototype.bind.apply(t, [null].concat(e(n))))
                });
                var d = S(Array.prototype.forEach),
                    p = S(Array.prototype.pop),
                    h = S(Array.prototype.push),
                    g = S(String.prototype.toLowerCase),
                    m = S(String.prototype.match),
                    v = S(String.prototype.replace),
                    b = S(String.prototype.indexOf),
                    y = S(String.prototype.trim),
                    _ = S(RegExp.prototype.test),
                    E = w(TypeError);

                function S(e) {
                    return function(t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        return l(e, t, r)
                    }
                }

                function w(e) {
                    return function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return f(e, n)
                    }
                }

                function C(e, t) {
                    n && n(e, null);
                    for (var o = t.length; o--;) {
                        var i = t[o];
                        if ("string" == typeof i) {
                            var s = g(i);
                            s !== i && (r(t) || (t[o] = s), i = s)
                        }
                        e[i] = !0
                    }
                    return e
                }

                function T(e) {
                    var n = u(null),
                        r = void 0;
                    for (r in e) l(t, e, [r]) && (n[r] = e[r]);
                    return n
                }

                function O(e, t) {
                    for (; null !== e;) {
                        var n = i(e, t);
                        if (n) {
                            if (n.get) return S(n.get);
                            if ("function" == typeof n.value) return S(n.value)
                        }
                        e = o(e)
                    }
                    return null
                }
                var N = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    x = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    k = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    I = s(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    A = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    P = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    R = s(["#text"]),
                    L = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
                    D = s(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    M = s(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    U = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    F = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    j = a(/<%[\s\S]*|[\s\S]*%>/gm),
                    B = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                    G = a(/^aria-[\-\w]+$/),
                    H = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    z = a(/^(?:\w+script|data):/i),
                    W = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    $ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                function V(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var q = function() {
                        return "undefined" == typeof self ? null : self
                    },
                    Y = function(e, t) {
                        if ("object" !== (void 0 === e ? "undefined" : $(e)) || "function" != typeof e.createPolicy) return null;
                        var n = null,
                            r = "data-tt-policy-suffix";
                        t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
                        var o = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(o, {
                                createHTML: function(e) {
                                    return e
                                }
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + o + " could not be created."), null
                        }
                    };

                function K() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q(),
                        t = function(e) {
                            return K(e)
                        };
                    if (t.version = "2.2.6", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
                    var n = e.document,
                        r = e.document,
                        o = e.DocumentFragment,
                        i = e.HTMLTemplateElement,
                        a = e.Node,
                        u = e.Element,
                        c = e.NodeFilter,
                        l = e.NamedNodeMap,
                        f = void 0 === l ? e.NamedNodeMap || e.MozNamedAttrMap : l,
                        S = e.Text,
                        w = e.Comment,
                        Q = e.DOMParser,
                        X = e.trustedTypes,
                        J = u.prototype,
                        Z = O(J, "cloneNode"),
                        ee = O(J, "nextSibling"),
                        te = O(J, "childNodes"),
                        ne = O(J, "parentNode");
                    if ("function" == typeof i) {
                        var re = r.createElement("template");
                        re.content && re.content.ownerDocument && (r = re.content.ownerDocument)
                    }
                    var oe = Y(X, n),
                        ie = oe && Ue ? oe.createHTML("") : "",
                        se = r,
                        ae = se.implementation,
                        ue = se.createNodeIterator,
                        ce = se.getElementsByTagName,
                        le = se.createDocumentFragment,
                        fe = n.importNode,
                        de = {};
                    try {
                        de = T(r).documentMode ? r.documentMode : {}
                    } catch (e) {}
                    var pe = {};
                    t.isSupported = ae && void 0 !== ae.createHTMLDocument && 9 !== de;
                    var he = F,
                        ge = j,
                        me = B,
                        ve = G,
                        be = z,
                        ye = W,
                        _e = H,
                        Ee = null,
                        Se = C({}, [].concat(V(N), V(x), V(k), V(A), V(R))),
                        we = null,
                        Ce = C({}, [].concat(V(L), V(D), V(M), V(U))),
                        Te = null,
                        Oe = null,
                        Ne = !0,
                        xe = !0,
                        ke = !1,
                        Ie = !1,
                        Ae = !1,
                        Pe = !1,
                        Re = !1,
                        Le = !1,
                        De = !1,
                        Me = !0,
                        Ue = !1,
                        Fe = !0,
                        je = !0,
                        Be = !1,
                        Ge = {},
                        He = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        ze = null,
                        We = C({}, ["audio", "video", "img", "source", "image", "track"]),
                        $e = null,
                        Ve = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                        qe = null,
                        Ye = r.createElement("form"),
                        Ke = function(e) {
                            qe && qe === e || (e && "object" === (void 0 === e ? "undefined" : $(e)) || (e = {}), e = T(e), Ee = "ALLOWED_TAGS" in e ? C({}, e.ALLOWED_TAGS) : Se, we = "ALLOWED_ATTR" in e ? C({}, e.ALLOWED_ATTR) : Ce, $e = "ADD_URI_SAFE_ATTR" in e ? C(T(Ve), e.ADD_URI_SAFE_ATTR) : Ve, ze = "ADD_DATA_URI_TAGS" in e ? C(T(We), e.ADD_DATA_URI_TAGS) : We, Te = "FORBID_TAGS" in e ? C({}, e.FORBID_TAGS) : {}, Oe = "FORBID_ATTR" in e ? C({}, e.FORBID_ATTR) : {}, Ge = "USE_PROFILES" in e && e.USE_PROFILES, Ne = !1 !== e.ALLOW_ARIA_ATTR, xe = !1 !== e.ALLOW_DATA_ATTR, ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ie = e.SAFE_FOR_TEMPLATES || !1, Ae = e.WHOLE_DOCUMENT || !1, Le = e.RETURN_DOM || !1, De = e.RETURN_DOM_FRAGMENT || !1, Me = !1 !== e.RETURN_DOM_IMPORT, Ue = e.RETURN_TRUSTED_TYPE || !1, Re = e.FORCE_BODY || !1, Fe = !1 !== e.SANITIZE_DOM, je = !1 !== e.KEEP_CONTENT, Be = e.IN_PLACE || !1, _e = e.ALLOWED_URI_REGEXP || _e, Ie && (xe = !1), De && (Le = !0), Ge && (Ee = C({}, [].concat(V(R))), we = [], !0 === Ge.html && (C(Ee, N), C(we, L)), !0 === Ge.svg && (C(Ee, x), C(we, D), C(we, U)), !0 === Ge.svgFilters && (C(Ee, k), C(we, D), C(we, U)), !0 === Ge.mathMl && (C(Ee, A), C(we, M), C(we, U))), e.ADD_TAGS && (Ee === Se && (Ee = T(Ee)), C(Ee, e.ADD_TAGS)), e.ADD_ATTR && (we === Ce && (we = T(we)), C(we, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && C($e, e.ADD_URI_SAFE_ATTR), je && (Ee["#text"] = !0), Ae && C(Ee, ["html", "head", "body"]), Ee.table && (C(Ee, ["tbody"]), delete Te.tbody), s && s(e), qe = e)
                        },
                        Qe = C({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        Xe = C({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        Je = C({}, x);
                    C(Je, k), C(Je, I);
                    var Ze = C({}, A);
                    C(Ze, P);
                    var et = "http://www.w3.org/1998/Math/MathML",
                        tt = "http://www.w3.org/2000/svg",
                        nt = "http://www.w3.org/1999/xhtml",
                        rt = function(e) {
                            var t = ne(e);
                            t && t.tagName || (t = {
                                namespaceURI: nt,
                                tagName: "template"
                            });
                            var n = g(e.tagName),
                                r = g(t.tagName);
                            if (e.namespaceURI === tt) return t.namespaceURI === nt ? "svg" === n : t.namespaceURI === et ? "svg" === n && ("annotation-xml" === r || Qe[r]) : Boolean(Je[n]);
                            if (e.namespaceURI === et) return t.namespaceURI === nt ? "math" === n : t.namespaceURI === tt ? "math" === n && Xe[r] : Boolean(Ze[n]);
                            if (e.namespaceURI === nt) {
                                if (t.namespaceURI === tt && !Xe[r]) return !1;
                                if (t.namespaceURI === et && !Qe[r]) return !1;
                                var o = C({}, ["title", "style", "font", "a", "script"]);
                                return !Ze[n] && (o[n] || !Je[n])
                            }
                            return !1
                        },
                        ot = function(e) {
                            h(t.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                try {
                                    e.outerHTML = ie
                                } catch (t) {
                                    e.remove()
                                }
                            }
                        },
                        it = function(e, n) {
                            try {
                                h(t.removed, {
                                    attribute: n.getAttributeNode(e),
                                    from: n
                                })
                            } catch (e) {
                                h(t.removed, {
                                    attribute: null,
                                    from: n
                                })
                            }
                            n.removeAttribute(e)
                        },
                        st = function(e) {
                            var t = void 0,
                                n = void 0;
                            if (Re) e = "<remove></remove>" + e;
                            else {
                                var o = m(e, /^[\r\n\t ]+/);
                                n = o && o[0]
                            }
                            var i = oe ? oe.createHTML(e) : e;
                            try {
                                t = (new Q).parseFromString(i, "text/html")
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                var s = (t = ae.createHTMLDocument("")).body;
                                s.parentNode.removeChild(s.parentNode.firstElementChild), s.outerHTML = i
                            }
                            return e && n && t.body.insertBefore(r.createTextNode(n), t.body.childNodes[0] || null), ce.call(t, Ae ? "html" : "body")[0]
                        },
                        at = function(e) {
                            return ue.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, (function() {
                                return c.FILTER_ACCEPT
                            }), !1)
                        },
                        ut = function(e) {
                            return !(e instanceof S || e instanceof w || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof f && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore)
                        },
                        ct = function(e) {
                            return "object" === (void 0 === a ? "undefined" : $(a)) ? e instanceof a : e && "object" === (void 0 === e ? "undefined" : $(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        },
                        lt = function(e, n, r) {
                            pe[e] && d(pe[e], (function(e) {
                                e.call(t, n, r, qe)
                            }))
                        },
                        ft = function(e) {
                            var n = void 0;
                            if (lt("beforeSanitizeElements", e, null), ut(e)) return ot(e), !0;
                            if (m(e.nodeName, /[\u0080-\uFFFF]/)) return ot(e), !0;
                            var r = g(e.nodeName);
                            if (lt("uponSanitizeElement", e, {
                                    tagName: r,
                                    allowedTags: Ee
                                }), !ct(e.firstElementChild) && (!ct(e.content) || !ct(e.content.firstElementChild)) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent)) return ot(e), !0;
                            if (!Ee[r] || Te[r]) {
                                if (je && !He[r])
                                    for (var o = ne(e), i = te(e), s = i.length - 1; s >= 0; --s) o.insertBefore(Z(i[s], !0), ee(e));
                                return ot(e), !0
                            }
                            return e instanceof u && !rt(e) ? (ot(e), !0) : "noscript" !== r && "noembed" !== r || !_(/<\/no(script|embed)/i, e.innerHTML) ? (Ie && 3 === e.nodeType && (n = e.textContent, n = v(n, he, " "), n = v(n, ge, " "), e.textContent !== n && (h(t.removed, {
                                element: e.cloneNode()
                            }), e.textContent = n)), lt("afterSanitizeElements", e, null), !1) : (ot(e), !0)
                        },
                        dt = function(e, t, n) {
                            if (Fe && ("id" === t || "name" === t) && (n in r || n in Ye)) return !1;
                            if (xe && _(me, t));
                            else if (Ne && _(ve, t));
                            else {
                                if (!we[t] || Oe[t]) return !1;
                                if ($e[t]);
                                else if (_(_e, v(n, ye, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== b(n, "data:") || !ze[e])
                                    if (ke && !_(be, v(n, ye, "")));
                                    else if (n) return !1
                            }
                            return !0
                        },
                        pt = function(e) {
                            var n = void 0,
                                r = void 0,
                                o = void 0,
                                i = void 0;
                            lt("beforeSanitizeAttributes", e, null);
                            var s = e.attributes;
                            if (s) {
                                var a = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: we
                                };
                                for (i = s.length; i--;) {
                                    var u = n = s[i],
                                        c = u.name,
                                        l = u.namespaceURI;
                                    if (r = y(n.value), o = g(c), a.attrName = o, a.attrValue = r, a.keepAttr = !0, a.forceKeepAttr = void 0, lt("uponSanitizeAttribute", e, a), r = a.attrValue, !a.forceKeepAttr && (it(c, e), a.keepAttr))
                                        if (_(/\/>/i, r)) it(c, e);
                                        else {
                                            Ie && (r = v(r, he, " "), r = v(r, ge, " "));
                                            var f = e.nodeName.toLowerCase();
                                            if (dt(f, o, r)) try {
                                                l ? e.setAttributeNS(l, c, r) : e.setAttribute(c, r), p(t.removed)
                                            } catch (e) {}
                                        }
                                }
                                lt("afterSanitizeAttributes", e, null)
                            }
                        },
                        ht = function e(t) {
                            var n = void 0,
                                r = at(t);
                            for (lt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) lt("uponSanitizeShadowNode", n, null), ft(n) || (n.content instanceof o && e(n.content), pt(n));
                            lt("afterSanitizeShadowDOM", t, null)
                        };
                    return t.sanitize = function(r, i) {
                        var s = void 0,
                            u = void 0,
                            c = void 0,
                            l = void 0,
                            f = void 0;
                        if (r || (r = "\x3c!--\x3e"), "string" != typeof r && !ct(r)) {
                            if ("function" != typeof r.toString) throw E("toString is not a function");
                            if ("string" != typeof(r = r.toString())) throw E("dirty is not a string, aborting")
                        }
                        if (!t.isSupported) {
                            if ("object" === $(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                                if ("string" == typeof r) return e.toStaticHTML(r);
                                if (ct(r)) return e.toStaticHTML(r.outerHTML)
                            }
                            return r
                        }
                        if (Pe || Ke(i), t.removed = [], "string" == typeof r && (Be = !1), Be);
                        else if (r instanceof a) 1 === (u = (s = st("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === u.nodeName || "HTML" === u.nodeName ? s = u : s.appendChild(u);
                        else {
                            if (!Le && !Ie && !Ae && -1 === r.indexOf("<")) return oe && Ue ? oe.createHTML(r) : r;
                            if (!(s = st(r))) return Le ? null : ie
                        }
                        s && Re && ot(s.firstChild);
                        for (var d = at(Be ? r : s); c = d.nextNode();) 3 === c.nodeType && c === l || ft(c) || (c.content instanceof o && ht(c.content), pt(c), l = c);
                        if (l = null, Be) return r;
                        if (Le) {
                            if (De)
                                for (f = le.call(s.ownerDocument); s.firstChild;) f.appendChild(s.firstChild);
                            else f = s;
                            return Me && (f = fe.call(n, f, !0)), f
                        }
                        var p = Ae ? s.outerHTML : s.innerHTML;
                        return Ie && (p = v(p, he, " "), p = v(p, ge, " ")), oe && Ue ? oe.createHTML(p) : p
                    }, t.setConfig = function(e) {
                        Ke(e), Pe = !0
                    }, t.clearConfig = function() {
                        qe = null, Pe = !1
                    }, t.isValidAttribute = function(e, t, n) {
                        qe || Ke({});
                        var r = g(e),
                            o = g(t);
                        return dt(r, o, n)
                    }, t.addHook = function(e, t) {
                        "function" == typeof t && (pe[e] = pe[e] || [], h(pe[e], t))
                    }, t.removeHook = function(e) {
                        pe[e] && p(pe[e])
                    }, t.removeHooks = function(e) {
                        pe[e] && (pe[e] = [])
                    }, t.removeAllHooks = function() {
                        pe = {}
                    }, t
                }
                return K()
            }()
        },
        18746: function(e, t, n) {
            var r, o = n(27061),
                i = this && this.__extends || (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    },
                    function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = 0;
            t.IS_UNIQUE = "__DO_NOT_DEDUPE_STYLE__";
            for (var a = /[A-Z]/g, u = /^ms-/, c = /&/g, l = /[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, f = function(e) {
                    return "-" + e.toLowerCase()
                }, d = ["animation-iteration-count", "box-flex", "box-flex-group", "column-count", "counter-increment", "counter-reset", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-clamp", "line-height", "opacity", "order", "orphans", "tab-size", "widows", "z-index", "zoom", "fill-opacity", "stroke-dashoffset", "stroke-opacity", "stroke-width"], p = Object.create(null), h = 0, g = ["-webkit-", "-ms-", "-moz-", "-o-", ""]; h < g.length; h++)
                for (var m = g[h], v = 0, b = d; v < b.length; v++) {
                    p[m + b[v]] = !0
                }

            function y(e) {
                return e.replace(a, f).replace(u, "-ms-")
            }

            function _(e) {
                for (var t = 5381, n = e.length; n--;) t = 33 * t ^ e.charCodeAt(n);
                return (t >>> 0).toString(36)
            }

            function E(e, t) {
                return "number" != typeof t || 0 === t || p[e] ? e + ":" + t : e + ":" + t + "px"
            }

            function S(e) {
                return e.sort((function(e, t) {
                    return e[0] > t[0] ? 1 : -1
                }))
            }

            function w(e) {
                return e.map((function(e) {
                    var t = e[0],
                        n = e[1];
                    return Array.isArray(n) ? n.map((function(e) {
                        return E(t, e)
                    })).join(";") : E(t, n)
                })).join(";")
            }

            function C(e, t) {
                return e.indexOf("&") > -1 ? e.replace(c, t) : t + " " + e
            }

            function T(e, n, r, o, i) {
                var a = function(e, n) {
                        for (var r = [], o = [], i = !1, s = 0, a = Object.keys(e); s < a.length; s++) {
                            var u = a[s],
                                c = e[u];
                            null != c && (u === t.IS_UNIQUE ? i = !0 : "object" != typeof c || Array.isArray(c) ? r.push([y(u.trim()), c]) : o.push([u.trim(), c]))
                        }
                        return {
                            styleString: w(S(r)),
                            nestedStyles: n ? o : S(o),
                            isUnique: i
                        }
                    }(r, !!n),
                    u = a.styleString,
                    c = a.nestedStyles,
                    l = a.isUnique,
                    f = u;
                if (64 === n.charCodeAt(0)) {
                    var d = e.add(new P(n, i ? void 0 : u, e.hash));
                    if (u && i) {
                        var p = d.add(new A(u, d.hash, l ? "u" + (++s).toString(36) : void 0));
                        o.push([i, p])
                    }
                    for (var h = 0, g = c; h < g.length; h++) {
                        var m = g[h];
                        f += (E = m[0]) + T(d, E, m[1], o, i)
                    }
                } else {
                    var v = i ? C(n, i) : n;
                    if (u) {
                        p = e.add(new A(u, e.hash, l ? "u" + (++s).toString(36) : void 0));
                        o.push([v, p])
                    }
                    for (var b = 0, _ = c; b < _.length; b++) {
                        var E, O = _[b];
                        f += (E = O[0]) + T(e, E, O[1], o, v)
                    }
                }
                return f
            }

            function O(e, n, r, o, i) {
                for (var s = new k(e.hash), a = [], u = T(s, n, r, a), c = "f" + s.hash(u), l = i ? i + "_" + c : c, f = 0, d = a; f < d.length; f++) {
                    var p = d[f],
                        h = p[0],
                        g = p[1],
                        m = o ? C(h, "." + t.escape(l)) : h;
                    g.add(new I(m, g.hash, void 0, u))
                }
                return {
                    cache: s,
                    pid: u,
                    id: l
                }
            }

            function N(e) {
                for (var t = "", n = 0; n < e.length; n++) t += e[n];
                return t
            }
            t.escape = function(e) {
                return e.replace(l, "\\$&")
            }, t.hyphenate = y, t.stringHash = _;
            var x = {
                    add: function() {},
                    change: function() {},
                    remove: function() {}
                },
                k = function() {
                    function e(e, t) {
                        void 0 === e && (e = _), void 0 === t && (t = x), this.hash = e, this.changes = t, this.sheet = [], this.changeId = 0, this._keys = [], this._children = Object.create(null), this._counters = Object.create(null)
                    }
                    return e.prototype.add = function(t) {
                        var n = this._counters[t.id] || 0,
                            r = this._children[t.id] || t.clone();
                        if (this._counters[t.id] = n + 1, 0 === n) this._children[r.id] = r, this._keys.push(r.id), this.sheet.push(r.getStyles()), this.changeId++, this.changes.add(r, this._keys.length - 1);
                        else {
                            if (r.getIdentifier() !== t.getIdentifier()) throw new TypeError("Hash collision: " + t.getStyles() + " === " + r.getStyles());
                            var o = this._keys.indexOf(t.id),
                                i = this._keys.length - 1,
                                s = this.changeId;
                            if (o !== i && (this._keys.splice(o, 1), this._keys.push(t.id), this.changeId++), r instanceof e && t instanceof e) {
                                var a = r.changeId;
                                r.merge(t), r.changeId !== a && this.changeId++
                            }
                            this.changeId !== s && (o === i ? this.sheet.splice(o, 1, r.getStyles()) : (this.sheet.splice(o, 1), this.sheet.splice(i, 0, r.getStyles())), this.changes.change(r, o, i))
                        }
                        return r
                    }, e.prototype.remove = function(t) {
                        var n = this._counters[t.id];
                        if (n > 0) {
                            this._counters[t.id] = n - 1;
                            var r = this._children[t.id],
                                o = this._keys.indexOf(r.id);
                            if (1 === n) delete this._counters[t.id], delete this._children[t.id], this._keys.splice(o, 1), this.sheet.splice(o, 1), this.changeId++, this.changes.remove(r, o);
                            else if (r instanceof e && t instanceof e) {
                                var i = r.changeId;
                                r.unmerge(t), r.changeId !== i && (this.sheet.splice(o, 1, r.getStyles()), this.changeId++, this.changes.change(r, o, o))
                            }
                        }
                    }, e.prototype.merge = function(e) {
                        for (var t = 0, n = e._keys; t < n.length; t++) {
                            var r = n[t];
                            this.add(e._children[r])
                        }
                        return this
                    }, e.prototype.unmerge = function(e) {
                        for (var t = 0, n = e._keys; t < n.length; t++) {
                            var r = n[t];
                            this.remove(e._children[r])
                        }
                        return this
                    }, e.prototype.clone = function() {
                        return new e(this.hash).merge(this)
                    }, e
                }();
            t.Cache = k;
            var I = function() {
                function e(e, t, n, r) {
                    void 0 === n && (n = "s" + t(e)), void 0 === r && (r = ""), this.selector = e, this.hash = t, this.id = n, this.pid = r
                }
                return e.prototype.getStyles = function() {
                    return this.selector
                }, e.prototype.getIdentifier = function() {
                    return this.pid + "." + this.selector
                }, e.prototype.clone = function() {
                    return new e(this.selector, this.hash, this.id, this.pid)
                }, e
            }();
            t.Selector = I;
            var A = function(e) {
                function t(t, n, r) {
                    void 0 === r && (r = "c" + n(t));
                    var o = e.call(this, n) || this;
                    return o.style = t, o.hash = n, o.id = r, o
                }
                return i(t, e), t.prototype.getStyles = function() {
                    return this.sheet.join(",") + "{" + this.style + "}"
                }, t.prototype.getIdentifier = function() {
                    return this.style
                }, t.prototype.clone = function() {
                    return new t(this.style, this.hash, this.id).merge(this)
                }, t
            }(k);
            t.Style = A;
            var P = function(e) {
                function t(t, n, r, o, i) {
                    void 0 === n && (n = ""), void 0 === o && (o = "a" + r(t + "." + n)), void 0 === i && (i = "");
                    var s = e.call(this, r) || this;
                    return s.rule = t, s.style = n, s.hash = r, s.id = o, s.pid = i, s
                }
                return i(t, e), t.prototype.getStyles = function() {
                    return this.rule + "{" + this.style + N(this.sheet) + "}"
                }, t.prototype.getIdentifier = function() {
                    return this.pid + "." + this.rule + "." + this.style
                }, t.prototype.clone = function() {
                    return new t(this.rule, this.style, this.hash, this.id, this.pid).merge(this)
                }, t
            }(k);
            t.Rule = P;
            var R = function(e) {
                function n(t, n, r, i) {
                    void 0 === t && (t = _), void 0 === n && (n = void 0 !== o && !1), void 0 === r && (r = "f" + (++s).toString(36));
                    var a = e.call(this, t, i) || this;
                    return a.hash = t, a.debug = n, a.id = r, a
                }
                return i(n, e), n.prototype.registerStyle = function(e, t) {
                    var n = O(this, "&", e, !0, this.debug ? t : void 0),
                        r = n.cache,
                        o = n.id;
                    return this.merge(r), o
                }, n.prototype.registerKeyframes = function(e, t) {
                    return this.registerHashRule("@keyframes", e, t)
                }, n.prototype.registerHashRule = function(e, n, r) {
                    var o = O(this, "", n, !1, this.debug ? r : void 0),
                        i = o.cache,
                        s = o.pid,
                        a = o.id,
                        u = new P(e + " " + t.escape(a), void 0, this.hash, void 0, s);
                    return this.add(u.merge(i)), a
                }, n.prototype.registerRule = function(e, t) {
                    this.merge(O(this, e, t, !1).cache)
                }, n.prototype.registerCss = function(e) {
                    this.merge(O(this, "", e, !1).cache)
                }, n.prototype.getStyles = function() {
                    return N(this.sheet)
                }, n.prototype.getIdentifier = function() {
                    return this.id
                }, n.prototype.clone = function() {
                    return new n(this.hash, this.debug, this.id, this.changes).merge(this)
                }, n
            }(k);
            t.FreeStyle = R, t.create = function(e, t, n) {
                return new R(e, t, void 0, n)
            }
        },
        55839: (e, t, n) => {
            var r = n(19185),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                s = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {};

            function u(e) {
                return r.isMemo(e) ? s : a[e.$$typeof] || o
            }
            a[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, a[r.Memo] = s;
            var c = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (h) {
                        var o = p(n);
                        o && o !== h && e(t, o, r)
                    }
                    var s = l(n);
                    f && (s = s.concat(f(n)));
                    for (var a = u(t), g = u(n), m = 0; m < s.length; ++m) {
                        var v = s[m];
                        if (!(i[v] || r && r[v] || g && g[v] || a && a[v])) {
                            var b = d(n, v);
                            try {
                                c(t, v, b)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        3996: e => {
            e.exports = function(e, t, n, r, o, i, s, a) {
                if (!e) {
                    var u;
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [n, r, o, i, s, a],
                            l = 0;
                        (u = new Error(t.replace(/%s/g, (function() {
                            return c[l++]
                        })))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
        },
        43256: e => {
            e.exports = {
                container: "_14pwk",
                splashOptInContainer: "_2aNuW",
                title: "_3hcsr",
                subtitle: "lEJ_N",
                btnContainer: "_3GzCO",
                content: "_1G-sh",
                optInIcon: "_1y8Qy",
                header: "_21IRQ",
                optInVideo: "_1IzMn",
                bold: "_1-W2s",
                beta: "_1xiL4",
                button: "_1OjLI",
                splash: "_3YWO4",
                large: "rQ_ZI",
                optIn: "_200N1",
                offlineDialogHeader: "_3dhsp",
                largeDocumentDialogHeader: "_2PC_i",
                sharedDocumentDialogHeader: "tQth7",
                dialogMessage: "_1tR54",
                offlineDialogButton: "yNvqg"
            }
        },
        12658: e => {
            e.exports = {
                wrapper: "_3eb9H",
                popup: "u1i2M",
                close: "_28Lb0",
                content: "_3_LAZ",
                animation: "LpSEM",
                title: "_1goEb",
                subtitle: "N33tk"
            }
        },
        84370: e => {
            e.exports = {
                button: "_2cfyv",
                buttonRounded: "_34VOT",
                buttonWithPadding: "_26PcF",
                buttonSmall: "_1DTrF",
                buttonMedium: "_1Qluj",
                buttonFitContent: "_1wd7R",
                buttonTransparent: "_2cQQ-",
                buttonTransparentHoverable: "_3dd2G",
                buttonLink: "_3K8dV",
                buttonNeutral: "_3Ii7o",
                buttonEnabled: "EQMOQ",
                buttonPrimary: "_13CnT",
                buttonSuccess: "_1GW8w",
                buttonDisabled: "_1XJjr",
                secondaryText: "_2d93E"
            }
        },
        94388: e => {
            e.exports = {
                tooltip: "_174LA",
                fadeIn: "_91w57",
                tooltipIcon: "_38cmk"
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
        42918: e => {
            e.exports = {
                button: "_3-v0N",
                alternative: "_2Br0e",
                link: "_2sbRR"
            }
        },
        17959: e => {
            e.exports = {
                wrapper: "rms9T",
                heading: "_3rhip",
                domain: "_1VPuj",
                description: "_2ccjW"
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
        61658: e => {
            e.exports = {
                gButtonPopup: "_1kF5v",
                newDataControl: "_2DXpn",
                showWrapper: "jbUGk",
                flipped: "_33Y70",
                title: "_3j0IH",
                icon: "_3mzPB",
                button: "_3ayiu",
                buttonText: "_3iTGv",
                popupFooter: "_1Pn79",
                isFlipped: "mrPCR",
                settings: "_1wln3",
                text: "_1igtd",
                bold: "_233YR",
                link: "_3Zolz",
                secondary: "_3CC0d",
                firstTime: "eytxh",
                close: "_1Q8MJ",
                disable: "_2GBXV",
                gdocs: "_1rwC7",
                gdocsBeta: "_3Nt7c",
                header: "_2QN8E",
                headerUnavailable: "_3oKby",
                cardsIcon: "_2p0cU",
                bubbleArrow: "_3P-V4",
                unavailablePopup: "_3ItKT",
                loginReminder: "_3nwkh",
                permission: "_3t67i",
                secondaryButton: "_1gDFt",
                onboarding: "_36Myk",
                chipmunkGButtonCalloutPopup: "_1BqSc",
                btn: "_36yMW",
                buttonContainer: "_2uDiN",
                primaryButtonContainer: "BPm96",
                primaryButton: "_33u2w",
                secondaryButtonContainer: "_3B1gP",
                hardDismiss: "_1Oq8R",
                softDismiss: "_3x--s",
                calloutArrow: "_1DWDs",
                warningPopup: "dcXJa",
                warning: "_3IVIe",
                ctaBtnGroup: "_1Bbg8",
                ctaButton: "_1mTiW",
                later: "_22eWb",
                managedSSOControl: "nF7Y6",
                illustration: "ThWjl",
                signInWithSSO: "_3cCtR",
                signInWithSSO2: "_2Z9Lo"
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
        25106: e => {
            e.exports = {
                footer: "ZaSLh",
                footer_btn: "_3_9Kq",
                footer_icon_doc: "mJbE5",
                footer_icon_home: "_3j9NB",
                signUpFooter: "_2M4zV",
                title: "_1YG6A",
                subtitle: "_1-fLn"
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
        7648: e => {
            e.exports = {
                header: "_1nt1u",
                delimiter: "vg34_",
                logo: "Y7Uju",
                chrome: "_3nuMC",
                safari: "_1Xsra",
                firefox: "_3oQCq",
                edge: "_2jjU5"
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
        98987: e => {
            e.exports = {
                signin: "_3aRL5",
                permission: "_1yw21",
                content: "_2ugwn",
                banner: "xpyL4",
                descr: "_3mwaw",
                descr_title: "_1wuFr",
                buttonWrapper: "_1HDgg",
                auth_button: "_3MxhR",
                secondary_text: "_1iS42",
                footer: "_294_z",
                signin_link: "RhcFP",
                descr_text: "_20eES"
            }
        },
        23345: e => {
            e.exports = {
                line: "NMkwQ",
                content: "lWYTI",
                upgrade: "_2GRJe"
            }
        },
        26381: e => {
            e.exports = {
                gr_popup_unsupported: "_2sSVm",
                line: "cqRtv",
                unsupported_site: "_3Qo6p",
                unsupported_item: "_1vNJV",
                warning: "_3oIKi",
                unsupported_title: "_2Y0qr",
                domain: "_1rmC3",
                unsupported_grammarly: "y-yGH",
                ok: "_3YMY0",
                unsupported_grammarly_text: "_2Jd0K"
            }
        },
        93598: () => {},
        39335: (e, t, n) => {
            n(3214);
            var r = {
                superfasthash: n(11028),
                murmurhash3: n(13786)
            };
            e.exports = {
                createHash: function(e) {
                    e = e.replace(/![a-zA-z0-9]/g, "").toLowerCase();
                    try {
                        return r[e]
                    } catch (e) {
                        throw new Error(e)
                    }
                }
            }
        },
        13786: (e, t, n) => {
            var r = n(81314);

            function o(e, t) {
                return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
            }

            function i(e, t) {
                return e << t | e >>> 32 - t
            }

            function s(e) {
                return e = o(e ^= e >>> 16, 2246822507), e = o(e ^= e >>> 13, 3266489909), e ^= e >>> 16
            }

            function a(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function u(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function c(e, t) {
                return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }

            function l(e, t) {
                return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }

            function f(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }

            function d(e) {
                return e = f(e, [0, e[0] >>> 1]), e = f(e = u(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = f(e = u(e, [3301882366, 444984403]), [0, e[0] >>> 1])
            }
            var p = function(e, t) {
                e = "" + e || "";
                var n = r.toU8IntArray(e);
                t = t || 0;
                for (var o = (e = {
                        charCodeAt: function(e) {
                            return n[e]
                        },
                        length: n.length
                    }).length % 16, i = e.length - o, s = [0, t], p = [0, t], h = [0, 0], g = [0, 0], m = [2277735313, 289559509], v = [1291169091, 658871167], b = 0; b < i; b += 16) h = [255 & e.charCodeAt(b + 4) | (255 & e.charCodeAt(b + 5)) << 8 | (255 & e.charCodeAt(b + 6)) << 16 | (255 & e.charCodeAt(b + 7)) << 24, 255 & e.charCodeAt(b) | (255 & e.charCodeAt(b + 1)) << 8 | (255 & e.charCodeAt(b + 2)) << 16 | (255 & e.charCodeAt(b + 3)) << 24], g = [255 & e.charCodeAt(b + 12) | (255 & e.charCodeAt(b + 13)) << 8 | (255 & e.charCodeAt(b + 14)) << 16 | (255 & e.charCodeAt(b + 15)) << 24, 255 & e.charCodeAt(b + 8) | (255 & e.charCodeAt(b + 9)) << 8 | (255 & e.charCodeAt(b + 10)) << 16 | (255 & e.charCodeAt(b + 11)) << 24], h = c(h = u(h, m), 31), s = a(s = c(s = f(s, h = u(h, v)), 27), p), s = a(u(s, [0, 5]), [0, 1390208809]), g = c(g = u(g, v), 33), p = a(p = c(p = f(p, g = u(g, m)), 31), s), p = a(u(p, [0, 5]), [0, 944331445]);
                switch (h = [0, 0], g = [0, 0], o) {
                    case 15:
                        g = f(g, l([0, e.charCodeAt(b + 14)], 48));
                    case 14:
                        g = f(g, l([0, e.charCodeAt(b + 13)], 40));
                    case 13:
                        g = f(g, l([0, e.charCodeAt(b + 12)], 32));
                    case 12:
                        g = f(g, l([0, e.charCodeAt(b + 11)], 24));
                    case 11:
                        g = f(g, l([0, e.charCodeAt(b + 10)], 16));
                    case 10:
                        g = f(g, l([0, e.charCodeAt(b + 9)], 8));
                    case 9:
                        g = u(g = f(g, [0, e.charCodeAt(b + 8)]), v), p = f(p, g = u(g = c(g, 33), m));
                    case 8:
                        h = f(h, l([0, e.charCodeAt(b + 7)], 56));
                    case 7:
                        h = f(h, l([0, e.charCodeAt(b + 6)], 48));
                    case 6:
                        h = f(h, l([0, e.charCodeAt(b + 5)], 40));
                    case 5:
                        h = f(h, l([0, e.charCodeAt(b + 4)], 32));
                    case 4:
                        h = f(h, l([0, e.charCodeAt(b + 3)], 24));
                    case 3:
                        h = f(h, l([0, e.charCodeAt(b + 2)], 16));
                    case 2:
                        h = f(h, l([0, e.charCodeAt(b + 1)], 8));
                    case 1:
                        h = u(h = f(h, [0, e.charCodeAt(b)]), m), s = f(s, h = u(h = c(h, 31), v))
                }
                return s = a(s = f(s, [0, e.length]), p = f(p, [0, e.length])), p = a(p, s), s = a(s = d(s), p = d(p)), p = a(p, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8)
            };
            e.exports = {
                x86Hash32: function(e, t) {
                    e = "" + e || "";
                    var n = r.toU8IntArray(e);
                    t = t || 0;
                    for (var a = (e = {
                            charCodeAt: function(e) {
                                return n[e]
                            },
                            length: n.length
                        }).length % 4, u = e.length - a, c = t, l = 0, f = 3432918353, d = 461845907, p = 0; p < u; p += 4) l = o(l = 255 & e.charCodeAt(p) | (255 & e.charCodeAt(p + 1)) << 8 | (255 & e.charCodeAt(p + 2)) << 16 | (255 & e.charCodeAt(p + 3)) << 24, f), l = o(l = i(l, 15), d), c = o(c = i(c ^= l, 13), 5) + 3864292196;
                    switch (l = 0, a) {
                        case 3:
                            l ^= (255 & e.charCodeAt(p + 2)) << 16;
                        case 2:
                            l ^= (255 & e.charCodeAt(p + 1)) << 8;
                        case 1:
                            l = o(l ^= 255 & e.charCodeAt(p), f), c ^= l = o(l = i(l, 15), d)
                    }
                    return ((c = s(c ^= e.length)) >>> 0).toString(16)
                },
                x86Hash128: function(e, t) {
                    e = "" + e || "";
                    var n = r.toU8IntArray(e);
                    t = t || 0;
                    for (var a = (e = {
                            charCodeAt: function(e) {
                                return n[e]
                            },
                            length: n.length
                        }).length % 16, u = e.length - a, c = t, l = t, f = t, d = t, p = 0, h = 0, g = 0, m = 0, v = 597399067, b = 2869860233, y = 951274213, _ = 2716044179, E = 0; E < u; E += 16) p = 255 & e.charCodeAt(E) | (255 & e.charCodeAt(E + 1)) << 8 | (255 & e.charCodeAt(E + 2)) << 16 | (255 & e.charCodeAt(E + 3)) << 24, h = 255 & e.charCodeAt(E + 4) | (255 & e.charCodeAt(E + 5)) << 8 | (255 & e.charCodeAt(E + 6)) << 16 | (255 & e.charCodeAt(E + 7)) << 24, g = 255 & e.charCodeAt(E + 8) | (255 & e.charCodeAt(E + 9)) << 8 | (255 & e.charCodeAt(E + 10)) << 16 | (255 & e.charCodeAt(E + 11)) << 24, m = 255 & e.charCodeAt(E + 12) | (255 & e.charCodeAt(E + 13)) << 8 | (255 & e.charCodeAt(E + 14)) << 16 | (255 & e.charCodeAt(E + 15)) << 24, p = i(p = o(p, v), 15), c = i(c ^= p = o(p, b), 19), c = o(c += l, 5) + 1444728091, h = i(h = o(h, b), 16), l = i(l ^= h = o(h, y), 17), l = o(l += f, 5) + 197830471, g = i(g = o(g, y), 17), f = i(f ^= g = o(g, _), 15), f = o(f += d, 5) + 2530024501, m = i(m = o(m, _), 18), d = i(d ^= m = o(m, v), 13), d = o(d += c, 5) + 850148119;
                    switch (p = 0, h = 0, g = 0, m = 0, a) {
                        case 15:
                            m ^= e.charCodeAt(E + 14) << 16;
                        case 14:
                            m ^= e.charCodeAt(E + 13) << 8;
                        case 13:
                            m = o(m ^= e.charCodeAt(E + 12), _), d ^= m = o(m = i(m, 18), v);
                        case 12:
                            g ^= e.charCodeAt(E + 11) << 24;
                        case 11:
                            g ^= e.charCodeAt(E + 10) << 16;
                        case 10:
                            g ^= e.charCodeAt(E + 9) << 8;
                        case 9:
                            g = o(g ^= e.charCodeAt(E + 8), y), f ^= g = o(g = i(g, 17), _);
                        case 8:
                            h ^= e.charCodeAt(E + 7) << 24;
                        case 7:
                            h ^= e.charCodeAt(E + 6) << 16;
                        case 6:
                            h ^= e.charCodeAt(E + 5) << 8;
                        case 5:
                            h = o(h ^= e.charCodeAt(E + 4), b), l ^= h = o(h = i(h, 16), y);
                        case 4:
                            p ^= e.charCodeAt(E + 3) << 24;
                        case 3:
                            p ^= e.charCodeAt(E + 2) << 16;
                        case 2:
                            p ^= e.charCodeAt(E + 1) << 8;
                        case 1:
                            p = o(p ^= e.charCodeAt(E), v), c ^= p = o(p = i(p, 15), b)
                    }
                    return c ^= e.length, c += l ^= e.length, c += f ^= e.length, l += c += d ^= e.length, f += c, d += c, c = s(c), c += l = s(l), c += f = s(f), l += c += d = s(d), f += c, d += c, ("00000000" + (c >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8)
                },
                x64Hash64: function(e, t) {
                    return p(e, t).slice(8)
                },
                x64Hash128: p,
                hash: function(e, t) {
                    return p(e, t)
                }
            }
        },
        11028: (e, t, n) => {
            var r = n(81314);

            function o(e, t) {
                return e[t] << 8 | e[t + 1]
            }
            e.exports = {
                hash: function(e) {
                    var t, n = r.toU8IntArray(e + ""),
                        i = 0;
                    if (!e) return i.toString(16);
                    var s = n.length,
                        a = 0;
                    t = 3 & s, s >>>= 2;
                    for (var u = 0; u < s; u++) i = (i += o(n, a)) << 16 ^ (o(n, a + 2) << 11 ^ i), a += 4, i += i >> 11;
                    switch (t) {
                        case 3:
                            i += o(n, a), i ^= i << 16, i ^= n[a + 2] << 18, i += i >> 11;
                            break;
                        case 2:
                            i += o(n, a), i ^= i << 11, i += i >> 17;
                            break;
                        case 1:
                            i += n[a], i ^= i << 10, i += i >> 1
                    }
                    return i ^= i << 3, i += i >> 5, i ^= i << 4, i += i >> 17, i ^= i << 25, i += i >> 6, r.intToUnsignedHex(i)
                }
            }
        },
        81314: e => {
            e.exports = {
                toU8IntArray: function(e) {
                    for (var t = [], n = [], r = 0; r < e.length; r++) {
                        var o, i = e.charCodeAt(r);
                        for (n.length = 0;
                            (o = 255 & i) || i;) n.push(o), i >>>= 8;
                        t = t.concat(n.reverse())
                    }
                    return t
                },
                intToUnsignedHex: function(e) {
                    for (var t, n = [];
                        (t = 65535 & e) || e;) t = t.toString(16), t = "0000".slice(t.length) + t, n.push(t), e >>>= 16;
                    return n.reverse().join("")
                }
            }
        },
        62525: e => {
            var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var s, a, u = o(e), c = 1; c < arguments.length; c++) {
                    for (var l in s = Object(arguments[c])) n.call(s, l) && (u[l] = s[l]);
                    if (t) {
                        a = t(s);
                        for (var f = 0; f < a.length; f++) r.call(s, a[f]) && (u[a[f]] = s[a[f]])
                    }
                }
                return u
            }
        },
        3214: (e, t, n) => {
            var r = n(27061),
                o = "win32" === r.platform,
                i = n(71323);

            function s(e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                    var o = e[r];
                    o && "." !== o && (".." === o ? n.length && ".." !== n[n.length - 1] ? n.pop() : t && n.push("..") : n.push(o))
                }
                return n
            }

            function a(e) {
                for (var t = e.length - 1, n = 0; n <= t && !e[n]; n++);
                for (var r = t; r >= 0 && !e[r]; r--);
                return 0 === n && r === t ? e : n > r ? [] : e.slice(n, r + 1)
            }
            var u = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
                c = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
                l = {};

            function f(e) {
                var t = u.exec(e),
                    n = (t[1] || "") + (t[2] || ""),
                    r = t[3] || "",
                    o = c.exec(r);
                return [n, o[1], o[2], o[3]]
            }

            function d(e) {
                var t = u.exec(e),
                    n = t[1] || "",
                    r = !!n && ":" !== n[1];
                return {
                    device: n,
                    isUnc: r,
                    isAbsolute: r || !!t[2],
                    tail: t[3]
                }
            }

            function p(e) {
                return "\\\\" + e.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\")
            }
            l.resolve = function() {
                for (var e = "", t = "", n = !1, o = arguments.length - 1; o >= -1; o--) {
                    var a;
                    if (o >= 0 ? a = arguments[o] : e ? (a = r.env["=" + e]) && a.substr(0, 3).toLowerCase() === e.toLowerCase() + "\\" || (a = e + "\\") : a = r.cwd(), !i.isString(a)) throw new TypeError("Arguments to path.resolve must be strings");
                    if (a) {
                        var u = d(a),
                            c = u.device,
                            l = u.isUnc,
                            f = u.isAbsolute,
                            h = u.tail;
                        if ((!c || !e || c.toLowerCase() === e.toLowerCase()) && (e || (e = c), n || (t = h + "\\" + t, n = f), e && n)) break
                    }
                }
                return l && (e = p(e)), e + (n ? "\\" : "") + (t = s(t.split(/[\\\/]+/), !n).join("\\")) || "."
            }, l.normalize = function(e) {
                var t = d(e),
                    n = t.device,
                    r = t.isUnc,
                    o = t.isAbsolute,
                    i = t.tail,
                    a = /[\\\/]$/.test(i);
                return (i = s(i.split(/[\\\/]+/), !o).join("\\")) || o || (i = "."), i && a && (i += "\\"), r && (n = p(n)), n + (o ? "\\" : "") + i
            }, l.isAbsolute = function(e) {
                return d(e).isAbsolute
            }, l.join = function() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                    n && e.push(n)
                }
                var r = e.join("\\");
                return /^[\\\/]{2}[^\\\/]/.test(e[0]) || (r = r.replace(/^[\\\/]{2,}/, "\\")), l.normalize(r)
            }, l.relative = function(e, t) {
                e = l.resolve(e), t = l.resolve(t);
                for (var n = e.toLowerCase(), r = t.toLowerCase(), o = a(t.split("\\")), i = a(n.split("\\")), s = a(r.split("\\")), u = Math.min(i.length, s.length), c = u, f = 0; f < u; f++)
                    if (i[f] !== s[f]) {
                        c = f;
                        break
                    } if (0 == c) return t;
                var d = [];
                for (f = c; f < i.length; f++) d.push("..");
                return (d = d.concat(o.slice(c))).join("\\")
            }, l._makeLong = function(e) {
                if (!i.isString(e)) return e;
                if (!e) return "";
                var t = l.resolve(e);
                return /^[a-zA-Z]\:\\/.test(t) ? "\\\\?\\" + t : /^\\\\[^?.]/.test(t) ? "\\\\?\\UNC\\" + t.substring(2) : e
            }, l.dirname = function(e) {
                var t = f(e),
                    n = t[0],
                    r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, l.basename = function(e, t) {
                var n = f(e)[2];
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
            }, l.extname = function(e) {
                return f(e)[3]
            }, l.format = function(e) {
                if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                var t = e.root || "";
                if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                var n = e.dir,
                    r = e.base || "";
                return n ? n[n.length - 1] === l.sep ? n + r : n + l.sep + r : r
            }, l.parse = function(e) {
                if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                var t = f(e);
                if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                return {
                    root: t[0],
                    dir: t[0] + t[1].slice(0, -1),
                    base: t[2],
                    ext: t[3],
                    name: t[2].slice(0, t[2].length - t[3].length)
                }
            }, l.sep = "\\", l.delimiter = ";";
            var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                g = {};

            function m(e) {
                return h.exec(e).slice(1)
            }
            g.resolve = function() {
                for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                    var o = n >= 0 ? arguments[n] : r.cwd();
                    if (!i.isString(o)) throw new TypeError("Arguments to path.resolve must be strings");
                    o && (e = o + "/" + e, t = "/" === o[0])
                }
                return (t ? "/" : "") + (e = s(e.split("/"), !t).join("/")) || "."
            }, g.normalize = function(e) {
                var t = g.isAbsolute(e),
                    n = e && "/" === e[e.length - 1];
                return (e = s(e.split("/"), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e
            }, g.isAbsolute = function(e) {
                return "/" === e.charAt(0)
            }, g.join = function() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                    n && (e += e ? "/" + n : n)
                }
                return g.normalize(e)
            }, g.relative = function(e, t) {
                e = g.resolve(e).substr(1), t = g.resolve(t).substr(1);
                for (var n = a(e.split("/")), r = a(t.split("/")), o = Math.min(n.length, r.length), i = o, s = 0; s < o; s++)
                    if (n[s] !== r[s]) {
                        i = s;
                        break
                    } var u = [];
                for (s = i; s < n.length; s++) u.push("..");
                return (u = u.concat(r.slice(i))).join("/")
            }, g._makeLong = function(e) {
                return e
            }, g.dirname = function(e) {
                var t = m(e),
                    n = t[0],
                    r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, g.basename = function(e, t) {
                var n = m(e)[2];
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
            }, g.extname = function(e) {
                return m(e)[3]
            }, g.format = function(e) {
                if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                var t = e.root || "";
                if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                return (e.dir ? e.dir + g.sep : "") + (e.base || "")
            }, g.parse = function(e) {
                if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                var t = m(e);
                if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                return t[1] = t[1] || "", t[2] = t[2] || "", t[3] = t[3] || "", {
                    root: t[0],
                    dir: t[0] + t[1].slice(0, -1),
                    base: t[2],
                    ext: t[3],
                    name: t[2].slice(0, t[2].length - t[3].length)
                }
            }, g.sep = "/", g.delimiter = ":", e.exports = o ? l : g, e.exports.posix = g, e.exports.win32 = l
        },
        27061: e => {
            var t, n, r = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    n = i
                }
            }();
            var a, u = [],
                c = !1,
                l = -1;

            function f() {
                c && a && (c = !1, a.length ? u = a.concat(u) : l = -1, u.length && d())
            }

            function d() {
                if (!c) {
                    var e = s(f);
                    c = !0;
                    for (var t = u.length; t;) {
                        for (a = u, u = []; ++l < t;) a && a[l].run();
                        l = -1, t = u.length
                    }
                    a = null, c = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new p(e, t)), 1 !== u.length || c || s(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                return []
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        58772: (e, t, n) => {
            var r = n(90331);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        23615: (e, t, n) => {
            e.exports = n(58772)()
        },
        90331: e => {
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        43577: (e, t, n) => {
            var r = n(27378),
                o = n(62525),
                i = n(91102);

            function s(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!r) throw Error(s(227));
            var a = new Set,
                u = {};

            function c(e, t) {
                l(e, t), l(e + "Capture", t)
            }

            function l(e, t) {
                for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e])
            }
            var f = !("undefined" == typeof self || void 0 === self.document || void 0 === self.document.createElement),
                d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                p = Object.prototype.hasOwnProperty,
                h = {},
                g = {};

            function m(e, t, n, r, o, i, s) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
            }
            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                v[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function(e) {
                var t = e[0];
                v[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                v[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                v[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function(e) {
                v[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function(e) {
                v[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function(e) {
                v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var b = /[\-:]([a-z])/g;

            function y(e) {
                return e[1].toUpperCase()
            }

            function _(e, t, n, r) {
                var o = v.hasOwnProperty(t) ? v[t] : null;
                (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                    if (null == t || function(e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                default:
                                    return !1
                            }
                        }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function(e) {
                    return !!p.call(g, e) || !p.call(h, e) && (d.test(e) ? g[e] = !0 : (h[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(b, y);
                v[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(b, y);
                v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(b, y);
                v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                S = 60103,
                w = 60106,
                C = 60107,
                T = 60108,
                O = 60114,
                N = 60109,
                x = 60110,
                k = 60112,
                I = 60113,
                A = 60120,
                P = 60115,
                R = 60116,
                L = 60121,
                D = 60128,
                M = 60129,
                U = 60130,
                F = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var j = Symbol.for;
                S = j("react.element"), w = j("react.portal"), C = j("react.fragment"), T = j("react.strict_mode"), O = j("react.profiler"), N = j("react.provider"), x = j("react.context"), k = j("react.forward_ref"), I = j("react.suspense"), A = j("react.suspense_list"), P = j("react.memo"), R = j("react.lazy"), L = j("react.block"), j("react.scope"), D = j("react.opaque.id"), M = j("react.debug_trace_mode"), U = j("react.offscreen"), F = j("react.legacy_hidden")
            }
            var B, G = "function" == typeof Symbol && Symbol.iterator;

            function H(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = G && e[G] || e["@@iterator"]) ? e : null
            }

            function z(e) {
                if (void 0 === B) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    B = t && t[1] || ""
                }
                return "\n" + B + e
            }
            var W = !1;

            function $(e, t) {
                if (!e || W) return "";
                W = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                                throw Error()
                            }, Object.defineProperty(t.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (e) {
                                var r = e
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (e) {
                                r = e
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (e) {
                    if (e && r && "string" == typeof e.stack) {
                        for (var o = e.stack.split("\n"), i = r.stack.split("\n"), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
                        for (; 1 <= s && 0 <= a; s--, a--)
                            if (o[s] !== i[a]) {
                                if (1 !== s || 1 !== a)
                                    do {
                                        if (s--, 0 > --a || o[s] !== i[a]) return "\n" + o[s].replace(" at new ", " at ")
                                    } while (1 <= s && 0 <= a);
                                break
                            }
                    }
                } finally {
                    W = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? z(e) : ""
            }

            function V(e) {
                switch (e.tag) {
                    case 5:
                        return z(e.type);
                    case 16:
                        return z("Lazy");
                    case 13:
                        return z("Suspense");
                    case 19:
                        return z("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = $(e.type, !1);
                    case 11:
                        return e = $(e.type.render, !1);
                    case 22:
                        return e = $(e.type._render, !1);
                    case 1:
                        return e = $(e.type, !0);
                    default:
                        return ""
                }
            }

            function q(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case C:
                        return "Fragment";
                    case w:
                        return "Portal";
                    case O:
                        return "Profiler";
                    case T:
                        return "StrictMode";
                    case I:
                        return "Suspense";
                    case A:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case x:
                        return (e.displayName || "Context") + ".Consumer";
                    case N:
                        return (e._context.displayName || "Context") + ".Provider";
                    case k:
                        var t = e.render;
                        return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case P:
                        return q(e.type);
                    case L:
                        return q(e._render);
                    case R:
                        t = e._payload, e = e._init;
                        try {
                            return q(e(t))
                        } catch (e) {}
                }
                return null
            }

            function Y(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return ""
                }
            }

            function K(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function Q(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = K(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get,
                            i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return o.call(this)
                            },
                            set: function(e) {
                                r = "" + e, i.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function X(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = K(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function J(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Z(e, t) {
                var n = t.checked;
                return o({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = Y(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function te(e, t) {
                null != (t = t.checked) && _(e, "checked", t, !1)
            }

            function ne(e, t) {
                te(e, t);
                var n = Y(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, Y(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function oe(e, t, n) {
                "number" === t && J(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            function ie(e, t) {
                return e = o({
                    children: void 0
                }, t), (t = function(e) {
                    var t = "";
                    return r.Children.forEach(e, (function(e) {
                        null != e && (t += e)
                    })), t
                }(t.children)) && (e.children = t), e
            }

            function se(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function ae(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
                return o({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function ue(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(s(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(s(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: Y(n)
                }
            }

            function ce(e, t) {
                var n = Y(t.value),
                    r = Y(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function le(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            var fe = "http://www.w3.org/1999/xhtml",
                de = "http://www.w3.org/2000/svg";

            function pe(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function he(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ge, me, ve = (me = function(e, t) {
                if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((ge = ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return me(e, t)
                }))
            } : me);

            function be(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }
            var ye = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                _e = ["Webkit", "ms", "Moz", "O"];

            function Ee(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ye.hasOwnProperty(e) && ye[e] ? ("" + t).trim() : t + "px"
            }

            function Se(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            o = Ee(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            Object.keys(ye).forEach((function(e) {
                _e.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), ye[t] = ye[e]
                }))
            }));
            var we = o({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function Ce(e, t) {
                if (t) {
                    if (we[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(s(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
                    }
                    if (null != t.style && "object" != typeof t.style) throw Error(s(62))
                }
            }

            function Te(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            function Oe(e) {
                return (e = e.target || e.srcElement || self).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var Ne = null,
                xe = null,
                ke = null;

            function Ie(e) {
                if (e = eo(e)) {
                    if ("function" != typeof Ne) throw Error(s(280));
                    var t = e.stateNode;
                    t && (t = no(t), Ne(e.stateNode, e.type, t))
                }
            }

            function Ae(e) {
                xe ? ke ? ke.push(e) : ke = [e] : xe = e
            }

            function Pe() {
                if (xe) {
                    var e = xe,
                        t = ke;
                    if (ke = xe = null, Ie(e), t)
                        for (e = 0; e < t.length; e++) Ie(t[e])
                }
            }

            function Re(e, t) {
                return e(t)
            }

            function Le(e, t, n, r, o) {
                return e(t, n, r, o)
            }

            function De() {}
            var Me = Re,
                Ue = !1,
                Fe = !1;

            function je() {
                null === xe && null === ke || (De(), Pe())
            }

            function Be(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = no(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(s(231, t, typeof n));
                return n
            }
            var Ge = !1;
            if (f) try {
                var He = {};
                Object.defineProperty(He, "passive", {
                    get: function() {
                        Ge = !0
                    }
                }), self.addEventListener("test", He, He), self.removeEventListener("test", He, He)
            } catch (me) {
                Ge = !1
            }

            function ze(e, t, n, r, o, i, s, a, u) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (e) {
                    this.onError(e)
                }
            }
            var We = !1,
                $e = null,
                Ve = !1,
                qe = null,
                Ye = {
                    onError: function(e) {
                        We = !0, $e = e
                    }
                };

            function Ke(e, t, n, r, o, i, s, a, u) {
                We = !1, $e = null, ze.apply(Ye, arguments)
            }

            function Qe(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 != (1026 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function Xe(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function Je(e) {
                if (Qe(e) !== e) throw Error(s(188))
            }

            function Ze(e) {
                if (!(e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Qe(e))) throw Error(s(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var o = n.return;
                            if (null === o) break;
                            var i = o.alternate;
                            if (null === i) {
                                if (null !== (r = o.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (o.child === i.child) {
                                for (i = o.child; i;) {
                                    if (i === n) return Je(o), e;
                                    if (i === r) return Je(o), t;
                                    i = i.sibling
                                }
                                throw Error(s(188))
                            }
                            if (n.return !== r.return) n = o, r = i;
                            else {
                                for (var a = !1, u = o.child; u;) {
                                    if (u === n) {
                                        a = !0, n = o, r = i;
                                        break
                                    }
                                    if (u === r) {
                                        a = !0, r = o, n = i;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!a) {
                                    for (u = i.child; u;) {
                                        if (u === n) {
                                            a = !0, n = i, r = o;
                                            break
                                        }
                                        if (u === r) {
                                            a = !0, r = i, n = o;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!a) throw Error(s(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(s(190))
                        }
                        if (3 !== n.tag) throw Error(s(188));
                        return n.stateNode.current === n ? e : t
                    }(e))) return null;
                for (var t = e;;) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) t.child.return = t, t = t.child;
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }

            function et(e, t) {
                for (var n = e.alternate; null !== t;) {
                    if (t === e || t === n) return !0;
                    t = t.return
                }
                return !1
            }
            var tt, nt, rt, ot, it = !1,
                st = [],
                at = null,
                ut = null,
                ct = null,
                lt = new Map,
                ft = new Map,
                dt = [],
                pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function ht(e, t, n, r, o) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | n,
                    nativeEvent: o,
                    targetContainers: [r]
                }
            }

            function gt(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        at = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        ut = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        ct = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        lt.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        ft.delete(t.pointerId)
                }
            }

            function mt(e, t, n, r, o, i) {
                return null === e || e.nativeEvent !== i ? (e = ht(t, n, r, o, i), null !== t && (null !== (t = eo(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function vt(e) {
                var t = Zr(e.target);
                if (null !== t) {
                    var n = Qe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Xe(n))) return e.blockedOn = t, void ot(e.lanePriority, (function() {
                                i.unstable_runWithPriority(e.priority, (function() {
                                    rt(n)
                                }))
                            }))
                        } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function bt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = eo(n)) && nt(t), e.blockedOn = n, !1;
                    t.shift()
                }
                return !0
            }

            function yt(e, t, n) {
                bt(e) && n.delete(t)
            }

            function _t() {
                for (it = !1; 0 < st.length;) {
                    var e = st[0];
                    if (null !== e.blockedOn) {
                        null !== (e = eo(e.blockedOn)) && tt(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && st.shift()
                }
                null !== at && bt(at) && (at = null), null !== ut && bt(ut) && (ut = null), null !== ct && bt(ct) && (ct = null), lt.forEach(yt), ft.forEach(yt)
            }

            function Et(e, t) {
                e.blockedOn === t && (e.blockedOn = null, it || (it = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, _t)))
            }

            function St(e) {
                function t(t) {
                    return Et(t, e)
                }
                if (0 < st.length) {
                    Et(st[0], e);
                    for (var n = 1; n < st.length; n++) {
                        var r = st[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== at && Et(at, e), null !== ut && Et(ut, e), null !== ct && Et(ct, e), lt.forEach(t), ft.forEach(t), n = 0; n < dt.length; n++)(r = dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < dt.length && null === (n = dt[0]).blockedOn;) vt(n), null === n.blockedOn && dt.shift()
            }

            function wt(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var Ct = {
                    animationend: wt("Animation", "AnimationEnd"),
                    animationiteration: wt("Animation", "AnimationIteration"),
                    animationstart: wt("Animation", "AnimationStart"),
                    transitionend: wt("Transition", "TransitionEnd")
                },
                Tt = {},
                Ot = {};

            function Nt(e) {
                if (Tt[e]) return Tt[e];
                if (!Ct[e]) return e;
                var t, n = Ct[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Ot) return Tt[e] = n[t];
                return e
            }
            f && (Ot = document.createElement("div").style, "AnimationEvent" in self || (delete Ct.animationend.animation, delete Ct.animationiteration.animation, delete Ct.animationstart.animation), "TransitionEvent" in self || delete Ct.transitionend.transition);
            var xt = Nt("animationend"),
                kt = Nt("animationiteration"),
                It = Nt("animationstart"),
                At = Nt("transitionend"),
                Pt = new Map,
                Rt = new Map,
                Lt = ["abort", "abort", xt, "animationEnd", kt, "animationIteration", It, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", At, "transitionEnd", "waiting", "waiting"];

            function Dt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        o = e[n + 1];
                    o = "on" + (o[0].toUpperCase() + o.slice(1)), Rt.set(r, t), Pt.set(r, o), c(o, [r])
                }
            }(0, i.unstable_now)();
            var Mt = 8;

            function Ut(e) {
                if (0 != (1 & e)) return Mt = 15, 1;
                if (0 != (2 & e)) return Mt = 14, 2;
                if (0 != (4 & e)) return Mt = 13, 4;
                var t = 24 & e;
                return 0 !== t ? (Mt = 12, t) : 0 != (32 & e) ? (Mt = 11, 32) : 0 !== (t = 192 & e) ? (Mt = 10, t) : 0 != (256 & e) ? (Mt = 9, 256) : 0 !== (t = 3584 & e) ? (Mt = 8, t) : 0 != (4096 & e) ? (Mt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Mt = 6, t) : 0 !== (t = 62914560 & e) ? (Mt = 5, t) : 67108864 & e ? (Mt = 4, 67108864) : 0 != (134217728 & e) ? (Mt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Mt = 2, t) : 0 != (1073741824 & e) ? (Mt = 1, 1073741824) : (Mt = 8, e)
            }

            function Ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return Mt = 0;
                var r = 0,
                    o = 0,
                    i = e.expiredLanes,
                    s = e.suspendedLanes,
                    a = e.pingedLanes;
                if (0 !== i) r = i, o = Mt = 15;
                else if (0 !== (i = 134217727 & n)) {
                    var u = i & ~s;
                    0 !== u ? (r = Ut(u), o = Mt) : 0 !== (a &= i) && (r = Ut(a), o = Mt)
                } else 0 !== (i = n & ~s) ? (r = Ut(i), o = Mt) : 0 !== a && (r = Ut(a), o = Mt);
                if (0 === r) return 0;
                if (r = n & ((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 == (t & s)) {
                    if (Ut(t), o <= Mt) return t;
                    Mt = o
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Wt(t)), r |= e[n], t &= ~o;
                return r
            }

            function jt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function Bt(e, t) {
                switch (e) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (e = Gt(24 & ~t)) ? Bt(10, t) : e;
                    case 10:
                        return 0 === (e = Gt(192 & ~t)) ? Bt(8, t) : e;
                    case 8:
                        return 0 === (e = Gt(3584 & ~t)) && (0 === (e = Gt(4186112 & ~t)) && (e = 512)), e;
                    case 2:
                        return 0 === (t = Gt(805306368 & ~t)) && (t = 268435456), t
                }
                throw Error(s(358, e))
            }

            function Gt(e) {
                return e & -e
            }

            function Ht(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function zt(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Wt(t)] = n
            }
            var Wt = Math.clz32 ? Math.clz32 : function(e) {
                    return 0 === e ? 32 : 31 - ($t(e) / Vt | 0) | 0
                },
                $t = Math.log,
                Vt = Math.LN2;
            var qt = i.unstable_UserBlockingPriority,
                Yt = i.unstable_runWithPriority,
                Kt = !0;

            function Qt(e, t, n, r) {
                Ue || De();
                var o = Jt,
                    i = Ue;
                Ue = !0;
                try {
                    Le(o, e, t, n, r)
                } finally {
                    (Ue = i) || je()
                }
            }

            function Xt(e, t, n, r) {
                Yt(qt, Jt.bind(null, e, t, n, r))
            }

            function Jt(e, t, n, r) {
                var o;
                if (Kt)
                    if ((o = 0 == (4 & t)) && 0 < st.length && -1 < pt.indexOf(e)) e = ht(null, e, t, n, r), st.push(e);
                    else {
                        var i = Zt(e, t, n, r);
                        if (null === i) o && gt(e, r);
                        else {
                            if (o) {
                                if (-1 < pt.indexOf(e)) return e = ht(i, e, t, n, r), void st.push(e);
                                if (function(e, t, n, r, o) {
                                        switch (t) {
                                            case "focusin":
                                                return at = mt(at, e, t, n, r, o), !0;
                                            case "dragenter":
                                                return ut = mt(ut, e, t, n, r, o), !0;
                                            case "mouseover":
                                                return ct = mt(ct, e, t, n, r, o), !0;
                                            case "pointerover":
                                                var i = o.pointerId;
                                                return lt.set(i, mt(lt.get(i) || null, e, t, n, r, o)), !0;
                                            case "gotpointercapture":
                                                return i = o.pointerId, ft.set(i, mt(ft.get(i) || null, e, t, n, r, o)), !0
                                        }
                                        return !1
                                    }(i, e, t, n, r)) return;
                                gt(e, r)
                            }
                            Pr(e, t, r, null, n)
                        }
                    }
            }

            function Zt(e, t, n, r) {
                var o = Oe(r);
                if (null !== (o = Zr(o))) {
                    var i = Qe(o);
                    if (null === i) o = null;
                    else {
                        var s = i.tag;
                        if (13 === s) {
                            if (null !== (o = Xe(i))) return o;
                            o = null
                        } else if (3 === s) {
                            if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                            o = null
                        } else i !== o && (o = null)
                    }
                }
                return Pr(e, t, r, o, n), null
            }
            var en = null,
                tn = null,
                nn = null;

            function rn() {
                if (nn) return nn;
                var e, t, n = tn,
                    r = n.length,
                    o = "value" in en ? en.value : en.textContent,
                    i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++);
                var s = r - e;
                for (t = 1; t <= s && n[r - t] === o[i - t]; t++);
                return nn = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function on(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function sn() {
                return !0
            }

            function an() {
                return !1
            }

            function un(e) {
                function t(t, n, r, o, i) {
                    for (var s in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(o) : o[s]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? sn : an, this.isPropagationStopped = an, this
                }
                return o(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = sn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = sn)
                    },
                    persist: function() {},
                    isPersistent: sn
                }), t
            }
            var cn, ln, fn, dn = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: 0,
                    isTrusted: 0
                },
                pn = un(dn),
                hn = o({}, dn, {
                    view: 0,
                    detail: 0
                }),
                gn = un(hn),
                mn = o({}, hn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: Nn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function(e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function(e) {
                        return "movementX" in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (cn = e.screenX - fn.screenX, ln = e.screenY - fn.screenY) : ln = cn = 0, fn = e), cn)
                    },
                    movementY: function(e) {
                        return "movementY" in e ? e.movementY : ln
                    }
                }),
                vn = un(mn),
                bn = un(o({}, mn, {
                    dataTransfer: 0
                })),
                yn = un(o({}, hn, {
                    relatedTarget: 0
                })),
                _n = un(o({}, dn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                En = un(o({}, dn, {
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : self.clipboardData
                    }
                })),
                Sn = un(o({}, dn, {
                    data: 0
                })),
                wn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                Cn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                Tn = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function On(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Tn[e]) && !!t[e]
            }

            function Nn() {
                return On
            }
            var xn = un(o({}, hn, {
                    key: function(e) {
                        if (e.key) {
                            var t = wn[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = on(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Cn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: Nn,
                    charCode: function(e) {
                        return "keypress" === e.type ? on(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                })),
                kn = un(o({}, mn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                In = un(o({}, hn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: Nn
                })),
                An = un(o({}, dn, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                Pn = un(o({}, mn, {
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                })),
                Rn = [9, 13, 27, 32],
                Ln = f && "CompositionEvent" in self,
                Dn = null;
            f && "documentMode" in document && (Dn = document.documentMode);
            var Mn = f && "TextEvent" in self && !Dn,
                Un = f && (!Ln || Dn && 8 < Dn && 11 >= Dn),
                Fn = String.fromCharCode(32),
                jn = !1;

            function Bn(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Rn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Gn(e) {
                return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Hn = !1;
            var zn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Wn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!zn[e.type] : "textarea" === t
            }

            function $n(e, t, n, r) {
                Ae(r), 0 < (t = Lr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Vn = null,
                qn = null;

            function Yn(e) {
                Or(e, 0)
            }

            function Kn(e) {
                if (X(to(e))) return e
            }

            function Qn(e, t) {
                if ("change" === e) return t
            }
            var Xn = !1;
            if (f) {
                var Jn;
                if (f) {
                    var Zn = "oninput" in document;
                    if (!Zn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput
                    }
                    Jn = Zn
                } else Jn = !1;
                Xn = Jn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                Vn && (Vn.detachEvent("onpropertychange", nr), qn = Vn = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Kn(qn)) {
                    var t = [];
                    if ($n(t, qn, e, Oe(e)), e = Yn, Ue) e(t);
                    else {
                        Ue = !0;
                        try {
                            Re(e, t)
                        } finally {
                            Ue = !1, je()
                        }
                    }
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), qn = n, (Vn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function or(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kn(qn)
            }

            function ir(e, t) {
                if ("click" === e) return Kn(t)
            }

            function sr(e, t) {
                if ("input" === e || "change" === e) return Kn(t)
            }
            var ar = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                ur = Object.prototype.hasOwnProperty;

            function cr(e, t) {
                if (ar(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++)
                    if (!ur.call(t, n[r]) || !ar(e[n[r]], t[n[r]])) return !1;
                return !0
            }

            function lr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function fr(e, t) {
                var n, r = lr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = lr(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function pr() {
                for (var e = self, t = J(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n) break;
                    t = J((e = t.contentWindow).document)
                }
                return t
            }

            function hr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var gr = f && "documentMode" in document && 11 >= document.documentMode,
                mr = null,
                vr = null,
                br = null,
                yr = !1;

            function _r(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                yr || null == mr || mr !== J(r) || ("selectionStart" in (r = mr) && hr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || self).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, br && cr(br, r) || (br = r, 0 < (r = Lr(vr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = mr)))
            }
            Dt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Dt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Dt(Lt, 2);
            for (var Er = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Sr = 0; Sr < Er.length; Sr++) Rt.set(Er[Sr], 0);
            l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Cr = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));

            function Tr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                    function(e, t, n, r, o, i, a, u, c) {
                        if (Ke.apply(this, arguments), We) {
                            if (!We) throw Error(s(198));
                            var l = $e;
                            We = !1, $e = null, Ve || (Ve = !0, qe = l)
                        }
                    }(r, t, void 0, e), e.currentTarget = null
            }

            function Or(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (t)
                            for (var s = r.length - 1; 0 <= s; s--) {
                                var a = r[s],
                                    u = a.instance,
                                    c = a.currentTarget;
                                if (a = a.listener, u !== i && o.isPropagationStopped()) break e;
                                Tr(o, a, c), i = u
                            } else
                                for (s = 0; s < r.length; s++) {
                                    if (u = (a = r[s]).instance, c = a.currentTarget, a = a.listener, u !== i && o.isPropagationStopped()) break e;
                                    Tr(o, a, c), i = u
                                }
                    }
                }
                if (Ve) throw e = qe, Ve = !1, qe = null, e
            }

            function Nr(e, t) {
                var n = ro(t),
                    r = e + "__bubble";
                n.has(r) || (Ar(t, e, 2, !1), n.add(r))
            }
            var xr = "_reactListening" + Math.random().toString(36).slice(2);

            function kr(e) {
                e[xr] || (e[xr] = !0, a.forEach((function(t) {
                    Cr.has(t) || Ir(t, !1, e, null), Ir(t, !0, e, null)
                })))
            }

            function Ir(e, t, n, r) {
                var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                    i = n;
                if ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && Cr.has(e)) {
                    if ("scroll" !== e) return;
                    o |= 2, i = r
                }
                var s = ro(i),
                    a = e + "__" + (t ? "capture" : "bubble");
                s.has(a) || (t && (o |= 4), Ar(i, e, o, t), s.add(a))
            }

            function Ar(e, t, n, r) {
                var o = Rt.get(t);
                switch (void 0 === o ? 2 : o) {
                    case 0:
                        o = Qt;
                        break;
                    case 1:
                        o = Xt;
                        break;
                    default:
                        o = Jt
                }
                n = o.bind(null, t, n, e), o = void 0, !Ge || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                    passive: o
                }) : e.addEventListener(t, n, !1)
            }

            function Pr(e, t, n, r, o) {
                var i = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
                    if (null === r) return;
                    var s = r.tag;
                    if (3 === s || 4 === s) {
                        var a = r.stateNode.containerInfo;
                        if (a === o || 8 === a.nodeType && a.parentNode === o) break;
                        if (4 === s)
                            for (s = r.return; null !== s;) {
                                var u = s.tag;
                                if ((3 === u || 4 === u) && ((u = s.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                                s = s.return
                            }
                        for (; null !== a;) {
                            if (null === (s = Zr(a))) return;
                            if (5 === (u = s.tag) || 6 === u) {
                                r = i = s;
                                continue e
                            }
                            a = a.parentNode
                        }
                    }
                    r = r.return
                }! function(e, t, n) {
                    if (Fe) return e(t, n);
                    Fe = !0;
                    try {
                        Me(e, t, n)
                    } finally {
                        Fe = !1, je()
                    }
                }((function() {
                    var r = i,
                        o = Oe(n),
                        s = [];
                    e: {
                        var a = Pt.get(e);
                        if (void 0 !== a) {
                            var u = pn,
                                c = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === on(n)) break e;
                                case "keydown":
                                case "keyup":
                                    u = xn;
                                    break;
                                case "focusin":
                                    c = "focus", u = yn;
                                    break;
                                case "focusout":
                                    c = "blur", u = yn;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    u = yn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    u = vn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    u = bn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    u = In;
                                    break;
                                case xt:
                                case kt:
                                case It:
                                    u = _n;
                                    break;
                                case At:
                                    u = An;
                                    break;
                                case "scroll":
                                    u = gn;
                                    break;
                                case "wheel":
                                    u = Pn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    u = En;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    u = kn
                            }
                            var l = 0 != (4 & t),
                                f = !l && "scroll" === e,
                                d = l ? null !== a ? a + "Capture" : null : a;
                            l = [];
                            for (var p, h = r; null !== h;) {
                                var g = (p = h).stateNode;
                                if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = Be(h, d)) && l.push(Rr(h, g, p)))), f) break;
                                h = h.return
                            }
                            0 < l.length && (a = new u(a, c, null, n, o), s.push({
                                event: a,
                                listeners: l
                            }))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e, (!(a = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(c = n.relatedTarget || n.fromElement) || !Zr(c) && !c[Xr]) && (u || a) && (a = o.window === o ? o : (a = o.ownerDocument) ? a.defaultView || a.parentWindow : self, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Zr(c) : null) && (c !== (f = Qe(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (u = null, c = r), u !== c)) {
                            if (l = vn, g = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (l = kn, g = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? a : to(u), p = null == c ? a : to(c), (a = new l(g, h + "leave", u, n, o)).target = f, a.relatedTarget = p, g = null, Zr(o) === r && ((l = new l(d, h + "enter", c, n, o)).target = p, l.relatedTarget = f, g = l), f = g, u && c) e: {
                                for (d = c, h = 0, p = l = u; p; p = Dr(p)) h++;
                                for (p = 0, g = d; g; g = Dr(g)) p++;
                                for (; 0 < h - p;) l = Dr(l),
                                h--;
                                for (; 0 < p - h;) d = Dr(d),
                                p--;
                                for (; h--;) {
                                    if (l === d || null !== d && l === d.alternate) break e;
                                    l = Dr(l), d = Dr(d)
                                }
                                l = null
                            }
                            else l = null;
                            null !== u && Mr(s, a, u, l, !1), null !== c && null !== f && Mr(s, f, c, l, !0)
                        }
                        if ("select" === (u = (a = r ? to(r) : self).nodeName && a.nodeName.toLowerCase()) || "input" === u && "file" === a.type) var m = Qn;
                        else if (Wn(a))
                            if (Xn) m = sr;
                            else {
                                m = or;
                                var v = rr
                            }
                        else(u = a.nodeName) && "input" === u.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (m = ir);
                        switch (m && (m = m(e, r)) ? $n(s, m, n, o) : (v && v(e, a, r), "focusout" === e && (v = a._wrapperState) && v.controlled && "number" === a.type && oe(a, "number", a.value)), v = r ? to(r) : self, e) {
                            case "focusin":
                                (Wn(v) || "true" === v.contentEditable) && (mr = v, vr = r, br = null);
                                break;
                            case "focusout":
                                br = vr = mr = null;
                                break;
                            case "mousedown":
                                yr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                yr = !1, _r(s, n, o);
                                break;
                            case "selectionchange":
                                if (gr) break;
                            case "keydown":
                            case "keyup":
                                _r(s, n, o)
                        }
                        var b;
                        if (Ln) e: {
                            switch (e) {
                                case "compositionstart":
                                    var y = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    y = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    y = "onCompositionUpdate";
                                    break e
                            }
                            y = void 0
                        }
                        else Hn ? Bn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                        y && (Un && "ko" !== n.locale && (Hn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Hn && (b = rn()) : (tn = "value" in (en = o) ? en.value : en.textContent, Hn = !0)), 0 < (v = Lr(r, y)).length && (y = new Sn(y, e, null, n, o), s.push({
                            event: y,
                            listeners: v
                        }), b ? y.data = b : null !== (b = Gn(n)) && (y.data = b))), (b = Mn ? function(e, t) {
                            switch (e) {
                                case "compositionend":
                                    return Gn(t);
                                case "keypress":
                                    return 32 !== t.which ? null : (jn = !0, Fn);
                                case "textInput":
                                    return (e = t.data) === Fn && jn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function(e, t) {
                            if (Hn) return "compositionend" === e || !Ln && Bn(e, t) ? (e = rn(), nn = tn = en = null, Hn = !1, e) : null;
                            switch (e) {
                                case "paste":
                                    return null;
                                case "keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return Un && "ko" !== t.locale ? null : t.data;
                                default:
                                    return null
                            }
                        }(e, n)) && (0 < (r = Lr(r, "onBeforeInput")).length && (o = new Sn("onBeforeInput", "beforeinput", null, n, o), s.push({
                            event: o,
                            listeners: r
                        }), o.data = b))
                    }
                    Or(s, t)
                }))
            }

            function Rr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function Lr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e,
                        i = o.stateNode;
                    5 === o.tag && null !== i && (o = i, null != (i = Be(e, n)) && r.unshift(Rr(e, i, o)), null != (i = Be(e, t)) && r.push(Rr(e, i, o))), e = e.return
                }
                return r
            }

            function Dr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Mr(e, t, n, r, o) {
                for (var i = t._reactName, s = []; null !== n && n !== r;) {
                    var a = n,
                        u = a.alternate,
                        c = a.stateNode;
                    if (null !== u && u === r) break;
                    5 === a.tag && null !== c && (a = c, o ? null != (u = Be(n, i)) && s.unshift(Rr(n, u, a)) : o || null != (u = Be(n, i)) && s.push(Rr(n, u, a))), n = n.return
                }
                0 !== s.length && e.push({
                    event: t,
                    listeners: s
                })
            }

            function Ur() {}
            var Fr = null,
                jr = null;

            function Br(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus
                }
                return !1
            }

            function Gr(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Hr = "function" == typeof setTimeout ? setTimeout : void 0,
                zr = "function" == typeof clearTimeout ? clearTimeout : void 0;

            function Wr(e) {
                1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
            }

            function $r(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break
                }
                return e
            }

            function Vr(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var qr = 0;
            var Yr = Math.random().toString(36).slice(2),
                Kr = "__reactFiber$" + Yr,
                Qr = "__reactProps$" + Yr,
                Xr = "__reactContainer$" + Yr,
                Jr = "__reactEvents$" + Yr;

            function Zr(e) {
                var t = e[Kr];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[Xr] || n[Kr]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = Vr(e); null !== e;) {
                                if (n = e[Kr]) return n;
                                e = Vr(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function eo(e) {
                return !(e = e[Kr] || e[Xr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function to(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(s(33))
            }

            function no(e) {
                return e[Qr] || null
            }

            function ro(e) {
                var t = e[Jr];
                return void 0 === t && (t = e[Jr] = new Set), t
            }
            var oo = [],
                io = -1;

            function so(e) {
                return {
                    current: e
                }
            }

            function ao(e) {
                0 > io || (e.current = oo[io], oo[io] = null, io--)
            }

            function uo(e, t) {
                io++, oo[io] = e.current, e.current = t
            }
            var co = {},
                lo = so(co),
                fo = so(!1),
                po = co;

            function ho(e, t) {
                var n = e.type.contextTypes;
                if (!n) return co;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, i = {};
                for (o in n) i[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
            }

            function go(e) {
                return null != (e = e.childContextTypes)
            }

            function mo() {
                ao(fo), ao(lo)
            }

            function vo(e, t, n) {
                if (lo.current !== co) throw Error(s(168));
                uo(lo, t), uo(fo, n)
            }

            function bo(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                for (var i in r = r.getChildContext())
                    if (!(i in e)) throw Error(s(108, q(t) || "Unknown", i));
                return o({}, n, r)
            }

            function yo(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || co, po = lo.current, uo(lo, e), uo(fo, fo.current), !0
            }

            function _o(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(s(169));
                n ? (e = bo(e, t, po), r.__reactInternalMemoizedMergedChildContext = e, ao(fo), ao(lo), uo(lo, e)) : ao(fo), uo(fo, n)
            }
            var Eo = null,
                So = null,
                wo = i.unstable_runWithPriority,
                Co = i.unstable_scheduleCallback,
                To = i.unstable_cancelCallback,
                Oo = i.unstable_shouldYield,
                No = i.unstable_requestPaint,
                xo = i.unstable_now,
                ko = i.unstable_getCurrentPriorityLevel,
                Io = i.unstable_ImmediatePriority,
                Ao = i.unstable_UserBlockingPriority,
                Po = i.unstable_NormalPriority,
                Ro = i.unstable_LowPriority,
                Lo = i.unstable_IdlePriority,
                Do = {},
                Mo = void 0 !== No ? No : function() {},
                Uo = null,
                Fo = null,
                jo = !1,
                Bo = xo(),
                Go = 1e4 > Bo ? xo : function() {
                    return xo() - Bo
                };

            function Ho() {
                switch (ko()) {
                    case Io:
                        return 99;
                    case Ao:
                        return 98;
                    case Po:
                        return 97;
                    case Ro:
                        return 96;
                    case Lo:
                        return 95;
                    default:
                        throw Error(s(332))
                }
            }

            function zo(e) {
                switch (e) {
                    case 99:
                        return Io;
                    case 98:
                        return Ao;
                    case 97:
                        return Po;
                    case 96:
                        return Ro;
                    case 95:
                        return Lo;
                    default:
                        throw Error(s(332))
                }
            }

            function Wo(e, t) {
                return e = zo(e), wo(e, t)
            }

            function $o(e, t, n) {
                return e = zo(e), Co(e, t, n)
            }

            function Vo() {
                if (null !== Fo) {
                    var e = Fo;
                    Fo = null, To(e)
                }
                qo()
            }

            function qo() {
                if (!jo && null !== Uo) {
                    jo = !0;
                    var e = 0;
                    try {
                        var t = Uo;
                        Wo(99, (function() {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        })), Uo = null
                    } catch (t) {
                        throw null !== Uo && (Uo = Uo.slice(e + 1)), Co(Io, Vo), t
                    } finally {
                        jo = !1
                    }
                }
            }
            var Yo = E.ReactCurrentBatchConfig;

            function Ko(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var Qo = so(null),
                Xo = null,
                Jo = null,
                Zo = null;

            function ei() {
                Zo = Jo = Xo = null
            }

            function ti(e) {
                var t = Qo.current;
                ao(Qo), e.type._context._currentValue = t
            }

            function ni(e, t) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t) break;
                        n.childLanes |= t
                    } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                    e = e.return
                }
            }

            function ri(e, t) {
                Xo = e, Zo = Jo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Ls = !0), e.firstContext = null)
            }

            function oi(e, t) {
                if (Zo !== e && !1 !== t && 0 !== t)
                    if ("number" == typeof t && 1073741823 !== t || (Zo = e, t = 1073741823), t = {
                            context: e,
                            observedBits: t,
                            next: null
                        }, null === Jo) {
                        if (null === Xo) throw Error(s(308));
                        Jo = t, Xo.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else Jo = Jo.next = t;
                return e._currentValue
            }
            var ii = !1;

            function si(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }

            function ai(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function ui(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function ci(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }
            }

            function li(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null,
                        i = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var s = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === i ? o = i = s : i = i.next = s, n = n.next
                        } while (null !== n);
                        null === i ? o = i = t : i = i.next = t
                    } else o = i = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    }, void(e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function fi(e, t, n, r) {
                var i = e.updateQueue;
                ii = !1;
                var s = i.firstBaseUpdate,
                    a = i.lastBaseUpdate,
                    u = i.shared.pending;
                if (null !== u) {
                    i.shared.pending = null;
                    var c = u,
                        l = c.next;
                    c.next = null, null === a ? s = l : a.next = l, a = c;
                    var f = e.alternate;
                    if (null !== f) {
                        var d = (f = f.updateQueue).lastBaseUpdate;
                        d !== a && (null === d ? f.firstBaseUpdate = l : d.next = l, f.lastBaseUpdate = c)
                    }
                }
                if (null !== s) {
                    for (d = i.baseState, a = 0, f = l = c = null;;) {
                        u = s.lane;
                        var p = s.eventTime;
                        if ((r & u) === u) {
                            null !== f && (f = f.next = {
                                eventTime: p,
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            });
                            e: {
                                var h = e,
                                    g = s;
                                switch (u = t, p = n, g.tag) {
                                    case 1:
                                        if ("function" == typeof(h = g.payload)) {
                                            d = h.call(p, d, u);
                                            break e
                                        }
                                        d = h;
                                        break e;
                                    case 3:
                                        h.flags = -4097 & h.flags | 64;
                                    case 0:
                                        if (null == (u = "function" == typeof(h = g.payload) ? h.call(p, d, u) : h)) break e;
                                        d = o({}, d, u);
                                        break e;
                                    case 2:
                                        ii = !0
                                }
                            }
                            null !== s.callback && (e.flags |= 32, null === (u = i.effects) ? i.effects = [s] : u.push(s))
                        } else p = {
                            eventTime: p,
                            lane: u,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        }, null === f ? (l = f = p, c = d) : f = f.next = p, a |= u;
                        if (null === (s = s.next)) {
                            if (null === (u = i.shared.pending)) break;
                            s = u.next, u.next = null, i.lastBaseUpdate = u, i.shared.pending = null
                        }
                    }
                    null === f && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = f, Fa |= a, e.lanes = a, e.memoizedState = d
                }
            }

            function di(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            o = r.callback;
                        if (null !== o) {
                            if (r.callback = null, r = n, "function" != typeof o) throw Error(s(191, o));
                            o.call(r)
                        }
                    }
            }
            var pi = (new r.Component).refs;

            function hi(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var gi = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Qe(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = cu(),
                        o = lu(e),
                        i = ui(r, o);
                    i.payload = t, null != n && (i.callback = n), ci(e, i), fu(e, o, r)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = cu(),
                        o = lu(e),
                        i = ui(r, o);
                    i.tag = 1, i.payload = t, null != n && (i.callback = n), ci(e, i), fu(e, o, r)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = cu(),
                        r = lu(e),
                        o = ui(n, r);
                    o.tag = 2, null != t && (o.callback = t), ci(e, o), fu(e, r, n)
                }
            };

            function mi(e, t, n, r, o, i, s) {
                return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, s) : !t.prototype || !t.prototype.isPureReactComponent || (!cr(n, r) || !cr(o, i))
            }

            function vi(e, t, n) {
                var r = !1,
                    o = co,
                    i = t.contextType;
                return "object" == typeof i && null !== i ? i = oi(i) : (o = go(t) ? po : lo.current, i = (r = null != (r = t.contextTypes)) ? ho(e, o) : co), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = gi, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
            }

            function bi(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gi.enqueueReplaceState(t, t.state, null)
            }

            function yi(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = pi, si(e);
                var i = t.contextType;
                "object" == typeof i && null !== i ? o.context = oi(i) : (i = go(t) ? po : lo.current, o.context = ho(e, i)), fi(e, n, o, r), o.state = e.memoizedState, "function" == typeof(i = t.getDerivedStateFromProps) && (hi(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && gi.enqueueReplaceState(o, o.state, null), fi(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4)
            }
            var _i = Array.isArray;

            function Ei(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(s(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(s(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function(e) {
                            var t = r.refs;
                            t === pi && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
                        })._stringRef = o, t)
                    }
                    if ("string" != typeof e) throw Error(s(284));
                    if (!n._owner) throw Error(s(290, e))
                }
                return e
            }

            function Si(e, t) {
                if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }

            function wi(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = zu(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                }

                function a(t) {
                    return e && null === t.alternate && (t.flags = 2), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = qu(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function c(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = Ei(e, t, n), r.return = e, r) : ((r = Wu(n.type, n.key, n.props, null, e.mode, r)).ref = Ei(e, t, n), r.return = e, r)
                }

                function l(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Yu(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function f(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = $u(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function d(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t) return (t = qu("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case S:
                                return (n = Wu(t.type, t.key, t.props, null, e.mode, n)).ref = Ei(e, null, t), n.return = e, n;
                            case w:
                                return (t = Yu(t, e.mode, n)).return = e, t
                        }
                        if (_i(t) || H(t)) return (t = $u(t, e.mode, n, null)).return = e, t;
                        Si(e, t)
                    }
                    return null
                }

                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case S:
                                return n.key === o ? n.type === C ? f(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                            case w:
                                return n.key === o ? l(e, t, n, r) : null
                        }
                        if (_i(n) || H(n)) return null !== o ? null : f(e, t, n, r, null);
                        Si(e, n)
                    }
                    return null
                }

                function h(e, t, n, r, o) {
                    if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case S:
                                return e = e.get(null === r.key ? n : r.key) || null, r.type === C ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                            case w:
                                return l(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                        }
                        if (_i(r) || H(r)) return f(t, e = e.get(n) || null, r, o, null);
                        Si(t, r)
                    }
                    return null
                }

                function g(o, s, a, u) {
                    for (var c = null, l = null, f = s, g = s = 0, m = null; null !== f && g < a.length; g++) {
                        f.index > g ? (m = f, f = null) : m = f.sibling;
                        var v = p(o, f, a[g], u);
                        if (null === v) {
                            null === f && (f = m);
                            break
                        }
                        e && f && null === v.alternate && t(o, f), s = i(v, s, g), null === l ? c = v : l.sibling = v, l = v, f = m
                    }
                    if (g === a.length) return n(o, f), c;
                    if (null === f) {
                        for (; g < a.length; g++) null !== (f = d(o, a[g], u)) && (s = i(f, s, g), null === l ? c = f : l.sibling = f, l = f);
                        return c
                    }
                    for (f = r(o, f); g < a.length; g++) null !== (m = h(f, o, g, a[g], u)) && (e && null !== m.alternate && f.delete(null === m.key ? g : m.key), s = i(m, s, g), null === l ? c = m : l.sibling = m, l = m);
                    return e && f.forEach((function(e) {
                        return t(o, e)
                    })), c
                }

                function m(o, a, u, c) {
                    var l = H(u);
                    if ("function" != typeof l) throw Error(s(150));
                    if (null == (u = l.call(u))) throw Error(s(151));
                    for (var f = l = null, g = a, m = a = 0, v = null, b = u.next(); null !== g && !b.done; m++, b = u.next()) {
                        g.index > m ? (v = g, g = null) : v = g.sibling;
                        var y = p(o, g, b.value, c);
                        if (null === y) {
                            null === g && (g = v);
                            break
                        }
                        e && g && null === y.alternate && t(o, g), a = i(y, a, m), null === f ? l = y : f.sibling = y, f = y, g = v
                    }
                    if (b.done) return n(o, g), l;
                    if (null === g) {
                        for (; !b.done; m++, b = u.next()) null !== (b = d(o, b.value, c)) && (a = i(b, a, m), null === f ? l = b : f.sibling = b, f = b);
                        return l
                    }
                    for (g = r(o, g); !b.done; m++, b = u.next()) null !== (b = h(g, o, m, b.value, c)) && (e && null !== b.alternate && g.delete(null === b.key ? m : b.key), a = i(b, a, m), null === f ? l = b : f.sibling = b, f = b);
                    return e && g.forEach((function(e) {
                        return t(o, e)
                    })), l
                }
                return function(e, r, i, u) {
                    var c = "object" == typeof i && null !== i && i.type === C && null === i.key;
                    c && (i = i.props.children);
                    var l = "object" == typeof i && null !== i;
                    if (l) switch (i.$$typeof) {
                        case S:
                            e: {
                                for (l = i.key, c = r; null !== c;) {
                                    if (c.key === l) {
                                        switch (c.tag) {
                                            case 7:
                                                if (i.type === C) {
                                                    n(e, c.sibling), (r = o(c, i.props.children)).return = e, e = r;
                                                    break e
                                                }
                                                break;
                                            default:
                                                if (c.elementType === i.type) {
                                                    n(e, c.sibling), (r = o(c, i.props)).ref = Ei(e, c, i), r.return = e, e = r;
                                                    break e
                                                }
                                        }
                                        n(e, c);
                                        break
                                    }
                                    t(e, c), c = c.sibling
                                }
                                i.type === C ? ((r = $u(i.props.children, e.mode, u, i.key)).return = e, e = r) : ((u = Wu(i.type, i.key, i.props, null, e.mode, u)).ref = Ei(e, r, i), u.return = e, e = u)
                            }
                            return a(e);
                        case w:
                            e: {
                                for (c = i.key; null !== r;) {
                                    if (r.key === c) {
                                        if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                            n(e, r.sibling), (r = o(r, i.children || [])).return = e, e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r), r = r.sibling
                                }(r = Yu(i, e.mode, u)).return = e,
                                e = r
                            }
                            return a(e)
                    }
                    if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, i)).return = e, e = r) : (n(e, r), (r = qu(i, e.mode, u)).return = e, e = r), a(e);
                    if (_i(i)) return g(e, r, i, u);
                    if (H(i)) return m(e, r, i, u);
                    if (l && Si(e, i), void 0 === i && !c) switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(s(152, q(e.type) || "Component"))
                    }
                    return n(e, r)
                }
            }
            var Ci = wi(!0),
                Ti = wi(!1),
                Oi = {},
                Ni = so(Oi),
                xi = so(Oi),
                ki = so(Oi);

            function Ii(e) {
                if (e === Oi) throw Error(s(174));
                return e
            }

            function Ai(e, t) {
                switch (uo(ki, t), uo(xi, e), uo(Ni, Oi), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
                        break;
                    default:
                        t = he(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                ao(Ni), uo(Ni, t)
            }

            function Pi() {
                ao(Ni), ao(xi), ao(ki)
            }

            function Ri(e) {
                Ii(ki.current);
                var t = Ii(Ni.current),
                    n = he(t, e.type);
                t !== n && (uo(xi, e), uo(Ni, n))
            }

            function Li(e) {
                xi.current === e && (ao(Ni), ao(xi))
            }
            var Di = so(0);

            function Mi(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (64 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var Ui = null,
                Fi = null,
                ji = !1;

            function Bi(e, t) {
                var n = Gu(5, null, null, 0);
                n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }

            function Gi(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                    case 13:
                    default:
                        return !1
                }
            }

            function Hi(e) {
                if (ji) {
                    var t = Fi;
                    if (t) {
                        var n = t;
                        if (!Gi(e, t)) {
                            if (!(t = $r(n.nextSibling)) || !Gi(e, t)) return e.flags = -1025 & e.flags | 2, ji = !1, void(Ui = e);
                            Bi(Ui, n)
                        }
                        Ui = e, Fi = $r(t.firstChild)
                    } else e.flags = -1025 & e.flags | 2, ji = !1, Ui = e
                }
            }

            function zi(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                Ui = e
            }

            function Wi(e) {
                if (e !== Ui) return !1;
                if (!ji) return zi(e), ji = !0, !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Gr(t, e.memoizedProps))
                    for (t = Fi; t;) Bi(e, t), t = $r(t.nextSibling);
                if (zi(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Fi = $r(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Fi = null
                    }
                } else Fi = Ui ? $r(e.stateNode.nextSibling) : null;
                return !0
            }

            function $i() {
                Fi = Ui = null, ji = !1
            }
            var Vi = [];

            function qi() {
                for (var e = 0; e < Vi.length; e++) Vi[e]._workInProgressVersionPrimary = null;
                Vi.length = 0
            }
            var Yi = E.ReactCurrentDispatcher,
                Ki = E.ReactCurrentBatchConfig,
                Qi = 0,
                Xi = null,
                Ji = null,
                Zi = null,
                es = !1,
                ts = !1;

            function ns() {
                throw Error(s(321))
            }

            function rs(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!ar(e[n], t[n])) return !1;
                return !0
            }

            function os(e, t, n, r, o, i) {
                if (Qi = i, Xi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yi.current = null === e || null === e.memoizedState ? Is : As, e = n(r, o), ts) {
                    i = 0;
                    do {
                        if (ts = !1, !(25 > i)) throw Error(s(301));
                        i += 1, Zi = Ji = null, t.updateQueue = null, Yi.current = Ps, e = n(r, o)
                    } while (ts)
                }
                if (Yi.current = ks, t = null !== Ji && null !== Ji.next, Qi = 0, Zi = Ji = Xi = null, es = !1, t) throw Error(s(300));
                return e
            }

            function is() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === Zi ? Xi.memoizedState = Zi = e : Zi = Zi.next = e, Zi
            }

            function ss() {
                if (null === Ji) {
                    var e = Xi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = Ji.next;
                var t = null === Zi ? Xi.memoizedState : Zi.next;
                if (null !== t) Zi = t, Ji = e;
                else {
                    if (null === e) throw Error(s(310));
                    e = {
                        memoizedState: (Ji = e).memoizedState,
                        baseState: Ji.baseState,
                        baseQueue: Ji.baseQueue,
                        queue: Ji.queue,
                        next: null
                    }, null === Zi ? Xi.memoizedState = Zi = e : Zi = Zi.next = e
                }
                return Zi
            }

            function as(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function us(e) {
                var t = ss(),
                    n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = Ji,
                    o = r.baseQueue,
                    i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var a = o.next;
                        o.next = i.next, i.next = a
                    }
                    r.baseQueue = o = i, n.pending = null
                }
                if (null !== o) {
                    o = o.next, r = r.baseState;
                    var u = a = i = null,
                        c = o;
                    do {
                        var l = c.lane;
                        if ((Qi & l) === l) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            eagerReducer: c.eagerReducer,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                        else {
                            var f = {
                                lane: l,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (a = u = f, i = r) : u = u.next = f, Xi.lanes |= l, Fa |= l
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? i = r : u.next = a, ar(r, t.memoizedState) || (Ls = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }

            function cs(e) {
                var t = ss(),
                    n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    o = n.pending,
                    i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var a = o = o.next;
                    do {
                        i = e(i, a.action), a = a.next
                    } while (a !== o);
                    ar(i, t.memoizedState) || (Ls = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function ls(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var o = t._workInProgressVersionPrimary;
                if (null !== o ? e = o === r : (e = e.mutableReadLanes, (e = (Qi & e) === e) && (t._workInProgressVersionPrimary = r, Vi.push(t))), e) return n(t._source);
                throw Vi.push(t), Error(s(350))
            }

            function fs(e, t, n, r) {
                var o = Ia;
                if (null === o) throw Error(s(349));
                var i = t._getVersion,
                    a = i(t._source),
                    u = Yi.current,
                    c = u.useState((function() {
                        return ls(o, t, n)
                    })),
                    l = c[1],
                    f = c[0];
                c = Zi;
                var d = e.memoizedState,
                    p = d.refs,
                    h = p.getSnapshot,
                    g = d.source;
                d = d.subscribe;
                var m = Xi;
                return e.memoizedState = {
                    refs: p,
                    source: t,
                    subscribe: r
                }, u.useEffect((function() {
                    p.getSnapshot = n, p.setSnapshot = l;
                    var e = i(t._source);
                    if (!ar(a, e)) {
                        e = n(t._source), ar(f, e) || (l(e), e = lu(m), o.mutableReadLanes |= e & o.pendingLanes), e = o.mutableReadLanes, o.entangledLanes |= e;
                        for (var r = o.entanglements, s = e; 0 < s;) {
                            var u = 31 - Wt(s),
                                c = 1 << u;
                            r[u] |= e, s &= ~c
                        }
                    }
                }), [n, t, r]), u.useEffect((function() {
                    return r(t._source, (function() {
                        var e = p.getSnapshot,
                            n = p.setSnapshot;
                        try {
                            n(e(t._source));
                            var r = lu(m);
                            o.mutableReadLanes |= r & o.pendingLanes
                        } catch (e) {
                            n((function() {
                                throw e
                            }))
                        }
                    }))
                }), [t, r]), ar(h, n) && ar(g, t) && ar(d, r) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: as,
                    lastRenderedState: f
                }).dispatch = l = xs.bind(null, Xi, e), c.queue = e, c.baseQueue = null, f = ls(o, t, n), c.memoizedState = c.baseState = f), f
            }

            function ds(e, t, n) {
                return fs(ss(), e, t, n)
            }

            function ps(e) {
                var t = is();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: as,
                    lastRenderedState: e
                }).dispatch = xs.bind(null, Xi, e), [t.memoizedState, e]
            }

            function hs(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = Xi.updateQueue) ? (t = {
                    lastEffect: null
                }, Xi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function gs(e) {
                return e = {
                    current: e
                }, is().memoizedState = e
            }

            function ms() {
                return ss().memoizedState
            }

            function vs(e, t, n, r) {
                var o = is();
                Xi.flags |= e, o.memoizedState = hs(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function bs(e, t, n, r) {
                var o = ss();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== Ji) {
                    var s = Ji.memoizedState;
                    if (i = s.destroy, null !== r && rs(r, s.deps)) return void hs(t, n, i, r)
                }
                Xi.flags |= e, o.memoizedState = hs(1 | t, n, i, r)
            }

            function ys(e, t) {
                return vs(516, 4, e, t)
            }

            function _s(e, t) {
                return bs(516, 4, e, t)
            }

            function Es(e, t) {
                return bs(4, 2, e, t)
            }

            function Ss(e, t) {
                return "function" == typeof t ? (e = e(), t(e), function() {
                    t(null)
                }) : null != t ? (e = e(), t.current = e, function() {
                    t.current = null
                }) : void 0
            }

            function ws(e, t, n) {
                return n = null != n ? n.concat([e]) : null, bs(4, 2, Ss.bind(null, t, e), n)
            }

            function Cs() {}

            function Ts(e, t) {
                var n = ss();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && rs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Os(e, t) {
                var n = ss();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && rs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Ns(e, t) {
                var n = Ho();
                Wo(98 > n ? 98 : n, (function() {
                    e(!0)
                })), Wo(97 < n ? 97 : n, (function() {
                    var n = Ki.transition;
                    Ki.transition = 1;
                    try {
                        e(!1), t()
                    } finally {
                        Ki.transition = n
                    }
                }))
            }

            function xs(e, t, n) {
                var r = cu(),
                    o = lu(e),
                    i = {
                        lane: o,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null
                    },
                    s = t.pending;
                if (null === s ? i.next = i : (i.next = s.next, s.next = i), t.pending = i, s = e.alternate, e === Xi || null !== s && s === Xi) ts = es = !0;
                else {
                    if (0 === e.lanes && (null === s || 0 === s.lanes) && null !== (s = t.lastRenderedReducer)) try {
                        var a = t.lastRenderedState,
                            u = s(a, n);
                        if (i.eagerReducer = s, i.eagerState = u, ar(u, a)) return
                    } catch (e) {}
                    fu(e, o, r)
                }
            }
            var ks = {
                    readContext: oi,
                    useCallback: ns,
                    useContext: ns,
                    useEffect: ns,
                    useImperativeHandle: ns,
                    useLayoutEffect: ns,
                    useMemo: ns,
                    useReducer: ns,
                    useRef: ns,
                    useState: ns,
                    useDebugValue: ns,
                    useDeferredValue: ns,
                    useTransition: ns,
                    useMutableSource: ns,
                    useOpaqueIdentifier: ns,
                    unstable_isNewReconciler: !1
                },
                Is = {
                    readContext: oi,
                    useCallback: function(e, t) {
                        return is().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: oi,
                    useEffect: ys,
                    useImperativeHandle: function(e, t, n) {
                        return n = null != n ? n.concat([e]) : null, vs(4, 2, Ss.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return vs(4, 2, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = is();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function(e, t, n) {
                        var r = is();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                            pending: null,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }).dispatch = xs.bind(null, Xi, e), [r.memoizedState, e]
                    },
                    useRef: gs,
                    useState: ps,
                    useDebugValue: Cs,
                    useDeferredValue: function(e) {
                        var t = ps(e),
                            n = t[0],
                            r = t[1];
                        return ys((function() {
                            var t = Ki.transition;
                            Ki.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Ki.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function() {
                        var e = ps(!1),
                            t = e[0];
                        return gs(e = Ns.bind(null, e[1])), [e, t]
                    },
                    useMutableSource: function(e, t, n) {
                        var r = is();
                        return r.memoizedState = {
                            refs: {
                                getSnapshot: t,
                                setSnapshot: null
                            },
                            source: e,
                            subscribe: n
                        }, fs(r, e, t, n)
                    },
                    useOpaqueIdentifier: function() {
                        if (ji) {
                            var e = !1,
                                t = function(e) {
                                    return {
                                        $$typeof: D,
                                        toString: e,
                                        valueOf: e
                                    }
                                }((function() {
                                    throw e || (e = !0, n("r:" + (qr++).toString(36))), Error(s(355))
                                })),
                                n = ps(t)[1];
                            return 0 == (2 & Xi.mode) && (Xi.flags |= 516, hs(5, (function() {
                                n("r:" + (qr++).toString(36))
                            }), void 0, null)), t
                        }
                        return ps(t = "r:" + (qr++).toString(36)), t
                    },
                    unstable_isNewReconciler: !1
                },
                As = {
                    readContext: oi,
                    useCallback: Ts,
                    useContext: oi,
                    useEffect: _s,
                    useImperativeHandle: ws,
                    useLayoutEffect: Es,
                    useMemo: Os,
                    useReducer: us,
                    useRef: ms,
                    useState: function() {
                        return us(as)
                    },
                    useDebugValue: Cs,
                    useDeferredValue: function(e) {
                        var t = us(as),
                            n = t[0],
                            r = t[1];
                        return _s((function() {
                            var t = Ki.transition;
                            Ki.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Ki.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function() {
                        var e = us(as)[0];
                        return [ms().current, e]
                    },
                    useMutableSource: ds,
                    useOpaqueIdentifier: function() {
                        return us(as)[0]
                    },
                    unstable_isNewReconciler: !1
                },
                Ps = {
                    readContext: oi,
                    useCallback: Ts,
                    useContext: oi,
                    useEffect: _s,
                    useImperativeHandle: ws,
                    useLayoutEffect: Es,
                    useMemo: Os,
                    useReducer: cs,
                    useRef: ms,
                    useState: function() {
                        return cs(as)
                    },
                    useDebugValue: Cs,
                    useDeferredValue: function(e) {
                        var t = cs(as),
                            n = t[0],
                            r = t[1];
                        return _s((function() {
                            var t = Ki.transition;
                            Ki.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Ki.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function() {
                        var e = cs(as)[0];
                        return [ms().current, e]
                    },
                    useMutableSource: ds,
                    useOpaqueIdentifier: function() {
                        return cs(as)[0]
                    },
                    unstable_isNewReconciler: !1
                },
                Rs = E.ReactCurrentOwner,
                Ls = !1;

            function Ds(e, t, n, r) {
                t.child = null === e ? Ti(t, null, n, r) : Ci(t, e.child, n, r)
            }

            function Ms(e, t, n, r, o) {
                n = n.render;
                var i = t.ref;
                return ri(t, o), r = os(e, t, n, r, i, o), null === e || Ls ? (t.flags |= 1, Ds(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, na(e, t, o))
            }

            function Us(e, t, n, r, o, i) {
                if (null === e) {
                    var s = n.type;
                    return "function" != typeof s || Hu(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Wu(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Fs(e, t, s, r, o, i))
                }
                return s = e.child, 0 == (o & i) && (o = s.memoizedProps, (n = null !== (n = n.compare) ? n : cr)(o, r) && e.ref === t.ref) ? na(e, t, i) : (t.flags |= 1, (e = zu(s, r)).ref = t.ref, e.return = t, t.child = e)
            }

            function Fs(e, t, n, r, o, i) {
                if (null !== e && cr(e.memoizedProps, r) && e.ref === t.ref) {
                    if (Ls = !1, 0 == (i & o)) return t.lanes = e.lanes, na(e, t, i);
                    0 != (16384 & e.flags) && (Ls = !0)
                }
                return Gs(e, t, n, r, i)
            }

            function js(e, t, n) {
                var r = t.pendingProps,
                    o = r.children,
                    i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                    if (0 == (4 & t.mode)) t.memoizedState = {
                        baseLanes: 0
                    }, yu(t, n);
                    else {
                        if (0 == (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                            baseLanes: e
                        }, yu(t, e), null;
                        t.memoizedState = {
                            baseLanes: 0
                        }, yu(t, null !== i ? i.baseLanes : n)
                    }
                else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, yu(t, r);
                return Ds(e, t, o, n), t.child
            }

            function Bs(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
            }

            function Gs(e, t, n, r, o) {
                var i = go(n) ? po : lo.current;
                return i = ho(t, i), ri(t, o), n = os(e, t, n, r, i, o), null === e || Ls ? (t.flags |= 1, Ds(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, na(e, t, o))
            }

            function Hs(e, t, n, r, o) {
                if (go(n)) {
                    var i = !0;
                    yo(t)
                } else i = !1;
                if (ri(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), vi(t, n, r), yi(t, n, r, o), r = !0;
                else if (null === e) {
                    var s = t.stateNode,
                        a = t.memoizedProps;
                    s.props = a;
                    var u = s.context,
                        c = n.contextType;
                    "object" == typeof c && null !== c ? c = oi(c) : c = ho(t, c = go(n) ? po : lo.current);
                    var l = n.getDerivedStateFromProps,
                        f = "function" == typeof l || "function" == typeof s.getSnapshotBeforeUpdate;
                    f || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== r || u !== c) && bi(t, s, r, c), ii = !1;
                    var d = t.memoizedState;
                    s.state = d, fi(t, r, s, o), u = t.memoizedState, a !== r || d !== u || fo.current || ii ? ("function" == typeof l && (hi(t, n, l, r), u = t.memoizedState), (a = ii || mi(t, n, a, r, d, u, c)) ? (f || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.flags |= 4)) : ("function" == typeof s.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = a) : ("function" == typeof s.componentDidMount && (t.flags |= 4), r = !1)
                } else {
                    s = t.stateNode, ai(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ko(t.type, a), s.props = c, f = t.pendingProps, d = s.context, "object" == typeof(u = n.contextType) && null !== u ? u = oi(u) : u = ho(t, u = go(n) ? po : lo.current);
                    var p = n.getDerivedStateFromProps;
                    (l = "function" == typeof p || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== f || d !== u) && bi(t, s, r, u), ii = !1, d = t.memoizedState, s.state = d, fi(t, r, s, o);
                    var h = t.memoizedState;
                    a !== f || d !== h || fo.current || ii ? ("function" == typeof p && (hi(t, n, p, r), h = t.memoizedState), (c = ii || mi(t, n, c, r, d, h, u)) ? (l || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(r, h, u), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof s.componentDidUpdate && (t.flags |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = u, r = c) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1)
                }
                return zs(e, t, n, r, i, o)
            }

            function zs(e, t, n, r, o, i) {
                Bs(e, t);
                var s = 0 != (64 & t.flags);
                if (!r && !s) return o && _o(t, n, !1), na(e, t, i);
                r = t.stateNode, Rs.current = t;
                var a = s && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && s ? (t.child = Ci(t, e.child, null, i), t.child = Ci(t, null, a, i)) : Ds(e, t, a, i), t.memoizedState = r.state, o && _o(t, n, !0), t.child
            }

            function Ws(e) {
                var t = e.stateNode;
                t.pendingContext ? vo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vo(0, t.context, !1), Ai(e, t.containerInfo)
            }
            var $s, Vs, qs, Ys = {
                dehydrated: null,
                retryLane: 0
            };

            function Ks(e, t, n) {
                var r, o = t.pendingProps,
                    i = Di.current,
                    s = !1;
                return (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (s = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), uo(Di, 1 & i), null === e ? (void 0 !== o.fallback && Hi(t), e = o.children, i = o.fallback, s ? (e = Qs(t, e, i, n), t.child.memoizedState = {
                    baseLanes: n
                }, t.memoizedState = Ys, e) : "number" == typeof o.unstable_expectedLoadTime ? (e = Qs(t, e, i, n), t.child.memoizedState = {
                    baseLanes: n
                }, t.memoizedState = Ys, t.lanes = 33554432, e) : ((n = Vu({
                    mode: "visible",
                    children: e
                }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, s ? (o = Js(e, t, o.children, o.fallback, n), s = t.child, i = e.child.memoizedState, s.memoizedState = null === i ? {
                    baseLanes: n
                } : {
                    baseLanes: i.baseLanes | n
                }, s.childLanes = e.childLanes & ~n, t.memoizedState = Ys, o) : (n = Xs(e, t, o.children, n), t.memoizedState = null, n))
            }

            function Qs(e, t, n, r) {
                var o = e.mode,
                    i = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                }, 0 == (2 & o) && null !== i ? (i.childLanes = 0, i.pendingProps = t) : i = Vu(t, o, 0, null), n = $u(n, o, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n
            }

            function Xs(e, t, n, r) {
                var o = e.child;
                return e = o.sibling, n = zu(o, {
                    mode: "visible",
                    children: n
                }), 0 == (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
            }

            function Js(e, t, n, r, o) {
                var i = t.mode,
                    s = e.child;
                e = s.sibling;
                var a = {
                    mode: "hidden",
                    children: n
                };
                return 0 == (2 & i) && t.child !== s ? ((n = t.child).childLanes = 0, n.pendingProps = a, null !== (s = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = s, s.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = zu(s, a), null !== e ? r = zu(e, r) : (r = $u(r, i, o, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
            }

            function Zs(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), ni(e.return, t)
            }

            function ea(e, t, n, r, o, i) {
                var s = e.memoizedState;
                null === s ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o,
                    lastEffect: i
                } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o, s.lastEffect = i)
            }

            function ta(e, t, n) {
                var r = t.pendingProps,
                    o = r.revealOrder,
                    i = r.tail;
                if (Ds(e, t, r.children, n), 0 != (2 & (r = Di.current))) r = 1 & r | 2, t.flags |= 64;
                else {
                    if (null !== e && 0 != (64 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Zs(e, n);
                        else if (19 === e.tag) Zs(e, n);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (uo(Di, r), 0 == (2 & t.mode)) t.memoizedState = null;
                else switch (o) {
                    case "forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Mi(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ea(t, !1, o, n, i, t.lastEffect);
                        break;
                    case "backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === Mi(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        ea(t, !0, n, null, i, t.lastEffect);
                        break;
                    case "together":
                        ea(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function na(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Fa |= t.lanes, 0 != (n & t.childLanes)) {
                    if (null !== e && t.child !== e.child) throw Error(s(153));
                    if (null !== t.child) {
                        for (n = zu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = zu(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                return null
            }

            function ra(e, t) {
                if (!ji) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function oa(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                        return go(t.type) && mo(), null;
                    case 3:
                        return Pi(), ao(fo), ao(lo), qi(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Wi(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                    case 5:
                        Li(t);
                        var i = Ii(ki.current);
                        if (n = t.type, null !== e && null != t.stateNode) Vs(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(s(166));
                                return null
                            }
                            if (e = Ii(Ni.current), Wi(t)) {
                                r = t.stateNode, n = t.type;
                                var a = t.memoizedProps;
                                switch (r[Kr] = t, r[Qr] = a, n) {
                                    case "dialog":
                                        Nr("cancel", r), Nr("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Nr("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < wr.length; e++) Nr(wr[e], r);
                                        break;
                                    case "source":
                                        Nr("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Nr("error", r), Nr("load", r);
                                        break;
                                    case "details":
                                        Nr("toggle", r);
                                        break;
                                    case "input":
                                        ee(r, a), Nr("invalid", r);
                                        break;
                                    case "select":
                                        r._wrapperState = {
                                            wasMultiple: !!a.multiple
                                        }, Nr("invalid", r);
                                        break;
                                    case "textarea":
                                        ue(r, a), Nr("invalid", r)
                                }
                                for (var c in Ce(n, a), e = null, a) a.hasOwnProperty(c) && (i = a[c], "children" === c ? "string" == typeof i ? r.textContent !== i && (e = ["children", i]) : "number" == typeof i && r.textContent !== "" + i && (e = ["children", "" + i]) : u.hasOwnProperty(c) && null != i && "onScroll" === c && Nr("scroll", r));
                                switch (n) {
                                    case "input":
                                        Q(r), re(r, a, !0);
                                        break;
                                    case "textarea":
                                        Q(r), le(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" == typeof a.onClick && (r.onclick = Ur)
                                }
                                r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                switch (c = 9 === i.nodeType ? i : i.ownerDocument, e === fe && (e = pe(n)), e === fe ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = c.createElement(n, {
                                        is: r.is
                                    }) : (e = c.createElement(n), "select" === n && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Kr] = t, e[Qr] = r, $s(e, t), t.stateNode = e, c = Te(n, r), n) {
                                    case "dialog":
                                        Nr("cancel", e), Nr("close", e), i = r;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Nr("load", e), i = r;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (i = 0; i < wr.length; i++) Nr(wr[i], e);
                                        i = r;
                                        break;
                                    case "source":
                                        Nr("error", e), i = r;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Nr("error", e), Nr("load", e), i = r;
                                        break;
                                    case "details":
                                        Nr("toggle", e), i = r;
                                        break;
                                    case "input":
                                        ee(e, r), i = Z(e, r), Nr("invalid", e);
                                        break;
                                    case "option":
                                        i = ie(e, r);
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!r.multiple
                                        }, i = o({}, r, {
                                            value: void 0
                                        }), Nr("invalid", e);
                                        break;
                                    case "textarea":
                                        ue(e, r), i = ae(e, r), Nr("invalid", e);
                                        break;
                                    default:
                                        i = r
                                }
                                Ce(n, i);
                                var l = i;
                                for (a in l)
                                    if (l.hasOwnProperty(a)) {
                                        var f = l[a];
                                        "style" === a ? Se(e, f) : "dangerouslySetInnerHTML" === a ? null != (f = f ? f.__html : void 0) && ve(e, f) : "children" === a ? "string" == typeof f ? ("textarea" !== n || "" !== f) && be(e, f) : "number" == typeof f && be(e, "" + f) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (u.hasOwnProperty(a) ? null != f && "onScroll" === a && Nr("scroll", e) : null != f && _(e, a, f, c))
                                    } switch (n) {
                                    case "input":
                                        Q(e), re(e, r, !1);
                                        break;
                                    case "textarea":
                                        Q(e), le(e);
                                        break;
                                    case "option":
                                        null != r.value && e.setAttribute("value", "" + Y(r.value));
                                        break;
                                    case "select":
                                        e.multiple = !!r.multiple, null != (a = r.value) ? se(e, !!r.multiple, a, !1) : null != r.defaultValue && se(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" == typeof i.onClick && (e.onclick = Ur)
                                }
                                Br(n, r) && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 128)
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) qs(0, t, e.memoizedProps, r);
                        else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(s(166));
                            n = Ii(ki.current), Ii(Ni.current), Wi(t) ? (r = t.stateNode, n = t.memoizedProps, r[Kr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Kr] = t, t.stateNode = r)
                        }
                        return null;
                    case 13:
                        return ao(Di), r = t.memoizedState, 0 != (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Wi(t) : n = null !== e.memoizedState, r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Di.current) ? 0 === Da && (Da = 3) : (0 !== Da && 3 !== Da || (Da = 4), null === Ia || 0 == (134217727 & Fa) && 0 == (134217727 & ja) || gu(Ia, Pa))), (r || n) && (t.flags |= 4), null);
                    case 4:
                        return Pi(), null === e && kr(t.stateNode.containerInfo), null;
                    case 10:
                        return ti(t), null;
                    case 17:
                        return go(t.type) && mo(), null;
                    case 19:
                        if (ao(Di), null === (r = t.memoizedState)) return null;
                        if (a = 0 != (64 & t.flags), null === (c = r.rendering))
                            if (a) ra(r, !1);
                            else {
                                if (0 !== Da || null !== e && 0 != (64 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (c = Mi(e))) {
                                            for (t.flags |= 64, ra(r, !1), null !== (a = c.updateQueue) && (t.updateQueue = a, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (c = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, e = c.dependencies, a.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }), n = n.sibling;
                                            return uo(Di, 1 & Di.current | 2), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== r.tail && Go() > za && (t.flags |= 64, a = !0, ra(r, !1), t.lanes = 33554432)
                            }
                        else {
                            if (!a)
                                if (null !== (e = Mi(c))) {
                                    if (t.flags |= 64, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), ra(r, !0), null === r.tail && "hidden" === r.tailMode && !c.alternate && !ji) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                                } else 2 * Go() - r.renderingStartTime > za && 1073741824 !== n && (t.flags |= 64, a = !0, ra(r, !1), t.lanes = 33554432);
                            r.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (n = r.last) ? n.sibling = c : t.child = c, r.last = c)
                        }
                        return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Go(), n.sibling = null, t = Di.current, uo(Di, a ? 1 & t | 2 : 1 & t), n) : null;
                    case 23:
                    case 24:
                        return _u(), null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                }
                throw Error(s(156, t.tag))
            }

            function ia(e) {
                switch (e.tag) {
                    case 1:
                        go(e.type) && mo();
                        var t = e.flags;
                        return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                    case 3:
                        if (Pi(), ao(fo), ao(lo), qi(), 0 != (64 & (t = e.flags))) throw Error(s(285));
                        return e.flags = -4097 & t | 64, e;
                    case 5:
                        return Li(e), null;
                    case 13:
                        return ao(Di), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                    case 19:
                        return ao(Di), null;
                    case 4:
                        return Pi(), null;
                    case 10:
                        return ti(e), null;
                    case 23:
                    case 24:
                        return _u(), null;
                    default:
                        return null
                }
            }

            function sa(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        n += V(r), r = r.return
                    } while (r);
                    var o = n
                } catch (e) {
                    o = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: o
                }
            }

            function aa(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function() {
                        throw e
                    }))
                }
            }
            $s = function(e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Vs = function(e, t, n, r) {
                var i = e.memoizedProps;
                if (i !== r) {
                    e = t.stateNode, Ii(Ni.current);
                    var s, a = null;
                    switch (n) {
                        case "input":
                            i = Z(e, i), r = Z(e, r), a = [];
                            break;
                        case "option":
                            i = ie(e, i), r = ie(e, r), a = [];
                            break;
                        case "select":
                            i = o({}, i, {
                                value: void 0
                            }), r = o({}, r, {
                                value: void 0
                            }), a = [];
                            break;
                        case "textarea":
                            i = ae(e, i), r = ae(e, r), a = [];
                            break;
                        default:
                            "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Ur)
                    }
                    for (f in Ce(n, r), n = null, i)
                        if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                            if ("style" === f) {
                                var c = i[f];
                                for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                            } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (u.hasOwnProperty(f) ? a || (a = []) : (a = a || []).push(f, null));
                    for (f in r) {
                        var l = r[f];
                        if (c = null != i ? i[f] : void 0, r.hasOwnProperty(f) && l !== c && (null != l || null != c))
                            if ("style" === f)
                                if (c) {
                                    for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                                    for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                                } else n || (a || (a = []), a.push(f, n)), n = l;
                        else "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (a = a || []).push(f, l)) : "children" === f ? "string" != typeof l && "number" != typeof l || (a = a || []).push(f, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (u.hasOwnProperty(f) ? (null != l && "onScroll" === f && Nr("scroll", e), a || c === l || (a = [])) : "object" == typeof l && null !== l && l.$$typeof === D ? l.toString() : (a = a || []).push(f, l))
                    }
                    n && (a = a || []).push("style", n);
                    var f = a;
                    (t.updateQueue = f) && (t.flags |= 4)
                }
            }, qs = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var ua = "function" == typeof WeakMap ? WeakMap : Map;

            function ca(e, t, n) {
                (n = ui(-1, n)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    qa || (qa = !0, Ya = r), aa(0, t)
                }, n
            }

            function la(e, t, n) {
                (n = ui(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function() {
                        return aa(0, t), r(o)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
                    "function" != typeof r && (null === Ka ? Ka = new Set([this]) : Ka.add(this), aa(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }), n
            }
            var fa = "function" == typeof WeakSet ? WeakSet : Set;

            function da(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t) try {
                        t(null)
                    } catch (t) {
                        Uu(e, t)
                    } else t.current = null
            }

            function pa(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.flags && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ko(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        return;
                    case 3:
                        return void(256 & t.flags && Wr(t.stateNode.containerInfo));
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return
                }
                throw Error(s(163))
            }

            function ha(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                if (3 == (3 & e.tag)) {
                                    var r = e.create;
                                    e.destroy = r()
                                }
                                e = e.next
                            } while (e !== t)
                        }
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                var o = e;
                                r = o.next, 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Lu(n, e), Ru(n, e)), e = r
                            } while (e !== t)
                        }
                        return;
                    case 1:
                        return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ko(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && di(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (e = null, null !== n.child) switch (n.child.tag) {
                                case 5:
                                    e = n.child.stateNode;
                                    break;
                                case 1:
                                    e = n.child.stateNode
                            }
                            di(n, t, e)
                        }
                        return;
                    case 5:
                        return e = n.stateNode, void(null === t && 4 & n.flags && Br(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && St(n)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return
                }
                throw Error(s(163))
            }

            function ga(e, t) {
                for (var n = e;;) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t) "function" == typeof(r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                        else {
                            r = n.stateNode;
                            var o = n.memoizedProps.style;
                            o = null != o && o.hasOwnProperty("display") ? o.display : null, r.style.display = Ee("display", o)
                        }
                    } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }

            function ma(e, t) {
                if (So && "function" == typeof So.onCommitFiberUnmount) try {
                    So.onCommitFiberUnmount(Eo, t)
                } catch (e) {}
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var n = e = e.next;
                            do {
                                var r = n,
                                    o = r.destroy;
                                if (r = r.tag, void 0 !== o)
                                    if (0 != (4 & r)) Lu(t, n);
                                    else {
                                        r = t;
                                        try {
                                            o()
                                        } catch (e) {
                                            Uu(r, e)
                                        }
                                    } n = n.next
                            } while (n !== e)
                        }
                        break;
                    case 1:
                        if (da(t), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
                            e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                        } catch (e) {
                            Uu(t, e)
                        }
                        break;
                    case 5:
                        da(t);
                        break;
                    case 4:
                        Sa(e, t)
                }
            }

            function va(e) {
                e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
            }

            function ba(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ya(e) {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (ba(t)) break e;
                        t = t.return
                    }
                    throw Error(s(160))
                }
                var n = t;
                switch (t = n.stateNode, n.tag) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        t = t.containerInfo, r = !0;
                        break;
                    default:
                        throw Error(s(161))
                }
                16 & n.flags && (be(t, ""), n.flags &= -17);e: t: for (n = e;;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || ba(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                        if (2 & n.flags) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? _a(e, n, t) : Ea(e, n, t)
            }

            function _a(e, t, n) {
                var r = e.tag,
                    o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ur));
                else if (4 !== r && null !== (e = e.child))
                    for (_a(e, t, n), e = e.sibling; null !== e;) _a(e, t, n), e = e.sibling
            }

            function Ea(e, t, n) {
                var r = e.tag,
                    o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (Ea(e, t, n), e = e.sibling; null !== e;) Ea(e, t, n), e = e.sibling
            }

            function Sa(e, t) {
                for (var n, r, o = t, i = !1;;) {
                    if (!i) {
                        i = o.return;
                        e: for (;;) {
                            if (null === i) throw Error(s(160));
                            switch (n = i.stateNode, i.tag) {
                                case 5:
                                    r = !1;
                                    break e;
                                case 3:
                                case 4:
                                    n = n.containerInfo, r = !0;
                                    break e
                            }
                            i = i.return
                        }
                        i = !0
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var a = e, u = o, c = u;;)
                            if (ma(a, c), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child;
                            else {
                                if (c === u) break e;
                                for (; null === c.sibling;) {
                                    if (null === c.return || c.return === u) break e;
                                    c = c.return
                                }
                                c.sibling.return = c.return, c = c.sibling
                            }r ? (a = n, u = o.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(u) : a.removeChild(u)) : n.removeChild(o.stateNode)
                    }
                    else if (4 === o.tag) {
                        if (null !== o.child) {
                            n = o.stateNode.containerInfo, r = !0, o.child.return = o, o = o.child;
                            continue
                        }
                    } else if (ma(e, o), null !== o.child) {
                        o.child.return = o, o = o.child;
                        continue
                    }
                    if (o === t) break;
                    for (; null === o.sibling;) {
                        if (null === o.return || o.return === t) return;
                        4 === (o = o.return).tag && (i = !1)
                    }
                    o.sibling.return = o.return, o = o.sibling
                }
            }

            function wa(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var n = t.updateQueue;
                        if (null !== (n = null !== n ? n.lastEffect : null)) {
                            var r = n = n.next;
                            do {
                                3 == (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                            } while (r !== n)
                        }
                        return;
                    case 1:
                        return;
                    case 5:
                        if (null != (n = t.stateNode)) {
                            r = t.memoizedProps;
                            var o = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var i = t.updateQueue;
                            if (t.updateQueue = null, null !== i) {
                                for (n[Qr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Te(e, o), t = Te(e, r), o = 0; o < i.length; o += 2) {
                                    var a = i[o],
                                        u = i[o + 1];
                                    "style" === a ? Se(n, u) : "dangerouslySetInnerHTML" === a ? ve(n, u) : "children" === a ? be(n, u) : _(n, a, u, t)
                                }
                                switch (e) {
                                    case "input":
                                        ne(n, r);
                                        break;
                                    case "textarea":
                                        ce(n, r);
                                        break;
                                    case "select":
                                        e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (i = r.value) ? se(n, !!r.multiple, i, !1) : e !== !!r.multiple && (null != r.defaultValue ? se(n, !!r.multiple, r.defaultValue, !0) : se(n, !!r.multiple, r.multiple ? [] : "", !1))
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(s(162));
                        return void(t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void((n = t.stateNode).hydrate && (n.hydrate = !1, St(n.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        return null !== t.memoizedState && (Ha = Go(), ga(t.child, !0)), void Ca(t);
                    case 19:
                        return void Ca(t);
                    case 17:
                        return;
                    case 23:
                    case 24:
                        return void ga(t, null !== t.memoizedState)
                }
                throw Error(s(163))
            }

            function Ca(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new fa), t.forEach((function(t) {
                        var r = ju.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function Ta(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
            }
            var Oa = Math.ceil,
                Na = E.ReactCurrentDispatcher,
                xa = E.ReactCurrentOwner,
                ka = 0,
                Ia = null,
                Aa = null,
                Pa = 0,
                Ra = 0,
                La = so(0),
                Da = 0,
                Ma = null,
                Ua = 0,
                Fa = 0,
                ja = 0,
                Ba = 0,
                Ga = null,
                Ha = 0,
                za = 1 / 0;

            function Wa() {
                za = Go() + 500
            }
            var $a, Va = null,
                qa = !1,
                Ya = null,
                Ka = null,
                Qa = !1,
                Xa = null,
                Ja = 90,
                Za = [],
                eu = [],
                tu = null,
                nu = 0,
                ru = null,
                ou = -1,
                iu = 0,
                su = 0,
                au = null,
                uu = !1;

            function cu() {
                return 0 != (48 & ka) ? Go() : -1 !== ou ? ou : ou = Go()
            }

            function lu(e) {
                if (0 == (2 & (e = e.mode))) return 1;
                if (0 == (4 & e)) return 99 === Ho() ? 1 : 2;
                if (0 === iu && (iu = Ua), 0 !== Yo.transition) {
                    0 !== su && (su = null !== Ga ? Ga.pendingLanes : 0), e = iu;
                    var t = 4186112 & ~su;
                    return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                }
                return e = Ho(), 0 != (4 & ka) && 98 === e ? e = Bt(12, iu) : e = Bt(e = function(e) {
                    switch (e) {
                        case 99:
                            return 15;
                        case 98:
                            return 10;
                        case 97:
                        case 96:
                            return 8;
                        case 95:
                            return 2;
                        default:
                            return 0
                    }
                }(e), iu), e
            }

            function fu(e, t, n) {
                if (50 < nu) throw nu = 0, ru = null, Error(s(185));
                if (null === (e = du(e, t))) return null;
                zt(e, t, n), e === Ia && (ja |= t, 4 === Da && gu(e, Pa));
                var r = Ho();
                1 === t ? 0 != (8 & ka) && 0 == (48 & ka) ? mu(e) : (pu(e, n), 0 === ka && (Wa(), Vo())) : (0 == (4 & ka) || 98 !== r && 99 !== r || (null === tu ? tu = new Set([e]) : tu.add(e)), pu(e, n)), Ga = e
            }

            function du(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            function pu(e, t) {
                for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                    var u = 31 - Wt(a),
                        c = 1 << u,
                        l = i[u];
                    if (-1 === l) {
                        if (0 == (c & r) || 0 != (c & o)) {
                            l = t, Ut(c);
                            var f = Mt;
                            i[u] = 10 <= f ? l + 250 : 6 <= f ? l + 5e3 : -1
                        }
                    } else l <= t && (e.expiredLanes |= c);
                    a &= ~c
                }
                if (r = Ft(e, e === Ia ? Pa : 0), t = Mt, 0 === r) null !== n && (n !== Do && To(n), e.callbackNode = null, e.callbackPriority = 0);
                else {
                    if (null !== n) {
                        if (e.callbackPriority === t) return;
                        n !== Do && To(n)
                    }
                    15 === t ? (n = mu.bind(null, e), null === Uo ? (Uo = [n], Fo = Co(Io, qo)) : Uo.push(n), n = Do) : 14 === t ? n = $o(99, mu.bind(null, e)) : n = $o(n = function(e) {
                        switch (e) {
                            case 15:
                            case 14:
                                return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                                return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                                return 97;
                            case 3:
                            case 2:
                            case 1:
                                return 95;
                            case 0:
                                return 90;
                            default:
                                throw Error(s(358, e))
                        }
                    }(t), hu.bind(null, e)), e.callbackPriority = t, e.callbackNode = n
                }
            }

            function hu(e) {
                if (ou = -1, su = iu = 0, 0 != (48 & ka)) throw Error(s(327));
                var t = e.callbackNode;
                if (Pu() && e.callbackNode !== t) return null;
                var n = Ft(e, e === Ia ? Pa : 0);
                if (0 === n) return null;
                var r = n,
                    o = ka;
                ka |= 16;
                var i = wu();
                for (Ia === e && Pa === r || (Wa(), Eu(e, r));;) try {
                    Ou();
                    break
                } catch (t) {
                    Su(e, t)
                }
                if (ei(), Na.current = i, ka = o, null !== Aa ? r = 0 : (Ia = null, Pa = 0, r = Da), 0 != (Ua & ja)) Eu(e, 0);
                else if (0 !== r) {
                    if (2 === r && (ka |= 64, e.hydrate && (e.hydrate = !1, Wr(e.containerInfo)), 0 !== (n = jt(e)) && (r = Cu(e, n))), 1 === r) throw t = Ma, Eu(e, 0), gu(e, n), pu(e, Go()), t;
                    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 2:
                            ku(e);
                            break;
                        case 3:
                            if (gu(e, n), (62914560 & n) === n && 10 < (r = Ha + 500 - Go())) {
                                if (0 !== Ft(e, 0)) break;
                                if (((o = e.suspendedLanes) & n) !== n) {
                                    cu(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Hr(ku.bind(null, e), r);
                                break
                            }
                            ku(e);
                            break;
                        case 4:
                            if (gu(e, n), (4186112 & n) === n) break;
                            for (r = e.eventTimes, o = -1; 0 < n;) {
                                var a = 31 - Wt(n);
                                i = 1 << a, (a = r[a]) > o && (o = a), n &= ~i
                            }
                            if (n = o, 10 < (n = (120 > (n = Go() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Oa(n / 1960)) - n)) {
                                e.timeoutHandle = Hr(ku.bind(null, e), n);
                                break
                            }
                            ku(e);
                            break;
                        case 5:
                            ku(e);
                            break;
                        default:
                            throw Error(s(329))
                    }
                }
                return pu(e, Go()), e.callbackNode === t ? hu.bind(null, e) : null
            }

            function gu(e, t) {
                for (t &= ~Ba, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - Wt(t),
                        r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function mu(e) {
                if (0 != (48 & ka)) throw Error(s(327));
                if (Pu(), e === Ia && 0 != (e.expiredLanes & Pa)) {
                    var t = Pa,
                        n = Cu(e, t);
                    0 != (Ua & ja) && (n = Cu(e, t = Ft(e, t)))
                } else n = Cu(e, t = Ft(e, 0));
                if (0 !== e.tag && 2 === n && (ka |= 64, e.hydrate && (e.hydrate = !1, Wr(e.containerInfo)), 0 !== (t = jt(e)) && (n = Cu(e, t))), 1 === n) throw n = Ma, Eu(e, 0), gu(e, t), pu(e, Go()), n;
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, ku(e), pu(e, Go()), null
            }

            function vu(e, t) {
                var n = ka;
                ka |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (ka = n) && (Wa(), Vo())
                }
            }

            function bu(e, t) {
                var n = ka;
                ka &= -2, ka |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (ka = n) && (Wa(), Vo())
                }
            }

            function yu(e, t) {
                uo(La, Ra), Ra |= t, Ua |= t
            }

            function _u() {
                Ra = La.current, ao(La)
            }

            function Eu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, zr(n)), null !== Aa)
                    for (n = Aa.return; null !== n;) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                null != (r = r.type.childContextTypes) && mo();
                                break;
                            case 3:
                                Pi(), ao(fo), ao(lo), qi();
                                break;
                            case 5:
                                Li(r);
                                break;
                            case 4:
                                Pi();
                                break;
                            case 13:
                            case 19:
                                ao(Di);
                                break;
                            case 10:
                                ti(r);
                                break;
                            case 23:
                            case 24:
                                _u()
                        }
                        n = n.return
                    }
                Ia = e, Aa = zu(e.current, null), Pa = Ra = Ua = t, Da = 0, Ma = null, Ba = ja = Fa = 0
            }

            function Su(e, t) {
                for (;;) {
                    var n = Aa;
                    try {
                        if (ei(), Yi.current = ks, es) {
                            for (var r = Xi.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            es = !1
                        }
                        if (Qi = 0, Zi = Ji = Xi = null, ts = !1, xa.current = null, null === n || null === n.return) {
                            Da = 1, Ma = t, Aa = null;
                            break
                        }
                        e: {
                            var i = e,
                                s = n.return,
                                a = n,
                                u = t;
                            if (t = Pa, a.flags |= 2048, a.firstEffect = a.lastEffect = null, null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var c = u;
                                if (0 == (2 & a.mode)) {
                                    var l = a.alternate;
                                    l ? (a.updateQueue = l.updateQueue, a.memoizedState = l.memoizedState, a.lanes = l.lanes) : (a.updateQueue = null, a.memoizedState = null)
                                }
                                var f = 0 != (1 & Di.current),
                                    d = s;
                                do {
                                    var p;
                                    if (p = 13 === d.tag) {
                                        var h = d.memoizedState;
                                        if (null !== h) p = null !== h.dehydrated;
                                        else {
                                            var g = d.memoizedProps;
                                            p = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !f)
                                        }
                                    }
                                    if (p) {
                                        var m = d.updateQueue;
                                        if (null === m) {
                                            var v = new Set;
                                            v.add(c), d.updateQueue = v
                                        } else m.add(c);
                                        if (0 == (2 & d.mode)) {
                                            if (d.flags |= 64, a.flags |= 16384, a.flags &= -2981, 1 === a.tag)
                                                if (null === a.alternate) a.tag = 17;
                                                else {
                                                    var b = ui(-1, 1);
                                                    b.tag = 2, ci(a, b)
                                                } a.lanes |= 1;
                                            break e
                                        }
                                        u = void 0, a = t;
                                        var y = i.pingCache;
                                        if (null === y ? (y = i.pingCache = new ua, u = new Set, y.set(c, u)) : void 0 === (u = y.get(c)) && (u = new Set, y.set(c, u)), !u.has(a)) {
                                            u.add(a);
                                            var _ = Fu.bind(null, i, c, a);
                                            c.then(_, _)
                                        }
                                        d.flags |= 4096, d.lanes = t;
                                        break e
                                    }
                                    d = d.return
                                } while (null !== d);
                                u = Error((q(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Da && (Da = 2),
                            u = sa(u, a),
                            d = s;do {
                                switch (d.tag) {
                                    case 3:
                                        i = u, d.flags |= 4096, t &= -t, d.lanes |= t, li(d, ca(0, i, t));
                                        break e;
                                    case 1:
                                        i = u;
                                        var E = d.type,
                                            S = d.stateNode;
                                        if (0 == (64 & d.flags) && ("function" == typeof E.getDerivedStateFromError || null !== S && "function" == typeof S.componentDidCatch && (null === Ka || !Ka.has(S)))) {
                                            d.flags |= 4096, t &= -t, d.lanes |= t, li(d, la(d, i, t));
                                            break e
                                        }
                                }
                                d = d.return
                            } while (null !== d)
                        }
                        xu(n)
                    } catch (e) {
                        t = e, Aa === n && null !== n && (Aa = n = n.return);
                        continue
                    }
                    break
                }
            }

            function wu() {
                var e = Na.current;
                return Na.current = ks, null === e ? ks : e
            }

            function Cu(e, t) {
                var n = ka;
                ka |= 16;
                var r = wu();
                for (Ia === e && Pa === t || Eu(e, t);;) try {
                    Tu();
                    break
                } catch (t) {
                    Su(e, t)
                }
                if (ei(), ka = n, Na.current = r, null !== Aa) throw Error(s(261));
                return Ia = null, Pa = 0, Da
            }

            function Tu() {
                for (; null !== Aa;) Nu(Aa)
            }

            function Ou() {
                for (; null !== Aa && !Oo();) Nu(Aa)
            }

            function Nu(e) {
                var t = $a(e.alternate, e, Ra);
                e.memoizedProps = e.pendingProps, null === t ? xu(e) : Aa = t, xa.current = null
            }

            function xu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 == (2048 & t.flags)) {
                        if (null !== (n = oa(n, t, Ra))) return void(Aa = n);
                        if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & Ra) || 0 == (4 & n.mode)) {
                            for (var r = 0, o = n.child; null !== o;) r |= o.lanes | o.childLanes, o = o.sibling;
                            n.childLanes = r
                        }
                        null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                    } else {
                        if (null !== (n = ia(t))) return n.flags &= 2047, void(Aa = n);
                        null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling)) return void(Aa = t);
                    Aa = t = e
                } while (null !== t);
                0 === Da && (Da = 5)
            }

            function ku(e) {
                var t = Ho();
                return Wo(99, Iu.bind(null, e, t)), null
            }

            function Iu(e, t) {
                do {
                    Pu()
                } while (null !== Xa);
                if (0 != (48 & ka)) throw Error(s(327));
                var n = e.finishedWork;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes,
                    o = r,
                    i = e.pendingLanes & ~o;
                e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
                for (var a = e.eventTimes, u = e.expirationTimes; 0 < i;) {
                    var c = 31 - Wt(i),
                        l = 1 << c;
                    o[c] = 0, a[c] = -1, u[c] = -1, i &= ~l
                }
                if (null !== tu && 0 == (24 & r) && tu.has(e) && tu.delete(e), e === Ia && (Aa = Ia = null, Pa = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                    if (o = ka, ka |= 32, xa.current = null, Fr = Kt, hr(a = pr())) {
                        if ("selectionStart" in a) u = {
                            start: a.selectionStart,
                            end: a.selectionEnd
                        };
                        else e: if (u = (u = a.ownerDocument) && u.defaultView || self, (l = u.getSelection && u.getSelection()) && 0 !== l.rangeCount) {
                            u = l.anchorNode, i = l.anchorOffset, c = l.focusNode, l = l.focusOffset;
                            try {
                                u.nodeType, c.nodeType
                            } catch (e) {
                                u = null;
                                break e
                            }
                            var f = 0,
                                d = -1,
                                p = -1,
                                h = 0,
                                g = 0,
                                m = a,
                                v = null;
                            t: for (;;) {
                                for (var b; m !== u || 0 !== i && 3 !== m.nodeType || (d = f + i), m !== c || 0 !== l && 3 !== m.nodeType || (p = f + l), 3 === m.nodeType && (f += m.nodeValue.length), null !== (b = m.firstChild);) v = m, m = b;
                                for (;;) {
                                    if (m === a) break t;
                                    if (v === u && ++h === i && (d = f), v === c && ++g === l && (p = f), null !== (b = m.nextSibling)) break;
                                    v = (m = v).parentNode
                                }
                                m = b
                            }
                            u = -1 === d || -1 === p ? null : {
                                start: d,
                                end: p
                            }
                        } else u = null;
                        u = u || {
                            start: 0,
                            end: 0
                        }
                    } else u = null;
                    jr = {
                        focusedElem: a,
                        selectionRange: u
                    }, Kt = !1, au = null, uu = !1, Va = r;
                    do {
                        try {
                            Au()
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    au = null, Va = r;
                    do {
                        try {
                            for (a = e; null !== Va;) {
                                var y = Va.flags;
                                if (16 & y && be(Va.stateNode, ""), 128 & y) {
                                    var _ = Va.alternate;
                                    if (null !== _) {
                                        var E = _.ref;
                                        null !== E && ("function" == typeof E ? E(null) : E.current = null)
                                    }
                                }
                                switch (1038 & y) {
                                    case 2:
                                        ya(Va), Va.flags &= -3;
                                        break;
                                    case 6:
                                        ya(Va), Va.flags &= -3, wa(Va.alternate, Va);
                                        break;
                                    case 1024:
                                        Va.flags &= -1025;
                                        break;
                                    case 1028:
                                        Va.flags &= -1025, wa(Va.alternate, Va);
                                        break;
                                    case 4:
                                        wa(Va.alternate, Va);
                                        break;
                                    case 8:
                                        Sa(a, u = Va);
                                        var S = u.alternate;
                                        va(u), null !== S && va(S)
                                }
                                Va = Va.nextEffect
                            }
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    if (E = jr, _ = pr(), y = E.focusedElem, a = E.selectionRange, _ !== y && y && y.ownerDocument && dr(y.ownerDocument.documentElement, y)) {
                        null !== a && hr(y) && (_ = a.start, void 0 === (E = a.end) && (E = _), "selectionStart" in y ? (y.selectionStart = _, y.selectionEnd = Math.min(E, y.value.length)) : (E = (_ = y.ownerDocument || document) && _.defaultView || self).getSelection && (E = E.getSelection(), u = y.textContent.length, S = Math.min(a.start, u), a = void 0 === a.end ? S : Math.min(a.end, u), !E.extend && S > a && (u = a, a = S, S = u), u = fr(y, S), i = fr(y, a), u && i && (1 !== E.rangeCount || E.anchorNode !== u.node || E.anchorOffset !== u.offset || E.focusNode !== i.node || E.focusOffset !== i.offset) && ((_ = _.createRange()).setStart(u.node, u.offset), E.removeAllRanges(), S > a ? (E.addRange(_), E.extend(i.node, i.offset)) : (_.setEnd(i.node, i.offset), E.addRange(_))))), _ = [];
                        for (E = y; E = E.parentNode;) 1 === E.nodeType && _.push({
                            element: E,
                            left: E.scrollLeft,
                            top: E.scrollTop
                        });
                        for ("function" == typeof y.focus && y.focus(), y = 0; y < _.length; y++)(E = _[y]).element.scrollLeft = E.left, E.element.scrollTop = E.top
                    }
                    Kt = !!Fr, jr = Fr = null, e.current = n, Va = r;
                    do {
                        try {
                            for (y = e; null !== Va;) {
                                var w = Va.flags;
                                if (36 & w && ha(y, Va.alternate, Va), 128 & w) {
                                    _ = void 0;
                                    var C = Va.ref;
                                    if (null !== C) {
                                        var T = Va.stateNode;
                                        switch (Va.tag) {
                                            case 5:
                                                _ = T;
                                                break;
                                            default:
                                                _ = T
                                        }
                                        "function" == typeof C ? C(_) : C.current = _
                                    }
                                }
                                Va = Va.nextEffect
                            }
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    Va = null, Mo(), ka = o
                } else e.current = n;
                if (Qa) Qa = !1, Xa = e, Ja = t;
                else
                    for (Va = r; null !== Va;) t = Va.nextEffect, Va.nextEffect = null, 8 & Va.flags && ((w = Va).sibling = null, w.stateNode = null), Va = t;
                if (0 === (r = e.pendingLanes) && (Ka = null), 1 === r ? e === ru ? nu++ : (nu = 0, ru = e) : nu = 0, n = n.stateNode, So && "function" == typeof So.onCommitFiberRoot) try {
                    So.onCommitFiberRoot(Eo, n, void 0, 64 == (64 & n.current.flags))
                } catch (e) {}
                if (pu(e, Go()), qa) throw qa = !1, e = Ya, Ya = null, e;
                return 0 != (8 & ka) || Vo(), null
            }

            function Au() {
                for (; null !== Va;) {
                    var e = Va.alternate;
                    uu || null === au || (0 != (8 & Va.flags) ? et(Va, au) && (uu = !0) : 13 === Va.tag && Ta(e, Va) && et(Va, au) && (uu = !0));
                    var t = Va.flags;
                    0 != (256 & t) && pa(e, Va), 0 == (512 & t) || Qa || (Qa = !0, $o(97, (function() {
                        return Pu(), null
                    }))), Va = Va.nextEffect
                }
            }

            function Pu() {
                if (90 !== Ja) {
                    var e = 97 < Ja ? 97 : Ja;
                    return Ja = 90, Wo(e, Du)
                }
                return !1
            }

            function Ru(e, t) {
                Za.push(t, e), Qa || (Qa = !0, $o(97, (function() {
                    return Pu(), null
                })))
            }

            function Lu(e, t) {
                eu.push(t, e), Qa || (Qa = !0, $o(97, (function() {
                    return Pu(), null
                })))
            }

            function Du() {
                if (null === Xa) return !1;
                var e = Xa;
                if (Xa = null, 0 != (48 & ka)) throw Error(s(331));
                var t = ka;
                ka |= 32;
                var n = eu;
                eu = [];
                for (var r = 0; r < n.length; r += 2) {
                    var o = n[r],
                        i = n[r + 1],
                        a = o.destroy;
                    if (o.destroy = void 0, "function" == typeof a) try {
                        a()
                    } catch (e) {
                        if (null === i) throw Error(s(330));
                        Uu(i, e)
                    }
                }
                for (n = Za, Za = [], r = 0; r < n.length; r += 2) {
                    o = n[r], i = n[r + 1];
                    try {
                        var u = o.create;
                        o.destroy = u()
                    } catch (e) {
                        if (null === i) throw Error(s(330));
                        Uu(i, e)
                    }
                }
                for (u = e.current.firstEffect; null !== u;) e = u.nextEffect, u.nextEffect = null, 8 & u.flags && (u.sibling = null, u.stateNode = null), u = e;
                return ka = t, Vo(), !0
            }

            function Mu(e, t, n) {
                ci(e, t = ca(0, t = sa(n, t), 1)), t = cu(), null !== (e = du(e, 1)) && (zt(e, 1, t), pu(e, t))
            }

            function Uu(e, t) {
                if (3 === e.tag) Mu(e, e, t);
                else
                    for (var n = e.return; null !== n;) {
                        if (3 === n.tag) {
                            Mu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ka || !Ka.has(r))) {
                                var o = la(n, e = sa(t, e), 1);
                                if (ci(n, o), o = cu(), null !== (n = du(n, 1))) zt(n, 1, o), pu(n, o);
                                else if ("function" == typeof r.componentDidCatch && (null === Ka || !Ka.has(r))) try {
                                    r.componentDidCatch(t, e)
                                } catch (e) {}
                                break
                            }
                        }
                        n = n.return
                    }
            }

            function Fu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = cu(), e.pingedLanes |= e.suspendedLanes & n, Ia === e && (Pa & n) === n && (4 === Da || 3 === Da && (62914560 & Pa) === Pa && 500 > Go() - Ha ? Eu(e, 0) : Ba |= n), pu(e, t)
            }

            function ju(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 === (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === Ho() ? 1 : 2 : (0 === iu && (iu = Ua), 0 === (t = Gt(62914560 & ~iu)) && (t = 4194304))), n = cu(), null !== (e = du(e, t)) && (zt(e, t, n), pu(e, n))
            }

            function Bu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Gu(e, t, n, r) {
                return new Bu(e, t, n, r)
            }

            function Hu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function zu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Gu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Wu(e, t, n, r, o, i) {
                var a = 2;
                if (r = e, "function" == typeof e) Hu(e) && (a = 1);
                else if ("string" == typeof e) a = 5;
                else e: switch (e) {
                    case C:
                        return $u(n.children, o, i, t);
                    case M:
                        a = 8, o |= 16;
                        break;
                    case T:
                        a = 8, o |= 1;
                        break;
                    case O:
                        return (e = Gu(12, n, t, 8 | o)).elementType = O, e.type = O, e.lanes = i, e;
                    case I:
                        return (e = Gu(13, n, t, o)).type = I, e.elementType = I, e.lanes = i, e;
                    case A:
                        return (e = Gu(19, n, t, o)).elementType = A, e.lanes = i, e;
                    case U:
                        return Vu(n, o, i, t);
                    case F:
                        return (e = Gu(24, n, t, o)).elementType = F, e.lanes = i, e;
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case N:
                                a = 10;
                                break e;
                            case x:
                                a = 9;
                                break e;
                            case k:
                                a = 11;
                                break e;
                            case P:
                                a = 14;
                                break e;
                            case R:
                                a = 16, r = null;
                                break e;
                            case L:
                                a = 22;
                                break e
                        }
                        throw Error(s(130, null == e ? e : typeof e, ""))
                }
                return (t = Gu(a, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
            }

            function $u(e, t, n, r) {
                return (e = Gu(7, e, r, t)).lanes = n, e
            }

            function Vu(e, t, n, r) {
                return (e = Gu(23, e, r, t)).elementType = U, e.lanes = n, e
            }

            function qu(e, t, n) {
                return (e = Gu(6, e, null, t)).lanes = n, e
            }

            function Yu(e, t, n) {
                return (t = Gu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Ku(e, t, n) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ht(0), this.expirationTimes = Ht(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ht(0), this.mutableSourceEagerHydrationData = null
            }

            function Qu(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: w,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }

            function Xu(e, t, n, r) {
                var o = t.current,
                    i = cu(),
                    a = lu(o);
                e: if (n) {
                    t: {
                        if (Qe(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(s(170));
                        var u = n;do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (go(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t
                                    }
                            }
                            u = u.return
                        } while (null !== u);
                        throw Error(s(171))
                    }
                    if (1 === n.tag) {
                        var c = n.type;
                        if (go(c)) {
                            n = bo(n, c, u);
                            break e
                        }
                    }
                    n = u
                }
                else n = co;
                return null === t.context ? t.context = n : t.pendingContext = n, (t = ui(i, a)).payload = {
                    element: e
                }, null !== (r = void 0 === r ? null : r) && (t.callback = r), ci(o, t), fu(o, a, i), a
            }

            function Ju(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode
                }
            }

            function Zu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function ec(e, t) {
                Zu(e, t), (e = e.alternate) && Zu(e, t)
            }

            function tc(e, t, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new Ku(e, t, null != n && !0 === n.hydrate), t = Gu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, si(t), e[Xr] = n.current, kr(8 === e.nodeType ? e.parentNode : e), r)
                    for (e = 0; e < r.length; e++) {
                        var o = (t = r[e])._getVersion;
                        o = o(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                    }
                this._internalRoot = n
            }

            function nc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function rc(e, t, n, r, o) {
                var i = n._reactRootContainer;
                if (i) {
                    var s = i._internalRoot;
                    if ("function" == typeof o) {
                        var a = o;
                        o = function() {
                            var e = Ju(s);
                            a.call(e)
                        }
                    }
                    Xu(t, s, e, o)
                } else {
                    if (i = n._reactRootContainer = function(e, t) {
                            if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                for (var n; n = e.lastChild;) e.removeChild(n);
                            return new tc(e, 0, t ? {
                                hydrate: !0
                            } : void 0)
                        }(n, r), s = i._internalRoot, "function" == typeof o) {
                        var u = o;
                        o = function() {
                            var e = Ju(s);
                            u.call(e)
                        }
                    }
                    bu((function() {
                        Xu(t, s, e, o)
                    }))
                }
                return Ju(s)
            }

            function oc(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!nc(t)) throw Error(s(200));
                return Qu(e, t, null, n)
            }
            $a = function(e, t, n) {
                var r = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || fo.current) Ls = !0;
                    else {
                        if (0 == (n & r)) {
                            switch (Ls = !1, t.tag) {
                                case 3:
                                    Ws(t), $i();
                                    break;
                                case 5:
                                    Ri(t);
                                    break;
                                case 1:
                                    go(t.type) && yo(t);
                                    break;
                                case 4:
                                    Ai(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    r = t.memoizedProps.value;
                                    var o = t.type._context;
                                    uo(Qo, o._currentValue), o._currentValue = r;
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 != (n & t.child.childLanes) ? Ks(e, t, n) : (uo(Di, 1 & Di.current), null !== (t = na(e, t, n)) ? t.sibling : null);
                                    uo(Di, 1 & Di.current);
                                    break;
                                case 19:
                                    if (r = 0 != (n & t.childLanes), 0 != (64 & e.flags)) {
                                        if (r) return ta(e, t, n);
                                        t.flags |= 64
                                    }
                                    if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), uo(Di, Di.current), r) break;
                                    return null;
                                case 23:
                                case 24:
                                    return t.lanes = 0, js(e, t, n)
                            }
                            return na(e, t, n)
                        }
                        Ls = 0 != (16384 & e.flags)
                    }
                else Ls = !1;
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = ho(t, lo.current), ri(t, n), o = os(null, t, r, e, o, n), t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                            if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, go(r)) {
                                var i = !0;
                                yo(t)
                            } else i = !1;
                            t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, si(t);
                            var a = r.getDerivedStateFromProps;
                            "function" == typeof a && hi(t, r, a, e), o.updater = gi, t.stateNode = o, o._reactInternals = t, yi(t, r, e, n), t = zs(null, t, r, !0, i, n)
                        } else t.tag = 0, Ds(null, t, o, n), t = t.child;
                        return t;
                    case 16:
                        o = t.elementType;
                        e: {
                            switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = (i = o._init)(o._payload), t.type = o, i = t.tag = function(e) {
                                    if ("function" == typeof e) return Hu(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === k) return 11;
                                        if (e === P) return 14
                                    }
                                    return 2
                                }(o), e = Ko(o, e), i) {
                                case 0:
                                    t = Gs(null, t, o, e, n);
                                    break e;
                                case 1:
                                    t = Hs(null, t, o, e, n);
                                    break e;
                                case 11:
                                    t = Ms(null, t, o, e, n);
                                    break e;
                                case 14:
                                    t = Us(null, t, o, Ko(o.type, e), r, n);
                                    break e
                            }
                            throw Error(s(306, o, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Gs(e, t, r, o = t.elementType === r ? o : Ko(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, Hs(e, t, r, o = t.elementType === r ? o : Ko(r, o), n);
                    case 3:
                        if (Ws(t), r = t.updateQueue, null === e || null === r) throw Error(s(282));
                        if (r = t.pendingProps, o = null !== (o = t.memoizedState) ? o.element : null, ai(e, t), fi(t, r, null, n), (r = t.memoizedState.element) === o) $i(), t = na(e, t, n);
                        else {
                            if ((i = (o = t.stateNode).hydrate) && (Fi = $r(t.stateNode.containerInfo.firstChild), Ui = t, i = ji = !0), i) {
                                if (null != (e = o.mutableSourceEagerHydrationData))
                                    for (o = 0; o < e.length; o += 2)(i = e[o])._workInProgressVersionPrimary = e[o + 1], Vi.push(i);
                                for (n = Ti(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                            } else Ds(e, t, r, n), $i();
                            t = t.child
                        }
                        return t;
                    case 5:
                        return Ri(t), null === e && Hi(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, a = o.children, Gr(r, o) ? a = null : null !== i && Gr(r, i) && (t.flags |= 16), Bs(e, t), Ds(e, t, a, n), t.child;
                    case 6:
                        return null === e && Hi(t), null;
                    case 13:
                        return Ks(e, t, n);
                    case 4:
                        return Ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ci(t, null, r, n) : Ds(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, Ms(e, t, r, o = t.elementType === r ? o : Ko(r, o), n);
                    case 7:
                        return Ds(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Ds(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            r = t.type._context,
                            o = t.pendingProps,
                            a = t.memoizedProps,
                            i = o.value;
                            var u = t.type._context;
                            if (uo(Qo, u._currentValue), u._currentValue = i, null !== a)
                                if (u = a.value, 0 === (i = ar(u, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823))) {
                                    if (a.children === o.children && !fo.current) {
                                        t = na(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                        var c = u.dependencies;
                                        if (null !== c) {
                                            a = u.child;
                                            for (var l = c.firstContext; null !== l;) {
                                                if (l.context === r && 0 != (l.observedBits & i)) {
                                                    1 === u.tag && ((l = ui(-1, n & -n)).tag = 2, ci(u, l)), u.lanes |= n, null !== (l = u.alternate) && (l.lanes |= n), ni(u.return, n), c.lanes |= n;
                                                    break
                                                }
                                                l = l.next
                                            }
                                        } else a = 10 === u.tag && u.type === t.type ? null : u.child;
                                        if (null !== a) a.return = u;
                                        else
                                            for (a = u; null !== a;) {
                                                if (a === t) {
                                                    a = null;
                                                    break
                                                }
                                                if (null !== (u = a.sibling)) {
                                                    u.return = a.return, a = u;
                                                    break
                                                }
                                                a = a.return
                                            }
                                        u = a
                                    }
                            Ds(e, t, o.children, n),
                            t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = (i = t.pendingProps).children, ri(t, n), r = r(o = oi(o, i.unstable_observedBits)), t.flags |= 1, Ds(e, t, r, n), t.child;
                    case 14:
                        return i = Ko(o = t.type, t.pendingProps), Us(e, t, o, i = Ko(o.type, i), r, n);
                    case 15:
                        return Fs(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ko(r, o), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, go(r) ? (e = !0, yo(t)) : e = !1, ri(t, n), vi(t, r, o), yi(t, r, o, n), zs(null, t, r, !0, e, n);
                    case 19:
                        return ta(e, t, n);
                    case 23:
                    case 24:
                        return js(e, t, n)
                }
                throw Error(s(156, t.tag))
            }, tc.prototype.render = function(e) {
                Xu(e, this._internalRoot, null, null)
            }, tc.prototype.unmount = function() {
                var e = this._internalRoot,
                    t = e.containerInfo;
                Xu(null, e, null, (function() {
                    t[Xr] = null
                }))
            }, tt = function(e) {
                13 === e.tag && (fu(e, 4, cu()), ec(e, 4))
            }, nt = function(e) {
                13 === e.tag && (fu(e, 67108864, cu()), ec(e, 67108864))
            }, rt = function(e) {
                if (13 === e.tag) {
                    var t = cu(),
                        n = lu(e);
                    fu(e, n, t), ec(e, n)
                }
            }, ot = function(e, t) {
                return t()
            }, Ne = function(e, t, n) {
                switch (t) {
                    case "input":
                        if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = no(r);
                                    if (!o) throw Error(s(90));
                                    X(r), ne(r, o)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        ce(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && se(e, !!n.multiple, t, !1)
                }
            }, Re = vu, Le = function(e, t, n, r, o) {
                var i = ka;
                ka |= 4;
                try {
                    return Wo(98, e.bind(null, t, n, r, o))
                } finally {
                    0 === (ka = i) && (Wa(), Vo())
                }
            }, De = function() {
                0 == (49 & ka) && (function() {
                    if (null !== tu) {
                        var e = tu;
                        tu = null, e.forEach((function(e) {
                            e.expiredLanes |= 24 & e.pendingLanes, pu(e, Go())
                        }))
                    }
                    Vo()
                }(), Pu())
            }, Me = function(e, t) {
                var n = ka;
                ka |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (ka = n) && (Wa(), Vo())
                }
            };
            var ic = {
                    Events: [eo, to, no, Ae, Pe, Pu, {
                        current: !1
                    }]
                },
                sc = {
                    findFiberByHostInstance: Zr,
                    bundleType: 0,
                    version: "17.0.1",
                    rendererPackageName: "react-dom"
                },
                ac = {
                    bundleType: sc.bundleType,
                    version: sc.version,
                    rendererPackageName: sc.rendererPackageName,
                    rendererConfig: sc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: E.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = Ze(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: sc.findFiberByHostInstance || function() {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!uc.isDisabled && uc.supportsFiber) try {
                    Eo = uc.inject(ac), So = uc
                } catch (me) {}
            }
            t.findDOMNode = function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(s(188));
                    throw Error(s(268, Object.keys(e)))
                }
                return e = null === (e = Ze(t)) ? null : e.stateNode
            }, t.render = function(e, t, n) {
                if (!nc(t)) throw Error(s(200));
                return rc(null, e, t, !1, n)
            }
        },
        31542: (e, t, n) => {
            ! function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = n(43577)
        },
        58702: (e, t) => {
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                i = n ? Symbol.for("react.fragment") : 60107,
                s = n ? Symbol.for("react.strict_mode") : 60108,
                a = n ? Symbol.for("react.profiler") : 60114,
                u = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                l = n ? Symbol.for("react.async_mode") : 60111,
                f = n ? Symbol.for("react.concurrent_mode") : 60111,
                d = n ? Symbol.for("react.forward_ref") : 60112,
                p = n ? Symbol.for("react.suspense") : 60113,
                h = n ? Symbol.for("react.suspense_list") : 60120,
                g = n ? Symbol.for("react.memo") : 60115,
                m = n ? Symbol.for("react.lazy") : 60116,
                v = n ? Symbol.for("react.block") : 60121,
                b = n ? Symbol.for("react.fundamental") : 60117,
                y = n ? Symbol.for("react.responder") : 60118,
                _ = n ? Symbol.for("react.scope") : 60119;

            function E(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case l:
                                case f:
                                case i:
                                case a:
                                case s:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case d:
                                        case m:
                                        case g:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                            case o:
                                return t
                    }
                }
            }

            function S(e) {
                return E(e) === f
            }
            t.AsyncMode = l, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = u, t.Element = r, t.ForwardRef = d, t.Fragment = i, t.Lazy = m, t.Memo = g, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = p, t.isAsyncMode = function(e) {
                return S(e) || E(e) === l
            }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                return E(e) === c
            }, t.isContextProvider = function(e) {
                return E(e) === u
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return E(e) === d
            }, t.isFragment = function(e) {
                return E(e) === i
            }, t.isLazy = function(e) {
                return E(e) === m
            }, t.isMemo = function(e) {
                return E(e) === g
            }, t.isPortal = function(e) {
                return E(e) === o
            }, t.isProfiler = function(e) {
                return E(e) === a
            }, t.isStrictMode = function(e) {
                return E(e) === s
            }, t.isSuspense = function(e) {
                return E(e) === p
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === i || e === f || e === a || e === s || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === u || e.$$typeof === c || e.$$typeof === d || e.$$typeof === b || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === v)
            }, t.typeOf = E
        },
        19185: (e, t, n) => {
            e.exports = n(58702)
        },
        41535: (e, t, n) => {
            var r = n(62525),
                o = 60103,
                i = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var s = 60109,
                a = 60110,
                u = 60112;
            t.Suspense = 60113;
            var c = 60115,
                l = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var f = Symbol.for;
                o = f("react.element"), i = f("react.portal"), t.Fragment = f("react.fragment"), t.StrictMode = f("react.strict_mode"), t.Profiler = f("react.profiler"), s = f("react.provider"), a = f("react.context"), u = f("react.forward_ref"), t.Suspense = f("react.suspense"), c = f("react.memo"), l = f("react.lazy")
            }
            var d = "function" == typeof Symbol && Symbol.iterator;

            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var h = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                g = {};

            function m(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || h
            }

            function v() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || h
            }
            m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, m.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = m.prototype;
            var y = b.prototype = new v;
            y.constructor = b, r(y, m.prototype), y.isPureReactComponent = !0;
            var _ = {
                    current: null
                },
                E = Object.prototype.hasOwnProperty,
                S = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function w(e, t, n) {
                var r, i = {},
                    s = null,
                    a = null;
                if (null != t)
                    for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) E.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u) i.children = n;
                else if (1 < u) {
                    for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
                    i.children = c
                }
                if (e && e.defaultProps)
                    for (r in u = e.defaultProps) void 0 === i[r] && (i[r] = u[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: s,
                    ref: a,
                    props: i,
                    _owner: _.current
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }
            var T = /\/+/g;

            function O(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function N(e, t, n, r, s) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var u = !1;
                if (null === e) u = !0;
                else switch (a) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case o:
                            case i:
                                u = !0
                        }
                }
                if (u) return s = s(u = e), e = "" === r ? "." + O(u, 0) : r, Array.isArray(s) ? (n = "", null != e && (n = e.replace(T, "$&/") + "/"), N(s, t, n, "", (function(e) {
                    return e
                }))) : null != s && (C(s) && (s = function(e, t) {
                    return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(s, n + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(T, "$&/") + "/") + e)), t.push(s)), 1;
                if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var l = r + O(a = e[c], c);
                        u += N(a, t, n, l, s)
                    } else if ("function" == typeof(l = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                        }(e)))
                        for (e = l.call(e), c = 0; !(a = e.next()).done;) u += N(a = a.value, t, n, l = r + O(a, c++), s);
                    else if ("object" === a) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return u
            }

            function x(e, t, n) {
                if (null == e) return e;
                var r = [],
                    o = 0;
                return N(e, r, "", "", (function(e) {
                    return t.call(n, e, o++)
                })), r
            }

            function k(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function(t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function(t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }
            var I = {
                current: null
            };

            function A() {
                var e = I.current;
                if (null === e) throw Error(p(321));
                return e
            }
            var P = {
                ReactCurrentDispatcher: I,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: _,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            t.Children = {
                map: x,
                forEach: function(e, t, n) {
                    x(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return x(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return x(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!C(e)) throw Error(p(143));
                    return e
                }
            }, t.Component = m, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error(p(267, e));
                var i = r({}, e.props),
                    s = e.key,
                    a = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, u = _.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (l in t) E.call(t, l) && !S.hasOwnProperty(l) && (i[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
                }
                var l = arguments.length - 2;
                if (1 === l) i.children = n;
                else if (1 < l) {
                    c = Array(l);
                    for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
                    i.children = c
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: s,
                    ref: a,
                    props: i,
                    _owner: u
                }
            }, t.createContext = function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: a,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = w, t.createFactory = function(e) {
                var t = w.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, t.isValidElement = C, t.lazy = function(e) {
                return {
                    $$typeof: l,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: k
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: c,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.useCallback = function(e, t) {
                return A().useCallback(e, t)
            }, t.useContext = function(e, t) {
                return A().useContext(e, t)
            }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                return A().useEffect(e, t)
            }, t.useImperativeHandle = function(e, t, n) {
                return A().useImperativeHandle(e, t, n)
            }, t.useLayoutEffect = function(e, t) {
                return A().useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return A().useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return A().useReducer(e, t, n)
            }, t.useRef = function(e) {
                return A().useRef(e)
            }, t.useState = function(e) {
                return A().useState(e)
            }, t.version = "17.0.1"
        },
        27378: (e, t, n) => {
            e.exports = n(41535)
        },
        10608: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.printBuffer = function(e, t) {
                var n = t.logger,
                    r = t.actionTransformer,
                    o = t.titleFormatter,
                    s = void 0 === o ? function(e) {
                        var t = e.timestamp,
                            n = e.duration;
                        return function(e, r, o) {
                            var i = ["action"];
                            return i.push("%c" + String(e.type)), t && i.push("%c@ " + r), n && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ")
                        }
                    }(t) : o,
                    c = t.collapsed,
                    l = t.colors,
                    f = t.level,
                    d = t.diff;
                e.forEach((function(o, p) {
                    var h = o.started,
                        g = o.startedTime,
                        m = o.action,
                        v = o.prevState,
                        b = o.error,
                        y = o.took,
                        _ = o.nextState,
                        E = e[p + 1];
                    E && (_ = E.prevState, y = E.started - h);
                    var S = r(m),
                        w = "function" == typeof c ? c((function() {
                            return _
                        }), m, o) : c,
                        C = (0, i.formatTime)(g),
                        T = l.title ? "color: " + l.title(S) + ";" : "",
                        O = ["color: gray; font-weight: lighter;"];
                    O.push(T), t.timestamp && O.push("color: gray; font-weight: lighter;"), t.duration && O.push("color: gray; font-weight: lighter;");
                    var N = s(S, C, y);
                    try {
                        w ? l.title ? n.groupCollapsed.apply(n, ["%c " + N].concat(O)) : n.groupCollapsed(N) : l.title ? n.group.apply(n, ["%c " + N].concat(O)) : n.group(N)
                    } catch (e) {
                        n.log(N)
                    }
                    var x = u(f, S, [v], "prevState"),
                        k = u(f, S, [S], "action"),
                        I = u(f, S, [b, v], "error"),
                        A = u(f, S, [_], "nextState");
                    x && (l.prevState ? n[x]("%c prev state", "color: " + l.prevState(v) + "; font-weight: bold", v) : n[x]("prev state", v)), k && (l.action ? n[k]("%c action    ", "color: " + l.action(S) + "; font-weight: bold", S) : n[k]("action    ", S)), b && I && (l.error ? n[I]("%c error     ", "color: " + l.error(b, v) + "; font-weight: bold;", b) : n[I]("error     ", b)), A && (l.nextState ? n[A]("%c next state", "color: " + l.nextState(_) + "; font-weight: bold", _) : n[A]("next state", _)), d && (0, a.default)(v, _, n, w);
                    try {
                        n.groupEnd()
                    } catch (e) {
                        n.log("—— log end ——")
                    }
                }))
            };
            var o, i = n(33533),
                s = n(67734),
                a = (o = s) && o.__esModule ? o : {
                    default: o
                };

            function u(e, t, n, o) {
                switch (void 0 === e ? "undefined" : r(e)) {
                    case "object":
                        return "function" == typeof e[o] ? e[o].apply(e, function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(n)) : e[o];
                    case "function":
                        return e(t);
                    default:
                        return e
                }
            }
        },
        9913: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                level: "log",
                logger: console,
                logErrors: !0,
                collapsed: void 0,
                predicate: void 0,
                duration: !1,
                timestamp: !0,
                stateTransformer: function(e) {
                    return e
                },
                actionTransformer: function(e) {
                    return e
                },
                errorTransformer: function(e) {
                    return e
                },
                colors: {
                    title: function() {
                        return "inherit"
                    },
                    prevState: function() {
                        return "#9E9E9E"
                    },
                    action: function() {
                        return "#03A9F4"
                    },
                    nextState: function() {
                        return "#4CAF50"
                    },
                    error: function() {
                        return "#F20404"
                    }
                },
                diff: !1,
                diffPredicate: void 0,
                transformer: void 0
            }, e.exports = t.default
        },
        67734: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, n, r) {
                var o = (0, i.default)(e, t);
                try {
                    r ? n.groupCollapsed("diff") : n.group("diff")
                } catch (e) {
                    n.log("diff")
                }
                o ? o.forEach((function(e) {
                    var t = e.kind,
                        r = function(e) {
                            var t = e.kind,
                                n = e.path,
                                r = e.lhs,
                                o = e.rhs,
                                i = e.index,
                                s = e.item;
                            switch (t) {
                                case "E":
                                    return [n.join("."), r, "→", o];
                                case "N":
                                    return [n.join("."), o];
                                case "D":
                                    return [n.join(".")];
                                case "A":
                                    return [n.join(".") + "[" + i + "]", s];
                                default:
                                    return []
                            }
                        }(e);
                    n.log.apply(n, ["%c " + s[t].text, a(t)].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(r)))
                })) : n.log("—— no diff ——");
                try {
                    n.groupEnd()
                } catch (e) {
                    n.log("—— diff end —— ")
                }
            };
            var r, o = n(22091),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            var s = {
                E: {
                    color: "#2196F3",
                    text: "CHANGED:"
                },
                N: {
                    color: "#4CAF50",
                    text: "ADDED:"
                },
                D: {
                    color: "#F44336",
                    text: "DELETED:"
                },
                A: {
                    color: "#2196F3",
                    text: "ARRAY:"
                }
            };

            function a(e) {
                return "color: " + s[e].color + "; font-weight: bold"
            }
            e.exports = t.default
        },
        33533: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = t.repeat = function(e, t) {
                    return new Array(t + 1).join(e)
                },
                r = t.pad = function(e, t) {
                    return n("0", t - e.toString().length) + e
                };
            t.formatTime = function(e) {
                return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3)
            }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date
        },
        63583: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logger = t.defaults = void 0;
            var r, o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = n(10608),
                s = n(33533),
                a = n(9913),
                u = (r = a) && r.__esModule ? r : {
                    default: r
                };

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = o({}, u.default, e),
                    n = t.logger,
                    r = t.transformer,
                    a = t.stateTransformer,
                    c = t.errorTransformer,
                    l = t.predicate,
                    f = t.logErrors,
                    d = t.diffPredicate;
                if (void 0 === n) return function() {
                    return function(e) {
                        return function(t) {
                            return e(t)
                        }
                    }
                };
                if (r && console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!"), e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
                    function() {
                        return function(e) {
                            return function(t) {
                                return e(t)
                            }
                        }
                    };
                var p = [];
                return function(e) {
                    var n = e.getState;
                    return function(e) {
                        return function(r) {
                            if ("function" == typeof l && !l(n, r)) return e(r);
                            var u = {};
                            p.push(u), u.started = s.timer.now(), u.startedTime = new Date, u.prevState = a(n()), u.action = r;
                            var h = void 0;
                            if (f) try {
                                h = e(r)
                            } catch (e) {
                                u.error = c(e)
                            } else h = e(r);
                            u.took = s.timer.now() - u.started, u.nextState = a(n());
                            var g = t.diff && "function" == typeof d ? d(n, r) : t.diff;
                            if ((0, i.printBuffer)(p, o({}, t, {
                                    diff: g
                                })), p.length = 0, u.error) throw u.error;
                            return h
                        }
                    }
                }
            }
            var l = c();
            t.defaults = u.default, t.logger = l, t.default = c, e.exports = t.default
        },
        73323: (e, t) => {
            var n, r, o, i;
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var s = performance;
                t.unstable_now = function() {
                    return s.now()
                }
            } else {
                var a = Date,
                    u = a.now();
                t.unstable_now = function() {
                    return a.now() - u
                }
            }
            if ("undefined" == typeof self || "function" != typeof MessageChannel) {
                var c = null,
                    l = null,
                    f = function() {
                        if (null !== c) try {
                            var e = t.unstable_now();
                            c(!0, e), c = null
                        } catch (e) {
                            throw setTimeout(f, 0), e
                        }
                    };
                n = function(e) {
                    null !== c ? setTimeout(n, 0, e) : (c = e, setTimeout(f, 0))
                }, r = function(e, t) {
                    l = setTimeout(e, t)
                }, o = function() {
                    clearTimeout(l)
                }, t.unstable_shouldYield = function() {
                    return !1
                }, i = t.unstable_forceFrameRate = function() {}
            } else {
                var d = self.setTimeout,
                    p = self.clearTimeout;
                if ("undefined" != typeof console) {
                    var h = self.cancelAnimationFrame;
                    "function" != typeof self.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" != typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var g = !1,
                    m = null,
                    v = -1,
                    b = 5,
                    y = 0;
                t.unstable_shouldYield = function() {
                    return t.unstable_now() >= y
                }, i = function() {}, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                };
                var _ = new MessageChannel,
                    E = _.port2;
                _.port1.onmessage = function() {
                    if (null !== m) {
                        var e = t.unstable_now();
                        y = e + b;
                        try {
                            m(!0, e) ? E.postMessage(null) : (g = !1, m = null)
                        } catch (e) {
                            throw E.postMessage(null), e
                        }
                    } else g = !1
                }, n = function(e) {
                    m = e, g || (g = !0, E.postMessage(null))
                }, r = function(e, n) {
                    v = d((function() {
                        e(t.unstable_now())
                    }), n)
                }, o = function() {
                    p(v), v = -1
                }
            }

            function S(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var r = n - 1 >>> 1,
                        o = e[r];
                    if (!(void 0 !== o && 0 < T(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function w(e) {
                return void 0 === (e = e[0]) ? null : e
            }

            function C(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o;) {
                            var i = 2 * (r + 1) - 1,
                                s = e[i],
                                a = i + 1,
                                u = e[a];
                            if (void 0 !== s && 0 > T(s, n)) void 0 !== u && 0 > T(u, s) ? (e[r] = u, e[a] = n, r = a) : (e[r] = s, e[i] = n, r = i);
                            else {
                                if (!(void 0 !== u && 0 > T(u, n))) break e;
                                e[r] = u, e[a] = n, r = a
                            }
                        }
                    }
                    return t
                }
                return null
            }

            function T(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var O = [],
                N = [],
                x = 1,
                k = null,
                I = 3,
                A = !1,
                P = !1,
                R = !1;

            function L(e) {
                for (var t = w(N); null !== t;) {
                    if (null === t.callback) C(N);
                    else {
                        if (!(t.startTime <= e)) break;
                        C(N), t.sortIndex = t.expirationTime, S(O, t)
                    }
                    t = w(N)
                }
            }

            function D(e) {
                if (R = !1, L(e), !P)
                    if (null !== w(O)) P = !0, n(M);
                    else {
                        var t = w(N);
                        null !== t && r(D, t.startTime - e)
                    }
            }

            function M(e, n) {
                P = !1, R && (R = !1, o()), A = !0;
                var i = I;
                try {
                    for (L(n), k = w(O); null !== k && (!(k.expirationTime > n) || e && !t.unstable_shouldYield());) {
                        var s = k.callback;
                        if ("function" == typeof s) {
                            k.callback = null, I = k.priorityLevel;
                            var a = s(k.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof a ? k.callback = a : k === w(O) && C(O), L(n)
                        } else C(O);
                        k = w(O)
                    }
                    if (null !== k) var u = !0;
                    else {
                        var c = w(N);
                        null !== c && r(D, c.startTime - n), u = !1
                    }
                    return u
                } finally {
                    k = null, I = i, A = !1
                }
            }
            var U = i;
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                P || A || (P = !0, n(M))
            }, t.unstable_getCurrentPriorityLevel = function() {
                return I
            }, t.unstable_getFirstCallbackNode = function() {
                return w(O)
            }, t.unstable_next = function(e) {
                switch (I) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = I
                }
                var n = I;
                I = t;
                try {
                    return e()
                } finally {
                    I = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = U, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = I;
                I = e;
                try {
                    return t()
                } finally {
                    I = n
                }
            }, t.unstable_scheduleCallback = function(e, i, s) {
                var a = t.unstable_now();
                switch ("object" == typeof s && null !== s ? s = "number" == typeof(s = s.delay) && 0 < s ? a + s : a : s = a, e) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3
                }
                return e = {
                    id: x++,
                    callback: i,
                    priorityLevel: e,
                    startTime: s,
                    expirationTime: u = s + u,
                    sortIndex: -1
                }, s > a ? (e.sortIndex = s, S(N, e), null === w(O) && e === w(N) && (R ? o() : R = !0, r(D, s - a))) : (e.sortIndex = u, S(O, e), P || A || (P = !0, n(M))), e
            }, t.unstable_wrapCallback = function(e) {
                var t = I;
                return function() {
                    var n = I;
                    I = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        I = n
                    }
                }
            }
        },
        91102: (e, t, n) => {
            e.exports = n(73323)
        },
        23134: e => {
            e.exports = function(e) {
                var t = function(e, t) {
                        return e + t & 4294967295
                    },
                    n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

                function r(e, n, r, o, i, s) {
                    return n = t(t(n, e), t(o, s)), t(n << i | n >>> 32 - i, r)
                }

                function o(e, t, n, o, i, s, a) {
                    return r(t & n | ~t & o, e, t, i, s, a)
                }

                function i(e, t, n, o, i, s, a) {
                    return r(t & o | n & ~o, e, t, i, s, a)
                }

                function s(e, t, n, o, i, s, a) {
                    return r(t ^ n ^ o, e, t, i, s, a)
                }

                function a(e, t, n, o, i, s, a) {
                    return r(n ^ (t | ~o), e, t, i, s, a)
                }

                function u(e, n) {
                    var r = e[0],
                        u = e[1],
                        c = e[2],
                        l = e[3];
                    r = o(r, u, c, l, n[0], 7, -680876936), l = o(l, r, u, c, n[1], 12, -389564586), c = o(c, l, r, u, n[2], 17, 606105819), u = o(u, c, l, r, n[3], 22, -1044525330), r = o(r, u, c, l, n[4], 7, -176418897), l = o(l, r, u, c, n[5], 12, 1200080426), c = o(c, l, r, u, n[6], 17, -1473231341), u = o(u, c, l, r, n[7], 22, -45705983), r = o(r, u, c, l, n[8], 7, 1770035416), l = o(l, r, u, c, n[9], 12, -1958414417), c = o(c, l, r, u, n[10], 17, -42063), u = o(u, c, l, r, n[11], 22, -1990404162), r = o(r, u, c, l, n[12], 7, 1804603682), l = o(l, r, u, c, n[13], 12, -40341101), c = o(c, l, r, u, n[14], 17, -1502002290), r = i(r, u = o(u, c, l, r, n[15], 22, 1236535329), c, l, n[1], 5, -165796510), l = i(l, r, u, c, n[6], 9, -1069501632), c = i(c, l, r, u, n[11], 14, 643717713), u = i(u, c, l, r, n[0], 20, -373897302), r = i(r, u, c, l, n[5], 5, -701558691), l = i(l, r, u, c, n[10], 9, 38016083), c = i(c, l, r, u, n[15], 14, -660478335), u = i(u, c, l, r, n[4], 20, -405537848), r = i(r, u, c, l, n[9], 5, 568446438), l = i(l, r, u, c, n[14], 9, -1019803690), c = i(c, l, r, u, n[3], 14, -187363961), u = i(u, c, l, r, n[8], 20, 1163531501), r = i(r, u, c, l, n[13], 5, -1444681467), l = i(l, r, u, c, n[2], 9, -51403784), c = i(c, l, r, u, n[7], 14, 1735328473), r = s(r, u = i(u, c, l, r, n[12], 20, -1926607734), c, l, n[5], 4, -378558), l = s(l, r, u, c, n[8], 11, -2022574463), c = s(c, l, r, u, n[11], 16, 1839030562), u = s(u, c, l, r, n[14], 23, -35309556), r = s(r, u, c, l, n[1], 4, -1530992060), l = s(l, r, u, c, n[4], 11, 1272893353), c = s(c, l, r, u, n[7], 16, -155497632), u = s(u, c, l, r, n[10], 23, -1094730640), r = s(r, u, c, l, n[13], 4, 681279174), l = s(l, r, u, c, n[0], 11, -358537222), c = s(c, l, r, u, n[3], 16, -722521979), u = s(u, c, l, r, n[6], 23, 76029189), r = s(r, u, c, l, n[9], 4, -640364487), l = s(l, r, u, c, n[12], 11, -421815835), c = s(c, l, r, u, n[15], 16, 530742520), r = a(r, u = s(u, c, l, r, n[2], 23, -995338651), c, l, n[0], 6, -198630844), l = a(l, r, u, c, n[7], 10, 1126891415), c = a(c, l, r, u, n[14], 15, -1416354905), u = a(u, c, l, r, n[5], 21, -57434055), r = a(r, u, c, l, n[12], 6, 1700485571), l = a(l, r, u, c, n[3], 10, -1894986606), c = a(c, l, r, u, n[10], 15, -1051523), u = a(u, c, l, r, n[1], 21, -2054922799), r = a(r, u, c, l, n[8], 6, 1873313359), l = a(l, r, u, c, n[15], 10, -30611744), c = a(c, l, r, u, n[6], 15, -1560198380), u = a(u, c, l, r, n[13], 21, 1309151649), r = a(r, u, c, l, n[4], 6, -145523070), l = a(l, r, u, c, n[11], 10, -1120210379), c = a(c, l, r, u, n[2], 15, 718787259), u = a(u, c, l, r, n[9], 21, -343485551), e[0] = t(r, e[0]), e[1] = t(u, e[1]), e[2] = t(c, e[2]), e[3] = t(l, e[3])
                }

                function c(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                    return n
                }

                function l(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                    return n
                }

                function f(e) {
                    var t, n, r, o, i, s, a = e.length,
                        l = [1732584193, -271733879, -1732584194, 271733878];
                    for (t = 64; t <= a; t += 64) u(l, c(e.substring(t - 64, t)));
                    for (n = (e = e.substring(t - 64)).length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) r[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                    if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                        for (u(l, r), t = 0; t < 16; t += 1) r[t] = 0;
                    return o = (o = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, r[14] = i, r[15] = s, u(l, r), l
                }

                function d(e) {
                    var t, n, r, o, i, s, a = e.length,
                        c = [1732584193, -271733879, -1732584194, 271733878];
                    for (t = 64; t <= a; t += 64) u(c, l(e.subarray(t - 64, t)));
                    for (n = (e = t - 64 < a ? e.subarray(t - 64) : new Uint8Array(0)).length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) r[t >> 2] |= e[t] << (t % 4 << 3);
                    if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                        for (u(c, r), t = 0; t < 16; t += 1) r[t] = 0;
                    return o = (o = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, r[14] = i, r[15] = s, u(c, r), c
                }

                function p(e) {
                    var t, r = "";
                    for (t = 0; t < 4; t += 1) r += n[e >> 8 * t + 4 & 15] + n[e >> 8 * t & 15];
                    return r
                }

                function h(e) {
                    var t;
                    for (t = 0; t < e.length; t += 1) e[t] = p(e[t]);
                    return e.join("")
                }

                function g(e) {
                    return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
                }

                function m(e, t) {
                    var n, r = e.length,
                        o = new ArrayBuffer(r),
                        i = new Uint8Array(o);
                    for (n = 0; n < r; n++) i[n] = e.charCodeAt(n);
                    return t ? i : o
                }

                function v(e) {
                    return String.fromCharCode.apply(null, new Uint8Array(e))
                }

                function b(e, t, n) {
                    var r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
                }

                function y() {
                    this.reset()
                }
                return "5d41402abc4b2a76b9719d911017c592" !== h(f("hello")) && (t = function(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }), y.prototype.append = function(e) {
                    return this.appendBinary(g(e)), this
                }, y.prototype.appendBinary = function(e) {
                    this._buff += e, this._length += e.length;
                    var t, n = this._buff.length;
                    for (t = 64; t <= n; t += 64) u(this._hash, c(this._buff.substring(t - 64, t)));
                    return this._buff = this._buff.substring(t - 64), this
                }, y.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        o = r.length,
                        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                    return this._finish(i, o), n = e ? this._hash : h(this._hash), this.reset(), n
                }, y.prototype.reset = function() {
                    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, y.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash
                    }
                }, y.prototype.setState = function(e) {
                    return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
                }, y.prototype.destroy = function() {
                    delete this._hash, delete this._buff, delete this._length
                }, y.prototype._finish = function(e, t) {
                    var n, r, o, i = t;
                    if (e[i >> 2] |= 128 << (i % 4 << 3), i > 55)
                        for (u(this._hash, e), i = 0; i < 16; i += 1) e[i] = 0;
                    n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(n[2], 16), o = parseInt(n[1], 16) || 0, e[14] = r, e[15] = o, u(this._hash, e)
                }, y.hash = function(e, t) {
                    return y.hashBinary(g(e), t)
                }, y.hashBinary = function(e, t) {
                    var n = f(e);
                    return t ? n : h(n)
                }, y.ArrayBuffer = function() {
                    this.reset()
                }, y.ArrayBuffer.prototype.append = function(e) {
                    var t, n = b(this._buff.buffer, e, !0),
                        r = n.length;
                    for (this._length += e.byteLength, t = 64; t <= r; t += 64) u(this._hash, l(n.subarray(t - 64, t)));
                    return this._buff = t - 64 < r ? n.subarray(t - 64) : new Uint8Array(0), this
                }, y.ArrayBuffer.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        o = r.length,
                        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                    return this._finish(i, o), n = e ? this._hash : h(this._hash), this.reset(), n
                }, y.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, y.ArrayBuffer.prototype.getState = function() {
                    var e = y.prototype.getState.call(this);
                    return e.buff = v(e.buff), e
                }, y.ArrayBuffer.prototype.setState = function(e) {
                    return e.buff = m(e.buff, !0), y.prototype.setState.call(this, e)
                }, y.ArrayBuffer.prototype.destroy = y.prototype.destroy, y.ArrayBuffer.prototype._finish = y.prototype._finish, y.ArrayBuffer.hash = function(e, t) {
                    var n = d(new Uint8Array(e));
                    return t ? n : h(n)
                }, y
            }()
        },
        15081: (e, t, n) => {
            n.d(t, {
                Z: () => r
            }), e = n.hmd(e);
            const r = function(e) {
                var t, n = e.Symbol;
                return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
            }("undefined" != typeof self || "undefined" != typeof self ? self : void 0 !== n.g ? n.g : e)
        },
        8746: e => {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : e.exports = function(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        },
        56579: e => {
            e.exports = function(e) {
                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
            }
        },
        71323: (e, t, n) => {
            var r = n(27061),
                o = /%[sdj%]/g;
            t.format = function(e) {
                if (!v(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(a(arguments[n]));
                    return t.join(" ")
                }
                n = 1;
                for (var r = arguments, i = r.length, s = String(e).replace(o, (function(e) {
                        if ("%%" === e) return "%";
                        if (n >= i) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    })), u = r[n]; n < i; u = r[++n]) g(u) || !_(u) ? s += " " + u : s += " " + a(u);
                return s
            }, t.deprecate = function(e, o) {
                if (b(n.g.process)) return function() {
                    return t.deprecate(e, o).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return e;
                var i = !1;
                return function() {
                    if (!i) {
                        if (r.throwDeprecation) throw new Error(o);
                        r.traceDeprecation ? console.trace(o) : console.error(o), i = !0
                    }
                    return e.apply(this, arguments)
                }
            };
            var i, s = {};

            function a(e, n) {
                var r = {
                    seen: [],
                    stylize: c
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), h(n) ? r.showHidden = n : n && t._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), l(r, e, r.depth)
            }

            function u(e, t) {
                var n = a.styles[t];
                return n ? "[" + a.colors[n][0] + "m" + e + "[" + a.colors[n][1] + "m" : e
            }

            function c(e, t) {
                return e
            }

            function l(e, n, r) {
                if (e.customInspect && n && w(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var o = n.inspect(r, e);
                    return v(o) || (o = l(e, o, r)), o
                }
                var i = function(e, t) {
                    if (b(t)) return e.stylize("undefined", "undefined");
                    if (v(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    if (m(t)) return e.stylize("" + t, "number");
                    if (h(t)) return e.stylize("" + t, "boolean");
                    if (g(t)) return e.stylize("null", "null")
                }(e, n);
                if (i) return i;
                var s = Object.keys(n),
                    a = function(e) {
                        var t = {};
                        return e.forEach((function(e, n) {
                            t[e] = !0
                        })), t
                    }(s);
                if (e.showHidden && (s = Object.getOwnPropertyNames(n)), S(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return f(n);
                if (0 === s.length) {
                    if (w(n)) {
                        var u = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + u + "]", "special")
                    }
                    if (y(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (E(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (S(n)) return f(n)
                }
                var c, _ = "",
                    C = !1,
                    T = ["{", "}"];
                (p(n) && (C = !0, T = ["[", "]"]), w(n)) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]");
                return y(n) && (_ = " " + RegExp.prototype.toString.call(n)), E(n) && (_ = " " + Date.prototype.toUTCString.call(n)), S(n) && (_ = " " + f(n)), 0 !== s.length || C && 0 != n.length ? r < 0 ? y(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), c = C ? function(e, t, n, r, o) {
                    for (var i = [], s = 0, a = t.length; s < a; ++s) x(t, String(s)) ? i.push(d(e, t, n, r, String(s), !0)) : i.push("");
                    return o.forEach((function(o) {
                        o.match(/^\d+$/) || i.push(d(e, t, n, r, o, !0))
                    })), i
                }(e, n, r, a, s) : s.map((function(t) {
                    return d(e, n, r, a, t, C)
                })), e.seen.pop(), function(e, t, n) {
                    if (e.reduce((function(e, t) {
                            return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }), 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                    return n[0] + t + " " + e.join(", ") + " " + n[1]
                }(c, _, T)) : T[0] + _ + T[1]
            }

            function f(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function d(e, t, n, r, o, i) {
                var s, a, u;
                if ((u = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), x(r, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(u.value) < 0 ? (a = g(n) ? l(e, u.value, null) : l(e, u.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map((function(e) {
                        return "  " + e
                    })).join("\n").substr(2) : "\n" + a.split("\n").map((function(e) {
                        return "   " + e
                    })).join("\n")) : a = e.stylize("[Circular]", "special")), b(s)) {
                    if (i && o.match(/^\d+$/)) return a;
                    (s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function p(e) {
                return Array.isArray(e)
            }

            function h(e) {
                return "boolean" == typeof e
            }

            function g(e) {
                return null === e
            }

            function m(e) {
                return "number" == typeof e
            }

            function v(e) {
                return "string" == typeof e
            }

            function b(e) {
                return void 0 === e
            }

            function y(e) {
                return _(e) && "[object RegExp]" === C(e)
            }

            function _(e) {
                return "object" == typeof e && null !== e
            }

            function E(e) {
                return _(e) && "[object Date]" === C(e)
            }

            function S(e) {
                return _(e) && ("[object Error]" === C(e) || e instanceof Error)
            }

            function w(e) {
                return "function" == typeof e
            }

            function C(e) {
                return Object.prototype.toString.call(e)
            }

            function T(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function(e) {
                if (b(i) && (i = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !s[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
                        var n = r.pid;
                        s[e] = function() {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else s[e] = function() {};
                return s[e]
            }, t.inspect = a, a.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, a.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = p, t.isBoolean = h, t.isNull = g, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = m, t.isString = v, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = b, t.isRegExp = y, t.isObject = _, t.isDate = E, t.isError = S, t.isFunction = w, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = n(56579);
            var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function N() {
                var e = new Date,
                    t = [T(e.getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":");
                return [e.getDate(), O[e.getMonth()], t].join(" ")
            }

            function x(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.log = function() {
                console.log("%s - %s", N(), t.format.apply(t, arguments))
            }, t.inherits = n(8746), t._extend = function(e, t) {
                if (!t || !_(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }
    },
    t = {};

function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
        id: r,
        loaded: !1,
        exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
}
n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {
        a: t
    }), t
}, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
    })
}, n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")()
    } catch (e) {
        if ("object" == typeof window) return window
    }
}(), n.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
    enumerable: !0,
    set: () => {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
    }
}), e), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }), Object.defineProperty(e, "__esModule", {
        value: !0
    })
}, (() => {
    var e = {};
    n.r(e), n.d(e, {
        emitBackground: () => Qn,
        emitError: () => Gn,
        emitFocusedTab: () => Kn,
        emitTabs: () => Vn,
        emitTo: () => qn,
        getTopFrameId: () => Yn,
        init: () => Hn,
        initMessage: () => Mn,
        off: () => $n,
        on: () => Wn,
        onBackgroundPortReconnect: () => Bn,
        one: () => zn,
        promiseBackground: () => Xn
    });
    var t = {};
    n.r(t), n.d(t, {
        acceptDataControl: () => kr,
        activateDataControl: () => xr,
        disableDataControl: () => Ir,
        onlineConnection: () => Nr,
        setDataTrackingEnabled: () => Ar,
        t: () => Tr,
        uninstallExtension: () => Pr,
        updateConnection: () => Or
    });
    var r = {};
    n.r(r), n.d(r, {
        setEnvironment: () => Lr,
        t: () => Rr,
        updateEnvironment: () => Dr
    });
    var o = {};
    n.r(o), n.d(o, {
        CACHED_ACTIONS: () => Fr,
        DAPI_ACTIONS: () => Ur,
        acknowledgeOnboardingPopup: () => fo,
        changeStrongDialect: () => Gr,
        changeWeakDialect: () => Br,
        chipmunkNextFetchSettings: () => ri,
        clickGdocsAuthentication: () => eo,
        closeMigrationNotification: () => Lo,
        deferPremiumResurrectionPopup: () => qo,
        disableEmailSummarization: () => Co,
        disableLoginReminder: () => wo,
        disableOnTab: () => vo,
        disableReminder: () => yo,
        dismissDunningMessage: () => xo,
        dismissGdocsFreeTrial: () => jo,
        dismissGoogleTranslateFluencyPopup: () => Zo,
        dismissImportanceSurvey: () => ti,
        dismissPinExtensionPopup: () => Xo,
        dismissRenewalNotification: () => Po,
        enableClickToRunOnAllSites: () => Jo,
        gdocsHideLongDocumentPopup: () => io,
        gdocsHideSharedDocumentPopup: () => ao,
        gdocsHideSidebar: () => ro,
        gdocsOptedIn: () => Xr,
        gdocsOptedOut: () => Jr,
        gdocsSaveDocumentSetting: () => oo,
        gdocsShowSidebar: () => no,
        gdocsUnhideLongDocumentPopup: () => so,
        gdocsUnhideSharedDocumentPopup: () => uo,
        hideGdocsSigninPopup: () => Zr,
        hideGoogleTranslateFluencyPopup: () => ei,
        hideImportanceSurvey: () => ni,
        hideLoginReminder: () => So,
        incrementCountCloseGdocsFreeTrialPopup: () => Fo,
        initialSettings: () => Hr,
        patchAssistantSettings: () => Wo,
        patchGButtonSettings: () => $o,
        recordRenewalNotificationAppearance: () => Ro,
        saveAnonymousProps: () => mo,
        seenAutocompleteOnboardingHint: () => Vr,
        seenDelightfulMessage: () => ho,
        seenGdocsInlineTooltip: () => Mo,
        seenGdocsSidebarOnboardingNotification: () => po,
        seenNews: () => Qr,
        seenOnboarding: () => lo,
        seenPremiumResurrectionPopup: () => Vo,
        seenProofitIntroPopup: () => Yo,
        seenSmartPhrasesPinTooltip: () => Qo,
        sentProofitRequest: () => Ko,
        setDapiProp: () => jr,
        setEmogenieEmojiState: () => To,
        setFirstPremiumDate: () => Ho,
        setGdocsEnabledSetting: () => to,
        setHideWelcomeEmogenieNotification: () => Do,
        setLlamaInstalled: () => oi,
        setLlamaIntegrationDisable: () => si,
        setLlamaUninstalled: () => ii,
        showBusinessUphookPopup: () => Oo,
        showDisableReminder: () => bo,
        showGdocsFreeTrialPopup: () => Uo,
        showGmailSendEmailPremiumPopup: () => No,
        showLoginReminder: () => Eo,
        showLoginReminderPopupOnInit: () => _o,
        showNews: () => go,
        showOnboarding: () => co,
        showPremiumChangeEmailPopup: () => Io,
        showPremiumSurvey: () => zo,
        startGdocsFreeTrial: () => Bo,
        startShowingPremiumEmblems: () => Go,
        t: () => Mr,
        toggleAutocomplete: () => $r,
        toggleAutocorrect: () => Wr,
        toggleDefs: () => zr,
        toggleField: () => Kr,
        toggleHotkeys: () => qr,
        toggleSite: () => Yr,
        updateDunningStatus: () => ko,
        updateSnippetsShortcutPopupCounter: () => ai,
        updateSubscriptionStatus: () => Ao
    });
    var i = {};
    n.r(i), n.d(i, {
        enableOnceClickToRun: () => li,
        setActiveTab: () => ci,
        t: () => ui
    });
    var s = {};
    n.r(s), n.d(s, {
        incFixed: () => mi,
        sessionInvalidate: () => gi,
        setGroups: () => pi,
        setSettings: () => hi,
        setUser: () => di,
        t: () => fi,
        updateGroups: () => vi
    });
    var a = {};
    n.r(a), n.d(a, {
        base: () => ap,
        button: () => op,
        header1: () => ep,
        header2: () => tp,
        header3: () => np,
        header3legacy: () => rp,
        header4: () => ip,
        header5: () => hp,
        lawyer: () => fp,
        p1: () => pp,
        paper: () => sp,
        score: () => lp,
        small: () => up,
        smallLight: () => cp,
        title: () => dp
    });
    var u = {};

    function c(e) {
        const t = [];
        let n;
        for (; !(n = e.next()).done;) t.push(n.value);
        return t
    }

    function l(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function f(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    n.r(u), n.d(u, {
        default: () => gv
    });
    const d = function() {
            const e = Object.prototype.toString;
            return "[object Arguments]" === e.call(arguments) ? function(t) {
                return "[object Arguments]" === e.call(t)
            } : function(e) {
                return l("callee", e)
            }
        }(),
        p = function() {
            const e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                t = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                n = function() {
                    return arguments.propertyIsEnumerable("length")
                }(),
                r = function(e, t) {
                    for (var n = 0; n < e.length;) {
                        if (e[n] === t) return !0;
                        n += 1
                    }
                    return !1
                };
            return "function" != typeof Object.keys || n ? function(o) {
                if (Object(o) !== o) return [];
                let i, s;
                const a = [],
                    u = n && d(o);
                for (i in o) !l(i, o) || u && "length" === i || (a[a.length] = i);
                if (e)
                    for (s = t.length - 1; s >= 0;) i = t[s], l(i, o) && !r(a, i) && (a[a.length] = i), s -= 1;
                return a
            } : function(e) {
                return Object(e) !== e ? [] : Object.keys(e)
            }
        }();

    function h(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
    }
    var g;

    function m(e) {
        return new Promise(((t, n) => Promise.resolve(e).then(n, t)))
    }! function(e) {
        function t(e) {
            return new Promise(e)
        }
        e.create = t, e.createCompletionSource = function() {
            let e, t;
            return {
                promise: new Promise(((n, r) => {
                    e = n, t = r
                })),
                resolve(t) {
                    e(t)
                },
                reject(e) {
                    t(e)
                }
            }
        }, e.sync = function(e) {
            return t(((t, n) => t(e())))
        }, e.delay = function(t) {
            return e.create((e => {
                setTimeout((() => {
                    e()
                }), t)
            }))
        }
    }(g || (g = {}));
    Error;
    const v = function e(t, n, r = [], o = []) {
        if (f(t, n)) return !0;
        if (h(t) !== h(n)) return !1;
        if (null == t || null == n) return !1;
        if ("function" == typeof t.equals || "function" == typeof n.equals) return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);
        switch (h(t)) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof t.constructor && "Promise" === function(e) {
                        const t = String(e).match(/^function (\w*)/);
                        return null == t ? "" : t[1]
                    }(t.constructor)) return t === n;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof t != typeof n || !f(t.valueOf(), n.valueOf())) return !1;
                break;
            case "Date":
                if (!f(t.valueOf(), n.valueOf())) return !1;
                break;
            case "Error":
                return t.name === n.name && t.message === n.message;
            case "RegExp":
                if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode) return !1;
                break;
            case "Map":
            case "Set":
                if (!e(c(t.entries()), c(n.entries()), r, o)) return !1;
                break;
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
        }
        const i = p(t);
        if (i.length !== p(n).length) return !1;
        let s = r.length - 1;
        for (; s >= 0;) {
            if (r[s] === t) return o[s] === n;
            s -= 1
        }
        for (r.push(t), o.push(n), s = i.length - 1; s >= 0;) {
            const a = i[s];
            if (!l(a, n) || !e(n[a], t[a], r, o)) return !1;
            s -= 1
        }
        return r.pop(), o.pop(), !0
    };

    function b(e, t) {
        return e.some((e => e === t)) ? t : void 0
    }
    class y extends Error {
        constructor(e) {
            super("Matching not exhaustive" + (e ? `: unexpected value ${e}` : ""))
        }
    }

    function _(e) {
        throw new y(e)
    }

    function E(e) {
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }

    function S(e, t) {
        try {
            return e()
        } catch (e) {
            return t(e)
        }
    }

    function w() {}

    function C(e) {
        return !!e
    }

    function T(e) {
        let t, n = !1;
        return (...r) => (n || (n = !0, t = e(...r)), t)
    }

    function O(e, t) {
        let n, r, o = !0;

        function i(e, n = []) {
            return o && (o = !1, r = g.createCompletionSource(), setTimeout((() => {
                try {
                    r.resolve(t(...n))
                } catch (e) {
                    r.reject(e)
                } finally {
                    o = !0
                }
            }), e)), r.promise
        }
        return (...t) => {
            const r = n;
            return n = Date.now(), i(void 0 === r || n - r >= e ? 0 : e - (n - r), t)
        }
    }
    var N;
    ! function(e) {
        function t() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        e.create = function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(N || (N = {}));
    void 0 !== self.requestIdleCallback && self.requestIdleCallback;
    const x = S((() => browser), (() => self.browser));
    self.chrome = self.chrome;
    var k = function(e, t) {
        return (k = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, t)
    };

    function I(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        k(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var A = function() {
        return (A = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function P(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }

    function R(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(s, a)
            }
            u((r = r.apply(e, t || [])).next())
        }))
    }
    Object.create;
    Object.create;

    function L(e) {
        return "function" == typeof e
    }
    var D = !1,
        M = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(e) {
                e && (new Error).stack;
                D = e
            },
            get useDeprecatedSynchronousErrorHandling() {
                return D
            }
        };

    function U(e) {
        setTimeout((function() {
            throw e
        }), 0)
    }
    var F = {
            closed: !0,
            next: function(e) {},
            error: function(e) {
                if (M.useDeprecatedSynchronousErrorHandling) throw e;
                U(e)
            },
            complete: function() {}
        },
        j = function() {
            return Array.isArray || function(e) {
                return e && "number" == typeof e.length
            }
        }();

    function B(e) {
        return null !== e && "object" == typeof e
    }
    var G = function() {
            function e(e) {
                return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                    return t + 1 + ") " + e.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        H = function() {
            function e(e) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
            }
            return e.prototype.unsubscribe = function() {
                var t;
                if (!this.closed) {
                    var n = this,
                        r = n._parentOrParents,
                        o = n._ctorUnsubscribe,
                        i = n._unsubscribe,
                        s = n._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof e) r.remove(this);
                    else if (null !== r)
                        for (var a = 0; a < r.length; ++a) {
                            r[a].remove(this)
                        }
                    if (L(i)) {
                        o && (this._unsubscribe = void 0);
                        try {
                            i.call(this)
                        } catch (e) {
                            t = e instanceof G ? z(e.errors) : [e]
                        }
                    }
                    if (j(s)) {
                        a = -1;
                        for (var u = s.length; ++a < u;) {
                            var c = s[a];
                            if (B(c)) try {
                                c.unsubscribe()
                            } catch (e) {
                                t = t || [], e instanceof G ? t = t.concat(z(e.errors)) : t.push(e)
                            }
                        }
                    }
                    if (t) throw new G(t)
                }
            }, e.prototype.add = function(t) {
                var n = t;
                if (!t) return e.EMPTY;
                switch (typeof t) {
                    case "function":
                        n = new e(t);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                            var r = n;
                            (n = new e)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.")
                }
                var o = n._parentOrParents;
                if (null === o) n._parentOrParents = this;
                else if (o instanceof e) {
                    if (o === this) return n;
                    n._parentOrParents = [o, this]
                } else {
                    if (-1 !== o.indexOf(this)) return n;
                    o.push(this)
                }
                var i = this._subscriptions;
                return null === i ? this._subscriptions = [n] : i.push(n), n
            }, e.prototype.remove = function(e) {
                var t = this._subscriptions;
                if (t) {
                    var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                }
            }, e.EMPTY = function(e) {
                return e.closed = !0, e
            }(new e), e
        }();

    function z(e) {
        return e.reduce((function(e, t) {
            return e.concat(t instanceof G ? t.errors : t)
        }), [])
    }
    var W = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }(),
        $ = function(e) {
            function t(n, r, o) {
                var i = e.call(this) || this;
                switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                    case 0:
                        i.destination = F;
                        break;
                    case 1:
                        if (!n) {
                            i.destination = F;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof t ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new V(i, n));
                            break
                        }
                        default:
                            i.syncErrorThrowable = !0, i.destination = new V(i, n, r, o)
                }
                return i
            }
            return I(t, e), t.prototype[W] = function() {
                return this
            }, t.create = function(e, n, r) {
                var o = new t(e, n, r);
                return o.syncErrorThrowable = !1, o
            }, t.prototype.next = function(e) {
                this.isStopped || this._next(e)
            }, t.prototype.error = function(e) {
                this.isStopped || (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
            }, t.prototype._next = function(e) {
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, t.prototype._unsubscribeAndRecycle = function() {
                var e = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
            }, t
        }(H),
        V = function(e) {
            function t(t, n, r, o) {
                var i, s = e.call(this) || this;
                s._parentSubscriber = t;
                var a = s;
                return L(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== F && (L((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = i, s._error = r, s._complete = o, s
            }
            return I(t, e), t.prototype.next = function(e) {
                if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    M.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                }
            }, t.prototype.error = function(e) {
                if (!this.isStopped) {
                    var t = this._parentSubscriber,
                        n = M.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                    else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : U(e), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw e;
                        U(e)
                    }
                }
            }, t.prototype.complete = function() {
                var e = this;
                if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return e._complete.call(e._context)
                        };
                        M.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, t.prototype.__tryOrUnsub = function(e, t) {
                try {
                    e.call(this._context, t)
                } catch (e) {
                    if (this.unsubscribe(), M.useDeprecatedSynchronousErrorHandling) throw e;
                    U(e)
                }
            }, t.prototype.__tryOrSetError = function(e, t, n) {
                if (!M.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    t.call(this._context, n)
                } catch (t) {
                    return M.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (U(t), !0)
                }
                return !1
            }, t.prototype._unsubscribe = function() {
                var e = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, e.unsubscribe()
            }, t
        }($);
    var q = function() {
        return "function" == typeof Symbol && Symbol.observable || "@@observable"
    }();

    function Y(e) {
        return e
    }

    function K() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Q(e)
    }

    function Q(e) {
        return 0 === e.length ? Y : 1 === e.length ? e[0] : function(t) {
            return e.reduce((function(e, t) {
                return t(e)
            }), t)
        }
    }
    var X = function() {
        function e(e) {
            this._isScalar = !1, e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var n = new e;
            return n.source = this, n.operator = t, n
        }, e.prototype.subscribe = function(e, t, n) {
            var r = this.operator,
                o = function(e, t, n) {
                    if (e) {
                        if (e instanceof $) return e;
                        if (e[W]) return e[W]()
                    }
                    return e || t || n ? new $(e, t, n) : new $(F)
                }(e, t, n);
            if (r ? o.add(r.call(o, this.source)) : o.add(this.source || M.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), M.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
            return o
        }, e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                M.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), ! function(e) {
                    for (; e;) {
                        var t = e,
                            n = t.closed,
                            r = t.destination,
                            o = t.isStopped;
                        if (n || o) return !1;
                        e = r && r instanceof $ ? r : null
                    }
                    return !0
                }(e) ? console.warn(t) : e.error(t)
            }
        }, e.prototype.forEach = function(e, t) {
            var n = this;
            return new(t = J(t))((function(t, r) {
                var o;
                o = n.subscribe((function(t) {
                    try {
                        e(t)
                    } catch (e) {
                        r(e), o && o.unsubscribe()
                    }
                }), r, t)
            }))
        }, e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e)
        }, e.prototype[q] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return 0 === e.length ? this : Q(e)(this)
        }, e.prototype.toPromise = function(e) {
            var t = this;
            return new(e = J(e))((function(e, n) {
                var r;
                t.subscribe((function(e) {
                    return r = e
                }), (function(e) {
                    return n(e)
                }), (function() {
                    return e(r)
                }))
            }))
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();

    function J(e) {
        if (e || (e = M.Promise || Promise), !e) throw new Error("no Promise impl found");
        return e
    }
    class Z {
        constructor(e, t, n = N.create(), r = e) {
            this._rpcMessageName = e, this._message = t, this._clientId = n, this._inboundMessageName = r, this.inbound = new X((e => {
                const t = t => {
                    t.clientId === this._clientId && e.next(t.data)
                };
                return this._message.on(this._inboundMessageName, t), () => this._message.off(this._inboundMessageName, t)
            })), this.outbound = e => {
                this._message.emitBackground(this._rpcMessageName, {
                    clientId: this._clientId,
                    data: e
                })
            }
        }
    }
    class ee extends class {
        constructor(e, t) {
            this._transport = e, this._log = t, this._calls = new Map, this._sub = this._transport.inbound.subscribe((e => {
                var t;
                const n = this._calls.get(e.id);
                if (n) try {
                    "err" in e ? n.reject(e.err) : n.resolve(e.res)
                } finally {
                    this._calls.delete(e.id)
                } else null === (t = this._log) || void 0 === t || t.warn(`received rpc call response for unregistered call ${e.id}`)
            })), this.api = new Proxy({}, {
                get: (e, t) => "then" === t ? void 0 : (...e) => this._handleCall(t, e)
            })
        }
        _handleCall(e, t) {
            let n = N.create();
            for (; this._calls.has(n);) n = N.create();
            const r = g.createCompletionSource();
            return this._calls.set(n, r), this._transport.outbound({
                id: n,
                method: e,
                args: t
            }), r.promise
        }
        dispose() {
            this._sub.unsubscribe()
        }
    } {
        constructor(e) {
            super(new Z("cs-to-bg-rpc-1557421403805", e))
        }
    }
    let te;

    function ne() {
        return void 0 === te && (te = !!document.querySelector(".popup"), self.IS_POPUP = te), te
    }
    n(93598);

    function re(e) {
        return Object.keys(e).map((t => [t, e[t]]))
    }
    const oe = e => e === Object(e) && !Array.isArray(e);

    function ie(e, t) {
        if (e) {
            if (-1 === t.indexOf(" ")) return e.classList.add(t); {
                const n = t.split(" ");
                for (let t = 0; t < n.length; t++) e.classList.add(n[t])
            }
        }
    }

    function se(e, t = null, n) {
        return this.addEventListener(e, t, n), {
            off: () => ae.apply(this, [e, t, n])
        }
    }

    function ae(e, t, n) {
        this.removeEventListener(e, t || null, n)
    }

    function ue(...e) {
        return e.reduce(((e, t) => e.concat(oe(t) ? Object.keys(t).filter((e => t[e])) : t)), []).filter((e => Boolean(e))).join(" ")
    }

    function ce(e, t = {}) {
        const n = document.createEvent("CustomEvent");
        n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n)
    }
    n(39335);

    function le() {
        return self.chrome && self.chrome.runtime && self.chrome.runtime.lastError
    }

    function fe(e, t) {
        const n = fe.items = fe.items || {},
            r = n[e];
        if (r || t) {
            if (r && !t) return clearTimeout(r), void delete n[e];
            ! function() {
                function r() {
                    o(), e()
                }

                function o() {
                    const o = setTimeout(r, t);
                    n[e] = o
                }
                o()
            }()
        }
    }

    function de() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function pe() {
        return de() + de() + "-" + de() + "-" + de() + "-" + de() + "-" + de() + de() + de()
    }

    function he(e) {
        return new Promise((t => setTimeout(t, e)))
    }! function(e) {
        e.items = {}
    }(fe || (fe = {}));
    const ge = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function me(e, t = 10) {
        setTimeout(e, t)
    }
    new RegExp(String.fromCharCode(160), "g"), String.fromCharCode(160), new RegExp("\n" + String.fromCharCode(32), "g");
    const ve = pe();

    function be(e, t, n, r, o = !1) {
        if (null == e) return;
        const i = e;
        if ("string" != typeof t) return Object.keys(t).forEach((e => {
            t[e] && be(i, e, t[e], r)
        })); {
            if (!n) return;
            const e = i[ve] || [];
            return i[ve] = e, r ? (i[ve] = e.filter((e => !(e.event === t && e.cb === n))), i.removeEventListener(t, n, o)) : (e.push({
                event: t,
                cb: n
            }), i.addEventListener(t, n, o)), {
                el: i,
                event: t,
                cb: n,
                bubble: o
            }
        }
    }
    class ye extends Error {
        constructor(e) {
            super(`Assertion failed: ${e?"string"==typeof e?e:e():"(unnamed)"}`)
        }
    }

    function _e(e, t) {
        if (null == e) throw new ye((() => t ? `Expected ${t} to be non-null` : "Expected non-null"));
        return e
    }
    var Ee, Se, we, Ce, Te, Oe, Ne, xe, ke, Ie, Ae, Pe, Re, Le, De;

    function Me(e, t) {
        return e.filter((e => !!e)).join(t)
    }! function(e) {
        const t = {
            chrome: "chromeExt",
            firefox: "firefoxExt",
            safari: "safariExt",
            edge: "chromiumEdgeExt"
        };
        e.create = function(e, n) {
            return {
                appName: _e(t[e], "gnar app name"),
                url: `https://gnar.${n}`,
                domain: `.${n}`,
                sendEmailInfoTracking: !0,
                sendFluidExperimentData: !1
            }
        }
    }(Ee || (Ee = {})),
    function(e) {
        const t = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        };
        e.create = function(e, n) {
            return {
                appName: _e(t[e], "felog app name"),
                sendUsageMetrics: !0,
                sendPerfMetricsType: "dev" === n ? "local" : Math.random() <= .01 ? "send" : "off"
            }
        }
    }(Se || (Se = {})),
    function(e) {
        e.create = function() {
            return {}
        }
    }(we || (we = {})),
    function(e) {
        e.create = function(e) {
            return {
                urls: {
                    fetchMessages: `${e}/api/v1/messages`,
                    acknowledgeMessage: `${e}/api/v1/messages/acknowledge`,
                    dismissMessage: `${e}/api/v1/messages/dismiss`
                }
            }
        }
    }(Ce || (Ce = {})),
    function(e) {
        e.create = function(e, t, n, r, o, i) {
            const s = "safari" === e ? "disableAppsPromotion=true" : "";

            function a(e) {
                const n = `https://${e}.${t}`;
                return (e = "", t = "") => {
                    const r = Me([s, t], "&");
                    return Me([n + e, r], "?")
                }
            }
            const u = a("www"),
                c = a("app"),
                l = a("account"),
                f = a("redirect"),
                d = `https://data.${t}`,
                p = `https://auth.${t}/v3`,
                h = `wss://capi.${t}/freews`,
                g = `https://goldengate.${t}/snippets/v1/snippets`;
            return {
                accountSubscription: l("/subscription"),
                accountSubscriptionChangePlan: l("/subscription", "popup=switchToAnnualOffer"),
                accountSubscriptionAddBillingInfo: l("/subscription", "popup=add_billing_info"),
                adminAccountSubscription: l("/admin/subscription"),
                app: c(),
                appPersonalDictionary: l("/customize"),
                capi: h,
                capiGDocs: `wss://capi.${t}/gdocs`,
                dapiMimic: `${d}/api/mimic`,
                dapiProps: `${d}/api/props/v2`,
                dapiFindProps: `${d}/api/props/v2/find`,
                editorDictionary: c("/profile/dictionary"),
                dictionary: `https://capi.${t}/api/defs`,
                docs: c("/docs"),
                docsApi: `https://dox.${t}/documents`,
                newDoc: c("/docs/new"),
                userOrAnonymous: `${p}/user/oranonymous`,
                userData: `${p}/user/userdata`,
                authSignin: `${p}/api/login`,
                authSignup: `${p}/api/signup`,
                authExchange: `${p}/api/unified-login/code/exchange`,
                authLogout: `${p}/logout`,
                signin: u("/signin"),
                signup: u("/signup"),
                fbSignin: u("/signin", "fromExtensionFb=true"),
                fbSignup: u("/signup", "fromExtensionFb=true"),
                googleSignin: u("/signin", "fromExtensionGoogle=true"),
                googleSignup: u("/signup", "fromExtensionGoogle=true"),
                resetPassword: u("/resetpassword"),
                newFelog: n,
                sumoLogic: r,
                boomerangReviewerUI: u("/boomerang?linkId="),
                welcomeC: u("/extension-success"),
                afterInstall: u("/after_install_page/"),
                upgrade: u("/upgrade"),
                planComparison: u("/plans"),
                businessEHomepage: u("/business/e"),
                businessPricing: u("/business/pricing"),
                uninstall: u("/extension-uninstall"),
                terms: u("/terms"),
                policy: u("/privacy-policy"),
                californiaPolicy: u("/privacy-policy#for-california-users"),
                extensionSuccess: u("/extension-success"),
                firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                dynamicConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/dynamicConfig.json",
                pageConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/browserplugin/config.json",
                edgePopupUrl: o,
                emptyScriptUrl: i,
                grammarlyDomain: t,
                grammarlyProtocol: "https:",
                redirect: f("/redirect"),
                snippetsApi: g,
                snippetsNew: l("/admin/snippets", "action=create"),
                snippetsAdmin: l("/admin/snippets"),
                snippetsSettings: l("/customize/snippets"),
                suggestionsSettings: l("/customize/suggestions"),
                allSettings: l()
            }
        }
    }(Te || (Te = {})),
    function(e) {
        e.create = function(e) {
            return {
                gdocsSupported: "chrome" === e || "edge" === e || "firefox" === e || "safari" === e,
                denaliEditorSupported: "chrome" === e
            }
        }
    }(Oe || (Oe = {})),
    function(e) {
        const t = "grammarly.com",
            n = "qagr.io";
        e.create = function(e, r, o, i) {
            const s = (e, t, n) => "prod" === r ? e : "qa" === r ? t : "dev" === r ? n : _(r),
                a = "https://127.0.0.1:8000",
                u = s("https://f-log-extension.grammarly.io", a, a),
                c = s("https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==", a, a),
                l = s(t, n, n),
                f = "https://chipmunk.grammarly.com",
                d = s(f, f, f);
            return {
                url: Te.create(e, "grammarly.com", u, c, o, i),
                gnar: Ee.create(e, l),
                felog: Se.create(e, r),
                capi: we.create(),
                chipmunk: Ce.create(d),
                extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                newsVersion: 0,
                features: Oe.create(e)
            }
        }
    }(Ne || (Ne = {})),
    function(e) {
        e.create = function(e, t, n, r, o, i, s, a) {
            const u = void 0 !== i && void 0 !== s ? i : "UNVERSIONED",
                c = `${e}.${t}.${n}`;
            return {
                version: c,
                fullVersion: `${c}-${[r,["prod"!==o?o:null,u!==r?u:null].filter((e=>!!e)).join(".")].filter((e=>""!==e)).join("/")}`,
                commitHash: s,
                gitBranch: i,
                manifestVersion: a
            }
        }, e.getManifestVersion = function(e, t, n) {
            switch (e) {
                case "safari":
                    switch (t) {
                        case "bg":
                        case "popup":
                            return n.safari.extension.displayVersion;
                        default:
                            return
                    }
                    case "chrome":
                    case "edge":
                        return n.chrome.runtime.getManifest().version;
                    case "firefox":
                        return x.runtime.getManifest().version;
                    default:
                        return _(e)
            }
        }
    }(xe || (xe = {})),
    function(e) {
        e.create = function(e) {
            return b(["chrome", "safari", "firefox", "edge"], e)
        }, e.isValidTargetBrowser = function(e) {
            return ["chrome", "safari", "firefox", "edge"].includes(e)
        }, e.detect = function(e) {
            return e.chrome && /google/i.test(e.navigator.vendor) ? e.navigator.appVersion.indexOf("Edg") > -1 ? "edge" : "chrome" : -1 !== e.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(e.navigator.userAgent) ? "safari" : void 0
        }
    }(ke || (ke = {})),
    function(e) {
        e.create = function(e) {
            return b(["dev", "prod", "qa"], e)
        }
    }(Ie || (Ie = {})),
    function(e) {
        e.create = function(e) {
            return b(["bg", "cs", "popup"], e)
        }, e.detect = function(e, t) {
            const n = !!e.IS_BG,
                r = "safari" === t ? function() {
                    try {
                        return e.safari.extension.globalPage.contentWindow !== e
                    } catch (e) {
                        return !1
                    }
                }() : !!e.IS_POPUP;
            return n ? "bg" : r ? "popup" : "cs"
        }
    }(Ae || (Ae = {})),
    function(e) {
        e.create = function(e, t, n) {
            return {
                browser: e,
                env: t,
                context: n
            }
        }
    }(Pe || (Pe = {})),
    function(e) {
        e.create = function(e) {
            return {
                type: ke.detect(e) || "other"
            }
        }
    }(Re || (Re = {})),
    function(e) {
        e.create = function(e) {
            return {
                isWindows: -1 !== e.navigator.appVersion.indexOf("Win"),
                isMac: -1 !== e.navigator.appVersion.indexOf("Mac"),
                isChromeOS: -1 !== e.navigator.appVersion.indexOf("CrOS")
            }
        }
    }(Le || (Le = {})),
    function(e) {
        e.create = function(e) {
            return {
                browser: Re.create(e),
                os: Le.create(e)
            }
        }
    }(De || (De = {}));
    var Ue, Fe, je = n(27061);
    ! function(e) {
        function t(e, t, n, r, o, i, s, a, u) {
            return {
                env: e,
                major_number: t,
                build_number: n,
                release_number: r,
                git_branch: o,
                git_commit: i,
                edge_popup_url: s,
                empty_script_url: a,
                manifest_version: u
            }
        }
        e.create = t, e.fromBrowserify = function() {
            return t("prod", "14", "1012", "0", "UNVERSIONED", "UNVERSIONED", je.env.EDGE_POPUP_URL, je.env.EDGE_EMPTY_SCRIPT_URL, "2")
        }
    }(Ue || (Ue = {})),
    function(e) {
        e.getTargetEnv = function(e) {
            if (!e.env) throw new Error("processEnv.env is null or undefined");
            const t = Ie.create(e.env);
            if (!t) throw new Error(`Invalid processEnv.env: ${e.env}`);
            return t
        }, e.create = function(e, t, n, r) {
            const o = [n.major_number, n.build_number, n.release_number].map(E);
            let i;
            if (3 === o.length && o.every((e => void 0 !== e))) i = o;
            else {
                let n;
                try {
                    n = xe.getManifestVersion(e, t, self)
                } catch (e) {}
                const r = (n || "").split(".").map(E);
                i = 3 === r.length && r.every((e => void 0 !== e)) ? r : [0, 0, 0]
            }
            const [s, a, u] = i;
            return {
                buildInfo: xe.create(s, a, u, e, r, n.git_branch, n.git_commit, n.manifest_version),
                bundleInfo: Pe.create(e, r, t),
                appConfig: Ne.create(e, r, n.edge_popup_url, n.empty_script_url),
                systemInfo: De.create(self)
            }
        }
    }(Fe || (Fe = {}));
    const Be = new class {
        constructor(e) {
            this._getFallbackValue = e
        }
        init(e) {
            if (void 0 !== this._value) throw new Error("Global value already initialized.");
            this._value = e
        }
        get() {
            if (void 0 === this._value) {
                if (void 0 === this._getFallbackValue) throw new Error("Global value not initialized and no fallback value provided.");
                this._value = this._getFallbackValue()
            }
            return this._value
        }
    }((() => {
        throw new Error("Global config not initialized")
    }));
    let Ge = () => Be.get();

    function He() {
        return Ge()
    }

    function ze() {
        return "firefox" === He().bundleInfo.browser
    }

    function We() {
        return "chrome" === He().bundleInfo.browser
    }

    function $e() {
        return "safari" === He().bundleInfo.browser
    }

    function Ve() {
        return "edge" === He().bundleInfo.browser
    }

    function qe() {
        return We() || Ve()
    }

    function Ye() {
        return He().systemInfo.os.isWindows
    }

    function Ke() {
        return "bg" === He().bundleInfo.context
    }

    function Qe() {
        return He().bundleInfo.browser
    }

    function Xe() {
        return He().bundleInfo.env
    }

    function Je() {
        return He().appConfig.url
    }

    function Ze() {
        return He().appConfig.gnar.appName
    }

    function et(e = "/") {
        return `https://${He().appConfig.url.grammarlyDomain}${e}`
    }
    var tt;
    ! function(e) {
        e.TRACE = "TRACE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e.FATAL = "FATAL"
    }(tt || (tt = {}));
    const nt = {
        [tt.TRACE]: 1,
        [tt.DEBUG]: 2,
        [tt.INFO]: 3,
        [tt.WARN]: 4,
        [tt.ERROR]: 5,
        [tt.FATAL]: 6
    };

    function rt(e) {
        return nt[e] || 0
    }
    class ot {
        constructor(e) {
            this.name = e, this._isError = e => {
                const t = e;
                return t && (void 0 !== t.message && void 0 !== t.name || void 0 !== t.stack)
            }
        }
        trace(e, t, n) {
            this._logMessage(tt.TRACE, e, t, n)
        }
        debug(e, t, n) {
            this._logMessage(tt.DEBUG, e, t, n)
        }
        info(e, t, n) {
            this._logMessage(tt.INFO, e, t, n)
        }
        warn(e, t, n) {
            this._logMessage(tt.WARN, e, t, n)
        }
        error(e, t, n) {
            this._logMessage(tt.ERROR, e, t, n)
        }
        fatal(e, t, n) {
            this._logMessage(tt.FATAL, e, t, n)
        }
        _logMessage(e, t, n, r) {
            const o = {
                level: e,
                loggerName: this.name,
                message: t,
                timestamp: new Date
            };
            n && (this._isError(n) ? o.exception = n : o.data = n), o.data = o.data || r, this.handleEvent(o)
        }
    }
    class it {
        constructor(e, t) {
            this.name = e, this._createLogger = t
        }
        trace(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(e, t, n)
        }
        debug(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(e, t, n)
        }
        info(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(e, t, n)
        }
        warn(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(e, t, n)
        }
        error(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(e, t, n)
        }
        fatal(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(e, t, n)
        }
    }
    class st {
        constructor(e) {
            if (this.capacity = e, this._start = 0, this._end = 0, this._isFull = !1, e <= 0) throw new Error("Invalid capacity " + e);
            this._buffer = new Array(e)
        }
        get size() {
            return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length
        }
        get isEmpty() {
            return 0 === this.size
        }
        get isFull() {
            return this._isFull
        }
        get head() {
            return this.isEmpty ? null : this._buffer[this._start]
        }
        get tail() {
            return this.isEmpty ? null : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1]
        }
        enqueue(e) {
            let t = null;
            return this.isFull && (t = this._buffer[this._start], this._startInc()), this._buffer[this._end] = e, this._endInc(), this._start === this._end && (this._isFull = !0), t
        }
        dequeue() {
            if (this.isEmpty) return null;
            const e = this._buffer[this._start];
            return this._buffer[this._start] = null, this._startInc(), this._isFull = !1, e
        }
        delete(e) {
            const t = this._buffer.indexOf(e);
            if (t >= 0) {
                if (t < this._end) {
                    for (let e = t; e < this._end - 1; e++) this._buffer[e] = this._buffer[e + 1];
                    this._buffer[--this._end] = null
                } else {
                    for (let e = this._start; e < t; e++) this._buffer[e + 1] = this._buffer[e];
                    this._buffer[this._start] = null, this._startInc()
                }
                return this._isFull = !1, !0
            }
            return !1
        }
        _startInc() {
            this._start++, this._start === this.capacity && (this._start = 0)
        }
        _endInc() {
            this._end++, this._end === this.capacity && (this._end = 0)
        }
        clear() {
            this._buffer = new Array(this.capacity), this._start = this._end = 0, this._isFull = !1
        }
        toArray() {
            let e;
            if (this.isEmpty) e = [];
            else if (this._start < this._end) e = this._buffer.slice(this._start, this._end);
            else {
                e = new Array(this.size);
                let t = 0;
                for (let n = this._start; n < this.capacity; ++n, ++t) e[t] = this._buffer[n];
                for (let n = 0; n < this._end; ++n, ++t) e[t] = this._buffer[n]
            }
            return e
        }
    }
    let at;
    class ut extends ot {
        constructor(e, t, n) {
            super(e), this._config = t, this._historyArgs = n, this._historyEnabled = () => {
                var e;
                return Boolean("prod" !== Xe() || (null === (e = this._historyArgs.enabledInProd) || void 0 === e ? void 0 : e.get()))
            }, this._setupHistoryDownload = () => {
                var e;
                void 0 === at && (at = new st(null !== (e = this._historyArgs.maxEventsToStore) && void 0 !== e ? e : 1e3), self.GRDownloadReport = () => {
                    var e, t, n;
                    if (this._historyEnabled()) {
                        const r = e => {
                                try {
                                    return JSON.stringify(e)
                                } catch (t) {
                                    return `${e}`
                                }
                            },
                            o = [
                                ["Level", "Logger", "Timestamp", "Message"].join("\t"), ...at.toArray().map((e => {
                                    const t = [e.level, e.loggerName, e.timestamp.toISOString(), e.message];
                                    return e.data && t.push(r(e.data)), e.exception && t.push(r(e.exception)), t.join("\t")
                                }))
                            ].join("\n");
                        if (self.document) {
                            const t = self.document.createElement("a");
                            t.href = "data:application/octet-stream," + encodeURIComponent(o), t.target = "_blank", t.download = null !== (e = this._historyArgs.downloadFileName) && void 0 !== e ? e : "grammarly-logs.tsv", t.click()
                        }
                        null === (n = (t = this._historyArgs).onDownload) || void 0 === n || n.call(t)
                    }
                })
            }, this._setupHistoryDownload()
        }
        handleEvent(e) {
            this._config.filterFn(e) && this._config.writer.write(e), this._historyEnabled() && (null == at || at.enqueue(e))
        }
    }

    function ct(e) {
        return new Proxy({}, {
            get(t, n) {
                const r = e[n];
                return r && "function" == typeof r ? r.bind(e) : void 0
            }
        })
    }
    class lt {
        constructor() {
            this._writeFunc = lt._commonWriteFunc
        }
        write(e) {
            try {
                const t = [`grm ${e.level} 【${e.loggerName}】░░ ${e.message}`];
                e.data && t.push(e.data), e.exception && t.push(e.exception), this._writeFunc[e.level].apply(null, t)
            } catch (e) {}
        }
    }
    lt._commonWriteFunc = function() {
        const {
            log: e,
            info: t,
            warn: n,
            error: r
        } = ct(console);
        return {
            [tt.TRACE]: e,
            [tt.DEBUG]: e,
            [tt.INFO]: t,
            [tt.WARN]: n,
            [tt.ERROR]: r,
            [tt.FATAL]: r
        }
    }();
    var ft = function() {
            function e() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        dt = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.subject = t, r.subscriber = n, r.closed = !1, r
            }
            return I(t, e), t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                        t = e.observers;
                    if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                        var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                    }
                }
            }, t
        }(H),
        pt = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.destination = t, n
            }
            return I(t, e), t
        }($),
        ht = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }
            return I(t, e), t.prototype[W] = function() {
                return new pt(this)
            }, t.prototype.lift = function(e) {
                var t = new gt(this, this);
                return t.operator = e, t
            }, t.prototype.next = function(e) {
                if (this.closed) throw new ft;
                if (!this.isStopped)
                    for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e)
            }, t.prototype.error = function(e) {
                if (this.closed) throw new ft;
                this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
                this.observers.length = 0
            }, t.prototype.complete = function() {
                if (this.closed) throw new ft;
                this.isStopped = !0;
                for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                this.observers.length = 0
            }, t.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, t.prototype._trySubscribe = function(t) {
                if (this.closed) throw new ft;
                return e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function(e) {
                if (this.closed) throw new ft;
                return this.hasError ? (e.error(this.thrownError), H.EMPTY) : this.isStopped ? (e.complete(), H.EMPTY) : (this.observers.push(e), new dt(this, e))
            }, t.prototype.asObservable = function() {
                var e = new X;
                return e.source = this, e
            }, t.create = function(e, t) {
                return new gt(e, t)
            }, t
        }(X),
        gt = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.destination = t, r.source = n, r
            }
            return I(t, e), t.prototype.next = function(e) {
                var t = this.destination;
                t && t.next && t.next(e)
            }, t.prototype.error = function(e) {
                var t = this.destination;
                t && t.error && this.destination.error(e)
            }, t.prototype.complete = function() {
                var e = this.destination;
                e && e.complete && this.destination.complete()
            }, t.prototype._subscribe = function(e) {
                return this.source ? this.source.subscribe(e) : H.EMPTY
            }, t
        }(ht),
        mt = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._value = t, n
            }
            return I(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._subscribe = function(t) {
                var n = e.prototype._subscribe.call(this, t);
                return n && !n.closed && t.next(this._value), n
            }, t.prototype.getValue = function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new ft;
                return this._value
            }, t.prototype.next = function(t) {
                e.prototype.next.call(this, this._value = t)
            }, t
        }(ht);

    function vt() {}

    function bt(e, t, n) {
        return function(r) {
            return r.lift(new yt(e, t, n))
        }
    }
    var yt = function() {
            function e(e, t, n) {
                this.nextOrObserver = e, this.error = t, this.complete = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new _t(e, this.nextOrObserver, this.error, this.complete))
            }, e
        }(),
        _t = function(e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i._tapNext = vt, i._tapError = vt, i._tapComplete = vt, i._tapError = r || vt, i._tapComplete = o || vt, L(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || vt, i._tapError = n.error || vt, i._tapComplete = n.complete || vt), i
            }
            return I(t, e), t.prototype._next = function(e) {
                try {
                    this._tapNext.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                try {
                    this._tapError.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.error(e)
            }, t.prototype._complete = function() {
                try {
                    this._tapComplete.call(this._context)
                } catch (e) {
                    return void this.destination.error(e)
                }
                return this.destination.complete()
            }, t
        }($);

    function Et() {
        return function(e) {
            return e.lift(new St(e))
        }
    }
    var St = function() {
            function e(e) {
                this.connectable = e
            }
            return e.prototype.call = function(e, t) {
                var n = this.connectable;
                n._refCount++;
                var r = new wt(e, n),
                    o = t.subscribe(r);
                return r.closed || (r.connection = n.connect()), o
            }, e
        }(),
        wt = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.connectable = n, r
            }
            return I(t, e), t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (e._refCount = t - 1, t > 1) this.connection = null;
                    else {
                        var n = this.connection,
                            r = e._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, t
        }($),
        Ct = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }
            return I(t, e), t.prototype._subscribe = function(e) {
                return this.getSubject().subscribe(e)
            }, t.prototype.getSubject = function() {
                var e = this._subject;
                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, t.prototype.connect = function() {
                var e = this._connection;
                return e || (this._isComplete = !1, (e = this._connection = new H).add(this.source.subscribe(new Ot(this.getSubject(), this))), e.closed && (this._connection = null, e = H.EMPTY)), e
            }, t.prototype.refCount = function() {
                return Et()(this)
            }, t
        }(X),
        Tt = function() {
            var e = Ct.prototype;
            return {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: e._subscribe
                },
                _isComplete: {
                    value: e._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: e.getSubject
                },
                connect: {
                    value: e.connect
                },
                refCount: {
                    value: e.refCount
                }
            }
        }(),
        Ot = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.connectable = n, r
            }
            return I(t, e), t.prototype._error = function(t) {
                this._unsubscribe(), e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(pt);
    var Nt = function() {
        function e(e, t) {
            this.subjectFactory = e, this.selector = t
        }
        return e.prototype.call = function(e, t) {
            var n = this.selector,
                r = this.subjectFactory(),
                o = n(r).subscribe(e);
            return o.add(t.subscribe(r)), o
        }, e
    }();

    function xt() {
        return new ht
    }

    function kt() {
        return function(e) {
            return Et()((t = xt, function(e) {
                var r;
                if (r = "function" == typeof t ? t : function() {
                        return t
                    }, "function" == typeof n) return e.lift(new Nt(r, n));
                var o = Object.create(e, Tt);
                return o.source = e, o.subjectFactory = r, o
            })(e));
            var t, n
        }
    }

    function It(e, t) {
        return function(n) {
            return n.lift(new Lt(e, t))
        }
    }
    var At, Pt, Rt, Lt = function() {
            function e(e, t) {
                this.predicate = e, this.thisArg = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Dt(e, this.predicate, this.thisArg))
            }, e
        }(),
        Dt = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.predicate = n, o.thisArg = r, o.count = 0, o
            }
            return I(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.predicate.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t && this.destination.next(e)
            }, t
        }($);

    function Mt(e, t) {
        return function(n, r) {
            return t(n(e(r)), r)
        }
    }

    function Ut(e) {
        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
        return n
    }

    function Ft(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function jt(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }! function(e) {
        e.optic = function(e, t) {
            return {
                get: e,
                set: t,
                modify: Mt(e, t)
            }
        }
    }(At || (At = {})),
    function(e) {
        e.create = function e(t, n) {
            return {
                get: t,
                set: n,
                modify: Mt(t, n),
                compose: function(r) {
                    return e((function(e) {
                        var n = t(e);
                        return void 0 !== n ? r.get(n) : void 0
                    }), (function(e, o) {
                        var i = t(o);
                        return void 0 !== i ? n(r.set(e, i), o) : o
                    }))
                }
            }
        }
    }(Pt || (Pt = {})),
    function(e) {
        function t(e, n) {
            return {
                get: e,
                set: n,
                modify: Mt(e, n),
                compose: function(r) {
                    return t((function(t) {
                        return r.get(e(t))
                    }), (function(t, o) {
                        return n(r.set(t, e(o)), o)
                    }))
                }
            }
        }
        e.create = t, e.compose = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
            if (1 === e.length) return e[0];
            var n = e[0];
            return e.slice(1).forEach((function(e) {
                n = n.compose(e)
            })), n
        };
        var n = t((function(e) {
            return e
        }), (function(e, t) {
            return e
        }));
        e.identity = function() {
            return n
        };
        var r = Pt.create((function(e) {}), (function(e, t) {
            return t
        }));
        e.nothing = function() {
            return r
        }
    }(Rt || (Rt = {}));
    var Bt, Gt, Ht, zt, Wt = function() {
            var e = Object.prototype.toString;
            return "[object Arguments]" === e.call(arguments) ? function(t) {
                return "[object Arguments]" === e.call(t)
            } : function(e) {
                return Ft("callee", e)
            }
        }(),
        $t = (Bt = !{
            toString: null
        }.propertyIsEnumerable("toString"), Gt = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Ht = function() {
            return arguments.propertyIsEnumerable("length")
        }(), zt = function(e, t) {
            for (var n = 0; n < e.length;) {
                if (e[n] === t) return !0;
                n += 1
            }
            return !1
        }, "function" != typeof Object.keys || Ht ? function(e) {
            if (Object(e) !== e) return [];
            var t, n, r = [],
                o = Ht && Wt(e);
            for (t in e) !Ft(t, e) || o && "length" === t || (r[r.length] = t);
            if (Bt)
                for (n = Gt.length - 1; n >= 0;) Ft(t = Gt[n], e) && !zt(r, t) && (r[r.length] = t), n -= 1;
            return r
        } : function(e) {
            return Object(e) !== e ? [] : Object.keys(e)
        });

    function Vt(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
    }

    function qt(e, t, n, r) {
        if (void 0 === n && (n = []), void 0 === r && (r = []), jt(e, t)) return !0;
        if (Vt(e) !== Vt(t)) return !1;
        if (null == e || null == t) return !1;
        if ("function" == typeof e.equals || "function" == typeof t.equals) return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
        switch (Vt(e)) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof e.constructor && "Promise" === function(e) {
                        var t = String(e).match(/^function (\w*)/);
                        return null == t ? "" : t[1]
                    }(e.constructor)) return e === t;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof e != typeof t || !jt(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Date":
                if (!jt(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Error":
                return e.name === t.name && e.message === t.message;
            case "RegExp":
                if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) return !1;
                break;
            case "Map":
            case "Set":
                if (!qt(Ut(e.entries()), Ut(t.entries()), n, r)) return !1;
                break;
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
        }
        var o = $t(e);
        if (o.length !== $t(t).length) return !1;
        for (var i = n.length - 1; i >= 0;) {
            if (n[i] === e) return r[i] === t;
            i -= 1
        }
        for (n.push(e), r.push(t), i = o.length - 1; i >= 0;) {
            var s = o[i];
            if (!Ft(s, t) || !qt(t[s], e[s], n, r)) return !1;
            i -= 1
        }
        return n.pop(), r.pop(), !0
    }
    var Yt = void 0 !== n(27061) && !1;

    function Kt(e, t, n) {
        if (e in n && qt(t, n[e])) return n;
        var r = {};
        for (var o in n) r[o] = n[o];
        return r[e] = t, r
    }

    function Qt(e) {
        return function(t, n) {
            return function(e, t) {
                return qt(e, t) ? t : e
            }(e(t, n), n)
        }
    }

    function Xt(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + e);
        try {
            throw new Error(e)
        } catch (e) {}
    }

    function Jt(e) {
        return "string" == typeof e ? e : void 0 !== e.displayName ? e.displayName : void 0 !== e.name ? e.name : e.constructor && void 0 !== e.constructor.name ? e.constructor.name : void 0
    }
    var Zt = new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
    new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "(\\$_\\$wf\\(\\d+\\);)?", "return\\s", "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));

    function en(e) {
        return function(e) {
            var t = Zt,
                n = e.match(t);
            if (n && n[2]) return n[2].split(".");
            throw new TypeError('Expected a property expression, got "' + e + '".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"')
        }(e.toString())
    }

    function tn(e) {
        return void 0 === e ? function(e) {
            return Rt.create((function(t) {
                return t[e]
            }), (function(t, n) {
                return Kt(e, t, n)
            }))
        } : Rt.create((function(t) {
            return t[e]
        }), (function(t, n) {
            return Kt(e, t, n)
        }))
    }
    var nn = 0;

    function rn(e) {
        return e && "function" == typeof e.schedule
    }
    Rt.key = tn, Rt.prop = function(e) {
        var t = en(e);
        return Yt && function(e) {
            if (nn < 10) {
                nn++;
                var t = "x." + e.join("."),
                    n = "'" + e.join("', '") + "'";
                Xt("The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => " + t + ") to a.lens(" + n + "),\n  Lens.prop((x: T) => " + t + ") to Lens.key<T>()(" + n + ").")
            }
        }(t), Rt.compose.apply(Rt, t.map(tn()))
    }, Rt.index = function(e) {
        if (e < 0) throw new TypeError(e + " is not a valid array index, expected >= 0");
        return Pt.create((function(t) {
            return t[e]
        }), (function(t, n) {
            return n.length <= e ? n.concat(Array(e - n.length), [t]) : qt(t, n[e]) ? n : n.slice(0, e).concat([t], n.slice(e + 1))
        }))
    }, Rt.withDefault = function(e) {
        return Rt.replace(void 0, e)
    }, Rt.replace = function(e, t) {
        return Rt.create((function(n) {
            return qt(n, e) ? t : n
        }), Qt((function(n) {
            return qt(n, t) ? e : n
        })))
    }, Rt.find = function(e) {
        return t = function(t) {
            var n = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return n;
                return -1
            }(t, e);
            return n < 0 ? Rt.nothing() : Rt.index(n)
        }, Rt.create((function(e) {
            return t(e).get(e)
        }), (function(e, n) {
            return t(n).set(e, n)
        }));
        var t
    };
    var on = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return I(t, e), t.prototype.notifyNext = function(e, t, n, r, o) {
                this.destination.next(t)
            }, t.prototype.notifyError = function(e, t) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function(e) {
                this.destination.complete()
            }, t
        }($),
        sn = function(e) {
            function t(t, n, r) {
                var o = e.call(this) || this;
                return o.parent = t, o.outerValue = n, o.outerIndex = r, o.index = 0, o
            }
            return I(t, e), t.prototype._next = function(e) {
                this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
            }, t.prototype._error = function(e) {
                this.parent.notifyError(e, this), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, t
        }($),
        an = function(e) {
            return function(t) {
                for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                t.complete()
            }
        };

    function un() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }
    var cn = un(),
        ln = function(e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

    function fn(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
    }
    var dn = function(e) {
        if (e && "function" == typeof e[q]) return r = e,
            function(e) {
                var t = r[q]();
                if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return t.subscribe(e)
            };
        if (ln(e)) return an(e);
        if (fn(e)) return n = e,
            function(e) {
                return n.then((function(t) {
                    e.closed || (e.next(t), e.complete())
                }), (function(t) {
                    return e.error(t)
                })).then(null, U), e
            };
        if (e && "function" == typeof e[cn]) return t = e,
            function(e) {
                for (var n = t[cn]();;) {
                    var r = void 0;
                    try {
                        r = n.next()
                    } catch (t) {
                        return e.error(t), e
                    }
                    if (r.done) {
                        e.complete();
                        break
                    }
                    if (e.next(r.value), e.closed) break
                }
                return "function" == typeof n.return && e.add((function() {
                    n.return && n.return()
                })), e
            };
        var t, n, r, o = B(e) ? "an invalid object" : "'" + e + "'";
        throw new TypeError("You provided " + o + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function pn(e, t, n, r, o) {
        if (void 0 === o && (o = new sn(e, n, r)), !o.closed) return t instanceof X ? t.subscribe(o) : dn(t)(o)
    }

    function hn(e, t) {
        return new X((function(n) {
            var r = new H,
                o = 0;
            return r.add(t.schedule((function() {
                o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete()
            }))), r
        }))
    }

    function gn(e, t) {
        return t ? hn(e, t) : new X(an(e))
    }
    var mn = {};

    function vn() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = void 0,
            r = void 0;
        return rn(e[e.length - 1]) && (r = e.pop()), "function" == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length && j(e[0]) && (e = e[0]), gn(e, r).lift(new _n(n))
    }
    var bn, yn, _n = function() {
            function e(e) {
                this.resultSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new En(e, this.resultSelector))
            }, e
        }(),
        En = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
            }
            return I(t, e), t.prototype._next = function(e) {
                this.values.push(mn), this.observables.push(e)
            }, t.prototype._complete = function() {
                var e = this.observables,
                    t = e.length;
                if (0 === t) this.destination.complete();
                else {
                    this.active = t, this.toRespond = t;
                    for (var n = 0; n < t; n++) {
                        var r = e[n];
                        this.add(pn(this, r, void 0, n))
                    }
                }
            }, t.prototype.notifyComplete = function(e) {
                0 == (this.active -= 1) && this.destination.complete()
            }, t.prototype.notifyNext = function(e, t, n) {
                var r = this.values,
                    o = r[n],
                    i = this.toRespond ? o === mn ? --this.toRespond : this.toRespond : 0;
                r[n] = t, 0 === i && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
            }, t.prototype._tryResultSelector = function(e) {
                var t;
                try {
                    t = this.resultSelector.apply(this, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(on),
        Sn = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        wn = function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var r = Array(e),
                o = 0;
            for (t = 0; t < n; t++)
                for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
            return r
        },
        Cn = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Sn(t, e), t.prototype.view = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return void 0 !== e[0] ? "function" == typeof e[0] ? new xn(this, e[0]) : "string" == typeof e[0] ? new xn(this, Rt.compose.apply(Rt, e.map(Rt.key())).get) : new xn(this, (function(t) {
                    return e[0].get(t)
                })) : this
            }, t
        }(mt),
        Tn = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Sn(t, e), t.prototype.set = function(e) {
                this.modify((function() {
                    return e
                }))
            }, t.prototype.lens = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return new Nn(this, "function" == typeof e ? Rt.prop(e) : "string" == typeof e ? Rt.compose.apply(Rt, wn([Rt.key(e)], t.map((function(e) {
                    return Rt.key(e)
                })))) : e, qt)
            }, t
        }(Cn),
        On = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return Sn(t, e), t.prototype.get = function() {
                return this.getValue()
            }, t.prototype.modify = function(e) {
                var t = this.getValue(),
                    n = e(t);
                qt(t, n) || this.next(n)
            }, t.prototype.set = function(e) {
                qt(this.getValue(), e) || this.next(e)
            }, t
        }(Tn),
        Nn = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = qt);
                var o = e.call(this, void 0) || this;
                return o._source = t, o._lens = n, o._eq = r, o._subscription = null, o._refCount = 0, o
            }
            return Sn(t, e), t.prototype.get = function() {
                return this._subscription ? this.getValue() : this._lens.get(this._source.get())
            }, t.prototype.modify = function(e) {
                var t = this;
                this._source.modify((function(n) {
                    return t._lens.modify(e, n)
                }))
            }, t.prototype.set = function(e) {
                var t = this;
                this._source.modify((function(n) {
                    return t._lens.set(e, n)
                }))
            }, t.prototype._onSourceValue = function(e) {
                var t = this.getValue(),
                    n = this._lens.get(e);
                this._eq(t, n) || this.next(n)
            }, t.prototype._subscribe = function(t) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(e) {
                    return n._onSourceValue(e)
                }))), this._refCount++;
                var r = new H((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(e.prototype._subscribe.call(this, t)), r
            }, t.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, e.prototype.unsubscribe.call(this)
            }, t
        }(Tn),
        xn = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = qt);
                var o = e.call(this, void 0) || this;
                return o._source = t, o._getter = n, o._eq = r, o._subscription = null, o._refCount = 0, o
            }
            return Sn(t, e), t.prototype.get = function() {
                return this._subscription ? this.getValue() : this._getter(this._source.get())
            }, t.prototype._onSourceValue = function(e) {
                var t = this.getValue(),
                    n = this._getter(e);
                this._eq(t, n) || this.next(n)
            }, t.prototype._subscribe = function(t) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(e) {
                    return n._onSourceValue(e)
                }))), this._refCount++;
                var r = new H((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(e.prototype._subscribe.call(this, t)), r
            }, t.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, e.prototype.unsubscribe.call(this)
            }, t
        }(Cn),
        kn = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = qt);
                var o = e.call(this, void 0) || this;
                return o._sources = t, o._combineFn = n, o._eq = r, o._subscription = null, o._refCount = 0, o
            }
            return Sn(t, e), t.prototype.get = function() {
                return this._subscription ? this.getValue() : this._combineFn(this._sources.map((function(e) {
                    return e.get()
                })))
            }, t.prototype._onSourceValues = function(e) {
                var t = this.getValue(),
                    n = this._combineFn(e);
                this._eq(t, n) || this.next(n)
            }, t.prototype._subscribe = function(t) {
                var n = this;
                this._subscription || (this._subscription = vn(this._sources).subscribe((function(e) {
                    return n._onSourceValues(e)
                }))), this._refCount++;
                var r = new H((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(e.prototype._subscribe.call(this, t)), r
            }, t.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, e.prototype.unsubscribe.call(this)
            }, t
        }(Cn);
    ! function(e) {
        e.create = function(e) {
            return new On(e)
        }, e.log = function(e, t) {
            var n = function(e, t, n) {
                    return console.log("%c" + e, "color: " + t + "; font-weight: bold", n)
                },
                r = e.get();
            return e.subscribe((function(e) {
                "function" == typeof t ? t(r, e) : (console.group("UPDATE " + (t ? "TYPE: " + t + " " : "") + "@ " + (new Date).toTimeString()), n("prev state", "#9E9E9E", r), n("next state", "#4CAF50", e), console.groupEnd()), r = e
            })), e
        }, e.combine = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new kn(e.slice(void 0, -1), (function(t) {
                return e[e.length - 1].apply(e, t)
            }))
        }, e.fromObservable = function(t) {
            var n = new mt(null),
                r = t.pipe(bt((function(t) {
                    var r = n.value;
                    null === r ? n.next(e.create(t)) : r.set(t)
                })), kt());
            return new X((function(e) {
                var t = new H;
                return t.add(n.pipe(It((function(e) {
                    return !!e
                }))).subscribe(e)), t.add(r.subscribe(void 0, (function(t) {
                    return e.error(t)
                }), (function() {
                    return e.complete()
                }))), t
            }))
        }
    }(bn || (bn = {}));
    class In {
        constructor(e, t = bn.create(!1)) {
            this._enableHistoryLoggerInProd = t;
            const n = e.testArgs,
                r = n && n.processEnv ? n.processEnv : Ue.fromBrowserify(),
                o = Fe.getTargetEnv(r),
                i = "prod" !== o || "cs" !== e.context,
                s = {
                    create(n) {
                        return new ut(n, {
                            writer: new lt,
                            filterFn: i ? e => !0 : (r = tt.ERROR, e => rt(e.level) >= rt(r))
                        }, {
                            ...e.historyLoggerExtraArgs,
                            enabledInProd: t
                        });
                        var r
                    }
                },
                a = function(e, t, n, r) {
                    const o = Fe.create(e, t, n, r);
                    return Be.init(o), self.GR_CFG = Be.get(), o
                }(e.browser, e.context, r, o);
            this.config = a, this.logger = s
        }
        static getInstance() {
            if (void 0 === this._instanceShared) throw new Error("Env not inited yet");
            return this._instanceShared
        }
        static initShared(e) {
            if (void 0 !== this._instanceShared) throw new Error("Env already inited");
            this._instanceShared = e
        }
        enableHistoryLoggerInProd() {
            this._enableHistoryLoggerInProd.get() || this._enableHistoryLoggerInProd.set(!0)
        }
    }

    function An() {
        return In.getInstance()
    }! function(e) {
        e.create = function(e) {
            return new it(e, (() => An().logger.create(e)))
        }
    }(yn || (yn = {}));
    const Pn = yn.create("extension-api");

    function Rn() {
        return _e(self.extensionPopupApi, "popup extension api was not initialized")
    }
    var Ln = n(27061);
    let Dn;

    function Mn(e) {
        if (Dn) return Dn;
        const t = (Ln && Ln.env, e);
        return Dn = t, t
    }

    function Un() {
        return Dn || Mn((Ke() ? _e(self.extensionBackgroundPageApi, "background page extension api was not initialized") : _e(self.extensionContentScriptApi, "content script extension api was not initialized")).message)
    }
    const Fn = function(e) {
            const t = {},
                n = e || {};
            return n.emit = function(e, n) {
                e = r(e);
                const o = t[e];
                if (!o) return;
                const i = o.concat();
                for (let e = 0; e < i.length; e++) i[e](n)
            }, n.emitArgs = function(e) {
                e = r(e);
                const n = t[e],
                    o = [].slice.call(arguments, 1);
                if (!n) return;
                const i = n.concat();
                for (let e = 0; e < i.length; e++) i[e].apply(null, o)
            }, n.on = function(e, o) {
                return e = r(e), t[e] = t[e] || [], t[e].push(o), {
                    un: function() {
                        n.un(e, o)
                    }
                }
            }, n.off = n.un = function(e, n) {
                e = r(e);
                const o = t[e];
                if (!o) return;
                const i = o.indexOf(n);
                i > -1 && (o.splice(i, 1), o.length > 0 || delete t[e])
            }, n.one = function(e, t) {
                const r = n.on(e, ((...e) => {
                    r.un(), t.apply(null, e)
                }))
            }, n.delegate = function(e, t, o) {
                t = r(t), n.on(t, (function(n) {
                    e.emit(o || t, n)
                }))
            }, n;

            function r(e) {
                return "string" != typeof e ? e.join(" ") : e
            }
        }({}),
        jn = {};

    function Bn(e) {
        const t = Un();
        "content-script-message-api" === t.kind && t.onBackgroundPortReconnect && t.onBackgroundPortReconnect(e)
    }
    const Gn = O(1e3, (e => Fn.emit("__bgerror", e)));

    function Hn(e) {
        Mn(e), self.document && be(self.document, "grammarly:offline", (() => Gn("proxy dead")), void 0)
    }

    function zn(e, t) {
        Wn(e, (function n(...r) {
            $n(e, n), t.apply(this, r)
        }))
    }

    function Wn(e, t) {
        if ("__bgerror" === e) return void Fn.on("__bgerror", t);
        const n = jn[e] = jn[e] || [];
        if (n.push(t), 1 === n.length) try {
            Un().listen(e, ((...e) => {
                for (const t of n) t(...e)
            }))
        } catch (e) {
            Gn(e)
        }
    }

    function $n(e, t) {
        if ("__bgerror" === e) return void Fn.off("__bgerror", t);
        const n = jn[e];
        if (!n) return;
        const r = n.indexOf(t); - 1 !== r && n.splice(r, 1), 0 === n.length && delete jn[e]
    }

    function Vn(e) {
        try {
            const t = Un();
            switch (t.kind) {
                case "background-message-api":
                    t.broadcast(e, {});
                    break;
                default:
                    throw new Error("emitTabs can be used only on background")
            }
        } catch (e) {
            Gn(e)
        }
    }

    function qn(e, t, n = {}, r = w, o = w, i) {
        try {
            if (!e) throw TypeError("emitTo can't be used without destination point");
            const s = Un();
            switch (s.kind) {
                case "background-message-api":
                    s.sendTo(e, t, n, r, o, i);
                    break;
                default:
                    throw new Error("emitTo can be used only on background")
            }
        } catch (e) {
            Gn(e)
        }
    }

    function Yn() {
        const e = Un();
        if ("background-message-api" === e.kind) return e.topFrameId;
        throw new Error("topFrameId can only be retreived on background")
    }

    function Kn(e, t) {
        try {
            Un().toFocused(e, t)
        } catch (e) {
            Gn(e)
        }
    }

    function Qn(e, t, n, r) {
        try {
            const o = Un();
            switch (o.kind) {
                case "content-script-message-api":
                    o.broadcastBackground(e, t, n, r);
                    break;
                default:
                    throw new Error("emitBackground can be used only in content script")
            }
        } catch (e) {
            Gn(e)
        }
    }

    function Xn(e, t = {}, n = 1e4) {
        const r = new Promise(((n, r) => {
            try {
                const o = Un();
                switch (o.kind) {
                    case "content-script-message-api":
                        o.broadcastBackground(e, t, n, r);
                        break;
                    default:
                        throw new Error("promiseBackground can be used only on client scripts")
                }
            } catch (e) {
                r(e), Gn(e)
            }
        }));
        return Promise.race([r, he(n).then((() => {
            throw new Error(`Request to bg page (${Dn}) rejected by timeout`)
        }))])
    }
    const Jn = "object" == typeof global && global && global.Object === Object && global;
    var Zn = "object" == typeof self && self && self.Object === Object && self;
    const er = (Jn || Zn || Function("return this")()).Symbol;
    var tr = Object.prototype,
        nr = tr.hasOwnProperty,
        rr = tr.toString,
        or = er ? er.toStringTag : void 0;
    const ir = function(e) {
        var t = nr.call(e, or),
            n = e[or];
        try {
            e[or] = void 0;
            var r = !0
        } catch (e) {}
        var o = rr.call(e);
        return r && (t ? e[or] = n : delete e[or]), o
    };
    var sr = Object.prototype.toString;
    const ar = function(e) {
        return sr.call(e)
    };
    var ur = er ? er.toStringTag : void 0;
    const cr = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ur && ur in Object(e) ? ir(e) : ar(e)
    };
    const lr = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object);
    const fr = function(e) {
        return null != e && "object" == typeof e
    };
    var dr = Function.prototype,
        pr = Object.prototype,
        hr = dr.toString,
        gr = pr.hasOwnProperty,
        mr = hr.call(Object);
    const vr = function(e) {
        if (!fr(e) || "[object Object]" != cr(e)) return !1;
        var t = lr(e);
        if (null === t) return !0;
        var n = gr.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && hr.call(n) == mr
    };
    var br = n(15081),
        yr = "@@redux/INIT";

    function _r(e, t, n) {
        var r;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(_r)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var o = e,
            i = t,
            s = [],
            a = s,
            u = !1;

        function c() {
            a === s && (a = s.slice())
        }

        function l() {
            return i
        }

        function f(e) {
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return c(), a.push(e),
                function() {
                    if (t) {
                        t = !1, c();
                        var n = a.indexOf(e);
                        a.splice(n, 1)
                    }
                }
        }

        function d(e) {
            if (!vr(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (u) throw new Error("Reducers may not dispatch actions.");
            try {
                u = !0, i = o(i, e)
            } finally {
                u = !1
            }
            for (var t = s = a, n = 0; n < t.length; n++) {
                (0, t[n])()
            }
            return e
        }
        return d({
            type: yr
        }), (r = {
            dispatch: d,
            subscribe: f,
            getState: l,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                o = e, d({
                    type: yr
                })
            }
        })[br.Z] = function() {
            var e, t = f;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        e.next && e.next(l())
                    }
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            })[br.Z] = function() {
                return this
            }, e
        }, r
    }

    function Er(e, t) {
        return function() {
            return t(e.apply(void 0, arguments))
        }
    }

    function Sr() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }))
    }
    var wr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    var Cr = n(63583);
    const Tr = {
        UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
        ONLINE_STATE: "connection/ONLINE_STATE",
        ACTIVATE_DATA_CONTROL: "connection/ACTIVATE_DATA_CONTROL",
        ACCEPT_DATA_CONTROL: "connection/ACCEPT_DATA_CONTROL",
        DISABLE_DATA_CONTROL: "connection/DISABLE_DATA_CONTROL",
        UNINSTALL_EXTENSION: "connection/UNINSTALL_EXTENSION",
        SET_DATA_TRACKING_ENABLED: "connection/TOGGLE_SHARE_DATA"
    };

    function Or(e) {
        return {
            type: Tr.UPDATE_CONNECTION,
            data: e
        }
    }

    function Nr(e) {
        return {
            type: Tr.ONLINE_STATE,
            online: e
        }
    }

    function xr() {
        return {
            type: Tr.ACTIVATE_DATA_CONTROL
        }
    }

    function kr() {
        return {
            type: Tr.ACCEPT_DATA_CONTROL
        }
    }

    function Ir() {
        return {
            type: Tr.DISABLE_DATA_CONTROL
        }
    }

    function Ar(e) {
        return {
            type: Tr.SET_DATA_TRACKING_ENABLED,
            dataTrackingEnabled: e
        }
    }

    function Pr() {
        return {
            type: Tr.UNINSTALL_EXTENSION
        }
    }
    const Rr = {
        SET_ENVIRONMENT: "environment/SET_ENVIRONMENT",
        UPDATE_ENVIRONMENT: "environment/UPDATE_ENVIRONMENT"
    };

    function Lr(e) {
        return {
            type: Rr.SET_ENVIRONMENT,
            data: e
        }
    }

    function Dr(e) {
        return {
            type: Rr.UPDATE_ENVIRONMENT,
            data: e
        }
    }
    const Mr = {
            SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS: "settings/TOGGLE_DEFS",
            TOGGLE_AUTOCORRECT: "settings/TOGGLE_AUTOCORRECT",
            TOGGLE_HOTKEYS: "settings/TOGGLE_HOTKEYS",
            TOGGLE_SITE: "settings/TOGGLE_SITE",
            TOGGLE_FIELD: "settings/TOGGLE_FIELD",
            TOGGLE_AUTOCOMPLETE: "settings/TOGGLE_AUTOCOMPLETE",
            SEEN_AUTOCOMPLETE_ONBOARDING_HINT: "settings/SEEN_AUTOCOMPLETE_ONBOARDING_HINT",
            DISABLE_ON_TAB: "settings/DISABLE_ON_TAB",
            DISABLE_REMINDER_NOTIFICATION: "settings/DISABLE_REMINDER_NOTIFICATION",
            SHOW_DISABLE_REMINDER: "settings/SHOW_DISABLE_REMINDER",
            DISABLE_EMAIL_SUMMARIZATION: "settings/DISABLE_EMAIL_SUMMARIZATION",
            SHOW_NEWS: "settings/SHOW_NEWS",
            SEEN_NEWS: "settings/SEEN_NEWS",
            SET_GDOCS_OPT_IN: "setting/SET_GDOCS_OPT_IN",
            SET_GDOCS_OPT_OUT: "setting/SET_GDOCS_OPT_OUT",
            HIDE_GDOCS_SIGNIN_POPUP: "settings/HIDE_GDOCS_SIGNIN_POPUP",
            CLICK_GDOCS_AUTHENTICATION: "settings/CLICK_GDOCS_AUTHENTICATION",
            SET_GDOCS_ENABLED_SETTING: "settings/SET_GDOCS_ENABLED_SETTING",
            GDOCS_SAVE_DOCUMENT_STATE: "settings/GDOCS_SAVE_DOCUMENT_STATE",
            SHOW_ONBOARDING: "settings/SHOW_ONBOARDING",
            SEEN_ONBOARDING: "settings/SEEN_ONBOARDING",
            ACKNOWLEDGE_ONBOARDING_POPUP: "settings/ACKNOWLEDGE_ONBOARDING_POPUP",
            SEEN_DELIGHTFUL_MESSAGE: "settings/SEEN_DELIGHTFUL_MESSAGE",
            SHOW_LOGIN_REMINDER_POPUP_ON_INIT: "settings/SHOW_LOGIN_REMINDER_POPUP_ON_INIT",
            SHOW_LOGIN_REMINDER: "settings/SHOW_LOGIN_REMINDER",
            HIDE_LOGIN_REMINDER: "settings/HIDE_LOGIN_REMINDER",
            DISABLE_LOGIN_REMINDER: "settings/DISABLE_LOGIN_REMINDER",
            SET_DAPI_PROP: "settings/SET_DAPI_PROP",
            CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT",
            CHANGE_STRONG_DIALECT: "settings/CHANGE_STRONG_DIALECT",
            SAVE_ANONYMOUS_PROPERTIES: "settings/SAVE_ANONYMOUS_PROPERTIES",
            EDGE_POPUP_FROM_GBUTTON: "settings/EDGE_POPUP_FROM_GBUTTON",
            SHOW_DATA_CONTROL_POPUP: "settings/SHOW_DATA_CONTROL_POPUP",
            SET_EMOGENIE_EMOJI_STATE: "settings/SET_EMOGENIE_EMOJI_STATE",
            SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION: "settings/SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION",
            SEEN_GDOCS_SIDEBAR_ONBOARDING_NOTIFICATION: "settings/SEEN_GDOCS_SIDEBAR_ONBOARDING_NOTIFICATION",
            SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP: "setting/SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP",
            DISMISS_DUNNING_MESSAGE: "setting/DISMISS_DUNNING_MESSAGE",
            UPDATE_DUNNING_STATUS: "setting/UPDATE_DUNNING_STATUS",
            SHOW_PREMIUM_CHANGE_PLAN_POPUP: "setting/SHOW_PREMIUM_CHANGE_PLAN_POPUP",
            UPDATE_SUBSCRIPTION_STATUS: "setting/UPDATE_SUBSCRIPTION_STATUS",
            DISMISS_RENEWAL_NOTIFICATION: "setting/DISMISS_RENEWAL_NOTIFICATION",
            RECORD_RENEWAL_NOTIFICATION_APPEARANCE: "setting/RECORD_RENEWAL_NOTIFICATION_APPEARANCE",
            CLOSE_ACCOUNT_MIGRATION_NOTIFICATION: "setting/CLOSE_ACCOUNT_MIGRATION_NOTIFICATION",
            SHOW_BUSINESS_UPHOOK_POPUP: "settings/SHOW_BUSINESS_UPHOOK_POPUP",
            SEEN_GDOCS_INLINE_TOOLTIP: "settings/SEEN_GDOCS_INLINE_TOOLTIP",
            SHOW_GDOCS_FREE_TRIAL_POPUP: "settings/SHOW_GDOCS_FREE_TRIAL_POPUP",
            INCREMENT_COUNT_CLOSE_GDOCS_FREE_TRIAL_POPUP: "settings/INCREMENT_COUNT_CLOSE_GDOCS_FREE_TRIAL_POPUP",
            DISMISS_GDOCS_FREE_TRIAL_POPUP: "settings/DISMISS_FREE_TRIAL_POPUP",
            START_GDOCS_FREE_TRIAL: "settings/START_GDOCS_FREE_TRIAL",
            START_SHOW_PREMIUM_EMBLEM: "settings/START_SHOW_PREMIUM_EMBLEM",
            SET_FIRST_PREMIUM_DATE: "settings/SET_FIRST_PREMIUM_DATE",
            SHOW_PREMIUM_SURVEY: "settings/SHOW_PREMIUM_SURVEY",
            PATCH_ASSISTANT_SETTINGS: "settings/PATCH_ASSISTANT_SETTINGS",
            PATCH_GBUTTON_SETTINGS: "settings/PATCH_GBUTTON_SETTINGS",
            SEEN_PREMIUM_RESURRECTION_POPUP_ACTION: "settings/SEEN_PREMIUM_RESURRECTION_POPUP_ACTION",
            DEFERRED_PREMIUM_RESURRECTION_POPUP_ACTION: "settings/DEFERRED_PREMIUM_RESURRECTION_POPUP_ACTION",
            SEEN_PROOFIT_INTRO_POPUP: "settings/SEEN_PROOFIT_INTRO_POPUP",
            SENT_PROOFIT_REQUEST: "settings/SENT_PROOFIT_REQUEST",
            SEEN_SMART_PHRASES_PIN_TOOLTIP: "settings/SEEN_SMART_PHRASES_PIN_TOOLTIP",
            DISMISS_PIN_EXTENSION_POPUP: "settings/DISMISS_PIN_EXTENSION_POPUP",
            CLICK_TO_RUN_ON_ALL_SITES: "settings/CLICK_TO_RUN_ON_ALL_SITES",
            DISMISS_GOOGLE_TRANSLATE_FLUENCY_POPUP: "settings/DISMISS_GOOGLE_TRANSLATE_FLUENCY_POPUP",
            HIDE_GOOGLE_TRANSLATE_FLUENCY_POPUP: "settings/HIDE_GOOGLE_TRANSLATE_FLUENCY_POPUP",
            DISMISS_IMPORTANCE_SURVEY: "settings/DISMISS_IMPORTANCE_SURVEY",
            HIDE_IMPORTANCE_SURVEY: "settings/HIDE_IMPORTANCE_SURVEY",
            CHIPMUNK_NEXT_FETCH_CAN_BE_AFTER: "settings/CHIPMUNK_NEXT_FETCH_CAN_BE_AFTER",
            SNIPPETS_SHORTCUT_POPUP_COUNTER: "settings/SNIPPETS_SHORTCUT_POPUP_COUNTER",
            SET_LLAMA_INSTALLED: "settings/SET_LLAMA_INSTALLED",
            SET_LLAMA_UNINSTALLED: "setting/SET_LLAMA_UNINSTALLED",
            SET_LLAMA_INTEGRATION_DISABLE: "settings/SET_LLAMA_INTEGRATION_DISABLE"
        },
        Ur = [Mr.CHANGE_WEAK_DIALECT, Mr.CHANGE_STRONG_DIALECT, Mr.SET_EMOGENIE_EMOJI_STATE, Mr.SET_FIRST_PREMIUM_DATE],
        Fr = [Mr.TOGGLE_DEFS, Mr.TOGGLE_AUTOCORRECT, Mr.TOGGLE_SITE, Mr.TOGGLE_FIELD, Mr.TOGGLE_AUTOCOMPLETE, Mr.SEEN_AUTOCOMPLETE_ONBOARDING_HINT, Mr.SEEN_NEWS, Mr.HIDE_GDOCS_SIGNIN_POPUP, Mr.CLICK_GDOCS_AUTHENTICATION, Mr.SET_GDOCS_ENABLED_SETTING, Mr.SET_GDOCS_OPT_IN, Mr.SET_GDOCS_OPT_OUT, Mr.GDOCS_SAVE_DOCUMENT_STATE, Mr.SHOW_ONBOARDING, Mr.SEEN_ONBOARDING, Mr.ACKNOWLEDGE_ONBOARDING_POPUP, Mr.SEEN_DELIGHTFUL_MESSAGE, Mr.SHOW_LOGIN_REMINDER_POPUP_ON_INIT, Mr.SHOW_LOGIN_REMINDER, Mr.HIDE_LOGIN_REMINDER, Mr.DISABLE_LOGIN_REMINDER, Mr.SHOW_DISABLE_REMINDER, Mr.DISABLE_REMINDER_NOTIFICATION, Mr.DISABLE_EMAIL_SUMMARIZATION, Mr.EDGE_POPUP_FROM_GBUTTON, Mr.SHOW_DATA_CONTROL_POPUP, Mr.SHOW_BUSINESS_UPHOOK_POPUP, Mr.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP, Mr.DISMISS_DUNNING_MESSAGE, Mr.SHOW_PREMIUM_CHANGE_PLAN_POPUP, Mr.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION, Mr.SEEN_GDOCS_SIDEBAR_ONBOARDING_NOTIFICATION, Mr.SEEN_GDOCS_INLINE_TOOLTIP, Mr.SHOW_GDOCS_FREE_TRIAL_POPUP, Mr.INCREMENT_COUNT_CLOSE_GDOCS_FREE_TRIAL_POPUP, Mr.DISMISS_GDOCS_FREE_TRIAL_POPUP, Mr.START_GDOCS_FREE_TRIAL, Mr.SEEN_PREMIUM_RESURRECTION_POPUP_ACTION, Mr.START_SHOW_PREMIUM_EMBLEM, Mr.SHOW_PREMIUM_SURVEY, Mr.PATCH_ASSISTANT_SETTINGS, Mr.DISMISS_PIN_EXTENSION_POPUP, Mr.CLICK_TO_RUN_ON_ALL_SITES, Mr.SEEN_PROOFIT_INTRO_POPUP, Mr.SENT_PROOFIT_REQUEST, Mr.SEEN_SMART_PHRASES_PIN_TOOLTIP, Mr.DISMISS_GOOGLE_TRANSLATE_FLUENCY_POPUP, Mr.HIDE_GOOGLE_TRANSLATE_FLUENCY_POPUP, Mr.DISMISS_IMPORTANCE_SURVEY, Mr.HIDE_IMPORTANCE_SURVEY, Mr.CHIPMUNK_NEXT_FETCH_CAN_BE_AFTER, Mr.PATCH_GBUTTON_SETTINGS, Mr.SNIPPETS_SHORTCUT_POPUP_COUNTER, Mr.SET_LLAMA_INSTALLED, Mr.SET_LLAMA_UNINSTALLED, Mr.SET_LLAMA_INTEGRATION_DISABLE];

    function jr(e, t) {
        return {
            type: Mr.SET_DAPI_PROP,
            propKey: e,
            data: t
        }
    }

    function Br(e) {
        return {
            type: Mr.CHANGE_WEAK_DIALECT,
            data: e
        }
    }

    function Gr(e) {
        return {
            type: Mr.CHANGE_STRONG_DIALECT,
            data: e
        }
    }

    function Hr(e) {
        return {
            type: Mr.SETTINGS_INITIAL,
            data: e
        }
    }

    function zr(e) {
        return {
            type: Mr.TOGGLE_DEFS,
            enabledDefs: e
        }
    }

    function Wr(e) {
        return {
            type: Mr.TOGGLE_AUTOCORRECT,
            enabled: e
        }
    }

    function $r(e) {
        return {
            type: Mr.TOGGLE_AUTOCOMPLETE,
            enabled: e
        }
    }

    function Vr() {
        return {
            type: Mr.SEEN_AUTOCOMPLETE_ONBOARDING_HINT
        }
    }

    function qr(e) {
        return {
            type: Mr.TOGGLE_HOTKEYS,
            enabledHotkeys: e
        }
    }

    function Yr(e, t, n, r) {
        return {
            type: Mr.TOGGLE_SITE,
            domain: t,
            enabled: e,
            isPartOfGdocsSidebarExperiment: n,
            clickToRunEnabled: r
        }
    }

    function Kr(e, t) {
        return {
            type: Mr.TOGGLE_FIELD,
            domain: t,
            data: e
        }
    }

    function Qr() {
        return {
            type: Mr.SEEN_NEWS
        }
    }

    function Xr() {
        return {
            type: Mr.SET_GDOCS_OPT_IN
        }
    }

    function Jr(e) {
        return {
            type: Mr.SET_GDOCS_OPT_OUT,
            isPartOfGdocsSidebarExperiment: e
        }
    }

    function Zr() {
        return {
            type: Mr.HIDE_GDOCS_SIGNIN_POPUP
        }
    }

    function eo() {
        return {
            type: Mr.CLICK_GDOCS_AUTHENTICATION
        }
    }

    function to() {
        return {
            type: Mr.SET_GDOCS_ENABLED_SETTING
        }
    }

    function no(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                sidebarVisible: !0
            }
        }
    }

    function ro(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                sidebarVisible: !1
            }
        }
    }

    function oo(e, t) {
        const n = t;
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: n
        }
    }

    function io(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                hideLongDocumentPopup: !0
            }
        }
    }

    function so(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                hideLongDocumentPopup: !1
            }
        }
    }

    function ao(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                hideSharedDocumentPopup: !0
            }
        }
    }

    function uo(e) {
        return {
            type: Mr.GDOCS_SAVE_DOCUMENT_STATE,
            gdocsDocIdHash: e,
            gdocsDocumentSettings: {
                hideSharedDocumentPopup: !1
            }
        }
    }

    function co() {
        return {
            type: Mr.SHOW_ONBOARDING
        }
    }

    function lo() {
        return {
            type: Mr.SEEN_ONBOARDING
        }
    }

    function fo() {
        return {
            type: Mr.ACKNOWLEDGE_ONBOARDING_POPUP
        }
    }

    function po() {
        return {
            type: Mr.SEEN_GDOCS_SIDEBAR_ONBOARDING_NOTIFICATION
        }
    }

    function ho(e) {
        return {
            type: Mr.SEEN_DELIGHTFUL_MESSAGE,
            delightfulMessageId: e
        }
    }

    function go(e) {
        return {
            type: Mr.SHOW_NEWS,
            showNews: e
        }
    }

    function mo(e) {
        return {
            type: Mr.SAVE_ANONYMOUS_PROPERTIES,
            props: e
        }
    }

    function vo() {
        return {
            type: Mr.DISABLE_ON_TAB
        }
    }

    function bo(e) {
        return {
            type: Mr.SHOW_DISABLE_REMINDER,
            domain: e
        }
    }

    function yo(e) {
        return {
            type: Mr.DISABLE_REMINDER_NOTIFICATION,
            domain: e
        }
    }

    function _o() {
        return {
            type: Mr.SHOW_LOGIN_REMINDER_POPUP_ON_INIT
        }
    }

    function Eo(e) {
        return {
            type: Mr.SHOW_LOGIN_REMINDER,
            loginReminderType: e
        }
    }

    function So() {
        return {
            type: Mr.HIDE_LOGIN_REMINDER
        }
    }

    function wo() {
        return {
            type: Mr.DISABLE_LOGIN_REMINDER
        }
    }

    function Co() {
        return {
            type: Mr.DISABLE_EMAIL_SUMMARIZATION
        }
    }

    function To(e) {
        return {
            type: Mr.SET_EMOGENIE_EMOJI_STATE,
            data: e
        }
    }

    function Oo(e) {
        return {
            type: Mr.SHOW_BUSINESS_UPHOOK_POPUP,
            seenDomainAndCategory: e
        }
    }

    function No() {
        return {
            type: Mr.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP
        }
    }

    function xo() {
        return {
            type: Mr.DISMISS_DUNNING_MESSAGE
        }
    }

    function ko() {
        return {
            type: Mr.UPDATE_DUNNING_STATUS
        }
    }

    function Io() {
        return {
            type: Mr.SHOW_PREMIUM_CHANGE_PLAN_POPUP
        }
    }

    function Ao() {
        return {
            type: Mr.UPDATE_SUBSCRIPTION_STATUS
        }
    }

    function Po() {
        return {
            type: Mr.DISMISS_RENEWAL_NOTIFICATION
        }
    }

    function Ro() {
        return {
            type: Mr.RECORD_RENEWAL_NOTIFICATION_APPEARANCE
        }
    }

    function Lo() {
        return {
            type: Mr.CLOSE_ACCOUNT_MIGRATION_NOTIFICATION
        }
    }

    function Do() {
        return {
            type: Mr.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION
        }
    }

    function Mo() {
        return {
            type: Mr.SEEN_GDOCS_INLINE_TOOLTIP
        }
    }

    function Uo(e) {
        return {
            type: Mr.SHOW_GDOCS_FREE_TRIAL_POPUP,
            gdocsFreeTrialPopupType: e
        }
    }

    function Fo(e) {
        return {
            type: Mr.INCREMENT_COUNT_CLOSE_GDOCS_FREE_TRIAL_POPUP,
            gdocsFreeTrialPopupType: e
        }
    }

    function jo() {
        return {
            type: Mr.DISMISS_GDOCS_FREE_TRIAL_POPUP
        }
    }

    function Bo(e) {
        return {
            type: Mr.START_GDOCS_FREE_TRIAL,
            startGdocsFreeTrialTimestamp: e
        }
    }

    function Go() {
        return {
            type: Mr.START_SHOW_PREMIUM_EMBLEM
        }
    }

    function Ho(e) {
        return {
            type: Mr.SET_FIRST_PREMIUM_DATE,
            data: e
        }
    }

    function zo(e) {
        return {
            type: Mr.SHOW_PREMIUM_SURVEY,
            isSurveyWeek2: e
        }
    }

    function Wo(e) {
        return {
            type: Mr.PATCH_ASSISTANT_SETTINGS,
            assistantSettings: e
        }
    }

    function $o(e, t) {
        return {
            type: Mr.PATCH_GBUTTON_SETTINGS,
            gButtonFieldHash: e,
            gButtonSettings: t
        }
    }

    function Vo() {
        return {
            type: Mr.SEEN_PREMIUM_RESURRECTION_POPUP_ACTION
        }
    }

    function qo() {
        return {
            type: Mr.DEFERRED_PREMIUM_RESURRECTION_POPUP_ACTION
        }
    }

    function Yo() {
        return {
            type: Mr.SEEN_PROOFIT_INTRO_POPUP
        }
    }

    function Ko() {
        return {
            type: Mr.SENT_PROOFIT_REQUEST
        }
    }

    function Qo() {
        return {
            type: Mr.SEEN_SMART_PHRASES_PIN_TOOLTIP
        }
    }

    function Xo() {
        return {
            type: Mr.DISMISS_PIN_EXTENSION_POPUP
        }
    }

    function Jo() {
        return {
            type: Mr.CLICK_TO_RUN_ON_ALL_SITES
        }
    }

    function Zo() {
        return {
            type: Mr.DISMISS_GOOGLE_TRANSLATE_FLUENCY_POPUP
        }
    }

    function ei() {
        return {
            type: Mr.HIDE_GOOGLE_TRANSLATE_FLUENCY_POPUP
        }
    }

    function ti() {
        return {
            type: Mr.DISMISS_IMPORTANCE_SURVEY
        }
    }

    function ni() {
        return {
            type: Mr.HIDE_IMPORTANCE_SURVEY
        }
    }

    function ri(e) {
        return {
            type: Mr.CHIPMUNK_NEXT_FETCH_CAN_BE_AFTER,
            chipmunkFetchTimestampSettings: e
        }
    }

    function oi() {
        return {
            type: Mr.SET_LLAMA_INSTALLED
        }
    }

    function ii() {
        return {
            type: Mr.SET_LLAMA_UNINSTALLED
        }
    }

    function si(e) {
        return {
            type: Mr.SET_LLAMA_INTEGRATION_DISABLE,
            data: e
        }
    }

    function ai(e) {
        return {
            type: Mr.SNIPPETS_SHORTCUT_POPUP_COUNTER,
            snippetsShortcutPopupCounter: e
        }
    }
    const ui = {
        SET_ACTIVE_TAB: "tabs/SET_ACTIVE_TAB",
        ENABLE_ONCE_CLICK_TO_RUN: "tabs/ENABLE_ONCE_CLICK_TO_RUN"
    };

    function ci(e) {
        return {
            type: ui.SET_ACTIVE_TAB,
            data: e
        }
    }

    function li() {
        return {
            type: ui.ENABLE_ONCE_CLICK_TO_RUN
        }
    }
    const fi = {
        SET_USER: "user/SET_USER",
        SET_GROUPS: "user/SET_GROUPS",
        SET_SETTINGS: "user/SET_SETTINGS",
        SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
        INC_FIXED: "user/INC_FIXED",
        UPDATE_GROUPS: "user/UPDATE_GROUPS"
    };

    function di(e) {
        return {
            type: fi.SET_USER,
            data: e
        }
    }

    function pi(e) {
        return {
            type: fi.SET_GROUPS,
            data: e
        }
    }

    function hi(e) {
        return {
            type: fi.SET_SETTINGS,
            data: e
        }
    }

    function gi(e) {
        return {
            type: fi.SESSION_INVALIDATE,
            reason: e
        }
    }

    function mi() {
        return {
            type: fi.INC_FIXED
        }
    }

    function vi() {
        return {
            type: fi.UPDATE_GROUPS
        }
    }
    const bi = s,
        yi = t,
        _i = o,
        Ei = r,
        Si = i,
        wi = Object.assign({}, bi, yi, _i, Ei, Si);

    function Ci(e) {
        return e
    }

    function Ti(e, t, n, r, o, i, s, a, u, c, l, f, d, p, h, g, m, v, b, y) {
        switch (arguments.length) {
            case 1:
                return e;
            case 2:
                return t(e);
            case 3:
                return n(t(e));
            case 4:
                return r(n(t(e)));
            case 5:
                return o(r(n(t(e))));
            case 6:
                return i(o(r(n(t(e)))));
            case 7:
                return s(i(o(r(n(t(e))))));
            case 8:
                return a(s(i(o(r(n(t(e)))))));
            case 9:
                return u(a(s(i(o(r(n(t(e))))))));
            case 10:
                return c(u(a(s(i(o(r(n(t(e)))))))));
            case 11:
                return l(c(u(a(s(i(o(r(n(t(e))))))))));
            case 12:
                return f(l(c(u(a(s(i(o(r(n(t(e)))))))))));
            case 13:
                return d(f(l(c(u(a(s(i(o(r(n(t(e))))))))))));
            case 14:
                return p(d(f(l(c(u(a(s(i(o(r(n(t(e)))))))))))));
            case 15:
                return h(p(d(f(l(c(u(a(s(i(o(r(n(t(e))))))))))))));
            case 16:
                return g(h(p(d(f(l(c(u(a(s(i(o(r(n(t(e)))))))))))))));
            case 17:
                return m(g(h(p(d(f(l(c(u(a(s(i(o(r(n(t(e))))))))))))))));
            case 18:
                return v(m(g(h(p(d(f(l(c(u(a(s(i(o(r(n(t(e)))))))))))))))));
            case 19:
                return b(v(m(g(h(p(d(f(l(c(u(a(s(i(o(r(n(t(e))))))))))))))))));
            case 20:
                return y(b(v(m(g(h(p(d(f(l(c(u(a(s(i(o(r(n(t(e)))))))))))))))))))
        }
    }
    var Oi = function(e) {
            return "Some" === e._tag
        },
        Ni = function(e) {
            return "None" === e._tag
        },
        xi = {
            _tag: "None"
        },
        ki = function(e) {
            return {
                _tag: "Some",
                value: e
            }
        };

    function Ii(e) {
        return null == e ? xi : ki(e)
    }

    function Ai(e) {
        return "Left" === e._tag ? xi : ki(e.right)
    }
    var Pi = Ai;

    function Ri(e, t) {
        return function(n) {
            return Ni(n) ? e() : t(n.value)
        }
    }
    var Li = function(e) {
        return function(t) {
            return Ni(t) ? e() : t.value
        }
    };
    var Di = function(e) {
            return function(t) {
                return Ni(t) ? xi : ki(e(t.value))
            }
        },
        Mi = function(e) {
            return function(t) {
                return Ni(t) ? xi : e(t.value)
            }
        },
        Ui = function(e) {
            return function(t) {
                return Ni(t) ? xi : e(t.value) ? t : xi
            }
        };

    function Fi(e) {
        return function(t) {
            return !Ni(t) && e(t.value)
        }
    }
    var ji = Ti;

    function Bi(e) {
        return Gi(e, e.length - 1, [])
    }

    function Gi(e, t, n) {
        return function(r) {
            var o = n.concat([r]);
            return 0 === t ? e.apply(this, o) : Gi(e, t - 1, o)
        }
    }
    Bi((function(e, t, n) {
        var r, o = n,
            i = e,
            s = o[i],
            a = P(o, ["symbol" == typeof i ? i : i + ""]);
        return A(((r = {})[e] = t(Ii(s)), r), a)
    }));
    Bi((function(e, t, n) {
        var r = n,
            o = e,
            i = r[o],
            s = P(r, ["symbol" == typeof o ? o : o + ""]),
            a = "function" == typeof t ? t(Ii(i)) : t;
        return ji(a, Ri((function() {
            return s
        }), (function(t) {
            var n;
            return A(((n = {})[e] = t, n), s)
        })))
    }));

    function Hi(e, t) {
        let n;

        function r() {
            const r = e.getState();
            if (! function(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                }(r) && !v(n, r)) {
                const e = n;
                n = r, t(n, e)
            }
        }
        return me(r), e.subscribe(r)
    }
    const zi = Cr({
            level: "debug",
            collapsed: () => !1,
            predicate: (e, t) => !1,
            logger: new Proxy(console, {
                get: (e, t) => {
                    switch (t) {
                        case "group":
                        case "groupCollapsed":
                        case "groupEnd":
                            return (...n) => {
                                e.debug(`ReduxLogger ${t} ${void 0!==n[0]?n[0]:""}`, ...n.slice(1))
                            };
                        default:
                            return Reflect.get(e, t)
                    }
                }
            })
        }),
        Wi = "store/SYNC";

    function $i(e, t, n) {
        const r = _r(((t = e, r) => {
                const {
                    domain: o
                } = t.page || t.config || {};
                return r.sync && Qn("dispatch", Object.assign({}, r, {
                    domain: o
                })), r.type === Wi ? Object.assign({}, t, r.data) : n ? n(t, r) : t
            }), {}, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function(n, r, o) {
                        var i, s = e(n, r, o),
                            a = s.dispatch,
                            u = {
                                getState: s.getState,
                                dispatch: function(e) {
                                    return a(e)
                                }
                            };
                        return i = t.map((function(e) {
                            return e(u)
                        })), a = Sr.apply(void 0, i)(s.dispatch), wr({}, s, {
                            dispatch: a
                        })
                    }
                }
            }(zi)),
            o = function(e, t) {
                return Object.keys(e).filter((t => e[t])).reduce(((n, r) => Object.assign(n, {
                    [r]: (...n) => {
                        const o = e[r](...n),
                            i = void 0 === o.sync || o.sync;
                        return t(Object.assign({}, o, {
                            sync: i
                        }))
                    }
                })), {})
            }(Object.assign({}, wi, t), r.dispatch),
            i = e => r.dispatch({
                type: Wi,
                data: e
            });
        return Wn("state", (e => {
            me((() => i(e)), 0)
        })), {
            store: r,
            actions: o,
            setState: i,
            subscribe: e => Hi(r, e)
        }
    }
    const Vi = {
        stats: "ex_perfstats",
        csInit: "ex_csInitPerf",
        viewInjection: "ex_viewInjectionPerf"
    };

    function qi(e) {
        const {
            _tag: t,
            ...n
        } = e;
        return {
            [Vi[e._tag]]: n
        }
    }
    var Yi;

    function Ki(e, t) {
        return {
            ...e,
            application: t.application,
            version: t.version,
            env: t.env,
            sessionId: t.context && t.sessionId,
            userId: t.context && t.context.userId,
            containerId: t.context && t.context.containerId
        }
    }! function(e) {
        e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR"
    }(Yi || (Yi = {}));
    const Qi = e => Xi(e, .5),
        Xi = (e, t) => {
            if (0 === e.length) return 0;
            const n = [...e].sort(((e, t) => e - t));
            if (t <= 0) return n[0];
            if (t >= 1) return n[n.length - 1];
            const r = (n.length - 1) * t,
                o = Math.floor(r),
                i = o + 1,
                s = r % 1;
            return i >= n.length ? n[o] : n[o] * (1 - s) + n[i] * s
        },
        Ji = e => e.reduce(((e, t, n) => e + (t - e) / (n + 1)), 0),
        Zi = (e, t) => {
            const n = void 0 === t ? Ji(e) : t;
            return e.length > 1 ? Math.sqrt(e.reduce(((e, t) => e + (t - n) ** 2), 0) / (e.length - 1)) : 0
        };
    var es, ts, ns;

    function rs(e) {
        return is.includes(e)
    }

    function os(e) {
        return is.getTopSiteId(e)
    }! function(e) {
        function t() {
            return {
                dummy: !0,
                startMeasure: () => ({
                    endMeasure: () => {},
                    cancelMeasure: w
                }),
                measure: e => e(),
                measureAsync: e => e(),
                custom: w
            }
        }
        e.dummy = t, e.dummyFactoryInitialization = () => () => t()
    }(es || (es = {})),
    function(e) {
        e.dummy = {
            flushMeasures: e => [],
            measure: (e, t) => t(),
            startMeasure: e => ({
                endMeasure() {},
                cancelMeasure() {}
            })
        }
    }(ts || (ts = {})),
    function(e) {
        let t;
        ! function(e) {
            let t;
            ! function(e) {
                let t;
                ! function(e) {
                    e.stats = "stats", e.csInit = "csInit", e.viewInjection = "viewInjection"
                }(t = e.Types || (e.Types = {}))
            }(t = e.Tagged || (e.Tagged = {}))
        }(t = e.Data || (e.Data = {})), e.getStats = function(e) {
            if (0 === e.length) return {
                ct: 0
            }; {
                const t = e.reduce(((e, t) => Math.min(e, t)), Number.MAX_VALUE),
                    n = e.reduce(((e, t) => Math.max(e, t)), Number.MIN_VALUE),
                    r = e.length >= 6 ? Ji(e) : void 0;
                return {
                    ct: e.length,
                    min: t,
                    max: n,
                    range: n - t,
                    avg: r,
                    stddev: void 0 !== r && e.length > 1 ? Zi(e, r) : void 0
                }
            }
        }
    }(ns || (ns = {}));
    const is = new class {
        constructor(e) {
            function t(e) {
                return `Invalid pattern "${e}": "*" is allowed only at start and/or end position`
            }
            this._equal = new Set, this._prefix = [], this._suffix = [], this._infix = [], this._domain = [];
            for (const n of e)
                if (n.startsWith("**.")) this._domain.push(n.substring(3));
                else {
                    const e = n.indexOf("*");
                    if (-1 === e) this._equal.add(n);
                    else if (e === n.length - 1) this._prefix.push(n.substring(0, e));
                    else {
                        if (0 !== e) throw new Error(t(n)); {
                            const e = n.indexOf("*", 1);
                            if (-1 === e) this._suffix.push(n.substring(1));
                            else {
                                if (e !== n.length - 1) throw new Error(t(n));
                                this._infix.push(n.substring(1, e))
                            }
                        }
                    }
                }
        }
        getTopSiteId(e) {
            var t, n, r, o, i, s;
            return null !== (s = null !== (i = null !== (o = null !== (r = null !== (n = null !== (t = this._equal.has(e) ? e : void 0) && void 0 !== t ? t : this._domain.find((t => t === e))) && void 0 !== n ? n : function(e) {
                return e ? "**." + e : void 0
            }(this._domain.find((t => e.endsWith("." + t))))) && void 0 !== r ? r : this._prefix.find((t => e.startsWith(t)))) && void 0 !== o ? o : this._suffix.find((t => e.endsWith(t)))) && void 0 !== i ? i : this._infix.find((t => e.includes(t)))) && void 0 !== s ? s : null
        }
        includes(e) {
            return null !== this.getTopSiteId(e)
        }
    }(["mail.google.com", "translate.google.*", "docs.google.com", "web.whatsapp.com", "facebook.com", "outlook.*", "linkedin.com", "zendesk.*", "youtube.com", "twitter.com", "messenger.com", "*.slack.*", "*canvas*", "*instructure*", "trello.com", "editor.wix.com", "quizlet.com", "mail.yahoo.com", "*.force.*", "keep.google.com", "vk.com", "fanyi.baidu.com", "app.bullhornstaffing.com", "app.qa-world.com", "calendar.google.com", "papago.naver.com", "wordcounter.net", "blogger.*", "wattpad.com", "wordpress.com", "amazon.*", "smallseotools.com", "create.kahoot.it", "apps.rackspace.com", "basecamp.com", "varsitytutors.com", "canva.com", "fanyi.youdao.com", "reverso.net", "message.alibaba.com", "*schoology*", "*.blackboard.*", "classroom.google.com", "*upwork*", "business.facebook.com", "medium.com", "mail.aol.com", "workhub.transcribeme.com", "github.com", "**.salesforce.com", "**.force.com", "**.zendesk.com", "**.microsoftonline.com", "**.outlook.com", "**.facebook.com", "**.messenger.com", "**.genesys.com", "**.cisco.com", "**.avaya.com", "**.oraclecloud.com", "**.five9.com", "**.tawk.to", "**.helpscout.com", "**.livechat.com", "**.intercom.com", "**.freshdesk.com", "**.liveagent.com", "**.hubspot.com"]);

    function ss(e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return JSON.stringify({
                json_error: "Cannot json stringify"
            })
        }
    }

    function as(e, t) {
        return {
            json: ss(e),
            exception: t ? {
                name: t.name,
                message: t.message,
                stack: ls(t.stack)
            } : void 0
        }
    }

    function us() {
        return An().browserApi.baseUri
    }
    const cs = {
        chromium: ["<anonymous>", "native", "unknown location"],
        firefox: [],
        safari: ["[native code]"]
    };

    function ls(e, {
        browser: t = An().config.bundleInfo.browser,
        extensionBaseUri: n = us()
    } = {}) {
        if (!e) return e;
        const r = cs["chrome" === t || "edge" === t ? "chromium" : t],
            o = e => r.some((t => e.startsWith(t))) || n && e.startsWith(n),
            i = e.split("\n");
        if ("chrome" === t || "edge" === t) {
            const e = [];
            let t = 0;
            for (; t < i.length && !i[t].startsWith("    at ");) e.push(i[t]), t++;
            for (; t < i.length;) {
                const n = hs(i[t]);
                n ? o(n) ? e.push(i[t]) : e.push("    at <hidden>") : e.push("    <unparsed>"), t++
            }
            return e.join("\n")
        }
        if ("firefox" === t || "safari" === t) return i.map((e => [e, "firefox" === t ? gs(e) : ms(e)])).map((([e, t]) => void 0 === t ? "<unparsed>" : o(t) ? e : "<hidden>")).join("\n");
        _(t)
    }
    const fs = /^ {4}at ([^(]*)$/,
        ds = /^ {4}at [^(]* \(([^()]*)\)$/,
        ps = /^ {4}at eval \([^(]* \(([^()]*)\)\)$/;

    function hs(e) {
        var t, n, r;
        return null === (r = null !== (n = null !== (t = fs.exec(e)) && void 0 !== t ? t : ds.exec(e)) && void 0 !== n ? n : ps.exec(e)) || void 0 === r ? void 0 : r[1]
    }

    function gs(e) {
        return e.split("@", 2)[1]
    }

    function ms(e) {
        var t;
        return null !== (t = e.split("@", 2)[1]) && void 0 !== t ? t : e
    }
    const vs = yn.create("lib.tracking.telemetry"),
        bs = .1,
        ys = .01;
    class _s {
        constructor(e = w, t = w, n = w, r = w, o = !1, i = es.dummyFactoryInitialization, s = w, a = w, u = (e => .01), c = "firefox" !== He().bundleInfo.browser, l = i(((e, {
            hideUserInfo: t,
            ...n
        }) => {
            this._sendEvent({
                logger: e,
                level: Yi.INFO,
                hideUserInfo: t,
                ...qi(n)
            })
        })), f = w) {
            this._sendFelog = e, this._sendFelogUsage = t, this._setUserId = n, this._setContainerId = r, this._sendUsageMetrics = o, this._sendFelogEvent = s, this._sendFelogCrashLogs = a, this._getUsageMetricsRate = u, this._shouldSendEvents = c, this._createPerfLogger = l, this._sendFelogMetricEvent = f, this._prepareDataString = (e, t) => {
                let n;
                try {
                    n = JSON.stringify(t)
                } catch (t) {
                    n = `stringify fail: '${t}', '${t&&t.message}'`, vs.warn(n, e)
                }
                return n
            }, this._sendEvent = e => {
                if (!1 !== this._shouldSendEvents) try {
                    this._sendFelogEvent(e)
                } catch (t) {
                    vs.warn(`Failed to send felog for ${JSON.stringify(e)}`, t)
                }
            }, this._sendException = e => (t, n) => {
                var r;
                return this._sendEvent({
                    message: null !== (r = null == t ? void 0 : t.message) && void 0 !== r ? r : String(t),
                    ...e,
                    extra: {
                        ...e.extra,
                        ...as(n, t)
                    }
                })
            }, this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(He().bundleInfo.browser), this.restoredBgConnection = e => {
                this._send("cs.connection.bg.restored", Yi.INFO, {
                    timeWithoutConnection: e
                })
            }, this.initWithoutBgConnection = () => {
                this._send("cs.connection.bg.disconnected", Yi.INFO)
            }, this.fetchDefinitionsFail = () => {
                this._send("cs.connection.api.definition.failed", Yi.WARN)
            }, this.tooLongPageConfigInit = e => {
                this._send("cs.pageConfig.init.exceeded", Yi.WARN, {
                    initTime: e
                })
            }, this.tooLongUserUpdateTime = e => {
                this._send("bg.state.user.update.exceeded", Yi.WARN, {
                    updateTime: e
                })
            }, this.lostBgPageConnection = () => {
                this._send("cs.gbutton.bgСonnection.lost", Yi.INFO)
            }, this.restoreBgPageConnection = e => {
                this._send("cs.gbutton.bgСonnection.restored", Yi.INFO, {
                    time: e
                })
            }, this.dynamicConfigLoadFromPrefsError = e => {
                this._sendSampled(ys, "bg.dynamicConfig.prefs.load.error", Yi.ERROR, {
                    message: e
                })
            }, this.dynamicConfigSaveToPrefsError = e => {
                this._sendSampled(ys, "bg.dynamicConfig.prefs.save.error", Yi.ERROR, {
                    message: e
                })
            }, this.dynamicConfigLoadFromServerError = e => {
                this._sendSampled(ys, "bg.dynamicConfig.server.load.error", Yi.ERROR, {
                    message: e
                })
            }, this.pageConfigCDNError = e => {
                this._send("cs.pageConfig.cdn.error", Yi.ERROR, {
                    message: e
                })
            }, this.pageConfigLocalStorageError = (e, t) => {
                this._send("cs.pageConfig.localStorage.error", Yi.INFO, {
                    message: e,
                    name: t
                })
            }, this.pageConfigUpdated = (e, t) => {
                this._send("cs.pageConfig.updated", Yi.INFO, {
                    oldVersion: e,
                    newVersion: t
                })
            }, this.settingsPopupTimeout = () => {
                this._send("settings.popup.init.timeout", Yi.WARN)
            }, this.settingsUsupportedShow = e => {
                this._send("settings.popup.state.unsupported.show", Yi.INFO, {
                    popupType: e
                })
            }, this.gnarClientInitFail = e => {
                this._send("gnar.bg.tracking.gnar.init.fail", Yi.WARN, {
                    message: e
                })
            }, this.bgTrackingInitFail = () => {
                this._send("debug.tracking.init.fail", Yi.INFO)
            }, this.userUpgradeClick = e => {
                this._send("cs.ui.action.upgradeClick", Yi.INFO, {
                    placement: e
                })
            }, this.gGbUpHookClick = () => {
                this._send("cs.ui.gb.uphook.click", Yi.INFO)
            }, this.gButtonClick = () => {
                this._send("cs.ui.gbutton.click", Yi.INFO)
            }, this.checkingToggledInField = e => {
                this._send("cs.ui.gbutton.toggleInField", Yi.INFO, {
                    enabled: e
                })
            }, this.unexpectedAnonymous = e => {
                this._send("debug.bg.session.unexpectedAnonymous", Yi.INFO, e)
            }, this.getDapiPropError = e => {
                this._send("bg.connection.dapi.getProp.error", Yi.WARN, {
                    statusCode: e
                })
            }, this.setDapiPropError = e => {
                this._send("bg.connection.dapi.setProp.error", Yi.WARN, {
                    statusCode: e
                })
            }, this.toggleExtensionDefs = e => {
                this._send("bg.settings.definitions.toggle", Yi.INFO, {
                    enabled: e
                })
            }, this.toggleExtension = (e, t) => {
                this._send("bg.settings.extension.toggle", Yi.INFO, {
                    enabled: e,
                    placement: t
                })
            }, this.disableUntilNextVisit = () => {
                this._send("cs.gbutton.disableUntilNextVisit", Yi.INFO)
            }, this.disableButtonClick = () => {
                this._send("cs.gbutton.disableButtonClick", Yi.INFO)
            }, this.cookieOverflow = (e, t) => {
                this._send("debug.bg.state.cookie.overflow", Yi.INFO, {
                    size: e,
                    biggestCookie: t
                })
            }, this.externalChangePlan = () => {
                this._send("bg.api.external.changePlan", Yi.INFO)
            }, this.externalChangeDialect = () => {
                this._send("bg.api.external.changeDialect", Yi.INFO)
            }, this.externalChangeUser = () => {
                this._send("bg.api.external.changeUsed", Yi.INFO)
            }, this.externalLogout = () => {
                this._send("bg.api.external.logout", Yi.INFO)
            }, this.bgPageStartFail = this._sendException({
                logger: "bg.start.fail",
                level: Yi.ERROR
            }), this.acceptDataControl = () => {
                this._send("bg.dataControl.accepted", Yi.INFO)
            }, this.bgPageInitTimeout = e => {
                this._send("bg.state.start.timeout", Yi.WARN, {
                    initTime: e
                })
            }, this.bgPageInitFail = e => {
                this._send("bg.state.init.fail", Yi.ERROR, {
                    initAttempts: e
                })
            }, this.extensionUpdated = (e, t) => {
                this._send("bg.state.updated", Yi.INFO, {
                    currentVersion: e,
                    previousVersion: t
                })
            }, this.extensionUpdateFail = e => {
                this._send("bg.state.update.fail", Yi.INFO, {
                    previousVersion: e
                })
            }, this.cannotGetInstallSource = () => {
                this._send("bg.getSource.fail", Yi.WARN)
            }, this.extensionInstall = e => {
                this._send("bg.state.install", Yi.INFO, {
                    source: e
                })
            }, this.chromeContentScriptLoadError = (e, t) => {
                this._send("bg.chrome.cs.load.error", Yi.WARN, {
                    message: e,
                    type: t
                })
            }, this.reloadNotificationShow = () => {
                this._send("bg.ui.notification.tabsReload.show", Yi.WARN)
            }, this.reloadNotificationClick = () => {
                this._send("bg.ui.notification.tabsReload.click", Yi.INFO)
            }, this.fetchUserFail = (e, t, n) => {
                this._send("bg.user.fetch.fail", Yi.WARN, {
                    body: t,
                    statusCode: n,
                    reason: e
                })
            }, this.fetchMimicFail = (e, t) => {
                this._send("bg.user.mimic.fail", Yi.WARN, {
                    body: e,
                    statusCode: t
                })
            }, this.fetchStatsFail = (e, t) => {
                this._send("bg.user.dapi.prop.stats.fail", Yi.WARN, {
                    body: e,
                    statusCode: t
                })
            }, this.frequentCookieChanges = e => {
                this._send("debug.cookie.onChange.error", Yi.INFO, {
                    canceled: e
                })
            }, this.initializePropFromDapi = e => {
                this._send("bg.state.dapi.prop.initialize", Yi.INFO, {
                    name: e
                })
            }, this.onboardingPopupShow = () => {
                this._send("cs.onboarding.popup.show", Yi.INFO)
            }, this.onboardingPopupCancel = () => {
                this._send("cs.onboarding.popup.cancel", Yi.INFO)
            }, this.onboardingTutorialShow = () => {
                this._send("cs.onboarding.tutorial.show", Yi.INFO)
            }, this.incognitoInit = () => {
                this._send("bg.incognito.init", Yi.INFO)
            }, this.disabledCookiesInit = () => {
                this._send("bg.cookie.disabled", Yi.INFO)
            }, this.loginReminderPopupShow = () => {
                this._send("cs.gbutton.popup.loginReminder.show", Yi.INFO)
            }, this.loginReminderBadgeShow = () => {
                this._send("bg.state.user.loginReminder.enable", Yi.INFO)
            }, this.unhandledBgPageException = e => {
                this._sendSampledEvent(.05, {
                    logger: "bg.unhandledException",
                    level: Yi.ERROR,
                    message: e.message,
                    extra: as({
                        message: e.error ? e.error.message : e.message,
                        filename: e.filename,
                        lineno: e.lineno,
                        colno: e.colno
                    }, e.error)
                })
            }, this.unhandledBgPageRejection = e => {
                const t = null != e.reason ? "string" == typeof e.reason ? e.reason : e.reason.message : void 0;
                this._sendSampledEvent(.05, {
                    logger: "bg.unhandledRejection",
                    level: Yi.ERROR,
                    message: t,
                    extra: as({
                        message: t
                    }, e.reason)
                })
            }, this.storageMigrationSucceeded = () => {
                this._send("bg.storageMigration.success", Yi.INFO, {})
            }, this.storageMigrationFailed = this._sendException({
                logger: "bg.storageMigration.failure",
                level: Yi.ERROR
            }), this.cardShowAction = () => {
                this._sendSampled(bs, "cs.editor.card.show", Yi.INFO)
            }, this.cardHideAction = () => {
                this._sendSampled(bs, "cs.editor.card.hide", Yi.INFO)
            }, this.cardReplacementAction = () => {
                this._sendSampled(bs, "cs.editor.card.replacement", Yi.INFO)
            }, this.cardAddToDictAction = () => {
                this._sendSampled(bs, "cs.editor.card.addToDict", Yi.INFO)
            }, this.cardIgnoreAction = () => {
                this._sendSampled(bs, "cs.editor.card.ignore", Yi.INFO)
            }, this.synonymCardShowAction = e => {
                this._sendSampled(bs, "cs.editor.synonym.show", Yi.INFO, {
                    notFoundCard: e
                })
            }, this.synonymCardHideAction = e => {
                this._sendSampled(bs, "cs.editor.synonym.hide", Yi.INFO, {
                    notFoundCard: e
                })
            }, this.synonymReplacementAction = () => {
                this._sendSampled(bs, "cs.editor.synonym.replacement", Yi.INFO)
            }, this.dictCardShowAction = () => {
                this._sendSampled(bs, "cs.editor.dict.show", Yi.INFO)
            }, this.dictCardHideAction = () => {
                this._sendSampled(bs, "cs.editor.dict.hide", Yi.INFO)
            }, this.couldNotParseTransform = (e, t) => {
                this._send("cs.cards.transforms.parse.error", Yi.WARN, {
                    transformHTML: e,
                    fallbackParseSuccessful: t
                })
            }, this.disabledTabLoad = e => {
                this._sendUsage("usage.loadOnDisabledTab", Yi.INFO, {
                    accountType: e
                })
            }, this.disabledTabByUserLoad = e => {
                this._sendUsage("usage.loadOnDisabledByUserTab", Yi.INFO, {
                    accountType: e
                })
            }, this.initSession = (e, t, n, r) => {
                this._sendUsage("usage.session.init", Yi.INFO, {
                    isTopSite: rs(e),
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r
                }), this._sendMetric("usage.session.init", {
                    domain: e,
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r
                })
            }, this.cardFirstInteraction = (e, t) => {
                this._sendUsage("usage.card.interaction", Yi.INFO, {
                    accountType: e,
                    fieldType: t
                })
            }, this.gnar = {
                nextPingDateWriteError: e => this._send("bg.gnarTracker.nextPingDateWriteError", Yi.ERROR, {
                    error: e
                }),
                sendError: this._sendException({
                    logger: "bg.gnarTracker.sendError",
                    level: Yi.ERROR
                }),
                trackBeforeSetUser: e => this._send("bg.gnarTracker.trackBeforeSetUser", Yi.INFO, {
                    millisSinceInit: e
                }),
                errorSetUser: this._sendException({
                    logger: "bg.gnarTracker.errorSetUser",
                    level: Yi.ERROR
                })
            }, this.fluidGdocs = {
                sidebarFail: T(((e, t) => this._sendException({
                    logger: "cs.gdocs.fluid.getSidebarFail",
                    level: Yi.ERROR
                })(e, {
                    type: t
                }))),
                noPage: T((() => this._send("cs.gdocs.fluid.noPage", Yi.ERROR))),
                getFullTextFailed: T((e => this._send("cs.gdocs.fluid.getFullTextFailed", Yi.INFO, {
                    type: e
                }))),
                contentMonitoringFailed: T(this._sendException({
                    logger: "cs.gdocs.fluid.contentMonitoringFailed",
                    level: Yi.WARN
                })),
                pageToTextMapFail: T((() => this._send("cs.gdocs.fluid.pageToTextMapFail", Yi.INFO))),
                nestedTablesAppearance: T((() => this._send("cs.gdocs.fluid.nestedTablesAppearance", Yi.INFO))),
                mapTableIssue: T((e => this._send("cs.gdocs.fluid.mapTableIssue", Yi.INFO, {
                    type: e
                }))),
                treeStructureFailure: T((() => this._send("cs.gdocs.fluid.treeStructureFailure", Yi.INFO))),
                textFragmentMapFail: T((() => this._send("cs.gdocs.fluid.textFragmentMapFail", Yi.INFO))),
                createMapFail: T(this._sendException({
                    logger: "cs.gdocs.fluid.createMapFail",
                    level: Yi.ERROR
                })),
                eventTargetFail: T(this._sendException({
                    logger: "cs.gdocs.fluid.eventTargetFail",
                    level: Yi.ERROR
                })),
                updateMapFail: T(this._sendException({
                    logger: "cs.gdocs.fluid.updateMapFail",
                    level: Yi.ERROR
                })),
                shiftMapFail: T(this._sendException({
                    logger: "cs.gdocs.fluid.shiftMapFail",
                    level: Yi.ERROR
                })),
                init: () => this._send("cs.gdocs.fluid.init", Yi.INFO),
                initOnCanvasAttempt: () => this._send("cs.gdocs.fluid.canvas", Yi.INFO),
                getTextPerf: this._createPerfLogger("cs.gdocs.fluid.perf.getText", 30),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.textMap"),
                updateTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.updateTextMap", 30)
            }, this.canvasGdocs = {
                injectedException: this._sendException({
                    logger: "cs.gdocs.canvas.injected.exception",
                    level: Yi.ERROR
                }),
                injectedError: (e, t, n) => this._sendEvent({
                    logger: "cs.gdocs.canvas.injected.error",
                    level: Yi.ERROR,
                    message: t,
                    extra: {
                        json: ss({
                            context: e,
                            data: n
                        })
                    }
                }),
                injectedUsageInit: () => this._sendMetric
            }, this.performance = {
                processInput: this._createPerfLogger("cs.fluid.processInput", 100),
                processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
                processFilterChange: this._createPerfLogger("cs.fluid.processFilterChange", 10),
                csInitialized: (e, t, n, r, o) => {
                    this._createPerfLogger("cs.initialized").custom({
                        _tag: ns.Data.Tagged.Types.csInit,
                        domain: self.location.host,
                        hideUserInfo: !0,
                        loadTime: e,
                        initTime: t,
                        pageLoadTime: n,
                        injectTime: r,
                        error: o ? {
                            message: o.message,
                            stack: o.stack
                        } : void 0
                    })
                },
                viewInjection: e => {
                    this._createPerfLogger("view.injection").custom({
                        _tag: ns.Data.Tagged.Types.viewInjection,
                        ...e
                    })
                }
            }, this.autocorrect = {
                responseTime: this._createPerfLogger("cs.autocorrect.responseTime", 10),
                predictTime: this._createPerfLogger("cs.autocorrect.predictTime", 10)
            }, this.assistant = {
                initTime: this._createPerfLogger("cs.assistant.initTime", 1),
                renderTime: this._createPerfLogger("cs.assistant.renderTime", 1),
                openTime: this._createPerfLogger("cs.assistant.openTime", 1)
            }, this.attentionHeatmap = {
                textChangeProcessingTime: this._createPerfLogger("cs.attentionHeatmap.textChangeProcessingTime", 100),
                responseProcessingTime: this._createPerfLogger("cs.attentionHeatmap.responseProcessingTime", 10),
                responseTime: this._createPerfLogger("cs.attentionHeatmap.responseTime", 10),
                renderTime: this._createPerfLogger("cs.attentionHeatmap.renderTime", 100)
            }, this.proofit = {
                availabilityQuotaError: e => {
                    this._sendEvent({
                        logger: "cs.proofit.availability_quota_error",
                        level: Yi.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                },
                submitResponseError: e => {
                    this._sendEvent({
                        logger: "cs.proofit.submit_response_error",
                        level: Yi.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                },
                progressError: e => {
                    this._sendEvent({
                        logger: "cs.proofit.progress_error",
                        level: Yi.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                },
                progressRejected: e => {
                    this._sendEvent({
                        logger: "cs.proofit.progress_rejected",
                        level: Yi.WARN,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                }
            }, this.oauthExchangeError = e => {
                this._send("bg.oauth.exchange.error", Yi.ERROR, {
                    message: e
                })
            }, this.chipmunkAPIError = e => {
                this._send("bg.chipmunk.api.error", Yi.ERROR, {
                    message: e
                })
            }
        }
        _send(e, t, n) {
            if (!1 === this._shouldSendEvents) return;
            const r = this._prepareDataString(e, n);
            try {
                this._sendFelog(e, void 0, t, null != n ? {
                    json: r
                } : void 0)
            } catch (t) {
                vs.warn(`Failed to send felog for ${e}: '${t&&t.message}'`, t)
            }
        }
        _sendUsage(e, t, n) {
            if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random()) try {
                this._sendFelogUsage(e, "", t, n)
            } catch (t) {
                vs.warn(`Failed to send usage felog for ${e}: '${t&&t.message}'`, t)
            }
        }
        _sendSampled(e, t, n, r) {
            e > Math.random() && this._send(t, n, r)
        }
        _sendSampledEvent(e, t) {
            e > Math.random() && this._sendEvent(t)
        }
        _sendMetric(e, t) {
            this._sendFelogMetricEvent({
                metricName: e,
                data: t
            })
        }
        sendCrashLogs(e, t) {
            if (!1 !== this._shouldSendEvents) try {
                this._sendFelogCrashLogs(t)
            } catch (t) {
                vs.warn(`Failed to send crash data data for ${e}: '${t&&t.message}'`, t)
            }
        }
        setUserId(e) {
            this._setUserId(e)
        }
        setContainerId(e) {
            this._setContainerId(e)
        }
        enableDataSharing() {
            this._shouldSendEvents = !0
        }
        notificationShown(e) {
            this._send("cs.notification.show", Yi.INFO, {
                type: e
            })
        }
        notificationHide(e) {
            this._send("cs.notification.hide", Yi.INFO, {
                type: e
            })
        }
    }
    class Es {
        constructor(e, t, n = w) {
            this.name = e, this._source = t, this._saveAction = n, this.dummy = !1, this.data = [], this.customBuffer = [], this._flush = () => {
                this.data.push(...this._source.flushMeasures(this.name)), this._saveAction(this.data)
            }, this.custom = e => {
                this.customBuffer.push(e)
            }, this.startMeasure = () => {
                const e = this._source.startMeasure(this.name),
                    t = () => this._flush();
                return {
                    endMeasure() {
                        try {
                            const n = e.endMeasure();
                            return t(), n
                        } catch (e) {
                            return
                        }
                    },
                    cancelMeasure: () => e.cancelMeasure()
                }
            }, this.measure = e => {
                const t = this._source.measure(this.name, e);
                try {
                    this._flush()
                } catch (e) {}
                return t
            }, this.measureAsync = e => {
                const t = this._source.startMeasure(this.name);
                return e().then((e => {
                    try {
                        t.endMeasure(), this._flush()
                    } catch (e) {}
                    return e
                }))
            }
        }
        getStats() {
            return this.data.length > 0 ? {
                ...ns.getStats(this.data),
                median: Qi(this.data),
                p90: Xi(this.data, .9),
                p99: Xi(this.data, .99)
            } : {}
        }
    }
    class Ss {
        constructor(e) {
            this._perf = e, this._log = yn.create("cs.telemetry.PerformanceMetricsImpl")
        }
        flushMeasures(e) {
            try {
                const t = this._perf.getEntriesByName(e, "measure");
                return this._perf.clearMeasures(e), t.map((e => e.duration))
            } catch (e) {
                return this._log.warn("failed to retrieve perf measurements", e), []
            }
        }
        startMeasure(e) {
            const t = Math.random(),
                n = `__${e}_${t}-start`,
                r = `__${e}_${t}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e), {
                    endMeasure: () => {},
                    cancelMeasure: w
                }
            }
            let o = !1;
            return {
                endMeasure: () => {
                    if (!o) {
                        o = !0;
                        try {
                            return this._perf.mark(r), this._perf.measure(e, n, r), this._perf.getEntriesByName(e, "measure")[0]
                        } catch (e) {
                            return void this._log.warn("could not complete measure", e)
                        }
                    }
                },
                cancelMeasure: () => {
                    this._perf.clearMarks(n), this._perf.clearMarks(r)
                }
            }
        }
        measure(e, t) {
            const n = `__${e}-start`,
                r = `__${e}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e), t()
            }
            try {
                return t()
            } finally {
                try {
                    this._perf.mark(r), this._perf.measure(e, n, r)
                } catch (e) {
                    this._log.warn("could not complete measure", e)
                }
            }
        }
    }! function(e) {
        e.create = function(t) {
            return void 0 !== t ? new e(t) : ts.dummy
        }
    }(Ss || (Ss = {}));
    const ws = 1e3,
        Cs = 6e4,
        Ts = 36e5,
        Os = 24 * Ts;

    function Ns(e) {
        return e * Os
    }

    function xs(e) {
        return e * ws
    }

    function ks(e) {
        return e * Cs
    }

    function Is(e) {
        return ws / e
    }
    const As = yn.create("tracking.telemetry.performance.felog");
    class Ps {
        constructor(e, t, n, r = 0, o = 6e4) {
            this.name = e, this._sendMetrics = t, this._source = n, this._minBufferSize = r, this._throttleTimeMs = o, this.dummy = !1, this._buffer = [], this._flush = O(this._throttleTimeMs, (() => {
                if (this._buffer.push(...this._source.flushMeasures(this.name)), this._buffer.length >= this._minBufferSize) {
                    const e = ns.getStats(this._buffer);
                    this._buffer = [], As.info(`sending perf stats for ${this.name}`, e), this._sendMetrics(this.name, {
                        _tag: ns.Data.Tagged.Types.stats,
                        ...e
                    })
                }
            })), this.custom = e => {
                this._sendMetrics(this.name, e)
            }, this.startMeasure = () => {
                const e = this._source.startMeasure(this.name),
                    t = () => this._flush();
                return {
                    endMeasure() {
                        try {
                            const n = e.endMeasure();
                            return t(), n
                        } catch (e) {
                            return
                        }
                    },
                    cancelMeasure: () => e.cancelMeasure()
                }
            }, this.measure = e => {
                const t = this._source.measure(this.name, e);
                try {
                    this._flush()
                } catch (e) {}
                return t
            }, this.measureAsync = e => {
                const t = this._source.startMeasure(this.name);
                return e().then((e => {
                    try {
                        t.endMeasure(), this._flush()
                    } catch (e) {}
                    return e
                }))
            }
        }
    }

    function Rs(e, t) {
        return {
            key: e,
            value: t
        }
    }

    function Ls(e, t) {
        return Rs(e, t)
    }

    function Ds(e) {
        return e.map((e => [e.key, e.value].map(encodeURIComponent).join("="))).join("&")
    }

    function Ms(e, t) {
        if (0 === t.length) return e;
        const n = e.includes("?");
        return [e, Ds(t)].join(n ? "&" : "?")
    }

    function Us(e) {
        const t = [];
        return void 0 !== e.medium && t.push(Ls("utm_medium", e.medium)), void 0 !== e.source && t.push(Ls("utm_source", e.source)), void 0 !== e.campaign && t.push(Ls("utm_campaign", e.campaign)), e.clickToRun && t.push(Ls("click_to_run", "true")), t
    }

    function Fs(e) {
        return Us(e)
    }

    function js(e) {
        return Us({
            medium: "internal",
            source: e
        })
    }
    const Bs = Rs("fromExtension", "" + !0);

    function Gs(e, t) {
        return Ms(Je().signup, [...Fs({
            medium: "internal",
            source: e,
            campaign: t
        }), Bs])
    }

    function Hs(e) {
        return Ms(Je().signin, [...js(e || "signinHook"), Bs])
    }
    Us({
        medium: "internal"
    })[0];
    class zs {
        constructor(e, t, n, r, o) {
            this._baseUrl = e, this._appName = t, this._appVersion = n, this._env = r, this._fetch = o, this._context = {
                userId: void 0,
                containerId: void 0
            }, this._sessionId = pe(), this._logEndpoint = `${this._baseUrl}/logv2`, this._crashEndpoint = function(e) {
                return `${e}/crashv2`
            }(this._baseUrl)
        }
        setUserId(e) {
            this._context = Object.assign({}, this._context, {
                userId: e
            })
        }
        setContainerId(e) {
            this._context = Object.assign({}, this._context, {
                containerId: e
            })
        }
        getContext() {
            return this._context
        }
        _sendRaw(e, t) {
            return this._fetch(e, {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                cache: "no-cache",
                body: JSON.stringify(t)
            }).then((e => {}), (e => {}))
        }
        sendEvent({
            hideUserInfo: e,
            ...t
        }) {
            const n = Ki(t, {
                    application: this._appName,
                    version: this._appVersion,
                    env: this._env,
                    context: e ? void 0 : this.getContext()
                }),
                r = Ms(this._logEndpoint, e ? [Rs("extended", "false")] : []);
            return this._sendRaw(r, n)
        }
        sendCrashLog(e) {
            const t = e.map((e => Ki(e, {
                application: this._appName,
                version: this._appVersion,
                sessionId: this._sessionId,
                env: this._env,
                context: this.getContext()
            })));
            return this._sendRaw(this._crashEndpoint, t)
        }
        sendUsageEvent(e, t, n, r) {
            const o = Ki({
                logger: e,
                message: t,
                level: n,
                extra_usage: r
            }, {
                application: this._appName,
                version: this._appVersion,
                env: this._env
            });
            return this._sendRaw(this._logEndpoint, o)
        }
        sendAggregatedMetricEvent({
            metricName: e,
            aggregateKey: t,
            aggregatedData: n,
            startTimestamp: r,
            endTimestamp: o
        }) {
            const i = Ki({
                logger: e,
                level: Yi.INFO,
                timestamp: r,
                endTimestamp: o,
                aggregateKey: t,
                aggregatedData: n
            }, {
                application: this._appName,
                version: this._appVersion,
                env: this._env
            });
            return this._sendRaw(this._logEndpoint, i)
        }
    }
    const Ws = {};

    function $s(e, t) {
        return {
            ...Vs,
            keySelector: e,
            resultSelector: t
        }
    }
    const Vs = {
            seedSelector: e => 0,
            aggregate: (e, t) => e + 1
        },
        qs = {
            "usage.session.init": {
                byTopSites: $s((({
                    domain: e
                }) => ({
                    topSiteId: os(e)
                })), ((e, t) => ({
                    count: t
                }))),
                byTopSiteAndField: $s((({
                    domain: e,
                    fieldType: t
                }) => ({
                    topSiteId: os(e),
                    fieldType: t
                })), ((e, t) => ({
                    count: t
                })))
            }
        };
    var Ys = function(e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.scheduler = t, r.work = n, r.pending = !1, r
            }
            return I(t, e), t.prototype.schedule = function(e, t) {
                if (void 0 === t && (t = 0), this.closed) return this;
                this.state = e;
                var n = this.id,
                    r = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(r, this.id, t), this
            }, t.prototype.requestAsyncId = function(e, t, n) {
                return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n)
            }, t.prototype.recycleAsyncId = function(e, t, n) {
                if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return t;
                clearInterval(t)
            }, t.prototype.execute = function(e, t) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(e, t);
                if (n) return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, t.prototype._execute = function(e, t) {
                var n = !1,
                    r = void 0;
                try {
                    this.work(e)
                } catch (e) {
                    n = !0, r = !!e && e || new Error(e)
                }
                if (n) return this.unsubscribe(), r
            }, t.prototype._unsubscribe = function() {
                var e = this.id,
                    t = this.scheduler,
                    n = t.actions,
                    r = n.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
            }, t
        }(function(e) {
            function t(t, n) {
                return e.call(this) || this
            }
            return I(t, e), t.prototype.schedule = function(e, t) {
                return void 0 === t && (t = 0), this
            }, t
        }(H)),
        Ks = function(e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.scheduler = t, r.work = n, r
            }
            return I(t, e), t.prototype.schedule = function(t, n) {
                return void 0 === n && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this)
            }, t.prototype.execute = function(t, n) {
                return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n)
            }, t.prototype.requestAsyncId = function(t, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, r) : t.flush(this)
            }, t
        }(Ys),
        Qs = function() {
            function e(t, n) {
                void 0 === n && (n = e.now), this.SchedulerAction = t, this.now = n
            }
            return e.prototype.schedule = function(e, t, n) {
                return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t)
            }, e.now = function() {
                return Date.now()
            }, e
        }(),
        Xs = function(e) {
            function t(n, r) {
                void 0 === r && (r = Qs.now);
                var o = e.call(this, n, (function() {
                    return t.delegate && t.delegate !== o ? t.delegate.now() : r()
                })) || this;
                return o.actions = [], o.active = !1, o.scheduled = void 0, o
            }
            return I(t, e), t.prototype.schedule = function(n, r, o) {
                return void 0 === r && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(n, r, o) : e.prototype.schedule.call(this, n, r, o)
            }, t.prototype.flush = function(e) {
                var t = this.actions;
                if (this.active) t.push(e);
                else {
                    var n;
                    this.active = !0;
                    do {
                        if (n = e.execute(e.state, e.delay)) break
                    } while (e = t.shift());
                    if (this.active = !1, n) {
                        for (; e = t.shift();) e.unsubscribe();
                        throw n
                    }
                }
            }, t
        }(Qs),
        Js = new(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return I(t, e), t
        }(Xs))(Ks),
        Zs = Js,
        ea = new X((function(e) {
            return e.complete()
        }));

    function ta(e) {
        return e ? function(e) {
            return new X((function(t) {
                return e.schedule((function() {
                    return t.complete()
                }))
            }))
        }(e) : ea
    }

    function na(e, t) {
        if (null != e) {
            if (function(e) {
                    return e && "function" == typeof e[q]
                }(e)) return function(e, t) {
                return new X((function(n) {
                    var r = new H;
                    return r.add(t.schedule((function() {
                        var o = e[q]();
                        r.add(o.subscribe({
                            next: function(e) {
                                r.add(t.schedule((function() {
                                    return n.next(e)
                                })))
                            },
                            error: function(e) {
                                r.add(t.schedule((function() {
                                    return n.error(e)
                                })))
                            },
                            complete: function() {
                                r.add(t.schedule((function() {
                                    return n.complete()
                                })))
                            }
                        }))
                    }))), r
                }))
            }(e, t);
            if (fn(e)) return function(e, t) {
                return new X((function(n) {
                    var r = new H;
                    return r.add(t.schedule((function() {
                        return e.then((function(e) {
                            r.add(t.schedule((function() {
                                n.next(e), r.add(t.schedule((function() {
                                    return n.complete()
                                })))
                            })))
                        }), (function(e) {
                            r.add(t.schedule((function() {
                                return n.error(e)
                            })))
                        }))
                    }))), r
                }))
            }(e, t);
            if (ln(e)) return hn(e, t);
            if (function(e) {
                    return e && "function" == typeof e[cn]
                }(e) || "string" == typeof e) return function(e, t) {
                if (!e) throw new Error("Iterable cannot be null");
                return new X((function(n) {
                    var r, o = new H;
                    return o.add((function() {
                        r && "function" == typeof r.return && r.return()
                    })), o.add(t.schedule((function() {
                        r = e[cn](), o.add(t.schedule((function() {
                            if (!n.closed) {
                                var e, t;
                                try {
                                    var o = r.next();
                                    e = o.value, t = o.done
                                } catch (e) {
                                    return void n.error(e)
                                }
                                t ? n.complete() : (n.next(e), this.schedule())
                            }
                        })))
                    }))), o
                }))
            }(e, t)
        }
        throw new TypeError((null !== e && typeof e || e) + " is not observable")
    }

    function ra(e, t) {
        return t ? na(e, t) : e instanceof X ? e : new X(dn(e))
    }
    var oa = new Xs(Ys);

    function ia(e) {
        return !j(e) && e - parseFloat(e) + 1 >= 0
    }

    function sa(e, t, n) {
        void 0 === e && (e = 0);
        var r = -1;
        return ia(t) ? r = Number(t) < 1 ? 1 : Number(t) : rn(t) && (n = t), rn(n) || (n = oa), new X((function(t) {
            var o = ia(e) ? e : +e - n.now();
            return n.schedule(aa, o, {
                index: 0,
                period: r,
                subscriber: t
            })
        }))
    }

    function aa(e) {
        var t = e.index,
            n = e.period,
            r = e.subscriber;
        if (r.next(t), !r.closed) {
            if (-1 === n) return r.complete();
            e.index = t + 1, this.schedule(e, n)
        }
    }

    function ua(e, t, n, r) {
        return function(o) {
            return o.lift(new ca(e, t, n, r))
        }
    }
    var ca = function() {
            function e(e, t, n, r) {
                this.keySelector = e, this.elementSelector = t, this.durationSelector = n, this.subjectSelector = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new la(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
            }, e
        }(),
        la = function(e) {
            function t(t, n, r, o, i) {
                var s = e.call(this, t) || this;
                return s.keySelector = n, s.elementSelector = r, s.durationSelector = o, s.subjectSelector = i, s.groups = null, s.attemptedToUnsubscribe = !1, s.count = 0, s
            }
            return I(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.keySelector(e)
                } catch (e) {
                    return void this.error(e)
                }
                this._group(e, t)
            }, t.prototype._group = function(e, t) {
                var n = this.groups;
                n || (n = this.groups = new Map);
                var r, o = n.get(t);
                if (this.elementSelector) try {
                    r = this.elementSelector(e)
                } catch (e) {
                    this.error(e)
                } else r = e;
                if (!o) {
                    o = this.subjectSelector ? this.subjectSelector() : new ht, n.set(t, o);
                    var i = new da(t, o, this);
                    if (this.destination.next(i), this.durationSelector) {
                        var s = void 0;
                        try {
                            s = this.durationSelector(new da(t, o))
                        } catch (e) {
                            return void this.error(e)
                        }
                        this.add(s.subscribe(new fa(t, o, this)))
                    }
                }
                o.closed || o.next(r)
            }, t.prototype._error = function(e) {
                var t = this.groups;
                t && (t.forEach((function(t, n) {
                    t.error(e)
                })), t.clear()), this.destination.error(e)
            }, t.prototype._complete = function() {
                var e = this.groups;
                e && (e.forEach((function(e, t) {
                    e.complete()
                })), e.clear()), this.destination.complete()
            }, t.prototype.removeGroup = function(e) {
                this.groups.delete(e)
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && e.prototype.unsubscribe.call(this))
            }, t
        }($),
        fa = function(e) {
            function t(t, n, r) {
                var o = e.call(this, n) || this;
                return o.key = t, o.group = n, o.parent = r, o
            }
            return I(t, e), t.prototype._next = function(e) {
                this.complete()
            }, t.prototype._unsubscribe = function() {
                var e = this.parent,
                    t = this.key;
                this.key = this.parent = null, e && e.removeGroup(t)
            }, t
        }($),
        da = function(e) {
            function t(t, n, r) {
                var o = e.call(this) || this;
                return o.key = t, o.groupSubject = n, o.refCountSubscription = r, o
            }
            return I(t, e), t.prototype._subscribe = function(e) {
                var t = new H,
                    n = this.refCountSubscription,
                    r = this.groupSubject;
                return n && !n.closed && t.add(new pa(n)), t.add(r.subscribe(e)), t
            }, t
        }(X),
        pa = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.parent = t, t.count++, n
            }
            return I(t, e), t.prototype.unsubscribe = function() {
                var t = this.parent;
                t.closed || this.closed || (e.prototype.unsubscribe.call(this), t.count -= 1, 0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe())
            }, t
        }(H);

    function ha(e, t) {
        return function(n) {
            if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new ga(e, t))
        }
    }
    var ga = function() {
            function e(e, t) {
                this.project = e, this.thisArg = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ma(e, this.project, this.thisArg))
            }, e
        }(),
        ma = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.project = n, o.count = 0, o.thisArg = r || o, o
            }
            return I(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.project.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }($),
        va = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.parent = t, n
            }
            return I(t, e), t.prototype._next = function(e) {
                this.parent.notifyNext(e)
            }, t.prototype._error = function(e) {
                this.parent.notifyError(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.parent.notifyComplete(), this.unsubscribe()
            }, t
        }($),
        ba = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return I(t, e), t.prototype.notifyNext = function(e) {
                this.destination.next(e)
            }, t.prototype.notifyError = function(e) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function() {
                this.destination.complete()
            }, t
        }($);

    function ya(e, t) {
        if (!t.closed) return e instanceof X ? e.subscribe(t) : dn(e)(t)
    }

    function _a(e, t, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function(r) {
            return r.pipe(_a((function(n, r) {
                return ra(e(n, r)).pipe(ha((function(e, o) {
                    return t(n, e, r, o)
                })))
            }), n))
        } : ("number" == typeof t && (n = t), function(t) {
            return t.lift(new Ea(e, n))
        })
    }
    var Ea = function() {
            function e(e, t) {
                void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Sa(e, this.project, this.concurrent))
            }, e
        }(),
        Sa = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var o = e.call(this, t) || this;
                return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }
            return I(t, e), t.prototype._next = function(e) {
                this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
            }, t.prototype._tryNext = function(e) {
                var t, n = this.index++;
                try {
                    t = this.project(e, n)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.active++, this._innerSub(t)
            }, t.prototype._innerSub = function(e) {
                var t = new va(this),
                    n = this.destination;
                n.add(t);
                var r = ya(e, t);
                r !== t && n.add(r)
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, t.prototype.notifyNext = function(e) {
                this.destination.next(e)
            }, t.prototype.notifyComplete = function() {
                var e = this.buffer;
                this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, t
        }(ba);

    function wa(e, t) {
        var n = !1;
        return arguments.length >= 2 && (n = !0),
            function(r) {
                return r.lift(new Ca(e, t, n))
            }
    }
    var Ca = function() {
            function e(e, t, n) {
                void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Ta(e, this.accumulator, this.seed, this.hasSeed))
            }, e
        }(),
        Ta = function(e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
            }
            return I(t, e), Object.defineProperty(t.prototype, "seed", {
                get: function() {
                    return this._seed
                },
                set: function(e) {
                    this.hasSeed = !0, this._seed = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._next = function(e) {
                if (this.hasSeed) return this._tryNext(e);
                this.seed = e, this.destination.next(e)
            }, t.prototype._tryNext = function(e) {
                var t, n = this.index++;
                try {
                    t = this.accumulator(this.seed, e, n)
                } catch (e) {
                    this.destination.error(e)
                }
                this.seed = t, this.destination.next(t)
            }, t
        }($),
        Oa = function() {
            function e() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }();

    function Na(e) {
        return function(t) {
            return 0 === e ? ta() : t.lift(new xa(e))
        }
    }
    var xa = function() {
            function e(e) {
                if (this.total = e, this.total < 0) throw new Oa
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ka(e, this.total))
            }, e
        }(),
        ka = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.total = n, r.ring = new Array, r.count = 0, r
            }
            return I(t, e), t.prototype._next = function(e) {
                var t = this.ring,
                    n = this.total,
                    r = this.count++;
                t.length < n ? t.push(e) : t[r % n] = e
            }, t.prototype._complete = function() {
                var e = this.destination,
                    t = this.count;
                if (t > 0)
                    for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                        var i = t++ % n;
                        e.next(r[i])
                    }
                e.complete()
            }, t
        }($);

    function Ia(e) {
        return void 0 === e && (e = null),
            function(t) {
                return t.lift(new Aa(e))
            }
    }
    var Aa = function() {
            function e(e) {
                this.defaultValue = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Pa(e, this.defaultValue))
            }, e
        }(),
        Pa = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }
            return I(t, e), t.prototype._next = function(e) {
                this.isEmpty = !1, this.destination.next(e)
            }, t.prototype._complete = function() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, t
        }($);

    function Ra(e, {
        windowUnitDuration: t = ks(1),
        scheduler: n = Js,
        logger: r
    } = {}) {
        return o => o.pipe(ua((e => e.metricName)), _a((o => {
            const i = o.key;
            if (!Boolean(e[i])) return null == r || r.warn(`Aggregators for metric ${i} are not defined`), ea;
            return ra(re(e[i]).map((([e, t]) => [`${i}.${e}`, t]))).pipe(_a((([e, r]) => o.pipe(ua((e => {
                return t = r.keySelector(e.data), JSON.stringify(t, ((e, t) => "object" == typeof t && t && !Array.isArray(t) ? function(e) {
                    const t = {};
                    for (const [n, r] of e) t[n] = r;
                    return t
                }(re(t).sort((([e], [t]) => e < t ? -1 : e > t ? 1 : 0))) : t));
                var t
            }), void 0, (e => {
                var n;
                return sa((null !== (n = r.aggregateWindowUnits) && void 0 !== n ? n : 1) * t)
            })), _a((e => e.pipe(function(e, t) {
                return arguments.length >= 2 ? function(n) {
                    return K(wa(e, t), Na(1), Ia(t))(n)
                } : function(t) {
                    return K(wa((function(t, n, r) {
                        return e(t, n, r + 1)
                    })), Na(1))(t)
                }
            }(((e, t) => function({
                keySelector: e,
                seedSelector: t,
                aggregate: n
            }, {
                data: r
            }, {
                now: o
            }, {
                aggregateKey: i,
                startTimestamp: s,
                aggregatedData: a
            } = {
                aggregateKey: e(r),
                startTimestamp: o(),
                aggregatedData: t(e(r))
            }) {
                return {
                    aggregateKey: i,
                    startTimestamp: s,
                    aggregatedData: n(a, r)
                }
            }(r, t, n, e)), void 0)))), It((e => Boolean(e))), ha((({
                aggregatedData: t,
                aggregateKey: o,
                startTimestamp: i
            }) => ({
                metricName: e,
                aggregateKey: o,
                startTimestamp: i,
                endTimestamp: n.now(),
                aggregatedData: r.resultSelector(o, t)
            })))))))
        })))
    }
    const La = yn.create("lib.tracking.call");
    let Da;
    var Ma;
    ! function(e) {
        function t() {
            return Da || (Da = Ke() ? new zs(Je().newFelog, He().appConfig.felog.appName, He().buildInfo.version, Xe(), ct(self).fetch) : void 0), Da
        }

        function n(e, t) {
            e(t)
        }
        const r = new ht,
            o = r.pipe(Ra(qs, {
                logger: La
            }));
        let i, s;
        ! function(e) {
            e.sendFelog = function(e, r, o, i) {
                const s = t();
                if (!s) throw Error("sendFelog unavailable");
                s.sendEvent({
                    logger: e,
                    message: r,
                    level: o,
                    extra: i
                }).catch((t => n(ct(s).sendEvent, {
                    logger: e,
                    message: r,
                    level: o,
                    extra: i
                })))
            }, e.sendFelogEvent = function(e) {
                const r = t();
                if (!r) throw Error("felog unavailable");
                r.sendEvent(e).catch((t => n(ct(r).sendEvent, e)))
            }, e.sendFelogCrashLogs = function(e) {
                const n = t();
                n && n.sendCrashLog(e)
            }, e.sendFelogUsageEvent = function(e, r, o, i) {
                const s = t();
                if (!s) throw Error("felogClient unavailable");
                s.sendUsageEvent(e, r, o, i).catch((t => n((e => {
                    s.sendUsageEvent(e.logger, e.message, e.level, e.usage)
                }), {
                    logger: e,
                    message: r,
                    level: o,
                    usage: i
                })))
            }, e.sendFelogMetricEvent = function(e) {
                i || (i = o.subscribe((e => {
                    const n = t();
                    n ? n.sendAggregatedMetricEvent(e).catch((t => (La.warn("Unable to send aggregated metric event (first attempt)", t), n.sendAggregatedMetricEvent(e)))).catch((e => {
                        La.error("Unable to send aggregated metric event", e)
                    })) : La.error("felogClient unavailable")
                }))), r.next(e)
            }, e.setUserId = function(e) {
                const n = t();
                n && n.setUserId(e)
            }, e.setContainerId = function(e) {
                const n = t();
                n && n.setContainerId(e)
            }
        }(s = e.methods || (e.methods = {})), e.CALL_HANDLER_ID = "tracking/RPC"
    }(Ma || (Ma = {}));
    const Ua = Object.keys(Ma.methods).reduce(((e, t) => (e[t] = (...e) => function(e, ...t) {
        const n = t => {
            La.warn(`tracking call ${e} failed, reason: `, t)
        };
        if (Ke()) me((() => {
            try {
                switch (La.info(e, t), e) {
                    case Ma.CALL_HANDLER_ID:
                        const n = t[0],
                            r = t.slice(1);
                        Ma.methods[n](...r);
                        break;
                    default:
                        ! function(e, t) {
                            const [n, r] = e.split(".");
                            if ("gnar" === n)
                                if (Ws.gnar)
                                    if ("track" === r) {
                                        const [e, n] = t;
                                        Ws.gnar.track({
                                            eventName: Ze() + "/" + e,
                                            ...n
                                        })
                                    } else if ("pingMaybe" === r) Ws.gnar.pingMaybe();
                            else if ("setUser" === r) try {
                                Ws.gnar.setUser(t[0], t[1])
                            } catch (e) {
                                ja().gnar.errorSetUser(e)
                            } else La.error(`gnar client does not have method '${r}' for '${e}' in runMessage`);
                            else La.error(`gnar client not available for '${e}' in runMessage`);
                            else La.error(`unrecognized '${e}' in runMessage`)
                        }(e, t)
                }
            } catch (e) {
                n(e)
            }
        }), 20);
        else {
            const r = 1e4;
            let o;
            const i = () => clearInterval(o),
                s = e => {
                    i(), n(e)
                };
            o = self.setTimeout((() => s("timeout call through bg page")), r), Qn("tracking-call", {
                msg: e,
                data: t
            }, i)
        }
    }(Ma.CALL_HANDLER_ID, t, ...e), e)), {});
    yn.create("lib.tracking.logger");
    let Fa;

    function ja() {
        if (!Fa) {
            const e = ct(Ua);
            Fa = new _s(e.sendFelog, e.sendFelogUsageEvent, e.setUserId, e.setContainerId, He().appConfig.felog.sendUsageMetrics, function() {
                const e = He().appConfig.felog.sendPerfMetricsType;
                return "local" === e ? (t = Ss.create(self.performance), e => e => {
                    const n = self.__GR_PERFORMANCE_STORE__ || {};
                    if (self.__GR_PERFORMANCE_STORE__ = n, e in n) return n[e]; {
                        const r = new Es(e, t);
                        return n[e] = r, r
                    }
                }) : ((e, t, n = 6e4) => r => (o, i) => e ? new Ps(o, r, t, i, n) : es.dummy())("send" === e, Ss.create(self.performance));
                var t
            }(), e.sendFelogEvent, e.sendFelogCrashLogs, void 0, void 0, void 0, e.sendFelogMetricEvent)
        }
        return Fa
    }
    var Ba = n(27378);
    class Ga extends Ba.Component {
        constructor() {
            super(...arguments), this.handleClick = e => {
                e && e.isTrusted && (e.stopPropagation(), e.stopImmediatePropagation(), this.props.clickHandler(e))
            }
        }
        componentDidMount() {
            this.wrapperRef && this.wrapperRef.addEventListener("click", this.handleClick)
        }
        componentWillUnmount() {
            this.wrapperRef && this.wrapperRef.removeEventListener("click", this.handleClick)
        }
        render() {
            return Ba.createElement("div", {
                ref: e => this.wrapperRef = e,
                style: this.props.style || {
                    display: "initial"
                },
                className: this.props.className,
                "data-grammarly-part": this.props.dataGrammarlyPart
            }, this.props.children)
        }
    }
    var Ha = n(61658);
    const za = e => Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
        className: Ha.icon
    }), Ba.createElement("div", {
        className: Ha.title
    }, "Grammarly isn’t active yet!"), Ba.createElement(Ga, {
        clickHandler: e.openAcceptPage
    }, Ba.createElement("button", {
        className: Ha.button
    }, Ba.createElement("span", {
        className: Ha.buttonText
    }, "Activate Grammarly"))));
    Ba.Component;
    class Wa extends Ba.Component {
        constructor(e) {
            super(e)
        }
        render() {
            const {
                institutionName: e,
                ssoUrl: t
            } = this.props;
            return Ba.createElement("div", {
                className: ue(Ha.managedSSOControl, Ha.settings)
            }, Ba.createElement("div", {
                className: Ha.illustration
            }), Ba.createElement("p", {
                className: Ha.title
            }, "Grammarly isn’t active yet!"), Ba.createElement("p", {
                className: Ha.text
            }, "To begin using Grammarly, you need to sign in with SSO under the ", Ba.createElement("b", null, e), " ", "organization."), Ba.createElement("div", {
                className: Ha.signInWithSSO
            }, Ba.createElement("a", {
                tabIndex: -1,
                target: "__blank",
                href: t
            }, "SIGN IN WITH SSO")))
        }
    }
    var $a = n(31542);

    function Va(e, t) {
        return (Va = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function qa(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Va(e, t)
    }
    var Ya = n(23615),
        Ka = n.n(Ya),
        Qa = Ka().shape({
            trySubscribe: Ka().func.isRequired,
            tryUnsubscribe: Ka().func.isRequired,
            notifyNestedSubs: Ka().func.isRequired,
            isSubscribed: Ka().func.isRequired
        }),
        Xa = Ka().shape({
            subscribe: Ka().func.isRequired,
            dispatch: Ka().func.isRequired,
            getState: Ka().func.isRequired
        });
    Ba.forwardRef;
    const Ja = function(e) {
        var t;
        void 0 === e && (e = "store");
        var n = e + "Subscription",
            r = function(t) {
                qa(o, t);
                var r = o.prototype;

                function o(n, r) {
                    var o;
                    return (o = t.call(this, n, r) || this)[e] = n.store, o
                }
                return r.getChildContext = function() {
                    var t;
                    return (t = {})[e] = this[e], t[n] = null, t
                }, r.render = function() {
                    return Ba.Children.only(this.props.children)
                }, o
            }(Ba.Component);
        return r.propTypes = {
            store: Xa.isRequired,
            children: Ka().element.isRequired
        }, r.childContextTypes = ((t = {})[e] = Xa.isRequired, t[n] = Qa, t), r
    }();

    function Za(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function eu() {
        return (eu = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function tu(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    var nu = n(55839),
        ru = n.n(nu),
        ou = n(3996),
        iu = n.n(ou),
        su = n(19185),
        au = null,
        uu = {
            notify: function() {}
        };
    var cu = function() {
            function e(e, t, n) {
                this.store = e, this.parentSub = t, this.onStateChange = n, this.unsubscribe = null, this.listeners = uu
            }
            var t = e.prototype;
            return t.addNestedSub = function(e) {
                return this.trySubscribe(), this.listeners.subscribe(e)
            }, t.notifyNestedSubs = function() {
                this.listeners.notify()
            }, t.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }, t.trySubscribe = function() {
                var e, t;
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = (e = [], t = [], {
                    clear: function() {
                        t = au, e = au
                    },
                    notify: function() {
                        for (var n = e = t, r = 0; r < n.length; r++) n[r]()
                    },
                    get: function() {
                        return t
                    },
                    subscribe: function(n) {
                        var r = !0;
                        return t === e && (t = e.slice()), t.push(n),
                            function() {
                                r && e !== au && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1))
                            }
                    }
                }))
            }, t.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = uu)
            }, e
        }(),
        lu = void 0 !== Ba.forwardRef,
        fu = 0,
        du = {};

    function pu() {}

    function hu(e, t) {
        var n, r;
        void 0 === t && (t = {});
        var o = t,
            i = o.getDisplayName,
            s = void 0 === i ? function(e) {
                return "ConnectAdvanced(" + e + ")"
            } : i,
            a = o.methodName,
            u = void 0 === a ? "connectAdvanced" : a,
            c = o.renderCountProp,
            l = void 0 === c ? void 0 : c,
            f = o.shouldHandleStateChanges,
            d = void 0 === f || f,
            p = o.storeKey,
            h = void 0 === p ? "store" : p,
            g = o.withRef,
            m = void 0 !== g && g,
            v = tu(o, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
            b = h + "Subscription",
            y = fu++,
            _ = ((n = {})[h] = Xa, n[b] = Qa, n),
            E = ((r = {})[b] = Qa, r);
        return function(t) {
            iu()((0, su.isValidElementType)(t), "You must pass a component to the function returned by " + u + ". Instead received " + JSON.stringify(t));
            var n = t.displayName || t.name || "Component",
                r = s(n),
                o = eu({}, v, {
                    getDisplayName: s,
                    methodName: u,
                    renderCountProp: l,
                    shouldHandleStateChanges: d,
                    storeKey: h,
                    withRef: m,
                    displayName: r,
                    wrappedComponentName: n,
                    WrappedComponent: t
                }),
                i = function(n) {
                    function i(e, t) {
                        var o;
                        return (o = n.call(this, e, t) || this).version = y, o.state = {}, o.renderCount = 0, o.store = e[h] || t[h], o.propsMode = Boolean(e[h]), o.setWrappedInstance = o.setWrappedInstance.bind(Za(Za(o))), iu()(o.store, 'Could not find "' + h + '" in either the context or props of "' + r + '". Either wrap the root component in a <Provider>, or explicitly pass "' + h + '" as a prop to "' + r + '".'), o.initSelector(), o.initSubscription(), o
                    }
                    qa(i, n);
                    var s = i.prototype;
                    return s.getChildContext = function() {
                        var e, t = this.propsMode ? null : this.subscription;
                        return (e = {})[b] = t || this.context[b], e
                    }, s.componentDidMount = function() {
                        d && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                    }, s.componentWillReceiveProps = function(e) {
                        this.selector.run(e)
                    }, s.shouldComponentUpdate = function() {
                        return this.selector.shouldComponentUpdate
                    }, s.componentWillUnmount = function() {
                        this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = pu, this.store = null, this.selector.run = pu, this.selector.shouldComponentUpdate = !1
                    }, s.getWrappedInstance = function() {
                        return iu()(m, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + u + "() call."), this.wrappedInstance
                    }, s.setWrappedInstance = function(e) {
                        this.wrappedInstance = e
                    }, s.initSelector = function() {
                        var t = e(this.store.dispatch, o);
                        this.selector = function(e, t) {
                            var n = {
                                run: function(r) {
                                    try {
                                        var o = e(t.getState(), r);
                                        (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null)
                                    } catch (e) {
                                        n.shouldComponentUpdate = !0, n.error = e
                                    }
                                }
                            };
                            return n
                        }(t, this.store), this.selector.run(this.props)
                    }, s.initSubscription = function() {
                        if (d) {
                            var e = (this.propsMode ? this.props : this.context)[b];
                            this.subscription = new cu(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        }
                    }, s.onStateChange = function() {
                        this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(du)) : this.notifyNestedSubs()
                    }, s.notifyNestedSubsOnComponentDidUpdate = function() {
                        this.componentDidUpdate = void 0, this.notifyNestedSubs()
                    }, s.isSubscribed = function() {
                        return Boolean(this.subscription) && this.subscription.isSubscribed()
                    }, s.addExtraProps = function(e) {
                        if (!(m || l || this.propsMode && this.subscription)) return e;
                        var t = eu({}, e);
                        return m && (t.ref = this.setWrappedInstance), l && (t[l] = this.renderCount++), this.propsMode && this.subscription && (t[b] = this.subscription), t
                    }, s.render = function() {
                        var e = this.selector;
                        if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                        return (0, Ba.createElement)(t, this.addExtraProps(e.props))
                    }, i
                }(Ba.Component);
            return lu && (i.prototype.UNSAFE_componentWillReceiveProps = i.prototype.componentWillReceiveProps, delete i.prototype.componentWillReceiveProps), i.WrappedComponent = t, i.displayName = r, i.childContextTypes = E, i.contextTypes = _, i.propTypes = _, ru()(i, t)
        }
    }
    var gu = Object.prototype.hasOwnProperty;

    function mu(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    function vu(e, t) {
        if (mu(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
            if (!gu.call(t, n[o]) || !mu(e[n[o]], t[n[o]])) return !1;
        return !0
    }

    function bu(e) {
        return function(t, n) {
            var r = e(t, n);

            function o() {
                return r
            }
            return o.dependsOnOwnProps = !1, o
        }
    }

    function yu(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
    }

    function _u(e, t) {
        return function(t, n) {
            n.displayName;
            var r = function(e, t) {
                return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
            };
            return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
                r.mapToProps = e, r.dependsOnOwnProps = yu(e);
                var o = r(t, n);
                return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = yu(o), o = r(t, n)), o
            }, r
        }
    }
    const Eu = [function(e) {
        return "function" == typeof e ? _u(e) : void 0
    }, function(e) {
        return e ? void 0 : bu((function(e) {
            return {
                dispatch: e
            }
        }))
    }, function(e) {
        return e && "object" == typeof e ? bu((function(t) {
            return function(e, t) {
                if ("function" == typeof e) return Er(e, t);
                if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
                    var i = n[o],
                        s = e[i];
                    "function" == typeof s && (r[i] = Er(s, t))
                }
                return r
            }(e, t)
        })) : void 0
    }];
    const Su = [function(e) {
        return "function" == typeof e ? _u(e) : void 0
    }, function(e) {
        return e ? void 0 : bu((function() {
            return {}
        }))
    }];

    function wu(e, t, n) {
        return eu({}, n, e, t)
    }
    const Cu = [function(e) {
        return "function" == typeof e ? function(e) {
            return function(t, n) {
                n.displayName;
                var r, o = n.pure,
                    i = n.areMergedPropsEqual,
                    s = !1;
                return function(t, n, a) {
                    var u = e(t, n, a);
                    return s ? o && i(u, r) || (r = u) : (s = !0, r = u), r
                }
            }
        }(e) : void 0
    }, function(e) {
        return e ? void 0 : function() {
            return wu
        }
    }];

    function Tu(e, t, n, r) {
        return function(o, i) {
            return n(e(o, i), t(r, i), i)
        }
    }

    function Ou(e, t, n, r, o) {
        var i, s, a, u, c, l = o.areStatesEqual,
            f = o.areOwnPropsEqual,
            d = o.areStatePropsEqual,
            p = !1;

        function h(o, p) {
            var h, g, m = !f(p, s),
                v = !l(o, i);
            return i = o, s = p, m && v ? (a = e(i, s), t.dependsOnOwnProps && (u = t(r, s)), c = n(a, u, s)) : m ? (e.dependsOnOwnProps && (a = e(i, s)), t.dependsOnOwnProps && (u = t(r, s)), c = n(a, u, s)) : v ? (h = e(i, s), g = !d(h, a), a = h, g && (c = n(a, u, s)), c) : c
        }
        return function(o, l) {
            return p ? h(o, l) : (a = e(i = o, s = l), u = t(r, s), c = n(a, u, s), p = !0, c)
        }
    }

    function Nu(e, t) {
        var n = t.initMapStateToProps,
            r = t.initMapDispatchToProps,
            o = t.initMergeProps,
            i = tu(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
            s = n(e, i),
            a = r(e, i),
            u = o(e, i);
        return (i.pure ? Ou : Tu)(s, a, u, e, i)
    }

    function xu(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r](e);
            if (o) return o
        }
        return function(t, r) {
            throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
        }
    }

    function ku(e, t) {
        return e === t
    }
    const Iu = (Ru = (Pu = void 0 === Au ? {} : Au).connectHOC, Lu = void 0 === Ru ? hu : Ru, Du = Pu.mapStateToPropsFactories, Mu = void 0 === Du ? Su : Du, Uu = Pu.mapDispatchToPropsFactories, Fu = void 0 === Uu ? Eu : Uu, ju = Pu.mergePropsFactories, Bu = void 0 === ju ? Cu : ju, Gu = Pu.selectorFactory, Hu = void 0 === Gu ? Nu : Gu, function(e, t, n, r) {
        void 0 === r && (r = {});
        var o = r,
            i = o.pure,
            s = void 0 === i || i,
            a = o.areStatesEqual,
            u = void 0 === a ? ku : a,
            c = o.areOwnPropsEqual,
            l = void 0 === c ? vu : c,
            f = o.areStatePropsEqual,
            d = void 0 === f ? vu : f,
            p = o.areMergedPropsEqual,
            h = void 0 === p ? vu : p,
            g = tu(o, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
            m = xu(e, Mu, "mapStateToProps"),
            v = xu(t, Fu, "mapDispatchToProps"),
            b = xu(n, Bu, "mergeProps");
        return Lu(Hu, eu({
            methodName: "connect",
            getDisplayName: function(e) {
                return "Connect(" + e + ")"
            },
            shouldHandleStateChanges: Boolean(e),
            initMapStateToProps: m,
            initMapDispatchToProps: v,
            initMergeProps: b,
            pure: s,
            areStatesEqual: u,
            areOwnPropsEqual: l,
            areStatePropsEqual: d,
            areMergedPropsEqual: h
        }, g))
    });
    var Au, Pu, Ru, Lu, Du, Mu, Uu, Fu, ju, Bu, Gu, Hu;
    const zu = /^http(s?)\:\/\/docs\.google\.com\/document/;
    var Wu = n(7648);

    function $u(e = Qe()) {
        return "chrome" === e && self.navigator.userAgent.includes("Edg") ? "edge" : e
    }
    const Vu = e => {
        var t;
        return Ba.createElement("div", {
            className: ue(Wu.header, !e.hideDelimiter && Wu.delimiter)
        }, Ba.createElement("a", {
            target: "_blank",
            href: null !== (t = e.appUrl) && void 0 !== t ? t : Je().app,
            className: ue(Wu.logo, Wu[$u(e.browser)])
        }))
    };
    var qu, Yu = n(42918);
    ! function(e) {
        e.SignUp = "signup", e.LogIn = "login"
    }(qu || (qu = {}));
    const Ku = e => Ba.createElement(Ba.Fragment, null, Ba.createElement(Ga, {
            clickHandler: () => e.handleClick(qu.SignUp)
        }, Ba.createElement("div", {
            className: Yu.button
        }, "Sign up")), Ba.createElement("div", {
            className: Yu.alternative
        }, "Already have an account?", " ", Ba.createElement(Ga, {
            clickHandler: () => e.handleClick(qu.LogIn)
        }, Ba.createElement("span", {
            className: Yu.link
        }, "Log in")))),
        Qu = e => Ba.createElement(Ba.Fragment, null, Ba.createElement(Ga, {
            clickHandler: () => e.handleClick(qu.LogIn)
        }, Ba.createElement("div", {
            className: Yu.button
        }, "Sign in")), Ba.createElement("div", {
            className: Yu.alternative
        }, "Don't have an account?", " ", Ba.createElement(Ga, {
            clickHandler: () => e.handleClick(qu.SignUp)
        }, Ba.createElement("span", {
            className: Yu.link
        }, "Sign up for free")))),
        Xu = new Proxy({}, {
            get: (e, t) => (...e) => Qn("gnar-track", {
                method: t,
                props: e
            })
        });
    var Ju, Zu = n(12658);
    ! function(e) {
        e.hide = "hideGdocsSigninPopupMessage"
    }(Ju || (Ju = {}));
    const ec = e => Ba.createElement("div", {
        className: Zu.wrapper
    }, Ba.createElement(Vu, null), Ba.createElement("div", {
        className: Zu.content
    }, Ba.createElement("div", {
        className: Zu.animation
    }), Ba.createElement("div", {
        className: Zu.title
    }, "Welcome to the Grammarly", $e() ? "" : " beta", Ba.createElement("br", null), "for Google Docs!"), Ba.createElement("div", {
        className: Zu.subtitle
    }, "Sign up to turn on Grammarly", Ba.createElement("br", null), "suggestions in your Google Docs."), Ba.createElement(Ku, {
        handleClick: t => {
            const n = "signup" === t ? Gs("signupHook", "toolbarMenu") : Hs();
            e.openSigninPage(n), e.onClick(), Xu.gdocsRegisterPromptButtonClick(t)
        }
    })));
    const tc = new class {
            constructor() {
                this._currentRef = 0, this._tooltipsSubject = new mt(null), this.tooltips = this._tooltipsSubject.asObservable()
            }
            show(e) {
                this.hide(this._currentRef);
                const t = e.showDelay || 0;
                return this._timeoutHandler = setTimeout((() => {
                    this._tooltipsSubject.next(e)
                }), t), ++this._currentRef
            }
            hide(e) {
                e === this._currentRef && (this.clearTimeout(), this._tooltipsSubject.next(null))
            }
            clearTimeout() {
                null !== this._timeoutHandler && (clearTimeout(this._timeoutHandler), this._timeoutHandler = null)
            }
        },
        nc = Ba.createContext(tc),
        rc = ({
            children: e
        }) => Ba.createElement(nc.Provider, {
            value: tc
        }, e);

    function oc(e, t) {
        return function(n) {
            return n.lift(new ic(e, t))
        }
    }
    var ic = function() {
            function e(e, t) {
                this.compare = e, this.keySelector = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new sc(e, this.compare, this.keySelector))
            }, e
        }(),
        sc = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.keySelector = r, o.hasKey = !1, "function" == typeof n && (o.compare = n), o
            }
            return I(t, e), t.prototype.compare = function(e, t) {
                return e === t
            }, t.prototype._next = function(e) {
                var t;
                try {
                    var n = this.keySelector;
                    t = n ? n(e) : e
                } catch (e) {
                    return this.destination.error(e)
                }
                var r = !1;
                if (this.hasKey) try {
                    r = (0, this.compare)(this.key, t)
                } catch (e) {
                    return this.destination.error(e)
                } else this.hasKey = !0;
                r || (this.key = t, this.destination.next(e))
            }, t
        }($);

    function ac(e, t) {
        return n => {
            e.forEach((e => {
                "function" == typeof e ? e(n) : e && (e.current = n), null == t || t(n)
            }))
        }
    }

    function uc(e) {
        return "ref" in e && (null === e.ref || "function" == typeof e.ref || "object" == typeof e.ref && "current" in e.ref)
    }
    var cc = 1,
        lc = function() {
            return Promise.resolve()
        }(),
        fc = {};

    function dc(e) {
        return e in fc && (delete fc[e], !0)
    }
    var pc, hc = function(e) {
            var t = cc++;
            return fc[t] = !0, lc.then((function() {
                return dc(t) && e()
            })), t
        },
        gc = function(e) {
            dc(e)
        },
        mc = function(e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.scheduler = t, r.work = n, r
            }
            return I(t, e), t.prototype.requestAsyncId = function(t, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this), t.scheduled || (t.scheduled = hc(t.flush.bind(t, null))))
            }, t.prototype.recycleAsyncId = function(t, n, r) {
                if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, n, r);
                0 === t.actions.length && (gc(n), t.scheduled = void 0)
            }, t
        }(Ys),
        vc = new(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return I(t, e), t.prototype.flush = function(e) {
                this.active = !0, this.scheduled = void 0;
                var t, n = this.actions,
                    r = -1,
                    o = n.length;
                e = e || n.shift();
                do {
                    if (t = e.execute(e.state, e.delay)) break
                } while (++r < o && (e = n.shift()));
                if (this.active = !1, t) {
                    for (; ++r < o && (e = n.shift());) e.unsubscribe();
                    throw t
                }
            }, t
        }(Xs))(mc);

    function bc() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e[e.length - 1];
        return rn(n) ? (e.pop(), hn(e, n)) : gn(e)
    }

    function yc(e) {
        var t = e.error;
        e.subscriber.error(t)
    }
    pc || (pc = {});
    var _c = function() {
        function e(e, t, n) {
            this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e
        }
        return e.prototype.observe = function(e) {
            switch (this.kind) {
                case "N":
                    return e.next && e.next(this.value);
                case "E":
                    return e.error && e.error(this.error);
                case "C":
                    return e.complete && e.complete()
            }
        }, e.prototype.do = function(e, t, n) {
            switch (this.kind) {
                case "N":
                    return e && e(this.value);
                case "E":
                    return t && t(this.error);
                case "C":
                    return n && n()
            }
        }, e.prototype.accept = function(e, t, n) {
            return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n)
        }, e.prototype.toObservable = function() {
            var e, t;
            switch (this.kind) {
                case "N":
                    return bc(this.value);
                case "E":
                    return e = this.error, new X(t ? function(n) {
                        return t.schedule(yc, 0, {
                            error: e,
                            subscriber: n
                        })
                    } : function(t) {
                        return t.error(e)
                    });
                case "C":
                    return ta()
            }
            throw new Error("unexpected notification kind value")
        }, e.createNext = function(t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification
        }, e.createError = function(t) {
            return new e("E", void 0, t)
        }, e.createComplete = function() {
            return e.completeNotification
        }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
    }();

    function Ec(e, t) {
        return void 0 === t && (t = 0),
            function(n) {
                return n.lift(new wc(e, t))
            }
    }
    var Sc, wc = function() {
            function e(e, t) {
                void 0 === t && (t = 0), this.scheduler = e, this.delay = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Cc(e, this.scheduler, this.delay))
            }, e
        }(),
        Cc = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = 0);
                var o = e.call(this, t) || this;
                return o.scheduler = n, o.delay = r, o
            }
            return I(t, e), t.dispatch = function(e) {
                var t = e.notification,
                    n = e.destination;
                t.observe(n), this.unsubscribe()
            }, t.prototype.scheduleMessage = function(e) {
                this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new Tc(e, this.destination)))
            }, t.prototype._next = function(e) {
                this.scheduleMessage(_c.createNext(e))
            }, t.prototype._error = function(e) {
                this.scheduleMessage(_c.createError(e)), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.scheduleMessage(_c.createComplete()), this.unsubscribe()
            }, t
        }($),
        Tc = function() {
            return function(e, t) {
                this.notification = e, this.destination = t
            }
        }();

    function Oc(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), _a(Y, e)
    }

    function Nc() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Number.POSITIVE_INFINITY,
            r = null,
            o = e[e.length - 1];
        return rn(o) ? (r = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof o && (n = e.pop()), null === r && 1 === e.length && e[0] instanceof X ? e[0] : Oc(n)(gn(e, r))
    }

    function xc() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return t.lift.call(Nc.apply(void 0, [t].concat(e)))
        }
    }

    function kc() {
        return Oc(1)
    }

    function Ic() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return kc()(bc.apply(void 0, e))
    }

    function Ac() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e[e.length - 1];
        return rn(n) ? (e.pop(), function(t) {
            return Ic(e, t, n)
        }) : function(t) {
            return Ic(e, t)
        }
    }

    function Pc(e) {
        var t = e.subscriber,
            n = e.counter,
            r = e.period;
        t.next(n), this.schedule({
            subscriber: t,
            counter: n + 1,
            period: r
        }, r)
    }! function(e) {
        const t = e => {
            return (t = e, void 0 === t && (t = 0), void 0 === n && (n = oa), (!ia(t) || t < 0) && (t = 0), n && "function" == typeof n.schedule || (n = oa), new X((function(e) {
                return e.add(n.schedule(Pc, t, {
                    subscriber: e,
                    counter: 0,
                    period: t
                })), e
            }))).pipe(kt());
            var t, n
        };
        e.sec2 = t(xs(2)), e.sec1 = t(xs(1)), e.hz4 = t(Is(4)), e.hz10 = t(Is(10)), e.hz30 = t(Is(30));
        const n = new Map;
        e.create = function(e) {
            const r = n.get(e);
            if (r) return r; {
                const r = t(e);
                return n.set(e, r), r
            }
        }
    }(Sc || (Sc = {}));
    var Rc, Lc;

    function Dc(e, t, n, r, o, i, s, a, u, c, l, f) {
        const d = {
                top: n.top + a.top,
                left: n.left + a.left,
                width: n.width - a.left - a.right,
                height: n.height - a.top - a.bottom
            },
            p = function(e, t, n, r, o, i, s, a, u) {
                const c = Hc(e, t, n, r, u, i, s);
                return [{
                    ...c,
                    flippedHorizontal: !1,
                    flippedVertical: !1
                }].concat((Array.isArray(o) ? o : [o]).map((o => ({
                    ...Hc(e, Gc(t, o), Gc(n, o), Bc(r, c.overlap, o, i, s, a), u, i, s),
                    flippedHorizontal: "flip" === o.horizontal,
                    flippedVertical: "flip" === o.vertical
                }))))
            }({
                top: r.top - s.top,
                left: r.left - s.left,
                width: r.width + s.left + s.right,
                height: r.height + s.top + s.bottom
            }, o, i, u, l, e, t, f, d),
            h = p.reduce(((e, t) => e.overlap.vertical <= t.overlap.vertical ? e : t)),
            g = p.reduce(((e, t) => e.overlap.horizontal <= t.overlap.horizontal ? e : t));
        return Mc({
            top: h.position.top,
            left: g.position.left,
            flippedHorizontal: g.flippedHorizontal,
            flippedVertical: h.flippedVertical
        }, c, n, e, t)
    }! function(e) {
        function t(e, t) {
            return n(e, t).pipe(kt(), Ec(vc))
        }

        function n(e, t) {
            return new X((n => {
                const r = new MutationObserver((e => n.next(e)));
                return r.observe(e, t), () => r.disconnect()
            }))
        }
        e.create = t, e.createUnsafe = n, e.createFlattenHot = function(e, t) {
            return n(e, t).pipe(_a((e => e), r, 1), kt());
            var r
        }, e.observeAttribute = function(e, n) {
            return t(e, {
                attributes: !0,
                attributeFilter: [n],
                subtree: !1,
                childList: !1
            }).pipe(ha((t => e.getAttribute(n))))
        }, e.observeStyle = function(e) {
            return t(e, {
                attributes: !0,
                attributeFilter: ["style"],
                subtree: !1,
                childList: !1
            }).pipe(ha((t => e.style)))
        }, e.observeChildList = function(e) {
            return t(e, {
                attributes: !1,
                subtree: !1,
                childList: !0
            }).pipe(ha((t => e.childNodes)))
        }
    }(Rc || (Rc = {})),
    function(e) {
        function t(e) {
            return function(e) {
                return new X((t => {
                    const r = n((() => t.next()));
                    return e.forEach((e => r.observe(e))), () => r.disconnect()
                }))
            }(e).pipe(kt(), Ec(vc))
        }

        function n(e) {
            return new r(e)
        }
        e.observeSizeChanges = function(e) {
            return t(e)
        }, e.getResizeObserver = n;
        class r {
            constructor(e) {
                this._af = null, this._callbackWasInvoked = !1;
                const t = () => {
                    this._callbackWasInvoked ? (null !== this._af && cancelAnimationFrame(this._af), this._af = requestAnimationFrame((() => {
                        e()
                    }))) : (e(), this._callbackWasInvoked = !0)
                };
                try {
                    this._resizeObserver = new ResizeObserver(t)
                } catch (e) {
                    this._resizeObserver = new o(t)
                }
            }
            observe(e) {
                this._clearAnimationFrame(), this._resizeObserver.observe(e)
            }
            unobserve(e) {
                this._resizeObserver.unobserve(e), this._clearAnimationFrame()
            }
            disconnect() {
                this._resizeObserver.disconnect(), this._clearAnimationFrame()
            }
            _clearAnimationFrame() {
                this._af && (cancelAnimationFrame(this._af), this._af = null), this._callbackWasInvoked = !1
            }
        }
        class o {
            constructor(e) {
                this._callback = e, this._sub = null
            }
            observe(e) {
                this._sub = Rc.create(e, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                }).pipe(xc(Sc.hz4), Ac(null)).subscribe((() => {
                    this._callback()
                }))
            }
            unobserve() {
                this._sub && (this._sub.unsubscribe(), this._sub = null)
            }
            disconnect() {
                this.unobserve()
            }
        }
    }(Lc || (Lc = {}));
    const Mc = (e, t, n, r, o) => {
        if (void 0 === t) return e;
        const i = Bc(t, Uc(Fc({
            top: e.top + t.vertical,
            left: e.left + t.horizontal,
            width: r,
            height: o
        }, n)), {
            horizontal: "translate",
            vertical: "translate"
        }, r, o, !1);
        return {
            ...e,
            top: e.top + i.vertical,
            left: e.left + i.horizontal
        }
    };

    function Uc(e) {
        const t = Math.abs(Math.min(e.left, 0)),
            n = Math.abs(Math.min(e.right, 0)),
            r = Math.abs(Math.min(e.top, 0)),
            o = Math.abs(Math.min(e.bottom, 0));
        return {
            horizontal: t + n,
            vertical: r + o,
            top: r,
            bottom: o,
            left: t,
            right: n
        }
    }

    function Fc(e, t) {
        return {
            top: e.top - t.top,
            bottom: t.top + t.height - (e.top + e.height),
            left: e.left - t.left,
            right: t.left + t.width - (e.left + e.width)
        }
    }

    function jc(e = document) {
        return {
            top: 0,
            left: 0,
            height: e.documentElement.clientHeight,
            width: e.documentElement.clientWidth
        }
    }

    function Bc(e, t, n, r, o, i) {
        const s = t.left && t.right ? 0 : 0 !== t.left ? Math.min(t.left, i ? r : 1 / 0) : -Math.min(t.right, i ? r : 1 / 0),
            a = t.top && t.bottom ? 0 : 0 !== t.top ? Math.min(t.top, i ? o : 1 / 0) : -Math.min(t.bottom, i ? o : 1 / 0);
        return {
            horizontal: "translate" === n.horizontal ? e.horizontal + s : -e.horizontal,
            vertical: "translate" === n.vertical ? e.vertical + a : -e.vertical
        }
    }

    function Gc(e, t) {
        return {
            vertical: "translate" === t.vertical ? e.vertical : "top" === e.vertical ? "bottom" : "top",
            horizontal: "translate" === t.horizontal ? e.horizontal : "left" === e.horizontal ? "right" : "left"
        }
    }

    function Hc(e, t, n, r, o, i, s) {
        const {
            top: a,
            left: u
        } = function(e, t, n, r, o) {
            return {
                top: e.top + o.vertical + ("bottom" === n.vertical ? e.height : "center" === n.vertical ? e.height / 2 : 0) - ("bottom" === r.vertical ? t.height : "center" === r.vertical ? t.height / 2 : 0),
                left: e.left + o.horizontal + ("right" === n.horizontal ? e.width : "center" === n.horizontal ? e.width / 2 : 0) - ("right" === r.horizontal ? t.width : "center" === r.horizontal ? t.width / 2 : 0)
            }
        }(e, {
            width: i,
            height: s
        }, t, n, r);
        return {
            position: {
                top: a,
                left: u
            },
            overlap: Uc(Fc({
                top: a,
                left: u,
                width: i,
                height: s
            }, o))
        }
    }
    const zc = {
            top: -1e4,
            left: -1e4,
            flippedHorizontal: !1,
            flippedVertical: !1,
            width: 0,
            height: 0
        },
        Wc = Ba.createContext(bc(zc)),
        $c = Ba.forwardRef((({
            children: e,
            anchorRect: t,
            anchorOrigin: n = {
                vertical: "bottom",
                horizontal: "left"
            },
            elementOrigin: r = {
                vertical: "top",
                horizontal: "left"
            },
            offset: o = {
                horizontal: 0,
                vertical: 0
            },
            postRepositioningOffset: i,
            repositioning: s = {
                horizontal: "translate",
                vertical: "flip"
            },
            anchorMargin: a = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            },
            viewportMargin: u = 16,
            viewportRect: c = jc(),
            stickToTarget: l = !0
        }, f) => {
            const d = Ba.useRef(null),
                p = Ba.useRef(null),
                h = Ba.useRef(new mt(zc)),
                [g, m] = Ba.useState(h.current.value);
            Ba.useEffect((() => {
                const e = h.current.pipe(oc(((e, t) => function(e, t) {
                    return Math.floor(e.top) === Math.floor(t.top) && Math.floor(e.left) === Math.floor(t.left) && Math.floor(e.width) === Math.floor(t.width) && Math.floor(e.height) === Math.floor(t.height)
                }(e, t)))).subscribe(m);
                return () => e.unsubscribe()
            }), []);
            const v = () => {
                var e, f;
                const p = null === (e = d.current) || void 0 === e ? void 0 : e.clientWidth,
                    g = null === (f = d.current) || void 0 === f ? void 0 : f.clientHeight;
                if (p && g) {
                    const e = Dc(p, g, c, t, n, r, a, {
                        top: u,
                        bottom: u,
                        left: u,
                        right: u
                    }, o, i, s, l);
                    h.current.next({
                        ...e,
                        width: p,
                        height: g
                    })
                }
            };
            Ba.useEffect((() => {
                var e;
                return d && d.current && (null === (e = p.current) || void 0 === e || e.disconnect(), p.current = Lc.getResizeObserver(v), p.current.observe(d.current)), () => {
                    var e;
                    return null === (e = p.current) || void 0 === e ? void 0 : e.disconnect()
                }
            }), [d.current]), Ba.useLayoutEffect((() => {
                v()
            }), [c.top, c.left, c.width, c.height, t.top, t.left, t.width, t.height, n.horizontal, n.vertical, r.horizontal, r.vertical, o.horizontal, o.vertical, null == i ? void 0 : i.horizontal, null == i ? void 0 : i.vertical, a.top, a.right, a.bottom, a.left, u, l]);
            const b = {
                ref: ac([f, d, ...uc(e) ? [e.ref] : []])
            };
            return Ba.createElement(Wc.Provider, {
                value: h.current
            }, Ba.cloneElement(e(g), b))
        }));
    var Vc = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        qc = function(e) {
            function t() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = t._initState, n
            }
            return Vc(t, e), t.prototype.render = function() {
                return this.state.renderCache || null
            }, t.prototype._subscribe = function(e) {
                var t = e.props,
                    n = e.component,
                    r = 0;
                switch (Jc(t, (function() {
                        return r += 1
                    })), r) {
                    case 0:
                        this.setState({
                            subscription: null,
                            renderCache: Zc(n, t)
                        });
                        break;
                    case 1:
                        new rl(this, e);
                        break;
                    default:
                        new ol(this, e, r)
                }
            }, t.prototype._unsubscribe = function() {
                var e = this.state ? this.state.subscription : null;
                e && e.unsubscribe()
            }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this._unsubscribe(), this._subscribe(e)
            }, t.prototype.UNSAFE_componentWillMount = function() {
                this._unsubscribe(), this._subscribe(this.props)
            }, t.prototype.componentWillUnmount = function() {
                this._unsubscribe(), this.setState(t._initState)
            }, t.prototype.shouldComponentUpdate = function(e, t, n) {
                return t.renderCache !== this.state.renderCache
            }, t._initState = {
                renderCache: null,
                subscription: null
            }, t._endState = {
                subscription: null
            }, t
        }(Ba.Component);
    var Yc = "children",
        Kc = "style",
        Qc = "mount",
        Xc = "forwardRef";

    function Jc(e, t) {
        for (var n in e) {
            var r = e[n];
            if (r instanceof X) t(r);
            else if (Yc === n && r instanceof Array)
                for (var o = r.length, i = 0; i < o; ++i) {
                    var s = r[i];
                    s instanceof X && t(s)
                } else if (Kc === n)
                    for (var a in r) {
                        var u = r[a];
                        u instanceof X && t(u)
                    }
        }
    }

    function Zc(e, t, n) {
        void 0 === n && (n = []);
        var r, o = {},
            i = -1;
        for (var s in t) {
            var a = t[s],
                u = s === Yc,
                c = s === Xc || s === Qc,
                l = s === Kc;
            if (a instanceof X) {
                var f = n[++i];
                u ? r = f : c ? o.ref = f : o[s] = f
            } else if (u) {
                if (a instanceof Array)
                    for (var d = a.length, p = 0; p < d; ++p) {
                        if (a[p] instanceof X) {
                            if (!r) {
                                r = Array(a.length);
                                for (var h = 0; h < p; ++h) r[h] = a[h]
                            }
                            var g = n[++i];
                            r[p] = !g || g.key ? g : Ba.createElement(Ba.Fragment, {
                                key: p
                            }, g)
                        } else r && (r[p] = a[p])
                    }
                r = r || a
            } else if (c) o.ref = a;
            else if (l) {
                var m = void 0;
                for (var p in a) {
                    var v = a[p];
                    if (v instanceof X) {
                        if (!m)
                            for (var h in m = {}, a) {
                                if (h === p) break;
                                m[h] = a[h]
                            }
                        m[p] = n[++i]
                    } else m && (m[p] = v)
                }
                o.style = m || a
            } else o[s] = a
        }
        return Ba.createElement(e, o, void 0 === r ? null : r)
    }
    var el = function() {
            function e(e, t) {
                this.state = e, this.props = t
            }
            return e.prototype.setState = function(e) {
                var t = "function" == typeof e ? e(this.state) : e;
                "subscription" in t && (this.state.subscription = t.subscription), "renderCache" in t && (this.state.renderCache = t.renderCache)
            }, e
        }(),
        tl = function(e) {
            throw e
        };

    function nl(e) {
        Xt((e ? "The component <" + e + ">" : "An unnamed component") + " has received an observable that doesn't immediately emit a value in one of its props. Since this observable hasn't yet called its subscription handler, the component can not be rendered at the time. Check the props of " + (e ? "<" + e + ">" : "this component") + ".")
    }
    var rl = function() {
            function e(e, t) {
                var n = this;
                this._innerSubscription = null, this._receivedValue = !1;
                var r = {
                    subscription: this,
                    renderCache: e.state && e.state.renderCache
                };
                this._liftedComponent = new el(r, t), Jc(t.props, (function(e) {
                    n._innerSubscription = e.subscribe((function(e) {
                        return n._handleValue(e)
                    }), tl, (function() {
                        return n._handleCompleted()
                    })), n._innerSubscription && n._innerSubscription.closed && (n._innerSubscription = null)
                })), Yt && !this._receivedValue && nl(Jt(this._liftedComponent.props.component)), this._liftedComponent = e, e.setState(r)
            }
            return e.prototype.unsubscribe = function() {
                this._innerSubscription && this._innerSubscription.unsubscribe()
            }, e.prototype._handleValue = function(e) {
                Yt && (this._receivedValue = !0);
                var t = this._liftedComponent,
                    n = t.props,
                    r = Zc(n.component, n.props, [e]);
                t.setState((function(e) {
                    return qt(e.renderCache, r) ? {} : {
                        renderCache: r
                    }
                }))
            }, e.prototype._handleCompleted = function() {
                this._innerSubscription = null, this._liftedComponent.setState(qc._endState)
            }, e
        }(),
        ol = function() {
            function e(e, t, n) {
                var r = this,
                    o = {
                        subscription: this,
                        renderCache: e.state && e.state.renderCache
                    };
                this._liftedComponent = new el(o, t), this._innerSubscriptions = [], this._values = Array(n);
                for (var i = 0; i < n; ++i) this._values[i] = this;
                if (Jc(t.props, (function(e) {
                        var t = r._innerSubscriptions.length,
                            n = e.subscribe((function(e) {
                                return r._handleValue(t, e)
                            }), tl, (function() {
                                return r._handleCompleted(t)
                            }));
                        n && n.closed && (n = null), r._innerSubscriptions.push(n)
                    })), Yt)
                    for (i = this._values.length - 1; 0 <= i; --i)
                        if (this._values[i] === this) {
                            nl(Jt(e.props.component));
                            break
                        } this._liftedComponent = e, e.setState(o)
            }
            return e.prototype.unsubscribe = function() {
                var e = this,
                    t = -1;
                Jc(this._liftedComponent.props.props, (function(n) {
                    var r = e._innerSubscriptions[++t];
                    r && r.unsubscribe()
                }))
            }, e.prototype._handleValue = function(e, t) {
                this._values[e] = t;
                for (var n = this._values.length - 1; 0 <= n; --n)
                    if (this._values[n] === this) return;
                var r = this._liftedComponent,
                    o = r.props,
                    i = Zc(o.component, o.props, this._values);
                r.setState((function(e) {
                    return qt(e.renderCache, i) ? {} : {
                        renderCache: i
                    }
                }))
            }, e.prototype._handleCompleted = function(e) {
                var t = this._innerSubscriptions.length;
                if (t > e && (this._innerSubscriptions[e] = null), t === this._values.length) {
                    for (var n = 0; n < t; ++n)
                        if (this._innerSubscriptions[n]) return;
                    this._liftedComponent.setState(qc._endState)
                }
            }, e
        }();

    function il(e) {
        return e.filter((function(e) {
            if (!0 === e) throw new TypeError("Unexpected `true` value in classes");
            return null != e && "" !== e && !1 !== e
        }))
    }

    function sl() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (e && void 0 !== e.find((function(e) {
                return e instanceof X
            }))) return {
            className: vn(il(e || []).map((function(e) {
                return e instanceof X ? e : bc(e)
            })), (function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = il(e || []);
                return n.length > 0 ? n.join(" ") : void 0
            }))
        };
        var n = il(e || []);
        return {
            className: n.length > 0 ? n.join(" ") : void 0
        }
    }
    var al, ul = (al = {}, ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"].forEach((function(e) {
        return al[e] = (t = e, function(e) {
            return Ba.createElement(qc, {
                component: t,
                props: e
            })
        });
        var t
    })), al.Fragment = function(e) {
        return Ba.createElement(qc, {
            component: Ba.Fragment,
            props: e
        })
    }, al);
    const cl = ({
            anchor: e,
            popup: t,
            color: n = "white",
            size: r = ll
        }) => {
            const o = function(e, t, n = ll) {
                const r = function(e) {
                    switch (e) {
                        case "left":
                            return "right";
                        case "right":
                            return "left";
                        case "top":
                            return "bottom";
                        case "bottom":
                            return "top";
                        default:
                            return null
                    }
                }(function(e, t) {
                    const n = t.left + t.width < e.left,
                        r = t.left > e.left + e.width,
                        o = t.top + t.height < e.top,
                        i = t.top > e.top + e.height,
                        s = n || r,
                        a = o || i;
                    return n && !a ? "left" : r && !a ? "right" : o && !s ? "top" : i && !s ? "bottom" : null
                }(e, t));
                if ("bottom" === r) {
                    const r = Math.round(e.left - t.left + e.width / 2 - n / 2);
                    return fl(r, t.width, n) ? {
                        top: "100%",
                        left: `${r}px`,
                        side: "bottom"
                    } : null
                }
                if ("top" === r) {
                    const r = Math.round(e.left - t.left + e.width / 2 - n / 2);
                    return fl(r, t.width, n) ? {
                        bottom: "100%",
                        left: `${r}px`,
                        side: "top"
                    } : null
                }
                if ("right" === r) {
                    const r = Math.round(e.top - t.top + e.height / 2 - n / 2);
                    return fl(r, t.height, n) ? {
                        top: `${r}px`,
                        left: "100%",
                        side: "right"
                    } : null
                }
                if ("left" === r) {
                    const r = Math.round(e.top - t.top + e.height / 2 - n / 2);
                    return fl(r, t.height, n) ? {
                        top: `${r}px`,
                        right: "100%",
                        side: "left"
                    } : null
                }
                return null
            }(e, t, r);
            if (!o) return null;
            const {
                side: i,
                ...s
            } = o;
            return Ba.createElement("div", {
                style: {
                    position: "absolute",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    color: "transparent",
                    background: "transparent",
                    pointerEvents: "none",
                    borderWidth: `${r}px`,
                    ...dl(i, r, n),
                    ...s
                }
            })
        },
        ll = 10;

    function fl(e, t, n) {
        return e > n && e < t - n
    }

    function dl(e, t, n) {
        const r = -t / 2;
        switch (e) {
            case "top":
                return {
                    marginLeft: r, borderBottomColor: n
                };
            case "bottom":
                return {
                    marginLeft: r, borderTopColor: n
                };
            case "left":
                return {
                    marginTop: r, borderRightColor: n
                };
            case "right":
                return {
                    marginTop: r, borderLeftColor: n
                };
            default:
                return {}
        }
    }
    var pl = n(94388),
        hl = n.n(pl);
    const gl = ({
            message: e,
            style: t,
            anchorRect: n,
            tooltipRect: r,
            arrowSize: o,
            withGrammarlyIcon: i
        }) => Ba.createElement("div", {
            className: hl().tooltip,
            style: t || {
                maxWidth: "200px"
            }
        }, i && Ba.createElement("div", {
            className: hl().tooltipIcon
        }), Ba.createElement("div", null, e, Ba.createElement(cl, {
            anchor: n,
            popup: r,
            size: o,
            color: "#333954"
        }))),
        ml = () => {
            const e = Ba.useContext(nc);
            return Ba.createElement(ul.Fragment, null, e.tooltips.pipe(ha((e => e ? Ba.createElement($c, Object.assign({}, function(e, t, n = {
                horizontal: 0,
                vertical: 0
            }, r = 6) {
                return {
                    anchorRect: e,
                    anchorOrigin: {
                        horizontal: "top" === t || "bottom" === t ? "center" : t,
                        vertical: "left" === t || "right" === t ? "center" : t
                    },
                    elementOrigin: {
                        horizontal: "top" === t || "bottom" === t ? "center" : "left" === t ? "right" : "left",
                        vertical: "left" === t || "right" === t ? "center" : "bottom" === t ? "top" : "bottom"
                    },
                    repositioning: {
                        horizontal: "top" === t || "bottom" === t ? "translate" : "flip",
                        vertical: "left" === t || "right" === t ? "translate" : "flip"
                    },
                    anchorMargin: {
                        top: r,
                        bottom: r,
                        left: r,
                        right: r
                    },
                    offset: {
                        horizontal: n.horizontal || 0,
                        vertical: n.vertical || 0
                    }
                }
            }(e.anchor, e.position, e.offset)), (t => Ba.createElement("div", {
                style: {
                    top: t.top,
                    left: t.left,
                    position: "fixed",
                    zIndex: 2147483646
                },
                "data-grammarly-part": "tooltip-view"
            }, Ba.createElement(gl, {
                message: e.message,
                style: e.style,
                anchorRect: e.anchor,
                tooltipRect: t,
                arrowSize: 6,
                withGrammarlyIcon: e.withGrammarlyIcon
            })))) : null))))
        };
    var vl = n(17324);
    class bl extends Ba.Component {
        render() {
            const {
                institutionName: e,
                ssoId: t
            } = this.props, n = "GrammarlyEnrollmentToken: " + t;
            return Ba.createElement("div", {
                className: ue(vl.edc_stripe)
            }, "Managed by ", Ba.createElement("b", {
                title: n
            }, e))
        }
    }
    var yl = n(43256);
    const _l = ({
            onClick: e,
            isLargeButton: t
        }) => Ba.createElement("div", {
            className: yl.container
        }, Ba.createElement("div", {
            className: yl.header
        }, Ba.createElement("video", {
            className: yl.optInVideo,
            autoPlay: !0,
            muted: !0,
            preload: "auto"
        }, Ba.createElement("source", {
            src: "https://d201kpdrh73vuz.cloudfront.net/gdocs/gdocs-animation.mp4",
            type: "video/mp4"
        })), "Grammarly is now", !$e() && Ba.createElement(Ba.Fragment, null, " ", Ba.createElement("span", {
            className: yl.bold
        }, "beta"), " testing"), Ba.createElement("br", null), " on Google Docs!"), Ba.createElement("div", {
            className: yl.btnContainer
        }, Ba.createElement(Ga, {
            clickHandler: e,
            dataGrammarlyPart: "gDocsTurnOnBtn"
        }, Ba.createElement("div", {
            className: ue(yl.button, t && yl.large)
        }, "Turn it on")))),
        El = ({
            onClick: e
        }) => Ba.createElement("div", {
            className: yl.splashOptInContainer
        }, Ba.createElement("div", {
            className: yl.content
        }, Ba.createElement("div", {
            className: yl.optInIcon
        }), Ba.createElement("div", {
            className: yl.title
        }, "Better Writing in Google Docs ", Ba.createElement("span", {
            className: yl.beta
        }, "beta")), Ba.createElement("div", {
            className: yl.subtitle
        }, "Turn on Grammarly in Google Docs for clear, mistake-free writing"), Ba.createElement(Ga, {
            clickHandler: e,
            dataGrammarlyPart: "gDocsTurnOnBtn"
        }, Ba.createElement("div", {
            className: ue(yl.button, yl.splash)
        }, "Turn on Grammarly"))));

    function Sl(e) {
        return function(t, n) {
            if (void 0 === n) {
                var r = Sl(e);
                return function(e) {
                    return r(t, e)
                }
            }
            return n.reduce(e.concat, t)
        }
    }
    var wl, Cl, Tl;

    function Ol(e) {
        return Sl(e)(e.empty)
    }! function(e) {
        e[e.TRACE = 0] = "TRACE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.FATAL = 5] = "FATAL", e[e.OFF = 6] = "OFF"
    }(wl || (wl = {})),
    function(e) {
        e.fromString = function(t) {
            switch (t) {
                case "TRACE":
                    return e.TRACE;
                case "DEBUG":
                    return e.DEBUG;
                case "INFO":
                    return e.INFO;
                case "WARN":
                    return e.WARN;
                case "ERROR":
                    return e.ERROR;
                case "FATAL":
                    return e.FATAL;
                case "OFF":
                    return e.OFF;
                default:
                    throw new TypeError("Unrecognized log level string '" + t + "'")
            }
        }
    }(wl || (wl = {})),
    function(e) {
        e.isErrorLike = function(e) {
            var t = e;
            return t && (void 0 !== t.message && void 0 !== t.name || void 0 !== t.stack)
        }
    }(Cl || (Cl = {})),
    function(e) {
        function t(e, n, r) {
            if (!e) return {};
            var o = {};
            return (r ? Object.getOwnPropertyNames : Object.keys)(e).forEach((function(r) {
                var i = e[r];
                if (null == i || "number" == typeof i || "string" == typeof i || "boolean" == typeof i) o[r] = i;
                else if ("object" == typeof i)
                    if (i instanceof Boolean || i instanceof Number || i instanceof String || i instanceof Date || i instanceof RegExp) o[r] = i.toString();
                    else if (-1 === n.indexOf(i)) {
                    n.push(i);
                    var s = t(i, n, Cl.isErrorLike(i));
                    Object.keys(s).length > 0 && (o[r] = s)
                }
            })), o
        }
        e.fromAny = function(e) {
            return t(e, [e], Cl.isErrorLike(e))
        }
    }(Tl || (Tl = {}));
    var Nl = /^(?!\.[\w])[\w.]*\w$/;

    function xl(e) {
        if ("" === e) throw new Error("Empty name");
        if (!Nl.test(e)) throw new Error("Invalid name: " + e + ". Should be hierarchical dot separated string and may contain only word characters)")
    }
    var kl = function() {
            function e(e) {
                this.capacity = e, this.size = 0, this._keymap = {}
            }
            return e.prototype.put = function(e, t) {
                var n = {
                    key: e,
                    value: t
                };
                if (this._keymap[e] = n, this._tail ? (this._tail.newer = n, n.older = this._tail) : this._head = n, this._tail = n, this.size === this.capacity) return this.shift().value;
                ++this.size
            }, e.prototype.get = function(e) {
                var t = this._getImpl(e);
                return t && t.value
            }, e.prototype.peek = function(e) {
                var t = this._keymap[e];
                return t && t.value
            }, e.prototype.set = function(e, t) {
                var n = this._getImpl(e),
                    r = t(n && n.value);
                return r ? n ? n.value = r : this.put(e, r) : n && this.remove(e), r
            }, e.prototype.getRef = function(e) {
                return this._getImpl(e)
            }, e.prototype.remove = function(e) {
                var t = this._keymap[e];
                if (t) return delete this._keymap[e], t.newer && t.older ? (t.older.newer = t.newer, t.newer.older = t.older) : t.newer ? (t.newer.older = void 0, this._head = t.newer) : t.older ? (t.older.newer = void 0, this._tail = t.older) : this._head = this._tail = void 0, --this.size, t.value
            }, e.prototype.forEach = function(e) {
                for (var t in this._keymap) e(t, this._keymap[t].value)
            }, e.prototype.shift = function() {
                var e = this._head;
                return this._head && (this._head.newer ? (this._head = this._head.newer, this._head.older = void 0) : this._head = void 0, e.newer = e.older = void 0, delete this._keymap[e.key]), e
            }, e.prototype._getImpl = function(e) {
                var t = this._keymap[e];
                if (t) return t === this._tail || (t.newer && (t === this._head && (this._head = t.newer), t.newer.older = t.older), t.older && (t.older.newer = t.newer), t.newer = void 0, t.older = this._tail, this._tail && (this._tail.newer = t), this._tail = t), t
            }, e
        }(),
        Il = function(e) {
            void 0 === e && (e = "(nomessage)"), Error.call(this, e), this.stack = (new Error).stack, this.message = e, this.name = this.constructor.name
        };
    Il.prototype = Object.create(Error.prototype);
    var Al = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return I(t, e), t
        }(Il),
        Pl = function() {
            function e(e, t) {
                if (this.messageCount = e, this.timeframe = t, e < 1) throw new Al("messagesCount should be > 1");
                if (t <= 0) throw new Al("timeframe should be > 0");
                this._allowance = e, this._lastChecked = Date.now()
            }
            return e.prototype.hit = function() {
                var e = Date.now(),
                    t = e - this._lastChecked;
                return this._lastChecked = e, this._allowance += t * (this.messageCount / this.timeframe), this._allowance > this.messageCount && (this._allowance = this.messageCount), !(this._allowance < 1) && (this._allowance -= 1, !0)
            }, e.prototype.toString = function() {
                return "[ messageCount: " + this.messageCount + ", timeframe: " + this.timeframe + ", allowance: " + Math.trunc(1e3 * this._allowance) / 1e3 + ", _lastCheck: " + this._lastChecked + "]"
            }, e
        }();
    ! function(e) {
        var t = function() {
            function e(e, t) {
                if (this._limiter = e, this._cooldownTime = t, this._lastLimiting = 0, this._aboveThreshold = !1, t < 0) throw new Al("cooldownTime should be non-negative")
            }
            return e.prototype.hit = function() {
                var e = this._limiter.hit(),
                    t = !1;
                return e ? this._aboveThreshold && Date.now() - this._cooldownTime > this._lastLimiting && (this._aboveThreshold = !1, t = !0) : (this._lastLimiting = Date.now(), this._aboveThreshold || (this._aboveThreshold = !0, t = !0)), {
                    allow: e,
                    aboveThreshold: this._aboveThreshold,
                    wasTriggered: t
                }
            }, e
        }();
        e.RateLimitIndicator = t
    }(Pl || (Pl = {}));
    var Rl = function() {
            function e(e, t, n) {
                this.name = e, this.level = t, this.context = n, xl(e)
            }
            return e.prototype.isEnabled = function(e) {
                return e >= this.level
            }, e.prototype.handler = function(e, t) {
                var n = this;
                return {
                    trace: function(r) {
                        throw n.trace(e, r, t), r
                    },
                    debug: function(r) {
                        throw n.debug(e, r, t), r
                    },
                    info: function(r) {
                        throw n.info(e, r, t), r
                    },
                    warn: function(r) {
                        throw n.warn(e, r, t), r
                    },
                    error: function(r) {
                        throw n.error(e, r, t), r
                    },
                    fatal: function(r) {
                        throw n.fatal(e, r, t), r
                    }
                }
            }, e.prototype.trace = function(e, t, n) {
                this.log(wl.TRACE, e, t, n)
            }, e.prototype.debug = function(e, t, n) {
                this.log(wl.DEBUG, e, t, n)
            }, e.prototype.info = function(e, t, n) {
                this.log(wl.INFO, e, t, n)
            }, e.prototype.warn = function(e, t, n) {
                this.log(wl.WARN, e, t, n)
            }, e.prototype.error = function(e, t, n) {
                this.log(wl.ERROR, e, t, n)
            }, e.prototype.fatal = function(e, t, n) {
                this.log(wl.FATAL, e, t, n)
            }, e.prototype.log = function(e, t, n, r) {
                this.isEnabled(e) && (n && r || Cl.isErrorLike(n) ? this.logImpl(e, t, n, r) : this.logImpl(e, t, void 0, r || n))
            }, e
        }(),
        Ll = function() {
            function e(e, t, n) {
                this.name = e, this.timersSink = t, this.countersSink = n, xl(e)
            }
            return e.prototype.getMetric = function(e) {
                return this._createChild(e)
            }, e.prototype.getTimer = function(e) {
                return this._createChild(e)
            }, e.prototype.getCounter = function(e) {
                return this._createChild(e)
            }, Object.defineProperty(e.prototype, "parent", {
                get: function() {
                    var t = this.name.lastIndexOf("."),
                        n = this.name.substring(0, -1 === t ? 0 : t);
                    return "" === n ? void 0 : new e(n, this.timersSink, this.countersSink)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "root", {
                get: function() {
                    var t = this.name.indexOf("."),
                        n = this.name.substring(0, -1 === t ? 0 : t);
                    return "" === n ? this : new e(n, this.timersSink, this.countersSink)
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype._createName = function(e) {
                return this.name + "." + e
            }, e.prototype.start = function() {
                var e = Date.now(),
                    t = this;
                return {
                    stop: function() {
                        t.recordTime(Date.now() - e)
                    }
                }
            }, e.prototype.recordTime = function(e) {
                this.timersSink(this.name, e)
            }, e.prototype.timing = function(e) {
                var t = this.start();
                try {
                    return e()
                } finally {
                    try {
                        t.stop()
                    } catch (e) {}
                }
            }, e.prototype.increment = function(e) {
                void 0 === e && (e = 1), this.countersSink(this.name, e)
            }, e.prototype.decrement = function(e) {
                void 0 === e && (e = 1), this.increment(-e)
            }, e.prototype._createChild = function(t) {
                return new e(this._createName(t), this.timersSink, this.countersSink)
            }, e
        }(),
        Dl = function(e) {
            function t(t) {
                return e.call(this, "MP", (function(e, n) {
                    return t("TIMER: " + e + " = " + n)
                }), (function(e, n) {
                    return t("COUNTER: " + e + " = " + n)
                })) || this
            }
            return I(t, e), t
        }(Ll),
        Ml = (function(e) {
            function t(t, n, r, o) {
                void 0 === o && (o = 7500);
                var i = e.call(this, t, (function(e, t) {
                    return i._reportTimer(e, t)
                }), (function(e, t) {
                    return i._reportCounter(e, t)
                })) || this;
                return i._fetch = r, i._sendTimeout = o, i._countersBuffer = {}, i._timersBuffer = new Array, i._sendTimer = void 0, i._sendData = function() {
                    var e = [i._timersBuffer.join("&"), Object.keys(i._countersBuffer).map((function(e) {
                            return e + "=" + i._countersBuffer[e]
                        })).join("&")].filter((function(e) {
                            return e.length
                        })).join("&"),
                        t = i._baseUrl + e;
                    i._timersBuffer.length = 0, i._countersBuffer = {}, i._sendTimer = void 0;
                    var n = 0,
                        r = function() {
                            i._fetch(t, {
                                mode: "no-cors",
                                cache: "no-cache"
                            }).catch((function(e) {
                                n++ < 3 ? setTimeout(r, 5e3 * n) : console.error("Cannot send timesereies data", e, t)
                            }))
                        };
                    r()
                }, i._baseUrl = n + "/ts?", i
            }
            I(t, e), t.createRoot = function(e, n, r) {
                return new t(e, n, r)
            }, t.prototype._reportTimer = function(e, t) {
                this._timersBuffer.push("t." + e + "=" + t), this._startSending()
            }, t.prototype._reportCounter = function(e, t) {
                var n = "c." + e;
                this._countersBuffer[n] = (this._countersBuffer[n] || 0) + t, this._startSending()
            }, t.prototype._startSending = function() {
                this._sendTimer || (this._sendTimer = setTimeout(this._sendData, this._sendTimeout))
            }
        }(Ll), function() {
            function e() {}
            return e.getRootMetric = function() {
                return e._metricsRoot || (console.warn("[WARNING] Using default timeseries implementation."), e._metricsRoot = new Dl(console.log)), e._metricsRoot
            }, e.configure = function(t) {
                e._metricsRoot = t
            }, e
        }()),
        Ul = function() {
            function e(e, t, n, r, o, i, s) {
                this.level = e, this.message = t, this.logger = n, this.timestamp = r, this.exception = o, this.extra = i, this.context = s
            }
            return e.prototype.dropContext = function() {
                return new e(this.level, this.message, this.logger, this.timestamp, this.exception, this.extra)
            }, e.prototype.addContext = function(t) {
                return new e(this.level, this.message, this.logger, this.timestamp, this.exception, this.extra, t)
            }, e.prototype.changeLogger = function(t) {
                return new e(this.level, this.message, t, this.timestamp, this.exception, this.extra, this.context)
            }, e
        }();
    ! function(e) {
        e.show = function(e) {
            return "[" + e.logger + "]: " + wl[e.level] + " : " + e.message + " " + (e.extra ? JSON.stringify(e.extra) : "") + " " + (e.exception ? JSON.stringify(e.exception) : "")
        }
    }(Ul || (Ul = {}));
    var Fl = function() {
        function e(e, t, n, r, o) {
            void 0 === o && (o = !0), this._appName = e, this._appVersion = t, this._env = n, this._fetch = r, this._wrapExtra = o
        }
        return e._parseException = function(t) {
            if (t) {
                var n = e.toObject(t),
                    r = n.name,
                    o = void 0 === r ? "UnknownError" : r,
                    i = n.message,
                    s = void 0 === i ? "Unknown error message" : i,
                    a = n.stack,
                    u = P(n, ["name", "message", "stack"]);
                return {
                    exceptionPart: {
                        exception: {
                            name: o,
                            message: s,
                            stack: a
                        }
                    },
                    exceptionDetailsPart: Object.keys(u).length > 0 ? {
                        exceptionDetails: u
                    } : {}
                }
            }
            return {
                exceptionPart: {},
                exceptionDetailsPart: {}
            }
        }, e.prototype.append = function(e) {
            return this._fetch(this._prepareData(e))
        }, e.toObject = function(e) {
            return null == e || e instanceof Object && !Array.isArray(e) ? e && e.toJSON ? e.toJSON() : e : {
                details: e
            }
        }, e.prototype._prepareData = function(t) {
            var n = t.context ? {
                    context: t.context
                } : {},
                r = e._parseException(t.exception),
                o = r.exceptionPart,
                i = r.exceptionDetailsPart,
                s = e.toObject(t.extra),
                a = JSON.stringify(this._wrapExtra ? Object.assign({}, i, s) : i),
                u = Object.assign({
                    message: t.message,
                    logger: t.logger,
                    level: wl[t.level],
                    application: this._appName,
                    version: this._appVersion,
                    env: this._env
                }, n, o, "{}" !== a && {
                    details: a
                }, !this._wrapExtra && s && {
                    extra: s
                });
            return JSON.stringify(u, null, "")
        }, e
    }();
    (function(e) {
        function t(t, n, r, o, i, s) {
            return void 0 === s && (s = !0), e.call(this, n, r, o, (function(e) {
                return i(t, {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: e
                }).then((function() {}))
            }), s) || this
        }
        I(t, e)
    })(Fl),
    function(e) {
        function t(t, n, r, o, i, s) {
            void 0 === s && (s = !0);
            var a = t + "/log?json=";
            return e.call(this, n, r, o, (function(e) {
                return i(a + encodeURIComponent(e), {
                    mode: "no-cors",
                    method: "get",
                    cache: "no-cache"
                }).then((function() {}))
            }), s) || this
        }
        I(t, e)
    }(Fl);

    function jl(e) {
        return Ml.getRootMetric().getCounter(e)
    }! function() {
        function e(e) {
            var t = this;
            this._sink = e, this._counters = new Map;
            var n, r = (n = "logging.levels", Ml.getRootMetric().getMetric(n));
            Object.keys(wl).map((function(e) {
                return wl[e]
            })).filter((function(e) {
                return "number" == typeof e
            })).forEach((function(e) {
                return t._counters.set(e, r.getCounter(wl[e]))
            }))
        }
        e.prototype.append = function(e) {
            var t = this._counters.get(e.level);
            return t && t.increment(), this._sink.append(e)
        }
    }();
    var Bl = function() {
            function e(e) {
                this._sink = e, this._throttled = [], this._shortRateReporter = {
                    name: "short",
                    indicator: new Pl.RateLimitIndicator(new Pl(30, 2e3), 1e4),
                    counter: jl("logRates.short")
                }, this._longRateReporter = {
                    name: "long",
                    indicator: new Pl.RateLimitIndicator(new Pl(120, 24e4), 3e4),
                    counter: jl("logRates.long")
                }, this._counting = jl("logRates.either"), this._countingStarted = 0, this._droppingLimiter = new Pl(2, 6e4), this._dropped = 0
            }
            return e.prototype.append = function(t) {
                var n = this._shortRateReporter.indicator.hit(),
                    r = this._longRateReporter.indicator.hit();
                if ((n.wasTriggered || r.wasTriggered) && (n.wasTriggered && n.aboveThreshold && this._shortRateReporter.counter.increment(), r.wasTriggered && r.aboveThreshold && this._longRateReporter.counter.increment(), n.aboveThreshold || r.aboveThreshold ? this._counts || (this._counting.increment(), this._counts = new kl(50), this._countingStarted = Date.now(), this._sink.append(this._createTriggeredEvent(t, "Logging rate is above threshold", {
                        short: n,
                        long: r
                    })).catch(console.warn)) : (this._counts = void 0, this._throttled = [], this._sink.append(this._createTriggeredEvent(t, "Logging rate is back to normal", {
                        dropped: this._dropped
                    })).catch(console.warn))), this._counts) {
                    var o = this._eventToString(t),
                        i = this._counts.set(o, (function(e) {
                            return (e || 0) + 1
                        })) || 0;
                    return i / ((Date.now() - this._countingStarted) / 1e3) > e.DROP_RATE && i > e.DROP_COUNT && !this._droppingLimiter.hit() ? (this._throttled.some((function(e) {
                        return e === t.message
                    })) || (this._throttled.push(t.message), this._sink.append(this._createTriggeredEvent(t, "Started throttling logs", {
                        throttledLogs: t.message
                    })).catch(console.warn)), this._drop(), Promise.reject("Log message discarded due to rate limiting: " + t.message)) : this._sink.append(t)
                }
                return this._sink.append(t)
            }, e.prototype._drop = function() {
                ++this._dropped
            }, e.prototype._createTriggeredEvent = function(e, t, n) {
                return new Ul(wl.ERROR, t, "editor.logging.rate", Date.now(), e.exception, n, e.context)
            }, e.prototype._eventToString = function(e) {
                return e.level + e.logger + e.message
            }, e.DROP_RATE = .5, e.DROP_COUNT = 15, e
        }(),
        Gl = function() {
            function e(e, t) {
                if (void 0 === t && (t = !1), this.capacity = e, this.allowOverflow = t, this._start = 0, this._end = 0, this._isFull = !1, this.toJSON = this.toArray, e <= 0) throw new Error("Invalid capacity " + e);
                this._buffer = new Array(e)
            }
            return Object.defineProperty(e.prototype, "size", {
                get: function() {
                    return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isEmpty", {
                get: function() {
                    return 0 === this.size
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isFull", {
                get: function() {
                    return this._isFull
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.push = function(e) {
                if (this.isFull) {
                    if (!this.allowOverflow) throw new Error("Buffer is full");
                    ++this._start, this._start === this.capacity && (this._start = 0)
                }
                this._buffer[this._end++] = e, this._end === this.capacity && (this._end = 0), this._start === this._end && (this._isFull = !0)
            }, e.prototype.pop = function() {
                if (!this.isEmpty) {
                    var e = this._buffer[this._start];
                    return this._buffer[this._start] = void 0, this._start++, this._start === this.capacity && (this._start = 0), this._isFull = !1, e
                }
            }, Object.defineProperty(e.prototype, "first", {
                get: function() {
                    return this.isEmpty ? void 0 : this._buffer[this._start]
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "last", {
                get: function() {
                    return this.isEmpty ? void 0 : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1]
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.clear = function() {
                this._buffer = new Array(this.capacity), this._start = this._end = 0, this._isFull = !1
            }, e.prototype.toArray = function() {
                var e;
                if (this.isEmpty) e = new Array(0);
                else if (this._start < this._end) e = this._buffer.slice(this._start, this._end);
                else {
                    e = new Array(this.size);
                    for (var t = 0, n = this._start; n < this.capacity; ++n, ++t) e[t] = this._buffer[n];
                    for (n = 0; n < this._end; ++n, ++t) e[t] = this._buffer[n]
                }
                return e
            }, e
        }(),
        Hl = function() {
            function e(e) {
                this.parent = e, this.context = void 0
            }
            return e.prototype.get = function() {
                var e = this.parent && this.parent.get(),
                    t = this.context;
                return e || t ? Object.assign({}, e, t) : void 0
            }, e.prototype.add = function(e) {
                this.context = Object.assign({}, this.context, e)
            }, e.prototype.remove = function(e) {
                var t = this;
                this.context && e.forEach((function(e) {
                    e in t.context && delete t.context[e]
                }))
            }, e.prototype.clear = function() {
                this.context = void 0
            }, e
        }(),
        zl = function(e) {
            function t(n, r, o) {
                return e.call(this, n, r, (function(e) {
                    return e.level >= r && t.printToConsole(e)
                }), o) || this
            }
            return I(t, e), t.printToConsole = function(e) {
                console.log;
                (e.level <= wl.TRACE || e.level <= wl.DEBUG ? console.debug || console.log : e.level <= wl.INFO ? console.log : e.level <= wl.WARN ? console.warn : console.error).apply(console, ["[" + e.logger + "]: " + wl[e.level] + " : " + e.message, e.exception, e.extra].filter((function(e) {
                    return !!e
                })))
            }, t
        }(function(e) {
            function t(t, n, r, o) {
                var i = e.call(this, t, n, o || new Hl) || this;
                return i.appender = r, i
            }
            return I(t, e), t.prototype.getLogger = function(e, n) {
                return new t(this.name + "." + e, n || this.level, this.appender, new Hl(this.context))
            }, t.prototype.logImpl = function(e, t, n, r) {
                var o = new Ul(e, t, this.name, Date.now(), n, r, this.context.get());
                try {
                    this.appender(o)
                } catch (n) {
                    console.trace("Failed processing log event", n);
                    try {
                        zl.printToConsole(o)
                    } catch (e) {
                        console.error("No luck. Can't print the event", e)
                    }
                }
            }, t
        }(Rl)),
        Wl = (function() {
            function e(e) {
                var t = this;
                this.sink = function(e) {
                    t._buffer.push(e.dropContext())
                }, this._buffer = new Gl(e, !0)
            }
            Object.defineProperty(e.prototype, "logs", {
                get: function() {
                    return this._buffer.toArray()
                },
                enumerable: !1,
                configurable: !0
            })
        }(), function() {
            function e(e, t, n, r) {
                var o = this;
                this._crashLogger = n, this._eventFactory = r, this._crashLogged = !1, this.sink = function(e) {
                    o._buffer.push(e.dropContext()), o._trigger(e) && o._sendCrashLog(e)
                }, this._buffer = new Gl(e, !0), this._trigger = "function" == typeof t ? t : function(e) {
                    return e.level >= t
                }
            }
            Object.defineProperty(e.prototype, "logs", {
                get: function() {
                    return this._buffer.toArray()
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype._sendCrashLog = function(e) {
                if (!this._crashLogged || this._buffer.size > this._buffer.capacity / 2) {
                    var t = void 0;
                    try {
                        t = JSON.stringify(this.logs, void 0, 0)
                    } catch (e) {
                        t = e
                    }
                    this._crashLogger(this._eventFactory(e.level, "CrashLog", Date.now(), void 0, {
                        events: t,
                        first: !this._crashLogged,
                        trigger: {
                            message: e.message,
                            logger: e.logger
                        }
                    }).addContext(e.context)), this._crashLogged = !0, this._buffer.clear()
                }
            }
        }(), function(e) {
            return Promise.resolve()
        });

    function $l(e) {
        return A(A({}, function(e) {
            return {
                concat: function(t, n) {
                    return function(r) {
                        return Promise.all([Kl(e)(t)(r), Kl(e)(n)(r)]), Promise.resolve()
                    }
                }
            }
        }(e)), {
            empty: Wl
        })
    }
    var Vl = function(e) {
        function t(t, n, r, o) {
            var i = e.call(this, t, wl.TRACE, o || new Hl) || this;
            return i.logger = n, i.levelGetter = r, i
        }
        return I(t, e), t.prototype.getLogger = function(e, n) {
            var r = this;
            return new t(this.name + "." + e, this.logger, (function() {
                return n || r.levelGetter()
            }), new Hl(this.context))
        }, t.prototype.isEnabled = function(e) {
            return e >= this.levelGetter()
        }, t.prototype.logImpl = function(e, t, n, r) {
            var o = new Ul(e, t, this.name, Date.now(), n, r, this.context.get());
            this.logger(o)
        }, t
    }(Rl);

    function ql(e) {
        return t = Wl, n = function(e) {
                return function(t) {
                    return !e(t)
                }
            }(e),
            function(e) {
                return function(r) {
                    return (n(r) ? t : e)(r)
                }
            };
        var t, n
    }

    function Yl(e) {
        return ql(function(e) {
            return function(t) {
                return t.level >= e()
            }
        }(e))
    }

    function Kl(e) {
        return function(t) {
            return function(n) {
                try {
                    return t(n).catch((function(t) {
                        return e(new Ul(wl.WARN, "Error while logging message.", "Fallback", 0, void 0, t))
                    }))
                } catch (t) {
                    console.trace("Failed processing log event", t);
                    try {
                        return e(n)
                    } catch (e) {
                        return console.error("No luck. Can't print the event", e), Promise.resolve()
                    }
                }
            }
        }
    }
    var Ql = function(e) {
        return Promise.resolve(zl.printToConsole(e))
    };
    var Xl = function() {
        function e() {}
        return e.getRootLogger = function() {
            return e._rootLogger || (e._rootLogger = e._createDefaultRootLogger(), e._rootLogger.warn("Using DEFAULT root logger")), e._rootLogger
        }, e.configure = function(t) {
            e._rootLogger = t, e._rootLogger.debug("ROOT logger changed", t)
        }, e._createDefaultRootLogger = function() {
            return new zl("DEFAULT", wl.DEBUG)
        }, e
    }();

    function Jl(e, t) {
        const n = "Sidebar",
            r = Ql,
            o = ji((i = "Sidebar.log", ji(Zl((e => yn.create(`${i}.${e}`))), (function(e) {
                var t = new Bl({
                    append: function(t) {
                        return e(t)
                    }
                });
                return function(e) {
                    return t.append(e)
                }
            }))), Yl(e.logLevelGetter));
        var i;
        const s = Yl(e.logLevelGetter)(Ql),
            a = [t.collectLogs ? o : Wl, t.copyLogsToConsole ? s : Wl];
        return (u = n, c = e.rootLogLevelGetter, function(e) {
            return new Vl(u, e, c, l)
        })(Ol($l(r))(a));
        var u, c, l
    }
    const Zl = e => t => {
        switch (t.level) {
            case wl.DEBUG:
                e(t.logger).debug(t.message);
                break;
            case wl.ERROR:
                e(t.logger).error(t.message);
                break;
            case wl.FATAL:
                e(t.logger).fatal(t.message);
                break;
            case wl.INFO:
                e(t.logger).info(t.message);
                break;
            case wl.TRACE:
                e(t.logger).trace(t.message);
                break;
            case wl.WARN:
                e(t.logger).warn(t.message);
                break;
            case wl.OFF:
                break;
            default:
                return _(t.level)
        }
        return Promise.resolve()
    };
    var ef;

    function tf(e) {
        var t;
        return !e.anonymous || !!(null === (t = e.experiments) || void 0 === t ? void 0 : t.anonUserGDocsSidebar)
    }! function(e) {
        let t, n;
        ! function(e) {
            e.show = "show", e.hideAll = "hideAll", e.hideGrammarlyOnly = "hideGrammaryOnly", e.toggle = "toggle"
        }(t = e.Action || (e.Action = {})),
        function(e) {
            e.user = "user", e.api = "api"
        }(n = e.Source || (e.Source = {}))
    }(ef || (ef = {})),
    function() {
        const e = yn.create("denaliPlatform.metric"),
            t = new Dl((t => e.trace(t)));
        Ml.configure(t);
        const n = Jl({
            rootLogLevelGetter: () => wl.WARN,
            logLevelGetter: () => wl.WARN
        }, {
            collectLogs: !0,
            copyLogsToConsole: !0
        });
        Xl.configure(n)
    }();
    var nf = n(25106);
    const rf = () => Ba.createElement("div", {
            className: nf.signUpFooter
        }, Ba.createElement("div", {
            className: nf.title
        }, "Sign in to get key Grammarly features"), Ba.createElement("div", {
            className: nf.subtitle
        }, "Access Grammarly's full functionality, including an easy-to-use editing experience and personalized dictionary."), Ba.createElement(Qu, {
            handleClick: e => {
                const t = "signup" === e ? Gs("signupHook", "toolbarMenu") : Hs();
                self.open(t), Xu.gdocsRegisterPromptButtonClick(e)
            }
        })),
        of = ({
            openWebEditor: e
        }) => Ba.createElement("div", {
            className: nf.footer
        }, Ba.createElement("div", {
            onClick: () => {
                Xu.newDocumentButtonClick("settingsToolbar"), e(!0)
            },
            className: nf.footer_btn
        }, Ba.createElement("div", {
            className: nf.footer_icon_doc
        }, Ba.createElement(af, null)), "New Document"), Ba.createElement("div", {
            onClick: () => {
                Xu.myGrammarlyButtonClick("settingsToolbar"), e()
            },
            className: nf.footer_btn
        }, Ba.createElement("div", {
            className: nf.footer_icon_home
        }, Ba.createElement(sf, null)), "My Grammarly")),
        sf = () => Ba.createElement("svg", {
            width: "28",
            height: "28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, Ba.createElement("path", {
            d: "M6.563 21.438v-9.625L14 5.686l7.438 6.125v9.626m-9.625 0v-4.813c0-1.208.979-2.188 2.187-2.188v0c1.208 0 2.188.98 2.188 2.188v4.813",
            strokeWidth: ".875",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })),
        af = () => Ba.createElement("svg", {
            width: "28",
            height: "28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, Ba.createElement("path", {
            d: "M14.438 10.063v8.75m4.374-4.375h-8.75m13.126 0a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0z",
            strokeWidth: ".875",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }));
    var uf = n(84370),
        cf = n.n(uf);
    const lf = Ba.forwardRef(((e, t) => {
        const {
            kind: n = "primary",
            containerClassName: r,
            containerStyle: o,
            fitContent: i = !1,
            size: s = "medium",
            includePadding: a = !0,
            rounded: u = !1,
            dataGrammarlyPart: c = "ui-kit-button",
            ...l
        } = e;
        return Ba.createElement("div", {
            "data-grammarly-part": c,
            className: r,
            style: {
                display: i ? "inline-flex" : void 0,
                ...o
            }
        }, Ba.createElement("button", Object.assign({}, sl(cf().button, "primary" === n ? cf().buttonPrimary : null, "success" === n ? cf().buttonSuccess : null, "link" === n ? cf().buttonLink : null, "neutral" === n ? cf().buttonNeutral : null, "transparent" === n || "transparent-hoverable" === n ? cf().buttonTransparent : null, "transparent-hoverable" === n ? cf().buttonTransparentHoverable : null, i ? cf().buttonFitContent : null, "small" === s ? cf().buttonSmall : null, "medium" === s ? cf().buttonMedium : null, a ? cf().buttonWithPadding : null, u ? cf().buttonRounded : null, l.disabled ? cf().buttonDisabled : cf().buttonEnabled), {
            ref: t
        }, l)))
    }));
    Ba.forwardRef((function(e, t) {
        return Ba.createElement("span", Object.assign({}, e, sl(e.className, cf().secondaryText), {
            ref: t
        }))
    }));
    var ff = n(17959);
    const df = ({
        actions: e,
        domain: t
    }) => Ba.createElement("div", {
        className: ff.wrapper
    }, Ba.createElement("div", {
        className: ff.heading
    }, "Enable Grammarly on ", Ba.createElement("span", {
        className: ff.domain
    }, t), "?"), Ba.createElement("div", {
        className: ff.description
    }, "Grammarly needs access to the text you ", Ba.createElement("br", null), "write in order to provide suggestions."), Ba.createElement(lf, {
        kind: "success",
        onClick: () => {
            e.enableOnceClickToRun(), Xu.clickToRunOptionButtonClick("allow_once")
        }
    }, "Allow once"), Ba.createElement(lf, {
        kind: "success",
        onClick: () => {
            e.toggleSite(!0, t, !0), Xu.clickToRunOptionButtonClick("allow_on_website")
        }
    }, "Always allow on this website"), Ba.createElement(lf, {
        kind: "success",
        onClick: () => {
            e.enableClickToRunOnAllSites(), Xu.clickToRunOptionButtonClick("allow_on_all_websites")
        }
    }, "Always allow on every website"));
    var pf = n(23134);
    const hf = "data-enable-grammarly";
    let gf = ["The G logo gets out of the way when you're typing", "Switch between American, British, Australian, and Canadian English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface"];
    class mf extends Ba.Component {
        constructor() {
            super(...arguments), this.closeNews = () => {
                this.props.showNews(!1)
            }
        }
        render() {
            return Ba.createElement("div", {
                className: ue(vl.line, vl.news)
            }, Ba.createElement("div", {
                onClick: this.closeNews,
                className: vl.close_news
            }), Ba.createElement("div", {
                className: vl.news_content
            }, Ba.createElement("h2", null, "What's new in this update:"), Ba.createElement("ul", null, gf.map((e => Ba.createElement("li", {
                key: (0, pf.hash)(e)
            }, e))))))
        }
    }
    const vf = e => e.replace("www.", "");
    var bf;
    ! function(e) {
        function t(e, t) {
            if (!e || !t) return !0;
            return !t.includes(e)
        }

        function n(e, t, n) {
            var r;
            return Boolean(t && !n && (null === (r = e.llamaIntegration) || void 0 === r ? void 0 : r.enabled))
        }

        function r(e, n, r, o) {
            var i, s;
            const a = o ? function(e) {
                    return ze() && /^about:/.test(e) ? e : "" === e ? "" : vf(new URL(e).hostname)
                }(o) : void 0,
                u = e.isLlamaInstalled && (null === (i = n.llamaIntegration) || void 0 === i ? void 0 : i.enabled);
            return t(a, null === (s = n.llamaIntegration) || void 0 === s ? void 0 : s.disabledByDomain) && (u || e.showDesktopIntegrationExtensionToggle || (null == r ? void 0 : r.desktopIntegrationExtensionSupport))
        }
        e.showSettingPopupToggle = r, e.showGrayGButton = function(e, t, o, i) {
            return r(e, t, o, i) && n(t, e.isLlamaInstalled, e.isLlamaIntegrationDisable)
        }, e.isIntegrationEnable = function(e, r) {
            var o;
            return !(!e || !r) && (t(e.domain, null === (o = r.llamaIntegration) || void 0 === o ? void 0 : o.disabledByDomain) && n(r, e.isLlamaInstalled, e.isLlamaIntegrationDisable))
        }
    }(bf || (bf = {}));
    const yf = () => Ba.createElement("svg", {
        width: "11",
        height: "12",
        viewBox: "0 0 11 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Ba.createElement("path", {
        d: "M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",
        stroke: "#4A6EE0",
        strokeLinecap: "round"
    }));
    var _f = n(26485),
        Ef = n(68089);

    function Sf(e, t) {
        return void 0 === t && (t = oa),
            function(n) {
                return n.lift(new wf(e, t))
            }
    }
    var wf = function() {
            function e(e, t) {
                this.dueTime = e, this.scheduler = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Cf(e, this.dueTime, this.scheduler))
            }, e
        }(),
        Cf = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.dueTime = n, o.scheduler = r, o.debouncedSubscription = null, o.lastValue = null, o.hasValue = !1, o
            }
            return I(t, e), t.prototype._next = function(e) {
                this.clearDebounce(), this.lastValue = e, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Tf, this.dueTime, this))
            }, t.prototype._complete = function() {
                this.debouncedNext(), this.destination.complete()
            }, t.prototype.debouncedNext = function() {
                if (this.clearDebounce(), this.hasValue) {
                    var e = this.lastValue;
                    this.lastValue = null, this.hasValue = !1, this.destination.next(e)
                }
            }, t.prototype.clearDebounce = function() {
                var e = this.debouncedSubscription;
                null !== e && (this.remove(e), e.unsubscribe(), this.debouncedSubscription = null)
            }, t
        }($);

    function Tf(e) {
        e.debouncedNext()
    }
    var Of = function(e) {
            function t(t, n, r) {
                void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
                var o = e.call(this) || this;
                return o.scheduler = r, o._events = [], o._infiniteTimeWindow = !1, o._bufferSize = t < 1 ? 1 : t, o._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (o._infiniteTimeWindow = !0, o.next = o.nextInfiniteTimeWindow) : o.next = o.nextTimeWindow, o
            }
            return I(t, e), t.prototype.nextInfiniteTimeWindow = function(t) {
                if (!this.isStopped) {
                    var n = this._events;
                    n.push(t), n.length > this._bufferSize && n.shift()
                }
                e.prototype.next.call(this, t)
            }, t.prototype.nextTimeWindow = function(t) {
                this.isStopped || (this._events.push(new Nf(this._getNow(), t)), this._trimBufferThenGetEvents()), e.prototype.next.call(this, t)
            }, t.prototype._subscribe = function(e) {
                var t, n = this._infiniteTimeWindow,
                    r = n ? this._events : this._trimBufferThenGetEvents(),
                    o = this.scheduler,
                    i = r.length;
                if (this.closed) throw new ft;
                if (this.isStopped || this.hasError ? t = H.EMPTY : (this.observers.push(e), t = new dt(this, e)), o && e.add(e = new Cc(e, o)), n)
                    for (var s = 0; s < i && !e.closed; s++) e.next(r[s]);
                else
                    for (s = 0; s < i && !e.closed; s++) e.next(r[s].value);
                return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), t
            }, t.prototype._getNow = function() {
                return (this.scheduler || Zs).now()
            }, t.prototype._trimBufferThenGetEvents = function() {
                for (var e = this._getNow(), t = this._bufferSize, n = this._windowTime, r = this._events, o = r.length, i = 0; i < o && !(e - r[i].time < n);) i++;
                return o > t && (i = Math.max(i, o - t)), i > 0 && r.splice(0, i), r
            }, t
        }(ht),
        Nf = function() {
            return function(e, t) {
                this.time = e, this.value = t
            }
        }();

    function xf(e, t, n, r) {
        return L(n) && (r = n, n = void 0), r ? xf(e, t, n).pipe(ha((function(e) {
            return j(e) ? r.apply(void 0, e) : r(e)
        }))) : new X((function(r) {
            kf(e, t, (function(e) {
                arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(e)
            }), r, n)
        }))
    }

    function kf(e, t, n, r, o) {
        var i;
        if (function(e) {
                return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener
            }(e)) {
            var s = e;
            e.addEventListener(t, n, o), i = function() {
                return s.removeEventListener(t, n, o)
            }
        } else if (function(e) {
                return e && "function" == typeof e.on && "function" == typeof e.off
            }(e)) {
            var a = e;
            e.on(t, n), i = function() {
                return a.off(t, n)
            }
        } else if (function(e) {
                return e && "function" == typeof e.addListener && "function" == typeof e.removeListener
            }(e)) {
            var u = e;
            e.addListener(t, n), i = function() {
                return u.removeListener(t, n)
            }
        } else {
            if (!e || !e.length) throw new TypeError("Invalid event target");
            for (var c = 0, l = e.length; c < l; c++) kf(e[c], t, n, r, o)
        }
        r.add(i)
    }

    function If(e, t) {
        return "function" == typeof t ? function(n) {
            return n.pipe(If((function(n, r) {
                return ra(e(n, r)).pipe(ha((function(e, o) {
                    return t(n, e, r, o)
                })))
            })))
        } : function(t) {
            return t.lift(new Af(e))
        }
    }
    var Af = function() {
            function e(e) {
                this.project = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Pf(e, this.project))
            }, e
        }(),
        Pf = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.project = n, r.index = 0, r
            }
            return I(t, e), t.prototype._next = function(e) {
                var t, n = this.index++;
                try {
                    t = this.project(e, n)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this._innerSub(t)
            }, t.prototype._innerSub = function(e) {
                var t = this.innerSubscription;
                t && t.unsubscribe();
                var n = new va(this),
                    r = this.destination;
                r.add(n), this.innerSubscription = ya(e, n), this.innerSubscription !== n && r.add(this.innerSubscription)
            }, t.prototype._complete = function() {
                var t = this.innerSubscription;
                t && !t.closed || e.prototype._complete.call(this), this.unsubscribe()
            }, t.prototype._unsubscribe = function() {
                this.innerSubscription = void 0
            }, t.prototype.notifyComplete = function() {
                this.innerSubscription = void 0, this.isStopped && e.prototype._complete.call(this)
            }, t.prototype.notifyNext = function(e) {
                this.destination.next(e)
            }, t
        }(ba);

    function Rf(e, t) {
        return t ? function(n) {
            return n.pipe(Rf((function(n, r) {
                return ra(e(n, r)).pipe(ha((function(e, o) {
                    return t(n, e, r, o)
                })))
            })))
        } : function(t) {
            return t.lift(new Lf(e))
        }
    }
    var Lf = function() {
            function e(e) {
                this.project = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Df(e, this.project))
            }, e
        }(),
        Df = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.project = n, r.hasSubscription = !1, r.hasCompleted = !1, r.index = 0, r
            }
            return I(t, e), t.prototype._next = function(e) {
                this.hasSubscription || this.tryNext(e)
            }, t.prototype.tryNext = function(e) {
                var t, n = this.index++;
                try {
                    t = this.project(e, n)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.hasSubscription = !0, this._innerSub(t)
            }, t.prototype._innerSub = function(e) {
                var t = new va(this),
                    n = this.destination;
                n.add(t);
                var r = ya(e, t);
                r !== t && n.add(r)
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
            }, t.prototype.notifyNext = function(e) {
                this.destination.next(e)
            }, t.prototype.notifyError = function(e) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function() {
                this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
            }, t
        }(ba),
        Mf = function() {
            function e() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }();

    function Uf(e) {
        return function(t) {
            return 0 === e ? ta() : t.lift(new Ff(e))
        }
    }
    var Ff = function() {
            function e(e) {
                if (this.total = e, this.total < 0) throw new Oa
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new jf(e, this.total))
            }, e
        }(),
        jf = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.total = n, r.count = 0, r
            }
            return I(t, e), t.prototype._next = function(e) {
                var t = this.total,
                    n = ++this.count;
                n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
            }, t
        }($);

    function Bf(e) {
        return void 0 === e && (e = zf),
            function(t) {
                return t.lift(new Gf(e))
            }
    }
    var Gf = function() {
            function e(e) {
                this.errorFactory = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Hf(e, this.errorFactory))
            }, e
        }(),
        Hf = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.errorFactory = n, r.hasValue = !1, r
            }
            return I(t, e), t.prototype._next = function(e) {
                this.hasValue = !0, this.destination.next(e)
            }, t.prototype._complete = function() {
                if (this.hasValue) return this.destination.complete();
                var e = void 0;
                try {
                    e = this.errorFactory()
                } catch (t) {
                    e = t
                }
                this.destination.error(e)
            }, t
        }($);

    function zf() {
        return new Mf
    }

    function Wf(e, t) {
        var n = arguments.length >= 2;
        return function(r) {
            return r.pipe(e ? It((function(t, n) {
                return e(t, n, r)
            })) : Y, Uf(1), n ? Ia(t) : Bf((function() {
                return new Mf
            })))
        }
    }

    function $f(e) {
        return function(t) {
            return t.lift(new Vf(e))
        }
    }
    var Vf = function() {
            function e(e) {
                this.value = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new qf(e, this.value))
            }, e
        }(),
        qf = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.value = n, r
            }
            return I(t, e), t.prototype._next = function(e) {
                this.destination.next(this.value)
            }, t
        }($);

    function Yf() {
        const e = Ba.useRef(new Of(1)),
            t = Ba.useRef(e.current.pipe(It(C), oc(), If((e => xf(e, "mouseover").pipe(Rf((() => xf(e, "mouseleave").pipe(Wf(), $f(!1), Ac(!0))))))))),
            n = Ba.useCallback((t => e.current.next(t)), [e.current]);
        return [t.current, n]
    }

    function Kf(e) {
        const t = Ba.useRef(new mt(e));
        return Ba.useEffect((() => {
            t.current.next(e)
        }), [e]), t.current
    }

    function Qf(e) {
        Ba.useEffect((() => {
            const t = e.subscribe();
            return () => t.unsubscribe()
        }), [])
    }
    const Xf = Ba.forwardRef((({
            children: e,
            message: t,
            position: n = "top",
            showDelay: r = 100,
            style: o,
            offset: i,
            disabled: s = !1,
            withGrammarlyIcon: a = !1,
            forceHovered: u = !1,
            onHideTooltip: c
        }, l) => {
            const [f, d] = Yf(), p = Ba.useRef(null), h = Ba.useContext(nc), g = Ba.useRef(null), m = Kf(u), v = Kf(s), b = Kf(t), y = Ba.useCallback((() => {
                g.current && (h.hide(g.current), g.current = null, null == c || c())
            }), []);
            Ba.useEffect((() => {
                var e, t, n;
                return null === (n = null === (t = null === (e = p.current) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView) || void 0 === n || n.addEventListener("scroll", y), () => {
                    var e, t, n;
                    return null === (n = null === (t = null === (e = p.current) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView) || void 0 === n ? void 0 : n.removeEventListener("scroll", y)
                }
            }), [p]);
            const _ = vn([f.pipe(Ac(!1)), m, v, b]);
            Qf(_.pipe(Sf(r), bt((([e, t, r, s]) => {
                (e || t) && !r && null === g.current && p.current && s && (g.current = h.show({
                    message: s,
                    position: n,
                    style: o,
                    offset: i,
                    anchor: p.current.getBoundingClientRect(),
                    withGrammarlyIcon: a
                }))
            })))), Qf(_.pipe(bt((([e, t, n, r]) => {
                (e || t) && !n && null === g.current && p.current && r || y()
            })))), Qf(v.pipe(bt((e => e && y())))), Ba.useEffect((() => () => y()), []);
            const E = {
                ref: ac([l, p, ...uc(e) ? [e.ref] : []], d)
            };
            return Ba.cloneElement(e, E)
        })),
        Jf = ({
            children: e,
            blocked: t,
            wrapperClassName: n
        }) => t ? Ba.createElement(Xf, {
            message: "Sign in to use this feature",
            position: "top"
        }, Ba.createElement("div", {
            className: n
        }, Ba.createElement("div", {
            className: Ef.hover_blocker,
            onClick: w,
            onDoubleClick: w
        }, e))) : Ba.createElement(Ba.Fragment, null, e);
    class Zf extends Ba.Component {
        constructor() {
            super(...arguments), this.handleChange = e => {
                (this.props.skipTrustedCheck || e.isTrusted) && this.props.onChange(e)
            }
        }
        render() {
            return Ba.createElement("div", Object.assign({}, sl(this.props.extraClassName, _f.setting_item, this.props.disabled && _f.disabled)), Ba.createElement("label", {
                className: _f.select_checkbox,
                "data-grammarly-part": this.props.dataGrammarlyPart
            }, Ba.createElement("div", null, this.props.children, this.props.beta && Ba.createElement("span", {
                className: $e() ? _f.new : _f.beta
            })), Ba.createElement(Jf, {
                wrapperClassName: _f.checkbox_control_wrapper,
                blocked: this.props.disabled
            }), Ba.createElement("input", {
                className: _f.checkbox,
                onChange: this.props.disabled ? w : this.handleChange,
                checked: this.props.checked,
                type: "checkbox"
            }), Ba.createElement("div", Object.assign({}, sl(_f.checkbox_check, this.props.grayOut && _f.grayOut, this.props.checked ? _f.on : _f.off)), Ba.createElement("div", Object.assign({}, sl(_f.on_off)), this.props.checked ? "ON" : "OFF"), Ba.createElement("div", {
                className: _f.checkbox_check_round
            }))))
        }
    }
    var ed = n(47740);
    const td = ({
        showTitle: e,
        openGBLanding: t
    }) => Ba.createElement("div", {
        className: ed.container
    }, Ba.createElement("div", {
        className: ed.contant
    }, e && Ba.createElement("div", {
        className: ed.title
    }, "Grammarly for your team"), Ba.createElement("div", null, "Help your team make your business look great with top-notch writing."), Ba.createElement("div", {
        className: ed.spacer
    }), Ba.createElement(lf, {
        size: "medium",
        onClick: () => {
            t(Je().businessEHomepage), ja().gGbUpHookClick()
        }
    }, "Explore Grammarly Business")));
    var nd = n(1005);
    const rd = ({
        heading: e,
        enabled: t,
        children: n
    }) => t ? Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
        className: nd.heading
    }, e), Ba.createElement("div", null, n)) : Ba.createElement(Ba.Fragment, null, n);
    var od, id;
    ! function(e) {
        e.anonymous = "anonymous", e.registered = "registered", e.premium = "premium"
    }(od || (od = {})),
    function(e) {
        function t(e) {
            return !!e.institutionInfo
        }
        e.getType = function(e) {
            return e.premium ? od.premium : e.anonymous ? od.anonymous : od.registered
        }, e.isEdcBlocked = function(e) {
            return !!e.edc && !e.edc.compliant
        }, e.hasRole = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_role && "" !== e.customFields.frontend_role)
        }, e.hasSoundFluentGoals = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_soundFluent && "" !== e.customFields.frontend_soundFluent)
        }, e.hasPrimaryLanguage = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_primaryLanguage && "" !== e.customFields.frontend_primaryLanguage)
        }, e.isBusinessAdmin = function(e) {
            var t, n;
            const r = (null === (t = null == e ? void 0 : e.institutionInfo) || void 0 === t ? void 0 : t.organizationType) || "";
            return Boolean(["BUSINESS", "NGO", "GOV"].includes(r) && (null === (n = null == e ? void 0 : e.institutionInfo) || void 0 === n ? void 0 : n.admin))
        }, e.doesUserBelongToInstitution = function(e) {
            return !!(null == e ? void 0 : e.institutionInfo)
        }, e.doesUserBelongToEDUInstitution = function(e) {
            var t;
            return ["EDU"].includes((null === (t = null == e ? void 0 : e.institutionInfo) || void 0 === t ? void 0 : t.organizationType) || "")
        }, e.isClaimed = function(e) {
            return e.groups.includes("claimed-invitation")
        }, e.isGrammarlyEmployee = function(e) {
            return e.email.endsWith("@grammarly.com")
        }, e.isInstitutionUser = t, e.isConsumerUser = function(e) {
            return !t(e)
        }
    }(id || (id = {}));
    class sd extends Ba.Component {
        constructor() {
            super(...arguments), this.onEnableDefsClick = e => {
                const {
                    toggleDefs: t
                } = this.props, n = e.target.checked;
                t(n), Xu.definitionToggleClick(n ? "on" : "off"), ja().toggleExtensionDefs(n)
            }
        }
        render() {
            const {
                enabledDefs: e,
                disabled: t
            } = this.props;
            return Ba.createElement(Zf, {
                onChange: this.onEnableDefsClick,
                checked: e,
                extraClassName: vl.def_switcher,
                dataGrammarlyPart: "definitionAndSynonymsSwitcher",
                disabled: t,
                skipTrustedCheck: this.props.skipTrustedCheck
            }, "Show definitions and synonyms ", Ba.createElement("br", null), "via double clicks (all sites)")
        }
    }
    var ad = n(6304),
        ud = n(66402);
    const cd = () => Ba.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Ba.createElement("path", {
        d: "M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z",
        stroke: "#6D758D",
        strokeWidth: "2"
    }));
    var ld = n(90351),
        fd = /[\s]*([a-z-]+)[\s]*\([\s]*([^\)]+)[\s]*\)[\s]*/i,
        dd = /^(\-?\d+\.?\d{0,5})/,
        pd = function(e) {
            return function(t) {
                return t + e
            }
        },
        hd = parseFloat;

    function gd(e) {
        return "number" == typeof e ? e : .01 * hd(e)
    }

    function md(e) {
        return vd(100 * e) + "%"
    }

    function vd(e) {
        return dd.exec(e.toString())[1]
    }

    function bd(e, t) {
        return e + "(" + Array.prototype.join.call(t, ", ") + ")"
    }

    function yd(e) {
        return function() {
            return bd(e, arguments)
        }
    }
    var _d = function(e, t) {
            return Array.prototype.filter.call(e, t)
        },
        Ed = pd("%"),
        Sd = (pd("deg"), pd("em"), pd("ex"), pd("px")),
        wd = (pd("rad"), pd("rem"), pd("vh"), pd("vw"), pd("turn"), function(e) {
            return function() {
                return _d(arguments, (function(e) {
                    return e || 0 === e
                })).map((function(e) {
                    return "number" == typeof e ? Sd(e) : e.toString()
                })).join(e)
            }
        });
    wd(" "), wd(",");
    var Cd, Td = Math.round;

    function Od(e, t) {
        return Td(e * t) / t
    }
    var Nd = "rgb",
        xd = "hsl",
        kd = ((Cd = {}).rgbhsl = function(e, t, n, r, o) {
            var i, s, a = e / 255,
                u = t / 255,
                c = n / 255,
                l = Math.min(a, u, c),
                f = Math.max(a, u, c),
                d = (l + f) / 2,
                p = f - l;
            i = f === l ? 0 : a === f ? (u - c) / p : u === f ? 2 + (c - a) / p : c === f ? 4 + (a - u) / p : 0;
            (i = Math.min(60 * i, 360)) < 0 && (i += 360);
            s = f === l ? 0 : d <= .5 ? p / (f + l) : p / (2 - f - l);
            return new Ld(xd, i, s, d, r, o)
        }, Cd.hslrgb = function(e, t, n, r, o) {
            var i = e / 360,
                s = t,
                a = n;
            if (0 === s) {
                return new Ld(Nd, g = 255 * a, g, g, r, o)
            }
            for (var u = a < .5 ? a * (1 + s) : a + s - a * s, c = 2 * a - u, l = 0, f = 0, d = 0, p = 0; p < 3; p++) {
                var h = i + 1 / 3 * -(p - 1);
                h < 0 && h++, h > 1 && h--;
                var g = void 0;
                g = 6 * h < 1 ? c + 6 * (u - c) * h : 2 * h < 1 ? u : 3 * h < 2 ? c + (u - c) * (2 / 3 - h) * 6 : c, g *= 255, 0 === p ? l = g : 1 === p ? f = g : d = g
            }
            return new Ld(Nd, l, f, d, r, o)
        }, Cd),
        Id = {
            r: 255,
            g: 255,
            b: 255,
            h: 360,
            s: 1,
            l: 1,
            a: 1
        };

    function Ad(e) {
        return function(e) {
            var t = e.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))$/i);
            if (!t) return;
            var n = t[1],
                r = parseInt(3 === n.length ? n[0] + n[0] + n[1] + n[1] + n[2] + n[2] : n, 16);
            return new Ld(Nd, r >> 16 & 255, r >> 8 & 255, 255 & r, 1, !1)
        }(e) || function(e) {
            var t = function(e) {
                var t = fd.exec(e);
                if (t && t.length) return [t[1]].concat(t[2].split(","))
            }(e);
            if (!t || 4 !== t.length && 5 !== t.length) return;
            var n, r = t[0],
                o = "rgba" === r,
                i = "hsla" === r,
                s = r === Nd,
                a = r === xd,
                u = i || o;
            if (s || o) n = Nd;
            else {
                if (!a && !i) throw new Error("unsupported color string");
                n = xd
            }
            var c = hd(t[1]),
                l = s || o ? hd(t[2]) : gd(t[2]),
                f = s || o ? hd(t[3]) : gd(t[3]),
                d = u ? hd(t[4]) : 1;
            return new Ld(n, c, l, f, d, u)
        }(e) || Pd(255, 0, 0)
    }

    function Pd(e, t, n, r) {
        return new Ld(Nd, e, t, n, void 0 === r ? 1 : gd(r), void 0 !== r)
    }

    function Rd(e, t, n) {
        var r = t.f,
            o = t.r,
            i = t.g,
            s = t.b,
            a = t.a,
            u = void 0 === n ? t.o : n;
        return r !== e ? kd[r + e](o, i, s, a, u) : void 0 === n ? t : new Ld(r, o, i, s, a, u)
    }
    var Ld = function() {
        function e(e, t, n, r, o, i) {
            var s = this;
            s.f = e, s.o = i;
            var a = e === xd;
            s.r = Ud(a ? "h" : "r", t), s.g = Ud(a ? "s" : "g", n), s.b = Ud(a ? "l" : "b", r), s.a = Ud("a", o)
        }
        return e.prototype.toString = function() {
            var e, t, n = this,
                r = n.o,
                o = n.f,
                i = n.r,
                s = n.g,
                a = n.b,
                u = n.a;
            if (o === Nd) e = r ? "rgba" : Nd, t = [Td(i), Td(s), Td(a)];
            else {
                if (o !== xd) throw new Error("Invalid color format");
                e = r ? "hsla" : xd, t = [Td(i), md(Od(s, 100)), md(Od(a, 100))]
            }
            return r && t.push(vd(Od(u, 1e5))), bd(e, t)
        }, e.prototype.toHexString = function() {
            var e = Rd(Nd, this);
            return "#" + (Dd(e.r) + Dd(e.g) + Dd(e.b)).toUpperCase()
        }, e.prototype.toHSL = function() {
            return Rd(xd, this, !1)
        }, e.prototype.toHSLA = function() {
            return Rd(xd, this, !0)
        }, e.prototype.toRGB = function() {
            return Rd(Nd, this, !1)
        }, e.prototype.toRGBA = function() {
            return Rd(Nd, this, !0)
        }, e.prototype.red = function() {
            var e = this;
            return (e.f === Nd ? e : e.toRGB()).r
        }, e.prototype.green = function() {
            var e = this;
            return (e.f === Nd ? e : e.toRGB()).g
        }, e.prototype.blue = function() {
            var e = this;
            return (e.f === Nd ? e : e.toRGB()).b
        }, e.prototype.hue = function() {
            var e = this;
            return (e.f === xd ? e : e.toHSL()).r
        }, e.prototype.saturation = function() {
            var e = this;
            return (e.f === xd ? e : e.toHSL()).g
        }, e.prototype.lightness = function() {
            var e = this;
            return (e.f === xd ? e : e.toHSL()).b
        }, e.prototype.alpha = function() {
            return this.a
        }, e.prototype.opacity = function() {
            return this.a
        }, e.prototype.invert = function() {
            var t = this,
                n = Rd(Nd, t);
            return Rd(t.f, new e(Nd, 255 - n.r, 255 - n.g, 255 - n.b, t.a, t.o))
        }, e.prototype.lighten = function(t, n) {
            var r = this,
                o = Rd(xd, r),
                i = Id.l,
                s = o.b + (n ? i - o.b : i) * gd(t);
            return Rd(r.f, new e(xd, o.r, o.g, s, r.a, r.o))
        }, e.prototype.darken = function(t, n) {
            var r = this,
                o = Rd(xd, r),
                i = o.b - (n ? o.b : Id.l) * gd(t);
            return Rd(r.f, new e(xd, o.r, o.g, i, r.a, r.o))
        }, e.prototype.saturate = function(t, n) {
            var r = this,
                o = Rd(xd, r),
                i = Id.s,
                s = o.g + (n ? i - o.g : i) * gd(t);
            return Rd(r.f, new e(xd, o.r, s, o.b, r.a, r.o))
        }, e.prototype.desaturate = function(t, n) {
            var r = this,
                o = Rd(xd, r),
                i = Id.s,
                s = o.g - (n ? o.g : i) * gd(t);
            return Rd(r.f, new e(xd, o.r, s, o.b, r.a, r.o))
        }, e.prototype.grayscale = function() {
            return this.desaturate(1)
        }, e.prototype.fade = function(t) {
            var n = this,
                r = Ud("a", gd(t));
            return Rd(n.f, new e(n.f, n.r, n.g, n.b, r, !0))
        }, e.prototype.fadeOut = function(t, n) {
            var r = this,
                o = Ud("a", r.a - (n ? r.a : 1) * gd(t));
            return Rd(r.f, new e(r.f, r.r, r.g, r.b, o, !0))
        }, e.prototype.fadeIn = function(t, n) {
            var r = this,
                o = Ud("a", r.a + (n ? r.a : 1) * gd(t));
            return Rd(r.f, new e(r.f, r.r, r.g, r.b, o, !0))
        }, e.prototype.mix = function(t, n) {
            var r = Fd(t),
                o = Rd(Nd, this),
                i = Rd(Nd, r),
                s = void 0 === n ? .5 : n,
                a = 2 * s - 1,
                u = Math.abs(o.a - i.a),
                c = ((a * u == -1 ? a : (a + u) / (1 + a * u)) + 1) / 2,
                l = 1 - c,
                f = new e(Nd, Td(o.r * c + i.r * l), Td(o.g * c + i.g * l), Td(o.b * c + i.b * l), o.a * s + i.a * (1 - s), this.o || r.o);
            return Rd(this.f, f)
        }, e.prototype.tint = function(e) {
            return Pd(255, 255, 255).mix(this, e)
        }, e.prototype.shade = function(e) {
            return Pd(0, 0, 0).mix(this, e)
        }, e.prototype.spin = function(t) {
            var n = this,
                r = Rd(xd, n);
            return Rd(n.f, new e(xd, Md(r.r + t), r.g, r.b, n.a, n.o))
        }, e
    }();

    function Dd(e) {
        var t = Td(e);
        return (t < 16 ? "0" : "") + t.toString(16)
    }

    function Md(e) {
        return ((e < 0 ? 360 : 0) + e % 360) % 360
    }

    function Ud(e, t) {
        var n = Id[e];
        return t < 0 ? 0 : t > n ? n : t
    }

    function Fd(e) {
        return e instanceof Ld ? e : Ad(e)
    }

    function jd(e) {
        return e || 0 === e ? e.toString() + " !important" : ""
    }
    yd("matrix"), yd("matrix3d"), yd("perspective"), yd("rotate"), yd("rotate3d"), yd("rotateX"), yd("rotateY"), yd("rotateZ"), yd("scale"), yd("scale3d"), yd("scaleX"), yd("scaleY"), yd("scaleZ"), yd("skew"), yd("skewX"), yd("skewY"), yd("translate"), yd("translate3d"), yd("translateX"), yd("translateY"), yd("translateZ");
    Object.prototype.hasOwnProperty;

    function Bd(e) {
        return function(t) {
            for (var n = {}, r = 0, o = Object.keys(t); r < o.length; r++) {
                var i = o[r];
                n[i] = e(i, t[i])
            }
            return n
        }
    }

    function Gd(e) {
        return Bd(e)
    }
    var Hd = n(18746);

    function zd(e) {
        var t = {},
            n = "";
        for (var r in e) {
            var o = e[r];
            if ("$unique" === r) t[Hd.IS_UNIQUE] = o;
            else if ("$nest" === r) {
                var i = o;
                for (var s in i) {
                    var a = i[s];
                    t[s] = zd(a).result
                }
            } else "$debugName" === r ? n = o : t[r] = o
        }
        return {
            result: t,
            debugName: n
        }
    }
    var Wd = "undefined" == typeof requestAnimationFrame ? function(e) {
        return setTimeout(e)
    } : "undefined" == typeof self ? requestAnimationFrame : requestAnimationFrame.bind(self);

    function $d() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = {}, r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            if (null != i && !1 !== i)
                for (var s in i) {
                    var a = i[s];
                    (a || 0 === a) && ("$nest" === s && a ? n[s] = n.$nest ? $d(n.$nest, a) : a : -1 !== s.indexOf("&") || 0 === s.indexOf("@media") ? n[s] = n[s] ? $d(n[s], a) : a : n[s] = a)
                }
        }
        return n
    }
    var Vd, qd = function() {
            return Hd.create(void 0, !0)
        },
        Yd = new(function() {
            function e(e) {
                var t = e.autoGenerateTag,
                    n = this;
                this.cssRaw = function(e) {
                    e && (n._raw += e || "", n._pendingRawChange = !0, n._styleUpdated())
                }, this.cssRule = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    var o = zd($d.apply(void 0, t)).result;
                    n._freeStyle.registerRule(e, o), n._styleUpdated()
                }, this.forceRenderStyles = function() {
                    var e = n._getTag();
                    e && (e.textContent = n.getStyles())
                }, this.fontFace = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var r = n._freeStyle, o = 0, i = e; o < i.length; o++) {
                        var s = i[o];
                        r.registerRule("@font-face", s)
                    }
                    n._styleUpdated()
                }, this.getStyles = function() {
                    return (n._raw || "") + n._freeStyle.getStyles()
                }, this.keyframes = function(e) {
                    var t = function(e) {
                            var t = {
                                $debugName: void 0,
                                keyframes: {}
                            };
                            for (var n in e) {
                                var r = e[n];
                                "$debugName" === n ? t.$debugName = r : t.keyframes[n] = r
                            }
                            return t
                        }(e),
                        r = t.keyframes,
                        o = t.$debugName,
                        i = n._freeStyle.registerKeyframes(r, o);
                    return n._styleUpdated(), i
                }, this.reinit = function() {
                    var e = qd();
                    n._freeStyle = e, n._lastFreeStyleChangeId = e.changeId, n._raw = "", n._pendingRawChange = !1;
                    var t = n._getTag();
                    t && (t.textContent = "")
                }, this.setStylesTarget = function(e) {
                    n._tag && (n._tag.textContent = ""), n._tag = e, n.forceRenderStyles()
                }, this.stylesheet = function(e) {
                    for (var t = {}, r = 0, o = Object.getOwnPropertyNames(e); r < o.length; r++) {
                        var i = o[r],
                            s = e[i];
                        s && (s.$debugName = i, t[i] = n.style(s))
                    }
                    return t
                };
                var r = qd();
                this._autoGenerateTag = t, this._freeStyle = r, this._lastFreeStyleChangeId = r.changeId, this._pending = 0, this._pendingRawChange = !1, this._raw = "", this._tag = void 0, this.style = this.style.bind(this)
            }
            return e.prototype._afterAllSync = function(e) {
                var t = this;
                this._pending++;
                var n = this._pending;
                Wd((function() {
                    n === t._pending && e()
                }))
            }, e.prototype._getTag = function() {
                if (this._tag) return this._tag;
                if (this._autoGenerateTag) {
                    var e = "undefined" == typeof self ? {
                        textContent: ""
                    } : document.createElement("style");
                    return "undefined" != typeof document && document.head.appendChild(e), this._tag = e, e
                }
            }, e.prototype._styleUpdated = function() {
                var e = this,
                    t = this._freeStyle.changeId,
                    n = this._lastFreeStyleChangeId;
                (this._pendingRawChange || t !== n) && (this._lastFreeStyleChangeId = t, this._pendingRawChange = !1, this._afterAllSync((function() {
                    return e.forceRenderStyles()
                })))
            }, e.prototype.style = function() {
                var e = this._freeStyle,
                    t = zd($d.apply(void 0, arguments)),
                    n = t.result,
                    r = t.debugName,
                    o = r ? e.registerStyle(n, r) : e.registerStyle(n);
                return this._styleUpdated(), o
            }, e
        }())({
            autoGenerateTag: !0
        }),
        Kd = Yd.setStylesTarget,
        Qd = (Yd.cssRaw, Yd.cssRule),
        Xd = (Yd.forceRenderStyles, Yd.fontFace),
        Jd = (Yd.getStyles, Yd.keyframes),
        Zd = (Yd.reinit, Yd.style);
    Yd.stylesheet;
    ! function(e) {
        e.stylesheet = function(e) {
            return ji(e, Gd(((e, t) => Zd(...t, {
                $debugName: e
            }))))
        }, e.prefixedStylesheet = function(e, t) {
            return ji(t, Gd(((t, n) => Zd(...n, {
                $debugName: e + "-" + t
            }))))
        }, e.percent = Ed, e.px = Sd, e.important = jd, e.color = Ad, e.style = Zd, e.keyframes = Jd, e.cssRule = Qd, e.setStylesTarget = Kd, e.fontFace = Xd, e.rem = e => `calc(${e}px * var(--rem))`, e.joinClasses = e => e.join(" "), e.seconds = e => `${e}s`
    }(Vd || (Vd = {}));
    const ep = Vd.style({
            margin: 0,
            color: ld.xv.H1Color,
            letterSpacing: ld.xv.H1LetterSpacing,
            fontWeight: ld.xv.H1Weight,
            fontSize: Vd.rem(ld.xv.H1Size),
            lineHeight: Vd.rem(ld.xv.H1LineHeight)
        }),
        tp = Vd.style({
            margin: 0,
            color: ld.xv.H2Color,
            textTransform: "capitalize",
            letterSpacing: ld.xv.H2LetterSpacing,
            fontWeight: ld.xv.H2Weight,
            fontSize: Vd.rem(ld.xv.H2Size),
            lineHeight: Vd.rem(ld.xv.H2LineHeight)
        }),
        np = Vd.style({
            margin: 0,
            color: ld.xv.H3Color,
            letterSpacing: Vd.rem(ld.xv.H3LetterSpacing),
            fontWeight: ld.xv.H3Weight,
            fontSize: Vd.rem(ld.xv.H3Size),
            lineHeight: Vd.rem(ld.xv.H3LineHeight)
        }),
        rp = Vd.style({
            margin: 0,
            color: ld.Il.CoreNeutral50,
            textTransform: "uppercase",
            letterSpacing: Vd.rem(.04625),
            fontWeight: 700,
            fontSize: Vd.rem(.6875),
            lineHeight: Vd.rem(1.5)
        }),
        op = Vd.style({
            margin: 0,
            color: ld.xv.ButtonColor,
            letterSpacing: Vd.rem(ld.xv.ButtonLetterSpacing),
            fontWeight: ld.xv.ButtonWeight,
            fontSize: Vd.rem(ld.xv.ButtonSize),
            lineHeight: Vd.rem(ld.xv.ButtonLineHeight)
        }),
        ip = Vd.style({
            margin: 0,
            color: ld.xv.H4Color,
            letterSpacing: Vd.rem(ld.xv.H4LetterSpacing),
            fontWeight: ld.xv.H4Weight,
            fontSize: Vd.rem(ld.xv.H4Size),
            lineHeight: Vd.rem(ld.xv.H4LineHeight)
        }),
        sp = Vd.style({
            color: ld.xv.PaperColor,
            letterSpacing: Vd.rem(ld.xv.PaperLetterSpacing),
            fontWeight: ld.xv.PaperWeight,
            fontSize: Vd.rem(ld.xv.PaperSize),
            lineHeight: Vd.rem(ld.xv.PaperLineHeight)
        }),
        ap = Vd.style({
            color: ld.xv.BodyColor,
            letterSpacing: Vd.rem(ld.xv.BodyLetterSpacing),
            fontWeight: ld.xv.BodyWeight,
            fontSize: Vd.rem(ld.xv.BodySize),
            lineHeight: Vd.rem(ld.xv.BodyLineHeight)
        }),
        up = Vd.style({
            color: ld.xv.SmallColor,
            letterSpacing: Vd.rem(ld.xv.SmallLetterSpacing),
            fontWeight: ld.xv.SmallWeight,
            fontSize: Vd.rem(ld.xv.SmallSize),
            lineHeight: Vd.rem(ld.xv.SmallLineHeight)
        }),
        cp = Vd.style({
            color: ld.xv.SmallLightColor,
            letterSpacing: Vd.rem(ld.xv.SmallLightLetterSpacing),
            fontWeight: ld.xv.SmallLightWeight,
            fontSize: Vd.rem(ld.xv.SmallLightSize),
            lineHeight: Vd.rem(ld.xv.SmallLightLineHeight)
        }),
        lp = Vd.style({
            color: ld.xv.ScoreColor,
            letterSpacing: Vd.rem(ld.xv.ScoreLetterSpacing),
            fontWeight: ld.xv.ScoreWeight,
            fontSize: Vd.rem(ld.xv.ScoreSize),
            lineHeight: Vd.rem(ld.xv.ScoreLineHeight)
        }),
        fp = Vd.style({
            color: ld.Il.CoreNeutral70,
            letterSpacing: ".1px",
            fontWeight: 400,
            fontSize: Vd.rem(.6875),
            lineHeight: Vd.rem(1)
        }),
        dp = Vd.style({
            color: ld.Il.CoreNeutral90,
            textTransform: "uppercase",
            letterSpacing: ".8px",
            fontWeight: 700,
            fontSize: Vd.rem(.75),
            lineHeight: Vd.rem(2)
        }),
        pp = Vd.style({
            color: ld.Il.CoreNeutral90,
            letterSpacing: 0,
            fontSize: Vd.rem(.9375),
            lineHeight: Vd.rem(1.5)
        }),
        hp = Vd.style({
            margin: 0,
            color: ld.Il.CoreNeutral50,
            textTransform: "uppercase",
            letterSpacing: Vd.rem(.04625),
            fontWeight: 400,
            fontSize: Vd.rem(.5625),
            lineHeight: Vd.rem(1)
        });

    function gp(e) {
        var {
            nodeType: t,
            styleType: n,
            className: r
        } = e, o = P(e, ["nodeType", "styleType", "className"]);
        const i = ul[t];
        return Ba.createElement(i, Object.assign({}, sl(a[n], r), o))
    }! function(e) {
        let t;
        ! function(e) {
            e.H1 = "header1", e.H2 = "header2", e.H3 = "header3", e.H3Legacy = "header3legacy", e.H4 = "header4", e.H5 = "header5", e.Paper = "paper", e.Base = "base", e.Small = "small", e.SmallLight = "smallLight", e.Lawyer = "lawyer", e.Title = "title", e.Button = "button", e.Score = "score", e.P1 = "p1"
        }(t = e.Type || (e.Type = {}))
    }(gp || (gp = {}));
    var mp = n(80493);

    function vp(e) {}

    function bp(e, t) {
        return e || t
    }
    var yp;
    ! function(e) {
        e[e.lt = -1] = "lt", e[e.eq = 0] = "eq", e[e.gt = 1] = "gt"
    }(yp || (yp = {}));
    var _p, Ep, Sp, wp = wl;
    ! function(e) {
        var t = function() {
            function e() {}
            return e.configureLogLevelGetter = function(t) {
                e._getLogLevel = t
            }, Object.defineProperty(e, "root", {
                get: function() {
                    return Xl.getRootLogger()
                },
                enumerable: !1,
                configurable: !0
            }), e.getLogger = function(t, n) {
                var r = e._getLogLevel(t, n),
                    o = e.root.getLogger(t, e._getLogLevel(t, n));
                return n !== r && o.debug('Logger "' + t + '" initialized with level "' + (r && wp[r]) + '" instaed of "' + (n && wp[n]) + '"'), o
            }, e._getLogLevel = function(e, t) {
                return t
            }, e
        }();
        e.Logging = t;
        var n = function() {
            function e() {}
            return Object.defineProperty(e, "root", {
                get: function() {
                    return Ml.getRootMetric()
                },
                enumerable: !1,
                configurable: !0
            }), e
        }();
        e.TimeSeries = n
    }(_p || (_p = {})),
    function(e) {
        e.empty = {
            hovered: void 0,
            disabled: void 0,
            active: void 0
        }, e.withValue = (e, t) => Object.assign(Object.assign({}, e), t), e.emptyWithName = t => e.withValue(e.empty, {
            name: t
        }), e.Context = Ba.createContext(e.empty)
    }(Ep || (Ep = {})),
    function(e) {
        e.EMPTY = H.EMPTY;
        e.Keeper = class {
            constructor() {
                this._subs = []
            }
            push(...e) {
                this._subs.push(...e)
            }
            dispose() {
                this._subs.forEach((e => {
                    "unsubscribe" in e ? e.unsubscribe() : e.dispose()
                })), this._subs = []
            }
        }
    }(Sp || (Sp = {}));
    var Cp;
    n(31699), String.fromCharCode(160);
    ! function(e) {
        e.URI_REGEXP = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    }(Cp || (Cp = {}));
    var Tp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function Op(e) {
        if (e < 0) throw new TypeError("Length should not be negative: " + e);
        return Array.from({
            length: e
        }, (function() {
            return Tp.charAt(Math.random() * Tp.length)
        })).join("")
    }

    function Np(e) {
        return function(t) {
            return e.set(t)
        }
    }
    var xp;

    function kp(e) {
        return e instanceof X ? e : bc(e)
    }

    function Ip() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            var n;
            "function" == typeof e[e.length - 1] && (n = e.pop());
            var r = e;
            return t.lift(new Ap(r, n))
        }
    }! function(e) {
        e.ricScheduler = function(t) {
            return "requestIdleCallback" in self ? function(e) {
                var n = self;
                return X.create((function(r) {
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
            return X.create((function(t) {
                var n = requestAnimationFrame((function() {
                    return t.next(e)
                }));
                return function() {
                    return cancelAnimationFrame(n)
                }
            }))
        }, e.syncScheduler = function(e) {
            return bc(e)
        }, e.inRaf = function(t) {
            return t.pipe(If(e.rafScheduler))
        }, e.inRic = function(t, n) {
            return t.pipe(If(e.ricScheduler(n)))
        }
    }(xp || (xp = {}));
    var Ap = function() {
            function e(e, t) {
                this.observables = e, this.project = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Pp(e, this.observables, this.project))
            }, e
        }(),
        Pp = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                o.observables = n, o.project = r, o.toRespond = [];
                var i = n.length;
                o.values = new Array(i);
                for (var s = 0; s < i; s++) o.toRespond.push(s);
                for (s = 0; s < i; s++) {
                    var a = n[s];
                    o.add(pn(o, a, void 0, s))
                }
                return o
            }
            return I(t, e), t.prototype.notifyNext = function(e, t, n) {
                this.values[n] = t;
                var r = this.toRespond;
                if (r.length > 0) {
                    var o = r.indexOf(n); - 1 !== o && r.splice(o, 1)
                }
            }, t.prototype.notifyComplete = function() {}, t.prototype._next = function(e) {
                if (0 === this.toRespond.length) {
                    var t = [e].concat(this.values);
                    this.project ? this._tryProject(t) : this.destination.next(t)
                }
            }, t.prototype._tryProject = function(e) {
                var t;
                try {
                    t = this.project.apply(this, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(on);
    var Rp, Lp = function() {
            function e(e) {
                this.callback = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new Dp(e, this.callback))
            }, e
        }(),
        Dp = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.add(new H(n)), r
            }
            return I(t, e), t
        }($);
    ! function(e) {
        e.genUuid = () => Op(12), e.defaultState = {
            visible: !1,
            content: xi
        }, e.Context = Ba.createContext(void 0);
        class t {
            constructor(t = bn.create(e.defaultState)) {
                this._state = t, this.visible = this._state.lens("visible"), this.content = this._state.lens("content"), this.hasContent = this._state.view((e => Oi(e.content))), this.state = this._state.view((e => ji(e.content, Ui((() => e.visible))))), this.show = () => {
                    this.visible.set(!0)
                }, this.hide = () => {
                    this._state.set(e.defaultState)
                }
            }
            getTooltipObservable(t, n, r, o) {
                const i = e.genUuid(),
                    s = () => this._state.modify((t => ji(t.content, Fi((e => e.uuid === i))) ? e.defaultState : t));
                return xf(t, "mouseenter").pipe(Ip(kp(n).pipe(It(Boolean)), ((e, t) => t)), bt((e => this.content.set(ki({
                    target: t,
                    content: e,
                    alignment: r,
                    uuid: i
                })))), If((() => ji(o, Ri((() => ea), (e => sa(e)))).pipe(xc(xf(t, "mouseleave")), bt(s)))), (a = s, function(e) {
                    return e.lift(new Lp(a))
                }));
                var a
            }
        }
        e.Impl = t, e.DefaultProvider = ({
            children: n
        }) => Ba.createElement(e.Context.Provider, {
            value: new t
        }, n)
    }(Rp || (Rp = {}));
    class Mp extends Ba.Component {
        constructor() {
            super(...arguments), this._subs = new Sp.Keeper, this._attachEvents = e => {
                this._subs.push(this.context.getTooltipObservable($a.findDOMNode(this), e.title, e.align || "auto", Ii(e.duration)).subscribe())
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
            return Ba.Children.only(this.props.children)
        }
    }
    Mp.contextType = Rp.Context;
    const Up = .25,
        Fp = e => Object.assign(Object.assign({}, e.default), {
            $nest: {
                "&:not([data-disabled='true'])[data-hovered='true']": Object.assign({}, e.hovered),
                "&[data-disabled='true']": Object.assign({}, e.disabled),
                "&:not([data-disabled='true']):active": Object.assign({}, e.clicked),
                "&[data-active='true']": Object.assign({}, e.toggled),
                "&:focus": {
                    boxShadow: `0 0 0 2px ${ld.Il.CoreBlue40}`
                },
                "&:focus:not(:focus-visible)": {
                    boxShadow: "none"
                },
                "&:focus-visible": {
                    boxShadow: `0 0 0 2px ${ld.Il.CoreBlue40}`
                }
            }
        }),
        jp = (e, t) => ({
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
        Bp = {
            borderRadius: Vd.rem(Up)
        },
        Gp = Fp({
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
        Hp = Vd.style(Gp),
        zp = Vd.style(Gp, Bp, Fp({
            default: {
                padding: `0 ${Vd.rem(.5)}`,
                backgroundColor: "transparent",
                color: ld.Il.CoreBlue50,
                lineHeight: Vd.rem(2),
                transition: "background-color .2s"
            },
            hovered: {
                backgroundColor: ld.Il.CoreNeutral1
            },
            disabled: {
                color: ld.Il.CoreNeutral30,
                fontWeight: "normal"
            },
            clicked: {
                transition: "none",
                transform: "scale(1)"
            },
            toggled: {}
        })),
        Wp = Vd.style({
            display: "inline-flex"
        }),
        $p = Vd.style(Gp, Bp, jp(Vd.rem(ld.Zh.ButtonPrimaryX), 0), Fp({
            default: {
                backgroundColor: ld.Il.BackgroundButtonPrimaryNormal,
                color: ld.Il.CoreNeutral0,
                lineHeight: Vd.rem(2),
                transitionDuration: ".2s"
            },
            hovered: {
                backgroundColor: ld.Il.BackgroundButtonPrimaryHover,
                $nest: {
                    "& > i": {
                        fill: ld.Il.CoreNeutral0,
                        stroke: ld.Il.CoreNeutral0
                    }
                }
            },
            disabled: {
                backgroundColor: ld.Il.BackgroundButtonPrimaryDisabled,
                color: ld.Il.TextButtonPrimaryDisabled
            },
            clicked: {},
            toggled: {}
        }), {
            $nest: {
                "& > i": {
                    fill: ld.Il.CoreNeutral0,
                    stroke: ld.Il.CoreNeutral0
                }
            }
        }),
        Vp = Vd.style(Gp, {
            $nest: {
                [`.${Wp} &`]: {
                    padding: `0 ${Vd.rem(.5)}`,
                    borderRight: `2px solid ${ld.Il.CoreNeutral0}`,
                    borderRadius: 0,
                    $nest: {
                        "&:first-child": {
                            borderRadius: `${Vd.rem(Up)} 0 0 ${Vd.rem(Up)}`
                        },
                        "&:last-child": {
                            borderRight: "none",
                            borderRadius: `0 ${Vd.rem(Up)} ${Vd.rem(Up)} 0`
                        }
                    }
                },
                [`.${Wp} &:not([data-active='true'])`]: {
                    backgroundColor: ld.Il.CoreNeutral10
                }
            }
        }, Fp({
            default: {
                padding: `0 ${Vd.rem(.5)}`,
                borderRadius: Vd.rem(Up),
                backgroundColor: ld.Il.CoreNeutral10,
                color: ld.Il.CoreBlue50,
                textTransform: "capitalize",
                letterSpacing: 0,
                fontSize: Vd.rem(.875),
                lineHeight: Vd.rem(2),
                transitionDuration: ".2s"
            },
            hovered: {
                backgroundColor: ld.Il.CoreNeutral20
            },
            toggled: {
                backgroundColor: ld.Il.CoreBlue50,
                color: ld.Il.CoreNeutral0,
                $nest: {
                    "&:hover": {
                        backgroundColor: ld.Il.CoreBlue40,
                        color: ld.Il.CoreNeutral0
                    }
                }
            },
            disabled: {
                backgroundColor: ld.Il.CoreNeutral10,
                color: ld.Il.CoreNeutral50
            },
            clicked: {}
        })),
        qp = Vd.style(Gp, Bp, jp(Vd.rem(ld.Zh.ButtonPrimaryX), 0), Fp({
            default: {
                display: "inline-flex",
                color: ld.Il.CoreBlue50,
                lineHeight: Vd.rem(2),
                transitionDuration: ".2s",
                transitionProperty: "border, background, color",
                flexWrap: "wrap",
                alignItems: "center"
            },
            hovered: {
                borderColor: ld.Il.BackgroundButtonGhostHover,
                background: ld.Il.BackgroundButtonGhostHover
            },
            disabled: {
                borderColor: ld.Il.TextButtonGhostDisabled,
                color: ld.Il.TextButtonGhostDisabled
            },
            clicked: {},
            toggled: {}
        }), {
            $nest: {
                "&[data-textpos] i[role='icon']": {
                    margin: `${Vd.rem(-.1)} ${Vd.rem(.25)} 0 0`
                }
            }
        }),
        Yp = Vd.style(Gp, Bp, jp(Vd.rem(.5), 0), Fp({
            default: {
                display: "inline-flex",
                color: ld.Il.CoreNeutral50,
                lineHeight: Vd.rem(2),
                transitionDuration: ".2s",
                transitionProperty: "border, background, color",
                flexWrap: "wrap",
                alignItems: "center"
            },
            hovered: {
                background: ld.Il.CoreNeutral1,
                color: ld.Il.CoreBlue50
            },
            disabled: {
                color: ld.Il.CoreNeutral30
            },
            clicked: {},
            toggled: {}
        })),
        Kp = Vd.style(Gp, jp(Vd.rem(1), Vd.rem(.5)), Fp({
            default: {
                display: "inline-flex",
                color: ld.Il.CoreNeutral90,
                textAlign: "left",
                fontWeight: "normal",
                fontSize: Vd.rem(.875),
                lineHeight: Vd.rem(2),
                transitionDuration: ".2s",
                alignItems: "center"
            },
            hovered: {
                backgroundColor: ld.Il.CoreNeutral10,
                color: ld.Il.CoreBlue50
            },
            disabled: {
                color: ld.Il.CoreNeutral40
            },
            clicked: {},
            toggled: {}
        }), {
            $nest: {
                "&[data-textpos] i[role='icon']": {
                    margin: `${Vd.rem(-.1)} ${Vd.rem(.25)} 0 0`
                }
            }
        }),
        Qp = Vd.style(Gp, Bp, {
            display: "flex",
            margin: `0 ${Vd.rem(.5)} ${Vd.rem(.5)}`,
            padding: `0 ${Vd.rem(.3)} 0 ${Vd.rem(.5)}`,
            minHeight: Vd.rem(2),
            color: ld.Il.CoreNeutral70,
            textAlign: "left",
            whiteSpace: "normal",
            fontWeight: "normal",
            lineHeight: Vd.rem(1.2),
            transition: "background .2s",
            alignItems: "center",
            $nest: {
                "&[data-hovered='true']": {
                    background: ld.Il.CoreNeutral10
                },
                "&[data-active='true']": {
                    background: ld.Il.CoreNeutral20
                }
            }
        }),
        Xp = Vd.style({
            textDecoration: "none"
        }),
        Jp = Vd.style({
            display: "inline-flex",
            justifyContent: "space-around",
            $nest: {
                "& > *:not(:first-child)": {
                    marginLeft: Vd.rem(.5)
                }
            }
        }),
        Zp = Vd.style({
            display: "inline-flex",
            flexDirection: "column",
            $nest: {
                "& > *": {
                    borderRadius: 0
                }
            }
        });
    Vd.style({
        whiteSpace: "pre-line"
    });
    var eh = function(e) {
        void 0 === e && (e = "(nomessage)"), Error.call(this, e), "captureStackTrace" in Error ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = this.constructor.name
    };
    eh.prototype = Object.create(Error.prototype);
    var th = function(e) {
            function t(t, n) {
                void 0 === n && (n = "empty");
                var r = e.call(this, "Invariant condition failed: " + (t || "(unnamed)")) || this;
                return r.input = n, r
            }
            return I(t, e), t.prototype.toString = function() {
                return this.message + " on input[" + this.input + "]"
            }, t
        }(eh),
        nh = (function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            I(t, e)
        }(eh), function(e) {
            function t(t) {
                return e.call(this, "Matching not exhaustive" + (t ? ": unexpected value " + JSON.stringify(t) : "")) || this
            }
            return I(t, e), t
        }(eh));

    function rh(e) {
        throw new nh(e)
    }
    var oh;
    ! function(e) {
        e.None = "none", e.FromClickPoint = "fromClickPoint", e.FromCenter = "fromCenter"
    }(oh || (oh = {}));
    class ih extends Ba.Component {
        constructor(e, t) {
            super(e), this._ripples = bn.create(Array()), this._disabled = bn.create(!1).view(), this._disabled = void 0 === t.disabled ? this._disabled : t.disabled
        }
        componentDidMount() {
            this._el && (this._subscription = this.props.mouseDownEvents.pipe(bt((e => {
                if (!this._disabled.get() && this._el) {
                    const t = this._getAnimationStyle(this._el, e);
                    this._ripples.modify((e => [...e, t]))
                }
            })), Sf(1e3), bt((() => this._ripples.modify((() => []))))).subscribe())
        }
        componentWillUnmount() {
            this._subscription && this._subscription.unsubscribe()
        }
        _getAnimationStyle(e, t) {
            const n = e.getBoundingClientRect(),
                r = n.width;
            switch (this.props.animationMode) {
                case oh.None:
                    throw new th("unsupported mode, do not mount component if you do not need ripple animation");
                case oh.FromCenter:
                    return {
                        className: lh.rippleFromCenter, top: (n.height - r) / 2, left: 0, width: r, height: r
                    };
                default:
                    return {
                        className: lh.ripple, top: t.pageY - n.top - r / 2, left: t.pageX - n.left - r / 2, width: r, height: r
                    }
            }
        }
        render() {
            return Ba.createElement("span", {
                className: lh.rippleContainer,
                ref: e => this._el = e
            }, Ba.createElement(ul.span, null, this._ripples.pipe(ha((e => e.map(((e, t) => Ba.createElement("span", {
                className: e.className,
                key: t,
                style: e
            }))))))))
        }
    }
    ih.contextType = Ep.Context;
    const sh = Vd.keyframes({
            to: {
                opacity: 0,
                transform: "scale(1)"
            }
        }),
        ah = Vd.keyframes({
            to: {
                opacity: 0,
                transform: "scale(2)"
            }
        }),
        uh = {
            position: "absolute",
            borderRadius: Vd.percent(100),
            backgroundColor: ld.Il.CoreNeutral90,
            opacity: .15,
            transform: "scale(0)",
            animation: `${ah} .4s`
        },
        ch = {
            animationName: sh
        },
        lh = Vd.stylesheet({
            rippleContainer: [{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: "inherit",
                pointerEvents: "none"
            }],
            ripple: [uh],
            rippleFromCenter: [uh, ch]
        }),
        fh = e => e ? -1 : 0;
    var dh, ph;
    ! function(e) {
        e[e.button = 0] = "button", e[e.div = 1] = "div", e[e.link = 2] = "link"
    }(dh || (dh = {}));
    class hh extends Ba.Component {
        constructor(e, t) {
            super(e), this._hovered = bn.create(!1), this.mouseDownEvents = new ht, this._setInternals(e), this._isHovered = void 0 !== t.hovered ? bn.combine(t.hovered, this._hovered, bp) : this._hovered
        }
        static get _log() {
            return void 0 === this.__buttonLogger && (this.__buttonLogger = _p.Logging.getLogger("Button")), this.__buttonLogger
        }
        UNSAFE_componentWillReceiveProps(e) {
            this._setInternals(e)
        }
        render() {
            const e = {
                    hovered: this._isHovered,
                    disabled: "boolean" == typeof this._isDisabled ? bn.create(this._isDisabled) : this._isDisabled,
                    active: "boolean" == typeof this._isActive ? bn.create(this._isActive) : this._isActive
                },
                t = this._getElement(this.props.tag, this.props.href);
            return Ba.createElement(Ep.Context.Provider, {
                value: e
            }, this.props.title ? Ba.createElement(Mp, {
                title: this.props.title,
                align: this.props.titleAlign || "auto"
            }, t) : t)
        }
        _getElement(e, t) {
            return void 0 === t || e !== dh.link && e ? e === dh.button ? this._genButtonEl() : this._genDivEl() : this._genLinkEl()
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
            this._onClick = e => (hh._log.info("Button clicked: " + this._name), t && t(e).catch((e => hh._log.error("Button click failed: " + this._name, e)))), this._isDisabled = n, this._isActive = void 0 !== e.active && e.active
        }
        _genLinkEl() {
            return this.props.styleType ? Ba.createElement(gp, Object.assign({
                styleType: this.props.styleType,
                nodeType: "a"
            }, this._getLinkRenderProps())) : Ba.createElement(ul.a, Object.assign({}, this._getLinkRenderProps()))
        }
        _genDivEl() {
            return this.props.styleType ? Ba.createElement(gp, Object.assign({
                styleType: this.props.styleType,
                nodeType: "div"
            }, this._getDivRenderProps())) : Ba.createElement(ul.div, Object.assign({}, this._getDivRenderProps()))
        }
        _genButtonEl() {
            return this.props.styleType ? Ba.createElement(gp, Object.assign({
                styleType: this.props.styleType,
                nodeType: "button"
            }, this._getButtonRenderProps(this.props.role))) : Ba.createElement(ul.button, Object.assign({}, this._getButtonRenderProps(this.props.role)))
        }
        _getLinkRenderProps() {
            return this._getBaseRenderProps(Object.assign({
                href: this.props.href,
                target: this.props.target,
                rel: this.props.rel,
                role: "button"
            }, sl(Xp, this.props.className)))
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
            const t = ji(Ii(this.props.textPosition), Ri((() => ph.parseFromNodes(this.props.children)), ki), Di((e => ({
                "data-textpos": e
            }))), Li((() => ({}))));
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
                tabIndex: "boolean" == typeof this._isDisabled ? fh(this._isDisabled) : ji(this._isDisabled, ha(fh))
            }, t), e)
        }
        _renderChildren() {
            return this.props.animationMode && this.props.animationMode !== oh.None ? this._renderChildrenAsArray().concat(this._renderRippleAnimation()) : this.props.children
        }
        _renderChildrenAsArray() {
            return Array.isArray(this.props.children) ? [].concat.apply([], this.props.children) : [this.props.children]
        }
        _renderRippleAnimation() {
            return Ba.createElement(ih, {
                key: "ripple",
                animationMode: this.props.animationMode || oh.FromClickPoint,
                mouseDownEvents: this.mouseDownEvents
            })
        }
        _getGenericButtonInternals(e, t = !1) {
            const n = bn.create(!1),
                r = "boolean" == typeof t ? n.view((e => t || e)) : bn.combine(t, n, bp);
            return {
                onClick: this._decorateOnClickWithStateManager(e, (e => n.set(e)), (() => r.get())),
                isDisabled: r
            }
        }
        _decorateOnClickWithStateManager(e, t, n) {
            return r => R(this, void 0, void 0, (function*() {
                if (r.stopPropagation(), !n()) {
                    t(!0);
                    try {
                        return this._hovered.set(!1), yield e(r)
                    } finally {
                        t(!1)
                    }
                }
            }))
        }
    }

    function gh(e) {
        return Ba.createElement(hh, Object.assign({}, mh(e, Hp)))
    }

    function mh(e, t) {
        const {
            className: n
        } = sl(e.className, t);
        return Object.assign(Object.assign({}, e), {
            className: n
        })
    }
    hh.displayName = "BaseButton", hh.contextType = Ep.Context, hh.__buttonLogger = void 0,
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
                const n = mp.isFragment(e) ? e.props.children : e,
                    r = (Array.isArray(n) ? n : [n]).map((e => "string" == typeof e ? "+" : "-")).join("");
                return Ii(t.get(r))
            }
        }(ph || (ph = {})),
        function(e) {
            e.Animated = e => Ba.createElement(hh, Object.assign({}, Object.assign(Object.assign({}, e), {
                animationMode: e.animationMode || oh.FromClickPoint
            }))), e.Primary = t => Ba.createElement(e.Animated, Object.assign({
                styleType: gp.Type.Button
            }, mh(t, $p))), e.Ghost = t => Ba.createElement(e.Animated, Object.assign({
                styleType: gp.Type.Button
            }, mh(t, qp))), e.Tertiary = t => Ba.createElement(e.Animated, Object.assign({
                styleType: gp.Type.Base
            }, mh(t, Yp))), e.Flat = t => Ba.createElement(e.Animated, Object.assign({}, mh(t, Kp))), e.White = t => Ba.createElement(e.Animated, Object.assign({}, mh(t, Vp))), e.SidebarFlat = e => Ba.createElement(hh, Object.assign({
                styleType: gp.Type.H3Legacy
            }, mh(e, Qp))), e.Caps = e => Ba.createElement(hh, Object.assign({
                styleType: gp.Type.H3Legacy
            }, mh(e, zp))), e.Group = ({
                children: e,
                className: t,
                align: n = "horizontal",
                sticky: r
            }) => Ba.createElement(ul.div, Object.assign({}, sl(t, "horizontal" === n ? r ? Wp : Jp : Zp)), e)
        }(gh || (gh = {}));

    function vh() {
        return function(e) {
            return e.lift(new bh)
        }
    }
    var bh = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new yh(e))
            }, e
        }(),
        yh = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.hasPrev = !1, n
            }
            return I(t, e), t.prototype._next = function(e) {
                var t;
                this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
            }, t
        }($);

    function _h(e, t) {
        return function(n) {
            for (var r = n, o = 0; o < t; o++) {
                var i = null != r ? r[e[o]] : void 0;
                if (void 0 === i) return;
                r = i
            }
            return r
        }
    }
    var Eh = function(e, t) {
        var n = e.length;
        if (0 === n) return t;
        var r = t.length;
        if (0 === r) return e;
        for (var o = Array(n + r), i = 0; i < n; i++) o[i] = e[i];
        for (i = 0; i < r; i++) o[i + n] = t[i];
        return o
    };

    function Sh(e, t) {
        for (var n = e.length, r = Array(n + 1), o = 0; o < n; o++) r[o] = e[o];
        return r[n] = t, r
    }
    var wh = function(e) {
            return [e]
        },
        Ch = function() {
            return Kg
        },
        Th = function(e, t) {
            return Ti(e, eg(t))
        },
        Oh = function(e, t) {
            return Ti(e, tg(t))
        },
        Nh = function(e, t) {
            return Ti(e, Xh(t))
        },
        xh = function(e, t) {
            return Ti(e, Jh(t))
        },
        kh = function(e, t) {
            return Ti(e, rg(t))
        },
        Ih = function(e, t) {
            return Ti(e, ig(t))
        },
        Ah = function(e, t) {
            return Ti(e, ug(t))
        },
        Ph = function(e, t) {
            return Ti(e, ag(t))
        },
        Rh = function(e, t) {
            return Ti(e, cg(t))
        },
        Lh = function(e, t) {
            return Ti(e, lg(t))
        },
        Dh = function(e, t) {
            return Ti(e, Qh(t))
        },
        Mh = function(e, t, n) {
            return Ti(e, hg(t, n))
        },
        Uh = function(e) {
            var t = gg(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        Fh = function(e, t, n) {
            return Ti(e, vg(t, n))
        },
        jh = function(e, t, n) {
            for (var r = e.length, o = t, i = 0; i < r; i++) o = n(i, o, e[i]);
            return o
        },
        Bh = function(e) {
            return function(t, n) {
                return t.reduce((function(t, r, o) {
                    return e.concat(t, n(o, r))
                }), e.empty)
            }
        },
        Gh = function(e, t, n) {
            return Ti(e, bg(t, n))
        },
        Hh = function(e, t) {
            return Ti(e, og(t))
        },
        zh = function(e, t) {
            return Ti(e, fg(t))
        },
        Wh = function(e, t) {
            return Ti(e, dg(t))
        },
        $h = function(e) {
            var t = yg(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        Vh = function(e) {
            var t = Eg(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        qh = function(e) {
            var t = Sg(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        Yh = function(e) {
            var t = wg(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        Kh = function(e) {
            return function(t) {
                return Eh(t, e())
            }
        },
        Qh = Kh,
        Xh = function(e) {
            return Jh((function(t) {
                return Ti(e, eg(t))
            }))
        },
        Jh = function(e) {
            return function(t) {
                return Ti(t, Zh((function(t, n) {
                    return e(n)
                })))
            }
        },
        Zh = function(e) {
            return function(t) {
                for (var n = 0, r = t.length, o = new Array(r), i = 0; i < r; i++) {
                    var s = t[i];
                    n += (c = e(i, s)).length, o[i] = c
                }
                var a = Array(n),
                    u = 0;
                for (i = 0; i < r; i++) {
                    for (var c, l = (c = o[i]).length, f = 0; f < l; f++) a[f + u] = c[f];
                    u += l
                }
                return a
            }
        },
        eg = function(e) {
            return function(t) {
                return t.map((function(t) {
                    return e(t)
                }))
            }
        },
        tg = function(e) {
            return function(t) {
                return t.map((function(t, n) {
                    return e(n, t)
                }))
            }
        },
        ng = function(e) {
            for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                "Left" === i._tag ? t.push(i.left) : n.push(i.right)
            }
            return {
                left: t,
                right: n
            }
        },
        rg = function(e) {
            return function(t) {
                return t.filter(e)
            }
        },
        og = function(e) {
            return function(t) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var o = e(r, t[r]);
                    Oi(o) && n.push(o.value)
                }
                return n
            }
        },
        ig = function(e) {
            return og((function(t, n) {
                return e(n)
            }))
        },
        sg = ig(Ci),
        ag = function(e) {
            return ug((function(t, n) {
                return e(n)
            }))
        },
        ug = function(e) {
            return function(t) {
                for (var n = [], r = [], o = 0; o < t.length; o++) {
                    var i = t[o];
                    e(o, i) ? r.push(i) : n.push(i)
                }
                return {
                    left: n,
                    right: r
                }
            }
        },
        cg = function(e) {
            return lg((function(t, n) {
                return e(n)
            }))
        },
        lg = function(e) {
            return function(t) {
                for (var n = [], r = [], o = 0; o < t.length; o++) {
                    var i = e(o, t[o]);
                    "Left" === i._tag ? n.push(i.left) : r.push(i.right)
                }
                return {
                    left: n,
                    right: r
                }
            }
        },
        fg = function(e) {
            return function(t) {
                return t.filter((function(t, n) {
                    return e(n, t)
                }))
            }
        },
        dg = function(e) {
            return function(t) {
                return t.map((function(t, n, r) {
                    return e(r.slice(n))
                }))
            }
        },
        pg = function(e) {
            var t = Bh(e);
            return function(e) {
                return function(n) {
                    return t(n, e)
                }
            }
        },
        hg = function(e, t) {
            return mg(e, (function(e, n, r) {
                return t(n, r)
            }))
        },
        gg = function(e) {
            var t = pg(e);
            return function(e) {
                return t((function(t, n) {
                    return e(n)
                }))
            }
        },
        mg = function(e, t) {
            return function(n) {
                return jh(n, e, t)
            }
        },
        vg = function(e, t) {
            return bg(e, (function(e, n, r) {
                return t(n, r)
            }))
        },
        bg = function(e, t) {
            return function(n) {
                return n.reduceRight((function(e, n, r) {
                    return t(r, n, e)
                }), e)
            }
        },
        yg = function(e) {
            var t = Eg(e);
            return function(e) {
                return t((function(t, n) {
                    return e(n)
                }))
            }
        },
        _g = function(e) {
            return function(t) {
                return Mh(t, e.of(Ch()), (function(t, n) {
                    return e.ap(e.map(t, (function(e) {
                        return function(t) {
                            return Sh(e, t)
                        }
                    })), n)
                }))
            }
        },
        Eg = function(e) {
            return function(t) {
                return mg(e.of(Ch()), (function(n, r, o) {
                    return e.ap(e.map(r, (function(e) {
                        return function(t) {
                            return Sh(e, t)
                        }
                    })), t(n, o))
                }))
            }
        },
        Sg = function(e) {
            var t = yg(e);
            return function(n) {
                return function(r) {
                    return e.map(Ti(r, t(n)), sg)
                }
            }
        },
        wg = function(e) {
            var t = yg(e);
            return function(n) {
                return function(r) {
                    return e.map(Ti(r, t(n)), ng)
                }
            }
        },
        Cg = function(e, t) {
            for (var n = [], r = e;;) {
                var o = t(r);
                if (!Oi(o)) break;
                var i = o.value,
                    s = i[0],
                    a = i[1];
                n.push(s), r = a
            }
            return n
        },
        Tg = "ReadonlyArray",
        Og = Oh,
        Ng = {
            URI: Tg,
            map: Th,
            ap: Nh,
            of: wh,
            chain: xh
        },
        xg = Dh,
        kg = Ch,
        Ig = Wh,
        Ag = kh,
        Pg = Ih,
        Rg = Ph,
        Lg = Rh,
        Dg = Lh,
        Mg = Ah,
        Ug = Hh,
        Fg = zh,
        jg = Mh,
        Bg = Uh,
        Gg = Fh,
        Hg = jh,
        zg = Bh,
        Wg = Gh,
        $g = $h,
        Vg = Vh,
        qg = qh,
        Yg = Yh;
    var Kg = [];
    var Qg = Ng.map,
        Xg = Ng.ap,
        Jg = Ng.chain,
        Zg = "Array",
        em = {
            URI: Zg,
            compact: sg,
            separate: ng,
            map: Qg,
            ap: Xg,
            of: wh,
            chain: Jg,
            filter: Ag,
            filterMap: Pg,
            partition: Rg,
            partitionMap: Lg,
            mapWithIndex: Og,
            partitionMapWithIndex: Dg,
            partitionWithIndex: Mg,
            filterMapWithIndex: Ug,
            filterWithIndex: Fg,
            alt: xg,
            zero: kg,
            unfold: Cg,
            reduce: jg,
            foldMap: Bg,
            reduceRight: Gg,
            traverse: $g,
            sequence: _g,
            reduceWithIndex: Hg,
            foldMapWithIndex: zg,
            reduceRightWithIndex: Wg,
            traverseWithIndex: Vg,
            extend: Ig,
            wither: qg,
            wilt: Yg
        };

    function tm(e) {
        return {
            equals: function(t, n) {
                return t === n || e(t, n)
            }
        }
    }
    var nm = function(e) {
            return "Left" === e._tag
        },
        rm = function(e) {
            return {
                _tag: "Left",
                left: e
            }
        },
        om = function(e) {
            return {
                _tag: "Right",
                right: e
            }
        };

    function im(e, t) {
        try {
            return om(e())
        } catch (e) {
            return rm(t(e))
        }
    }
    var sm = function(e, t) {
            return Ti(e, bm(t))
        },
        am = function(e, t) {
            return Ti(e, Sm(t))
        },
        um = function(e, t) {
            return Ti(e, Tm(t))
        },
        cm = function(e, t, n) {
            return Ti(e, xm(t, n))
        },
        lm = function(e) {
            return function(t, n) {
                return Ti(t, km(e)(n))
            }
        },
        fm = function(e, t, n) {
            return Ti(e, Im(t, n))
        },
        dm = function(e) {
            var t = Am(e);
            return function(e, n) {
                return Ti(e, t(n))
            }
        },
        pm = function(e, t, n) {
            return Ti(e, ym(t, n))
        },
        hm = function(e, t) {
            return Ti(e, _m(t))
        },
        gm = function(e, t) {
            return Ti(e, Om(t))
        },
        mm = function(e, t) {
            return Ti(e, Nm(t))
        },
        vm = function(e, t) {
            return function(e, t) {
                for (var n = t(e);
                    "Left" === n._tag;) n = t(n.left);
                return n.right
            }(t(e), (function(e) {
                return nm(e) ? om(rm(e.left)) : nm(e.right) ? rm(t(e.right.left)) : om(om(e.right.right))
            }))
        },
        bm = function(e) {
            return function(t) {
                return nm(t) ? t : om(e(t.right))
            }
        },
        ym = function(e, t) {
            return function(n) {
                return nm(n) ? rm(e(n.left)) : om(t(n.right))
            }
        },
        _m = function(e) {
            return function(t) {
                return nm(t) ? rm(e(t.left)) : t
            }
        },
        Em = function(e) {
            return function(t) {
                return nm(t) ? t : nm(e) ? e : om(t.right(e.right))
            }
        },
        Sm = Em,
        wm = om,
        Cm = function(e) {
            return function(t) {
                return nm(t) ? t : e(t.right)
            }
        },
        Tm = Cm,
        Om = function(e) {
            return function(t) {
                return nm(t) ? e() : t
            }
        },
        Nm = function(e) {
            return function(t) {
                return nm(t) ? t : om(e(t))
            }
        },
        xm = function(e, t) {
            return function(n) {
                return nm(n) ? e : t(e, n.right)
            }
        },
        km = function(e) {
            return function(t) {
                return function(n) {
                    return nm(n) ? e.empty : t(n.right)
                }
            }
        },
        Im = function(e, t) {
            return function(n) {
                return nm(n) ? e : t(n.right, e)
            }
        },
        Am = function(e) {
            return function(t) {
                return function(n) {
                    return nm(n) ? e.of(rm(n.left)) : e.map(t(n.right), om)
                }
            }
        },
        Pm = function(e) {
            return function(t) {
                return nm(t) ? e.of(rm(t.left)) : e.map(t.right, om)
            }
        },
        Rm = rm,
        Lm = "Either";
    var Dm = {
        URI: Lm,
        map: sm,
        of: wm,
        ap: am,
        chain: um,
        reduce: cm,
        foldMap: lm,
        reduceRight: fm,
        traverse: dm,
        sequence: Pm,
        bimap: pm,
        mapLeft: hm,
        alt: gm,
        extend: mm,
        chainRec: vm,
        throwError: Rm
    };

    function Mm(e) {
        return e instanceof Error ? e : new Error(String(e))
    }
    var Um, Fm;
    Um = function(e) {
        throw e
    }, Fm = Ci;

    function jm(e, t) {
        if (!e || !e.parentElement) return !1;
        var n = e.className;
        return "string" == typeof n && n.indexOf(t) > -1 || jm(e.parentElement, t)
    }
    var Bm, Gm, Hm;
    ! function(e) {
        e.isLI = function(e) {
            return "LI" === e.nodeName
        }, e.isUL = function(e) {
            return "UL" === e.nodeName
        }, e.isOL = function(e) {
            return "OL" === e.nodeName
        }, e.isP = function(e) {
            return "P" === e.nodeName
        }, e.isH1 = function(e) {
            return "H1" === e.nodeName
        }, e.isH2 = function(e) {
            return "H2" === e.nodeName
        }, e.isLink = function(e) {
            return "A" === e.nodeName
        }, e.isBR = function(e) {
            return "BR" === e.nodeName
        }, e.isSPAN = function(e) {
            return "SPAN" === e.nodeName
        }, e.isHTMLElement = function(e) {
            return e.nodeType === Node.ELEMENT_NODE
        }, e.isDocumentFragment = function(e) {
            return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        }
    }(Bm || (Bm = {})),
    function(e) {
        e.eq = tm((function(e, t) {
            return e.height === t.height && e.width === t.width
        })), e.placeIntoRect = function(e, t) {
            var n = Math.trunc(e.width),
                r = Math.trunc(e.height);
            ! function(e, t, n) {
                if (!e) {
                    var r = new th("string" == typeof t ? t : t && t(), void 0 !== n && "string" != typeof n ? n() : n);
                    throw r.stack = r.stack.split("\n").filter((function(e) {
                        return -1 === e.indexOf("errors.")
                    })).join("\n"), r
                }
            }(n === t.width || r === t.height, "we should have similar box&rect dimensions for placing operation", (function() {
                return JSON.stringify({
                    box: e,
                    rect: t
                })
            }));
            var o = {
                    x: Math.ceil(t.left),
                    y: Math.ceil(t.top)
                },
                i = {
                    x: Math.ceil(t.left + t.width / 2 - n / 2),
                    y: Math.ceil(t.top + t.height / 2 - r / 2)
                },
                s = {
                    x: Math.ceil(t.right - n),
                    y: Math.ceil(t.bottom - r)
                };
            return em.traverse(Dm)([o, i, s], (function(e) {
                return Hm.validate({
                    top: e.y,
                    right: e.x + n,
                    bottom: e.y + r,
                    left: e.x,
                    height: r,
                    width: n
                })
            }))
        }
    }(Gm || (Gm = {})),
    function(e) {
        e.eq = tm((function(e, t) {
            return Gm.eq.equals(e, t) && e.top === t.top && e.bottom === t.bottom && e.left === t.left && e.right === t.right
        })), e.fromRectLike = function(e) {
            return {
                bottom: e.bottom,
                height: e.height,
                left: e.left,
                right: e.right,
                top: e.top,
                width: e.width
            }
        }, e.validate = function(t) {
            if ("object" != typeof t || null == t) return rm(new Error("not an object"));
            if (!Object.keys(e.empty).every((function(e) {
                    return e in t
                }))) return rm(new Error("object does not have all required rect props"));
            var n = t;
            return Math.round(n.right - n.left) !== Math.round(n.width) ? rm(new Error("incorrect horizontal dimensions, expected width: " + (n.right - n.left) + ", got: " + n.width)) : Math.round(n.bottom - n.top) !== Math.round(n.height) ? rm(new Error("incorrect vertical dimensions, expected height: " + (n.bottom - n.top) + ", got: " + n.height)) : n.top > n.bottom ? rm(new Error("incorrect vertical dimensions, expected top " + n.top + " to be less than bottom " + n.bottom)) : n.left > n.right ? rm(new Error("incorrect horizontal dimensions, expected left " + n.left + " to be less than right " + n.right)) : n.width < 0 ? rm(new Error("width cannot be negative")) : n.height < 0 ? rm(new Error("height cannot be negative")) : om(n)
        }, e.empty = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: 0,
            width: 0
        }, e.fromEl = function(e) {
            return e.getBoundingClientRect()
        };
        var t, n;
        e.hasIntersection = function(e, t) {
                return function(e, t) {
                    return Math.ceil(e.bottom) >= Math.floor(t.top) && Math.ceil(e.top) <= Math.floor(t.bottom) || Math.ceil(t.bottom) >= Math.floor(e.top) && Math.ceil(t.top) <= Math.floor(e.bottom)
                }(e, t) && function(e, t) {
                    return Math.ceil(e.right) >= Math.floor(t.left) && Math.ceil(e.left) <= Math.floor(t.right) || Math.ceil(t.right) >= Math.floor(e.left) && Math.ceil(t.left) <= Math.floor(e.right)
                }(e, t)
            }, e.intersection = function(t, n) {
                return e.hasIntersection(t, n) ? ji(ki({
                    top: Math.floor(Math.max(t.top, n.top)),
                    bottom: Math.ceil(Math.min(t.bottom, n.bottom)),
                    left: Math.floor(Math.max(t.left, n.left)),
                    right: Math.ceil(Math.min(t.right, n.right))
                }), Mi((function(t) {
                    return Pi(e.validate(A(A({}, t), {
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    })))
                }))) : xi
            }, e.growByBox = function(t, n) {
                var r = t.height,
                    o = t.width;
                return e.validate({
                    top: n.top - r / 2,
                    right: n.right + o / 2,
                    bottom: n.bottom + r / 2,
                    left: n.left - o / 2,
                    height: n.height + r,
                    width: n.width + o
                })
            }, e.scale = function(t, n) {
                var r = n.height * t,
                    o = n.width * t;
                return e.growByBox({
                    width: o,
                    height: r
                }, n)
            }, e.normalize = function(t) {
                return e.validate({
                    top: Math.ceil(t.top),
                    bottom: Math.ceil(t.bottom),
                    left: Math.ceil(t.left),
                    right: Math.ceil(t.right),
                    height: Math.ceil(t.height),
                    width: Math.ceil(t.width)
                })
            }, e.join = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = Math.min.apply(Math, t.map((function(e) {
                        return e.top
                    }))),
                    o = Math.max.apply(Math, t.map((function(e) {
                        return e.bottom
                    }))),
                    i = Math.min.apply(Math, t.map((function(e) {
                        return e.left
                    }))),
                    s = Math.max.apply(Math, t.map((function(e) {
                        return e.right
                    })));
                return e.validate({
                    top: r,
                    bottom: o,
                    left: i,
                    right: s,
                    width: s - i,
                    height: o - r
                })
            }, e.transpose = function(e, t) {
                return function(r) {
                    switch (e) {
                        case n.horizontal:
                            return A(A({}, r), {
                                left: r.left + t,
                                right: r.right + t
                            });
                        case n.vertical:
                            return A(A({}, r), {
                                top: r.top + t,
                                bottom: r.bottom + t
                            });
                        case n.both:
                            return A(A({}, r), {
                                left: r.left + t,
                                right: r.right + t,
                                top: r.top + t,
                                bottom: r.bottom + t
                            });
                        default:
                            return rh(e)
                    }
                }
            },
            function(e) {
                e.match = function(e, t, n, r) {
                    return function(o) {
                        switch (o) {
                            case "top":
                                return e();
                            case "right":
                                return t();
                            case "bottom":
                                return n();
                            case "left":
                                return r();
                            default:
                                return rh(o)
                        }
                    }
                }, e.invert = function(e) {
                    switch (e) {
                        case "top":
                            return "bottom";
                        case "right":
                            return "left";
                        case "bottom":
                            return "top";
                        case "left":
                            return "right";
                        default:
                            return rh(e)
                    }
                }
            }(t = e.Side || (e.Side = {})), e.stickToSide = function(e, n) {
                return function(r) {
                    return t.match((function() {
                        return {
                            top: r.top + (n.top - r.bottom),
                            bottom: n.top,
                            left: r.left,
                            right: r.right,
                            height: r.height,
                            width: r.width
                        }
                    }), (function() {
                        return {
                            top: r.top,
                            bottom: r.bottom,
                            left: n.right,
                            right: r.right + (n.right - r.left),
                            height: r.height,
                            width: r.width
                        }
                    }), (function() {
                        return {
                            top: n.bottom,
                            bottom: r.bottom + (n.bottom - r.top),
                            left: r.left,
                            right: r.right,
                            height: r.height,
                            width: r.width
                        }
                    }), (function() {
                        return {
                            top: r.top,
                            bottom: r.bottom,
                            left: r.left + (n.left - r.right),
                            right: n.left,
                            height: r.height,
                            width: r.width
                        }
                    }))(e)
                }
            },
            function(e) {
                e.horizontal = "left&right", e.vertical = "top&bottom", e.both = "top&right&bottom&left"
            }(n = e.Axis || (e.Axis = {})),
            function(e) {
                e.toSides = function(e) {
                    return e.split("&")
                }
            }(n = e.Axis || (e.Axis = {})),
            function(e) {
                e.empty = {
                    x: 0,
                    y: 0
                }, e.relativeTo = function(t, n) {
                    return e.normalize({
                        x: t.x - n.left,
                        y: t.y - n.top
                    })
                }, e.normalize = function(e) {
                    return {
                        x: Math.ceil(e.x),
                        y: Math.ceil(e.y)
                    }
                }
            }(e.Point || (e.Point = {})), e.hasPoint = function(e, t) {
                var n = t.x,
                    r = t.y;
                return Math.trunc(e.top) <= Math.trunc(r) && Math.trunc(e.bottom) >= Math.trunc(r) && Math.trunc(e.left) <= Math.trunc(n) && Math.trunc(e.right) >= Math.trunc(n)
            }, e.getMedian = function(t, n) {
                return ji(e.intersection(t, n), Di((function(e) {
                    var r = Math.trunc(e.width / 2),
                        o = Math.trunc(e.height / 2),
                        i = {
                            x: Math.trunc(e.left + r),
                            y: Math.trunc(e.top + o)
                        };
                    return {
                        side: 0 === r ? t.left < n.left ? "left" : "right" : t.top < n.top ? "top" : "bottom",
                        point: i
                    }
                })))
            }
    }(Hm || (Hm = {}));
    var zm;
    ! function(e) {
        e.translateY = function(e, t) {
            return void 0 === t && (t = "px"), "translateY(" + e + t + ")"
        }, e.rem = function(e) {
            return e + "rem"
        }
    }(zm || (zm = {}));
    var Wm;
    ! function(e) {
        e.UNKNOWN_SCROLLBAR = {
            type: "unknown",
            width: 17
        }, e.getState = function(e, t) {
            var n, r = new kl(50);
            return (n = {}, n[e.name] = function() {
                for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                var i = t ? t.apply(this, n) : n[0],
                    s = r.get(i);
                if (!s) {
                    var a = e.apply(this, n);
                    return r.put(i, a), a
                }
                return s
            }, n)[e.name]
        }((function() {
            return function(e) {
                return im(e, Mm)
            }((function() {
                var e = document.createElement("div");
                e.style.visibility = "hidden", e.style.overflow = "scroll", e.style.width = "100px", e.style.margin = "0", e.style.padding = "0", e.style.outline = "none", e.style.border = "none", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
                var t = e.offsetWidth - e.clientWidth;
                return document.body.removeChild(e), 0 === t ? {
                    type: "hidden",
                    width: 17
                } : {
                    type: "visible",
                    width: Math.max(15, t)
                }
            }))
        }))
    }(Wm || (Wm = {}));
    var $m, Vm;
    ! function(e) {
        e.invariantContent = function(e) {
            return "function" == typeof Proxy ? new Proxy({}, {
                get: function(t, n) {
                    if (!t[n]) throw new Error("Please provide context using " + e + ".Context.Provider");
                    return t[n]
                }
            }) : void 0
        }
    }($m || ($m = {})),
    function(e) {
        let t;
        ! function(e) {
            e.supportsSVGDominantBaseline = "supportsSVGDominantBaseline", e.supportsSetGoalsLoader = "supportsSetGoalsLoader", e.onlyTrustedEvents = "onlyTrustedEvents"
        }(t = e.Flag || (e.Flag = {})), e.Context = Ba.createContext($m.invariantContent("PlatformEnvironment"));
        e.Mock = class {
            constructor() {
                this.has = () => !1, this.actions = {
                    openUrl: () => om(void 0),
                    openPopup: () => om(void 0)
                }
            }
        }
    }(Vm || (Vm = {}));
    var qm = If(Ri((function() {
            return ea
        }), bc)),
        Ym = (oc((function(e, t) {
            return Ni(e) && Ni(t) || Oi(e) && Oi(t)
        })), function() {
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
                        var o = r[n];
                        e.call(t, o[1], o[0])
                    }
                }, t
            }()
        }()),
        Km = "undefined" != typeof self && "undefined" != typeof document && self.document === document,
        Qm = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math || "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
        Xm = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Qm) : function(e) {
            return setTimeout((function() {
                return e(Date.now())
            }), 1e3 / 60)
        };
    var Jm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Zm = "undefined" != typeof MutationObserver,
        ev = function() {
            function e() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                    var n = !1,
                        r = !1,
                        o = 0;

                    function i() {
                        n && (n = !1, e()), r && a()
                    }

                    function s() {
                        Xm(i)
                    }

                    function a() {
                        var e = Date.now();
                        if (n) {
                            if (e - o < 2) return;
                            r = !0
                        } else n = !0, r = !1, setTimeout(s, t);
                        o = e
                    }
                    return a
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
                Km && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), self.addEventListener("resize", this.refresh), Zm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function() {
                Km && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), self.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName,
                    n = void 0 === t ? "" : t;
                Jm.some((function(e) {
                    return !!~n.indexOf(e)
                })) && this.refresh()
            }, e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        tv = function(e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                var o = r[n];
                Object.defineProperty(e, o, {
                    value: t[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        nv = function(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView || Qm
        },
        rv = cv(0, 0, 0, 0);

    function ov(e) {
        return parseFloat(e) || 0
    }

    function iv(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.reduce((function(t, n) {
            return t + ov(e["border-" + n + "-width"])
        }), 0)
    }

    function sv(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return rv;
        var r = nv(e).getComputedStyle(e),
            o = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var o = r[n],
                        i = e["padding-" + o];
                    t[o] = ov(i)
                }
                return t
            }(r),
            i = o.left + o.right,
            s = o.top + o.bottom,
            a = ov(r.width),
            u = ov(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + i) !== t && (a -= iv(r, "left", "right") + i), Math.round(u + s) !== n && (u -= iv(r, "top", "bottom") + s)), ! function(e) {
                return e === nv(e).document.documentElement
            }(e)) {
            var c = Math.round(a + i) - t,
                l = Math.round(u + s) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
        }
        return cv(o.left, o.top, a, u)
    }
    var av = "undefined" != typeof SVGGraphicsElement ? function(e) {
        return e instanceof nv(e).SVGGraphicsElement
    } : function(e) {
        return e instanceof nv(e).SVGElement && "function" == typeof e.getBBox
    };

    function uv(e) {
        return Km ? av(e) ? function(e) {
            var t = e.getBBox();
            return cv(0, 0, t.width, t.height)
        }(e) : sv(e) : rv
    }

    function cv(e, t, n, r) {
        return {
            x: e,
            y: t,
            width: n,
            height: r
        }
    }
    var lv = function() {
            function e(e) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = cv(0, 0, 0, 0), this.target = e
            }
            return e.prototype.isActive = function() {
                var e = uv(this.target);
                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
            }, e
        }(),
        fv = function(e, t) {
            var n = function(e) {
                var t = e.x,
                    n = e.y,
                    r = e.width,
                    o = e.height,
                    i = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                    s = Object.create(i.prototype);
                return tv(s, {
                    x: t,
                    y: n,
                    width: r,
                    height: o,
                    top: n,
                    right: t + r,
                    bottom: o + n,
                    left: t
                }), s
            }(t);
            tv(this, {
                target: e,
                contentRect: n
            })
        },
        dv = function() {
            function e(e, t, n) {
                if (this.activeObservations_ = [], this.observations_ = new Ym, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
            }
            return e.prototype.observe = function(e) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof nv(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new lv(e)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function(e) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof nv(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new fv(e.target, e.broadcastRect())
                        }));
                    this.callback_.call(e, t, e), this.clearActive()
                }
            }, e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, e
        }(),
        pv = "undefined" != typeof WeakMap ? new WeakMap : new Ym,
        hv = function e(t) {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = ev.getInstance(),
                r = new dv(t, n, this);
            pv.set(this, r)
        };
    ["observe", "unobserve", "disconnect"].forEach((function(e) {
        hv.prototype[e] = function() {
            var t;
            return (t = pv.get(this))[e].apply(t, arguments)
        }
    }));
    const gv = void 0 !== Qm.ResizeObserver ? Qm.ResizeObserver : hv;

    function mv(e) {
        return new X((function(t) {
            var n;
            try {
                n = e()
            } catch (e) {
                return void t.error(e)
            }
            return (n ? ra(n) : ta()).subscribe(t)
        }))
    }
    var vv = mv((function() {
        return xf(self, "resize")
    })).pipe(kt());
    var bv, yv = function(e, t, n) {
        var r;
        return r = e && "object" == typeof e ? e : {
                bufferSize: e,
                windowTime: t,
                refCount: !1,
                scheduler: n
            },
            function(e) {
                return e.lift(function(e) {
                    var t, n, r = e.bufferSize,
                        o = void 0 === r ? Number.POSITIVE_INFINITY : r,
                        i = e.windowTime,
                        s = void 0 === i ? Number.POSITIVE_INFINITY : i,
                        a = e.refCount,
                        u = e.scheduler,
                        c = 0,
                        l = !1,
                        f = !1;
                    return function(e) {
                        var r;
                        c++, !t || l ? (l = !1, t = new Of(o, s, u), r = t.subscribe(this), n = e.subscribe({
                            next: function(e) {
                                t.next(e)
                            },
                            error: function(e) {
                                l = !0, t.error(e)
                            },
                            complete: function() {
                                f = !0, n = void 0, t.complete()
                            }
                        })) : r = t.subscribe(this), this.add((function() {
                            c--, r.unsubscribe(), n && !f && a && 0 === c && (n.unsubscribe(), n = void 0, t = void 0)
                        }))
                    }
                }(r))
            }
    };
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
            return class extends Ba.Component {
                constructor() {
                    super(...arguments), this._viewportEl = new mt(xi), this._onMount = e => {
                        this._viewportEl.next(Ii(e)), this.props.onMount && e && this.props.onMount(e)
                    }
                }
                render() {
                    const {
                        name: o,
                        children: i
                    } = this.props, s = this._viewportEl.pipe(qm, If((e => Nc(vv, xf(e, "transitionend").pipe(It((t => t.target === e))), bc(!0).pipe(If(xp.rafScheduler))).pipe($f(e), Ac(e), ha(Hm.fromEl))))), a = n.type === r.root ? e.RootVirtualContainer : e.InheritVirtualContainer;
                    return Ba.createElement(t, Object.assign({}, this.props, {
                        onMount: this._onMount,
                        name: o
                    }), Ba.createElement(a, {
                        viewport: s,
                        name: o
                    }, i))
                }
            }
        }, e.RootVirtualContainer = ({
            viewport: t,
            viewportPadding: n = bc(e.Padding.empty),
            name: r,
            children: o
        }) => {
            const i = Ba.useContext(e.Context);
            return Ba.createElement(e.Context.Provider, {
                key: Ev(r),
                value: vn(t, n, _v).pipe(Ip(i.pipe(ha((e => e.level))), e.State.nextLevel), yv({
                    bufferSize: 1,
                    refCount: !0
                }))
            }, o)
        }, e.InheritVirtualContainer = ({
            viewport: t,
            viewportPadding: n = bc(Hm.empty),
            name: r,
            children: o
        }) => {
            const i = Ba.useContext(e.Context);
            return Ba.createElement(e.Context.Provider, {
                key: Ev(r),
                value: vn(i.pipe(ha((e => e.rect))), vn(t || i.pipe(ha((e => e.rect))), n, _v), Hm.intersection).pipe(ha(Li((() => (_p.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport", {
                    name: r
                }), Hm.empty)))), Ip(i.pipe(ha((e => e.level))), e.State.nextLevel), yv({
                    bufferSize: 1,
                    refCount: !0
                }))
            }, o)
        };
        const o = mv((() => vv.pipe($f(document.body), Ac(document.body), ha(Hm.fromEl), ha((e => ({
            rect: e,
            level: 0
        })))))).pipe(yv({
            bufferSize: 1,
            refCount: !0
        }));
        e.Context = Ba.createContext(o)
    }(bv || (bv = {}));
    const _v = (e, t) => ({
            top: e.top + t.top,
            bottom: e.bottom - t.bottom,
            height: e.height - t.top - t.bottom,
            left: e.left,
            right: e.right,
            width: e.width
        }),
        Ev = e => {
            return `viewportProvider${t=e,t?t.replace(/(?:^|[-_\s])(\w)/g,(function(e,t){return t?t.toUpperCase():""})):""}`;
            var t
        };
    class Sv extends Ba.Component {
        constructor() {
            super(...arguments), this._state = this.props.state.pipe(Ac(void 0), ha(((e, t) => ({
                state: e,
                key: t
            }))), vh(), ha((([e, t]) => {
                const n = this.props.stateToClassMapper(e.state, t.state);
                return {
                    prev: {
                        key: e.key,
                        state: e.state,
                        view: Cv(n.prev)
                    },
                    next: {
                        key: t.key,
                        state: t.state,
                        view: Cv(n.next)
                    }
                }
            }))), this._elements = bn.create(wv.empty), this._done = new ht, this._subs = []
        }
        componentDidMount() {
            const {
                children: e
            } = this.props;
            this._subs.push(this._state.pipe(ha((({
                prev: t,
                next: n
            }) => {
                const r = e;
                return void 0 === e ? wv.empty : [ji(t.state, Ii, Di((e => r({
                    state: e,
                    view: t.view,
                    type: "prev",
                    done: () => this._done.next("prev")
                }))), Mi(Ii), Di((e => ({
                    key: t.key,
                    entry: e
                })))), ji(r({
                    state: n.state,
                    view: n.view,
                    type: "next"
                }), Ii, Di((e => ({
                    key: n.key,
                    entry: e
                }))))]
            }))).subscribe(Np(this._elements)), this._done.subscribe((e => {
                "prev" === e && this._elements.modify((([e, t]) => [xi, t])), "next" === e && this._elements.set(wv.empty)
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
                onMouseDown: r
            } = this.props;
            return e ? Ba.createElement(ul.div, {
                className: t,
                mount: n,
                onMouseDown: r
            }, this._elements.view(em.compact).view((e => e.map((e => Ba.createElement(Ba.Fragment, {
                key: e.key
            }, e.entry)))))) : null
        }
    }
    var wv;

    function Cv({
        start: e,
        end: t
    }) {
        return X.create((n => {
            n.next(e);
            const r = requestAnimationFrame((() => requestAnimationFrame((() => n.next(t)))));
            return () => cancelAnimationFrame(r)
        }))
    }! function(e) {
        e.empty = [xi, xi]
    }(wv || (wv = {}));
    const Tv = {
            position: "absolute",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            margin: `${Vd.rem(.5)} 0`,
            padding: `${Vd.rem(.5)} 0`,
            minWidth: Vd.percent(100),
            borderRadius: Vd.rem(.5),
            background: ld.Il.CoreNeutral0,
            boxShadow: ld.uc.Z200,
            opacity: 1,
            transition: "opacity .2s"
        },
        Ov = {
            margin: Vd.rem(.5),
            height: Vd.px(1),
            backgroundColor: ld.Il.CoreNeutral20
        },
        Nv = {
            wrapper: Vd.style({
                position: "relative"
            }),
            list: Vd.style(Tv),
            transparent: Vd.style({
                opacity: 0
            }),
            hidden: Vd.style({
                display: "none"
            }),
            delimiter: Vd.style(Ov)
        };
    class xv extends Sv {}
    class kv extends Ba.PureComponent {
        constructor() {
            super(...arguments), this._uuid = Op(12), this._initialState = !1, this._hovered = bn.create(this._initialState), this._hidden = bn.create(!this._initialState), this._listPosState = bn.create({}), this._dropdownEl = null, this._subs = [], this._viewport = bn.create(Hm.empty), this.hovered = this._hovered.pipe(vh(), If((([e, t]) => t ? sa(this.props.showDelay).pipe($f(!0)) : e ? sa(void 0 === this.props.closeDelay ? kv.defaultProps.closeDelay : this.props.closeDelay).pipe($f(!1)) : bc(!1))), xc(kv._hoveredForce.pipe(ha(Fi((e => e === this._uuid))))), oc(), bt((e => e && kv._hoveredForce.next(ki(this._uuid)))), bt((e => e && this._hidden.set(!1))), kt(), Ac(this._initialState)), this._handleClickForAppearanceHover = e => {
                const t = e.target;
                if (function(e) {
                        return void 0 !== e.dataset && "true" === e.dataset.disabled
                    }(t) || this.props.dontCloseOnClickInside) return;
                const n = !jm(t, Nv.list);
                kv._hoveredForce.next(n ? ki(this._uuid) : xi), this._hovered.set(n)
            }, this._handleMouseEnterForAppearanceHover = () => {
                this._hovered.set(!0)
            }, this._handleClickForAppearanceClick = (e, t) => {
                t && !e.isTrusted || this._hovered.modify((e => !e))
            }, this._handleMouseEnterForAppearanceClick = e => {
                jm(e.target, Nv.list) && (kv._hoveredForce.next(ki(this._uuid)), this._hovered.set(!0))
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
                    return rh(e)
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
                    return rh(e)
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
                    const o = this._viewport.get(),
                        i = this._dropdownEl.getBoundingClientRect();
                    this._listPosState.set(Object.assign(Object.assign({}, this._getHAlign(n ? o.right < i.right ? "right" : "left" : e)), this._getVAlign(r ? o.bottom < i.bottom ? "top" : "bottom" : t)))
                }
            }))
        }
        componentDidMount() {
            var e, t;
            this._subs.push(this.hovered.pipe(bt((e => {
                this.props.onVisibilityChange && this.props.onVisibilityChange(e)
            })), (e = ji(Ii(this.props.customPosition), Ri((() => bc(xi)), (({
                top: e,
                left: t
            }) => vn(kp(e), kp(t)).pipe(ha(ki))))), t ? If((function() {
                return e
            }), t) : If((function() {
                return e
            })))).subscribe(Ri((() => this.calcDropdownPosition()), (([e, t]) => this._listPosState.set({
                top: e,
                left: t
            })))), this.context.pipe(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.length;
                if (0 === n) throw new Error("list of properties cannot be empty.");
                return function(t) {
                    return ha(_h(e, n))(t)
                }
            }("rect")).subscribe(Np(this._viewport))), this.props.forceHide && this._subs.push(this._hidden.pipe(If(function(e) {
                return function(e, t) {
                    return function(n) {
                        return n ? e : t
                    }
                }(ea, e)
            }(this.props.forceHide.pipe(Wf())))).subscribe((() => this._hidden.set(!0))))
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
                    start: Nv.transparent,
                    end: ""
                }
            } : {
                prev: {
                    start: "",
                    end: Nv.transparent
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
            return Ba.createElement(Vm.Context.Consumer, null, (n => Ba.createElement(Ep.Context.Consumer, null, (r => Ba.createElement(Ep.Context.Provider, {
                value: Ep.withValue(r, {
                    hovered: this._hovered
                })
            }, Ba.createElement("div", Object.assign({}, sl(Nv.wrapper, t.dropdownContainer), this._behaviour(n.has(Vm.Flag.onlyTrustedEvents))), e, Ba.createElement(xv, {
                state: this.hovered,
                stateToClassMapper: this.mapStateToClass
            }, (e => e.state ? Ba.createElement(Iv, Object.assign({
                key: "list",
                name: this.props.name,
                onTransitionEnd: "prev" === e.type ? () => this._hidden.set(!0) : vp
            }, sl(t.dropdownList, e.view, this._hidden.view((e => e ? Nv.hidden : ""))), {
                mount: e => this._dropdownEl = e,
                style: this._listPosState
            }), this.props.children) : null))))))))
        }
    }
    kv.defaultProps = {
        align: "auto",
        vAlign: "auto",
        showDelay: 500,
        closeDelay: 500,
        appearanceBehavior: "mouseHover"
    }, kv.Delimiter = () => Ba.createElement("div", {
        className: Nv.delimiter
    }), kv._hoveredForce = new ht, kv.contextType = bv.Context;
    class Iv extends Ba.Component {
        constructor() {
            super(...arguments), this._elementState = Ep.emptyWithName(`${void 0!==this.context.name?`${this.context.name}/`:""}dropdown-${this.props.name}`)
        }
        render() {
            return Ba.createElement(Ep.Context.Provider, {
                value: this._elementState
            }, Ba.createElement(ul.div, Object.assign({}, sl(this.props.className, Nv.list), {
                style: this.props.style,
                mount: this.props.mount,
                role: "dropdown-list",
                "data-name": "dropdown-" + this.props.name,
                onTransitionEnd: this.props.onTransitionEnd
            }), this.props.children))
        }
    }
    Iv.displayName = "DropdownList", Iv.contextType = Ep.Context;
    var Av = n(71527);
    const Pv = {
            american: Ba.createElement((() => Ba.createElement("div", {
                className: ud.american,
                role: "presentation"
            })), null),
            australian: Ba.createElement((() => Ba.createElement("div", {
                className: ud.australian,
                role: "presentation"
            })), null),
            british: Ba.createElement((() => Ba.createElement("div", {
                className: ud.british,
                role: "presentation"
            })), null),
            canadian: Ba.createElement((() => Ba.createElement("div", {
                className: ud.canadian,
                role: "presentation"
            })), null)
        },
        Rv = ["british", "american", "australian", "canadian"],
        Lv = e => {
            return Ba.createElement(Ba.Fragment, null, Pv[e.dialect], Ba.createElement("span", {
                "data-test-attr": `dialect_${e.dialect}`,
                className: Av.label
            }, (t = e.dialect).charAt(0).toUpperCase() + t.slice(1) + " English"));
            var t
        };
    class Dv extends Ba.Component {
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
            return Ba.createElement(kv, Object.assign({}, e, {
                showDelay: 0,
                closeDelay: 150,
                appearanceBehavior: "mouseClick",
                name: "dialect",
                label: Ba.createElement(gh.White, {
                    name: "dialect.box",
                    style: {
                        padding: "0"
                    }
                }, Ba.createElement("div", {
                    className: Av.selected
                }, Ba.createElement(Lv, {
                    dialect: this.props.dialect
                }), Ba.createElement(cd, null)))
            }), Rv.filter((e => e !== this.props.dialect)).map((e => Ba.createElement(gh.Flat, {
                name: e,
                onClick: () => this.props.onSetDialect(e),
                key: e
            }, Ba.createElement("div", {
                className: Av.option
            }, Ba.createElement(Lv, {
                dialect: e
            }))))))
        }
    }
    class Mv extends Ba.Component {
        constructor() {
            super(...arguments), this.setDialect = e => {
                const {
                    changeStrongDialect: t,
                    dialectWeak: n
                } = this.props;
                t(e);
                const r = e + "English";
                Xu.languageSettingUpdate(r, "user", n && e === n)
            }
        }
        render() {
            const e = this.props.dialectStrong || this.props.dialectWeak || "american";
            return Ba.createElement("div", Object.assign({}, sl(ad.line, this.props.disabled && ad.disabled)), Ba.createElement("div", null, "I write in"), Ba.createElement(Jf, {
                blocked: this.props.disabled
            }, Ba.createElement("div", {
                className: ad.dialectPicker
            }, Ba.createElement(Dv, {
                dialect: e,
                onSetDialect: this.setDialect,
                dropdownOnTop: !!this.props.dropdownOnTop
            }))))
        }
    }
    const Uv = ({
            toggleHotkeys: e,
            enabledHotkeys: t
        }) => {
            const n = (Ye() ? "Alt" : "Ctrl") + " + g";
            return Ba.createElement(Zf, {
                onChange: t => {
                    const n = t.target.checked;
                    e(n), Xu.hotkeyToggleClick(n ? "on" : "off")
                },
                checked: t,
                extraClassName: vl.hotkeys
            }, Ba.createElement("span", {
                className: vl.shortcut_title
            }, "Shortcut:"), " Open Popup editor ", Ba.createElement("br", null), Ba.createElement("span", {
                className: vl.shortcut
            }, n))
        },
        Fv = e => {
            var t;
            const n = "docs.google.com" === e.domain,
                r = n ? "Google Docs" : e.domain,
                o = n && (null === (t = e.experiments) || void 0 === t ? void 0 : t.anonUserGDocsSidebar),
                {
                    enabledInConfig: i,
                    siteSwitcherChecked: s,
                    favicon: a
                } = e,
                u = s.checked && i,
                c = i ? "Check for writing suggestions" : "Checking is not supported";
            return Ba.createElement(Zf, {
                grayOut: !i,
                onChange: e => s.update(e.target.checked),
                checked: u,
                extraClassName: vl.site_switcher,
                dataGrammarlyPart: "siteSwitcher",
                skipTrustedCheck: e.skipTrustedCheck
            }, Ba.createElement("div", {
                "data-test-attr": "siteControlsLabelText"
            }, c, Ba.createElement("br", null), " ", Ba.createElement("span", {
                className: vl.domain
            }, Ba.createElement("span", {
                className: vl.thin_text
            }, "on"), " ", a && Ba.createElement("span", {
                className: vl.favicon
            }, Ba.createElement("img", {
                width: "16px",
                height: "16px",
                src: a
            })), r, o && Ba.createElement("span", {
                className: _f.beta
            }))))
        };
    var jv = n(56542),
        Bv = n(23345);
    const Gv = Ba.createContext({}),
        Hv = e => {
            const t = Ba.useContext(Gv),
                {
                    registrationDate: n
                } = e.user,
                r = function(e) {
                    if (!e) return;
                    const t = new Date(e);
                    return "Invalid Date" !== t.toString() ? ge[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear() : void 0
                }(n);
            return Ba.createElement("div", {
                className: Bv.line
            }, Ba.createElement("div", {
                className: Bv.content
            }, r && Ba.createElement("div", {
                "data-test-attr": "checked_since"
            }, "Grammarly has been correcting your text since ", r, "."), Ba.createElement("div", {
                className: Bv.upgrade,
                onClick: () => {
                    e.openSubscriptionDialog({
                        utmSource: "upHook",
                        utmCampaign: "extensionSettingsToolbar"
                    }), Xu.getPremiumButtonClick("settingsToolbar"), ja().userUpgradeClick("settingsToolbar")
                },
                style: {
                    fontSize: t.ctaFontSize
                }
            }, "Go Premium to Enable Advanced Fixes")))
        },
        zv = e => Ba.createElement(Zf, {
            onChange: t => {
                e.toggle(t.target.checked)
            },
            checked: e.enabled,
            extraClassName: vl.def_switcher
        }, "Correct spelling automatically"),
        Wv = e => Ba.createElement(Zf, {
            checked: e.enabled,
            extraClassName: vl.def_switcher,
            onChange: t => {
                e.toggle(t.target.checked)
            },
            dataGrammarlyPart: "disableDesktopIntegrationToggle"
        }, Ba.createElement("div", {
            className: vl.llamaTitle
        }, "Check text with browser extension"), Ba.createElement("div", {
            className: vl.llamaDescription
        }, "Grammarly's browser extension was deactivated since you're using Grammarly's Desktop integration.")),
        $v = e => Ba.createElement(Zf, {
            onChange: t => {
                e.toggle(t.target.checked)
            },
            beta: !0,
            checked: e.enabled,
            extraClassName: vl.def_switcher
        }, "Show phrasal predictions"),
        Vv = e => {
            var t;
            const {
                actions: n,
                activeTab: r,
                config: o,
                settings: i,
                user: s,
                siteCategory: a,
                openSubscriptionDialog: u,
                openGBLanding: c,
                showGBUpHook: l,
                placement: f,
                showAutocorrectToggle: d,
                dynamicConfig: p,
                enableRenderingHack: h = !1
            } = e;
            h && Ba.useEffect((() => {
                qe() && (self.screenLeft < 0 || self.screenTop < 0 || self.screenLeft > self.screen.width || self.screenTop > self.screen.height) && chrome.runtime.getPlatformInfo((e => {
                    if ("mac" === e.os) {
                        const e = new CSSStyleSheet;
                        e.insertRule("\n            @keyframes redraw {\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: .99;\n              }\n            }\n          "), e.insertRule("\n            html {\n              animation: redraw 1s linear infinite;\n            }\n          "), document.adoptedStyleSheets = [...document.adoptedStyleSheets, e]
                    }
                }))
            }), []);
            const {
                premium: g,
                experiments: m,
                anonymous: v
            } = s, b = l && g && !id.doesUserBelongToInstitution(s), y = g || v, _ = m && m.hotkeysExperiment, E = e.siteSwitcherChecked || {
                checked: !!i.enabled,
                update: t => {
                    const {
                        siteCategory: r
                    } = e;
                    n.toggleSite(t, o.domain), Xu.checkingToggleClick("toolbar", r, t ? "on" : "off"), ja().toggleExtension(t, "toolbar")
                }
            }, S = !1;
            return Ba.createElement("div", {
                className: jv.settingsContent
            }, Ba.createElement("div", {
                className: jv.heading
            }, Ba.createElement("div", null, "Quick Settings"), Ba.createElement(lf, {
                kind: "link",
                onClick: () => {
                    e.openUrl(Je().allSettings), Xu.allSettingsButtonClick(f)
                }
            }, Ba.createElement("div", {
                className: jv.allSettings
            }, Ba.createElement("span", null, "All Settings"), Ba.createElement(yf, null)))), bf.showSettingPopupToggle(i, p, m, null == r ? void 0 : r.url) && Ba.createElement(rd, {
                heading: "DESKTOP INTEGRATION SETTING",
                enabled: S
            }, Ba.createElement(Wv, {
                toggle: e => {
                    n.setLlamaIntegrationDisable(e), Xu.desktopIntegrationToggleClick(e ? "on" : "off")
                },
                enabled: i.isLlamaIntegrationDisable || !1
            }), Ba.createElement("div", {
                className: jv.separator
            })), Ba.createElement(rd, {
                heading: "SITE SETTINGS",
                enabled: S
            }, Ba.createElement(Fv, {
                domain: o.domain,
                enabledInConfig: o.enabled,
                siteSwitcherChecked: E,
                favicon: null == r ? void 0 : r.favIconUrl,
                siteCategory: a,
                experiments: m
            }), Ba.createElement("div", {
                className: jv.separator
            })), Ba.createElement(rd, {
                heading: "FEATURES (ALL SITES)",
                enabled: S
            }, Ba.createElement(sd, {
                disabled: v,
                enabledDefs: i.enabledDefs,
                toggleDefs: n.toggleDefs
            }), _ && Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
                className: jv.separator
            }), Ba.createElement(Uv, {
                enabledHotkeys: i.enabledHotkeys || !1,
                toggleHotkeys: n.toggleHotkeys
            })), d && Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
                className: jv.separator
            }), Ba.createElement(zv, {
                enabled: i.autocorrectEnabled || !1,
                toggle: e => {
                    n.toggleAutocorrect(e), Xu.autocorrectToggleClick(e ? "on" : "off")
                }
            })), (null === (t = s.experiments) || void 0 === t ? void 0 : t.autocompleteEnabled) && Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
                className: jv.separator
            }), Ba.createElement($v, {
                enabled: i.autocompleteEnabled || !1,
                toggle: e => {
                    n.toggleAutocomplete(e), Xu.autocompleteFeatureToggleClick("popup", e ? "on" : "off")
                }
            }))), Ba.createElement(rd, {
                heading: "CUSTOMIZE GRAMMARLY",
                enabled: S
            }, Ba.createElement(Mv, {
                changeStrongDialect: n.changeStrongDialect,
                dialectStrong: i.dialectStrong,
                dialectWeak: i.dialectWeak,
                dropdownOnTop: y,
                disabled: v
            }), S), !y && Ba.createElement(Hv, {
                user: s,
                openSubscriptionDialog: u
            }), b && Ba.createElement(td, {
                openGBLanding: c,
                showTitle: "popup" === f
            }))
        };
    class qv extends Ba.Component {
        constructor() {
            super(...arguments), this.handleClick = () => {
                jb().bgRpc.api.logout(), this.props.close()
            }
        }
        render() {
            return Ba.createElement("div", {
                className: vl.userPanel
            }, Ba.createElement("span", {
                className: vl.email
            }, this.props.email), "·", Ba.createElement("span", {
                className: vl.link
            }, Ba.createElement(Ga, {
                clickHandler: this.handleClick
            }, "Log out")))
        }
    }
    class Yv {
        static isEnabled() {
            return !1
        }
    }
    var Kv;
    ! function(e) {
        e.gdocs = "gdocs", e.other = "other"
    }(Kv || (Kv = {}));
    class Qv extends Ba.Component {
        constructor(e) {
            super(e), this._toggleSiteWrap = (e, t, n) => {
                const {
                    actions: r,
                    reloadTab: o,
                    user: i,
                    activeTab: s,
                    gdocsIsActiveTab: a
                } = this.props;
                r.toggleSite(e, t, tf(i), n), a && o(s && s.id)
            }, this.state = {
                mounted: !1
            }
        }
        get footer() {
            const {
                user: e,
                openWebEditor: t
            } = this.props;
            return e.anonymous ? this.shouldShowGDocsOptIn ? null : Ba.createElement(rf, null) : Ba.createElement( of , {
                openWebEditor: t
            })
        }
        get shouldShowGDocsOptIn() {
            const {
                gdocsIsActiveTab: e,
                settings: t
            } = this.props;
            return !!e && (this.hadPreviousGDocsVersion ? !t.enabled : !t.gdocsOptedIn || !t.enabled)
        }
        get hadPreviousGDocsVersion() {
            return !!this.props.settings.gdocsWasInitiallyDisabled
        }
        get settingsContent() {
            var e;
            const {
                user: t,
                settings: n,
                config: r,
                activeTab: o,
                actions: i,
                openSubscriptionDialog: s,
                openGBLanding: a,
                reloadTab: u,
                isChrome: c,
                dynamicConfig: l
            } = this.props, {
                experiments: f
            } = t, d = () => {
                i.toggleSite(!0, r.domain, tf(t)), i.gdocsOptedIn(), Xu.checkingToggleClick("toolbar", Kv.gdocs, "on"), u(o && o.id)
            }, {
                anonUserGDocsSidebar: p
            } = null != f ? f : {};
            return this.shouldShowGDocsOptIn ? p ? [Ba.createElement(El, {
                key: "opt-in",
                onClick: d
            })] : [Ba.createElement(_l, {
                key: "opt-in",
                onClick: d
            })] : [Ba.createElement(mf, {
                key: "news",
                showNews: i.showNews
            }), Ba.createElement(Vv, {
                key: "content",
                actions: {
                    ...i,
                    toggleSite: this._toggleSiteWrap
                },
                activeTab: o,
                config: r,
                settings: n,
                user: t,
                dynamicConfig: l,
                siteCategory: Kv.other,
                openSubscriptionDialog: s,
                openGBLanding: a,
                openUrl: this.props.openUrl,
                showGBUpHook: c,
                placement: "popup",
                showAutocorrectToggle: c || !!(null === (e = t.experiments) || void 0 === e ? void 0 : e.autoCompleteCorrectAllBrowsers),
                enableRenderingHack: !0
            })]
        }
        get styleByUserType() {
            const {
                user: e
            } = this.props;
            return id.isBusinessAdmin(e) ? ue(vl.upgraded, vl.business) : id.doesUserBelongToEDUInstitution(e) ? ue(vl.upgraded, vl.edu) : e.premium ? vl.upgraded : vl.free
        }
        render() {
            const {
                user: e,
                settings: t,
                config: n,
                activeTab: r,
                close: o,
                isSafari: i,
                actions: s
            } = this.props;
            if (Yv.isEnabled() && !t.enabledClickToRun) return Ba.createElement(df, {
                actions: {
                    ...s,
                    toggleSite: this._toggleSiteWrap
                },
                domain: n.domain
            }); {
                const s = ue(vl.gr_popup_settings, this.styleByUserType, {
                        [vl.not_supported]: !n.enabled,
                        [vl.no_fixes]: !e.fixed_errors || isNaN(e.fixed_errors),
                        [vl.show_news]: t.showNews && n.enabled,
                        [vl.has_favicon]: r && !!r.favIconUrl
                    }),
                    a = i;
                return Ba.createElement("div", {
                    className: s
                }, Ba.createElement("div", {
                    className: vl.content
                }, Ba.createElement(Vu, {
                    hideDelimiter: a
                }), a && Ba.createElement(qv, {
                    email: e.email,
                    close: o
                }), Ba.createElement("div", {
                    className: this.state.mounted ? vl.settingsContent : void 0
                }, this.settingsContent), this.footer))
            }
        }
        componentDidMount() {
            this.setState({
                mounted: !0
            })
        }
    }
    var Xv = n(98987);
    let Jv;

    function Zv() {
        return null != Jv ? Jv : Jv = {
            permissions: ["cookies"],
            origins: [et()]
        }
    }

    function eb({
        dynamicConfig: e,
        checkPermissions: t = (() => async function(e) {
            var t;
            if (!0 !== (null == e ? void 0 : e.requireAuthCookieAccess)) return !0;
            const n = null === (t = jb().browserApi.permissions) || void 0 === t ? void 0 : t.contains;
            if (!n) return !0;
            return await n(Zv())
        }(e)),
        requestPermissions: n = (() => async function(e) {
            var t;
            if (!0 !== (null == e ? void 0 : e.requireAuthCookieAccess)) return !0;
            const n = null === (t = jb().browserApi.permissions) || void 0 === t ? void 0 : t.request;
            if (!n) return !0;
            return await n(Zv())
        }(e))
    } = {}) {
        const {
            bindSignIn: r,
            ...o
        } = function({
            checkPermissions: e,
            requestPermissions: t
        }) {
            const [n, r] = (0, Ba.useState)(), o = Boolean(n), [i, s] = (0, Ba.useState)(!1);
            return {
                needPermissions: o,
                requestingPermissions: i,
                bindSignIn: t => () => {
                    o || i || e().then((e => {
                        e ? (r(void 0), t()) : r((e => t))
                    }))
                },
                onRequestPermissions: () => {
                    i || (s(!0), t().then((e => {
                        s(!1), e && (r(void 0), null == n || n())
                    })))
                }
            }
        }({
            checkPermissions: t,
            requestPermissions: n
        });
        return {
            ...o,
            bindSignIn: r,
            onSignIn: r((() => {
                const e = jb().browserApi;
                e.beginOAuth ? e.beginOAuth() : e.openUrl(Hs())
            })),
            onSignUp: r((() => {
                const e = jb().browserApi;
                e.beginOAuth ? e.beginOAuth() : e.openUrl(Gs("signupHook", "toolbarMenu"))
            }))
        }
    }
    const tb = ({
            onSignIn: e,
            onSignUp: t
        }) => Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
            className: Xv.buttonWrapper
        }, Ba.createElement("span", {
            onClick: t,
            "data-fire": "login-attempt, settings_toolbar_sign_up",
            "data-test-attr": "signUpLink",
            className: Xv.auth_button,
            role: "button"
        }, "Sign up")), Ba.createElement("div", {
            className: Xv.footer
        }, Ba.createElement("div", null, "Already have an account?", " ", Ba.createElement("span", {
            onClick: e,
            "data-fire": "login-attempt, settings_toolbar_sign_in",
            "data-test-attr": "signInLink",
            className: Xv.signin_link
        }, "Log in")))),
        nb = ({
            onSignIn: e,
            onSignUp: t
        }) => Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
            className: Xv.buttonWrapper
        }, Ba.createElement("span", {
            onClick: e,
            "data-fire": "login-attempt, settings_toolbar_sign_in",
            "data-test-attr": "signInLink",
            className: Xv.auth_button,
            role: "button"
        }, "Log in")), Ba.createElement("div", {
            className: Xv.footer
        }, Ba.createElement("div", null, "Don't have an account?", " ", Ba.createElement("span", {
            onClick: t,
            "data-fire": "login-attempt, settings_toolbar_sign_up",
            "data-test-attr": "signUpLink",
            className: Xv.signin_link
        }, "Sign up")))),
        rb = ({
            onRequestPermissions: e,
            requestingPermissions: t
        }) => Ba.createElement(Ba.Fragment, null, Ba.createElement("div", {
            className: Xv.buttonWrapper
        }, Ba.createElement("span", {
            onClick: e,
            "data-fire": "login-attempt, settings_toolbar_sign_in",
            "data-test-attr": "signInLink",
            className: Xv.auth_button,
            role: "button"
        }, "Allow ", Ba.createElement("span", {
            className: Xv.secondary_text
        }, "and continue to sign in"))), Ba.createElement("div", {
            className: Xv.footer
        }, t ? Ba.createElement(Ba.Fragment, null, "We are requesting your browser to grant permission.") : Ba.createElement(Ba.Fragment, null, "Next, your browser will ask you to grant permission."))),
        ob = Iu((({
            dynamicConfig: e
        }) => ({
            dynamicConfig: e
        })))((({
            dynamicConfig: e,
            ...t
        }) => {
            const {
                bindSignIn: n,
                ...r
            } = eb({
                dynamicConfig: e
            });
            return Ba.createElement(ib, Object.assign({}, t, r))
        })),
        ib = e => {
            const {
                loginButtonFirst: t,
                onSignIn: n,
                onSignUp: r,
                needPermissions: o,
                requestingPermissions: i,
                onRequestPermissions: s
            } = e, a = o ? null : Ba.createElement("div", {
                className: Xv.banner
            }, "Grammarly is active, but key features are missing"), u = o ? Ba.createElement("div", {
                className: Xv.descr
            }, Ba.createElement("div", {
                className: Xv.descr_title
            }, function() {
                const e = He().bundleInfo.browser;
                return e.substr(0, 1).toLocaleUpperCase() + e.slice(1)
            }(), " requires your permission to let Grammarly sign you in"), Ba.createElement("div", {
                className: Xv.descr_text
            }, "Please follow your browser′s prompts to allow Grammarly to read grammarly.com site data.")) : Ba.createElement("div", {
                className: Xv.descr
            }, Ba.createElement("div", {
                className: Xv.descr_title
            }, "Sign up now to unlock the following:"), Ba.createElement("ul", null, Ba.createElement("li", null, "Personal dictionary "), Ba.createElement("li", null, "Save and access your documents"), Ba.createElement("li", null, "Get weekly writing statistics and tips"))), c = o ? Ba.createElement(rb, {
                requestingPermissions: i,
                onRequestPermissions: s
            }) : t ? Ba.createElement(nb, {
                onSignIn: n,
                onSignUp: r
            }) : Ba.createElement(tb, {
                onSignIn: n,
                onSignUp: r
            }), l = o ? Xv.permission : Xv.signin;
            return Ba.createElement("div", {
                className: l
            }, Ba.createElement(Vu, {
                hideDelimiter: !0
            }), Ba.createElement("div", {
                className: Xv.content
            }, a, u, c))
        },
        sb = {
            "drive.google.com": {
                title: "Google Drive Not Supported",
                getMessage: () => `We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Je().app}">Grammarly Editor</a>.`
            },
            "docs.google.com": {
                title: "Grammarly Isn't Available for this Google Product",
                getMessage: () => `We hope to support this Google product<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Je().app}">Grammarly Editor</a>.`
            },
            "chrome.google.com": {
                title: "Web Store Not Supported"
            }
        },
        ab = ks(30),
        ub = (ks(5), ab);
    ks(10), ks(60), cb = 3, Ns(12), Ns(1), Ns(365);
    var cb;
    var lb = n(26381);
    const fb = (e = "") => ue(lb.line, lb.unsupported_item, e),
        db = ({
            domain: e,
            customTitle: t
        }) => {
            const n = t ? Ba.createElement("span", null, " ", t) : Ba.createElement("span", null, Ba.createElement("span", {
                className: lb.domain
            }, e), " is not supported");
            return Ba.createElement("div", {
                className: fb()
            }, Ba.createElement("div", {
                className: lb.warning
            }), Ba.createElement("span", {
                className: lb.unsupported_title
            }, n), Ba.createElement("div", null, "For technical reasons, we currently do not check your text on this website."))
        },
        pb = ({
            domain: e
        }) => {
            const t = Ba.createElement("span", null, "Checking Down on ", Ba.createElement("span", {
                className: lb.domain
            }, e));
            return Ba.createElement("div", {
                className: fb()
            }, Ba.createElement("div", {
                className: lb.warning
            }), Ba.createElement("span", {
                className: lb.unsupported_title
            }, t), Ba.createElement("div", null, "There appears to be a temporary glitch affecting Grammarly’s performance on ", e, ". Functionality should return soon."))
        },
        hb = () => Ba.createElement("div", {
            className: fb(lb.unsupported_grammarly)
        }, Ba.createElement("div", {
            className: lb.ok
        }), Ba.createElement("span", {
            className: lb.unsupported_title
        }, "You Can’t Improve on Perfection"), Ba.createElement("br", null), Ba.createElement("span", {
            className: lb.unsupported_grammarly_text
        }, "Naturally, Grammarly’s browser extension is disabled while you use the Grammarly Editor."));

    function gb({
        domain: e,
        temporary: t,
        grammarlyEditor: n,
        unsupportedMessage: r
    }) {
        const o = sb[e];
        let i;
        return i = n ? "grammarly_editor" : o && o.getMessage || r && r.getMessage ? "custom_message" : t ? "temporary" : "default", i
    }
    class mb extends Ba.PureComponent {
        componentDidMount() {
            const {
                config: {
                    domain: e,
                    temporary: t,
                    grammarlyEditor: n
                }
            } = this.props, r = gb({
                domain: e,
                grammarlyEditor: n,
                temporary: t
            });
            ja().settingsUsupportedShow(r)
        }
        render() {
            const {
                config: {
                    domain: e,
                    temporary: t,
                    grammarlyEditor: n,
                    unsupportedMessage: r
                },
                activeTab: {
                    favIconUrl: o
                }
            } = this.props, i = lb.gr_popup_unsupported, s = function({
                domain: e,
                favIconUrl: t
            }, n, r) {
                let o = sb[e];
                switch (r && (o = r), n) {
                    case "grammarly_editor":
                        return Ba.createElement(hb, null);
                    case "temporary":
                        return Ba.createElement(pb, {
                            favicon: t,
                            domain: e
                        });
                    case "custom_message":
                    case "default":
                    default:
                        return Ba.createElement(db, {
                            favicon: t,
                            domain: e,
                            customTitle: o && o.title
                        })
                }
            }({
                domain: e,
                favIconUrl: o
            }, gb({
                domain: e,
                grammarlyEditor: n,
                temporary: t,
                unsupportedMessage: r
            }), r);
            return Ba.createElement("div", {
                className: i
            }, Ba.createElement("div", {
                className: ue(lb.content, lb.unsupported_site)
            }, Ba.createElement(Vu, null), s, Ba.createElement( of , {
                openWebEditor: this.props.openWebEditor
            })))
        }
    }
    class vb extends Ba.Component {
        constructor() {
            super(...arguments), this._sub = []
        }
        componentDidUpdate() {
            if (this.props.resize(), this.element && $e()) {
                const e = Rn(),
                    t = this.element.clientHeight,
                    n = this.element.clientWidth;
                e.setPopupSize && e.setPopupSize(n, t)
            }
        }
        componentDidMount() {
            this.props.resize({
                force: !0
            }), this._sub.push(se.call(document, "popup-open", (e => this.props.resize())));
            const {
                user: e
            } = this.props;
            this._isGdocsPossible() && ((e, t) => {
                var n;
                return !(null === (n = e.experiments) || void 0 === n ? void 0 : n.anonUserGDocsSidebar) && e.anonymous && (!t.hideGdocsSigninPopupTime || t.hideGdocsSigninPopupTime + 6048e5 < Date.now())
            })(e, this.props.settings) && Kn(Ju.hide, {
                _tag: Ju.hide
            }), this._sub.push(se.call((0, $a.findDOMNode)(this), "click", (e => {
                const t = e.target,
                    n = "A" === t.nodeName ? t : t.parentNode && "A" === t.parentNode.nodeName ? t.parentNode : null;
                n && (e.preventDefault(), this.processHrefClick(n))
            })))
        }
        componentWillUnmount() {
            this._sub.forEach((e => e.off()))
        }
        _gdocsIsActiveTab() {
            const e = this.props.activeTab && "url" in this.props.activeTab ? this.props.activeTab.url : void 0;
            return !!e && zu.test(e)
        }
        _isGdocsPossible() {
            return this._gdocsIsActiveTab() && (qe() || ze() || $e())
        }
        _isDataControlActive() {
            const e = this.props;
            return e.connection && "active" === e.connection.dataControl
        }
        processHrefClick({
            href: e,
            dataset: t
        }) {
            const n = Rn(),
                {
                    fire: r
                } = t;
            if (r) {
                const [e, t] = r.split(", ");
                if ("login-attempt" === e && ("settings_toolbar_sign_up" === t && Xu.signUpButtonClick(), "settings_toolbar_sign_in" === t && Xu.signInButtonClick(), n.beginOAuth)) return n.beginOAuth(), void bb()
            }
            e && Eb(e)
        }
        get shouldShowGDocsToAnonymousUsers() {
            const {
                user: {
                    experiments: e
                }
            } = this.props;
            return this._gdocsIsActiveTab() && this._isGdocsPossible() && (null == e ? void 0 : e.anonUserGDocsSidebar)
        }
        get settingsPopup() {
            return Ba.createElement(Qv, Object.assign({}, this.props, {
                gdocsIsActiveTab: this._gdocsIsActiveTab(),
                isSafari: $e(),
                isChrome: We()
            }))
        }
        render() {
            const e = this.props,
                {
                    user: t,
                    config: n,
                    settings: r
                } = e,
                {
                    anonymous: o
                } = t,
                {
                    enabled: i,
                    servicePage: s
                } = n,
                a = this._isDataControlActive() ? Ba.createElement("div", {
                    className: ue(Ha.newDataControl, Ha.settings)
                }, Ba.createElement(za, {
                    openAcceptPage: wb
                })) : e.user.edc && id.isEdcBlocked(e.user) ? Ba.createElement(Wa, {
                    institutionName: e.user.edc.institutionName,
                    ssoUrl: e.user.edc.ssoUrl
                }) : this.shouldShowGDocsToAnonymousUsers ? this.settingsPopup : this._gdocsIsActiveTab() ? this._isGdocsPossible() ? o ? Ba.createElement(ec, {
                    openSigninPage: e => {
                        const t = Rn();
                        t.beginOAuth ? t.beginOAuth() : self.open(e)
                    },
                    onClick: () => e.actions.clickGdocsAuthentication && e.actions.clickGdocsAuthentication()
                }) : this.settingsPopup : Ba.createElement(mb, Object.assign({}, e)) : !o || Yv.isEnabled() && !r.enabledClickToRun ? i || s ? this.settingsPopup : Ba.createElement(mb, Object.assign({}, e)) : Ba.createElement(ob, {
                    loginButtonFirst: !0 === r.showLoginReminder
                }),
                u = this.props.user.edc;
            return Ba.createElement("div", {
                ref: e => this.element = e,
                "data-grammarly-part": "settingsPopup"
            }, a, u && Ba.createElement(bl, Object.assign({}, u)))
        }
    }

    function bb() {
        const e = Rn();
        e.closePopup ? e.closePopup() : ce("close-popup")
    }

    function yb({
        force: e
    } = {}) {
        ce("update-window-size", {
            force: e
        })
    }

    function _b(e) {
        Kn("reload-tab", {}), bb()
    }

    function Eb(e) {
        Rn().openUrl(e), bb()
    }

    function Sb(e) {
        Eb(e ? Je().newDoc : Je().app)
    }

    function wb() {
        jb().bgRpc.api.openDataControl()
    }

    function Cb(e) {
        Rn().openPopupSubscriptionDialog(e), bb()
    }

    function Tb(e) {
        var t, n;
        Eb((t = "gbExtensionSettingsToolbar", Ms(e, [Rs("app_type", "extension"), Rs("browser", Qe()), ...n ? [Rs("domainCategory", n)] : [], ...Fs({
            medium: "internal",
            source: "upHook",
            campaign: t
        })])))
    }
    const Ob = yn.create("universal.popup");
    async function Nb() {
        let e = !1;
        ie(document.documentElement, "gr-" + Qe()), Ye() && ie(document.documentElement, "windows"), $e() && ie(document.body, "gr-safari");
        const {
            store: t,
            actions: n,
            subscribe: r
        } = $i({
            connection: {}
        }, {});
        r((r => {
            var o;
            e || (e = !0, function(e, t) {
                Ob.warn("RENDER FROM", {
                        store: e,
                        actions: t
                    }),
                    function(e, t) {
                        const n = Iu((e => e), ((e, n) => ({
                                actions: t
                            })))(vb),
                            r = new Gb;
                        (0, $a.render)(Ba.createElement(Ja, {
                            store: e
                        }, Ba.createElement(Vm.Context.Provider, {
                            value: r
                        }, Ba.createElement(rc, null, Ba.createElement(n, {
                            close: bb,
                            resize: yb,
                            openUrl: Eb,
                            openWebEditor: Sb,
                            openSubscriptionDialog: Cb,
                            openGBLanding: Tb,
                            reloadTab: _b
                        }), Ba.createElement(ml, null)))), document.querySelector(".popup"))
                    }(e, t), $e() ? document.addEventListener("popup-open", (() => {
                        xb(e.getState(), t), Qn("tab-connected", {
                            tab: "popup"
                        })
                    })) : xb(e.getState(), t)
            }(t, n), (null === (o = r.user.experiments) || void 0 === o ? void 0 : o.extensionDebugReport) && jb().enableHistoryLoggerInProd())
        })), Qn("tab-connected", {
            tab: "popup"
        }), me((() => !e && ja().settingsPopupTimeout()), 2e3)
    }

    function xb(e, t) {
        const {
            config: n,
            user: r,
            settings: o
        } = e, {
            enabled: i
        } = n, s = !1 === o.enabledClickToRun ? "click_to_run" : i ? "supported" : "unsupported";
        Xu.toolbarButtonClick("browser", s), r.anonymous || i && o.showNews && t.seenNews()
    }
    const kb = "bridge",
        Ib = "message:to-priv",
        Ab = "message:to-non-priv";
    var Pb;
    ! function(e) {
        e[e.success = 0] = "success", e[e.successWithEmpty = 1] = "successWithEmpty", e[e.alreadyMigrated = 2] = "alreadyMigrated"
    }(Pb || (Pb = {}));
    const Rb = yn.create("extension-api.message"),
        Lb = () => {};
    class Db {
        constructor() {
            this._listeners = {}, this._queue = {}, this.fire = (e, t, n = Lb, r) => {
                const o = this._listeners[e] || [];
                o.length ? o.forEach((e => e(t, n, r))) : (this._queue[e] = this._queue[e] || [], this._queue[e].push({
                    content: t,
                    callback: n,
                    sender: r
                }))
            }, this.unlisten = (e, t) => {
                const n = this._listeners[e] || [],
                    r = n.indexOf(t); - 1 !== r && (1 === n.length ? delete this._listeners[e] : n.splice(r, 1))
            }, this.listenOnce = (e, t) => {
                const n = (r, o, i) => {
                    this.unlisten(e, n), t && t(r, o, i)
                };
                this.listen(e, n)
            }, this.listen = (e, t) => {
                this._listeners[e] = this._listeners[e] || [], -1 === this._listeners[e].indexOf(t) && this._listeners[e].push(t);
                const n = this._queue[e] || [];
                if (n.length) {
                    for (const e of n) try {
                        t(e.content, e.callback, e.sender)
                    } catch (e) {
                        Rb.error("exception during proccesing buffered messages", e)
                    }
                    delete this._queue[e]
                }
            }
        }
    }
    const Mb = yn.create("Messaging.extension-api.content");
    class Ub {
        constructor(e) {
            this.kind = "content-script-message-api", this._callbacks = {}, this._messageHelper = new Db, this._disconnected = !1, this.broadcastBackground = (...e) => this._emit(this.backgroundPort, "bg").apply(null, e), this.broadcast = (...e) => this._emit(this.broadcastPort, "tabs").apply(null, e), this._onPortMessage = e => {
                Mb.trace("portMessage", e)
            }, this._emit = (e, t) => (n, r, o, i) => {
                const s = pe();
                o && "function" == typeof o && (this._callbacks[s] = o);
                try {
                    if (!e) throw new Error("lost connection to " + t + " port");
                    e.postMessage({
                        type: n,
                        callid: s,
                        content: r
                    })
                } catch (e) {
                    if (!i) throw e;
                    i(e)
                }
            }, this._onBgPortMessage = ({
                callid: e,
                content: t,
                type: n
            }) => {
                this._callbacks[e] ? (this._callbacks[e](t), delete this._callbacks[e]) : this._messageHelper.fire(n, t, (t => {
                    if (!this.backgroundPort) throw new Error("fail reply to bg page - connection lost");
                    this.backgroundPort.postMessage({
                        content: t,
                        callid: e
                    })
                }))
            }, this.port = e(kb), this.port.onMessage(this._onPortMessage), this.port.onDisconnect((() => {
                this.port = null, this._onDisconnect()
            })), this.backgroundPort = e(Ib), this.backgroundPort.onMessage(this._onBgPortMessage), this.backgroundPort.onDisconnect((() => {
                this.backgroundPort = null, this._onDisconnect()
            })), this.broadcastPort = e(Ab), this.broadcastPort.onDisconnect((() => {
                this.broadcastPort = null, this._onDisconnect()
            }))
        }
        onBackgroundPortReconnect(e) {
            this.backgroundPort && this.backgroundPort.onReconnect && this.backgroundPort.onReconnect(e)
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
        toFocused(e, t) {
            return g.create((n => {
                if (!this.port) throw new Error("lost connection to bg page");
                this.port.postMessage({
                    method: "message.toFocussed",
                    params: {
                        type: e,
                        content: t
                    }
                }), n()
            }))
        }
        _onDisconnect() {
            this._disconnected || (this._disconnected = !0, Mb.trace("Content script messaging went disconnected."), this._messageHelper.fire("contentScript-disconnected", null))
        }
    }
    class Fb extends In {
        constructor(t) {
            var n;
            super({
                browser: t.browser,
                context: "popup",
                historyLoggerExtraArgs: {
                    downloadFileName: "grammarly-popup-logs.tsv",
                    maxEventsToStore: 100,
                    onDownload: () => {
                        var e;
                        null === (e = this.bgRpc) || void 0 === e || e.api.downloadBackgroundPageLogs()
                    }
                }
            }), self.addEventListener("update-window-size-gr", (e => {
                const t = document.createElement("div");
                if (t.style.height = "1px", e.detail && e.detail.force) {
                    const e = setInterval((function() {
                        document.body.appendChild(t), setTimeout((() => {
                            t.parentNode && t.parentNode.removeChild(t)
                        }), 10)
                    }), 100);
                    setTimeout((() => clearInterval(e)), 405)
                }
            }), !1), self.addEventListener("close-popup-gr", (() => {
                self.close()
            }), !1), this.browserApi = t.browserApi, Hn(t.browserApi.message), n = t.browserApi, self.extensionPopupApi && Pn.warn("Popup Extension Api init called more than once"), self.extensionPopupApi = self.extensionPopupApi || n, this.bgRpc = new ee(e)
        }
        static getInstance() {
            if (void 0 === this._instance) throw new Error("Env not inited yet");
            return this._instance
        }
        static init(e) {
            if (void 0 !== this._instance) throw new Error("Env already inited");
            const t = new Fb(e);
            if (this._instance = t, In.initShared(t), !ne) throw new Error("Not a popup");
            Nb()
        }
    }

    function jb() {
        return Fb.getInstance()
    }
    var Bb;
    ! function(e) {
        e.Flag = Vm.Flag
    }(Bb || (Bb = {}));
    class Gb {
        constructor() {
            this._flags = new Set, this.actions = {
                openUrl: () => {
                    throw new Error("Not implemented")
                },
                openPopup: () => {
                    throw new Error("Not implemented")
                }
            }
        }
        has(e) {
            return this._flags.has(e)
        }
    }

    function Hb(e) {
        const t = e.reduce(((e, t) => {
            const n = e.get(t.category);
            return n ? n.count++ : e.set(t.category, {
                group: t.group,
                categoryHuman: t.categoryHuman,
                count: 1
            }), e
        }), new Map);
        return Array.from(t.values()).sort(((e, t) => t.count - e.count))
    }

    function zb(e) {
        const t = new Map;
        for (const {
                isFree: n,
                cardLayout: {
                    group: r
                }
            } of e) {
            t.has(r) || t.set(r, {
                lensName: r,
                free: 0,
                premium: 0
            });
            const e = t.get(r);
            e && (e[n ? "free" : "premium"] += 1)
        }
        return Array.from(t.values()).sort(((e, t) => t.premium - e.premium))
    }

    function Wb(e) {
        return btoa(JSON.stringify(e))
    }
    class $b extends class {
        constructor() {
            this._log = yn.create("extension-api.alarms.stub"), this._warning = "Method is not implemented"
        }
        create(e, t) {
            return this._log.warn(this._warning), {
                dispose: w
            }
        }
    } {
        create(e, t) {
            let n = null;
            const r = setTimeout((() => {
                t.period && (n = setInterval(e, t.period)), e()
            }), t.delay);
            return {
                dispose: () => {
                    clearTimeout(r), null !== n && clearInterval(n)
                }
            }
        }
    }

    function Vb(e, t) {
        chrome.runtime.lastError ? t(chrome.runtime.lastError) : e()
    }
    class qb {
        constructor() {
            this._log = yn.create("extension-api.managed-storage.validator")
        }
        validate(e, t) {
            switch (e) {
                case "GrammarlyEnrollmentToken":
                    return "string" == typeof t && t.length > 0 && /^[a-z0-9_-]+$/i.test(t);
                default:
                    return this._log.warn(`Unknown key: ${e}`), !1
            }
        }
    }
    class Yb {
        constructor() {
            this._log = yn.create("extension-api.managed-storage.chrome"), this._validator = new qb
        }
        get(e) {
            return new Promise(((t, n) => {
                chrome.storage.managed.get(e, (r => {
                    Vb((() => {
                        const n = r[e];
                        void 0 === n || this._validator.validate(e, n) ? t(n) : (this._log.warn(`Invalid value for "${e}": ${JSON.stringify(r[e])}`), t(void 0))
                    }), (t => {
                        this._log.error(`Could not get "${e}"`, t), n(t)
                    }))
                }))
            }))
        }
    }
    const Kb = yn.create("extension-api.message.bg"),
        Qb = "popup";

    function Xb(e) {
        if (!e) return !1;
        const {
            browser: t
        } = He().bundleInfo, n = "firefox" === t ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "chrome" === t || "edge" === t ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : _(t);
        return void 0 !== n && n.test(e)
    }
    class Jb {
        constructor(e, t, n) {
            this._getActiveTab = t, this._getAllTabs = n, this.kind = "background-message-api", this.topFrameId = "0", this._callbacks = {}, this._tabPorts = {
                popup: []
            }, this._messageHelper = new Db, this._sendMessageToPorts = (e, t) => {
                const n = this._tabPorts[e];
                n && n.forEach((e => e.postMessage(t)))
            }, this.toFocused = (e, t) => this._getActiveTab().then((({
                id: n,
                url: r
            } = {}) => {
                if (n) return Xb(r) ? Kb.warn(`toFocussed not allowed for popup when it open like regular tab ${e}`, t) : void this._sendMessageToPorts(n.toString(), {
                    type: e,
                    content: t,
                    callid: pe()
                })
            })), this.broadcast = (e, t) => {
                if (!t) return;
                const n = ({
                    id: n,
                    url: r
                }) => {
                    n && r && -1 === r.indexOf("chrome-extension:") && this._sendMessageToPorts(n.toString(), {
                        type: e,
                        callid: pe(),
                        content: t
                    })
                };
                this._getAllTabs().then((e => e.forEach(n))), this._tabPorts.popup && this._tabPorts.popup.length && this._getActiveTab().then((({
                    url: e
                } = {}) => {
                    n({
                        id: Qb,
                        url: e
                    })
                }))
            }, this._initPortListener = e => {
                if (e.name === kb) e.onMessage((e => {
                    "message.toFocussed" === e.method && this.toFocused(e.params && e.params.type, e.params && e.params.content)
                }));
                else if (e.name === Ab) e.onMessage((e => this.broadcast(e.type, e.content)));
                else if (e.name === Ib) {
                    const {
                        sender: t
                    } = e;
                    if (t) {
                        if (t.tab) {
                            const {
                                id: n,
                                url: r
                            } = t.tab;
                            if (n) {
                                let t = this._tabPorts[n];
                                void 0 === t && (t = this._tabPorts[n] = []), t.push(e)
                            }
                            r && 0 === r.indexOf("http") && this._messageHelper.fire("tab-connected", {
                                tab: n,
                                url: r
                            }), e.onDisconnect((() => {
                                if (!n) return;
                                const t = this._tabPorts[n];
                                t && t.splice(t.indexOf(e), 1)
                            }))
                        }
                        const n = t.url ? t.url : t.tab ? t.tab.url : "";
                        if (n && Xb(n)) {
                            const t = Qb;
                            this._tabPorts[t] = this._tabPorts[t] || [], this._tabPorts[t].push(e), e.onDisconnect((() => {
                                const n = this._tabPorts[t];
                                n.splice(n.indexOf(e), 1)
                            }))
                        }
                    }
                    e.onMessage((n => {
                        const r = ({
                            callid: n,
                            content: r,
                            type: o
                        }) => {
                            this._callbacks[n] && (this._callbacks[n](r), delete this._callbacks[n]);
                            this._messageHelper.fire(o, r, (t => e.postMessage({
                                content: t,
                                callid: n
                            })), t && t.tab ? {
                                tabId: String(t.tab.id),
                                frameId: void 0 === t.frameId ? void 0 : String(t.frameId)
                            } : -1)
                        };
                        "tab-connected" === n.type ? this._getActiveTab().then((({
                            url: e
                        } = {}) => {
                            n.content = {
                                tab: Qb,
                                url: e
                            }, r(n)
                        })) : r(n)
                    }))
                }
            }, e(this._initPortListener)
        }
        getPortExists(e) {
            return !!this._tabPorts[e]
        }
        sendTo(e, t, n, r, o, i) {
            var s;
            const {
                tabId: a,
                frameId: u = null
            } = "object" == typeof e ? e : {
                tabId: String(e)
            }, c = null === (s = this._tabPorts[a]) || void 0 === s ? void 0 : s.filter((e => null === u || void 0 !== e.sender.frameId && String(e.sender.frameId) === u));
            if (!c || !c.length) return void(o && o({
                message: "no ports on specified destination"
            }));
            const l = i ? c.filter((e => i(e.sender && e.sender.url))) : c;
            if (!l.length) return void(o && o({
                message: "no ports on specified tabFilter"
            }));
            const f = {
                type: t,
                content: n
            };
            r && "function" == typeof r && (f.callid = pe(), this._callbacks[f.callid] = r), l.forEach((e => e.postMessage(f)))
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
    }
    class Zb {
        constructor(e) {
            this._manifestVersion = e, this.kind = "web-extension", this.executeScript = (e, t, n) => g.create(((r, o) => {
                "3" !== this._manifestVersion ? chrome.tabs.executeScript(t, {
                    file: e,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (e => ey(e[0], r, o))) : chrome.scripting.executeScript({
                    files: [e],
                    target: {
                        tabId: t,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (e => {
                    var t;
                    return ey(null === (t = e[0]) || void 0 === t ? void 0 : t.result, r, o)
                }))
            })), this.executeFunction = (e, t, n) => g.create(((r, o) => {
                "3" !== this._manifestVersion ? chrome.tabs.executeScript(t, {
                    code: `(${e.toString()})()`,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (e => ey(e[0], r, o))) : chrome.scripting.executeScript({
                    function: e,
                    target: {
                        tabId: t,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (e => {
                    var t;
                    return ey(null === (t = e[0]) || void 0 === t ? void 0 : t.result, r, o)
                }))
            })), this.insertCSS = (e, t, n, r) => g.create(((o, i) => {
                "3" !== this._manifestVersion ? chrome.tabs.insertCSS(e, {
                    file: t,
                    code: n,
                    matchAboutBlank: !0,
                    ...r ? {
                        frameId: Number(r)
                    } : {}
                }, (() => ey(void 0, o, i))) : chrome.scripting.insertCSS({
                    target: {
                        tabId: e,
                        ...r ? {
                            frameIds: [Number(r)]
                        } : {}
                    },
                    files: t ? [t] : void 0,
                    css: n
                }, (() => ey(void 0, o, i)))
            }))
        }
        open(e, t) {
            return g.create(((n, r) => {
                chrome.tabs.create({
                    url: e,
                    active: t
                }, (e => {
                    Vb((() => n(e)), r)
                }))
            }))
        }
        updateCurrent(e) {
            return g.create(((t, n) => {
                chrome.tabs.update({
                    url: e
                }, (e => {
                    Vb((() => t(e)), n)
                }))
            }))
        }
        getActiveTab() {
            return g.create(((e, t) => {
                const n = chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, (r => {
                    Vb((() => {
                        r && r.length ? e(r[0]) : n.query({
                            active: !0
                        }, (n => {
                            Vb((() => {
                                e(n[0])
                            }), t)
                        }))
                    }), t)
                }))
            }))
        }
        getAllTabs() {
            return g.create(((e, t) => chrome.tabs.query({}, (n => Vb((() => e(n)), t)))))
        }
        getActiveTabUrl() {
            return g.create(((e, t) => this.getActiveTab().then((n => Vb((() => e(n && n.url)), t)))))
        }
        onActiveTabChange(e, t) {
            const n = n => {
                Vb((() => {
                    n && e(n)
                }), t)
            };
            chrome.tabs.onActivated.addListener((e => chrome.tabs.get(e.tabId, (e => n(e))))), chrome.tabs.onUpdated.addListener(((e, t) => {
                this.getActiveTab().then((r => {
                    r && r.id === e && (t.url || t.favIconUrl || "complete" === t.status) && chrome.tabs.get(e, (e => n(e)))
                }))
            })), chrome.windows.onFocusChanged.addListener((e => chrome.tabs.query({
                active: !0,
                windowId: e,
                lastFocusedWindow: !0
            }, (e => n(e[0]))))), this.getActiveTab().then((e => n(e)))
        }
        tabUrlChange() {
            return new X((e => {
                const t = (t, n, r) => {
                    "complete" === n.status && e.next({
                        id: t,
                        url: r.url
                    })
                };
                return chrome.tabs.onUpdated.addListener(t), () => chrome.tabs.onUpdated.removeListener(t)
            }))
        }
        reload(e) {
            return g.create(((t, n) => {
                const r = () => Vb((() => t()), n);
                e ? chrome.tabs.reload(e, {}, r) : chrome.tabs.reload(r)
            }))
        }
    }

    function ey(e, t, n) {
        le() ? n(le()) : t(e)
    }
    const ty = {
        get: e => g.create(((t, n) => chrome.storage.local.get(e, (e => {
            Vb((() => t(e)), n)
        })))),
        set: e => g.create(((t, n) => chrome.storage.local.set(e, (() => {
            Vb(t, n)
        })))),
        getAll: () => g.create(((e, t) => chrome.storage.local.get(null, (n => {
            Vb((() => e(n)), t)
        })))),
        remove: e => g.create(((t, n) => chrome.storage.local.remove(e, (() => {
            Vb(t, n)
        })))),
        removeAll: () => g.create(((e, t) => chrome.storage.local.clear((() => {
            Vb(e, t)
        }))))
    };
    class ny {
        constructor(e) {
            this.port = chrome.runtime.connect({
                name: e
            })
        }
        onMessage(e) {
            this.port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this.port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this.port.postMessage(e)
        }
    }
    class ry {
        constructor(e) {
            this._port = e, this.sender = {};
            const {
                sender: t,
                name: n
            } = e;
            this.name = n, t && (this.sender.url = t.url, this.sender.frameId = t.frameId, t.tab && t.tab.url && t.tab.id && (this.sender.tab = {
                url: t.tab.url,
                id: t.tab.id
            }))
        }
        onMessage(e) {
            this._port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this._port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this._port.postMessage(e)
        }
    }
    class oy {
        constructor(e) {
            this._manifestVersion = "2", this._action = "3" === this._manifestVersion ? chrome.action : chrome.browserAction, this.alarms = new $b, this.managedStorage = new Yb, this.tabs = new Zb(this._manifestVersion), this.thirdPartyExtensionsInstalled = {}, this.notification = {
                kind: "web-extension",
                create: e => g.create(((t, n) => {
                    const r = chrome.notifications,
                        o = pe();
                    r.create(o, Object.assign({
                        type: "basic"
                    }, e), (() => {
                        Vb((() => {
                            const e = new X((e => {
                                    const t = t => t === o && e.next(t);
                                    return r.onClicked.addListener(t), () => r.onClicked.removeListener(t)
                                })),
                                n = new X((e => {
                                    const t = (t, n) => t === o && e.next({
                                        id: t,
                                        buttonIndex: n
                                    });
                                    return r.onButtonClicked.addListener(t), () => r.onButtonClicked.removeListener(t)
                                })),
                                i = new X((e => {
                                    const t = (t, n) => t === o && e.next({
                                        id: t,
                                        byUser: n
                                    });
                                    return r.onClosed.addListener(t), () => r.onClosed.removeListener(t)
                                }));
                            t({
                                id: o,
                                click: e,
                                buttonClick: n,
                                close: i
                            })
                        }), n)
                    }))
                })),
                clear: e => g.create(((t, n) => {
                    chrome.notifications.clear(e, (e => {
                        Vb((() => t(e)), n)
                    }))
                }))
            }, this.cookies = {
                kind: "web-extension",
                get: e => g.create(((t, n) => chrome.cookies.get(e, (e => Vb((() => t(e)), n))))),
                remove: e => new Promise(((t, n) => chrome.cookies.remove(e, (() => Vb((() => t(null)), n))))),
                getAll: e => g.create(((t, n) => chrome.cookies.getAll(e, (e => Vb((() => t(e)), n))))),
                set: e => g.create(((t, n) => chrome.cookies.set(e, (e => Vb((() => t(e)), n))))),
                watch(e, t) {
                    const n = n => {
                        const {
                            cookie: r,
                            cause: o
                        } = n;
                        !r || !r.name || e.path && e.path !== r.path || e.name !== r.name || e.domain && -1 === r.domain.indexOf(e.domain) || ("explicit" === o && t(r), "expired_overwrite" === o && t())
                    };
                    return chrome.cookies.onChanged.addListener(n), () => chrome.cookies.onChanged.removeListener(n)
                },
                getChanges(e) {
                    return new X((t => this.watch(e, (e => t.next(e)))))
                }
            }, this.preferences = ty, this.management = {
                uninstallSelf() {
                    chrome.management.uninstallSelf()
                }
            }, this._baseUrl = S((() => chrome.runtime.getURL("")), (e => null)), this.permissions = chrome.permissions ? {
                watchAdded: e => {
                    chrome.permissions.onAdded.addListener(e)
                },
                added: new X((e => {
                    const t = t => {
                        e.next(t)
                    };
                    return chrome.permissions.onAdded.addListener(t), () => {
                        chrome.permissions.onAdded.removeListener(t)
                    }
                })),
                watchRemoved: e => {
                    chrome.permissions.onRemoved.addListener(e)
                },
                removed: new X((e => {
                    const t = t => {
                        e.next(t)
                    };
                    return chrome.permissions.onRemoved.addListener(t), () => {
                        chrome.permissions.onRemoved.removeListener(t)
                    }
                })),
                getAll: () => new Promise((e => chrome.permissions.getAll(e))),
                request: e => new Promise(((t, n) => chrome.permissions.request(e, (e => {
                    chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e)
                })))),
                contains: e => new Promise(((t, n) => {
                    chrome.permissions.contains(e, (e => {
                        chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e)
                    }))
                }))
            } : void 0, this.fetchBlocklistConfig = () => fetch(He().appConfig.url.pageConfigUrl, {
                credentials: "include"
            }).then((e => e.ok ? e.json() : e.text().then((t => {
                throw {
                    name: "RequestError",
                    body: t,
                    statusCode: e.status,
                    message: e.statusText
                }
            })))).then((e => {
                if ("string" != typeof e && e && e.error) throw new Error(e.error);
                return e
            })), this.getUrl = e => this._baseUrl ? this._baseUrl + e : chrome.runtime.getURL(e), this.fetchInternalResource = (e, t) => fetch(this.getUrl(e)).then((e => "json" === t ? e.json() : e.arrayBuffer())), this.openUrl = e => this.tabs.open(e, !0), this.openPopupSubscriptionDialog = e => {
                return this.openUrl((t = e.utmSource, n = e.utmCampaign, Ms(Je().upgrade, Fs({
                    medium: "internal",
                    source: t,
                    campaign: n
                }))));
                var t, n
            }, this.openSubscriptionDialog = e => function(e) {
                const t = He().appConfig.url,
                    n = e.showPlanComparison ? t.planComparison : t.upgrade;
                self.open(Ms(n, [...e.isFromEmail ? [Rs("isFromEmail", "1")] : [], Rs("alerts", Wb(Hb(e.currentAlerts))), Rs("lensedAlerts", Wb(zb(e.currentAlerts))), Rs("app_type", "popup"), Rs("browser", Qe()), ...Fs({
                    medium: "internal",
                    source: e.isAnonymousUser ? "signupHook" : "upHook",
                    campaign: e.forceUtmCampaign ? e.forceUtmCampaign : e.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
                })]))
            }(e), this.isExtensionUrl = (e, t) => this.getUrl(e) === t, this.reload = () => chrome.runtime.reload(), this.i18n = {
                detectLanguage: e => g.create(((t, n) => chrome.i18n.detectLanguage(e, (e => Vb((() => t(e)), n))))),
                getUILanguage: () => chrome.i18n.getUILanguage(),
                getAcceptLanguages: () => g.create(((e, t) => chrome.i18n.getAcceptLanguages((n => Vb((() => e(n)), t)))))
            }, this.initCodeSplittingListener = () => {
                return chrome.runtime.onMessage.addListener((e = this.tabs.executeScript, (t, n, r) => {
                    t && "CODE_SPLITTING_INJECT" === t.type && t.file && n && n.tab && null != n.tab.id && (e(t.file, Number(n.tab.id), n.frameId), r())
                }));
                var e
            }, this.isExtensionInstalled = async (e, t = !1) => {
                if (!t && void 0 !== this.thirdPartyExtensionsInstalled[e]) return this.thirdPartyExtensionsInstalled[e];
                if ("undefined" == typeof fetch) return !1;
                const n = oy.thirdPartyExtensionsData[e].publicResources.reduce(((t, n) => (Ve() && t.push(`chrome-extension://${oy.thirdPartyExtensionsData[e].MSStoreId}${n}`), t.concat(`chrome-extension://${oy.thirdPartyExtensionsData[e].id}${n}`))), []);
                return (r = n.map((e => fetch(e))), m(Promise.all([...r].map(m)))).then((e => !0)).catch((e => !1));
                var r
            }, this.message = e ? new Jb((e => chrome.runtime.onConnect.addListener((t => e(new ry(t))))), ct(this.tabs).getActiveTab, ct(this.tabs).getAllTabs) : new Ub((e => new ny(e)))
        }
        get button() {
            const e = this._action;
            return {
                kind: "web-extension",
                setBadge(t) {
                    e.setBadgeText({
                        text: t
                    })
                },
                setIconByName(t) {
                    const n = "./src/icon/icon",
                        r = t ? "-" + t : "";
                    e.setIcon({
                        path: {
                            16: `${n}16${r}.png`,
                            32: `${n}32${r}.png`
                        }
                    })
                },
                setBadgeBackgroundColor(t) {
                    e.setBadgeBackgroundColor({
                        color: t
                    })
                }
            }
        }
        get baseUri() {
            var e;
            return null !== (e = this._baseUrl) && void 0 !== e ? e : chrome.runtime.getURL("")
        }
    }
    var iy;
    oy.thirdPartyExtensionsData = {
        mseditor: {
            id: "gpaiobkfhnonedkhhfjpmhdalgeoebfa",
            MSStoreId: "hokifickgkhplphjiodbggjmoafhignh",
            publicResources: ["/fonts/fabric-icons.css"]
        },
        office: {
            id: "ndjpnladcallmjemlbaebfadecfhkepb",
            MSStoreId: "gggmmkjegpiggikcnhidnjjhmicpibll",
            publicResources: ["/fonts/fabric-icons.css"]
        }
    }, iy = {
        browser: "chrome",
        browserApi: function(e) {
            return new oy(e)
        }(!1)
    }, Fb.init(iy)
})();
