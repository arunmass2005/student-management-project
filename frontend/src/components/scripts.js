import { useEffect, useState } from "react";

const defaultimg = "/src/assets/preview-profile.png";
const getFromApiV = [
  "gender",
  "bloodgroup",
  "religion",
  "community",
  "caste",
  "country",
  "state",
  "district",
  "taluk",
];
import axios from "axios";
function closeSidebar() {
  const sideBar = document.getElementById("sidebar");
  const topBar = document.querySelector(".topbar-container");
  const mainContent = document.querySelector(".main-content");
  mainContent.classList.toggle("main-content-close");
  sideBar.classList.toggle("close");
  console.log(topBar);
  topBar.classList.toggle("topbarClose");
}

function setToLocal(data) {
  localStorage.setItem("stdata", JSON.stringify(data));
}
function getFromLocal() {
  return JSON.parse(localStorage.getItem("stdata"));
}
async function setFromApi(fields, stData, setState) {
  console.log("inside setfrom api log");
  console.log(stData);
  for (const field of fields) {
    console.log("before access api");
    const resp = await axios.get(
      `http://localhost:8000/api/lookup/${field}/${stData[field]}`
    );
    stData[field] = resp.data.value;
  }
  console.log(stData);
  console.log("after printing stData");
  setState(stData);
}
function objTOform(obj) {
  console.log("inobjto form");
  console.log(obj);
  const formData = new FormData();
  Object.entries(obj).forEach(([k, v]) => {
    formData.append(k, v);
  });
  return formData;
}
function createErrNode(errmsg, field, green) {
  const errNode = document.createElement("div");

  if (document.querySelector(`.${field}-errorField`)) {
    document.querySelector(`.${field}-errorField`).remove();
    errNode.className = `${field}-errorField`;
    errNode.classList.add(green ? "greenFieldMsg" : "errorFieldMsg");
    errNode.innerText = `${errmsg}*`;
  } else {
    errNode.className = `${field}-errorField`;
    errNode.classList.add(green ? "greenFieldMsg" : "errorFieldMsg");
    errNode.innerText = `${errmsg}*`;
  }
  return errNode;
}
function handleErrorField(field, errmsg, spec) {
  const errField = document.querySelector(spec ? field : `.${field}-input`);
  window.scrollTo(errField.getBoundingClientRect());
  errField.classList.add("errorInputField");
  errField.after(createErrNode(errmsg, errField.name));
}
function checkEmpty(form) {
  // it will returns true if inputs are empty
  console.log(form);
  let temp = [];
  const Form = document.querySelector(`.${form}`);
  const formInputs = Form.querySelectorAll(".input");
  console.log(formInputs);
  formInputs.forEach((ip) => {
    console.log(ip.hasAttribute("defaultValue"));
    if (ip.hasAttribute("required")) {
      console.log(ip.defaultValue);
      if (ip.value == "") {
        temp.push({
          tagName: ip.tagName,
          ipName: ip.name,
        });
      }
    }
  });
  if (temp.length > 1) {
    temp.forEach((ipN) => {
      console.log(ipN);
      handleErrorField(
        `${ipN.tagName}` + `[name=${ipN.ipName}]`,
        "required",
        true
      );
    });
    return true;
  } else return false;
}
function removeErrorInput(e) {
  document.querySelector(`.${e.target.name}-errorField`)
    ? document.querySelector(`.${e.target.name}-errorField`).remove()
    : null;
  e.target.classList.remove("errorInputField");
}

export {
  closeSidebar,
  setToLocal,
  getFromLocal,
  setFromApi,
  defaultimg,
  getFromApiV,
  objTOform,
  handleErrorField,
  createErrNode,
  checkEmpty,
  removeErrorInput,
};
