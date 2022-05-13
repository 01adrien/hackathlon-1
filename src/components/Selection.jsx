import React, {useState} from 'react';
import styles from '../styles/selection.module.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { GiBrokenBottle } from 'react-icons/gi';
import { Formulaire } from './Formulaire';

export const Selection = () => {
  const navigate = useNavigate();

  const selection = (route) => {
    navigate(`/result/${route}`, {
      replace: true,
    });
  };

  const [displayForm, setDisplayForm] = useState(false);

  const handleForm = () => {
    setDisplayForm(!displayForm)
  }

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
              onClick={() => selection('dechetterie')}
              className={styles.button}
            />
          </button>
          DECHETERIE
        </section>

        <section className={styles.vetementContainer}>
          <button className={styles.vetementBackground}>
            <FaTshirt
              onClick={() => selection('vetements')}
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

      <div className={styles.pointContainer} onClick={handleForm}>AJOUTER MON POINT</div>
      {displayForm ? <Formulaire/> : ''}
    </>
  );
};
