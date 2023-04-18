import { Link } from "react-router-dom";
import "./button.css";
const Button = ({ link, text }) => {
  return (
    <Link to={link} className="button_com">
      {text}
    </Link>
  );
};

export default Button;
