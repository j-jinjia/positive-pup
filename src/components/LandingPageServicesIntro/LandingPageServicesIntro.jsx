import chain from "../../assets/images/landing_page/chain.svg";
import servicesImg from "../../assets/images/landing_page/services-image.png";
import "./LandingPageServicesIntro.scss";
const LandingPageServicesIntro = () => {
  return (
    <div className="landing-page-about-intro">
      <img
        src={chain}
        className="landing-page-about-intro__paw"
        alt="paw print"
      />
      <h2 className="landing-page-about-intro__header">
        Strengthen the bond between you and your pup
      </h2>
      <p className="landing-page-about-intro__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi malesuada
        tortor, tristique aenean ultricies. Integer aliquam mattis turpis justo,
        faucibus bibendum sagittis lacus ornare. Porttitor eget sed amet
        malesuada est dignissim magna. Amet vel tempor egestas at in mi,
        facilisi proin.
      </p>
      <div></div>
      <img
        src={servicesImg}
        className="landing-page-about-intro__image"
        alt="Positive Pup owner, Melanie, with a dog"
      />
    </div>
  );
};
export default LandingPageServicesIntro;
