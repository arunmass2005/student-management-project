import { useEffect, useState } from "react";
import { useFieldError } from "./useError.js";
import DropdownInput from "./DropdownInput.jsx";
import {useNavigate} from "react-router-dom"
function Registration() {
  const [bankDetails, setBankDetails] = useState({});
  const [dpId, setDpId] = useState("");
  const navigate = useNavigate()
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
  function createErrNode(errmsg) {
    const errNode = document.createElement("div");
    errNode.className = "errorFieldMsg";
    errNode.innerText = `${errmsg}*`;
    return errNode;
  }
  function handleErrorField(field, errmsg) {
    const errField = document.querySelector(`.${field}-input`);
    errField.scrollIntoView();
    errField.classList.add("errorInputField");
    errField.after(createErrNode(errmsg));
  }
  async function loginpost(formData) {
    try {
      const api = await fetch("http://localhost:8000/students/login/", {
        method: "POST",
        body: formData,
      });
      const resp = await api.json();

      if (resp.suc) {
        alert(`${resp.suc} added successfully!`);
        navigate('login',{replace:true})
        
      } else {
        console.log(resp);
        handleErrorField(resp.field, resp.err);
      }
    } catch (err) {
      console.error(err);
    }
  }
  function profileChange() {
    const profileInput = document.querySelector("#profile_input");
    const profileImg = document.querySelector("#profile_img");
    profileImg.src = URL.createObjectURL(profileInput.files[0]);
  }
  function profile() {
    const Profile = document.getElementById("profile_input");
    Profile.click();
  }
  function Submit(e) {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    console.log(formData);
    loginpost(formData);
  }
  var checked = (e) => {
    e.checked = true;
  };
  return (
    <form className="form-container" id="form" onSubmit={Submit}>
      <span id="title">REGISTRATION FORM</span>
      <div className="profile" id="profilediv">
        <span className="profile_outer" onClick={profile}>
          <img src="src/assets/preview-profile.png" alt="" id="profile_img" />
          <input
            type="file"
            className="profile_input"
            id="profile_input"
            onChange={() => {
              profileChange;
            }}
            name="profile"
          />
        </span>
        <label htmlFor="profileinput">Add Profile</label>
      </div>

      <section className="General-Info">
        <div className="inputdiv">
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            className="name-input input"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="user-input">UserId</label>
          <input
            type="text"
            className="userid-input input"
            placeholder="Enter your userid"
            onChange={(e) => {
              document.querySelector(".errorFieldMsg")
                ? document.querySelector(".errorFieldMsg").remove()
                : null;
              e.target.classList.remove("errorInputField");
            }}
            name="userid"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            className="password-input input"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="dob-input">Date Of Birth</label>
          <input type="date" className="dob-input input" name="dob" />
        </div>
        <div className="inputdiv">
          <label htmlFor="gender-input ">Gender</label>
          <DropdownInput field="gender" />
        </div>
        <div className="inputdiv">
          <label htmlFor="blood-input">Blood Group</label>
          <DropdownInput field="bloodgroup" />
        </div>
        <div className="inputdiv">
          <label htmlFor="nationality-input">Blood Group</label>
          <select id="nationality-input input" name="nationality">
            <option value="Indian">Indian</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="inputdiv">
          <label htmlFor="religion-input">Religion</label>
          <DropdownInput field="religion" />
        </div>
        <div className="inputdiv">
          <label htmlFor="community-input">Community</label>
          <DropdownInput field="community" setDpId={setDpId} />
        </div>
        <div className="inputdiv">
          <label htmlFor="community-input">Caste</label>
          <DropdownInput field="caste" id={dpId} parent="community" />
        </div>
        <div className="inputdiv">
          <label htmlFor="aadhar-input">Aadhar</label>
          <input
            type="text"
            className="aadhar-input input"
            name="aadhar"
            placeholder="Enter your aadhar"
            onChange={(e) => {
              document.querySelector(".errorFieldMsg")
                ? document.querySelector(".errorFieldMsg").remove()
                : null;
              e.target.classList.remove("errorInputField");
            }}
            maxLength={12}
          />
        </div>
        <div className="inputdiv radio">
          <label htmlFor="fg-input">First Graduate</label>
          <span>
            <span>
              <input
                type="radio"
                name="firstgraduate"
                value={"yes"}
                onClick={checked}
              />{" "}
              yes
            </span>
            <span>
              <input
                type="radio"
                name="firstgraduate"
                value={"no"}
                onClick={checked}
              />{" "}
              no
            </span>
          </span>
        </div>
      </section>
      <section className="Contact-Info">
        <div className="inputdiv">
          <label htmlFor="mobile-input">Mobile Number</label>
          <input
            type="text"
            className="mobile-input input"
            name="mobile"
            placeholder="Enter your mobile"
            onChange={(e) => {
              document.querySelector(".errorFieldMsg")
                ? document.querySelector(".errorFieldMsg").remove()
                : null;
              e.target.classList.remove("errorInputField");
            }}
            maxLength={10}
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="emailid-input">Email Id</label>
          <input
            type="email"
            className="emailid-input input"
            name="emailid"
            onChange={(e) => {
              document.querySelector(".errorFieldMsg")
                ? document.querySelector(".errorFieldMsg").remove()
                : null;
              e.target.classList.remove("errorInputField");
            }}
            placeholder="Enter your email"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="country-input">Country</label>
          <DropdownInput field="country" />
        </div>
        <div className="inputdiv">
          <label htmlFor="state-input">State</label>
          <DropdownInput field="state" />
        </div>

        <div className="inputdiv">
          <label htmlFor="district-input">District</label>
          <DropdownInput field="district" setDpId={setDpId} />
        </div>
        <div className="inputdiv">
          <label htmlFor="taluk-input">Taluk</label>
          <DropdownInput field="taluk" id={dpId} parent="district" />
        </div>
        <div className="inputdiv">
          <label htmlFor="location-type-input">Location Type</label>
          <input
            type="text"
            className="location-type-input input"
            name="location_type"
            placeholder="Enter rural/town"
          />
        </div>

        <div className="inputdiv">
          <label htmlFor="vilage-input">Vilage/Town</label>
          <input
            type="text"
            className="vilage-input input"
            name="place"
            placeholder="Enter your village/town"
          />
        </div>
        <div className="inputdiv addressdiv">
          <label htmlFor="address-input">Address</label>
          <textarea
            className="address-input input"
            cols="30"
            rows="10"
            name="address"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div className="inputdiv">
          <label htmlFor="father-name-input">Father Name</label>
          <input
            type="text"
            className="father-name-input input"
            name="fathersname"
            placeholder="father name"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="f-occupation-input">Father Occupation</label>
          <input
            type="text"
            className="f-occupation-input input"
            name="fathersoccupation"
            placeholder="father ocupation"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="mother-name-input">Mother Name</label>
          <input
            type="text"
            className="mother-name-input input"
            name="mothersname"
            placeholder="mother name"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="m-occupation-input">Mothers Occupation</label>
          <input
            type="text"
            className="m-occupation-input input"
            name="mothersoccupation"
            placeholder="mother occupation"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="parents-mobile-input">Parent Mobile Number</label>
          <input
            type="text"
            className="parents-mobile-input input"
            name="parents_mobile_number"
            placeholder="parent mobile"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="a-income-input">Annual Income</label>
          <input
            type="text"
            className="a-income-input input"
            name="annual_income"
            placeholder="annual income"
          />
        </div>
      </section>
      <section className="Bank-Info">
        <div className="inputdiv">
          <label htmlFor="account-input">Account Number</label>
          <input
            type="text"
            className="account-input input"
            name="account_number"
            placeholder="account number"
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="ifsc-input">IFSC code</label>
          <input
            type="text"
            className="ifsc-input input"
            name="ifsc"
            placeholder="ifsc code"
          />
        </div>
        <button type="button" className="btn edit" onClick={handleBankDetails}>
          Get Data
        </button>
        <div className="inputdiv">
          <label htmlFor="b-name-input">Bank Name</label>
          <input
            type="text"
            className="b-name-input input"
            name="b-name"
            placeholder="bank name"
            readOnly
            value={bankDetails ? bankDetails.bank_name : null}
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="b-branch-input">Bank Branch</label>
          <input
            type="text"
            className="b-branch-input input"
            name="b-branch"
            placeholder="bank branch"
            readOnly
            value={bankDetails ? bankDetails.bank_branch : null}
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="b-city-input">City</label>
          <input
            readOnly
            type="text"
            className="b-city-input input"
            name="b-city"
            placeholder="city"
            value={bankDetails ? bankDetails.city : null}
          />
        </div>
      </section>
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
}
export default Registration;
