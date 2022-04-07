import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import ServicesGetInTouchSection from "../../components/ServicesGetInTouchSection/ServicesGetInTouchSection";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredSearchItems = courseData.filter((course) => {
    const filteredCourseHeading = course.courseHeading.toLowerCase();
    return filteredCourseHeading.includes(searchTerm);
  });

  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <ServicesGetInTouchSection
          buttonText={"GET IN TOUCH"}
          link={<Link to="/get-in-touch">GET IN TOUCH</Link>}
        />
        <SearchBar
          searchTerm={searchTerm}
          handleInput={handleInput}
          label="Search Courses"
        />
        <CoursesList courseData={filteredSearchItems} />
      </div>
    </Layout>
  );
};

export default Services;
