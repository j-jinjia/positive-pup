import Testimonial from "../../components/Testimonial/Testimonial";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

it("if the text has more than the character limit a show more button should be visible", () => {
  const testimonial = testimonialData[0];
  customRender(
    <Testimonial
      key={testimonial.name}
      name={testimonial.name}
      date={testimonial.date}
      course={testimonial.course}
      comment={testimonial.comment}
      active={true}
    />
  );
  const showMoreButton = screen.queryByRole("button");
  expect(showMoreButton).toBeInTheDocument();
});

it("if the text has less than the character limit a show more button should not be visible", () => {
  const testimonial = testimonialData[2];
  customRender(
    <Testimonial
      key={testimonial.name}
      name={testimonial.name}
      date={testimonial.date}
      course={testimonial.course}
      comment={testimonial.comment}
      active={true}
    />
  );
  const showMoreButton = screen.queryByRole("button");
  expect(showMoreButton).toBeNull();
});

it("if show more button is clicked, the button should update", () => {
  const testimonial = testimonialData[0];
  customRender(
    <Testimonial
      key={testimonial.name}
      name={testimonial.name}
      date={testimonial.date}
      course={testimonial.course}
      comment={testimonial.comment}
      active={true}
    />
  );
  const showToggle = screen.getByRole("button");
  userEvent.click(showToggle);
  expect(showToggle).toHaveTextContent("show less");
  userEvent.click(showToggle);
  expect(showToggle).toHaveTextContent("show more");
});
