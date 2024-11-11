import Button from "../Button/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-banner-label">
        <p>pay credit card bill , earn gurantee ₹200 back.</p>
        <span>
          <a href="">claim now </a>
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="banner-arrow"
          />
        </span>
      </div>
      <div className="flex absolute-center flex-col hero-section container">
        <h1 className="hero-heading">rewards for paying credit card bills</h1>
        <h2 className="hero-subHeading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </h2>
        <Button buttonText={"Download Now"}></Button>
      </div>
    </div>
  );
};

export default HeroSection;
