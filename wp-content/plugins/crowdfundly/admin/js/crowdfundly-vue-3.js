(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [, , , , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "d", (function() {
            return n
        })), o.d(t, "j", (function() {
            return r
        })), o.d(t, "a", (function() {
            return d
        })), o.d(t, "h", (function() {
            return l
        })), o.d(t, "f", (function() {
            return c
        })), o.d(t, "b", (function() {
            return m
        })), o.d(t, "g", (function() {
            return _
        })), o.d(t, "e", (function() {
            return h
        })), o.d(t, "i", (function() {
            return x
        })), o.d(t, "k", (function() {
            return f
        })), o.d(t, "l", (function() {
            return w
        })), o.d(t, "c", (function() {
            return y
        }));
        var n = "create_role",
            r = "update_role",
            d = "assign_member",
            l = "update_member",
            c = "delete_member",
            m = "create_campaign",
            _ = "update_campaign",
            h = "delete_campaign",
            x = "update_organization",
            f = "view_donation",
            w = "view_refund",
            y = "create_category"
    }, , function(e, t, o) {
        "use strict";
        o.d(t, "i", (function() {
            return x
        })), o.d(t, "j", (function() {
            return f
        })), o.d(t, "a", (function() {
            return w
        })), o.d(t, "o", (function() {
            return y
        })), o.d(t, "e", (function() {
            return k
        })), o.d(t, "f", (function() {
            return v
        })), o.d(t, "c", (function() {
            return z
        })), o.d(t, "n", (function() {
            return C
        })), o.d(t, "h", (function() {
            return S
        })), o.d(t, "p", (function() {
            return E
        })), o.d(t, "k", (function() {
            return O
        })), o.d(t, "m", (function() {
            return P
        })), o.d(t, "d", (function() {
            return T
        })), o.d(t, "b", (function() {
            return I
        })), o.d(t, "g", (function() {
            return R
        })), o.d(t, "l", (function() {
            return $
        }));
        o(9), o(6);
        var n = o(43),
            r = (o(21), o(285), o(286), o(20)),
            d = (o(63), o(64), o(123), o(74), o(19), o(11), o(2)),
            l = (o(58), o(5), o(3), o(7), o(16), o(0)),
            c = o(4),
            m = o.n(c);

        function _(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? _(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function x(e) {
            m.a.config.errorHandler && m.a.config.errorHandler(e)
        }

        function f(e) {
            return e.then((function(e) {
                return e.default || e
            }))
        }

        function w(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var o = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = o, e.options.data = function() {
                    var data = o.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), h({}, data, {}, t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function y(e) {
            return e.options && e._Ctor === e ? e : (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = m.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file), e)
        }

        function k(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e[o]).map((function(r) {
                    return t && t.push(n), e[o][r]
                }))
            })))
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return k(e, t, "instances")
        }

        function z(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, o) {
                return Object.keys(e.components).reduce((function(n, r) {
                    return e.components[r] ? n.push(t(e.components[r], e.instances[r], e, r, o)) : delete e.components[r], n
                }), [])
            })))
        }

        function C(e, t) {
            return Promise.all(z(e, function() {
                var e = Object(d.a)(regeneratorRuntime.mark((function e(o, n, r, d) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof o || o.options) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, o();
                            case 3:
                                o = e.sent;
                            case 4:
                                return r.components[d] = o = y(o), e.abrupt("return", "function" == typeof t ? t(o, n, r, d) : o);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, o, n, r) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function S(e) {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = Object(d.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, C(t);
                        case 4:
                            return e.abrupt("return", h({}, t, {
                                meta: k(t).map((function(e, o) {
                                    return h({}, e.options.meta, {}, (t.matched[o] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function E(e, t) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = Object(d.a)(regeneratorRuntime.mark((function e(t, o) {
                var d, l, c, m;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: o.payload,
                                error: o.error,
                                base: "/",
                                env: {
                                    FB_REDIRECT_URL: "",
                                    GOOGLE_REDIRECT_URL: "",
                                    LINKEDIN_REDIRECT_URL: "",
                                    BASE_URL: "https://api.crowdfundly.io/api/v1/",
                                    APP_VERSION: "1.0.1",
                                    VERSION_RELEASED_AT: "SEP 15, 2020",
                                    VERSION_CHANGELOG_URL: "https://crowdfundly.io/changelog/",
                                    FACEBOOK_REDIRECT_URL: "",
                                    API_HOST: "https://api.crowdfundly.io",
                                    DOMAIN: "https://app.crowdfundly.io",
                                    API_BASE_URL: "https://api.crowdfundly.io",
                                    API_PREFIX: "api",
                                    STRIPE_SECRET_KEY: "sk_test_KVX4GzZtGyH7RE7Ji7E8cq7i",
                                    STRIPE_PUBLIC_KEY: "pk_test_eVPFdytafjZjNtV5RZHdoNMI00gH4Lvw9v",
                                    CLIENT_BASE_URL: "https://app.crowdfundly.io",
                                    BASE_DOMAIN: "crowdfundly.io",
                                    DASHBOARD: "crowdfundly.io",
                                    NODE_ENV: "production"
                                }
                            }, o.req && (t.context.req = o.req), o.res && (t.context.res = o.res), o.ssrContext && (t.context.ssrContext = o.ssrContext), t.context.redirect = function(e, path, o) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var n = Object(r.a)(path);
                                    if ("number" == typeof e || "undefined" !== n && "object" !== n || (o = path || {}, path = e, n = Object(r.a)(path), e = 302), "object" === n && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = B(path, o), window.location.replace(path), new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: path,
                                        query: o,
                                        status: e
                                    })
                                }
                            }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([S(o.route), S(o.from)]);
                        case 3:
                            d = e.sent, l = Object(n.a)(d, 2), c = l[0], m = l[1], o.route && (t.context.route = c), o.from && (t.context.from = m), t.context.next = o.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function O(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : P(e[0], t).then((function() {
                return O(e.slice(1), t)
            }))
        }

        function P(e, t) {
            var o;
            return (o = 2 === e.length ? new Promise((function(o) {
                e(t, (function(e, data) {
                    e && t.error(e), o(data = data || {})
                }))
            })) : e(t)) && o instanceof Promise && "function" == typeof o.then ? o : Promise.resolve(o)
        }

        function T(base, e) {
            var path = decodeURI(window.location.pathname);
            return "hash" === e ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
        }

        function I(e, t) {
            return function(e, t) {
                for (var o = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (o[i] = new RegExp("^(?:" + e[i].pattern + ")$", M(t)));
                return function(t, n) {
                    for (var path = "", data = t || {}, r = (n || {}).pretty ? N : encodeURIComponent, d = 0; d < e.length; d++) {
                        var l = e[d];
                        if ("string" != typeof l) {
                            var c = data[l.name || "pathMatch"],
                                m = void 0;
                            if (null == c) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(c)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                                if (0 === c.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var _ = 0; _ < c.length; _++) {
                                    if (m = r(c[_]), !o[d].test(m)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(m) + "`");
                                    path += (0 === _ ? l.prefix : l.delimiter) + m
                                }
                            } else {
                                if (m = l.asterisk ? N(c, !0) : r(c), !o[d].test(m)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + m + '"');
                                path += l.prefix + m
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(e, t) {
                var o, n = [],
                    r = 0,
                    d = 0,
                    path = "",
                    l = t && t.delimiter || "/";
                for (; null != (o = D.exec(e));) {
                    var c = o[0],
                        m = o[1],
                        _ = o.index;
                    if (path += e.slice(d, _), d = _ + c.length, m) path += m[1];
                    else {
                        var h = e[d],
                            x = o[2],
                            f = o[3],
                            w = o[4],
                            y = o[5],
                            k = o[6],
                            v = o[7];
                        path && (n.push(path), path = "");
                        var z = null != x && null != h && h !== x,
                            C = "+" === k || "*" === k,
                            S = "?" === k || "*" === k,
                            j = o[2] || l,
                            pattern = w || y;
                        n.push({
                            name: f || r++,
                            prefix: x || "",
                            delimiter: j,
                            optional: S,
                            repeat: C,
                            partial: z,
                            asterisk: Boolean(v),
                            pattern: pattern ? U(pattern) : v ? ".*" : "[^" + L(j) + "]+?"
                        })
                    }
                }
                d < e.length && (path += e.substr(d));
                path && n.push(path);
                return n
            }(e, t), t)
        }

        function R(e, t) {
            var o = {},
                n = h({}, e, {}, t);
            for (var r in n) String(e[r]) !== String(t[r]) && (o[r] = !0);
            return o
        }

        function $(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e;
            else try {
                t = JSON.stringify(e, null, 2)
            } catch (o) {
                t = "[".concat(e.constructor.name, "]")
            }
            return h({}, e, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        };
        var D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function N(e, t) {
            var o = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(o, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function L(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function U(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function M(e) {
            return e && e.sensitive ? "" : "i"
        }

        function B(e, t) {
            var o, r = e.indexOf("://"); - 1 !== r ? (o = e.substring(0, r), e = e.substring(r + 3)) : e.startsWith("//") && (e = e.substring(2));
            var d, l = e.split("/"),
                c = (o ? o + "://" : "//") + l.shift(),
                path = l.filter(Boolean).join("/");
            if (2 === (l = path.split("#")).length) {
                var m = l,
                    _ = Object(n.a)(m, 2);
                path = _[0], d = _[1]
            }
            return c += path ? "/" + path : "", t && "{}" !== JSON.stringify(t) && (c += (2 === e.split("?").length ? "&" : "?") + function(e) {
                return Object.keys(e).sort().map((function(t) {
                    var o = e[t];
                    return null == o ? "" : Array.isArray(o) ? o.slice().map((function(e) {
                        return [t, "=", e].join("")
                    })).join("&") : t + "=" + o
                })).filter(Boolean).join("&")
            }(t)), c += d ? "#" + d : ""
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "INTRODUCER", (function() {
            return d
        })), o.d(t, "STATUS", (function() {
            return l
        })), o.d(t, "STATUS_KEYS", (function() {
            return c
        })), o.d(t, "LAWYER_STATUS", (function() {
            return m
        })), o.d(t, "LAWYER_STATUS_KEY_MAPS", (function() {
            return _
        })), o.d(t, "CAMPAIGN_STATUS_COLOR", (function() {
            return h
        })), o.d(t, "VOLUNTEER_STATUS", (function() {
            return x
        })), o.d(t, "TYPE_CHARITY", (function() {
            return f
        })), o.d(t, "TYPE_BUSINESS", (function() {
            return w
        })), o.d(t, "CAMPAIGN_TYPES", (function() {
            return y
        })), o.d(t, "TARGET_DATE_EXPIRED", (function() {
            return k
        }));
        var n, r = o(0),
            d = "Campaign Assistant",
            l = {
                0: "draft",
                1: "approved",
                2: "rejected",
                3: "under_verification",
                4: "requested_amendation",
                5: "resubmitted",
                6: "assigned_volunteer",
                7: "approved_by_volunteer",
                8: "requested_lawyer",
                9: "assigned_lawyer",
                10: "approved_by_lawyer",
                11: "rejected_by_lawyer",
                12: "inactive",
                13: "requested_approval_after_inactivation",
                14: "accepted_by_lawyer",
                15: "denied_by_lawyer",
                16: "deleted",
                17: "accepted",
                18: "requested_suspension",
                19: "suspended",
                20: "published",
                21: "cancelled",
                22: "closed",
                23: "pending"
            },
            c = {
                draft: 0,
                drafted: 0,
                approved: 1,
                rejected: 2,
                under_verification: 3,
                requested_amendation: 4,
                resubmitted: 5,
                assigned_volunteer: 6,
                approved_by_volunteer: 7,
                requested_lawyer: 8,
                assigned_lawyer: 9,
                approved_by_lawyer: 10,
                rejected_by_lawyer: 11,
                inactive: 12,
                requested_approval_after_inactivation: 13,
                accepted_by_lawyer: 14,
                denied_by_lawyer: 15,
                deleted: 16,
                accepted: 17,
                requested_suspension: 18,
                suspended: 19,
                published: 20,
                cancelled: 21,
                closed: 22,
                pending: 23
            },
            m = {
                1: "unassigned",
                2: "assigned",
                3: "case_accepted",
                4: "case_denied",
                5: "marked_verified",
                6: "rejected_accepted_case"
            },
            _ = {
                unassigned: 1,
                assigned: 2,
                case_accepted: 3,
                case_denied: 4,
                marked_verified: 5,
                rejected_accepted_case: 6
            },
            h = {
                draft: "dark",
                drafted: "dark",
                accepted: "info",
                approved: "secondary",
                published: "success",
                raised: "success",
                under_verification: "warning",
                pending: "warning",
                rejected: "danger",
                deleted: "danger",
                closed: "danger",
                suspended: "warning",
                requested_suspendation: "warning"
            },
            x = {
                1: "unassigned_volunteer",
                2: "assigned_volunteer",
                3: "marked_verified_volunteer"
            },
            f = 1,
            w = 2,
            y = (n = {}, Object(r.a)(n, f, "Donation Based"), Object(r.a)(n, w, "Reward Based"), n),
            k = -1
    }, , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = {
                props: {
                    title: {
                        type: String,
                        require: !1
                    }
                }
            },
            r = o(1),
            component = Object(r.a)(n, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "page-header"
                }, [this.title ? t("h4", {
                    staticClass: "page-header__title",
                    domProps: {
                        textContent: this._s(this.title)
                    }
                }) : this._e(), this._v(" "), this._t("default")], 2)
            }), [], !1, null, null, null);
        t.a = component.exports
    }, , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return n
        })), o.d(t, "b", (function() {
            return r
        }));
        var n = 2097152,
            r = {
                DEFAULT_SIZE: 2097152,
                CAMPAIGN_GALLERY: 2097152,
                LOGO: 1048576,
                OFFER_IMAGE: 1572864,
                AVATAR: 1048576,
                FAVICON: 524288,
                COVER_PHOTO: 2097152,
                SLIDER_IMAGE: 2097152,
                STORY_IMAGE: 2097152,
                EDITOR_IMAGE: 2097152,
                CAMPAIGN_UPDATE_IMAGE: 2097152
            }
    }, , , , , , , function(e, t, o) {
        "use strict";
        var n = {
                props: {
                    title: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "button"
                    },
                    buttonDisabled: {
                        required: !1,
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    clicked: function() {
                        this.$emit("onPress")
                    }
                }
            },
            r = o(1),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("button", {
                    staticClass: "filter__btn",
                    class: "filter__btn--" + e.type,
                    attrs: {
                        type: e.type,
                        disabled: e.buttonDisabled
                    },
                    on: {
                        click: e.clicked
                    }
                }, [e.title ? o("span", {
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._t("default")], 2)])
            }), [], !1, null, null, null);
        t.a = component.exports
    }, , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "c", (function() {
            return n
        })), o.d(t, "a", (function() {
            return r
        })), o.d(t, "d", (function() {
            return d
        })), o.d(t, "b", (function() {
            return l
        })), o.d(t, "e", (function() {
            return c
        }));
        var n = 1,
            r = 2,
            d = 3,
            l = 4,
            c = 5
    }, , , , , , function(e, t, o) {
        "use strict";
        o(11), o(9), o(6), o(5), o(3), o(7);
        var n = o(2),
            r = o(0),
            d = (o(16), o(4)),
            l = o.n(d),
            c = o(229),
            m = o(176),
            _ = o.n(m),
            h = o(100),
            x = o.n(h),
            f = o(110),
            w = o(12);
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function() {
            window.history.scrollRestoration = "auto"
        })), window.addEventListener("load", (function() {
            window.history.scrollRestoration = "manual"
        })));
        var y = function() {},
            k = f.a.prototype.push;
        f.a.prototype.push = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
                o = arguments.length > 2 ? arguments[2] : void 0;
            return k.call(this, e, t, o)
        }, l.a.use(f.a);
        var v = {
            mode: "hash",
            base: decodeURI("/"),
            linkActiveClass: "active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, o) {
                var n = !1,
                    r = Object(w.e)(e);
                r.length < 2 && r.every((function(e) {
                    return !1 !== e.options.scrollToTop
                })) ? n = {
                    x: 0,
                    y: 0
                } : r.some((function(e) {
                    return e.options.scrollToTop
                })) && (n = {
                    x: 0,
                    y: 0
                }), o && (n = o);
                var d = window.$nuxt;
                return e.path === t.path && e.hash !== t.hash && d.$nextTick((function() {
                    return d.$emit("triggerScroll")
                })), new Promise((function(t) {
                    d.$once("triggerScroll", (function() {
                        if (e.hash) {
                            var o = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (o = "#" + window.CSS.escape(o.substr(1)));
                            try {
                                document.querySelector(o) && (n = {
                                    selector: o
                                })
                            } catch (e) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        t(n)
                    }))
                }))
            },
            routes: [{
                path: "/dashboard",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 443)))
                },
                name: "dashboard"
            }, {
                path: "/notifications",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 415)))
                },
                name: "notifications"
            }, {
                path: "/verify",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 441)))
                },
                name: "verify"
            }, {
                path: "/auth/callback",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 440)))
                },
                name: "auth-callback"
            }, {
                path: "/auth/request-login",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 439)))
                },
                name: "auth-request-login"
            }, {
                path: "/auth/unverified",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 438)))
                },
                name: "auth-unverified"
            }, {
                path: "/dashboard/campaigns",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 406)))
                },
                name: "dashboard-campaigns"
            }, {
                path: "/dashboard/categories",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 399)))
                },
                name: "dashboard-categories"
            }, {
                path: "/dashboard/contributions",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 411)))
                },
                name: "dashboard-contributions"
            }, {
                path: "/dashboard/fundraiser",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 434)))
                },
                name: "dashboard-fundraiser"
            }, {
                path: "/dashboard/fundraisers",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 433)))
                },
                name: "dashboard-fundraisers"
            }, {
                path: "/dashboard/payouts",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 397)))
                },
                name: "dashboard-payouts"
            }, {
                path: "/dashboard/refunds",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 431)))
                },
                name: "dashboard-refunds"
            }, {
                path: "/dashboard/roles",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 400)))
                },
                name: "dashboard-roles"
            }, {
                path: "/dashboard/settings",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 430)))
                },
                name: "dashboard-settings"
            }, {
                path: "/dashboard/users",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 396)))
                },
                name: "dashboard-users"
            }, {
                path: "/organization/create",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 428)))
                },
                name: "organization-create"
            }, {
                path: "/dashboard/campaigns/reports",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 427)))
                },
                name: "dashboard-campaigns-reports"
            }, {
                path: "/dashboard/components/overview",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 426)))
                },
                name: "dashboard-components-overview"
            }, {
                path: "/dashboard/contributions/offline",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 425)))
                },
                name: "dashboard-contributions-offline"
            }, {
                path: "/dashboard/payouts/methods",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 398)))
                },
                name: "dashboard-payouts-methods"
            }, {
                path: "/dashboard/settings/crowdfunding",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 423)))
                },
                name: "dashboard-settings-crowdfunding"
            }, {
                path: "/dashboard/settings/custom-domain",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 445)))
                },
                name: "dashboard-settings-custom-domain"
            }, {
                path: "/dashboard/settings/fundraiser",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 422)))
                },
                name: "dashboard-settings-fundraiser"
            }, {
                path: "/dashboard/settings/media",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 421)))
                },
                name: "dashboard-settings-media"
            }, {
                path: "/dashboard/settings/payment",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 420)))
                },
                name: "dashboard-settings-payment"
            }, {
                path: "/dashboard/settings/payment-history",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 419)))
                },
                name: "dashboard-settings-payment-history"
            }, {
                path: "/dashboard/settings/plan",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 393)))
                },
                name: "dashboard-settings-plan"
            }, {
                path: "/dashboard/settings/policies",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 413)))
                },
                name: "dashboard-settings-policies"
            }, {
                path: "/dashboard/settings/social",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 416)))
                },
                name: "dashboard-settings-social"
            }, {
                path: "/dashboard/settings/theme",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 442)))
                },
                name: "dashboard-settings-theme"
            }, {
                path: "/user/:username?",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 417)))
                },
                name: "user-username"
            }, {
                path: "/user/:username?/all-ltd-licenses",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 412)))
                },
                name: "user-username-all-ltd-licenses"
            }, {
                path: "/user/:username?/billing",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 418)))
                },
                name: "user-username-billing"
            }, {
                path: "/user/:username?/contributions",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 409)))
                },
                name: "user-username-contributions"
            }, {
                path: "/user/:username?/payment-history",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 429)))
                },
                name: "user-username-payment-history"
            }, {
                path: "/user/:username?/refunds",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 407)))
                },
                name: "user-username-refunds"
            }, {
                path: "/user/:username?/saved-cards",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 437)))
                },
                name: "user-username-saved-cards"
            }, {
                path: "/user/:username?/settings",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 401)))
                },
                name: "user-username-settings"
            }, {
                path: "/user/:username?/story",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 405)))
                },
                name: "user-username-story"
            }, {
                path: "/user/:username?/subscription",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 414)))
                },
                name: "user-username-subscription"
            }, {
                path: "/organization/:username?/fundraise/new-campaign",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 392)))
                },
                name: "organization-username-fundraise-new-campaign"
            }, {
                path: "/user/:username?/subscription/payment",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 435)))
                },
                name: "user-username-subscription-payment"
            }, {
                path: "/campaigns/:slug?/:id?/brochure",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 403)))
                },
                name: "campaigns-slug-id-brochure"
            }, {
                path: "/campaigns/:slug?/:id?/chat-presets",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 444)))
                },
                name: "campaigns-slug-id-chat-presets"
            }, {
                path: "/campaigns/:slug?/:id?/contribution-presets",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 410)))
                },
                name: "campaigns-slug-id-contribution-presets"
            }, {
                path: "/campaigns/:slug?/:id?/edit",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 394)))
                },
                name: "campaigns-slug-id-edit"
            }, {
                path: "/campaigns/:slug?/:id?/endorse",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 402)))
                },
                name: "campaigns-slug-id-endorse"
            }, {
                path: "/campaigns/:slug?/:id?/fundraisers",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 424)))
                },
                name: "campaigns-slug-id-fundraisers"
            }, {
                path: "/campaigns/:slug?/:id?/offline-contributions",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 408)))
                },
                name: "campaigns-slug-id-offline-contributions"
            }, {
                path: "/campaigns/:slug?/:id?/online-contributions",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 432)))
                },
                name: "campaigns-slug-id-online-contributions"
            }, {
                path: "/campaigns/:slug?/:id?/report",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 436)))
                },
                name: "campaigns-slug-id-report"
            }, {
                path: "/campaigns/:slug?/:id?/statistics",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 447)))
                },
                name: "campaigns-slug-id-statistics"
            }, {
                path: "/campaigns/:slug?/:id?/thank-you-message",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 446)))
                },
                name: "campaigns-slug-id-thank-you-message"
            }, {
                path: "/campaigns/:slug?/:id?/update",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 395)))
                },
                name: "campaigns-slug-id-update"
            }, {
                path: "/",
                component: function() {
                    return Object(w.j)(o.e(0).then(o.bind(null, 404)))
                },
                name: "index"
            }],
            fallback: !1
        };

        function z() {
            return new f.a(v)
        }
        var C = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(e, t) {
                    var o = t.parent,
                        data = t.data,
                        n = t.props;
                    data.nuxtChild = !0;
                    for (var r = o, d = o.$nuxt.nuxt.transitions, l = o.$nuxt.nuxt.defaultTransition, c = 0; o;) o.$vnode && o.$vnode.data.nuxtChild && c++, o = o.$parent;
                    data.nuxtChildDepth = c;
                    var m = d[c] || l,
                        _ = {};
                    S.forEach((function(e) {
                        void 0 !== m[e] && (_[e] = m[e])
                    }));
                    var h = {};
                    j.forEach((function(e) {
                        "function" == typeof m[e] && (h[e] = m[e].bind(r))
                    }));
                    var x = h.beforeEnter;
                    if (h.beforeEnter = function(e) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), x) return x.call(r, e)
                        }, !1 === m.css) {
                        var f = h.leave;
                        (!f || f.length < 2) && (h.leave = function(e, t) {
                            f && f.call(r, e), r.$nextTick(t)
                        })
                    }
                    var w = e("routerView", data);
                    return n.keepAlive && (w = e("keep-alive", {
                        props: n.keepAliveProps
                    }, [w])), e("transition", {
                        props: _,
                        on: h
                    }, [w])
                }
            },
            S = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            j = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            E = {
                props: ["error"],
                layout: "public",
                computed: {
                    statusCode: function() {
                        return this.error.statusCode ? this.error.statusCode : 404
                    },
                    message: function() {
                        return void 0 !== this.error.message ? this.error.message : $t("the_page_you_requested_could_not_be_found")
                    }
                }
            },
            A = o(1),
            O = Object(A.a)(E, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "error-container"
                }, [t("div", {
                    staticClass: "g-container-lg"
                }, [t("div", {
                    staticClass: "error-wrapper"
                }, [t("div", {
                    staticClass: "error-wrapper__bg",
                    staticStyle: {
                        "background-image": "url('https://app.crowdfundly.io/images/banner/404.png')"
                    }
                }), this._v(" "), t("div", {
                    staticClass: "error-content"
                }, [t("div", [t("h1", {
                    staticClass: "error-content__title"
                }, [this._v("Oops!")]), this._v(" "), t("p", {
                    staticClass: "error-content__subtitle",
                    domProps: {
                        textContent: this._s(this.message)
                    }
                })]), this._v(" "), this._m(0)])])])])
            }), [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "error-container__row"
                }, [t("div", {
                    staticClass: "error-container__row-item"
                }, [t("a", {
                    staticClass: "btn btn-outline-primary",
                    attrs: {
                        href: "/"
                    }
                }, [this._v("\n                                Back to Home\n                            ")])])])
            }], !1, null, null, null).exports,
            P = (o(63), o(64), o(19), o(43)),
            T = {
                name: "Nuxt",
                components: {
                    NuxtChild: C,
                    NuxtError: O
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.b)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(P.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var o = t.options;
                            if (o.key) return "function" == typeof o.key ? o.key(this.$route) : o.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(e) {
                    var t = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return t.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occured while showing the error page"), e("p", "Unfortunately an error occured and while showing the error page another error occured"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return t.displayingNuxtError = !1
                    })), e(O, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            I = (o(58), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var e = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return e.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    },
                    decrease: function(e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var e = this;
                        return this.clear(), setTimeout((function() {
                            e.show = !1, e.$nextTick((function() {
                                e.percent = 0, e.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function() {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var e = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 ? (e.skipTimerCount = 1, e.reversed = !e.reversed) : e.percent <= 0 && (e.skipTimerCount = 1, e.reversed = !e.reversed)))
                        }), 100)
                    }
                },
                render: function(e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), t
                }
            }),
            R = (o(293), Object(A.a)(I, void 0, void 0, !1, null, null, null).exports),
            $ = (o(295), o(297), o(18)),
            D = o(96),
            N = {
                components: {
                    notification: D.a
                },
                props: {
                    showAllNotification: {
                        required: !1,
                        default: !0,
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        notifications: [],
                        isProccessing: !1,
                        countNotifications: 0,
                        loadingText: this.$t("loading_notifications")
                    }
                },
                created: function() {
                    this.fetchNotifications()
                },
                computed: {},
                methods: {
                    fetchNotifications: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/notification/unread";
                        this.isProccessing = !0, this.$axios.$get(t).then((function(t) {
                            e.nextPage = t.links.next;
                            var o = [].concat(Object($.a)(e.notifications), Object($.a)(t.data));
                            e.notifications = o, e.isProccessing = !1, e.countNotifications = t.meta.total
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    },
                    reloadNotification: function() {
                        var e = this;
                        this.isProccessing = !0, this.$axios.$get("/notification/unread").then((function(t) {
                            e.nextPage = t.links.next, e.notifications = t.data, e.isProccessing = !1, e.countNotifications = t.meta.total
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    },
                    markAsRead: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.isProccessing = !0, e.loadingText = e.$t("marking_all_as_read"), t.prev = 2, t.next = 5, e.$axios.$put("/notification/mark-as-read").then((function(t) {
                                            e.reloadNotification(), window.location.reload()
                                        }));
                                    case 5:
                                        t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(2), e.$store.commit("error/addError", t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 7]
                            ])
                        })))()
                    },
                    dropdownHeaderMsg: function() {
                        return this.countNotifications > 1 ? this.$t("you_have") + " " + this.countNotifications + " " + this.$t("new_notifications") : 1 == this.countNotifications ? this.$t("you_have") + " " + this.countNotifications + " " + this.$t("new_notifications") : this.$t("you_have_no_new_notification")
                    }
                }
            },
            L = (o(315), Object(A.a)(N, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("g-dropdown", {
                    staticClass: "dropdown-notification",
                    attrs: {
                        size: "lg",
                        header: e.countNotifications > 0 && !e.isProccessing,
                        footer: !e.isProccessing
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "dropdown-notification__toggle"
                            }, [e.countNotifications >= 1 ? o("span", {
                                staticClass: "dropdown-notification__toggle-count",
                                domProps: {
                                    textContent: e._s(e.countNotifications)
                                }
                            }) : e._e(), e._v(" "), o("i", {
                                staticClass: "fas fa-bell dropdown-notification__toggle-icon"
                            })])]
                        },
                        proxy: !0
                    }])
                }, [e._v(" "), o("div", {
                    staticClass: "dropdown-notification__inner"
                }, [e.countNotifications > 0 ? o("div", {
                    staticClass: "dropdown-notification__header"
                }, [o("p", {
                    staticClass: "dropdown-notification__header-msg",
                    domProps: {
                        textContent: e._s(e.dropdownHeaderMsg())
                    }
                }), e._v(" "), o("button", {
                    staticClass: "dropdown-notification__header-mark-btn",
                    domProps: {
                        textContent: e._s(e.$t("mark_all_as_read"))
                    },
                    on: {
                        click: e.markAsRead
                    }
                })]) : e._e(), e._v(" "), o("div", {
                    staticClass: "dropdown-notification__body"
                }, [0 !== e.countNotifications || e.isProccessing ? e._e() : o("section-placeholder", {
                    attrs: {
                        description: e.$t("you_have_no_new_notification"),
                        icon: "fas fa-bell-slash"
                    }
                }), e._v(" "), e.isProccessing ? e._e() : o("ul", {
                    staticClass: "dropdown-notification__list"
                }, e._l(e.notifications, (function(e, t) {
                    return o("li", {
                        key: t,
                        staticClass: "dropdown-notification__list-item"
                    }, [o("notification", {
                        attrs: {
                            details: e,
                            dropdown: !0
                        }
                    })], 1)
                })), 0)], 1), e._v(" "), e.showAllNotification ? o("div", {
                    staticClass: "dropdown-notification__footer"
                }, [o("n-link", {
                    staticClass: "dropdown-notification__footer-link",
                    attrs: {
                        to: "/notifications"
                    },
                    domProps: {
                        textContent: e._s(e.$t("view_all_notifications"))
                    }
                })], 1) : e._e()])])
            }), [], !1, null, "7845639e", null).exports),
            U = o(8);
        o(91);

        function M(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var B = {
                components: {
                    notification: D.a
                },
                data: function() {
                    return {
                        notifications: [],
                        isProccessing: !1,
                        countNotifications: 0,
                        loadingText: "Loading notifications",
                        width: window.innerWidth,
                        limitString: 32
                    }
                },
                watch: {
                    width: function(e) {
                        console.log("value", e), e < 577 && (this.limitString = 20)
                    }
                },
                created: function() {
                    this.fetchNotifications()
                },
                mounted: function() {
                    this.width < 577 && (this.limitString = 20)
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? M(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : M(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)(["organization"])),
                methods: {
                    fetchNotifications: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/notification/unread";
                        this.isProccessing = !0, this.$axios.$get(t).then((function(t) {
                            e.nextPage = t.links.next;
                            var o = [].concat(Object($.a)(e.notifications), Object($.a)(t.data));
                            e.notifications = o, e.isProccessing = !1, e.countNotifications = t.meta.total
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    },
                    reloadNotification: function() {
                        var e = this;
                        this.isProccessing = !0, this.$axios.$get("/notification/unread").then((function(t) {
                            e.nextPage = t.links.next, e.notifications = t.data, e.isProccessing = !1, e.countNotifications = t.meta.total
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    },
                    markAsRead: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.isProccessing = !0, e.loadingText = e.$t("marking_all_as_read"), t.prev = 2, t.next = 5, e.$axios.$put("/notification/mark-as-read").then((function(t) {
                                            e.reloadNotification()
                                        }));
                                    case 5:
                                        t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(2), e.$store.commit("error/addError", t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 7]
                            ])
                        })))()
                    },
                    dropdownHeaderMsg: function() {
                        return this.countNotifications > 1 ? "You have " + this.countNotifications + " new notifications" : 1 == this.countNotifications ? "You have " + this.countNotifications + " new notification" : this.$t("you_have_no_new_notification")
                    },
                    setOrganization: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.next = 2, t.$store.dispatch("set_organization", e);
                                    case 2:
                                        return o.next = 4, t.setOrganizationWP(e);
                                    case 4:
                                        return o.next = 6, t.$router.push({
                                            name: "dashboard"
                                        });
                                    case 6:
                                        window.location.reload();
                                    case 7:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    setOrganizationWP: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            var n;
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (o.prev = 0, !(n = JSON.parse(localStorage.getItem("crowdfundly"))).changed_organization) {
                                            o.next = 5;
                                            break
                                        }
                                        return o.next = 5, t.$axios.$post(n.changed_organization, {
                                            organization: e
                                        });
                                    case 5:
                                        o.next = 9;
                                        break;
                                    case 7:
                                        o.prev = 7, o.t0 = o.catch(0);
                                    case 9:
                                    case "end":
                                        return o.stop()
                                }
                            }), o, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                }
            },
            F = (o(317), Object(A.a)(B, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", e._l(e.$auth.user.organizations, (function(t, n) {
                    return o("g-dropdown-item-button", {
                        key: n,
                        staticClass: "g-dropdown__item--organization",
                        on: {
                            onPress: function(o) {
                                return e.setOrganization(t)
                            }
                        }
                    }, [o("i", {
                        staticClass: "far fa-circle"
                    }), e._v("\n        " + e._s(e._f("limitString")(t.name, e.limitString)) + "\n    ")])
                })), 1)
            }), [], !1, null, "280649f5", null).exports),
            K = o(10);

        function Y(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var G = {
                name: "appHeader",
                components: {
                    "dropdown-notification": L,
                    "organization-menu": F
                },
                data: function() {
                    return {
                        toggleMenu: !1,
                        isLogoutProcessing: !1,
                        query: null,
                        isOrganizationCreateAllowed: !1,
                        steps: [{
                            target: '[data-v-step="0"]',
                            content: "Start with creating a new organization, set default one out of your organizations."
                        }, {
                            target: '[data-v-step="1"]',
                            content: "Keep updated with contributions, campaigns, reminder and much more"
                        }, {
                            target: '[data-v-step="2"]',
                            content: "Set your default language"
                        }]
                    }
                },
                created: function() {
                    this.$auth.loggedIn && this.$auth.user.has_seen_dashboard ? this.$emit("steps", []) : this.$emit("steps", this.steps)
                },
                mounted: function() {
                    this.closeSidebar()
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? Y(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Y(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)(["isUser", "isAdmin", "organization", "hasSubscription"]), {
                    showFundraiseButton: function() {
                        return !!this.$auth.loggedIn && this.__org_member_can(K.b)
                    },
                    organizations: function() {
                        return this.$auth.loggedIn ? this.$auth.user.organizations : []
                    },
                    baseDomain: function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }, t
                    }((function() {
                        return baseDomain()
                    })),
                    setHeight: function() {
                        var e = document.documentElement;
                        return window.innerWidth < 992 ? e.clientHeight + "px" : "auto"
                    }
                }),
                methods: {
                    search: function() {
                        if (this.query) {
                            var e = {
                                name: "search",
                                query: {
                                    q: this.query
                                }
                            };
                            this.$router.push(e)
                        }
                    },
                    logout: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.logoutBtnText = e.$t("logging_out") + "...", e.isLogoutProcessing = !0, t.prev = 2, t.next = 5, e.$store.dispatch("logout");
                                    case 5:
                                        t.next = 9;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(2);
                                    case 9:
                                        return t.prev = 9, e.logoutBtnText = e.$t("logout"), e.isLogoutProcessing = !1, t.finish(9);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 7, 9, 13]
                            ])
                        })))()
                    },
                    closeSidebar: function() {
                        var e = this;
                        window.innerWidth <= 991 && function() {
                            for (var t = e, o = document.getElementsByClassName("menu__item-link"), n = function(i) {
                                    o[i].addEventListener("click", (function() {
                                        t.toggleMenu = !t.toggleMenu, console.log(i + ". clicked", t.toggleMenu)
                                    }), !0)
                                }, i = 0; i < o.length; i++) n(i)
                        }()
                    },
                    setOrganization: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.next = 2, t.$store.dispatch("set_organization", e);
                                    case 2:
                                        return o.next = 4, t.$cookies.set("selected_organization_id", e.id);
                                    case 4:
                                        return o.next = 6, t.$router.push({
                                            name: "dashboard"
                                        });
                                    case 6:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    checkPlan: function(e, t) {
                        var o = this;
                        return Object(n.a)(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, get_plan_value(e).then((function(e) {
                                            o[t] = e
                                        }));
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            },
            V = (o(319), Object(A.a)(G, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "header"
                }, [o("client-only", [o("button", {
                    staticClass: "menu-toggle",
                    on: {
                        click: function(t) {
                            e.toggleMenu = !e.toggleMenu
                        }
                    }
                }, [o("i", {
                    staticClass: "menu-toggle__icon fas fa-bars"
                })]), e._v(" "), e.$auth.loggedIn ? o("div", {
                    staticClass: "header__logo"
                }, [e.$auth.user.organizations.length > 0 ? o("n-link", {
                    staticClass: "header__logo-wrapper",
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [o("img", {
                    staticClass: "header__logo-img",
                    attrs: {
                        src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                        alt: e.$t("crowdfundly")
                    }
                })]) : o("n-link", {
                    staticClass: "header__logo-wrapper",
                    attrs: {
                        to: {
                            name: "user-username-story",
                            params: {
                                username: e.$auth.user.username
                            }
                        }
                    }
                }, [o("img", {
                    staticClass: "header__logo-img",
                    attrs: {
                        src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                        alt: e.$t("crowdfundly")
                    }
                })])], 1) : o("div", {
                    staticClass: "header__logo"
                }, [o("a", {
                    staticClass: "header__logo-wrapper",
                    attrs: {
                        href: "/"
                    }
                }, [o("img", {
                    staticClass: "header__logo-img",
                    attrs: {
                        src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                        alt: e.$t("crowdfundly")
                    }
                })])]), e._v(" "), e.toggleMenu ? o("div", {
                    staticClass: "sidebar-overlay",
                    on: {
                        click: function(t) {
                            e.toggleMenu = !1
                        }
                    }
                }) : e._e(), e._v(" "), o("div", {
                    staticClass: "header__menu sidebar",
                    class: {
                        sidebar__active: e.toggleMenu
                    },
                    style: "height:" + e.setHeight,
                    attrs: {
                        id: "sidebar"
                    }
                }, [o("button", {
                    staticClass: "sidebar--close-btn",
                    on: {
                        click: function(t) {
                            e.toggleMenu = !e.toggleMenu
                        }
                    }
                }, [o("i", {
                    staticClass: "sidebar--close-btn-icon fas fa-arrow-left"
                })]), e._v(" "), o("div", {
                    staticClass: "header__menu-container sidebar__container"
                }, [o("div", {
                    staticClass: "header__menu-left sidebar__top"
                }, [o("ul", {
                    staticClass: "menu"
                }, [e._e()])]), e._v(" "), o("div", {
                    staticClass: "header__menu-right sidebar__bottom"
                }, [o("ul", {
                    staticClass: "menu ml-lg-4"
                }, [o("li", {
                    staticClass: "menu__item",
                    attrs: {
                        "data-v-step": "2"
                    }
                }, [o("div", {
                    staticClass: "menu__item-link-d p-0"
                }, [o("lang-dropdown", {
                    attrs: {
                        "is-public": ""
                    }
                })], 1)]), e._v(" "), e.$auth.loggedIn && e.$auth.user.organizations.length > 0 ? o("li", {
                    staticClass: "menu__item"
                }, [e.organization ? o("n-link", {
                    staticClass: "menu__item-link menu__item-link--dashboard",
                    attrs: {
                        to: {
                            name: "dashboard"
                        }
                    },
                    domProps: {
                        textContent: e._s(e.$t("dashboard"))
                    }
                }) : o("button", {
                    staticClass: "menu__item-link menu__item-link--dashboard",
                    domProps: {
                        textContent: e._s(e.$t("dashboard"))
                    },
                    on: {
                        click: function(t) {
                            return e.setOrganization(e.$auth.user.organizations[0])
                        }
                    }
                })], 1) : e._e(), e._v(" "), e.$auth.loggedIn && e.$isEmailLoggedIn() ? o("li", {
                    staticClass: "menu__item menu__item--notification",
                    attrs: {
                        "data-v-step": "1"
                    }
                }, [o("dropdown-notification")], 1) : e._e(), e._v(" "), e.$auth.loggedIn ? o("li", {
                    staticClass: "menu__item menu__item menu__item menu__item--profile-public",
                    attrs: {
                        "data-v-step": "0"
                    }
                }, [o("g-dropdown", {
                    staticClass: "user-dropdown",
                    attrs: {
                        caret: !0
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "menu__item-link-d menu__item-link--bg"
                            }, [o("span", {
                                staticClass: "menu__item-link-img",
                                style: "background-image: url(" + e.$auth.user.avatar + ")"
                            }), e._v("\n                                        " + e._s(e._f("limitString")(e.$auth.user.name, 15)) + "\n                                    ")])]
                        },
                        proxy: !0
                    }], null, !1, 3712101581)
                }, [e._v(" "), e.$isEmailLoggedIn() ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "organization-create"
                        }
                    }
                }, [o("div", {
                    staticClass: "menu__item-add-org-public",
                    on: {
                        click: function(t) {
                            e.toggleMenu = !e.toggleMenu
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-plus"
                }), e._v("\n                                        " + e._s(e.$t("add_organization")) + "\n                                    ")])]) : e._e(), e._v(" "), e.$isEmailLoggedIn() ? o("organization-menu") : e._e(), e._v(" "), e.$auth.loggedIn ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "user-username-story",
                            params: {
                                username: e.$auth.user.username
                            }
                        }
                    }
                }, [o("i", {
                    staticClass: "far fa-user"
                }), e._v("\n                                    " + e._s(e.$t("my_profile")) + "\n                                ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.$isEmailLoggedIn() ? o("g-dropdown-item-button", {
                    on: {
                        onPress: e.logout
                    }
                }, [o("i", {
                    staticClass: "fas fa-sign-out-alt"
                }), e._v("\n                                    " + e._s(e.$t("logout")) + "\n                                ")]) : e._e()], 1)], 1) : e._e()])])])]), e._v(" "), e.$auth.loggedIn && e.$isEmailLoggedIn() ? o("div", {
                    staticClass: "header__button header__button--notification header__button--sm"
                }, [o("dropdown-notification")], 1) : e._e()])], 1)
            }), [], !1, null, "dd56b4b8", null).exports),
            W = {
                components: {},
                data: function() {
                    return {
                        social: [{
                            name: "facebook",
                            icon: "fab fa-facebook-f",
                            link: "https://www.facebook.com/crowdfundly.io"
                        }, {
                            name: "twitter",
                            icon: "fab fa-twitter",
                            link: ""
                        }, {
                            name: "linkedin",
                            icon: "fab fa-linkedin-in",
                            link: ""
                        }, {
                            name: "youtube",
                            icon: "fab fa-youtube",
                            link: "https://www.youtube.com/channel/UCbFDVtJ5ANIXBZ1mPZTWmug"
                        }],
                        placeholder: {
                            logo: "https://app.crowdfundly.io/images/placeholder/logo.png"
                        }
                    }
                }
            },
            H = Object(A.a)(W, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "footer"
                }, [o("div", {
                    staticClass: "footer__top"
                }, [o("div", {
                    staticClass: "footer__section justify-content-start"
                }, [o("n-link", {
                    staticClass: "footer__logo",
                    attrs: {
                        to: "/"
                    }
                }, [o("img", {
                    staticClass: "footer__logo-img",
                    attrs: {
                        src: "https://app.crowdfundly.io/logo/crowdfundly_white.png",
                        alt: e.$t("logo")
                    }
                })])], 1), e._v(" "), o("div", {
                    staticClass: "footer__section justify-content-center flex-2"
                }, [o("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://crowdfundly.io/support",
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.$t("contact"))
                    }
                }), e._v(" "), o("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://crowdfundly.io/docs",
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.$t("documentation"))
                    }
                }), e._v(" "), o("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://crowdfundly.io/privacy",
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.$t("privacy_policy"))
                    }
                }), e._v(" "), o("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://crowdfundly.io/terms",
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.$t("terms_conditions"))
                    }
                })]), e._v(" "), o("div", {
                    staticClass: "footer__section justify-content-end"
                }, [o("div", {
                    staticClass: "footer__social"
                }, e._l(e.social, (function(e, i) {
                    return o("span", {
                        key: i
                    }, [o("a", {
                        staticClass: "social-item",
                        class: "social-item--" + e.name,
                        attrs: {
                            href: e.link,
                            target: "_blank",
                            title: e.name
                        }
                    }, [o("i", {
                        staticClass: "social-item__icon ",
                        class: e.icon
                    })])])
                })), 0)])]), e._v(" "), o("div", {
                    staticClass: "footer__copyright"
                }, [e._v("\n        " + e._s(e.$t("copyright")) + " 2020. " + e._s(e.$t("powered_by")) + "\n        "), o("a", {
                    staticClass: "text-white text-bold",
                    attrs: {
                        href: "https://crowdfundly.io/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("crowdfundly"))
                    }
                })])])
            }), [], !1, null, null, null).exports,
            Z = {
                components: {
                    "app-header": V,
                    "app-footer": H
                },
                computed: {
                    isResetPage: function() {
                        return "password-reset" === this.$route.name
                    },
                    setBanner: function() {
                        return "password-reset" === this.$route.name ? "https://app.crowdfundly.io/images/banner/password.svg" : "register" === this.$route.name ? "https://app.crowdfundly.io/images/banner/signup.svg" : "https://app.crowdfundly.io/images/banner/signin.svg"
                    }
                }
            },
            X = Object(A.a)(Z, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "public"
                    }
                }, [t("div", {
                    staticClass: "auth",
                    staticStyle: {
                        "background-image": "url('https://app.crowdfundly.io/images/banner/auth-bg.png')"
                    }
                }, [t("g-notify", {
                    attrs: {
                        group: "notify"
                    }
                }), this._v(" "), t("jl-confirm-dialog"), this._v(" "), t("div", {
                    staticClass: "auth__inner"
                }, [this._m(0), this._v(" "), t("div", {
                    staticClass: "auth__body",
                    class: this.isResetPage ? "auth__body--reset" : ""
                }, [t("div", {
                    staticClass: "auth__body-left"
                }, [t("img", {
                    staticClass: "auth__body-banner",
                    attrs: {
                        src: this.setBanner,
                        alt: "Auth banner image"
                    }
                })]), this._v(" "), t("div", {
                    staticClass: "auth__body-right"
                }, [t("nuxt-child")], 1)])])], 1)])
            }), [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "auth__header"
                }, [t("a", {
                    staticClass: "auth__logo",
                    attrs: {
                        href: "/"
                    }
                }, [t("img", {
                    staticClass: "auth__logo-img",
                    attrs: {
                        src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                        alt: "Logo"
                    }
                })])])
            }], !1, null, null, null).exports;

        function J(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var Q = {
                name: "campaign-dashboard-sidebar",
                data: function() {
                    return {
                        UPDATE_CAMPAIGN: K.g,
                        offline_donations: !1,
                        chat_presets: !1,
                        donation_preset: !1,
                        custom_campaign_flyer: !1,
                        custom_thank_you_message: !1
                    }
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? J(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : J(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)({
                    isAdmin: "isAdmin",
                    isLawyer: "isLawyer",
                    isUser: "isUser",
                    intendedUrl: "intendedUrl"
                }), {
                    slug: function() {
                        return this.$route.params.slug
                    },
                    id: function() {
                        return this.$route.params.id
                    },
                    backFromPageSrc: function() {
                        try {
                            return this.intendedUrl && this.intendedUrl.route_name != this.$route.name ? this.intendedUrl.fullPath : "/dashboard"
                        } catch (e) {
                            return "/"
                        }
                    }
                }),
                created: function() {
                    this.checkPlan("offline_donations", "offline_donations"), this.checkPlan("chat_presets", "chat_presets"), this.checkPlan("donation_preset", "donation_preset"), this.checkPlan("custom_campaign_flyer", "custom_campaign_flyer"), this.checkPlan("custom_thank_you_message", "custom_thank_you_message")
                },
                mounted: function() {
                    this.addEventListenerSidebar()
                },
                methods: {
                    checkPlan: function(e, t) {
                        var o = this;
                        return Object(n.a)(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, get_plan_value(e).then((function(e) {
                                            o[t] = e
                                        }));
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    toggleSidebar: function() {
                        var e = window.innerWidth,
                            t = document.querySelector(".campaign-dashboard__overlay"),
                            o = document.querySelector(".campaign-dashboard__sidebar");
                        e < 768 && (t.classList.toggle("active"), o.classList.toggle("active"))
                    },
                    addEventListenerSidebar: function() {
                        for (var e = document.querySelectorAll(".campaign-dashboard-menu__item-link"), i = 0; i < e.length; i++) e[i].addEventListener("click", this.toggleSidebar, !1)
                    }
                }
            },
            ee = {
                data: function() {
                    return {
                        campaign: null,
                        loading: !1
                    }
                },
                middleware: ["redirectIfNoOrg"],
                components: {
                    Sidebar: Object(A.a)(Q, (function() {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("div", {
                            staticClass: "campaign-dashboard-sidebar"
                        }, [o("div", {
                            staticClass: "campaign-dashboard-sidebar__header"
                        }, [o("div", {
                            staticClass: "campaign-dashboard-sidebar__header-main"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-sidebar__logo",
                            attrs: {
                                to: "/"
                            }
                        }, [o("img", {
                            staticClass: "campaign-dashboard-sidebar__logo-img campaign-dashboard-sidebar__logo-img--lg",
                            attrs: {
                                src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                                alt: e.$t("logo")
                            }
                        }), e._v(" "), o("img", {
                            staticClass: "campaign-dashboard-sidebar__logo-img campaign-dashboard-sidebar__logo-img--mini",
                            attrs: {
                                src: "https://app.crowdfundly.io/logo/icon.png",
                                alt: e.$t("logo")
                            }
                        })]), e._v(" "), o("n-link", {
                            staticClass: "campaign-dashboard-sidebar__back-btn",
                            attrs: {
                                to: e.backFromPageSrc
                            }
                        }, [o("i", {
                            staticClass: "campaign-dashboard-sidebar__back-btn-icon fas fa-caret-left"
                        }), e._v("\n                " + e._s(e.$t("back")) + "\n            ")])], 1), e._v(" "), o("div", {
                            staticClass: "campaign-dashboard-sidebar__header-close",
                            on: {
                                click: e.toggleSidebar
                            }
                        }, [o("img", {
                            staticClass: "campaign-dashboard-sidebar__header-close-icon",
                            attrs: {
                                src: "https://app.crowdfundly.io/icons/close-dark.svg",
                                alt: ""
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "campaign-dashboard-sidebar__inner"
                        }, [o("ul", {
                            staticClass: "campaign-dashboard-menu"
                        }, [o("li", {
                            staticClass: "campaign-dashboard-menu__item campaign-dashboard-menu__item--subheading",
                            domProps: {
                                textContent: e._s(e.$t("campaign_analytics"))
                            }
                        }), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-statistics",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("statistics"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-online-contributions",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("contributions"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [e.__org_member_can(e.UPDATE_CAMPAIGN) ? o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            style: e.offline_donations ? "" : "color: lightgrey; pointer-events: none",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-offline-contributions",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("offline_contributions"))
                            }
                        }) : e._e()], 1)]), e._v(" "), e.__org_member_can(e.UPDATE_CAMPAIGN) ? o("ul", {
                            staticClass: "campaign-dashboard-menu"
                        }, [o("li", {
                            staticClass: "campaign-dashboard-menu__item  campaign-dashboard-menu__item--subheading",
                            domProps: {
                                textContent: e._s(e.$t("campaign_management"))
                            }
                        }), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-edit",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("edit"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-update",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("updates"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-endorse",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("endorsements"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [e.isUser ? o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            style: e.chat_presets ? "" : "color: lightgrey; pointer-events: none",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-chat-presets",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("chat_presets"))
                            }
                        }) : e._e()], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            style: e.donation_preset ? "" : "color: lightgrey; pointer-events: none",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-contribution-presets",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("contribution_preset_amounts"))
                            }
                        })], 1), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            style: e.custom_campaign_flyer ? "" : "color: lightgrey; pointer-events: none",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-brochure",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("brochure"))
                            }
                        })], 1), e._v(" "), e._e(), e._v(" "), o("li", {
                            staticClass: "campaign-dashboard-menu__item"
                        }, [o("n-link", {
                            staticClass: "campaign-dashboard-menu__item-link",
                            style: e.custom_thank_you_message ? "" : "color: lightgrey; pointer-events: none",
                            attrs: {
                                to: {
                                    name: "campaigns-slug-id-thank-you-message",
                                    params: {
                                        slug: e.slug,
                                        id: e.id
                                    }
                                }
                            },
                            domProps: {
                                textContent: e._s(e.$t("thank_you_message"))
                            }
                        })], 1)]) : e._e()])])
                    }), [], !1, null, null, null).exports
                },
                head: function() {
                    return {
                        title: this.campaign ? this.campaign.name : this.$t("manage_campaign"),
                        meta: [{
                            property: "og:title",
                            hid: "og:title",
                            content: this.campaign ? this.campaign.name : this.$t("manage_campaign")
                        }, {
                            property: "og:image",
                            hid: "og:image",
                            content: this.ogImage
                        }, {
                            property: "og:url",
                            hid: "og:url",
                            content: "https://" + baseDomain() + "/campaigns/" + this.$route.params.slug + "/" + this.$route.params.id + "/edit"
                        }]
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.fetchCampaign();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                computed: {
                    organizationURL: function() {
                        return this.campaign ? "https://" + this.campaign.organization.username + "." + baseDomain() : "https://" + baseDomain()
                    },
                    ogImage: function() {
                        return this.campaign && this.campaign.gallery[0] ? this.campaign.gallery[0].source_path : this.campaign && this.campaign.organization.logo ? this.campaign.organization.logo.source_path : "https://app.crowdfundly.io/logo/crowdfundly.png"
                    }
                },
                methods: {
                    fetchCampaign: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.loading = !0, o = route_with_query("get-auth-campaign", null, e.$route.params.slug).absolute_path, t.next = 4, e.$axios.$get(o).then((function(t) {
                                            e.campaign = t
                                        })).catch((function(t) {
                                            throw e.$nuxtException(getMessageFromError(t))
                                        })).finally((function() {
                                            e.loading = !1
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    toggleSidebar: function() {
                        var e = window.innerWidth,
                            t = document.querySelector(".campaign-dashboard__overlay"),
                            o = document.querySelector(".campaign-dashboard__sidebar");
                        e < 768 && (t.classList.toggle("active"), o.classList.toggle("active"))
                    }
                }
            },
            te = Object(A.a)(ee, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "public"
                    }
                }, [o("div", {
                    staticClass: "campaign-dashboard"
                }, [o("g-notify", {
                    attrs: {
                        group: "notify"
                    }
                }), e._v(" "), o("jl-confirm-dialog"), e._v(" "), o("div", {
                    staticClass: "campaign-dashboard__overlay",
                    on: {
                        click: e.toggleSidebar
                    }
                }), e._v(" "), o("div", {
                    staticClass: "campaign-dashboard__header"
                }, [o("div", {
                    staticClass: "campaign-dashboard__header-toggle",
                    on: {
                        click: e.toggleSidebar
                    }
                }, [o("img", {
                    staticClass: "campaign-dashboard__header-toggle-icon",
                    attrs: {
                        src: "https://app.crowdfundly.io/icons/menu-bar.svg",
                        alt: ""
                    }
                })]), e._v(" "), o("div", {
                    staticClass: "campaign-dashboard__header-title"
                }, [o("span", {
                    staticClass: "campaign-dashboard__header-title-text",
                    domProps: {
                        textContent: e._s(e.$t("campaign_dashboard"))
                    }
                })])]), e._v(" "), o("div", {
                    staticClass: "campaign-dashboard__inner"
                }, [o("div", {
                    staticClass: "campaign-dashboard__sidebar"
                }, [o("sidebar")], 1), e._v(" "), o("div", {
                    staticClass: "campaign-dashboard__body"
                }, [e.loading ? o("div", {
                    staticClass: "main-loader main-loader--90vh"
                }, [o("loader")], 1) : o("nuxt-child")], 1)])], 1)])
            }), [], !1, null, null, null).exports,
            ie = (o(321), Object(A.a)({}, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("nuxt")], 1)
            }), [], !1, null, null, null).exports);

        function ae(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var oe = {
                name: "fundraise-sidebar",
                components: {},
                props: {
                    pages: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        isProcessing: !1
                    }
                },
                watch: {
                    pages: function() {
                        this.scrollToEnd()
                    }
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ae(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ae(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)(["intendedUrl"]), {
                    menu: function() {
                        return this.$store.getters["campaignSidebar/getActiveMenu"]
                    },
                    getMenuIcon: function() {
                        var e = this;
                        this.isProcessing = !0;
                        var t = "";
                        return Object.keys(this.pages).map((function(o) {
                            if (!0 === e.pages[o].active) return t = e.menu[o].icon
                        })), setTimeout((function() {
                            return e.isProcessing = !1
                        }), 1e3), t || "https://app.crowdfundly.io/images/fundraise/type.png"
                    },
                    backFromPageSrc: function() {
                        var e = {
                            name: "dashboard-campaigns"
                        };
                        try {
                            return this.intendedUrl && this.intendedUrl.route_name != this.$route.name ? this.intendedUrl.fullPath : e
                        } catch (t) {
                            return e
                        }
                    }
                }),
                methods: {
                    scrollToEnd: function() {
                        setTimeout((function() {
                            var e = document.querySelectorAll(".fundraise-menu__item.active");
                            e[e.length - 1].scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            })
                        }), 220)
                    }
                }
            },
            ne = {
                middleware: "auth",
                components: {
                    Sidebar: Object(A.a)(oe, (function() {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("div", {
                            staticClass: "fundraise-sidebar"
                        }, [o("div", {
                            staticClass: "fundraise-sidebar__header"
                        }, [o("n-link", {
                            staticClass: "fundraise-sidebar__logo",
                            attrs: {
                                to: {
                                    name: "index"
                                }
                            }
                        }, [o("img", {
                            staticClass: "fundraise-sidebar__logo-img fundraise-sidebar__logo-img--lg",
                            attrs: {
                                src: "https://app.crowdfundly.io/logo/crowdfundly.png",
                                alt: e.$t("logo")
                            }
                        }), e._v(" "), o("img", {
                            staticClass: "fundraise-sidebar__logo-img fundraise-sidebar__logo-img--mini",
                            attrs: {
                                src: "https://app.crowdfundly.io/logo/icon.png",
                                alt: e.$t("logo")
                            }
                        })]), e._v(" "), o("n-link", {
                            staticClass: "fundraise-sidebar__back-btn",
                            attrs: {
                                to: e.backFromPageSrc
                            }
                        }, [o("i", {
                            staticClass: "fundraise-sidebar__back-btn-icon fas fa-caret-left"
                        }), e._v("\n            " + e._s(e.$t("back")) + "\n        ")])], 1), e._v(" "), o("div", {
                            staticClass: "fundraise-sidebar__inner"
                        }, [o("ul", {
                            staticClass: "fundraise-menu"
                        }, e._l(Object.keys(e.menu), (function(t, i) {
                            return o("li", {
                                key: i,
                                staticClass: "fundraise-menu__item",
                                class: e.menu[t].active ? "active" : ""
                            }, [o("div", {
                                staticClass: "fundraise-menu__item-icon"
                            }, [e.menu[t].active ? o("i", {
                                staticClass: "fas fa-check"
                            }) : o("span", {
                                domProps: {
                                    textContent: e._s(i + 1)
                                }
                            })]), e._v(" "), o("div", {
                                staticClass: "fundraise-menu__item-title",
                                domProps: {
                                    textContent: e._s(e.menu[t].label)
                                }
                            })])
                        })), 0)]), e._v(" "), o("div", {
                            staticClass: "fundraise-sidebar__footer"
                        }, [o("transition", {
                            attrs: {
                                name: "in-out"
                            }
                        }, [e.isProcessing ? e._e() : o("img", {
                            staticClass: "fundraise-sidebar__footer-img",
                            attrs: {
                                src: e.getMenuIcon,
                                alt: e.$t("animated_icon")
                            }
                        })]), e._v(" "), e._m(0)], 1)])
                    }), [function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", {
                            staticClass: "fundraise-sidebar__footer-overlay"
                        }, [t("div", {
                            staticClass: "fundraise-sidebar__footer-overlay-inner"
                        })])
                    }], !1, null, null, null).exports
                },
                data: function() {
                    return {
                        pages: {}
                    }
                },
                methods: {
                    getPages: function(e) {
                        this.pages = e
                    }
                }
            },
            re = Object(A.a)(ne, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "public"
                    }
                }, [t("div", {
                    staticClass: "fundraise"
                }, [t("g-notify", {
                    attrs: {
                        group: "notify"
                    }
                }), this._v(" "), t("jl-confirm-dialog"), this._v(" "), t("div", {
                    staticClass: "fundraise__inner"
                }, [t("div", {
                    staticClass: "fundraise__sidebar"
                }, [t("sidebar", {
                    attrs: {
                        pages: this.pages
                    }
                })], 1), this._v(" "), t("div", {
                    staticClass: "fundraise__body"
                }, [t("nuxt-child", {
                    on: {
                        pages: this.getPages
                    }
                })], 1)])], 1)])
            }), [], !1, null, null, null).exports;

        function de(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var pe = {
                data: function() {
                    return {
                        el: document.body,
                        UPDATE_ORGANIZATION: K.i,
                        ASSIGN_MEMBER: K.a,
                        CREATE_ROLE: K.d,
                        UPDATE_ROLE: K.j,
                        UPDATE_MEMBER: K.h,
                        DELETE_MEMBER: K.f,
                        VIEW_DONATION: K.k,
                        VIEW_REFUND: K.l,
                        CREATE_CATEGORY: K.c,
                        isLogoutProcessing: !1
                    }
                },
                created: function() {},
                mounted: function() {},
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? de(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : de(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)({
                    showSidebar: "toggle-sidebar/showSidebar",
                    isAdmin: "isAdmin",
                    fullName: "fullName",
                    isLawyer: "isLawyer",
                    isVolunteer: "isVolunteer",
                    organization: "organization"
                }), {
                    avatarPlaceholder: function() {
                        return "https://app.crowdfundly.io/images/placeholder/profile-placeholder.jpg"
                    }
                }),
                methods: {
                    logout: function() {
                        var e = this;
                        this.isLogoutProcessing = !0, this.$store.dispatch("logout").finally((function() {
                            e.isLogoutProcessing = !1
                        }))
                    },
                    activeMenu: function(e) {
                        return this.$route.name === e ? "active" : ""
                    }
                }
            },
            se = Object(A.a)(pe, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("ul", {
                    staticClass: "dashboard-menu"
                }, [e.$auth.loggedIn ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("n-link", {
                    staticClass: "dashboard-menu__item-link",
                    attrs: {
                        to: {
                            name: "dashboard"
                        },
                        exact: ""
                    }
                }, [o("div", {
                    staticClass: "dashboard-menu__item-icon"
                }, [o("i", {
                    staticClass: "fas fa-home"
                })]), e._v(" "), o("span", {
                    staticClass: "dashboard-menu__item-title",
                    domProps: {
                        textContent: e._s(e.$t("dashboard"))
                    }
                })])], 1) : e._e(), e._v(" "), e.$auth.loggedIn ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("div", {
                    staticClass: "dashboard-menu__item-link",
                    class: e.activeMenu("dashboard-campaigns") || e.activeMenu("dashboard-categories") || e.activeMenu("dashboard-campaigns-reports")
                }, [o("g-dropdown", {
                    attrs: {
                        caret: !0,
                        right: !1
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "dashboard-menu__item-link p-0"
                            }, [o("div", {
                                staticClass: "dashboard-menu__item-icon"
                            }, [o("i", {
                                staticClass: "fas fa-hand-holding-usd"
                            })]), e._v(" "), o("span", {
                                staticClass: "dashboard-menu__item-title",
                                domProps: {
                                    textContent: e._s(e.$t("campaigns"))
                                }
                            })])]
                        },
                        proxy: !0
                    }], null, !1, 3216573853)
                }, [e._v(" "), o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-campaigns"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("all")) + " " + e._s(e.$t("campaigns")) + "\n                ")]), e._v(" "), e.organization && e.__org_member_can(e.CREATE_CATEGORY) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-categories"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("categories")) + "\n                ")]) : e._e(), e._v(" "), e.organization && "fundraiser" !== e.organization.auth_org_role ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-campaigns-reports"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("reports")) + "\n                ")]) : e._e()], 1)], 1)]) : e._e(), e._v(" "), e.__org_member_can(e.VIEW_DONATION) || e.__org_member_can(e.VIEW_REFUND) ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("div", {
                    staticClass: "dashboard-menu__item-link",
                    class: e.activeMenu("dashboard-contributions") || e.activeMenu("dashboard-contributions-offline") || e.activeMenu("dashboard-refunds")
                }, [e.organization ? o("g-dropdown", {
                    attrs: {
                        caret: !0,
                        right: !1
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "dashboard-menu__item-link p-0"
                            }, [o("div", {
                                staticClass: "dashboard-menu__item-icon"
                            }, [o("i", {
                                staticClass: "fas fa-hand-holding-usd"
                            })]), e._v(" "), o("span", {
                                staticClass: "dashboard-menu__item-title",
                                domProps: {
                                    textContent: e._s(e.$t("contributions"))
                                }
                            })])]
                        },
                        proxy: !0
                    }], null, !1, 1433939269)
                }, [e._v(" "), o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-contributions"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("online_contributions")) + "\n                ")]), e._v(" "), o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-contributions-offline"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("offline_contributions")) + "\n                ")]), e._v(" "), e.__org_member_can(e.VIEW_REFUND) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-refunds"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("refunds")) + "\n                ")]) : e._e()], 1) : e._e()], 1)]) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && "fundraiser" !== e.organization.auth_org_role ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("n-link", {
                    staticClass: "dashboard-menu__item-link",
                    attrs: {
                        to: {
                            name: "dashboard-fundraisers"
                        },
                        exact: ""
                    }
                }, [o("div", {
                    staticClass: "dashboard-menu__item-icon"
                }, [o("i", {
                    staticClass: "fas fa-address-book"
                })]), e._v(" "), o("span", {
                    staticClass: "dashboard-menu__item-title",
                    domProps: {
                        textContent: e._s(e.$t("fundraisers"))
                    }
                })])], 1) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && "team_member" !== e.organization.auth_org_role ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("n-link", {
                    staticClass: "dashboard-menu__item-link",
                    attrs: {
                        to: {
                            name: "dashboard-payouts"
                        },
                        exact: ""
                    }
                }, [o("div", {
                    staticClass: "dashboard-menu__item-icon"
                }, [o("i", {
                    staticClass: "fas fa-dollar-sign"
                })]), e._v(" "), o("span", {
                    staticClass: "dashboard-menu__item-title",
                    domProps: {
                        textContent: e._s(e.$t("wallet_payout"))
                    }
                })])], 1) : e._e(), e._v(" "), e.__org_member_can(e.ASSIGN_MEMBER) || e.__org_member_can(e.UPDATE_MEMBER) || e.__org_member_can(e.DELETE_MEMBER) || e.__org_member_can(e.CREATE_ROLE) || e.__org_member_can(e.UPDATE_ROLE) ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("div", {
                    staticClass: "dashboard-menu__item-link",
                    class: e.activeMenu("dashboard-users") || e.activeMenu("dashboard-roles")
                }, [o("g-dropdown", {
                    attrs: {
                        caret: !0,
                        right: !1
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "dashboard-menu__item-link p-0"
                            }, [o("div", {
                                staticClass: "dashboard-menu__item-icon"
                            }, [o("i", {
                                staticClass: "fas fa-users"
                            })]), e._v(" "), o("span", {
                                staticClass: "dashboard-menu__item-title",
                                domProps: {
                                    textContent: e._s(e.$t("team"))
                                }
                            })])]
                        },
                        proxy: !0
                    }], null, !1, 1187924065)
                }, [e._v(" "), e.__org_member_can(e.ASSIGN_MEMBER) || e.__org_member_can(e.UPDATE_MEMBER) || e.__org_member_can(e.DELETE_MEMBER) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-users"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("team_accounts")) + "\n                ")]) : e._e(), e._v(" "), e.__org_member_can(e.CREATE_ROLE) || e.__org_member_can(e.UPDATE_ROLE) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-roles"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "far fa-circle"
                }), e._v("\n                    " + e._s(e.$t("roles")) + "\n                ")]) : e._e()], 1)], 1)]) : e._e(), e._v(" "), e.organization && "fundraiser" === e.organization.auth_org_role ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("n-link", {
                    staticClass: "dashboard-menu__item-link",
                    attrs: {
                        to: {
                            name: "dashboard-payouts-methods"
                        },
                        exact: ""
                    }
                }, [o("div", {
                    staticClass: "dashboard-menu__item-icon"
                }, [o("i", {
                    staticClass: "fas fa-money-check-alt"
                })]), e._v(" "), o("span", {
                    staticClass: "dashboard-menu__item-title",
                    domProps: {
                        textContent: e._s(e.$t("payout_methods"))
                    }
                })])], 1) : e._e(), e._v(" "), e.__org_member_can(e.UPDATE_ORGANIZATION) ? o("li", {
                    staticClass: "dashboard-menu__item"
                }, [o("n-link", {
                    staticClass: "dashboard-menu__item-link",
                    attrs: {
                        to: {
                            name: "dashboard-settings"
                        }
                    }
                }, [o("div", {
                    staticClass: "dashboard-menu__item-icon"
                }, [o("i", {
                    staticClass: "fas fa-cogs"
                })]), e._v(" "), o("span", {
                    staticClass: "dashboard-menu__item-title",
                    domProps: {
                        textContent: e._s(e.$t("settings"))
                    }
                })])], 1) : e._e()])
            }), [], !1, null, null, null).exports;

        function le(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var ce = {
                components: {
                    "dropdown-notification": L,
                    "organization-menu": F
                },
                data: function() {
                    return {
                        toggleMenu: !0,
                        dropDownMenu: !1,
                        isLogoutProcessing: !1,
                        mini: !1,
                        isOrganizationCreateAllowed: !1,
                        isXsDevice: !1,
                        UPDATE_ORGANIZATION: K.i,
                        ASSIGN_MEMBER: K.a,
                        CREATE_ROLE: K.d,
                        UPDATE_ROLE: K.j,
                        UPDATE_MEMBER: K.h,
                        DELETE_MEMBER: K.f,
                        VIEW_DONATION: K.k,
                        VIEW_REFUND: K.l,
                        CREATE_CATEGORY: K.c
                    }
                },
                mounted: function() {
                    var e = window.innerWidth;
                    this.isXsDevice = e < 421
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? le(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : le(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)({
                    organization: "organization",
                    hasSubscription: "hasSubscription"
                }), {
                    domainName: function() {
                        return baseDomain()
                    },
                    dashboard: function() {
                        return appDomain()
                    },
                    logoutButtonText: function() {
                        return this.isLogoutProcessing ? $t("logging_out") : $t("logout")
                    },
                    avatarPlaceholder: function() {
                        return "https://app.crowdfundly.io/images/placeholder/profile-placeholder.jpg"
                    },
                    organizationLogo: function() {
                        return this.organization && this.organization.logo ? this.organization.logo.source_path : "https://app.crowdfundly.io/images/placeholder/logo.png"
                    },
                    createOrgLink: function() {
                        return this.hasSubscription ? {
                            name: "organization-create"
                        } : {
                            name: "user-username-subscription",
                            params: {
                                username: this.$auth.user.username
                            }
                        }
                    }
                }),
                created: function() {
                    this.$auth.loggedIn && this.checkPlan("organization", [this.$auth.user.organizations.length], "isOrganizationCreateAllowed")
                },
                methods: {
                    miniSidebar: function() {
                        this.$store.dispatch("toggle-sidebar/toggleSidebar"), this.mini, this.mini = !this.mini
                    },
                    logout: function() {
                        var e = this;
                        this.isLogoutProcessing = !0, this.$store.dispatch("logout").finally((function() {
                            e.isLogoutProcessing = !1
                        }))
                    },
                    toggleSidebar: function() {
                        document.getElementById("dashboard").classList.toggle("mini-sidebar")
                    },
                    checkPlan: function(e, t, o) {
                        var r = this;
                        return Object(n.a)(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, get_plan_value(e, t).then((function(e) {
                                            r[o] = e
                                        }));
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    orgUrl: function() {
                        window.location.href = "http://".concat(this.organization.username, ".").concat(this.domainName)
                    }
                }
            },
            me = Object(A.a)(ce, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "dashboard-header"
                }, [o("div", {
                    staticClass: "d-flex align-items-center",
                    staticStyle: {
                        height: "100%"
                    }
                }, [o("div", {
                    staticClass: "dashboard-header__option dashboard-header__option--toggle"
                }, [o("div", {
                    staticClass: "dashboard-header__toggle"
                }, [e.organization ? o("g-dropdown", {
                    attrs: {
                        right: !1,
                        caret: !1
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "dashboard-header__toggle-btn"
                            }, [o("img", {
                                staticClass: "dashboard-header__toggle-btn-icon",
                                attrs: {
                                    src: "https://app.crowdfundly.io/icons/noun_menu_1117664.svg",
                                    alt: "Menu icon"
                                }
                            })])]
                        },
                        proxy: !0
                    }], null, !1, 316848880)
                }, [e._v(" "), e.$auth.loggedIn ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-home"
                }), e._v("\n                        " + e._s(e.$t("dashboard")) + "\n                    ")]) : e._e(), e._v(" "), e.$auth.loggedIn ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-campaigns"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-bullhorn "
                }), e._v("\n                        " + e._s(e.$t("campaigns")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.VIEW_DONATION) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-contributions"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-hand-holding-usd"
                }), e._v("\n                        " + e._s(e.$t("online_contributions")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.VIEW_DONATION) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-contributions-offline"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-hand-holding-usd"
                }), e._v("\n                        " + e._s(e.$t("offline_contributions")) + "\n                    ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && "fundraiser" !== e.organization.auth_org_role ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-fundraisers"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-address-book"
                }), e._v("\n                        " + e._s(e.$t("fundraisers")) + "\n                    ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && "team_member" !== e.organization.auth_org_role ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-payouts"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-dollar-sign"
                }), e._v("\n                        " + e._s(e.$t("wallet_payout")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.VIEW_REFUND) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-refunds"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-money-bill-alt"
                }), e._v("\n                        " + e._s(e.$t("refunds")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.ASSIGN_MEMBER) || e.__org_member_can(e.UPDATE_MEMBER) || e.__org_member_can(e.DELETE_MEMBER) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-users"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-users"
                }), e._v("\n                        " + e._s(e.$t("team_accounts")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.CREATE_ROLE) || e.__org_member_can(e.UPDATE_ROLE) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-roles"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fa fa-tasks"
                }), e._v("\n                        " + e._s(e.$t("roles")) + "\n                    ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && e.__org_member_can(e.CREATE_CATEGORY) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-categories"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fa fa-tasks"
                }), e._v("\n                        " + e._s(e.$t("categories")) + "\n                    ")]) : e._e(), e._v(" "), e.organization && "fundraiser" === e.organization.auth_org_role ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-payouts-methods"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-money-check-alt"
                }), e._v("\n                        " + e._s(e.$t("payout_methods")) + "\n                    ")]) : e._e(), e._v(" "), e.__org_member_can(e.UPDATE_ORGANIZATION) ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-settings"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-cogs"
                }), e._v("\n                        " + e._s(e.$t("settings")) + "\n                    ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.organization && "fundraiser" !== e.organization.auth_org_role ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "dashboard-campaigns-reports"
                        },
                        exact: !0
                    }
                }, [o("i", {
                    staticClass: "fas fa-exclamation-triangle"
                }), e._v("\n                        " + e._s(e.$t("reports")) + "\n                    ")]) : e._e()], 1) : e._e()], 1)]), e._v(" "), o("div", {
                    staticClass: "dashboard-header__option"
                }, [o("n-link", {
                    staticClass: "dashboard-header__logo",
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [o("img", {
                    staticClass: "dashboard-header__logo-img dashboard-header__logo-img--sm",
                    attrs: {
                        src: "https://app.crowdfundly.io/images/logo-mini.png",
                        alt: "logo"
                    }
                }), e._v(" "), o("img", {
                    staticClass: "dashboard-header__logo-img dashboard-header__logo-img--lg",
                    attrs: {
                        src: "https://app.crowdfundly.io/images/logo.svg",
                        alt: e.$t("logo")
                    }
                })])], 1), e._v(" "), e.organization && e.organization.username ? o("div", {
                    staticClass: "dashboard-header__option"
                }, [o("a", {
                    staticClass: "dashboard-header__option-link",
                    attrs: {
                        href: "http://" + this.organization.username + "." + this.domainName,
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.$t("view_organization"))
                    }
                })]) : e._e()]), e._v(" "), o("div", {
                    staticClass: "dashboard-header__right"
                }, [o("div", {
                    staticClass: "dashboard-header__option"
                }, [o("lang-dropdown")], 1), e._v(" "), this.$store.getters.email_login ? o("div", {
                    staticClass: "dashboard-header__option"
                }, [o("dropdown-notification")], 1) : e._e(), e._v(" "), e.$auth.loggedIn ? o("div", {
                    staticClass: "dashboard-header__option"
                }, [e.organization ? o("g-dropdown", {
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "org-select"
                            }, [e.organizationLogo ? o("div", {
                                staticClass: "org-select__logo"
                            }, [o("img", {
                                staticClass: "org-select__logo-img",
                                attrs: {
                                    src: e.organizationLogo,
                                    alt: e.$t("organization_logo")
                                }
                            })]) : e._e(), e._v(" "), o("h5", {
                                staticClass: "org-select__title"
                            }, [e._v("\n                            " + e._s(e._f("limitString")(e.organization.name, 20)) + "\n                        ")])])]
                        },
                        proxy: !0
                    }], null, !1, 262929431)
                }, [e._v(" "), e.$isEmailLoggedIn() ? o("g-dropdown-item", {
                    attrs: {
                        link: e.createOrgLink
                    }
                }, [o("i", {
                    staticClass: "fas fa-plus"
                }), e._v("\n                    " + e._s(e.$t("add_organization")) + "\n                ")]) : e._e(), e._v(" "), e.$isEmailLoggedIn() ? o("organization-menu") : e._e(), e._v(" "), e.$auth.loggedIn ? o("g-dropdown-item", {
                    attrs: {
                        link: {
                            name: "user-username-story",
                            params: {
                                username: e.$auth.user.username
                            }
                        }
                    }
                }, [o("i", {
                    staticClass: "far fa-user"
                }), e._v("\n                    " + e._s(e.$t("my_profile")) + "\n                ")]) : e._e(), e._v(" "), e.$auth.loggedIn && e.$isEmailLoggedIn() ? o("g-dropdown-item-button", {
                    on: {
                        onPress: e.logout
                    }
                }, [o("i", {
                    staticClass: "fas fa-sign-out-alt"
                }), e._v("\n                    " + e._s(e.$t("logout")) + "\n                ")]) : e._e()], 1) : e._e()], 1) : e._e()])])
            }), [], !1, null, null, null).exports,
            ge = {
                computed: {
                    appVersion: function() {
                        return "1.0.1"
                    },
                    versionReleasedAt: function() {
                        return "SEP 15, 2020"
                    },
                    versionChangelogUrl: function() {
                        return "https://crowdfundly.io/changelog/"
                    }
                }
            },
            be = Object(A.a)(ge, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "dashboard-footer"
                }, [o("p", {
                    staticClass: "dashboard-footer__version"
                }, [e._v("\n        " + e._s(e.$t("version")) + ": "), o("a", {
                    attrs: {
                        href: e.versionChangelogUrl,
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.appVersion)
                    }
                })]), e._v(" "), o("p", {
                    staticClass: "dashboard-footer__update"
                }, [e._v("\n        " + e._s(e.$t("last_updated")) + ": "), o("a", {
                    attrs: {
                        href: e.versionChangelogUrl,
                        target: "_blank"
                    },
                    domProps: {
                        textContent: e._s(e.versionReleasedAt)
                    }
                })])])
            }), [], !1, null, null, null).exports,
            _e = {
                name: "unverified-alert",
                data: function() {
                    return {
                        loadingText: this.$t("resend_verification_link"),
                        isProcessing: !1,
                        responseTitle: this.$t("your_email_is_not_verified"),
                        responseMessage: this.$t("if_you_have_not_received_a_link_yet_click_here"),
                        isSuccessfulCall: !1
                    }
                },
                methods: {
                    resendLink: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, e.loadingText = e.$t("sending_verification_link"), e.isProcessing = !0, t.next = 5, e.$axios.$get("/auth/verify/resend");
                                    case 5:
                                        o = t.sent, e.responseMessage = o.message, e.isSuccessfulCall = !0, e.responseTitle = e.$t("link_successfully_sent"), t.next = 17;
                                        break;
                                    case 11:
                                        return t.prev = 11, t.t0 = t.catch(0), t.next = 15, e.$auth.fetchUser();
                                    case 15:
                                        e.$error(null, getMessageFromError(t.t0)), location.reload();
                                    case 17:
                                        return t.prev = 17, e.loadingText = e.$t("resend_link"), e.isProcessing = !1, t.finish(17);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 11, 17, 21]
                            ])
                        })))()
                    }
                }
            },
            ue = Object(A.a)(_e, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("client-only", [o("div", {
                    staticClass: "alert alert__unverified",
                    attrs: {
                        role: "alert"
                    }
                }, [o("strong", [e._v("\n            " + e._s(e.responseTitle) + "\n        ")]), e._v("\n\n        " + e._s(e.responseMessage) + ",\n        "), o("button", {
                    staticClass: "alert__unverified-btn",
                    on: {
                        click: e.resendLink
                    }
                }, [e._v(e._s(e.loadingText))]), e._v("\n        .\n    ")])])
            }), [], !1, null, null, null).exports;

        function he(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var xe = {
                middleware: ["auth"],
                components: {
                    UnverifiedAlert: ue,
                    "app-header": me,
                    "app-menu": se,
                    "app-footer": be
                },
                head: function() {
                    return {
                        meta: [{
                            charset: "UTF-8",
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }]
                    }
                },
                data: function() {
                    return {
                        upgradingSubscription: !1,
                        currentPlan: {},
                        headerSteps: [],
                        sidebarSteps: []
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.miniSidebar();
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? he(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : he(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)(["organization"]), {
                    getSteps: function() {
                        return [].concat(Object($.a)(this.headerSteps), Object($.a)(this.sidebarSteps))
                    },
                    windowWidth: function() {
                        return window.innerWidth
                    },
                    isOrgOwner: function() {
                        return "owner" == this.organization.auth_org_role
                    },
                    getMessage: function() {
                        return this.isOrgOwner ? this.$t("your_subscription_is_expired__") + " " + this.$t("upgrade") + " " + this.$t("_your_plan") : this.$t("this_organization_subscription_is_expired")
                    }
                }),
                methods: {
                    miniSidebar: function() {
                        var e = window.innerWidth,
                            t = document.getElementById("dashboard");
                        e < 992 ? t.classList.add("mini-sidebar") : t.classList.remove("mini-sidebar")
                    },
                    toggleSidebar: function() {
                        document.getElementById("dashboard").classList.toggle("mini-sidebar")
                    },
                    redirectToPaymentPage: function() {
                        var e = this,
                            data = {};
                        data.plan_id = this.organization.plan_permission.id, data.interval = "monthly", data.organization_id = this.organization.id, this.couponCode && (data.coupon_code = this.couponCode), this.processing = !0;
                        var t = route("update-subscription");
                        this.$axios[t.method](t.absolute_path, data).then(function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(o) {
                                var n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$store.dispatch("set_free_subscription_selection_data", o.data.redirect_to_stripe);
                                        case 2:
                                            if (1 != o.data.redirect_to_stripe) {
                                                t.next = 11;
                                                break
                                            }
                                            return e.$success(null, e.$t("redirecting_to_stripe_checkout")), t.next = 6, stripe.redirectToCheckout({
                                                sessionId: o.data.session_id
                                            });
                                        case 6:
                                            n = t.sent, (r = n.error).message && e.$error(null, r.message), t.next = 17;
                                            break;
                                        case 11:
                                            if (!o.data.uuid) {
                                                t.next = 14;
                                                break
                                            }
                                            return t.next = 14, e.$router.push({
                                                name: "subscribe-success",
                                                query: {
                                                    session_id: o.data.uuid
                                                }
                                            });
                                        case 14:
                                            return setTimeout((function() {
                                                e.$success(null, e.$t("congratulation_your_plan_has_been_updated"))
                                            }), 1e3), t.next = 17, e.$router.push({
                                                name: "subscribe-success"
                                            });
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            console.error("error", t), alert(t.response.data.message || e.$t("sorry_something_went_wrong"))
                        })).finally((function() {
                            e.processing = !1
                        }))
                    },
                    getStepsFromHeader: function(e) {
                        this.headerSteps = e
                    },
                    getStepsFromSidebar: function(e) {
                        this.sidebarSteps = e
                    }
                }
            },
            fe = Object(A.a)(xe, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "dashboard"
                    }
                }, [this.$auth.loggedIn ? e._e() : o("div", {
                    staticClass: "dashboard"
                }, [o("div", {
                    staticClass: "main-loader main-loader--100vh"
                }, [o("mini-loader")], 1)]), e._v(" "), e.organization && this.$auth.loggedIn ? o("div", {
                    staticClass: "dashboard",
                    class: e.organization.is_active ? "" : "dashboard__ dashboard--expired disabled"
                }, [o("g-notify", {
                    attrs: {
                        group: "notify"
                    }
                }), e._v(" "), o("jl-confirm-dialog"), e._v(" "), o("div", {
                    staticClass: "dashboard__overlay",
                    on: {
                        click: e.toggleSidebar
                    }
                }), e._v(" "), o("div", {
                    staticClass: "dashboard__top"
                }, [o("div", {
                    staticClass: "dashboard__header"
                }, [o("app-header")], 1), e._v(" "), o("div", {
                    staticClass: "dashboard__menu"
                }, [o("div", {
                    staticClass: "dashboard__menu-inner"
                }, [o("app-menu")], 1)])]), e._v(" "), o("div", {
                    staticClass: "dashboard__inner"
                }, [e.$auth.loggedIn && !e.$auth.user.is_verified ? o("unverified-alert", {
                    staticClass: "mb-4 mt-0"
                }) : e._e(), e._v(" "), o("div", {
                    staticClass: "dashboard__body",
                    class: e.organization.is_active ? "" : "disabled"
                }, [e.organization.is_active ? e._e() : o("div", {
                    staticClass: "page-overlay"
                }, [o("div", {
                    staticClass: "page-overlay__inner"
                }, [o("div", {
                    staticClass: "page-overlay__card"
                }, [o("h4", {
                    staticClass: "page-overlay__card-title",
                    domProps: {
                        textContent: e._s(e.$t("subscription_expired") + "!")
                    }
                }), e._v(" "), o("p", {
                    staticClass: "page-overlay__card-message",
                    domProps: {
                        textContent: e._s(e.getMessage)
                    }
                }), e._v(" "), e.isOrgOwner ? o("loading-button", {
                    staticClass: "btn-outline-primary mt-4",
                    attrs: {
                        title: e.$t("upgrade_subscription"),
                        type: "button",
                        loading: e.upgradingSubscription
                    },
                    on: {
                        onPress: e.redirectToPaymentPage
                    }
                }) : e._e()], 1)])]), e._v(" "), o("nuxt", {
                    staticClass: "dashboard__body-nuxt blur"
                })], 1)], 1)], 1) : e._e()])
            }), [], !1, null, null, null).exports,
            we = o(141),
            ye = {
                name: "fundraise-sidebar",
                props: ["original"],
                components: {},
                data: function() {
                    return {
                        SUBSCRIPTION_TYPE_APPSUMO: we.a
                    }
                },
                computed: {
                    userIsAppsumoSubscriber: function() {
                        return this.$auth.loggedIn && this.$auth.user.subscription_type == this.SUBSCRIPTION_TYPE_APPSUMO
                    },
                    menu: function() {
                        return [{
                            name: this.$t("story"),
                            show: !0,
                            icon: "fas fa-edit",
                            link: {
                                name: "user-username-story",
                                params: {
                                    username: this.$route.params.username
                                }
                            }
                        }, {
                            name: this.$t("settings"),
                            show: !0,
                            icon: "fas fa-cog",
                            link: {
                                name: "user-username-settings",
                                params: {
                                    username: this.$route.params.username
                                }
                            }
                        }, {
                            name: this.$t("contributions"),
                            show: !0,
                            icon: "fas fa-hand-holding-heart",
                            link: {
                                name: "user-username-contributions",
                                params: {
                                    username: this.$route.params.username
                                }
                            }
                        }, {
                            name: this.$t("refunds"),
                            show: !0,
                            icon: "fas fa-hand-holding-usd",
                            link: {
                                name: "user-username-refunds",
                                params: {
                                    username: this.$route.params.username
                                }
                            }
                        }, {
                            name: this.$t("all_ltd_coupons"),
                            show: this.$isEmailLoggedIn(),
                            icon: "fas fa-tag",
                            link: {
                                name: "user-username-all-ltd-licenses",
                                params: {
                                    username: this.$route.params.username
                                }
                            }
                        }, {
                            name: this.$t("subscription"),
                            icon: "fas fa-bullhorn",
                            show: !0,
                            submenu: [{
                                name: this.$t("all_plans"),
                                show: this.$isEmailLoggedIn(),
                                icon: "far fa-circle",
                                link: {
                                    name: "user-username-subscription",
                                    params: {
                                        username: this.$route.params.username
                                    }
                                }
                            }, {
                                id: "payment-history",
                                name: this.$t("payment_history"),
                                show: !0,
                                icon: "far fa-circle",
                                link: {
                                    name: "user-username-payment-history",
                                    params: {
                                        username: this.$route.params.username
                                    }
                                }
                            }]
                        }]
                    },
                    getAvatar: function() {
                        return this.original && this.original.avatar ? this.original.avatar : "https://app.crowdfundly.io/images/placeholder/avatar.png"
                    }
                },
                methods: {
                    isAuth: function() {
                        return this.$auth.user && this.$auth.user.username === this.$route.params.username
                    },
                    toggleTreeView: function(e) {
                        var t = document.getElementById(e);
                        return t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
                    },
                    getActiveTreeView: function(e) {
                        setTimeout((function() {
                            var t = document.getElementById(e);
                            return document.querySelector("#" + e + " .active") ? (t.classList.add("active"), "active") : (t.classList.remove("active"), "")
                        }), 400)
                    },
                    canSeeMenu: function(e) {
                        return e.id && "payment-history" == e.id ? !this.userIsAppsumoSubscriber && "free" != this.$auth.user.plan_id : e.show
                    }
                }
            },
            ke = {
                components: {
                    UnverifiedAlert: ue,
                    "app-header": V,
                    "app-footer": H,
                    Sidebar: Object(A.a)(ye, (function() {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("div", {
                            staticClass: "profile-sidebar"
                        }, [e.original ? o("div", {
                            staticClass: "profile-sidebar__user"
                        }, [o("div", {
                            staticClass: "profile-sidebar__user-avatar"
                        }, [o("div", {
                            staticClass: "profile-sidebar__user-avatar-img",
                            style: "background-image: url(" + e.getAvatar + ")"
                        })]), e._v(" "), o("h5", {
                            staticClass: "profile-sidebar__user-name"
                        }, [e._v("\n            " + e._s(e.original.name) + "\n        ")]), e._v(" "), o("p", {
                            staticClass: "profile-sidebar__user-bio"
                        }, [e._v("\n            " + e._s(e.original.bio) + "\n        ")])]) : e._e(), e._v(" "), o("div", {
                            staticClass: "profile-sidebar__menu"
                        }, [e.isAuth() ? o("ul", {
                            staticClass: "profile-menu"
                        }, e._l(e.menu, (function(t, i) {
                            return o("li", {
                                key: i,
                                staticClass: "profile-menu__item"
                            }, [t.show ? o("div", [t.submenu ? o("div", {
                                staticClass: "treeview",
                                class: e.getActiveTreeView("treeview" + i),
                                attrs: {
                                    id: "treeview" + i
                                }
                            }, [o("div", {
                                staticClass: "treeview__toggle",
                                on: {
                                    click: function(t) {
                                        return e.toggleTreeView("treeview" + i)
                                    }
                                }
                            }, [o("div", {
                                staticClass: "treeview__toggle-icon"
                            }, [o("i", {
                                class: t.icon
                            })]), e._v(" "), o("div", {
                                staticClass: "treeview__toggle-title",
                                domProps: {
                                    textContent: e._s(t.name)
                                }
                            })]), e._v(" "), o("ul", {
                                staticClass: "treeview__menu"
                            }, e._l(t.submenu, (function(t, i) {
                                return e.canSeeMenu(t) ? o("li", {
                                    key: i,
                                    staticClass: "treeview__menu-item"
                                }, [o("n-link", {
                                    staticClass: "treeview__menu-item-link",
                                    attrs: {
                                        to: t.link
                                    }
                                }, [o("div", {
                                    staticClass: "treeview__menu-item-icon"
                                }, [o("i", {
                                    class: t.icon
                                })]), e._v(" "), o("div", {
                                    staticClass: "treeview__menu-item-title",
                                    domProps: {
                                        textContent: e._s(t.name)
                                    }
                                })])], 1) : e._e()
                            })), 0)]) : o("n-link", {
                                staticClass: "profile-menu__item-link",
                                attrs: {
                                    to: t.link
                                }
                            }, [o("div", {
                                staticClass: "profile-menu__item-icon"
                            }, [o("i", {
                                class: t.icon
                            })]), e._v(" "), o("div", {
                                staticClass: "profile-menu__item-title",
                                domProps: {
                                    textContent: e._s(t.name)
                                }
                            })])], 1) : e._e()])
                        })), 0) : e._e()])])
                    }), [], !1, null, null, null).exports
                },
                head: function() {
                    return {
                        title: this.$t("my_profile"),
                        meta: [{
                            property: "og:title",
                            hid: "og:title",
                            content: this.publicResponse ? this.publicResponse.name : this.$t("my_profile")
                        }, {
                            property: "og:description",
                            hid: "og:description",
                            content: this.publicResponse ? this.publicResponse.bio : ""
                        }, {
                            name: "description",
                            hid: "description",
                            content: this.publicResponse ? this.publicResponse.bio : ""
                        }, {
                            property: "og:image",
                            hid: "og:image",
                            content: this.publicResponse ? this.publicResponse.avatar : ""
                        }, {
                            property: "og:url",
                            hid: "og:url",
                            content: "https://" + baseDomain() + "/user/" + this.publicResponse.username + "/"
                        }]
                    }
                },
                watch: {
                    $route: function(e, t) {
                        this.getUserInfo(e.params.username)
                    }
                },
                data: function() {
                    return {
                        hasLoadedRequiredData: !1,
                        authenticatedResponse: {
                            name: null,
                            email: null,
                            currentPassword: null,
                            newPassword: null,
                            confirmPassword: null,
                            bio: null,
                            strict: !0,
                            profileUrl: null,
                            imageData: null,
                            firm_name: null,
                            firm_address: null,
                            skills: null,
                            stats: null,
                            lawyer_available_status: null,
                            recommendedCampaigns: null,
                            conversationalEmails: null,
                            chatNotifications: null,
                            campaignUpdates: null
                        },
                        loading: !0,
                        publicResponse: {}
                    }
                },
                created: function() {
                    this.getUserInfo(this.$route.params.username)
                },
                methods: {
                    getUserInfo: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (e) {
                                            o.next = 2;
                                            break
                                        }
                                        return o.abrupt("return", !1);
                                    case 2:
                                        t.loading = !0, t.$axios.$get("user/public-info/" + e).then((function(e) {
                                            t.publicResponse = e, t.publicResponse.bio = t.setBio(e), t.publicResponse.imageData = e.avatar, t.publicResponse.name = e.name, t.publicResponse.profileUrl = e.username, (t.$auth.user && t.$auth.user.username) !== t.$route.params.username ? (t.hasLoadedRequiredData = !0, t.$router.push({
                                                name: "user-username-story",
                                                params: {
                                                    username: t.$route.params.username
                                                }
                                            })) : t.getAuthUserInfo(), t.loading = !1
                                        })).catch((function(e) {
                                            t.hasLoadedRequiredData = !0, t.$router.push({
                                                name: "index"
                                            })
                                        })).finally((function() {
                                            t.loading = !1
                                        }));
                                    case 4:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    getAuthUserInfo: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.loading = !0, t.next = 3, e.$axios.$get("profile").then((function(t) {
                                            e.authenticatedResponse.imageData = t.avatar, e.authenticatedResponse.bio = e.setBio(t), e.authenticatedResponse.name = t.name, e.authenticatedResponse.email = t.email, e.authenticatedResponse.profileUrl = t.username, e.authenticatedResponse.strict = t.strict, e._appendAdditionalPropertiesToDetails(t)
                                        })).catch((function(t) {
                                            e.$router.push({
                                                name: "index"
                                            })
                                        })).finally((function() {
                                            e.hasLoadedRequiredData = !0, e.loading = !1
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    setBio: function(e) {
                        if (e.bio) return e.bio;
                        var t = "";
                        return e.donation_count > 0 && (t += "".concat(this.$t("i_have_contributed") + " " + e.donation_count + " " + this.$t("times"), " ")), e.campaign_count > 0 && (t += "".concat(this.$t("i_have_raised_contribution_for") + " " + e.campaign_count + " " + this.$t("campaigns"))), t += "".concat(this.$t("i_am_contributing_since") + " " + this.$moment(e.created_at).format("Do MMMM YYYY"), ".")
                    },
                    _appendAdditionalPropertiesToDetails: function(e) {
                        e.firm_name && (this.authenticatedResponse.firm_name = e.firm_name), e.firm_address && (this.authenticatedResponse.firm_address = e.firm_address), e.skills && (this.authenticatedResponse.skills = e.skills), e.lawyer_available_status && (this.authenticatedResponse.lawyer_available_status = e.lawyer_available_status), e.stats && (this.authenticatedResponse.stats = e.stats)
                    }
                }
            },
            ve = {
                components: {
                    UnverifiedAlert: ue,
                    "app-header": V,
                    "app-footer": H
                },
                head: function() {
                    return {
                        meta: [{
                            charset: "UTF-8",
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }]
                    }
                }
            },
            ze = {
                _auth: X,
                "_campaign-dashboard": te,
                _default: ie,
                _fundraise: re,
                "_org-dashboard": fe,
                _profile: Object(A.a)(ke, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        attrs: {
                            id: "public"
                        }
                    }, [o("div", {
                        staticClass: "profile"
                    }, [o("app-header"), e._v(" "), o("g-notify", {
                        attrs: {
                            group: "notify"
                        }
                    }), e._v(" "), o("jl-confirm-dialog"), e._v(" "), o("div", {
                        staticClass: "g-container"
                    }, [e.$auth.loggedIn && !e.$auth.user.is_verified ? o("unverified-alert") : e._e(), e._v(" "), o("div", {
                        staticClass: "profile__inner"
                    }, [o("div", {
                        staticClass: "profile__sidebar"
                    }, [o("sidebar", {
                        attrs: {
                            original: e.publicResponse
                        }
                    })], 1), e._v(" "), o("div", {
                        staticClass: "profile__body"
                    }, [e.hasLoadedRequiredData ? o("nuxt-child", {
                        attrs: {
                            details: e.authenticatedResponse,
                            original: e.publicResponse
                        }
                    }) : e._e()], 1)])], 1)], 1)])
                }), [], !1, null, null, null).exports,
                _public: Object(A.a)(ve, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        attrs: {
                            id: "public"
                        }
                    }, [o("div", {
                        staticClass: "content-wrapper"
                    }, [o("g-notify", {
                        attrs: {
                            group: "notify"
                        }
                    }), e._v(" "), o("jl-confirm-dialog"), e._v(" "), o("app-header"), e._v(" "), o("div", {
                        staticClass: "content-body"
                    }, [e.$auth.loggedIn && !e.$auth.user.is_verified ? o("div", {
                        staticClass: "container"
                    }, [o("unverified-alert")], 1) : e._e(), e._v(" "), o("nuxt")], 1), e._v(" "), o("app-footer")], 1)])
                }), [], !1, null, null, null).exports
            },
            Ce = {
                head: {
                    title: "Crowdfundly",
                    meta: [{
                        charset: "utf-8"
                    }, {
                        name: "viewport",
                        hid: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, {
                        property: "og:type",
                        hid: "og:type",
                        content: "website"
                    }, {
                        property: "og:title",
                        hid: "og:title",
                        content: "Crowdfundly"
                    }, {
                        property: "og:image",
                        hid: "og:image",
                        content: "https://app.crowdfundly.io/logo/crowdfundly.png"
                    }, {
                        property: "og:description",
                        hid: "og:description",
                        content: "Build Your Crowdfunding Platform"
                    }, {
                        name: "description",
                        hid: "description",
                        content: "Build Your Crowdfunding Platform"
                    }, {
                        property: "og:url",
                        hid: "og:url",
                        content: "https://crowdfundly.io"
                    }, {
                        rel: "canonical",
                        hid: "canonical",
                        content: "https://crowdfundly.io"
                    }],
                    script: [{
                        src: "https://js.stripe.com/v3/"
                    }],
                    link: [],
                    style: []
                },
                render: function(e, t) {
                    var o = e("NuxtLoading", {
                        ref: "loading"
                    });
                    if (this.nuxt.err && O) {
                        var n = (O.options || O).layout;
                        n && this.setLayout("function" == typeof n ? n.call(O, this.context) : n)
                    }
                    var r = e(this.layout || "nuxt"),
                        d = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [r]),
                        l = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(e) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [d]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [o, l])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: ""
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    l.a.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    this.$loading = this.$refs.loading
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var o, n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((o = Object(w.f)(e.$route)).length) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return e.$loading.start(), n = o.map((function(t) {
                                            var p = [];
                                            return t.$options.fetch && p.push(Object(w.m)(t.$options.fetch, e.context)), t.$options.asyncData && p.push(Object(w.m)(t.$options.asyncData, e.context).then((function(e) {
                                                for (var o in e) l.a.set(t.$data, o, e[o])
                                            }))), Promise.all(p)
                                        })), t.prev = 5, t.next = 8, Promise.all(n);
                                    case 8:
                                        t.next = 15;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(5), e.$loading.fail(), Object(w.i)(t.t0), e.error(t.t0);
                                    case 15:
                                        e.$loading.finish();
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish())
                    },
                    setLayout: function(e) {
                        return e && ze["_" + e] || (e = "default"), this.layoutName = e, this.layout = ze["_" + e], this.layout
                    },
                    loadLayout: function(e) {
                        return e && ze["_" + e] || (e = "default"), Promise.resolve(ze["_" + e])
                    }
                },
                components: {
                    NuxtLoading: R
                }
            };
        o(73), o(29), o(21);
        l.a.use(U.a);
        var Se = ["state", "getters", "actions", "mutations"],
            je = {};
        (je = function(e, t) {
            if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)), Ae(e, t)
        }(o(323), "store/index.js")).modules = je.modules || {}, Oe(o(328), "campaignSidebar.js"), Oe(o(329), "error.js"), Oe(o(330), "toggle-sidebar.js");
        var Ee = je instanceof Function ? je : function() {
            return new U.a.Store(Object.assign({
                strict: !1
            }, je))
        };

        function Ae(e, t) {
            if (e.state && "function" != typeof e.state) {
                console.warn("'state' should be a method that returns an object in ".concat(t));
                var o = Object.assign({}, e.state);
                e = Object.assign({}, e, {
                    state: function() {
                        return o
                    }
                })
            }
            return e
        }

        function Oe(e, t) {
            e = e.default || e;
            var o = t.replace(/\.(js|mjs)$/, "").split("/"),
                n = o[o.length - 1],
                r = "store/".concat(t);
            if (e = "state" === n ? function(e, t) {
                    if ("function" != typeof e) {
                        console.warn("".concat(t, " should export a method that returns an object"));
                        var o = Object.assign({}, e);
                        return function() {
                            return o
                        }
                    }
                    return Ae(e, t)
                }(e, r) : Ae(e, r), Se.includes(n)) {
                var d = n;
                Te(Pe(je, o, {
                    isProperty: !0
                }), e, d)
            } else {
                "index" === n && (o.pop(), n = o[o.length - 1]);
                var l = Pe(je, o),
                    c = !0,
                    m = !1,
                    _ = void 0;
                try {
                    for (var h, x = Se[Symbol.iterator](); !(c = (h = x.next()).done); c = !0) {
                        var f = h.value;
                        Te(l, e[f], f)
                    }
                } catch (e) {
                    m = !0, _ = e
                } finally {
                    try {
                        c || null == x.return || x.return()
                    } finally {
                        if (m) throw _
                    }
                }!1 === e.namespaced && delete l.namespaced
            }
        }

        function Pe(e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = o.isProperty,
                r = void 0 !== n && n;
            if (!t.length || r && 1 === t.length) return e;
            var d = t.shift();
            return e.modules[d] = e.modules[d] || {}, e.modules[d].namespaced = !0, e.modules[d].modules = e.modules[d].modules || {}, Pe(e.modules[d], t, {
                isProperty: r
            })
        }

        function Te(e, t, o) {
            t && ("state" === o ? e.state = t || e.state : e[o] = Object.assign({}, e[o], t))
        }
        var Ie = o(244);
        l.a.use(Ie.a, {});
        for (var Re = o(144), $e = o.n(Re), qe = function(e, t) {
                e.$moment = $e.a, t("moment", $e.a)
            }, De = o(111), Ne = o.n(De), Le = o(231), Ue = o.n(Le), Me = {
                setBaseURL: function(e) {
                    this.defaults.baseURL = e
                },
                setHeader: function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = !0,
                        r = !1,
                        d = void 0;
                    try {
                        for (var l, c = (Array.isArray(o) ? o : [o])[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                            var m = l.value;
                            if (!t) return void delete this.defaults.headers[m][e];
                            this.defaults.headers[m][e] = t
                        }
                    } catch (e) {
                        r = !0, d = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (r) throw d
                        }
                    }
                },
                setToken: function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", n, o)
                },
                onRequest: function(e) {
                    this.interceptors.request.use((function(t) {
                        return e(t) || t
                    }))
                },
                onResponse: function(e) {
                    this.interceptors.response.use((function(t) {
                        return e(t) || t
                    }))
                },
                onRequestError: function(e) {
                    this.interceptors.request.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onResponseError: function(e) {
                    this.interceptors.response.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onError: function(e) {
                    this.onRequestError(e), this.onResponseError(e)
                },
                create: function(e) {
                    return Ye(Ue()(e, this.defaults))
                }
            }, Be = function() {
                var e = Ke[Fe];
                Me["$" + e] = function() {
                    return this[e].apply(this, arguments).then((function(e) {
                        return e && e.data
                    }))
                }
            }, Fe = 0, Ke = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Fe < Ke.length; Fe++) Be();
        var Ye = function(e) {
                var t = Ne.a.create(e);
                return t.CancelToken = Ne.a.CancelToken, t.isCancel = Ne.a.isCancel,
                    function(e) {
                        for (var t in Me) e[t] = Me[t].bind(e)
                    }(t), Ge(t), t
            },
            Ge = function(e) {
                var t = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    o = function() {
                        return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : t
                    },
                    n = 0;
                e.onRequest((function(e) {
                    e && !1 === e.progress || n++
                })), e.onResponse((function(e) {
                    e && e.config && !1 === e.config.progress || --n <= 0 && (n = 0, o().finish())
                })), e.onError((function(e) {
                    e && e.config && !1 === e.config.progress || (n--, Ne.a.isCancel(e) || (o().fail(), o().finish()))
                }));
                var r = function(e) {
                    if (n) {
                        var progress = 100 * e.loaded / (e.total * n);
                        o().set(Math.min(100, progress))
                    }
                };
                e.defaults.onUploadProgress = r, e.defaults.onDownloadProgress = r
            },
            Ve = function(e, t) {
                var o = {
                    baseURL: "https://api.crowdfundly.io/api/v1/",
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                };
                o.headers.common = e.req && e.req.headers ? Object.assign({}, e.req.headers) : {}, delete o.headers.common.accept, delete o.headers.common.host, delete o.headers.common["cf-ray"], delete o.headers.common["cf-connecting-ip"], delete o.headers.common["content-length"], delete o.headers.common["content-md5"], delete o.headers.common["content-type"];
                var n = Ye(o);
                e.$axios = n, t("axios", n)
            },
            We = o(232),
            He = o.n(We),
            Ze = function(e, t) {
                var o = e.req,
                    n = e.res,
                    r = !0;
                t("cookies", He()(o, n, r))
            },
            Xe = o(177),
            Je = o.n(Xe),
            Qe = o(112),
            et = function(e) {
                var t = e.store;
                l.a.prototype.$t = function(e) {
                    return Qe[t.state.selected_language][e] ? Qe[t.state.selected_language][e] : Qe.en[e] ? Qe.en[e] : ""
                }
            },
            tt = o(178),
            it = o(179),
            at = {
                props: {
                    title: {
                        type: String,
                        required: !1
                    },
                    header: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    sectionClass: {
                        type: String,
                        required: !1
                    },
                    headerClass: {
                        type: String,
                        required: !1
                    },
                    titleClass: {
                        type: String,
                        required: !1
                    },
                    bodyClass: {
                        type: String,
                        required: !1
                    }
                }
            },
            ot = Object(A.a)(at, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "section",
                    class: e.sectionClass
                }, [e.header ? o("div", {
                    staticClass: "section__header",
                    class: e.headerClass
                }, [e._t("header"), e._v(" "), e.title ? o("h2", {
                    staticClass: "section__title",
                    class: e.titleClass,
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._e()], 2) : e._e(), e._v(" "), o("div", {
                    staticClass: "section__body",
                    class: e.bodyClass
                }, [e._t("default")], 2)])
            }), [], !1, null, null, null).exports,
            nt = o(33),
            pt = {
                props: {
                    bg: {
                        type: String,
                        required: !1
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    description: {
                        type: String,
                        required: !1
                    },
                    descriptionColor: {
                        type: String,
                        required: !1
                    },
                    titleColor: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "circle"
                    },
                    size: {
                        type: String,
                        required: !1
                    }
                }
            },
            st = Object(A.a)(pt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "loader-wrapper",
                    style: "background-color:" + e.bg
                }, ["circle" == e.type ? o("div", {
                    staticClass: "spinner",
                    class: "spinner--" + e.size
                }, [o("div"), e._v(" "), o("div"), e._v(" "), o("div"), e._v(" "), o("div"), e._v(" "), o("div"), e._v(" "), o("div"), e._v(" "), o("div"), e._v(" "), o("div")]) : e._e(), e._v(" "), "dotted" == e.type ? o("div", {
                    staticClass: "loader"
                }, [o("span", {
                    staticClass: "loader__item"
                }), e._v(" "), o("span", {
                    staticClass: "loader__item"
                }), e._v(" "), o("span", {
                    staticClass: "loader__item"
                }), e._v(" "), o("span", {
                    staticClass: "loader__item"
                }), e._v(" "), o("span", {
                    staticClass: "loader__item"
                })]) : e._e(), e._v(" "), e.title || e.description ? o("div", {
                    staticClass: "loader-content"
                }, [o("h5", {
                    staticClass: "loader-content__title",
                    style: "color:" + e.titleColor,
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }), e._v(" "), o("p", {
                    staticClass: "loader-content__desc",
                    style: "color:" + e.descriptionColor,
                    domProps: {
                        textContent: e._s(e.description)
                    }
                })]) : e._e()])
            }), [], !1, null, null, null).exports,
            lt = {
                props: ["styles"]
            },
            ct = Object(A.a)(lt, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "loader",
                    class: this.styles
                }, [t("span", {
                    staticClass: "loader__item loader__item--mini"
                }), this._v(" "), t("span", {
                    staticClass: "loader__item loader__item--mini"
                }), this._v(" "), t("span", {
                    staticClass: "loader__item loader__item--mini"
                }), this._v(" "), t("span", {
                    staticClass: "loader__item loader__item--mini"
                }), this._v(" "), t("span", {
                    staticClass: "loader__item loader__item--mini"
                })])
            }), [], !1, null, null, null).exports,
            mt = {
                props: {
                    right: {
                        type: Boolean,
                        require: !1,
                        default: !0
                    },
                    caret: {
                        type: Boolean,
                        require: !1,
                        default: !1
                    }
                },
                methods: {
                    closeDropdown: function() {
                        document.getElementsByClassName("g-dropdown__menu-item")
                    }
                }
            },
            gt = Object(A.a)(mt, (function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("b-dropdown", {
                    staticClass: "g-dropdown",
                    class: e.caret ? "g-dropdown--caret" : "",
                    attrs: {
                        id: "dropdown-right",
                        right: e.right,
                        hide: e.closeDropdown
                    },
                    scopedSlots: e._u([{
                        key: "button-content",
                        fn: function() {
                            return [e._t("button")]
                        },
                        proxy: !0
                    }], null, !0)
                }, [e._v(" "), e._t("default")], 2)
            }), [], !1, null, null, null).exports,
            bt = {
                props: {
                    link: {
                        require: !1,
                        default: " "
                    },
                    title: {
                        type: String,
                        require: !1
                    },
                    target: {
                        require: !1
                    },
                    exact: {
                        type: Boolean,
                        require: !1,
                        default: !1
                    }
                }
            },
            _t = Object(A.a)(bt, (function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("b-dropdown-item", {
                    staticClass: "g-dropdown__item",
                    attrs: {
                        to: e.link,
                        target: e.target,
                        exact: e.exact
                    }
                }, [e._v("\n      " + e._s(e.title ? e.title : "") + "\n      "), e._t("default")], 2)
            }), [], !1, null, null, null).exports,
            ut = {
                props: {
                    title: {
                        type: String,
                        require: !1
                    }
                },
                methods: {
                    action: function() {
                        this.$emit("onPress")
                    }
                }
            },
            ht = Object(A.a)(ut, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("b-dropdown-item-button", {
                    staticClass: "g-dropdown__item",
                    on: {
                        click: this.action
                    }
                }, [this._v("\n      " + this._s(this.title ? this.title : "") + "\n      "), this._t("default")], 2)
            }), [], !1, null, null, null).exports,
            xt = {
                props: ["icon", "image", "title", "description", "size"],
                data: function() {
                    return {
                        sizeClass: {
                            md: "section-placeholder--md",
                            sm: "section-placeholder--sm"
                        }
                    }
                }
            },
            ft = Object(A.a)(xt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    class: e.size ? "section-placeholder " + e.sizeClass[e.size] : "section-placeholder"
                }, [o("div", {
                    staticClass: "section-placeholder__inner"
                }, [o("div", {
                    staticClass: "section-placeholder__icon"
                }, [e.icon && !e.image ? o("span", {
                    staticClass: "section-placeholder__icon-text"
                }, [o("i", {
                    class: e.icon
                })]) : o("img", {
                    staticClass: "section-placeholder__icon-img",
                    attrs: {
                        src: e.image ? e.image : "https://app.crowdfundly.io/images/banner/notfound.svg"
                    }
                })]), e._v(" "), e.title ? o("h3", {
                    staticClass: "section-placeholder__title",
                    domProps: {
                        textContent: e._s(e.title ? e.title : e.$t("sorry"))
                    }
                }) : e._e(), e._v(" "), o("p", {
                    staticClass: "section-placeholder__desc",
                    domProps: {
                        textContent: e._s(e.description ? e.description : e.$t("no_data_found"))
                    }
                }), e._v(" "), e._t("default")], 2)])
            }), [], !1, null, null, null).exports,
            wt = {
                props: {
                    errors: {
                        type: Array,
                        required: !0
                    }
                }
            },
            yt = Object(A.a)(wt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return e.errors.length > 0 ? o("div", e._l(e.errors, (function(t, n) {
                    return o("div", {
                        key: n,
                        staticClass: "alert alert-danger",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n        " + e._s(t) + "\n    ")])
                })), 0) : e._e()
            }), [], !1, null, null, null).exports,
            kt = o(235),
            vt = o.n(kt),
            zt = {
                name: "progressBar",
                props: {
                    progress: {
                        required: !1
                    },
                    size: {
                        type: String,
                        required: !1
                    },
                    color: {
                        type: String,
                        required: !1
                    },
                    vertical: {
                        type: Boolean,
                        required: !1
                    }
                },
                computed: {
                    progressSize: function() {
                        return this.size ? " progress--" + this.size : ""
                    },
                    progressVertical: function() {
                        return this.vertical ? " progress--vertical" : ""
                    }
                }
            },
            Ct = Object(A.a)(zt, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    class: "progress" + this.progressSize + this.progressVertical
                }, [t("div", {
                    staticClass: "progress__bar",
                    class: "progress__bar--" + this.color,
                    style: this.vertical ? "height:" + this.progress + "%" : "width:" + this.progress + "%"
                })])
            }), [], !1, null, null, null).exports,
            St = o(87),
            jt = {
                props: ["options", "option-desc", "label", "search", "search-placeholder"],
                data: function() {
                    return {
                        dropdown: !1,
                        selected: null
                    }
                },
                created: function() {
                    document.addEventListener("click", this.documentClick)
                },
                destroyed: function() {
                    document.removeEventListener("click", this.documentClick)
                },
                methods: {
                    getClass: function(data) {
                        var e = "select-dropdown__selectbox-single-inner";
                        return this.selected && this.selected.id === data.id ? e + " selected" : e
                    },
                    showDropdwon: function() {
                        this.dropdown = !this.dropdown
                    },
                    hideDropdown: function() {
                        this.dropdown = !1
                    },
                    documentClick: function(e) {
                        var t = this.$refs.dropdownMenu,
                            o = e.target;
                        t === o || t.contains(o) || (this.dropdown = !1)
                    },
                    select: function(data) {
                        this.selected = data, this.hideDropdown(), this.$emit("option-selected", data)
                    }
                }
            },
            Et = Object(A.a)(jt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "select-dropdown"
                }, [o("div", {
                    ref: "dropdownMenu",
                    staticClass: "select-dropdown__placeholder form-control",
                    attrs: {
                        tabindex: "1"
                    },
                    on: {
                        click: e.showDropdwon
                    }
                }, [e.selected ? o("div", {
                    staticClass: "select-dropdown__selectbox-single"
                }, [o("div", {
                    staticClass: "select-dropdown__selectbox-single-inner"
                }, [o("img", {
                    staticClass: "select-dropdown__selectbox-single-img",
                    attrs: {
                        src: e.selected.avatar,
                        alt: e.selected.avatar
                    }
                }), e._v(" "), o("div", {
                    staticClass: "select-dropdown__selectbox-single-right"
                }, [o("h4", {
                    staticClass: "select-dropdown__selectbox-single-title m-0",
                    domProps: {
                        textContent: e._s(e.selected.name)
                    }
                })])])]) : o("span", {
                    domProps: {
                        textContent: e._s(e.label ? e.label : e.$t("select_an_option"))
                    }
                }), e._v(" "), o("i", {
                    staticClass: "select-dropdown__placeholder-icon fas fa-caret-down"
                })]), e._v(" "), o("div", {
                    staticClass: "select-dropdown__selectbox",
                    class: e.dropdown ? "show" : ""
                }, [o("div", {
                    staticClass: "select-dropdown__selectbox-header"
                }, [e.search ? e._e() : o("h5", {
                    staticClass: "select-dropdown__selectbox-header-text",
                    domProps: {
                        textContent: e._s(e.label ? e.label : e.$t("select_an_option"))
                    }
                }), e._v(" "), e.search ? o("div", [o("input", {
                    staticClass: "select-dropdown__selectbox-search form-control form-control-sm",
                    attrs: {
                        type: "text",
                        placeholder: e.searchPlaceholder ? e.searchPlaceholder : ""
                    }
                }), e._v(" "), o("i", {
                    staticClass: "select-dropdown__selectbox-search-icon fas fa-search"
                })]) : e._e()]), e._v(" "), o("div", {
                    staticClass: "select-dropdown__selectbox-body"
                }, e._l(e.options, (function(option, i) {
                    return o("div", {
                        key: i,
                        staticClass: "select-dropdown__selectbox-single",
                        on: {
                            click: function(t) {
                                return e.select(option)
                            }
                        }
                    }, [o("div", {
                        class: e.getClass(option)
                    }, [o("img", {
                        staticClass: "select-dropdown__selectbox-single-img",
                        attrs: {
                            src: option.avatar,
                            alt: e.$t("user_avatar")
                        }
                    }), e._v(" "), o("div", {
                        staticClass: "select-dropdown__selectbox-single-right"
                    }, [o("h4", {
                        staticClass: "select-dropdown__selectbox-single-title m-0",
                        domProps: {
                            textContent: e._s(option.name)
                        }
                    })])])])
                })), 0)])])
            }), [], !1, null, null, null).exports,
            At = {
                props: {
                    title: {
                        type: String,
                        required: !1
                    },
                    description: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "success"
                    }
                },
                computed: {
                    alertTheme: function() {
                        return {
                            success: "success",
                            info: "info",
                            warning: "warning",
                            danger: "danger"
                        }
                    },
                    alertIcon: function() {
                        return {
                            success: "fas fa-check",
                            info: "fas fa-info",
                            warning: "fas fa-exclamation",
                            danger: "fas fa-exclamation-triangle"
                        }
                    }
                },
                methods: {
                    triggeredConfirm: function() {
                        this.$hideModal("confirm-alert"), this.$emit("confirmed")
                    },
                    triggeredCancel: function() {
                        this.$hideModal("confirm-alert"), this.$emit("canceled")
                    }
                }
            },
            Ot = Object(A.a)(At, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("g-modal", {
                    attrs: {
                        id: "confirm-alert",
                        size: "xs",
                        position: "center-center",
                        footer: !1,
                        "close-button": !1
                    }
                }, [o("div", {
                    class: "confirm-alert confirm-alert--" + e.alertTheme[e.type]
                }, [o("div", {
                    staticClass: "confirm-alert__inner"
                }, [o("div", {
                    staticClass: "confirm-alert__header text-center"
                }, [o("div", {
                    class: "confirm-alert__header-icon bg-" + e.alertTheme[e.type]
                }, [o("i", {
                    class: e.alertIcon[e.type] + " confirm-alert__header-icon-text"
                })])]), e._v(" "), o("div", {
                    staticClass: "confirm-alert__content text-center"
                }, [o("h4", {
                    staticClass: "confirm-alert__title",
                    domProps: {
                        textContent: e._s(e.title ? e.title : e.$t("are_you_sure"))
                    }
                }), e._v(" "), e.description ? o("p", {
                    staticClass: "confirm-alert__description",
                    domProps: {
                        textContent: e._s(e.description)
                    }
                }) : e._e()]), e._v(" "), o("div", {
                    staticClass: "confirm-alert__footer text-center"
                }, [o("button", {
                    class: "confirm-alert__confirmed btn btn-sm btn-" + e.alertTheme[e.type],
                    domProps: {
                        textContent: e._s(e.$t("yes_confirm"))
                    },
                    on: {
                        click: e.triggeredConfirm
                    }
                }), e._v(" "), o("span", {
                    staticClass: "confirm-alert__cancel",
                    domProps: {
                        textContent: e._s(e.$t("no_cancel"))
                    },
                    on: {
                        click: e.triggeredCancel
                    }
                })])])])])
            }), [], !1, null, null, null).exports,
            Pt = (o(56), o(32), {
                layout: "dashboard",
                props: {
                    editor: {
                        type: Array,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        selectedElement: null,
                        showElements: !0,
                        defaultTag: null,
                        templateData: [],
                        rerender: !0,
                        elements: [{
                            name: "H1",
                            desc: "Header Text",
                            placeholder: "Header",
                            class: "input-area story-heading",
                            selectorClass: "editor-control__dashboard__button js-header-button"
                        }, {
                            name: '<i class="fas fa-quote-left" style="font-size:1.1rem"></i>',
                            desc: "Quote",
                            placeholder: "Quote",
                            class: "input-area story-blockquote",
                            selectorClass: "editor-control__dashboard__button js-quote-button"
                        }, {
                            name: "Bd",
                            desc: "Body Text",
                            placeholder: "Body Text",
                            class: "input-area story-paragraph",
                            selectorClass: "editor-control__dashboard__button js-text-button"
                        }, {
                            name: "<i class='fas fa-image'></i>",
                            desc: "Image",
                            class: "input-area story-image",
                            selectorClass: "editor-control__dashboard__button js-image-button",
                            hasDropZone: !0,
                            hasFilePicker: !0,
                            isFile: !0
                        }, {
                            name: "<i class='fas fa-video'></i>",
                            desc: "Video",
                            class: "story-video",
                            placeholder: "https://www.youtube.com/",
                            selectorClass: "editor-control__dashboard__button js-video-button",
                            isIframe: !0
                        }],
                        cropperImage: null,
                        item: null
                    }
                },
                created: function() {
                    this.templateData = this.editor, this.defaultTag = this.elements[2], 0 === this.templateData.length && this.addNewElement(this.defaultTag, !0)
                },
                mounted: function() {
                    var e = this;
                    this.$root.$on("fetch_editor_data", (function() {
                        var data = e.generateJSON();
                        e.$emit("dispatched_editor_data", data)
                    })), this.getHeight()
                },
                computed: {
                    insertValidYoutubeUrlElement: function() {
                        return '\n                    <p class="red-text mt-1" style="color:red">Please insert a valid video url</p>\n                '
                    },
                    templateLength: function() {
                        return this.templateData.length
                    }
                },
                methods: {
                    grow: function(e) {
                        var element = document.querySelector("#" + e);
                        element.style.height = "5px", element.style.height = element.scrollHeight + "px"
                    },
                    moveUp: function(i) {
                        this.rerender = !1;
                        var e = this.templateData[i - 1];
                        this.templateData[i - 1] = this.templateData[i], this.templateData[i] = e, this.rerender = !0
                    },
                    moveDown: function(i) {
                        this.rerender = !1;
                        var e = this.templateData[i + 1];
                        this.templateData[i + 1] = this.templateData[i], this.templateData[i] = e, this.rerender = !0
                    },
                    canMoveUp: function(i) {
                        return !(0 === i)
                    },
                    canMoveDown: function(i) {
                        return !(this.templateLength - 2 === i)
                    },
                    generateJSON: function() {
                        var data = [];
                        return this.templateData.forEach((function(e) {
                            e.model && data.push(e)
                        })), JSON.stringify(data)
                    },
                    requestDeletion: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.next = 2, t.$confirm(null, t.$t("want_to_delete_this_block"));
                                    case 2:
                                        o.sent && t.templateData.splice(e, 1);
                                    case 4:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    renderFilePicker: function(e) {
                        return e.selectedElement.hasFilePicker
                    },
                    renderDropZone: function(e) {
                        return e.selectedElement.hasDropZone && !e.model
                    },
                    openFilePicker: function(e) {
                        document.querySelector("#image-picker-" + e).click()
                    },
                    handleImageSelection: function(e, t) {
                        var o = this;
                        return Object(n.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o.item = t, r = e.target.files[0], e.target.value = "", !r) {
                                            n.next = 17;
                                            break
                                        }
                                        if (o.cropperImage = r, !("image/gif" === r.type)) {
                                            n.next = 16;
                                            break
                                        }
                                        return n.next = 9, o.$confirmResizeGif();
                                    case 9:
                                        if (!n.sent) {
                                            n.next = 13;
                                            break
                                        }
                                        o.$showImageCropper("editorImageCropper"), n.next = 15;
                                        break;
                                    case 13:
                                        return n.next = 15, o.setCroppedImage(r);
                                    case 15:
                                        return n.abrupt("return");
                                    case 16:
                                        o.$showImageCropper("editorImageCropper");
                                    case 17:
                                        return n.abrupt("return");
                                    case 18:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    handleFileDrop: function(e, t) {
                        var o = this;
                        return Object(n.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o.item = t, r = e.dataTransfer.files[0], e.target.value = "", !r) {
                                            n.next = 17;
                                            break
                                        }
                                        if (o.cropperImage = r, !("image/gif" === r.type)) {
                                            n.next = 16;
                                            break
                                        }
                                        return n.next = 9, o.$confirmResizeGif();
                                    case 9:
                                        if (!n.sent) {
                                            n.next = 13;
                                            break
                                        }
                                        o.$showImageCropper("editorImageCropper"), n.next = 15;
                                        break;
                                    case 13:
                                        return n.next = 15, o.setCroppedImage(r);
                                    case 15:
                                        return n.abrupt("return");
                                    case 16:
                                        o.$showImageCropper("editorImageCropper");
                                    case 17:
                                        return n.abrupt("return");
                                    case 18:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    setCroppedImage: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (!t.$isOversizeImage(mediaSizes().EDITOR_IMAGE, e.size)) {
                                            o.next = 2;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 2:
                                        t.upload(e, t.item), t.item.model = t.localUpload(e);
                                    case 4:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    localUpload: function(e) {
                        return URL.createObjectURL(e)
                    },
                    upload: function(e, t) {
                        var o = this;
                        this.$emit("uploading", e);
                        var n = new FormData;
                        n.append("image", e);
                        var r = route("upload-media");
                        this.$axios[r.method](r.absolute_path, n, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(e) {
                            t.model = e.data.imageUrl, o.$emit("upload-completed", e.data)
                        })).catch((function(e) {
                            t.model = null, o.$emit("upload-failed", e.response)
                        }))
                    },
                    renderIframe: function(e) {
                        if (e.model) {
                            if (!this.isValidVideoUrl(e.model)) return this.insertValidYoutubeUrlElement;
                            e.source = this.getVideoUrl(e.model);
                            var iframe = '\n                    <iframe class="iframe" width="560" height="315"\n                        src="'.concat(e.source, '?controls=0"\n                        frameborder="0"\n                        allow="accelerometer;\n                        autoplay;\n                        encrypted-media;\n                        gyroscope;\n                        picture-in-picture"\n                        allowfullscreen>\n                </iframe>\n                ');
                            return e.showInput = !1, iframe
                        }
                    },
                    getVideoUrl: function(e) {
                        if (!e) return null;
                        if (e.includes("youtube.com")) {
                            var t = {
                                watch: "watch?v=",
                                youtuBe: "youtu.be",
                                list: "&list",
                                t: "&t",
                                feature: "&feature",
                                embed: "embed/"
                            };
                            if (e.includes(t.list)) return (e = e.split(t.list)[0]).replace(t.watch, t.embed);
                            if (e.includes(t.feature)) return (e = e.split(t.feature)[0]).replace(t.watch, t.embed);
                            if (e.includes(t.t)) return (e = e.split(t.t)[0]).replace(t.watch, t.embed);
                            if (e.includes(t.watch)) return e.replace(t.watch, t.embed);
                            if (e.includes(t.youtuBe)) {
                                return e.replace(t.youtuBe, "youtube.com/embed/")
                            }
                        }
                        return e.includes("vimeo.com") ? "https://player.vimeo.com/video/" + e.split("/")[3] : e
                    },
                    showElementsText: function(e) {
                        return e.showElements ? null !== e.model ? "Edit" : this.$t("hide") : this.$t("add")
                    },
                    toggleElementsVisibility: function(e) {
                        e.showElements = !e.showElements
                    },
                    setSelectedElement: function(e, t, o, n) {
                        this.selectedElement = e, t.showElements = !1, t.selectedElement = this.selectedElement, t.showInput = !t.selectedElement.hasDropZone, "video-player" !== this.selectedElement.id && "image" !== this.selectedElement.id || (t.model = null), this.templateData.length - 1 > o || this.addNewElement(this.defaultTag)
                    },
                    addNewElement: function(dt) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = {
                                showElements: e,
                                selectedElement: dt,
                                model: null,
                                showInput: t
                            };
                        this.templateData.push(o)
                    },
                    isValidVideoUrl: function(e) {
                        return e && (e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) || e.match(/(?:https?:\/\/(?:www\.)?)?vimeo.com\/(?:channels\/|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/))
                    },
                    getHeight: function() {
                        document.querySelectorAll("textarea.input-area").forEach((function(e) {
                            var t = e.scrollHeight;
                            0 != t && e.setAttribute("style", "height:" + t + "px")
                        }))
                    }
                }
            }),
            Tt = (o(357), Object(A.a)(Pt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "editor"
                }, [e._l(e.templateData, (function(t, i) {
                    return o("div", {
                        key: i,
                        staticClass: "elements"
                    }, [o("div", {
                        staticClass: "editor-control"
                    }, [o("div", {
                        staticClass: "editor-control__expand-handle editor-control__expand-handle--add js-expand-handle"
                    }, [o("button", {
                        staticClass: "editor-control__expand-handle__button",
                        on: {
                            click: function(o) {
                                return e.toggleElementsVisibility(t)
                            }
                        }
                    }, [e._v(e._s(e.showElementsText(t)) + "\n                ")])])]), e._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showElements,
                            expression: "item.showElements"
                        }],
                        staticClass: "editor-control__dashboard",
                        staticStyle: {
                            display: "flex"
                        }
                    }, e._l(e.elements, (function(n, r) {
                        return o("button", {
                            key: r,
                            class: n.selectorClass,
                            on: {
                                click: function(o) {
                                    return e.setSelectedElement(n, t, i, r)
                                }
                            }
                        }, [o("span", {
                            staticClass: "el-name",
                            domProps: {
                                innerHTML: e._s(n.name)
                            }
                        }), e._v(" "), o("p", {
                            staticClass: "el-description",
                            domProps: {
                                textContent: e._s(n.desc)
                            }
                        })])
                    })), 0), e._v(" "), e.renderDropZone(t) ? o("div", {
                        staticClass: "drop-point",
                        attrs: {
                            id: "drop-point-" + i
                        },
                        on: {
                            drop: function(o) {
                                return o.preventDefault(), e.handleFileDrop(o, t)
                            },
                            dragover: function(e) {
                                e.preventDefault()
                            },
                            click: function(t) {
                                return e.openFilePicker(i)
                            }
                        }
                    }, [o("div", {
                        staticClass: "editor-block__image__upload-panel__icon"
                    }, [e._m(0, !0), e._v(" "), o("div", {
                        staticStyle: {
                            display: "inline-block"
                        },
                        domProps: {
                            textContent: e._s(e.$t("drag_and_drop_a_photo_to_upload_or_tap_to_upload"))
                        }
                    }), e._v(" "), o("span", {
                        staticStyle: {
                            display: "none"
                        },
                        domProps: {
                            textContent: e._s(e.$t("uploading_image") + "...")
                        }
                    })])]) : e._e(), e._v(" "), e.renderFilePicker(t) ? o("input", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        attrs: {
                            type: "file",
                            accept: "image/x-png,image/jpg,image/jpeg,image/gif",
                            id: "image-picker-" + i
                        },
                        on: {
                            change: function(o) {
                                return e.handleImageSelection(o, t)
                            }
                        }
                    }) : e._e(), e._v(" "), o("div", {
                        staticClass: "container container-relative"
                    }, [e.rerender ? o("textarea", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showInput,
                            expression: "item.showInput"
                        }, {
                            name: "model",
                            rawName: "v-model",
                            value: t.model,
                            expression: "item.model"
                        }],
                        class: t.selectedElement.class,
                        attrs: {
                            rows: "1",
                            placeholder: t.selectedElement.placeholder,
                            id: "text_input_" + i,
                            type: "text"
                        },
                        domProps: {
                            value: t.model
                        },
                        on: {
                            input: [function(o) {
                                o.target.composing || e.$set(t, "model", o.target.value)
                            }, function(t) {
                                return e.grow("text_input_" + i)
                            }],
                            keydown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : void t.preventDefault()
                            }
                        }
                    }) : e._e(), e._v(" "), t.selectedElement.isIframe ? o("div", {
                        staticClass: "container",
                        domProps: {
                            innerHTML: e._s(e.renderIframe(t))
                        }
                    }) : e._e(), e._v(" "), t.model && t.selectedElement.isFile ? o("div", {
                        staticClass: "container"
                    }, [o("img", {
                        attrs: {
                            src: t.model
                        }
                    })]) : e._e(), e._v(" "), t.model ? o("div", {
                        staticClass: "actions"
                    }, [o("button", {
                        staticClass: "actions-btn actions-btn--up",
                        attrs: {
                            disabled: !e.canMoveUp(i)
                        },
                        on: {
                            click: function(t) {
                                return e.moveUp(i)
                            }
                        }
                    }, [o("i", {
                        staticClass: "fas fa-arrow-up"
                    })]), e._v(" "), o("button", {
                        staticClass: "actions-btn actions-btn--down",
                        attrs: {
                            disabled: !e.canMoveDown(i)
                        },
                        on: {
                            click: function(t) {
                                return e.moveDown(i)
                            }
                        }
                    }, [o("i", {
                        staticClass: "fas fa-arrow-down"
                    })]), e._v(" "), o("button", {
                        staticClass: "actions-btn actions-btn--delete",
                        on: {
                            click: function(t) {
                                return e.requestDeletion(i)
                            }
                        }
                    }, [o("i", {
                        staticClass: "fas fa-trash actions-btn-icon"
                    })])]) : e._e()])])
                })), e._v(" "), o("image-cropper", {
                    attrs: {
                        id: "editorImageCropper",
                        image: e.cropperImage,
                        maxSize: e.$getMediaSize("STORY_IMAGE")
                    },
                    on: {
                        cropped: e.setCroppedImage
                    }
                })], 2)
            }), [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("p", [t("i", {
                    staticClass: "fas fa-image image-picker-placeholder"
                })])
            }], !1, null, "a814ae74", null).exports),
            It = {
                props: ["id", "active", "disabled", "type", "customClass", "value"]
            },
            Rt = Object(A.a)(It, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "switcher",
                    class: e.customClass ? e.customClass : " switcher--" + e.type
                }, [o("input", {
                    staticClass: "switcher__input",
                    attrs: {
                        type: "checkbox",
                        id: e.id ? e.id : "switcher",
                        disabled: e.disabled
                    },
                    domProps: {
                        checked: e.active,
                        value: e.value
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("input", t.target.checked)
                        }
                    }
                }), e._v(" "), o("label", {
                    staticClass: "switcher__label",
                    attrs: {
                        for: e.id ? e.id : "switcher"
                    }
                })])
            }), [], !1, null, null, null).exports,
            qt = (o(15), o(13)),
            Dt = {
                props: {
                    campaign: {
                        type: Object,
                        required: !0
                    },
                    hasAction: {
                        type: Boolean,
                        required: !1
                    },
                    organization: {
                        type: Object,
                        required: !1
                    },
                    footer: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        STATUS: qt.STATUS
                    }
                },
                computed: {
                    featured_image: function() {
                        return this.campaign.gallery.length ? this.campaign.gallery[0].source_path : this.campaign.default_gallery[0]
                    },
                    description: function() {
                        try {
                            return getDescFromCampaignStory(JSON.parse(this.campaign.story), 200)
                        } catch (e) {
                            return "No story available"
                        }
                    },
                    raised: function() {
                        return Number(this.campaign.raised_amount)
                    },
                    offlineRaised: function() {
                        return Number(this.campaign.offline_raised_amount)
                    },
                    totalRaised: function() {
                        return this.raised + this.offlineRaised
                    },
                    target: function() {
                        return Number(this.campaign.target_amount)
                    },
                    progress: function() {
                        return Number(100 * this.totalRaised / this.target)
                    },
                    domainName: function() {
                        return baseDomain()
                    }
                }
            },
            Nt = Object(A.a)(Dt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("a", {
                    staticClass: "campaign-card",
                    attrs: {
                        href: e.organization ? "http://" + e.organization.username + "." + e.domainName + "/campaigns/" + e.campaign.slug : "/campaigns/" + e.campaign.slug
                    }
                }, [o("div", {
                    staticClass: "campaign-card__top"
                }, [o("div", {
                    staticClass: "campaign-card__bg",
                    style: "background-image: url(" + e.featured_image + ")"
                }), e._v(" "), e.featured_image ? o("img", {
                    staticClass: "campaign-card__img",
                    attrs: {
                        src: e.featured_image,
                        alt: e.campaign.name
                    }
                }) : e._e(), e._v(" "), e.hasAction ? o("div", {
                    staticClass: "campaign-card__top-overlay"
                }, [o("span", {
                    staticClass: "campaign-card__top-overlay-text",
                    domProps: {
                        textContent: e._s(e.STATUS[e.campaign.status])
                    }
                })]) : e._e()]), e._v(" "), o("div", {
                    staticClass: "campaign-card__details"
                }, [e.campaign.is_verified ? o("span", {
                    staticClass: "campaign-card__status text-secondary"
                }, [o("i", {
                    staticClass: "fas fa-check-circle campaign-card__status-icon"
                }), e._v(" "), o("span", {
                    domProps: {
                        textContent: e._s(e.$t("verified"))
                    }
                })]) : e._e(), e._v(" "), o("h4", {
                    staticClass: "campaign-card__title",
                    domProps: {
                        textContent: e._s(e.campaign.name)
                    }
                }), e._v(" "), o("p", {
                    staticClass: "campaign-card__description",
                    domProps: {
                        textContent: e._s(e.description)
                    }
                })]), e._v(" "), e.footer ? o("div", {
                    staticClass: "campaign-card__footer"
                }, [e.campaign.organization ? o("h5", {
                    staticClass: "campaign-card__fundraiser"
                }, [e._v("\n            " + e._s(e.$t("by")) + "\n            "), o("a", {
                    staticClass: "campaign-card__fundraiser-link",
                    attrs: {
                        href: e.organization ? "http://" + e.organization.username + "." + e.domainName : "/"
                    }
                }, [e._v("\n                " + e._s(e.organization ? e.organization.name : e.campaign.organization.name) + "\n            ")])]) : e._e(), e._v(" "), o("g-progress", {
                    attrs: {
                        progress: e.progress,
                        size: "slim",
                        color: "secondary"
                    }
                }), e._v(" "), o("p", {
                    staticClass: "campaign-card__amount"
                }, [o("strong", [e._v(e._s(e.$t("raised")) + " " + e._s(e.campaign.currency.symbol + e.campaign.raised_amount))]), e._v("\n            " + e._s(e.$t("of")) + " " + e._s(e.campaign.currency.symbol + e.campaign.target_amount) + "\n        ")])], 1) : e._e()])
            }), [], !1, null, null, null).exports,
            Lt = {
                props: {
                    title: {
                        type: String,
                        required: !1
                    },
                    disabled: {
                        type: Boolean,
                        required: !1
                    },
                    action: {
                        type: Function,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "button"
                    },
                    loading: {
                        type: Boolean,
                        required: !1
                    },
                    icon: {
                        type: String,
                        required: !1
                    },
                    isPro: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    proAlertTitle: {
                        type: String,
                        required: !1
                    },
                    proAlertMessage: {
                        type: String,
                        required: !1
                    },
                    proAlertIcon: {
                        type: String,
                        required: !1
                    },
                    proAlertBtnTitle: {
                        type: String,
                        required: !1
                    },
                    confirmButtonText: {
                        type: String,
                        required: !1
                    },
                    cancelButtonText: {
                        type: String,
                        required: !1
                    }
                },
                methods: {
                    onPress: function() {
                        return this.isPro ? this.$isPro(this.proAlertTitle, this.proAlertMessage, this.confirmButtonText, this.cancelButtonText, this.proAlertIcon) : this.action ? this.action() : void this.$emit("onPress")
                    }
                }
            },
            Ut = Object(A.a)(Lt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("button", {
                    staticClass: "btn btn-loader",
                    class: e.isPro ? "btn-pro" : "",
                    attrs: {
                        disabled: e.disabled,
                        type: e.type
                    },
                    on: {
                        click: e.onPress
                    }
                }, [e.loading ? o("span", {
                    staticClass: "spinner-border spinner-border--xs mr-2",
                    attrs: {
                        role: "status"
                    }
                }) : e._e(), e._v(" "), e.icon ? o("i", {
                    class: e.icon
                }) : e._e(), e._v(" "), e.icon && e.title ? o("span", {
                    staticClass: "pl-1 pr-1"
                }) : e._e(), e._v(" "), e.title ? o("span", {
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._e(), e._v(" "), e._t("default")], 2)
            }), [], !1, null, null, null).exports,
            Mt = {
                components: {},
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    header: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    body: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    closeButton: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    size: {
                        type: String,
                        required: !1,
                        default: "xs"
                    },
                    position: {
                        type: String,
                        required: !1,
                        default: "center-center"
                    },
                    contentClass: {
                        type: String,
                        required: !1
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    onSubmit: {
                        type: Function,
                        required: !1,
                        default: function() {}
                    },
                    raw: {
                        type: Function,
                        required: !1,
                        default: function() {}
                    }
                },
                data: function() {
                    return {}
                },
                methods: {
                    modalHide: function(e) {
                        this.$hideModal(e), this.$emit("after-hide")
                    }
                }
            },
            Bt = Object(A.a)(Mt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "g-modal",
                    attrs: {
                        id: e.id
                    }
                }, [o("div", {
                    staticClass: "g-modal__inner",
                    class: e.position
                }, [o("div", {
                    staticClass: "g-modal__overlay",
                    on: {
                        click: function(t) {
                            return e.modalHide(e.id)
                        }
                    }
                }), e._v(" "), o("div", {
                    staticClass: "g-modal__content",
                    class: "g-modal__content--" + e.size + " " + e.contentClass
                }, [e.closeButton ? o("button", {
                    staticClass: "g-modal__close-btn",
                    on: {
                        click: function(t) {
                            return e.modalHide(e.id)
                        }
                    }
                }, [o("img", {
                    staticClass: "g-modal__close-btn-icon",
                    attrs: {
                        src: "https://app.crowdfundly.io/icons/close/red.png",
                        alt: e.$t("close")
                    }
                })]) : e._e(), e._v(" "), e.body ? o("div", {
                    staticClass: "g-modal__body"
                }, [e.title ? o("h5", {
                    staticClass: "g-modal__title",
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._e(), e._v(" "), e._t("default")], 2) : e._t("default")], 2)])])
            }), [], !1, null, null, null).exports,
            Ft = {
                props: {
                    group: {
                        type: String,
                        required: !1,
                        default: "notify"
                    }
                },
                data: function() {
                    return {
                        icons: {
                            success: "fa-check-circle",
                            warning: "fa-exclamation-triangle",
                            info: "fa-info-circle",
                            alert: "fa-bell",
                            danger: "fa-exclamation-circle",
                            delete: "fa-trash"
                        }
                    }
                }
            },
            Kt = Object(A.a)(Ft, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("notifications", {
                    attrs: {
                        group: e.group
                    },
                    scopedSlots: e._u([{
                        key: "body",
                        fn: function(t) {
                            return [o("div", {
                                staticClass: "notify",
                                class: "notify--" + t.item.type
                            }, [o("i", {
                                staticClass: "notify__icon fas",
                                class: "notify__icon--" + t.item.type + " " + e.icons[t.item.type]
                            }), e._v(" "), o("div", {
                                staticClass: "notify__body"
                            }, [t.item.title ? o("h5", {
                                staticClass: "notify__title",
                                domProps: {
                                    textContent: e._s(t.item.title)
                                }
                            }) : e._e(), e._v(" "), t.item.text ? o("p", {
                                staticClass: "notify__text",
                                domProps: {
                                    innerHTML: e._s(t.item.text)
                                }
                            }) : e._e()]), e._v(" "), o("button", {
                                staticClass: "notify__close-btn",
                                class: "notify__close-btn--" + t.item.type,
                                on: {
                                    click: t.close
                                }
                            }, [o("img", {
                                staticClass: "notify__close-btn-icon",
                                attrs: {
                                    src: "https://app.crowdfundly.io/icons/close.svg",
                                    alt: "Close icon"
                                }
                            })])])]
                        }
                    }])
                })
            }), [], !1, null, null, null).exports,
            Yt = o(145),
            Gt = o.n(Yt),
            Vt = {
                props: {
                    images: {
                        required: !0,
                        type: Array
                    },
                    wrapperClass: {
                        required: !1,
                        type: String
                    },
                    imageClass: {
                        required: !1,
                        type: String
                    }
                },
                data: function() {
                    return {
                        selectedImage: null,
                        selectedIndex: null
                    }
                },
                methods: {
                    openLightBox: function(e) {
                        this.selectedIndex = e, this.selectedImage = this.images[e], this.$showModal("lightboxModal")
                    },
                    slideRight: function() {
                        this.selectedIndex + 1 === this.images.length ? this.selectedIndex = 0 : this.selectedIndex++, this.selectedImage = this.images[this.selectedIndex]
                    },
                    slideLeft: function() {
                        0 === this.selectedIndex ? this.selectedIndex = this.images.length - 1 : this.selectedIndex--, this.selectedImage = this.images[this.selectedIndex]
                    },
                    clearLightbox: function() {
                        console.log("paichi", this.selectedIndex)
                    }
                }
            },
            Wt = (o(359), Object(A.a)(Vt, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", [o("div", {
                    class: e.wrapperClass
                }, e._l(e.images, (function(image, i) {
                    return o("img", {
                        key: i,
                        class: e.imageClass,
                        attrs: {
                            src: image
                        },
                        on: {
                            click: function(t) {
                                return e.openLightBox(i)
                            }
                        }
                    })
                })), 0), e._v(" "), o("g-modal", {
                    staticClass: "lightbox-gallery",
                    attrs: {
                        id: "lightboxModal",
                        size: "md",
                        header: !1,
                        footer: !1
                    },
                    on: {
                        "after-hide": e.clearLightbox
                    }
                }, [o("div", {
                    staticClass: "lightbox-gallery__modal"
                }, [e.selectedImage ? o("img", {
                    staticClass: "lightbox-gallery__modal-image",
                    attrs: {
                        src: e.selectedImage
                    }
                }) : e._e(), e._v(" "), o("div", {
                    staticClass: "lightbox-gallery__modal-nav"
                }, [o("div", {
                    staticClass: "lightbox-gallery__modal-nav-btn",
                    on: {
                        click: e.slideLeft
                    }
                }, [o("i", {
                    staticClass: "fas fa-chevron-left lightbox-gallery__modal-nav-btn-icon"
                })]), e._v(" "), o("div", {
                    staticClass: "lightbox-gallery__modal-nav-btn",
                    on: {
                        click: e.slideRight
                    }
                }, [o("i", {
                    staticClass: "fas fa-chevron-right lightbox-gallery__modal-nav-btn-icon"
                })])])])])], 1)
            }), [], !1, null, "27029038", null).exports),
            Ht = {
                props: {
                    icon: {
                        type: String,
                        required: !1,
                        default: "https://app.crowdfundly.io/images/settings.svg"
                    },
                    iconColor: {
                        type: String,
                        required: !1
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    isLoading: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    }
                }
            },
            Zt = Object(A.a)(Ht, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("g-dropdown", {
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [e.isLoading ? o("mini-loader") : o("div", [o("img", {
                                staticStyle: {
                                    width: "35px",
                                    height: "35px"
                                },
                                attrs: {
                                    src: e.icon,
                                    alt: ""
                                }
                            }), e._v("\n                  " + e._s(e.title ? e.title : null) + "\n            ")])]
                        },
                        proxy: !0
                    }])
                }, [e._v(" "), e._t("default")], 2)
            }), [], !1, null, null, null).exports,
            Xt = {
                props: {
                    icon: {
                        type: String,
                        required: !1,
                        default: "fa-check-circle"
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "secondary"
                    }
                },
                methods: {
                    click: function() {
                        this.$emit("action")
                    }
                }
            },
            Jt = Object(A.a)(Xt, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("g-dropdown-item-button", {
                    class: "g-dropdown__item--" + this.type,
                    on: {
                        onPress: this.click
                    }
                }, [t("i", {
                    staticClass: "fas",
                    class: this.icon
                }), this._v("\n    " + this._s(this.title) + "\n")])
            }), [], !1, null, null, null).exports,
            Qt = (o(108), o(146)),
            ei = o.n(Qt),
            ti = {
                name: "image-viewer",
                props: {
                    src: {
                        require: !0
                    }
                },
                data: function() {
                    return {
                        isActive: !1
                    }
                },
                methods: {
                    showImageViewer: function() {
                        this.isActive = !this.isActive
                    },
                    hideImageViewer: function() {
                        this.isActive = !1
                    }
                }
            },
            ii = Object(A.a)(ti, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "image-viewer"
                }, [o("div", {
                    staticClass: "image-viewer__placeholder",
                    on: {
                        click: e.showImageViewer
                    }
                }, [o("img", {
                    staticClass: "image-viewer__placeholder-img",
                    attrs: {
                        src: e.src,
                        alt: e.$t("image")
                    }
                })]), e._v(" "), o("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.isActive ? o("div", {
                    staticClass: "g-modal g-modal--show"
                }, [o("div", {
                    staticClass: "g-modal__inner center-center"
                }, [o("div", {
                    staticClass: "g-modal__overlay",
                    on: {
                        click: e.hideImageViewer
                    }
                }), e._v(" "), o("div", {
                    staticClass: "g-modal__content g-modal__content--lg"
                }, [o("button", {
                    staticClass: "g-modal__close-btn",
                    on: {
                        click: e.hideImageViewer
                    }
                }, [o("img", {
                    staticClass: "g-modal__close-btn-icon",
                    attrs: {
                        src: "https://app.crowdfundly.io/icons/close/red.png",
                        alt: e.$t("close")
                    }
                })]), e._v(" "), o("div", {
                    staticClass: "g-modal__body"
                }, [o("div", {
                    staticClass: "image-viewer__inner"
                }, [o("img", {
                    staticClass: "image-viewer__img",
                    attrs: {
                        src: e.src,
                        alt: e.$t("image")
                    }
                })])])])])]) : e._e()])], 1)
            }), [], !1, null, null, null).exports,
            ai = (o(51), o(142));

        function oi(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var ni = {
                name: "language-dropdown",
                props: {
                    isPublic: {
                        type: Boolean,
                        required: !1,
                        defalut: !1
                    }
                },
                data: function() {
                    return {
                        selectedLangObject: {
                            name: "English",
                            code: "en",
                            flag: "https://app.crowdfundly.io/images/flag/america.svg"
                        },
                        langs: ai.a
                    }
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? oi(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : oi(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(U.b)(["selectedLanguage"]), {
                    availableLanguages: function() {
                        var e = this;
                        return this.langs.filter((function(t) {
                            return t.code !== e.selectedLangObject.code
                        }))
                    }
                }),
                mounted: function() {
                    var e = this;
                    if (this.selectedLanguage) {
                        var t = this.langs.find((function(t) {
                            return t.code == e.selectedLanguage
                        }));
                        if (t) return void(this.selectedLangObject = t);
                        this.selectedLangObject = {
                            name: "English",
                            code: "en",
                            flag: "https://app.crowdfundly.io/images/flag/america.svg"
                        }
                    }
                },
                methods: {
                    changeLang: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.prev = 0, t.selectedLangObject = e, o.next = 4, t.$store.dispatch("change_language", e.code);
                                    case 4:
                                        o.next = 10;
                                        break;
                                    case 6:
                                        return o.prev = 6, o.t0 = o.catch(0), o.next = 10, t.$store.dispatch("change_language", "en");
                                    case 10:
                                    case "end":
                                        return o.stop()
                                }
                            }), o, null, [
                                [0, 6]
                            ])
                        })))()
                    }
                }
            },
            ri = Object(A.a)(ni, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    class: e.isPublic ? "lang-dropdown lang-dropdown--public" : "lang-dropdown"
                }, [o("g-dropdown", {
                    attrs: {
                        caret: !0
                    },
                    scopedSlots: e._u([{
                        key: "button",
                        fn: function() {
                            return [o("div", {
                                staticClass: "lang-dropdown__btn"
                            }, [o("img", {
                                staticClass: "lang-dropdown__btn-flag",
                                attrs: {
                                    src: e.selectedLangObject.flag,
                                    alt: "Flag"
                                }
                            }), e._v(" "), o("span", {
                                staticClass: "lang-dropdown__btn-title",
                                domProps: {
                                    textContent: e._s(e.selectedLangObject.name)
                                }
                            })])]
                        },
                        proxy: !0
                    }])
                }, [e._v(" "), e._l(e.langs, (function(t, i) {
                    return o("g-dropdown-item-button", {
                        key: i,
                        on: {
                            onPress: function(o) {
                                return e.changeLang(t)
                            }
                        }
                    }, [o("div", {
                        staticClass: "lang-dropdown__item"
                    }, [o("img", {
                        staticClass: "lang-dropdown__item-flag",
                        attrs: {
                            src: t.flag,
                            alt: "Flag"
                        }
                    }), e._v(" "), o("span", {
                        staticClass: "lang-dropdown__item-title",
                        domProps: {
                            textContent: e._s(t.name)
                        }
                    })])])
                }))], 2)], 1)
            }), [], !1, null, null, null).exports,
            di = {
                props: {
                    containerClass: {
                        require: !1
                    },
                    headerClass: {
                        require: !1
                    },
                    bodyClass: {
                        require: !1
                    },
                    titleClass: {
                        require: !1
                    },
                    btnClass: {
                        require: !1
                    }
                },
                mounted: function() {
                    this.filterButtonClicked()
                },
                methods: {
                    toggleFiltersSM: function() {
                        document.querySelector(".filter").classList.toggle("filter--active")
                    },
                    filterButtonClicked: function() {
                        var e = this,
                            t = document.querySelectorAll(".filter__btn"),
                            o = document.querySelectorAll(".filter__search-btn"),
                            n = window.innerWidth;
                        t && n < 768 && t.forEach((function(t, i) {
                            return t.addEventListener("click", e.toggleFiltersSM, !1)
                        })), o && n < 768 && o.forEach((function(t, i) {
                            return t.addEventListener("click", e.toggleFiltersSM, !1)
                        }))
                    }
                }
            },
            filter = Object(A.a)(di, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter",
                    class: e.containerClass
                }, [o("div", {
                    staticClass: "filter__overlay",
                    on: {
                        click: e.toggleFiltersSM
                    }
                }), e._v(" "), o("div", {
                    staticClass: "filter__header",
                    class: e.headerClass
                }, [o("div", {
                    staticClass: "filter__header-title",
                    class: e.titleClass,
                    domProps: {
                        textContent: e._s(e.$t("filters"))
                    }
                }), e._v(" "), o("div", {
                    staticClass: "btn btn-sm btn-primary filter__header-btn",
                    class: e.btnClass,
                    on: {
                        click: e.toggleFiltersSM
                    }
                }, [o("img", {
                    staticClass: "filter__header-btn-icon",
                    attrs: {
                        src: "https://app.crowdfundly.io/icons/filter-white.svg",
                        alt: e.$t("icon")
                    }
                })])]), e._v(" "), o("div", {
                    staticClass: "filter__inner",
                    class: e.bodyClass
                }, [e._t("default")], 2)])
            }), [], !1, null, null, null).exports,
            pi = o(47),
            si = o(42),
            ci = o.n(si),
            mi = (o(84), {
                components: {
                    VueCtkDateTimePicker: ci.a
                },
                data: function() {
                    return {
                        date: null
                    }
                },
                watch: {
                    date: function(e) {
                        e.start && e.end && this.$emit("data", e)
                    }
                }
            }),
            gi = (o(365), Object(A.a)(mi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("div", {
                    staticClass: "date-range"
                }, [o("VueCtkDateTimePicker", {
                    attrs: {
                        range: "",
                        format: "DD-MM-YYYY",
                        formatted: "DD-MM-YYYY",
                        locale: "en",
                        "no-label": "",
                        color: "#5777f3",
                        "button-color": "#5777f3",
                        label: e.$t("select_a_date_range")
                    },
                    model: {
                        value: e.date,
                        callback: function(t) {
                            e.date = t
                        },
                        expression: "date"
                    }
                })], 1)])
            }), [], !1, null, null, null).exports),
            bi = {
                props: {
                    title: {
                        type: String,
                        required: !1
                    },
                    buttonIcon: {
                        type: String,
                        required: !1,
                        default: "fas fa-filter"
                    },
                    dropdownTitle: {
                        type: String,
                        required: !1
                    },
                    header: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    options: {
                        type: Array,
                        required: !1,
                        default: []
                    },
                    name: {
                        type: String,
                        required: !1,
                        default: "radio"
                    },
                    displayColumn: {
                        required: !1
                    },
                    noClearButton: {
                        type: Boolean,
                        required: !1
                    },
                    noDoneButton: {
                        type: Boolean,
                        required: !1
                    }
                },
                data: function() {
                    return {
                        selected: null
                    }
                },
                mounted: function() {
                    this.selected = this.$attrs.value
                },
                updated: function() {
                    this.selected = this.$attrs.value
                },
                methods: {
                    selectedOption: function(e) {
                        this.$emit("input", e.target.value)
                    },
                    emitData: function() {
                        this.$emit("data", this.selected)
                    },
                    clearData: function() {
                        this.selected = null, this.$emit("input", this.selected)
                    },
                    optionValue: function(e) {
                        return e.toLowerCase().replace(/ /g, "_")
                    },
                    display: function(option) {
                        if (!this.displayColumn) return option;
                        if (this.displayColumn) {
                            if (this.isFunction(this.displayColumn)) return this.displayColumn(option);
                            if (this.isString(this.displayColumn)) return option[this.displayColumn]
                        }
                        return ""
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isFunction: function(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    }
                }
            },
            _i = Object(A.a)(bi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("div", {
                    staticClass: "filter-dropdown"
                }, [o("b-dropdown", {
                    attrs: {
                        id: "dropdown-right",
                        right: "",
                        text: "Right align",
                        variant: " filter-dropdown__btn",
                        "no-caret": !0
                    },
                    scopedSlots: e._u([{
                        key: "button-content",
                        fn: function() {
                            return [o("i", {
                                staticClass: "filter-dropdown__btn-icon",
                                class: e.buttonIcon
                            }), e._v("\n                " + e._s(e.title ? e.title : e.$t("filter")) + "\n            ")]
                        },
                        proxy: !0
                    }])
                }, [e._v(" "), o("div", {
                    staticClass: "filter-dropdown__content"
                }, [e.header ? o("div", {
                    staticClass: "filter-dropdown__content-header"
                }, [e.noClearButton ? e._e() : o("button", {
                    staticClass: "btn btn--clear",
                    attrs: {
                        type: "button"
                    },
                    domProps: {
                        textContent: e._s(e.$t("clear"))
                    },
                    on: {
                        click: e.clearData
                    }
                }), e._v(" "), o("span", {
                    staticClass: "filter-dropdown__content-header-title",
                    domProps: {
                        textContent: e._s(e.dropdownTitle ? e.dropdownTitle : e.title)
                    }
                }), e._v(" "), e.noDoneButton ? e._e() : o("button", {
                    staticClass: "btn btn--done",
                    attrs: {
                        type: "button"
                    },
                    domProps: {
                        textContent: e._s(e.$t("done"))
                    },
                    on: {
                        click: e.emitData
                    }
                })]) : e._e(), e._v(" "), e.options.length ? o("ul", {
                    staticClass: "filter-dropdown__menu"
                }, e._l(e.options, (function(option, i) {
                    return o("li", {
                        key: i,
                        staticClass: "filter-dropdown__menu-item"
                    }, [o("div", {
                        staticClass: "radio radio--secondary d-inline-flex"
                    }, [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.selected,
                            expression: "selected"
                        }],
                        staticClass: "radio__input",
                        class: e.selected === e.optionValue(option) ? "radio__input--checked" : "",
                        attrs: {
                            name: e.name,
                            type: "radio",
                            id: "radio-" + i
                        },
                        domProps: {
                            value: e.optionValue(option),
                            checked: e._q(e.selected, e.optionValue(option))
                        },
                        on: {
                            change: [function(t) {
                                e.selected = e.optionValue(option)
                            }, e.selectedOption]
                        }
                    }), e._v(" "), o("label", {
                        staticClass: "radio__label text-nowrap",
                        attrs: {
                            for: "radio-" + i
                        },
                        domProps: {
                            textContent: e._s(e.display(option))
                        }
                    })])])
                })), 0) : e._e()])])], 1)])
            }), [], !1, null, null, null).exports,
            ui = {
                prop: ["value"],
                props: {
                    styles: {
                        required: !1,
                        type: Object
                    },
                    disabled: {
                        required: !1,
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        content: this.value
                    }
                },
                computed: {
                    hasStyleConfig: function() {
                        return !!this.styles
                    },
                    stylesConf: function() {
                        return this.hasStyleConfig ? this.styles : {}
                    },
                    buttonDisabledClass: function() {
                        return this.stylesConf.button_disabled_class || ""
                    },
                    inputDisabledClass: function() {
                        return this.stylesConf.input_disabled_class || ""
                    }
                },
                methods: {
                    triggerSearch: function() {
                        this.$emit("button-clicked", this.content)
                    },
                    typing: function(e) {
                        this.$emit("input", this.content)
                    },
                    clearSearch: function() {
                        this.content = "", this.$emit("reset", this.content)
                    }
                }
            },
            hi = Object(A.a)(ui, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("div", {
                    staticClass: "filter__search"
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.content,
                        expression: "content"
                    }],
                    staticClass: "filter__search-input",
                    class: e.inputDisabledClass,
                    attrs: {
                        type: "text",
                        placeholder: e.$t("search_here") + "..."
                    },
                    domProps: {
                        value: e.content
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.content = t.target.value)
                        }, e.typing],
                        keypress: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.triggerSearch(t)
                        }
                    }
                }), e._v(" "), o("button", {
                    staticClass: "filter__search-btn filter__search-btn--clear",
                    class: e.content ? "show" : "",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: e.clearSearch
                    }
                }, [o("img", {
                    staticClass: "filter__search-btn-icon",
                    attrs: {
                        src: "https://app.crowdfundly.io/icons/close/red.png",
                        alt: e.$t("remove")
                    }
                })]), e._v(" "), o("button", {
                    staticClass: "filter__search-btn",
                    class: e.buttonDisabledClass,
                    attrs: {
                        disabled: e.disabled,
                        type: "button"
                    },
                    on: {
                        click: e.triggerSearch
                    }
                }, [o("i", {
                    staticClass: "fas fa-search"
                })])])])
            }), [], !1, null, null, null).exports,
            xi = {
                props: {
                    displayColumn: {
                        required: !1
                    },
                    options: {
                        type: Object,
                        required: !1,
                        default: []
                    },
                    placeholder: {
                        type: String,
                        required: !1
                    },
                    resetValue: {
                        type: Boolean,
                        required: !1
                    }
                },
                data: function() {
                    return {
                        selected: this.placeholder
                    }
                },
                created: function() {},
                updated: function() {
                    this.resetValue && (this.selected = this.placeholder)
                },
                methods: {
                    emitSelected: function(e) {
                        this.$emit("selected-item", this.selected)
                    },
                    display: function(option) {
                        if (!this.displayColumn) return option;
                        if (this.displayColumn) {
                            if (this.isFunction(this.displayColumn)) return this.displayColumn(option);
                            if (this.isString(this.displayColumn)) return option[this.displayColumn]
                        }
                        return ""
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isFunction: function(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    }
                }
            },
            fi = Object(A.a)(xi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selected,
                        expression: "selected"
                    }],
                    staticClass: "filter__select",
                    on: {
                        change: [function(t) {
                            var o = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                return "_value" in e ? e._value : e.value
                            }));
                            e.selected = t.target.multiple ? o : o[0]
                        }, e.emitSelected]
                    }
                }, [o("option", {
                    attrs: {
                        disabled: "",
                        selected: ""
                    },
                    domProps: {
                        textContent: e._s(e.placeholder ? e.placeholder : e.$t("select_an_option"))
                    }
                }), e._v(" "), e._l(e.options, (function(option, i) {
                    return o("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [e._v("\n            " + e._s(option) + "\n        ")])
                }))], 2)])
            }), [], !1, null, null, null).exports,
            wi = o(245),
            yi = {
                props: {
                    displayColumn: {
                        required: !1
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    options: {
                        type: Array,
                        required: !1,
                        default: []
                    },
                    model: {
                        required: !1
                    }
                },
                data: function() {
                    return {
                        selected: 10
                    }
                },
                methods: {
                    emitSelected: function(e) {
                        this.$emit("selected-item", this.selected)
                    }
                }
            },
            ki = Object(A.a)(yi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "filter__item"
                }, [o("div", {
                    staticClass: "filter__per-page"
                }, [o("span", {
                    staticClass: "filter__per-page-label",
                    domProps: {
                        textContent: e._s(e.title ? e.title : e.$t("per_page"))
                    }
                }), e._v(" "), o("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selected,
                        expression: "selected"
                    }],
                    staticClass: "filter__per-page-select",
                    on: {
                        change: [function(t) {
                            var o = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                return "_value" in e ? e._value : e.value
                            }));
                            e.selected = t.target.multiple ? o : o[0]
                        }, e.emitSelected]
                    }
                }, e._l(e.options, (function(option, i) {
                    return o("option", {
                        key: i,
                        domProps: {
                            value: option,
                            selected: e.options[e.model],
                            textContent: e._s(option)
                        }
                    })
                })), 0)])])
            }), [], !1, null, null, null).exports,
            vi = {
                props: {
                    position: {
                        type: String,
                        required: !1,
                        default: "bottom-right"
                    },
                    title: {
                        type: String,
                        required: !1,
                        default: "Fixed Button"
                    },
                    disabled: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    }
                },
                methods: {
                    onPress: function() {
                        this.$emit("onPress")
                    }
                }
            },
            zi = Object(A.a)(vi, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("button", {
                    staticClass: "btn fixed-btn",
                    class: "fixed-btn--" + this.position,
                    attrs: {
                        disabled: this.disabled
                    },
                    domProps: {
                        textContent: this._s(this.title)
                    },
                    on: {
                        click: this.onPress
                    }
                }, [this._t("default")], 2)
            }), [], !1, null, null, null).exports,
            Ci = o(237),
            Si = o.n(Ci),
            ji = (o(372), o(40)),
            Ei = {
                components: {
                    Button: pi.a,
                    VueCropper: Si.a
                },
                props: {
                    id: {
                        type: String,
                        require: !1,
                        default: "cropper"
                    },
                    image: {
                        type: File,
                        require: !0
                    },
                    aspectRatio: {
                        require: !1
                    },
                    maxSize: {
                        type: Number,
                        require: !1,
                        default: ji.a
                    },
                    imageHeight: {
                        default: null
                    },
                    imageWidth: {
                        default: null
                    }
                },
                data: function() {
                    return {
                        DEFAULT_SIZE: ji.a,
                        isLoading: !0,
                        imgSrc: null
                    }
                },
                watch: {
                    image: function(e) {
                        var t = this;
                        if (this.isLoading = !0, "function" != typeof FileReader || !e) return !0;
                        var o = new FileReader;
                        o.onload = function(e) {
                            t.imgSrc = e.target.result
                        }, o.readAsDataURL(e), this.isLoading = !1
                    }
                },
                computed: {
                    imageType: function() {
                        return "image/png" == this.image.type ? "image/png" : "image/jpeg"
                    }
                },
                methods: {
                    zoom: function(e) {
                        this.$refs[this.id].relativeZoom(e)
                    },
                    move: function(e, t) {
                        this.$refs[this.id].move(e, t)
                    },
                    rotate: function(e) {
                        this.$refs[this.id].rotate(e)
                    },
                    flipX: function() {
                        var e = this.$refs.flipX,
                            t = e.getAttribute("data-scale");
                        t = t ? -t : -1, this.$refs[this.id].scaleX(t), e.setAttribute("data-scale", t)
                    },
                    flipY: function() {
                        var e = this.$refs.flipY,
                            t = e.getAttribute("data-scale");
                        t = t ? -t : -1, this.$refs[this.id].scaleY(t), e.setAttribute("data-scale", t)
                    },
                    byteToMB: function(e) {
                        return Number(e / 1024 / 1024).toFixed(0)
                    },
                    byteToKb: function(e) {
                        return Number(e / 1024).toFixed(0)
                    },
                    cropImage: function() {
                        var e = this;
                        (this.imageHeight && this.imageWidth ? this.$refs[this.id].getCroppedCanvas({
                            width: this.imageWidth,
                            height: this.imageHeight
                        }) : this.$refs[this.id].getCroppedCanvas()).toBlob((function(t) {
                            if (t.size <= e.maxSize) return e.$emit("cropped", t), e.$hideImageCropper(e.id), void(e.imgSrc = null);
                            e.$warning(null, e.$t("image_size_is_too_large__") + " " + e.byteToKb(e.maxSize) + " Kb.")
                        }), this.imageType)
                    },
                    reset: function() {
                        this.$refs[this.id].reset()
                    },
                    closeCropper: function() {
                        this.$hideImageCropper(this.id), this.imgSrc = null
                    }
                }
            },
            Ai = Object(A.a)(Ei, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("g-modal", {
                    attrs: {
                        id: e.id,
                        size: "md",
                        position: "center-center",
                        "close-button": !0
                    },
                    on: {
                        "after-hide": e.closeCropper
                    }
                }, [e.isLoading ? o("div", {
                    staticClass: "main-loader"
                }, [o("loader")], 1) : e._e(), e._v(" "), !e.isLoading && e.imgSrc ? o("div", {
                    staticClass: "cropper"
                }, [o("div", {
                    staticClass: "cropper__inner"
                }, [o("vue-cropper", {
                    ref: e.id,
                    attrs: {
                        "aspect-ratio": e.aspectRatio,
                        src: e.imgSrc,
                        preview: ".preview"
                    }
                })], 1), e._v(" "), o("div", {
                    staticClass: "cropper__footer"
                }, [o("div", {
                    staticClass: "cropper__actions cropper__actions--left"
                }, [o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--zoomin",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.zoom(.1)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-search-plus"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--zoomout",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.zoom(-.1)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-search-minus"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--moveleft",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.move(-5, 0)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrow-left"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--moveright",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.move(5, 0)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrow-right"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--moveup",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.move(0, -5)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrow-up"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--movedown",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.move(0, 5)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrow-down"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--rotate-",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.rotate(-45)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-undo-alt"
                })]), e._v(" "), o("button", {
                    staticClass: "cropper__actions-btn cropper__actions-btn--rotate+",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.rotate(45)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-redo-alt"
                })]), e._v(" "), o("button", {
                    ref: "flipX",
                    staticClass: "cropper__actions-btn cropper__actions-btn--flipx",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.flipX(t)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrows-alt-h"
                })]), e._v(" "), o("button", {
                    ref: "flipY",
                    staticClass: "cropper__actions-btn cropper__actions-btn--flipy",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.flipY(t)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-arrows-alt-v"
                })])]), e._v(" "), o("div", {
                    staticClass: "cropper__actions cropper__actions--right"
                }, [o("button", {
                    staticClass: "btn btn-danger mr-3",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.reset(t)
                        }
                    }
                }, [e._v("\n                    Reset\n                ")]), e._v(" "), o("button", {
                    staticClass: "btn btn-primary",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.cropImage(t)
                        }
                    }
                }, [o("i", {
                    staticClass: "fas fa-crop-alt"
                }), e._v("\n                    Crop\n                ")])])])]) : e._e()])
            }), [], !1, null, null, null).exports,
            Oi = {
                name: "g-image-picker",
                props: {
                    id: {
                        type: String,
                        require: !1,
                        default: "cropper"
                    },
                    image: {
                        type: String,
                        require: !0,
                        default: ""
                    },
                    placeholderText: {
                        type: String,
                        require: !1,
                        default: "720 x 525"
                    },
                    buttonText: {
                        type: String,
                        require: !1
                    },
                    accept: {
                        type: String,
                        require: !1,
                        default: "image/x-png, image/jpg, image/jpeg, image/gif"
                    },
                    size: {
                        type: String,
                        require: !1
                    },
                    maxSize: {
                        type: Number,
                        require: !1,
                        default: ji.a
                    },
                    imageType: {
                        type: String,
                        require: !1,
                        default: "image/jpeg"
                    },
                    loading: {
                        type: Boolean,
                        require: !1,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        require: !1,
                        default: !1
                    },
                    aspectRatio: {
                        require: !1
                    },
                    imageHeight: {
                        default: null
                    },
                    imageWidth: {
                        default: null
                    }
                },
                data: function() {
                    return {
                        DEFAULT_SIZE: ji.a,
                        newImage: "",
                        cropperImage: null,
                        isLoading: !1,
                        selectedImageType: "image/jpeg"
                    }
                },
                computed: {
                    getImage: function() {
                        return this.newImage ? URL.createObjectURL(this.newImage) : this.image
                    }
                },
                methods: {
                    removeImage: function() {
                        this.newImage = null, this.isLoading = !0, this.$emit("remove"), this.isLoading = !1
                    },
                    onSelectImage: function(e) {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function o() {
                            var image;
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (image = e.target.files[0], e.target.value = "", !t.isValidImage(image)) {
                                            o.next = 17;
                                            break
                                        }
                                        if (t.cropperImage = image, !("image/gif" === image.type)) {
                                            o.next = 15;
                                            break
                                        }
                                        return o.next = 8, t.$confirmResizeGif();
                                    case 8:
                                        if (!o.sent) {
                                            o.next = 12;
                                            break
                                        }
                                        t.$showImageCropper(t.id), o.next = 14;
                                        break;
                                    case 12:
                                        return o.next = 14, t.setCroppedImage(image);
                                    case 14:
                                        return o.abrupt("return");
                                    case 15:
                                        return t.$showImageCropper(t.id), o.abrupt("return");
                                    case 17:
                                        return t.$error(null, t.$t("invalid_file")), o.abrupt("return");
                                    case 19:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    setCroppedImage: function(image) {
                        this.$isOversizeImage(this.maxSize, image.size) || (this.isLoading = !0, this.newImage = image, this.$emit("image", image), this.cropperImage = null, this.isLoading = !1)
                    },
                    isValidImage: function(img) {
                        return img && img instanceof File
                    }
                }
            },
            Pi = Object(A.a)(Oi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "g-image-picker",
                    class: "g-image-picker--" + e.size
                }, [e.loading || e.isLoading ? o("div", {
                    staticClass: "g-image-picker__inner"
                }, [o("mini-loader")], 1) : o("div", {
                    staticClass: "g-image-picker__inner"
                }, [e.getImage ? o("img", {
                    staticClass: "g-image-picker__preview",
                    attrs: {
                        src: e.getImage,
                        alt: "Image"
                    }
                }) : o("div", {
                    staticClass: "g-image-picker__placeholder"
                }, [o("h4", {
                    staticClass: "g-image-picker__placeholder-text",
                    domProps: {
                        textContent: e._s(e.placeholderText)
                    }
                }), e._v(" "), o("label", {
                    staticClass: "g-image-picker__btn",
                    attrs: {
                        for: e.id
                    }
                }, [e._v("\n                " + e._s(e.buttonText ? e.buttonText : e.$t("choose_image")) + "\n                "), o("input", {
                    ref: e.id,
                    staticClass: "g-image-picker__input",
                    attrs: {
                        type: "file",
                        id: e.id,
                        accept: e.accept
                    },
                    on: {
                        change: function(t) {
                            return e.onSelectImage(t)
                        }
                    }
                })])]), e._v(" "), e.getImage ? o("button", {
                    staticClass: "g-image-picker__remove",
                    attrs: {
                        disabled: e.disabled,
                        type: "button",
                        tabindex: "0"
                    },
                    on: {
                        click: e.removeImage
                    }
                }, [o("i", {
                    staticClass: "fas fa-times"
                })]) : e._e()]), e._v(" "), o("image-cropper", {
                    attrs: {
                        id: e.id,
                        image: e.cropperImage,
                        "aspect-ratio": e.aspectRatio,
                        imageHeight: e.imageHeight,
                        imageWidth: e.imageWidth,
                        maxSize: e.maxSize,
                        imageType: e.selectedImageType
                    },
                    on: {
                        cropped: e.setCroppedImage
                    }
                })], 1)
            }), [], !1, null, null, null).exports,
            Ti = o(20),
            Ii = (o(106), new l.a({
                name: "jl-confirm-dialog"
            })),
            Ri = {
                name: "VueConfirmDialog",
                data: function() {
                    return {
                        dialog: {
                            title: "",
                            message: "",
                            button: {}
                        },
                        params: {}
                    }
                },
                methods: {
                    resetState: function() {
                        this.dialog = {
                            title: "",
                            message: "",
                            button: {},
                            callback: function() {}
                        }
                    },
                    handleClickButton: function(e) {
                        this.$hideModal("confirm-alert"), this.params.callback && this.params.callback(e)
                    },
                    open: function(e) {
                        var t = this;
                        this.resetState(), this.params = e, this.$showModal("confirm-alert"), Object.entries(e).forEach((function(param) {
                            Object(Ti.a)(param[1]) == Object(Ti.a)(t.dialog[param[0]]) && (t.dialog[param[0]] = param[1])
                        }))
                    },
                    openModal: function(e) {
                        return this.$hideModal("confirm-alert"), this.handleClickButton(!0), this.$showModal(e)
                    }
                },
                mounted: function() {
                    var e = this;
                    document && (Ii.$on("open", this.open), Ii.$on("close", (function() {
                        e.$hideModal("confirm-alert")
                    })))
                }
            },
            $i = Object(A.a)(Ri, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", [o("g-modal", {
                    attrs: {
                        id: "confirm-alert",
                        size: "xs",
                        position: "center-center",
                        footer: !1,
                        "close-button": !1
                    }
                }, [o("div", {
                    class: "confirm-alert confirm-alert--success"
                }, [o("div", {
                    staticClass: "confirm-alert__inner"
                }, [o("div", {
                    staticClass: "confirm-alert__header text-center"
                }, [o("div", {
                    staticClass: "confirm-alert__header-icon bg-success"
                }, [o("i", {
                    staticClass: "fas fa-check success confirm-alert__header-icon-text"
                })])]), e._v(" "), o("div", {
                    staticClass: "confirm-alert__content text-center"
                }, [e.dialog.title ? o("h4", {
                    staticClass: "confirm-alert__title",
                    domProps: {
                        textContent: e._s(e.dialog.title)
                    }
                }) : e._e(), e._v(" "), e.dialog.message ? o("p", {
                    staticClass: "confirm-alert__description",
                    domProps: {
                        textContent: e._s(e.dialog.message)
                    }
                }) : e._e()]), e._v(" "), o("div", {
                    staticClass: "confirm-alert__footer text-center"
                }, [e.dialog.button.modal ? o("button", {
                    class: "confirm-alert__confirmed btn btn-sm btn-info",
                    domProps: {
                        textContent: e._s(e.dialog.button.modal.title)
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.openModal(e.dialog.button.modal.id)
                        }
                    }
                }) : e._e(), e._v(" "), e.dialog.button.yes ? o("button", {
                    class: "confirm-alert__confirmed btn btn-sm btn-success",
                    domProps: {
                        textContent: e._s(e.dialog.button.yes)
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.handleClickButton(!0)
                        }
                    }
                }) : e._e(), e._v(" "), e.dialog.button.no ? o("span", {
                    staticClass: "confirm-alert__cancel",
                    domProps: {
                        textContent: e._s(e.dialog.button.no)
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.handleClickButton(!1)
                        }
                    }
                }) : e._e()])])])])], 1)
            }), [], !1, null, null, null).exports,
            qi = {
                install: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.installed) {
                        this.installed = !0, this.params = t, e.component(t.componentName || "jl-confirm-dialog", $i);
                        var o = function(e) {
                            if ("object" != Object(Ti.a)(e) || Array.isArray(e)) {
                                var t = Object(Ti.a)(e);
                                throw Array.isArray(e) && (t = "array"), new Error("Options type must be an object. Caught: ".concat(t, ". Expected: object"))
                            }
                            if ("object" === Object(Ti.a)(e)) {
                                if (e.hasOwnProperty("callback") && "function" != typeof e.callback) {
                                    var o = Object(Ti.a)(e.callback);
                                    throw new Error("Callback type must be an function. Caught: ".concat(o, ". Expected: function"))
                                }
                                Ii.$emit("open", e)
                            }
                        };
                        o.close = function() {
                            Ii.$emit("close")
                        }, e.prototype.$jlconfirm = o, e.$jlconfirm = o
                    }
                }
            },
            Di = {
                name: "a-link",
                props: {
                    slug: {
                        type: String,
                        require: !1
                    },
                    orgName: {
                        type: String,
                        require: !1
                    },
                    status: {
                        require: !1
                    },
                    title: {
                        type: String,
                        require: !1
                    },
                    disabled: {
                        type: Boolean,
                        require: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        STATUS: qt.STATUS
                    }
                },
                computed: {
                    link: function() {
                        return "published" == this.STATUS[this.status] ? "http://" + this.orgName + "." + baseDomain() + "/campaigns/" + this.slug : "http://app." + baseDomain() + "/campaigns/" + this.slug
                    }
                }
            },
            Ni = Object(A.a)(Di, (function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("a", {
                    staticClass: "a-link",
                    class: e.disabled ? "disabled" : "",
                    attrs: {
                        href: e.link,
                        disabled: e.disabled
                    }
                }, [e._v("\n    " + e._s(e.title ? e.title : "") + "\n    "), e._t("default")], 2)
            }), [], !1, null, null, null).exports,
            Li = {
                name: "g-video-player",
                props: {
                    id: {
                        type: String,
                        required: !1,
                        default: "v-player"
                    },
                    src: {
                        required: !0
                    },
                    allow: {
                        required: !1,
                        type: String,
                        default: "clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    },
                    allowFullscreen: {
                        required: !1,
                        type: Boolean,
                        default: !0
                    },
                    containerStyles: {
                        required: !1,
                        type: String
                    },
                    playerStyles: {
                        required: !1,
                        type: String
                    },
                    autoplay: {
                        required: !1,
                        type: Boolean,
                        default: !1
                    },
                    loop: {
                        required: !1,
                        type: Boolean,
                        default: !1
                    },
                    muted: {
                        required: !1,
                        type: Boolean,
                        default: !1
                    },
                    poster: {
                        required: !1,
                        type: String,
                        default: null
                    },
                    preload: {
                        required: !1,
                        type: String,
                        default: "auto"
                    }
                },
                data: function() {
                    return {
                        isValidUrl: !0,
                        urlType: "iframe"
                    }
                },
                methods: {
                    getVideoUrl: function(e) {
                        if (!e) return null;
                        var t = e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
                        if (t) return this.urlType = "iframe", "https://www.youtube.com/embed/" + t[1];
                        var o = e.match(/(?:https?:\/\/(?:www\.)?)?vimeo.com\/(?:channels\/|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
                        return o ? (this.urlType = "iframe", "https://player.vimeo.com/video/" + o[3]) : this.isValidVideoUrl(e)
                    },
                    isValidVideoUrl: function(e) {
                        var t = [".mp4", ".ogg", ".webm"];
                        for (var i in t)
                            if (e.includes(t[i])) return this.urlType = "video", e;
                        return this.isValidUrl = !1, e
                    }
                }
            },
            Ui = (o(374), Object(A.a)(Li, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "v-player",
                    class: e.containerStyles,
                    attrs: {
                        id: e.id
                    }
                }, [e.isValidUrl && "iframe" == e.urlType ? o("iframe", {
                    staticClass: "v-player__iframe",
                    class: e.playerStyles,
                    attrs: {
                        src: e.getVideoUrl(e.src),
                        allow: e.allow,
                        allowfullscreen: e.allowFullscreen,
                        id: e.id + "-iframe"
                    }
                }) : e._e(), e._v(" "), e.isValidUrl && "video" == e.urlType ? o("video", {
                    staticClass: "v-player__video",
                    attrs: {
                        controls: "",
                        autoplay: e.autoplay,
                        loop: e.loop,
                        poster: e.poster,
                        preload: e.preload,
                        name: "media"
                    },
                    domProps: {
                        muted: e.muted
                    }
                }, [o("source", {
                    attrs: {
                        src: e.getVideoUrl(e.src)
                    }
                })]) : e._e(), e._v(" "), e.isValidUrl ? e._e() : o("div", {
                    staticClass: "v-player__content"
                }, [o("strong", {
                    staticClass: "v-player__content-strong"
                }, [e._v("Sorry,")]), e._v(" "), o("p", {
                    staticClass: "v-player__content-text"
                }, [e._v("The given video URL is not valid or unsupported.")]), e._v(" "), o("p", {
                    staticClass: "v-player__content-link"
                }, [e._v("(" + e._s(e.getVideoUrl(e.src)) + ")")])])])
            }), [], !1, null, "5c363c4c", null).exports),
            Mi = o(238),
            Bi = o.n(Mi),
            Fi = (o(376), {
                name: "inline-documentation",
                props: {
                    trigger: {
                        type: String,
                        require: !1,
                        default: "clickToToggle"
                    },
                    placement: {
                        type: String,
                        require: !1,
                        default: "bottom"
                    },
                    modifiers: {
                        type: Object,
                        require: !1,
                        default: function() {
                            return {
                                offset: {
                                    offset: "0,5px"
                                }
                            }
                        }
                    },
                    icon: {
                        type: String,
                        require: !1,
                        default: "fas fa-question-circle"
                    },
                    title: {
                        type: String,
                        require: !1
                    },
                    message: {
                        type: String,
                        require: !1
                    },
                    containerClass: {
                        type: String,
                        require: !1
                    },
                    titleClass: {
                        type: String,
                        require: !1
                    },
                    btnClass: {
                        type: String,
                        require: !1
                    }
                },
                components: {
                    Popper: Bi.a
                },
                computed: {
                    setOptions: function() {
                        return {
                            placement: this.placement,
                            modifiers: this.modifiers
                        }
                    }
                }
            }),
            Ki = Object(A.a)(Fi, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "inline-documentation"
                }, [o("popper", {
                    attrs: {
                        trigger: e.trigger,
                        options: e.setOptions
                    }
                }, [o("div", {
                    staticClass: "popper inline-documentation__inner",
                    class: e.containerClass
                }, [e.title ? o("h5", {
                    staticClass: "inline-documentation__title",
                    class: e.titleClass,
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._e(), e._v("\n            " + e._s(e.message) + "\n            "), e._t("default")], 2), e._v(" "), o("button", {
                    staticClass: "inline-documentation__toggle",
                    class: e.btnClass,
                    attrs: {
                        slot: "reference",
                        type: "button"
                    },
                    slot: "reference"
                }, [o("i", {
                    staticClass: "inline-documentation__toggle-icon",
                    class: e.icon
                })])])], 1)
            }), [], !1, null, null, null).exports;
        l.a.component("g-section", ot), l.a.component("page-header", nt.a), l.a.component("loader", st), l.a.component("mini-loader", ct), l.a.component("g-dropdown", gt), l.a.component("g-dropdown-item", _t), l.a.component("g-dropdown-item-button", ht), l.a.component("section-placeholder", ft), l.a.use(vt.a), l.a.use(qi), l.a.component("form-errors", yt), l.a.component("g-progress", Ct), l.a.component("form-error-box", St.a), l.a.component("g-select-dropdown", Et), l.a.component("confirm-alert", Ot), l.a.component("jl-editor", Tt), l.a.component("switcher", Rt), l.a.component("campaign-card", Nt), l.a.component("loading-button", Ut), l.a.component("pagination", o(378)), l.a.component("g-modal", Bt), l.a.component("g-notify", Kt), l.a.component("g-select", Gt.a), l.a.component("lightbox", Wt), l.a.component("action", Zt), l.a.component("action-item", Jt), l.a.component("g-filter", filter), l.a.component("filter-button", pi.a), l.a.component("filter-date-range", gi), l.a.component("filter-dropdown", _i), l.a.component("filter-search", hi), l.a.component("filter-select", fi), l.a.component("export-excel", wi.a), l.a.component("per-page", ki), l.a.component("fixed-button", zi), l.a.component("apex-charts", ei.a), l.a.component("image-cropper", Ai), l.a.component("image-viewer", ii), l.a.component("lang-dropdown", ri), l.a.component("g-image-picker", Pi), l.a.component("a-link", Ni), l.a.component("g-player", Ui), l.a.component("v-select", Gt.a), l.a.component("inline-documentation", Ki), l.a.component("video-player", Ui);
        l.a.filter("limitString", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
            return e.length > t ? e.substr(0, t) + o : e
        })), l.a.filter("capitalizeFirstLetter", (function(e) {
            return e[0].toUpperCase() + e.slice(1)
        }));
        var Yi = o(180),
            Gi = o(181),
            Vi = o(182),
            Wi = o(183),
            Hi = o(240),
            Zi = function(e) {
                var t = e.store;
                Object(Hi.a)({
                    key: "crowdfundly",
                    paths: []
                })(t)
            },
            Xi = o(185),
            Ji = o(187),
            Qi = function(e, t) {
                t("success", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l.a.notify({
                                        group: "notify",
                                        type: "success",
                                        title: title,
                                        text: t,
                                        duration: 3e3
                                    }), e.next = 3, new Promise((function(e, t) {
                                        setTimeout((function() {
                                            e(!0)
                                        }), 4e3)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()), t("error", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l.a.notify({
                                        group: "notify",
                                        type: "danger",
                                        title: title,
                                        text: t,
                                        duration: 3e3
                                    }), e.next = 3, new Promise((function(e, t) {
                                        setTimeout((function() {
                                            e(!0)
                                        }), 4e3)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()), t("delete", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l.a.notify({
                                        group: "notify",
                                        type: "delete",
                                        title: title || "DELETE",
                                        text: t,
                                        duration: 3e3
                                    }), e.next = 3, new Promise((function(e, t) {
                                        setTimeout((function() {
                                            e(!0)
                                        }), 4e3)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()), t("warning", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l.a.notify({
                                        group: "notify",
                                        type: "warning",
                                        title: title,
                                        text: t,
                                        duration: 3e3
                                    }), e.next = 3, new Promise((function(e, t) {
                                        setTimeout((function() {
                                            e(!0)
                                        }), 4e3)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()), t("info", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l.a.notify({
                                        group: "notify",
                                        type: "info",
                                        title: title,
                                        text: t,
                                        duration: 3e3
                                    }), e.next = 3, new Promise((function(e, t) {
                                        setTimeout((function() {
                                            e(!0)
                                        }), 4e3)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()), t("confirm", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e() {
                        var title, t, o, n, r, d, l = this,
                            c = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return title = c.length > 0 && void 0 !== c[0] ? c[0] : null, t = c.length > 1 && void 0 !== c[1] ? c[1] : null, o = c.length > 2 && void 0 !== c[2] ? c[2] : null, n = c.length > 3 && void 0 !== c[3] ? c[3] : null, r = c.length > 4 && void 0 !== c[4] ? c[4] : null, d = c.length > 5 && void 0 !== c[5] && c[5], e.prev = 6, e.next = 9, new Promise((function(e, c) {
                                        l.$swal.fire({
                                            title: title || l.$t("are_you_sure"),
                                            text: t,
                                            icon: o || "warning",
                                            showDenyButton: !0,
                                            showCancelButton: d,
                                            confirmButtonText: n || l.$t("yes_confirm"),
                                            denyButtonText: r || l.$t("no_cancel")
                                        }).then((function(t) {
                                            t.isConfirmed ? e(!0) : t.isDenied && c(!1)
                                        }))
                                    }));
                                case 9:
                                    return e.abrupt("return", e.sent);
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(6), e.abrupt("return", !1);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 12]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()), t("confirmResizeGif", Object(n.a)(regeneratorRuntime.mark((function e() {
                    var t = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, new Promise((function(e, o) {
                                    t.$swal.fire({
                                        title: t.$t("do_you_want_to_resize"),
                                        text: t.$t("you_are_trying_to_upload_an_image_of_gif__"),
                                        icon: "warning",
                                        showDenyButton: !0,
                                        showCancelButton: !1,
                                        confirmButtonText: t.$t("resize"),
                                        denyButtonText: t.$t("upload_without_resize")
                                    }).then((function(t) {
                                        t.isConfirmed ? e(!0) : t.isDenied && o(!1)
                                    }))
                                }));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", !1);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 6]
                    ])
                })))), t("isPro", function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(title, t, o, n, r) {
                        var d = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, new Promise((function(e, l) {
                                        d.$swal.fire({
                                            icon: r || "error",
                                            title: title || d.$t("oops") + "...",
                                            text: t || d.$t("you_have_to_upgrade_your_plan__"),
                                            showCancelButton: !0,
                                            cancelButtonText: n || d.$t("ok"),
                                            confirmButtonText: o || d.$t("upgrade_now"),
                                            reverseButtons: !0
                                        }).then((function(e) {
                                            e.isConfirmed ? d.$router.push({
                                                name: "dashboard-settings-plan"
                                            }) : e.isDenied && l(!1)
                                        }))
                                    }));
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", !1);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t, o, n, r, d) {
                        return e.apply(this, arguments)
                    }
                }())
            },
            ea = o(17),
            ta = o(22),
            ia = o(188),
            aa = (o(85), function(e) {
                return null == e
            }),
            oa = function(e) {
                return !aa(e)
            },
            na = function(a, b) {
                return a.split("?")[0] === b.split("?")[0]
            },
            ra = function(u) {
                return u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u)
            },
            da = function(e, t, o) {
                return e.matched.some((function(e) {
                    return Object.values(e.components).some((function(component) {
                        return component.options && component.options[t] === o
                    }))
                }))
            };

        function pa() {
            var path = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = path.split("?")[0];
            return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
        }

        function sa(e) {
            return "string" == typeof e ? e : JSON.stringify(e)
        }

        function la(e) {
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (e) {}
            return e
        }

        function ca(e, t) {
            if (!t || !e) return e;
            if (t in e) return e[t];
            for (var o = Array.isArray(t) ? t : (t + "").split("."), n = e; o.length && n;) n = n[o.shift()];
            return n
        }
        var ma = function() {
                function e(t, o) {
                    Object(ea.a)(this, e), this.ctx = t, this.options = o, this._initState()
                }
                return Object(ta.a)(e, [{
                    key: "setUniversal",
                    value: function(e, t) {
                        return aa(t) ? this.removeUniversal(e) : (this.setState(e, t), this.setCookie(e, t), this.setLocalStorage(e, t), t)
                    }
                }, {
                    key: "getUniversal",
                    value: function(e) {
                        var t = this.getState(e);
                        return aa(t) && (t = this.getCookie(e)), aa(t) && (t = this.getLocalStorage(e)), t
                    }
                }, {
                    key: "syncUniversal",
                    value: function(e, t) {
                        var o = this.getUniversal(e);
                        return aa(o) && oa(t) && (o = t), oa(o) && this.setUniversal(e, o), o
                    }
                }, {
                    key: "removeUniversal",
                    value: function(e) {
                        this.removeState(e), this.removeLocalStorage(e), this.removeCookie(e)
                    }
                }, {
                    key: "_initState",
                    value: function() {
                        var e = this;
                        if (l.a.set(this, "_state", {}), this._useVuex = this.options.vuex && this.ctx.store, this._useVuex) {
                            var t = {
                                namespaced: !0,
                                state: function() {
                                    return e.options.initialState
                                },
                                mutations: {
                                    SET: function(e, t) {
                                        l.a.set(e, t.key, t.value)
                                    }
                                }
                            };
                            this.ctx.store.registerModule(this.options.vuex.namespace, t, {
                                preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
                            }), this.state = this.ctx.store.state[this.options.vuex.namespace]
                        } else l.a.set(this, "state", {})
                    }
                }, {
                    key: "setState",
                    value: function(e, t) {
                        return "_" === e[0] ? l.a.set(this._state, e, t) : this._useVuex ? this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
                            key: e,
                            value: t
                        }) : l.a.set(this.state, e, t), t
                    }
                }, {
                    key: "getState",
                    value: function(e) {
                        return "_" !== e[0] ? this.state[e] : this._state[e]
                    }
                }, {
                    key: "watchState",
                    value: function(e, t) {
                        var o = this;
                        if (this._useVuex) return this.ctx.store.watch((function(t) {
                            return ca(t[o.options.vuex.namespace], e)
                        }), t)
                    }
                }, {
                    key: "removeState",
                    value: function(e) {
                        this.setState(e, void 0)
                    }
                }, {
                    key: "setLocalStorage",
                    value: function(e, t) {
                        if (aa(t)) return this.removeLocalStorage(e);
                        if ("undefined" != typeof localStorage && this.options.localStorage) {
                            var o = this.options.localStorage.prefix + e;
                            try {
                                localStorage.setItem(o, sa(t))
                            } catch (e) {
                                if (!this.options.ignoreExceptions) throw e
                            }
                            return t
                        }
                    }
                }, {
                    key: "getLocalStorage",
                    value: function(e) {
                        if ("undefined" != typeof localStorage && this.options.localStorage) {
                            var t = this.options.localStorage.prefix + e;
                            return la(localStorage.getItem(t))
                        }
                    }
                }, {
                    key: "removeLocalStorage",
                    value: function(e) {
                        if ("undefined" != typeof localStorage && this.options.localStorage) {
                            var t = this.options.localStorage.prefix + e;
                            localStorage.removeItem(t)
                        }
                    }
                }, {
                    key: "getCookies",
                    value: function() {
                        var e = document.cookie;
                        return Object(ia.parse)(e || "") || {}
                    }
                }, {
                    key: "setCookie",
                    value: function(e, t) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (this.options.cookie) {
                            var n = this.options.cookie.prefix + e,
                                r = Object.assign({}, this.options.cookie.options, o),
                                d = sa(t);
                            aa(t) && (r.maxAge = -1), "number" == typeof r.expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires));
                            var l = Object(ia.serialize)(n, d, r);
                            return document.cookie = l, t
                        }
                    }
                }, {
                    key: "getCookie",
                    value: function(e) {
                        if (this.options.cookie) {
                            var t = this.options.cookie.prefix + e,
                                o = this.getCookies();
                            return la(o[t] ? decodeURIComponent(o[t]) : void 0)
                        }
                    }
                }, {
                    key: "removeCookie",
                    value: function(e, t) {
                        this.setCookie(e, void 0, t)
                    }
                }]), e
            }(),
            ga = function() {
                function e(t, o) {
                    Object(ea.a)(this, e), this.ctx = t, this.options = o, this.strategies = {}, this._errorListeners = [], this._redirectListeners = [], o.initialState = {
                        user: null,
                        loggedIn: !1
                    };
                    var n = new ma(t, o);
                    this.$storage = n, this.$state = n.state
                }
                var t;
                return Object(ta.a)(e, [{
                    key: "init",
                    value: (t = Object(n.a)(regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.options.resetOnError && this.onError((function() {
                                            var e;
                                            ("function" != typeof t.options.resetOnError || (e = t.options).resetOnError.apply(e, arguments)) && t.reset()
                                        })), this.$storage.syncUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                        e.next = 6;
                                        break
                                    }
                                    if (this.$storage.setUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", Promise.resolve());
                                case 6:
                                    return e.prev = 6, e.next = 9, this.mounted();
                                case 9:
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(6), this.callOnError(e.t0);
                                case 14:
                                    return e.prev = 14, this.options.watchLoggedIn && this.$storage.watchState("loggedIn", (function(e) {
                                        da(t.ctx.route, "auth", !1) || t.redirect(e ? "home" : "logout")
                                    })), e.finish(14);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [6, 11, 14, 17]
                        ])
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "getState",
                    value: function(e) {
                        return this._get_state_warn_shown || (this._get_state_warn_shown = !0, console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn")), this.$storage.getState(e)
                    }
                }, {
                    key: "registerStrategy",
                    value: function(e, t) {
                        this.strategies[e] = t
                    }
                }, {
                    key: "setStrategy",
                    value: function(e) {
                        return e === this.$storage.getUniversal("strategy") ? Promise.resolve() : (this.$storage.setUniversal("strategy", e), this.mounted())
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        var e, t = this;
                        return this.strategy.mounted ? Promise.resolve((e = this.strategy).mounted.apply(e, arguments)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "mounted"
                            }), Promise.reject(e)
                        })) : this.fetchUserOnce()
                    }
                }, {
                    key: "loginWith",
                    value: function(e) {
                        for (var t = this, o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) n[r - 1] = arguments[r];
                        return this.setStrategy(e).then((function() {
                            return t.login.apply(t, n)
                        }))
                    }
                }, {
                    key: "login",
                    value: function() {
                        var e, t = this;
                        return this.strategy.login ? this.wrapLogin((e = this.strategy).login.apply(e, arguments)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "login"
                            }), Promise.reject(e)
                        })) : Promise.resolve()
                    }
                }, {
                    key: "fetchUser",
                    value: function() {
                        var e, t = this;
                        return this.strategy.fetchUser ? Promise.resolve((e = this.strategy).fetchUser.apply(e, arguments)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "fetchUser"
                            }), Promise.reject(e)
                        })) : Promise.resolve()
                    }
                }, {
                    key: "logout",
                    value: function() {
                        var e, t = this;
                        return this.strategy.logout ? Promise.resolve((e = this.strategy).logout.apply(e, arguments)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "logout"
                            }), Promise.reject(e)
                        })) : (this.reset(), Promise.resolve())
                    }
                }, {
                    key: "setUserToken",
                    value: function(e) {
                        var t = this;
                        return this.strategy.setUserToken ? Promise.resolve(this.strategy.setUserToken(e)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "setUserToken"
                            }), Promise.reject(e)
                        })) : (this.setToken(this.strategy.name, e), Promise.resolve())
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e, t = this;
                        return this.strategy.reset ? Promise.resolve((e = this.strategy).reset.apply(e, arguments)).catch((function(e) {
                            return t.callOnError(e, {
                                method: "reset"
                            }), Promise.reject(e)
                        })) : (this.setUser(!1), this.setToken(this.$state.strategy, !1), this.setRefreshToken(this.$state.strategy, !1), Promise.resolve())
                    }
                }, {
                    key: "getToken",
                    value: function(e) {
                        var t = this.options.token.prefix + e;
                        return this.$storage.getUniversal(t)
                    }
                }, {
                    key: "setToken",
                    value: function(e, t) {
                        var o = this.options.token.prefix + e;
                        return this.$storage.setUniversal(o, t)
                    }
                }, {
                    key: "syncToken",
                    value: function(e) {
                        var t = this.options.token.prefix + e;
                        return this.$storage.syncUniversal(t)
                    }
                }, {
                    key: "getRefreshToken",
                    value: function(e) {
                        var t = this.options.refresh_token.prefix + e;
                        return this.$storage.getUniversal(t)
                    }
                }, {
                    key: "setRefreshToken",
                    value: function(e, t) {
                        var o = this.options.refresh_token.prefix + e;
                        return this.$storage.setUniversal(o, t)
                    }
                }, {
                    key: "syncRefreshToken",
                    value: function(e) {
                        var t = this.options.refresh_token.prefix + e;
                        return this.$storage.syncUniversal(t)
                    }
                }, {
                    key: "fetchUserOnce",
                    value: function() {
                        return this.$state.user ? Promise.resolve() : this.fetchUser.apply(this, arguments)
                    }
                }, {
                    key: "setUser",
                    value: function(e) {
                        this.$storage.setState("user", e), this.$storage.setState("loggedIn", Boolean(e))
                    }
                }, {
                    key: "request",
                    value: function(e, t) {
                        var o = this,
                            n = "object" === Object(Ti.a)(t) ? Object.assign({}, t, e) : e;
                        if (this.ctx.app.$axios) return this.ctx.app.$axios.request(n).then((function(e) {
                            return n.propertyName ? ca(e.data, n.propertyName) : e.data
                        })).catch((function(e) {
                            return o.callOnError(e, {
                                method: "request"
                            }), Promise.reject(e)
                        }));
                        console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file")
                    }
                }, {
                    key: "requestWith",
                    value: function(e, t, o) {
                        var n = this.getToken(e),
                            r = Object.assign({}, o, t),
                            d = this.strategies[e].options.tokenName || "Authorization";
                        return r.headers || (r.headers = {}), !r.headers[d] && oa(n) && n && (r.headers[d] = n), this.request(r)
                    }
                }, {
                    key: "wrapLogin",
                    value: function(e) {
                        var t = this;
                        return this.$storage.setState("busy", !0), this.error = null, Promise.resolve(e).then((function() {
                            t.$storage.setState("busy", !1)
                        })).catch((function(e) {
                            return t.$storage.setState("busy", !1), Promise.reject(e)
                        }))
                    }
                }, {
                    key: "onError",
                    value: function(e) {
                        this._errorListeners.push(e)
                    }
                }, {
                    key: "callOnError",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.error = e;
                        var o = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var d, l = this._errorListeners[Symbol.iterator](); !(o = (d = l.next()).done); o = !0) {
                                var c = d.value;
                                c(e, t)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "redirect",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (this.options.redirect) {
                            var o = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path,
                                n = this.options.redirect[e];
                            if (n) {
                                if (this.options.rewriteRedirects && ("login" === e && ra(o) && !na(n, o) && this.$storage.setUniversal("redirect", o), "home" === e)) {
                                    var r = this.$storage.getUniversal("redirect");
                                    this.$storage.setUniversal("redirect", null), ra(r) && (n = r)
                                }
                                n = this.callOnRedirect(n, o) || n, na(n, o) || (t ? window.location.replace(n) : this.ctx.redirect(n, this.ctx.query))
                            }
                        }
                    }
                }, {
                    key: "onRedirect",
                    value: function(e) {
                        this._redirectListeners.push(e)
                    }
                }, {
                    key: "callOnRedirect",
                    value: function(e, t) {
                        var o = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var d, l = this._redirectListeners[Symbol.iterator](); !(o = (d = l.next()).done); o = !0) {
                                e = (0, d.value)(e, t) || e
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return e
                    }
                }, {
                    key: "hasScope",
                    value: function(e) {
                        var t = this.$state.user && ca(this.$state.user, this.options.scopeKey);
                        return !!t && (Array.isArray(t) ? t.includes(e) : Boolean(ca(t, e)))
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this._state_warn_shown || (this._state_warn_shown = !0, console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn")), this.$state
                    }
                }, {
                    key: "strategy",
                    get: function() {
                        return this.strategies[this.$state.strategy]
                    }
                }, {
                    key: "user",
                    get: function() {
                        return this.$state.user
                    }
                }, {
                    key: "loggedIn",
                    get: function() {
                        return this.$state.loggedIn
                    }
                }, {
                    key: "busy",
                    get: function() {
                        return this.$storage.getState("busy")
                    }
                }]), e
            }();
        o(109).a.auth = function(e) {
            if (!da(e.route, "auth", !1)) {
                if (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return [].concat.apply([], e.matched.map((function(e, o) {
                            return Object.keys(e.components).map((function(n) {
                                return t && t.push(o), e.components[n]
                            }))
                        })))
                    }(e.route, []).length) {
                    var t = e.$auth.options.redirect,
                        o = t.login,
                        n = t.callback,
                        r = da(e.route, "auth", "guest"),
                        d = function(t) {
                            return pa(e.route.path) === pa(t)
                        };
                    e.$auth.$state.loggedIn ? (!o || d(o) || r) && e.$auth.redirect("home") : r || n && d(n) || e.$auth.redirect("login")
                }
            }
        };
        var ba = function() {
                function e(t, o) {
                    Object(ea.a)(this, e), this.$auth = t, this.name = o._name, this.options = Object.assign({}, _a, o)
                }
                var t, o, r, d, l;
                return Object(ta.a)(e, [{
                    key: "_setToken",
                    value: function(e) {
                        this.options.globalToken && this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, e)
                    }
                }, {
                    key: "_clearToken",
                    value: function() {
                        this.options.globalToken && this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, !1)
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        if (this.options.tokenRequired) {
                            var e = this.$auth.syncToken(this.name);
                            this._setToken(e)
                        }
                        return this.$auth.fetchUserOnce()
                    }
                }, {
                    key: "login",
                    value: (l = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var o, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.options.endpoints.login) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, this._logoutLocally();
                                case 4:
                                    return e.next = 6, this.$auth.request(t, this.options.endpoints.login);
                                case 6:
                                    return o = e.sent, this.options.tokenRequired && (n = this.options.tokenType ? this.options.tokenType + " " + o : o, this.$auth.setToken(this.name, n), this._setToken(n)), e.abrupt("return", this.fetchUser());
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "setUserToken",
                    value: (d = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._logoutLocally();
                                case 2:
                                    return this.options.tokenRequired && (o = this.options.tokenType ? this.options.tokenType + " " + t : t, this.$auth.setToken(this.name, o), this._setToken(o)), e.abrupt("return", this.fetchUser());
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return d.apply(this, arguments)
                    })
                }, {
                    key: "fetchUser",
                    value: (r = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.options.tokenRequired || this.$auth.getToken(this.name)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.options.endpoints.user) {
                                        e.next = 5;
                                        break
                                    }
                                    return this.$auth.setUser({}), e.abrupt("return");
                                case 5:
                                    return e.next = 7, this.$auth.requestWith(this.name, t, this.options.endpoints.user);
                                case 7:
                                    o = e.sent, this.$auth.setUser(o);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "logout",
                    value: (o = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.options.endpoints.logout) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this.$auth.requestWith(this.name, t, this.options.endpoints.logout).catch((function() {}));
                                case 3:
                                    return e.abrupt("return", this._logoutLocally());
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "_logoutLocally",
                    value: (t = Object(n.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.options.tokenRequired && this._clearToken(), e.abrupt("return", this.$auth.reset());
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }]), e
            }(),
            _a = {
                tokenRequired: !0,
                tokenType: "Bearer",
                globalToken: !0,
                tokenName: "Authorization"
            },
            ua = function(e, t) {
                var o = new ga(e, {
                    resetOnError: !1,
                    scopeKey: "scope",
                    rewriteRedirects: !0,
                    fullPathRedirect: !1,
                    watchLoggedIn: !0,
                    redirect: {
                        login: "/",
                        logout: "/wp-admin/admin.php?page=crowdfundly-settings",
                        home: !1,
                        callback: "/callback"
                    },
                    vuex: {
                        namespace: "auth"
                    },
                    cookie: {
                        prefix: "auth.",
                        options: {
                            path: "/"
                        }
                    },
                    localStorage: {
                        prefix: "auth."
                    },
                    token: {
                        prefix: "_token."
                    },
                    refresh_token: {
                        prefix: "_refresh_token."
                    },
                    defaultStrategy: "local"
                });
                return o.registerStrategy("local", new ba(o, {
                    endpoints: {
                        login: {
                            url: "/auth/login",
                            method: "post",
                            propertyName: "access_token"
                        },
                        logout: {
                            url: "/auth/logout",
                            method: "post",
                            propertyName: null
                        },
                        user: {
                            url: "/user",
                            method: "get",
                            propertyName: null
                        }
                    },
                    _name: "local"
                })), t("auth", o), e.$auth = o, o.init().catch((function(e) {
                    console.error("[ERROR] [AUTH]", e)
                }))
            },
            ha = function(e) {
                var t = e.$axios,
                    o = e.store,
                    r = (e.redirect, e.$auth);
                t.onRequest((function(e) {
                    ! function(e, t) {
                        var o = e.getters.organization;
                        o && (t.headers["organization-id"] = o.id)
                    }(o, e)
                })), t.withoutAuthorization = function() {
                    return t.setHeader("Authorization", null), t
                }, t.onError(function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(n) {
                        var d;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n.response && n.response.data) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (n.response.data.error_code && 989700 === n.response.data.error_code && r.loggedIn && r.fetchUser(), !n.response.data.error_code || 989701 !== n.response.data.error_code || !r.loggedIn) {
                                        e.next = 10;
                                        break
                                    }
                                    if (!(d = JSON.parse(localStorage.getItem("crowdfundly"))).logout_api_url) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, t.$post(d.logout_api_url).then((function(e) {
                                        console.log("logout api", e)
                                    })).catch((function(e) {
                                        console.log("logout api error", e)
                                    }));
                                case 8:
                                    return e.next = 10, o.dispatch("logout");
                                case 10:
                                    return o.dispatch("error/setError", n.response.data), e.abrupt("return", Promise.reject(n));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()), t.onResponse((function(e) {
                    return o.dispatch("error/clearError"), Promise.resolve(e)
                })), t.$setAuthToken = function() {
                    return o.$auth.getToken("local") && t.setToken(o.$auth.getToken("local")), t
                }, t.$clearAuthToken = function() {
                    return t.setToken(""), t
                }
            };

        function xa(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function fa(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? xa(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : xa(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        o.d(t, "b", (function() {
            return ya
        })), o.d(t, "a", (function() {
            return O
        })), l.a.component(_.a.name, _.a), l.a.component(x.a.name, fa({}, x.a, {
            render: function(e, t) {
                return x.a._warned || (x.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), x.a.render(e, t)
            }
        })), l.a.component(C.name, C), l.a.component("NChild", C), l.a.component(T.name, T), l.a.use(c.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var wa = {
            name: "page",
            mode: "out-in",
            appear: !0,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };

        function ya(e) {
            return ka.apply(this, arguments)
        }

        function ka() {
            return (ka = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                var o, n, r, d, c, path, m;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, z();
                        case 2:
                            return o = e.sent, (n = Ee(t)).$router = o, r = fa({
                                store: n,
                                router: o,
                                nuxt: {
                                    defaultTransition: wa,
                                    transitions: [wa],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, wa, {
                                                name: e
                                            }) : Object.assign({}, wa, e) : wa
                                        })), this.$options.nuxt.transitions = e, e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null, r.context._errored = Boolean(e), e = e ? Object(w.l)(e) : null;
                                        var o = this.nuxt || this.$options.nuxt;
                                        return o.dateErr = Date.now(), o.err = e, t && (t.nuxt.error = e), e
                                    }
                                }
                            }, Ce), n.app = r, d = t ? t.next : function(e) {
                                return r.router.push(e)
                            }, t ? c = o.resolve(t.url).route : (path = Object(w.d)(o.options.base, o.options.mode), c = o.resolve(path).route), e.next = 11, Object(w.p)(r, {
                                store: n,
                                route: c,
                                next: d,
                                error: r.nuxt.error.bind(r),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 11:
                            m = function(e, t) {
                                if (!e) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t) throw new Error("inject(key, value) has no value provided");
                                r[e = "$" + e] = t, n[e] = r[e];
                                var o = "__nuxt_" + e + "_installed__";
                                l.a[o] || (l.a[o] = !0, l.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.a, e) || Object.defineProperty(l.a.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                })))
                            }, window.__NUXT__ && window.__NUXT__.state && n.replaceState(window.__NUXT__.state), e.next = 16;
                            break;
                        case 16:
                            return e.next = 19, qe(r.context, m);
                        case 19:
                            return e.next = 22, Ve(r.context, m);
                        case 22:
                            return e.next = 25, Ze(r.context, m);
                        case 25:
                            if ("function" != typeof Je.a) {
                                e.next = 28;
                                break
                            }
                            return e.next = 28, Je()(r.context, m);
                        case 28:
                            return e.next = 31, et(r.context);
                        case 31:
                            if ("function" != typeof tt.a) {
                                e.next = 34;
                                break
                            }
                            return e.next = 34, Object(tt.a)(r.context, m);
                        case 34:
                            if ("function" != typeof it.a) {
                                e.next = 37;
                                break
                            }
                            return e.next = 37, Object(it.a)(r.context, m);
                        case 37:
                            e.next = 40;
                            break;
                        case 40:
                            e.next = 43;
                            break;
                        case 43:
                            if ("function" != typeof Yi.a) {
                                e.next = 46;
                                break
                            }
                            return e.next = 46, Object(Yi.a)(r.context, m);
                        case 46:
                            if ("function" != typeof Gi.a) {
                                e.next = 49;
                                break
                            }
                            return e.next = 49, Object(Gi.a)(r.context, m);
                        case 49:
                            if ("function" != typeof Vi.a) {
                                e.next = 52;
                                break
                            }
                            return e.next = 52, Object(Vi.a)(r.context, m);
                        case 52:
                            if ("function" != typeof Wi.a) {
                                e.next = 55;
                                break
                            }
                            return e.next = 55, Object(Wi.a)(r.context, m);
                        case 55:
                            return e.next = 58, Zi(r.context);
                        case 58:
                            if ("function" != typeof Xi.a) {
                                e.next = 61;
                                break
                            }
                            return e.next = 61, Object(Xi.a)(r.context, m);
                        case 61:
                            if ("function" != typeof Ji.a) {
                                e.next = 64;
                                break
                            }
                            return e.next = 64, Object(Ji.a)(r.context, m);
                        case 64:
                            return e.next = 67, Qi(r.context, m);
                        case 67:
                            return e.next = 70, ua(r.context, m);
                        case 70:
                            return e.next = 73, ha(r.context);
                        case 73:
                            e.next = 76;
                            break;
                        case 76:
                            return e.abrupt("return", {
                                store: n,
                                app: r,
                                router: o
                            });
                        case 77:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = {
                data: function() {
                    return {}
                },
                computed: {
                    genericError: function() {
                        return this.$store.getters["error/getFormattedGenericError"]
                    }
                }
            },
            r = (o(355), o(1)),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return e.genericError.message || e.genericError.errors.length ? o("div", {
                    staticClass: "form-errorbox"
                }, [o("h4", {
                    staticClass: "form-errorbox__title",
                    domProps: {
                        textContent: e._s(e.genericError.message)
                    }
                }), e._v(" "), e.genericError.errors.length ? o("ul", {
                    staticClass: "form-errorbox__list"
                }, e._l(e.genericError.errors, (function(t, n) {
                    return o("li", {
                        key: n
                    }, [e._v(e._s(t))])
                })), 0) : e._e()]) : e._e()
            }), [], !1, null, null, null);
        t.a = component.exports
    }, , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return r
        }));
        var n = o(17),
            r = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                Object(n.a)(this, e), this.message = t || "Something went wrong!"
            }
    }, , function(e, t, o) {
        "use strict";
        var n = {
                props: ["details", "dropdown"],
                computed: {
                    title: function() {
                        return this.details.data.title
                    },
                    message: function() {
                        return this.details.data.message
                    },
                    created_at: function() {
                        return this.$moment(this.details.created_at, "YYYY-MM-DD").format("DD/MM/YYYY")
                    },
                    read_at: function() {
                        return this.details.read_at
                    },
                    mainCssClass: function() {
                        return this.dropdown ? "notification-box notification-box--dropdown" : "notification-box"
                    }
                },
                methods: {}
            },
            r = o(1),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "single-notification",
                    class: e.read_at ? "" : "single-notification--unread"
                }, [o("div", {
                    staticClass: "single-notification__header"
                }, [o("h4", {
                    staticClass: "single-notification__title",
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }), e._v(" "), o("p", {
                    staticClass: "single-notification__date"
                }, [o("i", {
                    staticClass: "far fa-clock"
                }), e._v("\n            " + e._s(e.created_at) + "\n        ")])]), e._v(" "), e.message ? o("p", {
                    staticClass: "single-notification__message",
                    domProps: {
                        innerHTML: e._s(e.message)
                    }
                }) : e._e()])
            }), [], !1, null, null, null);
        t.a = component.exports
    }, , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = {
                props: {
                    icon: {
                        type: String,
                        required: !1,
                        default: "fa-check-circle"
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "secondary"
                    },
                    link: {
                        type: Object,
                        required: !1
                    },
                    target: {
                        required: !1
                    }
                }
            },
            r = o(1),
            component = Object(r.a)(n, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("g-dropdown-item", {
                    class: "g-dropdown__item--" + this.type,
                    attrs: {
                        link: this.link,
                        target: this.target
                    }
                }, [t("i", {
                    staticClass: "fas",
                    class: this.icon
                }), this._v("\n    " + this._s(this.title) + "\n")])
            }), [], !1, null, null, null);
        t.a = component.exports
    }, function(e, t, o) {
        "use strict";
        var n = {};
        n.admin = o(264), n.admin = n.admin.default || n.admin, n.checkAuthAndSetRedirectUrl = o(265), n.checkAuthAndSetRedirectUrl = n.checkAuthAndSetRedirectUrl.default || n.checkAuthAndSetRedirectUrl, n.checkAuthToken = o(266), n.checkAuthToken = n.checkAuthToken.default || n.checkAuthToken, n.clearValidationErrors = o(269), n.clearValidationErrors = n.clearValidationErrors.default || n.clearValidationErrors, n.guest = o(270), n.guest = n.guest.default || n.guest, n.initializeCampaignHeader = o(271), n.initializeCampaignHeader = n.initializeCampaignHeader.default || n.initializeCampaignHeader, n.log = o(272), n.log = n.log.default || n.log, n.pages = o(273), n.pages = n.pages.default || n.pages, n.permit = o(274), n.permit = n.permit.default || n.permit, n.permitOrg = o(275), n.permitOrg = n.permitOrg.default || n.permitOrg, n.permitPlan = o(276), n.permitPlan = n.permitPlan.default || n.permitPlan, n.redirectIfEmailVerified = o(277), n.redirectIfEmailVerified = n.redirectIfEmailVerified.default || n.redirectIfEmailVerified, n.redirectIfMaintenanceMode = o(278), n.redirectIfMaintenanceMode = n.redirectIfMaintenanceMode.default || n.redirectIfMaintenanceMode, n.redirectIfNoOrg = o(279), n.redirectIfNoOrg = n.redirectIfNoOrg.default || n.redirectIfNoOrg, n.setIntendedUrl = o(280), n.setIntendedUrl = n.setIntendedUrl.default || n.setIntendedUrl, n.subdomainGuest = o(281), n.subdomainGuest = n.subdomainGuest.default || n.subdomainGuest, n.userCanBrowse = o(282), n.userCanBrowse = n.userCanBrowse.default || n.userCanBrowse, n.verifyUserEmail = o(283), n.verifyUserEmail = n.verifyUserEmail.default || n.verifyUserEmail, t.a = n
    }, , , function(e) {
        e.exports = JSON.parse('{"en":{"filters":"Filters","select_a_date_range":"Select a date range","clear":"Clear","done":"Done","type":"Type","export_to_excel":"Export to excel","ads_budget_percentage":"Ads budget percentage","set_as_raised":"Set as raised","unset_as_raised":"Unset as raised","amount":"Amount","payout_id":"Payout ID","published":"Published","unpublished":"Unpublished","rejected":"Rejected","search_name_or_email":"Search name or email","recurring_donation_status":"Recurring contribution status","life_time_value":"Lifetime value","hello":"Hello","something_else":"this is something","loading_campaign":"The campaign is loading","loading_campaign_list":"The campaigns are loading","please_wait":"Please wait","pending":"Pending","under_verification":"Under Verification","approve":"Approve","approved":"Approved","requested_amendation":"Requested for amendation","resubmitted":"Resubmitted","inactive":"Inactive","requested_approval_after_inactivation":"Requested for approval (after inactivation)","loading":"Loading","loading_data":"Loading data","loading_campaign_types":"Loading Campaign Types","load_more":"Load more","post_update_to_campaign":"Post an update about your campaign to contributors and page visitors","post_update_button_text":"Post update","co_fundraiser":"Co-fundraiser","fundraiser":"Fundraiser","processing":"Processing","add_co_fundraiser":"Add Co-fundraiser","are_you_sure":"Are you sure?","logging_out":"Logging out","logout":"Logout","request_processing":"Please wait, the request is being processed","mark_verified":"Mark as verified","denied_by_you":"Denied by you","accepted_by_you":"Accepted by you","verified_by_you":"Verified by you","assigned_campaigns":"Assigned campaigns","assigned_campaigns_to":"Assigned campaigns to","campaign_types":"Campaign types","new_campaign":"New campaign","campaign_media":"Campaign media","campaign_story":"Campaign story","campaign_recipient":"Campaign recipient","submit_campaign":"Submit campaign","draft":"Draft","accept":"Accept","reject":"Reject","delete":"Delete","deleted":"Deleted","edit":"Edit","manage":"Manage","save":"Save","add":"Add","add_new":"Add new","not_found":"Not found","not_working_try_later":"Not working. Try again later","remove_photo":"Remove photo","removing":"Removing","edit_campaign":"Edit campaign","invalid_video_url":"Invalid video URL","social_share_description":"and I thought you might be interested in checking it out as well. Please consider contributing or sharing this meaningful campaign. Thanks!","i_am_supporting_this_fundraising_page":"I am supporting this fundraising page","custom_amount":"Custom Amount","enter_amount":"Enter amount","show":"Show","show_me":"Show me","sort_by":"Sort by","show_more":"Show More","filter_tag":"Filter tag","view":"View","image":"Image","campaign_details":"Campaign details","target_amount":"Target amount","status":"Status","actions":"Actions","select_a_user":"Select a user","or":"or","an_auto_generated_password":"An auto-generated password will send to the given email","select_from_existing_user":"Select from existing user","role":"Role","select_role":"Select role","name":"Name","email":"Email","enter_name":"Enter name","enter_email":"Enter email","unassigned":"Not assigned yet","assigned":"Assigned","marked_verified":"Marked as Verified","summary_of_description":"Summary of description","short_description":"Short description","preset_summary":"Preset summary","preset_description":"Describe what the contribution amount means to your cause, or even offer a reward!","describe_the_preset":"Describe the preset","page_settings_donation_preset":"Settings - Contribution presets","donation_preset_amounts":"Contribution preset amounts","donation_presets":"Contribution presets","contribution_preset_page_description_one":"If you really want to hit your fundraising target, you should customize your contribution preset amounts below.👇","contribution_preset_page_description_two":"You can set the preset amounts for the contributions and explain what that amount means to your cause. It will help contributor visualize how their money can help you","system_settings":"System settings","youtube_api":"Youtube API","agora_api":"Agora API","agora_api_key":"Agora API Key","google_captcha":"Google captcha","youtube_api_key":"Youtube API Key","you_can_enable_or_disable":"You can enable or disable","data_store":"Data store","data_storage_type":"Data storage type","local":"Local","cloud":"Cloud","push_notification":"Push notification","provider":"Provider","select_provider":"Select provider","application_settings":"Application settings","contributors":"Contributors","contributor":"Contributor","payouts":"Payouts","asias_most_trusted_fundraising_platform":"ASIA’S MOST TRUSTED FUNDRAISING PLATFORM","start_fundraising":"Start Fundraising","see_how_easy_it_is_to_start_a_campaign":"See how easy it is to start a campaign","see_what_successful_fundraisers_say_about_give_asia":"See what successful fundraisers say about Crowdfundly","step_1":"Step 1","step_2":"Step 2","step_3":"Step 3","fundraise":"Fundraise","fundraisers":"Fundraisers","apply_filter":"Apply filter","clear_filter":"Clear filter","about":"About","ads_budget":"Ads budget","chat_presets":"Chat presets","filter":"Filter","features":"Features","a_better_way_to_create_your_fundraising_campaign":"A better way to create your fundraising campaign","we_undertstand_creating_a_fundraising_campaign":"We undertstand creating a fundraising campaign can be pretty daunting. Which is why we have designed a whole new way of creating fundraising campaigns","start_a_campaign":"Start a campaign","your_unique_kindness_profile":"Your unique kindness profile","whether_you_are_a_contributor_or_a_fundraiser":"Whether you’re a contributor or a fundraiser, we celebrate it at Crowdfundly. Once you’ve signed up on Crowdfundly, you’ll have your own Crowdfundly profile page, which tracks your acts of kindness on the platform","check_out_my_profile":"Check out my profile","lets_get_started":"Let\'s get started","hello_I_am_aseem":"Hello! I’m Aseem, co-founder of Crowdfundly. Would you like to try starting a campaign? Tap below to start!👇🏽","contribute":"Contribute","dashboard":"Dashboard","accept_invitation":"Accept Invitation","accepting":"Accepting","login":"Log In","register":"Register","sorry":"Sorry","you_are_not_a_loggedin_user":"You aren\'t a logged in user","please":"Please","accept_this_invitation":"Accept this invitation","accepting_invitation":"Accepting invitation","you_have_successfully_accepted_cofundraiser_invitation":"You have successfully accepted co-fundraiser invitation","share_campaign_dashboard":"Share - Campaign Dashboard","share":"Share","update_summary":"Update Summary","updating":"Updating","successfully_updated_flayer_summary":"Successfully updated Flayer summary","download_flyer_pdf":"Download Flyer PDF","has_not_started_a_fundraising_campaign_yet":"has not started a fundraising campaign yet","loading_more":"Loading More","loading_campaigns":"Loading Campaigns","campaign_chat":"Campaign chat","be_the_first_to_ask_question":"Be the first to ask question, write encouraging messages, or share thoughts","send_a_message":"Send a message...","the_beginning":"The beginning","downloading_flyer":"Downloading Flyer","add_campaign_badge":"Add campaign badge","min_point":"Min point","max_point":"Max point","campaign_badges":"Campaign Badges","deny":"Deny","select_a_role":"Select a role","search":"Search","try_searching_campaign_titles_or_names":"Try searching campaign titles or names","results":"results","add_donation_badge":"Add contribution badge","donation_badges":"Contribution Badges","add_share_badge":"Add share badge","share_badges":"Share Badges","rank_list":"Rank list","update_rank":"Update Rank","select_rank_name":"Select rank name","max_amount":"Maximum Amount","min_amount":"Minimum Amount","select_name":"Select name","badges":"Badges","add_new_badge":"Add new badge","select_type":"Select type","select_badge_type":"Select badge type","select_activity":"Select activity","select_a_activity":"Select a activity","campaign_reports":"Campaign Reports","loading_campaign_reports":"Loading campaign reports","loading_reports":"Loading reports","remind_me_later":"Remind me later","we_will_send_you_an_email_for_reminding_you":"We will send you an email for reminding you to make a contribution later. Select when should we remind you","enter_email_address":"Enter email address","rejected_by_you":"Rejected by you","home_settings":"Home page settings","banner_content":"Banner content","title":"Title","background_image":"Background image","select_background_image":"Select background image","banner_logo":"Banner logo","select_logo":"Select logo","featured_brands":"Featured Brands","brands":"Brands","brand_logo":"Brand logo","featured_campaign":"Featured campaign","campaign_url":"Campaign URL","select_campaign_image":"Select campaign image","background_color":"Background color","about_settings":"About page settings","give_asia_family":"Crowdfundly Family","give_asia_advisors_ambassadors":"Crowdfundly Advisors & Ambassadors","users":"Users","user_list":"User List","loading_users":"Loading users","no_user_found":"No user found","loading_top_contributors":"Loading top contributors","no_one_has_contributed_yet":"No one has contributed yet","by":"by","loading_activities":"Loading activities","no_activities_found_for_this_campaign":"No activities found for this campaign","story":"Story","updates":"Updates","activities":"Activities","campaign_not_found":"Campaign not found","are_you_sure_want_to_delete":"Are you sure, want to delete","no_updates_found_for_this_campaign":"No Updates found for this campaign","loading_updates":"Loading updates","refunds":"Refunds","completed":"Completed","filter_by":"Filter by","date_time":"Date Time","time_in_utc":"Time in UTC","contributor_name":"Contributor name","amount_contributed":"Amount","tip_amount":"Tip amount","contribution_type":"Contribution type","campaign_name":"Campaign name","transaction_id":"Transaction ID","request_type":"Request type","note":"Note","submit":"Submit","accepted":"Accepted","social_media_boost":"Social Media Boost","submitting":"Submitting","no_campaign_found":"No campaign found!","fundraiser_name":"Fundraiser name","fundraiser_email":"Fundraiser email","raised":"Raised","ads_spent":"Ads Spent","target":"Target","mark_as_verified":"Mark as verified","accept_campaign":"Accept campaign","deny_campaign":"Deny campaign","approve_campaign":"Approve campaign","publish_campaign":"Publish campaign","date_added":"Date added","date":"Date","start_conversation":"Start conversation","send":"Send","conversations":"Conversations","conversation":"Conversation","no_conversation_found":"No conversation found!","subject":"Subject","message":"Message","campaign":"Campaign","created_at":"Created at","id":"ID","opinions":"Opinions","add_opinion":"Add opinion","published_at":"Published at","not_yet_published":"Not yet published","created_by":"Created by","go_to_conversation":"Go to conversation","request_more_info":"Request more info","donation_amount":"Contribution Amount","suspend":"Suspend","suspend_requests":"Suspend requests","no_suspend_request_found":"Sorry, no one has requested for suspension","request_for_suspension":"Request for suspension","requested_by":"Requested by","reason":"Reason","suspension_request_reason_placeholder":"Please tell us why you want to suspend this campaign?","campaign_dashboard":"Campaign Dashboard","applied_filter":"Applied Filter","start_a_new_campaign":"Start a new campaign","your_information":"Your information","on_behalf_of":"On behalf of","n_a":"N\\\\A","sorry_invalid_invitation_code":"Sorry, Invalid invitation code","maybe_you_have_already_accepted":"Maybe you have already accepted it or maybe the token has been expired","if_you_think_this_was_a_mistake":"If you think this was a mistake, please ask the fundraiser to send another invitation or contact support","subtitle":"subtitle","invitation_accepted":"Invitation accepted","the_invitation_has_been_successfully_accepted":"The invitation has been successfully accepted. You can now manage the campaign","please_click_the_following_link_to_accept":"Please, click the following link to accept your invitation as a Co-Fundraiser in","manage_campaign":"Manage campaign","logging_you_in":"Logging you in...","response_message":"responseMessage","resend_verification_link":"Resend verification link","your_email_is_not_verified_yet":"Your email is not verified yet","if_you_have_not_received_a_link_yet_click_below_button":"If you haven\'t received a link yet click the button below","sending_verification_link":"Sending verification link...","link_successfully_sent":"Link successfully sent","resend_link":"Resend link","subject_of_the_message":"Subject of the message","your_message_to_the_fundraiser":"Your message to the fundraiser","continue":"Continue","please_select_a_preset_amount_or_custom_amount":"Please select a preset amount or custom amount","sorry_something_went_wrong":"Sorry something went wrong","you_are_contributing_to":"You\'re contributing to","selected_Offer":"Selected Reward","your_card_information":"Your card information","preparing_secure_pay":"Preparing secure pay","sorry_something_went_wrong_fetching_account_id":"Sorry, something went wrong fetching account id","personal_message_from_fundriser":"Personal message from Fundriser","back_to_campaign":"Back to Campaign","select_a_tip_amount":"Select a Tip Amount","your_tip_will_help_us_help_more_people":"Your tip will help us help more people","you_can_also_give_a_similar_amount":"You can also give a similar amount tip that you are more comfortable with","you_can_upload_image":"You can upload image ( jpg, jpeg, png )","donation_tip_amount":"Contribution Tip Amount","payment":"Payment","donation_info":"Contribution info","thank_you":"Thank You","write_message_here":"Write message here","endorse":"Endorse","your_relationship_to_the_fundraiser":"Your relationship to the fundraiser","family_member_close_friend_doctor":"E.g. Family member, close friend, doctor","your_endorsement_message":"Your endorsement message","please_write_your_endorsement_message":"Please write your endorsement message","please_write_your_message":"Please write your message here","new_endorsements":"New Endorsements","submit_endorsement":"Submit Endorsement","loading_Endorsements":"Loading Endorsements","campaign_endorsements":"Campaign Endorsements","no_endorsement_found_for_this_campaign":"No Endorsement found for this campaign","view_ads_budget":"View Ads budget","settings":"Settings","reports":"Reports","User_Crowdfundly":"User@Crowdfundly","give_your_campaign_more_exposure":"Give your campaign more exposure through social media boosting","Would you like_to_allocate":"Would you like to allocate","of_your_funds_raised":"of your funds raised","for_boosting":"for boosting?","no":"No","yes":"Yes","we_will_inform_you_when_we_are":"We will inform you when we’re about to boost your campaign","ads_settings":"Ads Settings","campaign_ad_preview":"Campaign ad preview","loading_donations":"Loading Contributions","no_donation_made_yet":"No contribution made yet","no_contributions_made_yet":"No contributions made yet","write_a_note_optional":"Write a note (optional)","write_a_note_here":"Write a note Here","your_supporters_can_ask_questions":"Your supporters can ask questions or post encouragements by selecting from a list of preset chat","messages_in_your_campaign_chatroom":"messages in your campaign chatroom. You can add your answers to them so they can get a reply right away","write_preset_message_here":"Write preset message here","save_preset":"Save Preset","create_new_preset":"Create New Preset","success":"Success","failed_to_save":"Failed to save","failed_to_delete":"Failed to delete","type_your_description":"Type your description","campaign_status":"Campaign status","campaign_view":"View Campaign","submit_for_approval":"Submit for approval","campaign_title":"Campaign Title","keep_it_short_and_simple":"Keep it short and simple","campaign_category":"Campaign Category","select":"select","fundraising_target":"Fundraising Target","target_date":"Target Date","select_a_date":"Select a date","campaign_image":"Campaign Image","campaign_offers":"Campaign Rewards","campaign_Rewards":"Campaign Rewards","add_new_offer":"Add new reward","successfully_updated":"Successfully updated","successfully_saved":"Successfully saved","you_can_add_more_family_or_friends_as_fundraisers_for_this_campaign":"You can add more family or friends as fundraisers for this campaign","add_new_co_fundraiser":"Add new co-fundraiser","email_address":"email address","date_and_time":"Date / Time","address":"Address","contributor_amount":"Contributor Amount","anonymous":"Anonymous","offline_contributions":"Offline Contributions","get_an_overview":"Get an overview of how your campaign is doing so far","allow_contributions_after_raised":"Allow contributions after raised","of":"of","showing":"Showing","online_contributions":"Online Contributions","add_a_summary_of_your_campaign_to_be_printed_on_a_flyer":"Add a summary of your campaign to be printed on a flyer","last":"Last","days":"Days","the_donation_amount_your_campaign_has_received":"The contribution amount your campaign has received","thanks_for_your_help":"Thanks for your help","funding_goal":"Funding Goal","funds_raised":"Funds Raised","days_to_go":"Days To Go","set_reminder":"Set reminder","contact":"Contact","endorsements":"Endorsements","endorsement":"Endorsement","top_contributors":"Top Contributors","offer":"Reward","no_story_found":"No story found","similar_campaigns":"Similar Campaigns","all_campaign":"All Campaign","back_it":"Back It","amount_raised_successfully":"Amount Raised Successfully","target_date_exceed":"Target Date Exceed","fundraiser_will_get_a_rejection_email":"Fundraiser will get a rejection email and will see this reason on the email","enter_your_reason_for_campaign":"Enter your reason for campaign rejection.Max : 250 characters","reject_and_send_email_to_fundraiser":"Reject and send email to fundraiser","reject_campaign":"Reject Campaign","campaign_has_been_rejected":"Campaign has been rejected.The fund raiser will receive an email.Temporary notification","loading_campaign_badges":"Loading campaign badges","no_badge_found":"No badge found","badge_name":"Badge Name","based_on":"Based on","update_campaign_type":"Update campaign type","create_campaign_type":"Create new campaign type","create_campaign_type_head":"Create campaign type","campaign_type_name":"Campaign type name","campaign_type_image":"Campaign type image","update":"Update","campaign_type_updated_successfully":"Campaign type updated successfully","campaign_type_created_successfully":"Campaign type created successfully","campaign_type_deleted_successfully":"Campaign type deleted successfully","required":"required","creating":"Creating","create":"Create","update_order":"Update order","you_campaign_may_go_under_review_after_making_any_changes":"Your campaign may go under review after making any changes","reset_all":"Reset all","owner":"Owner","campaigns":"Campaigns","no_report_found":"No reports found!","report_date":"Report Date","reporter_name":"Reporter Name","reporter_email":"Reporter Email","report_details":"Report Details","details":"Details","phone":"Phone","reported_Campaign":"Reported Campaign","knows_the_organizer":"Knows the Organizer?","explained_relation":"Explained relation","reporter_describes":"Reporter describes","concern":"Concern","did_reporter_involve_in_a_legal_dispute_with_the_campaign_organizer":"Did Reporter involved in a legal dispute with the campaign organizer?","did_the_campaign_violate_giveKindness_terms_and_conditions":"Did the campaign violate GiveKindness\'s Terms and Conditions?","campaign_report":"Campaign Report","create_type":"Create Type","update_type":"Update Type","do_you_really_want_to_delete":"Do you really want to delete it?","contact_requests":"Contact requests","loading_requests":"Loading requests","crowdfundly_is_Asia_leading_free_fundraising_platform":"Crowdfundly is Asia’s leading free fundraising platform for fundraisers to raise money for their causes","report_a_campaign":"Report a campaign","per_page":"Per Page","time_in":"Time in UTC","contributor_email":"Contributor Email","ref_id":"Ref. ID","action":"Action","contributions":"Contributions","successfully_refunded":"Successfully refunded","failed_to_refund":"Failed to refund","danger":"danger","search_here":"Search here","no_fundraiser_found":"No Fundraiser Found","total_campaigns":"Total Campaigns","successful_campaigns":"Successful Campaigns","raised_amount":"Raised Amount","joined_at":"Joined at","newest":"Newest","oldest":"Oldest","please_wait_request_is_processing":"Please wait, request is processing","sorry_no_campaigns_to_show":"Sorry, no campaigns to show","assigned_at":"Assigned at","are_you_sure_you_want_to_accept":"Are you sure you want to accept","are_you_sure_you_want_to_reject":"Are you sure you want to reject","you_have_successfully_accepted_the_campaign":"You have successfully accepted the campaign","total_assigned":"Total Assigned","total_accepted":"Total Accepted","total_raised":"Total Raised","total_approved":"Total Approved","total_rejected":"Total Rejected","enable_disable":"Enable/Disable","enabled":"enabled","disabled":"Disabled","modules_updated_successfully_this_is_a_temporary_alert_system":"Modules updated successfully. This is a temporary alert system","assign_permissions":"Assign Permissions","available_modules":"Available Modules","available_permissions":"Available Permissions","withdraw_requests":"Withdraw Requests","no_withdraw_request_found":"No Withdraw Request Found!","no_withdraw_history_found":"No Withdrawal History Found!","payout_method":"Payout Method","payout_methods":"Payout Methods","attachment":"Attachment","method_name":"Method Name","sl":"SL. No.","paypal":"PayPal","active":"Active","update_method":"Update Method","delete_method":"Delete Method","no_refund_has_been_made":"No refund has been made","platform":"Platform","gateway":"Gateway","view_note":"View note","accept_request":"Accept Request","decline_request":"Decline Request","decline_refund":"Decline Refund","approve_refund":"Approve Refund","refund_note":"Refund Note","contributor_note":"Contributor\'s Note","admin_note":"Admin\'s note","successfully_declined":"Successfully declined","no_role_found":"No role found","permissions":"Permissions","enter_role_name":"Enter Role name","roles":"Roles","please_give_permissions_to_the_user":"Please give permissions to the User!","sorry_owner_and_fundraiser":"Sorry! owner and fundraiser role is not allowed","settings_payment":"Settings / Payment","you_don_have_stripe_account_connected":"You don\'t have stripe account connected","you_won_be_able_to_accept":"You won\'t be able to accept","or_can":"or can participate in any kind of","transactions":"transactions","connect_your":"Connect your stripe account to","connect":"connect","crowdfundly":"Crowdfundly","stripe":"Stripe","stripe_account_id":"Stripe account ID","loading_stripe":"loading stripe account details","verifying":"Verifying stripe account id","settings_basic":"Settings / Basic","username":"Username","crowdfundly_com":"crowdfundly.com","description":"Description","country":"Country","select_organization_country":"Select organization country","currency":"Currency","contact_number":"Contact number","select_code":"Select code","setting_basic":"Settings - Basic","setting_plan":"Settings - Plan","setting_payment_history":"Settings - Payment history","failed_to_load_data":"Failed to load data","commission_percentage":"Commission percentage","contributor_will_see_tip_presets_based_on__":"Contributor will see tip presets based on this percentage over their contribution amount","auto_approval":"Auto Approval","auto_approval_for_publishing_new_campaign":"Auto approval for publishing new campaign","auto_approval_for_updated_campaign":"Auto-approval for publishing updated campaign","allow_Refund":"Allow Refund","allow_contributor_to_request_for_refund_contributed_amount":"Allow contributor to request for the refund contribution amount","escrow":"Escrow","escrow_duration":"Escrow Duration","do_you_want_to_add_escrow_duration":"Do you want to add escrow duration?","settings_fundraiser":"Settings - Fundraiser","Setting_fundraiser":"Settings / Fundraiser","contribution_tip_percentage":"Contribution tip percentage","settings_media":"Settings / Media","setting_media":"Settings - Media","logo":"Logo","recommended_size":"Recommended size","px":"px","cover_photo":"Cover photo","favicon":"Favicon","slider_images":"Slider images","drag_and_drop_image":"Drag and drop image or click over the box for browse image. And","drop_your_images_or_click_to_Browse":"Drop your images or click to Browse","supports_JPG_JPEG_PNG":"Supports: JPG, JPEG, PNG","invalid_file":"Invalid file","are_you_sure_to_delete":"Are you sure to delete it?","settings_policies":"Settings / Policies","settings_social":"Settings / Social","settings_theme":"Settings / Theme","select_page_you_need":"Select page you need","privacy_policy":"Privacy policy","terms_conditions":"Terms & conditions","refund_policy":"Refund policy","settings_pages":"Settings - Pages","setting_social":"Settings - social","select_theme":"Select Theme","team_accounts":"Team Accounts","team_account":"Team Account","assign_member":"Assign member","looks_like_you_have_not_created":"Looks like you have not created any role yet to assign to a member. Create role(s) first to assign a member","user":"User","enter_user_email":"Enter User Email","update_member":"Update Member","looks_like_role_to_assign_to_a_member":"Looks like you have not created any role yet to assign to a member. Create role(s) first to assign a member","my_wallet":"My Wallet","new_withdrawal_request":"New Withdrawal Request","withdrawal_history":"Withdrawal History","request_send":"Request send","currencies":"Currencies","symbol":"Symbol","default_donation_presets":"Default contribution presets","loading_presets":"Loading Presets","no_default_preset_found":"No default preset found","summary":"Summary","overview":"Overview","total_fundraiser":"Total Fundraiser","total_contributions":"Total Contributions","total_contributors":"Total Contributors","total_fundraised":"Total Fundraised","approved_campaigns":"Approved Campaigns","pending_campaigns":"Pending Campaigns","raised_campaigns":"Raised Campaigns","rejected_campaigns":"Rejected Campaigns","campaign_stats":"Campaign stats","contribution_this_year":"Contribution this year","online_raised":"Online Raised","offline_raised":"Offline Raised","total_under_verification_campaigns":"Total Under Verification Campaigns","total":"Total","crowdfunding_growth":"Crowdfunding Growth","today":"Today","yesterday":"Yesterday","this_month":"This Month","this_year":"This Year","last_month":"Last Month","last_year":"Last Year","all_the_time":"All The Time","custom":"Custom","Select_date":"Select start and end date","giver_since":"Giver since ","share_this_story":"Share this story","loading_giver_story":"Loading giver story","what_motivated":"What motivated you to make your recent contribution?","to_support_a_worthy":"To support a worthy cause and try making a difference at a small level","why_did_you_choose":"Why did you choose the cause that you recently supported?","can_you_share_with_us":"Can you share with us something you have learned from your giving journey?","i_once_had_a_long":"I once had a long road to recovery and therefore truly understood how it felt when down. Every little thing makes a big difference","what_advice":"What advice will you give to people who are thinking of starting to give back?","dont_wait":"Don\'t wait. One can still provide regardless of how small. What\'s seemingly small to one may not always be to another","give_kindness":"GIVE Kindness is only possible with the help of wonderful contributors. Click on any of the contributors to read their inspiring giving stories","with_stripe":"with stripe","connect_your_stripe_account_to":"Connect your stripe account to","retry_save_offer":"Retry save reward","edit_campaign_and_manage_offer":"Edit campaign and manage reward","failed_to_save_offer":"Failed to save reward!","couldn_save_your_offer":"Couldn\'t save your reward. You can still manage the reward from the campaign edit page","your_campaign_has_been_created_successfully":"Your campaign has been created successfully but failed to save the reward. You can still manage the reward from the campaign edit page","failed_to_create_campaign":"Failed to create campaign","linked_accounts":"Linked Accounts","recent_campaigns":"Recent Campaigns","all_campaigns":"All Campaigns","create_your_organization":"Create Your Organization","organization_name":"Organization Name","enter_organization_name":"Enter organization name","length_must_be_between":"Length must be between","characters_numbers_and":"Characters, numbers and","in_middle_are_allowed":"in middle are allowed","and_20":"and 20","enter_contact_number_here":"Enter contact number here","select_template":"Select Template","template_one":"Template 1","template_two":"Template 2","i_agree_to_the":"I Agree to the","please_agree_to_terms":"Please agree to terms and conditions","invalid_username":"Invalid username. Please check username length and supported characters","verifying_your_email":"Verifying your email","failed":"Failed","choose_an_image":"Choose an Image","hello_world":"hello world","signin_with_facebook":"Sign In with Facebook","signin_with_google":"Sign In with Google","full_name":"Full Name","your_full_name":"Your full name","example_email_com":"example@email.com","example":"Example","confirm_password":"Confirm Password","sign_up":"Sign Up","profile_page":"Profile page","notifications":"Notifications","you_have_no_notification":"You have no notification","sing_in":"Sign In","get_json":"Get JSON DATA","contact_with":"Contact with","your_name":"Your Name","your_email":"Your Email","enter_your_name":"Please Enter Your Name","enter_your_email":"Please Enter Your Email","enter_your_subject":"Please Enter Your Subject","your_message_here":"Your message here","contact_with_crowdfundly":"Contact with Crowdfundly","no_campaigns_to_show":" No campaigns to show","redeem_coupon":"Redeem Coupon","to_access":"To access","subscription":"Subscription","lifetime_packages_for_app_sumo_users":"lifetime packages for AppSumo users","lifetime":"Lifetime","current_plan":"Current plan","coupon_code_here":"Coupon code here","enter_your":"Enter Your","fetching_current_plan":"Fetching current plan","sorry_limit":"Sorry, you\'ve reached your limit","add_maximum":"Add more coupons to upgrade to the next package. Maximum","applied_coupons":"Applied coupons","coupons":"Coupons","applied_for":"applied for","item_name":"Item Name","item_price":"Item Price","coupon_discount_value":"Coupon discount value","don_have_an_account":"Don\'t have an account?","already_have_an_account":"Already have an account?","subscribe":"Subscribe","update_subscription":"Update subscription","sorry_invalid_code":"Sorry, invalid coupon code","loading_subscriptions":"Loading subscriptions","plan_details":"Plan details","agency":"Agency","ends_on":"Ends on","please_provide_few_information_about_yourself":"Please provide few information about yourself","no_contribution_has_been_made":"No contribution has been made","your_plan":"Your Plan","for":"for","year":"year","your_next_bill":"Your Next Bill","payment_history":"Payment History","no_payment":"No Payment History Found!","service_period":"Service Period","profile_information":"Profile Information","profile_picture":"Profile Picture","delete_account":"Delete Account","your_story":"Your Story","Your_bio_here":"Your bio here","change_Password":"Change Password","new_password":"New Password","current_password":"Current Password","sorry_to_see_you_o":"Sorry to see you go!","please_note_that":"Please note that the owner of any campaigns you countributed will still have access to your name, email address, and any other contact information you may have provided","for_information":"For information about hoe Crowdfundly manages data, please see our","warning":"Warning: This can\'t be undone!","once_you_deactivate":"Once you deactivate your account, you will not be able to do following","log_in":"Log in","manage_contributions":"Manage Contributions","contact_campaigners":"Contact Campaigners through Crowdfundly","access_campaigns":"Access Campaigns","reactivate":"Reactivate your account","all_social_media_connections":"All social media connections, referrals, comments, and/or newsletter subscriptions will be removed","yes_deactivate":"Yes, deactivate my account","save_change":"Save Change","your_account_has_been_deleted":"Your account has been deleted","about_me":"About Me","campaigns_so_far":"Campaigns I\'ve contributed so far","no_campaigns":"No campaigns Found","something":"something","new":"new","you_are_currently_subscribed_to":"You are currently subscribed to","have_a_coupon":"Have a coupon?","note_that":"Note: You can not downgrade and please make sure you are not trying to upgrade to the same plan","please_provide":"Please provide your card information","please_select_a_plan":"Please select a plan","completed_secure":"Completed secure payment. Setting you up for crowdfundly.io. Please wait","couldn_complete_payment":"Couldn\'t complete payment","choose_package":"Choose Package","organization":"Organization","organizations":"Organization/s","your_fullname":"Your Full Name","price":"price","package_name":"Package Name","please_select_package":"Please select a package","package_information":"Package Information","setting_you_up":"Setting you up for crowdfundly.io","congratulations":"Congratulations!","payment_successful":"Payment successful","set_my_new_password":"Set my new password","you_can_now":"You can now use your new password to log in into your account","forgot_password":"Forgot password?","enter_the_email":"Enter the email associated with your account. We will send you instructions to reset your password","your_account_email":"Your account email","you_can_still":"You can still contribute anonymously","browse_campaigns":"Browse campaigns","member_name":"Member Name","we_make_a_living":"We make a living by what we get, but we make a life by what we give","winston_churchill":"Winston Churchill","we_believe_that":"We believe that compassion exists in every human being","seek_help":"We believe that anyone in need should be able to seek help","everyone_has":"We believe that everyone has the capacity to give","contented_life":"We believe that giving is the key to a contented life","why_we_exist":"This is why we exist","where_you_can_help":"This is where you can help","crowdfundly_family":"Crowdfundly Family","we_on_a":"We’re on a mission to democratise giving","at_crowdfundly":"At Crowdfundly, we believe in harnessing human compassion and kindness for people in need.Crowdfundly helps patients with hospital bills and enables children to study in rural areas.Crowdfundly helps event organisers raise funds for causes. Crowdfundly provides support for humanitarian effort for countries in need","your_dream_job":"Get Discovered by Top Employer and Grab Your Dream Job","tracking_system":"Find your dream jobs through the best applicant tracking system","enter_password":"Enter Your Password","enter_full_name":"Enter Full Name","why_you_want_to":"Why you want to ","fundraiser_your_note":"Fundraiser will be notified with your note","campaign_analytics":"Campaign Analytics","statistics":"Statistics","campaign_management":"Campaign Management","thank_you_message":"Thank you message","add_offline_donation":"Add Offline Contribution","write_contributor_address_here":"Write contributor address here","donation":"Contribution","is_anonymous":"Is anonymous","has_endorsed_as_a":"has endorsed as a","no_offer_found":"No reward found","add_a_new_update_to_this_campaign":"Add a new update to this campaign","video":"Video","add_video":"Add Video","post_update":"Post Update","campaign_update":"Campaign update created successfully","campaign_updated":"Campaign update has been deleted successfully","post_an_update__":"Post an update about your campaign to contributors and page visitors","no_updates_found":"No Update Found","give_baby_cheryl":"Give baby Cheryl a fighting chance 2020","back_this_campaign":"Back this campaign","contributions_are_not":"Contributions are not associated with perks","select_a_donation_amount":"Select a Contribution Amount","you_can_also_contribute":"You can also contribute a similar amount that you are more comfortable with. Every little bit helps!","you_contributing_Crowdfundly":"You\'re contributing to Third campaign from Naim foundation via Crowdfundly","maximum_250_characters":"Maximum 250 Characters","you_can_also_contribute_a_similar":"You can also contribute a similar amount that you are more comfortable with. Every little bit helps!","avatar":"Avatar","give_anonymously":"Give Anonymously?","click_to_payment":"Click To Payment","share_with_facebook":"Share With Facebook Friends About This Campaign?","endorse_campaign":"Endorse Campaign","your_fundraiser":"Your Relationship With Fundraiser","you_endorsement_message":"You Endorsement Message","pre_acceptance":"Pre-acceptance","assign":"Assign","are_you_sure__":"You want to approve this campaign?","share_this_campaign":"Share this campaign","a_single_share":"A single share from you will usually lead to at least one contribution. Sharing this campaign only take 10 seconds","share_facebook":"Share On Facebook","share_whatsapp":"Share On Whatsapp","share_twitter":"Share On Twitter","share_linkedin":"Share On LinkedIn","or_print":"Or print out this flyer and help spread the world","be_the_first":"Be the first to contribute to this campaign!","verified_by":"Verified By","endorsed_by":"Endorsed By","facebook_verified":"Facebook Verified","donations_will_go_to":"Contributions will go to","via":"via","download_flyer":"Download The PDF Flyer","all":"All","submitted":"Submitted","requested":"Requested","the_campaign":"You have successfully accepted the campaign","add_new_opinion":"Add New Opinion","to_contact":"to contact with fundraiser & contributors","dont_give_up":"Don\'t Give up, All the best","all_the_best":"All the best! Don\'t give up!","someone_is_typing":"Someone is typing","drafted":"Drafted","total_refunds":"Total Refunds","in_minutes":"Start by creating a fundraising campaign in minutes","let_present":"Let\'s present the reward(s)","save_to_draft":"Save to draft","are_you_sure_once__":"Once the reward is deleted, can not be undone!","choose_your_campaign_category":"Choose your campaign category","cant_find_your_suitable_category":"Can\'t find your suitable category?","request_new_category":"Request New Category!","back":"Back","next":"Next","campaign_gallery":"Now it\'s time to set up a campaign gallery","request_for_a_new_category":"If you don\'t find your suitable category, you can request a new category","category_name":"Category Name","why_you_suggest":"Why did you suggest the category? (optional)","make_request":"Make request","now":"Now it\'s time to tell your story","sweet":"Sweet! Now set a fundraising target for your campaign","hope_up_well":"Hope you\'re holding up well","view_story":"View Story","be_happy_be_kind":"Be happy, Be kind","let_crowdFundly_assist_you":"Let CrowdFundly Assist you","contributed":"Contributed","loading_giver_stories":"Loading giver stories","life_will":"Life will be more meaningful to have a charitable heart","start_with":"Start with any amount that you are comfortable with. You’ll feel good when you can help people in need.. I choose to contribute to feel good","dont_wait_one":"Don\'t wait. One can still provide regardless of how small. What\'s seemingly small to one may not always be to another. I contribute not because I\'m rich but because I understand how life is feeling good","one_can_still_provide":"One can still provide regardless how small. Whats seemingly small to one may not always be to another.. I contribute not because","life_will_be_more":"Life will be more meaningful to have a charitable heart. When you show kindness, kindness will come back to you too, that’s the","crowdfundly_has_been_featured_in":"Crowdfundly has been featured in","emergency":"Emergency","please_contribute":"Please Contribute","givers":"givers","loading_successful_campaigns":"Loading successful campaigns","see_more":"See More","submit_an_opinion":"Submit an opinion","opinion":"opinion","your_opinion_here":"Your opinion here","loading_opinions":"Loading opinions","offer_title":"Reward title","enter_offer_title":"Enter reward title","regular_price":"Regular price","offer_price":"Reward price","stock":"Stock","shipping":"Shipping","add_new_location":"Add New Location","shipping_location":"Shipping location","shipping_fee":"Shipping fee","describe_offer":"Describe reward","offer_regular_price":"Reward price can\'t be more than Regular price","shipping_locations":"Please select at least one shipping location!","successfully_offer_added":"Successfully reward added","select_shipping_location":"Select shipping location","off":"OFF","why_refund":"Why you wanted refund","loading_timeline":"Loading timeline","to":"To","monthly":"Monthly","yearly":"Yearly","month":"Month","free":"free","plan_a":"Plan A","plan_b":"Plan B","selected":"Selected","upgrade":"upgrade","get_now":"Get Now","contribution":"Contribution","you_are_contributing":"You are contributing","contribution_info":"Contribution info","select_a_contribution_amount":"Select a Contribution Amount","contributions_are_not_associated_with_perks":"Contributions are not associated with perks","view_campaign":"View Campaign","join_our_subscriber_list_to_get_the_latest_news_update_special_you_inbox":"Join our subscriber list to get the latest news. Update special you inbox","browse":"Browse","faq":"FAQ","add_organization":"Add organization","my_profile":"My profile","enter_username":"Enter Username","enter_org_username":"Enter organization username","looks_like_you_have_not_created_any_role_yet_to_assign_to_a_member_create_role_first_to_assign_a_member":"Looks like you have not created any role yet to assign to a member. Create role(s) first to assign a member","user_email":"User Email","check_all":"Check All","update_role":"Update role","bank":"Bank","wallet":"Wallet","payouts_history":"Payouts History","no_attachment":"No attachment","no_contributions_have_been_made":"No Contributions have been made","contributed_anonymously":"Contributed Anonymously","select_campaign_type":"Select campaign type","contribution_amount":"Contribution Amount","startup":"Startup","business":"Business","move_up":"Move Up","move_down":"move Down","upload_image":"Upload Image","recommended_resolution_700_x_700_px_minimum_resolution_400_x_400_px":"Recommended resolution 700 x 700 px, Minimum resolution 400 x 400 px","kindness_level_will_go_up_as_you_participate_on_crowdfundly_by_contributing":"Kindness Level will go up as you participate on Crowdfundly by contributing","request_for_refund":"Request for refund","i_want_refund_because":"I want refund because","select_payout_method":"Select Payout Method","paypal_email":"PayPal Email","enter_your_paypal_email":"Enter your PayPal email","beneficiary_name":"Beneficiary Name","account_number":"Account Number","bank_name":"Bank Name","branch_name":"Branch Name","enter":"Enter","swift_code":"SWIFT Code","bangladesh":"bangladesh","other":"Other","select_country":"Select Country","payout_information":"Payout Information","requested_date":" Requested Date","last_updated_at":"Last Updated At","upload_an_attachment":"Upload An Attachment","for_business":"Reward Based Campaign","for_charity":"Donation Based Campaign","now_you_can_choose_how_you_want_to_run_your_campaign_selected_one_can_not_be_changed":"Now you can choose how you want to run your campaign. The selected one can not be changed","this_creates_urgency_and_should_always_be_used_when_money_is_needed_before_a_certain_time":"This creates urgency and should always be used when money is needed before a certain time","now_you_can_choose_how_you_want_to_run_your_campaign__":"Now you can choose how you want to run your campaign. It can\'t be changed after creation.","ongoing_fundraise":"Ongoing ( no deadline ) fundraise","this_should_be_used_if_you_are_collecting_money_on_a_regular_basis":"This should be used if you are collecting money on a regular basis","has_contributed":"has contributed","has_contributed_offline":"has contributed offline","contribute_now":"Contribute Now","sorry_you_didn_t_contribute_any_campaign_yet":"Sorry, you didn\'t contribute any campaign yet","online":"Online","offline":"Offline","wallet_payout":"Wallet & Payout","team":"Team","view_organization":"View organization","contribution_preset_page_description":"If you really want to hit your fundraising target, you should customize your contribution preset amounts below.👇 </br> You can set the preset amounts for the contributions and explain what that amount means to your cause. It will help contributor visualize how their money can help you","sent_by_organization":"Sent By Organization","received_by_fundraiser":"Received By Fundraiser","organization_not_found":"Organization not found!","i_have_contributed":"I have contributed","times":"times","i_have_raised_contribution_for":"I have raised contribution for","i_am_contributing_since":"I\'m contributing since","the_page_you_requested_could_not_be_found":"The page you requested could not be found","contact_fundraiser":"Contact Fundraiser","offer_image":"Reward image","relies_on_your_generosity__":"relies on your generosity to continue providing 0% platform fee for fundraisers","write_your_message_here":"Write your message here","choose_a_payment_option":"Choose a Payment Option","debit_or_credit_card":"Debit or Credit Card","sorry_payment_failed":"Sorry! Payment Failed","something_went_wrong_with_your_payment":"Something went wrong with your payment","redirecting_to_campaign":"Redirecting To Campaign","tip":"Tip","shipping_cost":"Shipping Cost","cant_process_stripe_now":"Can\'t process Stripe now","cant_process_paypal_now":"Cant process PayPal now","cant_process_aamarpay_now":"Cant process Aamarpay now","cant_process_sslcommerz_now":"Cant process sslcommerz now","try_other_payment_options":"Try other payment options","error_making_card_mount":"Error making card mount","contribution_tip_amount":"Contribution Tip Amount","image_uploader":"Image uploader","banner_image":"Banner Image","amount_preset":"Amount Preset","campaign_type":"Campaign Type","save_and_preview_campaign":"Save and preview campaign","are_you_sure_to_publish_once_published_it_will_open_for_contribution":"Once published it will open for contribution","fundraiser_image":"Fundraiser image","report_this_campaign":"Report This Campaign","the_following_are_examples_of_fraudulent_activities-on_crowdfundly":"The following are examples of fraudulent activities on Crowdfundly","breaking_the_law":"Breaking the law","misrepresenting_ones_identity_and_lying__":"Misrepresenting one\'s identity and lying about the relationship with the beneficiary of the campaign","posting_misleading_statements_on_the_campaign":"Posting misleading statements on the campaign","not_sending_the_raised_funds_to_the_stated_beneficiary":"Not sending the raised funds to the stated beneficiary","sometimes_there_may_be_situations__":"Sometimes, there may be situations which may arise doubts but are not considered fraudulent activities on our platform like","rumors_or_speculations_of_fraud":"Rumors or speculations of fraud","disagreement_with_the_nature__":"Disagreement with the nature of the campaign or the character of the campaign organizer","custody_or_familial_disputes_and_disagreements":"Custody or familial disputes and disagreements","to_report_a_campaign_for_fraud__":"To report a campaign for fraud on Crowdfundly, please fill and submit the form below","enter_your_full_name":"Enter your full name","your_phone_number":"Your phone number","enter_your_phone_number":"Enter your phone number","required_in_case_our_team_needs__":"Required in case our team needs to contact you for further details","your_email_number":"Your email address","enter_your_email_address":"Enter your email address","do_you_know_the_campaign_organizer":"Do you know the campaign organizer?","please_explain_your_relationship_to_the_campaign_or_campaign_organizer":"Please explain your relationship to the campaign or campaign organizer","write_here":"Write here","which_best_describes_you":"Which best describes you?","describe_your_concerns_about_this_campaign":"Describe your concerns about this campaign","are_you_involved_in_a_legal_dispute_with_the_campaign_organizer":"Are you involved in a legal dispute with the campaign organizer?","does_the_campaign_violate_crowdfundlys_terms_and_conditions":"Does the campaign violate Crowdfundly\'s terms and conditions?","unable_to_prepare_data":"Unable to prepare data!","flyer_campaign_summary":"Flyer campaign summary","contribution_amount_in":"Contribution Amount in","contribution_amount_in_last_30_days":"Contribution Amount in last 30 days","total_contribution_amount":"Total Contribution Amount","set_a_thank_you_message_to_contributor":"Set a thank you message to contributor","save_message":"Save Message","fundraiser_avatar":"Fundraiser avatar","you_can_contribute_after_publishing_the_campaign":"You can contribute after publishing the campaign","select_a_offer":"Select a reward","chat_with_fundraiser_and_contributors":"Chat with fundraiser & contributors","start_chat":"Start chat","you_can_chat_with_the_fundraiser_after_publishing_the_campaign":"You can chat with the fundraiser after publishing the campaign","reason_for_campaign_rejection":"Reason for campaign rejection","successfully_created":"Successfully created","from":"From","failed_to_save_offers":"Failed to save rewards!","your_campaign_has_been_created_successfully_but_failed_to_save_offers":"Your campaign has been created successfully but failed to save rewards","slider_image":"Slider image","organization_logo":"Organization logo","allowed_text_organization_user_name":"and 20. Characters, numbers and \'-\' in middle are allowed","write_organization_address_here":"Write organization address here","write_organization_description_here":"Write organization description here","code":"Code","apply_your_coupon_code_to_get_an_discount":"Apply your coupon code to get a discount","please_fill_in_all_the_fields":"Please fill in all the fields","pay_now":"Pay now","packages":"Packages","subscribe_now":"Subscribe Now","subscriptions":"Subscriptions","coupon_code":"Coupon Code","downgrade":"Downgrade","type_your_name_here":"Type your name here","type_your_email_address":"Type your email address","billing_information":"Billing Information","saved_cards":"Saved Cards","saved_card":"Saved Card","card_information":"Card Information","refund_request":"Refund request","i_have_changed_my_mind":"I have changed my mind","copied_to_clipboard":"Copied to clipboard","apply_coupon":"Apply Coupon","change_coupon":"Change Coupon","coupon":"Coupon","remove":"Remove","password":"Password","authenticating":"Authenticating","sorry_you_have_reached_your_limit":"Sorry, you\'ve reached your limit","add_more_coupon_to_upgrade_to_next_package":"Add more coupons to upgrade to the next package. Maximum","add_new_campaign":"Add New Campaign","most_contributed":"Most Contributed","view_profile":"View Profile","view_campaigns":"View Campaigns","available_roles":"Available Roles","modules":"Modules","total_earned":"Total Earned","available_amount":"Available Amount","total_paid":"Total Paid","total_withdrawn":"Total Withdrawn","pending_payouts":"Pending Payouts","wallet_not_found":"Wallet not found!","mark_as_received":"Mark as received","reloading":"Reloading","accepting_payout_request_means__":"Accepting payout request means you will delivery the payment afterward","add_new_payout_method":"Add New Payout Method","view_details":"View Details","method_saved":"Method saved","method_updated":"Method updated","add_role":"Add Role","successfully_role_added":"Successfully new role added","successfully_role_updated":"Successfully role updated","allow_tip":"Allow Tip","allow_tip_during_contribution":"Allow tips during contribution?","without_connecting_stripe_payment":"without connecting stripe payment","personal_stripe_credentials":"Personal Stripe Credentials","stripe_connect_credentials":"Stripe Connect Credentials","we_will_keep_your_credentials_totally_encrypted":"We will keep your credentials totally encrypted!","learn_more":"Learn More?","stripe_key":"Stripe Key","stripe_secret":"Stripe Secret","sslcommerz_credentials":"SSLCommerz Credentials","your_credentials_always_safe_at__":"Your credentials are always safe at Crowdfundly. We use end to end encryption and encrypted on the database as well","store_id":"Store ID","store_password":"Store Password","paypal_credentials":"PayPal Credentials","client_id":"Client ID","client_secret":"Client Secret","about_sslcommerz":"About SSLCommerz","close":"Close","about_paypal":"About PayPal","about_stripe":"About Stripe","settings_crowdfunding":"Settings / Crowdfunding","choose_logo":"Choose Logo","choose_favicon":"Choose Favicon","choose_cover_photo":"Choose Cover Photo","gallery_preview":"Gallery preview","select_social_type":"Select social type","theme":"Theme","no_team_account_found":"No team account found","not_set_yet":"Not set yet","take_me_to_create_a_role":"Take me to create a role","successfully_role_deleted":"Successfully role deleted","available_for_withdrawal":"Available For Withdrawal","total_fund_raised":"Total Fund-raised","pending_clearance":"Pending Clearance","paid":"Paid","available_currencies":"Available currencies","base_currency":"Base Currency","currencies_are_loading":"Currencies are loading","total_publish_campaigns":"Total Published Campaigns","total_payout":"Total Payout","total_pending_clearance":"Total Pending Clearance","available_to_payout":"Available to payout","revenue":"Revenue","total_revenue":"Total Revenue","total_tip_amount":"Total Tip Amount","total_org_commission":"Total Org. Commission","select_a_start_and_end_date":"Select a start and end date","last_7_days":"Last 7 days","last_seven_day":"Last 7 days","please_select_a_date_range":"Please select a date range","total_payouts":"Total Payouts","contribution_preset_amounts":"Contribution preset amounts","brochure":"Brochure","menu_item":"Menu item","yes_confirm":"Yes, Confirm","no_cancel":"No, Cancel","mark_all_as_read":"Mark all as read","marking_all_as_read":"Marking all as read","you_have_no_new_notification":"You have no new notification","view_all_notifications":"View all notifications","loading_notifications":"Loading notifications","no_data_found":"No data found","select_an_option":"Select an option","user_avatar":"User Avatar","version":"Version","last_updated":"Last updated","menu_icon":"Menu icon","view_org":"View Org.","view_public_page":"View public page","delete_organization":"Delete Organization","all_the_data_associated_with__":"All the data associated with the organization will be deleted.","name_doesnt_match":"Name doesn\'t match","organization_deleted":"Organization deleted","animated_icon":"Animated icon","copyright":"Copyright ©","powered_by":"Powered By","browse_all_campaign":"Browse All Campaign","plan":"Plan","all_plans":"All Plans","billing":"Billing","fundraiser_can_still_resubmit_campaign":"Fundraiser can still resubmit campaign","share_your_updates":"Share your updates!","remove_icon":"Remove icon","enter_video_url":"Enter video URL","post_an_update":"Post An Update","make_a_contribution":"Make a contribution","select_a_perk":"Select a Perk","i_donate_because":"I donate because","e_g_family_member_friend_etc":"E.g.Family member, friend, etc","please_write_your_endorsement_message_here":"Please write your endorsement message here","verify_and_publish":"Verify & Publish","the_campaign_will_be_closed__":"The campaign will be closed and fundraiser will not be able to take any further action","we_will_send_you_an_email_to_reminding_you__":"We will send you an email to reminding you to make contribution later. Select when should we remind you","thanks_for_sharing":"Thanks for sharing","badge":"Badge","verified":"Verified","no_story_available":"No story available","loading_messages":"Loading messages","icon":"Icon","create_new":"Create New","this_website_uses_cookies_in_oder__":"This website uses cookies in order to allow you to experience the optimal performance of this website","allow_cookie":"Allow Cookies","publish_your_campaign":"Publish your campaign","search_category":"Search Category","what_are_you_crowdfunding_for_you":"You\'re fundraising for?","project_venture_etc":"E.g. Project, Venture","charitable_causes":"E.g. Non-profitable causes","fundraising_type":"Fundraising type","cancel":"Cancel","crop":"Crop","image_size_is_too_large__":"Image size is too large, Please resize the image or provide image less than","choose_image":"Choose Image","select_payment_method":"Select Payment Method","write_note_here":"Write note here","create_new_campaign_offer":"Create a new campaign reward","create_offer":"Create Reward","worldwide":"Worldwide","offer_price_exceeded_regular_price":"The reward price exceeded the regular price!","all_claimed":"All Claimed","only":"Only","left":"left","sold_out":"Sold Out","update_campaign_offer":"Update campaign reward","update_offer":"Update Reward","basic":"Basic","media":"Media","policies":"Policies","social":"Social","crowdfunding":"Crowdfunding","select_bank_country":"Select Bank country","update_payout_method":"Update Payout Method","update_withdrawal_request":"Update Withdrawal Request","shares":"Shares","no_donation_selected":"No contribution selected","successfully_requested":"Successfully requested","once_you_delete_organization__":"Once you delete the organization, you will not be able to do the following:","access_organisation":"Access Organisation","access_fundraisers":"Access Fundraisers","access_financial_data":"Access Financial Data","retrieve_organization_settings":"Retrieve Organization Settings","retrieve_organization":"Reactivate organization","more_information":"More information","yes_delete_organization":"Yes, delete organization","selected_image":"Selected image","drag_and_drop_a_photo_to_upload_or_tap_to_upload":"Drag and drop a photo to upload or tap to upload","uploading_image":"Uploading image","want_to_delete_this_block":"Want to delete this block?","hide":"Hide","failed_to_process_image__":"Failed to process image. Please try again later or inform us","signin_with_linkedin":"Sign In with Linkedin","campaign_duration":"Campaign Duration","select_category":"Select Category","subscription_expires_at":"Subscription expires at","cancel_subscription":"Cancel subscription","signed_in_as":"Signed in as","user_details":"User details","unsubscribed_successfully_logging_you_out":"Unsubscribed Successfully! Logging you out...","unsubscribed_successfully":"Unsubscribed Successfully!","setting_up_your_account":"Setting up your account","your_account_has_been_set_successfully":"Your account has been set successfully","no_plan_found":"No plan found","redirecting_to_stripe_checkout":"Redirecting to Stripe Checkout","congratulation_your_package_plan_has_been_updated":"Congratulation! Your Package plan has been updated","no_card_found":"No Card Found","exp":"Exp","you_havent_made_any_payment_yet":"You haven\'t made any payment yet!","billing_reason":"Billing reason","card_updated_successfully":"Card updated successfully","sorry_can_not_update_card":"Sorry, can not update card","net_earning":"Net Earning","withdrawn":"Withdrawn","available_to_pay":"Available to Pay","received_tip":"Received Tip","received_fee":"Received Fee","url":"URL","wallet_and_payouts":"Wallet & Payouts","your_expected_category_name":"Your expected category name","reason_you_request_the_category":"Reason you request the category","start_crowdfunding_with_greatly__":"Start crowdfunding with greatly optimized fundraising process","welcome_to_world_of_opportunities__":"Welcome to the world of opportunities of collaboration","verification":"Verification","reset":"Reset","stripe_connect":"Stripe - Business","documentation":"Documentation","active_campaign":"Active Campaigns","team_members":"Team Members","change_personal_stripe_credential":"Change Personal Stripe Credentials","change_sslcommerz_credential":"Change Sslcommerz Credentials","change_paypal_credential":"Change PayPal API Keys","you_can_not_endorse_in_this_campaign":"You can\'t endorse in this campaign","ssl_commerz":"SSLCommerz","awaiting_fundraiser_approval":"Awaiting fundraiser approval","refunded":"Refunded","cancelled":"Canceled","fundraiser_accepted":"Fundraiser Accepted","fundraiser_cancelled":"Fundraiser Canceled","awaiting_for_organization_approval":"Awaiting for Organization approval","payout_details":"Payout Details","denial_note":"Denial Note","payment_method":"Payment Method","add_denial_note_and_confirm":"Add denial note and confirm","add_attachment":"Add Attachment","mark_as_sent":"Mark as sent","your_payment_will_be__":"Your Payment will be upgraded and you cannot be able to downgrade this. For more details","visit_our_payment_policy":"visit our Payment policy","you_have":"You have","new_notifications":"new notifications","payout_method_details":"Payout Method Details","updated_at":"Updated at","save_campaign":"Save campaign","create_organization":"Create Organization","update_card":"Update Card","add_card":"Add Card","this_campaign_is_in_readonly_view_and_publicly_invisible":"This campaign is in readonly view and publicly invisible.","organization_profile":"Organization Profile","report":"Report","contribution_payment":"Contribution Payment","contribution_message":"Contribution Message","successfully":"Successfully","saved":"Saved","you_want_to_delete":"You want to delete","once_it_changed_can_not_be_undone":"Once it changed can not be undone","this":"this","login_for_best_crowdfunding_solution_with__":"Login for best crowdfunding solution with most affordable pricing.","registration_for_best_crowdfunding_solution__":"Registration for best crowdfunding solution with most affordable pricing.","available_campaign":"Available Campaign","start_fundraising_campaign_for_people_in_need__":"Start fundraising campaign for people in need and help them fight for their lives. Raise funds for Reward based campaign & Donation based campaign","subscribe_for_best_crowdfunding_solution__":"Subscribe for best crowdfunding solution with most affordable pricing.","appsumo":"AppSumo","crowdfundly_values_you_and_respects_your_privacy__":"Crowdfundly values you and respects your privacy. We collect information to support our relationship with you, improve our services, and communicate to keep you inform","reset_your_password":"Reset your password","take_a_tour":"Take a Tour","invoice":"Invoice","max":"Max","files":"Files","file":"File","images":"Images","you_can_upload_max":"You can upload max","save_reward":"Save Reward","you_are_not_able_to_make_contact":"You aren\'t able to make contact","the_campaign_is_already_closed":"The campaign is already closed","you_can_chat_after_publishing_the_campaign":"You can chat after publishing the campaign",".":".","individual":"Individual","change_stripe_api_keys":"Change Stripe API Keys","fundraise_with_a_specific_date":"Fundraise with a specific date","todays":"Today\'s","yesterdays":"Yesterday\'s","last_seven_days":"last 7 days","this_years":"This Year\'s","last_years":"Last Year\'s","this_months":"This Month\'s","last_months":"Last Month\'s","between":"Between","campaign_videos__":"Now it\'s time to set up campaign video gallery","campaign_videos":"Campaign videos","invalid_video_url__":"Invalid video URL. Please type a valid youtube or Vimeo video URL","this_video_url_already_added":"This video URL already added","enter_your_video_url_here":"Enter Vimeo or Youtube video URL here","_________00_00_0000__________":"--------------00 00 0000-----------------","about_aamarpay":"About AAMARPAY","aamarpay_credentials":"Aamarpay Credentials","change_aamarpay_credentials":"Change Aamarpay Credentials","required_for_aamarpay_payment":"Required for Aamarpay Payment","checking_availability":"Checking availability","available":"available","not_available":"not available","selected_offer":"Selected Reward","customer_details":"Customer Details","offer_details":"Reward Details","fee":"Fee","organization_fee":"Organization fee","payment_gateway_fee":"Payment gateway fee","goto_dashboard":"Goto Dashboard","public_preview":"Public Preview","your_campaign_was_successfully":"Your campaign was successfully","create_another":"Create another","do_you_want_to_resize":"Do you want to resize?","you_are_trying_to_upload_an_image_of_gif__":"You are trying to upload an image of .gif format. There wouldn\'t be any animation after resizing the image.","i_want_to_resize":"I want to resize","resize":"Resize","upload_without_resize":"Upload without resize","campaign_gallery_title":"Campaign Gallery","you_have_to_upgrade_your_plan__":"You have to upgrade your plan to access this feature","oops":"Oops","ok":"Ok","you_may_upload_max":"You may upload max","items_in_campaign_gallery":"item in campaign gallery","you_can_create_max":"You can create max","reward_under_a_campaign":"reward under a campaign","login_":"Crowdfundly | Login","registration_":"Crowdfundly | Registration","verify":"Verify","successfully_team_account_added":"Successfully team account added","subscription_expired":"Subscription Expired","your_subscription_is_expired__":"Your subscription is expired, You have to","_your_plan":"your plan","renew_subscription":"Renew Subscription","view_invoice":"View Invoice","upload_more":"Upload More","you_have_already_endorsed_this_campaign":"You have already endorsed this campaign","error":"Error","you_want_to_cancel_the_subscription":"You want to cancel the subscription","successfully_team_account_deleted":"Team account was deleted successfully","custom_domain":"Custom domain","settings_custom_domain":"Settings / Custom-domain","in_order_to_use_domain_subdomain_you_need_to__":"In order to use domain/subdomain you need to make CNAME entries in the DNS settings of the domain","add_your":"Add your","hostname":"hostname","is_an_alias_of":"is an alias of","campaign_not_published_yet":"Campaign not published yet!","lifetime_subscription":"Lifetime Deal","all_ltd_coupons":"All LTD Licenses","no_coupon_found":"No coupon found!","purchase_date":"Purchase Date","redeem_at":"Redeem At","coupon_status":"Coupon Status","redeem_ltd_coupon":"Redeem LTD Coupon","redeem_your_ltd_coupon":"Redeem Your LTD Coupon","recurring_donation":"Recurring Donation","one_time_purchase_of":"One Time Purchase of","lifetime_packages":"lifetime deals","ltd_coupon_code_here":"LTD Coupon code here","redeem_now":"Redeem Now","list_of_subscriptions":"List of Subscriptions","subscription_not_found":"Subscription not found!","plan_name":"Plan name","subscribed_at":"Subscribed at","add_new_org":"Add New Org.","quantity":"Quantity","cart_information":"Cart information","payment_information":"Payment information","subtotal":"Subtotal","coupon_discount":"Coupon discount","add_new_organization":"Add new organization","use_and_add_new_organization":"Use and add new organization","transfer_to_other":"Transfer to other","upgrade_subscription":"Upgrade subscription","grand_total":"Grand Total","get_plan":"Get Plan","get_pricing":"Get Pricing","custom_price":"Custom Price","select_currency":"Select currency","successfully_campaign_published":"Successfully campaign published","successfully_campaign_updated":"Successfully campaign updated","ltd_packages":"LTD Packages","metered_packages":"Metered Packages","you_can_not_upgrade_or_change_your_ltd_package":"You can\'t upgrade to change your LTD package","you_currently_using_this_ltd_package":"You currently using this LTD package","add_to_cart":"Add To Cart","in_cart":"in cart","payment_details":"Payment details","we_will_charge_50_cent__":"We will charge 50 cent ($0.50) for completing your subscription","please_select_a_package":"Please select a package","back_to_home":"Back to Home","app_key":"App key","label":"Label","no_app_key_found":"No App Key found","generate_new_app_key":"Generate New App Key","generate_app_key":"Generate App Key","write_app_key_label":"Write app key label","generate":"Generate","successfully_new_key_generated":"Successfully new key generated","yes_continue":"Yes, Continue","password_must_be_a_minimum_of_6_characters":"Password must be a minimum of 6 characters","generated_successfully":"Generated successfully!","your_payment_should_be_completed_and_the__":"Your payment should be completed and the license will be purchased. You\'ll be notified upon confirmation","transfer_coupon":"Transfer coupon","i_acknowledge_that_i_eagerly_want_to_transfer__":"I acknowledge that I eagerly want to transfer this coupon to another user.","you_have_to_acknowledge_that_you_eagerly_want__":"You have to acknowledge that, you eagerly want to transfer this coupon to another user.","i_acknowledge":"I acknowledge","loading_packages":"Loading Packages","checking_current_subscription_type":"Checking current subscription type","refund":"Refund","page_not_found":"Page not found","max_200_characters":"max 200 characters","successfully_used_and_subscribed":"Successfully used and subscribed!","license_successfully_transferred_to":"License successfully transferred to","could_not_complete_your_payment":"Couldn\'t complete your payment","your_payment_should_be_completed_and__":"Your payment should be completed and the licence will be purchased. You\'ll be notified upon confirmation","starting_at":"Starting at","upcoming":"Upcoming","24_7_support":"24/7 Support","support":"Support","limited":"Limited","regular":"Regular","priority":"Priority","free_forever":"Free Forever","paid_monthly":"Paid Monthly","mo":"mo","choose_your_exclusive_lifetime_deal":"Choose Your Exclusive LIFETIME Deal 🎁","licences":"licence(s)","view_pay_per_use_policy":"View pay per use policy","ownership_of_individual_licenses_transferable":"Ownership of individual licenses transferable.","explore_more":"Explore More.","unused":"unused","unredeemed":"unredeemed","selected_plan_id":"Selected plan id","all_ltd_licenses":"All LTD Licenses","no_license_found":"No license found","license_id":"License ID","used_at":"Used At","license_status":"License Status","transfer_license":"Transfer License","you_can_not_change_the_currency_after_the_organization_is_created":"You can\'t change the currency after the organization is created.","never":"Never","ltd_license_is_not_upgradable__":"LTD License isn\'t upgradable. But still, you have the chance to purchase another LTD license.","please_add_denial_note":"Please add denial note","no_payout_method_found":"No Payout Method Found!","upgrade_now":"Upgrade Now","a_charge_may_apply_based_on_usage__":"A charge may apply based on usage at the end of your billing period.","check_usage_pricing":"Check usage pricing","image_watermark":"Image watermark","donation_refund":"Donation refund","donation_tips":"Donation tips","branded_company_name":"Branded company name","set_remainder":"Set reminder","insight_data":"Insight data","real_time_chat":"Real time chat","system_commission":"System commission","tip_preset":"Tip preset","post_updates":"Post updates","custom_thank_you_message":"Custom thank you message","donation_preset":"Donation preset","offline_donations":"Offline donations","custom_campaign_flyer":"Custom campaign flyer","smart_notification":"Smart notification","anonymous_donation":"Anonymous donation","guest_donations":"Guest donations","donation_on_behalf_of":"Donation on behalf of","social_sharing":"Social sharing","multi_currency":"Multi currency","slack_notification":"Slack notification","crowdfundly_pricing":"Crowdfundly Pricing","super_flexible_and_affordable_price_plan":"Super Flexible & Affordable Price Plan","start_any_plan_for_free__":"Start any plan for FREE. We offer post-paid billing based on usages.","how_much_you_can_raise_per_month":"How much you can raise per month?","usd_or_equivalent":"USD or Equivalent","sign_up_now":"Sign Up Now","paid_monthly_usd":"Paid monthly (USD)","per_donation":"per donation","how_to_manage_campaign":"How to manage campaign","create_reward_based_campaign":"Create Reward Based Campaign","create_donation_based_campaign":"Create Donation Based Campaign","how_to_check_online_contributions":"How To Check Online contributions","how_to_check_offline_contributions":"How To Check Offline contributions","how_to_add_offline_contributions":"How To Add Offline contributions","how_to_create_and_manage_team_members":"How To Create And Manage Team Members","how_to_create_and_manage_roles":"How To Create And Manage Roles","how_to_configure_organization_basic_information":"How to Configure Organization Basic Information","how_to_configure_stripe":"How To Configure Stripe","how_to_configure_paypal":"How To Configure PayPal","how_to_set_commission":"How To Set Commission","how_to_configure_campaign_verification_process":"How To Configure Campaign Verification Process","how_to_enable_and_set_escrow_duration":"How To Enable And Set Escrow Duration","how_to_configure_refund_settings":"How To Configure Refund Settings","use_existing_licence":"Use existing licence","create_org_under_unused_subscription":"Create org under unused subscription","manage_campaigns":"Manage campaigns","accounts":"accounts","manage_payment":"Manage Payment","click_here_to_manage_your_payment_settings":"Click here to manage your payment settings.","your_next_billing_date":"Your next billing date ","campaign_s":"Campaign(s)","contribution_s":"Contribution(s)","share_s":"Share(s)","team_member_already_exists":"Team member already exists.","image_size_too_large":"Image size is too large, Please give lower size image","and":"And","max_files":"Max files","organization_updated":"Organization Updated.","multiple_selection_not_supported_please_select_single_file":"Multiple selection not supported, please select single file.","gif_file_not_supported_here__":"GIF file not supported here, Please select other format image.","gallery_image_uploaded":"gallery image uploaded.","build_a_platform_that_you_can_be_proud_of":"Build a platform that you can be proud of","early_access_users_only":"Early Access Users Only","we_greatly_appreciate_your_participation":"We greatly appreciate your participation.","do_not_have_an_account":"Don’t have an account?","hey_create_your_organization_first":"Hey, 👋 Create your organization first.","didn_t_contribute_any_campaign_yet":"didn\'t contribute to any campaign yet","you":"you","me":"Me","contributed_so_far":"contributed so far","i_have":"I\'ve","examples_of_some_activities_that_may_considered_as_fraudulent":"Examples of some activities that may considered as fraudulent","breaking_the_rules":"Breaking the rules.","lying_about_the_benefactor_of_the_publicity__":"Lying about the benefactor of the publicity and misrepresenting someone\'s identity.","posted_with_misleading_statements_in_the_campaign":"Posted with misleading statements in the campaign.","does_not_send_timely_funding_to_the_stated_beneficiary_etc":"Does not send timely funding to the stated beneficiary etc.","select_a_Plan":"Select a Plan","by_creating_an_account":"By creating an account,","i_accept_the":"I accept the","terms":"terms","privacy":"privacy","conditions":"conditions","remove_payment_method":"Disconnect Payment Method","got_it":"Got It","other_information":"Other Information","additional_information":"Additional Information","add_new_field":"Add New Field","section_title":"Section Title","enter_section_title":"Enter section title","donation_campaign":"Donation Campaign","reward_campaign":"Reward Campaign","create_campaign_category":"Create Campaign Category","how_to_create_category":"How To Create Category","categories":"Categories","add_category":"Add Category","category_icon_placeholder":"Ex: fas fa-user","no_category_found":"No Category Found","enter_category_name":"Enter Category Name","successfully_category_added":"Successfully Category Added","successfully_category_deleted":"Successfully Category Deleted","successfully_category_updated":"Successfully Category Updated","update_category":"Update Category","here_you_can_use_the":"Here you can use the","icons":"Icons","click_here":"Click Here","to_see_the_list_of_icon":"to see the list of icon","consent":"Consent","this_organization_subscription_is_expired":"This organization subscription is expired.","show_similar_campaigns":"Show similar campaigns.","show_similar_campaigns_during_contribution":"Show similar campaigns during contribution.","user_not_found":"User Not Found","allow_public_fundrise_for_campaign":"Allow Public Fundrise For Campaign","allow_public_fundrise":"Allow Public Fundrise","if_you_want_upgrade_your_plan_you_have_to_go":"If you want upgrade your plan you have to go","your_email_is_not_verified":"Your email is not verified!","if_you_have_not_received_a_link_yet_click_here":"If you haven\'t received a link yet click here"},"bn":{"filters":"ফিল্টার","select_a_date_range":"একটি তারিখের সীমা নির্বাচন করুন","clear":"সাফ","done":"সম্পন্ন","type":"প্রকার","export_to_excel":"এক্সেল এক্সপোর্ট","ads_budget_percentage":"বিজ্ঞাপন বাজেট শতাংশ","set_as_raised":"উত্থাপিত হিসাবে সেট করুন","unset_as_raised":"উত্থাপিত হিসাবে আনসেট করুন","amount":"পরিমাণ","payout_id":"পরিশোধ আইডি","published":"প্রকাশিত","unpublished":"অপ্রকাশিত","rejected":"rejected","search_name_or_email":"নাম বা ইমেল অনুসন্ধান করুন","recurring_donation_status":"অনুদানের স্থিতি পুনরাবৃত্তি","life_time_value":"জীবনকাল মান","hello":"হ্যালো","something_else":"এটা সামান্য","loading_campaign":"প্রচারটি লোড হচ্ছে","loading_campaign_list":"প্রচারগুলি লোড হচ্ছে","please_wait":"অনুগ্রহপূর্বক অপেক্ষা করুন","pending":"বিচারাধীন","under_verification":"যাচাইয়ের অধীনে","approve":"অনুমোদন","approved":"অনুমোদিত","requested_amendation":"সংশোধন করার জন্য অনুরোধ করা","resubmitted":"পুনরায় জমা দেওয়া হয়েছে","inactive":"নিষ্ক্রিয়","requested_approval_after_inactivation":"অনুমোদনের জন্য অনুরোধ করা হয়েছে (নিষ্ক্রিয়তার পরে)","loading":"লোড হচ্ছে","loading_data":"তথ্য প্রস্তুত হচ্ছে","loading_campaign_types":"প্রচারণার প্রকারগুলি লোড হচ্ছে","load_more":"আরও লোড করুন","post_update_to_campaign":"অবদানকারী এবং পৃষ্ঠা দর্শনার্থীদের কাছে আপনার প্রচার সম্পর্কে একটি আপডেট পোস্ট করুন","post_update_button_text":"পোস্ট আপডেট","co_fundraiser":"কো-ফান্ডারাইজার","fundraiser":"তহবিল সংগ্রহকারী","processing":"প্রক্রিয়াজাতকরণ","add_co_fundraiser":"কো-ফান্ডারাইজার যুক্ত করুন","are_you_sure":"আপনি কি নিশ্চিত?","logging_out":"লগ আউট হচ্ছে ","logout":"লগ আউট","request_processing":"দয়া করে অপেক্ষা করুন, অনুরোধটি প্রক্রিয়া করা হচ্ছে","mark_verified":"যাচাই করা হিসাবে চিহ্নিত করুন","denied_by_you":"আপনি অস্বীকার করেছেন","accepted_by_you":"আপনি দ্বারা গৃহীত","verified_by_you":"আপনার দ্বারা যাচাই করা হয়েছে","assigned_campaigns":"নির্ধারিত প্রচারগুলি","assigned_campaigns_to":"এগুলিতে প্রচারণা বরাদ্দ করা হয়েছে","campaign_types":"প্রচারের ধরন গুলো","new_campaign":"নতুন প্রচার","campaign_media":"প্রচার মাধ্যম","campaign_story":"প্রচারের গল্প","campaign_recipient":"প্রচারণা প্রাপক","submit_campaign":"প্রচার জমা দিন","draft":"খসড়া","accept":"গ্রহণ করুন","reject":"প্রত্যাখ্যান","delete":"মুছে ফেলুন","deleted":"মোছা হয়েছে","edit":"সম্পাদনা করুন","manage":"পরিচালনা করুন","save":"সংরক্ষণ","add":"যুক্ত করুন ","add_new":"নতুন যুক্ত করুন","not_found":"পাওয়া যায় নি","not_working_try_later":"কাজ করছে না. পরে আবার চেষ্টা করুন","remove_photo":"ফটো সরান","removing":"সরানো হচ্ছে","edit_campaign":"প্রচার সম্পাদনা করুন","invalid_video_url":"অবৈধ ভিডিও ইউআরএল","social_share_description":"এবং আমি ভেবেছিলাম আপনিও এটি পরীক্ষা করে দেখতে আগ্রহী হতে পারেন। এই অর্থবহ প্রচারাভিযানের অবদান বা ভাগ করে নেওয়ার বিষয়টি দয়া করে বিবেচনা করুন। ধন্যবাদ!","i_am_supporting_this_fundraising_page":"আমি এই তহবিল পৃষ্ঠাকে সমর্থন করছি","custom_amount":"কাস্টম পরিমাণ","enter_amount":"পরিমান লিখুন","show":"দেখুন","show_me":"আমাকে দেখাও","sort_by":"ক্রমানুসার","show_more":"আরো দেখুন","filter_tag":"ফিল্টার ট্যাগ","view":"দেখান","image":"চিত্র","campaign_details":"প্রচারের বিশদ","target_amount":"লক্ষ্য পরিমাণ","status":"স্থিতি","actions":"কপদক্ষেপ","select_a_user":"একটি ব্যবহারকারী নির্বাচন করুন","or":"অথবা","an_auto_generated_password":"একটি স্বয়ংক্রিয় উত্পন্ন পাসওয়ার্ড প্রদত্ত ইমেলটিতে প্রেরণ করবে।","select_from_existing_user":"বিদ্যমান ব্যবহারকারী থেকে নির্বাচন করুন","role":"ভূমিকা","select_role":"ভূমিকা নির্বাচন করুন","name":"নাম","email":"ইমেল","enter_name":"নাম প্রদান করুন","enter_email":"ইমেইল প্রদান করুন","unassigned":"এখনও নিযুক্ত করা হয়নি","assigned":"অর্পিত","marked_verified":"যাচাই করা হিসাবে চিহ্নিত","summary_of_description":"বর্ণনা সংক্ষিপ্তসার","short_description":"ছোট বিবরণ","preset_summary":"প্রিসেট সংক্ষিপ্তসার","preset_description":"অনুদানের পরিমাণটি আপনার পক্ষে কী বোঝায় তা বর্ণনা করুন বা একটি পুরস্কারও অফার করুন!","describe_the_preset":"প্রিসেট বর্ণনা করুন","page_settings_donation_preset":"সেটিংস - অনুদানের প্রিসেটগুলি","donation_preset_amounts":"অনুদান প্রসেট পরিমাণ","donation_presets":"অনুদানের প্রিসেটগুলি","contribution_preset_page_description_one":"\\n111/5000\\nআপনি যদি সত্যই আপনার তহবিল সংগ্রহ লক্ষ্য করতে চান, আপনার নীচে আপনার অবদান পূর্ব নির্ধারিত পরিমাণ কাস্টমাইজ করা উচিত। 👇","contribution_preset_page_description_two":"অবদানের জন্য আপনি পূর্ব নির্ধারিত পরিমাণগুলি সেট করতে পারেন এবং সেই পরিমাণটি আপনার পক্ষে অর্থ কী তা ব্যাখ্যা করতে পারেন। এটি অবদানকারীদের তাদের অর্থ কীভাবে আপনাকে সহায়তা করতে পারে তা কল্পনা করতে সহায়তা করবে।","system_settings":"সিস্টেম সেটিংস","youtube_api":"ইউটিউব এপিআই","agora_api":"আগোরা এপিআই","agora_api_key":"আগোরা আগোরা এপিআই","google_captcha":"গুগল ক্যাপচা","youtube_api_key":"ইউটিউব এপিআই কী","you_can_enable_or_disable":"আপনি সক্ষম বা অক্ষম করতে পারেন","data_store":"তথ্য দোকান","data_storage_type":"ডেটা স্টোরেজ প্রকার","local":"স্থানীয়","cloud":"বর্ষ","push_notification":"ধাক্কা বিজ্ঞপ্তি","provider":"প্রদানকারী","select_provider":"সরবরাহকারী নির্বাচন করুন","application_settings":"আবেদন নির্ধারণ","contributors":"অবদানকারী","contributor":"অবদানকারী","payouts":"পরিশোধ","asias_most_trusted_fundraising_platform":"এশিয়ার সবচেয়ে বেশি বিনিয়োগের অর্থ সংগ্রহের প্ল্যাটফর্ম","start_fundraising":"তহবিল সংগ্রহ শুরু করুন","see_how_easy_it_is_to_start_a_campaign":"কোনও প্রচার শুরু করা কতটা সহজ তা দেখুন","see_what_successful_fundraisers_say_about_give_asia":"ক্রাউডফান্ডিলি সম্পর্কে সফল তহবিলাকারীরা কী বলে তা দেখুন","step_1":"ধাপ ১","step_2":"ধাপ ২","step_3":"ধাপ ৩","fundraise":"তহবিল","fundraisers":"তহবিল সংগ্রহকারী","apply_filter":"ফিল্টার প্রয়োগ করুন","clear_filter":"ফিল্টার পরিষ্কার করুন","about":"সম্পর্কিত","ads_budget":"বিজ্ঞাপনের বাজেট","chat_presets":"চ্যাট প্রিসেটগুলি","filter":"ফিল্টার","features":"বৈশিষ্ট্য","a_better_way_to_create_your_fundraising_campaign":"আপনার তহবিল সংগ্রহ প্রচারণা তৈরি করার একটি আরও ভাল উপায়।","we_undertstand_creating_a_fundraising_campaign":"আমরা বুঝতে পারি যে একটি তহবিল সংগ্রহের প্রচারণা তৈরি করা বেশ ঝুঁকির হতে পারে। যে কারণে আমরা তহবিল সংগ্রহের প্রচারণা তৈরির সম্পূর্ণ নতুন পদ্ধতি তৈরি করেছি।","start_a_campaign":"একটি প্রচার শুরু করুন","your_unique_kindness_profile":"আপনার অনন্য উদারতা প্রোফাইল।","whether_you_are_a_contributor_or_a_fundraiser":"আপনি কোনও অবদানকারী বা তহবিলাকারী হোন না কেন, আমরা ক্রাউডফান্ডিলিতে এটি উদযাপন করি। একবার আপনি ক্রাউডফান্ডিলিতে সাইন আপ করার পরে, আপনার নিজের ক্রাউডফান্ডিলি প্রোফাইল পৃষ্ঠা থাকবে, যা প্ল্যাটফর্মে আপনার সদয় আচরণের উপর নজর রাখে।","check_out_my_profile":"আমার প্রোফাইল দেখুন","lets_get_started":"চল শুরু করি","hello_I_am_aseem":"হ্যালো! আমি অসীম, ক্রডফান্ডিলির সহ-প্রতিষ্ঠাতা। আপনি কি একটি প্রচার শুরু করার চেষ্টা করতে চান? শুরু করতে নীচে আলতো চাপুন!👇🏽","contribute":"অবদান","dashboard":"ড্যাশবোর্ড","accept_invitation":"আমন্ত্রণ গ্রহণ","accepting":"গ্রহণ করা হচ্ছে ","login":"লগইন","register":"নিবন্ধন","sorry":"দুঃখিত","you_are_not_a_loggedin_user":"আপনি লগ-ইন করা ব্যবহারকারী নন","please":"অনুগ্রহপূর্বক","accept_this_invitation":"এই আমন্ত্রণটি গ্রহণ করুন","accepting_invitation":"আমন্ত্রণ গ্রহণ","you_have_successfully_accepted_cofundraiser_invitation":"আপনি সফলভাবে সহ-তহবিল সংগ্রহকারী আমন্ত্রণ গ্রহণ করেছেন","share_campaign_dashboard":"ভাগ করুন - প্রচারাভিযানের ড্যাশবোর্ড","share":"ভাগ করুন","update_summary":"আপডেট সংক্ষিপ্তসার","updating":"আপডেট হচ্ছে","successfully_updated_flayer_summary":"সাফল্যের সাথে ফ্লায়ার সংক্ষিপ্তসার আপডেট করা হয়েছে","download_flyer_pdf":"ফ্লায়ার পিডিএফ ডাউনলোড করুন","has_not_started_a_fundraising_campaign_yet":"এখনও তহবিল সংগ্রহের প্রচার শুরু করেনি","loading_more":"আরও লোড হচ্ছে","loading_campaigns":"প্রচারণা লোড হচ্ছে","campaign_chat":"প্রচারের গালগল্প","be_the_first_to_ask_question":"কোনও প্রশ্ন জিজ্ঞাসা করা, উত্সাহজনক বার্তা লিখতে বা ভাবনা ভাগ করে নেওয়ার ক্ষেত্রে প্রথম হন","send_a_message":"একটি বার্তা পাঠান","the_beginning":"শুরুতে","downloading_flyer":"ফ্লায়ার ডাউনলোড করা হচ্ছে","add_campaign_badge":"প্রচারের ব্যাজ যুক্ত করুন","min_point":"নূন্যতম পয়েন্ট","max_point":"সর্বোচ্চ পয়েন্ট","campaign_badges":"প্রচারের ব্যাজগুলি","deny":"অস্বীকার করুন","select_a_role":"একটি ভূমিকা নির্বাচন করুন","search":"অনুসন্ধান","try_searching_campaign_titles_or_names":"প্রচারের শিরোনাম বা নাম অনুসন্ধান করার চেষ্টা করুন","results":"ফলাফল","add_donation_badge":"অনুদানের ব্যাজ যুক্ত করুন","donation_badges":"অনুদান ব্যাজ","add_share_badge":"শেয়ার ব্যাজ যুক্ত করুন","share_badges":"ব্যাজগুলি ভাগ করুন","rank_list":"পদ তালিকা","update_rank":"আপডেট পদ","select_rank_name":"পদের নাম নির্বাচন করুন","max_amount":"সর্বাধিক পরিমাণ","min_amount":"ন্যূনতম পরিমাণ","select_name":"নাম নির্বাচন করুন","badges":"ব্যাজ","add_new_badge":"নতুন ব্যাজ যুক্ত করুন","select_type":"প্রকার নির্বাচন করুন","select_badge_type":"ব্যাজ প্রকার নির্বাচন করুন","select_activity":"কার্যকলাপ নির্বাচন করুন","select_a_activity":"একটি কার্যকলাপ নির্বাচন করুন","campaign_reports":"প্রচার প্রতিবেদন","loading_campaign_reports":"প্রচারের প্রতিবেদন লোড হচ্ছে","loading_reports":"প্রতিবেদন লোড হচ্ছে","remind_me_later":"আমাকে পরে মনে করিয়ে দিবেন","we_will_send_you_an_email_for_reminding_you":"আপনাকে পরে অনুদান দেওয়ার কথা মনে করিয়ে দেওয়ার জন্য আমরা আপনাকে একটি ইমেল পাঠাব। কখন আপনাকে স্মরণ করিয়ে দেওয়া উচিত তা নির্বাচন করুন","enter_email_address":"ইমেইল অ্যাড্রেস দিন","rejected_by_you":"আপনার দ্বারা প্রত্যাখ্যাত","home_settings":"হোম পৃষ্ঠা সেটিংস","banner_content":"ব্যানার সামগ্রী","title":"শিরোনাম","background_image":"পটভূমি চিত্র","select_background_image":"পটভূমি চিত্র নির্বাচন করুন","banner_logo":"ব্যানার লোগো","select_logo":"লোগো নির্বাচন করুন","featured_brands":"বৈশিষ্ট্যযুক্ত ব্র্যান্ড","brands":"ব্র্যান্ডগুলি","brand_logo":"ব্র্যান্ড লোগো","featured_campaign":"বৈশিষ্ট্যযুক্ত প্রচার","campaign_url":"প্রচারের URL","select_campaign_image":"প্রচারের চিত্র নির্বাচন করুন","background_color":"পেছনের রং","about_settings":"পৃষ্ঠা সেটিংস সম্পর্কে","give_asia_family":"ক্রাউডফান্ডিলি পরিবার","give_asia_advisors_ambassadors":"ক্রাউডফান্ডিলির উপদেষ্টা এবং দূতগণ","users":"ব্যবহারকারীরা","user_list":"ব্যবহারকারীর তালিকা","loading_users":"ব্যবহারকারী লোড হচ্ছে","no_user_found":"কোন ব্যবহারকারী পাওয়া যায় নি","loading_top_contributors":"শীর্ষ অবদানকারী লোড হচ্ছে","no_one_has_contributed_yet":"এখনও কেউ অবদান রাখেনি","by":"কর্তৃক","loading_activities":"কার্যক্রম লোড হচ্ছে","no_activities_found_for_this_campaign":"এই প্রচারের জন্য কোনও কার্যক্রম পাওয়া যায় নি","story":"গল্প","updates":"আপডেট","activities":"ক্রিয়াকলাপ","campaign_not_found":"প্রচার পাওয়া যায়নি","are_you_sure_want_to_delete":"আপনি কি নিশ্চিত, মুছতে চান?","no_updates_found_for_this_campaign":"এই প্রচারের জন্য কোনও আপডেট পাওয়া যায় নি","loading_updates":"আপডেট লোড হচ্ছে","refunds":"টাকা ফেরত","completed":"সমাপ্ত","filter_by":"দ্বারা ফিল্টার করুন","date_time":"তারিখ সময়","time_in_utc":"ইউটিসিতে সময়","contributor_name":"কন্ট্রিবিউটরের নাম","amount_contributed":"পরিমাণ","tip_amount":"টিপ পরিমাণ","contribution_type":"অবদানের ধরণ","campaign_name":"প্রচারাভিযান নাম","transaction_id":"লেনদেন নাম্বার","request_type":"অনুরোধ প্রকার","note":"মন্তব্য","submit":"জমা দিন","accepted":"স্বীকৃত","social_media_boost":"সোশ্যাল মিডিয়া বুস্ট","submitting":"জমা দেওয়া হচ্ছে","no_campaign_found":"কোনও প্রচার পাওয়া যায়নি!","fundraiser_name":"তহবিলাকারীর নাম","fundraiser_email":"তহবিল সংগ্রহকারী ইমেল","raised":"উত্থিত","ads_spent":"বিজ্ঞাপন ব্যয়","target":"টার্গেট","mark_as_verified":"যাচাই করা হিসাবে চিহ্নিত করুন","accept_campaign":"প্রচার গ্রহণ করুন","deny_campaign":"প্রচার অস্বীকার করুন","approve_campaign":"প্রচার অনুমোদন করুন","publish_campaign":"প্রচার প্রচার করুন","date_added":"তারিখ যুক্ত করা হয়েছে","date":"তারিখ","start_conversation":"কথোপকথন শুরু করুন","send":"প্রেরণ","conversations":"কথোপকথন","conversation":"কথোপকথন","no_conversation_found":"কোনও কথোপকথন পাওয়া গেল না!","subject":"বিষয়","message":"বার্তা","campaign":"প্রচার","created_at":"নির্মিত","id":"ID","opinions":"মতামত","add_opinion":"মতামত যুক্ত করুন","published_at":"প্রকাশিত","not_yet_published":"এখনও প্রকাশিত হয়নি","created_by":"দ্বারা সৃষ্টি","go_to_conversation":"কথোপকথনে যান","request_more_info":"আরও তথ্যের জন্য অনুরোধ","donation_amount":"দানের পরিমাণ","suspend":"স্থগিত করা","suspend_requests":"স্থগিত অনুরোধ গুলো ","no_suspend_request_found":"দুঃখিত, কেউ স্থগিতের জন্য অনুরোধ করেন নি।","request_for_suspension":"স্থগিতের জন্য অনুরোধ","requested_by":"অনুরোধ করেছে","reason":"কারণ","suspension_request_reason_placeholder":"আপনি কেন এই প্রচারণা স্থগিত করতে চান দয়া করে আমাদের বলুন?","campaign_dashboard":"প্রচারের ড্যাশবোর্ড","applied_filter":"প্রয়োগ ফিল্টার","start_a_new_campaign":"নতুন প্রচার শুরু করুন","your_information":"আপনার তথ্য","on_behalf_of":"পক্ষে","n_a":"না","sorry_invalid_invitation_code":"দুঃখিত, অবৈধ আমন্ত্রণ কোড","maybe_you_have_already_accepted":"হতে পারে আপনি ইতিমধ্যে এটি গ্রহণ করেছেন বা টোকেনটির মেয়াদ শেষ হয়ে গেছে","if_you_think_this_was_a_mistake":"যদি আপনি মনে করেন এটি একটি ভুল ছিল তবে অনুগ্রহ করে চাঁদা সংগ্রহকারীকে অন্য একটি আমন্ত্রণ প্রেরণ বা যোগাযোগের সহায়তার জন্য বলুন","subtitle":"সাবটাইটেল","invitation_accepted":"আমন্ত্রণ গ্রহণ করা হয়েছে","the_invitation_has_been_successfully_accepted":"আমন্ত্রণটি সফলভাবে গৃহীত হয়েছে। আপনি এখন প্রচারটি পরিচালনা করতে পারেন","please_click_the_following_link_to_ac cept":"আপনার আমন্ত্রণটি সহ-তহবিল সংগ্রহকারী হিসাবে গ্রহণ করতে দয়া করে নীচের লিঙ্কটিতে ক্লিক করুন","manage_campaign":"প্রচার পরিচালনা করুন","logging_you_in":"আপনাকে লগ ইন করছি","response_message":"responseMessage","resend_verification_link":"যাচাইয়ের লিঙ্কটি পুনরায় পাঠান","your_email_is_not_verified_yet":"আপনার ইমেল এখনও যাচাই করা হয় নি","if_you_have_not_received_a_link_yet_click_below_button":"আপনি যদি এখনও কোনও লিঙ্ক না পান তবে নীচের বোতামটিতে ক্লিক করুন","sending_verification_link":"যাচাইয়ের লিঙ্ক পাঠানো হচ্ছে","link_successfully_sent":"লিঙ্কটি সফলভাবে প্রেরণ করা হয়েছে","resend_link":"লিঙ্কটি পুনরায় পাঠান","subject_of_the_message":"বার্তার বিষয়","your_message_to_the_fundraiser":"তহবিলাকারীর কাছে আপনার বার্তা","continue":"চালিয়ে যান","please_select_a_preset_amount_or_custom_amount":"দয়া করে একটি প্রিসেট পরিমাণ বা কাস্টম পরিমাণ নির্বাচন করুন","sorry_something_went_wrong":"দুঃখিত কিছু ভুল হয়েছে","you_are_contributing_to":"আপনি অবদান রাখছেন","selected_Offer":"নির্বাচিত পুরস্কার","your_card_information":"আপনার কার্ডের তথ্য","preparing_secure_pay":"সুরক্ষিত বেতন প্রস্তুত করা হচ্ছে","sorry_something_went_wrong_fetching_account_id":"দুঃখিত, অ্যাকাউন্ট আইডি আনতে কিছু ভুল হয়েছে","personal_message_from_fundriser":"তহবিলাকার থেকে ব্যক্তিগত বার্তা","back_to_campaign":"প্রচারে ফিরুন","select_a_tip_amount":"একটি টিপ পরিমাণ নির্বাচন করুন","your_tip_will_help_us_help_more_people":"আপনার টিপটি আমাদের আরও বেশি লোককে সহায়তা করতে সহায়তা করবে","you_can_also_give_a_similar_amount":"আপনি অনুরূপ পরিমাণ টিপ দিতে পারেন যা আপনি বেশি স্বাচ্ছন্দ্য বোধ করেন","you_can_upload_image":"আপনি চিত্র আপলোড করতে পারেন (jpg, jpeg, png)","donation_tip_amount":"অনুদানের পরামর্শের পরিমাণ","payment":"পেমেন্ট","donation_info":"অনুদানের তথ্য","thank_you":"ধন্যবাদ","write_message_here":"এখানে বার্তা লিখুন","endorse":"অনুমোদন","your_relationship_to_the_fundraiser":"তহবিলাকারীর সাথে আপনার সম্পর্ক","family_member_close_friend_doctor":"যেমন- পরিবারের সদস্য, ঘনিষ্ঠ বন্ধু, ডাক্তার","your_endorsement_message":"আপনার সমর্থন বার্তা","please_write_your_endorsement_message":"আপনার অনুমোদনের বার্তা লিখুন দয়া করে","please_write_your_message":"এখানে আপনার বার্তা অনুগ্রহ করে লিখুন","new_endorsements":"নতুন অনুমোদন","submit_endorsement":"প্রস্তাব জমা দিন","loading_Endorsements":"সমর্থন লোড হচ্ছে","campaign_endorsements":"প্রচার প্রচারণা","no_endorsement_found_for_this_campaign":"এই প্রচারের জন্য কোনও সমর্থন খুঁজে পাওয়া যায় নি","view_ads_budget":"বিজ্ঞাপনের বাজেট দেখুন","settings":"সেটিংস","reports":"রিপোর্ট","User_Crowdfundly":"User@Crowdfundly","give_your_campaign_more_exposure":"প্রতিবেদনগুলি সামাজিক প্রচার মাধ্যমে উত্সাহিত করার মাধ্যমে আপনার প্রচারকে আরও এক্সপোজার দিন।","Would you like_to_allocate":"আপনি বরাদ্দ করতে চান?","of_your_funds_raised":"আপনার তহবিল উত্থাপিত","for_boosting":"বৃদ্ধির জন্য?","no":"না","yes":"হ্যাঁ","we_will_inform_you_when_we_are":"আমরা যখন আপনার প্রচার প্রচার করতে চলেছি তখন আমরা আপনাকে অবহিত করব","ads_settings":"Ads Settings","campaign_ad_preview":"প্রচারের পূর্বরূপ দেখুন","loading_donations":"অনুদান লোড হচ্ছে","no_donation_made_yet":"এখনও কোন অনুদান দেওয়া হয়নি","no_contributions_made_yet":"এখনও অবদান নেই","write_a_note_optional":"একটি নোট লিখুন (ঐচ্ছিক)","write_a_note_here":"এখানে একটি নোট লিখুন","your_supporters_can_ask_questions":"আপনার সমর্থকরা প্রিসেট চ্যাটের তালিকা থেকে নির্বাচন করে প্রশ্ন জিজ্ঞাসা করতে বা উত্সাহ পোস্ট করতে পারেন","messages_in_your_campaign_chatroom":"আপনার প্রচারের চ্যাটরুমে বার্তা। আপনি সেগুলিতে আপনার উত্তরগুলি যুক্ত করতে পারেন যাতে তারা এখনই একটি উত্তর পেতে পারে।","write_preset_message_here":"এখানে একটি প্রিসেট বার্তা লিখুন","save_preset":"প্রিসেট সংরক্ষণ করুন","create_new_preset":"নতুন প্রিসেট তৈরি করুন","success":"সাফল্য","failed_to_save":"সংরক্ষণ করতে ব্যর্থ হয়েছে","failed_to_delete":"মুছতে ব্যর্থ","type_your_description":"আপনার বিবরণ টাইপ করুন","campaign_status":"প্রচারের স্থিতি","campaign_view":"প্রচার দেখুন","submit_for_approval":"অনুমোদনের জন্য জমা দাও","campaign_title":"প্রচারের শিরোনাম","keep_it_short_and_simple":"এটা ছোট এবং সহজ রাখুন","campaign_category":"প্রচার বিভাগ","select":"নির্বাচন","fundraising_target":"তহবিল সংগ্রহ লক্ষ্য","target_date":"নির্দিষ্ট তারিখ","select_a_date":"একটি তারিখ নির্বাচন করুন","campaign_image":"প্রচারের চিত্র","campaign_offers":"প্রচারের পুরস্কার","add_new_offer":"নতুন পুরস্কার যুক্ত করুন","successfully_updated":"সফলভাবে আপডেট","successfully_saved":"সফলভাবে সংরক্ষিত","you_can_add_more_family_or_friends_as_fundraisers_for_this_campaign":"আপনি এই প্রচারের জন্য তহবিল হিসাবে আরও পরিবার বা বন্ধুদের যোগ করতে পারেন।","add_new_co_fundraiser":"নতুন সহ-তহবিল যোগ করুন","email_address":"ইমেল ঠিকানা","date_and_time":"তারিখ সময়","address":"ঠিকানা","contributor_amount":"অবদানকারী পরিমাণ","anonymous":"নামবিহীন","offline_contributions":"অফলাইন অবদানসমূহ","get_an_overview":"আপনার প্রচার এখনও পর্যন্ত কীভাবে চলছে তার একটি ওভারভিউ পান।","allow_contributions_after_raised":"উত্থাপনের পরে অবদানের অনুমতি দিন","of":"এর","showing":"দেখাচ্ছে","online_contributions":"অনলাইন অবদানসমূহ","add_a_summary_of_your_campaign_to_be_printed_on_a_flyer":"আপনার প্রচারের একটি সংক্ষিপ্তসার যুক্ত করুন যা কোনও ফ্লাইয়ারে মুদ্রিত।","last":"শেষ","days":"দিনগুলি","the_donation_amount_your_campaign_has_received":"আপনার প্রচারটি যে অনুদানের পরিমাণ পেয়েছে।","thanks_for_your_help":"আপনার সাহায্যের জন্য ধন্যবাদ","funding_goal":"তহবিল লক্ষ্য","funds_raised":"তহবিল উত্থাপন","days_to_go":"যাওয়ার দিনগুলি","set_reminder":"অনুস্মারক সেট করুন","contact":"যোগাযোগ","endorsements":"অনুমোদন","endorsement":"অনুমোদন","top_contributors":"শীর্ষস্থানীয় অবদানকারী","offer":"পুরস্কার","no_story_found":"কোন গল্প পাওয়া যায় নি","similar_campaigns":"অনুরূপ প্রচারণা","all_campaign":"সমস্ত প্রচার","back_it":"এটি পিছনে","amount_raised_successfully":"সফলভাবে উত্থাপিত পরিমাণ","target_date_exceed":"টার্গেটের তারিখ ছাড়িয়ে গেছে","fundraiser_will_get_a_rejection_email":"তহবিল সংগ্রহকারী একটি প্রত্যাখ্যান ইমেল পাবেন এবং ইমেলের এই কারণটি দেখতে পাবেন","enter_your_reason_for_campaign":"প্রচার প্রত্যাখ্যানের জন্য আপনার কারণ প্রবেশ করুন। সর্বাধিক: ২৫০ টি অক্ষর।","reject_and_send_email_to_fundraiser":"প্রত্যাখাত করুন এবং তহবিলকে ইমেল প্রেরণ করুন","reject_campaign":"প্রচার বাতিল করুন","campaign_has_been_rejected":"প্রচার বাতিল হয়েছে। তহবিলাকারী একটি ইমেল পাবেন। অস্থায়ী বিজ্ঞপ্তি।","loading_campaign_badges":"প্রচারের ব্যাজ লোড হচ্ছে","no_badge_found":"কোনও ব্যাজ পাওয়া যায় নি।","badge_name":"ব্যাজ নাম","based_on":"ভিত্তিক","update_campaign_type":"প্রচারের ধরণ আপডেট করুন","create_campaign_type":"নতুন প্রচারণার ধরণ তৈরি করুন","create_campaign_type_head":"প্রচারের ধরণ তৈরি করুন","campaign_type_name":"প্রচারের ধরণের নাম","campaign_type_image":"প্রচারের ধরণের চিত্র","update":"হালনাগাদ","campaign_type_updated_successfully":"প্রচারের ধরণ সফলভাবে আপডেট হয়েছে","campaign_type_created_successfully":"প্রচারের ধরণ সফলভাবে তৈরি করা হয়েছে","campaign_type_deleted_successfully":"প্রচারের ধরণ সফলভাবে মোছা হয়েছে","required":"প্রয়োজনীয়","creating":"তৈরি হচ্ছে","create":"তৈরি","update_order":"আপডেট আদেশ","you_campaign_may_go_under_review_after_making_any_changes":"আপনার প্রচার কোনও পরিবর্তন করার পরে পর্যালোচনাতে যেতে পারে।","reset_all":"সব পুনরায় সেট করুন","owner":"মালিক","campaigns":"প্রচারণা","no_report_found":"কোন রিপোর্ট পাওয়া যায় নি!","report_date":"প্রতিবেদন তারিখ","reporter_name":"প্রতিবেদকের নাম","reporter_email":"প্রতিবেদক ইমেল","report_details":"প্রতিবেদন বিবরণ","details":"বিবরণ","phone":"ফোন","reported_Campaign":"প্রচারিত প্রতিবেদন","knows_the_organizer":"সংগঠককে জানেন?","explained_relation":"সম্পর্কযুক্ত ব্যাখ্যা","reporter_describes":"প্রতিবেদক বর্ণনা করেন","concern":"উদ্বেগ","did_reporter_involve_in_a_legal_dispute_with_the_campaign_organizer":"প্রতিবেদক কি প্রচারের সংগঠকের সাথে কোনও আইনি বিবাদে জড়িত ছিলেন?","did_the_campaign_violate_giveKindness_terms_and_conditions":"প্রচারটি কি গিথকাইন্ডনের শর্তাবলী লঙ্ঘন করেছে?","campaign_report":"প্রচার প্রতিবেদন","create_type":"প্রকার তৈরি করুন","update_type":"আপডেট প্রকার","do_you_really_want_to_delete":"আপনি কি সত্যিই এটি মুছতে চান?","contact_requests":"যোগাযোগের অনুরোধ","loading_requests":"অনুরোধ লোড হচ্ছে","crowdfundly_is_Asia_leading_free_fundraising_platform":"ক্রাউডফান্ডিলি হ\'ল এশিয়ার তহবিল সংগ্রহকারীদের জন্য অর্থ সংগ্রহের জন্য বিনামূল্যে তহবিল সংগ্রহ প্ল্যাটফর্ম।","report_a_campaign":"একটি প্রচারের রিপোর্ট করুন","per_page":"প্রতি পৃষ্ঠা","time_in":"ইউটিসিতে সময়","contributor_email":"অবদানকারী ইমেল","ref_id":"রেফারেন্স আইডি","action":"পদক্ষেপ","contributions":"অবদানসমূহ","successfully_refunded":"সাফল্যের সাথে ফেরত দেওয়া হয়েছে","failed_to_refund":"ফেরত দিতে ব্যর্থ","danger":"বিপদ","search_here":"এখানে অনুসন্ধান করুন","no_fundraiser_found":"কোনও তহবিল সংগ্রহকারী পাওয়া যায় নি","total_campaigns":"মোট প্রচারণা","successful_campaigns":"সফল প্রচারণা","raised_amount":"উত্থাপিত পরিমাণ","joined_at":"যোগদান করেছেন","newest":"নতুন","oldest":"পুরাতন","please_wait_request_is_processing":"দয়া করে অপেক্ষা করুন, অনুরোধটি প্রক্রিয়াজাত হচ্ছে","sorry_no_campaigns_to_show":"Sদুঃখিত, দেখানোর জন্য কোনও প্রচার নেই।","assigned_at":"নিযুক্ত","are_you_sure_you_want_to_accept":"আপনি কি নিশ্চিত যে আপনি গ্রহণ করতে চান?","are_you_sure_you_want_to_reject":"আপনি কি নিশ্চিত আপনি প্রত্যাখ্যান করতে চান?","you_have_successfully_accepted_the_campaign":"আপনি সফলভাবে প্রচারটি গ্রহণ করেছেন।","total_assigned":"মোট নিয়োগ","total_accepted":"মোট গৃহীত","total_raised":"মোট উত্থাপিত","total_approved":"মোট অনুমোদিত","total_rejected":"মোট প্রত্যাখ্যান","enable_disable":"চালু অচল","enabled":"সক্ষম","disabled":"অক্ষম","modules_updated_successfully_this_is_a_temporary_alert_system":"মডিউলগুলি সফলভাবে আপডেট হয়েছে। এটি একটি অস্থায়ী সতর্কতা ব্যবস্থা","assign_permissions":"অনুমতি বরাদ্দ করুন","available_modules":"উপলব্ধ মডিউল","available_permissions":"উপলব্ধ অনুমতি","withdraw_requests":"প্রস্থান অনুরোধ","no_withdraw_request_found":"কোনও প্রস্থান অনুরোধ পাওয়া যায় নি!","no_withdraw_history_found":"কোনও প্রস্থান ইতিহাস পাওয়া যায় নি!","payout_method":"প্রদানের পদ্ধতি","payout_methods":"অর্থ প্রদানের পদ্ধতি","attachment":"সংযুক্তি","method_name":"পদ্ধতির নাম","sl":"ক্রমিক নং","paypal":"পেপাল","active":"সক্রিয়","update_method":"আপডেট পদ্ধতি","delete_method":"পদ্ধতি মুছুন","no_refund_has_been_made":"কোনও ফেরত দেওয়া হয়নি","platform":"প্ল্যাটফর্ম","gateway":"প্রবেশপথ","view_note":"নোট দেখুন","accept_request":"অনুরোধ গ্রহন কর","decline_request":"অনুরোধ অস্বীকার করুন","decline_refund":"প্রত্যাবর্তন প্রত্যাখ্যান","approve_refund":"রিফান্ড অনুমোদন করুন","refund_note":"ফেরত নোট","contributor_note":"কন্ট্রিবিউটরের নোট","admin_note":"অ্যাডমিনের নোট","successfully_declined":"সাফল্যের সাথে প্রত্যাখ্যান হয়েছে","no_role_found":"কোন ভূমিকা পাওয়া যায় নি","permissions":"অনুমতি","enter_role_name":"ভূমিকা নাম লিখুন","roles":"ভূমিকা","please_give_permissions_to_the_user":"ব্যবহারকারীকে অনুমতি দিন!","sorry_owner_and_fundraiser":"দুঃখিত! মালিক এবং তহবিলাকারীর ভূমিকা অনুমোদিত নয়","settings_payment":"সেটিংস / প্রদান","you_don_have_stripe_account_connected":"আপনার স্ট্রাইপ অ্যাকাউন্ট সংযুক্ত নেই","you_won_be_able_to_accept":"আপনি গ্রহণ করতে সক্ষম হবেন না","or_can":"বা যে কোনও ধরনের অংশ নিতে পারেন","transactions":"লেনদেন","connect_your":"আপনার স্ট্রাইপ অ্যাকাউন্টটি এতে যুক্ত করুন","connect":"সংযোগ","crowdfundly":"Crowdfundly","stripe":"স্ট্রাইপ","stripe_account_id":"স্ট্রাইপ অ্যাকাউন্ট আইডি","loading_stripe":"স্ট্রাইপ অ্যাকাউন্টের বিস্তারিত লোড হচ্ছে","verifying":"স্ট্রাইপ অ্যাকাউন্ট আইডি যাচাই করা হচ্ছে","settings_basic":"সেটিংস / বেসিক","username":"ব্যবহারকারীর নাম","crowdfundly_com":"crowdfundly.com","description":"বর্ণনা","country":"দেশ","select_organization_country":"সংস্থার দেশ নির্বাচন করুন","currency":"মুদ্রা","contact_number":"যোগাযোগের নম্বর","select_code":"কোড নির্বাচন করুন","setting_basic":"সেটিংস - বেসিক","setting_plan":"সেটিংস - পরিকল্পনা","setting_payment_history":"সেটিংস - অর্থ প্রদান ইতিহাস","failed_to_load_data":"ডেটা লোড করতে ব্যর্থ","commission_percentage":"কমিশন শতাংশ","contributor_will_see_tip_presets_based_on__":"অবদানকারীরা তাদের অবদানের পরিমাণের তুলনায় এই শতাংশের ভিত্তিতে টিপ প্রিসেটগুলি দেখতে পাবেন।","auto_approval":"স্বয়ং- অনুমোদন","auto_approval_for_publishing_new_campaign":"নতুন প্রচারণা প্রকাশের জন্য স্বয়ং- অনুমোদন","auto_approval_for_updated_campaign":"আপডেট প্রচার প্রচারের জন্য স্বয়ং- অনুমোদন","allow_Refund":"ফেরতের অনুমতি","allow_contributor_to_request_for_refund_contributed_amount":"অবদানকারীকে অর্থ ফেরতের অবদানের পরিমাণের জন্য অনুরোধ করার অনুমতি দিন","escrow":"এসক্রো","escrow_duration":"এসক্রো সময়কাল","do_you_want_to_add_escrow_duration":"আপনি কি এসক্রো সময়কাল যুক্ত করতে চান? ","settings_fundraiser":"সেটিংস - তহবিল সংগ্রহকারী","Setting_fundraiser":"সেটিংস / তহবিল সংগ্রহকারী","contribution_tip_percentage":"অবদান টিপ শতাংশ","settings_media":"সেটিংস / মিডিয়া","setting_media":"সেটিংস - মিডিয়া","logo":"লোগো","recommended_size":"প্রস্তাবিত আকার","px":"px","cover_photo":"প্রচ্ছদ ছবি","favicon":"ফেভ আইকন","slider_images":"স্লাইডার ইমেজ","drag_and_drop_image":"চিত্রটি টানুন এবং ফেলে দিন বা ব্রাউজ চিত্রের জন্য বক্সের উপর ক্লিক করুন। এবং","drop_your_images_or_click_to_Browse":"আপনার চিত্রগুলি ফেলে দিন বা ব্রাউজ করতে ক্লিক করুন।","supports_JPG_JPEG_PNG":"সমর্থন: JPG, JPEG, PNG","invalid_file":"অবৈধ ফাইল","are_you_sure_to_delete":"আপনি এটি মুছে ফেলতে নিশ্চিত?","settings_policies":"সেটিংস / নীতিসমূহ","settings_social":"সেটিংস / সামাজিক","settings_theme":"সেটিংস / থিম","select_page_you_need":"আপনার প্রয়োজনীয় পৃষ্ঠাটি নির্বাচন করুন","privacy_policy":"গোপনীয়তা নীতি","terms_conditions":"শর্তাবলী","refund_policy":"প্রত্যর্পণ নীতি","settings_pages":"সেটিংস - পৃষ্ঠাগুলি","setting_social":"সেটিংস - সামাজিক","select_theme":"থিম নির্বাচন কর","team_accounts":"দল হিসাব","team_account":"দল হিসাব","assign_member":"সদস্য নিয়োগ করুন","looks_like_you_have_not_created":"দেখে মনে হচ্ছে আপনি কোনও সদস্যকে অর্পণ করতে এখনও কোনও ভূমিকা তৈরি করেন নি। সদস্য নির্ধারণের জন্য ভূমিকা (গুলি) তৈরি করুন।","user":"ব্যবহারকারী","enter_user_email":"ব্যবহারকারীর ব্যবহারকারী ইমেল","update_member":"আপডেট সদস্য","looks_like_role_to_assign_to_a_member":"দেখে মনে হচ্ছে আপনি কোনও সদস্যকে অর্পণ করতে এখনও কোনও ভূমিকা তৈরি করেন নি। সদস্য নির্ধারণের জন্য ভূমিকা (গুলি) তৈরি করুন।","my_wallet":"আমার মানিব্যাগ","new_withdrawal_request":"নতুন প্রস্থান অনুরোধ","withdrawal_history":"প্রস্থান ইতিহাস","request_send":"অনুরোধ পাঠানো হল","currencies":"মুদ্রা","symbol":"প্রতীক","default_donation_presets":"ডিফল্ট অনুদান প্রিসেট","loading_presets":"প্রিসেটগুলি লোড হচ্ছে","no_default_preset_found":"কোনও ডিফল্ট প্রিসেট পাওয়া যায় নি","summary":"সারসংক্ষেপ","overview":"ওভারভিউ","total_fundraiser":"মোট তহবিল","total_contributions":"মোট অবদান","total_contributors":"মোট অবদানকারি","total_fundraised":"মোট তহবিল","approved_campaigns":"অনুমোদিত প্রচারগুলি","pending_campaigns":"বিচারাধীন প্রচারাভিযান","raised_campaigns":"উত্থাপিত প্রচারণা","rejected_campaigns":"প্রত্যাখ্যাত প্রচারণা","campaign_stats":"প্রচারের পরিসংখ্যান","contribution_this_year":"এই বছর অবদান","online_raised":"অনলাইন উত্থাপিত","offline_raised":"অফলাইন উত্থাপিত","total_under_verification_campaigns":"যাচাইকরণ প্রচারাভিযানের অধীনে মোট","total":"মোট","crowdfunding_growth":"ক্রাউডফান্ডিং গ্রোথ","today":"আজ","yesterday":"গতকাল","this_month":"এই মাস","this_year":"এই বছর","last_month":"গত মাসে","last_year":"গত বছর","all_the_time":"সব সময়","custom":"কাস্টম","Select_date":"শুরু এবং শেষের তারিখটি নির্বাচন করুন","giver_since":"দাতা হইতে","share_this_story":"এই গল্পটি শেয়ার করুন","loading_giver_story":"প্রদানকারীর গল্প লোড হচ্ছে","what_motivated":"আপনার সাম্প্রতিক অনুদানটি আপনাকে কী উত্সাহিত করেছিল?","to_support_a_worthy":"একটি উপযুক্ত কারণ সমর্থন এবং একটি ছোট স্তরে একটি পার্থক্য করার চেষ্টা করুন।","why_did_you_choose":"আপনি সম্প্রতি যে কারণে সমর্থন করেছেন তা কেন বেছে নিয়েছেন?","can_you_share_with_us":"আপনি আমাদের দেওয়ার যাত্রা থেকে শিখেছেন এমন কিছু আমাদের সাথে ভাগ করে নিতে পারেন?","i_once_had_a_long":"আমার একবার পুনরুদ্ধারের জন্য দীর্ঘ রাস্তা ছিল এবং তাই নিচে নামার সময় এটি কেমন অনুভূত হয়েছিল তা সত্যই বুঝতে পেরেছিলাম। প্রতিটি ছোট জিনিস একটি বড় পার্থক্য তোলে।","what_advice":"যারা আবার ফিরিয়ে দেওয়া শুরু করার কথা ভাবছেন তাদের আপনি কী পরামর্শ দেবেন?","dont_wait":"অপেক্ষা করবেন না। কেউ এখনও কত ছোট তা নির্বিশেষে সরবরাহ করতে পারে। আপাতদৃষ্টিতে যা ছোট মনে হয় তা অন্যের কাছে নাও থাকতে পারে।","give_kindness":"দয়া দান করা কেবলমাত্র দুর্দান্ত অবদানকারীদের সহায়তায়ই সম্ভব। তাদের অনুপ্রেরণামূলক দান করার গল্পগুলি পড়তে অবদানকারীদের যে কোনওটিতে ক্লিক করুন।","with_stripe":"স্ট্রাইপ সহ","connect_your_stripe_account_to":"আপনার স্ট্রাইপ অ্যাকাউন্টটি এতে যুক্ত করুন","retry_save_offer":"পুরস্কার সংরক্ষণ আবার চেষ্টা করুন","edit_campaign_and_manage_offer":"প্রচার সম্পাদনা করুন এবং পুরস্কার পরিচালনা করুন","failed_to_save_offer":"পুরস্কার সংরক্ষণ করতে ব্যর্থ!","couldn_save_your_offer":"আপনার পুরস্কার সংরক্ষণ করতে পারেনি। আপনি এখনও প্রচার প্রচার সম্পাদনা পৃষ্ঠা থেকে পুরস্কার পরিচালনা করতে পারেন।","your_campaign_has_been_created_successfully":"আপনার প্রচার সফলভাবে তৈরি করা হয়েছে তবে অফারটি সংরক্ষণ করতে ব্যর্থ হয়েছে। আপনি এখনও প্রচার প্রচার সম্পাদনা পৃষ্ঠা থেকে অফার পরিচালনা করতে পারেন।","failed_to_create_campaign":"প্রচার তৈরি করতে ব্যর্থ","linked_accounts":"সংযুক্ত অ্যাকাউন্ট","recent_campaigns":"সাম্প্রতিক প্রচারণা","all_campaigns":"সমস্ত প্রচার","create_your_organization":"আপনার সংস্থা তৈরি করুন","organization_name":"প্রতিষ্ঠানের নাম","enter_organization_name":"প্রতিষ্ঠানের নাম লিখুন","length_must_be_between":"দৈর্ঘ্যের মধ্যে হতে হবে","characters_numbers_and":"অক্ষর, সংখ্যা এবং","in_middle_are_allowed":"মাঝখানে অনুমতি দেওয়া হয়","and_20":"এবং 20.","enter_contact_number_here":"যোগাযোগের নম্বরটি এখানে প্রবেশ করুন","select_template":"টেম্পলেট নির্বাচন করুন","template_one":"টেম্পলেট 1","template_two":"টেমপ্লেট 2","i_agree_to_the":"আমি একমত","please_agree_to_terms":"শর্তাবলী সম্মত হন দয়া করে","invalid_username":"ব্যবহৃত নামটি ভুল. দয়া করে ব্যবহারকারীর দৈর্ঘ্য এবং সমর্থিত অক্ষরগুলি পরীক্ষা করুন","verifying_your_email":"আপনার ইমেল যাচাই করা হচ্ছে","failed":"ব্যর্থ হয়েছে","choose_an_image":"একটি চিত্র নির্বাচন করুন","hello_world":"hello world","signin_with_facebook":"ফেসবুক দিয়ে সাইন - ইন করুন","signin_with_google":"গুগল দিয়ে সাইন - ইন করুন","full_name":"পূর্ণ নাম","your_full_name":"আপনার পূর্ণ নাম","example_email_com":"example@email.com","example":"উদাহরণ","confirm_password":"পাসওয়ার্ড নিশ্চিত করুন","sign_up":"নিবন্ধন করুন","profile_page":"প্রোফাইল পৃষ্ঠা","notifications":"বিজ্ঞপ্তি","you_have_no_notification":"আপনার কোনও বিজ্ঞপ্তি নেই","sing_in":"সাইন ইন করুন","get_json":"Get JSON DATA","contact_with":"সাথে যোগাযোগ করুন","your_name":"আপনার নাম","your_email":"আপনার ইমেইল","enter_your_name":"আপনার নাম প্রবেশ করুন","enter_your_email":"আপনার ইমেইল প্রবেশ করুন","enter_your_subject":"আপনার বিষয় লিখুন","your_message_here":"আপনার বার্তা এখানে প্রবেশ করুন","contact_with_crowdfundly":"ক্রাউডফান্ডিলির সাথে যোগাযোগ করুন","no_campaigns_to_show":"দেখানোর জন্য কোনও প্রচার নেই","redeem_coupon":"মুক্ত কুপন","to_access":"অ্যাক্সেস করতে","subscription":"সাবস্ক্রিপশন","lifetime_packages_for_app_sumo_users":"AppSumo ব্যবহারকারীদের জন্য আজীবন প্যাকেজ","lifetime":"আজীবন","current_plan":"বর্তমান পরিকল্পনা","coupon_code_here":"কুপন কোড এখানে","enter_your":"প্রবেশ করান আপনার","fetching_current_plan":"বর্তমান পরিকল্পনা আনছে","sorry_limit":"দুঃখিত, আপনি আপনার সীমাতে পৌঁছেছেন","add_maximum":"পরবর্তী প্যাকেজে আপগ্রেড করতে আরও কুপন যুক্ত করুন। সর্বাধিক","applied_coupons":"ফলিত কুপন","coupons":"কুপন","applied_for":"প্রার্থিত","item_name":"আইটেম নাম","item_price":"আইটেম দাম","coupon_discount_value":"কুপন ছাড়ের মান","don_have_an_account":"কোন অ্যাকাউন্ট নেই?","already_have_an_account":"ইতিমধ্যে একটি সদস্যপদ আছে?","subscribe":"সাবস্ক্রাইব","update_subscription":"সাবস্ক্রিপশন আপডেট করুন","sorry_invalid_code":"দুঃখিত, অবৈধ কুপন কোড","loading_subscriptions":"সাবস্ক্রিপশন লোড হচ্ছে","plan_details":"পরিকল্পনা বিস্তারিত","agency":"সংস্থা","ends_on":"শেষ হয়","please_provide_few_information_about_yourself":"নিজের সম্পর্কে কয়েকটি তথ্য সরবরাহ করুন","no_contribution_has_been_made":"কোন অবদান করা হয়নি","your_plan":"আপনার পরিকল্পনা","for":"জন্য","year":"বছর","your_next_bill":"আপনার পরবর্তী বিল","payment_history":"অর্থ প্রদান ইতিহাস","no_payment":"কোনও অর্থ প্রদানের ইতিহাস পাওয়া যায় নি!","service_period":"পরিষেবা সময়কাল","profile_information":"প্রোফাইল তথ্য","profile_picture":"প্রোফাইল ছবি","delete_account":"হিসাব মুছে ফেলা","your_story":"তোমার গল্প","Your_bio_here":"আপনার জীবনী এখানে","change_Password":"পাসওয়ার্ড পরিবর্তন করুন","new_password":"নতুন পাসওয়ার্ড","current_password":"বর্তমান পাসওয়ার্ড","sorry_to_see_you_o":"আপনি যেতে দেখতে দুঃখিত!","please_note_that":"দয়া করে নোট করুন যে আপনি গণনা করা কোনও প্রচারের মালিকের কাছে এখনও আপনার নাম, ইমেল ঠিকানা এবং আপনি সরবরাহিত অন্য কোনও যোগাযোগের তথ্যে অ্যাক্সেস থাকবে।","for_information":"ক্রাউডফান্ডিলি কীভাবে ডেটা পরিচালনা করে সে সম্পর্কে তথ্যের জন্য, দয়া করে আমাদের দেখুন","warning":"সতর্কতা: এটিকে পূর্বাবস্থায় ফেরা যাবে না!","once_you_deactivate":"একবার আপনি নিজের অ্যাকাউন্টটি নিষ্ক্রিয় করলে আপনি নিম্নলিখিতটি করতে সক্ষম হবেন না","log_in":"প্রবেশ","manage_contributions":"অবদানগুলি পরিচালনা করুন","contact_campaigners":"ক্রাউডফান্ডিলির মাধ্যমে প্রচারকারীদের সাথে যোগাযোগ","access_campaigns":"অভিযান অ্যাক্সেস","reactivate":"আপনার অ্যাকাউন্টটি পুনরায় চালু","all_social_media_connections":"সমস্ত সামাজিক মিডিয়া সংযোগগুলি, রেফারেলগুলি, মন্তব্যগুলি এবং / অথবা নিউজলেটার সাবস্ক্রিপশনগুলি সরানো হবে।","yes_deactivate":"হ্যাঁ, আমার অ্যাকাউন্টটি নিষ্ক্রিয় করুন","save_change":"পরিবর্তন সংরক্ষণ","your_account_has_been_deleted":"আপনার অ্যাকাউন্ট মুছে ফেলা হয়েছে","about_me":"আমার সম্পর্কে","campaigns_so_far":"প্রচারাভিযানগুলি আমি এ পর্যন্ত অবদান রেখেছি","no_campaigns":"কোনও প্রচার পাওয়া যায় নি","something":"কিছু","new":"নতুন","you_are_currently_subscribed_to":"আপনি বর্তমানে সাবস্ক্রাইব করেছেন","have_a_coupon":"একটি কুপন আছে?","note_that":"দ্রষ্টব্য: আপনি ডাউনগ্রেড করতে পারবেন না এবং দয়া করে নিশ্চিত করুন যে আপনি একই পরিকল্পনায় আপগ্রেড করার চেষ্টা করছেন না।","please_provide":"আপনার কার্ডের তথ্য সরবরাহ করুন","please_select_a_plan":"দয়া করে একটি পরিকল্পনা নির্বাচন করুন","completed_secure":"নিরাপদ অর্থ প্রদান সম্পন্ন হয়েছে। আপনাকে সেট আপ করছি crowdfundly.io. অনুগ্রহপূর্বক অপেক্ষা করুন","couldn_complete_payment":"অর্থ প্রদান সম্পূর্ণ করতে পারেনি","choose_package":"প্যাকেজ নির্বাচন করুন","organization":"সংস্থা","organizations":"সংস্থা","your_fullname":"আপনার পূর্ণ নাম","price":"মূল্য","package_name":"প্যাকেজের নাম","please_select_package":"একটি প্যাকেজ নির্বাচন করুন","package_information":"প্যাকেজ তথ্য","setting_you_up":"crowdfundly.io এর জন্য আপনাকে সেট করা হচ্ছে","congratulations":"অভিনন্দন!","payment_successful":"অর্থ প্রদান সফল","set_my_new_password":"আমার নতুন পাসওয়ার্ড সেট করুন","you_can_now":"আপনি এখন আপনার অ্যাকাউন্টে লগইন করতে আপনার নতুন পাসওয়ার্ডটি ব্যবহার করতে পারেন","forgot_password":"পাসওয়ার্ড ভুলে গেছেন?","enter_the_email":"আপনার অ্যাকাউন্টের সাথে সম্পর্কিত ইমেল প্রবেশ করান। আমরা আপনাকে আপনার পাসওয়ার্ড পুনরায় সেট করতে নির্দেশাবলী প্রেরণ করব।","your_account_email":"আপনার অ্যাকাউন্ট ইমেল","you_can_still":"আপনি এখনও বেনামে অবদান রাখতে পারেন","browse_campaigns":"প্রচারগুলি ব্রাউজ করুন","member_name":"সদস্যের নাম","we_make_a_living":"আমরা যা পাই তা দিয়েই আমরা জীবিকা নির্বাহ করি তবে আমরা যা দিই তার দ্বারা জীবনযাপন করি।","winston_churchill":"Winston Churchill","we_believe_that":"আমরা বিশ্বাস করি যে সহানুভূতি প্রতিটি মানুষের মধ্যে বিদ্যমান।","seek_help":"আমরা বিশ্বাস করি যে প্রয়োজনে যে কোনও ব্যক্তির সহায়তা চাইতে সক্ষম হওয়া উচিত।","everyone_has":"আমরা বিশ্বাস করি যে প্রত্যেকেরই দেওয়ার ক্ষমতা রয়েছে।","contented_life":"আমরা বিশ্বাস করি যে সন্তুষ্ট জীবনের মূল চাবিকাঠি।","why_we_exist":"এ কারণেই আমাদের অস্তিত্ব রয়েছে।","where_you_can_help":"আপনি যেখানে সাহায্য করতে পারেন এটি এখানে।","crowdfundly_family":"Crowdfundly পরিবার","we_on_a":"আমরা প্রদানকে গণতান্ত্রিকীকরণের মিশনে আছি","at_crowdfundly":"ক্রাউডফান্ডলে, আমরা প্রয়োজন মানুষের প্রতি মানুষের মমত্ববোধ ও করুণা জাগাতে বিশ্বাস করি row ক্রাউডফান্ডিলি হাসপাতালের বিল সহ রোগীদের সহায়তা করে এবং শিশুদের গ্রামীণ অঞ্চলে অধ্যয়ন করতে সক্ষম করে। ক্রাউডফান্ডিলি ইভেন্টের আয়োজকদের কারণগুলির জন্য তহবিল সংগ্রহ করতে সহায়তা করে। ক্রাউডফান্ডিলি প্রয়োজনীয় দেশগুলির জন্য মানবিক প্রচেষ্টার জন্য সহায়তা সরবরাহ করে।","your_dream_job":"শীর্ষ নিয়োগকর্তার দ্বারা আবিষ্কার করুন এবং আপনার স্বপ্নের কাজটি ধরুন।","tracking_system":"সেরা আবেদনকারী ট্র্যাকিং সিস্টেমের মাধ্যমে আপনার স্বপ্নের কাজগুলি সন্ধান করুন।","enter_password":"আপনার পাসওয়ার্ড লিখুন","enter_full_name":"পুরো নাম লিখুন","why_you_want_to":"কেন আপনি চান","fundraiser_your_note":"আপনার নোট সহ তহবিল সংগ্রহকারীকে অবহিত করা হবে।","campaign_analytics":"প্রচার বিশ্লেষণ","statistics":"পরিসংখ্যান","campaign_management":"প্রচারাভিযান পরিচালনার","thank_you_message":"ধন্যবাদ বার্তা","add_offline_donation":"অফলাইন অনুদান যোগ করুন","write_contributor_address_here":"এখানে অবদানকারীদের ঠিকানা লিখুন","is_anonymous":"বেনামে","has_endorsed_as_a":"একটি হিসাবে সমর্থন করেছে","no_offer_found":"কোনও পুরস্কার পাওয়া যায়নি","add_a_new_update_to_this_campaign":"এই প্রচারে একটি নতুন আপডেট যুক্ত করুন","video":"ভিডিও","add_video":"ভিডিও যোগ করুন","post_update":"পোস্ট আপডেট","campaign_update":"প্রচারের আপডেটটি সফলভাবে তৈরি হয়েছে","campaign_updated":"প্রচারের আপডেট সাফল্যের সাথে মোছা হয়েছে","post_an_update__":"অবদানকারী এবং পৃষ্ঠা দর্শনার্থীদের কাছে আপনার প্রচার সম্পর্কে একটি আপডেট পোস্ট করুন","no_updates_found":"কোনও আপডেট পাওয়া যায় নি","give_baby_cheryl":"Give baby Cheryl a fighting chance 2020","back_this_campaign":"এই প্রচার ফিরে","contributions_are_not":"অবদানগুলি পার্সের সাথে জড়িত নয়","select_a_donation_amount":"অনুদানের পরিমাণ নির্বাচন করুন","you_can_also_contribute":"আপনি একই পরিমাণে অবদান রাখতে পারেন যা আপনি বেশি স্বাচ্ছন্দ্য বোধ করেন। প্রতিটি সামান্য বিট সাহায্য!","you_contributing_Crowdfundly":"আপনি নাইম ফাউন্ডেশন এর মাধ্যমে তৃতীয় প্রচারে অবদান রাখছেন Crowdfundly","maximum_250_characters":"সর্বোচ্চ ২৫০ টি অক্ষর","you_can_also_contribute_a_similar":"আপনি একই পরিমাণে অবদান রাখতে পারেন যা আপনি বেশি স্বাচ্ছন্দ্য বোধ করেন। প্রতিটি ছোট বিট সাহায্য করে!","avatar":"অবতার","give_anonymously":"বেনামে দেবেন?","click_to_payment":"অর্থ প্রদানের জন্য ক্লিক করুন","share_with_facebook":"এই প্রচারণা সম্পর্কে ফেসবুক বন্ধুদের সাথে ভাগ করবেন?","endorse_campaign":"প্রচার অনুমোদন করুন","your_fundraiser":"তহবিলাকারীর সাথে আপনার সম্পর্ক","you_endorsement_message":"আপনার সমর্থন বার্তা","pre_acceptance":"প্রাক গ্রহণযোগ্যতা","assign":"অর্পণ","are_you_sure__":"আপনি এই প্রচারটি অনুমোদন করতে চান?","share_this_campaign":"এই প্রচারটি শেয়ার করুন","a_single_share":"আপনার কাছ থেকে একক ভাগ সাধারণত কমপক্ষে একটি অনুদানের দিকে নিয়ে যায়। এই প্রচারটি ভাগ করে নিতে কেবল 10 সেকেন্ড সময় লাগে","share_facebook":"ফেসবুকে শেয়ার করুন","share_whatsapp":"হোয়াটসঅ্যাপে শেয়ার করুন","share_twitter":"টুইটারে শেয়ার করুন","share_linkedin":"লিঙ্কডইনে শেয়ার করুন","or_print":"অথবা এই ফ্লাইয়ারটি মুদ্রণ করুন এবং বিশ্বজুড়ে ছড়িয়ে দিতে সহায়তা করুন","be_the_first":"এই প্রচারে প্রথম অবদান রাখুন!","verified_by":"কর্তৃক যাচাইকৃত","endorsed_by":"দ্বারা অনুমোদিত","facebook_verified":"ফেসবুক যাচাই করা হয়েছে","donations_will_go_to":"অনুদান যেতে হবে","via":"মাধ্যমে","download_flyer":"পিডিএফ ফ্লায়ার ডাউনলোড করুন","all":"সকল","submitted":"জমা দেওয়া","requested":"অনুরোধ","the_campaign":"আপনি সফলভাবে প্রচারটি গ্রহণ করেছেন","add_new_opinion":"নতুন মতামত যুক্ত করুন","to_contact":"তহবিল সংগ্রহকারী এবং অবদানকারীদের সাথে যোগাযোগ করতে","dont_give_up":"হাল ছাড়বেন না, শুভকামনা","all_the_best":"শুভকামনা, হাল ছাড়বেন না","someone_is_typing":"কেউ টাইপ করছে","drafted":"খসড়া করা হয়েছে","total_refunds":"মোট ফেরত","in_minutes":"কয়েক মিনিটের মধ্যে একটি তহবিল সংগ্রহ শুরু করে শুরু করুন","let_present":"অফারগুলো উপস্থাপন করা যাক","save_to_draft":"খসড়াতে সংরক্ষণ করুন","are_you_sure_once__":"পুরষ্কার মোছা হয়ে গেলে, পূর্বাবস্থায় ফেরানো যাবে না!","choose_your_campaign_category":"আপনার প্রচারের বিভাগটি নির্বাচন করুন","cant_find_your_suitable_category":"আপনার উপযুক্ত বিভাগটি খুঁজে পাচ্ছেন না?","request_new_category":"অনুরোধ নতুন বিভাগ","back":"পেছনে","next":"পরবর্তী","campaign_gallery":"এখন সময় একটি প্রচার গ্যালারী সেট আপ করার।","request_for_a_new_category":"আপনি যদি আপনার উপযুক্ত বিভাগটি খুঁজে না পান তবে আপনি একটি নতুন বিভাগের জন্য অনুরোধ করতে পারেন।","category_name":"বিভাগ নাম","why_you_suggest":"আপনি কেন বিভাগটি সুপারিশ করলেন? (ঐচ্ছিক)","make_request":"অনুরোধ করুন","now":"এখন আপনার গল্প বলার সময় এসেছে","sweet":"খুব সুন্দর! এখন আপনার প্রচারের জন্য একটি তহবিল সংগ্রহ লক্ষ্য নির্ধারণ করুন।","hope_up_well":"আশা করি আপনি ভালভাবে ধরে আছেন","view_story":"গল্প দেখুন","be_happy_be_kind":"সুখী হন, সদয় হন","let_crowdFundly_assist_you":"ক্রাউডফান্ডিলি আপনাকে সাহায্য করবে","contributed":"অবদান","loading_giver_stories":"প্রদানকারীর গল্প লোড হচ্ছে","life_will":"দাতব্য হৃদয় লাভের জন্য জীবন আরও অর্থবহ হবে","start_with":"আপনি যে পরিমাণে স্বাচ্ছন্দ্য বোধ করেন তা দিয়ে শুরু করুন। আপনি যখন অভাবী লোকদের সহায়তা করতে পারেন তখন আপনার ভাল লাগবে। আমি ভাল লাগাতে অবদান রাখার জন্য বেছে নিয়েছি","dont_wait_one":"অপেক্ষা করবেন না। কেউ এখনও কত ছোট তা নির্বিশেষে সরবরাহ করতে পারে। আপাতদৃষ্টিতে যা ছোট মনে হয় তা অন্যের কাছে নাও থাকতে পারে। আমি অবদান রাখি না কারণ আমি ধনী, কিন্তু আমি বুঝতে পারি যে জীবনটা কেমন সুন্দর অনুভব করছে","one_can_still_provide":"কেউ এখনও কত ছোট তা নির্বিশেষে সরবরাহ করতে পারে। আপাতদৃষ্টিতে যা ছোট মনে হয় তা অন্যের কাছে নাও থাকতে পারে। আমি অবদান নেই কারণ।","life_will_be_more":"দাতব্য হৃদয় লাভের জন্য জীবন আরও অর্থবহ হবে। আপনি যখন দয়া দেখান, দয়াও আপনার কাছে ফিরে আসবে, এটাই","crowdfundly_has_been_featured_in":"ক্রাউডফুন্ডলি বৈশিষ্ট্যযুক্ত হয়েছে","emergency":"জরুরী","please_contribute":"দয়া করে অবদান রাখুন","givers":"প্রদানকারী","loading_successful_campaigns":"সফল প্রচারগুলি লোড হচ্ছে","see_more":"আরো দেখুন","submit_an_opinion":"একটি মতামত জমা দিন","opinion":"মতামত","your_opinion_here":"আপনার মতামত এখানে","loading_opinions":"মতামত লোড হচ্ছে","offer_title":"পুরস্কার শিরোনাম","enter_offer_title":"পুরস্কার শিরোনাম প্রবেশ করুন","regular_price":"নিয়মিত দাম","offer_price":"পুরস্কার মূল্য","stock":"স্টক","shipping":"শিপিং","add_new_location":"নতুন অবস্থান যুক্ত করুন","shipping_location":"শিপিংয়ের অবস্থান","shipping_fee":"শিপিং ফি","describe_offer":"পুরস্কার বর্ণনা করুন","offer_regular_price":"পুরস্কার মূল্য নিয়মিত দামের চেয়ে বেশি হতে পারে না","shipping_locations":"কমপক্ষে একটি শিপিং অবস্থান নির্বাচন করুন!","successfully_offer_added":"সফলভাবে পুরস্কার যুক্ত হয়েছে ","select_shipping_location":"শিপিংয়ের অবস্থান নির্বাচন করুন","off":"বন্ধ","why_refund":"আপনি কেন ফেরত চাচ্ছেন","loading_timeline":"টাইমলাইন লোড হচ্ছে","to":"প্রতি","monthly":"মাসিক","month":"মাস","yearly":"বার্ষিক","free":"বিনামূল্যে","plan_a":"Plan A","plan_b":"Plan B","selected":"নির্বাচিত","upgrade":"আপগ্রেড","get_now":"এখনই নাও","contribution":"অবদান","you_are_contributing":"আপনি অবদান রাখছেন","contribution_info":"অবদানের তথ্য","select_a_contribution_amount":"একটি অবদানের পরিমাণ নির্বাচন করুন","contributions_are_not_associated_with_perks":"অবদানগুলি অনুমান এর সাথে জড়িত নয়।","view_campaign":"প্রচার দেখুন","join_our_subscriber_list_to_get_the_latest_news_update_special_you_inbox":"সর্বশেষ খবর পেতে আমাদের গ্রাহক তালিকায় যোগ দিন। বিশেষ আপনি ইনবক্স আপডেট করুন","browse":"ব্রাউজ করুন","faq":"FAQ","add_organization":"সংস্থা যোগ করুন","my_profile":"প্রোফাইল","enter_username":"ব্যবহারকারীর নাম লিখুন","enter_org_username":"প্রতিষ্ঠানের ব্যবহারিক নাম লিখুন","looks_like_you_have_not_created_any_role_yet_to_assign_to_a_member_create_role_first_to_assign_a_member":"দেখে মনে হচ্ছে আপনি কোনও সদস্যকে অর্পণ করতে এখনও কোনও ভূমিকা তৈরি করেন নি। সদস্য নির্ধারণের জন্য ভূমিকা (গুলি) তৈরি করুন।","user_email":"ব্যবহারকারী ইমেল","check_all":"সবগুলো নির্বাচন করুন ","update_role":"ভূমিকা হালনাগাদ করুন","bank":"ব্যাংক","wallet":"মানিব্যাগ","payouts_history":"অর্থ প্রদানের ইতিহাস","no_attachment":"কোন সংযুক্তি নেই","no_contributions_have_been_made":"কোনও অবদান নেই","contributed_anonymously":"বেনামে অবদান","select_campaign_type":"প্রচারের ধরণ নির্বাচন করুন","contribution_amount":"অবদানের পরিমাণ","startup":"স্টার্টআপ","business":"ব্যবসা","move_up":"উপরে নিয়ে যান","move_down":"নিচে নিয়ে যান","upload_image":"ছবি আপলাড","recommended_resolution_700_x_700_px_minimum_resolution_400_x_400_px":"প্রস্তাবিত রেজোলিউশন 700 x 700 পিক্স, ন্যূনতম রেজোলিউশন 400 x 400 পিক্সেল।","kindness_level_will_go_up_as_you_participate_on_crowdfundly_by_contributing":"আপনি অবদানের মাধ্যমে ক্রাউডফান্ডিলিতে অংশ নেওয়ার সময় দয়াশীলতা বাড়বে।","request_for_refund":"ফেরতের জন্য অনুরোধ","i_want_refund_because":"আমি ফেরত চাই কারণ","select_payout_method":"প্রদানের পদ্ধতি নির্বাচন করুন","paypal_email":"পেপাল ইমেল","enter_your_paypal_email":"আপনার পেপাল ইমেল লিখুন","beneficiary_name":"সুবিধা প্রাপ্ত নাম","account_number":"অ্যাকাউন্ট নম্বর","bank_name":"ব্যাংকের নাম","branch_name":"শাখার নাম","enter":"প্রবেশ করান","swift_code":"সুইফট কোড","bangladesh":"বাংলাদেশ","other":"অন্যান্য","select_country":"দেশ নির্বাচন করুন","payout_information":"অর্থ প্রদানের তথ্য","requested_date":"অনুরোধের তারিখ","last_updated_at":"সর্বশেষ হালনাগাদ","upload_an_attachment":"একটি সংযুক্তি আপলোড করুন","for_business":"পুরস্কার ভিত্তিক প্রচার","for_charity":"অনুদান ভিত্তিক প্রচার","now_you_can_choose_how_you_want_to_run_your_campaign__":"এখন আপনি কীভাবে আপনার প্রচার চালাতে চান তা নির্বাচন করতে পারেন। নির্বাচিতটিকে পরিবর্তন করা যাবে না।","now_you_can_choose_how_you_want_to_run_your_campaign_selected_one_can_not_be_changed":"এখন আপনি কীভাবে আপনার প্রচার চালাতে চান তা নির্বাচন করতে পারেন। নির্বাচিতটিকে পরিবর্তন করা যাবে না।","this_creates_urgency_and_should_always_be_used_when_money_is_needed_before_a_certain_time":"এটি জরুরিতা তৈরি করে এবং যখন নির্দিষ্ট সময়ের আগে অর্থের প্রয়োজন হয় তখন সর্বদা ব্যবহার করা উচিত।","ongoing_fundraise":"চলমান (কোনও সময়সীমা নেই) তহবিল","this_should_be_used_if_you_are_collecting_money_on_a_regular_basis":"আপনি যদি নিয়মিত অর্থ সংগ্রহ করছেন তবে এটি ব্যবহার করা উচিত।","has_contributed":"অবদান রেখেছে","has_contributed_offline":"অফলাইন অবদান রেখেছে","contribute_now":"এখনই অবদান রাখুন","sorry_you_didn_t_contribute_any_campaign_yet":"দুঃখিত, আপনি এখনও কোনও প্রচার অবদান করেন নি।","online":"অনলাইন","offline":"অফলাইন","wallet_payout":"মানিব্যাগ এবং অর্থ প্রদান","team":"দল","view_organization":"সংস্থা দেখুন","contribution_preset_page_description":"আপনি যদি সত্যই আপনার তহবিল সংগ্রহ লক্ষ্য করতে চান, আপনার নীচে আপনার অবদান পূর্ব নির্ধারিত পরিমাণ কাস্টমাইজ করা উচিত।👇 </br> অবদানের জন্য আপনি পূর্ব নির্ধারিত পরিমাণগুলি সেট করতে পারেন এবং সেই পরিমাণটি আপনার পক্ষে কী বোঝায় তা ব্যাখ্যা করতে পারেন। এটি অবদানকারীদের তাদের অর্থ কীভাবে আপনাকে সহায়তা করতে পারে তা কল্পনা করতে সহায়তা করবে।","sent_by_organization":"সংস্থা পাঠিয়েছে","received_by_fundraiser":"তহবিল সংগ্রহকারী দ্বারা প্রাপ্ত","_________25_Aug_2020__________":"--------------25 Aug, 2020-----------------","organization_not_found":"সংগঠনটি পাওয়া গেল না!","i_have_contributed":"আমি অবদান রেখেছি","times":"বার","i_have_raised_contribution_for":"এর জন্য অবদান রেখেছি","i_am_contributing_since":"আমি তখন থেকে অবদান রাখছি","the_page_you_requested_could_not_be_found":"আপনার অনুরোধ পৃষ্ঠাটি পাওয়া যায় নি","contact_fundraiser":"ফান্ডারাইজারের সাথে যোগাযোগ করুন","offer_image":"পুরস্কার ইমেজ","crowdfundly_relies_on_your_generosity":"ক্রাউডফান্ডিলি তহবিল সংগ্রহকারীদের জন্য 0% প্ল্যাটফর্ম ফি প্রদান অব্যাহত রাখতে আপনার উদারতার উপর নির্ভর করে","write_your_message_here":"আপনার বার্তা এখানে লিখুন","choose_a_payment_option":"একটি অর্থ প্রদানের পদ্ধতি নির্বাচন করুন","debit_or_credit_card":"ডেবিট বা ক্রেডিট কার্ড","sorry_payment_failed":"দুঃখিত! পেমেন্ট ব্যর্থ হয়েছে","something_went_wrong_with_your_payment":"আপনার অর্থ প্রদানের সাথে কিছু ভুল হয়েছে","redirecting_to_campaign":"প্রচারে পুনর্নির্দেশ","tip":"টিপ","shipping_cost":"শিপিং খরচ","cant_process_stripe_now":"স্ট্রাইপ এখন প্রক্রিয়া করতে পারবেন না","cant_process_paypal_now":"পেপাল এখন প্রক্রিয়া করতে পারবেন না","cant_process_aamarpay_now":"আমারপে এখন প্রক্রিয়া করতে পারবেন না","cant_process_sslcommerz_now":"এসএসএলকমার্স এখন প্রক্রিয়া করতে পারবেন না","try_other_payment_options":"অন্যান্য অর্থপ্রদানের বিকল্পগুলি ব্যবহার করে দেখুন","error_making_card_mount":"কার্ড মাউন্ট করতে ত্রুটি","contribution_tip_amount":"অবদানের টিপ পরিমাণ","image_uploader":"চিত্র আপলোডকারী","banner_image":"ব্যানার চিত্র","amount_preset":"পরিমাণ প্রসেট","campaign_type":"প্রচারের ধরণ","save_and_preview_campaign":"প্রচার এবং সংরক্ষণের পূর্বরূপ দেখুন","are_you_sure_to_publish_once_published_it_will_open_for_contribution":"প্রকাশিত হলে এটি অবদানের জন্য উন্মুক্ত হবে","fundraiser_image":"তহবিল সংগ্রহকারী চিত্র","report_this_campaign":"এই প্রচারের রিপোর্ট করুন\\n","the_following_are_examples_of_fraudulent_activities-on_crowdfundly":"ক্রাউডফান্ডিলিতে জালিয়াতিমূলক ক্রিয়াকলাপগুলির উদাহরণ নীচে রয়েছে","breaking_the_law":"আইন ভঙ্গ","misrepresenting_ones_identity_and_lying__":"কারও পরিচয় ভুলভাবে উপস্থাপন করা এবং প্রচারের উপকারকারীর সাথে সম্পর্কে মিথ্যা কথা বলা","posting_misleading_statements_on_the_campaign":"প্রচারে বিভ্রান্তিমূলক বক্তব্য পোস্ট করা","not_sending_the_raised_funds_to_the_stated_beneficiary":"উত্থাপিত তহবিল বিবৃত সুবিধাভোগীকে প্রেরণ না করা","sometimes_there_may_be_situations__":"কখনও কখনও, এমন পরিস্থিতি তৈরি হতে পারে যা সন্দেহ তৈরি করতে পারে তবে আমাদের প্ল্যাটফর্মের মতো জালিয়াতিমূলক কার্যকলাপ হিসাবে বিবেচিত হয় না","rumors_or_speculations_of_fraud":"গুজব বা প্রতারণার জল্পনা","disagreement_with_the_nature__":"প্রচারের প্রকৃতি বা প্রচারের সংগঠকের চরিত্রের সাথে মতভেদ","custody_or_familial_disputes_and_disagreements":"রীতিনীতি বা পারিবারিক বিরোধ এবং মতবিরোধ","to_report_a_campaign_for_fraud__":"ক্রাউডফান্ডিলিতে জালিয়াতির জন্য একটি প্রচার প্রতিবেদন করতে, দয়া করে নীচের ফর্মটি পূরণ করুন এবং জমা দিন।","enter_your_full_name":"আপনার পুরো নাম লিখুন","your_phone_number":"আপনার ফোন নম্বর","enter_your_phone_number":"আপনার ফোন নম্বর লিখুন","required_in_case_our_team_needs__":"আমাদের দলের আরও তথ্যের জন্য আপনার সাথে যোগাযোগ করা প্রয়োজন ক্ষেত্রে প্রয়োজনীয়","your_email_number":"আপনার ইমেইল ঠিকানা","enter_your_email_address":"আপনার ই - মেইল লিখুন ","do_you_know_the_campaign_organizer":"আপনি কি প্রচারের সংগঠককে জানেন?","please_explain_your_relationship_to_the_campaign_or_campaign_organizer":"প্রচার বা প্রচারের সংগঠককে আপনার সম্পর্কটি ব্যাখ্যা করুন","write_here":"এখানে লিখুন ","which_best_describes_you":"কোনটি আপনাকে সেরা বর্ণনা করে?","describe_your_concerns_about_this_campaign":"এই প্রচার সম্পর্কে আপনার উদ্বেগগুলির বর্ণনা দিন","are_you_involved_in_a_legal_dispute_with_the_campaign_organizer":"আপনি কি প্রচারের সংগঠকের সাথে কোনও আইনি বিবাদে জড়িত?","does_the_campaign_violate_crowdfundlys_terms_and_conditions":"প্রচারটি ক্রাউডফান্ডলির শর্তাবলী লঙ্ঘন করে?","unable_to_prepare_data":"ডেটা প্রস্তুত করতে অক্ষম!","flyer_campaign_summary":"ফ্লাইয়ার প্রচারের সারাংশ","contribution_amount_in":"অবদানের পরিমাণ ","contribution_amount_in_last_30_days":"গত ৩০ দিনে অবদানের পরিমাণ","total_contribution_amount":"মোট অবদানের পরিমাণ","set_a_thank_you_message_to_contributor":"অবদানকারীকে একটি ধন্যবাদ বার্তা সেট করুন","save_message":"বার্তা সংরক্ষণ করুন","fundraiser_avatar":"তহবিল সংরোগকারীর ছবি","you_can_contribute_after_publishing_the_campaign":"প্রচার প্রচারের পরে আপনি অবদান রাখতে পারেন","select_a_offer":"একটি পুরস্কার নির্বাচন করুন","chat_with_fundraiser_and_contributors":"তহবিল সংগ্রহকারী এবং অবদানকারীদের সাথে চ্যাট করুন","start_chat":"Start chat","you_can_chat_with_the_fundraiser_after_publishing_the_campaign":"প্রচার প্রচারের পরে আপনি তহবিলের সাথে চ্যাট করতে পারেন","reason_for_campaign_rejection":"প্রচার প্রত্যাখার কারণ","successfully_created":"সফলভাবে তৈরি","from":"থেকে","failed_to_save_offers":"পুরস্কারগুলো সংরক্ষণ করতে ব্যর্থ!","your_campaign_has_been_created_successfully_but_failed_to_save_offers":"আপনার প্রচার সফলভাবে তৈরি করা হয়েছে তবে পুরস্কারগুলো সংরক্ষণ করতে ব্যর্থ হয়েছে","slider_image":"স্লাইডার চিত্র","organization_logo":"সংস্থার লোগো","allowed_text_organization_user_name":"এবং ২০. অক্ষর, সংখ্যা এবং মাঝখানে \'-\' অনুমোদিত হয়","write_organization_address_here":"এখানে প্রতিষ্ঠানের ঠিকানা লিখুন","write_organization_description_here":"প্রতিষ্ঠানের বিবরণ এখানে লিখুন","code":"কোড","apply_your_coupon_code_to_get_an_discount":"ছাড় পেতে আপনার কুপন কোডটি প্রয়োগ করুন","please_fill_in_all_the_fields":"সমস্ত ক্ষেত্রগুলি পূরণ করুন","pay_now":"এখন পরিশোধ করুন","packages":"প্যাকেজ","subscribe_now":"এখন সাবস্ক্রাইব করুন","subscriptions":"সাবস্ক্রিপশন","coupon_code":"কুপন কোড","downgrade":"ডাউনগ্রেড","type_your_name_here":"এখানে আপনার নাম টাইপ করুন","type_your_email_address":"আপনার ইমেল ঠিকানা টাইপ করুন","billing_information":"বিল সংক্রান্ত তথ্য","saved_cards":"সংরক্ষিত কার্ড","saved_card":"সংরক্ষিত কার্ড","card_information":"কার্ড তথ্য","refund_request":"টাকা ফেরত অনুরোধ","i_have_changed_my_mind":"আমি আমার মন পরিবর্তন করেছি","copied_to_clipboard":"ক্লিপবোর্ডে অনুলিপি করা হয়েছে","apply_coupon":"কুপন প্রয়োগ করুন","coupon":"কুপন","remove":"অপসারণ","password":"পাসওয়ার্ড","authenticating":"প্রমাণীকরণ করা হচ্ছে","sorry_you_have_reached_your_limit":"দুঃখিত, আপনি আপনার সীমাতে পৌঁছেছেন","add_more_coupon_to_upgrade_to_next_package":"পরবর্তী প্যাকেজে আপগ্রেড করতে আরও কুপন যুক্ত করুন। সর্বাধিক","add_new_campaign":"নতুন প্রচারণা যুক্ত করুন","most_contributed":"সর্বাধিক অবদান","view_profile":"প্রোফাইল দেখুন","view_campaigns":"প্রচারগুলি দেখুন","available_roles":"উপলব্ধ ভূমিকা","modules":"মডিউল","total_earned":"মোট অর্জিত","available_amount":"উপলব্ধ পরিমাণ","total_paid":"মোট পরিশোধিত","total_withdrawn":"মোট অপসারিত","pending_payouts":"মুলতুবি পরিশোধ","wallet_not_found":"মানিব্যাগ পাওয়া গেল না!","mark_as_received":"প্রাপ্ত হিসাবে চিহ্নিত করুন","reloading":"পুনরায় লোড হচ্ছে","accepting_payout_request_means__":"অর্থ প্রদানের অনুরোধ গ্রহণ করার অর্থ হল আপনি পরে অর্থ প্রদানের সরবরাহ করবেন","add_new_payout_method":"নতুন পরিশোধের পদ্ধতি যুক্ত করুন","view_details":"বিস্তারিত দেখুন","method_saved":"পদ্ধতিটি সংরক্ষণ করা হয়েছে","method_updated":"পদ্ধতি আপডেট হয়েছে","add_role":"ভূমিকা যুক্ত করুন","successfully_role_added":"সাফল্যের সাথে নতুন ভূমিকা যুক্ত হয়েছে","successfully_role_updated":"সাফল্যের সাথে ভূমিকা আপডেট হয়েছে","allow_tip":"টিপস অনুমতি","allow_tip_during_contribution":"অবদানের সময় টিপসকে অনুমতি দেবেন?","without_connecting_stripe_payment":"স্ট্রিপ পেমেন্ট সংযোগ ছাড়াই","personal_stripe_credentials":"ব্যক্তিগত স্ট্রাইপ","stripe_connect_credentials":"স্ট্রাইপ কানেক্ট","we_will_keep_your_credentials_totally_encrypted":"আমরা আপনার শংসাপত্রগুলি সম্পূর্ণরূপে এনক্রিপ্ট করে রাখব!","learn_more":"আরও জানুন?","stripe_key":"স্ট্রাইপ কী","stripe_secret":"স্ট্রাইপ সিক্রেট","sslcommerz_credentials":"এসএসএলকমার্স শংসাপত্রাদি","your_credentials_always_safe_at__":"আপনার শংসাপত্রগুলি ক্রাউডফান্ডিলিতে সর্বদা সুরক্ষিত থাকে। আমরা এন্ড টু এন্ড এনক্রিপশন এবং পাশাপাশি ডেটাবেসে এনক্রিপ্ট ব্যবহার করি","store_id":"স্টোর আইডি","store_password":"স্টোর পাসওয়ার্ড","paypal_credentials":"পেপাল শংসাপত্র","client_id":"ক্লায়েন্ট আইডি","client_secret":"ক্লায়েন্ট সিক্রেট","about_sslcommerz":"এসএসএলকমার্স সম্পর্কিত","close":"বন্ধ","about_paypal":"পেপাল সম্পর্কিত","about_stripe":"স্ট্রাইপ সম্পর্কিত","settings_crowdfunding":"সেটিংস / ক্রাউডফান্ডিং","choose_logo":"লোগো নির্বাচন করুন","choose_favicon":"ফেভ আইকন নির্বাচন করুন","choose_cover_photo":"কভার ফটো নির্বাচন করুন","gallery_preview":"গ্যালারী প্রাকদর্শন","select_social_type":"সামাজিক ধরণ নির্বাচন করুন","theme":"থিম","no_team_account_found":"কোনও দলের অ্যাকাউন্ট পাওয়া যায় নি","not_set_yet":"এখনও সেট করা হয়নি","take_me_to_create_a_role":"একটি ভূমিকা তৈরি করতে আমাকে নিন","successfully_role_deleted":"সাফল্যের সাথে ভূমিকা মোছা হয়েছে","available_for_withdrawal":"অপসারণের জন্য উপলব্ধ","total_fund_raised":"মোট তহবিল-উত্থাপিত","pending_clearance":"মুলতুবি ছাড়পত্র","paid":"প্রদত্ত","available_currencies":"উপলব্ধ মুদ্রা","base_currency":"ভিত্তি মুদ্রা","currencies_are_loading":"মুদ্রাগুলি লোড হচ্ছে","total_publish_campaigns":"মোট প্রকাশিত প্রচারণা","total_payout":"মোট পরিশোধ ","total_pending_clearance":"মোট মুলতুবি ছাড়পত্র","available_to_payout":"পরিশোধের জন্য উপলব্ধ ","revenue":"রাজস্ব","total_revenue":"মোট রাজস্ব","total_tip_amount":"মোট টিপের পরিমাণ","total_org_commission":"সংস্থার মোট কমিশন","select_a_start_and_end_date":"একটি শুরু এবং শেষ তারিখ নির্বাচন করুন","last_7_days":"শেষ ৭ দিন","last_seven_day":"শেষ ৭ দিন","please_select_a_date_range":"দয়া করে একটি তারিখের সীমা নির্বাচন করুন","total_payouts":"মোট পরিশোধ","contribution_preset_amounts":"অবদান প্রসেট পরিমাণ","brochure":"প্রচারপত্র","menu_item":"মেনু আইটেম","yes_confirm":"হ্যাঁ, নিশ্চিত করুন","no_cancel":"না, বাতিল করুন","mark_all_as_read":"সবগুলো পঠিত বলে সনাক্ত কর","marking_all_as_read":"সকলকে পঠিত হিসাবে চিহ্নিত করা হচ্ছে","you_have_no_new_notification":"আপনার কাছে কোনও নতুন বিজ্ঞপ্তি নেই","view_all_notifications":"সমস্ত বিজ্ঞপ্তি দেখুন","loading_notifications":"বিজ্ঞপ্তিগুলি লোড হচ্ছে","no_data_found":"কোনও ডেটা পাওয়া যায় নি","select_an_option":"যেকোনো একটি নির্বাচন করুন","user_avatar":"ব্যবহারকারী ছবি","version":"সংস্করণ","last_updated":"সর্বশেষ সংষ্করণ","menu_icon":"মেনু আইকন","view_org":"সংগঠন দেখুন।","view_public_page":"সর্বজনীন পৃষ্ঠা দেখুন","delete_organization":"সংস্থাটি মুছুন","all_the_data_associated_with__":"সংস্থার সাথে সম্পর্কিত সমস্ত ডেটা মুছে ফেলা হবে।","name_doesnt_match":"নাম মেলে না","organization_deleted":"সংস্থাটি মোছা হয়েছে","animated_icon":"অ্যানিমেটেড আইকন","copyright":"Copyright ©","powered_by":"Powered By","browse_all_campaign":"সমস্ত প্রচারণা ব্রাউজ করুন","plan":"পরিকল্পনা","all_plans":"সমস্ত পরিকল্পনা","billing":"বিলিং","fundraiser_can_still_resubmit_campaign":"তহবিল সংগ্রহকারী এখনও প্রচার জমা দিতে পারেন","share_your_updates":"আপনার আপডেট শেয়ার করুন!","remove_icon":"আইকন","enter_video_url":"ভিডিও ইউআরএল প্রবেশ করান","post_an_update":"একটি আপডেট পোস্ট করুন","make_a_contribution":"অবদান রাখুন","select_a_perk":"একটি অনুমান নির্বাচন করুন","i_donate_because":"আমি দান করি কারণ","e_g_family_member_friend_etc":"যেমন: পরিবার সদস্য, বন্ধু ইত্যাদি,","please_write_your_endorsement_message_here":"আপনার অনুমোদনের বার্তা এখানে লিখুন দয়া করে","verify_and_publish":"যাচাই এবং প্রকাশ করুন","the_campaign_will_be_closed__":"প্রচারটি বন্ধ হয়ে যাবে এবং তহবিলাকারী আরও কোনও পদক্ষেপ নিতে সক্ষম হবে না","we_will_send_you_an_email_to_reminding_you__":"আমরা আপনাকে অবদান রাখার পরে মনে করিয়ে দেওয়ার জন্য একটি ইমেল পাঠাব। কখন আপনাকে স্মরণ করিয়ে দেওয়া উচিত তা নির্বাচন করুন","thanks_for_sharing":"ভাগ করে নেওয়ার জন্য ধন্যবাদ","badge":"ব্যাজ","verified":"যাচাইকৃত","no_story_available":"কোন গল্প উপলব্ধ নেই ","loading_messages":"বার্তা লোড হচ্ছে","icon":"আইকন","create_new":"নতুন তৈরি করুন","this_website_uses_cookies_in_oder__":"এই ওয়েবসাইটটি আপনাকে এই ওয়েবসাইটটির সর্বোত্তম পারফরম্যান্স অনুভব করার জন্য কুকি ব্যবহার করে","allow_cookie":"কুকিকে অনুমতি দিন","publish_your_campaign":"আপনার প্রচার প্রচার করুন","search_category":"বিভাগ অনুসন্ধান করুন","what_are_you_crowdfunding_for_you":"আপনি এর জন্য তহবিল সংগ্রহ করছেন?","project_venture_etc":"যেমন প্রকল্প, ভেনচার","charitable_causes":"যেমন অলাভজনক কারণ","fundraising_type":"তহবিল সংগ্রহের ধরন","cancel":"বাতিল","crop":"সংরক্ষণ","image_size_is_too_large__":"চিত্রের আকারটি খুব বড়, দয়া করে চিত্রটির আকার পরিবর্তন করুন বা এর চেয়ে ছোট চিত্র সরবরাহ করুন","choose_image":"চিত্র নির্বাচন করুন","select_payment_method":"অর্থ প্রদানের পদ্ধতি নির্বাচন করুন","write_note_here":"এখানে নোট লিখুন","create_new_campaign_offer":"নতুন প্রচারাভিযানের পুরস্কার তৈরি করুন","create_offer":"পুরস্কার তৈরি করুন","worldwide":"বিশ্বব্যাপী","offer_price_exceeded_regular_price":"পুরস্কারের দাম নিয়মিত দাম ছাড়িয়ে গেল!","all_claimed":"সমস্ত দাবি করা","only":"শুধুমাত্র","left":"বাকি আছে","sold_out":"বিক্রি হয়ে গেছে","update_campaign_offer":"প্রচারের পুরস্কার আপডেট করুন","update_offer":"আপডেট পুরস্কার","basic":"বেসিক","media":"মিডিয়া","policies":"নীতিমালা","social":"সামাজিক","crowdfunding":"গণ - অর্থায়ন","select_bank_country":"ব্যাংকের দেশে নির্বাচন করুন ","update_payout_method":"পরিশোধের পদ্ধতি আপডেট করুন","update_withdrawal_request":"প্রত্যাহারের অনুরোধ আপডেট করুন","shares":"শেয়ার","no_donation_selected":"কোনও অনুদান বাছাই করা হয়নি","successfully_requested":"সফলভাবে অনুরোধ করা হয়েছে","once_you_delete_organization__":"একবার আপনি সংস্থাটি মুছে ফেললে, আপনি নিম্নলিখিতগুলি করতে সক্ষম হবেন না:","access_organisation":"সংস্থায় প্রবেশ","access_fundraisers":"তহবিল সংগ্রহকারীদের প্রবেশ","access_financial_data":"আর্থিক ডেটা প্রবেশ","retrieve_organization_settings":"প্রতিষ্ঠানের সেটিংস পুনরুদ্ধার","retrieve_organization":"সংস্থাটি পুনরায় সক্রিয় করা ","more_information":"আরও তথ্য","yes_delete_organization":"হ্যাঁ, সংস্থাটি মুছুন","selected_image":"নির্বাচিত চিত্র","drag_and_drop_a_photo_to_upload_or_tap_to_upload":"আপলোড করতে একটি ফটো টেনে আনুন অথবা  আপলোড করতে ক্লিক করুন ","uploading_image":"চিত্র আপলোড হচ্ছে","want_to_delete_this_block":"এই ব্লকটি মুছতে চান?","hide":"Hide","failed_to_process_image__":"চিত্রটি প্রক্রিয়া করতে ব্যর্থ। দয়া করে পরে আবার চেষ্টা করুন বা আমাদের অবহিত করুন","signin_with_linkedin":"লিঙ্কডিন দিয়ে সাইন - ইন করুন","campaign_duration":"প্রচারের সময়কাল","select_category":"বিভাগ নির্বাচন করুন","subscription_expires_at":"সাবস্ক্রিপশন শেষ হবে","cancel_subscription":"সাবস্ক্রিপশন বাতিল করুন","signed_in_as":"হিসাবে সাইন ইন","user_details":"ব্যবহারকারীর বৃত্তান্ত","unsubscribed_successfully_logging_you_out":"সফলভাবে সাবস্ক্রাইব করা হয়েছে! আপনাকে লগ আউট করছি...","unsubscribed_successfully":"সফলভাবে সাবস্ক্রাইব করা হয়েছে","setting_up_your_account":"আপনার অ্যাকাউন্ট সেট আপ করা হচ্ছে","your_account_has_been_set_successfully":"আপনার অ্যাকাউন্টটি সফলভাবে সেট করা হয়েছে","no_plan_found":"কোন পরিকল্পনা পাওয়া যায় নি","redirecting_to_stripe_checkout":"স্ট্রাইপ চেকআউটে পুনঃনির্দেশ করা হচ্ছে","congratulation_your_package_plan_has_been_updated":"অভিনন্দন! আপনার প্যাকেজ পরিকল্পনা আপডেট করা হয়েছে।","no_card_found":"কোনও কার্ড পাওয়া যায় নি","exp":"মেয়াদ","you_havent_made_any_payment_yet":"আপনি এখনও কোনও অর্থ প্রদান করেন নি!","billing_reason":"বিলিং কারণ","card_updated_successfully":"কার্ড সফলভাবে আপডেট হয়েছে","sorry_can_not_update_card":"দুঃখিত, কার্ড আপডেট করতে পারবেন না","net_earning":"নেট উপার্জন","withdrawn":"প্রত্যাহার","available_to_pay":"প্রদানের জন্য উপলব্ধ","received_tip":"গৃহীত টিপ","received_fee":"গৃহীত ফি","url":"URL","wallet_and_payouts":"মানিব্যাগ এবং অর্থ প্রদান","your_expected_category_name":"আপনার প্রত্যাশিত বিভাগের নাম","reason_you_request_the_category":"আপনি বিভাগটি অনুরোধ করার কারণ","start_crowdfunding_with_greatly__":"ব্যাপকভাবে অপ্টিমাইজড তহবিল সংগ্রহ প্রক্রিয়া দিয়ে ভিড় জমা দেওয়া শুরু করুন","welcome_to_world_of_opportunities__":"সহযোগিতার সুযোগের পৃথিবীতে আপনাকে স্বাগতম","verification":"প্রতিপাদন","reset":"রিসেট","stripe_connect":"স্ট্রাইপ কানেক্ট","documentation":"ডকুমেন্টেশন","active_campaign":"সক্রিয় প্রচারণা","team_members":"দলের সদস্যরা","change_personal_stripe_credential":"স্ট্রাইপ শংসাপত্র পরিবর্তন","change_sslcommerz_credential":"এসএসলকমার্স শংসাপত্র পরিবর্তন করুন","change_paypal_credential":"পেপাল শংসাপত্র পরিবর্তন করুন","you_can_not_endorse_in_this_campaign":"আপনি এই প্রচারে সমর্থন করতে পারবেন না","ssl_commerz":"এসএসএলকমার্স","awaiting_fundraiser_approval":"তহবিল সংগ্রহের অনুমোদনের অপেক্ষায়","refunded":"ফেরত দেওয়া হয়েছে","cancelled":"বাতিল হয়েছে","fundraiser_accepted":"তহবিল গ্রহণকারী","fundraiser_cancelled":"তহবিল সংগ্রহকারী বাতিল হয়েছে","awaiting_for_organization_approval":"সংস্থার অনুমোদনের অপেক্ষায়","payout_details":"অর্থ প্রদানের বিশদ","denial_note":"অস্বীকার নোট","payment_method":"মূল্যপরিশোধ পদ্ধতি","add_denial_note_and_confirm":"অস্বীকার নোট যোগ করুন এবং নিশ্চিত করুন","add_attachment":"সংযুক্তি যোগ","mark_as_sent":"প্রেরিত হিসাবে চিহ্নিত করুন","your_payment_will_be__":"আপনার প্রদানটি আপগ্রেড হবে এবং আপনি এটিকে ডাউনগ্রেড করতে পারবেন না। আরো বিস্তারিত জানার জন্য","visit_our_payment_policy":"আমাদের প্রদানের নীতিটি দেখুন","you_have":"আপনার আছে","new_notifications":"নতুন বিজ্ঞপ্তি","payout_method_details":"প্রদানের পদ্ধতি বিশদ","updated_at":"আপডেট হয়েছে","save_campaign":"প্রচার সংরক্ষণ করুন","create_organization":"সংস্থা তৈরি","update_card":"কার্ড আপডেট করুন","add_card":"কার্ড যুক্ত করুন","this_campaign_is_in_readonly_view_and_publicly_invisible":"এই প্রচারটি কেবলমাত্র পঠনযোগ্য দর্শন এবং প্রকাশ্যে অদৃশ্য।","organization_profile":"সংস্থা প্রোফাইল","report":"প্রতিবেদন","contribution_payment":"অবদানের অর্থ প্রদান","contribution_message":"অবদানের বার্তা","successfully":"সাফল্যের সাথে","saved":"সংরক্ষিত","you_want_to_delete":"আপনি মুছতে চান!","once_it_changed_can_not_be_undone":"একবার পরিবর্তিত হলে তা পূর্বাবস্থায় ফেরা যাবে না","this":"এই","login_for_best_crowdfunding_solution_with__":"সর্বাধিক সাশ্রয়ী মূল্যের মূল্য সহ সেরা ভিড়ফান্ডিং সমাধানের জন্য লগ ইন করুন।","registration_for_best_crowdfunding_solution__":"সর্বাধিক সাশ্রয়ী মূল্যের মূল্য সহ সেরা গ্রাডফান্ডিং সমাধানের জন্য নিবন্ধকরণ।","available_campaign":"উপলভ্য প্রচারণা","start_fundraising_campaign_for_people_in_need__":"অভাবী লোকদের জন্য তহবিল সংগ্রহের প্রচারণা শুরু করুন এবং তাদের জীবনের জন্য লড়াইয়ে সহায়তা করুন। পুরষ্কার ভিত্তিক প্রচার এবং অনুদান ভিত্তিক প্রচারের জন্য তহবিল সংগ্রহ করুন","subscribe_for_best_crowdfunding_solution__":"সর্বাধিক সাশ্রয়ী মূল্যের মূল্যের সাথে সেরা গ্রাডফান্ডিং সমাধানের জন্য সাবস্ক্রাইব করুন।","appsumo":"অ্যাপসুমো","crowdfundly_values_you_and_respects_your_privacy__":"ক্রাউডফান্ডিলি আপনাকে মূল্য দেয় এবং আপনার গোপনীয়তার সম্মান করে। আমরা আপনার সাথে আমাদের সম্পর্ককে সমর্থন করার জন্য, আমাদের পরিষেবাগুলিকে উন্নত করতে এবং আপনাকে অবহিত রাখতে যোগাযোগ করার জন্য তথ্য সংগ্রহ করি","reset_your_password":"আপনার পাসওয়ার্ড পুনরায় সেট করুন","take_a_tour":"ঘুরে আসা","invoice":"চালান","max":"সর্বাধিক","files":"নথি পত্র","file":"ফাইল","images":"ছবি","you_can_upload_max":"আপনি সর্বোচ্চ আপলোড করতে পারেন","save_reward":"পুরষ্কার সংরক্ষণ করুন","you_are_not_able_to_make_contact":"আপনি যোগাযোগ করতে সক্ষম নন","the_campaign_is_already_closed":"প্রচারটি ইতিমধ্যে বন্ধ রয়েছে","you_can_chat_after_publishing_the_campaign":"Yপ্রচার প্রচারের পরে আপনি চ্যাট করতে পারবেন",".":"|","individual":"স্বতন্ত্র","change_stripe_api_keys":"স্ট্রাইপ এপিআই কীগুলি পরিবর্তন করুন","fundraise_with_a_specific_date":"নির্দিষ্ট তারিখ সহ তহবিল সংগ্রহ করুন","todays":"আজকের","yesterdays":"গতকালের","last_seven_days":"গত 7 দিনের","this_years":"এই বছরের","last_years":"গত বছরের ","this_months":"এই মাসের","last_months":"গত মাসের","campaign_videos__":"এখন সময় এসেছে প্রচারের ভিডিও গ্যালারী সেট আপ করার","campaign_videos":"প্রচার ভিডিও","invalid_video_url__":"অবৈধ ভিডিও ইউআরএল। একটি বৈধ ইউটিউব বা Vimeo ভিডিও URL টাইপ করুন","this_video_url_already_added":"এই ভিডিও ইউআরএল ইতিমধ্যে যুক্ত করা হয়েছে","enter_your_video_url_here":"Vimeo or Youtube ভিডিও URL এখানে লিখুন","between":"মধ্যে","about_aamarpay":"আমারপে সম্পর্কিত","aamarpay_credentials":"আমারপে শংসাপত্রাদি","change_aamarpay_credentials":"আমারপে শংসাপত্র পরিবর্তন করুন","required_for_aamarpay_payment":"আমারপে পেমেন্টের জন্য প্রয়োজনীয়","checking_availability":"চেক প্রাপ্যতা","available":"উপলব্ধ","not_available":"পাওয়া যায় না","selected_offer":"পুরষ্কার বাছাই","customer_details":"কাস্টমার বিস্তারিত","offer_details":"পুরষ্কার বিশদ","fee":"ফি","organization_fee":"সংস্থা ফি","payment_gateway_fee":"পেমেন্ট গেটওয়ে ফি","do_you_want_to_resize":"আপনি কি আকার পরিবর্তন করতে চান?","you_are_trying_to_upload_an_image_of_gif__":"আপনি .gif ফর্ম্যাটের একটি চিত্র আপলোড করার চেষ্টা করছেন। চিত্রটি পুনরায় আকার দেওয়ার পরে কোনও অ্যানিমেশন থাকবে না।","i_want_to_resize":"আমি পুনরায় আকার দিতে চাই","resize":"পুনরায় আকার দিন","upload_without_resize":"পুনরায় আকার ছাড়াই আপলোড করুন","campaign_gallery_title":"প্রচারের গ্যালারী","you_have_to_upgrade_your_plan__":"এই বৈশিষ্ট্যটি অ্যাক্সেস করতে আপনার পরিকল্পনাটি আপগ্রেড করতে হবে","oops":"অপ্স","ok":"ঠিক আছে","you_may_upload_max":"আপনি সর্বোচ্চ আপলোড করতে পারেন","items_in_campaign_gallery":"প্রচার গ্যালারী আইটেম","you_can_create_max":"আপনি সর্বোচ্চ তৈরি করতে পারেন","reward_under_a_campaign":"পুরষ্কার একটি প্রচারের অধীনে","login_":"ক্রাউডফান্ডলি | লগইন","registration_":"ক্রাউডফান্ডলি | নিবন্ধন","verify":"যাচাই করুন","successfully_team_account_added":"সাফল্যের সাথে দলের অ্যাকাউন্ট যুক্ত করা হয়েছে","subscription_expired":"সাবস্ক্রিপশনের মেয়াদ শেষ হয়ে গেছে","your_subscription_is_expired__":"আপনার সাবস্ক্রিপশনের মেয়াদ শেষ হয়ে গেছে, আপনাকে করতে হবে","_your_plan":"আপনার পরিকল্পনা","renew_subscription":"সাবস্ক্রিপশন পুনর্নবীকরণ","view_invoice":"চালান দেখুন","upload_more":"আরও আপলোড করুন","you_have_already_endorsed_this_campaign":"আপনি ইতিমধ্যে এই প্রচারকে সমর্থন করেছেন","error":"ত্রুটি","you_want_to_cancel_the_subscription":"আপনি সাবস্ক্রিপশন বাতিল করতে চান","successfully_team_account_deleted":"টিম অ্যাকাউন্ট সফলভাবে মোছা হয়েছে","custom_domain":"কাস্টম ডোমেন","settings_custom_domain":"সেটিংস / কাস্টম-ডোমেন","in_order_to_use_domain_subdomain_you_need_to__":"ডোমেন / সাবডোমেন ব্যবহার করার জন্য আপনাকে ডোমেনের ডিএনএস সেটিংসে সিএনএম এন্ট্রি করতে হবে","add_your":"আপনার যোগ করুন","hostname":"হোস্ট নাম","is_an_alias_of":"এর একটি উপনাম","campaign_not_published_yet":"প্রচার এখনও প্রকাশিত হয়নি!","lifetime_subscription":"আজীবন ডিল","all_ltd_coupons":"সমস্ত LTD লাইসেন্স","no_coupon_found":"কোনও কুপন পাওয়া যায় নি!","purchase_date":"ক্রয় তারিখ","redeem_at":"রিডিম","coupon_status":"কুপনের স্থিতি","redeem_ltd_coupon":"রিডিম এলটিডি কুপন","redeem_your_ltd_coupon":"আপনার LTD কুপন রিডিম করুন","recurring_donation":"অনুদান পুনরাবৃত্তি","one_time_purchase_of":"এক সময় ক্রয়","lifetime_packages":"আজীবন ডিল","ltd_coupon_code_here":"LTD কুপন কোড এখানে","redeem_now":"রিডিম করুন","list_of_subscriptions":"সাবস্ক্রিপশন তালিকা","subscription_not_found":"সাবস্ক্রিপশন পাওয়া যায় নি!","plan_name":"পরিকল্পনার নাম","subscribed_at":"সাবস্ক্রাইব করা হয়েছে","add_new_org":"নতুন সংগঠন যুক্ত করুন","quantity":"পরিমাণ","cart_information":"কার্টের তথ্য","payment_information":"পেমেন্ট তথ্য","subtotal":"উপমোটাল","coupon_discount":"কুপন ছাড়","add_new_organization":"নতুন সংস্থা যুক্ত করুন","use_and_add_new_organization":"ব্যবহার করুন এবং নতুন সংস্থা যুক্ত করুন","transfer_to_other":"অন্যকে প্রেরণ করুন","upgrade_subscription":"সাবস্ক্রিপশন আপগ্রেড করুন","grand_total":"সর্বমোট","get_plan":"পরিকল্পনা পান","change_coupon":"কুপন পরিবর্তন করুন","get_pricing":"মূল্য নির্ধারণ করুন","custom_price":"কাস্টম মূল্য","select_currency":"মুদ্রা নির্বাচন করুন","successfully_campaign_published":"সফলভাবে প্রচার প্রচারিত","successfully_campaign_updated":"সফলভাবে প্রচার প্রচারিত হয়েছে","ltd_packages":"LTD প্যাকেজ","metered_packages":"মিটার প্যাকেজ","you_can_not_upgrade_or_change_your_ltd_package":"আপনি আপনার এলটিডি প্যাকেজ পরিবর্তন করতে আপগ্রেড করতে পারবেন না","you_currently_using_this_ltd_package":"আপনি বর্তমানে এই এলটিডি প্যাকেজটি ব্যবহার করছেন","add_to_cart":"কার্ট যোগ করুন","in_cart":"কার্টে","payment_details":"পেমেন্ট বিবরণ","we_will_charge_50_cent__":"আপনার সাবস্ক্রিপশন শেষ করার জন্য আমরা 50 শতাংশ ($ 0.50) চার্জ করব","please_select_a_package":"একটি প্যাকেজ নির্বাচন করুন","back_to_home":"বাড়িতে ফিরে যাও","app_key":"অ্যাপ কী","label":"লেবেল","no_app_key_found":"কোনও অ্যাপ কী পাওয়া যায় নি","generate_new_app_key":"নতুন অ্যাপ কী তৈরি করুন","generate_app_key":"অ্যাপ কী তৈরি করুন","write_app_key_label":"অ্যাপ কী লেবেল লিখুন","generate":"তৈরি","successfully_new_key_generated":"সাফল্যের সাথে নতুন কী তৈরি হয়েছে","yes_continue":"হ্যাঁ, চালিয়ে যান","password_must_be_a_minimum_of_6_characters":"পাসওয়ার্ডটি ন্যূনতম 6 টি অক্ষর হতে হবে","generated_successfully":"সফলভাবে উত্পন্ন হয়েছে!","your_payment_should_be_completed_and_the__":"আপনার অর্থ প্রদান সম্পন্ন করা উচিত এবং লাইসেন্স ক্রয় করা হবে। নিশ্চিত হওয়ার পরে আপনাকে অবহিত করা হবে","transfer_coupon":"কুপন স্থানান্তর করুন","i_acknowledge_that_i_eagerly_want_to_transfer__":"আমি স্বীকার করি যে আমি আগ্রহী হয়ে এই কুপনটি অন্য ব্যবহারকারীর কাছে স্থানান্তর করতে চাই।","you_have_to_acknowledge_that_you_eagerly_want__":"আপনাকে স্বীকার করতে হবে, আপনি অধীর আগ্রহে এই কুপনটি অন্য ব্যবহারকারীর কাছে স্থানান্তর করতে চান।","relies_on_your_generosity__":"তহবিলদাতাদের জন্য 0% প্ল্যাটফর্ম ফি প্রদান চালিয়ে যেতে আপনার উদারতার উপর নির্ভর করে","i_acknowledge":"আমি স্বীকার করছি","loading_packages":"প্যাকেজগুলি লোড হচ্ছে","checking_current_subscription_type":"বর্তমান সাবস্ক্রিপশন ধরণের পরীক্ষা করা হচ্ছে","refund":"ফেরত","page_not_found":"পৃষ্ঠা খুঁজে পাওয়া যায়নি","max_200_characters":"সর্বোচ্চ 200 টি অক্ষর","your_campaign_was_successfully":"আপনার প্রচার সফলভাবে হয়েছে","successfully_used_and_subscribed":"সফলভাবে ব্যবহৃত ও সাবস্ক্রাইব করা হয়েছে!","license_successfully_transferred_to":"লাইসেন্সটি সফলভাবে স্থানান্তরিত হয়েছে","could_not_complete_your_payment":"আপনার অর্থ প্রদান সম্পূর্ণ করতে পারেনি","your_payment_should_be_completed_and__":"আপনার অর্থ প্রদান সম্পন্ন করা উচিত এবং লাইসেন্স ক্রয় করা হবে। নিশ্চিত হওয়ার পরে আপনাকে অবহিত করা হবে","starting_at":"শুরু হচ্ছে","upcoming":"আসন্ন","24_7_support":"24/7 সহায়তা","support":"সহায়তা","limited":"সীমাবদ্ধ","regular":"নিয়মিত","priority":"অগ্রাধিকার","free_forever":"চিরকালের জন্য","paid_monthly":"মাসিক প্রদান","mo":"মাস","choose_your_exclusive_lifetime_deal":"আপনার এক্সক্লুসিভ লাইফটাইম ডিলটি চয়ন করুন 🎁","licences":"লাইসেন্স (গুলি)","view_pay_per_use_policy":"প্রতি ব্যবহারের নীতিমালা দেখুন","ownership_of_individual_licenses_transferable":"স্থানান্তরযোগ্য পৃথক লাইসেন্সের মালিকানা।","explore_more":"আরও এক্সপ্লোর করুন।","unused":"অব্যবহৃত","unredeemed":"অপরিশোধিত","selected_plan_id":"নির্বাচিত প্ল্যান আইডি","all_ltd_licenses":"সমস্ত LTD লাইসেন্স","no_license_found":"কোন লাইসেন্স পাওয়া যায় নি","license_id":"লাইসেন্স আইডি","used_at":"ব্যবহৃত","license_status":"লাইসেন্সের স্থিতি","transfer_license":"স্থানান্তর লাইসেন্স","you_can_not_change_the_currency_after_the_organization_is_created":"সংস্থাটি তৈরি হওয়ার পরে আপনি মুদ্রা পরিবর্তন করতে পারবেন না।","never":"কখনই না","ltd_license_is_not_upgradable__":"LTD লাইসেন্স আপগ্রেডযোগ্য নয়। তবে এখনও, আপনার কাছে অন্য একটি LTD লাইসেন্স কেনার সুযোগ রয়েছে।","please_add_denial_note":"অস্বীকার নোট যোগ করুন","no_payout_method_found":"কোনও পে-আউট পদ্ধতি পাওয়া যায় নি!","upgrade_now":"এখন উন্নতি কর","a_charge_may_apply_based_on_usage__":"আপনার বিলিং পিরিয়ড শেষে ব্যবহারের ভিত্তিতে চার্জ প্রযোজ্য হতে পারে।","check_usage_pricing":"ব্যবহারের মূল্য পরীক্ষা করুন","image_watermark":"চিত্র জলছবি","donation_refund":"অনুদান ফেরত","donation_tips":"অনুদানের টিপ","branded_company_name":"ব্র্যান্ডেড সংস্থার নাম","set_remainder":"অনুস্মারক সেট করুন","insight_data":"অন্তর্দৃষ্টি তথ্য","real_time_chat":"রিয়েল টাইম চ্যাট","system_commission":"সিস্টেম কমিশন","tip_preset":"টিপ প্রিসেট","post_updates":"পোস্ট আপডেট","custom_thank_you_message":"কাস্টম ধন্যবাদ বার্তা","donation_preset":"অনুদান প্রিসেট","offline_donations":"অফলাইন অনুদান","custom_campaign_flyer":"কাস্টম প্রচারের ফ্লায়ার","smart_notification":"স্মার্ট অধিসূচনা","anonymous_donation":"বেনামে দান","guest_donations":"অতিথি অনুদান","donation_on_behalf_of":"পক্ষ থেকে অনুদান","social_sharing":"সামাজিক ভাগাভাগি","multi_currency":"বিভিন্ন দেশের মুদ্রা","slack_notification":"স্ল্যাক নোটিফিকেশন","crowdfundly_pricing":"ক্রাউডফান্ডিলি প্রাইসিং","super_flexible_and_affordable_price_plan":"সুপার নমনীয় ও সাশ্রয়ী মূল্যের পরিকল্পনা","start_any_plan_for_free__":"বিনামূল্যে জন্য কোনও পরিকল্পনা শুরু করুন। আমরা ব্যবহারের ভিত্তিতে পোস্ট-পেইড বিলিং অফার করি.","how_much_you_can_raise_per_month":"আপনি প্রতি মাসে কত বৃদ্ধি করতে পারেন?","usd_or_equivalent":"মার্কিন ডলার বা সমতুল্য","sign_up_now":"এখন সাইন আপ করুন","paid_monthly_usd":"মাসিক প্রদান (USD)","per_donation":"অনুদান প্রতি","how_to_manage_campaign":"কীভাবে প্রচার চালানো যায়","create_reward_based_campaign":"পুরষ্কার ভিত্তিক প্রচারণা তৈরি করুন","create_donation_based_campaign":"অনুদান ভিত্তিক প্রচারণা তৈরি করুন","how_to_check_online_contributions":"অনলাইন অবদান কীভাবে চেক করবেন","how_to_check_offline_contributions":"অফলাইন অবদানগুলি কীভাবে চেক করবেন","how_to_add_offline_contributions":"অফলাইন অবদান কীভাবে যুক্ত করবেন","how_to_create_and_manage_team_members":"কীভাবে দলের সদস্য তৈরি এবং পরিচালনা করবেন","how_to_create_and_manage_roles":"ভূমিকা কীভাবে তৈরি এবং পরিচালনা করবেন","how_to_configure_organization_basic_information":"প্রতিষ্ঠানের বেসিক তথ্য কীভাবে কনফিগার করবেন","how_to_configure_stripe":"স্ট্রিপ কিভাবে কনফিগার করবেন","how_to_configure_paypal":"পেপাল কীভাবে কনফিগার করবেন","how_to_set_commission":"কমিশন কিভাবে সেট করবেন","how_to_configure_campaign_verification_process":"কীভাবে ক্যাম্পেইন যাচাইকরণ প্রক্রিয়া কনফিগার করবেন","how_to_enable_and_set_escrow_duration":"কীভাবে সক্ষম এবং এসক্রো সময়কাল সেট করুন","how_to_configure_refund_settings":"ফেরতের সেটিংস কীভাবে কনফিগার করবেন","use_existing_licence":"বিদ্যমান লাইসেন্স ব্যবহার করুন","create_org_under_unused_subscription":"অব্যবহৃত সাবস্ক্রিপশনের অধীনে সংগঠন তৈরি করুন","manage_campaigns":"প্রচারগুলি পরিচালনা করুন","accounts":"হিসাব","manage_payment":"পেমেন্ট পরিচালনা করুন","click_here_to_manage_your_payment_settings":"আপনার প্রদানের সেটিংস পরিচালনা করতে এখানে ক্লিক করুন","your_next_billing_date":"আপনার পরবর্তী বিলিংয়ের তারিখ ","campaign_s":"প্রচারণা","contribution_s":"অবদানসমূহ","share_s":"সেয়ার","team_member_already_exist":"দলের সদস্য ইতিমধ্যে বিদ্যমান।","image_size_too_large":"চিত্রের আকারটি খুব বড়, দয়া করে ছোট চিত্র সরবরাহ করুন","and":"এবং","max_files":"সর্বোচ্চ ফাইল","organization_updated":"সংস্থা আপডেট হয়েছে।","multiple_selection_not_supported_please_select_single_file":"একাধিক নির্বাচন সমর্থিত নয়, দয়া করে একক ফাইল নির্বাচন করুন","gif_file_not_supported_here__":"GIF ফাইলটি এখানে সমর্থিত নয়, অন্য ফর্ম্যাট চিত্র নির্বাচন করুন|","gallery_image_uploaded":"গ্যালারী চিত্র আপলোড করা হয়েছে।","build_a_platform_that_you_can_be_proud_of":"এমন একটি প্ল্যাটফর্ম তৈরি করুন যা আপনি গর্বিত হতে পারেন","early_access_users_only":"শুধুমাত্র প্রাথমিক অ্যাক্সেস ব্যবহারকারীরা","we_greatly_appreciate_your_participation":"আমরা আপনার অংশগ্রহণের প্রশংসা করি।","do_not_have_an_account":"কোন অ্যাকাউন্ট নেই?","hey_create_your_organization_first":"আরে, 👋 প্রথমে আপনার সংস্থা তৈরি করুন।","didn_t_contribute_any_campaign_yet":"এখনও কোনও প্রচারে অবদান রাখেনি","you":"আপনি","me":"আমি","contributed_so_far":"অবদান অবধি অবধি","i_have":"আমার আছে","examples_of_some_activities_that_may_considered_as_fraudulent":"প্রতারণামূলক হিসাবে বিবেচিত হতে পারে এমন কিছু ক্রিয়াকলাপের উদাহরণ।","breaking_the_rules":"ফদতুফত্য।","lying_about_the_benefactor_of_the_publicity__":"প্রচারের উপকারকারীর সম্পর্কে মিথ্যা কথা বলা এবং কারও পরিচয় ভুলভাবে উপস্থাপন করা।","posted_with_misleading_statements_in_the_campaign":"প্রচারে বিভ্রান্তিমূলক বক্তব্য সহ পোস্ট করা হয়েছে।","does_not_send_timely_funding_to_the_stated_beneficiary_etc":"বর্ণিত সুবিধাভোগী ইত্যাদিকে সময় মতো তহবিল পাঠায় না ।","select_a_Plan":"একটি পরিকল্পনা নির্বাচন করুন","by_creating_an_account":"একটি অ্যাকাউন্ট তৈরি করতে,","i_accept_the":"আমি স্বীকার করি","terms":"শর্তাবলী","privacy":"গোপনীয়তা","conditions":"শর্ত","remove_payment_method":"সংযোগ বিচ্ছিন্ন করুন","got_it":"বুঝেছি","other_information":"অন্যান্য তথ্য","additional_information":"অতিরিক্ত তথ্য","add_new_field":"নতুন ক্ষেত্র যুক্ত করুন","section_title":"বিভাগ শিরোনাম","enter_section_title":"বিভাগের শিরোনাম প্রবেশ করান","categories":"বিভাগ","donation_campaign":"অনুদান প্রচার","reward_campaign":"পুরষ্কার প্রচার","create_campaign_category":"প্রচারের বিভাগ তৈরি করুন","how_to_create_category":"বিভাগ কিভাবে তৈরি করবেন","category_icon_placeholder":"Ex: fas fa-user","no_category_found":"কোন বিভাগ পাওয়া যায় নি","add_category":"বিভাগ যুক্ত করুন","enter_category_name":"বিভাগের নাম লিখুন","successfully_category_added":"সফলভাবে বিভাগ যুক্ত","successfully_category_deleted":"সাফল্যের বিভাগ মুছে ফেলা হয়েছে","successfully_category_updated":"সফলভাবে বিভাগ আপডেট করা হয়েছে","update_category":"আপডেট বিভাগ","here_you_can_use_the":"এখানে আপনি ব্যবহার করতে পারেন","icons":"আইকন","click_here":"এখানে ক্লিক করুন","to_see_the_list_of_icon":"আইকন তালিকা দেখতে","consent":"সম্মতি","this_organization_subscription_is_expired":"এই সংস্থার সাবস্ক্রিপশনের মেয়াদ শেষ হয়ে গেছে","show_similar_campaigns":"অনুরূপ প্রচারগুলি দেখান।","show_similar_campaigns_during_contribution":"অবদানের সময় অনুরূপ প্রচারগুলি দেখান।","user_not_found":"ব্যবহারকারী খুঁজে পাওয়া যায় নি","allow_public_fundrise_for_campaign":"প্রচারের জন্য সরকারী তহবিলের অনুমতি দিন","allow_public_fundrise":"সরকারী তহবিল অনুমতি দিন","if_you_want_upgrade_your_plan_you_have_to_go":"আপনি যদি আপনার পরিকল্পনা আপগ্রেড করতে চান তবে আপনাকে যেতে হবে","your_email_is_not_verified":"আপনার ইমেল যাচাই করা হয় নাই!","if_you_have_not_received_a_link_yet_click_here":"আপনি যদি এখনও কোনও লিঙ্ক না পান তবে এখানে ক্লিক করুন"},"de":{"filters":"Filter","select_a_date_range":"Wählen Sie ein Datum","clear":"Löschen","done":"Fertig","type":"Typ","export_to_excel":"Export nach Excel","ads_budget_percentage":"Werbebudget in Prozent","set_as_raised":"Als gesammelt markieren","unset_as_raised":"Nicht mehr als gesammelt markieren","amount":"Menge","payout_id":"Auszahlungs ID","published":"Veröffentlicht","unpublished":"Unveröffentlicht","rejected":"Abgewiesen","search_name_or_email":"Nach Name oder E-Mail suchen","recurring_donation_status":"Wiederkehrender Beitragsstatus","life_time_value":"Wert nach Lebenszeit","hello":"Hallo","something_else":"Das ist etwas","loading_campaign":"Die Kampagne lädt","loading_campaign_list":"Die Kampagnen laden","please_wait":"Bitte warten","pending":"Bevorstehend","under_verification":"Wird Verifiziert","approve":"Verifizieren","approved":"Verifiziert","requested_amendation":"Zur Änderung angefordert","resubmitted":"Noch mal eingereicht","inactive":"Inaktiv","requested_approval_after_inactivation":"Zur verifizierung eingereicht (nach inaktivierung)","loading":"Lädt","loading_data":"Lädt Daten","loading_campaign_types":"Lädt Kampagnenarten","load_more":"Lade mehr","post_update_to_campaign":"Erstellen Sie ein Update über die Kampagne an Ihre Unterstützer","post_update_button_text":"Update erstellen","co_fundraiser":"Co-Spendensammler","fundraiser":"Spendensammler","processing":"Verarbeite","add_co_fundraiser":"Co-Spendensammler hinzufügen","are_you_sure":"Sind Sie sicher?","logging_out":"Logge aus","logout":"Logout","request_processing":"Bitte warten, anfrage wird bearbeitet","mark_verified":"Als verifiziert markieren","denied_by_you":"Von Ihnen abgelehnt","accepted_by_you":"Von Ihnen akzeptiert","verified_by_you":"Von Ihnen verifiziert","assigned_campaigns":"Zugewiesene Kampagne","assigned_campaigns_to":"Kampagne hinzugefügt zu","campaign_types":"Kampagnenarten","new_campaign":"Neue Kampagne","campaign_media":"Kampagnen Medien","campaign_story":"Kampagnen Geschichte","campaign_recipient":"Kampagnen Begünstigter","submit_campaign":"Kampagne einreichen","draft":"Entwurf","accept":"Akzeptieren","reject":"Ablehnen","delete":"Löschen","deleted":"Gelöscht","edit":"Bearbeiten","manage":"Verwalten","save":"Speichern","add":"Hinzufügen","add_new":"Neu Hinzufügen","not_found":"Nicht gefunden","not_working_try_later":"Funktioniert nicht. Versuchen Sie es später noch ein Mal.","remove_photo":"Foto entfernen","removing":"Entferne","edit_campaign":"Kampagne bearbeiten","invalid_video_url":"Ungültige Video URL","social_share_description":"Und ich dachte mir, daran könnten Sie auch interessiert sein. Bitte denken Sie darüber nach, diese gewissenhafte Kampagne zu Unterstützen oder zumindest zu teilen. Danke!","i_am_supporting_this_fundraising_page":"Ich unterstütze diese Spendensammlung","custom_amount":"Selbstgewähle Menge","enter_amount":"Menge eingeben","show":"Anzeigen","show_me":"Zeig mir","sort_by":"Sortieren nach","show_more":"Zeig mir mehr","filter_tag":"Filter Tag","view":"Anziegen","image":"Bild","campaign_details":"Kampagnen details","target_amount":"Ziel Wert","status":"Status","actions":"Aktionen","select_a_user":"Nutzer auswählen","or":"oder","an_auto_generated_password":"Ein autoamtisch generiertes Passwort wird an diese Adresse gesendet.","select_from_existing_user":"Aus bereits existierenden Nutzern auswählen","role":"Rolle","select_role":"Rolle auswählen","name":"Name","email":"Email","enter_name":"Name eingeben","enter_email":"Email eingeben","unassigned":"Noch nicht zugewiesen","assigned":"Zugewiesen","marked_verified":"Als verifiziert markiert","summary_of_description":"Zusammenfassung der Beschreibung","short_description":"Kurze zusammenfassung","preset_summary":"Voreingestellte zusammenfassung","preset_description":"Beschreiben Sie, was diese Spendensammlung für Sie bedeutet oder bieten Sie gar eine Belohnung für die Unterstützung an!","describe_the_preset":"Beschreiben Sie die Voreinstellung","page_settings_donation_preset":"Einstellungen - Beitragsvoreinstellung","donation_preset_amounts":"Beitragsvoreinstellungs Mengen","donation_presets":"Beitragsvoreinstellungen","contribution_preset_page_description_one":"Wenn Sie Ihr Spendenziel wirklich erreichen wollen, sollten Sie Ihre Beitragsvorgaben anpassen.👇","contribution_preset_page_description_two":"YSie können die voreingestellten Beträge festlegen und erklären, was dieser für Ihre Sache bedeutet. Das hilft den Spendern, sich vorzustellen, wie ihr Geld Ihnen helfen kann","system_settings":"Systemeinstellungen","youtube_api":"Youtube API","agora_api":"Agora API","agora_api_key":"Agora API Key","google_captcha":"Google captcha","youtube_api_key":"Youtube API Key","you_can_enable_or_disable":"Sie können es hier aktivieren und deaktivieren","data_store":"Datenspeicher","data_storage_type":"Datenspeichertyp","local":"Lokal","cloud":"Cloud","push_notification":"Push Mitteilung","provider":"Anbieter","select_provider":"Anbieter wählen","application_settings":"Applikationseinstellungen","contributors":"Unterstützer","contributor":"Unterstützer","payouts":"Auszahlungen","asias_most_trusted_fundraising_platform":"ASIENS MEISTVERTRAUTE PLATTFORM FÜR SPENDENSAMMLUNGEN","start_fundraising":"Starte eine Sammlung","see_how_easy_it_is_to_start_a_campaign":"Sehen Sie wie einfach es ist, eine Sammlung zu starten","see_what_successful_fundraisers_say_about_give_asia":"Sehen Sie hier, was erfolgfeiche Spendensammler über Crowdfundly sagen","step_1":"Schritt 1","step_2":"Schritt 2","step_3":"Schritt 3","fundraise":"Spendensammlung","fundraisers":"Spendensammler","apply_filter":"Filter anwenden","clear_filter":"Filter Löschen","about":"Über","ads_budget":"Werbebudget","chat_presets":"Unterhaltungsvoreinstellungen","filter":"Filter","features":"Merkmale","a_better_way_to_create_your_fundraising_campaign":"Eine bessere Art, Ihre Spendenkampagne zu erstellen","we_undertstand_creating_a_fundraising_campaign":"Wir verstehen, dass das Erstellen einer Spendenkampagne ziemlich entmutigend sein kann. Deshalb haben wir eine ganz neue Art der Erstellung von Spendenkampagnen entwickelt","start_a_campaign":"Starten Sie eine Kampagne","your_unique_kindness_profile":"Ihr einzigartiges Freundlichkeitsprofil","whether_you_are_a_contributor_or_a_fundraiser":"Ob Sie ein Spender oder ein Spendensammler sind, wir feiern es bei Crowdfundly. Sobald Sie sich auf Crowdfundly angemeldet haben, erhalten Sie Ihre eigene Crowdfundly-Profilseite, die Ihre Wohltätigkeitstaten auf der Plattform verfolgt.","check_out_my_profile":"Mein Profil ansehen","lets_get_started":"Los legen","hello_I_am_aseem":"Hallo! Ich bin Aseem, Mitbegründer von Crowdfundly. Möchten Sie versuchen, eine Kampagne zu starten? Tippen Sie unten, um zu beginnen!👇🏽","contribute":"Unterstützen","dashboard":"Dashboard","accept_invitation":"Einladung annehmen","accepting":"Akzeotieren","login":"Login","register":"Registrieren","sorry":"Entschuldigung","you_are_not_a_loggedin_user":"Sie sind nicht eingelogt","please":"Bitte","accept_this_invitation":"Akzeptieren Sie diese Einladung","accepting_invitation":"Einladung akzeptieren","you_have_successfully_accepted_cofundraiser_invitation":"Sie haben die Einladung als Co-Spendensammler erfolgreich angenommen","share_campaign_dashboard":"Teilen - Kampagnen Dashboard","share":"Teilen","update_summary":"Zusammenfassung aktualisieren","updating":"Aktualisiere","successfully_updated_flayer_summary":"Erfolgreich aktualisierte Flayer-Zusammenfassung","download_flyer_pdf":"Flyer PDF herunterladen","has_not_started_a_fundraising_campaign_yet":"hat noch keine Spendensammlung gestartet","loading_more":"Lade mehr","loading_campaigns":"Lade Kampagnen","campaign_chat":"Kampagnen Unterhaltungen","be_the_first_to_ask_question":"Seien Sie der erste der Fragen stellt, Aufmunternde Worte schreibt oder seine Gedanken teilt","send_a_message":"Senden Sie eine Nachtricht..","the_beginning":"Der Anfang","downloading_flyer":"Lade Flyer herunter","add_campaign_badge":"Kampagnenabzeichen hinzufügen","min_point":"Min punkte","max_point":"Max punkte","campaign_badges":"Kampagnenabzeichen","deny":"Ablehnen","select_a_role":"Wählen Sie eine Rolle","search":"Suche","try_searching_campaign_titles_or_names":"Versuchen Sie nach Kampagnentiteln oder Namen zu suchen","results":"Ergebnisse","add_donation_badge":"Unterstützerabzeichen hinzufügen","donation_badges":"Unterstützerabezeichen","add_share_badge":"Teilerabzeichen hinzufügen","share_badges":"Teilerabzeichen","rank_list":"Rangliste","update_rank":"Rang aktualisieren","select_rank_name":"Rangnamen auswählen","max_amount":"Maximal Menge","min_amount":"Minimal Menge","select_name":"Name auswählen","badges":"Abzeichen","add_new_badge":"Neues abzeichen hinzufügen","select_type":"Typen auswählen","select_badge_type":"Abzeichentyp auswählen","select_activity":"Aktivität auswählen","select_a_activity":"Wählen Sie eine Aktivität aus","campaign_reports":"Kampagnenberichte","loading_campaign_reports":"Lade Kampagnenberichte","loading_reports":"Lade Berichte","remind_me_later":"Erinnere mich später","we_will_send_you_an_email_for_reminding_you":"Wir schicken Ihnen eine Email, um Sie an die Unterstützung der Kampagne zu erinnern. Teilen Sie uns mit, wann wir Sie erinnern sollen.","enter_email_address":"Email hinterlegen","rejected_by_you":"Von Ihnen abgelehnt","home_settings":"Homepageeinstellungen","banner_content":"Bannerinhalt","title":"Titel","background_image":"Hintergrundbild","select_background_image":"Hintergrundbild auswählen","banner_logo":"Bannerlogo","select_logo":"Logo auswählen","featured_brands":"Ausgewählte Marken","brands":"Marken","brand_logo":"Markenlogo","featured_campaign":"Ausgewählte Kampagnen","campaign_url":"Kampagnen URL","select_campaign_image":"Wählen Sie ein Kampagnenbild","background_color":"Hintergrundfarbe","about_settings":"Über Seiteneinstellungen","give_asia_family":"Crowdfundly Familie","give_asia_advisors_ambassadors":"Crowdfundly Berater & Diplomaten","users":"Benutzer","user_list":"Benutzerliste","loading_users":"Lade Benutzer","no_user_found":"Kein Benutzer gefunden","loading_top_contributors":"Lade Top-Unterstützer","no_one_has_contributed_yet":"Noch hat niemand unterstützt","by":"von","loading_activities":"Lade aktivitäten","no_activities_found_for_this_campaign":"Keine Aktivitäten für diese Kampagne gefunden","story":"Geschichte","updates":"Aktuelles","activities":"Aktivitäten","campaign_not_found":"Kampagne nicht gefunden","are_you_sure_want_to_delete":"Sicher, dass Sie das löschen wollen","no_updates_found_for_this_campaign":"Keine Aktualisierung für diese Kampagne gefunden","loading_updates":"Lade Aktualisierung","refunds":"Rückzahlungen","completed":"Fertig gestellt","filter_by":"Filtern nach","date_time":"Datum und Zeit","time_in_utc":"Zeit in UTC","contributor_name":"Name des Unterstützers","amount_contributed":"Menge","tip_amount":"Trinkgeld höhe","contribution_type":"Unterstützungstyp","campaign_name":"Kampagnenname","transaction_id":"Transaktions ID","request_type":"Anfragentyp","note":"Notiz","submit":"Abschicken","accepted":"Akzeptiert","social_media_boost":"Social Media Boost","submitting":"Schicke ab","no_campaign_found":"Keine Kampagne gefunden!","fundraiser_name":"Spendensammlername","fundraiser_email":"Spendensammler Email","raised":"Gesammelt","ads_spent":"Für Werbung ausgegeben","target":"Ziel","mark_as_verified":"Als verifiziert markieren","accept_campaign":"Kampagne akzeptieren","deny_campaign":"Kampagne ablehnen","approve_campaign":"Kampagne freigeben","publish_campaign":"Kampagne veröffentlichen","date_added":"Datum hinzugefügt","date":"Datum","start_conversation":"Unterhaltung starten","send":"Senden","conversations":"Unterhaltungen","conversation":"Unterhaltung","no_conversation_found":"Keine Unterhaltungen gefunden!","subject":"Betreff","message":"Nachricht","campaign":"Kampagne","created_at":"Erstellt am","id":"ID","opinions":"Meinungen","add_opinion":"Meinung hinzufügen","published_at":"Veröffentlicht am","not_yet_published":"Nicht veröffentlicht","created_by":"Erstellt von","go_to_conversation":"Zu den Unterhaltungen gehen","request_more_info":"Mehr Infos anfordern","donation_amount":"Höhe der Unterstützung","suspend":"Unterbrechen","suspend_requests":"Anfrage unterbrechen","no_suspend_request_found":"Tut mir leid, niemand hat nach einer Unterbrechung gebeten","request_for_suspension":"Nach Unterbrechung bitten","requested_by":"Angefordert von","reason":"Grund","suspension_request_reason_placeholder":"Bitte, erzählen Sie uns warum Sie die Kampagne unterbrechen wollen?","campaign_dashboard":"Kampagnen Dashboard","applied_filter":"Filter angewendet","start_a_new_campaign":"Neue Kampagne starten","your_information":"Ihre Informationen","on_behalf_of":"Im Auftrag von","n_a":"N\\\\A","sorry_invalid_invitation_code":"Der Einladungscode ist ungültig","maybe_you_have_already_accepted":"Entweder haben Sie die Einladung schon akzeptiert oder der Schlüssel ist abgelaufen","if_you_think_this_was_a_mistake":"Wenn Sie denken, dass das ein Irrtum ist, dann kontaktieren Sie bitte den Spendensammler und fragen nach einer neuen Einladung oder wenden Sie sich an den Support.","subtitle":"Untertitel","invitation_accepted":"Einladung akzeptiert","the_invitation_has_been_successfully_accepted":"Die Einladung wurde akzeptieren. Sie können die Kampagne jetzt bearbeiten","please_click_the_following_link_to_accept":"Bitte klicken Sie den folgenden Link, um der Einladung dieser Kampagne zu folgen","manage_campaign":"Kampagne verwalten","logging_you_in":"Logge Sie ein...","response_message":"Antwortnachricht","resend_verification_link":"Verifizierungsmail erneut senden","your_email_is_not_verified_yet":"Diese Email ist noch nicht verifiziert","if_you_have_not_received_a_link_yet_click_below_button":"Wenn Sie noch keinen Link erhalten haben, klicken Sie bitte hier.","sending_verification_link":"Sende Verifizierungsmail...","link_successfully_sent":"Link erfolgreich gesendet","resend_link":"Link noch einmal senden","subject_of_the_message":"Betreff","your_message_to_the_fundraiser":"Ihre Mitteilung an den Spendensammler","continue":"Weiter","please_select_a_preset_amount_or_custom_amount":"Wählen Sie entweder eine voreingestellte Summe oder stellen Sie sie selbst ein","sorry_something_went_wrong":"Tut mir Leid, da ist was schief gelaufen","you_are_contributing_to":"Sie unterstützen","selected_Offer":"Belohnung wählen","your_card_information":"Ihre Kreditkarteninformationen","preparing_secure_pay":"Bereite sichere Zahlung vor","sorry_something_went_wrong_fetching_account_id":"Tut mir Leid, beim abrufen der Konto ID ist was schief gelaufen","personal_message_from_fundriser":"Persönliche Nachricht von der Spendenaktion","back_to_campaign":"Zurück zur Kampagne","select_a_tip_amount":"Höhe des Trinkgeldes","your_tip_will_help_us_help_more_people":"Ihr Tringeld hilft uns anderen zu helfen","you_can_also_give_a_similar_amount":"Sie können auch ein Trinkgeld in der Höhe geben, die Ihnen besser passt","you_can_upload_image":"Bilddatei hochladen ( jpg, jpeg, png )","donation_tip_amount":"Höhe des Trinkgeldes","payment":"Zahlung","donation_info":"Unterstützungsinfos","thank_you":"Danke","write_message_here":"Nachricht hinterlassen","endorse":"Befürworten","your_relationship_to_the_fundraiser":"Ihre Beziehung zu dem Spendensammler","family_member_close_friend_doctor":"z.B. Familienmitglied, enger Freund, Arzt","your_endorsement_message":"Ihre Nachricht der Befürwortung","please_write_your_endorsement_message":"Bitte schreiben Sie ihre Nachricht der Befürwortung","please_write_your_message":"Bitte schreiben Sie hier Ihre Nachricht","new_endorsements":"Neue Befürwortungen","submit_endorsement":"Befürwortung absenden","loading_Endorsements":"Lade Befürwortungen","campaign_endorsements":"Kampagnenbefürwortungen","no_endorsement_found_for_this_campaign":"Keine Befürwortungen zu dieser Kampagne gefunden","view_ads_budget":"Werbebudget einsehen","settings":"Einstellungen","reports":"Berichte","User_Crowdfundly":"Nutzer@Crowdfundly","give_your_campaign_more_exposure":"Erhalten Sie mehr Beachtung durch Social Media Boosting","Would you like_to_allocate":"Möchten Sie","of_your_funds_raised":"ihrem Spendenziel","for_boosting":"für einen boost zuordnen?","no":"Nein","yes":"Ja","we_will_inform_you_when_we_are":"Wir informieren Sie, wenn wir Ihre Kampagne boosten","ads_settings":"Werbeeinstellungen","campaign_ad_preview":"Vorschau der Kampagnenwerbung","loading_donations":"Lade Unterstützungen","no_donation_made_yet":"Noch keine Unterstützung erhalten","no_contributions_made_yet":"Niemand hat Unterstützt","write_a_note_optional":"Schreiben Sie eine Notiz (Optional)","write_a_note_here":"Schreiben Sie Ihre Notiz","your_supporters_can_ask_questions":"hre Unterstützer können hier aus einer Liste aus voreingestellten Unterhaltungen Fragen stellen oder ","messages_in_your_campaign_chatroom":"Sie in Ihrem Kampagnen Chatroom ermutigen. Sie können Ihre Antwort hinzufügen, so dass sie sie gleich erhalten","write_preset_message_here":"Vorgefertigte Nachricht hier verfassen","save_preset":"Speichern","create_new_preset":"Neue vorgefertigte Nachricht verfassen","success":"Erfolgreich","failed_to_save":"Konnte nicht speichern","failed_to_delete":"Konnte nicht löschen","type_your_description":"Beschreibung verfassen","campaign_status":"Kampagnen Status","campaign_view":"Kampagne ansehen","submit_for_approval":"Zur Freigabe geben","campaign_title":"Kampagnen Titel","keep_it_short_and_simple":"Fassen Sie sich kurz","campaign_category":"Kampagnenkategorie","select":"auswählen","fundraising_target":"Spendenziel","target_date":"Zieldatum","select_a_date":"Datum wählen","campaign_image":"Kampagnenbild","campaign_offers":"Kampagnenangebot","campaign_Rewards":"Kampagnenbelohnungen","add_new_offer":"Neue Belohnungen hinzufügen","successfully_updated":"Erfolgreich aktualisiert","successfully_saved":"Erfolgreich gespeichert","you_can_add_more_family_or_friends_as_fundraisers_for_this_campaign":"Fügen Sie Freunde und Familie als Spendensammler hinzu","add_new_co_fundraiser":"Neue Co-Spendensammler","email_address":"Email","date_and_time":"Datum / Uhrzeit","address":"Adresse","contributor_amount":"Höhe der Unterstützung","anonymous":"Anonym","offline_contributions":"Offline Unterstützung","get_an_overview":"Verschaffen Sie sich einen Überblick darüber, wie die Kampagne gerade läuft","allow_contributions_after_raised":"Erlauben Sie auch Unterstützungen, wenn das Ziel bereits erreicht wurde","of":"von","showing":"Anzeigen","online_contributions":"Online Unterstützer","add_a_summary_of_your_campaign_to_be_printed_on_a_flyer":"Fügen Sie eine Zusammenfassung hinzu, die auf dem Flyer gedruckt wird","last":"Letzte","days":"Tage","the_donation_amount_your_campaign_has_received":"Die Anzahl an Unterstützungen Ihrer Kampagne erreichte","thanks_for_your_help":"Danke für Ihre Hilfe","funding_goal":"Spendenziel","funds_raised":"Spenden gesammelt","days_to_go":"Verbleibende Tage","set_reminder":"Erinnerung setzen","contact":"Kontakt","endorsements":"Beführwortungen","endorsement":"Beführwortung","top_contributors":"Top Unterstützer","offer":"Belohnung","no_story_found":"Keine Geschichte gefunden","similar_campaigns":"Ähnliche Kampagnen","all_campaign":"Alle Kampagnen","back_it":"Unterstützen","amount_raised_successfully":"Sammlung erfolgreich","target_date_exceed":"Zieltag überschritten","fundraiser_will_get_a_rejection_email":"Spendensammler werden eine Ablehnung per Mail erhalten und diesen Text sehen","enter_your_reason_for_campaign":"Einen Grund für die Ablehnung nennen.Max : 250 Zeichen","reject_and_send_email_to_fundraiser":"Ablehnen und die Spendensammler benachrichtigen","reject_campaign":"Kampagne ablehnen","campaign_has_been_rejected":"Kampagne abgelehnt. Die Spendensammler erhalen eine Email.Temporäre benachrichtigung","loading_campaign_badges":"Lade Kampagnenabzeichen","no_badge_found":"Keine Abzeichen gefunden","badge_name":"Abzeichenname","based_on":"Basierend auf","update_campaign_type":"Kampagnentyp aktualisieren","create_campaign_type":"Neuen Kampagnentyp erstellen","create_campaign_type_head":"Erstelle Kampagnentyp","campaign_type_name":"Kampagnentypname","campaign_type_image":"Kampagnentyp Bild","update":"Aktualisieren","campaign_type_updated_successfully":"Kampagnentyp erfolgreich aktualisisert","campaign_type_created_successfully":"Kampagnentyp erfolgreich erstellt","campaign_type_deleted_successfully":"Kampagnentyp erfolgreich gelöscht","required":"benötigt","creating":"Erstelle","create":"Erstellen","update_order":"Aktualisierungsreihenfolge","you_campaign_may_go_under_review_after_making_any_changes":"Nach jeglicher Änderung könnte Ihre Kampagne erst eine Überprüfung benötigen.","reset_all":"Alles zurücksetzen","owner":"Eigentümer","campaigns":"Kampagnen","no_report_found":"Keine Berichte gefunden!","report_date":"Datum des Berichts","reporter_name":"Name des Reporterstellers","reporter_email":"Email des Reporterstellers","report_details":"Berichtsdetails","details":"Details","phone":"Telefon","reported_Campaign":"Gemeldete Kampagnen","knows_the_organizer":"Kennen Sie den Organisator?","explained_relation":"Erklären Sie Ihre Beziehung","reporter_describes":"Beschreibung des Reporterstellers","concern":"Bedenken","did_reporter_involve_in_a_legal_dispute_with_the_campaign_organizer":"Ist der Reportersteller in einem gerichtlichen Disput mit dem Organisator?","did_the_campaign_violate_crowdfundlys_terms_and_conditions":"Verstößt die Kampagne gegen Crowdfundlys Geschäftsbedingungen?","campaign_report":"Kampagnenbericht","create_type":"Erstelle Typ","update_type":"Aktualisere Typ","do_you_really_want_to_delete":"Wollen Sie das wirklich löschen?","contact_requests":"Kontaktanfragen","loading_requests":"Lade Anfragen","crowdfundly_is_Asia_leading_free_fundraising_platform":"Crowdfundly ist Asiens führende kostenfreie Plattform für Spendensammler um Gelder für ihre Zwecke zu sammeln","report_a_campaign":"Kampagne melden","per_page":"Pro Seite","time_in":"Zeit in UTC","contributor_email":"Unterstützer Email","ref_id":"Ref. ID","action":"Aktion","contributions":"Unterstützer","successfully_refunded":"Erfolgreich erstattet","failed_to_refund":"Erstatten fehlgeschlagen","danger":"gefahr","search_here":"Suchen Sie hier","no_fundraiser_found":"Keine Spendensammler gefunden","total_campaigns":"Alle Kampagnen","successful_campaigns":"Erfolgreiche Kampagnen","raised_amount":"Gesammelter Betrag","joined_at":"Beigetreten am","newest":"Neuste","oldest":"Älteste","please_wait_request_is_processing":"Bitte warten, Anfrage wird bearbeitet","sorry_no_campaigns_to_show":"Tut mir Leid, keine Kampagne gefunden","assigned_at":"Zugewiesen am","are_you_sure_you_want_to_accept":"Sicher, dass Sie akzeptieren wollen","are_you_sure_you_want_to_reject":"Sicher, dass Sie ablehnen wollen","you_have_successfully_accepted_the_campaign":"Kampagne erfolgreich angenommen","total_assigned":"Alle Zugewiesenen","total_accepted":"Alle Angenommenen","total_raised":"Gesammelter Betrag","total_approved":"Alle Freigegebenen","total_rejected":"Alle Abgewiesenen","enable_disable":"Ein/Ausschalten","enabled":"eingeschaltet","disabled":"Ausgeschaltete","modules_updated_successfully_this_is_a_temporary_alert_system":"Module erfolgreich aktualisiert. Dies ist ein temporäres Warnsystem","assign_permissions":"Zulassung zuweisen","available_modules":"Verfügbare Module","available_permissions":"Verfügbare Zulassungen","withdraw_requests":"Anfrage zurückziehen","no_withdraw_request_found":"Keine zurückgezogene Anfrage gefunden!","no_withdraw_history_found":"Keine vergangene zurückgezogene Anfrage gefunden!","payout_method":"Auszahlungsmethode","payout_methods":"Auszahlungsmethoden","attachment":"Anhang","method_name":"Methodenname","sl":"SL. Nr.","paypal":"PayPal","active":"Aktiv","update_method":"Methode Aktualisieren","delete_method":"Methode Löschen","no_refund_has_been_made":"Keine Rückerstattung veranlasst","platform":"Plattform","gateway":"Gateway","view_note":"Notiz anzeigen","accept_request":"Anfrage akzeptieren","decline_request":"Anfrage ablehnen","decline_refund":"Rückerstattung ablehnen","approve_refund":"Rückerstattung freigeben","refund_note":"Notiz zur Rückerstattung","contributor_note":"Notiz des Unterstützers","admin_note":"Notiz des Admins","successfully_declined":"Erfolgreich abgelehnt","no_role_found":"Keine Rolle gefunden","permissions":"Zulassungen","enter_role_name":"Rollenname eingeben","roles":"Rollen","please_give_permissions_to_the_user":"Bitte erteilen Sie dem Nutzer eine freigabe!","sorry_owner_and_fundraiser":"Tut mir Leid! eigentümer und spendensammler Rolle sind nicht zugelassen","settings_payment":"Einstellungen / Zahlung","you_don_have_stripe_account_connected":"Sie haben keinen stripe account Verbunden","you_won_be_able_to_accept":"Sie werden das nicht akzeptieren können","or_can":"oder Sie können kein Teil von","transactions":"transaktionen sein","connect_your":"Verbinden Sie Ihren stripe account um sich mit","connect":"Verbinden","crowdfundly":"Crowdfundly","stripe":"Stripe","stripe_account_id":"Stripe account ID","loading_stripe":"Lade stripe account details","verifying":"Verifiziere stripe account id","settings_basic":"Einstellungen / Basis","username":"Nutzername","crowdfundly_com":"crowdfundly.com","description":"Beschreibung","country":"Land","select_organization_country":"Wählen Sie das Land, in dem Ihre Organisation sitzt","currency":"Währung","contact_number":"Kontaktnummer","select_code":"Code wählen","setting_basic":"Einstellungen - Basis","setting_plan":"Einstellungen - Plan","setting_payment_history":"Einstellungen - vergangene Zahlungen","failed_to_load_data":"Konnte keine Daten laden","commission_percentage":"Kommissionsanteile","contributor_will_see_tip_presets_based_on__":"Beitragszahler sehen Trinkgeldvorgaben, die auf diesem Prozentsatz über ihrem Beitragsbetrag basieren","auto_approval":"Auto Freigabe","auto_approval_for_publishing_new_campaign":"Auto Freigabe um neue Kampagne zu veröffentlichen","auto_approval_for_updated_campaign":"Auto approval um aktualisierte Kampagne freizugeben","allow_Refund":"Rückerstattung erlauben","allow_contributor_to_request_for_refund_contributed_amount":"Erlauben Sie dem Unterstützer, einen Antrag auf Rückerstattung des Beitrags zu stellen","escrow":"Treuhand","escrow_duration":"Treuhanddauer","do_you_want_to_add_escrow_duration":"Eine Dauer zum Treuhandkonto hinzufügen?","settings_fundraiser":"Einstellungen - Spendensammler","Setting_fundraiser":"Einstellungen / Spendensammler","contribution_tip_percentage":"Beitrag zum Trinkgeldbetrag","settings_media":"Einstellungen / Medien","setting_media":"Einstellungen - Medien","logo":"Logo","recommended_size":"Vorgeschlagene Größe","px":"px","cover_photo":"Coverfoto","favicon":"Favicon","slider_images":"Slider images","drag_and_drop_image":"Ziehen Sie eine Bilddatei hinein oder klicken Sie in das Feld, um eine Datei auszuwählen.","drop_your_images_or_click_to_browse":"Ziehen Sie eine Bilddatei hinein oder klicken Sie zum durchsuchen","supports_JPG_JPEG_PNG":"Unterstützt: JPG, JPEG, PNG","invalid_file":"Ungültige Datei","are_you_sure_to_delete":"Sicher, dass Sie das löschen wollen?","settings_policies":"Einstellungen / Policen","settings_social":"Einstellungen / Soziales","settings_theme":"Einstellungen / Thema","select_page_you_need":"Seite wählen die Sie benötigen","privacy_policy":"Hinweise zum Datenschutz","terms_conditions":"Allgemeine Geschäftsbedingungen","refund_policy":"Rückerstattungsregelungen","settings_pages":"Einstellungen - Seiten","setting_social":"Einstellungen - Soziales","select_theme":"Thema auswählen","team_accounts":"Teamkonten","team_account":"Teamkonto","assign_member":"Mitglied zuweisen","looks_like_you_have_not_created":"Sieht so aus, als hätten Sie noch keine Rolle erstellt um ein Mitglied hinzuzufügen. Erstellen Sie erst eine Rolle, um ein Mitglied hinzuzufügen","user":"Nutzer","enter_user_email":"Nutzer Email eingeben","update_member":"Mitglied aktualisieren","looks_like_role_to_assign_to_a_member":"Sieht so aus, als hätten Sie noch keine Rolle erstellt um ein Mitglied hinzuzufügen. Erstellen Sie erst eine Rolle, um ein Mitglied hinzuzufügen","my_wallet":"Meine Börse","new_withdrawal_request":"Neuer Antrag auf Abhebung","withdrawal_history":"Vergangene Abhebungen","request_send":"Anfrage gesendet","currencies":"Währungen","symbol":"Symbol","default_donation_presets":"Standart unterstütungs Voreinstellungen","loading_presets":"Lade Voreinstellungen","no_default_preset_found":"Keine Standartwerte gefunden","summary":"Zusammenfassung","overview":"Übersicht","total_fundraiser":"Alle Spendensammler","total_contributions":"Alle Unterstützungen","total_contributors":"Alle Unterstützer","total_fundraised":"Alle Spendensammlungen","approved_campaigns":"Freigegebene Kampagnen","pending_campaigns":"Wartende Kampagnen","raised_campaigns":"Abgeschlossene Kampagnen","rejected_campaigns":"Abgewiesene Kampagnen","campaign_stats":"Kampagnen Status","contribution_this_year":"Unterstützungen in diesem Jahr","online_raised":"Online Gesammelt","offline_raised":"Offline Gesammelt","total_under_verification_campaigns":"Alle Kampagnen in der Verifizierung","total":"Alle","crowdfunding_growth":"Crowdfunding Wachstum","today":"Heute","yesterday":"Gestern","this_month":"Diesen Monat","this_year":"Dieses Jahr","last_month":"Letzter Monat","last_year":"Letztes Jahr","all_the_time":"Allzeit","custom":"Benutzerdefiniert","Select_date":"Start und Enddatum wählen","giver_since":"Geber seit ","share_this_story":"Diese Geschichte teilen","loading_giver_story":"Geber Geschichte lädt","what_motivated":"Was hat Sie zur Unterstützung motiviert?","to_support_a_worthy":"Eine würdige Sache zu unterstützen und zu versuchen, auf kleiner Ebene etwas zu bewirken","why_did_you_choose":"Warum haben Sie sich für die Sache entschieden, die Sie kürzlich unterstützt haben?","can_you_share_with_us":"Können Sie uns etwas mitteilen, das Sie auf Ihrer Spendenreise gelernt haben?","i_once_had_a_long":"Ich hatte einst einen langen Weg der Genesung und konnte daher gut nachvollziehen, wie es sich anfühlt, wenn man am Boden liegt. Jede Kleinigkeit macht einen großen Unterschied","what_advice":"Welchen Rat würden Sie Menschen geben, die mit dem Gedanken spielen, etwas zurückzugeben?","dont_wait":"Warten Sie nicht. Man kann noch so viel leisten, egal wie klein. Was für den einen klein erscheint, ist es für den anderen nicht immer","give_kindness":"Crowdfundly ist nur mit der Hilfe von wunderbaren Spendern möglich. Klicken Sie auf einen der Spender, um ihre inspirierenden Spendengeschichten zu lesen","with_stripe":"mit stripe","connect_your_stripe_account_to":"Verbinden Sie Ihren Stripe Account um","retry_save_offer":"Belohnen sichern noch Mal versuchen","edit_campaign_and_manage_offer":"Kampagne verwalten und Belohnung bearbeiten","failed_to_save_offer":"Konnte Belohnung nicht speichern!","couldn_save_your_offer":"Ihre Belohnung konnte nicht gespeichert werden. Sie können die Belohnung immer noch über die Kampagnenbearbeitungsseite verwalten","your_campaign_has_been_created_successfully":"Ihre Kampagne wurde erfolgreich erstellt, aber die Belohnung konnte nicht gespeichert werden. Sie können die Belohnung weiterhin auf der Seite zur Bearbeitung der Kampagne verwalten.","failed_to_create_campaign":"Kampagne konnte nicht erstellt werden","linked_accounts":"Verbundene Konten","recent_campaigns":"Vergangene Kampagnen","all_campaigns":"Alle Kampagnen","create_your_organization":"Erstellen Sie Ihre Organisation","organization_name":"Name der Organisation","enter_organization_name":"Geben Sie den Namen der Organisation ein","length_must_be_between":"Länge muss zwischen","characters_numbers_and":"Zeichen, Nummern und","in_middle_are_allowed":"sind in der Mitte erlaubt","and_20":"und 20","enter_contact_number_here":"Kontaktnummer hier eintragen","select_template":"Vorlage auswählen","template_one":"Vorlage 1","template_two":"Vorlage 2","i_agree_to_the":"Ich erteile meine Zustimmung zu ","please_agree_to_terms":"Bitte stimmen Sie den Allgemeinen Geschäftsbedingungen zu","invalid_username":"Ungültiger Benutzername.","please_check_username_length_and_supported_characters":"Bitte die länge und Zeichen im Nutzernamen überprüfen","verifying_your_email":"Email wird verifiziert","failed":"Fehlgeschlagen","choose_an_image":"Bild auswählen","hello_world":"Hallo, Welt","signin_with_facebook":"Mit Facebook registrieren","signin_with_google":"Mit Google registrieren","full_name":"Vollständiger Name","your_full_name":"Ihr vollständiger Name","example_email_com":"example@email.com","example":"Beispiel","confirm_password":"Passwort wiederholen","sign_up":"Registrieren","profile_page":"Profil","notifications":"Mitteilungen","you_have_no_notification":"Keine Mitteilungen","sing_in":"Registrieren","get_json":"Hole JSON DATEN","contact_with":"Kontakt mit","your_name":"Ihr Name","your_email":"Ihre Email","enter_your_name":"Bitte Ihren Namen eintragen","enter_your_email":"Bitte Ihre Email eintragen","enter_your_subject":"Bitte Betreff eintragen","your_message_here":"Schreiben Sie hier Ihre Nachricht","contact_with_crowdfundly":"Kontaktieren Sie crowdfundly","no_campaigns_to_show":" Keine Kampagne zum anzeigen","redeem_coupon":"Coupon einlösen","to_access":"Um zuzugreifen","subscription":"Abonnieren","lifetime_packages_for_app_sumo_users":"Lebenlage Pakete für AppSumo Benutzer","lifetime":"Lebenslang","current_plan":"Derzeitiger Plan","coupon_code_here":"Couponcode hier","enter_your":"Geben Sie ein","fetching_current_plan":"Suche Ihren derzeitigen Plan","sorry_limit":"Tut mir Leid, Sie haben Ihr Limit erreicht","add_maximum":"Mehr Coupons hinzufügen, um Ihr Paket zu aktualisieren. Maximum","applied_coupons":"Angewendete Coupons","coupons":"Coupons","applied_for":"angewendet für","item_name":"Name des Gegenstandes","item_price":"Preis des Gegenstandes","coupon_discount_value":"Coupon Rabatt","don_have_an_account":"Sie haben noch kein Konto?","already_have_an_account":"Sie haben schon ein Konto?","subscribe":"Abonnieren","update_subscription":"Abonnements aktualisieren","sorry_invalid_code":"Tut mir Leid, ungültiger Couponcode","loading_subscriptions":"Lade Abonnements","plan_details":"Plandetails","agency":"Agentur","ends_on":"Endet am","please_provide_few_information_about_yourself":"Bitte stellen Sie ein paar Infos über sich zur verfügrung","no_contribution_has_been_made":"Keine Unterstützungen bisher","your_plan":"Ihr Plan","for":"für","year":"Jahr","your_next_bill":"Ihre nächste Rechnung","payment_history":"Vergangene Zahlungen","no_payment":"Noch keine Zahlungen getätigt!","service_period":"Serviceperiode","profile_information":"Profilinformationen","profile_picture":"Profilbild","delete_account":"Konto löschen","your_story":"Ihre Geschichte","Your_bio_here":"Ihre Biographie","change_Password":"Passwort wechseln","new_password":"Neues Passwort","current_password":"Altes Passwort","sorry_to_see_you_o":"Es tut weh, Sie gehen zu lassen!","please_note_that":"Bitte beachten Sie, dass der Eigentümer der von Ihnen unterstützten Kampagnen weiterhin Zugriff auf Ihren Namen, Ihre E-Mail-Adresse und alle anderen von Ihnen angegebenen Kontaktinformationen hat","for_information":"Für mehr Informationen zur Datenverarbeitung, lesen Sie bitte unsere","warning":"Warnung: Das kann nicht rückgängig gemacht werden!","once_you_deactivate":"Wenn das Konto gelöscht wurde, können Sie nicht mehr","log_in":"Einlogen","manage_contributions":"Unterstützungen verwalten","contact_campaigners":"Kampagenführer über crowdfundly kontaktieren","access_campaigns":"Auf Kampagnen zugreifen","reactivate":"Ihr Konto reaktivieren","all_social_media_connections":"Alle Social Media Verbindungen werden getrennt","yes_deactivate":"Ja, Konto permanent löschen","save_change":"Änderungen speichern","your_account_has_been_deleted":"Das Konto wurde gelöscht","about_me":"Über mich","campaigns_so_far":"Kampagnen, an denen ich bisher beteiligt war","no_campaigns":"Keine Kampagne gefunden","something":"etwas","new":"neu","you_are_currently_subscribed_to":"Derzeit haben Sie abonniert","have_a_coupon":"Haben Sie einen Coupon?","note_that":"Hinweis: Eine Rückstufung ist nicht möglich und bitte versuchen Sie nicht, den selben Plan aufzustufen","please_provide":"Bitte hinterlegen Sie Ihre Kreditkarteninformationen","please_select_a_plan":"Bitte wählen Sie einen Plan","completed_secure":"Sicher Zahlung abgeschlossen. Bereite Sie für crowdfundly.io vor. Bitte warten","couldn_complete_payment":"Zahlung konnte nicht abgeschlossen werden","choose_package":"Paket wählen","organization":"Organisation","organizations":"Organisationen","your_fullname":"Ihr voller Name","price":"Preis","package_name":"Paketname","please_select_package":"Paket wählen","package_information":"Paketinfos","setting_you_up":"Bereite alles für crowdfundly.io vor","congratulations":"Gratulation!","payment_successful":"Zahlung erfolgreich","set_my_new_password":"Ändere mein neues Passwort","you_can_now":"Sie können jetzt Ihr neues Passwort nutzen um sich einzulogen","forgot_password":"Passwort vergessen?","enter_the_email":"Bitte geben Sie die Email ein, die zu Ihrem Konto hinterlegt wurde. Ich sende Ihnen ein neues Passwort zu","your_account_email":"Email","you_can_still":"Sie können immer noch Anonym helfen","browse_campaigns":"Kampagnen durchsuchen","member_name":"Mitgliedername","we_make_a_living":"We make a living by what we get, but we make a life by what we give","winston_churchill":"Winston Churchill","we_believe_that":"Wir glauben, dass Mitgefühl in jedem Menschen existiert","seek_help":"Wir glauben, dass jeder, der in Not ist, in der Lage sein sollte, Hilfe zu suchen","everyone_has":"Wir glauben, dass jeder die Fähigkeit hat, zu geben","contented_life":"Wir glauben, dass Geben der Schlüssel zu einem zufriedenen Leben ist","why_we_exist":"Darum gibt es uns","where_you_can_help":"Hier können Sie helfen","crowdfundly_family":"Crowdfundly Familie","we_on_a":"Wir sind auf einer Mission, das Spenden zu demokratisieren","at_crowdfundly":"Bei Crowdfundly glauben wir daran, menschliches Mitgefühl und Freundlichkeit für Menschen in Not zu nutzen.Crowdfundly hilft Patienten bei Krankenhausrechnungen und ermöglicht Kindern in ländlichen Gegenden zu studieren.Crowdfundly hilft Event-Organisatoren, Geld für gute Zwecke zu sammeln. Crowdfundly bietet Unterstützung für humanitäre Bemühungen für Länder in Not","your_dream_job":"Von Top-Arbeitgebern entdeckt werden und Ihren Traumjob ergattern","tracking_system":"Finden Sie Ihre Traumjobs durch das beste Bewerbersystem","enter_password":"Passwort eingeben","enter_full_name":"Vollständigen Namen eingeben","why_you_want_to":"Warum wollen Sie ","fundraiser_your_note":"Der Spendensammler wird über die Notiz informiert","campaign_analytics":"Kampagnenstatistik","statistics":"Statistik","campaign_management":"Kampagnenverwaltung","thank_you_message":"Danke Nachricht","add_offline_donation":"Offline Unterstützung hinzufügen","write_contributor_address_here":"Adresse des Unterstützers eintragen","donation":"Unterstützung","is_anonymous":"Ist Anonym","has_endorsed_as_a":"hat unterstützt als","no_offer_found":"Keine Belohnung gefunden","add_a_new_update_to_this_campaign":"Neue aktualisierung hinzufügen","video":"Video","add_video":"Video hinzufügen","post_update":"Aktualisierung veröffentlichen","campaign_update":"Kampagnenaktualisierung erfolgreich veröffentlicht","campaign_updated":"Kampagnenaktualisiserung erfolgreich gelöscht","post_an_update__":"Veröffentlichen Sie eine Aktualisierung der Kampagne für Besucher","no_updates_found":"Keine Aktualisierung gefunden","give_baby_cheryl":"Geben Sie Baby Cheryl eine Chance zu kämpfen 2020","back_this_campaign":"Kampagne unterstützen","contributions_are_not":"Beiträge sind nicht mit Vergünstigungen verbunden","select_a_donation_amount":"Höhe der Unterstützung wählen","you_can_also_contribute":"Sie können auch einen ähnlichen Betrag zahlen, mit dem Sie sich wohler fühlen. Jedes kleine bisschen hilft!","you_contributing_Crowdfundly":"YSie beteiligen sich an einer Drittanbieter Kampagne der Naim-Stiftung über Crowdfundly","maximum_250_characters":"Maximal 250 Zeichen","you_can_also_contribute_a_similar":"Sie können auch einen ähnlichen Betrag zahlen, mit dem Sie sich wohler fühlen. Jedes kleine bisschen hilft!","avatar":"Avatar","give_anonymously":"Anonym spenden","click_to_payment":"Klicken zum Zahlen","share_with_facebook":"Teilen Sie diese Kampagnen mit Ihren Facebookfreunden?","endorse_campaign":"Kampagne befürworten","your_fundraiser":"Ihre Beziehung zum Spendensammler","you_endorsement_message":"Ihre Nachricht der Befürwortung","pre_acceptance":"Vorakzeptanz","assign":"Zuweisen","are_you_sure__":"Sie möchten diese Kampagne genehmigen?","share_this_campaign":"Kampagne teilen","a_single_share":"Eine einzige Teilung von Ihnen führt in der Regel zu mindestens einem Beitrag. Das Teilen dieser Kampagne dauert nur 10 Sekunden","share_facebook":"Auf Facebook teilen","share_whatsapp":"Auf Whatsapp teilen","share_twitter":"Auf Twitter teilen","share_linkedin":"Auf LinkedIn teilen","or_print":"Oder drucken Sie den Flyer aus und tragen Sie Ihn in die Welt hinaus","be_the_first":"Seien Sie der erste, der Unterstützt!","verified_by":"Verifiziert von","endorsed_by":"Befürwortet von","facebook_verified":"Facebook Verifiziert","donations_will_go_to":"Die Unterstützung geht zu","via":"über","download_flyer":"Flyer herunterladen","all":"Alle","submitted":"Eingereicht","requested":"Angefragt","the_campaign":"Kampagne erfolgreich akzeptiert","add_new_opinion":"Neue Meinung hinzufügen","to_contact":"um mit Spendensammlern und Unterstützern in Verbindung zu treten","dont_give_up":"Nicht aufgeben, Ich wünsche alles gute","all_the_best":"Alles gute! Nicht aufgeben","someone_is_typing":"Jemand schreibt gerade","drafted":"Entworfen","total_refunds":"Erstattungen insgesamt","in_minutes":"Legen Sie los, in dem Sie in wenigen Minuten eine Spendensammlung erstellen","let_present":"Lassen Sie uns die Belohnungen präsentieren","save_to_draft":"Als Entwurf speichern","are_you_sure_once__":"Ist die Belohnung erst gelöscht, kann man das nicht mehr rückgängig machen!","choose_your_campaign_category":"Kampagnenkategorie wählen","cant_find_your_suitable_category":"Keine passende Kategorie gefunden?","request_new_category":"Neue Kategory anfordern!","back":"Zurück","next":"Nächste","campaign_gallery":"Zeit eine Galerie anzulegen","request_for_a_new_category":"Wenn Sie keine geeignete Kategorie finden, beantragen Sie eine neue","category_name":"Kategorienamen","why_you_suggest":"Warum schlagen Sie die Kategorie vor? (optional)","make_request":"Anfrage starten","now":"Erzählen Sie Ihre Geschichte","sweet":"Sehr schön! Setzen Sie jetzt ein Spendenziel","hope_up_well":"Hoffentlich halten Sie durch","view_story":"Geschichte anzeigen","be_happy_be_kind":"Seien Sie glücklich, seien Sie nett","let_crowdFundly_assist_you":"Lassen Sie CrowdFundly assistieren","contributed":"Ünterstützt","loading_giver_stories":"Geber Geschichten werden geladen","life_will":"Mit geberischem Herzen wird das Leben bedeutungsvoller","start_with":"eginnen Sie mit einem beliebigen Betrag, mit dem Sie sich wohlfühlen. Sie werden sich gut fühlen, wenn Sie Menschen in Not helfen können... Ich spende, um mich gut zu fühlen","dont_wait_one":"Warten Sie nicht. Man kann noch so viel leisten, egal wie klein. Was für den einen klein erscheint, muss es für den anderen nicht immer sein. Ich spende nicht, weil ich reich bin, sondern weil ich verstehe, wie sich das Leben gut anfühlt","one_can_still_provide":"Man kann noch so viel leisten, egal wie klein. Was für den einen klein erscheint, muss für den anderen nicht immer klein sein. Ich trage nicht bei, weil","life_will_be_more":"Das Leben wird sinnvoller sein, wenn man ein wohltätiges Herz hat. Wenn Sie Freundlichkeit zeigen, wird Freundlichkeit auch zu Ihnen zurückkommen, das ist das","crowdfundly_has_been_featured_in":"Crowdfundly wurde vorgestellt in","emergency":"Notfall","please_contribute":"Bitte unterstützen Sie","givers":"Geber","loading_successful_campaigns":"Lade erfolgreiche Kampagnen","see_more":"Mehr anzeigen","submit_an_opinion":"Meinung teilen","opinion":"Meinung","your_opinion_here":"Ihre Meinung","loading_opinions":"Lade Meinungen","offer_title":"Belohnungstitel","enter_offer_title":"Belohnungstitel eingeben","regular_price":"Gewöhnlicher Preis","offer_price":"Belohnungspreis","stock":"Lagerbestand","shipping":"Versand","add_new_location":"Neue Lokation hinzufügen","shipping_location":"Versandlokation","shipping_fee":"Versandkosten","describe_offer":"Belohnungsbeschreibung","offer_regular_price":"Der Preis der Belohnung kann nicht höher sein als der gewöhnliche Preis","shipping_locations":"Bitte wählen Sie zumindest eine Versandlokation!","successfully_offer_added":"Belohnung erfolgreich hinzugefügt","select_shipping_location":"Versandlokation auswählen","off":"AUS","why_refund":"Warum wollen Sie eine Rückerstattung","loading_timeline":"Lade Timeline","to":"Nach","monthly":"Monatlich","yearly":"Jährlich","month":"Monat","free":"frei","plan_a":"Plan A","plan_b":"Plan B","selected":"Ausgewählt","upgrade":"Aufstufung","get_now":"Jetzt erhalten","contribution":"Unterstützung","you_are_contributing":"Sie unterstützen","contribution_info":"Unterstütungsinfo","select_a_contribution_amount":"Höhe der Unterstützung wählen","contributions_are_not_associated_with_perks":"Beiträge sind nicht mit Vergünstigungen verbunden","view_campaign":"Kampagne anzeigen","join_our_subscriber_list_to_get_the_latest_news_update_special_you_inbox":"Tragen Sie sich in unsere Abonnentenliste ein, um die neuesten Nachrichten zu erhalten. Update Spezial im Posteingang","browse":"Duchsuchen","faq":"FAQ","add_organization":"Organisation hinzufügen","my_profile":"Mein Profil","enter_username":"Nutzername eingeben","enter_org_username":"Nutzername der Organisation","looks_like_you_have_not_created_any_role_yet_to_assign_to_a_member_create_role_first_to_assign_a_member":"Sieht so aus als hätten Sie noch keine Rolle erstellt. Erstellen Sie eine Rolle, um ein Mitglied hinzuzufügen","user_email":"Nutzer Email","check_all":"Alles auswählen","update_role":"Rolle aktualisieren","bank":"Bank","wallet":"Börse","payouts_history":"Auszahlungshistorie","no_attachment":"Kein Anhang","no_contributions_have_been_made":"Keine Unterstützung bisher","contributed_anonymously":"Anonym unterstützt","select_campaign_type":"Kampagnentyp wählen","contribution_amount":"Höhe der Unterstützung","startup":"Startup","business":"Geschäftlich","move_up":"Nach oben","move_down":"Nach unten","upload_image":"Bild hochladen","recommended_resolution_700_x_700_px_minimum_resolution_400_x_400_px":"Empfohlene Auflösung 700 x 700 px, Minimale Auflösung 400 x 400 px","kindness_level_will_go_up_as_you_participate_on_crowdfundly_by_contributing":"Der Freundlichkeitslevel steigt, wenn Sie sich auf Crowdfundly beteiligen, indem Sie einen Beitrag leisten","request_for_refund":"Rückzahlung anfodern","i_want_refund_because":"Ich will eine Rückzahlung, weil","select_payout_method":"Auszahlungsmethode","paypal_email":"PayPal Email","enter_your_paypal_email":"PayPal Email eingeben","beneficiary_name":"Name des Begünstigten","account_number":"Kontonummer","bank_name":"Bank","branch_name":"Niederlassung","enter":"Eingeben","swift_code":"SWIFT Code","bangladesh":"Bangladesh","other":"Andere","select_country":"Land wählen","payout_information":"Auszahlungsinformationen","requested_date":" Angefordertes Datum","last_updated_at":"Zuletzt aktualisisert am","upload_an_attachment":"Einen Anhang hochladen","for_business":"Prämienbasierte Kampagne","for_charity":"Spendenbasierte Kampagne","now_you_can_choose_how_you_want_to_run_your_campaign__":"Jetzt können Sie wählen, wie Sie Ihre Kampagne durchführen möchten. Sie kann nach der Erstellung nicht mehr geändert werden.","this_creates_urgency_and_should_always_be_used_when_money_is_needed_before_a_certain_time":"Dies schafft Dringlichkeit und sollte immer dann verwendet werden, wenn Geld vor einer bestimmten Zeit benötigt wird","ongoing_fundraise":"Laufende ( ohne Zeitlimit ) Spendensammlung","this_should_be_used_if_you_are_collecting_money_on_a_regular_basis":"Dies sollte verwendet werden, wenn Sie regelmäßig Geld sammeln","has_contributed":"hat unterstützt","has_contributed_offline":"hat offline Unterstützt","contribute_now":"Jetzt Unterstützen","sorry_you_didn_t_contribute_any_campaign_yet":"Tut mir Leid, Sie unterstützen noch keine Kampagne","online":"Online","offline":"Offline","wallet_payout":"Börse & Auszahlungen","team":"Team","view_organization":"Organisation anzeigen","contribution_preset_page_description":"Wenn Sie Ihr Spendenziel wirklich erreichen wollen, sollten Sie Ihre Beitragsvorgaben unten anpassen.👇 </br> Sie können die voreingestellten Beträge für die Beiträge festlegen und erklären, was dieser Betrag für Ihren Zweck bedeutet. Es wird dem Spender helfen, sich vorzustellen, wie sein Geld Ihnen helfen kann ","sent_by_organization":"Gesendet von der Organisation","received_by_fundraiser":"Erhalten vom Spendensammler","organization_not_found":"Organisation nicht gefunden!","i_have_contributed":"Ich habe","times":"mal unterstützt","i_have_raised_contribution_for":"Ich habe Unterstützung gesammelt für","i_am_contributing_since":"Ich unterstütze seit","the_page_you_requested_could_not_be_found":"Die angeforderte Seite wurde nicht gefunden","contact_fundraiser":"Spendensammler kontaktieren","offer_image":"Bild der Belohnung","relies_on_your_generosity__":"ist auf Ihre Großzügigkeit angewiesen, um weiterhin 0% Plattformgebühr für Spendensammler bereitzustellen","write_your_message_here":"Schreiben Sie hier Ihre Nachricht","choose_a_payment_option":"Zahlungsmethode wählen","debit_or_credit_card":"Debit oder Kreditkarte","sorry_payment_failed":"Zahlung fehlgeschlagen","something_went_wrong_with_your_payment":"Etwas hat nicht geklappt","redirecting_to_campaign":"Leite Sie zur Kampagne weiter","tip":"Trinkgeld","shipping_cost":"Versandkosten","cant_process_stripe_now":"Kann Stripe nicht verarbeiten","cant_process_paypal_now":"Kann PayPal nicht verarbeiten","cant_process_aamarpay_now":"Kann Aamarpay nicht verarbeiten","cant_process_sslcommerz_now":"Kann sslcommerz nicht verarbeiten","try_other_payment_options":"Versuchen Sie eine andere Zahlungsweise","error_making_card_mount":"Fehler beim erfassen der Karte","contribution_tip_amount":"Höhe des Tringeldes","image_uploader":"Bild Uploader","banner_image":"Bannergrafik","amount_preset":"Voreingestellte Höhe","campaign_type":"Kampagnentyp","save_and_preview_campaign":"Sichern und Vorschau anzeigen","are_you_sure_to_publish_once_published_it_will_open_for_contribution":"Einmal erstellt, ist die Kampagne offen für Unterstützer","fundraiser_image":"Spendensammlerbild","report_this_campaign":"Kampagne melden","the_following_are_examples_of_fraudulent_activities-on_crowdfundly":"Im Folgenden finden Sie Beispiele für betrügerische Aktivitäten auf Crowdfundly","breaking_the_law":"Gesetzesbruch","misrepresenting_ones_identity_and_lying__":"Falsche Darstellung der eigenen Identität und Lügen über die Beziehung zum Begünstigten der Kampagne","posting_misleading_statements_on_the_campaign":"Veröffentlichen von irreführenden Aussagen zur Kampagne","not_sending_the_raised_funds_to_the_stated_beneficiary":"Die gesammelten Gelder nicht an den angegebenen Begünstigten zu senden","sometimes_there_may_be_situations__":"Manchmal kann es Situationen geben, die Zweifel aufkommen lassen, aber nicht als betrügerische Aktivitäten auf unserer Plattform angesehen werden, wie","rumors_or_speculations_of_fraud":"Gerüchte oder Spekulationen über Betrug","disagreement_with_the_nature__":"Unzufriedenheit mit der Art der Kampagne oder dem Charakter des Kampagnenorganisators","custody_or_familial_disputes_and_disagreements":"Sorgerechts- oder familiäre Streitigkeiten und Unstimmigkeiten","to_report_a_campaign_for_fraud__":"Um eine Kampagne wegen Betrugs auf Crowdfundly zu melden, füllen Sie bitte das folgende Formular aus und schicken es ab","enter_your_full_name":"Geben Sie Ihren vollen Namen an","your_phone_number":"Ihre Telefonnummer","enter_your_phone_number":"Geben Sie Ihre Telefonnummer an","required_in_case_our_team_needs__":"Wird benötigt, falls unser Team Sie wegen mehr Details kontaktiert","your_email_number":"Ihre Emailadresse","enter_your_email_address":"Geben Sie Ihre Emailadresse ein","do_you_know_the_campaign_organizer":"Kennen Sie den Kampagnenorganisator?","please_explain_your_relationship_to_the_campaign_or_campaign_organizer":"Bitte erklären Sie Ihre beziehung zum Kampagnenorganisator","write_here":"Schreiben Sie hier","which_best_describes_you":"Was beschreibt Sie am besten?","describe_your_concerns_about_this_campaign":"Beschreiben Sie Ihre Bedenken zu der Kampagne","are_you_involved_in_a_legal_dispute_with_the_campaign_organizer":"Befinden Sie sich im Rechtsstsreit mit den Organisator?","does_the_campaign_violate_crowdfundlys_terms_and_conditions":"Verstößt die Kampagne gegen die Allgemeinen Geschäftsbedingungen von Crowdfundly?","unable_to_prepare_data":"Konnte Daten nicht verarbeiten!","flyer_campaign_summary":"Zusammenfassung der Flyerkampagne","contribution_amount_in":"Höhe der Unterstützung in","contribution_amount_in_last_30_days":"Höhe der Unterstützung in den letzten 30 Tagen","total_contribution_amount":"Gesamte Höhe der Unterstützung","set_a_thank_you_message_to_contributor":"Ein Dankschreiben an die Unterstützer verfassen","save_message":"Nachricht abspeicherb","fundraiser_avatar":"Spendensammleravatar","you_can_contribute_after_publishing_the_campaign":"Nach der veröffentlichung können Sie die Kampagnen unterstützen","select_a_offer":"Belohnung auswählen","chat_with_fundraiser_and_contributors":"Unterhalten Sie sich mit dem Spendensammler und den Unterstützern","start_chat":"Starte Unterhaltung","you_can_chat_with_the_fundraiser_after_publishing_the_campaign":"Nach der Veröffentlichung können Sie sich mit dem Spendensammler unterhalten","reason_for_campaign_rejection":"Grund für die Ablehnung der Kampagne","successfully_created":"Erfolgreich erstellt.","from":"Von","failed_to_save_offers":"Konnte die Angebote nicht speichern!","your_campaign_has_been_created_successfully_but_failed_to_save_offers":"Die Kampagne wurde erfolgreich erstellt, aber die Belohnungen konnten nicht gespeichert werden","slider_image":"Slider image","organization_logo":"Logo der Organisation","allowed_text_organization_user_name":"und 20 Zeichen, Nummern und \'-\' in der Mitte sind erlaubt.","write_organization_address_here":"Schreiben Sie hier die Adresse der Organisation","write_organization_description_here":"Beschreiben Sie die Organisation hier","code":"Kode","apply_your_coupon_code_to_get_an_discount":"Fügen Sie den Couponcode hinzu für Ihren Rabatt","please_fill_in_all_the_fields":"Füllen Sie bitte alle Felder aus","pay_now":"Jetzt Zahlen","packages":"Pakete","subscribe_now":"Jetzt abonnieren","subscriptions":"Abonnements","coupon_code":"Couponcode","downgrade":"Herunterstufen","type_your_name_here":"Tragen Sie hier Ihren Namen ein","type_your_email_address":"Tragen Sie ihre Emailadresse ein","billing_information":"Rechnungsdaten","saved_cards":"Karten speichern","saved_card":"Karte speichern","card_information":"Kreditkarteninformation","refund_request":"Rückzahlung anfordern","i_have_changed_my_mind":"Ich habe meine Meinung geändert","copied_to_clipboard":"In die Zwischenablage gespeichert","apply_coupon":"Coupon anwenden","change_coupon":"Coupon ändern","coupon":"Coupon","remove":"Entfernen","password":"Passwort","authenticating":"Authentifizierung","sorry_you_have_reached_your_limit":"Tut mir Leid, Ihr Limit ist erschöpft","add_more_coupon_to_upgrade_to_next_package":"Mehr Coupons hinzufügen, um das das nächste Paket zu erhalten. Maximum","add_new_campaign":"Neue Kampagne hinuzufügen","most_contributed":"Die meisten Unterstützer","view_profile":"Zeige Profile","view_campaigns":"Zeige Kampagnen","available_roles":"Verfügbare Rollen","modules":"Module","total_earned":"Insgesamt erhalten","available_amount":"Verfügbarer Betrag","total_paid":"Ingesamt gezahlt","total_withdrawn":"Insgesamt ausgezahlt","pending_payouts":"Zahlungen in Verarbeitung","wallet_not_found":"Börse nicht gefunden!","mark_as_received":"Als erhalten markiert","reloading":"Lade","accepting_payout_request_means__":"Wenn Sie der Auszahlung zustimmen bedeutet das, dass Sie die Zahlung später leisten","add_new_payout_method":"Neue Auszahlungsmethode","view_details":"Details anzeigen","method_saved":"Gespeichert","method_updated":"Aktualisiert","add_role":"Rolle hinzufügen","successfully_role_added":"Neue Rolle erfolgreich hinzugefügt","successfully_role_updated":"Rolle erfolgreich aktualisiert","allow_tip":"Tringelder erlauben","allow_tip_during_contribution":"Tringelder während der Unterstützung erlauben?","without_connecting_stripe_payment":"Ohne Stripe Verbindung","personal_stripe_credentials":"Persönliche Stripe Daten","stripe_connect_credentials":"Stripe Verbindungsdaten","we_will_keep_your_credentials_totally_encrypted":"Ihre Anmeldeinformationen bleiben verschlüsselt!","learn_more":"Mehr erfahren?","stripe_key":"Stripe Schlüssel","stripe_secret":"Stripe Geheimnis","sslcommerz_credentials":"SSLCommerz Daten","your_credentials_always_safe_at__":"Ihre Daten sind bei Crowdfundly immer sicher. Wir nutzen eine Ende-zu-Ende Verschlüsselung und verschlüsseln unsere Datenbank.","store_id":"Store ID","store_password":"Store Passwort","paypal_credentials":"PayPal Daten","client_id":"Klient ID","client_secret":"Klient Secret","about_sslcommerz":"Über SSLCommerz","close":"Schließen","about_paypal":"Über PayPal","about_stripe":"Über Stripe","settings_crowdfunding":"Einstellungen / Crowdfunding","choose_logo":"Logo wählen","choose_favicon":"Favicon wählen","choose_cover_photo":"Coverbild wählen","gallery_preview":"Gallerie Vorschau","select_social_type":"Wählen Sie einen sozialen Typen","theme":"Thema","no_team_account_found":"Kein Teamkonto gefunden","not_set_yet":"Noch nicht hinterlegt","take_me_to_create_a_role":"Bring mich zur Rollenerstellung","successfully_role_deleted":"Rolle erfolgreich gelöscht","available_for_withdrawal":"Zum Abheben bereit","total_fund_raised":"Insgesamt gesammelt","pending_clearance":"Auszahlung ausstehend","paid":"Gezahlt","available_currencies":"Verfügbare Währungen","base_currency":"Basis Währung","currencies_are_loading":"Währungen werden gerladen","total_publish_campaigns":"Insgesamt veröffentlichte Kampagnen","total_payout":"Gesamte Auszahlungen","total_pending_clearance":"Gesamt zur Verarbeitung ausstehende Auszahlungen","available_to_payout":"Zur Auszahlung bereit","revenue":"Umsatz","total_revenue":"Gesamtumsatz","total_tip_amount":"Höhe des gesamten Trinkgeldes","total_org_commission":"Gesamte Org. Kommission","select_a_start_and_end_date":"Start- und Enddatum wählen","last_7_days":"Letzten 7 Tage","last_seven_day":"Letzten 7 Tage","please_select_a_date_range":"Datum wählen","total_payouts":"Gesamte Auszahlungen","contribution_preset_amounts":"Voreingestellte Höhe der Unterstützung","brochure":"Brochüre","menu_item":"Menüpunkt","yes_confirm":"Ja, zustimmen","no_cancel":"Nein, abbrechen","mark_all_as_read":"Alle als gelesen markieren","marking_all_as_read":"Alle als gelesen markieren","you_have_no_new_notification":"Keine neuen Mitteilungen","view_all_notifications":"Alle Mitteilungen anzeigen","loading_notifications":"Lade Mitteilungen","no_data_found":"Nichts gefunden","select_an_option":"Wählen Sie eine Option","user_avatar":"Benutzeravatar","version":"Version","last_updated":"Zuletzt aktualisiert","menu_icon":"Menüicon","view_org":"Zeige Org.","view_public_page":"Zeige die öffentliche Seite","delete_organization":"Delete Organization","all_the_data_associated_with__":"Alle mit dieser Organisation verbundenen Daten werden gelöscht.","name_doesnt_match":"Name passt nicht","organization_deleted":"Organisation gelöscht","animated_icon":"Animiertes icon","copyright":"Copyright ©","powered_by":"Bereitgestellt durch","browse_all_campaign":"Alle Kampagnen durchsuchen","plan":"Plan","all_plans":"Alle Pläne","billing":"Rechnungsstellung","fundraiser_can_still_resubmit_campaign":"Spendensammler kann Kampagne immer noch erneut einreichen","share_your_updates":"Teilen Sie Ihre aktuellen Neuigkeiten!","remove_icon":"Entferne icon","enter_video_url":"Video URL eingeben","post_an_update":"Aktualisierung veröffentlichen","make_a_contribution":"Unterstützen","select_a_perk":"Belohnung auswählen","i_donate_because":"Ich Spende, weil","e_g_family_member_friend_etc":"wie Familie, Freunde etc.","please_write_your_endorsement_message_here":"Bitte schreiben Sie hier Ihre Nachricht der Befürwortung","verify_and_publish":"Verifizieren & Veröffentlichen","the_campaign_will_be_closed__":"Die Kampagne wird geschlossen und der Spendensammler kann keine weitere Aktion durchführen","we_will_send_you_an_email_to_reminding_you__":"Wir senden Ihnen eine E-Mail, um Sie später an die Beitragszahlung zu erinnern. Wählen Sie aus, wann wir Sie erinnern sollen","thanks_for_sharing":"Danke für\'s Teilen","badge":"Abzeichen","verified":"Verifiziert","no_story_available":"Keine Geschichte verfügbar","loading_messages":"Lade Nachrichten","icon":"Icon","create_new":"Erstelle neu","this_website_uses_cookies_in_oder__":"Diese Website verwendet Cookies, um Ihnen die optimale Leistung dieser Website zu ermöglichen","allow_cookie":"Cookies zulassen","publish_your_campaign":"Kampagne veröffentlichen","search_category":"Kategorie durchsuchen","what_are_you_crowdfunding_for_you":"Wofür sammeln Sie spenden?","project_venture_etc":"z.B. Projekte, Vorhaben","charitable_causes":"z.B. ehrenamtliche Vorhaben","fundraising_type":"Spendensammlertyp","cancel":"Abbrechen","crop":"Zurechtschneiden","image_size_is_too_large__":"Bildgröße zu groß. Entweder zurechtschneiden oder die Bilddatei verkleinern","choose_image":"Bild wählen","select_payment_method":"Zahlungsmethode auswählen","write_note_here":"Schreiben Sie hier Ihre Notiz","create_new_campaign_offer":"Kampagnenbelohnung erstellen","create_offer":"Belohnung erstellen","worldwide":"Weltweit","offer_price_exceeded_regular_price":"Der Preis der Belohnung übersteigt den regulären Preis!","all_claimed":"Alle beansprucht","only":"Nur","left":"übrig","sold_out":"Ausverkauft","update_campaign_offer":"Kampagnenbelohnung aktualisieren","update_offer":"Aktualisiere Belohnung","basic":"Basis","media":"Medien","policies":"Richtlinien","social":"Soziales","crowdfunding":"Crowdfunding","select_bank_country":"Wählen Sie das Land, in dem Ihre Bank sitzt","update_payout_method":"Auszahlungsmethode aktualisieren","update_withdrawal_request":"Abhebeverfahren aktualisieren","shares":"Teilungen","no_donation_selected":"Keine Unterstützung gewähl","successfully_requested":"Erfolgreich angefordert","once_you_delete_organization__":"Wenn Sie die Organisation löschen, können Sie folgendes nicht mehr tun:","access_organization":"Zugriff zur Organisation","access_fundraisers":"Zugriff auf die Spendensammlungen","access_financial_data":"Finanzdaten abrufen","retrieve_organization_settings":"Abrufen von Organisationseinstellungen","retrieve_organization":"Organisation reaktieren","more_information":"Mehr Informationen","yes_delete_organization":"Ja, Organisation löschen","selected_image":"Bild wählen","drag_and_drop_a_photo_to_upload_or_tap_to_upload":"Hier hineinziehen oder drücken, um eine Datei hochzuladen","uploading_image":"Bild wird hochgeladen","want_to_delete_this_block":"Diesen Block löschen?","hide":"Verstecken","failed_to_process_image__":"Bild konnte nicht verarbeiten. Später erneut versuchen oder den Support Kontaktieren","signin_with_linkedin":"Mit Linkedin anmelden","campaign_duration":"Kampagnendauer","select_category":"Kategorie wählen","subscription_expires_at":"Abonnement läuft aus am","cancel_subscription":"Abonnement beenden","signed_in_as":"Angemeldet als","user_details":"Nutzerinformationen","unsubscribed_successfully_logging_you_out":"Erfolgreich abgemeldet! Loge Sie aus...","unsubscribed_successfully":"Erfolgreich abgemeldet!","setting_up_your_account":"Erstelle Ihr Konto","your_account_has_been_set_successfully":"Konto erfolgreicht erstellt","no_plan_found":"Kein Plan gefunden","redirecting_to_stripe_checkout":"Leite Sie zu Stripe weiter","congratulation_your_plan_has_been_updated":"Gratulation! Der Plan wurde aktualisiert","no_card_found":"Keine Karte gefunden","exp":"Exp","you_havent_made_any_payment_yet":"Keine Zahlung geleistet!","billing_reason":"Grund der Rechnung","card_updated_successfully":"Karte erfolgreich aktualisiert","sorry_can_not_update_card":"Entschuldigung, die Karte konnte nicht aktualisiert werden","net_earning":"Netto Einnahmen","withdrawn":"Ausgezahlt","available_to_pay":"Zur Zahlung bereit","received_tip":"Erhaltene Tringelder","received_fee":"Erhaltende Gebphren","url":"URL","wallet_and_payouts":"Börse & Auszahlungen","your_expected_category_name":"Ihre akzeptierten Kategorienamen","reason_you_request_the_category":"Grund für die Einreichung der Kategorie","start_crowdfunding_with_greatly__":"Starten Sie crowdfunding mit optimiertem Spendensammlungsprozess","welcome_to_world_of_opportunities__":"Willkommen in der Welt der Möglichkeiten und der Zusammenarbeit","verification":"Verifizierung","reset":"Zurücksetzen","stripe_connect":"Stripe - Geschäftlich","documentation":"Dokumentation","active_campaign":"Aktive Kampagnen","team_members":"Teammitglieder","change_personal_stripe_credential":"Stripe Anmeldedaten ändern","change_sslcommerz_credential":"Sslcommerz Anmeldedaten ändern","change_paypal_credential":"Ändern des PayPal API Keys","you_can_not_endorse_in_this_campaign":"Diese Kampagne können Sie nicht befürworten","ssl_commerz":"SSLCommerz","awaiting_fundraiser_approval":"Erwarte die Freigabe des Spendensammlers","refunded":"Rückerstattet","cancelled":"Abgebrochen","fundraiser_accepted":"Spendensammler akzeptiert","fundraiser_cancelled":"Spendensammler abgebrochen","awaiting_for_organization_approval":"Erwarte Freigabe der Organisation","payout_details":"Auszahlungsdetails","denial_note":"Ablehnungsnotiz","payment_method":"Zahlungsmethode","add_denial_note_and_confirm":"Ablehnungsnotiz hinzufühgen und bestätigen","add_attachment":"Anhang hinzufügen","mark_as_sent":"Als gesendet markieren","your_payment_will_be__":"Die Zahlung wird aufgestuft und Sie können sie nicht mehr zurückstufen. Für mehr details","visit_our_payment_policy":"Besuchen Sie usnere Zahlungsvereinbarung","you_have":"Sie haben","new_notifications":"neue Mitteilungen","payout_method_details":"Auszahlungsdetails","updated_at":"Aktualisiert am","save_campaign":"Kampagne speichern","create_organization":"Organisation erstellen","update_card":"Karte aktualisiseren","add_card":"Karte hinzufügen","this_campaign_is_in_readonly_view_and_publicly_invisible":"Diese Kampagne ist nicht öffentlich und nur im Lesemodus verfügbar.","organization_profile":"Profil der Organisation","report":"Melden","contribution_payment":"Unterstützende Zahlung","contribution_message":"Unterstützende Nachricht","successfully":"Erfolgreich","saved":"Gespeichert","you_want_to_delete":"Sie wollen löschen","once_it_changed_can_not_be_undone":"Eingmal geändert kann es nicht rückgängig gemacht werden","this":"dies","login_for_best_crowdfunding_solution_with__":"Anmeldung für die beste Crowdfunding-Lösung mit den günstigsten Preisen.","registration_for_best_crowdfunding_solution__":"Registrierung für die beste Crowdfunding-Lösung mit den günstigsten Preisen.","available_campaign":"Verfügbare Kampagnen","start_fundraising_campaign_for_people_in_need__":"Starten Sie eine Spendensammler-Kampagne für Menschen in Not und helfen Sie ihnen, um ihr Leben zu kämpfen. Sammeln Sie Gelder für belohnungsbasierte Kampagne & spendenbasierte Kampagne","subscribe_for_best_crowdfunding_solution__":"Abonnieren Sie die beste Crowdfunding-Lösung mit den günstigsten Preisen.","appsumo":"AppSumo","crowdfundly_values_you_and_respects_your_privacy__":"Crowdfundly schätzt Sie und respektiert Ihre Privatsphäre. Wir sammeln Informationen, um unsere Beziehung zu Ihnen zu unterstützen, unsere Dienstleistungen zu verbessern und zu kommunizieren, um Sie auf dem Laufenden zu halten","reset_your_password":"Passwort zurücksetzen","take_a_tour":"Schauen Sie sich um","invoice":"Rechnung","max":"Max","files":"Dateien","file":"Datei","images":"Bilder","you_can_upload_max":"Sie können maximal hochladen","save_reward":"Belohnung speichern","you_are_not_able_to_make_contact":"Sie können den Kontakt nicht aufnehmen","the_campaign_is_already_closed":"Die Kampagne ist bereits geschlossen","you_can_chat_after_publishing_the_campaign":"Nach der veröffentlichung können Sie eine Unterhaltung starten",".":".","individual":"Individuel","change_stripe_api_keys":"Stripe API Keys ändern","fundraise_with_a_specific_date":"Spendensammlung mit festem Datum","todays":"Heutige","yesterdays":"Gestrige","last_seven_days":"letzten 7 Tage","this_years":"Diesjährige","last_years":"Letztes Jahr","this_months":"Diesen Monat","last_months":"Letzten Monat","between":"Zwischen","campaign_videos__":"Jetzt wird es Zeit für die Videogalerie","campaign_videos":"Kampagnenvideos","invalid_video_url__":"Ungültige video URL. Bitte geben Sie eine gültige youtube oder Vimeo video URL ein","this_video_url_already_added":"Dieses Video wurde bereits hinzugfeügt","enter_your_video_url_here":"Hier Vimeo oder Youtube video URL einfügen","_________00_00_0000__________":"--------------00 00 0000-----------------","about_aamarpay":"Über AAMARPAY","aamarpay_credentials":"Aamarpay Daten","change_aamarpay_credentials":"Ändere Aamarpay Daten","required_for_aamarpay_payment":"Benötigt für Aamarpay Zahlungen","checking_availability":"Teste verfügbarkeit","available":"Verfügbar","not_available":"Nicht verfügbar","selected_offer":"Ausgewählte Belohnung","customer_details":"Kundeninformation","offer_details":"Belohnungsinformationen","fee":"Gebühren","organization_fee":"Organisationsgebühren","payment_gateway_fee":"Zahlungs gateway gebühren","goto_dashboard":"Gehe zu Dashboard","public_preview":"Öffentliche Vorschau","your_campaign_was_successfully":"Ihre Kampagne war erfolgreich","create_another":"Kreeiren Sie eine andere","do_you_want_to_resize":"Größe ändern?","you_are_trying_to_upload_an_image_of_gif__":"Sie wollen ein .gif Format hochladen. Bei änderung der Größe würde die Animation verloren gehen","i_want_to_resize":"Ich möchte die Größe verändern","resize":"Größe ändern","upload_without_resize":"Ohne Größenänderung hochladen","campaign_gallery_title":"Kampagnengalerie","you_have_to_upgrade_your_plan__":"Dafür müssen Sie Ihren Plan hochstufen","oops":"Oops","ok":"Ok","you_may_upload_max":"Das maximum an uploads beträgt","items_in_campaign_gallery":"Bilder in der Galerie","you_can_create_max":"Das Sie können maximal","reward_under_a_campaign":"Belohnungen in die Kampagne einfügen","login_":"Crowdfundly | Login","registration_":"Crowdfundly | Registrieren","verify":"Verifizieren","successfully_team_account_added":"Teamkonto erfolgreich hinzugefügt","subscription_expired":"Abonnement ausgelaufen","your_subscription_is_expired__":"Das Abonnement ist aufgelaufen, Sie müssen","_your_plan":"Ihren Plan","renew_subscription":"Abonemment erneuern","view_invoice":"Rechnung anzeigen","upload_more":"Mehr hochladen","you_have_already_endorsed_this_campaign":"Diese Kampagne haben Sie bereits befürwortet","error":"Fehler","you_want_to_cancel_the_subscription":"Sie wollen Ihr Abonnement abbrechen","successfully_team_account_deleted":"Teamkonto erfolgreich gelöscht","custom_domain":"Eigene Domain","settings_custom_domain":"Einstellungen / Eigene Domain","in_order_to_use_domain_subdomain_you_need_to__":"Um eine Domain / Subdomain verwenden zu können, müssen Sie in den DNS-Einstellungen der Domain CNAME-Einträge vornehmen.","add_your":"Fügen Sie hinzu","hostname":"hostname","is_an_alias_of":"ist ein Alias von","campaign_not_published_yet":"Kampagne noch nicht veröffentlicht!","lifetime_subscription":"Lebenslanges Angebot","all_ltd_coupons":"Alle LTD Lizensen","no_coupon_found":"Kein Coupon gefunden!","purchase_date":"Kaufdatum","redeem_at":"Eingefordert am","coupon_status":"Coupon Status","redeem_ltd_coupon":"LTD Coupon einfordern","redeem_your_ltd_coupon":"Fordern Sie Ihren LTD Coupon ein","recurring_donation":"Wiederkehrende Spende","one_time_purchase_of":"Einmalzahlung von","lifetime_packages":"Lebenslange Angebote","ltd_coupon_code_here":"LTD Coupon code hier eingeben","redeem_now":"Jetzt einfordern","list_of_subscriptions":"Liste der Abonnements","subscription_not_found":"Abonnement nicht gefunden","plan_name":"Name des Plans","subscribed_at":"Aboniert am","add_new_org":"Neue Org. hinzufügren","quantity":"Menge","cart_information":"Einkaufswagen","payment_information":"Zahlungsinformationen","subtotal":"Insgesamt","coupon_discount":"Rabatt","add_new_organization":"Neue Organisation hinzufügen","use_and_add_new_organization":"Nutzen und neue Organisation hinzufügen","transfer_to_other":"Übertragen auf andere","upgrade_subscription":"Abonnement hochstufen","grand_total":"Insgesamt","get_plan":"Plände einsehen","get_pricing":"Preise einsehen","custom_price":"Eigener Preis","select_currency":"Währung wählen","successfully_campaign_published":"Kampagne erfolgreich veröffentlicht","successfully_campaign_updated":"Kampagne erfolgreich aktualisiert","ltd_packages":"LTD Pakete","metered_packages":"Metered Pakete","you_can_not_upgrade_or_change_your_ltd_package":"Sie können Ihr LTD Paket nicht hochstufen oder ändern","you_currently_using_this_ltd_package":"Sie benutzen dieses LTD Paket gerade","add_to_cart":"Zum Einkaufswagen hinzufügren","in_cart":"im Einkaufwagen","payment_details":"Zahlungsinformationen","we_will_charge_50_cent__":"Wir berechnen 50 cent ($0.50) für das Abschließen des Abonnements.","please_select_a_package":"Paket auswählen","back_to_home":"Zurück","app_key":"App key","label":"Ettikett","no_app_key_found":"Kein App Key gefunden","generate_new_app_key":"Generiere neuen App Key","generate_app_key":"Generie App Key","write_app_key_label":"App key Ettikett beschreiben","generate":"Generiere","successfully_new_key_generated":"Neuer Key generiert","yes_continue":"Ja, weiter","password_must_be_a_minimum_of_6_characters":"Passwort muss mindestens 6 Zeichen lang sein.","generated_successfully":"Erfolgreich generiert!","your_payment_should_be_completed_and_the__":"Ihre Zahlung sollte abgeschlossen sein und die Lizenz wird erworben. Sie werden nach der Bestätigung benachrichtigt","transfer_coupon":"Coupon übertragen","i_acknowledge_that_i_eagerly_want_to_transfer__":"Ich bestätige, dass ich diesen Coupon gerne auf einen anderen Benutzer übertragen möchte.","you_have_to_acknowledge_that_you_eagerly_want__":"Sie müssen bestätigen, dass Sie diesen Coupon gerne an einen anderen Benutzer übertragen möchten.","i_acknowledge":"Ich bestätige","loading_packages":"Lade Pakete","checking_current_subscription_type":"Überprüfe derzeitiges Abonnement","refund":"Rückzahlung","page_not_found":"Seite nicht gefunden","max_200_characters":"max 200 Zeichen","successfully_used_and_subscribed":"Erfolgreich genutzt und abonniert!","license_successfully_transferred_to":"Erfolgreiche Übertragung der Linzenz auf","could_not_complete_your_payment":"Zahlung konnte nicht durchgeführt werden","your_payment_should_be_completed_and__":"Ihre Zahlung sollte durchgeführt und die Lizenz erworben werden. Sie erhalten eine Bestätgigung","starting_at":"Startet am","upcoming":"Als nächstes","24_7_support":"24/7 Support","support":"Support","limited":"Limitiert","regular":"Gewöhnlich","priority":"Priorisiert","free_forever":"Frei für immer","paid_monthly":"Zahle monatlich","mo":"mo","choose_your_exclusive_lifetime_deal":"Wählen Sie Ihr exklusives LEBENSLANGES Angebot 🎁","licences":"Lizens(en)","view_pay_per_use_policy":"Zahlen-bei-Nutzen-Regelung anzeigen","ownership_of_individual_licenses_transferable":"Das Eigentum an einzelnen Lizenzen ist übertragbar.","explore_more":"Erkunden Sie mehr.","unused":"unbenutzt","unredeemed":"nicht eingefordert","selected_plan_id":"Gewählte Plan ID","all_ltd_licenses":"Alle LTD Lizenzen","no_license_found":"Keine Lizenzgefunden","license_id":"Lizenz ID","used_at":"Benutzt am","license_status":"Lizenz Status","transfer_license":"Lizenz übertragen","you_can_not_change_the_currency_after_the_organization_is_created":"Sie können die Währung nicht ändern nachdem die Organisation erstellt wurde.","never":"Niemals","ltd_license_is_not_upgradable__":"LTD Lizenz kann nicht aufgestuft werden. Aber trotzdem können Sie eine weitere Lizenz erwerben.","please_add_denial_note":"Ablehnungsnotiz hinzufügen","no_payout_method_found":"Keine Auszahlungsmethode gefunden!","upgrade_now":"Jetzt aufstufen","a_charge_may_apply_based_on_usage__":"Es kann eine Gebühr anfallen, die sich nach dem Verbrauch am Ende Ihres Abrechnungszeitraums richtet.","check_usage_pricing":"Nutzungspreise prüfen","image_watermark":"Wasserzeichen","donation_refund":"Spendenrückzahlung","donation_tips":"Spendentrinkgeld","branded_company_name":"Markenname","set_remainder":"Erinnerung setzen","insight_data":"Daten einsehen","real_time_chat":"Echtzeit Unterhaltung","system_commission":"Systemkommision","tip_preset":"Tringeldvoreinstellung","post_updates":"Aktualisierung veröffentlichen","custom_thank_you_message":"Eigene Dankesnachricht erstellen","donation_preset":"Spendenvoreinstellung","offline_donations":"Offline Spenden","custom_campaign_flyer":"Eigener Kampagnenflyer","smart_notification":"Smarte Benachrichtigung","anonymous_donation":"Anonyme Spende","guest_donations":"Gäste Spenden","donation_on_behalf_of":"Spende im Auftrag von","social_sharing":"Teilen","multi_currency":"Mulit Währungen","slack_notification":"Slack-Benachrichtigung","crowdfundly_pricing":"Crowdfundly Preisliste","super_flexible_and_affordable_price_plan":"Super Flexibler & erschwingliche Preisgestaltung ","start_any_plan_for_free__":"Starten Sie jeden Plan UMSONST. Wir bieten eine verbrauchsabhängige Abrechnung nach Nutzung.","how_much_you_can_raise_per_month":"Wie viel können Sie pro Monat auftreiben?","usd_or_equivalent":"USD oder ähnliches","sign_up_now":"Jetzt registrieren","paid_monthly_usd":"Monatlich gezahlt (USD)","per_donation":"pro Spende","how_to_manage_campaign":"Wie man Kampagnen verwaltet","create_reward_based_campaign":"Belohnungsbasierte Kampagne erstellen","create_donation_based_campaign":"Spendenbasierte Kampagne erstellen","how_to_check_online_contributions":"So prüfen Sie Online-Unterstützungen","how_to_check_offline_contributions":"So prüfen Sie Offline-Unterstützungen","how_to_add_offline_contributions":"So fügen Sie Offline-Unterstützungen hinzu","how_to_create_and_manage_team_members":"Wie man Teammitglieder hinzufügt und verwaltet","how_to_create_and_manage_roles":"So erstellen und verwalten Sie Rollen","how_to_configure_organization_basic_information":"Wie Sie die Basisinformationen der Organisation konfigurieren","how_to_configure_stripe":"Wie man Stripe konfiguriert","how_to_configure_paypal":"Wie man PayPal konfiguriert","how_to_set_commission":"So stellen Sie die Provision ein","how_to_configure_campaign_verification_process":"So konfigurieren Sie den Prozess der Kampagnenüberprüfung","how_to_enable_and_set_escrow_duration":"Aktivieren und Einstellen der Treuhanddauer","how_to_configure_refund_settings":"So konfigurieren Sie die Rückerstattungseinstellungen","use_existing_licence":"Vorhandene Lizenz verwenden","create_org_under_unused_subscription":"Org unter unbenutztem Abonnement anlegen","manage_campaigns":"Kampagnen verwalten","your_next_billing_date":"Ihr nächstes Rechungsdatum ","campaign_s":"Kampagnen","contribution_s":"Unterstützer","share_s":"Teilungen","team_member_already_exists":"Teammitglied existiert bereits.","image_size_too_large":"Die Bildgröße ist zu groß, bitte geben Sie ein kleineres Bild an","and":"Und","max_files":"Max Dateien","organization_updated":"Organisation aktualisiert.","multiple_selection_not_supported_please_select_single_file":"Mehrfachauswahl nicht unterstützt, bitte einzelne Datei auswählen.","gif_file_not_supported_here__":"GIF-Datei wird hier nicht unterstützt, bitte wählen Sie ein anderes Bildformat.","gallery_image_uploaded":"Galeriebild hochgeladen.","build_a_platform_that_you_can_be_proud_of":"Bauen Sie eine Plattform auf, auf die Sie stolz sein können","early_access_users_only":"Nur für Early-Access-Benutzer","we_greatly_appreciate_your_participation":"Wir schätzen Ihre Teilnahme sehr.","do_not_have_an_account":"Noch kein Konto?","hey_create_your_organization_first":"Hey, 👋 Erstellen Sie erst Ihre Organisation.","didn_t_contribute_any_campaign_yet":"didn\'t contribute to any campaign yet","you":"Sie","me":"mir","contributed_so_far":"hat bisher dazu beigetragen","i_have":"ich habe","examples_of_some_activities_that_may_considered_as_fraudulent":"Beispiele für einige Aktivitäten, die als betrügerisch angesehen werden können.","breaking_the_rules":"Die Regeln brechen.","lying_about_the_benefactor_of_the_publicity__":"Über den Wohltäter der Werbung lügen und die Identität einer Person falsch darstellen.","posted_with_misleading_statements_in_the_campaign":"Gepostet mit irreführenden Aussagen in der Kampagne.","does_not_send_timely_funding_to_the_stated_beneficiary_etc":"Sendet keine rechtzeitige Finanzierung an den angegebenen Begünstigten usw.","select_a_Plan":"Wählen Sie einen Plan","by_creating_an_account":"Durch das Erstellen eines Kontos","i_accept_the":"Ich akzeptiere das","terms":"Begriffe","privacy":"Privatsphäre","conditions":"Bedingungen","remove_payment_method":"Zahlungsmethode trennen","got_it":"Verstanden","other_information":"Andere Informationen","additional_information":"zusätzliche Information","add_new_field":"Neues Feld hinzufügen","section_title":"Abschnittsüberschrift","enter_section_title":"Geben Sie den Abschnittstitel ein","donation_campaign":"Spendenaktion","reward_campaign":"Belohnungskampagne","how_to_create_category":"So erstellen Sie eine Kategorie","create_campaign_category":"Kampagnenkategorie erstellen","categories":"Kategorie","category_icon_placeholder":"Ex: fas fa-user","no_category_found":"Keine Kategorie gefunden","add_category":"Kategorie hinzufügen","enter_category_name":"Geben Sie den Kategorienamen ein","successfully_category_added":"erfolgreich Kategorie hinzugefügt","successfully_category_deleted":"erfolgreich Kategorie gelöscht","successfully_category_updated":"Kategorie erfolgreich aktualisiert","update_category":"Kategorie aktualisieren","here_you_can_use_the":"Du kannst es benutzen","icons":"Econes","click_here":"Klicken Sie hier","to_see_the_list_of_icon":"Das ist also eine Liste von Symbolen","consent":"Zustimmung","this_organization_subscription_is_expired":"Dieses Organisationsabonnement 2 läuft ab.","show_similar_campaigns":"Ähnliche Kampagnen anzeigen.","show_similar_campaigns_during_contribution":"Ähnliche Kampagnen während des Beitrags anzeigen.","user_not_found":"Benutzer wurde nicht gefunden","allow_public_fundrise_for_campaign":"Öffentliche Spendenaktion für Kampagne zulassen","allow_public_fundrise":"öffentlichen Fundrise erlauben","if_you_want_upgrade_your_plan_you_have_to_go":"Wenn Sie Ihren Plan aktualisieren möchten, müssen Sie gehen","your_email_is_not_verified":"Ihre E-Mail wird nicht verifiziert!","if_you_have_not_received_a_link_yet_click_here":"Wenn Sie noch keinen Link erhalten haben, klicken Sie hier"}}')
    }, , , , , , , , , , , , function(e, t, o) {
        var content = o(294);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("3191d5ad", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(316);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("1b8a25f1", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(318);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("7b7c6726", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(320);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("bcbe2f72", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(322);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("932a8f60", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(356);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("7f1128e0", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(358);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("6a2aa4bb", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(360);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("1b9f5710", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(366);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("48abbc2c", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
        var content = o(375);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("1065d7be", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return n
        }));
        var n = 2
    }, function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return n
        }));
        var n = [];
        n = [{
            name: "English",
            code: "en",
            flag: "https://app.crowdfundly.io/images/flag/america.svg"
        }, {
            name: "German",
            code: "de",
            flag: "https://app.crowdfundly.io/images/flag/germany.svg"
        }]
    }, , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o(3), o(73), o(6), o(5), o(29), o(32);
        var n = o(4),
            r = o.n(n),
            d = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            },
            l = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            c = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var t = e.intersectionRatio,
                        link = e.target;
                    t <= 0 || link.__prefetch()
                }))
            }));
        t.a = {
            name: "NuxtLink",
            extends: r.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = d(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                l(this.handleId), this.__observed && (c.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    c && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), c.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    })).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        c.unobserve(this.$el);
                        var e = this.getPrefetchComponents(),
                            t = !0,
                            o = !1,
                            n = void 0;
                        try {
                            for (var r, d = e[Symbol.iterator](); !(t = (r = d.next()).done); t = !0) {
                                var l = r.value,
                                    m = l();
                                m instanceof Promise && m.catch((function() {})), l.__prefetched = !0
                            }
                        } catch (e) {
                            o = !0, n = e
                        } finally {
                            try {
                                t || null == d.return || d.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                    }
                }
            }
        }
    }, function(e, t, o) {
        "use strict";
        o(16), o(51), o(19);
        var n = o(17),
            r = o(22),
            d = [{
                name: "rml-list",
                method: "get",
                path: "/acl/role-module-permission-list"
            }, {
                name: "abilities-of-role",
                method: "get",
                path: "/acl/role-abilities/{id}"
            }, {
                name: "sync-roles",
                method: "post",
                path: "/acl/sync-abilities/{id}"
            }, {
                name: "auth-user-abilities",
                method: "get",
                path: "/acl/auth-user-abilities"
            }, {
                name: "create-campaign-type",
                method: "post",
                path: "/campaign-types"
            }, {
                name: "campaign-type-list",
                method: "get",
                path: "/campaign-types"
            }, {
                name: "fetch-campaign-type",
                method: "get",
                path: "/campaign-types/{id}/edit"
            }, {
                name: "update-campaign-type",
                method: "post",
                path: "/update-campaign-types/{id}"
            }, {
                name: "delete-campaign-type",
                method: "delete",
                path: "/campaign-types/{id}"
            }, {
                name: "reject-campaign",
                method: "post",
                path: "/campaigns/reject"
            }, {
                name: "reject-campaign-status",
                method: "put",
                path: "/campaigns/{slug}/reject"
            }, {
                name: "get-campaign-by-slug",
                method: "get",
                path: "/campaigns/{slug}"
            }, {
                name: "all-campaigns",
                method: "get",
                path: "/campaigns"
            }, {
                name: "auth-org-campaigns",
                method: "get",
                path: "/auth-org-campaigns"
            }, {
                name: "get-users-by-role",
                method: "get",
                path: "/users/role/{id}"
            }, {
                name: "request-campaign-verification",
                method: "post",
                path: "/campaigns/request-verification"
            }, {
                name: "assigned-campaigns-for-lawyer-verification",
                method: "get",
                path: "/lawyer/assigned"
            }, {
                name: "assigned-campaigns-for-volunteer-verification",
                method: "get",
                path: "/volunteer/assigned"
            }, {
                name: "accept-case",
                method: "post",
                path: "/accept-case"
            }, {
                name: "reject-case",
                method: "post",
                path: "/reject-case"
            }, {
                name: "mark-verified-for-approval",
                method: "post",
                path: "/mark-verified"
            }, {
                name: "register",
                method: "post",
                path: "/auth/register"
            }, {
                name: "resend-verification-email",
                method: "get",
                path: "/auth/verify/resend"
            }, {
                name: "upload-media",
                method: "post",
                path: "/media/upload-image"
            }, {
                name: "campaign-updates",
                method: "get",
                path: "/campaigns/{id}/updates"
            }, {
                name: "delete-campaign-update",
                method: "delete",
                path: "/campaigns/updates/{id}"
            }, {
                name: "create-campaign-update",
                method: "post",
                path: "/campaigns/updates"
            }, {
                name: "get-campaign-fundriasers",
                method: "get",
                path: "/campaigns/{id}/fundraisers"
            }, {
                name: "add-co-fundraisers",
                method: "post",
                path: "/campaigns/fundraisers"
            }, {
                name: "remove-fundraiser",
                method: "delete",
                path: "/campaigns/{id}/fundraisers"
            }, {
                name: "donate",
                method: "post",
                path: "/donate"
            }, {
                name: "get-auth-campaign",
                method: "get",
                path: "/auth/campaigns/{slug}"
            }, {
                name: "get-fundraiser-campaign",
                method: "get",
                path: "/fundraiser/campaigns/{slug}"
            }, {
                name: "create-campaign",
                method: "post",
                path: "/campaigns"
            }, {
                name: "get-campaign-suggestions",
                method: "get",
                path: "/campaign-suggestions"
            }, {
                name: "update-campaign",
                method: "put",
                path: "/campaigns/{slug}"
            }, {
                name: "delete-campaign-media",
                method: "delete",
                path: "/campaigns/{slug}/media/{id}"
            }, {
                name: "delete-campaign-video",
                method: "delete",
                path: "/campaigns/{slug}/video/{id}"
            }, {
                name: "relationships",
                method: "delete",
                path: "/relationships"
            }, {
                name: "campaign-activities",
                method: "get",
                path: "/campaigns/{id}/activities"
            }, {
                name: "campaign-donations",
                method: "get",
                path: "/campaigns/{id}/donations"
            }, {
                name: "campaign-donation-presets",
                method: "get",
                path: "/campaigns/{id}/presets"
            }, {
                name: "find-user-by-email",
                method: "get",
                path: "/public/find-user-by-email/{id}"
            }, {
                name: "create-campaign-offline-donation",
                method: "post",
                path: "/campaigns/{slug}/offline-donations"
            }, {
                name: "get-public-campaigns",
                method: "get",
                path: "/campaigns/public"
            }, {
                name: "campaign-thank-you",
                method: "get",
                path: "/campaigns/{id}/thank-you"
            }, {
                name: "campaign-offline-donations",
                method: "get",
                path: "/campaigns/{slug}/offline-donations"
            }, {
                name: "offline-donations",
                method: "get",
                path: "/offline-donations"
            }, {
                name: "approve-campaign",
                method: "post",
                path: "/campaigns/{id}/approve"
            }, {
                name: "campaign-top-donors",
                method: "get",
                path: "/campaigns/{id}/top-donors"
            }, {
                name: "create-new-endorsement",
                method: "post",
                path: "/campaigns/endorsements"
            }, {
                name: "campaigns-endorsements",
                method: "get",
                path: "/campaigns/{id}/endorsements"
            }, {
                name: "approve-campaigns-endorsements",
                method: "patch",
                path: "/campaigns/endorsements/edit"
            }, {
                name: "get-application-settings",
                method: "get",
                path: "/application-settings"
            }, {
                name: "get-default-presets",
                method: "get",
                path: "/campaigns/default-presets"
            }, {
                name: "create-default-presets",
                method: "put",
                path: "/campaigns/default-presets"
            }, {
                name: "save-default-presets",
                method: "put",
                path: "/campaigns/default-presets/{id}"
            }, {
                name: "delete-default-preset",
                method: "delete",
                path: "/campaigns/default-presets/{id}"
            }, {
                name: "create-donation-preset",
                method: "post",
                path: "/campaigns/presets"
            }, {
                name: "update-donation-preset",
                method: "put",
                path: "/campaigns/presets/{id}"
            }, {
                name: "delete-donation-preset",
                method: "delete",
                path: "/campaigns/presets/{id}"
            }, {
                name: "create-new-lawyer",
                method: "post",
                path: "/lawyers"
            }, {
                name: "create-new-staff",
                method: "post",
                path: "/staffs"
            }, {
                name: "get-lawyers",
                method: "get",
                path: "/lawyers"
            }, {
                name: "get-volunteers",
                method: "get",
                path: "/volunteers"
            }, {
                name: "get-staffs",
                method: "get",
                path: "/staffs"
            }, {
                name: "get-staff-assignable-users",
                method: "get",
                path: "/staffs/assignable"
            }, {
                name: "change-user-to-lawyer",
                method: "put",
                path: "/users/change-to-lawyer"
            }, {
                name: "assign-existing-user-as-staff",
                method: "put",
                path: "/staffs/assign"
            }, {
                name: "get-skills",
                method: "get",
                path: "/skills"
            }, {
                name: "store-skill",
                method: "post",
                path: "/skills"
            }, {
                name: "update-skill",
                method: "put",
                path: "/skills/{id}"
            }, {
                name: "delete-skill",
                method: "delete",
                path: "/skills/{id}"
            }, {
                name: "update-lawyer-status",
                method: "put",
                path: "/lawyers/update-status"
            }, {
                name: "provide-case-opinion",
                method: "post",
                path: "/case-opinions"
            }, {
                name: "all-donations",
                method: "get",
                path: "/donations"
            }, {
                name: "auth-org-donations",
                method: "get",
                path: "/auth-org-donations"
            }, {
                name: "auth-org-offline-donations",
                method: "get",
                path: "/auth-org-offline-donations"
            }, {
                name: "organization-stats",
                method: "get",
                path: "/organization/stats"
            }, {
                name: "organization-growth-stats",
                method: "get",
                path: "/organization/growth-stats"
            }, {
                name: "organization-payout-stats",
                method: "get",
                path: "/organization/payout-stats"
            }, {
                name: "organization-contribution-stats",
                method: "get",
                path: "/organization/contribution-stats"
            }, {
                name: "organization-revenue-stats",
                method: "get",
                path: "/organization/revenue-stats"
            }, {
                name: "organization-active-campaigns",
                method: "get",
                path: "/organizations/{username}/active-campaigns"
            }, {
                name: "all-payouts",
                method: "get",
                path: "/payouts"
            }, {
                name: "all-donors",
                method: "get",
                path: "/donors"
            }, {
                name: "get-case-opinions",
                method: "get",
                path: "/verifications/{id}/case-opinions"
            }, {
                name: "get-user-donations",
                method: "get",
                path: "/public/user/{id}/donations"
            }, {
                name: "get-random-donations",
                method: "get",
                path: "/public/random/donations"
            }, {
                name: "update-campaign-story-page",
                method: "put",
                path: "/campaigns/{slug}/story-page"
            }, {
                name: "update-campaign-media-page",
                method: "put",
                path: "/campaigns/{slug}/media-page"
            }, {
                name: "update-campaign-media",
                method: "put",
                path: "/campaigns/{slug}/media"
            }, {
                name: "create-campaign-video",
                method: "post",
                path: "/campaigns/{slug}/video"
            }, {
                name: "update-campaign-video",
                method: "put",
                path: "/campaigns/{slug}/video/{id}"
            }, {
                name: "update-campaign-recipient-page",
                method: "put",
                path: "/campaigns/{slug}/recipient-page"
            }, {
                name: "submit-campaign-for-approval",
                method: "put",
                path: "/campaigns/{slug}/submit-for-approval"
            }, {
                name: "update-campaign-flyer-summary",
                method: "put",
                path: "/campaigns/{slug}/update-flyer-summary"
            }, {
                name: "store-user-campaign-share",
                method: "post",
                path: "/auth/share/{provider}/campaigns/{slug}"
            }, {
                name: "fetch-invitation",
                method: "get",
                path: "/campaigns/invitations/{id}"
            }, {
                name: "accept-invitation",
                method: "post",
                path: "/campaigns/accept-invitation"
            }, {
                name: "fetch-campaign-messages",
                method: "get",
                path: "/conversations/{id}"
            }, {
                name: "send-message-to-campaign-conversations",
                method: "post",
                path: "/conversations/{id}"
            }, {
                name: "browse-campaigns",
                method: "get",
                path: "/campaigns/browse"
            }, {
                name: "get-campaign-chat-presets",
                method: "get",
                path: "/campaigns/{id}/presets"
            }, {
                name: "update-featured-campaign",
                method: "post",
                path: "/featured-campaign-update"
            }, {
                name: "get-campaigns-of-user",
                method: "get",
                path: "/public/campaigns-of/{id}"
            }, {
                name: "get-available-lawyers",
                method: "get",
                path: "/available-lawyers/{id}"
            }, {
                name: "campaign-type-list",
                method: "get",
                path: "/campaign-types"
            }, {
                name: "badges",
                method: "get",
                path: "/badges"
            }, {
                name: "ranks",
                method: "get",
                path: "/ranks"
            }, {
                name: "reject-accepted-case",
                method: "post",
                path: "/reject-accepted-case"
            }, {
                name: "set-donation-reminder",
                method: "post",
                path: "/donation-reminders"
            }, {
                name: "get-home-banner-data",
                method: "get",
                path: "/home-banner"
            }, {
                name: "store-home-banner-data",
                method: "post",
                path: "/home-banner-store"
            }, {
                name: "update-home-banner-data",
                method: "post",
                path: "/home-banner-update"
            }, {
                name: "featured-brands",
                method: "get",
                path: "/featured-brands"
            }, {
                name: "store-featured-brand",
                method: "post",
                path: "/featured-brand-store"
            }, {
                name: "delete-featured-brand",
                method: "delete",
                path: "/featured-brand/{id}"
            }, {
                name: "get-featured-campaign",
                method: "get",
                path: "/featured-campaign"
            }, {
                name: "create-chat-preset",
                method: "post",
                path: "/chat-presets"
            }, {
                name: "get-chat-presets",
                method: "get",
                path: "/campaigns/{slug}/chat-presets"
            }, {
                name: "save-chat-preset",
                method: "put",
                path: "/chat-presets/{id}"
            }, {
                name: "delete-chat-preset",
                method: "delete",
                path: "/chat-presets/{id}"
            }, {
                name: "public-search-by-name",
                method: "get",
                path: "/public/search-by-name"
            }, {
                name: "send-fundraiser-contact-request",
                method: "post",
                path: "/contact-fundraiser"
            }, {
                name: "delete-campaign",
                method: "put",
                path: "/campaigns/{slug}/delete"
            }, {
                name: "report-campaign",
                method: "post",
                path: "/reports"
            }, {
                name: "org-all-reports",
                method: "get",
                path: "/org-reports"
            }, {
                name: "campaign-admin-verification-status",
                method: "put",
                path: "/campaigns/{slug}/admin-verification-status"
            }, {
                name: "get-users",
                method: "get",
                path: "/users"
            }, {
                name: "change-user-status",
                method: "put",
                path: "/users/{id}/status"
            }, {
                name: "get-application-settings",
                method: "get",
                path: "/application-settings"
            }, {
                name: "save-application-settings",
                method: "put",
                path: "/application-settings"
            }, {
                name: "fetch-campaign-chat-presets",
                method: "get",
                path: "/chat-presets-of/{id}"
            }, {
                name: "fetch-global-tip-percentage",
                method: "get",
                path: "/application-settings"
            }, {
                name: "preaccept-campaign",
                method: "put",
                path: "/campaigns/{slug}/accept"
            }, {
                name: "deny-preacceptance",
                method: "put",
                path: "/campaigns/{slug}/reject"
            }, {
                name: "publish-campaign",
                method: "put",
                path: "/campaigns/{slug}/publish"
            }, {
                name: "all-conversation",
                method: "get",
                path: "/campaigns/conversations"
            }, {
                name: "fetch-campaign-private-messages",
                method: "get",
                path: "/campaigns/{id}/conversations"
            }, {
                name: "send-message-to-campaign-private-conversation",
                method: "post",
                path: "/campaigns/conversations/{id}"
            }, {
                name: "update-ads-section-description",
                method: "put",
                path: "/update-ads-section-description"
            }, {
                name: "auth-donations",
                method: "get",
                path: "/auth/donations"
            }, {
                name: "make-refund-request",
                method: "post",
                path: "/refund-requests"
            }, {
                name: "get-all-refunds",
                method: "get",
                path: "/refunds"
            }, {
                name: "get-auth-org-refunds",
                method: "get",
                path: "/auth-org-refunds"
            }, {
                name: "approve-refund-request",
                method: "post",
                path: "/approve-refund-request"
            }, {
                name: "refund-donation",
                method: "post",
                path: "/refund-donation"
            }, {
                name: "decline-refund-request",
                method: "post",
                path: "/decline-refund-request"
            }, {
                name: "update-refund-acceptance",
                method: "put",
                path: "/update-refund-acceptance"
            }, {
                name: "auth-refunds",
                method: "get",
                path: "/auth/refunds"
            }, {
                name: "create-new-conversation",
                method: "post",
                path: "/campaigns/conversations"
            }, {
                name: "suspend-campaign",
                method: "post",
                path: "/campaigns/{id}/suspend"
            }, {
                name: "cancel-campaign",
                method: "post",
                path: "/campaigns/{id}/cancel"
            }, {
                name: "authenticate-with-facebook",
                method: "get",
                path: "/facebook/authenticate"
            }, {
                name: "campaign-ads-settings",
                method: "get",
                path: "/campaigns/{slug}/ads-settings"
            }, {
                name: "campaign-allow-promotion-update",
                method: "put",
                path: "/campaigns/{slug}/allow-promotion"
            }, {
                name: "campaign-donations",
                method: "get",
                path: "/campaigns/{slug}/donations"
            }, {
                name: "accept-suspension-request",
                method: "post",
                path: "/accept-suspension-request/{id}"
            }, {
                name: "reject-suspension-request",
                method: "post",
                path: "/reject-suspension-request/{id}"
            }, {
                name: "request-for-suspension",
                method: "post",
                path: "/request-suspension"
            }, {
                name: "suspension-requests",
                method: "get",
                path: "/suspension-requests"
            }, {
                name: "campaign-stats",
                method: "get",
                path: "/campaigns/{slug}/stats"
            }, {
                name: "stats",
                method: "get",
                path: "/stats"
            }, {
                name: "update-campaign-types-orders",
                method: "post",
                path: "/campaign-types-order"
            }, {
                name: "get-members",
                method: "get",
                path: "/members"
            }, {
                name: "create-member",
                method: "post",
                path: "/member-store"
            }, {
                name: "update-member",
                method: "post",
                path: "/member-update/{id}"
            }, {
                name: "delete-member",
                method: "delete",
                path: "/member-delete/{id}"
            }, {
                name: "draft-campaign",
                method: "put",
                path: "/campaigns/{slug}/draft"
            }, {
                name: "subscribe",
                method: "post",
                path: "/payments/subscribe"
            }, {
                name: "subscribe-default",
                method: "post",
                path: "/subscribe"
            }, {
                name: "verify-coupon",
                method: "get",
                path: "/payments/appsumo/coupons"
            }, {
                name: "signup-using-appsumo",
                method: "post",
                path: "/payments/subscribe-via-appsumo"
            }, {
                name: "create-organization",
                method: "post",
                path: "/organizations"
            }, {
                name: "get-organization",
                method: "get",
                path: "/organization"
            }, {
                name: "update-organization-basic",
                method: "put",
                path: "/organization/basic"
            }, {
                name: "update-organization-template",
                method: "put",
                path: "/organization/template"
            }, {
                name: "update-organization-media",
                method: "put",
                path: "/organization/media"
            }, {
                name: "delete-organization-media-item",
                method: "delete",
                path: "/organization/media/{id}"
            }, {
                name: "update-organization-others",
                method: "put",
                path: "/organization/others"
            }, {
                name: "organization-public-profile",
                method: "get",
                path: "/organizations/{username}"
            }, {
                name: "org-user-can",
                method: "get",
                path: "/acl/organization/{username}/{key}"
            }, {
                name: "connect-with-stripe",
                method: "post",
                path: "/payments/connect-with-stripe"
            }, {
                name: "charge-via-connect",
                method: "post",
                path: "/payments/charge-via-connect"
            }, {
                name: "fetch-org-stripe-connect-id",
                method: "get",
                path: "/get-org-stripe-account/{orgId}"
            }, {
                name: "update-message-to-donor",
                method: "put",
                path: "/campaigns/{slug}/update-message-to-donor"
            }, {
                name: "social-networks",
                method: "get",
                path: "/social-networks"
            }, {
                name: "team-users",
                method: "get",
                path: "/acl/team/users"
            }, {
                name: "team-modules",
                method: "get",
                path: "/acl/team/modules"
            }, {
                name: "team-roles",
                method: "get",
                path: "/acl/team/roles/"
            }, {
                name: "organization-pages",
                method: "get",
                path: "/organizations/{username}/pages"
            }, {
                name: "organization-contents",
                method: "put",
                path: "/organization-contents"
            }, {
                name: "assign-team-user",
                method: "post",
                path: "/acl/team/users"
            }, {
                name: "update-team-user",
                method: "post",
                path: "/acl/team/users/{id}"
            }, {
                name: "delete-team-user",
                method: "post",
                path: "/acl/team/users/{id}"
            }, {
                name: "create-team-role",
                method: "post",
                path: "/acl/team/roles"
            }, {
                name: "update-team-role",
                method: "post",
                path: "/acl/team/roles/{id}"
            }, {
                name: "create-org-category",
                method: "post",
                path: "/organization/categories/"
            }, {
                name: "update-org-category",
                method: "put",
                path: "/organization/categories/{id}"
            }, {
                name: "delete-org-category",
                method: "delete",
                path: "/organization/categories/{id}"
            }, {
                name: "org-categories",
                method: "get",
                path: "/organization/categories"
            }, {
                name: "store-payment-information",
                method: "post",
                path: "/payments"
            }, {
                name: "fetch-org-id-by-campaign",
                method: "get",
                path: "/campaigns/{id}/org-account"
            }, {
                name: "fetch-user-subscriptions-data",
                method: "get",
                path: "/auth/subscriptions"
            }, {
                name: "get-organization-settings",
                method: "get",
                path: "/organization/{id}/setting"
            }, {
                name: "get-campaign-organization-settings",
                method: "get",
                path: "/campaigns/{id}/org-setting"
            }, {
                name: "save-organization-settings",
                method: "put",
                path: "/organizations/setting"
            }, {
                name: "save-organization-sslcommerz-settings",
                method: "put",
                path: "/organizations/sslcommerz-setting"
            }, {
                name: "save-organization-paypal-settings",
                method: "put",
                path: "/organizations/paypal-setting"
            }, {
                name: "save-organization-personal-stripe-settings",
                method: "put",
                path: "/organizations/personal-stripe-setting"
            }, {
                name: "update-campaign-page",
                method: "put",
                path: "/campaigns/{slug}/page"
            }, {
                name: "update-campaign-status",
                method: "put",
                path: "/campaigns/{slug}/status"
            }, {
                name: "update-campaign-target-amount-raised-status",
                method: "put",
                path: "/campaigns/{slug}/target-amount-raised"
            }, {
                name: "countries",
                method: "get",
                path: "/countries"
            }, {
                name: "create-offer",
                method: "post",
                path: "/campaign/offers/"
            }, {
                name: "create-mass-offers",
                method: "post",
                path: "/campaigns/{slug}/mass-offers"
            }, {
                name: "update-offer",
                method: "post",
                path: "/campaign/offers/{id}"
            }, {
                name: "delete-offer",
                method: "post",
                path: "/campaign/offers/{id}"
            }, {
                name: "charity-campaign-types",
                method: "get",
                path: "/charity-campaign-types"
            }, {
                name: "business-campaign-types",
                method: "get",
                path: "/business-campaign-types"
            }, {
                name: "campaign-settings",
                method: "get",
                path: "/campaigns/{slug}/settings"
            }, {
                name: "update-campaign-settings",
                method: "put",
                path: "/campaigns/{slug}/settings"
            }, {
                name: "similar-campaigns",
                method: "get",
                path: "/campaigns/{slug}/similar"
            }, {
                name: "delete-organization",
                method: "delete",
                path: "/organizations"
            }, {
                name: "delete-user",
                method: "delete",
                path: "/user"
            }, {
                name: "category-request",
                method: "post",
                path: "/category/requests"
            }, {
                name: "get-org-fundraisers",
                method: "get",
                path: "/acl/team/fundraisers"
            }, {
                name: "request-subscription",
                method: "post",
                path: "/payments/request-subscription"
            }, {
                name: "create-or-update-subscription",
                method: "post",
                path: "/payments/subscribe"
            }, {
                name: "unsubscribe-user",
                method: "post",
                path: "/payments/auth/unsubscribe"
            }, {
                name: "user-stripe-cards",
                method: "get",
                path: "/payments/auth/cards"
            }, {
                name: "update-user-stripe-card",
                method: "post",
                path: "/payments/auth/update-card"
            }, {
                name: "organization-payouts",
                method: "get",
                path: "/wallets/organization/payouts"
            }, {
                name: "fundraiser-payout-methods",
                method: "get",
                path: "/wallets/fundraisers/payout-methods"
            }, {
                name: "request-for-withdraw",
                method: "post",
                path: "/wallets/payouts"
            }, {
                name: "accept-or-deny-payout-request",
                method: "post",
                path: "/wallets/payouts/approval"
            }, {
                name: "mark-payout-as-sent",
                method: "post",
                path: "/wallets/payouts/mark-as-sent"
            }, {
                name: "mark-payout-as-received",
                method: "post",
                path: "/wallets/payouts/mark-as-received/{id}"
            }, {
                name: "view-wallet",
                method: "get",
                path: "/wallets/view"
            }, {
                name: "create-new-payout-method",
                method: "post",
                path: "/wallets/fundraisers/payout-methods"
            }, {
                name: "generate-sslcommerz-session",
                method: "post",
                path: "/sslcomerz/session"
            }, {
                name: "create-payment",
                method: "post",
                path: "/payments/make-payment"
            }, {
                name: "payment-success",
                method: "post",
                path: "/payments/success"
            }, {
                name: "payment-failed",
                method: "get",
                path: "/payments/failed"
            }, {
                name: "org-payment-gateway",
                method: "get",
                path: "/organizations/{id}/available-gateway"
            }, {
                name: "public-packages",
                method: "get",
                path: "/public/packages"
            }, {
                name: "auth-payment-history",
                method: "get",
                path: "/payments/auth/subscription"
            }, {
                name: "update-organization-default-stripe",
                method: "post",
                path: "/organizations/default-stripe"
            }, {
                name: "org-check-username-availability",
                method: "post",
                path: "/organization/{username}/check-username-availability"
            }, {
                name: "save-organization-aamarpay-settings",
                method: "post",
                path: "/organizations/aamarpay-setting"
            }, {
                name: "organization-can-create-campaign",
                method: "get",
                path: "/organizations/{username}/can-create-campaign"
            }, {
                name: "update-organization-cname",
                method: "put",
                path: "/organizations/cname"
            }, {
                name: "fetch-org-subscriptions-data",
                method: "get",
                path: "/payments/organizations/{orgId}/subscription"
            }, {
                name: "fetch-auth-subscriptions",
                method: "get",
                path: "/payments/auth/subscriptions"
            }, {
                name: "fetch-purchase-licence-intent",
                method: "post",
                path: "/purchase-licence-intent"
            }, {
                name: "update-subscription",
                method: "post",
                path: "/payments/update-subscription"
            }, {
                name: "fetch-auth-licences",
                method: "get",
                path: "/licences"
            }, {
                name: "redeem-licence",
                method: "post",
                path: "/redeem-licence"
            }, {
                name: "validate-coupon",
                method: "post",
                path: "/payments/validate-coupon"
            }, {
                name: "unused-subscription",
                method: "get",
                path: "/payments/unused-subscription"
            }, {
                name: "org-generate-token",
                method: "post",
                path: "/wp/generate-token"
            }, {
                name: "org-delete-token",
                method: "delete",
                path: "/wp/tokens/{id}"
            }, {
                name: "org-get-all-tokens",
                method: "get",
                path: "/wp/tokens"
            }, {
                name: "transfer-licence",
                method: "post",
                path: "/transfer-licence"
            }, {
                name: "recent-campaigns",
                method: "get",
                path: "/organizations/{username}/recent-campaigns"
            }, {
                name: "check-lifetime-deal",
                method: "get",
                path: "/check-lifetime-deal"
            }, {
                name: "get-user-help-tour-status",
                method: "get",
                path: "/user-help-tour-status/{page_id}"
            }, {
                name: "create-user-help-tour-status",
                method: "post",
                path: "/create-help-tour-status"
            }, {
                name: "remove-organization-payment-settings",
                method: "put",
                path: "/organizations/remove-payment-setting"
            }, {
                name: "get-public-user",
                method: "get",
                path: "/user/public-info/{username}"
            }];
        o.d(t, "a", (function() {
            return c
        }));
        var l = "https://api.crowdfundly.io/api/v1",
            c = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(r.a)(e, null, [{
                    key: "getRoutes",
                    value: function() {
                        return d
                    }
                }, {
                    key: "route",
                    value: function(e) {
                        var t = this.findRoute(e);
                        if (!t) return console.error("route not found."), null;
                        for (var path = t.path, o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) n[r - 1] = arguments[r];
                        return n.forEach((function(param) {
                            path = path.replace(/{.*?}/, param)
                        })), l + path
                    }
                }, {
                    key: "getRoute",
                    value: function(e) {
                        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                        var r = Object.assign({}, this.findRoute(e));
                        if (!r) return console.error("route not found."), null;
                        var path = r.path,
                            i = 0;
                        if (path) {
                            var d = path.replace(/{.*?}/gi, (function() {
                                if (o[i]) return o[i++]
                            }));
                            return r.path = d, r.absolute_path = l + d, r
                        }
                        return null
                    }
                }, {
                    key: "findRoute",
                    value: function(e) {
                        return this.getRoutes().find((function(t) {
                            return t.name === e
                        })) || null
                    }
                }]), e
            }()
    }, , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        o(351).Socket.Connect()
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            t.a = function(t) {
                var o = t.store;
                e.auth_user = function() {
                    return o.getters.isLoggedIn ? o.getters.authUser : null
                }, e.auth_check = function() {
                    return o.getters.isLoggedIn
                }
            }
        }).call(this, o(34))
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            t.a = function() {
                e.is_valid_email = function(e) {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
                }
            }
        }).call(this, o(34))
    }, function(e, t, o) {
        "use strict";
        (function(e, n) {
            o(15), o(11);
            var r = o(2),
                d = (o(19), o(21), o(73), o(6), o(43)),
                l = (o(106), o(5), o(3), o(7), o(155)),
                c = o(40),
                m = o(239),
                _ = o(4),
                h = o.n(_),
                x = void 0;
            t.a = function(t) {
                var o = t.store;
                e.route = function(e) {
                    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                    return l.a.getRoute.apply(l.a, [e].concat(o))
                }, e.route_url = function(e) {
                    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                    return l.a.route(e, o)
                }, e.route_with_query = function(t) {
                    for (var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), d = 2; d < n; d++) r[d - 2] = arguments[d];
                    var l = route.apply(void 0, [t].concat(r));
                    if (l && o && Object.keys(o).length) {
                        var c = "?" + e.buildQueryParams(o);
                        l.path += c, l.absolute_path += c
                    }
                    return l
                }, e.form_errors_to_array = function(e) {
                    var t = [];
                    if (e.response && e.response.data) {
                        null !== e.response.data.message && t.push(e.response.data.message);
                        var o = e.response.data.errors;
                        for (var n in o) o.hasOwnProperty(n) && o[n].forEach((function(e) {
                            t.push(e)
                        }))
                    }
                    return t
                }, e.dd = function() {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    t.forEach((function(param) {
                        console.error(t)
                    }))
                }, e.getElementTopDistance = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        o = window.pageYOffset + e.getBoundingClientRect().top,
                        n = window.screen.height,
                        r = n * t / 100;
                    return r > o ? o : o - r
                }, e.objectToFormData = function(e) {
                    for (var t = new FormData, o = 0, n = Object.entries(e); o < n.length; o++) {
                        var r = Object(d.a)(n[o], 2),
                            l = r[0],
                            c = r[1];
                        null != c && t.append(l, c)
                    }
                    return t
                }, e.appendFilesToFormData = function(e, t, o) {
                    for (var n = 0, r = Object.entries(t); n < r.length; n++) {
                        var l = Object(d.a)(r[n], 2),
                            c = (l[0], l[1]);
                        e.append("".concat(o, "[]"), c)
                    }
                    return e
                }, e.appendArrayToFormData = function(e, t, o) {
                    e.delete(o);
                    var n = !0,
                        r = !1,
                        d = void 0;
                    try {
                        for (var l, c = t[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                            var m = l.value;
                            e.append("".concat(o, "[]"), m)
                        }
                    } catch (e) {
                        r = !0, d = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (r) throw d
                        }
                    }
                    return e
                }, e.appendReqMethodToFormData = function(e, t) {
                    return e.append("_method", t.toUpperCase()), e
                }, e.format_number_to_string_thousand = function(e) {
                    return e >= 1e3 ? (e /= 1e3).toFixed(1) + "K" : e
                }, e.profile_url = function(e) {
                    return "https://app.crowdfundly.io/user/" + e
                }, e.email_is_valid = function(e) {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
                }, e.env = function(e) {
                    return n.env[e]
                }, e.buildQueryParams = function(e) {
                    return Object.keys(e).length ? Object.keys(e).map((function(t) {
                        return t + "=" + e[t]
                    })).join("&") : null
                }, e.base_url = function() {
                    return "https://app.crowdfundly.io"
                }, e.sliceWordFromString = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ",
                        n = e.split(o);
                    return n.length >= t ? n.slice(0, t).join(" ") : n.length ? n.slice(0, n.length).join(" ") : ""
                }, e.nFormatter = function(e, t) {
                    var i, o = [{
                        value: 1,
                        symbol: ""
                    }, {
                        value: 1e3,
                        symbol: "k"
                    }, {
                        value: 1e6,
                        symbol: "M"
                    }, {
                        value: 1e9,
                        symbol: "G"
                    }, {
                        value: 1e12,
                        symbol: "T"
                    }, {
                        value: 1e15,
                        symbol: "P"
                    }, {
                        value: 1e18,
                        symbol: "E"
                    }];
                    for (i = o.length - 1; i > 0 && !(e >= o[i].value); i--);
                    return (e / o[i].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + o[i].symbol
                }, e.getDescFromCampaignStory = function(e, t) {
                    var o = "";
                    if (e && e.length)
                        for (var n in e)
                            if (e.hasOwnProperty(n) && e[n] && e[n].model) {
                                if (e[n].selectedElement.hasOwnProperty("isFile") && !0 === e[n].selectedElement.isFile) continue;
                                (!1 === e[n].selectedElement.hasOwnProperty("isIframe") || e[n].selectedElement.hasOwnProperty("isIframe") && !1 === e[n].selectedElement.isIframe) && (o += e[n].model + " ")
                            } return sliceWordFromString(o, t)
                }, e.imageToDataUrl = function() {
                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t, o) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        var img = new Image;
                                        img.crossOrigin = "Anonymous", img.src = t, img.onload = function() {
                                            var t, canvas = document.createElement("CANVAS"),
                                                n = canvas.getContext("2d");
                                            canvas.height = img.naturalHeight, canvas.width = img.naturalWidth, n.drawImage(img, 0, 0), t = canvas.toDataURL(o), e(t)
                                        }, img.onerror = n
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }(), e.showAmount = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return t + Number(e).toFixed(o)
                }, h.a.prototype.$showAmount = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return showAmount(e, t, o)
                }, e.getFacebookAuthenticateUrl = function(e) {
                    return "https://www.facebook.com/v3.3/dialog/oauth?client_id=821903238246547&redirect_uri=" + e + "&scope=email&response_type=code"
                }, e.ucFirst = function(e) {
                    return e.charAt(0).toUpperCase() + x.slice(1)
                }, e.baseTimeStampFormat = function() {
                    return "lll"
                }, e.explainedDateFormat = function() {
                    return "MMMM Do YYYY, h:mm:ss a"
                }, e.getMessageFromError = function(e) {
                    return e.response && e.response.data && e.response.data.message ? e.response.data.message : "Something went wrong!"
                }, e.isRequestedFromOrgSubdomain = function() {
                    var e = window.location.host.split(".");
                    if (3 != e.length) return !1;
                    var t = e[0];
                    return !!t && ("app" != t && !(t.length < 4))
                }, e.baseDomain = function() {
                    return "localhost:3000" == window.location.host ? "http://localhost:3000" : "crowdfundly.io"
                }, h.a.prototype.$baseDomain = function() {
                    return baseDomain()
                }, e.appDomain = function() {
                    return "app.".concat(baseDomain())
                }, h.a.prototype.$getMediaSize = function(e) {
                    return e ? c.b[e] : c.a
                }, e.nuxtException = function(e) {
                    return new m.a(e)
                }, h.a.prototype.$nuxtException = function(e) {
                    return nuxtException(e)
                }, e.mediaSizes = function() {
                    return c.b
                }, h.a.prototype.$mediaSizes = function() {
                    return mediaSizes()
                }, e.isOversizeImage = function(e, t) {
                    if (t > e) return h.a.notify({
                        group: "notify",
                        type: "warning",
                        title: "",
                        text: "Image size is too large, Please resize the image or provide image less than " + Number(e / 1024).toFixed(0) + " Kb.",
                        duration: 3e3
                    }), !0
                }, h.a.prototype.$isOversizeImage = function(e, t) {
                    return isOversizeImage(e, t)
                }, e.isEmailLoggedIn = function() {
                    return o.getters.email_login
                }, h.a.prototype.$isEmailLoggedIn = function() {
                    return isEmailLoggedIn()
                }
            }
        }).call(this, o(34), o(90))
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            var n = o(4),
                r = o.n(n);
            t.a = function(t) {
                var o = t.store;
                e.__can = function(e, t) {
                    var n = o.getters.abilities;
                    for (var r in n)
                        if (n.hasOwnProperty(r) && r === t) return n[t][e];
                    return !1
                }, e.__is_admin = function() {
                    return o.getters.isAdmin
                }, e.__canModify = function(e) {
                    var t = o.getters.abilities,
                        n = !1;
                    return ["create", "read", "edit", "update", "delete"].forEach((function(o) {
                        for (var r in t)
                            if (t.hasOwnProperty(r) && r === e && !0 === t[e][o]) return void(n = !0)
                    })), n
                }, r.a.prototype.__can = function(e, t) {
                    return __can(e, t)
                }, r.a.prototype.__canModify = function(e) {
                    return __canModify(e)
                }, r.a.prototype.__is_admin = function() {
                    return __is_admin()
                }
            }
        }).call(this, o(34))
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            o(29), o(32), o(51);
            var n = o(4),
                r = o.n(n);
            t.a = function(t) {
                var o = t.store;
                e.__org_member_can = function(e) {
                    var t = o.getters.organization.id;
                    if (o.getters.authUser && o.getters.authUser.hasOwnProperty("organizations")) {
                        var n = o.getters.authUser.organizations.find((function(e) {
                            return e.id == t
                        }));
                        if (n) return n.permissions.includes(e)
                    }
                }, r.a.prototype.__org_member_can = function(e) {
                    return __org_member_can(e)
                }
            }
        }).call(this, o(34))
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            o(11);
            var n = o(2),
                r = o(184);
            t.a = function(t) {
                var o = t.store;
                e.get_plan_value = function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var n, d, l = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null == (n = l.length > 1 && void 0 !== l[1] ? l[1] : null) || !n.hasOwnProperty("org_plan_permission")) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", new r.a(n.org_plan_permission, null)[t](n));
                                case 5:
                                    if (!o.getters.organization || "organization" == t) {
                                        e.next = 8;
                                        break
                                    }
                                    return d = o.getters.organization.plan_permission, e.abrupt("return", new r.a(d, o.state.auth.user)[t](n));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }).call(this, o(34))
    }, function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return d
        }));
        var n = o(17),
            r = o(22),
            d = function() {
                function e(data, t) {
                    Object(n.a)(this, e), this.data = data, this.user = t
                }
                return Object(r.a)(e, [{
                    key: "campaign",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return "number" == typeof this.data.campaign.value ? this.data.campaign.value > e[0] : this.data.campaign.value
                    }
                }, {
                    key: "organization",
                    value: function() {
                        var e = this,
                            t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], this.user.organizations.filter((function(t) {
                                return t.creator_id === e.user.id
                            })));
                        return this.data.organization.value > t.length
                    }
                }, {
                    key: "system_commission",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.system_commission.value
                    }
                }, {
                    key: "fundraiser",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return "number" == typeof this.data.fundraiser.value ? this.data.fundraiser.value > e[0] : this.data.fundraiser.value
                    }
                }, {
                    key: "team_account",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return "number" == typeof this.data.team_account.value ? this.data.team_account.value > e[0] : this.data.team_account.value
                    }
                }, {
                    key: "endorsement",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.endorsement.value
                    }
                }, {
                    key: "chat_presets",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.chat_presets.value
                    }
                }, {
                    key: "custom_thank_you_message",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.custom_thank_you_message.value
                    }
                }, {
                    key: "donation_preset",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.donation_preset.value
                    }
                }, {
                    key: "offline_donations",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.offline_donations.value
                    }
                }, {
                    key: "custom_campaign_flyer",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.custom_campaign_flyer.value
                    }
                }, {
                    key: "set_remainder",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.set_remainder.value
                    }
                }, {
                    key: "allow_donation_refund",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.allow_donation_refund.value
                    }
                }, {
                    key: "donation_tips",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.donation_tips.value
                    }
                }, {
                    key: "custom_domain",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.custom_domain.value
                    }
                }, {
                    key: "branded_company_name",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.branded_company_name.value
                    }
                }, {
                    key: "tip_preset",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.tip_preset.value
                    }
                }, {
                    key: "post_updates",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                    }
                }, {
                    key: "real_time_chat",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.real_time_chat.value
                    }
                }, {
                    key: "smart_notification",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.smart_notification.value
                    }
                }, {
                    key: "guest_donations",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.guest_donations.value
                    }
                }, {
                    key: "donation_on_behalf_of",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.donation_on_behalf_of.value
                    }
                }, {
                    key: "social_sharing",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.social_sharing.value
                    }
                }, {
                    key: "multi_currency",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.multi_currency.value
                    }
                }, {
                    key: "insight_data",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.insight_data.value
                    }
                }, {
                    key: "anonymous_donation",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.data.anonymous_donation.value
                    }
                }]), e
            }()
    }, function(e, t, o) {
        "use strict";
        (function(e) {
            var n = o(4),
                r = o.n(n),
                d = o(186),
                l = o.n(d),
                c = o(175),
                m = o.n(c);
            r.a.use(m.a, {
                lock: !0,
                listenTo: ["input", "keyup"],
                defaultTime: "400ms"
            }), t.a = function() {
                function t(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        o = e || "g-modal",
                        n = document.querySelector("#" + o + ".g-modal");
                    if (n.classList.contains("g-modal--show") ? n.classList.remove("g-modal--show") : n.classList.add("g-modal--show"), t) return t
                }

                function o(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        o = e || "g-modal",
                        n = document.querySelector("#" + o + ".g-modal");
                    if (n.classList.remove("g-modal--show"), t) return t
                }

                function n(e) {
                    var t = e || "g-chat",
                        o = document.querySelector("#" + t + ".g-chat");
                    if (!o.classList.contains("show")) return o.classList.add("show")
                }

                function d(e) {
                    var t = e || "g-chat",
                        o = document.querySelector("#" + t + ".g-chat");
                    if (o.classList.contains("show")) return o.classList.remove("show")
                }

                function c(e) {
                    var t = e || "imageCropper",
                        o = document.querySelector("#" + t + ".g-modal");
                    o.classList.contains("g-modal--show") ? o.classList.remove("g-modal--show") : o.classList.add("g-modal--show")
                }

                function m(e) {
                    var t = e || "imageCropper";
                    document.querySelector("#" + t + ".g-modal").classList.remove("g-modal--show")
                }

                function _(e) {
                    var iframe = document.querySelectorAll("#" + e + " iframe");
                    iframe && iframe.forEach((function(e) {
                        var t = e.src;
                        e.src = t
                    }))
                }
                e.$showModal = function(e) {
                    t(e)
                }, e.$hideModal = function(e) {
                    o(e)
                }, r.a.prototype.$showModal = function(e) {
                    t(e)
                }, r.a.prototype.$hideModal = function(e) {
                    o(e)
                }, e.$confirmAlert = function() {
                    t("confirm-alert")
                }, r.a.prototype.$confirmAlert = function() {
                    t("confirm-alert")
                }, e.$showChat = function(e) {
                    n(e)
                }, e.$hideChat = function(e) {
                    d(e)
                }, r.a.prototype.$showChat = function(e) {
                    n(e)
                }, r.a.prototype.$hideChat = function(e) {
                    d(e)
                }, e._reverseMap = function(e) {
                    var t = {};
                    for (var o in e) e.hasOwnProperty(o) && (t[e[o]] = o);
                    return t
                }, e.$showImageCropper = function(e) {
                    c(e)
                }, e.$hideImageCropper = function(e) {
                    m(e)
                }, r.a.prototype.$showImageCropper = function(e) {
                    c(e)
                }, r.a.prototype.$hideImageCropper = function(e) {
                    m(e)
                }, e.$stopVideo = function(e) {
                    _(e)
                }, r.a.prototype.$stopVideo = function(e) {
                    _(e)
                }, e.$swal = l.a, r.a.prototype.$swal = l.a
            }
        }).call(this, o(34))
    }, , function(e, t, o) {
        "use strict";
        (function(e) {
            o(11);
            var n = o(2);
            t.a = function(t) {
                var o = t.store;
                e._org_user_can = function() {
                    var e = Object(n.a)(regeneratorRuntime.mark((function e(t, n) {
                        var r, d;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (o.getters.isLoggedIn || localStorage.getItem("auth._token.local")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return r = route("org-user-can", t, n).absolute_path, e.next = 5, fetch(r, {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: localStorage.getItem("auth._token.local")
                                        }
                                    });
                                case 5:
                                    return d = e.sent, e.next = 8, d.json();
                                case 8:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, o) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }).call(this, o(34))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return c
        }));
        var n = o(17),
            r = o(53),
            d = o(36),
            l = o(54),
            c = function(e) {
                function t() {
                    var e, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 404;
                    return Object(n.a)(this, t), (e = Object(r.a)(this, Object(d.a)(t).call(this, o || "The Page you requested could not be found"))).statusCode = l, e
                }
                return Object(l.a)(t, e), t
            }(o(94).a)
    }, , , , , , , function(e, t, o) {
        e.exports = o(247)
    }, function(e, t, o) {
        "use strict";
        o.r(t),
            function(e) {
                o(58), o(73), o(6);
                var t = o(20),
                    n = (o(11), o(56), o(2)),
                    r = (o(29), o(32), o(5), o(3), o(7), o(16), o(164), o(255), o(261), o(263), o(4)),
                    d = o.n(r),
                    l = o(227),
                    c = o(109),
                    m = o(12),
                    _ = o(67),
                    h = o(154);
                d.a.component(h.a.name, h.a), d.a.component("NLink", h.a), e.fetch || (e.fetch = l.a);
                var x, f, w = [],
                    y = window.__NUXT__ || {};
                Object.assign(d.a.config, {
                    silent: !0,
                    performance: !1
                });
                var k = d.a.config.errorHandler || console.error;

                function v(e, t, o) {
                    var n = function(component) {
                        var e = function(component, e) {
                            if (!component || !component.options || !component.options[e]) return {};
                            var option = component.options[e];
                            if ("function" == typeof option) {
                                for (var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) o[n - 2] = arguments[n];
                                return option.apply(void 0, o)
                            }
                            return option
                        }(component, "transition", t, o) || {};
                        return "string" == typeof e ? {
                            name: e
                        } : e
                    };
                    return e.map((function(e) {
                        var t = Object.assign({}, n(e));
                        if (o && o.matched.length && o.matched[0].components.default) {
                            var r = n(o.matched[0].components.default);
                            Object.keys(r).filter((function(e) {
                                return r[e] && e.toLowerCase().includes("leave")
                            })).forEach((function(e) {
                                t[e] = r[e]
                            }))
                        }
                        return t
                    }))
                }

                function z(e, t, o) {
                    return C.apply(this, arguments)
                }

                function C() {
                    return (C = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n) {
                        var r, d, l, c, _ = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._pathChanged = Boolean(x.nuxt.err) || o.path !== t.path, this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(o.query), this._diffQuery = this._queryChanged ? Object(m.g)(t.query, o.query) : [], this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 4, this._pathChanged || !this._queryChanged) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, Object(m.n)(t, (function(e, t) {
                                        return {
                                            Component: e,
                                            instance: t
                                        }
                                    }));
                                case 8:
                                    r = e.sent, r.some((function(e) {
                                        var n = e.Component,
                                            r = e.instance,
                                            d = n.options.watchQuery;
                                        return !0 === d || (Array.isArray(d) ? d.some((function(e) {
                                            return _._diffQuery[e]
                                        })) : "function" == typeof d && d.apply(r, [t.query, o.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 11:
                                    n(), e.next = 25;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(4), d = e.t0 || {}, l = d.statusCode || d.status || d.response && d.response.status || 500, c = d.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) {
                                        e.next = 22;
                                        break
                                    }
                                    return window.location.reload(!0), e.abrupt("return");
                                case 22:
                                    this.error({
                                        statusCode: l,
                                        message: c
                                    }), this.$nuxt.$emit("routeChanged", t, o, d), n();
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [4, 14]
                        ])
                    })))).apply(this, arguments)
                }

                function S(e, t) {
                    return y.serverRendered && t && Object(m.a)(e, t), e._Ctor = e, e
                }

                function j(e) {
                    var path = Object(m.d)(e.options.base, e.options.mode);
                    return Object(m.c)(e.match(path), function() {
                        var e = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n, r, d) {
                            var l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("function" != typeof t || t.options) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, t();
                                    case 3:
                                        t = e.sent;
                                    case 4:
                                        return l = S(Object(m.o)(t), y.data ? y.data[d] : null), n.components[r] = l, e.abrupt("return", l);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, o, n, r, d) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function E(e, t, o) {
                    var n = this,
                        r = ["clearValidationErrors", "checkAuthToken"],
                        d = !1;
                    if (void 0 !== o && (r = [], (o = Object(m.o)(o)).options.middleware && (r = r.concat(o.options.middleware)), e.forEach((function(e) {
                            e.options.middleware && (r = r.concat(e.options.middleware))
                        }))), r = r.map((function(e) {
                            return "function" == typeof e ? e : ("function" != typeof c.a[e] && (d = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + e
                            })), c.a[e])
                        })), !d) return Object(m.k)(r, t)
                }

                function A(e, t, o) {
                    return O.apply(this, arguments)
                }

                function O() {
                    return (O = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n) {
                        var r, d, l, c, h, f, y, k, z, C, S, j, A, O, P, T, I, R, $ = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 2:
                                    return t === o ? w = [] : (r = [], w = Object(m.e)(o, r).map((function(e, i) {
                                        return Object(m.b)(o.matched[r[i]].path)(o.params)
                                    }))), d = !1, l = function(path) {
                                        o.path === path.path && $.$loading.finish && $.$loading.finish(), o.path !== path.path && $.$loading.pause && $.$loading.pause(), d || (d = !0, n(path))
                                    }, e.next = 7, Object(m.p)(x, {
                                        route: t,
                                        from: o,
                                        next: l.bind(this)
                                    });
                                case 7:
                                    if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), c = [], (h = Object(m.e)(t, c)).length) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.next = 14, E.call(this, h, x.context);
                                case 14:
                                    if (!d) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 16:
                                    return f = (_.a.options || _.a).layout, e.next = 19, this.loadLayout("function" == typeof f ? f.call(_.a, x.context) : f);
                                case 19:
                                    return y = e.sent, e.next = 22, E.call(this, h, x.context, y);
                                case 22:
                                    if (!d) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 24:
                                    return x.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 26:
                                    return h.forEach((function(e) {
                                        e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                    })), this.setTransitions(v(h, t, o)), e.prev = 28, e.next = 31, E.call(this, h, x.context);
                                case 31:
                                    if (!d) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 33:
                                    if (!x.context._errored) {
                                        e.next = 35;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 35:
                                    return "function" == typeof(k = h[0].options.layout) && (k = k(x.context)), e.next = 39, this.loadLayout(k);
                                case 39:
                                    return k = e.sent, e.next = 42, E.call(this, h, x.context, k);
                                case 42:
                                    if (!d) {
                                        e.next = 44;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 44:
                                    if (!x.context._errored) {
                                        e.next = 46;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 46:
                                    z = !0, e.prev = 47, C = !0, S = !1, j = void 0, e.prev = 51, A = h[Symbol.iterator]();
                                case 53:
                                    if (C = (O = A.next()).done) {
                                        e.next = 65;
                                        break
                                    }
                                    if ("function" == typeof(P = O.value).options.validate) {
                                        e.next = 57;
                                        break
                                    }
                                    return e.abrupt("continue", 62);
                                case 57:
                                    return e.next = 59, P.options.validate(x.context);
                                case 59:
                                    if (z = e.sent) {
                                        e.next = 62;
                                        break
                                    }
                                    return e.abrupt("break", 65);
                                case 62:
                                    C = !0, e.next = 53;
                                    break;
                                case 65:
                                    e.next = 71;
                                    break;
                                case 67:
                                    e.prev = 67, e.t0 = e.catch(51), S = !0, j = e.t0;
                                case 71:
                                    e.prev = 71, e.prev = 72, C || null == A.return || A.return();
                                case 74:
                                    if (e.prev = 74, !S) {
                                        e.next = 77;
                                        break
                                    }
                                    throw j;
                                case 77:
                                    return e.finish(74);
                                case 78:
                                    return e.finish(71);
                                case 79:
                                    e.next = 85;
                                    break;
                                case 81:
                                    return e.prev = 81, e.t1 = e.catch(47), this.error({
                                        statusCode: e.t1.statusCode || "500",
                                        message: e.t1.message
                                    }), e.abrupt("return", n());
                                case 85:
                                    if (z) {
                                        e.next = 88;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 88:
                                    return e.next = 90, Promise.all(h.map((function(e, i) {
                                        if (e._path = Object(m.b)(t.matched[c[i]].path)(t.params), e._dataRefresh = !1, $._pathChanged && $._queryChanged || e._path !== w[i]) e._dataRefresh = !0;
                                        else if (!$._pathChanged && $._queryChanged) {
                                            var n = e.options.watchQuery;
                                            !0 === n ? e._dataRefresh = !0 : Array.isArray(n) ? e._dataRefresh = n.some((function(e) {
                                                return $._diffQuery[e]
                                            })) : "function" == typeof n && (T || (T = Object(m.f)(t)), e._dataRefresh = n.apply(T[i], [t.query, o.query]))
                                        }
                                        if ($._hadError || !$._isMounted || e._dataRefresh) {
                                            var r = [],
                                                d = e.options.asyncData && "function" == typeof e.options.asyncData,
                                                l = Boolean(e.options.fetch),
                                                _ = d && l ? 30 : 45;
                                            if (d) {
                                                var h = Object(m.m)(e.options.asyncData, x.context).then((function(t) {
                                                    Object(m.a)(e, t), $.$loading.increase && $.$loading.increase(_)
                                                }));
                                                r.push(h)
                                            }
                                            if ($.$loading.manual = !1 === e.options.loading, l) {
                                                var p = e.options.fetch(x.context);
                                                p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                    $.$loading.increase && $.$loading.increase(_)
                                                })), r.push(p)
                                            }
                                            return Promise.all(r)
                                        }
                                    })));
                                case 90:
                                    d || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), n()), e.next = 107;
                                    break;
                                case 93:
                                    if (e.prev = 93, e.t2 = e.catch(28), "ERR_REDIRECT" !== (I = e.t2 || {}).message) {
                                        e.next = 98;
                                        break
                                    }
                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, o, I));
                                case 98:
                                    return w = [], Object(m.i)(I), "function" == typeof(R = (_.a.options || _.a).layout) && (R = R(x.context)), e.next = 104, this.loadLayout(R);
                                case 104:
                                    this.error(I), this.$nuxt.$emit("routeChanged", t, o, I), n();
                                case 107:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [28, 93],
                            [47, 81],
                            [51, 67, 71, 79],
                            [72, , 74, 78]
                        ])
                    })))).apply(this, arguments)
                }

                function P(e, o) {
                    Object(m.c)(e, (function(e, o, n, r) {
                        return "object" !== Object(t.a)(e) || e.options || ((e = d.a.extend(e))._Ctor = e, n.components[r] = e), e
                    }))
                }

                function T(e) {
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                    var t = this.$options.nuxt.err ? (_.a.options || _.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof t && (t = t(x.context)), this.setLayout(t)
                }

                function I(e, t) {
                    var o = this;
                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                        var n = Object(m.f)(e),
                            r = Object(m.e)(e);
                        d.a.nextTick((function() {
                            n.forEach((function(e, i) {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && r[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var t = e.constructor.options.data.call(e);
                                    for (var o in t) d.a.set(e.$data, o, t[o]);
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            })), T.call(o, e)
                        }))
                    }
                }

                function R(e) {
                    window.onNuxtReadyCbs.forEach((function(t) {
                        "function" == typeof t && t(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), f.afterEach((function(t, o) {
                        d.a.nextTick((function() {
                            return e.$nuxt.$emit("routeChanged", t, o)
                        }))
                    }))
                }

                function $() {
                    return ($ = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var o, n, r, l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return x = t.app, f = t.router, t.store, o = new d.a(x), n = function() {
                                        o.$mount("#__nuxt"), f.afterEach(P), f.afterEach(I.bind(o)), d.a.nextTick((function() {
                                            R(o)
                                        }))
                                    }, e.next = 7, Promise.all(j(f));
                                case 7:
                                    if (r = e.sent, o.setTransitions = o.$options.nuxt.setTransitions.bind(o), r.length && (o.setTransitions(v(r, f.currentRoute)), w = f.currentRoute.matched.map((function(e) {
                                            return Object(m.b)(e.path)(f.currentRoute.params)
                                        }))), o.$loading = {}, y.error && o.error(y.error), f.beforeEach(z.bind(o)), f.beforeEach(A.bind(o)), !y.serverRendered) {
                                        e.next = 17;
                                        break
                                    }
                                    return n(), e.abrupt("return");
                                case 17:
                                    l = function() {
                                        P(f.currentRoute, f.currentRoute), T.call(o, f.currentRoute), n()
                                    }, A.call(o, f.currentRoute, f.currentRoute, (function(path) {
                                        if (path) {
                                            var e = f.afterEach((function(t, o) {
                                                e(), l()
                                            }));
                                            f.push(path, void 0, (function(e) {
                                                e && k(e)
                                            }))
                                        } else l()
                                    }));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(_.b)().then((function(e) {
                    return $.apply(this, arguments)
                })).catch(k)
            }.call(this, o(34))
    }, , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.redirect,
                o = e.store;
            return o.getters.isLoggedIn ? null === o.getters.role ? t("/") : 1 !== o.getters.role.id && 2 !== o.getters.role.id ? t("/") : void 0 : t("/")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            if (!e.$auth.loggedIn) return e.redirect("/login?redirect=" + e.route.fullPath)
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t);
        o(11);
        var n = o(2),
            r = o(228),
            d = o.n(r);

        function l() {
            return (l = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                var o, n;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (o = t.store, n = t.$auth, t.route, t.$axios, e.prev = 1, !n || !n.getToken("local")) {
                                e.next = 6;
                                break
                            }
                            if (!(Date.now() >= 1e3 * d()(n.getToken("local")).exp)) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6, o.dispatch("logout");
                        case 6:
                            e.next = 10;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(1);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 8]
                ])
            })))).apply(this, arguments)
        }
        t.default = function(e) {
            return l.apply(this, arguments)
        }
    }, , , function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            e.store.dispatch("error/clearError")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.store,
                o = e.redirect;
            if (t.state.auth.loggedIn) return o("/")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.store,
                o = e.route;
            t.dispatch("set_campaign_header", o)
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.store;
            console.error("Log -> ", t.state.donation)
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            e.route, e.redirect
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.route,
                o = e.redirect,
                n = t.meta[0].permit;
            if (!1 === __can(n.permission, n.module)) {
                var r = "/";
                n.hasOwnProperty("redirect_to") && (r = n.redirect_to), o(r)
            }
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.route,
                o = e.redirect,
                n = t.meta[0].permitOrg;
            if (!1 === __org_member_can(n.permission)) {
                var r = "/dashboard";
                n.hasOwnProperty("redirect_to") && (r = n.redirect_to), o(r)
            }
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.route,
                o = e.redirect,
                n = t.meta[0].permitPlan;
            if (!1 === get_plan_value(n.policy, n.permission, n.params)) {
                var r = "/";
                n.hasOwnProperty("redirect_to") && (r = n.redirect_to), o(r)
            }
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.redirect,
                o = e.$auth;
            if (o.loggedIn && o.user.is_verified) return t("/")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t),
            function(e) {
                t.default = function(t) {
                    var o = t.redirect;
                    t.$auth;
                    if (e.env.MAINTENANCE_MODE) return o("/maintenance")
                }
            }.call(this, o(90))
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.redirect,
                o = e.store;
            if (!o.state.organization) return t("/user/" + o.$auth.user.username + "/story")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t);
        o(16);
        t.default = function(e) {
            e.redirect;
            var t = e.store,
                o = e.from;
            t.dispatch("set_intended_url", {
                route_name: o.name,
                query: o.query,
                params: o.params,
                fullPath: o.fullPath
            })
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            if (e.store.state.auth.loggedIn) return window.location.href = "/"
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.redirect;
            e.store.getters.isUser || t("/")
        }
    }, function(e, t, o) {
        "use strict";
        o.r(t);
        o(29), o(32), o(16);
        t.default = function(e) {
            e.store;
            var t, o = e.redirect,
                n = e.$auth,
                r = e.route;
            if (n.loggedIn && !n.user.is_verified && (t = r.name, !["index", "auth-unverified", "verify"].includes(t))) return o("/auth/unverified")
        }
    }, , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(124);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}", ""]), e.exports = t
    }, function(e, t, o) {
        var content = o(296);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, o(31).default)("12ba2d00", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, o) {
    }, , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(125);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, "@media screen and (max-width:575px){.dropdown-header-msg[data-v-7845639e]{font-size:12px}}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        var n = o(126);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, "@media screen and (max-width:575px){.dropdown-header-msg[data-v-280649f5]{font-size:12px}}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        var n = o(127);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".button-spinner-logout[data-v-dd56b4b8]{-webkit-animation:spinner-border 1.1s linear infinite;animation:spinner-border 1.1s linear infinite;width:.75rem;height:.75rem;vertical-align:bottom;border-width:.1em;margin:5px 3px 4px 0}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        var n = o(128);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, "html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:3px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--gray{display:inline-block;border-radius:3px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--gray:hover{color:#fff;background-color:#35495e}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "state", (function() {
            return l
        })), o.d(t, "mutations", (function() {
            return c
        })), o.d(t, "actions", (function() {
            return m
        })), o.d(t, "getters", (function() {
            return _
        }));
        o(15), o(11);
        var n = o(2),
            r = (o(51), o(3), o(16), o(61)),
            d = o(142),
            l = function() {
                return {
                    selected_free_plan: !1,
                    selected_language: "en",
                    donation: {
                        campaign_id: null,
                        offer_id: null,
                        account_id: null,
                        campaign_name: null,
                        org_name: null,
                        selected_amount: 0,
                        tip_percentage: 0,
                        tip_amount: 0,
                        is_anonymous: !1,
                        share: !0,
                        on_behalf_of: !1,
                        message: null,
                        currency_code: null,
                        currency_symbol: null,
                        user: {
                            email: null,
                            name: null,
                            avatar: null
                        }
                    },
                    donation_token: {
                        slug: null
                    },
                    abilities: null,
                    role: null,
                    countries: [],
                    currencies: [],
                    campaign_header: {
                        back_button_route: "/",
                        progress: 0
                    },
                    page_state: null,
                    organization: null,
                    email_login: !1,
                    intendedUrl: null,
                    auth_request_url: null,
                    contribution_redirect_url: null
                }
            },
            c = {
                SET_FREE_SUBSCRIPTION_SELECTION_DATA: function(e, data) {
                    e.selected_free_plan = data
                },
                SWITCH_LANGUAGE: function(e, t) {
                    e.selected_language = t
                },
                SET_DONATION_AMOUNT: function(e, t) {
                    e.donation.selected_amount = t
                },
                SET_DONATION_CAMPAIGN: function(e, data) {
                    data.campaign_id && (e.donation.campaign_id = parseInt(data.campaign_id)), data.campaign_name && (e.donation.campaign_name = data.campaign_name)
                },
                SET_DONATION_TIP_AMOUNT: function(e, data) {
                    e.donation.campaign_id == data.campaign_id && (e.donation.tip_amount = data.tip_amount)
                },
                SET_SELECTED_SHIPPING: function(e, data) {
                    e.shipping = data
                },
                SET_DONATION_DATA: function(e, data) {
                    if (e.donation.user = {
                            email: data.email,
                            name: data.name,
                            avatar: data.avatar
                        }, data.tip_amount && (e.donation.tip_amount = data.tip_amount), data.selected_amount && (e.donation.selected_amount = data.selected_amount), data.offer_id && (e.donation.offer_id = data.offer_id), data.campaign_id && (e.donation.campaign_id = data.campaign_id), data.org_name && (e.donation.org_name = data.org_name), data.org_id && (e.donation.org_id = data.org_id), data.campaign_name && (e.donation.campaign_name = data.campaign_name), data.currency_code && (e.donation.currency_code = data.currency_code), data.currency_symbol && (e.donation.currency_symbol = data.currency_symbol), data.account_id && "undefined" !== data.account_id && (e.donation.account_id = data.account_id), data.share && "undefined" !== data.share && (e.donation.share = data.share), data.isAnonymous && "undefined" !== data.isAnonymous && (e.donation.is_anonymous = data.isAnonymous), data.onBehalfOf && "undefined" !== data.onBehalfOf && (e.donation.on_behalf_of = data.onBehalfOf), data.shippingAmount && (e.donation.shippingAmount = data.shippingAmount), data.shippingLocation && (e.donation.shippingLocation = data.shippingLocation), data.offer && "undefined" !== data.offer && (e.donation.offer = data.offer), data.trnxToken && (e.donation.trnxToken = data.trnxToken), "undefined" !== data.message) {
                        var t = data.message;
                        "" == t && (t = null), e.donation.message = t
                    }
                },
                CLEAR_DONATION_DATA: function(e) {
                    e.donation = {
                        campaign_id: null,
                        account_id: null,
                        offer_id: null,
                        org_name: null,
                        campaign_name: null,
                        selected_amount: 0,
                        tip_percentage: 0,
                        tip_amount: 0,
                        is_anonymous: !1,
                        share: !0,
                        on_behalf_of: !1,
                        currency_code: null,
                        currency_symbol: null,
                        shippingAmount: 0,
                        shippingLocation: null,
                        user: {
                            email: null,
                            name: null,
                            avatar: null
                        }
                    }, e.shipping = null
                },
                CLEAR_DONATION_TOKEN: function(e) {
                    e.donation_token.slug = null
                },
                SET_DONOR_AVATAR: function(e, t) {
                    e.donation.user.avatar = t
                },
                SET_ABILITIES: function(e, t) {
                    e.abilities = t
                },
                SET_ROLE: function(e, t) {
                    e.role = t
                },
                SET_SUCCESSFUL_PAYMENT_TOKEN: function(e, t) {
                    e.donation_token.slug = t
                },
                SET_CONTRIBUTION_REDIRECT_URL: function(e, t) {
                    e.contribution_redirect_url = t
                },
                CLEAR_CONTRIBUTION_REDIRECT_URL: function(e) {
                    e.contribution_redirect_url = null
                },
                LOGOUT: function(e) {
                    e.abilities = null, e.role = null, e.countries = [], e.currencies = [], e.organization = null, e.email_login = !1
                },
                SET_COUNTRIES: function(e, t) {
                    e.countries = t
                },
                SET_CURRENCIES: function(e, t) {
                    e.currencies = t
                },
                SET_DONATION_ON_BEHALF_OF: function(e, t) {
                    e.donation.on_behalf_of = t
                },
                SET_CAMPAIGN_HEADER_DATA: function(e, data) {
                    e.campaign_header = data
                },
                SET_PAGE_STATE: function(e, data) {
                    e.page_state = data
                },
                CLEAR_PAGE_STATE: function(e) {
                    e.page_state = null
                },
                SET_ORGANIZATION: function(e, data) {
                    e.organization = data
                },
                SET_EMAIL_LOGIN: function(e, t) {
                    e.email_login = t
                },
                CLEAR_ORGANIZATION: function(e) {
                    e.organization = null
                },
                CLEAR_EMAIL_LOGIN: function(e) {
                    e.email_login = !1
                },
                SET_INTENDED_URL: function(e, data) {
                    e.intendedUrl = data
                },
                CLEAR_INTENDED_URL: function(e) {
                    e.intendedUrl = null
                },
                SET_AUTH_REQUEST_URL: function(e, t) {
                    e.auth_request_url = t
                },
                CLEAR_AUTH_REQUEST_URL: function(e, t) {
                    e.auth_request_url = t
                },
                SET_SUBSCRIPTION_ID: function(e, data) {
                    e.subscription_id = data
                },
                CLEAR_SUBSCRIPTION_ID: function(e) {
                    e.subscription_id = null
                }
            },
            m = {
                set_free_subscription_selection_data: function(e, data) {
                    (0, e.commit)("SET_FREE_SUBSCRIPTION_SELECTION_DATA", data)
                },
                change_language: function(e, code) {
                    var t = e.commit;
                    return new Promise((function(e, o) {
                        d.a.find((function(e) {
                            return e.code == code
                        })) || o("Selected language not allowed."), t("SWITCH_LANGUAGE", code), e("Language changed.")
                    }))
                },
                select_donation_preset: function(e, data) {
                    var t = e.commit,
                        o = e.state;
                    t("SET_DONATION_AMOUNT", data.amount), t("SET_DONATION_CAMPAIGN", data);
                    var n = o.donation.tip_percentage;
                    if (data.tip_percentage && (n = data.tip_percentage), 0 === o.donation.tip_amount) {
                        var r = n * data.amount / 100;
                        t("SET_DONATION_TIP_AMOUNT", {
                            campaign_id: data.campaign_id,
                            tip_amount: r
                        })
                    }
                },
                set_donor_avatar: function(e, t) {
                    (0, e.commit)("SET_DONOR_AVATAR", t)
                },
                set_donation_campaign: function(e, data) {
                    (0, e.commit)("SET_DONATION_CAMPAIGN", data)
                },
                set_donation_data: function(e, data) {
                    var t = e.commit;
                    return new Promise((function(e) {
                        t("SET_DONATION_DATA", data), e()
                    }))
                },
                set_selected_shipping: function(e, t) {
                    (0, e.commit)("SET_SELECTED_SHIPPING", t)
                },
                set_donation_token: function(e, t) {
                    (0, e.commit)("SET_SUCCESSFUL_PAYMENT_TOKEN", t)
                },
                select_donation_tip: function(e, data) {
                    (0, e.commit)("SET_DONATION_TIP_AMOUNT", data)
                },
                clear_donation_token: function(e) {
                    (0, e.commit)("CLEAR_DONATION_TOKEN")
                },
                set_user_abilities: function(e, data) {
                    var t = e.commit;
                    t("SET_ABILITIES", data.abilities), t("SET_ROLE", data.role)
                },
                fetch_auth_user_abilities: function() {
                    return this.$axios.$get(route_url("auth-user-abilities"))
                },
                set_donation_on_behalf_of: function(e, t) {
                    (0, e.commit)("SET_DONATION_ON_BEHALF_OF", t)
                },
                clear_donation_state: function(e) {
                    var t = e.commit,
                        o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    t("CLEAR_DONATION_DATA"), o && t("CLEAR_DONATION_TOKEN")
                },
                logout: function(e) {
                    var t = this,
                        o = e.commit;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !(n = JSON.parse(localStorage.getItem("crowdfundly"))).logout_api_url) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, t.$axios.$post(n.logout_api_url).then((function(e) {
                                        console.log("logout api", e)
                                    })).catch((function(e) {}));
                                case 5:
                                    return e.next = 7, t.$auth.logout({
                                        type: "regular"
                                    });
                                case 7:
                                    return e.next = 9, t.$cookies.remove("selected_organization_id");
                                case 9:
                                    n.logout_redirect_url ? window.location.href = n.logout_redirect_url : window.location.href = "/wp-admin/admin.php?page=crowdfundly-settings", e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(0), console.log("logout error", e.t0);
                                case 15:
                                    return e.prev = 15, o("LOGOUT"), e.finish(15);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12, 15, 18]
                        ])
                    })))()
                },
                fetch_countries: function() {
                    return this.$axios.$get("/countries")
                },
                fetch_currencies: function() {
                    return this.$axios.$get("/currencies")
                },
                set_countries: function(e, t) {
                    (0, e.commit)("SET_COUNTRIES", t)
                },
                set_currencies: function(e, t) {
                    (0, e.commit)("SET_CURRENCIES", t)
                },
                set_contribution_redirect_url: function(e, t) {
                    (0, e.commit)("SET_CONTRIBUTION_REDIRECT_URL", t)
                },
                clear_contribution_redirect_url: function(e) {
                    (0, e.commit)("CLEAR_CONTRIBUTION_REDIRECT_URL")
                },
                set_campaign_header: function(e, t) {
                    var o = e.commit,
                        n = t.name.toLowerCase(),
                        r = t.params.slug;
                    "fundraise-campaign-types" === n ? o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/",
                        progress: 20
                    }) : "fundraise-new-campaign" === n ? o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/fundraise/campaign-types",
                        progress: 60
                    }) : "fundraise-slug-new-campaign-story" === n ? o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/fundraise/campaign-types",
                        progress: 70
                    }) : "fundraise-slug-new-campaign-media" === n ? o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/fundraise/" + r + "/new-campaign-story",
                        progress: 80
                    }) : "fundraise-slug-new-campaign-recipient" === n ? o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/fundraise/" + r + "/new-campaign-media",
                        progress: 90
                    }) : "fundraise-slug-onboard-pending-campaign" === n && o("SET_CAMPAIGN_HEADER_DATA", {
                        back_button_route: "/fundraise/" + r + "/new-campaign-recipient",
                        progress: 100
                    })
                },
                set_page_state: function(e, data) {
                    var t = e.commit;
                    data.page || (data.page = "new_campaign_recipient"), t("SET_PAGE_STATE", Object.assign({}, data))
                },
                clear_page_state: function(e) {
                    (0, e.commit)("CLEAR_PAGE_STATE")
                },
                set_organization: function(e, t) {
                    (0, e.commit)("SET_ORGANIZATION", t)
                },
                set_email_login: function(e, t) {
                    (0, e.commit)("SET_EMAIL_LOGIN", t)
                },
                clear_email_login: function(e) {
                    (0, e.commit)("CLEAR_EMAIL_LOGIN")
                },
                sync_organization: function(e) {
                    var t = e.commit,
                        o = e.state,
                        n = null;
                    o.organization && (n = o.auth.user.organizations.find((function(e) {
                        return o.organization.id === e.id
                    }))), n && t("SET_ORGANIZATION", n)
                },
                clear_organization: function(e) {
                    (0, e.commit)("CLEAR_ORGANIZATION")
                },
                set_intended_url: function(e, data) {
                    (0, e.commit)("SET_INTENDED_URL", data)
                },
                clear_intended_url: function(e) {
                    (0, e.commit)("CLEAR_INTENDED_URL")
                },
                set_auth_request_url: function(e, t) {
                    (0, e.commit)("SET_AUTH_REQUEST_URL", t)
                },
                clear_auth_request_url: function(e) {
                    (0, e.commit)("CLEAR_AUTH_REQUEST_URL")
                },
                set_subscription_id: function(e, data) {
                    (0, e.commit)("SET_SUBSCRIPTION_ID", data)
                },
                clear_subscription_id: function(e) {
                    (0, e.commit)("CLEAR_SUBSCRIPTION_ID")
                }
            },
            _ = {
                selectedLanguage: function(e) {
                    return e.selected_language
                },
                donation: function(e) {
                    return e.donation
                },
                selectedCampaignForDonation: function(e) {
                    return {
                        id: e.donation.campaign_id,
                        name: e.donation.campaign_name
                    }
                },
                donationToken: function(e) {
                    return e.donation_token.slug
                },
                selectedShippingId: function(e) {
                    return e.shipping
                },
                selectedDonationAmount: function(e) {
                    return Number(e.donation.selected_amount)
                },
                donationTipAmount: function(e) {
                    return Number(e.donation.tip_amount)
                },
                donationTipPercentage: function(e) {
                    return Number(e.donation.tip_percentage)
                },
                isLoggedIn: function(e) {
                    return !0 === e.auth.loggedIn
                },
                authUser: function(e) {
                    return e.auth.user
                },
                abilities: function(e) {
                    return e.abilities
                },
                role: function(e) {
                    return e.role
                },
                countries: function(e) {
                    return e.countries
                },
                baseCurrency: function(e) {
                    var t = e.currencies.filter((function(e) {
                        return 1 === Number(e.is_base_currency)
                    }));
                    return t.length ? t[0] : null
                },
                currencies: function(e) {
                    return e.currencies
                },
                countryMobileCodes: function(e) {
                    return e.countries.map((function(e) {
                        return {
                            country_id: e.id,
                            country: e.short_name,
                            code: Number(e.country_mobile_code)
                        }
                    }))
                },
                isAdmin: function(e) {
                    return !(!e.auth.loggedIn || !e.role) && (e.role.id === r.c || e.role.id === r.a)
                },
                isUser: function(e) {
                    return !(!e.auth.loggedIn || 3 != e.auth.user.role)
                },
                isOrgOwner: function(e) {
                    return !(!e.organization || "owner" !== e.organization.auth_org_role)
                },
                isLawyer: function(e) {
                    return !(!e.auth.loggedIn || !e.role) && e.role.id === r.b
                },
                isVolunteer: function(e) {
                    return !(!e.auth.loggedIn || !e.role) && e.role.id === r.e
                },
                fullName: function(e) {
                    return e.auth.loggedIn ? e.auth.user.name : null
                },
                getCampaignHeader: function(e) {
                    return e.campaign_header
                },
                getPageState: function(e) {
                    return e.page_state
                },
                organization: function(e) {
                    return e.organization
                },
                email_login: function(e) {
                    return e.email_login
                },
                orgPermissions: function(e) {
                    if (e.organization && e.auth.loggedIn && e.auth.user.organizations) {
                        var t = e.auth.user.organizations.find((function(t) {
                            return t.id == e.organization.id
                        }));
                        if (t) return t.permissions
                    }
                    return null
                },
                planPermissions: function(e) {
                    return e.auth.loggedIn && e.auth.user.plan_permissions ? e.auth.user.plan_permissions : null
                },
                hasSubscription: function(e) {
                    return !0
                },
                selectedFreePlan: function(e) {
                    return e.selected_free_plan
                },
                intendedUrl: function(e) {
                    return e.intendedUrl
                },
                authRequestUrl: function(e) {
                    return e.auth_request_url
                },
                subscription_id: function(e) {
                    return e.subscription_id
                },
                contribution_redirect_url: function(e) {
                    return e.contribution_redirect_url
                }
            }
    }, , , , , function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "state", (function() {
            return n
        })), o.d(t, "mutations", (function() {
            return r
        })), o.d(t, "getters", (function() {
            return d
        })), o.d(t, "actions", (function() {
            return l
        }));
        var n = function() {
                return {
                    campaignSidebar: {
                        activeMenu: "charityMenu",
                        businessMenu: {
                            type: {
                                label: "Campaign type",
                                active: !1,
                                icon: ""
                            },
                            category: {
                                label: "Campaign category",
                                active: !1,
                                icon: ""
                            },
                            title: {
                                label: "Write title",
                                active: !1,
                                icon: ""
                            },
                            targetAmount: {
                                label: "Target Amount",
                                active: !1,
                                icon: ""
                            },
                            duration: {
                                label: "Duration",
                                active: !1,
                                icon: ""
                            },
                            gallery: {
                                label: "Gallery",
                                active: !1,
                                icon: ""
                            },
                            video: {
                                label: "Video",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            story: {
                                label: "Story",
                                active: !1,
                                icon: ""
                            },
                            other_info: {
                                label: "Other Information",
                                active: !1,
                                icon: ""
                            },
                            offer: {
                                label: "Add reward",
                                active: !1,
                                icon: ""
                            }
                        },
                        charityMenu: {
                            type: {
                                label: "Campaign type",
                                active: !1,
                                icon: ""
                            },
                            category: {
                                label: "Campaign category",
                                active: !1,
                                icon: ""
                            },
                            title: {
                                label: "Write title",
                                active: !1,
                                icon: ""
                            },
                            targetAmount: {
                                label: "Target Amount",
                                active: !1,
                                icon: ""
                            },
                            duration: {
                                label: "Duration",
                                active: !1,
                                icon: ""
                            },
                            gallery: {
                                label: "Gallery",
                                active: !1,
                                icon: ""
                            },
                            video: {
                                label: "Video",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            story: {
                                label: "Story",
                                active: !1,
                                icon: ""
                            },
                            other_info: {
                                label: "Other Information",
                                active: !1,
                                icon: ""
                            },
                            offer: {
                                label: "Add reward",
                                active: !1,
                                icon: ""
                            }
                        }
                    }
                }
            },
            r = {
                SET_ATTR_ACTIVE_STATUS: function(e, t) {
                    var o = t.attribute,
                        n = t.value;
                    e.campaignSidebar[e.campaignSidebar.activeMenu] && "undefined" !== e.campaignSidebar[e.campaignSidebar.activeMenu][o] && (e.campaignSidebar[e.campaignSidebar.activeMenu][o].active = n)
                },
                SET_ACTIVE_MENU: function(e, t) {
                    e.campaignSidebar.activeMenu = t
                },
                RESET_MENU: function(e) {
                    e.campaignSidebar.businessMenu = {
                        type: {
                            label: "Campaign type",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/type.png"
                        },
                        category: {
                            label: "Campaign category",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/category.png"
                        },
                        title: {
                            label: "Write title",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                        },
                        targetAmount: {
                            label: "Target Amount",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/target-amount.png"
                        },
                        duration: {
                            label: "Duration",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/duration.png"
                        },
                        gallery: {
                            label: "Gallery",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                        },
                        video: {
                            label: "Video",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                        },
                        story: {
                            label: "Story",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/story.png"
                        },
                        other_info: {
                            label: "Other Information",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                        },
                        offer: {
                            label: "Add reward",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/add-offer.png"
                        }
                    }, e.campaignSidebar.charityMenu = {
                        type: {
                            label: "Campaign type",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/type.png"
                        },
                        category: {
                            label: "Campaign category",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/category.png"
                        },
                        title: {
                            label: "Write title",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                        },
                        targetAmount: {
                            label: "Target Amount",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/target-amount.png"
                        },
                        duration: {
                            label: "Duration",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/duration.png"
                        },
                        gallery: {
                            label: "Gallery",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                        },
                        video: {
                            label: "Video",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                        },
                        story: {
                            label: "Story",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/story.png"
                        },
                        other_info: {
                            label: "Other Information",
                            active: !1,
                            icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                        }
                    }
                },
                RESET_ALL: function(e) {
                    e.campaignSidebar = {
                        activeMenu: "charityMenu",
                        businessMenu: {
                            type: {
                                label: "Campaign type",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/type.png"
                            },
                            category: {
                                label: "Campaign category",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/category.png"
                            },
                            title: {
                                label: "Write title",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                            },
                            targetAmount: {
                                label: "Target Amount",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/target-amount.png"
                            },
                            duration: {
                                label: "Duration",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/duration.png"
                            },
                            gallery: {
                                label: "Gallery",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            video: {
                                label: "Video",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            story: {
                                label: "Story",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/story.png"
                            },
                            other_info: {
                                label: "Other Information",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                            },
                            offer: {
                                label: "Add reward",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/add-offer.png"
                            }
                        },
                        charityMenu: {
                            type: {
                                label: "Campaign type",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/type.png"
                            },
                            category: {
                                label: "Campaign category",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/category.png"
                            },
                            title: {
                                label: "Write title",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                            },
                            targetAmount: {
                                label: "Target Amount",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/target-amount.png"
                            },
                            duration: {
                                label: "Duration",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/duration.png"
                            },
                            gallery: {
                                label: "Gallery",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            video: {
                                label: "Video",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/media.png"
                            },
                            story: {
                                label: "Story",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/story.png"
                            },
                            other_info: {
                                label: "Other Information",
                                active: !1,
                                icon: "https://app.crowdfundly.io/images/fundraise/write-title.png"
                            }
                        }
                    }
                }
            },
            d = {
                getActiveMenu: function(e) {
                    return e.campaignSidebar[e.campaignSidebar.activeMenu] ? e.campaignSidebar[e.campaignSidebar.activeMenu] : null
                },
                getBusinessSidebar: function(e) {
                    return e.campaignSidebar.businessMenu
                },
                getCharitySidebar: function(e) {
                    return e.campaignSidebar.charityMenu
                }
            },
            l = {
                setActiveMenu: function(e, t) {
                    (0, e.commit)("SET_ACTIVE_MENU", t.menu)
                },
                setAttrActiveStatus: function(e, t) {
                    (0, e.commit)("SET_ATTR_ACTIVE_STATUS", {
                        attribute: t.attribute,
                        value: t.value
                    })
                },
                reset: function(e) {
                    (0, e.commit)("RESET_ALL")
                },
                resetMenu: function(e) {
                    (0, e.commit)("RESET_MENU")
                }
            }
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "state", (function() {
            return r
        })), o.d(t, "mutations", (function() {
            return d
        })), o.d(t, "getters", (function() {
            return l
        })), o.d(t, "actions", (function() {
            return c
        }));
        var n = o(43),
            r = (o(73), o(6), o(5), o(3), o(106), function() {
                return {
                    genericError: {
                        message: null,
                        errors: []
                    }
                }
            }),
            d = {
                ADD_ERROR: function(e, t) {
                    e.genericError = t
                },
                CLEAR_ERROR: function(e) {
                    e.genericError = {
                        message: null,
                        errors: []
                    }
                }
            },
            l = {
                getFormattedGenericError: function(e) {
                    var t = Object.assign({}, e.genericError);
                    t.errors = Object.entries(t.errors);
                    var o = [];
                    if (t.errors.length) {
                        var r = !0,
                            d = !1,
                            l = void 0;
                        try {
                            for (var c, m = t.errors[Symbol.iterator](); !(r = (c = m.next()).done); r = !0) {
                                var _ = Object(n.a)(c.value, 2),
                                    h = (_[0], _[1]);
                                for (var i in h) h.hasOwnProperty(i) && o.push(h[i])
                            }
                        } catch (e) {
                            d = !0, l = e
                        } finally {
                            try {
                                r || null == m.return || m.return()
                            } finally {
                                if (d) throw l
                            }
                        }
                    }
                    return t.errors = o, t
                }
            },
            c = {
                setError: function(e, t) {
                    var o = e.commit,
                        n = t.message,
                        r = t.errors,
                        d = {
                            message: null,
                            errors: []
                        };
                    r && (d.errors = r), n && (d.message = n), o("ADD_ERROR", d)
                },
                clearError: function(e) {
                    (0, e.commit)("CLEAR_ERROR")
                }
            }
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "state", (function() {
            return n
        })), o.d(t, "mutations", (function() {
            return r
        })), o.d(t, "actions", (function() {
            return d
        })), o.d(t, "getters", (function() {
            return l
        }));
        var n = function() {
                return {
                    showSidebar: !0
                }
            },
            r = {
                TOGGLE_SIDEBAR: function(e) {
                    e.showSidebar = !e.showSidebar
                },
                HIDE_SIDEBAR: function(e) {
                    e.showSidebar = !0
                },
                SHOW_SIDEBAR: function(e) {
                    e.showSidebar = !1
                }
            },
            d = {
                toggleSidebar: function(e) {
                    (0, e.commit)("TOGGLE_SIDEBAR")
                },
                showSidebar: function(e) {
                    (0, e.commit)("SHOW_SIDEBAR")
                },
                hideSidebar: function(e) {
                    (0, e.commit)("HIDE_SIDEBAR")
                }
            },
            l = {
                showSidebar: function(e) {
                    return e.showSidebar
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.r(t),
            function(e) {
                o.d(t, "Socket", (function() {
                    return h
                }));
                var n = o(233),
                    r = o(234),
                    d = o.n(r);
                window.Pusher = d.a;
                var l = null,
                    c = function() {
                        return l
                    },
                    m = function() {
                        0
                    },
                    _ = function() {
                        null === c() && (m(), l = new n.a({
                            broadcaster: "pusher",
                            key: "THAT_APP_KEY",
                            cluster: "mt1",
                            wsHost: e.env.CHATBOX_BASE_URL ? e.env.CHATBOX_BASE_URL : "api.crowdfundly.io",
                            wsPort: 7001,
                            wssPort: 7001,
                            forceTLS: !0,
                            disableStats: !1,
                            encrypted: !1,
                            enabledTransports: ["ws", "wss"]
                        }), window.Socket = l)
                    },
                    h = {
                        Connect: _,
                        Connection: c,
                        IsConnected: function() {
                            return !!l && "connected" === l.connector.pusher.connection.state
                        }
                    }
            }.call(this, o(90))
    }, , , , function(e, t, o) {
        "use strict";
        var n = o(129);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".form-errorbox{display:block;margin:5px 0;color:#e41407;font-size:12px;padding:10px;background-color:#ffe8e8;border:1px solid #d3999f;text-align:left;border-radius:8px}.form-errorbox__title{color:#e41407;font-weight:600;font-size:13px;margin:2px 0}.form-errorbox__list{padding:0 0 0 15px;margin:5px 0;list-style:disc}.form-errorbox__list-item{padding:0;margin:0;list-style:disc;font-size:12px}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        var n = o(130);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".editor[data-v-a814ae74]{background-color:#fff;padding:20px;border-radius:5px;border:1px solid #ccc;box-shadow:0 10px 30px 0 rgba(0,0,0,.05)}.editor .container[data-v-a814ae74]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start}.editor .container[data-v-a814ae74],.editor .container .container[data-v-a814ae74]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.editor .container .container[data-v-a814ae74]{padding:0!important;width:100%;-webkit-box-align:center;align-items:center}.red-text[data-v-a814ae74]{color:red}.editor .container-relative[data-v-a814ae74]{position:relative}.editor .actions[data-v-a814ae74]{position:absolute;opacity:0;right:19px;top:4px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background-color:transparent;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.editor .container-relative:hover>.actions[data-v-a814ae74]{opacity:1}.editor .actions-btn[data-v-a814ae74]{border:none;border-radius:4px;background-color:#ccc;opacity:.9;color:#222;width:28px;height:28px;box-shadow:0 10px 10px 0 rgba(0,0,0,.1);margin-right:10px;font-size:.9rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.editor .actions-btn[data-v-a814ae74]:disabled{opacity:.3;pointer-events:none;cursor:not-allowed;box-shadow:none}@media (max-width:1199.98px){.editor .actions-btn[data-v-a814ae74]{width:26px;height:26px;margin-right:9px;font-size:.85rem}}@media (max-width:991.98px){.editor .actions-btn[data-v-a814ae74]{width:24px;height:24px;margin-right:8px;font-size:.8rem}}@media (max-width:767.98px){.editor .actions-btn[data-v-a814ae74]{width:22px;height:22px;margin-right:7px;font-size:.75rem}}@media (max-width:575.98px){.editor .actions-btn[data-v-a814ae74]{width:20px;height:20px;margin-right:6px;font-size:.7rem}}.editor .actions-btn[data-v-a814ae74]:last-child{margin-right:0}.editor .actions-btn[data-v-a814ae74]:hover{opacity:1;box-shadow:0 10px 10px 0 rgba(0,0,0,.2)}.editor .actions-btn[data-v-a814ae74]:active{opacity:.6}.editor .container img[data-v-a814ae74]{max-width:100%;border-radius:4px}.el-desc[data-v-a814ae74]{font-size:17px}.elem-root[data-v-a814ae74]{width:auto;min-width:60px;height:50px;border-radius:5px;padding:5px}.elements button[data-v-a814ae74]{margin-right:10px;position:relative}.text-input[data-v-a814ae74]{box-shadow:none!important;border:none!important}.editor-control[data-v-a814ae74]{font-family:Open Sans,sans-serif;padding-bottom:15px;padding-top:10px;margin-top:10px;position:relative}.editor-control__expand-handle[data-v-a814ae74]{border-top:2px dashed #f5f7fd;cursor:pointer;text-align:center}.editor-control__dashboard__button[data-v-a814ae74]{border-radius:8px;color:#666;cursor:pointer;-webkit-box-flex:1;flex:1;margin:5px 0 10px;padding:10px;text-align:center;background-color:transparent;border:1px solid transparent}.editor-control__dashboard__button[data-v-a814ae74]:focus{outline:none;border-color:#eee;box-shadow:0 5px 5px 0 rgba(0,0,0,.05)}@media (max-width:420.98px){.editor-control__dashboard__button[data-v-a814ae74]{margin:5px 0 10px;padding:5px}}.el-name[data-v-a814ae74]{font-size:20px;font-weight:600}@media (max-width:420.98px){.el-name[data-v-a814ae74]{font-size:15px}}.el-description[data-v-a814ae74]{font-size:14;font-weight:400}@media (max-width:767.98px){.el-description[data-v-a814ae74]{display:none}}.editor-control__expand-handle__button[data-v-a814ae74]{background-color:#fff;border:1px solid #f5f7fd;border-radius:11px;box-sizing:border-box;color:#ddd;display:block;font-size:14px;font-weight:600;left:0;line-height:1.5;margin:-13.5px auto 0;padding:0 20px;text-align:center;width:90px}.editor-control__expand-handle--add[data-v-a814ae74]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.editor-control__expand-handle--add[focus-within][data-v-a814ae74]{border-color:rgba(87,119,243,.5)}.editor-control__expand-handle--add[data-v-a814ae74]:focus-within{border-color:rgba(87,119,243,.5)}.editor-control__expand-handle--add .editor-control__expand-handle__button[data-v-a814ae74]{margin-right:auto;margin-left:auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.editor-control__expand-handle--add .editor-control__expand-handle__button[data-v-a814ae74]:focus{border-color:rgba(87,119,243,.5);color:#5777f3}.input-area[data-v-a814ae74]{width:100%;box-shadow:none;border:0;outline:none;overflow:hidden;resize:none}.story-paragraph[data-v-a814ae74]{font-size:16px;font-weight:400;line-height:24px}.story-heading[data-v-a814ae74]{font-size:20px;font-weight:600;line-height:30px}.story-blockquote[data-v-a814ae74]{border-left:2px solid #f5f7fd;color:#666;font-size:26px;font-weight:300;line-height:36px;padding-left:20px}.drop-point[data-v-a814ae74]{background-color:#f4f4f4;border:1px solid #f5f7fd;border-radius:4px;color:#333;cursor:pointer;padding:120px 30%;text-align:center}.image-picker-placeholder[data-v-a814ae74],.video-selector-placeholder[data-v-a814ae74]{font-size:25px}.story-video[data-v-a814ae74]{min-width:100%;padding:8px 10px;min-height:40px;-webkit-box-flex:1;flex:1;background-color:#fff;color:#666;border:1px solid #ddd;border-radius:8px;box-shadow:inset 0 2px 3px 0 rgba(0,0,0,.1);font-size:.95rem}.story-video[data-v-a814ae74]:focus{outline-color:transparent;border-color:rgba(132,207,202,.8);box-shadow:1px 1px 10px 1px rgba(132,207,202,.2)}.editor-block__container__delete-button[data-v-a814ae74]{background-color:#333;border-radius:4px;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;line-height:0;opacity:.4;padding:5px;position:absolute;right:15px;top:-5px}[data-v-a814ae74]::-webkit-input-placeholder{color:#747474}[data-v-a814ae74]::-moz-placeholder{color:#747474}[data-v-a814ae74]:-ms-input-placeholder{color:#747474}[data-v-a814ae74]::-ms-input-placeholder{color:#747474}[data-v-a814ae74]::placeholder{color:#747474}.delete-button[data-v-a814ae74]{border:none;background:#fff}textarea[data-v-a814ae74]{resize:none;overflow:hidden}.iframe[data-v-a814ae74]{border-radius:4px}@media (max-width:1199.98px){.story-heading[data-v-a814ae74]{font-size:19px;line-height:29px}.story-blockquote[data-v-a814ae74]{font-size:24px;line-height:32px;padding-left:18px}}@media (max-width:991.98px){.story-heading[data-v-a814ae74]{font-size:18px;line-height:28px}.story-blockquote[data-v-a814ae74]{font-size:22px;line-height:30px;padding-left:16px}}@media (max-width:767.98px){.story-heading[data-v-a814ae74]{font-size:17px;line-height:27px}.story-blockquote[data-v-a814ae74]{font-size:20px;line-height:28px;padding-left:14px}}@media (max-width:575.98px){.story-blockquote[data-v-a814ae74],.story-heading[data-v-a814ae74]{font-size:18px;line-height:26px}.story-blockquote[data-v-a814ae74]{padding-left:12px}}", ""]), e.exports = t
    }, function(e, t, o) {
        "use strict";
        var n = o(131);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".lightbox-gallery__modal[data-v-27029038]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.lightbox-gallery__modal-image[data-v-27029038]{width:100%;height:auto}.lightbox-gallery__modal-nav[data-v-27029038]{position:absolute;top:45%;left:2.5%;width:95%;height:50px;-webkit-box-pack:justify;justify-content:space-between}.lightbox-gallery__modal-nav[data-v-27029038],.lightbox-gallery__modal-nav-btn[data-v-27029038]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.lightbox-gallery__modal-nav-btn[data-v-27029038]{width:45px;height:45px;background-color:#f8f9fa;border-radius:50%;border:3px solid #ededed;-webkit-box-pack:center;justify-content:center;box-shadow:1px 1px 1px rgba(0,0,0,.15);cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.lightbox-gallery__modal-nav-btn[data-v-27029038]:hover{background-color:#ec7070;color:#fff}.lightbox-gallery__modal-nav-btn-icon[data-v-27029038]{font-size:19px;line-height:1}", ""]), e.exports = t
    }, , , , , function(e, t, o) {
        "use strict";
        var n = o(132);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".datetimepicker .datepicker.right{right:unset!important}", ""]), e.exports = t
    }, , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(133);
        o.n(n).a
    }, function(e, t, o) {
        (t = o(30)(!1)).push([e.i, ".v-player[data-v-5c363c4c]{width:100%;position:relative;overflow:hidden;padding-top:56.25%;background-color:transparent;border-radius:5px;box-shadow:0 5px 20px 0 rgb(0 0 0/15%)}.v-player__iframe[data-v-5c363c4c]{position:absolute;top:0;left:0;bottom:0;right:0;border:none;outline:transparent;border-radius:5px}.v-player__iframe[data-v-5c363c4c],.v-player__iframe video[data-v-5c363c4c]{width:100%;height:100%}.v-player__video[data-v-5c363c4c]{width:100%;height:100%;border:none;outline:transparent;border-radius:5px}.v-player__content[data-v-5c363c4c],.v-player__video[data-v-5c363c4c]{position:absolute;top:0;left:0;bottom:0;right:0}.v-player__content[data-v-5c363c4c]{padding:15px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-align:center}.v-player__content-icon[data-v-5c363c4c]{margin-bottom:0;color:#afafaf;font-size:2rem}.v-player__content-strong[data-v-5c363c4c]{font-size:1.2rem;color:#fff}.v-player__content-text[data-v-5c363c4c]{color:#fff;font-size:.9rem;margin-bottom:0}.v-player__content-link[data-v-5c363c4c]{font-size:.8rem;color:#fff}@media screen and (max-width:1200px){.v-player__content-strong[data-v-5c363c4c]{font-size:1.15rem}.v-player__content-text[data-v-5c363c4c]{font-size:.88rem}.v-player__content-link[data-v-5c363c4c]{font-size:.78rem}}@media screen and (max-width:992px){.v-player__content-strong[data-v-5c363c4c]{font-size:1.1rem}.v-player__content-text[data-v-5c363c4c]{font-size:.86rem}.v-player__content-link[data-v-5c363c4c]{font-size:.76rem}}@media screen and (max-width:768px){.v-player__content-strong[data-v-5c363c4c]{font-size:1.05rem}.v-player__content-text[data-v-5c363c4c]{font-size:.84rem}.v-player__content-link[data-v-5c363c4c]{font-size:.74rem}}@media screen and (max-width:576px){.v-player__content-strong[data-v-5c363c4c]{font-size:1rem}.v-player__content-text[data-v-5c363c4c]{font-size:.82rem}.v-player__content-link[data-v-5c363c4c]{font-size:.72rem}}@media screen and (max-width:320px){.v-player__content-strong[data-v-5c363c4c]{font-size:.95rem}.v-player__content-text[data-v-5c363c4c]{font-size:.8rem}.v-player__content-link[data-v-5c363c4c]{font-size:.7rem}}@media screen and (max-width:280px){.v-player__content-strong[data-v-5c363c4c]{font-size:.9rem}.v-player__content-text[data-v-5c363c4c]{font-size:.78rem}.v-player__content-link[data-v-5c363c4c]{font-size:.68rem}}", ""]), e.exports = t
    }],
    [
        [246, 2, 0]
    ]
]);