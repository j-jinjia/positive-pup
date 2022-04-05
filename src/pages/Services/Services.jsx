import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import ServicesGetInTouchSection from "../../components/ServicesGetInTouchSection/ServicesGetInTouchSection";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <CoursesList courseData={courseData} />
        <ServicesGetInTouchSection
          buttonText={"GET IN TOUCH"}
          isSecondary={true}
          link={<Link to="/get-in-touch">GET IN TOUCH</Link>}
        />
      </div>
    </Layout>
  );
};

export default Services;
