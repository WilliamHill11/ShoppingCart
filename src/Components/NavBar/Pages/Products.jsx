import { images } from '../../Data/Data';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Products.module.css';

export const ProductCard = ({ image }) => {
  const { id, src, alt, width, height, price } = image;

  return (
    <>
      <Link to={`/products/${id}`}>
        <div className={styles.card}>
          <img src={src} alt={alt} width={width} height={height} />
          <h3>{alt}</h3>
          <p>
            --
            <i>${price}</i>--
          </p>
        </div>
      </Link>
    </>
  );
};

const ProductList = ({ images }) => {
  return (
    <div className={styles.cards}>
      {images.map((image) => (
        <ProductCard key={image.id} image={image} />
      ))}
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h2>Shop Collection</h2>
      <ProductList images={images} />
    </div>
  );
};
export default Products;
