import React, { useEffect } from "react";
import { useState } from "react";
import {
  getFromLocal,
  setToLocal,
  defaultimg,
  setFromApi,
  getFromApiV,
  handleErrorField,
} from "./scripts";
import { useNavigate, useOutletContext } from "react-router-dom";
import DropdownInput from "./DropdownInput";
import Loading from "./Loading";
function Edit() {
  const local = useOutletContext()[0];
  const [stData, setStData] = useState();
  const [formData, setFormData] = useState(new FormData());
  const st_img = `http://localhost:8000/students${
    stData ? stData.profile : local.profile
  }`;
  const navigate = useNavigate();
  const [fg, setfg] = useState(local ? local.firstgraduate : null);
  const [dpId, setDpId] = useState({});
  const [bankDetails, setBankDetails] = useState();
  useEffect(() => {
    setStData(local);
    callBFunc();
  }, []);
  function objTOform(obj) {
    const formData = new FormData();
    Object.entries(obj).forEach(([k, v]) => {
      formData.append(k, v);
    });
    return formData;
  }
  function callBFunc() {
    handleBankDetails();
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
  function changeImgValue(imgUrl) {
    const imgArray = stData.profile ? stData.profile.split("/") : null;
    if (imgArray) {
      if (imgUrl.name !== imgArray[imgArray.length - 1]) {
        setFormData({ ...formData, ["profile"]: imgUrl });
      }
    } else {
      setFormData({ ...formData, ["profile"]: imgUrl });
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
      `http://localhost:8000/students/login/${stData.userid}`,
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
    }
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
  return (
    <>
      {stData ? (
        <div
          className="profile-container edit-container"
          id="profile-container"
        >
          <section className="Academic-Info profile-sections">
            <span className="section-header s-h-dash">
              {" "}
              Academic Information
            </span>
           
            <div className="editdiv">
              <label htmlFor="graduation-show">Graduation</label>
              <DropdownInput
                field={"graduation"}
                value={stData.graduation}
                edit={changeValue}
                setDpId={setDpId}
              />
              
            </div>
            <div className="editdiv">
              <label htmlFor="graduation-show">Degree</label>
              <DropdownInput
                field={"degree"}
                value={stData.degree}
                id={dpId ? dpId : null}
                setDpId={setDpId}
                parent={"graduation"}
                edit={changeValue}
              />
              
            </div>
            <div className="editdiv">
              <label htmlFor="course-show ">Course</label>
              <DropdownInput
                field={"course"}
                id={dpId ? dpId : null}
                value={stData.course}
                parent={"degree"}
                edit={changeValue}
              />
            
            </div>
            
            
            <div className="editdiv">
              <label htmlFor="joined-show">Joined Date</label>
              <input
                required
                type="date"
                className="joined-show show"
                name="joined"
                maxLength={12}
                defaultValue={stData.joined}
                onChange={changeValue}
                style={{
                  fontFamily:"Poppins"
                }}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="academic_year-show">Acadmic Year</label>
              <input
                required
                type="text"
                className="academic_year-show show"
                name="academic_year"
                maxLength={12}
                defaultValue={stData.academic_year}
                onChange={changeValue}
                
              />
            </div> 
            <div className="editdiv">
              <label htmlFor="rollno-show">Roll No.</label>
              <input
                required
                type="text"
                className="rollno-show show"
                name="rollno"
                maxLength={12}
                defaultValue={stData.rollno}
                onChange={changeValue}
                style={{
                  fontFamily:"Poppins"
                }}
              />
            </div>
           
          </section>
          <section className="General-Info profile-sections">
            <span className="section-header s-h-dash">
              {" "}
              General Information
            </span>
            <div className="profile" id="profilediv">
              <span className="profile_outer" onClick={profileGet}>
                <img
                  src={stData.profile ? st_img : defaultimg}
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
            <div className="editdiv">
              <label htmlFor="name-show">Name</label>
              <input
                required
                type="text"
                className="name-show input"
                name="name"
                defaultValue={stData.name.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="dob-show">Date Of Birth</label>
              <input
                required
                type="text"
                className="dob-show input"
                name="dob"
                defaultValue={stData.dob}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="gender-show ">Gender</label>
              <DropdownInput
                field={"gender"}
                value={stData.gender}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                name="gender"
                defaultValue={stData.gender.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="blood-show">Blood Group</label>
              <DropdownInput
                field={"bloodgroup"}
                value={stData.bloodgroup}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                name="bloodgroup"
                defaultValue={stData.bloodgroup}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="religion-show">Religion</label>
              <DropdownInput
                field={"religion"}
                value={stData.religion}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                className="religion-show show"
                name="religion"
                defaultValue={stData.religion.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="community-show">Community</label>
              <DropdownInput
                field={"community"}
                value={stData.community}
                setDpId={setDpId}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                className="community-show show"
                name="community"
                defaultValue={stData.community.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="caste-show">Caste</label>
              <DropdownInput
                field={"caste"}
                value={stData.caste}
                id={dpId ? dpId : null}
                parent={"community"}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                className="caste-show show"
                name="caste"
                defaultValue={stData.caste.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="aadhar-show">Aadhar</label>
              <input
                required
                type="text"
                className="aadhar-show show"
                name="aadhar"
                maxLength={12}
                defaultValue={stData.aadhar}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="fg-show">First Graduate</label>
              <div className="fg-container">
                <input
                  required
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
                  required
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
          <section className="Contact-Info profile-sections">
            <span className="section-header s-h-dash">
              {" "}
              Contact Information
            </span>

            <div className="editdiv">
              <label htmlFor="mobile-show">Mobile Number</label>
              <input
                required
                type="text"
                className="mobile-show show"
                name="mobile"
                maxLength={10}
                defaultValue={stData.mobile}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="email-show">Email Id</label>
              <input
                required
                type="email"
                className="email-show show"
                name="emailid"
                defaultValue={stData.emailid}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="country-show">Country</label>
              <DropdownInput field={"country"} value={stData.country} />
              {/* <input required
                type="text"
                className="country-show show"
                name="country"
                defaultValue={stData.country.toUpperCase()}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="state-show">State</label>
              <DropdownInput field={"state"} value={stData.state} />
              {/* <input required
                type="text"
                className="state-show show"
                name="state"
                defaultValue={stData.state.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>

            <div className="editdiv">
              <label htmlFor="district-show">District</label>
              <DropdownInput
                field={"district"}
                value={stData.district}
                setDpId={setDpId}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                className="district-show show"
                name="district"
                defaultValue={stData.district.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>

            <div className="editdiv">
              <label htmlFor="taluk-show">Taluk</label>
              <DropdownInput
                field={"taluk"}
                value={stData.taluk}
                id={dpId ? dpId : local["district"]}
                parent={"district"}
                edit={changeValue}
              />
              {/* <input required
                type="text"
                className="taluk-show show"
                name="taluk"
                defaultValue={stData.taluk.toUpperCase()}
                onChange={changeValue}
              /> */}
            </div>
            <div className="editdiv">
              <label htmlFor="location-type-show">Location Type</label>
              <DropdownInput
                field="location_type"
                value={stData.location_type}
                edit={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="vilage-show">Vilage/Town</label>
              <input
                required
                type="text"
                className="vilage-show show"
                name="place"
                defaultValue={stData.place.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="pincode-show">Pincode</label>
              <input
                required
                type="text"
                className="pincode-show show"
                name="pincode"
                defaultValue={stData.pincode.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv textarea">
              <label htmlFor="address-show">Address</label>
              <textarea
                className="address-show show"
                cols="30"
                rows="10"
                name="address"
                defaultValue={stData.address.toUpperCase()}
                onChange={changeValue}
                style={{ fontFamily: "Popins,sans-serif" }}
              ></textarea>
            </div>
            <div className="editdiv">
              <label htmlFor="father-name-show">Father Name</label>
              <input
                required
                type="text"
                className="father-name-show show"
                name="fathersname"
                defaultValue={stData.fathersname.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="f-occupation-show">Father Occupation</label>
              <input
                required
                type="text"
                className="f-occupation-show show"
                name="fathersoccupation"
                defaultValue={stData.fathersoccupation.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="mother-name-show">Mother Name</label>
              <input
                required
                type="text"
                className="mother-name-show show"
                name="mothersname"
                defaultValue={stData.mothersname.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="m-occupation-show">Mothers Occupation</label>
              <input
                required
                type="text"
                className="m-occupation-show show"
                name="mothersoccupation"
                defaultValue={stData.mothersoccupation.toUpperCase()}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="a-income-show">Annual Income</label>
              <input
                required
                type="text"
                className="a-income-show show"
                name="annual_income"
                defaultValue={stData.annual_income}
                onChange={changeValue}
              />
            </div>
            <div className="editdiv">
              <label htmlFor="parents-mobile-show">Parent Mobile Number</label>
              <input
                required
                type="text"
                className="parents-mobile-show show"
                name="parents_mobile_number"
                defaultValue={stData.parents_mobile_number}
                onChange={changeValue}
              />
            </div>
          </section>
          <section className="Bank-Info profile-sections">
            <span className="section-header s-h-dash">
              {" "}
              Bank Account Information
            </span>

            <div className="editdiv">
              <label htmlFor="account-n-show">Account Number</label>
              <input
                required
                type="text"
                className="account-n-show input"
                name="account_number"
                value={stData.account_number}
              />
            </div>

            <div className="editdiv">
              <label htmlFor="ifsc-input">IFSC code</label>
              <input
                required
                autoComplete="off"
                type="text"
                className="ifsc-input input"
                name="ifsc"
                defaultValue={stData.ifsc}
                onChange={changeValue}
                placeholder="ifsc code"
              />
            </div>

            <button
              id="bankDetailsGetter"
              type="button"
              className="btn edit register-btn"
              onClick={handleBankDetails}
            >
              Get Data
            </button>

            <div className="editdiv">
              <label htmlFor="b-name-input">Bank Name</label>
              <input
                autoComplete="off"
                type="text"
                className="b-name-input input"
                name="b-name"
                placeholder="bank name"
                readOnly
                value={bankDetails ? bankDetails.bank_name : callBFunc()}
              />
            </div>
            <div className="editdiv">
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
            <div className="editdiv">
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
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Edit;
