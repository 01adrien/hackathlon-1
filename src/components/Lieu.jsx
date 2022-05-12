import React from 'react';
import style from "../styles/lieu.module.css";
import logo from "../assets/jetree.png"

export const Lieu = () => {
  return (
    <>
    <div className={style.lieu}>
      <img src={logo} alt="" className={style.lieuImage}/>
      <div className={style.lieuDescription}>
        <p className={style.lieuText}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
      </div>
    </div>
    </>
  );
};
