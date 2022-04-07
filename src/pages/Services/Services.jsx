import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import Header from "../../components/Header/Header";
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
      <Header
        isLeftAlign={false}
        headingText={"Services"}
        subheadingText={"Take a peek at everything we offer"}
      />
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
    </Layout>
  );
};

export default Services;
