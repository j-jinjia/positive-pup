import { customRender } from "../../utils/testUtils";
import Home from "./Home";

it("should render the Home Page", () => {
  const { container } = customRender(<Home />);

  expect(container).toMatchSnapshot();
});
