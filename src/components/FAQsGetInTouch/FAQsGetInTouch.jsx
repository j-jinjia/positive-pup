import Button from "../Button/Button";
import Header from "../Header/Header";
import "./FAQsGetInTouch.scss";
import { Link } from "react-router-dom";

const FAQsGetInTouch = () => {
  return (
    <div className="faq-get-in-touch">
      <Header
        className="faq-get-in-touch__heading"
        subheadingText="Can't find an answer to your Question?"
      />
      <p className="faq-get-in-touch__paragraph">
        Please get in touch below if you can’t find an answer you’re looking
        for. I’d love to hear from you! Thanks Mel
      </p>

      <Button
        buttonText={"GET IN TOUCH"}
        isSecondary
        link={<Link to="/get-in-touch">GET IN TOUCH</Link>}
      />
    </div>
  );
};

export default FAQsGetInTouch;
