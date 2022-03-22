import { customRender } from "../../utils/testUtils";
import NotFound from "./NotFound";

it("should render the footer component", () => {
  const { container } = customRender(<NotFound />);

  expect(container).toMatchSnapshot();
});