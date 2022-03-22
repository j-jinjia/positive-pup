import { render } from "@testing-library/react";
import Hero from "./Hero";

it("should match form component snapshot", () => {
  const { container } = render(<Hero />);

  expect(container).toMatchSnapshot();
});
