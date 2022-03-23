import { customRender } from "../../utils/testUtils";
import Testimonials from "./Testimonials";

it("should render the testimonials page", () => {
  const { container } = customRender(<Testimonials />);

  expect(container).toMatchSnapshot();
});
