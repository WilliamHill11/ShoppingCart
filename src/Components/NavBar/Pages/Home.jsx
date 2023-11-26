import styles from '../../Styles/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h2 className={styles.title}>Welcome Saiyan Warriors</h2>
        <Link to={'/products'}>SHOP NOW</Link>
      </div>
      <img src="../../../../img/home.jpg" alt="" />
    </div>
  );
};

export default Home;
