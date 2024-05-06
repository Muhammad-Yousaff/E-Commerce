// import React from 'react'
// import './Popular.css'
// import data_product from '../../assets/data';
// import Item from '../Item/Item';
// const Popular = () => {
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr /> 
//       <div className="popular-item">
//         {data_product.map((Item,i)=>{
//             return <Item key={i} id={Item.id} name={Item.name} image={Item.image} new_price={Item.new_price} old_price={Item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Popular
import React from 'react'
import './Popular.css'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr /> 
      <div className="popular-item">
        {data_product.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              name={product.name}
              img={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular
