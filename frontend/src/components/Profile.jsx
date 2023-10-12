import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default () => {
  // const studentData = useOutletContext()[0];
  const local = JSON.parse(localStorage.getItem("stdata"));
  const [studentData, setStudentData] = useState(local);
  useEffect(() => {
    setStudentData(local);
  }, []);

  return (
    <>
      <div className="profile-container" id="profile-container">
        {/* <div className="profile" id="profilediv">
          <span className="profile_outer">
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
            />
          </span>
        </div> */}
        <section className="General-Info">
          <div className="showdiv">
            <label htmlFor="name-show">Name</label>
            <input
              type="text"
              className="name-show show"
              name="name"
              readOnly
              value={studentData.name.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="user-show">UserId</label>
            <input
              type="text"
              className="userid-show show"
              name="userid"
              readOnly
              value={studentData.userid}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="dob-show">Date Of Birth</label>
            <input
              type="text"
              className="dob-show show"
              name="dob"
              readOnly
              value={studentData.dob}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="gender-show ">Gender</label>
            <input
              type="text"
              name="gender"
              readOnly
              value={studentData.gender.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="blood-show">Blood Group</label>
            <input
              type="text"
              name="bloodgroup"
              readOnly
              value={studentData.bloodgroup}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="nationality-show">Blood Group</label>
            <input
              type="text"
              name="nationality"
              readOnly
              value={studentData.nationality}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="religion-show">Religion</label>
            <input
              type="text"
              className="religion-show show"
              name="religion"
              readOnly
              value={studentData.religion.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="community-show">Community</label>
            <input
              type="text"
              className="community-show show"
              name="community"
              readOnly
              value={studentData.community.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="community-show">Caste</label>
            <input
              type="text"
              className="caste-show show"
              name="caste"
              readOnly
              value={studentData.caste.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="aadhar-show">Aadhar</label>
            <input
              type="text"
              className="aadhar-show show"
              name="aadhar"
              maxLength={12}
              readOnly
              value={studentData.aadhar}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="fg-show">First Graduate</label>
            <div className="fg-container">
              <input
                type="radio"
                name="firstgraduate"
                className="fg-show show"
                readOnly
                checked
              />
              <span> {studentData.firstgraduate.toUpperCase()}</span>
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
              readOnly
              value={studentData.mobile}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="email-show">Email Id</label>
            <input
              type="email"
              className="email-show show"
              name="emailid"
              readOnly
              value={studentData.emailid}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="country-show">Country</label>
            <input
              type="text"
              className="country-show show"
              name="country"
              readOnly
              value={studentData.country.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="state-show">State</label>
            <input
              type="text"
              className="state-show show"
              name="state"
              readOnly
              value={studentData.state.toUpperCase()}
            />
          </div>

          <div className="showdiv">
            <label htmlFor="district-show">District</label>
            <input
              type="text"
              className="district-show show"
              name="district"
              readOnly
              value={studentData.district.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="location-type-show">Location Type</label>
            <input
              type="text"
              className="location-type-show show"
              name="location_type"
              readOnly
              value={studentData.location_type.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="taluk-show">Taluk</label>
            <input
              type="text"
              className="taluk-show show"
              name="taluk"
              readOnly
              value={studentData.taluk.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="vilage-show">Vilage/Town</label>
            <input
              type="text"
              className="vilage-show show"
              name="place"
              readOnly
              value={studentData.place.toUpperCase()}
            />
          </div>
          <div className="showdiv textarea">
            <label htmlFor="address-show">Address</label>
            <textarea
              className="address-show show"
              cols="30"
              rows="10"
              name="address"
              readOnly
              value={studentData.address.toUpperCase()}
            ></textarea>
          </div>
          <div className="showdiv">
            <label htmlFor="father-name-show">Father Name</label>
            <input
              type="text"
              className="father-name-show show"
              name="fathersname"
              readOnly
              value={studentData.fathersname.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="f-occupation-show">Father Occupation</label>
            <input
              type="text"
              className="f-occupation-show show"
              name="fathersoccupation"
              readOnly
              value={studentData.fathersoccupation.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="mother-name-show">Mother Name</label>
            <input
              type="text"
              className="mother-name-show show"
              name="mothersname"
              readOnly
              value={studentData.mothersname.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="m-occupation-show">Mothers Occupation</label>
            <input
              type="text"
              className="m-occupation-show show"
              name="mothersoccupation"
              readOnly
              value={studentData.mothersoccupation.toUpperCase()}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="a-income-show">Annual Income</label>
            <input
              type="text"
              className="a-income-show show"
              name="annual_income"
              readOnly
              value={studentData.annual_income}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="parents-mobile-show">Parent Mobile Number</label>
            <input
              type="text"
              className="parents-mobile-show show"
              name="parents_mobile_number"
              readOnly
              value={studentData.parents_mobile_number}
            />
          </div>
        </section>
        <section className="Bank-Info">
          <div className="showdiv">
            <label htmlFor="account-n-show">Account Number</label>
            <input
              type="text"
              className="account-n-show show"
              name="account_number"
              readOnly
              value={studentData.account_number}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="ifsc-show">IFSC code</label>
            <input
              type="text"
              className="ifsc-show show"
              name="ifsc"
              readOnly
              value={studentData.ifsc}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="bank-n-show">Bank Name</label>
            <input
              type="text"
              className="bank-n-show show"
              name="bank-n"
              readOnly
              value={studentData.bank_name}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="bank-branch-show">Branch</label>
            <input
              type="text"
              className="bank-branch-show show"
              name="bank_branch"
              readOnly
              value={studentData.bank_branch}
            />
          </div>
          <div className="showdiv">
            <label htmlFor="bank-city-show">City</label>
            <input
              type="text"
              className="bank-city-show show"
              name="bank_city"
              readOnly
              value={studentData.bank_city}
            />
          </div>
        </section>
      </div>
    </>
  );
};
