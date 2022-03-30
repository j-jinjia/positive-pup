import { customRender } from "../../utils/testUtils";
import LandingPageAboutIntro from "./LandingContainer";

it("should render the LandingPageAboutIntro component", () => {
  const { container } = customRender(<LandingPageAboutIntro />);

  expect(container).toMatchSnapshot();
});
