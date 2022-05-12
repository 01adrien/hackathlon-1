import React from 'react';
import styles from '../styles/selection.module.css';
import { useNavigate } from 'react-router-dom';
import { FaGlassMartini, FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';

export const Sélection = () => {
  const navigate = useNavigate();

  const selection = (route) => {
    navigate(`/result/${route}`, {
      replace: true,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.verreContainer}>
        <button className={styles.verreBackground}>
          <FaGlassMartini onClick={() => selection('verre')} />
        </button>
        VERRE
      </div>

      <div className={styles.dechetterieContainer}>
        <button className={styles.dechetterieBackground}>
          <FaTrash />
        </button>
        DECHETTERIE
      </div>

      <div className={styles.vetementContainer}>
        <button className={styles.vetementBackground}>
          <FaTshirt />
        </button>
        VETEMENT
      </div>

      <div className={styles.compostContainer}>
        <button className={styles.compostBackground}>
          <RiPlantFill />
        </button>
        COMPOST
      </div>
    </div>
  );
};
