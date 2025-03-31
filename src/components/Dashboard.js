import React from "react";
import "../assets/styles/dashboard/dashboard.scss";
import KDCAImage from "../assets/Images/3move.jpg";

import SideNav from "./side-nav/side-nav";
// import NewRegister from "./newRegister";
function DashBoard() {
  return (
    <div className="dashboard-container">
        <div className="container1 d-flex">
          <div className="flex1"> 
            <div className="flexHeading">Announcements</div>
            <div className="announcements">
              <ul>
                <a href="">
                  <li> Nakshatra's 3rd  Tamil Nadu State Level Children (Gold Coin+Cycle Chess Tournament 2025* 𝐃𝐚𝐭𝐞 : 30th March 𝟐025  (Sunday)                   </li>
                </a>
                <a href="">
                  <li> Sri Sakthi Amma’s 41st Jayanthi Celebraion State Level Children’s & Open Chess Tournament  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a>
                <a href="">
                  <li>37th National Team & 15 National Team women Chess Championship  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a><a href="">
                  <li> Sri Sakthi Amma’s 41st Jayanthi Celebraion State Level Children’s & Open Chess Tournament  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a><a href="">
                  <li> 1st Sree Sankara Balavidyalaya TN State Level Open & Children Chess Tournament  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a><a href="">
                  <li> Sri Sakthi Amma’s 41st Jayanthi Celebraion State Level Children’s & Open Chess Tournament  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a>
                <a href="">
                  <li> A.Veerappan Chettiar State Level Open & Children Chess Tournament 𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a>
                <a href="">
                  <li> Sri Sakthi Amma’s 41st Jayanthi Celebraion State Level Children’s & Open Chess Tournament  𝐃𝐚𝐭𝐞 : 06th April 𝟐025  (Sunday)                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="flex2">
            <div className="flexHeading">Daily News</div>
            <div>
              <ul>
                <li>Play with a Purpose: Always have a clear goal in mind when making a move, whether it's developing pieces, controlling the center, or initiating an attack. </li>
                <li>Keep Your Opponent Guessing: Don't make your plans too obvious; keep your opponent uncertain about your intentions.</li>
                <li>Learn from Your Mistakes: Analyze your games, especially losses, to identify weaknesses and areas for improvement.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container2 d-flex">
          <div className="flex3">
            <div className="flexHeading">Daily Puzzle</div>
            <div className="col-md-12 puzzleContainer row d-flex">
              <img className="dailyPuzzle col-md-6" src={KDCAImage}></img>
              <h6 className="puzzleType">White To Play 3 To win</h6>
            </div>
            <div className="col-md-12 puzzleContainer row d-flex">
              <img className="dailyPuzzle col-md-6" src={KDCAImage}></img>
              <h6 className="puzzleType">White To Play 3 To win</h6>
            </div>
          </div>
          <div className="flex3">
            <div className="flexHeading">Classes</div>
            <div>
              <h6>Morning</h6>
              <ul>
                <li>Batch1: Beginner, Time: 06:00 AM To 07:00 AM </li>
                <li>Batch2: Intermediate, Time: 07:00 AM To 08:00 AM </li>
                <li>Batch3: Advanced, Time: 07:00 AM To 08:00 AM </li>
              </ul>
              <h6>Evening</h6>
              <ul>
                <li>Batch1: Beginner, Time: 06:00 PM To 07:00 PM </li>
                <li>Batch2: Intermediate, Time: 07:00 PM To 08:00 PM </li>
                <li>Batch3: Advanced, Time: 07:00 PM To 08:00 PM </li>
              </ul>
            </div>
          </div>
          <div className="flex3">
            <div className="flexHeading">Forum</div>
          </div>
        </div>
    </div>
  );
}

export default DashBoard;
