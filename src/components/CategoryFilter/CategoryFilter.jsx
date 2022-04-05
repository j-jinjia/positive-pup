import "./CategoryFilter.scss";
import useWindowSize from "../../hooks/useWindowSize";

const CategoryFilter = ({ courseType, handleClick, filterOptions }) => {
  const unselected = "category-filter-container__filter-option";
  const selected =
    "category-filter-container__filter-option category-filter-container__filter-option--selected";

  const windowIsDesktop = useWindowSize(1024);

  const mapFiltersDesktop = filterOptions.map((val, index) => {
    return (
      <p
        key={index}
        className={courseType == { val } ? selected : unselected}
        onClick={handleClick}
        id={val}
      >
        {val}
      </p>
    );
  });

  const desktopFilters = (
    <div className="category-filter-container">{mapFiltersDesktop}</div>
  );

  const mapFiltersMobile = filterOptions.map((val, index) => {
    return (
      <option key={index} value={val}>
        {val}
      </option>
    );
  });

  // const desktopFilters = (
  //   <div className="category-filter-container">

  //     filterOptions.map(())
  //     <p
  //       className={courseType == "All" ? selected : unselected}
  //       onClick={handleClick}
  //       id={"All"}
  //     >
  //       All
  //     </p>

  //     <p
  //       className={courseType == "Online Course" ? selected : unselected}
  //       onClick={handleClick}
  //       id={"Online Courses"}
  //     >
  //       Online Courses
  //     </p>
  //     <p
  //       className={courseType == "Group Class" ? selected : unselected}
  //       onClick={handleClick}
  //       id={"Group Classes"}
  //     >
  //       Group Classes
  //     </p>
  //     <p
  //       className={courseType == "Bespoke Package" ? selected : unselected}
  //       onClick={handleClick}
  //       id={"Bespoke Packages"}
  //     >
  //       Bespoke Packages
  //     </p>
  //   </div>
  // );

  const mobileFilters = (
    <select name="filter-options" onChange={handleClick}>
      {mapFiltersMobile}
    </select>
  );

  return <>{windowIsDesktop ? desktopFilters : mobileFilters}</>;
};

export default CategoryFilter;
