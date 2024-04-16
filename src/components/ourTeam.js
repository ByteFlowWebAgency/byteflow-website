import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import "../styles/ourTeam.css";

const ourTeam = () => {
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
        <h1 className="text1">Meet The Team.</h1>
        <div className="text-box">
          <h3 className="text2">
            We are not just a team; we're a force of digital innovation. With
            tech visionaries, data wizards, and design maestros, we sculpt
            seamless user experiences and redefine what's possible. Beyond work,
            we're adventurers and artists, fueling our passions as fiercely as
            our projects."
          </h3>
        </div>
      </div>
    </body>
  );
};

export default ourTeam;
