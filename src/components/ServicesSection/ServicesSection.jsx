import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ServicesCardList from "../../Containers/servicesCardList/servicesCardList";
import "./ServicesSection.scss";
import servicesCardData from "../../assets/mockData/servicesCardData";

const ServicesSection = () => {
  return (
    <div className="services-section" id="services-section">
      <h2 className="services-section__header">Services I Offer</h2>
      <p className="services-section__sub-header">
        A breakdown of all the different kind of services I offer.
      </p>
      <hr className="services-section__line-break"></hr>
      <ServicesCardList cardData={servicesCardData} />
      <Button
        isSecondary={true}
        link={<Link to="/services">VIEW OUR SERVICES</Link>}
      />
    </div>
  );
};

export default ServicesSection;
