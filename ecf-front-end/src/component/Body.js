import React from "react";
import Activities from "./Activities";
import ServiceSection from "./ServiceSection";
import "./Body.css";
import ecfstudent from "../component/Image/ecfstudent.png";
import PastorSection from "./PastorSection";

function Body() {
  return (
    <div className="body">
      <div className="hero-section">
        <div className="hero-content">
          <div className="text-side">
            <h3 className="hero-question">Do you need to find a spiritual home?</h3>
            <p className="hero-description">
              Eternity Christian Fellowship is an Internet church, prayer group,
              radio ministry, and home fellowship.
            </p>
            <p className="hero-description">
              We are a Bible-based evangelical/charismatic church. 
              <br /> (See our statement of faith at left).
            </p>
          </div>
          <div className="image-side">
            <img src={ecfstudent} alt="Student Worship" className="hero-image" />
          </div>
        </div>
      </div>
      <PastorSection />
      <Activities />
      <ServiceSection />
    </div>
  );
}

export default Body;