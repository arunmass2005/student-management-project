import {
  g as Z,
  d as G,
  r as B,
  u as Y,
  j as n,
  e as Q,
} from "./index_90212d48.js";
import {
  r as I,
  b as J,
  h as z,
  o as ee,
  e as te,
} from "./scripts-80522572.js";
import { R as K } from "./Requirements-8481320a.js";
const re = {},
  se = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: re },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  L = Z(se);
var X = { exports: {} };
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.10.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */ (function (g) {
  (function () {
    var b = "input is invalid type",
      S = typeof window == "object",
      v = S ? window : {};
    v.JS_SHA256_NO_WINDOW && (S = !1);
    var A = !S && typeof self == "object",
      _ =
        !v.JS_SHA256_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    _ ? (v = G) : A && (v = self);
    var O = !v.JS_SHA256_NO_COMMON_JS && !0 && g.exports,
      E = !v.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      a = "0123456789abcdef".split(""),
      $ = [-2147483648, 8388608, 32768, 128],
      w = [24, 16, 8, 0],
      C = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ],
      R = ["hex", "array", "digest", "arrayBuffer"],
      F = [];
    (v.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      }),
      E &&
        (v.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (e) {
          return (
            typeof e == "object" &&
            e.buffer &&
            e.buffer.constructor === ArrayBuffer
          );
        });
    var H = function (e, o) {
        return function (l) {
          return new p(o, !0).update(l)[e]();
        };
      },
      y = function (e) {
        var o = H("hex", e);
        _ && (o = s(o, e)),
          (o.create = function () {
            return new p(e);
          }),
          (o.update = function (c) {
            return o.create().update(c);
          });
        for (var l = 0; l < R.length; ++l) {
          var i = R[l];
          o[i] = H(i, e);
        }
        return o;
      },
      s = function (e, o) {
        var l = L,
          i = L.Buffer,
          c = o ? "sha224" : "sha256",
          r;
        i.from && !v.JS_SHA256_NO_BUFFER_FROM
          ? (r = i.from)
          : (r = function (t) {
              return new i(t);
            });
        var u = function (t) {
          if (typeof t == "string")
            return l.createHash(c).update(t, "utf8").digest("hex");
          if (t == null) throw new Error(b);
          return (
            t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
            Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === i
              ? l.createHash(c).update(r(t)).digest("hex")
              : e(t)
          );
        };
        return u;
      },
      d = function (e, o) {
        return function (l, i) {
          return new D(l, o, !0).update(i)[e]();
        };
      },
      f = function (e) {
        var o = d("hex", e);
        (o.create = function (c) {
          return new D(c, e);
        }),
          (o.update = function (c, r) {
            return o.create(c).update(r);
          });
        for (var l = 0; l < R.length; ++l) {
          var i = R[l];
          o[i] = d(i, e);
        }
        return o;
      };
    function p(e, o) {
      o
        ? ((F[0] =
            F[16] =
            F[1] =
            F[2] =
            F[3] =
            F[4] =
            F[5] =
            F[6] =
            F[7] =
            F[8] =
            F[9] =
            F[10] =
            F[11] =
            F[12] =
            F[13] =
            F[14] =
            F[15] =
              0),
          (this.blocks = F))
        : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        e
          ? ((this.h0 = 3238371032),
            (this.h1 = 914150663),
            (this.h2 = 812702999),
            (this.h3 = 4144912697),
            (this.h4 = 4290775857),
            (this.h5 = 1750603025),
            (this.h6 = 1694076839),
            (this.h7 = 3204075428))
          : ((this.h0 = 1779033703),
            (this.h1 = 3144134277),
            (this.h2 = 1013904242),
            (this.h3 = 2773480762),
            (this.h4 = 1359893119),
            (this.h5 = 2600822924),
            (this.h6 = 528734635),
            (this.h7 = 1541459225)),
        (this.block = this.start = this.bytes = this.hBytes = 0),
        (this.finalized = this.hashed = !1),
        (this.first = !0),
        (this.is224 = e);
    }
    (p.prototype.update = function (e) {
      if (!this.finalized) {
        var o,
          l = typeof e;
        if (l !== "string") {
          if (l === "object") {
            if (e === null) throw new Error(b);
            if (E && e.constructor === ArrayBuffer) e = new Uint8Array(e);
            else if (!Array.isArray(e) && (!E || !ArrayBuffer.isView(e)))
              throw new Error(b);
          } else throw new Error(b);
          o = !0;
        }
        for (var i, c = 0, r, u = e.length, t = this.blocks; c < u; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (t[0] = this.block),
              (t[16] =
                t[1] =
                t[2] =
                t[3] =
                t[4] =
                t[5] =
                t[6] =
                t[7] =
                t[8] =
                t[9] =
                t[10] =
                t[11] =
                t[12] =
                t[13] =
                t[14] =
                t[15] =
                  0)),
            o)
          )
            for (r = this.start; c < u && r < 64; ++c)
              t[r >> 2] |= e[c] << w[r++ & 3];
          else
            for (r = this.start; c < u && r < 64; ++c)
              (i = e.charCodeAt(c)),
                i < 128
                  ? (t[r >> 2] |= i << w[r++ & 3])
                  : i < 2048
                  ? ((t[r >> 2] |= (192 | (i >> 6)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | (i & 63)) << w[r++ & 3]))
                  : i < 55296 || i >= 57344
                  ? ((t[r >> 2] |= (224 | (i >> 12)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | ((i >> 6) & 63)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | (i & 63)) << w[r++ & 3]))
                  : ((i =
                      65536 +
                      (((i & 1023) << 10) | (e.charCodeAt(++c) & 1023))),
                    (t[r >> 2] |= (240 | (i >> 18)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | ((i >> 12) & 63)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | ((i >> 6) & 63)) << w[r++ & 3]),
                    (t[r >> 2] |= (128 | (i & 63)) << w[r++ & 3]));
          (this.lastByteIndex = r),
            (this.bytes += r - this.start),
            r >= 64
              ? ((this.block = t[16]),
                (this.start = r - 64),
                this.hash(),
                (this.hashed = !0))
              : (this.start = r);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0),
            (this.bytes = this.bytes % 4294967296)),
          this
        );
      }
    }),
      (p.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var e = this.blocks,
            o = this.lastByteIndex;
          (e[16] = this.block),
            (e[o >> 2] |= $[o & 3]),
            (this.block = e[16]),
            o >= 56 &&
              (this.hashed || this.hash(),
              (e[0] = this.block),
              (e[16] =
                e[1] =
                e[2] =
                e[3] =
                e[4] =
                e[5] =
                e[6] =
                e[7] =
                e[8] =
                e[9] =
                e[10] =
                e[11] =
                e[12] =
                e[13] =
                e[14] =
                e[15] =
                  0)),
            (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
            (e[15] = this.bytes << 3),
            this.hash();
        }
      }),
      (p.prototype.hash = function () {
        var e = this.h0,
          o = this.h1,
          l = this.h2,
          i = this.h3,
          c = this.h4,
          r = this.h5,
          u = this.h6,
          t = this.h7,
          h = this.blocks,
          m,
          q,
          N,
          k,
          x,
          P,
          U,
          T,
          M,
          W,
          V;
        for (m = 16; m < 64; ++m)
          (x = h[m - 15]),
            (q =
              ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3)),
            (x = h[m - 2]),
            (N =
              ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10)),
            (h[m] = (h[m - 16] + q + h[m - 7] + N) << 0);
        for (V = o & l, m = 0; m < 64; m += 4)
          this.first
            ? (this.is224
                ? ((T = 300032),
                  (x = h[0] - 1413257819),
                  (t = (x - 150054599) << 0),
                  (i = (x + 24177077) << 0))
                : ((T = 704751109),
                  (x = h[0] - 210244248),
                  (t = (x - 1521486534) << 0),
                  (i = (x + 143694565) << 0)),
              (this.first = !1))
            : ((q =
                ((e >>> 2) | (e << 30)) ^
                ((e >>> 13) | (e << 19)) ^
                ((e >>> 22) | (e << 10))),
              (N =
                ((c >>> 6) | (c << 26)) ^
                ((c >>> 11) | (c << 21)) ^
                ((c >>> 25) | (c << 7))),
              (T = e & o),
              (k = T ^ (e & l) ^ V),
              (U = (c & r) ^ (~c & u)),
              (x = t + N + U + C[m] + h[m]),
              (P = q + k),
              (t = (i + x) << 0),
              (i = (x + P) << 0)),
            (q =
              ((i >>> 2) | (i << 30)) ^
              ((i >>> 13) | (i << 19)) ^
              ((i >>> 22) | (i << 10))),
            (N =
              ((t >>> 6) | (t << 26)) ^
              ((t >>> 11) | (t << 21)) ^
              ((t >>> 25) | (t << 7))),
            (M = i & e),
            (k = M ^ (i & o) ^ T),
            (U = (t & c) ^ (~t & r)),
            (x = u + N + U + C[m + 1] + h[m + 1]),
            (P = q + k),
            (u = (l + x) << 0),
            (l = (x + P) << 0),
            (q =
              ((l >>> 2) | (l << 30)) ^
              ((l >>> 13) | (l << 19)) ^
              ((l >>> 22) | (l << 10))),
            (N =
              ((u >>> 6) | (u << 26)) ^
              ((u >>> 11) | (u << 21)) ^
              ((u >>> 25) | (u << 7))),
            (W = l & i),
            (k = W ^ (l & e) ^ M),
            (U = (u & t) ^ (~u & c)),
            (x = r + N + U + C[m + 2] + h[m + 2]),
            (P = q + k),
            (r = (o + x) << 0),
            (o = (x + P) << 0),
            (q =
              ((o >>> 2) | (o << 30)) ^
              ((o >>> 13) | (o << 19)) ^
              ((o >>> 22) | (o << 10))),
            (N =
              ((r >>> 6) | (r << 26)) ^
              ((r >>> 11) | (r << 21)) ^
              ((r >>> 25) | (r << 7))),
            (V = o & l),
            (k = V ^ (o & i) ^ W),
            (U = (r & u) ^ (~r & t)),
            (x = c + N + U + C[m + 3] + h[m + 3]),
            (P = q + k),
            (c = (e + x) << 0),
            (e = (x + P) << 0),
            (this.chromeBugWorkAround = !0);
        (this.h0 = (this.h0 + e) << 0),
          (this.h1 = (this.h1 + o) << 0),
          (this.h2 = (this.h2 + l) << 0),
          (this.h3 = (this.h3 + i) << 0),
          (this.h4 = (this.h4 + c) << 0),
          (this.h5 = (this.h5 + r) << 0),
          (this.h6 = (this.h6 + u) << 0),
          (this.h7 = (this.h7 + t) << 0);
      }),
      (p.prototype.hex = function () {
        this.finalize();
        var e = this.h0,
          o = this.h1,
          l = this.h2,
          i = this.h3,
          c = this.h4,
          r = this.h5,
          u = this.h6,
          t = this.h7,
          h =
            a[(e >> 28) & 15] +
            a[(e >> 24) & 15] +
            a[(e >> 20) & 15] +
            a[(e >> 16) & 15] +
            a[(e >> 12) & 15] +
            a[(e >> 8) & 15] +
            a[(e >> 4) & 15] +
            a[e & 15] +
            a[(o >> 28) & 15] +
            a[(o >> 24) & 15] +
            a[(o >> 20) & 15] +
            a[(o >> 16) & 15] +
            a[(o >> 12) & 15] +
            a[(o >> 8) & 15] +
            a[(o >> 4) & 15] +
            a[o & 15] +
            a[(l >> 28) & 15] +
            a[(l >> 24) & 15] +
            a[(l >> 20) & 15] +
            a[(l >> 16) & 15] +
            a[(l >> 12) & 15] +
            a[(l >> 8) & 15] +
            a[(l >> 4) & 15] +
            a[l & 15] +
            a[(i >> 28) & 15] +
            a[(i >> 24) & 15] +
            a[(i >> 20) & 15] +
            a[(i >> 16) & 15] +
            a[(i >> 12) & 15] +
            a[(i >> 8) & 15] +
            a[(i >> 4) & 15] +
            a[i & 15] +
            a[(c >> 28) & 15] +
            a[(c >> 24) & 15] +
            a[(c >> 20) & 15] +
            a[(c >> 16) & 15] +
            a[(c >> 12) & 15] +
            a[(c >> 8) & 15] +
            a[(c >> 4) & 15] +
            a[c & 15] +
            a[(r >> 28) & 15] +
            a[(r >> 24) & 15] +
            a[(r >> 20) & 15] +
            a[(r >> 16) & 15] +
            a[(r >> 12) & 15] +
            a[(r >> 8) & 15] +
            a[(r >> 4) & 15] +
            a[r & 15] +
            a[(u >> 28) & 15] +
            a[(u >> 24) & 15] +
            a[(u >> 20) & 15] +
            a[(u >> 16) & 15] +
            a[(u >> 12) & 15] +
            a[(u >> 8) & 15] +
            a[(u >> 4) & 15] +
            a[u & 15];
        return (
          this.is224 ||
            (h +=
              a[(t >> 28) & 15] +
              a[(t >> 24) & 15] +
              a[(t >> 20) & 15] +
              a[(t >> 16) & 15] +
              a[(t >> 12) & 15] +
              a[(t >> 8) & 15] +
              a[(t >> 4) & 15] +
              a[t & 15]),
          h
        );
      }),
      (p.prototype.toString = p.prototype.hex),
      (p.prototype.digest = function () {
        this.finalize();
        var e = this.h0,
          o = this.h1,
          l = this.h2,
          i = this.h3,
          c = this.h4,
          r = this.h5,
          u = this.h6,
          t = this.h7,
          h = [
            (e >> 24) & 255,
            (e >> 16) & 255,
            (e >> 8) & 255,
            e & 255,
            (o >> 24) & 255,
            (o >> 16) & 255,
            (o >> 8) & 255,
            o & 255,
            (l >> 24) & 255,
            (l >> 16) & 255,
            (l >> 8) & 255,
            l & 255,
            (i >> 24) & 255,
            (i >> 16) & 255,
            (i >> 8) & 255,
            i & 255,
            (c >> 24) & 255,
            (c >> 16) & 255,
            (c >> 8) & 255,
            c & 255,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            r & 255,
            (u >> 24) & 255,
            (u >> 16) & 255,
            (u >> 8) & 255,
            u & 255,
          ];
        return (
          this.is224 ||
            h.push((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, t & 255),
          h
        );
      }),
      (p.prototype.array = p.prototype.digest),
      (p.prototype.arrayBuffer = function () {
        this.finalize();
        var e = new ArrayBuffer(this.is224 ? 28 : 32),
          o = new DataView(e);
        return (
          o.setUint32(0, this.h0),
          o.setUint32(4, this.h1),
          o.setUint32(8, this.h2),
          o.setUint32(12, this.h3),
          o.setUint32(16, this.h4),
          o.setUint32(20, this.h5),
          o.setUint32(24, this.h6),
          this.is224 || o.setUint32(28, this.h7),
          e
        );
      });
    function D(e, o, l) {
      var i,
        c = typeof e;
      if (c === "string") {
        var r = [],
          u = e.length,
          t = 0,
          h;
        for (i = 0; i < u; ++i)
          (h = e.charCodeAt(i)),
            h < 128
              ? (r[t++] = h)
              : h < 2048
              ? ((r[t++] = 192 | (h >> 6)), (r[t++] = 128 | (h & 63)))
              : h < 55296 || h >= 57344
              ? ((r[t++] = 224 | (h >> 12)),
                (r[t++] = 128 | ((h >> 6) & 63)),
                (r[t++] = 128 | (h & 63)))
              : ((h =
                  65536 + (((h & 1023) << 10) | (e.charCodeAt(++i) & 1023))),
                (r[t++] = 240 | (h >> 18)),
                (r[t++] = 128 | ((h >> 12) & 63)),
                (r[t++] = 128 | ((h >> 6) & 63)),
                (r[t++] = 128 | (h & 63)));
        e = r;
      } else if (c === "object") {
        if (e === null) throw new Error(b);
        if (E && e.constructor === ArrayBuffer) e = new Uint8Array(e);
        else if (!Array.isArray(e) && (!E || !ArrayBuffer.isView(e)))
          throw new Error(b);
      } else throw new Error(b);
      e.length > 64 && (e = new p(o, !0).update(e).array());
      var m = [],
        q = [];
      for (i = 0; i < 64; ++i) {
        var N = e[i] || 0;
        (m[i] = 92 ^ N), (q[i] = 54 ^ N);
      }
      p.call(this, o, l),
        this.update(q),
        (this.oKeyPad = m),
        (this.inner = !0),
        (this.sharedMemory = l);
    }
    (D.prototype = new p()),
      (D.prototype.finalize = function () {
        if ((p.prototype.finalize.call(this), this.inner)) {
          this.inner = !1;
          var e = this.array();
          p.call(this, this.is224, this.sharedMemory),
            this.update(this.oKeyPad),
            this.update(e),
            p.prototype.finalize.call(this);
        }
      });
    var j = y();
    (j.sha256 = j),
      (j.sha224 = y(!0)),
      (j.sha256.hmac = f()),
      (j.sha224.hmac = f(!0)),
      O ? (g.exports = j) : ((v.sha256 = j.sha256), (v.sha224 = j.sha224));
  })();
})(X);
var ie = X.exports;
const ae = ({ which: g, value: b }) => {
    const [S, v] = B.useState(""),
      A = Y();
    return (
      B.useEffect(() => {
        (async () => {
          const O = await (
            await fetch(`http://localhost:8000/otp/get/${g}/${b}`)
          ).json();
          v(O.userid ? O.userid : O.password);
        })();
      }, []),
      n.jsxs("div", {
        className: "view-popup-ctn",
        children: [
          n.jsxs("div", {
            className: "view-userid-ctn",
            children: [
              n.jsxs("span", {
                className: "view-key",
                children: ["your ", g, " : "],
              }),
              n.jsx("span", { className: "view-value", children: S }),
            ],
          }),
          n.jsx("button", {
            className: "btn",
            onClick: () => {
              A("/login", { replace: !0 });
            },
            children: "Login",
          }),
        ],
      })
    );
  },
  oe = ({ which: g, value: b }) => {
    const [S, v] = B.useState(new FormData()),
      [A, _] = B.useState({}),
      O = Y();
    function E(s) {
      document.querySelector(`.${s.target.name}-requirements`).style.display =
        "flex";
    }
    function a(s) {
      if ((console.log("in change value"), console.log(s), s.id))
        v({ ...S, [s.field]: s.id });
      else {
        const { name: d, value: f } = s.target;
        console.log(d, f), v({ ...S, [d]: f });
      }
    }
    function $(s, d) {
      const f = document.querySelector(`.${s.target.name}-requirements`);
      if (
        (console.log("onchange"),
        d &&
          (s.target.value.length > 7
            ? (f.querySelector(".li-min-char").style.color = "green")
            : (f.querySelector(".li-min-char").style.color = "#d93025")),
        /\d/.test(s.target.value)
          ? (f.querySelector(".li-number").style.color = "green")
          : (f.querySelector(".li-number").style.color = "#d93025"),
        /[a-z]/.test(s.target.value)
          ? (f.querySelector(".li-lower").style.color = "green")
          : (f.querySelector(".li-lower").style.color = "#d93025"),
        /[A-Z]/.test(s.target.value)
          ? (console.log(s.target.value),
            (f.querySelector(".li-upper").style.color = "green"))
          : (f.querySelector(".li-upper").style.color = "#d93025"),
        /[@!#$%&*_]/.test(s.target.value)
          ? (console.log(s.target.value),
            (f.querySelector(".li-special-char").style.color = "green"))
          : (f.querySelector(".li-special-char").style.color = "#d93025"),
        s.target.value.length > 7 &&
          /[A-Z]/.test(s.target.value) &&
          /[a-z]/.test(s.target.value) &&
          /[\d]/.test(s.target.value) &&
          /[@!#$%&*_]/.test(s.target.value))
      )
        return (
          (s.target.style.borderColor = "#2c2cf1"),
          _((p) => ({ ...p, [`${s.target.name}`]: !0 })),
          0
        );
      if (s.target.value === "")
        (s.target.style.borderColor = "#2c2cf1"),
          I(s),
          _((p) => ({ ...p, [`${s.target.name}`]: !1 }));
      else
        return (
          (s.target.style.borderColor = "#d93025"),
          I(s),
          _((p) => ({ ...p, [`${s.target.name}`]: !1 })),
          1
        );
    }
    function w() {
      console.log("pwd");
      const s = document.querySelectorAll(".reg-p");
      if ((console.log(s), s))
        if (
          (console.log("in true"),
          s[0].value === s[1].value || s[1].value === "")
        ) {
          s[1].classList.remove("errorInputField");
          const d = document.querySelector(".reg-c-p-errorField");
          return d && d.remove(), !0;
        } else return z(".reg-c-p", "password not same", !0), !1;
      else return !1;
    }
    function C(s, d, f) {
      console.log(d), console.log("runned use effect"), s ? R(d, f) : F(f);
    }
    async function R(s, d) {
      console.log(s);
      var f = new FormData();
      f.append("fields", s),
        s.forEach((j) => {
          console.log(`input[${j}]`);
          const e = document.querySelector(`input[name=${j}]`);
          f.append(e.name, e.value);
        }),
        console.log(f);
      const D = await (
        await fetch("http://localhost:8000/students/details/exists", {
          method: "POST",
          body: f,
        })
      ).json();
      return D.suc
        ? (F(d), !0)
        : (D.err.forEach((j) => {
            z(j.field, `${j.value} aldready existed`);
          }),
          !1);
    }
    function F(s) {
      let d = [];
      if (
        A &&
        (Object.entries(A).forEach(([f, p]) => {
          p === !1 && d.push(f.trim());
        }),
        d.length >= 1)
      ) {
        console.log("in temp trur"),
          d.forEach((f) => {
            console.log(f), z(f, `${f} not attains requirements`, !1);
          });
        return;
      }
      console.log("after req"),
        !(s != !0 && !w()) && (console.log("checked req"), H());
    }
    async function H() {
      const s = ee(S),
        f = await (
          await fetch(`http://localhost:8000/otp/put/userid/${b.trim()}`, {
            method: "PUT",
            body: s,
          })
        ).json();
      f.suc
        ? (console.log(f.suc),
          alert("sucessfully updated !"),
          O("/login", { replace: !0 }))
        : alert("something went wrong. Try again later!");
    }
    function y(s) {
      const d = document.querySelector(".reg-p");
      s.target.innerText == "visibility_off"
        ? ((d.type = "text"), (s.target.innerText = "visibility"))
        : ((d.type = "password"), (s.target.innerText = "visibility_off"));
    }
    return n.jsxs("div", {
      className: "fgt-reset-ctn",
      children: [
        n.jsxs("span", {
          className: "fgt-reset-header",
          children: ["RESET ", g.toUpperCase()],
        }),
        g === "userid"
          ? n.jsxs(n.Fragment, {
              children: [
                n.jsxs("div", {
                  className: "inputdiv required required",
                  children: [
                    n.jsx("label", {
                      htmlFor: "userid-input",
                      children: "UserId",
                    }),
                    n.jsx("input", {
                      autoComplete: "off",
                      type: "text",
                      required: !0,
                      className: "userid-input input",
                      onBlur: () =>
                        (document.querySelector(
                          ".userid-requirements "
                        ).style.display = "none"),
                      placeholder: "Enter your userid",
                      onChange: (s) => {
                        I(s), a(s), $(s);
                      },
                      onClick: E,
                      name: "userid",
                    }),
                    n.jsx(K, { name: "userid" }),
                  ],
                }),
                n.jsx("button", {
                  className: "btn",
                  onClick: (s) => {
                    s.preventDefault(),
                      J("fgt-reset-ctn") || C(!0, ["userid"], !0);
                  },
                  children: "submit",
                }),
              ],
            })
          : n.jsxs(n.Fragment, {
              children: [
                n.jsxs("div", {
                  className: "inputdiv required required",
                  children: [
                    n.jsx("label", {
                      htmlFor: "password-input",
                      children: "Password",
                    }),
                    n.jsx("input", {
                      autoComplete: "off",
                      type: "password",
                      required: !0,
                      className: "password-input input reg-p",
                      placeholder: "Enter your password",
                      name: "password",
                      onClick: E,
                      onBlur: () =>
                        (document.querySelector(
                          ".password-requirements"
                        ).style.display = "none"),
                      onChange: (s) => {
                        I(s), a(s), $(s, "pwd");
                      },
                    }),
                    n.jsx("span", {
                      className: "material-symbols-outlined eye-icon",
                      onClick: y,
                      children: "visibility_off",
                    }),
                    n.jsx(K, { name: "password", pwd: "pwd" }),
                  ],
                }),
                n.jsxs("div", {
                  className: "inputdiv required required",
                  children: [
                    n.jsx("label", {
                      htmlFor: "c-password-input",
                      children: "Confirm Password",
                    }),
                    n.jsx("input", {
                      autoComplete: "off",
                      type: "text",
                      required: !0,
                      onChange: (s) => {
                        I(s), w();
                      },
                      className: "c-password-input input reg-p reg-c-p",
                      placeholder: "Enter your password",
                      name: "c-password",
                    }),
                  ],
                }),
                n.jsxs("button", {
                  className: "btn",
                  onClick: (s) => {
                    s.preventDefault(), J("fgt-reset-ctn") || C();
                  },
                  children: [" ", "submit", " "],
                }),
              ],
            }),
      ],
    });
  },
  ne = ({ forgotted: g, setViewPopup: b, mode: S }) => {
    const [v, A] = B.useState(!0),
      [_, O] = B.useState(),
      [E, a] = B.useState();
    function $(y) {
      document.querySelector(`.${y.target.name}-errorField`) &&
        document.querySelector(`.${y.target.name}-errorField`).remove(),
        y.target.classList.remove("errorInputField");
    }
    async function w() {
      const y = document.querySelector(".fgt-emailid-input");
      var s = new FormData();
      return (
        s.append("fields", ["emailid"]),
        s.append("emailid", y.value.trim()),
        (
          await (
            await fetch("http://localhost:8000/students/details/exists", {
              method: "POST",
              body: s,
            })
          ).json()
        ).suc
          ? (z(".fgt-emailid-input", `${y.value} not existed`, !0), !1)
          : !0
      );
    }
    async function C(y) {
      const d = await (
        await fetch(`http://localhost:8000/backend/initOtp/${y.value.trim()}`)
      ).json();
      d.otpSND
        ? (y.classList.add("suc-border"), O(d.otpSND))
        : alert("someting went wrong!!!");
    }
    async function R() {
      const y = document.querySelector(".fgt-emailid-input");
      (await w()) &&
        (await C(y),
        A(!1),
        document.querySelector(".fgt-pwd-inputdiv").classList.remove("closed"),
        y.after(te("otp sended", "fgt-emailid-input", !0)));
    }
    function F() {
      b(!1);
    }
    function H() {
      const y = document.querySelector(".otp-input");
      console.log(y.value);
      var s = ie.sha256.hex(y.value);
      s === _
        ? (console.log("yes same"), a(!0))
        : z(".otp-input", "incorrect otp", !0);
    }
    return n.jsx("div", {
      className: "fgt-bg-blur-ctn",
      children: n.jsxs("div", {
        className: "fgt-popup",
        children: [
          n.jsx("span", {
            className: "material-symbols-outlined fgt-close",
            onClick: F,
            children: "close",
          }),
          E
            ? S == "view"
              ? n.jsx(ae, {
                  which: g,
                  value: document
                    .querySelector(".fgt-emailid-input")
                    .value.trim(),
                })
              : n.jsx(oe, {
                  which: g,
                  value: document
                    .querySelector(".fgt-emailid-input")
                    .value.trim(),
                })
            : n.jsxs(n.Fragment, {
                children: [
                  n.jsx("span", { children: "Confirm your Email" }),
                  n.jsxs("div", {
                    className: "inputdiv required ",
                    children: [
                      n.jsx("label", {
                        htmlFor: "emailid-input",
                        children: "Email Id",
                      }),
                      n.jsx("input", {
                        autoComplete: "off",
                        type: "email",
                        className: "fgt-emailid-input input",
                        name: "emailid",
                        onChange: $,
                        placeholder: "Enter your email",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "inputdiv closed fgt-pwd-inputdiv required",
                    children: [
                      n.jsx("label", { htmlFor: "otp-input", children: "OTP" }),
                      n.jsx("input", {
                        autoComplete: "off",
                        type: "email",
                        className: "otp-input input",
                        name: "emailid",
                        onChange: $,
                        placeholder: "Enter otp",
                      }),
                    ],
                  }),
                  v
                    ? n.jsxs("button", {
                        className: "btn",
                        onClick: () => {
                          J("fgt-popup") || R();
                        },
                        children: [" ", "send otp"],
                      })
                    : n.jsxs("button", {
                        className: "btn",
                        onClick: () => {
                          J("fgt-popup") || H();
                        },
                        children: [" ", "confirm otp"],
                      }),
                ],
              }),
        ],
      }),
    });
  },
  he = () => {
    const { forgotted: g } = Q(),
      [b, S] = B.useState(!1),
      [v, A] = B.useState(!1);
    return n.jsxs(n.Fragment, {
      children: [
        (b || v) &&
          n.jsx(ne, {
            forgotted: g,
            setViewPopup: b ? S : A,
            mode: b ? "view" : "reset",
          }),
        n.jsxs("div", {
          className: "forgot-ctn",
          children: [
            n.jsxs("span", {
              className: "fgt-header",
              children: [" Forgot your ", g, " ?"],
            }),
            n.jsx("br", {}),
            n.jsxs("span", {
              className: "fgt-msg",
              children: [
                " ",
                'No worries ! Click the "view ',
                g,
                ' " or "reset ',
                g,
                '" button and follow the instructions to solve it !!!',
              ],
            }),
            n.jsxs("div", {
              className: "fgt-btns flex-center-col",
              children: [
                n.jsxs("button", {
                  className: "btn edit",
                  onClick: () => {
                    S(!0);
                  },
                  children: ["view ", g],
                }),
                n.jsxs("button", {
                  className: "btn cancel",
                  onClick: () => {
                    A(!0);
                  },
                  children: ["reset ", g],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { he as default };
