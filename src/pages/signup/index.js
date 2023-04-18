import { Link } from "react-router-dom";
import SVG_BG from "../home/assets/svg-bg";
import "./css/main.css";
import Button from "../../components/button";
import Input_Text from "../../components/input";

const Signup = () => {
  return (
    <div className="signup_main fade-on-load">
      <form noValidate>
        <h1>Register</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "98.5%",
            transform: "translateX(-0.9%)",
          }}
        >
          <span style={{ width: "55%" }}>
            <Input_Text name={"first_name"} value={"First Name"} />
          </span>
          <span style={{ width: "42%" }}>
            <Input_Text name={"last_name"} value={"Last Name"} />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "98.5%",
            transform: "translateX(-0.9%)",
          }}
        >
          <span style={{ width: "48.5%" }}>
            <Input_Text name={"phone"} value={"Phone Number"} type={"number"} />
          </span>
          <span style={{ width: "48.5%" }}>
            <Input_Text name={"date"} value={"Date of Wedding"} type={"date"} />
          </span>
        </div>
        {/* <Input_Text name={"phone"} value={"Phone Number"} type={"number"} /> */}
        <Input_Text name={"email"} value={"Email"} type={"email"} />
        {/* <Input_Text name={"date"} value={"Date"} type={"date"} /> */}
        <Input_Text
          name={"location"}
          value={"Location of Wedding"}
          type={"textarea"}
        />
        <small
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            color: "#fff",
          }}
        >
          By register,you will confirm our{" "}
          <strong style={{ color: "var(--baby-pink)", margin: "0 10px" }}>
            {" "}
            Terms and condtions
          </strong>
        </small>
        <span
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Button text={"Register"} link={""} />
        </span>
      </form>
    </div>
  );
};

export default Signup;
