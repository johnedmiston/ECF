import React, { useState } from "react"; //usestate  is a react hook tath allos functional components to manage state.
import Logo from "../component/Image/ECFlogo.png";
import { Link } from "react-router-dom";
import "../component/Header.css";

function Header() {
  //rerender const usestate, setOpenLinks function changes the state
  //cosnt [state, setState] =useState(initialState)
  const [openLinks, setOpenLinks] = useState(false); //use to show menu and disappear logo. We named it openlinks

  //toggleNavbar function. Created for mobile button
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="header">
      <div className="leftHeader" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Events</Link>
          <Link to="/menu">News</Link>
          <Link to="/menu">Sermons</Link>
          <Link to="/menu">Ministries</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="middleHeader">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Events</Link>
        <Link to="/menu">News</Link>
        <Link to="/menu">Sermons</Link>
        <Link to="/menu">Ministries</Link>
        <Link to="/contact">Contact</Link>
        {/*ReorderIcon will determine when to hide icons*/}
      </div>

      <div className="rightHeader">
        {/*create join us button*/}
        <button type="button">Join Us</button>
      </div>
    </div>
  );
}

export default Header;
