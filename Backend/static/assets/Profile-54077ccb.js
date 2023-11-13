import { c as d, r as l, j as e, L as o } from "./index_90212d48.js";
function p() {
  const n = d()[0],
    [s, r] = l.useState(),
    [a, c] = l.useState();
  l.useEffect(() => {
    r(n), i();
  }, []);
  async function i() {
    const t = await (
      await fetch(`https://ifsc.razorpay.com/${s ? s.ifsc : n.ifsc}`, {
        headers: { Accept: "application/json, text/plain, */*" },
      })
    ).json();
    t
      ? c({ bank_name: t.BANK, bank_branch: t.BRANCH, city: t.CITY })
      : console.log(t);
  }
  function h() {
    i();
  }
  return e.jsx(e.Fragment, {
    children: s
      ? typeof s.gender != "number"
        ? e.jsxs("div", {
            className: "profile-container",
            id: "profile-container",
            children: [
              e.jsxs("section", {
                className: "General-Info profile-sections",
                children: [
                  e.jsxs("span", {
                    className: "section-header s-h-dash",
                    children: [" ", "General Information"],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "name-show",
                        children: "Name",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "name-show show",
                        name: "name",
                        readOnly: !0,
                        value: s.name.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "user-show",
                        children: "UserId",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "userid-show show",
                        name: "userid",
                        readOnly: !0,
                        value: s.userid,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "dob-show",
                        children: "Date Of Birth",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "dob-show show",
                        name: "dob",
                        readOnly: !0,
                        value: s.dob,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "gender-show ",
                        children: "Gender",
                      }),
                      e.jsx("input", {
                        type: "text",
                        name: "gender",
                        readOnly: !0,
                        value: s.gender,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "blood-show",
                        children: "Blood Group",
                      }),
                      e.jsx("input", {
                        type: "text",
                        name: "bloodgroup",
                        readOnly: !0,
                        value: s.bloodgroup,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "nationality-show",
                        children: "Nationality",
                      }),
                      e.jsx("input", {
                        type: "text",
                        name: "nationality",
                        readOnly: !0,
                        value: s.nationality ? s.nationality : "INDIAN",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "religion-show",
                        children: "Religion",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "religion-show show",
                        name: "religion",
                        readOnly: !0,
                        value: s.religion,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "community-show",
                        children: "Community",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "community-show show",
                        name: "community",
                        readOnly: !0,
                        value: s.community,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "caste-show",
                        children: "Caste",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "caste-show show",
                        name: "caste",
                        readOnly: !0,
                        value: s.caste,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "aadhar-show",
                        children: "Aadhar",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "aadhar-show show",
                        name: "aadhar",
                        maxLength: 12,
                        readOnly: !0,
                        value: s.aadhar,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "fg-show",
                        children: "First Graduate",
                      }),
                      e.jsxs("div", {
                        className: "fg-container",
                        children: [
                          e.jsx("input", {
                            type: "radio",
                            name: "firstgraduate",
                            className: "fg-show show",
                            readOnly: !0,
                            checked: !0,
                          }),
                          e.jsxs("span", {
                            children: [" ", s.firstgraduate.toUpperCase()],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "Contact-Info profile-sections",
                children: [
                  e.jsx("span", {
                    className: "section-header s-h-dash",
                    children: "Contact Information",
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "mobile-show",
                        children: "Mobile Number",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "mobile-show show",
                        name: "mobile",
                        maxLength: 10,
                        readOnly: !0,
                        value: s.mobile,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "email-show",
                        children: "Email Id",
                      }),
                      e.jsx("input", {
                        type: "email",
                        className: "email-show show",
                        name: "emailid",
                        readOnly: !0,
                        value: s.emailid,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "country-show",
                        children: "Country",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "country-show show",
                        name: "country",
                        readOnly: !0,
                        value: s.country,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "state-show",
                        children: "State",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "state-show show",
                        name: "state",
                        readOnly: !0,
                        value: s.state,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "district-show",
                        children: "District",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "district-show show",
                        name: "district",
                        readOnly: !0,
                        value: s.district,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "taluk-show",
                        children: "Taluk",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "taluk-show show",
                        name: "taluk",
                        readOnly: !0,
                        value: s.taluk,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "location-type-show",
                        children: "Location Type",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "location-type-show show",
                        name: "location_type",
                        readOnly: !0,
                        value: s.location_type.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "vilage-show",
                        children: "Vilage/Town",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "vilage-show show",
                        name: "place",
                        readOnly: !0,
                        value: s.place.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv textarea",
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
                        readOnly: !0,
                        value: s.address.toUpperCase(),
                        style: { fontFamily: "Popins,sans-serif" },
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "pincode-show",
                        children: "Pincode",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "pincode-show show",
                        name: "pincode",
                        readOnly: !0,
                        value: s.pincode,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "father-name-show",
                        children: "Father Name",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "father-name-show show",
                        name: "fathersname",
                        readOnly: !0,
                        value: s.fathersname.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "f-occupation-show",
                        children: "Father Occupation",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "f-occupation-show show",
                        name: "fathersoccupation",
                        readOnly: !0,
                        value: s.fathersoccupation.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "mother-name-show",
                        children: "Mother Name",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "mother-name-show show",
                        name: "mothersname",
                        readOnly: !0,
                        value: s.mothersname.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "m-occupation-show",
                        children: "Mothers Occupation",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "m-occupation-show show",
                        name: "mothersoccupation",
                        readOnly: !0,
                        value: s.mothersoccupation.toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "a-income-show",
                        children: "Annual Income",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "a-income-show show",
                        name: "annual_income",
                        readOnly: !0,
                        value: s.annual_income,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "parents-mobile-show",
                        children: "Parent Mobile Number",
                      }),
                      e.jsx("input", {
                        type: "text",
                        className: "parents-mobile-show show",
                        name: "parents_mobile_number",
                        readOnly: !0,
                        value: s.parents_mobile_number,
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
                        type: "text",
                        className: "account-n-show show",
                        name: "account_number",
                        value: s.account_number,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
                    children: [
                      e.jsx("label", {
                        htmlFor: "ifsc-input",
                        children: "IFSC code",
                      }),
                      e.jsx("input", {
                        autoComplete: "off",
                        type: "text",
                        className: "ifsc-input input",
                        name: "ifsc",
                        readOnly: !0,
                        Value: s.ifsc,
                        placeholder: "ifsc code",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
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
                        value: a ? a.bank_name : h(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
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
                        value: a ? a.bank_branch : null,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "showdiv",
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
                        value: a ? a.city : null,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : e.jsx(o, {})
      : e.jsx(o, {}),
  });
}
export { p as default };
