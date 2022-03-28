import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { buttonText, isSecondary, isSquare, link } = props;
  let buttonClassName = "button";
  buttonClassName += isSecondary ? " button--secondary" : " button--primary";
  if (isSquare) buttonClassName += " button--squared";

  return link ? (
    <Link to={link} className={buttonClassName}>
      {buttonText}
    </Link>
  ) : (
    <button className={buttonClassName}>{buttonText}</button>
  );
};

export default Button;
