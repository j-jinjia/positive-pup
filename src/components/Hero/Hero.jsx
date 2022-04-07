import Button from "../Button/Button";
import "./Hero.scss";
import Certifications from "../Certifications/Certifications";

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
          alt="Picture of a happy Staffie"
        />
      </div>
      <div className="hero-certifications">
        <Certifications showText={false} isSmaller />
      </div>
    </div>
  );
};

export default Hero;
