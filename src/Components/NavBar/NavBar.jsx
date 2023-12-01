import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';
import style from '../Styles/PopUp.module.css';
import PopUp from './PopUp';

const NavBar = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOverlayClick = (e) => {
    if (!e.target.classList.contains(style.overlay)) {
      handleClosePopUp();
    }
  };

  const handleImageClick = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click target is not within the popup
      if (showPopUp && !event.target.closest(`.${style.popup}`)) {
        handleClosePopUp();
      }
    };

    // Attach the event listener
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 100);

    // Clean up the event listener on component unmount
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showPopUp]);

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '2.5px',
  };

  return (
    <div className={styles.navBar}>
      <Link to={'/'}>
        <img
          src="../../../img/logo.png"
          alt=""
          width={'225px'}
          height={'85px'}
        />
      </Link>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className={styles.hoverNav}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className={styles.hoverNav}
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className={styles.hoverNav}
      >
        About
      </NavLink>
      <div className={styles.cart}>
        <div className={styles.borderBox}>
          <input type="search" className={styles.searchIcon} />
        </div>
        <div
          className={styles.borderBox}
          onClick={handleImageClick}
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
          <PopUp
            onClose={handleClosePopUp}
            showPopUp={showPopUp}
            handleOverlayClick={handleOverlayClick}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
