import "./ContactHeader.scss";
import mailIcon from "../../assets/svgs/mail.svg";

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <h1 className="contact-header__title">CONTACT US</h1>
      <h2 className="contact-header__heading">
        {"I'd love to hear from you!"}
      </h2>
      <p className="contact-header__text">
        Please fill in the form to the right or alternatively, drop me an email
        using the link below.
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
