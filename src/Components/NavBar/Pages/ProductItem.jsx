import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from './Products';

const ProductItem = () => {
  let { id } = useParams;

  return (
    <div>
      <div>
        <h2>Product Details for ID: {id}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
