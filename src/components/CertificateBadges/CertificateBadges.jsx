import "./CertificateBadges.scss";
import internationalBadge from "../../assets/images/certification_badges/international_companion.png";
import ppgBadge from "../../assets/images/certification_badges/PPG_Member_Badge.png";
import ukBehaviour from "../../assets/images/certification_badges/UK_dog_behaviour.png";
import victoriaStillwell from "../../assets/images/certification_badges/victoria_stillwell.png";


const CertificateBadges = (props) => {

  const {showText} = props;
  let certificateClassName = "certification-section";
  certificateClassName += showText ? " certification-section--show" : " certification-section--hide";


  return (
    <>
      <div className={certificateClassName}>
        <h2 className="certification-section__header">You’re in professional hands!</h2>
        <p className="certification-section__paragraph">I’m a well-established, certified trainer in Dog behaviour &#38; training, withover  <span className="certification-section__paragraph--highlighted-text">4.5 years of experience.</span> To find out moreinformation  about any of my certifications, please click on one of the logos.</p>
      </div>    

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
    </>
  );
};

export default CertificateBadges;
