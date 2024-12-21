import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/header/header';
import Dashboard from '../components/dashboard/dashboard';
import RatingComp from '../components/ratingComp/ratingComp';
import Footer from '../components/footer/footer';

import './app.css';
import Tabs from '../components/tabs/tabs';
import NoPage from '../components/noPage/noPage';

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
        <Route path="/awareness" element={<>
          <Header />
          <Tabs />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="/inspiration" element={<>
          <Header />
          <Tabs />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="/entertainment" element={<>
          <Header />
          <Tabs />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
