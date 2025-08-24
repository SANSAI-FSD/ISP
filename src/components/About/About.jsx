import React from "react";
import CountUp from "react-countup";
import "./About.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      {/* Badge */}
      <div className="about-badge">
        <span className="star" aria-hidden="true">✦</span>
        About
      </div>

      {/* Heading */}
      <h1 className="about-heading">
        We’re the Editing Partners Behind <br />the 
        Creators Who Actually<br /> Grow with Results. <br />
        <span className="highlight">Fast, Reliable</span> and{" "}
        <span className="highlight">Obsessed.</span>
      </h1>

     

      <div className="about-stats-pill">
      <div className="about-stats">
        <div className="stat" style={{ animationDelay: "0.05s" }}>
          <div className="value">
            <CountUp end={1200} duration={2} separator="," />+
          </div>
          <div className="label">Videos Delivered</div>
        </div>

        <div className="stat" style={{ animationDelay: "0.15s" }}>
          <div className="value">
            <CountUp end={300} duration={2} separator="," />+
          </div>
          <div className="label">Creators Served</div>
        </div>

        <div className="stat" style={{ animationDelay: "0.25s" }}>
          <div className="value">
            <CountUp end={45000} duration={3} separator="," />+
          </div>
          <div className="label">Total Views</div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutSection;
