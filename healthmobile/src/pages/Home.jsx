import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSec2 from "../components/HomeSec2";
import HomeSec3 from "../components/HomeSec3";
import HomeSec4 from "../components/HomeSec4";
import "./Home.css";
import NewsSection from "../components/Newssection";

const Home = () => {
  return (
    <div className="home-screen">
      <HomeHeader />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <NewsSection />
    </div>
  );
};

export default Home;