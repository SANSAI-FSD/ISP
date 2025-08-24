import React from "react";
import PricingCard from "./PricingCard";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="pricing-header">
        <span className="tag">✨ Pricing</span>
        <h2>Simple Plans</h2>
        <p>
          Whether you’re uploading weekly or scaling fast, we’ve got
          a plan tailored to your content flow.
        </p>
      </div>

      <div className="pricing-cards">
        <PricingCard
          title="Starter Plan"
          price="₹899"
          period="/month"
          description="For growing creators who post 4–6 videos/month"
          features={[
            "Up to 6 Videos/month",
            "Revisions 2 per video",
            "Basic color grading and audio sync",
            "72 hour turnaround",
            "Email support",
          ]}
        />

        <PricingCard
          title="Pro Plan"
          price="₹1599"
          period="/month"
          description="For growing creators who post 4–6 videos/month"
          popular
          features={[
            "Up to 20 Videos/month",
            "Revisions 5 per video",
            "Advance color grading and audio sync",
            "48 hour turnaround",
            "Video Call Support",
          ]}
        />

        <PricingCard
          title="Custom Plan"
          price="???"
          period="/month"
          description="For growing creators who post 4–6 videos/month"
          dark
          features={[
            "Choose from 10 to 40+ Video Edits",
            "24h / 48h / 72h Delivery",
            "Title, thumbnail, and retention tips",
            "Shorts, Reels, long-form, podcasts",
            "One edit = multi-channel assets",
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
