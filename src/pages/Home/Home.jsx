import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout/Layout";
import paw from "../../assets/images/landing_page/paw_print.svg";
import LandingContainer from "../../components/LandingContainer/LandingContainer";
import Button from "../../components/Button/Button";
import introImage from "../../assets/images/landing_page/landing_page_about_intro_img.png";
import servicesImage from "../../assets/images/landing_page/services-image.png";
import chain from "../../assets/images/landing_page/chain.svg";

import ArrowLink from "../../components/ArrowLink/ArrowLink";

const Home = () => {
  const headerText = "Start your journey on the right ";
  return (
    <Layout>
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
        link={"/services"}
      />
      <CertificateBadges />

      <LandingContainer
        icon={paw}
        headingText="Why The Positive Pup?"
        paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi malesuada
      tortor, tristique aenean ultricies. Integer aliquam mattis turpis justo,
      faucibus bibendum sagittis lacus ornare. Porttitor eget sed amet
      malesuada est dignissim magna. Amet vel tempor egestas at in mi,
      facilisi proin."
        buttonComponent={
          <Button
            link="/about"
            isSecondary={true}
            headingText="Why The Positive Pup?"
            buttonText="More About Me"
          />
        }
        image={introImage}
        isFlipped={false}
      />
      <LandingContainer
        icon={chain}
        headingText="Strengthen the bond between you and your pup"
        paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi malesuada
      tortor, tristique aenean ultricies. Integer aliquam mattis turpis justo,
      faucibus bibendum sagittis lacus ornare. "
        buttonComponent={<ArrowLink linkText="View Our Services" />}
        image={servicesImage}
        isFlipped={true}
      />
    </Layout>
  );
};

export default Home;
