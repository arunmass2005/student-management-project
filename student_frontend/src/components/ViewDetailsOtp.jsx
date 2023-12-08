import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewDetailsOtp = ({ which, value }) => {
  const [userid, setUserid] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const api = await fetch(
        `http://localhost:8000/otp/get/${which}/${value}`
      );
      const resp = await api.json();
      setUserid(resp.userid ? resp.userid : resp.password);
    })();
  }, []);

  return (
    <div className="view-popup-ctn">
      <div className="view-userid-ctn">
        <span className="view-key">your {which} : </span>
        <span className="view-value">{userid}</span>
      </div>
      <button
        className="btn"
        onClick={() => {
          navigate("/login", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default ViewDetailsOtp;
