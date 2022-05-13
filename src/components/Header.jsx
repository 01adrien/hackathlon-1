import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';
import '../styles/footer.css';
import jetree from '../assets/jetree.png';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.logohome}>
          <img src={jetree} className={styles.logotree} alt="my-logo" />
        </Link>
        <button
          type="button"
          className={styles.burger}
          onClick={handleShowMenu}
        >
          <GiHamburgerMenu className={styles.logoburger} alt="logoBurger" />
        </button>
      </div>
      <div className={showLinks ? styles.navMenu : styles.navMenuMobile}>
        <ul>
          <Link to="/" className={styles.route}>
            <li>Accueil</li>
          </Link>
          <Link to="/result/verre" className={styles.route}>
            <li>Carte interactive</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
