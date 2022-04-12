import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Services from "./Services";

it("should render the Services page", () => {
  const { container } = customRender(<Services />);

  expect(container).toMatchSnapshot();
});

it("search bar should not render on mobile", () => {
  global.innerWidth = 320;
  global.dispatchEvent(new Event("resize"));

  const searchBar = screen.queryByRole("input");

  expect(searchBar).toBeNull();
});
