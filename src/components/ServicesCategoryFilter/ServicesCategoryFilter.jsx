import "./ServicesCategoryFilter.scss";
import useWindowSize from "../../hooks/useWindowSize";

const ServicesCategoryFilter = ({ courseType, handleClick }) => {
  const unselected = "category-filter-container__filter-option";
  const selected =
    "category-filter-container__filter-option category-filter-container__filter-option--selected";

  const windowIsDesktop = useWindowSize(1024);

  const desktopFilters = (
    <div className="category-filter-container">
      <p
        className={courseType == "All" ? selected : unselected}
        onClick={handleClick}
        id={"All"}
      >
        All
      </p>
      <p
        className={courseType == "Online Course" ? selected : unselected}
        onClick={handleClick}
        id={"Online Courses"}
      >
        Online Courses
      </p>
      <p
        className={courseType == "Group Class" ? selected : unselected}
        onClick={handleClick}
        id={"Group Classes"}
      >
        Group Classes
      </p>
      <p
        className={courseType == "Bespoke Package" ? selected : unselected}
        onClick={handleClick}
        id={"Bespoke Packages"}
      >
        Bespoke Packages
      </p>
    </div>
  );

  const mobileFilters = (
    <select name="filter-options" onChange={handleClick}>
      <option
        className={courseType == "All" ? selected : unselected}
        // onChange={handleClick}
        value={"All"}
      >
        All
      </option>
      <option onChange={handleClick} value={"Online Courses"}>
        Online Courses
      </option>
      <option onClick={handleClick} value={"Group Classes"}>
        Group Classes
      </option>
      <option onClick={handleClick} value={"Bespoke Packages"}>
        Bespoke Packages
      </option>
    </select>
  );

  return <>{windowIsDesktop ? desktopFilters : mobileFilters}</>;
};

export default ServicesCategoryFilter;
