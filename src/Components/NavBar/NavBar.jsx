import { Link, NavLink } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';

const NavBar = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '2.5px',
  };

  return (
    <div className={styles.navBar}>
      <Link to={'/'}>
        <img src="../../../img/logo.png" alt="" width={'250px'} />
      </Link>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        About
      </NavLink>
      <div className={styles.cart}>
        <div className={styles.borderBox}>
          <input type="search" className={styles.searchIcon} />
        </div>
        <div className={styles.borderBox}>
          <img
            src="../../../../img/cart.png"
            alt=""
            width={'20px'}
            height={'20px'}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
