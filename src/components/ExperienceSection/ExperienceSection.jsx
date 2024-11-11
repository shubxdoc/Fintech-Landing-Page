import Button from "../Button/Button";
import "./experienceSection.css";

const ExperienceSection = () => {
  return (
    <div className="experience-sec photo-section">
      <div className="container">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <h1 className="photo-section-heading experience-heading">
              we take your money matters seriously.
            </h1>
            <h2 className="photo-section-subHeading">
              so that you don't have to.
            </h2>
          </div>
          <div className="photo-section-bottom">
            <p className="photo-section-desc experience-desc">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statements analysis lets you know where your money
              goes, always.
            </p>
            <div>
              <Button buttonText="Experience the upgrade"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
