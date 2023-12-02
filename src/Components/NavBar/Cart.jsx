import styles from '../Styles/Cart.module.css';
import { useParams } from 'react-router-dom';
import { images } from '../Data/Data';
import { useState } from 'react';

const Cart = ({ onClose, showPopUp, handleOverlayClick }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  let { id } = useParams();
  const product = images.find((image) => image.id == id);

  const decreaseItem = () => {
    if (numberOfItems === 1) return;
    setNumberOfItems(numberOfItems - 1);
  };

  const increaseItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.popup} ${showPopUp ? '' : styles.slideOut}`}>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
        <div className={styles.popupInner}>
          <h2 className={styles.cart}>Cart</h2>
          <br />
          <hr />
          <br />
          <div className={styles.items}>
            <img src="../../../img/1.png" alt="" height={'150px'} />
            <div>
              <h4>Name of Clothing</h4>
              <div className={styles.increment}>
                <button className={styles.btn} onClick={decreaseItem}>
                  -
                </button>
                <div className={styles.number}>{numberOfItems}</div>
                <button className={styles.btn} onClick={increaseItem}>
                  +
                </button>
              </div>
            </div>
            <div>
              <button className={styles.closeBtn}>X</button>
              <p>$35.99 </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Subtotal</p>
            <p>$0</p>
          </div>
          <button onClick={onClose}>CONTINUE SHOPPING</button>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
