import Button from "../Button/Button";
import "./LandingPageHeaderSection.scss";

const LandingPageHeaderSection = ({
  headerText,
  highlightHeaderText,
  subheaderText,
  buttonText,
}) => {
  return (
    <div className="hero">
      <h2 className="hero__header">
        {headerText}
        <span className="hero__header-highlight">{highlightHeaderText}</span>
      </h2>
      <p className="hero__subheader">{subheaderText}</p>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default LandingPageHeaderSection;
