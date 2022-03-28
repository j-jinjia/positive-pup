import "./Navbar.scss";
import icon from "../../assets/images/footer-logo.svg";
import openMenu from "../../assets/svgs/hamburger-menu.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import phone from "../../assets/svgs/phone.svg";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [windowIsDesktop, setwindowIsDesktop] = useState(
    window.innerWidth > 1024
  );

  const handleResize = () => {
    setwindowIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const navJSX = (
    <>
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
          <NavLink className="navbar__nav-item" to="/get-in-touch">
            <img src={phone} alt="" />
            Get in Touch
          </NavLink>
        ) : (
          <NavLink className="navbar__nav-item" to="/get-in-touch">
            Get in Touch
          </NavLink>
        )}
        {windowIsDesktop ? (
          <NavLink className="navbar__nav-item" to="/book-now">
            <Button buttonText="Book Now" />
          </NavLink>
        ) : (
          <NavLink
            className="navbar__nav-item navbar__nav-item--active"
            to="/book-now"
          >
            Book Now
          </NavLink>
        )}
      </nav>
    </>
  );

  const menuIcon = showMenu ? closeMenu : openMenu;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";
  const navbarJSX = (
    <>
      <div className={navbarClass}>
        <div className="navbar__container">
          <img
            src={icon}
            className="navbar__container-logo"
            alt="The Positive Pup logo"
          />
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
