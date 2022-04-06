import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import Header from "../../components/Header/Header";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";

const Services = () => {
  return (
    <Layout>
      <Header
        isLeftAlign={false}
        headingText={"Services"}
        subheadingText={"Take a peek at everything we offer"}
      />
      <CoursesList courseData={courseData} />
    </Layout>
  );
};

export default Services;
