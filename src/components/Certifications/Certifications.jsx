import "./Certifications.scss";
import CertificateBadges from "../CertificateBadges/CertificateBadges.jsx";

const Certifications = ({ showText }) => {
  return (
    <div className="certifications">
      {showText && (
        <>
          <h2 className="certifications__header">
            You’re in professional hands!
          </h2>
          <p className="certifications__description">
            I’m a well-established, certified trainer in Dog behaviour &#38;
            training, with over{" "}
            <span className="certifications__description--highlighted-text">
              4.5 years of experience
            </span>
            . To find out more information about any of my certifications,
            please click on one of the logos.
          </p>
        </>
      )}
      <div className="certifications__badge-container">
       <CertificateBadges />
      </div>
    </div>
  );
};

export default Certifications;
