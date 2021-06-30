(self.webpackChunk = self.webpackChunk || []).push([
    [717], {
        36089: (e, t, i) => {
            i.r(t), i.d(t, {
                SnippetMatchLocation: () => s.C2,
                SnippetsFeature: () => s.EH,
                SnippetsRpcClient: () => g,
                SnippetsUIController: () => v,
                processChanges: () => s.pi
            });
            var s = i(6760),
                n = i(27378),
                r = i(32952),
                p = i(2844),
                a = i(93508),
                d = i(28043),
                o = i(77176),
                c = i(25691),
                h = i(88434),
                l = i(71031),
                u = i(46777),
                _ = i(38983);
            class v {
                constructor(e) {
                    this._gnar = e, this._hovered = new r.xQ, this._dismissed = new r.xQ, this.cardHovered = this._hovered.pipe((0, a.O)(!1), (0, d.x)()), this.cardDismissed = this._dismissed.pipe((0, d.x)()), this._activeCardModel = _.h.create(null), this.view = (0, p.aj)([this._activeCardModel]).pipe((0, o.U)((([e]) => {
                        var t;
                        let i;
                        switch (null == e ? void 0 : e.mode) {
                            case "list":
                                i = n.createElement(h.L, {
                                    matches: e.matches,
                                    applySnippet: e.applySnippet,
                                    selectSnippet: e.selectSnippet,
                                    activeSnippet: e.activeSnippet,
                                    triggerSequence: e.triggerSequence,
                                    onOpenLink: e => this._onOpenLink(e)
                                });
                                break;
                            case "shortcutPopup":
                                i = n.createElement(h.O, {
                                    openEditor: () => this._openEditor()
                                });
                                break;
                            case "editor":
                                i = n.createElement(l.M, {
                                    content: null !== (t = e.content) && void 0 !== t ? t : "",
                                    addSnippet: e.addSnippet,
                                    dismiss: this._dismiss.bind(this),
                                    triggerSequence: e.triggerSequence
                                });
                                break;
                            case null:
                            default:
                                return null
                        }
                        return e ? n.createElement(u.q, null, n.createElement(c.W, {
                            anchorRect: e.rect,
                            anchorMargin: {
                                top: 0,
                                left: -15,
                                bottom: 5,
                                right: 0
                            },
                            onHover: e => this._hovered.next(e),
                            onClickAway: e => this._dismissed.next(e),
                            partName: "snippets"
                        }, i)) : null
                    })))
                }
                _onOpenLink(e) {
                    this._gnar.snippetsLinkOpened(e)
                }
                _openEditor() {
                    const e = this._activeCardModel.get();
                    this._activeCardModel.set({
                        ...e,
                        mode: "editor"
                    })
                }
                _dismiss() {
                    this._activeCardModel.set(null)
                }
                show(e) {
                    this._activeCardModel.set(e)
                }
                hide() {
                    this._activeCardModel.set(null), this._hovered.next(!1)
                }
                isVisible() {
                    return !!this._activeCardModel.get()
                }
                isShortcutPopupShown() {
                    var e;
                    return "shortcutPopup" === (null === (e = this._activeCardModel.get()) || void 0 === e ? void 0 : e.mode)
                }
                dispose() {
                    this.hide()
                }
            }
            class g {
                constructor(e) {
                    this._rpc = e, this.load = this._rpc.loadSnippets, this.addSnippet = this._rpc.addSnippet, this.getTrigger = this._rpc.getSnippetsTrigger
                }
            }
        }
    }
]);
