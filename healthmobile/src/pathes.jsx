import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Maps from './pages/Maps';
import Tickets from './pages/Tickets';
import Alerts from './pages/Alerts';
import BottomNav from './components/navbottoms';

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/Maps"    element={<Maps />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/Alerts"  element={<Alerts />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default Routess;