import React, { useState } from "react";
import "../assets/styles/header/header.scss";
import { Input, Space } from "antd";
import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/kdca_logo.png";

const { Search } = Input;

function Header() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [buttonText, setButtonText] = useState(false);
  const [searchbtn, setSearchbtn] = useState(true);
  const navigate = useNavigate();
  const searchTitle = "Search Player";

  function searchPlayer() {
    navigate("/playersList");
    setButtonText(true);
    setSearchbtn(false)
  }

  function backTologin() {
    navigate("/");
    setButtonText(false);
    setSearchbtn(true)

  }

  return (
    <div className="header col-md-12">
      <div className=" header1">
        <img className=" logo" src={logo}></img>
      </div>
      <div className=" header2">
        <h5 className="orgname">KALLAKURICHI DISTRICT CHESS ASSOICIATIONS</h5>
      </div>
      <div className="header3">
        {searchbtn && (<button onClick={searchPlayer} type="button" className="searchUserBtn">
          <SearchOutlined /> {searchTitle}
        </button>)}

        {buttonText && (<Input placeholder="Search KKDCA Id" className="searchUsrBtn">
        </Input>)}

        {buttonText && (
          <button onClick={backTologin} className="backBtn">
            <ArrowLeftOutlined className="searchUserIcon" /> Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
