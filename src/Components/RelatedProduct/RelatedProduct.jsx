import React from 'react';
import './RelatedProduct.css';
import data_product from '../../assets/data'; // Corrected path
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_product.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            img={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
