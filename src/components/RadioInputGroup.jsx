import RadioInput from "./RadioInput";
import { useState } from "react";

const RadioInputGroup = () => {
  // either be null or an id related to a radio input
  const [activeInput, setActiveInput] = useState(null);

  const handleChange = (event) => {
    setActiveInput(event.target.id);
  };

  return (
    <div>
      <RadioInput
        onChange={handleChange}
        id="apple"
        label="1"
        name="barry"
        value={activeInput === "apple"}
      />
      <RadioInput
        onChange={handleChange}
        id="2"
        label="2"
        name="barry"
        value={activeInput === "2"}
      />
      <RadioInput
        onChange={handleChange}
        id="3"
        label="3"
        name="barry"
        value={activeInput === "3"}
      />
    </div>
  );
};

export default RadioInputGroup;
