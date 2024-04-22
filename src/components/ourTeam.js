import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import CEO from "../images/CEO.jpeg";
import PRESIDENT from "../images/President.png";
import CFO from "../images/CFO.png";
import CSO from "../images/CSO.png";
import LSWE from "../images/LSWE.png";
import COO from "../images/COO.png";

/* Import Styles */
import "../styles/ourTeam.css";
import "../styles/footerStyles.css";
import "../styles/headerStyles.css";

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

      <div className="team-container">
        <div className="team-member">
          <img src={CEO} />
          <h3>Tyrone Johnson</h3>
          <h3>Founder & CEO</h3>
        </div>
        <div className="team-member">
          <img src={PRESIDENT} />
          <h3>Adam Mitchell-Lewis</h3>
          <h3>President</h3>
        </div>
        <div className="team-member">
          <img src={COO} />
          <h3>Samuel Ndubuisi</h3>
          <h3>Cheif Operations Officer</h3>
        </div>
        <div className="team-member">
          <img src={CSO} />
          <h3>Bryan Bernard</h3>
          <h3>Cyber Security Officer</h3>
        </div>
        <div className="team-member">
          <img src={LSWE} />
          <h3>Michael Ameteku</h3>
          <h3>Lead Software Developer</h3>
        </div>
        <div className="team-member">
          <img src={CFO} />
          <h3>Kevin Asamoah</h3>
          <h3>CFO</h3>
        </div>
      </div>

      <div class="join-team-container">
        <h1>Looking To Join Our Team?</h1>
        <form class="join-form">
          <div class="form-group">
            <div class="name-group">
              <label for="first-name">First Name:</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="name-group">
              <label for="last-name">Last Name:</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="contact-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="contact-group">
              <label for="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <button type="submit">Connect</button>
        </form>
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
    </body>
  );
};

export default ourTeam;
