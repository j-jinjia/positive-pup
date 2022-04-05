import { customRender } from "../../utils/testUtils";
import BookNowHeader from "./BookNowHeader";

it("should render the BookNowHeader component", () => {
  const { container } = customRender(<BookNowHeader />);

  expect(container).toMatchSnapshot();
});
