import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout/Layout";
const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
export default Home;