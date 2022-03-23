import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.svg";
import facebookLogo from "../../assets/images/facebook-logo.svg";
import instagramLogo from "../../assets/images/instagram-logo.svg";

const Footer = () => {
  const tAndCs = "T&C's";
  const termsAndConditions = "Terms & Conditions";
  const faqs = "FAQ's";

  return (
    <div className="footer">
      <div className="footer__image-container">
        <img className="footer__logo" src={logo} alt="logo" />
      </div>

      <ul className="footer__links-container">
        <li className="footer__list-item">
          <Link className="footer__link" to="/about">
            About
          </Link>
        </li>

        <li className="footer__list-item">
          <Link className="footer__link" to="/services">
            Services
          </Link>
        </li>

        <li className="footer__list-item">
          <Link className="footer__link" to="/gallery">
            Gallery
          </Link>
        </li>

        <li className="footer__list-item terms-long">
          <Link className="footer__link" to="/terms-and-conditions">
            {termsAndConditions}
          </Link>
        </li>

        <li className="footer__list-item terms-short">
          <Link className="footer__link" to="/terms-and-conditions">
            {tAndCs}
          </Link>
        </li>

        <li className="footer__list-item">
          <Link className="footer__link" to="/faqs">
            {faqs}
          </Link>
        </li>

        <li className="footer__list-item">
          <Link className="footer__link" to="/get-in-touch">
            Contact
          </Link>
        </li>
      </ul>
      <hr className="footer__line-break"></hr>

      <div className="footer__secondary-links-container">
        <div className="footer__copyright-text">
          &copy; 2022 The Positive Pup. All rights reserved.
        </div>
        <div className="footer__social-links">
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
