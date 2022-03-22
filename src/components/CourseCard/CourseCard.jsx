import "./CourseCard.scss";
import dogimg from "../../assets/images/dogimg-removebg-preview.png";
const CourseCard = () => {
  return (
    <>
      <div className="course-card">
        <img className="course-card__img" src={dogimg} alt="dog image" />
        <div className="course-content">
          <h5 className="course-content__type"> Group Class</h5>
          <h3 className="course-content__heading"> Little Rising Stars </h3>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
