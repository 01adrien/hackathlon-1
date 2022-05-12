import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sélection } from '../components/Sélection';
import { Home } from '../pages/Home';
import { Result } from '../pages/Result';

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:category" element={<Result />} />
        <Route path="/result" element={<Result />} />
        <Route path="/selection" element={<Sélection />} />
      </Routes>
    </div>
  );
};
