import "./ServicesGetInTouchSection.scss";
import Button from "../Button/Button";

const ServicesGetInTouchSection = ({ buttonText, link }) => {
  return (
    <div className="services-get-in-touch-section">
      <h3 className="services-get-in-touch-section__header">
        Have a question about any of our courses?
      </h3>
      <p className="services-get-in-touch-section__subtext">
        Please take a look at our FAQ’s to see if it’s already been answered.
        Alternatively, get in touch using the button below.
      </p>
      <Button buttonText={buttonText} isSecondary link={link} isSmallText />
    </div>
  );
};

export default ServicesGetInTouchSection;
