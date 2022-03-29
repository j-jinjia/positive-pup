import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout/Layout";
import { Testimonial } from "../../components/Testimonial/Testimonial";
import testimonials from "../../assets/mockData/testimonialData";

const Home = () => {
  const testimonialsListJSX = testimonials.map((testimonial, index) => {
    return (
      <Testimonial
        key={testimonial.name + index}
        name={testimonial.name}
        date={testimonial.date}
        course={testimonial.course}
        comment={testimonial.comment}
      />
    );
  });
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
      {testimonialsListJSX} 
    </Layout>
    
  );
};

export default Home;
