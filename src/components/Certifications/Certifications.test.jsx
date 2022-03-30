import { customRender } from "../../utils/testUtils";
import Certifications from "./Certifications";

it("should render the certifications component", () => {
  const { container } = customRender(<Certifications />);

  expect(container).toMatchSnapshot();
});
