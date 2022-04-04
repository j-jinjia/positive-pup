import { useState } from "react";
import "./ServicesCategoryFilter.scss";

const ServicesCategoryFilter = () => {
  const [courseType, setCourseType] = useState("All");

  // let filterOptionClassName = "category-filter-container__filter-option";
  const unselected = "category-filter-container__filter-option";
  const selected =
    "category-filter-container__filter-option category-filter-container__filter-option--selected";

  const handleClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "All") {
      setCourseType("All");
    } else if (event.target.id === "Online Courses") {
      setCourseType("Online Courses");
    } else if (event.target.id === "Group Classes") {
      setCourseType("Group Classes");
    } else if (event.target.id === "Bespoke Packages") {
      setCourseType("Bespoke Packages");
    }

    // console.log(courseType);
  };

  return (
    <div className="category-filter-container">
      <p
        className={courseType == "All" ? selected : unselected}
        onClick={handleClick}
        id={"All"}
      >
        All
      </p>
      <p
        className={courseType == "Online Courses" ? selected : unselected}
        onClick={handleClick}
        id={"Online Courses"}
      >
        Online Courses
      </p>
      <p
        className={courseType == "Group Classes" ? selected : unselected}
        onClick={handleClick}
        id={"Group Classes"}
      >
        Group Classes
      </p>
      <p
        className={courseType == "Bespoke Packages" ? selected : unselected}
        onClick={handleClick}
        id={"Bespoke Packages"}
      >
        Bespoke Packages
      </p>
    </div>
  );
};

export default ServicesCategoryFilter;
