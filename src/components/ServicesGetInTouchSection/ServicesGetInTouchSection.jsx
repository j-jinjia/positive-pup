import "./ServicesGetInTouchSection.scss";
import Button from "../Button/Button";

const ServicesGetInTouchSection = ({ buttonText, isSecondary, link }) => {
  return (
    <div className="services-getInTouch-section">
      <h3 className="services-getInTouch-section__header">
        {" "}
        Have a question about any of our courses?{" "}
      </h3>
      <p className="services-getInTouch-section__subtext">
        {" "}
        Please take a look at our FAQ’s to see if it’s already been answered.
        Alternatively,
        <br />
        get in touch using the button below.
      </p>
      <Button buttonText={buttonText} isSecondary={isSecondary} link={link} />
    </div>
  );
};

export default ServicesGetInTouchSection;
