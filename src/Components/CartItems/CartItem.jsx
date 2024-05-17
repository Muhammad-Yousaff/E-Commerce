import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../Context/ShopContext'
import cart_cross_icon from '../../assets/cart_cross_icon.png';
 
const CartItem = () => {
const{getTotalCartAmount,all_product,cartItems,removeFormCart}=useContext(ShopContext)

  return (
    <div className='cartitem'>
    <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        

    </div>
    <hr />
    {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className="cartitem-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
             <p>{e.name}</p>
             <p>{e.new_price}</p>
             <button className='cartitem-quantity'> {cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartitem-remove-item' src={cart_cross_icon} alt="" onClick={()=>{removeFormCart(e.id)}} />
            </div>
            <hr /> 
        </div>
        }
        return null;
    })}
    <div className="cartitems-down">
      <div className="cartitem-total">
        <h1>cart totals</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtatal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
      <p>if you have a promo code, Enter it here</p>
      <div className="cartitem-promobox">
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
      </div>
      
        
              </div>
    </div>
    </div>
  )
}

export default CartItem