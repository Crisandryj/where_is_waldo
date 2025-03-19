import React from "react";
import TargetBox from "./TargetBox";
import waldoImage from "../../assets/images/wheres_waldo_img.jpeg";
import Char1 from "../../assets/images/Char1.png";
import Char2 from "../../assets/images/Char2.png";
import Char3 from "../../assets/images/Char3.png";
import ButtonComponent from "./ButtonComponent";
import { useState, useEffect } from "react";

const App = () => {
  const [showTarget, setShowTarget] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [charsPos, setCharsPos] = useState({});

  const handleCharOneClick = (e) => {
    e.preventDefault();
    if (showTarget != "Character1") {
      setShowTarget("Character1");
    } else {
      setShowTarget(null);
    }
  };

  const handleCharTwoClick = () => {
    if (showTarget != "Character2") {
      setShowTarget("Character2");
    } else {
      setShowTarget(null);
    }
  };

  const handleCharThreeClick = () => {
    if (showTarget != "Character3") {
      setShowTarget("Character3");
    } else {
      setShowTarget(null);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/characters", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setCharsPos(response))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmission = () => {
    console.log(charsPos);
    switch (showTarget) {
      case "Character1":
        break;
      case "Character2":
        break;
      case "Character3":
        break;
      default:
    }
  };

  const styles = {
    display: "inline-block",
    position: "relative",
  };

  const btnStyle = {
    border: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    position: "absolute",
    left: "10px",
    top: "55px",
  };

  if (showTarget !== null) {
    return (
      <div style={styles}>
        <TargetBox position={position} setPosition={setPosition} />
        <img src={waldoImage} alt="" />

        <div style={btnStyle}>
          <ButtonComponent
            HandleClick={handleSubmission}
            text={"Submit"}
            src={Char1}
            type={"button"}
          />
          <ButtonComponent
            HandleClick={handleCharOneClick}
            text={Char1}
            src={Char1}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharTwoClick}
            text={Char2}
            src={Char2}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharThreeClick}
            text={Char3}
            src={Char3}
            type={"image"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles}>
        <img src={waldoImage} alt="Where's Waldo?" />

        <div style={btnStyle}>
          <ButtonComponent
            HandleClick={handleCharOneClick}
            text={Char1}
            src={Char1}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharTwoClick}
            text={Char2}
            src={Char2}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharThreeClick}
            text={Char3}
            src={Char3}
            type={"image"}
          />
        </div>
      </div>
    );
  }
};

export default App;
