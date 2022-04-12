import { customRender } from "../../utils/testUtils";
import ServicesCard from "./ServicesCard";
import servicesCardData from "../../assets/mockData/servicesCardData";

it("should match ServicesCard component snapshot", () => {
  const data = servicesCardData[0];
  const { container } = customRender(
    <ServicesCard
      title={data.title}
      description={data.description}
      image={data.image}
    />
  );

  expect(container).toMatchSnapshot();
});
