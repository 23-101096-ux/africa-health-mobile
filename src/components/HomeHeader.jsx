import React, { useState } from "react";
import "./HomeHeader.css";

import burgerIcon from "../assets/menu-icon.png"; 
import bellIcon from "../assets/bell-icon.png"; 
import profileImg from "../assets/pp.png"; 
import profileicon from "../assets/profile-icon.png"; 
import settingsicon from "../assets/settings-icon.png"; 
import callendericon from "../assets/callender-icon.png"; 
import supporticon from "../assets/support-icon.png"; 

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="home-header">
      
      <div className="header-left">
        <img src={profileImg} alt="Dr. Sarah" className="profile-img" />
        <div className="welcome-text">
          <span className="greeting">Good morning,</span>
          <h2 className="user-name">Dr. Sarah</h2>
        </div>
      </div>

    
      <div className="header-right">
        <div className="icon-circle">
          <img src={bellIcon} alt="Notifications" className="header-icon" />
          <span className="notification-dot"></span> 
        </div>
        
        <div className="icon-circle" onClick={() => setIsOpen(!isOpen)}>
          <img src={burgerIcon} alt="Menu" className="header-icon burger" />
        </div>
      </div>


      {isOpen && (
  <div className="menu-overlay" onClick={() => setIsOpen(false)}>
    <div className="menu-drawer" onClick={(e) => e.stopPropagation()}>
      
     
      <div className="menu-header">
        <h2>Menu</h2>
        <span className="close-btn" onClick={() => setIsOpen(false)}>✕</span>
      </div>

      
      <div className="menu-profile">
        <img src={profileImg} alt="profile" />
        <div>
          <h3>Dr. Sarah Johnson</h3>
          <span className="badge">Premium Pass</span>
        </div>
      </div>

     
      <div className="menu-items">
        <div className="menu-item active">
        <img src={profileicon} alt="" className="header-icon" />
          <p>My Profile</p>
        </div>

        <div className="menu-item">
        <img src={settingsicon} alt="" className="header-icon" />
          <p>My Schedule</p>
        </div>

        <div className="menu-item">
        <img src={callendericon} alt="" className="header-icon" />
          <p>Settings</p>
        </div>

        <div className="menu-item">
        <img src={supporticon} alt="" className="header-icon" />
          <p>Help & Support</p>
        </div>
      </div>

  
      <div className="menu-footer">
        <div className="logout">
          <span>↩</span>
          <p>Sign Out</p>
        </div>
      </div>

    </div>
  </div>
)}
    </header>
  );
};

export default HomeHeader;