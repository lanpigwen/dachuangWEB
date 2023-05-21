/*!
 *  JwChat.js v1.0.12
 *  (c) 2020-2023 codeGI
 *  Released under the MIT License.
 *
 */
(function(t, e) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = e())
    : "function" === typeof define && define.amd
    ? define("JwChat", [], e)
    : "object" === typeof exports
    ? (exports["JwChat"] = e())
    : (t["JwChat"] = e());
})("undefined" !== typeof self ? self : this, function() {
  return (function(t) {
    var e = {};
    function i(o) {
      if (e[o]) return e[o].exports;
      var n = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function(t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (i.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function(t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (i.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            i.d(
              o,
              n,
              function(e) {
                return t[e];
              }.bind(null, n)
            );
        return o;
      }),
      (i.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = "fb15"))
    );
  })({
    "00ee": function(t, e, i) {
      var o = i("b622"),
        n = o("toStringTag"),
        r = {};
      (r[n] = "z"), (t.exports = "[object z]" === String(r));
    },
    "0366": function(t, e, i) {
      var o = i("59ed");
      t.exports = function(t, e, i) {
        if ((o(t), void 0 === e)) return t;
        switch (i) {
          case 0:
            return function() {
              return t.call(e);
            };
          case 1:
            return function(i) {
              return t.call(e, i);
            };
          case 2:
            return function(i, o) {
              return t.call(e, i, o);
            };
          case 3:
            return function(i, o, n) {
              return t.call(e, i, o, n);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    "050e": function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".wrapper[data-v-88ddece2]{box-sizing:border-box;height:100%;max-width:100%;width:0;padding:0 10px;min-width:220px;margin:0 auto}.wrapper .notice[data-v-88ddece2]{height:30%;text-align:left;position:relative}.wrapper .notice .empty[data-v-88ddece2]{position:absolute;left:50%;transform:translateX(-50%)}.wrapper .userList[data-v-88ddece2]{height:70%;text-align:left;border-top:1px solid rgba(0,0,0,.1)}.wrapper .userList>div[data-v-88ddece2]{height:30px;display:flex;align-items:center;justify-content:flex-start}.wrapper .userList .listBox[data-v-88ddece2]{overflow:hidden;height:calc(100% - 60px);position:relative}.wrapper .userList .listBox .scrollBox[data-v-88ddece2]{width:100%;height:98%;overflow:hidden}.wrapper .userList li[data-v-88ddece2]{list-style:none;height:2rem;line-height:2rem;padding:.2rem}",
          ""
        ]),
        (t.exports = e);
    },
    "057f": function(t, e, i) {
      var o = i("fc6a"),
        n = i("241c").f,
        r = {}.toString,
        s =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function(t) {
          try {
            return n(t);
          } catch (e) {
            return s.slice();
          }
        };
      t.exports.f = function(t) {
        return s && "[object Window]" == r.call(t) ? a(t) : n(o(t));
      };
    },
    "0605": function(t, e, i) {
      "use strict";
      i("5bcb");
    },
    "06cf": function(t, e, i) {
      var o = i("83ab"),
        n = i("d1e7"),
        r = i("5c6c"),
        s = i("fc6a"),
        a = i("a04b"),
        c = i("5135"),
        l = i("0cfb"),
        h = Object.getOwnPropertyDescriptor;
      e.f = o
        ? h
        : function(t, e) {
            if (((t = s(t)), (e = a(e)), l))
              try {
                return h(t, e);
              } catch (i) {}
            if (c(t, e)) return r(!n.f.call(t, e), t[e]);
          };
    },
    "0b42": function(t, e, i) {
      var o = i("e8b5"),
        n = i("68ee"),
        r = i("861d"),
        s = i("b622"),
        a = s("species");
      t.exports = function(t) {
        var e;
        return (
          o(t) &&
            ((e = t.constructor),
            n(e) && (e === Array || o(e.prototype))
              ? (e = void 0)
              : r(e) && ((e = e[a]), null === e && (e = void 0))),
          void 0 === e ? Array : e
        );
      };
    },
    "0cb2": function(t, e, i) {
      var o = i("7b0b"),
        n = Math.floor,
        r = "".replace,
        s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        a = /\$([$&'`]|\d{1,2})/g;
      t.exports = function(t, e, i, c, l, h) {
        var p = i + t.length,
          u = c.length,
          d = a;
        return (
          void 0 !== l && ((l = o(l)), (d = s)),
          r.call(h, d, function(o, r) {
            var s;
            switch (r.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return e.slice(0, i);
              case "'":
                return e.slice(p);
              case "<":
                s = l[r.slice(1, -1)];
                break;
              default:
                var a = +r;
                if (0 === a) return o;
                if (a > u) {
                  var h = n(a / 10);
                  return 0 === h
                    ? o
                    : h <= u
                    ? void 0 === c[h - 1]
                      ? r.charAt(1)
                      : c[h - 1] + r.charAt(1)
                    : o;
                }
                s = c[a - 1];
            }
            return void 0 === s ? "" : s;
          })
        );
      };
    },
    "0cfb": function(t, e, i) {
      var o = i("83ab"),
        n = i("d039"),
        r = i("cc12");
      t.exports =
        !o &&
        !n(function() {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    "0d51": function(t, e) {
      t.exports = function(t) {
        try {
          return String(t);
        } catch (e) {
          return "Object";
        }
      };
    },
    "0db0": function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".windowBar[data-v-7b376ca4]{background:#fff;height:100%;min-width:150px;overflow:hidden;display:flex;border-right:1px solid #dcdfe6}.windowBar .toolBarBox[data-v-7b376ca4]{width:60px;border-right:1px solid #dcdfe6}.windowBar .toolBarBox img[data-v-7b376ca4]{width:50px}.windowBar .winBarBox[data-v-7b376ca4]{padding:0 5px;margin-top:15px;width:calc(100% - 10px);height:calc(100% - 20px);overflow:hidden}.windowBar .winItem[data-v-7b376ca4]{display:flex;align-items:center;position:relative;transition:transform .6s;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #f9f9f9;overflow:hidden}.windowBar .winItem[data-v-7b376ca4]:hover{background:#f9f9f9}.windowBar .winItem:hover .itemOperation[data-v-7b376ca4]{opacity:1;transform:translateY(0)}.windowBar .winItem.winActive[data-v-7b376ca4]{background:#f0f0f0}.windowBar .winItem .itemOperation[data-v-7b376ca4]{position:absolute;display:flex;align-items:flex-end;justify-content:center;height:100%;padding:0 5px;opacity:0;transform:translateY(100%);right:0}.windowBar .winItem .itemOperation[data-v-7b376ca4] .el-button{margin:0;padding:.06rem;margin-bottom:.4rem}.windowBar .winItem .itemOperation[data-v-7b376ca4] .el-button:hover{background-color:#f56c6c;border-color:#f56c6c}.windowBar[data-v-7b376ca4] .el-divider__text{padding:0 5px}",
          ""
        ]),
        (t.exports = e);
    },
    "107c": function(t, e, i) {
      var o = i("d039"),
        n = i("da84"),
        r = n.RegExp;
      t.exports = o(function() {
        var t = r("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    1276: function(t, e, i) {
      "use strict";
      var o = i("d784"),
        n = i("44e7"),
        r = i("825a"),
        s = i("1d80"),
        a = i("4840"),
        c = i("8aa5"),
        l = i("50c4"),
        h = i("577e"),
        p = i("dc4a"),
        u = i("14c3"),
        d = i("9263"),
        f = i("9f7f"),
        m = i("d039"),
        v = f.UNSUPPORTED_Y,
        g = [].push,
        y = Math.min,
        b = 4294967295,
        w = !m(function() {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function() {
            return e.apply(this, arguments);
          };
          var i = "ab".split(t);
          return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
        });
      o(
        "split",
        function(t, e, i) {
          var o;
          return (
            (o =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function(t, i) {
                    var o = h(s(this)),
                      r = void 0 === i ? b : i >>> 0;
                    if (0 === r) return [];
                    if (void 0 === t) return [o];
                    if (!n(t)) return e.call(o, t, r);
                    var a,
                      c,
                      l,
                      p = [],
                      u =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      f = 0,
                      m = new RegExp(t.source, u + "g");
                    while ((a = d.call(m, o))) {
                      if (
                        ((c = m.lastIndex),
                        c > f &&
                          (p.push(o.slice(f, a.index)),
                          a.length > 1 &&
                            a.index < o.length &&
                            g.apply(p, a.slice(1)),
                          (l = a[0].length),
                          (f = c),
                          p.length >= r))
                      )
                        break;
                      m.lastIndex === a.index && m.lastIndex++;
                    }
                    return (
                      f === o.length
                        ? (!l && m.test("")) || p.push("")
                        : p.push(o.slice(f)),
                      p.length > r ? p.slice(0, r) : p
                    );
                  }
                : "0".split(void 0, 0).length
                ? function(t, i) {
                    return void 0 === t && 0 === i ? [] : e.call(this, t, i);
                  }
                : e),
            [
              function(e, i) {
                var n = s(this),
                  r = void 0 == e ? void 0 : p(e, t);
                return r ? r.call(e, n, i) : o.call(h(n), e, i);
              },
              function(t, n) {
                var s = r(this),
                  p = h(t),
                  d = i(o, s, p, n, o !== e);
                if (d.done) return d.value;
                var f = a(s, RegExp),
                  m = s.unicode,
                  g =
                    (s.ignoreCase ? "i" : "") +
                    (s.multiline ? "m" : "") +
                    (s.unicode ? "u" : "") +
                    (v ? "g" : "y"),
                  w = new f(v ? "^(?:" + s.source + ")" : s, g),
                  x = void 0 === n ? b : n >>> 0;
                if (0 === x) return [];
                if (0 === p.length) return null === u(w, p) ? [p] : [];
                var k = 0,
                  T = 0,
                  S = [];
                while (T < p.length) {
                  w.lastIndex = v ? 0 : T;
                  var q,
                    _ = u(w, v ? p.slice(T) : p);
                  if (
                    null === _ ||
                    (q = y(l(w.lastIndex + (v ? T : 0)), p.length)) === k
                  )
                    T = c(p, T, m);
                  else {
                    if ((S.push(p.slice(k, T)), S.length === x)) return S;
                    for (var P = 1; P <= _.length - 1; P++)
                      if ((S.push(_[P]), S.length === x)) return S;
                    T = k = q;
                  }
                }
                return S.push(p.slice(k)), S;
              }
            ]
          );
        },
        !w,
        v
      );
    },
    "14ac": function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".empty[data-v-229d24da]{width:100%;height:100%;margin:0 auto;display:flex;align-items:center;justify-content:center;position:relative}",
          ""
        ]),
        (t.exports = e);
    },
    "14c3": function(t, e, i) {
      var o = i("825a"),
        n = i("1626"),
        r = i("c6b6"),
        s = i("9263");
      t.exports = function(t, e) {
        var i = t.exec;
        if (n(i)) {
          var a = i.call(t, e);
          return null !== a && o(a), a;
        }
        if ("RegExp" === r(t)) return s.call(t, e);
        throw TypeError("RegExp#exec called on incompatible receiver");
      };
    },
    "159b": function(t, e, i) {
      var o = i("da84"),
        n = i("fdbc"),
        r = i("785a"),
        s = i("17c2"),
        a = i("9112"),
        c = function(t) {
          if (t && t.forEach !== s)
            try {
              a(t, "forEach", s);
            } catch (e) {
              t.forEach = s;
            }
        };
      for (var l in n) n[l] && c(o[l] && o[l].prototype);
      c(r);
    },
    "15dd": function(t, e, i) {
      "use strict";
      i("9644");
    },
    1626: function(t, e) {
      t.exports = function(t) {
        return "function" === typeof t;
      };
    },
    "17c2": function(t, e, i) {
      "use strict";
      var o = i("b727").forEach,
        n = i("a640"),
        r = n("forEach");
      t.exports = r
        ? [].forEach
        : function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    "197c": function(t, e, i) {
      var o = i("e3f3");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("36528a4c", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1bb7": function(t, e, i) {
      "use strict";
      i("bcb9");
    },
    "1be4": function(t, e, i) {
      var o = i("d066");
      t.exports = o("document", "documentElement");
    },
    "1c7e": function(t, e, i) {
      var o = i("b622"),
        n = o("iterator"),
        r = !1;
      try {
        var s = 0,
          a = {
            next: function() {
              return { done: !!s++ };
            },
            return: function() {
              r = !0;
            }
          };
        (a[n] = function() {
          return this;
        }),
          Array.from(a, function() {
            throw 2;
          });
      } catch (c) {}
      t.exports = function(t, e) {
        if (!e && !r) return !1;
        var i = !1;
        try {
          var o = {};
          (o[n] = function() {
            return {
              next: function() {
                return { done: (i = !0) };
              }
            };
          }),
            t(o);
        } catch (c) {}
        return i;
      };
    },
    "1d80": function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    "1dde": function(t, e, i) {
      var o = i("d039"),
        n = i("b622"),
        r = i("2d00"),
        s = n("species");
      t.exports = function(t) {
        return (
          r >= 51 ||
          !o(function() {
            var e = [],
              i = (e.constructor = {});
            return (
              (i[s] = function() {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    2135: function(t, e, i) {
      "use strict";
      i("6500");
    },
    "23cb": function(t, e, i) {
      var o = i("a691"),
        n = Math.max,
        r = Math.min;
      t.exports = function(t, e) {
        var i = o(t);
        return i < 0 ? n(i + e, 0) : r(i, e);
      };
    },
    "23e7": function(t, e, i) {
      var o = i("da84"),
        n = i("06cf").f,
        r = i("9112"),
        s = i("6eeb"),
        a = i("ce4e"),
        c = i("e893"),
        l = i("94ca");
      t.exports = function(t, e) {
        var i,
          h,
          p,
          u,
          d,
          f,
          m = t.target,
          v = t.global,
          g = t.stat;
        if (((h = v ? o : g ? o[m] || a(m, {}) : (o[m] || {}).prototype), h))
          for (p in e) {
            if (
              ((d = e[p]),
              t.noTargetGet ? ((f = n(h, p)), (u = f && f.value)) : (u = h[p]),
              (i = l(v ? p : m + (g ? "." : "#") + p, t.forced)),
              !i && void 0 !== u)
            ) {
              if (typeof d === typeof u) continue;
              c(d, u);
            }
            (t.sham || (u && u.sham)) && r(d, "sham", !0), s(h, p, d, t);
          }
      };
    },
    "241c": function(t, e, i) {
      var o = i("ca84"),
        n = i("7839"),
        r = n.concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return o(t, r);
        };
    },
    "24fb": function(t, e, i) {
      "use strict";
      function o(t, e) {
        var i = t[1] || "",
          o = t[3];
        if (!o) return i;
        if (e && "function" === typeof btoa) {
          var r = n(o),
            s = o.sources.map(function(t) {
              return "/*# sourceURL="
                .concat(o.sourceRoot || "")
                .concat(t, " */");
            });
          return [i]
            .concat(s)
            .concat([r])
            .join("\n");
        }
        return [i].join("\n");
      }
      function n(t) {
        var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
          i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
            e
          );
        return "/*# ".concat(i, " */");
      }
      t.exports = function(t) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var i = o(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i;
            }).join("");
          }),
          (e.i = function(t, i, o) {
            "string" === typeof t && (t = [[null, t, ""]]);
            var n = {};
            if (o)
              for (var r = 0; r < this.length; r++) {
                var s = this[r][0];
                null != s && (n[s] = !0);
              }
            for (var a = 0; a < t.length; a++) {
              var c = [].concat(t[a]);
              (o && n[c[0]]) ||
                (i &&
                  (c[2]
                    ? (c[2] = "".concat(i, " and ").concat(c[2]))
                    : (c[2] = i)),
                e.push(c));
            }
          }),
          e
        );
      };
    },
    2532: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("5a34"),
        r = i("1d80"),
        s = i("577e"),
        a = i("ab13");
      o(
        { target: "String", proto: !0, forced: !a("includes") },
        {
          includes: function(t) {
            return !!~s(r(this)).indexOf(
              s(n(t)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          }
        }
      );
    },
    "25f0": function(t, e, i) {
      "use strict";
      var o = i("5e77").PROPER,
        n = i("6eeb"),
        r = i("825a"),
        s = i("577e"),
        a = i("d039"),
        c = i("ad6d"),
        l = "toString",
        h = RegExp.prototype,
        p = h[l],
        u = a(function() {
          return "/a/b" != p.call({ source: "a", flags: "b" });
        }),
        d = o && p.name != l;
      (u || d) &&
        n(
          RegExp.prototype,
          l,
          function() {
            var t = r(this),
              e = s(t.source),
              i = t.flags,
              o = s(
                void 0 === i && t instanceof RegExp && !("flags" in h)
                  ? c.call(t)
                  : i
              );
            return "/" + e + "/" + o;
          },
          { unsafe: !0 }
        );
    },
    2626: function(t, e, i) {
      "use strict";
      var o = i("d066"),
        n = i("9bf2"),
        r = i("b622"),
        s = i("83ab"),
        a = r("species");
      t.exports = function(t) {
        var e = o(t),
          i = n.f;
        s &&
          e &&
          !e[a] &&
          i(e, a, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    "2a62": function(t, e, i) {
      var o = i("825a"),
        n = i("dc4a");
      t.exports = function(t, e, i) {
        var r, s;
        o(t);
        try {
          if (((r = n(t, "return")), !r)) {
            if ("throw" === e) throw i;
            return i;
          }
          r = r.call(t);
        } catch (a) {
          (s = !0), (r = a);
        }
        if ("throw" === e) throw i;
        if (s) throw r;
        return o(r), i;
      };
    },
    "2a7a": function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".ChatPage[data-v-52808c7f]{background:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);display:flex;justify-content:center}.ChatPage .winBar[data-v-52808c7f]{flex:none;min-width:150px;border-right:1px solid rgba(0,0,0,.1)}.ChatPage .ChatPage-main[data-v-52808c7f]{flex:auto;display:flex;flex-direction:column}.ChatPage .ChatPage-main .header[data-v-52808c7f]{box-sizing:border-box;background-color:#409eff;display:flex;margin:0 auto;padding-left:12px;align-items:center;height:60px;width:100%;position:relative;color:#fff}.ChatPage .ChatPage-main .main[data-v-52808c7f]{display:flex;height:calc(100% - 60px)}.ChatPage .ChatPage-main .main .chatBox[data-v-52808c7f]{flex:auto}.ChatPage .ChatPage-main .main .rightBox[data-v-52808c7f]{box-shadow:0 -3px 3px 0 rgba(0,0,0,.1);max-width:45%;width:220px;box-sizing:border-box;position:relative}.ChatPage .ChatPage-main .main .rightBox .switch[data-v-52808c7f]{position:absolute;left:0;top:20%;transform:translate(-130%);background:hsla(0,0%,80%,.5);padding:.3rem 0 .3rem .1rem;border-radius:100% 0 0 100%;color:#fff;cursor:pointer}.ChatPage .ChatPage-main .main .rightBox .switch[data-v-52808c7f]:hover{background:#409eff}",
          ""
        ]),
        (t.exports = e);
    },
    "2d00": function(t, e, i) {
      var o,
        n,
        r = i("da84"),
        s = i("342f"),
        a = r.process,
        c = r.Deno,
        l = (a && a.versions) || (c && c.version),
        h = l && l.v8;
      h
        ? ((o = h.split(".")), (n = o[0] < 4 ? 1 : o[0] + o[1]))
        : s &&
          ((o = s.match(/Edge\/(\d+)/)),
          (!o || o[1] >= 74) &&
            ((o = s.match(/Chrome\/(\d+)/)), o && (n = o[1]))),
        (t.exports = n && +n);
    },
    "2e58": function(t, e, i) {
      "use strict";
      i("bfa4");
    },
    "2f74": function(t, e, i) {
      var o = i("050e");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("096e0c88", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "342f": function(t, e, i) {
      var o = i("d066");
      t.exports = o("navigator", "userAgent") || "";
    },
    "35a1": function(t, e, i) {
      var o = i("f5df"),
        n = i("dc4a"),
        r = i("3f8c"),
        s = i("b622"),
        a = s("iterator");
      t.exports = function(t) {
        if (void 0 != t) return n(t, a) || n(t, "@@iterator") || r[o(t)];
      };
    },
    "37e8": function(t, e, i) {
      var o = i("83ab"),
        n = i("9bf2"),
        r = i("825a"),
        s = i("df75");
      t.exports = o
        ? Object.defineProperties
        : function(t, e) {
            r(t);
            var i,
              o = s(e),
              a = o.length,
              c = 0;
            while (a > c) n.f(t, (i = o[c++]), e[i]);
            return t;
          };
    },
    "3bbe": function(t, e, i) {
      var o = i("1626");
      t.exports = function(t) {
        if ("object" === typeof t || o(t)) return t;
        throw TypeError("Can't set " + String(t) + " as a prototype");
      };
    },
    "3ca3": function(t, e, i) {
      "use strict";
      var o = i("6547").charAt,
        n = i("577e"),
        r = i("69f3"),
        s = i("7dd0"),
        a = "String Iterator",
        c = r.set,
        l = r.getterFor(a);
      s(
        String,
        "String",
        function(t) {
          c(this, { type: a, string: n(t), index: 0 });
        },
        function() {
          var t,
            e = l(this),
            i = e.string,
            n = e.index;
          return n >= i.length
            ? { value: void 0, done: !0 }
            : ((t = o(i, n)), (e.index += t.length), { value: t, done: !1 });
        }
      );
    },
    "3f8c": function(t, e) {
      t.exports = {};
    },
    "428f": function(t, e, i) {
      var o = i("da84");
      t.exports = o;
    },
    "44ad": function(t, e, i) {
      var o = i("d039"),
        n = i("c6b6"),
        r = "".split;
      t.exports = o(function() {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function(t) {
            return "String" == n(t) ? r.call(t, "") : Object(t);
          }
        : Object;
    },
    "44d2": function(t, e, i) {
      var o = i("b622"),
        n = i("7c73"),
        r = i("9bf2"),
        s = o("unscopables"),
        a = Array.prototype;
      void 0 == a[s] && r.f(a, s, { configurable: !0, value: n(null) }),
        (t.exports = function(t) {
          a[s][t] = !0;
        });
    },
    "44e7": function(t, e, i) {
      var o = i("861d"),
        n = i("c6b6"),
        r = i("b622"),
        s = r("match");
      t.exports = function(t) {
        var e;
        return o(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == n(t));
      };
    },
    "466d": function(t, e, i) {
      "use strict";
      var o = i("d784"),
        n = i("825a"),
        r = i("50c4"),
        s = i("577e"),
        a = i("1d80"),
        c = i("dc4a"),
        l = i("8aa5"),
        h = i("14c3");
      o("match", function(t, e, i) {
        return [
          function(e) {
            var i = a(this),
              o = void 0 == e ? void 0 : c(e, t);
            return o ? o.call(e, i) : new RegExp(e)[t](s(i));
          },
          function(t) {
            var o = n(this),
              a = s(t),
              c = i(e, o, a);
            if (c.done) return c.value;
            if (!o.global) return h(o, a);
            var p = o.unicode;
            o.lastIndex = 0;
            var u,
              d = [],
              f = 0;
            while (null !== (u = h(o, a))) {
              var m = s(u[0]);
              (d[f] = m),
                "" === m && (o.lastIndex = l(a, r(o.lastIndex), p)),
                f++;
            }
            return 0 === f ? null : d;
          }
        ];
      });
    },
    4840: function(t, e, i) {
      var o = i("825a"),
        n = i("5087"),
        r = i("b622"),
        s = r("species");
      t.exports = function(t, e) {
        var i,
          r = o(t).constructor;
        return void 0 === r || void 0 == (i = o(r)[s]) ? e : n(i);
      };
    },
    "485a": function(t, e, i) {
      var o = i("1626"),
        n = i("861d");
      t.exports = function(t, e) {
        var i, r;
        if ("string" === e && o((i = t.toString)) && !n((r = i.call(t))))
          return r;
        if (o((i = t.valueOf)) && !n((r = i.call(t)))) return r;
        if ("string" !== e && o((i = t.toString)) && !n((r = i.call(t))))
          return r;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    "48c2": function(t, e, i) {
      "use strict";
      i("5abf");
    },
    4930: function(t, e, i) {
      var o = i("2d00"),
        n = i("d039");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function() {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && o && o < 41)
          );
        });
    },
    "498a": function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("58a8").trim,
        r = i("c8d2");
      o(
        { target: "String", proto: !0, forced: r("trim") },
        {
          trim: function() {
            return n(this);
          }
        }
      );
    },
    "499e": function(t, e, i) {
      "use strict";
      function o(t, e) {
        for (var i = [], o = {}, n = 0; n < e.length; n++) {
          var r = e[n],
            s = r[0],
            a = r[1],
            c = r[2],
            l = r[3],
            h = { id: t + ":" + n, css: a, media: c, sourceMap: l };
          o[s] ? o[s].parts.push(h) : i.push((o[s] = { id: s, parts: [h] }));
        }
        return i;
      }
      i.r(e),
        i.d(e, "default", function() {
          return f;
        });
      var n = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !n)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var r = {},
        s = n && (document.head || document.getElementsByTagName("head")[0]),
        a = null,
        c = 0,
        l = !1,
        h = function() {},
        p = null,
        u = "data-vue-ssr-id",
        d =
          "undefined" !== typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function f(t, e, i, n) {
        (l = i), (p = n || {});
        var s = o(t, e);
        return (
          m(s),
          function(e) {
            for (var i = [], n = 0; n < s.length; n++) {
              var a = s[n],
                c = r[a.id];
              c.refs--, i.push(c);
            }
            e ? ((s = o(t, e)), m(s)) : (s = []);
            for (n = 0; n < i.length; n++) {
              c = i[n];
              if (0 === c.refs) {
                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                delete r[c.id];
              }
            }
          }
        );
      }
      function m(t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e],
            o = r[i.id];
          if (o) {
            o.refs++;
            for (var n = 0; n < o.parts.length; n++) o.parts[n](i.parts[n]);
            for (; n < i.parts.length; n++) o.parts.push(g(i.parts[n]));
            o.parts.length > i.parts.length &&
              (o.parts.length = i.parts.length);
          } else {
            var s = [];
            for (n = 0; n < i.parts.length; n++) s.push(g(i.parts[n]));
            r[i.id] = { id: i.id, refs: 1, parts: s };
          }
        }
      }
      function v() {
        var t = document.createElement("style");
        return (t.type = "text/css"), s.appendChild(t), t;
      }
      function g(t) {
        var e,
          i,
          o = document.querySelector("style[" + u + '~="' + t.id + '"]');
        if (o) {
          if (l) return h;
          o.parentNode.removeChild(o);
        }
        if (d) {
          var n = c++;
          (o = a || (a = v())),
            (e = b.bind(null, o, n, !1)),
            (i = b.bind(null, o, n, !0));
        } else
          (o = v()),
            (e = w.bind(null, o)),
            (i = function() {
              o.parentNode.removeChild(o);
            });
        return (
          e(t),
          function(o) {
            if (o) {
              if (
                o.css === t.css &&
                o.media === t.media &&
                o.sourceMap === t.sourceMap
              )
                return;
              e((t = o));
            } else i();
          }
        );
      }
      var y = (function() {
        var t = [];
        return function(e, i) {
          return (t[e] = i), t.filter(Boolean).join("\n");
        };
      })();
      function b(t, e, i, o) {
        var n = i ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = y(e, n);
        else {
          var r = document.createTextNode(n),
            s = t.childNodes;
          s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(r, s[e]) : t.appendChild(r);
        }
      }
      function w(t, e) {
        var i = e.css,
          o = e.media,
          n = e.sourceMap;
        if (
          (o && t.setAttribute("media", o),
          p.ssrId && t.setAttribute(u, e.id),
          n &&
            ((i += "\n/*# sourceURL=" + n.sources[0] + " */"),
            (i +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = i;
        else {
          while (t.firstChild) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(i));
        }
      }
    },
    "4d29": function(t, e, i) {
      var o = i("14ac");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("9eff990c", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4d63": function(t, e, i) {
      var o = i("83ab"),
        n = i("da84"),
        r = i("94ca"),
        s = i("7156"),
        a = i("9112"),
        c = i("9bf2").f,
        l = i("241c").f,
        h = i("44e7"),
        p = i("577e"),
        u = i("ad6d"),
        d = i("9f7f"),
        f = i("6eeb"),
        m = i("d039"),
        v = i("5135"),
        g = i("69f3").enforce,
        y = i("2626"),
        b = i("b622"),
        w = i("fce3"),
        x = i("107c"),
        k = b("match"),
        T = n.RegExp,
        S = T.prototype,
        q = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
        _ = /a/g,
        P = /a/g,
        C = new T(_) !== _,
        E = d.UNSUPPORTED_Y,
        M =
          o &&
          (!C ||
            E ||
            w ||
            x ||
            m(function() {
              return (P[k] = !1), T(_) != _ || T(P) == P || "/a/i" != T(_, "i");
            })),
        O = function(t) {
          for (var e, i = t.length, o = 0, n = "", r = !1; o <= i; o++)
            (e = t.charAt(o)),
              "\\" !== e
                ? r || "." !== e
                  ? ("[" === e ? (r = !0) : "]" === e && (r = !1), (n += e))
                  : (n += "[\\s\\S]")
                : (n += e + t.charAt(++o));
          return n;
        },
        B = function(t) {
          for (
            var e,
              i = t.length,
              o = 0,
              n = "",
              r = [],
              s = {},
              a = !1,
              c = !1,
              l = 0,
              h = "";
            o <= i;
            o++
          ) {
            if (((e = t.charAt(o)), "\\" === e)) e += t.charAt(++o);
            else if ("]" === e) a = !1;
            else if (!a)
              switch (!0) {
                case "[" === e:
                  a = !0;
                  break;
                case "(" === e:
                  q.test(t.slice(o + 1)) && ((o += 2), (c = !0)), (n += e), l++;
                  continue;
                case ">" === e && c:
                  if ("" === h || v(s, h))
                    throw new SyntaxError("Invalid capture group name");
                  (s[h] = !0), r.push([h, l]), (c = !1), (h = "");
                  continue;
              }
            c ? (h += e) : (n += e);
          }
          return [n, r];
        };
      if (r("RegExp", M)) {
        for (
          var z = function(t, e) {
              var i,
                o,
                n,
                r,
                c,
                l,
                d = this instanceof z,
                f = h(t),
                m = void 0 === e,
                v = [],
                y = t;
              if (!d && f && m && t.constructor === z) return t;
              if (
                ((f || t instanceof z) &&
                  ((t = t.source),
                  m && (e = ("flags" in y) ? y.flags : u.call(y))),
                (t = void 0 === t ? "" : p(t)),
                (e = void 0 === e ? "" : p(e)),
                (y = t),
                w &&
                  ("dotAll" in _) &&
                  ((o = !!e && e.indexOf("s") > -1),
                  o && (e = e.replace(/s/g, ""))),
                (i = e),
                E &&
                  ("sticky" in _) &&
                  ((n = !!e && e.indexOf("y") > -1),
                  n && (e = e.replace(/y/g, ""))),
                x && ((r = B(t)), (t = r[0]), (v = r[1])),
                (c = s(T(t, e), d ? this : S, z)),
                (o || n || v.length) &&
                  ((l = g(c)),
                  o && ((l.dotAll = !0), (l.raw = z(O(t), i))),
                  n && (l.sticky = !0),
                  v.length && (l.groups = v)),
                t !== y)
              )
                try {
                  a(c, "source", "" === y ? "(?:)" : y);
                } catch (b) {}
              return c;
            },
            L = function(t) {
              (t in z) ||
                c(z, t, {
                  configurable: !0,
                  get: function() {
                    return T[t];
                  },
                  set: function(e) {
                    T[t] = e;
                  }
                });
            },
            D = l(T),
            j = 0;
          D.length > j;

        )
          L(D[j++]);
        (S.constructor = z), (z.prototype = S), f(n, "RegExp", z);
      }
      y("RegExp");
    },
    "4d64": function(t, e, i) {
      var o = i("fc6a"),
        n = i("50c4"),
        r = i("23cb"),
        s = function(t) {
          return function(e, i, s) {
            var a,
              c = o(e),
              l = n(c.length),
              h = r(s, l);
            if (t && i != i) {
              while (l > h) if (((a = c[h++]), a != a)) return !0;
            } else
              for (; l > h; h++)
                if ((t || h in c) && c[h] === i) return t || h || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: s(!0), indexOf: s(!1) };
    },
    "4de4": function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("b727").filter,
        r = i("1dde"),
        s = r("filter");
      o(
        { target: "Array", proto: !0, forced: !s },
        {
          filter: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    },
    "4df4": function(t, e, i) {
      "use strict";
      var o = i("0366"),
        n = i("7b0b"),
        r = i("9bdd"),
        s = i("e95a"),
        a = i("68ee"),
        c = i("50c4"),
        l = i("8418"),
        h = i("9a1f"),
        p = i("35a1");
      t.exports = function(t) {
        var e = n(t),
          i = a(this),
          u = arguments.length,
          d = u > 1 ? arguments[1] : void 0,
          f = void 0 !== d;
        f && (d = o(d, u > 2 ? arguments[2] : void 0, 2));
        var m,
          v,
          g,
          y,
          b,
          w,
          x = p(e),
          k = 0;
        if (!x || (this == Array && s(x)))
          for (m = c(e.length), v = i ? new this(m) : Array(m); m > k; k++)
            (w = f ? d(e[k], k) : e[k]), l(v, k, w);
        else
          for (
            y = h(e, x), b = y.next, v = i ? new this() : [];
            !(g = b.call(y)).done;
            k++
          )
            (w = f ? r(y, d, [g.value, k], !0) : g.value), l(v, k, w);
        return (v.length = k), v;
      };
    },
    5087: function(t, e, i) {
      var o = i("68ee"),
        n = i("0d51");
      t.exports = function(t) {
        if (o(t)) return t;
        throw TypeError(n(t) + " is not a constructor");
      };
    },
    "50c4": function(t, e, i) {
      var o = i("a691"),
        n = Math.min;
      t.exports = function(t) {
        return t > 0 ? n(o(t), 9007199254740991) : 0;
      };
    },
    5135: function(t, e, i) {
      var o = i("7b0b"),
        n = {}.hasOwnProperty;
      t.exports =
        Object.hasOwn ||
        function(t, e) {
          return n.call(o(t), e);
        };
    },
    5319: function(t, e, i) {
      "use strict";
      var o = i("d784"),
        n = i("d039"),
        r = i("825a"),
        s = i("1626"),
        a = i("a691"),
        c = i("50c4"),
        l = i("577e"),
        h = i("1d80"),
        p = i("8aa5"),
        u = i("dc4a"),
        d = i("0cb2"),
        f = i("14c3"),
        m = i("b622"),
        v = m("replace"),
        g = Math.max,
        y = Math.min,
        b = function(t) {
          return void 0 === t ? t : String(t);
        },
        w = (function() {
          return "$0" === "a".replace(/./, "$0");
        })(),
        x = (function() {
          return !!/./[v] && "" === /./[v]("a", "$0");
        })(),
        k = !n(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        });
      o(
        "replace",
        function(t, e, i) {
          var o = x ? "$" : "$0";
          return [
            function(t, i) {
              var o = h(this),
                n = void 0 == t ? void 0 : u(t, v);
              return n ? n.call(t, o, i) : e.call(l(o), t, i);
            },
            function(t, n) {
              var h = r(this),
                u = l(t);
              if (
                "string" === typeof n &&
                -1 === n.indexOf(o) &&
                -1 === n.indexOf("$<")
              ) {
                var m = i(e, h, u, n);
                if (m.done) return m.value;
              }
              var v = s(n);
              v || (n = l(n));
              var w = h.global;
              if (w) {
                var x = h.unicode;
                h.lastIndex = 0;
              }
              var k = [];
              while (1) {
                var T = f(h, u);
                if (null === T) break;
                if ((k.push(T), !w)) break;
                var S = l(T[0]);
                "" === S && (h.lastIndex = p(u, c(h.lastIndex), x));
              }
              for (var q = "", _ = 0, P = 0; P < k.length; P++) {
                T = k[P];
                for (
                  var C = l(T[0]),
                    E = g(y(a(T.index), u.length), 0),
                    M = [],
                    O = 1;
                  O < T.length;
                  O++
                )
                  M.push(b(T[O]));
                var B = T.groups;
                if (v) {
                  var z = [C].concat(M, E, u);
                  void 0 !== B && z.push(B);
                  var L = l(n.apply(void 0, z));
                } else L = d(C, u, E, M, B, n);
                E >= _ && ((q += u.slice(_, E) + L), (_ = E + C.length));
              }
              return q + u.slice(_);
            }
          ];
        },
        !k || !w || x
      );
    },
    5692: function(t, e, i) {
      var o = i("c430"),
        n = i("c6cd");
      (t.exports = function(t, e) {
        return n[t] || (n[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.18.1",
        mode: o ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
      });
    },
    "56ef": function(t, e, i) {
      var o = i("d066"),
        n = i("241c"),
        r = i("7418"),
        s = i("825a");
      t.exports =
        o("Reflect", "ownKeys") ||
        function(t) {
          var e = n.f(s(t)),
            i = r.f;
          return i ? e.concat(i(t)) : e;
        };
    },
    "577e": function(t, e, i) {
      var o = i("f5df");
      t.exports = function(t) {
        if ("Symbol" === o(t))
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(t);
      };
    },
    5863: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".chatPage[data-v-f150358a]{margin:0 auto;position:relative;background:#fff;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}.chatPage .taleBox[data-v-f150358a]{width:100%;flex:auto;overflow:hidden}.chatPage .toolBox[data-v-f150358a]{height:160px;min-height:160px;width:100%;box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);position:relative;display:flex;flex-direction:column}.chatPage .toolBox .quickList[data-v-f150358a]{width:100%;transform:translateY(-100%);background:#fff;position:absolute;z-index:5}.chatPage .toolBox .enterBox[data-v-f150358a]{flex:auto}",
          ""
        ]),
        (t.exports = e);
    },
    5899: function(t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    "58a8": function(t, e, i) {
      var o = i("1d80"),
        n = i("577e"),
        r = i("5899"),
        s = "[" + r + "]",
        a = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        l = function(t) {
          return function(e) {
            var i = n(o(e));
            return (
              1 & t && (i = i.replace(a, "")),
              2 & t && (i = i.replace(c, "")),
              i
            );
          };
        };
      t.exports = { start: l(1), end: l(2), trim: l(3) };
    },
    "59ed": function(t, e, i) {
      var o = i("1626"),
        n = i("0d51");
      t.exports = function(t) {
        if (o(t)) return t;
        throw TypeError(n(t) + " is not a function");
      };
    },
    "5a34": function(t, e, i) {
      var o = i("44e7");
      t.exports = function(t) {
        if (o(t))
          throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    "5abf": function(t, e, i) {
      var o = i("e92c");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("3fae2c61", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5bcb": function(t, e, i) {
      var o = i("edbe");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("2989c38c", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5c6c": function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    },
    "5e77": function(t, e, i) {
      var o = i("83ab"),
        n = i("5135"),
        r = Function.prototype,
        s = o && Object.getOwnPropertyDescriptor,
        a = n(r, "name"),
        c = a && "something" === function() {}.name,
        l = a && (!o || (o && s(r, "name").configurable));
      t.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: l };
    },
    "64b2": function(t, e, i) {
      "use strict";
      i("d5ea");
    },
    6500: function(t, e, i) {
      var o = i("2a7a");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("31225273", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    6547: function(t, e, i) {
      var o = i("a691"),
        n = i("577e"),
        r = i("1d80"),
        s = function(t) {
          return function(e, i) {
            var s,
              a,
              c = n(r(e)),
              l = o(i),
              h = c.length;
            return l < 0 || l >= h
              ? t
                ? ""
                : void 0
              : ((s = c.charCodeAt(l)),
                s < 55296 ||
                s > 56319 ||
                l + 1 === h ||
                (a = c.charCodeAt(l + 1)) < 56320 ||
                a > 57343
                  ? t
                    ? c.charAt(l)
                    : s
                  : t
                  ? c.slice(l, l + 2)
                  : a - 56320 + ((s - 55296) << 10) + 65536);
          };
        };
      t.exports = { codeAt: s(!1), charAt: s(!0) };
    },
    "65f0": function(t, e, i) {
      var o = i("0b42");
      t.exports = function(t, e) {
        return new (o(t))(0 === e ? 0 : e);
      };
    },
    "68ee": function(t, e, i) {
      var o = i("d039"),
        n = i("1626"),
        r = i("f5df"),
        s = i("d066"),
        a = i("8925"),
        c = [],
        l = s("Reflect", "construct"),
        h = /^\s*(?:class|function)\b/,
        p = h.exec,
        u = !h.exec(function() {}),
        d = function(t) {
          if (!n(t)) return !1;
          try {
            return l(Object, c, t), !0;
          } catch (e) {
            return !1;
          }
        },
        f = function(t) {
          if (!n(t)) return !1;
          switch (r(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          return u || !!p.call(h, a(t));
        };
      t.exports =
        !l ||
        o(function() {
          var t;
          return (
            d(d.call) ||
            !d(Object) ||
            !d(function() {
              t = !0;
            }) ||
            t
          );
        })
          ? f
          : d;
    },
    "69f3": function(t, e, i) {
      var o,
        n,
        r,
        s = i("7f9a"),
        a = i("da84"),
        c = i("861d"),
        l = i("9112"),
        h = i("5135"),
        p = i("c6cd"),
        u = i("f772"),
        d = i("d012"),
        f = "Object already initialized",
        m = a.WeakMap,
        v = function(t) {
          return r(t) ? n(t) : o(t, {});
        },
        g = function(t) {
          return function(e) {
            var i;
            if (!c(e) || (i = n(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return i;
          };
        };
      if (s || p.state) {
        var y = p.state || (p.state = new m()),
          b = y.get,
          w = y.has,
          x = y.set;
        (o = function(t, e) {
          if (w.call(y, t)) throw new TypeError(f);
          return (e.facade = t), x.call(y, t, e), e;
        }),
          (n = function(t) {
            return b.call(y, t) || {};
          }),
          (r = function(t) {
            return w.call(y, t);
          });
      } else {
        var k = u("state");
        (d[k] = !0),
          (o = function(t, e) {
            if (h(t, k)) throw new TypeError(f);
            return (e.facade = t), l(t, k, e), e;
          }),
          (n = function(t) {
            return h(t, k) ? t[k] : {};
          }),
          (r = function(t) {
            return h(t, k);
          });
      }
      t.exports = { set: o, get: n, has: r, enforce: v, getterFor: g };
    },
    "6eeb": function(t, e, i) {
      var o = i("da84"),
        n = i("1626"),
        r = i("5135"),
        s = i("9112"),
        a = i("ce4e"),
        c = i("8925"),
        l = i("69f3"),
        h = i("5e77").CONFIGURABLE,
        p = l.get,
        u = l.enforce,
        d = String(String).split("String");
      (t.exports = function(t, e, i, c) {
        var l,
          p = !!c && !!c.unsafe,
          f = !!c && !!c.enumerable,
          m = !!c && !!c.noTargetGet,
          v = c && void 0 !== c.name ? c.name : e;
        n(i) &&
          ("Symbol(" === String(v).slice(0, 7) &&
            (v = "[" + String(v).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!r(i, "name") || (h && i.name !== v)) && s(i, "name", v),
          (l = u(i)),
          l.source || (l.source = d.join("string" == typeof v ? v : ""))),
          t !== o
            ? (p ? !m && t[e] && (f = !0) : delete t[e],
              f ? (t[e] = i) : s(t, e, i))
            : f
            ? (t[e] = i)
            : a(e, i);
      })(Function.prototype, "toString", function() {
        return (n(this) && p(this).source) || c(this);
      });
    },
    7156: function(t, e, i) {
      var o = i("1626"),
        n = i("861d"),
        r = i("d2bb");
      t.exports = function(t, e, i) {
        var s, a;
        return (
          r &&
            o((s = e.constructor)) &&
            s !== i &&
            n((a = s.prototype)) &&
            a !== i.prototype &&
            r(t, a),
          t
        );
      };
    },
    7418: function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    "746f": function(t, e, i) {
      var o = i("428f"),
        n = i("5135"),
        r = i("e538"),
        s = i("9bf2").f;
      t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = {});
        n(e, t) || s(e, t, { value: r.f(t) });
      };
    },
    7780: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}",
          ""
        ]),
        (t.exports = e);
    },
    7839: function(t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    },
    "785a": function(t, e, i) {
      var o = i("cc12"),
        n = o("span").classList,
        r = n && n.constructor && n.constructor.prototype;
      t.exports = r === Object.prototype ? void 0 : r;
    },
    "7b0b": function(t, e, i) {
      var o = i("1d80");
      t.exports = function(t) {
        return Object(o(t));
      };
    },
    "7b38": function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".shopTalk[data-v-8d5a38ae]{padding:0;margin:0;display:inline-block;width:200px}.shopTalk .price[data-v-8d5a38ae]{color:#c16e3e;font-weight:700}.shopTalk .cover[data-v-8d5a38ae]{width:100%}.shopTalk .cover img[data-v-8d5a38ae]{width:100%;max-height:300px}.shopTalk .title[data-v-8d5a38ae]{width:100%;font-weight:700;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.shopTalk .subtitle[data-v-8d5a38ae]{border-top:1px solid #dcdfe6;font-size:.5rem}.shopTalk .tagBox span[data-v-8d5a38ae]{background:#fed6be;color:#c16e3e;font-size:.7rem;padding:2px 10px;border-radius:30px;display:inline-block;margin:2px 5px}",
          ""
        ]),
        (t.exports = e);
    },
    "7c73": function(t, e, i) {
      var o,
        n = i("825a"),
        r = i("37e8"),
        s = i("7839"),
        a = i("d012"),
        c = i("1be4"),
        l = i("cc12"),
        h = i("f772"),
        p = ">",
        u = "<",
        d = "prototype",
        f = "script",
        m = h("IE_PROTO"),
        v = function() {},
        g = function(t) {
          return u + f + p + t + u + "/" + f + p;
        },
        y = function(t) {
          t.write(g("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        b = function() {
          var t,
            e = l("iframe"),
            i = "java" + f + ":";
          return (
            (e.style.display = "none"),
            c.appendChild(e),
            (e.src = String(i)),
            (t = e.contentWindow.document),
            t.open(),
            t.write(g("document.F=Object")),
            t.close(),
            t.F
          );
        },
        w = function() {
          try {
            o = new ActiveXObject("htmlfile");
          } catch (e) {}
          w =
            "undefined" != typeof document
              ? document.domain && o
                ? y(o)
                : b()
              : y(o);
          var t = s.length;
          while (t--) delete w[d][s[t]];
          return w();
        };
      (a[m] = !0),
        (t.exports =
          Object.create ||
          function(t, e) {
            var i;
            return (
              null !== t
                ? ((v[d] = n(t)), (i = new v()), (v[d] = null), (i[m] = t))
                : (i = w()),
              void 0 === e ? i : r(i, e)
            );
          });
    },
    "7dd0": function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("c430"),
        r = i("5e77"),
        s = i("1626"),
        a = i("9ed3"),
        c = i("e163"),
        l = i("d2bb"),
        h = i("d44e"),
        p = i("9112"),
        u = i("6eeb"),
        d = i("b622"),
        f = i("3f8c"),
        m = i("ae93"),
        v = r.PROPER,
        g = r.CONFIGURABLE,
        y = m.IteratorPrototype,
        b = m.BUGGY_SAFARI_ITERATORS,
        w = d("iterator"),
        x = "keys",
        k = "values",
        T = "entries",
        S = function() {
          return this;
        };
      t.exports = function(t, e, i, r, d, m, q) {
        a(i, e, r);
        var _,
          P,
          C,
          E = function(t) {
            if (t === d && L) return L;
            if (!b && t in B) return B[t];
            switch (t) {
              case x:
                return function() {
                  return new i(this, t);
                };
              case k:
                return function() {
                  return new i(this, t);
                };
              case T:
                return function() {
                  return new i(this, t);
                };
            }
            return function() {
              return new i(this);
            };
          },
          M = e + " Iterator",
          O = !1,
          B = t.prototype,
          z = B[w] || B["@@iterator"] || (d && B[d]),
          L = (!b && z) || E(d),
          D = ("Array" == e && B.entries) || z;
        if (
          (D &&
            ((_ = c(D.call(new t()))),
            _ !== Object.prototype &&
              _.next &&
              (n || c(_) === y || (l ? l(_, y) : s(_[w]) || u(_, w, S)),
              h(_, M, !0, !0),
              n && (f[M] = S))),
          v &&
            d == k &&
            z &&
            z.name !== k &&
            (!n && g
              ? p(B, "name", k)
              : ((O = !0),
                (L = function() {
                  return z.call(this);
                }))),
          d)
        )
          if (((P = { values: E(k), keys: m ? L : E(x), entries: E(T) }), q))
            for (C in P) (b || O || !(C in B)) && u(B, C, P[C]);
          else o({ target: e, proto: !0, forced: b || O }, P);
        return (
          (n && !q) || B[w] === L || u(B, w, L, { name: d }), (f[e] = L), P
        );
      };
    },
    "7f9a": function(t, e, i) {
      var o = i("da84"),
        n = i("1626"),
        r = i("8925"),
        s = o.WeakMap;
      t.exports = n(s) && /native code/.test(r(s));
    },
    "825a": function(t, e, i) {
      var o = i("861d");
      t.exports = function(t) {
        if (o(t)) return t;
        throw TypeError(String(t) + " is not an object");
      };
    },
    8378: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".item_msg[data-v-3af7478a]{padding:0;margin:0;display:inline-block;display:flex}.item_msg .web__msg--file[data-v-3af7478a],.item_msg .web__msg--img[data-v-3af7478a],.item_msg .web__msg--video[data-v-3af7478a]{max-width:250px;min-width:50px;width:100%;margin:10px 0;border:1px solid #eee;overflow:hidden;border-radius:5px;cursor:pointer;display:block}.item_msg .web__msg--img[data-class=iconBox][data-v-3af7478a]{max-width:24px;min-width:unset;border:none;margin:0;vertical-align:bottom;display:inline-block}",
          ""
        ]),
        (t.exports = e);
    },
    "83ab": function(t, e, i) {
      var o = i("d039");
      t.exports = !o(function() {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function() {
              return 7;
            }
          })[1]
        );
      });
    },
    8418: function(t, e, i) {
      "use strict";
      var o = i("a04b"),
        n = i("9bf2"),
        r = i("5c6c");
      t.exports = function(t, e, i) {
        var s = o(e);
        s in t ? n.f(t, s, r(0, i)) : (t[s] = i);
      };
    },
    "861d": function(t, e, i) {
      var o = i("1626");
      t.exports = function(t) {
        return "object" === typeof t ? null !== t : o(t);
      };
    },
    8875: function(t, e, i) {
      var o, n, r;
      (function(i, s) {
        (n = []),
          (o = s),
          (r = "function" === typeof o ? o.apply(e, n) : o),
          void 0 === r || (t.exports = r);
      })("undefined" !== typeof self && self, function() {
        function t() {
          var e = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!e && "currentScript" in document && document.currentScript)
            return document.currentScript;
          if (e && e.get !== t && document.currentScript)
            return document.currentScript;
          try {
            throw new Error();
          } catch (d) {
            var i,
              o,
              n,
              r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
              s = /@([^@]*):(\d+):(\d+)\s*$/gi,
              a = r.exec(d.stack) || s.exec(d.stack),
              c = (a && a[1]) || !1,
              l = (a && a[2]) || !1,
              h = document.location.href.replace(document.location.hash, ""),
              p = document.getElementsByTagName("script");
            c === h &&
              ((i = document.documentElement.outerHTML),
              (o = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (l - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              )),
              (n = i.replace(o, "$1").trim()));
            for (var u = 0; u < p.length; u++) {
              if ("interactive" === p[u].readyState) return p[u];
              if (p[u].src === c) return p[u];
              if (c === h && p[u].innerHTML && p[u].innerHTML.trim() === n)
                return p[u];
            }
            return null;
          }
        }
        return t;
      });
    },
    8925: function(t, e, i) {
      var o = i("1626"),
        n = i("c6cd"),
        r = Function.toString;
      o(n.inspectSource) ||
        (n.inspectSource = function(t) {
          return r.call(t);
        }),
        (t.exports = n.inspectSource);
    },
    "8aa5": function(t, e, i) {
      "use strict";
      var o = i("6547").charAt;
      t.exports = function(t, e, i) {
        return e + (i ? o(t, e).length : 1);
      };
    },
    "8c3a": function(t, e, i) {
      var o = i("7780");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("97b7b246", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "90e3": function(t, e) {
      var i = 0,
        o = Math.random();
      t.exports = function(t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++i + o).toString(36)
        );
      };
    },
    9112: function(t, e, i) {
      var o = i("83ab"),
        n = i("9bf2"),
        r = i("5c6c");
      t.exports = o
        ? function(t, e, i) {
            return n.f(t, e, r(1, i));
          }
        : function(t, e, i) {
            return (t[e] = i), t;
          };
    },
    9201: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".toolsBox[data-v-b4bb0df6]{position:relative;text-align:left;box-sizing:border-box;display:flex;align-items:center;height:30px}.toolIcon[data-v-b4bb0df6]{padding-left:6px;font-size:20px;color:#888a91}.toolIcon[data-v-b4bb0df6]:hover{color:#76b1f9}.emjioBox[data-v-b4bb0df6]{background:#fff;height:150px;width:300px;overflow:auto;text-align:left;padding:0}.emjioBox li[data-v-b4bb0df6]{display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;cursor:pointer}",
          ""
        ]),
        (t.exports = e);
    },
    9263: function(t, e, i) {
      "use strict";
      var o = i("577e"),
        n = i("ad6d"),
        r = i("9f7f"),
        s = i("5692"),
        a = i("7c73"),
        c = i("69f3").get,
        l = i("fce3"),
        h = i("107c"),
        p = RegExp.prototype.exec,
        u = s("native-string-replace", String.prototype.replace),
        d = p,
        f = (function() {
          var t = /a/,
            e = /b*/g;
          return (
            p.call(t, "a"),
            p.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        m = r.UNSUPPORTED_Y || r.BROKEN_CARET,
        v = void 0 !== /()??/.exec("")[1],
        g = f || v || m || l || h;
      g &&
        (d = function(t) {
          var e,
            i,
            r,
            s,
            l,
            h,
            g,
            y = this,
            b = c(y),
            w = o(t),
            x = b.raw;
          if (x)
            return (
              (x.lastIndex = y.lastIndex),
              (e = d.call(x, w)),
              (y.lastIndex = x.lastIndex),
              e
            );
          var k = b.groups,
            T = m && y.sticky,
            S = n.call(y),
            q = y.source,
            _ = 0,
            P = w;
          if (
            (T &&
              ((S = S.replace("y", "")),
              -1 === S.indexOf("g") && (S += "g"),
              (P = w.slice(y.lastIndex)),
              y.lastIndex > 0 &&
                (!y.multiline ||
                  (y.multiline && "\n" !== w.charAt(y.lastIndex - 1))) &&
                ((q = "(?: " + q + ")"), (P = " " + P), _++),
              (i = new RegExp("^(?:" + q + ")", S))),
            v && (i = new RegExp("^" + q + "$(?!\\s)", S)),
            f && (r = y.lastIndex),
            (s = p.call(T ? i : y, P)),
            T
              ? s
                ? ((s.input = s.input.slice(_)),
                  (s[0] = s[0].slice(_)),
                  (s.index = y.lastIndex),
                  (y.lastIndex += s[0].length))
                : (y.lastIndex = 0)
              : f && s && (y.lastIndex = y.global ? s.index + s[0].length : r),
            v &&
              s &&
              s.length > 1 &&
              u.call(s[0], i, function() {
                for (l = 1; l < arguments.length - 2; l++)
                  void 0 === arguments[l] && (s[l] = void 0);
              }),
            s && k)
          )
            for (s.groups = h = a(null), l = 0; l < k.length; l++)
              (g = k[l]), (h[g[0]] = s[g[1]]);
          return s;
        }),
        (t.exports = d);
    },
    "94ca": function(t, e, i) {
      var o = i("d039"),
        n = i("1626"),
        r = /#|\.prototype\./,
        s = function(t, e) {
          var i = c[a(t)];
          return i == h || (i != l && (n(e) ? o(e) : !!e));
        },
        a = (s.normalize = function(t) {
          return String(t)
            .replace(r, ".")
            .toLowerCase();
        }),
        c = (s.data = {}),
        l = (s.NATIVE = "N"),
        h = (s.POLYFILL = "P");
      t.exports = s;
    },
    "95f5": function(t, e, i) {
      "use strict";
      i("9965");
    },
    9644: function(t, e, i) {
      var o = i("0db0");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("835e52da", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    9965: function(t, e, i) {
      var o = i("c795");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("14f2dc0f", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9a1f": function(t, e, i) {
      var o = i("59ed"),
        n = i("825a"),
        r = i("35a1");
      t.exports = function(t, e) {
        var i = arguments.length < 2 ? r(t) : e;
        if (o(i)) return n(i.call(t));
        throw TypeError(String(t) + " is not iterable");
      };
    },
    "9bdd": function(t, e, i) {
      var o = i("825a"),
        n = i("2a62");
      t.exports = function(t, e, i, r) {
        try {
          return r ? e(o(i)[0], i[1]) : e(i);
        } catch (s) {
          n(t, "throw", s);
        }
      };
    },
    "9bf2": function(t, e, i) {
      var o = i("83ab"),
        n = i("0cfb"),
        r = i("825a"),
        s = i("a04b"),
        a = Object.defineProperty;
      e.f = o
        ? a
        : function(t, e, i) {
            if ((r(t), (e = s(e)), r(i), n))
              try {
                return a(t, e, i);
              } catch (o) {}
            if ("get" in i || "set" in i)
              throw TypeError("Accessors not supported");
            return "value" in i && (t[e] = i.value), t;
          };
    },
    "9ed3": function(t, e, i) {
      "use strict";
      var o = i("ae93").IteratorPrototype,
        n = i("7c73"),
        r = i("5c6c"),
        s = i("d44e"),
        a = i("3f8c"),
        c = function() {
          return this;
        };
      t.exports = function(t, e, i) {
        var l = e + " Iterator";
        return (
          (t.prototype = n(o, { next: r(1, i) })),
          s(t, l, !1, !0),
          (a[l] = c),
          t
        );
      };
    },
    "9f7f": function(t, e, i) {
      var o = i("d039"),
        n = i("da84"),
        r = n.RegExp;
      (e.UNSUPPORTED_Y = o(function() {
        var t = r("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
        (e.BROKEN_CARET = o(function() {
          var t = r("^r", "gy");
          return (t.lastIndex = 2), null != t.exec("str");
        }));
    },
    a04b: function(t, e, i) {
      var o = i("c04e"),
        n = i("d9b5");
      t.exports = function(t) {
        var e = o(t, "string");
        return n(e) ? e : String(e);
      };
    },
    a4d3: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("da84"),
        r = i("d066"),
        s = i("c430"),
        a = i("83ab"),
        c = i("4930"),
        l = i("d039"),
        h = i("5135"),
        p = i("e8b5"),
        u = i("1626"),
        d = i("861d"),
        f = i("d9b5"),
        m = i("825a"),
        v = i("7b0b"),
        g = i("fc6a"),
        y = i("a04b"),
        b = i("577e"),
        w = i("5c6c"),
        x = i("7c73"),
        k = i("df75"),
        T = i("241c"),
        S = i("057f"),
        q = i("7418"),
        _ = i("06cf"),
        P = i("9bf2"),
        C = i("d1e7"),
        E = i("6eeb"),
        M = i("5692"),
        O = i("f772"),
        B = i("d012"),
        z = i("90e3"),
        L = i("b622"),
        D = i("e538"),
        j = i("746f"),
        A = i("d44e"),
        H = i("69f3"),
        I = i("b727").forEach,
        R = O("hidden"),
        Y = "Symbol",
        $ = "prototype",
        X = L("toPrimitive"),
        F = H.set,
        N = H.getterFor(Y),
        W = Object[$],
        V = n.Symbol,
        J = r("JSON", "stringify"),
        U = _.f,
        K = P.f,
        G = S.f,
        Q = C.f,
        Z = M("symbols"),
        tt = M("op-symbols"),
        et = M("string-to-symbol-registry"),
        it = M("symbol-to-string-registry"),
        ot = M("wks"),
        nt = n.QObject,
        rt = !nt || !nt[$] || !nt[$].findChild,
        st =
          a &&
          l(function() {
            return (
              7 !=
              x(
                K({}, "a", {
                  get: function() {
                    return K(this, "a", { value: 7 }).a;
                  }
                })
              ).a
            );
          })
            ? function(t, e, i) {
                var o = U(W, e);
                o && delete W[e], K(t, e, i), o && t !== W && K(W, e, o);
              }
            : K,
        at = function(t, e) {
          var i = (Z[t] = x(V[$]));
          return (
            F(i, { type: Y, tag: t, description: e }),
            a || (i.description = e),
            i
          );
        },
        ct = function(t, e, i) {
          t === W && ct(tt, e, i), m(t);
          var o = y(e);
          return (
            m(i),
            h(Z, o)
              ? (i.enumerable
                  ? (h(t, R) && t[R][o] && (t[R][o] = !1),
                    (i = x(i, { enumerable: w(0, !1) })))
                  : (h(t, R) || K(t, R, w(1, {})), (t[R][o] = !0)),
                st(t, o, i))
              : K(t, o, i)
          );
        },
        lt = function(t, e) {
          m(t);
          var i = g(e),
            o = k(i).concat(ft(i));
          return (
            I(o, function(e) {
              (a && !pt.call(i, e)) || ct(t, e, i[e]);
            }),
            t
          );
        },
        ht = function(t, e) {
          return void 0 === e ? x(t) : lt(x(t), e);
        },
        pt = function(t) {
          var e = y(t),
            i = Q.call(this, e);
          return (
            !(this === W && h(Z, e) && !h(tt, e)) &&
            (!(i || !h(this, e) || !h(Z, e) || (h(this, R) && this[R][e])) || i)
          );
        },
        ut = function(t, e) {
          var i = g(t),
            o = y(e);
          if (i !== W || !h(Z, o) || h(tt, o)) {
            var n = U(i, o);
            return (
              !n || !h(Z, o) || (h(i, R) && i[R][o]) || (n.enumerable = !0), n
            );
          }
        },
        dt = function(t) {
          var e = G(g(t)),
            i = [];
          return (
            I(e, function(t) {
              h(Z, t) || h(B, t) || i.push(t);
            }),
            i
          );
        },
        ft = function(t) {
          var e = t === W,
            i = G(e ? tt : g(t)),
            o = [];
          return (
            I(i, function(t) {
              !h(Z, t) || (e && !h(W, t)) || o.push(Z[t]);
            }),
            o
          );
        };
      if (
        (c ||
          ((V = function() {
            if (this instanceof V)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? b(arguments[0])
                  : void 0,
              e = z(t),
              i = function(t) {
                this === W && i.call(tt, t),
                  h(this, R) && h(this[R], e) && (this[R][e] = !1),
                  st(this, e, w(1, t));
              };
            return a && rt && st(W, e, { configurable: !0, set: i }), at(e, t);
          }),
          E(V[$], "toString", function() {
            return N(this).tag;
          }),
          E(V, "withoutSetter", function(t) {
            return at(z(t), t);
          }),
          (C.f = pt),
          (P.f = ct),
          (_.f = ut),
          (T.f = S.f = dt),
          (q.f = ft),
          (D.f = function(t) {
            return at(L(t), t);
          }),
          a &&
            (K(V[$], "description", {
              configurable: !0,
              get: function() {
                return N(this).description;
              }
            }),
            s || E(W, "propertyIsEnumerable", pt, { unsafe: !0 }))),
        o({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: V }),
        I(k(ot), function(t) {
          j(t);
        }),
        o(
          { target: Y, stat: !0, forced: !c },
          {
            for: function(t) {
              var e = b(t);
              if (h(et, e)) return et[e];
              var i = V(e);
              return (et[e] = i), (it[i] = e), i;
            },
            keyFor: function(t) {
              if (!f(t)) throw TypeError(t + " is not a symbol");
              if (h(it, t)) return it[t];
            },
            useSetter: function() {
              rt = !0;
            },
            useSimple: function() {
              rt = !1;
            }
          }
        ),
        o(
          { target: "Object", stat: !0, forced: !c, sham: !a },
          {
            create: ht,
            defineProperty: ct,
            defineProperties: lt,
            getOwnPropertyDescriptor: ut
          }
        ),
        o(
          { target: "Object", stat: !0, forced: !c },
          { getOwnPropertyNames: dt, getOwnPropertySymbols: ft }
        ),
        o(
          {
            target: "Object",
            stat: !0,
            forced: l(function() {
              q.f(1);
            })
          },
          {
            getOwnPropertySymbols: function(t) {
              return q.f(v(t));
            }
          }
        ),
        J)
      ) {
        var mt =
          !c ||
          l(function() {
            var t = V();
            return (
              "[null]" != J([t]) || "{}" != J({ a: t }) || "{}" != J(Object(t))
            );
          });
        o(
          { target: "JSON", stat: !0, forced: mt },
          {
            stringify: function(t, e, i) {
              var o,
                n = [t],
                r = 1;
              while (arguments.length > r) n.push(arguments[r++]);
              if (((o = e), (d(e) || void 0 !== t) && !f(t)))
                return (
                  p(e) ||
                    (e = function(t, e) {
                      if ((u(o) && (e = o.call(this, t, e)), !f(e))) return e;
                    }),
                  (n[1] = e),
                  J.apply(null, n)
                );
            }
          }
        );
      }
      if (!V[$][X]) {
        var vt = V[$].valueOf;
        E(V[$], X, function() {
          return vt.apply(this, arguments);
        });
      }
      A(V, Y), (B[R] = !0);
    },
    a630: function(t, e, i) {
      var o = i("23e7"),
        n = i("4df4"),
        r = i("1c7e"),
        s = !r(function(t) {
          Array.from(t);
        });
      o({ target: "Array", stat: !0, forced: s }, { from: n });
    },
    a640: function(t, e, i) {
      "use strict";
      var o = i("d039");
      t.exports = function(t, e) {
        var i = [][t];
        return (
          !!i &&
          o(function() {
            i.call(
              null,
              e ||
                function() {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    a691: function(t, e) {
      var i = Math.ceil,
        o = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? o : i)(t);
      };
    },
    ab13: function(t, e, i) {
      var o = i("b622"),
        n = o("match");
      t.exports = function(t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (i) {
          try {
            return (e[n] = !1), "/./"[t](e);
          } catch (o) {}
        }
        return !1;
      };
    },
    ac1f: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("9263");
      o({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
    },
    acf9: function(t, e, i) {
      var o = i("9201");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("77a223a7", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ad6d: function(t, e, i) {
      "use strict";
      var o = i("825a");
      t.exports = function() {
        var t = o(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    ae93: function(t, e, i) {
      "use strict";
      var o,
        n,
        r,
        s = i("d039"),
        a = i("1626"),
        c = i("7c73"),
        l = i("e163"),
        h = i("6eeb"),
        p = i("b622"),
        u = i("c430"),
        d = p("iterator"),
        f = !1;
      [].keys &&
        ((r = [].keys()),
        "next" in r
          ? ((n = l(l(r))), n !== Object.prototype && (o = n))
          : (f = !0));
      var m =
        void 0 == o ||
        s(function() {
          var t = {};
          return o[d].call(t) !== t;
        });
      m ? (o = {}) : u && (o = c(o)),
        a(o[d]) ||
          h(o, d, function() {
            return this;
          }),
        (t.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: f });
    },
    b041: function(t, e, i) {
      "use strict";
      var o = i("00ee"),
        n = i("f5df");
      t.exports = o
        ? {}.toString
        : function() {
            return "[object " + n(this) + "]";
          };
    },
    b0c0: function(t, e, i) {
      var o = i("83ab"),
        n = i("5e77").EXISTS,
        r = i("9bf2").f,
        s = Function.prototype,
        a = s.toString,
        c = /^\s*function ([^ (]*)/,
        l = "name";
      o &&
        !n &&
        r(s, l, {
          configurable: !0,
          get: function() {
            try {
              return a.call(this).match(c)[1];
            } catch (t) {
              return "";
            }
          }
        });
    },
    b10c: function(t, e, i) {
      "use strict";
      i("e009");
    },
    b622: function(t, e, i) {
      var o = i("da84"),
        n = i("5692"),
        r = i("5135"),
        s = i("90e3"),
        a = i("4930"),
        c = i("fdbf"),
        l = n("wks"),
        h = o.Symbol,
        p = c ? h : (h && h.withoutSetter) || s;
      t.exports = function(t) {
        return (
          (r(l, t) && (a || "string" == typeof l[t])) ||
            (a && r(h, t) ? (l[t] = h[t]) : (l[t] = p("Symbol." + t))),
          l[t]
        );
      };
    },
    b64b: function(t, e, i) {
      var o = i("23e7"),
        n = i("7b0b"),
        r = i("df75"),
        s = i("d039"),
        a = s(function() {
          r(1);
        });
      o(
        { target: "Object", stat: !0, forced: a },
        {
          keys: function(t) {
            return r(n(t));
          }
        }
      );
    },
    b727: function(t, e, i) {
      var o = i("0366"),
        n = i("44ad"),
        r = i("7b0b"),
        s = i("50c4"),
        a = i("65f0"),
        c = [].push,
        l = function(t) {
          var e = 1 == t,
            i = 2 == t,
            l = 3 == t,
            h = 4 == t,
            p = 6 == t,
            u = 7 == t,
            d = 5 == t || p;
          return function(f, m, v, g) {
            for (
              var y,
                b,
                w = r(f),
                x = n(w),
                k = o(m, v, 3),
                T = s(x.length),
                S = 0,
                q = g || a,
                _ = e ? q(f, T) : i || u ? q(f, 0) : void 0;
              T > S;
              S++
            )
              if ((d || S in x) && ((y = x[S]), (b = k(y, S, w)), t))
                if (e) _[S] = b;
                else if (b)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return y;
                    case 6:
                      return S;
                    case 2:
                      c.call(_, y);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      c.call(_, y);
                  }
            return p ? -1 : l || h ? h : _;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterReject: l(7)
      };
    },
    bca3: function(t, e, i) {
      "use strict";
      i("acf9");
    },
    bcb9: function(t, e, i) {
      var o = i("c455");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("0d7e62b3", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    bfa4: function(t, e, i) {
      var o = i("8378");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("36689850", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c04e: function(t, e, i) {
      var o = i("861d"),
        n = i("d9b5"),
        r = i("dc4a"),
        s = i("485a"),
        a = i("b622"),
        c = a("toPrimitive");
      t.exports = function(t, e) {
        if (!o(t) || n(t)) return t;
        var i,
          a = r(t, c);
        if (a) {
          if (
            (void 0 === e && (e = "default"), (i = a.call(t, e)), !o(i) || n(i))
          )
            return i;
          throw TypeError("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), s(t, e);
      };
    },
    c430: function(t, e) {
      t.exports = !1;
    },
    c455: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          '[data-v-0f64dad9] .iScrollVerticalScrollbar.iScrollLoneScrollbar{z-index:1!important}.wrapper[data-v-0f64dad9]{position:relative;width:525px;height:382px;overflow:hidden;touch-action:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}.wrapper .downBtn-position[data-v-0f64dad9]{position:absolute;cursor:pointer;right:1rem;width:2rem;height:2rem;bottom:2rem}.wrapper .downBtn[data-v-0f64dad9]:before{content:"V";position:absolute;background:hsla(0,0%,80%,.2);width:2rem;height:2rem;line-height:2rem;text-align:center;border-radius:50%;top:60%;left:50%;transform:translateX(-50%)}.wrapper .downBtn span[data-v-0f64dad9]{background:#409eff;padding:.1rem .5rem;font-size:.7rem;border-radius:.5rem;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.wrapper .scroller[data-v-0f64dad9]{height:100%;width:100%}.wrapper .web__main[data-v-0f64dad9]{position:absolute;width:calc(100% - 1.5rem);padding:.5rem;padding-right:1.5rem;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0)}.wrapper .web__main .web__main-item[data-v-0f64dad9]{position:relative;font-size:0;margin-bottom:10px;padding-left:60px;min-height:68px;text-align:left}.wrapper .web__main .sysTip[data-v-0f64dad9]{font-size:1rem;text-align:center}.wrapper .web__main .web__main-text[data-v-0f64dad9],.wrapper .web__main .web__main-user[data-v-0f64dad9]{display:inline-block;vertical-align:top;font-size:14px}.wrapper .web__main .web__main-user[data-v-0f64dad9]{position:absolute;cursor:pointer;left:3px}.wrapper .web__main .web__main-user img[data-v-0f64dad9]{width:40px;height:40px;border-radius:100%}.wrapper .web__main .web__main-user cite[data-v-0f64dad9]{position:absolute;left:60px;top:-2px;line-height:24px;font-size:12px;white-space:nowrap;color:#999;text-align:left;font-style:normal}.wrapper .web__main .web__main-user cite i[data-v-0f64dad9]{padding-left:15px;font-style:normal}.wrapper .web__main .web__main-text[data-v-0f64dad9]{max-width:75%;position:relative;line-height:22px;margin-top:25px;padding:8px 15px;background-color:#f3f3f3;border-radius:3px;border:1px solid #f0f0f0;color:#000;word-break:break-all}.wrapper .web__main .web__main-arrow[data-v-0f64dad9]{top:6px;left:-8px;border-width:8px;border-left-width:0;border-right-color:#ebeef5}.wrapper .web__main .web__main-arrow[data-v-0f64dad9],.wrapper .web__main .web__main-arrow[data-v-0f64dad9]:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.wrapper .web__main .web__main-arrow[data-v-0f64dad9]:after{content:" ";top:-7px;left:1px;border-width:7px;border-left-width:0;border-right-color:#ebeef5}.wrapper .web__main .web__main-item--mine .web__main-text .web__main-arrow[data-v-0f64dad9]{left:auto;right:-5px;border-color:transparent;border-style:solid;border-width:8px;border-right-width:0;border-left-color:#409eff}.wrapper .web__main .web__main-item--mine .web__main-text .web__main-arrow[data-v-0f64dad9]:after{left:auto;right:-2px;border-color:transparent;border-style:solid;border-width:7px;border-right-width:0;border-left-color:#409eff}.wrapper .web__main .web__main-list[data-v-0f64dad9]{margin:10px 0}.wrapper .web__main .web__main-list li[data-v-0f64dad9]{height:30px;color:#409eff;line-height:30px}.wrapper .web__main .web__main-item--mine[data-v-0f64dad9]{text-align:right;padding-left:0;padding-right:60px}.wrapper .web__main .web__main-item--mine .web__main-user[data-v-0f64dad9]{left:auto;right:3px}.wrapper .web__main .web__main-item--mine .web__main-user cite[data-v-0f64dad9]{left:auto;right:60px;text-align:right}.wrapper .web__main .web__main-item--mine .web__main-user cite i[data-v-0f64dad9]{padding-left:0;padding-right:15px}.wrapper .web__main .web__main-item--mine .web__main-text[data-v-0f64dad9]{margin-left:0;text-align:left;background-color:#409eff;color:#fff}.wrapper .web__main .web__main-item--mine .web__main-text img[data-v-0f64dad9]{max-width:200px}.pulldown-wrapper[data-v-0f64dad9]{position:absolute;width:100%;padding:20px;box-sizing:border-box;transform:translateY(-100%) translateZ(0);text-align:center;color:#999}',
          ""
        ]),
        (t.exports = e);
    },
    c6b6: function(t, e) {
      var i = {}.toString;
      t.exports = function(t) {
        return i.call(t).slice(8, -1);
      };
    },
    c6cd: function(t, e, i) {
      var o = i("da84"),
        n = i("ce4e"),
        r = "__core-js_shared__",
        s = o[r] || n(r, {});
      t.exports = s;
    },
    c740: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("b727").findIndex,
        r = i("44d2"),
        s = "findIndex",
        a = !0;
      s in [] &&
        Array(1)[s](function() {
          a = !1;
        }),
        o(
          { target: "Array", proto: !0, forced: a },
          {
            findIndex: function(t) {
              return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          }
        ),
        r(s);
    },
    c795: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".el-menu-demo[data-v-643b3e2e]{width:100%;height:42px;line-height:40px;display:flex;position:relative}.el-menu-demo>*[data-v-643b3e2e]{height:unset;line-height:unset;width:40%;padding:0;text-align:center;box-shadow:none}.addBtn[data-v-643b3e2e]{width:20%;position:absolute;right:0}.addBtn[data-v-643b3e2e]:focus{outline:none;text-align:center}.wrapper[data-v-643b3e2e]{padding:0;height:100%;width:0;max-width:100%;min-width:220px;margin:0 auto;text-align:left;position:relative}ul[data-v-643b3e2e]{padding:0;list-style:none;height:84%;overflow:auto}li[data-v-643b3e2e]{padding:.5rem;padding-right:0;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);margin:.2rem 0}li p[data-v-643b3e2e]{margin:0}li:hover i[data-v-643b3e2e]{display:inline-block}li i[data-v-643b3e2e]{margin:0 .05rem}i[data-v-643b3e2e]:hover{color:#409eff;cursor:pointer}",
          ""
        ]),
        (t.exports = e);
    },
    c8ba: function(t, e) {
      var i;
      i = (function() {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch (o) {
        "object" === typeof window && (i = window);
      }
      t.exports = i;
    },
    c8d2: function(t, e, i) {
      var o = i("5e77").PROPER,
        n = i("d039"),
        r = i("5899"),
        s = "​᠎";
      t.exports = function(t) {
        return n(function() {
          return !!r[t]() || s[t]() !== s || (o && r[t].name !== t);
        });
      };
    },
    ca83: function(t, e, i) {
      "use strict";
      i("2f74");
    },
    ca84: function(t, e, i) {
      var o = i("5135"),
        n = i("fc6a"),
        r = i("4d64").indexOf,
        s = i("d012");
      t.exports = function(t, e) {
        var i,
          a = n(t),
          c = 0,
          l = [];
        for (i in a) !o(s, i) && o(a, i) && l.push(i);
        while (e.length > c) o(a, (i = e[c++])) && (~r(l, i) || l.push(i));
        return l;
      };
    },
    caad: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("4d64").includes,
        r = i("44d2");
      o(
        { target: "Array", proto: !0 },
        {
          includes: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      ),
        r("includes");
    },
    cc12: function(t, e, i) {
      var o = i("da84"),
        n = i("861d"),
        r = o.document,
        s = n(r) && n(r.createElement);
      t.exports = function(t) {
        return s ? r.createElement(t) : {};
      };
    },
    ce4e: function(t, e, i) {
      var o = i("da84");
      t.exports = function(t, e) {
        try {
          Object.defineProperty(o, t, {
            value: e,
            configurable: !0,
            writable: !0
          });
        } catch (i) {
          o[t] = e;
        }
        return e;
      };
    },
    d012: function(t, e) {
      t.exports = {};
    },
    d039: function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    d066: function(t, e, i) {
      var o = i("da84"),
        n = i("1626"),
        r = function(t) {
          return n(t) ? t : void 0;
        };
      t.exports = function(t, e) {
        return arguments.length < 2 ? r(o[t]) : o[t] && o[t][e];
      };
    },
    d11e: function(t) {
      t.exports = JSON.parse(
        '{"/::)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif","/::~":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif","/::B":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif","/::|":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif","/:8-)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif","/::<":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif","/::$":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif","/::X":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif","/::Z":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif","/::\'(":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif","/::-|":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif","/::@":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif","/::P":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif","/::D":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif","/::O":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif","/::(":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif","/::+":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif","/:--b":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif","/::Q":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif","/::T":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif","/:,@P":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif","/:,@-D":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif","/::d":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif","/:,@o":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif","/::g":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif","/:|-)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif","/::!":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif","/::L":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif","/::>":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif","/::,@":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif","/:,@f":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif","/::-S":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif","/:?":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif","/:,@x":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif","/:,@@":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif","/::8":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif","/:,@!":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif","/:!!!":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif","/:xx":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif","/:bye":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif","/:wipe":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif","/:dig":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif","/:handclap":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif","/:&-(":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif","/:B-)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif","/:<@":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif","/:@>":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif","/::-O":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif","/:>-|":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif","/:P-(":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif","/::\'|":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif","/:X-)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif","/::*":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif","/:@x":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif","/:8*":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif","/:pd":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif","/:<W>":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif","/:beer":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif","/:basketb":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif","/:oo":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif","/:coffee":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif","/:eat":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif","/:pig":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif","/:rose":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif","/:fade":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif","/:showlove":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif","/:heart":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif","/:break":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif","/:cake":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif","/:li":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif","/:bome":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif","/:kn":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif","/:footb":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif","/:ladybug":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif","/:shit":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif","/:moon":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif","/:sun":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif","/:gift":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif","/:hug":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif","/:strong":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif","/:weak":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif","/:share":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif","/:v":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif","/:@)":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif","/:jj":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif","/:@@":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif","/:bad":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif","/:lvu":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif","/:no":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif","/:ok":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif","/:love":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif","/:<L>":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif","/:jump":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif","/:shake":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif","/:<O>":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif","/:circle":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif","/:kotow":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif","/:turn":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif","/:skip":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif","/:oY":"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif",":smile:":{"panel":"6AfH8","position":"2px 2px"},":mask:":{"panel":"6AfH8","position":"-30px 2px"},":joy:":{"panel":"6AfH8","position":"-62px 2px"},":stuck_out_tongue_closed_eyes:":{"panel":"6AfH8","position":"-94px 2px"},":flushed:":{"panel":"6AfH8","position":"-126px 2px"},":scream:":{"panel":"6AfH8","position":"-158px 2px"},":pensive:":{"panel":"6AfH8","position":"-190px 2px"},":unamused:":{"panel":"6AfH8","position":"-222px 2px"},"[Hey]":{"panel":"6AfH8","position":"-254px 2px"},"[Facepalm]":{"panel":"6AfH8","position":"-286px 2px"},"[Smirk]":{"panel":"6AfH8","position":"-318px 2px"},"[Smart]":{"panel":"6AfH8","position":"-350px 2px"},"[Concerned]":{"panel":"6AfH8","position":"-382px 2px"},"[Yeah!]":{"panel":"6AfH8","position":"-414px 2px"},":ghost:":{"panel":"6AfH8","position":"-446px 2px"},":pray:":{"panel":"6AfH8","position":"2px -30px"},":muscle:":{"panel":"6AfH8","position":"-30px -30px"},":tada:":{"panel":"6AfH8","position":"-62px -30px"},":gift:":{"panel":"6AfH8","position":"-94px -30px"},"[Packet]":{"panel":"6AfH8","position":"-126px -30px"},"[好的]":"👌","[加油]":"💪️"}'
      );
    },
    d1e7: function(t, e, i) {
      "use strict";
      var o = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        r = n && !o.call({ 1: 2 }, 1);
      e.f = r
        ? function(t) {
            var e = n(this, t);
            return !!e && e.enumerable;
          }
        : o;
    },
    d28b: function(t, e, i) {
      var o = i("746f");
      o("iterator");
    },
    d2bb: function(t, e, i) {
      var o = i("825a"),
        n = i("3bbe");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function() {
              var t,
                e = !1,
                i = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  t.call(i, []),
                  (e = i instanceof Array);
              } catch (r) {}
              return function(i, r) {
                return o(i), n(r), e ? t.call(i, r) : (i.__proto__ = r), i;
              };
            })()
          : void 0);
    },
    d3b7: function(t, e, i) {
      var o = i("00ee"),
        n = i("6eeb"),
        r = i("b041");
      o || n(Object.prototype, "toString", r, { unsafe: !0 });
    },
    d44e: function(t, e, i) {
      var o = i("9bf2").f,
        n = i("5135"),
        r = i("b622"),
        s = r("toStringTag");
      t.exports = function(t, e, i) {
        t &&
          !n((t = i ? t : t.prototype), s) &&
          o(t, s, { configurable: !0, value: e });
      };
    },
    d5ea: function(t, e, i) {
      var o = i("e03f");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("d1153860", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d784: function(t, e, i) {
      "use strict";
      i("ac1f");
      var o = i("6eeb"),
        n = i("9263"),
        r = i("d039"),
        s = i("b622"),
        a = i("9112"),
        c = s("species"),
        l = RegExp.prototype;
      t.exports = function(t, e, i, h) {
        var p = s(t),
          u = !r(function() {
            var e = {};
            return (
              (e[p] = function() {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          d =
            u &&
            !r(function() {
              var e = !1,
                i = /a/;
              return (
                "split" === t &&
                  ((i = {}),
                  (i.constructor = {}),
                  (i.constructor[c] = function() {
                    return i;
                  }),
                  (i.flags = ""),
                  (i[p] = /./[p])),
                (i.exec = function() {
                  return (e = !0), null;
                }),
                i[p](""),
                !e
              );
            });
        if (!u || !d || i) {
          var f = /./[p],
            m = e(p, ""[t], function(t, e, i, o, r) {
              var s = e.exec;
              return s === n || s === l.exec
                ? u && !r
                  ? { done: !0, value: f.call(e, i, o) }
                  : { done: !0, value: t.call(i, e, o) }
                : { done: !1 };
            });
          o(String.prototype, t, m[0]), o(l, p, m[1]);
        }
        h && a(l[p], "sham", !0);
      };
    },
    d7f6: function(t, e, i) {
      var o = i("5863");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("675db59a", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d81d: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("b727").map,
        r = i("1dde"),
        s = r("map");
      o(
        { target: "Array", proto: !0, forced: !s },
        {
          map: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    },
    d9b5: function(t, e, i) {
      var o = i("1626"),
        n = i("d066"),
        r = i("fdbf");
      t.exports = r
        ? function(t) {
            return "symbol" == typeof t;
          }
        : function(t) {
            var e = n("Symbol");
            return o(e) && Object(t) instanceof e;
          };
    },
    da84: function(t, e, i) {
      (function(e) {
        var i = function(t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof e && e) ||
          (function() {
            return this;
          })() ||
          Function("return this")();
      }.call(this, i("c8ba")));
    },
    dbb4: function(t, e, i) {
      var o = i("23e7"),
        n = i("83ab"),
        r = i("56ef"),
        s = i("fc6a"),
        a = i("06cf"),
        c = i("8418");
      o(
        { target: "Object", stat: !0, sham: !n },
        {
          getOwnPropertyDescriptors: function(t) {
            var e,
              i,
              o = s(t),
              n = a.f,
              l = r(o),
              h = {},
              p = 0;
            while (l.length > p)
              (i = n(o, (e = l[p++]))), void 0 !== i && c(h, e, i);
            return h;
          }
        }
      );
    },
    dc4a: function(t, e, i) {
      var o = i("59ed");
      t.exports = function(t, e) {
        var i = t[e];
        return null == i ? void 0 : o(i);
      };
    },
    ddb0: function(t, e, i) {
      var o = i("da84"),
        n = i("fdbc"),
        r = i("785a"),
        s = i("e260"),
        a = i("9112"),
        c = i("b622"),
        l = c("iterator"),
        h = c("toStringTag"),
        p = s.values,
        u = function(t, e) {
          if (t) {
            if (t[l] !== p)
              try {
                a(t, l, p);
              } catch (o) {
                t[l] = p;
              }
            if ((t[h] || a(t, h, e), n[e]))
              for (var i in s)
                if (t[i] !== s[i])
                  try {
                    a(t, i, s[i]);
                  } catch (o) {
                    t[i] = s[i];
                  }
          }
        };
      for (var d in n) u(o[d] && o[d].prototype, d);
      u(r, "DOMTokenList");
    },
    df75: function(t, e, i) {
      var o = i("ca84"),
        n = i("7839");
      t.exports =
        Object.keys ||
        function(t) {
          return o(t, n);
        };
    },
    e009: function(t, e, i) {
      var o = i("7b38");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var n = i("499e").default;
      n("5db63624", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e01a: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("83ab"),
        r = i("da84"),
        s = i("5135"),
        a = i("1626"),
        c = i("861d"),
        l = i("9bf2").f,
        h = i("e893"),
        p = r.Symbol;
      if (
        n &&
        a(p) &&
        (!("description" in p.prototype) || void 0 !== p().description)
      ) {
        var u = {},
          d = function() {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof d ? new p(t) : void 0 === t ? p() : p(t);
            return "" === t && (u[e] = !0), e;
          };
        h(d, p);
        var f = (d.prototype = p.prototype);
        f.constructor = d;
        var m = f.toString,
          v = "Symbol(test)" == String(p("test")),
          g = /^Symbol\((.*)\)[^)]+$/;
        l(f, "description", {
          configurable: !0,
          get: function() {
            var t = c(this) ? this.valueOf() : this,
              e = m.call(t);
            if (s(u, t)) return "";
            var i = v ? e.slice(7, -1) : e.replace(g, "$1");
            return "" === i ? void 0 : i;
          }
        }),
          o({ global: !0, forced: !0 }, { Symbol: d });
      }
    },
    e03f: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".quickListBox[data-v-52dec552]{padding:0;margin:8px;text-align:left;max-height:100px;overflow:auto;padding:5px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);transition:all 2s;box-sizing:border-box}.quickListBox .quickItem[data-v-52dec552]{padding:.2rem 0;display:flex}.quickListBox .quickItem[data-v-52dec552]:hover{background:#fafafa}.quickListBox .quickItem span[data-v-52dec552]{display:inline-block;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.quickListBox .quickItem .enterBtn[data-v-52dec552]{align-self:center;cursor:pointer}.quickListBox .quickItem .enterBtn[data-v-52dec552]:hover{color:red}",
          ""
        ]),
        (t.exports = e);
    },
    e163: function(t, e, i) {
      var o = i("5135"),
        n = i("1626"),
        r = i("7b0b"),
        s = i("f772"),
        a = i("e177"),
        c = s("IE_PROTO"),
        l = Object.prototype;
      t.exports = a
        ? Object.getPrototypeOf
        : function(t) {
            var e = r(t);
            if (o(e, c)) return e[c];
            var i = e.constructor;
            return n(i) && e instanceof i
              ? i.prototype
              : e instanceof Object
              ? l
              : null;
          };
    },
    e177: function(t, e, i) {
      var o = i("d039");
      t.exports = !o(function() {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    e260: function(t, e, i) {
      "use strict";
      var o = i("fc6a"),
        n = i("44d2"),
        r = i("3f8c"),
        s = i("69f3"),
        a = i("7dd0"),
        c = "Array Iterator",
        l = s.set,
        h = s.getterFor(c);
      (t.exports = a(
        Array,
        "Array",
        function(t, e) {
          l(this, { type: c, target: o(t), index: 0, kind: e });
        },
        function() {
          var t = h(this),
            e = t.target,
            i = t.kind,
            o = t.index++;
          return !e || o >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == i
            ? { value: o, done: !1 }
            : "values" == i
            ? { value: e[o], done: !1 }
            : { value: [o, e[o]], done: !1 };
        },
        "values"
      )),
        (r.Arguments = r.Array),
        n("keys"),
        n("values"),
        n("entries");
    },
    e35f: function(t, e, i) {
      "use strict";
      i("d7f6");
    },
    e3f3: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".item[data-v-506dd17f]{display:flex;align-items:center;position:relative}.item .cover[data-v-506dd17f]{border-radius:50%;margin-right:12px;box-shadow:0 3px 3px 0 rgba(0,0,0,.1);cursor:pointer}.item .info[data-v-506dd17f]{display:flex;flex-direction:column;justify-content:center}.item .info p[data-v-506dd17f]{margin:0;padding:0;text-overflow:ellipsis;overflow:hidden;text-align:left;white-space:nowrap;font-size:13px;cursor:pointer}.item .info p[data-v-506dd17f]:hover{opacity:.8}.item .info p[data-v-506dd17f]:last-child{font-size:12px}",
          ""
        ]),
        (t.exports = e);
    },
    e439: function(t, e, i) {
      var o = i("23e7"),
        n = i("d039"),
        r = i("fc6a"),
        s = i("06cf").f,
        a = i("83ab"),
        c = n(function() {
          s(1);
        }),
        l = !a || c;
      o(
        { target: "Object", stat: !0, forced: l, sham: !a },
        {
          getOwnPropertyDescriptor: function(t, e) {
            return s(r(t), e);
          }
        }
      );
    },
    e538: function(t, e, i) {
      var o = i("b622");
      e.f = o;
    },
    e883: function(t, e, i) {
      "use strict";
      i("8c3a");
    },
    e893: function(t, e, i) {
      var o = i("5135"),
        n = i("56ef"),
        r = i("06cf"),
        s = i("9bf2");
      t.exports = function(t, e) {
        for (var i = n(e), a = s.f, c = r.f, l = 0; l < i.length; l++) {
          var h = i[l];
          o(t, h) || a(t, h, c(e, h));
        }
      };
    },
    e8b5: function(t, e, i) {
      var o = i("c6b6");
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == o(t);
        };
    },
    e92c: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".web__msg[data-v-3c3d684e]{padding:8px 10px;height:100%;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column}.web__msg-input[data-v-3c3d684e]{display:block;width:100%;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;outline:0;background-color:#fff;border:0;word-break:break-all;font-size:13px;line-height:17px;-webkit-appearance:none;flex:auto}.web__msg-menu[data-v-3c3d684e]{text-align:right}.web__msg-submit[data-v-3c3d684e]{display:inline-block;outline:none;cursor:pointer;text-align:center}",
          ""
        ]),
        (t.exports = e);
    },
    e95a: function(t, e, i) {
      var o = i("b622"),
        n = i("3f8c"),
        r = o("iterator"),
        s = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (n.Array === t || s[r] === t);
      };
    },
    ea30: function(t, e, i) {
      "use strict";
      i("197c");
    },
    edbe: function(t, e, i) {
      var o = i("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".systemTalk[data-v-4e632b34]{padding:0;margin:0;display:inline-block}.systemTalk .title[data-v-4e632b34]{width:100%;font-weight:700;border-bottom:1px solid #dcdfe6}.systemTalk .subtitle[data-v-4e632b34]{font-size:.5rem}",
          ""
        ]),
        (t.exports = e);
    },
    f5df: function(t, e, i) {
      var o = i("00ee"),
        n = i("1626"),
        r = i("c6b6"),
        s = i("b622"),
        a = s("toStringTag"),
        c =
          "Arguments" ==
          r(
            (function() {
              return arguments;
            })()
          ),
        l = function(t, e) {
          try {
            return t[e];
          } catch (i) {}
        };
      t.exports = o
        ? r
        : function(t) {
            var e, i, o;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (i = l((e = Object(t)), a))
              ? i
              : c
              ? r(e)
              : "Object" == (o = r(e)) && n(e.callee)
              ? "Arguments"
              : o;
          };
    },
    f772: function(t, e, i) {
      var o = i("5692"),
        n = i("90e3"),
        r = o("keys");
      t.exports = function(t) {
        return r[t] || (r[t] = n(t));
      };
    },
    f826: function(t, e, i) {
      "use strict";
      i("4d29");
    },
    f9f9: function(t, e) {
      !(function(t) {
        var e,
          i,
          o,
          n,
          r,
          s =
            '<svg><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M474.288097 127.049604 857.759815 508.9792l-82.171488 81.8471L392.115586 208.894657 474.288097 127.049604zM857.759815 508.9792 474.288097 890.910842l-82.173534-81.84096L775.588327 427.134147 857.759815 508.9792zM435.55391 451.108165c32.088836 0 58.105373 25.908066 58.105373 57.871035 0 31.958876-26.016537 57.866942-58.105373 57.866942-32.090882 0-58.105373-25.908066-58.105373-57.866942C377.449561 477.016231 403.463028 451.108165 435.55391 451.108165zM241.8707 451.108165c32.092929 0 58.107419 25.908066 58.107419 57.871035 0 31.958876-26.013467 57.866942-58.107419 57.866942-32.088836 0-58.102303-25.908066-58.102303-57.866942C183.768397 477.016231 209.781864 451.108165 241.8707 451.108165z"  ></path></symbol><symbol id="icon-jiantou_xiangzuoliangci" viewBox="0 0 1024 1024"><path d="M473.6 490.666667L789.333333 170.666667 853.333333 230.4l-260.266666 260.266667 260.266666 260.266666-64 59.733334-315.733333-320z m-302.933333 0L490.666667 170.666667l59.733333 59.733333-260.266667 260.266667 260.266667 260.266666-59.733333 59.733334L170.666667 490.666667z" fill="#444444" ></path></symbol><symbol id="icon-jiantou_xiangyouliangci" viewBox="0 0 1024 1024"><path d="M250.43162 211.379413l-60.943176 60.943177 301.698893 301.698893L552.130513 513.078307z" fill="#444444" ></path><path d="M250.583856 814.877898l-60.943176-60.943176 301.698893-301.698893L552.282749 513.179005z" fill="#444444" ></path><path d="M549.105906 211.376258l-60.943177 60.943176 301.698893 301.698893L850.804799 513.075151z" fill="#444444" ></path><path d="M549.227972 814.932341l-60.943177-60.943176 301.698894-301.698893L850.926865 513.233448z" fill="#444444" ></path></symbol><symbol id="icon-jiantou-xiangzuo" viewBox="0 0 1024 1024"><path d="M708.181333 783.786667l-60.330666 60.288-271.744-271.744-0.042667 0.085333L315.690667 512l331.904-331.861333 60.330666 60.330666L436.437333 512l271.786667 271.786667z"  ></path></symbol><symbol id="icon-jiantou-xiangyou" viewBox="0 0 1024 1024"><path d="M315.818667 783.786667l60.330666 60.288 271.744-271.744 0.042667 0.085333L708.309333 512 376.405333 180.181333 316.074667 240.512 587.562667 512 315.733333 783.786667z"  ></path></symbol><symbol id="icon-look" viewBox="0 0 1024 1024"><path d="M510 355.07A155.85 155.85 0 1 0 665.74 511v-0.14A155.83 155.83 0 0 0 510 355.07z m0 267.38a111.53 111.53 0 1 1 111.47-111.59A111.52 111.52 0 0 1 510 622.44z"  ></path><path d="M512 226C266.66 226 67 438 67 512.92 67 578.87 267.25 802 512 802s445-219.94 445-289.08C957 453.88 771.16 226 512 226z m0 531.72c-205.24 0-402.3-196.36-402.3-244.68 0-42.58 180.49-240.41 402.3-240.41C746.31 272.62 914.3 476 914.3 513c0.02 37.76-181.04 244.72-402.3 244.72z"  ></path></symbol><symbol id="icon-zyj_unlooked" viewBox="0 0 1024 1024"><path d="M991.864092 350.625636c6.731308-7.247054 6.312776-18.577101-0.934278-25.308409-7.245008-6.730285-18.578124-6.312776-25.307386 0.935302C818.71966 484.419851 662.942781 562.192146 502.58456 557.397956c-133.975341-4.003174-247.12333-66.088184-318.450843-117.466342C106.099457 383.723451 59.550281 327.625806 59.089793 327.065034c-6.277984-7.634888-17.556864-8.740058-25.197892-2.466168-7.643074 6.27696-8.750291 17.560958-2.473331 25.204032 1.977028 2.407839 49.354058 59.634192 130.832768 118.503974l0.074701 0.053212L50.913577 574.174038c-7.17133 6.811126-7.462972 18.146289-0.65287 25.317619a17.857716 17.857716 0 0 0 12.987803 5.574972c4.427846 0 8.864902-1.633197 12.328793-4.923126l116.922966-111.048166c38.489616 25.164123 77.982072 46.075385 117.800963 62.312185a599.842651 599.842651 0 0 0 50.992371 18.180058L314.414923 678.477592c-3.911076 9.083889 0.282433 19.618826 9.367345 23.52888a17.831111 17.831111 0 0 0 7.073092 1.465374c6.936993 0 13.539364-4.055362 16.45681-10.831696l48.892547-113.568569c35.046191 8.320503 70.14764 13.053294 105.008612 14.115486 5.152347 0.156566 10.285251 0.234337 15.426341 0.234337 37.621852 0 74.93876-4.222161 111.902626-12.611225l48.142464 111.828948c2.918469 6.776334 9.519818 10.831696 16.457833 10.831696 2.362814 0 4.764514-0.470721 7.072069-1.465375 9.083889-3.910053 13.278421-14.44499 9.366322-23.528879l-46.01808-106.890472c57.17928-17.179264 113.463168-44.479027 168.666445-81.796958L948.418604 600.141456a17.84646 17.84646 0 0 0 12.329817 4.923126c4.737908 0 9.467629-1.868557 12.987802-5.574972 6.810103-7.17133 6.51846-18.506493-0.65287-25.317619L861.971743 468.642516c44.049239-32.894178 87.379093-72.243371 129.892349-118.01688z"  ></path></symbol><symbol id="icon-empty" viewBox="0 0 1024 1024"><path d="M504.50432 825.4464c-104.82688 0-209.64352 0.02048-314.4704-0.03072-23.28576-0.02048-24.87296-1.536-24.8832-24.22784-0.08192-77.03552-0.26624-154.08128 0.256-231.1168 0.07168-10.2912 2.51904-21.1968 6.4512-30.76096 30.976-75.20256 62.86336-150.03648 93.7472-225.28 5.7856-14.11072 13.4144-20.11136 29.16352-20.04992 137.2672 0.53248 274.5344 0.512 411.79136 0 15.36-0.0512 23.6544 5.12 29.87008 19.27168 32.94208 75.0592 67.04128 149.6064 99.91168 224.67584 4.83328 11.04896 7.33184 24.02304 7.43424 36.12672 0.6656 74.52672 0.3584 149.05344 0.32768 223.5904-0.01024 27.07456-0.67584 27.77088-27.00288 27.77088-104.20224 0.03072-208.40448 0.02048-312.59648 0.02048m0.63488-12.1856c101.05856 0.02048 202.11712-0.4608 303.18592 0.43008 19.2512 0.16384 24.30976-6.05184 24.04352-24.65792a7511.21408 7511.21408 0 0 1-0.0512-201.0112c0.2048-17.24416-5.35552-22.71232-22.41536-22.38464-49.2544 0.9216-98.58048 1.1776-147.82464-0.13312-18.176-0.49152-24.85248 5.50912-27.7504 23.17312-9.5744 58.1632-52.75648 99.9424-110.848 109.568-70.656 11.70432-139.78624-36.01408-151.79776-106.96704-3.46112-20.40832-10.98752-26.44992-31.1808-25.81504-47.99488 1.51552-96.06144 0.94208-144.09728 0.26624-14.72512-0.2048-19.49696 4.99712-19.37408 19.58912 0.53248 69.50912 0.64512 139.01824-0.06144 208.52736-0.17408 16.45568 6.73792 19.70176 21.23776 19.64032 102.30784-0.43008 204.61568-0.22528 306.93376-0.22528m233.69728-259.4816c-9.82016-28.93824-17.3568-53.248-26.69568-76.84096-1.7408-4.37248-10.68032-8.32512-16.30208-8.3456a59510.38464 59510.38464 0 0 0-387.2768-0.06144c-5.3248 0.02048-13.99808 3.11296-15.36 6.8608-8.87808 24.44288-16.1792 49.4592-25.2928 78.39744 31.67232 0 58.90048 0.70656 86.07744-0.256 17.53088-0.6144 25.43616 3.75808 26.28608 23.7568 2.6624 62.74048 58.0608 111.94368 123.16672 111.85152 63.7952-0.1024 118.91712-49.4592 121.76384-111.37024 0.90112-19.33312 7.68-24.99584 25.81504-24.2688 27.24864 1.09568 54.5792 0.28672 87.81824 0.28672M503.3984 455.94624c62.43328 0.02048 124.8768-0.4096 187.2896 0.3072 15.99488 0.2048 22.2208-4.27008 21.72928-21.17632-1.0752-36.93568-0.6656-73.9328-0.18432-110.90944 0.16384-12.6464-4.01408-17.8688-17.21344-17.83808-127.98976 0.3072-255.97952 0.27648-383.96928 0-12.55424-0.02048-17.98144 3.97312-17.79712 17.2544 0.55296 38.22592 0.6656 76.46208-0.0512 114.688-0.26624 14.57152 6.06208 17.96096 19.1488 17.8688 63.68256-0.41984 127.37536-0.2048 191.04768-0.2048M176.91648 553.472c27.58656 0 49.3056 1.06496 70.77888-0.768 5.30432-0.4608 12.00128-9.55392 14.32576-16.03584 13.568-37.80608 22.55872-76.32896 19.6096-117.2992-1.97632-27.37152-0.31744-55.00928-0.44032-82.5344-0.01024-5.90848-0.68608-11.8272-1.05472-17.74592l-4.80256-0.95232-98.4064 235.33568m655.42144 0.26624c-35.14368-78.51008-68.3008-152.54528-101.4272-226.57024-1.6896 0.37888-3.3792 0.73728-5.04832 1.09568-0.55296 5.16096-1.52576 10.30144-1.56672 15.4624-0.16384 24.40192 1.37216 48.896-0.4096 73.14432-3.03104 41.55392 6.42048 80.4864 19.53792 119.22432 4.18816 12.35968 9.86112 18.688 23.82848 17.92 19.70176-1.08544 39.49568-0.27648 65.08544-0.27648M458.17856 904.23296c-22.4256 41.8816-50.78016 77.57824-93.2864 99.88096-6.30784 3.30752-14.1312 5.90848-21.03296 5.43744-13.57824-0.9216-27.17696-3.50208-40.42752-6.77888-11.45856-2.84672-19.63008-1.77152-27.50464 8.6016-4.72064 6.22592-14.30528 13.08672-21.1968 12.5952-35.15392-2.56-68.7104-12.27776-100.49536-28.61056 36.62848-0.43008 68.17792-13.24032 93.3888-38.4 16.19968-16.15872 30.0032-35.072 42.84416-54.1184 7.2192-10.71104 11.89888-11.49952 23.74656-6.6048 17.50016 7.22944 36.67968 13.59872 55.31648 14.09024 28.88704 0.77824 57.91744-3.70688 88.64768-6.0928m-258.32448 99.64544c17.6128 3.31776 32.07168 7.65952 46.6432 8.12032 7.86432 0.256 18.19648-4.096 23.42912-9.96352 9.69728-10.89536 19.24096-14.336 32.88064-9.68704 64.83968 22.07744 106.06592-27.9552 131.50208-73.8304-9.15456 0.70656-16.9984 0.59392-24.55552 2.00704-32.8704 6.12352-64.19456 1.18784-95.1296-10.78272-4.73088-1.83296-15.07328 1.19808-17.7664 5.3248-23.0912 35.26656-51.16928 64.43008-90.60352 81.13152-1.45408 0.6144-2.29376 2.6624-6.4 7.68M85.12512 0c9.9328 12.87168 17.1008 25.8048 27.62752 34.816 10.9056 9.32864 13.29152 18.92352 12.99456 32.41984-1.1264 50.96448 7.71072 99.50208 39.39328 141.45536 0.72704 0.9728 0.09216 3.00032 0.09216 4.864C61.22496 180.0192 60.672 72.66304 85.12512 0m51.69152 184.0128c-17.13152-41.43104-21.34016-81.93024-22.1184-123.47392-0.2048-10.50624-13.4144-20.77696-21.48352-32.34816-22.8352 42.56768-5.15072 143.6672 43.60192 155.82208M871.58784 383.04768c15.69792-3.47136 31.00672-4.36224 43.90912-10.40384 13.1072-6.12352 23.82848-17.34656 36.59776-27.09504-11.24352 41.4208-35.03104 67.1744-67.61472 73.85088l-12.89216-36.352M283.7504 156.76416c2.65216 12.67712 3.86048 23.06048 7.1168 32.768 3.34848 10.00448 9.9328 19.00544 12.70784 29.11232 1.57696 5.7344-1.61792 12.8-3.11296 22.05696-22.95808-26.17344-29.82912-60.2112-16.71168-83.93728"  ></path></symbol><symbol id="icon-empty1" viewBox="0 0 1024 1024"><path d="M1017.625 370.588c3.513 0 6.362-2.851 6.362-6.351 0-2.212-1.188-4.274-3.101-5.425l-124.287-74.1-4.562-2.25L549.399 147.45l-1.726 4.15 1.726-4.938-13.649 4.475c-11.362 6.575-239.55 82.612-390.138 132.125-0.606 0.2-1.181 0.487-1.693 0.85l-6.119 4.3-11.662 8.188L2.694 383.375a6.316 6.316 0 0 0-1.5 8.838 6.385 6.385 0 0 0 7.637 2.175l58.781-24.612-52.881 66.1 114.812 62.9v239.898l331.645 181.5L916.462 732.8V506.812h-2.699l109.226-42.449-71.324-101.388 65.225 7.562c0.248 0.038 0.485 0.051 0.735 0.051z m-142.862-81.325L553.288 415.537V164.075l321.475 125.188zM540.538 162.338v256.824H544l-73.55 28.888v-0.138L151.1 294.8c310.225-101.988 375.088-125.725 389.438-132.462zM57.862 360.1L97.8 332.037 84.156 349.1l-26.294 11z m77.132-54.212l4.013-2.812 317.244 152.1-59.514 175.474L34.1 432.013l100.894-126.125z m7.306 425.25V505.725l261.65 143.352 53.736-158.55V901.65L142.3 731.138z m761.426-6.813L470.45 902.8V478.513l77.387 170.476L903.727 510.7l-0.001 213.625z m-349.264-91.513l-78.648-173.25L889.7 296.987l113.537 161.438-448.775 174.387z m387.451-283.7l-27.488-39.087 74.601 44.55-47.113-5.463z m-67.15-153.974h10.949l-5.486-9.425-5.463-9.425-5.475 9.425-5.488 9.425h10.963z m0-21.625h10.949l-5.486-9.425-5.463-9.425-5.475 9.425-5.488 9.425h10.963z m0-21.613h10.949l-5.486-9.438-5.463-9.425-5.475 9.425-5.488 9.438h10.963z m16.963 689.175h36.736v-11.538h-36.736v11.538zM666.45 901.638h61.887V890.1H666.45v11.538z m111.188 0h182.75V890.1h-182.75v11.538zM296.587 118.737l-10.662-2.688 2.688-10.612-6.412-1.612-2.688 10.625-10.688-2.7-1.6 6.375 10.662 2.675-2.7 10.625 6.413 1.613 2.699-10.625 10.662 2.688 1.626-6.364zM631.438 92.038a3.917 3.917 0 0 1-4.236-0.438c-0.9-0.925-3.287-4.087-2.801-5.575l0.6-1.837a2.828 2.828 0 0 0-1.8-3.55l-3.562-1.169c-1.475-0.475-3.062 0.319-3.551 1.781l-0.637 1.862a3.814 3.814 0 0 1-3.238 2.638c-1.299-0.044-5.312-0.594-5.986-1.95l-0.889-1.743a2.829 2.829 0 0 0-3.787-1.25l-3.362 1.693a2.823 2.823 0 0 0-1.263 3.763l0.888 1.744a3.862 3.862 0 0 1-0.425 4.168c-0.938 0.919-4.125 3.3-5.625 2.832l-1.85-0.637a2.813 2.813 0 0 0-3.562 1.743c0 0.019-0.014 0.044-0.014 0.062l-1.174 3.544a2.845 2.845 0 0 0 1.812 3.55l1.861 0.601a3.872 3.872 0 0 1 2.65 3.243c-0.037 1.3-0.601 5.263-1.976 5.944l-1.737 0.881a2.804 2.804 0 0 0-1.274 3.756l1.712 3.35a2.801 2.801 0 0 0 3.764 1.256l1.787-0.887a3.904 3.904 0 0 1 4.199 0.444c0.9 0.919 3.301 4.094 2.826 5.568l-0.625 1.844c-0.488 1.481 0.324 3.062 1.799 3.562l3.562 1.163a2.866 2.866 0 0 0 3.588-1.807l0.6-1.812a3.846 3.846 0 0 1 3.264-2.675c1.3 0.037 5.25 0.606 5.949 1.981l0.888 1.737a2.854 2.854 0 0 0 3.801 1.244l3.362-1.688a2.797 2.797 0 0 0 1.274-3.756l-0.899-1.775a3.83 3.83 0 0 1 0.449-4.188c0.95-0.9 4.138-3.281 5.6-2.775l1.89 0.587a2.814 2.814 0 0 0 3.537-1.775l1.175-3.55a2.832 2.832 0 0 0-1.812-3.557l-1.837-0.606a3.807 3.807 0 0 1-2.663-3.212c0.024-1.319 0.587-5.294 1.95-5.976l1.762-0.881a2.814 2.814 0 0 0 1.25-3.769l-1.698-3.338a2.855 2.855 0 0 0-3.787-1.237l-1.729 0.872zM192.531 241.6c3.638 0 6.587-2.938 6.587-6.556 0-3.619-2.949-6.557-6.587-6.557-3.644 0-6.594 2.938-6.594 6.557 0.001 3.619 2.951 6.556 6.594 6.556z"  ></path><path d="M686.712 275.006c-10.35 0-18.75 8.35-18.75 18.644 0 10.293 8.4 18.637 18.75 18.637 10.351 0 18.75-8.344 18.75-18.637-0.012-10.288-8.4-18.625-18.75-18.644z"  ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M512 998.4c268.6208 0 486.4-217.7792 486.4-486.4S780.6208 25.6 512 25.6 25.6 243.3792 25.6 512s217.7792 486.4 486.4 486.4z m0 25.6C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z"  ></path><path d="M204.8 460.8h102.4v102.4H204.8v-102.4z m256 0h102.4v102.4h-102.4v-102.4z m256 0h102.4v102.4h-102.4v-102.4z"  ></path></symbol><symbol id="icon-all" viewBox="0 0 1024 1024"><path d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256z m-362.666666 64h-192v192h192v-192z m362.666666 0h-192v192h192v-192zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320zM426.666667 234.666667h-192v192h192v-192z m266.666666 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192z"  ></path></symbol><symbol id="icon-QRcode1" viewBox="0 0 1024 1024"><path d="M491.925333 532.074667V853.333333H170.666667V532.074667h321.258666zM597.333333 789.333333v64h-64v-64h64z m256-85.333333v149.333333h-128v-64h64v-85.333333h64z m-425.408-107.925333H234.666667V789.333333h193.258666v-193.258666zM661.333333 597.333333v128h64v64h-128v-192h64z m-277.333333 42.666667v106.666667h-106.666667v-106.666667h106.666667z m405.333333 0v64h-64v-64h64z m64-106.666667v106.666667h-64v-42.666667h-64v-64h128z m-256 0v64h-64v-64h64zM491.925333 170.666667v321.258666H170.666667V170.666667h321.258666zM853.333333 170.666667v321.258666H532.074667V170.666667H853.333333z m-425.408 64H234.666667v193.258666h193.258666V234.666667zM789.333333 234.666667h-193.258666v193.258666H789.333333V234.666667z m-405.333333 42.666666v106.666667h-106.666667v-106.666667h106.666667z m362.666667 0v106.666667h-106.666667v-106.666667h106.666667z"  ></path></symbol><symbol id="icon-comments" viewBox="0 0 1024 1024"><path d="M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334z m0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333z m-271.36 213.334v64h-176.64v-64h176.64z m122.026-128v64H362.667v-64h298.666z"  ></path></symbol><symbol id="icon-comment-single" viewBox="0 0 1024 1024"><path d="M585.92 454.08A73.92 73.92 0 1 1 512 380.16a73.92 73.92 0 0 1 73.92 73.92z m-305.6-73.92a73.92 73.92 0 1 0 73.92 73.92 73.92 73.92 0 0 0-73.92-73.92z m463.68 0a73.92 73.92 0 1 0 73.92 73.92 73.92 73.92 0 0 0-73.92-73.92zM992 454.08c0 232.64-215.04 421.76-480 421.76-15.68 0-32 0-49.28-2.56l-256 128v-224A401.6 401.6 0 0 1 32 454.08C32 221.44 247.36 32 512 32s480 189.44 480 422.08z m-89.92 0C901.76 271.04 727.04 122.24 512 122.24S122.24 271.04 122.24 454.08A320 320 0 0 0 288 723.84l7.68 4.8V864l144-72a11.84 11.84 0 0 1 5.76-2.88H512c215.04-3.2 389.76-152 389.76-335.04z"  ></path></symbol><symbol id="icon-email" viewBox="0 0 1024 1024"><path d="M970.56 267.52a85.76 85.76 0 0 0 0-10.24v-2.88l-17.92 1.6 15.68-3.84v-3.52A141.44 141.44 0 0 0 960 227.2a128 128 0 0 0-11.2-20.48 123.84 123.84 0 0 0-103.04-54.72H176.96a123.84 123.84 0 0 0-102.72 55.36 128 128 0 0 0-11.84 22.72 124.8 124.8 0 0 0-6.72 22.72l16 3.2h-16.64a81.92 81.92 0 0 0-1.6 11.84v512a124.48 124.48 0 0 0 124.16 124.16h668.8a124.48 124.48 0 0 0 124.16-124.16v-512zM883.2 304v448a64 64 0 0 1-64 64H205.12a64 64 0 0 1-64-64v-448a64 64 0 0 1 1.92-16l334.4 267.84 2.56 3.2a48.96 48.96 0 0 0 26.88 11.84h6.08a42.24 42.24 0 0 0 31.04-11.84L880.96 288a62.08 62.08 0 0 1 2.24 16zM512 472.96l-290.88-233.6h581.76z"  ></path></symbol><symbol id="icon-ditu" viewBox="0 0 1024 1024"><path d="M959 739.75V204c0-17-4.06-34.36-13.67-48.62C925.84 126.5 891.41 109 856.4 111c-14.88 0.87-27.85 4.94-41.61 9.68L767.56 137l-91.39 31.47a106.26 106.26 0 0 1-13.72 3.84 84.25 84.25 0 0 1-12.1 0c-14.64-2.76-29.19-8.82-43.17-13.38L523.1 131.5l-85.59-27.91c-13.81-4.51-27.58-9.65-41.61-13.47a107.65 107.65 0 0 0-63.31 2.37l-22.31 7.76L227 129.19l-79 27.51c-5.65 2-11.31 3.91-17 5.89-23.13 8.14-44.51 23.16-55.86 45.52A91.49 91.49 0 0 0 65 250.05v548c0 11.95-0.2 23.32 2 35.21 4.75 25.69 24.38 48.89 47.38 60.52 24.63 12.45 54 16 80.49 7.22 9.33-3.1 18.33-7.66 27.26-11.79l35-16.21 80.45-37.2c4.15-1.92 8.3-3.86 12.46-5.76a79.72 79.72 0 0 1 11.96-3.28 82.94 82.94 0 0 1 12.21 0 80.4 80.4 0 0 1 13.17 3.75l74.1 32.13 123.56 53.58q12.78 5.53 25.55 11.08a120 120 0 0 0 35.22 9.64 102.31 102.31 0 0 0 36.95-2.81c8.36-2.15 16.22-5.85 24-9.51l102.68-48.29c32.2-15.14 64.73-29.74 96.66-45.45 0.56-0.28 1.13-0.53 1.69-0.8 30.36-14.68 50.83-45.89 51.16-79.68 0.05-3.55 0.05-7.1 0.05-10.65z m-64.39-551.7a12.7 12.7 0 0 1-1.6-2l0.15 0.16a16.67 16.67 0 0 0 1.43 1.84z m0.15 0.08a0.33 0.33 0 0 1-0.15-0.07 0.33 0.33 0 0 0 0.13 0.07z m-2.15-2.65c-0.93-1.38-1.5-2.33 0 0z m-577.83 594.4l-43.62 20.17q-45 20.84-90.09 41.66A78.5 78.5 0 0 1 169.2 845a80.54 80.54 0 0 1-11.83 0 78.46 78.46 0 0 1-11.47-3.14 70.55 70.55 0 0 1-6.86-3.79c-0.93-0.59-2.39-2.07-3.62-2.77l-0.42-0.3a60.771 60.771 0 0 1-3.79-3.91c-1.33-2.06-2.58-4.13-3.71-6.29a60 60 0 0 1-1.72-6.21c-0.35-5.6-0.13-11.29-0.13-16.86v-485.5c0-22.48-0.18-45 0-67.45 0-1.19 0-2.37 0.12-3.55a60 60 0 0 1 1.76-6.47 58.79 58.79 0 0 1 3.41-5.91l0.16-0.22c1.13-1.26 2.27-2.52 3.49-3.71 0.86-0.83 1.75-1.61 2.65-2.39 0.41-0.28 0.81-0.57 1.22-0.84a71.54 71.54 0 0 1 7.75-4.32c6.66-2.52 13.48-4.67 20.19-7l50.6-17.59 112.6-39.16c2.42-0.84 4.84-1.72 7.27-2.61v552.54c0 21.14-0.24 42.31-0.15 63.46A122.57 122.57 0 0 0 323 776.1c-2.76 1.21-5.48 2.51-8.22 3.78z m264.92 68.38l-112.21-48.65-41-17.79c-9.45-4.09-19.08-9-29-11.86V207c0-17.56 0.17-35.14 0.18-52.71l1 0.32 45.21 14.74L564 208.55l45.13 14.72c5.8 1.89 11.68 4 17.63 5.73v571.26c0 22.77-0.28 45.57-0.12 68.35z m227.83-37.76l-110.85 52.12c-3.1 1.46-6.19 3-9.29 4.44V299.73c0-23.73 0.32-47.48 0.11-71.21 0.77-0.24 1.53-0.48 2.3-0.74 3.91-1.33 7.82-2.69 11.72-4l51.34-17.68c30.36-10.45 60.66-21.13 91.09-31.36a85 85 0 0 1 10.79-2.87 79.07 79.07 0 0 1 12 0 79.61 79.61 0 0 1 11.34 3.11 70.38 70.38 0 0 1 6.8 3.77 22.34 22.34 0 0 1 2.21 1.66l-2.13-2c1.39 1.29 2.9 2.43 4.27 3.75s2.47 2.47 3.62 3.78c1.32 2.07 2.55 4.15 3.67 6.31a55.8 55.8 0 0 1 1.67 6.08c0.34 5.45 0.14 11 0.14 16.4v470.11c0 21.72 0.17 43.46 0 65.19q0 1.77-0.12 3.54a60 60 0 0 1-1.76 6.47 57.08 57.08 0 0 1-3.11 5.42l1.15-1.18c-0.46 0.47-0.9 1-1.33 1.47v0.06a11.1 11.1 0 0 1-2 2.24l-0.51 0.56c-1.19 1.22-2.46 2.35-3.71 3.49a92.39 92.39 0 0 1-9.75 5.63z"  ></path><path d="M891.19 768.05c0.68-0.75 1.33-1.53 2-2.3a2.82 2.82 0 0 0 0.18-0.29c-2.18 2.25-2.55 2.86-2.18 2.59zM887.11 180.36c2.93 2.68 1.75 1.46 0 0z"  ></path></symbol><symbol id="icon-lishi" viewBox="0 0 1024 1024"><path d="M746.09 819.93c0.82-0.61 1.63-1.23 2.44-1.85l0.26-0.21c-2.19 1.65-3 2.3-3.16 2.4z"  ></path><path d="M877.56 254.92A455 455 0 0 0 663.23 91.36c-87.06-31.84-185.15-34.7-274.18-9.19-85.36 24.44-163.64 75-220.17 143.57a464.36 464.36 0 0 0-71.7 120.05c-17.5 42.6-27.38 87.93-30.92 133.8-7.05 91.67 15.62 185.61 63.42 264.12C175.63 819.18 244.41 881.48 325 918a461.69 461.69 0 0 0 137.88 38.17c46.72 5.49 94.22 2.82 140.29-6.51C691 931.86 773.21 885.79 835 821s104.53-148.63 118.11-237.43A477.66 477.66 0 0 0 959 512c-0.15-91.29-28.29-182.62-81.44-257.08zM895.33 564a419.29 419.29 0 0 1-26.76 98.1 420.41 420.41 0 0 1-27.1 52.2q-8.31 13.54-17.64 26.44c-1.29 1.78-2.59 3.56-3.91 5.32l-1.5 2c-3.08 3.89-6.2 7.76-9.4 11.55a419.66 419.66 0 0 1-43.41 44.23q-5.45 4.8-11.07 9.4-2.85 2.32-5.75 4.61l1.51-1.13-1.77 1.34-0.17 0.14c-1 0.81-2.93 2.22-2.73 2q-12 8.93-24.57 17a419.8 419.8 0 0 1-59.13 31.41A420.1 420.1 0 0 1 564 895.35a427.07 427.07 0 0 1-104 0 419.7 419.7 0 0 1-98.09-26.76 418.43 418.43 0 0 1-52.2-27.11q-13.54-8.31-26.44-17.63c-1.79-1.29-3.56-2.6-5.33-3.92l-2-1.49c-3.89-3.09-7.75-6.2-11.54-9.41a418.61 418.61 0 0 1-44.23-43.4q-4.8-5.46-9.4-11.08c-1.56-1.9-3.09-3.81-4.62-5.74l1.14 1.51-1.29-1.77-0.14-0.17c-0.81-1-2.22-2.93-2-2.73q-8.93-12-17-24.57A418.76 418.76 0 0 1 155.37 662a419.12 419.12 0 0 1-26.68-97.9 426.16 426.16 0 0 1 0-104 419.21 419.21 0 0 1 26.76-98.09 419.58 419.58 0 0 1 27.1-52.19q8.31-13.56 17.64-26.44 1.94-2.68 3.91-5.33l1.5-2c3.08-3.89 6.2-7.75 9.4-11.55a420.62 420.62 0 0 1 43.41-44.23q5.46-4.78 11.07-9.39 2.85-2.34 5.75-4.62l-1.51 1.13 1.77-1.34 0.17-0.14c1-0.8 2.93-2.21 2.73-2.05q12-8.92 24.57-17a419.74 419.74 0 0 1 59.13-31.4A419.12 419.12 0 0 1 460 128.71a426.08 426.08 0 0 1 104 0 419.21 419.21 0 0 1 98.09 26.76 418.36 418.36 0 0 1 52.2 27.1q13.54 8.31 26.44 17.63c1.79 1.29 3.56 2.6 5.33 3.92l2 1.49c3.89 3.09 7.75 6.2 11.54 9.41a419.66 419.66 0 0 1 44.24 43.4q4.78 5.46 9.39 11.08a430 430 0 0 1 4.62 5.75l-1.14-1.51 1.35 1.76 0.13 0.18c0.81 1 2.22 2.92 2 2.73q8.94 12 17 24.56a418.32 418.32 0 0 1 31.41 59.14A419.12 419.12 0 0 1 895.33 460a419.14 419.14 0 0 1 0 104z"  ></path><path d="M819.92 278c-0.61-0.82-1.24-1.63-1.85-2.45l-0.21-0.25c1.64 2.19 2.29 3 2.39 3.16zM204.1 746.1l1.86 2.45c0.06 0.09 0.14 0.17 0.2 0.26-1.64-2.2-2.29-3-2.39-3.16zM277.93 204.12c-0.82 0.61-1.63 1.23-2.44 1.85l-0.26 0.21c2.19-1.64 3-2.3 3.16-2.4zM675.18 482.54l-132.86-0.19-0.15-56.91-0.36-139.39-0.09-31.88c0-15.8-13.87-30.95-30.21-30.22s-30.26 13.28-30.22 30.22q0.1 43.54 0.23 87.1l0.36 139.39q0 15.93 0.08 31.87a30.67 30.67 0 0 0 30.22 30.22l143.12 0.2h19.88c15.81 0 31-13.91 30.22-30.22s-13.27-30.17-30.22-30.19z"  ></path></symbol><symbol id="icon-zhangdan" viewBox="0 0 1024 1024"><path d="M848.21 887.42a21.16 21.16 0 0 0-3.18 2.75l0.26-0.18c0.9-0.78 1.84-1.53 2.7-2.35zM273.84 133.9c-0.9 0.78-1.84 1.53-2.7 2.35l-0.22 0.23a22.36 22.36 0 0 0 3.18-2.76z"  ></path><path d="M896.9 100.1C878 76.63 847.21 65.06 817.65 65H300.66c-35.32 0.12-71.67 17.81-88.74 49.75-7.95 14.88-10.67 30.76-10.67 47.34v498.38h-11.36a72.14 72.14 0 0 0-48.1 18.27c-11.27 9.93-17.11 23.13-21.52 37.14a289.15 289.15 0 0 0-8.68 35c-5.42 29.94-7.13 60.44-3.68 90.71 2.92 25.69 6.21 55.93 21.76 77.53 17.63 24.5 44.59 39.39 75 39.69H720c33 0 66 0.27 99 0 42.73-0.34 87-27.5 96.54-71.26 2-9.12 2.34-17.88 2.34-27V159c0-22.08-7.12-41.72-20.98-58.9z m-629.28 39.72a23.88 23.88 0 0 0 1.42-2c0.1 0.18-0.63 1.07-1.42 2z m-83.21 582a3.2 3.2 0 0 0 0.27-0.25z m383 176.42h-298c-21.43 0-42.86 0.15-64.29 0-1.5 0-3-0.06-4.48-0.16a65.12 65.12 0 0 1-7.91-2.17 60.58 60.58 0 0 1-5.77-3.26l-0.53-0.36c-1-0.87-2-1.69-2.93-2.6s-2.07-2.17-3.07-3.28l-0.07-0.11a59 59 0 0 1-3.76-6.55c-4-11-6.06-23.09-7.72-34.76a292.2 292.2 0 0 1-0.22-70c2.39-16 5.86-32.46 11.44-47.74 0.49-0.93 1-1.84 1.54-2.77l-0.22 0.18 0.29-0.3 0.38-0.68 0.1-0.17 0.08-0.06 1-0.6c0.28-0.24 0.54-0.5 0.81-0.75h0.08l-0.51 0.53c0.47-0.28 0.94-0.55 1.42-0.81 0.89-0.27 1.78-0.52 2.68-0.73 5-0.25 10 0 14.9 0l40.8-0.07 135.09-0.25 164.34-0.29 142.52-0.25c8.7 0 17.4 0 26.11 0.11-17.93 57.57-18.77 119.91-0.22 177.95H567.42z m279.1-9.12l-1.23 0.83c-0.42 0.36-0.83 0.73-1.22 1.11 0.35-0.34 0.66-0.65 1-0.93l-0.71 0.48a70 70 0 0 1-7.51 4.22 79.82 79.82 0 0 1-11.7 3.17c-11.76 1-23.87 0.25-35.58 0.25h-14.1A274.59 274.59 0 0 1 760 840.2a270.78 270.78 0 0 1 0-62.34 272.91 272.91 0 0 1 16.68-60.8c1.78-4 3.65-8 5.62-12 4.93-9.88 5.76-20.76 0-30.59a30.51 30.51 0 0 0-26.16-15l-68.61 0.12-158.41 0.28-179.68 0.32-87.55 0.16v-443c0-20.35-0.17-40.71 0-61.06 0-1.21 0.06-2.42 0.13-3.62a59.56 59.56 0 0 1 1.76-6.31 57.91 57.91 0 0 1 3.61-6.18c1.17-1.27 2.33-2.55 3.57-3.75-0.53 0.27 0.46-0.92 1.69-1.74l1.23-0.84c0.42-0.36 0.83-0.73 1.22-1.11-0.35 0.34-0.66 0.65-1 0.93l0.71-0.48a70 70 0 0 1 7.51-4.22 80.1 80.1 0 0 1 11.38-3.1c6.14-0.46 12.32-0.31 18.47-0.31h445.72c20.25 0 40.5-0.13 60.75 0 2.24 0 4.46 0.12 6.68 0.29a80.58 80.58 0 0 1 11.51 3.15 69 69 0 0 1 6.93 3.85c0.34 0.21 1 0.65 1.64 1.13 0.93 0.79 2.15 1.82 2.59 2.24 1.24 1.2 2.45 2.44 3.59 3.73v0.05c1.38 2.12 2.66 4.27 3.81 6.49a61.34 61.34 0 0 1 1.73 6.24c0.46 6.81 0.12 13.77 0.12 20.52v694.01c0 1.31 0 2.61-0.13 3.91a59.56 59.56 0 0 1-1.76 6.31 57.91 57.91 0 0 1-3.61 6.18c-1.17 1.27-2.33 2.55-3.57 3.76 0.57-0.28-0.42 0.91-1.65 1.74z m5-5.08c-0.3 0.4-1.46 1.92-1.42 2-0.09-0.11 0.63-1.04 1.42-1.96z"  ></path><path d="M183.66 722.65l-0.38 0.24c-0.22 0.19-0.45 0.38-0.65 0.59s-0.59 0.61-0.87 0.92l-0.07 0.12c0.47-0.4 1.12-1 1.97-1.87zM509.6 318.81H769c15.85 0 31-13.94 30.3-30.3s-13.3-30.3-30.3-30.3H509.6c-15.85 0-31 13.94-30.3 30.3s13.31 30.3 30.3 30.3zM776.3 453.36H516.91c-15.85 0-31 13.94-30.3 30.3S499.92 514 516.91 514H776.3c15.85 0 31-13.94 30.3-30.31s-13.31-30.33-30.3-30.33z"  ></path><path d="M367.92 288.51m-30.3 0a30.3 30.3 0 1 0 60.6 0 30.3 30.3 0 1 0-60.6 0Z"  ></path><path d="M367.92 483.66m-30.3 0a30.3 30.3 0 1 0 60.6 0 30.3 30.3 0 1 0-60.6 0Z"  ></path></symbol><symbol id="icon-xiangce" viewBox="0 0 1024 1024"><path d="M959 162.75c-0.16-24.31-9.82-48.57-27.69-65.33a91.91 91.91 0 0 0-62.73-25H160c-2.64 0-5.29-0.06-7.92 0.07-34.76 1.58-66 22.38-79.61 54.59C65.44 143.67 65 160 65 177.38v684.01c0.2 24.92 10.48 50.49 29.62 66.94 17.24 14.82 38.08 23.14 61 23.22h715.1c32.45-0.92 64.39-19.44 78.56-49.25a97.75 97.75 0 0 0 9.72-42.76V190.39v-27.64z m-71.54-24.47a10.37 10.37 0 0 1-1.4-1.09c0.06-0.07 0.65 0.43 1.37 1.09z m-753.82 2.82c1-1 2.12-1.88 3.14-2.85a61.16 61.16 0 0 1 6.32-3.64 66 66 0 0 1 7.67-2.11c7.12-0.5 14.38-0.16 21.46-0.16h696.22c1.59 0 3.18 0.06 4.76 0.16a63.83 63.83 0 0 1 7.69 2.11 59.69 59.69 0 0 1 6 3.41c0.37 0.24 0.73 0.5 1.1 0.75 1.09 1 2.27 2.22 2.38 2.33 1 1 1.89 2.12 2.85 3.15a61.88 61.88 0 0 1 3.65 6.31 64 64 0 0 1 2.1 7.67c0.49 7 0.17 14.15 0.17 21.12v450.82l-30-31.81Q806.61 532 744.06 465.6l-28.64-30.41c-11-11.71-31.22-11.26-42.33 0l-24.38 24.72-58.53 59.34-70.8 71.75-61.2 62.05c-3.74 3.79-7.53 7.54-11.31 11.3l-32.52-26.55-89.34-73-20.53-16.8c-6-4.94-12.93-9.14-21.16-8.77a32.87 32.87 0 0 0-21.17 8.77l-61.53 54.57-75.75 67.17V188.92v-25.94c0-1.58 0.06-3.16 0.17-4.73a62.66 62.66 0 0 1 2.11-7.7 59.69 59.69 0 0 1 3.41-6c0.24-0.37 0.5-0.73 0.75-1.09 1.04-1.07 2.22-2.24 2.33-2.36z m-2.82 2.9a9.58 9.58 0 0 1-1.1 1.41c-0.06-0.09 0.44-0.68 1.1-1.41z m5.73 741.72a9.63 9.63 0 0 1 1.4 1.09c-0.09 0.08-0.68-0.42-1.4-1.08z m583.08 5.95h-564c-1.59 0-3.18-0.07-4.76-0.17a63.83 63.83 0 0 1-7.69-2.11 59.69 59.69 0 0 1-6-3.41c-0.37-0.24-0.73-0.5-1.09-0.75-1.1-1-2.28-2.22-2.39-2.33-1-1-1.88-2.12-2.85-3.14a61.16 61.16 0 0 1-3.64-6.32 61.73 61.73 0 0 1-2.11-7.67c-0.49-7-0.17-14.15-0.17-21.11v-95.1l59.46-52.72L282 610.25l2.2-1.94 34 27.81 89.34 73L428.06 726c6 4.95 12.93 9.14 21.16 8.77 7.91-0.35 15.49-3 21.17-8.77l24.37-24.71 58.53-59.34 70.81-71.79 61.2-62.05c2.82-2.86 5.67-5.69 8.52-8.53l58.33 61.92q62.55 66.38 125.08 132.76l21.88 23.22v143.55c0 1.58-0.06 3.16-0.17 4.73a61.71 61.71 0 0 1-2.11 7.7 59.69 59.69 0 0 1-3.41 6c-0.24 0.37-0.49 0.73-0.75 1.09-1 1.1-2.22 2.28-2.33 2.39-1 1-2.11 1.88-3.14 2.85a60.12 60.12 0 0 1-6.32 3.64 62.67 62.67 0 0 1-7.73 2.12c-1.32 0.09-2.64 0.14-4 0.16H719.63zM893.16 880a9.26 9.26 0 0 1 1.1-1.4c0.06 0.09-0.44 0.68-1.1 1.4z"  ></path><path d="M286.25 400a97.42 97.42 0 0 0 60.16 7.37c41.54-7.8 71.22-46.68 72.73-87.89 0.05-0.76 0.08-1.53 0.07-2.32v-1.91c-1.21-39-26.05-72-62.49-85.44-34.1-12.57-76.32-1.12-99.45 26.86a97 97 0 0 0-22.47 55c-1.56 17.91 3.43 37.14 12.59 52.52 8.94 15.05 22.79 28.44 38.86 35.81zM307 291.28l0.33-0.23a60.39 60.39 0 0 1 6.89-3.95 65.67 65.67 0 0 1 8.24-2.26 67.69 67.69 0 0 1 8.78 0 66.15 66.15 0 0 1 8.27 2.27 59.62 59.62 0 0 1 6.32 3.58l0.69 0.47c1.11 1 2.25 1.95 3.3 3s1.94 2.07 2.89 3.12l0.24 0.33a63.55 63.55 0 0 1 4 6.89 68.52 68.52 0 0 1 2.27 8.31c0.1 1.44 0.16 2.88 0.17 4.32s-0.07 2.89-0.17 4.33a67.24 67.24 0 0 1-2.28 8.34 63.62 63.62 0 0 1-3.58 6.32c-0.15 0.23-0.31 0.46-0.47 0.68-1 1.12-2 2.25-3 3.31s-2.07 1.93-3.12 2.89l-0.33 0.23a60.39 60.39 0 0 1-6.89 3.95 65.67 65.67 0 0 1-8.24 2.26 67.69 67.69 0 0 1-8.78 0 66.15 66.15 0 0 1-8.27-2.27 59.62 59.62 0 0 1-6.32-3.58l-0.69-0.47c-1.11-1-2.25-1.95-3.3-3S302 338.05 301 337l-0.24-0.33a63.55 63.55 0 0 1-3.95-6.89 67.57 67.57 0 0 1-2.26-8.25 71.28 71.28 0 0 1 0-8.77 68.07 68.07 0 0 1 2.27-8.28 62.5 62.5 0 0 1 3.58-6.32l0.47-0.69c1-1.11 2-2.24 3-3.3s2.13-1.94 3.13-2.89z"  ></path></symbol><symbol id="icon-hongbao" viewBox="0 0 1024 1024"><path d="M696.32 348.189475 327.68 348.189475c-16.583691 0-32.682032-3.252533-47.848236-9.667208-14.638361-6.191651-27.780882-15.051007-39.06183-26.332201-11.281194-11.281194-20.14055-24.423714-26.332201-39.062075-6.414922-15.165958-9.667208-31.264545-9.667208-47.84799 0-11.053993 2.169583-21.788431 6.448326-31.904883 4.128668-9.761036 10.03466-18.52288 17.554145-26.04212 7.519486-7.519486 16.28133-13.425478 26.04212-17.554145 10.116452-4.278743 20.85089-6.448326 31.904883-6.448326l450.56 0c11.053993 0 21.788431 2.169583 31.904883 6.448326 9.760791 4.128668 18.52288 10.03466 26.04212 17.554145 7.519486 7.519486 13.425723 16.28133 17.554391 26.04212 4.278743 10.116452 6.448326 20.850644 6.448326 31.904883 0 16.583691-3.252533 32.682032-9.667208 47.84799-6.191405 14.638361-15.051007 27.780882-26.331955 39.062075-11.281439 11.281194-24.423714 20.14055-39.062075 26.332201C729.002032 344.936942 712.903691 348.189475 696.32 348.189475zM286.72 184.349475c-22.569265 0-40.930525 18.361261-40.930525 40.930525 0 21.873662 8.518187 42.438156 23.985278 57.905247 15.467091 15.467091 36.031586 23.985278 57.905493 23.985278l368.64 0c21.873662 0 42.438156-8.518187 57.905493-23.985278 15.467091-15.467091 23.985032-36.031586 23.985032-57.905247 0-22.569265-18.361506-40.930525-40.930771-40.930525L286.72 184.349475z"  ></path><path d="M737.28 880.669475 286.72 880.669475c-11.053993 0-21.788431-2.169583-31.904637-6.448326-9.761036-4.128668-18.52288-10.03466-26.042366-17.554145-7.519486-7.519486-13.425478-16.28133-17.554145-26.042366-4.278743-10.116206-6.448326-20.850644-6.448326-31.904637L204.770525 225.28c0-11.053993 2.169583-21.788431 6.448326-31.904883 4.128668-9.760791 10.03466-18.52288 17.554145-26.04212 7.519731-7.519486 16.281575-13.425478 26.042366-17.554145 10.116452-4.278989 20.850644-6.448326 31.904637-6.448326l450.56 0c11.053993 0 21.788431 2.169583 31.904883 6.448326 9.760791 4.128422 18.52288 10.03466 26.04212 17.554145 7.519486 7.519486 13.425723 16.28133 17.554391 26.04212 4.278743 10.116452 6.448326 20.850644 6.448326 31.904883l0 573.44c0 11.053993-2.169583 21.788431-6.448326 31.904637-4.128668 9.761036-10.03466 18.52288-17.554391 26.042366-7.51924 7.51924-16.28133 13.425478-26.04212 17.554145C759.068431 878.499892 748.333993 880.669475 737.28 880.669475zM286.72 184.349475c-22.569265 0-40.930525 18.361261-40.930525 40.930525l0 573.44c0 22.569265 18.361261 40.930525 40.930525 40.930525l450.56 0c22.569265 0 40.930771-18.361261 40.930771-40.930525L778.210771 225.28c0-22.569265-18.361506-40.930525-40.930771-40.930525L286.72 184.349475z"  ></path><path d="M615.636463 439.744507l-73.911726 89.134914 80.632447 0 0 20.459859-95.18656 0 0 50.437834 95.18656 0 0 20.439718-95.18656 0 0 66.380696-33.699646 0 0-66.380696L398.667345 620.216831l0-20.439718 94.803634 0 0-50.437834L398.667345 549.339279l0-20.459859 80.249276 0-73.91148-89.134914 38.301383 0 67.014156 85.903751 67.014402-85.903751L615.636463 439.744507z"  ></path><path d="M529.62685 689.053751l-38.612095 0 0-66.380696L396.21112 622.673055l0-25.352167 94.803634 0L491.014755 551.79575 396.21112 551.79575l0-25.372554 77.478164 0-73.91148-89.134914 44.728094 0 65.815027 84.366645 65.815273-84.366645 44.728094 0-73.911726 89.134914 77.861089 0 0 25.372554-95.18656 0 0 45.525385 95.18656 0 0 25.352167-95.18656 0L529.627095 689.053751zM495.927204 684.141302l28.787197 0 0-66.380696 95.18656 0 0-15.527269-95.18656 0L524.714401 546.883301l95.18656 0 0-15.547656-83.404051 0 73.911726-89.134914L578.53421 442.200731l-68.21353 87.440856-68.213285-87.440856-31.874671 0 73.91148 89.134914L401.123569 531.335645l0 15.547656 94.803634 0 0 55.350283L401.123569 602.233583l0 15.527269 94.803634 0L495.927204 684.141302z"  ></path></symbol><symbol id="icon-shipin" viewBox="0 0 1024 1024"><path d="M764.1 656.37c48.42-50.63 82.09-116.23 92.62-185.66a379.18 379.18 0 0 0 4.7-56.28c-0.15-71.2-22-142.66-63.5-200.71A356.79 356.79 0 0 0 630.13 85.59c-67.85-24.92-144.6-27.08-214-7.24C349.44 97.4 288 136.92 243.91 190.55a354.93 354.93 0 0 0-80.34 198.78c-5.53 71.25 12.17 144.51 49.2 205.59 35.78 59 89.52 108 152.51 136.55 1.83 0.83 3.67 1.63 5.51 2.43-0.7 1.39-1.34 2.85-2 4.39L344.14 800l-39.34 98.36-0.23 0.57c-19.57-0.06-39.18-0.36-58.74 0H245c-15.66 0-30.66 13.77-29.94 29.93S228.21 958.8 245 958.8h409.86c15.27 0 30.58 0.33 45.84 0H713.67c21.56 0 43.17 0.41 64.73 0h0.88c15.65 0 30.66-13.77 29.93-29.94S796.06 899 779.28 899h-57.83l-15.89-39.8-39.35-98.36q-4.51-11.28-9-22.55a66.43 66.43 0 0 0-2.19-4.95 351.06 351.06 0 0 0 109.08-76.97z m-73-469.8c-1-0.74-3.72-2.83-3.66-2.81 1.07 0.24 2.56 1.74 3.66 2.81z m-407 48.77c-0.74 1-2.83 3.73-2.81 3.66 0.32-1.06 1.79-2.54 2.86-3.66z m-5.58 7.53q1.71-2.38 3.48-4.74l1.58-2.08 0.55-0.74c0.33-0.34 0.62-0.65 0.82-0.9 1.38-1.69 2.76-3.37 4.17-5a322 322 0 0 1 33.34-34q4.17-3.66 8.46-7.17 1.84-1.5 3.71-3l-2.09 1.57 2.47-1.87 0.5-0.4c1.16-0.93 3-2.24 0.94-0.68q9.06-6.75 18.57-12.84a322.9 322.9 0 0 1 44.7-23.83 322.88 322.88 0 0 1 73.26-20 328 328 0 0 1 78 0 322.65 322.65 0 0 1 73.42 20 323.26 323.26 0 0 1 39.6 20.72q10 6.18 19.61 13.08 2.38 1.71 4.74 3.48l2.09 1.58 0.73 0.55c0.34 0.33 0.66 0.62 0.91 0.82 1.69 1.38 3.36 2.76 5 4.17A321 321 0 0 1 731 224.93q3.66 4.17 7.18 8.46c1 1.23 2 2.47 3 3.71l-1.58-2.1c0.62 0.83 1.25 1.65 1.88 2.47l0.4 0.5c0.93 1.16 2.23 3 0.68 1q6.74 9 12.84 18.56a321.77 321.77 0 0 1 23.82 44.7 321.9 321.9 0 0 1 18.27 63l-136.65-0.29h-17.22a127.38 127.38 0 0 0-20.18-46.38 140.92 140.92 0 0 0-66.9-51.37C506 248.36 443.84 265 409.61 306.77a140.89 140.89 0 0 0-28.76 57.39l-47.48-0.1-96.22-0.19h-10.37A322.89 322.89 0 0 1 244.87 302a323.26 323.26 0 0 1 20.62-39.54q6.18-10.01 13.08-19.59z m308 161.61a108.59 108.59 0 0 1-5.21 19.14 105.75 105.75 0 0 1-7.77 13.91c-0.7 1-1.42 2.06-2.15 3.07l-0.21 0.25q-2.93 3.48-6.15 6.7t-6.71 6.16l-0.24 0.21c-1 0.72-2 1.44-3.07 2.14a105.75 105.75 0 0 1-13.91 7.77A108.15 108.15 0 0 1 522 469a110.18 110.18 0 0 1-20 0 108.28 108.28 0 0 1-19.11-5.21 105.75 105.75 0 0 1-13.89-7.73c-1-0.7-2.06-1.42-3.07-2.14l-0.25-0.21q-3.48-2.94-6.71-6.16c-2.14-2.14-4.2-4.38-6.15-6.7l-0.21-0.25c-0.72-1-1.45-2-2.14-3.07a105.82 105.82 0 0 1-7.78-13.91 109 109 0 0 1-5.2-19.12 110.07 110.07 0 0 1 0-20.05 109 109 0 0 1 5.2-19.12 105.82 105.82 0 0 1 7.78-13.91c0.69-1 1.42-2.06 2.14-3.07l0.21-0.25c2-2.32 4-4.56 6.15-6.7s4.39-4.2 6.71-6.16l0.25-0.21c1-0.72 2-1.45 3.07-2.14a105.75 105.75 0 0 1 13.91-7.77 108.28 108.28 0 0 1 19.09-5.21 110.18 110.18 0 0 1 20.06 0 108.15 108.15 0 0 1 19.12 5.21 106.4 106.4 0 0 1 13.91 7.77c1 0.69 2 1.42 3.07 2.14l0.24 0.21q3.5 2.94 6.71 6.16t6.15 6.7l0.21 0.25c0.73 1 1.45 2 2.15 3.07a105.75 105.75 0 0 1 7.77 13.91 108.36 108.36 0 0 1 5.21 19.14c0.31 3.33 0.47 6.66 0.5 10s-0.21 6.68-0.52 10.01z m-253.6 237.81c1 0.75 3.73 2.83 3.66 2.81-1.06-0.27-2.58-1.73-3.66-2.81zM599.46 754.2l24.69 61.73 33.21 83H368.67q4.75-11.91 9.53-23.82l39.34-98.36q4.51-11.28 9-22.56c0.16-0.39 0.29-0.79 0.42-1.2a373.2 373.2 0 0 0 47.58 8.67c36.35 4.24 73.3 2 109.13-5.25q7.69-1.56 15.31-3.51c0.16 0.45 0.31 0.88 0.48 1.3z m140.41-160.68c0.75-1 2.83-3.72 2.81-3.66-0.27 1.07-1.68 2.54-2.81 3.66z m5.59-7.53q-1.73 2.38-3.49 4.74l-1.57 2.09c-0.25 0.32-0.43 0.56-0.55 0.73-0.33 0.34-0.63 0.66-0.83 0.91q-2.06 2.53-4.17 5a320 320 0 0 1-33.33 34q-4.17 3.66-8.47 7.17c-1.22 1-2.46 2-3.7 3l2.08-1.57-2.43 1.84c-0.17 0.13-0.34 0.26-0.5 0.4-1.16 0.93-3 2.23-1 0.68q-9.06 6.74-18.56 12.84a321.89 321.89 0 0 1-44.71 23.82 322.28 322.28 0 0 1-73.25 20 328 328 0 0 1-78 0 322.14 322.14 0 0 1-73.42-20 319.91 319.91 0 0 1-39.5-20.64q-10-6.16-19.61-13.07-2.38-1.73-4.74-3.49l-2.08-1.57-0.74-0.55c-0.34-0.33-0.65-0.63-0.9-0.83q-2.53-2.06-5-4.17a321.91 321.91 0 0 1-34-33.33q-3.66-4.17-7.17-8.47c-1-1.22-2-2.46-3-3.7l1.56 2.08c-0.62-0.82-1.25-1.64-1.87-2.47-0.14-0.16-0.27-0.33-0.4-0.49-0.93-1.16-2.24-3-0.68-0.95q-6.75-9.06-12.84-18.56a323 323 0 0 1-23.83-44.71 322.8 322.8 0 0 1-20-73.25q-1.77-14.81-2.19-29.71l52.92 0.11 96.22 0.19h8.52a135 135 0 0 0 16 39.86c13.4 22.13 33.66 41.4 57.34 52.12 27.69 12.55 56.92 16.25 86.85 10.33 49.73-9.84 92.55-51.86 103-101.57l144.76 0.31h13.11q-0.48 14.17-2.18 28.29a322.44 322.44 0 0 1-20 73.44 320.5 320.5 0 0 1-20.62 39.54q-6.12 10.04-13.03 19.62z"  ></path><path d="M688.31 644.39l0.66-0.49c0.12-0.11 0.25-0.21 0.38-0.31l-1.83 1.41zM742 238.13l-0.49-0.65-0.31-0.38 1.39 1.83zM335.71 184.47l-0.65 0.5-0.38 0.3c0.8-0.6 1.4-1.05 1.82-1.38zM282.05 590.73c0.16 0.22 0.33 0.44 0.5 0.65l0.31 0.39-1.39-1.83c0.19 0.26 0.38 0.53 0.58 0.79z"  ></path><path d="M512.01 198.19m-37.05 0a37.05 37.05 0 1 0 74.1 0 37.05 37.05 0 1 0-74.1 0Z"  ></path></symbol><symbol id="icon-dizhi" viewBox="0 0 1024 1024"><path d="M560 750l1.31-1.71 0.27-0.36-2.08 2.72z"  ></path><path d="M226.12 449.41c21.7 68.42 55.38 133.38 91.69 195 34.26 58.11 72.09 114.81 115.37 166.55 14.83 17.73 30.44 34.7 48.95 48.59 15.34 11.51 35.51 17.48 52.72 5.94 14.52-9.73 26.39-23.35 37.72-36.53 18.6-21.64 36-44.38 52.9-67.36a1628.87 1628.87 0 0 0 113-175.3c16.66-30 32.27-60.74 45.64-92.42 12.13-28.75 23.5-58.11 29.44-88.88 2.61-13.5 4.55-27.36 4.59-41.15a287.08 287.08 0 0 0-32.33-131.15c-20.46-39.5-50.41-72.65-85.49-99.45-72.57-55.42-169.69-73.17-257.88-53-85 19.4-162 77.16-201.34 156-19.9 39.9-31 84.32-30.58 129.08 0.31 28.42 7.04 57.05 15.6 84.08z m135.24-266.63c0.05 0-1.61 1.25-2.81 2.16a9.18 9.18 0 0 1 2.81-2.16zM316.07 228c-0.7 0.93-1.35 1.79-1.34 1.75a7.5 7.5 0 0 1 1.34-1.75z m-44.23 106.4a256 256 0 0 1 15.24-56.19 261 261 0 0 1 16.49-31.59q5.08-8.28 10.78-16.17c0.76-1 1.53-2.08 2.3-3.12q3.06-3.87 6.25-7.62A268.88 268.88 0 0 1 350.3 192q3.69-3.22 7.49-6.32c0.19-0.16 0.4-0.35 0.62-0.56l2.61-2q7.92-5.9 16.23-11.2a280.07 280.07 0 0 1 37.62-20.12 287.07 287.07 0 0 1 64.48-17.67 294.05 294.05 0 0 1 69.91 0 286.6 286.6 0 0 1 64.63 17.74 281.11 281.11 0 0 1 33 17.25q8.42 5.15 16.46 10.9c2.32 1.67 6.21 3.58 7.9 5.87 0.06 0.09-6.39-5.07-2.94-2.27l1.53 1.23c1.53 1.23 3 2.47 4.54 3.74a269.15 269.15 0 0 1 28 27.23c2.16 2.43 4.26 4.89 6.33 7.4 1 1.16 1.91 2.34 2.85 3.52l0.17 0.21c3.61 5.05 7.27 10.05 10.62 15.28a259.87 259.87 0 0 1 19.32 36.18 255.84 255.84 0 0 1 15.17 56 265.26 265.26 0 0 1 1.72 29.42 159.78 159.78 0 0 1-1 16.8c-4.43 28.85-14.18 56.81-25.23 83.72-27.3 64.45-63 125.39-101 184q-27.2 41.9-56.75 82.19-6.45 8.78-13 17.44L560 750l-2.06 2.71 1.56-2.06-0.5 0.66q-3.24 4.17-6.5 8.31c-7.47 9.47-15.08 18.82-23 27.95-5.74 6.65-11.62 13.21-17.85 19.41-5.69-5-11.07-10.31-16.27-15.79-7.53-7.95-14.72-16.22-21.71-24.64-4.19-5-8.29-10.14-12.35-15.29q-2.46-3.13-4.9-6.29l-3.3-4.37c-38.72-51.53-73.48-106.29-104.56-162.8a1062.72 1062.72 0 0 1-47.81-97.53c-12.95-31.39-24.44-64.06-29.51-97.74a215.7 215.7 0 0 1 0.6-48.13z"  ></path><path d="M456.69 484.14a138.46 138.46 0 0 0 85.37 10.29c51.64-10 95.9-55.36 103.84-107.88a171.94 171.94 0 0 0 2.23-22.27v-1.61-1.56c-0.47-26.29-8.25-53.26-23.57-74.7a140.34 140.34 0 0 0-65.8-50.77c-50.2-19-112.06-2.26-146 39.51a140.81 140.81 0 0 0-31.84 78.44c-2.28 26.83 4.78 55.21 18.56 78.21 13.32 22.3 33.52 41.56 57.21 52.34z m10.45-63.36a0.43 0.43 0 0 1 0 0.07z m104.92-10.6h0.07z m-10.53-105.63a0.43 0.43 0 0 1 0-0.07 0.43 0.43 0 0 0 0 0.07z m-104.92 10.6h-0.07z m-2 2.74l0.69-0.82q3.1-3.78 6.56-7.25 3.13-3.15 6.53-6l-1.28 0.87c0.53-0.36 1-0.74 1.57-1.12 0.13-0.11 0.25-0.23 0.38-0.33a15.77 15.77 0 0 1 2.66-1.82 105.46 105.46 0 0 1 13.78-7.78 108.37 108.37 0 0 1 18.9-5.19 110.12 110.12 0 0 1 19.89 0 108.37 108.37 0 0 1 18.9 5.19 105.92 105.92 0 0 1 14.14 8c0.23 0.15 0.82 0.49 1.49 0.9l0.82 0.69q3.75 3.13 7.19 6.6 3.13 3.17 6 6.58l-0.87-1.29c0.36 0.54 0.74 1.06 1.12 1.58 0.1 0.13 0.22 0.25 0.32 0.38a16.14 16.14 0 0 1 1.81 2.68 106.24 106.24 0 0 1 7.72 13.88 109 109 0 0 1 5.17 19.05c0.3 3.32 0.47 6.64 0.49 10s-0.19 6.67-0.49 10a109.27 109.27 0 0 1-5.17 19A107.3 107.3 0 0 1 575 406c-0.15 0.22-0.49 0.82-0.89 1.5l-0.69 0.81q-3.11 3.78-6.56 7.25-3.14 3.15-6.53 6l1.28-0.87c-0.53 0.36-1.05 0.75-1.57 1.13-0.13 0.1-0.25 0.22-0.37 0.32a16 16 0 0 1-2.66 1.82 106.24 106.24 0 0 1-13.79 7.78 107.5 107.5 0 0 1-18.9 5.19 108.32 108.32 0 0 1-19.89 0 107.5 107.5 0 0 1-18.9-5.19 105.92 105.92 0 0 1-14.14-8c-0.23-0.15-0.82-0.49-1.49-0.9l-0.81-0.69a99.995 99.995 0 0 1-7.2-6.6c-2.09-2.1-4.08-4.31-6-6.58 0.27 0.39 0.55 0.82 0.87 1.29-0.36-0.53-0.74-1.06-1.12-1.58-0.1-0.13-0.22-0.25-0.32-0.38a15.71 15.71 0 0 1-1.81-2.68 106.78 106.78 0 0 1-7.72-13.87 109.91 109.91 0 0 1-5.16-19 111.67 111.67 0 0 1 0-20 109.56 109.56 0 0 1 5.16-19 106.05 106.05 0 0 1 7.95-14.24c0.12-0.35 0.46-0.95 0.86-1.62z"  ></path><path d="M575.19 319.75c-0.08-0.12-0.15-0.25-0.23-0.36-0.61-0.92-1.26-1.81-1.9-2.7l-0.25-0.29a27 27 0 0 0 2.38 3.35zM557 423.93l0.35-0.23c0.91-0.61 1.79-1.27 2.68-1.91l0.29-0.26a28.87 28.87 0 0 0-3.32 2.4zM453.48 405.58l0.23 0.37c0.61 0.91 1.26 1.8 1.9 2.69l0.25 0.29a29.52 29.52 0 0 0-2.38-3.35zM471.71 301.4l-0.36 0.23c-0.91 0.62-1.79 1.27-2.68 1.92l-0.29 0.25a29.65 29.65 0 0 0 3.33-2.4zM959 921.75c-0.72-16.25-13.09-30-29.79-30H128.74c-10.83 0-21.68-0.14-32.52 0h-1.4c-15.58 0-30.52 13.8-29.79 30s13.09 30 29.79 30h800.44c10.83 0 21.68 0.14 32.52 0h1.4c15.58 0 30.52-13.75 29.82-30z"  ></path></symbol><symbol id="icon-wenjian" viewBox="0 0 1024 1024"><path d="M939.505888 460.088732 939.505888 460.088732 219.273738 460.088732c-26.757222 0-49.359735 17.273649-57.172393 41.11806l0 0-62.839956 191.09398 0-528.370452 0 0 300.064741 0 0 0 0.09032 0c0 65.459228 53.695083 118.431753 119.989768 118.431753l0 0 300.064741 0 0 118.454333 59.972304 0 0-118.454333c0-32.650584-26.870121-59.204587-59.972304-59.204587L519.338479 223.157486c-33.124763 0-59.994884-26.554002-59.994884-59.249746l0 0c0-32.695744-26.824961-59.204587-60.017464-59.204587l0 0L99.261389 104.703153c-33.079603 0-59.994884 26.508842-59.994884 59.204587l0 710.793738c0 32.695744 26.892701 59.204587 59.994884 59.204587l720.09667 0c26.779802 0 49.404895-17.273649 57.194972-41.140639l0.04516 0L999.387872 519.338479C999.387872 486.665314 972.63065 460.179052 939.505888 460.088732L939.505888 460.088732zM822.51925 874.724057 99.261389 874.724057 216.157707 519.338479l723.235281 0L822.51925 874.724057 822.51925 874.724057z"  ></path></symbol><symbol id="icon-xiaolian" viewBox="0 0 1024 1024"><path d="M511.92832 61.44C263.51616 61.44 62.13632 263.0144 62.13632 511.67232c0 248.65792 201.37984 450.23232 449.792 450.23232 248.41216 0 449.792-201.5744 449.792-450.23232C961.72032 263.0144 760.34048 61.44 511.92832 61.44z m0 835.1744c-212.3776 0-384.5632-172.3392-384.5632-384.94208 0-212.59264 172.17536-384.94208 384.5632-384.94208s384.5632 172.3392 384.5632 384.94208c0 212.59264-172.17536 384.94208-384.5632 384.94208z"  ></path><path d="M299.9296 391.34208a65.25952 65.25952 0 0 0 32.58368 56.51456 65.1264 65.1264 0 0 0 65.18784 0 65.25952 65.25952 0 0 0 0-113.01888 65.1264 65.1264 0 0 0-65.18784 0 65.25952 65.25952 0 0 0-32.59392 56.50432z m293.64224 0c0 36.0448 29.184 65.25952 65.1776 65.25952a65.21856 65.21856 0 0 0 65.18784-65.25952c0-36.03456-29.184-65.24928-65.18784-65.24928a65.21856 65.21856 0 0 0-65.1776 65.24928z m-74.1888 314.0608c-70.20544 0-130.47808-42.21952-157.12256-102.62528h-47.44192c28.89728 85.42208 109.4656 146.9952 204.56448 146.9952 95.08864 0 175.6672-61.57312 204.55424-146.9952h-47.43168c-26.64448 60.416-86.91712 102.61504-157.12256 102.61504z"  ></path></symbol></svg>',
          a = (a = document.getElementsByTagName("script"))[
            a.length - 1
          ].getAttribute("data-injectcss"),
          c = function(t, e) {
            e.parentNode.insertBefore(t, e);
          };
        if (a && !t.__iconfont__svg__cssinject__) {
          t.__iconfont__svg__cssinject__ = !0;
          try {
            document.write(
              "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
            );
          } catch (t) {
            console && console.log(t);
          }
        }
        function l() {
          r || ((r = !0), o());
        }
        function h() {
          try {
            n.documentElement.doScroll("left");
          } catch (t) {
            return void setTimeout(h, 50);
          }
          l();
        }
        (e = function() {
          var t, e;
          ((e = document.createElement("div")).innerHTML = s),
            (s = null),
            (t = e.getElementsByTagName("svg")[0]) &&
              (t.setAttribute("aria-hidden", "true"),
              (t.style.position = "absolute"),
              (t.style.width = 0),
              (t.style.height = 0),
              (t.style.overflow = "hidden"),
              (e = t),
              (t = document.body).firstChild
                ? c(e, t.firstChild)
                : t.appendChild(e));
        }),
          document.addEventListener
            ? ~["complete", "loaded", "interactive"].indexOf(
                document.readyState
              )
              ? setTimeout(e, 0)
              : ((i = function() {
                  document.removeEventListener("DOMContentLoaded", i, !1), e();
                }),
                document.addEventListener("DOMContentLoaded", i, !1))
            : document.attachEvent &&
              ((o = e),
              (n = t.document),
              (r = !1),
              h(),
              (n.onreadystatechange = function() {
                "complete" == n.readyState &&
                  ((n.onreadystatechange = null), l());
              }));
      })(window);
    },
    fb15: function(t, e, i) {
      "use strict";
      if ((i.r(e), "undefined" !== typeof window)) {
        var o = window.document.currentScript,
          n = i("8875");
        (o = n()),
          "currentScript" in document ||
            Object.defineProperty(document, "currentScript", { get: n });
        var r = o && o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        r && (i.p = r[1]);
      }
      i("d81d"), i("b0c0");
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass: "chatPage",
              style: { height: t.height, width: t.width }
            },
            [
              i(
                "div",
                { staticClass: "taleBox" },
                [
                  i("chatList", {
                    ref: "chatList",
                    attrs: { list: t.taleList, config: t.chatListConfig },
                    on: {
                      click: function(e) {
                        return t.$emit("clickTalk", e);
                      },
                      loadHistory: t.loadHistoryHandler
                    },
                    scopedSlots: t._u(
                      [
                        t.$scopedSlots.downBtn
                          ? {
                              key: "downBtn",
                              fn: function(e) {
                                var i = e.unread;
                                return [t._t("downBtn", null, { unread: i })];
                              }
                            }
                          : null
                      ],
                      null,
                      !0
                    )
                  })
                ],
                1
              ),
              i("div", { staticClass: "toolBox" }, [
                i(
                  "div",
                  { staticClass: "tools" },
                  [
                    i(
                      "tools",
                      {
                        attrs: { tools: t.toolConfig },
                        on: { emoji: t.bindEmoji }
                      },
                      [t._t("tools", null, { slot: "tools" })],
                      2
                    )
                  ],
                  1
                ),
                i(
                  "div",
                  { staticClass: "enterBox" },
                  [
                    i(
                      "div",
                      { staticClass: "quickList" },
                      [
                        i("quickList", {
                          attrs: { list: t.quickList, msg: t.msg },
                          on: { submit: t.quickSubmit }
                        })
                      ],
                      1
                    ),
                    i(
                      "EnterBox",
                      {
                        attrs: { insert: t.insert, placeholder: t.placeholder },
                        on: {
                          submit: function(e) {
                            return t.$emit("enter", e);
                          }
                        },
                        model: {
                          value: t.msg,
                          callback: function(e) {
                            t.msg = e;
                          },
                          expression: "msg"
                        }
                      },
                      [
                        t._t("enter", null, { slot: "enter" }),
                        t._t("enterBtn", null, { slot: "enterBtn" })
                      ],
                      2
                    )
                  ],
                  1
                )
              ])
            ]
          );
        },
        a = [],
        c =
          (i("ac1f"),
          i("466d"),
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                staticClass: "web__msg",
                on: {
                  keyup: function(e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "enter", 13, e.key, "Enter")
                      ? null
                      : t.handleSend.apply(null, arguments);
                  }
                }
              },
              [
                t.$scopedSlots.enter
                  ? t._t("enter")
                  : [
                      i("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.currentMsg,
                            expression: "currentMsg"
                          }
                        ],
                        ref: "msgBox",
                        staticClass: "web__msg-input",
                        attrs: { rows: "3", placeholder: t.placeholder },
                        domProps: { value: t.currentMsg },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.currentMsg = e.target.value);
                          }
                        }
                      }),
                      t._v(" "),
                      i(
                        "div",
                        { staticClass: "web__msg-menu" },
                        [
                          t.$scopedSlots.enterBtn
                            ? i(
                                "div",
                                { on: { click: t.handleSend } },
                                [t._t("enterBtn")],
                                2
                              )
                            : i(
                                "el-button",
                                {
                                  staticClass: "web__msg-submit",
                                  attrs: { type: "primary", size: "mini" },
                                  on: { click: t.handleSend }
                                },
                                [t._v("发送")]
                              )
                        ],
                        1
                      )
                    ]
              ],
              2
            );
          }),
        l = [],
        h =
          (i("498a"),
          {
            name: "JwChat_enterbox",
            props: {
              placeholder: { type: String, default: "请输入内容..." },
              value: { type: String, default: "" },
              insert: { type: String, default: "" }
            },
            data: function() {
              return { currentMsg: "" };
            },
            watch: {
              value: {
                handler: function() {
                  this.currentMsg = this.value;
                },
                immediate: !0
              },
              currentMsg: {
                handler: function(t) {
                  var e = t.trim();
                  this.$emit("input", e);
                },
                immediate: !0
              },
              insert: function(t) {
                t && this.joinToMsg(t);
              }
            },
            methods: {
              handleSend: function(t) {
                var e = this,
                  i = t.shiftKey;
                i ||
                  (this.$emit("submit", this.currentMsg),
                  this.$nextTick(function() {
                    e.currentMsg = "";
                  }));
              },
              joinToMsg: function(t) {
                var e = this.$refs.msgBox,
                  i = this.currentMsg;
                if (document.selection) {
                  var o = null;
                  e.focus(),
                    (o = document.selection.createRange()),
                    (o.text = t),
                    o.select();
                } else if (e.selectionStart || "0" == e.selectionStart) {
                  var n = e.selectionStart,
                    r = e.selectionEnd,
                    s = e.scrollTop;
                  (i = i.substring(0, n) + t + i.substring(r, i.length)),
                    s > 0 && (e.scrollTop = s),
                    e.focus(),
                    (e.selectionStart = n + t.length),
                    (e.selectionEnd = n + t.length);
                } else (i += t), e.focus();
                this.currentMsg = i;
              }
            }
          }),
        p = h;
      i("48c2");
      function u(t, e, i, o, n, r, s, a) {
        var c,
          l = "function" === typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = i), (l._compiled = !0)),
          o && (l.functional = !0),
          r && (l._scopeId = "data-v-" + r),
          s
            ? ((c = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  t ||
                    "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                  n && n.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(s);
              }),
              (l._ssrRegister = c))
            : n &&
              (c = a
                ? function() {
                    n.call(
                      this,
                      (l.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : n),
          c)
        )
          if (l.functional) {
            l._injectStyles = c;
            var h = l.render;
            l.render = function(t, e) {
              return c.call(e), h(t, e);
            };
          } else {
            var p = l.beforeCreate;
            l.beforeCreate = p ? [].concat(p, c) : [c];
          }
        return { exports: t, options: l };
      }
      var d = u(p, c, l, !1, null, "3c3d684e", null),
        f = d.exports,
        m = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "wrapper", style: t.boxSize }, [
            i("div", { ref: "scroller", staticClass: "scroller" }, [
              i(
                "div",
                { ref: "main", staticClass: "web__main" },
                [
                  i("div", { staticClass: "pulldown-wrapper" }, [
                    i("div", {
                      domProps: { innerHTML: t._s(t.historyConfig.tip) }
                    })
                  ]),
                  t._l(t.list, function(e, o) {
                    return [
                      "tip" === e.type
                        ? i("el-divider", { key: JSON.stringify(e) + o }, [
                            t._v(t._s(e.text))
                          ])
                        : i(
                            "div",
                            {
                              key: "" + (JSON.stringify(e) + o),
                              staticClass: "web__main-item",
                              class: { "web__main-item--mine": e.mine }
                            },
                            [
                              i("div", { staticClass: "web__main-user" }, [
                                i("img", {
                                  attrs: { src: e.img },
                                  on: {
                                    click: function(i) {
                                      return t.$emit("click", {
                                        type: "img",
                                        data: e
                                      });
                                    }
                                  }
                                }),
                                i(
                                  "cite",
                                  {
                                    on: {
                                      click: function(i) {
                                        return t.$emit("click", {
                                          type: "nickname",
                                          data: e
                                        });
                                      }
                                    }
                                  },
                                  [
                                    t._v(" " + t._s(e.name) + " "),
                                    i("i", [t._v(t._s(e.date))])
                                  ]
                                )
                              ]),
                              i(
                                "div",
                                { staticClass: "web__main-text" },
                                [
                                  i("div", { staticClass: "web__main-arrow" }),
                                  e.text.text
                                    ? i("itemTalk", {
                                        attrs: { text: e.text.text },
                                        on: {
                                          systemEvent: t.taskEvent,
                                          loadDone: t.loadDone
                                        }
                                      })
                                    : t._e(),
                                  e.text.system
                                    ? i("systemTalk", {
                                        attrs: {
                                          text: e.text.system,
                                          item_mine_bool: e
                                        },
                                        on: {
                                          systemEvent: t.systemEvent,
                                          loadDone: t.loadDone
                                        }
                                      })
                                    : t._e(),
                                  e.text.subLink
                                    ? i(
                                        "el-link",
                                        t._b(
                                          {
                                            staticClass: "itemChild",
                                            on: {
                                              click: function(i) {
                                                return t.taskEvent(e.text);
                                              }
                                            }
                                          },
                                          "el-link",
                                          e.text.subLink.prop,
                                          !1
                                        ),
                                        [
                                          t._v(
                                            " " +
                                              t._s(e.text.subLink.text) +
                                              " "
                                          )
                                        ]
                                      )
                                    : t._e(),
                                  e.text.shop
                                    ? i("shopTalk", {
                                        attrs: { text: e.text.shop },
                                        on: {
                                          systemEvent: t.taskEvent,
                                          loadDone: t.loadDone
                                        }
                                      })
                                    : t._e()
                                ],
                                1
                              )
                            ]
                          )
                    ];
                  })
                ],
                2
              )
            ]),
            t.showDownBtn
              ? i(
                  "div",
                  {
                    staticClass: "downBtn-position",
                    on: { click: t.scrollBottom }
                  },
                  [
                    t.$scopedSlots.downBtn
                      ? t._t("downBtn", null, { unread: t.unread })
                      : i("div", { staticClass: "downBtn" }, [
                          t.unread ? i("span", [t._v(t._s(t.unread))]) : t._e()
                        ])
                  ],
                  2
                )
              : t._e()
          ]);
        },
        v = [];
      function g(t) {
        if (Array.isArray(t)) return t;
      }
      i("a4d3"),
        i("e01a"),
        i("d3b7"),
        i("d28b"),
        i("e260"),
        i("3ca3"),
        i("ddb0"),
        i("a630");
      function y(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      i("fb6a");
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
        return o;
      }
      function w(t, e) {
        if (t) {
          if ("string" === typeof t) return b(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(t)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? b(t, e)
              : void 0
          );
        }
      }
      function x() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function k(t) {
        return g(t) || y(t) || w(t) || x();
      }
      function T(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function S(t, e) {
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function q(t, e, i) {
        return e && S(t.prototype, e), i && S(t, i), t;
      }
      function _(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i),
          t
        );
      }
      i("c740"), i("159b");
      var P = function(t, e) {
        return (
          (P =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }),
          P(t, e)
        );
      };
      function C(t, e) {
        function i() {
          this.constructor = t;
        }
        P(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i()));
      }
      var E = function() {
        return (
          (E =
            Object.assign ||
            function(t) {
              for (var e, i = 1, o = arguments.length; i < o; i++)
                for (var n in ((e = arguments[i]), e))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }),
          E.apply(this, arguments)
        );
      };
      function M() {
        for (var t = 0, e = 0, i = arguments.length; e < i; e++)
          t += arguments[e].length;
        var o = Array(t),
          n = 0;
        for (e = 0; e < i; e++)
          for (var r = arguments[e], s = 0, a = r.length; s < a; s++, n++)
            o[n] = r[s];
        return o;
      }
      var O = [
        { sourceKey: "scroller.scrollBehaviorX.currentPos", key: "x" },
        { sourceKey: "scroller.scrollBehaviorY.currentPos", key: "y" },
        {
          sourceKey: "scroller.scrollBehaviorX.hasScroll",
          key: "hasHorizontalScroll"
        },
        {
          sourceKey: "scroller.scrollBehaviorY.hasScroll",
          key: "hasVerticalScroll"
        },
        {
          sourceKey: "scroller.scrollBehaviorX.contentSize",
          key: "scrollerWidth"
        },
        {
          sourceKey: "scroller.scrollBehaviorY.contentSize",
          key: "scrollerHeight"
        },
        {
          sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
          key: "maxScrollX"
        },
        {
          sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
          key: "maxScrollY"
        },
        {
          sourceKey: "scroller.scrollBehaviorX.minScrollPos",
          key: "minScrollX"
        },
        {
          sourceKey: "scroller.scrollBehaviorY.minScrollPos",
          key: "minScrollY"
        },
        {
          sourceKey: "scroller.scrollBehaviorX.movingDirection",
          key: "movingDirectionX"
        },
        {
          sourceKey: "scroller.scrollBehaviorY.movingDirection",
          key: "movingDirectionY"
        },
        { sourceKey: "scroller.scrollBehaviorX.direction", key: "directionX" },
        { sourceKey: "scroller.scrollBehaviorY.direction", key: "directionY" },
        { sourceKey: "scroller.actions.enabled", key: "enabled" },
        { sourceKey: "scroller.animater.pending", key: "pending" },
        { sourceKey: "scroller.animater.stop", key: "stop" },
        { sourceKey: "scroller.scrollTo", key: "scrollTo" },
        { sourceKey: "scroller.scrollBy", key: "scrollBy" },
        { sourceKey: "scroller.scrollToElement", key: "scrollToElement" },
        { sourceKey: "scroller.resetPosition", key: "resetPosition" }
      ];
      function B(t) {
        console.error("[BScroll warn]: " + t);
      }
      var z = "undefined" !== typeof window,
        L = z && navigator.userAgent.toLowerCase(),
        D = !(!L || !/wechatdevtools/.test(L)),
        j = L && L.indexOf("android") > 0,
        A = (function() {
          if ("string" === typeof L) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec(L);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
          return !1;
        })(),
        H = !1;
      if (z) {
        var I = "test-passive";
        try {
          var R = {};
          Object.defineProperty(R, "passive", {
            get: function() {
              H = !0;
            }
          }),
            window.addEventListener(I, function() {}, R);
        } catch (In) {}
      }
      function Y() {
        return window.performance &&
          window.performance.now &&
          window.performance.timing
          ? window.performance.now() + window.performance.timing.navigationStart
          : +new Date();
      }
      var $ = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      };
      function X(t) {
        return void 0 === t || null === t;
      }
      function F(t, e, i) {
        return t < e ? e : t > i ? i : t;
      }
      var N = z && document.createElement("div").style,
        W = (function() {
          if (!z) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== N[o.value]) return o.key;
          }
          return !1;
        })();
      function V(t) {
        return !1 === W
          ? t
          : "standard" === W
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : W + t.charAt(0).toUpperCase() + t.substr(1);
      }
      function J(t) {
        return "string" === typeof t ? document.querySelector(t) : t;
      }
      function U(t, e, i, o) {
        var n = H ? { passive: !1, capture: !!o } : !!o;
        t.addEventListener(e, i, n);
      }
      function K(t, e, i, o) {
        t.removeEventListener(e, i, { capture: !!o });
      }
      function G(t) {
        var e = 0,
          i = 0;
        while (t) (e -= t.offsetLeft), (i -= t.offsetTop), (t = t.offsetParent);
        return { left: e, top: i };
      }
      W && "standard" !== W && W.toLowerCase();
      var Q = V("transform"),
        Z = V("transition"),
        tt = z && V("perspective") in N,
        et = z && ("ontouchstart" in window || D),
        it = z && Z in N,
        ot = {
          transform: Q,
          transition: Z,
          transitionTimingFunction: V("transitionTimingFunction"),
          transitionDuration: V("transitionDuration"),
          transitionDelay: V("transitionDelay"),
          transformOrigin: V("transformOrigin"),
          transitionEnd: V("transitionEnd"),
          transitionProperty: V("transitionProperty")
        },
        nt = {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          touchcancel: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2
        };
      function rt(t) {
        if (t instanceof window.SVGElement) {
          var e = t.getBoundingClientRect();
          return { top: e.top, left: e.left, width: e.width, height: e.height };
        }
        return {
          top: t.offsetTop,
          left: t.offsetLeft,
          width: t.offsetWidth,
          height: t.offsetHeight
        };
      }
      function st(t, e) {
        for (var i in e) if (e[i].test(t[i])) return !0;
        return !1;
      }
      var at = st;
      function ct(t, e) {
        var i = document.createEvent("Event");
        i.initEvent(e, !0, !0),
          (i.pageX = t.pageX),
          (i.pageY = t.pageY),
          t.target.dispatchEvent(i);
      }
      function lt(t, e) {
        var i;
        void 0 === e && (e = "click"),
          "mouseup" === t.type
            ? (i = t)
            : ("touchend" !== t.type && "touchcancel" !== t.type) ||
              (i = t.changedTouches[0]);
        var o,
          n = {};
        i &&
          ((n.screenX = i.screenX || 0),
          (n.screenY = i.screenY || 0),
          (n.clientX = i.clientX || 0),
          (n.clientY = i.clientY || 0));
        var r = !0,
          s = !0,
          a = t.ctrlKey,
          c = t.shiftKey,
          l = t.altKey,
          h = t.metaKey,
          p = { ctrlKey: a, shiftKey: c, altKey: l, metaKey: h };
        if ("undefined" !== typeof MouseEvent)
          try {
            o = new MouseEvent(e, $(E({ bubbles: r, cancelable: s }, p), n));
          } catch (t) {
            u();
          }
        else u();
        function u() {
          (o = document.createEvent("Event")), o.initEvent(e, r, s), $(o, n);
        }
        (o.forwardedTouchEvent = !0),
          (o._constructed = !0),
          t.target.dispatchEvent(o);
      }
      function ht(t) {
        lt(t, "dblclick");
      }
      var pt = {
          swipe: {
            style: "cubic-bezier(0.23, 1, 0.32, 1)",
            fn: function(t) {
              return 1 + --t * t * t * t * t;
            }
          },
          swipeBounce: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function(t) {
              return t * (2 - t);
            }
          },
          bounce: {
            style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
            fn: function(t) {
              return 1 - --t * t * t * t;
            }
          }
        },
        ut = 1e3 / 60,
        dt = z && window;
      function ft() {}
      var mt = (function() {
          return z
            ? dt.requestAnimationFrame ||
                dt.webkitRequestAnimationFrame ||
                dt.mozRequestAnimationFrame ||
                dt.oRequestAnimationFrame ||
                function(t) {
                  return window.setTimeout(t, t.interval || ut);
                }
            : ft;
        })(),
        vt = (function() {
          return z
            ? dt.cancelAnimationFrame ||
                dt.webkitCancelAnimationFrame ||
                dt.mozCancelAnimationFrame ||
                dt.oCancelAnimationFrame ||
                function(t) {
                  window.clearTimeout(t);
                }
            : ft;
        })(),
        gt = function(t) {},
        yt = { enumerable: !0, configurable: !0, get: gt, set: gt },
        bt = function(t, e) {
          for (var i = e.split("."), o = 0; o < i.length - 1; o++)
            if (((t = t[i[o]]), "object" !== typeof t || !t)) return;
          var n = i.pop();
          return "function" === typeof t[n]
            ? function() {
                return t[n].apply(t, arguments);
              }
            : t[n];
        },
        wt = function(t, e, i) {
          for (var o, n = e.split("."), r = 0; r < n.length - 1; r++)
            (o = n[r]), t[o] || (t[o] = {}), (t = t[o]);
          t[n.pop()] = i;
        };
      function xt(t, e, i) {
        (yt.get = function() {
          return bt(this, e);
        }),
          (yt.set = function(t) {
            wt(this, e, t);
          }),
          Object.defineProperty(t, i, yt);
      }
      var kt = (function() {
          function t(t) {
            (this.events = {}), (this.eventTypes = {}), this.registerType(t);
          }
          return (
            (t.prototype.on = function(t, e, i) {
              return (
                void 0 === i && (i = this),
                this.hasType(t),
                this.events[t] || (this.events[t] = []),
                this.events[t].push([e, i]),
                this
              );
            }),
            (t.prototype.once = function(t, e, i) {
              var o = this;
              void 0 === i && (i = this), this.hasType(t);
              var n = function() {
                for (var r = [], s = 0; s < arguments.length; s++)
                  r[s] = arguments[s];
                o.off(t, n);
                var a = e.apply(i, r);
                if (!0 === a) return a;
              };
              return (n.fn = e), this.on(t, n), this;
            }),
            (t.prototype.off = function(t, e) {
              if (!t && !e) return (this.events = {}), this;
              if (t) {
                if ((this.hasType(t), !e)) return (this.events[t] = []), this;
                var i = this.events[t];
                if (!i) return this;
                var o = i.length;
                while (o--)
                  (i[o][0] === e || (i[o][0] && i[o][0].fn === e)) &&
                    i.splice(o, 1);
                return this;
              }
            }),
            (t.prototype.trigger = function(t) {
              for (var e = [], i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
              this.hasType(t);
              var o = this.events[t];
              if (o)
                for (var n, r = o.length, s = M(o), a = 0; a < r; a++) {
                  var c = s[a],
                    l = c[0],
                    h = c[1];
                  if (l && ((n = l.apply(h, e)), !0 === n)) return n;
                }
            }),
            (t.prototype.registerType = function(t) {
              var e = this;
              t.forEach(function(t) {
                e.eventTypes[t] = t;
              });
            }),
            (t.prototype.destroy = function() {
              (this.events = {}), (this.eventTypes = {});
            }),
            (t.prototype.hasType = function(t) {
              var e = this.eventTypes,
                i = e[t] === t;
              i ||
                B(
                  'EventEmitter has used unknown event type: "' +
                    t +
                    '", should be oneof [' +
                    Object.keys(e).map(function(t) {
                      return JSON.stringify(t);
                    }) +
                    "]"
                );
            }),
            t
          );
        })(),
        Tt = (function() {
          function t(t, e) {
            (this.wrapper = t), (this.events = e), this.addDOMEvents();
          }
          return (
            (t.prototype.destroy = function() {
              this.removeDOMEvents(), (this.events = []);
            }),
            (t.prototype.addDOMEvents = function() {
              this.handleDOMEvents(U);
            }),
            (t.prototype.removeDOMEvents = function() {
              this.handleDOMEvents(K);
            }),
            (t.prototype.handleDOMEvents = function(t) {
              var e = this,
                i = this.wrapper;
              this.events.forEach(function(o) {
                t(i, o.name, e, !!o.capture);
              });
            }),
            (t.prototype.handleEvent = function(t) {
              var e = t.type;
              this.events.some(function(i) {
                return i.name === e && (i.handler(t), !0);
              });
            }),
            t
          );
        })(),
        St = (function() {
          function t() {}
          return t;
        })(),
        qt = (function(t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.startX = 0),
              (e.startY = 0),
              (e.scrollX = !1),
              (e.scrollY = !0),
              (e.freeScroll = !1),
              (e.directionLockThreshold = 0),
              (e.eventPassthrough = ""),
              (e.click = !1),
              (e.dblclick = !1),
              (e.tap = ""),
              (e.bounce = { top: !0, bottom: !0, left: !0, right: !0 }),
              (e.bounceTime = 800),
              (e.momentum = !0),
              (e.momentumLimitTime = 300),
              (e.momentumLimitDistance = 15),
              (e.swipeTime = 2500),
              (e.swipeBounceTime = 500),
              (e.deceleration = 0.0015),
              (e.flickLimitTime = 200),
              (e.flickLimitDistance = 100),
              (e.resizePolling = 60),
              (e.probeType = 0),
              (e.stopPropagation = !1),
              (e.preventDefault = !0),
              (e.preventDefaultException = {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
              }),
              (e.tagException = { tagName: /^TEXTAREA$/ }),
              (e.HWCompositing = !0),
              (e.useTransition = !0),
              (e.bindToWrapper = !1),
              (e.bindToTarget = !1),
              (e.disableMouse = et),
              (e.disableTouch = !et),
              (e.autoBlur = !0),
              (e.autoEndDistance = 5),
              (e.outOfBoundaryDampingFactor = 1 / 3),
              (e.specifiedIndexAsContent = 0),
              (e.quadrant = 1),
              e
            );
          }
          return (
            C(e, t),
            (e.prototype.merge = function(t) {
              if (!t) return this;
              for (var e in t)
                "bounce" !== e
                  ? (this[e] = t[e])
                  : (this.bounce = this.resolveBounce(t[e]));
              return this;
            }),
            (e.prototype.process = function() {
              return (
                (this.translateZ =
                  this.HWCompositing && tt ? " translateZ(1px)" : ""),
                (this.useTransition = this.useTransition && it),
                (this.preventDefault =
                  !this.eventPassthrough && this.preventDefault),
                (this.scrollX =
                  "horizontal" !== this.eventPassthrough && this.scrollX),
                (this.scrollY =
                  "vertical" !== this.eventPassthrough && this.scrollY),
                (this.freeScroll = this.freeScroll && !this.eventPassthrough),
                (this.scrollX = !!this.freeScroll || this.scrollX),
                (this.scrollY = !!this.freeScroll || this.scrollY),
                (this.directionLockThreshold = this.eventPassthrough
                  ? 0
                  : this.directionLockThreshold),
                this
              );
            }),
            (e.prototype.resolveBounce = function(t) {
              var e,
                i = { top: !0, right: !0, bottom: !0, left: !0 },
                o = { top: !1, right: !1, bottom: !1, left: !1 };
              return (e = "object" === typeof t ? $(i, t) : t ? i : o), e;
            }),
            e
          );
        })(St),
        _t = (function() {
          function t(t, e) {
            (this.wrapper = t),
              (this.options = e),
              (this.hooks = new kt([
                "beforeStart",
                "start",
                "move",
                "end",
                "click"
              ])),
              this.handleDOMEvents();
          }
          return (
            (t.prototype.handleDOMEvents = function() {
              var t = this.options,
                e = t.bindToWrapper,
                i = t.disableMouse,
                o = t.disableTouch,
                n = t.click,
                r = this.wrapper,
                s = e ? r : window,
                a = [],
                c = [],
                l = !o,
                h = !i;
              n &&
                a.push({
                  name: "click",
                  handler: this.click.bind(this),
                  capture: !0
                }),
                l &&
                  (a.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                  }),
                  c.push(
                    { name: "touchmove", handler: this.move.bind(this) },
                    { name: "touchend", handler: this.end.bind(this) },
                    { name: "touchcancel", handler: this.end.bind(this) }
                  )),
                h &&
                  (a.push({
                    name: "mousedown",
                    handler: this.start.bind(this)
                  }),
                  c.push(
                    { name: "mousemove", handler: this.move.bind(this) },
                    { name: "mouseup", handler: this.end.bind(this) }
                  )),
                (this.wrapperEventRegister = new Tt(r, a)),
                (this.targetEventRegister = new Tt(s, c));
            }),
            (t.prototype.beforeHandler = function(t, e) {
              var i = this.options,
                o = i.preventDefault,
                n = i.stopPropagation,
                r = i.preventDefaultException,
                s = {
                  start: function() {
                    return o && !st(t.target, r);
                  },
                  end: function() {
                    return o && !st(t.target, r);
                  },
                  move: function() {
                    return o;
                  }
                };
              s[e]() && t.preventDefault(), n && t.stopPropagation();
            }),
            (t.prototype.setInitiated = function(t) {
              void 0 === t && (t = 0), (this.initiated = t);
            }),
            (t.prototype.start = function(t) {
              var e = nt[t.type];
              if (!this.initiated || this.initiated === e)
                if (
                  (this.setInitiated(e),
                  at(t.target, this.options.tagException))
                )
                  this.setInitiated();
                else if (
                  (2 !== e || 0 === t.button) &&
                  !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)
                ) {
                  this.beforeHandler(t, "start");
                  var i = t.touches ? t.touches[0] : t;
                  (this.pointX = i.pageX),
                    (this.pointY = i.pageY),
                    this.hooks.trigger(this.hooks.eventTypes.start, t);
                }
            }),
            (t.prototype.move = function(t) {
              if (nt[t.type] === this.initiated) {
                this.beforeHandler(t, "move");
                var e = t.touches ? t.touches[0] : t,
                  i = e.pageX - this.pointX,
                  o = e.pageY - this.pointY;
                if (
                  ((this.pointX = e.pageX),
                  (this.pointY = e.pageY),
                  !this.hooks.trigger(this.hooks.eventTypes.move, {
                    deltaX: i,
                    deltaY: o,
                    e: t
                  }))
                ) {
                  var n =
                      document.documentElement.scrollLeft ||
                      window.pageXOffset ||
                      document.body.scrollLeft,
                    r =
                      document.documentElement.scrollTop ||
                      window.pageYOffset ||
                      document.body.scrollTop,
                    s = this.pointX - n,
                    a = this.pointY - r,
                    c = this.options.autoEndDistance;
                  (s > document.documentElement.clientWidth - c ||
                    a > document.documentElement.clientHeight - c ||
                    s < c ||
                    a < c) &&
                    this.end(t);
                }
              }
            }),
            (t.prototype.end = function(t) {
              nt[t.type] === this.initiated &&
                (this.setInitiated(),
                this.beforeHandler(t, "end"),
                this.hooks.trigger(this.hooks.eventTypes.end, t));
            }),
            (t.prototype.click = function(t) {
              this.hooks.trigger(this.hooks.eventTypes.click, t);
            }),
            (t.prototype.setContent = function(t) {
              t !== this.wrapper &&
                ((this.wrapper = t), this.rebindDOMEvents());
            }),
            (t.prototype.rebindDOMEvents = function() {
              this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.handleDOMEvents();
            }),
            (t.prototype.destroy = function() {
              this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.hooks.destroy();
            }),
            t
          );
        })(),
        Pt = { x: ["translateX", "px"], y: ["translateY", "px"] },
        Ct = (function() {
          function t(t) {
            this.setContent(t),
              (this.hooks = new kt(["beforeTranslate", "translate"]));
          }
          return (
            (t.prototype.getComputedPosition = function() {
              var t = window.getComputedStyle(this.content, null),
                e = t[ot.transform].split(")")[0].split(", "),
                i = +(e[12] || e[4]) || 0,
                o = +(e[13] || e[5]) || 0;
              return { x: i, y: o };
            }),
            (t.prototype.translate = function(t) {
              var e = [];
              Object.keys(t).forEach(function(i) {
                if (Pt[i]) {
                  var o = Pt[i][0];
                  if (o) {
                    var n = Pt[i][1],
                      r = t[i];
                    e.push(o + "(" + r + n + ")");
                  }
                }
              }),
                this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, e, t),
                (this.style[ot.transform] = e.join(" ")),
                this.hooks.trigger(this.hooks.eventTypes.translate, t);
            }),
            (t.prototype.setContent = function(t) {
              this.content !== t &&
                ((this.content = t), (this.style = t.style));
            }),
            (t.prototype.destroy = function() {
              this.hooks.destroy();
            }),
            t
          );
        })(),
        Et = (function() {
          function t(t, e, i) {
            (this.translater = e),
              (this.options = i),
              (this.timer = 0),
              (this.hooks = new kt([
                "move",
                "end",
                "beforeForceStop",
                "forceStop",
                "callStop",
                "time",
                "timeFunction"
              ])),
              this.setContent(t);
          }
          return (
            (t.prototype.translate = function(t) {
              this.translater.translate(t);
            }),
            (t.prototype.setPending = function(t) {
              this.pending = t;
            }),
            (t.prototype.setForceStopped = function(t) {
              this.forceStopped = t;
            }),
            (t.prototype.setCallStop = function(t) {
              this.callStopWhenPending = t;
            }),
            (t.prototype.setContent = function(t) {
              this.content !== t &&
                ((this.content = t), (this.style = t.style), this.stop());
            }),
            (t.prototype.clearTimer = function() {
              this.timer && (vt(this.timer), (this.timer = 0));
            }),
            (t.prototype.destroy = function() {
              this.hooks.destroy(), vt(this.timer);
            }),
            t
          );
        })(),
        Mt = function(t, e, i, o) {
          var n = function(t, e) {
              var i = t - e,
                o = i > 0 ? -1 : i < 0 ? 1 : 0;
              return o;
            },
            r = n(e.x, t.x),
            s = n(e.y, t.y),
            a = i.x - o.x,
            c = i.y - o.y;
          return r * a <= 0 && s * c <= 0;
        },
        Ot = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            C(e, t),
            (e.prototype.startProbe = function(t, e) {
              var i = this,
                o = t,
                n = function() {
                  var r = i.translater.getComputedPosition();
                  Mt(t, e, r, o) && i.hooks.trigger(i.hooks.eventTypes.move, r),
                    i.pending ||
                      (i.callStopWhenPending
                        ? (i.callStopWhenPending = !1)
                        : i.hooks.trigger(i.hooks.eventTypes.end, r)),
                    (o = r),
                    i.pending && (i.timer = mt(n));
                };
              this.callStopWhenPending && this.setCallStop(!1),
                vt(this.timer),
                n();
            }),
            (e.prototype.transitionTime = function(t) {
              void 0 === t && (t = 0),
                (this.style[ot.transitionDuration] = t + "ms"),
                this.hooks.trigger(this.hooks.eventTypes.time, t);
            }),
            (e.prototype.transitionTimingFunction = function(t) {
              (this.style[ot.transitionTimingFunction] = t),
                this.hooks.trigger(this.hooks.eventTypes.timeFunction, t);
            }),
            (e.prototype.transitionProperty = function() {
              this.style[ot.transitionProperty] = ot.transform;
            }),
            (e.prototype.move = function(t, e, i, o) {
              this.setPending(i > 0),
                this.transitionTimingFunction(o),
                this.transitionProperty(),
                this.transitionTime(i),
                this.translate(e);
              var n = 3 === this.options.probeType;
              i && n && this.startProbe(t, e),
                i ||
                  ((this._reflow = this.content.offsetHeight),
                  n && this.hooks.trigger(this.hooks.eventTypes.move, e),
                  this.hooks.trigger(this.hooks.eventTypes.end, e));
            }),
            (e.prototype.doStop = function() {
              var t = this.pending;
              if ((this.setForceStopped(!1), this.setCallStop(!1), t)) {
                this.setPending(!1), vt(this.timer);
                var e = this.translater.getComputedPosition(),
                  i = e.x,
                  o = e.y;
                this.transitionTime(),
                  this.translate({ x: i, y: o }),
                  this.setForceStopped(!0),
                  this.setCallStop(!0),
                  this.hooks.trigger(this.hooks.eventTypes.forceStop, {
                    x: i,
                    y: o
                  });
              }
              return t;
            }),
            (e.prototype.stop = function() {
              var t = this.doStop();
              t && this.hooks.trigger(this.hooks.eventTypes.callStop);
            }),
            e
          );
        })(Et),
        Bt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            C(e, t),
            (e.prototype.move = function(t, e, i, o) {
              if (!i)
                return (
                  this.translate(e),
                  3 === this.options.probeType &&
                    this.hooks.trigger(this.hooks.eventTypes.move, e),
                  void this.hooks.trigger(this.hooks.eventTypes.end, e)
                );
              this.animate(t, e, i, o);
            }),
            (e.prototype.animate = function(t, e, i, o) {
              var n = this,
                r = Y(),
                s = r + i,
                a = 3 === this.options.probeType,
                c = function() {
                  var l = Y();
                  if (l >= s)
                    return (
                      n.translate(e),
                      a && n.hooks.trigger(n.hooks.eventTypes.move, e),
                      void n.hooks.trigger(n.hooks.eventTypes.end, e)
                    );
                  l = (l - r) / i;
                  var h = o(l),
                    p = {};
                  Object.keys(e).forEach(function(i) {
                    var o = t[i],
                      n = e[i];
                    p[i] = (n - o) * h + o;
                  }),
                    n.translate(p),
                    a && n.hooks.trigger(n.hooks.eventTypes.move, p),
                    n.pending && (n.timer = mt(c)),
                    n.pending ||
                      (n.callStopWhenPending
                        ? (n.callStopWhenPending = !1)
                        : n.hooks.trigger(n.hooks.eventTypes.end, e));
                };
              this.setPending(!0),
                this.callStopWhenPending && this.setCallStop(!1),
                vt(this.timer),
                c();
            }),
            (e.prototype.doStop = function() {
              var t = this.pending;
              if ((this.setForceStopped(!1), this.setCallStop(!1), t)) {
                this.setPending(!1), vt(this.timer);
                var e = this.translater.getComputedPosition();
                this.setForceStopped(!0),
                  this.setCallStop(!0),
                  this.hooks.trigger(this.hooks.eventTypes.forceStop, e);
              }
              return t;
            }),
            (e.prototype.stop = function() {
              var t = this.doStop();
              t && this.hooks.trigger(this.hooks.eventTypes.callStop);
            }),
            e
          );
        })(Et);
      function zt(t, e, i) {
        var o = i.useTransition,
          n = {};
        return (
          Object.defineProperty(n, "probeType", {
            enumerable: !0,
            configurable: !1,
            get: function() {
              return i.probeType;
            }
          }),
          o ? new Ot(t, e, n) : new Bt(t, e, n)
        );
      }
      var Lt,
        Dt,
        jt,
        At,
        Ht = (function() {
          function t(t, e, i) {
            (this.wrapper = t),
              (this.options = i),
              (this.hooks = new kt([
                "beforeComputeBoundary",
                "computeBoundary",
                "momentum",
                "end",
                "ignoreHasScroll"
              ])),
              this.refresh(e);
          }
          return (
            (t.prototype.start = function() {
              (this.dist = 0), this.setMovingDirection(0), this.setDirection(0);
            }),
            (t.prototype.move = function(t) {
              return (
                (t = this.hasScroll ? t : 0),
                this.setMovingDirection(t),
                this.performDampingAlgorithm(
                  t,
                  this.options.outOfBoundaryDampingFactor
                )
              );
            }),
            (t.prototype.setMovingDirection = function(t) {
              this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0;
            }),
            (t.prototype.setDirection = function(t) {
              this.direction = t > 0 ? -1 : t < 0 ? 1 : 0;
            }),
            (t.prototype.performDampingAlgorithm = function(t, e) {
              var i = this.currentPos + t;
              return (
                (i > this.minScrollPos || i < this.maxScrollPos) &&
                  (i =
                    (i > this.minScrollPos && this.options.bounces[0]) ||
                    (i < this.maxScrollPos && this.options.bounces[1])
                      ? this.currentPos + t * e
                      : i > this.minScrollPos
                      ? this.minScrollPos
                      : this.maxScrollPos),
                i
              );
            }),
            (t.prototype.end = function(t) {
              var e = { duration: 0 },
                i = Math.abs(this.currentPos - this.startPos);
              if (
                this.options.momentum &&
                t < this.options.momentumLimitTime &&
                i > this.options.momentumLimitDistance
              ) {
                var o =
                  (-1 === this.direction && this.options.bounces[0]) ||
                  (1 === this.direction && this.options.bounces[1])
                    ? this.wrapperSize
                    : 0;
                e = this.hasScroll
                  ? this.momentum(
                      this.currentPos,
                      this.startPos,
                      t,
                      this.maxScrollPos,
                      this.minScrollPos,
                      o,
                      this.options
                    )
                  : { destination: this.currentPos, duration: 0 };
              } else this.hooks.trigger(this.hooks.eventTypes.end, e);
              return e;
            }),
            (t.prototype.momentum = function(t, e, i, o, n, r, s) {
              void 0 === s && (s = this.options);
              var a = t - e,
                c = Math.abs(a) / i,
                l = s.deceleration,
                h = s.swipeBounceTime,
                p = s.swipeTime,
                u = Math.min(p, (2 * c) / l),
                d = {
                  destination: t + ((c * c) / l) * (a < 0 ? -1 : 1),
                  duration: u,
                  rate: 15
                };
              return (
                this.hooks.trigger(this.hooks.eventTypes.momentum, d, a),
                d.destination < o
                  ? ((d.destination = r
                      ? Math.max(o - r / 4, o - (r / d.rate) * c)
                      : o),
                    (d.duration = h))
                  : d.destination > n &&
                    ((d.destination = r
                      ? Math.min(n + r / 4, n + (r / d.rate) * c)
                      : n),
                    (d.duration = h)),
                (d.destination = Math.round(d.destination)),
                d
              );
            }),
            (t.prototype.updateDirection = function() {
              var t = this.currentPos - this.absStartPos;
              this.setDirection(t);
            }),
            (t.prototype.refresh = function(t) {
              var e = this.options.rect,
                i = e.size,
                o = e.position,
                n =
                  "static" ===
                  window.getComputedStyle(this.wrapper, null).position,
                r = rt(this.wrapper);
              (this.wrapperSize = this.wrapper[
                "width" === i ? "clientWidth" : "clientHeight"
              ]),
                this.setContent(t);
              var s = rt(this.content);
              (this.contentSize = s[i]),
                (this.relativeOffset = s[o]),
                n && (this.relativeOffset -= r[o]),
                this.computeBoundary(),
                this.setDirection(0);
            }),
            (t.prototype.setContent = function(t) {
              t !== this.content && ((this.content = t), this.resetState());
            }),
            (t.prototype.resetState = function() {
              (this.currentPos = 0),
                (this.startPos = 0),
                (this.dist = 0),
                this.setDirection(0),
                this.setMovingDirection(0),
                this.resetStartPos();
            }),
            (t.prototype.computeBoundary = function() {
              this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
              var t = {
                minScrollPos: 0,
                maxScrollPos: this.wrapperSize - this.contentSize
              };
              t.maxScrollPos < 0 &&
                ((t.maxScrollPos -= this.relativeOffset),
                0 === this.options.specifiedIndexAsContent &&
                  (t.minScrollPos = -this.relativeOffset)),
                this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t),
                (this.minScrollPos = t.minScrollPos),
                (this.maxScrollPos = t.maxScrollPos),
                (this.hasScroll =
                  this.options.scrollable &&
                  this.maxScrollPos < this.minScrollPos),
                !this.hasScroll &&
                  this.minScrollPos < this.maxScrollPos &&
                  ((this.maxScrollPos = this.minScrollPos),
                  (this.contentSize = this.wrapperSize));
            }),
            (t.prototype.updatePosition = function(t) {
              this.currentPos = t;
            }),
            (t.prototype.getCurrentPos = function() {
              return this.currentPos;
            }),
            (t.prototype.checkInBoundary = function() {
              var t = this.adjustPosition(this.currentPos),
                e = t === this.getCurrentPos();
              return { position: t, inBoundary: e };
            }),
            (t.prototype.adjustPosition = function(t) {
              return (
                this.hasScroll ||
                this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)
                  ? t > this.minScrollPos
                    ? (t = this.minScrollPos)
                    : t < this.maxScrollPos && (t = this.maxScrollPos)
                  : (t = this.minScrollPos),
                t
              );
            }),
            (t.prototype.updateStartPos = function() {
              this.startPos = this.currentPos;
            }),
            (t.prototype.updateAbsStartPos = function() {
              this.absStartPos = this.currentPos;
            }),
            (t.prototype.resetStartPos = function() {
              this.updateStartPos(), this.updateAbsStartPos();
            }),
            (t.prototype.getAbsDist = function(t) {
              return (this.dist += t), Math.abs(this.dist);
            }),
            (t.prototype.destroy = function() {
              this.hooks.destroy();
            }),
            t
          );
        })(),
        It =
          ((Lt = {}),
          (Lt["yes"] = function(t) {
            return !0;
          }),
          (Lt["no"] = function(t) {
            return t.preventDefault(), !1;
          }),
          Lt),
        Rt =
          ((Dt = {}),
          (Dt["horizontal"] =
            ((jt = {}),
            (jt["yes"] = "horizontal"),
            (jt["no"] = "vertical"),
            jt)),
          (Dt["vertical"] =
            ((At = {}),
            (At["yes"] = "vertical"),
            (At["no"] = "horizontal"),
            At)),
          Dt),
        Yt = (function() {
          function t(t, e, i) {
            (this.directionLockThreshold = t),
              (this.freeScroll = e),
              (this.eventPassthrough = i),
              this.reset();
          }
          return (
            (t.prototype.reset = function() {
              this.directionLocked = "";
            }),
            (t.prototype.checkMovingDirection = function(t, e, i) {
              return (
                this.computeDirectionLock(t, e), this.handleEventPassthrough(i)
              );
            }),
            (t.prototype.adjustDelta = function(t, e) {
              return (
                "horizontal" === this.directionLocked
                  ? (e = 0)
                  : "vertical" === this.directionLocked && (t = 0),
                { deltaX: t, deltaY: e }
              );
            }),
            (t.prototype.computeDirectionLock = function(t, e) {
              "" !== this.directionLocked ||
                this.freeScroll ||
                (t > e + this.directionLockThreshold
                  ? (this.directionLocked = "horizontal")
                  : e >= t + this.directionLockThreshold
                  ? (this.directionLocked = "vertical")
                  : (this.directionLocked = "none"));
            }),
            (t.prototype.handleEventPassthrough = function(t) {
              var e = Rt[this.directionLocked];
              if (e) {
                if (this.eventPassthrough === e["yes"]) return It["yes"](t);
                if (this.eventPassthrough === e["no"]) return It["no"](t);
              }
              return !1;
            }),
            t
          );
        })(),
        $t = function(t, e, i) {
          return 2 === i
            ? [e, -t]
            : 3 === i
            ? [-t, -e]
            : 4 === i
            ? [-e, t]
            : [t, e];
        },
        Xt = (function() {
          function t(t, e, i, o, n) {
            (this.hooks = new kt([
              "start",
              "beforeMove",
              "scrollStart",
              "scroll",
              "beforeEnd",
              "end",
              "scrollEnd",
              "contentNotMoved",
              "detectMovingDirection",
              "coordinateTransformation"
            ])),
              (this.scrollBehaviorX = t),
              (this.scrollBehaviorY = e),
              (this.actionsHandler = i),
              (this.animater = o),
              (this.options = n),
              (this.directionLockAction = new Yt(
                n.directionLockThreshold,
                n.freeScroll,
                n.eventPassthrough
              )),
              (this.enabled = !0),
              this.bindActionsHandler();
          }
          return (
            (t.prototype.bindActionsHandler = function() {
              var t = this;
              this.actionsHandler.hooks.on(
                this.actionsHandler.hooks.eventTypes.start,
                function(e) {
                  return !t.enabled || t.handleStart(e);
                }
              ),
                this.actionsHandler.hooks.on(
                  this.actionsHandler.hooks.eventTypes.move,
                  function(e) {
                    var i = e.deltaX,
                      o = e.deltaY,
                      n = e.e;
                    if (!t.enabled) return !0;
                    var r = $t(i, o, t.options.quadrant),
                      s = r[0],
                      a = r[1],
                      c = { deltaX: s, deltaY: a };
                    return (
                      t.hooks.trigger(
                        t.hooks.eventTypes.coordinateTransformation,
                        c
                      ),
                      t.handleMove(c.deltaX, c.deltaY, n)
                    );
                  }
                ),
                this.actionsHandler.hooks.on(
                  this.actionsHandler.hooks.eventTypes.end,
                  function(e) {
                    return !t.enabled || t.handleEnd(e);
                  }
                ),
                this.actionsHandler.hooks.on(
                  this.actionsHandler.hooks.eventTypes.click,
                  function(e) {
                    t.enabled && !e._constructed && t.handleClick(e);
                  }
                );
            }),
            (t.prototype.handleStart = function(t) {
              var e = Y();
              (this.fingerMoved = !1),
                (this.contentMoved = !1),
                (this.startTime = e),
                this.directionLockAction.reset(),
                this.scrollBehaviorX.start(),
                this.scrollBehaviorY.start(),
                this.animater.doStop(),
                this.scrollBehaviorX.resetStartPos(),
                this.scrollBehaviorY.resetStartPos(),
                this.hooks.trigger(this.hooks.eventTypes.start, t);
            }),
            (t.prototype.handleMove = function(t, e, i) {
              if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, i)) {
                var o = this.scrollBehaviorX.getAbsDist(t),
                  n = this.scrollBehaviorY.getAbsDist(e),
                  r = Y();
                if (this.checkMomentum(o, n, r)) return !0;
                if (this.directionLockAction.checkMovingDirection(o, n, i))
                  return this.actionsHandler.setInitiated(), !0;
                var s = this.directionLockAction.adjustDelta(t, e),
                  a = this.scrollBehaviorX.getCurrentPos(),
                  c = this.scrollBehaviorX.move(s.deltaX),
                  l = this.scrollBehaviorY.getCurrentPos(),
                  h = this.scrollBehaviorY.move(s.deltaY);
                if (
                  !this.hooks.trigger(
                    this.hooks.eventTypes.detectMovingDirection
                  )
                ) {
                  this.fingerMoved || (this.fingerMoved = !0);
                  var p = c !== a || h !== l;
                  this.contentMoved ||
                    p ||
                    this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
                    !this.contentMoved &&
                      p &&
                      ((this.contentMoved = !0),
                      this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
                    this.contentMoved &&
                      p &&
                      (this.animater.translate({ x: c, y: h }),
                      this.dispatchScroll(r));
                }
              }
            }),
            (t.prototype.dispatchScroll = function(t) {
              t - this.startTime > this.options.momentumLimitTime &&
                ((this.startTime = t),
                this.scrollBehaviorX.updateStartPos(),
                this.scrollBehaviorY.updateStartPos(),
                1 === this.options.probeType &&
                  this.hooks.trigger(
                    this.hooks.eventTypes.scroll,
                    this.getCurrentPos()
                  )),
                this.options.probeType > 1 &&
                  this.hooks.trigger(
                    this.hooks.eventTypes.scroll,
                    this.getCurrentPos()
                  );
            }),
            (t.prototype.checkMomentum = function(t, e, i) {
              return (
                i - this.endTime > this.options.momentumLimitTime &&
                e < this.options.momentumLimitDistance &&
                t < this.options.momentumLimitDistance
              );
            }),
            (t.prototype.handleEnd = function(t) {
              if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
                var e = this.getCurrentPos();
                if (
                  (this.scrollBehaviorX.updateDirection(),
                  this.scrollBehaviorY.updateDirection(),
                  this.hooks.trigger(this.hooks.eventTypes.end, t, e))
                )
                  return !0;
                (e = this.ensureIntegerPos(e)),
                  this.animater.translate(e),
                  (this.endTime = Y());
                var i = this.endTime - this.startTime;
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, i);
              }
            }),
            (t.prototype.ensureIntegerPos = function(t) {
              this.ensuringInteger = !0;
              var e = t.x,
                i = t.y,
                o = this.scrollBehaviorX,
                n = o.minScrollPos,
                r = o.maxScrollPos,
                s = this.scrollBehaviorY,
                a = s.minScrollPos,
                c = s.maxScrollPos;
              return (
                (e = e > 0 ? Math.ceil(e) : Math.floor(e)),
                (i = i > 0 ? Math.ceil(i) : Math.floor(i)),
                (e = F(e, r, n)),
                (i = F(i, c, a)),
                { x: e, y: i }
              );
            }),
            (t.prototype.handleClick = function(t) {
              st(t.target, this.options.preventDefaultException) ||
                (t.preventDefault(), t.stopPropagation());
            }),
            (t.prototype.getCurrentPos = function() {
              return {
                x: this.scrollBehaviorX.getCurrentPos(),
                y: this.scrollBehaviorY.getCurrentPos()
              };
            }),
            (t.prototype.refresh = function() {
              this.endTime = 0;
            }),
            (t.prototype.destroy = function() {
              this.hooks.destroy();
            }),
            t
          );
        })();
      function Ft(t) {
        var e = [
          "click",
          "bindToWrapper",
          "disableMouse",
          "disableTouch",
          "preventDefault",
          "stopPropagation",
          "tagException",
          "preventDefaultException",
          "autoEndDistance"
        ].reduce(function(e, i) {
          return (e[i] = t[i]), e;
        }, {});
        return e;
      }
      function Nt(t, e, i, o) {
        var n = [
          "momentum",
          "momentumLimitTime",
          "momentumLimitDistance",
          "deceleration",
          "swipeBounceTime",
          "swipeTime",
          "outOfBoundaryDampingFactor",
          "specifiedIndexAsContent"
        ].reduce(function(e, i) {
          return (e[i] = t[i]), e;
        }, {});
        return (n.scrollable = !!t[e]), (n.bounces = i), (n.rect = o), n;
      }
      function Wt(t, e, i) {
        i.forEach(function(i) {
          var o, n;
          "string" === typeof i
            ? (o = n = i)
            : ((o = i.source), (n = i.target)),
            t.on(o, function() {
              for (var t = [], i = 0; i < arguments.length; i++)
                t[i] = arguments[i];
              return e.trigger.apply(e, M([n], t));
            });
        });
      }
      function Vt(t, e) {
        for (var i = Object.keys(t), o = 0, n = i; o < n.length; o++) {
          var r = n[o];
          if (t[r] !== e[r]) return !1;
        }
        return !0;
      }
      var Jt = 1,
        Ut = (function() {
          function t(t, e, i) {
            (this.wrapper = t),
              (this.content = e),
              (this.resizeTimeout = 0),
              (this.hooks = new kt([
                "beforeStart",
                "beforeMove",
                "beforeScrollStart",
                "scrollStart",
                "scroll",
                "beforeEnd",
                "scrollEnd",
                "resize",
                "touchEnd",
                "end",
                "flick",
                "scrollCancel",
                "momentum",
                "scrollTo",
                "minDistanceScroll",
                "scrollToElement",
                "beforeRefresh"
              ])),
              (this.options = i);
            var o = this.options.bounce,
              n = o.left,
              r = o.right,
              s = o.top,
              a = o.bottom;
            (this.scrollBehaviorX = new Ht(
              t,
              e,
              Nt(i, "scrollX", [n, r], { size: "width", position: "left" })
            )),
              (this.scrollBehaviorY = new Ht(
                t,
                e,
                Nt(i, "scrollY", [s, a], { size: "height", position: "top" })
              )),
              (this.translater = new Ct(this.content)),
              (this.animater = zt(this.content, this.translater, this.options)),
              (this.actionsHandler = new _t(
                this.options.bindToTarget ? this.content : t,
                Ft(this.options)
              )),
              (this.actions = new Xt(
                this.scrollBehaviorX,
                this.scrollBehaviorY,
                this.actionsHandler,
                this.animater,
                this.options
              ));
            var c = this.resize.bind(this);
            (this.resizeRegister = new Tt(window, [
              { name: "orientationchange", handler: c },
              { name: "resize", handler: c }
            ])),
              this.registerTransitionEnd(),
              this.init();
          }
          return (
            (t.prototype.init = function() {
              var t = this;
              this.bindTranslater(),
                this.bindAnimater(),
                this.bindActions(),
                this.hooks.on(this.hooks.eventTypes.scrollEnd, function() {
                  t.togglePointerEvents(!0);
                });
            }),
            (t.prototype.registerTransitionEnd = function() {
              this.transitionEndRegister = new Tt(this.content, [
                {
                  name: ot.transitionEnd,
                  handler: this.transitionEnd.bind(this)
                }
              ]);
            }),
            (t.prototype.bindTranslater = function() {
              var t = this,
                e = this.translater.hooks;
              e.on(e.eventTypes.beforeTranslate, function(e) {
                t.options.translateZ && e.push(t.options.translateZ);
              }),
                e.on(e.eventTypes.translate, function(e) {
                  var i = t.getCurrentPos();
                  t.updatePositions(e),
                    !0 !== t.actions.ensuringInteger
                      ? (e.x === i.x && e.y === i.y) ||
                        t.togglePointerEvents(!1)
                      : (t.actions.ensuringInteger = !1);
                });
            }),
            (t.prototype.bindAnimater = function() {
              var t = this;
              this.animater.hooks.on(
                this.animater.hooks.eventTypes.end,
                function(e) {
                  t.resetPosition(t.options.bounceTime) ||
                    (t.animater.setPending(!1),
                    t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e));
                }
              ),
                Wt(this.animater.hooks, this.hooks, [
                  {
                    source: this.animater.hooks.eventTypes.move,
                    target: this.hooks.eventTypes.scroll
                  },
                  {
                    source: this.animater.hooks.eventTypes.forceStop,
                    target: this.hooks.eventTypes.scrollEnd
                  }
                ]);
            }),
            (t.prototype.bindActions = function() {
              var t = this,
                e = this.actions;
              Wt(e.hooks, this.hooks, [
                {
                  source: e.hooks.eventTypes.start,
                  target: this.hooks.eventTypes.beforeStart
                },
                {
                  source: e.hooks.eventTypes.start,
                  target: this.hooks.eventTypes.beforeScrollStart
                },
                {
                  source: e.hooks.eventTypes.beforeMove,
                  target: this.hooks.eventTypes.beforeMove
                },
                {
                  source: e.hooks.eventTypes.scrollStart,
                  target: this.hooks.eventTypes.scrollStart
                },
                {
                  source: e.hooks.eventTypes.scroll,
                  target: this.hooks.eventTypes.scroll
                },
                {
                  source: e.hooks.eventTypes.beforeEnd,
                  target: this.hooks.eventTypes.beforeEnd
                }
              ]),
                e.hooks.on(e.hooks.eventTypes.end, function(i, o) {
                  return (
                    t.hooks.trigger(t.hooks.eventTypes.touchEnd, o),
                    !!t.hooks.trigger(t.hooks.eventTypes.end, o) ||
                      !(
                        e.fingerMoved ||
                        (t.hooks.trigger(t.hooks.eventTypes.scrollCancel),
                        !t.checkClick(i))
                      ) ||
                        (t.resetPosition(t.options.bounceTime, pt.bounce)
                          ? (t.animater.setForceStopped(!1), !0)
                          : void 0)
                  );
                }),
                e.hooks.on(e.hooks.eventTypes.scrollEnd, function(i, o) {
                  var n = Math.abs(i.x - t.scrollBehaviorX.startPos),
                    r = Math.abs(i.y - t.scrollBehaviorY.startPos);
                  if (t.checkFlick(o, n, r))
                    return (
                      t.animater.setForceStopped(!1),
                      void t.hooks.trigger(t.hooks.eventTypes.flick)
                    );
                  t.momentum(i, o)
                    ? t.animater.setForceStopped(!1)
                    : (e.contentMoved &&
                        t.hooks.trigger(t.hooks.eventTypes.scrollEnd, i),
                      t.animater.forceStopped &&
                        t.animater.setForceStopped(!1));
                });
            }),
            (t.prototype.checkFlick = function(t, e, i) {
              var o = 1;
              if (
                this.hooks.events.flick.length > 1 &&
                t < this.options.flickLimitTime &&
                e < this.options.flickLimitDistance &&
                i < this.options.flickLimitDistance &&
                (i > o || e > o)
              )
                return !0;
            }),
            (t.prototype.momentum = function(t, e) {
              var i = { time: 0, easing: pt.swiper, newX: t.x, newY: t.y },
                o = this.scrollBehaviorX.end(e),
                n = this.scrollBehaviorY.end(e);
              if (
                ((i.newX = X(o.destination) ? i.newX : o.destination),
                (i.newY = X(n.destination) ? i.newY : n.destination),
                (i.time = Math.max(o.duration, n.duration)),
                this.hooks.trigger(this.hooks.eventTypes.momentum, i, this),
                i.newX !== t.x || i.newY !== t.y)
              )
                return (
                  (i.newX > this.scrollBehaviorX.minScrollPos ||
                    i.newX < this.scrollBehaviorX.maxScrollPos ||
                    i.newY > this.scrollBehaviorY.minScrollPos ||
                    i.newY < this.scrollBehaviorY.maxScrollPos) &&
                    (i.easing = pt.swipeBounce),
                  this.scrollTo(i.newX, i.newY, i.time, i.easing),
                  !0
                );
            }),
            (t.prototype.checkClick = function(t) {
              var e = { preventClick: this.animater.forceStopped };
              if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
                return this.animater.setForceStopped(!1), !0;
              if (!e.preventClick) {
                var i = this.options.dblclick,
                  o = !1;
                if (i && this.lastClickTime) {
                  var n = i.delay,
                    r = void 0 === n ? 300 : n;
                  Y() - this.lastClickTime < r && ((o = !0), ht(t));
                }
                return (
                  this.options.tap && ct(t, this.options.tap),
                  this.options.click &&
                    !st(t.target, this.options.preventDefaultException) &&
                    lt(t),
                  (this.lastClickTime = o ? null : Y()),
                  !0
                );
              }
              return !1;
            }),
            (t.prototype.resize = function() {
              var t = this;
              this.actions.enabled &&
                (j && (this.wrapper.scrollTop = 0),
                clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = window.setTimeout(function() {
                  t.hooks.trigger(t.hooks.eventTypes.resize);
                }, this.options.resizePolling)));
            }),
            (t.prototype.transitionEnd = function(t) {
              if (t.target === this.content && this.animater.pending) {
                var e = this.animater;
                e.transitionTime(),
                  this.resetPosition(this.options.bounceTime, pt.bounce) ||
                    (this.animater.setPending(!1),
                    3 !== this.options.probeType &&
                      this.hooks.trigger(
                        this.hooks.eventTypes.scrollEnd,
                        this.getCurrentPos()
                      ));
              }
            }),
            (t.prototype.togglePointerEvents = function(t) {
              void 0 === t && (t = !0);
              for (
                var e = this.content.children.length
                    ? this.content.children
                    : [this.content],
                  i = t ? "auto" : "none",
                  o = 0;
                o < e.length;
                o++
              ) {
                var n = e[o];
                n.isBScrollContainer || (n.style.pointerEvents = i);
              }
            }),
            (t.prototype.refresh = function(t) {
              var e = this.setContent(t);
              this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
                this.scrollBehaviorX.refresh(t),
                this.scrollBehaviorY.refresh(t),
                e &&
                  (this.translater.setContent(t),
                  this.animater.setContent(t),
                  this.transitionEndRegister.destroy(),
                  this.registerTransitionEnd(),
                  this.options.bindToTarget &&
                    this.actionsHandler.setContent(t)),
                this.actions.refresh(),
                (this.wrapperOffset = G(this.wrapper));
            }),
            (t.prototype.setContent = function(t) {
              var e = t !== this.content;
              return e && (this.content = t), e;
            }),
            (t.prototype.scrollBy = function(t, e, i, o) {
              void 0 === i && (i = 0);
              var n = this.getCurrentPos(),
                r = n.x,
                s = n.y;
              (o = o || pt.bounce),
                (t += r),
                (e += s),
                this.scrollTo(t, e, i, o);
            }),
            (t.prototype.scrollTo = function(t, e, i, o, n) {
              void 0 === i && (i = 0),
                void 0 === o && (o = pt.bounce),
                void 0 === n && (n = { start: {}, end: {} });
              var r = this.options.useTransition ? o.style : o.fn,
                s = this.getCurrentPos(),
                a = E({ x: s.x, y: s.y }, n.start),
                c = E({ x: t, y: e }, n.end);
              if (
                (this.hooks.trigger(this.hooks.eventTypes.scrollTo, c),
                !Vt(a, c))
              ) {
                var l = Math.abs(c.x - a.x),
                  h = Math.abs(c.y - a.y);
                l < Jt &&
                  h < Jt &&
                  ((i = 0),
                  this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
                  this.animater.move(a, c, i, r);
              }
            }),
            (t.prototype.scrollToElement = function(t, e, i, o, n) {
              var r = J(t),
                s = G(r),
                a = function(t, e, i) {
                  return "number" === typeof t
                    ? t
                    : t
                    ? Math.round(e / 2 - i / 2)
                    : 0;
                };
              (i = a(i, r.offsetWidth, this.wrapper.offsetWidth)),
                (o = a(o, r.offsetHeight, this.wrapper.offsetHeight));
              var c = function(t, e, i, o) {
                return (t -= e), (t = o.adjustPosition(t - i)), t;
              };
              (s.left = c(
                s.left,
                this.wrapperOffset.left,
                i,
                this.scrollBehaviorX
              )),
                (s.top = c(
                  s.top,
                  this.wrapperOffset.top,
                  o,
                  this.scrollBehaviorY
                )),
                this.hooks.trigger(
                  this.hooks.eventTypes.scrollToElement,
                  r,
                  s
                ) || this.scrollTo(s.left, s.top, e, n);
            }),
            (t.prototype.resetPosition = function(t, e) {
              void 0 === t && (t = 0), void 0 === e && (e = pt.bounce);
              var i = this.scrollBehaviorX.checkInBoundary(),
                o = i.position,
                n = i.inBoundary,
                r = this.scrollBehaviorY.checkInBoundary(),
                s = r.position,
                a = r.inBoundary;
              return (
                (!n || !a) &&
                (A && this.reflow(), this.scrollTo(o, s, t, e), !0)
              );
            }),
            (t.prototype.reflow = function() {
              this._reflow = this.content.offsetHeight;
            }),
            (t.prototype.updatePositions = function(t) {
              this.scrollBehaviorX.updatePosition(t.x),
                this.scrollBehaviorY.updatePosition(t.y);
            }),
            (t.prototype.getCurrentPos = function() {
              return this.actions.getCurrentPos();
            }),
            (t.prototype.enable = function() {
              this.actions.enabled = !0;
            }),
            (t.prototype.disable = function() {
              vt(this.animater.timer), (this.actions.enabled = !1);
            }),
            (t.prototype.destroy = function() {
              var t = this,
                e = [
                  "resizeRegister",
                  "transitionEndRegister",
                  "actionsHandler",
                  "actions",
                  "hooks",
                  "animater",
                  "translater",
                  "scrollBehaviorX",
                  "scrollBehaviorY"
                ];
              e.forEach(function(e) {
                return t[e].destroy();
              });
            }),
            t
          );
        })(),
        Kt = (function(t) {
          function e(e, i) {
            var o =
                t.call(this, [
                  "refresh",
                  "contentChanged",
                  "enable",
                  "disable",
                  "beforeScrollStart",
                  "scrollStart",
                  "scroll",
                  "scrollEnd",
                  "scrollCancel",
                  "touchEnd",
                  "flick",
                  "destroy"
                ]) || this,
              n = J(e);
            return n
              ? ((o.plugins = {}),
                (o.options = new qt().merge(i).process()),
                o.setContent(n).valid
                  ? ((o.hooks = new kt([
                      "refresh",
                      "enable",
                      "disable",
                      "destroy",
                      "beforeInitialScrollTo",
                      "contentChanged"
                    ])),
                    o.init(n),
                    o)
                  : o)
              : (B("Can not resolve the wrapper DOM."), o);
          }
          return (
            C(e, t),
            (e.use = function(t) {
              var i = t.pluginName,
                o = e.plugins.some(function(e) {
                  return t === e.ctor;
                });
              return o
                ? e
                : X(i)
                ? (B(
                    "Plugin Class must specify plugin's name in static property by 'pluginName' field."
                  ),
                  e)
                : ((e.pluginsMap[i] = !0),
                  e.plugins.push({
                    name: i,
                    applyOrder: t.applyOrder,
                    ctor: t
                  }),
                  e);
            }),
            (e.prototype.setContent = function(t) {
              var e = !1,
                i = !0,
                o = t.children[this.options.specifiedIndexAsContent];
              return (
                o
                  ? ((e = this.content !== o), e && (this.content = o))
                  : (B(
                      "The wrapper need at least one child element to be content element to scroll."
                    ),
                    (i = !1)),
                { valid: i, contentChanged: e }
              );
            }),
            (e.prototype.init = function(t) {
              var e = this;
              (this.wrapper = t),
                (t.isBScrollContainer = !0),
                (this.scroller = new Ut(t, this.content, this.options)),
                this.scroller.hooks.on(
                  this.scroller.hooks.eventTypes.resize,
                  function() {
                    e.refresh();
                  }
                ),
                this.eventBubbling(),
                this.handleAutoBlur(),
                this.enable(),
                this.proxy(O),
                this.applyPlugins(),
                this.refreshWithoutReset(this.content);
              var i = this.options,
                o = i.startX,
                n = i.startY,
                r = { x: o, y: n };
              this.hooks.trigger(
                this.hooks.eventTypes.beforeInitialScrollTo,
                r
              ) || this.scroller.scrollTo(r.x, r.y);
            }),
            (e.prototype.applyPlugins = function() {
              var t = this,
                i = this.options;
              e.plugins
                .sort(function(t, e) {
                  var i,
                    o = ((i = {}), (i["pre"] = -1), (i["post"] = 1), i),
                    n = t.applyOrder ? o[t.applyOrder] : 0,
                    r = e.applyOrder ? o[e.applyOrder] : 0;
                  return n - r;
                })
                .forEach(function(e) {
                  var o = e.ctor;
                  i[e.name] &&
                    "function" === typeof o &&
                    (t.plugins[e.name] = new o(t));
                });
            }),
            (e.prototype.handleAutoBlur = function() {
              this.options.autoBlur &&
                this.on(this.eventTypes.beforeScrollStart, function() {
                  var t = document.activeElement;
                  !t ||
                    ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                    t.blur();
                });
            }),
            (e.prototype.eventBubbling = function() {
              Wt(this.scroller.hooks, this, [
                this.eventTypes.beforeScrollStart,
                this.eventTypes.scrollStart,
                this.eventTypes.scroll,
                this.eventTypes.scrollEnd,
                this.eventTypes.scrollCancel,
                this.eventTypes.touchEnd,
                this.eventTypes.flick
              ]);
            }),
            (e.prototype.refreshWithoutReset = function(t) {
              this.scroller.refresh(t),
                this.hooks.trigger(this.hooks.eventTypes.refresh, t),
                this.trigger(this.eventTypes.refresh, t);
            }),
            (e.prototype.proxy = function(t) {
              var e = this;
              t.forEach(function(t) {
                var i = t.key,
                  o = t.sourceKey;
                xt(e, o, i);
              });
            }),
            (e.prototype.refresh = function() {
              var t = this.setContent(this.wrapper),
                e = t.contentChanged,
                i = t.valid;
              if (i) {
                var o = this.content;
                this.refreshWithoutReset(o),
                  e &&
                    (this.hooks.trigger(
                      this.hooks.eventTypes.contentChanged,
                      o
                    ),
                    this.trigger(this.eventTypes.contentChanged, o)),
                  this.scroller.resetPosition();
              }
            }),
            (e.prototype.enable = function() {
              this.scroller.enable(),
                this.hooks.trigger(this.hooks.eventTypes.enable),
                this.trigger(this.eventTypes.enable);
            }),
            (e.prototype.disable = function() {
              this.scroller.disable(),
                this.hooks.trigger(this.hooks.eventTypes.disable),
                this.trigger(this.eventTypes.disable);
            }),
            (e.prototype.destroy = function() {
              this.hooks.trigger(this.hooks.eventTypes.destroy),
                this.trigger(this.eventTypes.destroy),
                this.scroller.destroy();
            }),
            (e.prototype.eventRegister = function(t) {
              this.registerType(t);
            }),
            (e.plugins = []),
            (e.pluginsMap = {}),
            e
          );
        })(kt);
      function Gt(t, e) {
        var i = new Kt(t, e);
        return i;
      }
      (Gt.use = Kt.use),
        (Gt.plugins = Kt.plugins),
        (Gt.pluginsMap = Kt.pluginsMap);
      var Qt = Gt,
        Zt = Qt;
      /*!
       * better-scroll / mouse-wheel
       * (c) 2016-2021 ustbhuangyi
       * Released under the MIT License.
       */
      function te(t) {
        console.error("[BScroll warn]: " + t);
      }
      var ee = "undefined" !== typeof window,
        ie = ee && navigator.userAgent.toLowerCase();
      ie && /wechatdevtools/.test(ie),
        ie && ie.indexOf("android"),
        (function() {
          if ("string" === typeof ie) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec(ie);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
        })();
      var oe = !1;
      if (ee) {
        var ne = "test-passive";
        try {
          var re = {};
          Object.defineProperty(re, "passive", {
            get: function() {
              oe = !0;
            }
          }),
            window.addEventListener(ne, function() {}, re);
        } catch (In) {}
      }
      var se = function(t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        ae = ee && document.createElement("div").style,
        ce = (function() {
          if (!ee) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== ae[o.value]) return o.key;
          }
          return !1;
        })();
      function le(t) {
        return !1 === ce
          ? t
          : "standard" === ce
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : ce + t.charAt(0).toUpperCase() + t.substr(1);
      }
      function he(t, e, i, o) {
        var n = oe ? { passive: !1, capture: !!o } : !!o;
        t.addEventListener(e, i, n);
      }
      function pe(t, e, i, o) {
        t.removeEventListener(e, i, { capture: !!o });
      }
      ce && "standard" !== ce && ce.toLowerCase();
      le("transform"), le("transition");
      function ue(t, e) {
        for (var i in e) if (e[i].test(t[i])) return !0;
        return !1;
      }
      ee && le("perspective"),
        le("transitionTimingFunction"),
        le("transitionDuration"),
        le("transitionDelay"),
        le("transformOrigin"),
        le("transitionEnd"),
        le("transitionProperty");
      var de = (function() {
          function t(t, e) {
            (this.wrapper = t), (this.events = e), this.addDOMEvents();
          }
          return (
            (t.prototype.destroy = function() {
              this.removeDOMEvents(), (this.events = []);
            }),
            (t.prototype.addDOMEvents = function() {
              this.handleDOMEvents(he);
            }),
            (t.prototype.removeDOMEvents = function() {
              this.handleDOMEvents(pe);
            }),
            (t.prototype.handleDOMEvents = function(t) {
              var e = this,
                i = this.wrapper;
              this.events.forEach(function(o) {
                t(i, o.name, e, !!o.capture);
              });
            }),
            (t.prototype.handleEvent = function(t) {
              var e = t.type;
              this.events.some(function(i) {
                return i.name === e && (i.handler(t), !0);
              });
            }),
            t
          );
        })(),
        fe = (function() {
          function t(t) {
            (this.scroll = t),
              (this.wheelEndTimer = 0),
              (this.wheelMoveTimer = 0),
              (this.wheelStart = !1),
              this.init();
          }
          return (
            (t.prototype.init = function() {
              this.handleBScroll(),
                this.handleOptions(),
                this.handleHooks(),
                this.registerEvent();
            }),
            (t.prototype.handleBScroll = function() {
              this.scroll.registerType([
                "alterOptions",
                "mousewheelStart",
                "mousewheelMove",
                "mousewheelEnd"
              ]);
            }),
            (t.prototype.handleOptions = function() {
              var t =
                  !0 === this.scroll.options.mouseWheel
                    ? {}
                    : this.scroll.options.mouseWheel,
                e = {
                  speed: 20,
                  invert: !1,
                  easeTime: 300,
                  discreteTime: 400,
                  throttleTime: 0,
                  dampingFactor: 0.1
                };
              this.mouseWheelOpt = se(e, t);
            }),
            (t.prototype.handleHooks = function() {
              (this.hooksFn = []),
                this.registerHooks(this.scroll.hooks, "destroy", this.destroy);
            }),
            (t.prototype.registerEvent = function() {
              this.eventRegister = new de(this.scroll.scroller.wrapper, [
                { name: "wheel", handler: this.wheelHandler.bind(this) },
                { name: "mousewheel", handler: this.wheelHandler.bind(this) },
                {
                  name: "DOMMouseScroll",
                  handler: this.wheelHandler.bind(this)
                }
              ]);
            }),
            (t.prototype.registerHooks = function(t, e, i) {
              t.on(e, i, this), this.hooksFn.push([t, e, i]);
            }),
            (t.prototype.wheelHandler = function(t) {
              if (this.scroll.enabled) {
                this.beforeHandler(t),
                  this.wheelStart ||
                    (this.wheelStartHandler(t), (this.wheelStart = !0));
                var e = this.getWheelDelta(t);
                this.wheelMoveHandler(e), this.wheelEndDetector(e);
              }
            }),
            (t.prototype.wheelStartHandler = function(t) {
              this.cleanCache();
              var e = this.scroll.scroller,
                i = e.scrollBehaviorX,
                o = e.scrollBehaviorY;
              i.setMovingDirection(0),
                o.setMovingDirection(0),
                i.setDirection(0),
                o.setDirection(0),
                this.scroll.trigger(
                  this.scroll.eventTypes.alterOptions,
                  this.mouseWheelOpt
                ),
                this.scroll.trigger(this.scroll.eventTypes.mousewheelStart);
            }),
            (t.prototype.cleanCache = function() {
              this.deltaCache = [];
            }),
            (t.prototype.wheelMoveHandler = function(t) {
              var e = this,
                i = this.mouseWheelOpt,
                o = i.throttleTime,
                n = i.dampingFactor;
              if (o && this.wheelMoveTimer) this.deltaCache.push(t);
              else {
                var r = this.deltaCache.reduce(
                  function(t, e) {
                    return { x: t.x + e.x, y: t.y + e.y };
                  },
                  { x: 0, y: 0 }
                );
                this.cleanCache();
                var s = this.scroll.scroller,
                  a = s.scrollBehaviorX,
                  c = s.scrollBehaviorY;
                a.setMovingDirection(-t.directionX),
                  c.setMovingDirection(-t.directionY),
                  a.setDirection(t.x),
                  c.setDirection(t.y);
                var l = a.performDampingAlgorithm(Math.round(t.x) + r.x, n),
                  h = c.performDampingAlgorithm(Math.round(t.y) + r.x, n);
                if (
                  !this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
                    x: l,
                    y: h
                  })
                ) {
                  var p = this.getEaseTime();
                  (l === this.scroll.x && h === this.scroll.y) ||
                    this.scroll.scrollTo(l, h, p);
                }
                o &&
                  (this.wheelMoveTimer = window.setTimeout(function() {
                    e.wheelMoveTimer = 0;
                  }, o));
              }
            }),
            (t.prototype.wheelEndDetector = function(t) {
              var e = this;
              window.clearTimeout(this.wheelEndTimer),
                (this.wheelEndTimer = window.setTimeout(function() {
                  (e.wheelStart = !1),
                    window.clearTimeout(e.wheelMoveTimer),
                    (e.wheelMoveTimer = 0),
                    e.scroll.trigger(e.scroll.eventTypes.mousewheelEnd, t);
                }, this.mouseWheelOpt.discreteTime));
            }),
            (t.prototype.getWheelDelta = function(t) {
              var e = this.mouseWheelOpt,
                i = e.speed,
                o = e.invert,
                n = 0,
                r = 0,
                s = o ? -1 : 1;
              switch (!0) {
                case "deltaX" in t:
                  1 === t.deltaMode
                    ? ((n = -t.deltaX * i), (r = -t.deltaY * i))
                    : ((n = -t.deltaX), (r = -t.deltaY));
                  break;
                case "wheelDeltaX" in t:
                  (n = (t.wheelDeltaX / 120) * i),
                    (r = (t.wheelDeltaY / 120) * i);
                  break;
                case "wheelDelta" in t:
                  n = r = (t.wheelDelta / 120) * i;
                  break;
                case "detail" in t:
                  n = r = (-t.detail / 3) * i;
                  break;
              }
              (n *= s),
                (r *= s),
                this.scroll.hasVerticalScroll ||
                  (Math.abs(r) > Math.abs(n) && (n = r), (r = 0)),
                this.scroll.hasHorizontalScroll || (n = 0);
              var a = n > 0 ? -1 : n < 0 ? 1 : 0,
                c = r > 0 ? -1 : r < 0 ? 1 : 0;
              return { x: n, y: r, directionX: a, directionY: c };
            }),
            (t.prototype.beforeHandler = function(t) {
              var e = this.scroll.options,
                i = e.preventDefault,
                o = e.stopPropagation,
                n = e.preventDefaultException;
              i && !ue(t.target, n) && t.preventDefault(),
                o && t.stopPropagation();
            }),
            (t.prototype.getEaseTime = function() {
              var t = 100,
                e = this.mouseWheelOpt.easeTime;
              return (
                e < t &&
                  te(
                    "easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times."
                  ),
                Math.max(e, t)
              );
            }),
            (t.prototype.destroy = function() {
              this.eventRegister.destroy(),
                window.clearTimeout(this.wheelEndTimer),
                window.clearTimeout(this.wheelMoveTimer),
                this.hooksFn.forEach(function(t) {
                  var e = t[0],
                    i = t[1],
                    o = t[2];
                  e.off(i, o);
                });
            }),
            (t.pluginName = "mouseWheel"),
            (t.applyOrder = "pre"),
            t
          );
        })(),
        me = fe,
        ve = function() {
          return (
            (ve =
              Object.assign ||
              function(t) {
                for (var e, i = 1, o = arguments.length; i < o; i++)
                  for (var n in ((e = arguments[i]), e))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }),
            ve.apply(this, arguments)
          );
        };
      function ge() {
        for (var t = 0, e = 0, i = arguments.length; e < i; e++)
          t += arguments[e].length;
        var o = Array(t),
          n = 0;
        for (e = 0; e < i; e++)
          for (var r = arguments[e], s = 0, a = r.length; s < a; s++, n++)
            o[n] = r[s];
        return o;
      }
      function ye(t) {
        console.error("[BScroll warn]: " + t);
      }
      var be = "undefined" !== typeof window,
        we = be && navigator.userAgent.toLowerCase();
      we && /wechatdevtools/.test(we),
        we && we.indexOf("android"),
        (function() {
          if ("string" === typeof we) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec(we);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
        })();
      var xe = !1;
      if (be) {
        var ke = "test-passive";
        try {
          var Te = {};
          Object.defineProperty(Te, "passive", {
            get: function() {
              xe = !0;
            }
          }),
            window.addEventListener(ke, function() {}, Te);
        } catch (In) {}
      }
      function Se() {
        return window.performance &&
          window.performance.now &&
          window.performance.timing
          ? window.performance.now() + window.performance.timing.navigationStart
          : +new Date();
      }
      var qe = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      };
      function _e(t, e, i) {
        return t < e ? e : t > i ? i : t;
      }
      var Pe = be && document.createElement("div").style,
        Ce = (function() {
          if (!be) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== Pe[o.value]) return o.key;
          }
          return !1;
        })();
      function Ee(t) {
        return !1 === Ce
          ? t
          : "standard" === Ce
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : Ce + t.charAt(0).toUpperCase() + t.substr(1);
      }
      function Me(t, e, i, o) {
        var n = xe ? { passive: !1, capture: !!o } : !!o;
        t.addEventListener(e, i, n);
      }
      function Oe(t, e, i, o) {
        t.removeEventListener(e, i, { capture: !!o });
      }
      Ce && "standard" !== Ce && Ce.toLowerCase();
      var Be = Ee("transform"),
        ze = Ee("transition");
      be && Ee("perspective");
      var Le = {
          transform: Be,
          transition: ze,
          transitionTimingFunction: Ee("transitionTimingFunction"),
          transitionDuration: Ee("transitionDuration"),
          transitionDelay: Ee("transitionDelay"),
          transformOrigin: Ee("transformOrigin"),
          transitionEnd: Ee("transitionEnd"),
          transitionProperty: Ee("transitionProperty")
        },
        De = (function() {
          function t(t) {
            (this.events = {}), (this.eventTypes = {}), this.registerType(t);
          }
          return (
            (t.prototype.on = function(t, e, i) {
              return (
                void 0 === i && (i = this),
                this.hasType(t),
                this.events[t] || (this.events[t] = []),
                this.events[t].push([e, i]),
                this
              );
            }),
            (t.prototype.once = function(t, e, i) {
              var o = this;
              void 0 === i && (i = this), this.hasType(t);
              var n = function() {
                for (var r = [], s = 0; s < arguments.length; s++)
                  r[s] = arguments[s];
                o.off(t, n);
                var a = e.apply(i, r);
                if (!0 === a) return a;
              };
              return (n.fn = e), this.on(t, n), this;
            }),
            (t.prototype.off = function(t, e) {
              if (!t && !e) return (this.events = {}), this;
              if (t) {
                if ((this.hasType(t), !e)) return (this.events[t] = []), this;
                var i = this.events[t];
                if (!i) return this;
                var o = i.length;
                while (o--)
                  (i[o][0] === e || (i[o][0] && i[o][0].fn === e)) &&
                    i.splice(o, 1);
                return this;
              }
            }),
            (t.prototype.trigger = function(t) {
              for (var e = [], i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
              this.hasType(t);
              var o = this.events[t];
              if (o)
                for (var n, r = o.length, s = ge(o), a = 0; a < r; a++) {
                  var c = s[a],
                    l = c[0],
                    h = c[1];
                  if (l && ((n = l.apply(h, e)), !0 === n)) return n;
                }
            }),
            (t.prototype.registerType = function(t) {
              var e = this;
              t.forEach(function(t) {
                e.eventTypes[t] = t;
              });
            }),
            (t.prototype.destroy = function() {
              (this.events = {}), (this.eventTypes = {});
            }),
            (t.prototype.hasType = function(t) {
              var e = this.eventTypes,
                i = e[t] === t;
              i ||
                ye(
                  'EventEmitter has used unknown event type: "' +
                    t +
                    '", should be oneof [' +
                    Object.keys(e).map(function(t) {
                      return JSON.stringify(t);
                    }) +
                    "]"
                );
            }),
            t
          );
        })(),
        je = (function() {
          function t(t, e) {
            (this.wrapper = t), (this.events = e), this.addDOMEvents();
          }
          return (
            (t.prototype.destroy = function() {
              this.removeDOMEvents(), (this.events = []);
            }),
            (t.prototype.addDOMEvents = function() {
              this.handleDOMEvents(Me);
            }),
            (t.prototype.removeDOMEvents = function() {
              this.handleDOMEvents(Oe);
            }),
            (t.prototype.handleDOMEvents = function(t) {
              var e = this,
                i = this.wrapper;
              this.events.forEach(function(o) {
                t(i, o.name, e, !!o.capture);
              });
            }),
            (t.prototype.handleEvent = function(t) {
              var e = t.type;
              this.events.some(function(i) {
                return i.name === e && (i.handler(t), !0);
              });
            }),
            t
          );
        })(),
        Ae = (function() {
          function t(t, e) {
            (this.indicator = t),
              (this.options = e),
              (this.hooks = new De(["touchStart", "touchMove", "touchEnd"])),
              this.registerEvents();
          }
          return (
            (t.prototype.registerEvents = function() {
              var t = this.options,
                e = t.disableMouse,
                i = t.disableTouch,
                o = [],
                n = [],
                r = [];
              e ||
                (o.push({ name: "mousedown", handler: this.start.bind(this) }),
                n.push({ name: "mousemove", handler: this.move.bind(this) }),
                r.push({ name: "mouseup", handler: this.end.bind(this) })),
                i ||
                  (o.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                  }),
                  n.push({ name: "touchmove", handler: this.move.bind(this) }),
                  r.push(
                    { name: "touchend", handler: this.end.bind(this) },
                    { name: "touchcancel", handler: this.end.bind(this) }
                  )),
                (this.startEventRegister = new je(
                  this.indicator.indicatorEl,
                  o
                )),
                (this.moveEventRegister = new je(window, n)),
                (this.endEventRegister = new je(window, r));
            }),
            (t.prototype.BScrollIsDisabled = function() {
              return !this.indicator.scroll.enabled;
            }),
            (t.prototype.start = function(t) {
              if (!this.BScrollIsDisabled()) {
                var e = t.touches ? t.touches[0] : t;
                t.preventDefault(),
                  t.stopPropagation(),
                  (this.initiated = !0),
                  (this.lastPoint = e[this.indicator.keysMap.point]),
                  this.hooks.trigger(this.hooks.eventTypes.touchStart);
              }
            }),
            (t.prototype.move = function(t) {
              if (this.initiated) {
                var e = t.touches ? t.touches[0] : t,
                  i = e[this.indicator.keysMap.point];
                t.preventDefault(), t.stopPropagation();
                var o = i - this.lastPoint;
                (this.lastPoint = i),
                  this.hooks.trigger(this.hooks.eventTypes.touchMove, o);
              }
            }),
            (t.prototype.end = function(t) {
              this.initiated &&
                ((this.initiated = !1),
                t.preventDefault(),
                t.stopPropagation(),
                this.hooks.trigger(this.hooks.eventTypes.touchEnd));
            }),
            (t.prototype.destroy = function() {
              this.startEventRegister.destroy(),
                this.moveEventRegister.destroy(),
                this.endEventRegister.destroy();
            }),
            t
          );
        })(),
        He = (function() {
          function t(t, e) {
            (this.scroll = t),
              (this.options = e),
              (this.hooksFn = []),
              (this.wrapper = e.wrapper),
              (this.direction = e.direction),
              (this.indicatorEl = this.wrapper.children[0]),
              (this.keysMap = this.getKeysMap()),
              this.handleFade(),
              this.handleHooks();
          }
          return (
            (t.prototype.handleFade = function() {
              this.options.fade && (this.wrapper.style.opacity = "0");
            }),
            (t.prototype.handleHooks = function() {
              var t = this,
                e = this.options,
                i = e.fade,
                o = e.interactive,
                n = e.scrollbarTrackClickable,
                r = this.scroll,
                s = r.hooks,
                a = r.scroller.translater.hooks,
                c = r.scroller.animater.hooks;
              if (
                (this.registerHooks(s, s.eventTypes.refresh, this.refresh),
                this.registerHooks(a, a.eventTypes.translate, function(e) {
                  var i = t.keysMap.hasScroll;
                  t.scroll[i] && t.updatePosition(e);
                }),
                this.registerHooks(c, c.eventTypes.time, this.transitionTime),
                this.registerHooks(
                  c,
                  c.eventTypes.timeFunction,
                  this.transitionTimingFunction
                ),
                i &&
                  (this.registerHooks(r, r.eventTypes.scrollEnd, function() {
                    t.fade();
                  }),
                  this.registerHooks(r, r.eventTypes.scrollStart, function() {
                    t.fade(!0);
                  }),
                  r.eventTypes.mousewheelStart &&
                    r.eventTypes.mousewheelEnd &&
                    (this.registerHooks(
                      r,
                      r.eventTypes.mousewheelStart,
                      function() {
                        t.fade(!0);
                      }
                    ),
                    this.registerHooks(
                      r,
                      r.eventTypes.mousewheelMove,
                      function() {
                        t.fade(!0);
                      }
                    ),
                    this.registerHooks(
                      r,
                      r.eventTypes.mousewheelEnd,
                      function() {
                        t.fade();
                      }
                    ))),
                o)
              ) {
                var l = this.scroll.options,
                  h = l.disableMouse,
                  p = l.disableTouch;
                this.eventHandler = new Ae(this, {
                  disableMouse: h,
                  disableTouch: p
                });
                var u = this.eventHandler.hooks;
                this.registerHooks(
                  u,
                  u.eventTypes.touchStart,
                  this.startHandler
                ),
                  this.registerHooks(
                    u,
                    u.eventTypes.touchMove,
                    this.moveHandler
                  ),
                  this.registerHooks(u, u.eventTypes.touchEnd, this.endHandler);
              }
              n && this.bindClick();
            }),
            (t.prototype.registerHooks = function(t, e, i) {
              t.on(e, i, this), this.hooksFn.push([t, e, i]);
            }),
            (t.prototype.bindClick = function() {
              var t = this.wrapper;
              this.clickEventRegister = new je(t, [
                { name: "click", handler: this.handleClick.bind(this) }
              ]);
            }),
            (t.prototype.handleClick = function(t) {
              var e = this.calculateclickOffsetPos(t),
                i = this.scroll,
                o = i.x,
                n = i.y;
              (o = "horizontal" === this.direction ? e : o),
                (n = "vertical" === this.direction ? e : n),
                this.scroll.scrollTo(
                  o,
                  n,
                  this.options.scrollbarTrackOffsetTime
                );
            }),
            (t.prototype.calculateclickOffsetPos = function(t) {
              var e = this.keysMap,
                i = e.point,
                o = e.domRect,
                n = this.options.scrollbarTrackOffsetType,
                r = t[i] - this.wrapperRect[o],
                s = r < this.currentPos ? -1 : 1,
                a = 0,
                c = this.currentPos;
              return (
                "step" === n
                  ? (a = this.scrollInfo.baseSize * s)
                  : ((a = 0), (c = r)),
                this.newPos(c, a, this.scrollInfo)
              );
            }),
            (t.prototype.getKeysMap = function() {
              return "vertical" === this.direction
                ? {
                    hasScroll: "hasVerticalScroll",
                    size: "height",
                    wrapperSize: "clientHeight",
                    scrollerSize: "scrollerHeight",
                    maxScrollPos: "maxScrollY",
                    pos: "y",
                    point: "pageY",
                    translateProperty: "translateY",
                    domRect: "top"
                  }
                : {
                    hasScroll: "hasHorizontalScroll",
                    size: "width",
                    wrapperSize: "clientWidth",
                    scrollerSize: "scrollerWidth",
                    maxScrollPos: "maxScrollX",
                    pos: "x",
                    point: "pageX",
                    translateProperty: "translateX",
                    domRect: "left"
                  };
            }),
            (t.prototype.fade = function(t) {
              var e = this.options,
                i = e.fadeInTime,
                o = e.fadeOutTime,
                n = t ? i : o,
                r = this.wrapper;
              (r.style[Le.transitionDuration] = n + "ms"),
                (r.style.opacity = t ? "1" : "0");
            }),
            (t.prototype.refresh = function() {
              var t = this.keysMap.hasScroll,
                e = this.scroll,
                i = e.x,
                o = e.y;
              if (
                ((this.wrapperRect = this.wrapper.getBoundingClientRect()),
                this.canScroll(e[t]))
              ) {
                var n = this.keysMap,
                  r = n.wrapperSize,
                  s = n.scrollerSize,
                  a = n.maxScrollPos;
                (this.scrollInfo = this.refreshScrollInfo(
                  this.wrapper[r],
                  e[s],
                  e[a],
                  this.indicatorEl[r]
                )),
                  this.updatePosition({ x: i, y: o });
              }
            }),
            (t.prototype.transitionTime = function(t) {
              void 0 === t && (t = 0),
                (this.indicatorEl.style[Le.transitionDuration] = t + "ms");
            }),
            (t.prototype.transitionTimingFunction = function(t) {
              this.indicatorEl.style[Le.transitionTimingFunction] = t;
            }),
            (t.prototype.canScroll = function(t) {
              return (this.wrapper.style.display = t ? "block" : "none"), t;
            }),
            (t.prototype.refreshScrollInfo = function(t, e, i, o) {
              var n = Math.max(
                Math.round((t * t) / (e || t || 1)),
                this.options.minSize
              );
              this.options.isCustom && (n = o);
              var r = t - n,
                s = r / i;
              return {
                baseSize: n,
                maxScrollPos: r,
                minScrollPos: 0,
                sizeRatio: s
              };
            }),
            (t.prototype.updatePosition = function(t) {
              var e = this.caculatePosAndSize(t, this.scrollInfo),
                i = e.pos,
                o = e.size;
              this.refreshStyle(o, i), (this.currentPos = i);
            }),
            (t.prototype.caculatePosAndSize = function(t, e) {
              var i,
                o = this.keysMap.pos,
                n = e.sizeRatio,
                r = e.baseSize,
                s = e.maxScrollPos,
                a = e.minScrollPos,
                c = this.options.minSize,
                l = Math.round(n * t[o]);
              return (
                l < a
                  ? ((i = Math.max(r + 3 * l, c)), (l = a))
                  : l > s
                  ? ((i = Math.max(r - 3 * (l - s), c)), (l = s + r - i))
                  : (i = r),
                { pos: l, size: i }
              );
            }),
            (t.prototype.refreshStyle = function(t, e) {
              var i = this.keysMap,
                o = i.translateProperty,
                n = i.size,
                r = this.scroll.options.translateZ;
              (this.indicatorEl.style[n] = t + "px"),
                (this.indicatorEl.style[Le.transform] =
                  o + "(" + e + "px)" + r);
            }),
            (t.prototype.startHandler = function() {
              (this.moved = !1),
                (this.startTime = Se()),
                this.transitionTime(),
                this.scroll.scroller.hooks.trigger(
                  this.scroll.scroller.hooks.eventTypes.beforeScrollStart
                );
            }),
            (t.prototype.moveHandler = function(t) {
              if (
                (this.moved ||
                  this.indicatorNotMoved(t) ||
                  ((this.moved = !0),
                  this.scroll.scroller.hooks.trigger(
                    this.scroll.scroller.hooks.eventTypes.scrollStart
                  )),
                this.moved)
              ) {
                var e = this.newPos(this.currentPos, t, this.scrollInfo);
                this.syncBScroll(e);
              }
            }),
            (t.prototype.endHandler = function() {
              if (this.moved) {
                var t = this.scroll,
                  e = t.x,
                  i = t.y;
                this.scroll.scroller.hooks.trigger(
                  this.scroll.scroller.hooks.eventTypes.scrollEnd,
                  { x: e, y: i }
                );
              }
            }),
            (t.prototype.indicatorNotMoved = function(t) {
              var e = this.currentPos,
                i = this.scrollInfo,
                o = i.maxScrollPos,
                n = i.minScrollPos,
                r = (e === n && t <= 0) || (e === o && t >= 0);
              return r;
            }),
            (t.prototype.syncBScroll = function(t) {
              var e = Se(),
                i = this.scroll,
                o = i.x,
                n = i.y,
                r = i.options,
                s = i.scroller,
                a = i.maxScrollY,
                c = i.minScrollY,
                l = i.maxScrollX,
                h = i.minScrollX,
                p = r.probeType,
                u = r.momentumLimitTime,
                d = { x: o, y: n };
              "vertical" === this.direction
                ? (d.y = _e(t, a, c))
                : (d.x = _e(t, l, h)),
                s.translater.translate(d),
                e - this.startTime > u &&
                  ((this.startTime = e),
                  1 === p && s.hooks.trigger(s.hooks.eventTypes.scroll, d)),
                p > 1 && s.hooks.trigger(s.hooks.eventTypes.scroll, d);
            }),
            (t.prototype.newPos = function(t, e, i) {
              var o = i.maxScrollPos,
                n = i.sizeRatio,
                r = i.minScrollPos,
                s = t + e;
              return (s = _e(s, r, o)), Math.round(s / n);
            }),
            (t.prototype.destroy = function() {
              var t = this.options,
                e = t.interactive,
                i = t.scrollbarTrackClickable,
                o = t.isCustom;
              e && this.eventHandler.destroy(),
                i && this.clickEventRegister.destroy(),
                o || this.wrapper.parentNode.removeChild(this.wrapper),
                this.hooksFn.forEach(function(t) {
                  var e = t[0],
                    i = t[1],
                    o = t[2];
                  e.off(i, o);
                }),
                (this.hooksFn.length = 0);
            }),
            t
          );
        })(),
        Ie = (function() {
          function t(t) {
            (this.scroll = t),
              this.handleOptions(),
              this.createIndicators(),
              this.handleHooks();
          }
          return (
            (t.prototype.handleHooks = function() {
              var t = this,
                e = this.scroll;
              e.hooks.on(e.hooks.eventTypes.destroy, function() {
                for (var e = 0, i = t.indicators; e < i.length; e++) {
                  var o = i[e];
                  o.destroy();
                }
              });
            }),
            (t.prototype.handleOptions = function() {
              var t =
                  !0 === this.scroll.options.scrollbar
                    ? {}
                    : this.scroll.options.scrollbar,
                e = {
                  fade: !0,
                  fadeInTime: 250,
                  fadeOutTime: 500,
                  interactive: !1,
                  customElements: [],
                  minSize: 8,
                  scrollbarTrackClickable: !1,
                  scrollbarTrackOffsetType: "step",
                  scrollbarTrackOffsetTime: 300
                };
              this.options = qe(e, t);
            }),
            (t.prototype.createIndicators = function() {
              for (
                var t,
                  e = this.scroll,
                  i = [],
                  o = ["scrollX", "scrollY"],
                  n = ["horizontal", "vertical"],
                  r = this.options.customElements,
                  s = 0;
                s < o.length;
                s++
              ) {
                var a = o[s];
                if (e.options[a]) {
                  var c = r.shift(),
                    l = n[s],
                    h = !1,
                    p = c || this.createScrollbarElement(l);
                  p !== c ? e.wrapper.appendChild(p) : (h = !0),
                    (t = ve(ve({ wrapper: p, direction: l }, this.options), {
                      isCustom: h
                    })),
                    i.push(new He(e, t));
                }
              }
              this.indicators = i;
            }),
            (t.prototype.createScrollbarElement = function(t, e) {
              void 0 === e && (e = this.options.scrollbarTrackClickable);
              var i = document.createElement("div"),
                o = document.createElement("div");
              return (
                (i.style.cssText =
                  "position:absolute;z-index:9999;overflow:hidden;"),
                (o.style.cssText =
                  "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;"),
                (o.className = "bscroll-indicator"),
                "horizontal" === t
                  ? ((i.style.cssText +=
                      "height:7px;left:2px;right:2px;bottom:0;"),
                    (o.style.height = "100%"),
                    (i.className = "bscroll-horizontal-scrollbar"))
                  : ((i.style.cssText +=
                      "width:7px;bottom:2px;top:2px;right:1px;"),
                    (o.style.width = "100%"),
                    (i.className = "bscroll-vertical-scrollbar")),
                e || (i.style.cssText += "pointer-events:none;"),
                i.appendChild(o),
                i
              );
            }),
            (t.pluginName = "scrollbar"),
            t
          );
        })(),
        Re = Ie,
        Ye = "undefined" !== typeof window,
        $e = Ye && navigator.userAgent.toLowerCase();
      $e && /wechatdevtools/.test($e),
        $e && $e.indexOf("android"),
        (function() {
          if ("string" === typeof $e) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec($e);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
        })();
      if (Ye) {
        var Xe = "test-passive";
        try {
          var Fe = {};
          Object.defineProperty(Fe, "passive", {
            get: function() {
              !0;
            }
          }),
            window.addEventListener(Xe, function() {}, Fe);
        } catch (In) {}
      }
      var Ne = Ye && document.createElement("div").style,
        We = (function() {
          if (!Ye) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== Ne[o.value]) return o.key;
          }
          return !1;
        })();
      function Ve(t) {
        return !1 === We
          ? t
          : "standard" === We
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : We + t.charAt(0).toUpperCase() + t.substr(1);
      }
      We && "standard" !== We && We.toLowerCase();
      Ve("transform"), Ve("transition");
      function Je(t) {
        if (t instanceof window.SVGElement) {
          var e = t.getBoundingClientRect();
          return { top: e.top, left: e.left, width: e.width, height: e.height };
        }
        return {
          top: t.offsetTop,
          left: t.offsetLeft,
          width: t.offsetWidth,
          height: t.offsetHeight
        };
      }
      Ye && Ve("perspective"),
        Ve("transitionTimingFunction"),
        Ve("transitionDuration"),
        Ve("transitionDelay"),
        Ve("transformOrigin"),
        Ve("transitionEnd"),
        Ve("transitionProperty");
      var Ue = (function() {
          function t(t) {
            (this.scroll = t), (this.stopObserver = !1), this.init();
          }
          return (
            (t.prototype.init = function() {
              this.handleMutationObserver(), this.handleHooks();
            }),
            (t.prototype.handleMutationObserver = function() {
              var t = this;
              if ("undefined" !== typeof MutationObserver) {
                var e = 0;
                (this.observer = new MutationObserver(function(i) {
                  t.mutationObserverHandler(i, e);
                })),
                  this.startObserve(this.observer);
              } else this.checkDOMUpdate();
            }),
            (t.prototype.handleHooks = function() {
              var t = this;
              (this.hooksFn = []),
                this.registerHooks(
                  this.scroll.hooks,
                  this.scroll.hooks.eventTypes.contentChanged,
                  function() {
                    t.stopObserve(), t.handleMutationObserver();
                  }
                ),
                this.registerHooks(
                  this.scroll.hooks,
                  this.scroll.hooks.eventTypes.enable,
                  function() {
                    t.stopObserver && t.handleMutationObserver();
                  }
                ),
                this.registerHooks(
                  this.scroll.hooks,
                  this.scroll.hooks.eventTypes.disable,
                  function() {
                    t.stopObserve();
                  }
                ),
                this.registerHooks(
                  this.scroll.hooks,
                  this.scroll.hooks.eventTypes.destroy,
                  function() {
                    t.destroy();
                  }
                );
            }),
            (t.prototype.mutationObserverHandler = function(t, e) {
              var i = this;
              if (!this.shouldNotRefresh()) {
                for (var o = !1, n = !1, r = 0; r < t.length; r++) {
                  var s = t[r];
                  if ("attributes" !== s.type) {
                    o = !0;
                    break;
                  }
                  if (s.target !== this.scroll.scroller.content) {
                    n = !0;
                    break;
                  }
                }
                o
                  ? this.scroll.refresh()
                  : n &&
                    (clearTimeout(e),
                    (e = window.setTimeout(function() {
                      i.shouldNotRefresh() || i.scroll.refresh();
                    }, 60)));
              }
            }),
            (t.prototype.startObserve = function(t) {
              var e = { attributes: !0, childList: !0, subtree: !0 };
              t.observe(this.scroll.scroller.content, e);
            }),
            (t.prototype.shouldNotRefresh = function() {
              var t = this.scroll.scroller,
                e = t.scrollBehaviorX,
                i = t.scrollBehaviorY,
                o =
                  e.currentPos > e.minScrollPos ||
                  e.currentPos < e.maxScrollPos ||
                  i.currentPos > i.minScrollPos ||
                  i.currentPos < i.maxScrollPos;
              return t.animater.pending || o;
            }),
            (t.prototype.checkDOMUpdate = function() {
              var t = this,
                e = this.scroll.scroller.content,
                i = Je(e),
                o = i.width,
                n = i.height,
                r = function() {
                  if (!t.stopObserver) {
                    i = Je(e);
                    var r = i.width,
                      a = i.height;
                    (o === r && n === a) || t.scroll.refresh(),
                      (o = r),
                      (n = a),
                      s();
                  }
                },
                s = function() {
                  setTimeout(function() {
                    r();
                  }, 1e3);
                };
              s();
            }),
            (t.prototype.registerHooks = function(t, e, i) {
              t.on(e, i, this), this.hooksFn.push([t, e, i]);
            }),
            (t.prototype.stopObserve = function() {
              (this.stopObserver = !0),
                this.observer && this.observer.disconnect();
            }),
            (t.prototype.destroy = function() {
              this.stopObserve(),
                this.hooksFn.forEach(function(t) {
                  var e = t[0],
                    i = t[1],
                    o = t[2];
                  e.off(i, o);
                }),
                (this.hooksFn.length = 0);
            }),
            (t.pluginName = "observeDOM"),
            t
          );
        })(),
        Ke = Ue,
        Ge = "undefined" !== typeof window,
        Qe = Ge && navigator.userAgent.toLowerCase();
      Qe && /wechatdevtools/.test(Qe),
        Qe && Qe.indexOf("android"),
        (function() {
          if ("string" === typeof Qe) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec(Qe);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
        })();
      var Ze = !1;
      if (Ge) {
        var ti = "test-passive";
        try {
          var ei = {};
          Object.defineProperty(ei, "passive", {
            get: function() {
              Ze = !0;
            }
          }),
            window.addEventListener(ti, function() {}, ei);
        } catch (In) {}
      }
      var ii = function(t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        oi = Ge && document.createElement("div").style,
        ni = (function() {
          if (!Ge) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== oi[o.value]) return o.key;
          }
          return !1;
        })();
      function ri(t) {
        return !1 === ni
          ? t
          : "standard" === ni
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : ni + t.charAt(0).toUpperCase() + t.substr(1);
      }
      function si(t, e, i, o) {
        var n = Ze ? { passive: !1, capture: !!o } : !!o;
        t.addEventListener(e, i, n);
      }
      function ai(t, e, i, o) {
        t.removeEventListener(e, i, { capture: !!o });
      }
      ni && "standard" !== ni && ni.toLowerCase();
      ri("transform"), ri("transition");
      Ge && ri("perspective"),
        ri("transitionTimingFunction"),
        ri("transitionDuration"),
        ri("transitionDelay"),
        ri("transformOrigin"),
        ri("transitionEnd"),
        ri("transitionProperty");
      var ci = (function() {
          function t(t, e) {
            (this.wrapper = t), (this.events = e), this.addDOMEvents();
          }
          return (
            (t.prototype.destroy = function() {
              this.removeDOMEvents(), (this.events = []);
            }),
            (t.prototype.addDOMEvents = function() {
              this.handleDOMEvents(si);
            }),
            (t.prototype.removeDOMEvents = function() {
              this.handleDOMEvents(ai);
            }),
            (t.prototype.handleDOMEvents = function(t) {
              var e = this,
                i = this.wrapper;
              this.events.forEach(function(o) {
                t(i, o.name, e, !!o.capture);
              });
            }),
            (t.prototype.handleEvent = function(t) {
              var e = t.type;
              this.events.some(function(i) {
                return i.name === e && (i.handler(t), !0);
              });
            }),
            t
          );
        })(),
        li = function(t) {
          return "img" === t.tagName.toLowerCase();
        },
        hi = (function() {
          function t(t) {
            (this.scroll = t), (this.refreshTimer = 0), this.init();
          }
          return (
            (t.prototype.init = function() {
              this.handleOptions(this.scroll.options.observeImage),
                this.bindEventsToWrapper();
            }),
            (t.prototype.handleOptions = function(t) {
              void 0 === t && (t = {}), (t = !0 === t ? {} : t);
              var e = { debounceTime: 100 };
              this.options = ii(e, t);
            }),
            (t.prototype.bindEventsToWrapper = function() {
              var t = this.scroll.scroller.wrapper;
              (this.imageLoadEventRegister = new ci(t, [
                { name: "load", handler: this.load.bind(this), capture: !0 }
              ])),
                (this.imageErrorEventRegister = new ci(t, [
                  { name: "error", handler: this.load.bind(this), capture: !0 }
                ]));
            }),
            (t.prototype.load = function(t) {
              var e = this,
                i = t.target,
                o = this.options.debounceTime;
              i &&
                li(i) &&
                (0 === o
                  ? this.scroll.refresh()
                  : (clearTimeout(this.refreshTimer),
                    (this.refreshTimer = window.setTimeout(function() {
                      e.scroll.refresh();
                    }, this.options.debounceTime))));
            }),
            (t.pluginName = "observeImage"),
            t
          );
        })(),
        pi = hi,
        ui = "undefined" !== typeof window,
        di = ui && navigator.userAgent.toLowerCase();
      di && /wechatdevtools/.test(di),
        di && di.indexOf("android"),
        (function() {
          if ("string" === typeof di) {
            var t = /os (\d\d?_\d(_\d)?)/,
              e = t.exec(di);
            if (!e) return !1;
            var i = e[1].split("_").map(function(t) {
              return parseInt(t, 10);
            });
            return !!(13 === i[0] && i[1] >= 4);
          }
        })();
      if (ui) {
        var fi = "test-passive";
        try {
          var mi = {};
          Object.defineProperty(mi, "passive", {
            get: function() {
              !0;
            }
          }),
            window.addEventListener(fi, function() {}, mi);
        } catch (In) {}
      }
      var vi = function(t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        gi = ui && document.createElement("div").style,
        yi = (function() {
          if (!ui) return !1;
          for (
            var t = [
                { key: "standard", value: "transform" },
                { key: "webkit", value: "webkitTransform" },
                { key: "Moz", value: "MozTransform" },
                { key: "O", value: "OTransform" },
                { key: "ms", value: "msTransform" }
              ],
              e = 0,
              i = t;
            e < i.length;
            e++
          ) {
            var o = i[e];
            if (void 0 !== gi[o.value]) return o.key;
          }
          return !1;
        })();
      function bi(t) {
        return !1 === yi
          ? t
          : "standard" === yi
          ? "transitionEnd" === t
            ? "transitionend"
            : t
          : yi + t.charAt(0).toUpperCase() + t.substr(1);
      }
      yi && "standard" !== yi && yi.toLowerCase();
      bi("transform"), bi("transition");
      ui && bi("perspective"),
        bi("transitionTimingFunction"),
        bi("transitionDuration"),
        bi("transitionDelay"),
        bi("transformOrigin"),
        bi("transitionEnd"),
        bi("transitionProperty");
      var wi = {
          swipe: {
            style: "cubic-bezier(0.23, 1, 0.32, 1)",
            fn: function(t) {
              return 1 + --t * t * t * t * t;
            }
          },
          swipeBounce: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function(t) {
              return t * (2 - t);
            }
          },
          bounce: {
            style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
            fn: function(t) {
              return 1 - --t * t * t * t;
            }
          }
        },
        xi = "plugins.pullDownRefresh",
        ki = [
          { key: "finishPullDown", name: "finishPullDown" },
          { key: "openPullDown", name: "openPullDown" },
          { key: "closePullDown", name: "closePullDown" },
          { key: "autoPullDownRefresh", name: "autoPullDownRefresh" }
        ],
        Ti = ki.map(function(t) {
          return { key: t.key, sourceKey: xi + "." + t.name };
        }),
        Si = "pullingDown",
        qi = "enterThreshold",
        _i = "leaveThreshold",
        Pi = (function() {
          function t(t) {
            (this.scroll = t),
              (this.pulling = 0),
              (this.thresholdBoundary = 0),
              this.init();
          }
          return (
            (t.prototype.setPulling = function(t) {
              this.pulling = t;
            }),
            (t.prototype.setThresholdBoundary = function(t) {
              this.thresholdBoundary = t;
            }),
            (t.prototype.init = function() {
              this.handleBScroll(),
                this.handleOptions(this.scroll.options.pullDownRefresh),
                this.handleHooks(),
                this.watch();
            }),
            (t.prototype.handleBScroll = function() {
              this.scroll.registerType([Si, qi, _i]), this.scroll.proxy(Ti);
            }),
            (t.prototype.handleOptions = function(t) {
              void 0 === t && (t = {}), (t = !0 === t ? {} : t);
              var e = { threshold: 40, stop: 20 };
              (this.options = vi(e, t)), (this.scroll.options.probeType = 3);
            }),
            (t.prototype.handleHooks = function() {
              var t = this;
              this.hooksFn = [];
              var e = this.scroll.scroller,
                i = e.scrollBehaviorY;
              (this.currentMinScrollY = this.cachedOriginanMinScrollY =
                i.minScrollPos),
                this.registerHooks(
                  this.scroll.hooks,
                  this.scroll.hooks.eventTypes.contentChanged,
                  function() {
                    t.finishPullDown();
                  }
                ),
                this.registerHooks(
                  i.hooks,
                  i.hooks.eventTypes.computeBoundary,
                  function(e) {
                    e.maxScrollPos > 0 && (e.maxScrollPos = -1),
                      (e.minScrollPos = t.currentMinScrollY);
                  }
                ),
                this.hasMouseWheelPlugin() &&
                  (this.registerHooks(
                    this.scroll,
                    this.scroll.eventTypes.alterOptions,
                    function(t) {
                      var e = 300,
                        i = 350;
                      (t.discreteTime = e), (t.easeTime = i);
                    }
                  ),
                  this.registerHooks(
                    this.scroll,
                    this.scroll.eventTypes.mousewheelEnd,
                    function() {
                      e.hooks.trigger(e.hooks.eventTypes.end);
                    }
                  ));
            }),
            (t.prototype.registerHooks = function(t, e, i) {
              t.on(e, i, this), this.hooksFn.push([t, e, i]);
            }),
            (t.prototype.hasMouseWheelPlugin = function() {
              return !!this.scroll.eventTypes.alterOptions;
            }),
            (t.prototype.watch = function() {
              var t = this.scroll.scroller;
              (this.watching = !0),
                this.registerHooks(
                  t.hooks,
                  t.hooks.eventTypes.end,
                  this.checkPullDown
                ),
                this.registerHooks(
                  this.scroll,
                  this.scroll.eventTypes.scrollStart,
                  this.resetStateBeforeScrollStart
                ),
                this.registerHooks(
                  this.scroll,
                  this.scroll.eventTypes.scroll,
                  this.checkLocationOfThresholdBoundary
                ),
                this.hasMouseWheelPlugin() &&
                  this.registerHooks(
                    this.scroll,
                    this.scroll.eventTypes.mousewheelStart,
                    this.resetStateBeforeScrollStart
                  );
            }),
            (t.prototype.resetStateBeforeScrollStart = function() {
              this.isFetchingStatus() ||
                (this.setPulling(1), this.setThresholdBoundary(0));
            }),
            (t.prototype.checkLocationOfThresholdBoundary = function() {
              if (1 === this.pulling) {
                var t = this.scroll,
                  e =
                    1 !== this.thresholdBoundary &&
                    this.locateInsideThresholdBoundary(),
                  i =
                    2 !== this.thresholdBoundary &&
                    !this.locateInsideThresholdBoundary();
                e && (this.setThresholdBoundary(1), t.trigger(qi)),
                  i && (this.setThresholdBoundary(2), t.trigger(_i));
              }
            }),
            (t.prototype.locateInsideThresholdBoundary = function() {
              return this.scroll.y <= this.options.threshold;
            }),
            (t.prototype.unwatch = function() {
              var t = this.scroll,
                e = t.scroller;
              (this.watching = !1),
                e.hooks.off(e.hooks.eventTypes.end, this.checkPullDown),
                t.off(
                  t.eventTypes.scrollStart,
                  this.resetStateBeforeScrollStart
                ),
                t.off(
                  t.eventTypes.scroll,
                  this.checkLocationOfThresholdBoundary
                ),
                this.hasMouseWheelPlugin() &&
                  t.off(
                    t.eventTypes.mousewheelStart,
                    this.resetStateBeforeScrollStart
                  );
            }),
            (t.prototype.checkPullDown = function() {
              var t = this.options,
                e = t.threshold,
                i = t.stop;
              return (
                !(this.scroll.y < e) &&
                (1 === this.pulling &&
                  (this.modifyBehaviorYBoundary(i),
                  this.setPulling(2),
                  this.scroll.trigger(Si)),
                this.scroll.scrollTo(
                  this.scroll.x,
                  i,
                  this.scroll.options.bounceTime,
                  wi.bounce
                ),
                this.isFetchingStatus())
              );
            }),
            (t.prototype.isFetchingStatus = function() {
              return 2 === this.pulling;
            }),
            (t.prototype.modifyBehaviorYBoundary = function(t) {
              var e = this.scroll.scroller.scrollBehaviorY;
              (this.cachedOriginanMinScrollY = e.minScrollPos),
                (this.currentMinScrollY = t),
                e.computeBoundary();
            }),
            (t.prototype.finishPullDown = function() {
              if (this.isFetchingStatus()) {
                var t = this.scroll.scroller.scrollBehaviorY;
                (this.currentMinScrollY = this.cachedOriginanMinScrollY),
                  t.computeBoundary(),
                  this.setPulling(0),
                  this.scroll.resetPosition(
                    this.scroll.options.bounceTime,
                    wi.bounce
                  );
              }
            }),
            (t.prototype.openPullDown = function(t) {
              void 0 === t && (t = {}),
                this.handleOptions(t),
                this.watching || this.watch();
            }),
            (t.prototype.closePullDown = function() {
              this.unwatch();
            }),
            (t.prototype.autoPullDownRefresh = function() {
              var t = this.options,
                e = t.threshold,
                i = t.stop;
              !this.isFetchingStatus() &&
                this.watching &&
                (this.modifyBehaviorYBoundary(i),
                this.scroll.trigger(this.scroll.eventTypes.scrollStart),
                this.scroll.scrollTo(this.scroll.x, e),
                this.setPulling(2),
                this.scroll.trigger(Si),
                this.scroll.scrollTo(
                  this.scroll.x,
                  i,
                  this.scroll.options.bounceTime,
                  wi.bounce
                ));
            }),
            (t.pluginName = "pullDownRefresh"),
            t
          );
        })(),
        Ci = Pi;
      Zt.use(me), Zt.use(Re), Zt.use(Ke), Zt.use(pi), Zt.use(Ci);
      var Ei = {
          moving: { enter: "enter", leave: "leave" },
          fetching: "fetching",
          succeed: "succeed"
        },
        Mi = (function() {
          function t(e) {
            var i = this,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            T(this, t),
              _(this, "domPotision", []),
              _(this, "beforeNode", null),
              _(this, "viewName", null),
              _(this, "tipText", ""),
              _(this, "scrollType", ""),
              _(this, "isLoding", !1),
              _(this, "saveNodes", function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = t.nodes,
                  o = void 0 === e ? [] : e,
                  n = t.dataList,
                  r = [],
                  s = i.domPotision;
                for (var a in o)
                  Object.hasOwnProperty.call(o, a) &&
                    (function() {
                      var t = o[a],
                        e = JSON.stringify(n[a]),
                        i = t.offsetTop,
                        c = { top: i, node: t, read: !1, data: e },
                        l = s.findIndex(function(t) {
                          return t.data === e;
                        });
                      if ("number" === typeof l && l > -1) {
                        var h = s[l] || {},
                          p = h.read,
                          u = void 0 !== p && p;
                        c.read = u;
                      }
                      r.push(c);
                    })();
                (i.domPotision = r), i.readState();
              });
            var n = o.scrollType,
              r = o.pullingDown,
              s =
                void 0 === r ? { threshold: 40, stop: 20, mouseWheel: !0 } : r;
            n && (this.scrollType = n), (this.viewName = e);
            var a = new Zt(e, {
              scrollY: !0,
              click: !0,
              probeType: 3,
              observeDOM: !0,
              mouseWheel: !0,
              observeImage: !0,
              scrollbar: {
                fade: !1,
                interactive: !0,
                scrollbarTrackClickable: !0
              },
              pullDownRefresh: s,
              preventDefault: !1
            });
            a.on("scrollEnd", function() {
              i.setLoding(!1), i.savePosition();
            }),
              s &&
                (a.on("enterThreshold", function() {
                  i.setLoding(!0), i.setTipText(Ei.moving.enter);
                }),
                a.on("leaveThreshold", function() {
                  i.setTipText(Ei.moving.leave);
                })),
              (this.Scroll = a);
          }
          return (
            q(t, [
              {
                key: "refresh",
                value: function() {
                  this.Scroll.refresh();
                }
              },
              {
                key: "setTipText",
                value: function() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Ei.default,
                    e =
                      '<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M367.997 338.75l-95.998 95.997V17.503h-32v417.242l-95.996-95.995l-22.627 22.627L256 496l134.624-134.623l-22.627-22.627z"></path></svg>',
                    i =
                      '<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995l22.628-22.627z"></path></svg>',
                    o = {
                      enter: "".concat(e, " 下拉加载"),
                      leave: "".concat(i, " 加载更多聊天记录"),
                      fetching: "加载中...",
                      succeed: "加载完成"
                    };
                  this.tipText = o[t];
                }
              },
              {
                key: "finishPullDown",
                value: function() {
                  this.setTipText(Ei.succeed), this.Scroll.finishPullDown();
                }
              },
              {
                key: "setLoding",
                value: function(t) {
                  this.isLoding = t;
                }
              },
              {
                key: "pullingDownHandler",
                value: function() {
                  this.savePosition(0), this.setTipText(Ei.fetching);
                }
              },
              {
                key: "on",
                value: function(t, e) {
                  var i = this;
                  this.Scroll.on(t, function() {
                    "pullingDown" === t && i.pullingDownHandler(), e();
                  });
                }
              },
              {
                key: "unread",
                get: function() {
                  var t = 0;
                  return (
                    this.domPotision.forEach(function(e) {
                      var i = e.read;
                      i || (t += 1);
                    }),
                    t
                  );
                }
              },
              {
                key: "readState",
                value: function() {
                  var t = this,
                    e = this.Scroll.y,
                    i = Math.abs(e),
                    o = this.viewName.clientHeight || 0,
                    n = -1;
                  this.beforeNode &&
                    (n = this.domPotision.findIndex(function(e) {
                      return e.data === t.beforeNode.data;
                    })),
                    this.domPotision.forEach(function(t, e) {
                      var r = t.top,
                        s = t.node,
                        a = s.clientHeight;
                      (i + o > r + 0.9 * a || n > e) && (t.read = !0);
                    });
                }
              },
              {
                key: "isBottom",
                get: function() {
                  var t = !1,
                    e = this.Scroll,
                    i = e.y,
                    o = e.maxScrollY;
                  return (t = Math.abs(i) >= Math.abs(o)), t;
                }
              },
              {
                key: "scrollBottom",
                value: function() {
                  this.Scroll.scrollTo(0, this.Scroll.maxScrollY, 200);
                }
              },
              {
                key: "scrollPositionDom",
                value: function() {
                  var t = this.Scroll.y;
                  if (t >= 0) return 0;
                  var e = Math.abs(t),
                    i = this.domPotision,
                    o = -1;
                  return (
                    i.forEach(function(t, i) {
                      var n = t.top;
                      -1 === o && (o = i), e >= n && (o = i + 1);
                    }),
                    o
                  );
                }
              },
              {
                key: "savePosition",
                value: function() {
                  var t = this.scrollPositionDom();
                  this.beforeNode = this.domPotision[t];
                }
              }
            ]),
            t
          );
        })(),
        Oi = Mi,
        Bi = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "span",
            { staticClass: "item_msg", on: { click: t.itemCallback } },
            [
              "span" === t.getTag
                ? i("span", { domProps: { innerHTML: t._s(t.parseText()) } })
                : t._e(),
              "img" === t.getTag
                ? i("img", {
                    staticClass: "web__msg--img",
                    attrs: { src: t.getData.src, alt: "" },
                    on: {
                      click: function(e) {
                        return t.showDialog({ tag: "img" });
                      },
                      load: function(e) {
                        return t.load("img");
                      }
                    }
                  })
                : t._e(),
              "video" === t.getTag
                ? i("video", {
                    staticClass: "web__msg--video",
                    attrs: { src: t.getData.src, controls: "controls" },
                    on: {
                      click: function(e) {
                        return t.showDialog({ tag: "video" });
                      },
                      canplaythrough: function(e) {
                        return t.load("video");
                      }
                    }
                  })
                : t._e(),
              "audio" === t.getTag
                ? i("audio", {
                    staticClass: "web__msg--audio",
                    staticStyle: { width: "20rem", height: "20px" },
                    attrs: { src: t.getData.src, controls: "controls" },
                    on: {
                      canplaythrough: function(e) {
                        return t.load("audio");
                      }
                    }
                  })
                : t._e(),
              ["video", "img"].includes(t.getTag)
                ? i(
                    "el-dialog",
                    {
                      staticClass: "web__dialog",
                      attrs: {
                        visible: t.show,
                        width: "40%",
                        "append-to-body": "",
                        "before-close": t.handleClose
                      },
                      on: {
                        "update:visible": function(e) {
                          t.show = e;
                        }
                      }
                    },
                    [
                      t.imgSrc
                        ? i("img", {
                            staticStyle: {
                              width: "100%",
                              "object-fit": "cover"
                            },
                            attrs: { src: t.imgSrc }
                          })
                        : t._e(),
                      t.videoSrc
                        ? i("video", {
                            staticStyle: {
                              width: "100%",
                              "object-fit": "cover"
                            },
                            attrs: { src: t.videoSrc, controls: "controls" }
                          })
                        : t._e(),
                      t.audioSrc
                        ? i("audio", {
                            staticStyle: {
                              width: "100%",
                              "object-fit": "cover"
                            },
                            attrs: { src: t.audioSrc, controls: "controls" }
                          })
                        : t._e()
                    ]
                  )
                : t._e()
            ],
            1
          );
        },
        zi = [];
      i("5319"), i("1276"), i("caad"), i("2532");
      function Li(t) {
        return (
          (Li =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Li(t)
        );
      }
      function Di(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function ji(t, e) {
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Ai(t, e, i) {
        return e && ji(t.prototype, e), i && ji(t, i), t;
      }
      var Hi = (function() {
          function t(e) {
            Di(this, t),
              (this.tier = 0),
              (this.empty = 1),
              (this.index = 0),
              (this.children = {}),
              e && this.build(e);
          }
          return (
            Ai(t, [
              {
                key: "build",
                value: function(t) {
                  for (var e = t.length, i = 0; i < e; i++)
                    this.insert(t[i], 0, i);
                }
              },
              {
                key: "insert",
                value: function(e) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    o = arguments.length > 2 ? arguments[2] : void 0;
                  if (0 !== e.length) {
                    var n,
                      r,
                      s = this;
                    i !== e.length
                      ? ((n = e[i]),
                        void 0 === s.children[n] &&
                          ((s.children[n] = new t()),
                          (s.empty = 0),
                          (s.children[n].tier = this.tier + 1)),
                        (r = s.children[n]),
                        r.insert(e, i + 1, o))
                      : (s.index = o);
                  }
                }
              },
              {
                key: "searchOne",
                value: function(t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    i = {};
                  if (0 === t.length) return i;
                  var o,
                    n,
                    r = this;
                  return (
                    (i.arr = []),
                    (n = t[e]),
                    (o = r.children[n]),
                    void 0 !== o && e < t.length
                      ? o.searchOne(t, e + 1)
                      : void 0 === o && 0 === r.empty
                      ? i
                      : 1 == r.empty
                      ? ((i.arr[0] = e - r.tier),
                        (i.arr[1] = r.index),
                        (i.tier = r.tier),
                        i)
                      : i
                  );
                }
              },
              {
                key: "search",
                value: function(t) {
                  if (1 == this.empty) return [];
                  for (var e, i = t.length, o = [], n = 0; n < i - 1; n++)
                    (e = this.searchOne(t, n)),
                      "undefined" !== typeof e.arr &&
                        e.arr.length > 0 &&
                        (o.push(e.arr), (n = n + e.tier - 1));
                  return o;
                }
              }
            ]),
            t
          );
        })(),
        Ii = {
          "/::)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif",
          "/::~":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif",
          "/::B":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif",
          "/::|":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif",
          "/:8-)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif",
          "/::<":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif",
          "/::$":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif",
          "/::X":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif",
          "/::Z":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif",
          "/::'(":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif",
          "/::-|":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif",
          "/::@":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif",
          "/::P":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif",
          "/::D":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif",
          "/::O":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif",
          "/::(":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif",
          "/::+":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif",
          "/:--b":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif",
          "/::Q":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif",
          "/::T":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif",
          "/:,@P":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif",
          "/:,@-D":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif",
          "/::d":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif",
          "/:,@o":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif",
          "/::g":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif",
          "/:|-)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif",
          "/::!":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif",
          "/::L":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif",
          "/::>":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif",
          "/::,@":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif",
          "/:,@f":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif",
          "/::-S":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif",
          "/:?":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif",
          "/:,@x":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif",
          "/:,@@":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif",
          "/::8":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif",
          "/:,@!":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif",
          "/:!!!":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif",
          "/:xx":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif",
          "/:bye":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif",
          "/:wipe":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif",
          "/:dig":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif",
          "/:handclap":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif",
          "/:&-(":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif",
          "/:B-)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif",
          "/:<@":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif",
          "/:@>":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif",
          "/::-O":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif",
          "/:>-|":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif",
          "/:P-(":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif",
          "/::'|":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif",
          "/:X-)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif",
          "/::*":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif",
          "/:@x":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif",
          "/:8*":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif",
          "/:pd":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif",
          "/:<W>":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif",
          "/:beer":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif",
          "/:basketb":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif",
          "/:oo":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif",
          "/:coffee":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif",
          "/:eat":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif",
          "/:pig":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif",
          "/:rose":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif",
          "/:fade":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif",
          "/:showlove":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif",
          "/:heart":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif",
          "/:break":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif",
          "/:cake":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif",
          "/:li":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif",
          "/:bome":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif",
          "/:kn":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif",
          "/:footb":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif",
          "/:ladybug":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif",
          "/:shit":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif",
          "/:moon":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif",
          "/:sun":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif",
          "/:gift":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif",
          "/:hug":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif",
          "/:strong":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif",
          "/:weak":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif",
          "/:share":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif",
          "/:v":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif",
          "/:@)":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif",
          "/:jj":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif",
          "/:@@":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif",
          "/:bad":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif",
          "/:lvu":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif",
          "/:no":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif",
          "/:ok":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif",
          "/:love":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif",
          "/:<L>":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif",
          "/:jump":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif",
          "/:shake":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif",
          "/:<O>":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif",
          "/:circle":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif",
          "/:kotow":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif",
          "/:turn":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif",
          "/:skip":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif",
          "/:oY":
            "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif",
          ":smile:": { panel: "b5bd1fe0", position: { col: 11, row: 3 } },
          ":mask:": { panel: "b5bd1fe0", position: { col: 4, row: 1 } },
          ":joy:": { panel: "b5bd1fe0", position: { col: 11, row: 2 } },
          ":stuck_out_tongue_closed_eyes:": {
            panel: "b5bd1fe0",
            position: { col: 1, row: 4 }
          },
          ":flushed:": { panel: "b5bd1fe0", position: { col: 11, row: 8 } },
          ":scream:": { panel: "b5bd1fe0", position: { col: 11, row: 7 } },
          ":pensive:": { panel: "b5bd1fe0", position: { col: 11, row: 5 } },
          ":unamused:": { panel: "b5bd1fe0", position: { col: 11, row: 4 } },
          "[Hey]": { panel: "b5bd1fe0", position: { col: 8, row: 7 } },
          "[Smirk]": { panel: "b5bd1fe0", position: { col: 2, row: 1 } },
          "[Smart]": { panel: "b5bd1fe0", position: { col: 2, row: 2 } },
          "[Concerned]": { panel: "b5bd1fe0", position: { col: 1, row: 3 } },
          "[Yeah!]": { panel: "b5bd1fe0", position: { col: 3, row: 2 } },
          ":ghost:": { panel: "b5bd1fe0", position: { col: 10, row: 10 } },
          ":pray:": { panel: "b5bd1fe0", position: { col: 11, row: 9 } },
          ":muscle:": { panel: "b5bd1fe0", position: { col: 11, row: 1 } },
          ":tada:": { panel: "b5bd1fe0", position: { col: 9, row: 10 } },
          ":gift:": { panel: "b5bd1fe0", position: { col: 8, row: 10 } },
          "[Packet]": { panel: "b5bd1fe0", position: { col: 3, row: 1 } },
          "[好的]": { panel: "b5bd1fe0", position: { col: 7, row: 5 } },
          "[加油]": { panel: "b5bd1fe0", position: { col: 4, row: 6 } },
          "[汗]": { panel: "b5bd1fe0", position: { col: 5, row: 6 } },
          "[天啊]": { panel: "b5bd1fe0", position: { col: 6, row: 6 } },
          "[Emm]": { panel: "b5bd1fe0", position: { col: 7, row: 1 } },
          "[社会社会]": { panel: "b5bd1fe0", position: { col: 7, row: 2 } },
          "[旺柴]": { panel: "b5bd1fe0", position: { col: 7, row: 3 } },
          "[加油加油]": { panel: "b5bd1fe0", position: { col: 4, row: 6 } },
          "[吃瓜]": { panel: "b5bd1fe0", position: { col: 3, row: 6 } },
          "[Facepalm]": { panel: "b5bd1fe0", position: { col: 1, row: 2 } },
          "[哇]": { panel: "b5bd1fe0", position: { col: 1, row: 7 } },
          "[打脸]": { panel: "b5bd1fe0", position: { col: 7, row: 6 } },
          "[囧]": { panel: "b5bd1fe0", position: { col: 5, row: 1 } }
        },
        Ri = {
          url:
            "https://res.wx.qq.com/wxdoc/dist/assets/img/emoji-sprite.b5bd1fe0.png",
          width: 724,
          height: 658,
          col: 11,
          row: 10,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          gapCol: 6,
          gapRow: 6
        },
        Yi = {
          b5bd1fe0: Ri,
          "6AfH8": {
            url:
              "https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/6AfH8-r.png",
            width: 480,
            height: 380,
            col: 15,
            row: 12,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            gapCol: 6,
            gapRow: 6
          }
        },
        $i = Object.keys(Ii),
        Xi = new Hi($i),
        Fi = 24,
        Ni = 24,
        Wi = {};
      function Vi(t, e, i, o) {
        return t.slice(0, e) + o + t.slice(e + i);
      }
      function Ji(t, e) {
        var i = e.url,
          o = e.width,
          n = (e.height, e.col),
          r = (e.row, e.paddingTop, e.paddingBottom, e.paddingLeft),
          s = e.paddingRight,
          a = e.gapCol;
        e.gapRow;
        if (!i) return "";
        var c = (o - r - s - a * (n - 1)) / n,
          l = Fi / c,
          h = o * l;
        return (Wi[t] = { scale: l, bgWidth: h }), Wi[t];
      }
      function Ui(t, e, i) {
        var o = Yi[i],
          n = o.url,
          r = o.gapCol,
          s = o.gapRow;
        if (!n) return "";
        var a = Wi[i] || Ji(i, o),
          c = a.scale,
          l = a.bgWidth;
        if ("object" === Li(e)) {
          var h = e,
            p = h.col,
            u = h.row,
            d = -(p - 1) * (Fi + c * r),
            f = -(u - 1) * (Ni + c * s);
          e = "".concat(d, "px ").concat(f, "px");
        }
        return '<a title="'
          .concat(t, '" style="display: inline-block;background: url(')
          .concat(n, ") no-repeat;width: ")
          .concat(Fi, "px;\n    height: ")
          .concat(Ni, "px; background-position:")
          .concat(e, "; background-size: ")
          .concat(l, 'px;"></a>');
      }
      function Ki(t) {
        var e = Xi.search(t);
        return (
          e.reverse().map(function(e) {
            var i = e[0],
              o = $i[e[1]],
              n = Ii[o],
              r =
                "object" === Li(n)
                  ? Ui(o, n.position, n.panel)
                  : -1 !== n.indexOf("http")
                  ? '<img src="' + n + '" alt="' + o + '">'
                  : n;
            t = Vi(t, i, o.length, r);
          }),
          t
        );
      }
      var Gi = Ki,
        Qi = {
          props: { text: String },
          data: function() {
            return {
              tags: ["img", "video", "audio"],
              show: !1,
              imgSrc: "",
              videoSrc: "",
              audioSrc: "",
              loadState: !1
            };
          },
          computed: {
            getTag: function() {
              var t = this.text || "",
                e = "span",
                i = "";
              return (
                t.match(/<\/?[^>]+>/) &&
                  ((i = t.split(" ")[0].replace(/<|>/, "") || ""),
                  this.tags.includes(i) && (e = i)),
                e
              );
            },
            getData: function() {
              var t = this.text || "",
                e = document.createElement("div");
              e.innerHTML = t;
              var i = e.firstChild,
                o = i.getAttribute("data-src"),
                n = i.getAttribute("controls") || !1;
              return { src: o, controls: n };
            }
          },
          methods: {
            load: function(t) {
              this.loadState ||
                ((this.loadState = !0),
                this.$emit("loadDone", { type: t, target: this.text }));
            },
            handleClose: function(t) {
              (this.imgSrc = void 0),
                (this.videoSrc = void 0),
                (this.audioSrc = void 0),
                t();
            },
            showDialog: function(t) {
              var e = this,
                i = t.tag,
                o = this.getData.src,
                n = function() {
                  "img" === i
                    ? ((e.imgSrc = o), (e.show = !0))
                    : "video" === i
                    ? ((e.videoSrc = o), (e.show = !0))
                    : "audio" === i
                    ? ((e.audioSrc = o), (e.show = !0))
                    : "FILE" === i && window.open(o);
                };
              "function" === typeof this.beforeOpen
                ? this.beforeOpen({ tag: i, src: o }, n)
                : n();
            },
            itemCallback: function() {
              this.$emit("systemEvent", this.text);
            },
            parseText: function() {
              var t = this.text;
              if (t) {
                t = t.replace(/\n/g, "<br/>");
                var e = Gi(t).replace(
                  /<img src/g,
                  '<img data-class="iconBox" src'
                );
                return (
                  (e = e.replace(
                    "https://res.wx.qq.com/wxdoc/dist/assets/img/emoji-sprite.b5bd1fe0.png",
                    "https://codegi.gitee.io/chat/emoji-sprite.png"
                  )),
                  e
                );
              }
            }
          },
          mounted: function() {
            var t = this,
              e = this.getTag;
            this.tags.includes(e) ||
              this.$nextTick(function() {
                t.$emit("loadDone", { type: e, target: t.text });
              });
          }
        },
        Zi = Qi,
        to = (i("2e58"), u(Zi, Bi, zi, !1, null, "3af7478a", null)),
        eo = to.exports,
        io = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "systemTalk" },
            [
              i("div", { staticClass: "title" }, [t._v(t._s(t.text.title))]),
              i("div", { staticClass: "subtitle" }, [
                t._v(t._s(t.text.subtitle))
              ]),
              t._l(t.text.content, function(e) {
                return i(
                  "div",
                  { key: JSON.stringify(e) },
                  [
                    !t.item_mine_bool.mina
                      ? i(
                          "el-link",
                          {
                            attrs: { type: "info" },
                            on: {
                              click: function(i) {
                                return i.stopPropagation(), t.itemCallback(e);
                              }
                            }
                          },
                          [t._v(t._s(e.text))]
                        )
                      : i(
                          "el-link",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function(i) {
                                return i.stopPropagation(), t.itemCallback(e);
                              }
                            }
                          },
                          [t._v(t._s(e.text))]
                        )
                  ],
                  1
                );
              })
            ],
            2
          );
        },
        oo = [],
        no = {
          props: {
            text: {
              type: Object,
              default: function() {
                return {};
              }
            },
            item_mine_bool: {
              type: Object,
              default: function() {
                return {};
              }
            }
          },
          methods: {
            itemCallback: function(t) {
              this.$emit("systemEvent", t);
            }
          },
          mounted: function() {
            var t = this;
            this.$nextTick(function() {
              t.$emit("loadDone", { type: "system", target: t.text });
            });
          }
        },
        ro = no,
        so = (i("0605"), u(ro, io, oo, !1, null, "4e632b34", null)),
        ao = so.exports,
        co = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "shopTalk", on: { click: t.itemCallback } },
            [
              i("div", { staticClass: "cover" }, [
                i("img", { attrs: { src: t.text.cover, alt: "" } })
              ]),
              i("div", { staticClass: "price" }, [
                t._v(" " + t._s(t.text.price))
              ]),
              i("div", { staticClass: "title" }, [t._v(t._s(t.text.title))]),
              t.text.describe
                ? i("div", { staticClass: "subtitle" }, [
                    t._v(t._s(t.text.describe))
                  ])
                : t._e(),
              t.text.tags && t.text.tags.length
                ? i(
                    "div",
                    { staticClass: "tagBox" },
                    t._l(t.text.tags, function(e, o) {
                      return i("span", { key: o }, [
                        t._v(" " + t._s(e.name) + " ")
                      ]);
                    }),
                    0
                  )
                : t._e()
            ]
          );
        },
        lo = [];
      i("b64b"), i("4de4"), i("e439"), i("dbb4");
      function ho(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, o);
        }
        return i;
      }
      function po(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ho(Object(i), !0).forEach(function(e) {
                _(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ho(Object(i)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      var uo = {
          props: {
            text: {
              type: Object,
              default: function() {
                return {};
              }
            }
          },
          methods: {
            itemCallback: function() {
              this.$emit(
                "systemEvent",
                po(po({}, this.text), {}, { type: "shop" })
              );
            }
          },
          mounted: function() {
            var t = this;
            this.$nextTick(function() {
              t.$emit("loadDone", { type: "shop", target: t.text });
            });
          }
        },
        fo = uo,
        mo = (i("b10c"), u(fo, co, lo, !1, null, "8d5a38ae", null)),
        vo = mo.exports,
        go = {
          name: "JwChat_list",
          components: { itemTalk: eo, systemTalk: ao, shopTalk: vo },
          props: {
            list: {
              type: Array,
              default: function() {
                return [];
              }
            },
            config: {
              type: Object,
              default: function() {
                return {};
              }
            }
          },
          data: function() {
            return { scroll: null, stopScroll: !1 };
          },
          computed: {
            boxSize: function() {
              var t = this.config || {},
                e = t.height,
                i = void 0 === e ? "382px" : e,
                o = t.width,
                n = void 0 === o ? "525px" : o;
              return (
                "".concat(i).match(/\d$/) && (i += "px"),
                "".concat(n).match(/\d$/) && (n += "px"),
                { height: i, width: n }
              );
            },
            historyConfig: function() {
              var t = this.config.historyConfig || {},
                e = t.tip,
                i = void 0 === e ? "" : e,
                o = t.show,
                n = void 0 !== o && o,
                r = this.scroll || {},
                s = r.tipText;
              return { tip: i || s, show: n };
            },
            scrollType: function() {
              var t = this.config.scrollType,
                e = void 0 === t ? "noroll" : t;
              return e;
            },
            unread: function() {
              var t = this.scroll || {},
                e = t.unread,
                i = void 0 === e ? 0 : e;
              return i;
            },
            showDownBtn: function() {
              return !!this.scroll && !this.scroll.isBottom;
            }
          },
          watch: {
            boxSize: function() {
              this.scroll.refresh();
            }
          },
          methods: {
            loadDone: function() {
              "scroll" == this.scrollType && this.scrollBottom();
            },
            scrollBottom: function() {
              this.scroll &&
                (this.scroll.isLoding ||
                  (this.scroll.refresh(), this.scroll.scrollBottom()));
            },
            createScroll: function() {
              var t = this.historyConfig || {},
                e = t.show,
                i = void 0 !== e && e;
              (this.scroll = new Oi(this.$refs.scroller, {
                scrollType: this.scrollType,
                pullingDown: i
              })),
                this.scroll.on("refresh", this.childnodeLoad),
                i && this.scroll.on("pullingDown", this.pullingDownHandler);
            },
            finishPullDown: function() {
              this.scroll.finishPullDown();
            },
            childnodeLoad: function() {
              if ("noroll" === this.scrollType) {
                var t = this.$refs.main;
                if (t) {
                  var e = k(t.children),
                    i = e.slice(1);
                  this.scroll.saveNodes({ nodes: i, dataList: this.list });
                }
              }
            },
            pullingDownHandler: function() {
              this.$emit("loadHistory");
              this.scroll.finishPullDown();
            },
            systemEvent: function(t) {
              this.$emit("click", { type: "systemItem", data: t });
            },
            taskEvent: function(t) {
              this.$emit("click", { type: "taskItem", data: t });
            }
          },
          mounted: function() {
            this.createScroll();
          }
        },
        yo = go,
        bo = (i("1bb7"), u(yo, m, v, !1, null, "0f64dad9", null)),
        wo = bo.exports,
        xo = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "toolsBox" },
            [
              t.showEmoji
                ? [
                    i(
                      "el-popover",
                      {
                        ref: "popover",
                        attrs: { placement: "top-start", trigger: "click" }
                      },
                      [
                        i(
                          "ul",
                          { staticClass: "emjioBox" },
                          t._l(Object.keys(t.emoji), function(e) {
                            return i(
                              "li",
                              {
                                key: e,
                                on: {
                                  click: function(i) {
                                    return t.selectEmit(e);
                                  }
                                }
                              },
                              [
                                t.emoji[e] && t.emoji[e].position
                                  ? i("a", { style: t.emojiStyle(e) })
                                  : t.emoji[e].length < 5
                                  ? i("a", [t._v(t._s(t.emoji[e]))])
                                  : i("img", { attrs: { src: t.emoji[e] } })
                              ]
                            );
                          }),
                          0
                        ),
                        i("JwChat-icon", {
                          staticClass: "toolIcon",
                          attrs: {
                            slot: "reference",
                            type: "icon-xiaolian",
                            title: "表情"
                          },
                          slot: "reference"
                        })
                      ],
                      1
                    )
                  ]
                : t._e(),
              t._l(t.showkeys, function(e, o) {
                return [
                  t.toolConfig[e]
                    ? i("span", { key: e }, [
                        i(
                          "span",
                          {
                            on: {
                              click: function(i) {
                                return t.bindButton(e);
                              }
                            }
                          },
                          [
                            i("JwChat-icon", {
                              staticClass: "toolIcon",
                              attrs: {
                                type: t.toolConfig[e].icon,
                                title: t.iconTitle(e, o)
                              }
                            })
                          ],
                          1
                        )
                      ])
                    : i("i", {
                        key: e,
                        class: e,
                        on: {
                          click: function(i) {
                            return t.bindButton(e);
                          }
                        }
                      })
                ];
              }),
              t._t("tools")
            ],
            2
          );
        },
        ko = [],
        To = i("d11e"),
        So = {
          name: "JwChat-tools",
          props: {
            tools: {
              type: Object,
              default: function() {
                return {
                  show: ["file", "video", "img", "history", "more"],
                  showEmoji: !0,
                  callback: function() {}
                };
              }
            }
          },
          data: function() {
            return {
              emoji: To,
              toolConfig: {
                file: { icon: "icon-wenjian", title: "文件" },
                video: { icon: "icon-shipin", title: "视频" },
                img: { icon: "icon-xiangce", title: "图片" },
                hongbao: { icon: "icon-hongbao", title: "红包" },
                history: { icon: "icon-lishi", title: "历史" },
                more: { icon: "icon-gengduo", title: "更多" }
              },
              newTitle: null
            };
          },
          computed: {
            showEmoji: function() {
              var t = this.tools || {},
                e = t.showEmoji,
                i = void 0 === e || e;
              return i;
            },
            showkeys: function() {
              var t = this,
                e = Object.keys(this.toolConfig),
                i = this.tools || {},
                o = i.show,
                n = void 0 === o ? [] : o,
                r = [];
              return (
                n.length > 0 &&
                  n.forEach(function(i) {
                    Array.isArray(i)
                      ? (t.newTitle = i)
                      : e.includes(i) && r.push(i);
                  }),
                r
              );
            }
          },
          methods: {
            iconTitle: function(t, e) {
              var i = "";
              return (
                this.newTitle && (i = this.newTitle[e] || ""),
                i || (i = this.toolConfig[t].title),
                i
              );
            },
            selectEmit: function(t) {
              this.$emit("emoji", t), this.$refs.popover.doClose();
            },
            bindButton: function(t) {
              if (!this.tools.callback)
                return console.warn("callback not find");
              "file" === t
                ? this.openFile(t, this.tools.callback)
                : this.tools.callback(t);
            },
            openFile: function(t, e) {
              var i = document.createElement("input");
              (i.type = "file"),
                (i.multiple = "multiple"),
                i.click(),
                (i.onchange = function() {
                  var o = i.files;
                  e(t, o);
                });
            },
            emojiStyle: function(t) {
              var e = this.emoji[t];
              return e
                ? {
                    display: "inline-block",
                    background:
                      "url('https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/6AfH8-r.png')  no-repeat",
                    width: "28px",
                    height: "28px",
                    "background-position": e.position
                  }
                : {};
            }
          }
        },
        qo = So,
        _o = (i("bca3"), u(qo, xo, ko, !1, null, "b4bb0df6", null)),
        Po = _o.exports,
        Co = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.showList.length
            ? i("div", { ref: "quickListBox", staticClass: "quickListBox" }, [
                i(
                  "div",
                  { staticClass: "quickList" },
                  t._l(t.showList, function(e, o) {
                    return i("div", { key: o, staticClass: "quickItem" }, [
                      i("span", { domProps: { innerHTML: t._s(e.showtext) } }),
                      i("i", {
                        staticClass: "enterBtn el-icon-circle-check",
                        attrs: { title: "选择" },
                        on: {
                          click: function(i) {
                            return t.submit(e);
                          }
                        }
                      })
                    ]);
                  }),
                  0
                )
              ])
            : t._e();
        },
        Eo = [],
        Mo =
          (i("4d63"),
          i("25f0"),
          {
            components: {},
            data: function() {
              return { scroll: null, complete: null };
            },
            props: {
              list: {
                type: Array,
                default: function() {
                  return [];
                }
              },
              msg: { type: String, default: "" }
            },
            computed: {
              showList: function() {
                var t = this.msg;
                if (!t) return [];
                var e = this.list,
                  i = new RegExp(t),
                  o = [];
                return (
                  e.forEach(function(e) {
                    var n = e.text;
                    if (i.test(n)) {
                      var r = n.replace(i, "<b>".concat(t, "</b>"));
                      o.push(po(po({}, e), {}, { showtext: r }));
                    }
                  }),
                  o
                );
              }
            },
            methods: {
              submit: function(t) {
                this.$emit("submit", t);
              }
            }
          }),
        Oo = Mo,
        Bo = (i("64b2"), u(Oo, Co, Eo, !1, null, "52dec552", null)),
        zo = Bo.exports,
        Lo = {
          name: "JwChat",
          components: { EnterBox: f, chatList: wo, tools: Po, quickList: zo },
          props: {
            taleList: {
              type: Array,
              default: function() {
                return [];
              }
            },
            height: { default: "500px" },
            width: { default: "550px" },
            value: { default: "" },
            scrollType: { default: "" },
            toolConfig: { type: Object },
            config: {},
            quickList: {
              type: Array,
              default: function() {
                return [];
              }
            },
            placeholder: { type: String }
          },
          data: function() {
            return { msg: "", insert: "" };
          },
          watch: {
            value: {
              handler: function() {
                this.msg = this.value;
              },
              immediate: !0
            },
            msg: {
              handler: function() {
                this.$emit("input", this.msg);
              },
              immediate: !0
            }
          },
          computed: {
            talkHeight: function() {
              var t = this.height;
              return (
                "".concat(t).match(/\d$/)
                  ? (t -= 160)
                  : (t = "calc(".concat(t, " - 160px)")),
                t
              );
            },
            chatListConfig: function() {
              var t = this.width,
                e = this.talkHeight,
                i = this.scrollType,
                o = this.config;
              o = void 0 === o ? {} : o;
              var n = o.historyConfig,
                r = void 0 === n ? {} : n;
              return { width: t, height: e, scrollType: i, historyConfig: r };
            }
          },
          methods: {
            bindEmoji: function(t) {
              var e = this;
              (this.insert = t),
                this.$nextTick(function() {
                  e.insert = "";
                });
            },
            loadHistoryHandler: function() {
              var t = this.chatListConfig.historyConfig;
              t = void 0 === t ? {} : t;
              var e = t.callback,
                i = void 0 === e ? null : e;
              i && i();
            },
            quickSubmit: function(t) {
              var e = this,
                i = t.text;
              (this.msg = i),
                this.$nextTick(function() {
                  e.$emit("enter", t), (e.msg = "");
                });
            },
            finishPullDown: function() {
              this.$refs.chatList.finishPullDown();
            }
          }
        },
        Do = Lo,
        jo = (i("e35f"), u(Do, s, a, !1, null, "f150358a", null)),
        Ao = jo.exports;
      Ao.install = function(t) {
        t.component(Ao.name, Ao);
      };
      var Ho = Ao,
        Io = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass: "ChatPage",
              style: { width: t.width, height: t.height }
            },
            [
              "{}" !== JSON.stringify(t.winBarConfig)
                ? i(
                    "div",
                    { staticClass: "winBar" },
                    [
                      i("WinBar", {
                        attrs: { config: t.winBarConfig },
                        on: { click: t.winBarClick }
                      })
                    ],
                    1
                  )
                : t._e(),
              i("div", { staticClass: "ChatPage-main" }, [
                i(
                  "div",
                  { staticClass: "header" },
                  [
                    i("JwChat-item", {
                      attrs: { config: t.config },
                      on: { click: t.bindClick }
                    }),
                    t._t("header")
                  ],
                  2
                ),
                i(
                  "div",
                  {
                    staticClass: "main",
                    style: {
                      width: t.winBarWidth
                        ? "calc(" + t.width + " - " + t.winBarWidth + ")"
                        : t.width
                    }
                  },
                  [
                    i(
                      "div",
                      { staticClass: "chatBox" },
                      [
                        i(
                          "JwChat",
                          {
                            ref: "jwChatEmpty",
                            attrs: {
                              taleList: t.taleList,
                              toolConfig: t.toolConfig,
                              scrollType: t.scrollType,
                              width: "100%",
                              height: "calc(" + t.height + " - 60px)",
                              config: t.chatConfig,
                              quickList: t.quickList,
                              placeholder: t.placeholder
                            },
                            on: {
                              enter: function(e) {
                                return t.$emit("enter", e);
                              },
                              clickTalk: function(e) {
                                return t.$emit("clickTalk", e);
                              }
                            },
                            scopedSlots: t._u(
                              [
                                t.$scopedSlots.downBtn
                                  ? {
                                      key: "downBtn",
                                      fn: function(e) {
                                        var i = e.unread;
                                        return [
                                          t._t("downBtn", null, { unread: i })
                                        ];
                                      }
                                    }
                                  : null
                              ],
                              null,
                              !0
                            ),
                            model: {
                              value: t.msg,
                              callback: function(e) {
                                t.msg = e;
                              },
                              expression: "msg"
                            }
                          },
                          [
                            t._t("tools", null, { slot: "tools" }),
                            t._t("enterBtn", null, { slot: "enterBtn" }),
                            t._t("enter", null, { slot: "enter" })
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    t.showRightBox
                      ? i(
                          "div",
                          {
                            staticClass: "rightBox",
                            style: t.switchBox ? "" : "width:0;padding:0;"
                          },
                          [
                            i(
                              "span",
                              {
                                on: {
                                  click: function(e) {
                                    t.switchBox = !t.switchBox;
                                  }
                                }
                              },
                              [
                                t.switchBox
                                  ? i("JwChat-icon", {
                                      staticClass: "switch",
                                      attrs: { type: "icon-jiantou-xiangyou" }
                                    })
                                  : i("JwChat-icon", {
                                      staticClass: "switch",
                                      attrs: { type: "icon-jiantou-xiangzuo" }
                                    })
                              ],
                              1
                            ),
                            t.switchBox ? t._t("default") : t._e()
                          ],
                          2
                        )
                      : t._e()
                  ]
                )
              ])
            ]
          );
        },
        Ro = [],
        Yo = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "windowBar", style: t.winBarStyle }, [
            i("div", { ref: "windowBar", staticClass: "winBarBox" }, [
              i(
                "div",
                [
                  t._l(t.winList, function(e) {
                    return i(
                      "div",
                      {
                        key: e.id,
                        ref: "winItem" + e.id,
                        refInFor: !0,
                        class: { winItem: !0, winActive: t.activeItem == e.id },
                        style: t.winItemStyle,
                        on: {
                          click: function(i) {
                            return i.stopPropagation(), t.bindClick(e);
                          }
                        }
                      },
                      [
                        i("JwChat-item", { attrs: { config: e } }),
                        i(
                          "div",
                          { staticClass: "itemOperation" },
                          [
                            i("el-button", {
                              attrs: {
                                type: "info",
                                icon: "el-icon-close",
                                circle: "",
                                size: "mini"
                              },
                              on: {
                                click: function(i) {
                                  return (
                                    i.stopPropagation(),
                                    t.bindOperation({
                                      type: "remove",
                                      target: e
                                    })
                                  );
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    );
                  }),
                  t.winList.length
                    ? t._e()
                    : [
                        i("JwChat-empty", { attrs: { size: "8rem" } }),
                        i("el-divider", { staticStyle: { padding: "0 5px" } }, [
                          i(
                            "span",
                            { staticStyle: { "font-size": "0.2rem" } },
                            [t._v("暂无会话")]
                          )
                        ])
                      ]
                ],
                2
              )
            ])
          ]);
        },
        $o = [],
        Xo = {
          props: {
            config: {
              typeof: Object,
              default: function() {
                return {
                  list: [],
                  active: null,
                  width: "150px",
                  listHeight: "60px"
                };
              }
            }
          },
          data: function() {
            return {
              activeItem: 0,
              moveObj: {},
              scroll: null,
              complete: null,
              operationTimer: null
            };
          },
          computed: {
            winList: function() {
              var t = this.config.list,
                e = void 0 === t ? [] : t,
                i = e;
              return i;
            },
            winItemStyle: function() {
              var t = this.config.listHeight,
                e = void 0 === t ? "60px" : t;
              return { height: e };
            },
            winBarStyle: function() {
              var t = this.config.width,
                e = void 0 === t ? "150px" : t;
              return { width: e };
            }
          },
          watch: {
            "config.active": {
              handler: function(t) {
                t && (this.activeItem = t);
              },
              deep: !0,
              immediate: !0
            },
            "config.list": {
              handler: function(t) {
                t && this.scrollRefresh();
              },
              deep: !0,
              immediate: !0
            }
          },
          mounted: function() {
            var t = this.$refs.windowBar;
            this.scroll = new Oi(t, { pullingDown: !1 });
          },
          methods: {
            bindClick: function(t) {
              var e = t.id;
              (this.activeItem = e),
                this.$emit("click", { type: "winBar", data: t });
            },
            bindOperation: function(t) {
              this.$emit("click", { type: "winBtn", data: t });
            },
            scrollRefresh: function() {
              if (this.scroll) {
                var t = this;
                t.complete = setInterval(function() {
                  "complete" === document.readyState &&
                    (window.clearInterval(t.complete), t.scroll.refresh());
                }, 50);
              }
            }
          }
        },
        Fo = Xo,
        No = (i("15dd"), u(Fo, Yo, $o, !1, null, "7b376ca4", null)),
        Wo = No.exports,
        Vo = {
          name: "JwChat-index",
          components: { WinBar: Wo },
          props: {
            config: {
              type: Object,
              default: function() {
                return {
                  img: "image/cover.png",
                  name: "JwChat",
                  dept: "最简单、最便捷",
                  callback: function() {}
                };
              }
            },
            showRightBox: { type: Boolean, default: !0 },
            taleList: {
              type: Array,
              default: function() {
                return [];
              }
            },
            height: { type: String, default: "560px" },
            width: { default: "900px" },
            value: { default: "" },
            toolConfig: { type: Object },
            winBarConfig: {
              type: Object,
              default: function() {
                return {};
              }
            },
            scrollType: { default: "noroll" },
            placeholder: { type: String }
          },
          data: function() {
            return { msg: "", switchBox: !0 };
          },
          computed: {
            chatConfig: function() {
              var t = this.config || {},
                e = t.historyConfig,
                i = void 0 === e ? {} : e;
              return { historyConfig: i };
            },
            winBarWidth: function() {
              var t = 0;
              return (
                "{}" !== JSON.stringify(this.winBarConfig) &&
                  (t = this.winBarConfig.width),
                t
              );
            },
            quickList: function() {
              var t = this.config.quickList,
                e = void 0 === t ? [] : t;
              return e;
            }
          },
          watch: {
            value: {
              handler: function() {
                this.msg = this.value;
              },
              immediate: !0
            },
            msg: {
              handler: function() {
                this.$emit("input", this.msg);
              },
              immediate: !0
            },
            showRightBox: {
              handler: function(t) {
                "boolean" === typeof t && (this.switchBox = t);
              },
              immediate: !0
            }
          },
          methods: {
            bindClick: function(t) {
              var e = this.config || {},
                i = e.callback;
              i && i(t);
            },
            winBarClick: function(t) {
              var e = this.winBarConfig.callback,
                i = void 0 === e ? null : e;
              i && i(t);
            },
            finishPullDown: function() {
              this.$refs.jwChatEmpty.finishPullDown();
            }
          }
        },
        Jo = Vo,
        Uo = (i("2135"), u(Jo, Io, Ro, !1, null, "52808c7f", null)),
        Ko = Uo.exports;
      Ko.install = function(t) {
        t.component(Ko.name, Ko);
      };
      var Go = Ko,
        Qo = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "svg",
            { staticClass: "icon", attrs: { "aria-hidden": "true" } },
            [i("use", { attrs: { "xlink:href": "#" + t.type } })]
          );
        },
        Zo = [],
        tn =
          (i("f9f9"),
          {
            name: "JwChat-icon",
            props: { type: { type: String, required: !0 } }
          }),
        en = tn,
        on = (i("e883"), u(en, Qo, Zo, !1, null, null, null)),
        nn = on.exports;
      nn.install = function(t) {
        t.component(nn.name, nn);
      };
      var rn = nn,
        sn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "item" },
            [
              i(
                "el-badge",
                {
                  attrs: {
                    value: t.config.readNum,
                    hidden: t.config.readNum < 1
                  }
                },
                [
                  t.config.img
                    ? i("img", {
                        staticClass: "cover",
                        style: t.coverSize,
                        attrs: { src: t.config.img },
                        on: {
                          click: function(e) {
                            return t.bindClick({
                              key: "cover",
                              value: t.config
                            });
                          }
                        }
                      })
                    : t._e()
                ]
              ),
              i("div", { staticClass: "info" }, [
                i(
                  "p",
                  {
                    staticClass: "name",
                    on: {
                      click: function(e) {
                        return t.bindClick({ key: "name", value: t.config });
                      }
                    }
                  },
                  [t._v(t._s(t.config.name))]
                ),
                i(
                  "p",
                  {
                    staticClass: "dept",
                    on: {
                      click: function(e) {
                        return t.bindClick({ key: "dept", value: t.config });
                      }
                    }
                  },
                  [t._v(t._s(t.config.dept))]
                )
              ])
            ],
            1
          );
        },
        an = [],
        cn = {
          name: "JwChat-item",
          props: {
            config: {
              type: Object,
              default: function() {
                return { img: "", name: "JwChat", dept: "" };
              },
              required: !0
            },
            size: { default: 35 }
          },
          computed: {
            coverSize: function() {
              var t = this.size;
              return (
                "".concat(t).match(/\d$/) && (t += "px"),
                { width: t, height: t }
              );
            }
          },
          methods: {
            bindClick: function(t) {
              var e = t;
              this.$emit("click", e);
            }
          }
        },
        ln = cn,
        hn = (i("ea30"), u(ln, sn, an, !1, null, "506dd17f", null)),
        pn = hn.exports;
      pn.install = function(t) {
        t.component(pn.name, pn);
      };
      var un = pn,
        dn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "empty", style: t.sizeBox },
            [
              i("JwChat-icon", {
                style: t.sizeStyle,
                attrs: { type: "icon-empty" }
              })
            ],
            1
          );
        },
        fn = [],
        mn = {
          name: "JwChat-empty",
          props: { size: { default: "5rem" } },
          computed: {
            sizeBox: function() {
              var t = this.size;
              return "".concat(t).match(/\d$/) && (t += "px"), { width: t };
            },
            sizeStyle: function() {
              var t = this.size;
              return (
                "".concat(t).match(/\d$/) && (t += "px"),
                { fontSize: "calc(".concat(t, " / 2)") }
              );
            }
          }
        },
        vn = mn,
        gn = (i("f826"), u(vn, dn, fn, !1, null, "229d24da", null)),
        yn = gn.exports;
      yn.install = function(t) {
        t.component(yn.name, yn);
      };
      var bn = yn,
        wn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "wrapper" }, [
            i(
              "div",
              { staticClass: "notice", staticStyle: {} },
              [
                t.info.notice
                  ? t._e()
                  : i("JwChat-empty", {
                      staticClass: "empty",
                      attrs: { size: "8rem" }
                    }),
                i("P", { staticStyle: { "padding-left": "0.2rem" } }, [
                  t._v(t._s(t.info.tip))
                ]),
                i(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "0.8rem",
                      "margin-top": "0.5rem",
                      padding: "0 0.2rem"
                    }
                  },
                  [t._v(" " + t._s(t.info.notice) + " ")]
                )
              ],
              1
            ),
            i("div", { staticClass: "userList" }, [
              i("div", [
                t._v(
                  t._s(t.info.listTip) + " (" + t._s(t.dataList.length) + ")"
                )
              ]),
              i(
                "div",
                [
                  i("el-input", {
                    attrs: {
                      placeholder: t.info.filterTip,
                      clearable: "",
                      size: "mini"
                    },
                    model: {
                      value: t.filter,
                      callback: function(e) {
                        t.filter = e;
                      },
                      expression: "filter"
                    }
                  })
                ],
                1
              ),
              i("div", { staticClass: "listBox" }, [
                i("div", { ref: "scrollBox", staticClass: "scrollBox" }, [
                  i(
                    "ul",
                    t._l(t.dataList, function(e, o) {
                      return i(
                        "li",
                        { key: o },
                        [
                          i("JwChat-item", {
                            attrs: { size: "25", config: e },
                            on: { click: t.bindClick }
                          })
                        ],
                        1
                      );
                    }),
                    0
                  )
                ])
              ])
            ])
          ]);
        },
        xn = [],
        kn = {
          name: "JwChat-rightbox",
          props: { config: Object },
          data: function() {
            return { filter: "", scroll: null };
          },
          watch: {
            "config.list": {
              handler: function(t) {
                t && this.scrollRefresh();
              },
              deep: !0,
              immediate: !0
            }
          },
          mounted: function() {
            var t = this.$refs.scrollBox;
            this.scroll = new Oi(t, { pullingDown: !1 });
          },
          computed: {
            info: function() {
              var t = this.config,
                e = t.tip,
                i = void 0 === e ? "群公告:" : e,
                o = t.notice,
                n = void 0 === o ? "" : o,
                r = t.listTip,
                s = void 0 === r ? "组成员" : r,
                a = t.filterTip,
                c = void 0 === a ? "搜索好友" : a;
              return { tip: i, notice: n, listTip: s, filterTip: c };
            },
            dataList: function() {
              var t = this.config.list,
                e = void 0 === t ? [] : t,
                i = this.filter;
              if (!i) return e;
              var o = [],
                n = new RegExp(i, "g");
              return (
                e.forEach(function(t) {
                  var e = t.name;
                  n.test(e) && o.push(t);
                }),
                o
              );
            }
          },
          methods: {
            bindClick: function(t) {
              this.$emit("click", t);
            },
            scrollRefresh: function() {
              if (this.scroll) {
                var t = this;
                t.complete = setInterval(function() {
                  "complete" === document.readyState &&
                    (window.clearInterval(t.complete), t.scroll.refresh());
                }, 50);
              }
            }
          }
        },
        Tn = kn,
        Sn = (i("ca83"), u(Tn, wn, xn, !1, null, "88ddece2", null)),
        qn = Sn.exports;
      qn.install = function(t) {
        t.component(qn.name, qn);
      };
      var _n = qn,
        Pn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "wrapper" },
            [
              t.showHeader
                ? i(
                    "el-menu",
                    {
                      staticClass: "el-menu-demo",
                      attrs: {
                        "default-active": t.activeIndex,
                        mode: "horizontal"
                      },
                      on: { select: t.handleSelect }
                    },
                    [
                      t._l(t.showNav, function(e, o) {
                        return i(
                          "el-menu-item",
                          { key: e, attrs: { index: "" + (o + 1) } },
                          [t._v(t._s(e))]
                        );
                      }),
                      i("i", {
                        staticClass: "addBtn el-icon-circle-plus-outline",
                        style: t.showAddBtn,
                        attrs: { title: "新增" },
                        on: {
                          click: function(e) {
                            t.visible = !0;
                          }
                        }
                      })
                    ],
                    2
                  )
                : t._e(),
              t.Talelist.length ? t._e() : i("JwChat-empty"),
              i(
                "ul",
                t._l(t.Talelist, function(e, o) {
                  return i(
                    "li",
                    { key: e },
                    [
                      i(
                        "el-row",
                        [
                          i(
                            "el-col",
                            { attrs: { span: 0 == t.showDelete ? 21 : 19 } },
                            [i("p", [t._v(t._s(e))])]
                          ),
                          i(
                            "el-col",
                            {
                              staticStyle: { "text-algin": "right" },
                              attrs: { span: 0 == t.showDelete ? 3 : 5 }
                            },
                            [
                              i("i", {
                                staticClass: "el-icon-circle-check",
                                attrs: { title: "发送" },
                                on: {
                                  click: function(i) {
                                    return t.emit({ key: "select", value: e });
                                  }
                                }
                              }),
                              t.showDelete
                                ? i("i", {
                                    staticClass: "el-icon-circle-close",
                                    attrs: { title: "删除" },
                                    on: {
                                      click: function(e) {
                                        return t.emit({
                                          key: "delIndex",
                                          value: o
                                        });
                                      }
                                    }
                                  })
                                : t._e()
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  );
                }),
                0
              ),
              i(
                "el-dialog",
                {
                  attrs: {
                    title: "新增快捷回复",
                    visible: t.visible,
                    width: "36%",
                    "modal-append-to-body": !1
                  },
                  on: {
                    "update:visible": function(e) {
                      t.visible = e;
                    }
                  }
                },
                [
                  i("el-input", {
                    attrs: {
                      rows: 3,
                      "show-word-limit": "",
                      maxlength: t.maxlength,
                      placeholder: "请输入快捷回复语",
                      type: "textarea"
                    },
                    model: {
                      value: t.itemQuick,
                      callback: function(e) {
                        t.itemQuick = e;
                      },
                      expression: "itemQuick"
                    }
                  }),
                  i(
                    "div",
                    {
                      staticStyle: {
                        "text-align": "right",
                        margin: "0",
                        "margin-top": "10px"
                      }
                    },
                    [
                      i(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "text" },
                          on: {
                            click: function(e) {
                              t.visible = !1;
                            }
                          }
                        },
                        [t._v("取消")]
                      ),
                      i(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "mini" },
                          on: { click: t.AddQuickFn }
                        },
                        [t._v("确定")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        Cn = [];
      function En(t, e) {
        var i =
          null == t
            ? null
            : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != i) {
          var o,
            n,
            r = [],
            s = !0,
            a = !1;
          try {
            for (i = i.call(t); !(s = (o = i.next()).done); s = !0)
              if ((r.push(o.value), e && r.length === e)) break;
          } catch (c) {
            (a = !0), (n = c);
          } finally {
            try {
              s || null == i["return"] || i["return"]();
            } finally {
              if (a) throw n;
            }
          }
          return r;
        }
      }
      function Mn(t, e) {
        return g(t) || En(t, e) || w(t, e) || x();
      }
      var On = {
          name: "JwChat-talk",
          props: { Talelist: Array, config: Object },
          data: function() {
            var t = this.config.maxlength,
              e = void 0 === t ? 300 : t;
            return {
              activeIndex: "1",
              visible: !1,
              itemQuick: "",
              maxlength: e
            };
          },
          computed: {
            showAddBtn: function() {
              var t = !0,
                e = "visible",
                i = this.config.showAdd,
                o = void 0 === i || i;
              return (t = o), t || (e = "hidden"), { visibility: e };
            },
            showNav: function() {
              var t = ["快捷回复"],
                e = this.config.nav;
              if (e) {
                var i = Mn(e, 2),
                  o = i[0],
                  n = i[1];
                t = [o, n];
              }
              return t;
            },
            showDelete: function() {
              var t = !0,
                e = this.config || {},
                i = e.showDeleteBtn;
              return !1 === i && (t = !1), t;
            }
          },
          methods: {
            showHeader: function() {
              var t = !0,
                e = this.config || {},
                i = e.showHeader,
                o = void 0 === i || i;
              return !1 === o && (t = !1), t;
            },
            handleSelect: function(t) {
              (this.activeIndex = t), this.emit({ key: "navIndex", value: t });
            },
            AddQuickFn: function() {
              var t = this;
              this.emit({ key: "addTalk", value: this.itemQuick }),
                (this.visible = !1),
                this.$nextTick(function() {
                  t.itemQuick = "";
                });
            },
            emit: function(t) {
              this.$emit("event", t);
            }
          }
        },
        Bn = On,
        zn = (i("95f5"), u(Bn, Pn, Cn, !1, null, "643b3e2e", null)),
        Ln = zn.exports;
      Ln.install = function(t) {
        t.component(Ln.name, Ln);
      };
      var Dn = Ln,
        jn = [Ho, Go, rn, un, bn, _n, Dn],
        An = function t(e) {
          t.installed ||
            ((t.installed = !0),
            jn.map(function(t) {
              e.component(t.name, t);
            }));
        };
      "undefined" !== typeof window && window.Vue && An(window.Vue);
      var Hn = {
        install: An,
        Chat: Ho,
        ChatPage: Go,
        Icon: rn,
        UserItem: un,
        Empty: bn,
        RightList: _n,
        QuickTalk: Dn
      };
      e["default"] = Hn;
    },
    fb6a: function(t, e, i) {
      "use strict";
      var o = i("23e7"),
        n = i("e8b5"),
        r = i("68ee"),
        s = i("861d"),
        a = i("23cb"),
        c = i("50c4"),
        l = i("fc6a"),
        h = i("8418"),
        p = i("b622"),
        u = i("1dde"),
        d = u("slice"),
        f = p("species"),
        m = [].slice,
        v = Math.max;
      o(
        { target: "Array", proto: !0, forced: !d },
        {
          slice: function(t, e) {
            var i,
              o,
              p,
              u = l(this),
              d = c(u.length),
              g = a(t, d),
              y = a(void 0 === e ? d : e, d);
            if (
              n(u) &&
              ((i = u.constructor),
              r(i) && (i === Array || n(i.prototype))
                ? (i = void 0)
                : s(i) && ((i = i[f]), null === i && (i = void 0)),
              i === Array || void 0 === i)
            )
              return m.call(u, g, y);
            for (
              o = new (void 0 === i ? Array : i)(v(y - g, 0)), p = 0;
              g < y;
              g++, p++
            )
              g in u && h(o, p, u[g]);
            return (o.length = p), o;
          }
        }
      );
    },
    fc6a: function(t, e, i) {
      var o = i("44ad"),
        n = i("1d80");
      t.exports = function(t) {
        return o(n(t));
      };
    },
    fce3: function(t, e, i) {
      var o = i("d039"),
        n = i("da84"),
        r = n.RegExp;
      t.exports = o(function() {
        var t = r(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags);
      });
    },
    fdbc: function(t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    },
    fdbf: function(t, e, i) {
      var o = i("4930");
      t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    }
  })["default"];
});
