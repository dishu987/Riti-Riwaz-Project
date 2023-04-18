import "./radio.css";

const Radio = ({ title, checked, id, active, setActive }) => {
  return (
    <label
      for={id}
      className={`option wrapper ${active === id ? "active" : ""}`}
      onClick={() => setActive(id)}
    >
      <input type="radio" name="select" id={id} {...(checked ? checked : "")} />
      <span>{title}</span>
    </label>
  );
};

export default Radio;
