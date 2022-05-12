import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import { Result } from '../pages/Result';

export const Main = () => {
  return (
    <div className='main'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/result" element={<Result />} />
    </Routes>
    </div>
  )
}
