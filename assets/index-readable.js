;(function () {
  const o = document.createElement("link").relList
  if (o && o.supports && o.supports("modulepreload")) return
  for (const h of document.querySelectorAll(
    'link[rel="modulepreload"]'
  ))
    l(h)
  new MutationObserver((h) => {
    for (const c of h)
      if (c.type === "childList")
        for (const u of c.addedNodes)
          if (u.tagName === "LINK" && u.rel === "modulepreload") l(u)
  }).observe(document, {
    childList: true,
    subtree: true,
  })
  function a(h) {
    const c = {}
    return (
      h.integrity && (c.integrity = h.integrity),
      h.referrerPolicy && (c.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    )
  }
  function l(h) {
    if (h.ep) return
    h.ep = true
    const c = a(h)
    fetch(h.href, c)
  }
})()
function wi(i) {
  return i &&
    i.__esModule &&
    Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i
}
var dt = {
  exports: {},
}
var Gt
function yi() {
  return (
    Gt ||
      ((Gt = 1),
      (function (i, o) {
        ;(function (l, h) {
          i.exports = h()
        })(window, function () {
          return (function (a) {
            var l = {}
            function h(c) {
              if (l[c]) return l[c].exports
              var u = (l[c] = {
                i: c,
                l: false,
                exports: {},
              })
              return (
                a[c].call(u.exports, u, u.exports, h),
                (u.l = true),
                u.exports
              )
            }
            return (
              (h.m = a),
              (h.c = l),
              (h.d = function (c, u, v) {
                h.o(c, u) ||
                  Object.defineProperty(c, u, {
                    enumerable: true,
                    get: v,
                  })
              }),
              (h.r = function (c) {
                if (typeof Symbol < "u" && Symbol.toStringTag)
                  Object.defineProperty(c, Symbol.toStringTag, {
                    value: "Module",
                  })
                Object.defineProperty(c, "__esModule", {
                  value: true,
                })
              }),
              (h.t = function (c, u) {
                if (
                  (u & 1 && (c = h(c)),
                  u & 8 ||
                    (u & 4 &&
                      typeof c == "object" &&
                      c &&
                      c.__esModule))
                )
                  return c
                var v = Object.create(null)
                if (
                  (h.r(v),
                  Object.defineProperty(v, "default", {
                    enumerable: true,
                    value: c,
                  }),
                  u & 2 && typeof c != "string")
                )
                  for (var g in c)
                    h.d(
                      v,
                      g,
                      function (f) {
                        return c[f]
                      }.bind(null, g)
                    )
                return v
              }),
              (h.n = function (c) {
                var u =
                  c && c.__esModule
                    ? function () {
                        return c.default
                      }
                    : function () {
                        return c
                      }
                return h.d(u, "a", u), u
              }),
              (h.o = function (c, u) {
                return Object.prototype.hasOwnProperty.call(c, u)
              }),
              (h.p = ""),
              h((h.s = 2))
            )
          })([
            function (a, l, h) {
              var c =
                (this && this.__extends) ||
                (function () {
                  var _ = function (m, y) {
                    return (
                      (_ =
                        Object.setPrototypeOf ||
                        ({
                          __proto__: [],
                        } instanceof Array &&
                          function (T, O) {
                            T.__proto__ = O
                          }) ||
                        function (T, O) {
                          for (var N in O)
                            if (O.hasOwnProperty(N)) T[N] = O[N]
                        }),
                      _(m, y)
                    )
                  }
                  return function (m, y) {
                    _(m, y)
                    function T() {
                      this.constructor = m
                    }
                    m.prototype =
                      y === null
                        ? Object.create(y)
                        : ((T.prototype = y.prototype), new T())
                  }
                })()
              Object.defineProperty(l, "__esModule", {
                value: true,
              })
              var u = 256,
                v = (function () {
                  function _(m) {
                    if (m === void 0) m = "="
                    this._paddingCharacter = m
                  }
                  return (
                    (_.prototype.encodedLength = function (m) {
                      return this._paddingCharacter
                        ? (((m + 2) / 3) * 4) | 0
                        : ((m * 8 + 5) / 6) | 0
                    }),
                    (_.prototype.encode = function (m) {
                      for (
                        var y = "", T = 0;
                        T < m.length - 2;
                        T += 3
                      ) {
                        var O =
                          (m[T] << 16) | (m[T + 1] << 8) | m[T + 2]
                        y += this._encodeByte((O >>> 18) & 63)
                        y += this._encodeByte((O >>> 12) & 63)
                        y += this._encodeByte((O >>> 6) & 63)
                        y += this._encodeByte((O >>> 0) & 63)
                      }
                      var N = m.length - T
                      if (N > 0) {
                        var O =
                          (m[T] << 16) | (N === 2 ? m[T + 1] << 8 : 0)
                        y += this._encodeByte((O >>> 18) & 63)
                        y += this._encodeByte((O >>> 12) & 63)
                        if (N === 2) {
                          y += this._encodeByte((O >>> 6) & 63)
                        } else {
                          y += this._paddingCharacter || ""
                        }
                        y += this._paddingCharacter || ""
                      }
                      return y
                    }),
                    (_.prototype.maxDecodedLength = function (m) {
                      return this._paddingCharacter
                        ? ((m / 4) * 3) | 0
                        : ((m * 6 + 7) / 8) | 0
                    }),
                    (_.prototype.decodedLength = function (m) {
                      return this.maxDecodedLength(
                        m.length - this._getPaddingLength(m)
                      )
                    }),
                    (_.prototype.decode = function (m) {
                      if (m.length === 0) return new Uint8Array(0)
                      for (
                        var y = this._getPaddingLength(m),
                          T = m.length - y,
                          O = new Uint8Array(
                            this.maxDecodedLength(T)
                          ),
                          N = 0,
                          j = 0,
                          D = 0,
                          Q = 0,
                          F = 0,
                          Y = 0,
                          P = 0;
                        j < T - 4;
                        j += 4
                      ) {
                        Q = this._decodeChar(m.charCodeAt(j + 0))
                        F = this._decodeChar(m.charCodeAt(j + 1))
                        Y = this._decodeChar(m.charCodeAt(j + 2))
                        P = this._decodeChar(m.charCodeAt(j + 3))
                        O[N++] = (Q << 2) | (F >>> 4)
                        O[N++] = (F << 4) | (Y >>> 2)
                        O[N++] = (Y << 6) | P
                        D |= Q & u
                        D |= F & u
                        D |= Y & u
                        D |= P & u
                      }
                      if (
                        (j < T - 1 &&
                          ((Q = this._decodeChar(m.charCodeAt(j))),
                          (F = this._decodeChar(m.charCodeAt(j + 1))),
                          (O[N++] = (Q << 2) | (F >>> 4)),
                          (D |= Q & u),
                          (D |= F & u)),
                        j < T - 2 &&
                          ((Y = this._decodeChar(
                            m.charCodeAt(j + 2)
                          )),
                          (O[N++] = (F << 4) | (Y >>> 2)),
                          (D |= Y & u)),
                        j < T - 3 &&
                          ((P = this._decodeChar(
                            m.charCodeAt(j + 3)
                          )),
                          (O[N++] = (Y << 6) | P),
                          (D |= P & u)),
                        D !== 0)
                      )
                        throw new Error(
                          "Base64Coder: incorrect characters for decoding"
                        )
                      return O
                    }),
                    (_.prototype._encodeByte = function (m) {
                      var y = m
                      return (
                        (y += 65),
                        (y += ((25 - m) >>> 8) & 6),
                        (y += ((51 - m) >>> 8) & -75),
                        (y += ((61 - m) >>> 8) & -15),
                        (y += ((62 - m) >>> 8) & 3),
                        String.fromCharCode(y)
                      )
                    }),
                    (_.prototype._decodeChar = function (m) {
                      var y = u
                      return (
                        (y +=
                          (((42 - m) & (m - 44)) >>> 8) &
                          (-u + m - 43 + 62)),
                        (y +=
                          (((46 - m) & (m - 48)) >>> 8) &
                          (-u + m - 47 + 63)),
                        (y +=
                          (((47 - m) & (m - 58)) >>> 8) &
                          (-u + m - 48 + 52)),
                        (y +=
                          (((64 - m) & (m - 91)) >>> 8) &
                          (-u + m - 65 + 0)),
                        (y +=
                          (((96 - m) & (m - 123)) >>> 8) &
                          (-u + m - 97 + 26)),
                        y
                      )
                    }),
                    (_.prototype._getPaddingLength = function (m) {
                      var y = 0
                      if (this._paddingCharacter) {
                        for (
                          var T = m.length - 1;
                          T >= 0 && m[T] === this._paddingCharacter;
                          T--
                        )
                          y++
                        if (m.length < 4 || y > 2)
                          throw new Error(
                            "Base64Coder: incorrect padding"
                          )
                      }
                      return y
                    }),
                    _
                  )
                })()
              l.Coder = v
              var g = new v()
              function f(_) {
                return g.encode(_)
              }
              l.encode = f
              function w(_) {
                return g.decode(_)
              }
              l.decode = w
              var p = (function (_) {
                c(m, _)
                function m() {
                  return (
                    (_ !== null && _.apply(this, arguments)) || this
                  )
                }
                return (
                  (m.prototype._encodeByte = function (y) {
                    var T = y
                    return (
                      (T += 65),
                      (T += ((25 - y) >>> 8) & 6),
                      (T += ((51 - y) >>> 8) & -75),
                      (T += ((61 - y) >>> 8) & -13),
                      (T += ((62 - y) >>> 8) & 49),
                      String.fromCharCode(T)
                    )
                  }),
                  (m.prototype._decodeChar = function (y) {
                    var T = u
                    return (
                      (T +=
                        (((44 - y) & (y - 46)) >>> 8) &
                        (-u + y - 45 + 62)),
                      (T +=
                        (((94 - y) & (y - 96)) >>> 8) &
                        (-u + y - 95 + 63)),
                      (T +=
                        (((47 - y) & (y - 58)) >>> 8) &
                        (-u + y - 48 + 52)),
                      (T +=
                        (((64 - y) & (y - 91)) >>> 8) &
                        (-u + y - 65 + 0)),
                      (T +=
                        (((96 - y) & (y - 123)) >>> 8) &
                        (-u + y - 97 + 26)),
                      T
                    )
                  }),
                  m
                )
              })(v)
              l.URLSafeCoder = p
              var S = new p()
              function E(_) {
                return S.encode(_)
              }
              l.encodeURLSafe = E
              function k(_) {
                return S.decode(_)
              }
              l.decodeURLSafe = k
              l.encodedLength = function (_) {
                return g.encodedLength(_)
              }
              l.maxDecodedLength = function (_) {
                return g.maxDecodedLength(_)
              }
              l.decodedLength = function (_) {
                return g.decodedLength(_)
              }
            },
            function (a, l, h) {
              Object.defineProperty(l, "__esModule", {
                value: true,
              })
              var c = "utf8: invalid string",
                u = "utf8: invalid source encoding"
              function v(w) {
                for (
                  var p = new Uint8Array(g(w)), S = 0, E = 0;
                  E < w.length;
                  E++
                ) {
                  var k = w.charCodeAt(E)
                  if (k < 128) {
                    p[S++] = k
                  } else {
                    if (k < 2048) {
                      p[S++] = 192 | (k >> 6)
                      p[S++] = 128 | (k & 63)
                    } else {
                      if (k < 55296) {
                        p[S++] = 224 | (k >> 12)
                        p[S++] = 128 | ((k >> 6) & 63)
                        p[S++] = 128 | (k & 63)
                      } else {
                        E++
                        k = (k & 1023) << 10
                        k |= w.charCodeAt(E) & 1023
                        k += 65536
                        p[S++] = 240 | (k >> 18)
                        p[S++] = 128 | ((k >> 12) & 63)
                        p[S++] = 128 | ((k >> 6) & 63)
                        p[S++] = 128 | (k & 63)
                      }
                    }
                  }
                }
                return p
              }
              l.encode = v
              function g(w) {
                for (var p = 0, S = 0; S < w.length; S++) {
                  var E = w.charCodeAt(S)
                  if (E < 128) p += 1
                  else if (E < 2048) p += 2
                  else if (E < 55296) p += 3
                  else if (E <= 57343) {
                    if (S >= w.length - 1) throw new Error(c)
                    S++
                    p += 4
                  } else throw new Error(c)
                }
                return p
              }
              l.encodedLength = g
              function f(w) {
                for (var p = [], S = 0; S < w.length; S++) {
                  var E = w[S]
                  if (E & 128) {
                    var k = void 0
                    if (E < 224) {
                      if (S >= w.length) throw new Error(u)
                      var _ = w[++S]
                      if ((_ & 192) !== 128) throw new Error(u)
                      E = ((E & 31) << 6) | (_ & 63)
                      k = 128
                    } else if (E < 240) {
                      if (S >= w.length - 1) throw new Error(u)
                      var _ = w[++S],
                        m = w[++S]
                      if ((_ & 192) !== 128 || (m & 192) !== 128)
                        throw new Error(u)
                      E =
                        ((E & 15) << 12) | ((_ & 63) << 6) | (m & 63)
                      k = 2048
                    } else if (E < 248) {
                      if (S >= w.length - 2) throw new Error(u)
                      var _ = w[++S],
                        m = w[++S],
                        y = w[++S]
                      if (
                        (_ & 192) !== 128 ||
                        (m & 192) !== 128 ||
                        (y & 192) !== 128
                      )
                        throw new Error(u)
                      E =
                        ((E & 15) << 18) |
                        ((_ & 63) << 12) |
                        ((m & 63) << 6) |
                        (y & 63)
                      k = 65536
                    } else throw new Error(u)
                    if (E < k || (E >= 55296 && E <= 57343))
                      throw new Error(u)
                    if (E >= 65536) {
                      if (E > 1114111) throw new Error(u)
                      E -= 65536
                      p.push(String.fromCharCode(55296 | (E >> 10)))
                      E = 56320 | (E & 1023)
                    }
                  }
                  p.push(String.fromCharCode(E))
                }
                return p.join("")
              }
              l.decode = f
            },
            function (a, l, h) {
              a.exports = h(3).default
            },
            function (a, l, h) {
              h.r(l)
              class c {
                constructor(e, t) {
                  this.lastId = 0
                  this.prefix = e
                  this.name = t
                }
                create(e) {
                  this.lastId++
                  var t = this.lastId,
                    r = this.prefix + t,
                    s = this.name + "[" + t + "]",
                    d = false,
                    b = function () {
                      d || (e.apply(null, arguments), (d = true))
                    }
                  return (
                    (this[t] = b),
                    {
                      number: t,
                      id: r,
                      name: s,
                      callback: b,
                    }
                  )
                }
                remove(e) {
                  delete this[e.number]
                }
              }
              var u = new c(
                  "_pusher_script_",
                  "Pusher.ScriptReceivers"
                ),
                v = {
                  VERSION: "8.4.0",
                  PROTOCOL: 7,
                  wsPort: 80,
                  wssPort: 443,
                  wsPath: "",
                  httpHost: "sockjs.pusher.com",
                  httpPort: 80,
                  httpsPort: 443,
                  httpPath: "/pusher",
                  stats_host: "stats.pusher.com",
                  authEndpoint: "/pusher/auth",
                  authTransport: "ajax",
                  activityTimeout: 12e4,
                  pongTimeout: 3e4,
                  unavailableTimeout: 1e4,
                  userAuthentication: {
                    endpoint: "/pusher/user-auth",
                    transport: "ajax",
                  },
                  channelAuthorization: {
                    endpoint: "/pusher/auth",
                    transport: "ajax",
                  },
                  cdn_http: "http://js.pusher.com",
                  cdn_https: "https://js.pusher.com",
                  dependency_suffix: "",
                },
                g = v
              class f {
                constructor(e) {
                  this.options = e
                  this.receivers = e.receivers || u
                  this.loading = {}
                }
                load(e, t, r) {
                  var s = this
                  if (s.loading[e] && s.loading[e].length > 0)
                    s.loading[e].push(r)
                  else {
                    s.loading[e] = [r]
                    var d = R.createScriptRequest(s.getPath(e, t)),
                      b = s.receivers.create(function (C) {
                        if ((s.receivers.remove(b), s.loading[e])) {
                          var L = s.loading[e]
                          delete s.loading[e]
                          for (
                            var A = function (U) {
                                U || d.cleanup()
                              },
                              B = 0;
                            B < L.length;
                            B++
                          )
                            L[B](C, A)
                        }
                      })
                    d.send(b)
                  }
                }
                getRoot(e) {
                  var t,
                    r = R.getDocument().location.protocol
                  return (
                    (e && e.useTLS) || r === "https:"
                      ? (t = this.options.cdn_https)
                      : (t = this.options.cdn_http),
                    t.replace(/\/*$/, "") + "/" + this.options.version
                  )
                }
                getPath(e, t) {
                  return (
                    this.getRoot(t) +
                    "/" +
                    e +
                    this.options.suffix +
                    ".js"
                  )
                }
              }
              var w = new c(
                  "_pusher_dependencies",
                  "Pusher.DependenciesReceivers"
                ),
                p = new f({
                  cdn_http: g.cdn_http,
                  cdn_https: g.cdn_https,
                  version: g.VERSION,
                  suffix: g.dependency_suffix,
                  receivers: w,
                })
              const S = {
                baseUrl: "https://pusher.com",
                urls: {
                  authenticationEndpoint: {
                    path: "/docs/channels/server_api/authenticating_users",
                  },
                  authorizationEndpoint: {
                    path: "/docs/channels/server_api/authorizing-users/",
                  },
                  javascriptQuickStart: {
                    path: "/docs/javascript_quick_start",
                  },
                  triggeringClientEvents: {
                    path: "/docs/client_api_guide/client_events#trigger-events",
                  },
                  encryptedChannelSupport: {
                    fullUrl:
                      "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support",
                  },
                },
              }
              var k = {
                  buildLogSuffix: function (n) {
                    const e = "See:",
                      t = S.urls[n]
                    if (!t) return ""
                    let r
                    return (
                      t.fullUrl
                        ? (r = t.fullUrl)
                        : t.path && (r = S.baseUrl + t.path),
                      r ? `${e} ${r}` : ""
                    )
                  },
                },
                _
              ;(function (n) {
                n.UserAuthentication = "user-authentication"
                n.ChannelAuthorization = "channel-authorization"
              })(_ || (_ = {}))
              class m extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class y extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class T extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class O extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class N extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class j extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class D extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class Q extends Error {
                constructor(e) {
                  super(e)
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              class F extends Error {
                constructor(e, t) {
                  super(t)
                  this.status = e
                  Object.setPrototypeOf(this, new.target.prototype)
                }
              }
              var P = function (n, e, t, r, s) {
                const d = R.createXHR()
                d.open("POST", t.endpoint, true)
                d.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded"
                )
                for (var b in t.headers)
                  d.setRequestHeader(b, t.headers[b])
                if (t.headersProvider != null) {
                  let C = t.headersProvider()
                  for (var b in C) d.setRequestHeader(b, C[b])
                }
                return (
                  (d.onreadystatechange = function () {
                    if (d.readyState === 4)
                      if (d.status === 200) {
                        let C,
                          L = false
                        try {
                          C = JSON.parse(d.responseText)
                          L = true
                        } catch {
                          s(
                            new F(
                              200,
                              `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${
                                d.responseText
                              }`
                            ),
                            null
                          )
                        }
                        if (L) s(null, C)
                      } else {
                        let C = ""
                        switch (r) {
                          case _.UserAuthentication:
                            C = k.buildLogSuffix(
                              "authenticationEndpoint"
                            )
                            break
                          case _.ChannelAuthorization:
                            C = `Clients must be authorized to join private or presence channels. ${k.buildLogSuffix(
                              "authorizationEndpoint"
                            )}`
                            break
                        }
                        s(
                          new F(
                            d.status,
                            `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${
                              d.status
                            } from ${t.endpoint}. ${C}`
                          ),
                          null
                        )
                      }
                  }),
                  d.send(e),
                  d
                )
              }
              function $(n) {
                return ke(Ce(n))
              }
              var I = String.fromCharCode,
                Z =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                se = function (n) {
                  var e = n.charCodeAt(0)
                  return e < 128
                    ? n
                    : e < 2048
                    ? I(192 | (e >>> 6)) + I(128 | (e & 63))
                    : I(224 | ((e >>> 12) & 15)) +
                      I(128 | ((e >>> 6) & 63)) +
                      I(128 | (e & 63))
                },
                Ce = function (n) {
                  return n.replace(/[^\x00-\x7F]/g, se)
                },
                pe = function (n) {
                  var e = [0, 2, 1][n.length % 3],
                    t =
                      (n.charCodeAt(0) << 16) |
                      ((n.length > 1 ? n.charCodeAt(1) : 0) << 8) |
                      (n.length > 2 ? n.charCodeAt(2) : 0),
                    r = [
                      Z.charAt(t >>> 18),
                      Z.charAt((t >>> 12) & 63),
                      e >= 2 ? "=" : Z.charAt((t >>> 6) & 63),
                      e >= 1 ? "=" : Z.charAt(t & 63),
                    ]
                  return r.join("")
                },
                ke =
                  window.btoa ||
                  function (n) {
                    return n.replace(/[\s\S]{1,3}/g, pe)
                  }
              class pn {
                constructor(e, t, r, s) {
                  this.clear = t
                  this.timer = e(() => {
                    if (this.timer) this.timer = s(this.timer)
                  }, r)
                }
                isRunning() {
                  return this.timer !== null
                }
                ensureAborted() {
                  if (this.timer) {
                    this.clear(this.timer)
                    this.timer = null
                  }
                }
              }
              var St = pn
              function mn(n) {
                window.clearTimeout(n)
              }
              function gn(n) {
                window.clearInterval(n)
              }
              class me extends St {
                constructor(e, t) {
                  super(setTimeout, mn, e, function (r) {
                    return t(), null
                  })
                }
              }
              class bn extends St {
                constructor(e, t) {
                  super(setInterval, gn, e, function (r) {
                    return t(), r
                  })
                }
              }
              var vn = {
                  now() {
                    return Date.now
                      ? Date.now()
                      : new Date().valueOf()
                  },
                  defer(n) {
                    return new me(0, n)
                  },
                  method(n, ...e) {
                    var t = Array.prototype.slice.call(arguments, 1)
                    return function (r) {
                      return r[n].apply(r, t.concat(arguments))
                    }
                  },
                },
                X = vn
              function V(n, ...e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t]
                  for (var s in r)
                    if (
                      r[s] &&
                      r[s].constructor &&
                      r[s].constructor === Object
                    ) {
                      n[s] = V(n[s] || {}, r[s])
                    } else {
                      n[s] = r[s]
                    }
                }
                return n
              }
              function wn() {
                for (
                  var n = ["Pusher"], e = 0;
                  e < arguments.length;
                  e++
                )
                  if (typeof arguments[e] == "string") {
                    n.push(arguments[e])
                  } else {
                    n.push(qe(arguments[e]))
                  }
                return n.join(" : ")
              }
              function _t(n, e) {
                var t = Array.prototype.indexOf
                if (n === null) return -1
                if (t && n.indexOf === t) return n.indexOf(e)
                for (var r = 0, s = n.length; r < s; r++)
                  if (n[r] === e) return r
                return -1
              }
              function oe(n, e) {
                for (var t in n)
                  if (Object.prototype.hasOwnProperty.call(n, t))
                    e(n[t], t, n)
              }
              function Ct(n) {
                var e = []
                return (
                  oe(n, function (t, r) {
                    e.push(r)
                  }),
                  e
                )
              }
              function yn(n) {
                var e = []
                return (
                  oe(n, function (t) {
                    e.push(t)
                  }),
                  e
                )
              }
              function Re(n, e, t) {
                for (var r = 0; r < n.length; r++)
                  e.call(t || window, n[r], r, n)
              }
              function kt(n, e) {
                for (var t = [], r = 0; r < n.length; r++)
                  t.push(e(n[r], r, n, t))
                return t
              }
              function Sn(n, e) {
                var t = {}
                return (
                  oe(n, function (r, s) {
                    t[s] = e(r)
                  }),
                  t
                )
              }
              function xt(n, e) {
                e =
                  e ||
                  function (s) {
                    return !!s
                  }
                for (var t = [], r = 0; r < n.length; r++)
                  if (e(n[r], r, n, t)) t.push(n[r])
                return t
              }
              function Et(n, e) {
                var t = {}
                return (
                  oe(n, function (r, s) {
                    if ((e && e(r, s, n, t)) || r) t[s] = r
                  }),
                  t
                )
              }
              function _n(n) {
                var e = []
                return (
                  oe(n, function (t, r) {
                    e.push([r, t])
                  }),
                  e
                )
              }
              function Pt(n, e) {
                for (var t = 0; t < n.length; t++)
                  if (e(n[t], t, n)) return true
                return false
              }
              function Cn(n, e) {
                for (var t = 0; t < n.length; t++)
                  if (!e(n[t], t, n)) return false
                return true
              }
              function kn(n) {
                return Sn(n, function (e) {
                  return (
                    typeof e == "object" && (e = qe(e)),
                    encodeURIComponent($(e.toString()))
                  )
                })
              }
              function xn(n) {
                var e = Et(n, function (r) {
                    return r !== void 0
                  }),
                  t = kt(_n(kn(e)), X.method("join", "=")).join("&")
                return t
              }
              function En(n) {
                var e = [],
                  t = []
                return (function r(s, d) {
                  var b, C, L
                  switch (typeof s) {
                    case "object":
                      if (!s) return null
                      for (b = 0; b < e.length; b += 1)
                        if (e[b] === s)
                          return {
                            $ref: t[b],
                          }
                      if (
                        (e.push(s),
                        t.push(d),
                        Object.prototype.toString.apply(s) ===
                          "[object Array]")
                      )
                        for (L = [], b = 0; b < s.length; b += 1)
                          L[b] = r(s[b], d + "[" + b + "]")
                      else {
                        L = {}
                        for (C in s)
                          if (
                            Object.prototype.hasOwnProperty.call(s, C)
                          )
                            L[C] = r(
                              s[C],
                              d + "[" + JSON.stringify(C) + "]"
                            )
                      }
                      return L
                    case "number":
                    case "string":
                    case "boolean":
                      return s
                  }
                })(n, "$")
              }
              function qe(n) {
                try {
                  return JSON.stringify(n)
                } catch {
                  return JSON.stringify(En(n))
                }
              }
              class Pn {
                constructor() {
                  this.globalLog = (e) => {
                    if (window.console && window.console.log)
                      window.console.log(e)
                  }
                }
                debug(...e) {
                  this.log(this.globalLog, e)
                }
                warn(...e) {
                  this.log(this.globalLogWarn, e)
                }
                error(...e) {
                  this.log(this.globalLogError, e)
                }
                globalLogWarn(e) {
                  if (window.console && window.console.warn) {
                    window.console.warn(e)
                  } else {
                    this.globalLog(e)
                  }
                }
                globalLogError(e) {
                  if (window.console && window.console.error) {
                    window.console.error(e)
                  } else {
                    this.globalLogWarn(e)
                  }
                }
                log(e, ...t) {
                  var r = wn.apply(this, arguments)
                  if (lt.log) {
                    lt.log(r)
                  } else {
                    if (lt.logToConsole) e.bind(this)(r)
                  }
                }
              }
              var M = new Pn(),
                Tn = function (n, e, t, r, s) {
                  if (
                    t.headers !== void 0 ||
                    t.headersProvider != null
                  )
                    M.warn(
                      `To send headers with the ${r.toString()} request, you must use AJAX, rather than JSONP.`
                    )
                  var d = n.nextAuthCallbackID.toString()
                  n.nextAuthCallbackID++
                  var b = n.getDocument(),
                    C = b.createElement("script")
                  n.auth_callbacks[d] = function (B) {
                    s(null, B)
                  }
                  var L = "Pusher.auth_callbacks['" + d + "']"
                  C.src =
                    t.endpoint +
                    "?callback=" +
                    encodeURIComponent(L) +
                    "&" +
                    e
                  var A =
                    b.getElementsByTagName("head")[0] ||
                    b.documentElement
                  A.insertBefore(C, A.firstChild)
                },
                Ln = Tn
              class Rn {
                constructor(e) {
                  this.src = e
                }
                send(e) {
                  var t = this,
                    r = "Error loading " + t.src
                  t.script = document.createElement("script")
                  t.script.id = e.id
                  t.script.src = t.src
                  t.script.type = "text/javascript"
                  t.script.charset = "UTF-8"
                  if (t.script.addEventListener) {
                    t.script.onerror = function () {
                      e.callback(r)
                    }
                    t.script.onload = function () {
                      e.callback(null)
                    }
                  } else {
                    t.script.onreadystatechange = function () {
                      if (
                        t.script.readyState === "loaded" ||
                        t.script.readyState === "complete"
                      )
                        e.callback(null)
                    }
                  }
                  if (
                    t.script.async === void 0 &&
                    document.attachEvent &&
                    /opera/i.test(navigator.userAgent)
                  ) {
                    t.errorScript = document.createElement("script")
                    t.errorScript.id = e.id + "_error"
                    t.errorScript.text = e.name + "('" + r + "');"
                    t.script.async = t.errorScript.async = false
                  } else {
                    t.script.async = true
                  }
                  var s = document.getElementsByTagName("head")[0]
                  s.insertBefore(t.script, s.firstChild)
                  if (t.errorScript)
                    s.insertBefore(
                      t.errorScript,
                      t.script.nextSibling
                    )
                }
                cleanup() {
                  if (this.script) {
                    this.script.onload = this.script.onerror = null
                    this.script.onreadystatechange = null
                  }
                  if (this.script && this.script.parentNode)
                    this.script.parentNode.removeChild(this.script)
                  if (this.errorScript && this.errorScript.parentNode)
                    this.errorScript.parentNode.removeChild(
                      this.errorScript
                    )
                  this.script = null
                  this.errorScript = null
                }
              }
              class In {
                constructor(e, t) {
                  this.url = e
                  this.data = t
                }
                send(e) {
                  if (!this.request) {
                    var t = xn(this.data),
                      r = this.url + "/" + e.number + "?" + t
                    this.request = R.createScriptRequest(r)
                    this.request.send(e)
                  }
                }
                cleanup() {
                  if (this.request) this.request.cleanup()
                }
              }
              var An = function (n, e) {
                  return function (t, r) {
                    var s = "http" + (e ? "s" : "") + "://",
                      d =
                        s +
                        (n.host || n.options.host) +
                        n.options.path,
                      b = R.createJSONPRequest(d, t),
                      C = R.ScriptReceivers.create(function (L, A) {
                        u.remove(C)
                        b.cleanup()
                        if (A && A.host) n.host = A.host
                        if (r) r(L, A)
                      })
                    b.send(C)
                  }
                },
                On = {
                  name: "jsonp",
                  getAgent: An,
                },
                Bn = On
              function Ze(n, e, t) {
                var r = n + (e.useTLS ? "s" : ""),
                  s = e.useTLS ? e.hostTLS : e.hostNonTLS
                return r + "://" + s + t
              }
              function et(n, e) {
                var t = "/app/" + n,
                  r =
                    "?protocol=" +
                    g.PROTOCOL +
                    "&client=js&version=" +
                    g.VERSION +
                    (e ? "&" + e : "")
                return t + r
              }
              var jn = {
                  getInitial: function (n, e) {
                    var t = (e.httpPath || "") + et(n, "flash=false")
                    return Ze("ws", e, t)
                  },
                },
                Nn = {
                  getInitial: function (n, e) {
                    var t = (e.httpPath || "/pusher") + et(n)
                    return Ze("http", e, t)
                  },
                },
                Mn = {
                  getInitial: function (n, e) {
                    return Ze("http", e, e.httpPath || "/pusher")
                  },
                  getPath: function (n, e) {
                    return et(n)
                  },
                }
              class Dn {
                constructor() {
                  this._callbacks = {}
                }
                get(e) {
                  return this._callbacks[tt(e)]
                }
                add(e, t, r) {
                  var s = tt(e)
                  this._callbacks[s] = this._callbacks[s] || []
                  this._callbacks[s].push({
                    fn: t,
                    context: r,
                  })
                }
                remove(e, t, r) {
                  if (!e && !t && !r) {
                    this._callbacks = {}
                    return
                  }
                  var s = e ? [tt(e)] : Ct(this._callbacks)
                  if (t || r) {
                    this.removeCallback(s, t, r)
                  } else {
                    this.removeAllCallbacks(s)
                  }
                }
                removeCallback(e, t, r) {
                  Re(
                    e,
                    function (s) {
                      this._callbacks[s] = xt(
                        this._callbacks[s] || [],
                        function (d) {
                          return (
                            (t && t !== d.fn) ||
                            (r && r !== d.context)
                          )
                        }
                      )
                      if (this._callbacks[s].length === 0)
                        delete this._callbacks[s]
                    },
                    this
                  )
                }
                removeAllCallbacks(e) {
                  Re(
                    e,
                    function (t) {
                      delete this._callbacks[t]
                    },
                    this
                  )
                }
              }
              function tt(n) {
                return "_" + n
              }
              class ae {
                constructor(e) {
                  this.callbacks = new Dn()
                  this.global_callbacks = []
                  this.failThrough = e
                }
                bind(e, t, r) {
                  return this.callbacks.add(e, t, r), this
                }
                bind_global(e) {
                  return this.global_callbacks.push(e), this
                }
                unbind(e, t, r) {
                  return this.callbacks.remove(e, t, r), this
                }
                unbind_global(e) {
                  return e
                    ? ((this.global_callbacks = xt(
                        this.global_callbacks || [],
                        (t) => t !== e
                      )),
                      this)
                    : ((this.global_callbacks = []), this)
                }
                unbind_all() {
                  return this.unbind(), this.unbind_global(), this
                }
                emit(e, t, r) {
                  for (
                    var s = 0;
                    s < this.global_callbacks.length;
                    s++
                  )
                    this.global_callbacks[s](e, t)
                  var d = this.callbacks.get(e),
                    b = []
                  if (
                    (r ? b.push(t, r) : t && b.push(t),
                    d && d.length > 0)
                  )
                    for (var s = 0; s < d.length; s++)
                      d[s].fn.apply(d[s].context || window, b)
                  else if (this.failThrough) this.failThrough(e, t)
                  return this
                }
              }
              class $n extends ae {
                constructor(e, t, r, s, d) {
                  super()
                  this.initialize = R.transportConnectionInitializer
                  this.hooks = e
                  this.name = t
                  this.priority = r
                  this.key = s
                  this.options = d
                  this.state = "new"
                  this.timeline = d.timeline
                  this.activityTimeout = d.activityTimeout
                  this.id = this.timeline.generateUniqueID()
                }
                handlesActivityChecks() {
                  return !!this.hooks.handlesActivityChecks
                }
                supportsPing() {
                  return !!this.hooks.supportsPing
                }
                connect() {
                  if (this.socket || this.state !== "initialized")
                    return false
                  var e = this.hooks.urls.getInitial(
                    this.key,
                    this.options
                  )
                  try {
                    this.socket = this.hooks.getSocket(
                      e,
                      this.options
                    )
                  } catch (t) {
                    return (
                      X.defer(() => {
                        this.onError(t)
                        this.changeState("closed")
                      }),
                      false
                    )
                  }
                  return (
                    this.bindListeners(),
                    M.debug("Connecting", {
                      transport: this.name,
                      url: e,
                    }),
                    this.changeState("connecting"),
                    true
                  )
                }
                close() {
                  return this.socket
                    ? (this.socket.close(), true)
                    : false
                }
                send(e) {
                  return this.state === "open"
                    ? (X.defer(() => {
                        if (this.socket) this.socket.send(e)
                      }),
                      true)
                    : false
                }
                ping() {
                  if (this.state === "open" && this.supportsPing())
                    this.socket.ping()
                }
                onOpen() {
                  if (this.hooks.beforeOpen)
                    this.hooks.beforeOpen(
                      this.socket,
                      this.hooks.urls.getPath(this.key, this.options)
                    )
                  this.changeState("open")
                  this.socket.onopen = void 0
                }
                onError(e) {
                  this.emit("error", {
                    type: "WebSocketError",
                    error: e,
                  })
                  this.timeline.error(
                    this.buildTimelineMessage({
                      error: e.toString(),
                    })
                  )
                }
                onClose(e) {
                  if (e) {
                    this.changeState("closed", {
                      code: e.code,
                      reason: e.reason,
                      wasClean: e.wasClean,
                    })
                  } else {
                    this.changeState("closed")
                  }
                  this.unbindListeners()
                  this.socket = void 0
                }
                onMessage(e) {
                  this.emit("message", e)
                }
                onActivity() {
                  this.emit("activity")
                }
                bindListeners() {
                  this.socket.onopen = () => {
                    this.onOpen()
                  }
                  this.socket.onerror = (e) => {
                    this.onError(e)
                  }
                  this.socket.onclose = (e) => {
                    this.onClose(e)
                  }
                  this.socket.onmessage = (e) => {
                    this.onMessage(e)
                  }
                  if (this.supportsPing())
                    this.socket.onactivity = () => {
                      this.onActivity()
                    }
                }
                unbindListeners() {
                  if (this.socket) {
                    this.socket.onopen = void 0
                    this.socket.onerror = void 0
                    this.socket.onclose = void 0
                    this.socket.onmessage = void 0
                    if (this.supportsPing())
                      this.socket.onactivity = void 0
                  }
                }
                changeState(e, t) {
                  this.state = e
                  this.timeline.info(
                    this.buildTimelineMessage({
                      state: e,
                      params: t,
                    })
                  )
                  this.emit(e, t)
                }
                buildTimelineMessage(e) {
                  return V(
                    {
                      cid: this.id,
                    },
                    e
                  )
                }
              }
              class xe {
                constructor(e) {
                  this.hooks = e
                }
                isSupported(e) {
                  return this.hooks.isSupported(e)
                }
                createConnection(e, t, r, s) {
                  return new $n(this.hooks, e, t, r, s)
                }
              }
              var Un = new xe({
                  urls: jn,
                  handlesActivityChecks: false,
                  supportsPing: false,
                  isInitialized: function () {
                    return !!R.getWebSocketAPI()
                  },
                  isSupported: function () {
                    return !!R.getWebSocketAPI()
                  },
                  getSocket: function (n) {
                    return R.createWebSocket(n)
                  },
                }),
                Tt = {
                  urls: Nn,
                  handlesActivityChecks: false,
                  supportsPing: true,
                  isInitialized: function () {
                    return true
                  },
                },
                Lt = V(
                  {
                    getSocket: function (n) {
                      return R.HTTPFactory.createStreamingSocket(n)
                    },
                  },
                  Tt
                ),
                Rt = V(
                  {
                    getSocket: function (n) {
                      return R.HTTPFactory.createPollingSocket(n)
                    },
                  },
                  Tt
                ),
                It = {
                  isSupported: function () {
                    return R.isXHRSupported()
                  },
                },
                zn = new xe(V({}, Lt, It)),
                Hn = new xe(V({}, Rt, It)),
                qn = {
                  ws: Un,
                  xhr_streaming: zn,
                  xhr_polling: Hn,
                },
                We = qn,
                Wn = new xe({
                  file: "sockjs",
                  urls: Mn,
                  handlesActivityChecks: true,
                  supportsPing: false,
                  isSupported: function () {
                    return true
                  },
                  isInitialized: function () {
                    return window.SockJS !== void 0
                  },
                  getSocket: function (n, e) {
                    return new window.SockJS(n, null, {
                      js_path: p.getPath("sockjs", {
                        useTLS: e.useTLS,
                      }),
                      ignore_null_origin: e.ignoreNullOrigin,
                    })
                  },
                  beforeOpen: function (n, e) {
                    n.send(
                      JSON.stringify({
                        path: e,
                      })
                    )
                  },
                }),
                At = {
                  isSupported: function (n) {
                    var e = R.isXDRSupported(n.useTLS)
                    return e
                  },
                },
                Fn = new xe(V({}, Lt, At)),
                Xn = new xe(V({}, Rt, At))
              We.xdr_streaming = Fn
              We.xdr_polling = Xn
              We.sockjs = Wn
              var Jn = We
              class Gn extends ae {
                constructor() {
                  super()
                  var e = this
                  if (window.addEventListener !== void 0) {
                    window.addEventListener(
                      "online",
                      function () {
                        e.emit("online")
                      },
                      false
                    )
                    window.addEventListener(
                      "offline",
                      function () {
                        e.emit("offline")
                      },
                      false
                    )
                  }
                }
                isOnline() {
                  return window.navigator.onLine === void 0
                    ? true
                    : window.navigator.onLine
                }
              }
              var Kn = new Gn()
              class Yn {
                constructor(e, t, r) {
                  this.manager = e
                  this.transport = t
                  this.minPingDelay = r.minPingDelay
                  this.maxPingDelay = r.maxPingDelay
                  this.pingDelay = void 0
                }
                createConnection(e, t, r, s) {
                  s = V({}, s, {
                    activityTimeout: this.pingDelay,
                  })
                  var d = this.transport.createConnection(e, t, r, s),
                    b = null,
                    C = function () {
                      d.unbind("open", C)
                      d.bind("closed", L)
                      b = X.now()
                    },
                    L = (A) => {
                      if (
                        (d.unbind("closed", L),
                        A.code === 1002 || A.code === 1003)
                      )
                        this.manager.reportDeath()
                      else if (!A.wasClean && b) {
                        var B = X.now() - b
                        if (B < 2 * this.maxPingDelay) {
                          this.manager.reportDeath()
                          this.pingDelay = Math.max(
                            B / 2,
                            this.minPingDelay
                          )
                        }
                      }
                    }
                  return d.bind("open", C), d
                }
                isSupported(e) {
                  return (
                    this.manager.isAlive() &&
                    this.transport.isSupported(e)
                  )
                }
              }
              const Ot = {
                decodeMessage: function (n) {
                  try {
                    var e = JSON.parse(n.data),
                      t = e.data
                    if (typeof t == "string")
                      try {
                        t = JSON.parse(e.data)
                      } catch {}
                    var r = {
                      event: e.event,
                      channel: e.channel,
                      data: t,
                    }
                    return e.user_id && (r.user_id = e.user_id), r
                  } catch (s) {
                    throw {
                      type: "MessageParseError",
                      error: s,
                      data: n.data,
                    }
                  }
                },
                encodeMessage: function (n) {
                  return JSON.stringify(n)
                },
                processHandshake: function (n) {
                  var e = Ot.decodeMessage(n)
                  if (e.event === "pusher:connection_established") {
                    if (!e.data.activity_timeout)
                      throw "No activity timeout specified in handshake"
                    return {
                      action: "connected",
                      id: e.data.socket_id,
                      activityTimeout: e.data.activity_timeout * 1e3,
                    }
                  } else {
                    if (e.event === "pusher:error")
                      return {
                        action: this.getCloseAction(e.data),
                        error: this.getCloseError(e.data),
                      }
                    throw "Invalid handshake"
                  }
                },
                getCloseAction: function (n) {
                  return n.code < 4e3
                    ? n.code >= 1002 && n.code <= 1004
                      ? "backoff"
                      : null
                    : n.code === 4e3
                    ? "tls_only"
                    : n.code < 4100
                    ? "refused"
                    : n.code < 4200
                    ? "backoff"
                    : n.code < 4300
                    ? "retry"
                    : "refused"
                },
                getCloseError: function (n) {
                  return n.code !== 1e3 && n.code !== 1001
                    ? {
                        type: "PusherError",
                        data: {
                          code: n.code,
                          message: n.reason || n.message,
                        },
                      }
                    : null
                },
              }
              var ge = Ot
              class Vn extends ae {
                constructor(e, t) {
                  super()
                  this.id = e
                  this.transport = t
                  this.activityTimeout = t.activityTimeout
                  this.bindListeners()
                }
                handlesActivityChecks() {
                  return this.transport.handlesActivityChecks()
                }
                send(e) {
                  return this.transport.send(e)
                }
                send_event(e, t, r) {
                  var s = {
                    event: e,
                    data: t,
                  }
                  return (
                    r && (s.channel = r),
                    M.debug("Event sent", s),
                    this.send(ge.encodeMessage(s))
                  )
                }
                ping() {
                  if (this.transport.supportsPing()) {
                    this.transport.ping()
                  } else {
                    this.send_event("pusher:ping", {})
                  }
                }
                close() {
                  this.transport.close()
                }
                bindListeners() {
                  var e = {
                      message: (r) => {
                        var s
                        try {
                          s = ge.decodeMessage(r)
                        } catch (d) {
                          this.emit("error", {
                            type: "MessageParseError",
                            error: d,
                            data: r.data,
                          })
                        }
                        if (s !== void 0) {
                          switch (
                            (M.debug("Event recd", s), s.event)
                          ) {
                            case "pusher:error":
                              this.emit("error", {
                                type: "PusherError",
                                data: s.data,
                              })
                              break
                            case "pusher:ping":
                              this.emit("ping")
                              break
                            case "pusher:pong":
                              this.emit("pong")
                              break
                          }
                          this.emit("message", s)
                        }
                      },
                      activity: () => {
                        this.emit("activity")
                      },
                      error: (r) => {
                        this.emit("error", r)
                      },
                      closed: (r) => {
                        t()
                        if (r && r.code) this.handleCloseEvent(r)
                        this.transport = null
                        this.emit("closed")
                      },
                    },
                    t = () => {
                      oe(e, (r, s) => {
                        this.transport.unbind(s, r)
                      })
                    }
                  oe(e, (r, s) => {
                    this.transport.bind(s, r)
                  })
                }
                handleCloseEvent(e) {
                  var t = ge.getCloseAction(e),
                    r = ge.getCloseError(e)
                  if (r) this.emit("error", r)
                  if (t)
                    this.emit(t, {
                      action: t,
                      error: r,
                    })
                }
              }
              class Qn {
                constructor(e, t) {
                  this.transport = e
                  this.callback = t
                  this.bindListeners()
                }
                close() {
                  this.unbindListeners()
                  this.transport.close()
                }
                bindListeners() {
                  this.onMessage = (e) => {
                    this.unbindListeners()
                    var t
                    try {
                      t = ge.processHandshake(e)
                    } catch (r) {
                      this.finish("error", {
                        error: r,
                      })
                      this.transport.close()
                      return
                    }
                    if (t.action === "connected") {
                      this.finish("connected", {
                        connection: new Vn(t.id, this.transport),
                        activityTimeout: t.activityTimeout,
                      })
                    } else {
                      this.finish(t.action, {
                        error: t.error,
                      })
                      this.transport.close()
                    }
                  }
                  this.onClosed = (e) => {
                    this.unbindListeners()
                    var t = ge.getCloseAction(e) || "backoff",
                      r = ge.getCloseError(e)
                    this.finish(t, {
                      error: r,
                    })
                  }
                  this.transport.bind("message", this.onMessage)
                  this.transport.bind("closed", this.onClosed)
                }
                unbindListeners() {
                  this.transport.unbind("message", this.onMessage)
                  this.transport.unbind("closed", this.onClosed)
                }
                finish(e, t) {
                  this.callback(
                    V(
                      {
                        transport: this.transport,
                        action: e,
                      },
                      t
                    )
                  )
                }
              }
              class Zn {
                constructor(e, t) {
                  this.timeline = e
                  this.options = t || {}
                }
                send(e, t) {
                  this.timeline.isEmpty() ||
                    this.timeline.send(
                      R.TimelineTransport.getAgent(this, e),
                      t
                    )
                }
              }
              class nt extends ae {
                constructor(e, t) {
                  super(function (r, s) {
                    M.debug("No callbacks on " + e + " for " + r)
                  })
                  this.name = e
                  this.pusher = t
                  this.subscribed = false
                  this.subscriptionPending = false
                  this.subscriptionCancelled = false
                }
                authorize(e, t) {
                  return t(null, {
                    auth: "",
                  })
                }
                trigger(e, t) {
                  if (e.indexOf("client-") !== 0)
                    throw new m(
                      "Event '" +
                        e +
                        "' does not start with 'client-'"
                    )
                  if (!this.subscribed) {
                    var r = k.buildLogSuffix("triggeringClientEvents")
                    M.warn(
                      `Client event triggered before channel 'subscription_succeeded' event . ${r}`
                    )
                  }
                  return this.pusher.send_event(e, t, this.name)
                }
                disconnect() {
                  this.subscribed = false
                  this.subscriptionPending = false
                }
                handleEvent(e) {
                  var t = e.event,
                    r = e.data
                  if (t === "pusher_internal:subscription_succeeded")
                    this.handleSubscriptionSucceededEvent(e)
                  else if (t === "pusher_internal:subscription_count")
                    this.handleSubscriptionCountEvent(e)
                  else if (t.indexOf("pusher_internal:") !== 0) {
                    var s = {}
                    this.emit(t, r, s)
                  }
                }
                handleSubscriptionSucceededEvent(e) {
                  this.subscriptionPending = false
                  this.subscribed = true
                  if (this.subscriptionCancelled) {
                    this.pusher.unsubscribe(this.name)
                  } else {
                    this.emit("pusher:subscription_succeeded", e.data)
                  }
                }
                handleSubscriptionCountEvent(e) {
                  if (e.data.subscription_count)
                    this.subscriptionCount = e.data.subscription_count
                  this.emit("pusher:subscription_count", e.data)
                }
                subscribe() {
                  this.subscribed ||
                    ((this.subscriptionPending = true),
                    (this.subscriptionCancelled = false),
                    this.authorize(
                      this.pusher.connection.socket_id,
                      (e, t) => {
                        if (e) {
                          this.subscriptionPending = false
                          M.error(e.toString())
                          this.emit(
                            "pusher:subscription_error",
                            Object.assign(
                              {},
                              {
                                type: "AuthError",
                                error: e.message,
                              },
                              e instanceof F
                                ? {
                                    status: e.status,
                                  }
                                : {}
                            )
                          )
                        } else {
                          this.pusher.send_event("pusher:subscribe", {
                            auth: t.auth,
                            channel_data: t.channel_data,
                            channel: this.name,
                          })
                        }
                      }
                    ))
                }
                unsubscribe() {
                  this.subscribed = false
                  this.pusher.send_event("pusher:unsubscribe", {
                    channel: this.name,
                  })
                }
                cancelSubscription() {
                  this.subscriptionCancelled = true
                }
                reinstateSubscription() {
                  this.subscriptionCancelled = false
                }
              }
              class rt extends nt {
                authorize(e, t) {
                  return this.pusher.config.channelAuthorizer(
                    {
                      channelName: this.name,
                      socketId: e,
                    },
                    t
                  )
                }
              }
              class er {
                constructor() {
                  this.reset()
                }
                get(e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.members,
                    e
                  )
                    ? {
                        id: e,
                        info: this.members[e],
                      }
                    : null
                }
                each(e) {
                  oe(this.members, (t, r) => {
                    e(this.get(r))
                  })
                }
                setMyID(e) {
                  this.myID = e
                }
                onSubscription(e) {
                  this.members = e.presence.hash
                  this.count = e.presence.count
                  this.me = this.get(this.myID)
                }
                addMember(e) {
                  return (
                    this.get(e.user_id) === null && this.count++,
                    (this.members[e.user_id] = e.user_info),
                    this.get(e.user_id)
                  )
                }
                removeMember(e) {
                  var t = this.get(e.user_id)
                  return (
                    t &&
                      (delete this.members[e.user_id], this.count--),
                    t
                  )
                }
                reset() {
                  this.members = {}
                  this.count = 0
                  this.myID = null
                  this.me = null
                }
              }
              var tr = function (n, e, t, r) {
                function s(d) {
                  return d instanceof t
                    ? d
                    : new t(function (b) {
                        b(d)
                      })
                }
                return new (t || (t = Promise))(function (d, b) {
                  function C(B) {
                    try {
                      A(r.next(B))
                    } catch (U) {
                      b(U)
                    }
                  }
                  function L(B) {
                    try {
                      A(r.throw(B))
                    } catch (U) {
                      b(U)
                    }
                  }
                  function A(B) {
                    if (B.done) {
                      d(B.value)
                    } else {
                      s(B.value).then(C, L)
                    }
                  }
                  A((r = r.apply(n, e || [])).next())
                })
              }
              class nr extends rt {
                constructor(e, t) {
                  super(e, t)
                  this.members = new er()
                }
                authorize(e, t) {
                  super.authorize(e, (r, s) =>
                    tr(this, void 0, void 0, function* () {
                      if (!r)
                        if (((s = s), s.channel_data != null)) {
                          var d = JSON.parse(s.channel_data)
                          this.members.setMyID(d.user_id)
                        } else if (
                          (yield this.pusher.user.signinDonePromise,
                          this.pusher.user.user_data != null)
                        )
                          this.members.setMyID(
                            this.pusher.user.user_data.id
                          )
                        else {
                          let b = k.buildLogSuffix(
                            "authorizationEndpoint"
                          )
                          M.error(
                            `Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${b}, or the user should be signed in.`
                          )
                          t("Invalid auth response")
                          return
                        }
                      t(r, s)
                    })
                  )
                }
                handleEvent(e) {
                  var t = e.event
                  if (t.indexOf("pusher_internal:") === 0)
                    this.handleInternalEvent(e)
                  else {
                    var r = e.data,
                      s = {}
                    if (e.user_id) s.user_id = e.user_id
                    this.emit(t, r, s)
                  }
                }
                handleInternalEvent(e) {
                  var t = e.event,
                    r = e.data
                  switch (t) {
                    case "pusher_internal:subscription_succeeded":
                      this.handleSubscriptionSucceededEvent(e)
                      break
                    case "pusher_internal:subscription_count":
                      this.handleSubscriptionCountEvent(e)
                      break
                    case "pusher_internal:member_added":
                      var s = this.members.addMember(r)
                      this.emit("pusher:member_added", s)
                      break
                    case "pusher_internal:member_removed":
                      var d = this.members.removeMember(r)
                      if (d) this.emit("pusher:member_removed", d)
                      break
                  }
                }
                handleSubscriptionSucceededEvent(e) {
                  this.subscriptionPending = false
                  this.subscribed = true
                  if (this.subscriptionCancelled) {
                    this.pusher.unsubscribe(this.name)
                  } else {
                    this.members.onSubscription(e.data)
                    this.emit(
                      "pusher:subscription_succeeded",
                      this.members
                    )
                  }
                }
                disconnect() {
                  this.members.reset()
                  super.disconnect()
                }
              }
              var rr = h(1),
                it = h(0)
              class ir extends rt {
                constructor(e, t, r) {
                  super(e, t)
                  this.key = null
                  this.nacl = r
                }
                authorize(e, t) {
                  super.authorize(e, (r, s) => {
                    if (r) {
                      t(r, s)
                      return
                    }
                    let d = s.shared_secret
                    if (!d) {
                      t(
                        new Error(
                          `No shared_secret key in auth payload for encrypted channel: ${this.name}`
                        ),
                        null
                      )
                      return
                    }
                    this.key = Object(it.decode)(d)
                    delete s.shared_secret
                    t(null, s)
                  })
                }
                trigger(e, t) {
                  throw new j(
                    "Client events are not currently supported for encrypted channels"
                  )
                }
                handleEvent(e) {
                  var t = e.event,
                    r = e.data
                  if (
                    t.indexOf("pusher_internal:") === 0 ||
                    t.indexOf("pusher:") === 0
                  ) {
                    super.handleEvent(e)
                    return
                  }
                  this.handleEncryptedEvent(t, r)
                }
                handleEncryptedEvent(e, t) {
                  if (!this.key) {
                    M.debug(
                      "Received encrypted event before key has been retrieved from the authEndpoint"
                    )
                    return
                  }
                  if (!t.ciphertext || !t.nonce) {
                    M.error(
                      "Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " +
                        t
                    )
                    return
                  }
                  let r = Object(it.decode)(t.ciphertext)
                  if (r.length < this.nacl.secretbox.overheadLength) {
                    M.error(
                      `Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${r.length}`
                    )
                    return
                  }
                  let s = Object(it.decode)(t.nonce)
                  if (s.length < this.nacl.secretbox.nonceLength) {
                    M.error(
                      `Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${s.length}`
                    )
                    return
                  }
                  let d = this.nacl.secretbox.open(r, s, this.key)
                  if (d === null) {
                    M.debug(
                      "Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."
                    )
                    this.authorize(
                      this.pusher.connection.socket_id,
                      (b, C) => {
                        if (b) {
                          M.error(
                            `Failed to make a request to the authEndpoint: ${C}. Unable to fetch new key, so dropping encrypted event`
                          )
                          return
                        }
                        if (
                          ((d = this.nacl.secretbox.open(
                            r,
                            s,
                            this.key
                          )),
                          d === null)
                        ) {
                          M.error(
                            "Failed to decrypt event with new key. Dropping encrypted event"
                          )
                          return
                        }
                        this.emit(e, this.getDataToEmit(d))
                      }
                    )
                    return
                  }
                  this.emit(e, this.getDataToEmit(d))
                }
                getDataToEmit(e) {
                  let t = Object(rr.decode)(e)
                  try {
                    return JSON.parse(t)
                  } catch {
                    return t
                  }
                }
              }
              class sr extends ae {
                constructor(e, t) {
                  super()
                  this.state = "initialized"
                  this.connection = null
                  this.key = e
                  this.options = t
                  this.timeline = this.options.timeline
                  this.usingTLS = this.options.useTLS
                  this.errorCallbacks = this.buildErrorCallbacks()
                  this.connectionCallbacks =
                    this.buildConnectionCallbacks(this.errorCallbacks)
                  this.handshakeCallbacks =
                    this.buildHandshakeCallbacks(this.errorCallbacks)
                  var r = R.getNetwork()
                  r.bind("online", () => {
                    this.timeline.info({
                      netinfo: "online",
                    })
                    if (
                      this.state === "connecting" ||
                      this.state === "unavailable"
                    )
                      this.retryIn(0)
                  })
                  r.bind("offline", () => {
                    this.timeline.info({
                      netinfo: "offline",
                    })
                    if (this.connection) this.sendActivityCheck()
                  })
                  this.updateStrategy()
                }
                connect() {
                  if (!(this.connection || this.runner)) {
                    if (!this.strategy.isSupported()) {
                      this.updateState("failed")
                      return
                    }
                    this.updateState("connecting")
                    this.startConnecting()
                    this.setUnavailableTimer()
                  }
                }
                send(e) {
                  return this.connection
                    ? this.connection.send(e)
                    : false
                }
                send_event(e, t, r) {
                  return this.connection
                    ? this.connection.send_event(e, t, r)
                    : false
                }
                disconnect() {
                  this.disconnectInternally()
                  this.updateState("disconnected")
                }
                isUsingTLS() {
                  return this.usingTLS
                }
                startConnecting() {
                  var e = (t, r) => {
                    if (t) {
                      this.runner = this.strategy.connect(0, e)
                    } else {
                      if (r.action === "error") {
                        this.emit("error", {
                          type: "HandshakeError",
                          error: r.error,
                        })
                        this.timeline.error({
                          handshakeError: r.error,
                        })
                      } else {
                        this.abortConnecting()
                        this.handshakeCallbacks[r.action](r)
                      }
                    }
                  }
                  this.runner = this.strategy.connect(0, e)
                }
                abortConnecting() {
                  if (this.runner) {
                    this.runner.abort()
                    this.runner = null
                  }
                }
                disconnectInternally() {
                  if (
                    (this.abortConnecting(),
                    this.clearRetryTimer(),
                    this.clearUnavailableTimer(),
                    this.connection)
                  ) {
                    var e = this.abandonConnection()
                    e.close()
                  }
                }
                updateStrategy() {
                  this.strategy = this.options.getStrategy({
                    key: this.key,
                    timeline: this.timeline,
                    useTLS: this.usingTLS,
                  })
                }
                retryIn(e) {
                  this.timeline.info({
                    action: "retry",
                    delay: e,
                  })
                  if (e > 0)
                    this.emit("connecting_in", Math.round(e / 1e3))
                  this.retryTimer = new me(e || 0, () => {
                    this.disconnectInternally()
                    this.connect()
                  })
                }
                clearRetryTimer() {
                  if (this.retryTimer) {
                    this.retryTimer.ensureAborted()
                    this.retryTimer = null
                  }
                }
                setUnavailableTimer() {
                  this.unavailableTimer = new me(
                    this.options.unavailableTimeout,
                    () => {
                      this.updateState("unavailable")
                    }
                  )
                }
                clearUnavailableTimer() {
                  if (this.unavailableTimer)
                    this.unavailableTimer.ensureAborted()
                }
                sendActivityCheck() {
                  this.stopActivityCheck()
                  this.connection.ping()
                  this.activityTimer = new me(
                    this.options.pongTimeout,
                    () => {
                      this.timeline.error({
                        pong_timed_out: this.options.pongTimeout,
                      })
                      this.retryIn(0)
                    }
                  )
                }
                resetActivityCheck() {
                  this.stopActivityCheck()
                  if (
                    this.connection &&
                    !this.connection.handlesActivityChecks()
                  )
                    this.activityTimer = new me(
                      this.activityTimeout,
                      () => {
                        this.sendActivityCheck()
                      }
                    )
                }
                stopActivityCheck() {
                  if (this.activityTimer)
                    this.activityTimer.ensureAborted()
                }
                buildConnectionCallbacks(e) {
                  return V({}, e, {
                    message: (t) => {
                      this.resetActivityCheck()
                      this.emit("message", t)
                    },
                    ping: () => {
                      this.send_event("pusher:pong", {})
                    },
                    activity: () => {
                      this.resetActivityCheck()
                    },
                    error: (t) => {
                      this.emit("error", t)
                    },
                    closed: () => {
                      this.abandonConnection()
                      if (this.shouldRetry()) this.retryIn(1e3)
                    },
                  })
                }
                buildHandshakeCallbacks(e) {
                  return V({}, e, {
                    connected: (t) => {
                      this.activityTimeout = Math.min(
                        this.options.activityTimeout,
                        t.activityTimeout,
                        t.connection.activityTimeout || 1 / 0
                      )
                      this.clearUnavailableTimer()
                      this.setConnection(t.connection)
                      this.socket_id = this.connection.id
                      this.updateState("connected", {
                        socket_id: this.socket_id,
                      })
                    },
                  })
                }
                buildErrorCallbacks() {
                  let e = (t) => (r) => {
                    if (r.error)
                      this.emit("error", {
                        type: "WebSocketError",
                        error: r.error,
                      })
                    t(r)
                  }
                  return {
                    tls_only: e(() => {
                      this.usingTLS = true
                      this.updateStrategy()
                      this.retryIn(0)
                    }),
                    refused: e(() => {
                      this.disconnect()
                    }),
                    backoff: e(() => {
                      this.retryIn(1e3)
                    }),
                    retry: e(() => {
                      this.retryIn(0)
                    }),
                  }
                }
                setConnection(e) {
                  this.connection = e
                  for (var t in this.connectionCallbacks)
                    this.connection.bind(
                      t,
                      this.connectionCallbacks[t]
                    )
                  this.resetActivityCheck()
                }
                abandonConnection() {
                  if (this.connection) {
                    this.stopActivityCheck()
                    for (var e in this.connectionCallbacks)
                      this.connection.unbind(
                        e,
                        this.connectionCallbacks[e]
                      )
                    var t = this.connection
                    return (this.connection = null), t
                  }
                }
                updateState(e, t) {
                  var r = this.state
                  if (((this.state = e), r !== e)) {
                    var s = e
                    if (s === "connected")
                      s += " with new socket ID " + t.socket_id
                    M.debug("State changed", r + " -> " + s)
                    this.timeline.info({
                      state: e,
                      params: t,
                    })
                    this.emit("state_change", {
                      previous: r,
                      current: e,
                    })
                    this.emit(e, t)
                  }
                }
                shouldRetry() {
                  return (
                    this.state === "connecting" ||
                    this.state === "connected"
                  )
                }
              }
              class or {
                constructor() {
                  this.channels = {}
                }
                add(e, t) {
                  return (
                    this.channels[e] || (this.channels[e] = ar(e, t)),
                    this.channels[e]
                  )
                }
                all() {
                  return yn(this.channels)
                }
                find(e) {
                  return this.channels[e]
                }
                remove(e) {
                  var t = this.channels[e]
                  return delete this.channels[e], t
                }
                disconnect() {
                  oe(this.channels, function (e) {
                    e.disconnect()
                  })
                }
              }
              function ar(n, e) {
                if (n.indexOf("private-encrypted-") === 0) {
                  if (e.config.nacl)
                    return ce.createEncryptedChannel(
                      n,
                      e,
                      e.config.nacl
                    )
                  let t =
                      "Tried to subscribe to a private-encrypted- channel but no nacl implementation available",
                    r = k.buildLogSuffix("encryptedChannelSupport")
                  throw new j(`${t}. ${r}`)
                } else {
                  if (n.indexOf("private-") === 0)
                    return ce.createPrivateChannel(n, e)
                  if (n.indexOf("presence-") === 0)
                    return ce.createPresenceChannel(n, e)
                  if (n.indexOf("#") === 0)
                    throw new y(
                      'Cannot create a channel with name "' + n + '".'
                    )
                  return ce.createChannel(n, e)
                }
              }
              var cr = {
                  createChannels() {
                    return new or()
                  },
                  createConnectionManager(n, e) {
                    return new sr(n, e)
                  },
                  createChannel(n, e) {
                    return new nt(n, e)
                  },
                  createPrivateChannel(n, e) {
                    return new rt(n, e)
                  },
                  createPresenceChannel(n, e) {
                    return new nr(n, e)
                  },
                  createEncryptedChannel(n, e, t) {
                    return new ir(n, e, t)
                  },
                  createTimelineSender(n, e) {
                    return new Zn(n, e)
                  },
                  createHandshake(n, e) {
                    return new Qn(n, e)
                  },
                  createAssistantToTheTransportManager(n, e, t) {
                    return new Yn(n, e, t)
                  },
                },
                ce = cr
              class Bt {
                constructor(e) {
                  this.options = e || {}
                  this.livesLeft = this.options.lives || 1 / 0
                }
                getAssistant(e) {
                  return ce.createAssistantToTheTransportManager(
                    this,
                    e,
                    {
                      minPingDelay: this.options.minPingDelay,
                      maxPingDelay: this.options.maxPingDelay,
                    }
                  )
                }
                isAlive() {
                  return this.livesLeft > 0
                }
                reportDeath() {
                  this.livesLeft -= 1
                }
              }
              class be {
                constructor(e, t) {
                  this.strategies = e
                  this.loop = !!t.loop
                  this.failFast = !!t.failFast
                  this.timeout = t.timeout
                  this.timeoutLimit = t.timeoutLimit
                }
                isSupported() {
                  return Pt(this.strategies, X.method("isSupported"))
                }
                connect(e, t) {
                  var r = this.strategies,
                    s = 0,
                    d = this.timeout,
                    b = null,
                    C = (L, A) => {
                      if (A) {
                        t(null, A)
                      } else {
                        s = s + 1
                        if (this.loop) s = s % r.length
                        if (s < r.length) {
                          if (d) {
                            d = d * 2
                            if (this.timeoutLimit)
                              d = Math.min(d, this.timeoutLimit)
                          }
                          b = this.tryStrategy(
                            r[s],
                            e,
                            {
                              timeout: d,
                              failFast: this.failFast,
                            },
                            C
                          )
                        } else {
                          t(true)
                        }
                      }
                    }
                  return (
                    (b = this.tryStrategy(
                      r[s],
                      e,
                      {
                        timeout: d,
                        failFast: this.failFast,
                      },
                      C
                    )),
                    {
                      abort: function () {
                        b.abort()
                      },
                      forceMinPriority: function (L) {
                        e = L
                        if (b) b.forceMinPriority(L)
                      },
                    }
                  )
                }
                tryStrategy(e, t, r, s) {
                  var d = null,
                    b = null
                  return (
                    r.timeout > 0 &&
                      (d = new me(r.timeout, function () {
                        b.abort()
                        s(true)
                      })),
                    (b = e.connect(t, function (C, L) {
                      ;(C && d && d.isRunning() && !r.failFast) ||
                        (d && d.ensureAborted(), s(C, L))
                    })),
                    {
                      abort: function () {
                        if (d) d.ensureAborted()
                        b.abort()
                      },
                      forceMinPriority: function (C) {
                        b.forceMinPriority(C)
                      },
                    }
                  )
                }
              }
              class st {
                constructor(e) {
                  this.strategies = e
                }
                isSupported() {
                  return Pt(this.strategies, X.method("isSupported"))
                }
                connect(e, t) {
                  return lr(this.strategies, e, function (r, s) {
                    return function (d, b) {
                      if (((s[r].error = d), d)) {
                        if (ur(s)) t(true)
                        return
                      }
                      Re(s, function (C) {
                        C.forceMinPriority(b.transport.priority)
                      })
                      t(null, b)
                    }
                  })
                }
              }
              function lr(n, e, t) {
                var r = kt(n, function (s, d, b, C) {
                  return s.connect(e, t(d, C))
                })
                return {
                  abort: function () {
                    Re(r, hr)
                  },
                  forceMinPriority: function (s) {
                    Re(r, function (d) {
                      d.forceMinPriority(s)
                    })
                  },
                }
              }
              function ur(n) {
                return Cn(n, function (e) {
                  return !!e.error
                })
              }
              function hr(n) {
                if (!n.error && !n.aborted) {
                  n.abort()
                  n.aborted = true
                }
              }
              class dr {
                constructor(e, t, r) {
                  this.strategy = e
                  this.transports = t
                  this.ttl = r.ttl || 1800 * 1e3
                  this.usingTLS = r.useTLS
                  this.timeline = r.timeline
                }
                isSupported() {
                  return this.strategy.isSupported()
                }
                connect(e, t) {
                  var r = this.usingTLS,
                    s = fr(r),
                    d = s && s.cacheSkipCount ? s.cacheSkipCount : 0,
                    b = [this.strategy]
                  if (s && s.timestamp + this.ttl >= X.now()) {
                    var C = this.transports[s.transport]
                    if (C)
                      if (
                        ["ws", "wss"].includes(s.transport) ||
                        d > 3
                      ) {
                        this.timeline.info({
                          cached: true,
                          transport: s.transport,
                          latency: s.latency,
                        })
                        b.push(
                          new be([C], {
                            timeout: s.latency * 2 + 1e3,
                            failFast: true,
                          })
                        )
                      } else {
                        d++
                      }
                  }
                  var L = X.now(),
                    A = b.pop().connect(e, function B(U, Je) {
                      if (U) {
                        jt(r)
                        if (b.length > 0) {
                          L = X.now()
                          A = b.pop().connect(e, B)
                        } else {
                          t(U)
                        }
                      } else {
                        pr(r, Je.transport.name, X.now() - L, d)
                        t(null, Je)
                      }
                    })
                  return {
                    abort: function () {
                      A.abort()
                    },
                    forceMinPriority: function (B) {
                      e = B
                      if (A) A.forceMinPriority(B)
                    },
                  }
                }
              }
              function ot(n) {
                return "pusherTransport" + (n ? "TLS" : "NonTLS")
              }
              function fr(n) {
                var e = R.getLocalStorage()
                if (e)
                  try {
                    var t = e[ot(n)]
                    if (t) return JSON.parse(t)
                  } catch {
                    jt(n)
                  }
                return null
              }
              function pr(n, e, t, r) {
                var s = R.getLocalStorage()
                if (s)
                  try {
                    s[ot(n)] = qe({
                      timestamp: X.now(),
                      transport: e,
                      latency: t,
                      cacheSkipCount: r,
                    })
                  } catch {}
              }
              function jt(n) {
                var e = R.getLocalStorage()
                if (e)
                  try {
                    delete e[ot(n)]
                  } catch {}
              }
              class Fe {
                constructor(e, { delay: t }) {
                  this.strategy = e
                  this.options = {
                    delay: t,
                  }
                }
                isSupported() {
                  return this.strategy.isSupported()
                }
                connect(e, t) {
                  var r = this.strategy,
                    s,
                    d = new me(this.options.delay, function () {
                      s = r.connect(e, t)
                    })
                  return {
                    abort: function () {
                      d.ensureAborted()
                      if (s) s.abort()
                    },
                    forceMinPriority: function (b) {
                      e = b
                      if (s) s.forceMinPriority(b)
                    },
                  }
                }
              }
              class Ie {
                constructor(e, t, r) {
                  this.test = e
                  this.trueBranch = t
                  this.falseBranch = r
                }
                isSupported() {
                  var e = this.test()
                    ? this.trueBranch
                    : this.falseBranch
                  return e.isSupported()
                }
                connect(e, t) {
                  var r = this.test()
                    ? this.trueBranch
                    : this.falseBranch
                  return r.connect(e, t)
                }
              }
              class mr {
                constructor(e) {
                  this.strategy = e
                }
                isSupported() {
                  return this.strategy.isSupported()
                }
                connect(e, t) {
                  var r = this.strategy.connect(e, function (s, d) {
                    if (d) r.abort()
                    t(s, d)
                  })
                  return r
                }
              }
              function Ae(n) {
                return function () {
                  return n.isSupported()
                }
              }
              var gr = function (n, e, t) {
                  var r = {}
                  function s(Xt, mi, gi, bi, vi) {
                    var Jt = t(n, Xt, mi, gi, bi, vi)
                    return (r[Xt] = Jt), Jt
                  }
                  var d = Object.assign({}, e, {
                      hostNonTLS: n.wsHost + ":" + n.wsPort,
                      hostTLS: n.wsHost + ":" + n.wssPort,
                      httpPath: n.wsPath,
                    }),
                    b = Object.assign({}, d, {
                      useTLS: true,
                    }),
                    C = Object.assign({}, e, {
                      hostNonTLS: n.httpHost + ":" + n.httpPort,
                      hostTLS: n.httpHost + ":" + n.httpsPort,
                      httpPath: n.httpPath,
                    }),
                    L = {
                      loop: true,
                      timeout: 15e3,
                      timeoutLimit: 6e4,
                    },
                    A = new Bt({
                      minPingDelay: 1e4,
                      maxPingDelay: n.activityTimeout,
                    }),
                    B = new Bt({
                      lives: 2,
                      minPingDelay: 1e4,
                      maxPingDelay: n.activityTimeout,
                    }),
                    U = s("ws", "ws", 3, d, A),
                    Je = s("wss", "ws", 3, b, A),
                    ui = s("sockjs", "sockjs", 1, C),
                    Ut = s("xhr_streaming", "xhr_streaming", 1, C, B),
                    hi = s("xdr_streaming", "xdr_streaming", 1, C, B),
                    zt = s("xhr_polling", "xhr_polling", 1, C),
                    di = s("xdr_polling", "xdr_polling", 1, C),
                    Ht = new be([U], L),
                    fi = new be([Je], L),
                    pi = new be([ui], L),
                    qt = new be([new Ie(Ae(Ut), Ut, hi)], L),
                    Wt = new be([new Ie(Ae(zt), zt, di)], L),
                    Ft = new be(
                      [
                        new Ie(
                          Ae(qt),
                          new st([
                            qt,
                            new Fe(Wt, {
                              delay: 4e3,
                            }),
                          ]),
                          Wt
                        ),
                      ],
                      L
                    ),
                    ut = new Ie(Ae(Ft), Ft, pi),
                    ht
                  return (
                    e.useTLS
                      ? (ht = new st([
                          Ht,
                          new Fe(ut, {
                            delay: 2e3,
                          }),
                        ]))
                      : (ht = new st([
                          Ht,
                          new Fe(fi, {
                            delay: 2e3,
                          }),
                          new Fe(ut, {
                            delay: 5e3,
                          }),
                        ])),
                    new dr(new mr(new Ie(Ae(U), ht, ut)), r, {
                      ttl: 18e5,
                      timeline: e.timeline,
                      useTLS: e.useTLS,
                    })
                  )
                },
                br = gr,
                vr = function () {
                  var n = this
                  n.timeline.info(
                    n.buildTimelineMessage({
                      transport:
                        n.name + (n.options.useTLS ? "s" : ""),
                    })
                  )
                  if (n.hooks.isInitialized()) {
                    n.changeState("initialized")
                  } else {
                    if (n.hooks.file) {
                      n.changeState("initializing")
                      p.load(
                        n.hooks.file,
                        {
                          useTLS: n.options.useTLS,
                        },
                        function (e, t) {
                          if (n.hooks.isInitialized()) {
                            n.changeState("initialized")
                            t(true)
                          } else {
                            if (e) n.onError(e)
                            n.onClose()
                            t(false)
                          }
                        }
                      )
                    } else {
                      n.onClose()
                    }
                  }
                },
                wr = {
                  getRequest: function (n) {
                    var e = new window.XDomainRequest()
                    return (
                      (e.ontimeout = function () {
                        n.emit("error", new T())
                        n.close()
                      }),
                      (e.onerror = function (t) {
                        n.emit("error", t)
                        n.close()
                      }),
                      (e.onprogress = function () {
                        if (
                          e.responseText &&
                          e.responseText.length > 0
                        )
                          n.onChunk(200, e.responseText)
                      }),
                      (e.onload = function () {
                        if (
                          e.responseText &&
                          e.responseText.length > 0
                        )
                          n.onChunk(200, e.responseText)
                        n.emit("finished", 200)
                        n.close()
                      }),
                      e
                    )
                  },
                  abortRequest: function (n) {
                    n.ontimeout =
                      n.onerror =
                      n.onprogress =
                      n.onload =
                        null
                    n.abort()
                  },
                },
                yr = wr
              const Sr = 256 * 1024
              class _r extends ae {
                constructor(e, t, r) {
                  super()
                  this.hooks = e
                  this.method = t
                  this.url = r
                }
                start(e) {
                  this.position = 0
                  this.xhr = this.hooks.getRequest(this)
                  this.unloader = () => {
                    this.close()
                  }
                  R.addUnloadListener(this.unloader)
                  this.xhr.open(this.method, this.url, true)
                  if (this.xhr.setRequestHeader)
                    this.xhr.setRequestHeader(
                      "Content-Type",
                      "application/json"
                    )
                  this.xhr.send(e)
                }
                close() {
                  if (this.unloader) {
                    R.removeUnloadListener(this.unloader)
                    this.unloader = null
                  }
                  if (this.xhr) {
                    this.hooks.abortRequest(this.xhr)
                    this.xhr = null
                  }
                }
                onChunk(e, t) {
                  for (;;) {
                    var r = this.advanceBuffer(t)
                    if (r)
                      this.emit("chunk", {
                        status: e,
                        data: r,
                      })
                    else break
                  }
                  if (this.isBufferTooLong(t))
                    this.emit("buffer_too_long")
                }
                advanceBuffer(e) {
                  var t = e.slice(this.position),
                    r = t.indexOf(`
`)
                  return r !== -1
                    ? ((this.position += r + 1), t.slice(0, r))
                    : null
                }
                isBufferTooLong(e) {
                  return this.position === e.length && e.length > Sr
                }
              }
              var at
              ;(function (n) {
                n[(n.CONNECTING = 0)] = "CONNECTING"
                n[(n.OPEN = 1)] = "OPEN"
                n[(n.CLOSED = 3)] = "CLOSED"
              })(at || (at = {}))
              var ve = at,
                Cr = 1
              class kr {
                constructor(e, t) {
                  this.hooks = e
                  this.session = Mt(1e3) + "/" + Tr(8)
                  this.location = xr(t)
                  this.readyState = ve.CONNECTING
                  this.openStream()
                }
                send(e) {
                  return this.sendRaw(JSON.stringify([e]))
                }
                ping() {
                  this.hooks.sendHeartbeat(this)
                }
                close(e, t) {
                  this.onClose(e, t, true)
                }
                sendRaw(e) {
                  if (this.readyState === ve.OPEN)
                    try {
                      return (
                        R.createSocketRequest(
                          "POST",
                          Nt(Er(this.location, this.session))
                        ).start(e),
                        true
                      )
                    } catch {
                      return false
                    }
                  else return false
                }
                reconnect() {
                  this.closeStream()
                  this.openStream()
                }
                onClose(e, t, r) {
                  this.closeStream()
                  this.readyState = ve.CLOSED
                  if (this.onclose)
                    this.onclose({
                      code: e,
                      reason: t,
                      wasClean: r,
                    })
                }
                onChunk(e) {
                  if (e.status === 200) {
                    if (this.readyState === ve.OPEN) this.onActivity()
                    var t,
                      r = e.data.slice(0, 1)
                    switch (r) {
                      case "o":
                        t = JSON.parse(e.data.slice(1) || "{}")
                        this.onOpen(t)
                        break
                      case "a":
                        t = JSON.parse(e.data.slice(1) || "[]")
                        for (var s = 0; s < t.length; s++)
                          this.onEvent(t[s])
                        break
                      case "m":
                        t = JSON.parse(e.data.slice(1) || "null")
                        this.onEvent(t)
                        break
                      case "h":
                        this.hooks.onHeartbeat(this)
                        break
                      case "c":
                        t = JSON.parse(e.data.slice(1) || "[]")
                        this.onClose(t[0], t[1], true)
                        break
                    }
                  }
                }
                onOpen(e) {
                  if (this.readyState === ve.CONNECTING) {
                    if (e && e.hostname)
                      this.location.base = Pr(
                        this.location.base,
                        e.hostname
                      )
                    this.readyState = ve.OPEN
                    if (this.onopen) this.onopen()
                  } else {
                    this.onClose(1006, "Server lost session", true)
                  }
                }
                onEvent(e) {
                  if (this.readyState === ve.OPEN && this.onmessage)
                    this.onmessage({
                      data: e,
                    })
                }
                onActivity() {
                  if (this.onactivity) this.onactivity()
                }
                onError(e) {
                  if (this.onerror) this.onerror(e)
                }
                openStream() {
                  this.stream = R.createSocketRequest(
                    "POST",
                    Nt(
                      this.hooks.getReceiveURL(
                        this.location,
                        this.session
                      )
                    )
                  )
                  this.stream.bind("chunk", (e) => {
                    this.onChunk(e)
                  })
                  this.stream.bind("finished", (e) => {
                    this.hooks.onFinished(this, e)
                  })
                  this.stream.bind("buffer_too_long", () => {
                    this.reconnect()
                  })
                  try {
                    this.stream.start()
                  } catch (e) {
                    X.defer(() => {
                      this.onError(e)
                      this.onClose(
                        1006,
                        "Could not start streaming",
                        false
                      )
                    })
                  }
                }
                closeStream() {
                  if (this.stream) {
                    this.stream.unbind_all()
                    this.stream.close()
                    this.stream = null
                  }
                }
              }
              function xr(n) {
                var e = /([^\?]*)\/*(\??.*)/.exec(n)
                return {
                  base: e[1],
                  queryString: e[2],
                }
              }
              function Er(n, e) {
                return n.base + "/" + e + "/xhr_send"
              }
              function Nt(n) {
                var e = n.indexOf("?") === -1 ? "?" : "&"
                return n + e + "t=" + +new Date() + "&n=" + Cr++
              }
              function Pr(n, e) {
                var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n)
                return t[1] + e + t[3]
              }
              function Mt(n) {
                return R.randomInt(n)
              }
              function Tr(n) {
                for (var e = [], t = 0; t < n; t++)
                  e.push(Mt(32).toString(32))
                return e.join("")
              }
              var Lr = kr,
                Rr = {
                  getReceiveURL: function (n, e) {
                    return (
                      n.base +
                      "/" +
                      e +
                      "/xhr_streaming" +
                      n.queryString
                    )
                  },
                  onHeartbeat: function (n) {
                    n.sendRaw("[]")
                  },
                  sendHeartbeat: function (n) {
                    n.sendRaw("[]")
                  },
                  onFinished: function (n, e) {
                    n.onClose(
                      1006,
                      "Connection interrupted (" + e + ")",
                      false
                    )
                  },
                },
                Ir = Rr,
                Ar = {
                  getReceiveURL: function (n, e) {
                    return n.base + "/" + e + "/xhr" + n.queryString
                  },
                  onHeartbeat: function () {},
                  sendHeartbeat: function (n) {
                    n.sendRaw("[]")
                  },
                  onFinished: function (n, e) {
                    if (e === 200) {
                      n.reconnect()
                    } else {
                      n.onClose(
                        1006,
                        "Connection interrupted (" + e + ")",
                        false
                      )
                    }
                  },
                },
                Or = Ar,
                Br = {
                  getRequest: function (n) {
                    var e = R.getXHRAPI(),
                      t = new e()
                    return (
                      (t.onreadystatechange = t.onprogress =
                        function () {
                          switch (t.readyState) {
                            case 3:
                              if (
                                t.responseText &&
                                t.responseText.length > 0
                              )
                                n.onChunk(t.status, t.responseText)
                              break
                            case 4:
                              if (
                                t.responseText &&
                                t.responseText.length > 0
                              )
                                n.onChunk(t.status, t.responseText)
                              n.emit("finished", t.status)
                              n.close()
                              break
                          }
                        }),
                      t
                    )
                  },
                  abortRequest: function (n) {
                    n.onreadystatechange = null
                    n.abort()
                  },
                },
                jr = Br,
                Nr = {
                  createStreamingSocket(n) {
                    return this.createSocket(Ir, n)
                  },
                  createPollingSocket(n) {
                    return this.createSocket(Or, n)
                  },
                  createSocket(n, e) {
                    return new Lr(n, e)
                  },
                  createXHR(n, e) {
                    return this.createRequest(jr, n, e)
                  },
                  createRequest(n, e, t) {
                    return new _r(n, e, t)
                  },
                },
                Dt = Nr
              Dt.createXDR = function (n, e) {
                return this.createRequest(yr, n, e)
              }
              var Mr = Dt,
                Dr = {
                  nextAuthCallbackID: 1,
                  auth_callbacks: {},
                  ScriptReceivers: u,
                  DependenciesReceivers: w,
                  getDefaultStrategy: br,
                  Transports: Jn,
                  transportConnectionInitializer: vr,
                  HTTPFactory: Mr,
                  TimelineTransport: Bn,
                  getXHRAPI() {
                    return window.XMLHttpRequest
                  },
                  getWebSocketAPI() {
                    return window.WebSocket || window.MozWebSocket
                  },
                  setup(n) {
                    window.Pusher = n
                    var e = () => {
                      this.onDocumentBody(n.ready)
                    }
                    if (window.JSON) {
                      e()
                    } else {
                      p.load("json2", {}, e)
                    }
                  },
                  getDocument() {
                    return document
                  },
                  getProtocol() {
                    return this.getDocument().location.protocol
                  },
                  getAuthorizers() {
                    return {
                      ajax: P,
                      jsonp: Ln,
                    }
                  },
                  onDocumentBody(n) {
                    if (document.body) {
                      n()
                    } else {
                      setTimeout(() => {
                        this.onDocumentBody(n)
                      }, 0)
                    }
                  },
                  createJSONPRequest(n, e) {
                    return new In(n, e)
                  },
                  createScriptRequest(n) {
                    return new Rn(n)
                  },
                  getLocalStorage() {
                    try {
                      return window.localStorage
                    } catch {
                      return
                    }
                  },
                  createXHR() {
                    return this.getXHRAPI()
                      ? this.createXMLHttpRequest()
                      : this.createMicrosoftXHR()
                  },
                  createXMLHttpRequest() {
                    var n = this.getXHRAPI()
                    return new n()
                  },
                  createMicrosoftXHR() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                  },
                  getNetwork() {
                    return Kn
                  },
                  createWebSocket(n) {
                    var e = this.getWebSocketAPI()
                    return new e(n)
                  },
                  createSocketRequest(n, e) {
                    if (this.isXHRSupported())
                      return this.HTTPFactory.createXHR(n, e)
                    if (
                      this.isXDRSupported(e.indexOf("https:") === 0)
                    )
                      return this.HTTPFactory.createXDR(n, e)
                    throw "Cross-origin HTTP requests are not supported"
                  },
                  isXHRSupported() {
                    var n = this.getXHRAPI()
                    return !!n && new n().withCredentials !== void 0
                  },
                  isXDRSupported(n) {
                    var e = n ? "https:" : "http:",
                      t = this.getProtocol()
                    return !!window.XDomainRequest && t === e
                  },
                  addUnloadListener(n) {
                    if (window.addEventListener !== void 0) {
                      window.addEventListener("unload", n, false)
                    } else {
                      if (window.attachEvent !== void 0)
                        window.attachEvent("onunload", n)
                    }
                  },
                  removeUnloadListener(n) {
                    if (window.addEventListener !== void 0) {
                      window.removeEventListener("unload", n, false)
                    } else {
                      if (window.detachEvent !== void 0)
                        window.detachEvent("onunload", n)
                    }
                  },
                  randomInt(n) {
                    return Math.floor(
                      (function () {
                        return (
                          (
                            window.crypto || window.msCrypto
                          ).getRandomValues(new Uint32Array(1))[0] /
                          Math.pow(2, 32)
                        )
                      })() * n
                    )
                  },
                },
                R = Dr,
                ct
              ;(function (n) {
                n[(n.ERROR = 3)] = "ERROR"
                n[(n.INFO = 6)] = "INFO"
                n[(n.DEBUG = 7)] = "DEBUG"
              })(ct || (ct = {}))
              var Xe = ct
              class $r {
                constructor(e, t, r) {
                  this.key = e
                  this.session = t
                  this.events = []
                  this.options = r || {}
                  this.sent = 0
                  this.uniqueID = 0
                }
                log(e, t) {
                  if (e <= this.options.level) {
                    this.events.push(
                      V({}, t, {
                        timestamp: X.now(),
                      })
                    )
                    if (
                      this.options.limit &&
                      this.events.length > this.options.limit
                    )
                      this.events.shift()
                  }
                }
                error(e) {
                  this.log(Xe.ERROR, e)
                }
                info(e) {
                  this.log(Xe.INFO, e)
                }
                debug(e) {
                  this.log(Xe.DEBUG, e)
                }
                isEmpty() {
                  return this.events.length === 0
                }
                send(e, t) {
                  var r = V(
                    {
                      session: this.session,
                      bundle: this.sent + 1,
                      key: this.key,
                      lib: "js",
                      version: this.options.version,
                      cluster: this.options.cluster,
                      features: this.options.features,
                      timeline: this.events,
                    },
                    this.options.params
                  )
                  return (
                    (this.events = []),
                    e(r, (s, d) => {
                      s || this.sent++
                      if (t) t(s, d)
                    }),
                    true
                  )
                }
                generateUniqueID() {
                  return this.uniqueID++, this.uniqueID
                }
              }
              class Ur {
                constructor(e, t, r, s) {
                  this.name = e
                  this.priority = t
                  this.transport = r
                  this.options = s || {}
                }
                isSupported() {
                  return this.transport.isSupported({
                    useTLS: this.options.useTLS,
                  })
                }
                connect(e, t) {
                  if (this.isSupported()) {
                    if (this.priority < e) return $t(new O(), t)
                  } else return $t(new Q(), t)
                  var r = false,
                    s = this.transport.createConnection(
                      this.name,
                      this.priority,
                      this.options.key,
                      this.options
                    ),
                    d = null,
                    b = function () {
                      s.unbind("initialized", b)
                      s.connect()
                    },
                    C = function () {
                      d = ce.createHandshake(s, function (U) {
                        r = true
                        B()
                        t(null, U)
                      })
                    },
                    L = function (U) {
                      B()
                      t(U)
                    },
                    A = function () {
                      B()
                      var U
                      U = qe(s)
                      t(new N(U))
                    },
                    B = function () {
                      s.unbind("initialized", b)
                      s.unbind("open", C)
                      s.unbind("error", L)
                      s.unbind("closed", A)
                    }
                  return (
                    s.bind("initialized", b),
                    s.bind("open", C),
                    s.bind("error", L),
                    s.bind("closed", A),
                    s.initialize(),
                    {
                      abort: () => {
                        r || (B(), d ? d.close() : s.close())
                      },
                      forceMinPriority: (U) => {
                        r ||
                          (this.priority < U &&
                            (d ? d.close() : s.close()))
                      },
                    }
                  )
                }
              }
              function $t(n, e) {
                return (
                  X.defer(function () {
                    e(n)
                  }),
                  {
                    abort: function () {},
                    forceMinPriority: function () {},
                  }
                )
              }
              const { Transports: zr } = R
              var Hr = function (n, e, t, r, s, d) {
                  var b = zr[t]
                  if (!b) throw new D(t)
                  var C =
                      (!n.enabledTransports ||
                        _t(n.enabledTransports, e) !== -1) &&
                      (!n.disabledTransports ||
                        _t(n.disabledTransports, e) === -1),
                    L
                  return (
                    C
                      ? ((s = Object.assign(
                          {
                            ignoreNullOrigin: n.ignoreNullOrigin,
                          },
                          s
                        )),
                        (L = new Ur(
                          e,
                          r,
                          d ? d.getAssistant(b) : b,
                          s
                        )))
                      : (L = qr),
                    L
                  )
                },
                qr = {
                  isSupported: function () {
                    return false
                  },
                  connect: function (n, e) {
                    var t = X.defer(function () {
                      e(new Q())
                    })
                    return {
                      abort: function () {
                        t.ensureAborted()
                      },
                      forceMinPriority: function () {},
                    }
                  },
                }
              function Wr(n) {
                if (n == null) throw "You must pass an options object"
                if (n.cluster == null)
                  throw "Options object must provide a cluster"
                if ("disableStats" in n)
                  M.warn(
                    "The disableStats option is deprecated in favor of enableStats"
                  )
              }
              const Fr = (n, e) => {
                var t = "socket_id=" + encodeURIComponent(n.socketId)
                for (var r in e.params)
                  t +=
                    "&" +
                    encodeURIComponent(r) +
                    "=" +
                    encodeURIComponent(e.params[r])
                if (e.paramsProvider != null) {
                  let s = e.paramsProvider()
                  for (var r in s)
                    t +=
                      "&" +
                      encodeURIComponent(r) +
                      "=" +
                      encodeURIComponent(s[r])
                }
                return t
              }
              var Xr = (n) => {
                if (typeof R.getAuthorizers()[n.transport] > "u")
                  throw `'${n.transport}' is not a recognized auth transport`
                return (e, t) => {
                  const r = Fr(e, n)
                  R.getAuthorizers()[n.transport](
                    R,
                    r,
                    n,
                    _.UserAuthentication,
                    t
                  )
                }
              }
              const Jr = (n, e) => {
                var t = "socket_id=" + encodeURIComponent(n.socketId)
                t +=
                  "&channel_name=" + encodeURIComponent(n.channelName)
                for (var r in e.params)
                  t +=
                    "&" +
                    encodeURIComponent(r) +
                    "=" +
                    encodeURIComponent(e.params[r])
                if (e.paramsProvider != null) {
                  let s = e.paramsProvider()
                  for (var r in s)
                    t +=
                      "&" +
                      encodeURIComponent(r) +
                      "=" +
                      encodeURIComponent(s[r])
                }
                return t
              }
              var Gr = (n) => {
                if (typeof R.getAuthorizers()[n.transport] > "u")
                  throw `'${n.transport}' is not a recognized auth transport`
                return (e, t) => {
                  const r = Jr(e, n)
                  R.getAuthorizers()[n.transport](
                    R,
                    r,
                    n,
                    _.ChannelAuthorization,
                    t
                  )
                }
              }
              const Kr = (n, e, t) => {
                const r = {
                  authTransport: e.transport,
                  authEndpoint: e.endpoint,
                  auth: {
                    params: e.params,
                    headers: e.headers,
                  },
                }
                return (s, d) => {
                  const b = n.channel(s.channelName)
                  t(b, r).authorize(s.socketId, d)
                }
              }
              function Yr(n, e) {
                let t = {
                  activityTimeout:
                    n.activityTimeout || g.activityTimeout,
                  cluster: n.cluster,
                  httpPath: n.httpPath || g.httpPath,
                  httpPort: n.httpPort || g.httpPort,
                  httpsPort: n.httpsPort || g.httpsPort,
                  pongTimeout: n.pongTimeout || g.pongTimeout,
                  statsHost: n.statsHost || g.stats_host,
                  unavailableTimeout:
                    n.unavailableTimeout || g.unavailableTimeout,
                  wsPath: n.wsPath || g.wsPath,
                  wsPort: n.wsPort || g.wsPort,
                  wssPort: n.wssPort || g.wssPort,
                  enableStats: ti(n),
                  httpHost: Vr(n),
                  useTLS: ei(n),
                  wsHost: Qr(n),
                  userAuthenticator: ni(n),
                  channelAuthorizer: ii(n, e),
                }
                return (
                  "disabledTransports" in n &&
                    (t.disabledTransports = n.disabledTransports),
                  "enabledTransports" in n &&
                    (t.enabledTransports = n.enabledTransports),
                  "ignoreNullOrigin" in n &&
                    (t.ignoreNullOrigin = n.ignoreNullOrigin),
                  "timelineParams" in n &&
                    (t.timelineParams = n.timelineParams),
                  "nacl" in n && (t.nacl = n.nacl),
                  t
                )
              }
              function Vr(n) {
                return n.httpHost
                  ? n.httpHost
                  : n.cluster
                  ? `sockjs-${n.cluster}.pusher.com`
                  : g.httpHost
              }
              function Qr(n) {
                return n.wsHost ? n.wsHost : Zr(n.cluster)
              }
              function Zr(n) {
                return `ws-${n}.pusher.com`
              }
              function ei(n) {
                return R.getProtocol() === "https:"
                  ? true
                  : n.forceTLS !== false
              }
              function ti(n) {
                return "enableStats" in n
                  ? n.enableStats
                  : "disableStats" in n
                  ? !n.disableStats
                  : false
              }
              function ni(n) {
                const e = Object.assign(
                  Object.assign({}, g.userAuthentication),
                  n.userAuthentication
                )
                return "customHandler" in e && e.customHandler != null
                  ? e.customHandler
                  : Xr(e)
              }
              function ri(n, e) {
                let t
                return (
                  "channelAuthorization" in n
                    ? (t = Object.assign(
                        Object.assign({}, g.channelAuthorization),
                        n.channelAuthorization
                      ))
                    : ((t = {
                        transport: n.authTransport || g.authTransport,
                        endpoint: n.authEndpoint || g.authEndpoint,
                      }),
                      "auth" in n &&
                        ("params" in n.auth &&
                          (t.params = n.auth.params),
                        "headers" in n.auth &&
                          (t.headers = n.auth.headers)),
                      "authorizer" in n &&
                        (t.customHandler = Kr(e, t, n.authorizer))),
                  t
                )
              }
              function ii(n, e) {
                const t = ri(n, e)
                return "customHandler" in t && t.customHandler != null
                  ? t.customHandler
                  : Gr(t)
              }
              class si extends ae {
                constructor(e) {
                  super(function (t, r) {
                    M.debug(
                      `No callbacks on watchlist events for ${t}`
                    )
                  })
                  this.pusher = e
                  this.bindWatchlistInternalEvent()
                }
                handleEvent(e) {
                  e.data.events.forEach((t) => {
                    this.emit(t.name, t)
                  })
                }
                bindWatchlistInternalEvent() {
                  this.pusher.connection.bind("message", (e) => {
                    var t = e.event
                    if (t === "pusher_internal:watchlist_events")
                      this.handleEvent(e)
                  })
                }
              }
              function oi() {
                let n, e
                return {
                  promise: new Promise((r, s) => {
                    n = r
                    e = s
                  }),
                  resolve: n,
                  reject: e,
                }
              }
              var ai = oi
              class ci extends ae {
                constructor(e) {
                  super(function (t, r) {
                    M.debug("No callbacks on user for " + t)
                  })
                  this.signin_requested = false
                  this.user_data = null
                  this.serverToUserChannel = null
                  this.signinDonePromise = null
                  this._signinDoneResolve = null
                  this._onAuthorize = (t, r) => {
                    if (t) {
                      M.warn(`Error during signin: ${t}`)
                      this._cleanup()
                      return
                    }
                    this.pusher.send_event("pusher:signin", {
                      auth: r.auth,
                      user_data: r.user_data,
                    })
                  }
                  this.pusher = e
                  this.pusher.connection.bind(
                    "state_change",
                    ({ previous: t, current: r }) => {
                      if (t !== "connected" && r === "connected")
                        this._signin()
                      if (t === "connected" && r !== "connected") {
                        this._cleanup()
                        this._newSigninPromiseIfNeeded()
                      }
                    }
                  )
                  this.watchlist = new si(e)
                  this.pusher.connection.bind("message", (t) => {
                    var r = t.event
                    if (r === "pusher:signin_success")
                      this._onSigninSuccess(t.data)
                    if (
                      this.serverToUserChannel &&
                      this.serverToUserChannel.name === t.channel
                    )
                      this.serverToUserChannel.handleEvent(t)
                  })
                }
                signin() {
                  this.signin_requested ||
                    ((this.signin_requested = true), this._signin())
                }
                _signin() {
                  if (this.signin_requested) {
                    this._newSigninPromiseIfNeeded()
                    if (this.pusher.connection.state === "connected")
                      this.pusher.config.userAuthenticator(
                        {
                          socketId: this.pusher.connection.socket_id,
                        },
                        this._onAuthorize
                      )
                  }
                }
                _onSigninSuccess(e) {
                  try {
                    this.user_data = JSON.parse(e.user_data)
                  } catch {
                    M.error(
                      `Failed parsing user data after signin: ${e.user_data}`
                    )
                    this._cleanup()
                    return
                  }
                  if (
                    typeof this.user_data.id != "string" ||
                    this.user_data.id === ""
                  ) {
                    M.error(
                      `user_data doesn't contain an id. user_data: ${this.user_data}`
                    )
                    this._cleanup()
                    return
                  }
                  this._signinDoneResolve()
                  this._subscribeChannels()
                }
                _subscribeChannels() {
                  const e = (t) => {
                    if (
                      t.subscriptionPending &&
                      t.subscriptionCancelled
                    ) {
                      t.reinstateSubscription()
                    } else {
                      if (
                        !t.subscriptionPending &&
                        this.pusher.connection.state === "connected"
                      )
                        t.subscribe()
                    }
                  }
                  this.serverToUserChannel = new nt(
                    `#server-to-user-${this.user_data.id}`,
                    this.pusher
                  )
                  this.serverToUserChannel.bind_global((t, r) => {
                    t.indexOf("pusher_internal:") === 0 ||
                      t.indexOf("pusher:") === 0 ||
                      this.emit(t, r)
                  })
                  e(this.serverToUserChannel)
                }
                _cleanup() {
                  this.user_data = null
                  if (this.serverToUserChannel) {
                    this.serverToUserChannel.unbind_all()
                    this.serverToUserChannel.disconnect()
                    this.serverToUserChannel = null
                  }
                  if (this.signin_requested) this._signinDoneResolve()
                }
                _newSigninPromiseIfNeeded() {
                  if (
                    !this.signin_requested ||
                    (this.signinDonePromise &&
                      !this.signinDonePromise.done)
                  )
                    return
                  const { promise: e, resolve: t } = ai()
                  e.done = false
                  const r = () => {
                    e.done = true
                  }
                  e.then(r).catch(r)
                  this.signinDonePromise = e
                  this._signinDoneResolve = t
                }
              }
              class W {
                static ready() {
                  W.isReady = true
                  for (var e = 0, t = W.instances.length; e < t; e++)
                    W.instances[e].connect()
                }
                static getClientFeatures() {
                  return Ct(
                    Et(
                      {
                        ws: R.Transports.ws,
                      },
                      function (e) {
                        return e.isSupported({})
                      }
                    )
                  )
                }
                constructor(e, t) {
                  li(e)
                  Wr(t)
                  this.key = e
                  this.config = Yr(t, this)
                  this.channels = ce.createChannels()
                  this.global_emitter = new ae()
                  this.sessionID = R.randomInt(1e9)
                  this.timeline = new $r(this.key, this.sessionID, {
                    cluster: this.config.cluster,
                    features: W.getClientFeatures(),
                    params: this.config.timelineParams || {},
                    limit: 50,
                    level: Xe.INFO,
                    version: g.VERSION,
                  })
                  if (this.config.enableStats)
                    this.timelineSender = ce.createTimelineSender(
                      this.timeline,
                      {
                        host: this.config.statsHost,
                        path:
                          "/timeline/v2/" + R.TimelineTransport.name,
                      }
                    )
                  var r = (s) =>
                    R.getDefaultStrategy(this.config, s, Hr)
                  this.connection = ce.createConnectionManager(
                    this.key,
                    {
                      getStrategy: r,
                      timeline: this.timeline,
                      activityTimeout: this.config.activityTimeout,
                      pongTimeout: this.config.pongTimeout,
                      unavailableTimeout:
                        this.config.unavailableTimeout,
                      useTLS: !!this.config.useTLS,
                    }
                  )
                  this.connection.bind("connected", () => {
                    this.subscribeAll()
                    if (this.timelineSender)
                      this.timelineSender.send(
                        this.connection.isUsingTLS()
                      )
                  })
                  this.connection.bind("message", (s) => {
                    var d = s.event,
                      b = d.indexOf("pusher_internal:") === 0
                    if (s.channel) {
                      var C = this.channel(s.channel)
                      if (C) C.handleEvent(s)
                    }
                    b || this.global_emitter.emit(s.event, s.data)
                  })
                  this.connection.bind("connecting", () => {
                    this.channels.disconnect()
                  })
                  this.connection.bind("disconnected", () => {
                    this.channels.disconnect()
                  })
                  this.connection.bind("error", (s) => {
                    M.warn(s)
                  })
                  W.instances.push(this)
                  this.timeline.info({
                    instances: W.instances.length,
                  })
                  this.user = new ci(this)
                  if (W.isReady) this.connect()
                }
                channel(e) {
                  return this.channels.find(e)
                }
                allChannels() {
                  return this.channels.all()
                }
                connect() {
                  if (
                    (this.connection.connect(),
                    this.timelineSender && !this.timelineSenderTimer)
                  ) {
                    var e = this.connection.isUsingTLS(),
                      t = this.timelineSender
                    this.timelineSenderTimer = new bn(
                      6e4,
                      function () {
                        t.send(e)
                      }
                    )
                  }
                }
                disconnect() {
                  this.connection.disconnect()
                  if (this.timelineSenderTimer) {
                    this.timelineSenderTimer.ensureAborted()
                    this.timelineSenderTimer = null
                  }
                }
                bind(e, t, r) {
                  return this.global_emitter.bind(e, t, r), this
                }
                unbind(e, t, r) {
                  return this.global_emitter.unbind(e, t, r), this
                }
                bind_global(e) {
                  return this.global_emitter.bind_global(e), this
                }
                unbind_global(e) {
                  return this.global_emitter.unbind_global(e), this
                }
                unbind_all(e) {
                  return this.global_emitter.unbind_all(), this
                }
                subscribeAll() {
                  var e
                  for (e in this.channels.channels)
                    if (this.channels.channels.hasOwnProperty(e))
                      this.subscribe(e)
                }
                subscribe(e) {
                  var t = this.channels.add(e, this)
                  return (
                    t.subscriptionPending && t.subscriptionCancelled
                      ? t.reinstateSubscription()
                      : !t.subscriptionPending &&
                        this.connection.state === "connected" &&
                        t.subscribe(),
                    t
                  )
                }
                unsubscribe(e) {
                  var t = this.channels.find(e)
                  if (t && t.subscriptionPending) {
                    t.cancelSubscription()
                  } else {
                    t = this.channels.remove(e)
                    if (t && t.subscribed) t.unsubscribe()
                  }
                }
                send_event(e, t, r) {
                  return this.connection.send_event(e, t, r)
                }
                shouldUseTLS() {
                  return this.config.useTLS
                }
                signin() {
                  this.user.signin()
                }
              }
              W.instances = []
              W.isReady = false
              W.logToConsole = false
              W.Runtime = R
              W.ScriptReceivers = R.ScriptReceivers
              W.DependenciesReceivers = R.DependenciesReceivers
              W.auth_callbacks = R.auth_callbacks
              var lt = (l.default = W)
              function li(n) {
                if (n == null)
                  throw "You must pass your app key when you instantiate Pusher."
              }
              R.setup(W)
            },
          ])
        })
      })(dt)),
    dt.exports
  )
}
var Si = yi()
const _i = wi(Si)
function Ci(
  i,
  o,
  { zoomMultiplier: a = 0.7, contentSize: l = 800 } = {}
) {
  let u = 1,
    v = 0,
    g = 0,
    f = false,
    w = 0,
    p = 0,
    S = false
  const E = (P, $, I) => Math.max($, Math.min(I, P)),
    k = () => {
      S = true
    },
    _ = () => {
      o.style.transform = `translate(${v}px, ${g}px) scale(${u})`
    },
    m = (P, $) => {
      const I = i.getBoundingClientRect()
      return {
        x: P - I.left,
        y: $ - I.top,
      }
    },
    y = (P, $) => {
      const I = m(P, $)
      return {
        x: (I.x - v) / u,
        y: (I.y - g) / u,
      }
    },
    T = (P, $, I) => {
      k()
      const Z = y(P, $),
        se = E(u * I, 0.4, 3.5)
      v += Z.x * (u - se)
      g += Z.y * (u - se)
      u = se
      _()
    },
    O = ({ scale: P = u, tx: $ = v, ty: I = g } = {}) => {
      u = E(P, 0.4, 3.5)
      v = $
      g = I
      _()
    },
    N = (P = l, $ = l) => {
      const I = i.getBoundingClientRect()
      v = Math.floor((I.width - P * u) / 2)
      g = Math.floor((I.height - $ * u) / 2)
      _()
    },
    j = (P = l, $ = l) => {
      const I = i.getBoundingClientRect(),
        Z = 20,
        se = (I.width - Z) / P,
        Ce = (I.height - Z) / $,
        pe = Math.min(se, Ce, 1.1)
      u = E(pe, 0.4, 3.5)
      v = Math.floor((I.width - P * u) / 2)
      g = Math.floor((I.height - $ * u) / 2)
      _()
    },
    D = () => {
      S = false
    },
    Q = () => S,
    F = (P, $, I, Z = 8, se = 8) => {
      const Ce = y(P, $),
        pe = Math.floor(Ce.x / I),
        ke = Math.floor(Ce.y / I)
      return pe < 0 || pe >= Z || ke < 0 || ke >= se
        ? null
        : {
            col: pe,
            row: ke,
          }
    }
  i.addEventListener("dragstart", (P) => {
    P.preventDefault()
  })
  i.addEventListener(
    "wheel",
    (P) => {
      P.preventDefault()
      const $ = Math.exp(-P.deltaY * 0.0015 * a)
      T(P.clientX, P.clientY, $)
    },
    {
      passive: false,
    }
  )
  i.addEventListener("pointerdown", (P) => {
    if (P.button === 0) {
      P.preventDefault()
      k()
      f = true
      w = P.clientX
      p = P.clientY
      i.classList.add("dragging")
      i.setPointerCapture(P.pointerId)
    }
  })
  i.addEventListener("pointermove", (P) => {
    if (f) {
      v += P.clientX - w
      g += P.clientY - p
      w = P.clientX
      p = P.clientY
      _()
    }
  })
  const Y = () => {
    f = false
    i.classList.remove("dragging")
  }
  return (
    i.addEventListener("pointerup", (P) => {
      if (P.button === 0) {
        try {
          i.releasePointerCapture(P.pointerId)
        } catch {}
        Y()
      }
    }),
    i.addEventListener("lostpointercapture", Y),
    i.addEventListener("dblclick", () => {
      j()
    }),
    {
      setTransform: O,
      screenToWorld: y,
      centerContent: N,
      fitAndCenterContent: j,
      resetInteractionState: D,
      hasInteracted: Q,
      toGridSquare: F,
    }
  )
}
const rn = 4,
  sn = [
    {
      name: "frozen",
      emoji: "❄️",
    },
    {
      name: "immortal",
      emoji: "☠️",
    },
    {
      name: "pawn_moveset",
      emoji: "♟️",
    },
    {
      name: "king_moveset",
      emoji: "🫅",
    },
    {
      name: "queen_moveset",
      emoji: "👸",
    },
    {
      name: "soul_link",
      emoji: "👨‍❤️‍👨",
    },
    {
      name: "on_ice",
      emoji: "☃️",
    },
    {
      name: "misc_1",
      emoji: "💪",
    },
    {
      name: "misc_2",
      emoji: "🩸",
    },
    {
      name: "misc_3",
      emoji: "💣",
    },
    {
      name: "misc_4",
      emoji: "👑",
    },
    {
      name: "misc_5",
      emoji: "🐎",
    },
  ],
  ki = Object.fromEntries(sn.map((i) => [i.name, i.emoji])),
  on = [
    {
      name: "blocked",
      emoji: "❌",
    },
    {
      name: "misc_1",
      emoji: "💣",
    },
    {
      name: "misc_2",
      emoji: "💀",
    },
    {
      name: "misc_3",
      emoji: "❄️",
    },
    {
      name: "misc_4",
      emoji: "🔀",
    },
    {
      name: "misc_5",
      emoji: "🌪️",
    },
    {
      name: "misc_6",
      emoji: "💰",
    },
    {
      name: "misc_7",
      emoji: "🕳️",
    },
    {
      name: "misc_8",
      emoji: "⚡",
    },
    {
      name: "misc_9",
      emoji: "☢️",
    },
  ],
  xi = Object.fromEntries(on.map((i) => [i.name, i.emoji])),
  _e = 100,
  Ei = [
    "White King 1.png",
    "White Queen 1.png",
    "White Rook 1.png",
    "White Rook 2.png",
    "White Bishop 1.png",
    "White Bishop 2.png",
    "White Knight 1.png",
    "White Knight 2.png",
    "White Pawn 1.png",
    "White Pawn 2.png",
    "White Pawn 3.png",
    "White Pawn 4.png",
    "White Pawn 5.png",
    "White Pawn 6.png",
    "White Pawn 7.png",
    "White Pawn 8.png",
    "Black King 1.png",
    "Black Queen 1.png",
    "Black Rook 1.png",
    "Black Rook 2.png",
    "Black Bishop 1.png",
    "Black Bishop 2.png",
    "Black Knight 1.png",
    "Black Knight 2.png",
    "Black Pawn 1.png",
    "Black Pawn 2.png",
    "Black Pawn 3.png",
    "Black Pawn 4.png",
    "Black Pawn 5.png",
    "Black Pawn 6.png",
    "Black Pawn 7.png",
    "Black Pawn 8.png",
  ],
  Pi = [
    {
      slot: "1",
      label: "White Rook 1",
      color: "white",
      image: "White Rook 1.png",
      col: 0,
      row: 7,
    },
    {
      slot: "2",
      label: "White Knight 1",
      color: "white",
      image: "White Knight 1.png",
      col: 1,
      row: 7,
    },
    {
      slot: "3",
      label: "White Bishop 1",
      color: "white",
      image: "White Bishop 1.png",
      col: 2,
      row: 7,
    },
    {
      slot: "4",
      label: "White Queen",
      color: "white",
      image: "White Queen 1.png",
      col: 3,
      row: 7,
    },
    {
      slot: "5",
      label: "White King",
      color: "white",
      image: "White King 1.png",
      col: 4,
      row: 7,
    },
    {
      slot: "6",
      label: "White Bishop 2",
      color: "white",
      image: "White Bishop 2.png",
      col: 5,
      row: 7,
    },
    {
      slot: "7",
      label: "White Knight 2",
      color: "white",
      image: "White Knight 2.png",
      col: 6,
      row: 7,
    },
    {
      slot: "8",
      label: "White Rook 2",
      color: "white",
      image: "White Rook 2.png",
      col: 7,
      row: 7,
    },
    {
      slot: "9",
      label: "White Pawn 1",
      color: "white",
      image: "White Pawn 1.png",
      col: 0,
      row: 6,
    },
    {
      slot: "10",
      label: "White Pawn 2",
      color: "white",
      image: "White Pawn 2.png",
      col: 1,
      row: 6,
    },
    {
      slot: "11",
      label: "White Pawn 3",
      color: "white",
      image: "White Pawn 3.png",
      col: 2,
      row: 6,
    },
    {
      slot: "12",
      label: "White Pawn 4",
      color: "white",
      image: "White Pawn 4.png",
      col: 3,
      row: 6,
    },
    {
      slot: "13",
      label: "White Pawn 5",
      color: "white",
      image: "White Pawn 5.png",
      col: 4,
      row: 6,
    },
    {
      slot: "14",
      label: "White Pawn 6",
      color: "white",
      image: "White Pawn 6.png",
      col: 5,
      row: 6,
    },
    {
      slot: "15",
      label: "White Pawn 7",
      color: "white",
      image: "White Pawn 7.png",
      col: 6,
      row: 6,
    },
    {
      slot: "16",
      label: "White Pawn 8",
      color: "white",
      image: "White Pawn 8.png",
      col: 7,
      row: 6,
    },
    {
      slot: "17",
      label: "Black Pawn 1",
      color: "black",
      image: "Black Pawn 1.png",
      col: 0,
      row: 1,
    },
    {
      slot: "18",
      label: "Black Pawn 2",
      color: "black",
      image: "Black Pawn 2.png",
      col: 1,
      row: 1,
    },
    {
      slot: "19",
      label: "Black Pawn 3",
      color: "black",
      image: "Black Pawn 3.png",
      col: 2,
      row: 1,
    },
    {
      slot: "20",
      label: "Black Pawn 4",
      color: "black",
      image: "Black Pawn 4.png",
      col: 3,
      row: 1,
    },
    {
      slot: "21",
      label: "Black Pawn 5",
      color: "black",
      image: "Black Pawn 5.png",
      col: 4,
      row: 1,
    },
    {
      slot: "22",
      label: "Black Pawn 6",
      color: "black",
      image: "Black Pawn 6.png",
      col: 5,
      row: 1,
    },
    {
      slot: "23",
      label: "Black Pawn 7",
      color: "black",
      image: "Black Pawn 7.png",
      col: 6,
      row: 1,
    },
    {
      slot: "24",
      label: "Black Pawn 8",
      color: "black",
      image: "Black Pawn 8.png",
      col: 7,
      row: 1,
    },
    {
      slot: "25",
      label: "Black Rook 1",
      color: "black",
      image: "Black Rook 1.png",
      col: 0,
      row: 0,
    },
    {
      slot: "26",
      label: "Black Knight 1",
      color: "black",
      image: "Black Knight 1.png",
      col: 1,
      row: 0,
    },
    {
      slot: "27",
      label: "Black Bishop 1",
      color: "black",
      image: "Black Bishop 1.png",
      col: 2,
      row: 0,
    },
    {
      slot: "28",
      label: "Black Queen",
      color: "black",
      image: "Black Queen 1.png",
      col: 3,
      row: 0,
    },
    {
      slot: "29",
      label: "Black King",
      color: "black",
      image: "Black King 1.png",
      col: 4,
      row: 0,
    },
    {
      slot: "30",
      label: "Black Bishop 2",
      color: "black",
      image: "Black Bishop 2.png",
      col: 5,
      row: 0,
    },
    {
      slot: "31",
      label: "Black Knight 2",
      color: "black",
      image: "Black Knight 2.png",
      col: 6,
      row: 0,
    },
    {
      slot: "32",
      label: "Black Rook 2",
      color: "black",
      image: "Black Rook 2.png",
      col: 7,
      row: 0,
    },
  ],
  x = {
    pieces: {},
    selectedSlot: null,
    boardEffects: {},
    highlightedSquare: null,
  },
  te = () => {
    const i = {}
    for (const [o, a] of Object.entries(x.pieces))
      i[o] = {
        image: a.image,
        captured: a.captured,
        position: {
          ...a.position,
        },
        emojis: [...a.emojis],
      }
    i.selectedSlot = x.selectedSlot
    i.boardEffects = {}
    for (const [o, a] of Object.entries(x.boardEffects))
      if (a.length > 0) i.boardEffects[o] = [...a]
    return (
      (i.highlightedSquare = x.highlightedSquare
        ? {
            ...x.highlightedSquare,
          }
        : null),
      i
    )
  },
  fe = (i, o) => `${String.fromCharCode(65 + i)}${8 - o}`,
  Ti = () => {
    Pi.forEach((i) => {
      x.pieces[i.slot] = {
        slot: i.slot,
        label: i.label,
        color: i.color,
        image: i.image,
        initialImage: i.image,
        position: {
          col: i.col,
          row: i.row,
        },
        initialPosition: {
          col: i.col,
          row: i.row,
        },
        notation: fe(i.col, i.row),
        captured: false,
        emojis: [],
      }
    })
  },
  Pe = (i, o) =>
    Object.values(x.pieces).find(
      (a) =>
        !a.captured && a.position.col === i && a.position.row === o
    ) || null,
  gt = () => {
    const i = x.selectedSlot
    return (x.selectedSlot = null), i
  },
  Li = (i) => {
    const o = x.pieces[i]
    return !o || o.captured || x.selectedSlot === i
      ? null
      : (gt(), (x.selectedSlot = i), o)
  },
  Ri = (i) => {
    if (!i || !i.captured) return null
    const o = Pe(i.initialPosition.col, i.initialPosition.row)
    return o
      ? {
          blocked: true,
          blockerLabel: o.label,
        }
      : ((i.captured = false),
        (i.position = {
          ...i.initialPosition,
        }),
        (i.notation = fe(i.position.col, i.position.row)),
        (i.image = i.initialImage),
        (i.emojis = []),
        {
          blocked: false,
          piece: i,
        })
  },
  an = (i) =>
    !i || i.captured
      ? null
      : ((i.captured = true),
        (i.emojis = []),
        x.selectedSlot === i.slot && (x.selectedSlot = null),
        i),
  Ii = (i, o, a) => {
    const l = x.pieces[i]
    if (!l || l.captured) return null
    const h = {
        col: l.position.col,
        row: l.position.row,
      },
      c = Pe(o, a)
    let u = null
    return (
      c && c.slot !== i && (an(c), (u = c)),
      (l.position = {
        col: o,
        row: a,
      }),
      (l.notation = fe(o, a)),
      {
        piece: l,
        from: h,
        to: {
          col: o,
          row: a,
        },
        capturedPiece: u,
      }
    )
  },
  Ai = () => {
    gt()
    const i = []
    return (
      Object.values(x.pieces).forEach((o) => {
        o.captured = false
        o.position = {
          ...o.initialPosition,
        }
        o.notation = fe(o.position.col, o.position.row)
        o.image = o.initialImage
        o.emojis = []
        i.push(o)
      }),
      (x.boardEffects = {}),
      (x.highlightedSquare = null),
      i
    )
  }
async function bt(i, o = {}) {
  const a = new URLSearchParams(o).toString(),
    l = a ? `${i}?${a}` : i
  return await (await fetch(l)).json()
}
async function K(i, o = {}) {
  return await (
    await fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(o),
    })
  ).json()
}
function q() {
  let i = localStorage.getItem("userId")
  return (
    i ||
      ((i = crypto.randomUUID()), localStorage.setItem("userId", i)),
    i
  )
}
const Kt = (i) => i[Math.floor(Math.random() * i.length)],
  vt = () => {
    ;[Kt(ji), Kt(Ni)].forEach((i) => {
      const o = new Audio(i)
      o.volume = 0.8
      o.play().catch(() => {})
    })
  },
  Oi = "/sounds/Peggle%20Free%20Ball%201%20(Quiet%20V3).wav",
  Bi = () => {
    const i = new Audio(Oi)
    i.volume = 0.8
    i.play().catch(() => {})
  },
  ji = [
    "hit sound 1.wav",
    "hit sound 2.wav",
    "hit sound 3.wav",
    "hit sound 4.wav",
  ].map((i) => `/sounds/${encodeURIComponent(i)}`),
  Ni = [
    "audience sound 1.wav",
    "audience sound 2.wav",
    "audience sound 3.wav",
    "audience sound 4.wav",
  ].map((i) => `/sounds/${encodeURIComponent(i)}`),
  J = {
    currentTurn: 1,
    currentPlayer: "white",
    currentRules: [],
    newRuleChoices: [],
  },
  Mi = 1,
  Di = 4,
  $i = {
    1: qi,
    2: Wi,
    3: Fi,
    4: Xi,
  }
function cn(i, o) {
  const a = document.createElement("div")
  a.className = "new-rules-bg"
  i.insertBefore(a, i.firstChild)
  const l = $i[o]
  if (!l) return null
  const h = l(a)
  return () => {
    h()
    a.remove()
  }
}
let Ke = null
function Ui(i) {
  zi()
  Ke = cn(i, Mi)
}
function zi() {
  if (Ke) {
    Ke()
    Ke = null
  }
}
let Ye = null
function Hi(i) {
  wt()
  Ye = cn(i, Di)
}
function wt() {
  if (Ye) {
    Ye()
    Ye = null
  }
}
function qi(i) {
  const a = i.clientWidth || 300,
    l = i.clientHeight || 600,
    h = [
      {
        r: 129,
        g: 182,
        b: 76,
      },
      {
        r: 163,
        g: 209,
        b: 96,
      },
      {
        r: 98,
        g: 153,
        b: 36,
      },
      {
        r: 225,
        g: 225,
        b: 222,
      },
      {
        r: 165,
        g: 181,
        b: 163,
      },
    ],
    c = []
  for (let f = 0; f < 85; f++) {
    const w = document.createElement("div"),
      p = 2 + Math.random() * 7,
      S = h[Math.floor(Math.random() * h.length)],
      E = `rgba(${S.r},${S.g},${S.b},0.6)`
    Object.assign(w.style, {
      position: "absolute",
      width: `${p}px`,
      height: `${p}px`,
      borderRadius: "50%",
      background: `rgba(${S.r},${S.g},${S.b},0.8)`,
      boxShadow: `0 0 ${p * 3}px ${E}, 0 0 ${p * 6}px ${E}`,
      willChange: "transform, opacity",
    })
    i.appendChild(w)
    c.push({
      el: w,
      x: Math.random() * a,
      y: Math.random() * l,
      speed: 0.3 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      drift: 0.005 + Math.random() * 0.012,
      sway: 15 + Math.random() * 30,
      oPhase: Math.random() * Math.PI * 2,
      oSpeed: 0.003 + Math.random() * 0.008,
    })
  }
  let u = true,
    v
  const g = () => {
    if (u) {
      for (const f of c) {
        f.y -= f.speed
        f.phase += f.drift
        f.oPhase += f.oSpeed
        if (f.y < -20) {
          f.y = l + 10
          f.x = Math.random() * a
        }
        const w = Math.sin(f.phase) * f.sway,
          p = Math.sin(f.oPhase) * 0.35 + 0.45
        f.el.style.transform = `translate(${f.x + w}px, ${f.y}px)`
        f.el.style.opacity = p
      }
      v = requestAnimationFrame(g)
    }
  }
  return (
    (v = requestAnimationFrame(g)),
    () => {
      u = false
      cancelAnimationFrame(v)
      c.forEach((f) => f.el.remove())
    }
  )
}
function Wi(i) {
  const o = `nrbg-${Date.now()}`,
    a = document.createElement("style")
  a.textContent = `
        @keyframes ${o}-d1 {
            0%   { transform: translateX(-30%) translateY(-20%) rotate(-5deg) scale(1.2); }
            33%  { transform: translateX(20%)  translateY(10%)  rotate(3deg)  scale(1.0); }
            66%  { transform: translateX(-10%) translateY(-5%)  rotate(-2deg) scale(1.3); }
            100% { transform: translateX(-30%) translateY(-20%) rotate(-5deg) scale(1.2); }
        }
        @keyframes ${o}-d2 {
            0%   { transform: translateX(20%)  translateY(10%)  rotate(8deg)  scale(1.1); }
            33%  { transform: translateX(-20%) translateY(-15%) rotate(-4deg) scale(1.3); }
            66%  { transform: translateX(10%)  translateY(5%)   rotate(6deg)  scale(0.9); }
            100% { transform: translateX(20%)  translateY(10%)  rotate(8deg)  scale(1.1); }
        }
        @keyframes ${o}-d3 {
            0%   { transform: translateX(0%)   translateY(20%)  rotate(-3deg) scale(1.0); }
            50%  { transform: translateX(-15%) translateY(-10%) rotate(5deg)  scale(1.2); }
            100% { transform: translateX(0%)   translateY(20%)  rotate(-3deg) scale(1.0); }
        }
        @keyframes ${o}-d4 {
            0%   { transform: translateX(10%)  translateY(-10%) rotate(2deg)  scale(1.3); }
            50%  { transform: translateX(-25%) translateY(15%)  rotate(-6deg) scale(1.0); }
            100% { transform: translateX(10%)  translateY(-10%) rotate(2deg)  scale(1.3); }
        }
        @keyframes ${o}-pulse {
            0%   { opacity: 0.25; }
            50%  { opacity: 0.55; }
            100% { opacity: 0.25; }
        }
    `
  document.head.appendChild(a)
  const h = [
    {
      bg: "radial-gradient(ellipse 80% 50% at 30% 40%, rgba(129,182,76,0.35) 0%, transparent 70%)",
      anim: `${o}-d1 12s ease-in-out infinite, ${o}-pulse 8s ease-in-out infinite`,
    },
    {
      bg: "radial-gradient(ellipse 70% 60% at 70% 60%, rgba(41,171,164,0.28) 0%, transparent 70%)",
      anim: `${o}-d2 15s ease-in-out infinite, ${o}-pulse 10s ease-in-out infinite 2s`,
    },
    {
      bg: "radial-gradient(ellipse 90% 40% at 50% 30%, rgba(229,168,41,0.22) 0%, transparent 60%)",
      anim: `${o}-d3 18s ease-in-out infinite, ${o}-pulse 7s ease-in-out infinite 1s`,
    },
    {
      bg: "radial-gradient(ellipse 60% 70% at 40% 70%, rgba(120,60,150,0.22) 0%, transparent 65%)",
      anim: `${o}-d4 20s ease-in-out infinite, ${o}-pulse 12s ease-in-out infinite 3s`,
    },
    {
      bg: "radial-gradient(ellipse 50% 80% at 60% 20%, rgba(129,182,76,0.18) 0%, transparent 60%)",
      anim: `${o}-d1 25s ease-in-out infinite reverse, ${o}-pulse 9s ease-in-out infinite 4s`,
    },
  ].map((c) => {
    const u = document.createElement("div")
    return (
      Object.assign(u.style, {
        position: "absolute",
        inset: "-50%",
        background: c.bg,
        animation: c.anim,
        filter: "blur(30px)",
        willChange: "transform, opacity",
      }),
      i.appendChild(u),
      u
    )
  })
  return () => {
    h.forEach((c) => c.remove())
    a.remove()
  }
}
function Fi(i) {
  const o = document.createElement("canvas")
  Object.assign(o.style, {
    width: "100%",
    height: "100%",
    display: "block",
  })
  i.appendChild(o)
  const a = o.getContext("2d"),
    l = 4
  let h, c, u
  h = Math.ceil((i.clientWidth || 300) / l)
  c = Math.ceil((i.clientHeight || 600) / l)
  o.width = h
  o.height = c
  u = a.createImageData(h, c)
  let g = true,
    f,
    w = 0
  const p = () => {
    if (!g) return
    w += 0.012
    const S = u.data
    for (let E = 0; E < c; E++)
      for (let k = 0; k < h; k++) {
        const _ = k / h,
          m = E / c,
          y = Math.sin(_ * 6 + w * 0.7),
          T = Math.sin(m * 8 + w * 0.5),
          O = Math.sin((_ + m) * 5 + w * 0.9),
          N = Math.sin(
            Math.sqrt((_ - 0.5) ** 2 + (m - 0.5) ** 2) * 10 + w * 1.2
          ),
          j = (y + T + O + N) / 4,
          D = 120 + j * 40 + Math.sin(w * 0.3) * 20,
          Q = 45 + j * 20,
          F = 10 + j * 8 + Math.sin(w + _ * 3) * 4,
          [Y, P, $] = Ji(D / 360, Q / 100, F / 100),
          I = (E * h + k) * 4
        S[I] = Y
        S[I + 1] = P
        S[I + 2] = $
        S[I + 3] = 210
      }
    a.putImageData(u, 0, 0)
    f = requestAnimationFrame(p)
  }
  return (
    (f = requestAnimationFrame(p)),
    () => {
      g = false
      cancelAnimationFrame(f)
      o.remove()
    }
  )
}
function Xi(i) {
  const o = document.createElement("canvas")
  Object.assign(o.style, {
    width: "100%",
    height: "100%",
    display: "block",
  })
  i.appendChild(o)
  const a = o.getContext("2d")
  let l = i.clientWidth || 300,
    h = i.clientHeight || 600
  o.width = l
  o.height = h
  const c = 300,
    u = [
      [129, 182, 76],
      [163, 209, 96],
      [200, 200, 200],
      [255, 255, 255],
    ],
    v = Array.from(
      {
        length: c,
      },
      () => ({
        x: (Math.random() - 0.5) * l * 2,
        y: (Math.random() - 0.5) * h * 2,
        z: Math.random() * l,
        pz: 0,
        ci: Math.floor(Math.random() * u.length),
      })
    )
  a.fillStyle = "#1a1917"
  a.fillRect(0, 0, l, h)
  let g = true,
    f
  const w = 2,
    p = () => {
      if (!g) return
      a.fillStyle = "rgba(26, 25, 23, 0.12)"
      a.fillRect(0, 0, l, h)
      const S = l / 2,
        E = h / 2
      for (const k of v) {
        if (((k.pz = k.z), (k.z -= w), k.z <= 0.5)) {
          k.x = (Math.random() - 0.5) * l * 2
          k.y = (Math.random() - 0.5) * h * 2
          k.z = l
          k.pz = l
          continue
        }
        const _ = (k.x / k.z) * (l * 0.25) + S,
          m = (k.y / k.z) * (h * 0.25) + E,
          y = (k.x / k.pz) * (l * 0.25) + S,
          T = (k.y / k.pz) * (h * 0.25) + E,
          O = 1 - k.z / l,
          N = Math.max(0.3, O * 2.5),
          j = O * 0.75,
          D = u[k.ci]
        a.strokeStyle = `rgba(${D[0]},${D[1]},${D[2]},${j * 0.6})`
        a.lineWidth = N * 0.8
        a.beginPath()
        a.moveTo(y, T)
        a.lineTo(_, m)
        a.stroke()
        a.fillStyle = `rgba(${D[0]},${D[1]},${D[2]},${j})`
        a.beginPath()
        a.arc(_, m, N * 0.6, 0, Math.PI * 2)
        a.fill()
      }
      f = requestAnimationFrame(p)
    }
  return (
    (f = requestAnimationFrame(p)),
    () => {
      g = false
      cancelAnimationFrame(f)
      o.remove()
    }
  )
}
function Ji(i, o, a) {
  let l, h, c
  if (o === 0) l = h = c = a
  else {
    const u = a < 0.5 ? a * (1 + o) : a + o - a * o,
      v = 2 * a - u,
      g = (f, w, p) => (
        p < 0 && (p += 1),
        p > 1 && (p -= 1),
        p < 1 / 6
          ? f + (w - f) * 6 * p
          : p < 1 / 2
          ? w
          : p < 2 / 3
          ? f + (w - f) * (2 / 3 - p) * 6
          : f
      )
    l = g(v, u, i + 1 / 3)
    h = g(v, u, i)
    c = g(v, u, i - 1 / 3)
  }
  return [
    Math.round(l * 255),
    Math.round(h * 255),
    Math.round(c * 255),
  ]
}
const G = 800,
  Gi = 0.7
let H = "",
  je = false
const mt = document.getElementById("settings-panel"),
  Yt = document.getElementById("pieces-layer"),
  Vt = document.getElementById("board-effects-layer"),
  Ki = document.getElementById("highlight-layer"),
  yt = document.getElementById("viewport"),
  Yi = document.getElementById("stage"),
  Vi = document.getElementById("undo-turn"),
  Qi = document.getElementById("reset-board"),
  Ne = document.getElementById("ignore-turns-checkbox")
Ne.addEventListener("change", () => {
  yt.classList.toggle("ignoring-turns", Ne.checked)
})
document.addEventListener("keydown", (i) => {
  if (i.key === "Tab") {
    i.preventDefault()
    Ne.checked = !Ne.checked
    Ne.dispatchEvent(new Event("change"))
  }
})
const ze = (i) => {
    if (i.element) {
      i.element.style.left = `${i.position.col * _e}px`
      i.element.style.top = `${i.position.row * _e}px`
    }
  },
  He = (i) => {
    if (i.element)
      i.element.style.backgroundImage = `url('/images/${encodeURIComponent(
        i.image
      )}')`
  },
  Te = (i) => {
    if (i.element) i.element.classList.toggle("captured", i.captured)
    if (i.settingsCard)
      i.settingsCard.classList.toggle("captured", i.captured)
  },
  Zi = (i) => {
    if (!i.reviveBtn) return
    const o =
      i.captured && !Pe(i.initialPosition.col, i.initialPosition.row)
    i.reviveBtn.style.display = o ? "block" : "none"
  },
  Le = () => {
    Object.values(x.pieces).forEach(Zi)
  },
  Qe = (i) => {
    if (i.positionTag) i.positionTag.textContent = i.notation
  },
  $e = (i, o) => {
    if (i?.element) i.element.classList.toggle("selected", o)
  },
  de = (i) => {
    if (i.emojiElements)
      for (let o = 0; o < rn; o++) {
        const a = i.emojiElements[o]
        if (o < i.emojis.length) {
          a.textContent = ki[i.emojis[o]] || ""
          a.style.display = ""
        } else {
          a.textContent = ""
          a.style.display = "none"
        }
      }
  },
  es = () => {
    const i = document.createDocumentFragment()
    Object.values(x.pieces)
      .sort((a, l) => {
        const h = {
            0: 0,
            1: 1,
            6: 2,
            7: 3,
          },
          c = h[a.position.row] - h[l.position.row]
        return c !== 0 ? c : a.position.col - l.position.col
      })
      .forEach((a) => {
        const l = document.createElement("div")
        l.className = "piece-controls"
        l.dataset.slot = a.slot
        const h = document.createElement("header"),
          c = document.createElement("span")
        c.textContent = a.label
        const u = document.createElement("span")
        u.className = "position-tag"
        u.textContent = a.notation
        h.append(c, u)
        l.appendChild(h)
        const v = document.createElement("div")
        v.className = "control-row"
        const g = document.createElement("label")
        g.setAttribute("for", `image${a.slot}`)
        g.textContent = "Image"
        const f = document.createElement("select")
        f.id = `image${a.slot}`
        f.dataset.slot = a.slot
        f.className = "image-select"
        Ei.forEach((p) => {
          const S = document.createElement("option")
          S.value = p
          S.textContent = p.replace(".png", "")
          f.appendChild(S)
        })
        f.value = a.image
        v.append(g, f)
        l.appendChild(v)
        const w = document.createElement("button")
        w.className = "revive-btn"
        w.textContent = "Revive"
        w.addEventListener("click", async () => {
          const p = Ri(a)
          !p ||
            p.blocked ||
            (Te(a),
            ze(a),
            Qe(a),
            He(a),
            de(a),
            a.imageSelect && (a.imageSelect.value = a.image),
            Le(),
            await K("/api/board-state", {
              clientSecret: H,
              userId: q(),
              newState: te(),
            }))
        })
        l.appendChild(w)
        a.positionTag = u
        a.imageSelect = f
        a.reviveBtn = w
        a.settingsCard = l
        i.append(l)
      })
    mt.innerHTML = ""
    mt.appendChild(i)
  },
  ts = () => {
    const i = document.createDocumentFragment(),
      o = ["tl", "tr", "bl", "br"]
    Object.values(x.pieces).forEach((a) => {
      const l = document.createElement("div")
      l.className = "piece"
      l.id = `piece-${a.slot}`
      a.emojiElements = o.map((h) => {
        const c = document.createElement("span")
        return (
          (c.className = `piece-emoji piece-emoji-${h}`),
          (c.style.display = "none"),
          l.appendChild(c),
          c
        )
      })
      a.element = l
      He(a)
      Te(a)
      ze(a)
      de(a)
      i.appendChild(l)
    })
    Yt.innerHTML = ""
    Yt.appendChild(i)
    Le()
  },
  ln = {},
  ns = () => {
    Vt.innerHTML = ""
    for (let i = 0; i < 8; i++)
      for (let o = 0; o < 8; o++) {
        const a = document.createElement("div")
        a.className = "board-effect"
        a.style.left = `${o * _e}px`
        a.style.top = `${i * _e}px`
        a.style.display = "none"
        Vt.appendChild(a)
        ln[`${o},${i}`] = a
      }
  },
  Ue = (i, o) => {
    const a = `${i},${o}`,
      l = ln[a]
    if (!l) return
    const h = x.boardEffects[a] || []
    if (((l.innerHTML = ""), h.length === 0)) {
      l.style.display = "none"
      return
    }
    h.forEach((c) => {
      const u = document.createElement("span")
      u.className = "board-effect-emoji"
      u.textContent = xi[c] || ""
      l.appendChild(u)
    })
    l.style.display = ""
  },
  Ve = 5e3,
  rs = 4e3,
  ee = document.createElement("div")
ee.className = "square-highlight"
ee.style.display = "none"
Ki.appendChild(ee)
let Me = null,
  De = null
const un = (i, o, a = Ve) => {
    if (Me) clearTimeout(Me)
    if (De) clearTimeout(De)
    ee.style.left = `${i * _e}px`
    ee.style.top = `${o * _e}px`
    ee.classList.remove("fading")
    ee.style.display = ""
    const l = Math.max(0, a - (Ve - rs))
    De = setTimeout(() => {
      ee.classList.add("fading")
    }, l)
    Me = setTimeout(() => {
      ee.style.display = "none"
      ee.classList.remove("fading")
    }, a)
  },
  is = () => {
    if (Me) clearTimeout(Me)
    if (De) clearTimeout(De)
    ee.style.display = "none"
    ee.classList.remove("fading")
    x.highlightedSquare = null
  },
  he = async (i, o) => {
    x.highlightedSquare = {
      col: i,
      row: o,
      timestamp: Date.now(),
    }
    un(i, o)
    await K("/api/board-state", {
      clientSecret: H,
      userId: q(),
      newState: te(),
    })
  },
  ss = (i) => {
    if (!i || !i.timestamp) return
    const o = Date.now() - i.timestamp
    if (o >= Ve) return
    const a = x.highlightedSquare
    ;(a &&
      a.col === i.col &&
      a.row === i.row &&
      a.timestamp === i.timestamp) ||
      ((x.highlightedSquare = {
        ...i,
      }),
      un(i.col, i.row, Ve - o))
  },
  Qt = (i) => {
    if (x.selectedSlot === i) return
    const o = x.selectedSlot
    if (o) $e(x.pieces[o], false)
    const a = Li(i)
    if (a) $e(a, true)
  },
  re = () => {
    const i = x.selectedSlot
    if (i) $e(x.pieces[i], false)
    gt()
  },
  Oe = () =>
    K("/api/board-state", {
      clientSecret: H,
      userId: q(),
      newState: te(),
      skipSnapshot: true,
    }),
  os = () => {
    re()
    Ai().forEach((o) => {
      ze(o)
      Te(o)
      Qe(o)
      He(o)
      de(o)
      if (o.imageSelect) o.imageSelect.value = o.image
    })
    Le()
    for (let o = 0; o < 8; o++) for (let a = 0; a < 8; a++) Ue(a, o)
    is()
  },
  ie = Ci(yt, Yi, {
    zoomMultiplier: Gi,
    contentSize: G,
  }),
  as = (i, o) => ie.toGridSquare(i, o, _e, 8, 8)
let Be = null,
  ft = null
function cs() {
  const i = "e8e241cce30912124291",
    a = "chess-events",
    l = "board-event",
    h = "turn-event"
  Be = null // Pusher disabled - using polling instead
  // ft = Be.subscribe(a) // Disabled - using polling
  // ft.bind(l, (c) => { gs(c) }) // Disabled - using polling
  // ft.bind(h, (c) => { dn(c) }) // Disabled - using polling
  // Be.connection.bind("connected", () => {
  // const c = document.getElementById("pusher-status")
  // c.textContent = "Connected to Pusher!"
  // console.log("Pusher connected!")
  //})
  // Be.connection.bind("disconnected", () => {
  // const c = document.getElementById("pusher-status")
  // c.textContent = "Disconnected from Pusher!"
  // console.log("Pusher disconnected")
  // //})
  // // Be.connection.bind("error", (c) => {
  // const u = document.getElementById("pusher-status")
  // u.textContent = "Pusher Error!"
  // console.error("Pusher error:", c)
  //})
  startGameStatePolling()
}
Vi.addEventListener("click", async () => {
  const i = await K("/api/undo", {
    clientSecret: H,
  })
  if (!i.success) {
    console.log("Failed to undo turn:", i.message)
    return
  }
  console.log("Successfully undid a turn!")
})
Qi.addEventListener("click", async () => {
  os()
  ie.fitAndCenterContent(G, G)
  ie.resetInteractionState()
  je = false
  await K("/api/board-state", {
    clientSecret: H,
    userId: q(),
    newState: te(),
  })
  await K("/api/turns", {
    clientSecret: H,
    userId: q(),
    action: "RESET_TURNS",
  })
})
mt.addEventListener("change", async (i) => {
  if (!i.target.classList.contains("image-select")) return
  const o = x.pieces[i.target.dataset.slot]
  if (o) {
    o.image = i.target.value
    He(o)
  }
  await K("/api/board-state", {
    clientSecret: H,
    userId: q(),
    newState: te(),
  })
})
window.addEventListener("resize", () => {
  ie.hasInteracted() || ie.fitAndCenterContent(G, G)
})
const ne = document.getElementById("randomizer-panel"),
  pt = (i, o) => Math.floor(Math.random() * (o - i + 1)) + i,
  we = (i) =>
    i.length ? i[Math.floor(Math.random() * i.length)] : null,
  Ee = (i = null, o = null) =>
    Object.values(x.pieces).filter(
      (a) =>
        !(
          a.captured ||
          (i && a.color !== i) ||
          (o && !a.image.includes(o))
        )
    ),
  ls = () => {
    const i = []
    for (let o = 0; o < 8; o++)
      for (let a = 0; a < 8; a++)
        Pe(a, o) ||
          i.push({
            col: a,
            row: o,
          })
    return i
  },
  le = (i, o) => {
    const a = document.createElement("button")
    return (
      (a.className = "randomizer-btn"),
      (a.textContent = i),
      a.addEventListener("click", o),
      a
    )
  },
  ye = () => {
    const i = document.createElement("span")
    return (
      (i.className = "randomizer-result"), (i.textContent = "—"), i
    )
  },
  Zt = (i, o) => {
    const a = document.createElement("input")
    return (
      (a.className = "randomizer-input"),
      (a.type = "number"),
      (a.placeholder = i),
      (a.value = o),
      a
    )
  },
  Se = (...i) => {
    const o = document.createElement("div")
    return (
      (o.className = "randomizer-row"),
      i.forEach((a) => {
        if (typeof a == "string") {
          const l = document.createElement("span")
          l.className = "randomizer-label"
          l.textContent = a
          o.appendChild(l)
        } else o.appendChild(a)
      }),
      o
    )
  },
  en = () => {
    const i = document.createElement("div")
    return (i.className = "randomizer-separator"), i
  },
  us = () => {
    ne.innerHTML = ""
    const i = Zt("Min", 1),
      o = Zt("Max", 8),
      a = ye()
    ne.appendChild(
      Se(
        "Random Int",
        i,
        o,
        le("Generate", () => {
          const f = parseInt(i.value) || 0,
            w = parseInt(o.value) || 0
          a.textContent = f > w ? "Invalid" : pt(f, w)
        }),
        a
      )
    )
    const l = ye()
    ne.appendChild(
      Se(
        "Random Square",
        le("Generate", () => {
          const f = pt(0, 7),
            w = pt(0, 7)
          l.textContent = fe(f, w)
          he(f, w)
        }),
        l
      )
    )
    const h = ye()
    ne.appendChild(
      Se(
        "Random Empty Square",
        le("Generate", () => {
          const f = we(ls())
          h.textContent = f ? fe(f.col, f.row) : "None found"
          if (f) he(f.col, f.row)
        }),
        h
      )
    )
    ne.appendChild(en())
    const c = ye()
    ne.appendChild(
      Se(
        "Random Piece",
        le("Generate", () => {
          const f = we(Ee())
          c.textContent = f
            ? `${f.label} (${f.notation})`
            : "None found"
          if (f) he(f.position.col, f.position.row)
        }),
        c
      )
    )
    const u = ye()
    ne.appendChild(
      Se(
        "Random White Piece",
        le("Generate", () => {
          const f = we(Ee("white"))
          u.textContent = f
            ? `${f.label} (${f.notation})`
            : "None found"
          if (f) he(f.position.col, f.position.row)
        }),
        u
      )
    )
    const v = ye()
    ne.appendChild(
      Se(
        "Random Black Piece",
        le("Generate", () => {
          const f = we(Ee("black"))
          v.textContent = f
            ? `${f.label} (${f.notation})`
            : "None found"
          if (f) he(f.position.col, f.position.row)
        }),
        v
      )
    )
    ne.appendChild(en())
    ;["Pawn", "Rook", "Knight", "Bishop"].forEach((f) => {
      const w = ye()
      ne.appendChild(
        Se(
          `${f}`,
          le(`Random ${f}`, () => {
            const p = we(Ee(null, f))
            w.textContent = p
              ? `${p.label} (${p.notation})`
              : "None found"
            if (p) he(p.position.col, p.position.row)
          }),
          le(`White ${f}`, () => {
            const p = we(Ee("white", f))
            w.textContent = p
              ? `${p.label} (${p.notation})`
              : "None found"
            if (p) he(p.position.col, p.position.row)
          }),
          le(`Black ${f}`, () => {
            const p = we(Ee("black", f))
            w.textContent = p
              ? `${p.label} (${p.notation})`
              : "None found"
            if (p) he(p.position.col, p.position.row)
          }),
          w
        )
      )
    })
  }
let tn = 0,
  Ge = null
const hs = 400,
  z = document.createElement("div")
z.className = "piece-context-menu"
z.style.display = "none"
document.body.appendChild(z)
const ue = () => {
    z.style.display = "none"
    z.innerHTML = ""
  },
  ds = (i, o, a, l) => {
    if ((ue(), l)) {
      const h = document.createElement("div")
      h.className = "context-menu-header"
      h.textContent = l.label
      z.appendChild(h)
      const c = document.createElement("div")
      c.className = "context-menu-option context-menu-capture"
      c.textContent = "☠️ Capture"
      c.addEventListener("click", async () => {
        ue()
        an(l)
        Te(l)
        de(l)
        Le()
        re()
        vt()
        await K("/api/board-state", {
          clientSecret: H,
          userId: q(),
          newState: te(),
        })
      })
      z.appendChild(c)
      const u = document.createElement("div")
      u.className = "context-menu-separator"
      z.appendChild(u)
      const v = document.createElement("div")
      v.className = "context-menu-emoji-list"
      const g = document.createElement("div")
      g.className = "context-menu-option context-menu-emoji-remove"
      g.textContent = "Remove All"
      g.addEventListener("click", async () => {
        ue()
        l.emojis = []
        de(l)
        re()
        await K("/api/board-state", {
          clientSecret: H,
          userId: q(),
          newState: te(),
        })
      })
      v.appendChild(g)
      sn.forEach((f) => {
        const w = document.createElement("div")
        w.className = "context-menu-option"
        w.textContent = `${f.emoji}  ${f.name}`
        w.addEventListener("click", async () => {
          ue()
          if (!(l.emojis.length >= rn)) {
            l.emojis.push(f.name)
            de(l)
            re()
            await K("/api/board-state", {
              clientSecret: H,
              userId: q(),
              newState: te(),
            })
          }
        })
        v.appendChild(w)
      })
      z.appendChild(v)
    } else {
      const h = document.createElement("div")
      h.className = "context-menu-header"
      h.textContent = `Board (${fe(a.col, a.row)})`
      z.appendChild(h)
      const c = document.createElement("div")
      c.className = "context-menu-emoji-list"
      const u = document.createElement("div")
      u.className = "context-menu-option context-menu-emoji-remove"
      u.textContent = "Remove All"
      u.addEventListener("click", async () => {
        ue()
        const v = `${a.col},${a.row}`
        x.boardEffects[v] = []
        Ue(a.col, a.row)
        re()
        await K("/api/board-state", {
          clientSecret: H,
          userId: q(),
          newState: te(),
        })
      })
      c.appendChild(u)
      on.forEach((v) => {
        const g = document.createElement("div")
        g.className = "context-menu-option"
        g.textContent = `${v.emoji}  ${v.name}`
        g.addEventListener("click", async () => {
          ue()
          const f = `${a.col},${a.row}`
          x.boardEffects[f] || (x.boardEffects[f] = [])
          x.boardEffects[f].push(v.name)
          Ue(a.col, a.row)
          re()
          await K("/api/board-state", {
            clientSecret: H,
            userId: q(),
            newState: te(),
          })
        })
        c.appendChild(g)
      })
      z.appendChild(c)
    }
    z.style.left = `${i}px`
    z.style.top = `${o}px`
    z.style.display = ""
    requestAnimationFrame(() => {
      const h = z.getBoundingClientRect()
      if (h.right > window.innerWidth)
        z.style.left = `${i - h.width}px`
      if (h.bottom > window.innerHeight)
        z.style.top = `${o - h.height}px`
    })
  }
document.addEventListener("mousedown", (i) => {
  if (z.style.display !== "none" && !z.contains(i.target)) ue()
})
document.addEventListener("keydown", (i) => {
  if (i.key === "Escape") ue()
})
z.addEventListener("contextmenu", (i) => {
  i.preventDefault()
})
yt.addEventListener("contextmenu", async (i) => {
  i.preventDefault()
  const o = as(i.clientX, i.clientY),
    a = Date.now(),
    l = a - tn < hs && Ge && o && Ge.col === o.col && Ge.row === o.row
  if (((tn = a), (Ge = o), l && o)) {
    const u = Pe(o.col, o.row),
      v = x.selectedSlot
    if (u) Qt(u.slot)
    ds(i.clientX, i.clientY, o, u)
    if (x.selectedSlot !== v) await Oe()
    return
  }
  if ((ue(), !o)) {
    if (x.selectedSlot) {
      re()
      await Oe()
    }
    return
  }
  const h = Pe(o.col, o.row)
  if (!x.selectedSlot) {
    if (h) {
      Qt(h.slot)
      await Oe()
    }
    return
  }
  const c = x.pieces[x.selectedSlot]
  if (!c) {
    re()
    await Oe()
    return
  }
  if (c.position.col === o.col && c.position.row === o.row) {
    re()
    await Oe()
    return
  }
  await fs(x.selectedSlot, o.col, o.row)
})
const fs = async (i, o, a) => {
    const l = Ii(i, o, a)
    if (!l) return
    ze(l.piece)
    Qe(l.piece)
    if (l.capturedPiece) {
      Te(l.capturedPiece)
      de(l.capturedPiece)
      vt()
    }
    Le()
    re()
    const h = document.getElementById("ignore-turns-checkbox").checked
    h ||
      ((J.currentPlayer =
        J.currentPlayer === "white" ? "black" : "white"),
      fn(J.currentPlayer))
    let c = await K("/api/board-state", {
      clientSecret: H,
      userId: q(),
      newState: te(),
    })
    if (!c.success) {
      console.log(
        "Failed to update Board State on server. Message: ",
        c.message
      )
      return
    }
    if ((console.log("Posted new board state to the server", c), h)) {
      console.log(
        "Skipping turn processing because the Ignore Turns checkbox is checked"
      )
      return
    }
    c = await K("/api/turns", {
      clientSecret: H,
      userId: q(),
      action: "INCREMENT_TURN",
    })
    c.success ||
      console.log(
        "Failed to update Turn State on server. Message: ",
        c.message
      )
  },
  ps = async () => {
    const i = await bt("/api/board-state", {
      clientSecret: H,
    })
    if (!i.success) {
      console.log("Failed to pull board state from the server")
      return
    }
    hn(i.boardState)
  },
  ms = async () => {
    const i = await bt("/api/turns", {
      clientSecret: H,
      userId: q(),
    })
    if (!i.success) {
      console.log("Failed to pull turn state from the server")
      return
    }
    dn(i.turnState)
  },
  gs = (i) => {
    if (i.userId === q()) {
      console.log(
        "Received a Pusher piece move event, but we initiated it, so ignoring it"
      )
      return
    }
    hn(i.newState)
  },
  hn = (i) => {
    let o = false
    for (const [l, h] of Object.entries(i)) {
      if (
        l === "boardEffects" ||
        l === "highlightedSquare" ||
        l === "selectedSlot"
      )
        continue
      const c = x.pieces[Number(l)]
      if (!c) continue
      if (
        c.position.row !== h.position.row ||
        c.position.col !== h.position.col
      ) {
        c.position = {
          col: h.position.col,
          row: h.position.row,
        }
        c.notation = fe(h.position.col, h.position.row)
        ze(c)
        Qe(c)
      }
      if (c.image !== h.image) {
        c.image = h.image
        c.imageSelect.value = c.image
        He(c)
      }
      if (c.captured !== h.captured) {
        c.captured = h.captured
        Te(c)
        o || (vt(), (o = true))
      }
      const u = h.emojis || [],
        v = c.emojis
      if (u.length !== v.length || u.some((g, f) => g !== v[f])) {
        c.emojis = [...u]
        de(c)
      }
    }
    Le()
    const a = i.selectedSlot ?? null
    if (
      x.selectedSlot !== a &&
      (x.selectedSlot && $e(x.pieces[x.selectedSlot], false),
      (x.selectedSlot = a),
      a)
    ) {
      const l = x.pieces[a]
      if (l && !l.captured) {
        $e(l, true)
      } else {
        x.selectedSlot = null
      }
    }
    if (i.boardEffects) {
      const l = i.boardEffects
      for (const h of Object.keys(x.boardEffects))
        if (!l[h] || l[h].length === 0) {
          x.boardEffects[h] = []
          const [c, u] = h.split(",").map(Number)
          Ue(c, u)
        }
      for (const [h, c] of Object.entries(l)) {
        const u = x.boardEffects[h] || []
        if (c.length !== u.length || c.some((v, g) => v !== u[g])) {
          x.boardEffects[h] = [...c]
          const [v, g] = h.split(",").map(Number)
          Ue(v, g)
        }
      }
    }
    if (i.highlightedSquare !== void 0) ss(i.highlightedSquare)
  },
  dn = (i) => {
    console.log(
      "We got a turn update from the server with this info:",
      i.newTurn
    )
    const o = i.newTurn
    J.currentTurn = o.currentTurn
    J.currentRules = o.currentRules
    J.newRuleChoices = o.newRuleChoices
    if (J.currentPlayer !== o.currentPlayer) {
      J.currentPlayer = o.currentPlayer
      fn(J.currentPlayer, i.userId)
    }
    const a = document.getElementById("next-turn-with-new-rules")
    a.textContent = `New Rules In ${
      o.nextTurnWithNewRules - o.currentTurn
    } Turns`
    if (i.ruleJustExpired) Bi()
    const l = document.getElementById("game-section"),
      h = document.getElementById("current-rules-section")
    if (((h.innerHTML = ""), J.currentRules.length === 0)) {
      l.classList.remove("squashed")
      if (je) {
        ie.fitAndCenterContent(G, G)
        je = false
      }
    } else {
      l.classList.add("squashed")
      je || (ie.fitAndCenterContent(G, G), (je = true))
      for (const c of J.currentRules) {
        const u = document.createElement("div")
        u.classList.add("current-rule-card")
        const v = document.createElement("p")
        v.classList.add("current-rule-description")
        v.textContent = c.description
        u.append(v)
        const g = document.createElement("p")
        g.classList.add("current-rule-duration")
        g.textContent = `Turns Left: ${c.turnsLeft}`
        u.append(g)
        h.append(u)
      }
    }
    if (
      (o.justSelectedRule && nn(i.userId),
      J.newRuleChoices.length > 0)
    ) {
      document
        .getElementById("viewport")
        .classList.add("choices-mode")
      const c = document.getElementById("new-rules")
      wt()
      c.innerHTML = ""
      c.classList.remove("hidden")
      ie.fitAndCenterContent(G, G)
      for (const u of J.newRuleChoices) {
        const v = document.createElement("div")
        v.classList.add("new-rule-card")
        const g = document.createElement("p")
        g.classList.add("new-rule-title")
        g.textContent = u.title
        v.append(g)
        const f = document.createElement("div")
        f.className = "new-rules-separator"
        v.append(f)
        const w = document.createElement("p")
        w.classList.add("new-rule-description")
        w.textContent = u.description
        v.append(w)
        const p = document.createElement("p")
        if (
          (p.classList.add("new-rule-duration"),
          u.isInstant
            ? (p.textContent = "Instant")
            : (p.textContent = `${u.turnsLeft} Turns`),
          v.append(p),
          u.kingImmune)
        ) {
          const S = document.createElement("span")
          S.classList.add("new-rule-king-immune")
          S.textContent = "👑"
          v.append(S)
        }
        v.addEventListener("click", async () => {
          document.getElementById("ignore-turns-checkbox").checked ||
            (nn(),
            J.newRuleChoices &&
              (await K("/api/turns", {
                clientSecret: H,
                userId: q(),
                action: "SELECT_RULE",
                payload: {
                  chosenIndex: J.newRuleChoices.indexOf(u),
                },
              })))
        })
        c.append(v)
      }
      Hi(c)
    }
  }
function fn(i, o = "") {
  // if (o === q()) {
  //   console.log(
  //     "We were the ones who initiated the turn event, so don't update the title"
  //   )
  //   return
  // }
  const a = document.getElementById("title-card"),
    l = a.querySelector(".card-front"),
    h = a.querySelector(".card-back"),
    c = i === "white",
    v = a.classList.contains("flip") ? l : h
  v.textContent = c ? "White Turn" : "Black Turn"
  v.classList.remove("white-turn", "black-turn")
  v.classList.add(c ? "white-turn" : "black-turn")
  requestAnimationFrame(() => {
    a.classList.toggle("flip")
  })
}
function nn(i = "") {
  if (i === q()) {
    console.log(
      "We were the ones who initiated the rule choice, so we are ignoring this event"
    )
    return
  }
  wt()
  document.getElementById("viewport").classList.remove("choices-mode")
  document.getElementById("new-rules").classList.add("hidden")
  ie.fitAndCenterContent(G, G)
}
const bs = document.getElementById("password-form")
bs.addEventListener("submit", async (i) => {
  i.preventDefault()
  H = document.getElementById("password-input").value
  const o = await bt("/api/auth", {
    clientSecret: H,
  })
  if (o.success) {
    document.getElementById("password-modal").style.display = "none"
    await vs()
  } else {
    console.log(o.message)
    document.getElementById("password-error").textContent =
      "Invalid Password!"
  }
})
async function vs() {
  Ti()
  es()
  ts()
  ns()
  us()
  ie.fitAndCenterContent(G, G)
  Ui(document.body)
  cs()
  await ps()
  await ms()
}

// Polling functions to replace Pusher

function startGameStatePolling() {
  // Poll every 300ms for all updates (board + turns combined)
  console.log(window, window.top)
  setInterval(async () => {
    try {
      const r = await fetch(
        "/api/game-state?clientSecret=" +
          encodeURIComponent(H) +
          "&userId=" +
          encodeURIComponent(q())
      )
      const d = await r.json()
      if (!d.success) return

      // Only update if state actually changed
      if (gameStateChanged(d)) {
        lastGameState = JSON.parse(JSON.stringify(d))

        // Update board state if present
        if (d.boardState && Object.keys(d.boardState).length > 0) {
          gs({
            userId: d.userId || "server",
            newState: d.boardState,
          })
        }

        // Update turn state if present
        if (d.turnState) {
          dn(d.turnState)
        }
      }
    } catch (e) {
      console.error("Game state polling error:", e)
    }
  }, 3000)
}

var lastGameState = null

function gameStateChanged(newState) {
  if (!lastGameState) return true
  if (JSON.stringify(lastGameState) !== JSON.stringify(newState))
    console.log(
      JSON.stringify(lastGameState),
      JSON.stringify(newState)
    )
  return JSON.stringify(lastGameState) !== JSON.stringify(newState)
}
// TODO
// what happens when a user picks a rule

// what happens with nextTurnWithNewRules