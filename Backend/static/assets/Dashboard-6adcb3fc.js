import {
  b as m,
  u,
  r,
  j as e,
  a as c,
  O as N,
  L as b,
  N as k,
} from "./index_90212d48.js";
import { c as v, g as p, d as y, s as E } from "./scripts-80522572.js";
function S() {
  const s = m(),
    a = u(),
    n = s.pathname.split("/"),
    t = n[n.length - 1],
    [l, x] = r.useState(t);
  r.useEffect(() => {
    x(t);
  }, [t]);
  function d(i) {
    document.querySelectorAll(".link-container").forEach((o) => {
      o.classList.remove("active");
    }),
      i.target.classList.add("active");
  }
  function h() {
    if (confirm("Confirm to logout ? "))
      localStorage.removeItem("stdata"), a("/login", { replace: !0 });
    else return null;
  }
  async function g(i) {
    const o = await (
      await fetch(`http://localhost:8000/students/delete/${i}`, {
        method: "delete",
      })
    ).json();
    o.suc
      ? (alert(o.suc.msg), localStorage.clear(), a("/login", { replace: !0 }))
      : o.not_exist
      ? (alert(o.not_exist), localStorage.clear(), a("/login", { replace: !0 }))
      : alert("something went wrong!!");
  }
  function j() {
    const i = p();
    confirm(`Do you want to delete your's data
 in future it cannot be recovered ?`) && g(i.mobile);
  }
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "sidebar-container close",
      id: "sidebar",
      children: [
        e.jsxs("span", {
          className: "link-container header",
          onClick: v,
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "info",
            }),
            e.jsx("span", { className: "link-text", children: "TECIS" }),
          ],
        }),
        e.jsxs(c, {
          className: `link-container ${t === "dashboard" ? "active" : ""}`,
          to: "",
          onClick: d,
          id: "dashboard",
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "grid_view",
            }),
            e.jsx("span", { className: "link-text", children: "Dashboard" }),
          ],
        }),
        e.jsxs(c, {
          className: `link-container ${t === "edit" ? "active" : ""}`,
          to: "edit",
          onClick: d,
          id: "edit",
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "edit",
            }),
            e.jsx("span", { className: "link-text", children: "Edit" }),
          ],
        }),
        e.jsxs(c, {
          className: `link-container ${t === "export" ? "active" : ""}`,
          to: "export",
          onClick: d,
          id: "export",
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "upgrade",
            }),
            e.jsx("span", { className: "link-text", children: "Export" }),
          ],
        }),
        e.jsxs(c, {
          className: "link-container ",
          onClick: h,
          id: "logout",
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "logout",
            }),
            e.jsx("span", { className: "link-text", children: "Logout" }),
          ],
        }),
        e.jsxs(c, {
          className: "link-container delete",
          onClick: j,
          id: "delete",
          children: [
            e.jsx("span", {
              class: "material-symbols-outlined icon",
              children: "delete",
            }),
            e.jsx("span", { className: "link-text", children: "Delete" }),
          ],
        }),
      ],
    }),
  });
}
function L({ stData: s }) {
  const a = `http://localhost:8000/students${s.profile}`;
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "topbar-container",
      id: "topbar-container",
      children: [
        e.jsx("span", {
          className: "student-profile-txt",
          children: "STUDENT PROFILE",
        }),
        e.jsxs("div", {
          className: "profile-name-container",
          children: [
            e.jsx("span", {
              className: "st-name",
              children: s.name.toUpperCase(),
            }),
            e.jsxs("span", {
              className: "st-profile",
              children: [
                " ",
                e.jsx("img", { src: s.profile != null ? a : y, alt: "" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const C = [
  "gender",
  "bloodgroup",
  "religion",
  "community",
  "caste",
  "country",
  "state",
  "district",
  "taluk",
  "location_type",
];
function w() {
  const s = m(),
    a = u(),
    [n, t] = r.useState(s.state ? s.state : null),
    l = p();
  return (
    console.log("in dasboard"),
    console.log(s.state),
    r.useEffect(() => {
      l
        ? (console.log(l.gender),
          /[A-Z]/.test(l.gender) || E(C, s.state ? s.state : l, t))
        : (console.log("not details"), a("/login", { replace: !0 }));
    }, [s]),
    e.jsx(e.Fragment, {
      children: l
        ? n
          ? e.jsxs("div", {
              className: "overall-container",
              id: "overall-container",
              children: [
                e.jsx(S, {}),
                e.jsxs("div", {
                  className: "content-top-container",
                  children: [
                    e.jsx(L, { stData: s.state ? s.state : n }),
                    e.jsx("main", {
                      className: "main-content",
                      children: e.jsx(N, { context: [s.state ? s.state : n] }),
                    }),
                  ],
                }),
              ],
            })
          : e.jsx(b, {})
        : e.jsx(k, { to: "/login", replace: !0 }),
    })
  );
}
export { w as default };
