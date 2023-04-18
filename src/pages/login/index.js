import "../signup/css/main.css";
import Button from "../../components/button";
import Input_Text from "../../components/input";

const SignIn = () => {
  return (
    <div className="signup_main fade-on-load">
      <form noValidate>
        <h1>Signin</h1>
        <Input_Text name={"email"} value={"Email"} />
        <Input_Text name={"password"} value={"Password"} />
        <small
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            color: "#fff",
          }}
        >
          By signin,you will confirm our{" "}
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
          <Button text={"Signin"} link={""} />
        </span>
      </form>
    </div>
  );
};

export default SignIn;
