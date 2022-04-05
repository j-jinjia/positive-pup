import { customRender } from "../../utils/testUtils";
import Button from "./Button";

it("should match button component snapshot", () => {
  const { container } = customRender(<Button />);

  expect(container).toMatchSnapshot();
});
it("should match button component snapshot using link property ", () => {
  const { container } = customRender(<Button link={"test"} />);

  expect(container).toMatchSnapshot();
});
