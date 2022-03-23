import Layout from "../../components/Layout/Layout";
import CourseCard from "../../components/CourseCard/CourseCard";
import dogImage from "../../assets/images/dog-image.png";

const Services = () => {
  const mockArray = ["InPerson", "10 Weeks+", "Online"];
  return (
    <Layout>
      <h1>Services</h1>
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
