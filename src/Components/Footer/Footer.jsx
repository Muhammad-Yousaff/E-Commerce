import React from 'react'
import logo_big from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import pintester_icon from '../../assets/pintester_icon.png';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo_big} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-link'>
         <li>Company</li>
         <li>Products</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
             <img src={instagram_icon} alt="" />

        </div>
        <div className="footer-icons-container">
             <img src={pintester_icon} alt="" />
             
        </div>
        <div className="footer-icons-container">
             <img src={whatsapp_icon} alt="" />
             
        </div>
       
      </div>
      <div className="footer-copyright">
        <hr />
         <p>Copyright @ 2024 - All Right Resverd. </p>
      </div>
    </div>
  )
}

export default Footer
