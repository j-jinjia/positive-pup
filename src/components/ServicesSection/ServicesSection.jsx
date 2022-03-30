import Button from "../Button/Button";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesSection.scss";

const ServicesSection = ({ link }) => {
  return (
    <div className="services-section">
      <h2 className="services-section__header">Services I Offer</h2>
      <p className="services-section__sub-header">
        A breakdown of all the different kind of services I offer.
      </p>
      <hr className="services-section__line-break"></hr>
      <div className="services-section__course-container">
        <ServicesCard
          title="Online Courses"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod
          ipsum saepe ipsa optio dolorem veniam tenetur nemo labore ut"
        />
        <ServicesCard
          title="Group Courses"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod
          ipsum saepe ipsa optio dolorem veniam tenetur nemo labore ut"
        />
        <ServicesCard
          title="Bespoke Packages"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod
          ipsum saepe ipsa optio dolorem veniam tenetur nemo labore ut"
        />
      </div>
      <Button buttonText="VIEW OUR SERVICES" isSecondary={true} link={link} />
    </div>
  );
};

export default ServicesSection;
