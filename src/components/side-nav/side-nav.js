import React from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/side-nav/side-nav.scss';
import {
    HomeOutlined,SearchOutlined,EditOutlined,
    FormOutlined,MoneyCollectOutlined,
    
  } from '@ant-design/icons';
function SideNav() {

      const navigate = useNavigate();
      function onSubmit() {
        navigate("/newRegister");
      }
    

    return (
        <div className="nav-items">
            <div className="nav-item d-flex">
                 <HomeOutlined className="icon" />
               <span>KDCA Home</span>
            </div>
            <div className="nav-item d-flex">
                 <SearchOutlined className="icon" />
               <span>Search Player</span>
            </div>
            <div onClick={onSubmit} className="nav-item d-flex">
                 <EditOutlined className="icon" />
               <span>Register New</span>
            </div>
            <div className="nav-item d-flex">
                 <MoneyCollectOutlined className="icon" />
               <span>Other Payments</span>
            </div>
            <div className="nav-item d-flex">
                 <FormOutlined className="icon" />
               <span>Online Entry</span>
            </div>
            
        </div>
    )
}

export default SideNav;