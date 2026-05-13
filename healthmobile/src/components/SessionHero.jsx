import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SessionHero.css";
import time from "../assets/time.svg"; 
import locc from "../assets/locc.svg";
import callendericon from "../assets/callender-icon.png"; 

export default function SessionHero() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); 

  return (
    <div className="hero-background-wrapper">
      <nav className="hero-nav">

        <button 
          className="back-button" 
          aria-label="Go back"
          onClick={() => navigate("/home")} 
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </nav>

      <div className="hero-content">
        <div className="keynote-badge">Keynote Session</div>

        <div className="hero-meta-row">
          <div className="hero-meta-item">
            <span className="icon-gold"><img src={callendericon} alt="" /></span>
            <span className="meta-text">May 15, 2026</span>
          </div>
          <div className="hero-meta-item">
            <span className="icon-gold"><img src={time} alt="" /></span>
            <span className="meta-text">10:00 AM - 11:30 AM</span>
          </div>
        </div>

        <div className="hero-meta-item location">
          <span className="icon-gold"><img src={locc} alt="" /></span>
          <span className="meta-text">Main Hall A</span>
        </div>

        <h1 className="hero-main-title">Future of AI in Healthcare</h1>

        <div className="about-accordion">
          <div className="about-header" onClick={() => setIsOpen(!isOpen)}>
            <h2 className="about-title">About Session</h2>
            <span className={`chevron-icon ${isOpen ? "open" : ""}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
          
          {isOpen && (
            <div className="about-description">
              <p>
                Join leading experts as they discuss the transformative impact of 
                Artificial Intelligence on healthcare delivery in Africa. This 
                session will cover predictive diagnostics...
              </p>
              <div className="description-fade-overlay"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}