import { NavLink } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';

const NavBar = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '2.5px',
  };

  return (
    <div className={styles.navBar}>
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
      <img src="../img/addtocart.svg" alt="" />
    </div>
  );
};

export default NavBar;
