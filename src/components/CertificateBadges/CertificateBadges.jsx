import "./CertificateBadges.scss";
import internationalBadge from "../../assets/images/certification_badges/international_companion.png";
import ppgBadge from "../../assets/images/certification_badges/PPG_Member_Badge.png";
import ukBehaviour from "../../assets/images/certification_badges/UK_dog_behaviour.png";
import victoriaStillwell from "../../assets/images/certification_badges/victoria_stillwell.png";

const CertificateBadges = () => {
  return (
    <div className="certificate-badges">
      <a
        href="https://www.vsdogtrainingacademy.com/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={victoriaStillwell}
          className="certificate-badges__img"
          alt="Victoria Stillwell certification badge"
        />
      </a>
      <a
        href="https://companionanimal.network/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={internationalBadge}
          className="certificate-badges__img"
          alt="international companion animal network certification badge"
        />
      </a>
      <a href="https://ukdogcharter.org/" rel="noreferrer" target="_blank">
        <img
          src={ukBehaviour}
          className="certificate-badges__img"
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
          className="certificate-badges__img"
          alt="the pet professional guild certification badge"
        />
      </a>
    </div>
  );
};

export default CertificateBadges;
