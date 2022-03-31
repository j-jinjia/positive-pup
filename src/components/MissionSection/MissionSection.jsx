import "./MissionSection.scss";
import LinkArrow from "../../components/ArrowLink/ArrowLink";

const MissionSection = () => {
  return (
    <div className="mission-section">
      <h1 className="mission-section__heading"> My Mission</h1>
      <p className="mission-section__about-us">
        Have you ever dreamt about your perfect career? the kind of job that
        would make you jump out of bed in the morning, ready to welcome in the
        new day? Mine has always involved working with dogs and making a
        difference to people’s lives.
      </p>
      <p className="mission-section__about-us">
        I have made it my mission to help promote and strengthen the bond
        between humans and their canine companions, so that I can make a
        difference in your world. I truly believe that by increasing the
        understanding of how dogs communicate with their humans, amazing things
        can be achieved. The results speak for themselves, content well-mannered
        canines and relaxed happy humans!
      </p>
      <p className="mission-section__about-us">
        Thanks for visiting The Positive Pup and for taking your very first step
        towards building a special bond with your canine companion.
      </p>
      <div className="link-container">
        <LinkArrow linkText="View Training Methods" />
      </div>
    </div>
  );
};

export default MissionSection;
