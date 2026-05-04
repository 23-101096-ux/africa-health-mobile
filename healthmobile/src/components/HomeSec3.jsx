import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./HomeSec3.css";

import time from "../assets/time.svg"; 
import locc from "../assets/locc.svg";

const HomeSec3 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("conference_sessions")
        .select("*");

      if (!error && data) {
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="home-sec3-container">
      
      <div className="sec3-header">
        <h3 className="sec3-title">Upcoming Events</h3>
        <span className="see-all">See all</span>
      </div>

  
      <div className="cards-scroll-wrapper">
        {events.map((item) => (
          <div className="event-card-div" key={item.id}>

          
            <div className="card-time-row">
              <span className="clock-icon"><img src={time} alt="" /></span>
              <p className="card-time-text">{item.start_time}</p>
            </div>

         
            <h4 className="card-event-name">{item.title}</h4>

           
            <div className="card-footer">
              <p className="card-speaker">{item.speaker_name}</p>
              <div className="location-info">
                <span className="loc-icon"><img src={locc} alt="" /></span>
                <span className="loc-text">{item.hall_name}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSec3;