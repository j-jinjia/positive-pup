import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

it("should match the Navbar component snapshot", () => {
  const { container } = customRender(<Navbar />);

  expect(container).toMatchSnapshot();
});

it("services dropdown should be visible when button clicked", () => {
  customRender(<Navbar />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const viewAll = screen.getByText("View All");
  expect(viewAll).toBeInTheDocument();
});
