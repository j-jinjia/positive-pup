import { customRender } from "../../utils/testUtils";
import Hero from "./Hero";

it("should match hero component snapshot", () => {
  const { container } = customRender(
    <Hero
      headingText={"About Us"}
      subheadingText={headerJSX}
      subheadingSecondLine={"My name is Melanie!"}
      isLeftAlign={leftAlign}
    />
  );

  expect(container).toMatchSnapshot();
});
