import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";

const Services = () => {
  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <CoursesList courseData={courseData} />
      </div>
    </Layout>
  );
};

export default Services;
