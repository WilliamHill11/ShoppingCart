import styles from '../Styles/PopUp.module.css';

const PopUp = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.popup} ${styles.active}`}>
        <div className={styles.popupInner}>
          <h2>Item added to bag!</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
