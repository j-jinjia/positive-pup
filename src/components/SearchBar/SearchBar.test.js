import { customRender } from "../../utils/testUtils";
import SearchBar from "./SearchBar";

it("should match SearchBar component snapshot", () => {
  const { container } = customRender(<SearchBar searchTerm="rising stars" />);

  expect(container).toMatchSnapshot();
});
