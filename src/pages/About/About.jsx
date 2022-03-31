import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import MissionSection from "../../components/MissionSection/MissionSection";
import AboutUsTrainingSection from "../../components/AboutUsTrainingSection/AboutUsTrainingSection";
import Certifications from "../../components/Certifications/Certifications";

const About = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <MissionSection />
      <AboutUsTrainingSection />
      <Certifications showText={true} />
    </Layout>
  );
};

export default About;
