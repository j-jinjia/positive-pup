import { customRender } from "../../utils/testUtils";
import ServicesCard from "./ServicesCard";

it("should match ServicesCard component snapshot", () => {
  const { container } = customRender(<ServicesCard />);

  expect(container).toMatchSnapshot();
});