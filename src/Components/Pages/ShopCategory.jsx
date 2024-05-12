// // src/Components/Pages/ShopCategory.jsx

// import React, { useContext } from 'react';
// import './Css/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../../assets/dropdown_icon.png';
// import Item from '../Item/Item';

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
 
//   return (
//     <div className="shop-category">
//       <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />

//       <div className="shopCategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of {all_product?.length || 0} products
//         </p>
//         <div className="ShopCategory-sort">
//           Sort by <img src={dropdown_icon} alt="Sort" />
//         </div>
//       </div>

//       <div className="ShopCategory-Product">
//         {all_product
//           .filter(product => product.category === props.category)
//           .map((product, i) => (
//             <Item
//               key={i}
//               id={product.id}
//               name={product.name}
//               img={product.image}
//               new_price={product.new_price}
//               old_price={product.old_price}
//             />
//           ))}
//       </div>
//       <div className="shopcategory-loadmore">
//         Explore More
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;
// src/Components/Pages/ShopCategory.jsx

import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../../assets/dropdown_icon.png';
import Item from '../Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product?.length || 0} products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort" />
        </div>
      </div>

      <div className="shopCategory-product">
        {all_product
          .filter(product => product.category === props.category)
          .map((product, i) => (
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

export default ShopCategory;
