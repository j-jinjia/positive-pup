const RadioInput = ({ onChange, value, id, label, name }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="radio"
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
};

export default RadioInput;
