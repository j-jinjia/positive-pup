import "./SearchBar.scss";
import searchIcon from "../../assets/svgs/searchBarIcon.svg";

const SearchBar = ({ searchTerm, handleInput, label }) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor={label}>
        {capitalizedLabel}
      </label>
      <input
        id={label}
        role="input"
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
    </div>
  );
};

export default SearchBar;
