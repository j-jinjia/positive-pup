import "./ContactHeader.scss";
import mailIcon from "../../assets/svgs/mail.svg";
import Header from "../Header/Header";

const ContactHeader = ({ headingText, subheadingText, isLeftAlign }) => {
  return (
    <div className="contact-header">
      <Header
        headingText={headingText}
        subheadingText={subheadingText}
        isLeftAlign={isLeftAlign}
      />

      <p className="contact-header__text">
        Please fill in the form or alternatively, drop me an email using the
        link below.
      </p>
      <a
        className="contact-header__anchor"
        href="mailto:info@thepositivepup.co.uk"
      >
        <img src={mailIcon} alt="" />
        <p className="contact-header__button-text">info@thepositivepup.co.uk</p>
      </a>
    </div>
  );
};

export default ContactHeader;
