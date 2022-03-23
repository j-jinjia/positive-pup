import "./CardLabel.scss";

const CardLabel = ({ name }) => {
  return (
    <div className="card-label">
      <span className="card-label__text">{name}</span>
    </div>
  );
};

export default CardLabel;
