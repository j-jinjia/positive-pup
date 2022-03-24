import { customRender } from "../../utils/testUtils";
import LandingPageAboutIntro from "./LandingPageAboutIntro";

it("should render the home page", () => {
  const { container } = customRender(<LandingPageAboutIntro />);

  expect(container).toMatchSnapshot();
});
