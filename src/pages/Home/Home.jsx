import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout/Layout";
import paw from "../../assets/images/landing_page/paw_print.svg";
import LandingContainer from "../../components/LandingContainer/LandingContainer";
import Button from "../../components/Button/Button";
import introImage from "../../assets/images/landing_page/landing_page_about_intro_img.png";
import servicesImage from "../../assets/images/landing_page/services-image.png";
import chain from "../../assets/images/landing_page/chain.svg";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../../Containers/TestimonialsSection/TestimonialsSection";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import { Link } from "react-router-dom";
import dogImage from "../../assets/images/landing_page/dog.svg";
const Home = () => {
  const headerText = "Start your journey on the right ";
  return (
    <Layout>
      <Hero
        header={
          <h2 className="hero-content__header">
            {headerText}
            <span className="hero-content__header-highlight">paw.</span>
          </h2>
        }
        subheaderText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci diam malesuada pellentesque aenean sed ut egestas"
        }
        link={<Link to={"/services"}>What We Offer</Link>}
        dogImage={dogImage}
      />

      <LandingContainer
        icon={paw}
        headingText="Why The Positive Pup?"
        paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi malesuada tortor, tristique aenean ultricies. Integer aliquam mattis turpis justo, faucibus bibendum sagittis lacus ornare. Porttitor eget sed amet malesuada est dignissim magna. Amet vel tempor egestas at in mi, facilisi proin. "
        buttonComponent={
          <Button
            link={<Link to="/about">More About Me</Link>}
            isSecondary={true}
          />
        }
        image={introImage}
        isFlipped={false}
      />
      <LandingContainer
        icon={chain}
        headingText="Strengthen the bond between you and your pup"
        paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo repudiandae possimus porro sunt unde cum sint. Quod iusto quisquam harum"
        buttonComponent={
          <ArrowLink linkText="View Our Services" linkTo="#services-section" />
        }
        image={servicesImage}
        isFlipped={true}
      />
      <ServicesSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;
