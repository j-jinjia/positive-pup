import { customRender } from "../../utils/testUtils";
import AboutUsTrainingSection from "./AboutUsTrainingSection";

it("should render the AbouUsTrainingSection component", () => {
  const { container } = customRender(<AboutUsTrainingSection />);

  expect(container).toMatchSnapshot();
});
