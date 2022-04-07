import Button from "../Button/Button";
import Header from "../Header/Header";
import "./AboutUsHeader.scss";
import AboutMe from "../../assets/images/SitePictures/AboutMe.png";
import useWindowSize from "../../hooks/useWindowSize.js";

const AboutUsHeader = () => {
  const isTabletSize = useWindowSize(768);

  const headerJSX = isTabletSize ? "Hey there " : "Hey there 👋";

  return (
    <div className="about-us-header">
      <main className="about-us-header__content">
        <Header
          headingText={"About Us"}
          subheadingText={headerJSX}
          isLeftAlign
        />
        <p className="about-us-header__text">
          As the owner of The Positive Pup, it is my joy to be able to welcome
          you to this website.
        </p>
        <Button
          isSecondary={true}
          link={<a href="#mission-section">More About Us</a>}
        />
      </main>
      <img
        src={AboutMe}
        alt="Melanie and a dog"
        className="about-us-header__image"
      />
    </div>
  );
};

export default AboutUsHeader;
