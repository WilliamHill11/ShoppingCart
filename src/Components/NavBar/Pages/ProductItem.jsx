import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { images } from '../../Data/Data';
import styles from '../../Styles/ProductItem.module.css';

const ProductItem = () => {
  const [activeButton, setActiveButton] = useState('Size 1');
  let { id } = useParams();

  const product = images.find((image) => image.id == id);

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
        <p>
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
      </div>
    </div>
  );
};

export default ProductItem;
