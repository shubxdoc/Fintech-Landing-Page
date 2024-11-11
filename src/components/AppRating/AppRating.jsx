import "./appRating.css";
import Button from "../Button/Button";

const AppRating = () => {
  function getIosPrefix() {
    return (
      <img
        src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
        className="app-rating-icon"
      />
    );
  }
  function getAndroidPrefix() {
    return (
      <img
        src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
        className="app-rating-icon"
      />
    );
  }

  return (
    <div className="container flex app-rating">
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getIosPrefix()}
          ></Button>
        </div>
      </div>
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getAndroidPrefix()}
          ></Button>
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app"></Button>
      </div>
    </div>
  );
};

export default AppRating;
