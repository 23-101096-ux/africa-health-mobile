import React from "react";
import "./Home.css";
import SessionHero from "../components/SessionHero";
import SpeakersSection from "../components/SpeakersSection";
import ScheduleSection from "../components/ScheduleSection";


const Session = () => {
  return (
    <div className="home-screen">
        <SessionHero />
        <SpeakersSection />
        <ScheduleSection />

    </div>
  );
};

export default Session;