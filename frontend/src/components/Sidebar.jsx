import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { closeSidebar, getFromLocal } from "./scripts";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const paths = currentLocation.pathname.split("/");
  const element = paths[paths.length - 1];
  const [aElement, set_aElement] = useState(element);
  useEffect(() => {
    set_aElement(element);
  }, [element]);
  function sidebarClick(e) {
    const sideBarElements = document.querySelectorAll(".link-container");
    sideBarElements.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  function Logout() {
    const choice = confirm("Confirm to logout ? ");
    if (choice) {
      localStorage.removeItem("stdata");
      navigate("/login", { replace: true });
    } else return null;
  }
  async function _delete(mobile) {
    const api = await fetch(`http://localhost:8000/students/delete/${mobile}`, {
      method: "delete",
    });
    const resp = await api.json();

    if (resp.suc) {
      alert(resp.suc.msg);
      localStorage.clear();
      navigate("/login", { replace: true });
    } else if (resp.not_exist) {
      alert(resp.not_exist);
      localStorage.clear();
      navigate("/login", { replace: true });
    } else {
      alert("something went wrong!!");
    }
  }
  function deleteSt() {
    const local = getFromLocal();
    confirm(
      "Do you want to delete your's data\n in future it cannot be recovered ?"
    )
      ? _delete(local.mobile)
      : null;
  }

  return (
    <>
      <div className="sidebar-container close" id="sidebar">
        <span className="link-container header" onClick={closeSidebar}>
          <span class="material-symbols-outlined icon">info</span>
          <span className="link-text">TECIS</span>
        </span>
        <Link
          className={`link-container ${
            element === "dashboard" ? "active" : ""
          }`}
          to={""}
          onClick={sidebarClick}
          id="dashboard"
        >
          <span class="material-symbols-outlined icon">grid_view</span>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link
          className={`link-container ${element === "edit" ? "active" : ""}`}
          to={"edit"}
          onClick={sidebarClick}
          id="edit"
        >
          <span class="material-symbols-outlined icon">edit</span>
          <span className="link-text">Edit</span>
        </Link>
        <Link
          className={`link-container ${element === "export" ? "active" : ""}`}
          to={"export"}
          onClick={sidebarClick}
          id="export"
        >
          <span class="material-symbols-outlined icon">upgrade</span>
          <span className="link-text">Export</span>
        </Link>
        <Link className={`link-container `} onClick={Logout} id="logout">
          <span class="material-symbols-outlined icon">logout</span>
          <span className="link-text">Logout</span>
        </Link>
        <Link
          className={`link-container delete`}
          onClick={deleteSt}
          id="delete"
        >
          <span class="material-symbols-outlined icon">delete</span>
          <span className="link-text">Delete</span>
        </Link>
      </div>
      {/* </div> */}
    </>
  );
}
