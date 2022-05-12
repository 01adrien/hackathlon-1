import React from 'react';
import "../styles/home.css";

export const Popup = () => {
  return (
    <div className='popup'>
        <p className='popup-text'>Bienvenue sur JeTree, 
l’appli qui t’aide à repérer la borne de collecte la plus proche de chez toi.</p>
        <button className='popup-button'>Trouver une borne</button>
    </div>
  )
}
