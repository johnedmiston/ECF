import React from "react";
import { services } from "./services";
import "./services.css";

const Servicesection = () => {
  return (
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
  );
};
export default Servicesection;
