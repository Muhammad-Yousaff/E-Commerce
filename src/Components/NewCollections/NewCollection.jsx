// NewCollection.js
import React from 'react';
import './NewCollection.css';
import new_collections from '../../assets/new_collections'; // Make sure this is an array!
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((product, i) => (
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

export default NewCollection;
