import "./SearchBar.scss";
import searchIcon from "../../assets/svgs/searchBarIcon.svg";

const ServicesSearchBar = ({ searchTerm, handleInput }) => {
  return (
    <div className="search-box">
      <label htmlFor="search-box">
      <input
        className="search-box__input"
        type="text"
        value={searchTerm}
        onChange={handleInput}
      />
      </label>
     
      <img
        className="search-box__input-icon"
        src={searchIcon}
        alt="search icon"
      />
    </div>
  );
};

export default ServicesSearchBar;
