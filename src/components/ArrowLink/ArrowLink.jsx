import "./ArrowLink.scss";
import arrow from "../../assets/svgs/arrow.svg";

const ArrowLink = ({ linkText }) => {
  return (
    <a className="link" href="">
      {linkText}
      <img className="link__arrow" src={arrow} alt="" />
    </a>
  );
};

export default ArrowLink;
