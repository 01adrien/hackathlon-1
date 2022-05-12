import React, { useState } from 'react';
import styles from '../styles/formulaire.module.css';

export const Formulaire = () => {
  const [rue, setRue] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [cat, setCat] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRue('');
    setLat('');
    setLong('');
    setCat('');
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1 className={styles.h1Form}>ajout d&apos;une borne</h1>
        <label htmlFor="namePoint" className={styles.selectContainer}>
          <select
            id="namePoint"
            defaultValue={'default'}
            className={styles.selectOption}
            required
          >
            <option value={'default'} disabled>
              nom du point
            </option>
            <option value={'recupverre'}>Recup Verre</option>
          </select>
        </label>

        <label htmlFor="catPoint" className={styles.selectContainer}>
          <select
            id="catPoint"
            className={styles.selectOption}
            value={cat}
            defaultValue={'default'}
            onChange={(e) => setCat(e.target.value)}
            required
          >
            <option value={'default'} disabled>
              catégorie du point
            </option>
            <option value={'verre'}>Verre</option>
          </select>
        </label>

        <label htmlFor="ruePoint" className={styles.selectContainer}>
          <input
            type="text"
            name="rue"
            id="ruePoint"
            placeholder="adresse du point"
            autoComplete="off"
            className={styles.inputOption}
            value={rue}
            onChange={(e) => setRue(e.target.value)}
            required
          />
        </label>

        <label htmlFor="arrPoint" className={styles.selectContainer}>
          <select
            id="arrPoint"
            defaultValue={'default'}
            className={styles.selectOption}
            required
          >
            <option value={'default'} disabled>
              arrondissement du point
            </option>
            <option value="1e arrondissement">1e arrondissement</option>
          </select>
        </label>

        <label htmlFor="latPoint" className={styles.selectContainer}>
          <input
            type="text"
            name="lat"
            id="latPoint"
            placeholder="latitude du point"
            autoComplete="off"
            className={styles.inputOption}
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </label>

        <label htmlFor="longPoint" className={styles.selectContainer}>
          <input
            type="text"
            name="lat"
            id="longPoint"
            placeholder="longitude du point"
            autoComplete="off"
            className={styles.inputOption}
            value={long}
            onChange={(e) => setLong(e.target.value)}
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          ENVOYER
        </button>
      </form>
    </div>
  );
};
