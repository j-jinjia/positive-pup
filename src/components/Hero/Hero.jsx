import Button from "../Button/Button";
import "./Hero.scss";

const Hero = ({
  header,
  subheaderText,
  buttonText,
  isSecondary,
  link,
  dogImage,
}) => {
  return (
    <div className="hero">
      <div className="hero-content">
        {header}
        <p className="hero-content__subheader">{subheaderText}</p>
        <Button buttonText={buttonText} isSecondary={isSecondary} link={link} />
      </div>
      <div className="hero-image">
        <img
          className="hero-image__image"
          src={dogImage}
          alt="Picture of a happy bulldog"
        />
      </div>
    </div>
  );
};

export default Hero;
