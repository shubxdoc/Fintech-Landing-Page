import Button from "../Button/Button";
import "./securitySection.css";

const SecuritySection = () => {
  return (
    <div className="security-sec photo-section">
      <div className="container">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <h1 className="photo-section-heading security-heading">
              security first and second.
            </h1>
            <h2 className="photo-section-subHeading">
              whats's yours remains only yours.
            </h2>
          </div>
          <div className="photo-section-bottom">
            <p className="photo-section-desc security-desc">
              MintFin ensures that all your personal data and transactions are
              encrypted, and secured so what's yours remains only yours. there's
              no room fir mistakes because we didn't leave any.
            </p>
            <div>
              <Button buttonText="Become a member"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
