import React from "react";
import "./PastorSection.css";
import pastorImage from "../component/Image/pastor-image.png";

function PastorSection() {
  return (
    <section className="pastor-section">
      <div className="pastor-container">
        {/* Left side: Pastor bio */}
        <div className="pastor-bio">
          <h2>Meet Our Pastor</h2>
          <h3>Rev. John Edmiston B.Sc. B.D.</h3>
           <div className="pastor-image-div">
                      <img src ={pastorImage} alt="pastor-image" className="pastor-image" />
                    </div>
          <p>
            John Edmiston is available for preaching, teaching, and taking seminars.
          </p>
        </div>

        {/* Right side: Brochure notice 
        <div className="brochure-box">
          <p>
            We have produced a free brochure called <strong>How To Pray During This Time of COVID-19</strong>.
            <br /><br />
            This brochure is under Creative Commons and you may print it out and distribute it freely.
          </p>
          <a
            href="https://www.globalchristians.org/howtopraycovid19.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brochure-link"
          >
             Download Brochure (PDF)
          </a>
        </div>
        */}
      </div>
    </section>
  );
}

export default PastorSection;
