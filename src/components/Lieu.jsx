/* eslint-disable react/prop-types */
import React from 'react'
import style from "../styles/lieu.module.css";
import logo from "../assets/jetree.png"

export const Lieu = ({ categorie, voie, code_postal, commune, markersRef, id}) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
    <div className={style.lieu} key={voie} onClick={() => markersRef.current[id].fire('click') && scrollToTop()}>
      <img src={logo} alt="" className={style.lieuImage}/>
      <div className={style.lieuDescription}>
        <h1 className={style.titre}>{categorie}</h1>
        <p className={style.lieuText}>{voie}</p>
        <p className={style.lieuText}>{code_postal}</p>
        <p className={style.lieuText}>{commune}</p>
      </div>
    </div>
    </>
  );
};
