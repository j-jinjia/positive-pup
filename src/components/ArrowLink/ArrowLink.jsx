import "./ArrowLink.scss";
import arrow from "../../assets/svgs/arrow.svg";

const ArrowLink = ({ linkText, linkTo }) => {
  return (
    <a href={linkTo} className="arrow-link">
      {linkText}
      <img className="arrow-link__arrow" src={arrow} alt="" />
    </a>
  );
};

export default ArrowLink;
