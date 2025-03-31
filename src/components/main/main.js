import React from "react";
import SideNav from "../side-nav/side-nav";
import DashBoard from "../Dashboard";
import '../../assets/styles/mains/main.scss';

function Main() {
    return (
        <div className="mainScreen d-flex">
            <SideNav className="main-sideNav"></SideNav>
            <DashBoard className="main-dashBoard"></DashBoard>
        </div>
    )
}

export default Main;