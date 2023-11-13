import { j as e } from "./index_90212d48.js";
const i = ({ name: s, pwd: r }) =>
  e.jsxs("div", {
    className: `${s}-requirements requirements`,
    id: `${s}-requirements requirements`,
    name: s,
    children: [
      e.jsxs("span", {
        className: "req-ul-head",
        children: [
          e.jsx("span", {
            class: "material-symbols-outlined warning",
            children: "warning",
          }),
          "have atleast",
        ],
      }),
      e.jsxs("div", {
        className: "req-ul",
        children: [
          r
            ? e.jsx("li", {
                className: "req-li li-min-char",
                children: "minimum 8 characters",
              })
            : null,
          e.jsx("li", {
            className: "req-li li-upper",
            children: "1 uppercase letter",
          }),
          e.jsx("li", {
            className: "req-li li-lower",
            children: "1 lowercase letter",
          }),
          e.jsx("li", { className: "req-li li-number", children: "1 number" }),
          e.jsx("li", {
            className: "req-li li-special-char",
            children: "1 special characters (!,@,#,$,%,&,*,_)",
          }),
        ],
      }),
    ],
  });
export { i as R };
