import "./Navbar.scss";
import icon from "../../assets/images/footer-logo.svg";
import openMenu from "../../assets/svgs/hamburger-menu.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import phone from "../../assets/svgs/phone.svg";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

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
          <a className="navbar__nav-item" href="positive-pup/">
            Home
          </a>
        )}
        <a className="navbar__nav-item" href="about">
          About
        </a>
        <a className="navbar__nav-item" href="services">
          Services
        </a>
        <a className="navbar__nav-item" href="testimonials">
          Testimonials
        </a>
        <a className="navbar__nav-item" href="gallery">
          Gallery
        </a>
        {windowIsDesktop ? (
          <a className="navbar__nav-item" href="get-in-touch">
            <img src={phone} alt="" /> Get in Touch
          </a>
        ) : (
          <a className="navbar__nav-item" href="get-in-touch">
            Get in Touch
          </a>
        )}
        {windowIsDesktop ? (
          <a className="navbar__nav-item" href="book-now">
            <Button buttonText="Book Now" />
          </a>
        ) : (
          <a
            className="navbar__nav-item navbar__nav-item--active"
            href="book-now"
          >
            Book Now
          </a>
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
