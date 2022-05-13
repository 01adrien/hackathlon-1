/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import style from "../styles/lieu.module.css";
import iconStyle from '../styles/selection.module.css'
import logo from "../assets/jetree.png"
import { FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { GiBrokenBottle } from 'react-icons/gi';

export const Lieu = ({ categorie, voie, code_postal, commune, markersRef, id, nom}) => {
  console.log(categorie)
  let image = null;
  if (nom === 'Recup Verre') {
    image = <section className={iconStyle.verreContainer}>
              <button className={iconStyle.verreBackground}>
                <GiBrokenBottle
                  className={iconStyle.button}
                />
              </button>
            </section>
  }
  if (categorie === 'Bornes à compost') {
    image = <section className={iconStyle.decheterieContainer}>
              <button className={iconStyle.decheterieBackground}>
                <RiPlantFill
                  className={iconStyle.button}
                />
              </button>
            </section>
  }
  if (categorie === 'Collecte vetements') {
    image = <section className={iconStyle.vetementContainer}>
              <button className={iconStyle.vetementBackground}>
                <FaTshirt
                  className={iconStyle.button}
                />
              </button>
            </section>
  }
  if (categorie.startsWith('D')) {
    image = <section className={iconStyle.compostContainer}>
              <button className={iconStyle.compostBackground}>
                <FaTrash
                  className={iconStyle.button}
                />
              </button>
            </section>
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
        <h1 className={style.titre}>{categorie}</h1>
        <p className={style.lieuText}>{voie}</p>
        <p className={style.lieuText}>{code_postal}</p>
        <p className={style.lieuText}>{commune}</p>
      </div>
    </div>
    </>
  );
};
