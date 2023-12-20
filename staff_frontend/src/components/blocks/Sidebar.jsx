import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  const splittedArray = location.pathname.split("/");
  const subPath = splittedArray[splittedArray.length - 1];
  function bgChangeSdRoutes(e) {
    console.log(e);

    const sdRoutesCtn = document.querySelector(".sd-routes-ctn");
    const prev = sdRoutesCtn.querySelector(".selected");
    prev.classList.remove("selected");
    e.target.classList.add("selected");
  }
  return (
    <div className="sidebar-ctn">
      <div className="sd-header-ctn">
        <span className="material-symbols-outlined">info</span>
        <span className="sd-text">TECIS</span>
      </div>

      <div className="sd-routes-ctn">
        <Link
          className={`sd-routes ${subPath === "dashboard" ? "selected" : ""}`}
          id={"dashboard"}
          to={""}
          onClick={bgChangeSdRoutes}
          replace={true}
        >
          <span className="material-symbols-outlined icon">grid_view</span>
          <span className="sd-text">Dashboard</span>
        </Link>

        <Link
          className={`sd-routes ${subPath === "attendance" ? "selected" : ""}`}
          to={"attendance"}
          onClick={bgChangeSdRoutes}
          replace={true}
        >
          <span className="material-symbols-outlined icon">content_paste</span>
          <span className="sd-text">Attendance</span>
        </Link>
        <Link
          className={`sd-routes ${subPath === "exams" ? "selected" : ""}`}
          to={"exams"}
          onClick={bgChangeSdRoutes}
          replace={true}
        >
          <span className="material-symbols-outlined icon">contract_edit</span>
          <span className="sd-text">Exams</span>
        </Link>
        <Link
          className={`sd-routes ${subPath === "profile" ? "selected" : ""}`}
          to={"profile"}
          onClick={bgChangeSdRoutes}
          replace={true}
        >
          <span className="material-symbols-outlined icon">account_circle</span>
          <span className="sd-text">Profile</span>
        </Link>
      </div>
      <div className="logout-ctn">
        <span className="material-symbols-outlined">logout</span>
        <span className="sd-text">Logout</span>
      </div>
    </div>
  );
}
