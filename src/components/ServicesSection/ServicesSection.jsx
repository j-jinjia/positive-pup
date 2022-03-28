import Button from "../Button/Button";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesSection.scss";

const ServicesSection = () => {
  return (
    <div>
      <h1>Services I Offer</h1>
      <h2>A breakdown of all the different kind of services I offer.</h2>
      <hr className="ServicesSection__line-break"></hr>
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
      <Button buttonText="VIEW OUR SERVICES" />
    </div>
  );
};

export default ServicesSection;
