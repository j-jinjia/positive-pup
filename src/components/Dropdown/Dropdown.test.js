import { customRender } from "../../utils/testUtils";
import Dropdown from "./Dropdown";
import faqData from "../../assets/mockData/faqsData";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should match Dropdown component snapshot", () => {
  const dropdownData = faqData[0];
  const { container } = customRender(
    <Dropdown question={dropdownData.question} answer={dropdownData.answer} />
  );

  expect(container).toMatchSnapshot();
});

it("if the dropdown is clicked, the text should become visible", () => {
  customRender(<Dropdown question={"question"} answer={"answer"} />);
  const showToggle = screen.getByRole("button");
  userEvent.click(showToggle);
  const answer = screen.getByText("answer");
  expect(answer).toBeInTheDocument();
});
