import { customRender } from "../../utils/testUtils";
import Faqs from "./Faqs";

it("should render the Faqs page", () => {
  const { container } = customRender(<Faqs />);

  expect(container).toMatchSnapshot();
});
