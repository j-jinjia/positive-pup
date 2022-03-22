import "./LandingPageAboutIntro.scss";
import introImage from "../../assets/images/landing_page/landing_page_about_intro_img.png";
import Button from "../../components/Button/Button";
import paw from "../../assets/images/landing_page/paw_print.svg";
import { Link } from "react-router-dom";

const LandingPageAboutIntro = () => {
  return (
    <>
      <div className="landing-page__about-intro">
        <div className="landing-page__about-intro--greenbox">
          <img
            src={paw}
            className="landing-page__about-intro--paw"
            alt="paw print"
          />

          <h2 className="landing-page__about-intro--header">
            Why The Positive Pup?
          </h2>
          <p className="landing-page__about-intro--paragraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            malesuada tortor, tristique aenean ultricies. Integer aliquam mattis
            turpis justo, faucibus bibendum sagittis lacus ornare. Porttitor
            eget sed amet malesuada est dignissim magna. Amet vel tempor egestas
            at in mi, facilisi proin.
          </p>
          <Link to="/about" className="landing-page__about-intro--button">
            <Button isSecondary={true} buttonText="More About Me" />
          </Link>

          <img
            src={introImage}
            className="landing-page__about-intro--image"
            alt="Positive Pup owner, Melanie, with a dog"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageAboutIntro;
