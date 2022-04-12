import { customRender } from "../../utils/testUtils";
import FAQsGetInTouch from "./FAQsGetInTouch";

it("should match the FAQS Get in Touch component snapshot", () => {
  const { container } = customRender(<FAQsGetInTouch />);

  expect(container).toMatchSnapshot();
});
