import "./ServicesCard.scss";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="servicesCard">
      <h1 className="servicesCard__title">{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default ServicesCard;
