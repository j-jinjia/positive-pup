import { customRender } from "../../utils/testUtils";
import BookNow from "./BookNow";

it("should render the footer component", () => {
  const { container } = customRender(<BookNow />);

  expect(container).toMatchSnapshot();
});