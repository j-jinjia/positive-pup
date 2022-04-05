import { customRender } from "../../utils/testUtils";
import Services from "./Services";

it("should render the Services page", () => {
  const { container } = customRender(<Services />);

  expect(container).toMatchSnapshot();
});
