import { customRender } from "../../utils/testUtils";
import Navbar from "./Navbar";

it("should match the Navbar component snapshot", () => {
  const { container } = customRender(<Navbar />);

  expect(container).toMatchSnapshot();
});
