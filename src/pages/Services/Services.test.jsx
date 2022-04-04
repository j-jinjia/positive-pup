import ServicesSearchBar from "../../components/ServicesSearchBar/SearchBar";
import { customRender } from "../../utils/testUtils";
import Services from "./Services";

it("should render the Services page", () => {
  const { container } = customRender(<Services />);

  expect(container).toMatchSnapshot();
});

it("should render the Services search bar", () => {
  const { container } = customRender(<ServicesSearchBar />);

  expect(container).toMatchSnapshot();
});
