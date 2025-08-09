import React from "react";
import { services } from "./services";
import "./services.css";

const Servicesection = ()=>{
    return (
      <>
      <h2 className="activities-title">Our Main Services</h2>
        <div className="services">
         
          {services.map((item, index) => {
            return (
              <div className="serviceItem">
                <a href={item.link} alt={item.name}>
                  {item.name}
                </a>
                <div className="image-service">
                            <img src={item.image} alt={item.name} className="service-image" />
                          </div>
              </div>
            );
          })}
        </div>
        </>
    )
}
export default Servicesection;