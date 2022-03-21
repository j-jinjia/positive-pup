import { customRender } from "../../utils/testUtils";
import CertificateBadges from "./CertificateBadges";

it("should render the home page", () => {
  const { container } = customRender(<CertificateBadges />);

  expect(container).toMatchSnapshot();
});
