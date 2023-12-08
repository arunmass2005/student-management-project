export default function Dashboard() {
  return (
    <div className="main-dashboard">
      <div className="info-ctn">
        <div className="total-n-st">
          
          <span className="ttl-v">48</span>
          <span className="ttl-h">TOTAL STUDENTS</span>
        </div>
      </div>

      <div className="list-ctn">
        <div className="search-ctn">
          <input type="text" placeholder="Search by Name or Mobile number" id="st-s-in"/>
          <span class="material-symbols-outlined search-logo">search</span>
        </div>
        <div className="st-list">

        </div>
      </div>
    </div>
  );
}
