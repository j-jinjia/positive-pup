import { render } from "@testing-library/react";
import Button from "./Button";

it("should match button component snapshot", () => {
  const { container } = render(<Button />);

  expect(container).toMatchSnapshot();
});
