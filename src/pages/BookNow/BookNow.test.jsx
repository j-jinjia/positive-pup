import { customRender } from "../../utils/testUtils";
import BookNow from "./BookNow";

it("should render the BookNow page", () => {
  const { container } = customRender(<BookNow />);

  expect(container).toMatchSnapshot();
});
