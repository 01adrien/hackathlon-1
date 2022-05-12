import React from 'react';
import { Popup } from '../components/Popup';
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (category) => {
    navigate(
      `/result/${category}`,
      {
        replace: true,
      }
    )
  }

  return (
    <div>
      <Popup />
      <div className='category-box'>
        <h1 className='category-title'>Je veux jeter</h1>
      <select className='category-select' onChange={(e) => handleSelectCategory(e.target.value)}>
        <option value=''>Choix</option>
        <option value='verre'>Verre</option>
        <option value='dechet'>Décheterie</option>
        <option value='vetement'>Vêtements</option>
        <option value='compost'>Composte</option>
        </select>
      </div>
    </div>
  )
}
