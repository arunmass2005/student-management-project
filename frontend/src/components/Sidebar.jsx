import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {closeSidebar} from "./scripts";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const paths= currentLocation.pathname.split('/')
  const element=paths[paths.length-1]
  const [aElement,set_aElement]=useState(element);
  useEffect(()=>{
    set_aElement(element)
  },[element])
  function sidebarClick(e) {
    const sideBarElements = document.querySelectorAll(".link-container");
    sideBarElements.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add('active')
  }
  function Logout(){
    const choice = confirm('Confirm to logout ? ')
    if(choice){
      localStorage.removeItem('stdata')
      
    }
    else
      return null
  }
  return (
    <>
      <div className="sidebar-container" id="sidebar">
        <span className="link-container header" onClick={closeSidebar}>
          <span class="material-symbols-outlined icon">info</span>
          <span className="link-text">TECIS</span>
        </span>
        <Link
          className={`link-container ${element==='dashboard'?'active':''}`}
          to={""}
          onClick={sidebarClick}

          id="dashboard"
        >
          <span class="material-symbols-outlined icon">grid_view</span>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link className={`link-container ${element==='edit'?'active':''}`} to={"edit"} onClick={sidebarClick} id="edit">
          <span class="material-symbols-outlined icon">edit</span>
          <span className="link-text">Edit</span>
        </Link>
        <Link className={`link-container ${element==='export'?'active':''}`} to={"export"} onClick={sidebarClick} id="export">
          <span class="material-symbols-outlined icon">upgrade</span>
          <span className="link-text">Export</span>
        </Link>
        <Link className={`link-container `} onClick={()=>{
          confirm('confirm to Logout ? ')?localStorage.clear():null
        }} id="logout">
          <span class="material-symbols-outlined icon">logout</span>
          <span className="link-text">Logout</span>
        </Link>
      </div>
      {/* </div> */}
    </>
  );
}
