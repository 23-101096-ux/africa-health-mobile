import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Onboarding.css"; 
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon 3.png";

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M7 5L11 9L7 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OnboardingScreens = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < 2) {
      setCurrent(current + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => navigate("/login");

  return (
    <div className="onboarding-container">
      <div className="ambient-bg" />

      <div className="top-bar">
        <button className="skip-btn" onClick={handleSkip}>
          Skip
        </button>
      </div>

      <div className="content-wrapper">
        {current === 0 && (
          <div className="content show">
            <div className="icon-area">
              <div className="outer-ring">
                <div className="inner-circle">
                  <img src={img1} alt="Icon 1" />
                </div>
              </div>
            </div>
            <div className="text-area">
              <h2 className="title">Discover Events</h2>
              <p className="body">
                Browse sessions, speakers, and exhibitions shaping the future of
                African healthcare.
              </p>
            </div>
          </div>
        )}

        {current === 1 && (
          <div className="content show">
            <div className="icon-area">
              <div className="outer-ring">
                <div className="inner-circle">
                  <img src={img2} alt="Icon 2" />
                </div>
              </div>
            </div>
            <div className="text-area">
              <h2 className="title">Interactive Floor Plan</h2>
              <p className="body">
                Navigate the venue with ease. Find booths, halls, and premium
                exhibitors instantly.
              </p>
            </div>
          </div>
        )}

        {current === 2 && (
          <div className="content show">
            <div className="icon-area">
              <div className="outer-ring">
                <div className="inner-circle">
                  <img src={img3} alt="Icon 3" />
                </div>
              </div>
            </div>
            <div className="text-area">
              <h2 className="title">Digital Tickets</h2>
              <p className="body">
                Your pass, always in your pocket. Quick access to all your
                registered events.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-area">
        <div className="dots">
          <button
            onClick={() => setCurrent(0)}
            className={`dot ${current === 0 ? "active" : ""}`}
          />
          <button
            onClick={() => setCurrent(1)}
            className={`dot ${current === 1 ? "active" : ""}`}
          />
          <button
            onClick={() => setCurrent(2)}
            className={`dot ${current === 2 ? "active" : ""}`}
          />
        </div>

        <Button
          label={current === 2 ? "Get Started" : "Next"}
          icon={current === 2 ? null : <ChevronRight />}
          onClick={handleNext}
          variant="primary"
          fullWidth
        />
      </div>
    </div>
  );
};

export default OnboardingScreens;