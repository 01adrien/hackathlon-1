import React from 'react';
import { Popup } from '../components/Popup';
import "../styles/home.css";

export const Home = () => {
  return (
    <div>
      <Popup />
      <div className='category-box'>
        <h1 className='category-title'>Je veux jeter</h1>
      <select className='category-select'>
        <option value="Verre">Verre</option>
        <option value="Décheterie">Décheterie</option>
        <option value="Vêtements">Vêtements</option>
        <option value="Compost">Compost</option>
        </select>
      </div>
    </div>
  )
}
