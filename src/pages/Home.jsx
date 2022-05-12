import React, { useState } from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (category) => {
    navigate(`/result/${category}`, {
      replace: true,
    });
  };

  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div>
      <div className={show ? 'popup' : 'popup-hide'}>
        <p className="popup-text">
          Bienvenue sur JeTree, l’appli qui t’aide à repérer la borne de
          collecte la plus proche de chez toi.
        </p>
        <button className="popup-button" onClick={handleClick}>
          Trouver une borne
        </button>
      </div>
      <div className={!show ? 'category-box' : 'category-box-hide'}>
        <h1 className='category-title'>Je veux jeter</h1>
      <select className='category-select' onChange={(e) => handleSelectCategory(e.target.value)}>
        <option value=''>Choix</option>
        <option value='verre'>Verre</option>
        <option value='dechetterie'>Décheterie</option>
        <option value='vetements'>Vêtements</option>
        <option value='compost'>Compost</option>
        </select>
      </div>
    </div>
  );
};
