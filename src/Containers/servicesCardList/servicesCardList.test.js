import { customRender } from "../../utils/testUtils";
import ServicesCardList from "./servicesCardList";
import servicesCardData from "../../assets/mockData/courseData";

it("should match servicesCardList component snapshot", () => {
  const { container } = customRender(
    <ServicesCardList cardData={servicesCardData} />
  );

  expect(container).toMatchSnapshot();
});
