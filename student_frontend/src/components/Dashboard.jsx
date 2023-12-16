import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { getFromLocal, setFromApi } from "./scripts";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const getFromApiV = [
  "graduation",
  "degree",
  "course",
  "gender",
  "bloodgroup",
  "religion",
  "community",
  "caste",
  "country",
  "state",
  "district",
  "taluk",
  "location_type"
];
function Dashboard() {
  const history = useLocation();
  const navigate = useNavigate()
  const [stData, setStData] = useState(history.state ? history.state : null);
  const local = getFromLocal();
  console.log("in dasboard");
  console.log(history.state)
  useEffect(() => {
    if(local){
      console.log(local.gender);
    /[A-Z]/.test(local.gender)?null:
    setFromApi(getFromApiV, history.state ? history.state : local, setStData);}
    else{
      console.log("not details")
      navigate("/login",{replace:true})
        }
  }, [history]);

  return (
    <>
      {local ? (
        stData ? (
          <div className="overall-container" id="overall-container">
            <Sidebar />
            <div className="content-top-container">
              <Topbar stData={history.state ? history.state : stData} />
              <main className="main-content">
                <Outlet context={[history.state ? history.state : stData]} />
              </main>
            </div>
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
}

export default Dashboard;
