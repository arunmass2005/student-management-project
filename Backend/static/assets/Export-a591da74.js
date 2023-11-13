import { d as u, c as A, r as j, j as c, L as R } from "./index_90212d48.js";
import { o as k } from "./scripts-80522572.js";
var L = { exports: {} };
(function (d, v) {
  (function (f, r) {
    r();
  })(u, function () {
    function f(e, t) {
      return (
        typeof t > "u"
          ? (t = { autoBom: !1 })
          : typeof t != "object" &&
            (console.warn("Deprecated: Expected third argument to be a object"),
            (t = { autoBom: !t })),
        t.autoBom &&
        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
          e.type
        )
          ? new Blob(["\uFEFF", e], { type: e.type })
          : e
      );
    }
    function r(e, t, i) {
      var n = new XMLHttpRequest();
      n.open("GET", e),
        (n.responseType = "blob"),
        (n.onload = function () {
          o(n.response, t, i);
        }),
        (n.onerror = function () {
          console.error("could not download file");
        }),
        n.send();
    }
    function m(e) {
      var t = new XMLHttpRequest();
      t.open("HEAD", e, !1);
      try {
        t.send();
      } catch {}
      return 200 <= t.status && 299 >= t.status;
    }
    function l(e) {
      try {
        e.dispatchEvent(new MouseEvent("click"));
      } catch {
        var t = document.createEvent("MouseEvents");
        t.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          0,
          0,
          0,
          80,
          20,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          e.dispatchEvent(t);
      }
    }
    var s =
        typeof window == "object" && window.window === window
          ? window
          : typeof self == "object" && self.self === self
          ? self
          : typeof u == "object" && u.global === u
          ? u
          : void 0,
      w =
        s.navigator &&
        /Macintosh/.test(navigator.userAgent) &&
        /AppleWebKit/.test(navigator.userAgent) &&
        !/Safari/.test(navigator.userAgent),
      o =
        s.saveAs ||
        (typeof window != "object" || window !== s
          ? function () {}
          : "download" in HTMLAnchorElement.prototype && !w
          ? function (e, t, i) {
              var n = s.URL || s.webkitURL,
                a = document.createElement("a");
              (t = t || e.name || "download"),
                (a.download = t),
                (a.rel = "noopener"),
                typeof e == "string"
                  ? ((a.href = e),
                    a.origin === location.origin
                      ? l(a)
                      : m(a.href)
                      ? r(e, t, i)
                      : l(a, (a.target = "_blank")))
                  : ((a.href = n.createObjectURL(e)),
                    setTimeout(function () {
                      n.revokeObjectURL(a.href);
                    }, 4e4),
                    setTimeout(function () {
                      l(a);
                    }, 0));
            }
          : "msSaveOrOpenBlob" in navigator
          ? function (e, t, i) {
              if (((t = t || e.name || "download"), typeof e != "string"))
                navigator.msSaveOrOpenBlob(f(e, i), t);
              else if (m(e)) r(e, t, i);
              else {
                var n = document.createElement("a");
                (n.href = e),
                  (n.target = "_blank"),
                  setTimeout(function () {
                    l(n);
                  });
              }
            }
          : function (e, t, i, n) {
              if (
                ((n = n || open("", "_blank")),
                n &&
                  (n.document.title = n.document.body.innerText =
                    "downloading..."),
                typeof e == "string")
              )
                return r(e, t, i);
              var a = e.type === "application/octet-stream",
                x = /constructor/i.test(s.HTMLElement) || s.safari,
                y = /CriOS\/[\d]+/.test(navigator.userAgent);
              if ((y || (a && x) || w) && typeof FileReader < "u") {
                var h = new FileReader();
                (h.onloadend = function () {
                  var p = h.result;
                  (p = y
                    ? p
                    : p.replace(/^data:[^;]*;/, "data:attachment/file;")),
                    n ? (n.location.href = p) : (location = p),
                    (n = null);
                }),
                  h.readAsDataURL(e);
              } else {
                var E = s.URL || s.webkitURL,
                  b = E.createObjectURL(e);
                n ? (n.location = b) : (location.href = b),
                  (n = null),
                  setTimeout(function () {
                    E.revokeObjectURL(b);
                  }, 4e4);
              }
            });
    (s.saveAs = o.saveAs = o), (d.exports = o);
  });
})(L);
function S() {
  const d = A()[0],
    [v, f] = j.useState(),
    [r, m] = j.useState();
  j.useEffect(() => {
    s();
  }, []);
  async function l(o) {
    const t = await (
      await fetch("http://localhost:8000/students/generatePdf", {
        method: "Post",
        body: k(o || v),
      })
    ).json();
    console.log(t.suc), m(t.suc);
  }
  async function s() {
    console.log("handeling bank");
    const e = await (
      await fetch(`https://ifsc.razorpay.com/${d.ifsc}`, {
        headers: { Accept: "application/json, text/plain, */*" },
      })
    ).json();
    let t = "";
    e &&
      ((t = { ...d, bank_name: e.BANK, bank_branch: e.BRANCH, city: e.CITY }),
      f({ ...d, bank_name: e.BANK, bank_branch: e.BRANCH, city: e.CITY }),
      l(t)),
      console.log(e);
  }
  function w() {
    const o = document.createElement("a");
    (o.href = `http://localhost:8000/static/st_pdfs/${r}`),
      (o.download = "TECIS_GENERATED.pdf"),
      document.body.appendChild(o),
      o.click();
  }
  return c.jsx(c.Fragment, {
    children:
      v && r
        ? c.jsxs("div", {
            className: "export-container",
            children: [
              c.jsx("span", { className: "preview-txt", children: "PREVIEW" }),
              c.jsx("span", { children: "Preview is not available " }),
              c.jsxs("button", {
                className: "btn download-btn",
                onClick: w,
                children: [
                  " ",
                  c.jsx("span", {
                    class: "material-symbols-outlined icon",
                    children: "download",
                  }),
                  c.jsx("span", { children: "Download" }),
                ],
              }),
            ],
          })
        : c.jsx(R, {}),
  });
}
export { S as default };
