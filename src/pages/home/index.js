import { Link } from "react-router-dom";
import SVG_BG from "./assets/svg-bg";
import "./css/main.css";
import Button from "../../components/button";
import Modal from "../../components/modal";
import { useState } from "react";
import Radio from "../../components/radio";
import { vendors } from "../../constants/vendors";

const Home = () => {
  const [isOpen, onClose] = useState(false);
  return (
    <>
      <Modal
        title={"Select Vendor.."}
        Child={Child}
        isOpen={isOpen}
        onClose={onClose}
      />
      <div className="home_main">
        <div className="home_content">
          <span onClick={() => onClose(true)}>
            <Button text="Register" link="" />
          </span>
          <span>
            <Button text="Signin" link="/signin" />
          </span>
        </div>
        <div className="home_bottom">
          <SVG_BG />
        </div>
      </div>
    </>
  );
};

export default Home;

const Child = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {vendors?.map((v, i) => {
          return (
            <Radio
              checked={v.id === 1 ? true : false}
              id={v.id}
              title={v.title}
              setActive={setActive}
              active={active}
            />
          );
        })}
      </div>
    </>
  );
};
