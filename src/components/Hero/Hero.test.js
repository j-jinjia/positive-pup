import { customRender } from "../../utils/testUtils";
import Hero from "./Hero";

it("should match form component snapshot", () => {
  const { container } = customRender(<Hero />);

  expect(container).toMatchSnapshot();
});
