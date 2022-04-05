import "./SearchBar.scss";
import searchIcon from "../../assets/svgs/searchBarIcon.svg";

const SearchBar = ({ searchTerm, handleInput }) => {
  return (
    <form className="search-bar">
      <label className="search-bar__label" htmlFor="search-bar__course">
        Search Course
      </label>
      <input
        id="search-bar__course"
        className="search-bar__input"
        type="text"
        value={searchTerm}
        onChange={handleInput}
      />
      <img
        className="search-bar__input-icon"
        src={searchIcon}
        alt="search icon"
      />
    </form>
  );
};

export default SearchBar;
