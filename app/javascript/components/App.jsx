import React from "react";
import TargetBox from "./TargetBox";
import waldoImage from "../../assets/images/wheres_waldo_img.jpeg";
import Char1 from "../../assets/images/Char1.png";
import Char2 from "../../assets/images/Char2.png";
import Char3 from "../../assets/images/Char3.png";
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";

const App = () => {
  const [showTarget, setShowTarget] = useState(null);

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
    top: "15px",
  };

  if (showTarget !== null) {
    return (
      <div style={styles}>
        <TargetBox />
        <img src={waldoImage} alt="" />
        <div style={btnStyle}>
          <ButtonComponent HandleClick={handleCharOneClick} text={Char1} />
          <ButtonComponent HandleClick={handleCharTwoClick} text={Char2} />
          <ButtonComponent HandleClick={handleCharThreeClick} text={Char3} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles}>
        <img src={waldoImage} alt="Where's Waldo?" />
        <div style={btnStyle}>
          <ButtonComponent HandleClick={handleCharOneClick} text={Char1} />
          <ButtonComponent HandleClick={handleCharTwoClick} text={Char2} />
          <ButtonComponent HandleClick={handleCharThreeClick} text={Char3} />
        </div>
      </div>
    );
  }
};

export default App;
