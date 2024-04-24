import React from "react";
import "../styles/ourSolutions.css";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import BLKWOMANCODING from "../images/121721_BlackMetaverse_01.jpg";
import BLKMANMONITOR from "../images/download.jpg";

const ourSolutions = () => {
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

      <div className="enticing-header">
        <div className="row">
          <div className="column1">
            <h1>BYTEFLOW Solutions</h1>
            <h3>Tailored Byte By Byte.</h3>
          </div>
          <div className="column2">
            <div id="parent">
              <img src={BLKMANMONITOR} className="image1" />
              <img src={BLKWOMANCODING} className="image2" />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ourSolutions;
