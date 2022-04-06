import { customRender } from "../../utils/testUtils";
import CategoryFilter from "./CategoryFilter";

it("should match CategoryFilter component snapshot", () => {
  const { container } = customRender(<CategoryFilter />);

  expect(container).toMatchSnapshot();
});