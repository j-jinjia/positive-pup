import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import ServicesGetInTouchSection from "../../components/ServicesGetInTouchSection/ServicesGetInTouchSection";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersDropdown from "../../components/FiltersDropdown/FiltersDropdown";
import useWindowSize from "../../hooks/useWindowSize.js";
import { useParams } from "react-router-dom";

const Services = () => {
  const windowIsTablet = useWindowSize(768);

  const { filter } = useParams();
  const [courseType, setCourseType] = useState(filter || "All");
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("");
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
      })
      .filter((course) => {
        if (ageFilter === "all") return true;
        return course.suitableAges.includes(ageFilter);
      })
      .filter((course) => {
        if (durationFilter === "") return true;
        return course.duration === durationFilter;
      });

    setCourseCards(filteredCourses);
  }, [courseType, searchTerm, ageFilter, durationFilter]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleClick = (event) => {
    if (filterOptions.includes(event.target.value)) {
      setCourseType(event.target.value);
    }
  };

  const handleAgeFilterSelect = (event) => {
    setAgeFilter(event.target.id);
  };

  const handleDurationFilterSelect = (event) => {
    setDurationFilter(event.target.id);
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
      {windowIsTablet && (
        <SearchBar
          searchTerm={searchTerm}
          handleInput={handleInput}
          label="Search Courses"
        />
      )}
      <FiltersDropdown
        handleAgeFilterSelect={handleAgeFilterSelect}
        handleDurationFilterSelect={handleDurationFilterSelect}
        ageFilter={ageFilter}
        durationFilter={durationFilter}
      />
      <CoursesList courseData={courseCards} />
      <ServicesGetInTouchSection />
    </Layout>
  );
};

export default Services;
