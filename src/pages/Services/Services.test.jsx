import { customRender } from "../../utils/testUtils";
import Services from "./Services";

it("should render the Serives page", () => {
  const { container } = customRender(<Services />);

  expect(container).toMatchSnapshot();
});
