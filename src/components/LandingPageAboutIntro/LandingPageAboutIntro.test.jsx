import { customRender } from "../../utils/testUtils";
import LandingPageAboutIntro from "./LandingPageAboutIntro";

it("should render the LandingPageAboutIntro component", () => {
  const { container } = customRender(<LandingPageAboutIntro />);

  expect(container).toMatchSnapshot();
});
