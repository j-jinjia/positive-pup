import { customRender } from "../../utils/testUtils";
import GetInTouch from "./GetInTouch";

it("should render the GetInTouch page", () => {
  const { container } = customRender(<GetInTouch />);

  expect(container).toMatchSnapshot();
});