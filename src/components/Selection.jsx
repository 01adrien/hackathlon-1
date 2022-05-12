import React from 'react'
import styles from '../styles/selection.module.css'
import { useNavigate } from 'react-router-dom';
import { GiCrackedGlass } from 'react-icons/gi';

export const Selection = () => {
  const navigate = useNavigate();

  const selection = (route) => {
    navigate(
      `/result/${route}`,
      {
        replace: true,
      }
    )
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.verre} >
        <button>Verre</button>
      <GiCrackedGlass onClick={() => selection('verre')} />
      <div>VERRE</div>
      </div>
      <div className={styles.verre}>
      <div>ICONE DECHETERIE</div>
      <div>DECHETERIE</div>
      </div>
      <div className={styles.verre}>
      <img onClick={() => selection('vetement')}></img>
      <div>TEXTILE</div>
      </div>
      <div className={styles.verre}>
      <div>ICONE COMPOST</div>
      <div>COMPOST</div>
      </div>
    </div>
  )
}
