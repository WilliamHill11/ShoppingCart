import styles from '../../Styles/ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h2>404</h2>
      <p>Page Not Found</p>
    </div>
  );
};

export default ErrorPage;
