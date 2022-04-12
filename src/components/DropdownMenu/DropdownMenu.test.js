import { customRender } from "../../utils/testUtils";
import DropdownMenu from "./DropdownMenu";

it("should match the DropdownMenu component snapshot", () => {
  const { container } = customRender(<DropdownMenu />);

  expect(container).toMatchSnapshot();
});
