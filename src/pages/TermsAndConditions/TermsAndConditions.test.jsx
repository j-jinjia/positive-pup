import { customRender } from "../../utils/testUtils";
import TermsAndConditions from "./TermsAndConditions";

it("should render the terms and conditions page", () => {
  const { container } = customRender(<TermsAndConditions />);

  expect(container).toMatchSnapshot();
});