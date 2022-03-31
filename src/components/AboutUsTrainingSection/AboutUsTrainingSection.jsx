import trainingMethods from "../../assets/svgs/trainingMethodsImage.svg";
import "./AboutUsTrainingSection.scss";

const AboutUsTrainingSection = () => {
  return (
    <div className="about-us-training-section">
      <img
        src={trainingMethods}
        className="about-us-training-section__image"
        alt="Positive Pup owner, Melanie, with a dog"
      />
      <div className="about-us-training-section__content">
        <h2 className="about-us-training-section__header">Training Methods </h2>
        <p className="about-us-training-section__paragraph">
          As a graduate of the Victoria Stilwell Dog Training Academy, I am a
          positive reinforcement dog trainer. This means that I use reward-based
          training methods that are deeply rooted in the continually evolving
          world of behavioral science.
        </p>
        <p className="about-us-training-section__paragraph">
          Outdated old school dominance and punishment are certainly not my bag.
          Not only does science tell us that these methods achieve temporary
          results and can often result in eventual aggressive behavior, but that
          they are cruel, dangerous and unnecessary.
        </p>
      </div>
    </div>
  );
};

export default AboutUsTrainingSection;
