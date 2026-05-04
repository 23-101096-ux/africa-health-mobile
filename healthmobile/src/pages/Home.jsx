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
    const [phase, setPhase] = useState("splash");
  
    return (
      <div className="app-container">
     
        {phase === "splash" && (
          <SplashScreen onFinish={() => setPhase("onboarding")} />
        )}

        {phase === "onboarding" && (
          <OnboardingScreens onComplete={() => setPhase("login")} />
        )}

        {phase === "login" && (
          <LoginPage 
            onGoToRegister={() => setPhase("register")} 
            onLoginSuccess={() => setPhase("home")} 
          />
        )}

        {phase === "register" && (
          <RegisterPage 
            onGoToLogin={() => setPhase("login")} 
            onRegisterSuccess={() => setPhase("home")} 
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