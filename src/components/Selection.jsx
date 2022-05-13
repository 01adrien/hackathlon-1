import React, {useState} from 'react';
import styles from '../styles/selection.module.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaTshirt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { GiBrokenBottle } from 'react-icons/gi';
import { Formulaire } from './Formulaire';

export const Selection = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [selected, setSelected] = useState(false)
  // const [selectedDecheterie, setSelectedDecheterie] = useState(null)
  // const [selectedTextile, setSelectedTextile] = useState(null)
  // const [selectedCompost, setSelectedCompost] = useState(null)
  const navigate = useNavigate();

  const selectionButton = (route) => {
    setSelected(route)
    navigate(`/result/${route}`, {
      replace: true,
    });
  };

  // const selectionDecheterie = (route) => {
  //   setSelectedDecheterie(!selectedDecheterie)
  //   navigate(`/result/${route}`, {
  //     replace: true,
  //   });
  // };

  // const selectionTextile = (route) => {
  //   setSelectedTextile(!selectedTextile)
  //   navigate(`/result/${route}`, {
  //     replace: true,
  //   });
  // };

  // const selectionCompost = (route) => {
  //   setSelectedCompost(!selectedCompost)
  //   navigate(`/result/${route}`, {
  //     replace: true,
  //   });
  // };



  const handleForm = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <>
      <div className={styles.container}>
        <section className={selected === 'verre' ? styles.verreContainer2 : styles.verreContainer}>
          <button className={styles.verreBackground}>
            <GiBrokenBottle
              onClick={() => selectionButton('verre')}
              className={styles.button}
            />
          </button>
          VERRE
        </section>

        <section className={selected === 'decheterie' ? styles.verreContainer2 : styles.verreContainer}>
          <button className={styles.decheterieBackground}>
            <FaTrash
              onClick={() => selectionButton('decheterie')}
              className={styles.button}
            />
          </button>
          DECHETERIE
        </section>

        <section className={selected === 'vetements' ? styles.verreContainer2 : styles.verreContainer}>
          <button className={styles.vetementBackground}>
            <FaTshirt
              onClick={() => selectionButton('vetements')}
              className={styles.button}
            />
          </button>
          VETEMENT
        </section>

        <section className={selected === 'compost' ? styles.verreContainer2 : styles.verreContainer}>
          <button className={styles.compostBackground}>
            <RiPlantFill
              onClick={() => selectionButton('compost')}
              className={styles.button}
            />
          </button>
          <p>
          COMPOST
          </p>
        </section>
      </div>

      <div className={styles.pointContainer} onClick={handleForm}>AJOUTER MON POINT</div>
      {displayForm ? <Formulaire abortForm={() =>setDisplayForm(!displayForm)}/> : ''}
    </>
  );
};
