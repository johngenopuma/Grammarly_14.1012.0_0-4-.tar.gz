var t = {
        d: (e, n) => {
            for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
    },
    e = {};
t.d(e, {
    m: () => i
});
class n {
    constructor(t, e, n, r) {
        this._customInboundEventName = e, this._customOutboundEventName = n, this._wrapOutboundMessage = r, this.inbound = {
            subscribe: t => {
                const e = ({
                    detail: e
                }) => {
                    const n = e;
                    t && ("function" == typeof t ? t(n) : t.next && t.next(n))
                };
                return this._target.addEventListener(this._customInboundEventName, e, !1), {
                    unsubscribe: () => this._target.removeEventListener(this._customInboundEventName, e, !1)
                }
            }
        }, this.outbound = t => {
            const e = this._wrapOutboundMessage ? this._wrapOutboundMessage(t) : t,
                n = new CustomEvent(this._customOutboundEventName, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: e
                });
            this._target.dispatchEvent(n)
        }, this._target = t.defaultView || t
    }
}
Error;
var r;
! function(t) {
    function e() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    t.create = function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(r || (r = {}));
void 0 !== self.requestIdleCallback && self.requestIdleCallback;
var s;
! function(t) {
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
}(s || (s = {}));
Error;
class o {
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
        let n = r.create();
        for (; this._calls.has(n);) n = r.create();
        const o = s.createCompletionSource();
        return this._calls.set(n, o), this._transport.outbound({
            id: n,
            method: t,
            args: e
        }), o.promise
    }
    dispose() {
        this._sub.unsubscribe()
    }
}

function i(t) {
    const {
        request: e,
        response: r
    } = function(t) {
        return {
            request: `cs-grm-request-${t}`,
            response: `cs-grm-response-${t}`
        }
    }(t), s = new o(new n(document, r, e));
    !async function() {
        try {
            ! function() {
                const t = self.HTMLCanvasElement.prototype.getContext;

                function e(...e) {
                    var n;
                    const r = t.call(this, ...e);
                    try {
                        const [t] = e;
                        if ("2d" === t && (null !== (o = r) && void 0 !== o.getTransform && o.getTransform().is2D)) return null !== (n = function(t) {
                            return new Proxy(t, {
                                get(t, e) {
                                    const n = t[e];
                                    return "function" == typeof n ? function(...t) {
                                        return s.api.log("proxy", `Call to ${String(e)}`), n.call(this, ...t)
                                    } : n
                                }
                            })
                        }(r)) && void 0 !== n ? n : r
                    } catch (t) {
                        s.api.logException("getContext", t)
                    }
                    var o;
                    return r
                }
                self.HTMLCanvasElement.prototype.getContext = e
            }(), await s.api.init() && console.log("Grammarly communication channel has been successfully established.")
        } catch (t) {
            try {
                await s.api.logException("init", t)
            } catch (t) {}
        }
    }()
}
var a = e.m;
export {
    a as startCanvasInjectedApp
};
