import { render } from "@testing-library/react";
import LandingPageHeaderSection from "./LandingPageHeaderSection";

it("should match form component snapshot", () => {
  const { container } = render(<LandingPageHeaderSection />);

  expect(container).toMatchSnapshot();
});
