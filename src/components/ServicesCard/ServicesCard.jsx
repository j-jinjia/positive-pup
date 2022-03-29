import "./ServicesCard.scss";
import vectorBlack from "../../assets/svgs/Vector-black.svg";
import vectorWhite from "../../assets/svgs/Vector-white.svg";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="services-card">
      <h1 className="services-card__title">{title}</h1>
      <h2>{description}</h2>
      <div className="services-card__button">
        <img
          className="services-card__vector services-card__vector--black"
          src={vectorBlack}
          alt=""
        />
        <img
          className="services-card__vector services-card__vector--white"
          src={vectorWhite}
          alt=""
        />
      </div>
    </div>
  );
};

export default ServicesCard;
