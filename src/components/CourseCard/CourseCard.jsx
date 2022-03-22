import "./CourseCard.scss";

const CourseCard = (props) => {
  const { image, courseType, courseHeading, filterLabels } = props;
  return (
    <>
      <div className="course-card">
        <img className="course-card__img" src={image} alt="dog image" />
        <div className="course-content">
          <h5 className="course-content__type">{courseType}</h5>
          <h3 className="course-content__heading">{courseHeading}</h3>
          <span className="course-content__labels">{filterLabels[0]}</span>
          <span className="course-content__labels">{filterLabels[1]}</span>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
