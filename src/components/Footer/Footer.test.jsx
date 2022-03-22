import { customRender } from "../../utils/testUtils";
import Footer from "./Footer";

it("should render the footer component", () => {
  const { container } = customRender(<Footer />);

  expect(container).toMatchSnapshot();
});