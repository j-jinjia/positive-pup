import { customRender } from "../../utils/testUtils";
import Button from "./Button";

it("should match button component snapshot", () => {
  const { container } = customRender(<Button />);

  expect(container).toMatchSnapshot();
});
