import React, { useState } from 'react';
import "../styles/home.css";

export const Home = () => {
  const [show, setShow] = useState(true);

    function handleClick() {
        setShow(!show)
    }
  return (
    <div>
      <div className={show ? 'popup' : 'popup-hide'}>
        <p className='popup-text'>Bienvenue sur JeTree, 
l’appli qui t’aide à repérer la borne de collecte la plus proche de chez toi.</p>
        <button className='popup-button' onClick={handleClick}>Trouver une borne</button>
      </div>
      <div className={!show ? 'category-box' : 'category-box-hide'}>
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
