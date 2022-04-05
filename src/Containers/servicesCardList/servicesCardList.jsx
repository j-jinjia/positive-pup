import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./servicesCardList.scss";

const servicesCardList = ({ cardData }) => {
  const cardsListJSX = cardData.map((card) => {
    return (
      <ServicesCard
        key={card.id}
        title={card.title}
        description={card.description}
        image={card.image}
      />
    );
  });
  return <div className="services-card-list">{cardsListJSX}</div>;
};

export default servicesCardList;
