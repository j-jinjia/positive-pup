import "./CategoryFilter.scss";
import useWindowSize from "../../hooks/useWindowSize";

const CategoryFilter = ({ courseType, handleClick, filterOptions }) => {
  const unselected = "category-filter-container__filter-option";
  const selected =
    "category-filter-container__filter-option category-filter-container__filter-option--selected";

  const windowIsDesktop = useWindowSize(1024);

  const mapFiltersDesktop = filterOptions.map((val, index) => {
    return (
      <button
        key={index}
        className={courseType == val ? selected : unselected}
        onClick={handleClick}
        value={val}
      >
        {val}
      </button>
    );
  });

  const desktopFilters = (
    <div className="category-filter-container">{mapFiltersDesktop}</div>
  );

  const mapFiltersMobile = filterOptions.map((val, index) => {
    return (
      <option
        className="category-filter-dropdown-menu__option"
        key={index}
        value={val}
      >
        {val}
      </option>
    );
  });

  const mobileFilters = (
    <select
      className="category-filter-dropdown-menu"
      name="filter-options"
      onChange={handleClick}
    >
      {mapFiltersMobile}
    </select>
  );

  return <>{windowIsDesktop ? desktopFilters : mobileFilters}</>;
};

export default CategoryFilter;
