import Button from "../Button/Button";
import "./feelSpecial.css";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="container">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <h1 className="photo-section-heading">fell special more often.</h1>
            <h2 className="photo-section-subHeading">
              exclusive rewards for paying your bills
            </h2>
          </div>
          <div className="photo-section-bottom">
            <p className="photo-section-desc">
              every time you pay your credit card bills on MintFin, you receive
              MintFin coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on MintFin,
              good begets good.
            </p>
            <div>
              <Button buttonText="Explore Rewards"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
