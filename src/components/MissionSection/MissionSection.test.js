import { customRender } from "../../utils/testUtils";
import MissionSection from "./MissionSection";

it("should render the footer component", () => {
  const { container } = customRender(<MissionSection />);

  expect(container).toMatchSnapshot();
});
