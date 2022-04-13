import { Link } from "react-router-dom";
import "./DropdownMenu.scss";
import cross from "../../assets/svgs/close-menu.svg";
import courseData from "../../assets/mockData/courseData";

const DropdownMenu = ({ toggleDropdown }) => {
  const getColumn = (courseType) => {
    const colData = courseData.filter(
      (courseData) => courseData.courseTypePlural === courseType
    );
    const col = colData.map((courseData, index) => (
      <a
        href={courseData.link}
        key={courseData.labelsArray.join("") + index}
        className="dropdown-menu__column-option"
        target="_blank"
        rel="noreferrer"
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
        <Link
          to="/services/Online Courses"
          className="dropdown-menu__column-title"
        >
          Online Courses
        </Link>
        {getColumn("Online Courses")}
      </div>
      <div className="dropdown-menu__column">
        <Link
          to="/services/Group Classes"
          className="dropdown-menu__column-title"
        >
          Group Classes
        </Link>
        {getColumn("Group Classes")}
      </div>
      <div className="dropdown-menu__column">
        <Link
          to="/services/Bespoke Packages"
          className="dropdown-menu__column-title"
        >
          Other
        </Link>
        {getColumn("Bespoke Packages")}
      </div>
      <button className="dropdown-menu__button" onClick={toggleDropdown}>
        <img
          src={cross}
          alt="close dropdown"
          className="dropdown-menu__button-close"
        />
      </button>
    </div>
  );
};

export default DropdownMenu;
