import { r as i, j as a } from "./index_90212d48.js";
function D({
  field: t,
  id: n,
  setDpId: m,
  parent: u,
  value: h,
  edit: g,
  onChange: j,
}) {
  console.log(n);
  const [d, v] = i.useState([]),
    [l, p] = i.useState(d),
    [r, C] = i.useState(d);
  i.useEffect(() => {
    async function e() {
      if (u && n) {
        if (n) {
          var o = await fetch(`http://localhost:8000/api/lookup/${t}/get/${n}`);
          let s = await o.json();
          v(s), p(s);
        }
      } else {
        let f = await (
          await fetch(`http://localhost:8000/api/lookup/${t}`)
        ).json();
        v(f), p(f);
      }
    }
    e(), console.log(n);
  }, [n || null, t]);
  function w(e) {
    e.target.name !== t && c();
  }
  function k() {
    const e = document.getElementById(`${t}`),
      o = document.getElementById(`dp-${t}-icon`);
    e.classList.add("dp-open"),
      o.classList.add("rotate"),
      document.addEventListener("click", w);
  }
  function x(e) {
    c(), C(e), m && m(e.id), g && g({ field: t, id: e.id });
  }
  function c() {
    document.removeEventListener("click", w);
    const e = document.getElementById(`${t}`),
      o = document.getElementById(`dp-${t}-icon`);
    e.classList.remove("dp-open"), o.classList.remove("rotate");
  }
  function E(e) {
    const o = d.filter(
      (s) =>
        !!(
          s.value.toLowerCase().startsWith(e.toLowerCase()) &&
          s.value.toLowerCase().includes(e.toLowerCase())
        )
    );
    p(o);
  }
  function L(e) {
    console.log(l), C(e.target.value), E(e.target.value);
  }
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("input", {
        type: "text",
        className: "input",
        placeholder: `Enter your ${t}`,
        onClick: (e) => {
          k(), j(e);
        },
        onChange: (e) => {
          L(e);
        },
        value: r.value,
        defaultValue: h || null,
        name: t,
        required: !0,
        dp_key: r.id,
        autoComplete: "off",
      }),
      console.log(r.id),
      a.jsx("span", {
        className: "material-symbols-outlined dp-icon",
        id: `dp-${t}-icon`,
        children: "arrow_drop_down",
      }),
      a.jsx("div", {
        className: "fullScreen-dp",
        children: l
          ? a.jsx("div", {
              className: "dropdown-container",
              id: `${t}`,
              children:
                u && n
                  ? l.map((e) =>
                      a.jsx(
                        "div",
                        {
                          className: "dp-elements",
                          onBlur: c,
                          onClick: () => {
                            x(e);
                          },
                          children: e.value,
                        },
                        e.id
                      )
                    )
                  : u
                  ? null
                  : l.map((e) =>
                      a.jsx(
                        "div",
                        {
                          className: "dp-elements",
                          onBlur: c,
                          onClick: () => {
                            x(e);
                          },
                          children: e.value,
                        },
                        e.id
                      )
                    ),
            })
          : null,
      }),
    ],
  });
}
export { D };
