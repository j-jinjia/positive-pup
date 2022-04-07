import { customRender } from "../../utils/testUtils";
import Header from "./Header";

it("should match the Header component snapshot", () => {
  const { container } = customRender(<Header />);

  expect(container).toMatchSnapshot();
});
