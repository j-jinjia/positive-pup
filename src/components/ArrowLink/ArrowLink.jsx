import "./ArrowLink.scss";
import arrow from "../../assets/svgs/arrow.svg";
import { Link } from "react-router-dom";

const ArrowLink = ({ linkText }) => {
  return (
    <Link className="arrow-link" to="/">
      {linkText}
      <img className="arrow-link__arrow" src={arrow} alt="" />
    </Link>
  );
};

export default ArrowLink;
