import styles from '../Styles/Cart.module.css';
import { useParams } from 'react-router-dom';
import { images } from '../Data/Data';
import { useState } from 'react';
import { useCart } from './Pages/CartContext';

const Cart = ({ onClose, showPopUp, handleOverlayClick }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const { cartItems, removeFromCart, setCartItems } = useCart();
  // let { id } = useParams();
  // const product = images.find((image) => image.id == id);

  const decreaseItem = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    // removeFromCart(itemId);
    setCartItems(updatedCart);
  };

  const increaseItem = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    // removeFromCart(itemId);
    setCartItems(updatedCart);
  };

  const removeFromCartHandler = (itemId) => {
    removeFromCart(itemId);
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
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.picture} alt={item.size} height={'150px'} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
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
                    <div>
                      <button
                        onClick={() => removeFromCartHandler(item.id)}
                        className={styles.closeBtn}
                      >
                        X
                      </button>
                      <p>{item.price}</p>
                    </div>
                  </div>
                  {/* <p>{item.size}</p> */}
                  {/* <p>{item.quantity}</p> */}
                  {/* <p>{item.price}</p> */}
                </li>
              ))}
            </ul>
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
