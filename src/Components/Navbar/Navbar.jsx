import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartAmount()}</div>
      </div>
    </div>
  );
};

export default Navbar;
