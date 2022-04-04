import { customRender } from "../../utils/testUtils";
import ServicesSearchBar from "./ServicesSearchBar";

it("should match ServicesSearchBar component snapshot", () => {
  const { container } = customRender(<ServicesSearchBar/>);

  expect(container).toMatchSnapshot();
});