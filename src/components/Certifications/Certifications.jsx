import "./Certifications.scss";
import internationalBadge from "../../assets/images/certification_badges/ICAN.png";
import ppgBadge from "../../assets/images/certification_badges/ppg2022.png";
import ukBehaviour from "../../assets/images/certification_badges/behave.png";
import victoriaStillwell from "../../assets/images/certification_badges/VSWA.png";
import petAdvocacy from "../../assets/images/certification_badges/PIAI.png";

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
        <a
          href="https://companionanimal.network/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={internationalBadge}
            className="certifications__badge"
            alt="international companion animal network certification badge"
          />
        </a>

        <a
          href="https://www.petadvocacy.info/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={petAdvocacy}
            className="certifications__badge"
            alt="Pet Industry Advocacy International badge"
          />{" "}
        </a>
        <a
          href="https://www.vsdogtrainingacademy.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={victoriaStillwell}
            className="certifications__badge"
            alt="Victoria Stillwell certification badge"
          />
        </a>

        <a href="https://ukdogcharter.org/" rel="noreferrer" target="_blank">
          <img
            src={ukBehaviour}
            className="certifications__badge"
            alt="UK dog behaviour and training charter certification badge"
          />
        </a>
        <a
          href="https://www.petprofessionalguild.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={ppgBadge}
            className="certifications__badge"
            alt="the pet professional guild certification badge"
          />
        </a>
      </div>
    </div>
  );
};

export default Certifications;
