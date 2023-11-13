import { useState } from "react";
import {
  handleErrorField,
  createErrNode,
  checkEmpty,
  removeErrorInput,
} from "./scripts.js";
import { sha256 } from "js-sha256";
import ViewDetailsOtp from "./ViewDetailsOtp.jsx";
import ForgotResetOtp from "./ForgotResetOtp.jsx";
const ForgotPopup = ({ forgotted, setViewPopup, mode }) => {
  const [reciveOpt, setOtp] = useState(true);
  const [bkOtp, bksetOtp] = useState();
  const [otpVerified, setOtpVerified] = useState();
  function removeErrorInput(e) {
    document.querySelector(`.${e.target.name}-errorField`)
      ? document.querySelector(`.${e.target.name}-errorField`).remove()
      : null;
    e.target.classList.remove("errorInputField");
  }
  async function checkmailExist() {
    const Ip = document.querySelector(".fgt-emailid-input");
    var formData = new FormData();
    formData.append("fields", ["emailid"]);
    formData.append("emailid", Ip.value.trim());
    const api = await fetch("http://localhost:8000/students/details/exists", {
      method: "POST",
      body: formData,
    });
    const resp = await api.json();
    if (!resp.suc) {
      return true;
    } else {
      handleErrorField(`.fgt-emailid-input`, `${Ip.value} not existed`, true);
      return false;
    }
  }
  async function requestToSendOtp(Ip) {
    const api = await fetch(
      `http://localhost:8000/backend/initOtp/${Ip.value.trim()}`
    );
    const resp = await api.json();
    if (resp.otpSND) {
      Ip.classList.add("suc-border");
      bksetOtp(resp.otpSND);
    } else {
      alert("someting went wrong!!!");
    }
  }
  async function handleSendOtp() {
    const Ip = document.querySelector(".fgt-emailid-input");
    if (await checkmailExist()) {
      await requestToSendOtp(Ip);
      setOtp(false);
      document.querySelector(".fgt-pwd-inputdiv").classList.remove("closed");
      Ip.after(createErrNode("otp sended", "fgt-emailid-input", true));
    }
  }
  function closePopup() {
    setViewPopup(false);
  }
  function confirmOtp() {
    const otpField = document.querySelector(".otp-input");
    console.log(otpField.value);
    var ipHash = sha256.hex(otpField.value);
    const serverHash = bkOtp;
    if (ipHash === serverHash) {
      console.log("yes same");
      setOtpVerified(true);
    } else {
      handleErrorField(".otp-input", "incorrect otp", true);
    }
  }
  return (
    <div className="fgt-bg-blur-ctn">
      <div className="fgt-popup">
        <span
          className="material-symbols-outlined fgt-close"
          onClick={closePopup}
        >
          close
        </span>
        {otpVerified ? (
          mode == "view" ? (
            <ViewDetailsOtp
              which={forgotted}
              value={document.querySelector(".fgt-emailid-input").value.trim()}
            />
          ) : (
            <ForgotResetOtp
              which={forgotted}
              value={document.querySelector(".fgt-emailid-input").value.trim()}
            />
          )
        ) : (
          <>
            <span>Confirm your Email</span>
            <div className="inputdiv required ">
              <label htmlFor="emailid-input">Email Id</label>
              <input
                autoComplete="off"
                type="email"
                className="fgt-emailid-input input"
                name="emailid"
                onChange={removeErrorInput}
                placeholder="Enter your email"
              />
            </div>
            <div className="inputdiv closed fgt-pwd-inputdiv required">
              <label htmlFor="otp-input">OTP</label>
              <input
                autoComplete="off"
                type="email"
                className="otp-input input"
                name="emailid"
                onChange={removeErrorInput}
                placeholder="Enter otp"
              />
            </div>
            {reciveOpt ? (
              <button
                className="btn"
                onClick={() => {
                  checkEmpty("fgt-popup") ? null : handleSendOtp();
                }}
              >
                {" "}
                send otp
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  !checkEmpty("fgt-popup") ? confirmOtp() : null;
                }}
              >
                {" "}
                confirm otp
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPopup;
