import React from "react";
import "./SpeakersSection.css";

import amina from "../assets/image 18.png";
import ahmed from "../assets/image 19.png";

const speakerData = [
    {
      name: "Dr. Amina Diallo",
      role: "Chief Medical Officer",
      image: amina, 
    },
    {
      name: "Dr. Ahmed Anwar",
      role: "Chief Medical Officer",
      image: ahmed, 
    },
  ];

export default function SpeakersSection() {
  return (
    <section className="speakers-container">
      <h2 className="speakers-title">Speakers</h2>
      
      <div className="speakers-grid">
        {speakerData.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="speaker-avatar-container">
              {speaker.image ? (
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="speaker-image" 
                />
              ) : (
                <div className="speaker-placeholder" />
              )}
            </div>
            
            <div className="speaker-info">
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}