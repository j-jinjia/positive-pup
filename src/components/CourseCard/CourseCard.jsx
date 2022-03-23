import "./CourseCard.scss";
import CardLabel from "../CardLabel/CardLabel";

const CourseCard = (props) => {
  const { image, courseType, courseHeading, labelsArray } = props;

  const labels = labelsArray.map((label, index) => {
    return <CardLabel key={index} name={label} />;
  });

  return (
    <div className="course-card">
      <img className="course-card__img" src={image} alt="dog image" />
      <div className="course-card__course-content">
        <h1 className="course-card__course-content__type">{courseType}</h1>
        <h2 className="course-card__course-content__heading">
          {courseHeading}
        </h2>
        <div className="course-card__labels">{labels}</div>
      </div>
    </div>
  );
};

export default CourseCard;
