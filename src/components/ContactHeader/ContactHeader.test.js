import { customRender } from "../../utils/testUtils";
import ContactHeader from "./ContactHeader";

it("should match ContactHeader component snapshot", () => {
  const { container } = customRender(<ContactHeader />);

  expect(container).toMatchSnapshot();
});
