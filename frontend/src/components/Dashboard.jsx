import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { getFromLocal } from "./scripts";
import { useEffect, useState } from "react";

function Dashboard() {
  const [stData, setStData] = useState(getFromLocal);
  const history = useLocation();
  useEffect(() => {
    setStData(getFromLocal);
  }, [history]);

  return (
    <>
      {stData ? (
        <div className="overall-container" id="overall-container">
          <Sidebar />
          <div className="content-top-container">
            <Topbar stData={history.state ? history.state : stData} />
            <Outlet context={[history.state ? history.state : stData]} />
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
}

export default Dashboard;
