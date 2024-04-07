import "./Button.scss";
import btnLoading from '../../img/btnLoading.svg'

const Button = ({
  type = "button",
  color = "",
  fullWidth = false,
  isLoading = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn--${color} ${fullWidth ? "btn--full-width" : ""}`}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <img src={btnLoading}/> : children}
    </button>
  );
};

export default Button;
