import React from "react";
import "./NewsSection.css";

import img1 from "../assets/image_4.png";

const NewsSection = () => {
  return (
    <section className="news-section">

      <div className="news-header">
        <h2 className="news-heading">News</h2>
      </div>

      <div className="news-featured">
  
        <div className="news-featured-card">
          <img src={img1} alt="Conference news image" />

         
          <div className="news-featured-overlay" />

         
          <div className="news-featured-content">
            <div className="news-label">
              <span className="news-label-dot" />
              Conference News
            </div>

            <h3 className="news-featured-title">
              Healthcare Leaders Summit Added to Program
            </h3>

            <a href="/#" className="news-read-more">
              Read article
              <span className="news-read-more-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewsSection;