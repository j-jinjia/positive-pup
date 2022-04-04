import "./ServicesSearchBar.scss";
import searchIcon from "../../assets/svgs/searchBarIcon.svg";

const ServicesSearchBar = ({ searchTerm, handleInput }) => {
  return (
    <div className="search-box">
      <input
        className="search-box__input"
        type="text"
        value={searchTerm}
        onChange={handleInput}
      />
      <img
        className="search-box__input--icon"
        src={searchIcon}
        alt="search icon"
      />
    </div>
  );
};

export default ServicesSearchBar;
