import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import MissionSection from "../../components/MissionSection/MissionSection";
import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";
import "./About.scss";

const About = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <MissionSection />
      <div className="certification-section">
        <h2 className="certification-section__header">You’re in professional hands!</h2>
        <p className="certification-section__paragraph">I’m a well-established, certified trainer in Dog behaviour &#38; training, with over <span className="certification-section__paragraph--highlighted-text">4.5 years of experience.</span> To find out more information about any of my certifications, please click on one of the logos.</p>
        <CertificateBadges />
      </div>
    </Layout>
  );
};

export default About;
