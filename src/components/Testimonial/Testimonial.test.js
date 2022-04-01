import Testimonial from "../../components/Testimonial/Testimonial";
import { customRender } from "../../utils/testUtils";
import testimonialData from "../../assets/mockData/testimonialData";

it("should match inactive Testimonial component snapshot", () => {
  const testimonial = testimonialData[0];
  const { container } = customRender(
    <Testimonial
      name={testimonial.name}
      date={testimonial.date}
      course={testimonial.course}
      comment={testimonial.comment}
      active={false}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match active Testimonial component snapshot", () => {
  const testimonial = testimonialData[0];
  const { container } = customRender(
    <Testimonial
      key={testimonial.name}
      name={testimonial.name}
      date={testimonial.date}
      course={testimonial.course}
      comment={testimonial.comment}
      active={true}
    />
  );

  expect(container).toMatchSnapshot();
});
