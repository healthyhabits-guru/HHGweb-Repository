import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/header/header';
import Dashboard from '../components/dashboard/dashboard';
import Tabs from '../components/tabs/tabs';
import NoPage from '../components/noPage/noPage';
import CardGrid from '../components/cardGrid/cardGrid';
import VideoComp from '../components/videoComp/videoComp';
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
        <Route path="/awareness" element={<>
          <Header />
          <Tabs />
          <CardGrid />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="/inspiration" element={<>
          <Header />
          <Tabs />
          <CardGrid />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="/entertainment" element={<>
          <Header />
          <Tabs />
          <CardGrid />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="/:type/:id" element={<>
          <Header />
          <Tabs />
          <VideoComp />
          <CardGrid />
          <RatingComp />
          <Footer />
        </>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
