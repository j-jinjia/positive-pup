import React from 'react'
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.svg";
import facebookLogo from "../../assets/images/facebook-logo.svg";
import instagramLogo from "../../assets/images/instagram-logo.svg";

const Footer = () => {

  const termsAndCondtions = "T&C's"

  return (
    <div className='footer'>
      <div className='footer__image-container'>
        <img className='footer__image-container--logo' src={logo} alt="logo" />
      </div>
      {/* <div className='footer__links-container'> */}
        <ul className='footer__links-container'>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>{termsAndCondtions}</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <hr></hr>
      {/* </div> */}
      <div className='footer__secondary-links-container'>
        <div className='footer__secondary-links-container--copyright'>2022 The Positive Pup. All rights reserved.</div>
        <div className='footer__secondary-links-container--social-links'>
          <img src={facebookLogo} alt="link to facebook" />
          <img src={instagramLogo} alt="link to instagram" />
        </div>
      </div>
    </div>
  )
}

export default Footer