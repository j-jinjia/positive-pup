import { customRender } from "../../utils/testUtils";
import About from "./About";

it("should render the footer component", () => {
  const { container } = customRender(<About />);

  expect(container).toMatchSnapshot();
});