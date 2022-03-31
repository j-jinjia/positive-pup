import { customRender } from "../../utils/testUtils";
import ServicesSection from "./ServicesSection";

it("should match ServicesSection component snapshot", () => {
  const { container } = customRender(<ServicesSection />);

  expect(container).toMatchSnapshot();
});
