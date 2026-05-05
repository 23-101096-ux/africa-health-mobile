import React, { useState } from "react";
import SplashScreen from "../components/Splashscreen";
import OnboardingScreens from "../components/Onboardingscreens";
import LoginPage from "../components/Loginpage"; 
import RegisterPage from "../components/Registerpage";
import "./Home.css"; 
import HomeHeader from "../components/HomeHeader";
import HomeSec2 from "../components/HomeSec2";
import HomeSec3 from "../components/HomeSec3";
import HomeSec4 from "../components/HomeSec4";

const Home = () => {
  const [phase, setPhase] = useState(() => {
    return localStorage.getItem("phase") || "splash";
  });

  const goToPhase = (p) => {
    localStorage.setItem("phase", p);
    setPhase(p);
  };

  return (
    <div className="app-container">
      {phase === "splash" && (
        <SplashScreen onFinish={() => goToPhase("onboarding")} />
      )}
      {phase === "onboarding" && (
        <OnboardingScreens onComplete={() => goToPhase("login")} />
      )}
      {phase === "login" && (
        <LoginPage 
          onGoToRegister={() => goToPhase("register")} 
          onLoginSuccess={() => goToPhase("home")} 
        />
      )}
      {phase === "register" && (
        <RegisterPage 
          onGoToLogin={() => goToPhase("login")} 
          onRegisterSuccess={() => goToPhase("home")} 
        />
      )}
      {phase === "home" && (
        <div className="home-screen">
          <HomeHeader />
          <HomeSec2 />
          <HomeSec3 />
          <HomeSec4 />
        </div>
      )}
    </div>
  );
};

export default Home;