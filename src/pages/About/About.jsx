import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import MissionSection from "../../components/MissionSection/MissionSection";
import CertificateBadges from "../../components/CertificateBadges/CertificateBadges";

const About = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <MissionSection />
      <CertificateBadges showText={true} />
    </Layout>
  );
};

export default About;
