import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'

import hand_icon from '../../assets/hand_icon.png';
 import arrow from '../../assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
     <h2>NEEW ARIVALS ONLY</h2>
     <div>
        <div className="hero-hand-icon">
            <p>new</p>
           
               <img src={hand_icon} alt="hand" /> 
        </div>
        <p>Collection</p>
        <p>for everyone</p>
     </div>
     <div className="hero-latest-btn">
        <div>latest Collection</div>
        <img src={arrow} alt="arrow" /> 
     </div>
      </div>
      <div className="hero-right">
     <img src={hero_image} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero
