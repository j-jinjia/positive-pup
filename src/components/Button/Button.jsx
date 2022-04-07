import "./Button.scss";

const Button = (props) => {
  const { buttonText, isSecondary, isSquare, link, isSmallText } = props;
  let buttonClassName = "button";
  buttonClassName += isSecondary ? " button--secondary" : " button--primary";

  if (link) buttonClassName += " button--link";
  if (isSquare) buttonClassName += " button--squared";
  if (isSmallText) buttonClassName += " button--small-text";

  return link ? (
    <div className={buttonClassName}>{link}</div>
  ) : (
    <button className={buttonClassName}>{buttonText}</button>
  );
};

export default Button;
