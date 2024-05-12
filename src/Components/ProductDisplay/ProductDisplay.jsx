import React from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  if (!product) return <p>Loading...</p>; // ✅ prevent crash when data not loaded yet

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="preview" />
          <img src={product.image} alt="preview" />
          <img src={product.image} alt="preview" />
          <img src={product.image} alt="preview" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="main product" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="dull star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}

          </div>
          <div className="productdisplay-right-prices-new"> ${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
  A lightweight, usually knitted pullover shirt that is close-fitting, with a round neckline and short sleeves, worn as an undershirt or outer garment.
</div>
<div className="productdisplay-right-size">
  <h1>Select Size</h1>
  <div className="productdisplay-right-sizes">
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXl</div>
  </div>
</div>
<button>ADD TO CART</button>
 <p className='productdisplay-right-category '><span>Category :</span>Women ,T-Shirt,Crop Top</p>
 <p className='productdisplay-right-category '><span>Tags :</span>Modern ,Latest</p>
      </div>
  

    </div>
  );
};

export default ProductDisplay;
