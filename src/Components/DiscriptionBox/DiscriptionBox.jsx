import React from 'react';
import './DiscriptionBox.css';

const DiscriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptiobox-navigator">
        <div className="discription-nav-box">Description</div>
        <div className="discription-nav-fade">Reviews</div>
      </div>

      <div className="discriptionbox-description">
        <p>
          An e-commerce platform is an online system that facilitates the buying and selling of goods and services over the internet. It provides users with features such as product listings, shopping carts, secure payment gateways, and order management tools to streamline online transactions.
        </p>
        <p>
          These platforms enable businesses to establish and manage online stores, enhancing user experience and supporting various business models, including B2B, B2C, and C2C.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
