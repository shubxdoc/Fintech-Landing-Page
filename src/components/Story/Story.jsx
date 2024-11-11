import "./story.css";

const CredStory = () => {
  return (
    <div className="cred-story flex absolute-center">
      <div className="container flex story-wrapper">
        <div className="flex cred-story-heading-wrapper">
          <div className="cred-story-heading">
            the story of MintFin begins with trust.
          </div>
        </div>
        <div className="cred-story-detail">
          <div className="cred-story-para">
            The goal was very simple. It was to create a platform where life
            could be made better and systematic. Therefore, creating a flywheel
            effect for more people was important to improve the scores.
          </div>
          <div className="cred-story-para">
            Everybody, starting from the startups to the government, has focused
            on the masses. The founder of the company wanted to focus
            specifically on the people, the responsible citizens who pay taxes
            timely. He felt that nobody had solved their problems earlier.
          </div>
          <div className="cred-story-para">
            Therefore, MintFin was founded primarily to solve the problems of
            the taxpayers and reward them with attractive rewards in return.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredStory;
