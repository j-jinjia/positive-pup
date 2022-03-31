import { customRender } from "../../utils/testUtils";
import Testimonials from "./TestimonialsSection";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should match TestimonialsSection component snapshot", () => {
  const { container } = customRender(<Testimonials />);

  expect(container).toMatchSnapshot();
});

it("check the next testimonial button works ", () => {
  const { container } = customRender(<Testimonials />);

  const cardHeader = screen.getByText("Lianna Bradshaw & Ralph").closest("div");
  expect(cardHeader).toBeInTheDocument;
  expect(cardHeader.classList.contains("testimonial--active")).toBeTruthy();

  const nextButton = screen.getByLabelText("Next Testimonial");
  userEvent.click(nextButton);
  const cardHeader2 = screen
    .getByText("Lianna Bradshaw & Ralph")
    .closest("div");
  expect(cardHeader2.classList.contains("testimonial--active")).toBeFalsy();

  expect(container).toMatchSnapshot();

  const cardHeader3 = screen
    .getByText("Bethanie Maxwell & Teddy")
    .closest("div");
  expect(cardHeader3.classList.contains("testimonial--active")).toBeTruthy();
});

it("check the previous testimonial button works ", () => {
  const { container } = customRender(<Testimonials />);

  const cardHeader = screen.getByText("Lianna Bradshaw & Ralph").closest("div");
  expect(cardHeader).toBeInTheDocument;
  expect(cardHeader.classList.contains("testimonial--active")).toBeTruthy();

  const previousButton = screen.getByLabelText("Next Testimonial");
  console.log(previousButton);
  userEvent.click(previousButton);
  const cardHeader2 = screen
    .getByText("Lianna Bradshaw & Ralph")
    .closest("div");
  expect(cardHeader2.classList.contains("testimonial--active")).toBeFalsy();

  expect(container).toMatchSnapshot();

  const cardHeader3 = screen.getByText("Karen Hayter & Tilly").closest("div");
  //   console.log(cardHeader3);
  expect(cardHeader3.classList.contains("testimonial--active")).toBeTruthy();
});
