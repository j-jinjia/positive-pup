import "./Navbar.scss";
import icon from "../../assets/images/footer-logo.svg";
import openMenu from "../../assets/svgs/hamburger-menu.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    console.log("handle");
    setShowMenu(!showMenu);
  };

  const menuIcon = showMenu ? closeMenu : openMenu;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";

  const navJSX = (
    <>
      <nav className="navbar__nav">
        <a className="navbar__nav-item" href="positive-pup/">
          Home
        </a>
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
        <a className="navbar__nav-item" href="get-in-touch">
          Get in Touch
        </a>
        <a className="navbar__nav-item" href="book-now">
          Book Now
        </a>
      </nav>
    </>
  );

  const navbarJSX = (
    <>
      <div className={navbarClass}>
        <div className="navbar__container">
          <img
            src={icon}
            className="navbar__container-logo"
            alt="The Positive Pup logo"
          />
          <button onClick={handleClick} className="navbar__container-button">
            <img
              src={menuIcon}
              className="navbar__container-button-image"
              alt="Open site menu"
            />
          </button>
          {/* {windowWidth > 600 && showMenu && navJSX} */}
        </div>
        {/* {windowWidth < 600 && showMenu && navJSX} */}
        {showMenu && navJSX}
      </div>
    </>
  );

  return navbarJSX;
};

export default Navbar;
