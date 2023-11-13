import { r as f, u as x, j as e, L as h, a as d } from "./index_90212d48.js";
function u(c, r) {
  const i = document.getElementById(`${r}-underline`),
    t = document.getElementsByClassName(`${r}-outer`),
    a = document.getElementById(`${r}-icon`),
    l = document.getElementById(`${r}-errormsg`);
  c
    ? (l.classList.add("showerror"),
      t[0].classList.add("errorouter"),
      i.classList.add("errorfield"),
      (a.style.color = "rgb(217,48,37)"))
    : (t[0].classList.remove("errorouter"),
      l.classList.remove("showerror"),
      i.classList.remove("errorfield"),
      (a.style.color = "grey"));
}
function y() {
  const [c, r] = f.useState(null);
  console.log("in login");
  function i(s) {
    localStorage.setItem("stdata", JSON.stringify(s));
  }
  const t = JSON.parse(localStorage.getItem("stdata")),
    a = x();
  function l() {
    a("/dashboard", { replace: !0 });
  }
  async function m(s) {
    const o = await (
      await fetch("http://localhost:8000/students/login/check/", {
        method: "POST",
        body: s,
      })
    ).json();
    o.suc
      ? (i(o.suc),
        setTimeout(() => {
          l();
        }, 1e3))
      : (r(null), console.log(o.err), u(!0, o.err));
  }
  function g(s) {
    s.preventDefault(), r(!0);
    const n = document.getElementById("form"),
      o = new FormData(n);
    m(o);
  }
  function p(s) {
    const n = document.querySelector(".log-p");
    s.target.innerText == "visibility_off"
      ? ((n.type = "text"), (s.target.innerText = "visibility"))
      : ((n.type = "password"), (s.target.innerText = "visibility_off"));
  }
  return e.jsxs(e.Fragment, {
    children: [
      c ? e.jsx(h, {}) : null,
      e.jsx("div", {
        className: "login-fullpage-container",
        children: e.jsxs("form", {
          className: "login-form-container",
          id: "form",
          onSubmit: g,
          children: [
            e.jsx("span", { className: "login-title", children: "Login" }),
            e.jsxs("div", {
              className: "userid-outer",
              children: [
                e.jsx("span", {
                  className: "material-symbols-outlined",
                  id: "userid-icon",
                  children: "person",
                }),
                e.jsx("input", {
                  className: "input-userid",
                  type: "text",
                  placeholder: "USER-ID",
                  name: "userid",
                  id: "userid",
                  defaultValue: t ? t.userid : "",
                  onChange: () => {
                    u(!1, "userid");
                  },
                  required: !0,
                }),
                e.jsxs("span", {
                  className: "errormsg",
                  id: "userid-errormsg",
                  children: [
                    e.jsx("span", {
                      className: "material-symbols-outlined",
                      children: "error",
                    }),
                    e.jsx("span", {
                      children: " User-Id not found or try to register",
                    }),
                  ],
                }),
                e.jsx("span", {
                  className: "underline",
                  id: "userid-underline",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "password-outer",
              children: [
                e.jsx("span", {
                  className: "material-symbols-outlined",
                  id: "password-icon",
                  children: "lock",
                }),
                e.jsx("input", {
                  type: "password",
                  className: "input-password log-p",
                  placeholder: "PASSWORD",
                  name: "password",
                  id: "password",
                  onChange: () => {
                    u(!1, "password");
                  },
                  required: !0,
                }),
                e.jsx("span", {
                  class: "material-symbols-outlined eye-icon",
                  onClick: p,
                  children: "visibility_off",
                }),
                e.jsxs("span", {
                  className: "errormsg",
                  id: "password-errormsg",
                  children: [
                    e.jsx("span", {
                      className: "material-symbols-outlined",
                      children: "error",
                    }),
                    e.jsx("span", { children: "Incorrect Password" }),
                  ],
                }),
                e.jsx("span", {
                  className: "underline",
                  id: "password-underline",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "fgnew",
              children: [
                e.jsxs("div", {
                  className: "forgot-ctn flex-center-col",
                  children: [
                    e.jsx(d, {
                      className: "login-link",
                      to: "/forgot/userid",
                      children: "forgot userid",
                    }),
                    e.jsx(d, {
                      className: "login-link",
                      to: "/forgot/password",
                      children: "forgot password",
                    }),
                  ],
                }),
                e.jsx(d, {
                  className: "login-link",
                  to: "/register",
                  children: "New user?register",
                }),
              ],
            }),
            e.jsx("button", {
              type: "submit",
              className: "btn",
              children: "SUBMIT",
            }),
          ],
        }),
      }),
    ],
  });
}
export { y as default };
