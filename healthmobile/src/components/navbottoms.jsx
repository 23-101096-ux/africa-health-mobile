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

      <Link
        to="/"
        className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
      >
        <span className="nav-icon"><img src={home} alt="" /></span>
        <span className="nav-label">Home</span>
      </Link>

      <Link
        to="/Maps"
        className={`nav-item ${location.pathname === "/Maps" ? "active" : ""}`}
      >
        <span className="nav-icon"><img src={mapp} alt="" /></span>
        <span className="nav-label">Map</span>
      </Link>

      <Link
        to="/Tickets"
        className={`nav-item ${location.pathname === "/Tickets" ? "active" : ""}`}
      >
        <span className="nav-icon"><img src={tickets} alt="" /></span>
        <span className="nav-label">Tickets</span>
      </Link>

      <Link
        to="/Alerts"
        className={`nav-item ${location.pathname === "/Alerts" ? "active" : ""}`}
      >
        <span className="nav-icon"><img src={alerts} alt="" /></span>
        <span className="nav-label">Alerts</span>
      </Link>

    </nav>
  );
};

export default BottomNav;