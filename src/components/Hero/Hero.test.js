import { customRender } from "../../utils/testUtils";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import dogImage from "../../assets/images/landing_page/dog.svg";

it("should match hero component snapshot", () => {
  const { container } = customRender(
    <Hero
      header={
        <h2 className="hero-content__header">
          {"header"}
          <span className="hero-content__header-highlight">{"paw."}</span>
        </h2>
      }
      subheaderText={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci diam malesuada pellentesque aenean sed ut egestas"
      }
      link={<Link to={"/services"}>{"What We Offer"}</Link>}
      dogImage={dogImage}
    />
  );

  expect(container).toMatchSnapshot();
});
