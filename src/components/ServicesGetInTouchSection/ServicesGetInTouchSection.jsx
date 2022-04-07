import "./ServicesGetInTouchSection.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ServicesGetInTouchSection = () => {
  return (
    <div className="services-get-in-touch-section">
      <h3 className="services-get-in-touch-section__header">
        Have a question about any of our courses?
      </h3>
      <p className="services-get-in-touch-section__subtext">
        Please take a look at our FAQ’s to see if it’s already been answered.
        Alternatively, get in touch using the button below.
      </p>
      <Button
        buttonText={"GET IN TOUCH"}
        isSecondary
        link={<Link to="/get-in-touch">GET IN TOUCH</Link>}
        isSmallText
      />
    </div>
  );
};

export default ServicesGetInTouchSection;
