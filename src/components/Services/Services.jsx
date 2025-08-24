import React from "react";
import "./Services.css";

const Chip = ({ children }) => (
  <span className="chip"><i aria-hidden="true" /></span>
);

const Services = () => {
  return (
    <section className="svc" id="services">
      {/* section badge */}
      <div className="svc-badge">
        <span className="star">✦</span> Services
      </div>

      {/* heading + lead */}
      <h2 className="svc-title">What We Do Best</h2>
      <p className="svc-lead">
        We craft scroll–stopping edits that keep your audience hooked and your content looking top-tier.
      </p>

      {/* mosaic (flex, 2 columns) */}
      <div className="svc-mosaic">
        {/* LEFT column */}
        <div className="svc-col">
          {/* tall card */}
          <article className="svc-card tall fade-in">
            <h3 className="svc-card__title">Youtube Shorts Editing</h3>
            <p className="svc-card__text">
              We turn raw clips into high-retention, caption-packed vertical videos that pop on Reels, Shorts, and TikTok.
              Great for content repurposing and explosive growth.
            </p>

            <div className="svc-chips">
              <span className="chip"><i aria-hidden="true" /> Snappy Pacing</span>
              <span className="chip"><i aria-hidden="true" /> Viral-Ready</span>
              <span className="chip"><i aria-hidden="true" /> Subtitled</span>
            </div>
          </article>

          {/* short card */}
          <article className="svc-card short fade-in" style={{ animationDelay: ".12s" }}>
            <h3 className="svc-card__title">Thumbnail Design</h3>
            <p className="svc-card__text">
              From vlogs to deep dives, we trim the fluff, tighten the pacing.
            </p>

            <div className="svc-chips">
              <span className="chip"><i aria-hidden="true" /> Click Magnet</span>
            </div>
          </article>
        </div>

        {/* RIGHT column */}
        <div className="svc-col">
          {/* short card */}
          <article className="svc-card short fade-in" style={{ animationDelay: ".06s" }}>
            <h3 className="svc-card__title">Long Form Edits</h3>
            <p className="svc-card__text">
              From vlogs to deep dives, we trim the fluff, tighten the pacing.
            </p>

            <div className="svc-chips">
              <span className="chip"><i aria-hidden="true" /> Retention-Driven</span>
            </div>
          </article>

          {/* tall card */}
          <article className="svc-card tall fade-in" style={{ animationDelay: ".18s" }}>
            <h3 className="svc-card__title">Content Repurposing Package</h3>
            <p className="svc-card__text">
              One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers.
              Perfect for creators who want to stay visible everywhere.
            </p>

            <div className="svc-chips">
              <span className="chip"><i aria-hidden="true" /> Multi-Platform</span>
              <span className="chip"><i aria-hidden="true" /> Batch Delivery</span>
              <span className="chip"><i aria-hidden="true" /> Quick</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
