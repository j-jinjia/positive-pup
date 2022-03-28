import { customRender } from "../../utils/testUtils";
import { CoursesList } from "./CoursesList";
import courseData from "../../assets/mockData/courseData";

it("should match CoursesList component snapshot", () => {
  const { container } = customRender(<CoursesList courseData={courseData} />);

  expect(container).toMatchSnapshot();
});
