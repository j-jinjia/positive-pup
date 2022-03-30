import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import MissionSection from "../../components/MissionSection/MissionSection";
import AboutUsTrainingSection from "../../components/AboutUsTrainingSection/AboutUsTrainingSection";


const About = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <MissionSection />
     <AboutUsTrainingSection />
    </Layout>
  );
};

export default About;
