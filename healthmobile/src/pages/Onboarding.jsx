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

const screens = [
  {
    img: img1,
    alt: "Icon 1",
    title: "Discover Events",
    body: "Browse sessions, speakers, and exhibitions shaping the future of African healthcare.",
  },
  {
    img: img2,
    alt: "Icon 2",
    title: "Interactive Floor Plan",
    body: "Navigate the venue with ease. Find booths, halls, and premium exhibitors instantly.",
  },
  {
    img: img3,
    alt: "Icon 3",
    title: "Digital Tickets",
    body: "Your pass, always in your pocket. Quick access to all your registered events.",
  },
];

const OnboardingScreens = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < 2) setCurrent(current + 1);
    else navigate("/login");
  };

  const screen = screens[current];

  return (
    <div className="onboarding-container">

      <div className="top-bar">
        <button className="skip-btn" onClick={() => navigate("/login")}>
          Skip
        </button>
      </div>

      <div className="content-wrapper">
        <div className="content show">
          <div className="icon-area">
            <div className="icon-circle">
              <img src={screen.img} alt={screen.alt} />
            </div>
          </div>
          <div className="text-area">
            <h2 className="title">{screen.title}</h2>
            <p className="body">{screen.body}</p>
          </div>
        </div>
      </div>

      <div className="bottom-area">
        <div className="dots">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`dot ${current === i ? "active" : ""}`}
            />
          ))}
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