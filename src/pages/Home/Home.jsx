import Hero from "../../components/Hero/Hero";
import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";

const Home = () => {
  const headerText = "Start your journey on the right ";
  return (
    <>
      <h1>Positive Pup</h1>
      <Hero
        header={
          <h2 className="hero__header">
            {headerText}
            <span className="hero__header-highlight">paw.</span>
          </h2>
        }
        subheaderText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci diam malesuada pellentesque aenean sed ut egestas"
        }
        buttonText={"What We Offer"}
      />
      <CertificateBadges />
    </>
  );
};

export default Home;
