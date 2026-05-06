import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image_1.png"; 
import "./SplashScreen.css";

const SplashScreen = () => {
  const [phase, setPhase] = useState("enter");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 100);

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setCount(current);
    }, 36);

    const t2 = setTimeout(() => setPhase("exit"), 3000);
    const t3 = setTimeout(() => navigate("/onboarding"), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className={`splash-container ${phase}`}>

      
      <div className="splash-vignette" />
      <div className="splash-slash" />
      <div className="splash-cross-bg" />

      
      <div className="splash-bracket splash-bracket-tl" />
      <div className="splash-bracket splash-bracket-tr" />
      <div className="splash-bracket splash-bracket-bl" />
      <div className="splash-bracket splash-bracket-br" />

      
      <div className="splash-side-label">Health Africa · Cairo 2026</div>

    
      <div className="splash-center">

  
        <div className="splash-logo-wrap">
          <div className="splash-logo-border" />
          <div className="splash-logo-arc" />
          <img src={logo} alt="Health Africa" className="splash-logo-img" />
        </div>

       
        <div className="splash-title-wrap">
          <div className="splash-title">
            <span className="splash-title-white">Health</span>
            <span className="splash-title-orange">Africa</span>
          </div>
          <div className="splash-tagline">— Medical Clinic —</div>
        </div>

       
        <div className="splash-tag">
          <span className="splash-tag-dot" />
          Cairo 2026
        </div>

      </div>

      
      <div className="splash-ecg">
        <svg viewBox="0 0 260 40" xmlns="http://www.w3.org/2000/svg">
       
          <polyline
            className="ecg-line"
            points="0,20 60,20 75,20 80,20 85,20 190,20 210,20 260,20"
          />
        
          <polyline
            className="ecg-pulse"
            points="80,20 88,20 93,4 98,36 103,20 110,20"
          />
        </svg>
      </div>

     
      <div className="splash-bottom">
        <div className="splash-progress-track">
          <div className="splash-progress-fill" style={{ width: `${count}%` }} />
        </div>
        <div className="splash-counter">{String(count).padStart(3, "0")}</div>
      </div>

    </div>
  );
};

export default SplashScreen;