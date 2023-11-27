import { images } from '../../Data/Data';
import styles from '../../Styles/Products.module.css';

const ProductCard = ({ image }) => {
  const { src, alt, width, height, price } = image;

  return (
    <div className={styles.card}>
      <img src={src} alt={alt} width={width} height={height} />
      <h3>{alt}</h3>
      <p>{price}</p>
    </div>
  );
};

const ProductList = ({ images }) => {
  return (
    <div className={styles.cards}>
      {images.map((image, index) => (
        <ProductCard key={index} image={image} />
      ))}
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h2>Shop</h2>
      <ProductList images={images} />
    </div>
  );
};
export default Products;
