import { useEffect, useState } from "react";
import { useFieldError } from "./useError.js";
import DropdownInput from "./DropdownInput.jsx";
import { useNavigate } from "react-router-dom";
import Requirements from "./Requirements.jsx";
import Loading from "./Loading.jsx";
import {
  handleErrorField,
  createErrNode,
  checkEmpty,
  objTOform,
} from "./scripts.js";
function Registration() {
  const sections = [
    "login-credentials-info",
    "genral-info",
    "contact-info",
    "bank-info",
  ];
  const sectionsHeader = [
    "Login Credentials",
    "General Information",
    "Contact Information",
    "Bank Information",
  ];
  const signals = ["lg-signal", "gn-signal", "cn-signal", "bk-signal"];
  const [bankDetails, setBankDetails] = useState({});
  const [dpId, setDpId] = useState("");
  const [req, setReq] = useState({});
  const [isLoad, setLoad] = useState();
  const [image, setImage] = useState();
  let dob = "+";
  const [current, setCurrent] = useState({
    id: 0,
    current: "login-credentials-info",
  });

  const navigate = useNavigate();

  function handleSubmit(isCheckExist, checkList) {
    console.log(checkList);
    setLoad(true);
    console.log("runned use effect");
    isCheckExist ? checkExists(checkList) : checkFurther();
  }

  function checkFurther() {
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
    if (!checkPwd()) {
      // handleErrorField("c-password", "password not same", false);
      return;
    }
    console.log("checked req");
    moveNext();
  }
  async function handleBankDetails() {
    const ifsc = document.querySelector(".ifsc-input");
    const ifscApi = await fetch(`https://ifsc.razorpay.com/${ifsc.value}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });
    const resp = await ifscApi.json();
    if (resp) {
      setBankDetails({
        bank_name: resp.BANK,
        bank_branch: resp.BRANCH,
        city: resp.CITY,
      });
    } else {
      console.log(resp);
    }
  }

  async function loginpost(formData) {
    try {
      const api = await fetch("http://localhost:8000/students/login/", {
        method: "POST",
        body: objTOform(formData),
      });
      const resp = await api.json();

      if (resp.suc) {
        alert(`${resp.suc} added successfully!`);
        navigate("/login", { replace: true });
      } else {
        console.log(resp);
        handleErrorField(resp.field, resp.err);
      }
    } catch (err) {
      console.error(err);
    }
  }
  function profileChange() {
    console.log("clicked");
    const profileInput = document.querySelector("#profile_input");
    const profileImgData = profileInput.files[0];
    const profileImg = document.querySelector("#profile_img");
    profileImg.src = URL.createObjectURL(profileImgData);
    setImage(profileImgData);
  }
  function profile() {
    const Profile = document.getElementById("profile_input");
    Profile.click();
  }
  function Submit(e) {
    const temp = {};
    // ad separate input for image
    const profileIp = document.querySelector(".profile_input");
    temp["profile"] = profileIp.files[0];
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((ele) => {
      if (ele.getAttribute("dp_key"))
        temp[ele.name] = parseInt(ele.getAttribute("dp_key"));
      else if (ele.type == "radio") {
        if (ele.checked) {
          temp[ele.name] = ele.value;
        }
      } else {
        temp[ele.name] = ele.value;
      }
    });

    loginpost(temp);
  }
  var checked = (e) => {
    e.checked = true;
  };
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
  function showRequirements(e) {
    document.querySelector(`.${e.target.name}-requirements`).style.display =
      "flex";
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

  function moveNext() {
    // document
    //   .querySelector(`.${signals[current.id]}`)
    //   .classList.remove("signal-green");
    // console.log(current.id);
    document
      .querySelector("." + sections[current.id])
      .classList.remove("showSection");

    console.log(current.id);
    console.log("printing curret");
    console.log(current);
    console.log("AFTER CURRENT PRINTEINF");
    console.log(current);
    document
      .querySelector("." + sections[current.id + 1])
      .classList.add("showSection");
    document
      .querySelector(`.${signals[current.id + 1]}`)
      .classList.add("signal-green");
    setCurrent((prev) => ({
      ...prev,
      id: prev.id + 1,
      current: sections[prev.id + 1],
    }));
  }

  function movePrevious() {
    console.log(current.id - 1);
    console.log(current);
    document
      .querySelector(`.${signals[current.id]}`)
      .classList.remove("signal-green");
    document
      .querySelector("." + sections[current.id])
      .classList.remove("showSection");

    console.log(current);
    document
      .querySelector("." + sections[current.id - 1])
      .classList.add("showSection");
    document
      .querySelector(`.${signals[current.id - 1]}`)
      .classList.add("signal-green");
    current.id > 4 && current.id > 0
      ? null
      : setCurrent((prev) => ({
          ...prev,
          id: prev.id - 1,
          current: sections[prev.id - 1],
        }));
  }
  async function checkExists(fields) {
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
      setLoad(null);
      checkFurther();
      return true;
    } else {
      resp.err.forEach((arry) => {
        handleErrorField(arry.field, `${arry.value} aldready existed`);
      });
      setLoad(null);

      return false;
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
  function removeErrorInput(e) {
    document.querySelector(`.${e.target.name}-errorField`)
      ? document.querySelector(`.${e.target.name}-errorField`).remove()
      : null;
    e.target.classList.remove("errorInputField");
  }
  function dateSplitter(e) {
    const ipValue = e.target.value;
    // if(ipValue.length ==2 || ipValue.length ==3){
    //   if(ipValue.length===3 && dob=="-"){
    //     e.target.value = ipValue.slice(0,1)
    //   }else{
    //   e.target.value = ipValue+"/"
    //   dob = "-"
    // }
    // }
    // else if(ipValue.length ===5 ||ipValue.length ===6){
    //   console.log(ipValue)
    //   console.log(dob)
    //   if(ipValue.length===6 && dob==="-"){
    //     console.log(ipValue)
    //     e.target.value = ipValue.slice(0,5)
    //   }else{
    //   console.log(ipValue)
    //   console.log(dob)
    //   e.target.value = ipValue+"/"}
    // }
    // // if(ipValue.length ===10){
    // //   dob = "-"
    // // }
  }
  return (
    <>
      {isLoad ? <Loading /> : null}
      <div className="form-container" id="form">
        <span id="title">REGISTRATION FORM</span>
        <div className="reg-nav-div">
          <div className="signal-overall-div">
            <div className="signal-div">
              <div className={`lg-signal signal signal-green`}></div>
              <span className="sec-names">{sectionsHeader[0]}</span>
            </div>
            <div className="signal-div">
              <div className={`gn-signal signal`}></div>
              <span className="sec-names">{sectionsHeader[1]}</span>
            </div>
            <div className="signal-div">
              <div className={`cn-signal signal`}></div>
              <span className="sec-names">{sectionsHeader[2]}</span>
            </div>
            <div className="signal-div">
              <div className={`bk-signal signal`}></div>
              <span className="sec-names">{sectionsHeader[3]}</span>
            </div>
          </div>
        </div>
        <section className="login-credentials-info showSection">
          <span className="section-header"> Login Credentials</span>
          <form className="reg-form">
            <div className="inputdiv required required">
              <label htmlFor="name-input">Name</label>
              <input
                autoComplete="off"
                type="text"
                required
                className="name-input input"
                placeholder="Enter your name"
                name="name"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required required">
              <label htmlFor="mobile-input">Mobile Number</label>
              <input
                autoComplete="off"
                type="text"
                required
                max={10}
                inputMode="numeric"
                className="mobile-input input"
                name="mobile"
                placeholder="Enter your mobile"
                onChange={removeErrorInput}
                maxLength={10}
              />
            </div>
            <div className="inputdiv required required">
              <label htmlFor="emailid-input">Email Id</label>
              <input
                autoComplete="off"
                type="email"
                required
                className="emailid-input input"
                name="emailid"
                onChange={removeErrorInput}
                placeholder="Enter your email"
              />
            </div>
            <div className="inputdiv required required">
              <label htmlFor="userid-input">UserId</label>
              <input
                autoComplete="off"
                type="text"
                required
                className="userid-input input"
                onBlur={() =>
                  (document.querySelector(
                    ".userid-requirements "
                  ).style.display = "none")
                }
                placeholder="Enter your userid"
                onChange={(e) => {
                  removeErrorInput(e);
                  checkRequirements(e);
                }}
                onClick={showRequirements}
                name="userid"
              />
              <Requirements name={"userid"} />
            </div>

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
            <div className="btn-div">
              <button
                type="button"
                className="btn "
                onClick={() => {
                  confirm("Confirm to cancel ? ")
                    ? navigate("/login", { replace: true })
                    : null;
                }}
              >
                cancel
              </button>
              <button
                type="submit"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  !checkEmpty("login-credentials-info")
                    ? handleSubmit(true, ["mobile", "emailid", "userid"])
                    : null;
                }}
              >
                next
              </button>
            </div>
          </form>
          <span className="section-footer"></span>
        </section>

        <section className="genral-info">
          <span className="section-header"> General Information</span>
          <form className="reg-form">
            <div className="profile" id="profilediv">
              <span className="profile_outer" onClick={profile}>
                <img
                  src="src/assets/preview-profile.png"
                  alt=""
                  id="profile_img"
                />
                <input
                  autoComplete="off"
                  type="file"
                  accept="image/*"
                  className="profile_input"
                  id="profile_input"
                  onChange={profileChange}
                  name="profile"
                  required={false}
                />
              </span>
              <label htmlFor="profileinput">Add Profile</label>
            </div>
            <div className="inputdiv required">
              <label htmlFor="dob-input" id="dob-label">
                Date Of Birth
              </label>
              <input
                autoComplete="off"
                type="text"
                required
                className="dob-input input"
                name="dob"
                placeholder="date/month/year"
                maxLength={10}
                onChange={(e) => {
                  dateSplitter(e);
                  removeErrorInput(e);
                }}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="gender-input ">Gender</label>
              <DropdownInput field="gender" onChange={removeErrorInput} />
            </div>
            <div className="inputdiv required">
              <label htmlFor="blood-input">Blood Group</label>
              <DropdownInput field="bloodgroup" onChange={removeErrorInput} />
            </div>
            <div className="inputdiv ">
              <label htmlFor="nationality-input">Nationality</label>
              <input
                autoComplete="off"
                type="text"
                className="nationality-input input default"
                value={"Indian"}
                readOnly
                placeholder="Enter you nationlaity"
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="religion-input">Religion</label>
              <DropdownInput field="religion" onChange={removeErrorInput} />
            </div>
            <div className="inputdiv required">
              <label htmlFor="community-input">Community</label>
              <DropdownInput
                field="community"
                setDpId={setDpId}
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="caste-input">Caste</label>
              <DropdownInput
                field="caste"
                id={dpId}
                parent="community"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="aadhar-input">Aadhar</label>
              <input
                autoComplete="off"
                type="text"
                className="aadhar-input input"
                name="aadhar"
                required
                placeholder="Enter your aadhar"
                onChange={removeErrorInput}
                maxLength={12}
              />
            </div>
            <div className="inputdiv required radio">
              <label htmlFor="fg-input">First Graduate</label>
              <div className="radio-container">
                <div className="radio-outer">
                  <input
                    className="radio-input input"
                    autoComplete="off"
                    type="radio"
                    name="firstgraduate"
                    value={"yes"}
                    onClick={checked}
                  />{" "}
                  <span>YES</span>
                </div>
                <div className="radio-outer">
                  <input
                    className="radio-input input"
                    autoComplete="off"
                    type="radio"
                    name="firstgraduate"
                    value={"no"}
                    onClick={checked}
                  />{" "}
                  <span>NO</span>
                </div>
              </div>
            </div>
            <div className="btn-div">
              <button type="button" className="btn " onClick={movePrevious}>
                previous
              </button>
              <button
                type="submit"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  !checkEmpty("genral-info")
                    ? handleSubmit(true, ["aadhar"])
                    : null;
                }}
                // onClick={moveNext}
              >
                next
              </button>
            </div>
          </form>
          <span className="section-footer"></span>
        </section>

        <section className="contact-info">
          <span className="section-header"> Contact Information</span>
          <form className="reg-form">
            <div className="inputdiv required">
              <label htmlFor="country-input">Country</label>
              <DropdownInput field="country" onChange={removeErrorInput} />
            </div>
            <div className="inputdiv required">
              <label htmlFor="state-input">State</label>
              <DropdownInput field="state" onChange={removeErrorInput} />
            </div>

            <div className="inputdiv required">
              <label htmlFor="district-input">District</label>
              <DropdownInput
                field="district"
                setDpId={setDpId}
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="taluk-input">Taluk</label>
              <DropdownInput
                field="taluk"
                id={dpId}
                parent="district"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="location-type-input">Location Type</label>
              <DropdownInput
                field="location_type"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="vilage-input">Vilage/Town</label>
              <input
                autoComplete="off"
                type="text"
                className="vilage-input input"
                name="place"
                required
                placeholder="Enter your village/town"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="pincode-input">Pincode</label>
              <input
                autoComplete="off"
                type="text"
                className="pincode-input input"
                name="pincode"
                required
                placeholder="Enter pincode"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required addressdiv">
              <label htmlFor="address-input">Address</label>

              <textarea
                required
                className="address-input input"
                cols="30"
                rows="10"
                name="address"
                placeholder="Enter your address"
                onChange={removeErrorInput}
              ></textarea>
            </div>
            <div className="inputdiv required">
              <label htmlFor="father-name-input">Father's Name</label>
              <input
                autoComplete="off"
                type="text"
                className="father-name-input input"
                name="fathersname"
                required
                placeholder="father name"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="f-occupation-input">Father's Occupation</label>
              <input
                autoComplete="off"
                type="text"
                required
                className="f-occupation-input input"
                name="fathersoccupation"
                placeholder="father ocupation"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="mother-name-input">Mother's Name</label>
              <input
                autoComplete="off"
                type="text"
                className="mother-name-input input"
                name="mothersname"
                placeholder="mother name"
                required
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="m-occupation-input">Mother's Occupation</label>
              <input
                autoComplete="off"
                type="text"
                className="m-occupation-input input"
                name="mothersoccupation"
                required
                placeholder="mother occupation"
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="parents-mobile-input">
                Parent's Mobile Number
              </label>
              <input
                autoComplete="off"
                type="text"
                maxLength={10}
                className="parents-mobile-input input"
                name="parents_mobile_number"
                placeholder="parent mobile"
                required
                onChange={removeErrorInput}
              />
            </div>
            <div className="inputdiv required">
              <label htmlFor="a-income-input">Annual Income</label>
              <input
                autoComplete="off"
                type="text"
                className="a-income-input input"
                name="annual_income"
                placeholder="annual income"
                required
                onChange={removeErrorInput}
              />
            </div>
            <div className="btn-div">
              <button type="button" className="btn" onClick={movePrevious}>
                previous
              </button>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  !checkEmpty("contact-info") ? moveNext() : null;
                }}
              >
                next
              </button>
            </div>
          </form>
          <span className="section-footer"></span>
        </section>
        <section className="bank-info">
          <span className="section-header"> Bank Account Details</span>
          <form
            className="reg-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="inputdiv required">
              <label htmlFor="account-input">Account Number</label>
              <input
                autoComplete="off"
                required
                type="text"
                className="account-input input"
                name="account_number"
                placeholder="account number"
                onChange={removeErrorInput}
              />
            </div>
            <div className="ifsc-container">
              <div className="inputdiv required">
                <label htmlFor="ifsc-input">IFSC code</label>
                <input
                  autoComplete="off"
                  type="text"
                  required
                  className="ifsc-input input"
                  name="ifsc"
                  placeholder="ifsc code"
                  onChange={removeErrorInput}
                />
              </div>

              <button
                type="button"
                className="btn edit register-btn"
                onClick={handleBankDetails}
              >
                Get Data
              </button>
            </div>
            <div className="inputdiv ">
              <label htmlFor="b-name-input">Bank Name</label>
              <input
                autoComplete="off"
                type="text"
                className="b-name-input input"
                name="b-name"
                placeholder="bank name"
                readOnly
                value={bankDetails ? bankDetails.bank_name : null}
              />
            </div>
            <div className="inputdiv ">
              <label htmlFor="b-branch-input">Bank Branch</label>
              <input
                autoComplete="off"
                type="text"
                className="b-branch-input input"
                name="b-branch"
                placeholder="bank branch"
                readOnly
                value={bankDetails ? bankDetails.bank_branch : null}
              />
            </div>
            <div className="inputdiv ">
              <label htmlFor="b-city-input">City</label>
              <input
                autoComplete="off"
                readOnly
                type="text"
                className="b-city-input input"
                name="b-city"
                placeholder="city"
                value={bankDetails ? bankDetails.city : null}
              />
            </div>
            <div className="btn-div">
              <button type="button" className="btn" onClick={movePrevious}>
                previous
              </button>
              <button
                type="submit"
                className="btn"
                onClick={(e) => {
                  !checkEmpty("bank-info") ? Submit() : null;
                }}
              >
                submit
              </button>
            </div>
          </form>
          <span className="section-footer"></span>
        </section>
      </div>
    </>
  );
}
export default Registration;
