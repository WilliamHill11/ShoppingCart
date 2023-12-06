import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../Styles/NavBar.module.css';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ showPopUp, setShowPopUp, handleOverlayClick }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleCart = () => {
    setShowPopUp(true);
  };

  const handleCloseCart = () => {
    setShowPopUp(false);
  };

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '2.5px',
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navBarContainer}>
          <Link to={'/'}>
            <img
              className={styles.navBarLogo}
              src="../../../img/logo.png"
              alt=""
              width={'225px'}
              height={'85px'}
            />
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              className={styles.icon}
            />
          </div>
          <ul
            className={
              click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
            }
          >
            <li className={styles.navItem}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/products"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <div className={styles.cart}>
              <div className={styles.borderBox}>
                <input type="search" className={styles.searchIcon} />
              </div>
              <div
                className={styles.borderBoxCart}
                onClick={handleCart}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src="../../../../img/cart.png"
                  alt=""
                  width={'18px'}
                  height={'18px'}
                />
              </div>
              {showPopUp && (
                <Cart
                  onClose={handleCloseCart}
                  showPopUp={showPopUp}
                  handleOverlayClick={handleOverlayClick}
                />
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
