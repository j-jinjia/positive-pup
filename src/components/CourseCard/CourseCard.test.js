import { customRender } from "../../utils/testUtils";
import CourseCard from "./CourseCard";
import dogImage from "../../assets/images/dog-image.png";

it("should match CourseCard component snapshot", () => {
  const { container } = customRender(
    <CourseCard
      image={dogImage}
      courseType="Group Class"
      courseHeading="Little Stars"
      labelsArray={["week", "online"]}
    />
  );

  expect(container).toMatchSnapshot();
});
