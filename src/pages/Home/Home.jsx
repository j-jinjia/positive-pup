import Hero from "../../components/Hero/Hero";
import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";

const Home = () => {
  return (
    <>
      <h1>Positive Pup</h1>
      <Hero
        headerText={"Start your journey on the right "}
        highlightHeaderText={"paw."}
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