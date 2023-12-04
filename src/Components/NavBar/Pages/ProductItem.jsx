import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { images } from '../../Data/Data';
import styles from '../../Styles/ProductItem.module.css';
import { useCart } from './CartContext';
import Cart from '../Cart';

const ProductItem = ({ showPopUp }) => {
  let { id } = useParams();
  const { addToCart } = useCart();
  const [activeButton, setActiveButton] = useState('Size 1');
  const [itemInCart, setItemInCart] = useState([]);
  const [item, setItem] = useState(null);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const product = images.find((image) => image.id == id);

  const sizeMapping = {
    'Size 1': 'XS',
    'Size 2': 'S',
    'Size 3': 'M',
    'Size 4': 'L',
    'Size 5': 'XL',
    'Size 6': 'XXL',
  };

  const addItemToCart = () => {
    const selectedSize = sizeMapping[activeButton];

    if (!selectedSize) {
      console.error('Invalid size mapping');
      return;
    }

    const item = {
      id: product.id,
      name: product.alt,
      picture: product.src,
      size: selectedSize,
      quantity: numberOfItems,
      price: product.price,
    };
    addToCart(item);
    setItemInCart(selectedSize);
    setShowCartPopup(true);
  };

  useEffect(() => {
    setItemInCart((prevItemInCart) => [...prevItemInCart, item]);
  }, [item]);

  if (!product) {
    return (
      <div>
        <h2 className={styles.title}>Product not found for ID: {id}</h2>
      </div>
    );
  }

  const handleButtonClick = (size) => {
    setActiveButton(size);
  };

  const decreaseItem = () => {
    if (numberOfItems === 1) return;
    setNumberOfItems((prevItems) => prevItems - 1);
  };

  const increaseItem = () => {
    setNumberOfItems((prevItems) => prevItems + 1);
  };

  return (
    <>
      <Link to={'/products'}>
        <h3 className={styles.back}>Back to Products...</h3>
      </Link>
      <div className={styles.product}>
        {id > 4 && id < 9 ? (
          <img
            src={product.src}
            alt={product.alt}
            width={'475px'}
            height={'600px'}
          />
        ) : (
          <img
            src={product.src}
            alt={product.alt}
            width={'600px'}
            height={'600px'}
          />
        )}
        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.alt}</h2>
          <p className={styles.productDetailFont}>
            <i> ${product.price} CAD</i>
          </p>
          <p className={styles.worldWide}>
            {'>>'} WORLDWIDE SHIPPING & 30-DAY RETURNS {' <<'}
          </p>
          <div className={styles.sizeButtons}>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 1' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 1')}
            >
              XS
            </div>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 2' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 2')}
            >
              S
            </div>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 3' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 3')}
            >
              M
            </div>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 4' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 4')}
            >
              L
            </div>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 5' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 5')}
            >
              XL
            </div>
            <div
              className={`${styles.sizeButton} ${
                activeButton === 'Size 6' ? styles.active : ''
              }`}
              onClick={() => handleButtonClick('Size 6')}
            >
              XXL
            </div>
          </div>
          <div className={styles.inStock}>
            <div className={styles.stockStatus}></div>
            <p className={styles.inStockText}>IN STOCK</p>
          </div>
          <div className={styles.increment}>
            <button className={styles.btn} onClick={decreaseItem}>
              -
            </button>
            <div className={styles.number}>{numberOfItems}</div>
            <button className={styles.btn} onClick={increaseItem}>
              +
            </button>
          </div>
          <button className={styles.addToCart} onClick={addItemToCart}>
            ADD TO CART
          </button>
          {showCartPopup && <Cart onClose={() => setShowCartPopup(false)} />}
          <div>
            <ul className={styles.description}>
              <li>100% Ringspun Cotton</li>
              <li>Heavyweight, 280gsm</li>
              <li>Unisex T-Shirt</li>
              <li>DTG Printing</li>
              <li>Pre-Shrunk</li>
              <li>Round Neck</li>
              <li>Double Stitched Collar & Sleeves</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
