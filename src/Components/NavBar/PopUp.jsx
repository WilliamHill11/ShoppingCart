import styles from '../Styles/PopUp.module.css';

const PopUp = ({ onClose, showPopUp, handleOverlayClick }) => {
  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.popup} ${showPopUp ? '' : styles.slideOut}`}>
        <div className={styles.popupInner}>
          <h2>Item added to bag!</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
