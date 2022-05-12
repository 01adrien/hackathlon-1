import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';
import '../styles/footer.css';
import jetree from '../assets/jetree.png';

export const Header = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/" className={styles.logohome}>
          <img src={jetree} className={styles.logotree} alt="my-logo" />
        </Link>
      </nav>
    </div>
  );
};
