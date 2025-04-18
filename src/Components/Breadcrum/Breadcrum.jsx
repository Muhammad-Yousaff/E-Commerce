import React from 'react';
import './Breadcrum.css';
import breadcrum_arrow from '../../assets/breadcrum_arrow.png';


const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='breadcrum'>
      Home <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
