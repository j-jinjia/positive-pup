import { customRender } from "../../utils/testUtils";
import TermsAndConditions from "./TermsAndConditions";

it("should render the footer component", () => {
  const { container } = customRender(<TermsAndConditions />);

  expect(container).toMatchSnapshot();
});