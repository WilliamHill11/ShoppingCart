import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { images } from '../../Data/Data';
import styles from '../../Styles/ProductItem.module.css';

const ProductItem = () => {
  let { id } = useParams();
  const [activeButton, setActiveButton] = useState('Size 1');
  const [itemInCart, setItemInCart] = useState([]);
  const [item, setItem] = useState(null);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const product = images.find((image) => image.id == id);

  const addItem = () => {
    setItem(product.alt);
  };

  useEffect(() => {
    setItemInCart([...itemInCart, item]);
    console.log(itemInCart);
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
    setNumberOfItems(numberOfItems - 1);
  };

  const increaseItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  return (
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
          <i>{product.price} CAD</i>
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
        <button className={styles.addToCart} onClick={addItem}>
          ADD TO CART
        </button>
        <div>
          <ul className={styles.description}>
            <li>100% Ringspun Cotton</li>
            <li>Heavyweight, 280gsm</li>
            <li>Unisex T-Shirt</li>
            <li>DTG Printing</li>
            <li>Pre-Shrunk</li>
            <li>Round Neck</li>
            <li>Double Stitched Collar & Sleeves</li>
            <li>{itemInCart}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
