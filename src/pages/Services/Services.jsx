import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";


const Services = () => {
  const [courseType, setCourseType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredSearchItems = courseData.filter((course) => {
    const filteredCourseHeading = course.courseHeading.toLowerCase();
    return filteredCourseHeading.includes(searchTerm);
  });

  const filterOptions = [
    "All",
    "Online Courses",
    "Group Classes",
    "Bespoke Packages",
  ];

  const handleClick = (event) => {
    if (event.target.id === "All" || event.target.value === "All") {
      setCourseType("All");
    } else if (
      event.target.id === "Online Courses" ||
      event.target.value === "Online Courses"
    ) {
      setCourseType("Online Courses");
    } else if (
      event.target.id === "Group Classes" ||
      event.target.value === "Group Classes"
    ) {
      setCourseType("Group Classes");
    } else if (
      event.target.id === "Bespoke Packages" ||
      event.target.value === "Bespoke Packages"
    ) {
      setCourseType("Bespoke Packages");
    }
  };

  let filteredCourses;

  if (courseType === "All") {
    filteredCourses = courseData;
  } else {
    filteredCourses = courseData.filter(
      (course) => course.courseTypePlural === courseType
    );
  }


  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <CategoryFilter
          courseType={courseType}
          handleClick={handleClick}
          filterOptions={filterOptions}
        />
       
        <SearchBar
          searchTerm={searchTerm}
          handleInput={handleInput}
          label="Search Courses"
        />
        <CoursesList courseData={filteredSearchItems} />
         <CoursesList courseData={filteredCourses} />
      </div>
    </Layout>
  );
};

export default Services;
