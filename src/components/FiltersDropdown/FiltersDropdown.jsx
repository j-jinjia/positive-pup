import "./FiltersDropdown.scss";
import filterIcon from "../../assets/svgs/filter-icon.svg";
import filterCross from "../../assets/svgs/filter-cross.svg";
import { useState } from "react";

const FiltersDropdown = ({
  handleAgeFilterSelect,
  handleDurationFilterSelect,
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleClick = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const filterDropdownMenu = (
    <div className="menu-container">
      <button>
        <img onClick={handleClick} src={filterCross} />
      </button>
      <h3>Suitable Age</h3>
      <input
        onClick={handleAgeFilterSelect}
        name="suitable-age"
        type="radio"
        id="all"
      />
      <label htmlFor="all">All ages</label>
      <input
        onClick={handleAgeFilterSelect}
        name="suitable-age"
        type="radio"
        id="infant"
      />
      <label htmlFor="infant">Infant (10 weeks &amp; above)</label>
      <input
        onClick={handleAgeFilterSelect}
        name="suitable-age"
        type="radio"
        id="junior"
      />
      <label htmlFor="junior">Junior (16 weeks &amp; above)</label>
      <input
        onClick={handleAgeFilterSelect}
        name="suitable-age"
        type="radio"
        id="mature"
      />
      <label htmlFor="mature">Mature (1 year &amp; above)</label>
      <h3>Duration</h3>
      <input
        onClick={handleDurationFilterSelect}
        name="duration"
        type="radio"
        id="short"
      />
      <label htmlFor="short"> &lt; 1 month</label>
      <input
        onClick={handleDurationFilterSelect}
        name="duration"
        type="radio"
        id="medium"
      />
      <label htmlFor="medium">1 to 3 months</label>
      <input
        onClick={handleDurationFilterSelect}
        name="duration"
        type="radio"
        id="long"
      />
      <label htmlFor="long">3+ months</label>
    </div>
  );

  return (
    <>
      <button onClick={handleClick}>
        Filters
        <img src={filterIcon} />
      </button>
      {showFilterMenu && <div>{filterDropdownMenu}</div>}
    </>
  );
};

export default FiltersDropdown;
