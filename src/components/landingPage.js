import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import blackPeopleCoding from "../images/blackPeopleCoding.jpg";
import PYTHON from "../images/Python-Symbol.png";
import REACT from "../images/reactjs.png";
import JAVASCRIPT from "../images/javascript.png";
import NODEJS from "../images/nodejs.png";
import SQL from "../images/sql.png";
import PHP from "../images/php.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
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

      <div className="container-who-we-are">
        <div className="who-are-we-text">
          <h2>WHO WE ARE</h2>
          <p>
            Established in 2024 amidst the technological zenith and AI boom,
            BYTEFLOW Solutions emerged from the collective expertise of six
            visionary friends with diverse talents in the tech sector. We
            harness our combined knowledge to offer scalable business solutions.
          </p>
        </div>
        <div className="team-image">
          <img src={blackPeopleCoding} />
        </div>
      </div>

      <div className="our-services-container">
        <div className="our-services">
          <h3>Our Services</h3>
        </div>
      </div>

      <div className="our-technologies-container">
        <div className="our-technologies">
          <h3>Our Technologies</h3>
        </div>
        <div className="image-carousel">
          <div className="image-slide">
            <img src={PYTHON} />
            <img src={REACT} />
            <img src={NODEJS} />
            <img src={SQL} />
            <img src={PHP} />
            <img src={JAVASCRIPT} />
            <img src={HTML} />
            <img src={CSS} />
          </div>
          <div className="image-slide">
            <img src={PYTHON} />
            <img src={REACT} />
            <img src={NODEJS} />
            <img src={SQL} />
            <img src={PHP} />
            <img src={JAVASCRIPT} />
            <img src={HTML} />
            <img src={CSS} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default landingpage;
