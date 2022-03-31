import "./CertificateBadges.scss";

import internationalBadge from "../../assets/images/certification_badges/ICAN.png";
import ukBehaviour from "../../assets/images/certification_badges/behave.png";
import victoriaStillwell from "../../assets/images/certification_badges/VSWA.png";
import PetIndustryAdvocacyInt from "../../assets/images/certification_badges/PIAI.png";
import petProGuild from "../../assets/images/certification_badges/ppg2022.png";

const CertificateBadges = () => {
  return (
    <div className="certificate-badges">
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

      <a href="https://www.petadvocacy.info/" rel="noreferrer" target="_blank">
        <img
          src={PetIndustryAdvocacyInt}
          className="certificate-badges__img"
          alt="Pet Industry Advocacy International Badge"
        />
      </a>

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
          src={petProGuild}
          className="certificate-badges__img"
          alt="the pet professional guild certification badge"
        />
      </a>

    </div>
  );
};

export default CertificateBadges;
