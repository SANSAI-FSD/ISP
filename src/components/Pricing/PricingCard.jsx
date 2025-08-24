import React from "react";

const PricingCard = ({ title, price, period, description, features, popular, dark }) => {
  return (
    <div className={`pricing-card ${dark ? "dark" : ""}`}>
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
    </div>
  );
};

export default PricingCard;
