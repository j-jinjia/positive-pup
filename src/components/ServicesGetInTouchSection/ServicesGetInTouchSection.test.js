import { customRender } from "../../utils/testUtils";
import ServicesGetInTouchSection from "./ServicesGetInTouchSection";

it("should match ServicesGetInTouchSection component snapshot", () => {
  const { container } = customRender(<ServicesGetInTouchSection />);

  expect(container).toMatchSnapshot();
});
