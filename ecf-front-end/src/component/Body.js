import React from "react";
import Activities from "./Activities";
import ServiceSection from "./ServiceSection";
import "./Body.css";
import ecfstudent from "../component/Image/ecfstudent.png";

function Body() {
  return (
    <div className="body">

      <div className="columnsContainer">
        <div className="leftSide">
          <div className="studentImageDiv">
            <img src={ecfstudent} />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <div className="questionDiv">
              <h3>Do you need to find a spiritual home?</h3>
            </div>
            <div className="textDiv">
              <p>
                Eternity Christian Fellowship is an Internet church, <br />{" "}
                prayer group, radio ministry and home fellowship.
              </p>
              <p>
                We are a bible-based evangelical/charismatic church. (See our
                statement of faith at left).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Activities />
      <ServiceSection />
    </div>
  );
}

export default Body;
