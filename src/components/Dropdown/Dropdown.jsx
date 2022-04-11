import "./Dropdown.scss";
import { useState } from "react";
import React from "react";

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const mainClass = isOpen
    ? "dropdown__main dropdown__main--active"
    : "dropdown__main";

  const answerArr = answer.split("\n");
  const answerText = answerArr.map((answer, i) => (
    <React.Fragment key={answer}>
      <p className="dropdown__main-text">{answer}</p>
      {i !== answerArr.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="dropdown">
      <label className="dropdown__heading-label" htmlFor="dropdown">
        {"Click to view answer to " + question}
      </label>
      <button
        id="dropdown"
        className="dropdown__heading"
        onClick={toggleDropdown}
      >
        <h3 className="dropdown__heading-title">{question}</h3>
        <p className="dropdown__heading-action">{isOpen ? "-" : "+"}</p>
      </button>
      <div className={mainClass}>{answerText}</div>
    </div>
  );
};

export default Dropdown;
