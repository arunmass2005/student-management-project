import React, { useEffect, useState } from "react";
import { defaultimg } from "./scripts";

function Topbar({ stData }) {
  const st_img = `http://localhost:8000/students${stData.profile}`;
  return (
    <>
      <div className="topbar-container" id="topbar-container">
        <span className="student-profile-txt">STUDENT PROFILE</span>
        <div className="profile-name-container">
          <span className="st-name">{stData.name.toUpperCase()}</span>
          <span className="st-profile">
            {" "}
            <img src={stData.profile != null ? st_img : defaultimg} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Topbar;
