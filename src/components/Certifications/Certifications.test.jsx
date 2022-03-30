import { customRender } from "../../utils/testUtils";
import Certifications from "./Certifications";

it("should render the home page", () => {
  const { container } = customRender(<Certifications />);

  expect(container).toMatchSnapshot();
});
