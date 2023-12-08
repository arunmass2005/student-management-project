
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="dept-name-ctn">
        <span className="material-symbols-outlined dept-logo">laptop_mac</span>
        <span className="dept">CSE department</span>
      </div>
      <div className="profile-ctn">
        <span classname="stf-name" id="stf-name">Arun</span>
        <div className="stf-img">
            <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
        </div>
      </div>
    </div>
  );
}
