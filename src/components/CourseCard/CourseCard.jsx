import "./CourseCard.scss";
import CardLabel from "../CardLabel/CardLabel";

const CourseCard = (props) => {
  const { image, courseType, courseHeading, labelsArray, courseLink } = props;

  const labels = labelsArray.map((label, index) => {
    return <CardLabel key={index} name={label} />;
  });

  return (
    <div className="course-card">
      <div className="course-card__img-container">
        <img className="course-card__img" src={image} alt="dog" />
      </div>
      <div className="course-card__course-content">
        <p className="course-card__course-type">{courseType}</p>
        <a
          className="course-card__course-link"
          href={courseLink}
          target="_blank"
          rel="noreferrer"
        >
          <p className="course-card__course-heading">{courseHeading}</p>
        </a>
        <div className="course-card__labels">{labels}</div>
      </div>
    </div>
  );
};

export default CourseCard;
