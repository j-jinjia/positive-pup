import "./Navbar.scss";
import logo from "../../assets/images/navbar-logo.png";
import openMenu from "../../assets/svgs/hamburger-menu.svg";
import dropdownArrow from "../../assets/svgs/dropdown-arrow.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import phone from "../../assets/svgs/phone.svg";
import { useState } from "react";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Link, NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize.js";
import { useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const windowIsDesktop = useWindowSize(1024);

  useEffect(() => {
    if (showMenu && windowIsDesktop) {
      setShowMenu(false);
    }
  }, [windowIsDesktop]);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const desktopNav = (
    <nav className="navbar__nav">
      <NavLink className="navbar__nav-item" to="/about">
        About
      </NavLink>
      <div className="navbar__nav-item navbar__nav-item--dropdown">
        <button className="navbar__nav-item-button" onClick={toggleDropdown}>
          Services
          <img src={dropdownArrow} className="navbar__nav-item-arrow" />
        </button>
        {showDropdown && <DropdownMenu toggleDropdown={toggleDropdown} />}
      </div>
      <span className="navbar__nav-item navbar__nav-item--phone">
        <img className="navbar__nav-item-button" src={phone} alt="" />
        <NavLink className="navbar__nav-item" to="/get-in-touch">
          Get in Touch
        </NavLink>
      </span>
      <Button
        className="navbar__nav-item"
        link={<Link to={"/book-now"}>Book Now</Link>}
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
            src={logo}
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
