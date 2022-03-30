import "./Testimonial.scss";
import calendar from "../../assets/svgs/calendar.svg";
import folder from "../../assets/svgs/testimonial_course.svg";
import quotations from "../../assets/svgs/quotations-1.svg";

const Testimonial = ({ name, date, course, comment, active }) => {
  const cardClass = active ? "testimonial testimonial--active" : "testimonial";

  return (
    <div className={cardClass}>
      <h3 className="testimonial__header">{name}</h3>
      <div className="testimonial__details">
        <p className="testimonial__detail">
          <img src={calendar} alt="calendar" /> {date}
        </p>
        <p className="testimonial__detail">
          <img src={folder} alt="" /> {course}
        </p>
      </div>
      <p className="testimonial__comment">{comment}</p>
      <img
        className="testimonial__quotations testimonial__quotations--1"
        src={quotations}
        alt="quotation marks"
      />
      <img
        className="testimonial__quotations testimonial__quotations--2"
        src={quotations}
        alt="quotation marks"
      />
    </div>
  );
};

export default Testimonial;
