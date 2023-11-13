import { useState } from "react";
import Requirements from "./Requirements.jsx";
import {
  handleErrorField,
  createErrNode,
  checkEmpty,
  removeErrorInput,
  objTOform,
} from "./scripts.js";
import { useNavigate } from "react-router-dom";
const ForgotResetOtp = ({ which, value }) => {
  const [formData, setFormData] = useState(new FormData());
  const [req, setReq] = useState({});

  const navigate = useNavigate();
  function showRequirements(e) {
    document.querySelector(`.${e.target.name}-requirements`).style.display =
      "flex";
  }
  function changeValue(e) {
    console.log("in change value");
    console.log(e);
    if (e.id) {
      setFormData({ ...formData, [e.field]: e.id });
    } else {
      const { name, value } = e.target;
      console.log(name, value);
      setFormData({ ...formData, [name]: value });
    }
  }
  function checkRequirements(e, pwd) {
    const reqDiv = document.querySelector(`.${e.target.name}-requirements`);
    console.log("onchange");
    if (pwd) {
      if (e.target.value.length > 7) {
        reqDiv.querySelector(".li-min-char").style.color = "green";
      } else {
        reqDiv.querySelector(".li-min-char").style.color = "#d93025";
      }
    }
    if (/\d/.test(e.target.value)) {
      reqDiv.querySelector(".li-number").style.color = "green";
    } else {
      reqDiv.querySelector(".li-number").style.color = "#d93025";
    }
    if (/[a-z]/.test(e.target.value)) {
      reqDiv.querySelector(".li-lower").style.color = "green";
    } else {
      reqDiv.querySelector(".li-lower").style.color = "#d93025";
    }
    if (/[A-Z]/.test(e.target.value)) {
      console.log(e.target.value);
      reqDiv.querySelector(".li-upper").style.color = "green";
    } else {
      reqDiv.querySelector(".li-upper").style.color = "#d93025";
    }
    if (/[@!#$%&*_]/.test(e.target.value)) {
      console.log(e.target.value);
      reqDiv.querySelector(".li-special-char").style.color = "green";
    } else {
      reqDiv.querySelector(".li-special-char").style.color = "#d93025";
    }
    if (
      e.target.value.length > 7 &&
      /[A-Z]/.test(e.target.value) &&
      /[a-z]/.test(e.target.value) &&
      /[\d]/.test(e.target.value) &&
      /[@!#$%&*_]/.test(e.target.value)
    ) {
      e.target.style.borderColor = "#2c2cf1";
      setReq((prev) => ({
        ...prev,
        [`${e.target.name}`]: true,
      }));
      return 0;
    } else if (e.target.value === "") {
      e.target.style.borderColor = "#2c2cf1";
      removeErrorInput(e);
      setReq((prev) => ({
        ...prev,
        [`${e.target.name}`]: false,
      }));
    } else {
      e.target.style.borderColor = "#d93025";
      removeErrorInput(e);
      setReq((prev) => ({
        ...prev,
        [`${e.target.name}`]: false,
      }));
      return 1;
    }
  }
  function checkPwd() {
    console.log("pwd");
    const pwd = document.querySelectorAll(".reg-p");
    console.log(pwd);
    if (pwd) {
      console.log("in true");
      if (pwd[0].value === pwd[1].value || pwd[1].value === "") {
        pwd[1].classList.remove("errorInputField");
        const errField = document.querySelector(`.reg-c-p-errorField`);
        errField ? errField.remove() : null;
        return true;
      } else {
        handleErrorField(".reg-c-p", "password not same", true);
        return false;
      }
    } else return false;
  }
  function handleSubmit(isCheckExist, checkList, notpassword) {
    console.log(checkList);
    console.log("runned use effect");
    isCheckExist
      ? checkExists(checkList, notpassword)
      : checkFurther(notpassword);
  }
  async function checkExists(fields, notpassword) {
    console.log(fields);
    var formData = new FormData();
    formData.append("fields", fields);
    fields.forEach((ip) => {
      console.log("input" + `[${ip}]`);
      const Ip = document.querySelector("input" + `[name=${ip}]`);
      formData.append(Ip.name, Ip.value);
    });
    console.log(formData);
    const api = await fetch("http://localhost:8000/students/details/exists", {
      method: "POST",
      body: formData,
    });
    const resp = await api.json();
    if (resp.suc) {
      checkFurther(notpassword);
      return true;
    } else {
      resp.err.forEach((arry) => {
        handleErrorField(arry.field, `${arry.value} aldready existed`);
      });

      return false;
    }
  }
  function checkFurther(notpassword) {
    let temp = [];
    if (req) {
      Object.entries(req).forEach(([k, v]) => {
        if (v === false) {
          temp.push(k.trim());
        }
      });
      if (temp.length >= 1) {
        console.log("in temp trur");
        temp.forEach((name) => {
          console.log(name);
          handleErrorField(name, `${name} not attains requirements`, false);
        });
        return;
      }
    }
    console.log("after req");
    if (notpassword != true) {
      if (!checkPwd()) {
        // handleErrorField("c-password", "password not same", false);
        return;
      }
    }
    console.log("checked req");
    editStData();
  }
  async function editStData() {
    const formdata = objTOform(formData);
    const api = await fetch(
      `http://localhost:8000/otp/put/userid/${value.trim()}`,
      {
        method: "PUT",
        body: formdata,
      }
    );
    const resp = await api.json();
    if (resp.suc) {
      console.log(resp.suc);
      alert("sucessfully updated !");
      navigate("/login", { replace: true });
      // location.replace('/dashboard')
    } else {
      alert("something went wrong. Try again later!");
    }
  }
  function toggleEyes(e) {
    const pInput = document.querySelector(".reg-p");
    if (e.target.innerText == "visibility_off") {
      pInput.type = "text";
      e.target.innerText = "visibility";
    } else {
      pInput.type = "password";
      e.target.innerText = "visibility_off";
    }
  }
  return (
    <div className="fgt-reset-ctn">
      <span className="fgt-reset-header">RESET {which.toUpperCase()}</span>
      {which === "userid" ? (
        <>
          <div className="inputdiv required required">
            <label htmlFor="userid-input">UserId</label>
            <input
              autoComplete="off"
              type="text"
              required
              className="userid-input input"
              onBlur={() =>
                (document.querySelector(".userid-requirements ").style.display =
                  "none")
              }
              placeholder="Enter your userid"
              onChange={(e) => {
                removeErrorInput(e);
                changeValue(e);
                checkRequirements(e);
              }}
              onClick={showRequirements}
              name="userid"
            />
            <Requirements name={"userid"} />
          </div>

          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              !checkEmpty("fgt-reset-ctn")
                ? handleSubmit(true, ["userid"], true)
                : null;
            }}
          >
            submit
          </button>
        </>
      ) : (
        <>
          <div className="inputdiv required required">
            <label htmlFor="password-input">Password</label>
            <input
              autoComplete="off"
              type="password"
              required
              className="password-input input reg-p"
              placeholder="Enter your password"
              name="password"
              onClick={showRequirements}
              onBlur={() =>
                (document.querySelector(
                  ".password-requirements"
                ).style.display = "none")
              }
              onChange={(e) => {
                removeErrorInput(e);
                changeValue(e);
                checkRequirements(e, "pwd");
              }}
            />
            <span
              className="material-symbols-outlined eye-icon"
              onClick={toggleEyes}
            >
              visibility_off
            </span>
            <Requirements name={"password"} pwd={"pwd"} />
          </div>
          <div className="inputdiv required required">
            <label htmlFor="c-password-input">Confirm Password</label>
            <input
              autoComplete="off"
              type="text"
              required
              onChange={(e) => {
                removeErrorInput(e);
                checkPwd();
              }}
              className="c-password-input input reg-p reg-c-p"
              placeholder="Enter your password"
              name="c-password"
            />
          </div>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              !checkEmpty("fgt-reset-ctn") ? handleSubmit() : null;
            }}
          >
            {" "}
            submit{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default ForgotResetOtp;
