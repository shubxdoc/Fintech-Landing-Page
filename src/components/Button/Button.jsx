import "./button.css";

const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex absolute-center button-wrapper ${customClass}`}
      >
        {prefix} {buttonText}
      </div>
    </>
  );
};

export default Button;
