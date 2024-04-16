import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import "../styles/ourTeam.css";

const ourTeam = () => {
  return (
    <div className="header">
      <img
        src={BYTEFLOW_LOGO}
        alt="BYTEFLOW LOGO"
        style={{ width: "300px", height: "90px" }}
        className="byteflow-logo"
      />
      <nav className="nav_links">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/ourTeam">Our Team</a>
          </li>
          <li>
            <a href="/ourSolutions">Solutions</a>
          </li>
        </ul>
      </nav>
      <a>
        <button className="connect-btn">CONNECT</button>
      </a>
    </div>
  );
};

export default ourTeam;
