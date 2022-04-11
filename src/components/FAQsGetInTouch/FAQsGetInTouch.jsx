import Button from "../Button/Button";
import Header from "../Header/Header";
import "./FAQsGetInTouch.scss";

const FAQsGetInTouch = () => {
  return (
    <div className="faq-get-in-touch">
      <Header
        className="faq-get-in-touch__heading"
        subheadingText="Can't find an answer to your Question?"
      />
      <p className="faq-get-in-touch__paragraph">
        Please get in touch below if you can’t find an answer youre looking for.
        I’d love to hear from you! Thanks Mel
      </p>
      <Button buttonText="GET IN TOUCH" isSecondary />
    </div>
  );
};

export default FAQsGetInTouch;
