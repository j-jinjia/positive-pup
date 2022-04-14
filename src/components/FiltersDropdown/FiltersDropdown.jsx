import "./FiltersDropdown.scss";
import filterIcon from "../../assets/svgs/filter-icon.svg";
import filterCross from "../../assets/svgs/filter-cross.svg";
import { useState } from "react";

const FiltersDropdown = ({
  handleAgeFilterSelect,
  handleDurationFilterSelect,
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeAgeInput, setActiveAgeInput] = useState(null);
  const [activeDurationInput, setActiveDurationInput] = useState(null);

  const handleClick = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const handleAgeFilterChange = (event) => {
    setActiveAgeInput(event.target.id);
  };

  const handleDurationFilterChange = (event) => {
    setActiveDurationInput(event.target.id);
  };

  const filtersDropdownMenu = (
    <div className="filters-dropdown__menu">
      <button className="filters-dropdown__cross">
        <img onClick={handleClick} src={filterCross} />
      </button>
      <h3 className="filters-dropdown__heading">Suitable Age</h3>
      <div className="filters-dropdown__filter-options">
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleAgeFilterSelect}
            onChange={handleAgeFilterChange}
            name="suitable-age"
            type="radio"
            id="all"
            checked={activeAgeInput === "all"}
          />
          <label className="filters-dropdown__label" htmlFor="all">
            All ages
          </label>
        </span>
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleAgeFilterSelect}
            onChange={handleAgeFilterChange}
            name="suitable-age"
            type="radio"
            id="infant"
            checked={activeAgeInput === "infant"}
          />
          <label className="filters-dropdown__label" htmlFor="infant">
            Infant (10 weeks &amp; above)
          </label>
        </span>
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleAgeFilterSelect}
            onChange={handleAgeFilterChange}
            name="suitable-age"
            type="radio"
            id="junior"
            checked={activeAgeInput === "junior"}
          />
          <label className="filters-dropdown__label" htmlFor="junior">
            Junior (16 weeks &amp; above)
          </label>
        </span>
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleAgeFilterSelect}
            onChange={handleAgeFilterChange}
            name="suitable-age"
            type="radio"
            id="mature"
            checked={activeAgeInput === "mature"}
          />
          <label className="filters-dropdown__label" htmlFor="mature">
            Mature (1 year &amp; above)
          </label>
        </span>
      </div>
      <h3 className="filters-dropdown__heading">Duration</h3>
      <div className="filters-dropdown__filter-options">
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleDurationFilterSelect}
            onChange={handleDurationFilterChange}
            name="duration"
            type="radio"
            id="short"
            checked={activeDurationInput === "short"}
          />
          <label className="filters-dropdown__label" htmlFor="short">
            {" "}
            &lt; 1 month
          </label>
        </span>
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleDurationFilterSelect}
            onChange={handleDurationFilterChange}
            name="duration"
            type="radio"
            id="medium"
            checked={activeDurationInput === "medium"}
          />
          <label className="filters-dropdown__label" htmlFor="medium">
            1 to 3 months
          </label>
        </span>
        <span>
          <input
            className="filters-dropdown__input"
            onClick={handleDurationFilterSelect}
            onChange={handleDurationFilterChange}
            name="duration"
            type="radio"
            id="long"
            checked={activeDurationInput === "long"}
          />
          <label className="filters-dropdown__label" htmlFor="long">
            3+ months
          </label>
        </span>
      </div>
    </div>
  );

  return (
    <div className="filters-dropdown">
      <button className="filters-dropdown__button" onClick={handleClick}>
        Filters
        <img className="filters-dropdown__button-image" src={filterIcon} />
      </button>

      {showFilterMenu && filtersDropdownMenu}
    </div>
  );
};

export default FiltersDropdown;
