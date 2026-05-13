import React from "react";
import "./ScheduleSection.css";

const scheduleItems = [
  {
    time: "10:00 AM",
    title: "Opening Remarks",
    description: "Introduction to AI in Healthcare",
  },
  {
    time: "10:30 AM",
    title: "Panel Discussion",
    description: "Challenges and Opportunities",
  },
  {
    time: "11:15 AM",
    title: "Q&A Session",
    description: "Audience interaction",
  },
];

export default function ScheduleSection() {
  return (
    <section className="schedule-container">
      <h2 className="schedule-heading">Schedule</h2>
      
      <div className="timeline">
        {scheduleItems.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`timeline-row ${isEven ? "right" : "left"}`}>
             
              <div className="timeline-content">
                <span className="timeline-time">{item.time}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>

     
              <div className="timeline-indicator">
                <div className="dot-outer">
                  <div className="dot-inner" />
                </div>
              </div>

             
              <div className="timeline-spacer" />
            </div>
          );
        })}
      </div>
    </section>
  );
}