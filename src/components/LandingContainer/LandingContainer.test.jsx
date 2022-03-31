import { customRender } from "../../utils/testUtils";
import LandingContainer from "./LandingContainer";

it("should render the LandingContainer component", () => {
  const { container } = customRender(<LandingContainer />);

  expect(container).toMatchSnapshot();
});
