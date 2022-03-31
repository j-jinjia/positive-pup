import "./Navbar.scss";
import icon from "../../assets/images/footer-logo.svg";
import openMenu from "../../assets/svgs/hamburger-menu.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import phone from "../../assets/svgs/phone.svg";
import { useState } from "react";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowIsDesktop = useWindowSize(1024);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const desktopNav = (
    <nav className="navbar__nav">
      <NavLink className="navbar__nav-item" to="/about">
        About
      </NavLink>
      <NavLink className="navbar__nav-item" to="/services">
        Services
      </NavLink>
      <NavLink className="navbar__nav-item" to="/testimonials">
        Testimonials
      </NavLink>
      <NavLink className="navbar__nav-item" to="/gallery">
        Gallery
      </NavLink>
      <span className="navbar__nav-item navbar__nav-item--phone">
        <img className="navbar__nav-item-button" src={phone} alt="" />
        <NavLink className="navbar__nav-item" to="/get-in-touch">
          Get in Touch
        </NavLink>
      </span>
      <Button
        className="navbar__nav-item"
        link="/book-now"
        buttonText="Book Now"
      />
    </nav>
  );

  const mobileNav = (
    <nav className="navbar__nav">
      <Link className="navbar__nav-item" to="/">
        Home
      </Link>
      <Link className="navbar__nav-item" to="/about">
        About
      </Link>
      <Link className="navbar__nav-item" to="/services">
        Services
      </Link>
      <Link className="navbar__nav-item" to="/testimonials">
        Testimonials
      </Link>
      <Link className="navbar__nav-item" to="/gallery">
        Gallery
      </Link>
      <Link className="navbar__nav-item" to="/get-in-touch">
        Get in Touch
      </Link>
      <Link
        className="navbar__nav-item navbar__nav-item--active"
        to="/book-now"
      >
        Book Now
      </Link>
    </nav>
  );

  const menuIcon = showMenu ? closeMenu : openMenu;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";
  const navbarJSX = (
    <div className={navbarClass}>
      <div className="navbar__container">
        <Link to="/">
          <img
            src={icon}
            className="navbar__container-logo"
            alt="The Positive Pup logo"
          />
        </Link>

        {windowIsDesktop ? (
          desktopNav
        ) : (
          <button onClick={handleClick} className="navbar__container-button">
            <img
              src={menuIcon}
              className="navbar__container-button-image"
              alt=""
            />
          </button>
        )}
      </div>
      {!windowIsDesktop && showMenu && mobileNav}
    </div>
  );

  return navbarJSX;
};

export default Navbar;