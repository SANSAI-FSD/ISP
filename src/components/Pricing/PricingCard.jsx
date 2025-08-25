
import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ title, price, period, description, features, popular, dark, index }) => {
  return (
    <motion.div
      className={`pricing-card ${dark ? "dark" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: index * 0.2 }}
      viewport={{ once: false }}
    >
      <div className="card-header">
        <h3>{title}</h3>
        {popular && <span className="badge">Popular</span>}
        <p className="price">
          {price} <span>{period}</span>
        </p>
        <p className="desc">{description}</p>
        <button className="book-call-btn">
          Book a Call <span className="arrow">→</span>
        </button>
      </div>

      <div className="card-features">
        <h4>Features included:</h4>
        <ul>
          {features.map((f, i) => (
            <li key={i}>✱ {f}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingCard;
