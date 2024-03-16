import React from "react";
import BYTEFLOW_LOGO from "../logos/BYTEFLOW_LOGO.png";

const landingpage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <img
          src={BYTEFLOW_LOGO}
          alt="BYTEFLOW LOGO"
          style={{ width: "300px", height: "auto" }}
          className="byteflow-logo"
        />
        <nav>
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
          <button>CONNECT</button>
        </a>
      </div>
    </div>
  );
};

export default landingpage;
