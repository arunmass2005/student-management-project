import { c as D, r, u as I, j as e, L as V } from "./index_90212d48.js";
import { d as B, a as S } from "./scripts-80522572.js";
import { D as n } from "./DropdownInput-85b0ccaf.js";
function E() {
  const c = D()[0],
    [a, N] = r.useState(),
    [d, h] = r.useState(new FormData()),
    w = `http://localhost:8000/students${a ? a.profile : c.profile}`,
    p = I(),
    [x, g] = r.useState(c ? c.firstgraduate : null),
    [u, f] = r.useState(""),
    [o, y] = r.useState();
  r.useEffect(() => {
    N(c), j();
  }, []);
  function C(t) {
    const l = new FormData();
    return (
      Object.entries(t).forEach(([i, m]) => {
        l.append(i, m);
      }),
      l
    );
  }
  function j() {
    v();
  }
  function s(t) {
    if ((console.log("in change value"), console.log(t), t.id))
      h({ ...d, [t.field]: t.id });
    else {
      const { name: l, value: i } = t.target;
      console.log(l, i), h({ ...d, [l]: i });
    }
  }
  function F(t) {
    const l = a.profile ? a.profile.split("/") : null;
    l
      ? t.name !== l[l.length - 1] && h({ ...d, profile: t })
      : h({ ...d, profile: t });
  }
  function k(t) {
    const l = document.querySelector("#profile_show"),
      i = document.querySelector("#profile_img"),
      m = l.files[0];
    (i.src = URL.createObjectURL(m)), F(m);
  }
  function _() {
    document.getElementById("profile_show").click();
  }
  var b = (t) => {
    g(t.target.value);
  };
  async function q() {
    const t = C(d),
      i = await (
        await fetch(`http://localhost:8000/students/login/${a.userid}`, {
          method: "PUT",
          body: t,
        })
      ).json();
    i.suc &&
      (S(i.suc),
      console.log(i.suc),
      alert("sucessfully updated !"),
      p("/dashboard", { state: i.suc }));
  }
  async function v() {
    const t = document.querySelector(".ifsc-input"),
      i = await (
        await fetch(`https://ifsc.razorpay.com/${t.value}`, {
          headers: { Accept: "application/json, text/plain, */*" },
        })
      ).json();
    i
      ? y({ bank_name: i.BANK, bank_branch: i.BRANCH, city: i.CITY })
      : console.log(i);
  }
  return e.jsx(e.Fragment, {
    children: a
      ? e.jsxs("div", {
          className: "profile-container edit-container",
          id: "profile-container",
          children: [
            e.jsxs("section", {
              className: "General-Info profile-sections",
              children: [
                e.jsxs("span", {
                  className: "section-header s-h-dash",
                  children: [" ", "General Information"],
                }),
                e.jsx("div", {
                  className: "profile",
                  id: "profilediv",
                  children: e.jsxs("span", {
                    className: "profile_outer",
                    onClick: _,
                    children: [
                      e.jsx("img", {
                        src: a.profile ? w : B,
                        alt: "",
                        id: "profile_img",
                      }),
                      e.jsx("input", {
                        type: "file",
                        className: "profile_show",
                        id: "profile_show",
                        name: "profile",
                        onChange: k,
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", { htmlFor: "name-show", children: "Name" }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "name-show input",
                      name: "name",
                      defaultValue: a.name.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "dob-show",
                      children: "Date Of Birth",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "dob-show input",
                      name: "dob",
                      defaultValue: a.dob,
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "gender-show ",
                      children: "Gender",
                    }),
                    e.jsx(n, { field: "gender", value: a.gender, edit: s }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "blood-show",
                      children: "Blood Group",
                    }),
                    e.jsx(n, {
                      field: "bloodgroup",
                      value: a.bloodgroup,
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "religion-show",
                      children: "Religion",
                    }),
                    e.jsx(n, { field: "religion", value: a.religion, edit: s }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "community-show",
                      children: "Community",
                    }),
                    e.jsx(n, {
                      field: "community",
                      value: a.community,
                      setDpId: f,
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "caste-show",
                      children: "Caste",
                    }),
                    e.jsx(n, {
                      field: "caste",
                      value: a.caste,
                      id: u || null,
                      parent: "community",
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "aadhar-show",
                      children: "Aadhar",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "aadhar-show show",
                      name: "aadhar",
                      maxLength: 12,
                      defaultValue: a.aadhar,
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "fg-show",
                      children: "First Graduate",
                    }),
                    e.jsxs("div", {
                      className: "fg-container",
                      children: [
                        e.jsx("input", {
                          required: !0,
                          type: "radio",
                          name: "firstgraduate",
                          className: "fg-show show",
                          value: "yes",
                          onChange: b,
                          onClick: s,
                          checked: x === "yes",
                        }),
                        e.jsx("span", { children: "YES" }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "fg-container",
                      children: [
                        e.jsx("input", {
                          required: !0,
                          type: "radio",
                          name: "firstgraduate",
                          className: "fg-show show",
                          value: "no",
                          onChange: b,
                          checked: x === "no",
                          onClick: s,
                        }),
                        e.jsx("span", { children: "NO" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "Contact-Info profile-sections",
              children: [
                e.jsxs("span", {
                  className: "section-header s-h-dash",
                  children: [" ", "Contact Information"],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "mobile-show",
                      children: "Mobile Number",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "mobile-show show",
                      name: "mobile",
                      maxLength: 10,
                      defaultValue: a.mobile,
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "email-show",
                      children: "Email Id",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "email",
                      className: "email-show show",
                      name: "emailid",
                      defaultValue: a.emailid,
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "country-show",
                      children: "Country",
                    }),
                    e.jsx(n, { field: "country", value: a.country }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "state-show",
                      children: "State",
                    }),
                    e.jsx(n, { field: "state", value: a.state }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "district-show",
                      children: "District",
                    }),
                    e.jsx(n, {
                      field: "district",
                      value: a.district,
                      setDpId: f,
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "taluk-show",
                      children: "Taluk",
                    }),
                    e.jsx(n, {
                      field: "taluk",
                      value: a.taluk,
                      id: u || c.district,
                      parent: "district",
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "location-type-show",
                      children: "Location Type",
                    }),
                    e.jsx(n, {
                      field: "location_type",
                      value: a.location_type,
                      edit: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "vilage-show",
                      children: "Vilage/Town",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "vilage-show show",
                      name: "place",
                      defaultValue: a.place.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "pincode-show",
                      children: "Pincode",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "pincode-show show",
                      name: "pincode",
                      defaultValue: a.pincode.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv textarea",
                  children: [
                    e.jsx("label", {
                      htmlFor: "address-show",
                      children: "Address",
                    }),
                    e.jsx("textarea", {
                      className: "address-show show",
                      cols: "30",
                      rows: "10",
                      name: "address",
                      defaultValue: a.address.toUpperCase(),
                      onChange: s,
                      style: { fontFamily: "Popins,sans-serif" },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "father-name-show",
                      children: "Father Name",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "father-name-show show",
                      name: "fathersname",
                      defaultValue: a.fathersname.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "f-occupation-show",
                      children: "Father Occupation",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "f-occupation-show show",
                      name: "fathersoccupation",
                      defaultValue: a.fathersoccupation.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "mother-name-show",
                      children: "Mother Name",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "mother-name-show show",
                      name: "mothersname",
                      defaultValue: a.mothersname.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "m-occupation-show",
                      children: "Mothers Occupation",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "m-occupation-show show",
                      name: "mothersoccupation",
                      defaultValue: a.mothersoccupation.toUpperCase(),
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "a-income-show",
                      children: "Annual Income",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "a-income-show show",
                      name: "annual_income",
                      defaultValue: a.annual_income,
                      onChange: s,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "parents-mobile-show",
                      children: "Parent Mobile Number",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "parents-mobile-show show",
                      name: "parents_mobile_number",
                      defaultValue: a.parents_mobile_number,
                      onChange: s,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "Bank-Info profile-sections",
              children: [
                e.jsxs("span", {
                  className: "section-header s-h-dash",
                  children: [" ", "Bank Account Information"],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "account-n-show",
                      children: "Account Number",
                    }),
                    e.jsx("input", {
                      required: !0,
                      type: "text",
                      className: "account-n-show input",
                      name: "account_number",
                      value: a.account_number,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
                  children: [
                    e.jsx("label", {
                      htmlFor: "ifsc-input",
                      children: "IFSC code",
                    }),
                    e.jsx("input", {
                      required: !0,
                      autoComplete: "off",
                      type: "text",
                      className: "ifsc-input input",
                      name: "ifsc",
                      defaultValue: a.ifsc,
                      onChange: s,
                      placeholder: "ifsc code",
                    }),
                  ],
                }),
                e.jsx("button", {
                  id: "bankDetailsGetter",
                  type: "button",
                  className: "btn edit register-btn",
                  onClick: v,
                  children: "Get Data",
                }),
                e.jsxs("div", {
                  className: "editdiv",
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
                      value: o ? o.bank_name : j(),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
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
                      value: o ? o.bank_branch : null,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "editdiv",
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
                      value: o ? o.city : null,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "edit-submit-btn-con",
              children: [
                e.jsx("button", {
                  type: "button",
                  className: "btn cancel",
                  onClick: () => {
                    confirm("Confirm to cancel ?") && p("/dashboard");
                  },
                  children: "cancel",
                }),
                e.jsx("button", {
                  type: "button",
                  className: "btn edit",
                  onClick: () => {
                    confirm("Confirm to edit ?") && q();
                  },
                  children: "edit",
                }),
              ],
            }),
          ],
        })
      : e.jsx(V, {}),
  });
}
export { E as default };
