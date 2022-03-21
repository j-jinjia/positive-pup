import { customRender } from "../../utils/testUtils";
import Home from "./Home";

it("should render the home page", () => {
  const { container } = customRender(<Home />);

  expect(container).toMatchSnapshot();
});
