import { customRender } from "../../utils/testUtils";
import Services from "./Services";

it("should render the footer component", () => {
  const { container } = customRender(<Services />);

  expect(container).toMatchSnapshot();
});