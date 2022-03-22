import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.svg";
import facebookLogo from "../../assets/images/facebook-logo.svg";
import instagramLogo from "../../assets/images/instagram-logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__image-container">
        <img className="footer__image-container--logo" src={logo} alt="logo" />
      </div>

      <ul className="footer__links-container">
        <li>
          <Link className="footer__links-container--links" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="footer__links-container--links" to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link className="footer__links-container--links" to="/Gallery">
            Gallery
          </Link>
        </li>

        <li>
          <Link
            className="footer__links-container--links"
            to="/terms-and-conditions"
          >
            Terms and conditions
          </Link>
        </li>

        <li>
          <Link className="footer__links-container--links" to="/faqs">
            FAQs
          </Link>
        </li>

        <li>
          <Link className="footer__links-container--links" to="/get-in-touch">
            Contact
          </Link>
        </li>
      </ul>
      <hr></hr>

      <div className="footer__secondary-links-container">
        <div className="footer__secondary-links-container--copyright">
          &copy; 2022 The Positive Pup. All rights reserved.
        </div>
        <div className="footer__secondary-links-container--social-links">
          <a
            href="https://www.facebook.com/thepositivepupdogtraining"
            target="blank"
          >
            <img src={facebookLogo} alt="link to facebook" />
          </a>
          <a href="https://www.instagram.com/the_positivepup/" target="blank">
            <img src={instagramLogo} alt="link to instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
