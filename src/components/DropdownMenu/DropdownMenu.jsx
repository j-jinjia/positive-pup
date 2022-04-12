import { Link } from "react-router-dom";
import "./DropdownMenu.scss";
import courseData from "../../assets/mockData/courseData";

const DropdownMenu = () => {
  const getColumn = (courseType) => {
    const colData = courseData.filter(
      (courseData) => courseData.courseTypePlural === courseType
    );
    const col = colData.map((courseData, index) => (
      <a
        href={courseData.link}
        key={courseData.labelsArray.join("") + index}
        className="dropdown-menu__column-option"
      >
        {courseData.courseHeading}
      </a>
    ));
    return col;
  };

  return (
    <div className="dropdown-menu">
      <Link to="/services" className="dropdown-menu__link">
        View All
      </Link>
      <div className="dropdown-menu__column">
        <h3 className="dropdown-menu__column-title">Online Courses</h3>
        {getColumn("Online Courses")}
      </div>
      <div className="dropdown-menu__column">
        <h3 className="dropdown-menu__column-title">Group Classes</h3>
        {getColumn("Group Classes")}
      </div>
      <div className="dropdown-menu__column">
        <h3 className="dropdown-menu__column-title">Other</h3>
        {getColumn("Bespoke Packages")}
      </div>
    </div>
  );
};

export default DropdownMenu;
