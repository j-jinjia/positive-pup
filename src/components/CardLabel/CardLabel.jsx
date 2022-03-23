import "./CardLabel.scss";

const CardLabel = ({ name }) => {
  return (
    <div className="label">
      <span className="label__text">{name}</span>
    </div>
  );
};

export default CardLabel;
