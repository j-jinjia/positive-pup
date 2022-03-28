import Layout from "../../components/Layout/Layout";
// import CourseCard from "../../components/CourseCard/CourseCard";
// import dogImage from "../../assets/images/dog-image.png";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData"

const Services = () => {
  // const mockArray = ["In Person", "10 Weeks+", "Online"];
  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <CoursesList courseData={courseData}/>
      </div>
    
    </Layout>
  );
};

export default Services;
