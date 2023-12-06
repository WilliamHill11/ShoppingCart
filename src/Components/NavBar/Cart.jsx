import styles from '../Styles/Cart.module.css';
import { useCart } from './Pages/CartContext';

const Cart = ({ onClose, showPopUp, handleOverlayClick }) => {
  const { cartItems, removeFromCart, setCartItems } = useCart();

  const decreaseItem = (itemId, size) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.size === size
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCartItems([...updatedCart]); // Create a new array
  };

  const increaseItem = (itemId, size) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems([...updatedCart]); // Create a new array
  };

  const removeFromCartHandler = (itemId, size) => {
    removeFromCart(itemId, size);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
        <div className={styles.popupInner}>
          <div className={styles.center}>
            <h2 className={styles.cart}>Cart({totalItems})</h2>
            <button onClick={onClose} className={styles.closeBtn}>
              X
            </button>
          </div>
          <br />
          <hr />
          <br />
          <div className={styles.container}>
            {cartItems.map((item, index) => (
              <div key={`${item.id} ${item.size}`}>
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
                        onClick={() => decreaseItem(item.id, item.size)}
                      >
                        -
                      </button>
                      <div className={styles.number}>{item.quantity}</div>
                      <button
                        className={styles.btn}
                        onClick={() => increaseItem(item.id, item.size)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.separatePrice}>
                    <button
                      onClick={() => removeFromCartHandler(item.id, item.size)}
                      className={styles.closeBtn}
                    >
                      X
                    </button>
                    <p>${calculateItemTotal(item).toFixed(2)}</p>
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
            <p>${calculateSubtotal().toFixed(2)}</p>
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
