import "./input.css";

const Input_Text = ({ name1, value, type }) => {
  return (
    <div className="input_text_com">
      <label htmlFor={name1}>{value}</label>
      {type && type === "textarea" && <textarea rows={5} />}
      {type !== "textarea" && (
        <input type={type ? type : "text"} name={name1} />
      )}
    </div>
  );
};

export default Input_Text;
