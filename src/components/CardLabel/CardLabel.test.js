import { customRender } from "../../utils/testUtils";
import CardLabel from "./CardLabel"

it("should match CardLabel component snapshot", () => {
  const { container } = customRender(<CardLabel name="Online" />);

  expect(container).toMatchSnapshot();
});
