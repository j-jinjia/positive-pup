import "./ServicesCard.scss";
import vectorBlack from "../../assets/svgs/Vector-black.svg";
import { Link } from "react-router-dom";

const ServicesCard = ({ title, description, image }) => {
  return (
    <div className="services-card">
      <h3 className="services-card__title">{title}</h3>
      <p>{description}</p>
      <Link to="/services" className="services-card__button">
        <img
          className="services-card__vector services-card__vector--black"
          src={vectorBlack}
          alt=""
        />
      </Link>

      <img className="services-card__img" src={image} alt="dog" />
    </div>
  );
};

export default ServicesCard;
