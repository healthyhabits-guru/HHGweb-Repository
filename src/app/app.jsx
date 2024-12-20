import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/header/header';
import Dashboard from '../components/dashboard/dashboard';
import RatingComp from '../components/ratingComp/ratingComp';
import Footer from '../components/footer/footer';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Dashboard />
          <RatingComp />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
