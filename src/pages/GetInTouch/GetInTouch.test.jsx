import { customRender } from "../../utils/testUtils";
import GetInTouch from "./GetInTouch";

it("should render the footer component", () => {
  const { container } = customRender(<GetInTouch />);

  expect(container).toMatchSnapshot();
});