import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./CardList.scss";

const CardList = ({ cardData }) => {
  const cardsListJSX = cardData.map((card, index) => {
    return (
      <ServicesCard
        key={index}
        title={card.title}
        description={card.description}
        image={card.image}
      />
    );
  });
  return <div className="card-list">{cardsListJSX}</div>;
};

export default CardList;
