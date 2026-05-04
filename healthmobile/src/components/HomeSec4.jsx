import React from "react";
import "./HomeSec4.css";

const HomeSec4 = () => {
  return (
    <div className="exhibitors-container">
      <h2 className="exhibitors-title">Featured Exhibitors</h2>

      <div className="exhibitors-list">
        

        <div className="exhibitor-card">
          <div className="exhibitor-left">
            <h4 className="exhibitor-name">MedTech Solutions</h4>
            <span className="exhibitor-tag">Devices</span>
          </div>
          <div className="exhibitor-right">
            <span className="booth-label">Booth</span>
            <span className="booth-number">A-12</span>
          </div>
        </div>


        <div className="exhibitor-card">
          <div className="exhibitor-left">
            <h4 className="exhibitor-name">PharmaCore Int.</h4>
            <span className="exhibitor-tag">Pharma</span>
          </div>
          <div className="exhibitor-right">
            <span className="booth-label">Booth</span>
            <span className="booth-number">B-45</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSec4;