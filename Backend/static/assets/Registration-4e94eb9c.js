import { r as d, u as z, j as e, L as H } from "./index_90212d48.js";
import { D as r } from "./DropdownInput-85b0ccaf.js";
import { R as L } from "./Requirements-8481320a.js";
import { b as m, h, o as Y } from "./scripts-80522572.js";
function W() {
  const c = [
      "login-credentials-info",
      "genral-info",
      "contact-info",
      "bank-info",
    ],
    p = [
      "Login Credentials",
      "General Information",
      "Contact Information",
      "Bank Information",
    ],
    f = ["lg-signal", "gn-signal", "cn-signal", "bk-signal"],
    [u, A] = d.useState({}),
    [v, y] = d.useState(""),
    [b, x] = d.useState({}),
    [D, g] = d.useState(),
    [Z, R] = d.useState(),
    [a, N] = d.useState({ id: 0, current: "login-credentials-info" }),
    q = z();
  function C(t, n) {
    console.log(n), g(!0), console.log("runned use effect"), t ? M(n) : S();
  }
  function S() {
    let t = [];
    if (
      b &&
      (Object.entries(b).forEach(([n, s]) => {
        s === !1 && t.push(n.trim());
      }),
      t.length >= 1)
    ) {
      console.log("in temp trur"),
        t.forEach((n) => {
          console.log(n), h(n, `${n} not attains requirements`, !1);
        });
      return;
    }
    console.log("after req"), E() && (console.log("checked req"), I());
  }
  async function $() {
    const t = document.querySelector(".ifsc-input"),
      s = await (
        await fetch(`https://ifsc.razorpay.com/${t.value}`, {
          headers: { Accept: "application/json, text/plain, */*" },
        })
      ).json();
    s
      ? A({ bank_name: s.BANK, bank_branch: s.BRANCH, city: s.CITY })
      : console.log(s);
  }
  async function O(t) {
    try {
      const s = await (
        await fetch("http://localhost:8000/students/login/", {
          method: "POST",
          body: Y(t),
        })
      ).json();
      s.suc
        ? (alert(`${s.suc} added successfully!`), q("/login", { replace: !0 }))
        : (console.log(s), h(s.field, s.err));
    } catch (n) {
      console.error(n);
    }
  }
  function T() {
    console.log("clicked");
    const n = document.querySelector("#profile_input").files[0],
      s = document.querySelector("#profile_img");
    (s.src = URL.createObjectURL(n)), R(n);
  }
  function B() {
    document.getElementById("profile_input").click();
  }
  function P(t) {
    const n = {},
      s = document.querySelector(".profile_input");
    (n.profile = s.files[0]),
      document.querySelectorAll(".input").forEach((l) => {
        l.getAttribute("dp_key")
          ? (n[l.name] = parseInt(l.getAttribute("dp_key")))
          : l.type == "radio"
          ? l.checked && (n[l.name] = l.value)
          : (n[l.name] = l.value);
      }),
      O(n);
  }
  var F = (t) => {
    t.checked = !0;
  };
  function G(t) {
    const n = document.querySelector(".reg-p");
    t.target.innerText == "visibility_off"
      ? ((n.type = "text"), (t.target.innerText = "visibility"))
      : ((n.type = "password"), (t.target.innerText = "visibility_off"));
  }
  function k(t) {
    document.querySelector(`.${t.target.name}-requirements`).style.display =
      "flex";
  }
  function w(t, n) {
    const s = document.querySelector(`.${t.target.name}-requirements`);
    if (
      (console.log("onchange"),
      n &&
        (t.target.value.length > 7
          ? (s.querySelector(".li-min-char").style.color = "green")
          : (s.querySelector(".li-min-char").style.color = "#d93025")),
      /\d/.test(t.target.value)
        ? (s.querySelector(".li-number").style.color = "green")
        : (s.querySelector(".li-number").style.color = "#d93025"),
      /[a-z]/.test(t.target.value)
        ? (s.querySelector(".li-lower").style.color = "green")
        : (s.querySelector(".li-lower").style.color = "#d93025"),
      /[A-Z]/.test(t.target.value)
        ? (console.log(t.target.value),
          (s.querySelector(".li-upper").style.color = "green"))
        : (s.querySelector(".li-upper").style.color = "#d93025"),
      /[@!#$%&*_]/.test(t.target.value)
        ? (console.log(t.target.value),
          (s.querySelector(".li-special-char").style.color = "green"))
        : (s.querySelector(".li-special-char").style.color = "#d93025"),
      t.target.value.length > 7 &&
        /[A-Z]/.test(t.target.value) &&
        /[a-z]/.test(t.target.value) &&
        /[\d]/.test(t.target.value) &&
        /[@!#$%&*_]/.test(t.target.value))
    )
      return (
        (t.target.style.borderColor = "#2c2cf1"),
        x((o) => ({ ...o, [`${t.target.name}`]: !0 })),
        0
      );
    if (t.target.value === "")
      (t.target.style.borderColor = "#2c2cf1"),
        i(t),
        x((o) => ({ ...o, [`${t.target.name}`]: !1 }));
    else
      return (
        (t.target.style.borderColor = "#d93025"),
        i(t),
        x((o) => ({ ...o, [`${t.target.name}`]: !1 })),
        1
      );
  }
  function I() {
    document.querySelector("." + c[a.id]).classList.remove("showSection"),
      console.log(a.id),
      console.log("printing curret"),
      console.log(a),
      console.log("AFTER CURRENT PRINTEINF"),
      console.log(a),
      document.querySelector("." + c[a.id + 1]).classList.add("showSection"),
      document.querySelector(`.${f[a.id + 1]}`).classList.add("signal-green"),
      N((t) => ({ ...t, id: t.id + 1, current: c[t.id + 1] }));
  }
  function j() {
    console.log(a.id - 1),
      console.log(a),
      document.querySelector(`.${f[a.id]}`).classList.remove("signal-green"),
      document.querySelector("." + c[a.id]).classList.remove("showSection"),
      console.log(a),
      document.querySelector("." + c[a.id - 1]).classList.add("showSection"),
      document.querySelector(`.${f[a.id - 1]}`).classList.add("signal-green"),
      (a.id > 4 && a.id > 0) ||
        N((t) => ({ ...t, id: t.id - 1, current: c[t.id - 1] }));
  }
  async function M(t) {
    console.log(t);
    var n = new FormData();
    n.append("fields", t),
      t.forEach((l) => {
        console.log(`input[${l}]`);
        const _ = document.querySelector(`input[name=${l}]`);
        n.append(_.name, _.value);
      }),
      console.log(n);
    const o = await (
      await fetch("http://localhost:8000/students/details/exists", {
        method: "POST",
        body: n,
      })
    ).json();
    return o.suc
      ? (g(null), S(), !0)
      : (o.err.forEach((l) => {
          h(l.field, `${l.value} aldready existed`);
        }),
        g(null),
        !1);
  }
  function E() {
    console.log("pwd");
    const t = document.querySelectorAll(".reg-p");
    if ((console.log(t), t))
      if (
        (console.log("in true"), t[0].value === t[1].value || t[1].value === "")
      ) {
        t[1].classList.remove("errorInputField");
        const n = document.querySelector(".reg-c-p-errorField");
        return n && n.remove(), !0;
      } else return h(".reg-c-p", "password not same", !0), !1;
    else return !1;
  }
  function i(t) {
    document.querySelector(`.${t.target.name}-errorField`) &&
      document.querySelector(`.${t.target.name}-errorField`).remove(),
      t.target.classList.remove("errorInputField");
  }
  function U(t) {
    t.target.value;
  }
  return e.jsxs(e.Fragment, {
    children: [
      D ? e.jsx(H, {}) : null,
      e.jsxs("div", {
        className: "form-container",
        id: "form",
        children: [
          e.jsx("span", { id: "title", children: "REGISTRATION FORM" }),
          e.jsx("div", {
            className: "reg-nav-div",
            children: e.jsxs("div", {
              className: "signal-overall-div",
              children: [
                e.jsxs("div", {
                  className: "signal-div",
                  children: [
                    e.jsx("div", {
                      className: "lg-signal signal signal-green",
                    }),
                    e.jsx("span", { className: "sec-names", children: p[0] }),
                  ],
                }),
                e.jsxs("div", {
                  className: "signal-div",
                  children: [
                    e.jsx("div", { className: "gn-signal signal" }),
                    e.jsx("span", { className: "sec-names", children: p[1] }),
                  ],
                }),
                e.jsxs("div", {
                  className: "signal-div",
                  children: [
                    e.jsx("div", { className: "cn-signal signal" }),
                    e.jsx("span", { className: "sec-names", children: p[2] }),
                  ],
                }),
                e.jsxs("div", {
                  className: "signal-div",
                  children: [
                    e.jsx("div", { className: "bk-signal signal" }),
                    e.jsx("span", { className: "sec-names", children: p[3] }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("section", {
            className: "login-credentials-info showSection",
            children: [
              e.jsx("span", {
                className: "section-header",
                children: " Login Credentials",
              }),
              e.jsxs("form", {
                className: "reg-form",
                children: [
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "name-input",
                        children: "Name",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        className: "name-input input",
                        placeholder: "Enter your name",
                        name: "name",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "mobile-input",
                        children: "Mobile Number",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        max: 10,
                        inputMode: "numeric",
                        className: "mobile-input input",
                        name: "mobile",
                        placeholder: "Enter your mobile",
                        onChange: i,
                        maxLength: 10,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "emailid-input",
                        children: "Email Id",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "email",
                        required: !0,
                        className: "emailid-input input",
                        name: "emailid",
                        onChange: i,
                        placeholder: "Enter your email",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "userid-input",
                        children: "UserId",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        className: "userid-input input",
                        onBlur: () =>
                          (document.querySelector(
                            ".userid-requirements "
                          ).style.display = "none"),
                        placeholder: "Enter your userid",
                        onChange: (t) => {
                          i(t), w(t);
                        },
                        onClick: k,
                        name: "userid",
                      }),
                      e.jsx(L, { name: "userid" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "password-input",
                        children: "Password",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "password",
                        required: !0,
                        className: "password-input input reg-p",
                        placeholder: "Enter your password",
                        name: "password",
                        onClick: k,
                        onBlur: () =>
                          (document.querySelector(
                            ".password-requirements"
                          ).style.display = "none"),
                        onChange: (t) => {
                          i(t), w(t, "pwd");
                        },
                      }),
                      e.jsx("span", {
                        className: "material-symbols-outlined eye-icon",
                        onClick: G,
                        children: "visibility_off",
                      }),
                      e.jsx(L, { name: "password", pwd: "pwd" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "c-password-input",
                        children: "Confirm Password",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        onChange: (t) => {
                          i(t), E();
                        },
                        className: "c-password-input input reg-p reg-c-p",
                        placeholder: "Enter your password",
                        name: "c-password",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "btn-div",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "btn ",
                        onClick: () => {
                          confirm("Confirm to cancel ? ") &&
                            q("/login", { replace: !0 });
                        },
                        children: "cancel",
                      }),
                      e.jsx("button", {
                        type: "submit",
                        className: "btn",
                        onClick: (t) => {
                          t.preventDefault(),
                            m("login-credentials-info") ||
                              C(!0, ["mobile", "emailid", "userid"]);
                        },
                        children: "next",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("span", { className: "section-footer" }),
            ],
          }),
          e.jsxs("section", {
            className: "genral-info",
            children: [
              e.jsx("span", {
                className: "section-header",
                children: " General Information",
              }),
              e.jsxs("form", {
                className: "reg-form",
                children: [
                  e.jsxs("div", {
                    className: "profile",
                    id: "profilediv",
                    children: [
                      e.jsxs("span", {
                        className: "profile_outer",
                        onClick: B,
                        children: [
                          e.jsx("img", {
                            src: "src/assets/preview-profile.png",
                            alt: "",
                            id: "profile_img",
                          }),
                          e.jsx("input", {
                            autoComplete: "off",
                            type: "file",
                            accept: "image/*",
                            className: "profile_input",
                            id: "profile_input",
                            onChange: T,
                            name: "profile",
                            required: !1,
                          }),
                        ],
                      }),
                      e.jsx("label", {
                        htmlFor: "profileinput",
                        children: "Add Profile",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "dob-input",
                        id: "dob-label",
                        children: "Date Of Birth",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        className: "dob-input input",
                        name: "dob",
                        placeholder: "date/month/year",
                        maxLength: 10,
                        onChange: (t) => {
                          U(t), i(t);
                        },
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "gender-input ",
                        children: "Gender",
                      }),
                      e.jsx(r, { field: "gender", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "blood-input",
                        children: "Blood Group",
                      }),
                      e.jsx(r, { field: "bloodgroup", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv ",
                    children: [
                      e.jsx("label", {
                        htmlFor: "nationality-input",
                        children: "Nationality",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "nationality-input input default",
                        value: "Indian",
                        readOnly: !0,
                        placeholder: "Enter you nationlaity",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "religion-input",
                        children: "Religion",
                      }),
                      e.jsx(r, { field: "religion", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "community-input",
                        children: "Community",
                      }),
                      e.jsx(r, { field: "community", setDpId: y, onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "caste-input",
                        children: "Caste",
                      }),
                      e.jsx(r, {
                        field: "caste",
                        id: v,
                        parent: "community",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "aadhar-input",
                        children: "Aadhar",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "aadhar-input input",
                        name: "aadhar",
                        required: !0,
                        placeholder: "Enter your aadhar",
                        onChange: i,
                        maxLength: 12,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required radio",
                    children: [
                      e.jsx("label", {
                        htmlFor: "fg-input",
                        children: "First Graduate",
                      }),
                      e.jsxs("div", {
                        className: "radio-container",
                        children: [
                          e.jsxs("div", {
                            className: "radio-outer",
                            children: [
                              e.jsx("input", {
                                className: "radio-input input",
                                autoComplete: "off",
                                type: "radio",
                                name: "firstgraduate",
                                value: "yes",
                                onClick: F,
                              }),
                              " ",
                              e.jsx("span", { children: "YES" }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "radio-outer",
                            children: [
                              e.jsx("input", {
                                className: "radio-input input",
                                autoComplete: "off",
                                type: "radio",
                                name: "firstgraduate",
                                value: "no",
                                onClick: F,
                              }),
                              " ",
                              e.jsx("span", { children: "NO" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "btn-div",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "btn ",
                        onClick: j,
                        children: "previous",
                      }),
                      e.jsx("button", {
                        type: "submit",
                        className: "btn",
                        onClick: (t) => {
                          t.preventDefault(),
                            m("genral-info") || C(!0, ["aadhar"]);
                        },
                        children: "next",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("span", { className: "section-footer" }),
            ],
          }),
          e.jsxs("section", {
            className: "contact-info",
            children: [
              e.jsx("span", {
                className: "section-header",
                children: " Contact Information",
              }),
              e.jsxs("form", {
                className: "reg-form",
                children: [
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "country-input",
                        children: "Country",
                      }),
                      e.jsx(r, { field: "country", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "state-input",
                        children: "State",
                      }),
                      e.jsx(r, { field: "state", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "district-input",
                        children: "District",
                      }),
                      e.jsx(r, { field: "district", setDpId: y, onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "taluk-input",
                        children: "Taluk",
                      }),
                      e.jsx(r, {
                        field: "taluk",
                        id: v,
                        parent: "district",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "location-type-input",
                        children: "Location Type",
                      }),
                      e.jsx(r, { field: "location_type", onChange: i }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "vilage-input",
                        children: "Vilage/Town",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "vilage-input input",
                        name: "place",
                        required: !0,
                        placeholder: "Enter your village/town",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "pincode-input",
                        children: "Pincode",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "pincode-input input",
                        name: "pincode",
                        required: !0,
                        placeholder: "Enter pincode",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required addressdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "address-input",
                        children: "Address",
                      }),
                      e.jsx("textarea", {
                        required: !0,
                        className: "address-input input",
                        cols: "30",
                        rows: "10",
                        name: "address",
                        placeholder: "Enter your address",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "father-name-input",
                        children: "Father's Name",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "father-name-input input",
                        name: "fathersname",
                        required: !0,
                        placeholder: "father name",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "f-occupation-input",
                        children: "Father's Occupation",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        required: !0,
                        className: "f-occupation-input input",
                        name: "fathersoccupation",
                        placeholder: "father ocupation",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "mother-name-input",
                        children: "Mother's Name",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "mother-name-input input",
                        name: "mothersname",
                        placeholder: "mother name",
                        required: !0,
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "m-occupation-input",
                        children: "Mother's Occupation",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "m-occupation-input input",
                        name: "mothersoccupation",
                        required: !0,
                        placeholder: "mother occupation",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "parents-mobile-input",
                        children: "Parent's Mobile Number",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        maxLength: 10,
                        className: "parents-mobile-input input",
                        name: "parents_mobile_number",
                        placeholder: "parent mobile",
                        required: !0,
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "a-income-input",
                        children: "Annual Income",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "a-income-input input",
                        name: "annual_income",
                        placeholder: "annual income",
                        required: !0,
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "btn-div",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: j,
                        children: "previous",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: (t) => {
                          t.preventDefault(), m("contact-info") || I();
                        },
                        children: "next",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("span", { className: "section-footer" }),
            ],
          }),
          e.jsxs("section", {
            className: "bank-info",
            children: [
              e.jsx("span", {
                className: "section-header",
                children: " Bank Account Details",
              }),
              e.jsxs("form", {
                className: "reg-form",
                onSubmit: (t) => {
                  t.preventDefault();
                },
                children: [
                  e.jsxs("div", {
                    className: "inputdiv required",
                    children: [
                      e.jsx("label", {
                        htmlFor: "account-input",
                        children: "Account Number",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        required: !0,
                        type: "text",
                        className: "account-input input",
                        name: "account_number",
                        placeholder: "account number",
                        onChange: i,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "ifsc-container",
                    children: [
                      e.jsxs("div", {
                        className: "inputdiv required",
                        children: [
                          e.jsx("label", {
                            htmlFor: "ifsc-input",
                            children: "IFSC code",
                          }),
                          e.jsx("input", {
                            autoComplete: "off",
                            type: "text",
                            required: !0,
                            className: "ifsc-input input",
                            name: "ifsc",
                            placeholder: "ifsc code",
                            onChange: i,
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "btn edit register-btn",
                        onClick: $,
                        children: "Get Data",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv ",
                    children: [
                      e.jsx("label", {
                        htmlFor: "b-name-input",
                        children: "Bank Name",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "b-name-input input",
                        name: "b-name",
                        placeholder: "bank name",
                        readOnly: !0,
                        value: u ? u.bank_name : null,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv ",
                    children: [
                      e.jsx("label", {
                        htmlFor: "b-branch-input",
                        children: "Bank Branch",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "b-branch-input input",
                        name: "b-branch",
                        placeholder: "bank branch",
                        readOnly: !0,
                        value: u ? u.bank_branch : null,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "inputdiv ",
                    children: [
                      e.jsx("label", {
                        htmlFor: "b-city-input",
                        children: "City",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        readOnly: !0,
                        type: "text",
                        className: "b-city-input input",
                        name: "b-city",
                        placeholder: "city",
                        value: u ? u.city : null,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "btn-div",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: j,
                        children: "previous",
                      }),
                      e.jsx("button", {
                        type: "submit",
                        className: "btn",
                        onClick: (t) => {
                          m("bank-info") || P();
                        },
                        children: "submit",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("span", { className: "section-footer" }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { W as default };
