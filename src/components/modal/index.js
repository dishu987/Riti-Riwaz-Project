import "./modal.css";
import { Link } from "react-router-dom";

const Modal = ({ title, Child, isOpen, onClose }) => {
  return (
    <>
      <div className={`container ${isOpen ? "open" : ""}`}>
        <div className="fade-on-load modal">
          <div className="header">
            <h1>{title}</h1>
            <span onClick={() => onClose(false)}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fill-opacity="0.01"
                ></rect>
                <path
                  d="M14 14L34 34"
                  stroke="#333"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#f3da35"
                ></path>
                <path
                  d="M14 34L34 14"
                  stroke="#333"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#f3da35"
                ></path>
              </svg>
            </span>
          </div>
          <div className="main_content">
            <Child />
          </div>
          <div className="modal_footer">
            <Link to="/signup" onClick={() => onClose(false)}>
              Proceed
            </Link>
            <Link to="" onClick={() => onClose(false)}>
              Close
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
