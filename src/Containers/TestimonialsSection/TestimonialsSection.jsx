import "./TestimonialsSection.scss";
import testimonials from "../../assets/mockData/testimonialData";
import Testimonial from "../../components/Testimonial/Testimonial";
// import { useState } from "react";

const Testimonials = () => {
  // const [currentTest, setCurrentTest] = useState(0);

  const testimonialsListJSX = testimonials
    .filter((_testimonial, index) => {
      return index < 3;
    })
    .map((testimonial, index) => {
      return (
        <Testimonial
          key={testimonial.name + index}
          name={testimonial.name}
          date={testimonial.date}
          course={testimonial.course}
          comment={testimonial.comment}
        />
      );
    });
  return (
    <div className="testimonials">
      <h2 className="testimonials__header">RECENT TESTIMONIALS</h2>
      <h3 className="testimonials__subheader">See what people have said...</h3>
      <p className="testimonials__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem egestas
        vestibulum est neque, viverra. Vel neque dui aenean sagittis id in nulla
        tempor ac. Id adipiscing adipiscing ac odio.
      </p>
      <div className="testimonials__cards">{testimonialsListJSX}</div>
    </div>
  );
};

export default Testimonials;
