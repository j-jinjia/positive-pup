import "./LandingContainer.scss";

const LandingContainer = ({
  icon,
  buttonComponent,
  headingText,
  paragraphText,
  image,
  isFlipped,
}) => {
  const classNameMod = isFlipped ? "flipped" : "";

  return (
    <div className={`landing-page-about-intro`}>
      <img src={icon} className={`landing-page-about-intro__paw ${classNameMod}`} alt="" />
      <h2 className="landing-page-about-intro__header">{headingText}</h2>
      <p className="landing-page-about-intro__paragraph">{paragraphText}</p>
      <div>{buttonComponent}</div>
      <img
        src={image}
        className="landing-page-about-intro__image"
        alt="Positive Pup owner, Melanie, with a dog"
      />
    </div>
  );
};

export default LandingContainer;
