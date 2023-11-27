import { images } from '../../Data/Data';
import styles from '../../Styles/Products.module.css';

const Products = () => {
  return (
    <div>
      <h2>Shop </h2>
      {images.map((image) => {
        console.log(image);
        let img = image.src;
        let name = image.alt;
        let width = image.width;
        let height = image.height;
        return (
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={img} alt={name} width={width} height={height} />
              <h2>{name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
