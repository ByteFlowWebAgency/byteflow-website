import React from "react";
import BYTEFLOW_LOGO from "../logos/BYTEFLOW_LOGO.png";
import "./landingPage.css";

const landingpage = () => {
  return (
    <body>
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

      <div className="box">
        <h1 className="text1">Building Byte by Byte</h1>
        <h3 className="text2">
          <a href="/">Setup A Consultation</a>
        </h3>
      </div>
    </body>
  );
};

export default landingpage;
