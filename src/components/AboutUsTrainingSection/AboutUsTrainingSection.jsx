import trainingMethods from "../../assets/svgs/trainingMethodsImage.svg";
import "./AboutUsTrainingSection.scss";

const AboutUsTrainingSection = () => {
  return (
    <div className="landing-page-about-intro">
      <h2 className="landing-page-about-intro__header">Training Methods </h2>
      <img
        src={trainingMethods}
        className="landing-page-about-intro__image"
        alt="Positive Pup owner, Melanie, with a dog"
      />

      <p className="landing-page-about-intro__paragraph">
        As a graduate of the Victoria Stilwell Dog Training Academy, I am a
        positive reinforcement dog trainer. This means that I use reward-based
        training methods that are deeply rooted in the continually evolving
        world of behavioral science. Outdated old school dominance and
        punishment are certainly not my bag. Not only does science tell us that
        these methods achieve temporary results and can often result in eventual
        aggressive behavior, but that they are cruel, dangerous and unnecessary.
      </p>
    </div>
  );
};

export default AboutUsTrainingSection;
