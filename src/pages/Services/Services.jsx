import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Services = () => {
  const [courseType, setCourseType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [courseCards, setCourseCards] = useState(courseData);

  const filterOptions = [
    "All",
    "Online Courses",
    "Group Classes",
    "Bespoke Packages",
  ];

  useEffect(() => {
    const filteredCourses = courseData
      .filter((course) => {
        if (courseType === "All") return true;
        return course.courseTypePlural === courseType;
      })
      .filter((course) => {
        return course.courseHeading.toLowerCase().includes(searchTerm);
      });

    setCourseCards(filteredCourses);
  }, [courseType, searchTerm]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleClick = (event) => {
    if (filterOptions.includes(event.target.value)) {
      setCourseType(event.target.value);
    }
  };

  return (
    <Layout>
      <Header
        isLeftAlign={false}
        headingText={"Services"}
        subheadingText={"Take a peek at everything we offer"}
      />
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
      <CoursesList courseData={courseCards} />
    </Layout>
  );
};

export default Services;
