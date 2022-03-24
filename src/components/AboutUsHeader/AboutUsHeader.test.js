import { customRender } from "../../utils/testUtils";
import AboutUsHeader from "./AboutUsHeader";

it("should match AboutUsHeader component snapshot", () => {
  const { container } = customRender(<AboutUsHeader />);

  expect(container).toMatchSnapshot();
});
