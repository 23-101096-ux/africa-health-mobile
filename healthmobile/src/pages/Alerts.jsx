import React from 'react';
import "./Alerts.css";

import cc from "../assets/yellow-callender.svg";
import mm from "../assets/yellow-loc.svg";
import ww from "../assets/weird.svg";
import dd from "../assets/done.svg";


const Alerts = () => {
    return (<>

    <div className="alerts-page">

      <div className="alerts-header">
        <div className='under'>
        <h1 className="alerts-title">Notifications</h1>
        <p className="alerts-subtitle">You have 2 unread messages</p>
        </div>
        <p className="alerts-mark-all">Mark all read</p>
      </div>

      <div className="alerts-divider" />


      <div className="alert-card unread">
        <div className="alert-icon"><img src={cc} alt="" /></div>
        <div className="alert-body">
          <p className="alert-title">Session Starting Soon</p>
          <p className="alert-message">Future of AI in Healthcare starts in 15 minutes in Hall A.</p>
          <p className="alert-time">Just now</p>
        </div>
        <div className="alert-dot" />
      </div>

   
      <div className="alert-card unread">
        <div className="alert-icon"><img src={mm} alt="" /></div>
        <div className="alert-body">
          <p className="alert-title">Meeting Request</p>
          <p className="alert-message">MedTech Solutions has accepted your meeting request for tomorrow.</p>
          <p className="alert-time">2 hours ago</p>
        </div>
        <div className="alert-dot" />
      </div>

    
      <div className="alert-card read">
        <div className="alert-icon"><img src={ww} alt="" /></div>
        <div className="alert-body">
          <p className="alert-title">Welcome to Africa Health Excon</p>
          <p className="alert-message">Explore the interactive map to find your way around the venue.</p>
          <p className="alert-time">1 day ago</p>
        </div>
      </div>


      <div className="alert-card read">
        <div className="alert-icon"><img src={dd} alt="" /></div>
        <div className="alert-body">
          <p className="alert-title">Registration Confirmed</p>
          <p className="alert-message">Your Premium Pass has been activated successfully.</p>
          <p className="alert-time">2 days ago</p>
        </div>
      </div>
      </div>
      
   

    </> );
}
 
export default Alerts;