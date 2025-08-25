

import React, { useEffect, useRef, useState } from "react";
import { FaVideo, FaUserFriends, FaEye } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./About.css";
import Lottie from "lottie-react";
import videoAnimation from "../../assets/json/vedio.json"; 
import viewsAnimation from "../../assets/json/Views.json"; 
import creativeAnimation from "../../assets/json/Creative.json"; 

const About = () => {
  const sectionRef = useRef(null);
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // change key → re-mount CountUp → restart animation
            setTriggerKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Badge */}
      <motion.div
        className="about-badge"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className="star" aria-hidden="true">✦</span>
        About
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        We’re the Editing Partners Behind the 
        Creators <br/>Who Actually Grow with Results. <br />
        <span className="highlight"></span>
      </motion.h1>

      {/* Stats Section */}
      <motion.div
        className="about-stats-pill"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="about-stats">
          <motion.div
  className="stat"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false }}
>
  <div className="value lottie" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <div className="lottie-container">
    <Lottie animationData={videoAnimation} style={{ width: 80, height: 80 }} loop={true} />
    <div className="countnum"><CountUp  className="count" key={triggerKey + "-1"} end={1200} duration={2} separator="," /><p className="countplus">+</p></div>

    </div>
    <div className="label">Videos Delivered</div>
  </div>
    
</motion.div>

<motion.div
  className="stat"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false }}
>
  <div className="value lottie" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <div className="lottie-container">
    <Lottie animationData={creativeAnimation} style={{ width: 80, height: 80 }} loop={true} />
    <div className="countnum"><CountUp  className="count" key={triggerKey + "-1"} end={300} duration={2} separator="," /><p className="countplus">+</p></div>
    </div>
    <div className="label">Creators Served</div>
  </div>
    
</motion.div>

<motion.div
  className="stat"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false }}
>
  <div className="value lottie" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <div className="lottie-container">
    <Lottie animationData={viewsAnimation} style={{ width: 80, height: 80 }} loop={true} />
    <div className="countnum"><CountUp  className="count" key={triggerKey + "-1"} end={45000} duration={2} separator="," /><p className="countplus">+</p></div>
    </div>
    <div className="label">Videos Delivered</div>
  </div>
    
</motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
