import "./ArrowLink.scss";
import arrow from "../../assets/svgs/arrow.svg";

const ArrowLink = ({ linkText }) => {
  return (
    <a className="ArrowLink" href="">
      {linkText}
      <img className="ArrowLink__arrow" src={arrow} alt="" />
    </a>
  );
};

export default ArrowLink;
