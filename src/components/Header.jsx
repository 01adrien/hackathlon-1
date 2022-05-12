import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';
import '../styles/footer.css';
import jetree from '../assets/jetree.png';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  // const [showLinks, setShowLinks] = useState(false);

  // const handleShowMenu = () => {
  //   setShowLinks(!showLinks);
  // };

  return (
    <nav className="">
      <div className={styles.navbar}>
        <div>
          {' '}
          <Link to="/" className={styles.logohome}>
            <img src={jetree} className={styles.logotree} alt="my-logo" />
          </Link>
        </div>
        <div>
          <GiHamburgerMenu className={styles.logoburger} />
        </div>
      </div>
      <ul className="burgerMenu">
        <Link to="/" className="routeHome">
          <li>Accueil</li>
        </Link>
        <Link to="/Map" className="routeMap">
          <li>Carte interactive</li>
        </Link>
      </ul>
    </nav>
  );
};
