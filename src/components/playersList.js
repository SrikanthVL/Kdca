import React, { useState } from "react";
import { Input, Space, Table, Tag, Modal } from "antd";
import "../assets/styles/playerList/playersList.scss";
import userImg from "../assets/Images/gukesh.jpg";

function PlayersList() {
  const [openResponsive, setOpenResponsive] = useState(false);
  const columns = [
    {
      title: "TNSCA ID",
      dataIndex: "tnscaId",
      key: "tnscaId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Taluk",
      dataIndex: "taluk",
      key: "taluk",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      key: "cStatus",
      dataIndex: "cStatus",
      render: (cStatus) => (
        <a
          className=""
          style={{ color: cStatus === "Inactive" ? "red" : "green" }}
        >
          {cStatus}
        </a>
      ),
    },

    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <a onClick={showModal} className="">
          View
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      tnscaId: "47790DGL2025",
      type: "Player",
      firstName: "Gukesh",
      lastName: "Dommaraju",
      taluk: "Karur",
      gender: "Male",
      cStatus: "Active",
      tags: ["nice", "Beginner"],
    },
    {
      key: "2",
      tnscaId: "47789DGL2025",
      type: "Player",
      firstName: "SRI RITHAN	",
      lastName: "SATHISHKUMAR",
      taluk: "Karur",
      gender: "Male",
      cStatus: "Active",
      tags: ["loser", "Beginner"],
    },
    {
      key: "3",
      tnscaId: "47788DGL2025",
      type: "Player",
      firstName: "SRINIVESH",
      lastName: "LOGANATHAN",
      taluk: "Salem",
      gender: "Male",
      cStatus: "Active",

      tags: ["cool", "Intermediate"],
    },
    {
      key: "4",
      tnscaId: "47787DGL2025",
      type: "Player",
      firstName: "Ramnath",
      lastName: "Govindhan",
      taluk: "Salem",
      gender: "Male",
      cStatus: "Active",
      tags: ["cool", "Intermediate"],
    },
    {
      key: "5",
      tnscaId: "47786DGL2025",
      type: "Player",
      firstName: "Sreleela",
      lastName: "Saravanan",
      taluk: "Cuddalore",
      gender: "Female",
      cStatus: "Active",
      tags: ["cool", "Intermediate"],
    },
    {
      key: "6",
      tnscaId: "47785DGL2025",
      type: "Player",
      firstName: "Revathi",
      lastName: "Saravanan",
      taluk: "Cuddalore",
      gender: "Female",
      cStatus: "Active",
      tags: ["cool", "Intermediate"],
    },
    {
      key: "7",
      tnscaId: "47784DGL2025",
      type: "Player",
      firstName: "Priyanka",
      lastName: "Mohan",
      taluk: "Kallakurichi",
      gender: "Female",
      cStatus: "Active",
      tags: ["cool", "teacher"],
    },
    {
      key: "8",
      tnscaId: "47783DGL2025",
      type: "Arbiter",
      firstName: "Vasanth",
      lastName: "Ayyadhurai",
      taluk: "Kallakurichi",
      gender: "Male",
      cStatus: "Active",
      tags: ["cool", "Advanced"],
    },
    {
      key: "9",
      tnscaId: "47782DGL2025",
      type: "Player",
      firstName: "Mubarak",
      lastName: "Usen Ali",
      taluk: "Kallakurichi",
      gender: "Male",
      cStatus: "Inactive",
      tags: ["cool", "Advanced"],
    },
    {
      key: "10",
      tnscaId: "47783DGL2025",
      type: "Arbiter",
      firstName: "Shivani",
      lastName: "Ayyadhurai",
      taluk: "Kallakurichi",
      gender: "Female",
      cStatus: "Inactive",
      tags: ["cool", "Advanced"],
    },
  ];

  const showModal = () => {
    setOpenResponsive(true);
  };
  const handleOk = () => {
    setOpenResponsive(false);
  };
  const handleCancel = () => {
    setOpenResponsive(false);
  };

  return (
    <div className="col-md-12 playersList">
      <Table className="col-md-12" columns={columns} dataSource={data} />
      <Modal
        className="col-md-12"
        title=""
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        okText="Show Id"
        cancelText="Back"
        width={{
          xs: "100%",
          sm: "60%",
          md: "80%",
          lg: "70%",
          xl: "60%",
          xxl: "50%",
        }}
      >
        <div>
          <div className="userHeader">
            <div className="row d-flex">
              <div
                className="col-md-3"
                style={{ alignItems: "center", textAlign: "center" }}
              >
                <img className="avatar" src={userImg}></img>
                <h6 className="userName">Gukesh Dommaraju</h6>
              </div>
              <div className="col-md-4 headerRow mr">
                <div className="row d-flex">
                  <p className="userData col-md-6">TNSCA ID </p>
                  <p className="userData col-md-6">48318SIV2025</p>
                </div>
                <div className="row d-flex">
                  <p className="userData col-md-6">Gender</p>
                  <p className="userData col-md-6">Male</p>
                </div>
                <div className="row d-flex">
                  <p className="userData col-md-6">Age</p>
                  <p className="userData col-md-6">19 years</p>
                </div>
              </div>
              <div className="col-md-4 headerRow">
                <div className="row d-flex">
                  <p className="userData col-md-6">Registration Type</p>
                  <p className="userData col-md-6">Player</p>
                </div>
                <div className="row d-flex">
                  <p className="userData col-md-6">FIDE ID</p>
                  <p className="userData col-md-6">Null</p>
                </div>
                <div className="row d-flex">
                  <p className="userData col-md-6">AICF ID</p>
                  <p className="userData col-md-6">Null</p>
                </div>
              </div>
            </div>
          </div>
          <div className="userDetails row col-md-12 d-flex">
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Name</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Gukesh"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Email</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"gukeshgm@2024.com"}
              />
            </div>

            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Mobile No</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"gukeshgm@2024.com"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Mother Tongue</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Tamil"}
              />
            </div>

            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Son/Daughter of</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Dommaraju"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Relationship</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Father"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Date of Birth</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"15 July 2005"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Gender</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Male"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Address</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"***********"}
              />
            </div>
            <div className="col-md-6 row d-flex">
              <p className="col-md-6 userData">Location</p>
              <Input
                disabled="true"
                className="col-md-6 userData"
                value={"Sivaganagai"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PlayersList;
