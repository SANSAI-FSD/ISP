
import React from "react";
import "./RecentWorks.css";
import BEAT from "../../assets/videos/BEAT.mp4";
import BROTO from "../../assets/videos/BROTOTYPE.mp4";
import V1 from "../../assets/videos/V1.mp4";
import threeD from "../../assets/gif/resolve-unscreen.gif";
import { motion } from "framer-motion";

const RecentWorks = () => {
  return (
    <section className="recent-works">
      <div className="section-tag">★ <span className="selectedwrk">Selected Works</span></div>

      {/* Section Header Animation */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
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
      </motion.div>

      {/* Works Cards */}
      <div className="works-container">
        {[
          {
            src: BROTO,
            views: "120k+ Views",
            title: "Framer's New Color Update is Here: P3 Colors",
            desc: "The March update brings P3 color support to Framer with a redesigned color picker."
          },
          {
            src: BEAT,
            views: "69k+ Views",
            title: "Utilizing Collection Lists in Framer (CMS Lesson 4)",
            desc: "Learn how to take full control of your dynamic content using Collection Lists in Framer CMS."
          },
          {
            src: V1,
            views: "69k+ Views",
            title: "Utilizing Collection Lists in Framer (CMS Lesson 4)",
            desc: "Learn how to take full control of your dynamic content using Collection Lists in Framer CMS."
          }
        ].map((work, index) => (
          <motion.div
  className="work-card"
  key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,       // longer for a smooth fade
    ease: "easeOut",
    delay: index * 0.3,  // staggered appearance
  }}
  viewport={{ once: false }}
  whileHover={{ scale: 3.05 }}  // Slightly increase scale on hover
>

            <div className="video-wrapper">
              <video
                src={work.src}
                loop
                className="hover-video"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                onTouchStart={(e) => e.target.play()}
                onTouchEnd={(e) => e.target.pause()}
              />
            </div>
            <div className="work-info">
              <div className="work-meta">
                <span><img src={threeD} className="icondavin" alt="icon" /> Davinciresolv</span>
                <span>📈 {work.views}</span>
              </div>
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
