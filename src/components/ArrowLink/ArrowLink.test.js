import { customRender } from "../../utils/testUtils";
import ArrowLink from "./ArrowLink";

it("should match ArrowLink component snapshot", () => {
  const { container } = customRender(
    <ArrowLink linkText={"Test"} linkTo={"#Test"} />
  );

  expect(container).toMatchSnapshot();
});
