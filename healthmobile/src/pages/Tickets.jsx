import React from 'react';
import "./Tickets.css";
import qr from "../assets/clarity_qr-code-line.svg";
import dd from "../assets/download.svg";

const Tickets = () => {
    return ( <>
    <div className="tickets-page">

      <div className="tickets-header">
        <h1 className="tickets-title">My Pass</h1>
        <button className="tickets-download-btn" aria-label="Download pass">
         <img src={dd} alt="" />
        </button>
      </div>
 

      <div className="pass-card">
 

        <div className="pass-top">
          <span className="pass-badge">Premium Pass</span>
          <h2 className="pass-name">Dr. Sarah Johnson</h2>
          <p className="pass-role">Chief Medical Officer</p>
 

          <div className="pass-qr-wrapper">
           
            <div className="pass-qr-placeholder">
              <img src={qr} alt="" />
            </div>
          </div>
 
          <p className="pass-scan-label">SCAN AT ENTRANCE</p>
        </div>
 
    
        <div className="pass-divider">
          <div className="pass-cutout pass-cutout-left" />
          <div className="pass-dashed-line" />
          <div className="pass-cutout pass-cutout-right" />
        </div>
 
       
        <div className="pass-bottom">
          <h3 className="pass-event-name">Africa Health Excon</h3>
 
          <div className="pass-detail-row">
            <span className="pass-detail-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="4" width="14" height="12" rx="2" stroke="#C8922A" strokeWidth="1.4"/>
                <path d="M6 2v3M12 2v3M2 8h14" stroke="#C8922A" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <p className="pass-detail-primary">May 15–17, 2026</p>
              <p className="pass-detail-secondary">09:00 AM – 06:00 PM</p>
            </div>
          </div>
 
          <div className="pass-detail-row">
            <span className="pass-detail-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C6.24 2 4 4.24 4 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" stroke="#C8922A" strokeWidth="1.4"/>
                <circle cx="9" cy="7" r="1.5" stroke="#C8922A" strokeWidth="1.4"/>
              </svg>
            </span>
            <div>
              <p className="pass-detail-primary">Cairo International Convention Centre</p>
              <p className="pass-detail-secondary">Cairo, Egypt</p>
            </div>
          </div>
 
      
          <div className="pass-footer">
            <div>
              <p className="pass-footer-label">Ticket ID</p>
              <p className="pass-footer-value">AHE-2026-8492</p>
            </div>
            <div className="pass-footer-right">
              <p className="pass-footer-label">Booth</p>
              <p className="pass-footer-value pass-footer-accent">B-142</p>
            </div>
          </div>
        </div>
 
      </div>
    </div>


    </>);
}
 
export default Tickets;