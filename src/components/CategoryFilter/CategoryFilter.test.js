import { customRender } from "../../utils/testUtils";
import CategoryFilter from "./CategoryFilter";

it("should match CategoryFilter component snapshot", () => {
  const { container } = customRender(
    <CategoryFilter
      courseType={"All"}
      filterOptions={[
        "All",
        "Online Courses",
        "Group Classes",
        "Bespoke Packages",
      ]}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match CategoryFilter component snapshot when an option is selected", () => {
  const { container } = customRender(
    <CategoryFilter
      courseType={"Online Courses"}
      filterOptions={[
        "All",
        "Online Courses",
        "Group Classes",
        "Bespoke Packages",
      ]}
    />
  );

  expect(container).toMatchSnapshot();
});
