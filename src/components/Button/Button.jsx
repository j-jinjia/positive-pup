import "./Button.scss";

const Button = (props) => {
  const { buttonText, isSecondary, isSquare } = props;
  let buttonClassName = "button";
  buttonClassName += isSecondary ? " button--secondary" : " button--primary";
  if (isSquare) buttonClassName += " button--squared";

  return <button className={buttonClassName}>{buttonText}</button>;
};

export default Button;
