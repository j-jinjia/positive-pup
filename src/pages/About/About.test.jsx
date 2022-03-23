import { customRender } from "../../utils/testUtils";
import About from "./About";

it("should render the About page", () => {
  const { container } = customRender(<About />);

  expect(container).toMatchSnapshot();
});
