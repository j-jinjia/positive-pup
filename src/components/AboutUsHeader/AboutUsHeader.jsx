import Hero from "../Hero/Hero";
import "./AboutUsHeader.scss";
import AboutMe from "../../assets/images/SitePictures/AboutMe.png";
import { useState, useEffect } from "react";

const AboutUsHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerJSX = windowWidth < 768 ? "Hey there 👋" : "Hey there";

  return (
    <div className="about-us-header">
      <main className="about-us-header__content">
        <h1 className="about-us-header__content-title">ABOUT US</h1>
        <Hero
          header={
            <>
              <h2 className="hero__header">
                {headerJSX}
                <div> </div>
                My name is Melanie!
              </h2>
            </>
          }
          subheaderText={
            "As the owner of The Positive Pup, it is my joy to be able to welcome you to this website."
          }
          buttonText={"More About Us"}
          isSecondary={true}
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
