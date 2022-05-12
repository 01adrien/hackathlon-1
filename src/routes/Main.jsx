import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Result } from '../pages/Result';
import '../styles/home.css';
import '../styles/app.css';

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/:category" element={<Result />} />
      </Routes>
    </div>
  );
};
