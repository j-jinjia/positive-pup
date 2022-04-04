import Layout from "../../components/Layout/Layout";
import "./Services.scss";
import { CoursesList } from "../../Containers/CoursesList/CoursesList";
import courseData from "../../assets/mockData/courseData";
import ServicesSearchBar from "../../components/ServicesSearchBar/ServicesSearchBar";
import { useState } from "react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  
  const filteredSearchItems = courseData.filter((course) => {
    const filteredCourseHeading = course.courseHeading.toLowerCase();
    // const filteredCourseLabel = course.labelsArray.toLowerCase();
    return filteredCourseHeading.includes(searchTerm) 
    // || filteredCourseLabel.includes(searchTerm);
  });



  return (
    <Layout>
      <div className="services">
        <h1 className="services__heading">OUR SERVICES</h1>
        <h2 className="services__subheading">
          Take a peek at everything we offer
        </h2>
        <ServicesSearchBar searchTerm={searchTerm} handleInput={handleInput}/>
        <CoursesList courseData={filteredSearchItems} />
      </div>
    </Layout>
  );
};

export default Services;
