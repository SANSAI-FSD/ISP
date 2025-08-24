import React from "react";
import "./RecentWorks.css";
import BEAT from '../../assets/videos/BEAT.mp4';
import BROTO from '../../assets/videos/BROTOTYPE.mp4';
import V1 from '../../assets/videos/V1.mp4';
import threeD from '../../assets/gif/resolve-unscreen.gif'
import { color } from "framer-motion";

const RecentWorks = () => {
  
  return (
    <section className="recent-works">
    {/* <div className="gif-containers left-gifs">
            <img src={threeD} alt="Left GIFS" />
          </div> */}

          
      <div className="section-tag">★ <span className="selectedwrk">Selected Works</span></div>
        
      <div className="section-header">
      <img src={threeD} alt="Left GIFS" className="headerlogo" />
        <div>
          <h2 className="section-title">
        Our Recent Edits <span>in Action</span>
      </h2>

      <p className="section-subtitle">
        From tech reviews to gameplay breakdowns — here’s a glimpse of how we
        turn raw footage into binge-worthy content that resonates.
      </p>
        </div>
      </div>

      <div className="works-container">
        {/* Card 1 */}
        <div className="work-card fade-in">
          <div className="video-wrapper">
             <video
              src={BROTO}          // your .mp4 file
              loop                 // keeps looping while hovered
              className="hover-video"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}  />
          </div>
          <div className="work-info">
            <div className="work-meta">
              <span><img src={threeD} className="icondavin"/> Davinciresolv</span>
              <span>📈 120k+ Views</span>
            </div>
            <h3>Framer's New Color Update is Here: P3 Colors</h3>
            <p>
              The March update brings P3 color support to Framer with a redesigned
              color picker.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="work-card fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="video-wrapper">
             <video
              src={BEAT}          // your .mp4 file
              loop                 // keeps looping while hovered
              className="hover-video"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}  />
          </div>
          <div className="work-info">
            <div className="work-meta">
              <span><img src={threeD} className="icondavin"/> Davinciresolv</span>
              <span>📈 69k+ Views</span>
            </div>
            <h3>Utilizing Collection Lists in Framer (CMS Lesson 4)</h3>
            <p>
              Learn how to take full control of your dynamic content using
              Collection Lists in Framer CMS.
            </p>
          </div>
        </div>

        {/* Card 3 */}
         <div className="work-card fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="video-wrapper">
             <video
              src={V1}          // your .mp4 file
              loop                 // keeps looping while hovered
              className="hover-video"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}  />
          </div>
          <div className="work-info">
            <div className="work-meta">
              <span><img src={threeD} className="icondavin"/> Davinciresolv</span>
              <span>📈 69k+ Views</span>
            </div>
            <h3>Utilizing Collection Lists in Framer (CMS Lesson 4)</h3>
            <p>
              Learn how to take full control of your dynamic content using
              Collection Lists in Framer CMS.
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default RecentWorks;
