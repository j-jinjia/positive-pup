import { customRender } from "../../utils/testUtils";
import NotFound from "./NotFound";

it("should render the NotFound Page", () => {
  const { container } = customRender(<NotFound />);

  expect(container).toMatchSnapshot();
});