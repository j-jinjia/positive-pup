import "./LandingContainer.scss";

const LandingContainer = ({
  icon,
  buttonComponent,
  headingText,
  paragraphText,
  image,
  isFlipped,
}) => {
  const classNameMod = isFlipped ? " landing-container--flipped" : "";

  return (
    <div className={`landing-container${classNameMod}`}>
      <img src={icon} className="landing-container__paw" alt="" />
      <h2 className="landing-container__header">{headingText} </h2>
      <p className="landing-container__paragraph">{paragraphText}</p>
      <div className="landing-container__button">{buttonComponent}</div>
      <img
        src={image}
        className="landing-container__image"
        alt="Positive Pup owner, Melanie, with a dog"
      />
    </div>
  );
};

export default LandingContainer;
