import "./TestimonialsSection.scss";
import testimonials from "../../assets/mockData/testimonialData";
import Testimonial from "../../components/Testimonial/Testimonial";
import arrow from "../../assets/svgs/testimonial-arrow.svg";
import dot from "../../assets/svgs/carousel-dot.svg";
import dotFull from "../../assets/svgs/carousel-dot-active.svg";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTest, setCurrentTest] = useState(2);
  const [dotsArr, setDotsArr] = useState([true, false, false, false, false]);

  const dotsJSX = dotsArr.map((dotState, index) => {
    const dotType = dotState ? dotFull : dot;
    return <img key={index} src={dotType} alt="carousel dot" />;
  });

  const testimonialsListJSX = testimonials
    .filter((_testimonial, index) => {
      return index < 5;
    })
    .map((testimonial, index) => {
      return (
        <Testimonial
          key={testimonial.name + index}
          name={testimonial.name}
          date={testimonial.date}
          course={testimonial.course}
          comment={testimonial.comment}
          active={index === currentTest}
        />
      );
    });

  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      newArr.push(i === currentTest);
    }
    setDotsArr(newArr);
  }, [currentTest]);

  const handleClick = (e) => {
    const buttonClass = e.target.className;
    const button = buttonClass.charAt(buttonClass.length - 1);
    button === "1"
      ? setCurrentTest(currentTest - 1)
      : setCurrentTest(currentTest + 1);
  };
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
      <div className="testimonials__carousel">
        <button className="testimonials__btn" onClick={handleClick}>
          <img
            className="testimonials__btn-arrow testimonials__btn-arrow--1"
            src={arrow}
            alt="left arrow"
          />
        </button>
        {dotsJSX}
        <button className="testimonials__btn" onClick={handleClick}>
          <img
            className="testimonials__btn-arrow testimonials__btn-arrow--2"
            src={arrow}
            alt="left arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
