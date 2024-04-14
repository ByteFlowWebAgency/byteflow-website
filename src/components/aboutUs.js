import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import Instagram from '../images/Instagram_icon.png.webp';
import LinkedIn from '../images/linkedin.png';
import Discord from '../images/discord.png';

import "./aboutUs.css";

const AboutUs = () => {
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

      <div className="about-us">
      <div className="header-image">
        {/* Background image at the top */}
      </div>
      <div className="ceo-message">
        <img src="path-to-ceo-image.jpg" alt="CEO" />
        <blockquote>
          "Your inspiring quote here."
        </blockquote>
      </div>
      <div className="values">
        {/* Four value propositions with text */}
        <div className="value">
          <h3>Value 1</h3>
          <p>Description for value 1</p>
        </div>
        <div className="value">
          <h3>Value 2</h3>
          <p>Description for value 2</p>
        </div>
        <div className="value">
          <h3>Value 3</h3>
          <p>Description for value 3</p>
        </div>
        <div className="value">
          <h3>Value 4</h3>
          <p>Description for value 4</p>
        </div>
      </div>

      <div className="about-headers"><h2>Get to Know Us!</h2>
      </div>

      <div className="social-media">
        
      <img src={Instagram} title="Instagram" alt="Instagram" className="social-media-icon" />
      <img src={LinkedIn} title="LinkedIn" alt="LinkedIn" className="social-media-icon" />
      <img src={Discord} title="Discord" alt="Discord" className="social-media-icon" />
    </div>
    </div>

   </body>
  );
};

export default AboutUs;
