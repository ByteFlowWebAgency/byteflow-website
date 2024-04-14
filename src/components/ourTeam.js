import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import "../styles/ourTeam.css";

const ourTeam = () => {
  return (
    <div>
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
        <h3 className="text2">
          We are not just a team; we're a force of digital innovation. With tech
          visionaries, data wizards, and design maestros, we sculpt seamless
          user experiences and redefine what's possible. Beyond work, we're
          adventurers and artists, fueling our passions as fiercely as our
          projects.
        </h3>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-column">
              <img src={BYTEFLOW_LOGO} />
              <h2>byteflowservices@gmail.com</h2>
            </div>
            <div className="footer-column">
              <h2>Services</h2>
              <div id="horizontal-line"></div>
              <p>Website Maintenance</p>
              <p>Custom Web Development</p>
              <p>Mobile App Development</p>
            </div>
            <div className="footer-column">
              <h2>About Us</h2>
              <div id="horizontal-line"></div>
              <p>Portfolio</p>
              <p>Packages</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ourTeam;
