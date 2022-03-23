import { customRender } from "../../utils/testUtils";
import Gallery from "./Gallery";

it("should render the Gallery page", () => {
  const { container } = customRender(<Gallery />);

  expect(container).toMatchSnapshot();
});
