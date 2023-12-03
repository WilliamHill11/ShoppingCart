import styles from '../Styles/Cart.module.css';
import { useParams } from 'react-router-dom';
// import { images } from '../Data/Data';
import { useState } from 'react';
import { useCart } from './Pages/CartContext';

const Cart = ({ onClose, showPopUp, handleOverlayClick }) => {
  let { id } = useParams();
  const [numberOfItems, setNumberOfItems] = useState(1);
  const { cartItems, removeFromCart, setCartItems } = useCart();

  const decreaseItem = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const increaseItem = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCartHandler = (itemId) => {
    removeFromCart(itemId);
  };

  const calculateItemTotal = (item) => {
    if (!item || isNaN(item.price) || isNaN(item.quantity)) {
      console.error('Invalid item or missing price/quantity:', item);
      return 0;
    }
    return item.price * item.quantity;
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
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
          <div>
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <li className={styles.items}>
                  <img
                    src={item.picture}
                    alt={item.picture}
                    height={'175px'}
                    width={'175px'}
                  />
                  <div className={styles.separate}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>Size: {item.size}</p>
                    </div>
                    <div className={styles.increment}>
                      <button
                        className={styles.btn}
                        onClick={() => decreaseItem(item.id)}
                      >
                        -
                      </button>
                      <div className={styles.number}>{item.quantity}</div>
                      <button
                        className={styles.btn}
                        onClick={() => increaseItem(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCartHandler(item.id)}
                      className={styles.closeBtn}
                    >
                      X
                    </button>
                    <p className={styles.priceContainer}>{item.price}</p>
                  </div>
                </li>
                {index < cartItems.length - 1 && <hr />}
              </div>
            ))}
            <br />
          </div>
        </div>
        <div>
          <div className={styles.totalCost}>
            <p>Subtotal</p>
            <p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </p>
          </div>
          <button className={styles.continueShoppingBtn} onClick={onClose}>
            CONTINUE SHOPPING
          </button>
          <button className={styles.checkoutNowBtn}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
