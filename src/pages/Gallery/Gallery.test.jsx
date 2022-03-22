import { customRender } from "../../utils/testUtils";
import Gallery from "./Gallery";

it("should render the footer component", () => {
  const { container } = customRender(<Gallery />);

  expect(container).toMatchSnapshot();
});