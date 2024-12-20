import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../components/dashboard/dashboard';
import RatingComp from '../components/ratingComp/ratingComp';
import Footer from '../components/footer/footer';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Dashboard />
        <RatingComp />
        <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
