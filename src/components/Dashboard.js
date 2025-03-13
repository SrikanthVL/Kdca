import React from "react";
import "../assets/styles/dashboard/dashboard.scss";
import SideNav from "./side-nav/side-nav";
// import NewRegister from "./newRegister";
function DashBoard() {
  return (
    <div className="main-container">
      <div className="side-nav">
        <SideNav></SideNav>
      </div>
      <div className="main">
        {/* <NewRegister></NewRegister> */}
      </div>
    </div>
  );
}

export default DashBoard;
