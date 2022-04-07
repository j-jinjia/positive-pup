import "./Button.scss";

const Button = (props) => {
  const { buttonText, isSecondary, isSquare, link } = props;
  let buttonClassName = "button";
  buttonClassName += isSecondary ? " button--secondary" : " button--primary";

  if (link) buttonClassName += " button--link";
  if (isSquare) buttonClassName += " button--squared";

  return link ? (
    <div className={buttonClassName}>{link}</div>
  ) : (
    <button className={buttonClassName}>{buttonText}</button>
  );
};

export default Button;
