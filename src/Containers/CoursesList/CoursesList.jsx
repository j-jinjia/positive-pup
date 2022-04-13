import CourseCard from "../../components/CourseCard/CourseCard";
import "./CoursesList.scss";

export const CoursesList = ({ courseData }) => {
  const cardsListJSX = courseData.map((card, index) => {
    return (
      <CourseCard
        key={card.courseHeading + index}
        image={card.image}
        courseType={card.courseTypeSingular}
        courseLink={card.link}
        courseHeading={card.courseHeading}
        labelsArray={card.labelsArray}
      />
    );
  });

  return <div className="courses-list">{cardsListJSX}</div>;
};
