/*! For license information please see Grammarly-check.js.LICENSE.txt */
var t = {
        57238: (t, e, n) => {
            var r = n(65747),
                i = "chrome-extension://__MSG_@@extension_id__/",
                o = "moz-extension://__MSG_@@extension_id__/",
                s = self.GR_RESOURCE_ROOT || i,
                c = self.GR_RESOURCE_ROOT || o;
            t.exports = {
                __css: r.toString().replace(new RegExp(i, "g"), s).replace(new RegExp(o, "g"), c),
                ...r.locals
            }
        },
        65747: (t, e, n) => {
            var r = n(93476)((function(t) {
                return t[1]
            }));
            r.push([t.id, "._3Spqv-animatedUnderline{visibility:hidden;position:fixed;}._3Spqv-animatedUnderline:after{content:'';position:absolute;visibility:visible;height:3px;bottom:0;border-radius:10px;background:#488cc8;animation:_15P6d-showUnderline 1.3s ease forwards}._3Spqv-animatedUnderline._1jDIx-completeAnimation:after{animation:_15P6d-showUnderline .2s ease forwards}@keyframes _15P6d-showUnderline{0%{width:0%}100%{width:100%}}._28F_K-checkAnimatedUnderline{animation:_15P6d-showUnderline 2s ease forwards;}._28F_K-checkAnimatedUnderline._1jDIx-completeAnimation{animation:_15P6d-showUnderline .2s ease forwards}", ""]), r.locals = {
                animatedUnderline: "_3Spqv-animatedUnderline",
                showUnderline: "_15P6d-showUnderline",
                completeAnimation: "_1jDIx-completeAnimation",
                checkAnimatedUnderline: "_28F_K-checkAnimatedUnderline"
            }, t.exports = r
        },
        93476: t => {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                    })).join("")
                }, e.i = function(t, n, r) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    var i = {};
                    if (r)
                        for (var o = 0; o < this.length; o++) {
                            var s = this[o][0];
                            null != s && (i[s] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var a = [].concat(t[c]);
                        r && i[a[0]] || (n && (a[2] ? a[2] = "".concat(n, " and ").concat(a[2]) : a[2] = n), e.push(a))
                    }
                }, e
            }
        },
        52961: t => {
            t.exports = {
                animatedUnderline: "_24bLp",
                showUnderline: "jF640",
                completeAnimation: "gNDOL"
            }
        },
        39335: (t, e, n) => {
            n(3214);
            var r = {
                superfasthash: n(11028),
                murmurhash3: n(13786)
            };
            t.exports = {
                createHash: function(t) {
                    t = t.replace(/![a-zA-z0-9]/g, "").toLowerCase();
                    try {
                        return r[t]
                    } catch (t) {
                        throw new Error(t)
                    }
                }
            }
        },
        13786: (t, e, n) => {
            var r = n(81314);

            function i(t, e) {
                return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
            }

            function o(t, e) {
                return t << e | t >>> 32 - e
            }

            function s(t) {
                return t = i(t ^= t >>> 16, 2246822507), t = i(t ^= t >>> 13, 3266489909), t ^= t >>> 16
            }

            function c(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function a(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function u(t, e) {
                return 32 === (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            }

            function l(t, e) {
                return 0 === (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            }

            function h(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            }

            function f(t) {
                return t = h(t, [0, t[0] >>> 1]), t = h(t = a(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), t = h(t = a(t, [3301882366, 444984403]), [0, t[0] >>> 1])
            }
            var p = function(t, e) {
                t = "" + t || "";
                var n = r.toU8IntArray(t);
                e = e || 0;
                for (var i = (t = {
                        charCodeAt: function(t) {
                            return n[t]
                        },
                        length: n.length
                    }).length % 16, o = t.length - i, s = [0, e], p = [0, e], d = [0, 0], b = [0, 0], g = [2277735313, 289559509], m = [1291169091, 658871167], v = 0; v < o; v += 16) d = [255 & t.charCodeAt(v + 4) | (255 & t.charCodeAt(v + 5)) << 8 | (255 & t.charCodeAt(v + 6)) << 16 | (255 & t.charCodeAt(v + 7)) << 24, 255 & t.charCodeAt(v) | (255 & t.charCodeAt(v + 1)) << 8 | (255 & t.charCodeAt(v + 2)) << 16 | (255 & t.charCodeAt(v + 3)) << 24], b = [255 & t.charCodeAt(v + 12) | (255 & t.charCodeAt(v + 13)) << 8 | (255 & t.charCodeAt(v + 14)) << 16 | (255 & t.charCodeAt(v + 15)) << 24, 255 & t.charCodeAt(v + 8) | (255 & t.charCodeAt(v + 9)) << 8 | (255 & t.charCodeAt(v + 10)) << 16 | (255 & t.charCodeAt(v + 11)) << 24], d = u(d = a(d, g), 31), s = c(s = u(s = h(s, d = a(d, m)), 27), p), s = c(a(s, [0, 5]), [0, 1390208809]), b = u(b = a(b, m), 33), p = c(p = u(p = h(p, b = a(b, g)), 31), s), p = c(a(p, [0, 5]), [0, 944331445]);
                switch (d = [0, 0], b = [0, 0], i) {
                    case 15:
                        b = h(b, l([0, t.charCodeAt(v + 14)], 48));
                    case 14:
                        b = h(b, l([0, t.charCodeAt(v + 13)], 40));
                    case 13:
                        b = h(b, l([0, t.charCodeAt(v + 12)], 32));
                    case 12:
                        b = h(b, l([0, t.charCodeAt(v + 11)], 24));
                    case 11:
                        b = h(b, l([0, t.charCodeAt(v + 10)], 16));
                    case 10:
                        b = h(b, l([0, t.charCodeAt(v + 9)], 8));
                    case 9:
                        b = a(b = h(b, [0, t.charCodeAt(v + 8)]), m), p = h(p, b = a(b = u(b, 33), g));
                    case 8:
                        d = h(d, l([0, t.charCodeAt(v + 7)], 56));
                    case 7:
                        d = h(d, l([0, t.charCodeAt(v + 6)], 48));
                    case 6:
                        d = h(d, l([0, t.charCodeAt(v + 5)], 40));
                    case 5:
                        d = h(d, l([0, t.charCodeAt(v + 4)], 32));
                    case 4:
                        d = h(d, l([0, t.charCodeAt(v + 3)], 24));
                    case 3:
                        d = h(d, l([0, t.charCodeAt(v + 2)], 16));
                    case 2:
                        d = h(d, l([0, t.charCodeAt(v + 1)], 8));
                    case 1:
                        d = a(d = h(d, [0, t.charCodeAt(v)]), g), s = h(s, d = a(d = u(d, 31), m))
                }
                return s = c(s = h(s, [0, t.length]), p = h(p, [0, t.length])), p = c(p, s), s = c(s = f(s), p = f(p)), p = c(p, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8)
            };
            t.exports = {
                x86Hash32: function(t, e) {
                    t = "" + t || "";
                    var n = r.toU8IntArray(t);
                    e = e || 0;
                    for (var c = (t = {
                            charCodeAt: function(t) {
                                return n[t]
                            },
                            length: n.length
                        }).length % 4, a = t.length - c, u = e, l = 0, h = 3432918353, f = 461845907, p = 0; p < a; p += 4) l = i(l = 255 & t.charCodeAt(p) | (255 & t.charCodeAt(p + 1)) << 8 | (255 & t.charCodeAt(p + 2)) << 16 | (255 & t.charCodeAt(p + 3)) << 24, h), l = i(l = o(l, 15), f), u = i(u = o(u ^= l, 13), 5) + 3864292196;
                    switch (l = 0, c) {
                        case 3:
                            l ^= (255 & t.charCodeAt(p + 2)) << 16;
                        case 2:
                            l ^= (255 & t.charCodeAt(p + 1)) << 8;
                        case 1:
                            l = i(l ^= 255 & t.charCodeAt(p), h), u ^= l = i(l = o(l, 15), f)
                    }
                    return ((u = s(u ^= t.length)) >>> 0).toString(16)
                },
                x86Hash128: function(t, e) {
                    t = "" + t || "";
                    var n = r.toU8IntArray(t);
                    e = e || 0;
                    for (var c = (t = {
                            charCodeAt: function(t) {
                                return n[t]
                            },
                            length: n.length
                        }).length % 16, a = t.length - c, u = e, l = e, h = e, f = e, p = 0, d = 0, b = 0, g = 0, m = 597399067, v = 2869860233, y = 951274213, _ = 2716044179, w = 0; w < a; w += 16) p = 255 & t.charCodeAt(w) | (255 & t.charCodeAt(w + 1)) << 8 | (255 & t.charCodeAt(w + 2)) << 16 | (255 & t.charCodeAt(w + 3)) << 24, d = 255 & t.charCodeAt(w + 4) | (255 & t.charCodeAt(w + 5)) << 8 | (255 & t.charCodeAt(w + 6)) << 16 | (255 & t.charCodeAt(w + 7)) << 24, b = 255 & t.charCodeAt(w + 8) | (255 & t.charCodeAt(w + 9)) << 8 | (255 & t.charCodeAt(w + 10)) << 16 | (255 & t.charCodeAt(w + 11)) << 24, g = 255 & t.charCodeAt(w + 12) | (255 & t.charCodeAt(w + 13)) << 8 | (255 & t.charCodeAt(w + 14)) << 16 | (255 & t.charCodeAt(w + 15)) << 24, p = o(p = i(p, m), 15), u = o(u ^= p = i(p, v), 19), u = i(u += l, 5) + 1444728091, d = o(d = i(d, v), 16), l = o(l ^= d = i(d, y), 17), l = i(l += h, 5) + 197830471, b = o(b = i(b, y), 17), h = o(h ^= b = i(b, _), 15), h = i(h += f, 5) + 2530024501, g = o(g = i(g, _), 18), f = o(f ^= g = i(g, m), 13), f = i(f += u, 5) + 850148119;
                    switch (p = 0, d = 0, b = 0, g = 0, c) {
                        case 15:
                            g ^= t.charCodeAt(w + 14) << 16;
                        case 14:
                            g ^= t.charCodeAt(w + 13) << 8;
                        case 13:
                            g = i(g ^= t.charCodeAt(w + 12), _), f ^= g = i(g = o(g, 18), m);
                        case 12:
                            b ^= t.charCodeAt(w + 11) << 24;
                        case 11:
                            b ^= t.charCodeAt(w + 10) << 16;
                        case 10:
                            b ^= t.charCodeAt(w + 9) << 8;
                        case 9:
                            b = i(b ^= t.charCodeAt(w + 8), y), h ^= b = i(b = o(b, 17), _);
                        case 8:
                            d ^= t.charCodeAt(w + 7) << 24;
                        case 7:
                            d ^= t.charCodeAt(w + 6) << 16;
                        case 6:
                            d ^= t.charCodeAt(w + 5) << 8;
                        case 5:
                            d = i(d ^= t.charCodeAt(w + 4), v), l ^= d = i(d = o(d, 16), y);
                        case 4:
                            p ^= t.charCodeAt(w + 3) << 24;
                        case 3:
                            p ^= t.charCodeAt(w + 2) << 16;
                        case 2:
                            p ^= t.charCodeAt(w + 1) << 8;
                        case 1:
                            p = i(p ^= t.charCodeAt(w), m), u ^= p = i(p = o(p, 15), v)
                    }
                    return u ^= t.length, u += l ^= t.length, u += h ^= t.length, l += u += f ^= t.length, h += u, f += u, u = s(u), u += l = s(l), u += h = s(h), l += u += f = s(f), h += u, f += u, ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8)
                },
                x64Hash64: function(t, e) {
                    return p(t, e).slice(8)
                },
                x64Hash128: p,
                hash: function(t, e) {
                    return p(t, e)
                }
            }
        },
        11028: (t, e, n) => {
            var r = n(81314);

            function i(t, e) {
                return t[e] << 8 | t[e + 1]
            }
            t.exports = {
                hash: function(t) {
                    var e, n = r.toU8IntArray(t + ""),
                        o = 0;
                    if (!t) return o.toString(16);
                    var s = n.length,
                        c = 0;
                    e = 3 & s, s >>>= 2;
                    for (var a = 0; a < s; a++) o = (o += i(n, c)) << 16 ^ (i(n, c + 2) << 11 ^ o), c += 4, o += o >> 11;
                    switch (e) {
                        case 3:
                            o += i(n, c), o ^= o << 16, o ^= n[c + 2] << 18, o += o >> 11;
                            break;
                        case 2:
                            o += i(n, c), o ^= o << 11, o += o >> 17;
                            break;
                        case 1:
                            o += n[c], o ^= o << 10, o += o >> 1
                    }
                    return o ^= o << 3, o += o >> 5, o ^= o << 4, o += o >> 17, o ^= o << 25, o += o >> 6, r.intToUnsignedHex(o)
                }
            }
        },
        81314: t => {
            t.exports = {
                toU8IntArray: function(t) {
                    for (var e = [], n = [], r = 0; r < t.length; r++) {
                        var i, o = t.charCodeAt(r);
                        for (n.length = 0;
                            (i = 255 & o) || o;) n.push(i), o >>>= 8;
                        e = e.concat(n.reverse())
                    }
                    return e
                },
                intToUnsignedHex: function(t) {
                    for (var e, n = [];
                        (e = 65535 & t) || t;) e = e.toString(16), e = "0000".slice(e.length) + e, n.push(e), t >>>= 16;
                    return n.reverse().join("")
                }
            }
        },
        3214: (t, e, n) => {
            var r = n(27061),
                i = "win32" === r.platform,
                o = n(71323);

            function s(t, e) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var i = t[r];
                    i && "." !== i && (".." === i ? n.length && ".." !== n[n.length - 1] ? n.pop() : e && n.push("..") : n.push(i))
                }
                return n
            }

            function c(t) {
                for (var e = t.length - 1, n = 0; n <= e && !t[n]; n++);
                for (var r = e; r >= 0 && !t[r]; r--);
                return 0 === n && r === e ? t : n > r ? [] : t.slice(n, r + 1)
            }
            var a = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
                u = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
                l = {};

            function h(t) {
                var e = a.exec(t),
                    n = (e[1] || "") + (e[2] || ""),
                    r = e[3] || "",
                    i = u.exec(r);
                return [n, i[1], i[2], i[3]]
            }

            function f(t) {
                var e = a.exec(t),
                    n = e[1] || "",
                    r = !!n && ":" !== n[1];
                return {
                    device: n,
                    isUnc: r,
                    isAbsolute: r || !!e[2],
                    tail: e[3]
                }
            }

            function p(t) {
                return "\\\\" + t.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\")
            }
            l.resolve = function() {
                for (var t = "", e = "", n = !1, i = arguments.length - 1; i >= -1; i--) {
                    var c;
                    if (i >= 0 ? c = arguments[i] : t ? (c = r.env["=" + t]) && c.substr(0, 3).toLowerCase() === t.toLowerCase() + "\\" || (c = t + "\\") : c = r.cwd(), !o.isString(c)) throw new TypeError("Arguments to path.resolve must be strings");
                    if (c) {
                        var a = f(c),
                            u = a.device,
                            l = a.isUnc,
                            h = a.isAbsolute,
                            d = a.tail;
                        if ((!u || !t || u.toLowerCase() === t.toLowerCase()) && (t || (t = u), n || (e = d + "\\" + e, n = h), t && n)) break
                    }
                }
                return l && (t = p(t)), t + (n ? "\\" : "") + (e = s(e.split(/[\\\/]+/), !n).join("\\")) || "."
            }, l.normalize = function(t) {
                var e = f(t),
                    n = e.device,
                    r = e.isUnc,
                    i = e.isAbsolute,
                    o = e.tail,
                    c = /[\\\/]$/.test(o);
                return (o = s(o.split(/[\\\/]+/), !i).join("\\")) || i || (o = "."), o && c && (o += "\\"), r && (n = p(n)), n + (i ? "\\" : "") + o
            }, l.isAbsolute = function(t) {
                return f(t).isAbsolute
            }, l.join = function() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (!o.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                    n && t.push(n)
                }
                var r = t.join("\\");
                return /^[\\\/]{2}[^\\\/]/.test(t[0]) || (r = r.replace(/^[\\\/]{2,}/, "\\")), l.normalize(r)
            }, l.relative = function(t, e) {
                t = l.resolve(t), e = l.resolve(e);
                for (var n = t.toLowerCase(), r = e.toLowerCase(), i = c(e.split("\\")), o = c(n.split("\\")), s = c(r.split("\\")), a = Math.min(o.length, s.length), u = a, h = 0; h < a; h++)
                    if (o[h] !== s[h]) {
                        u = h;
                        break
                    } if (0 == u) return e;
                var f = [];
                for (h = u; h < o.length; h++) f.push("..");
                return (f = f.concat(i.slice(u))).join("\\")
            }, l._makeLong = function(t) {
                if (!o.isString(t)) return t;
                if (!t) return "";
                var e = l.resolve(t);
                return /^[a-zA-Z]\:\\/.test(e) ? "\\\\?\\" + e : /^\\\\[^?.]/.test(e) ? "\\\\?\\UNC\\" + e.substring(2) : t
            }, l.dirname = function(t) {
                var e = h(t),
                    n = e[0],
                    r = e[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, l.basename = function(t, e) {
                var n = h(t)[2];
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
            }, l.extname = function(t) {
                return h(t)[3]
            }, l.format = function(t) {
                if (!o.isObject(t)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
                var e = t.root || "";
                if (!o.isString(e)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
                var n = t.dir,
                    r = t.base || "";
                return n ? n[n.length - 1] === l.sep ? n + r : n + l.sep + r : r
            }, l.parse = function(t) {
                if (!o.isString(t)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof t);
                var e = h(t);
                if (!e || 4 !== e.length) throw new TypeError("Invalid path '" + t + "'");
                return {
                    root: e[0],
                    dir: e[0] + e[1].slice(0, -1),
                    base: e[2],
                    ext: e[3],
                    name: e[2].slice(0, e[2].length - e[3].length)
                }
            }, l.sep = "\\", l.delimiter = ";";
            var d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                b = {};

            function g(t) {
                return d.exec(t).slice(1)
            }
            b.resolve = function() {
                for (var t = "", e = !1, n = arguments.length - 1; n >= -1 && !e; n--) {
                    var i = n >= 0 ? arguments[n] : r.cwd();
                    if (!o.isString(i)) throw new TypeError("Arguments to path.resolve must be strings");
                    i && (t = i + "/" + t, e = "/" === i[0])
                }
                return (e ? "/" : "") + (t = s(t.split("/"), !e).join("/")) || "."
            }, b.normalize = function(t) {
                var e = b.isAbsolute(t),
                    n = t && "/" === t[t.length - 1];
                return (t = s(t.split("/"), !e).join("/")) || e || (t = "."), t && n && (t += "/"), (e ? "/" : "") + t
            }, b.isAbsolute = function(t) {
                return "/" === t.charAt(0)
            }, b.join = function() {
                for (var t = "", e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (!o.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                    n && (t += t ? "/" + n : n)
                }
                return b.normalize(t)
            }, b.relative = function(t, e) {
                t = b.resolve(t).substr(1), e = b.resolve(e).substr(1);
                for (var n = c(t.split("/")), r = c(e.split("/")), i = Math.min(n.length, r.length), o = i, s = 0; s < i; s++)
                    if (n[s] !== r[s]) {
                        o = s;
                        break
                    } var a = [];
                for (s = o; s < n.length; s++) a.push("..");
                return (a = a.concat(r.slice(o))).join("/")
            }, b._makeLong = function(t) {
                return t
            }, b.dirname = function(t) {
                var e = g(t),
                    n = e[0],
                    r = e[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, b.basename = function(t, e) {
                var n = g(t)[2];
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
            }, b.extname = function(t) {
                return g(t)[3]
            }, b.format = function(t) {
                if (!o.isObject(t)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
                var e = t.root || "";
                if (!o.isString(e)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
                return (t.dir ? t.dir + b.sep : "") + (t.base || "")
            }, b.parse = function(t) {
                if (!o.isString(t)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof t);
                var e = g(t);
                if (!e || 4 !== e.length) throw new TypeError("Invalid path '" + t + "'");
                return e[1] = e[1] || "", e[2] = e[2] || "", e[3] = e[3] || "", {
                    root: e[0],
                    dir: e[0] + e[1].slice(0, -1),
                    base: e[2],
                    ext: e[3],
                    name: e[2].slice(0, e[2].length - e[3].length)
                }
            }, b.sep = "/", b.delimiter = ":", t.exports = i ? l : b, t.exports.posix = b, t.exports.win32 = l
        },
        27061: t => {
            var e, n, r = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (n) {
                    try {
                        return e.call(null, t, 0)
                    } catch (n) {
                        return e.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    e = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    n = o
                }
            }();
            var c, a = [],
                u = !1,
                l = -1;

            function h() {
                u && c && (u = !1, c.length ? a = c.concat(a) : l = -1, a.length && f())
            }

            function f() {
                if (!u) {
                    var t = s(h);
                    u = !0;
                    for (var e = a.length; e;) {
                        for (c = a, a = []; ++l < e;) c && c[l].run();
                        l = -1, e = a.length
                    }
                    c = null, u = !1,
                        function(t) {
                            if (n === clearTimeout) return clearTimeout(t);
                            if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                            try {
                                n(t)
                            } catch (e) {
                                try {
                                    return n.call(null, t)
                                } catch (e) {
                                    return n.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function d() {}
            r.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                a.push(new p(t, e)), 1 !== a.length || u || s(f)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function(t) {
                return []
            }, r.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        8746: t => {
            "function" == typeof Object.create ? t.exports = function(t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function(t, e) {
                t.super_ = e;
                var n = function() {};
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        },
        56579: t => {
            t.exports = function(t) {
                return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
            }
        },
        71323: (t, e, n) => {
            var r = n(27061),
                i = /%[sdj%]/g;
            e.format = function(t) {
                if (!m(t)) {
                    for (var e = [], n = 0; n < arguments.length; n++) e.push(c(arguments[n]));
                    return e.join(" ")
                }
                n = 1;
                for (var r = arguments, o = r.length, s = String(t).replace(i, (function(t) {
                        if ("%%" === t) return "%";
                        if (n >= o) return t;
                        switch (t) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                                default:
                                    return t
                        }
                    })), a = r[n]; n < o; a = r[++n]) b(a) || !_(a) ? s += " " + a : s += " " + c(a);
                return s
            }, e.deprecate = function(t, i) {
                if (v(n.g.process)) return function() {
                    return e.deprecate(t, i).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return t;
                var o = !1;
                return function() {
                    if (!o) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                    }
                    return t.apply(this, arguments)
                }
            };
            var o, s = {};

            function c(t, n) {
                var r = {
                    seen: [],
                    stylize: u
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && e._extend(r, n), v(r.showHidden) && (r.showHidden = !1), v(r.depth) && (r.depth = 2), v(r.colors) && (r.colors = !1), v(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = a), l(r, t, r.depth)
            }

            function a(t, e) {
                var n = c.styles[e];
                return n ? "[" + c.colors[n][0] + "m" + t + "[" + c.colors[n][1] + "m" : t
            }

            function u(t, e) {
                return t
            }

            function l(t, n, r) {
                if (t.customInspect && n && E(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, t);
                    return m(i) || (i = l(t, i, r)), i
                }
                var o = function(t, e) {
                    if (v(e)) return t.stylize("undefined", "undefined");
                    if (m(e)) {
                        var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return t.stylize(n, "string")
                    }
                    if (g(e)) return t.stylize("" + e, "number");
                    if (d(e)) return t.stylize("" + e, "boolean");
                    if (b(e)) return t.stylize("null", "null")
                }(t, n);
                if (o) return o;
                var s = Object.keys(n),
                    c = function(t) {
                        var e = {};
                        return t.forEach((function(t, n) {
                            e[t] = !0
                        })), e
                    }(s);
                if (t.showHidden && (s = Object.getOwnPropertyNames(n)), x(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return h(n);
                if (0 === s.length) {
                    if (E(n)) {
                        var a = n.name ? ": " + n.name : "";
                        return t.stylize("[Function" + a + "]", "special")
                    }
                    if (y(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (w(n)) return t.stylize(Date.prototype.toString.call(n), "date");
                    if (x(n)) return h(n)
                }
                var u, _ = "",
                    S = !1,
                    A = ["{", "}"];
                (p(n) && (S = !0, A = ["[", "]"]), E(n)) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]");
                return y(n) && (_ = " " + RegExp.prototype.toString.call(n)), w(n) && (_ = " " + Date.prototype.toUTCString.call(n)), x(n) && (_ = " " + h(n)), 0 !== s.length || S && 0 != n.length ? r < 0 ? y(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(n), u = S ? function(t, e, n, r, i) {
                    for (var o = [], s = 0, c = e.length; s < c; ++s) k(e, String(s)) ? o.push(f(t, e, n, r, String(s), !0)) : o.push("");
                    return i.forEach((function(i) {
                        i.match(/^\d+$/) || o.push(f(t, e, n, r, i, !0))
                    })), o
                }(t, n, r, c, s) : s.map((function(e) {
                    return f(t, n, r, c, e, S)
                })), t.seen.pop(), function(t, e, n) {
                    if (t.reduce((function(t, e) {
                            return e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }), 0) > 60) return n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1];
                    return n[0] + e + " " + t.join(", ") + " " + n[1]
                }(u, _, A)) : A[0] + _ + A[1]
            }

            function h(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function f(t, e, n, r, i, o) {
                var s, c, a;
                if ((a = Object.getOwnPropertyDescriptor(e, i) || {
                        value: e[i]
                    }).get ? c = a.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : a.set && (c = t.stylize("[Setter]", "special")), k(r, i) || (s = "[" + i + "]"), c || (t.seen.indexOf(a.value) < 0 ? (c = b(n) ? l(t, a.value, null) : l(t, a.value, n - 1)).indexOf("\n") > -1 && (c = o ? c.split("\n").map((function(t) {
                        return "  " + t
                    })).join("\n").substr(2) : "\n" + c.split("\n").map((function(t) {
                        return "   " + t
                    })).join("\n")) : c = t.stylize("[Circular]", "special")), v(s)) {
                    if (o && i.match(/^\d+$/)) return c;
                    (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                }
                return s + ": " + c
            }

            function p(t) {
                return Array.isArray(t)
            }

            function d(t) {
                return "boolean" == typeof t
            }

            function b(t) {
                return null === t
            }

            function g(t) {
                return "number" == typeof t
            }

            function m(t) {
                return "string" == typeof t
            }

            function v(t) {
                return void 0 === t
            }

            function y(t) {
                return _(t) && "[object RegExp]" === S(t)
            }

            function _(t) {
                return "object" == typeof t && null !== t
            }

            function w(t) {
                return _(t) && "[object Date]" === S(t)
            }

            function x(t) {
                return _(t) && ("[object Error]" === S(t) || t instanceof Error)
            }

            function E(t) {
                return "function" == typeof t
            }

            function S(t) {
                return Object.prototype.toString.call(t)
            }

            function A(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10)
            }
            e.debuglog = function(t) {
                if (v(o) && (o = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !s[t])
                    if (new RegExp("\\b" + t + "\\b", "i").test(o)) {
                        var n = r.pid;
                        s[t] = function() {
                            var r = e.format.apply(e, arguments);
                            console.error("%s %d: %s", t, n, r)
                        }
                    } else s[t] = function() {};
                return s[t]
            }, e.inspect = c, c.colors = {
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
            }, c.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.isArray = p, e.isBoolean = d, e.isNull = b, e.isNullOrUndefined = function(t) {
                return null == t
            }, e.isNumber = g, e.isString = m, e.isSymbol = function(t) {
                return "symbol" == typeof t
            }, e.isUndefined = v, e.isRegExp = y, e.isObject = _, e.isDate = w, e.isError = x, e.isFunction = E, e.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }, e.isBuffer = n(56579);
            var C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function I() {
                var t = new Date,
                    e = [A(t.getHours()), A(t.getMinutes()), A(t.getSeconds())].join(":");
                return [t.getDate(), C[t.getMonth()], e].join(" ")
            }

            function k(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            e.log = function() {
                console.log("%s - %s", I(), e.format.apply(e, arguments))
            }, e.inherits = n(8746), e._extend = function(t, e) {
                if (!e || !_(e)) return t;
                for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
                return t
            }
        }
    },
    e = {};

function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
        id: r,
        exports: {}
    };
    return t[r](i, i.exports, n), i.exports
}
n.d = (t, e) => {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
        enumerable: !0,
        get: e[r]
    })
}, n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")()
    } catch (t) {
        if ("object" == typeof window) return window
    }
}(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }), Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, (() => {
    var t = {};
    n.r(t), n.d(t, {
        emitBackground: () => en,
        emitError: () => Ge,
        emitFocusedTab: () => tn,
        emitTabs: () => Ke,
        emitTo: () => Ze,
        getTopFrameId: () => Qe,
        init: () => Ye,
        initMessage: () => Ve,
        off: () => Xe,
        on: () => Je,
        onBackgroundPortReconnect: () => ze,
        one: () => We,
        promiseBackground: () => nn
    });
    n(39335);

    function e() {
        return self.chrome && self.chrome.runtime && self.chrome.runtime.lastError
    }

    function r(t, e) {
        const n = r.items = r.items || {},
            i = n[t];
        if (i || e) {
            if (i && !e) return clearTimeout(i), void delete n[t];
            ! function() {
                function r() {
                    i(), t()
                }

                function i() {
                    const i = setTimeout(r, e);
                    n[t] = i
                }
                i()
            }()
        }
    }

    function i() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function o() {
        return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i()
    }

    function s(t) {
        return new Promise((e => setTimeout(e, t)))
    }! function(t) {
        t.items = {}
    }(r || (r = {}));
    new RegExp(String.fromCharCode(160), "g"), String.fromCharCode(160), new RegExp("\n" + String.fromCharCode(32), "g");
    const c = o();

    function a(t, e, n, r, i = !1) {
        if (null == t) return;
        const o = t;
        if ("string" != typeof e) return Object.keys(e).forEach((t => {
            e[t] && a(o, t, e[t], r)
        })); {
            if (!n) return;
            const t = o[c] || [];
            return o[c] = t, r ? (o[c] = t.filter((t => !(t.event === e && t.cb === n))), o.removeEventListener(e, n, i)) : (t.push({
                event: e,
                cb: n
            }), o.addEventListener(e, n, i)), {
                el: o,
                event: e,
                cb: n,
                bubble: i
            }
        }
    }
    var u;

    function l(t) {
        return new Promise(((e, n) => Promise.resolve(t).then(n, e)))
    }! function(t) {
        function e(t) {
            return new Promise(t)
        }
        t.create = e, t.createCompletionSource = function() {
            let t, e;
            return {
                promise: new Promise(((n, r) => {
                    t = n, e = r
                })),
                resolve(e) {
                    t(e)
                },
                reject(t) {
                    e(t)
                }
            }
        }, t.sync = function(t) {
            return e(((e, n) => e(t())))
        }, t.delay = function(e) {
            return t.create((t => {
                setTimeout((() => {
                    t()
                }), e)
            }))
        }
    }(u || (u = {}));
    Error;

    function h(t, e) {
        return t.some((t => t === e)) ? e : void 0
    }
    class f extends Error {
        constructor(t) {
            super("Matching not exhaustive" + (t ? `: unexpected value ${t}` : ""))
        }
    }

    function p(t) {
        throw new f(t)
    }

    function d(t) {
        const e = parseInt(t, 10);
        return isNaN(e) ? void 0 : e
    }

    function b(t, e) {
        try {
            return t()
        } catch (t) {
            return e(t)
        }
    }

    function g() {}
    var m;
    ! function(t) {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        t.create = function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(m || (m = {}));
    void 0 !== self.requestIdleCallback && self.requestIdleCallback;
    class v extends Error {
        constructor(t) {
            super(`Assertion failed: ${t?"string"==typeof t?t:t():"(unnamed)"}`)
        }
    }

    function y(t, e) {
        if (null == t) throw new v((() => e ? `Expected ${e} to be non-null` : "Expected non-null"));
        return t
    }
    var _, w, x, E, S, A, C;

    function I(t, e) {
        return t.filter((t => !!t)).join(e)
    }! function(t) {
        const e = {
            chrome: "chromeExt",
            firefox: "firefoxExt",
            safari: "safariExt",
            edge: "chromiumEdgeExt"
        };
        t.create = function(t, n) {
            return {
                appName: y(e[t], "gnar app name"),
                url: `https://gnar.${n}`,
                domain: `.${n}`,
                sendEmailInfoTracking: !0,
                sendFluidExperimentData: !1
            }
        }
    }(_ || (_ = {})),
    function(t) {
        const e = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        };
        t.create = function(t, n) {
            return {
                appName: y(e[t], "felog app name"),
                sendUsageMetrics: !0,
                sendPerfMetricsType: "dev" === n ? "local" : Math.random() <= .01 ? "send" : "off"
            }
        }
    }(w || (w = {})),
    function(t) {
        t.create = function() {
            return {}
        }
    }(x || (x = {})),
    function(t) {
        t.create = function(t) {
            return {
                urls: {
                    fetchMessages: `${t}/api/v1/messages`,
                    acknowledgeMessage: `${t}/api/v1/messages/acknowledge`,
                    dismissMessage: `${t}/api/v1/messages/dismiss`
                }
            }
        }
    }(E || (E = {})),
    function(t) {
        t.create = function(t, e, n, r, i, o) {
            const s = "safari" === t ? "disableAppsPromotion=true" : "";

            function c(t) {
                const n = `https://${t}.${e}`;
                return (t = "", e = "") => {
                    const r = I([s, e], "&");
                    return I([n + t, r], "?")
                }
            }
            const a = c("www"),
                u = c("app"),
                l = c("account"),
                h = c("redirect"),
                f = `https://data.${e}`,
                p = `https://auth.${e}/v3`,
                d = `wss://capi.${e}/freews`,
                b = `https://goldengate.${e}/snippets/v1/snippets`;
            return {
                accountSubscription: l("/subscription"),
                accountSubscriptionChangePlan: l("/subscription", "popup=switchToAnnualOffer"),
                accountSubscriptionAddBillingInfo: l("/subscription", "popup=add_billing_info"),
                adminAccountSubscription: l("/admin/subscription"),
                app: u(),
                appPersonalDictionary: l("/customize"),
                capi: d,
                capiGDocs: `wss://capi.${e}/gdocs`,
                dapiMimic: `${f}/api/mimic`,
                dapiProps: `${f}/api/props/v2`,
                dapiFindProps: `${f}/api/props/v2/find`,
                editorDictionary: u("/profile/dictionary"),
                dictionary: `https://capi.${e}/api/defs`,
                docs: u("/docs"),
                docsApi: `https://dox.${e}/documents`,
                newDoc: u("/docs/new"),
                userOrAnonymous: `${p}/user/oranonymous`,
                userData: `${p}/user/userdata`,
                authSignin: `${p}/api/login`,
                authSignup: `${p}/api/signup`,
                authExchange: `${p}/api/unified-login/code/exchange`,
                authLogout: `${p}/logout`,
                signin: a("/signin"),
                signup: a("/signup"),
                fbSignin: a("/signin", "fromExtensionFb=true"),
                fbSignup: a("/signup", "fromExtensionFb=true"),
                googleSignin: a("/signin", "fromExtensionGoogle=true"),
                googleSignup: a("/signup", "fromExtensionGoogle=true"),
                resetPassword: a("/resetpassword"),
                newFelog: n,
                sumoLogic: r,
                boomerangReviewerUI: a("/boomerang?linkId="),
                welcomeC: a("/extension-success"),
                afterInstall: a("/after_install_page/"),
                upgrade: a("/upgrade"),
                planComparison: a("/plans"),
                businessEHomepage: a("/business/e"),
                businessPricing: a("/business/pricing"),
                uninstall: a("/extension-uninstall"),
                terms: a("/terms"),
                policy: a("/privacy-policy"),
                californiaPolicy: a("/privacy-policy#for-california-users"),
                extensionSuccess: a("/extension-success"),
                firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                dynamicConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/dynamicConfig.json",
                pageConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/browserplugin/config.json",
                edgePopupUrl: i,
                emptyScriptUrl: o,
                grammarlyDomain: e,
                grammarlyProtocol: "https:",
                redirect: h("/redirect"),
                snippetsApi: b,
                snippetsNew: l("/admin/snippets", "action=create"),
                snippetsAdmin: l("/admin/snippets"),
                snippetsSettings: l("/customize/snippets"),
                suggestionsSettings: l("/customize/suggestions"),
                allSettings: l()
            }
        }
    }(S || (S = {})),
    function(t) {
        t.create = function(t) {
            return {
                gdocsSupported: "chrome" === t || "edge" === t || "firefox" === t || "safari" === t,
                denaliEditorSupported: "chrome" === t
            }
        }
    }(A || (A = {})),
    function(t) {
        const e = "grammarly.com",
            n = "qagr.io";
        t.create = function(t, r, i, o) {
            const s = (t, e, n) => "prod" === r ? t : "qa" === r ? e : "dev" === r ? n : p(r),
                c = "https://127.0.0.1:8000",
                a = s("https://f-log-extension.grammarly.io", c, c),
                u = s("https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==", c, c),
                l = s(e, n, n),
                h = "https://chipmunk.grammarly.com",
                f = s(h, h, h);
            return {
                url: S.create(t, "grammarly.com", a, u, i, o),
                gnar: _.create(t, l),
                felog: w.create(t, r),
                capi: x.create(),
                chipmunk: E.create(f),
                extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                newsVersion: 0,
                features: A.create(t)
            }
        }
    }(C || (C = {}));
    const k = b((() => browser), (() => self.browser));
    self.chrome = self.chrome;
    var T, O, P, j, R, N, L, M;
    ! function(t) {
        t.create = function(t, e, n, r, i, o, s, c) {
            const a = void 0 !== o && void 0 !== s ? o : "UNVERSIONED",
                u = `${t}.${e}.${n}`;
            return {
                version: u,
                fullVersion: `${u}-${[r,["prod"!==i?i:null,a!==r?a:null].filter((t=>!!t)).join(".")].filter((t=>""!==t)).join("/")}`,
                commitHash: s,
                gitBranch: o,
                manifestVersion: c
            }
        }, t.getManifestVersion = function(t, e, n) {
            switch (t) {
                case "safari":
                    switch (e) {
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
                        return k.runtime.getManifest().version;
                    default:
                        return p(t)
            }
        }
    }(T || (T = {})),
    function(t) {
        t.create = function(t) {
            return h(["chrome", "safari", "firefox", "edge"], t)
        }, t.isValidTargetBrowser = function(t) {
            return ["chrome", "safari", "firefox", "edge"].includes(t)
        }, t.detect = function(t) {
            return t.chrome && /google/i.test(t.navigator.vendor) ? t.navigator.appVersion.indexOf("Edg") > -1 ? "edge" : "chrome" : -1 !== t.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(t.navigator.userAgent) ? "safari" : void 0
        }
    }(O || (O = {})),
    function(t) {
        t.create = function(t) {
            return h(["dev", "prod", "qa"], t)
        }
    }(P || (P = {})),
    function(t) {
        t.create = function(t) {
            return h(["bg", "cs", "popup"], t)
        }, t.detect = function(t, e) {
            const n = !!t.IS_BG,
                r = "safari" === e ? function() {
                    try {
                        return t.safari.extension.globalPage.contentWindow !== t
                    } catch (t) {
                        return !1
                    }
                }() : !!t.IS_POPUP;
            return n ? "bg" : r ? "popup" : "cs"
        }
    }(j || (j = {})),
    function(t) {
        t.create = function(t, e, n) {
            return {
                browser: t,
                env: e,
                context: n
            }
        }
    }(R || (R = {})),
    function(t) {
        t.create = function(t) {
            return {
                type: O.detect(t) || "other"
            }
        }
    }(N || (N = {})),
    function(t) {
        t.create = function(t) {
            return {
                isWindows: -1 !== t.navigator.appVersion.indexOf("Win"),
                isMac: -1 !== t.navigator.appVersion.indexOf("Mac"),
                isChromeOS: -1 !== t.navigator.appVersion.indexOf("CrOS")
            }
        }
    }(L || (L = {})),
    function(t) {
        t.create = function(t) {
            return {
                browser: N.create(t),
                os: L.create(t)
            }
        }
    }(M || (M = {}));
    var U, D, F = n(27061);
    ! function(t) {
        function e(t, e, n, r, i, o, s, c, a) {
            return {
                env: t,
                major_number: e,
                build_number: n,
                release_number: r,
                git_branch: i,
                git_commit: o,
                edge_popup_url: s,
                empty_script_url: c,
                manifest_version: a
            }
        }
        t.create = e, t.fromBrowserify = function() {
            return e("prod", "14", "1012", "0", "UNVERSIONED", "UNVERSIONED", F.env.EDGE_POPUP_URL, F.env.EDGE_EMPTY_SCRIPT_URL, "2")
        }
    }(U || (U = {})),
    function(t) {
        t.getTargetEnv = function(t) {
            if (!t.env) throw new Error("processEnv.env is null or undefined");
            const e = P.create(t.env);
            if (!e) throw new Error(`Invalid processEnv.env: ${t.env}`);
            return e
        }, t.create = function(t, e, n, r) {
            const i = [n.major_number, n.build_number, n.release_number].map(d);
            let o;
            if (3 === i.length && i.every((t => void 0 !== t))) o = i;
            else {
                let n;
                try {
                    n = T.getManifestVersion(t, e, self)
                } catch (t) {}
                const r = (n || "").split(".").map(d);
                o = 3 === r.length && r.every((t => void 0 !== t)) ? r : [0, 0, 0]
            }
            const [s, c, a] = o;
            return {
                buildInfo: T.create(s, c, a, t, r, n.git_branch, n.git_commit, n.manifest_version),
                bundleInfo: R.create(t, r, e),
                appConfig: C.create(t, r, n.edge_popup_url, n.empty_script_url),
                systemInfo: M.create(self)
            }
        }
    }(D || (D = {}));
    const $ = new class {
        constructor(t) {
            this._getFallbackValue = t
        }
        init(t) {
            if (void 0 !== this._value) throw new Error("Global value already initialized.");
            this._value = t
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
    let V = () => $.get();

    function B() {
        return V()
    }

    function H() {
        return "edge" === B().bundleInfo.browser
    }

    function q() {
        return "bg" === B().bundleInfo.context
    }
    var z;
    ! function(t) {
        t.TRACE = "TRACE", t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR", t.FATAL = "FATAL"
    }(z || (z = {}));
    const G = {
        [z.TRACE]: 1,
        [z.DEBUG]: 2,
        [z.INFO]: 3,
        [z.WARN]: 4,
        [z.ERROR]: 5,
        [z.FATAL]: 6
    };

    function Y(t) {
        return G[t] || 0
    }
    class W {
        constructor(t) {
            this.name = t, this._isError = t => {
                const e = t;
                return e && (void 0 !== e.message && void 0 !== e.name || void 0 !== e.stack)
            }
        }
        trace(t, e, n) {
            this._logMessage(z.TRACE, t, e, n)
        }
        debug(t, e, n) {
            this._logMessage(z.DEBUG, t, e, n)
        }
        info(t, e, n) {
            this._logMessage(z.INFO, t, e, n)
        }
        warn(t, e, n) {
            this._logMessage(z.WARN, t, e, n)
        }
        error(t, e, n) {
            this._logMessage(z.ERROR, t, e, n)
        }
        fatal(t, e, n) {
            this._logMessage(z.FATAL, t, e, n)
        }
        _logMessage(t, e, n, r) {
            const i = {
                level: t,
                loggerName: this.name,
                message: e,
                timestamp: new Date
            };
            n && (this._isError(n) ? i.exception = n : i.data = n), i.data = i.data || r, this.handleEvent(i)
        }
    }
    class J {
        constructor(t, e) {
            this.name = t, this._createLogger = e
        }
        trace(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(t, e, n)
        }
        debug(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(t, e, n)
        }
        info(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(t, e, n)
        }
        warn(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(t, e, n)
        }
        error(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(t, e, n)
        }
        fatal(t, e, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(t, e, n)
        }
    }
    class X {
        constructor(t) {
            if (this.capacity = t, this._start = 0, this._end = 0, this._isFull = !1, t <= 0) throw new Error("Invalid capacity " + t);
            this._buffer = new Array(t)
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
        enqueue(t) {
            let e = null;
            return this.isFull && (e = this._buffer[this._start], this._startInc()), this._buffer[this._end] = t, this._endInc(), this._start === this._end && (this._isFull = !0), e
        }
        dequeue() {
            if (this.isEmpty) return null;
            const t = this._buffer[this._start];
            return this._buffer[this._start] = null, this._startInc(), this._isFull = !1, t
        }
        delete(t) {
            const e = this._buffer.indexOf(t);
            if (e >= 0) {
                if (e < this._end) {
                    for (let t = e; t < this._end - 1; t++) this._buffer[t] = this._buffer[t + 1];
                    this._buffer[--this._end] = null
                } else {
                    for (let t = this._start; t < e; t++) this._buffer[t + 1] = this._buffer[t];
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
            let t;
            if (this.isEmpty) t = [];
            else if (this._start < this._end) t = this._buffer.slice(this._start, this._end);
            else {
                t = new Array(this.size);
                let e = 0;
                for (let n = this._start; n < this.capacity; ++n, ++e) t[e] = this._buffer[n];
                for (let n = 0; n < this._end; ++n, ++e) t[e] = this._buffer[n]
            }
            return t
        }
    }
    let K;
    class Z extends W {
        constructor(t, e, n) {
            super(t), this._config = e, this._historyArgs = n, this._historyEnabled = () => {
                var t;
                return Boolean("prod" !== B().bundleInfo.env || (null === (t = this._historyArgs.enabledInProd) || void 0 === t ? void 0 : t.get()))
            }, this._setupHistoryDownload = () => {
                var t;
                void 0 === K && (K = new X(null !== (t = this._historyArgs.maxEventsToStore) && void 0 !== t ? t : 1e3), self.GRDownloadReport = () => {
                    var t, e, n;
                    if (this._historyEnabled()) {
                        const r = t => {
                                try {
                                    return JSON.stringify(t)
                                } catch (e) {
                                    return `${t}`
                                }
                            },
                            i = [
                                ["Level", "Logger", "Timestamp", "Message"].join("\t"), ...K.toArray().map((t => {
                                    const e = [t.level, t.loggerName, t.timestamp.toISOString(), t.message];
                                    return t.data && e.push(r(t.data)), t.exception && e.push(r(t.exception)), e.join("\t")
                                }))
                            ].join("\n");
                        if (self.document) {
                            const e = self.document.createElement("a");
                            e.href = "data:application/octet-stream," + encodeURIComponent(i), e.target = "_blank", e.download = null !== (t = this._historyArgs.downloadFileName) && void 0 !== t ? t : "grammarly-logs.tsv", e.click()
                        }
                        null === (n = (e = this._historyArgs).onDownload) || void 0 === n || n.call(e)
                    }
                })
            }, this._setupHistoryDownload()
        }
        handleEvent(t) {
            this._config.filterFn(t) && this._config.writer.write(t), this._historyEnabled() && (null == K || K.enqueue(t))
        }
    }

    function Q(t) {
        return new Proxy({}, {
            get(e, n) {
                const r = t[n];
                return r && "function" == typeof r ? r.bind(t) : void 0
            }
        })
    }
    class tt {
        constructor() {
            this._writeFunc = tt._commonWriteFunc
        }
        write(t) {
            try {
                const e = [`grm ${t.level} 【${t.loggerName}】░░ ${t.message}`];
                t.data && e.push(t.data), t.exception && e.push(t.exception), this._writeFunc[t.level].apply(null, e)
            } catch (t) {}
        }
    }
    tt._commonWriteFunc = function() {
        const {
            log: t,
            info: e,
            warn: n,
            error: r
        } = Q(console);
        return {
            [z.TRACE]: t,
            [z.DEBUG]: t,
            [z.INFO]: e,
            [z.WARN]: n,
            [z.ERROR]: r,
            [z.FATAL]: r
        }
    }();
    var et = function(t, e) {
        return (et = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    };

    function nt(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        et(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    Object.create;
    Object.create;

    function rt(t) {
        return "function" == typeof t
    }
    var it = !1,
        ot = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
                t && (new Error).stack;
                it = t
            },
            get useDeprecatedSynchronousErrorHandling() {
                return it
            }
        };

    function st(t) {
        setTimeout((function() {
            throw t
        }), 0)
    }
    var ct = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                if (ot.useDeprecatedSynchronousErrorHandling) throw t;
                st(t)
            },
            complete: function() {}
        },
        at = function() {
            return Array.isArray || function(t) {
                return t && "number" == typeof t.length
            }
        }();

    function ut(t) {
        return null !== t && "object" == typeof t
    }
    var lt = function() {
            function t(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                    return e + 1 + ") " + t.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
            }
            return t.prototype = Object.create(Error.prototype), t
        }(),
        ht = function() {
            function t(t) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
            }
            return t.prototype.unsubscribe = function() {
                var e;
                if (!this.closed) {
                    var n = this,
                        r = n._parentOrParents,
                        i = n._ctorUnsubscribe,
                        o = n._unsubscribe,
                        s = n._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof t) r.remove(this);
                    else if (null !== r)
                        for (var c = 0; c < r.length; ++c) {
                            r[c].remove(this)
                        }
                    if (rt(o)) {
                        i && (this._unsubscribe = void 0);
                        try {
                            o.call(this)
                        } catch (t) {
                            e = t instanceof lt ? ft(t.errors) : [t]
                        }
                    }
                    if (at(s)) {
                        c = -1;
                        for (var a = s.length; ++c < a;) {
                            var u = s[c];
                            if (ut(u)) try {
                                u.unsubscribe()
                            } catch (t) {
                                e = e || [], t instanceof lt ? e = e.concat(ft(t.errors)) : e.push(t)
                            }
                        }
                    }
                    if (e) throw new lt(e)
                }
            }, t.prototype.add = function(e) {
                var n = e;
                if (!e) return t.EMPTY;
                switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof t)) {
                            var r = n;
                            (n = new t)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                var i = n._parentOrParents;
                if (null === i) n._parentOrParents = this;
                else if (i instanceof t) {
                    if (i === this) return n;
                    n._parentOrParents = [i, this]
                } else {
                    if (-1 !== i.indexOf(this)) return n;
                    i.push(this)
                }
                var o = this._subscriptions;
                return null === o ? this._subscriptions = [n] : o.push(n), n
            }, t.prototype.remove = function(t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                }
            }, t.EMPTY = function(t) {
                return t.closed = !0, t
            }(new t), t
        }();

    function ft(t) {
        return t.reduce((function(t, e) {
            return t.concat(e instanceof lt ? e.errors : e)
        }), [])
    }
    var pt = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }(),
        dt = function(t) {
            function e(n, r, i) {
                var o = t.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = ct;
                        break;
                    case 1:
                        if (!n) {
                            o.destination = ct;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof e ? (o.syncErrorThrowable = n.syncErrorThrowable, o.destination = n, n.add(o)) : (o.syncErrorThrowable = !0, o.destination = new bt(o, n));
                            break
                        }
                        default:
                            o.syncErrorThrowable = !0, o.destination = new bt(o, n, r, i)
                }
                return o
            }
            return nt(e, t), e.prototype[pt] = function() {
                return this
            }, e.create = function(t, n, r) {
                var i = new e(t, n, r);
                return i.syncErrorThrowable = !1, i
            }, e.prototype.next = function(t) {
                this.isStopped || this._next(t)
            }, e.prototype.error = function(t) {
                this.isStopped || (this.isStopped = !0, this._error(t))
            }, e.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, e.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
            }, e.prototype._next = function(t) {
                this.destination.next(t)
            }, e.prototype._error = function(t) {
                this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, e.prototype._unsubscribeAndRecycle = function() {
                var t = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
            }, e
        }(ht),
        bt = function(t) {
            function e(e, n, r, i) {
                var o, s = t.call(this) || this;
                s._parentSubscriber = e;
                var c = s;
                return rt(n) ? o = n : n && (o = n.next, r = n.error, i = n.complete, n !== ct && (rt((c = Object.create(n)).unsubscribe) && s.add(c.unsubscribe.bind(c)), c.unsubscribe = s.unsubscribe.bind(s))), s._context = c, s._next = o, s._error = r, s._complete = i, s
            }
            return nt(e, t), e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    ot.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber,
                        n = ot.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                    else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : st(t), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw t;
                        st(t)
                    }
                }
            }, e.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return t._complete.call(t._context)
                        };
                        ot.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    if (this.unsubscribe(), ot.useDeprecatedSynchronousErrorHandling) throw t;
                    st(t)
                }
            }, e.prototype.__tryOrSetError = function(t, e, n) {
                if (!ot.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return ot.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (st(e), !0)
                }
                return !1
            }, e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(dt);
    var gt = function() {
        return "function" == typeof Symbol && Symbol.observable || "@@observable"
    }();

    function mt(t) {
        return t
    }

    function vt(t) {
        return 0 === t.length ? mt : 1 === t.length ? t[0] : function(e) {
            return t.reduce((function(t, e) {
                return e(t)
            }), e)
        }
    }
    var yt = function() {
        function t(t) {
            this._isScalar = !1, t && (this._subscribe = t)
        }
        return t.prototype.lift = function(e) {
            var n = new t;
            return n.source = this, n.operator = e, n
        }, t.prototype.subscribe = function(t, e, n) {
            var r = this.operator,
                i = function(t, e, n) {
                    if (t) {
                        if (t instanceof dt) return t;
                        if (t[pt]) return t[pt]()
                    }
                    return t || e || n ? new dt(t, e, n) : new dt(ct)
                }(t, e, n);
            if (r ? i.add(r.call(i, this.source)) : i.add(this.source || ot.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), ot.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
            return i
        }, t.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                ot.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), ! function(t) {
                    for (; t;) {
                        var e = t,
                            n = e.closed,
                            r = e.destination,
                            i = e.isStopped;
                        if (n || i) return !1;
                        t = r && r instanceof dt ? r : null
                    }
                    return !0
                }(t) ? console.warn(e) : t.error(e)
            }
        }, t.prototype.forEach = function(t, e) {
            var n = this;
            return new(e = _t(e))((function(e, r) {
                var i;
                i = n.subscribe((function(e) {
                    try {
                        t(e)
                    } catch (t) {
                        r(t), i && i.unsubscribe()
                    }
                }), r, e)
            }))
        }, t.prototype._subscribe = function(t) {
            var e = this.source;
            return e && e.subscribe(t)
        }, t.prototype[gt] = function() {
            return this
        }, t.prototype.pipe = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : vt(t)(this)
        }, t.prototype.toPromise = function(t) {
            var e = this;
            return new(t = _t(t))((function(t, n) {
                var r;
                e.subscribe((function(t) {
                    return r = t
                }), (function(t) {
                    return n(t)
                }), (function() {
                    return t(r)
                }))
            }))
        }, t.create = function(e) {
            return new t(e)
        }, t
    }();

    function _t(t) {
        if (t || (t = ot.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
    }
    var wt = function() {
            function t() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }
            return t.prototype = Object.create(Error.prototype), t
        }(),
        xt = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.subject = e, r.subscriber = n, r.closed = !1, r
            }
            return nt(e, t), e.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject,
                        e = t.observers;
                    if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                        var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                    }
                }
            }, e
        }(ht),
        Et = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.destination = e, n
            }
            return nt(e, t), e
        }(dt),
        St = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }
            return nt(e, t), e.prototype[pt] = function() {
                return new Et(this)
            }, e.prototype.lift = function(t) {
                var e = new At(this, this);
                return e.operator = t, e
            }, e.prototype.next = function(t) {
                if (this.closed) throw new wt;
                if (!this.isStopped)
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t)
            }, e.prototype.error = function(t) {
                if (this.closed) throw new wt;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function() {
                if (this.closed) throw new wt;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function(e) {
                if (this.closed) throw new wt;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function(t) {
                if (this.closed) throw new wt;
                return this.hasError ? (t.error(this.thrownError), ht.EMPTY) : this.isStopped ? (t.complete(), ht.EMPTY) : (this.observers.push(t), new xt(this, t))
            }, e.prototype.asObservable = function() {
                var t = new yt;
                return t.source = this, t
            }, e.create = function(t, e) {
                return new At(t, e)
            }, e
        }(yt),
        At = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.destination = e, r.source = n, r
            }
            return nt(e, t), e.prototype.next = function(t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function(t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : ht.EMPTY
            }, e
        }(St),
        Ct = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._value = e, n
            }
            return nt(e, t), Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._subscribe = function(e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value), n
            }, e.prototype.getValue = function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new wt;
                return this._value
            }, e.prototype.next = function(e) {
                t.prototype.next.call(this, this._value = e)
            }, e
        }(St);

    function It() {}
    var kt = function() {
            function t(t, e, n) {
                this.nextOrObserver = t, this.error = e, this.complete = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Tt(t, this.nextOrObserver, this.error, this.complete))
            }, t
        }(),
        Tt = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o._tapNext = It, o._tapError = It, o._tapComplete = It, o._tapError = r || It, o._tapComplete = i || It, rt(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || It, o._tapError = n.error || It, o._tapComplete = n.complete || It), o
            }
            return nt(e, t), e.prototype._next = function(t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(t)
            }, e.prototype._error = function(t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }, e.prototype._complete = function() {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }, e
        }(dt);

    function Ot() {
        return function(t) {
            return t.lift(new Pt(t))
        }
    }
    var Pt = function() {
            function t(t) {
                this.connectable = t
            }
            return t.prototype.call = function(t, e) {
                var n = this.connectable;
                n._refCount++;
                var r = new jt(t, n),
                    i = e.subscribe(r);
                return r.closed || (r.connection = n.connect()), i
            }, t
        }(),
        jt = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }
            return nt(e, t), e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._refCount;
                    if (e <= 0) this.connection = null;
                    else if (t._refCount = e - 1, e > 1) this.connection = null;
                    else {
                        var n = this.connection,
                            r = t._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, e
        }(dt),
        Rt = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }
            return nt(e, t), e.prototype._subscribe = function(t) {
                return this.getSubject().subscribe(t)
            }, e.prototype.getSubject = function() {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, e.prototype.connect = function() {
                var t = this._connection;
                return t || (this._isComplete = !1, (t = this._connection = new ht).add(this.source.subscribe(new Lt(this.getSubject(), this))), t.closed && (this._connection = null, t = ht.EMPTY)), t
            }, e.prototype.refCount = function() {
                return Ot()(this)
            }, e
        }(yt),
        Nt = function() {
            var t = Rt.prototype;
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
                    value: t._subscribe
                },
                _isComplete: {
                    value: t._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: t.getSubject
                },
                connect: {
                    value: t.connect
                },
                refCount: {
                    value: t.refCount
                }
            }
        }(),
        Lt = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }
            return nt(e, t), e.prototype._error = function(e) {
                this._unsubscribe(), t.prototype._error.call(this, e)
            }, e.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                }
            }, e
        }(Et);
    var Mt = function() {
        function t(t, e) {
            this.subjectFactory = t, this.selector = e
        }
        return t.prototype.call = function(t, e) {
            var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(t);
            return i.add(e.subscribe(r)), i
        }, t
    }();

    function Ut() {
        return new St
    }

    function Dt() {
        return function(t) {
            return Ot()((e = Ut, function(t) {
                var r;
                if (r = "function" == typeof e ? e : function() {
                        return e
                    }, "function" == typeof n) return t.lift(new Mt(r, n));
                var i = Object.create(t, Nt);
                return i.source = t, i.subjectFactory = r, i
            })(t));
            var e, n
        }
    }

    function Ft(t, e) {
        return function(n) {
            return n.lift(new Ht(t, e))
        }
    }
    var $t, Vt, Bt, Ht = function() {
            function t(t, e) {
                this.predicate = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new qt(t, this.predicate, this.thisArg))
            }, t
        }(),
        qt = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.thisArg = r, i.count = 0, i
            }
            return nt(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.destination.next(t)
            }, e
        }(dt);

    function zt(t, e) {
        return function(n, r) {
            return e(n(t(r)), r)
        }
    }

    function Gt(t) {
        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
        return n
    }

    function Yt(t, e) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function Wt(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }! function(t) {
        t.optic = function(t, e) {
            return {
                get: t,
                set: e,
                modify: zt(t, e)
            }
        }
    }($t || ($t = {})),
    function(t) {
        t.create = function t(e, n) {
            return {
                get: e,
                set: n,
                modify: zt(e, n),
                compose: function(r) {
                    return t((function(t) {
                        var n = e(t);
                        return void 0 !== n ? r.get(n) : void 0
                    }), (function(t, i) {
                        var o = e(i);
                        return void 0 !== o ? n(r.set(t, o), i) : i
                    }))
                }
            }
        }
    }(Vt || (Vt = {})),
    function(t) {
        function e(t, n) {
            return {
                get: t,
                set: n,
                modify: zt(t, n),
                compose: function(r) {
                    return e((function(e) {
                        return r.get(t(e))
                    }), (function(e, i) {
                        return n(r.set(e, t(i)), i)
                    }))
                }
            }
        }
        t.create = e, t.compose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (0 === t.length) throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
            if (1 === t.length) return t[0];
            var n = t[0];
            return t.slice(1).forEach((function(t) {
                n = n.compose(t)
            })), n
        };
        var n = e((function(t) {
            return t
        }), (function(t, e) {
            return t
        }));
        t.identity = function() {
            return n
        };
        var r = Vt.create((function(t) {}), (function(t, e) {
            return e
        }));
        t.nothing = function() {
            return r
        }
    }(Bt || (Bt = {}));
    var Jt, Xt, Kt, Zt, Qt = function() {
            var t = Object.prototype.toString;
            return "[object Arguments]" === t.call(arguments) ? function(e) {
                return "[object Arguments]" === t.call(e)
            } : function(t) {
                return Yt("callee", t)
            }
        }(),
        te = (Jt = !{
            toString: null
        }.propertyIsEnumerable("toString"), Xt = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Kt = function() {
            return arguments.propertyIsEnumerable("length")
        }(), Zt = function(t, e) {
            for (var n = 0; n < t.length;) {
                if (t[n] === e) return !0;
                n += 1
            }
            return !1
        }, "function" != typeof Object.keys || Kt ? function(t) {
            if (Object(t) !== t) return [];
            var e, n, r = [],
                i = Kt && Qt(t);
            for (e in t) !Yt(e, t) || i && "length" === e || (r[r.length] = e);
            if (Jt)
                for (n = Xt.length - 1; n >= 0;) Yt(e = Xt[n], t) && !Zt(r, e) && (r[r.length] = e), n -= 1;
            return r
        } : function(t) {
            return Object(t) !== t ? [] : Object.keys(t)
        });

    function ee(t) {
        return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
    }

    function ne(t, e, n, r) {
        if (void 0 === n && (n = []), void 0 === r && (r = []), Wt(t, e)) return !0;
        if (ee(t) !== ee(e)) return !1;
        if (null == t || null == e) return !1;
        if ("function" == typeof t.equals || "function" == typeof e.equals) return "function" == typeof t.equals && t.equals(e) && "function" == typeof e.equals && e.equals(t);
        switch (ee(t)) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof t.constructor && "Promise" === (i = t.constructor, null == (o = String(i).match(/^function (\w*)/)) ? "" : o[1])) return t === e;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof t != typeof e || !Wt(t.valueOf(), e.valueOf())) return !1;
                break;
            case "Date":
                if (!Wt(t.valueOf(), e.valueOf())) return !1;
                break;
            case "Error":
                return t.name === e.name && t.message === e.message;
            case "RegExp":
                if (t.source !== e.source || t.global !== e.global || t.ignoreCase !== e.ignoreCase || t.multiline !== e.multiline || t.sticky !== e.sticky || t.unicode !== e.unicode) return !1;
                break;
            case "Map":
            case "Set":
                if (!ne(Gt(t.entries()), Gt(e.entries()), n, r)) return !1;
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
        var i, o, s = te(t);
        if (s.length !== te(e).length) return !1;
        for (var c = n.length - 1; c >= 0;) {
            if (n[c] === t) return r[c] === e;
            c -= 1
        }
        for (n.push(t), r.push(e), c = s.length - 1; c >= 0;) {
            var a = s[c];
            if (!Yt(a, e) || !ne(e[a], t[a], n, r)) return !1;
            c -= 1
        }
        return n.pop(), r.pop(), !0
    }
    var re = void 0 !== n(27061) && !1;

    function ie(t, e, n) {
        if (t in n && ne(e, n[t])) return n;
        var r = {};
        for (var i in n) r[i] = n[i];
        return r[t] = e, r
    }

    function oe(t) {
        return function(e, n) {
            return function(t, e) {
                return ne(t, e) ? e : t
            }(t(e, n), n)
        }
    }
    var se = new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
    new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "(\\$_\\$wf\\(\\d+\\);)?", "return\\s", "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));

    function ce(t) {
        return function(t) {
            var e = se,
                n = t.match(e);
            if (n && n[2]) return n[2].split(".");
            throw new TypeError('Expected a property expression, got "' + t + '".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"')
        }(t.toString())
    }

    function ae(t) {
        return void 0 === t ? function(t) {
            return Bt.create((function(e) {
                return e[t]
            }), (function(e, n) {
                return ie(t, e, n)
            }))
        } : Bt.create((function(e) {
            return e[t]
        }), (function(e, n) {
            return ie(t, e, n)
        }))
    }
    var ue = 0;

    function le(t) {
        if (ue < 10) {
            ue++;
            var e = "x." + t.join("."),
                n = "'" + t.join("', '") + "'";
            ! function(t) {
                "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + t);
                try {
                    throw new Error(t)
                } catch (t) {}
            }("The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => " + e + ") to a.lens(" + n + "),\n  Lens.prop((x: T) => " + e + ") to Lens.key<T>()(" + n + ").")
        }
    }

    function he(t) {
        return t && "function" == typeof t.schedule
    }
    Bt.key = ae, Bt.prop = function(t) {
        var e = ce(t);
        return re && le(e), Bt.compose.apply(Bt, e.map(ae()))
    }, Bt.index = function(t) {
        if (t < 0) throw new TypeError(t + " is not a valid array index, expected >= 0");
        return Vt.create((function(e) {
            return e[t]
        }), (function(e, n) {
            return n.length <= t ? n.concat(Array(t - n.length), [e]) : ne(e, n[t]) ? n : n.slice(0, t).concat([e], n.slice(t + 1))
        }))
    }, Bt.withDefault = function(t) {
        return Bt.replace(void 0, t)
    }, Bt.replace = function(t, e) {
        return Bt.create((function(n) {
            return ne(n, t) ? e : n
        }), oe((function(n) {
            return ne(n, e) ? t : n
        })))
    }, Bt.find = function(t) {
        return e = function(e) {
            var n = function(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n])) return n;
                return -1
            }(e, t);
            return n < 0 ? Bt.nothing() : Bt.index(n)
        }, Bt.create((function(t) {
            return e(t).get(t)
        }), (function(t, n) {
            return e(n).set(t, n)
        }));
        var e
    };
    var fe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return nt(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyError = function(t, e) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function(t) {
                this.destination.complete()
            }, e
        }(dt),
        pe = function(t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, e.prototype._error = function(t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, e
        }(dt),
        de = function(t) {
            return function(e) {
                for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                e.complete()
            }
        };

    function be() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }
    var ge = be(),
        me = function(t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };

    function ve(t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }
    var ye = function(t) {
        if (t && "function" == typeof t[gt]) return r = t,
            function(t) {
                var e = r[gt]();
                if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return e.subscribe(t)
            };
        if (me(t)) return de(t);
        if (ve(t)) return n = t,
            function(t) {
                return n.then((function(e) {
                    t.closed || (t.next(e), t.complete())
                }), (function(e) {
                    return t.error(e)
                })).then(null, st), t
            };
        if (t && "function" == typeof t[ge]) return e = t,
            function(t) {
                for (var n = e[ge]();;) {
                    var r = void 0;
                    try {
                        r = n.next()
                    } catch (e) {
                        return t.error(e), t
                    }
                    if (r.done) {
                        t.complete();
                        break
                    }
                    if (t.next(r.value), t.closed) break
                }
                return "function" == typeof n.return && t.add((function() {
                    n.return && n.return()
                })), t
            };
        var e, n, r, i = ut(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + i + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function _e(t, e, n, r, i) {
        if (void 0 === i && (i = new pe(t, n, r)), !i.closed) return e instanceof yt ? e.subscribe(i) : ye(e)(i)
    }

    function we(t, e) {
        return new yt((function(n) {
            var r = new ht,
                i = 0;
            return r.add(e.schedule((function() {
                i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
            }))), r
        }))
    }

    function xe(t, e) {
        return e ? we(t, e) : new yt(de(t))
    }
    var Ee = {};

    function Se() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = void 0,
            r = void 0;
        return he(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && at(t[0]) && (t = t[0]), xe(t, r).lift(new Ie(n))
    }
    var Ae, Ce, Ie = function() {
            function t(t) {
                this.resultSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new ke(t, this.resultSelector))
            }, t
        }(),
        ke = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.values.push(Ee), this.observables.push(t)
            }, e.prototype._complete = function() {
                var t = this.observables,
                    e = t.length;
                if (0 === e) this.destination.complete();
                else {
                    this.active = e, this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(_e(this, r, void 0, n))
                    }
                }
            }, e.prototype.notifyComplete = function(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }, e.prototype.notifyNext = function(t, e, n) {
                var r = this.values,
                    i = r[n],
                    o = this.toRespond ? i === Ee ? --this.toRespond : this.toRespond : 0;
                r[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
            }, e.prototype._tryResultSelector = function(t) {
                var e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(fe),
        Te = function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        Oe = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], s = 0, c = o.length; s < c; s++, i++) r[i] = o[s];
            return r
        },
        Pe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Te(e, t), e.prototype.view = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return void 0 !== t[0] ? "function" == typeof t[0] ? new Le(this, t[0]) : "string" == typeof t[0] ? new Le(this, Bt.compose.apply(Bt, t.map(Bt.key())).get) : new Le(this, (function(e) {
                    return t[0].get(e)
                })) : this
            }, e
        }(Ct),
        je = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Te(e, t), e.prototype.set = function(t) {
                this.modify((function() {
                    return t
                }))
            }, e.prototype.lens = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return new Ne(this, "function" == typeof t ? Bt.prop(t) : "string" == typeof t ? Bt.compose.apply(Bt, Oe([Bt.key(t)], e.map((function(t) {
                    return Bt.key(t)
                })))) : t, ne)
            }, e
        }(Pe),
        Re = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Te(e, t), e.prototype.get = function() {
                return this.getValue()
            }, e.prototype.modify = function(t) {
                var e = this.getValue(),
                    n = t(e);
                ne(e, n) || this.next(n)
            }, e.prototype.set = function(t) {
                ne(this.getValue(), t) || this.next(t)
            }, e
        }(je),
        Ne = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = ne);
                var i = t.call(this, void 0) || this;
                return i._source = e, i._lens = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return Te(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._lens.get(this._source.get())
            }, e.prototype.modify = function(t) {
                var e = this;
                this._source.modify((function(n) {
                    return e._lens.modify(t, n)
                }))
            }, e.prototype.set = function(t) {
                var e = this;
                this._source.modify((function(n) {
                    return e._lens.set(t, n)
                }))
            }, e.prototype._onSourceValue = function(t) {
                var e = this.getValue(),
                    n = this._lens.get(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(t) {
                    return n._onSourceValue(t)
                }))), this._refCount++;
                var r = new ht((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(je),
        Le = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = ne);
                var i = t.call(this, void 0) || this;
                return i._source = e, i._getter = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return Te(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._getter(this._source.get())
            }, e.prototype._onSourceValue = function(t) {
                var e = this.getValue(),
                    n = this._getter(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(t) {
                    return n._onSourceValue(t)
                }))), this._refCount++;
                var r = new ht((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(Pe),
        Me = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = ne);
                var i = t.call(this, void 0) || this;
                return i._sources = e, i._combineFn = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return Te(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._combineFn(this._sources.map((function(t) {
                    return t.get()
                })))
            }, e.prototype._onSourceValues = function(t) {
                var e = this.getValue(),
                    n = this._combineFn(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = Se(this._sources).subscribe((function(t) {
                    return n._onSourceValues(t)
                }))), this._refCount++;
                var r = new ht((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(Pe);
    ! function(t) {
        t.create = function(t) {
            return new Re(t)
        }, t.log = function(t, e) {
            var n = function(t, e, n) {
                    return console.log("%c" + t, "color: " + e + "; font-weight: bold", n)
                },
                r = t.get();
            return t.subscribe((function(t) {
                "function" == typeof e ? e(r, t) : (console.group("UPDATE " + (e ? "TYPE: " + e + " " : "") + "@ " + (new Date).toTimeString()), n("prev state", "#9E9E9E", r), n("next state", "#4CAF50", t), console.groupEnd()), r = t
            })), t
        }, t.combine = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new Me(t.slice(void 0, -1), (function(e) {
                return t[t.length - 1].apply(t, e)
            }))
        }, t.fromObservable = function(e) {
            var n, r, i, o = new Ct(null),
                s = e.pipe((n = function(e) {
                    var n = o.value;
                    null === n ? o.next(t.create(e)) : n.set(e)
                }, function(t) {
                    return t.lift(new kt(n, r, i))
                }), Dt());
            return new yt((function(t) {
                var e = new ht;
                return e.add(o.pipe(Ft((function(t) {
                    return !!t
                }))).subscribe(t)), e.add(s.subscribe(void 0, (function(e) {
                    return t.error(e)
                }), (function() {
                    return t.complete()
                }))), e
            }))
        }
    }(Ae || (Ae = {}));
    class Ue {
        constructor(t, e = Ae.create(!1)) {
            this._enableHistoryLoggerInProd = e;
            const n = t.testArgs,
                r = n && n.processEnv ? n.processEnv : U.fromBrowserify(),
                i = D.getTargetEnv(r),
                o = "prod" !== i || "cs" !== t.context,
                s = {
                    create(n) {
                        return new Z(n, {
                            writer: new tt,
                            filterFn: o ? t => !0 : (r = z.ERROR, t => Y(t.level) >= Y(r))
                        }, {
                            ...t.historyLoggerExtraArgs,
                            enabledInProd: e
                        });
                        var r
                    }
                },
                c = function(t, e, n, r) {
                    const i = D.create(t, e, n, r);
                    return $.init(i), self.GR_CFG = $.get(), i
                }(t.browser, t.context, r, i);
            this.config = c, this.logger = s
        }
        static getInstance() {
            if (void 0 === this._instanceShared) throw new Error("Env not inited yet");
            return this._instanceShared
        }
        static initShared(t) {
            if (void 0 !== this._instanceShared) throw new Error("Env already inited");
            this._instanceShared = t
        }
        enableHistoryLoggerInProd() {
            this._enableHistoryLoggerInProd.get() || this._enableHistoryLoggerInProd.set(!0)
        }
    }! function(t) {
        t.create = function(t) {
            return new J(t, (() => Ue.getInstance().logger.create(t)))
        }
    }(Ce || (Ce = {}));
    const De = Ce.create("extension-api");
    var Fe = n(27061);
    let $e;

    function Ve(t) {
        if ($e) return $e;
        const e = (Fe && Fe.env, t);
        return $e = e, e
    }

    function Be() {
        return $e || Ve((q() ? y(self.extensionBackgroundPageApi, "background page extension api was not initialized") : y(self.extensionContentScriptApi, "content script extension api was not initialized")).message)
    }
    const He = function(t) {
            const e = {},
                n = t || {};
            return n.emit = function(t, n) {
                t = r(t);
                const i = e[t];
                if (!i) return;
                const o = i.concat();
                for (let t = 0; t < o.length; t++) o[t](n)
            }, n.emitArgs = function(t) {
                t = r(t);
                const n = e[t],
                    i = [].slice.call(arguments, 1);
                if (!n) return;
                const o = n.concat();
                for (let t = 0; t < o.length; t++) o[t].apply(null, i)
            }, n.on = function(t, i) {
                return t = r(t), e[t] = e[t] || [], e[t].push(i), {
                    un: function() {
                        n.un(t, i)
                    }
                }
            }, n.off = n.un = function(t, n) {
                t = r(t);
                const i = e[t];
                if (!i) return;
                const o = i.indexOf(n);
                o > -1 && (i.splice(o, 1), i.length > 0 || delete e[t])
            }, n.one = function(t, e) {
                const r = n.on(t, ((...t) => {
                    r.un(), e.apply(null, t)
                }))
            }, n.delegate = function(t, e, i) {
                e = r(e), n.on(e, (function(n) {
                    t.emit(i || e, n)
                }))
            }, n;

            function r(t) {
                return "string" != typeof t ? t.join(" ") : t
            }
        }({}),
        qe = {};

    function ze(t) {
        const e = Be();
        "content-script-message-api" === e.kind && e.onBackgroundPortReconnect && e.onBackgroundPortReconnect(t)
    }
    const Ge = function(t, e) {
        let n, r, i = !0;

        function o(t, n = []) {
            return i && (i = !1, r = u.createCompletionSource(), setTimeout((() => {
                try {
                    r.resolve(e(...n))
                } catch (t) {
                    r.reject(t)
                } finally {
                    i = !0
                }
            }), t)), r.promise
        }
        return (...e) => {
            const r = n;
            return n = Date.now(), o(void 0 === r || n - r >= t ? 0 : t - (n - r), e)
        }
    }(1e3, (t => He.emit("__bgerror", t)));

    function Ye(t) {
        Ve(t), self.document && a(self.document, "grammarly:offline", (() => Ge("proxy dead")), void 0)
    }

    function We(t, e) {
        Je(t, (function n(...r) {
            Xe(t, n), e.apply(this, r)
        }))
    }

    function Je(t, e) {
        if ("__bgerror" === t) return void He.on("__bgerror", e);
        const n = qe[t] = qe[t] || [];
        if (n.push(e), 1 === n.length) try {
            Be().listen(t, ((...t) => {
                for (const e of n) e(...t)
            }))
        } catch (t) {
            Ge(t)
        }
    }

    function Xe(t, e) {
        if ("__bgerror" === t) return void He.off("__bgerror", e);
        const n = qe[t];
        if (!n) return;
        const r = n.indexOf(e); - 1 !== r && n.splice(r, 1), 0 === n.length && delete qe[t]
    }

    function Ke(t) {
        try {
            const e = Be();
            switch (e.kind) {
                case "background-message-api":
                    e.broadcast(t, {});
                    break;
                default:
                    throw new Error("emitTabs can be used only on background")
            }
        } catch (t) {
            Ge(t)
        }
    }

    function Ze(t, e, n = {}, r = g, i = g, o) {
        try {
            if (!t) throw TypeError("emitTo can't be used without destination point");
            const s = Be();
            switch (s.kind) {
                case "background-message-api":
                    s.sendTo(t, e, n, r, i, o);
                    break;
                default:
                    throw new Error("emitTo can be used only on background")
            }
        } catch (t) {
            Ge(t)
        }
    }

    function Qe() {
        const t = Be();
        if ("background-message-api" === t.kind) return t.topFrameId;
        throw new Error("topFrameId can only be retreived on background")
    }

    function tn(t, e) {
        try {
            Be().toFocused(t, e)
        } catch (t) {
            Ge(t)
        }
    }

    function en(t, e, n, r) {
        try {
            const i = Be();
            switch (i.kind) {
                case "content-script-message-api":
                    i.broadcastBackground(t, e, n, r);
                    break;
                default:
                    throw new Error("emitBackground can be used only in content script")
            }
        } catch (t) {
            Ge(t)
        }
    }

    function nn(t, e = {}, n = 1e4) {
        const r = new Promise(((n, r) => {
            try {
                const i = Be();
                switch (i.kind) {
                    case "content-script-message-api":
                        i.broadcastBackground(t, e, n, r);
                        break;
                    default:
                        throw new Error("promiseBackground can be used only on client scripts")
                }
            } catch (t) {
                r(t), Ge(t)
            }
        }));
        return Promise.race([r, s(n).then((() => {
            throw new Error(`Request to bg page (${$e}) rejected by timeout`)
        }))])
    }

    function rn(t, e) {
        return function(n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new on(t, e))
        }
    }
    var on = function() {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new sn(t, this.project, this.thisArg))
            }, t
        }(),
        sn = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.project = n, i.count = 0, i.thisArg = r || i, i
            }
            return nt(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(dt);

    function cn(t, e, n, r) {
        return rt(n) && (r = n, n = void 0), r ? cn(t, e, n).pipe(rn((function(t) {
            return at(t) ? r.apply(void 0, t) : r(t)
        }))) : new yt((function(r) {
            an(t, e, (function(t) {
                arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
            }), r, n)
        }))
    }

    function an(t, e, n, r, i) {
        var o;
        if (function(t) {
                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
            }(t)) {
            var s = t;
            t.addEventListener(e, n, i), o = function() {
                return s.removeEventListener(e, n, i)
            }
        } else if (function(t) {
                return t && "function" == typeof t.on && "function" == typeof t.off
            }(t)) {
            var c = t;
            t.on(e, n), o = function() {
                return c.off(e, n)
            }
        } else if (function(t) {
                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
            }(t)) {
            var a = t;
            t.addListener(e, n), o = function() {
                return a.removeListener(e, n)
            }
        } else {
            if (!t || !t.length) throw new TypeError("Invalid event target");
            for (var u = 0, l = t.length; u < l; u++) an(t[u], e, n, r, i)
        }
        r.add(o)
    }
    var un = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r.pending = !1, r
            }
            return nt(e, t), e.prototype.schedule = function(t, e) {
                if (void 0 === e && (e = 0), this.closed) return this;
                this.state = t;
                var n = this.id,
                    r = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
            }, e.prototype.requestAsyncId = function(t, e, n) {
                return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
            }, e.prototype.recycleAsyncId = function(t, e, n) {
                if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                clearInterval(e)
            }, e.prototype.execute = function(t, e) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(t, e);
                if (n) return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, e.prototype._execute = function(t, e) {
                var n = !1,
                    r = void 0;
                try {
                    this.work(t)
                } catch (t) {
                    n = !0, r = !!t && t || new Error(t)
                }
                if (n) return this.unsubscribe(), r
            }, e.prototype._unsubscribe = function() {
                var t = this.id,
                    e = this.scheduler,
                    n = e.actions,
                    r = n.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
            }, e
        }(function(t) {
            function e(e, n) {
                return t.call(this) || this
            }
            return nt(e, t), e.prototype.schedule = function(t, e) {
                return void 0 === e && (e = 0), this
            }, e
        }(ht)),
        ln = function() {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = function() {
                return Date.now()
            }, t
        }(),
        hn = function(t) {
            function e(n, r) {
                void 0 === r && (r = ln.now);
                var i = t.call(this, n, (function() {
                    return e.delegate && e.delegate !== i ? e.delegate.now() : r()
                })) || this;
                return i.actions = [], i.active = !1, i.scheduled = void 0, i
            }
            return nt(e, t), e.prototype.schedule = function(n, r, i) {
                return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
            }, e.prototype.flush = function(t) {
                var e = this.actions;
                if (this.active) e.push(t);
                else {
                    var n;
                    this.active = !0;
                    do {
                        if (n = t.execute(t.state, t.delay)) break
                    } while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }
            }, e
        }(ln),
        fn = new hn(un);

    function pn(t, e) {
        var n;
        return void 0 === t && (t = 0), void 0 === e && (e = fn), (at(n = t) || !(n - parseFloat(n) + 1 >= 0) || t < 0) && (t = 0), e && "function" == typeof e.schedule || (e = fn), new yt((function(n) {
            return n.add(e.schedule(dn, t, {
                subscriber: n,
                counter: 0,
                period: t
            })), n
        }))
    }

    function dn(t) {
        var e = t.subscriber,
            n = t.counter,
            r = t.period;
        e.next(n), this.schedule({
            subscriber: e,
            counter: n + 1,
            period: r
        }, r)
    }
    var bn = function() {
            function t() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return t.prototype = Object.create(Error.prototype), t
        }(),
        gn = function() {
            function t() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }
            return t.prototype = Object.create(Error.prototype), t
        }(),
        mn = new yt((function(t) {
            return t.complete()
        }));

    function vn(t) {
        return t ? function(t) {
            return new yt((function(e) {
                return t.schedule((function() {
                    return e.complete()
                }))
            }))
        }(t) : mn
    }

    function yn(t) {
        return function(e) {
            return 0 === t ? vn() : e.lift(new _n(t))
        }
    }
    var _n = function() {
            function t(t) {
                if (this.total = t, this.total < 0) throw new gn
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new wn(t, this.total))
            }, t
        }(),
        wn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.count = 0, r
            }
            return nt(e, t), e.prototype._next = function(t) {
                var e = this.total,
                    n = ++this.count;
                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
            }, e
        }(dt);

    function xn(t) {
        return void 0 === t && (t = null),
            function(e) {
                return e.lift(new En(t))
            }
    }
    var En = function() {
            function t(t) {
                this.defaultValue = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Sn(t, this.defaultValue))
            }, t
        }(),
        Sn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.isEmpty = !1, this.destination.next(t)
            }, e.prototype._complete = function() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, e
        }(dt);

    function An(t) {
        return void 0 === t && (t = kn),
            function(e) {
                return e.lift(new Cn(t))
            }
    }
    var Cn = function() {
            function t(t) {
                this.errorFactory = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new In(t, this.errorFactory))
            }, t
        }(),
        In = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.errorFactory = n, r.hasValue = !1, r
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.hasValue = !0, this.destination.next(t)
            }, e.prototype._complete = function() {
                if (this.hasValue) return this.destination.complete();
                var t = void 0;
                try {
                    t = this.errorFactory()
                } catch (e) {
                    t = e
                }
                this.destination.error(t)
            }, e
        }(dt);

    function kn() {
        return new bn
    }
    var Tn = function() {
            function t(t) {
                this.value = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new On(t, this.value))
            }, t
        }(),
        On = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.value = n, r
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.destination.next(this.value)
            }, e
        }(dt);

    function Pn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return he(n) ? (t.pop(), we(t, n)) : xe(t)
    }

    function jn(t, e) {
        if (null != t) {
            if (function(t) {
                    return t && "function" == typeof t[gt]
                }(t)) return function(t, e) {
                return new yt((function(n) {
                    var r = new ht;
                    return r.add(e.schedule((function() {
                        var i = t[gt]();
                        r.add(i.subscribe({
                            next: function(t) {
                                r.add(e.schedule((function() {
                                    return n.next(t)
                                })))
                            },
                            error: function(t) {
                                r.add(e.schedule((function() {
                                    return n.error(t)
                                })))
                            },
                            complete: function() {
                                r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            }
                        }))
                    }))), r
                }))
            }(t, e);
            if (ve(t)) return function(t, e) {
                return new yt((function(n) {
                    var r = new ht;
                    return r.add(e.schedule((function() {
                        return t.then((function(t) {
                            r.add(e.schedule((function() {
                                n.next(t), r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            })))
                        }), (function(t) {
                            r.add(e.schedule((function() {
                                return n.error(t)
                            })))
                        }))
                    }))), r
                }))
            }(t, e);
            if (me(t)) return we(t, e);
            if (function(t) {
                    return t && "function" == typeof t[ge]
                }(t) || "string" == typeof t) return function(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new yt((function(n) {
                    var r, i = new ht;
                    return i.add((function() {
                        r && "function" == typeof r.return && r.return()
                    })), i.add(e.schedule((function() {
                        r = t[ge](), i.add(e.schedule((function() {
                            if (!n.closed) {
                                var t, e;
                                try {
                                    var i = r.next();
                                    t = i.value, e = i.done
                                } catch (t) {
                                    return void n.error(t)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        })))
                    }))), i
                }))
            }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
    }

    function Rn(t, e) {
        return e ? jn(t, e) : t instanceof yt ? t : new yt(ye(t))
    }
    var Nn = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.parent = e, n
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.parent.notifyNext(t)
            }, e.prototype._error = function(t) {
                this.parent.notifyError(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.parent.notifyComplete(), this.unsubscribe()
            }, e
        }(dt),
        Ln = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return nt(e, t), e.prototype.notifyNext = function(t) {
                this.destination.next(t)
            }, e.prototype.notifyError = function(t) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function() {
                this.destination.complete()
            }, e
        }(dt);

    function Mn(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
            return r.pipe(Mn((function(n, r) {
                return Rn(t(n, r)).pipe(rn((function(t, i) {
                    return e(n, t, r, i)
                })))
            }), n))
        } : ("number" == typeof e && (n = e), function(e) {
            return e.lift(new Un(t, n))
        })
    }
    var Un = function() {
            function t(t, e) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Dn(t, this.project, this.concurrent))
            }, t
        }(),
        Dn = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var i = t.call(this, e) || this;
                return i.project = n, i.concurrent = r, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
            }
            return nt(e, t), e.prototype._next = function(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++, this._innerSub(e)
            }, e.prototype._innerSub = function(t) {
                var e = new Nn(this),
                    n = this.destination;
                n.add(e);
                var r = function(t, e) {
                    if (!e.closed) return t instanceof yt ? t.subscribe(e) : ye(t)(e)
                }(t, e);
                r !== e && n.add(r)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t) {
                this.destination.next(t)
            }, e.prototype.notifyComplete = function() {
                var t = this.buffer;
                this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(Ln);

    function Fn(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), Mn(mt, t)
    }

    function $n() {
        return Fn(1)
    }

    function Vn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return $n()(Pn.apply(void 0, t))
    }

    function Bn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return he(n) ? (t.pop(), function(e) {
            return Vn(t, e, n)
        }) : function(e) {
            return Vn(t, e)
        }
    }

    function Hn(t, e) {
        return function(n) {
            return n.lift(new qn(t, e))
        }
    }
    var qn = function() {
            function t(t, e) {
                this.compare = t, this.keySelector = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new zn(t, this.compare, this.keySelector))
            }, t
        }(),
        zn = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.keySelector = r, i.hasKey = !1, "function" == typeof n && (i.compare = n), i
            }
            return nt(e, t), e.prototype.compare = function(t, e) {
                return t === e
            }, e.prototype._next = function(t) {
                var e;
                try {
                    var n = this.keySelector;
                    e = n ? n(t) : t
                } catch (t) {
                    return this.destination.error(t)
                }
                var r = !1;
                if (this.hasKey) try {
                    r = (0, this.compare)(this.key, e)
                } catch (t) {
                    return this.destination.error(t)
                } else this.hasKey = !0;
                r || (this.key = e, this.destination.next(t))
            }, e
        }(dt);
    class Gn {
        constructor() {
            this._storage = this._storage || {}
        }
        get _storage() {
            return self.__CS_SHARE_STORAGE__
        }
        set _storage(t) {
            self.__CS_SHARE_STORAGE__ = t
        }
        clean() {
            this._storage = {}
        }
        set(t, e) {
            this._storage[t] = e
        }
        get(t) {
            return this._storage[t]
        }
        getOnce(t) {
            const e = this._storage[t];
            return this.remove(t), e
        }
        remove(t) {
            delete this._storage[t]
        }
    }
    class Yn {
        constructor(t, e, n = m.create(), r = t) {
            this._rpcMessageName = t, this._message = e, this._clientId = n, this._inboundMessageName = r, this.inbound = new yt((t => {
                const e = e => {
                    e.clientId === this._clientId && t.next(e.data)
                };
                return this._message.on(this._inboundMessageName, e), () => this._message.off(this._inboundMessageName, e)
            })), this.outbound = t => {
                this._message.emitBackground(this._rpcMessageName, {
                    clientId: this._clientId,
                    data: t
                })
            }
        }
    }
    class Wn extends class {
        constructor(t, e) {
            this._transport = t, this._log = e, this._calls = new Map, this._sub = this._transport.inbound.subscribe((t => {
                var e;
                const n = this._calls.get(t.id);
                if (n) try {
                    "err" in t ? n.reject(t.err) : n.resolve(t.res)
                } finally {
                    this._calls.delete(t.id)
                } else null === (e = this._log) || void 0 === e || e.warn(`received rpc call response for unregistered call ${t.id}`)
            })), this.api = new Proxy({}, {
                get: (t, e) => "then" === e ? void 0 : (...t) => this._handleCall(e, t)
            })
        }
        _handleCall(t, e) {
            let n = m.create();
            for (; this._calls.has(n);) n = m.create();
            const r = u.createCompletionSource();
            return this._calls.set(n, r), this._transport.outbound({
                id: n,
                method: t,
                args: e
            }), r.promise
        }
        dispose() {
            this._sub.unsubscribe()
        }
    } {
        constructor(t) {
            super(new Yn("cs-to-bg-rpc-1557421403805", t))
        }
    }

    function Jn(t) {
        return "tunnel" !== t.tag
    }
    var Xn;
    ! function(t) {
        t.isSubscribe = t => "action" in t.data && "subscribe" === t.data.action, t.isUnsubscribe = t => "action" in t.data && "unsubscribe" === t.data.action, t.isDispose = t => "action" in t.data && "dispose" === t.data.action, t.isPong = t => "pong" in t.data, t.isPing = t => "ping" in t.data, t.isObservableResult = t => "subscribableId" in t
    }(Xn || (Xn = {}));
    const Kn = Symbol();
    var Zn;

    function Qn(t) {
        return t instanceof yt ? t : new yt((e => t.subscribe(e)))
    }! function(t) {
        t.measure = t => e => new yt((n => e.subscribe((e => t((() => n.next(e)))), (t => n.error(t)), (() => n.complete())))), t.using = (t, e) => function(t, e) {
            return new yt((function(n) {
                var r, i;
                try {
                    r = t()
                } catch (t) {
                    return void n.error(t)
                }
                try {
                    i = e(r)
                } catch (t) {
                    return void n.error(t)
                }
                var o = (i ? Rn(i) : mn).subscribe(n);
                return function() {
                    o.unsubscribe(), r && r.unsubscribe()
                }
            }))
        }(t, e), t.doNothing = t => t
    }(Zn || (Zn = {}));
    class tr {
        constructor(t, e, n = Ce.create(tr.name), r) {
            this._transport = t, this._observableTransport = e, this._log = n, this._serverId = r, this._calls = new Map, this._subscribeRelatedCalls = new Map, this._observables = new Map, this._subscribers = new Map, this._transportSubscription = Qn(this._transport.inbound).pipe(Ft(Jn)).subscribe((t => {
                this._processResponse(t)
            })), this._observableTransportSubscription = Qn(this._observableTransport.inbound).pipe(Ft(Jn)).subscribe((t => {
                this._processObservableMessage(t)
            })), this.api = new Proxy({}, {
                get: (t, e) => "then" === e ? void 0 : (...t) => this._handleCall(e, t)
            })
        }
        _processResponse(t) {
            const e = this._calls.get(t.id);
            if (e) try {
                if ("err" in t) e.reject(t.err);
                else if (Xn.isObservableResult(t)) try {
                    const n = new yt((e => this._createSubscribeHandler(t.subscribableId, e)));
                    this._observables.set(t.subscribableId, n), e.resolve(n)
                } catch (e) {
                    this._observables.delete(t.subscribableId)
                } else e.resolve(this.transformResult(t.res))
            } finally {
                this._calls.delete(t.id)
            } else this._log.warn(`received rpc call response for unregistered call ${t.id}`)
        }
        transformResult(t) {
            return t
        }
        _processObservableMessage(t) {
            if ("subscribed" in t) {
                const e = this._subscribeRelatedCalls.get(t.id);
                if (e) try {
                    e.resolve()
                } finally {
                    this._subscribeRelatedCalls.delete(t.id)
                } else this._log.warn(`received rpc call subscribed response for unregistered subscribe call ${t.id}`)
            } else if ("unsubscribed" in t) {
                const e = this._subscribeRelatedCalls.get(t.id);
                if (e) try {
                    e.resolve()
                } finally {
                    this._subscribeRelatedCalls.delete(t.id), this._subscribers.delete(t.id)
                } else this._log.warn(`received rpc call unsubscribed response for unregistered unsubscribe call ${t.id}`)
            } else if ("next" in t) try {
                const e = this._subscribers.get(t.subscriptionId);
                e ? e.subscriber.next(t.next) : this._log.warn(`received observable next message for unregistered subscription ${t.subscriptionId}`)
            } catch (e) {
                this._subscribers.delete(t.subscriptionId)
            } else if ("complete" in t) try {
                const e = this._subscribers.get(t.subscriptionId);
                e ? (e.subscriber.complete(), this._subscribers.delete(t.subscriptionId)) : this._log.warn(`received observable complete for unregistered subscription ${t.subscriptionId}`)
            } catch (e) {
                this._subscribers.delete(t.subscriptionId)
            } else if ("err" in t) try {
                const e = this._subscribers.get(t.subscriptionId);
                e ? e.subscriber.error(t.err) : this._log.warn(`received observable error for unregistered subscription  ${t.subscriptionId}`)
            } finally {
                this._subscribers.delete(t.subscriptionId)
            } else if ("subErr" in t) {
                const e = this._subscribeRelatedCalls.get(t.id);
                try {
                    const n = this._subscribers.get(t.id);
                    n ? n.subscriber.error(t.subErr) : this._log.warn(`received subscription error response for unregistered call ${t.id}`)
                } finally {
                    e && (e.reject(t.subErr), this._subscribeRelatedCalls.delete(t.id)), this._observables.delete(t.subscribableId), this._subscribers.delete(t.id)
                }
            } else if ("ping" in t) try {
                this._observables.get(t.ping) ? this._observableTransport.outbound({
                    pong: t.ping
                }) : this._log.warn(`received ping for unregistered observable ${t.ping}`)
            } finally {}
        }
        _handleCall(t, e) {
            let n = m.create();
            for (; this._calls.has(n);) n = m.create();
            const r = u.createCompletionSource();
            this._calls.set(n, r);
            const i = e.map((t => {
                return e = t, Boolean(e) && e._tag === Kn ? t.toJSON() : t;
                var e
            }));
            return this._transport.outbound({
                id: n,
                method: t,
                args: i,
                serverId: this._serverId
            }), r.promise
        }
        _createSubscribeHandler(t, e) {
            let n = m.create();
            for (; this._subscribeRelatedCalls.has(n);) n = m.create();
            const r = u.createCompletionSource();
            return this._subscribeRelatedCalls.set(n, r), this._observableTransport.outbound({
                id: n,
                subscribableId: t,
                action: "subscribe"
            }), this._subscribers.set(n, {
                subscribableId: t,
                subscriber: e
            }), () => {
                this._handleUnsubscribe(n, t)
            }
        }
        _handleUnsubscribe(t, e) {
            let n = m.create();
            for (; this._subscribeRelatedCalls.has(n);) n = m.create();
            const r = u.createCompletionSource();
            return this._subscribeRelatedCalls.set(n, r), this._observableTransport.outbound({
                id: n,
                subscriptionId: t,
                subscribableId: e,
                action: "unsubscribe"
            }), this._subscribers.delete(t), r.promise
        }
        dispose() {
            for (const t of this._observables.keys()) this._observableTransport.outbound({
                id: m.create(),
                subscribableId: t,
                action: "dispose"
            });
            this._observables.clear(), this._transportSubscription.unsubscribe(), this._observableTransportSubscription.unsubscribe(), this._calls.clear(), this._subscribeRelatedCalls.clear()
        }
    }
    class er extends tr {
        constructor(t) {
            super(new Yn("cs-to-bg-rpc-1587687052565", t), new Yn("cs-to-bg-observable-rpc-1587687052565", t))
        }
    }
    class nr extends Ue {
        constructor(e) {
            var n;
            super({
                browser: e.browser,
                context: "cs",
                historyLoggerExtraArgs: {
                    downloadFileName: "grammarly-cs-logs.tsv",
                    onDownload: () => {
                        var t;
                        null === (t = this.bgRpc) || void 0 === t || t.api.downloadBackgroundPageLogs()
                    }
                }
            }), this.browserApi = e.browserApi, Ye(e.browserApi.message), e.skipInitExtensionApi || (n = e.browserApi, self.extensionContentScriptApi && De.warn("Content Script Extension Api init called more than once"), self.extensionContentScriptApi = self.extensionContentScriptApi || n), this.bgRpc = new Wn(t), this.csShareStorage = new Gn, this.capiBgRpc = new er(t)
        }
        static getInstance() {
            if (void 0 === this._instance) throw new Error("Env not inited yet");
            return this._instance
        }
        static init(t) {
            if (void 0 !== this._instance) throw new Error("Env already inited");
            const e = new nr(t);
            return this._instance = e, Ue.initShared(e), e.browserApi.message.start && e.browserApi.message.start(), e
        }
    }
    const rr = 2147483641;
    var ir;
    ! function(t) {
        function e(t, e) {
            try {
                for (const n of Object.keys(e))
                    if (e[n] && e[n](t)) return n;
                return null
            } catch (t) {
                return null
            }
        }
        t.isSpecific = {
            draftJs: t => !(!t.hasAttribute("contenteditable") || !t.querySelector('[data-contents="true"] > [data-editor], [data-block]')),
            quill: t => t.classList.contains("ql-editor") || t.classList.contains("ql-container"),
            redactor: t => t.className.indexOf("redactor") > -1,
            prosemirror: t => t.hasAttribute("pm-container") || t.classList.contains("ProseMirror"),
            scribe: t => t.className.indexOf("scribe") > -1,
            trix: t => t.className.indexOf("trix") > -1,
            "medium-editor": t => t.className.indexOf("medium-editor") > -1,
            tinymce: t => {
                if ("IFRAME" !== t.tagName) return !1;
                const e = t;
                return e.id.indexOf("mce") > -1 || !!(e.contentDocument && e.contentDocument.querySelectorAll("#tinymce, .mce-content-body").length > 0)
            },
            ckeditor4: t => t.matches("iframe.cke_wysiwyg_frame") || t.classList.contains("cke_editable"),
            ckeditor5: t => t.classList.contains("ck-editor__editable"),
            slate: t => "true" === t.getAttribute("data-slate-editor"),
            mobiledoc: t => t.classList.contains("__mobiledoc-editor")
        }, t.isGeneric = {
            contenteditable: t => {
                const e = t.attributes.getNamedItem("contenteditable");
                return !(!e || "true" !== e.value && "" !== e.value && "plaintext-only" !== e.value)
            },
            textarea: t => "TEXTAREA" === t.tagName,
            iframe: e => {
                if ("IFRAME" === e.tagName) {
                    const n = e;
                    return !!(n.contentDocument && n.contentDocument.body && t.isGeneric.contenteditable(n.contentDocument.body))
                }
                return !1
            },
            iframeHost: e => {
                if ("IFRAME" === e.tagName) {
                    const n = e;
                    return !(n.contentDocument && n.contentDocument.body && t.isGeneric.contenteditable(n.contentDocument.body))
                }
                return !1
            }
        }, t.get = function(n) {
            return {
                generic: e(n, t.isGeneric),
                specific: e(n, t.isSpecific)
            }
        }
    }(ir || (ir = {}));
    var or = 1,
        sr = function() {
            return Promise.resolve()
        }(),
        cr = {};

    function ar(t) {
        return t in cr && (delete cr[t], !0)
    }
    var ur, lr = function(t) {
            var e = or++;
            return cr[e] = !0, sr.then((function() {
                return ar(e) && t()
            })), e
        },
        hr = function(t) {
            ar(t)
        },
        fr = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r
            }
            return nt(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = lr(e.flush.bind(e, null))))
            }, e.prototype.recycleAsyncId = function(e, n, r) {
                if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length && (hr(n), e.scheduled = void 0)
            }, e
        }(un),
        pr = new(function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return nt(e, t), e.prototype.flush = function(t) {
                this.active = !0, this.scheduled = void 0;
                var e, n = this.actions,
                    r = -1,
                    i = n.length;
                t = t || n.shift();
                do {
                    if (e = t.execute(t.state, t.delay)) break
                } while (++r < i && (t = n.shift()));
                if (this.active = !1, e) {
                    for (; ++r < i && (t = n.shift());) t.unsubscribe();
                    throw e
                }
            }, e
        }(hn))(fr);

    function dr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
            r = null,
            i = t[t.length - 1];
        return he(i) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof i && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof yt ? t[0] : Fn(n)(xe(t, r))
    }

    function br(t, e, n) {
        return n ? br(t, e).pipe(rn((function(t) {
            return at(t) ? n.apply(void 0, t) : n(t)
        }))) : new yt((function(n) {
            var r, i = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return n.next(1 === t.length ? t[0] : t)
            };
            try {
                r = t(i)
            } catch (t) {
                return void n.error(t)
            }
            if (rt(e)) return function() {
                return e(i, r)
            }
        }))
    }

    function gr(t) {
        var e = t.error;
        t.subscriber.error(e)
    }
    ur || (ur = {});
    var mr = function() {
        function t(t, e, n) {
            this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
        }
        return t.prototype.observe = function(t) {
            switch (this.kind) {
                case "N":
                    return t.next && t.next(this.value);
                case "E":
                    return t.error && t.error(this.error);
                case "C":
                    return t.complete && t.complete()
            }
        }, t.prototype.do = function(t, e, n) {
            switch (this.kind) {
                case "N":
                    return t && t(this.value);
                case "E":
                    return e && e(this.error);
                case "C":
                    return n && n()
            }
        }, t.prototype.accept = function(t, e, n) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
        }, t.prototype.toObservable = function() {
            var t, e;
            switch (this.kind) {
                case "N":
                    return Pn(this.value);
                case "E":
                    return t = this.error, new yt(e ? function(n) {
                        return e.schedule(gr, 0, {
                            error: t,
                            subscriber: n
                        })
                    } : function(e) {
                        return e.error(t)
                    });
                case "C":
                    return vn()
            }
            throw new Error("unexpected notification kind value")
        }, t.createNext = function(e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
        }, t.createError = function(e) {
            return new t("E", void 0, e)
        }, t.createComplete = function() {
            return t.completeNotification
        }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
    }();

    function vr(t, e) {
        return void 0 === e && (e = 0),
            function(n) {
                return n.lift(new yr(t, e))
            }
    }
    var yr = function() {
            function t(t, e) {
                void 0 === e && (e = 0), this.scheduler = t, this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new _r(t, this.scheduler, this.delay))
            }, t
        }(),
        _r = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = 0);
                var i = t.call(this, e) || this;
                return i.scheduler = n, i.delay = r, i
            }
            return nt(e, t), e.dispatch = function(t) {
                var e = t.notification,
                    n = t.destination;
                e.observe(n), this.unsubscribe()
            }, e.prototype.scheduleMessage = function(t) {
                this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new wr(t, this.destination)))
            }, e.prototype._next = function(t) {
                this.scheduleMessage(mr.createNext(t))
            }, e.prototype._error = function(t) {
                this.scheduleMessage(mr.createError(t)), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.scheduleMessage(mr.createComplete()), this.unsubscribe()
            }, e
        }(dt),
        wr = function() {
            return function(t, e) {
                this.notification = t, this.destination = e
            }
        }();

    function xr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return e.lift.call(Vn.apply(void 0, [e].concat(t)))
        }
    }

    function Er(t, e) {
        return Mn(t, e, 1)
    }
    const Sr = 1e3;
    var Ar;
    ! function(t) {
        const e = Ce.create("universal.cs.integration.observables"),
            n = t => cn(t, "focus", !0);

        function r(t, e) {
            return {
                document: t,
                frame: e
            }
        }
        t.createFocusObservable = function(t, i, o = n) {
            return function(t, n) {
                const i = r(t),
                    o = Rn(t.getElementsByTagName("iframe")),
                    s = n.pipe(Er((t => Array.from(t.addedNodes))), Ft((t => "IFRAME" === t.nodeName)));
                return o.pipe(xr(s), Ft((n => function(t, n) {
                    try {
                        const e = t.src;
                        if (e && "about:blank" !== e && !e.startsWith("javascript")) {
                            return new URL(e, n.baseURI).origin === n.location.origin
                        }
                        return !0
                    } catch (t) {
                        return e.warn("Error converting iframe's src to url", t), !0
                    }
                }(n, t))), Mn((t => {
                    try {
                        return function(t) {
                            const e = t.contentDocument;
                            return e && "complete" === e.readyState
                        }(t) ? Pn(t) : br((e => t.addEventListener("load", e, !0)), (e => t.removeEventListener("load", e)), (() => t)).pipe(yn(1))
                    } catch (t) {
                        return e.warn("failed to receive iframes document", t), Pn(null)
                    }
                })), rn((t => {
                    try {
                        if (null !== t && null !== t.contentDocument) return r(t.contentDocument, t)
                    } catch (t) {
                        e.warn("failed to receive iframes document", t)
                    }
                    return null
                })), Ft((t => null !== t))).pipe(Bn(i))
            }(t, i).pipe(Mn((t => function(t, e, n) {
                const r = t.document,
                    i = pn(Sr),
                    o = t.frame ? vn() : (u = () => Pn(r.activeElement).pipe(Ft((t => t && r.defaultView && r.defaultView.HTMLElement && t instanceof r.defaultView.HTMLElement))), new yt((function(t) {
                        var e;
                        try {
                            e = u()
                        } catch (e) {
                            return void t.error(e)
                        }
                        return (e ? Rn(e) : vn()).subscribe(t)
                    }))),
                    s = e(r).pipe(rn((t => t.target))),
                    c = t.frame ? vn() : dr(i, n).pipe(Ft((t => !!r.defaultView && "visible" === r.visibilityState && !!r.activeElement)), rn((t => r.activeElement)), Hn()),
                    a = dr(c, s).pipe(Ft((t => r.defaultView && r.defaultView.HTMLElement && t instanceof r.defaultView.HTMLElement)), rn((t => t)));
                var u;
                return o.pipe(xr(a), Hn())
            }(t, o, i).pipe(rn((e => ({
                element: e,
                owner: t
            })))))), Hn(), vr(pr))
        }
    }(Ar || (Ar = {}));
    const Cr = t => t.replace("www.", "");

    function Ir(t) {
        return "firefox" === B().bundleInfo.browser && /^about:/.test(t) ? t : "" === t ? "" : Cr(new URL(t).hostname)
    }
    var kr, Tr;
    ! function(t) {
        function e(t, e) {
            if (!t || !e) return !0;
            return !e.includes(t)
        }

        function n(t, e, n) {
            var r;
            return Boolean(e && !n && (null === (r = t.llamaIntegration) || void 0 === r ? void 0 : r.enabled))
        }

        function r(t, n, r, i) {
            var o, s;
            const c = i ? Ir(i) : void 0,
                a = t.isLlamaInstalled && (null === (o = n.llamaIntegration) || void 0 === o ? void 0 : o.enabled);
            return e(c, null === (s = n.llamaIntegration) || void 0 === s ? void 0 : s.disabledByDomain) && (a || t.showDesktopIntegrationExtensionToggle || (null == r ? void 0 : r.desktopIntegrationExtensionSupport))
        }
        t.showSettingPopupToggle = r, t.showGrayGButton = function(t, e, i, o) {
            return r(t, e, i, o) && n(e, t.isLlamaInstalled, t.isLlamaIntegrationDisable)
        }, t.isIntegrationEnable = function(t, r) {
            var i;
            return !(!t || !r) && (e(t.domain, null === (i = r.llamaIntegration) || void 0 === i ? void 0 : i.disabledByDomain) && n(r, t.isLlamaInstalled, t.isLlamaIntegrationDisable))
        }
    }(kr || (kr = {})),
    function(t) {
        function e(t, e) {
            return n(t, e).pipe(Dt(), vr(pr))
        }

        function n(t, e) {
            return new yt((n => {
                const r = new MutationObserver((t => n.next(t)));
                return r.observe(t, e), () => r.disconnect()
            }))
        }
        t.create = e, t.createUnsafe = n, t.createFlattenHot = function(t, e) {
            return n(t, e).pipe(Er((t => t)), Dt())
        }, t.observeAttribute = function(t, n) {
            return e(t, {
                attributes: !0,
                attributeFilter: [n],
                subtree: !1,
                childList: !1
            }).pipe(rn((e => t.getAttribute(n))))
        }, t.observeStyle = function(t) {
            return e(t, {
                attributes: !0,
                attributeFilter: ["style"],
                subtree: !1,
                childList: !1
            }).pipe(rn((e => t.style)))
        }, t.observeChildList = function(t) {
            return e(t, {
                attributes: !1,
                subtree: !1,
                childList: !0
            }).pipe(rn((e => t.childNodes)))
        }
    }(Tr || (Tr = {}));
    var Or = n(52961);
    const Pr = "data-enable-grammarly";
    const jr = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"],
        Rr = ["pm-container", {
            name: "class",
            value: "ProseMirror"
        }, "data-synchrony", {
            name: "data-gramm",
            value: "false"
        }, {
            name: Pr,
            value: "false"
        }, {
            name: "aria-label",
            value: "Search Facebook"
        }],
        Nr = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix", "llama-action"];

    function Lr(t, e) {
        let n = t.parentNode;
        for (; null !== n;) {
            if (Ur(n, e)) return n;
            n = n.parentNode
        }
        return !1
    }

    function Mr(t) {
        return "true" === t.contentEditable || "plaintext-only" === t.contentEditable
    }

    function Ur(t, e) {
        if (!t) return !1;
        const n = t.matches || t.msMatchesSelector || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector;
        return !!n && n.apply(t, [e])
    }

    function Dr(t, e = null, n) {
        return this.addEventListener(t, e, n), {
            off: () => Fr.apply(this, [t, e, n])
        }
    }

    function Fr(t, e, n) {
        this.removeEventListener(t, e || null, n)
    }
    const $r = Ce.create("lib.external");

    function Vr(t) {
        const e = document.createElement("script");
        e.innerHTML = t, document.head.appendChild(e), e.parentNode && e.parentNode.removeChild(e)
    }

    function Br() {
        Vr(`window.GR_EXTENSION_ID='${B().appConfig.extensionId}'`), Vr("\n    window.GR_EXTENSION_SEND = function(key, data) {\n      if (!key) throw new TypeError('cant be called without message')\n      var e = document.createEvent('CustomEvent')\n      e.initCustomEvent('external:' + key, true, true, data)\n      document.dispatchEvent(e)\n    }\n  ");
        const t = Nr.map((t => {
            const e = `external:${t}`;
            return Dr.call(document, e, (({
                detail: t
            }) => {
                $r.trace("external event", {
                    event: e,
                    detail: t
                }), en(e, t)
            }))
        }));
        return {
            dispose: () => {
                Vr("\n        delete window.GR_EXTENSION_ID\n        delete window.GR_EXTENSION_SEND\n      "), t.forEach((t => t.off()))
            }
        }
    }

    function Hr(t, e) {
        const n = t.anchorNode;
        if (!n) return !1;
        const r = jr.map((t => Array.isArray(t) ? `[${t[0]}="${t[1]}"]` : `[${t}]`)).join(","),
            i = e.activeElement,
            o = t.toString().trim(),
            s = "TEXTAREA" !== n.tagName && "INPUT" !== n.tagName,
            c = !i || "INPUT" !== i.tagName && "TEXTAREA" !== i.tagName,
            a = !Mr(n),
            u = !Lr(n, r) && !Ur(n, r),
            l = !Lr(n, "[contenteditable=true],[contenteditable=plaintext-only]") && ! function(t) {
                let e = t.parentNode;
                for (; null !== e;) {
                    if (Mr(e)) return e;
                    e = e.parentNode
                }
                return !1
            }(n);
        return !!(o && s && c && a && u && l)
    }
    var qr = n(57238);
    const zr = "grExtInstalled",
        Gr = "grExtDisabled";

    function Yr(t) {
        null === t && "next" === document.body.dataset[Gr] || (null === t ? delete document.body.dataset[Gr] : document.body.dataset[Gr] = t)
    }
    class Wr {
        constructor(t, e) {
            this._bgRpc = t, this._csShareStorage = e, this._pageEnable = !0, this._enabledDefs = !1, this._isAnonymous = !0, this._wasLoaded = !1, this._isLlamaInstalled = !1, this._mutations = Tr.createFlattenHot(self.document, {
                childList: !0,
                subtree: !0
            }), this._textFieldsObservable = Ar.createFocusObservable(self.document, this._mutations), this._subs = [this._textFieldsObservable.subscribe((t => {
                const e = t.owner.frame || t.element,
                    n = ir.get(e);
                this._pageEnable && (n.generic || n.specific) && this.load()
            })), Wr.clickObserver.subscribe((t => {
                2 === t.detail && this._enabledDefs && this._pageEnable && !this._isAnonymous && Xr.isValid() && (this._csShareStorage.set("extensionDictionaryEvent", t), this._subs.push(Xr.animation()), this.load())
            }))], (t => {
                if (self.location.href.includes("grammarly.com/extension-success")) {
                    const e = document.getElementById("click-to-run");
                    e && (e.onclick = () => {
                        var e, n;
                        confirm("Always allow Grammarly to run on every website") ? (t.api.enableClickToRunOnAllWebsites(), null === (e = document.getElementById("click-to-run-success")) || void 0 === e || e.click()) : null === (n = document.getElementById("click-to-run-fail")) || void 0 === n || n.click()
                    })
                }
            })(t)
        }
        load() {
            this._wasLoaded && !this._isLlamaInstalled || (this._wasLoaded = !0, Kr.callExecuteContentScript(), this.dispose(), this._bgRpc.api.loadContentScript())
        }
        dispose() {
            this._subs.forEach((t => t.unsubscribe()))
        }
        updateState(t, e, n, r) {
            this._isLlamaInstalled = r, !this._pageEnable && e && this.load(), this._isAnonymous = t, this._pageEnable = e, this._enabledDefs = n, Yr(this._pageEnable ? null : "forever")
        }
    }
    var Jr, Xr, Kr;

    function Zr(t, e) {
        return {
            key: t,
            value: e
        }
    }

    function Qr(t, e) {
        return Zr(t, e)
    }

    function ti(t) {
        return t.map((t => [t.key, t.value].map(encodeURIComponent).join("="))).join("&")
    }

    function ei(t, e) {
        if (0 === e.length) return t;
        const n = t.includes("?");
        return [t, ti(e)].join(n ? "&" : "?")
    }

    function ni(t) {
        const e = [];
        return void 0 !== t.medium && e.push(Qr("utm_medium", t.medium)), void 0 !== t.source && e.push(Qr("utm_source", t.source)), void 0 !== t.campaign && e.push(Qr("utm_campaign", t.campaign)), t.clickToRun && e.push(Qr("click_to_run", "true")), e
    }

    function ri(t) {
        return ni(t)
    }! function(t) {
        t.clickObserver = cn(self.document, "click", !0), t.start = function(e) {
            Kr.checkScriptInitStart();
            const n = nr.init({
                    ...e,
                    skipInitExtensionApi: !0
                }),
                r = new t(n.bgRpc, n.csShareStorage),
                i = Jr.init(n.config);
            Je("state", (t => {
                r.updateState(t.user.anonymous, t.page.enabled, t.page.enabledDefs, kr.isIntegrationEnable(t.page, t.dynamicConfig))
            })), We("contentScript-disconnected", (() => {
                r.dispose(), i.dispose(), n.csShareStorage.clean()
            })), Kr.checkScriptInitEnd(n.bgRpc)
        }
    }(Wr || (Wr = {})),
    function(t) {
        t.init = function(t) {
            const e = function() {
                    const t = document.location || document.defaultView.location;
                    return t ? t.hostname.replace("www.", "") : ""
                }(),
                n = [];
            return document.body.dataset.newGrCSCheckLoaded = t.buildInfo.version, document.body.dataset[zr] = "", self.location.protocol === t.appConfig.url.grammarlyProtocol && e.match(`^([a-z\\-0-9]+\\.)*${t.appConfig.url.grammarlyDomain}$`) && n.push(Br()), {
                dispose: () => {
                    n.forEach((t => t.dispose()))
                }
            }
        }
    }(Jr || (Jr = {})),
    function(t) {
        const e = "important";

        function n(t) {
            return t + "px"
        }
        t.isValid = function() {
            const t = self.document.getSelection();
            return !(!t || t.toString().match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’='-/ /]/)) && Hr(t, self.document)
        }, t.animation = function() {
            const t = document.createElement("div"),
                r = t.attachShadow({
                    mode: "open"
                }),
                i = document.createElement("style");
            i.innerHTML = qr.__css, r.appendChild(i);
            const o = self.document.getSelection().getRangeAt(0).getBoundingClientRect(),
                s = document.createElement("div");
            s.style.setProperty("top", n(o.top), e), s.style.setProperty("left", n(o.left), e), s.style.setProperty("height", n(o.height), e), s.style.setProperty("max-width", n(o.width), e), s.style.setProperty("z-index", rr.toString(), e), s.classList.add(qr.animatedUnderline, qr.checkAnimatedUnderline), r.appendChild(s), document.body.appendChild(t);
            const c = pn(10),
                a = Se(Wr.clickObserver.pipe(function(t, e) {
                    var n = arguments.length >= 2;
                    return function(r) {
                        return r.pipe(t ? Ft((function(e, n) {
                            return t(e, n, r)
                        })) : mt, yn(1), n ? xn(e) : An((function() {
                            return new bn
                        })))
                    }
                }(), (u = !1, function(t) {
                    return t.lift(new Tn(u))
                }), Bn(!0), Hn()), c.pipe(rn((() => {
                    const t = "." + Or.completeAnimation;
                    if (document.querySelector(t)) return !0;
                    const e = Array.from(document.querySelectorAll("grammarly-extension"));
                    for (const n of e)
                        if (n.shadowRoot && n.shadowRoot.querySelector(t)) return !0;
                    return !1
                })), Bn(!1), Hn())).pipe(Ft((([t, e]) => !t || e)), Hn()).subscribe(l);
            var u;
            return {
                unsubscribe: l
            };

            function l() {
                a.unsubscribe(), t.remove()
            }
        }
    }(Xr || (Xr = {})),
    function(t) {
        const e = Date.now(),
            n = t => self.performance.mark("@grammarly-extension:" + t);
        t.callExecuteContentScript = () => n("callExecuteContentScript"), t.checkScriptInitEnd = t => {
            const r = Math.random() < .01;
            if (n("checkScriptInitEnd"), t.api.feMetricsLogRate("checkScriptInitialized"), r) {
                const t = Date.now();
                en("tracking-call", {
                    msg: "tracking/RPC",
                    data: ["sendFelogEvent", {
                        ex_csInitPerf: {
                            domain: self.location.host,
                            initTime: t - e,
                            pageLoadTime: t - self.performance.timing.responseEnd
                        },
                        hideUserInfo: !0,
                        level: "INFO",
                        logger: "checkScript.initialized"
                    }]
                })
            }
        }, t.checkScriptInitStart = () => n("checkScriptInitStart")
    }(Kr || (Kr = {}));
    Zr("fromExtension", "" + !0);
    ni({
        medium: "internal"
    })[0];

    function ii(t, e) {
        return ei(B().appConfig.url.upgrade, ri({
            medium: "internal",
            source: t,
            campaign: e
        }))
    }

    function oi(t) {
        const e = t.reduce(((t, e) => {
            const n = t.get(e.category);
            return n ? n.count++ : t.set(e.category, {
                group: e.group,
                categoryHuman: e.categoryHuman,
                count: 1
            }), t
        }), new Map);
        return Array.from(e.values()).sort(((t, e) => e.count - t.count))
    }

    function si(t) {
        const e = new Map;
        for (const {
                isFree: n,
                cardLayout: {
                    group: r
                }
            } of t) {
            e.has(r) || e.set(r, {
                lensName: r,
                free: 0,
                premium: 0
            });
            const t = e.get(r);
            t && (t[n ? "free" : "premium"] += 1)
        }
        return Array.from(e.values()).sort(((t, e) => e.premium - t.premium))
    }

    function ci(t) {
        return btoa(JSON.stringify(t))
    }
    class ai extends class {
        constructor() {
            this._log = Ce.create("extension-api.alarms.stub"), this._warning = "Method is not implemented"
        }
        create(t, e) {
            return this._log.warn(this._warning), {
                dispose: g
            }
        }
    } {
        create(t, e) {
            let n = null;
            const r = setTimeout((() => {
                e.period && (n = setInterval(t, e.period)), t()
            }), e.delay);
            return {
                dispose: () => {
                    clearTimeout(r), null !== n && clearInterval(n)
                }
            }
        }
    }

    function ui(t, e) {
        chrome.runtime.lastError ? e(chrome.runtime.lastError) : t()
    }
    class li {
        constructor() {
            this._log = Ce.create("extension-api.managed-storage.validator")
        }
        validate(t, e) {
            switch (t) {
                case "GrammarlyEnrollmentToken":
                    return "string" == typeof e && e.length > 0 && /^[a-z0-9_-]+$/i.test(e);
                default:
                    return this._log.warn(`Unknown key: ${t}`), !1
            }
        }
    }
    class hi {
        constructor() {
            this._log = Ce.create("extension-api.managed-storage.chrome"), this._validator = new li
        }
        get(t) {
            return new Promise(((e, n) => {
                chrome.storage.managed.get(t, (r => {
                    ui((() => {
                        const n = r[t];
                        void 0 === n || this._validator.validate(t, n) ? e(n) : (this._log.warn(`Invalid value for "${t}": ${JSON.stringify(r[t])}`), e(void 0))
                    }), (e => {
                        this._log.error(`Could not get "${t}"`, e), n(e)
                    }))
                }))
            }))
        }
    }
    const fi = "bridge",
        pi = "message:to-priv",
        di = "message:to-non-priv";
    var bi;
    ! function(t) {
        t[t.success = 0] = "success", t[t.successWithEmpty = 1] = "successWithEmpty", t[t.alreadyMigrated = 2] = "alreadyMigrated"
    }(bi || (bi = {}));
    const gi = Ce.create("extension-api.message"),
        mi = () => {};
    class vi {
        constructor() {
            this._listeners = {}, this._queue = {}, this.fire = (t, e, n = mi, r) => {
                const i = this._listeners[t] || [];
                i.length ? i.forEach((t => t(e, n, r))) : (this._queue[t] = this._queue[t] || [], this._queue[t].push({
                    content: e,
                    callback: n,
                    sender: r
                }))
            }, this.unlisten = (t, e) => {
                const n = this._listeners[t] || [],
                    r = n.indexOf(e); - 1 !== r && (1 === n.length ? delete this._listeners[t] : n.splice(r, 1))
            }, this.listenOnce = (t, e) => {
                const n = (r, i, o) => {
                    this.unlisten(t, n), e && e(r, i, o)
                };
                this.listen(t, n)
            }, this.listen = (t, e) => {
                this._listeners[t] = this._listeners[t] || [], -1 === this._listeners[t].indexOf(e) && this._listeners[t].push(e);
                const n = this._queue[t] || [];
                if (n.length) {
                    for (const t of n) try {
                        e(t.content, t.callback, t.sender)
                    } catch (t) {
                        gi.error("exception during proccesing buffered messages", t)
                    }
                    delete this._queue[t]
                }
            }
        }
    }
    const yi = Ce.create("extension-api.message.bg"),
        _i = "popup";

    function wi(t) {
        if (!t) return !1;
        const {
            browser: e
        } = B().bundleInfo, n = "firefox" === e ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "chrome" === e || "edge" === e ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : p(e);
        return void 0 !== n && n.test(t)
    }
    class xi {
        constructor(t, e, n) {
            this._getActiveTab = e, this._getAllTabs = n, this.kind = "background-message-api", this.topFrameId = "0", this._callbacks = {}, this._tabPorts = {
                popup: []
            }, this._messageHelper = new vi, this._sendMessageToPorts = (t, e) => {
                const n = this._tabPorts[t];
                n && n.forEach((t => t.postMessage(e)))
            }, this.toFocused = (t, e) => this._getActiveTab().then((({
                id: n,
                url: r
            } = {}) => {
                if (n) return wi(r) ? yi.warn(`toFocussed not allowed for popup when it open like regular tab ${t}`, e) : void this._sendMessageToPorts(n.toString(), {
                    type: t,
                    content: e,
                    callid: o()
                })
            })), this.broadcast = (t, e) => {
                if (!e) return;
                const n = ({
                    id: n,
                    url: r
                }) => {
                    n && r && -1 === r.indexOf("chrome-extension:") && this._sendMessageToPorts(n.toString(), {
                        type: t,
                        callid: o(),
                        content: e
                    })
                };
                this._getAllTabs().then((t => t.forEach(n))), this._tabPorts.popup && this._tabPorts.popup.length && this._getActiveTab().then((({
                    url: t
                } = {}) => {
                    n({
                        id: _i,
                        url: t
                    })
                }))
            }, this._initPortListener = t => {
                if (t.name === fi) t.onMessage((t => {
                    "message.toFocussed" === t.method && this.toFocused(t.params && t.params.type, t.params && t.params.content)
                }));
                else if (t.name === di) t.onMessage((t => this.broadcast(t.type, t.content)));
                else if (t.name === pi) {
                    const {
                        sender: e
                    } = t;
                    if (e) {
                        if (e.tab) {
                            const {
                                id: n,
                                url: r
                            } = e.tab;
                            if (n) {
                                let e = this._tabPorts[n];
                                void 0 === e && (e = this._tabPorts[n] = []), e.push(t)
                            }
                            r && 0 === r.indexOf("http") && this._messageHelper.fire("tab-connected", {
                                tab: n,
                                url: r
                            }), t.onDisconnect((() => {
                                if (!n) return;
                                const e = this._tabPorts[n];
                                e && e.splice(e.indexOf(t), 1)
                            }))
                        }
                        const n = e.url ? e.url : e.tab ? e.tab.url : "";
                        if (n && wi(n)) {
                            const e = _i;
                            this._tabPorts[e] = this._tabPorts[e] || [], this._tabPorts[e].push(t), t.onDisconnect((() => {
                                const n = this._tabPorts[e];
                                n.splice(n.indexOf(t), 1)
                            }))
                        }
                    }
                    t.onMessage((n => {
                        const r = ({
                            callid: n,
                            content: r,
                            type: i
                        }) => {
                            this._callbacks[n] && (this._callbacks[n](r), delete this._callbacks[n]);
                            this._messageHelper.fire(i, r, (e => t.postMessage({
                                content: e,
                                callid: n
                            })), e && e.tab ? {
                                tabId: String(e.tab.id),
                                frameId: void 0 === e.frameId ? void 0 : String(e.frameId)
                            } : -1)
                        };
                        "tab-connected" === n.type ? this._getActiveTab().then((({
                            url: t
                        } = {}) => {
                            n.content = {
                                tab: _i,
                                url: t
                            }, r(n)
                        })) : r(n)
                    }))
                }
            }, t(this._initPortListener)
        }
        getPortExists(t) {
            return !!this._tabPorts[t]
        }
        sendTo(t, e, n, r, i, s) {
            var c;
            const {
                tabId: a,
                frameId: u = null
            } = "object" == typeof t ? t : {
                tabId: String(t)
            }, l = null === (c = this._tabPorts[a]) || void 0 === c ? void 0 : c.filter((t => null === u || void 0 !== t.sender.frameId && String(t.sender.frameId) === u));
            if (!l || !l.length) return void(i && i({
                message: "no ports on specified destination"
            }));
            const h = s ? l.filter((t => s(t.sender && t.sender.url))) : l;
            if (!h.length) return void(i && i({
                message: "no ports on specified tabFilter"
            }));
            const f = {
                type: e,
                content: n
            };
            r && "function" == typeof r && (f.callid = o(), this._callbacks[f.callid] = r), h.forEach((t => t.postMessage(f)))
        }
        listen(t, e) {
            this._messageHelper.listen(t, e)
        }
    }
    const Ei = Ce.create("Messaging.extension-api.content");
    class Si {
        constructor(t) {
            this.kind = "content-script-message-api", this._callbacks = {}, this._messageHelper = new vi, this._disconnected = !1, this.broadcastBackground = (...t) => this._emit(this.backgroundPort, "bg").apply(null, t), this.broadcast = (...t) => this._emit(this.broadcastPort, "tabs").apply(null, t), this._onPortMessage = t => {
                Ei.trace("portMessage", t)
            }, this._emit = (t, e) => (n, r, i, s) => {
                const c = o();
                i && "function" == typeof i && (this._callbacks[c] = i);
                try {
                    if (!t) throw new Error("lost connection to " + e + " port");
                    t.postMessage({
                        type: n,
                        callid: c,
                        content: r
                    })
                } catch (t) {
                    if (!s) throw t;
                    s(t)
                }
            }, this._onBgPortMessage = ({
                callid: t,
                content: e,
                type: n
            }) => {
                this._callbacks[t] ? (this._callbacks[t](e), delete this._callbacks[t]) : this._messageHelper.fire(n, e, (e => {
                    if (!this.backgroundPort) throw new Error("fail reply to bg page - connection lost");
                    this.backgroundPort.postMessage({
                        content: e,
                        callid: t
                    })
                }))
            }, this.port = t(fi), this.port.onMessage(this._onPortMessage), this.port.onDisconnect((() => {
                this.port = null, this._onDisconnect()
            })), this.backgroundPort = t(pi), this.backgroundPort.onMessage(this._onBgPortMessage), this.backgroundPort.onDisconnect((() => {
                this.backgroundPort = null, this._onDisconnect()
            })), this.broadcastPort = t(di), this.broadcastPort.onDisconnect((() => {
                this.broadcastPort = null, this._onDisconnect()
            }))
        }
        onBackgroundPortReconnect(t) {
            this.backgroundPort && this.backgroundPort.onReconnect && this.backgroundPort.onReconnect(t)
        }
        listen(t, e) {
            this._messageHelper.listen(t, e)
        }
        toFocused(t, e) {
            return u.create((n => {
                if (!this.port) throw new Error("lost connection to bg page");
                this.port.postMessage({
                    method: "message.toFocussed",
                    params: {
                        type: t,
                        content: e
                    }
                }), n()
            }))
        }
        _onDisconnect() {
            this._disconnected || (this._disconnected = !0, Ei.trace("Content script messaging went disconnected."), this._messageHelper.fire("contentScript-disconnected", null))
        }
    }
    class Ai {
        constructor(t) {
            this._manifestVersion = t, this.kind = "web-extension", this.executeScript = (t, e, n) => u.create(((r, i) => {
                "3" !== this._manifestVersion ? chrome.tabs.executeScript(e, {
                    file: t,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (t => Ci(t[0], r, i))) : chrome.scripting.executeScript({
                    files: [t],
                    target: {
                        tabId: e,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (t => {
                    var e;
                    return Ci(null === (e = t[0]) || void 0 === e ? void 0 : e.result, r, i)
                }))
            })), this.executeFunction = (t, e, n) => u.create(((r, i) => {
                "3" !== this._manifestVersion ? chrome.tabs.executeScript(e, {
                    code: `(${t.toString()})()`,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (t => Ci(t[0], r, i))) : chrome.scripting.executeScript({
                    function: t,
                    target: {
                        tabId: e,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (t => {
                    var e;
                    return Ci(null === (e = t[0]) || void 0 === e ? void 0 : e.result, r, i)
                }))
            })), this.insertCSS = (t, e, n, r) => u.create(((i, o) => {
                "3" !== this._manifestVersion ? chrome.tabs.insertCSS(t, {
                    file: e,
                    code: n,
                    matchAboutBlank: !0,
                    ...r ? {
                        frameId: Number(r)
                    } : {}
                }, (() => Ci(void 0, i, o))) : chrome.scripting.insertCSS({
                    target: {
                        tabId: t,
                        ...r ? {
                            frameIds: [Number(r)]
                        } : {}
                    },
                    files: e ? [e] : void 0,
                    css: n
                }, (() => Ci(void 0, i, o)))
            }))
        }
        open(t, e) {
            return u.create(((n, r) => {
                chrome.tabs.create({
                    url: t,
                    active: e
                }, (t => {
                    ui((() => n(t)), r)
                }))
            }))
        }
        updateCurrent(t) {
            return u.create(((e, n) => {
                chrome.tabs.update({
                    url: t
                }, (t => {
                    ui((() => e(t)), n)
                }))
            }))
        }
        getActiveTab() {
            return u.create(((t, e) => {
                const n = chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, (r => {
                    ui((() => {
                        r && r.length ? t(r[0]) : n.query({
                            active: !0
                        }, (n => {
                            ui((() => {
                                t(n[0])
                            }), e)
                        }))
                    }), e)
                }))
            }))
        }
        getAllTabs() {
            return u.create(((t, e) => chrome.tabs.query({}, (n => ui((() => t(n)), e)))))
        }
        getActiveTabUrl() {
            return u.create(((t, e) => this.getActiveTab().then((n => ui((() => t(n && n.url)), e)))))
        }
        onActiveTabChange(t, e) {
            const n = n => {
                ui((() => {
                    n && t(n)
                }), e)
            };
            chrome.tabs.onActivated.addListener((t => chrome.tabs.get(t.tabId, (t => n(t))))), chrome.tabs.onUpdated.addListener(((t, e) => {
                this.getActiveTab().then((r => {
                    r && r.id === t && (e.url || e.favIconUrl || "complete" === e.status) && chrome.tabs.get(t, (t => n(t)))
                }))
            })), chrome.windows.onFocusChanged.addListener((t => chrome.tabs.query({
                active: !0,
                windowId: t,
                lastFocusedWindow: !0
            }, (t => n(t[0]))))), this.getActiveTab().then((t => n(t)))
        }
        tabUrlChange() {
            return new yt((t => {
                const e = (e, n, r) => {
                    "complete" === n.status && t.next({
                        id: e,
                        url: r.url
                    })
                };
                return chrome.tabs.onUpdated.addListener(e), () => chrome.tabs.onUpdated.removeListener(e)
            }))
        }
        reload(t) {
            return u.create(((e, n) => {
                const r = () => ui((() => e()), n);
                t ? chrome.tabs.reload(t, {}, r) : chrome.tabs.reload(r)
            }))
        }
    }

    function Ci(t, n, r) {
        e() ? r(e()) : n(t)
    }
    const Ii = {
        get: t => u.create(((e, n) => chrome.storage.local.get(t, (t => {
            ui((() => e(t)), n)
        })))),
        set: t => u.create(((e, n) => chrome.storage.local.set(t, (() => {
            ui(e, n)
        })))),
        getAll: () => u.create(((t, e) => chrome.storage.local.get(null, (n => {
            ui((() => t(n)), e)
        })))),
        remove: t => u.create(((e, n) => chrome.storage.local.remove(t, (() => {
            ui(e, n)
        })))),
        removeAll: () => u.create(((t, e) => chrome.storage.local.clear((() => {
            ui(t, e)
        }))))
    };
    class ki {
        constructor(t) {
            this.port = chrome.runtime.connect({
                name: t
            })
        }
        onMessage(t) {
            this.port.onMessage.addListener(t)
        }
        onDisconnect(t) {
            this.port.onDisconnect.addListener(t)
        }
        postMessage(t) {
            this.port.postMessage(t)
        }
    }
    class Ti {
        constructor(t) {
            this._port = t, this.sender = {};
            const {
                sender: e,
                name: n
            } = t;
            this.name = n, e && (this.sender.url = e.url, this.sender.frameId = e.frameId, e.tab && e.tab.url && e.tab.id && (this.sender.tab = {
                url: e.tab.url,
                id: e.tab.id
            }))
        }
        onMessage(t) {
            this._port.onMessage.addListener(t)
        }
        onDisconnect(t) {
            this._port.onDisconnect.addListener(t)
        }
        postMessage(t) {
            this._port.postMessage(t)
        }
    }
    class Oi {
        constructor(t) {
            this._manifestVersion = "2", this._action = "3" === this._manifestVersion ? chrome.action : chrome.browserAction, this.alarms = new ai, this.managedStorage = new hi, this.tabs = new Ai(this._manifestVersion), this.thirdPartyExtensionsInstalled = {}, this.notification = {
                kind: "web-extension",
                create: t => u.create(((e, n) => {
                    const r = chrome.notifications,
                        i = o();
                    r.create(i, Object.assign({
                        type: "basic"
                    }, t), (() => {
                        ui((() => {
                            const t = new yt((t => {
                                    const e = e => e === i && t.next(e);
                                    return r.onClicked.addListener(e), () => r.onClicked.removeListener(e)
                                })),
                                n = new yt((t => {
                                    const e = (e, n) => e === i && t.next({
                                        id: e,
                                        buttonIndex: n
                                    });
                                    return r.onButtonClicked.addListener(e), () => r.onButtonClicked.removeListener(e)
                                })),
                                o = new yt((t => {
                                    const e = (e, n) => e === i && t.next({
                                        id: e,
                                        byUser: n
                                    });
                                    return r.onClosed.addListener(e), () => r.onClosed.removeListener(e)
                                }));
                            e({
                                id: i,
                                click: t,
                                buttonClick: n,
                                close: o
                            })
                        }), n)
                    }))
                })),
                clear: t => u.create(((e, n) => {
                    chrome.notifications.clear(t, (t => {
                        ui((() => e(t)), n)
                    }))
                }))
            }, this.cookies = {
                kind: "web-extension",
                get: t => u.create(((e, n) => chrome.cookies.get(t, (t => ui((() => e(t)), n))))),
                remove: t => new Promise(((e, n) => chrome.cookies.remove(t, (() => ui((() => e(null)), n))))),
                getAll: t => u.create(((e, n) => chrome.cookies.getAll(t, (t => ui((() => e(t)), n))))),
                set: t => u.create(((e, n) => chrome.cookies.set(t, (t => ui((() => e(t)), n))))),
                watch(t, e) {
                    const n = n => {
                        const {
                            cookie: r,
                            cause: i
                        } = n;
                        !r || !r.name || t.path && t.path !== r.path || t.name !== r.name || t.domain && -1 === r.domain.indexOf(t.domain) || ("explicit" === i && e(r), "expired_overwrite" === i && e())
                    };
                    return chrome.cookies.onChanged.addListener(n), () => chrome.cookies.onChanged.removeListener(n)
                },
                getChanges(t) {
                    return new yt((e => this.watch(t, (t => e.next(t)))))
                }
            }, this.preferences = Ii, this.management = {
                uninstallSelf() {
                    chrome.management.uninstallSelf()
                }
            }, this._baseUrl = b((() => chrome.runtime.getURL("")), (t => null)), this.permissions = chrome.permissions ? {
                watchAdded: t => {
                    chrome.permissions.onAdded.addListener(t)
                },
                added: new yt((t => {
                    const e = e => {
                        t.next(e)
                    };
                    return chrome.permissions.onAdded.addListener(e), () => {
                        chrome.permissions.onAdded.removeListener(e)
                    }
                })),
                watchRemoved: t => {
                    chrome.permissions.onRemoved.addListener(t)
                },
                removed: new yt((t => {
                    const e = e => {
                        t.next(e)
                    };
                    return chrome.permissions.onRemoved.addListener(e), () => {
                        chrome.permissions.onRemoved.removeListener(e)
                    }
                })),
                getAll: () => new Promise((t => chrome.permissions.getAll(t))),
                request: t => new Promise(((e, n) => chrome.permissions.request(t, (t => {
                    chrome.runtime.lastError ? n(chrome.runtime.lastError) : e(t)
                })))),
                contains: t => new Promise(((e, n) => {
                    chrome.permissions.contains(t, (t => {
                        chrome.runtime.lastError ? n(chrome.runtime.lastError) : e(t)
                    }))
                }))
            } : void 0, this.fetchBlocklistConfig = () => fetch(B().appConfig.url.pageConfigUrl, {
                credentials: "include"
            }).then((t => t.ok ? t.json() : t.text().then((e => {
                throw {
                    name: "RequestError",
                    body: e,
                    statusCode: t.status,
                    message: t.statusText
                }
            })))).then((t => {
                if ("string" != typeof t && t && t.error) throw new Error(t.error);
                return t
            })), this.getUrl = t => this._baseUrl ? this._baseUrl + t : chrome.runtime.getURL(t), this.fetchInternalResource = (t, e) => fetch(this.getUrl(t)).then((t => "json" === e ? t.json() : t.arrayBuffer())), this.openUrl = t => this.tabs.open(t, !0), this.openPopupSubscriptionDialog = t => this.openUrl(ii(t.utmSource, t.utmCampaign)), this.openSubscriptionDialog = t => function(t) {
                const e = B().appConfig.url,
                    n = t.showPlanComparison ? e.planComparison : e.upgrade;
                self.open(ei(n, [...t.isFromEmail ? [Zr("isFromEmail", "1")] : [], Zr("alerts", ci(oi(t.currentAlerts))), Zr("lensedAlerts", ci(si(t.currentAlerts))), Zr("app_type", "popup"), Zr("browser", B().bundleInfo.browser), ...ri({
                    medium: "internal",
                    source: t.isAnonymousUser ? "signupHook" : "upHook",
                    campaign: t.forceUtmCampaign ? t.forceUtmCampaign : t.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
                })]))
            }(t), this.isExtensionUrl = (t, e) => this.getUrl(t) === e, this.reload = () => chrome.runtime.reload(), this.i18n = {
                detectLanguage: t => u.create(((e, n) => chrome.i18n.detectLanguage(t, (t => ui((() => e(t)), n))))),
                getUILanguage: () => chrome.i18n.getUILanguage(),
                getAcceptLanguages: () => u.create(((t, e) => chrome.i18n.getAcceptLanguages((n => ui((() => t(n)), e)))))
            }, this.initCodeSplittingListener = () => {
                return chrome.runtime.onMessage.addListener((t = this.tabs.executeScript, (e, n, r) => {
                    e && "CODE_SPLITTING_INJECT" === e.type && e.file && n && n.tab && null != n.tab.id && (t(e.file, Number(n.tab.id), n.frameId), r())
                }));
                var t
            }, this.isExtensionInstalled = async (t, e = !1) => {
                if (!e && void 0 !== this.thirdPartyExtensionsInstalled[t]) return this.thirdPartyExtensionsInstalled[t];
                if ("undefined" == typeof fetch) return !1;
                const n = Oi.thirdPartyExtensionsData[t].publicResources.reduce(((e, n) => (H() && e.push(`chrome-extension://${Oi.thirdPartyExtensionsData[t].MSStoreId}${n}`), e.concat(`chrome-extension://${Oi.thirdPartyExtensionsData[t].id}${n}`))), []);
                return (r = n.map((t => fetch(t))), l(Promise.all([...r].map(l)))).then((t => !0)).catch((t => !1));
                var r
            }, this.message = t ? new xi((t => chrome.runtime.onConnect.addListener((e => t(new Ti(e))))), Q(this.tabs).getActiveTab, Q(this.tabs).getAllTabs) : new Si((t => new ki(t)))
        }
        get button() {
            const t = this._action;
            return {
                kind: "web-extension",
                setBadge(e) {
                    t.setBadgeText({
                        text: e
                    })
                },
                setIconByName(e) {
                    const n = "./src/icon/icon",
                        r = e ? "-" + e : "";
                    t.setIcon({
                        path: {
                            16: `${n}16${r}.png`,
                            32: `${n}32${r}.png`
                        }
                    })
                },
                setBadgeBackgroundColor(e) {
                    t.setBadgeBackgroundColor({
                        color: e
                    })
                }
            }
        }
        get baseUri() {
            var t;
            return null !== (t = this._baseUrl) && void 0 !== t ? t : chrome.runtime.getURL("")
        }
    }
    Oi.thirdPartyExtensionsData = {
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
    }, Wr.start({
        browser: "chrome",
        browserApi: function(t) {
            return new Oi(t)
        }(!1)
    })
})();
