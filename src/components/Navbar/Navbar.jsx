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

  return (
    <nav className={navbarClass}>
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
      </div>
    </nav>
  );
};

export default Navbar;
