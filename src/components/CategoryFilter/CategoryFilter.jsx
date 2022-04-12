import "./CategoryFilter.scss";
import useWindowSize from "../../hooks/useWindowSize";

const CategoryFilter = ({
  courseType,
  handleClick,
  filterOptions,
  isAlternativeHighlight,
}) => {
  const windowIsDesktop = useWindowSize(1024);
  let highlightClassname = "category-filter category-filter--desktop";
  if (isAlternativeHighlight)
    highlightClassname += " category-filter--alternative-highlight";
  const unselected = "category-filter__option";
  const selected = "category-filter__option category-filter__option--selected";

  const mapFiltersDesktop = filterOptions.map((val, index) => {
    return (
      <button
        key={index}
        className={courseType == val ? selected : unselected}
        onClick={handleClick}
        value={val}
      >
        {`${val} / `}
      </button>
    );
  });

  const desktopFilters = (
    <div className={highlightClassname}>{mapFiltersDesktop}</div>
  );

  const mapFiltersMobile = filterOptions.map((val, index) => {
    return (
      <option className="category-filter__option" key={index} value={val}>
        {val}
      </option>
    );
  });

  const mobileFilters = (
    <select
      className="category-filter"
      name="filter-options"
      onChange={handleClick}
    >
      {mapFiltersMobile}
    </select>
  );

  return <>{windowIsDesktop ? desktopFilters : mobileFilters}</>;
};

export default CategoryFilter;
