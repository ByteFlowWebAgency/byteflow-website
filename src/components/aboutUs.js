import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
<<<<<<< HEAD
import Instagram from '../images/Instagram_icon.png.webp';
import LinkedIn from '../images/linkedin.png';
import Discord from '../images/discord.png';
import CEO from '../images/CEO.jpeg';
=======
import Instagram from "../images/Instagram_icon.png.webp";
import LinkedIn from "../images/linkedin.png";
import Discord from "../images/discord.png";
>>>>>>> b9df30160b6ead0c2d9dac9096802090fb0b523c

import "../styles/aboutUs.css";

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
<<<<<<< HEAD
      <div className="header-image">
        {/* Background image at the top */}
      </div>
      <div className="ceo-message">
        <img src={CEO} alt="CEO" />
        <blockquote>
          "He who holds the clarity holds the plan."
        </blockquote>
        <p>I wanted to create something that combines my 
          passions to serve communities and software engineering! 
          That’s when I thought of starting BYTEFLOW!</p>

          <h4>Tyrone Johnson</h4>
          <span>Founder & CEO, BYTEFLOW</span>
      </div>

      <div className="about-headers">
        <h2>Our Values</h2>

        </div>
      <div className="values">
        
        {/* Four value propositions with text */}
        <div className="value">
          <h3>Creativity & Innovation</h3>
          <p>We push boundaries and think outside 
            the box to deliver unique and effective web solutions.</p>
        </div>
        <div className="value">
          <h3>Integrity & Transparency</h3>
          <p>We are honest and upfront in all our communications, 
            building trust with clients.</p>
        </div>
        <div className="value">
          <h3>Results-Oriented</h3>
          <p>We are data-driven and focused on measurable results 
            that benefit our clients' businesses.</p>
        </div>
        <div className="value">
          <h3>Teamwork & Collaboration</h3>
          <p>We foster a collaborative environment where open communication 
            and teamwork lead to better solutions.</p>
        </div>
      </div>
=======
        <div className="header-image">{/* Background image at the top */}</div>
        <div className="ceo-message">
          <img src="path-to-ceo-image.jpg" alt="CEO" />
          <blockquote>"Your inspiring quote here."</blockquote>
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
>>>>>>> b9df30160b6ead0c2d9dac9096802090fb0b523c

        <div className="about-headers">
          <h2>Get to Know Us!</h2>
        </div>

        <div className="social-media">
          <img
            src={Instagram}
            title="Instagram"
            alt="Instagram"
            className="social-media-icon"
          />
          <img
            src={LinkedIn}
            title="LinkedIn"
            alt="LinkedIn"
            className="social-media-icon"
          />
          <img
            src={Discord}
            title="Discord"
            alt="Discord"
            className="social-media-icon"
          />
        </div>
      </div>
    </body>
  );
};

export default AboutUs;
