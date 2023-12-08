import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar-ctn">
      <div className="sd-header-ctn">
      <span className="material-symbols-outlined">info</span>
        <span className="sd-text">TECIS</span>
      </div>
      <div className="sd-routes-ctn">
        <div className="sd-routes">
        <span className="material-symbols-outlined">grid_view</span>
          <span className="sd-text">Dashboard</span>
        </div>
        <div className="sd-routes">
        <span className="material-symbols-outlined">content_paste</span>
          <span className="sd-text">Attendance</span>
        </div>
        <div className="sd-routes">
        <span className="material-symbols-outlined">contract_edit</span>
          <span className="sd-text">Exams</span>
        </div>
        <div className="sd-routes">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="sd-text">Profile</span>
        </div>
      </div>
      <div className="logout-ctn">
      <span className="material-symbols-outlined">logout</span>
        <span className="sd-text">Logout</span>
      </div>
    </div>
  );
}
