import Hero from "../Hero/Hero";
import "./AboutUsHeader.scss";

const AboutUsHeader = () => {
  return (
    <div className="about-us-header">
      <Hero
        header={
          <>
            <h2 className="hero__header">Hey there</h2>
            <h2 className="hero__header">My name is Melanie!</h2>
          </>
        }
        subheaderText={
          "As the owner of The Positive Pup, it is my joy to be able to welcome you to this website."
        }
        buttonText={"More About Us"}
        isSecondary={true}
      />
    </div>
  );
};

export default AboutUsHeader;
