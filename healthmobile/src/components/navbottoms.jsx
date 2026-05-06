import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbottoms.css";

import home from "../assets/home.svg";
import mapp from "../assets/mapp.svg";
import tickets from "../assets/tickets.svg";
import alerts from "../assets/alerts.svg";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/home" className={`nav-item ${location.pathname === "/home" ? "active" : ""}`}>
        <span className="nav-icon"><img src={home} alt="" /></span>
        <span className="nav-label">Home</span>
      </Link>
      <Link to="/maps" className={`nav-item ${location.pathname === "/maps" ? "active" : ""}`}>
        <span className="nav-icon"><img src={mapp} alt="" /></span>
        <span className="nav-label">Map</span>
      </Link>
      <Link to="/tickets" className={`nav-item ${location.pathname === "/tickets" ? "active" : ""}`}>
        <span className="nav-icon"><img src={tickets} alt="" /></span>
        <span className="nav-label">Tickets</span>
      </Link>
      <Link to="/alerts" className={`nav-item ${location.pathname === "/alerts" ? "active" : ""}`}>
        <span className="nav-icon"><img src={alerts} alt="" /></span>
        <span className="nav-label">Alerts</span>
      </Link>
    </nav>
  );
};

export default BottomNav;