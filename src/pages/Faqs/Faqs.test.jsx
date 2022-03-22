import { customRender } from "../../utils/testUtils";
import Faqs from "./Faqs";

it("should render the footer component", () => {
  const { container } = customRender(<Faqs />);

  expect(container).toMatchSnapshot();
});