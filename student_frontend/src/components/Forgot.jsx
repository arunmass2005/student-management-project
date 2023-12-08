import { useParams } from "react-router-dom";
import ForgotPopup from "./ForgotPopup";
import { useState } from "react";
const Forgot = () => {
  const { forgotted } = useParams();
  const [viewPopup, setViewPopup] = useState(false);
  const [resetPopup, setResetPopup] = useState(false);
  function getOtp() {}
  // function handleOnclick(){
  //     return <ForgotPopUp />
  // }
  return (
    <>
      {(viewPopup || resetPopup) && (
        <ForgotPopup
          forgotted={forgotted}
          setViewPopup={viewPopup ? setViewPopup : setResetPopup}
          mode={viewPopup ? "view" : "reset"}
        />
      )}
      <div className="forgot-ctn">
        <span className="fgt-header"> Forgot your {forgotted} ?</span>
        <br />
        <span className="fgt-msg">
          {" "}
          No worries ! Click the "view {forgotted} " or "reset {forgotted}"
          button and follow the instructions to solve it !!!
        </span>

        {/* <form className="fgt-form">
        <div className="inputdiv required required">
          <label htmlFor="emailid-input">Email address</label>
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
      </form> */}
        <div className="fgt-btns flex-center-col">
          <button
            className="btn edit"
            onClick={() => {
              setViewPopup(true);
            }}
          >
            view {forgotted}
          </button>
          <button
            className="btn cancel"
            onClick={() => {
              setResetPopup(true);
            }}
          >
            reset {forgotted}
          </button>
        </div>
      </div>
    </>
  );
};

export default Forgot;
