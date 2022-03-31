import "./LandingContainer.scss";

const LandingContainer = ({
  icon,
  buttonComponent,
  headingText,
  paragraphText,
  image,
  isFlipped,
}) => {
  const classNameMod = isFlipped ? "--flipped" : "";

  return (
    <div className={`landing-page-about-intro${classNameMod}`}>
      <img
        src={icon}
        className={`landing-page-about-intro${classNameMod}__paw`}
        alt=""
      />
      <h2 className={`landing-page-about-intro${classNameMod}__header`}>
        {headingText}
      </h2>
      <p className={`landing-page-about-intro${classNameMod}__paragraph`}>
        {paragraphText}
      </p>
      <div className={`landing-page-about-intro${classNameMod}__button`}>{buttonComponent}</div>
      <img
        src={image}
        className={`landing-page-about-intro${classNameMod}__image`}
        alt="Positive Pup owner, Melanie, with a dog"
      />
    </div>
  );
};

export default LandingContainer;
