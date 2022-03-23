import Button from "../Button/Button";
import "./Hero.scss";

const Hero = ({ header, subheaderText, buttonText, isSecondary }) => {
  return (
    <div className="hero">
      {header}
      <p className="hero__subheader">{subheaderText}</p>
      <Button buttonText={buttonText} isSecondary={isSecondary} />
    </div>
  );
};

export default Hero;
