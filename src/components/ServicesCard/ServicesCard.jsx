import "./ServicesCard.scss";
import vectorBlack from "../../assets/svgs/Vector-black.svg";
import vectorWhite from "../../assets/svgs/Vector-white.svg";
import { Link } from "react-router-dom";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="services-card">
      <h2 className="services-card__title">{title}</h2>
      <h3>{description}</h3>
      <Link to="/services">
        <div className="services-card__button">
          <img
            className="services-card__vector services-card__vector--black"
            src={vectorBlack}
            alt=""
          />
          {/* Put a second chevron here of a different colour with display=none. We can use this to change the colour when we add hover later */}
          <img
            className="services-card__vector services-card__vector--white"
            src={vectorWhite}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
