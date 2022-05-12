import React from 'react';
import styles from '../styles/selection.module.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { GiBrokenBottle } from 'react-icons/gi';

export const Sélection = () => {
  const navigate = useNavigate();

  const selection = (route) => {
    navigate(`/result/${route}`, {
      replace: true,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.verreContainer}>
          <button className={styles.verreBackground}>
            <GiBrokenBottle
              onClick={() => selection('verre')}
              className={styles.button}
            />
          </button>
          VERRE
        </section>

        <section className={styles.decheterieContainer}>
          <button className={styles.decheterieBackground}>
            <FaTrash
              onClick={() => selection('decheterie')}
              className={styles.button}
            />
          </button>
          DECHETERIE
        </section>

        <section className={styles.vetementContainer}>
          <button className={styles.vetementBackground}>
            <FaTshirt
              onClick={() => selection('vetement')}
              className={styles.button}
            />
          </button>
          VETEMENT
        </section>

        <section className={styles.compostContainer}>
          <button className={styles.compostBackground}>
            <RiPlantFill
              onClick={() => selection('compost')}
              className={styles.button}
            />
          </button>
          COMPOST
        </section>
      </div>

      <div className={styles.pointContainer}>AJOUTER MON POINT</div>
    </>
  );
};
