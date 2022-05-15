/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import style from "../styles/lieu.module.css";
import '../styles/icon.css'
import { FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { GiBrokenBottle } from 'react-icons/gi';

export const Lieu = ({ categorie, voie, code_postal, commune, markersRef, id, nom}) => {
  let image = null;
  <FaTrash />

  const cat = ['Verre', 'Compost', 'Vetements', 'Decheterie']
  const icon = [ <GiBrokenBottle key={1} className='button'/>, <RiPlantFill key={2} className='button'/>, 
                <FaTshirt key={3} className='button'/>, <FaTrash key={4} className='button'/> ]
  const cssClass = [['verreContainer', 'verreBackground'], ['decheterieContainer', 'decheterieBackground'], 
                    ['vetementContainer', 'vetementBackground'], ['compostContainer','compostBackground']]

  for (let i = 0; i < cat.length; i++) {
    if (categorie === cat[i]) {
      image = <section className={cssClass[i][0]}>
                <button className={cssClass[i][1]}>
                  {icon[i]}
                </button>
              </section>
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
    <div className={style.lieu} key={voie} onClick={() => markersRef.current[id].fire('click') && scrollToTop()}>
      <div className={style.lieuImage}>{image}</div>
      <div className={style.lieuDescription}>
        <h1 className={style.titre}>{nom}</h1>
        <p className={style.lieuText}>{voie}</p>
        <p className={style.lieuText}>{code_postal}</p>
        <p className={style.lieuText}>{commune}</p>
      </div>
    </div>
    </>
  );
};
