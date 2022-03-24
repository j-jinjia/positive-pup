import Layout from "../../components/Layout/Layout";
import CourseCard from "../../components/CourseCard/CourseCard";
import dogImage from "../../assets/images/dog-image.png";
import "./Services.scss";

const Services = () => {
  const mockArray = ["In Person", "10 Weeks+", "Online"];
  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
      </div>
      <CourseCard
        image={dogImage}
        courseType="GROUP CLASS"
        courseHeading="Little Stars Course"
        labelsArray={mockArray}
      />
    </Layout>
  );
};

export default Services;
