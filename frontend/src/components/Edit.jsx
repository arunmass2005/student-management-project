import React, { useEffect } from "react";
import { useState } from "react";
import { getFromLocal, setToLocal } from "./scripts";
import { useNavigate, useOutletContext } from "react-router-dom";

function Edit() {
  const studentData = useOutletContext()[0];
  const navigate = useNavigate();
  const [fg, setfg] = useState(studentData.firstgraduate);
  const [formData, setFormData] = useState({});
  function objTOform(obj) {
    const formData = new FormData();
    Object.entries(obj).forEach(([k, v]) => {
      formData.append(k, v);
    });
    return formData;
  }
  function changeValue(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }
  function changeImgValue(imgUrl) {
    const imgArray = studentData.profile.split("/");

    if (imgUrl.name !== imgArray[imgArray.length - 1]) {
      setFormData({ ...formData, ["profile"]: imgUrl });
    } else {
      console.log("yes same");
    }
  }
  function profileChange(e) {
    const profileInput = document.querySelector("#profile_show");
    const profileImg = document.querySelector("#profile_img");
    const profileImgData = profileInput.files[0];
    profileImg.src = URL.createObjectURL(profileImgData);
    changeImgValue(profileImgData);
  }
  function profileGet() {
    const Profile = document.getElementById("profile_show");
    Profile.click();
  }
  var checked = (e) => {
    setfg(e.target.value);
  };
  async function editStData() {
    const formdata = objTOform(formData);
    const api = await fetch(
      `http://localhost:8000/students/login/${studentData.userid}`,
      {
        method: "PUT",
        body: formdata,
      }
    );
    const resp = await api.json();
    if (resp.suc) {
      setToLocal(resp.suc);
      console.log(resp.suc);
      alert("sucessfully updated !");

      navigate("/dashboard", { state: resp.suc });
      // location.replace('/dashboard')
    } else {
      alert(resp.err);
    }
  }
  return (
    <>
      <form className="form">
        <div className="profile-container" id="profile-container">
          <div className="profile" id="profilediv">
            <span className="profile_outer" onClick={profileGet}>
              <img
                src={`http://localhost:8000/students${studentData.profile}`}
                alt=""
                id="profile_img"
              />
              <input
                type="file"
                className="profile_show"
                id="profile_show"
                name="profile"
                onChange={profileChange}
              />
            </span>
          </div>
          <section className="General-Info">
            <div className="showdiv">
              <label htmlFor="name-show">Name</label>
              <input
                type="text"
                className="name-show show"
                name="name"
                defaultValue={studentData.name.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="user-show">UserId</label>
              <input
                type="text"
                className="userid-show show"
                name="userid"
                defaultValue={studentData.userid}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="dob-show">Date Of Birth</label>
              <input
                type="text"
                className="dob-show show"
                name="dob"
                defaultValue={studentData.dob}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="gender-show ">Gender</label>
              <input
                type="text"
                name="gender"
                defaultValue={studentData.gender.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="blood-show">Blood Group</label>
              <input
                type="text"
                name="bloodgroup"
                defaultValue={studentData.bloodgroup}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="religion-show">Religion</label>
              <input
                type="text"
                className="religion-show show"
                name="religion"
                defaultValue={studentData.religion.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="community-show">Community</label>
              <input
                type="text"
                className="community-show show"
                name="community"
                defaultValue={studentData.community.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="community-show">Caste</label>
              <input
                type="text"
                className="caste-show show"
                name="caste"
                defaultValue={studentData.caste.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="aadhar-show">Aadhar</label>
              <input
                type="text"
                className="aadhar-show show"
                name="aadhar"
                maxLength={12}
                defaultValue={studentData.aadhar}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="fg-show">First Graduate</label>
              <div className="fg-container">
                <input
                  type="radio"
                  name="firstgraduate"
                  className="fg-show show"
                  value={"yes"}
                  onChange={checked}
                  onClick={changeValue}
                  checked={fg === "yes" ? true : false}
                />
                <span>YES</span>
              </div>
              <div className="fg-container">
                <input
                  type="radio"
                  name="firstgraduate"
                  className="fg-show show"
                  value={"no"}
                  onChange={checked}
                  checked={fg === "no" ? true : false}
                  onClick={changeValue}
                />
                <span>NO</span>
              </div>
            </div>
          </section>
          <section className="Contact-Info">
            <div className="showdiv">
              <label htmlFor="mobile-show">Mobile Number</label>
              <input
                type="text"
                className="mobile-show show"
                name="mobile"
                maxLength={10}
                defaultValue={studentData.mobile}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="email-show">Email Id</label>
              <input
                type="email"
                className="email-show show"
                name="emailid"
                defaultValue={studentData.emailid}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="country-show">Country</label>
              <input
                type="text"
                className="country-show show"
                name="country"
                defaultValue={studentData.country.toUpperCase()}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="state-show">State</label>
              <input
                type="text"
                className="state-show show"
                name="state"
                defaultValue={studentData.state.toUpperCase()}
                onChange={changeValue}
              />
            </div>

            <div className="showdiv">
              <label htmlFor="district-show">District</label>
              <input
                type="text"
                className="district-show show"
                name="district"
                defaultValue={studentData.district.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="location-type-show">Location Type</label>
              <input
                type="text"
                className="location-type-show show"
                name="location_type"
                defaultValue={studentData.location_type.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="taluk-show">Taluk</label>
              <input
                type="text"
                className="taluk-show show"
                name="taluk"
                defaultValue={studentData.taluk.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="vilage-show">Vilage/Town</label>
              <input
                type="text"
                className="vilage-show show"
                name="place"
                defaultValue={studentData.place.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv textarea">
              <label htmlFor="address-show">Address</label>
              <textarea
                className="address-show show"
                cols="30"
                rows="10"
                name="address"
                defaultValue={studentData.address.toUpperCase()}
                onChange={changeValue}
              ></textarea>
            </div>
            <div className="showdiv">
              <label htmlFor="father-name-show">Father Name</label>
              <input
                type="text"
                className="father-name-show show"
                name="fathersname"
                defaultValue={studentData.fathersname.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="f-occupation-show">Father Occupation</label>
              <input
                type="text"
                className="f-occupation-show show"
                name="fathersoccupation"
                defaultValue={studentData.fathersoccupation.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="mother-name-show">Mother Name</label>
              <input
                type="text"
                className="mother-name-show show"
                name="mothersname"
                defaultValue={studentData.mothersname.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="m-occupation-show">Mothers Occupation</label>
              <input
                type="text"
                className="m-occupation-show show"
                name="mothersoccupation"
                defaultValue={studentData.mothersoccupation.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="a-income-show">Annual Income</label>
              <input
                type="text"
                className="a-income-show show"
                name="annual_income"
                defaultValue={studentData.annual_income}
                onChange={changeValue}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="parents-mobile-show">Parent Mobile Number</label>
              <input
                type="text"
                className="parents-mobile-show show"
                name="parents_mobile_number"
                defaultValue={studentData.parents_mobile_number}
                onChange={changeValue}
              />
            </div>
          </section>
          <section className="Bank-Info">
            <div className="showdiv">
              <label htmlFor="account-n-show">Annual Income</label>
              <input
                type="text"
                className="account-n-show show"
                name="account_number"
                
                value={studentData.account_number}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="ifsc-show">IFSC code</label>
              <input
                type="text"
                className="ifsc-show show"
                name="ifsc"
                
                value={studentData.account_number}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="bank-n-show">Bank Name</label>
              <input
                type="text"
                className="bank-n-show show"
                name="bank_name"
                
                value={studentData.bank_name}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="bank-branch-show">Branch</label>
              <input
                type="text"
                className="bank-branch-show show"
                name="bank_branch"
                
                value={studentData.bank_branch}
              />
            </div>
            <div className="showdiv">
              <label htmlFor="bank-city-show">City</label>
              <input
                type="text"
                className="bank-city-show show"
                name="bank_city"
                
                value={studentData.bank_city}
              />
            </div>
          </section>
          <div className="edit-submit-btn-con">
            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                confirm("Confirm to cancel ?") ? navigate("/dashboard") : null;
              }}
            >
              cancel
            </button>
            <button
              type="button"
              className="btn edit"
              onClick={() => {
                confirm("Confirm to edit ?") ? editStData() : null;
              }}
            >
              edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Edit;
