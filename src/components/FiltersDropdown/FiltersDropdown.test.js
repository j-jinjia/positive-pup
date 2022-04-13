import { customRender } from "../../utils/testUtils";
import FiltersDropdown from "./FiltersDropdown";

it("should match the FiltersDropdown component snapshot", () => {
  const { container } = customRender(<FiltersDropdown />);

  expect(container).toMatchSnapshot();
});
