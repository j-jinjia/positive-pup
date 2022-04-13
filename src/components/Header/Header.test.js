import { customRender } from "../../utils/testUtils";
import Header from "./Header";

it("should match the Header component snapshot", () => {
  const { container } = customRender(
    <Header
      headingText={"About Us"}
      subheadingText={"headerJSX"}
      subheadingSecondLine={"My name is Melanie!"}
      isLeftAlign={true}
    />
  );

  expect(container).toMatchSnapshot();
});
