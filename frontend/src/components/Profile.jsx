import { useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Loading from "./Loading";
import { setFromApi, getFromApiV } from "./scripts";
import { useOutletContext } from "react-router-dom";
function Profile() {
  const outletData = useOutletContext()[0];
  const [stData, setstData] = useState();
  const [bankDetails, setBankDetails] = useState();
  useEffect(() => {
    setstData(outletData);
    handleBankDetails();
  }, []);

  async function handleBankDetails() {
    const ifscApi = await fetch(
      `https://ifsc.razorpay.com/${stData ? stData.ifsc : outletData.ifsc}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      }
    );
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
  function callBFunc() {
    handleBankDetails();
  }
  return (
    <>
      {stData ? (
        typeof stData.gender != "number" ? (
          <div className="profile-container" id="profile-container">
            {/* <div className="profile" id="profilediv">
          <span className="profile_outer">
            <img
              src={`http://192.168.216.65:8000/students${stData.profile}`}
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
            <section className="General-Info profile-sections">
              <span className="section-header s-h-dash">
                {" "}
                General Information
              </span>
              <div className="showdiv">
                <label htmlFor="name-show">Name</label>
                <input
                  type="text"
                  className="name-show show"
                  name="name"
                  readOnly
                  value={stData.name.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="user-show">UserId</label>
                <input
                  type="text"
                  className="userid-show show"
                  name="userid"
                  readOnly
                  value={stData.userid}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="dob-show">Date Of Birth</label>
                <input
                  type="text"
                  className="dob-show show"
                  name="dob"
                  readOnly
                  value={stData.dob}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="gender-show ">Gender</label>
                {/* {getFromApi('gender',stData.gender)} */}
                <input
                  type="text"
                  name="gender"
                  readOnly
                  // {...getFromApi('gender',stData.gender)}
                  value={stData.gender}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="blood-show">Blood Group</label>
                <input
                  type="text"
                  name="bloodgroup"
                  readOnly
                  value={stData.bloodgroup}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="nationality-show">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  readOnly
                  value={stData.nationality ? stData.nationality : "INDIAN"}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="religion-show">Religion</label>
                <input
                  type="text"
                  className="religion-show show"
                  name="religion"
                  readOnly
                  value={stData.religion}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="community-show">Community</label>
                <input
                  type="text"
                  className="community-show show"
                  name="community"
                  readOnly
                  value={stData.community}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="caste-show">Caste</label>
                <input
                  type="text"
                  className="caste-show show"
                  name="caste"
                  readOnly
                  value={stData.caste}
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
                  value={stData.aadhar}
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
                  <span> {stData.firstgraduate.toUpperCase()}</span>
                </div>
              </div>
            </section>
            <section className="Contact-Info profile-sections">
              <span className="section-header s-h-dash">
                Contact Information
              </span>

              <div className="showdiv">
                <label htmlFor="mobile-show">Mobile Number</label>
                <input
                  type="text"
                  className="mobile-show show"
                  name="mobile"
                  maxLength={10}
                  readOnly
                  value={stData.mobile}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="email-show">Email Id</label>
                <input
                  type="email"
                  className="email-show show"
                  name="emailid"
                  readOnly
                  value={stData.emailid}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="country-show">Country</label>
                <input
                  type="text"
                  className="country-show show"
                  name="country"
                  readOnly
                  value={stData.country}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="state-show">State</label>
                <input
                  type="text"
                  className="state-show show"
                  name="state"
                  readOnly
                  value={stData.state}
                />
              </div>

              <div className="showdiv">
                <label htmlFor="district-show">District</label>
                <input
                  type="text"
                  className="district-show show"
                  name="district"
                  readOnly
                  value={stData.district}
                />
              </div>

              <div className="showdiv">
                <label htmlFor="taluk-show">Taluk</label>
                <input
                  type="text"
                  className="taluk-show show"
                  name="taluk"
                  readOnly
                  value={stData.taluk}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="location-type-show">Location Type</label>
                <input
                  type="text"
                  className="location-type-show show"
                  name="location_type"
                  readOnly
                  value={stData.location_type.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="vilage-show">Vilage/Town</label>
                <input
                  type="text"
                  className="vilage-show show"
                  name="place"
                  readOnly
                  value={stData.place.toUpperCase()}
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
                  value={stData.address.toUpperCase()}
                  style={{ fontFamily: "Popins,sans-serif" }}
                ></textarea>
              </div>
              <div className="showdiv">
                <label htmlFor="pincode-show">Pincode</label>
                <input
                  type="text"
                  className="pincode-show show"
                  name="pincode"
                  readOnly
                  value={stData.pincode}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="father-name-show">Father Name</label>
                <input
                  type="text"
                  className="father-name-show show"
                  name="fathersname"
                  readOnly
                  value={stData.fathersname.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="f-occupation-show">Father Occupation</label>
                <input
                  type="text"
                  className="f-occupation-show show"
                  name="fathersoccupation"
                  readOnly
                  value={stData.fathersoccupation.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="mother-name-show">Mother Name</label>
                <input
                  type="text"
                  className="mother-name-show show"
                  name="mothersname"
                  readOnly
                  value={stData.mothersname.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="m-occupation-show">Mothers Occupation</label>
                <input
                  type="text"
                  className="m-occupation-show show"
                  name="mothersoccupation"
                  readOnly
                  value={stData.mothersoccupation.toUpperCase()}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="a-income-show">Annual Income</label>
                <input
                  type="text"
                  className="a-income-show show"
                  name="annual_income"
                  readOnly
                  value={stData.annual_income}
                />
              </div>
              <div className="showdiv">
                <label htmlFor="parents-mobile-show">
                  Parent Mobile Number
                </label>
                <input
                  type="text"
                  className="parents-mobile-show show"
                  name="parents_mobile_number"
                  readOnly
                  value={stData.parents_mobile_number}
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
                  type="text"
                  className="account-n-show show"
                  name="account_number"
                  value={stData.account_number}
                />
              </div>

              <div className="showdiv">
                <label htmlFor="ifsc-input">IFSC code</label>
                <input
                  autoComplete="off"
                  type="text"
                  className="ifsc-input input"
                  name="ifsc"
                  readOnly
                  Value={stData.ifsc}
                  placeholder="ifsc code"
                />
              </div>

              <div className="showdiv">
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
              <div className="showdiv">
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
              <div className="showdiv">
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
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Profile;
