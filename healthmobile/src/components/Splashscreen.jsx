import React, { useEffect, useState } from "react";
import "./Splashscreen.css";

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2600);
    const t3 = setTimeout(() => onFinish(), 3200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className={`splash-container ${phase}`}>
      <div className="ambient-glow" />

      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      <div className="content">
        <div className="logo-circle">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M19 6C12 6 6 12 6 19C6 26 12 32 19 32C26 32 32 26 32 19"
              stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="19" cy="19" r="4" fill="#F5A623" opacity="0.9"/>
          </svg>
        </div>

        <div className="text">
          <div className="title">HealthConf</div>
          <div className="subtitle">Africa 2026</div>
        </div>

        <div className="dots">
          <div className="dot delay-1"></div>
          <div className="dot delay-2"></div>
          <div className="dot delay-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;