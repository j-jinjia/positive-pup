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

  const navJSX = (
    <nav className="navbar__nav">
      {!windowIsDesktop && (
        <NavLink className="navbar__nav-item" to="/">
          Home
        </NavLink>
      )}
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

      {windowIsDesktop ? (
        <span className="navbar__nav-item">
          {" "}
          <img className="navbar__nav-item-button" src={phone} alt="" />
          <NavLink className="navbar__nav-item" to="/get-in-touch">
            Get in Touch
          </NavLink>
        </span>
      ) : (
        <NavLink className="navbar__nav-item" to="/get-in-touch">
          Get in Touch
        </NavLink>
      )}
      {windowIsDesktop ? (
        <Link className="navbar__nav-item" to="/book-now">
          <Button buttonText="Book Now" />
        </Link>
      ) : (
        <Link
          className="navbar__nav-item navbar__nav-item--active"
          to="/book-now"
        >
          Book Now
        </Link>
      )}
    </nav>
  );

  const menuIcon = showMenu ? closeMenu : openMenu;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";
  const navbarJSX = (
    <>
      <div className={navbarClass}>
        <div className="navbar__container">
          <Link to="/">
            <img
              src={icon}
              className="navbar__container-logo"
              alt="The Positive Pup logo"
            />
          </Link>

          {!windowIsDesktop && (
            <button onClick={handleClick} className="navbar__container-button">
              <img
                src={menuIcon}
                className="navbar__container-button-image"
                alt="Open site menu"
              />
            </button>
          )}
          {/* big screen */}
          {windowIsDesktop && navJSX}
        </div>
        {!windowIsDesktop && showMenu && navJSX}
      </div>
    </>
  );

  return navbarJSX;
};

export default Navbar;
