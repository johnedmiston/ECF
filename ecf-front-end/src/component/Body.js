import React from "react";
import "./Body.css";
import ecfstudent from "../component/Image/ecfstudent.png";
import { services } from "./services";
function Body() {
  return (
    <div className="body">
      <div className="websiteTitle">
        <h1>Eternity Christian Fellowship</h1>
      </div>
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
            <div className="testDiv">
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
      <div className="activitiesContainer">
        <div className="activitiesSentence">
          <h2>Our main activities are:</h2>
        </div>
        <div className="activities">
          <ul>
            <li>End Times Prayer Meeting (2nd Friday of each month)</li>
            <li>Uplifting Moments radio program</li>
            <li>Friday night in-depth bible studies</li>
            <li>Pastoral counseling</li>
            <li>Healing prayer</li>
            <li>Deliverance / Breaking curses</li>
            <li>Internet ministry</li>
          </ul>
        </div>
        <div className="services">
          {services.map((item, index) => {
            return (
              <div className="serviceItem">
                <a href={item.link} alt={item.name}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
