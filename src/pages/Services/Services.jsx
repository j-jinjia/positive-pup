import CourseCard from "../../components/CourseCard/CourseCard";
import dogImage from "../../assets/images/dogimg-removebg-preview.png";

const Services = () => {
  const mockArray = ["InPerson", "10Week+"];

  return (
    <>
      <h1>Services</h1>
      <CourseCard
        image={dogImage}
        courseType="GROUP CLASS"
        courseHeading="Little Stars Course"
        filterLabels={mockArray}
      />
    </>
  );
};

export default Services;
