import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Maps from './pages/Maps';
import Tickets from './pages/Tickets';
import Alerts from './pages/Alerts';
import SplashScreen from './pages/SplashScreen';
import OnboardingScreens from './pages/Onboarding';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import BottomNav from './components/navbottoms';
import { useLocation } from 'react-router-dom';

const HIDE_NAV_ROUTES = ['/', '/onboarding', '/login', '/register'];

const AppLayout = () => {
  const location = useLocation();
  const showNav = !HIDE_NAV_ROUTES.includes(location.pathname);

  return (
    <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto', minHeight: '100vh' }}>
      <Routes>
        <Route path="/"            element={<SplashScreen />} />
        <Route path="/onboarding"  element={<OnboardingScreens />} />
        <Route path="/login"       element={<LoginPage />} />
        <Route path="/register"    element={<RegisterPage />} />
        <Route path="/home"        element={<Home />} />
        <Route path="/maps"        element={<Maps />} />
        <Route path="/tickets"     element={<Tickets />} />
        <Route path="/alerts"      element={<Alerts />} />
        <Route path="*"            element={<Navigate to="/" replace />} />
      </Routes>

      {showNav && <BottomNav />}
    </div>
  );
};

const Routess = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default Routess;